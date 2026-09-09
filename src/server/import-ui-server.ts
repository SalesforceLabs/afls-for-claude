/**
 * import-ui-server.ts — a single-session, localhost-only web UI for reviewing a
 * config diff and applying selected changes to a live org.
 *
 * Security model (this endpoint can write to a Salesforce org):
 *   - binds to 127.0.0.1 on an ephemeral port (never a public interface),
 *   - every request must carry an unguessable per-session token (query `t` or the
 *     `x-afls-token` header),
 *   - if an Origin header is present it must be our own origin (blocks drive-by
 *     requests from other local web pages / CSRF),
 *   - one active session at a time; a new session closes the previous server,
 *   - idle + max-lifetime timers shut the server down automatically.
 *
 * The browser fetches the (potentially large) diff over HTTP, so it never flows
 * through the chat context. Apply progress streams back as newline-delimited JSON.
 */

import http from "node:http";
import { randomBytes, timingSafeEqual } from "node:crypto";
import type { ConfigSnapshot, ExportCategory } from "../config/types.js";
import type { ConfigDiff } from "../config/config-diff.js";
import { applyConfig, type ApplyProgressEvent } from "../config/config-apply.js";
import { backupTarget, writeExport, fileStamp } from "../config/io.js";
import { renderImportSpa } from "./import-ui-page.js";

const IDLE_MS = 15 * 60 * 1000; // shut down after 15 min idle
const MAX_MS = 60 * 60 * 1000; // hard cap: 1 hour

export interface ImportUiSession {
  url: string;
  port: number;
  token: string;
  close: () => void;
}

interface StartOptions {
  targetOrg: string;
  source: ConfigSnapshot;
  diff: ConfigDiff;
  categories: ExportCategory[];
}

let active: { server: http.Server; close: () => void } | null = null;

function tokensMatch(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return timingSafeEqual(ba, bb);
}

export async function startImportUiServer(opts: StartOptions): Promise<ImportUiSession> {
  // One session at a time.
  if (active) {
    active.close();
    active = null;
  }

  const token = randomBytes(24).toString("hex");
  let applyStarted = false; // apply may run once per session

  const server = http.createServer();

  const timers: { idle?: NodeJS.Timeout; max?: NodeJS.Timeout } = {};
  const close = () => {
    if (timers.idle) clearTimeout(timers.idle);
    if (timers.max) clearTimeout(timers.max);
    server.close();
    if (active && active.server === server) active = null;
  };
  const touchIdle = () => {
    if (timers.idle) clearTimeout(timers.idle);
    timers.idle = setTimeout(close, IDLE_MS);
  };

  const originOk = (req: http.IncomingMessage, port: number): boolean => {
    const origin = req.headers.origin;
    if (!origin) return true; // non-browser or same-origin without Origin
    return origin === `http://127.0.0.1:${port}` || origin === `http://localhost:${port}`;
  };

  const authOk = (req: http.IncomingMessage, url: URL): boolean => {
    const t = url.searchParams.get("t") || (req.headers["x-afls-token"] as string) || "";
    return !!t && tokensMatch(t, token);
  };

  server.on("request", async (req, res) => {
    touchIdle();
    const port = (server.address() as { port: number }).port;
    const url = new URL(req.url || "/", `http://127.0.0.1:${port}`);

    // Auth + origin gate on everything.
    if (!originOk(req, port)) {
      res.writeHead(403).end("Forbidden origin");
      return;
    }
    if (!authOk(req, url)) {
      res.writeHead(401).end("Missing or invalid token");
      return;
    }

    // GET / — the SPA.
    if (req.method === "GET" && url.pathname === "/") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(renderImportSpa(token, opts.targetOrg, opts.source.sourceOrg));
      return;
    }

    // GET /diff — the structured diff JSON.
    if (req.method === "GET" && url.pathname === "/diff") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(opts.diff));
      return;
    }

    // POST /apply — run selected changes, stream NDJSON progress.
    if (req.method === "POST" && url.pathname === "/apply") {
      if (applyStarted) {
        res.writeHead(409, { "content-type": "application/json" });
        res.end(
          JSON.stringify({
            error: "Apply already ran for this session. Re-run import_config to start a new one.",
          })
        );
        return;
      }
      applyStarted = true;

      const chunks: Buffer[] = [];
      req.on("data", (c) => chunks.push(c as Buffer));
      req.on("end", async () => {
        let selection: string[] = [];
        try {
          const body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
          selection = Array.isArray(body.selection) ? body.selection : [];
        } catch {
          res.writeHead(400, { "content-type": "application/json" });
          res.end(JSON.stringify({ error: "Invalid JSON body" }));
          return;
        }

        res.writeHead(200, { "content-type": "application/x-ndjson", "cache-control": "no-cache" });
        const send = (obj: unknown) => res.write(JSON.stringify(obj) + "\n");

        try {
          // Auto-backup the target before the first write.
          const backup = await backupTarget(opts.targetOrg, opts.categories);
          send({ type: "backup", path: backup.path });

          const onProgress = (e: ApplyProgressEvent) => send({ type: "progress", ...e });
          const result = await applyConfig({
            targetOrg: opts.targetOrg,
            source: opts.source,
            diff: opts.diff,
            selection,
            onProgress,
          });

          const safeOrg = opts.targetOrg.replace(/[^a-zA-Z0-9._-]/g, "_");
          const resultPath = await writeExport(
            `import-result-${safeOrg}-${fileStamp(result.appliedAt)}.json`,
            result
          );
          send({ type: "done", result, resultPath, backupPath: backup.path });
        } catch (err) {
          send({ type: "error", message: err instanceof Error ? err.message : String(err) });
        } finally {
          res.end();
          touchIdle();
        }
      });
      return;
    }

    res.writeHead(404).end("Not found");
  });

  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = (server.address() as { port: number }).port;

  timers.idle = setTimeout(close, IDLE_MS);
  timers.max = setTimeout(close, MAX_MS);
  active = { server, close };

  return {
    url: `http://127.0.0.1:${port}/?t=${token}`,
    port,
    token,
    close,
  };
}

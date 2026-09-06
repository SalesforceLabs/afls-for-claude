import { describe, it, expect, afterEach } from "vitest";
import { startImportUiServer, type ImportUiSession } from "../src/server/import-ui-server.js";
import { computeConfigDiff } from "../src/config/config-diff.js";
import type { ConfigSnapshot } from "../src/config/types.js";

function snap(over: Partial<ConfigSnapshot>): ConfigSnapshot {
  return { exportedAt: "2026-01-01T00:00:00Z", sourceOrg: "src-org", version: "1.1", ...over };
}

let session: ImportUiSession | null = null;
afterEach(() => {
  session?.close();
  session = null;
});

async function start() {
  const source = snap({
    sourceOrg: "src-org",
    dbSchema: [{ category: "DbSchema", developerName: "DbSchema_Visit", label: "Visit", isActive: true, isOrgLevel: false, fields: { SObject: "Visit" }, fieldTypes: { SObject: "OBJECT" }, assignments: [] }],
  });
  const target = snap({ sourceOrg: "tgt-org", dbSchema: [] });
  const diff = computeConfigDiff(source, target);
  session = await startImportUiServer({ targetOrg: "tgt-org", source, diff, categories: ["db_schema"] });
  return session;
}

describe("import-ui-server", () => {
  it("serves the SPA on / with a valid token", async () => {
    const s = await start();
    const res = await fetch(s.url);
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain("AFLS Configuration Import");
    expect(html).toContain("src-org");
  });

  it("rejects requests without a token (401)", async () => {
    const s = await start();
    const res = await fetch(`http://127.0.0.1:${s.port}/diff`);
    expect(res.status).toBe(401);
  });

  it("returns the structured diff JSON with a valid token", async () => {
    const s = await start();
    const res = await fetch(`http://127.0.0.1:${s.port}/diff?t=${s.token}`);
    expect(res.status).toBe(200);
    const diff = await res.json();
    expect(diff.records).toHaveLength(1);
    expect(diff.records[0].status).toBe("NEW");
  });

  it("rejects a foreign Origin header (403)", async () => {
    const s = await start();
    const res = await fetch(`http://127.0.0.1:${s.port}/diff?t=${s.token}`, {
      headers: { origin: "http://evil.example.com" },
    });
    expect(res.status).toBe(403);
  });

  it("closes cleanly (port no longer accepts connections)", async () => {
    const s = await start();
    const port = s.port;
    s.close();
    session = null;
    await expect(fetch(`http://127.0.0.1:${port}/diff?t=${s.token}`)).rejects.toBeTruthy();
  });
});

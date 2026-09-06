/**
 * File I/O for config snapshots — loading a source snapshot, and writing
 * backups / apply-results into the gitignored `exports/` directory.
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import type { ConfigSnapshot } from "./types.js";
import { collectConfig } from "./collect.js";
import type { ExportCategory } from "./types.js";

/** Resolve the exports directory (override with AFLS_EXPORTS_DIR; else <cwd>/exports). */
export function exportsDir(): string {
  return process.env.AFLS_EXPORTS_DIR || path.resolve(process.cwd(), "exports");
}

async function ensureExportsDir(): Promise<string> {
  const dir = exportsDir();
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  return dir;
}

/** A safe timestamp suffix for filenames (no colons). */
export function fileStamp(iso?: string): string {
  const s = iso || new Date().toISOString();
  return s.replace(/[:.]/g, "-");
}

/**
 * Load a source snapshot from one of:
 *   - inline JSON (a string starting with '{')
 *   - a file path (absolute, or relative to cwd / the exports dir)
 */
export async function loadSnapshotFromSource(source: string): Promise<ConfigSnapshot> {
  const trimmed = source.trim();
  if (trimmed.startsWith("{")) {
    return JSON.parse(trimmed) as ConfigSnapshot;
  }

  const candidates = [
    path.resolve(trimmed),
    path.resolve(process.cwd(), trimmed),
    path.resolve(exportsDir(), trimmed),
  ];
  for (const p of candidates) {
    if (existsSync(p)) {
      return JSON.parse(await readFile(p, "utf8")) as ConfigSnapshot;
    }
  }
  throw new Error(`Snapshot source not found: '${source}' (tried ${candidates.join(", ")})`);
}

/** Write a JSON payload into the exports dir; returns the absolute path. */
export async function writeExport(filename: string, data: unknown): Promise<string> {
  const dir = await ensureExportsDir();
  const p = path.join(dir, filename);
  await writeFile(p, JSON.stringify(data, null, 2), "utf8");
  return p;
}

/**
 * Snapshot the target org (for the affected categories) and save it as a backup
 * before any apply. Returns the backup file path.
 */
export async function backupTarget(
  targetOrg: string,
  categories: ExportCategory[],
): Promise<{ path: string; snapshot: ConfigSnapshot }> {
  const snapshot = await collectConfig(targetOrg, categories);
  const safeOrg = targetOrg.replace(/[^a-zA-Z0-9._-]/g, "_");
  const filename = `backup-${safeOrg}-${fileStamp(snapshot.exportedAt)}.json`;
  const p = await writeExport(filename, snapshot);
  return { path: p, snapshot };
}

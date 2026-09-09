import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { validateOrgConnection } from "../salesforce/auth.js";
import { collectConfig } from "../config/collect.js";
import { computeConfigDiff, type ConfigDiff, type RecordDiff } from "../config/config-diff.js";
import { applyConfig } from "../config/config-apply.js";
import { loadSnapshotFromSource, backupTarget, writeExport, fileStamp } from "../config/io.js";
import { startImportUiServer } from "../server/import-ui-server.js";
import type { ConfigSnapshot, ExportCategory } from "../config/types.js";

/** Which export categories a snapshot actually contains. */
function categoriesInSnapshot(s: ConfigSnapshot): ExportCategory[] {
  const cats: ExportCategory[] = [];
  if (Array.isArray(s.triggerHandlers)) cats.push("trigger_handlers");
  if (Array.isArray(s.adminSettings)) cats.push("admin_settings");
  if (Array.isArray(s.dbSchema)) cats.push("db_schema");
  if (Array.isArray(s.actions)) cats.push("actions");
  return cats.length ? cats : ["trigger_handlers", "admin_settings", "db_schema", "actions"];
}

function groupOf(r: RecordDiff): string {
  if (r.kind === "triggerHandler") return "Trigger Handlers";
  if (r.category === "DbSchema") return "DB Schema";
  if (r.category === "QuickAction" || r.category === "CustomAction") return "Actions";
  return "Admin Settings";
}

export function register(server: McpServer) {
  server.tool(
    "export_config",
    "Export AFLS configuration (Admin Console settings, DB Schema, trigger handlers, actions) as JSON. Captures per-field DataType and profile assignments (format v1.1) so the snapshot can be faithfully re-applied with import_config. Use this to snapshot org configuration for comparison, migration, or backup.",
    {
      targetOrg: z
        .string()
        .optional()
        .describe(
          "Optional: specific org to export from. Uses current target org if not specified."
        ),
      categories: z
        .array(z.enum(["trigger_handlers", "admin_settings", "db_schema", "actions"]))
        .optional()
        .describe("Optional: which categories to export. Defaults to all."),
    },
    async ({ targetOrg, categories }) => {
      const validation = await validateOrgConnection();
      const effectiveOrg = targetOrg || validation.targetOrg;
      if (!effectiveOrg) {
        return {
          content: [
            {
              type: "text",
              text: `# Cannot Export Configuration\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
            },
          ],
        };
      }

      const exportCategories = (categories || [
        "trigger_handlers",
        "admin_settings",
        "db_schema",
        "actions",
      ]) as ExportCategory[];
      const snapshot = await collectConfig(effectiveOrg, exportCategories);
      const json = JSON.stringify(snapshot, null, 2);

      return {
        content: [
          {
            type: "text",
            text: `# AFLS Configuration Export\n\n**Org:** ${effectiveOrg}\n**Exported:** ${snapshot.exportedAt}\n**Format:** v${snapshot.version}\n**Categories:** ${exportCategories.join(", ")}\n\n\`\`\`json\n${json}\n\`\`\`\n\nSave this JSON (see /afls:export-config for the exports/ convention) and use \`import_config\` to review + apply it to another org.`,
          },
        ],
      };
    }
  );

  server.tool(
    "import_config",
    "Import AFLS configuration from a snapshot into a target org, diff-driven and create + update-only (safe). Modes: 'report' (default) computes a diff and summarizes what would change; 'ui' opens a local browser review-and-apply UI on 127.0.0.1 with per-record checkboxes and live progress; 'apply' applies a specific selection headlessly. The target org is auto-backed-up to exports/ before any write. Never deletes or deactivates records that exist only in the target.",
    {
      source: z
        .string()
        .optional()
        .describe(
          "Source snapshot: inline JSON, or a path to an exports/*.json file. Omit to snapshot a live source org instead (see sourceOrg)."
        ),
      sourceOrg: z
        .string()
        .optional()
        .describe("Optional: snapshot this live org as the source instead of passing a file/JSON."),
      targetOrg: z
        .string()
        .optional()
        .describe("Target org to import into. Uses the current target org if not specified."),
      mode: z
        .enum(["report", "ui", "apply"])
        .optional()
        .describe(
          "report (default): diff summary. ui: open the local review/apply web UI. apply: apply the given selection."
        ),
      selection: z
        .array(z.string())
        .optional()
        .describe(
          "For mode 'apply': record keys to apply (as shown in the report/UI, e.g. 'record:DbSchema_Visit')."
        ),
    },
    async ({ source, sourceOrg, targetOrg, mode = "report", selection }) => {
      const validation = await validateOrgConnection();
      const effectiveTarget = targetOrg || validation.targetOrg;
      if (!effectiveTarget) {
        return {
          content: [
            {
              type: "text",
              text: `# Cannot Import Configuration\n\n${validation.error}\n\nConnect to a Salesforce org first.`,
            },
          ],
        };
      }

      // Resolve the source snapshot.
      let sourceSnapshot: ConfigSnapshot;
      try {
        if (source) {
          sourceSnapshot = await loadSnapshotFromSource(source);
        } else if (sourceOrg) {
          sourceSnapshot = await collectConfig(sourceOrg);
        } else {
          return {
            content: [
              {
                type: "text",
                text: "# Import Error\n\nProvide a `source` (file path or JSON) or a `sourceOrg` to snapshot.",
              },
            ],
          };
        }
      } catch (err) {
        return {
          content: [
            {
              type: "text",
              text: `# Import Error\n\nCould not load source snapshot: ${err instanceof Error ? err.message : String(err)}`,
            },
          ],
        };
      }

      if (sourceOrg && sourceOrg === effectiveTarget) {
        return {
          content: [
            { type: "text", text: "# Import Error\n\nSource and target org are the same." },
          ],
        };
      }

      const categories = categoriesInSnapshot(sourceSnapshot);

      // Collect the target's current state and compute the diff.
      const targetSnapshot = await collectConfig(effectiveTarget, categories);
      const diff = computeConfigDiff(sourceSnapshot, targetSnapshot);

      if (mode === "ui") {
        try {
          const session = await startImportUiServer({
            targetOrg: effectiveTarget,
            source: sourceSnapshot,
            diff,
            categories,
          });
          return {
            content: [
              {
                type: "text",
                text: uiMessage(session.url, diff, effectiveTarget),
              },
            ],
          };
        } catch (err) {
          return {
            content: [
              {
                type: "text",
                text: `# Could Not Start Import UI\n\n${err instanceof Error ? err.message : String(err)}\n\nUse \`mode: "report"\` to see the diff, or \`mode: "apply"\` with a selection.`,
              },
            ],
          };
        }
      }

      if (mode === "apply") {
        const sel = selection || [];
        if (!sel.length) {
          return {
            content: [
              {
                type: "text",
                text: "# Nothing to Apply\n\nmode 'apply' requires a non-empty `selection`. Run mode 'report' or 'ui' first to choose record keys.",
              },
            ],
          };
        }
        const backup = await backupTarget(effectiveTarget, categories);
        const result = await applyConfig({
          targetOrg: effectiveTarget,
          source: sourceSnapshot,
          diff,
          selection: sel,
        });
        const safeOrg = effectiveTarget.replace(/[^a-zA-Z0-9._-]/g, "_");
        const resultPath = await writeExport(
          `import-result-${safeOrg}-${fileStamp(result.appliedAt)}.json`,
          result
        );
        return { content: [{ type: "text", text: applyMessage(result, backup.path, resultPath) }] };
      }

      // mode === "report"
      const safeOrg = effectiveTarget.replace(/[^a-zA-Z0-9._-]/g, "_");
      const diffPath = await writeExport(
        `import-diff-${safeOrg}-${fileStamp(diff.generatedAt)}.json`,
        diff
      );
      return { content: [{ type: "text", text: reportMessage(diff, effectiveTarget, diffPath) }] };
    }
  );
}

function uiMessage(url: string, diff: ConfigDiff, target: string): string {
  const c = diff.counts;
  return `# Import Review UI Started\n\n**Open in your browser:** ${url}\n\nReviewing **${diff.sourceOrg} → ${target}** — ${c.new} new, ${c.changed} changed, ${c.identical} identical, ${c.targetOnly} only-in-target.\n\nIn the UI you can filter, inspect each field change, check the records to apply, and click **Apply selected**. The target org is backed up to \`exports/\` before anything is written, and only create/update changes are made — nothing is deleted or deactivated.\n\n_The server is local (127.0.0.1), single-session, token-protected, and shuts down after it goes idle._`;
}

function reportMessage(diff: ConfigDiff, target: string, diffPath: string): string {
  const c = diff.counts;
  let m = `# Import Diff Report\n\n**${diff.sourceOrg} → ${target}**\n\n`;
  m += `| Status | Count |\n|--------|-------|\n`;
  m += `| 🟢 New (will create) | ${c.new} |\n| 🟡 Changed (will update) | ${c.changed} |\n| ⚪ Identical | ${c.identical} |\n| 🟣 Only in target (untouched) | ${c.targetOnly} |\n\n`;

  const actionable = diff.records.filter(
    (r) => (r.status === "NEW" || r.status === "CHANGED") && r.applicable
  );
  if (!actionable.length) {
    m += `**✅ Target is already in sync** for the exported categories — nothing to apply.\n`;
  } else {
    const byGroup = new Map<string, RecordDiff[]>();
    for (const r of actionable) {
      const g = groupOf(r);
      if (!byGroup.has(g)) byGroup.set(g, []);
      byGroup.get(g)!.push(r);
    }
    m += `## Changes to apply (${actionable.length})\n\n`;
    for (const [g, recs] of [...byGroup.entries()].sort()) {
      m += `### ${g}\n\n`;
      for (const r of recs.sort((a, b) => a.developerName.localeCompare(b.developerName))) {
        const changes: string[] = [];
        if (r.activeChange) changes.push(`IsActive ${r.activeChange.from} → ${r.activeChange.to}`);
        const fc = r.fieldDiffs.filter((f) => f.willApply).length;
        if (fc) changes.push(`${fc} field${fc > 1 ? "s" : ""}`);
        if (r.assignmentDiff.added.length)
          changes.push(`+${r.assignmentDiff.added.length} assignment(s)`);
        m += `- **${r.developerName}** \`${r.status}\` — ${changes.join(", ") || "create"} · key: \`${r.key}\`\n`;
      }
      m += `\n`;
    }
    m += `## Apply\n\n- **Interactive:** re-run with \`mode: "ui"\` to review and apply in a browser.\n`;
    m += `- **Headless:** re-run with \`mode: "apply"\` and a \`selection\` of the record keys above.\n`;
  }
  m += `\n_Full structured diff saved to \`${diffPath}\`._\n`;
  return m;
}

function applyMessage(
  result: {
    applied: number;
    failed: number;
    skipped: number;
    items: Array<{
      developerName: string;
      action: string;
      ok: boolean;
      message?: string;
      warnings?: string[];
    }>;
  },
  backupPath: string,
  resultPath: string
): string {
  let m = `# Import Applied\n\n`;
  m += `**${result.applied} applied · ${result.failed} failed · ${result.skipped} skipped**\n\n`;
  m += `_Target backed up to \`${backupPath}\` before applying._\n\n`;
  const failures = result.items.filter((i) => !i.ok);
  if (failures.length) {
    m += `## Failures\n\n`;
    for (const f of failures)
      m += `- **${f.developerName}** (${f.action}): ${f.message || "unknown error"}\n`;
    m += `\n`;
  }
  const withWarnings = result.items.filter((i) => i.warnings && i.warnings.length);
  if (withWarnings.length) {
    m += `## Warnings\n\n`;
    for (const w of withWarnings) m += `- **${w.developerName}**: ${w.warnings!.join("; ")}\n`;
    m += `\n`;
  }
  m += `_Full result saved to \`${resultPath}\`. Re-run \`import_config\` (report mode) or \`diff_orgs\` to verify._\n`;
  return m;
}

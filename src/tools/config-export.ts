import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  runSoqlQuery,
  runToolingQuery,
} from "../salesforce/cli.js";
import { validateOrgConnection } from "../salesforce/auth.js";
import { queryFieldValues, queryAssignments, extractFieldValue } from "./helpers.js";

export function register(server: McpServer) {
server.tool(
  "export_config",
  "Export AFLS configuration (Admin Console settings, DB Schema, trigger handlers, actions) as JSON. Use this to snapshot org configuration for comparison, migration, or backup.",
  {
    targetOrg: z.string().optional().describe("Optional: specific org to export from. Uses current target org if not specified."),
    categories: z.array(z.enum(["trigger_handlers", "admin_settings", "db_schema", "actions"])).optional().describe("Optional: which categories to export. Defaults to all."),
  },
  async ({ targetOrg, categories }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{
          type: "text",
          text: `# Cannot Export Configuration\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
        }],
      };
    }

    const exportCategories = categories || ["trigger_handlers", "admin_settings", "db_schema", "actions"];
    const config: Record<string, unknown> = {
      exportedAt: new Date().toISOString(),
      sourceOrg: effectiveOrg,
      version: "1.0",
    };

    // 1. Trigger Handlers
    if (exportCategories.includes("trigger_handlers")) {
      const query = `SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeScienceTriggerHandler ORDER BY DeveloperName`;
      const result = await runToolingQuery(query, effectiveOrg);
      const handlers: Array<Record<string, unknown>> = [];

      if (result.success && result.data?.records) {
        for (const r of result.data.records) {
          const h = r as Record<string, unknown>;
          handlers.push({
            developerName: h.DeveloperName,
            label: h.MasterLabel,
            isActive: h.IsActive,
          });
        }
      }
      config.triggerHandlers = handlers;
    }

    // 2. Admin Settings
    if (exportCategories.includes("admin_settings")) {
      const catQuery = `SELECT Id, DeveloperName, MasterLabel FROM LifeSciConfigCategory WHERE DeveloperName != 'DbSchema' ORDER BY DeveloperName`;
      const catResult = await runToolingQuery(catQuery, effectiveOrg);
      const settings: Array<Record<string, unknown>> = [];

      if (catResult.success && catResult.data?.records) {
        const catRecords = catResult.data.records as Array<Record<string, unknown>>;
        for (const cat of catRecords) {
          const recQuery = `SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeSciConfigRecord WHERE LifeSciConfigCategoryId = '${cat.Id}' ORDER BY DeveloperName`;
          const recResult = await runToolingQuery(recQuery, effectiveOrg);

          if (recResult.success && recResult.data?.records?.length) {
            const recordIds = (recResult.data.records as Array<Record<string, unknown>>).map((r) => r.Id as string);
            const { fieldValuesByRecord } = await queryFieldValues(recordIds, effectiveOrg, true);

            for (const rec of recResult.data.records as Array<Record<string, unknown>>) {
              const fields: Record<string, unknown> = {};
              const fvs = fieldValuesByRecord.get(rec.Id as string) || [];
              for (const fv of fvs) {
                fields[fv.FieldName as string] = extractFieldValue(fv);
              }

              settings.push({
                category: cat.DeveloperName,
                developerName: rec.DeveloperName,
                label: rec.MasterLabel,
                isActive: rec.IsActive,
                fields,
              });
            }
          }
        }
      }
      config.adminSettings = settings;
    }

    // 3. DB Schema
    if (exportCategories.includes("db_schema")) {
      const dbCatQuery = `SELECT Id FROM LifeSciConfigCategory WHERE DeveloperName = 'DbSchema'`;
      const dbCatResult = await runToolingQuery(dbCatQuery, effectiveOrg);
      const dbSchemaRecords: Array<Record<string, unknown>> = [];

      if (dbCatResult.success && dbCatResult.data?.records?.length) {
        const dbCatId = (dbCatResult.data.records[0] as Record<string, unknown>).Id;
        const recQuery = `SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeSciConfigRecord WHERE LifeSciConfigCategoryId = '${dbCatId}' ORDER BY DeveloperName`;
        const recResult = await runToolingQuery(recQuery, effectiveOrg);

        if (recResult.success && recResult.data?.records?.length) {
          const recordIds = (recResult.data.records as Array<Record<string, unknown>>).map((r) => r.Id as string);
          const { fieldValuesByRecord } = await queryFieldValues(recordIds, effectiveOrg, true);
          const assignmentMap = await queryAssignments(recordIds, effectiveOrg);

          for (const rec of recResult.data.records as Array<Record<string, unknown>>) {
            const fields: Record<string, unknown> = {};
            const fvs = fieldValuesByRecord.get(rec.Id as string) || [];
            for (const fv of fvs) {
              fields[fv.FieldName as string] = extractFieldValue(fv);
            }

            const assignments = assignmentMap.get(rec.Id as string) || [];

            dbSchemaRecords.push({
              developerName: rec.DeveloperName,
              label: rec.MasterLabel,
              isActive: rec.IsActive,
              fields,
              assignments: assignments.map((a) => ({ name: a.name, level: a.level })),
            });
          }
        }
      }
      config.dbSchema = dbSchemaRecords;
    }

    // 4. Actions
    if (exportCategories.includes("actions")) {
      const actionsQuery = `SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeSciConfigRecord WHERE LifeSciConfigCategoryId IN (SELECT Id FROM LifeSciConfigCategory WHERE DeveloperName IN ('QuickAction', 'CustomAction')) ORDER BY DeveloperName`;
      const actionsResult = await runToolingQuery(actionsQuery, effectiveOrg);
      const actions: Array<Record<string, unknown>> = [];

      if (actionsResult.success && actionsResult.data?.records?.length) {
        const recordIds = (actionsResult.data.records as Array<Record<string, unknown>>).map((r) => r.Id as string);
        const { fieldValuesByRecord } = await queryFieldValues(recordIds, effectiveOrg, true);
        const assignmentMap = await queryAssignments(recordIds, effectiveOrg);

        for (const rec of actionsResult.data.records as Array<Record<string, unknown>>) {
          const fields: Record<string, unknown> = {};
          const fvs = fieldValuesByRecord.get(rec.Id as string) || [];
          for (const fv of fvs) {
            fields[fv.FieldName as string] = extractFieldValue(fv);
          }

          const assignments = assignmentMap.get(rec.Id as string) || [];

          actions.push({
            developerName: rec.DeveloperName,
            label: rec.MasterLabel,
            isActive: rec.IsActive,
            fields,
            assignments: assignments.map((a) => ({ name: a.name, level: a.level })),
          });
        }
      }
      config.actions = actions;
    }

    const json = JSON.stringify(config, null, 2);

    return {
      content: [{
        type: "text",
        text: `# AFLS Configuration Export\n\n**Org:** ${effectiveOrg}\n**Exported:** ${config.exportedAt}\n**Categories:** ${exportCategories.join(", ")}\n\n\`\`\`json\n${json}\n\`\`\`\n\nYou can save this JSON and use \`import_config\` to apply it to another org.`,
      }],
    };
  }
);

server.tool(
  "import_config",
  "Import AFLS configuration from a JSON export. Applies trigger handler states, Admin Console settings, and DB Schema records to the target org. Use with caution — this modifies org configuration.",
  {
    configJson: z.string().describe("The JSON configuration string from export_config"),
    targetOrg: z.string().optional().describe("Optional: specific org to import into. Uses current target org if not specified."),
    dryRun: z.boolean().optional().describe("If true, preview changes without applying them. Default: true."),
  },
  async ({ configJson, targetOrg, dryRun = true }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{
          type: "text",
          text: `# Cannot Import Configuration\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
        }],
      };
    }

    let config: Record<string, unknown>;
    try {
      config = JSON.parse(configJson);
    } catch {
      return {
        content: [{
          type: "text",
          text: "# Import Error\n\nInvalid JSON. Please provide a valid configuration export.",
        }],
      };
    }

    const changes: string[] = [];

    // Preview trigger handler changes
    if (config.triggerHandlers && Array.isArray(config.triggerHandlers)) {
      const handlers = config.triggerHandlers as Array<Record<string, unknown>>;
      changes.push(`## Trigger Handlers (${handlers.length} records)`);
      for (const h of handlers) {
        changes.push(`- ${h.developerName}: ${h.isActive ? "Active" : "Inactive"}`);
      }
    }

    if (config.dbSchema && Array.isArray(config.dbSchema)) {
      const dbSchema = config.dbSchema as Array<Record<string, unknown>>;
      changes.push(`\n## DB Schema (${dbSchema.length} records)`);
      for (const d of dbSchema) {
        changes.push(`- ${d.developerName}: ${d.isActive ? "Active" : "Inactive"}`);
      }
    }

    if (config.adminSettings && Array.isArray(config.adminSettings)) {
      const settings = config.adminSettings as Array<Record<string, unknown>>;
      changes.push(`\n## Admin Settings (${settings.length} records)`);
      for (const s of settings) {
        changes.push(`- [${s.category}] ${s.developerName}`);
      }
    }

    let report = `# AFLS Configuration Import Preview\n\n**Target Org:** ${effectiveOrg}\n**Source Org:** ${config.sourceOrg || "unknown"}\n**Mode:** ${dryRun ? "DRY RUN (preview only)" : "LIVE — changes will be applied"}\n\n`;
    report += changes.join("\n");

    if (dryRun) {
      report += "\n\n---\n\n*This is a preview. To apply changes, run `import_config` with `dryRun: false`.*";
    } else {
      report += "\n\n---\n\n*Configuration import is not yet implemented for live mode. Use the individual tools (`toggle_trigger_handler`, `update_admin_setting`, `create_db_schema`) to apply changes manually based on this preview.*";
    }

    return { content: [{ type: "text", text: report }] };
  }
);
}

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  createRecord,
  updateRecord,
} from "../salesforce/cli.js";
import { validateOrgConnection } from "../salesforce/auth.js";

export function register(server: McpServer) {
server.tool(
  "bulk_create_records",
  "Create multiple records from a JSON array. Processes records sequentially and reports results. Useful for loading seed data (products, time periods, territory assignments) without Data Loader.",
  {
    sobjectType: z.string().describe("The SObject type (e.g., 'Product2', 'TimePeriod', 'ObjectTerritory2Association')"),
    records: z.string().describe("JSON array of record objects to create. Each object contains field name/value pairs."),
    targetOrg: z.string().optional().describe("Optional: specific org. Uses current target org if not specified."),
  },
  async ({ sobjectType, records: recordsJson, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{
          type: "text",
          text: `# Cannot Create Records\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
        }],
      };
    }

    let recordsArray: Array<Record<string, unknown>>;
    try {
      recordsArray = JSON.parse(recordsJson);
      if (!Array.isArray(recordsArray)) {
        throw new Error("Expected a JSON array");
      }
    } catch (e) {
      return {
        content: [{
          type: "text",
          text: `# Invalid Input\n\nFailed to parse records JSON: ${e instanceof Error ? e.message : "Unknown error"}\n\nPlease provide a valid JSON array of record objects.`,
        }],
      };
    }

    const results: Array<{ index: number; success: boolean; id?: string; error?: string }> = [];

    for (let i = 0; i < recordsArray.length; i++) {
      const record = recordsArray[i];
      const result = await createRecord(sobjectType, record, effectiveOrg);

      if (result.success && result.data) {
        const data = result.data as Record<string, unknown>;
        results.push({ index: i, success: true, id: data.id as string || data.Id as string });
      } else {
        results.push({ index: i, success: false, error: result.error });
      }
    }

    const succeeded = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    let report = `# Bulk Create Results\n\n**Object:** ${sobjectType}\n**Total:** ${recordsArray.length}\n**Succeeded:** ${succeeded.length}\n**Failed:** ${failed.length}\n\n`;

    if (succeeded.length > 0) {
      report += `## Created Records\n\n`;
      for (const r of succeeded) {
        report += `- Record ${r.index + 1}: ${r.id}\n`;
      }
    }

    if (failed.length > 0) {
      report += `\n## Failed Records\n\n`;
      for (const r of failed) {
        report += `- Record ${r.index + 1}: ${r.error}\n`;
      }
    }

    return { content: [{ type: "text", text: report }] };
  }
);

server.tool(
  "bulk_update_records",
  "Update multiple records from a JSON array. Each record must include an 'Id' field. Processes records sequentially and reports results.",
  {
    sobjectType: z.string().describe("The SObject type (e.g., 'Account', 'Contact', 'Visit')"),
    records: z.string().describe("JSON array of record objects to update. Each must include an 'Id' field plus the fields to update."),
    targetOrg: z.string().optional().describe("Optional: specific org. Uses current target org if not specified."),
  },
  async ({ sobjectType, records: recordsJson, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{
          type: "text",
          text: `# Cannot Update Records\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
        }],
      };
    }

    let recordsArray: Array<Record<string, unknown>>;
    try {
      recordsArray = JSON.parse(recordsJson);
      if (!Array.isArray(recordsArray)) {
        throw new Error("Expected a JSON array");
      }
    } catch (e) {
      return {
        content: [{
          type: "text",
          text: `# Invalid Input\n\nFailed to parse records JSON: ${e instanceof Error ? e.message : "Unknown error"}`,
        }],
      };
    }

    const results: Array<{ index: number; success: boolean; id?: string; error?: string }> = [];

    for (let i = 0; i < recordsArray.length; i++) {
      const record = recordsArray[i];
      const recordId = (record.Id || record.id) as string;

      if (!recordId) {
        results.push({ index: i, success: false, error: "Missing 'Id' field" });
        continue;
      }

      // Remove Id from the update payload
      const updateFields = { ...record };
      delete updateFields.Id;
      delete updateFields.id;

      const result = await updateRecord(sobjectType, recordId, updateFields, effectiveOrg);
      if (result.success) {
        results.push({ index: i, success: true, id: recordId });
      } else {
        results.push({ index: i, success: false, id: recordId, error: result.error });
      }
    }

    const succeeded = results.filter((r) => r.success);
    const failed = results.filter((r) => !r.success);

    let report = `# Bulk Update Results\n\n**Object:** ${sobjectType}\n**Total:** ${recordsArray.length}\n**Succeeded:** ${succeeded.length}\n**Failed:** ${failed.length}\n\n`;

    if (failed.length > 0) {
      report += `## Failed Updates\n\n`;
      for (const r of failed) {
        report += `- Record ${r.index + 1} (${r.id || "no ID"}): ${r.error}\n`;
      }
    }

    return { content: [{ type: "text", text: report }] };
  }
);
}

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  runToolingQuery,
  cachedToolingQuery,
  createToolingRecord,
  updateToolingRecord,
} from "../salesforce/cli.js";
import { validateOrgConnection } from "../salesforce/auth.js";
import { queryFieldValues, queryAssignments, extractFieldValue, getValueColumn, resolveProfileId } from "./helpers.js";

export function register(server: McpServer) {
server.tool(
  "list_navigation_tabs",
  "List mobile navigation tabs configured in Admin Console > Mobile > UI Settings. Shows tab name, order, active status, and profile assignments.",
  {
    targetOrg: z.string().optional().describe("Optional: specific org to query"),
  },
  async ({ targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{ type: "text", text: `Cannot list navigation tabs: ${validation.error}` }],
      };
    }

    try {
      // Get UISchema category ID
      const catQuery = `SELECT Id, Category FROM LifeSciConfigCategory WHERE Category = 'UISchema' LIMIT 1`;
      const catResult = await cachedToolingQuery(catQuery, effectiveOrg);

      if (!catResult.success || !catResult.data?.records?.length) {
        // List available categories to help user understand the org state
        const allCatQuery = `SELECT Category FROM LifeSciConfigCategory ORDER BY Category`;
        const allCatResult = await cachedToolingQuery(allCatQuery, effectiveOrg);
        const available = allCatResult.success && allCatResult.data?.records?.length
          ? (allCatResult.data.records as Array<Record<string, unknown>>).map((c) => c.Category).join(", ")
          : "none found";
        return {
          content: [{ type: "text", text: `# UISchema Category Not Found\n\nNo "UISchema" category in Admin Console. Available categories: ${available}\n\nEnsure AFLS is installed and the Mobile UI Settings feature is enabled.` }],
        };
      }

      const categoryId = catResult.data.records[0].Id as string;

      // Get all config records in this category
      const recordsQuery = `SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeSciConfigRecord WHERE LifeSciConfigCategoryId = '${categoryId}' ORDER BY MasterLabel`;
      const recordsResult = await runToolingQuery(recordsQuery, effectiveOrg);

      if (!recordsResult.success) {
        return {
          content: [{ type: "text", text: `# Failed to Query UI Settings\n\n${recordsResult.error}` }],
        };
      }

      const records = recordsResult.data?.records || [];
      if (records.length === 0) {
        return {
          content: [{ type: "text", text: `# Navigation Tabs\n\nNo UI Settings records found. Use \`add_navigation_tab\` to create the first tab.` }],
        };
      }

      // Batch-fetch field values and assignments
      const recordIds = records.map((r) => (r as Record<string, unknown>).Id as string);
      const { fieldValuesByRecord, queryError: fvError } = await queryFieldValues(recordIds, effectiveOrg, true);

      if (fvError) {
        return {
          content: [{ type: "text", text: `# Failed to Query Field Values\n\nRecords found: ${records.length}, but field values query failed:\n\n${fvError}` }],
        };
      }

      const assignmentsByRecord = await queryAssignments(recordIds, effectiveOrg);

      // Filter to Tab-type records and build rows
      type TabRow = {
        id: string;
        name: string;
        label: string;
        tabName: string;
        tabOrder: number | null;
        active: boolean;
        profiles: string[];
      };

      const rows: TabRow[] = [];

      for (const record of records) {
        const r = record as Record<string, unknown>;
        const recordId = r.Id as string;
        const fieldValues = fieldValuesByRecord.get(recordId) || [];

        const getField = (name: string): unknown => {
          const fv = fieldValues.find((f) => f.FieldName === name);
          return fv ? extractFieldValue(fv) : null;
        };

        const uiType = (getField("Type") as string) || "";

        // Only include Tab-type records
        if (uiType && uiType !== "TAB") continue;

        const assignments = assignmentsByRecord.get(recordId) || [];

        rows.push({
          id: recordId,
          name: r.DeveloperName as string,
          label: r.MasterLabel as string,
          tabName: (getField("TabName") as string) || "",
          tabOrder: getField("TabOrder") as number | null,
          active: r.IsActive as boolean,
          profiles: assignments.map((a) => a.name),
        });
      }

      // Sort by TabOrder
      rows.sort((a, b) => (a.tabOrder ?? 999) - (b.tabOrder ?? 999));

      if (rows.length === 0) {
        return {
          content: [{ type: "text", text: `# Navigation Tabs\n\nNo Tab-type UI Settings records found (${records.length} total UI records exist with other types). Use \`add_navigation_tab\` to create a navigation tab.` }],
        };
      }

      let message = `# Navigation Tabs (${rows.length})\n\n`;
      message += `| Name | Label | Tab Name | Tab Order | Active | Profiles |\n`;
      message += `|------|-------|----------|-----------|--------|----------|\n`;

      for (const row of rows) {
        const profiles = row.profiles.length > 0 ? row.profiles.join(", ") : "_(none)_";
        message += `| \`${row.name}\` | ${row.label} | ${row.tabName || "_(unset)_"} | ${row.tabOrder ?? "_(unset)_"} | ${row.active ? "Yes" : "No"} | ${profiles} |\n`;
      }

      message += `\n**Total:** ${rows.length} tab(s)`;
      message += `\n\nUse \`add_navigation_tab\` to add a new tab, or \`update_admin_setting\` to modify an existing one.`;

      return {
        content: [{ type: "text", text: message }],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `# Failed to List Navigation Tabs\n\n${error instanceof Error ? error.message : String(error)}` }],
      };
    }
  }
);

// Tool: Add Navigation Tab
server.tool(
  "add_navigation_tab",
  "Add a new navigation tab to AFLS Mobile via Admin Console > Mobile > UI Settings. Creates a LifeSciConfigRecord of type Tab with field values and optional profile assignments.",
  {
    label: z.string().describe("Display name for the component (MasterLabel), e.g. 'Accounts Tab'"),
    developerName: z.string().describe("Unique API name (DeveloperName), e.g. 'NavTab_Accounts'. Convention: NavTab_{ObjectName}"),
    tabName: z.string().describe("Text shown on the tab in the mobile app, e.g. 'Accounts'"),
    tabOrder: z.number().int().describe("Position number — lower values appear further left (e.g. 1, 2, 3)"),
    profiles: z.array(z.string()).optional().describe("Optional: profile names to assign (e.g. ['Field Sales Representative'])"),
    isActive: z.boolean().optional().default(true).describe("Whether the tab is active on creation (default: true)"),
    targetOrg: z.string().optional().describe("Optional: specific org to create in"),
  },
  async ({ label, developerName, tabName, tabOrder, profiles, isActive, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{ type: "text", text: `Cannot add navigation tab: ${validation.error}` }],
      };
    }

    try {
      // Get UISchema category ID
      const catQuery = `SELECT Id FROM LifeSciConfigCategory WHERE Category = 'UISchema' LIMIT 1`;
      const catResult = await cachedToolingQuery(catQuery, effectiveOrg);

      if (!catResult.success || !catResult.data?.records?.length) {
        const allCatQuery = `SELECT Category FROM LifeSciConfigCategory ORDER BY Category`;
        const allCatResult = await cachedToolingQuery(allCatQuery, effectiveOrg);
        const available = allCatResult.success && allCatResult.data?.records?.length
          ? (allCatResult.data.records as Array<Record<string, unknown>>).map((c) => c.Category).join(", ")
          : "none found";
        return {
          content: [{ type: "text", text: `# UISchema Category Not Found\n\nNo "UISchema" category in Admin Console. Available categories: ${available}\n\nEnsure AFLS is installed and the Mobile UI Settings feature is enabled.` }],
        };
      }

      const categoryId = catResult.data.records[0].Id as string;

      // Check for duplicate DeveloperName
      const existCheck = `SELECT Id FROM LifeSciConfigRecord WHERE DeveloperName = '${developerName.replace(/'/g, "\\'")}' LIMIT 1`;
      const existResult = await runToolingQuery(existCheck, effectiveOrg);
      if (existResult.success && existResult.data?.records?.length) {
        const existingId = (existResult.data.records[0] as Record<string, unknown>).Id as string;
        return {
          content: [{ type: "text", text: `# Navigation Tab Already Exists\n\n\`${developerName}\` already exists (ID: ${existingId}). Use \`update_admin_setting\` to modify it or \`list_navigation_tabs\` to see all tabs.` }],
        };
      }

      // Create the LifeSciConfigRecord as INACTIVE first.
      // Activation fires validation that requires child field values to exist.
      const shouldActivate = isActive ?? true;
      const recordResult = await createToolingRecord(
        "LifeSciConfigRecord",
        {
          DeveloperName: developerName,
          MasterLabel: label,
          LifeSciConfigCategoryId: categoryId,
          IsActive: false,
          IsOrgLevel: false,
          Type: "TAB",
        },
        effectiveOrg
      );

      if (!recordResult.success) {
        return {
          content: [{ type: "text", text: `# Failed to Create Navigation Tab\n\n${recordResult.error}` }],
        };
      }

      const recordId = recordResult.data!.id;

      // Create child LifeSciConfigFieldValue records
      const fieldDefs: Array<{ name: string; dataType: string; value: unknown }> = [
        { name: "Type",     dataType: "PICKLIST", value: "TAB" },
        { name: "TabName",  dataType: "TEXT",     value: tabName },
        { name: "TabOrder", dataType: "NUMBER",   value: tabOrder },
      ];

      const fieldErrors: string[] = [];
      for (const field of fieldDefs) {
        const createData: Record<string, unknown> = {
          FieldName: field.name,
          LifeSciConfigRecordId: recordId,
          DataType: field.dataType,
        };
        const valueCol = getValueColumn(field.dataType);
        createData[valueCol] = field.value;

        const fieldResult = await createToolingRecord("LifeSciConfigFieldValue", createData, effectiveOrg);
        if (!fieldResult.success) {
          fieldErrors.push(`${field.name}: ${fieldResult.error}`);
        }
      }

      // Create profile assignments if specified
      const profileErrors: string[] = [];
      if (profiles && profiles.length > 0) {
        for (const profile of profiles) {
          const profileId = await resolveProfileId(profile, effectiveOrg);
          if (!profileId) {
            profileErrors.push(`${profile}: Profile not found`);
            continue;
          }

          const assignResult = await createToolingRecord(
            "LifeSciConfigAssignment",
            {
              LifeSciConfigRecordId: recordId,
              AssignedToId: profileId,
              AssignmentLevel: "Profile",
            },
            effectiveOrg
          );
          if (!assignResult.success) {
            profileErrors.push(`${profile}: ${assignResult.error}`);
          }
        }
      }

      // Activate only if field values were created without errors
      let activated = false;
      if (shouldActivate && fieldErrors.length === 0) {
        const activateResult = await updateToolingRecord(
          "LifeSciConfigRecord",
          recordId,
          { IsActive: true },
          effectiveOrg
        );

        if (!activateResult.success) {
          fieldErrors.push(`Activation: ${activateResult.error}`);
        } else {
          activated = true;
        }
      } else if (shouldActivate && fieldErrors.length > 0) {
        fieldErrors.push("Activation skipped — fix field value errors first, then activate manually via update_admin_setting");
      }

      let message = `# Navigation Tab Created\n\n`;
      message += `- **Developer Name:** \`${developerName}\`\n`;
      message += `- **Label:** ${label}\n`;
      message += `- **Tab Name:** ${tabName}\n`;
      message += `- **Tab Order:** ${tabOrder}\n`;
      message += `- **Active:** ${activated}\n`;
      message += `- **Record ID:** ${recordId}\n`;

      if (profiles && profiles.length > 0) {
        const successProfiles = profiles.length - profileErrors.length;
        message += `- **Profiles Assigned:** ${successProfiles}/${profiles.length}\n`;
      }

      if (fieldErrors.length > 0) {
        message += `\n## Field Creation Warnings\n\n`;
        for (const err of fieldErrors) {
          message += `- ${err}\n`;
        }
      }

      if (profileErrors.length > 0) {
        message += `\n## Profile Assignment Warnings\n\n`;
        for (const err of profileErrors) {
          message += `- ${err}\n`;
        }
      }

      message += `\n## Next Steps\n\n`;
      message += `1. Verify the tab appears in **Admin Console > Mobile > UI Settings**.\n`;
      message += `2. **Regenerate the mobile metadata cache** for the tab to appear in the iPad app.\n`;
      message += `   Use \`generate_mobile_metadata_cache\` with the relevant profile names.`;

      return {
        content: [{ type: "text", text: message }],
      };
    } catch (error) {
      return {
        content: [{ type: "text", text: `# Failed to Add Navigation Tab\n\n${error instanceof Error ? error.message : String(error)}` }],
      };
    }
  }
);
}


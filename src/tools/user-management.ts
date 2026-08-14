import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  runSoqlQuery,
  createRecord,
  deleteRecord,
} from "../salesforce/cli.js";
import { validateOrgConnection } from "../salesforce/auth.js";

export function register(server: McpServer) {
server.tool(
  "list_users",
  "List active AFLS users with optional filters. Filter by profile, permission set, territory, or find users without territories or PSLs. CORRECT object names: User, PermissionSetAssignment, UserTerritory2Association.",
  {
    filterBy: z.enum(["all", "profile", "permission-set", "territory", "no-territory", "no-psl"]).optional().default("all").describe("Filter type: 'all' (default), 'profile', 'permission-set', 'territory', 'no-territory' (users without territory assignments), 'no-psl' (users without AFLS PSLs)"),
    filterValue: z.string().optional().describe("Partial match value for profile, permission-set, or territory filters"),
    targetOrg: z.string().optional().describe("Optional: specific org to query. Uses current target org if not specified."),
  },
  async ({ filterBy, filterValue, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{ type: "text", text: `Cannot list users: ${validation.error}` }],
      };
    }

    try {
      let query: string;
      let title: string;

      switch (filterBy) {
        case "profile":
          if (!filterValue) {
            return { content: [{ type: "text", text: "Error: filterValue is required when filterBy is 'profile'. Provide a partial profile name." }] };
          }
          query = `SELECT Id, Name, Username, Profile.Name, UserRole.Name, IsActive FROM User WHERE IsActive = true AND Profile.Name LIKE '%${filterValue}%' ORDER BY Profile.Name, Name LIMIT 200`;
          title = `# Active Users — Profile matching "${filterValue}"`;
          break;

        case "permission-set":
          if (!filterValue) {
            return { content: [{ type: "text", text: "Error: filterValue is required when filterBy is 'permission-set'. Provide a partial permission set name or label." }] };
          }
          query = `SELECT AssigneeId, Assignee.Name, Assignee.Username, Assignee.Profile.Name, PermissionSet.Label FROM PermissionSetAssignment WHERE (PermissionSet.Label LIKE '%${filterValue}%' OR PermissionSet.Name LIKE '%${filterValue}%') AND PermissionSet.IsOwnedByProfile = false AND Assignee.IsActive = true ORDER BY Assignee.Name LIMIT 200`;
          title = `# Users with Permission Set matching "${filterValue}"`;
          break;

        case "territory":
          if (!filterValue) {
            return { content: [{ type: "text", text: "Error: filterValue is required when filterBy is 'territory'. Provide a partial territory name." }] };
          }
          query = `SELECT UserId, User.Name, User.Username, User.Profile.Name, Territory2.Name, RoleInTerritory2 FROM UserTerritory2Association WHERE Territory2.Name LIKE '%${filterValue}%' ORDER BY Territory2.Name, User.Name LIMIT 200`;
          title = `# Users in Territory matching "${filterValue}"`;
          break;

        case "no-territory":
          query = `SELECT Id, Name, Username, Profile.Name, UserRole.Name FROM User WHERE IsActive = true AND Id NOT IN (SELECT UserId FROM UserTerritory2Association) AND (Profile.Name LIKE '%Life Science%' OR Profile.Name LIKE '%AFLS%' OR Profile.Name LIKE '%Sales%') ORDER BY Profile.Name, Name LIMIT 200`;
          title = "# Active Users Without Territory Assignments";
          break;

        case "no-psl":
          query = `SELECT Id, Name, Username, Profile.Name FROM User WHERE IsActive = true AND Id NOT IN (SELECT AssigneeId FROM PermissionSetLicenseAssign WHERE PermissionSetLicense.DeveloperName LIKE '%LifeScience%') AND (Profile.Name LIKE '%Life Science%' OR Profile.Name LIKE '%AFLS%' OR Profile.Name LIKE '%Sales%') ORDER BY Profile.Name, Name LIMIT 200`;
          title = "# Active Users Without AFLS Permission Set Licenses";
          break;

        default:
          query = `SELECT Id, Name, Username, Profile.Name, UserRole.Name, IsActive FROM User WHERE IsActive = true ORDER BY Profile.Name, Name LIMIT 200`;
          title = "# Active Users";
          break;
      }

      const result = await runSoqlQuery(query, effectiveOrg);

      if (!result.success) {
        return { content: [{ type: "text", text: `# Error\n\n${result.error}` }] };
      }

      const records = result.data?.records || [];
      let message = `${title}\n\n`;

      if (records.length === 0) {
        message += "No users found matching the criteria.\n";
        return { content: [{ type: "text", text: message }] };
      }

      if (filterBy === "permission-set") {
        message += `| Name | Username | Profile | Permission Set |\n|------|----------|---------|----------------|\n`;
        for (const record of records) {
          const rec = record as Record<string, unknown>;
          const assignee = rec.Assignee as Record<string, unknown> | null;
          const profile = assignee?.Profile as Record<string, unknown> | null;
          const ps = rec.PermissionSet as Record<string, unknown> | null;
          message += `| ${assignee?.Name || "-"} | ${assignee?.Username || "-"} | ${profile?.Name || "-"} | ${ps?.Label || "-"} |\n`;
        }
      } else if (filterBy === "territory") {
        message += `| Name | Username | Profile | Territory | Role |\n|------|----------|---------|-----------|------|\n`;
        for (const record of records) {
          const rec = record as Record<string, unknown>;
          const user = rec.User as Record<string, unknown> | null;
          const profile = user?.Profile as Record<string, unknown> | null;
          const t2 = rec.Territory2 as Record<string, unknown> | null;
          message += `| ${user?.Name || "-"} | ${user?.Username || "-"} | ${profile?.Name || "-"} | ${t2?.Name || "-"} | ${rec.RoleInTerritory2 || "-"} |\n`;
        }
      } else {
        message += `| Name | Username | Profile | Role |\n|------|----------|---------|------|\n`;
        for (const record of records) {
          const rec = record as Record<string, unknown>;
          const profile = rec.Profile as Record<string, unknown> | null;
          const role = rec.UserRole as Record<string, unknown> | null;
          message += `| ${rec.Name} | ${rec.Username} | ${profile?.Name || "-"} | ${role?.Name || "-"} |\n`;
        }
      }

      message += `\n**Total:** ${records.length} user(s)\n`;

      return { content: [{ type: "text", text: message }] };
    } catch (error) {
      return {
        content: [{ type: "text", text: `# Failed to List Users\n\n${error instanceof Error ? error.message : String(error)}` }],
      };
    }
  }
);

server.tool(
  "list_permission_sets",
  "List AFLS permission sets and permission set licenses (PSLs) with assignment counts and capacity. Shows which permission sets exist, how many users are assigned, and PSL capacity (total vs used vs available).",
  {
    includeAllNamespaces: z.boolean().optional().default(false).describe("If true, include all permission sets regardless of namespace. Default false = AFLS-related only."),
    targetOrg: z.string().optional().describe("Optional: specific org to query. Uses current target org if not specified."),
  },
  async ({ includeAllNamespaces, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{ type: "text", text: `Cannot list permission sets: ${validation.error}` }],
      };
    }

    try {
      let message = "# AFLS Permission Sets & Licenses\n\n";

      // Permission Sets
      message += "## Permission Sets\n\n";
      const psFilter = includeAllNamespaces
        ? "IsOwnedByProfile = false"
        : "(NamespacePrefix IN ('lsc4ce', 'HealthCloudGA') OR Label LIKE '%Life Science%' OR Label LIKE '%Sample%' OR Label LIKE '%CLM%' OR Label LIKE '%Health Cloud%' OR Label LIKE '%Industry Sales%') AND IsOwnedByProfile = false";
      const psQuery = `SELECT Id, Name, Label, NamespacePrefix FROM PermissionSet WHERE ${psFilter} ORDER BY Label LIMIT 200`;
      const psResult = await runSoqlQuery(psQuery, effectiveOrg);

      if (psResult.success && psResult.data?.records) {
        const records = psResult.data.records;
        if (records.length === 0) {
          message += "No matching permission sets found.\n\n";
        } else {
          const psIds = records.map((r) => `'${(r as Record<string, unknown>).Id}'`).join(",");
          const countQuery = `SELECT PermissionSetId, COUNT(Id) cnt FROM PermissionSetAssignment WHERE PermissionSetId IN (${psIds}) GROUP BY PermissionSetId`;
          const countResult = await runSoqlQuery(countQuery, effectiveOrg);
          const counts = new Map<string, number>();
          if (countResult.success && countResult.data?.records) {
            for (const rec of countResult.data.records) {
              const r = rec as Record<string, unknown>;
              counts.set(String(r.PermissionSetId), Number(r.cnt) || 0);
            }
          }

          message += `| Label | API Name | Namespace | Assignments |\n|-------|----------|-----------|-------------|\n`;
          for (const record of records) {
            const rec = record as Record<string, unknown>;
            const count = counts.get(String(rec.Id)) || 0;
            message += `| ${rec.Label} | ${rec.Name} | ${rec.NamespacePrefix || "-"} | ${count} |\n`;
          }
          message += `\n**Total:** ${records.length} permission set(s)\n\n`;
        }
      } else {
        message += `Error: ${psResult.error}\n\n`;
      }

      // PSLs
      message += "## Permission Set Licenses (PSL Capacity)\n\n";
      const pslFilter = includeAllNamespaces
        ? "TotalLicenses > 0"
        : "(DeveloperName LIKE '%LifeScience%' OR DeveloperName LIKE '%HealthCloud%' OR DeveloperName LIKE '%IndustrySales%' OR DeveloperName LIKE '%CLM%' OR DeveloperName LIKE '%SampleManagement%') AND TotalLicenses > 0";
      const pslQuery = `SELECT DeveloperName, MasterLabel, TotalLicenses, UsedLicenses FROM PermissionSetLicense WHERE ${pslFilter} ORDER BY MasterLabel`;
      const pslResult = await runSoqlQuery(pslQuery, effectiveOrg);

      if (pslResult.success && pslResult.data?.records) {
        const records = pslResult.data.records;
        if (records.length === 0) {
          message += "No matching PSLs found.\n\n";
        } else {
          message += `| PSL | Total | Used | Available | Utilization |\n|-----|-------|------|-----------|-------------|\n`;
          for (const record of records) {
            const rec = record as Record<string, unknown>;
            const total = Number(rec.TotalLicenses) || 0;
            const used = Number(rec.UsedLicenses) || 0;
            const available = total - used;
            const utilization = total > 0 ? Math.round((used / total) * 100) : 0;
            const status = available === 0 ? " **FULL**" : available < 5 ? " *Low*" : "";
            message += `| ${rec.MasterLabel} | ${total} | ${used} | ${available}${status} | ${utilization}% |\n`;
          }
          message += "\n";
        }
      } else {
        message += `Error: ${pslResult.error}\n\n`;
      }

      return { content: [{ type: "text", text: message }] };
    } catch (error) {
      return {
        content: [{ type: "text", text: `# Failed to List Permission Sets\n\n${error instanceof Error ? error.message : String(error)}` }],
      };
    }
  }
);

server.tool(
  "assign_permission_set",
  "Assign a permission set to one or more users. Looks up the permission set by label or API name, resolves usernames to IDs if needed, skips users who already have the assignment, and creates PermissionSetAssignment records.",
  {
    permissionSetName: z.string().describe("Permission set label (e.g., 'AFLS User') or API name (e.g., 'lsc4ce__LifeSciencesCloudUser')"),
    userIds: z.array(z.string()).optional().describe("Array of User IDs to assign the permission set to"),
    usernames: z.array(z.string()).optional().describe("Array of usernames (email format) to assign the permission set to. Will be resolved to User IDs."),
    targetOrg: z.string().optional().describe("Optional: specific org. Uses current target org if not specified."),
  },
  async ({ permissionSetName, userIds, usernames, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{ type: "text", text: `Cannot assign permission set: ${validation.error}` }],
      };
    }

    if (!userIds?.length && !usernames?.length) {
      return {
        content: [{ type: "text", text: "Error: Provide either userIds or usernames (or both)." }],
      };
    }

    try {
      // Look up the permission set
      const psQuery = `SELECT Id, Name, Label, NamespacePrefix FROM PermissionSet WHERE (Label = '${permissionSetName}' OR Name = '${permissionSetName}' OR Label LIKE '%${permissionSetName}%') AND IsOwnedByProfile = false ORDER BY Label LIMIT 5`;
      const psResult = await runSoqlQuery(psQuery, effectiveOrg);

      if (!psResult.success || !psResult.data?.records?.length) {
        return {
          content: [{ type: "text", text: `# Permission Set Not Found\n\nNo permission set matching "${permissionSetName}" was found. Use \`list_permission_sets()\` to see available permission sets.` }],
        };
      }

      const ps = psResult.data.records[0] as Record<string, unknown>;
      const psId = String(ps.Id);
      const psLabel = String(ps.Label);

      // Resolve usernames to IDs
      const resolvedIds: string[] = [...(userIds || [])];
      if (usernames?.length) {
        const usernameList = usernames.map((u) => `'${u}'`).join(",");
        const userQuery = `SELECT Id, Username FROM User WHERE Username IN (${usernameList}) AND IsActive = true`;
        const userResult = await runSoqlQuery(userQuery, effectiveOrg);

        if (userResult.success && userResult.data?.records) {
          for (const rec of userResult.data.records) {
            const r = rec as Record<string, unknown>;
            resolvedIds.push(String(r.Id));
          }
          const foundUsernames = userResult.data.records.map((r) => String((r as Record<string, unknown>).Username));
          const notFound = usernames.filter((u) => !foundUsernames.includes(u));
          if (notFound.length > 0) {
            return {
              content: [{ type: "text", text: `# Users Not Found\n\nThe following usernames were not found or are inactive: ${notFound.join(", ")}` }],
            };
          }
        }
      }

      if (resolvedIds.length === 0) {
        return {
          content: [{ type: "text", text: "No valid user IDs to assign." }],
        };
      }

      // Check for existing assignments
      const idList = resolvedIds.map((id) => `'${id}'`).join(",");
      const existingQuery = `SELECT AssigneeId FROM PermissionSetAssignment WHERE PermissionSetId = '${psId}' AND AssigneeId IN (${idList})`;
      const existingResult = await runSoqlQuery(existingQuery, effectiveOrg);
      const alreadyAssigned = new Set<string>();
      if (existingResult.success && existingResult.data?.records) {
        for (const rec of existingResult.data.records) {
          alreadyAssigned.add(String((rec as Record<string, unknown>).AssigneeId));
        }
      }

      const toAssign = resolvedIds.filter((id) => !alreadyAssigned.has(id));

      let message = `# Assign Permission Set: ${psLabel}\n\n`;

      if (alreadyAssigned.size > 0) {
        message += `**Skipped** ${alreadyAssigned.size} user(s) who already have this permission set.\n\n`;
      }

      if (toAssign.length === 0) {
        message += "All specified users already have this permission set. No changes made.\n";
        return { content: [{ type: "text", text: message }] };
      }

      // Create assignments
      const results: string[] = [];
      const errors: string[] = [];

      for (const userId of toAssign) {
        const createResult = await createRecord("PermissionSetAssignment", {
          AssigneeId: userId,
          PermissionSetId: psId,
        }, effectiveOrg);

        if (createResult.success) {
          results.push(userId);
        } else {
          errors.push(`${userId}: ${createResult.error}`);
        }
      }

      if (results.length > 0) {
        message += `**Assigned** "${psLabel}" to ${results.length} user(s).\n\n`;
      }

      if (errors.length > 0) {
        message += `**Failed** for ${errors.length} user(s):\n`;
        for (const err of errors) {
          message += `- ${err}\n`;
        }
        message += "\nCommon causes: missing required PSL, user already has the assignment via a group, or insufficient permissions.\n";
      }

      return { content: [{ type: "text", text: message }] };
    } catch (error) {
      return {
        content: [{ type: "text", text: `# Failed to Assign Permission Set\n\n${error instanceof Error ? error.message : String(error)}` }],
      };
    }
  }
);

server.tool(
  "unassign_permission_set",
  "Remove a permission set assignment from one or more users. Finds existing PermissionSetAssignment records and deletes them.",
  {
    permissionSetName: z.string().describe("Permission set label (e.g., 'AFLS User') or API name (e.g., 'lsc4ce__LifeSciencesCloudUser')"),
    userIds: z.array(z.string()).optional().describe("Array of User IDs to remove the permission set from"),
    usernames: z.array(z.string()).optional().describe("Array of usernames (email format) to remove the permission set from. Will be resolved to User IDs."),
    targetOrg: z.string().optional().describe("Optional: specific org. Uses current target org if not specified."),
  },
  async ({ permissionSetName, userIds, usernames, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{ type: "text", text: `Cannot unassign permission set: ${validation.error}` }],
      };
    }

    if (!userIds?.length && !usernames?.length) {
      return {
        content: [{ type: "text", text: "Error: Provide either userIds or usernames (or both)." }],
      };
    }

    try {
      // Look up the permission set
      const psQuery = `SELECT Id, Name, Label FROM PermissionSet WHERE (Label = '${permissionSetName}' OR Name = '${permissionSetName}' OR Label LIKE '%${permissionSetName}%') AND IsOwnedByProfile = false ORDER BY Label LIMIT 5`;
      const psResult = await runSoqlQuery(psQuery, effectiveOrg);

      if (!psResult.success || !psResult.data?.records?.length) {
        return {
          content: [{ type: "text", text: `# Permission Set Not Found\n\nNo permission set matching "${permissionSetName}" was found.` }],
        };
      }

      const ps = psResult.data.records[0] as Record<string, unknown>;
      const psId = String(ps.Id);
      const psLabel = String(ps.Label);

      // Resolve usernames to IDs
      const resolvedIds: string[] = [...(userIds || [])];
      if (usernames?.length) {
        const usernameList = usernames.map((u) => `'${u}'`).join(",");
        const userQuery = `SELECT Id, Username FROM User WHERE Username IN (${usernameList})`;
        const userResult = await runSoqlQuery(userQuery, effectiveOrg);

        if (userResult.success && userResult.data?.records) {
          for (const rec of userResult.data.records) {
            resolvedIds.push(String((rec as Record<string, unknown>).Id));
          }
        }
      }

      if (resolvedIds.length === 0) {
        return {
          content: [{ type: "text", text: "No valid user IDs found." }],
        };
      }

      // Find existing assignments
      const idList = resolvedIds.map((id) => `'${id}'`).join(",");
      const existingQuery = `SELECT Id, AssigneeId, Assignee.Name FROM PermissionSetAssignment WHERE PermissionSetId = '${psId}' AND AssigneeId IN (${idList})`;
      const existingResult = await runSoqlQuery(existingQuery, effectiveOrg);

      if (!existingResult.success || !existingResult.data?.records?.length) {
        return {
          content: [{ type: "text", text: `# No Assignments Found\n\nNone of the specified users have "${psLabel}" assigned. No changes made.` }],
        };
      }

      let message = `# Unassign Permission Set: ${psLabel}\n\n`;
      const results: string[] = [];
      const errors: string[] = [];

      for (const record of existingResult.data.records) {
        const rec = record as Record<string, unknown>;
        const assignee = rec.Assignee as Record<string, unknown> | null;
        const deleteResult = await deleteRecord("PermissionSetAssignment", String(rec.Id), effectiveOrg);

        if (deleteResult.success) {
          results.push(String(assignee?.Name || rec.AssigneeId));
        } else {
          errors.push(`${assignee?.Name || rec.AssigneeId}: ${deleteResult.error}`);
        }
      }

      if (results.length > 0) {
        message += `**Removed** "${psLabel}" from ${results.length} user(s): ${results.join(", ")}\n\n`;
      }

      if (errors.length > 0) {
        message += `**Failed** for ${errors.length} user(s):\n`;
        for (const err of errors) {
          message += `- ${err}\n`;
        }
      }

      return { content: [{ type: "text", text: message }] };
    } catch (error) {
      return {
        content: [{ type: "text", text: `# Failed to Unassign Permission Set\n\n${error instanceof Error ? error.message : String(error)}` }],
      };
    }
  }
);
}


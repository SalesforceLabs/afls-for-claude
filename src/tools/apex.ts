import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { runAnonymousApex } from "../salesforce/cli.js";
import { validateOrgConnection } from "../salesforce/auth.js";

export function register(server: McpServer) {
server.tool(
  "run_apex",
  "Execute anonymous Apex code against the target Salesforce org. Use for one-off tasks like running batch jobs, fixing data issues, or testing logic. Returns compilation status, execution result, and debug logs.",
  {
    code: z.string().describe("The Apex code to execute anonymously"),
    targetOrg: z.string().optional().describe("Optional: specific org to run against. Uses current target org if not specified."),
  },
  async ({ code, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{
          type: "text",
          text: `# Cannot Execute Apex\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
        }],
      };
    }

    const result = await runAnonymousApex(code, effectiveOrg);

    if (!result.success) {
      return {
        content: [{
          type: "text",
          text: `# Apex Execution Failed\n\n**Error:** ${result.error}\n\n**Raw Output:**\n\`\`\`\n${result.rawOutput || "No output"}\n\`\`\``,
        }],
      };
    }

    const data = result.data;
    const compiled = data?.compiled ?? false;
    const success = data?.success ?? false;
    const logs = data?.logs || "";

    let report = `# Apex Execution Result\n\n`;
    report += `**Compiled:** ${compiled ? "Yes" : "No"}\n`;
    report += `**Executed Successfully:** ${success ? "Yes" : "No"}\n\n`;

    if (logs) {
      report += `## Debug Logs\n\n\`\`\`\n${logs}\n\`\`\`\n`;
    }

    if (result.rawOutput && !success) {
      report += `\n## Raw Output\n\n\`\`\`\n${result.rawOutput}\n\`\`\`\n`;
    }

    return { content: [{ type: "text", text: report }] };
  }
);
}

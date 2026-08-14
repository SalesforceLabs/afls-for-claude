import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {
  deployMetadata,
  retrieveMetadata,
} from "../salesforce/cli.js";
import { validateOrgConnection } from "../salesforce/auth.js";

export function register(server: McpServer) {
server.tool(
  "deploy_metadata",
  "Deploy metadata to the target Salesforce org from a local source directory. Wraps `sf project deploy start`. Use for pushing permission sets, page layouts, flows, and other metadata from a local project.",
  {
    sourcePath: z.string().describe("Path to the local source directory containing metadata to deploy (e.g., 'force-app/main/default')"),
    targetOrg: z.string().optional().describe("Optional: specific org to deploy to. Uses current target org if not specified."),
  },
  async ({ sourcePath, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{
          type: "text",
          text: `# Cannot Deploy Metadata\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
        }],
      };
    }

    const result = await deployMetadata(sourcePath, effectiveOrg);

    if (!result.success) {
      return {
        content: [{
          type: "text",
          text: `# Deployment Failed\n\n**Error:** ${result.error}\n\n**Raw Output:**\n\`\`\`\n${result.rawOutput || "No output"}\n\`\`\``,
        }],
      };
    }

    let report = `# Deployment Successful\n\n**Source:** ${sourcePath}\n**Target Org:** ${effectiveOrg}\n\n`;

    if (result.rawOutput) {
      report += `## Details\n\n\`\`\`\n${result.rawOutput.substring(0, 2000)}\n\`\`\`\n`;
    }

    return { content: [{ type: "text", text: report }] };
  }
);

server.tool(
  "retrieve_metadata",
  "Retrieve metadata from the target Salesforce org to a local directory. Wraps `sf project retrieve start`. Use for pulling permission sets, page layouts, flows, and other metadata to inspect or version control.",
  {
    metadata: z.string().describe("Metadata type and optional name (e.g., 'PermissionSet:LSC_Admin', 'Layout:Visit-Visit Layout', 'ApexClass')"),
    outputDir: z.string().optional().describe("Optional: local directory to write retrieved metadata. Defaults to current working directory."),
    targetOrg: z.string().optional().describe("Optional: specific org to retrieve from. Uses current target org if not specified."),
  },
  async ({ metadata, outputDir, targetOrg }) => {
    const validation = await validateOrgConnection();
    const effectiveOrg = targetOrg || validation.targetOrg;

    if (!effectiveOrg) {
      return {
        content: [{
          type: "text",
          text: `# Cannot Retrieve Metadata\n\n${validation.error}\n\nPlease connect to a Salesforce org first.`,
        }],
      };
    }

    const result = await retrieveMetadata("", metadata, effectiveOrg);

    if (!result.success) {
      return {
        content: [{
          type: "text",
          text: `# Retrieve Failed\n\n**Error:** ${result.error}\n\n**Raw Output:**\n\`\`\`\n${result.rawOutput || "No output"}\n\`\`\``,
        }],
      };
    }

    const actualOutputDir = (result.data as { outputDir: string } | undefined)?.outputDir || outputDir || "tmp project";
    let report = `# Metadata Retrieved\n\n**Metadata:** ${metadata}\n**Output:** ${actualOutputDir}\n**Source Org:** ${effectiveOrg}\n\n`;

    if (result.rawOutput) {
      report += `## Details\n\n\`\`\`\n${result.rawOutput.substring(0, 2000)}\n\`\`\`\n`;
    }

    return { content: [{ type: "text", text: report }] };
  }
);
}

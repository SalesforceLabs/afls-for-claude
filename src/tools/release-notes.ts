import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import * as fs from "fs";
import * as path from "path";

export function register(server: McpServer) {

const releaseNotesDir = path.join(path.dirname(new URL(import.meta.url).pathname), "../../knowledge/release-notes");

server.tool(
  "get_release_notes",
  "Get AFLS release notes for a specific Salesforce release (e.g., 'Spring 26', 'Winter 26'). Lists available releases if no release is specified.",
  {
    release: z.string().optional().describe("The release name (e.g., 'spring-26', 'winter-26'). Omit to list all available releases."),
  },
  async ({ release }) => {
    // List available releases
    let files: string[] = [];
    try {
      files = fs.readdirSync(releaseNotesDir).filter((f) => f.endsWith(".md")).sort().reverse();
    } catch {
      return {
        content: [{
          type: "text",
          text: "# Release Notes\n\nNo release notes directory found. Release notes will be added in future updates.",
        }],
      };
    }

    if (!release) {
      if (files.length === 0) {
        return {
          content: [{
            type: "text",
            text: "# Release Notes\n\nNo release notes available yet.",
          }],
        };
      }

      const list = files.map((f) => {
        const slug = f.replace(".md", "");
        const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
        return `- **${name}** (\`${slug}\`)`;
      }).join("\n");

      return {
        content: [{
          type: "text",
          text: `# Available AFLS Release Notes\n\n${list}\n\nUse \`get_release_notes\` with a release slug to get the full content.`,
        }],
      };
    }

    // Normalize the release name
    const slug = release.toLowerCase().replace(/['\s]+/g, "-").replace(/[^a-z0-9-]/g, "");
    const filePath = path.join(releaseNotesDir, `${slug}.md`);

    try {
      const content = fs.readFileSync(filePath, "utf-8");
      return {
        content: [{ type: "text", text: content }],
      };
    } catch {
      const available = files.map((f) => f.replace(".md", "")).join(", ");
      return {
        content: [{
          type: "text",
          text: `Release notes for '${release}' not found.\n\nAvailable releases: ${available || "none"}`,
        }],
      };
    }
  }
);
}

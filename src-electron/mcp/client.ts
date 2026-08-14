import path from "path";
import { fileURLToPath } from "url";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ToolDefinition } from "../llm/provider.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface McpToolResult {
  content: Array<{ type: string; text: string }>;
  isError?: boolean;
}

/**
 * MCP Client that spawns the existing AFLS MCP server as a child process
 * using the official MCP SDK client and stdio transport.
 */
export class McpClient {
  private client: Client | null = null;
  private transport: StdioClientTransport | null = null;
  private tools: ToolDefinition[] = [];
  private serverDir: string;

  constructor(serverDir?: string) {
    this.serverDir = serverDir ?? path.resolve(__dirname, "..", "..");
  }

  async start(): Promise<void> {
    const serverScript = path.join(this.serverDir, "dist", "index.js");

    this.transport = new StdioClientTransport({
      command: "node",
      args: [serverScript],
      cwd: this.serverDir,
      env: { ...process.env } as Record<string, string>,
    });

    this.client = new Client(
      { name: "afls-assistant", version: "0.1.0" },
      { capabilities: {} }
    );

    await this.client.connect(this.transport);

    // Discover available tools
    await this.refreshTools();
  }

  async stop(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.transport = null;
    }
  }

  getTools(): ToolDefinition[] {
    return this.tools;
  }

  async callTool(
    name: string,
    args: Record<string, unknown>
  ): Promise<McpToolResult> {
    if (!this.client) throw new Error("MCP client not connected");

    const result = await this.client.callTool({
      name,
      arguments: args,
    });

    return {
      content: (result.content as Array<{ type: string; text: string }>) || [],
      isError: result.isError as boolean | undefined,
    };
  }

  private async refreshTools(): Promise<void> {
    if (!this.client) throw new Error("MCP client not connected");

    const result = await this.client.listTools();

    this.tools = result.tools.map((t) => ({
      name: t.name,
      description: t.description || "",
      input_schema: t.inputSchema as Record<string, unknown>,
    }));
  }
}

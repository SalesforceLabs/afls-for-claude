import { describe, it, expect } from "vitest";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

/**
 * Smoke test: verify that the MCP server can be instantiated
 * and all tools are registered without error.
 *
 * This imports index.ts which registers all 51 tools on the server.
 * We can't easily introspect the registered tools count from McpServer,
 * so we verify it starts without throwing.
 */
describe("tool-registration smoke test", () => {
  it("MCP server module loads without error", async () => {
    // The index.ts module creates the server and registers tools at import time.
    // We just need to verify it doesn't throw.
    // Since it also starts stdio transport, we mock that.
    const originalConnect = McpServer.prototype.connect;
    McpServer.prototype.connect = async function () {
      // no-op: don't actually start stdio transport
    } as any;

    try {
      // Dynamic import to trigger module execution
      await expect(
        import("../../src/index.js")
      ).resolves.not.toThrow();
    } finally {
      McpServer.prototype.connect = originalConnect;
    }
  });
});

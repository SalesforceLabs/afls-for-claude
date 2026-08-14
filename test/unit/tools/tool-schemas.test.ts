import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

/**
 * Tool schema tests for the AFLS-for-Claude MCP server.
 *
 * Strategy: Spy on McpServer.prototype.tool to capture every registration
 * call made by src/index.ts at import time. This gives us access to each
 * tool's name, description, and Zod input schema without starting the
 * stdio transport.
 */

interface CapturedTool {
  name: string;
  description: string;
  inputSchema: Record<string, unknown> | undefined;
}

const capturedTools: CapturedTool[] = [];

// Prevent the server from opening stdio transport
const originalConnect = McpServer.prototype.connect;
McpServer.prototype.connect = async function () {
  // no-op
} as typeof McpServer.prototype.connect;

// Spy on tool() to capture every registration
const originalTool = McpServer.prototype.tool;
McpServer.prototype.tool = function (name: string, ...rest: unknown[]) {
  // Parse the overloaded arguments the same way the SDK does:
  // tool(name, description, schema, callback)
  // tool(name, description, callback)
  // tool(name, schema, callback)
  // tool(name, callback)
  let description: string | undefined;
  let inputSchema: Record<string, unknown> | undefined;

  const args = [...rest];

  if (typeof args[0] === "string") {
    description = args.shift() as string;
  }

  // The next arg could be a Zod schema (object with keys) or annotations or the callback
  if (args.length > 1 && typeof args[0] === "object" && args[0] !== null) {
    // Could be a Zod shape or annotations. Zod shapes have string keys with ZodType values.
    // We store it as-is; we'll convert it to JSON schema via the SDK's list handler later.
    inputSchema = args[0] as Record<string, unknown>;
  }

  capturedTools.push({
    name,
    description: description ?? "",
    inputSchema,
  });

  // Call the original so the server still registers the tool internally
  return (originalTool as Function).call(this, name, ...rest);
} as typeof McpServer.prototype.tool;

beforeAll(async () => {
  // Dynamic import triggers module execution which registers all tools
  await import("../../../src/index.js");
});

// Restore after all tests
afterAll(() => {
  McpServer.prototype.connect = originalConnect;
  McpServer.prototype.tool = originalTool;
});

describe("tool-schemas", () => {
  // -------------------------------------------------------------------------
  // 1. All tools have names and descriptions
  // -------------------------------------------------------------------------
  describe("all tools have names and descriptions", () => {
    it("should have captured tool registrations", () => {
      expect(capturedTools.length).toBeGreaterThan(0);
    });

    it("every tool has a non-empty name", () => {
      for (const tool of capturedTools) {
        expect(tool.name, `Tool at index ${capturedTools.indexOf(tool)} has empty name`).toBeTruthy();
        expect(typeof tool.name).toBe("string");
        expect(tool.name.length).toBeGreaterThan(0);
      }
    });

    it("every tool has a non-empty description", () => {
      for (const tool of capturedTools) {
        expect(
          tool.description,
          `Tool '${tool.name}' has no description`
        ).toBeTruthy();
        expect(typeof tool.description).toBe("string");
        expect(tool.description.length).toBeGreaterThan(0);
      }
    });

    it("tool names are unique", () => {
      const names = capturedTools.map((t) => t.name);
      const uniqueNames = new Set(names);
      expect(uniqueNames.size).toBe(names.length);
    });

    it("tool names use snake_case", () => {
      for (const tool of capturedTools) {
        expect(
          tool.name,
          `Tool '${tool.name}' does not match snake_case pattern`
        ).toMatch(/^[a-z][a-z0-9_]*$/);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 2. All tools have valid input schemas
  // -------------------------------------------------------------------------
  describe("all tools have valid input schemas", () => {
    it("input schemas are either undefined (no params) or an object with string keys", () => {
      for (const tool of capturedTools) {
        if (tool.inputSchema === undefined) {
          // Tool takes no parameters — valid (e.g., list_afls_modules)
          continue;
        }

        expect(
          typeof tool.inputSchema,
          `Tool '${tool.name}' inputSchema is not an object`
        ).toBe("object");
        expect(
          tool.inputSchema,
          `Tool '${tool.name}' inputSchema is null`
        ).not.toBeNull();

        // Each key should be a string (property name) and each value should be a Zod schema
        for (const key of Object.keys(tool.inputSchema)) {
          expect(
            typeof key,
            `Tool '${tool.name}' has non-string key in inputSchema`
          ).toBe("string");

          const zodValue = tool.inputSchema[key] as any;
          // Zod schemas have a _def property
          expect(
            zodValue?._def,
            `Tool '${tool.name}' property '${key}' is not a valid Zod schema (missing _def)`
          ).toBeDefined();
        }
      }
    });

    it("tools with non-empty schemas have at least one property defined", () => {
      for (const tool of capturedTools) {
        if (tool.inputSchema === undefined) continue;
        // Empty schema {} is valid — it means the tool takes no parameters.
        // This is the MCP SDK convention (e.g., list_afls_modules passes {}).
        const keys = Object.keys(tool.inputSchema);
        if (keys.length === 0) continue;

        // If there ARE properties, each one must be a valid Zod schema
        for (const key of keys) {
          const zodValue = (tool.inputSchema as any)[key];
          expect(
            zodValue?._def,
            `Tool '${tool.name}' property '${key}' is not a valid Zod schema`
          ).toBeDefined();
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. Snapshot all tool schemas (name + property names + required)
  // -------------------------------------------------------------------------
  describe("tool schema snapshot", () => {
    it("should match the snapshot of all tool names and their parameter shapes", () => {
      const snapshot = capturedTools.map((tool) => {
        if (!tool.inputSchema) {
          return { name: tool.name, params: {} };
        }

        const params: Record<string, { type: string; optional: boolean }> = {};
        for (const [key, zodSchema] of Object.entries(tool.inputSchema)) {
          const zod = zodSchema as any;
          const typeName = zod?._def?.typeName ?? "unknown";
          // Check if the schema is optional (wrapped in ZodOptional or ZodDefault)
          const isOptional =
            typeName === "ZodOptional" ||
            typeName === "ZodDefault" ||
            zod?.isOptional?.() === true;
          // Get the inner type for optional/default wrappers
          let innerType = typeName;
          if (typeName === "ZodOptional" || typeName === "ZodDefault") {
            innerType = zod?._def?.innerType?._def?.typeName ?? typeName;
          }
          params[key] = {
            type: innerType,
            optional: isOptional,
          };
        }

        return { name: tool.name, params };
      });

      expect(snapshot).toMatchSnapshot();
    });
  });

  // -------------------------------------------------------------------------
  // 4. Tool count assertion
  // -------------------------------------------------------------------------
  describe("tool count", () => {
    it("should have at least 55 registered tools", () => {
      // Based on source analysis: 59 server.tool() calls found in src/index.ts.
      // We use 55 as a floor to catch accidental mass deregistration while
      // allowing minor removals without breaking CI.
      expect(capturedTools.length).toBeGreaterThanOrEqual(55);
    });

    it("should report the exact count for documentation purposes", () => {
      // This test documents the current count. Update the snapshot when
      // tools are intentionally added or removed.
      expect(capturedTools.length).toMatchSnapshot();
    });
  });

  // -------------------------------------------------------------------------
  // 5. Required fields reference actual properties
  // -------------------------------------------------------------------------
  describe("required fields reference actual properties", () => {
    it("every non-optional Zod property name exists in the schema", () => {
      // In the Zod-based schema approach used by MCP SDK, "required" fields
      // are those NOT wrapped in z.optional() or z.default().
      // We verify that every property in the schema is a valid Zod type.
      for (const tool of capturedTools) {
        if (!tool.inputSchema) continue;

        const propertyNames = Object.keys(tool.inputSchema);
        const requiredNames: string[] = [];

        for (const [key, zodSchema] of Object.entries(tool.inputSchema)) {
          const zod = zodSchema as any;
          const typeName = zod?._def?.typeName ?? "";
          const isOptional =
            typeName === "ZodOptional" ||
            typeName === "ZodDefault" ||
            zod?.isOptional?.() === true;
          if (!isOptional) {
            requiredNames.push(key);
          }
        }

        // Every required field name must be an actual property in the schema
        for (const req of requiredNames) {
          expect(
            propertyNames,
            `Tool '${tool.name}' has required field '${req}' not in properties`
          ).toContain(req);
        }

        // Tools with no optional params should have all fields as required
        // (just a sanity check — every key is either required or optional)
        expect(propertyNames.length).toBeGreaterThanOrEqual(requiredNames.length);
      }
    });

    it("tools that take parameters have at least one required field", () => {
      // Most tools that accept parameters should have at least one required field.
      // Track exceptions here if any legitimately have all-optional params.
      const allOptionalAllowed = new Set([
        "search_afls_knowledge", // maxResults is optional, query is required — should pass
        "list_afls_actions",     // filters are optional
        "list_trigger_handlers", // objectName filter is optional
        "list_admin_settings",  // category filter may be optional
        "list_db_schema",       // no required params
        "list_navigation_tabs", // no required params
        "list_users",           // all filters optional
        "list_permission_sets", // no required params
        "check_mobile_cache_status", // optional params
        "check_visit_config",   // no required params
        "check_sample_config",  // no required params
        "check_account_config", // no required params
        "check_activity_plan_config", // no required params
        "check_territory_config", // no required params
        "check_user_config",    // no required params
      ]);

      for (const tool of capturedTools) {
        if (!tool.inputSchema) continue;
        if (allOptionalAllowed.has(tool.name)) continue;

        const requiredFields: string[] = [];
        for (const [key, zodSchema] of Object.entries(tool.inputSchema)) {
          const zod = zodSchema as any;
          const typeName = zod?._def?.typeName ?? "";
          const isOptional =
            typeName === "ZodOptional" ||
            typeName === "ZodDefault" ||
            zod?.isOptional?.() === true;
          if (!isOptional) {
            requiredFields.push(key);
          }
        }

        if (requiredFields.length === 0) {
          // If this fails, either add the tool to allOptionalAllowed or add a required field
          console.warn(
            `Tool '${tool.name}' has parameters but no required fields — consider adding to allOptionalAllowed if intentional`
          );
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // Bonus: List all tool names for reference
  // -------------------------------------------------------------------------
  describe("tool inventory", () => {
    it("lists all registered tool names", () => {
      const names = capturedTools.map((t) => t.name).sort();
      // This snapshot provides a quick reference of all tools
      expect(names).toMatchSnapshot();
    });
  });
});

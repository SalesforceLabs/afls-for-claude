import { describe, it, expect } from "vitest";
import {
  getModuleList,
  searchKnowledge,
  getHelpDocList,
} from "../../src/knowledge-loader.js";

/**
 * Integration tests that read real files from the knowledge/ directory.
 * These validate that the knowledge base is properly structured and accessible.
 */
describe("knowledge-loader integration (real filesystem)", () => {
  it("getModuleList() returns 10+ modules from knowledge/modules/", () => {
    const modules = getModuleList();
    expect(modules.length).toBeGreaterThanOrEqual(10);

    // Verify each module has required fields
    for (const mod of modules) {
      expect(mod.slug).toBeTruthy();
      expect(mod.title).toBeTruthy();
      expect(mod.fileCount).toBeGreaterThanOrEqual(0);
    }
  });

  it("searchKnowledge('visit') returns results from real content", () => {
    const results = searchKnowledge("visit");
    expect(results.length).toBeGreaterThan(0);

    // Verify result structure
    for (const result of results) {
      expect(result.module).toBeTruthy();
      expect(result.title).toBeTruthy();
      expect(result.excerpt).toBeTruthy();
    }
  });

  it("getHelpDocList() returns well-formed entries (Official Help now served live via MCP)", () => {
    // Official Help docs are served live via the salesforce-docs MCP server
    // and are no longer bundled locally, so this list may be empty. Any
    // entries that ARE present must still be well-formed.
    const docs = getHelpDocList();
    expect(Array.isArray(docs)).toBe(true);

    for (const doc of docs) {
      expect(doc.slug).toBeTruthy();
      expect(doc.title).toBeTruthy();
    }
  });
});

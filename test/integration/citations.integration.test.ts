import { describe, it, expect } from "vitest";
import {
  getModuleContent,
  getModuleList,
  searchKnowledge,
  formatCitation,
  getHelpDocContent,
  getGuideContent,
  getTroubleshootingContent,
} from "../../src/knowledge-loader.js";

/**
 * Integration tests that verify citations appear in real tool responses.
 *
 * These simulate what the MCP tools do: call getModuleContent/searchKnowledge,
 * then call formatCitation, and concatenate. They verify the final string
 * that gets returned to Claude actually contains a 📖 **Source:** line.
 */
describe("citations in tool responses (real filesystem)", () => {
  // ==========================================================================
  // get_afls_module_docs tool path
  // ==========================================================================
  describe("get_afls_module_docs response", () => {
    it("visit-management response contains citation", () => {
      const content = getModuleContent("visit-management");
      expect(content).toBeTruthy();
      const citation = formatCitation("visit-management", "visit-management");
      const response = content + citation;
      expect(response).toContain("📖 **Source:**");
      expect(response).toContain("PM Enablement");
      expect(response).toContain("Visit Management");
    });

    it("account-management response cites PM Enablement, not Official Help", () => {
      const content = getModuleContent("account-management");
      expect(content).toBeTruthy();
      // This is the key collision test — the tool passes moduleName
      const citation = formatCitation(
        "account-management",
        "account-management",
      );
      const response = content + citation;
      expect(response).toContain("📖 **Source:**");
      expect(response).toContain("PM Enablement");
      // Should NOT cite Official Help when called as a module
      expect(response).not.toContain("Official Help");
    });

    it("sample-management response contains citation", () => {
      const content = getModuleContent("sample-management");
      expect(content).toBeTruthy();
      const citation = formatCitation(
        "sample-management",
        "sample-management",
      );
      const response = content + citation;
      expect(response).toContain("📖 **Source:**");
      expect(response).toContain("PM Enablement");
    });

    it("every module with content produces a citation", () => {
      const modules = getModuleList();

      for (const mod of modules) {
        const content = getModuleContent(mod.slug);
        if (!content) continue; // skip empty modules

        const citation = formatCitation(mod.slug, mod.slug);
        const response = content + citation;
        expect(
          response,
          `Module "${mod.slug}" response missing 📖 **Source:**`,
        ).toContain("📖 **Source:**");
      }
    });
  });

  // ==========================================================================
  // search_afls_knowledge tool path
  // ==========================================================================
  describe("search_afls_knowledge response", () => {
    it("search results include citations per result", () => {
      const results = searchKnowledge("visit");
      expect(results.length).toBeGreaterThan(0);

      // Simulate what the tool does: format each result with citation
      for (const r of results.slice(0, 5)) {
        const citation = r.sourceFile
          ? formatCitation(
              r.sourceFile,
              r.source === "modules" ? r.module : undefined,
            )
          : "";
        const formatted = `### ${r.title}\n**Module:** ${r.module}\n\n${r.excerpt}${citation}`;
        expect(
          formatted,
          `Search result "${r.title}" from module "${r.module}" missing citation`,
        ).toContain("📖 **Source:**");
      }
    });

    it("search results for 'sample' include citations", () => {
      const results = searchKnowledge("sample");
      expect(results.length).toBeGreaterThan(0);

      for (const r of results.slice(0, 3)) {
        const citation = r.sourceFile
          ? formatCitation(
              r.sourceFile,
              r.source === "modules" ? r.module : undefined,
            )
          : "";
        expect(citation).toContain("📖 **Source:**");
      }
    });
  });

  // ==========================================================================
  // get_afls_help_doc tool path
  // ==========================================================================
  describe("get_afls_help_doc response", () => {
    it("help doc response includes citation with URL", () => {
      const content = getHelpDocContent("account-management");
      if (!content) return; // skip if file missing

      const citation = formatCitation("account-management");
      const response = content + citation;
      expect(response).toContain("📖 **Source:**");
      expect(response).toContain("Official Help");
      expect(response).toContain("https://help.salesforce.com");
    });
  });

  // ==========================================================================
  // get_afls_guide tool path
  // ==========================================================================
  describe("get_afls_guide response", () => {
    it("guide response includes citation", () => {
      const content = getGuideContent("dev-guide");
      if (!content) return;

      const citation = formatCitation("dev-guide");
      const response = content + citation;
      expect(response).toContain("📖 **Source:**");
      expect(response).toContain("Guide");
    });
  });

  // ==========================================================================
  // get_afls_troubleshooting tool path
  // ==========================================================================
  describe("get_afls_troubleshooting response", () => {
    it("troubleshooting response includes citation", () => {
      const content = getTroubleshootingContent("common-issues");
      if (!content) return;

      const citation = formatCitation("common-issues");
      const response = content + citation;
      expect(response).toContain("📖 **Source:**");
      expect(response).toContain("Troubleshooting");
    });
  });
});

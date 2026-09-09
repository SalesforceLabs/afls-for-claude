import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import { formatCitation } from "../../src/knowledge-loader.js";
import { getModuleList } from "../../src/knowledge-loader.js";

const SKILLS_DIR = join(__dirname, "..", "..", "skills");

/**
 * Skills must ensure citations reach the user through one of two paths:
 *
 * PATH A (preferred — "thin skill"): Skill is under 200 lines and delegates to
 *   MCP tools like get_afls_module_docs / search_afls_knowledge. The tool response
 *   includes a > **Source:** citation. The skill must reference at least one
 *   knowledge tool so Claude calls it instead of answering from general knowledge.
 *
 * PATH B (legacy — "fat skill"): Skill embeds inline knowledge (200+ lines) and
 *   includes a literal 📖 citation line at the end. Less reliable because Claude
 *   may omit it, but it's the fallback for skills not yet refactored.
 *
 * These tests enforce that every skill follows one of these two paths.
 */
describe("skill citation coverage", () => {
  const skillDirs = readdirSync(SKILLS_DIR).filter((d) =>
    existsSync(join(SKILLS_DIR, d, "SKILL.md")),
  );

  expect(skillDirs.length).toBeGreaterThanOrEqual(25);

  // Knowledge tools that return citations via formatCitation()
  const KNOWLEDGE_TOOL_PATTERNS = [
    "get_afls_module_docs",
    "search_afls_knowledge",
    "explain_afls_concept",
    "get_afls_help_doc",
    "get_afls_guide",
    "get_afls_troubleshooting",
    "get_afls_exercise",
  ];

  for (const skillDir of skillDirs) {
    describe(`${skillDir}/SKILL.md`, () => {
      const content = readFileSync(
        join(SKILLS_DIR, skillDir, "SKILL.md"),
        "utf-8",
      );
      const lineCount = content.split("\n").length;

      it("delivers citations via tool delegation (PATH A) or an embedded citation (PATH B)", () => {
        // The real invariant: a citation must reach the user. That happens
        // either because the skill delegates to a knowledge tool (whose
        // response carries a `> **Source:**` citation) or because the skill
        // embeds a citation itself. Line count only signals which path is
        // preferred — a fat skill that delegates still delivers citations.
        const referencesKnowledgeTool = KNOWLEDGE_TOOL_PATTERNS.some((tool) =>
          content.includes(tool),
        );
        const hasEmbeddedCitation = /> \*\*Source:\*\*|📖 Source/.test(
          content
            .trim()
            .split("\n")
            .slice(-5)
            .join("\n"),
        );

        expect(
          referencesKnowledgeTool || hasEmbeddedCitation,
          `Skill "${skillDir}" (${lineCount} lines) delivers no citation: it must either ` +
            `reference a knowledge tool (${KNOWLEDGE_TOOL_PATTERNS.join(", ")}) so the tool ` +
            `response carries one, or embed a "> **Source:**" citation near the end. ` +
            `Thin skills (<=200 lines) should prefer tool delegation.`,
        ).toBe(true);
      });

      it("does NOT have the broken '## Citations' instruction section", () => {
        expect(
          content,
          `Skill "${skillDir}" still has the old ## Citations instruction that doesn't work`,
        ).not.toMatch(/## Citations\n\nWhen presenting information/);
      });

      it("does NOT rely on MANDATORY blockquote", () => {
        expect(
          content,
          `Skill "${skillDir}" still has the MANDATORY blockquote that doesn't work`,
        ).not.toContain("> **MANDATORY**:");
      });
    });
  }
});

/**
 * Verify that the MCP tools referenced by thin skills actually produce citations.
 * This closes the loop: skill → tool call → response with citation.
 */
describe("MCP tools called by skills produce citations", () => {
  it("get_afls_module_docs for visit-management returns a citation", () => {
    // Simulates what happens when Claude calls get_afls_module_docs({ module: "visit-management" })
    const citation = formatCitation("visit-management", "visit-management");
    expect(citation).toContain("> **Source:**");
    expect(citation).toContain("PM Enablement");
  });

  it("every module referenced by get_afls_module_docs produces a citation", () => {
    const modules = getModuleList();
    for (const mod of modules) {
      const citation = formatCitation(mod.slug, mod.slug);
      expect(
        citation,
        `formatCitation("${mod.slug}", "${mod.slug}") must contain > **Source:**`,
      ).toContain("> **Source:**");
    }
  });
});

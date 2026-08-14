import { describe, it, expect } from "vitest";
import {
  citationMap,
  moduleCitationMap,
  getCitation,
} from "../../src/citation-map.js";
import { formatCitation } from "../../src/knowledge-loader.js";

describe("citation-map.ts", () => {
  // ==========================================================================
  // citationMap coverage
  // ==========================================================================
  describe("citationMap (Official Help, Guides, Exercises, Troubleshooting)", () => {
    it("has all 15 Official Help entries", () => {
      const helpEntries = Object.values(citationMap).filter(
        (e) => e.category === "Official Help",
      );
      expect(helpEntries.length).toBe(15);
    });

    it("has 2 Guide entries", () => {
      const guides = Object.values(citationMap).filter(
        (e) => e.category === "Guide",
      );
      expect(guides.length).toBe(2);
    });

    it("has 2 Exercise entries", () => {
      const exercises = Object.values(citationMap).filter(
        (e) => e.category === "Exercise",
      );
      expect(exercises.length).toBe(2);
    });

    it("has 1 Troubleshooting entry", () => {
      const trouble = Object.values(citationMap).filter(
        (e) => e.category === "Troubleshooting",
      );
      expect(trouble.length).toBe(1);
    });

    it("all Official Help entries have URLs", () => {
      const helpEntries = Object.entries(citationMap).filter(
        ([, e]) => e.category === "Official Help",
      );
      for (const [slug, entry] of helpEntries) {
        expect(entry.url, `Official Help entry "${slug}" missing URL`).toBeTruthy();
        expect(entry.url).toMatch(/^https:\/\/help\.salesforce\.com/);
      }
    });
  });

  // ==========================================================================
  // moduleCitationMap coverage
  // ==========================================================================
  describe("moduleCitationMap (PM Enablement)", () => {
    it("has entries for all 28 module directory slugs", () => {
      // These are the module:module entries (e.g. "visit-management:visit-management")
      const moduleDirectorySlugs = Object.keys(moduleCitationMap).filter(
        (key) => {
          const [mod, slug] = key.split(":");
          return mod === slug;
        },
      );
      expect(moduleDirectorySlugs.length).toBeGreaterThanOrEqual(28);
    });

    it("all entries are PM Enablement category", () => {
      for (const [key, entry] of Object.entries(moduleCitationMap)) {
        expect(
          entry.category,
          `moduleCitationMap["${key}"] should be PM Enablement`,
        ).toBe("PM Enablement");
      }
    });

    it("no labels are empty or contain escape sequences", () => {
      for (const [key, entry] of Object.entries(moduleCitationMap)) {
        expect(entry.label.length, `"${key}" has empty label`).toBeGreaterThan(0);
        expect(entry.label, `"${key}" label contains \\1`).not.toContain("\\1");
        expect(entry.label, `"${key}" label contains \\x01`).not.toContain("\x01");
      }
    });

    it("includes individual file slugs for multi-file modules", () => {
      // Visit management has 5 content files — check they're all mapped
      const visitKeys = Object.keys(moduleCitationMap).filter((k) =>
        k.startsWith("visit-management:"),
      );
      expect(visitKeys.length).toBeGreaterThanOrEqual(6); // 1 module-level + 5 files

      // Account management has 10 content files
      const acctKeys = Object.keys(moduleCitationMap).filter((k) =>
        k.startsWith("account-management:"),
      );
      expect(acctKeys.length).toBeGreaterThanOrEqual(11); // 1 module-level + 10 files
    });
  });

  // ==========================================================================
  // getCitation() dispatch logic
  // ==========================================================================
  describe("getCitation()", () => {
    it("returns Official Help entry for bare slug without moduleName", () => {
      const info = getCitation("account-management");
      expect(info).toBeDefined();
      expect(info!.category).toBe("Official Help");
      expect(info!.url).toContain("salesforce.com");
    });

    it("returns PM Enablement entry when moduleName matches", () => {
      const info = getCitation("account-management", "account-management");
      expect(info).toBeDefined();
      expect(info!.category).toBe("PM Enablement");
    });

    it("resolves individual file slug within a module", () => {
      const info = getCitation("provider-card", "account-management");
      expect(info).toBeDefined();
      expect(info!.category).toBe("PM Enablement");
      expect(info!.label).toBe("Provider Card");
    });

    it("falls back to citationMap when moduleName has no match", () => {
      // "common-issues" exists only in citationMap, not moduleCitationMap
      const info = getCitation("common-issues", "nonexistent-module");
      expect(info).toBeDefined();
      expect(info!.category).toBe("Troubleshooting");
    });

    it("returns undefined for completely unknown slug", () => {
      const info = getCitation("this-does-not-exist");
      expect(info).toBeUndefined();
    });
  });
});

// ==========================================================================
// formatCitation() — the function that builds the actual citation block
// ==========================================================================
describe("formatCitation()", () => {
  it("returns citation with 📖 **Source:** prefix", () => {
    const result = formatCitation("common-issues");
    expect(result).toContain("📖 **Source:**");
  });

  it("includes URL link for Official Help docs", () => {
    const result = formatCitation("account-management");
    expect(result).toContain("📖 **Source:**");
    expect(result).toContain("Official Help");
    expect(result).toContain("🔗 **Link:**");
    expect(result).toContain("https://help.salesforce.com");
  });

  it("includes file path for every citation", () => {
    const result = formatCitation("account-management");
    expect(result).toContain("📂 **File:**");
    expect(result).toMatch(/\.md$/m);
  });

  it("returns PM Enablement citation when moduleName provided", () => {
    const result = formatCitation("visit-management", "visit-management");
    expect(result).toContain("📖 **Source:**");
    expect(result).toContain("PM Enablement");
    expect(result).toContain("Visit Management");
    expect(result).toContain("📂 **File:**");
  });

  it("file path includes module directory for PM Enablement", () => {
    const result = formatCitation("provider-card", "account-management");
    expect(result).toContain("📂 **File:**");
    expect(result).toMatch(/account-management\/provider-card\.md/);
  });

  it("prefers PM Enablement over Official Help when moduleName matches", () => {
    const result = formatCitation("account-management", "account-management");
    expect(result).toContain("PM Enablement");
    expect(result).not.toContain("Official Help");
  });

  it("returns Official Help when no moduleName for shared slug", () => {
    const result = formatCitation("account-management");
    expect(result).toContain("Official Help");
  });

  it("falls back gracefully for unmapped slug", () => {
    const result = formatCitation("totally-unknown-slug");
    expect(result).toContain("📖 **Source:**");
    expect(result).toContain("📂 **File:**");
  });

  it("falls back gracefully for unmapped slug with moduleName", () => {
    const result = formatCitation("unknown-file", "unknown-module");
    expect(result).toContain("📖 **Source:**");
    expect(result).toContain("PM Enablement");
  });

  it("uses blockquote format for verbatim preservation", () => {
    const result = formatCitation("common-issues");
    // Every line should be a blockquote (> prefix)
    const lines = result.trim().split("\n");
    for (const line of lines) {
      expect(line, `Line not a blockquote: "${line}"`).toMatch(/^>/);
    }
  });
});

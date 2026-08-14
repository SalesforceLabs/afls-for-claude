import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock fs and path modules
vi.mock("fs", () => ({
  readFileSync: vi.fn(),
  readdirSync: vi.fn(),
  existsSync: vi.fn(),
}));

const { readFileSync, readdirSync, existsSync } = await import("fs");
const mockExistsSync = vi.mocked(existsSync);
const mockReaddirSync = vi.mocked(readdirSync);
const mockReadFileSync = vi.mocked(readFileSync);

const {
  loadKnowledgeBase,
  getModuleList,
  getModuleContent,
  searchKnowledge,
  getHelpDocList,
  getHelpDocContent,
  getExerciseList,
  getExerciseContent,
  getGuideList,
  getGuideContent,
  getTroubleshootingList,
  getTroubleshootingContent,
  getCommonIssues,
} = await import("../../src/knowledge-loader.js");

describe("knowledge-loader.ts", () => {
  beforeEach(() => {
    vi.mocked(existsSync).mockReset();
    vi.mocked(readdirSync).mockReset();
    vi.mocked(readFileSync).mockReset();
  });

  // ==========================================================================
  // loadKnowledgeBase
  // ==========================================================================
  describe("loadKnowledgeBase()", () => {
    it("returns empty when knowledge directory is missing", () => {
      mockExistsSync.mockReturnValue(false);

      const kb = loadKnowledgeBase();
      expect(kb.modules.size).toBe(0);
    });

    it("loads module directories", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockImplementation((_path: any, options?: any) => {
        if (options?.withFileTypes) {
          return [
            { name: "visit-management", isDirectory: () => true },
            { name: "sample-management", isDirectory: () => true },
          ] as any;
        }
        return ["overview.md", "config.md"] as any;
      });
      mockReadFileSync.mockReturnValue("# Test content");

      const kb = loadKnowledgeBase();
      expect(kb.modules.size).toBe(2);
      expect(kb.modules.has("visit-management")).toBe(true);
    });

    it("concatenates markdown content from all files", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockImplementation((_path: any, options?: any) => {
        if (options?.withFileTypes) {
          return [
            { name: "test-module", isDirectory: () => true },
          ] as any;
        }
        return ["file1.md", "file2.md"] as any;
      });
      mockReadFileSync.mockReturnValue("Content here");

      const kb = loadKnowledgeBase();
      const mod = kb.modules.get("test-module");
      expect(mod?.content).toContain("Content here");
      expect(mod?.files).toEqual(["file1.md", "file2.md"]);
    });

    it("skips _index.md files", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockImplementation((_path: any, options?: any) => {
        if (options?.withFileTypes) {
          return [
            { name: "mod", isDirectory: () => true },
          ] as any;
        }
        return ["_index.md", "real.md"] as any;
      });
      mockReadFileSync.mockReturnValue("Real content");

      const kb = loadKnowledgeBase();
      const mod = kb.modules.get("mod");
      expect(mod?.files).toEqual(["real.md"]);
    });
  });

  // ==========================================================================
  // getModuleList
  // ==========================================================================
  describe("getModuleList()", () => {
    it("returns empty when directory missing", () => {
      mockExistsSync.mockReturnValue(false);
      expect(getModuleList()).toEqual([]);
    });

    it("returns slugs, titles, and file counts", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockImplementation((_path: any, options?: any) => {
        if (options?.withFileTypes) {
          return [
            { name: "visit-management", isDirectory: () => true },
          ] as any;
        }
        return ["overview.md", "config.md"] as any;
      });

      const modules = getModuleList();
      expect(modules.length).toBe(1);
      expect(modules[0].slug).toBe("visit-management");
      expect(modules[0].title).toBe("Visit Management");
      expect(modules[0].fileCount).toBe(2);
    });
  });

  // ==========================================================================
  // getModuleContent
  // ==========================================================================
  describe("getModuleContent()", () => {
    it("returns null for invalid slug", () => {
      mockExistsSync.mockReturnValue(false);
      expect(getModuleContent("nonexistent")).toBeNull();
    });

    it("returns content for valid slug", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockReturnValue(["overview.md"] as any);
      mockReadFileSync.mockReturnValue("# Overview\nSome content");

      const content = getModuleContent("visit-management");
      expect(content).toContain("Visit Management");
      expect(content).toContain("Some content");
    });
  });

  // ==========================================================================
  // searchKnowledge
  // ==========================================================================
  describe("searchKnowledge()", () => {
    it("returns empty when no matches", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockImplementation((_path: any, options?: any) => {
        if (options?.withFileTypes) {
          return [
            { name: "mod", isDirectory: () => true },
          ] as any;
        }
        return ["doc.md"] as any;
      });
      mockReadFileSync.mockReturnValue("Nothing relevant here");

      const results = searchKnowledge("zzznonexistent");
      expect(results).toEqual([]);
    });

    it("finds matches across directories", () => {
      let callCount = 0;
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockImplementation((_path: any, options?: any) => {
        if (options?.withFileTypes) {
          return [
            { name: "visits", isDirectory: () => true },
          ] as any;
        }
        return ["doc.md"] as any;
      });
      mockReadFileSync.mockReturnValue(
        "This document covers visit management configuration"
      );

      const results = searchKnowledge("visit");
      expect(results.length).toBeGreaterThan(0);
      expect(results[0].excerpt).toContain("visit");
    });
  });

  // ==========================================================================
  // Doc accessor functions
  // ==========================================================================
  describe("doc accessors", () => {
    it("getHelpDocList returns empty when dir missing", () => {
      mockExistsSync.mockReturnValue(false);
      expect(getHelpDocList()).toEqual([]);
    });

    it("getHelpDocList returns slug and title", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockReturnValue(["visit-help.md"] as any);

      const docs = getHelpDocList();
      expect(docs.length).toBe(1);
      expect(docs[0].slug).toBe("visit-help");
      expect(docs[0].title).toBe("Visit Help");
    });

    it("getHelpDocContent returns null for missing file", () => {
      mockExistsSync.mockReturnValue(false);
      expect(getHelpDocContent("missing")).toBeNull();
    });

    it("getHelpDocContent returns file content", () => {
      mockExistsSync.mockReturnValue(true);
      mockReadFileSync.mockReturnValue("Help content here");
      expect(getHelpDocContent("visit-help")).toBe("Help content here");
    });

    it("getExerciseList returns exercises", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockReturnValue(["lab-1.md"] as any);
      expect(getExerciseList().length).toBe(1);
    });

    it("getExerciseContent returns null for missing", () => {
      mockExistsSync.mockReturnValue(false);
      expect(getExerciseContent("missing")).toBeNull();
    });

    it("getGuideList returns guides", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockReturnValue(["dev-guide.md"] as any);
      expect(getGuideList().length).toBe(1);
    });

    it("getGuideContent returns null for missing", () => {
      mockExistsSync.mockReturnValue(false);
      expect(getGuideContent("missing")).toBeNull();
    });

    it("getTroubleshootingList returns docs", () => {
      mockExistsSync.mockReturnValue(true);
      mockReaddirSync.mockReturnValue(["common-issues.md"] as any);
      expect(getTroubleshootingList().length).toBe(1);
    });

    it("getTroubleshootingContent returns null for missing", () => {
      mockExistsSync.mockReturnValue(false);
      expect(getTroubleshootingContent("missing")).toBeNull();
    });

    it("getCommonIssues delegates to getTroubleshootingContent", () => {
      mockExistsSync.mockReturnValue(true);
      mockReadFileSync.mockReturnValue("Common issues doc");
      expect(getCommonIssues()).toBe("Common issues doc");
    });
  });
});

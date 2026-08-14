import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  MOCK_VALIDATION_RULE,
  MOCK_VALIDATION_RULE_WARNING,
  MOCK_VALIDATION_RULE_FILE,
} from "../../helpers/fixtures.js";

// Mock fs and yaml
vi.mock("fs", () => ({
  readFileSync: vi.fn(),
  readdirSync: vi.fn(),
  existsSync: vi.fn(),
}));

vi.mock("yaml", () => ({
  parse: vi.fn(),
}));

const { readFileSync, readdirSync, existsSync } = await import("fs");
const { parse: parseYaml } = await import("yaml");

const {
  loadAllRules,
  getAllRules,
  getRulesByGroup,
  getValidationGroups,
  getRuleById,
  findRulesBySymptom,
  getRulesByCategory,
  getRulesBySeverity,
  getRulesByTag,
} = await import("../../../src/validation/rules-loader.js");

describe("rules-loader.ts", () => {
  beforeEach(() => {
    vi.mocked(existsSync).mockReset();
    vi.mocked(readdirSync).mockReset();
    vi.mocked(readFileSync).mockReset();
    vi.mocked(parseYaml).mockReset();
  });

  // ==========================================================================
  // loadAllRules
  // ==========================================================================
  describe("loadAllRules()", () => {
    it("returns empty when rules directory is missing", () => {
      vi.mocked(existsSync).mockReturnValue(false);
      expect(loadAllRules()).toEqual([]);
    });

    it("skips files starting with underscore", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue([
        "_schema.yaml",
        "mobile-config.yaml",
      ] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml content");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const files = loadAllRules();
      expect(files.length).toBe(1);
    });

    it("parses valid YAML files", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml content");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const files = loadAllRules();
      expect(files.length).toBe(1);
      expect(files[0].rules.length).toBe(2);
    });

    it("handles YAML parse errors gracefully", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["bad.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("invalid: yaml: content:");
      vi.mocked(parseYaml).mockImplementation(() => {
        throw new Error("YAML parse error");
      });

      // Should not throw, just return empty
      const files = loadAllRules();
      expect(files).toEqual([]);
    });

    it("loads both .yaml and .yml files", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue([
        "rules.yaml",
        "more.yml",
        "readme.md",
      ] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml content");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const files = loadAllRules();
      expect(files.length).toBe(2);
    });
  });

  // ==========================================================================
  // getAllRules
  // ==========================================================================
  describe("getAllRules()", () => {
    it("flattens rules across files", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["a.yaml", "b.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const rules = getAllRules();
      // 2 files × 2 rules each = 4
      expect(rules.length).toBe(4);
    });
  });

  // ==========================================================================
  // getRulesByGroup
  // ==========================================================================
  describe("getRulesByGroup()", () => {
    beforeEach(() => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);
    });

    it("returns rules for matching group", () => {
      const rules = getRulesByGroup("test-group");
      expect(rules.length).toBe(2);
    });

    it("returns subset for partial group", () => {
      const rules = getRulesByGroup("partial-group");
      expect(rules.length).toBe(1);
      expect(rules[0].id).toBe("test-001");
    });

    it("returns empty for nonexistent group", () => {
      const rules = getRulesByGroup("no-such-group");
      expect(rules).toEqual([]);
    });
  });

  // ==========================================================================
  // getValidationGroups
  // ==========================================================================
  describe("getValidationGroups()", () => {
    it("returns groups with id, name, description, ruleCount", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const groups = getValidationGroups();
      expect(groups.length).toBe(2);
      const testGroup = groups.find((g) => g.id === "test-group");
      expect(testGroup).toBeDefined();
      expect(testGroup!.ruleCount).toBe(2);
    });
  });

  // ==========================================================================
  // getRuleById
  // ==========================================================================
  describe("getRuleById()", () => {
    beforeEach(() => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);
    });

    it("finds rule by ID", () => {
      const rule = getRuleById("test-001");
      expect(rule).toBeDefined();
      expect(rule!.name).toBe("Test Rule");
    });

    it("returns undefined for missing ID", () => {
      expect(getRuleById("nonexistent")).toBeUndefined();
    });
  });

  // ==========================================================================
  // findRulesBySymptom
  // ==========================================================================
  describe("findRulesBySymptom()", () => {
    beforeEach(() => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);
    });

    it("matches symptoms case-insensitively", () => {
      const rules = findRulesBySymptom("ERROR MESSAGE");
      expect(rules.length).toBeGreaterThan(0);
    });

    it("returns empty for no matching symptom", () => {
      const rules = findRulesBySymptom("completely unrelated text");
      expect(rules).toEqual([]);
    });
  });

  // ==========================================================================
  // Filter functions
  // ==========================================================================
  describe("getRulesByCategory()", () => {
    it("filters by category", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const rules = getRulesByCategory("configuration");
      expect(rules.length).toBe(2);
    });
  });

  describe("getRulesBySeverity()", () => {
    it("filters by severity", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const errors = getRulesBySeverity("error");
      expect(errors.length).toBe(1);
      expect(errors[0].id).toBe("test-001");

      const warnings = getRulesBySeverity("warning");
      expect(warnings.length).toBe(1);
      expect(warnings[0].id).toBe("test-002");
    });
  });

  describe("getRulesByTag()", () => {
    it("filters by tag", () => {
      vi.mocked(existsSync).mockReturnValue(true);
      vi.mocked(readdirSync).mockReturnValue(["rules.yaml"] as any);
      vi.mocked(readFileSync).mockReturnValue("yaml");
      vi.mocked(parseYaml).mockReturnValue(MOCK_VALIDATION_RULE_FILE);

      const testRules = getRulesByTag("test");
      expect(testRules.length).toBe(2);

      const warningRules = getRulesByTag("warning");
      expect(warningRules.length).toBe(1);
    });
  });
});

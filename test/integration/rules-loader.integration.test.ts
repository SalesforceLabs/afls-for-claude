import { describe, it, expect } from "vitest";
import {
  loadAllRules,
  getAllRules,
  getValidationGroups,
} from "../../src/validation/rules-loader.js";

/**
 * Integration tests that read real YAML rule files from
 * knowledge/validation-rules/ directory. Validates structure
 * and referential integrity.
 */
describe("rules-loader integration (real YAML files)", () => {
  it("loads all real YAML files (excluding _schema.yaml)", () => {
    const ruleFiles = loadAllRules();
    expect(ruleFiles.length).toBeGreaterThan(0);

    for (const rf of ruleFiles) {
      expect(rf.schema_version).toBeDefined();
      expect(rf.category_name).toBeTruthy();
      expect(rf.rules).toBeDefined();
      expect(Array.isArray(rf.rules)).toBe(true);
    }
  });

  it("every rule has required fields", () => {
    const allRules = getAllRules();
    expect(allRules.length).toBeGreaterThan(0);

    for (const rule of allRules) {
      expect(rule.id, `Rule missing id`).toBeTruthy();
      expect(rule.name, `Rule ${rule.id} missing name`).toBeTruthy();
      expect(
        rule.description,
        `Rule ${rule.id} missing description`
      ).toBeTruthy();
      expect(
        rule.category,
        `Rule ${rule.id} missing category`
      ).toBeTruthy();
      expect(
        rule.severity,
        `Rule ${rule.id} missing severity`
      ).toBeTruthy();
      expect(rule.check, `Rule ${rule.id} missing check`).toBeDefined();
      expect(
        rule.symptoms,
        `Rule ${rule.id} missing symptoms`
      ).toBeDefined();
      expect(
        Array.isArray(rule.symptoms),
        `Rule ${rule.id} symptoms should be array`
      ).toBe(true);
      expect(
        rule.resolution,
        `Rule ${rule.id} missing resolution`
      ).toBeDefined();
      expect(
        rule.resolution.steps,
        `Rule ${rule.id} missing resolution.steps`
      ).toBeDefined();
      expect(
        Array.isArray(rule.resolution.steps),
        `Rule ${rule.id} resolution.steps should be array`
      ).toBe(true);
    }
  });

  it("all group rule references point to existing rule IDs", () => {
    const allRules = getAllRules();
    const ruleIds = new Set(allRules.map((r) => r.id));
    const groups = getValidationGroups();

    // Get group definitions from raw rule files to check rule references
    const ruleFiles = loadAllRules();
    for (const rf of ruleFiles) {
      if (!rf.groups) continue;

      for (const [groupId, group] of Object.entries(rf.groups)) {
        for (const ruleRef of group.rules) {
          expect(
            ruleIds.has(ruleRef),
            `Group '${groupId}' references non-existent rule '${ruleRef}'`
          ).toBe(true);
        }
      }
    }
  });
});

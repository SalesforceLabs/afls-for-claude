/**
 * Validation Rules Consistency Tests
 *
 * These tests load the actual YAML rule files from knowledge/validation-rules/
 * and verify structural consistency, naming conventions, uniqueness, and
 * adherence to the schema defined in _schema.yaml.
 */

import { describe, it, expect, beforeAll } from "vitest";
import { readFileSync, readdirSync } from "fs";
import { join, resolve } from "path";
import { parse as parseYaml } from "yaml";
import { fileURLToPath } from "url";
import { dirname } from "path";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const PROJECT_ROOT = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../../.."
);
const RULES_DIR = join(PROJECT_ROOT, "knowledge", "validation-rules");

const VALID_SEVERITIES = ["error", "warning", "info"] as const;

// Categories from _schema.yaml plus additional ones used in actual rule files.
// When a new category is introduced in YAML files, add it here and in
// src/validation/rules-loader.ts Category type to keep them in sync.
const VALID_CATEGORIES = [
  "mobile-login",
  "metadata-cache",
  "sync",
  "permissions",
  "configuration",
  "territory",
  "deployment",
  // Extended categories used by newer rule files
  "data",
  "data-context",
  "operational",
  "tracking",
] as const;

const VALID_CHECK_TYPES = [
  "soql",
  "soql_count",
  "tooling_soql",
  "tooling_soql_count",
  "metadata",
  "api",
  "cli",
  "composite",
] as const;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface ParsedRuleFile {
  filename: string;
  content: unknown;
}

interface ValidationRule {
  id?: unknown;
  name?: unknown;
  description?: unknown;
  category?: unknown;
  severity?: unknown;
  check?: {
    type?: unknown;
    query?: unknown;
    expect?: unknown;
    checks?: unknown[];
    [key: string]: unknown;
  };
  symptoms?: unknown;
  resolution?: {
    steps?: unknown;
    [key: string]: unknown;
  };
  tags?: unknown;
  prerequisites?: unknown;
  [key: string]: unknown;
}

interface RuleFile {
  schema_version?: unknown;
  category_name?: unknown;
  description?: unknown;
  rules?: ValidationRule[];
  groups?: Record<
    string,
    { name?: string; description?: string; rules?: string[] }
  >;
}

let ruleFiles: ParsedRuleFile[] = [];
let yamlFilenames: string[] = [];

/**
 * Load all rule YAML files (excluding _schema.yaml) once before all tests.
 */
beforeAll(() => {
  const allFiles = readdirSync(RULES_DIR).filter(
    (f) => (f.endsWith(".yaml") || f.endsWith(".yml")) && !f.startsWith("_")
  );

  yamlFilenames = allFiles;

  ruleFiles = allFiles.map((filename) => {
    const raw = readFileSync(join(RULES_DIR, filename), "utf-8");
    const content = parseYaml(raw);
    return { filename, content };
  });
});

// ===========================================================================
// 1. Every YAML file parses without errors
// ===========================================================================

describe("YAML parsing", () => {
  it("finds at least one rule file in the validation-rules directory", () => {
    expect(yamlFilenames.length).toBeGreaterThan(0);
  });

  it("every YAML file parses as valid YAML", () => {
    const errors: string[] = [];

    for (const filename of yamlFilenames) {
      try {
        const raw = readFileSync(join(RULES_DIR, filename), "utf-8");
        parseYaml(raw);
      } catch (e) {
        errors.push(
          `${filename}: ${e instanceof Error ? e.message : String(e)}`
        );
      }
    }

    expect(errors).toEqual([]);
  });

  it("every rule file parses as an object (not null, array, or scalar)", () => {
    const nonObjects = ruleFiles.filter(
      (rf) =>
        rf.content === null ||
        rf.content === undefined ||
        typeof rf.content !== "object" ||
        Array.isArray(rf.content)
    );

    expect(nonObjects.map((rf) => rf.filename)).toEqual([]);
  });
});

// ===========================================================================
// 2. Every rule has required fields
// ===========================================================================

describe("required fields", () => {
  it("every rule file has schema_version, category_name, and description", () => {
    const issues: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!file.schema_version) {
        issues.push(`${filename}: missing schema_version`);
      }
      if (!file.category_name) {
        issues.push(`${filename}: missing category_name`);
      }
      if (!file.description) {
        issues.push(`${filename}: missing description`);
      }
    }

    expect(issues).toEqual([]);
  });

  it("every rule has id, name, description, category, severity, check, and resolution", () => {
    const issues: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const ruleId = String(rule.id ?? "UNKNOWN");
        const prefix = `${filename} > ${ruleId}`;

        if (!rule.id || typeof rule.id !== "string") {
          issues.push(`${prefix}: missing or non-string 'id'`);
        }
        if (!rule.name || typeof rule.name !== "string") {
          issues.push(`${prefix}: missing or non-string 'name'`);
        }
        if (!rule.description || typeof rule.description !== "string") {
          issues.push(`${prefix}: missing or non-string 'description'`);
        }
        if (!rule.category || typeof rule.category !== "string") {
          issues.push(`${prefix}: missing or non-string 'category'`);
        }
        if (!rule.severity || typeof rule.severity !== "string") {
          issues.push(`${prefix}: missing or non-string 'severity'`);
        }
        if (!rule.check || typeof rule.check !== "object") {
          issues.push(`${prefix}: missing or non-object 'check'`);
        }
        if (!rule.resolution || typeof rule.resolution !== "object") {
          issues.push(`${prefix}: missing or non-object 'resolution'`);
        }
      }
    }

    expect(issues).toEqual([]);
  });

  it("every rule check has type and expect fields", () => {
    const issues: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const ruleId = String(rule.id ?? "UNKNOWN");
        const prefix = `${filename} > ${ruleId}`;
        const check = rule.check;

        if (!check || typeof check !== "object") continue;

        if (!check.type || typeof check.type !== "string") {
          issues.push(`${prefix}: check missing 'type'`);
        }
        if (!check.expect || typeof check.expect !== "string") {
          // Composite checks may have expect on sub-checks, not top level
          if (check.type !== "composite") {
            issues.push(`${prefix}: check missing 'expect'`);
          }
        }
      }
    }

    expect(issues).toEqual([]);
  });

  it("every rule resolution has at least one step", () => {
    const issues: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const ruleId = String(rule.id ?? "UNKNOWN");
        const prefix = `${filename} > ${ruleId}`;
        const resolution = rule.resolution;

        if (!resolution || typeof resolution !== "object") continue;

        if (
          !Array.isArray(resolution.steps) ||
          resolution.steps.length === 0
        ) {
          issues.push(`${prefix}: resolution has no steps`);
        }
      }
    }

    expect(issues).toEqual([]);
  });

  it("every rule has a symptoms array", () => {
    const issues: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const ruleId = String(rule.id ?? "UNKNOWN");
        const prefix = `${filename} > ${ruleId}`;

        if (!Array.isArray(rule.symptoms)) {
          issues.push(`${prefix}: missing or non-array 'symptoms'`);
        }
      }
    }

    expect(issues).toEqual([]);
  });
});

// ===========================================================================
// 3. Rule IDs are globally unique
// ===========================================================================

describe("rule ID uniqueness", () => {
  it("all rule IDs across all files are globally unique", () => {
    const idOccurrences = new Map<string, string[]>();

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        if (typeof rule.id !== "string") continue;
        const existing = idOccurrences.get(rule.id) || [];
        existing.push(filename);
        idOccurrences.set(rule.id, existing);
      }
    }

    const duplicates: string[] = [];
    for (const [id, files] of idOccurrences) {
      if (files.length > 1) {
        duplicates.push(`"${id}" appears in: ${files.join(", ")}`);
      }
    }

    expect(duplicates).toEqual([]);
  });
});

// ===========================================================================
// 4. Rule IDs follow naming conventions
// ===========================================================================

describe("rule ID naming conventions", () => {
  // Rule IDs should be kebab-case with a numeric suffix: {prefix}-{NNN}
  const RULE_ID_PATTERN = /^[a-z][a-z0-9]*(-[a-z0-9]+)*-\d{3}$/;

  it("every rule ID matches the kebab-case-NNN pattern", () => {
    const violations: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        if (typeof rule.id !== "string") continue;

        if (!RULE_ID_PATTERN.test(rule.id)) {
          violations.push(
            `${filename}: "${rule.id}" does not match pattern {prefix}-{NNN} (e.g., mobile-001)`
          );
        }
      }
    }

    expect(violations).toEqual([]);
  });

  it("rule IDs within a file share a consistent prefix", () => {
    const issues: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules) || file.rules.length === 0) continue;

      // Extract prefixes (everything before the last -NNN)
      const prefixes = new Set<string>();
      for (const rule of file.rules) {
        if (typeof rule.id !== "string") continue;
        const match = rule.id.match(/^(.+)-\d{3}$/);
        if (match) {
          prefixes.add(match[1]);
        }
      }

      // Allow a file to have multiple related prefixes (e.g., mobile-config.yaml
      // has mobile-xxx, cache-xxx, sync-xxx, config-xxx), but flag if there are
      // an unreasonable number (>10 would suggest a miscategorization).
      if (prefixes.size > 10) {
        issues.push(
          `${filename}: has ${prefixes.size} different ID prefixes (${[...prefixes].join(", ")}), which seems excessive`
        );
      }
    }

    expect(issues).toEqual([]);
  });
});

// ===========================================================================
// 5. Severity values are valid
// ===========================================================================

describe("severity values", () => {
  it("every rule severity is one of: error, warning, info", () => {
    const invalidSeverities: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        if (typeof rule.severity !== "string") continue;

        if (
          !(VALID_SEVERITIES as readonly string[]).includes(rule.severity)
        ) {
          invalidSeverities.push(
            `${filename} > ${rule.id}: severity "${rule.severity}" is not valid (expected one of: ${VALID_SEVERITIES.join(", ")})`
          );
        }
      }
    }

    expect(invalidSeverities).toEqual([]);
  });
});

// ===========================================================================
// 5b. Category values are valid
// ===========================================================================

describe("category values", () => {
  it("every rule category is one of the schema-defined categories", () => {
    const invalidCategories: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        if (typeof rule.category !== "string") continue;

        if (
          !(VALID_CATEGORIES as readonly string[]).includes(rule.category)
        ) {
          invalidCategories.push(
            `${filename} > ${rule.id}: category "${rule.category}" is not valid (expected one of: ${VALID_CATEGORIES.join(", ")})`
          );
        }
      }
    }

    expect(invalidCategories).toEqual([]);
  });
});

// ===========================================================================
// 5c. Check type values are valid
// ===========================================================================

describe("check type values", () => {
  it("every rule check type is a valid check type from the schema", () => {
    const invalidCheckTypes: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const check = rule.check;
        if (!check || typeof check !== "object") continue;
        if (typeof check.type !== "string") continue;

        if (
          !(VALID_CHECK_TYPES as readonly string[]).includes(check.type)
        ) {
          invalidCheckTypes.push(
            `${filename} > ${rule.id}: check type "${check.type}" is not valid (expected one of: ${VALID_CHECK_TYPES.join(", ")})`
          );
        }
      }
    }

    expect(invalidCheckTypes).toEqual([]);
  });
});

// ===========================================================================
// 6. No orphaned rule files
// ===========================================================================

describe("no orphaned rule files", () => {
  it("every YAML file (except _schema.yaml) contains at least one rule", () => {
    const emptyFiles: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;

      if (!Array.isArray(file.rules) || file.rules.length === 0) {
        emptyFiles.push(filename);
      }
    }

    expect(emptyFiles).toEqual([]);
  });

  it("no rule file has an empty rules array", () => {
    const emptyRulesFiles = ruleFiles.filter((rf) => {
      const file = rf.content as RuleFile;
      return Array.isArray(file.rules) && file.rules.length === 0;
    });

    expect(emptyRulesFiles.map((rf) => rf.filename)).toEqual([]);
  });
});

// ===========================================================================
// 7. Rule references are valid
// ===========================================================================

describe("rule references", () => {
  it("group rule references point to existing rule IDs", () => {
    // Collect all rule IDs
    const allRuleIds = new Set<string>();
    for (const { content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        if (typeof rule.id === "string") {
          allRuleIds.add(rule.id);
        }
      }
    }

    // Check group references
    const brokenReferences: string[] = [];
    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!file.groups) continue;

      for (const [groupId, group] of Object.entries(file.groups)) {
        if (!Array.isArray(group.rules)) continue;

        for (const ruleId of group.rules) {
          if (!allRuleIds.has(ruleId)) {
            brokenReferences.push(
              `${filename} > group "${groupId}": references non-existent rule "${ruleId}"`
            );
          }
        }
      }
    }

    expect(brokenReferences).toEqual([]);
  });

  it("prerequisite references point to existing rule IDs", () => {
    // Collect all rule IDs
    const allRuleIds = new Set<string>();
    for (const { content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        if (typeof rule.id === "string") {
          allRuleIds.add(rule.id);
        }
      }
    }

    // Check prerequisite references
    const brokenPrereqs: string[] = [];
    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        if (!Array.isArray(rule.prerequisites)) continue;

        for (const prereqId of rule.prerequisites) {
          if (typeof prereqId === "string" && !allRuleIds.has(prereqId)) {
            brokenPrereqs.push(
              `${filename} > ${rule.id}: prerequisite "${prereqId}" does not exist`
            );
          }
        }
      }
    }

    expect(brokenPrereqs).toEqual([]);
  });

  it("SOQL/tooling check types have a query field", () => {
    const missingQueries: string[] = [];
    const queryCheckTypes = [
      "soql",
      "soql_count",
      "tooling_soql",
      "tooling_soql_count",
    ];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const check = rule.check;
        if (!check || typeof check !== "object") continue;

        if (
          typeof check.type === "string" &&
          queryCheckTypes.includes(check.type)
        ) {
          if (!check.query || typeof check.query !== "string") {
            missingQueries.push(
              `${filename} > ${rule.id}: check type "${check.type}" is missing required 'query' field`
            );
          }
        }
      }
    }

    expect(missingQueries).toEqual([]);
  });

  it("composite checks have a checks array with sub-checks", () => {
    const issues: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const check = rule.check;
        if (!check || typeof check !== "object") continue;

        if (check.type === "composite") {
          if (!Array.isArray(check.checks) || check.checks.length === 0) {
            issues.push(
              `${filename} > ${rule.id}: composite check missing 'checks' array`
            );
          }
        }
      }
    }

    expect(issues).toEqual([]);
  });

  it("SOQL queries reference plausible object names (no __c custom objects for standard AFLS objects)", () => {
    // These are known incorrect object names from the CLAUDE.md
    const WRONG_OBJECT_NAMES = [
      "Visit__c",
      "ProviderVisit__c",
      "SampleTransaction__c",
      "SampleInventory__c",
      "SampleLimit__c",
      "SampleProduct__c",
      "SampleLot__c",
      "HealthcareProvider__c",
      "ContactPointAddress__c",
      "BusinessLicense__c",
      "ProviderAffiliation__c",
      "AccountAddress__c",
      "ActivityPlan__c",
      "ProviderActivityGoal__c",
      "AccountGoal__c",
      "TimePeriod__c",
      "GoalMeasure__c",
      "AccountTerritory__c",
      "TerritoryAssignment__c",
      "TerritoryInfo__c",
    ];

    const violations: string[] = [];

    for (const { filename, content } of ruleFiles) {
      const file = content as RuleFile;
      if (!Array.isArray(file.rules)) continue;

      for (const rule of file.rules) {
        const check = rule.check;
        if (!check || typeof check !== "object") continue;

        const query =
          typeof check.query === "string" ? check.query : "";
        const errorDetailQuery =
          typeof check.error_detail_query === "string"
            ? check.error_detail_query
            : "";
        const allQueries = query + " " + errorDetailQuery;

        for (const wrongName of WRONG_OBJECT_NAMES) {
          if (allQueries.includes(wrongName)) {
            violations.push(
              `${filename} > ${rule.id}: query references incorrect object name "${wrongName}"`
            );
          }
        }
      }
    }

    expect(violations).toEqual([]);
  });
});

// ===========================================================================
// Bonus: Overall statistics (informational)
// ===========================================================================

describe("overall statistics", () => {
  it("reports total rule count across all files", () => {
    let totalRules = 0;
    for (const { content } of ruleFiles) {
      const file = content as RuleFile;
      if (Array.isArray(file.rules)) {
        totalRules += file.rules.length;
      }
    }

    // Expect at least some rules exist (sanity check)
    expect(totalRules).toBeGreaterThan(0);

    // Log for informational purposes
    console.log(
      `Total validation rules across ${ruleFiles.length} files: ${totalRules}`
    );
  });
});

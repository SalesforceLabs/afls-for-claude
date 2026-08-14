/**
 * Validation module exports
 */

export {
  // Types
  type ValidationRule,
  type ValidationGroup,
  type CheckResult,
  type AuditResult,
  type Severity,
  type Category,
  // Loader functions
  loadAllRules,
  getAllRules,
  getRulesByGroup,
  getValidationGroups,
  getRuleById,
  findRulesBySymptom,
  getRulesByCategory,
  getRulesBySeverity,
  getRulesByTag,
} from "./rules-loader.js";

export {
  // Executor functions
  runAudit,
  formatAuditResults,
} from "./rules-executor.js";

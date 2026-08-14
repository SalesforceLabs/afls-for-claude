/**
 * Shared mock data for tests.
 */
import type { SfOrg, SfOrgListResult, SoqlQueryResult } from "../../src/salesforce/cli.js";

export const MOCK_ORG: SfOrg = {
  alias: "my-afls-org",
  username: "admin@example.com",
  orgId: "00D000000000001",
  instanceUrl: "https://example.my.salesforce.com",
  isDefaultUsername: false,
  connectedStatus: "Connected",
};

export const MOCK_ORG_DEFAULT: SfOrg = {
  alias: "default-org",
  username: "default@example.com",
  orgId: "00D000000000002",
  instanceUrl: "https://default.my.salesforce.com",
  isDefaultUsername: true,
  connectedStatus: "Connected",
};

export const MOCK_ORG_NO_ALIAS: SfOrg = {
  username: "nolias@example.com",
  orgId: "00D000000000003",
  instanceUrl: "https://noalias.my.salesforce.com",
  connectedStatus: "Connected",
};

export const MOCK_ORG_DISCONNECTED: SfOrg = {
  alias: "stale-org",
  username: "stale@example.com",
  orgId: "00D000000000004",
  instanceUrl: "https://stale.my.salesforce.com",
  connectedStatus: "RefreshTokenAuthError",
};

export const MOCK_ORG_LIST_RESULT: SfOrgListResult = {
  nonScratchOrgs: [MOCK_ORG, MOCK_ORG_DEFAULT],
  scratchOrgs: [],
};

export const MOCK_SOQL_RESULT: SoqlQueryResult = {
  totalSize: 2,
  done: true,
  records: [
    { Id: "001000000000001", Name: "Record 1" },
    { Id: "001000000000002", Name: "Record 2" },
  ],
};

export const MOCK_EMPTY_SOQL_RESULT: SoqlQueryResult = {
  totalSize: 0,
  done: true,
  records: [],
};

export const MOCK_VALIDATION_RULE = {
  id: "test-001",
  name: "Test Rule",
  description: "A test validation rule",
  category: "configuration" as const,
  severity: "error" as const,
  check: {
    type: "soql_count" as const,
    query: "SELECT COUNT() FROM Account",
    expect: "count > 0",
  },
  symptoms: ["Error message one", "Error message two"],
  resolution: {
    steps: ["Step 1: Do this", "Step 2: Do that"],
    ui_path: "Setup > Test",
  },
  tags: ["test", "account"],
};

export const MOCK_VALIDATION_RULE_WARNING = {
  ...MOCK_VALIDATION_RULE,
  id: "test-002",
  name: "Test Warning Rule",
  severity: "warning" as const,
  tags: ["test", "warning"],
};

export const MOCK_VALIDATION_RULE_FILE = {
  schema_version: "1.0",
  category_name: "Test Category",
  description: "Test rules",
  rules: [MOCK_VALIDATION_RULE, MOCK_VALIDATION_RULE_WARNING],
  groups: {
    "test-group": {
      name: "Test Group",
      description: "A test group",
      rules: ["test-001", "test-002"],
    },
    "partial-group": {
      name: "Partial Group",
      description: "Only one rule",
      rules: ["test-001"],
    },
  },
};

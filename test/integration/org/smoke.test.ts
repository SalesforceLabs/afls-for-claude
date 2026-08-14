/**
 * Org integration smoke tests.
 *
 * These tests hit a REAL Salesforce org and are gated behind the
 * LSC_TEST_ORG environment variable. Set it to the alias or username
 * of the org you want to test against:
 *
 *   LSC_TEST_ORG=my-afls-sandbox npx vitest test/integration/org/smoke.test.ts
 *
 * Tests are designed to be resilient: an org without AFLS installed should
 * still pass (tools return structured error/empty results, not crashes).
 */

import { describe, it, expect } from "vitest";
import {
  isSfCliInstalled,
  getSfCliVersion,
  listOrgs,
  runSoqlQuery,
  runToolingQuery,
  describeSObject,
  type SfOrgListResult,
  type SoqlQueryResult,
  type SObjectDescribeResult,
} from "../../../src/salesforce/cli.js";
import {
  checkSetupStatus,
  getEffectiveTargetOrg,
  setTargetOrg,
  clearTargetOrg,
} from "../../../src/salesforce/auth.js";

const TEST_ORG = process.env.LSC_TEST_ORG;
const TIMEOUT = 30_000;

describe.skipIf(!TEST_ORG)("Org integration smoke tests", () => {
  // ---------------------------------------------------------------------------
  // 1. SF CLI is installed
  // ---------------------------------------------------------------------------
  describe("SF CLI availability", () => {
    it(
      "sf command is installed and reachable",
      async () => {
        const installed = await isSfCliInstalled();
        expect(installed).toBe(true);
      },
      TIMEOUT
    );

    it(
      "sf --version returns a version string",
      async () => {
        const result = await getSfCliVersion();
        expect(result.success).toBe(true);
        expect(result.data).toBeDefined();
        expect(result.data).toMatch(/sf/i);
      },
      TIMEOUT
    );
  });

  // ---------------------------------------------------------------------------
  // 2. At least one org is authenticated
  // ---------------------------------------------------------------------------
  describe("Org authentication", () => {
    it(
      "listOrgs returns at least one org",
      async () => {
        const result = await listOrgs();
        expect(result.success).toBe(true);
        expect(result.data).toBeDefined();

        const data = result.data as SfOrgListResult;
        const allOrgs = [
          ...(data.nonScratchOrgs || []),
          ...(data.scratchOrgs || []),
        ];
        expect(allOrgs.length).toBeGreaterThanOrEqual(1);
      },
      TIMEOUT
    );

    it(
      "the test org is among the authenticated orgs",
      async () => {
        const result = await listOrgs();
        expect(result.success).toBe(true);

        const data = result.data as SfOrgListResult;
        const allOrgs = [
          ...(data.nonScratchOrgs || []),
          ...(data.scratchOrgs || []),
        ];

        const found = allOrgs.some(
          (org) => org.alias === TEST_ORG || org.username === TEST_ORG
        );
        expect(found).toBe(true);
      },
      TIMEOUT
    );

    it(
      "checkSetupStatus reports CLI installed and orgs available",
      async () => {
        // Temporarily set target org for the auth module
        setTargetOrg(TEST_ORG!);
        try {
          const status = await checkSetupStatus();
          expect(status.cliInstalled).toBe(true);
          expect(status.hasAuthenticatedOrgs).toBe(true);
          expect(status.orgs.length).toBeGreaterThanOrEqual(1);
        } finally {
          clearTargetOrg();
        }
      },
      TIMEOUT
    );
  });

  // ---------------------------------------------------------------------------
  // 3. SOQL query returns structured data
  // ---------------------------------------------------------------------------
  describe("SOQL queries", () => {
    it(
      "SELECT Id, Name FROM Account LIMIT 1 returns records array",
      async () => {
        const result = await runSoqlQuery(
          "SELECT Id, Name FROM Account LIMIT 1",
          TEST_ORG!
        );

        expect(result.success).toBe(true);
        expect(result.data).toBeDefined();

        const data = result.data as SoqlQueryResult;
        expect(data).toHaveProperty("totalSize");
        expect(data).toHaveProperty("done");
        expect(data).toHaveProperty("records");
        expect(Array.isArray(data.records)).toBe(true);

        // If the org has accounts, verify record shape
        if (data.records.length > 0) {
          const record = data.records[0];
          expect(record).toHaveProperty("Id");
          expect(record).toHaveProperty("Name");
        }
      },
      TIMEOUT
    );

    it(
      "a query against a non-existent object returns a structured error",
      async () => {
        const result = await runSoqlQuery(
          "SELECT Id FROM ThisObjectDoesNotExist__c LIMIT 1",
          TEST_ORG!
        );

        // Should not throw; should return a structured failure
        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
        expect(typeof result.error).toBe("string");
      },
      TIMEOUT
    );

    it(
      "a malformed SOQL returns a structured error",
      async () => {
        const result = await runSoqlQuery(
          "THIS IS NOT SOQL",
          TEST_ORG!
        );

        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
      },
      TIMEOUT
    );
  });

  // ---------------------------------------------------------------------------
  // 4. Describe object returns metadata
  // ---------------------------------------------------------------------------
  describe("describeSObject", () => {
    it(
      "Account describe returns fields including Id and Name",
      async () => {
        const result = await describeSObject("Account", TEST_ORG!);

        expect(result.success).toBe(true);
        expect(result.data).toBeDefined();

        const data = result.data as SObjectDescribeResult;
        expect(data.name).toBe("Account");
        expect(Array.isArray(data.fields)).toBe(true);
        expect(data.fields.length).toBeGreaterThan(0);

        const fieldNames = data.fields.map((f) => f.name);
        expect(fieldNames).toContain("Id");
        expect(fieldNames).toContain("Name");

        // Verify field shape
        const idField = data.fields.find((f) => f.name === "Id");
        expect(idField).toBeDefined();
        expect(idField).toHaveProperty("type");
        expect(idField).toHaveProperty("label");
      },
      TIMEOUT
    );

    it(
      "describing a non-existent object returns a structured error",
      async () => {
        const result = await describeSObject(
          "ThisObjectDoesNotExist__c",
          TEST_ORG!
        );

        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
      },
      TIMEOUT
    );
  });

  // ---------------------------------------------------------------------------
  // 5. Config check tools don't crash
  //
  //    These tools use Tooling API queries against AFLS-specific objects.
  //    If AFLS is not installed the queries will fail gracefully with a
  //    structured error — the key assertion is "no unhandled exception."
  // ---------------------------------------------------------------------------
  describe("config check queries (graceful on non-AFLS orgs)", () => {
    it(
      "trigger handler query returns structured result",
      async () => {
        const result = await runSoqlQuery(
          "SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeScienceTriggerHandler ORDER BY MasterLabel LIMIT 5",
          TEST_ORG!
        );

        // Either succeeds with records (AFLS org) or fails with a clear error (non-AFLS org)
        expect(result).toHaveProperty("success");
        if (result.success) {
          expect(result.data).toBeDefined();
          expect(result.data).toHaveProperty("records");
          expect(Array.isArray(result.data!.records)).toBe(true);
        } else {
          expect(result.error).toBeDefined();
          expect(typeof result.error).toBe("string");
        }
      },
      TIMEOUT
    );

    it(
      "tooling query for LifeSciConfigCategory returns structured result",
      async () => {
        const result = await runToolingQuery(
          "SELECT Id, Category, MasterLabel FROM LifeSciConfigCategory ORDER BY Category LIMIT 5",
          TEST_ORG!
        );

        expect(result).toHaveProperty("success");
        if (result.success) {
          expect(result.data).toBeDefined();
          expect(Array.isArray(result.data!.records)).toBe(true);
        } else {
          expect(result.error).toBeDefined();
        }
      },
      TIMEOUT
    );

    it(
      "tooling query for DbSchema category returns structured result",
      async () => {
        const result = await runToolingQuery(
          "SELECT Id FROM LifeSciConfigCategory WHERE Category = 'DbSchema' LIMIT 1",
          TEST_ORG!
        );

        expect(result).toHaveProperty("success");
        if (result.success) {
          expect(result.data).toBeDefined();
        } else {
          // Non-AFLS org: structured error, not a crash
          expect(result.error).toBeDefined();
        }
      },
      TIMEOUT
    );

    it(
      "visit-related object query returns structured result",
      async () => {
        // Check if Visit object exists via describe (standard AFLS object)
        const result = await describeSObject("Visit", TEST_ORG!);

        expect(result).toHaveProperty("success");
        if (result.success) {
          expect(result.data).toHaveProperty("name", "Visit");
          expect(Array.isArray(result.data!.fields)).toBe(true);
        } else {
          expect(result.error).toBeDefined();
        }
      },
      TIMEOUT
    );

    it(
      "sample-related object query returns structured result",
      async () => {
        const result = await runSoqlQuery(
          "SELECT Id, Name FROM Product2 LIMIT 1",
          TEST_ORG!
        );

        // Product2 is a standard object, should always succeed
        expect(result.success).toBe(true);
        expect(result.data).toHaveProperty("records");
      },
      TIMEOUT
    );

    it(
      "account-related territory query returns structured result",
      async () => {
        const result = await runSoqlQuery(
          "SELECT Id, Name FROM Territory2Model LIMIT 1",
          TEST_ORG!
        );

        // Territory2Model may not exist in every org
        expect(result).toHaveProperty("success");
        if (result.success) {
          expect(result.data).toHaveProperty("records");
        } else {
          expect(result.error).toBeDefined();
        }
      },
      TIMEOUT
    );
  });

  // ---------------------------------------------------------------------------
  // 6. Admin settings tools return valid structure
  // ---------------------------------------------------------------------------
  describe("admin settings (Tooling API)", () => {
    it(
      "LifeSciConfigCategory query returns array or structured error",
      async () => {
        const result = await runToolingQuery(
          "SELECT Id, Category, MasterLabel FROM LifeSciConfigCategory ORDER BY Category",
          TEST_ORG!
        );

        expect(result).toHaveProperty("success");
        if (result.success) {
          const data = result.data as SoqlQueryResult;
          expect(data).toHaveProperty("records");
          expect(Array.isArray(data.records)).toBe(true);

          // If categories exist, verify they have the expected fields
          if (data.records.length > 0) {
            const cat = data.records[0] as Record<string, unknown>;
            expect(cat).toHaveProperty("Id");
            expect(cat).toHaveProperty("Category");
          }
        } else {
          // Non-AFLS org: just verify it's a clean error
          expect(typeof result.error).toBe("string");
        }
      },
      TIMEOUT
    );

    it(
      "LifeSciConfigRecord query returns array or structured error",
      async () => {
        const result = await runToolingQuery(
          "SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeSciConfigRecord LIMIT 5",
          TEST_ORG!
        );

        expect(result).toHaveProperty("success");
        if (result.success) {
          expect(result.data).toHaveProperty("records");
          expect(Array.isArray(result.data!.records)).toBe(true);
        } else {
          expect(typeof result.error).toBe("string");
        }
      },
      TIMEOUT
    );
  });

  // ---------------------------------------------------------------------------
  // 7. DB Schema tools return valid structure
  // ---------------------------------------------------------------------------
  describe("DB Schema (Tooling API)", () => {
    it(
      "DbSchema category lookup returns structured result",
      async () => {
        const catResult = await runToolingQuery(
          "SELECT Id FROM LifeSciConfigCategory WHERE Category = 'DbSchema' LIMIT 1",
          TEST_ORG!
        );

        expect(catResult).toHaveProperty("success");

        if (catResult.success && catResult.data?.records?.length) {
          const categoryId = (catResult.data.records[0] as Record<string, unknown>).Id as string;
          expect(categoryId).toBeDefined();
          expect(typeof categoryId).toBe("string");

          // Now query config records under that category
          const recordsResult = await runToolingQuery(
            `SELECT Id, DeveloperName, MasterLabel, IsActive FROM LifeSciConfigRecord WHERE LifeSciConfigCategoryId = '${categoryId}' ORDER BY MasterLabel LIMIT 5`,
            TEST_ORG!
          );

          expect(recordsResult).toHaveProperty("success");
          if (recordsResult.success) {
            expect(recordsResult.data).toHaveProperty("records");
            expect(Array.isArray(recordsResult.data!.records)).toBe(true);

            // Verify record shape if any exist
            if (recordsResult.data!.records.length > 0) {
              const rec = recordsResult.data!.records[0] as Record<string, unknown>;
              expect(rec).toHaveProperty("Id");
              expect(rec).toHaveProperty("DeveloperName");
              expect(rec).toHaveProperty("MasterLabel");
              expect(rec).toHaveProperty("IsActive");
            }
          }
        } else {
          // Non-AFLS org: structured error is acceptable
          expect(
            catResult.error !== undefined || catResult.data?.records?.length === 0
          ).toBe(true);
        }
      },
      TIMEOUT
    );

    it(
      "LifeSciConfigFieldValue query returns structured result",
      async () => {
        const result = await runToolingQuery(
          "SELECT Id, DeveloperName, FieldValue, DataType FROM LifeSciConfigFieldValue LIMIT 5",
          TEST_ORG!
        );

        expect(result).toHaveProperty("success");
        if (result.success) {
          expect(result.data).toHaveProperty("records");
          expect(Array.isArray(result.data!.records)).toBe(true);
        } else {
          expect(typeof result.error).toBe("string");
        }
      },
      TIMEOUT
    );
  });
});

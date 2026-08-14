import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  MOCK_ORG,
  MOCK_ORG_DEFAULT,
  MOCK_ORG_LIST_RESULT,
} from "../../helpers/fixtures.js";

// Mock the cli module before importing auth
vi.mock("../../../src/salesforce/cli.js", () => ({
  isSfCliInstalled: vi.fn(),
  getSfCliVersion: vi.fn(),
  listOrgs: vi.fn(),
}));

// Dynamic import so mocks are in place
const {
  getTargetOrg,
  setTargetOrg,
  clearTargetOrg,
  checkSetupStatus,
  getSetupInstructions,
  formatOrgList,
  getEffectiveTargetOrg,
  validateOrgConnection,
  checkLscInstalled,
} = await import("../../../src/salesforce/auth.js");

const { isSfCliInstalled, getSfCliVersion, listOrgs } = await import(
  "../../../src/salesforce/cli.js"
);

describe("auth.ts", () => {
  beforeEach(() => {
    clearTargetOrg();
  });

  // ==========================================================================
  // State management
  // ==========================================================================
  describe("target org state", () => {
    it("getTargetOrg() is initially undefined", () => {
      expect(getTargetOrg()).toBeUndefined();
    });

    it("set/get/clear cycle works", () => {
      setTargetOrg("my-org");
      expect(getTargetOrg()).toBe("my-org");
      clearTargetOrg();
      expect(getTargetOrg()).toBeUndefined();
    });

    it("setTargetOrg overwrites previous value", () => {
      setTargetOrg("org-a");
      setTargetOrg("org-b");
      expect(getTargetOrg()).toBe("org-b");
    });
  });

  // ==========================================================================
  // checkSetupStatus
  // ==========================================================================
  describe("checkSetupStatus()", () => {
    it("returns install_cli when CLI not installed", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(false);

      const status = await checkSetupStatus();
      expect(status.cliInstalled).toBe(false);
      expect(status.nextStep).toBe("install_cli");
      expect(status.setupComplete).toBe(false);
    });

    it("returns authenticate_org when no orgs found", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: { nonScratchOrgs: [], scratchOrgs: [] },
      });

      const status = await checkSetupStatus();
      expect(status.cliInstalled).toBe(true);
      expect(status.hasAuthenticatedOrgs).toBe(false);
      expect(status.nextStep).toBe("authenticate_org");
    });

    it("auto-selects when single org exists", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: { nonScratchOrgs: [MOCK_ORG], scratchOrgs: [] },
      });

      const status = await checkSetupStatus();
      expect(status.setupComplete).toBe(true);
      expect(status.nextStep).toBe("ready");
      expect(getTargetOrg()).toBe("my-afls-org");
    });

    it("returns select_default_org when multiple orgs and no default", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      // Two non-default orgs
      const orgNoDefault = { ...MOCK_ORG, isDefaultUsername: false };
      const orgNoDefault2 = {
        ...MOCK_ORG,
        alias: "other-org",
        username: "other@example.com",
        isDefaultUsername: false,
      };
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: { nonScratchOrgs: [orgNoDefault, orgNoDefault2], scratchOrgs: [] },
      });

      const status = await checkSetupStatus();
      expect(status.nextStep).toBe("select_default_org");
    });

    it("returns ready when target org already set", async () => {
      setTargetOrg("my-afls-org");
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: MOCK_ORG_LIST_RESULT,
      });

      const status = await checkSetupStatus();
      expect(status.setupComplete).toBe(true);
      expect(status.nextStep).toBe("ready");
    });

    it("clears stale target org if it no longer exists in org list", async () => {
      setTargetOrg("deleted-org");
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: MOCK_ORG_LIST_RESULT,
      });

      await checkSetupStatus();
      // The stale org should be cleared since "deleted-org" isn't in the list
      // But then the default org is found, so setup is still complete
      expect(getTargetOrg()).toBeUndefined();
    });

    it("returns ready when default org exists", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: MOCK_ORG_LIST_RESULT,
      });

      const status = await checkSetupStatus();
      expect(status.defaultOrg?.alias).toBe("default-org");
      expect(status.setupComplete).toBe(true);
      expect(status.nextStep).toBe("ready");
    });
  });

  // ==========================================================================
  // getEffectiveTargetOrg
  // ==========================================================================
  describe("getEffectiveTargetOrg()", () => {
    it("returns session target org when set", async () => {
      setTargetOrg("session-org");
      const result = await getEffectiveTargetOrg();
      expect(result).toBe("session-org");
    });

    it("falls back to default org when no session target", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: MOCK_ORG_LIST_RESULT,
      });

      const result = await getEffectiveTargetOrg();
      expect(result).toBe("default-org");
    });

    it("returns undefined when multiple orgs and no default", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      const noDefaults = {
        nonScratchOrgs: [
          { ...MOCK_ORG, isDefaultUsername: false },
          {
            ...MOCK_ORG,
            alias: "org-2",
            username: "org2@example.com",
            isDefaultUsername: false,
          },
        ],
        scratchOrgs: [],
      };
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: noDefaults,
      });

      const result = await getEffectiveTargetOrg();
      // checkSetupStatus auto-selects when single org, but there are 2 here
      // However getEffectiveTargetOrg has its own single-org check
      // With 2 orgs and no default, it returns undefined
      expect(result).toBeUndefined();
    });
  });

  // ==========================================================================
  // validateOrgConnection
  // ==========================================================================
  describe("validateOrgConnection()", () => {
    it("returns valid when target org is set", async () => {
      setTargetOrg("my-afls-org");
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: MOCK_ORG_LIST_RESULT,
      });

      const result = await validateOrgConnection();
      expect(result.valid).toBe(true);
      expect(result.targetOrg).toBe("my-afls-org");
    });

    it("returns error with available orgs when no target selected", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(true);
      vi.mocked(getSfCliVersion).mockResolvedValue({
        success: true,
        data: "2.30.0",
      });
      const noDefaults = {
        nonScratchOrgs: [
          { ...MOCK_ORG, isDefaultUsername: false },
          {
            ...MOCK_ORG,
            alias: "org-2",
            username: "org2@example.com",
            isDefaultUsername: false,
          },
        ],
        scratchOrgs: [],
      };
      vi.mocked(listOrgs).mockResolvedValue({
        success: true,
        data: noDefaults,
      });

      const result = await validateOrgConnection();
      expect(result.valid).toBe(false);
      expect(result.availableOrgs).toBeDefined();
      expect(result.availableOrgs!.length).toBe(2);
    });

    it("returns error when CLI not installed", async () => {
      vi.mocked(isSfCliInstalled).mockResolvedValue(false);

      const result = await validateOrgConnection();
      expect(result.valid).toBe(false);
      expect(result.error).toContain("not installed");
    });
  });

  // ==========================================================================
  // formatOrgList
  // ==========================================================================
  describe("formatOrgList()", () => {
    it("formats org list with alias, username, and instance URL", () => {
      const output = formatOrgList([MOCK_ORG]);
      expect(output).toContain("**my-afls-org**");
      expect(output).toContain("admin@example.com");
      expect(output).toContain("example.my.salesforce.com");
    });

    it("shows (default) for default org", () => {
      const output = formatOrgList([MOCK_ORG_DEFAULT]);
      expect(output).toContain("(default)");
    });

    it("returns empty message for no orgs", () => {
      const output = formatOrgList([]);
      expect(output).toContain("No authenticated orgs");
    });

    it("shows connected status when not Connected", () => {
      const disconnected = {
        ...MOCK_ORG,
        connectedStatus: "RefreshTokenAuthError",
      };
      const output = formatOrgList([disconnected]);
      expect(output).toContain("[RefreshTokenAuthError]");
    });
  });

  // ==========================================================================
  // getSetupInstructions
  // ==========================================================================
  describe("getSetupInstructions()", () => {
    it("returns install_cli instructions", () => {
      const inst = getSetupInstructions("install_cli");
      expect(inst.step).toBe("install_cli");
      expect(inst.title).toContain("Install");
      expect(inst.command).toContain("npm install");
    });

    it("returns authenticate_org instructions", () => {
      const inst = getSetupInstructions("authenticate_org");
      expect(inst.step).toBe("authenticate_org");
      expect(inst.command).toContain("sf org login");
    });

    it("returns select_default_org instructions", () => {
      const inst = getSetupInstructions("select_default_org");
      expect(inst.step).toBe("select_default_org");
      expect(inst.title).toContain("Select");
    });

    it("returns ready instructions", () => {
      const inst = getSetupInstructions("ready");
      expect(inst.step).toBe("ready");
      expect(inst.title).toBe("Ready");
    });
  });

  // ==========================================================================
  // checkLscInstalled (placeholder)
  // ==========================================================================
  describe("checkLscInstalled()", () => {
    it("returns installed true (placeholder implementation)", async () => {
      const result = await checkLscInstalled("my-org");
      expect(result.installed).toBe(true);
      expect(result.indicators).toBeDefined();
      expect(result.indicators.length).toBeGreaterThan(0);
    });
  });
});

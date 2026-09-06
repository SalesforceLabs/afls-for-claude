import { describe, it, expect } from "vitest";
import { computeConfigDiff } from "../src/config/config-diff.js";
import { inferDataType } from "../src/config/config-apply.js";
import type { ConfigSnapshot, ConfigRecord } from "../src/config/types.js";

function rec(partial: Partial<ConfigRecord> & { developerName: string }): ConfigRecord {
  return {
    category: "DbSchema",
    label: partial.developerName,
    isActive: true,
    isOrgLevel: false,
    fields: {},
    fieldTypes: {},
    assignments: [],
    ...partial,
  };
}

function snap(over: Partial<ConfigSnapshot>): ConfigSnapshot {
  return { exportedAt: "2026-01-01T00:00:00Z", sourceOrg: "org", version: "1.1", ...over };
}

describe("computeConfigDiff — status classification", () => {
  it("flags a record only in source as NEW and applicable", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { SObject: "Visit" }, fieldTypes: { SObject: "OBJECT" } })] });
    const target = snap({ dbSchema: [] });
    const diff = computeConfigDiff(source, target);
    expect(diff.counts).toMatchObject({ new: 1, changed: 0, identical: 0, targetOnly: 0 });
    const r = diff.records[0];
    expect(r.status).toBe("NEW");
    expect(r.applicable).toBe(true);
    expect(r.fieldDiffs.find((f) => f.name === "SObject")?.willApply).toBe(true);
  });

  it("flags a record only in target as TARGET_ONLY and not applicable", () => {
    const source = snap({ dbSchema: [] });
    const target = snap({ dbSchema: [rec({ developerName: "DbSchema_Legacy" })] });
    const diff = computeConfigDiff(source, target);
    expect(diff.counts.targetOnly).toBe(1);
    expect(diff.records[0].status).toBe("TARGET_ONLY");
    expect(diff.records[0].applicable).toBe(false);
  });

  it("detects a changed field value as CHANGED", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { WhereSoql: "(IsActive = true)" }, fieldTypes: { WhereSoql: "LONGTEXT" } })] });
    const target = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { WhereSoql: "(IsActive = false)" }, fieldTypes: { WhereSoql: "LONGTEXT" } })] });
    const diff = computeConfigDiff(source, target);
    expect(diff.counts.changed).toBe(1);
    const fd = diff.records[0].fieldDiffs.find((f) => f.name === "WhereSoql")!;
    expect(fd.willApply).toBe(true);
    expect(fd.to).toBe("(IsActive = true)");
    expect(fd.from).toBe("(IsActive = false)");
  });

  it("matches records whose DeveloperName differs only by case (not NEW + TARGET_ONLY)", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_MngEventType", fields: { SObject: "MngEventType" }, fieldTypes: { SObject: "OBJECT" } })] });
    const target = snap({ dbSchema: [rec({ developerName: "DBSchema_MngEventType", fields: { SObject: "MngEventType" }, fieldTypes: { SObject: "OBJECT" } })] });
    const diff = computeConfigDiff(source, target);
    expect(diff.records).toHaveLength(1);
    expect(diff.counts).toMatchObject({ new: 0, targetOnly: 0, identical: 1 });
  });

  it("treats identical records as IDENTICAL (apply is a no-op)", () => {
    const r = { developerName: "DbSchema_Visit", fields: { WhereSoql: "(x = 1)" }, fieldTypes: { WhereSoql: "LONGTEXT" } };
    const diff = computeConfigDiff(snap({ dbSchema: [rec(r)] }), snap({ dbSchema: [rec(r)] }));
    expect(diff.counts.identical).toBe(1);
    expect(diff.records[0].status).toBe("IDENTICAL");
    expect(diff.records[0].applicable).toBe(false);
  });

  it("does NOT mark a record changed when a field exists only in the target", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { A: "1" }, fieldTypes: { A: "TEXT" } })] });
    const target = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { A: "1", B: "extra" }, fieldTypes: { A: "TEXT", B: "TEXT" } })] });
    const diff = computeConfigDiff(source, target);
    expect(diff.records[0].status).toBe("IDENTICAL");
    // The target-only field is surfaced for visibility but never applied.
    const b = diff.records[0].fieldDiffs.find((f) => f.name === "B")!;
    expect(b.willApply).toBe(false);
    expect(b.inTarget).toBe(true);
    expect(b.inSource).toBe(false);
  });

  it("never blanks a populated target field when the source value is empty", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { WhereSoql: "" }, fieldTypes: { WhereSoql: "LONGTEXT" } })] });
    const target = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { WhereSoql: "(IsActive = true)" }, fieldTypes: { WhereSoql: "LONGTEXT" } })] });
    const diff = computeConfigDiff(source, target);
    // Empty source value carries nothing to apply — the record is a no-op, not a clear.
    expect(diff.records[0].status).toBe("IDENTICAL");
    expect(diff.records[0].fieldDiffs.find((f) => f.name === "WhereSoql")?.willApply).not.toBe(true);
  });

  it("omits empty source fields from a NEW record (no phantom empty→empty rows)", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_New", fields: { SObject: "Visit", WhereSoql: null, OneWaySync: false }, fieldTypes: { SObject: "OBJECT", WhereSoql: "LONGTEXT", OneWaySync: "BOOLEAN" } })] });
    const target = snap({ dbSchema: [] });
    const diff = computeConfigDiff(source, target);
    const names = diff.records[0].fieldDiffs.map((f) => f.name);
    expect(names).toContain("SObject");
    expect(names).toContain("OneWaySync"); // false is a real value, kept
    expect(names).not.toContain("WhereSoql"); // empty, omitted
  });

  it("treats a boolean field the same whether stored as bool or string", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { OneWaySync: true }, fieldTypes: { OneWaySync: "BOOLEAN" } })] });
    const target = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", fields: { OneWaySync: "true" }, fieldTypes: { OneWaySync: "BOOLEAN" } })] });
    const diff = computeConfigDiff(source, target);
    expect(diff.records[0].status).toBe("IDENTICAL");
  });

  it("adds source-only assignments (additive) making the record CHANGED", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", assignments: [{ name: "Field Sales Rep", level: "Profile" }] })] });
    const target = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", assignments: [] })] });
    const diff = computeConfigDiff(source, target);
    expect(diff.records[0].status).toBe("CHANGED");
    expect(diff.records[0].assignmentDiff.added).toHaveLength(1);
  });

  it("does not treat a target-only assignment as a change", () => {
    const source = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", assignments: [] })] });
    const target = snap({ dbSchema: [rec({ developerName: "DbSchema_Visit", assignments: [{ name: "Admin", level: "Profile" }] })] });
    const diff = computeConfigDiff(source, target);
    expect(diff.records[0].status).toBe("IDENTICAL");
    expect(diff.records[0].assignmentDiff.onlyInTarget).toHaveLength(1);
  });
});

describe("computeConfigDiff — trigger handlers", () => {
  it("cannot create a new trigger handler (not applicable)", () => {
    const source = snap({ triggerHandlers: [{ developerName: "DCR", isActive: true }] });
    const target = snap({ triggerHandlers: [] });
    const diff = computeConfigDiff(source, target);
    expect(diff.records[0].status).toBe("NEW");
    expect(diff.records[0].applicable).toBe(false);
  });

  it("toggles an existing trigger handler whose IsActive differs", () => {
    const source = snap({ triggerHandlers: [{ developerName: "DCR", isActive: true }] });
    const target = snap({ triggerHandlers: [{ developerName: "DCR", isActive: false }] });
    const diff = computeConfigDiff(source, target);
    expect(diff.records[0].status).toBe("CHANGED");
    expect(diff.records[0].applicable).toBe(true);
    expect(diff.records[0].activeChange).toEqual({ from: false, to: true });
  });
});

describe("inferDataType — v1.0 fallback", () => {
  it("uses the fixed DB Schema field map", () => {
    expect(inferDataType("SObject", "Visit", "DbSchema")).toBe("OBJECT");
    expect(inferDataType("OneWaySync", true, "DbSchema")).toBe("BOOLEAN");
    expect(inferDataType("WhereSoql", "(x=1)", "DbSchema")).toBe("LONGTEXT");
  });

  it("infers by JS type outside DB Schema", () => {
    expect(inferDataType("Flag", true, "QuickAction")).toBe("BOOLEAN");
    expect(inferDataType("Count", 3, "QuickAction")).toBe("INTEGER");
    expect(inferDataType("Ratio", 1.5, "QuickAction")).toBe("NUMBER");
    expect(inferDataType("Label", "hi", "QuickAction")).toBe("TEXT");
  });
});

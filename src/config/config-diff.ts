/**
 * computeConfigDiff() — structured, host-agnostic diff between two ConfigSnapshots.
 *
 * `source` is the desired state (a saved export or a snapshot of a source org);
 * `target` is the current state of the org we would apply to. The diff is oriented
 * "move target toward source": `from` is the current target value, `to` is the
 * desired source value.
 *
 * Records are keyed by DeveloperName (globally unique for LifeSciConfigRecord, as
 * create_db_schema's existence check assumes), so matching is category-agnostic and
 * works even for v1.0 snapshots that never stored per-record categories.
 *
 * `status` reflects whether applying would actually change the target:
 *   NEW         — in source, absent from target (would be created)
 *   CHANGED     — in both; applying would flip IsActive, set a field, or add an assignment
 *   IDENTICAL   — in both; applying would be a no-op
 *   TARGET_ONLY — in target only; never touched (create + update-only safe policy)
 */

import type {
  ConfigSnapshot,
  ConfigRecord,
  TriggerHandlerRecord,
  AssignmentRef,
} from "./types.js";

export type RecordStatus = "NEW" | "CHANGED" | "IDENTICAL" | "TARGET_ONLY";

export interface FieldDiff {
  name: string;
  from: unknown; // current target value
  to: unknown; // desired source value
  dataType?: string;
  inSource: boolean;
  inTarget: boolean;
  /** True when apply will act on this field (source-driven change). */
  willApply: boolean;
}

export interface AssignmentDiff {
  /** Assignment names present in source but not target (apply adds these). */
  added: AssignmentRef[];
  /** Present in target but not source (informational; never removed). */
  onlyInTarget: AssignmentRef[];
}

export interface RecordDiff {
  key: string;
  kind: "record" | "triggerHandler";
  category: string;
  developerName: string;
  label?: string;
  status: RecordStatus;
  activeChange?: { from?: boolean; to?: boolean };
  fieldDiffs: FieldDiff[];
  assignmentDiff: AssignmentDiff;
  /** Whether this record can be selected & applied under the safe policy. */
  applicable: boolean;
  /** Explanation when not applicable (e.g. trigger handler can't be created). */
  note?: string;
}

export interface ConfigDiff {
  sourceOrg: string;
  targetOrg: string;
  generatedAt: string;
  records: RecordDiff[];
  counts: { new: number; changed: number; identical: number; targetOnly: number };
}

export interface FlatRecord {
  kind: "record" | "triggerHandler";
  category: string;
  developerName: string;
  label?: string;
  isActive?: boolean;
  isOrgLevel?: boolean;
  fields: Record<string, unknown>;
  fieldTypes: Record<string, string>;
  assignments: AssignmentRef[];
}

/** Normalize a scalar for equality comparison (empty/null collapse; booleans stringify). */
function norm(v: unknown): string {
  if (v === null || v === undefined) return "";
  if (typeof v === "boolean") return v ? "true" : "false";
  return String(v);
}

/**
 * An empty source value carries nothing to apply. `false` and `0` are real
 * values (e.g. OneWaySync=false), so only null/undefined/"" count as empty.
 * The safe policy never clears a populated target field, so an empty source
 * value is skipped rather than written over the target.
 */
function isEmpty(v: unknown): boolean {
  return v === null || v === undefined || v === "";
}

function assignmentKey(a: AssignmentRef): string {
  return `${a.level || "Profile"}:${a.name}`;
}

/**
 * Canonical match key for a record. `DeveloperName` is case-insensitively unique
 * in Salesforce, so we lower-case it — otherwise the same record cased differently
 * across orgs (e.g. `DbSchema_X` vs `DBSchema_X`) would look like a create + a
 * target-only record, when the apply guard (case-insensitive SOQL) treats them as
 * the same. Display still uses each record's original casing.
 */
export function recordKey(kind: "record" | "triggerHandler", developerName: string): string {
  return `${kind === "triggerHandler" ? "th" : "record"}:${developerName.toLowerCase()}`;
}

/** Flatten a snapshot into a Map keyed by canonical record key. */
export function flattenSnapshot(snapshot: ConfigSnapshot): Map<string, FlatRecord> {
  const map = new Map<string, FlatRecord>();

  const addRecords = (recs: ConfigRecord[] | undefined, fallbackCategory: string) => {
    for (const r of recs || []) {
      map.set(recordKey("record", r.developerName), {
        kind: "record",
        category: r.category || fallbackCategory,
        developerName: r.developerName,
        label: r.label,
        isActive: r.isActive,
        isOrgLevel: r.isOrgLevel,
        fields: r.fields || {},
        fieldTypes: r.fieldTypes || {},
        assignments: r.assignments || [],
      });
    }
  };

  addRecords(snapshot.adminSettings, "");
  addRecords(snapshot.dbSchema, "DbSchema");
  addRecords(snapshot.actions, "");

  for (const h of (snapshot.triggerHandlers as TriggerHandlerRecord[] | undefined) || []) {
    map.set(recordKey("triggerHandler", h.developerName), {
      kind: "triggerHandler",
      category: "TriggerHandler",
      developerName: h.developerName,
      label: h.label,
      isActive: h.isActive,
      fields: {},
      fieldTypes: {},
      assignments: [],
    });
  }

  return map;
}

export function computeConfigDiff(source: ConfigSnapshot, target: ConfigSnapshot): ConfigDiff {
  const src = flattenSnapshot(source);
  const tgt = flattenSnapshot(target);
  const records: RecordDiff[] = [];
  const counts = { new: 0, changed: 0, identical: 0, targetOnly: 0 };

  const allKeys = new Set<string>([...src.keys(), ...tgt.keys()]);

  for (const key of [...allKeys].sort()) {
    const s = src.get(key);
    const t = tgt.get(key);

    // ---- Only in target: never touched under the safe policy. ----
    if (!s && t) {
      counts.targetOnly++;
      records.push({
        key,
        kind: t.kind,
        category: t.category,
        developerName: t.developerName,
        label: t.label,
        status: "TARGET_ONLY",
        fieldDiffs: [],
        assignmentDiff: { added: [], onlyInTarget: t.assignments },
        applicable: false,
        note: "Exists only in the target org — left untouched (create + update-only policy).",
      });
      continue;
    }

    // ---- Only in source: NEW (would be created). ----
    if (s && !t) {
      const fieldDiffs: FieldDiff[] = Object.keys(s.fields)
        .filter((name) => !isEmpty(s.fields[name]))
        .sort()
        .map((name) => ({
          name,
          from: undefined,
          to: s.fields[name],
          dataType: s.fieldTypes[name],
          inSource: true,
          inTarget: false,
          willApply: true,
        }));
      // Trigger handlers are managed objects — they cannot be created.
      const applicable = s.kind === "record";
      counts.new++;
      records.push({
        key,
        kind: s.kind,
        category: s.category,
        developerName: s.developerName,
        label: s.label,
        status: "NEW",
        activeChange: { from: undefined, to: s.isActive },
        fieldDiffs,
        assignmentDiff: { added: s.assignments, onlyInTarget: [] },
        applicable,
        note: applicable
          ? undefined
          : "Trigger handlers are managed and cannot be created — only existing handlers can be toggled.",
      });
      continue;
    }

    // ---- In both: compare. ----
    const srcRec = s!;
    const tgtRec = t!;

    const activeChange =
      srcRec.isActive !== tgtRec.isActive
        ? { from: tgtRec.isActive, to: srcRec.isActive }
        : undefined;

    const fieldDiffs: FieldDiff[] = [];
    const fieldNames = new Set<string>([
      ...Object.keys(srcRec.fields),
      ...Object.keys(tgtRec.fields),
    ]);
    for (const name of [...fieldNames].sort()) {
      const inSource = name in srcRec.fields;
      const inTarget = name in tgtRec.fields;
      const from = tgtRec.fields[name];
      const to = srcRec.fields[name];
      const differs = norm(from) !== norm(to);
      // Apply acts only on source-driven changes: field is in source, has a
      // non-empty value, AND (missing from target OR value differs). Target-only
      // fields are never removed, and an empty source value never clears the
      // target (that would be a deletion, which the safe policy forbids).
      const willApply = inSource && !isEmpty(to) && (!inTarget || differs);
      if (willApply || (!inSource && inTarget)) {
        fieldDiffs.push({
          name,
          from,
          to,
          dataType: srcRec.fieldTypes[name] || tgtRec.fieldTypes[name],
          inSource,
          inTarget,
          willApply,
        });
      }
    }

    // Assignments (additive only).
    const tgtAssignKeys = new Set(tgtRec.assignments.map(assignmentKey));
    const srcAssignKeys = new Set(srcRec.assignments.map(assignmentKey));
    const added = srcRec.assignments.filter((a) => !tgtAssignKeys.has(assignmentKey(a)));
    const onlyInTarget = tgtRec.assignments.filter((a) => !srcAssignKeys.has(assignmentKey(a)));

    const willApplyAny =
      !!activeChange || fieldDiffs.some((f) => f.willApply) || added.length > 0;
    // Trigger handlers: the only applicable change is IsActive.
    const applicable = srcRec.kind === "record" ? willApplyAny : !!activeChange;

    const status: RecordStatus = willApplyAny ? "CHANGED" : "IDENTICAL";
    if (status === "CHANGED") counts.changed++;
    else counts.identical++;

    records.push({
      key,
      kind: srcRec.kind,
      category: srcRec.category || tgtRec.category,
      developerName: srcRec.developerName,
      label: srcRec.label || tgtRec.label,
      status,
      activeChange,
      fieldDiffs,
      assignmentDiff: { added, onlyInTarget },
      applicable: status === "CHANGED" ? applicable : false,
    });
  }

  return {
    sourceOrg: source.sourceOrg,
    targetOrg: target.sourceOrg,
    generatedAt: new Date().toISOString(),
    records,
    counts,
  };
}

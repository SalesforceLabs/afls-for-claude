/**
 * Shared types for the AFLS configuration export → diff → import pipeline.
 *
 * A `ConfigSnapshot` is what `export_config` writes to disk and what
 * `import_config` reads. `collectConfig()` produces one from a live org; the
 * same shape is loaded from a saved `exports/*.json`.
 */

/** Map of FieldName → Tooling DataType (TEXT, BOOLEAN, OBJECT, …). Added in v1.1. */
export type ConfigFieldTypes = Record<string, string>;

/** A profile / permission-set assignment on a config record. */
export interface AssignmentRef {
  name: string;
  level: string; // "Profile" | "PermissionSet"
}

/** A single LifeSciConfigRecord (DB Schema, action, or admin setting). */
export interface ConfigRecord {
  /** Category name — e.g. "DbSchema", "QuickAction", "CustomAction", or an admin category. */
  category: string;
  developerName: string;
  label?: string;
  isActive?: boolean;
  isOrgLevel?: boolean;
  /** FieldName → scalar value (booleans stay booleans). */
  fields: Record<string, unknown>;
  /** FieldName → DataType. Empty for v1.0 snapshots (types are then inferred). */
  fieldTypes: ConfigFieldTypes;
  assignments: AssignmentRef[];
}

/** A LifeScienceTriggerHandler — a managed object; only IsActive is mutable. */
export interface TriggerHandlerRecord {
  developerName: string;
  label?: string;
  isActive?: boolean;
}

/** The full export document. */
export interface ConfigSnapshot {
  exportedAt: string;
  sourceOrg: string;
  version: string;
  triggerHandlers?: TriggerHandlerRecord[];
  adminSettings?: ConfigRecord[];
  dbSchema?: ConfigRecord[];
  actions?: ConfigRecord[];
  [key: string]: unknown;
}

export type ExportCategory =
  | "trigger_handlers"
  | "admin_settings"
  | "db_schema"
  | "actions";

/** Current export-format version. Bumped to 1.1 when per-field DataType was added. */
export const SNAPSHOT_VERSION = "1.1";

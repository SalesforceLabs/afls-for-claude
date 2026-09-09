---
name: afls-config-migration
description: Guides migrating AFLS org configuration (Admin Console settings, DB Schema, trigger handlers, quick/custom actions) between orgs using export → diff → selective import. Use when the user wants to copy, promote, migrate, sync, or replicate AFLS configuration from one org (e.g. a sandbox) to another (e.g. UAT or production), compare config drift, or apply a saved config snapshot. This is for CONFIGURATION metadata, not data records — for loading accounts/HCPs/territory data use afls-data-migration instead.
---

## What this skill covers

Promoting **configuration** (not data) between AFLS orgs:

- Admin Console settings (`LifeSciConfigRecord` categories)
- DB Schema records (mobile sync configuration)
- Trigger handlers (`LifeScienceTriggerHandler` on/off state)
- Quick Actions and Custom Actions

The workflow is **export → diff → selective import**, and import is
**create + update-only (safe)**: it never deletes or deactivates records that
exist only in the target, and it auto-backs-up the target before writing.

For background on any of these config areas, call
`search_afls_knowledge({ query: "..." })` (e.g. "DB Schema mobile sync",
"trigger handlers", "quick actions configuration") so answers are sourced.

## The workflow

| Step | Tool | Notes |
|------|------|-------|
| 1. Snapshot the source | `export_config({ targetOrg: "sourceAlias" })` | Writes `exports/*.json` (format v1.1 — includes per-field DataType + assignments). Follow `/afls:export-config` for the file convention. |
| 2. Review the diff | `import_config({ source: "exports/<file>.json", mode: "report" })` | Summarizes New / Changed / Identical / Only-in-target and lists record keys. |
| 3a. Apply interactively | `import_config({ source: "...", mode: "ui" })` | Opens a local browser UI with checkboxes + live progress. Hand the user the returned URL. |
| 3b. Apply headlessly | `import_config({ source: "...", mode: "apply", selection: [...] })` | Applies only the chosen record keys. |

You can also skip the file and diff two live orgs directly by passing
`sourceOrg` instead of `source`.

## How to help

1. **Confirm direction.** Which org is the source (correct config) and which is
   the target (receives changes)? Never assume production is the target without
   asking.

2. **Always report before applying.** Run `mode: "report"` and walk the user
   through what would change. Highlight anything surprising (e.g. many Changed
   records, or IsActive flips).

3. **Recommend the UI for large or mixed changesets.** When there are more than a
   handful of records, `mode: "ui"` lets the user review each field change and
   pick precisely what to apply. For a small, well-understood set, `mode: "apply"`
   with an explicit `selection` is fine.

4. **Reassure on safety.** Every apply backs up the target to
   `exports/backup-*.json` first and writes a result log to
   `exports/import-result-*.json`. Only creates and updates happen — nothing is
   deleted or deactivated, and target-only records/fields/assignments are kept.

5. **Verify after.** If DB Schema or actions changed, regenerate the mobile
   metadata cache (`generate_mobile_metadata_cache`). Then confirm convergence
   with `import_config` (report mode) again or `diff_orgs`.

## Gotchas

- **Trigger handlers can't be created** — only existing handlers can be toggled
  (IsActive). A handler present in the source but absent from the target is
  reported but not applied.
- **DB Schema / action changes require a mobile metadata cache regeneration** to
  take effect on the iPad app.
- **`DeveloperName` is the match key.** Records are matched by DeveloperName, so
  renaming a record between orgs makes it look like a delete + create.
- Old v1.0 snapshots (no per-field DataType) still import — types are inferred,
  reliably for DB Schema and best-effort elsewhere. Prefer re-exporting at v1.1.

## Deploy sequencing: inactive first, then activate

When promoting LifeSciConfig + trigger-handler-dependent metadata via a raw
metadata deploy (outside this skill's export/import flow), deploy in **two
passes — deploy the config as inactive first, then activate it** — so that
triggers/automation don't fire against partially-deployed configuration and
leave the org in an inconsistent state. This is the ordering AFLS's own setup
scripts use (a `1_inactive` deploy followed by a `2_activate` deploy, then the
trigger-handler activation step). It generalizes to any config whose activation
kicks off automation.

## Related

- `/afls:export-config`, `/afls:import-config`, `/afls:diff-orgs`
- `afls-data-migration` — for loading **data records** (accounts, HCPs, territory assignments), not configuration.

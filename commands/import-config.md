---
description: Import AFLS configuration from a snapshot (diff → review → apply)
---

# Import Configuration

Import AFLS configuration from a snapshot into the target org. Import is
**diff-driven** and **create + update-only (safe)**: it compares the snapshot
against the target, applies only what you select, and **never deletes or
deactivates** records that exist only in the target. The target org is
**auto-backed-up to `exports/`** before anything is written.

## How it works

`import_config` runs in one of three modes:

| Mode | What it does |
|------|--------------|
| `report` (default) | Computes the diff and summarizes what would change (New / Changed / Identical / Only-in-target). Writes the full structured diff to `exports/import-diff-*.json`. |
| `ui` | Opens a **local browser UI** (127.0.0.1, token-protected, single-session) with per-record checkboxes, field-level before→after, filters, and an **Apply selected** button that writes back live with streaming progress. |
| `apply` | Applies a specific `selection` of record keys headlessly (used by the UI and available directly). |

The **source** is either a saved `exports/*.json` snapshot (pass its path as
`source`), inline JSON, or a live org to snapshot (`sourceOrg`).

## Steps

1. Determine the target org (do not re-prompt if one is already selected).

2. **Report first.** Call `import_config` with the `source` (or `sourceOrg`) and
   `mode: "report"`. Present the summary — how many records are New, Changed,
   Identical, and Only-in-target — and list the actionable records with their keys.

3. **Let the user choose how to apply:**
   - **Interactive (recommended for many records):** call `import_config` with
     `mode: "ui"` and give the user the returned `http://127.0.0.1:…` URL. They
     review, check the records to apply, and click Apply in the browser. Progress
     and the result/backup file paths are shown in the UI.
   - **Headless:** call `import_config` with `mode: "apply"` and a `selection`
     array of the record keys from the report (e.g. `["record:DbSchema_Visit"]`).

4. Every apply auto-backs-up the target to `exports/backup-*.json` first and
   writes a result log to `exports/import-result-*.json`.

5. After import, regenerate the mobile metadata cache if DB Schema / actions
   changed, and run `/afls:health-check` or `/afls:diff-orgs` to verify.

## Safety notes

- Only **create** (missing records) and **update** (changed fields, IsActive,
  additive profile assignments) are performed. Target-only records, target-only
  fields, and target-only assignments are left untouched.
- **Trigger handlers** can only be toggled (IsActive) — they cannot be created.
- The UI server binds to localhost only, requires a per-session token, rejects
  foreign origins, and shuts down after it goes idle.

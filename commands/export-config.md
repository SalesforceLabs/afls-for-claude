---
description: Export AFLS org configuration as JSON
---

# Export Configuration

Export the current org's AFLS configuration as a JSON snapshot.

## Progress reporting — IMPORTANT

The `export_config` tool is a single call that internally queries several categories
and can take a while. To avoid appearing "stuck", **narrate progress in text before
and after each tool call** so the user always knows what is happening:

1. **Before calling the tool**, print a one-line status telling the user:
   - which org you are exporting from (target org), and
   - which categories will be exported.
   Example: `Exporting from org "my-afls-org" → trigger handlers, admin settings, DB Schema, actions…`

2. **If the tool call is waiting on a permission prompt**, say so explicitly — e.g.
   "Waiting for you to approve the `export_config` tool call above." A pending call is
   the most common reason this looks frozen; it is not actually running yet.

3. **To make per-category progress visible** (recommended when the user asks to see
   progress or the export seems slow), call `export_config` **once per category**
   instead of all at once, printing a status line before each:
   - `[1/4] Trigger handlers…` → call `export_config` with `categories: ["trigger_handlers"]`
   - `[2/4] Admin settings…` → `categories: ["admin_settings"]`
   - `[3/4] DB Schema…` → `categories: ["db_schema"]`
   - `[4/4] Actions…` → `categories: ["actions"]`
   Report the count captured after each step (e.g. "✓ 12 trigger handlers"). Then merge
   the four results into a single JSON snapshot.

4. **If any category fails or hangs**, report which one and the error, rather than
   failing the whole export silently.

## Output — IMPORTANT (default behavior)

Every export **saves two files by default** into the gitignored `exports/` directory
at the repo root (create it if missing — it is listed in `.gitignore`, so nothing here
is ever committed):

- `exports/<name>.json` — the raw JSON snapshot (used by `import_config` / `/afls:diff-orgs`)
- `exports/<name>.html` — a self-contained, browsable HTML report

Naming convention: `<categories-or-"config">-export-<org-alias>.json` (e.g.
`db-schema-export-262-lsdo-pre.json`, or `config-export-my-afls-org.json` for a full export).

After writing the JSON, always generate the HTML with the bundled generator:

```
python3 scripts/gen-export-html.py exports/<name>.json exports/<name>.html
```

The generator renders every category present in the JSON (trigger handlers, admin
settings, DB Schema, actions) as searchable, sortable tabs. Then tell the user both
file paths and offer to open the HTML (`open exports/<name>.html`).

## Steps

1. Determine the target org (do not re-prompt if one is already selected). Print the
   status line from step 1 above.

2. Run the export — either all categories at once, or category-by-category per the
   progress-reporting guidance (default to category-by-category if the user wants
   visible progress).

3. Save the merged JSON snapshot to `exports/<name>.json`, then run
   `scripts/gen-export-html.py` to produce `exports/<name>.html` (see Output above).

4. Present the export summary showing what was captured per category, then list the
   two saved file paths.

5. The output can be:
   - Kept as a local backup (gitignored, never pushed)
   - Reviewed in a browser via the generated HTML report
   - Used with `import_config` to apply to another org
   - Compared between orgs (see also `/afls:diff-orgs`)

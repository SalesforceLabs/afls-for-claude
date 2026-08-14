---
description: Import AFLS configuration from JSON export
---

# Import Configuration

Import AFLS configuration from a JSON export into the target org.

## Steps

1. Ask the user for the JSON configuration (from a previous `export_config` run).

2. Use the `import_config` tool with `dryRun: true` first to preview changes.

3. Present the preview clearly showing what will change.

4. If the user confirms, run with `dryRun: false` to apply changes.
   - Note: Full automated import is a preview feature. For now, guide the user through applying changes manually using individual tools.

5. After import, suggest running `/afls:health-check` to verify the org state.

---
description: Diagnose why Briefings isn't working in an AFLS org
---

# Diagnose Briefings

Run a comprehensive diagnostic on Briefings (Daily Podcasts) configuration.

$ARGUMENTS

## Arguments

- `--user <username>` (optional): Check a specific user's Briefings access (permissions, profile assignment, object access)

## Steps

### Step 1: Verify Org Connection

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Run Briefings Configuration Check

Run the dedicated diagnostic tool:

```
check_briefings_config()
```

Or with a specific user:

```
check_briefings_config({ username: "<username>" })
```

This checks:
- Briefings toggle (PresentationContent object accessibility). **Note:** If this query fails, run a secondary check: `SELECT Id FROM FlowDefinitionView WHERE Label LIKE '%Briefings%'`. If Briefings flows exist, the toggle IS on — the failure is due to the admin user lacking StoriesAdmin permission, not the toggle being off.
- Permission Set Licenses (4 required PSLs)
- Standard permission sets (HealthCloudStarter, PromptTemplate, etc.)
- Briefings permissions via boolean fields (PermissionsStoriesAdmin for Manage Briefings, PermissionsStoriesUser for Use Briefings)
- Account Summarization (flow + records + text generation flow by ApiName)
- Content Definition (PrstContentDefinition + PrstCntntDefAssignment)
- Scheduled Flow (template by ApiName + pipeline outcome via PresentationContent records)
- PresentationContent read access
- DB Schema configs (4 required: PresentationContent, PrstCntntUsageSummary, PrstCntntDefAssignment, PrstContentDefinition)
- Mobile metadata cache status
- User-specific access (if --user provided)

### Step 3: Present Results

Present findings clearly with:
- **PASS** — check passed
- **FAIL** — issue found, needs fix
- **WARN** — potential issue to review

For each FAIL or WARN, explain:
- What the issue means
- The impact if not fixed
- How to fix it (with specific tool references)

### Step 4: Summary Report

The `check_briefings_config` tool already outputs a summary table at the end. Present that table directly to the user — do not reformat it into numbered blocks or key-value pairs. The table format is:

```
| # | Check | Status | Detail |
|---|-------|--------|--------|
```

**IMPORTANT:** Always render the summary as a markdown table. Do not convert to numbered items or key-value blocks.

### Step 5: Offer Fixes

For each issue found, offer to fix it using the appropriate tools:

- **Missing perm set assignments** → `assign_permission_set`
- **Missing DB Schema configs** → `create_db_schema`
- **Stale mobile cache** → `generate_mobile_metadata_cache`
- **Inactive trigger handlers** → `toggle_trigger_handler`
- **UI-only steps** → provide exact navigation path

## IMPORTANT OBJECT NAME REMINDERS

- Use `PrstContentDefinition` NOT `PresentationContentDefinition`
- Use `PrstCntntDefAssignment` NOT `PresentationContentDefinitionAssignment`
- Use `PrstCntntUsageSummary` NOT `PresentationContentUsageSummary`
- Use `PrvdAccountTerritorySummary` NOT `ProviderAccountTerritorySummary__c`
- Assignment profile field is `AssignedToId` NOT `ProfileId`
- DB Schema records are Tooling API objects — use `list_db_schema` NOT `run_soql`

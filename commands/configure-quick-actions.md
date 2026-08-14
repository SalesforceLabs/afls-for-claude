---
description: Interactive wizard to configure and validate AFLS Quick Actions and Custom Actions
arguments: "[action-type]"
---

# Configure AFLS Quick Actions and Custom Actions

Interactive wizard to check and configure Quick Actions and Custom Actions for web and mobile.

## Arguments

- `action-type` (optional): Type of actions to check - `quick`, `custom`, or `both` (default: both)

## Instructions

Follow these steps sequentially to validate and configure actions.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Query Quick Actions (Tooling API)

Query quick actions using Tooling API:

```sql
SELECT Id, MasterLabel, IsActive
FROM LifeSciConfigRecord
WHERE LifeSciConfigCategoryId IN (
  SELECT Id FROM LifeSciConfigCategory WHERE Category = 'QuickAction'
)
ORDER BY MasterLabel
```

Use `run_soql` with `useToolingApi: true` to execute this query.

Report findings:
- Total number of quick actions
- Number of active vs inactive
- List action names

### Step 3: Check Quick Actions Count (Mobile Limit)

Count active quick actions:

```sql
SELECT COUNT()
FROM LifeSciConfigRecord
WHERE LifeSciConfigCategoryId IN (
  SELECT Id FROM LifeSciConfigCategory WHERE Category = 'QuickAction'
)
AND IsActive = true
```

Report:
- Count of active quick actions
- **WARN if > 5**: Only 5 quick actions display on mobile Home floating button
- Recommend reviewing if count exceeds 5

### Step 4: Check Custom Actions (if action-type is `custom` or `both`)

Query custom actions using Tooling API:

```sql
SELECT Id, MasterLabel, IsActive
FROM LifeSciConfigRecord
WHERE LifeSciConfigCategoryId IN (
  SELECT Id FROM LifeSciConfigCategory WHERE Category = 'CustomAction'
)
ORDER BY MasterLabel
```

Report:
- Total custom actions
- Number active vs inactive

### Step 5: Check Metadata Cache Status

Query metadata cache (required for mobile):

```sql
SELECT Id, Name, Status, LastModifiedDate, IntegrationStatus
FROM LifeSciMobileMetadataRecord
WHERE Status IN ('Active', 'Published')
ORDER BY LastModifiedDate DESC
LIMIT 5
```

Report:
- Cache status (Active/Published)
- Last modified date
- Integration status
- If stale (> 7 days old), recommend regeneration

### Step 6: Check for Cache Errors

Query for any cache errors:

```sql
SELECT Id, Name, Status, IntegrationStatus, IntegrationErrorMessage
FROM LifeSciMobileMetadataRecord
WHERE Status = 'Error' OR IntegrationStatus = 'Error'
```

Report:
- Any cache records in error state
- Error messages if present

### Step 7: Check Profile Assignments

Query profiles with cache access:

```sql
SELECT Id, Name, ProfileId, Profile.Name, Status
FROM LifeSciMobileMetadataRecord
WHERE ProfileId != null
AND Status IN ('Active', 'Published')
```

Report:
- Profiles with active cache assignments
- Warn if none found

### Step 8: Present Configuration Report

Compile findings into a summary report:

```
## Quick Actions and Custom Actions Configuration Report

### Action Type: [quick/custom/both]

### Overall Status: [READY / NEEDS ATTENTION / NOT CONFIGURED]

### Quick Actions Summary
- Total: [count]
- Active: [count]
- Inactive: [count]
- **Mobile Limit**: [OK if <=5 / WARNING if >5]

### Quick Action Names
[List of action names]

### Custom Actions Summary
- Total: [count]
- Active: [count]

### Metadata Cache
- Status: [Active / Error / Not Found]
- Last Updated: [date]
- Integration Status: [Ok / Error]

### Profile Assignments
- Profiles with cache access: [count]

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

### Step 9: Offer Next Steps and Fix Issues

Based on findings, offer to fix issues directly using programmatic tools:

**If too many active quick actions (>5):**
- Explain mobile 5-action limit
- Ask user: "You have more than 5 active quick actions. Want me to help deactivate some?"
- If yes: Use `delete_afls_action` for actions the user selects to remove

**If no quick actions:**
- Ask user: "No quick actions are configured. Want me to create standard actions (e.g., NewVisit, LogCall, Email)?"
- If yes: Use `create_quick_action` for each action the user approves
- Report what was created

**If trigger handlers inactive:**
- Ask user: "The following trigger handlers are inactive: [list]. Want me to enable them?"
- If yes: `toggle_trigger_handler({ handlerName: "...", active: true })` for each
- Report what was enabled

**If Admin Console settings missing or misconfigured:**
- Ask user: "These settings need to be created/updated: [list]. Want me to set them up?"
- If yes: Use `create_admin_setting` or `update_admin_setting` as appropriate
- Report what was changed

**If metadata cache stale or missing:**
- Offer to run `generate_mobile_metadata_cache` tool

**If cache errors:**
- Guide to fixing underlying issues

**If all checks pass:**
- Confirm actions are properly configured
- Remind to regenerate cache after any future changes

## Example Usage

User: `/afls:configure-quick-actions`
> Run full configuration check for both quick and custom actions

User: `/afls:configure-quick-actions quick`
> Focus on quick actions only

User: `/afls:configure-quick-actions custom`
> Focus on custom actions only

## Quick Validation Alternative

For a faster automated check, suggest using the audit command:

```
/afls:audit quick-actions-check
```

or

```
/afls:audit custom-actions-check
```

These run all relevant validation rules automatically.

## Admin Console Navigation

| Task | Path |
|------|------|
| Manage Quick Actions | Admin Console > Quick and Custom Action Administration > Quick Actions |
| Manage Custom Actions | Admin Console > Quick and Custom Action Administration > Custom Actions |
| Regenerate Metadata Cache | Admin Console > Mobile > Object Metadata Cache Configuration |

## Mobile 5-Action Limit

Only 5 quick actions can display on the mobile Home Page floating action button. If you have more than 5 active actions:
1. Prioritize the 5 most important actions
2. Deactivate or remove less-used actions
3. Consider using different locations (Account, Visit) for secondary actions

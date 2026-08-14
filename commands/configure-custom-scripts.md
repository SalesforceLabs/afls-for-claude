---
description: Interactive wizard to configure and validate AFLS Custom Scripts for validation
arguments: "[check-type]"
---

# Configure AFLS Custom Scripts

Interactive wizard to check and configure Custom Scripts for validation, checklists, and Visit Action Validation.

## Arguments

- `check-type` (optional): Focus area - `full`, `visit-action`, `workflow`, or `debug` (default: full)

## Instructions

Follow these steps sequentially to validate and configure custom scripts.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Query All Custom Script Records

```sql
SELECT Id, Name, ComponentName, Type, ObjectName, OperationEventType, CreatedDate
FROM LifeScienceCustomScript
ORDER BY Type, CreatedDate
```

Report:
- Total scripts by type (Validation, Checklist, VisitActionValidation)
- For each script: Name, ComponentName, Type, and required fields

### Step 3: Validate Visit Action Validation Scripts

For scripts where `Type = 'VisitActionValidation'`:

**Check 1: Only one should exist**
If more than one Visit Action Validation script exists, **WARN** — only the first one (by ID/creation date) runs. The others are silently ignored.

**Check 2: Required fields**
- `ObjectName` must be `ProviderVisit`
- `OperationEventType` must be `OnUpdate`
- **If either is missing, the script will silently not execute**

Report which script will actually run and whether it's configured correctly.

### Step 4: Check Sharing Settings

Remind the user:
- `LifeScienceCustomScript` defaults to Private sharing
- Rep users need record-level access to see custom script records
- If field reps can't see validation results, OWD needs to be changed to Public Read Only in Setup > Sharing Settings

### Step 5: Check Mobile Metadata Cache

```
check_mobile_cache_status()
```

Report:
- Cache status
- If stale (> 7 days old), recommend regeneration

### Step 6: Present Configuration Report

```
## Custom Scripts Configuration Report

### Overall Status: [READY / NEEDS ATTENTION / NOT CONFIGURED]

### Script Inventory
| Name | Type | Component | ObjectName | OperationEventType | Status |
|------|------|-----------|------------|-------------------|--------|

### Visit Action Validation
- Scripts found: [count]
- Active script (first by creation date): [name]
- ObjectName set: [Yes/No] — must be "ProviderVisit"
- OperationEventType set: [Yes/No] — must be "OnUpdate"

### Workflow Validation & Checklists
- Validation scripts: [count]
- Checklist scripts: [count]

### Sharing
- OWD: [Public Read Only / Private / Unknown]

### Mobile Metadata Cache
- Status: [Active / Error / Not Found]
- Last Updated: [date]

### Issues Found
1. [Issue description]

### Recommendations
1. [Recommendation]
```

### Step 7: Offer Next Steps

**If no scripts exist:**
- Ask what type of validation the user needs
- Guide them through choosing the right mechanism (Validation Rule vs Custom Script vs Apex Trigger)
- Help write a new script using the confirmed IIFE pattern

**If Visit Action Validation is misconfigured:**
- Offer to explain the required field settings
- Guide to Admin Console > Workflow Configuration > Custom Scripts

**If multiple Visit Action Validation scripts exist:**
- Identify which one runs (first by CreatedDate)
- Recommend consolidating all rules into the first script
- Offer to help combine validation functions

**If user wants to create/modify a script:**
- Ask what validation rules they need
- Help decide sync vs async based on data requirements
- Generate the script with env.log() debugging
- Remind about all gotchas (no JSDoc before IIFE, unwrapProxy, Refresh after deploy)
- Point to reference examples at https://github.com/afls-ideas/afls-custom-scripts-examples

**If user needs to debug a script:**
- Add `env.log()` calls at entry point, before/after data access, and before return
- Check browser console for output
- Verify the script record has correct ObjectName and OperationEventType
- Verify Refresh was clicked after last deploy
- Check for JSDoc comments before the IIFE
- Check for missing unwrapProxy calls

### Step 8: Remind About Refresh

After any LWC deployment or script change:

**Admin Console > Workflow Configuration > Custom Scripts > click Refresh on the row**

This copies the deployed LWC code to the `CodeText` field. Without this step, the old code continues to run.

## Example Usage

User: `/afls:configure-custom-scripts`
> Run full custom scripts configuration check

User: `/afls:configure-custom-scripts visit-action`
> Focus on Visit Action Validation configuration

User: `/afls:configure-custom-scripts debug`
> Help debug a custom script that isn't working

## Admin Console Navigation

| Task | Path |
|------|------|
| View/Refresh Custom Scripts | Admin Console > Workflow Configuration > Custom Scripts |
| Assign to Stage Objects | Admin Console > Workflow Configuration > Stage Objects > Edit |
| Workflow Paths | Admin Console > Workflow Configuration > Workflow Paths |
| Sharing Settings | Setup > Sharing Settings > LifeScienceCustomScript |
| Mobile Metadata Cache | Admin Console > Mobile > Object Metadata Cache Configuration |

## IMPORTANT OBJECT NAME REMINDERS

- Use `LifeScienceCustomScript` NOT `CustomScript__c`
- Use `ProviderVisit` NOT `ProviderVisit__c`
- Use `ProviderVisitPrdDetailing` NOT `ProviderVisitProductDetailing__c`
- Use `ProductDisbursement` NOT `SampleDrop__c`
- `CodeText` is read-only via API — only updateable through the Refresh button

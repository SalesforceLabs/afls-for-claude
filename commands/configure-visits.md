---
description: Interactive wizard to configure and validate AFLS Visit Management
arguments: "[check-type]"
---

# Configure AFLS Visit Management

Interactive wizard to check and configure Visit Management for web and mobile.

## Arguments

- `check-type` (optional): Focus area - `full`, `record-types`, `detailing`, `signature`, or `mobile` (default: full)

## Instructions

Follow these steps sequentially to validate and configure visit management.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Run Comprehensive Visit Configuration Check

Run the dedicated visit configuration tool:

```
check_visit_config()
```

This queries:
- Visit record types
- ProviderVisit record types
- Record type alignment between Visit and ProviderVisit
- ProviderAcctTerritoryInfo records
- ComplianceStatementDefinition records for Visit module
- Visit-related Admin Console settings via Tooling API

Report the summary from the tool output.

### Step 3: Check Visit Record Types

Verify Visit and ProviderVisit record types exist and are aligned:

```sql
SELECT Id, Name, DeveloperName, IsActive
FROM RecordType
WHERE SobjectType = 'Visit' AND IsActive = true
```

```sql
SELECT Id, Name, DeveloperName, IsActive
FROM RecordType
WHERE SobjectType = 'ProviderVisit' AND IsActive = true
```

Report:
- Visit record types found (names and developer names)
- ProviderVisit record types found
- **WARN if mismatched**: Each Visit record type should have a corresponding ProviderVisit record type
- **WARN if none found**: No record types configured

### Step 4: Check Product Detailing/Discussion Configuration

Query product detailing and discussion records:

```sql
SELECT COUNT() FROM ProviderVisitPrdDetailing
```

```sql
SELECT COUNT() FROM ProviderVisitProdDiscussion
```

Report:
- Whether product detailing records exist
- Whether product discussion records exist
- If neither exists, note that product detailing may not be configured

### Step 5: Check Signature Configuration

Verify compliance statements for the Visit module:

```sql
SELECT Id, Name, Module, StatementType, IsActive
FROM ComplianceStatementDefinition
WHERE Module = 'Visit'
```

Report:
- Active compliance statements for visits
- Statement types configured
- **WARN if none found**: Signature capture requires compliance statements

### Step 6: Check Mobile Metadata Cache Status

```
check_mobile_cache_status()
```

Report:
- Cache status (Active/Published/Error)
- Last modified date
- If stale (> 7 days old), recommend regeneration
- Any cache errors

### Step 7: Present Configuration Report

Compile findings into a summary report:

```
## Visit Management Configuration Report

### Overall Status: [READY / NEEDS ATTENTION / NOT CONFIGURED]

### Visit Record Types
- Visit record types: [count] ([names])
- ProviderVisit record types: [count] ([names])
- Alignment: [ALIGNED / MISMATCHED / NOT CONFIGURED]

### Product Detailing
- Detailing records: [count]
- Discussion records: [count]
- Status: [Configured / Not Configured]

### Signature Configuration
- Compliance statements: [count]
- Active statements: [count]
- Status: [Configured / Not Configured]

### Admin Console Settings
- Visit Management enabled: [Yes/No/Unknown]
- Trigger handlers: [Active/Inactive/Unknown]

### Mobile Metadata Cache
- Status: [Active / Error / Not Found]
- Last Updated: [date]

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

### Step 8: Offer Next Steps and Fix Issues

Based on findings, offer to fix issues directly using programmatic tools:

**If no Visit record types:**
- Guide to Setup > Object Manager > Visit > Record Types
- Suggest creating standard types: Detail Visit, Remote Visit

**If record types mismatched:**
- Identify which ProviderVisit record types are missing
- Guide to Setup > Object Manager > ProviderVisit > Record Types

**If no compliance statements:**
- Guide to creating ComplianceStatementDefinition records
- Explain signature page requirements

**If trigger handlers inactive:**
- Ask user: "The following trigger handlers are inactive: [list]. Want me to enable them?"
- If yes: `toggle_trigger_handler({ handlerName: "VisitTriggerHandler", active: true })` for each
- Report what was enabled

**If Admin Console settings missing or misconfigured:**
- Ask user: "These settings need to be created/updated: [list]. Want me to set them up?"
- If yes: Use `create_admin_setting` or `update_admin_setting` as appropriate
- Report what was changed

**If metadata cache stale or missing:**
- Ask user which profiles need cache regeneration
- Offer to run `generate_mobile_metadata_cache`

**If all checks pass:**
- Confirm visit management is properly configured
- Remind to regenerate cache after any future changes
- Suggest testing the visit flow on mobile

## Example Usage

User: `/afls:configure-visits`
> Run full visit management configuration check

User: `/afls:configure-visits record-types`
> Focus on visit record type configuration

User: `/afls:configure-visits signature`
> Focus on signature and compliance statement configuration

User: `/afls:configure-visits mobile`
> Focus on mobile-specific visit configuration

## Quick Validation Alternative

For a faster automated check, suggest using the audit command:

```
/afls:audit visit-config-check
```

This runs all visit-specific validation rules automatically.

## Admin Console Navigation

| Task | Path |
|------|------|
| Visit Settings | Admin Console > Visit Settings |
| Record Type Mappings | Admin Console > Visit Settings > Visit Record Type Mappings |
| Visit Engagement | Admin Console > Visit Settings > Visit Engagement |
| Product Detailing | Admin Console > Visit Settings > Product Detailing |
| Signature Settings | Admin Console > Visit Settings > Signature |
| Trigger Handlers | Admin Console > Visit Settings > Trigger Handlers |
| Metadata Cache | Admin Console > Mobile > Object Metadata Cache Configuration |

## IMPORTANT OBJECT NAME REMINDERS

- Use `Visit` NOT `Visit__c`
- Use `ProviderVisit` NOT `ProviderVisit__c`
- Use `ProviderVisitPrdDetailing` NOT `ProviderVisitProductDetailing__c`
- Use `ProviderVisitProdDiscussion` NOT `ProviderVisitProductDiscussion__c`
- Use `ComplianceStatementDefinition` NOT `ComplianceStatement__c`
- Use `ProviderAcctTerritoryInfo` NOT `ProviderAccountTerritoryInfo__c`
- Admin Console settings are in `LifeSciConfigRecord` (Tooling API only)

---
description: Interactive wizard to configure and validate the AFLS Home Page
arguments: "[platform]"
---

# Configure AFLS Home Page

Interactive wizard to check and configure the AFLS Home Page for web and/or mobile.

## Arguments

- `platform` (optional): Target platform - `web`, `mobile`, or `both` (default: both)

## Instructions

Follow these steps sequentially to validate and configure the home page.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Check Home Page Lightning Pages

Query existing home page configurations:

```sql
SELECT Id, MasterLabel, PageType, LastModifiedDate
FROM FlexiPage
WHERE PageType = 'HomePage'
ORDER BY LastModifiedDate DESC
```

Use `run_soql` to execute this query.

Report findings:
- Number of home pages found
- Most recently modified home page
- If none found, explain how to create one in Lightning App Builder

### Step 3: Check Announcements Status

Query active announcements:

```sql
SELECT Id, Name, EffectiveDate, ExpirationDate
FROM AppAlert
WHERE Type = 'Announcement'
ORDER BY ExpirationDate DESC
LIMIT 10
```

Report:
- Count of active announcements (ExpirationDate >= TODAY)
- Count of expired announcements
- Any announcements expiring soon (within 7 days)

### Step 4: Check NBC Configuration

Query Next Best Customer data:

```sql
SELECT COUNT() FROM TerritoryAccountScore WHERE Score != null
```

Report:
- Whether NBC data exists
- If no data, explain NBC setup requirements

### Step 5: Check Quick Actions Count

Query global quick actions:

```sql
SELECT Id, Name, Label, Type
FROM QuickActionDefinition
WHERE TargetSobjectType = 'Global'
ORDER BY Label
```

Report:
- Total count of global quick actions
- If > 5, warn that only 5 display on mobile
- List the quick action names

### Step 6: Check Activity Plans

Query active activity plans:

```sql
SELECT Id, Name, IsActive
FROM ActivityPlan
WHERE IsActive = true
```

Report:
- Whether activity plans exist
- If none, explain Activity Plan widget will be empty

### Step 7: Check Metadata Cache (Mobile Only)

If platform is `mobile` or `both`, check metadata cache:

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
- Integration status (should be Ok)
- If stale (> 7 days old), recommend regeneration

### Step 8: Present Configuration Report

Compile findings into a summary report:

```
## Home Page Configuration Report

### Platform: [web/mobile/both]

### Overall Status: [READY / NEEDS ATTENTION / NOT CONFIGURED]

### Lightning Page
- Status: [Found / Not Found]
- Name: [page name]
- Last Modified: [date]

### Announcements
- Active: [count]
- Expired: [count]
- Expiring Soon: [count]

### Next Best Customer
- Status: [Configured / Not Configured]
- Records: [count]

### Quick Actions
- Count: [count]
- Status: [OK / Too Many for Mobile]

### Activity Plans
- Status: [Configured / Not Configured]
- Active Plans: [count]

### Metadata Cache (Mobile)
- Status: [Active / Needs Regeneration / Not Found]
- Last Updated: [date]

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

### Step 9: Offer Next Steps and Fix Issues

Based on findings, offer to fix issues directly using programmatic tools:

**If Lightning page missing:**
- Guide to Setup > Lightning App Builder to create home page

**If no announcements:**
- Guide to Admin Console > App Alerts > Announcements

**If too many quick actions:**
- Suggest reviewing and reducing to 5

**If NBC not configured:**
- Guide to Admin Console > Next Best > Next Best Customer

**If trigger handlers inactive:**
- Ask user: "The following trigger handlers are inactive: [list]. Want me to enable them?"
- If yes: `toggle_trigger_handler({ handlerName: "...", active: true })` for each
- Report what was enabled

**If Admin Console settings missing or misconfigured:**
- Ask user: "These settings need to be created/updated: [list]. Want me to set them up?"
- If yes: Use `create_admin_setting` or `update_admin_setting` as appropriate
- Report what was changed

**If metadata cache stale:**
- Offer to run `generate_mobile_metadata_cache` tool

**If all checks pass:**
- Confirm home page is properly configured
- Suggest testing on both web and mobile

## Example Usage

User: `/afls:configure-home-page`
> Run full configuration check for both platforms

User: `/afls:configure-home-page mobile`
> Focus on mobile-specific configuration

User: `/afls:configure-home-page web`
> Focus on web-specific configuration

## Quick Validation Alternative

For a faster automated check, suggest using the audit command:

```
/afls:audit home-page-check
```

This runs all home page validation rules automatically.

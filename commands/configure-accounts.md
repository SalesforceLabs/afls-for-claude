---
description: Interactive wizard to configure and validate AFLS Account Management
arguments: "[check-type]"
---

# Configure AFLS Account Management

Interactive wizard to check and configure Account Management for web and mobile.

## Arguments

- `check-type` (optional): Focus area - `full`, `addresses`, `affiliations`, `licenses`, `dcr`, `search`, or `mobile` (default: full)

## Instructions

Follow these steps sequentially to validate and configure account management.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Run Comprehensive Account Configuration Check

Run the dedicated account configuration tool:

```
check_account_config()
```

This queries:
- Account records (PersonAccount and Business) with record types
- HealthcareProvider records
- ContactPointAddress records (count, primary addresses)
- BusinessLicense records (validation status, expiration)
- ProviderAffiliation records
- ProviderAcctTerritoryInfo records
- LifeSciDataChgDefMngFld records (DCR managed fields)
- Mobile metadata cache status

Report the summary from the tool output.

### Step 3: Check Account Record Types

Verify Account record types including PersonAccount:

```sql
SELECT Id, Name, DeveloperName, IsActive, IsPersonType
FROM RecordType
WHERE SobjectType = 'Account' AND IsActive = true
```

Report:
- Active account record types
- Whether PersonAccount types exist
- **WARN if no PersonAccount types**: Most AFLS implementations require PersonAccount

### Step 4: Check Healthcare Provider Records

Query HealthcareProvider records linked to accounts:

```sql
SELECT Id, Name, AccountId, Account.Name, Status, ProfessionalTitle
FROM HealthcareProvider ORDER BY Name LIMIT 50
```

Report:
- Number of HealthcareProvider records
- Whether they are linked to accounts
- **WARN if none found**: HealthcareProvider records are required for provider functionality

### Step 5: Check Addresses

Query ContactPointAddress records:

```sql
SELECT Id, Name, ParentId, City, State, PostalCode, Country, IsPrimary
FROM ContactPointAddress ORDER BY ParentId LIMIT 50
```

Report:
- Number of addresses
- How many are marked as primary
- **WARN if no primary addresses**: Each account should have a primary address

### Step 6: Check Business Licenses

Query BusinessLicense records and their validation status:

```sql
SELECT Id, Name, AccountId, Account.Name, LicenseNumber, Status, ExpirationDate, ComplianceScope, IsLicenseValidated
FROM BusinessLicense ORDER BY Account.Name LIMIT 50
```

Report:
- Number of licenses
- How many are validated (IsLicenseValidated = true)
- How many are expired
- Whether ComplianceScope is set
- **WARN if licenses exist but none validated**: Check IsLicenseValidated formula

### Step 7: Check Affiliations

Query ProviderAffiliation records:

```sql
SELECT Id, Name, AccountFromId, AccountFrom.Name, AccountToId, AccountTo.Name, Role
FROM ProviderAffiliation ORDER BY AccountFrom.Name LIMIT 50
```

Report:
- Number of affiliation records
- Roles being used
- **INFO if none found**: Affiliations are optional but common in AFLS

### Step 8: Check DCR Configuration

Query DCR managed field definitions:

```sql
SELECT Id, Name, ObjectApiName, FieldApiName, ApplyChangeImmediately
FROM LifeSciDataChgDefMngFld ORDER BY ObjectApiName LIMIT 50
```

Report:
- Number of managed field definitions
- Objects with DCR enabled
- Whether any fields have ApplyChangeImmediately = true
- **INFO if none found**: DCR is optional; only needed if data governance is required

### Step 9: Check Mobile Metadata Cache Status

```
check_mobile_cache_status()
```

Report:
- Cache status (Active/Published/Error)
- Last modified date
- If stale (> 7 days old), recommend regeneration
- Any cache errors

### Step 10: Present Configuration Report

Compile findings into a summary report:

```
## Account Management Configuration Report

### Overall Status: [READY / NEEDS ATTENTION / NOT CONFIGURED]

### Accounts
- Person Account record types: [count] ([names])
- Business Account record types: [count] ([names])
- Total accounts: [count]

### Healthcare Providers
- HealthcareProvider records: [count]
- Status: [Configured / Not Found]

### Addresses
- ContactPointAddress records: [count]
- Primary addresses: [count]
- Status: [Configured / Needs Primary Designation / Not Found]

### Business Licenses
- BusinessLicense records: [count]
- Validated: [count]
- Expired: [count]
- Status: [Configured / Validation Issues / Not Found]

### Affiliations
- ProviderAffiliation records: [count]
- Roles: [list]
- Status: [Configured / Not Found]

### Data Change Requests
- Managed fields: [count]
- Objects covered: [list]
- Status: [Configured / Not Configured]

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

### Step 11: Offer Next Steps and Fix Issues

Based on findings, offer to fix issues directly using programmatic tools:

**If no PersonAccount record types:**
- Guide to Setup > Company Information > Enable Person Accounts
- Explain requirement for HCP records

**If no HealthcareProvider records:**
- Guide to creating HealthcareProvider records linked to accounts
- Explain relationship between Account and HealthcareProvider

**If no primary addresses:**
- Explain ContactPointAddress IsPrimary field
- Guide to Admin Console > Account Management > Address Administration & Setup

**If business license validation failing:**
- Guide to Admin Console > License Management
- Check IsLicenseValidated formula and ComplianceScope

**If no affiliations but needed:**
- Guide to creating ProviderAffiliation records
- Ask user: "Affiliation trigger handlers (HardAffiliationHandler, AffiliationReciprocalHandler) need to be enabled. Want me to enable them?"
- If yes: `toggle_trigger_handler({ handlerName: "HardAffiliationHandler", active: true })` and `toggle_trigger_handler({ handlerName: "AffiliationReciprocalHandler", active: true })`
- Report what was enabled

**If DCR not configured but needed:**
- Ask user: "DCRHandler trigger is inactive. Want me to enable it?"
- If yes: `toggle_trigger_handler({ handlerName: "DCRHandler", active: true })`
- Check Admin Console DCR settings: `list_admin_settings({ category: "AccountManagement" })`
- If settings missing: "I'll create the DCR managed field definitions. OK?"
- If yes: Use `update_admin_setting` or `create_admin_setting` as appropriate
- Report what was changed

**If other trigger handlers inactive:**
- Ask user: "The following trigger handlers are inactive: [list]. Want me to enable them?"
- If yes: `toggle_trigger_handler({ handlerName: "...", active: true })` for each
- Report what was enabled

**If Admin Console settings missing or misconfigured:**
- Ask user: "These settings need to be created/updated: [list]. Want me to set them up?"
- If yes: Use `create_admin_setting` or `update_admin_setting` as appropriate
- Report what was changed

**If metadata cache stale or missing:**
- Ask user which profiles need cache regeneration
- Offer to run `generate_mobile_metadata_cache`

**If all checks pass:**
- Confirm account management is properly configured
- Remind to regenerate cache after any future changes
- Suggest testing Provider Card on mobile

## Example Usage

User: `/afls:configure-accounts`
> Run full account management configuration check

User: `/afls:configure-accounts addresses`
> Focus on address configuration

User: `/afls:configure-accounts affiliations`
> Focus on affiliation configuration and trigger handlers

User: `/afls:configure-accounts licenses`
> Focus on business license validation

User: `/afls:configure-accounts dcr`
> Focus on data change request configuration

User: `/afls:configure-accounts search`
> Focus on account search and SBC configuration

User: `/afls:configure-accounts mobile`
> Focus on mobile-specific account configuration

## Quick Validation Alternative

For a faster automated check, suggest using the audit command:

```
/afls:audit account-config-check
```

This runs all account-specific validation rules automatically.

## Admin Console Navigation

| Task | Path |
|------|------|
| Provider Card | Admin Console > Account Management > Provider Card |
| Address Setup | Admin Console > Account Management > Address Administration & Setup |
| Affiliations | Admin Console > Account Management > Affiliations |
| Ratings | Admin Console > Account Management > Ratings |
| Account Search | Admin Console > Account Management > Account Search Preferences |
| DCR Settings | Admin Console > Account Management > Data Change Request |
| License Management | Admin Console > License Management |
| SBC Settings | Admin Console > Search Before Create |
| Metadata Cache | Admin Console > Mobile > Object Metadata Cache Configuration |

## IMPORTANT OBJECT NAME REMINDERS

- Use `Account` NOT `Account__c`
- Use `HealthcareProvider` NOT `HealthcareProvider__c`
- Use `ContactPointAddress` NOT `ContactPointAddress__c` or `AccountAddress__c`
- Use `BusinessLicense` NOT `BusinessLicense__c` or `AccountLicense__c`
- Use `ProviderAffiliation` NOT `ProviderAffiliation__c` or `AccountAffiliation__c`
- Use `ProviderAcctTerritoryInfo` NOT `ProviderAccountTerritoryInfo__c`
- Use `LifeSciDataChgDefMngFld` NOT `DataChangeRequest__c` or `ManagedField__c`
- Use `ProviderAccountProductInformation` NOT `ProviderAccountProductInformation__c`
- Admin Console settings are in `LifeSciConfigRecord` (Tooling API only)

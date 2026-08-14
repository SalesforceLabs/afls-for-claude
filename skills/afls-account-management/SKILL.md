---
name: afls-account-management
description: Guides AFLS Account Management configuration for web and mobile apps. Use when user asks about provider card, addresses, affiliations, ratings, account search, search before create (SBC), data change requests (DCR), business licenses, multi-object component, ARC graph, ContactPointAddress, HealthcareProvider, ProviderAffiliation, or Admin Console account settings.
---

## How to Answer Account Management Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Account concepts, sub-features, best practices | `get_afls_module_docs({ module: "account-management" })` |
| Specific topic (DCR, affiliations, SBC, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Current org account configuration | `check_account_config()` |
| Admin Console account settings | `list_admin_settings({ category: "AccountManagement" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "Account" })` or `describe_sobject({ sobject: "HealthcareProvider" })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Account data in the org | `run_soql({ query: "SELECT ... FROM Account ..." })` |
| Validation / audit | `audit_mobile_config({ group: "account-config-check" })` |

---

## Configuration Mode

When the user asks about configuring or enabling an Account Management feature, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "account-management" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
check_account_config()
list_trigger_handlers()
list_admin_settings({ category: "AccountManagement" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "DCRHandler", active: true })
toggle_trigger_handler({ handlerName: "HardAffiliationHandler", active: true })
toggle_trigger_handler({ handlerName: "AffiliationReciprocalHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run `check_account_config()` to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `Account` | `Account__c` |
| `HealthcareProvider` | `HealthcareProvider__c`, `HealthcareProvider__mdt` |
| `ContactPointAddress` | `ContactPointAddress__c`, `AccountAddress__c` |
| `BusinessLicense` | `BusinessLicense__c`, `AccountLicense__c` |
| `ProviderAffiliation` | `ProviderAffiliation__c`, `AccountAffiliation__c` |
| `ProviderAcctTerritoryInfo` | — |
| `ProviderAccountProductInformation` | `ProviderAccountProductInformation__c` |
| `LifeSciDataChgDefMngFld` | `LifeSciDataChgDefMngFld__c`, `ManagedField__c` |
| `UserAdditionalInfo` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings` / `check_account_config`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

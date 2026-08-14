---
name: afls-lists-filters
description: Guides AFLS Lists & Filters configuration and end-user functionality. Use when user asks about account lists, account filters, static lists, advanced filters, NBC filters, activity plan filters, bulk actions, map view, best time filter, or account list configuration in Admin Console.
---

## How to Answer Lists & Filters Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Lists & Filters concepts, setup, best practices | `get_afls_module_docs({ module: "lists-filters" })` |
| Specific topic (bulk actions, advanced filters, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console list settings | `list_admin_settings({ category: "Lists" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "ProviderAcctTerritoryInfo" })` |
| Account list data in the org | `run_soql({ query: "SELECT ... FROM ProviderAcctTerritoryInfo ..." })` |
| NBC scores | `run_soql({ query: "SELECT ... FROM TerritoryAccountScore ..." })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Validation / audit | `audit_mobile_config({ group: "lists-filters-check" })` |

Always include the citation line from the tool response in your answer.

---

## Configuration Mode

When the user asks about configuring or enabling a Lists & Filters feature, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "lists-filters" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "Lists" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "...", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run checks from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `ProviderAcctTerritoryInfo` | `ProviderAcctTerritoryInfo__c`, `AccountTerritoryInfo__c`, `TerritoryInfo__c` |
| `TerritoryAccountScore` | `TerritoryAccountScore__c`, `NBCScore__c`, `NextBestCustomer__c` |
| `ProviderAcctProductInfo` | — |
| `Account` | — |
| `HealthcareProvider` | — |
| `ContactPointAddress` | — |
| `Territory2` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

### Cross-Module Configuration Notes
Some Lists & Filters features are configured outside the Lists & Filters Admin Console tile:
- **Map View** — configured in Account Management admin tile
- **Best Time filter** — configured in Address Administration tile
- **Activity Plan filters** — configured in Activity Plan admin tile
- **Record type filters** — configured in Account Management admin tile
- **Quick actions in account list** — Location = "Search" in Custom and Quick Action Administration

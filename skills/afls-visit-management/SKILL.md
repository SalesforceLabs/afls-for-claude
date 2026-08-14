---
name: afls-visit-management
description: Guides AFLS Visit Management configuration for web and mobile apps. Use when user asks about visit setup, visit engagement page, visit record types, product detailing, visit signatures, Admin Console visit settings, or ProviderVisit objects.
---

## How to Answer Visit Management Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Visit concepts, lifecycle, best practices, test cases | `get_afls_module_docs({ module: "visit-management" })` |
| Specific visit topic (signatures, geolocation, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Current org visit configuration | `check_visit_config()` |
| Admin Console visit settings | `list_admin_settings({ category: "Visit" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "Visit" })` or `describe_sobject({ sobject: "ProviderVisit" })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Visit data in the org | `run_soql({ query: "SELECT ... FROM Visit ..." })` |
| Validation / audit | `audit_mobile_config({ group: "visit-config-check" })` |

Always preserve the citation block (lines starting with > 📖, > 🔗, > 📂) from the tool response verbatim in your answer.

---

## Configuration Mode

When the user asks about configuring or enabling a Visit Management feature, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "visit-management" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
check_visit_config()
list_trigger_handlers()
list_admin_settings({ category: "Visit" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "VisitTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run `check_visit_config()` to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `Visit` | `Visit__c`, `VisitSetting__c` |
| `ProviderVisit` | `ProviderVisit__c` |
| `ProviderVisitPrdDetailing` | `ProviderVisitProductDetailing__c` |
| `ProviderVisitProdDiscussion` | `ProviderVisitProductDiscussion__c` |
| `ProviderAcctTerritoryInfo` | — |
| `ComplianceStatementDefinition` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings` / `check_visit_config`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

### Adding Custom Objects to Visit Engagement Sidebar
When the user asks about this:
1. Call `describe_sobject({ sobject: "Visit" })` to get `childRelationships`
2. Filter to eligible custom objects (exclude OOB sidebar objects and standard platform objects)
3. Call `add_visit_engagement_sidebar_item` with no `layoutName` to list available layouts
4. Present eligible objects and ask which to add
5. Ask which layout to modify
6. Call `add_visit_engagement_sidebar_item` with the chosen objectName and layoutName
7. Recommend regenerating mobile metadata cache

**OOB sidebar objects (already present — do NOT offer these):**
ProviderVisitPrdDetailing, ProviderVisitProdDiscussion, ProviderVisitMarketingItem, ProductDisbursement, ProviderVisitDtlProductMsg, Attendee, Visitor

**Maximum 10 related lists** (8 OOB + 2 custom).

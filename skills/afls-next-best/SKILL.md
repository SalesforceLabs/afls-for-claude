---
name: afls-next-best
description: Guides AFLS Next Best configuration — NBC (Next Best Customer), NBA (Next Best Action), and NBM (Next Best Message). Use when user asks about Next Best Customer, Next Best Action, Next Best Message, TerritoryAccountScore, TerritoryAcctRcmdAction, TerritoryAcctProdMsgScore, NBC widget, NBA widget, NBM recommendations, or Einstein Studio predictive models for AFLS.
---

## How to Answer Next Best Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| NBC/NBA/NBM concepts, setup, best practices | `get_afls_module_docs({ module: "next-best-nbc-nba-nbm" })` |
| Specific next best topic (widgets, Einstein Studio, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console next best settings | `list_admin_settings({ category: "NextBest" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "TerritoryAccountScore" })` |
| NBC data in the org | `run_soql({ query: "SELECT ... FROM TerritoryAccountScore ..." })` |
| NBA data in the org | `run_soql({ query: "SELECT ... FROM TerritoryAcctRcmdAction ..." })` |
| NBM data in the org | `run_soql({ query: "SELECT ... FROM TerritoryAcctProdMsgScore ..." })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Validation / audit | `audit_mobile_config({ group: "next-best-config-check" })` |

Always include the citation line from the tool response in your answer.

---

## Configuration Mode

When the user asks about configuring or enabling a Next Best feature, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "next-best-nbc-nba-nbm" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "NextBest" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "NextBestTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run checks from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `TerritoryAccountScore` | `NextBestCustomer__c`, `NBCScore__c`, `TerritoryAccountScore__c` |
| `TerritoryAcctRcmdAction` | `NextBestAction__c`, `ActionRecommendation__c`, `TerritoryAcctRcmdAction__c` |
| `TerritoryAcctProdMsgScore` | `NextBestMessage__c`, `ProductMessage__mdt`, `TerritoryAcctProdMsgScore__c` |
| `ProductGuidance` | — |
| `Territory2` | — |
| `Product2` | — |
| `LifeSciMarketableProduct` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app
- **ProductGuidance type MUST be 'message' for NBM** — NOT 'objective'
- **ActionType for NBA** — only `Visit` or `Email` (Managed Event NOT supported in GA)

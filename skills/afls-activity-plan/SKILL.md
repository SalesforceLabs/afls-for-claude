---
name: afls-activity-plan
description: Guides AFLS Activity Plan configuration for web and mobile apps. Use when user asks about activity plans, account goals, weighted territory goals, shared territory goals, provider activity goals, goal measures, product goals, activity plan review, activity plan batch jobs, time periods, plan cycle, or Admin Console activity plan settings.
---

## How to Answer Activity Plan Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Activity plan concepts, lifecycle, best practices | `get_afls_module_docs({ module: "activity-plan" })` |
| Specific topic (weighted goals, batch jobs, measures, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Current org activity plan configuration | `check_activity_plan_config()` |
| Admin Console activity plan settings | `list_admin_settings({ category: "ActivityPlan" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "ActivityPlan" })` or `describe_sobject({ sobject: "ProviderActivityGoal" })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Activity plan data in the org | `run_soql({ query: "SELECT ... FROM ActivityPlan ..." })` |
| Validation / audit | `audit_mobile_config({ group: "activity-plan-config-check" })` |

---

## Configuration Mode

When the user asks about configuring or enabling Activity Plan features, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "activity-plan" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
check_activity_plan_config()
list_trigger_handlers()
list_admin_settings({ category: "ActivityPlan" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "ActivityPlanTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
create_admin_setting({ category: "ActivityPlan", developerName: "...", label: "..." })
```

#### Step 5: Verify
Re-run `check_activity_plan_config()` to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `ActivityPlan` | `ActivityPlan__c`, `ActivityPlan__mdt` |
| `ActivityPlanTerritory` | `ActivityPlanTerritory__c`, `PlanTerritory__c` |
| `TimePeriod` | `TimePeriod__c`, `PlanCycle__c` |
| `ProviderActivityGoal` | `ProviderActivityGoal__c`, `AccountGoal__c` |
| `ProviderActivityGoalMeasure` | `ProviderActivityGoalMeasure__c`, `GoalMeasure__c` |
| `PrvdActvtyGoalMeasurePrdct` | `PrvdActvtyGoalMeasurePrdct__c`, `GoalMeasureProduct__c` |
| `ProviderAcctTerritoryInfo` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings` / `check_activity_plan_config`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** try to query `LifeSciConfigRecord` with `run_soql` — it requires the Tooling API
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

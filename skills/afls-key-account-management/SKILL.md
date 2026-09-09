---
name: afls-key-account-management
description: Guides AFLS Key Account Management (KAM) configuration for web and mobile apps. Use when user asks about account plans, KAM account plan templates, goal definitions, action plan templates, assessment tasks, account plan stakeholders, account plan participants, SWOT analysis, territory business plans, or AccountPlan/GoalDefinition/ActionPlanTemplate/AccountPlanObjective/AccountPlanStakeholder objects.
---

## How to Answer KAM Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| KAM concepts, setup, best practices | `get_afls_module_docs({ module: "key-account-management" })` |
| Specific KAM topic (templates, stakeholders, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console KAM settings | `list_admin_settings({ category: "KAM" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "AccountPlan" })` |
| KAM data in the org | `run_soql({ query: "SELECT ... FROM AccountPlan ..." })` |
| Goal definition templates | `run_soql({ query: "SELECT ... FROM GoalDefinition WHERE Category = 'Library' AND Status = 'Active' AND Type = 'Affiliate'" })` |
| Action plan templates | `run_soql({ query: "SELECT ... FROM ActionPlanTemplate WHERE Type = 'Key Account Management'" })` |
| Mobile cache status | `check_mobile_cache_status()` |

Always include the citation line from the tool response in your answer.

---

## Configuration Mode

When the user asks about configuring or enabling a KAM feature, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "key-account-management" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "KAM" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "KAMTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run checks from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `AccountPlan` | `KamAccountPlan`, `AccountPlan__c`, `KAMPlan__c`, `KeyAccountPlan__c` |
| `AccountPlanObjective` | `KamAccountPlanObjective`, `AccountObjective__c`, `PlanObjective__c`, `KAMObjective__c` |
| `GoalDefinition` | `GoalTemplate__c`, `ObjectiveTemplate__c`, `GoalDefinition__c` |
| `ActionPlanTemplate` | `TacticTemplate__c`, `ActionTemplate__c`, `ActionPlanTemplate__c` |
| `AssessmentTask` | `Task__c`, `AssessmentTask__c`, `Todo__c` |
| `AccountPlanStakeholder` | `KamAccountPlanStakeholder`, `KAMStakeholder__c`, `AccountPlanStakeholder__c` |
| `AccountPlanParticipant` | `KamAccountPlanParticipant`, `PlanParticipant__c`, `TeamMember__c` |
| `AccountPlanProduct` | `KamAccountPlanProduct`, `KAMProduct__c` |
| `AccountPlanRelationship` | `KamRelatedAccountPlan` |
| `AccountPlanRelaObjAnalysis` | `KamAccountPlanObjectAnalysis` |
| `ActionPlanTemplateAssignment` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

### GoalDefinition Template Requirements
For a GoalDefinition to appear as an importable template, ALL three fields must be set:
- **Type = Affiliate** (required for downstream template usage)
- **Status = Active**
- **Category = Library**

### ActionPlanTemplate Requirements
For an ActionPlanTemplate to appear in account plan import:
- **Type = Key Account Management**
- **Target Objective = Account Plan Objective** (NOT Territory Business Plan Objective)
- Must be linked to a GoalDefinition via `ActionPlanTemplateAssignment`

## Troubleshooting

- **Related Account Plans (or any KAM related list) renders blank on mobile** — On the iPad app a related-list tab shows no card header, no New button, and no rows once the parent has ≥1 child, and often reproduces on one record but not another. This is a page-layout issue, not a data or cache issue: `force:relatedListSingleContainer` with `relatedListComponentOverride = NONE` inherits its columns from the parent's **RecordType page layout**, and a record type whose layout omits that related list blanks the whole container. See the **"Mobile Related List Renders Blank (force:relatedListSingleContainer)"** section in the `afls-troubleshoot` skill for the full diagnose steps and both fixes.

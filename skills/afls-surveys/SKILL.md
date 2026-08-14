---
name: afls-surveys
description: Guides AFLS Surveys configuration and usage. Use when user asks about surveys in AFLS, survey launch during visits, survey responses, survey sharing with territory, survey locking on mobile, SurveyResponse/SurveySubject objects, or Survey object configuration.
---

## How to Answer Survey Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Survey concepts, setup, best practices | `get_afls_module_docs({ module: "surveys" })` |
| Specific survey topic (sharing, launch points, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console survey settings | `list_admin_settings({ category: "Surveys" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "Survey" })` |
| Survey data in the org | `run_soql({ query: "SELECT ... FROM Survey ..." })` |
| Survey responses | `run_soql({ query: "SELECT ... FROM SurveyResponse ..." })` |
| Survey context records | `run_soql({ query: "SELECT ... FROM SurveySubject ..." })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Validation / audit | `audit_mobile_config({ group: "survey-config-check" })` |

Always include the citation line from the tool response in your answer.

---

## Configuration Mode

When the user asks about configuring or enabling Surveys, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "surveys" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "Surveys" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "SurveyTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run checks from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `Survey` | `Survey__c`, `Survey__mdt`, `LSCSurvey__c`, `FeedbackForm__c` |
| `SurveyVersion` | — |
| `SurveyPage` | — |
| `SurveyQuestion` | — |
| `SurveyQuestionChoice` | — |
| `SurveyResponse` | `SurveyResponse__c`, `SurveyAnswer__c`, `SurveyResult__c` |
| `SurveyQuestionResponse` | `SurveyQuestionResponse__c` |
| `SurveySubject` | `SurveySubject__c`, `SurveyContext__c` |
| `SurveyInvitation` | — |
| `SurveyShare` | `SurveySharing__c`, `SurveyAccess__c` |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

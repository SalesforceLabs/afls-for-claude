---
name: afls-calendar-tot-routine
description: Guides AFLS Calendar, Time Off Territory, Routine, and My Team configuration. Use when user asks about calendar settings, Planner Administration, time off territory (TOT), routines, shared calendar, colleague visits, calendar event types, Time Off Territory events, business hours, slot-based TOT, or My Team in AFLS.
---

## How to Answer Calendar / TOT / Routine Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Calendar, TOT, routine concepts, best practices | `get_afls_module_docs({ module: "calendar-tot-routine-myteam" })` |
| Specific topic (slot-based TOT, shared calendar, My Team, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console calendar settings | `list_admin_settings({ category: "Calendar" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "Event" })` or `describe_sobject({ sobject: "Visit" })` |
| Calendar data in the org | `run_soql({ query: "SELECT ... FROM Event ..." })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Validation / audit | `audit_mobile_config({ group: "calendar-config-check" })` |

---

## Configuration Mode

When the user asks about configuring Calendar, TOT, Routine, or Planner Administration features, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "calendar-tot-routine-myteam" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "Calendar" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "CalendarTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run the checks from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `Event` | `CalendarEvent__c`, `CalendarActivity__c` |
| `TimeSheetEntry` (Type = 'TimeOffTerritory') | `TimeOffTerritory__c`, `TOT__c`, `TerritoryDowntime__c` |
| `Visit` | `Visit__c`, `CalendarVisit__c` |
| `BusinessHours` | — |
| `TerritoryUserDowntime` | `MirrorTerritory__c` |
| `Holiday` | — |
| `AssessmentTask` | — |
| `Territory2` (mirror territory fields are custom fields on Territory2) | `SharedCalendar__c`, `MyTeam__c` |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app
- **My Team** is a mobile-only feature — not available on web

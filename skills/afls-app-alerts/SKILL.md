---
name: afls-app-alerts
description: Guides AFLS App Alerts and Notifications configuration for web and mobile apps. Use when user asks about app alerts, record alerts, notifications, recommendations, guided actions, home office announcements, app alert territory, app alert user response, notification pane, bell icon, or AppAlert objects.
---

## How to Answer App Alerts Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| App alerts concepts, setup, best practices | `get_afls_module_docs({ module: "app-alerts-notifications" })` |
| Specific alerts topic (deep links, announcements, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console alert settings | `list_admin_settings({ category: "AppAlerts" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "AppAlert" })` |
| Active alerts in the org | `run_soql({ query: "SELECT ... FROM AppAlert WHERE EffectiveDate <= TODAY AND ValidUntilDate >= TODAY" })` |
| Alert territory assignments | `run_soql({ query: "SELECT ... FROM AppAlertTerritory ..." })` |
| User responses | `run_soql({ query: "SELECT ... FROM AppAlertUserResponse ..." })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Validation / audit | `audit_mobile_config({ group: "app-alerts-config-check" })` |

Always include the citation line from the tool response in your answer.

---

## Configuration Mode

When the user asks about configuring or enabling App Alerts, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "app-alerts-notifications" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "AppAlerts" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "AppAlertTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run checks from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `AppAlert` | `AppAlert__c`, `Notification__c`, `Alert__c`, `AppNotification__c` |
| `AppAlertTerritory` | `AppAlertTerritory__c`, `AlertTerritory__c`, `AlertTerritory__mdt` |
| `AppAlertUserResponse` | `AppAlertUserResponse__c`, `AlertResponse__c`, `NotificationResponse__c` |
| `RecordAlert` | `RecordAlert__c`, `RecordNotification__c` |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app
- **Without AppAlertTerritory records, alerts won't reach any users** — always verify territory assignments

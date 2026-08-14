---
name: afls-field-email
description: Guides AFLS Field Email configuration and setup. Use when user asks about field email, email templates, email queue, email jobs, consent for email, communication subscriptions, fragment jobs, HTML email templates, email settings, or sending emails from AFLS.
---

## How to Answer Field Email Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Field email concepts, lifecycle, best practices | `get_afls_module_docs({ module: "field-email" })` |
| Specific email topic (fragments, consent, Mustache, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console email settings | `list_admin_settings({ category: "FieldEmail" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "LifeSciEmailTemplate" })` |
| Email data in the org | `run_soql({ query: "SELECT ... FROM LifeSciEmailTemplate ..." })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Validation / audit | `audit_mobile_config({ group: "email-config-check" })` |

---

## Configuration Mode

When the user asks about configuring Field Email features, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "field-email" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "FieldEmail" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "EmailTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run the checks from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `LifeSciEmailTemplate` | `EmailTemplate__c`, `LifeSciEmailTemplate__c` |
| `CommunicationSubscription` | `CommunicationSubscription__c`, `ConsentTopic__c` |
| `CommunicationSubscriptionConsent` | `Consent__c`, `EmailConsent__c` |
| `ContactPointEmail` | — |
| `LifeSciEmailJob` | `EmailJob__c` |
| `LifeSciEmailQueue` | `EmailQueue__c` |
| `LifeSciEmailFragment` | `EmailFragment__c` |
| `LifeSciEmailAttachment` | `EmailAttachment__c` |
| `DataUsePurpose` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** use `run_soql` for `LifeSciConfigRecord` — it requires Tooling API
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

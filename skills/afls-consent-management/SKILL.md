---
name: afls-consent-management
description: Guides AFLS Consent Management configuration for web and mobile apps. Use when user asks about consent capture, communication subscriptions, opt-in, opt-out, engagement channel types, compliance statements for consent, digital signatures, consent history, contact point consent, or CommunicationSubscription/CommunicationSubscriptionConsent objects.
---

## How to Answer Consent Management Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Consent concepts, lifecycle, best practices | `get_afls_module_docs({ module: "consent-management" })` |
| Specific consent topic (digital signatures, compliance snapshots, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Admin Console consent settings | `list_admin_settings({ category: "ConsentManagement" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Object fields and relationships | `describe_sobject({ sobject: "CommunicationSubscriptionConsent" })` |
| Consent data in the org | `run_soql({ query: "SELECT ... FROM CommunicationSubscriptionConsent ..." })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Validation / audit | `audit_mobile_config({ group: "consent-config-check" })` |

---

## Configuration Mode

When the user asks about configuring Consent Management features, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "consent-management" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
list_trigger_handlers()
list_admin_settings({ category: "ConsentManagement" })
run_soql({ query: "SELECT Id, Name, Status FROM CommunicationSubscription WHERE Status = 'Active'" })
run_soql({ query: "SELECT Id, Name, ContactPointType, IsActive FROM EngagementChannelType WHERE IsActive = true" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "ConsentTriggerHandler", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
```

#### Step 5: Verify
Re-run the queries from Step 1 to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `CommunicationSubscription` | `Subscription__c`, `ConsentSubscription__c` |
| `CommunicationSubscriptionConsent` | `ConsentRecord__c`, `Consent__c` |
| `CommunicationSubscriptionChannelType` | `Channel__c`, `ConsentChannel__c` |
| `CommunicationSubscriptionComplianceSnapshot` | `ConsentSnapshot__c`, `ConsentCompliance__c` |
| `EngagementChannelType` | `ConsentChannelType__c` |
| `DataUsePurpose` | — |
| `ComplianceStatementDefinition` | — |
| `DigitalSignature` | — |
| `ContactPointEmail` | — |
| `ContactPointPhone` | — |
| `ContactPointAddress` | — |
| `ContactPointSocial` | — |

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app
- No consent-specific config check tool exists — use `list_admin_settings` and SOQL queries to check consent state

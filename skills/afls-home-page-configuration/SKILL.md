---
name: afls-home-page-configuration
description: Guides AFLS Home Page configuration for web and mobile apps. Use when user asks about home page setup, widgets, announcements, quick actions, Lightning App Builder configuration for AFLS, Agentforce Welcome Center utterances/prompts, or configuring recommended utterances on the mobile home page.
---

## How to Answer Home Page Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Home page concepts, components, best practices | `get_afls_module_docs({ module: "home-page" })` |
| Specific topic (announcements, NBC widget, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Validate home page configuration | `audit_mobile_config({ group: "home-page-check" })` |
| Admin Console home page settings | `list_admin_settings({ category: "HomePage" })` |
| Trigger handler status | `list_trigger_handlers()` |
| Mobile cache status | `check_mobile_cache_status()` |
| Home page FlexiPages | `run_soql({ query: "SELECT Id, MasterLabel, PageType FROM FlexiPage WHERE PageType = 'HomePage'" })` |

---

## Configuration Mode

When the user asks about configuring Home Page features, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "home-page" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
audit_mobile_config({ group: "home-page-check" })
list_trigger_handlers()
list_admin_settings({ category: "HomePage" })
```

#### Step 2: Report Findings
Present a summary table of what's configured vs what's missing/disabled.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation.

#### Step 4: Apply Changes (with user confirmation)
```
toggle_trigger_handler({ handlerName: "...", active: true })
update_admin_setting({ recordId: "...", fields: { ... } })
create_admin_setting({ category: "HomePage", developerName: "...", label: "..." })
```

#### Step 5: Verify
Re-run `audit_mobile_config({ group: "home-page-check" })` to confirm everything is configured correctly.

---

## Tool Usage Rules

### Tool Restrictions
- **DO NOT** use `run_soql` for Admin Console settings — use `list_admin_settings`
- **DO NOT** use `run_soql` for mobile cache — use `check_mobile_cache_status()`
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

### Programmatic Utterance Management (Agentforce Welcome Center)

When the user asks about updating Agentforce Welcome Center utterances programmatically, follow this workflow:

#### Step 1: Find the home page name
```
run_soql({ query: "SELECT Id, DeveloperName, MasterLabel FROM FlexiPage WHERE PageType = 'HomePage' ORDER BY LastModifiedDate DESC" })
```

#### Step 2: Retrieve the FlexiPage metadata
```bash
sf project retrieve start --metadata FlexiPage:<PageDeveloperName> --output-dir /tmp/flexipage-retrieve --target-org <orgAlias>
```

#### Step 3: Read the retrieved XML
Read `/tmp/flexipage-retrieve/force-app/main/default/flexipages/<PageDeveloperName>.flexipage-meta.xml`. Look for the Agentforce Welcome Center `<componentInstances>` block. Utterances are stored as `utterance1` through `utterance5` properties.

#### Step 4: Edit the utterances
Use the Edit tool to modify utterance values in the XML file.

#### Step 5: Deploy the updated FlexiPage
```bash
sf project deploy start --source-dir /tmp/flexipage-retrieve --target-org <orgAlias>
```

#### Step 6: Confirm
Tell the user the utterances have been updated and they should see changes on mobile after refreshing.

**IMPORTANT:** Always retrieve first to get the current state. Never construct FlexiPage XML from scratch.

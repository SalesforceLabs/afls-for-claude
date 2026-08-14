# Claude for AFLS

A Claude Code plugin providing AFLS-specific knowledge, templates, tools, skills, and agents for AFLS Customer Engagement implementations.

## Diagram Output — Electron App

When running inside the Electron app and a user asks to see something in "diagram form", "as a diagram", "visualize this", or similar phrasing, **always use Mermaid syntax** (` ```mermaid ` code blocks). The Electron app renders Mermaid diagrams as interactive SVGs with zoom, pan, and fullscreen controls. Do not use ASCII art or plaintext diagrams when Mermaid can represent the content.

## Org Selection — IMPORTANT

When connecting to a Salesforce org, follow these rules strictly:

1. **If only one org is authenticated**, use it automatically — do not ask the user.
2. **If multiple orgs are authenticated and no target is set**, ask the user **exactly once** which org to use, then call `set_target_org` with their choice.
3. **Once an org is selected (via `set_target_org` or auto-detection), NEVER ask again.** The choice persists for the entire session. All tools automatically use the selected org.
4. **Do not call `check_afls_setup` or `list_sf_orgs` before every operation.** Only call them if the user explicitly asks about setup or if a tool returns an authentication error.

## Architecture

This is a **Claude Code Plugin** providing an all-in-one AFLS solution:

```
┌─────────────────────────────────────────────────────────────┐
│                      Claude Code                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │              AFLS-for-Claude (Plugin)                     │ │
│  ├─────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  Skills (Auto-invoked)    │   Commands (User-invoked)   │ │
│  │  ─────────────────────    │   ─────────────────────────  │ │
│  │  • afls-implementation     │   • /afls:setup-plugin        │ │
│  │  • afls-troubleshoot       │   • /afls:soql-query               │ │
│  │  • salesforce-query       │   • /afls:describe            │ │
│  │  • afls-data-model         │   • /afls:help                │ │
│  │                           │   • /afls:docs                │ │
│  │                           │                              │ │
│  │  Agents (Subagents)       │   MCP Server (Tools)         │ │
│  │  ─────────────────────    │   ───────────────────────── │ │
│  │  • afls-consultant         │   • AFLS knowledge tools      │ │
│  │  • afls-admin              │   • Salesforce org tools     │ │
│  │  • afls-developer          │   • SOQL, CRUD, metadata     │ │
│  │                           │                              │ │
│  └─────────────────────────────────────────────────────────┘ │
│                           │                                  │
│                           ▼                                  │
│                    Salesforce CLI (sf)                       │
│                           │                                  │
│                           ▼                                  │
│                  Your AFLS Salesforce Org                     │
└─────────────────────────────────────────────────────────────┘
```

## Plugin Components

### Skills (Claude auto-invokes based on context)
| Skill | Description |
|-------|-------------|
| `afls-implementation` | Guides module implementations with best practices |
| `afls-troubleshoot` | Diagnoses and resolves AFLS issues |
| `afls-mobile-validation` | Validates mobile app configuration (DB Schema, sync settings) |
| `afls-home-page-configuration` | Guides home page setup for web and mobile apps |
| `afls-quick-actions-configuration` | Guides quick actions and custom actions setup for web and mobile |
| `afls-visit-management` | Guides visit management configuration for web and mobile |
| `afls-sample-management` | Guides sample inventory and sample limits configuration |
| `afls-account-management` | Guides account management configuration (addresses, affiliations, licenses, DCR, search) |
| `afls-activity-plan` | Guides activity plan configuration (account goals, weighted goals, shared goals, batch jobs, measures) |
| `afls-territory-alignment` | Guides territory alignment configuration (explicit assignments, geo rules, affiliation rules, batch jobs) |
| `afls-user-management` | Guides user provisioning, permission sets, PSLs, profiles, role hierarchy, and license capacity |
| `afls-key-account-management` | Guides KAM account plans, goal definitions, action plan templates, stakeholders, and participants |
| `afls-lists-filters` | Guides account lists, dynamic filters, static lists, advanced filters, and bulk actions configuration |
| `afls-field-email` | Guides field email setup — templates, jobs, queue, consent integration, and mobile requirements |
| `afls-intelligent-content` | Guides CLM/presentation management — upload, distribution, tracking, and presentation settings |
| `afls-calendar-tot-routine` | Guides calendar, Time Off Territory, routines, and Planner Administration configuration |
| `afls-surveys` | Guides survey configuration and usage — sharing, launch points, and response tracking |
| `afls-product-management` | Guides product hierarchy, territory alignment, messages/objectives, and account restrictions |
| `afls-app-alerts` | Guides app alerts and notifications — creation, territory targeting, deep links, and alert types |
| `afls-next-best` | Guides NBC/NBA/NBM configuration — data model, widgets, Einstein Studio integration |
| `afls-consent-management` | Guides consent capture, communication subscriptions, channels, and compliance snapshots |
| `afls-agentforce` | Guides Agentforce for AFLS (Winter '26) — Field Sales Agent, topics, actions, and Einstein Studio |
| `afls-events-management` | Guides Events Management configuration — Managed Events, speaker events, participants, resources, budgets, stage paths |
| `afls-custom-scripts` | Guides custom script configuration for validation, checklists, and Visit Action Validation (IIFE patterns, CodeText, Locker Service gotchas) |
| `salesforce-query` | Helps construct and execute SOQL queries |
| `afls-mobile-app-settings` | Manages mobile Application Settings (default browser, password, search, notifications, dynamic actions) |
| `afls-db-schema` | Manages DB Schema records (mobile object sync configuration, SOQL filters, enable/disable objects) |
| `afls-briefings` | Guides Briefings (Daily Podcasts) configuration and troubleshooting |
| `afls-data-model` | Expert knowledge of the AFLS data model |
| `afls-health-check` | Guides org health assessment and configuration verification |
| `afls-data-migration` | Guides data loading and migration (account hierarchies, territory assignments, Veeva CRM migration) |
| `afls-demo-data-loading` | Guides loading demo data into AFLS orgs (territories, accounts, HCPs, NPIs, contact points, PATI/PATS, business licenses, therapy-area scenarios, localization) |
| `afls-integration-patterns` | Guides integration patterns (MDM, ERP, IQVIA, email providers, video platforms) |
| `afls-reporting-analytics` | Guides CRM Analytics, reports, dashboards, and KPI configuration |

### Commands (User-invoked with `/afls:command`)
| Command | Description |
|---------|-------------|
| `/afls:setup-plugin` | Check plugin status and connect to Salesforce org |
| `/afls:soql-query` | Run a SOQL query against your org |
| `/afls:describe` | Describe a Salesforce object's fields |
| `/afls:help` | Search the AFLS knowledge base by topic |
| `/afls:docs` | Browse and navigate AFLS documentation by category |
| `/afls:validate-mobile` | Validate mobile app configuration for deployment |
| `/afls:generate-metadata-cache` | Generate mobile metadata cache programmatically |
| `/afls:audit` | Audit mobile configuration against best practices |
| `/afls:configure-home-page` | Interactive wizard to configure and validate home page |
| `/afls:configure-quick-actions` | Interactive wizard to configure quick and custom actions |
| `/afls:configure-visits` | Interactive wizard to configure and validate visit management |
| `/afls:configure-samples` | Interactive wizard to configure and validate sample management |
| `/afls:configure-accounts` | Interactive wizard to configure and validate account management |
| `/afls:configure-activity-plan` | Interactive wizard to configure and validate activity plans |
| `/afls:configure-territory` | Interactive wizard to configure and validate territory alignment |
| `/afls:configure-users` | Interactive wizard to configure and validate user management |
| `/afls:configure-custom-scripts` | Interactive wizard to configure and validate custom scripts for validation |
| `/afls:open-org` | Open the Salesforce org in the browser |
| `/afls:diff-orgs` | Compare configuration between two Salesforce orgs |
| `/afls:health-check` | Run a comprehensive AFLS org health check |
| `/afls:release-notes` | View AFLS release notes by Salesforce release |
| `/afls:export-config` | Export AFLS org configuration as JSON |
| `/afls:import-config` | Import AFLS configuration from JSON export |
| `/afls:status` | View a dashboard of the connected AFLS org |
| `/afls:configure-briefings` | Interactive wizard to configure and validate Briefings (Daily Podcasts) |
| `/afls:diagnose-briefings` | Diagnose why Briefings isn't working — validates toggle, permissions, flows, DB Schema |
| `/afls:getting-started` | Interactive onboarding — check setup, discover capabilities, get started |

### Agents (Specialized subagents)
| Agent | Description |
|-------|-------------|
| `afls-consultant` | Senior implementation consultant for complex projects |
| `afls-admin` | Administrator for day-to-day operations |
| `afls-developer` | Developer for OmniStudio and custom development |
| `afls-docs-researcher` | Searches live official Salesforce Help documentation for AFLS setup, features, and admin configuration |

## Target Users

- **Consultants**: Implementing AFLS for new customers, need guidance on best practices
- **Developers**: Building custom functionality and integrations on AFLS
- **Administrators**: Managing operations, troubleshooting, and optimizing implementations

## MCP Server Tools

The plugin includes an MCP server that provides these tools:

### Knowledge & Documentation Tools

| Tool | Description |
|------|-------------|
| `list_afls_modules` | List all 28 AFLS4CE modules with documentation |
| `get_afls_module_docs` | Get detailed documentation for a specific module |
| `search_afls_knowledge` | Search across all documentation for topics/terms |
| `explain_afls_concept` | Get explanation of AFLS concepts (ARC, Sample Limits, etc.) |
| `get_afls_admin_setup` | Get admin configuration guidance for a feature |
| `list_afls_help_docs` | List all available documentation (help, guides, exercises, troubleshooting) |
| `get_afls_help_doc` | Get official Salesforce help documentation for a topic |
| `get_afls_guide` | Get guide documentation (developer guide, mobile setup) |
| `get_afls_troubleshooting` | Get common issues and troubleshooting documentation |
| `get_afls_exercise` | Get hands-on exercise documentation |

#### Salesforce Org Tools

| Tool | Description |
|------|-------------|
| `check_afls_setup` | Check if SF CLI is installed and orgs are authenticated |
| `install_sf_cli` | Install Salesforce CLI via npm (with user consent) |
| `list_sf_orgs` | List all authenticated Salesforce orgs |
| `set_target_org` | Set which org to use for operations |
| `open_org` | Open the target org in the browser, optionally to a specific page path |
| `run_soql` | Execute SOQL queries against the target org |
| `describe_sobject` | Get object metadata (fields, types, etc.) |
| `get_record` | Retrieve a specific record by ID |
| `create_record` | Create a new record |
| `update_record` | Update an existing record |
| `delete_record` | Delete a record |
| `generate_mobile_metadata_cache` | Generate mobile metadata cache for specified profiles |
| `upload_presentation` | Upload a presentation (.pptx, .pdf, or .zip files) to AFLS Intelligent Content. Auto-detects format: PPTX converts via LibreOffice, PDF uploads directly, HTML ZIPs are validated and uploaded as pages. All formats use the Bulk Presentation API. |
| `distribute_presentation` | Distribute a presentation to territories. Creates PresentationShare records with territory Group IDs (TerritoryAndSubordinates for cascading). |
| `assign_presentation_content` | Assign topics to a presentation and/or products to its pages. Creates TopicAssignment and PresentationPageProduct records. |
| `diff_orgs` | Compare AFLS configuration between two orgs. Compares trigger handlers, admin settings, DB Schema, and actions to identify configuration drift. |

**CRITICAL — Presentation language interpretation:**
- **"associate with X" / "link to X" / "tag with X"** → X is a **Topic** name. Search `Topic` object, then call `assign_presentation_content` with `topicNames`. NEVER search Territory2 for this.
- **"give access to [person]" / "grant access to [person]"** → Look up the person's territory via `UserTerritory2Association`, then call `distribute_presentation` with that territory ID.
- **"distribute to [territory]"** → Call `distribute_presentation` directly with the territory ID.

#### AFLS Action Tools

**CRITICAL: These are the ONLY tools that work for AFLS actions. NEVER use run_soql, Bash, delete_record, or create_record for actions.**

| Tool | Description |
|------|-------------|
| `list_afls_actions` | List Quick Actions and Custom Actions via Tooling API (includes IDs, profiles) |
| `create_quick_action` | Create a Quick Action (Email, NewVisit, LogCall, etc.) |
| `create_custom_action` | Create a Custom Action (URL, App, Utterance) |
| `update_afls_action` | Update an existing Quick/Custom Action (label, fields, profiles, active status) |
| `delete_afls_action` | Delete a Quick Action or Custom Action by ID or name |
| `check_mobile_cache_status` | Check mobile metadata cache status |

**NEVER use run_soql to query actions or cache status. These objects DO NOT EXIST:**
- `LifeSciCustomAction__mdt`, `CustomAction__c`, `QuickAction__mdt`, `LifeSciConfigType__c`
- `MobileMetadataCache__c`, `MobileApplicationDetail`, `lsc4ce__MobileMetadataCache__c`

**To update an action:** Call `update_afls_action` with the ID or name and the fields to change.
**To delete an action:** Call `delete_afls_action` with the ID or name.
**To check cache status:** Call `check_mobile_cache_status`.

#### Admin Console & Trigger Handler Tools

| Tool | Description |
|------|-------------|
| `list_trigger_handlers` | List trigger handlers and their active/inactive status |
| `toggle_trigger_handler` | Enable or disable a specific trigger handler by DeveloperName |
| `list_admin_settings` | List Admin Console settings by category with field values |
| `update_admin_setting` | Update an existing Admin Console setting or field value |
| `create_admin_setting` | Create a new Admin Console setting with field values |

**To enable/disable a feature (e.g., DCR):** Call `list_trigger_handlers` to find the handler, then `toggle_trigger_handler` to enable/disable it.
**To view/modify Admin Console settings:** Call `list_admin_settings` with a category, then `update_admin_setting` to change values.

**NEVER use `run_soql`, `get_record`, or `describe_sobject` for Admin Console settings (including DbSchema records).** These are Tooling API entities (`LifeSciConfigRecord`, `LifeSciConfigFieldValue`, `LifeSciConfigCategory`) — they do NOT exist in standard SOQL. Always use `list_admin_settings`, `update_admin_setting`, and `create_admin_setting` instead. `list_admin_settings` already returns complete record details including all field values — there is no need to call `get_record` for additional information.

#### DbSchema Tools

| Tool | Description |
|------|-------------|
| `list_db_schema` | List all DB Schema records with SObject, Type, Active, SOQL filter, sync direction |
| `get_db_schema` | Get full details of a DB Schema record (field values + profile assignments) |
| `create_db_schema` | Create a new DB Schema record with correct data types (OBJECT, LONGTEXT, FIELD, etc.) |
| `update_db_schema` | Update a DB Schema record's fields (whereSoql, oneWaySync, attachments, etc.) |
| `toggle_db_schema` | Enable or disable a DB Schema record (IsActive toggle) |

**Use these dedicated tools instead of the generic `list_admin_settings`/`update_admin_setting`/`create_admin_setting` for DbSchema records.** The generic tools work but the dedicated tools handle all 7 data types (TEXT, INTEGER, PICKLIST, BOOLEAN, LONGTEXT, OBJECT, FIELD) correctly and provide a better interface.

**NEVER use `run_soql`, `get_record`, or `describe_sobject` for DbSchema records.** These are Tooling API entities (`LifeSciConfigRecord`, `LifeSciConfigFieldValue`) — they do NOT exist in standard SOQL.

**CORRECT field names:** `SObject`, `Type`, `WhereSoql`, `DeltaDateField`, `OneWaySync`, `AttachmentsSupport`, `MandatoryFields`.
**WRONG field names (DO NOT USE):** `EntityType`, `SOQLFilterCondition`, `DeltaSyncDateField`, `WebToMobileSync`, `AttachmentDownloadMethod`.

#### Navigation Tab Tools

| Tool | Description |
|------|-------------|
| `list_navigation_tabs` | List mobile navigation tabs configured in Admin Console > Mobile > UI Settings |
| `add_navigation_tab` | Add a new navigation tab to AFLS Mobile with label, tab name, order, and profile assignments |

**Navigation tabs are stored as `LifeSciConfigRecord` records (Tooling API) in the "UISchema" category.** Use these dedicated tools rather than `list_admin_settings`/`create_admin_setting` for tab management.

**After adding a tab:** Verify it appears in **Admin Console > Mobile > UI Settings**, then regenerate the mobile metadata cache for the tab to appear in the iPad app.

#### Visit Management Tools

| Tool | Description |
|------|-------------|
| `check_visit_config` | Check Visit Management configuration (record types, settings, compliance, territory info, mobile cache) |
| `add_visit_engagement_sidebar_item` | Add a custom object as a related list on a Visit page layout so it appears in the visit engagement sidebar on mobile. Retrieves the layout XML, inserts the related list, and deploys it back. |

**CORRECT object names:** `Visit`, `ProviderVisit`, `ProviderVisitPrdDetailing`, `ProviderVisitProdDiscussion`, `ProviderAcctTerritoryInfo`, `ComplianceStatementDefinition`.
**WRONG names (DO NOT USE):** `Visit__c`, `ProviderVisit__c`, `VisitSetting__c`, `VisitConfiguration__mdt`, `VisitRecordType__c`, `VisitType__c`.

#### Sample Management Tools

| Tool | Description |
|------|-------------|
| `check_sample_config` | Check Sample Management configuration (products, inventory, locations, batches, limits, mobile cache) |

**CORRECT object names:** `Product2`, `LifeSciMarketableProduct`, `Location`, `ProductionBatch`, `ProductItem`, `ProductBatchItem`, `InventoryOperation`, `ProductRequest`, `InventoryCountAssessment`, `ProductDisbursement`, `ProviderSampleLimit`.
**WRONG names (DO NOT USE):** `SampleTransaction__c`, `SampleInventory__c`, `SampleLimit__c`, `SampleProduct__c`, `SampleLot__c`.

#### Account Management Tools

| Tool | Description |
|------|-------------|
| `check_account_config` | Check Account Management configuration (accounts, providers, addresses, licenses, affiliations, DCR, mobile cache) |

**CORRECT object names:** `Account`, `HealthcareProvider`, `ContactPointAddress`, `BusinessLicense`, `ProviderAffiliation`, `ProviderAcctTerritoryInfo`, `LifeSciDataChgDefMngFld`, `UserAdditionalInfo`.
**WRONG names (DO NOT USE):** `HealthcareProvider__c`, `ContactPointAddress__c`, `BusinessLicense__c`, `ProviderAffiliation__c`, `AccountAddress__c`.

#### Activity Plan Tools

| Tool | Description |
|------|-------------|
| `check_activity_plan_config` | Check Activity Plan configuration (time periods, plans, territories, goals, measures, product goals, mobile cache) |
| `check_briefings_config` | Check Briefings (Daily Podcasts) configuration (toggle, permissions, flows, content definitions, DB Schema, mobile cache) |

**CORRECT object names:** `ActivityPlan`, `ActivityPlanTerritory`, `TimePeriod`, `ProviderActivityGoal`, `ProviderActivityGoalMeasure`, `PrvdActvtyGoalMeasurePrdct`, `ProviderAcctTerritoryInfo`.
**WRONG names (DO NOT USE):** `ActivityPlan__c`, `ProviderActivityGoal__c`, `AccountGoal__c`, `TimePeriod__c`, `GoalMeasure__c`.

#### Territory Alignment Tools

| Tool | Description |
|------|-------------|
| `check_territory_config` | Check Territory Alignment configuration (territory model, territories, explicit assignments, geo rules, affiliation rules, ProviderAcctTerritoryInfo) |

**CORRECT object names:** `Territory2`, `Territory2Model`, `ObjectTerritory2Association`, `TerritoryGeoAssignmentRule`, `TerritoryProviderAffiliationAlignmentRule`, `ProviderAcctTerritoryInfo`.
**WRONG names (DO NOT USE):** `AccountTerritory__c`, `TerritoryAssignment__c`, `TerritoryInfo__c`, `AffiliationAlignmentRule__c`, `ZipTerritory__c`.

#### User Management Tools

| Tool | Description |
|------|-------------|
| `check_user_config` | Check user management configuration (package licenses, PSL capacity, permission set assignments, profiles, roles, territory-user associations) |
| `list_users` | List active users with filters (by profile, permission set, territory, or find users without territories/PSLs) |
| `list_permission_sets` | List AFLS permission sets and PSLs with assignment counts and capacity |
| `assign_permission_set` | Assign a permission set to one or more users by label/API name |
| `unassign_permission_set` | Remove a permission set assignment from one or more users |

**CORRECT object names:** `User`, `Profile`, `UserRole`, `PermissionSet`, `PermissionSetAssignment`, `PermissionSetLicense`, `PermissionSetLicenseAssign`, `UserTerritory2Association`, `PackageLicense`.
**WRONG names (DO NOT USE):** `User__c`, `UserProfile__c`, `PermissionSetAssignment__c`, `PSLAssignment__c`, `LicenseAssignment__c`, `UserTerritory__c`, `RoleHierarchy__c`.

#### Validation & Audit Tools

| Tool | Description |
|------|-------------|
| `audit_mobile_config` | Run automated checks against validation rules to identify misconfigurations |
| `list_validation_groups` | List available validation groups (mobile-login-check, pre-deployment, etc.) |
| `diagnose_afls_issue` | Find validation rules matching a specific error message or symptom |

#### Health Check & Status Tools

| Tool | Description |
|------|-------------|
| `health_check` | Run a comprehensive AFLS org health check (trigger handlers, PSLs, territory model, DB Schema, mobile cache) |
| `get_org_status` | Get a single dashboard view of the connected AFLS org (packages, features, territory model, user count) |
| `export_config` | Export AFLS configuration (Admin Console settings, DB Schema, trigger handlers, actions) as JSON |
| `import_config` | Import AFLS configuration from a JSON export into a target org (preview mode by default) |
| `get_release_notes` | Get AFLS release notes for a specific Salesforce release (Spring '26, Winter '26, etc.) |

#### Developer & Integrator Tools

| Tool | Description |
|------|-------------|
| `run_apex` | Execute anonymous Apex code against the target org (batch jobs, data fixes, testing) |
| `bulk_create_records` | Create multiple records from a JSON array (seed data loading) |
| `bulk_update_records` | Update multiple records from a JSON array (bulk data fixes) |
| `deploy_metadata` | Deploy metadata from a local source directory to the target org |
| `retrieve_metadata` | Retrieve metadata from the target org to a local directory |

### Resources

| Resource | Description |
|----------|-------------|
| `afls://modules` | List of all modules with documentation counts |
| `afls://overview` | Overview of AFLS4CE capabilities and architecture |

### Prompts

| Prompt | Description |
|--------|-------------|
| `afls_implementation_checklist` | Generate implementation checklist for a module |
| `afls_troubleshoot` | Get help troubleshooting an AFLS issue |

## AFLS4CE Modules (with Documentation)

| Module | Coverage | Key Topics |
|--------|----------|------------|
| **Account Management** | ✅ Full | Provider Card, Addresses, Affiliations, Ratings, Search/SBC, Data Change Requests, Business Licenses, Multi-Object Component |
| **Visit Management** | ✅ Full | Page Layout Config, Admin Console, Web & Mobile demos |
| **Sample Management** | ✅ Full | Inventory, Sample Limits Admin Setup |
| **Activity Plan** | ✅ Full | Account Goals, Weighted Plans, Product-based Plans, Shared Territory Goals, Admin Console |
| **Territory Alignment** | ✅ Admin | Admin configuration and setup |
| **User Management** | ✅ Full | Permission sets, PSLs, profiles, role hierarchy, license capacity, user provisioning |
| **Consent Management** | ✅ Demo | Demo talk track |
| **Lists & Filters** | ✅ Full | Transcript available |
| **Field Email** | ✅ Full | iPad, Web Admin, Web End User |
| **Intelligent Content** | ✅ Full | Content Management Admin, Presentation Settings, Dynamic Content, Mobile End User |
| **Home Page** | ✅ Full | Home Page configuration |
| **Calendar/TOT/Routine** | ✅ Full | Calendar, Time Off Territory, Routines, My Team |
| **Surveys** | ✅ Full | Survey configuration |
| **Product Management** | ✅ Full | Product setup and management |
| **App Alerts/Notifications** | ✅ Full | Admin + End User |
| **Next Best (NBC/NBA/NBM)** | ✅ Full | Next Best Customer, Action, Message |
| **Key Account Management** | ✅ Full | KAM Account Plans (Web & Mobile), E2E Demo |
| **Segmentation** | ✅ Admin | Admin-only configuration |
| **Workflow Management** | ✅ Demo | Generic workflow |
| **Agentforce for AFLS** | ✅ Winter'26 | Agentforce enablement |
| **Data Cloud/Singularity** | ✅ Demo | TabNext Metrics, NBC Predictive Model |
| **AFLS Apps** | ✅ Demo | App configuration |
| **Briefings (Daily Podcasts)** | ✅ Full | Setup, troubleshooting, mobile config, DB Schema, validation rules |
| **Mobile Metadata Cache** | ✅ Full | Programmatic generation, DB Schema configuration, DB Schema record management |
| **Starter Config** | ✅ Full | LSStarterConfig — bulk-configure trigger handlers, admin settings, DB Schema in one shot (Spring '26) |
| **Custom Scripts** | ✅ Full | Validation + checklist LWC patterns, IIFE/CodeText conventions, Locker Service gotchas, Visit Action Validation |

### Recent Additions (Jun 2026)

**AFLS4CE Value Chain Training (Engineering → Support, 15 sessions, 18 files)** — Deep support-engineering content spanning Feb 2026 → Jun 2026 across 14 modules. Topics: Sync internals, Search Before Create (internal + OneKey), Medical Inquiry multi-entity setup, KAM Account Plan deep dive, Consent Management proof + filtering, Quick & Custom Actions (Spring '26 + evergreen config guide), Validations via Custom Scripts, LSStarterConfig, Territory Alignment Jobs, Activity Plan, Activity Timeline, Visit Management (configuration + troubleshooting + side menu), Intelligent Content, Generic Workflow. Files use the `support-engineering-*` prefix (evergreen) or `release-260-*` (Spring '26-specific). Two new modules introduced: `starter-config/`, `custom-scripts/`.

### Technical Components
- **Data Model**: Industry objects (PersonAccount, Address, Affiliation, etc.)
- **OmniStudio**: FlexCards, OmniScripts, DataRaptors, Integration Procedures (**web app only — NOT available in AFLS Mobile/iPad**)
- **Business Rules Engine**: Validation, calculations, automation
- **Analytics**: Reports, dashboards, CRM Analytics templates

### CRITICAL: AFLS Mobile Constraints
- **OmniStudio components (FlexCards, OmniScripts, DataRaptors) are NOT available anywhere in the AFLS Mobile app (iPad).** NEVER suggest OmniStudio as a solution for mobile customization. OmniStudio is only available on the web app.

## Project Structure

```
AFLS-for-Claude/
├── .claude-plugin/           # Plugin manifest
│   └── plugin.json           # Plugin metadata (name, version, etc.)
├── skills/                   # Agent Skills (auto-invoked by Claude)
│   ├── afls-implementation/
│   │   └── SKILL.md
│   ├── afls-troubleshoot/
│   │   └── SKILL.md
│   ├── afls-mobile-validation/
│   │   └── SKILL.md          # Mobile/iPad app configuration validation
│   ├── salesforce-query/
│   │   └── SKILL.md
│   └── afls-data-model/
│       └── SKILL.md
├── commands/                 # User-invocable slash commands
│   ├── setup-plugin.md       # /afls:setup-plugin
│   ├── soql-query.md         # /afls:soql-query
│   ├── describe.md           # /afls:describe
│   ├── help.md               # /afls:help
│   ├── docs.md               # /afls:docs
│   ├── validate-mobile.md    # /afls:validate-mobile
│   ├── generate-metadata-cache.md  # /afls:generate-metadata-cache
│   ├── audit.md              # /afls:audit
│   └── open-org.md           # /afls:open-org
├── agents/                   # Specialized subagents
│   ├── afls-consultant.md     # Implementation consultant
│   ├── afls-admin.md          # Administrator
│   └── afls-developer.md      # Developer
├── .mcp.json                 # MCP server configuration
├── CLAUDE.md                 # This file
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── src/                      # MCP server source
│   ├── index.ts              # MCP server entry point
│   ├── knowledge-loader.ts   # Knowledge base loader and search
│   ├── salesforce/           # Salesforce org integration
│   │   ├── index.ts          # Module exports
│   │   ├── cli.ts            # SF CLI wrapper
│   │   └── auth.ts           # Org detection, selection
│   └── validation/           # Configuration validation system
│       ├── index.ts          # Module exports
│       ├── rules-loader.ts   # YAML rule file parser
│       └── rules-executor.ts # Rule execution engine
├── scripts/
│   ├── process-docs.sh       # Convert .docx to markdown (calls process-pdfs.sh)
│   └── process-pdfs.sh       # Convert PDFs to markdown
├── documentation/            # Source documentation
│   ├── pm enablement materials/  # PM enablement (.docx files)
│   ├── official help documentation/  # Salesforce help PDFs (15 files)
│   ├── hands-on exercises/   # Training exercises (2 PDFs)
│   ├── life_sciences_dev_guide.pdf  # Developer guide (27MB)
│   ├── SE AFLS Mobile Setup and Configuration Guide.pdf  # Mobile setup (7.6MB)
│   └── common_issues.md      # Troubleshooting guide
├── knowledge/                # Processed knowledge base (markdown)
│   ├── modules/              # PM enablement content (28 module directories)
│   ├── help/                 # Official Salesforce help docs (15 files)
│   ├── guides/               # Dev guide, mobile setup guide (2 files)
│   ├── exercises/            # Hands-on training (2 files)
│   ├── troubleshooting/      # Common issues (1 file)
│   └── validation-rules/     # Configuration validation rules
│       ├── _schema.yaml      # Rule format documentation
│       └── mobile-config.yaml # Mobile configuration rules (15 rules)
└── dist/                     # Compiled JavaScript
```

## Installation & Usage

### Prerequisites
- Node.js 18+
- Claude Code 1.0.33 or later
- Salesforce CLI (auto-installed if missing)

### Build the Plugin
```bash
npm install
npm run build
```

### Load as a Plugin

**Option 1: Development mode (recommended for testing)**
```bash
claude --plugin-dir /path/to/AFLS-for-Claude
```

**Option 2: Add to a marketplace for distribution**
See [Claude Code Plugin Marketplaces](https://code.claude.com/docs/en/plugin-marketplaces)

### Available Commands

Once loaded, you can use:
- `/afls:setup-plugin` - Check setup and connect to Salesforce
- `/afls:soql-query <soql>` - Run a SOQL query
- `/afls:describe <object>` - Describe a Salesforce object
- `/afls:help <topic>` - Search AFLS documentation by topic
- `/afls:docs` - Browse AFLS documentation by category

### Available Agents

Invoke specialized agents with `/agents`:
- `afls:afls-consultant` - Implementation consulting
- `afls:afls-admin` - Administration tasks
- `afls:afls-developer` - Development tasks

### Salesforce Org Setup

When you first use the plugin:

1. **Check setup status**: Run `/afls:setup-plugin`
2. **Install SF CLI** (if needed): The plugin offers to install it
3. **Authenticate to your org**: `sf org login web --alias my-afls-org`
4. **Select target org**: Use `set_target_org` if you have multiple orgs

```
┌─────────────────────────────────────────────────────────────┐
│                    Plugin Setup Flow                         │
├─────────────────────────────────────────────────────────────┤
│  1. Check if SF CLI exists                                  │
│     ├─ Yes → Check for authenticated orgs                   │
│     └─ No  → Offer to install via npm                       │
│                                                              │
│  2. Check for authenticated orgs                            │
│     ├─ Found → Auto-select or let user choose               │
│     └─ None  → Guide through sf org login web               │
│                                                              │
│  3. Ready to use!                                           │
│     • Use /afls:* commands                                   │
│     • Query AFLS data                                        │
│     • Get implementation guidance                           │
└─────────────────────────────────────────────────────────────┘
```

### Development
```bash
npm run dev      # Run with hot reload
npm run test     # Run tests
npm run lint     # Lint code
```

## Development Guidelines

### Code Style
- TypeScript with strict mode
- ESLint + Prettier for formatting
- Conventional commits for version control

### Adding New Content
1. **New object docs**: Add to `knowledge/objects/{ObjectName}.md`
2. **New patterns**: Add to `knowledge/patterns/{pattern-name}.md`
3. **New tools**: Implement in `src/tools/` and register in `src/index.ts`

### Testing
- Unit tests for all tools
- Validate documentation accuracy against Salesforce docs
- Test with real AFLS sandbox when possible

## Resources

- [Salesforce AFLS Documentation](https://help.salesforce.com/s/articleView?id=sf.health_life_sciences.htm)
- [Official Salesforce CLI MCP](https://github.com/salesforcecli/mcp)
- [MCP Specification](https://modelcontextprotocol.io/)
- [OmniStudio Documentation](https://help.salesforce.com/s/articleView?id=sf.omnistudio.htm)

---
name: afls-data-model
description: Expert knowledge of the AFLS data model concepts. Use when user asks about AFLS objects, relationships, or needs help understanding the data architecture. Always verify actual API names with describe_sobject.
---

# AFLS Data Model Expert

You are an expert on AFLS data model concepts and architecture.

## Important Note

AFLS is built on Salesforce Health Cloud and Industry Cloud foundations. Object API names vary by:
- AFLS package version
- Customer customizations
- Implementation choices

**Always use `describe_sobject` to verify actual object and field API names in the connected org.**

## Core Data Model Concepts

### Account Hierarchy
- **Accounts** - HCPs (Healthcare Professionals) and HCOs (Healthcare Organizations)
  - Often uses PersonAccount for individuals
- **HealthcareProvider** - **1:1 with Account (PersonAccount).** Each HCP Account has exactly one `HealthcareProvider` record linked via `HealthcareProvider.AccountId`. Do NOT describe this as 1:many.
- **Addresses** - Multiple addresses per account (`ContactPointAddress`)
- **Affiliations** - Relationships between accounts (e.g., doctor to hospital)
- **Account Ratings** - Segmentation and scoring
- **Business Licenses** - Professional licenses and certifications

### Territory Structure
- Uses Salesforce Enterprise Territory Management
- **Territory2** - Territory definitions
- **Territory2Model** - Territory hierarchy model
- Account-to-territory assignments
- User-to-territory assignments

### Visit/Call Model
- **Visit records** - HCP/HCO interactions
- **Product discussions** - Products detailed during visits
- **Samples dropped** - Sample distribution records
- **Attendees** - Additional visit participants

### Sample Management
- **Sample Limits** - Distribution limits per product/template
- **Provider Sample Limits** - Limits applied to specific accounts
- **Sample transactions** - Movement/distribution records
- **Sample inventory** - Rep inventory levels

### Content & Engagement
- **Consent records** - Consent capture and tracking
- **Content/Presentations** - CLM content
- **Activity Plans** - Planning and goals

## Key Relationships

### Account to HealthcareProvider (1:1)
- Each `Account` (PersonAccount / HCP) has exactly **one** `HealthcareProvider` record
- `HealthcareProvider.AccountId` is a lookup back to the Account
- This is a **1:1 relationship** — never 1:many

### Account to Territory
- Accounts assigned to territories
- Users see accounts based on territory membership
- Territory hierarchy controls rollup reporting

### Visit to Account
- Visits link to Account
- Products discussed via junction object
- Samples recorded via junction object

## OmniStudio Components (Web Only)

AFLS uses OmniStudio on the **web app only**. OmniStudio components (FlexCards, OmniScripts, DataRaptors, Integration Procedures) are **NOT available in the AFLS Mobile app (iPad)**.

- **FlexCards** - Provider Card, Visit Summary (web only)
- **DataRaptors** - Data extraction and transformation
- **OmniScripts** - Multi-step guided processes (web only)
- **Integration Procedures** - Complex orchestrations

## Using Tools to Explore

1. `describe_sobject` - Get actual field names for any object
2. `run_soql` - Query relationships and data
3. `search_afls_knowledge` - Find documentation on specific features
4. `get_afls_module_docs` - Get module-specific guidance

## Objects That Require Tooling API or Metadata API (NOT SOQL)

**NEVER use `run_soql` for these — it will fail:**

| Feature | Correct approach |
|---------|-----------------|
| **Compact Layouts** | Tooling API (`sf data query --use-tooling-api`) or `retrieve_metadata` |
| Admin Console settings (`LifeSciConfigRecord`) | `list_admin_settings`, `update_admin_setting` |
| DB Schema records (`LifeSciConfigFieldValue`) | `list_db_schema`, `update_db_schema` |
| Quick Actions / Custom Actions | `list_afls_actions`, `create_quick_action`, etc. |
| Page Layouts | `retrieve_metadata` / `deploy_metadata` |

## Best Practice

When helping with data model questions:
1. Explain the conceptual model from documentation
2. Use `describe_sobject` to find actual API names
3. Help construct queries with verified field names


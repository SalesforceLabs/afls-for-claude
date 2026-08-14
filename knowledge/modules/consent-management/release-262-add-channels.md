# Consent Management - Add Channels (Summer '26)

Target Release: 262

## Introduction

During evaluation of OCE Personal OPT data models in 254, it was discovered that most Salesforce Consent and Privacy data models could support AFLS consent data. The focus on 258 was to replatform current OCE Opt/Consent screens to Salesforce's consent and privacy data model. This feature addresses key spillover functionality that couldn't be completed in 258.

These features are crucial for a seamless user experience — allowing sales reps to capture communication channels from within the Consent capture module without navigating to other tabs.

## Epic Goal

Address the key gap of capturing communication channels so that a sales rep can get up-to-date contact information of HCPs during consent capture.

## Personas

| Persona | Jobs To Be Done |
|---------|----------------|
| **Sales Rep** | Form connections with HCPs, determine best way to contact HCP, select appropriate channel of communication, send follow-up materials (digital communication requiring consent) |
| **Administrator** | Manage consent subscriptions and configurations based on customer requirements (varies by region/country) |

## Key User Stories

### 1. Add New Communication Channels (Web & Mobile)

**As a sales rep**, I want to capture new communication channels and channel values for aligned subscriptions so that ongoing digital communications can leverage up-to-date HCP contact information.

**Acceptance Criteria:**
- "Consent" section from Account has a "Manage Channels" button
- Rep can view current communication channels and "Add New"
- Upon clicking "Add New", rep can select a Contact Point (Email, Phone, Social) and provide a channel value
- Saving creates new Contact Point entities
- Note: Won't work if custom configuration/layout/fields on Contact Point entities (documented limitation)

**Entry Points:**
- Visit execution screens (easy navigation to update channel preferences)
- Account Details (consent tab with same navigation)

### 2. Filter Subscriptions by HCP Specialty

**As an Admin**, I want to filter subscriptions based on HCP specialty so only relevant subscriptions are surfaced during consent capture.

**Configuration:**
- Admin Console > AFLS Commercial > Consent Management
- Account Filter and ATP filter settings
- Subscription Filtering Fields: map to Healthcare Provider Specialty
- Only matching subscriptions surfaced in HCP consent capture screen

### 3. Consent Sharing Job

Share consent records with re-aligned territory when account-territory alignment happens.

**Configuration:**
- Admin Console > Consent Administration > "Consent Sharing" job
- Run when account-territory alignment happens

**Records shared:**
- Communication Subscription
- Communication Subscription Consents
- Communication Subscription Compliance Snapshot
- Digital Signature
- Communication Subscription Channel Type
- Engagement Channel Type

## Dependencies

- Need to design for adding Contact Point entities while new channel values are added during consent capture

## References

- 254 OCE-P Migration - Opts/Consent Management Product Brief
- 256 Consent Management Steel Thread re-platforming effort
- Consent Management re-platforming epic narrative
- AFLS Consent Reimagination Scenarios

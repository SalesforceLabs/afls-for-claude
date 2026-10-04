# Alignment Rules Processing Engine (SPM Integration) - Winter '27 (264)

Status: Pilot in Winter '27. The deck is high level; API names, permission sets, and setting paths are not given in it.

## What's New

Agentforce for Life Sciences combines Salesforce Sales Performance Management (SPM) with automated execution into LSC, reducing manual re-alignment.

- Richer data, better segments: combines Account, Healthcare Provider, Address, Specialty, and related data into a single view for account segmentation.
- Rules defined where planners work: segmentation and territory carving rules are configured in SPM's visual planning environment.
- Automated execution: assignments are calculated and published automatically on a schedule, keeping LSC current without spreadsheet handoffs.

Use case: a sales ops team defines ZIP + specialty, brick + specialty, and user assignment rules in SPM. LSC runs the calculation on a schedule and updates account-to-territory assignments.

## Integration Architecture

Data flow: planning in SPM, then rules calculation and publishing into LSC.

| Layer | Component | Role |
|-------|-----------|------|
| Planning | Sales Performance Management (SPM) | Planning suite; Sales Planning is the central workspace. Decides which accounts are in the plan, slices accounts into target segments, holds the master Sales Plan for Territory Planning. |
| Geography | Salesforce Maps | Geography layer. Maps boundaries (ZIP, postal, brick, country) and renders territories as map shapes. Answers WHERE accounts are. |
| Execution | Territory Planning | Core SPM capability built on Salesforce Maps. Carve territory boundaries on the map, attach business rules (specialty, status, exclusions), assign sales reps and field personnel. Answers WHAT it is and WHO owns it. |
| Consumption | Life Sciences Cloud (LSC) | Consumes SPM/territory assignments: automated account-to-territory sync (OT2A / PATI), drives field rep call lists, activity plans, and mobile scope. Answers HOW field teams operate. |

OT2A = ObjectTerritory2Association; PATI = ProviderAcctTerritoryInfo (see [Territory Alignment](../territory-alignment/_index.md)). The deck abbreviates these as "OT2A / PATI" without expanding them; the expansions are from the existing territory-alignment module.

## Admin Setup & Configuration

### Step 1 - Prepare LSC data and territories
- Verify SPM and LSC packages, CRMA (CRM Analytics)/DPE (Data Processing Engine) assets, and Maps/geography dependencies.
- SPM and ETM (Enterprise Territory Management) territories must have the same names.
- A flattened CRMA dataset (Account, HCP, ZIP, brick, specialty) is created by DPE.

### Step 2 - Configure rules and publish
- Define geographical areas.
- Configure ZIP + specialty and brick + specialty rules in SPM and complete territory carving.
- Schedule the LSC workflow so alignments stay current as account data changes.
- Publish to OT2A, generate PATI records, etc. in LSC. In SPM Territory Planning, the Publish button is in the top bar.

## Scheduled Flow (as shown in the deck screenshot)

A Flow Builder flow named "Refresh and Execute Territory Planning Rules" (V1, scheduled, daily) runs:
1. Create CRMA Dataset for Territory Planning.
2. Wait for CRM Analytics Dataset Job to Complete (on status change, check the Territory Planning dataset job status).
3. If Completed: Execute Territory Planning Rules.
4. If Failed, or the dataset-creation step faults: Send Error Email.
5. Other statuses: flow ends.

Action/element labels above are from the screenshot; underlying action API names are not visible.

## End-User Flow

Field lists, account access, and mobile sync scope reflect the updated OT2A / PATI records after each publish. Account-to-territory assignments stay current as ZIP, brick, and specialty data change.

## Limitations / Gotchas

- Pilot feature in Winter '27.
- SPM and ETM territories must have the same names (stated requirement).
- Depends on SPM, LSC, Maps, and CRMA/DPE being in place.
- Supported rule types named in the deck: ZIP + specialty, brick + specialty, user assignment.

## Not covered in the deck

Permission sets, licensing, object/field API names, package names, and demo content (a linked demo video exists but is not transcribed).

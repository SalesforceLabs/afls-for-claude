# KAM Account Plan — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Jun 2026
**Audience:** Support engineers
**Source:** Engineering training series (KAM Account Plan deck)

## Overview

Key Account Management (KAM) Account Plan is the AFLS capability for planning multi-stakeholder, multi-objective, time-boxed engagement strategies on a key account. The hierarchy is deep: **Account Plan → Objective → Product / Stakeholder / Participant → Stakeholder Action / Stakeholder Product**, with sprints, roll-ups, action plan templates, and import flows on top. Configuration spans KAM Settings, Sprint Settings, OOTB layouts, trigger handlers, and Action Plan Template Assignment.

> **The cardinal rule:** Account Plan status values, Objective status values, and Action Plan status values are all configured under **KAM Settings**. If a customer reports "I can't move my objective to Closed," start there.

## Setup

### KAM Settings
**Path:** Admin Console → KAM Settings tile

| Setting | Purpose |
|---|---|
| Account Plan Status Values | Picklist values for `AccountPlan.Status` |
| Objective Status Values | Picklist values for `AccountPlanObjective.Status` |
| Action Plan Status Values | Picklist values used by KAM-typed Action Plans |
| Sprint Settings | Duration, default cadence, auto-rollover behavior |

### Layouts
- OOTB **Life Science Account Plan** layout — assign to user profile
- Optionally enable Dynamic Forms if customer needs conditional sections

### Trigger Handlers
**Path:** Admin Console → Trigger Handler Administration → KAM-namespaced handlers

Required for the entity hierarchy to roll up correctly:
- Account Plan → Objective propagation
- Objective → Stakeholder Action roll-up
- Sprint assignment cascades

## Hierarchical Entities (the data model)

```
Account Plan
  ├── Account Plan Objective
  │     ├── Account Plan Product
  │     ├── Account Plan Stakeholder (StakeholderRefnRecord polymorphic → Account OR Contact)
  │     │     ├── Stakeholder Action
  │     │     ├── Stakeholder Product
  │     │     └── Participant Stakeholder (junction to Participant)
  │     └── Account Plan Participant
  └── Related Object Analysis
```

| Entity | Notes |
|---|---|
| **AccountPlan** | Top-level record on the key account |
| **AccountPlanObjective** | Goal under the plan; status drives roll-up |
| **AccountPlanProduct** | Product scoped to an objective. Limitation: a product can attach to ONE objective, not multiple |
| **AccountPlanStakeholder** | `StakeholderRefnRecord` is polymorphic — points to Account (for HCO) or Contact (for HCP) |
| **AccountPlanParticipant** | Internal team members assigned to objective |
| **AccountPlanStakeholderAction** | Action on a stakeholder (call, email, visit) — uses Action Plan Template |
| **AccountPlanStakeholderProduct** | Product association for a stakeholder under an objective |
| **AccountPlanParticipantStakeholder** | Junction between Participant + Stakeholder |
| **AccountPlanRelatedObjectAnalysis** | Cross-entity analysis records |

## Setup — Action Plan Template Assignment

For Stakeholder Actions to use templates:

1. Setup → Action Plan Templates → create template with `Target Object = AccountPlanStakeholderAction`
2. **KAM Settings → Action Plan Template Assignment** → bind template to the action context
3. Stakeholder Action records created under an objective will inherit the template's task list

## Walkthrough — Import Stakeholder (6-step)

The "Import Stakeholder" UX lets the AE bulk-add HCPs/HCOs to an objective without one-by-one creation.

1. From the Account Plan, navigate to an Objective
2. Click **Import Stakeholder**
3. Select stakeholder type (Contact / Account)
4. Select records via search or list
5. (Optional) Map to a Participant
6. Confirm — system creates `AccountPlanStakeholder` records linked to the objective

### Stakeholder Details component
Displayed under each stakeholder.
- Uses the field set **`StakeholderAccountSummaryColumns`** on the HCP entity
- Customers customize this field set to control what HCP attributes are surfaced

### Hierarchical component
Renders the full Plan → Objective → Stakeholder/Product tree on one screen. Used in account-plan deep-dive UX.

## Walkthrough — Import Objective

To bulk-import objectives from a Goal Definition library:

### Prerequisites
| Setting | Value |
|---|---|
| Goal Definition | `IsActive = true` |
| Action Plan Template | `TemplateType = KAM` |
| Action Plan Template Target | `AccountPlanObjective` |

### Flow
1. From the Account Plan, click Import Objective
2. Select one or more Goal Definitions
3. System creates `AccountPlanObjective` records inheriting goal definition attributes + linked template
4. Stakeholder Actions auto-spawn per template if defined

## Walkthrough — Sprint Assign/Unassign

Sprints group objectives by time window.

| Action | Effect |
|---|---|
| Assign Sprint → Objective | Sets `SprintId` on Objective; objective rolls into sprint dashboard |
| Unassign Sprint → Objective | Clears `SprintId`; removes from sprint roll-up |

> **Status interaction:** Sprint assignment doesn't change Objective status — admins often want to also auto-move to "In Progress" via Flow on `SprintId` change.

## Walkthrough — Participant/Stakeholder Assignment

The **Assign / Unassign Participant to Stakeholder** UX:
- Uses the **`AccountPlanparticipantsAndStakeholder`** LWC
- Triggered via a quick action override on the stakeholder
- Creates `AccountPlanParticipantStakeholder` junction records

## Roll-up on Account Plan

| Source | Roll-up to | Behavior |
|---|---|---|
| Stakeholder Action status | Account Plan Objective | Aggregate completion % |
| Account Plan Objective status | Account Plan | Status indicator on plan |

Configured in trigger handlers — if roll-up isn't firing, that's the first place to check.

## Troubleshooting

### "Can't move objective to Closed"
1. Verify Closed exists in KAM Settings → Objective Status Values
2. Verify any validation rule on AccountPlanObjective doesn't block the transition
3. Check Stakeholder Action roll-up — some configs gate Close on actions being complete

### "Stakeholder Action doesn't get a task list"
1. Verify Action Plan Template exists with `TemplateType = KAM` and `Target = AccountPlanStakeholderAction`
2. Verify Action Plan Template Assignment in KAM Settings binds the template
3. Re-create the action — assignment may not retroactively apply

### "Hierarchical component shows no data"
1. Verify trigger handlers for the relevant entities are active
2. Verify FLS on the user's profile for all entities in the hierarchy
3. Check page layout — hierarchical component must be on the layout assigned to user's profile

### "Stakeholder Details shows blank fields"
**Cause:** `StakeholderAccountSummaryColumns` field set on HCP entity is empty or missing fields.
**Fix:** Setup → Object Manager → HealthcareProvider → Field Sets → `StakeholderAccountSummaryColumns` → add fields.

### "Import Objective shows no Goal Definitions"
1. Verify Goal Definition `IsActive = true`
2. Verify the user has FLS / sharing on the Goal Definition entity
3. Verify there's an Action Plan Template tied to a Goal Definition with `TemplateType = KAM`

### "Sprint assignment doesn't change objective status"
**Expected.** Sprint assignment is decoupled from status. Build a Flow on `SprintId` change if customer wants auto-transition.

### "Participant-stakeholder assignment fails silently"
1. Verify the `AccountPlanparticipantsAndStakeholder` LWC is bound to the quick action
2. Verify FLS on `AccountPlanParticipantStakeholder` for the user
3. Check console — likely a permission error swallowed by the modal

### "Product attached to wrong objective"
**Cause:** Trying to attach a product to multiple objectives.
**Limitation:** A product belongs to ONE objective. Create separate product records per objective.

### "Roll-up not updating"
1. Verify KAM trigger handlers are active
2. Check Apex jobs queue — roll-ups may be queued, not synchronous
3. If batch lag, re-trigger by touching the source record

## Reference

- **Source deck:** KAM Account Plan — Drive slide ID `1YS3mXnw9rJ9_6jG9q0JantrB2wzZ-HFv04oD-tPAHDU` (53 slides)
- **Companion files:**
  - `kam-account-plan-web-mobile-transcription.md`
  - `kam-end-to-end-demo-talk-track.md`
- **Related — Action Plans:** see `activity-plan/support-engineering-activity-plan.md` for Action Plan Template internals reused here

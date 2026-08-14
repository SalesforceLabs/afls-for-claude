# Activity Plan — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Apr 30, 2026
**Audience:** Support engineers
**Source:** Engineering training series (deck + Gemini transcript)
**Presenter:** Surya M D V

## Overview

Activity Plans turn provider interaction strategy into actionable tasks with defined goals and targets for field reps. A plan's lifecycle moves from **admin setup → review (rep + manager) → execution**, with non-product and product goal counts tracked at the Account, Goal Measure, and Goal Measure Products layers. Most support escalations stem from misconfiguration of measure types (Product vs Non-Product), missing trigger handlers, or jobs that haven't yet run to refresh actuals.

**Plan types:**
- **Account Goal** — single territory
- **Weighted Territory Goals** — single territory
- **Account Goal Shared** — up to 10 territories

All three types support both Non-Product and Product measure types.

## Configurations

All configuration lives under **Admin Console → Activity Plans**.

### 1. Provider Activity Measure Type (the foundation)

**Path:** Admin Console → Activity Plans → Activity Plan Administration

Two separate configs needed: one for Non-Product, one for Product.

| Aspect | Non-Product (recommended) | Product (recommended) |
|---|---|---|
| Entity | `Visit` | `ProviderVisitProductDetailing` |
| Activated product field | Leave blank | Required |
| Activity parent object | — | Required |
| Activity parent object relationship field | — | Required |
| Level 1 Related Account Object | Configure | **Not required** |

> **Common bug (W-21705649):** Customers configure Level 1 Related Account Object on Product measure type — it's not needed for Product. Remove it.

### 2. Activity Plan Settings

**Path:** Admin Console → Activity Plans → Activity Plan Settings

- **Rating Settings** — picks the object + field that drives the Rating column on the Review screen. **Must be configured** before users open the Review screen, otherwise the LWC errors out.
- **Table View Settings** — toggles `List of Activity Plan` and `Weighted Activity Plan` filters on the Accounts tab.

### 3. Activity Plan Configuration

**Path:** Admin Console → Activity Plans → Activity Plan Configuration

- **Batch Size Settings** — tunes batch size for Product-related tailing jobs.
- **General Settings:**
  - `Enable working days calculations` — required for Home/Account widget prorating
  - `Use product-based calculations` — shows Product filter in Activity Type
  - `Use non-product-based calculations` — shows Non-Product filter in Activity Type

### 4. Working Days / Batch Job Settings

**Path:** Admin Console → Time Off Territory → Working Days Settings For Activity Plans

- `Hours For Workday` — used by Calculate Working Days job
- `Working Day` — semicolon-separated list of days considered working
- `Activity Plan Cycles Per Batch` — **currently unused; will be removed or hidden in a future release**

### 5. Trigger Configuration (mandatory)

7 triggers across 4 entities must be enabled before any data setup:

- **Activity Plan** — 2 triggers
- **Activity Plan Territory** — 2 triggers
- **Provider Activity Goal** — 1 trigger
- **Provider Activity Plan Adjustment** — 1 trigger

> Without these, the system won't enforce the type-vs-territory rules, won't block dup Account creation under Goals, and won't prevent edits to Active plans.

## Prerequisites

Before creating any Activity Plan, set up:

1. **Provider Activity Measure Type** records (one Non-Product + one Product, as configured above)
2. **Time Period** records covering the plan window

## Object Hierarchy & Setup Order

```
Activity Plan (top-level: Name, Type, Time Period, Due Dates, Thresholds)
  └── Activity Plan Territory  (junction: AP ↔ Territory)
  └── Provider Activity Goal  (junction: AP ↔ Account; holds NP/P/Overall counts)
        └── Provider Activity Goal Measure  (junction: Goal ↔ Measure Type)
              └── Provider Activity Goal Measure Products  (max 10 products + weightages)
```

### Activity Plan
- **Must be created in `In Progress` status only** when triggers are enabled. Can't be created Active/Approved/Submitted/EmployeeReview/ManagerReview directly.
- Type determines territory cardinality (see Overview).

### Activity Plan Territory
- Created records can't be edited/deleted while parent AP is Active or status ≠ In Progress.
- Created records auto-share the AP with the territory's user group.
- Configured territories show on the AP record as a semicolon-separated list.

### Provider Activity Goal
- Dup-Account check is trigger-enforced — duplicates throw.

### Provider Activity Goal Measure
- **No separate field for Product vs Non-Product.** The linkage to Measure Type determines it.
- **Critical bug (W-22101803):** Customers use Non-Product measure type when configuring Products. Always match measure type to the product/non-product context.

### Provider Activity Goal Measure Products
- Supports both `LS Marketable Product` and `Product`.
- Max **10 products** per goal measure.
- Stored as semicolon-separated Product IDs on the parent record.

## The Jobs (and their sequencing)

Jobs run under **Admin Console → Activity Plans → Jobs** (or on schedule).

### Validate Activity Plans
Activates/deactivates APs based on Start Date and End Date vs today.

### Update Activity Plan Status
Transitions status: `EmployeeReview → ManagerReview → Submitted` based on respective due dates.
Side effects: **deletes** ProviderActivityGoalMeasure where `OverallGoal IN (null, 0)` AND `IsSuggestedActivity = false`; **deletes** ProviderActivityGoal records with no remaining ProviderActivityGoalMeasure.

### Calculate Provider Activity Goal Measures (Non-Product, AccountGoal + WeightedTerritoryGoals)
Updates counts on Goal Measure records using actual data. **Tailing chain:**

```
Calculate Provider Activity Goal Measures (Non-Product)
  └── ProductsActivityPlanCalculationBatch (Product)
        └── ResetActivityPlansBatch
              └── AccountGoalsCalculationBatch
```

`ResetActivityPlansBatch` clears fields configured under **Provider Account Territory Information** on Provider Activity Measure Type, and resets Actual/Scheduled counts for Goal Measure records not part of the current run.
`AccountGoalsCalculationBatch` rolls up to ProviderActivityGoal level and to Provider Account Territory Information.

### Calculate Provider Activity Goal Measures for Shared Activity Plans (AccountGoalShared)
Same shape, parallel chain:

```
Calculate ... for Shared Activity Plans (Non-Product)
  └── ProductsActivityPlanSharedCalcBatch (Product)
        └── ResetActivityPlansBatch
              └── AccountGoalsCalculationBatch
```

### Reset Provider Account Territory Information
Clears fields on Provider Account Territory Info as configured in Provider Activity Measure Type.

### Calculate Working Days
- Requires `Hours For Workday` setting.
- Runs on **Active APs of types `AccountGoal` and `WeightedTerritoryGoals` only** — excludes Shared.
- Reads Business Hours, Holidays, Time Off Territory.

## Walkthrough — Review, Adjustments, Widgets

### Activity Plan Review (the rep/manager screen)
- Component: `PlanCycle` LWC. **Not OOTB on a tab** — admin must add it.
- Role detection: user assigned to **child territory** → Rep. User assigned to **parent territory** → Manager.
- Prerequisites:
  1. Rating Field configured (else hard error)
  2. AP must be **inactive** with future dates
  3. Status must be `Employee Review` (Rep) or `Manager Review` (Manager) — see W-22153237
  4. Review Thresholds configured on the AP record to define allowable modification %

### Activity Plan Adjustments
Used when the AP is **already Active and running** — modifications still possible within Adjustment threshold %.

- Trigger on Activity Plan Adjustment must be enabled.
- **Not set up via standard Salesforce setup.** Configure as a **Quick Action** under Admin Console → Quick and Custom Action Administration → Quick Actions (scoped to Account).
- Surface via Quick Action on Account list view.

### Home Page Widget
- Component: `Activity Plan By Product` LWC, dropped on Home page.
- Shows data across **all Accounts** for the selected territory.
- Two target values displayed: **Overall target** + **prorated target** based on current date vs working days.
- Counts refresh only after the calculation jobs have run.

### Account Page Widget
- Same `Activity Plan By Product` LWC, dropped on Account page.
- Shows data for **one specific Account** in the selected territory.
- If the territory has only one Account, Home and Account widget values match.

## Troubleshooting

### "Counts didn't update after I created a Measure Type"
**Cause:** Calculation jobs haven't run yet.
**Fix:** Run job manually or wait for scheduled run. Counts only update after the job completes (W-21840532).

### "Multiple Activity Plans active for the same territory"
**Cause:** Triggers not enabled, so the type-vs-cardinality rule isn't being enforced.
**Fix:** Enable all 7 triggers. Reference W-21936842 — when this happens, Home/Account widget overall values get prorated incorrectly.

### "Goal Measures not calculating correctly for Products"
**Cause:** Customer configured Product Goal Measures using **Non-Product** Measure Type (or vice versa). W-22101803.
**Fix:**
- Non-Product config → use Non-Product Provider Activity Measure Type
- Product config → use Product Provider Activity Measure Type
- For sharing across territories, use Type = `Account Goal Shared` (not Account Goal or Weighted Territory)

### "Review screen errors out / nothing renders"
**Cause:** Rating Field not configured, OR AP is Active, OR status isn't EmployeeReview/ManagerReview. W-22153237.
**Fix:**
1. Verify Rating Setting under Activity Plan Settings
2. Verify AP is inactive
3. Verify status is Employee Review (Rep view) or Manager Review (Manager view)
4. Verify Review Thresholds are non-zero

### "Adjustment screen not appearing on Account"
**Cause:** Quick Action not configured or Activity Plan Adjustment trigger disabled.
**Fix:** Configure under Admin Console → Quick and Custom Action Administration → Quick Actions. Verify trigger handler active.

### "Calculation job throws error — has to manually deactivate a metadata record"
**Cause (raised by Himali Fadia during session):** The `Calculate Provider Activity Goal Measure` job sometimes errors unless a specific Life Science Metadata record (`activity plan job or level`) is manually deactivated; the job re-activates it on completion.
**Status:** Under investigation. If a customer hits this, capture the metadata record details + job error + screenshots and route to the Activity Plan engineering team.

### "Working Days job didn't update Active Shared APs"
**Cause:** Expected — Calculate Working Days excludes `AccountGoalShared` by design.
**Fix:** No fix needed. For shared plans, working-day calculations come through other routes.

## Reference

- **Activity Plan help doc (external):** https://help.salesforce.com/s/articleView?id=ind.lsc_activity_plans_intro.htm&language=en_US&type=5
- **Activity Plan Setup Doc (internal):** https://docs.google.com/document/d/1Ik-bkvKJQGLBIav9FfvO8wl7LTspA3voXTQiHhh0t7c/edit
- **Source deck:** Activity Plan, Spring '26 (April 2026) — slide ID `1VKGQ-OFEVzUBjhlYoTZzlNxppeyWkAB2bhdKt_Fm9W4`
- **Companion files in this module:** activity-plan setup talk tracks and other release-specific docs in `activity-plan/`

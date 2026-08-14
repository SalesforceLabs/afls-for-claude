# Account-Territory Alignment Jobs — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Apr 17, 2026
**Audience:** Support engineers
**Source:** Engineering training series (deck + Gemini transcript)
**Presenter:** Shaker (Hyderabad team)

## Overview

AFLS uses **Salesforce Enterprise Territory Management** for sharing HCP/HCO records to field reps. Account-to-Territory alignment is achieved through **three direct UI jobs + one internal dependent job**. They keep two objects in sync — `ObjectTerritory2Association` (drives sharing) and `ProviderAcctTerritoryInfo` (captures engagement data) — using **direct mappings, geographic codes, or affiliations** as the source of truth.

**The four jobs:**

| Job | Source of alignment | UI? |
|---|---|---|
| **Align Account to Territory** | Manual `ObjectTerritory2Association` records (typically loaded via data import) | ✅ |
| **Align Zip to Territory** | Postal code from `ContactPointAddress` + `TerrGeoAssignmentRule` (type `ZipTerritory`) | ✅ |
| **Align Brick to Territory** | Brick name from `ContactPointAddress` + `TerrGeoAssignmentRule` (type `BrickTerritory`) | ✅ |
| **Align Affiliations to Territory** | Active `ProviderAffiliation` + `TerrProvAffilAssignRule` criteria | ❌ — runs internally after each of the above |

**Access:** Admin Console → Territories → Territory Management Jobs.

## Why Two Objects Must Stay in Sync

| Object | Role |
|---|---|
| **`ObjectTerritory2Association` (OT2A)** | Salesforce standard. Creation **automatically drives sharing** of the Account to the territory's user group. Drives access. |
| **`ProviderAcctTerritoryInfo` (PATI)** | AFLS-specific extension. Captures **engagement data**: next provider visit date, preferred address, planned activities. |

> **Why both?** OT2A handles access (sharing). PATI handles business state for that Account-in-this-Territory context. Both need to exist with consistent state — that's what these jobs guarantee. The mobile app downloads PATI as its source of truth for the account list; if PATI is missing, accounts won't appear on iPad even when OT2A is correct.

## What Counts as a "Valid Provider"

A processable Account for these jobs must meet ALL of:

1. `Account.IsActive = true`
2. At least one related `HealthcareProvider` record
3. That `HealthcareProvider` record's `IsPrimaryProvider = true`

> **Most support issues trace back to this.** Customer reports "alignment job didn't pick up my account" → check the three flags above first.

## Job 1 — Align Account to Territory

**Type:** Reconciliation job
**Source of truth:** `ObjectTerritory2Association` (typically created by customer data load)

### What it does

| Scenario | Action |
|---|---|
| Active Account + matching OT2A | Create/update PATI, share PATI to territory |
| PATI exists, OT2A missing | Clear assignment origin on PATI, **deactivate PATI**, remove territory sharing |
| Inactive Account | **Delete** manual OT2A, deactivate related PATI, remove sharing |

### Source type stamping
When PATI is created from a manual OT2A, `Source Type = Manual`.

## Job 2 — Align Zip to Territory

**Source of truth:** `TerrGeoAssignmentRule` + postal codes from linked `ContactPointAddress` records.

### Rule structure
Each rule defines:
- `Effective Start Date` / `Effective End Date`
- `Code Type`: one of `ZipTerritory`, `BrickTerritory`, `GeoCode1`, `GeoCode2`
- `Territory` (target)
- `Code Value` (e.g., `6602`)

### What it does

| Scenario | Action |
|---|---|
| Active Account with CPA postal code matching effective rule | Create/update PATI, create OT2A if needed, apply territory sharing. `Source Type = Zip` |
| Postal-code rule removed or address changed | Update or remove related PATI / OT2A / sharing |
| Inactive Account | Remove postal-code-driven alignment (clear PATI, OT2A, sharing) |

> **Multiple addresses → multiple alignments:** If an Account has two CPA records with different postal codes mapping to different territories, the job aligns the Account to **both**.

## Job 3 — Align Brick to Territory

**Source of truth:** `TerrGeoAssignmentRule` with type `BrickTerritory` + `BrickName` field on `ContactPointAddress`.

Functionally identical to Job 2 but reads `BrickName` instead of postal code. Useful for European customers where "brick" is a logical regional grouping.

> The two jobs share invocation context — different code type values on the same `TerrGeoAssignmentRule` entity.

## Job 4 — Align Affiliations to Territory (the internal dependent)

**Triggers:** Runs automatically after **Job 1, 2, or 3** completes. **No direct UI invocation.**

**Source of truth:** `ProviderAffiliation` + `TerrProvAffilAssignRule` (criteria: Account Type, Affiliation Role, Specialty, target Territory).

### Why it exists
If a hospital (HCO) gets aligned to a territory, customers usually want the affiliated doctors (HCPs) brought into that same territory. This job does that — but only for affiliations matching configured rules.

### What it does

| Scenario | Action |
|---|---|
| Active Account whose affiliation meets rule criteria | Create/update PATI with `Source Type = Affiliation`, create OT2A if needed, apply sharing |
| Affiliation-based alignment no longer applies (rule/affiliation/parent changed) | Update or remove related PATI / OT2A / sharing |

### Managing affiliation rules
**Path:** Admin Console → Territories → Affiliation Rules

For a rule on a **parent territory**, the UI offers a toggle to **regenerate the same rule for all child territories** in the hierarchy — useful for symmetric rule definitions.

## Source Type Accumulation (the most important behavior to know)

A single PATI record's `Source Type` field accumulates as alignments come from multiple dimensions.

```
Manual data load creates PATI       → Source Type = "Manual"
Zip rule also matches               → Source Type = "Manual:Zip"
Affiliation rule also matches       → Source Type = "Manual:Zip:Affiliation"
```

### Cleanup logic
A PATI is **only deactivated when all source types are no longer valid.** Example:

- Customer deletes the Zip rule that mapped this Account
- Cleanup checks: was alignment ONLY from `Zip`?
- If yes → deactivate
- If no (other sources still valid) → remove `Zip` from `Source Type` string, keep PATI active

> This is by design and prevents cross-job accidental deactivation. Support team: when investigating "PATI was deactivated unexpectedly," check what was in `Source Type` before vs after.

## Scheduling & Execution

| Mode | Behavior |
|---|---|
| **Run Now** | Pick a specific territory from the hierarchy (or none → run for all territories) |
| **Schedule** | Hourly / Daily / Weekly. Scheduled runs always process ALL territories — no territory picker |
| **Batch Size** | Default 200, configurable |
| **Tracking** | Apex batch jobs — track via the job tile in Admin Console OR via Setup → Apex Jobs. Status shows accounts processed, affiliated accounts processed, territories processed. |

> **Recommendation from the session:** Customers typically schedule **daily**. Hourly runs can stress the org during high-volume data loads.

## Troubleshooting

### "Job ran but my account wasn't aligned"
**Diagnosis path:**
1. **Is Account active?** `IsActive = true`?
2. **Is there an HCP record?** Query `HealthcareProvider WHERE AccountId = '<account>'`
3. **Is the HCP `IsPrimaryProvider = true`?**
4. For Zip/Brick jobs: is there a `ContactPointAddress` record with matching code? Is the `TerrGeoAssignmentRule` effective (start ≤ today ≤ end)?
5. For Affiliation: are there active `ProviderAffiliation` records? Does any match the configured `TerrProvAffilAssignRule`?

### "Alignment was active yesterday; today it's deactivated — nothing changed in my data"
**Diagnosis path:**
1. Check `Source Type` on the deactivated PATI
2. Check if any rule (OT2A row, Zip rule, Brick rule, Affiliation rule) was deleted or had its effectivity window expire
3. Check the `ContactPointAddress` history — was the postal code changed?
4. Was the parent Account marked inactive?

### "Account showed up in iPad but I never aligned it"
**Cause:** Affiliation job ran on a parent HCO alignment and pulled the HCP through.
**Fix:** This is expected behavior. To prevent it, either:
- Remove the `TerrProvAffilAssignRule` for that role/specialty combination
- Mark the `ProviderAffiliation` inactive

### "Account changed via data load not reflecting on iPad until next sync"
**Question (from Arunkumar Vankadhara):** Can we push updates to iPad immediately?
**Answer (from session):** The iPad app has two sync mechanisms — full sync and **delta sync**. Background delta sync only pulls recently changed records; it doesn't require a manual "Begin Sync." On the rep's next online session, the delta sync will fetch the new alignment.
**Fix:** No way to push instantly — sync is pull-based. Rep needs to be online for the background delta sync to fetch.

### "Job error: number of accounts processed shows 0 even though I have rules"
**Cause:** Almost always one of the three validity flags (Active Account, HCP record, IsPrimaryProvider) is false on the candidate accounts.
**Diagnosis:**
```
SELECT Id, Name, IsActive,
       (SELECT Id, IsPrimaryProvider FROM HealthcareProviders)
FROM Account
WHERE Id = '<account>'
```
Verify all three.

### "Customer uses Heroku batch via DCR — alignment job ran but DCR pending records weren't updated"
**Cause:** DCR-pending records may not be in the state the job expects.
**Fix:** Verify DCR was approved BEFORE the alignment job ran. Otherwise wait for DCR approval and re-run.

## Quick Reference — Key Queries

```sql
-- Find PATI for a specific account
SELECT Id, IsActive, SourceType, TerritoryId, AccountId
FROM ProviderAcctTerritoryInfo
WHERE AccountId = '<account-id>'

-- Find OT2A for a specific account
SELECT Id, Territory2Id, ObjectId, AssociationCause
FROM ObjectTerritory2Association
WHERE ObjectId = '<account-id>'

-- Find effective geo rules for a postal code
SELECT Id, Territory2Id, CodeType, CodeValue, EffectiveStartDate, EffectiveEndDate
FROM TerrGeoAssignmentRule
WHERE CodeValue = '<zip>' AND CodeType = 'ZipTerritory'

-- Find affiliation rules
SELECT Id, Territory2Id, AccountType, AffiliationRole, Specialty
FROM TerrProvAffilAssignRule
WHERE Territory2Id = '<territory-id>'
```

## Reference

- **Source deck:** Account - Territory alignment jobs, Spring '26 — slide ID `1UmGqttjo8xrtVT_x5wj4Q67_HR2RFaK--ANnQ1gKjx8`
- **Source transcript:** Gemini, Apr 17, 2026 session — doc ID `14-5PzSRCbiSHmm_UmRIJYvKHBcFZesNK`
- **Companion file:** `territory-alignment-admin-transcript.md` in this module (PM-side baseline)
- **Related:** Mobile sync engine — see `mobile-metadata-cache/support-engineering-mobile-sync.md` for how PATI flows to iPad

# Search Before Create (SBC) — Part 2: External Search + Account Creation

**Session:** AFLS4CE Value Chain Training — May 12, 2026 (Part 2 of 2)
**Audience:** Support engineers
**Source:** Engineering training series (deck + Gemini transcript)
**Presenter:** Saumya Sharma

## Overview

Part 2 covers (1) **External Search and Download** — querying OneKey master data via MuleSoft and downloading records into Salesforce, (2) **Create Account** flow with field auto-population, and (3) **Data Change Request (DCR)** approval workflows. External downloads BYPASS the DCR workflow because OneKey is treated as the source of truth.

> **The cardinal rule:** External downloads SKIP DCR by design. If a customer reports "external download creates a DCR instead of an account," verify that the External Search code path is firing — not the standard create-account path.

## External Search — OneKey Integration

Pharmaceutical organizations maintain master HCP/HCO data in external systems. **OneKey** is the only currently-supported external data provider.

### Why it matters
- Prevents duplicate creation across the enterprise
- Reps can **download** records instead of manually creating them
- Records found are classified as **In Contract** (within data subscription) or **Out of Contract** (outside subscription, subject to download limits)

### Where it appears
External Search is available in **both** Search Outside Territory AND Advanced Search:

| Search variant | External trigger |
|---|---|
| **Search Outside Territory** | "Search in External System" button (manual) OR auto-search via setting |
| **Advanced Search (HCP / HCO / By ID)** | After internal search, trigger external — works in all 3 flavors |

## External Search Settings

All under **Admin Console → Search Before Create → General Settings**.

| Setting | Purpose |
|---|---|
| **Show External Search Results Along With Internal Search** | When `true`, external search runs in parallel with internal — no explicit button click needed |
| **Active External System for Search** | Dropdown: `None` (no external) or `OneKey`. If `None`, no external search runs |
| **Integration Definition API Name** | Connects to OneKey via MuleSoft — requires an Integration Definition + Apex class + Named Credentials (post-MuleSoft Connected App setup) |
| **Org Out of Contract Accounts Limit** | Org-wide cap on out-of-contract downloads |
| **Allow Out-of-Contract Downloads** | Checkbox — globally enable/disable out-of-contract downloads |

### Granular download controls
Beyond the org-wide limit, admins can apply **user-level** download caps. Lets compliance teams set per-user quotas.

## External Search Results

| Result detail | Source |
|---|---|
| External ID | OneKey unique identifier (the foreign key) |
| Specialties | From OneKey |
| Address info | From OneKey |
| Contract status | "In Contract" or "Out of Contract" |

> **Only ACTIVE accounts** are displayed in External Search results (filter applied client-side).

## External Account Download

When a rep clicks Download on a result:

1. **Contract check** — verifies the user/org hasn't hit their download limit
2. **Creates the Account** + related records:
   - `HealthcareProvider`
   - `ContactPointAddress`
   - Specialties
   - Business Licenses
3. **Auto-alignment** — Account is aligned to the user's **active territory**
4. **DCR workflow is SKIPPED** — OneKey is trusted as source of truth

### What gets created on download
```
Account (downloaded from OneKey)
  ├── HealthcareProvider
  ├── ContactPointAddress (one or more)
  ├── Specialties
  ├── BusinessLicenses
  └── ObjectTerritory2Association (aligned to user's active territory)
```

## Create Account Flow

If the rep doesn't find a match (internal or external), they can proceed to the **Create Account** form.

### Prerequisite
- Advanced search **must be performed first** — SBC blocks direct create from the menu

### Record Type Selector
After clicking Create, the system shows a **Record Type Selector** (e.g., HCP vs HCO). Selection drives form layout.

### Auto-population
- Fields from the Advanced Search FORM are **auto-populated** into the Create Account form
- Reduces manual re-entry — if a rep typed "Dr. John Smith" + email on the search, those carry forward

### Required input
| Record Type | Required fields |
|---|---|
| **HCP** | First Name, Last Name, Phonetic Name |
| **HCO / Sales** | Account Name |
| **Both** | Address (Name, CountryCode, StateCode, etc.) |

### Optional add-ons during create
- Affiliations (e.g., this HCP is affiliated with that hospital)
- Specialties

## Create Account Settings

### Field Sets (Account Creation)
Three configuration settings under Search Before Create + Account Search Preferences tile:

| Setting | Purpose |
|---|---|
| **Affiliation Details Field Set** | Columns shown when previewing the affiliation a user is adding |
| **Specialty Details Field Set** | Columns shown when previewing the specialty being added |

OOTB field sets ship for:
- HCP Account Creation
- HCP Contact Point Address
- HCO Account Creation
- HCO Contact Point Address

Customers can override via Field Set Mapping.

### Align Affiliated Accounts Automatically
**Setting location:** Account Management tile.

When enabled:
- If a user creates a HARD affiliation with an account that's NOT in their active territory
- The system **automatically aligns the affiliated account** to the user's active territory

## Data Change Request (DCR)

Configurable approval workflow that **gates record creation**. If enabled, the system creates a DCR record instead of inserting the account immediately. Admin must approve before the records are inserted.

### Setting location
**Path:** Admin Console → Account Management tile → "Requires Approval for Creation" toggle (per entity)

### Entities supported
- Healthcare Organization
- Healthcare Provider

### DCR records created
When DCR is enabled, the create flow generates DCR records for:
- Account
- HCP
- ContactPointAddress
- ProviderAffiliation

### DCR approval flow
```
User submits Create Account form
  └── DCR records created (no Account yet)
        └── Admin reviews and approves DCR
              └── Account + related records inserted into Salesforce
```

### Critical: External Download SKIPS DCR

> Reps downloading from OneKey bypass DCR. The assumption is that OneKey is the source of truth — records are already valid.

## Troubleshooting

### "External Search button is grayed out"
1. **`Active External System for Search` = None** — set it to OneKey.
2. **Integration Definition not configured** — Admin Console → Settings → Integration Definitions → verify the Apex class + Named Credentials are set up correctly.
3. **MuleSoft Connected App credentials missing** — Named Credentials must point to a working connected app.

### "External Search returns 'Out of Contract' for accounts that should be In Contract"
1. Verify the data subscription on OneKey side
2. Check `Allow Out-of-Contract Downloads` setting if these downloads ARE expected to succeed
3. Verify `Org Out of Contract Accounts Limit` hasn't been exhausted

### "Download succeeded but account isn't in my book"
1. Verify the user has an ACTIVE territory (User → Active Territory association)
2. Check `ObjectTerritory2Association` was created
3. Run Align Affiliations to Territory job if affiliated accounts are missing

### "Create Account creates a DCR instead of an Account"
**This is expected** if DCR is enabled. Check:
1. Admin Console → Account Management → "Requires Approval for Creation" — confirm whether DCR is intentionally on
2. If unintentional, disable per the record type that's affected

### "External download creates a DCR" (the bug)
**Cause:** Wrong code path firing — should be the External Search download, not standard create.
**Diagnosis:** Check logs to confirm the External Search service is being called, not the standard create-account service.

### "Affiliated account isn't aligned to my territory"
**Cause:** `Align Affiliated Accounts Automatically` is disabled.
**Fix:** Admin Console → Account Management tile → enable the setting.

### "Out of Contract downloads fail with 'limit exceeded'"
1. Verify `Org Out of Contract Accounts Limit` — increase if needed
2. Verify user-level download limit isn't lower than usage
3. If limits are correct, the rep has actually hit their cap — compliance team should review

## Reference

- **Source deck:** Search Before Create (SBC), Spring '26 — slide ID `1FRg4n-BT9JcMiAkxe7T8fsSDejdR0BJvf6_oFlemh2s` (shared with Part 1)
- **Source transcript:** Gemini, May 12, 2026 session — doc ID `1qcJ4bI6CjUofAbCYbiYVAHcWfWosiTTm`
- **Companion file:** `support-engineering-search-before-create-part1.md` — internal search flows
- **Related — Territory Alignment:** see `territory-alignment/support-engineering-alignment-jobs.md` for how downloads land in `ProviderAcctTerritoryInfo`

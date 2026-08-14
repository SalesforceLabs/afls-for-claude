# Search Before Create (SBC) — Part 1: Internal Search

**Session:** AFLS4CE Value Chain Training — May 8, 2026 (Part 1 of 2)
**Audience:** Support engineers
**Source:** Engineering training series (deck + Gemini transcript)
**Presenter:** Saumya Sharma

## Overview

Search Before Create (SBC) is a **data governance strategy** that prevents duplicate Account records by forcing reps to search existing records — or external master data systems like OneKey — before creating a new one. Part 1 covers the **internal** search flows (Salesforce-only): data flattening, Search Outside Territory (fuzzy keyword), Advanced Search (HCP / HCO / By ID), and Manual Alignment.

> **The cardinal rule:** SBC always searches BEFORE create. Two search flavors (Outside Territory + Advanced) populate from the same flattened HCP data and feed the create-account flow.

## Data Flattening (the prerequisite for search)

To enable cross-entity search, SBC populates lookup fields ON the `HealthcareProvider` record from related child records. Without flattening, search-by-email/phone/specialty won't work.

### Flattened fields on `HealthcareProvider`
- Phone numbers (from `ContactPointPhone`)
- Email IDs (from `ContactPointEmail`)
- National Provider Identifiers (NPI)
- Social Identifiers
- Specialties

### Two mechanisms

| Mechanism | Path | When it runs |
|---|---|---|
| **Triggers** | Admin Console → Trigger Handler Administration → Trigger Handlers | Real-time, on insert/update of child records |
| **Job** | Admin Console → Search Before Create → General Setting → Search Before Create Jobs | Batch — for catching up historical data |

> **Diagnosis when "search by email doesn't find anything":** Check that the SBC triggers are active AND that the SBC flattening job has run. New child records won't be searchable until one of the two has touched the HCP.

## Search Outside Territory (Fuzzy / Keyword)

Allows users to view and add accounts currently aligned to **other or no territory** — i.e., not theirs. Useful when a rep encounters an HCP that's in another rep's book.

### Behavior
- **Fuzzy / keyword-based.** Matches any keyword against:
  - `Account` fields
  - `HealthcareProvider` fields
  - `ContactPointAddress` fields

### Configuration knobs
Admin Console → Search Before Create → General Setting → filters used to restrict result set (default ones ship OOTB).

### Default Field Sets (OOTB)
Salesforce ships field sets used to control which columns appear in search results. Customers can override via Field Set Mapping (see below).

## Advanced Search

Used **when the user has specific values** to refine the match. Three flavors:

| Type | Searches | Use case |
|---|---|---|
| **HCP** | Healthcare Provider Accounts | Find a specific doctor |
| **HCO** | Healthcare Organization Accounts | Find a hospital / clinic / pharmacy |
| **By ID** | Business Licenses | Find by license / NPI |

### Default Field Sets (OOTB)
Each search type ships with default field sets for:
1. Search input form fields
2. Result columns
3. Account creation form fields (used downstream in the create flow)

### Custom Field Sets — Field Set Mapping
Admins can override the OOTB field sets through:

**Path:** Admin Console → Search Before Create → General Setting → **Field Set Mapping**

This is how customers configure their own field sets for HCP, HCO, and License search AND for the downstream create flow.

## License Search

Search by business license number. Used to find a provider when only the license is known.

### Configuration
- Default field sets for license search results ship OOTB
- Custom field sets configurable via Field Set Mapping

## Manual Alignment

Once a record appears in search results, users can **align** the account to their **current active territory** without leaving the SBC flow.

> **Critical concept:** Manual alignment is the bridge between "found via Search Outside Territory" and "now this account is in my book." It updates `ObjectTerritory2Association` and creates / activates a `ProviderAcctTerritoryInfo` record.

## Troubleshooting

### "Search by email/phone returns no results, but I see the email on the contact record"
**Cause:** HCP record has not been flattened — child contact-point record exists but the lookup field on HCP is empty.
**Fix:**
1. Confirm SBC triggers are active (Admin Console → Trigger Handler Administration → look for SBC flattening handler).
2. If recently turned on, run the SBC flattening job to catch up historical data.
3. Verify by querying `HealthcareProvider` for the affected record and inspecting `EmailIds` / `PhoneNumbers` fields.

### "Search Outside Territory returns no results"
1. Confirm the user has **search outside territory** permission (this is a separate setting from regular search).
2. Verify the data is flattened on `HealthcareProvider`.
3. Check the keyword — fuzzy is forgiving but doesn't transliterate.

### "Custom field on my advanced search form doesn't appear"
**Cause:** Custom field not added to the Field Set Mapping configuration.
**Fix:** Admin Console → Search Before Create → General Setting → Field Set Mapping → add the field to the relevant field set for that search type.

### "Found in Outside Territory results, but Manual Align does nothing"
1. Confirm the user has an active territory.
2. Verify `Account.IsActive = true`.
3. Check FLS on `ObjectTerritory2Association` and `ProviderAcctTerritoryInfo` for the user's profile.

## Reference

- **Source deck:** Search Before Create (SBC), Spring '26 — slide ID `1FRg4n-BT9JcMiAkxe7T8fsSDejdR0BJvf6_oFlemh2s` (shared between Part 1 + Part 2)
- **Source transcript:** Gemini, May 8, 2026 session — doc ID `1b1uRenOl8LV1oHuFPmOGWx5Bp5tN9E80`
- **Companion file:** `support-engineering-search-before-create-part2.md` — covers external search (OneKey) + create account flow + DCR
- **Companion (PM-side):** `account-search-sbc-admin-talk-track.md`, `account-search-sbc-talk-track.md`
- **Related — Territory Alignment:** see `territory-alignment/support-engineering-alignment-jobs.md` for how `ProviderAcctTerritoryInfo` is created/maintained

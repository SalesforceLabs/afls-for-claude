# Visit Configuration — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Jun 2, 2026 (deck-side companion)
**Audience:** Support engineers
**Source:** Engineering training series (deck reference)
**Presenter:** Jim Morrow

## Overview

This file is the **configuration reference companion** to `support-engineering-visit-troubleshooting.md`. The Jun 2, 2026 session covered both how to configure Visit Management AND the most common troubleshooting patterns. The troubleshooting file captures the diagnosis flows; this file captures the underlying admin console structure, every settings panel, and the data model that backs them.

## Visit Features (what gets recorded)

`ProviderVisitProductDetailing` is the central record for everything a rep captures about a product discussion. It's the **parent** of:

| Child object | Captures |
|---|---|
| `ProductDisbursement` | Samples handed to provider |
| `ProviderVisitRqstSample` | Direct-to-Physician (DTP) ship requests |
| `ProviderVisitMarketingItem` | Marketing items distributed |
| `PresentationForum` | Presentations shared during the visit |
| Attendee child visits | Additional accounts in a group call |
| Visitor records | Employees accompanying the rep |
| `ProviderVisitProductDiscussion` | Off-label / on-label discussion notes |
| `ProviderVisitProductMessage` | Key messages delivered |

> **Attendees** = additional **accounts** (other HCPs in the room).
> **Visitors** = additional **employees** of the client (other reps, managers, training reps).

## Admin Console Path

All Visit configuration: **Admin Console → Visit Administration → Visit Settings**.

## Configuration Panels (per the deck)

### General Visit Settings
| Setting | Purpose |
|---|---|
| **Skip Visit Preview** | Bypass preview screen on the planner |
| **Visit Date/Time requirements** | Mandate specific date/time format |
| **Default Visit Duration** | In minutes |
| **Future Visit Limit** | In days — restrict how far ahead a rep can schedule |
| **Visit Conflict Validation Period** | Window for double-book detection; mode = warn or block |
| **Submission Delay Reasons** | List of reasons for late submission |
| **Unblock Submitted Visits** | Allow post-submission edits |

### Geolocation Settings (Mobile only)
| Setting | Purpose |
|---|---|
| **Capture geolocation on** | Submit / Signature / Both |
| **Max distance** | Validation distance from visit address |
| **Mode** | Warning or Error |

### Product Detailing Settings
| Setting | Purpose |
|---|---|
| **Show recent details in product selector** | UI personalization |
| **Discuss Off-Label Products** | Allow off-label brand/indication combos |
| **Next Visit Objective Field Type** | Picklist or text |

### Samples and Items Settings
| Setting | Purpose |
|---|---|
| `HcoTypesForSamplesAndItems` | Semicolon-separated HCO record types allowed to receive samples |
| `RequireBatchNumber` | Mandate lot/batch selection when sampling |
| `DisplayExpiredLots` | Show expired lots in the batch dropdown |
| `ValidateSampleLimits` | Enforce compliance caps from `ProviderSampleLimit` |
| `ValidateSampleInventory` | Enforce lot-level inventory |
| `SampleInventoryValidationMode` | `Error` blocks save; anything else warns |
| `ValidateTerritoryQtyAllocation` | Enforce territory allocations (mostly DTP) |

### Signature, Attendee, Visitor Settings
| Setting | Purpose |
|---|---|
| **Document ID for signature** | Record a signer's document ID |
| **Visitor search filter** | Restrict which user profiles can be added as visitors |
| **Attendee filters** | Configure how affiliated/address-based attendees appear |

## Data Storage — Metadata Pattern

Visit settings are NOT stored as a flat custom setting. They're modeled as records under three life-sciences metadata objects:

| Object | Role |
|---|---|
| **`LifeSciMetadataCategory`** | The category (e.g., `ProviderVisitSettings`) |
| **`LifeSciMetadataRecord`** | One record per Org / Profile / User scope. Name suffix = Profile ID or User ID. `IsOrgLevel = true` marks the org-level record |
| **`LifeSciMetadataFieldValue`** | The actual field name + value (e.g., `ValidateSampleLimits = true`) |

### Why this matters
Settings inherit from User → Profile → Org. The Admin Console UI can't visibly differentiate "unsaved" from "all-false," so the source of truth is the underlying records.

> **Engineering follow-up:** A User Story exists to add a visual indicator that a setting is saved.

## Sample Limits — Configuration Model

### Templates
`ProviderSampleLimitTemplate` defines:
- Rule types (`SamplesPerYear`, `SamplesInPeriod`, `SamplesPerVisit`)
- Strategy (`SKU` for individual product, `SHARED` for pooled limits across products)
- Time periods
- `DiscrepancyAlertType` (warn vs. block)

### Provider-level records
`ProviderSampleLimit` ties Template + Product + Account:
- `Rules` JSON holds time period and remaining quantity
- Has warning/error setting (NOT in admin console — JSON-only)
- One record required per Account/Product/Template combination

### Validation flow
```
On Signature/Submit → create PrvdVstSmplLmtTransaction
                    → fire trigger on PrvdVstSmplLmtTransaction
                    → update ProviderSampleLimit.RemainingQuantity
```

## Product Inventory — Configuration Model

```
Product (Product2 / LifeSciMarketableProduct)
  ├── ProductItem (junction: Product × Location, holds total qty)
  │     └── ProductBatchItem (granular: Batch × Location × Product)
  ├── ProductionBatch (lot number, expiry)
  │     └── ProductBatchItem
  └── Location (warehouse / rep's bag — linked to a user)
```

### Per-Location requirements for samples to show
1. `Location.IsInventory = true`
2. `Location.Type` matches the Samples Management → User Inventory Location Type setting
3. `ProductItem` exists for the Product at this Location
4. `ProductBatchItem.RemainingQuantity > 0` for at least one batch

## Product Allocation — Configuration Model

`TerritoryProdtQtyAllocation`:
- Defines max quantity per territory per time period
- **Unique, non-overlapping time periods** per product (validation requirement)
- `Type = Ship` for DTP; `Type = Drop` for sample max-per-visit
- `MaxDisbursementLimitQty` enforces per-visit cap (read by sample inventory validation)
- **Not displayed in UI** — admin must verify via SOQL/data loader
- `CalculateTPQADebitedQuantityHandler` trigger reduces remaining qty on Visit submit

## Configuration Anti-Patterns (most common in escalations)

| Pattern | Diagnosis | Fix |
|---|---|---|
| Setting overridden at User/Profile level | Query `LifeSciMetadataRecord` for unintentional records | Delete them to restore Org-level default |
| Field added but not visible | Cache stale after layout change | Run metadata cache |
| Record type missing on engagement screen | Added to only one of Visit/ProviderVisit | Add to both, mirror each other |
| Next Visit Objectives section blank | Section named wrong | Must be exactly `Next Visit Objectives` and `Pre Provider Visit Notes` |
| HCO can't receive samples | `HcoTypesForSamplesAndItems` empty | Add HCO record type developer names, semicolon-separated |
| Place picker empty | `ContactPointAddress` records inactive | Activate records |
| Sample submit error: "limit doesn't exist" | Template assigns product, no `ProviderSampleLimit` for account | Create `ProviderSampleLimit` or remove product from template |

## Reference

- **Companion file:** `support-engineering-visit-troubleshooting.md` in this module — diagnosis flows from the same Jun 2, 2026 session
- **Companion file:** `support-engineering-visit-engagement-side-menu.md` — Apr 3 session on sidebar logic and merged layout
- **Source deck:** Visit Engagement Configuration and Common Issues, Spring '26 — slide ID `1ldTORbO3srrpx_hC96jcZCWMPrbILLiqLYYiKJMlUNU`
- **Related — Mobile metadata cache:** see `mobile-metadata-cache/support-engineering-mobile-sync.md`

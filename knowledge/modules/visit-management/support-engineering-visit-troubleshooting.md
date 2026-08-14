# Visit Management Troubleshooting — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Jun 2, 2026
**Audience:** Support engineers
**Source:** Engineering training series (deck + Gemini transcript)
**Presenter:** Jim Morrow

## Overview

Visit Management facilitates compliant, effective engagement for Sales Reps, MSLs, and KAMs. Most "the setting isn't working!" support escalations come from **granular User/Profile-level metadata records overriding the org-level setting** — not from product bugs. This file consolidates the troubleshooting playbook around the three areas where escalations cluster: visit settings, samples/inventory, and product display.

> **The single most common pattern:** Reported issue → query `LifeSciMetadataRecord` for User/Profile overrides → delete the unintentional record → behavior restores. Always check before escalating.

## The #1 Diagnosis: Granular Settings Override

Settings are stored at **Org**, **Profile**, or **User** level. A more granular setting overrides a less granular one (User > Profile > Org). The Admin Console UI can't reliably show whether a setting record is unsaved or all-false — they look identical.

### Diagnose by querying metadata directly

```
LifeSciMetadataCategory   — the main category (e.g., 'ProviderVisitSettings')
LifeSciMetadataRecord     — individual setting records at Org / Profile / User
                            (Profile ID or User ID is appended after underscore in Name;
                             IsOrgLevel = true marks the org-level record)
LifeSciMetadataFieldValue — the actual field values (e.g., ValidateSampleLimits)
```

### Fix
Delete any **unintentional User or Profile-level** `LifeSciMetadataRecord` to restore org-level (default) behavior.

> **Process discipline:** Reproduce the issue in another org BEFORE escalating. Check granular overrides first. Verify all prerequisites and triggers are configured.

## Sample Limits — Compliance Validation

Sample limits validate **per-account, per-product** caps for legal compliance and are country-specific (some templates ship OOB).

### Validation timing
- Runs **only on Signature or Submit** of a Visit — NOT on save.

### Data flow
```
ProviderSampleLimit (links Product + Account, holds Rules JSON with time period + remaining qty)
  └── PrvdVstSmplLmtTransaction (created on Signature/Submit, stores Template, Visit, Product, Qty)
        └── Trigger on PrvdVstSmplLmtTransaction → updates ProviderSampleLimit.RemainingQuantity
```

### Two limit types
| Type | Behavior |
|---|---|
| **SKU (Individual)** | Limit applies to a single product for the Account. Shown in popover via ellipsis next to product. |
| **Shared** | All products assigned to the template contribute to one pool. Shown in info icon at top of Samples / DTP left sidebar section. |

### The most common bug: "Cannot submit — provider sample limit doesn't exist"
**Cause:** Product is assigned to a template, but **no `ProviderSampleLimit` record exists** for this specific Account.
**Fix:** Either create the `ProviderSampleLimit` for that account-product pair, or remove the product from the template.

## Sample Inventory Validation

Distinct from sample limits — inventory validation checks the **rep's personal lot stock** to enforce sample accountability.

### What it validates
1. The rep has enough physical inventory (lot-level remaining quantity)
2. The disbursement doesn't exceed `MaxDisbursementLimitQty` configured via `TerritoryProdtQtyAllocation`

### Default
`ValidateSampleInventory = false` (no validation; rep can disburse any quantity).

### Mode
| `SampleInventoryValidationMode` | Behavior |
|---|---|
| `Error` | Blocks save entirely if quantity exceeds inventory |
| Anything else | Warning popup; rep can confirm to proceed; violation is recorded |

### Inventory data model
```
Product (Product2 + LifeSciMarketableProduct)
  ├── ProductItem (junction: how much of Product X is at Location Y)
  │     └── ProductBatchItem (most granular: quantity of Batch X at Location Y for Product Z)
  ├── ProductionBatch (specific lot — number, expiration)
  │     └── ProductBatchItem
  └── Location (warehouse / rep's bag, linked to user)
```

> **Trigger to know:** On Signature/Submit, an internal trigger on `ProductDisbursement` updates `ProductBatchItem.RemainingQuantity`.

## Product Display in Sidebar

### "No products appear under Samples"
Run through this checklist in order:

1. **LifeSciMarketableProduct** records must exist
2. Products **aligned to user's active territory** via `ProductTerritoryAvailability` (and not territory-excluded)
3. Brand AND child products must be aligned to the user's territory
4. There must be child product(s) of **Type = Drop**
5. `ProductItem` records must exist with a `Location` associated to the User
6. That Location must have:
   - `IsInventory = true`
   - **Location Type = Samples Management setting's "User Inventory Location Type"** (Admin Console → Sample Inventory Management → Org-Wide Settings)

### "Samples/DTP/Marketing Items sidebar sections are inactive"
Two scenarios:

1. **HCO account, default settings.** HCOs cannot receive samples/DTP/marketing items unless **`HcoTypesForSamplesAndItems`** is configured. Add the HCO RecordType developer name(s) separated by semicolons in the admin console setting.
2. **Attendee/Child Visit address mismatch.** The Attendee Account on a child visit must share the **same address** as the Location selected on the Parent Visit; otherwise samples are disabled.

## Product Allocations (Direct-to-Physician)

`TerritoryProdtQtyAllocation` records define max quantity available per territory per time period for a product. Used primarily for **DTP** but also drives `MaxDisbursementLimitQty` for samples.

### Configuration requirements
- **Unique, non-overlapping** time periods per product
- Set `Type = Ship` for DTP allocations
- Set `Type = Drop` if using to drive sample max-per-visit

### Trigger
`CalculateTPQADebitedQuantityHandler` on `ProviderVisitRqstSample` handles the reduction of `RemainingQuantity` on `TerritoryProdtQtyAllocation` after Visit submit.

> **Important:** Product allocations are NOT displayed in the UI. Diagnosis is metadata-only.

### "Allocations missing / not being respected"
1. Is the **`TimePeriod` record active and in date range**?
2. Is `Type` set correctly (Ship vs. Drop)?
3. Are there overlapping time periods (invalid configuration)?

## General Configuration Hygiene

### "Field not appearing on layout"
**Fix:** Run the **metadata cache** after ANY layout change for Visit-related fields. This is the single most common reason added fields don't show up.

### Record types on Visit
**Always add to both `Visit` AND `ProviderVisit` objects** — they must mirror each other for the merged layout to resolve correctly.

### Next Visit Objectives — section name MUST match exactly
| Purpose | Required section name |
|---|---|
| Capture this visit's next-visit objectives | `Next Visit Objectives` |
| Display objectives captured at the previous visit | `Pre Provider Visit Notes` |

Any other name = section won't render.

### Visit Place
`ContactPointAddress` records must be **active** to appear in the Place picker.

### Editing an Attendee/Child Visit
Always opens the **parent visit** — by design, not a bug.

## Geolocation

| Aspect | Detail |
|---|---|
| **Captured at** | Visit Submit or Signature |
| **Platform** | Mobile only |
| **Max distance check** | Compares rep location to visit address; configurable max distance |
| **Behavior** | Can be Warning or Error mode |

## Visit Settings Reference (most-asked)

| Setting | What it controls |
|---|---|
| `RequireBatchNumber` | Makes lot number required when adding sample |
| `ValidateSampleInventory` | Lot-level inventory validation |
| `ValidateSampleLimits` | Account-level compliance caps |
| `ValidateTerritoryQtyAllocation` | Per-territory product allocation check (mainly DTP) |
| `HcoTypesForSamplesAndItems` | Semicolon-separated HCO record types allowed to receive samples/items |
| `DiscussOffLabelProducts` | Allow off-label brand/indication combinations during detailing |
| `FutureVisitLimit` (days) | How far ahead a rep can schedule a visit |
| `VisitConflictValidationPeriod` | Window for double-booking detection; warn or block |
| `VisitDuration` (min) | Default planned duration |
| `UnblockSubmittedVisits` | Allow post-submission edits |
| `SkipVisitPreview` | Bypass preview screen on planner |

## Troubleshooting Quick Reference

### "Setting reported as not working"
1. Check Org-level → Profile-level → User-level `LifeSciMetadataRecord` for the setting category
2. Delete any unintentional Profile/User records
3. Reproduce in a fresh org if behavior is still wrong

### "Cannot submit — sample limit error"
1. Verify `ProviderSampleLimit` exists for the Account-Product combination
2. Verify `Rules` JSON time period covers today
3. Check `RemainingQuantity` is > 0

### "Field not appearing"
1. Run metadata cache
2. Confirm field is on the **right object's layout** (custom fields on Visit don't render on the merged screen — they must be on ProviderVisit)
3. Confirm FLS for the user's profile

### "Cannot disburse samples (sidebar disabled)"
1. HCO + `HcoTypesForSamplesAndItems` not configured → add HCO RT
2. Child visit attendee address ≠ parent visit Location → fix addresses

### "Products missing from sidebar"
Run the 6-step Product Display checklist above

### "Visit allocation not enforced"
1. `TerritoryProdtQtyAllocation` time period active?
2. `Type` (Ship/Drop) correct?
3. Allocations exist for the user's territory + product?

## Reference

- **Companion file:** `support-engineering-visit-configuration.md` in this module — the same Jun 2, 2026 session deck broken out as a configuration reference
- **Companion file:** `support-engineering-visit-engagement-side-menu.md` in this module — Apr 3, 2026 session on sidebar internals and merged-layout behavior
- **Source deck:** Visit Engagement Configuration and Common Issues, Spring '26 — slide ID `1ldTORbO3srrpx_hC96jcZCWMPrbILLiqLYYiKJMlUNU`
- **Source transcript:** Gemini, Jun 2, 2026 session — doc ID `1xflVjnDV1Iy43IXI4rZ__YYqRwTPX-QR`
- **Related — Mobile metadata:** see `mobile-metadata-cache/support-engineering-mobile-sync.md` for cache invalidation on layout changes

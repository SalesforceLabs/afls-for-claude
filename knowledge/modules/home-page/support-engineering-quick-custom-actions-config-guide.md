# Quick & Custom Actions — Configuration Guide

**Doc type:** Evergreen support engineering reference
**Audience:** Support engineers, admins, integration teams
**Source:** Engineering Configuration Guide (Google Doc)

## Overview

This is the **canonical config reference** for Standard / Quick / Custom Actions in AFLS4CE — covers supported actions per location, labels, deletion procedure (via Tooling API), LWC component creation via Workbench Migration Deploy, action sorting, GoTo URI schemes, and four worked examples. Use this alongside `release-260-quick-custom-actions.md` (which covers the feature reveal).

## Supported Actions by Location

### Account record page
| Action | Type | Notes |
|---|---|---|
| New / Edit / Delete | Standard | OOTB CRUD |
| Log a Call | Standard | Activity logging |
| New Visit | Quick | Pre-fills `AccountId` |
| Photos | Custom (URL) | `photos-redirect://` |
| Map | Custom (App) | Opens Google Maps |
| Affiliations | Custom (Internal) | Inline LWC |

### Home Page
| Action | Type | Notes |
|---|---|---|
| New Visit | Quick | Cold-create — must select account |
| New Account | Standard | Goes through SBC flow |
| Voice command | Custom (Utterance) | Einstein for Sales |

### Visit Engagement
| Action | Type | Notes |
|---|---|---|
| Samples | App (`GoTo`) | Target: `ProviderVisitRqstSample` |
| Detailing | App (`GoTo`) | Target: `PresentationForum` |
| Disbursement | App (`GoTo`) | Target: `ProductDisbursement` |
| Complete Visit | Standard | Validation gates |

## Labels — Where they come from

Action labels render based on action type:

| Action source | Label source |
|---|---|
| **Standard Actions** | Translation Workbench — `Object.Action` label key |
| **Quick Actions** | CustomLabel — keyed by Action Name (current implementation) → DeveloperName (future) |
| **Custom Actions** | CustomLabel — same key resolution as Quick |

> **Watch out:** Today the system keys CustomLabel by **Action Name**. A future release switches to `DeveloperName`. Customers who add custom translations should plan for both keys until the migration completes.

## Sorting — How action order is determined

Actions sort by **Page Layout order** (NOT by creation date, NOT alphabetically).

- Edit Page Layout → Salesforce Mobile and Lightning Experience Actions section
- Drag actions into desired order
- Save layout → re-generate mobile metadata cache

> **If Dynamic Actions is ON, sorting follows the Lightning Record Page Actions block order instead.**

## Deletion Procedure (Custom Actions)

Custom Actions are stored as `LifeSciConfigRecord` rows with `Category = 'CustomAction'`. Standard Object Manager UI does NOT let you delete them — must use Tooling API.

### Step-by-step (Workbench)
1. Open Workbench → REST Explorer → **Tooling API**
2. Run SOQL:
```sql
SELECT Id, Name, DeveloperName
FROM LifeSciConfigRecord
WHERE Category = 'CustomAction'
AND DeveloperName = '<the-action-developer-name>'
```
3. Take the resulting `Id`
4. Issue DELETE against:
```
/services/data/v60.0/tooling/sobjects/LifeSciConfigRecord/<Id>
```

### Bulk deletion via Bulk API
For deleting many at once, export the IDs as a CSV → Workbench Data Bulk API → Delete.

> **Soft-delete first:** Recommend setting `IsActive = false` and validating impact for 1 sprint before hard-delete. Custom actions referenced in metadata caches may break for users until next cache regen.

## LWC Component Creation for Custom Actions

For an **Inline** Custom Action that opens an LWC modal:

### Deploy procedure (Workbench)
1. Author the LWC bundle in your IDE
2. Wrap into a metadata zip (the standard LWC package format)
3. Workbench → Migration → **Deploy**
4. Upload zip → Run validation → Deploy

### Binding to a Custom Action
- Setup → Object Manager → relevant object → Action → New Custom Action
- Action Type = `URL` (with `lightning://` LWC reference) OR direct LWC name in the metadata
- Target Type = `Inline`

## GoTo URI Schemes (for Visit Engagement App actions)

| Scheme name | Section object API name | Function |
|---|---|---|
| Samples | `ProviderVisitRqstSample` | Jump to sample request section |
| Detailing | `PresentationForum` | Open content presentation |
| Disbursement | `ProductDisbursement` | Sample disbursement section |
| Inquiry | `Inquiry` | Inquiry capture section |
| Signature | `EngagementSignature` | Signature capture |

## Worked Examples

### Example 1: Custom URL Action — Open Photos from Visit
| Field | Value |
|---|---|
| Action Name | `OpenPhotos` |
| Type | `URL` |
| Target | `photos-redirect://` |
| Target Type | `External` |
| Page | Visit Lightning Record Page |
| Required co-action | Standard Visit action must be on the same page |

### Example 2: LWC Quick Action — Custom Visit Modal
| Field | Value |
|---|---|
| Action Name | `OpenCustomVisitModal` |
| Type | `URL` |
| Target | `lightning://lscCustomVisitModal` |
| Target Type | `Inline` |
| Required deploy | LWC bundle deployed via Migration Deploy |

### Example 3: App Action — GoTo Samples
| Field | Value |
|---|---|
| Action Name | `GoToSamples` |
| Entity | `SObject` |
| Type | `App` |
| Action Target | `"GoTo"` |
| Target Type | `Internal` |
| Target Parameters | `ProviderVisitRqstSample` |
| Filter | `Visit.Status != 'Completed'` |

### Example 4: Utterance Action — Mark Visit Complete
| Field | Value |
|---|---|
| Action Name | `MarkComplete` |
| Type | `Utterance` |
| Target | `"Mark this visit complete"` |
| Target Type | `Internal` |
| Required | Einstein for Sales enabled |

## Troubleshooting

### "Custom Action doesn't appear on Record Page"
1. Standard action missing from the Lightning Record Page — add it
2. Dynamic Actions OFF when actions are defined on the Page → enable, or move actions to Page Layout
3. Mobile metadata cache not regenerated — Admin Console → Cache → regenerate

### "Custom Action shows wrong label"
1. CustomLabel missing for that locale
2. Action Name keyed differently than expected (current = Action Name; future = DeveloperName)
3. Translation Workbench overrides Standard Action labels — check there first

### "Action sort order looks random"
**Cause:** Dynamic Actions ON; actions are sorted by Lightning Record Page Actions block order, not Page Layout.
**Fix:** Edit the LRP → reorder the Actions block.

### "GoTo doesn't navigate"
1. Verify `Action Target = "GoTo"` (with quotes — string literal)
2. Verify `Target Parameters` is the **API name** of the destination section object (case-sensitive)
3. Verify the destination section exists on the same Visit Engagement page

### "Can't delete a Custom Action from the UI"
**Expected.** Use Tooling API DELETE on `LifeSciConfigRecord` (see Deletion Procedure above).

### "URI scheme works on simulator but not on iPad"
1. Verify the app for that scheme is installed on the device
2. Check iOS allowed-URL-schemes config in the AFLS4CE app's Info.plist (may be missing)
3. Test the scheme outside Salesforce first (Notes app → tap link)

## Reference

- **Source doc:** Quick & Custom Action Config Guide — Drive doc ID `12Iyro06wmEWnuLC5CgAqXPF9BMJrWtfavgPZLcSEaQo`
- **Companion file:** `release-260-quick-custom-actions.md` — Spring '26 feature reveal
- **Related — Mobile sync:** see `mobile-metadata-cache/support-engineering-mobile-sync.md` — regenerate cache after any action change
- **Related — Visit Engagement:** see `visit-management/support-engineering-visit-engagement-side-menu.md` — GoTo targets resolve into the visit side-menu sections

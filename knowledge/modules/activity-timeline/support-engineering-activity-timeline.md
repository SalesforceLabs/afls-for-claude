# Activity Timeline & Calendar View — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Jun 9, 2026
**Audience:** Support engineers
**Source:** Engineering training series (deck + Gemini transcript)
**Presenter:** Vishal Sadwal

## Overview

Activity Timeline gives reps a unified timeline + calendar view of standard activities — **Visits, Emails, Surveys, Inquiries, Assessment Tasks** — and any custom activity types they wire in through a container object pattern. Configuration happens entirely in the Admin Console under three tabs (General, Visibility, Display Text). Most support escalations come from **status-value mismatches** between Display Text config and the actual record status, or from missing related records (Provider Visit Product Detailing, Presentation forum / thumbnail records) that the timeline expects when expanded.

**Scope of this session:**
- Planner & Email Administration setup
- General & Visibility Configuration
- Display Text & Header Logic
- Custom Activity Container Models
- Standard Data Integrity Checklist

## Prerequisites

| Requirement | Detail |
|---|---|
| **Edition** | Developer or Enterprise |
| **Personas** | LifeScience Commercial User, AFLS Core & KAM User, Sales / Medical Persona |
| **Profile setup** | Admin Console must be **Default On** on the System Administrator profile (Profile → System Administrator → search "Admin Console" → Default On → save → verify via App Launcher) |
| **Planner** | First day of the week set to Monday (for Calendar View) |
| **Email Settings** | "Schedule emails to send later" enabled |

## Admin Console Structure

The Admin Console for Activity Timeline has **three tabs**:

1. **Activity Timeline General Settings** — global toggles + filters
2. **Activity Timeline Visibility Settings** — per-object field sets, profile-level scope
3. **Display Text Settings** — header labels, status-value mappings

All three live under: **App Launcher → Admin Console → Activity Timeline**.

## 1. General Settings

**Path:** App Launcher → Admin Console → Activity Timeline → Activity Timeline General Settings

Configurable at **profile or org level**.

| Setting | What it controls |
|---|---|
| **Default Call (Last Submitted Visit)** | If enabled, page lands on most recent completed visit |
| **Territory Filter** | Toggle between "all territories" and "current user's territory" |
| **Address Filter** | Filter by specific ContactPointAddress |
| **HCP Rollup** | Aggregates HCP-level activities onto parent HCO via affiliations |
| **Product/Sample Details** | Shows products/samples detailed in visits |
| **Intelligent Content** | Shows related presentations on the timeline view |
| **Affiliation Roles** | Filters which affiliations contribute to rollup |

> Save your changes to commit.

## 2. Visibility Settings

**Path:** App Launcher → Admin Console → Activity Timeline → Activity Timeline Visibility Settings

For each standard object (Visit, Inquiry, Assessment Task, Email, etc.):

1. Pick profile or org scope.
2. Check **Active** for the object types to display.
3. **Expanded View:** select a Field Set. This drives which fields show when a user expands an activity.
4. **UI limit:** maximum **6 fields** from the chosen field set will render. Pick the highest-value 6.
5. If no field set is selected, only `Name` shows on expand.

Save.

## 3. Display Text Settings

**Path:** App Launcher → Admin Console → Activity Timeline → Display Text Settings

This is where most misconfigurations hide. Key fields per row:

| Field | Notes |
|---|---|
| **Activity Type Object** | sObject API name (e.g., Visit, Inquiry, LifeScienceEmail) |
| **Status** | **API values** of statuses to display. MUST exactly match the actual record status — otherwise the row silently disappears. |
| **Assessment Task Type to Exclude** | Task types to hide |
| **Activity Header Custom Label** | Text with `{0}` and `{1}` placeholders. With territory enabled: `{0} = Owner`, `{1} = Territory` |
| **Field to Display in Header** | API field whose value replaces `{0}` |
| **Prefix & Body Text** | Sub-headers + detail fields |
| **Link Text for Body** | Generates a clickable URL. For Visits: can link to Parent Visit if present. |
| **Rolled-Up Header** | Takes precedence if HCP-on-HCO rollup is active; `{1}` is replaced by Account name |

> **Critical:** "Status values in labels MUST match object status exactly." A mismatch (e.g., label says `Submitted` but record status is `submitted`) leaves the row invisible without an error.

## 4. Custom Activity Container Pattern

If a customer wants a **custom object** (e.g., a custom "Account Activity") to appear in the timeline:

### Step 1 — Create the Container Object
Create a Custom Object with mandatory fields:
- `Account` (lookup)
- `Entity Id` (Text)
- `Event Date Time` (DateTime)
- `Title` (Text)
- (And other fields per the technical documentation)

### Step 2 — Develop the Trigger + Service
Write an **Apex Trigger + Service class** on the SOURCE custom activity object. The service:
- Maps fields from the source object into the container object's mandatory fields
- Stores any additional source-object data as a **JSON object** in the container's `EventData` field
- Creates / updates the container record automatically on source CUD

### Step 3 — Verify Entity Type
Ensure the **Entity Type** value used on the container is **active** and correctly labeled in the metadata.

### Step 4 — Admin Console Configuration
**Path:** Admin Console → Activity Timeline → Activity Timeline (Custom Activities section)

- Under "Custom Activities Timeline Settings," select the container object.
- Toggle the **Active** checkbox.

### Important — Multiple Custom Objects via One Container

> Q (from session, Tejaswi Peddireddy): "Can we support multiple custom objects?"
> A: **Yes — only one container object is configured in the Admin Console**, but you can route multiple custom objects through that same container by writing **separate trigger handlers** for each source object. Each handler should ensure the click-through redirects to the correct source object record.

## Standard Object Data Integrity Checklist

For each standard activity to appear in the Timeline, key fields must be populated. Source of truth from the deck:

| Object | Required fields |
|---|---|
| **Visit** | Account, Place (Contact Point Address), Planned Start Time, Territory |
| **Assessment Task** | Name, Party Reference Record, DueDate, Status, Task Type (used for filtering) |
| **Inquiry (via Case)** | Step A — Case: Account, Status, Case Origin. Step B — Inquiry: Case, ResponseContactPointRecord, SubmittedDateTime, Territory, Type |
| **LifeScience Email** | Template: Name + Active + Effective Start Date. Email: To Account, LastEventDateTime, Template, Subject, Status |
| **Inventory & Products** | Location: Name, Inventory Location enabled, Location Type. ProductItem: Location, Product2, Quantity on Hand. ProductDisbursement: Visit, Product Item |
| **Provider Visit Extensions** | ProviderVisit linked to Visit. Product Detailing: ProviderVisit, Product2/LifeScienceMarketableProduct |
| **Surveys** | Survey, Survey Subject, Survey Response. Creatable via Account page using `surveyListView` component |

## Activity History — Timeline View

- **Filters:** territory, address, affiliations (HCP-on-HCO rollup)
- **Today button** navigates to activities nearest current date
- **Infinite scroll:** past (down) and future (up)
- **Expand activity** → shows fields from the configured Field Set (max 6 fields)

### Visit Products & Samples — what shows
- Requires `ProviderVisit` + `ProductDisbursement` records
- Location must have `Inventory Location` enabled for samples to show
- Product Detailing requires `ProviderVisitProdDetailing` records

### LS Email — actions on expand
- **Resend:** available for `Sent` / `Bounced` status — clones the email + attachments
- **Reschedule / Cancel:** available for `Scheduled` status
- **Thumbnails:** require a snapshot record where the filename = `"thumbnail"`

### CLM / Presentation Setup (for ZIP and PDF)
Visualizations of presentations shared during Visits need ALL of these:
- **Presentation:** `Active = true`, correct Type
- **Presentation Page:** Content document title = `"thumbnail"`
- **Click Stream:** Links Presentation + Page → Provider Visit
- **Presentation Forum:** Links Visit → Presentation
- **Linked Page:** Used in PDF setup to show total slide counts

## Activity History — Calendar View

| View | Behavior |
|---|---|
| **Month** | Count of activities per day. Click a day → navigates to Week view. |
| **Week** | Actual activities for that week. Headers only (links to the actual record, or parent record for Visits). |
| **Filters** | Same as Timeline view. |
| **Address Filtering** | Specific address picked → only records referencing that CPA show. "All" (default) → everything regardless of CPA. |

## Troubleshooting

### "Activity Timeline tab shows an error despite correct config"
**Cause:** Almost always a configuration error or a missing mapping — not a sync engine bug.
**Diagnosis:**
- For Product/Sample details: verify `ProviderVisitProdDetailing` records exist for the visit
- For Email thumbnails: verify the snapshot record's filename is exactly `"thumbnail"`
- For CLM: walk through the 5 required objects (Presentation, Presentation Page, Click Stream, Presentation Forum, Linked Page) for completeness

### "Status mismatch — an activity isn't appearing"
**Cause:** Display Text Settings `Status` value doesn't match the actual record status API value. The mismatch is silent — no error toast.
**Fix:** Compare the Display Text row's Status field byte-for-byte against the record's actual Status API value. Case- and whitespace-sensitive.

### "Custom object fields not loading despite correct config"
**Cause (raised by Tejaswi Peddireddy):** Field set looks correct but expand shows blanks.
**Diagnosis:**
1. Inspect the source custom activity record's **`EventData` JSON** column on the container — empty / missing keys cause blank fields
2. Verify the **custom activity trigger service** correctly maps source-object fields into the container's `EventData` JSON
3. Ensure label keys in JSON match the field set field API names
**Engineering note:** Vishal committed to sharing the custom activity trigger service documentation as a follow-up — file is in the Drive folder under Custom Activities.

### "Resend button missing on an email"
**Cause:** Email status isn't `Sent` or `Bounced`.
**Fix:** Resend is action-status-gated by design. To resend an email in a different status, the workflow needs to first transition it.

### "Calendar week view shows record names but no details"
**Behavior, not bug:** Week View shows only header labels (link format) referencing the actual or parent record. Detail expansion happens by clicking through. This is intentional to keep the calendar compact.

## Reference

- **Source deck:** Activity Timeline & Calendar View Setup, Jun 2026 — slide ID `1QY1OzbYM5Aupx9q0qDVR-6fwDM14l53ZX8B7srFwTlQ`
- **Source transcript:** Gemini, Jun 09, 2026 session — doc ID `17wJrW7JxhCYkI-ftyqiyiura5LYnT6o5`
- **Companion file:** `activity-timeline-transcripts.md` in this module (PM-side baseline)
- **Custom Activity Trigger Service:** documentation forthcoming — file in Drive (AFLS4CE Value Chain Training folder)

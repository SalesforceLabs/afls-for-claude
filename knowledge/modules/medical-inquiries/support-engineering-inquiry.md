# Medical Inquiry — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Apr 13, 2026
**Audience:** Support engineers
**Source:** Engineering training series (Inquiry Setup Guide PDF + Gemini transcript)

## Overview

Medical Inquiry uses a **multi-entity record page** that combines `Inquiry` + `Case` on a single screen. The Sales Rep (creator) captures the question; the MSL (responder) authors and signs the response. Configuration cuts across page layouts, record types, multi-entity overrides, Generic Workflow Stage Path, validation/checklist LWC scripts, and queue-based ownership change.

> **The cardinal rule:** Inquiry and Case record types MUST have the **exact same Name**. The multi-entity page resolves the Case context by matching record-type Name on the Inquiry side.

## Multi-Entity Record Page

The Inquiry mobile/web page is rendered as a multi-entity view spanning **Inquiry + Case**.

### What goes on each layout

| Object | Layout requirement |
|---|---|
| **Inquiry** | Page layout assigned to sales rep profile. Must include `Subject Assignment`, `Notes`, `Inquiry Question` related lists |
| **Case** | Field-level security: support team must have access to **Account ID** and **State**. Create a **Case Status picklist** used by both Case AND Inquiry |

### Standard button overrides
The standard `New` and `Edit` buttons on Inquiry must be **overridden** with the multi-entity create and edit overrides — otherwise the rep gets the plain Inquiry page, not the multi-entity page.

### Record type matching (critical)
| Object | Requirement |
|---|---|
| Inquiry | Create a record type |
| Case | Create a record type with the **EXACT same Name** |

> If names don't match, the multi-entity create flow can't find the Case record type, and creation silently fails or creates orphaned records.

## Lightning Record Page Configuration

For the inquiry detail page to show fields from BOTH objects:

1. Edit the Lightning Record Page
2. Drag and drop the **Multi-Object Record View** component into the layout
3. This component combines visible fields from Inquiry + Case page layouts
4. Only fields the user has access to are shown

### Related list rules for mobile
| Related list | Use |
|---|---|
| **Inquiry Questions** | **Standard related list** — Dynamic Related List is NOT supported on mobile |
| **Files (attachments)** | **Only Files related list** is supported on mobile |
| **Answer tab** | Uses **Generic related list** — requires a field set on `InquiryQuestionAnswer` |

### Answer tab — the field set requirement
Unlike other tabs that use a single related list, the **Answer** tab uses a Generic Related List. To make it work:

1. Create a **field set on `InquiryQuestionAnswer`** entity
2. The field set defines which fields the Answer tab displays

## Generic Workflow — Stage Path Container

Inquiry uses AFLS Generic Workflow for status transitions + role-based access control.

### Setup
1. Drag and drop **Life Science Stage Path Container** custom component onto the Lightning Record Page
2. Create a Generic Workflow path based on the **Inquiry Status** field
3. Create a **separate workflow path for each record type** — one workflow per record type

### What the workflow controls

| Capability | Purpose |
|---|---|
| **Movement between states** | Draft → Submitted → Signed (etc.) |
| **CRUD access to related entities** | Per stage, can create/edit/delete (e.g., Inquiry Question, Subject Assignment) |
| **Stage Operations** | Different actions appear at different stages |
| **Role-conditional actions** | E.g., "Add Signature" appears only for Responder, not Creator |

### Persona-based actions
A **custom formula field** on the user defines whether they're a `Creator` (Sales Rep) or `Responder` (MSL). The workflow uses this field to gate actions per role.

## Workflow Actions — 3 Types

| Action type | Behavior | Example |
|---|---|---|
| **Update Record** | Change status without opening a component | Move "Draft" → "Submitted" |
| **Open Component** | Trigger an LWC view | "Response Preference Selector", "Inquiry Signature Model" |
| **Custom Action** | Bespoke logic | Customer-defined |

### Open Component — parameters
Open Component actions accept **JSON parameters**:
- Component names must be **hardcoded** (admins can't introduce new components without dev)
- Example: signature model receives a `status` parameter to update Inquiry status to `Signed` after completion

### Add Response Preference Action
Requires the account associated with the inquiry has related:
- `ContactPointAddress`
- `ContactPointEmail`
- `ContactPointPhone`

> **Critical:** The user MUST have **access to the Account field** when creating the inquiry — otherwise downstream actions fail.

## Validation & Checklist Scripts (LWC components)

Validation scripts are deployed as **LWC components** and linked to workflow stage objects. Two types:

| Script type | Behavior | Use case |
|---|---|---|
| **Validation Script** | Returns error if conditions not met → **blocks** state movement | Must have signature before moving to "Signed" |
| **Checklist Script** | Displays icon (pass/fail) → does **NOT block** state movement | Soft reminder; rep can proceed anyway |

### Common validation requirements
- Inquiry Question created (count > 0)
- Subject Assignment exists
- (Before moving Draft → Signed) signature captured

### Custom Validation deployment
1. Write the validation script in JS, formatted per setup-guide CodeText pattern
2. Wrap in an LWC component
3. Deploy to org
4. Reference in the workflow Stage Object configuration

## Signature Capture + Disclaimer Text

### Disclaimer text source
Configured in **Compliance Statement Definition**:
- `Module Type` must equal `Medical Inquiry`
- `Statement Type` must equal `Disclaimer`

> **Sharing:** The Compliance Statement Definition must be **shared** so the Sales Rep user can view the disclaimer text. Common bug: definition exists but record-level sharing is missing → Rep sees no disclaimer.

### Signature flow
1. Rep / MSL clicks Add Signature workflow action (Open Component → `Inquiry Signature Model`)
2. Disclaimer text loads from Compliance Statement Definition
3. Signer signs
4. Component triggers status update via `status` parameter → moves to `Signed`

## Queue-Based Ownership Change

When the Sales Rep submits the inquiry:

### Flow
```
Field Sales App submit
  └── Case (the actual owner) moves to OOTB "Inquiry Queue"
        └── Subject Assignment also moves to queue
              └── Background triggers ensure Inquiry records follow ownership change
                    └── Share record created back to original creator (Sales Rep) — read-only
```

### Key triggers
| Trigger | Purpose |
|---|---|
| **Stage Path Permission Handler** | Enforces edit/create/delete permissions per stage |
| **Case MSL Queue Handler** | Moves Case to Inquiry Queue on submission |
| **Case Change Ownership Handler** | Updates all related records' owners |
| **Case Share to Creator Handler** | Generates share records for inquiry, subject assignment, inquiry question answer → gives Sales Rep read-only access back |

## Troubleshooting

### "Standard Inquiry page opens instead of the multi-entity page"
**Cause:** Standard `New` / `Edit` buttons were not overridden.
**Fix:** Setup → Object Manager → Inquiry → Buttons, Links → override New and Edit with multi-entity create/edit overrides.

### "Submit creates an Inquiry but no Case"
**Cause:** Record-type Name mismatch between Inquiry and Case.
**Fix:** Verify the Case record type has the **EXACT same Name** as the Inquiry record type.

### "Inquiry Questions related list doesn't appear on mobile"
**Cause:** Dynamic Related List was used.
**Fix:** Replace with standard related list. Mobile does not support Dynamic Related Lists for inquiry questions.

### "Answer tab shows no columns"
**Cause:** No field set defined on `InquiryQuestionAnswer`.
**Fix:** Create the field set + reference it in the Generic Related List component configuration.

### "User can't move Draft → Signed"
1. Is a **validation script** preventing it? Check script return value for required preconditions (signature, subject assignment, inquiry questions).
2. Verify the user's persona (Creator vs Responder) matches the action's role gating.
3. Confirm the workflow path's stage operation allows transition to Signed for this record type.

### "Add Response Preference fails"
1. Verify the Account has `ContactPointAddress` + `ContactPointEmail` + `ContactPointPhone`.
2. Confirm the user had **Account field access** when the inquiry was created.

### "No disclaimer text shows during signature"
1. Verify `ComplianceStatementDefinition` exists with `ModuleType = Medical Inquiry`, `StatementType = Disclaimer`.
2. Check **record-level sharing** — the Sales Rep needs access to this record.
3. Confirm Module Type and Statement Type are EXACTLY those strings.

### "After submit, inquiry doesn't show in MSL queue"
1. Verify Case MSL Queue Handler trigger is active.
2. Verify the OOTB "Inquiry Queue" exists and isn't renamed.
3. Check Case Change Ownership Handler — ensures related records follow the owner change.

### "Original creator (Sales Rep) lost access after submit"
1. Verify **Case Share to Creator Handler** trigger is active.
2. Manually inspect `CaseShare` records for the creator — should be `Read` level.

## Reference

- **Source PDF:** Inquiry Setup Guide — Drive doc ID `1vBGI7o61qRB3yev0BelGeOxy8P-BI7ca`
- **Source transcript:** Gemini, Apr 13, 2026 session — doc ID `1tfUd8nvmWMcI9PJKpADmx19nIiXOC1WN`
- **Companion file:** `medical-inquiries-configuration-guide.md` (PM-side baseline)
- **Related — Generic Workflow:** see `generic-workflow/support-engineering-generic-workflow.md` for stage path internals + custom validation/checklist deployment patterns
- **Related — Custom Scripts:** see `custom-scripts/support-engineering-validations-custom-scripts.md` for the LWC pattern used by validation/checklist scripts

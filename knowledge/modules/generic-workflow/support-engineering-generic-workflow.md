# Generic Workflows — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — May 5, 2026
**Audience:** Support engineers
**Source:** Engineering training series (deck + Gemini transcript)
**Presenter:** Srikant Chonnad

## Overview

**Generic Workflows** is a **configuration-driven** system that controls what users can do with a record based on the record's current stage / status. It governs **CRUD permissions** (Create, Edit, Delete) and **available actions** at each stage — all without writing code.

The system is built on **8 entities** that compose into a workflow path: an entity → its picklist field → each picklist value (stage) → operations (CRUD rules) at each stage → optional conditions → actions exposed as buttons.

**Why it matters for support engineers:** When a customer reports "I can't delete this record" or "the button is missing," the root cause is almost always in the workflow path config, not in CRUD permissions or page layouts. CRUD is necessary but not sufficient — both the standard Salesforce CRUD check AND the matching `LifeSciStageOperation` must allow the action.

## Data Model — 8 Entities

```
LifeSciStageObject              (which object is workflow-managed)
    │
    ├── LifeSciStagePath         (1:many) — path = object + record type + controlling field
    │       │
    │       └── LifeSciStageValue (1:many) — one per picklist value
    │               │
    │               └── LifeSciStageOperation (1:many) — CRUD rules + actions for this stage
    │                       │
    │                       ├── LifeSciStageOperationCondn (1:many) — optional conditions
    │                       │
    │                       └── LifeSciStageOperationAction (1:many) — links Action ↔ Operation
    │
    ├── LifeSciStageAction (1:many) — REUSABLE action definitions on the object
    │
    ├── ValidationCustomScriptId ──► LifeScienceCustomScript
    └── ChecklistCustomScriptId ──► LifeScienceCustomScript
```

### Entity-by-entity reference

| Entity | Purpose | Key fields |
|---|---|---|
| **LifeSciStageObject** | Registers an SObject as workflow-managed | `ObjectName`, `ParentObjRelaFieldName`, `IsControlledByStagePath`, `ValidationCustomScriptId`, `ChecklistCustomScriptId` |
| **LifeSciStagePath** | Top-level workflow definition: object + record type + controlling picklist field | `LifeSciStageObjectId`, `FieldApiName`, `StageObjectRecordTypeId`, `Status` (Active/Inactive), `Parameters` (JSON) |
| **LifeSciStageValue** | One record per picklist value of the controlling field — a stage in the workflow | `LifeSciStagePathId`, `FieldValue` |
| **LifeSciStageOperation** | CRUD permissions + rules for a stage. Multiple per stage allowed with different conditions/priorities | `LifeSciStageValueId`, `LifeSciStageObjectId`, `CanCreate`, `CanEdit`, `CanDelete`, `Priority`, `Type` (`WorkflowPath` or `CompoundRelationship`), `ParentStageOperation` (self-ref for child operations) |
| **LifeSciStageOperationCondn** | Field-level conditions that gate an operation | `LifeSciStageOperationId`, `ObjectFieldName`, `Operator`, `ObjectFieldValue` |
| **LifeSciStageAction** | Reusable action definition. Four types: `RecordUpdate`, `PlatformEvent`, `Component`, `CustomAction` | `LifeSciStageObjectId`, `Type`, `FieldApiName`, `FieldValue`, `Parameters`, `Label` |
| **LifeSciStageOperationAction** | Links Action ↔ Stage Operation; controls which actions appear at which stage | `LifeSciStageOperationId`, `LifeSciStageActionId`, `DisplayOrder` |
| **LifeScienceCustomScript** | Validation / checklist JS that runs client-side before action execution | `Name`, `CodeText`, `Type` |

## Admin Configuration — 6 Steps

### Step 1 — Create the Workflow Path
Navigate: **Admin Console → Workflow Configuration → Workflow Paths → New**

Select:
- **Target object** (e.g., `Inquiry`)
- **Record Type** (optional, scopes the path to one RT)
- **Controlling picklist field** (e.g., `Status`)

This **automatically**:
- Creates a `LifeSciStagePath` record
- Creates the underlying `LifeSciStageObject` record (if not already there)
- Populates one `LifeSciStageValue` per picklist value of the controlling field

### Step 2 — Configure Stage Operations per Node
For each stage value, click the stage and create a `LifeSciStageOperation`:
- **CanCreate** / **CanEdit** / **CanDelete** booleans
- **Priority** rank (lower = wins when multiple match)
- Optional **conditions** (next step)

### Step 3 — Create Reusable Actions
**Admin Console → Workflow Actions → New**

Pick a type:

| Action Type | What it does |
|---|---|
| **RecordUpdate** | Updates a specific field on the current record to a specific value (e.g., set `Status = Completed`) |
| **PlatformEvent** | Publishes a Salesforce platform event with field values from the current record. Supports expression substitution. |
| **Component** | Opens a custom Aura/LWC component in a modal |
| **CustomAction** | Navigates to a custom URL with parameters |

Reusable actions are tied to the **driving object** — they show up only when defining operations on that object.

### Step 4 — Associate Actions to Stage Operations
Link `LifeSciStageActions` to `LifeSciStageOperations` via `LifeSciStageOperationAction`. `DisplayOrder` controls button order in the UI.

### Step 5 — (Optional) Assign Custom Scripts
On the **Stage Object** record, assign:

| Script Type | Behavior |
|---|---|
| **Validation Script** | Runs JS before every action button click. Can return error (blocks), warning (confirm prompt), or success (proceeds). |
| **Checklist Script** | Validates checklist completion before allowing the stage transition. |

### Step 6 — Activate the Path
Set `LifeSciStagePath.Status = Active`.

> **Constraint:** Only **one path can be active** per `object + record type` combination.

## Runtime Execution

### Page load — what the LWC renders
1. The `LifeSciStagePathContainer` Aura component (placed on the record page) renders the `workflowPath` LWC.
2. The LWC:
   - Identifies the record's object type and record type
   - Finds the active `LifeSciStagePath` for that combo
   - Reads the controlling field value → determines current stage
   - **Evaluates operation conditions** → finds matching `LifeSciStageOperation`
   - Returns CRUD permissions + available actions for that operation
3. UI displays the **visual stage path** (all stages, current highlighted) + **action buttons** based on the matched operation's linked actions.

### Action button click — execution order
When the user clicks an action button, these execute **in order**:

1. **Validation Script** — if assigned, loads from `LifeScienceCustomScript`, fetches full record, runs JS. Returns error/warning/success.
2. **Component** — if action type is `Component`, renders the custom component.
3. **Checklist** — if a checklist script is assigned, runs checklist validation.
4. **Action** — executes (e.g., RecordUpdate flips the controlling field → record moves to next stage).

### Trigger enforcement (the second CRUD gate)
On record save (insert/update/delete), the **`StagePathPermissionsHandler`** trigger handler fires:

1. Gets the CRUD permissions for the current record from the matching `LifeSciStageOperation`
2. Checks if the operation is permitted at the current stage
3. **If not permitted, blocks the DML** with `record.addError("...")`

## CRITICAL: The Two-Layer CRUD Check

> **CRUD is necessary but not sufficient. The user needs BOTH standard Salesforce CRUD permission AND the stage operation must allow it. If either says no, the operation is blocked.**

```
User clicks Delete on an Inquiry (Status = Signed)
   │
   ├─ 1. Salesforce CRUD check: Does the user have Delete on Inquiry?
   │     → Yes ✓ (granted via profile / permission set)
   │
   ├─ 2. Sharing check: Does the user have access to this specific record?
   │     → Yes ✓
   │
   ├─ 3. Trigger fires → StagePathPermissionsHandler.beforeDelete()
   │     → Looks up LifeSciStageOperation for Inquiry at "Signed" stage
   │     → CanDelete = false
   │     → record.addError("Inquiry - MedicalInquiry cannot be deleted")
   │     → DML BLOCKED ✗
   │
   └─ Result: Delete fails despite user having object-level Delete permission
```

**This is the single most common pattern in support escalations for this feature.**

## Conditions — Same Stage, Different Permissions per User

### The problem
Customer requirement on an Inquiry in `In Review` status:
- **Reviewers** can edit
- **Everyone else** cannot

A single operation per stage can't model this — it would either allow everyone or no one.

### The solution
Create **two operations for the same stage** with different conditions and priorities:

**Operation 1 — "Reviewer Can Edit"** (Priority = 1, most specific)
- Condition: `ContextUserRole__c Equals "Reviewer"`
- `CanEdit = true`

**Operation 2 — "Default Locked"** (Priority = 10, fallback)
- No conditions (matches every record)
- `CanEdit = false`

### Runtime matching
For a **Reviewer**:
- Op 1 conditions match → matched, Priority 1
- Op 2 conditions match (no conditions = always match) → matched, Priority 10
- Both matched → **lowest priority wins** → Op 1 → Edit ALLOWED

For a **Submitter** (non-Reviewer):
- Op 1 conditions don't match → skipped
- Op 2 conditions match → matched, Priority 10
- Only Op 2 matched → Edit BLOCKED

### Multiple conditions on one operation = AND logic
All conditions must pass for the operation to match. Example: `RecordType IN (A, B, C)` AND `Industry = "Life Sciences"`.

### Supported operators
`Equals`, `Not Equals`, `In`, `Not In`, `Equals Null`, `Not Equals Null`, …

### Key Rules
- **No conditions** = matches every record (use as fallback)
- **Multiple conditions** = AND logic (all must pass)
- **Multiple matching operations** = lowest `Priority` wins; ties broken by latest `CreatedDate`
- **No operations match** = ALL operations blocked at this stage

> **The winning operation determines BOTH CRUD permissions AND available actions.** They're a package deal — conditions indirectly drive which buttons appear because they drive which operation wins.

## Multi-Level Operations (Child Entities)

The workflow system can also control CRUD on **related/child objects** — not just the driving object.

### Example
"Can users delete an `InquiryQuestion` from an Inquiry that's in `Signed` status?"

The workflow path is on **Inquiry**, but the InquiryQuestion deletion is controlled by a **child `LifeSciStageOperation`** linked to the parent Inquiry operation via `ParentStageOperationId`.

### Setup
For the parent stage's operation, click "Create Child Operation":
- Select the child object (`InquiryQuestion`)
- Set CRUD booleans
- Optionally add conditions

```
LifeSciStageOperation (parent — for Inquiry "Signed")
  │
  └── LifeSciStageOperation (child — for InquiryQuestion under Inquiry "Signed")
        ├── CanCreate / CanEdit / CanDelete
        └── LifeSciStageOperationCondn (optional)
```

### What you DO need for the child:
- `LifeSciStageObject` (for the child object)
- `LifeSciStageOperation` (child, linked to parent via `ParentStageOperationId`)
- Optionally: `LifeSciStageOperationCondn`

### What you do NOT need for the child:
- A separate `LifeSciStagePath`
- A `LifeSciStageValue`
- `LifeSciStageOperationAction` (child operations are CRUD-only, no buttons)

> **Engineering follow-up from the session (Srikant Chonnad):** the diagram on slide 24 needs correction — the child entities required diagram should NOT show `LifeSciStagePath` and `LifeSciStageValue` as required for children.

## Troubleshooting

### "User can't delete a record they should be able to delete"
**Diagnosis:**
1. Confirm Salesforce CRUD: profile / permission set has Delete on the object
2. Confirm sharing: user has access to the specific record (try opening it)
3. **Confirm the workflow operation allows it:**
   - Identify current stage (read the controlling field value)
   - Query `LifeSciStageOperation` for that stage value where `CanDelete = true` for this user's context
   - If no matching operation: that's the block — adjust priority/conditions or grant delete via a higher-priority operation

### "Action button is missing"
**Diagnosis:**
1. Which operation wins at this stage for this user?
2. Are actions linked to that operation via `LifeSciStageOperationAction`?
3. If wrong operation wins: check conditions on each candidate operation. The lowest-priority matching one's actions are shown.

### "Validation script doesn't run / runs but doesn't block"
**Diagnosis:**
1. Verify a `LifeScienceCustomScript` of type `Validation` is assigned on the **Stage Object** record (not the path or operation)
2. Check the script returns the correct shape (`{type: 'error' | 'warning' | 'success', message: '...'}`)
3. Test in the **execution order** context: validation runs BEFORE component/checklist/action — if your script depends on a checklist field that hasn't been answered yet, it'll see null

### "Multiple operations match — system picked the wrong one"
**Diagnosis:**
1. List all candidate operations and their priorities
2. Lowest priority wins; tie-breaker is latest `CreatedDate`
3. To force the right one to win: lower its priority number OR add a unique condition that eliminates competitors

### "Customer changed picklist values; old workflow stages now mismatch"
**Cause:** `LifeSciStageValue` records were auto-created from the original picklist values. Adding/removing picklist values doesn't auto-sync stage values.
**Fix:** Manually create new `LifeSciStageValue` records (one per new picklist value) OR delete the path and recreate (will re-auto-populate stages from current picklist values).

### "Path won't activate"
**Cause (most common):** Another path is already active for the same `object + record type` combo.
**Fix:** Find and deactivate the conflicting path. Query: `SELECT Id, Name, Status, LifeSciStageObjectId, StageObjectRecordTypeId FROM LifeSciStagePath WHERE Status = 'Active'`.

### "RecordUpdate action doesn't move to the next stage"
**Diagnosis:**
1. Is the action's `FieldApiName` the same as the path's controlling field? Must be.
2. Is the `FieldValue` a valid picklist value of that controlling field?
3. Is a validation script blocking it?
4. Is the trigger handler `StagePathPermissionsHandler` blocking the underlying DML because CanEdit is false at the current stage?

## Reference

- **Source deck:** Generic Workflows in AFLS, Spring '26 — slide ID `1f9nBJoyp5fg_uoL0HWu_GZAXeVFSQCAGA4a6DD5WL5M`
- **Source transcript:** Gemini, May 5, 2026 session — doc ID `1Hg_HXKcFFTxYouVEQ1YnThLuVN6lGuKl`
- **Companion file:** `workflow-mgmt-demo-talk-track.md` in this module (PM-side baseline)
- **Related — Custom Scripts:** see `custom-scripts/support-engineering-validations-custom-scripts.md` for JS execution context and namespace handling

---
name: afls-events-management
description: Guides AFLS Events Management configuration for web and mobile apps. Use when user asks about Managed Events, MngEvent, Speaker Events, event participants, event resources, event budgets, estimated expenses, event workflow path / stage path / Stage Objects, the Draft → Pending Approval → Approved progress bar, event venues / locations, or LifeSciStageObject / LifeSciStagePath / LifeSciStageValue / LifeSciStageOperation records.
---

## How to Answer Events Management Questions

**Always call MCP tools to get sourced documentation and verify schema before answering.** The Events Management feature was new in AFLS 262 and is sparsely documented — assume your training data is incomplete and verify with `describe_sobject` and `run_soql`.

| User asks about... | Call this tool |
|---|---|
| General concepts, workflow path, checklist scripts | `get_afls_module_docs({ module: "generic-workflow" })` |
| Specific event topic (any) | `search_afls_knowledge({ query: "<topic>" })` |
| Schema of a specific event entity | `describe_sobject({ objectName: "MngEvent" })` |
| Existing data | `run_soql({ query: "SELECT ... FROM MngEvent ..." })` |
| Picklist values on a Status / Mode / Type field | `run_apex` with `Schema.<Object>.<Field>.getDescribe().getPicklistValues()` |
| Mobile cache config | `list_db_schema({ filter: "MngEvent" })` |
| Validating mobile config | `audit_mobile_config()` |

---

## Data Model — the headline entities

The Events feature centers on `MngEvent` ("Managed Event"). It is a **standard AFLS entity**, not custom (no `__c` suffix). Sub-entities follow a `MngEvent*` prefix.

| Entity | Purpose | Notes |
|---|---|---|
| **`MngEvent`** | The event record itself (Speaker Event, Webinar, etc.) | Has Status, Mode, EventStructure, EstimatedBudget, ComplianceAgreementStatus, EventLocationId (Account or Location), and the workflow `Status` field |
| **`MngEventType`** | Catalog of event types (Speaker Event, Webinar) | TargetTemplate ∈ `SpeakerMeeting`, `Presentation`, `DisplaysAndExhibits`, `Sponsored` |
| **`MngEventParticipant`** | Speakers + attendees on an event | `ParticipantId` is polymorphic (Account/Contact/Lead/Expert/User/PartyProfile). `ParticipantType` is free-form picklist. `EventMgmtPtcpTypeRoleMapId` is the only writable type/role linkage — `EventMgmtParticipantTypeId` and `EventMgmtParticipantRoleId` are auto-derived (read-only on insert). |
| **`MngEventResource`** | Venue, catering, A/V, speaker travel | `ResourceType` is free-form picklist (e.g., Venue, Catering, AudioVisual, Travel). `SelectedLocationId` references `Location`. |
| **`MngEventProduct`** | Products on an event | Uses `ProductReferenceRecordId` (polymorphic), **not** `ProductId` |
| **`MngEventBudget`** | Junction Event ↔ Budget | Has `AllocatedAmount` |
| **`MngEventTerritory`** | Junction Event ↔ Territory2 | |
| **`MngEventSession`** | Sub-sessions within an event | |
| **`EstimatedExpense`** | Estimated expense lines | Linked to event via polymorphic `ExpenseSourceId` (NOT `MngEventId`) |
| **`EstimatedExpensePtcpAlloc`** | Allocates an EstimatedExpense across participants | `MngEventId` is **read-only / auto-derived**; `ParticipantId` is the writable lookup to `MngEventParticipant` |

### Configuration entities

| Entity | Purpose | Required fields on insert (besides Name) |
|---|---|---|
| `EventMgmtParticipantType` | Speaker / Attendee categories | `Type` (free-form), `StandardType` (Expert / Attendee / Colleague / etc.) |
| `EventMgmtParticipantRole` | KOL / Tier 1 / Internal Medicine / etc. | `Role` (free-form), `StandardRole` (Expert / Attendee / Organizer / etc.) |
| `EventMgmtPtcpTypeRoleMap` | Junction: Type ↔ Role per `MngEventTypeId` | `Name`, `MngEventTypeId`, `EventMgmtParticipantTypeId`, `EventMgmtParticipantRoleId`, `IsActive` |
| `EventMgmtSvcSpclzn` / `Tier` | Speaker service classification + tiers | |
| `EventMgmtFairMarketValue` | FMV ranges per tier | |
| `ExpenseType` | Dinner / F&B / Speaker Fee / A/V / Travel | `AllocationType` ∈ `GroupAllocation`/`IndividualAllocation`/`MultipleAllocations`/`NotApplicable`; `Classification` ∈ `Estimate`/`Actual`; `ExpenseAvailabilityType` ∈ `Visit`/`ManagedEvent`/`ManagedEventAndVisit` |
| `Budget` / `BudgetMngEventType` | Event budgets and their event-type linkage | |

### Sharing model
| Entity | OWD |
|---|---|
| `LifeSciStageObject` | Private |
| `LifeSciStageAction` | Private |
| `LifeSciStagePath` | ControlledByParent |
| `LifeSciStageValue` | ControlledByParent |
| `LifeSciStageOperation` | ControlledByParent |

The two `Private` entities **must** be shared (owner-based rule with `<allInternalUsers/>` on both `<sharedFrom>` and `<sharedTo>` at Read access) or non-admin users see the error: *"We couldn't load the workflow path for this record. Ask your Salesforce admin for help."*

Criteria-based sharing is **not supported** on these — use `<sharingOwnerRules>`.

---

## Workflow Path (the Draft → Pending Approval → Approved progress bar)

The visual stage tracker shown on the `MngEvent` record page is driven by Generic Workflow (AFLS Workflow Management), **not** by picklist values alone.

### Required artifacts (in order)

1. **Picklist values on `MngEvent.Status`** — the controlling field. `MngEvent.Status` is a standard field tied to the `ManagedEventStatus` `StandardValueSet`. Add stage values via metadata deploy:

```xml
<!-- standardValueSets/ManagedEventStatus.standardValueSet-meta.xml -->
<StandardValueSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <sorted>false</sorted>
    <standardValue><fullName>Draft</fullName><default>true</default><label>Draft</label></standardValue>
    <standardValue><fullName>Pending Approval</fullName><default>false</default><label>Pending Approval</label></standardValue>
    <standardValue><fullName>Approved</fullName><default>false</default><label>Approved</label></standardValue>
    <standardValue><fullName>Closed</fullName><default>false</default><label>Closed</label></standardValue>
    <standardValue><fullName>Cancelled</fullName><default>false</default><label>Cancelled</label></standardValue>
</StandardValueSet>
```

⚠ Do **not** try to add a `<valueSet>` to `MngEvent.Status` field XML — `Status` is a standard field and the metadata API rejects custom valuesets on standard fields with: *"You cannot define picklist, globalPicklist, or valueSet on a standard field. Use StandardValueSet instead."*

2. **`LifeSciStageObject`** — registers MngEvent as workflow-enabled.

```apex
LifeSciStageObject so = new LifeSciStageObject(
    Name = 'MngEvent',
    ObjectName = 'MngEvent',
    IsControlledByStagePath = true
);
insert so;
```

3. **`LifeSciStagePath`** — ties the stage object to a controlling field.

```apex
LifeSciStagePath sp = new LifeSciStagePath(
    Name = 'Managed Event Workflow',
    LifeSciStageObjectId = so.Id,
    FieldApiName = 'Status',     // NOT 'StatusFieldApiName'
    Status = 'Active'
);
insert sp;
```

4. **`LifeSciStageValue`** — one record per stage. **Order is implicit by creation order**; there is no `OrderNumber` field. Insert in workflow order.

```apex
insert new List<LifeSciStageValue>{
    new LifeSciStageValue(Name='Draft',            FieldValue='Draft',            LifeSciStagePathId=sp.Id),
    new LifeSciStageValue(Name='Pending Approval', FieldValue='Pending Approval', LifeSciStagePathId=sp.Id),
    new LifeSciStageValue(Name='Approved',         FieldValue='Approved',         LifeSciStagePathId=sp.Id),
    new LifeSciStageValue(Name='Closed',           FieldValue='Closed',           LifeSciStagePathId=sp.Id),
    new LifeSciStageValue(Name='Cancelled',        FieldValue='Cancelled',        LifeSciStagePathId=sp.Id)
};
```

5. **`lsc4ce:LifeSciStagePathContainer` component** placed on the Lightning Record Page (FlexiPage) for `MngEvent`.

6. **Sharing rules** for `LifeSciStageObject` and `LifeSciStageAction` (see Troubleshooting section).

7. **`LifeSciStageOperation` + `LifeSciStageOperationAction`** records per stage to control per-stage CRUD permissions and the "Action ▼" buttons (see next section).
8. **(Optional)** `LifeScienceCustomScript` of type Checklist linked to `LifeSciStageObject.ChecklistCustomScriptId` for the per-stage "Event dates should not be in the past / Select location / etc." checklist popup.

---

## Stage Actions: the "Action ▼" buttons (Add Speaker, Approve, etc.)

The buttons next to the stage path bar — Add Speaker, Add Attendee, Approve, Submit, etc. — are **NOT** Quick Actions or FlexiPage components. They come from a 4-table chain in the Generic Workflow framework:

```
LifeSciStageAction       — defines an action
        ↓ via LifeSciStageOperationAction (junction)
LifeSciStageOperation    — one per stage; sets per-stage CRUD
        ↓
LifeSciStageValue        — the stage the operation belongs to
```

These are managed via **Setup → Workflow Actions** in Admin Console, or directly via Apex DML on the SObjects.

### LifeSciStageAction.Type values

| Type | What it does | Required fields |
|---|---|---|
| `Component` | Open an LWC modal (Add Speaker, Add Signature, etc.) | `Parameters` = `{"componentConfiguration":{"name":"<namespace>:<lwcName>","parameters":{...}}}` |
| `RecordUpdate` | Update a field on the record (Submit / Approve / Cancel) | `FieldApiName`, `FieldValue` |
| `PlatformEvent` | Publish a platform event | `Parameters` = `{"platformEventConfiguration":{"name":"<eventApiName>","fieldValueMap":{...}}}` |
| `CustomAction` | Invoke an AFLS `CustomAction_*` (URL/App/Utterance) | `Parameters` = `{"customActionConfiguration":{"developerName":"CustomAction_..."}}` |

### MngEvent action library — known good launcher LWC names

| Action label | Component name |
|---|---|
| Add Speaker | `lsc4ce:editMngEventExpertsLwcLauncher` |
| Add Attendee | `lsc4ce:editMngEventAttendeesLwc` |
| Add Colleague | `lsc4ce:editMngEventColleaguesLwcLauncher` |
| Edit Budget | `lsc4ce:editMngEventBudgetModalLauncher` |

These launcher LWCs are **not** exposed to Lightning App Builder — you cannot drag them onto a FlexiPage. They MUST be invoked via a `LifeSciStageAction` of Type=Component to render as workflow buttons.

### LifeSciStageOperation

One operation per stage. Pattern from MIRF Inquiry workflow that we replicated for MngEvent:

```apex
new LifeSciStageOperation(
    Name='ME Draft',
    Type='WorkflowPath',                       // valid: Rule | WorkflowPath | CompoundRelationship
    LifeSciStageObjectId = stageObjectId,
    LifeSciStageValueId  = draftValueId,
    CanCreate=true, CanEdit=true, CanDelete=true,
    Priority=1
);
```

Terminal stages (Closed, Cancelled) typically have all three Can* flags = false.

### LifeSciStageOperationAction (junction)

```apex
new LifeSciStageOperationAction(
    Name = 'Draft - Add Speaker',
    LifeSciStageOperationId = draftOperationId,
    LifeSciStageActionId    = addSpeakerActionId,
    DisplayOrder            = 1
);
```

`DisplayOrder` controls left-to-right ordering of buttons in the Action dropdown.

---

## OMCC / DB Schema for Events

Mobile sync requires `LifeSciConfigRecord` (`DbSchema_*`) entries for the relevant entities. Use the `afls-db-schema` skill's tools (`create_db_schema`, `list_db_schema`, etc.) — see that skill for full rules.

### Typical Events DbSchema set

| Object | Type | OneWaySync | Reason |
|---|---|---|---|
| `MngEvent` | DATA | false | Reps create/edit |
| `MngEventParticipant` | DATA | false | Recruit attendees on iPad |
| `MngEventResource` | DATA | false | Capture venue / catering on the go |
| `MngEventProduct` | DATA | false | |
| `MngEventTerritory` | DATA | false | |
| `MngEventBudget` | DATA | false | |
| `EstimatedExpense` | DATA | false | |
| `MngEventType` | CONFIGURATION | true | Lookup |
| `EventMgmtParticipantType` | CONFIGURATION | true | Lookup |
| `EventMgmtParticipantRole` | CONFIGURATION | true | Lookup |
| `EventMgmtPtcpTypeRoleMap` | CONFIGURATION | true | Lookup |
| `Budget` | CONFIGURATION | true | Lookup |
| `ExpenseType` | CONFIGURATION | true | Lookup |
| `Location` | CONFIGURATION | true | Venues |

### Objects deliberately NOT in OMCC

These objects sync to mobile **automatically** alongside their parents. Adding `DbSchema_*` records for them causes mobile cache generation to fail.

- **`BudgetMngEventType`** — junction synced when both Budget and MngEventType are in cache
- **`EstimatedExpensePtcpAlloc`** — child rows synced alongside their parent `EstimatedExpense`

---

## Permission Set (Field Sales Rep persona)

A demo permset granting Create/Read/Edit on the Event entities. The metadata API will silently drop dependent permissions if Read-only requirements aren't met — include these dependency objects:

```xml
<objectPermissions><object>Account</object><allowRead>true</allowRead>...</objectPermissions>
<objectPermissions><object>Contact</object><allowRead>true</allowRead>...</objectPermissions>
<objectPermissions><object>Product2</object><allowRead>true</allowRead>...</objectPermissions>
```

Without them the deploy fails with:
- *"Read on MngEventParticipant requires Read on at least one of these objects: Lead, Account, PartyProfile, Contact, Expert"*
- *"Permission Read Account depends on permission(s): Read Contact"*
- *"Read on MngEventProduct requires Read on at least one of these objects: ProductCategory, LifeSciMarketableProduct, Product2"*

---

## Page Layout & FlexiPage gotchas

### MngEvent Page Layout
The OOTB layout `MngEvent-lsc4ce__Life Science Managed Event Layout` ships with two issues:
1. `<excludeButtons>Submit</excludeButtons>` — invalid action; metadata deploy errors on `no such standard action: Submit`. Remove it.
2. `<field>LocationId</field>` with `<behavior>Edit</behavior>` — `LocationId` is read-only on `MngEvent`. The auto-generated detail panel chokes with: *"Failed to get generated module for forceGenerated:detailPanel_MngEvent___012000000000000AAA___Full___View"*. Replace `LocationId` with `EventLocationId` (writable, references Account or Location).

### FlexiPage tab content
`force:relatedListSingleContainer` (the per-list filtered version) requires both `relatedListApiName` AND `parentFieldApiName` in the form `<ChildObject>.<LookupField>` (e.g., `MngEventParticipant.MngEventId`). If either is wrong the deploy fails with a generic *"unexpected error"*.

If the per-list filtering won't deploy, fall back to `force:relatedListContainer` (multi-list, no parameters) on each tab — it shows all related lists. Less precise, but deploys.

`runtime_sales_activities:recordHistory` does **not** exist in AFLS orgs (it's Sales Cloud) — for History tab content use `force:relatedListContainer` or a single-list with `parentFieldApiName=MngEventHistory.MngEventId`.

### Project sourceApiVersion
A project deploying `MngEvent` metadata **must** have `sourceApiVersion: "67.0"` (or higher) in `sfdx-project.json`. With a parent-directory `sfdx-project.json` at v62 the deploy validator rejects MngEvent with: *"The object type you specified MngEvent is invalid."*

---

## Troubleshooting

### "We couldn't load the workflow path for this record. Ask your Salesforce admin for help."

**Cause:** User's profile doesn't have access to `LifeSciStageObject` and/or `LifeSciStageAction` records (both Private OWD). Even with object CRUD perms on `MngEvent` and the right `lsc4ce:LifeSciStagePathContainer` on the FlexiPage, the path won't render.

**Fix:** Deploy owner-based sharing rules. Criteria-based sharing is not supported on these entities.

```xml
<!-- sharingRules/LifeSciStageObject.sharingRules-meta.xml -->
<SharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <sharingOwnerRules>
        <fullName>All_Stage_Objects_Read</fullName>
        <accessLevel>Read</accessLevel>
        <label>All Stage Objects - Read All Internal</label>
        <sharedTo><allInternalUsers></allInternalUsers></sharedTo>
        <sharedFrom><allInternalUsers></allInternalUsers></sharedFrom>
    </sharingOwnerRules>
</SharingRules>
```

Same shape for `LifeSciStageAction.sharingRules-meta.xml`. Sharing recalculation may take a minute on large orgs.

### "Failed to get generated module for forceGenerated:detailPanel_MngEvent..."

The Lightning auto-generated detail panel can't render the page layout. Most common cause: a layout field marked `<behavior>Edit</behavior>` that is actually read-only on the underlying schema (e.g., `MngEvent.LocationId`). Fix the layout and redeploy. Hard-refresh the browser to bust the generated module cache.

### Mobile cache generation fails: "Unable to read SObject &lt;X&gt; over REST"

The cache generator runs as the assigned profile. If that profile lacks Read on any object referenced by an *active* `DbSchema_*` record, the run fails. Check ObjectPermissions for that profile, grant the missing perm via permset, OR disable the offending DbSchema record.

Common offenders unrelated to Events but seen in the same org: `PrstContentDefinition`, `PrstCntntDefAssignment`, `PresentationContent`, `Report`. Note that some standard objects' perms are silently dropped at deploy time even when listed in profile/permset XML — verify with a SOQL on `ObjectPermissions` after deploy:

```sql
SELECT SobjectType, PermissionsRead FROM ObjectPermissions
WHERE Parent.Name = 'CLM_Read_Access'
```

### "Invalid field MngEvent.Status for MngEvent" when clicking a workflow button

The `LifeSciStageAction.FieldApiName` for a `RecordUpdate`-type action expects **the field name only, no object prefix** for non-Case-derived stage objects.

```
✓ FieldApiName = 'Status'                  // for MngEvent
✗ FieldApiName = 'MngEvent.Status'         // fails at click-time
✓ FieldApiName = 'Case.Status'             // ONLY for Inquiry/Case-based objects (MIRF pattern)
```

The `Object.Field` form in MIRF works because Inquiry uses `Case` under the hood. Don't generalize the prefix — it depends on the underlying entity.

### "You do not have access to the Apex class named 'lsc4ce.MngEventPresentationController'"

LWCs from the lsc4ce managed package require Apex class access on their controllers. The class accesses XML uses **double-underscore namespace format**:

```xml
<classAccesses>
    <apexClass>lsc4ce__MngEventPresentationController</apexClass>
    <enabled>true</enabled>
</classAccesses>
```

⚠ The `lsc4ce.MngEventPresentationController` (dot-notation) form fails the deploy with `no ApexClass named ... found`. Always use `<namespace>__<ClassName>` for managed-package class accesses in profile/permset XML.

Common Event Management classes that need access:
- `lsc4ce__MngEventPresentationController` (Managed Event Presentations LWC)
- `lsc4ce__EditMngEventExpertsController` (Add Speaker)
- `lsc4ce__EditMngEventAttendeesController` (Add Attendee)
- `lsc4ce__EditMngEventColleaguesController` (Add Colleague)
- `lsc4ce__EditMngEventBudgetController` (Edit Budget)

### Add Speaker / Add Attendee modal is empty when invoked from Stage Action

Two distinct gotchas usually compound:

**1. Wrong LWC variant.** Stage Actions of `Type=Component` need the **modal** LWC, not the **launcher** LWC. Launchers (`lsc4ce:editMngEventExpertsLwcLauncher`) are button-renderers designed to be placed directly on a FlexiPage; they require host-page DOM context the workflow framework doesn't provide. Click is a no-op (no SOQL, no modal). Switch to:
- `lsc4ce:editMngEventExpertsLwc` (Add Speaker)
- `lsc4ce:editMngEventAttendeesLwc` (Add Attendee)
- `lsc4ce:editMngEventColleaguesLwc` (Add Colleague)
- `lsc4ce:editMngEventBudgetModal` (Edit Budget)

**2. Modal requires parent record id explicitly passed.** The framework does NOT auto-inject. Without it the modal opens then errors "MngEvent ID is required". Pass via the `parameters` JSON:

```json
{"componentConfiguration":{"name":"lsc4ce:editMngEventExpertsLwc","parameters":{"mngEventId":"<recordId>"}}}
```

The placeholder syntax for `<recordId>` from the page context isn't documented; testing showed a literal id works. Hard-coding the demo event id is a fast path; for a multi-event setup you'd need to find the runtime substitution token (likely `{!recordId}` but unconfirmed in this org).

**3. Expert sharing is Account-scoped.** `Expert.InternalSharingModel = ControlledByParent` (parent = `AccountId`, Account OWD = Private). The user only sees Experts whose Account they have Read on. For demos: link Experts to HCPs in the persona's territory (or add an owner-based Account sharing rule with `<allInternalUsers/>`). Verify with:

```sql
SELECT RecordId, HasReadAccess FROM UserRecordAccess
 WHERE UserId = '<demoUserId>'
   AND RecordId IN (SELECT AccountId FROM Expert)
```

If `HasReadAccess=false` → linked Expert is invisible to the user even with CRUD on Expert.

### Apex class accesses required for the four launcher modals

Add to the Event_Demo permset (use `<namespace>__<ClassName>` form):

```
lsc4ce__EditMngEventExpertsController       — Add Speaker
lsc4ce__EditMngEventAttendeesController     — Add Attendee
lsc4ce__EditMngEventColleaguesController    — Add Colleague
lsc4ce__EditMngEventBudgetController        — Edit Budget
lsc4ce__MngEventEligibleExpertServiceController  — eligible-expert query helper
lsc4ce__MngEventExpertsController, lsc4ce__MngEventAttendeesController, lsc4ce__MngEventColleaguesController, lsc4ce__MngEventNonProfiledAttendeesController, lsc4ce__MngEventWriteInsController, lsc4ce__MngEventColleagueTypeController  — supporting controllers
lsc4ce__MngEventExpensesController, lsc4ce__MngEventExpenseAllocationsController, lsc4ce__MngEventExpenseTypeSelectorController  — expense LWCs
lsc4ce__MngEventValidatorController  — workflow validator
lsc4ce__MngEventPresentationController  — Managed Event Presentations LWC (Product & Topic tab)
```

Object Reads (on top of CRUD on the Mng* objects):

```
Expert, EventMgmtSvcSpclzn, EventMgmtSvcSpclznTier, ExpertEventMgmtSvcSpclzn, ExpertSubject, Subject (dependency), EventMgmtFairMarketValue
```

### `EventMgmtSvcSpclzn` insert fails: "Required fields are missing: [ServiceReferenceId]"

The describe says `ServiceReferenceId` is not required, but the runtime validator does require it. The field is polymorphic to `Product2 | ProductCategory` — pass any active product/category id. Note `ProductId` is read-only (auto-derived when ServiceReferenceId is a Product2).

### Stage values appear in the wrong order

`LifeSciStageValue` has no order field. Order is determined by **insert order** (creation timestamp). To re-order, delete and reinsert in the desired sequence.

### `MngEvent` insert fails with `REQUIRED_FIELD_MISSING [Name, MngEventTypeId]`

The describe says no required fields, but the runtime validator requires `Name` and `MngEventTypeId`. Same pattern for `EventMgmtPtcpTypeRoleMap` (requires `Name` + `MngEventTypeId`) and `MngEventParticipant` (requires `Name`). Trust the runtime, not the describe.

### `MngEventProduct.ProductId does not exist`

Use `ProductReferenceRecordId` (polymorphic). Same pattern: `EstimatedExpense` parent is `ExpenseSourceId`, not `MngEventId`.

### `MngEventParticipant.EventMgmtParticipantTypeId is not writeable`

`EventMgmtParticipantTypeId` and `EventMgmtParticipantRoleId` are auto-derived from `EventMgmtPtcpTypeRoleMapId`. Set only the map; do not set the type/role IDs directly. Also do **not** set `ParticipantRoleId` to an `EventMgmtParticipantRole.Id` — that field references a separate `ParticipantRole` entity, which fails with `id value of incorrect type`.

### `EstimatedExpensePtcpAlloc.MngEventId is not writeable`

`MngEventId` is auto-derived. Set only `EstimatedExpenseId`, `ParticipantId`, `Amount`.

### Apex won't compile: "Invalid constructor syntax, name=value pairs can only be used for SObjects: System.Location"

`Location` collides with `System.Location` (a geo class) in Apex. Use the fully qualified `Schema.Location`:

```apex
Schema.Location v = new Schema.Location(Name='Bridgewater Manor', LocationType='Venue');
```

SOQL also can't use `Schema.Location` directly — use dynamic query: `Database.query('SELECT Id FROM Location WHERE ...')`.

---

## Tool Usage Rules

### Correct entity names
| Correct | Wrong (NEVER use) |
|---|---|
| `MngEvent` | `ManagedEvent`, `MngEvent__c`, `Event` (that's the standard activity) |
| `MngEventParticipant` | `MngEventAttendee`, `EventAttendee` |
| `MngEventResource` | `MngEventVenue`, `EventVenue` |
| `EstimatedExpense` | `MngEventExpense`, `EventExpense__c` |
| `EstimatedExpensePtcpAlloc` | `EstimatedExpenseAllocation` |
| `LifeSciStageObject` | `WorkflowStageObject`, `StageObject__c` |
| `LifeSciStagePath` | `WorkflowPath`, `StagePath__c` |
| `LifeSciStageValue` | `StageValue__c` |
| `EventMgmtPtcpTypeRoleMap` | `EventMgmtParticipantTypeRoleMap` (close, but the API name is the abbreviated form) |

### Tool restrictions
- **DO NOT** try to query `LifeSciConfigRecord` or `LifeSciConfigFieldValue` via standard SOQL — use the Tooling API or the `list_db_schema` / `get_db_schema` MCP tools.
- **DO NOT** suggest custom valuesets on `MngEvent.Status` — use the `ManagedEventStatus` `StandardValueSet`.
- **DO NOT** assume Lightning App Builder or Admin Console UI can create the workflow path — `LifeSciStageObject`/`LifeSciStagePath`/`LifeSciStageValue` records are insertable via Apex/SOQL DML.
- **DO NOT** try to drag `lsc4ce:editMngEvent*LwcLauncher` LWCs from App Builder — they're not exposed for direct placement. Wire them via `LifeSciStageAction` of Type=Component instead.
- **DO NOT** use dot-notation for managed-package class access (`lsc4ce.MngEventPresentationController`) — always double-underscore (`lsc4ce__MngEventPresentationController`).
- **DO NOT** prefix `LifeSciStageAction.FieldApiName` with the object name for `MngEvent` — use `Status`, not `MngEvent.Status` (the MIRF `Case.Status` pattern is Case-specific).

### Configuration mode
When the user asks to set up Events Management, **ask which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "generic-workflow" })` and `search_afls_knowledge` for relevant terms.
2. **Walk me through it** — guided setup (below).

### Guided setup workflow

#### Step 1: Check current state
```
list_db_schema({ filter: "MngEvent" })
run_soql({ query: "SELECT Id, Name FROM MngEventType" })
run_soql({ query: "SELECT Id, Name, ObjectName FROM LifeSciStageObject WHERE ObjectName = 'MngEvent'" })
```

#### Step 2: Report findings
Summarize: do MngEventType records exist? Is the StageObject registered? Are the 5 stages defined? Is the FlexiPage Active? Are sharing rules in place?

#### Step 3: Propose changes
For each missing piece, propose the fix and wait for user confirmation.

#### Step 4: Apply changes
Insert config records via `run_apex` (with savepoints + rollback), deploy XML metadata via `sf project deploy` for layouts/FlexiPages/sharingRules/StandardValueSets.

#### Step 5: Verify
- Confirm records exist
- Open an event in the browser to see the bar render
- If mobile: regenerate `generate_mobile_metadata_cache` for the relevant profile

---

## When to defer to other skills
- **Mobile sync issues / OMCC** → use `afls-db-schema` and `afls-mobile-validation` skills.
- **Custom validation / checklist scripts** (the per-stage popup) → use `afls-custom-scripts` skill.
- **Permission set authoring patterns** → use `afls-user-management` skill.
- **CLM presentations on the Intelligent Content tab of an event** → use `afls-intelligent-content` skill.

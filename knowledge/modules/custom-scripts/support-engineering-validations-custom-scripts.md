# Validations using Custom Scripts — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Mar 24, 2026
**Audience:** Support engineers
**Source:** Engineering training series (deck + transcript)
**Presenter:** Srikant Chonnad

## Overview

Agentforce for Life Sciences (AFLs / AFLS4CE) supports **three types of custom scripts** that let admins inject JavaScript validation logic into workflow transitions and visit actions. Custom Scripts run on the mobile device (and in web), are deployed as a headless LWC, and are executed by the mobile script engine using a fixed set of context variables.

### The Three Script Types

| Type | When it fires | Behavior |
|---|---|---|
| **Validation** | On workflow status transition (action button tap) | **Blocks** the user with a toast error if validation fails. Requires a configured Life Science Stage path. |
| **Workflow-Dependent Checklist** | When user clicks the info (ⓘ) icon next to an action | **Does not block.** Shows pass/fail results in an informational modal. User can still proceed and see the actual error. |
| **Visit Action Validation** | On Visit Sign / Submit action | Validates visit data (and related entities like Provider Visit) at the moment of sign/submit. |

> A fourth type — Custom Permission–based — existed in OCE but is **not currently supported in AFLS4CE**, because OCE custom permissions were migrated to boolean fields on settings, and this particular permission did not migrate.

## Prerequisites — Wiring a Script to a Workflow

For **validation** and **checklist** scripts:
1. A **Life Science Stage** record must exist for the entity, with the `validation script custom script ID` (or checklist equivalent) column set to the ID of the Life Science Custom Script record.
2. The entity must have a **Life Science Stage Path** configured (controlling field for the workflow). **If no path is found, the script will not execute.**
3. The end user must have **read access to the script record** — otherwise the script is silently skipped (no validation runs).

For **visit action validation**: link the script to the appropriate Visit configuration; no Life Science Stage Path required.

## JavaScript Execution Context

When a custom script runs, four variables are available in the JS scope:

| Variable | Async? | Purpose |
|---|---|---|
| `record` | sync | The current entity record. Holds field values, record type, context data, and UID. |
| `user` | sync | The current user. Field values + Salesforce ID. No record type / context data. |
| `db` | **async (always `await`)** | Query the database for any object — by ID, by WHERE clause, by ConditionBuilder, or all rows. Results are cached. |
| `env` | sync | Action metadata: `actionName`, `fromStatus`, `toStatus`. Relevant for workflow scripts; mostly irrelevant for visit action validation. |

### Namespace-Prefix Methods vs. No-Namespace Methods

Every accessor method (`stringValue`, `numValue`, `rowById`, `query`, etc.) has **two variants**:

- **Default (namespace-prefixed)** — e.g. `record.stringValue('MyField__c')` → automatically prefixed with `LSC4C__` if the field ends in `__c`. Use for **managed-package fields** (fields shipped in the package).
- **`noNs_` variant** — e.g. `record.noNs_stringValue('MyField__c')` → no namespace prefix added. Use for **customer-created custom fields** (created in the customer's org, not in the package).

> Using the wrong variant returns `null` silently. This is the #1 source of "my validation isn't working" tickets.

For **standard objects/fields** (no `__c`), either variant works because no prefix is added.

### `record` methods (selected)

- `record.stringValue('ApiName')` — string field
- `record.numValue('ApiName')` — numeric field
- `record.stringValue('uid')` — Salesforce record ID
- `record.getRecordType()` — record type developer name
- `record.getContextData()` — related entity payload (e.g., for visit: includes `ProviderVisit`, `Visit`)

### `user` methods

- `user.stringValue('ApiName')` — any user field
- `user.stringValue('uid')` — current user's Salesforce ID

### `db` methods (ALL async — always `await`)

```js
// Single row by ID
let inquiry = await db.rowById('Inquiry', miId);

// Query with simple WHERE clause
let questions = await db.query('InquiryQuestion', "InquiryId = '" + miId + "'");

// Query with ConditionBuilder (preferred for complex / IN clauses)
let answers = await db.query(
  'InquiryQuestionAnswer',
  await new ConditionBuilder('InquiryQuestionAnswer',
    new AndCondition().add(new SetCondition('InquiryQuestionId', 'IN', questionIds))
  ).build()
);

// All rows of an entity
let allTopics = await db.rowsByEntity('SubjectAssignment');

// No-namespace variant (customer custom objects/fields)
let account = await db.noNs_rowById('Account', accountId);
```

**Results are cached** — repeated calls with the same parameters do not hit the server again.

### `env` methods

- `env.getOption('actionName')` — the **label** of the workflow action (e.g., `"Add Signature"`, not `"Add_Signature"`)
- `env.getOption('fromStatus')` / `env.getOption('toStatus')` — source/target workflow states

> **Common bug:** Using the underscored API value (`Add_Signature`) in a `switch` instead of the label (`Add Signature`). The script enters the `default` branch silently and no validation runs.

## Walkthrough: Three Script Templates

### 1. Validation Script (Medical Inquiry — blocks transition)

```js
(() => {
  let actionName = env.getOption('actionName');
  let miId = record.stringValue('uid');

  async function hasQuestions() {
    let miqs = await db.query('InquiryQuestion', "InquiryId = '" + miId + "'");
    return {
      title: miqs && miqs.length ? 'success' : 'Please add Inquiry Questions',
      status: miqs && miqs.length ? 'success' : 'error'
    };
  }

  async function isRespPrefAdded() {
    let mi = await db.rowById('Inquiry', miId);
    return {
      title: 'Please add a response preference',
      status: mi.stringValue('ResponseContactPointRecId') ? 'success' : 'error'
    };
  }

  async function isSigned() {
    let sig = await db.query('DigitalSignature', "ParentId = '" + miId + "'");
    return {
      title: sig && sig.length ? 'success' : 'Please provide a signature',
      status: sig && sig.length ? 'success' : 'error'
    };
  }

  let result = [];
  switch (actionName) {
    case 'Add Signature': result = [hasQuestions(), isRespPrefAdded()]; break;
    case 'Submit':        result = [isSigned()]; break;
    default:              result = [];
  }
  return result;
})();
```

**Behavior:** On status transition, every returned `error` shows up as a blocking toast (using the `title` as the message). Multiple errors stack.

### 2. Checklist Script (informational — does NOT block)

```js
(() => {
  let toStatus = env.getOption('toStatus');
  let respId = record.noNs_stringValue('ResponseContactPointRecId');

  async function validateResponseContactPoint() {
    if (!respId) {
      return { title: 'Response Contact Point should be set.', status: 'error' };
    }
    return { title: 'Response Contact Point is set.', status: 'success' };
  }

  switch (toStatus) {
    case 'Submitted':
      return [validateResponseContactPoint()];
    default:
      return [{ title: 'No validation for this status.', status: 'success' }];
  }
})();
```

**Behavior:** Returns an **array** of `{title, status}` objects — UI renders each as a check/cross in an info modal next to the action. User can still tap the action button and proceed; the actual workflow blocking error (if any) appears as a toast.

### 3. Visit Action Validation Script

```js
(() => {
  let results = [];
  let ctx = record.getContextData() || {};
  let visitData = ctx["ProviderVisit"] || {};
  let nextObjective = visitData["NextProviderVisitObjective"];

  if (!nextObjective) {
    results.push({
      status: "error",
      title: "Next Visit Objective is required before submitting."
    });
  }

  if (results.length === 0) {
    results.push({ status: "success", title: "Visit submitted successfully" });
  }
  return results;
})();
```

**Behavior:** Uses `record.getContextData()` to read related-entity fields (e.g., `ProviderVisit.NextProviderVisitObjective`) — these are not available on `record` directly because they belong to a related entity in the visit context.

## Deployment

### Step 1: Author the headless LWC

A custom script lives inside a **headless LWC** (Lightning Web Component) — no UI, just a JS file containing the script logic, plus the standard LWC metadata XML.

Example bundle structure:

```
myValidationScript/
  myValidationScript.js          ← the script
  myValidationScript.js-meta.xml ← LWC metadata (isExposed=false)
```

Plus a `package.xml` at the top of the zip:

```xml
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>myValidationScript</members>
    <name>LightningComponentBundle</name>
  </types>
  <version>62.0</version>
</Package>
```

### Step 2: Deploy via Workbench

Zip the LWC bundle + `package.xml`, then go to **Workbench → Migration → Deploy** and upload the zip.

### Step 3: Register the Script in Admin Console

1. Open **Admin Console → Custom Scripts** (or similar — the Life Science Custom Script object)
2. Create a new record:
   - **Script Name** — any friendly name
   - **LWC Component Name** — exact name of the LWC component
   - **Type** — one of: Validation / Checklist / Visit Action Validation (Custom Permission type exists but is unsupported in AFLS4CE)
3. Save — this creates a record in the **Life Science Custom Script** object, populating a `Code` (text) field with the JS body extracted from the LWC.

### Step 4: Link the Script to the Workflow

Go to the **Life Science Stage** record for the target entity and set the appropriate column:
- `Validation Script Custom Script ID` — for validation scripts
- `Checklist Script Custom Script ID` — for checklist scripts

Copy the Life Science Custom Script record's ID and paste it here.

### Step 5: Refresh (CRITICAL on script updates)

When you redeploy an **updated** LWC bundle, the existing Life Science Custom Script record **still contains the OLD code** in the `Code` field. The mobile app reads from that field, not from the LWC source.

**You MUST manually click "Refresh" on the Life Science Custom Script record in Admin Console** to re-extract the JS from the LWC. Without this step, the old script keeps running.

> This is the #2 source of "my fix isn't showing up" tickets — admin updated the JS but forgot to click Refresh.

### Step 6: Run Metadata Cache & Mobile Sync

Standard mobile rollout — regenerate metadata and have the user sync.

## Troubleshooting

### Script appears not to run at all

1. **Verify Life Science Stage configuration** — is the script ID column set on the Stage record? Is the Stage Path configured for the entity?
2. **Verify user access** — does the running user have read access to the Life Science Custom Script record? If not, the script is skipped silently.
3. **Verify metadata sync** — was the metadata cache regenerated after configuration? Did the user take a sync?
4. **Verify the script is registered** — the Life Science Custom Script record must have the `Code` field populated.

### Script runs but always falls into the `default` branch

Almost always an **action name mismatch**. `env.getOption('actionName')` returns the **label** of the workflow action (the human-readable string), not the underscored API name.

- Configured action label: `Add Signature`
- Your switch case: `'Add_Signature'` ← WRONG, will hit default

Always use the exact label from the **Workflow Action** record's `Label` field.

### `db.query()` returns null / unexpected values

- **Forgot `await`** — `db` methods are all async. Without `await`, you get a Promise back, not data.
- **Wrong namespace variant** — if the field/object is a managed-package member, use the namespaced method; if customer-created in the org, use the `noNs_` variant. Wrong choice returns `null`.

### Script update isn't reflected on mobile

- **Forgot Refresh in Admin Console** — see Step 5 above. The `Code` text on the Life Science Custom Script record is the source of truth for mobile, and it is only refreshed from the LWC source when an admin clicks the Refresh button.
- After Refresh, run metadata cache and re-sync the device.

### How to debug — inspect what actually ran

After taking a workflow action on mobile, you can inspect network activity (browser dev tools when running in web; mobile debug tooling when on device). For each script invocation you'll see:

- **The script body** that actually executed (matches the `Code` field on the registered record)
- **`accessible fields`** — the entity field values available to the script (these are what `record.stringValue(...)` reads from)
- **`user values`** — fields available on `user`
- **`case`-related fields** — for workflow scripts
- **The entity** on which the workflow is defined

If the script body shown here doesn't match what's in your LWC source, **Refresh wasn't clicked**. If the entity / accessible fields are empty, the user doesn't have access to the record.

## Reference

- **Related skill:** `afls-custom-scripts` (in `skills/`) — implementation patterns and snippet library
- **DB query patterns:** see slide 9 of the deck for fuller examples including ConditionBuilder, no-namespace variants, and `rowsByEntity`
- **Workflow path / Life Science Stage** — required prerequisite; covered in workflow management module
- **Mobile sync flow** — refresh + metadata regen + device sync (see `mobile-metadata-cache/` module)

Related modules: `medical-inquiries/` (canonical inquiry workflow used in examples), `visit-management/` (visit action validation context).

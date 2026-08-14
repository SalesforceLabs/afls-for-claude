---
description: Interactive wizard to configure and validate Briefings
---

# Configure Briefings (Daily Podcasts)

Interactive wizard to check and configure Briefings for the AFLS Mobile app.

$ARGUMENTS

## Arguments

- `check-type` (optional): Focus area — `full`, `toggle`, `permissions`, `flows`, `mobile`, or `quick` (default: full)

## Instructions

Follow these steps sequentially to validate and configure Briefings.

### Step 1: Verify Org Connection

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Run Comprehensive Briefings Check

```
check_briefings_config()
```

Report the summary from the tool output. If all checks pass, skip to Step 10.

### Step 3: Enable Briefings Toggle

If the toggle check failed (PresentationContent not accessible):

**Secondary verification:** Query `SELECT Id FROM FlowDefinitionView WHERE Label LIKE '%Briefings%'`. If Briefings flows exist, the toggle IS on — the PresentationContent query failure is due to the admin user lacking `StoriesAdmin` permission (assign it first, then re-check). If no flows exist either, the toggle is truly OFF.

```
❌ Briefings is not enabled in this org.

Please enable it now:
1. Setup → Quick Find → "Life Sciences for Customer Engagement Setup"
2. Scroll to "Configure Briefings" section
3. Toggle Briefings ON

⚠️ When OFF, all Briefings objects are inaccessible and Field Insights flows don't appear.
```

After user confirms, re-run `check_briefings_config()` to verify.

### Step 4: Check and Assign Permission Sets

**Standard permission sets** — check and assign using `assign_permission_set`:
- `HealthCloudStarter` (Admin + User)
- `EinsteinGPTPromptTemplateManager` (Admin)
- `EinsteinGPTPromptTemplateUser` (User)
- `AccsAgtfrceForLifeSciCustEngmt` (Admin + User)

**Briefings system permissions:**

Check using SOQL on PermissionSet boolean fields (source of truth — label-independent):

```sql
-- Admin permission (Manage Briefings):
SELECT Id, Label FROM PermissionSet WHERE PermissionsStoriesAdmin = true AND IsCustom = true

-- User permission (Use Briefings):
SELECT Id, Label FROM PermissionSet WHERE PermissionsStoriesUser = true AND IsCustom = true
```

If **admin perm set** (PermissionsStoriesAdmin) not found → create programmatically:
1. Deploy a PermissionSet metadata XML with `<name>StoriesAdmin</name>` enabled, label "Life Sciences Commercial Admin - Briefings", **no `<license>` element**
2. Auto-assign to the currently authenticated admin user (no need to ask)

If **user perm set** (PermissionsStoriesUser) not found:
```
❌ This is the #1 reason Briefings doesn't show up for reps.
```
1. Ask the user which end user(s) will receive Briefings
2. Query their profile: `SELECT Id, Profile.Name FROM User WHERE Username = '<username>'`
3. Map profile to label:
   - Field Sales Representative → "Life Sciences Field Sales Rep - Briefings"
   - Key Account Manager → "Life Sciences KAM - Briefings"
   - Medical Science Liaison → "Life Sciences MSL - Briefings"
4. Deploy a PermissionSet metadata XML with `<name>StoriesUser</name>` enabled, appropriate label, **no `<license>` element**
5. Assign to the specified end user(s) only — never auto-assign

### Step 5: Configure Account Summarization

Check if "Generate Provider Account Territory Summary" flow is active and `PrvdAccountTerritorySummary` records exist.

If not configured:
```
→ Setup → Life Sciences for Customer Engagement Setup → Configure Account Summarization
Enable the toggle and complete the configuration.
```

Also verify the text generation flow is active (ApiName: `GenDailyBriefingsText` — appears automatically after toggle ON):

```sql
SELECT Id, Label, ApiName, ActiveVersionId FROM FlowDefinitionView WHERE ApiName IN ('GenDailyBriefingsText', 'stories__GenDailyBriefingsText')
```

### Step 6: Create Content Definition & Assignments

Check `PrstContentDefinition` and `PrstCntntDefAssignment`:

```sql
-- Check via run_soql:
SELECT Id, MasterLabel, IsActive, ContentType FROM PrstContentDefinition LIMIT 1
SELECT Id, IsActive, AssignedToId FROM PrstCntntDefAssignment WHERE IsActive = true
```

If not found:
```
→ Setup → Life Sciences for Customer Engagement Setup → Configure Briefings → Manage Assignments
Select user profiles that should receive daily briefings (e.g., "Field Sales Representative").
```

Cross-check coverage: verify all users with PermissionsStoriesUser-enabled perm set have their profile in the assignment.

### Step 7: Clone & Activate Scheduled Flow

Find the original template by its stable ApiName:

```sql
SELECT Id, Label, ApiName, ActiveVersionId FROM FlowDefinitionView 
WHERE ApiName IN ('SchdDlyBriefingsOfPrvdAcct', 'stories__SchdDlyBriefingsOfPrvdAcct')
```

Expected: original template exists and is INACTIVE (used as a template for cloning).

The admin's clone can have any name — we cannot detect it by label. Instead, verify the pipeline outcome: check if PresentationContent records are being generated.

If no records exist and the flow was just set up:
```
1. Setup → Flows → find the scheduling flow template (ApiName: SchdDlyBriefingsOfPrvdAcct)
2. Set Start Date/Time (e.g., 6:00 AM), Frequency = Daily
3. Click "Save As New Flow" → enter any label → Save
4. Activate the cloned flow
5. Wait for the next scheduled run, then verify PresentationContent records are created
```

### Step 8: Create DB Schema Configs

Use `list_db_schema` to check for the 4 required configs:

```
list_db_schema({ filter: "PresentationContent" })
list_db_schema({ filter: "PrstCntnt" })
list_db_schema({ filter: "PrstContent" })
```

Required configs:

| Name | Object | Type | Sync | WHERE Clause |
|------|--------|------|------|-------------|
| `DbSchema_PresentationContent` | `PresentationContent` | DATA | Unidirectional | `(EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND EffectiveEndDate >= TODAY AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL)` |
| `DbSchema_PrstCntntUsageSummary` | `PrstCntntUsageSummary` | DATA | Bidirectional | `UserId = '{USER.ID}' AND PresentationContentId IN (SELECT Id FROM PresentationContent WHERE (EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND (EffectiveEndDate >= TODAY OR EffectiveEndDate = NULL) AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL))` |
| `DbSchema_PrstCntntDefAssignment` | `PrstCntntDefAssignment` | CONFIGURATION | Unidirectional | `IsActive = true` |
| `DbSchema_PrstContentDefinition` | `PrstContentDefinition` | CONFIGURATION | Bidirectional | _(none)_ |

For each missing config, create it programmatically via `create_db_schema`:
```
create_db_schema({ objectName: "PresentationContent", type: "DATA", sync: "Unidirectional", whereSoql: "..." })
```

**IMPORTANT:** After creating each DB Schema record, ensure its Status is set to "Valid". Without Status=Valid, the record shows as invalid in the Admin Console and won't be included in cache generation. The `create_db_schema` tool handles this automatically, but if creating via Tooling API directly, add a `LifeSciConfigFieldValue` with `FieldName=Status`, `DataType=PICKLIST`, `PicklistValue=Valid`.

### Step 9: Generate Mobile Metadata Cache

Regenerate the metadata cache whenever data or configuration changes (not just once during setup). Once generated successfully, end users sync their iPad to pick up the latest content.

```
generate_mobile_metadata_cache({ profileNames: ["Field Sales Representative"] })
```

Ask the user which profiles to generate for.

### Step 10: Verification

Re-run `check_briefings_config()` to confirm all checks pass.

Present final summary:

```
## Briefings Configuration Complete

| Step | Status | Detail |
|------|--------|--------|
| 1. Briefings Toggle | [status] | [detail] |
| 2. Permission Sets | [status] | [detail] |
| 3. Account Summarization | [status] | [detail] |
| 4. Content Definition & Assignments | [status] | [detail] |
| 5. Scheduled Flow | [status] | [detail] |
| 6. DB Schema Configs | [status] | [detail] |
| 7. Mobile Cache | [status] | [detail] |

Briefings is now configured. The scheduled flow will run daily.
Users with assigned profiles will see the Briefings icon on their next app sync.
```

## Admin Console Navigation

| Task | Path |
|------|------|
| Enable Briefings | Setup → Life Sciences for Customer Engagement Setup → Configure Briefings |
| Permission Sets | Setup → Permission Sets |
| Account Summarization | Setup → Life Sciences for Customer Engagement Setup → Configure Account Summarization |
| Content Definition | Setup → Life Sciences for Customer Engagement Setup → Configure Briefings → Manage Assignments |
| Scheduled Flow | Setup → Flows → find ApiName: SchdDlyBriefingsOfPrvdAcct |
| DB Schema | Admin Console → Mobile → Object Metadata Cache Configuration |
| Metadata Cache | Admin Console → Mobile → Generate Metadata Cache |

## IMPORTANT OBJECT NAME REMINDERS

- Use `PrstContentDefinition` NOT `PresentationContentDefinition`
- Use `PrstCntntDefAssignment` NOT `PresentationContentDefinitionAssignment`
- Use `PrstCntntUsageSummary` NOT `PresentationContentUsageSummary`
- Use `PrvdAccountTerritorySummary` NOT `ProviderAccountTerritorySummary__c`
- DB Schema records are Tooling API objects — use `list_db_schema` / `create_db_schema` NOT `run_soql`

---
name: afls-briefings
description: Guides Briefings (Daily Podcasts) configuration and troubleshooting. Use when user asks about Briefings, Field Insights, Daily Podcasts, audio briefings, Kokoro TTS, PresentationContent, podcast text generation, or on-device audio.
---

## How to Answer Briefings Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| Briefings overview, setup steps, how it works | `search_afls_knowledge({ query: "Briefings Daily Podcasts setup" })` |
| Briefings documentation | `get_afls_module_docs({ module: "briefings" })` |
| Check if Briefings is configured | `check_briefings_config()` |
| Check a specific user's access | `check_briefings_config({ username: "user@org.com" })` |
| DB Schema / mobile cache for Briefings | `list_db_schema({ filter: "PresentationContent" })` |
| Mobile cache status | `check_mobile_cache_status()` |
| Permission sets for Briefings | `list_permission_sets()` |
| Troubleshoot why Briefings isn't working | `check_briefings_config()` then `diagnose_afls_issue({ symptom: "<error>" })` |

---

## Configuration Mode

When the user asks about Briefings configuration, **ask them which mode they prefer**:

1. **Show me the documentation** — call `search_afls_knowledge({ query: "Briefings setup" })` and present the relevant sections
2. **Walk me through it** — configure it directly in their org step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Run Comprehensive Check
```
check_briefings_config()
```

#### Step 2: Report Findings
Present the diagnostic results. Highlight FAIL items that need attention.

#### Step 3: Fix Issues
For each issue found, use the appropriate tool:

| Issue | Fix With |
|-------|----------|
| Briefings toggle OFF | Guide user to Setup → Life Sciences for Customer Engagement Setup → Configure Briefings → Toggle ON |
| Missing permission sets | `assign_permission_set({ label: "...", usernames: [...] })` |
| Missing Briefings permission (PermissionsStoriesUser/PermissionsStoriesAdmin) | Guide user through clone + enable "Use Briefings" or "Manage Briefings" system permission |
| Account Summarization not configured | Guide to Setup → Configure Account Summarization |
| No Content Definition | Guide to Configure Briefings → Manage Assignments |
| Scheduling flow not cloned | Guide through clone + activate flow |
| Missing DB Schema configs | `create_db_schema({ objectName: "PresentationContent" })` etc. |
| Stale mobile cache | `generate_mobile_metadata_cache({ profileNames: [...] })` |

#### Step 4: Verify
Re-run `check_briefings_config()` to confirm all issues are resolved.

---

## Key Technical Details

### Correct Object Names
- `PresentationContent` — generated briefing records
- `PrstContentDefinition` — content definition (NOT `PresentationContentDefinition`)
- `PrstCntntDefAssignment` — profile assignments (NOT `PresentationContentDefinitionAssignment`)
- `PrstCntntUsageSummary` — usage tracking (NOT `PresentationContentUsageSummary`)
- `PrvdAccountTerritorySummary` — account summarization output

### System Permissions (queryable via boolean fields on PermissionSet)

The feature shipped as **Briefings** in production (262). The API/XML names use the legacy **Stories** naming — they were not renamed when the feature was rebranded. Both are correct.

| UI Label (Setup) | SOQL field on PermissionSet | XML `<name>` in metadata | Who needs it |
|---|---|---|---|
| **Manage Briefings** | `PermissionsStoriesAdmin` | `StoriesAdmin` | Admins |
| **Use Briefings** | `PermissionsStoriesUser` | `StoriesUser` | End users (reps) |

- Query: `SELECT Id, Label FROM PermissionSet WHERE PermissionsStoriesAdmin = true AND IsCustom = true`
- Query: `SELECT Id, Label FROM PermissionSet WHERE PermissionsStoriesUser = true AND IsCustom = true`
- Do NOT search by perm set label — admins can name them anything

### Programmatic Creation of Cloned Permission Sets

Cloned perm sets can be created via metadata deploy (`sf project deploy start`). **Do NOT include a `<license>` element** — it causes deploy failures.

**Admin perm set (StoriesAdmin):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Life Sciences Commercial Admin - Briefings</label>
    <hasActivationRequired>false</hasActivationRequired>
    <userPermissions>
        <enabled>true</enabled>
        <name>StoriesAdmin</name>
    </userPermissions>
</PermissionSet>
```
- Auto-assign to the currently authenticated admin user (the user running this configurator)

**End user perm set (StoriesUser):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Life Sciences [Role] - Briefings</label>
    <hasActivationRequired>false</hasActivationRequired>
    <userPermissions>
        <enabled>true</enabled>
        <name>StoriesUser</name>
    </userPermissions>
</PermissionSet>
```

**Determining which base role to name the cloned set after:**
1. Ask the user which end user(s) will receive Briefings — never auto-assign
2. Query those users' profiles: `SELECT Id, Profile.Name FROM User WHERE Username = '<username>'`
3. Map profile to role name for the label:

| End User Profile | Base Perm Set (reference) | Suggested Cloned Label |
|-----------------|--------------------------|----------------------|
| Field Sales Representative | `LifeSciencesFieldSalesRepresentative` | "Life Sciences Field Sales Rep - Briefings" |
| Key Account Manager | `LifeSciencesKeyAccountManager` | "Life Sciences KAM - Briefings" |
| Medical Science Liaison | `LifeSciencesFieldMedical` | "Life Sciences MSL - Briefings" |

**Assignment rules:**
- Admin perm set → assign to current authenticated user (auto, no need to ask)
- End user perm set → always ask user for specific username(s) — never guess or auto-assign based on profile

### Required DB Schema Records

These can be created programmatically via the Tooling API (v67+). Use `LifeSciConfigRecord` and `LifeSciConfigFieldValue` objects. Each record requires:
1. Create `LifeSciConfigRecord` with `LifeSciConfigCategoryId` pointing to the "DbSchema" category, `Type`, `IsActive=false`
2. Create `LifeSciConfigFieldValue` records for: `SObject` (DataType=OBJECT, ObjectValue), `Type` (DataType=PICKLIST, PicklistValue), `OneWaySync` (DataType=BOOLEAN, HasBooleanValue=true for Unidirectional, false for Bidirectional), `WhereSoql` (DataType=LONGTEXT, LongTextValue)
3. Create `Status` field value: `FieldName=Status`, `DataType=PICKLIST`, `PicklistValue=Valid` — **REQUIRED for the record to show as Valid in Admin Console**
4. Update `LifeSciConfigRecord.IsActive = true`

| Config Name | Object | Type | Sync | WHERE Clause |
|-------------|--------|------|------|-------------|
| `DbSchema_PresentationContent` | `PresentationContent` | DATA | Unidirectional | `(EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND EffectiveEndDate >= TODAY AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL)` |
| `DbSchema_PrstCntntUsageSummary` | `PrstCntntUsageSummary` | DATA | Bidirectional | `UserId = '{USER.ID}' AND PresentationContentId IN (SELECT Id FROM PresentationContent WHERE (EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND (EffectiveEndDate >= TODAY OR EffectiveEndDate = NULL) AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL))` |
| `DbSchema_PrstCntntDefAssignment` | `PrstCntntDefAssignment` | CONFIGURATION | Unidirectional | `IsActive = true` |
| `DbSchema_PrstContentDefinition` | `PrstContentDefinition` | CONFIGURATION | Bidirectional | _(none)_ |

### Briefings Icon Visibility (Two Conditions)
The Briefings icon appears in the mobile app ONLY when BOTH:
1. User's profile is in an active `PrstCntntDefAssignment`
2. User has read access to `PresentationContent` object

### Key Flows
| Flow ApiName | Type | Expected State |
|------|------|----------------|
| `SchdDlyBriefingsOfPrvdAcct` | Original scheduling template (managed) | Should exist, NOT active |
| _(admin's clone — any name)_ | Cloned scheduling flow | Should be ACTIVE with Daily frequency |
| `GenDailyBriefingsText` | Text generation flow (managed) | Should exist, ACTIVE |
| Generate Provider Account Territory Summary | Account Summarization | Should exist, ACTIVE |

**Important:** The scheduling flow clone can have any label/ApiName the admin chooses. Do NOT search for it by name. Verify the pipeline outcome (PresentationContent records being generated) instead.

### Metadata Cache Generation (Programmatic)

To generate the mobile metadata cache via API:
1. Create parent `LifeSciMobileMetadataRecord` with `IntegrationStatus=New`, `Status=New`
2. Create child `LifeSciMobileMetadataRecord` with `ParentMobileMetadataRecId=<parentId>`, `ProfileId=<profileId>`, `IntegrationStatus=New`, `Status=New`
3. Update BOTH parent and child to `Status=ValidationCompleted`
4. POST to `/services/data/v67.0/connect/life-sciences/commercial/metadata/actions/generate` with body: `{"parentMetadataRecordId":"<parentId>","apiVersion":"67.0","prefix":"lsc4ce"}`
5. Poll parent record until `Status=Active` (takes 2-5 minutes, poll every 15s)

The endpoint returns `{"message":"Task enqueued for metadata cache generation."}` on success. Status transitions: New → Loading → Processing → Active.

### Limitations (262 GA)
- English only — Kokoro TTS uses English pronunciation exclusively
- 3,000 character limit per briefing
- Daily frequency only — current day's visits only
- Playlist not dynamically updated for same-day visit changes
- No iOS native TTS fallback — Kokoro only

---

## Common Issues

| Symptom | Most Likely Cause |
|---------|-------------------|
| Briefings icon not showing | `PermissionsStoriesUser` not enabled in any assigned perm set, OR profile not in Content Definition Assignment, OR no read access to PresentationContent |
| No audio playing | Scheduled flow hasn't run, or no PresentationContent records generated |
| "sObject type PresentationContent is not supported" | Briefings toggle is OFF **OR** admin user lacks StoriesAdmin permission. Verify with secondary check: `SELECT Id FROM FlowDefinitionView WHERE Label LIKE '%Briefings%'` — if flows exist, toggle is ON and the issue is permissions |
| Flow not found | Managed package (`lsc4ce`) not installed or wrong version |
| Briefings flows missing | Briefings toggle was recently enabled — flows appear after toggle ON |

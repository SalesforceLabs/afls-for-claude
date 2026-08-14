# Briefings Setup Guide

## 5-Step Admin Setup

### Step 1: Enable Briefings

**Permission needed:** Life Sciences Commercial Admin

1. From Setup, in the Quick Find Box, find and select **Life Sciences for Customer Engagement Setup**
2. In the Setup page, go to the **Configure Briefings** section
3. Turn on **Briefings**

### Step 2: Assign Permission Sets

**Admin Permission Sets:**
| Permission Set | API Name |
|---------------|----------|
| Health Cloud Starter | `HealthCloudStarter` |
| Cloned Life Sciences Commercial Admin with "Manage Briefings" enabled | `PermissionsStoriesAdmin` boolean field on PermissionSet |
| Prompt Template Manager | `EinsteinGPTPromptTemplateManager` |
| Access Life Sciences Customer Engagement Agentforce | `AccsAgtfrceForLifeSciCustEngmt` |

**End User Permission Sets:**
| Permission Set | API Name |
|---------------|----------|
| Health Cloud Starter | `HealthCloudStarter` |
| Cloned Life Sciences Field Sales Representative (or MSL/KAM) with "Use Briefings" enabled | `PermissionsStoriesUser` boolean field on PermissionSet |
| Prompt Template User | `EinsteinGPTPromptTemplateUser` |
| Access Life Sciences Customer Engagement Agentforce | `AccsAgtfrceForLifeSciCustEngmt` |

**Important:** The base permission sets have the Briefings system permissions **disabled by default**. Admins must create cloned perm sets with the permission enabled. This can be done programmatically via metadata deploy (PermissionSet XML with `StoriesAdmin` or `StoriesUser` user permission, no `<license>` element).

The two required system permissions — UI labels use "Briefings" but the underlying API/XML names still use the legacy "Stories" naming:

| UI Label (Setup) | SOQL field on PermissionSet | XML `<name>` in metadata | Who needs it |
|---|---|---|---|
| **Manage Briefings** | `PermissionsStoriesAdmin` | `StoriesAdmin` | Admins |
| **Use Briefings** | `PermissionsStoriesUser` | `StoriesUser` | End users (reps) |

> **Note:** The feature shipped as "Briefings" in production (262). The API/XML names (`StoriesAdmin`, `StoriesUser`) are legacy from when it was called "Stories" and were not renamed. Both names are correct — the UI shows "Briefings", the API uses "Stories".

| End User Type | Base Perm Set | Cloned Set Label |
|--------------|--------------|-----------------|
| Admin | `LifeSciencesCommercialAdmin` | "Life Sciences Commercial Admin - Briefings" |
| Field Sales Rep | `LifeSciencesFieldSalesRepresentative` | "Life Sciences Field Sales Rep - Briefings" |
| KAM | `LifeSciencesKeyAccountManager` | "Life Sciences KAM - Briefings" |
| MSL | `LifeSciencesFieldMedical` | "Life Sciences MSL - Briefings" |

Without "Use Briefings" enabled, end users will **never** see the Briefings icon.

**Verification (source of truth — label-independent):**
```sql
SELECT Id, Label FROM PermissionSet WHERE PermissionsStoriesAdmin = true AND IsCustom = true
SELECT Id, Label FROM PermissionSet WHERE PermissionsStoriesUser = true AND IsCustom = true
```

### Step 3: Configure Account Summarization

1. From Setup, find **Life Sciences for Customer Engagement Setup**
2. Go to **Configure Account Summarization For Customer Engagement**
3. Ensure Account Summarization toggle is enabled and configuration is complete

Account Summarization is the data source for Briefings.

### Step 4: Manage Presentation Content Definition Assignments

1. From Setup, find **Life Sciences for Customer Engagement Setup**
2. Scroll to **Configure Briefings** section
3. Click **Manage Assignments**
4. Select the user profiles that should receive daily briefings
5. Save

Profile assignments determine which users receive daily audio briefings.

### Step 5: Clone and Activate the Scheduled Flow

1. From Setup, find **Flows**
2. Find the scheduling flow template (ApiName: `SchdDlyBriefingsOfPrvdAcct`)
3. Set the start time and frequency to **Daily**
4. Click **Save As New Flow**
5. Enter any flow label and save
6. Activate the cloned flow

**Important:** Only Daily frequency is supported. The original flow should NOT be activated directly — always clone it first. The clone can have any name.

## Post-Setup: Mobile App Configuration

Create 4 Object Metadata Cache Configurations (can be done programmatically via Tooling API or via Admin Console UI):

| Config Name | Object | Type | Sync | WHERE Clause |
|-------------|--------|------|------|-------------|
| `DbSchema_PresentationContent` | `PresentationContent` | Data | Unidirectional | `(EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND EffectiveEndDate >= TODAY AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL)` |
| `DbSchema_PrstCntntUsageSummary` | `PrstCntntUsageSummary` | Data | Bidirectional | `UserId = '{USER.ID}' AND PresentationContentId IN (SELECT Id FROM PresentationContent WHERE (EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND (EffectiveEndDate >= TODAY OR EffectiveEndDate = NULL) AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL))` |
| `DbSchema_PrstCntntDefAssignment` | `PrstCntntDefAssignment` | Configuration | Unidirectional | `IsActive = true` |
| `DbSchema_PrstContentDefinition` | `PrstContentDefinition` | Configuration | Bidirectional | N/A |

**Important:** Each DB Schema record must have `Status = Valid` to be included in cache generation.

After creating configs, **generate the metadata cache**. Regenerate the cache whenever data or configuration changes. Once generated, end users sync their iPad to pick up the latest content.

## Source

Salesforce Help: [Briefings](https://help.salesforce.com/s/articleView?id=ind.lsc_field_insights.htm&type=5)

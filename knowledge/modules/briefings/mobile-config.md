# Briefings Mobile Configuration

## Required DB Schema Records

Briefings requires 4 Object Metadata Cache Configuration (DB Schema) records for the mobile app to sync briefing data.

### 1. DbSchema_PresentationContent

| Field | Value |
|-------|-------|
| Object (SObject) | `PresentationContent` |
| Type | DATA |
| Sync Direction | Unidirectional (server to mobile) |
| WHERE Clause | `(EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND EffectiveEndDate >= TODAY AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL)` |

### 2. DbSchema_PrstCntntUsageSummary

| Field | Value |
|-------|-------|
| Object (SObject) | `PrstCntntUsageSummary` |
| Type | DATA |
| Sync Direction | Bidirectional |
| WHERE Clause | `UserId = '{USER.ID}' AND PresentationContentId IN ( SELECT Id FROM PresentationContent WHERE (EffectiveStartDate = NULL OR EffectiveStartDate <= TODAY) AND (EffectiveEndDate >= TODAY OR EffectiveEndDate = NULL) AND (TargetUserId = '{USER.ID}' OR TargetUserId = NULL) AND (TerritoryId = '{USER.TERRITORYID}' OR TerritoryId = NULL) )` |

### 3. DbSchema_PrstCntntDefAssignment

| Field | Value |
|-------|-------|
| Object (SObject) | `PrstCntntDefAssignment` |
| Type | CONFIGURATION |
| Sync Direction | Unidirectional (server to mobile) |
| WHERE Clause | `IsActive = true` |

### 4. DbSchema_PrstContentDefinition

| Field | Value |
|-------|-------|
| Object (SObject) | `PrstContentDefinition` |
| Type | CONFIGURATION |
| Sync Direction | Bidirectional |
| WHERE Clause | _(none)_ |

## Important Notes

- After creating these configs, **generate the metadata cache** for the relevant profiles
- The metadata cache compiles the configs into a downloadable package for the iPad app
- Audio files are created and stored on the device using Kokoro TTS
- Older audio files are automatically removed after 1 day
- The playlist is organized in the same order as the field user's visit schedule

## Verification

Use `list_db_schema({ filter: "PresentationContent" })` and `list_db_schema({ filter: "PrstCntnt" })` to verify all 4 configs exist and are active.

## Source

Salesforce Help: [Mobile App Configuration for Briefings](https://help.salesforce.com/s/articleView?id=ind.lsc_field_insights_mobile_app_configuration.htm&type=5)

# Programmatic Mobile Metadata Cache Generation

This document describes how to programmatically generate the AFLS Mobile Metadata Cache without using the Admin Console UI.

## Overview

The mobile metadata cache can be generated programmatically by:
1. Creating `LifeSciMobileMetadataRecord` parent and child records
2. Setting the appropriate status values
3. Calling the Connect API to trigger generation

## Connect API Endpoint

```
POST /services/data/v{version}/connect/life-sciences/commercial/metadata/actions/generate
```

### Request Body

```json
{
  "parentMetadataRecordId": "0LSmXXXXXXXXXXX",
  "apiVersion": "64.0",
  "prefix": "lsc4ce"
}
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `parentMetadataRecordId` | The Salesforce ID of the parent LifeSciMobileMetadataRecord |
| `apiVersion` | The API version to use (e.g., "64.0") |
| `prefix` | The namespace prefix, typically "lsc4ce" for AFLS4CE |

## Apex Implementation

### Schedulable Class

```apex
public class MetadataGeneratorSchedulable implements Schedulable {

    public void execute(SchedulableContext ctx) {
        // 1. Create parent record
        LifeSciMobileMetadataRecord parentRecord = new LifeSciMobileMetadataRecord();
        parentRecord.IntegrationStatus = 'New';
        parentRecord.Status = 'New';
        insert parentRecord;

        // 2. Get the target profile
        Profile targetProfile = [
            SELECT Id
            FROM Profile
            WHERE Name = 'Medical Sales Representative'
            LIMIT 1
        ];

        // 3. Create child record linked to parent and profile
        LifeSciMobileMetadataRecord childRecord = new LifeSciMobileMetadataRecord();
        childRecord.ParentMobileMetadataRecId = parentRecord.Id;
        childRecord.ProfileId = targetProfile.Id;
        childRecord.IntegrationStatus = 'New';
        childRecord.Status = 'New';
        insert childRecord;

        // 4. Update statuses to ValidationCompleted
        parentRecord.Status = 'ValidationCompleted';
        childRecord.Status = 'ValidationCompleted';
        update new List<LifeSciMobileMetadataRecord>{parentRecord, childRecord};

        // 5. Call the API (must be @future for callout)
        MetadataGeneratorCallout.generateMetadata(parentRecord.Id);
    }
}
```

### Callout Class

```apex
public class MetadataGeneratorCallout {

    @future(callout=true)
    public static void generateMetadata(Id parentMetadataRecordId) {
        String endpoint = URL.getOrgDomainUrl().toExternalForm()
            + '/services/data/v64.0/connect/life-sciences/commercial/metadata/actions/generate';

        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());

        Map<String, Object> requestBody = new Map<String, Object>{
            'parentMetadataRecordId' => parentMetadataRecordId,
            'apiVersion' => '64.0',
            'prefix' => 'lsc4ce'
        };
        req.setBody(JSON.serialize(requestBody));

        Http http = new Http();
        HttpResponse res = http.send(req);

        if (res.getStatusCode() != 200 && res.getStatusCode() != 201) {
            System.debug('Metadata generation failed: ' + res.getBody());
        }
    }
}
```

## Step-by-Step Process

### 1. Create Parent LifeSciMobileMetadataRecord

```sql
-- After creation, note the Id
INSERT INTO LifeSciMobileMetadataRecord (IntegrationStatus, Status)
VALUES ('New', 'New')
```

### 2. Identify Target Profile(s)

```sql
SELECT Id, Name FROM Profile WHERE Name = 'Medical Sales Representative'
```

Common AFLS profiles:
- Medical Sales Representative
- Key Account Manager
- Field Medical
- Custom profiles defined by the organization

### 3. Create Child Record(s)

For each profile that needs the metadata cache:

```sql
INSERT INTO LifeSciMobileMetadataRecord (
    ParentMobileMetadataRecId,
    ProfileId,
    IntegrationStatus,
    Status
) VALUES (
    '<parent_id>',
    '<profile_id>',
    'New',
    'New'
)
```

### 4. Update Statuses

Both parent and child records must have `Status = 'ValidationCompleted'` before generation:

```sql
UPDATE LifeSciMobileMetadataRecord
SET Status = 'ValidationCompleted'
WHERE Id IN ('<parent_id>', '<child_id>')
```

### 5. Call Generate API

The generation must be triggered via the Connect API endpoint. This requires a callout.

## Key Fields on LifeSciMobileMetadataRecord

| Field | Type | Description |
|-------|------|-------------|
| `Id` | ID | Record identifier |
| `Name` | String | Auto-generated name |
| `Status` | Picklist | New, ValidationCompleted, Processing, Active, Published, Error |
| `IntegrationStatus` | Picklist | New, Pending, Ok, Error |
| `IntegrationErrorCode` | String | Error code if generation failed |
| `IntegrationErrorMessage` | String | Detailed error message |
| `ProfileId` | Reference | Profile this cache is for (child records only) |
| `ParentMobileMetadataRecId` | Reference | Parent record ID (child records only) |

## Troubleshooting

### Generation Stuck in Processing

Query the record status:
```sql
SELECT Id, Name, Status, IntegrationStatus, IntegrationErrorMessage
FROM LifeSciMobileMetadataRecord
WHERE Id = '<record_id>'
```

### Error Status

Common errors:
- **Profile not found**: Ensure ProfileId references a valid, active profile
- **Permission denied**: User must have appropriate AFLS permissions
- **Callout failed**: Check Remote Site Settings include your org domain

### Verifying Generation Success

```sql
SELECT Id, Name, Status, IntegrationStatus, LastModifiedDate
FROM LifeSciMobileMetadataRecord
WHERE ParentMobileMetadataRecId = '<parent_id>'
   OR Id = '<parent_id>'
ORDER BY CreatedDate
```

Successful generation shows:
- `Status = 'Active'` or `Status = 'Published'`
- `IntegrationStatus = 'Ok'`

## Using the AFLS for Claude Plugin

The plugin provides automated metadata cache generation via:

### Command: `/afls:generate-metadata-cache`

This command walks you through:
1. Selecting target profiles
2. Creating the necessary records
3. Triggering generation
4. Monitoring status

### MCP Tool: `generate_mobile_metadata_cache`

Programmatic access for automated workflows:

```
Tool: generate_mobile_metadata_cache
Parameters:
  - profileNames: Array of profile names (e.g., ["Medical Sales Representative"])
  - apiVersion: API version (default: "64.0")
  - prefix: Namespace prefix (default: "lsc4ce")
```

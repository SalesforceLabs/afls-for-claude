---
description: Generate AFLS Mobile metadata cache programmatically for specified profiles
---

# Generate Mobile Metadata Cache

Programmatically create and generate the AFLS Mobile (iPad) metadata cache without using the Admin Console UI.

$ARGUMENTS

## Overview

This command automates the mobile metadata cache generation process which typically requires:
1. Navigating to Admin Console > Mobile > Object Metadata Cache Configuration
2. Creating parent and child records manually
3. Triggering generation and waiting for completion

## Steps

### 1. Verify Org Connection

First run `check_afls_setup` to ensure connected to a Salesforce org.

### 2. Identify Target Profiles

Query available profiles in the org:

```sql
SELECT Id, Name FROM Profile WHERE UserType = 'Standard' ORDER BY Name
```

Use `run_soql` to execute this query.

Common AFLS profiles include:
- Medical Sales Representative
- Key Account Manager
- Field Medical
- Sales Operations

### 3. Confirm Profiles with User

Ask the user which profile(s) they want to generate the metadata cache for.

### 4. Generate the Metadata Cache

Use the `generate_mobile_metadata_cache` tool with the selected profiles:

```
Tool: generate_mobile_metadata_cache
Parameters:
  profileNames: ["Medical Sales Representative"]  # Array of profile names
  apiVersion: "64.0"                              # Optional, defaults to 64.0
  prefix: "lsc4ce"                                # Optional, defaults to lsc4ce
```

This tool will:
1. Create a parent `LifeSciMobileMetadataRecord`
2. Create child records for each specified profile
3. Update statuses to `ValidationCompleted`
4. Call the Connect API to trigger generation

### 5. Monitor Generation Status

After triggering, monitor the status:

```sql
SELECT Id, Name, Status, IntegrationStatus, IntegrationErrorCode, IntegrationErrorMessage
FROM LifeSciMobileMetadataRecord
WHERE Status != 'Active' AND Status != 'Published'
ORDER BY CreatedDate DESC
LIMIT 20
```

**Successful generation shows:**
- `Status = 'Active'` or `Status = 'Published'`
- `IntegrationStatus = 'Ok'`

**If generation fails:**
- Check `IntegrationErrorCode` and `IntegrationErrorMessage`
- Common issues: missing permissions, invalid profile, namespace conflicts

### 6. Verify Mobile App Access

Once generation completes successfully, the mobile app users with the specified profiles should:
1. Force close the AFLS Mobile app
2. Reopen and perform a full sync
3. Verify data appears correctly

## Quick Generation Example

For a quick generation for the standard Medical Sales Representative profile:

```
Use generate_mobile_metadata_cache with:
- profileNames: ["Medical Sales Representative"]
```

## Multiple Profiles

To generate for multiple profiles at once:

```
Use generate_mobile_metadata_cache with:
- profileNames: ["Medical Sales Representative", "Key Account Manager", "Field Medical"]
```

Each profile gets its own child record under a shared parent.

## Troubleshooting

### "LifeSciMobileMetadataRecord not found"

The object may not exist in the org. Verify AFLS is properly installed:

```sql
SELECT COUNT() FROM LifeSciMobileMetadataRecord
```

### "Profile not found"

Verify the profile name is exact (case-sensitive):

```sql
SELECT Id, Name FROM Profile WHERE Name LIKE '%Sales%'
```

### Generation Stuck in "Processing"

If status remains "Processing" for more than 15 minutes:
1. Check for batch job errors
2. Consider creating a new parent record and retrying
3. Contact Salesforce support if issue persists

### Integration Error

Check the error details:

```sql
SELECT Id, Name, IntegrationErrorCode, IntegrationErrorMessage
FROM LifeSciMobileMetadataRecord
WHERE IntegrationStatus = 'Error'
ORDER BY LastModifiedDate DESC
```

## Technical Details

**Connect API Endpoint:**
```
POST /services/data/v{version}/connect/life-sciences/commercial/metadata/actions/generate
```

**Request Body:**
```json
{
  "parentMetadataRecordId": "<18-char ID>",
  "apiVersion": "64.0",
  "prefix": "lsc4ce"
}
```

For more details, see the [Programmatic Generation](../knowledge/modules/mobile-metadata-cache/programmatic-generation.md) documentation.

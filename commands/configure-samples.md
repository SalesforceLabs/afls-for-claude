---
description: Interactive wizard to configure and validate AFLS Sample Management
arguments: "[check-type]"
---

# Configure AFLS Sample Management

Interactive wizard to check and configure Sample Management (inventory and sample limits) for web and mobile.

## Arguments

- `check-type` (optional): Focus area - `full`, `inventory`, `limits`, `batches`, or `mobile` (default: full)

## Instructions

Follow these steps sequentially to validate and configure sample management.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Run Comprehensive Sample Configuration Check

Run the dedicated sample configuration tool:

```
check_sample_config()
```

This queries:
- Product2 records with sample record types
- LifeSciMarketableProduct records
- Location records (User Inventory type)
- Active ProductionBatch records
- ProductItem records (inventory levels)
- ProductBatchItem records (batch allocations)
- ProviderSampleLimit records
- Mobile metadata cache status

Report the summary from the tool output.

### Step 3: Check Product Setup

Verify sample products exist and have marketable product records:

```sql
SELECT Id, Name, ProductCode, IsActive, RecordType.Name
FROM Product2
WHERE IsActive = true
ORDER BY Name
```

```sql
SELECT Id, Name, ProductId, Product.Name
FROM LifeSciMarketableProduct
ORDER BY Name
```

Report:
- Number of active products
- Number of marketable products
- **WARN if no products found**: Sample products must be created first
- **WARN if products without marketable product records**: Each sample product needs a LifeSciMarketableProduct record

### Step 4: Check Location Setup

Verify user inventory locations exist:

```sql
SELECT Id, Name, LocationType, PrimaryUserId, PrimaryUser.Name
FROM Location
WHERE LocationType = 'User Inventory'
LIMIT 50
```

Report:
- Number of User Inventory locations
- Whether each location has a Primary User assigned
- **WARN if no locations found**: Reps need inventory locations
- **WARN if locations without Primary User**: Each location needs a Primary User

### Step 5: Check Production Batches

Verify active, non-expired production batches exist:

```sql
SELECT Id, Name, UniqueIdentificationNumber, ExpirationDate, IsActive
FROM ProductionBatch
WHERE IsActive = true
ORDER BY ExpirationDate
```

Report:
- Number of active batches
- Any batches with expired dates
- **WARN if all batches expired**: New batches must be created
- **WARN if no batches found**: Production batches are required for inventory

### Step 6: Check Inventory Levels

Verify ProductItem and ProductBatchItem records exist:

```sql
SELECT Id, Product2Id, Product2.Name, QuantityOnHand, Location.Name
FROM ProductItem
ORDER BY Product2.Name
```

```sql
SELECT COUNT() FROM ProductBatchItem WHERE IsActive = true
```

Report:
- Number of ProductItem records
- Products with zero quantity
- Number of active ProductBatchItem records
- **WARN if no ProductItem records**: Inventory not initialized
- **WARN if no ProductBatchItem records**: Batch allocations not configured

### Step 7: Check Sample Limits

Verify ProviderSampleLimit records exist (if limits feature is used):

```sql
SELECT Id, AccountId, Account.Name, ProductId, Product.Name
FROM ProviderSampleLimit
ORDER BY Account.Name
LIMIT 50
```

Report:
- Number of sample limit records
- Products and accounts covered
- **INFO if no records found**: Sample limits are optional but recommended for PDMA compliance

### Step 8: Check Mobile Metadata Cache Status

```
check_mobile_cache_status()
```

Report:
- Cache status (Active/Published/Error)
- Last modified date
- If stale (> 7 days old), recommend regeneration
- Any cache errors

### Step 9: Present Configuration Report

Compile findings into a summary report:

```
## Sample Management Configuration Report

### Overall Status: [READY / NEEDS ATTENTION / NOT CONFIGURED]

### Product Setup
- Sample products: [count]
- Marketable products: [count]
- Status: [Configured / Partially Configured / Not Configured]

### Inventory Locations
- User Inventory locations: [count]
- Locations with Primary User: [count]
- Status: [Configured / Not Configured]

### Production Batches
- Active batches: [count]
- Expired batches: [count]
- Status: [Configured / Needs Attention / Not Configured]

### Inventory Levels
- ProductItem records: [count]
- Active ProductBatchItem records: [count]
- Status: [Initialized / Not Initialized]

### Sample Limits
- ProviderSampleLimit records: [count]
- Status: [Configured / Not Configured (optional)]

### Mobile Metadata Cache
- Status: [Active / Error / Not Found]
- Last Updated: [date]

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

### Step 10: Offer Next Steps and Fix Issues

Based on findings, offer to fix issues directly using programmatic tools:

**If no sample products:**
- Guide to Setup > Object Manager > Product2 > Record Types
- Explain need for sample product specification type
- Guide LifeSciMarketableProduct creation

**If no inventory locations:**
- Guide to creating Location records with type "User Inventory"
- Explain Primary User assignment

**If no production batches or all expired:**
- Guide to creating ProductionBatch records
- Explain UOM, unique ID, and expiration date requirements

**If inventory not initialized:**
- Guide data setup chain: Product2 > LifeSciMarketableProduct > Location > ProductionBatch > ProductItem > ProductBatchItem
- Explain one ProductItem per location-product pair rule

**If no sample limits (and limits desired):**
- Guide ProviderSampleLimit creation
- Explain template types, enforcement types, and period types

**If trigger handlers inactive:**
- Ask user: "The following trigger handlers are inactive: [list]. Want me to enable them?"
- If yes: `toggle_trigger_handler({ handlerName: "SampleManagementTriggerHandler", active: true })` for each
- Report what was enabled

**If Admin Console settings missing or misconfigured:**
- Ask user: "These settings need to be created/updated: [list]. Want me to set them up?"
- If yes: Use `create_admin_setting` or `update_admin_setting` as appropriate
- Report what was changed

**If metadata cache stale or missing:**
- Ask user which profiles need cache regeneration
- Offer to run `generate_mobile_metadata_cache`

**If all checks pass:**
- Confirm sample management is properly configured
- Remind to regenerate cache after any future changes
- Suggest testing sample flows on mobile

## Example Usage

User: `/afls:configure-samples`
> Run full sample management configuration check

User: `/afls:configure-samples inventory`
> Focus on inventory setup (products, locations, batches, product items)

User: `/afls:configure-samples limits`
> Focus on sample limits configuration

User: `/afls:configure-samples batches`
> Focus on production batch status and expiration

User: `/afls:configure-samples mobile`
> Focus on mobile-specific sample configuration

## Quick Validation Alternative

For a faster automated check, suggest using the audit command:

```
/afls:audit sample-config-check
```

This runs all sample-specific validation rules automatically.

## Admin Console Navigation

| Task | Path |
|------|------|
| Sample Management Settings | Admin Console > Sample Management |
| Profile Settings | Admin Console > Sample Management > Profile Settings |
| Product Specification Type | Admin Console > Sample Management > Product Specification Type |
| Inventory Operation Settings | Admin Console > Sample Management > Inventory Operations |
| Product Request Settings | Admin Console > Sample Management > Product Requests |
| Sample Limits | Admin Console > Sample Limits |
| Trigger Handlers | Admin Console |
| Metadata Cache | Admin Console > Mobile > Object Metadata Cache Configuration |

## IMPORTANT OBJECT NAME REMINDERS

- Use `Product2` NOT `SampleProduct__c`
- Use `LifeSciMarketableProduct` NOT `MarketableProduct__c`
- Use `Location` NOT `InventoryLocation__c`
- Use `ProductionBatch` NOT `SampleLot__c` or `ProductBatch__c`
- Use `ProductItem` NOT `InventoryItem__c`
- Use `ProductBatchItem` NOT `BatchItem__c`
- Use `InventoryOperation` NOT `SampleTransaction__c`
- Use `ProductDisbursement` NOT `SampleDrop__c`
- Use `InventoryCountAssessment` NOT `SampleCount__c`
- Use `ProviderSampleLimit` NOT `SampleLimit__c`
- Use `ProductRequest` NOT `SampleRequest__c`
- Admin Console settings are in `LifeSciConfigRecord` (Tooling API only)

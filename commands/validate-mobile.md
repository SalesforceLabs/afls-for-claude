---
description: Validate AFLS Mobile app configuration to prevent sync and functionality issues
---

# Validate AFLS Mobile Configuration

Check for common configuration issues that can break the AFLS Mobile (iPad) app.

$ARGUMENTS

## Steps

### 1. Verify Org Connection
First run `check_afls_setup` to ensure connected to a Salesforce org.

### 2. Query Mobile Metadata Records
The key object is **LifeSciMobileMetadataRecord** - run this query:

```sql
SELECT Id, Name, Status, IntegrationStatus, IntegrationErrorCode, IntegrationErrorMessage, Profile.Name
FROM LifeSciMobileMetadataRecord
ORDER BY Name
```

Use `run_soql` to execute this query.

### 3. Check for Errors
Query records with integration errors:

```sql
SELECT Id, Name, IntegrationStatus, IntegrationErrorCode, IntegrationErrorMessage
FROM LifeSciMobileMetadataRecord
WHERE IntegrationStatus = 'Error'
```

### 4. Check for Inactive Records
Query records that aren't active:

```sql
SELECT Id, Name, Status, Profile.Name
FROM LifeSciMobileMetadataRecord
WHERE Status NOT IN ('Active', 'Published')
```

### 5. Check Sync Job Status
Query recent batch jobs for failures:

```sql
SELECT Id, Name, Status, StartTime, EndTime
FROM BatchJob
WHERE Status IN ('Failed', 'CompletedWithFailures')
ORDER BY StartTime DESC
LIMIT 10
```

### 6. Analyze Results

Present findings in this format:

**Mobile Metadata Summary**
- Total DB Schema records: X
- Active/Published: X
- With Errors: X
- Inactive: X

**Issues Found**
| Record Name | Issue | Error Details |
|-------------|-------|---------------|
| ... | ... | ... |

**Recommendations**
- List specific fixes needed
- Reference Admin Console location: Admin Console > Mobile > Object Metadata Cache Configuration

### 7. Feature Coverage Check

Ask the user which features are enabled for mobile:
- [ ] Visit Management
- [ ] Sample Management
- [ ] Field Email
- [ ] Next Best Action/Customer
- [ ] Lists & Filters
- [ ] App Alerts

Then verify DB Schema records exist for each enabled feature.

## Quick Validation Query

For a quick health check, run:

```sql
SELECT Status, IntegrationStatus, COUNT(Id)
FROM LifeSciMobileMetadataRecord
GROUP BY Status, IntegrationStatus
```

This shows the distribution of record statuses at a glance.

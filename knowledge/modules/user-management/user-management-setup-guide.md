# AFLS User Management Setup Guide

## Overview

User management in AFLS involves layering multiple Salesforce licensing and access mechanisms to ensure reps, managers, and admins have the right permissions. The hierarchy is:

```
Package License (org-level capacity)
  └── Permission Set License (PSL — feature entitlement)
        └── Permission Set (PS — granular object/field access)
              └── Profile (base access, page layouts, record types)
                    └── User (assigned to roles and territories)
```

Getting this wrong is one of the most common causes of "I can't see X" and "Feature Y isn't working" issues in AFLS implementations.

---

## AFLS Licensing Model

### Package Licenses

Package licenses are consumed at the org level. Each active user with an AFLS-related PSL consumes one package license.

Check capacity with:
```sql
SELECT NamespacePrefix, AllowedLicenses, UsedLicenses, Status
FROM PackageLicense
WHERE NamespacePrefix IN ('lsc4ce', 'HealthCloudGA', 'industrywavedemo')
ORDER BY NamespacePrefix
```

### Permission Set Licenses (PSLs)

PSLs gate access to feature sets. A user must have the correct PSL before they can be assigned the corresponding permission set. PSLs have a total license count — if all are consumed, no more users can be assigned.

Common AFLS PSLs:

| DeveloperName | MasterLabel | Features Unlocked |
|---------------|-------------|-------------------|
| `LifeSciencesPsl` | AFLS | Core AFLS objects: Visit, ProviderVisit, ProviderAcctTerritoryInfo, etc. |
| `LifeSciencesCLMPsl` | AFLS CLM | Intelligent Content / CLM (Presentation, PresentationPage, PresentationShare) |
| `LifeSciencesSampleManagementPsl` | Life Sciences Sample Management | Sample Management (ProductDisbursement, InventoryOperation, ProductBatchItem) |
| `HealthCloudPermissionSetLicense` | Health Cloud Permission Set License | Health Cloud foundation objects |
| `IndustrySalesExcellencePsl` | Industry Sales Excellence | Activity Plans, Next Best, Segmentation |

Check PSL capacity:
```sql
SELECT DeveloperName, MasterLabel, TotalLicenses, UsedLicenses
FROM PermissionSetLicense
WHERE DeveloperName LIKE '%LifeScience%'
   OR DeveloperName LIKE '%HealthCloud%'
   OR DeveloperName LIKE '%IndustrySales%'
ORDER BY DeveloperName
```

### Permission Sets

Permission sets provide the actual object, field, and feature access. They must be assigned to users individually (or via permission set groups).

Common AFLS Permission Sets:

| Label | API Name / Namespace | What It Enables |
|-------|---------------------|-----------------|
| AFLS User | `lsc4ce__LifeSciencesCloudUser` | Core AFLS access — Visit, ProviderVisit, Account, Activity Plans |
| AFLS Admin | `lsc4ce__LifeSciencesCloudAdmin` | Admin Console, trigger handlers, DB Schema management |
| Life Sciences CLM User | `lsc4ce__LifeSciencesCLMUser` | Presentation viewing and playback on mobile |
| Life Sciences CLM Admin | `lsc4ce__LifeSciencesCLMAdmin` | Presentation upload, distribution, topic assignment |
| Sample Management User | `lsc4ce__SampleManagementUser` | Sample disbursement, inventory, product requests |
| Sample Management Admin | `lsc4ce__SampleManagementAdmin` | Sample limits, batch administration |
| Health Cloud Platform | `HealthCloudGA__HealthCloudPlatform` | Health Cloud foundation objects |
| Industry Sales Excellence User | `IndustrySalesExcellenceUser` | Activity Plans, NBC/NBA/NBM |

Check which permission sets exist and their assignments:
```sql
SELECT Id, Name, Label, NamespacePrefix,
  (SELECT Id FROM Assignments LIMIT 1)
FROM PermissionSet
WHERE NamespacePrefix IN ('lsc4ce', 'HealthCloudGA')
   OR Label LIKE '%Life Science%'
   OR Label LIKE '%Sample%'
ORDER BY Label
```

---

## Profile Recommendations

| Role | Recommended Profile | Notes |
|------|-------------------|-------|
| Field Sales Rep | AFLS User (custom clone) | Custom profile cloned from standard; add AFLS page layouts and record types |
| Key Account Manager | AFLS User (custom clone) | Same base; add KAM-specific page layouts |
| Sales Manager | AFLS User (custom clone) | Add My Team access, activity plan admin |
| Admin / Ops | System Administrator | Full access; add AFLS Admin permission sets |
| Integration User | Salesforce API Only | Minimal profile; add only needed permission sets |

**Best Practice:** Clone the standard "AFLS User" profile and customize — never modify the managed profile directly.

---

## Role Hierarchy Design

The recommended role hierarchy for AFLS follows the territory structure:

```
CEO / VP Sales
├── National Sales Director
│   ├── Regional Manager (East)
│   │   ├── District Manager (Northeast)
│   │   │   ├── Territory Rep (Boston)
│   │   │   ├── Territory Rep (NYC)
│   │   │   └── Territory Rep (Philadelphia)
│   │   └── District Manager (Southeast)
│   │       ├── Territory Rep (Atlanta)
│   │       └── Territory Rep (Miami)
│   └── Regional Manager (West)
│       └── ...
└── Commercial Operations
    ├── Admin / Data Ops
    └── Integration User
```

**Key Rules:**
- Roles control **record visibility** — users can see records owned by anyone below them in the hierarchy
- Territory assignments control **which accounts a rep works** — via `UserTerritory2Association` + `ProviderAcctTerritoryInfo`
- Both are needed: a manager needs a role above their reps AND territory access to see their team's data

Check role hierarchy:
```sql
SELECT Id, Name, DeveloperName, ParentRoleId
FROM UserRole
ORDER BY Name
```

---

## User Setup Checklist

Follow this order when provisioning a new AFLS user:

### 1. Create the User Record
- Set Profile (custom clone of AFLS User)
- Set UserRole (matching their position in the hierarchy)
- Set `IsActive = true`

### 2. Assign Permission Set Licenses
Assign the required PSLs based on the user's role:

| User Type | Required PSLs |
|-----------|--------------|
| Field Rep (basic) | LifeSciencesPsl |
| Field Rep (with CLM) | LifeSciencesPsl, LifeSciencesCLMPsl |
| Field Rep (with Samples) | LifeSciencesPsl, LifeSciencesSampleManagementPsl |
| Field Rep (full) | LifeSciencesPsl, LifeSciencesCLMPsl, LifeSciencesSampleManagementPsl |
| Manager | Same as reps + IndustrySalesExcellencePsl (for activity plans) |
| Admin | All PSLs needed to manage features |

PSLs are assigned in Setup > Users > [User] > Permission Set License Assignments.

### 3. Assign Permission Sets
Assign the corresponding permission sets:

```
LifeSciencesPsl → lsc4ce__LifeSciencesCloudUser
LifeSciencesCLMPsl → lsc4ce__LifeSciencesCLMUser
LifeSciencesSampleManagementPsl → lsc4ce__SampleManagementUser
```

Permission sets are assigned in Setup > Users > [User] > Permission Set Assignments.

### 4. Assign to Territory
Create a `UserTerritory2Association` record linking the user to their territory:

```sql
SELECT Id, UserId, Territory2Id, Territory2.Name, RoleInTerritory2
FROM UserTerritory2Association
WHERE UserId = '<userId>'
```

Territory assignments are managed in Setup > Territory Models > [Model] > [Territory] > Assigned Users.

### 5. Verify Access
After setup, verify the user can:
- Log in to the AFLS web app
- See accounts in their territory
- Create visits (if applicable)
- Access CLM presentations (if applicable)
- Log in to the mobile app (if applicable)

---

## Troubleshooting

### "User can't see any accounts"
**Cause:** Missing territory assignment. Accounts are visible based on `ProviderAcctTerritoryInfo` records, which require the user to be assigned to a territory.
**Fix:**
1. Check `UserTerritory2Association` for the user
2. If missing, assign them to a territory in Setup
3. Run the Align Account to Territory batch job

### "User can't create visits"
**Cause:** Missing Life Sciences PSL or permission set.
**Fix:**
1. Check if `LifeSciencesPsl` is assigned
2. Check if `lsc4ce__LifeSciencesCloudUser` permission set is assigned
3. Both are required for Visit object access

### "User can't access CLM presentations"
**Cause:** Missing CLM PSL or permission set.
**Fix:**
1. Assign `LifeSciencesCLMPsl`
2. Assign `lsc4ce__LifeSciencesCLMUser` permission set

### "License capacity reached — can't assign PSL"
**Cause:** All PSL licenses are consumed.
**Fix:**
1. Check capacity: `SELECT DeveloperName, TotalLicenses, UsedLicenses FROM PermissionSetLicense WHERE DeveloperName = '<pslName>'`
2. Remove PSL from inactive users who no longer need it
3. If all licenses are legitimately in use, request additional licenses from Salesforce

### "User can't log into mobile app"
**Cause:** Profile doesn't have mobile access, or metadata cache hasn't been generated for their profile.
**Fix:**
1. Verify the user's profile is included in the mobile metadata cache
2. Regenerate cache: `/afls:generate-metadata-cache <profile-name>`
3. Check DB Schema records include the profile

### "User sees wrong data / too much data"
**Cause:** Role hierarchy or sharing rules are incorrect.
**Fix:**
1. Verify UserRole is at the correct level
2. Check OWD (Organization-Wide Defaults) for Account, Visit, etc.
3. Review sharing rules and territory-based sharing

---

## Key SOQL Queries

### List Active Users with Profile and Role
```sql
SELECT Id, Name, Username, Profile.Name, UserRole.Name, IsActive
FROM User
WHERE IsActive = true
ORDER BY Profile.Name, Name
LIMIT 200
```

### Check PSL Assignments for a User
```sql
SELECT Id, AssigneeId, Assignee.Name, PermissionSetLicenseId, PermissionSetLicense.DeveloperName
FROM PermissionSetLicenseAssign
WHERE AssigneeId = '<userId>'
```

### Check Permission Set Assignments for a User
```sql
SELECT Id, AssigneeId, Assignee.Name, PermissionSetId, PermissionSet.Label
FROM PermissionSetAssignment
WHERE AssigneeId = '<userId>'
AND PermissionSet.IsOwnedByProfile = false
```

### List Users Without Territory Assignments
```sql
SELECT Id, Name, Username, Profile.Name
FROM User
WHERE IsActive = true
AND Id NOT IN (SELECT UserId FROM UserTerritory2Association)
AND Profile.Name LIKE '%Life Science%'
ORDER BY Name
```

### Check PSL Capacity
```sql
SELECT DeveloperName, MasterLabel, TotalLicenses, UsedLicenses,
  (TotalLicenses - UsedLicenses) AS Available
FROM PermissionSetLicense
WHERE DeveloperName LIKE '%LifeScience%'
   OR DeveloperName LIKE '%HealthCloud%'
   OR DeveloperName LIKE '%IndustrySales%'
ORDER BY DeveloperName
```

### List Users by Territory
```sql
SELECT UserId, User.Name, User.Username, Territory2Id, Territory2.Name, RoleInTerritory2
FROM UserTerritory2Association
ORDER BY Territory2.Name, User.Name
LIMIT 200
```

---

## Best Practices

1. **Assign PSLs before permission sets** — A permission set that requires a PSL will fail to assign if the PSL isn't assigned first
2. **Clone profiles, don't modify managed** — Always clone the standard AFLS profile and customize the clone
3. **Audit PSL capacity monthly** — Track used vs available PSLs to avoid hitting limits during onboarding
4. **Match role hierarchy to territory hierarchy** — Keeps record visibility aligned with territory responsibility
5. **Remove PSLs from deactivated users** — Deactivating a user does NOT free up the PSL; you must explicitly remove the PSL assignment
6. **Use permission set groups** — For large deployments, group related permission sets for easier assignment
7. **Document your licensing model** — Create a matrix showing which user types get which PSLs and permission sets

---

## Configuration Locations

| Setting | Location |
|---------|----------|
| User records | Setup > Users |
| Profiles | Setup > Profiles |
| Permission Sets | Setup > Permission Sets |
| Permission Set Licenses | Setup > Users > [User] > Permission Set License Assignments |
| Permission Set Groups | Setup > Permission Set Groups |
| Role Hierarchy | Setup > Roles |
| Territory Assignments | Setup > Territory Models > [Model] > [Territory] > Assigned Users |
| Package Licenses | Setup > Company Information > [Package] Licenses |

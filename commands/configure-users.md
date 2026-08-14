---
description: Interactive wizard to configure and validate AFLS User Management
arguments: "[check-type]"
---

# Configure AFLS User Management

Interactive wizard to check and configure user provisioning, permission sets, licenses, roles, and territory access in AFLS.

## Arguments

- `check-type` (optional): Focus area - `full`, `licenses`, `permission-sets`, `roles`, `territories`, or `assignments` (default: full)

## Instructions

Follow these steps sequentially to validate and configure user management.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Run Comprehensive User Configuration Check

Run the dedicated user configuration tool:

```
check_user_config()
```

This queries:
- PackageLicense (AFLS package license capacity)
- PermissionSetLicense (PSL capacity — total, used, available)
- PermissionSet (AFLS-related permission sets)
- PermissionSetLicenseAssign (PSL assignment counts)
- User by Profile (active user counts per profile)
- PermissionSetAssignment (which users have which AFLS permission sets)
- UserRole (role hierarchy structure)
- UserTerritory2Association (user-territory mappings)

Report the summary from the tool output.

### Step 3: Check Package Licenses

Verify AFLS package license capacity:

```sql
SELECT NamespacePrefix, AllowedLicenses, UsedLicenses, Status
FROM PackageLicense
WHERE NamespacePrefix IN ('lsc4ce', 'HealthCloudGA', 'industrywavedemo')
ORDER BY NamespacePrefix
```

Report:
- Package names, allowed vs used license counts
- **WARN if used >= 90% of allowed**: Package license capacity is running low
- **CRITICAL if used = allowed**: No more users can be provisioned

### Step 4: Check Permission Set License Capacity

Verify PSL capacity for each AFLS-related PSL:

```sql
SELECT DeveloperName, MasterLabel, TotalLicenses, UsedLicenses
FROM PermissionSetLicense
WHERE DeveloperName LIKE '%LifeScience%'
   OR DeveloperName LIKE '%HealthCloud%'
   OR DeveloperName LIKE '%IndustrySales%'
   OR DeveloperName LIKE '%CLM%'
   OR DeveloperName LIKE '%SampleManagement%'
ORDER BY DeveloperName
```

Report:
- Each PSL: name, total, used, available (total - used)
- **WARN if available < 5**: PSL capacity running low
- **CRITICAL if available = 0**: Cannot assign this PSL to new users

### Step 5: Check Permission Set Assignments

List AFLS permission sets and their assignment counts:

```
list_permission_sets()
```

Report:
- Each permission set: label, namespace, number of assigned users
- **WARN if key permission sets have 0 assignments**: No users have this access
- Cross-reference with PSLs: users with PS but missing required PSL

### Step 6: Check User Profiles

Verify active user distribution across profiles:

```sql
SELECT Profile.Name, COUNT(Id) userCount
FROM User
WHERE IsActive = true
GROUP BY Profile.Name
ORDER BY COUNT(Id) DESC
```

Report:
- Profile names and user counts
- **INFO**: Identify non-AFLS profiles (System Administrator, Standard User) that may need AFLS permission sets

### Step 7: Check Role Hierarchy

Verify role hierarchy exists and is structured:

```sql
SELECT Id, Name, DeveloperName, ParentRoleId
FROM UserRole
ORDER BY Name
```

Report:
- Number of roles
- Hierarchy depth (root roles vs roles with parents)
- **WARN if no roles**: Role hierarchy needed for data visibility

### Step 8: Check Territory-User Associations

Verify users are assigned to territories:

```sql
SELECT UserId, User.Name, User.Username, Territory2Id, Territory2.Name, RoleInTerritory2
FROM UserTerritory2Association
ORDER BY Territory2.Name, User.Name
LIMIT 100
```

Also check for users without territory assignments:

```
list_users({ filterBy: "no-territory" })
```

Report:
- Number of territory-user associations
- Territories and their assigned users
- **WARN if AFLS users lack territory assignments**: They won't see accounts

### Step 9: Present Configuration Report

Compile findings into a summary report:

```
## User Management Configuration Report

### Overall Status: [CONFIGURED / NEEDS ATTENTION / NOT CONFIGURED]

### Package Licenses
- [Package]: [used] / [allowed] ([available] remaining)
- Status: [OK / Low / Critical]

### Permission Set Licenses
| PSL | Total | Used | Available | Status |
|-----|-------|------|-----------|--------|

### Permission Sets
| Permission Set | Namespace | Assignments |
|---------------|-----------|-------------|

### User Profiles
| Profile | Active Users |
|---------|-------------|

### Role Hierarchy
- Roles: [count]
- Hierarchy depth: [levels]
- Status: [Configured / Not Found]

### Territory-User Associations
- Users with territories: [count]
- Users without territories: [count] (AFLS profiles only)
- Status: [Configured / Incomplete]

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

### Step 10: Offer Next Steps and Fix Issues

Based on findings, offer to fix issues directly:

**If PSL capacity is critical (0 available):**
- List users with the PSL who are inactive: `list_users({ filterBy: "no-territory" })`
- Suggest removing PSLs from inactive users
- Guide to requesting additional licenses from Salesforce

**If users are missing permission sets:**
- Ask: "These users are missing [PS]. Want me to assign it?"
- If yes: `assign_permission_set({ permissionSetName: "...", usernames: ["..."] })`
- Report what was assigned

**If users have permission sets but missing required PSLs:**
- Guide to Setup > Users > [User] > Permission Set License Assignments
- Note: PSL assignment requires UI or Metadata API (cannot be done via SOQL)

**If users lack territory assignments:**
- List affected users
- Guide to Setup > Territory Models > [Model] > [Territory] > Assigned Users
- Remind to run alignment batch jobs after adding territory assignments

**If no role hierarchy exists:**
- Guide to Setup > Roles
- Recommend structure matching territory hierarchy (National > Region > District > Territory)

**If profile mismatch detected:**
- Identify users on non-AFLS profiles who have AFLS permission sets
- Recommend profile change if appropriate

**If all checks pass:**
- Confirm user management is properly configured
- Remind about ongoing tasks: monthly PSL audits, deactivated user cleanup
- Suggest documenting the licensing model for the implementation team

## Example Usage

User: `/afls:configure-users`
> Run full user management configuration check

User: `/afls:configure-users licenses`
> Focus on package license and PSL capacity

User: `/afls:configure-users permission-sets`
> Focus on permission set assignments and coverage

User: `/afls:configure-users roles`
> Focus on role hierarchy structure

User: `/afls:configure-users territories`
> Focus on user-territory associations

User: `/afls:configure-users assignments`
> Focus on permission set and PSL assignments per user

## IMPORTANT OBJECT NAME REMINDERS

- Use `User` NOT `User__c`
- Use `PermissionSet` NOT `PermissionSetAssignment__c`
- Use `PermissionSetLicense` NOT `PermissionSetLicense__c`
- Use `PermissionSetLicenseAssign` NOT `PSLAssignment__c`
- Use `UserTerritory2Association` NOT `UserTerritory__c`
- Use `UserRole` NOT `RoleHierarchy__c`
- Use `PackageLicense` NOT `PackageLicense__c`

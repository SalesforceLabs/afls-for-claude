---
name: afls-user-management
description: Guides AFLS User Management — permission sets, permission set licenses, profiles, role hierarchy, license capacity, and territory-user associations. Use when user asks about user provisioning, permission set assignments, PSL capacity, role hierarchy, user access, license management, or why a user can't see data or features.
---

## How to Answer User Management Questions

**Always call MCP tools to get sourced documentation.** Do not answer from general knowledge alone.

| User asks about... | Call this tool |
|---------------------|---------------|
| User management concepts, provisioning, best practices | `get_afls_module_docs({ module: "user-management" })` |
| Specific topic (PSLs, role hierarchy, licensing, etc.) | `search_afls_knowledge({ query: "<topic>" })` |
| Current org user configuration | `check_user_config()` |
| List active users (with optional filters) | `list_users()` or `list_users({ filterBy: "profile", filterValue: "Life Science" })` |
| Permission sets and PSL capacity | `list_permission_sets()` |
| Assign a permission set | `assign_permission_set({ permissionSetName: "...", usernames: ["..."] })` |
| Remove a permission set | `unassign_permission_set({ permissionSetName: "...", usernames: ["..."] })` |
| Users without territories | `list_users({ filterBy: "no-territory" })` |
| Users without PSLs | `list_users({ filterBy: "no-psl" })` |
| User-territory associations | `run_soql({ query: "SELECT UserId, User.Name, Territory2Id, Territory2.Name FROM UserTerritory2Association ..." })` |

---

## Configuration Mode

When the user asks about configuring or managing users, permissions, licenses, or roles, **ask them which mode they prefer**:

1. **Show me the documentation** — call `get_afls_module_docs({ module: "user-management" })` and present the relevant sections
2. **Walk me through it** — check my org and help me fix issues step-by-step (guided setup below)

Default to **guided setup** when connected to an org, or documentation mode if no org is connected.

### Guided Setup Workflow

#### Step 1: Check Current State
```
check_user_config()
```

#### Step 2: Report Findings
Present a summary of package license capacity, PSL capacity, active users by profile, permission set coverage, role hierarchy, territory-user associations, and users missing territories or PSLs.

#### Step 3: Propose Changes
For each issue found, propose the fix and wait for user confirmation:
- Missing PSL or permission set -> assign via tool
- No territory -> guide user to Setup (requires UI or Metadata API)
- PSL capacity low -> identify inactive users still consuming PSLs

#### Step 4: Apply Changes (with user confirmation)
```
assign_permission_set({ permissionSetName: "...", usernames: ["..."] })
unassign_permission_set({ permissionSetName: "...", usernames: ["..."] })
```

For PSL assignments and territory associations, guide the user to Setup (these require UI or Metadata API operations).

#### Step 5: Verify
Re-run `check_user_config()` to confirm everything is configured correctly.

---

## Tool Usage Rules

### Correct Object Names
| Correct | Wrong (NEVER use) |
|---------|-------------------|
| `User` | `User__c` |
| `Profile` | `UserProfile__c` |
| `UserRole` | `RoleHierarchy__c` |
| `PermissionSet` | — |
| `PermissionSetAssignment` | `PermissionSetAssignment__c` |
| `PermissionSetLicense` | `PermissionSetLicense__c` |
| `PermissionSetLicenseAssign` | `PSLAssignment__c`, `LicenseAssignment__c` |
| `UserTerritory2Association` | `UserTerritory__c`, `TerritoryUser__c` |
| `PackageLicense` | — |

### Tool Restrictions
- **DO NOT** suggest OmniStudio/FlexCard/OmniScript for mobile — NOT available on AFLS Mobile iPad app

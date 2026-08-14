# InsDoc (Institution Doctor) - Summer '26

Presenter: Crystal Deshpande, Product Manager, Agentforce Life Sciences

## Overview

In Japan, it's a compliance best practice to track HCP interactions not just at the HCP or HCO level, but at the level of a **specific doctor at a specific institution**. This is called an InsDoc account — essentially a combination of an HCP and their affiliated HCO.

## Key Capabilities

- **Auto-creation:** InsDoc account automatically created when a Provider Affiliation record is flagged as an InsDoc affiliation
- **Configurable naming:** Customers define the naming convention (e.g., "HCO name - HCP last name")
- **Custom record type:** Create InsDoc-specific record type
- **Field mapping:** Configure which fields copy from parent HCP and HCO
- **Contact Point Address:** Auto-created based on parent HCO primary address

## Admin Setup

### 1. Enable Feature Toggle
Turn on the org preference toggle for InsDoc.

### 2. Clone and Activate Flows (4 out-of-box flows)

| Flow | Purpose |
|------|---------|
| **Auto Creation Flow** | Creates InsDoc account when affiliation is flagged. Define naming format and field mappings here. |
| **Validate HCP Updates Flow** | Prevents users from accidentally changing restricted InsDoc-specific fields during HCP updates |
| **Process Expired Provider Affiliations Flow** | Switches InsDoc account to inactive when affiliation expires |
| **Validate Institution Doctor Account Fields Flow** | Ensures core InsDoc fields stay consistent when account is updated (e.g., account name) |

### 3. Create Record Types
Create dedicated record types on both Account and Healthcare Provider objects. Map them in the Account Management Admin Console.

### 4. Configure Search Filtering
Use InsDoc record types to filter search views — makes it easy for reps to find InsDoc accounts.

### 5. Restrict Account Creation (Optional)
New setting to restrict account creation within the "Search Before Create" flow. Lock down for entire org or specific profiles (best practice in Japan: reps should not create accounts directly).

### 6. Configure Quick Actions
Set up InsDoc-specific quick actions (e.g., "New Visit" action that only appears for InsDoc accounts, ensuring reps use the InsDoc record type).

## End User Experience (Mobile)

**Persona:** Yuki, a sales rep in Japan

### Creating an InsDoc Account
1. Check Accounts tab filtered on InsDoc accounts
2. If target InsDoc doesn't exist → create a Provider Affiliation between HCP and HCO
3. Flag the affiliation as "Institution-Doctor Affiliation"
4. Save → triggers automatic InsDoc account creation
5. Align new InsDoc account to territory

### Using InsDoc for Visits
1. Navigate to the InsDoc account
2. Contact Point Address auto-created from parent HCO
3. Use quick action to create visit in the correct HCP-at-HCO context
4. All activities captured at the InsDoc account level

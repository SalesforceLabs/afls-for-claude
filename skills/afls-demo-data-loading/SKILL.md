---
name: afls-demo-data-loading
description: Guides loading demo data into AFLS orgs. Covers territory hierarchies, accounts (HCO/HCP), healthcare providers, contact points, business licenses, territory assignments, PATI/PATS records, and therapy-area scenarios. Use when user asks about creating demo data, sample data, test data, or setting up an AFLS demo org.
---

## How to Answer Demo Data Loading Questions

**Always call MCP tools first to check org state before creating data.**

| User asks about... | Call this tool |
|---------------------|---------------|
| Territory setup status | `run_soql({ query: "SELECT Id, Name, State FROM Territory2Model LIMIT 5" })` |
| Existing accounts | `run_soql({ query: "SELECT COUNT(), IsPersonAccount FROM Account GROUP BY IsPersonAccount" })` |
| Existing HCPs | `run_soql({ query: "SELECT COUNT() FROM HealthcareProvider" })` |
| Object fields | `describe_sobject({ sobject: "Account" })` or any target object |
| Territory assignments | `run_soql({ query: "SELECT COUNT() FROM ObjectTerritory2Association" })` |

---

## Data Loading Order

Data must be created in this order due to dependencies:

1. **Territory Hierarchy** (Territory2Model > Territory2Type > Territory2)
2. **Accounts** (HCO org accounts, then HCP PersonAccounts)
3. **Healthcare Providers** (HealthcareProvider linked to PersonAccounts)
4. **Provider Details** (NPI, Specialty, CareSpecialty, Affiliations)
5. **Territory Assignments** (ObjectTerritory2Association, ProviderAcctTerritoryInfo)
6. **Provider Account Territory Summaries** (PrvdAccountTerritorySummary)
7. **Contact Points** (Address, Email, Phone, Social)
8. **Business Licenses**
9. **Scenario Data** (therapy-area-specific layering)

---

## Territory Hierarchy

### Required Objects

| Object | Purpose |
|--------|---------|
| `Territory2Model` | Container for the entire hierarchy (one active model) |
| `Territory2Type` | Types of territories (Geographical, Medical, KAM) |
| `Territory2` | Individual territory nodes |

### Structure Pattern

```
GLOBAL (root)
├── US
│   ├── US_NE_Boston
│   ├── US_NE_Washington_DC
│   ├── US_MW_Chicago
│   └── US_W_San_Francisco
├── GB
│   ├── GB_London
│   ├── GB_Manchester
│   └── GB_Edinburgh
├── FR / DE / IT / ES / JP / KR / BR / MX / AR
│   └── (country sub-territories by city)
├── Medical
│   ├── MED_Oncology
│   ├── MED_Cardiology
│   ├── MED_Neurology
│   ├── MED_Immunology
│   └── MED_Primary_Care
└── KAM
    ├── KAM_Academic_Medical_Centers
    ├── KAM_Hospital_Systems
    └── KAM_Payer_Insurance
```

### Key Gotchas

- **Territory2Model must be in Active state** for assignments to work. Use `State = 'Active'` or activate via Setup.
- **Territory names are DeveloperName-like** (underscores, no spaces) — use this for lookups, not `Name`.
- **ParentTerritory2Id** links child to parent — query by `DeveloperName` to find the parent.

---

## Account Creation

### Record Types

| Record Type DeveloperName | Use For |
|---------------------------|---------|
| `Health_Care_Organization` | Hospitals, clinics, payers, pharmacies |
| `Health_Care_Provider` | Doctors (PersonAccount) |

### HCO (Organization) Accounts

```apex
Account a = new Account();
a.RecordTypeId = hcoRtId;
a.Name = 'Massachusetts General Hospital';
a.Type = 'Hospital';
a.BillingStreet = '55 Fruit Street';
a.BillingCity = 'Boston';
a.BillingStateCode = 'MA';
a.BillingPostalCode = '02114';
a.BillingCountryCode = 'US';
a.Site = 'DEMO-TAG';  // tag for cleanup
```

### HCP (PersonAccount) Doctors

```apex
Account a = new Account();
a.RecordTypeId = hcpRtId;
a.Salutation = 'Dr.';
a.FirstName = 'Sarah';
a.LastName = 'Chen';
a.PersonEmail = 'sarah.chen@hospital.example.com';
a.Phone = '+1 617 726 2000';
a.BillingStreet = '55 Fruit Street';
a.BillingCity = 'Boston';
a.BillingStateCode = 'MA';
a.BillingPostalCode = '02114';
a.BillingCountryCode = 'US';
// CRITICAL: Also set PersonMailing fields for mobile app display
a.PersonMailingStreet = a.BillingStreet;
a.PersonMailingCity = a.BillingCity;
a.PersonMailingStateCode = a.BillingStateCode;
a.PersonMailingPostalCode = a.BillingPostalCode;
a.PersonMailingCountryCode = a.BillingCountryCode;
a.Site = 'DEMO-TAG';
```

### Critical Gotchas — Accounts

1. **PersonMailing fields required for mobile.** The AFLS mobile app displays PersonMailingAddress, not BillingAddress, for PersonAccounts. If you only set Billing fields, HCPs show `--` under their name on mobile.

2. **Duplicate rules block inserts.** Managed package duplicate rules may block account creation. Use `Database.DMLOptions` with `AllowSave = true`:
   ```apex
   Database.DMLOptions dmlOpts = new Database.DMLOptions();
   dmlOpts.DuplicateRuleHeader.AllowSave = true;
   Database.insert(accounts, dmlOpts);
   ```

3. **State/Country Picklists must be enabled and configured.** If a country's state codes aren't configured in the org, setting `BillingStateCode` will fail. Use empty string `''` for countries without configured states:
   ```apex
   if (String.isNotBlank(stateCode)) {
       a.BillingStateCode = stateCode;
       a.PersonMailingStateCode = stateCode;
   }
   ```

4. **Non-Latin names for JP/KR.** Use native script for Japanese and Korean names and addresses:
   - JP: `LastName = '山本'`, `FirstName = '健'`, street = `'本郷7-3-1'`
   - KR: `LastName = '김'`, `FirstName = '준호'`, street = `'대학로 101'`

5. **Tag all records for cleanup.** Use a consistent tag field (e.g., `Site = 'AFLSCE-Demo-Data'`) so you can delete demo data without touching real org data.

6. **CPU time limits.** Managed package triggers (lsc4ce) consume significant CPU time. With 220 accounts, expect ~7600/10000ms CPU. Keep batch sizes manageable.

---

## Healthcare Provider Records

### Required Chain

For each doctor, create these in order:

1. **HealthcareProvider** — links to the PersonAccount
2. **HealthcareProviderNpi** — NPI number (10-digit, unique)
3. **CareSpecialty** — reference specialty record (check existing first)
4. **HealthcareProviderSpecialty** — links provider to specialty
5. **ProviderAffiliation** — links doctor to their hospital/clinic

### HealthcareProvider

```apex
Schema.SObjectType hcpType = Schema.getGlobalDescribe().get('healthcareprovider');
SObject hcp = hcpType.newSObject();
hcp.put('AccountId', doctorAccountId);
hcp.put('Name', 'Dr. Sarah Chen');
hcp.put('SourceSystem', 'DEMO-TAG');
```

### HealthcareProviderNpi

```apex
Schema.SObjectType npiType = Schema.getGlobalDescribe().get('healthcareprovidernpi');
SObject npi = npiType.newSObject();
npi.put('HealthcareProviderId', hcpId);
npi.put('Npi', '1234567890');  // 10 digits, unique
npi.put('SourceSystem', 'DEMO-TAG');
```

### ProviderAffiliation

ProviderAffiliation links doctors to organizations. **This object may not be visible via Schema.getGlobalDescribe() in the same class.** Use a separate helper class:

```apex
// In a SEPARATE Apex class (e.g., DemoAffiliationHelper)
public class DemoAffiliationHelper {
    public static void createAffiliations(List<ProviderAffiliation> affiliations) {
        Database.insert(affiliations, false);
    }
}
```

### Key Gotchas — Providers

1. **Use dynamic SObject creation** (`Schema.getGlobalDescribe().get(...)`) for Health Cloud objects that may not compile in all orgs.
2. **NPI must be unique.** Generate synthetic 10-digit NPIs starting with a known prefix (e.g., `10001xxxxx`).
3. **CareSpecialty records may already exist.** Query first, only create missing ones.
4. **ProviderAffiliation Schema visibility.** The `ProviderAffiliation` object may not be accessible in the same class that references `HealthcareProvider`. Use a separate helper class.

---

## Territory Assignments

### Objects

| Object | Purpose | Key Fields |
|--------|---------|------------|
| `ObjectTerritory2Association` | Assigns Account to Territory | `ObjectId`, `Territory2Id`, `AssociationCause='Territory2Manual'` |
| `ProviderAcctTerritoryInfo` (PATI) | Territory-specific account info | `AccountId`, `Territory2Id`, `IsTargetedAccount`, `IsAvailableOffline`, `IsActive` |
| `PrvdAccountTerritorySummary` (PATS) | AI/rep summary per account-territory | `AccountId`, `Territory2Id`, `UserId`, `KeyInformationSummary` |

### Assignment Flow

```apex
// 1. Create ObjectTerritory2Association
ObjectTerritory2Association ota = new ObjectTerritory2Association();
ota.ObjectId = accountId;
ota.Territory2Id = territoryId;
ota.AssociationCause = 'Territory2Manual';

// 2. Create ProviderAcctTerritoryInfo
SObject pati = patiType.newSObject();
pati.put('AccountId', accountId);
pati.put('Territory2Id', territoryId);
pati.put('IsTargetedAccount', true);
pati.put('IsAvailableOffline', true);
pati.put('IsActive', true);
pati.put('SourceSystemName', 'DEMO-TAG');

// 3. Create PrvdAccountTerritorySummary
SObject pats = patsType.newSObject();
pats.put('AccountId', accountId);
pats.put('Territory2Id', territoryId);
pats.put('UserId', repUserId);  // from UserTerritory2Association
pats.put('KeyInformationSummary', summaryJson);
pats.put('KeyInfoSummaryDateTime', Datetime.now());
pats.put('SourceSystemName', 'DEMO-TAG');
```

### City-to-Territory Mapping

Map accounts to territories by matching `BillingCity` + `BillingCountryCode` to territory `DeveloperName`:

```apex
Map<String, String> cityTerrMap = new Map<String, String>();
cityTerrMap.put('US:Boston', 'US_NE_Boston');
cityTerrMap.put('GB:London', 'GB_London');
cityTerrMap.put('FR:Paris', 'FR_Paris');
// ... etc

String key = acct.BillingCountryCode + ':' + acct.BillingCity;
String terrName = cityTerrMap.containsKey(key) 
    ? cityTerrMap.get(key) 
    : cityTerrMap.get(acct.BillingCountryCode);  // country fallback
```

### Territory Sharing

PATI and PATS records need sharing with territory groups for rep visibility:

```apex
// Query territory group IDs
Map<Id, Id> terrToGroupId = new Map<Id, Id>();
for (Territory2 t : [SELECT Id, (SELECT Id, Group.Id FROM Territory2Members LIMIT 1) FROM Territory2 WHERE Id IN :territoryIds]) {
    // Territory group Id format: '00G' prefix
}

// Or query Group directly
for (Group g : [SELECT Id, RelatedId FROM Group WHERE Type = 'Territory' AND RelatedId IN :territoryIds]) {
    terrToGroupId.put(g.RelatedId, g.Id);
}

// Create share records
ProviderAcctTerritoryInfoShare share = new ProviderAcctTerritoryInfoShare();
// (use dynamic SObject for shares too)
share.put('ParentId', patiRecordId);
share.put('UserOrGroupId', territoryGroupId);
share.put('AccessLevel', 'Edit');
share.put('RowCause', 'Manual');
```

### Key Gotchas — Territory Assignments

1. **Territory2Model must be Active.** Assignments fail silently against inactive models.
2. **PATI IsAvailableOffline = true** is required for records to sync to the mobile app.
3. **PATS UserId comes from UserTerritory2Association.** Query `UserTerritory2Association WHERE Territory2Id IN :terrIds` to find which user is assigned to each territory.
4. **Assign reps to ALL sub-territories.** A country rep should be assigned to every sub-territory in their country via `UserTerritory2Association`, not just the country-level territory.
5. **Account visibility is controlled by multiple layers:**
   - OWD (Organization-Wide Default) — should be Private for demos
   - Profile permissions — check `ViewAllData` and per-object `ViewAll`
   - Permission Set permissions — can also grant `ViewAll` on Account
   - Territory-based sharing — the primary mechanism for AFLS
   - Check all layers if reps see too many accounts.
6. **Remove ViewAll from profiles/permission sets.** The "Field Sales Representative" profile and "Custom_Life_Sciences_Commercial_User" permission set may have `ViewAll = true` on Account. This overrides territory-based sharing and lets reps see all accounts.

---

## PrvdAccountTerritorySummary (PATS)

### KeyInformationSummary JSON Format

This JSON renders in the AFLS mobile app as a structured summary card:

```json
{
  "keyInfo": [
    {
      "sectionName": "Key Activities & Engagement",
      "sectionData": [
        {"data": "The provider participated in 180 visits over the past year..."},
        {"data": "High engagement with Oncolyra, discussed in 120 visits..."},
        {"data": "A recent clinical inquiry was submitted regarding..."}
      ]
    },
    {
      "sectionName": "Discussion Points",
      "sectionData": [
        {"data": "Discuss the latest Phase III data for Oncolyra..."},
        {"data": "Review the provider's patient volume for eligible indications..."}
      ]
    }
  ],
  "changeInfo": [
    {
      "sectionName": "Affiliation Updates",
      "sectionData": [
        {"data": "The provider recently established an affiliation with..."}
      ]
    },
    {
      "sectionName": "Recent Publications & Accreditations",
      "sectionData": [
        {"data": "Published a recent article on immunotherapy combinations..."}
      ]
    }
  ]
}
```

### Localization

PATS summaries should be in the local language for each country. Use `BillingCountryCode` to select language:

| Country Code | Language | Example Section Name |
|-------------|----------|---------------------|
| US, GB | English | Key Activities & Engagement |
| FR | French | Activites Cles & Engagement |
| DE | German | Hauptaktivitaten & Engagement |
| IT | Italian | Attivita Chiave & Coinvolgimento |
| ES, MX, AR | Spanish | Actividades Clave & Compromiso |
| JP | Japanese | 主要活動とエンゲージメント |
| KR | Korean | 주요 활동 및 참여 |
| BR | Portuguese | Atividades Principais & Engajamento |

### Specialty Rotation

Rotate templates across 4 specialties (Oncology, Cardiology, Neurology, Immunology) using `Math.mod(index, 4)` to give variety across accounts.

---

## Contact Points

### Objects and Batch Strategy

| Object | Records Per Account | Notes |
|--------|-------------------|-------|
| `ContactPointAddress` | 1 per account (HCO + HCP) | Uses BillingAddress fields |
| `ContactPointEmail` | 2-3 per HCO, 1 per HCP | General + department emails |
| `ContactPointPhone` | 2-4 per HCO, 1 per HCP | Country-formatted numbers |
| `ContactPointSocial` | 1-2 per HCO | LinkedIn and X handles |

### Batch Size Limit

**Process in batches of 15.** The lsc4ce managed package triggers consume ~50 SOQL queries per DML operation on contact points. With a limit of 100 SOQL queries per transaction, batches larger than 15 will hit `Too many SOQL queries: 101`.

```apex
private static final Integer BATCH_SIZE = 15;

// LWC calls createAddressBatch(0), createAddressBatch(15), createAddressBatch(30)...
// Each call processes BATCH_SIZE accounts and returns { created, total, hasMore, errors }
```

### ContactPointAddress for PersonAccounts

```apex
ContactPointAddress cpa = new ContactPointAddress();
cpa.Name = 'DEMO-TAG - Dr. Sarah Chen Primary';
cpa.AddressType = 'Mailing';
cpa.ParentId = accountId;
cpa.Street = acct.BillingStreet;
cpa.City = acct.BillingCity;
cpa.State = acct.BillingState;
cpa.PostalCode = acct.BillingPostalCode;
cpa.Country = acct.BillingCountry;
```

---

## User Setup for Demos

### Repurposing Existing Users as Country Reps

Rather than creating new users (which requires licenses), repurpose existing users with the "Field Sales Representative" profile:

```apex
User u = [SELECT Id, Username FROM User WHERE Profile.Name = 'Field Sales Representative' AND IsActive = true LIMIT 1];
u.Username = 'fr.rep@myorg.org';
u.FirstName = 'France';
u.LastName = 'Rep';
u.Alias = 'frrep';
u.Email = 'fr.rep@myorg.org';
update u;

// Set password
System.setPassword(u.Id, 'your-password');
```

### Assign Users to Territories

```apex
// Assign to ALL sub-territories in their country
List<UserTerritory2Association> utas = new List<UserTerritory2Association>();
for (Territory2 t : [SELECT Id FROM Territory2 WHERE DeveloperName LIKE 'FR_%']) {
    UserTerritory2Association uta = new UserTerritory2Association();
    uta.UserId = userId;
    uta.Territory2Id = t.Id;
    utas.add(uta);
}
insert utas;
```

---

## Tagging & Cleanup Strategy

Tag all created records for safe cleanup:

| Object | Tag Field | Tag Value |
|--------|-----------|-----------|
| Account | `Site` | `DEMO-TAG` |
| HealthcareProvider | `SourceSystem` | `DEMO-TAG` |
| HealthcareProviderNpi | `SourceSystem` | `DEMO-TAG` |
| HealthcareProviderSpecialty | `SourceSystem` | `DEMO-TAG` |
| ProviderAffiliation | `SourceSystemName` | `DEMO-TAG` |
| ProviderAcctTerritoryInfo | `SourceSystemName` | `DEMO-TAG` |
| PrvdAccountTerritorySummary | `SourceSystemName` | `DEMO-TAG` |
| CareSpecialty | `Description` | `DEMO-TAG` |
| ContactPointAddress | `Name` (prefix) | `DEMO-TAG - ...` |
| ContactPointEmail | `SourceSystemName` | `DEMO-TAG` |
| ContactPointPhone | `SourceSystemName` | `DEMO-TAG` |
| ContactPointSocial | `SourceSystemName` | `DEMO-TAG` |
| BusinessLicense | `Identifier` (prefix) | `DEMO-TAG-...` |

### Deletion Order (reverse of creation)

```
1. PrvdAccountTerritorySummary (and shares)
2. ProviderAcctTerritoryInfo (and shares)
3. ObjectTerritory2Association
4. ContactPoint* records
5. BusinessLicense
6. ProviderAffiliation
7. HealthcareProviderSpecialty
8. HealthcareProviderNpi
9. HealthcareProvider
10. CareSpecialty (demo-tagged only)
11. Account (cascades delete PersonAccount)
12. Territory2 (bottom-up)
```

---

## Governor Limits & Managed Package Impact

The lsc4ce managed package triggers add significant overhead:

| Operation | Managed Pkg SOQL | Managed Pkg CPU | Safe Batch Size |
|-----------|-----------------|-----------------|-----------------|
| Account insert | ~3 queries per record | ~35ms per record | 50-100 |
| ContactPoint insert | ~3 queries per record | ~80ms per record | 15 |
| PATI insert | ~2 queries per record | Minimal | 200+ |
| PATS insert | ~1 query per record | Minimal | 200+ |

### Strategies

- **Batch contact point operations** in groups of 15 with separate transactions
- **Use `Database.insert(records, false)`** for partial success (allOrNothing = false)
- **Monitor CPU time** — if approaching 10000ms, split into smaller batches
- **Use `Database.DMLOptions` with `AllowSave = true`** for accounts to bypass duplicate rules

---

## Scenario Layering (Therapy Areas)

Scenarios add specialty-specific data on top of base records:

| Scenario | HCPs | Specialty Accounts | Agentforce Personas |
|----------|------|--------------------|---------------------|
| Oncology | Medical/Surgical/Radiation Oncologists | Cancer centers, trial sites | Med Rep, MSL, KAM |
| Cardiology | Cardiologists, Interventional, Surgeons | Heart centers, cath labs | Med Rep, KAM |
| Immunology | Rheumatologists, Dermatologists | Infusion centers, specialty pharmacies | Med Rep, Market Access |
| Neurology | Neurologists, Movement Disorder Specialists | Neuroscience centers | Med Rep, MSL |
| Rare Disease | Geneticists, Metabolic Specialists | Centers of Excellence | MSL, Market Access |

Scenarios are **additive** — apply multiple for a multi-therapeutic-area demo. Each is independently removable via its own tag.

---

## Critical Gotchas Summary

1. **PersonMailing required for mobile.** Always set `PersonMailingStreet/City/State/PostalCode/Country` on HCP PersonAccounts — the mobile app reads these, not Billing fields.
2. **Duplicate rules block inserts.** Use `DMLOptions.DuplicateRuleHeader.AllowSave = true`.
3. **State/Country Picklists.** Not all countries have state codes configured. Use empty string for unconfigured states.
4. **Batch contact points in groups of 15.** Managed package triggers eat ~50 SOQL per DML on contact points.
5. **ProviderAffiliation needs separate class.** Schema visibility issue — use a helper class.
6. **PATS needs UserId from UserTerritory2Association.** Query UTA to find which rep is assigned to each territory.
7. **Assign reps to ALL sub-territories.** Not just the country-level territory — PATS records without a matching UTA will have blank UserId.
8. **Account visibility has multiple layers.** Check OWD, profile ViewAll, permission set ViewAll, and territory sharing.
9. **Non-Latin names for JP/KR.** Use native script for names and addresses.
10. **Tag everything for cleanup.** Use consistent tag fields so demo data can be cleanly removed.
11. **Delete in reverse order.** Child records must be deleted before parents.
12. **PATS summaries should be localized.** Use country code to select language-appropriate templates.
13. **ContactPointAddress for both HCO and HCP.** Don't filter to `IsPersonAccount = false` — HCPs need ContactPointAddress too.
14. **Territory2Model must be Active.** Assignments fail silently against inactive models.
15. **CPU time with managed package.** Monitor `Maximum CPU time` in debug logs — lsc4ce triggers are expensive.

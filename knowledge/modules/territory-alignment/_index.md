# Territory Alignment

AFLS uses Salesforce Enterprise Territory Management for sharing HCP/HCO records to field reps. Account-to-Territory alignment is achieved through three direct UI jobs + one internal dependent job, keeping `ObjectTerritory2Association` (drives sharing) and `ProviderAcctTerritoryInfo` (engagement data) in sync.

## The Four Jobs

| Job | Source of alignment | Direct UI |
|---|---|---|
| **Align Account to Territory** | Manual OT2A records | ✅ |
| **Align Zip to Territory** | Postal code + TerrGeoAssignmentRule | ✅ |
| **Align Brick to Territory** | Brick name + TerrGeoAssignmentRule | ✅ |
| **Align Affiliations to Territory** | ProviderAffiliation + TerrProvAffilAssignRule | ❌ Internal — runs after each of the above |

## Key Concepts

- **OT2A vs PATI** — OT2A drives sharing (access); PATI captures engagement data and is what mobile syncs as the account list
- **Valid Provider** criteria — Active Account + linked HCP + IsPrimaryProvider on HCP
- **Source Type accumulation** — `Manual:Zip:Affiliation` semicolon list; PATI only deactivates when ALL sources are no longer valid

## Documentation Files

- [Territory Alignment Configuration Guide](./territory-alignment-configuration-guide.md)
- [Territory Alignment Admin Transcript](./territory-alignment-admin-transcript.md)

## Support Engineering Training (AFLS4CE Value Chain)

- [support-engineering-alignment-jobs](./support-engineering-alignment-jobs.md) — Apr 17, 2026 session. All 4 alignment jobs (3 UI + 1 internal), valid-provider 3-flag criteria, OT2A vs PATI roles, source-type accumulation and cleanup logic, scheduling guidance, 6 troubleshooting patterns with SOQL queries, mobile delta-sync answer.

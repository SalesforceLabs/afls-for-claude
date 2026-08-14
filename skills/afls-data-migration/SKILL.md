------

For data migration guidance, call `search_afls_knowledge({ query: "data migration" })` to get sourced documentation.


-------|------------|
| Account (HCP) | Account (PersonAccount) + HealthcareProvider |
| Account (HCO) | Account (Business Account) |
| Address_vod__c | ContactPointAddress |
| Affiliation_vod__c | ProviderAffiliation |
| Territory2 | Territory2 (same) |
| Call2_vod__c | Visit + ProviderVisit |
| Call2_Detail_vod__c | ProviderVisitPrdDetailing |
| Sample_Transaction_vod__c | InventoryOperation + ProductDisbursement |
| Product_vod__c | Product2 + LifeSciMarketableProduct |

## Tools to Use

- `bulk_create_records` — Load multiple records at once
- `bulk_update_records` — Update existing records in bulk
- `run_soql` — Query existing data for validation
- `describe_sobject` — Check field names and types before loading
- `run_apex` — Run batch jobs or data fix scripts


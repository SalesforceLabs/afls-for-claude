---
name: salesforce-query
description: Helps construct and execute SOQL queries against AFLS orgs. Use when user needs to query data, check configurations, or explore the AFLS data model in their Salesforce org.
---

For AFLS-specific query guidance, call `search_afls_knowledge({ query: "<topic>" })` to get sourced documentation about the relevant objects and fields.


# Salesforce Query Assistant for AFLS

You help users query and explore their AFLS Salesforce orgs.

## Before Querying

1. **Check setup status** with `check_afls_setup` to ensure:
   - Salesforce CLI is installed
   - User is authenticated to an org
   - Target org is set

2. **If not set up**, guide through:
   - Installing SF CLI with `install_sf_cli`
   - Authenticating: `sf org login web --alias my-afls-org`
   - Setting target with `set_target_org`

## Important: Discover Object Names First

AFLS object API names vary by implementation and package version. **Always use `describe_sobject` to verify object and field names** before writing queries.

Common objects to explore:
- `Account` - HCPs and HCOs (often PersonAccount)
- `Visit` or similar - Visit records
- `Product2` - Products
- Territory-related objects

## Query Workflow

1. **Ask user what data they need**
2. **Use `describe_sobject`** to find the correct object and field names
3. **Build the query** using discovered field names
4. **Execute with `run_soql`**
5. **Iterate** if needed

## Example Workflow

User: "Show me recent visits"

1. First, discover the Visit object:
   ```
   describe_sobject for likely visit objects
   ```

2. Then query with actual field names from the describe result

## Objects That Cannot Be Queried via SOQL

Some Salesforce metadata is **not accessible via SOQL** — these require the **Tooling API** or **Metadata API** instead:

| Object / Feature | Correct API |
|-----------------|-------------|
| `CompactLayout` / Compact Layouts | Tooling API or Metadata API |
| `LifeSciConfigRecord` / Admin Console settings | Tooling API (`list_admin_settings`) |
| `LifeSciConfigFieldValue` / DB Schema records | Tooling API (`list_db_schema`) |
| Quick Actions / Custom Actions | Tooling API (`list_afls_actions`) |
| Page Layouts | Metadata API (`retrieve_metadata`) |

**NEVER use `run_soql` for compact layouts.** Use `retrieve_metadata` to fetch compact layout metadata, or use the Tooling API with a query like:
```
SELECT Id, Name, Label FROM CompactLayout WHERE EntityDefinitionId = '<ObjectId>'
```
via `sf data query --use-tooling-api`.

## Tips

- Start with small LIMIT values to test queries
- Use `describe_sobject` liberally - don't assume field names
- AFLS uses Health Cloud/Industry Cloud objects, not custom `__c` objects for core functionality
- Check the Admin Console documentation for feature-specific object relationships


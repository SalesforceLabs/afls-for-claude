---
description: Run a SOQL query against your connected AFLS org
---

# Run SOQL Query

Execute a SOQL query against the connected Salesforce AFLS org.

$ARGUMENTS

## Steps

1. First verify org connection with `check_afls_setup`

2. If a query was provided in arguments:
   - Execute it with `run_soql`
   - Format results as a readable table

3. If no query provided:
   - Ask what data the user wants to query
   - Suggest using `describe_sobject` first to discover object and field names
   - Help construct the query based on actual field names

4. If user describes what they need (e.g., "show me accounts"):
   - Use `describe_sobject` to find actual field names
   - Build query with verified fields
   - Execute and display results

5. Common starting queries:
   - `SELECT Id, Name FROM Account LIMIT 10`
   - `SELECT Id, Name FROM Product2 LIMIT 10`

Note: AFLS object API names vary by implementation. Always verify field names with `describe_sobject` before constructing complex queries.

Present query results in a clean, readable format.

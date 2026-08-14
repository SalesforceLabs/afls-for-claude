---
description: Describe a Salesforce object to see its fields and metadata
---

# Describe Salesforce Object

Get detailed metadata about a Salesforce object including all fields, types, and properties.

$ARGUMENTS

## Steps

1. Verify org connection with `check_afls_setup`

2. If an object name was provided in arguments:
   - Use `describe_sobject` to get metadata
   - Display fields in a formatted table

3. If no object specified:
   - Ask which object to describe
   - Suggest starting points:
     - `Account` - HCPs and HCOs
     - `Product2` - Products
     - `Territory2` - Territories
   - Note: AFLS object API names vary by implementation - use describe to discover actual names

4. Highlight key field information:
   - Required fields
   - Field types
   - Updateable status
   - Picklist values (if applicable)

5. Provide tips for common operations with the object

Note: AFLS is built on Health Cloud/Industry Cloud. Object API names depend on the installed packages and version. Always use `describe_sobject` to discover the actual schema in your org.

Format output for easy reference when building queries or integrations.

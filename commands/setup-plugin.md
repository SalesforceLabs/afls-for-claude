---
description: Check AFLS plugin setup status and connect to a Salesforce org
---

# AFLS Setup Check

Check the current setup status for the AFLS plugin and guide through connecting to a Salesforce org if needed.

## Steps

1. Use `check_afls_setup` to verify:
   - Salesforce CLI installation status
   - Authenticated orgs
   - Current target org

2. If SF CLI is not installed:
   - Offer to install with `install_sf_cli`
   - Or provide manual installation instructions

3. If no orgs authenticated:
   - Provide the authentication command: `sf org login web --alias my-afls-org`
   - For sandbox: `sf org login web --alias my-sandbox --instance-url https://test.salesforce.com`

4. If multiple orgs exist:
   - List them with `list_sf_orgs`
   - Help user select with `set_target_org`

5. Once connected:
   - Confirm the target org
   - Show available AFLS tools and capabilities

Present the results in a clear, actionable format.

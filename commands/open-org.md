---
description: Open the Salesforce org in your browser
---

# Open Salesforce Org

Open the current target Salesforce org in the default browser.

## Steps

1. Use the `open_org` tool to open the org in the browser.
   - If the user specified a page (e.g., "setup", "home"), pass it as the `path` parameter:
     - Setup Home: `/lightning/setup/SetupOneHome/home`
     - Object Manager: `/lightning/setup/ObjectManager/home`
     - App Manager: `/lightning/setup/NavigationMenus/home`
   - Otherwise, omit the `path` parameter to open the org's default landing page.

2. If no preferred org has been set in this session:
   - Use `list_sf_orgs` to find available orgs.
   - Ask the user which org to use.
   - Call `set_target_org` with their choice before calling `open_org`.

3. Display the URL and org details returned by the tool.

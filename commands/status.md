---
description: View a dashboard of the connected AFLS org
---

# Org Status

Show a single dashboard view of the connected AFLS org.

## Steps

1. Use the `get_org_status` tool to retrieve the org status.

2. Present the dashboard showing:
   - Org name, type (production/sandbox), and instance
   - Installed managed packages and versions
   - Enabled features (active trigger handlers)
   - Territory model status
   - Active AFLS user count

3. If any areas look unusual (no packages, no active handlers), flag them for the user.

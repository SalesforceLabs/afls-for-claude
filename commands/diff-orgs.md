---
description: Compare configuration between two Salesforce orgs
---

# Diff Orgs

Compare AFLS configuration between two Salesforce orgs to identify configuration drift.

## Steps

1. If no preferred org has been set in this session:
   - Use `list_sf_orgs` to find available orgs.
   - Ask the user which two orgs to compare.
   - Call `set_target_org` with their primary org choice.

2. Use the `diff_orgs` tool with the two org aliases or usernames.
   - The tool compares: trigger handlers, Admin Console settings, DB Schema records, and AFLS actions.

3. Present the differences in a clear format:
   - **Trigger Handlers** — mismatched active/inactive states
   - **Admin Console Settings** — differing field values by category
   - **DB Schema** — records present in one org but not the other, or with different configurations
   - **Actions** — Quick Actions and Custom Actions that differ

4. For each difference, explain:
   - What the setting controls
   - Which org's configuration is likely correct (if determinable)
   - How to resolve the drift

5. Offer to help align the configurations if the user wants to make changes.

---
description: Interactive onboarding — check setup, discover capabilities, and get your first task done
---

# Getting Started with AFLS for Claude

Walk a new user through setup, introduce the plugin's capabilities, and help them take their first action.

$ARGUMENTS

## Steps

1. **Check setup** — use `check_afls_setup` to verify Salesforce CLI and org connectivity.
   - If CLI is missing or no orgs are authenticated, walk through the setup steps (same as `/afls:setup-plugin`).
   - Once an org is connected, confirm it and move on.

2. **Show a quick org snapshot** — use `get_org_status` to display:
   - Org name, type (production/sandbox), and instance
   - Installed packages and versions
   - Active user count

3. **Ask the user their role** — present these options:
   - **Consultant** — implementing AFLS for a customer
   - **Administrator** — managing an existing AFLS org day-to-day
   - **Developer** — building custom functionality or integrations

4. **Recommend next steps based on role:**

   **Consultant:**
   - Run `/afls:health-check` to assess the org
   - Use the `afls-implementation` skill by asking about a specific module (e.g., "Help me implement Visit Management")
   - Browse documentation with `/afls:docs`
   - Invoke the `afls-consultant` agent for complex implementation planning

   **Administrator:**
   - Run `/afls:status` for an org dashboard
   - Run `/afls:health-check` to find configuration issues
   - Use `/afls:configure-*` commands for guided module setup (e.g., `/afls:configure-visits`)
   - Use the `afls-admin` agent for operational tasks

   **Developer:**
   - Use `/afls:describe <object>` to explore the data model
   - Use `/afls:soql-query` to query org data
   - Browse the developer guide with `/afls:help developer guide`
   - Use the `afls-developer` agent for OmniStudio and custom development guidance

5. **Offer a quick win** — based on the user's role, suggest one concrete action they can take right now:
   - Consultant: "Want me to run a health check on your org?"
   - Administrator: "Want me to show your current DB Schema configuration?"
   - Developer: "Want me to describe any AFLS object for you?"

Present everything in a welcoming, concise format. Use headers and short bullet lists — avoid walls of text.

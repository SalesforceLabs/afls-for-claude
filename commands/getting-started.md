---
description: Interactive onboarding — check setup, discover capabilities, and get your first task done
---

# Getting Started with Life Sciences Cloud (LSC) for Claude

Walk a new user through setup, introduce the plugin's capabilities, and help them take their first action.

$ARGUMENTS

## Steps

1. **Check setup** — use `check_lsc_setup` to verify Salesforce CLI and org connectivity.
   - If CLI is missing or no orgs are authenticated, walk through the setup steps (same as `/lsc:setup-plugin`).
   - Once an org is connected, confirm it and move on.

2. **Show a quick org snapshot** — use `get_org_status` to display:
   - Org name, type (production/sandbox), and instance
   - Installed packages and versions
   - Active user count

3. **Ask the user their role** — present these options:
   - **Consultant** — implementing LSC for a customer
   - **Administrator** — managing an existing LSC org day-to-day
   - **Developer** — building custom functionality or integrations

4. **Recommend next steps based on role:**

   **Consultant:**
   - Run `/lsc:health-check` to assess the org
   - Use the `lsc-implementation` skill by asking about a specific module (e.g., "Help me implement Visit Management")
   - Browse documentation with `/lsc:docs`
   - Invoke the `lsc-consultant` agent for complex implementation planning

   **Administrator:**
   - Run `/lsc:status` for an org dashboard
   - Run `/lsc:health-check` to find configuration issues
   - Use `/lsc:configure-*` commands for guided module setup (e.g., `/lsc:configure-visits`)
   - Use the `lsc-admin` agent for operational tasks

   **Developer:**
   - Use `/lsc:describe <object>` to explore the data model
   - Use `/lsc:soql-query` to query org data
   - Browse the developer guide with `/lsc:help developer guide`
   - Use the `lsc-developer` agent for OmniStudio and custom development guidance

5. **Offer a quick win** — based on the user's role, suggest one concrete action they can take right now:
   - Consultant: "Want me to run a health check on your org?"
   - Administrator: "Want me to show your current DB Schema configuration?"
   - Developer: "Want me to describe any LSC object for you?"

Present everything in a welcoming, concise format. Use headers and short bullet lists — avoid walls of text.

---
description: Browse and navigate AFLS documentation by category
---

# AFLS Documentation Browser

Browse all available AFLS documentation organized by category.

$ARGUMENTS

## Steps

1. If a specific category or module was provided in arguments, jump directly to it (step 3 or 4).

2. If no argument provided, show the top-level documentation index:

   **Documentation Categories:**
   - **Modules** — PM enablement content for all 28 AFLS modules (account management, visit management, samples, etc.)
   - **Help Docs** — Official Salesforce help documentation (15 reference articles)
   - **Guides** — Developer guide and mobile setup guide
   - **Exercises** — Hands-on training exercises
   - **Troubleshooting** — Common issues and resolutions

   Ask the user which category they want to explore.

3. When the user selects **Modules**:
   - Use `list_afls_modules` to show all available modules with doc counts
   - Ask which module they want to read
   - Use `get_afls_module_docs` to retrieve and display the full content

4. When the user selects **Help Docs**:
   - Use `list_afls_help_docs` with type `help` to list available articles
   - Ask which article they want to read
   - Use `get_afls_help_doc` to retrieve and display the content

5. When the user selects **Guides**:
   - Use `list_afls_help_docs` with type `guide` to show available guides:
     - Life Sciences Developer Guide
     - AFLS Mobile Setup and Configuration Guide
   - Ask which guide they want to read
   - Use `get_afls_guide` to retrieve and display the content

6. When the user selects **Exercises**:
   - Use `list_afls_help_docs` with type `exercise` to list available exercises
   - Ask which exercise they want to read
   - Use `get_afls_exercise` to retrieve and display the content

7. When the user selects **Troubleshooting**:
   - Use `get_afls_troubleshooting` to retrieve and display common issues and resolutions

8. After displaying any document, offer to:
   - Go back to the category list
   - Search for a specific topic with `/afls:help <topic>`
   - View a related module or document

Keep navigation conversational — confirm what the user wants to see before fetching large documents like the Developer Guide.

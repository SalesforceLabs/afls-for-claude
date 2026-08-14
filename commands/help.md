---
description: Get help on an AFLS topic by searching across all documentation
---

# AFLS Help

Search across all AFLS documentation for specific topics, features, or configuration guidance.

$ARGUMENTS

## Steps

1. If a topic was provided in arguments:
   - Use `search_afls_knowledge` to find relevant documentation
   - Display results with excerpts and module references

2. If no topic provided:
   - Ask what the user wants to learn about
   - Suggest common topics:
     - "sample limits" - Sample management configuration
     - "provider card" - Account Management FlexCard
     - "territory alignment" - Territory configuration
     - "admin console" - Module administration
     - "mobile" - iPad/mobile functionality

3. For each result, show:
   - Document title
   - Module it belongs to
   - Relevant excerpt
   - The citation block exactly as returned (lines starting with > 📖, > 🔗, > 📂) — do NOT rephrase, reformat, or omit these lines

4. Offer to:
   - Get full module docs with `get_afls_module_docs`
   - Explain a specific concept with `explain_afls_concept`
   - Get admin setup guide with `get_afls_admin_setup`
   - Browse all documentation with `/afls:docs`

Present results in order of relevance with clear excerpts. Always preserve citation blocks verbatim.

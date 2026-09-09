---
name: afls-implementation-review
description: Reviews an AFLS / Life Sciences Cloud implementation against field-observed anti-patterns that cause production incidents and blocked go-lives — sharing model, sample/inventory, mobile sync, over-customization, territory realignment, data/MDM, Agentforce scoping, and UAT/go-live discipline. Use when the user asks to review, assess, health-check, or de-risk an implementation or design; is planning a go-live; is deciding whether to add a custom object or change an OWD/permission; or is diagnosing a post-go-live incident (Sev-1, API limits, duplicate records, inventory-count failures). Also use proactively when a proposed configuration matches a known anti-pattern.
---

## What this skill covers

Catching **implementation design decisions** that repeatedly cause AFLS
production incidents, blocked go-lives, and eroded trust — *before* they ship.
The recurring root cause is trial-and-error configuration against AFLS's
**opinionated, pre-built data model** without validating consequences in a
production-like sandbox.

The authoritative content is the anti-pattern catalog. Load it first:

```
get_afls_troubleshooting({ topic: "implementation-anti-patterns" })
```

For background on any specific area, also use
`search_afls_knowledge({ query: "..." })`.

## When to activate

- The user asks to **review / assess / health-check / de-risk** an implementation or a proposed design.
- The user is **planning a go-live** or asking "are we ready?".
- The user proposes a change that **matches a known anti-pattern** — flag it proactively:
  - Changing an **OWD** (especially Visit) to Public/Controlled-by-Parent.
  - Granting **"View All" / "Modify All"** on Visit, ProductDisbursement, or inventory objects.
  - Adding a **custom object** or a **non-standard screen** that shadows standard AFLS objects.
  - Proposing **OmniStudio** for anything in the **mobile** scope (it is web-only).
  - Setting a **very short mobile sync interval** or enabling **attachments on every DB Schema record**.
  - Rolling out **Agentforce** before the data foundation / MDM is ready.
- The user is **diagnosing a post-go-live incident** (Sev-1, API-limit "death loop", duplicate visits, reps unable to submit inventory counts). Treat these as **config/design issues first, product bugs last** — historically ~90% are config/knowledge gaps.

## How to run a review

1. **Load the catalog** (`get_afls_troubleshooting({ topic: "implementation-anti-patterns" })`) and work its **Pre-Go-Live Review Checklist**.
2. **Inspect the live org where possible** rather than asking. Useful tools:
   - Sharing/visibility & permissions → `describe_sobject`, `list_permission_sets`, `check_user_config`.
   - Mobile sync & cache → `list_db_schema` / `get_db_schema` (attachment flags, SOQL filters), `check_mobile_cache_status`.
   - Data model bloat → look for custom objects shadowing standard ones (`Visit`, `ProductDisbursement`, `ProviderVisit`, etc.).
   - Territory → `check_territory_config`.
   - Overall → `health_check`, `get_org_status`.
3. **Map findings to anti-patterns.** For each finding, state: the pattern, why it fails on the AFLS data model, and the correct approach — straight from the catalog.
4. **Prioritize by go-live risk.** Sharing-model and mobile-sync issues that can cause Sev-1 or block regulated reporting rank first.
5. **Recommend remediation before go-live, not after.** If several checklist items fail, say plainly that the program matches the recurring failure profile and remediation should precede go-live.

## Guardrails

- **Never widen access as a first resort.** Before any OWD change or "View All" grant on a core AFLS object, establish what platform logic depends on that object's ownership/sharing (inventory counting keys off ProductDisbursement ownership; Visit is designed to be Private).
- **Default to standard config.** Require a written justification for each custom object; prefer standard layouts/actions.
- **OmniStudio is web-only** — never propose it for mobile/iPad.
- **UAT on a full-copy sandbox on production's release, with production-scale data.** Off-release or partial sandboxes hide exactly these defects.
- These lessons are **de-identified and generalized** — describe the pattern and the fix, not any customer or partner.

## Related

- `afls-troubleshoot` — symptom-driven module troubleshooting.
- `afls-health-check` / `/afls:health-check` — config-completeness verification.
- `afls-config-migration` — safe promotion of config between orgs (revert experiments; don't migrate everything).
- Catalog: `knowledge/troubleshooting/implementation-anti-patterns.md`.

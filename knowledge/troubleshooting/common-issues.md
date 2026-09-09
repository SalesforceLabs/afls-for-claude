# AFLS Common Issues & Troubleshooting — Index

Start here when diagnosing an AFLS issue. This index points to the detailed
troubleshooting documents; load the one that matches the symptom.

## Troubleshooting documents

| Topic | Load with | Covers |
|---|---|---|
| **Implementation anti-patterns** | `get_afls_troubleshooting({ topic: "implementation-anti-patterns" })` | Design/config decisions that cause production incidents and blocked go-lives — sharing model, inventory, mobile sync, over-customization, territory, MDM, Agentforce, UAT/go-live discipline. **Check this first for design-review and post-go-live incidents.** |
| **Visit Management** | `get_afls_troubleshooting({ topic: "visit-troubleshooting" })` | Visits not saving/syncing on mobile, record-type mismatches, detailing, signatures, calendar. |
| **Sample Management** | `get_afls_troubleshooting({ topic: "sample-troubleshooting" })` | Sample limits, disbursement, inventory counts. |
| **Territory Alignment** | `get_afls_troubleshooting({ topic: "territory-troubleshooting" })` | Territory assignment, geo/affiliation rules, `ProviderAcctTerritoryInfo`. |

## Fast triage

- **"It broke right after go-live" / Sev-1** → almost always a **design/config
  anti-pattern**, not a product bug. Start with the implementation-anti-patterns
  doc (sharing model, mobile sync, API sizing).
- **"Reps can't submit inventory counts"** → check the **sharing model** first
  (Visit OWD, "View All" on ProductDisbursement) — see anti-patterns §1–§2.
- **"Duplicate visits on mobile"** → mobile **sync interval / timeout** and app
  version — see anti-patterns §3.
- **"Sync is slow / cache is huge"** → **DB Schema** attachment flags and SOQL
  filters — see anti-patterns §3 and `list_db_schema`.
- **Symptom is module-specific** → load the matching module doc above.

## Deeper module content

For module-specific engineering detail beyond these files, search the knowledge
base: `search_afls_knowledge({ query: "<symptom or object>" })`. The richest
support-engineering material lives in the `support-engineering-*` documents
within each module.

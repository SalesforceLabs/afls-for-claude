# AFLS Implementation Anti-Patterns — Field-Observed Lessons

A catalog of implementation decisions that have repeatedly caused production
incidents, blocked go-lives, or eroded customer trust on AFLS / Life Sciences
Cloud programs. These are **generalized, de-identified lessons** distilled from
real escalations and health assessments — the goal is to help you *avoid* them,
not to attribute them.

> **How to use this.** When reviewing an implementation, planning a go-live, or
> diagnosing a post-go-live incident, check the design against these patterns.
> Each entry names the anti-pattern, why it fails on the AFLS data model, and the
> correct approach. The recurring root cause across nearly all of them is the
> same: **trial-and-error configuration against an opinionated, pre-built data
> model, without validating consequences in a production-like sandbox.**

---

## 1. Sharing & Visibility Model

AFLS ships an **opinionated sharing model**. Reps' visits and sample
disbursements are designed to be **Private** at the org-wide default (OWD) and
shared through territory hierarchy, not through blanket access.

| Anti-Pattern | Why it fails | Correct approach |
|---|---|---|
| Flipping the **Visit OWD from Private to Public/Controlled-by-Parent** so reps can see each other's visits | The platform is designed for **private Visit sharing**. Widening the OWD conflicts with built-in controllers and inflates record-visibility counts (and therefore API/sharing-recalculation load). | Keep Visit **Private**. Achieve cross-rep visibility through **territory hierarchy sharing** (`TerritoryAndSubordinates`) or sharing rules — not OWD changes. |
| Granting **"View All" on ProductDisbursement** (often to "make reporting easier") | ProductDisbursement records back **inventory counting**. Inventory reconciliation logic keys off record **ownership**; with "View All", other reps' unreconciled disbursements are read as an ownership/state violation and **reps can no longer submit inventory counts** — which blocks regulated (e.g. FDA) reporting. | Do **not** set "View All" (or "Modify All") on ProductDisbursement. Give reps standard object access and rely on ownership + territory sharing. If cross-rep reporting is needed, use reports/CRMA on a separate sharing path, not object-level "View All". |

**Rule of thumb:** before changing any OWD or granting a "View All"/"Modify All"
permission on a core AFLS object (Visit, ProductDisbursement, ProductRequest,
inventory objects), find out *what platform logic depends on ownership or
sharing of that object first.* Widening access is rarely the right fix.

---

## 2. Sample Management & Inventory

| Anti-Pattern | Why it fails | Correct approach |
|---|---|---|
| Assuming inventory-count failures are a **product bug** | The most common cause is a **sharing/visibility misconfiguration** (see §1) — the controller sees records the rep doesn't own. | Check the sharing model and ownership before filing a defect. Confirm the rep can only see disbursements they own. |
| Going live on **static / demo sample data** | Sample limits, disbursement, and inventory logic behave differently under real data volumes and real `TimePeriod`/batch state. Demo data hides these. | Load **representative production data** before UAT sign-off; exercise the full sample loop (request → disbursement → count → reconciliation). |

---

## 3. Mobile Sync & Metadata Cache

The mobile app syncs on a schedule and caches metadata per profile. Over-broad
sync configuration is a top source of Sev-1 incidents.

| Anti-Pattern | Why it fails | Correct approach |
|---|---|---|
| Enabling the **attachment flag on every** Object Mobile Configuration (DB Schema) record | Bloats the mobile payload and sync/cache time massively — attachments are large and rarely needed on every object. | Enable attachment sync **only** on the objects that truly need it (`AttachmentsSupport`). Audit DB Schema records for blanket attachment flags. |
| Setting a **very short sync interval** (e.g. every 5 minutes) | Combined with the mobile timeout window, short intervals produce **duplicate records** (notably duplicate Visits) when a sync overlaps a still-processing transaction. Shortening the interval also multiplies API and server load. | Use a sane sync interval. If you see duplicates, do **not** just tweak the interval/timeout as a workaround — treat duplicates as a correctness issue and confirm the platform-level fix is applied. |
| Treating **duplicate records** as tunable via timeout config alone | Changing the Mobile Timeout Period may reduce but not eliminate duplicates — the root cause is transactional, not just timing. | Confirm the current mobile app + platform version includes the duplicate-prevention fix; validate on a full-copy sandbox on the **same release as production**. |

---

## 4. Data Model & Over-Customization

AFLS is a **pre-built, opinionated data model**. Custom objects and non-standard
UI that duplicate or bypass standard objects are the leading source of
long-term technical debt and off-roadmap divergence.

| Anti-Pattern | Why it fails | Correct approach |
|---|---|---|
| Proliferating **custom objects** that shadow standard AFLS objects | In assessments, only a small fraction of flagged custom objects turn out to be justified. Custom builds miss standard behavior (sharing, sync, actions), can't ride the roadmap, and become unmaintainable. | Default to **standard objects and configuration**. Require a written justification for each custom object. |
| Building **non-standard screens** (e.g. a custom visit screen) that deviate from standard layouts | Deviating from standard page-layout/action patterns breaks mobile behavior and future upgrades; high maintenance burden. | Configure standard layouts and actions first. Only customize where a documented gap exists. |
| **Using OmniStudio for mobile customization** | OmniStudio (FlexCards, OmniScripts, DataRaptors) is **not available anywhere in the AFLS mobile/iPad app** — it is web-only. | Never propose OmniStudio for mobile. Use standard mobile configuration (DB Schema, actions, layouts, custom scripts where supported). |

**Governance fix:** require **mandatory mid-build ADR (Architecture Decision
Record) checkpoints** and an architect/design-authority sign-off before any
custom object or non-standard screen is built. "Trial-and-error, then migrate
everything" with no revert of experimental config is the failure mode to prevent.

---

## 5. Territory Alignment

| Anti-Pattern | Why it fails | Correct approach |
|---|---|---|
| Expecting territory **realignment to be cheap at scale** | Realignment can **drop-and-recreate `ObjectTerritory2Association` records**, which may trigger a **full account re-sync** each run and significant performance impact. | Plan realignment runs off-peak; validate re-sync volume and mobile sync impact on a production-scale sandbox before running in production. |
| Running **full data refresh every alignment run** without considering volume | Full refresh (vs. incremental) is heavy; at scale it strains sync and API. | Understand the alignment job's refresh behavior and schedule accordingly; size for it. |

---

## 6. Data Migration & MDM

| Anti-Pattern | Why it fails | Correct approach |
|---|---|---|
| Running large migrations **without an MDM / data foundation** (e.g. many sources reconciled by hand in spreadsheets) | Poor data integrity undermines the entire program — territory alignment, sample limits, activity goals, and agentic features all depend on clean, matched data. | Stand up **MDM / a clean data foundation first**. Run **formal migration audits** before go-live. |
| Layering **agentic (Agentforce) features on unclean data** | Agent recommendations are only as good as the underlying data; dirty data produces wrong/blocked actions and destroys user trust immediately. | Sequence **MDM setup and data validation *before* agentic rollout**. |

---

## 7. Agentforce for Life Sciences

| Anti-Pattern | Why it fails | Correct approach |
|---|---|---|
| **Over-scoping topics/actions** and assuming users will hit exact utterances | With classic Agentforce, if there's no matching pre-defined topic/sub-agent, the conversation can't continue; slight utterance deviations get blocked and users fall into an "explain it to the AI" loop. | Design for the **actual utterances reps use**; keep topics focused and well-covered; test with real user language, not idealized prompts. Consider the setup-flag-driven co-worker style where appropriate rather than hand-building brittle topic trees. |
| Rolling out the agent **before the data foundation is ready** (see §6) | Same root cause as §6 — the agent surfaces and acts on bad data. | Gate agentic go-live on data readiness. |

---

## 8. UAT, Sandbox & Go-Live Discipline

The single highest-leverage prevention. Most of the incidents above were
*findable before go-live* and were missed due to weak UAT.

- **UAT must run on a full-copy sandbox on the same release as production.** A
  partial or off-release sandbox hides sampling, inventory, sharing, and sync
  defects that only appear under real data and the production release.
- **Experimental configuration belongs in a throwaway sandbox** — not in the
  path that gets migrated to production. Revert experiments; don't "migrate
  everything."
- **Run pre-go-live performance tests and Day-1 API sizing** with production data
  loads. API-limit exhaustion within hours of go-live is a recurring "death
  loop" pattern — size for it in advance.
- **Define minimum UAT thresholds and a formal OCM (change management) plan.**
  Build-centric delivery with deferred change management yields low adoption even
  when the build is correct.
- **Don't compress the timeline with late scope increases.** Significant scope
  added shortly before deployment is a reliable predictor of slipped or failed
  go-lives.

---

## 9. Governance & Program (why the technical anti-patterns recur)

The technical patterns above cluster on programs missing these guardrails:

- **No staffed architect / design authority** → unreviewed custom workarounds.
- **No mid-build ADR checkpoints** → risks surface too late, in production.
- **No single source of truth for defects** → "showstopper" lists drift between
  external trackers and reality; resolved items reappear as blockers; defects
  and enhancements get mixed.
- **Selling ahead of validated product capability** → unmanageable expectation
  gaps at UAT ("a slide is not a contract").

Fixes: milestone staffing triggers, mandatory ADR checkpoints, a formal steering
committee / design authority, one reconciled defect ground-truth, and a
prescriptive **implementation blueprint** (a menu of standard design choices)
instead of open-ended customization.

---

## Pre-Go-Live Review Checklist

Use this as a fast screen against the anti-patterns above:

- [ ] **Sharing:** Visit OWD is **Private**; no "View All"/"Modify All" on Visit, ProductDisbursement, or inventory objects. Cross-rep visibility uses territory hierarchy.
- [ ] **Inventory:** A rep can submit an inventory count end-to-end; they see only disbursements they own.
- [ ] **Mobile sync:** Attachment flag enabled only where needed; sync interval is sane; no duplicate-record symptoms; app + platform on the current release with duplicate-prevention fix.
- [ ] **Data model:** Every custom object has a written justification; no OmniStudio in the mobile scope; screens use standard layouts/actions.
- [ ] **Territory:** Realignment re-sync volume and performance validated at production scale.
- [ ] **Data/MDM:** MDM/data foundation in place; migration audit passed; agentic features gated on data readiness.
- [ ] **Agentforce:** Topics scoped to real utterances and tested with real user language.
- [ ] **UAT:** Full-copy sandbox on production's release; production-scale data; pre-go-live performance test + Day-1 API sizing done.
- [ ] **Governance:** Architect/design authority staffed; ADR checkpoints held; single defect source of truth; scope frozen before go-live; OCM plan in place.

If several boxes are unchecked, the program is exhibiting the recurring
failure profile — flag it and recommend remediation before go-live, not after.

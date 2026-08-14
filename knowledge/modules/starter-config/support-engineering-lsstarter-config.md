# LSStarterConfig — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Feb 19, 2026
**Audience:** Support engineers
**Source:** Engineering training series (Gemini transcript)
**Presenter:** Srikant Chonnad

## Overview

This session walks support engineers through the **LSStarterConfig** open-source repository — what it is, how it deploys, and how to troubleshoot the three deployment paths (Workbench, CLI, Heroku). The release-tied configuration changes for Spring '26 are documented separately in `release-260-lsstarter-config.md`; this file is the evergreen support reference covering live Q&A and edge cases from the training.

> **Companion file:** `release-260-lsstarter-config.md` covers the deck, repo structure, prerequisites, and the three deployment methods in step-by-step form. This file focuses on **what support engineers should know that isn't in the deck** — duplicate handling logic, edge cases, the upsert vs. insert distinction, and Heroku constraints.

## Key Concepts (live walkthrough recap)

### Why the repo refuses to deploy on a non-empty org

The `data_load.sh` script performs an explicit check before doing anything: **if the LifeSciMetadata object contains any records, the script exits without deploying.**

This is intentional:

- **Metadata deployment (Workbench)** = **upsert** — overwriting is fine, that's how Salesforce metadata works by default.
- **Data deployment (CLI scripts)** = **insert** — duplicates would fail. Rather than partial-success-with-errors, the script bails early.

> **Support escalation pattern:** "I ran the script and nothing happened" → check if the LifeSciMetadata object already has records. If yes, the customer has already started configuring; LSStarterConfig is not the right tool for them. Fall back to manual config or documentation.

### Two-stage deployment (pre-260) — why it existed

The `1_inactive` then `2_activate` two-zip flow was a workaround for a sequencing constraint: in pre-260 metadata, the `IsActive` flag on `LifeSciConfig` records couldn't be set in the same deployment that created the records. The first zip created records inactive; the second flipped them active.

**This is fixed in 260.** The `1_inactive` folder is unusable post-260 and only the activation zip is needed. Support engineers helping a customer on a pre-260 repo (or a customer who cloned an old version) should ensure they run **both** zips in order.

### What gets deployed by which method

| Component | Workbench | CLI | Heroku |
|---|---|---|---|
| DB Schemas (`LifeSciConfig*` metadata) | ✅ | ✅ | ✅ |
| System Admin settings (`LifeSciConfig*` data on metadata entities) | ✅ | ✅ | ✅ |
| Business Admin settings (`LifeSciMetadata*` data) | ❌ | ✅ | ✅ |
| Sample profile (`AFLS Custom Profile`) | ❌ | ✅ | ✅ |
| Trigger handler activations | ❌ | ✅ | ✅ |

Workbench alone is incomplete for a "full bootstrap." Use CLI or Heroku for that.

## Heroku App — Constraints to Know

The Heroku app (`https://lsstarterconfig-0d89525d2eb3.herokuapp.com/`) was introduced specifically to remove the CLI friction. It internally runs the same `data_load.sh` after auth-ing the user against the target org.

**Support team rules (from the session):**

- ❌ **Do not share with customers.** It is intended for internal Salesforce team use (Support, SE) — even when running on behalf of a customer, use the customer's credentials on a Salesforce machine, never hand the URL to the customer.
- ❌ **No P1/P2/P3 bugs.** Only P4. If a real issue blocks a customer, switch them to Workbench or CLI immediately.
- ⚠️ **Parallel limit:** more than 15–20 simultaneous deployments degrades the dynos and queues requests. Coordinate within the team during release-week rushes.
- ✅ **All sandbox instances supported.**
- ⚠️ **Production restriction:** only `USA794` and `USA796` instances are supported on prod. Other prod instances will not work — fall back to CLI.
- 💡 **Login tip:** If the default Salesforce login flow fails (most often on sandboxes), tick "Use Custom Domain" and enter the org's My Domain URL.

## Troubleshooting Patterns

### "Script deploys nothing / exits immediately"

Cause: the org already has `LifeSciMetadata*` records.
Fix: confirm via Workbench query `SELECT Id FROM LifeSciMetadata__c LIMIT 1`. If results: customer has started config — LSStarterConfig is not appropriate.

### "Workbench deployment fails on a single DB Schema"

Cause: incomplete zip — missing the parent `LifeSciConfigCategory` record, the actual schema record, or a properly tailored `package.xml`.
Fix: ensure the zip contains **all three** for the targeted schema. Reuse the original repo's `package.xml` as a template and reduce members.

### "Customer says paid org has no working features"

This is **expected.** Paid orgs ship blank — only the vanilla managed package. No starter config is included by default. Direct them to:
1. Product documentation for feature-by-feature setup, OR
2. LSStarterConfig as an internal accelerator (with the usage caveats above)

### "Documentation doesn't say which DB Schema is required for feature X"

This is a real gap. **File a documentation bug** rather than guessing. From the session: "Documentation should specify which DB Schema records are required for specific features. If the information is missing, a documentation bug should be raised."

### "Heroku login redirects but never authenticates"

Cause: standard login flow doesn't work for the sandbox.
Fix: use **"Use Custom Domain"** and paste the My Domain URL of the target sandbox.

### "Heroku is slow / deployments queue"

Cause: parallel usage exceeded ~15 concurrent.
Fix: stagger team usage, or fall back to CLI for that customer's deployment.

## Walkthrough Highlights (live demo)

- **Repo navigation:** `LSConfig/lifeSciConfigRecord/1_inactive` (pre-260 only), `2_activate`, `lifeSciMetadataRecord/`, `Scripts/sh/data_load.sh`
- **Zipping for Workbench:** zip the **contents** of the folder, not the folder itself — Workbench expects the package structure at the root of the zip
- **CLI flow:** `sf org login web` → web browser auth → return to terminal → `sh Scripts/sh/data_load.sh`
- **Verification post-deploy:** check that `LifeSciConfig*` records have `IsActive = true`, profile assignments on `AFLS Custom Profile` look right, and the bundled trigger handlers are active

## What's NOT supported

- Customer-specific configuration (the repo deploys a **generic** starter set — it doesn't know about a customer's specific objects, profiles, or territories)
- Production orgs on instances other than USA794 / USA796 via Heroku
- Re-running the data load script on an org that has existing config (script exits early — by design)

## Reference

- **Companion release file:** [`release-260-lsstarter-config.md`](./release-260-lsstarter-config.md) — full deployment guide with the Spring '26 single-zip change
- **Repo:** https://github.com/SalesforceLabs/LSStarterConfig
- **Heroku app (internal-only):** https://lsstarterconfig-0d89525d2eb3.herokuapp.com/
- **Spring '26 release notes:** `knowledge/release-notes/spring-26-official.md`
- **Documentation gap escalation path:** file a doc bug on the AFLS4CE product documentation owner

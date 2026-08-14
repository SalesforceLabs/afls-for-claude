# LSStarterConfig — Spring '26 (Release 260)

**Audience:** AFLS4CE admins, support engineers, demo setup
**Source:** Spring '26 release enablement deck (LSStarterConfig)
**Status:** Open-source repo, GA for Spring '26

## Overview

**LSStarterConfig** is an open-source Salesforce Labs repository that bootstraps an AFLS4CE org with pre-built configurations across DB Schemas, application & feature settings, a sample profile, and trigger handler activations. It exists to short-circuit the multi-hour manual config bootstrap that every new AFLS4CE org otherwise requires.

- **Repository:** https://github.com/SalesforceLabs/LSStarterConfig
- **Audience:** Customer Engagement (AFLS4CE) orgs — not Pharma
- **Spring '26 change:** Repository structure simplifies — the `1_inactive` / `2_activate` two-zip dance is replaced by a single active deployment (see "Spring '26 Change" below)

## Prerequisites

| Requirement | Note |
|---|---|
| AFLS4CE org with 2GP package installed | Vanilla AFLS4CE managed package |
| Permission Set Licenses assigned | `Healthcloud Starter` AND `Life Science Commercial` |
| No existing configurations in the org | Script will refuse to deploy if `LifeSciMetadata*` records already exist (avoids overwriting customer config) |

## What Gets Deployed

| Component | Type | Notes |
|---|---|---|
| `LSConfig/lifeSciConfigRecord/1_inactive/` | Metadata (DB Schemas + System Admin settings) | Deployed first, **inactive** state |
| `LSConfig/lifeSciConfigRecord/2_activate/` | Metadata (activation flags) | Deployed second — flips records to **active** |
| `LSConfig/lifeSciMetadataRecord/` | Data (Business Admin–managed settings) | Loaded via CLI script — Workbench cannot deploy data |
| `Scripts/sh/data_load.sh` | Shell script | Loads data, deploys `AFLS Custom Profile`, activates trigger handlers |
| AFLS Custom Profile | Profile (sample) | Created by the script. Customers edit this for their own assignments |
| Trigger handlers | Activations | A few key handlers are enabled |

## Spring '26 Change — Single-Zip Active Deployment

**Prior to 260:** Workbench deployment required two separate zips — `inactive.zip` (DB Schemas in inactive state) followed by `active.zip` (activation). This was due to a sequencing constraint where active flags couldn't be set in the same deployment that created the records.

**Spring '26 (260) onward:** The fix sets `active = true` directly in the metadata files. The `1_inactive` folder becomes unusable; only the `2_activate` (or equivalent) zip is needed. **One zip, one deploy.**

The CLI / Heroku flow remains the same from the user's perspective — only the underlying script is updated to handle the new structure.

## Deployment Methods

There are **three** ways to deploy: Workbench (metadata only), CLI (recommended — full flow), Heroku App (internal-only, easy mode).

### Method 1 — Workbench (Metadata Only)

Use when you only need DB Schemas and System Admin settings (no Business Admin data, no profile, no trigger handlers).

1. Clone or download the repo locally:
   ```
   git clone https://github.com/SalesforceLabs/LSStarterConfig.git
   ```
2. Zip the contents of the active folder (e.g., `LSConfig/lifeSciConfigRecord/2_activate/`) — call it `active.zip`.
3. Open Workbench → **Metadata → Deploy**.
4. Upload `active.zip`. **Required flags:**
   - ☑ Rollback on Error
   - ☑ Auto Update Package
   - ☑ Single Package
   - Test Level: **None**
5. Deploy.

> **Pre-260 only:** Repeat steps 2–5 for `inactive.zip` first, then `active.zip`.

**Deploying only specific DB Schemas:** Same steps, but the zip should contain only the required DB Schema files plus a tailored `package.xml` listing only those members.

**Deployment behavior:** Metadata deploy is an **upsert** — it overwrites existing entries. This is standard Salesforce metadata behavior.

### Method 2 — CLI Scripts (Recommended)

Use when you need the **full** bootstrap including Business Admin–managed config data, the sample profile, and trigger handler activations.

**Prerequisites:** Salesforce CLI (`sf`) and `jq` installed locally.

```bash
# 1. Authenticate to the target org
sf org login web \
  --instance-url https://industriesq3q4-3f.demo.my.salesforce.com \
  --alias industriesq3q4-3f-demo \
  --set-default

# 2. Run the deployment script from the repo root
sh Scripts/sh/data_load.sh
```

`data_load.sh` performs:
1. Deploys the `AFLS Custom Profile` profile
2. Loads `LifeSciMetadata*` records (Business Admin–managed config)
3. Loads `LifeSciConfig*` records (System Admin–managed config)
4. Activates the bundled trigger handlers

**Spring '26 note:** The script is updated for the new repo structure; the user-facing commands are unchanged.

**Duplicate handling:** The script has an explicit check — if any records exist in the LifeSciMetadata object already, it **refuses to deploy anything**. This is by design: data load is an insert, not an upsert, and would fail with duplicates. If a customer has already started configuring, fall back to manual config rather than re-running the script.

### Method 3 — Heroku App (Internal Use Only)

**App URL:** https://lsstarterconfig-0d89525d2eb3.herokuapp.com/

The Heroku app wraps the CLI script in a web UI: click **Login & Deploy**, log into the target org, watch progress in the redirected page.

**Constraints — critical:**

- 🚫 **Do NOT share with customers.** Internal Salesforce team only (Support, SE, etc.).
- 🚫 **Do NOT raise P1/P2/P3 bugs** on this app. P4 only. If you hit a real issue, fall back to Workbench or CLI.
- ✅ **All sandbox orgs supported**, regardless of instance.
- ✅ **Production orgs:** only instances `USA794` and `USA796` are supported.
- ❌ Production orgs on other instances are not supported.
- ⚠️ **Do not exceed 15 parallel deployments** — the dynos will degrade and requests will queue.

**Sandbox login tip:** If standard login doesn't authenticate, select **"Use Custom Domain"** and enter the sandbox's My Domain URL.

## Configuration Policy for Paid Orgs

Paid (production) AFLS4CE orgs are shipped **blank** — only the vanilla managed package is installed. No starter config is bundled. Customers are expected to configure following product documentation.

LSStarterConfig is a **convenience utility** offered to accelerate this work — not a default. If a customer asks "why doesn't my paid org have feature X working out of the box?", the answer is: it's by design; they configure per documentation, or use LSStarterConfig as a head start.

**Documentation gap escalation:** If documentation doesn't specify which DB Schema records a feature requires, file a documentation bug — don't guess.

## Setup Validation

After deployment, verify:
- `LifeSciConfig*` records exist and `IsActive = true`
- `LifeSciMetadata*` records exist (if CLI/Heroku method was used)
- `AFLS Custom Profile` is present and has the expected DB Schema assignments
- Bundled trigger handlers are active
- Login as a user with the AFLS Custom Profile and run an initial mobile sync — metadata should download cleanly

## Reference

- **Repo:** https://github.com/SalesforceLabs/LSStarterConfig
- **Spring '26 release notes:** see `knowledge/release-notes/spring-26-official.md`
- **Training transcript:** see `support-engineering-lsstarter-config.md` in this module — covers the live walkthrough, Q&A, and edge cases
- **Customer engagement:** for steering customer-facing recommendations, default to "follow product docs; LSStarterConfig is an internal accelerator"

# Consent Management — Support Engineering Training

**Session:** AFLS4CE Value Chain Training — Jun 2026
**Audience:** Support engineers
**Source:** Engineering training series (Consent Management deck)

## Overview

Consent Management in AFLS4CE captures and stores **HCP / HCO communication consents** — opt-in/opt-out, channel preferences, signature/attachment proof — with strict territory- and account-share-based access. The feature uses the **LS Core PSL** (Permission Set License) and is configured via a Consent tab + custom LWC dropped on the account page. The cardinal rule: consent records must be **shared** in the Salesforce sense for the field rep to see them — territory edit access alone is not enough.

## Setup

### Permission set license + perm set
- Assign the **LS Core PSL** to the user
- Assign the bundled **Consent Management permission set** to the user
- Validates: rep cannot see Consent tab or LWC if PSL or PS is missing

### Page configuration
| Element | Where |
|---|---|
| **Consent tab** on Account page | Lightning App Builder → Account record page → drop the Consent tab in the desired position |
| **Consent LWC** on Account page | Drop the standard `LS Consent` LWC into a tab or section of the Account record page |
| **Communication Subscription records** | Setup → Object Manager → CommunicationSubscription → seed values per channel (Email / Phone / SMS / Mail / Other) |
| **Communication Channel records** | Setup → Object Manager → CommunicationSubscriptionChannel → link channels to subscription parent |

### Sharing requirement (critical)
Consent records are NOT auto-visible — they need explicit sharing:

| Record type | Why it needs sharing | How |
|---|---|---|
| **CommunicationSubscription** | Read access in the LWC | Sharing rule or manual share to the user/role |
| **CommunicationSubscriptionChannel** | Read access for channel options | Sharing rule or manual share |
| **CommunicationSubscriptionEngagement** | Read+Write for the engagement record (the consent fact for an account) | Apex-managed sharing or sharing rule on this entity |

> **Common bug:** "Rep sees the Consent tab but no data." Almost always sharing on `CommunicationSubscriptionEngagement` is missing. Territory edit access alone does NOT grant access to consent records — they're a separate sharing model.

### Territory + delegated account sharing
For Consent capture to follow normal territory-edit rules:

| Setting | Purpose |
|---|---|
| `enableAccountBasedSharing` (org pref) | Delegates account sharing to the territory hierarchy |
| Account Sharing Setting | Set Account to use Territory-based sharing |

## Internal Working — Consent Proof

Two modes of proof support each consent capture event:

| Proof type | Behavior | Setting values |
|---|---|---|
| **Signature** | Mobile-only — rep collects HCP signature on-screen | `None` / `Optional` / `Required` |
| **Attachment** | Upload a signed PDF / image | `None` / `Optional` / `Required` |

> **Both can be enabled simultaneously.** Configure per Module Type if a customer wants signature on one engagement type and attachment on another.

### Where signature/attachment settings live
**Path:** Admin Console → Consent Management settings → per Module Type (e.g., `Sample`, `Medical Inquiry`, custom) → Signature / Attachment dropdown

### Compliance disclaimer
Configurable via **Compliance Statement Definition**:
- `Module Type` = `Consent Management`
- `Statement Type` = `Disclaimer`
- **Sharing required** — the rep needs read access to the statement record or the disclaimer text won't render at signature time

## Walkthrough — Filtering Logic

When the LWC loads on an Account page, it filters which consent records to show. Two filter strategies:

### Strategy 1: PATI-based (default)
Uses the `PartyAffiliationTypeInstance` (PATI) record between the account and the consent subscription to scope visibility.

### Strategy 2: Account column name filtering (configurable)
When set, the LWC filters by matching the **account column name** on the engagement record (e.g., `ProviderId`, `AccountId`).

### Three specific filter rules
1. **If the engagement record has a PATI** → use PATI to filter (Strategy 1)
2. **If no PATI but account column is set** → use account column name match (Strategy 2)
3. **If neither** → record is NOT shown (silent omission — common diagnostic)

## Troubleshooting

### "Consent tab doesn't appear on account page"
1. Verify LS Core PSL is assigned to the user
2. Verify Consent Management permission set is assigned
3. Verify the tab was added to the Lightning Record Page for the user's profile
4. Refresh metadata cache on mobile (regenerate cache via Admin Console)

### "Tab loads but is empty (no consent options)"
1. Verify `CommunicationSubscription` records exist
2. Verify `CommunicationSubscriptionChannel` records linked to those subscriptions
3. Verify sharing rules grant the user read access to both

### "Rep can see a consent but can't capture/edit"
**Cause:** No write access to `CommunicationSubscriptionEngagement`.
**Fix:** Apex-managed sharing or sharing rule with edit access on engagement entity.

### "Signature dialog doesn't show disclaimer text"
1. Verify Compliance Statement Definition exists with `ModuleType = Consent Management`, `StatementType = Disclaimer`
2. Verify record-level sharing on the statement to the rep

### "Captured consent doesn't show up on account"
**Cause:** Filter strategy mismatch.
**Diagnose:**
1. Inspect the engagement record — does it have a PATI?
2. If no PATI, is account column name set correctly?
3. If both are missing, that's why it's not visible — fix the trigger that creates the engagement.

### "Affiliated accounts don't show consent"
**Cause:** PATI relationship doesn't include the affiliated account.
**Fix:** Verify the PATI configuration covers the cross-account relationship the customer expects.

### "Mobile shows signature option but web doesn't"
**Expected.** Signature capture is mobile-only. Web users must use attachment-based proof.

## Reference

- **Source deck:** Consent Management — Drive slide ID `1XkSYhgyqSbNM55sh9YUBZeuohFzjEmtgFF-aX1TOgcI`
- **Companion file:** `consent-management-demo-talk-track.md` (PM-side baseline)
- **Related — Generic Workflow:** stage-based consent flows can leverage Generic Workflow patterns documented in `generic-workflow/support-engineering-generic-workflow.md`
- **Related — Compliance:** Compliance Statement Definition is shared across Consent Management and Medical Inquiry — see `medical-inquiries/support-engineering-inquiry.md`

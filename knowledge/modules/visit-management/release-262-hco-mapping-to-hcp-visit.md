## HCO Mapping to HCP Visit (Summer '26)

This is a demo for Agentforce AFLS Summer '26 feature: HCO mapping for HCP visit.

Presenter: Nilotpal Paul, Director of Product for AFLS

### The Problem

Pharma field reps visit dozens of doctors every week, but until now, when a rep logged the visit, we only captured who they visited—the individual doctor. We had no reliable way to capture where—the hospital or clinic—they were actually standing in. That gap matters for territory strategy and institutional engagement tracking.

### How It Works

When a rep creates a new visit and selects the account (HCP), once they select the right address, the parent organization (HCO) where the visit is taking place is **automatically resolved**. This happens through a related contact point address of the parent organization that the HCP has been configured with. Organizations can easily set this up using their master data management.

### Override Option

If the rep doesn't think the auto-resolved parent organization is correct, they can override it using advanced search and choose from their selected list of hospitals/HCOs.

## Admin Setup

### Step 1: Enable in Admin Console
- Go to **Admin Console > Visit Administration**
- Select **"Associate the HCO based on HCP visit address"** at the appropriate level (Org default / Profile specific / User specific)
- Save

### Step 2: Add Field to Visit Page Layout
- Setup > Object Manager > Visit
- Add **Parent Organization** field to layout

### Step 3: Run Metadata Cache

### Step 4: Mobile Sync
- Users take a sync to activate

**Note:** If the customer only needs Parent Organization as an HCO lookup (without auto-recommendation), skip the Admin Console toggle and just add the field to the page layout.

## Data Model & Matching Logic

Uses **Related Contact Point Address** to establish hierarchy:

```
Hospital (HCO)
  └ CPA: Address ABC (cpa_1) (no related CPA)
Hospital Dept 1 (HCO)
  └ CPA: Address ABC: RelatedCPAId = cpa_1
HCP (Dr. Morita)
  └ CPA: Address ABC: RelatedCPAId = cpa_1
```

**Result:** When rep selects HCP + address, all HCOs sharing the same RelatedCPAId are shown as recommendations.

## Impact

- Institutional-level analytics & coverage reporting
- Sunshine Act compliance without manual reconciliation
- Zero additional rep effort (auto-populated from affiliation)
- Manager visibility into HCO engagement gaps

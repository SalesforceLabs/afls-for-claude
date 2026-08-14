# AFLS4CE Visit Management Test Cases

*Converted from 258 AFLS4CE - Visit Management Test Cases PDF*

---

## Overview

This document provides comprehensive test cases for AFLS Visit Management, covering the visit engagement page, product detailing, product discussions, product messages, sample management during visits, and inventory validation. Each section includes user stories, acceptance criteria, and detailed test pattern matrices.

---

## 1. Visit Engagement Page — Presentations (Sidebar)

### User Story
**As a** Field Sales Representative, **I want to** select Presentations from the sidebar menu, **so that I** can present relevant content during the visit.

### Acceptance Criteria

| # | Criteria | Notes |
|---|----------|-------|
| 1 | New Visit Engagement page sidebar shows "Presentations" menu option | Appears as Presentation Forums in related list |
| 2 | Tap on Presentations shows the list of distributed presentations available to the user | Only shows presentations distributed to the user's territory |
| 3 | Select a presentation to launch it | Opens the presentation viewer |
| 4 | CLM presentation plays correctly | Content renders as expected on iPad |

---

## 2. Visit Engagement Page — Product Detailing (Sidebar)

### User Story
**As a** Field Sales Representative, **I want to** select Product Detailing from the sidebar menu, **so that I** can detail products during the visit.

### Acceptance Criteria

| # | Criteria | Notes |
|---|----------|-------|
| 1 | New Visit Engagement page sidebar shows "Product Detailing" menu option | |
| 2 | Tap on Product Detailing shows the Product Selection screen | |
| 3 | Products displayed based on product selection pattern configuration | See Product Selection Test Patterns below |
| 4 | Select a product to begin detailing | Creates a ProviderVisitPrdDetailing record |
| 5 | Multiple products can be selected and ordered | Detail order tracked |
| 6 | Can remove products from the detailing list | |

---

## 3. Product Selection Test Patterns

Product selection on the Product Detailing screen depends on the configured product selection pattern. The following table shows the expected behavior for each pattern combination.

### Pattern Matrix

| Test Case | Selection Pattern | Expected Behavior |
|-----------|-------------------|-------------------|
| **Brand only** | Brand | Products listed by Brand name, flat list |
| **Indication only** | Indication | Products grouped/filtered by Indication |
| **Brand-Indication** | Brand → Indication | User selects Brand first, then sees Indications for that Brand |
| **Indication-Brand** | Indication → Brand | User selects Indication first, then sees Brands for that Indication |
| **Therapeutic Area only** | Therapeutic Area | Products grouped by Therapeutic Area |
| **Therapeutic Area-Brand** | Therapeutic Area → Brand | User selects Therapeutic Area, then Brand |
| **Therapeutic Area-Indication** | Therapeutic Area → Indication | User selects Therapeutic Area, then Indication |
| **Therapeutic Area-Brand-Indication** | Therapeutic Area → Brand → Indication | Three-level drill-down: TA → Brand → Indication |
| **Therapeutic Area-Indication-Brand** | Therapeutic Area → Indication → Brand | Three-level drill-down: TA → Indication → Brand |

### Test Conditions for All Patterns

| Condition | Expected Result |
|-----------|-----------------|
| Products are assigned to the rep's territory | Products appear in the selection list |
| Products are NOT assigned to the rep's territory | Products do NOT appear |
| Products are inactive | Products do NOT appear |
| Product has no Brand/Indication/TA assigned | Product may not appear depending on pattern requirements |
| Account has product restrictions (Account Product Restrictions) | Restricted products do NOT appear for that account |

---

## 4. Visit Engagement Page — Product Discussions (Sidebar)

### User Story
**As a** Field Sales Representative, **I want to** view Product Discussions during the visit engagement, **so that I** can track discussion topics with the provider.

### Acceptance Criteria

| # | Criteria | Notes |
|---|----------|-------|
| 1 | New Visit Engagement page sidebar shows "Product Discussions" menu option | |
| 2 | Tap on Product Discussions shows existing discussions for this visit | ProviderVisitProdDiscussion records |
| 3 | Can create a new product discussion | |
| 4 | Discussion is linked to the visit (ProviderVisitId) | |
| 5 | Product selection follows the same pattern as Product Detailing | Same product selection pattern configuration applies |

### Product Discussion Test Patterns

The product selection for discussions follows the same patterns as product detailing (see Section 3). Verify:

| Test Case | Verification |
|-----------|--------------|
| Same products appear in Discussion as in Detailing | Product list is consistent |
| Territory-restricted products are excluded | Same territory rules apply |
| Account product restrictions are applied | Same restriction rules apply |
| Discussion can reference a product not yet detailed | Discussions are independent of detailing |

---

## 5. Visit Engagement Page — Product Messages / Key Messages

### User Story
**As a** Field Sales Representative, **I want to** see Product Messages (Key Messages) during product detailing, **so that I** can deliver the right messaging to the provider.

### Acceptance Criteria

| # | Criteria | Notes |
|---|----------|-------|
| 1 | When detailing a product, associated Product Messages appear | ProviderVisitDtlProductMsg records |
| 2 | Messages are displayed in the configured order | Order defined in product message setup |
| 3 | Rep can mark messages as delivered/discussed | Status tracking on the message record |
| 4 | Messages are specific to the product being detailed | Filtered by the product on the detailing record |
| 5 | Messages respect the Message/Objective configuration | Admin Console > Product Management settings |

---

## 6. Visit Engagement Page — Samples (Sidebar)

### User Story
**As a** Field Sales Representative, **I want to** drop samples from the visit engagement sidebar, **so that I** can distribute samples to the provider during the visit.

### Acceptance Criteria

| # | Criteria | Notes |
|---|----------|-------|
| 1 | New Visit Engagement page sidebar shows "Samples" or "Product Disbursements" menu option | Depending on org configuration |
| 2 | Tap on Samples shows available sample products | Based on rep's inventory |
| 3 | Select a product to add to the sample drop | |
| 4 | Select the batch/lot for the sample | If multiple batches available |
| 5 | Enter the quantity to drop | |
| 6 | Quantity is validated against inventory on hand | Cannot exceed available quantity |
| 7 | Quantity is validated against provider sample limits | Cannot exceed the provider's remaining sample limit |
| 8 | Sample drop is linked to the visit | ProductDisbursement record linked to ProviderVisit |
| 9 | Sample drop can be removed before visit submission | |
| 10 | Multiple sample products can be dropped in a single visit | |

---

## 7. Sample Section Behavior During Visits

### Test Cases

| Test Case | Scenario | Expected Result |
|-----------|----------|-----------------|
| **Sample products available** | Rep has inventory for sample products | Products appear in sample selection |
| **No sample products** | Rep has no inventory | "No samples available" message or empty list |
| **Batch selection** | Product has multiple active batches | User can select which batch to use |
| **Single batch** | Product has only one active batch | Batch is auto-selected |
| **Expired batch** | Batch expiration date has passed | Expired batch does NOT appear in selection |
| **Zero inventory** | Batch has 0 quantity on hand | Product/batch does NOT appear |

---

## 8. Sample Inventory Validation During Visits

### Quantity Validation Rules

| Validation | Rule | Error Behavior |
|------------|------|----------------|
| **Quantity > 0** | Quantity must be a positive integer | Error message, cannot proceed |
| **Quantity ≤ Inventory on Hand** | Cannot drop more than available in the rep's inventory (ProductItem quantity) | Error message showing available quantity |
| **Quantity ≤ Provider Sample Limit** | Cannot exceed the provider's remaining sample limit (ProviderSampleLimit) | Error message showing remaining limit |
| **Both limits apply** | The effective maximum is the LESSER of inventory on hand and provider sample limit | Whichever limit is lower applies |

### Sample Limit Test Matrix

| Test Case | Inventory on Hand | Provider Sample Limit Remaining | Requested Qty | Expected Result |
|-----------|-------------------|---------------------------------|---------------|-----------------|
| Within both limits | 100 | 50 | 10 | ✅ Allowed |
| At provider limit | 100 | 10 | 10 | ✅ Allowed (exactly at limit) |
| Exceeds provider limit | 100 | 10 | 15 | ❌ Blocked — exceeds sample limit |
| At inventory limit | 10 | 50 | 10 | ✅ Allowed (exactly at inventory) |
| Exceeds inventory | 10 | 50 | 15 | ❌ Blocked — exceeds inventory |
| Exceeds both | 10 | 5 | 15 | ❌ Blocked — exceeds both |
| No sample limit defined | 100 | (none) | 10 | ✅ Allowed — no limit enforcement |
| Sample limit = 0 | 100 | 0 | 1 | ❌ Blocked — limit is zero |

### Post-Drop Inventory Updates

| Action | Inventory Effect | Sample Limit Effect |
|--------|------------------|---------------------|
| Sample dropped during visit | Inventory decremented by quantity | Provider limit remaining decremented |
| Sample drop removed before submission | Inventory restored | Provider limit remaining restored |
| Visit submitted with sample drops | Inventory change is permanent | Limit change is permanent |
| Visit cancelled after submission | Requires manual inventory adjustment | Requires manual limit adjustment |

---

## 9. Visit Submission with Samples

### Acceptance Criteria

| # | Criteria | Notes |
|---|----------|-------|
| 1 | Visit can be submitted with sample drops | Status changes to Completed |
| 2 | Signature is required when samples are included (if configured) | Admin Console > Visit Settings > Require Signature for Samples |
| 3 | Inventory is decremented upon submission | ProductItem quantity updated |
| 4 | Provider sample limits are updated | ProviderSampleLimit remaining updated |
| 5 | Compliance statement is displayed (if configured) | ComplianceStatementDefinition where Module = 'Visit' |
| 6 | InventoryOperation record is created for each sample drop | Audit trail for inventory changes |
| 7 | ProductDisbursement records are finalized | Status updated to reflect completion |

---

## 10. Related Objects Reference

| Object | Role in Visit Test Cases |
|--------|--------------------------|
| `Visit` | Base visit record |
| `ProviderVisit` | AFLS visit extension (1:1 with Visit) |
| `ProviderVisitPrdDetailing` | Product detailing records |
| `ProviderVisitDtlProductMsg` | Product messages during detailing |
| `ProviderVisitProdDiscussion` | Product discussion records |
| `ProviderVisitMarketingItem` | Marketing items presented |
| `ProductDisbursement` | Sample drops / disbursements |
| `ProductItem` | Rep's inventory (quantity on hand per batch) |
| `ProductBatchItem` | Links products to production batches |
| `ProductionBatch` | Batch/lot information (expiration, etc.) |
| `ProviderSampleLimit` | Provider-level sample limits |
| `InventoryOperation` | Inventory audit trail records |
| `ComplianceStatementDefinition` | Signature disclaimers |
| `Product2` | Product master (Brand, Indication, Therapeutic Area) |
| `LifeSciMarketableProduct` | Marketable product with territory assignment |

---

## 11. Test Environment Prerequisites

Before running these test cases, ensure:

1. **Visit Management enabled** — Admin Console > Visit Settings
2. **Record types created** — Both Visit and ProviderVisit record types configured and mapped
3. **Trigger handlers active** — VisitTriggerHandler, ProviderVisitTriggerHandler, ProviderVisitPrdDetailingTriggerHandler
4. **Products assigned to territories** — LifeSciMarketableProduct records linked to Territory2
5. **Sample inventory loaded** — ProductItem records with quantity > 0 for the rep's Location
6. **Sample limits configured** — ProviderSampleLimit records for target providers (if limit enforcement is needed)
7. **Production batches active** — ProductionBatch records with future expiration dates
8. **Product selection pattern configured** — Admin Console > Product Management > Selection Pattern
9. **Messages/Objectives configured** — If testing product messages
10. **Mobile metadata cache generated** — For the profiles being tested
11. **DB Schema records active** — For all objects involved in the test

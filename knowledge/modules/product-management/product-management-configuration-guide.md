# Product Management — Configuration Guide

## Overview

Product Management in AFLS handles the setup and configuration of pharmaceutical products, marketable products, product hierarchies, product-to-territory assignments, messages/objectives for detailing, and account-level product restrictions for compliance.

## Key Objects

| Object | Purpose |
|--------|---------|
| `Product2` | Standard Salesforce product record (drug, device, etc.) |
| `LifeSciMarketableProduct` | AFLS marketable product linking to Product2 with commercial attributes |
| `ProviderProductGuidance` | Messages/objectives attached to products for detailing |
| `ProductRestriction` | Account-level product restrictions (compliance) |
| `PrvdActvtyGoalMeasurePrdct` | Product-level activity goal measures |
| `ProviderVisitPrdDetailing` | Product detailing records on visits |
| `ProviderVisitProdDiscussion` | Product discussion records on visits |

## Product Hierarchy

### Product2 (Standard Product)

The base Salesforce Product2 object represents the physical product:

| Field | Description |
|-------|-------------|
| `Name` | Product name |
| `ProductCode` | Unique product code/SKU |
| `Family` | Product family grouping |
| `IsActive` | Whether the product is currently available |
| `Description` | Product description |

### LifeSciMarketableProduct

The AFLS-specific marketable product extends Product2 with commercial attributes:

| Field | Description |
|-------|-------------|
| `Name` | Marketable product name |
| `ProductId` | Link to the parent Product2 record |
| `TherapeuticArea` | Therapeutic area classification |
| `Status` | Active/Inactive status |
| `MarketableProductType` | Type classification |

### Hierarchy Structure

```
Product Family (Product2.Family)
  └── Product2 (physical product)
       └── LifeSciMarketableProduct (commercial version)
            ├── ProviderProductGuidance (messages/objectives)
            ├── ProductRestriction (compliance restrictions)
            └── Sample/Inventory linkage
```

## Product-to-Territory Assignment

Products are assigned to territories to control which products reps can detail in their territory.

### Setup

1. Create Product2 records for all products
2. Create LifeSciMarketableProduct records linking to Product2
3. Assign products to territories via:
   - Admin Console > Products > Territory Assignment
   - Data loading ProductTerritory2Association records
4. Products not assigned to a rep's territory will not appear in detailing

### Admin Console Configuration

In Admin Console > Product Settings:
- Enable product-to-territory assignment
- Configure product display preferences
- Set default product sort order

## Messages and Objectives

### ProviderProductGuidance

Messages and objectives are talking points for reps to cover during product detailing:

| Field | Description |
|-------|-------------|
| `Name` | Message/objective name |
| `ProductId` | Linked product |
| `Type` | "Message" or "Objective" |
| `Priority` | Display priority/order |
| `StartDate` | When the message becomes active |
| `EndDate` | When the message expires |
| `IsActive` | Active status |
| `Description` | Full message content |

### Setup

1. Create ProviderProductGuidance records for each product
2. Set appropriate date ranges (campaign periods)
3. Messages appear during visit product detailing
4. Reps can mark messages as "Discussed" or "Not Discussed"
5. Discussion data flows to ProviderVisitProdDiscussion records

## Account Product Restrictions

### ProductRestriction

Compliance-driven restrictions preventing specific products from being detailed to certain accounts:

| Field | Description |
|-------|-------------|
| `AccountId` | The restricted account |
| `ProductId` | The restricted product |
| `RestrictionType` | Type of restriction |
| `Reason` | Compliance reason |
| `StartDate` | Restriction start |
| `EndDate` | Restriction end |
| `IsActive` | Active status |

### Use Cases

- **Regulatory restrictions:** Product not approved for certain specialties
- **Contract restrictions:** Exclusivity agreements with competing products
- **Safety restrictions:** Product contraindicated for certain patient populations
- **Rep-level restrictions:** Individual rep product authorization limits

## Mobile Considerations

### DB Schema

Ensure these objects are in DB Schema for mobile product features:
- `Product2` (one-way sync, web → mobile)
- `LifeSciMarketableProduct` (one-way sync)
- `ProviderProductGuidance` (one-way sync)
- `ProductRestriction` (one-way sync)
- `ProviderVisitPrdDetailing` (bidirectional)
- `ProviderVisitProdDiscussion` (bidirectional)

### Product Display on Mobile

- Products appear in the detailing section during visit engagement
- Only territory-assigned products are shown
- Restricted products are hidden or marked per compliance rules

## Trigger Handlers

| Handler | Purpose |
|---------|---------|
| `ProductTriggerHandler` | Processes product record changes |
| `MarketableProductTriggerHandler` | Handles marketable product updates |
| `ProductRestrictionTriggerHandler` | Enforces product restriction rules |

## Common Issues

1. **Products not appearing in detailing:** Check product-to-territory assignment and verify LifeSciMarketableProduct is active.
2. **Messages not showing during visits:** Verify ProviderProductGuidance date ranges and IsActive flag. Check that the product is assigned to the rep's territory.
3. **Product restrictions not enforced:** Ensure ProductRestriction records are active and date ranges are current. Check trigger handler is enabled.
4. **Products missing on mobile:** Verify Product2 and LifeSciMarketableProduct are in DB Schema. Regenerate metadata cache.
5. **Stale product data on mobile:** Check sync direction — products should be one-way (web → mobile). Run a full sync.

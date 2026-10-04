# Quoted Orders Overview and Data Model - Winter '27 (264)

Order Management in Winter '27 adds **Quoted Orders** (GA) and **Pricing & Discounts** (GA) on top of the Store Check pilot from Spring '26. Store Check also moves to GA in 264 (see [release-260-store-check-pilot](./release-260-store-check-pilot.md)). Personas used in the enablement: Sarah (Pharmacy Sales Rep), David (Pharmacy Manager, the customer), Alex (Pricing Admin).

Related files: [admin setup](./release-264-quoted-orders-admin-setup.md), [rep flow](./release-264-quoted-orders-rep-flow.md), [pricing](./release-264-pricing.md), [setup runbook and troubleshooting](./release-264-order-management-setup-runbook.md).

## What's New

### Order lifecycle
- **Creation**: start a quoted order for one or many products; start from the last order, the store assortment, or the product catalog.
- **Mass add products** while keeping valid quote line items.
- **Account-level catalog / assortment**: pre-defined products auto-added to orders.
- **Min/Max quantity validation** through platform validation rules.
- **Signature capture** locks changes on signed orders.
- **Approvals**: customizable multi-stage approval workflows for quoted order submission.
- **Printing**: printable or emailable quote PDF including the captured signature.
- **Unlock / edit**: managers unlock submitted orders under defined conditions.
- **Manual free goods and discounts**: reps add free-goods quantities and discounts to a quote line item.

### Business purpose
- Reps build a complete, priced order during the store visit, with one-click creation from last order or store assortment.
- The full pricing engine runs on-device (offline pricing SDK), so orders can be built, priced, and negotiated with no connectivity; everything syncs when the network returns.
- Compliance: correct price book, volume and header discounts, free goods, signature, approvals, and a Quote PDF.

### Pricing highlights
List price rules, volume and tiered discounts, manual line and header discounts, dynamic matrix discounts (e.g. by brand, category, customer tier), manual free goods with attributable discount tracking, and a price waterfall explaining net price online and offline. Detail in [release-264-pricing](./release-264-pricing.md).

## Order Capture Journey
Quote header -> select price book -> copy from last order / store assortment -> add products (including priority products) -> price calculation (offline pricing SDK) -> review and sign -> submit for further approval processing.

## Data Model

### Quoted Order
- **Quote** and **Quote Line Item** store the quoted order, products, quantities, prices, and discounts.
- Signature capture and the Quote PDF are stored in their own entities (Quote Document; the template uses the Life Sciences Digital Signature component).
- All execution data ties back to Accounts, Visits, and Products.

### Product Catalog
- Reps add products from the product catalog.
- Products are aligned to territories (and the accounts within them) via **Product Territory Alignment (PTA)**; specific products can be restricted from a territory or from account(s) in a territory.
- Priority products come from the Store Assortment (marked Required on the Store Assortment record).

### Pricing entities
- **Pricebook / Pricebook Entry**: products sold and their standard or custom list prices.
- **Price Adjustment Schedule / Tier**: tiered discount structures and volume pricing by quantity thresholds.
- **Product Selling Model / Option**: how a product is sold (e.g. one-time) and links to catalog products.

## Data Setup (5 steps to quote-ready)
1. **Territories and accounts**: Business Account record type with a Quote-enabled layout; sales Territories; assign accounts to territories (Provider Account Territory Information places accounts within a territory).
2. **Catalog and products**: Product2, Product Selling Model, Product Catalog, Store Assortments.
3. **Territory alignment**: Product Territory Alignment (PTA) with purpose "Quote"; product restrictions; Territory Availability Exclusion (territory-level override that hides products).
4. **Pricebooks and pricing**: Price Books and Price Book Entries (list prices); Price Adjustment Tiers for volume/tier discounts.
5. **Enable and validate**: turn on Order Management, the pricing procedure, and quote settings; validate alignment and pricing.

All data setup entities must be configured, and products aligned to territories, before a quote is ready for capture.

## Licensing
Order Management requires Life Sciences Cloud for Customer Engagement plus the new Life Sciences Cloud SKUs that include **Revenue Cloud Advanced**. The deck shows Revenue Cloud Advanced bundled in the newer SKU tiers (the Sales & Service Max tier shown as NEW), each with Data & AI flex credits and storage allotments; SKU tier contents were only partially legible in the source.

## Limitations / Gotchas
- Agent support to recommend orders from sales trends and stock-out risk is described as future; today reps start from last order or store assortment.
- Setup depends on Revenue Cloud Advanced; without it the Salesforce Go Order Management checklist cannot complete (see the runbook).

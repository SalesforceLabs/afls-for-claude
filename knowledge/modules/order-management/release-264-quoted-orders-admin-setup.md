# Quoted Orders Admin Setup - Winter '27 (264)

Audience: Business Admin and Pricing Admin. Overview and data model: [release-264-quoted-orders-overview](./release-264-quoted-orders-overview.md). Pricing procedure/recipe/context detail: [release-264-pricing](./release-264-pricing.md).

## 1. Salesforce Go (Revenue Cloud setup)
- Location: Setup -> Salesforce Go -> filter "Agentforce for Life Sciences Cloud" -> open the **Customer Engagement - Order Management** feature card.
- One switch enables: Revenue Cloud, Quotes, Context Service, Salesforce Pricing, Price Waterfall Setup, Transaction Pricing.
- The guided checklist also covers: Document Builder, Advanced Approvals, Quote Capture, Standard Price Book, and activating the Quote record page (guided quote layout).
- Still manual after the switch: admin permission sets, standard price book, context extension, and the pricing recipe/procedure.
- Set Up Transaction Pricing opens Revenue Settings: switch on Transaction Processing for Quotes and Orders and select the out-of-the-box transaction processing type shipped for the LSC customer-engagement mobile license (needed for offline quote capture/pricing).
- Optional "Apply Header Adjustments to Quotes" step redirects to Revenue Settings to enable Header Adjustment (places Manage Header Adjustment on the Sales Transaction Line Editor).

## 2. Permission sets
Assign to the admin and the sales rep user before configuring.

**Admin**
- Context Service Admin and Context Service Runtime (required for the extended Sales Transaction context the pricing procedure consumes)
- Life Sciences Commercial Admin and Life Sciences Commercial Core
- Product Catalog Management Designer and Viewer
- Salesforce Pricing Admin

**Sales rep**
- Price and Tax Calculation for Quoting
- Product Catalog Management Viewer
- Document Builder User
- Salesforce Pricing Run Time User
- Life Sciences Field Sales Representative

Also enable the **Quote Capture** permission on the Life Sciences for Customer Engagement setup page; this is what makes quote capture and pricing work offline on the iPad.

## 3. Field-level security by profile
In Salesforce Go -> Order Management, open "Activate Field-Level Security by Profile for Required Objects", select each required profile (Business Admin, Sales Rep), grant read or edit on required fields, and save. Covers Quote, Quote Line Item, and related pricing and document objects. Custom context-attribute fields (e.g. free goods) must also be made visible to the needed profiles before mapping and activating the context.

## 4. Generic workflow (stage control)
Controls what a rep can do to a Quoted Order at each stage; admins define allowed actions (create, edit, delete, submit) per stage and a stage path is shown on the record.
- **Draft**: rep can create, edit, add lines, delete.
- **Submit**: quoted order is locked.
- **Request for Unlock**: rep requests unlock; once the manager approves, the rep can edit.

## 5. Flows
- **Select Discover Products Flow** (Salesforce Go -> Order Management): choose the flow that launches the product catalog so reps can browse and add products to a quote.
- **LSC Validate Mandatory Quote Fields** (V1): record-triggered flow, runs after save on Quote; enforces required fields before a quote can progress.

## 6. Quote document template
- In Document Builder create a Quote document template mapped to the quote and line items; lay out header, pricing table, and terms with merge fields.
- Drag in the **Life Sciences Digital Signature** component and position the signature block.
- Disclaimers: insert records in **Compliance Statement Definition**; review-screen disclaimer text can be filtered by market/territory on account/territory fields (same pattern as Consent and Visit Management).
- Reps generate the PDF from the iPad after the manager's signature is captured.

## 7. Mobile metadata (offline quotes and pricing)
Admin Console -> Life Sciences Customer Engagement Setup -> Mobile tab.
1. **Object Metadata Cache Configuration** (Type = Data, per profile that needs offline order capture, e.g. Pharmacy Sales Rep): Quote, Quote Line Item, and Quote Document are already configured by the order-capture setup. Add Pricebook Entry, Pricebook2, Price Adjustment Schedule, Price Adjustment Tier, and activate.
2. If the pricing procedure uses a custom decision table via Price Adjustment Matrix, also add its custom source entity as a Data entry (optional SOQL WHERE filter; Delta Sync tracks Last Modified Date) or the offline discount lookup has no data.
3. **Metadata Cache** tab -> Create New Cache, then sync devices.

## 8. Admin Console: Orders and Pricing Settings
Admin Console -> Order Management tile -> Orders and Pricing Settings. "Apply Settings To" = Org Default or Profile.
- **Product Views**: active quick-add options (Products From Previous Order, Store Assortment); when Products From Previous Order is on, set the Last Quote Status used to find the prior quote (e.g. Submitted/Approved).
- **Priority Products**: enable the Priority Products tab to surface Required store-assortment products while browsing the catalog.
- **Transaction Configuration**: set the Pricing Procedure per org/profile (e.g. LSC Rev Default Procedure - All; another example used was LSC OM Pricing).
- **Pricing Waterfall retention**: choose Open quote statuses (e.g. Draft) that retain pricing calculation and explainability offline; Closed quote statuses (e.g. Submitted) so a closed quote's pricing is available offline; Open Quote Log Retention (Days) caps on-device waterfall storage (example value 5).
- **Quote Settings**: offline Quote record type; Transaction Processing Type "TPT for LS4CE Mobile" (ships with 264; controls e.g. whether pricing/tax calc is skipped); Max Quote Line Items Per Quote = 1,000 in the example.
- At runtime the profile -> pricing procedure mapping is realized through the **Sales Transaction Type** entity (SalesTransactionType), a lookup on the Quote.

## 9. Visit record type routing
Quoted Orders are launched from the Visit (Visit tabs include Store Check and Quoted Order). Enable Record Type Routing in Life Sciences Customer Engagement Setup, then configure under Admin Console; create separate page layouts per Visit Type (record type) and assign them to profiles. Orgs with existing LogAVisit overrides must remove them first.

## Limitations / Gotchas
- The waterfall is data-intensive; not all of it downloads. It is available on demand (tap Net Unit Price; if not cached the app guides the rep to download online).
- Cost books are not supported for LSC Order Management.

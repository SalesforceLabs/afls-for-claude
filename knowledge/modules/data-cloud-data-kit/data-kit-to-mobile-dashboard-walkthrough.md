# From Data Kit to a Dashboard on the iPad Home Screen

Field-verified walkthrough from a Winter '27 (release 264) test org, using Salesforce API **v68.0**. Org names, user names and IDs are deliberately omitted. Items marked **unconfirmed** were observed but their cause was not established.

Data 360 is the destination. Tableau Next is one optional consumer, so a customer can use Data 360 without it. Tableau Next is not in beta, and the mobile app does not require a VPN to show it.

## 1. Deploy the Life Sciences Data Kit

- Setup > Data Kits > Life Sciences Data Kit > Deploy. You need the **Data Cloud Architect** permission set.
- The Deploy dialog shows **eight bundle tabs**: Activity Plan, Marketable Product, Provider Visit, Presentation, Sales Territory Account, Email Template, Medical Insights, Key Account Management. The kit lists 42 data models.
- **Paste the CRM org ID into the Org ID field on every bundle tab.** Nothing on screen says so. If any tab is empty, the deploy is rejected with "unable to deploy package kit because input for all components is not provided".
- On the **Data Cloud Salesforce Connector** permission set, enable the full list from the help article "Set Up Data 360 for Customer Engagement" (Manage Outcomes, Product Inventory Operations User, Manage Life Sciences Activity Plan, Life Sciences Next Be User, access to Customer Engagement features, Query Non Vetoed Files). Granting object access alone did not clear a `SFDC_PERMISSION_ERROR` on the Activity Plan bundle. Matching permission names by guesswork also failed; follow the article's list exactly.
- Object permissions have prerequisites (for example Activity Plan needs Time Period). Missing prerequisites show up as permission errors on a different object than the one you changed.
- The Key Account Management bundle failed separately in testing; it is not needed for the Visit analytics below. Cause **unconfirmed**.

## 2. Verify the CRM-to-Data 360 streams

- Kit streams are batch jobs that **upsert**: new and changed CRM rows are applied.
- Verify by comparing counts: the row count of a data lake object (DLO) and its data model object (DMO) should equal the CRM count.
- Under Data Streams, check the last refresh status and Refresh History.
- A locale can display counts with a separator (1.816 for 1,816). That is formatting, not a different number.

## 3. Add a stream the kit does not provide (example: Visit)

The kit has a ProviderVisit stream but **no Visit stream**, and ProviderVisit reaches the Account only through Visit. So `ssot__Visit__dlm` stays disabled until you supply the data.

1. Data Streams > New > Salesforce CRM > pick the `Visit` object, category Engagement, primary key Id.
2. Run it. The first run **failed** ("Error while fetching table") in testing; a re-run via `POST /ssot/data-streams/<name>/actions/run` succeeded with a row count equal to CRM. Cause of the first failure **unconfirmed**; re-run before debugging further.
3. Map the DLO to `ssot__Visit__dlm`. When using the API, the mapping body takes a singular `fieldMapping`.
4. The HCP side: Life Sciences Cloud (LSC) providers are `HealthcareProvider`, not Contact. The Life Sciences kit has no HealthcareProvider stream. The standard **HealthCloud Provider** kit (one bundle, 19 objects) deploys one in testing. It is all-or-nothing and brings objects LSC does not use.

## 4. Tableau Next: semantic model, visualizations, dashboard

- Build on the **DLOs** (for example `Visit_Home__dll` joined to `HealthcareProvider_Home__dll` on the account id). The ProviderVisit DMO drops fields the DLO keeps (AccountId, Status, PlannedStartTime, OwnerId), and its provider has no account link.
- Calculated measures must be aggregated (`UserAgg`) and written in Tableau syntax (`IF ... THEN ... END`). Metrics need a `timeDimensionReference` that includes the table API name.
- A metric detail page ("Explore metric") threw a UI error in testing even though SQL confirmed the values. Do not rely on it for a demo.
- **REST: the `/tableau/*` visualization and dashboard APIs require API v68.0.** At v67 reading a visualization fails with `DOWNGRADE_VERSION_ERROR`. The pattern that works: build one object in the UI, GET it, strip read-only keys (`id`, `createdBy`, `url`, `permissions`, `sourceVersion`...), then PATCH or POST. In widget objects `type` must be the **first** key. Month granularity is a field `function: DateTruncMonth` with `displayCategory: Discrete`.
- Dimension values from a joined object work in a visualization (for example `ProviderFullName` from Healthcare Provider by Visit Count), which is a quick check that the semantic-model join is correct. A **Top N** filter (Filters > Top/Bottom > By Field) also works on the iPad.
- Set the admin user's locale to English if chart labels come out localized.

## 5. Put the dashboard on the Home page

- Add the **Tableau Next dashboard** component (`analytics_embedding:dashboard`) to the Lightning Home page in App Builder. Its property is `dashboardId`; other property names are rejected. The component height is a fixed value (600 in testing), so a tall dashboard is clipped.
- A Home page is shared by every user assigned to it. Everyone on that page sees the dashboard.
- **Share the Tableau workspace with the reps** (workspace > Share > Viewer). Workspaces are private to their owner. The Tableau Next consumer permission sets are not enough. Without the share the tile shows "We couldn't display this content."

## 6. See it on the iPad

- Regenerate the **mobile metadata cache** for the reps' profile and wait for Active. The iPad reads the cache, not the live page.
- Sync the app. Tableau Next in the mobile app needs the Winter '27 version.

## Troubleshooting

See `data-cloud-tableau-mobile-troubleshooting`.

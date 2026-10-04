# Presentation Clickstream Data Retention - Winter '27 (264)

> Source: Winter '27 release enablement deck (marked "WIP" - work in progress). Content may change before GA.

## What's New

Page views and in-content interactions generate `PresentationClickStreamEntry` records. A retention policy in the Intelligent Content Admin Console now removes older records automatically or on demand, to control org storage.

## Admin Setup & Configuration

1. Open the **Data Retention** tab in the **Intelligent Content Admin Console**.
2. Define the retention period (how long clickstream records are kept before they become eligible for deletion). The screenshot shows a "Retention Policy" section with a retention period field in months and a Save button.
3. Choose how cleanup runs: run the cleanup **manually when needed**, or **schedule** it to run automatically on an ongoing basis. The screenshot shows an "Interaction Data Cleanup" section with Run Now and Schedule buttons (small text; low confidence on exact labels).

## Archiving Before Deletion

To keep the data after deletion from the org: deploy the **Life Sciences Data Kit**, open the **Presentation Click Stream Entry** data stream in Data Cloud, and select **Store Deleted Records**. The data then stays in Data Cloud after records are deleted from the org.

## Related

- [release-264-in-content-interaction-tracking](./release-264-in-content-interaction-tracking.md)
- Data Kit install steps: [release-260-smart-content-search](./release-260-smart-content-search.md)

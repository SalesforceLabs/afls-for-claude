# Data Cloud, Tableau Next and Mobile Dashboard — Troubleshooting

Field-verified symptoms from a Winter '27 test org (API v68.0). Full walkthrough: module `data-cloud-data-kit`.

| Symptom | Cause | Fix |
|---|---|---|
| Home tile says "We couldn't display this content." for a rep (admin sees it fine) | The Tableau workspace is private to its owner; the Tableau Next consumer permission sets do not grant access | Workspace > Share > add the rep (or their group) as Viewer |
| iPad Home tile says **"Something went wrong / Tap to retry"** while the same dashboard renders on the web | The dashboard **page has no name**. Editing a dashboard through the REST API (GET, then PATCH) dropped `layouts[].pages[].label`. The web did not care; the iPad did. Removing charts and regenerating the cache did not help | Open the dashboard in the Tableau editor, name the page (for example "Page 1"), save, sync the iPad. After any API edit, confirm `pages[].label` is set; prefer saving through the UI for dashboards shown on mobile |
| Deploy rejected: "unable to deploy package kit because input for all components is not provided" | An Org ID tab in the Deploy dialog is empty | Paste the CRM org ID into every bundle tab |
| Deploy fails with `SFDC_PERMISSION_ERROR` | Connector permission set is missing system permissions from the help article, or an object prerequisite | Enable the article's full list on the Data Cloud Salesforce Connector set; check prerequisite objects |
| A new manual data stream's first run fails with "Error while fetching table" | **Unconfirmed** | Re-run the stream; it succeeded on the second run in testing |
| `/tableau/*` REST call returns `DOWNGRADE_VERSION_ERROR` | API version below 68.0 | Call `/services/data/v68.0/tableau/...` |
| REST PATCH of a dashboard or visualization: `Unrecognized field "X"` | Read-only keys from the GET response were sent back | Strip `id`, `url`, `createdBy`, `permissions`, versions; keep `label`; put widget `type` first |
| Dashboard tile is cut off on the Home page | The Home component height is fixed (600) | Raise the component height in App Builder, then regenerate the cache |
| A Home dashboard change does not reach the iPad | The iPad reads the mobile metadata cache | Regenerate the cache for the profile and sync |

# Home Page

## Documentation Files

- [home-page-transcripts](./home-page-transcripts.md)

## Spring '26 (Release 260) Enhancements

- [release-260-quick-custom-actions](./release-260-quick-custom-actions.md) — Mar 6, 2026 (Srikant Chonnad). 3 action types (Standard / Quick / Custom), Dynamic Actions toggle, GoTo App actions for Visit Engagement, Custom Action sub-types (URL / App / Utterance) with Target Types (Inline / External / Internal), iPad URI schemes (slack://, photos-redirect://, calshow://, contacts://, mobilenotes://, tel://), live Photos-launch demo recipe (5 steps).

## Support Engineering Training (AFLS4CE Value Chain)

### Key Concepts

- **Standard action is the anchor** — Quick and Custom actions require the Standard action to also be present on the Lightning Record Page; without it, dynamic actions don't render.
- **Dynamic Actions toggle determines source** — OFF → actions come from Page Layout; ON → from Lightning Record Page Actions block.
- **GoTo recipe** — For Visit section navigation: Entity = `SObject`, Type = `App`, Target Type = `Internal`, Action Target = `"GoTo"`, Target Parameters = section object API name (`ProviderVisitRqstSample`, `ProductDisbursement`, `PresentationForum`).
- **Deletion via Tooling API only** — Custom Actions are `LifeSciConfigRecord` rows with `Category = 'CustomAction'`; UI doesn't let you delete — must DELETE via Workbench Tooling API.
- **Label resolution** — Standard via Translation Workbench; Quick + Custom via CustomLabel keyed by Action Name (will switch to DeveloperName in a future release).
- **Sort order** — By Page Layout drag order (Dynamic Actions OFF) OR by Lightning Record Page Actions block order (Dynamic Actions ON), never alphabetical.
- **Cache regen required** — Any action change requires regenerating mobile metadata cache to reach the iPad.

- [support-engineering-quick-custom-actions-config-guide](./support-engineering-quick-custom-actions-config-guide.md) — Evergreen config reference. Supported actions per location (Account / Home Page / Visit Engagement), label source resolution, sort order rules, Tooling-API deletion procedure (SOQL on `LifeSciConfigRecord` + DELETE via Workbench REST), LWC component creation via Migration Deploy, GoTo URI schemes (Samples / Detailing / Disbursement / Inquiry / Signature), 4 worked examples (URL, LWC Quick, App GoTo, Utterance), 5 troubleshooting patterns.

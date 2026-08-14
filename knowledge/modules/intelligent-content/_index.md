# Intelligent Content

## Documentation Files

- [admin-1-talk-track-for-content-management](./admin-1-talk-track-for-content-management.md)
- [admin-2-talk-track-for-presentation-settings](./admin-2-talk-track-for-presentation-settings.md)
- [mobile-dynamic-content-talk-track](./mobile-dynamic-content-talk-track.md)
- [mobile-end-user-talk-track](./mobile-end-user-talk-track.md)

## Spring '26 (Release 260) Enhancements

- [release-260-smart-content-search](./release-260-smart-content-search.md)
- [release-260-send-presentations-as-links-admin](./release-260-send-presentations-as-links-admin.md)
- [release-260-send-presentations-as-links-enduser](./release-260-send-presentations-as-links-enduser.md)

## Support Engineering Training (AFLS4CE Value Chain)

### Key Concepts

- **3 buckets of support issues** — (1) malformed ZIP structure, (2) Content Search misconfiguration in Data 360, (3) `TargetingContext` restricting presentations.
- **ZIP cardinal rule** — Select all files inside the folder and zip them. Do NOT zip the parent folder. `index.html` + `thumbnail.jpg` must be at the ZIP root.
- **TargetingContext** — `None` (all shown) / `Warn` (warn but allow) / `Restrict` (block). Stored on `ProviderAcctTerritoryInfo.TargetedPresentationInfo` as semicolon-delimited Source System Identifiers.
- **Click-stream tracking** — only saved if presentation is associated with a Visit AND the Visit is saved. Cancel discards metrics by design.
- **Content Search** requires Data 360 — 7-step setup (data kit → data streams → settings → re-upload → search index → enable).

- [support-engineering-intelligent-content](./support-engineering-intelligent-content.md) — May 19, 2026 session (Conor Fanlo). Data model (7 objects), ZIP packaging, dynamic content (Mustache + SDK functions), targeting + recommendations, 3 search types, Content Search 7-step setup + troubleshooting, Player capabilities, email-link delivery via Experience Cloud + `PresentationPartyAccess`, full Presentation Settings reference (6 categories), 7 troubleshooting patterns.

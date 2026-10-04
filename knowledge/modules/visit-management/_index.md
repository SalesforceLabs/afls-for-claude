# Visit Management

## Documentation Files

- [258-lsc4ce-visit-mgmt-admin-console-transcript](./258-lsc4ce-visit-mgmt-admin-console-transcript.md)
- [258-lsc4ce-visit-mgmt-release-enablement-demo-script](./258-lsc4ce-visit-mgmt-release-enablement-demo-script.md)
- [258-lsc4ce-visit-mgmt-visit-page-layout-configuration-transcript](./258-lsc4ce-visit-mgmt-visit-page-layout-configuration-transcript.md)
- [258-lsc4ce-visit-mgmt-web-release-enablement-demo-transcript](./258-lsc4ce-visit-mgmt-web-release-enablement-demo-transcript.md)
- [258-lsc4ce-visit-mgmt-test-cases](./258-lsc4ce-visit-mgmt-test-cases.md)

## Spring '26 (Release 260) Enhancements

- [release-260-actionable-list-view](./release-260-actionable-list-view.md)
- [release-260-service-console](./release-260-service-console.md)
- [release-260-signature-page-snapshot](./release-260-signature-page-snapshot.md)
- [release-260-same-address-attendees](./release-260-same-address-attendees.md)
- [release-260-intelligent-content-in-web-visit](./release-260-intelligent-content-in-web-visit.md)

## Support Engineering Training (AFLS4CE Value Chain)

Deep-dive support engineering content from the Engineering → Support training series.

### Key Concepts

- **Granular settings override** — User > Profile > Org via `LifeSciMetadataCategory` / `LifeSciMetadataRecord` / `LifeSciMetadataFieldValue`. #1 source of "setting not working" escalations.
- **Merged layout** — Visit Engagement screen pulls from BOTH `Visit` and `ProviderVisit`. Custom fields MUST go on `ProviderVisit` — only specific standard fields are extracted from `Visit`.
- **`ProviderVisitProductDetailing`** is the parent of all sample/marketing-item/DTP/discussion/message child records.
- **Sample Limits vs Sample Inventory** — Limits = account-level compliance (`ProviderSampleLimit`); Inventory = rep's personal lot stock (`ProductBatchItem.RemainingQuantity`). Different validation, different failure modes.
- **Custom related lists** — max 2; lookup field name MUST end in `Visit__c`; 3rd silently ignored.

- [support-engineering-visit-troubleshooting](./support-engineering-visit-troubleshooting.md) — Jun 2, 2026 session (Jim Morrow). Granular settings override diagnosis, sample limits validation, sample inventory validation, product display 6-step checklist, geolocation, full settings reference, 6 troubleshooting quick-reference patterns.
- [support-engineering-visit-configuration](./support-engineering-visit-configuration.md) — Jun 2, 2026 session (deck companion). Admin Console panels (General/Geolocation/Product Detailing/Samples/Signature), data storage metadata pattern, sample-limits + inventory + allocation configuration models, configuration anti-patterns table.
- [support-engineering-visit-engagement-side-menu](./support-engineering-visit-engagement-side-menu.md) — Apr 3, 2026 session (Srikant Chonnad). Merged layout (Visit + ProviderVisit), sidebar sections table, product loading 5-rule logic + restrictions/override, attendee loading (5+5=10), Intelligent Content targeting, custom related list rules, 7 troubleshooting patterns.

## Winter '27 (Release 264) Enhancements

- [release-264-visit-agent-voice-logging](./release-264-visit-agent-voice-logging.md) — Visit Agent voice-based visit logging on iPad: setup (Access Custom Agent permission set), fields populated, limitations.
- [release-264-validate-visits-on-save-warnings](./release-264-validate-visits-on-save-warnings.md) — Visit Action Validation scripts now run on Save and can return non-blocking `warning` status.
- [release-264-dependent-picklists](./release-264-dependent-picklists.md) — Field dependencies on Provider Visit, Provider Visit Product Discussion and custom objects in Visit Engagement.
- [release-264-group-visit-attendee-capture](./release-264-group-visit-attendee-capture.md) — Attendee name navigation and "Capture only samples and marketing items per attendee" setting for group visits.

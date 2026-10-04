# In-Content Interaction Tracking - Winter '27 (264)

> Source: Winter '27 release enablement deck (marked "WIP" - work in progress). Content may change before GA. Platforms per deck: iPad and Web.

## What's New

Content developers can record element-level engagement inside HTML presentations (button taps, link clicks, video plays, other interactive elements), not just page views. Events are captured as an **in-content metric type** on `PresentationClickStrmEntry` (the deck also writes the object as `PresentationClickStreamEntry` in the setup slide), alongside existing presentation clickstream data.

Use case: the rep hands the iPad to the HCP to explore interactive content; the HCP's clicks and video plays are captured for analysis. Purpose: identify which messages, visual elements and interactions resonate, to optimize content and prioritize investment.

## Setup & Configuration (Content Developer)

1. **Identify the interaction to track** - e.g. button taps, link clicks, video plays.
2. **Create custom fields** (optional, customer-defined) on the `PresentationClickStreamEntry` object to hold interaction-specific data.
3. **Call `PresentationPlayer.trackInteraction()`** from the HTML slide when the interaction occurs, optionally passing a JSON payload:

```js
PresentationPlayer.trackInteraction({
  ContentEventType__c: "video_play",
  ContentEventIdentifier__c: "patient_case_video",
  ContentEventDescription__c: "Patient case video started",
});
```

The payload keys in the deck example are custom fields (`ContentEventType__c`, `ContentEventIdentifier__c`, `ContentEventDescription__c`); these are the customer's own fields and must exist on the object.

4. **Report on the data** - the interaction is stored with the presentation clickstream and the associated Account and Visit context.

No additional configuration in the presentation is required beyond adding the JavaScript calls to the HTML content.

## Related

Retention/cleanup of these records: [release-264-clickstream-data-retention](./release-264-clickstream-data-retention.md).

## Gaps in the Deck

- The deck shows no reporting examples or standard field names for the in-content metric type.
- Existing rule still applies (see support-engineering notes): clickstream is only saved when the presentation is associated with a saved Visit; this deck does not state whether interactions follow the same rule.

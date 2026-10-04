# Visit Agent: Voice-Based Visit Logging - Winter '27 (264)

Platform: iPad (Life Sciences Cloud iPad app). Requires the Agentforce Add-on SKU.

## What's New

Visit Agent is a local-first, AI-powered voice logging capability in the Life Sciences Cloud iPad app. The rep selects an HCP first (priming the AI so the Account maps correctly), then dictates the visit summary. On-device RAG maps the spoken content to visit fields. A visit thumbnail opens the pre-populated Visit Engagement screen for review and submission.

Use case: after an HCP meeting the rep opens Visit Agent, selects the account, dictates the summary; the AI maps products, messages and presentations and generates a visit. The rep reviews and submits (target: under two minutes).

## What Gets Updated on the Visit Record

| Object | Fields |
|--------|--------|
| Visit | AccountID, PlaceID, PlannedVisitStartTime, PlannedVisitEndTime |
| Provider Visit Product Detailing | ProductID |
| Provider Visit Detailing Product Messages | Message ID, Reaction Type / Captured Reaction |
| Presentation Forum | PresentationID |

## Admin Setup

1. Enable Einstein.
2. Turn on Agentforce Agents.
3. In Life Sciences for Customer Engagement Setup, enable **Visit Agent** (under **Set Up Custom Agents**).
4. Grant users access via the **Access Custom Agent** permission set.
5. Generate the Metadata Cache.

## Field Rep Prerequisites (after Visit Agent is enabled for the user)

1. Turn on Apple Intelligence on the device.
2. Speech-to-text model downloads automatically once Visit Agent is enabled.
3. The speech-to-text model initializes automatically the first time the feature is used.

## Limitations

- English only.
- Notes are NOT retained / NOT mapped to text fields.
- Compliance checks are NOT supported.
- Max ~8 products per territory for priming.

## Licensing

Agentforce Add-on SKU required.

See also: [release-262-voice-visit-logging](./release-262-voice-visit-logging.md) for the earlier (Summer '26) voice logging content.

# Activity Timeline

Activity Timeline gives reps a unified timeline + calendar view of standard activities (Visits, Emails, Surveys, Inquiries, Assessment Tasks) and custom activity types wired in via a container object pattern. All configuration happens in the Admin Console under three tabs: General, Visibility, Display Text.

## Key Concepts

| Concept | Detail |
|---|---|
| **Admin Console tabs** | General Settings, Visibility Settings, Display Text Settings |
| **Field set UI limit** | Max 6 fields render when an activity is expanded |
| **Status matching** | Display Text status values MUST exactly match record's status API value — mismatch silently hides the row |
| **Custom Activity Container** | Pattern for surfacing custom objects via a single container object + Apex trigger/service per source |
| **Calendar Views** | Month (count per day) and Week (activity headers, click-through to records) |

## Documentation Files

- [activity-timeline-transcripts](./activity-timeline-transcripts.md)

## Support Engineering Training (AFLS4CE Value Chain)

- [support-engineering-activity-timeline](./support-engineering-activity-timeline.md) — Jun 9, 2026 session. Full Admin Console structure (3 tabs), Custom Activity Container Object pattern (4 steps + multiple-source-objects via one container), Standard Object Data Integrity Checklist, 5 troubleshooting patterns (status mismatch, custom field loading, missing actions, calendar behavior).

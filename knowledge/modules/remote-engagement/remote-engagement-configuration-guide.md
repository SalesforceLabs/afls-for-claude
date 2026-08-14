# Remote Engagement — Configuration Guide

## Overview

Remote Engagement in AFLS enables field teams to conduct virtual interactions with healthcare professionals (HCPs) through video calls, screen sharing, and digital content presentation. This complements in-person visits and extends reach to HCPs who prefer virtual meetings or are in hard-to-reach locations.

## Key Concepts

- **Remote visits** are tracked as Visit records with a "Remote" record type
- **Video integration** connects to platforms like Zoom, Microsoft Teams, or Salesforce Meetings
- **Content sharing** allows reps to present CLM/Intelligent Content during remote calls
- **Engagement tracking** captures the same metrics as in-person visits (products detailed, discussions, signatures)

## Key Objects

| Object | Purpose |
|--------|---------|
| `Visit` | Visit record with RecordType = "Remote Visit" |
| `ProviderVisit` | Provider-specific visit data for remote visits |
| `Event` | Calendar event linked to the remote visit |
| `ProviderVisitPrdDetailing` | Product detailing during remote visits |
| `ProviderVisitProdDiscussion` | Product discussions during remote visits |

## Configuration

### Record Types

Create matching record types on both Visit and ProviderVisit:
- **Remote Visit** — for video/virtual interactions
- **Phone Call** — for phone-only interactions (optional)

**Important:** Record type names MUST match between Visit and ProviderVisit.

### Visit Settings

In Admin Console > Visit Settings:
- Enable Remote Visit functionality
- Configure remote visit-specific fields
- Set default remote visit duration
- Enable/disable signature capture for remote visits (if applicable)

### Video Platform Integration

#### Option 1: Salesforce Meetings (native)

- Enable Salesforce Meetings in Setup
- Configure meeting settings
- Meetings auto-link to Visit records

#### Option 2: Zoom Integration

- Install Zoom for Salesforce from AppExchange
- Configure Zoom Connected App
- Set up meeting creation from Visit records
- Zoom meeting link stored on the Visit/Event record

#### Option 3: Microsoft Teams Integration

- Install Microsoft Teams integration
- Configure Teams Connected App
- Enable meeting creation from Visit records
- Teams meeting link stored on the Visit/Event record

### Content Sharing for Remote Visits

During remote visits, reps can share CLM/Intelligent Content:

1. **Screen sharing:** Present content via the video platform's screen share
2. **Sent Presentation:** Use the `upload_presentation` and `distribute_presentation` tools to assign content
3. **Email follow-up:** Send presentation materials post-visit via Field Email

### Quick Actions for Remote Visits

Create Quick Actions for reps to initiate remote visits:
- **New Remote Visit:** Create a Visit with Remote Visit record type
- **Schedule Remote Visit:** Create a Visit + linked Event with video meeting link
- **Log Remote Call:** Quick entry for completed remote interactions

## Mobile Considerations

- Remote visits can be scheduled and logged from the AFLS Mobile app
- Video calls are typically launched via the device's native video app (Zoom, Teams, etc.)
- The AFLS Mobile app can deep-link to video apps when the meeting URL is stored on the Visit/Event
- Product detailing and discussion tracking work the same as in-person visits on mobile

### DB Schema for Remote Engagement

Same as standard Visit Management — Visit, ProviderVisit, and related objects must be in DB Schema.

## Workflow

```
1. Rep schedules remote visit (creates Visit + Event)
   └── Video meeting link generated/attached
2. At scheduled time, rep opens video call
   └── Presents content, discusses products
3. During/after call, rep logs visit details
   ├── Products detailed (ProviderVisitPrdDetailing)
   ├── Discussions (ProviderVisitProdDiscussion)
   ├── Attendees
   └── Notes
4. Visit completed and synced
   └── Available in reports and activity tracking
```

## Reporting

### Key Metrics

- Remote visit volume vs. in-person visits (trend analysis)
- Average remote visit duration
- Product detailing reach via remote vs. in-person
- HCP engagement rates by channel (remote, in-person, phone)
- Geographic coverage improvement with remote capability

### Reports

- Create Visit reports filtered by RecordType = "Remote Visit"
- Compare detailing effectiveness between remote and in-person visits
- Track remote visit scheduling and completion rates

## Compliance Considerations

1. **Recording consent:** If video calls are recorded, HCP consent must be captured
2. **Adverse event capture:** Same requirements as in-person visits — reps must escalate adverse events
3. **Sample distribution:** Physical samples cannot be distributed during remote visits — use follow-up processes
4. **E-signature:** Digital signature solutions may be needed for compliance statements during remote visits

## Common Issues

1. **Video meeting link not appearing:** Check that the Event record is linked to the Visit and the video platform integration is configured.
2. **Remote visits not in reports:** Verify the Visit record type is "Remote Visit" and report filters include this record type.
3. **Content not available during remote calls:** Ensure presentations are distributed to the rep's territory and available on the device.
4. **Detailing not saving on remote visits:** Check that ProviderVisit record types match Visit record types (must be identical names).

# Participant Type Mapping - Winter '27 (264)

Applies to: iPad and Web. Status: GA.

## What's New

Admins configure participant types, roles, and valid combinations for each Managed Event Type. Default mappings streamline participant creation, and standardized classifications improve data quality, reporting, and compliance.

- Admins define organization-specific participant roles and map them to standardized types.
- Admins define valid Type + Role combinations by Managed Event Type and identify the default role for each participant type.
- When an HCP is added to an event (e.g. a Speaker Event), the configured participant type and default role are applied. The system validates the combination for that Managed Event Type before saving.

## Admin Setup & Configuration

Prerequisites:
- Create active **Event Management Participant Type Role Mapping** records.
- Optionally create active Managed Event Participant record types.

Steps:
1. Admin Console > Event Management > **Participant Type Mappings**: click New and select a participant type.
2. Set a default role (not required for colleagues).
3. Select a record type and save.
4. In each custom participant related list, configure one record type developer name for Attendees, Experts, Write-Ins, and Non-Profiled Participants.

Mapped values populate the participant record type, participant type, role, and type-role mapping fields.

## End-User Flow (Mobile)

1. Open a Managed Event and go to the participants section.
2. Choose Attendee, Expert, Colleague, Write-In, or Non-Profiled Participant.
3. Tap the available action and select or enter the participant.
4. The system auto-populates record type, participant type, default role, and type-role mapping. The user does not select these manually.

# Managed Event Type Mapping - Winter '27 (264)

Applies to: iPad and Web. Status: GA.

## What's New

Admins map Managed Event record types to Managed Event Types (declarative 1:1). When a user selects a record type while creating an event, the mapped Managed Event Type is populated automatically on web and mobile. This reduces clicks and prevents inconsistent classification. Duplicate mappings are prevented.

Example: selecting the Speaker Event record type populates the mapped Managed Event Type automatically.

## Admin Setup & Configuration

Prerequisites:
- Create Managed Event record types.
- Create Managed Event Type records.

Steps:
1. Setup > Life Sciences for Customer Engagement > Configure Event Management for Customer Engagement: turn on **Autopopulate Managed Event Type in Managed Event Records**.
2. Admin Console > Event Management > **Event Type Mappings**: click New, select a Managed Event record type, select a Managed Event Type record, select Active, and save.
3. Remove the Managed Event Type field from the page layout. Mapped values populate automatically in the backend.

## End-User Flow

Mobile: from the home page open the Managed Event tab, tap New, select a record type, and enter the event name and other details to create the draft. The Managed Event Type is populated in the backend from the admin mapping. The same behavior applies on web.

## Limitations / Gotchas

- Each record type can map to only one event type.

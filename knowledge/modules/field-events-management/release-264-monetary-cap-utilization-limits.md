# Monetary Cap and Utilization Limits - Winter '27 (264)

Applies to: iPad and Web. Status: GA.

## What's New

Automated controls for speaker compensation caps and attendee utilization limits during event planning, with real-time validation before an event is submitted.

- Monetary Cap: annual or quarterly compensation limits for HCP and KOL services. Committed speaker fees are checked against the total cap during speaker selection and expense allocation.
- Utilization Limits: country- or region-specific participation rules for HCPs attending in-person, virtual, and hybrid events. Checked at participant selection.

## Admin Setup & Configuration

### 1. Enable processing and user feedback
- Admin Console > Trigger Handlers: search for "Monetary" and enable all monetary cap and utilization limit trigger handlers.
- Lightning App Builder: add **Utilization Tracker** to the Account record page; add **Record Update Validation Notifier** to the Managed Event record page.

### 2. Statuses and expense types
- Admin Console > Event Management > **Field Events Org Settings**: set **Concluded Event Statuses** so exceeded limits warn rather than block after the event occurs.
- Expense Types: select **Included in Cap** for each expense type that should count toward monetary-cap validation.

### 3. Activity Plan and Provider Activity Goals
- Create an Activity Plan with Type = **Event Management Limit**, set Active, and create a Time Period linked to the plan. One plan can cover monetary caps, utilization limits, or both.
- Create a Provider Activity Goal per account requiring validation, linking the participant account to the Activity Plan. Create separate goals for monetary caps and utilization limits. Use bulk data loading for many accounts.

### 4. Criteria, limits, measures, sharing
- Create Provider Activity Measure Types using the provided starter script: label, Alert Type, and criteria JSON for monetary cap or utilization validation; define qualifying event statuses and expense buckets.
- Create a Provider Activity Goal Limit for each goal and enter the monetary or activity limit.
- Create a Provider Activity Goal Measure linking the Provider Activity Goal and Provider Activity Measure Type, with Type = Event Management Limit.
- Share Provider Activity Goals with territories based on provider account-to-territory alignment.

The system calculates monetary expense buckets or utilization activity values from the configured criteria.

## End-User Flow

- Add attendees/experts: if an HCP has reached a cap or limit with Warn or Error behavior, the addition is warned or blocked.
- From the search screen, users can open Account profiles to review limits, current utilization, and remaining availability before selecting an eligible HCP.
- Reserve speaker fee: add the estimated speaker fee to the event and allocate it to the expert. The allocated estimate is held against the expert's monetary cap before submission for approval.
- Post-event: after the event begins, organizers can record actual speaker fees and add walk-in attendees even if this exceeds a cap or limit. The system allows the action, shows a warning, and creates a **Managed Event Participant Discrepancy** for compliance review and reporting.

## Limitations / Gotchas

- Before the event, exceeded limits block (or warn, per configured behavior); after Concluded Event Statuses apply, they warn instead.

# Surveys — Configuration Guide

## Overview

Surveys in AFLS allow field teams to collect structured feedback from healthcare professionals (HCPs) during or after interactions. Surveys can be launched from visits, account pages, or standalone, and responses are tracked for reporting and analytics.

## Key Objects

| Object | Purpose |
|--------|---------|
| `Survey` | The survey definition (name, description, status) |
| `SurveyVersion` | Versioned instance of a survey (questions, logic) |
| `SurveyQuestion` | Individual questions within a survey version |
| `SurveyQuestionChoice` | Answer choices for multiple-choice questions |
| `SurveyInvitation` | Links a survey to a recipient/context |
| `SurveyResponse` | A completed survey submission |
| `SurveyQuestionResponse` | Individual question-level responses |
| `SurveySubject` | Links a survey response to a subject record (e.g., Account) |

## Survey Creation

### Using the Salesforce Survey Builder

1. Navigate to **Setup > Surveys** or the Surveys tab
2. Click **New Survey**
3. Add pages and questions:
   - **Rating:** 1-5 star scale
   - **Multiple Choice:** Single or multi-select
   - **Short Text:** Free-form text input
   - **Long Text:** Extended text response
   - **Date:** Date picker
   - **Score:** Numeric scoring
   - **NPS:** Net Promoter Score (0-10)
4. Configure question logic (branching, required fields)
5. Set the survey to **Active**

### Question Types for AFLS

| Type | Best For |
|------|----------|
| Rating | HCP satisfaction, product perception |
| Multiple Choice | Prescribing habits, preferred communication channels |
| NPS | Overall relationship measurement |
| Short/Long Text | Open-ended feedback, medical insights |

## Sharing and Distribution

### Sharing Rules

Surveys must be shared with the users/territories that will use them:

1. **Public Link:** Generate a survey URL that can be emailed or embedded
2. **Community/Experience Site:** Embed in a customer-facing portal
3. **In-App (AFLS):** Launch surveys from within the AFLS web or mobile app

### Launch Points

Surveys can be triggered from:

1. **Visit Engagement:** During or after a visit (via FlexCard on web, or visit flow on mobile)
2. **Account Page:** From the account detail page
3. **Quick Action:** Custom quick action that opens the survey
4. **Automated (Flow):** Triggered by a Flow after specific events (e.g., post-visit)

### Territory-Based Distribution

- Create SurveyInvitation records linked to specific territories
- Use sharing rules to ensure only reps in assigned territories see the survey

## Response Tracking

### Viewing Responses

- **Survey Results Tab:** Aggregate view of all responses by survey
- **Individual Response Records:** Drill into SurveyResponse records for detail
- **Reports/Dashboards:** Create custom reports on SurveyResponse and SurveyQuestionResponse

### Key Metrics

- Response rate (invitations sent vs. completed)
- Average scores by question
- NPS distribution
- Response trends over time periods

### Analytics

- Standard Salesforce reports on Survey objects
- CRM Analytics dashboards for advanced visualization
- Einstein Discovery for response pattern analysis

## Mobile Considerations

- Surveys are accessible on the AFLS Mobile app through visit flows and quick actions
- Offline survey completion is supported when DB Schema is configured for survey objects
- Survey responses sync when connectivity is restored

### DB Schema for Surveys

If using surveys on mobile, ensure these objects are in DB Schema:
- `Survey` (read-only sync)
- `SurveyVersion` (read-only sync)
- `SurveyQuestion` (read-only sync)
- `SurveyQuestionChoice` (read-only sync)
- `SurveyInvitation` (bidirectional sync)
- `SurveyResponse` (bidirectional sync)
- `SurveyQuestionResponse` (bidirectional sync)

## Admin Console Settings

In Admin Console > Survey Settings:
- Enable/disable survey features
- Configure default survey behavior
- Set survey expiration policies

## Trigger Handlers

| Handler | Purpose |
|---------|---------|
| `SurveyResponseTriggerHandler` | Processes survey response submissions |

## Common Issues

1. **Survey not visible to reps:** Check sharing rules and SurveyInvitation records. Verify the survey is Active.
2. **Responses not syncing on mobile:** Ensure SurveyResponse and SurveyQuestionResponse are in DB Schema with bidirectional sync.
3. **Survey logic not working:** Check SurveyVersion — logic is version-specific. Ensure the active version has correct branching.
4. **Duplicate responses:** Set up validation rules or Flow logic to prevent multiple submissions per visit/account.

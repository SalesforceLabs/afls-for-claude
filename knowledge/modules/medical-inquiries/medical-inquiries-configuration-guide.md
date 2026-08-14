# Medical Inquiries — Configuration Guide

## Overview

Medical Inquiries (also called Medical Information Requests) in AFLS enable field reps to capture and route medical questions from healthcare professionals (HCPs) to the Medical Affairs or Medical Information teams. This ensures compliance with regulatory requirements that prevent field reps from providing off-label or unsolicited medical information.

## Key Concepts

- **Field reps** capture the inquiry but do NOT provide the medical answer
- **Medical Affairs** reviews, researches, and responds to the inquiry
- **Compliance tracking** ensures all inquiries are documented with timestamps, channels, and resolution status
- **Regulatory requirements** mandate separation between commercial (sales) and medical information functions

## Key Objects

| Object | Purpose |
|--------|---------|
| `Case` | Standard Salesforce Case used to track medical inquiries |
| `Account` (PersonAccount) | The HCP who asked the question |
| `Product2` | The product the inquiry relates to |
| `ContentDocument` / `Attachment` | Supporting documents attached to the inquiry |

## Workflow

```
Rep captures inquiry → Case created → Routed to Medical Affairs queue
→ Medical team reviews → Response prepared → Response delivered to HCP
→ Case closed with resolution details
```

### Step-by-step

1. **Capture:** Rep creates a new Medical Inquiry (Case) during or after an HCP interaction
   - Records: HCP name, product, inquiry text, urgency, channel (in-person, phone, email)
   - Date/time automatically stamped
   - Rep DOES NOT provide an answer

2. **Routing:** Inquiry auto-routes to the Medical Affairs queue
   - Assignment rules or Flows route based on product, therapeutic area, or region
   - Priority/urgency drives SLA timelines

3. **Review:** Medical Affairs reviews the inquiry
   - Categorizes the inquiry (on-label, off-label, adverse event, product complaint)
   - If adverse event → escalate to Pharmacovigilance
   - If product complaint → escalate to Quality

4. **Response:** Medical team prepares and delivers the response
   - Standard response letters for common questions
   - Custom responses for complex inquiries
   - Delivered via rep, email, or mail per HCP preference

5. **Closure:** Case closed with full documentation
   - Response text, delivery method, delivery date
   - All interactions logged for audit trail

## Configuration

### Record Types

Create Case record types to distinguish Medical Inquiries from standard support cases:
- **Medical Information Request** — standard product questions
- **Adverse Event Report** — safety-related reports (may require separate handling)
- **Product Complaint** — quality/defect reports

### Page Layouts

Configure Case page layouts for medical inquiry fields:
- Product (lookup to Product2)
- Inquiry Category (picklist: On-Label, Off-Label, Adverse Event, Product Complaint)
- Urgency (picklist: Standard, Urgent, Critical)
- Channel (picklist: In-Person, Phone, Email, Letter)
- HCP Preference for Response (picklist: Via Rep, Email, Mail)
- Response Text (long text)
- Response Delivered Date

### Assignment Rules / Queues

- Create a **Medical Affairs Queue** for Case
- Set up Case Assignment Rules based on:
  - Record Type = Medical Information Request
  - Product Family or Therapeutic Area
  - Region/Territory

### Flows and Automation

- **Auto-escalation Flow:** If inquiry is marked as Adverse Event, auto-create a Pharmacovigilance case
- **SLA reminder Flow:** Send notifications when inquiries approach SLA deadline
- **Response notification Flow:** Notify the originating rep when a response is ready

## Mobile Considerations

- Reps can create Medical Inquiry cases from the mobile app during visits
- Use Quick Actions or Custom Actions on the Visit or Account page
- Case object must be in DB Schema for mobile access
- Consider offline capture requirements — cases created offline sync when connectivity returns

### DB Schema for Medical Inquiries

- `Case` (bidirectional sync with appropriate WhereSoql filter)
- Filter suggestion: `RecordType.DeveloperName = 'Medical_Information_Request' AND OwnerId = '<user_territory_filter>'`

## Compliance Requirements

1. **Separation of duties:** Field reps capture inquiries but never provide medical responses
2. **Audit trail:** All interactions must be logged with timestamps
3. **Timely response:** SLAs typically require responses within 24-48 hours for standard, 4 hours for urgent
4. **Adverse event reporting:** Adverse events must be escalated within regulatory timelines (often 24 hours)
5. **Record retention:** All medical inquiry records must be retained per company policy (typically 7+ years)

## Reporting

### Standard Reports

- **Open Inquiries:** Cases by status, age, and priority
- **Response Time:** Average time from inquiry creation to response delivery
- **Volume by Product:** Inquiry counts by product and therapeutic area
- **Channel Distribution:** Inquiry sources (in-person, phone, email)

### Dashboards

- Medical Affairs team dashboard: open cases, SLA compliance, volume trends
- Product-level inquiry heatmap: which products generate the most questions

## Common Issues

1. **Inquiries not routing correctly:** Check Case assignment rules and queue membership. Verify record type is set correctly.
2. **Reps can't create inquiries on mobile:** Ensure Case is in DB Schema and a Quick Action or Custom Action exists for inquiry creation.
3. **Missing audit trail:** Enable Case field history tracking for all medical inquiry fields.
4. **Adverse events not escalating:** Check Flow triggers and ensure the escalation criteria match the adverse event record type/category.

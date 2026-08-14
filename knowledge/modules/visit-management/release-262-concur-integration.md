# Visit Expense Concur Integration (Summer '26)

Presenter: Sora, Product Manager, AFLS

## Overview

In Summer '26, a first-party application on MuleSoft called **Concur Expense Sync** was introduced to enable bidirectional synchronization of visit expense records between Salesforce AFLS (AFLS) and the SAP Concur system. This eliminates manual reconciliation processes, reduces administrative overhead, and mitigates compliance risks associated with logging field expenses.

**Current limitation:** Functionality is only available for visit expense records logged via the AFLS iPad application.

## How It Works

### Expense Logging Workflow

1. Field rep completes a visit with HCP/HCO
2. Rep navigates to the visit record → Expenses tab → New
3. Selects "Expense and Receipt" option
4. Populates expense details:
   - Report name (e.g., "May lunch expense")
   - Total amount (e.g., $75)
   - Receipt photo
5. Allocates costs across multiple attendees

### Automated Synchronization (Salesforce → Concur)

The Concur Expense Sync app automatically:
- Identifies expenses linked to a report
- Syncs expense report entries, attendee allocations, and receipts to Concur
- Runs in batch mode at defined intervals
- Can also be triggered manually via MuleSoft Anypoint platform

### Bidirectional Updates (Concur → Salesforce)

Updates made in Concur (e.g., adjusted amounts, resolved errors) are reflected back in Salesforce AFLS:
- Trigger the Concur-to-Salesforce job via Anypoint platform
- Corresponding record in Salesforce updates automatically
- Expense System Integration Status updates to "Completed"

### Verification

After sync:
- Expense data (total amount, attendee distributions) appears in Concur
- Receipts viewable directly in Concur
- Attributes show per-attendee cost allocation

## Key Technical Details

- **Application:** Concur Expense Sync (MuleSoft first-party app)
- **Sync direction:** Bidirectional (AFLS ↔ Concur)
- **Sync mode:** Batch at scheduled intervals + manual ad-hoc via Anypoint
- **Platform:** AFLS iPad app expenses only (current scope)
- **Integration user:** Required for Anypoint platform operations

## Developer Documentation

From developer.salesforce.com (Spring '26, API Version 66.0):

> The Concur Expense Sync application provides bidirectional synchronization between Life Science Cloud and SAP Concur, allowing users to automate expense data flow, validate attendee information, and manage receipts directly within the Salesforce mobile workflow.

More info: MuleSoft Direct Integrations → Concur Expense Sync

## Developer Documentation (Full Description)

Source: https://developer.salesforce.com/docs/industries/lifesciences/guide/mulesoft-direct-integrations.html

The Concur Expense Sync application enables a bidirectional synchronization between Life Science Cloud and SAP Concur. This integration allows customers to connect with SAP Concur to automate the flow of expense data, ensuring that field representatives can manage visit-related expenses directly within their primary Salesforce mobile workflow. Organizations can automatically validate user and attendee information, sync expense reports, and manage receipts or attachments up to 1MB. This data supports downstream activities by providing real-time visibility into the integration lifecycle and ensuring that all Healthcare Professional (HCP) related spend remains accurate, compliant, and synchronized with the final financial records.

# Concur Integration for Events - Winter '27 (264)

Applies to: iPad and Web. Status: GA.

## What's New

Field Events synchronize event expenses, participant allocations, and receipts with Concur through MuleSoft. The event record shows the linked report, sync status, and errors.

- Expense reports created in Concur sync into Life Sciences Cloud; reports created in Life Sciences Cloud can be synced to Concur.
- Users link an actual event expense to an eligible, user-owned Concur report. Linking creates an **Expense Report Entry** that carries the expense into Concur.
- Linked expenses, allocations, and receipts are sent via the scheduled MuleSoft integration. Users review and submit the reimbursement report in Concur without re-entering data.
- Changes made in Concur (corrected amounts, report statuses) sync back to the event expense.

## Admin Setup & Configuration

Prerequisite: use the built-in MuleSoft **Concur Expense Sync** integration. Customers already using it for Visits can reuse the existing setup.

1. Object Manager: configure **Expense > Expense System Integration Status** values and **Expense Report > Expense System Integration Status** values. Match both picklists to the corresponding Concur status values.
2. Admin Console > **Concur Settings**:
   - Expense Status for Expense Report Mapping: expense statuses eligible for linking
   - Expense Report Statuses: reports available for linking
   - Managed Event Status for Expenses: events eligible for linking expenses to reports
3. Set Concur Integration Expense Status and Expense Report Status to **Pending** for records that should sync or link.

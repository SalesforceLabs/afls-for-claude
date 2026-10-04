# Estimated Expense Allocation - Winter '27 (264)

Applies to: iPad and Web. Status: GA.

## What's New

Field Events supports allocating estimated expenses to participants during event planning. Teams see planned per-participant costs and can evaluate committed speaker fees against monetary caps before the event (see release-264-monetary-cap-utilization-limits). Allocation can be even or uneven.

## Admin Setup & Configuration

Prerequisites:
- Grant users create, edit, and delete access to **Expense Participant** records.
- Add the Expense component to the Managed Event record page.
- In Admin Console configure:
  - Managed Event Colleague Restricted Roles
  - Estimated Expense Allocation Invitation Status
  - Search Settings - Expenses: field sets, enable system generated filter, and partial allocation

Partial allocation controls whether the allocated total may be less than the expense amount.

Create an estimated Expense Type (App Launcher > Expense Types > New):
- Name (e.g. Food)
- Expense Availability Type = Managed Event
- Effective dates
- Allocation type
- Included in Cap, if applicable
- Classification = Estimated
- Leave Parent Expense Type blank

## End-User Flow (iPad)

Add estimated expense:
1. Open the Managed Event and go to Expenses.
2. Tap Add Estimated Expenses.
3. Select an expense category, enter a name and amount, and save.
4. Use the default event-based filter or advanced search to find expense types.

Allocate:
1. Open the estimated expense and tap Allocate.
2. Even allocation: select participants and save.
3. Uneven allocation: turn on Uneven Allocation, enter each participant's amount, and save.

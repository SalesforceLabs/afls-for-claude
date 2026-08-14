---
description: Interactive wizard to configure and validate AFLS Activity Plan
arguments: "[check-type]"
---

# Configure AFLS Activity Plan

Interactive wizard to check and configure Activity Plans for web and mobile.

## Arguments

- `check-type` (optional): Focus area - `full`, `plans`, `goals`, `measures`, `jobs`, or `mobile` (default: full)

## Instructions

Follow these steps sequentially to validate and configure activity plans.

### Step 1: Verify Org Connection

First, check if connected to a Salesforce org:

```
Use check_afls_setup to verify org connection
```

If not connected, guide the user through authentication.

### Step 2: Run Comprehensive Activity Plan Configuration Check

Run the dedicated activity plan configuration tool:

```
check_activity_plan_config()
```

This queries:
- TimePeriod records
- ActivityPlan records (type, status, active/inactive)
- ActivityPlanTerritory records
- ProviderActivityGoal records (account goals)
- ProviderActivityGoalMeasure records
- PrvdActvtyGoalMeasurePrdct records (product goals)
- ProviderAcctTerritoryInfo records
- Mobile metadata cache status

Report the summary from the tool output.

### Step 3: Check Time Periods

Verify TimePeriod records exist with valid dates:

```sql
SELECT Id, Name, StartDate, EndDate
FROM TimePeriod
ORDER BY StartDate DESC
LIMIT 50
```

Report:
- Time periods found (names and date ranges)
- Whether any cover the current date
- **WARN if none found**: Time periods are required before creating activity plans

### Step 4: Check Activity Plans

Query ActivityPlan records:

```sql
SELECT Id, Name, Status, IsActive, PlanType, TimePeriodId, TimePeriod.Name
FROM ActivityPlan
ORDER BY CreatedDate DESC
LIMIT 50
```

Report:
- Number of plans by type (Account Goal, Weighted Territory Goals, Account Goal Shared)
- Active vs inactive plans
- Plan statuses (In Progress, Employee Review, Manager Review, Approved)
- **WARN if none found**: No activity plans configured

### Step 5: Check Territory Assignments

Verify plans are linked to territories:

```sql
SELECT Id, ActivityPlanId, ActivityPlan.Name, TerritoryId
FROM ActivityPlanTerritory
ORDER BY CreatedDate DESC
LIMIT 50
```

Report:
- Number of plan-territory links
- Which plans have territories assigned
- **WARN if plans exist without territories**: Plans need ActivityPlanTerritory records

### Step 6: Check Provider Activity Goals

Query account-level goals:

```sql
SELECT Id, Name, ActivityPlanId, ActivityPlan.Name, AccountId, Account.Name, OverallGoal, ProductLevelGoal, NonProductLevelGoal
FROM ProviderActivityGoal
ORDER BY Account.Name
LIMIT 50
```

Report:
- Number of account goals
- Accounts with goals assigned
- Overall goal ranges
- **WARN if plans exist but no goals**: Plans need ProviderActivityGoal records

### Step 7: Check Goal Measures

Query activity-level measures:

```sql
SELECT Id, Name, ProviderActivityGoalId, MeasureType, GoalCount, Type
FROM ProviderActivityGoalMeasure
ORDER BY CreatedDate DESC
LIMIT 50
```

Report:
- Number of goal measures
- Measure types being used
- Goal vs Weighted Goal types
- **INFO if none found**: Goal measures define the specific activity targets

### Step 8: Check Product Goal Measures

Query product-specific goals:

```sql
SELECT COUNT() FROM PrvdActvtyGoalMeasurePrdct
```

Report:
- Number of product goal measure records
- **INFO if none found**: Product goals are optional

### Step 9: Check Mobile Metadata Cache Status

```
check_mobile_cache_status()
```

Report:
- Cache status (Active/Published/Error)
- Last modified date
- If stale (> 7 days old), recommend regeneration
- Any cache errors

### Step 10: Present Configuration Report

Compile findings into a summary report:

```
## Activity Plan Configuration Report

### Overall Status: [READY / NEEDS ATTENTION / NOT CONFIGURED]

### Time Periods
- Records: [count]
- Current period: [name] ([dates])
- Status: [Configured / Not Found]

### Activity Plans
- Total plans: [count]
- Active: [count] | Inactive: [count]
- Types: Account Goal: [count], Weighted: [count], Shared: [count]
- Status: [Configured / Not Found]

### Territory Assignments
- ActivityPlanTerritory records: [count]
- Plans with territories: [count]
- Status: [Configured / Missing Assignments / Not Found]

### Provider Activity Goals
- Account goals: [count]
- Accounts targeted: [count]
- Status: [Configured / Not Found]

### Goal Measures
- Measures: [count]
- Types: Goal: [count], Weighted Goal: [count]
- Status: [Configured / Not Found]

### Product Goals
- Product goal records: [count]
- Status: [Configured / Not Configured]

### Mobile Metadata Cache
- Status: [Active / Error / Not Found]
- Last Updated: [date]

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

### Step 11: Offer Next Steps and Fix Issues

Based on findings, offer to fix issues directly using programmatic tools:

**If no Time Periods:**
- Guide to creating TimePeriod records with Name, StartDate, EndDate

**If no Activity Plans:**
- Guide to creating an ActivityPlan with type, status, time period
- Explain the three plan types

**If plans exist but no territories:**
- Guide to creating ActivityPlanTerritory records
- Explain territory linking requirement

**If plans exist but no goals:**
- Guide to creating ProviderActivityGoal records per account
- Explain Overall Goal, Product Level Goal, Non-Product Level Goal

**If goals exist but no measures:**
- Guide to creating ProviderActivityGoalMeasure records
- Explain Goal vs Weighted Goal types

**If trigger handlers inactive:**
- Ask user: "The following trigger handlers are inactive: [list]. Want me to enable them?"
- If yes: `toggle_trigger_handler({ handlerName: "ActivityPlanTriggerHandler", active: true })` for each
- Report what was enabled

**If Admin Console settings missing or misconfigured:**
- Ask user: "These settings need to be created/updated: [list]. Want me to set them up?"
- If yes: Use `create_admin_setting` or `update_admin_setting` as appropriate
- Report what was changed

**If batch jobs not running:**
- Check Admin Console activity plan settings: `list_admin_settings({ category: "ActivityPlan" })`
- Ask user: "Activity plan batch jobs need configuration. Want me to set them up?"
- If yes: Use `update_admin_setting` to configure job scheduling
- Report what was changed

**If metadata cache stale or missing:**
- Ask user which profiles need cache regeneration
- Offer to run `generate_mobile_metadata_cache`

**If all checks pass:**
- Confirm activity plans are properly configured
- Remind to schedule batch jobs
- Suggest adding Lightning components to Home Page and Account page

## Example Usage

User: `/afls:configure-activity-plan`
> Run full activity plan configuration check

User: `/afls:configure-activity-plan plans`
> Focus on activity plan and time period configuration

User: `/afls:configure-activity-plan goals`
> Focus on provider activity goals and account targets

User: `/afls:configure-activity-plan measures`
> Focus on goal measures and product goals

User: `/afls:configure-activity-plan jobs`
> Focus on batch job configuration and scheduling

User: `/afls:configure-activity-plan mobile`
> Focus on mobile-specific activity plan configuration

## Quick Validation Alternative

For a faster automated check, suggest using the audit command:

```
/afls:audit activity-plan-config-check
```

This runs all activity plan-specific validation rules automatically.

## Admin Console Navigation

| Task | Path |
|------|------|
| Activity Plan Administration | Admin Console > Activity Plans > Activity Plan Administration |
| Activity Plan Jobs | Admin Console > Activity Plans > Activity Plan Jobs |
| Activity Plan Configuration | Admin Console > Activity Plans > Activity Plan Configuration |
| Activity Plan Settings | Admin Console > Activity Plans > Activity Plan Settings |
| Metadata Cache | Admin Console > Mobile > Object Metadata Cache Configuration |

## IMPORTANT OBJECT NAME REMINDERS

- Use `ActivityPlan` NOT `ActivityPlan__c`
- Use `ActivityPlanTerritory` NOT `ActivityPlanTerritory__c`
- Use `TimePeriod` NOT `TimePeriod__c` or `PlanCycle__c`
- Use `ProviderActivityGoal` NOT `ProviderActivityGoal__c` or `AccountGoal__c`
- Use `ProviderActivityGoalMeasure` NOT `ProviderActivityGoalMeasure__c` or `GoalMeasure__c`
- Use `PrvdActvtyGoalMeasurePrdct` NOT `PrvdActvtyGoalMeasurePrdct__c` or `GoalMeasureProduct__c`
- Use `ProviderAcctTerritoryInfo` NOT `ProviderAccountTerritoryInfo__c`
- Provider Activity Measure Types are custom metadata configured via Admin Console (not queryable via run_soql)
- Admin Console settings are in `LifeSciConfigRecord` (Tooling API only)

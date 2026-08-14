# Activity Plan Progress Home Page Widget (Summer '26)

## Overview

A new enhanced activity plan homepage widget for mobile that provides field reps with at-a-glance visibility into their activity plan progress directly from the home page. Gives field users instant clarity on where they stand and where to act next.

## Admin Configuration & Setup

To enable the enhanced Activity Plan Progress component on mobile:

1. **Configure the intended user's home page** in App Builder
2. **Select the existing "Activity Plan by Product" component** on the home page
3. **Check the new checkbox:** "Show Enhanced Activity Plan Progress component on the mobile home page" (NEW in Summer '26)
4. **Run the metadata cache**

**Important notes:**
- The web app's home page continues to display the default Activity Plan By Product component (enhanced version is mobile only)
- The thresholds for At Risk / On Pace / Exceeding Pace are NOT configurable in this release

## How Thresholds Work

The widget assigns one of three statuses based on completed activities compared to expected count at an even pace across the cycle:

- **Exceeding Pace:** 110% or more of expected activities completed
- **On Pace (At Pace):** Between 90% and 109% of expected
- **At Risk:** Less than 90% of expected

**Example:** If a cycle is 100 working days long and the target is 120 activities, a field user on day 50 would be expected to have completed 60 activities. If they've done 57, that's 95% of expected, so they'd be "At Pace." The band accounts for normal day-to-day variation (scheduling gaps, holidays, call cancellations).

## Widget Layout

### Left Panel: Activity Types & Products
Three tabs organize the data by urgency:
- **At Risk** (default view) — activity/product combinations most critical
- **On Pace** — on track
- **Exceeding Pace** — ahead of plan

Each row shows:
- Activity type and product combination
- Activities completed and planned
- Activities remaining
- Number of accounts behind in

### Right Panel: Progress Over Time
- Days into cycle plan and last updated timestamp
- Progress chart showing:
  - **Green line** — ideal/expected pace (straight across)
  - **Blue line** — actual pace (where you are)
  - **Red dotted line** — where you should be today

## Key Benefits

- Quickly see what's most critical (at risk tab default)
- Understand overall activity plan progress over time
- Identify next steps based on pace comparison
- Links to the full Activity Plans "View Details" for deeper analysis

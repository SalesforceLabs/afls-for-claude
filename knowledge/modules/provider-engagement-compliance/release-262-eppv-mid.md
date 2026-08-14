# Provider Engagement Compliance - EPPV/MID (Summer '26)

Presenter: Crystal Deshpande, Product Manager, Agentforce Life Sciences

## Overview

Provider Engagement Compliance automates Japan's strict regulatory mandates:
- **EPPV (Early Post-marketing Phase Vigilance):** Requires companies to monitor a new drug's safety via structured periodic visits to healthcare organizations during its first 6 months on the market
- **MID (Medical Information Delivery):** Ensures timely distribution of critical safety communications to healthcare professionals, especially when urgent risks are identified

## Admin Setup

### Guided Setup Console

Located in Setup > Life Sciences for Customer Engagement Setup > Configure Provider Engagement Compliance.

Steps:
1. **Activate feature** — Toggle on the core feature
2. **Provision permissions** — Assign necessary permission set licenses to users
3. **Update page layouts** — For Care Programs, Care Program Products, and Action Plan Templates to expose compliance tracking fields
4. **Customize status mappings** — In Admin Console, map custom statuses to action plan states (Not Started, In Progress, etc.) and Care Program states
5. **Configure assessment task** — Select record type and field set for EPPV/MID compliance activity capture during visits
6. **Add compliance tab** — In AFLS App Builder for user visibility
7. **Configure quick action** — On visit page for capturing EPPV/MID assessment tasks

### Background Flows (4)

- 2 handle **data visibility** — automatically distributing care programs and action plans to matching territories
- 2 handle **task execution** — automatically updating, closing, and recalculating compliance cycles and assessment tasks as reps complete visits

### Data Setup

1. **Create Care Program** — Container for EPPV/MID program details (start/end dates, announced date, modification/extension dates, pre-cycle start date)
2. **Link Care Program Products** — Define which medical products fall under this EPPV umbrella
3. **Build Action Plan Template** — Standardize EPPV workflow:
   - Pre-cycle required checkbox (auto-creates precycle at start)
   - Last cycle behavior (align to cycle end date or program end date)
   - Restart behavior: Restart / Resume / Start Over
   - Define template items (cycles with specific durations in days)
4. **Action Plan Template Assignment** — Link care program to template
5. **Create Action Plans** — For each targeted HCO

## End User Experience (Mobile)

**Persona:** Yuki, a sales rep in the field

### Account Compliances Tab
- High-level overview of every active EPPV program for HCOs within territory
- Shows: current cycle number, start date, due date
- Sorted by urgency (urgent action needed → lower priority)
- Progress bar and cycle count per HCO (e.g., "1 out of 8 cycles completed")
- Status highlights (e.g., "Previous cycles overdue")

### Actions Available
- **Create Visit** — Schedule upcoming cycle visit (navigates to visit engagement page with HCO pre-populated)
- **View Visit** — Review completed visits and captured compliance tasks
- **Skip Cycle** — Provide reason and skip if visit cannot occur

### Completing Compliance
1. Navigate to visit engagement page
2. Capture visit details
3. Capture compliance activity (select care program name)
4. System identifies applicable compliance cycle based on visit dates
5. Manual sync required to mark cycle as completed
6. Dashboard updates to show completion

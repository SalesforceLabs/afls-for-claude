# Home Health for Patient Services (Summer '26)

Presenter: Vishnu Preethi Gangarapu

## Overview

In 262, a subset of Home Health features (from Health Cloud) has been enabled in AFLS for the **patient services** use case. This is specifically for the nurse ambassador program — connecting patients with nurses for home visits related to drug administration.

**Important limitations:** The entire Home Health feature set is NOT available in AFLS. Features like care management, med management, quotations, and home health agents are NOT enabled in 262.

## Use Case: Nurse Ambassador Program

Example scenario: Makana Pharma launches Immunexis (drug for Rheumatoid Arthritis). Patient drop-off analytics show patients dropping off within first 90 days due to drug administration anxiety. Solution: Include Immunexis in the global nurse ambassador program.

## Three Personas

### 1. Scheduler/Dispatcher (Home Office)
- Part of central nurse ambassador team
- Schedules and assigns patients to nurses for home visits
- Manages: skills matching, pre-configured schedules, availabilities, authorized visits

### 2. Clinician/Caretaker (Field - iPad)
- Views assigned visits on iPad (Field Service app)
- Works online and offline
- Executes visits, captures work plans, creates service reports

### 3. Patient (Experience Cloud Portal)
- Views and manages appointments
- Creates new visit requests
- Sees upcoming and past visits

## Key Features Demonstrated

### Scheduling (Dispatcher)
- **Start of Care visits** and **Recurring visits**
- Manual or Auto resource assignment
- Service territory selection
- Visit date and time slot configuration
- Visit instructions (default templates + custom)
- Authorization checking (e.g., "19 authorized visits remaining")
- Shift-based scheduling (e.g., regular 9-5 shift)
- Weekly cadence configuration

### Clinician Experience (iPad - Field Service App)
- View scheduled appointments
- Drive to service location
- View patient details (patient card + preferences)
- Execute work plans (e.g., "Evaluate vitals", "Administer Immunexis")
- Mark tasks complete or not applicable
- Create and sign service reports
- Location-based visit closure
- Accept broadcasted/unassigned visits

### Patient Portal (Experience Cloud)
- View today's visits with provider contact details
- View upcoming and past visits
- Create new visit requests (service type, recurring frequency)
- Submit requests for dispatcher approval

## Data Model

- Person Account level operations (same person can be in multiple care programs)
- Service Appointments
- Work Orders
- Service Resources
- Authorizations (per medication/service)
- Service Reports (with signature)

## Not Available in 262

- Quotes/Benefits tabs
- Care Plans tab
- Med Management
- Home Health Agents

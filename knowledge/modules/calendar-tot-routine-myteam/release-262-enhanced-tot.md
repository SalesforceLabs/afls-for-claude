# Time Off Territory (TOT) - Summer '26 Enhancements

Presenter: Rebecca Wang, Product Manager, Agentforce AFLS

## Admin Setup & Configuration

### New Setting: Time Off Territory Time Slot Mode

Located in **Admin Console > Time Off Territory**, a new dropdown allows admins to configure how end users log time off. Four modes available:

#### 1. None (Legacy)
- Maintains existing TOT behavior from prior releases
- Default after Summer '26 upgrade if no changes are made

#### 2. Slot-Based Mode
- Users must select a predefined slot type when creating TOT record
- Selected slot determines the duration of time off
- No start/end time entry required from users

#### 3. Date-Range Mode
- Slot type field is NOT displayed
- Users must enter exact start and end date/time

#### 4. Both (Hybrid Mode)
- Allows users to log time off using either slot-based or manual entry
- Required inputs adjust dynamically based on selected slot type:
  - If "None" selected → must enter start and end times
  - If a predefined slot selected → time inputs not required

### Slot Intervals Configuration

When using Slot-Based or Both Mode, admins should define **slot intervals** (duration for each slot). Only slots with defined durations are available for end users. Example: if "Evening" is not defined, it won't appear for users.

### Important Notes

- Switching between modes does NOT require page layout updates
- Slot Type, Start Time, and End Time fields should remain on the layout — visibility adjusts automatically
- TOT uses standard Salesforce page layout — customizable as needed

---

## End User Experience (Mobile)

### Date-Range Mode
- Create TOT by clicking available time slot in calendar
- Enter exact start and end date/time
- Slot type field not visible

### Slot-Based Mode
- Creation modal includes required Slot Type field
- Each slot shows its time range
- Only need to select: slot, TOT type, start date, end date
- No start/end times needed
- If end date > start date → creates one record per day using selected slot
- Each record managed independently (delete one, others remain)

### Both/Hybrid Mode
- Required fields adjust based on Slot Type selection:
  - "None" → enter start/end date and time (same as Date-Range)
  - Specific slot → only enter date, no time needed

### Key Difference: Hybrid vs Legacy (None) Mode
- **Hybrid Mode:** Dynamic — system adjusts required inputs based on selection
- **Legacy Mode:** Static — picking a slot does NOT change required time input fields

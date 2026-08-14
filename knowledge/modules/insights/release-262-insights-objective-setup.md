# Medical Insights to Objectives Linking - Setup Guide (Summer '26)

## Overview

This feature allows field medical teams to connect field intelligence (Medical Insights) directly to strategic goals with traceable action plans. The traceability chain: Medical Insight → Goal Assignment → Goal Definition → Action Plan Template → Tactical Tasks.

## Section 1: DB Schema Configuration

Enable mobile sync for Goal objects so field users can see records offline.

1. Open **Admin Console** → Mobile Settings → Object Metadata Cache Configuration
2. Create schema for **Goal Assignment**:
   - Name: `DbSchema_GoalAssignment`
   - SObject: `GoalAssignment`
   - Is Active: checked
   - Type: Data
   - Profiles: Field Medical Sales Representative (+ Field Sales Rep if needed)
3. Create schema for **Goal Definition**:
   - Name: `DbSchema_GoalDefinition`
   - SObject: `GoalDefinition`
   - Is Active: checked
   - Type: Data
   - Same profiles
4. Run Metadata Cache generation for affected profiles

## Section 2: Add Goal Assignment to Medical Insight Page Layout

1. Setup → Object Manager → Medical Insight → Page Layouts
2. Edit the Medical Insight page layout used by field users
3. Drag **Goal Assignments** related list into the Related Lists section
4. Position near top (below Child Medical Insights)
5. Save

## Section 3: Create Goal Definitions

Goal Definitions represent organizational strategic objectives (e.g., "Off-Label Medical Information Response", "Safety Signal Management").

1. App Launcher → Goal Definitions → New
2. Enter Name, Description, Status (Active), Category
3. Save

These are reusable templates. When users link Medical Insights to a Goal Definition, the name/description/category automatically copy to the Goal Assignment record.

## Section 4: Create Action Plan Templates

Action Plan Templates are tactical playbooks for responding to field signals.

1. App Launcher → Action Plan Templates → New
2. Configure:
   - Name (e.g., "MSL Off-Label Response Playbook")
   - Description
   - Type: **Industries**
   - Target Object: **Goal Assignment**
   - Optional: "Let users add items to action plans"
3. Save (creates in Draft status)
4. Add template items (tasks):
   - Subject, Priority, Days to Complete, Owner (user/role/queue)
5. Change status from Draft to **Published**

## Section 5: Link Medical Insights to Goal Definitions (End User Flow)

1. Open a Medical Insight record → Related tab → Goal Assignments
2. Click New
3. Select Goal Definition (strategic objective)
4. Parent Record auto-populates with current Medical Insight
5. Fill: Status, Priority, Target Completion Date, Description
6. Save → creates Goal Assignment (junction record)

## Section 6: Assign Action Plan Templates to Goal Definitions

1. From Goal Assignment → click into linked Goal Definition
2. Related tab → Action Plan Template Assignment → New
3. Select the Action Plan Template
4. Associated Object auto-populates
5. Save

Connection created: Medical Insight → Goal Assignment → Goal Definition → Action Plan Template → Tactical Tasks

## Section 7: Share Records with Field Users

Two options:
- **Manual sharing:** Open Goal Assignment → Share button → Add user/group with Read Only access
- **Sharing Rules:** Setup → Sharing Settings → Create rule (e.g., share Goal Assignment where Owner = Medical Affairs with all Field Medical users)

## Section 8: Verify End-to-End Flow

As Field Medical user:
1. Open Medical Insight → Related → Goal Assignments (visible)
2. Click Goal Assignment → see Status, Priority, Target Date
3. Click Goal Definition → see organizational goal
4. Related → Action Plan Template Assignment → Action Plan Template → Tactical items

Full traceability chain from field observation to tactical execution, fully auditable and compliant.

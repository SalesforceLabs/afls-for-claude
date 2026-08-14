<!-- guide:admin-guide section:set-up-advanced-therapy-management pages:892-976 -->
# Set Up Advanced Therapy Management





Set Up Advanced Therapy Management

Advanced Therapy Management’s Multi-Step Scheduling feature supports slot management and
scheduling across multiple territories in a single place, to help users easily search for and book
appointments across multiple sites. Advanced Therapy Orchestration provides flexible workflows that
automatically execute all the components of an advanced therapy, from therapy stages and substages to
individual tasks.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


In the healthcare industry, advanced therapy refers to an innovative medical practice that uses genetics
and biomarker information to manufacture personalized medication for patients with rare illnesses. The
therapy involves multiple steps that are typically performed in different locations.

For example, in cell and gene therapy, the procedure involves:

- Apheresis—A biosample is collected from a patient.
- Manufacturing—The biosample is treated in a cell lab, where cells are isolated, genetically engineered,
and grown.
-    Infusion—The genetically treated biosample is introduced back into the patient's body to help
eliminate abnormal and mutated genes that cause illness.

Personalized medicine requires smooth workflows and process integration across provider and
pharmaceutical industries.

Advanced Therapy Management offers slot management and capacity configuration capabilities, so that
admins can configure availability of resources at their assigned territories, and create and publish slots
accordingly. Advanced Therapy Management’s Multi-Step Scheduling brings together data about
different sites, resources, and appointment slots in one place. Advanced Therapy Orchestration provides
an orchestration flow that references subflows to execute therapy stages and substages. The therapy
orchestration flows also generate runtime records, which capture the details of the flow execution, for
care program enrollee work orders and work order steps and the related therapy tasks.

Advanced Therapy Management’s Chain of Custody (CoC) and Chain of Identity (CoI) capabilities help
you comply with pharmaceutical regulations and uphold safety standards across the lifecycle of an
advanced therapy. CoC maintains a digital trail of the patient’s collected biosample as it passes through
the various advanced therapy stages, steps, and tasks. CoI ensures that the right patient receives the
right treatment by assigning a unique identifier to the collected biosample.

Learn About the Advanced Therapy Management Licenses

<!-- page:893 -->



Before you start with Advanced Therapy Management, ensure that your org has the appropriate add-
on licenses. The Advanced Therapy Management permissions and licenses are included in Life
Sciences Cloud and Health Cloud licenses. These licenses include 500 ATM patients and 1100
Orchestration Runs per org.
Create Profiles for Advanced Therapy Management Users
Users with different roles work on different aspects of Advanced Therapy Management. The user who
searches for slots with the help of Multi-Step Scheduling creates the booking request. An internal user
then reviews and confirms the booking. Based on your organization’s roles and personas, set up
profiles for users who book slots and users who confirm the requests.
Create Internal and External Users for Advanced Therapy Management
Create users and assign them the Advanced Therapy Management profiles that you created.
Learn About Multi-Step Scheduling
Advanced Therapy Management’s Multi-Step Scheduling feature enables users to book appointment
slots for all the steps of a procedure at one time. Service territory relationships streamline the search
by providing information about affiliated territories where consecutive work types are performed.
Learn About Therapy Orchestration
Advanced Therapy Management’s Therapy Orchestration helps you implement complex workflows for
therapies using Salesforce Flows. In Therapy Orchestration, a parent orchestration flow references a
series of subflows that execute all the components of a therapy. Each flow is highly flexible and can be
customized according to the specific needs of your Salesforce org. You can automatically assign tasks
at every step of the therapy to the relevant stakeholders involved, and easily monitor therapy progress
from patient intake to infusion.
Set Up Advanced Therapy Management for Experience Cloud
Make your treatment center experience easily accessible to users with Advanced Therapy Management
in an Experience Cloud site.
Use Advanced Therapy Management
Advanced Therapy Management helps users book appointments for a series of procedures across
multiple service territories all at once. Multi-Step Scheduling eliminates the need for setting up and
trying to coordinate individual appointments at multiple locations.


Learn About the Advanced Therapy Management Licenses

Before you start with Advanced Therapy Management, ensure that your org has the appropriate add-on
licenses. The Advanced Therapy Management permissions and licenses are included in Life Sciences
Cloud and Health Cloud licenses. These licenses include 500 ATM patients and 1100 Orchestration Runs
per org.

Customers can purchase the Advanced Therapy Management - Patients (500) add-on license to enroll an
additional 500 patients into advanced therapies, purchase the Scheduler Add-On license to get
additional service appointments, and purchase the External App for Health Cloud license for treatment
center employees who mostly use Experience Cloud.

Let’s go through the list of licenses.

<!-- page:894 -->



Advanced Therapy Management - Patients (500)

This license provides an additional capacity of 500 enrollees who you can enroll in advanced therapies.
Orgs that use AFLS or Health Cloud can purchase this add-on license to get additional
enrollment capacity.

This license also includes an additional 500 Orchestration Runs per org (as each additional patient
requires one orchestrator run).

Scheduler Add-On License

AFLS and Health Cloud both offer 12000 service appointments per org per annum and
300 service appointments per user per annum. To use additional service appointments, purchase the
Salesforce Scheduler–Additional Appointments license that provides 10000 additional service
appointments per org per month.

External App for Health Cloud Add-On License

This license is for users who mostly work in Experience Cloud. These users are treatment center
employees such as care coordinators, Apheresis clinicians, and shipping and packaging staff members.


Create Profiles for Advanced Therapy Management Users

Users with different roles work on different aspects of Advanced Therapy Management. The user who
searches for slots with the help of Multi-Step Scheduling creates the booking request. An internal user
then reviews and confirms the booking. Based on your organization’s roles and personas, set up profiles
for users who book slots and users who confirm the requests.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create profiles:                                  Manage Profiles and Permission Sets


In bio pharmaceutical companies that conduct advanced therapies, qualified treatment center (QTC)
coordinators manage slot bookings and submit requests for scheduling appointments for care program
enrollees. The gene therapy coordinators (GTC) then review and confirm the booking requests so that
appointments are booked for the various work procedure steps.

Determine who can see only appointments relevant to their role by updating the visibility of work
procedure steps based on user profile. For example, while gene therapy coordinators see all
appointments in an appointment chain, qualified treatment center coordinators don’t see the

<!-- page:895 -->



manufacturing appointments.

1. From Setup, in the Quick Find box, enter Profiles, and select Profiles.
2. Click New Profile.
3. For Existing Profile, select Standard User.
4. Add a profile name for the user who creates the booking request. For example, QTC Coordinator.
5. Save your changes.

Repeat the steps to create a second profile. For example, if you have gene therapy coordinators who
confirm requests, create a second profile named GTC Coordinator.


Create Internal and External Users for Advanced Therapy
Management

Create users and assign them the Advanced Therapy Management profiles that you created.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features

To create, edit, and delete AFLS      Health Cloud Starter perm set
data:

To create, edit, and delete Health Cloud data:
Health Cloud Foundation perm set

OR

Manage Health Cloud

To create users:                                     Manage Internal Users


1. From Setup, in the Quick Find box, enter Users, and select Users.
2. Click New User.
3. Enter the user’s name and email address and a unique username in the form of an email address. By
default, the username is the same as the email address.

<!-- page:896 -->



4. For User License, select Salesforce.
5. For Profile, select the profile you created. For example, for treatment center coordinator, select QTC
coordinator.
6. Save your changes.

Add another user for the profile that confirms the booking.


Learn About Multi-Step Scheduling

Advanced Therapy Management’s Multi-Step Scheduling feature enables users to book appointment
slots for all the steps of a procedure at one time. Service territory relationships streamline the search by
providing information about affiliated territories where consecutive work types are performed.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Admins can also configure shifts of service resources assigned to a service territory for a work type (work
procedure step). Multi-Step Scheduling collates all of this data on two new tabs: Schedule Appointments
and Reschedule Appointments. When users conduct basic and advanced searches, they view available
time slots for all work types configured as per the time required to complete each work type. Users can
then book their preferred slots for all work types, and reschedule and cancel appointments as well.

You can use Multi-Step Scheduling both in the context of AFLS and with other products.


Note When you enable Salesforce Scheduler settings, make sure to leave the Schedule
Appointments Using Engagement Channels setting disabled. Advanced Therapy Management does
not support multi-step scheduling with Engagement Channels.


Assign Permission Sets and Permission Set Licenses To Your Advanced Therapy Management Users
Help users manage slots with Advanced Therapy Management by assigning them the required
permission sets and permission set licenses.
Enable Salesforce Scheduler Settings
Define the availabilities of service resources for work at a service territory by associating shifts with
work types. To do this, you must first enable the Salesforce Scheduler for Health Cloud setting.
Add the Appointment Slots Lightning Component to a Record Page
Enable users to view and manage their scheduled and canceled appointments, and create new ones,
by adding the Appointment Slots Lightning component to a record page. You can configure the
Appointment Slots Lightning component on the record page of an Account, Case, Opportunity, or
Care Program Enrollee object.
Configure Scheduling Policies for Advanced Therapy Management

<!-- page:897 -->



Make it easy for multi-step scheduling users to find and book appropriate slots. Configure time slot
intervals to determine the intervals in which each appointment starts. Also enable Salesforce
Scheduler to use service territory member’s shifts to search for slots.
Considerations for Defining Availability of Slots
Get to know about the advantages and disadvantages of using time slots versus shifts to define the
availability of appointment slots.
Turn on Field-Level Security for Time Slots
Help users seamlessly search for slots by enabling the field-level security settings for the Maximum
Appointment field in the Time Slot object. This setting is required for our internal APIs to fetch results
for available slots.
Set Up Data For Advanced Therapy Management in Your Org
Empower users to schedule appointments easily across multiple sites. To use Multi-Step Scheduling
effectively, you must set up the required data for all objects in Advanced Therapy Management’s data
model.
What Is Partial Rescheduling in Advanced Therapy?
Unlike a complete reschedule, partial reschedule cancels slots downstream from the work types you
start with, and creates appointments in the existing service appointment group.
Visibility for Buttons in Appointment Slot Component
In Advanced Therapy Management, the status of the related service appointment group and the
individual service appointments in the group determines the visibility of the Book New Slots,
Reschedule Slots, and Cancel Slots buttons. You can provide conditional visibility of the Reschedule
and Cancel buttons by cloning the Determine Cancel and Reschedule Button Visibility flow.
Add a Quick Action Button to Confirm Booking Slots in Advanced Therapy Management
To confirm booking requests, configure a quick action button on the highlights panel of a record page.
You can configure the quick action button on the record pages of the Account, Case, Opportunity, and
Care Program Enrollee objects.
How Are Slot Results Optimized in Advanced Therapy Management?
To offer the most optimized search results for available appointment slots, Advanced Therapy
Management’s Multi-Step Scheduling filters slot results through a combination of internal and external
checks.
Keep Track of the Total Number of Patients Enrolled in Advanced Therapies
You can easily track the total number of enrollees in advanced therapies. This helps plan for enrollee
count upgrades to accommodate increasing enrollees in advanced therapies. Usage-based entitlement
details provide more information about the enrollee count that you can use for billing purposes.



## Assign Permission Sets and Permission Set Licenses To Your Advanced

Therapy Management Users

Help users manage slots with Advanced Therapy Management by assigning them the required
permission sets and permission set licenses.

<!-- page:898 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


## To create, edit, and delete AFLS

data:                                                   Health Cloud Starter permission set

To create, edit, and delete Health Cloud data:
Health Cloud Foundation permission set

OR

Manage Health Cloud


1. From Setup, in the Quick Find box, enter Users, and select Users
2. Select the appropriate user.
3. In the Permission Set License Assignment related list, and click Edit Assignment.
4. Select these permission set licenses:
- Health Cloud Starter (for AFLS) or Health Cloud Platform (for Health Cloud)
- Multi-Step Scheduling
- Action Plans
- Industries Visit
- Health Cloud Advanced Therapy Orchestration
5. Click Save.
6. In the Permission Set Assignments related list, click Edit Assignment.
7. Move the following permission sets to the Enabled Permission Sets list.
- Health Cloud Starter (for AFLS) or Health Cloud Foundation (for Health Cloud)
- Multi-Step Scheduling
- Action Plans
- Industries Visit
- Health Cloud Advanced Therapy Orchestration
8. Save your work.


Enable Salesforce Scheduler Settings

Define the availabilities of service resources for work at a service territory by associating shifts with work

<!-- page:899 -->



types. To do this, you must first enable the Salesforce Scheduler for Health Cloud setting.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


Note Make sure to leave the Schedule Appointments Using Engagement Channels setting disabled.
Advanced Therapy Management does not support multi-step scheduling with Engagement
Channels.


1. From Setup, in the Quick Find box, enter Salesforce Scheduler, and then select Salesforce
Scheduler Settings.
2. Enable Salesforce Scheduler for Health Cloud and AFLS.


Add the Appointment Slots Lightning Component to a Record Page

Enable users to view and manage their scheduled and canceled appointments, and create new ones, by
adding the Appointment Slots Lightning component to a record page. You can configure the
Appointment Slots Lightning component on the record page of an Account, Case, Opportunity, or Care
Program Enrollee object.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

<!-- page:900 -->




USER PERMISSIONS NEEDED


Manage Multi-Step Scheduling features


1. Go to the record page where you want to add the Lightning component.
2. Select     and then select Edit Page.
3. In Lightning App Builder, drag the Appointment Slots component onto an editable part of the page.


4. In the Properties pane, select Book New Slots, Reschedule Slots, and Cancel Slots.
5. Save and activate your changes.
6. Assign as the org default.


Configure Scheduling Policies for Advanced Therapy Management

Make it easy for multi-step scheduling users to find and book appropriate slots. Configure time slot
intervals to determine the intervals in which each appointment starts. Also enable Salesforce Scheduler
to use service territory member’s shifts to search for slots.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To edit the default scheduling policies:             Asset Scheduler add-on license


1. From Setup, in the Quick Find box, enter Scheduling, and then select Scheduling Policies.
2. Click Edit next to Default Appointment Scheduling Policy.
3. In Appointment Start Time Interval, select the appropriate time interval for appointment slots, in
minutes. For example, select 60 to set one-hour time intervals between appointment start times.
4. Choose how you want to configure the availability of slots.
a. To configure availability with only shift records, enable Use service territory member’s shift. Disable
Use service territory’s operating hours with shifts and Enforce Account's Visiting Hours.
b. To configure availability with shift records and the time slots for the operating hours at a service
territory, enable Use service territory member’s shift and Use service territory’s operating hours
with shifts. Disable Enforce Account's Visiting Hours.
c. To configure availability with only time slots, disable Use service territory member’s shift and Use
service territory’s operating hours with shifts. Make sure you assign time slots to work types.
5. Save your changes.


## See Also

Salesforce Help: Scheduling Policy Rules in Salesforce Scheduler

<!-- page:901 -->



Salesforce Help: Determine Appointment Time Slots with Shifts


Considerations for Defining Availability of Slots

Get to know about the advantages and disadvantages of using time slots versus shifts to define the
availability of appointment slots.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


There are two ways in which you can define availability for work types at a service territory: time slots and
shifts. Let’s look at the advantages and disadvantages of each of these methods of defining availability.


Time Slots

Time slots are created for service territories as a whole. All work types assigned to a service territory are
performed in the same time slots.

Advantage: Time slots are active for a long period. For example, if a work type involves a vaccination drive
with follow-up doses every 6 months, you can create time slots that last the entire period.

Disadvantage: Time slots are the same for all work types performed at a service territory. For example, if
you have both apheresis and manufacturing being performed at the same hospital, their time slots are
always at the same time.


Shifts

Shifts are created for work types.

Advantage: You can define separate shifts for different work types. For example, even if apheresis and
manufacturing are performed at the same hospital, they can have different slots based on their shifts.

Disadvantage: Shifts can’t be used for extended periods of time. Recurring shifts can help you define
availability for up to 3 months, but not beyond that time period.


Turn on Field-Level Security for Time Slots

Help users seamlessly search for slots by enabling the field-level security settings for the Maximum
Appointment field in the Time Slot object. This setting is required for our internal APIs to fetch results for
available slots.

<!-- page:902 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To set field-level security:
Manage Profiles and Permission Sets

AND

Customize Application


Note You must enable the field-level security settings irrespective of whether you want to use the
Shift object or Time Slot object to define availability of slots.


Explore the complete list of field-level security settings for Salesforce Scheduler objects here.

1.    From the object management settings for Time Slot, click Fields & Relationships.
2.    Click Maximum Appointments and then select Set Field-Level Security.
3.    Go to the profile you set up for Multi-Step Scheduling user and mark Visible.
4.    Save your changes.


## See Also

Salesforce Help: Field-Level Security (FLS) Permissions Checklist


Set Up Data For Advanced Therapy Management in Your Org

Empower users to schedule appointments easily across multiple sites. To use Multi-Step Scheduling
effectively, you must set up the required data for all objects in Advanced Therapy Management’s data
model.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Let’s first get a sense of the Advanced Therapy Management objects and what they store. Check out the
Advanced Therapy Management data model diagram.

A work procedure stores information about a process, such as a program or a therapy, and is performed
at a service territory, defined as the parent service territory. Each work procedure comprises steps,

<!-- page:903 -->



represented by a work type record. When a work type is associated with a work procedure, it’s referred to
as a work procedure step. Each work type is made up of work type steps that represent the substages in a
therapy stage.

Work types are performed by services resources at a service territory, defined as child service territory.
Service resources are modeled as assets and assigned to a territory as a service territory member. You can
define the shift for a service territory member. You can also define a shift for a service territory member
assigned to a particular work type through the shift work topic record. When you set up the availability of
the service resources, you can book available slots for a work type. Service territory relationships help
users book appointments for affiliated sites.

Let’s walk through an example of a bio-pharmaceutical company offering advanced therapy. Charles
Green, a patient diagnosed with a rare blood disease, is enrolled in a Gene Therapy Care Program that
offers an advanced therapy treatment called Cell and Gene Therapy (CGT). Cell and Gene Therapy is
performed at Goodly Healthification Cell and Gene Therapy Center (parent service territory).

The Cell and Gene Therapy work procedure has three steps: apheresis, manufacturing, and infusion,
each of which is performed at a different service territory and has more substeps, such as Identity
Verification work type step under Apheresis.

Apheresis CGT is performed at Goodly Healthification Apheresis Center by Apheresis Medical Staff,
modeled as an asset. Shifts are defined for the Apheresis Medical Staff, assigned as a service territory
member. After shift records are created, slots are available for booking. Site-to-site relationships (service
territory relationship) help the qualified treatment center (QTC) coordinator book appointments for
manufacturing and infusion as well, as they can easily view the slots available for the next steps.

Let’s look at what each object stores.


## Advanced Therapy Management Objects

Object                              Description                          Example

Work Procedure                      Represents information about a       Cell and Gene Therapy
procedure or process that's part
of a program, such as a care
program.

Work Type                           Represents a type of work to be      Apheresis CGT
performed.

Work Procedure Step                 Represents information about         Apheresis CGT, Cell and Gene
the work type that's a part of a     Therapy
work procedure.

Work Type Step                      Represents each step within a        Identity Verification step that’s
work type.                           part of Apheresis CGT

Work Type Extension                 Represents additional                The icon URL for the work type.
information about a work type.

<!-- page:904 -->




Object                           Description                             Example

Service Territory                Represents a geographic or         Goodly Healthification Apheresis
functional region in which work    Center
is performed. This can refer to an
organization where a work
procedure or a work procedure
step is performed.

Service Resource                 Represents an asset engaged for         Apheresis Medical Staff
work. This can be a meeting
room, equipment, or the
medical staff assigned to the
hospital.

Service Territory Relationship   Represents site-to-site                 If Apheresis CGT is held at
relationships between service           Goodly Healthification Apheresis
territories based on work types         Center, the next work type
performed.                              (Manufacturing CGT) should
always be held at Goodly
Healthification Manufacturing
Center.

Service Territory Work Type      Represents the relationship             Apheresis CGT at Goodly
between a service territory and a       Healthification Apheresis Center
work type for Salesforce
Scheduler appointments. This
object stores information about
whether slots have been
published.

Service Territory Member         Represents a service resource           Goodly Healthification Apheresis
who can be assigned in a service        Medical Staff (service resource)
territory.                              assigned to Goodly
Healthification Apheresis Center
(service territory) as an asset

Shifts                           Represents a service resource’s         Availability of a service resource
shift.                                  who is assigned to a particular
service territory.

Shift Work Topic                 Represents a service resource’s         Availability of a resource
shift availability for a particular     assigned to a service territory for
work type.                              a particular work type.


1. Set Up a Work Procedure for Advanced Therapy Management
A work procedure stores information about an overall process, and can include several tasks, whose
details are stored in work procedure steps. In Advanced Therapy Management, a work procedure can

<!-- page:905 -->



represent a particular kind of treatment or therapy, involving steps or tasks such as apheresis or
infusion.
2. Set Up a Work Type for Advanced Therapy Management
A work type represents a template for a pending task and collects information about operating hours,
estimated duration, and unit of duration. In Advanced Therapy Management, a work type represents
treatment steps such as apheresis or infusion. Relate a work type to a work procedure by creating a
work procedure step record.
3. Set Up Operating Hours for Work Types and Service Territories
Configure operating hours to represent the hours during which a work type or a service territory is
available.
4. Set Up a Work Procedure Step for Advanced Therapy Management
A work procedure step brings together information about a work type and a work procedure. A work
procedure step is similar to a work type, but stores information about a step or task only in the context
of a work procedure. Work procedure steps also store information about the sequence of steps in a
work procedure and the time required before the work procedure step can begin.
5. Set Up a Work Type Extension
Add additional information about work types using the work type extension field. For example, use the
Icon URL field to upload an icon for a work type.
6. Set Up a Service Territory for Advanced Therapy Management
A service territory is a location or region where a work is performed by a service resource. In Advanced
Therapy Management, service territories are the locations where a work procedure, such as Cell and
Gene Therapy, takes place.
7. Set Up a Service Resource for Advanced Therapy Management
A service resource is an agent or crew that performs a work type at a service territory. A service
resource can also refer to a particular meeting room, facility, or even an asset assigned to a service
territory. In Advanced Therapy Management, service resources are medical staff modeled as an asset
at a service territory where a work type, such as apheresis, is performed.
8. Set Up a Service Territory Relationship in Advanced Therapy Management
Help Multi-Step Scheduling users narrow down their searches by establishing site-to-site relationships
for service territories where consecutive work procedure steps are performed.
9. Add a Service Territory Member To a Service Territory Record
Configure records for service territory members assigned to a service territory. In Advanced Therapy
Management, work procedure steps like apheresis are performed by medical staff at a particular
hospital. To represent the medical staff, configure service territory members who are service resources
assigned to a work type at a service territory.
10. Set Up Shifts For Services Resources in Advanced Therapy Management
To make appointment slots available for booking through Multi-Step Scheduling, configure shifts for
service resources assigned to a service territory. For example, in Advanced Therapy Management,
medical staff assigned to a hospital operate in shifts that determine the availability of appointment
slots.
11. Set Up a Shift Work Topic For Shifts in Advanced Therapy Management
Configure the availability of a service resource assigned to a service territory for a particular work type.
12. Set Up a Service Territory Work Type For Advanced Therapy Management
To indicate that slots are published (available for booking) for particular work procedure steps,
configure a relationship between service territories and work types performed at the service territories.

<!-- page:906 -->




## See Also

Salesforce Help: How Work Types, Work Type Groups, and Service Territories Work Together


Set Up a Work Procedure for Advanced Therapy Management

A work procedure stores information about an overall process, and can include several tasks, whose
details are stored in work procedure steps. In Advanced Therapy Management, a work procedure can
represent a particular kind of treatment or therapy, involving steps or tasks such as apheresis or infusion.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


Make sure you create a care program for the therapy program.

1. From the App Launcher, find and select Work Procedure.
2. Click New.
3. Add the name of the work procedure in the Work Procedure Name field. For example, Cell and Gene
Therapy.
4. Add a description.
5. For Reference Record, select the object associated with the work procedure. For example, the care
program associated with cell and gene therapy.
6. For Lead Time Unit Type, select the default unit of measure used to calculate the lead time for each
work procedure step, Hours, Days, or Minutes.
The default lead time unit type is days.
You can override this value by specifying the Lead Time Unit Type in a work procedure step.
7. For Associated Flow Orchestrator Name, enter healthcloud_ato_flows__ATMOrchCnd.
If you’re configuring a customized orchestration flow, add the customized flow’s API name here.
8. To activate the work procedure, select Active.
9. Save your changes.


## See Also

Salesforce Help: Create a Care Program and Add Related Records

<!-- page:907 -->



Set Up a Work Type for Advanced Therapy Management

A work type represents a template for a pending task and collects information about operating hours,
estimated duration, and unit of duration. In Advanced Therapy Management, a work type represents
treatment steps such as apheresis or infusion. Relate a work type to a work procedure by creating a work
procedure step record.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create work type records:                         Create, Read, Edit, Delete on Work Type


For more granular lead times, you can model transportation logistics as a work type with its own lead
time and add it as a work procedure step in a procedure. When coordinators book appointment slots for
a work procedure, they can book transportation logistic slots with varying site pickup times.


Note You can schedule a maximum of 10 work types in a work procedure.


1. From the App Launcher, find and select Work Type.
2. Click New.
3. Add the name of the work type. For example, Apheresis CGT.
4. Add a description.
5. Select the operating hours during which a work type is operational.
6. Add the duration of the work type, and the unit in which the duration is measured. For example, if
apheresis takes place over four hours, the Estimated Duration is 4, and the Duration Type is Hours.


7. Save your changes.


Set Up Operating Hours for Work Types and Service Territories

Configure operating hours to represent the hours during which a work type or a service territory is
available.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:908 -->




USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


1.    From the App Launcher, find and select Operating Hours.
2.    Click New.
3.    Add a name and description for the operating hours specific to your work type or service territory.
4.    Select the time zone for the work type or service territory.
5.    Set up time slots for work types.

Note Set up Service Appointment Windows only if you want to use operating hours’ time slots to
define the availability of slots. Time slots can be used with or without shift records.
- To use operating hours (time slots) along with shifts, enable Use service territory member’s
shift and Use service territory’s operating hours with shifts in Scheduling Policies.
- To only use operating hours (time slots), disable Use service territory member’s shift and Use
service territory’s operating hours with shifts in Scheduling Policies. Make sure you assign
time slots to work types.

a. Under Set Service Appointment Windows, click Add Row


b. Select a day and add start and end times for the time slot.
c. Add work types that are operational in the service appointment windows.
6. Save your changes.


## See Also

Salesforce Help: Set Up Operating Hours in Salesforce Scheduler
Salesforce Help: Configure Scheduling Policies for Advanced Therapy Management


Set Up a Work Procedure Step for Advanced Therapy Management

A work procedure step brings together information about a work type and a work procedure. A work
procedure step is similar to a work type, but stores information about a step or task only in the context of
a work procedure. Work procedure steps also store information about the sequence of steps in a work
procedure and the time required before the work procedure step can begin.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:909 -->




USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


In Advanced Therapy Management, a work procedure step refers to a work type associated with a work
procedure, such as apheresis or infusion that’s part of a cell and gene therapy.

1. From the App Launcher, find and select Work Procedure Steps.
2. Click New.
3. Select the work type associated with the work procedure step. For example, Apheresis CGT for Cell and
Gene Therapy.
4. Enter a sequence number for the work procedure step. For example, apheresis is 1, manufacturing is
2, and infusion is 3.
If you don’t see Sequence Number on the Work Procedure Steps record, go to the object
management settings for Work Procedure Step. Select Page Layouts, and then select Work Procedure
Step Layout. Drag and drop the Sequence Number field on an editable part of the page.
5. Select the work procedure associated with the work procedure step.
6. For Lead Time, enter the time required before the work procedure step can begin.
7. For Lead Time Unit Type, select the unit of measure used to calculate the lead time.
If you leave this field blank, the Lead Time Unit Type specified in the work procedure is used.
8. Save your changes.

Repeat the process for each step (work type) in a work procedure.


Set Up a Work Type Extension

Add additional information about work types using the work type extension field. For example, use the
Icon URL field to upload an icon for a work type.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

<!-- page:910 -->




USER PERMISSIONS NEEDED


Manage Multi-Step Scheduling features


1. From the App Launcher, find and select Work Type Extension.
2. Click New.
3. Select the work type for which you want to upload an icon.
4. If the work type requires scheduling, select Scheduling Required.
5. If the work type can be performed at child service territories that aren’t part of the parent service
territory, select Non Standard.
6. Enter the URL of the image representing the work type.
7. Save your changes.


Set Up a Service Territory for Advanced Therapy Management

A service territory is a location or region where a work is performed by a service resource. In Advanced
Therapy Management, service territories are the locations where a work procedure, such as Cell and
Gene Therapy, takes place.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create Service Territory records:                Create, Read, Edit, Delete on Service Territory
records


Set up operating hours to represent the hours in which the service territory is active.

First create a parent service territory for the work procedure organization where the work procedure is
performed. Then, create service territories for the locations where work procedure steps such as
apheresis, manufacturing, and infusion are performed.

1. From the App Launcher, find and select Service Territories.
2. Click New.
3. Enter a name for the service territory. For example, Goodly Healthification Cell and Gene Therapy
Center.
4. Select the hours during which the service territory is operational.
5. Select Active.


6. Click Save & New.
7. Enter a name for the service territory. For example, Goodly Healthification Apheresis Center.

<!-- page:911 -->



8. Select the parent service territory to indicate where the work procedure is performed. Select a parent
service territory only if you’re creating service territories for work types.
9. Select the hours during which the service territory is operational.
10. Select Active.
11. Save your changes.


## See Also

Salesforce Help: Set Up Service Territories in Salesforce Scheduler


Set Up a Service Resource for Advanced Therapy Management

A service resource is an agent or crew that performs a work type at a service territory. A service resource
can also refer to a particular meeting room, facility, or even an asset assigned to a service territory. In
Advanced Therapy Management, service resources are medical staff modeled as an asset at a service
territory where a work type, such as apheresis, is performed.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create Service Resource records:                 Create, Read, Edit, Delete on Service Resource
records


First create a record for the asset, and then create a service resource with the associated asset.

1. From the App Launcher, find and select Assets.
2. Click New.
3. Add a name for the asset. For example, Goodly Healthification Apheresis Asset.
4.    Associate the asset with an account. For example, select the account of the service territory.
5.    Save your changes.
6.    From the App Launcher, find and select Service Resource.
7.    Click New.
8.    Add a name for the service resource. For example, Goodly Healthification Apheresis Medical
Staff.
9. Select the asset you created in the previous steps.
10. In Resource Type, select Asset.
11. Select Active.


12. Save your changes.

Repeat the steps to create assets and service resources for each work procedure step that is performed at

<!-- page:912 -->



a service territory.


## See Also

Salesforce Help: Set Up Service Resources in Salesforce Scheduler


Set Up a Service Territory Relationship in Advanced Therapy Management

Help Multi-Step Scheduling users narrow down their searches by establishing site-to-site relationships for
service territories where consecutive work procedure steps are performed.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


For example, if apheresis is held at Goodly Healthification Apheresis Center, the next work procedure
step—manufacturing—is at Goodly Healthification Manufacturing Center.

1. From the App Launcher, find and select Service Territory Relationships.
2. Click New.
3. Select a service territory. For example, select the service territory associated with work type apheresis,
Goodly Healthification Apheresis Center.
4. Select the work type associated with the selected service territory. In our example, Apheresis CGT.
5. Select the service territory to establish a site-to-site relationship for the next work type with. In our
example, select the service territory where the manufacturing work type is performed, Goodly
Healthification Manufacturing Center.


6. Save your changes.


Add a Service Territory Member To a Service Territory Record

Configure records for service territory members assigned to a service territory. In Advanced Therapy
Management, work procedure steps like apheresis are performed by medical staff at a particular
hospital. To represent the medical staff, configure service territory members who are service resources
assigned to a work type at a service territory.

<!-- page:913 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create Service Territory Member records:         Create, Read, Edit, Delete on Service Territory
Member records


1. From the App Launcher, find and select Service Territories.
2. Select the Service Territory record for which you want to add a service territory member.
3. In the Related tab, under Service Territory Member, click New.
4. Select the service resource modeled as an asset in a service territory. For example, Goodly
Healthification Apheresis Medical Staff.
5. The service territory is preselected. For example, Goodly Healthification Infusion Center.
6. For Territory Type, select Primary.
7. Under Duration, select a start date and an end date, to indicate the date range during which the
resource is a member of the service territory.


8. Save your changes.


Set Up Shifts For Services Resources in Advanced Therapy Management

To make appointment slots available for booking through Multi-Step Scheduling, configure shifts for
service resources assigned to a service territory. For example, in Advanced Therapy Management,
medical staff assigned to a hospital operate in shifts that determine the availability of appointment slots.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


To associate a shift with a work type, enable the Salesforce Scheduler for Health Cloud setting.

<!-- page:914 -->



1. From the App Launcher, find and select Shifts.
2. Click New.
3. Enter start and end times for the shift.

Note If you’re creating recurring shifts, the start time and the end time must be 24 hours or less.

4. For Status, select Confirmed.
5. Select the service resource for whom you’re configuring the shift.

Note The service territory member associated with this service resource must have membership
dates that overlap with the dates for the shift.

6. Select the work type for this shift.
7. For Time Slot Type, select Normal.
8. For Type, select Recurring.
If you don’t see Type on the Shift record, go to the object management settings for Shift. Click Page
Layouts and select Shift Layout. Drag and drop the Type field on an editable part of the page.
9. Select whether you want the recurring shifts to be daily, monthly, or weekly.
a. For daily occurrence, select the number of days it repeats. Select the date until which the shifts are
expected to continue or the number of times it’s expected to continue.
b. For weekly occurrence, select the frequency with which it repeats and the days on which it repeats.
Select the date until which the shifts are expected to continue or the number of times it’s expected
to continue.
c. For monthly occurrence, select the frequency with which it repeats. Choose if the shift occurs on a
particular day every week, or on a specific date. Finally, select the date until which the shifts are
expected to continue or the number of times it’s expected to continue.
10. Save your changes.


## See Also

Salesforce Help: Manage Shifts in Salesforce Scheduler
Salesforce Help: Enable the Salesforce Scheduler for Health Cloud Setting


Set Up a Shift Work Topic For Shifts in Advanced Therapy Management

Configure the availability of a service resource assigned to a service territory for a particular work type.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

<!-- page:915 -->




USER PERMISSIONS NEEDED


OR

Manage Multi-Step Scheduling features


1. From the App Launcher, find and select Shifts.
2. Select the shift record associated with the service territory you set up.
3. From the Related tab, go to Shift Work Topic, and click New.
If you don’t see Shift Work Topic in the Related tab, go to the Object Manager in Setup and select
Shifts. Click Page Layouts and select Shift Layout. Drag the Shift Work Topic field onto the page under
Related Lists, and save your changes.
4. The shift created for a service resource assigned to a service territory is preselected.
5. Select All Topics Supported.
6. Save your changes.


Set Up a Service Territory Work Type For Advanced Therapy Management

To indicate that slots are published (available for booking) for particular work procedure steps, configure
a relationship between service territories and work types performed at the service territories.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


Slots are published when you create records in the Shift object for the selected service territory and work
type. For instance, if shifts have been created for the medical staff for apheresis work type at an apheresis
center, you can create a service territory work type and indicate that slots have been published.

1.    From the App Launcher, find and select Service Territories.
2.    Select the appropriate Service Territory record.
3.    In the Related tab, Under Service Territory Work Type, click New.
4.    Add a work type. For example, add Apheresis CGT.
5.    The associated service territory where you want to publish slots is preselected. In our example, Goodly

<!-- page:916 -->



Healthification Apheresis Center.
6. If there are Shift records for the service resource assigned to the service territory, select Slot Published.


7. Save your changes


What Is Partial Rescheduling in Advanced Therapy?

Unlike a complete reschedule, partial reschedule cancels slots downstream from the work types you start
with, and creates appointments in the existing service appointment group.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Partial reschedule starts with the work type to reschedule; appointments for subsequent work types are
rescheduled accordingly based on the defined lead time.


Note The lead time restriction doesn’t apply for the work type that precedes the work type being
rescheduled.


Let’s look at an example. Initially, you have apheresis booked on December 1, manufacturing on
December 4, and infusion on December 7. Each work type has a lead time of two days because it takes
two days to move the biosample from one service territory to another. Unfortunately, there’s a delay
while transporting the biosample from the apheresis center to the manufacturing site, so you must
reschedule the appointment for the manufacturing work type. Because of the required lead time, you’re
required to reschedule the infusion work type as well.

In partial rescheduling, you select December 8 as the new slot date for manufacturing, and infusion is
automatically rescheduled to December 10.

Partial rescheduling also accommodates scenarios in which the treatment center coordinator wants to
move up an appointment due to criticality of the patient’s medical condition. Partial rescheduling lets
you disregard the lead time restriction for the preceding work type.

Let’s go back to the example, where apheresis was booked on December 1, manufacturing on December
4, and infusion on December 7. The condition of the patient is now critical, so the engineered biosample
is transported overnight from the manufacturing lab to the infusion service territory. Using partial
rescheduling, the treatment center coordinator can disregard the lead time of the preceding work type
(manufacturing) and reschedule the appointment for the infusion work type from December 7 to
December 5.


## Partial Reschedule Versus Full Reschedule

While with complete reschedule, you can create a series of appointments, with Partial Reschedule you

<!-- page:917 -->



can select a work type in the middle of an appointment series and rebook slots downstream for each
work type that follows.


Partial Reschedule Versus Full Reschedule

While with complete reschedule, you can create a series of appointments, with Partial Reschedule you
can select a work type in the middle of an appointment series and rebook slots downstream for each
work type that follows.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Let’s look at the differences between full chain reschedule and partial reschedule.


Full Reschedule                                       Partial Reschedule

You can reschedule slots only from the first work     You can reschedule slots starting from any work
type.                                                 type except the first.

Creates two service appointment groups.               Uses the same service appointment group.


## The status of the existing service appointment

The status of the service appointment group
group is “Rescheduled”, and status of the new
remains the same, that is, “Awaiting Approval.”
service appointment group is “Awaiting Approval.”


## Reschedules one or more appointments in a

Reschedules all appointments in a series.
series.


## See Also

Partially Reschedule Appointment Slots for an Advanced Therapy


Visibility for Buttons in Appointment Slot Component

In Advanced Therapy Management, the status of the related service appointment group and the
individual service appointments in the group determines the visibility of the Book New Slots, Reschedule
Slots, and Cancel Slots buttons. You can provide conditional visibility of the Reschedule and Cancel
buttons by cloning the Determine Cancel and Reschedule Button Visibility flow.


**REQUIRED EDITIONS**



Available in: Lightning Experience

<!-- page:918 -->





Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


At any point in time, there’s only one service appointment group that is active, which means the
appointment is in progress.


Book New Slots

The Book New Slots button is visible on the Care Program Enrollee record pages when no service
appointment groups are booked, and when there’s an inactive service appointment group with a
Canceled or Rescheduled status. The button is also visible on the record pages of the Case, Account, and
Opportunity objects.


Note The Book New Slots button is visible only when the care program enrollee’s status is Active.
When the care program enrollee’s status is Inactive, the button is disabled.


Reschedule Slots and Cancel Slots

The Reschedule Slot and Cancel Slot buttons are visible on the service appointment group only if the
service appointment group status is Awaiting Approval, None, or Scheduled.

Here are some scenarios that affect the visibility of the Book New Slots, Reschedule Slots, and Cancel
Slots buttons, in the form of a table.


Scenario              Service             Visibility of Book   Visibility of        Visibility of Cancel
Appointment         New Slots button     Reschedule Slots     Slots button
Group (Active or                         button
InActive

The Appointment       Inactive or Not     Visible              Hidden               Hidden
Slot tab is empty     applicable
because there are
no service
appointment
groups.

The QTC               Active              Hidden               Visible              Visible
coordinator books
slots and creates a
service
appointment
group. Each
service
appointment’s
status is set to

<!-- page:919 -->




Scenario                Service            Visibility of Book   Visibility of      Visibility of Cancel
Appointment        New Slots button     Reschedule Slots   Slots button
Group (Active or                        button
InActive

None, and the
service
appointment
group status is
Awaiting
Approval.

The GTC                 Active             Hidden               Visible            Visible
coordinator
approves the
booking and the
status of the
service
appointment
group is
Scheduled.

The QTC                 Active             Hidden               Visible            Visible
coordinator opts
for partial
rescheduling. The
statuses of the
deleted slots are
Canceled and
newly rescheduled
slots are None.
The service
appointment
group status is still
Awaiting
Approval.

The QTC                 Active             Hidden               Visible            Visible
coordinator opts
for full chain
rescheduling and
creates a service
appointment
group, with the
statuses of all
service

<!-- page:920 -->




Scenario              Service            Visibility of Book   Visibility of      Visibility of Cancel
Appointment        New Slots button     Reschedule Slots   Slots button
Group (Active or                        button
InActive

appointments as
None, and service
appointment
group status set to
Awaiting
Approval. The
original service
appointment
group status is
Rescheduled
(inactive), but the
new group is
active.

The QTC               Inactive           Visible              Hidden             Hidden
coordinator
cancels the service
appointment
group. The
statuses of both
the service
appointment
group and all
service
appointments are
Canceled.



## Customize the Visibility of the Reschedule and Cancel Buttons

The Determine Cancel and Reschedule Button Visibility autolaunched Salesforce Flow controls the
display of the Reschedule and Cancel buttons on the Appointment Slots Lightning component. Clone
the flow to add your custom logic to hide or show the buttons.


Customize the Visibility of the Reschedule and Cancel Buttons

The Determine Cancel and Reschedule Button Visibility autolaunched Salesforce Flow controls the
display of the Reschedule and Cancel buttons on the Appointment Slots Lightning component. Clone
the flow to add your custom logic to hide or show the buttons.

<!-- page:921 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To edit the flows:                                  Manage Flows


The Determine Cancel and Reschedule Button Visibility flow uses a couple of decision elements to
control the visibility of the Reschedule and Cancel buttons. The flow checks whether a service
appointment group exists for the care program enrollee’s record Id passed into the flow. If a service
appointment group exists, the flow then checks whether the first appointment slot can be updated.

To customize the visibility of the Reschedule and Cancel buttons, clone the flow and add your custom
logic.

1. From Setup, in the Quick Find box, enter Flows, and then select Flows.
2.    Select Determine Cancel and Reschedule Button Visibility.
3.    In Flow Builder, click Save As.
4.    In the Save as new flow window, enter a flow label. The flow API name is auto-populated.
5.    Add, remove, and modify the elements to add your custom logic.
6.    Save and activate the cloned flow.


## See Also

Salesforce Help: Flow Builder


Add a Quick Action Button to Confirm Booking Slots in Advanced Therapy
Management

To confirm booking requests, configure a quick action button on the highlights panel of a record page.
You can configure the quick action button on the record pages of the Account, Case, Opportunity, and
Care Program Enrollee objects.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:922 -->




USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


When users submit a request for booking appointment slots, the appointments are submitted for
approval. Our automated and customizable Confirm Booking Request Salesforce Flow enables internal
users like gene therapy coordinators to approve the request. To help gene therapy coordinators quickly
access the flow, add the quick action button on the record page of a Care Program Enrollee object.

1. From the object management settings for Care Program Enrollee, click Buttons, Links, and Actions.
2. Click New Action, and enter these values:
a. For Action Type, select Flow.
b. For Flow, select Confirm Booking Request.
c. For Standard Label Type, select None.
d. For Label, enter Confirm Booking Request.
e. The Name field is auto-populated based on the Label field. Leave it as is.


3. Save your work.
4. Add the new action button to the Care Program Enrollee page layout.
a. From the object management settings for Care Program Enrollees, select Page Layouts.
b. Select Care Program Enrollee Layout.
c. If the buttons in the Salesforce Mobile and Lightning Experience Actions section aren’t visible, click
override the predefined actions.
d. Drag the Confirm Booking Request action from Mobile and Lightning Actions (1) to the Salesforce
Mobile and Lightning Experience Actions section (2).


5. Save your changes.


## See Also

Salesforce Help: Confirm Slot Booking Request


How Are Slot Results Optimized in Advanced Therapy Management?

To offer the most optimized search results for available appointment slots, Advanced Therapy
Management’s Multi-Step Scheduling filters slot results through a combination of internal and external
checks.

<!-- page:923 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Multi-Step Scheduling is built on top of Lightning Scheduler APIs to efficiently retrieve search results.
Using a number of search criteria, such as date ranges, lead time, service territory relationships,
restrictions on the number of work types and locations, Multi-Step Scheduling provides the most optimal
slot results for your appointments.


External Checks

- For each work type that’s part of a work procedure, we optimize slot results using a given date range
for the work type. In the Schedule Appointments tab, under basic search, you can select a work type
and its start and end dates. Only the slots that fall in the selected date range are retrieved.
-    Slot results are also filtered by the work type’s lead time. Lead time refers to the time required to
complete a work type in days. For example, if the lead time for apheresis is 20, the next work type, that
is, manufacturing can only be scheduled after 20 days or more. Accordingly, slot results are filtered by
the availability of the manufacturing work type at an interval of 20 days or more.
-    Service territory relationships defined for each work type also help filter the slot results. A service
territory relationship sets up site-to-site mappings that determine the locations where subsequent
work types are performed. For example, if apheresis is performed at Goodly Healthification Apheresis
Center, you can set up a service territory relationship so that the next step of manufacturing takes
place at Goodly Healthification Manufacturing Center. Similarly, you can create another service
territory relationship between Goodly Healthification Manufacturing Center and Goodly
Healthification Infusion Center where infusion is performed. Service territory relationships help users
find slots based on the locations where work types are performed.
-    Slots results are filtered through search criteria restrictions set up for work types and their
corresponding locations. In the Schedule Appointments tab, under advanced search, you can search
up to 5 work types, and select 3 locations for each work type. These restrictions help reduce the
available slot results so that you can select the most optimal slot chain.
-    In the Schedule Appointments tab, you can view search results for one service territory for a work type
at a time. For example, if apheresis is performed at Goodly Healthification Apheresis Center and Live
Young Medical Center, you can select the service territory for which you want to view the slot results.


- Slot results are optimized by the work procedure organization the service territories are part of. In the
search results, you can view slots results for only those service territories that are affiliated to a work
procedure organization, that is, a parent service territory.
-    When you enable Advanced Scheduling settings, override the default work type step lead time, and
set up service territory prioritization rules, the slot formation logic searches for the shortest lead time
by comparing the lead time configured for the work procedure step and the total lead time calculated
using work type steps’ lead time override. The work procedure step must be held at the combination
of child service territories that has the highest priority number. If the total lead time calculated using

<!-- page:924 -->



the work type steps is more than the configured work procedure step lead time, the slot formation
logic discards the slot results and searches for slots in the combination of child service territories that
has the second-highest priority.


Internal Check

The slot formation logic uses an internal check to find the most optimal results for the slot chain. Slot
formation starts from the work type with the least number of available appointment slots. For example, if
apheresis and infusion both have 1000 available slots, and manufacturing has only 3, the slot formation
logic picks manufacturing as the starting point, and creates the permutations accordingly. This logic
minimizes duplication of effort, as incomplete slot chain permutations are eliminated right at the start.

All the checks help reduce the number of available slots and optimize the search to offer the most
appropriate slots.


Keep Track of the Total Number of Patients Enrolled in Advanced Therapies

You can easily track the total number of enrollees in advanced therapies. This helps plan for enrollee
count upgrades to accommodate increasing enrollees in advanced therapies. Usage-based entitlement
details provide more information about the enrollee count that you can use for billing purposes.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


1. To view the total number of enrollees in advanced therapies:
a. From Setup, in the Quick Find box, enter Multi-Step Scheduling, and select Multi-Step
Scheduling Settings.
b. Go to the Utilization Count tab.
View the current number of care program enrollees in advanced therapies.
2. To view usage-based entitlements:
a. From Setup, in the Quick Find box, enter Company Information, and select Company
Information.
b. Go to Usage-Based Entitlements.

<!-- page:925 -->



c. View Health Cloud: Maximum Care Program Enrollees in Advanced Therapy to track the Allowance
and Amount Used fields.


Learn About Therapy Orchestration

Advanced Therapy Management’s Therapy Orchestration helps you implement complex workflows for
therapies using Salesforce Flows. In Therapy Orchestration, a parent orchestration flow references a
series of subflows that execute all the components of a therapy. Each flow is highly flexible and can be
customized according to the specific needs of your Salesforce org. You can automatically assign tasks at
every step of the therapy to the relevant stakeholders involved, and easily monitor therapy progress from
patient intake to infusion.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


In Advanced Therapy Management, a therapy workflow involves multiple stages that occur in sequence
or in parallel, such as patient intake, apheresis, manufacturing, and infusion. Each stage has multiple
substages that must be completed in sequential order. For example, the apheresis stage has substages
like verification of patient identity, collection of the biosample, and delivery of the biosample. Each
substage consists of tasks that are assigned to different users and can be performed in parallel.

To orchestrate a therapy, first you must set up the relevant therapy records before the flow is executed
(setup construct). Make sure you configure a care program, a corresponding work procedure, work
procedure steps, work types, work type steps, and action plan templates with task flows or component
tasks. At the time of execution of the flows (runtime construct), care program enrollee work order, care
program enrollee work order step, and assessment task records are generated. You can set up teams,
team members, and participant roles to assign the tasks to users.

Keep in mind the terms used to refer to therapy stages, substages, and tasks throughout Advanced
Therapy Management.


Level                      Example                     Setup Construct          Runtime Construct


## Care Program, Work

Therapy                    Cell and Gene Therapy                                None
Procedure


## Work Type, Work          Care Program Enrollee

Stage                      Apheresis
Procedure Step           Work Order

Create Patient Identity     Work Type Step, Action   Care Program Enrollee
Step or Substage
Verification Step           Plan Template            Work Order Step

Task                       Document Scan               Task Definitions in      Assessment Tasks (such

<!-- page:926 -->




Level                      Example                   Setup Construct             Runtime Construct

as Flow and
Action Plan Template
Component Tasks)


Therapy Orchestration offers two sample flows that are customizable templates that you can clone to
add, modify, or remove substages, per your requirements. The sample flows generate care program
enrollee work order steps for Patient Intake and Apheresis. You can clone and customize the sample
flows to set up care program enrollee work order steps for other work procedure steps, like
Manufacturing and Infusion.

- Generate Work Order Steps for Patient Intake
- Generate Work Order Steps for Apheresis

Note Starting from Winter ‘24, you can’t view or add new data in the Associated Flow Name field on
the Work Procedure Step object. You can continue executing the Generate Work Order Steps for
Patient Intake and Generate Work Order Steps for Apheresis flows using data that was stored in the
Associated Flow Name field before Winter ‘24. However, this approach isn’t recommended. Instead,
create records for substages in a therapy stage using Work Type Step records, and associate an
action plan template with the work type step to create therapy tasks.


Apart from the sample flows, Therapy Orchestration provides a simplified framework for implementing
all the different stages, substages, and tasks of a therapy using an orchestration flow that loops through
other flows.


Flow Name                          Flow Type                           Purpose


## Loops through four

autolaunched flows and one
Process Advanced Therapy Work
Flow Orchestration                  evaluation subflow to complete
Orders
all the stages of an advanced
therapy.


## Initiates therapy stages and

generates runtime records called
Start Therapy Work Order           Autolaunched flow
Care Program Enrollee Work
Orders.


## Initiates therapy substages and

generates runtime records called
Care Program Enrollee Work
Order Steps using the Create
Start Therapy Work Order Step      Autolaunched flow
Care Program Enrollee Work
Order Step invocable action. This
invocable action also generates
tasks based on the

<!-- page:927 -->




Flow Name                           Flow Type                           Purpose


## actionPlanTemplateId input

parameter, and assigns the task
to a care team member with a
corresponding role.


## Checks whether all the tasks and

custody records associated with
Evaluate Step and Task                                                  a substage are complete. When
Evaluation flow
Completion Status                                                       all tasks are completed, the
orchestrator transitions to the
next substage in the sequence.


## Creates custody chain entry

Create Custody Chain Entries        Autolaunched flow                   records. Optionally, the flow also
creates a custody item.


## Creates custody records when

Override Custody Verification
Record triggered autolaunched       the status of a care program
Type When Work Order Is
flow                                enrollee work order changes to
Changed
In Progress.


## Creates custody records when

Override Custody Verification
Record triggered autolaunched       the status of a care program
Type When Work Order Step Is
flow                                enrollee work order step
Changed
changes to In Progress.


## Sets the Care Program Enrollee

Complete Therapy Work Order                                             Work Order Step status to
Autolaunched flow
Step                                                                    complete, and ends the
substage.


## Sets the Care Program Enrollee

Complete Therapy Work Order         Autolaunched flow                   Work Order status to complete,
and ends the stage.


After you run the flows, you can follow the details of the orchestration, including the status and the date
it was created, in the Orchestration Run records. In the Related tab, view the therapy stages and steps
that are executed.

Assign Permission Sets Licenses and Permission Set to Therapy Orchestration Users
Enable users to execute advanced therapy workflows and automate task assignment by assigning the
required permission sets licenses and corresponding permission sets.
Configure Data Capture for Objects
To make sure that the orchestrator is notified of any changes to the Care Program Enrollee Work Order
and Care Program Enrollee Work Order Step records, configure data capture for these objects.
Configure Flow Events in Advanced Therapy Management

<!-- page:928 -->



To resume the Advanced Therapy Management flow orchestrator, turn off the flow events.
Add Lightning App Builder Components to Track Step Progress
Help users track the progress of therapy steps or substages (work procedure steps) and tasks (care
program enrollee work order steps) by adding the Work Procedure Step Progression and Work Order
Step Progression components to the Care Program Enrollee record page. These components enable
users to view completed, current, and upcoming tasks.
Quick Guide to a Successful Therapy Orchestration
Therapy Orchestration involves a bunch of tasks to be performed in a particular order. Find the list of
tasks you must perform to configure the right data, and run the default flows and your own
customized flows in one place.
Considerations for Running the Default Therapy Orchestration Flows
Perform prerequisite tasks before you run the default flows for therapy orchestration.
Prepare to Run the Therapy Orchestration Flows in Advanced Therapies
Therapy Orchestration’s flows are highly flexible and you can customize them according to the needs
of your Salesforce org. Add, remove, and modify therapy stages and steps, and create action plan
templates for the different stakeholders in a therapy. Create work type steps to represent each therapy
step and associate it with an action plan template. Add team members who can be assigned a task in
a therapy step.
Manually Assign Therapy Tasks to Users
Make sure stakeholders in a therapy step don’t miss their assigned tasks due to configuration errors.
Create a custom field on the Assessment Task object and configure an Apex trigger to assign therapy
tasks using criteria-based sharing.
Create a Lightning Aura Component for Tasks in Therapy Orchestration
Help users perform component tasks that involve navigating to different screens. Set up a Lightning
Aura Component to help users navigate to the Schedule Appointments tab to book slots as part of a
component task.
Update Component Task Status with Lightning Message Channel
To change the status of a component task, publish a message through a Lightning message channel
and create a Lightning aura component.
Repeat Stages In a Therapy Orchestration
Advanced Therapy Orchestration helps you perform two types of flows: linear flows and non-linear
flows that repeat stages. While linear flows are the norm, non-linear flows are built to intervene in
situations when things don’t go according to plan.
Use Advanced Scheduling and Decision Tables
Provide flexibility for users to find appropriate appointment slots with Advanced Scheduling settings.
Accommodate operational and regulatory variances in lead time based on country or service territory.
Help users select their preferred locations for performing therapy processes based on priority-based
override rules. Customize field lists that store therapy task data according to the country of enrollment.
Get to Know Custody Management
Advanced Therapy Management’s Chain of Custody (CoC) and Chain of Identity (CoI) capabilities help
you comply with pharmaceutical regulations and uphold safety standards across the lifecycle of an
advanced therapy. CoC helps you maintain a digital trail of the patient’s collected biosample as it
passes through the various stages, steps, and tasks of an advanced therapy. CoI ensures that the right

<!-- page:929 -->



patient receives the right treatment by assigning a unique identifier to the collected biosample.
Generate Customized Work Order Steps or Therapy Tasks for Users
The Generate Work Order Steps for Patient Intake flow and the Generate Work Order Steps for
Apheresis flow create runtime records of care program enrollee work order steps. Care program
enrollee work order steps are then assigned to different stakeholders as tasks in a therapy. For
example, Biosample Collection is a care program enrollee work order step or a task assigned to a lab
technician. You can clone the flows to create work order steps for other therapy stages like
Manufacturing and Infusion. Also, you can customize the default flows to add, remove, or modify work
order steps for apheresis and patient intake, and delegate tasks to various stakeholders in your org.


Assign Permission Sets Licenses and Permission Set to Therapy
Orchestration Users

Enable users to execute advanced therapy workflows and automate task assignment by assigning the
required permission sets licenses and corresponding permission sets.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create, edit, and delete Health Cloud data:
Health Cloud Foundation permission set

OR

Manage Health Cloud user permission

To create, edit, and delete AFLS       Health Cloud Starter permission set
data:


As a prerequisite, make sure you create and assign profiles for Therapy Orchestration users.

1. From Setup, in the Quick Find box, enter Users, and select Users.
2. Select the appropriate user for therapy orchestration.
3. In the Permission Set License Assignments related list, click Edit Assignment.
4. Select these permission set licenses:
- Health Cloud Starter (for AFLS) or Health Cloud Platform (for Health Cloud)
- Multi-Step Scheduling
- Action Plans
- Industries Visit
- Health Cloud Advanced Therapy Orchestration

<!-- page:930 -->



5. Click Save.
6. In the Permission Set Assignments related list, click Edit Assignment.
7. Move the following permission sets to the Enabled Permission Sets list.
- Health Cloud Starter (for AFLS) or Health Cloud Foundation (for Health Cloud)
- Multi-Step Scheduling
- Action Plans
- Industries Visit
- Health Cloud Advanced Therapy Orchestration
8. Click Save.


Configure Data Capture for Objects

To make sure that the orchestrator is notified of any changes to the Care Program Enrollee Work Order
and Care Program Enrollee Work Order Step records, configure data capture for these objects.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management           Health Cloud Advanced Therapy Orchestration
app:                                                permission set


1. From Setup, in the Quick Find box, enter Change Data Capture and select it.
2. On the Data Capture setup page, from Available Entities, find the Care Program Enrollee Work Order
object, and move it to Selected Entities.
3. From Available Entities, find the Care Program Enrollee Work Order Step object, and move it to
Selected Entities.
4. Save the changes.


Configure Flow Events in Advanced Therapy Management

To resume the Advanced Therapy Management flow orchestrator, turn off the flow events.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:931 -->




USER PERMISSIONS NEEDED

To access the Advanced Therapy Management           Health Cloud Advanced Therapy Orchestration
app:                                                permission set


1. From Setup, in the Quick Find box, enter Advanced Therapy Management Settings and select it.
2. Turn on Configure Flow Events for Advanced Therapy Management.


Add Lightning App Builder Components to Track Step Progress

Help users track the progress of therapy steps or substages (work procedure steps) and tasks (care
program enrollee work order steps) by adding the Work Procedure Step Progression and Work Order
Step Progression components to the Care Program Enrollee record page. These components enable
users to view completed, current, and upcoming tasks.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To configure the component:                         Customize Application


1. From the App Launcher, find and select Care Program Enrollees.
2. Select a care program enrollee record, click    , and then click Edit Page.
3. In Lightning App Builder, from the Standard list of components, drag the Work Order Step Progression
component onto an editable part of the page. In the settings section, select:
- Allow optional tasks to enable the users to add optional tasks to a step.
- Show refresh button to show the refresh button in My Tasks.
- Show last refresh time to show the time when My Tasks was last refreshed.
4. In Lightning App Builder, from the Standard list of components, drag the Work Procedure Step
Progression component onto an editable part of the page. In the settings section, select:
- Show refresh button to show the refresh button in the stage progression section in the care
program enrollee page.
- Show last refresh time to show the time when the stage progression section in the care program
enrollee page was last refreshed.
5. Activate the page as Org Default, App Default, or App, Record Type, and Profile depending on your
requirements.
6. Click Save.

<!-- page:932 -->




Quick Guide to a Successful Therapy Orchestration

Therapy Orchestration involves a bunch of tasks to be performed in a particular order. Find the list of
tasks you must perform to configure the right data, and run the default flows and your own customized
flows in one place.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


- Make sure you set up data in your org to represent the therapy.
- Create a care program and set the category as Advanced Therapy.
- Create a work procedure record and associate it with the care program. Add the orchestration flow’s
API name in the Associated Flow Orchestrator Name field.
- Create work types for each therapy stage, such as apheresis or patient intake.
Note For work types that don’t require scheduling and have no associated service
appointments, you must add an enrollment location (service territory) in the Care Program
Enrollee record. Also, make sure that the related Service Territory Work Type record has a team
associated with it, and that the team has a role and user assigned.

- Create work procedure steps that correspond with the work types created.
- Create a participant role to represent the user who is assigned a therapy task. Set Up User Groups
for Care Teams to enable multiple users with the same role to perform a therapy task.
- Create a team. Add team members and associate a participant role with the team member. The
team member is associated with a user.
- Create an action plan template to create tasks for each step in a therapy stage.
- Create a task flow or component task. Task flows launch a flow, while component tasks take you to a
screen or tab of your choice.
- Publish the template and copy the template ID.
- Create a work type step and associate it with the action plan template.
- As a prerequisite for the first time you run the orchestration flow, you must override the original
evaluation flow. Even if you use a customized orchestration flow with the original evaluation flow,
you must override it.
-    Advanced Therapy Orchestration offers both linear flows and non-linear flows that help you repeat
stages. You can customize the flows any way you want, for example, to create conditional branching.
To set up customized workflows, follow these steps:
- Clone and customize the orchestration flow, and add your own evaluation flow. Make sure you add
the API name of your customized orchestration flow to the work procedure record.
- Create component tasks to navigate to different screens.
- Update task status using a Lightning Message Channel.

<!-- page:933 -->




Considerations for Running the Default Therapy Orchestration Flows

Perform prerequisite tasks before you run the default flows for therapy orchestration.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


To run the default orchestration flow, configure these items:

- Associate the work procedure with a care program record.
- Set the care program record’s category to advanced therapy.
- Override the Evaluate Step and Task Completion Status flow.
To generate runtime records, clone the Generate Work Order Steps for Patient Intake sample flow or the
Generate Work Order Steps for Apheresis sample flow. Associate the cloned flow with the corresponding
work procedure step record.


Note Starting from Winter ‘24, you can’t view or add new data in the Associated Flow Name field on
the Work Procedure Step object. You can continue executing the Generate Work Order Steps for
Patient Intake and Generate Work Order Steps for Apheresis flows using data that was stored in the
Associated Flow Name field before Winter ‘24. However, this approach isn’t recommended. Instead,
create records for substages in a therapy stage using Work Type Step records, and associate an
action plan template with the work type step to create therapy tasks.



## Set the Care Program Category for Advanced Therapies

Therapy Orchestration only works for specialized care programs like advanced therapies. To ensure
users can implement orchestration workflows for an advanced therapy care program,configure the
Category field in the care program record.
Associate a Work Procedure with a Care Program for Advanced Therapies
To run the therapy orchestration flows, first link a work procedure record to an advanced therapy care
program record.
Override the Therapy Orchestration Evaluation Flow
The evaluation flow checks whether all the tasks in a step are complete. Based on the result of the
evaluation flow, the orchestration flow determines whether to move on to the next step in the
orchestration. But the evaluation flow only checks for tasks owned by the current user. To run the
evaluation flow in the context of the system rather than in the context of a user, you must clone and
override the original evaluation flow.


Set the Care Program Category for Advanced Therapies

Therapy Orchestration only works for specialized care programs like advanced therapies. To ensure users

<!-- page:934 -->



can implement orchestration workflows for an advanced therapy care program,configure the Category
field in the care program record.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To edit care programs:                              Read access on Care Program object

To add the Category field:                          Health Cloud Advanced Therapy Orchestration
permission set


1.    From the App Launcher, find and select Care Programs.
2.    Select the care program record associated with a therapy.
3.    In the dropdown, click Edit.
4.    In the Category field, select Advanced Therapy.
5.    Save your changes.


## See Also

Salesforce Help: Create a Care Program and Add Related Records


Associate a Work Procedure with a Care Program for Advanced Therapies

To run the therapy orchestration flows, first link a work procedure record to an advanced therapy care
program record.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To edit work procedure records:                     Use the Multi-Step Scheduling permission set


1.    From the App Launcher, find and select Work Procedure.
2.    Select the work procedure record for which you want to orchestrate an advanced therapy.
3.    In the Reference Record field, select the care program the advanced therapy is part of.
4.    Save your changes.

See Also

<!-- page:935 -->



Salesforce Help: Set Up a Work Procedure for Advanced Therapy Management


Override the Therapy Orchestration Evaluation Flow

The evaluation flow checks whether all the tasks in a step are complete. Based on the result of the
evaluation flow, the orchestration flow determines whether to move on to the next step in the
orchestration. But the evaluation flow only checks for tasks owned by the current user. To run the
evaluation flow in the context of the system rather than in the context of a user, you must clone and
override the original evaluation flow.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To use Therapy Orchestration:                          Health Cloud Advanced Therapy Orchestration
permission set

To open, edit, or create a flow in Flow Builder:       Manage Flow


Note You must override the original evaluation flow before you run the orchestration flow for the
first time. Even if you customize the orchestration flow, but use the original evaluation flow with it,
you must override it.


1.    From Setup, find and select Flows.
2.    Select Evaluate Step and Task Completion Status.
3.    In Flow Builder, click Save As.
4.    In the Save as flow override window, make the following changes.
a. Enter a name for your new flow. The API name is auto-populated.
b. Click Show Advanced.
c. In the How to Run the Flow field, select System Context Without Sharing —Access All Data.
d. Click Save.
e. Click Activate.


Prepare to Run the Therapy Orchestration Flows in Advanced Therapies

Therapy Orchestration’s flows are highly flexible and you can customize them according to the needs of
your Salesforce org. Add, remove, and modify therapy stages and steps, and create action plan templates
for the different stakeholders in a therapy. Create work type steps to represent each therapy step and
associate it with an action plan template. Add team members who can be assigned a task in a therapy
step.

<!-- page:936 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Here’s a video of the process to help you get started.

Watch the video: https://play.vidyard.com/guo6aP3KYrZuctDBZaFkDP

If you aren’t able to watch the video in full screen mode, open the video on a new tab:     Prepare to Use
Advanced Therapy Orchestration.


## Set Up Participant Roles for Therapy Orchestration

Configure participant roles before you assign tasks or care program enrollee work order steps to users
in your org. When you create teams dedicated to performing a work type in your org, assign roles to
the team members so that they can perform the therapy tasks.
Set Up User Groups for Care Teams
Help your care team perform therapy tasks faster by assigning assessment or digital verification tasks
to a user group rather than a single user. With user groups you can configure more than one user in a
role, such as a doctor or clinician, who can perform the same task. For example, you can select user
groups as designated verifiers in electronic signature trails. Any user in the user group can sign the
digital verification record.
Create Teams and Team Members for Therapy Orchestration
Help enhance the quality of care offered to advanced therapy patients by setting up teams per service
territory, per work type (stage), and per user. Configure team members, assign a participant role, and
associate the team member records with users in your org who perform the tasks.
Create Action Plan Templates for Therapy Orchestration
Action plan templates are a reusable set of action items or activities used in therapy orchestration to
create therapy tasks.
Create a Task Flow for Action Plan Templates in Advanced Therapies
Help stakeholders in a therapy step perform actions by adding flows to action plan templates and
assigning the flows to participant roles.
Create a Component Task for Action Plan Templates in Therapy Orchestration
Create component tasks using Lightning Web components that help users navigate to different
screens to complete tasks assigned to them.
Publish the Action Plan Template for Therapy Orchestration
You must publish an action plan template before you can associate it with a work type step record. You
can’t edit published action plan templates, so make sure you create task flows and component tasks
before you publish a template.
Set Up a Work Type Step in Advanced Therapy Management
A work type step, also called a milestone, refers to a step within a therapy stage. A stage is represented
by a work type or work procedure step record. You can break a stage into work type steps with their

<!-- page:937 -->



own lead time. Create a work type step and assign a default lead time for the record, or override the
default lead time settings based on your requirements. Also, associate a work type step with an action
plan template to create the therapy tasks that are part of the work type step.
Clone and Customize the Orchestration Flow in Advanced Therapies
To modify the default configurations and modify the orchestration according to your requirements,
clone the Process Advanced Therapy Work Orders orchestration flow. If you want to add your own
evaluation flow, you can add it here.
Assign a Team to a Service Territory Work Type Record
In an advanced therapy, work types like apheresis are performed at service territories like a hospital or
clinic. Care teams are set up at each territory for each work type based on the user or team member
performing the therapy task. To associate a therapy task with a role, first assign a team to a service
territory work type record.


Set Up Participant Roles for Therapy Orchestration

Configure participant roles before you assign tasks or care program enrollee work order steps to users in
your org. When you create teams dedicated to performing a work type in your org, assign roles to the
team members so that they can perform the therapy tasks.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create participant roles:                         Health Cloud Advanced Therapy Orchestration
permission set


You can also:

- Assign task flows and component tasks in action plan templates to participant roles.
- Select participant roles as designated verifiers for electronic signature records in signature trails. Any
user who belongs to a selected participant role can sign the electronic signature record.

When you create a participant role, ensure the role links to a team member (user or user group), and
that the team is assigned to a corresponding service territory work type.

1. From Setup, in the Quick Find box, enter Participant Roles, and then select Participant Roles.
2.    To create a participant role, click New.
3.    Enter a participant role name. The API name is auto-populated.
4.    In Parent Object, select Team.
5.    For Default Access Level, select Read/Write.
6.    Select Active.

<!-- page:938 -->





7. Save your changes.
8. Repeat these steps to create as many participant roles as needed.


Set Up User Groups for Care Teams

Help your care team perform therapy tasks faster by assigning assessment or digital verification tasks to a
user group rather than a single user. With user groups you can configure more than one user in a role,
such as a doctor or clinician, who can perform the same task. For example, you can select user groups as
designated verifiers in electronic signature trails. Any user in the user group can sign the digital
verification record.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management             Health Cloud Advanced Therapy Orchestration
app:                                                  permission set


1. From Setup, in the Quick Find box, enter Public Groups, and then select Public Groups.
2. Click New.
3. For Search, select Users.
4. Select the members you want to add to the user group. Drag members from the Available Members to
the Selected Members column.
5. Save your changes.


Create Teams and Team Members for Therapy Orchestration

Help enhance the quality of care offered to advanced therapy patients by setting up teams per service
territory, per work type (stage), and per user. Configure team members, assign a participant role, and
associate the team member records with users in your org who perform the tasks.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:939 -->




USER PERMISSIONS NEEDED

To create teams and team member records:             Health Cloud Advanced Therapy Orchestration
permission set


1. From the App Launcher, find and select Teams.
2. Click New.
3. In the New Team window, add the following changes.
a. Enter a name for your team.
b. In Status, select Active.
4. From the App Launcher, find and select Team Members.
5. Click New.
6. In the New Team Member window, add the following changes.
a. For Role, select a participant role.
b. For Team, select the team you created.
c. In Member, first select User, and then search and select a user who is part of the team. Alternatively,
select Group, and then search and select a user group.


Note To select a group, first create the group in Public Groups in Settings, and add the users
you want to include. See Set Up User Groups for Care Teams for more information.

7. Save your changes.


Create Action Plan Templates for Therapy Orchestration

Action plan templates are a reusable set of action items or activities used in therapy orchestration to
create therapy tasks.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create action plan templates:
Industries Visit permission set

AND

Health Cloud Advanced Therapy Orchestration
permission set


1. From the App Launcher, find and select Action Plan Templates.
2. Click New.

<!-- page:940 -->



3. Enter a name for your action plan template. For example, Biosample Collection Action Plan.
4. In Action Plan Type, select Assessment Execution.
5. In Target Object, select Care Program Enrollee Work Order Step.


6. Save your changes.


## See Also

Salesforce Help: Work with Action Plan Template


Create a Task Flow for Action Plan Templates in Advanced Therapies

Help stakeholders in a therapy step perform actions by adding flows to action plan templates and
assigning the flows to participant roles.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create action plan templates:
Industries Visit permission set

AND

Health Cloud Advanced Therapy Orchestration
permission set


Note When you create or customize a flow that you want to reference in a task flow, make sure it
has the assessmentTaskId , carePgmEnrolleeWkOrdStepId , and the
careProgramEnrolleeId input parameters.


1.    From the App Launcher, find and select Action Plan Templates.
2.    Select the appropriate action plan template.
3.    In Task Flows, click Add Flow.
4.    In the Add Flow window, add the following details.
a. Select a flow for the task.
b. In Responsible Role, select the role you want to assign the task to.
c. Enter a display order.
d. If the task is mandatory, select Required.


e. Save your changes.

<!-- page:941 -->




## See Also

Salesforce Help: Work with Action Plan Template


Create a Component Task for Action Plan Templates in Therapy Orchestration

Create component tasks using Lightning Web components that help users navigate to different screens
to complete tasks assigned to them.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create action plan templates:
Industries Visit permission set

AND

Health Cloud Advanced Therapy Orchestration
permission set


Make sure you create a Lightning Aura component in your org.

1. From the App Launcher, find and select Action Plan Templates.
2. Select the appropriate action plan template.
3. In Component Tasks, click Add Component Task.

Note Only flow and component tasks are supported in an Action Plan Template when the target
is Care Program Enrollee Work Order Step.

4. In the New Component Task window, add the following details.
a. Enter a name for your component task.
b. In Fully Qualified Name, add the name of the component with the prefix of the namespace. For
example, if the name of your aura component is advanced_therapy, the fully qualified name is
c__advanced_therapy.
c.    In Responsible Role, select the participant role who is assigned this task.
d.    Add a display order.
e.    If the task is mandatory, select Required.
f.   Save your changes.


## See Also

Salesforce Help: Work with Action Plan Template

<!-- page:942 -->



Publish the Action Plan Template for Therapy Orchestration

You must publish an action plan template before you can associate it with a work type step record. You
can’t edit published action plan templates, so make sure you create task flows and component tasks
before you publish a template.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create action plan templates:
Industries Visit permission set

AND

Health Cloud Advanced Therapy Orchestration
permission set


1.    From the App Launcher, find and select Action Plan Templates.
2.    Select the appropriate action plan template for which you’ve set up task flows and component flows.
3.    Click Publish Template.
4.    Click Publish.


Set Up a Work Type Step in Advanced Therapy Management

A work type step, also called a milestone, refers to a step within a therapy stage. A stage is represented by
a work type or work procedure step record. You can break a stage into work type steps with their own
lead time. Create a work type step and assign a default lead time for the record, or override the default
lead time settings based on your requirements. Also, associate a work type step with an action plan
template to create the therapy tasks that are part of the work type step.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:943 -->




USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:
Multi-Step Scheduling permission set

OR

Manage Multi-Step Scheduling features


1.    From App Launcher, find and select Work Type Steps.
2.    Click New.
3.    Enter a name for the work type step.
4.    Select the parent work type. For example, select Apheresis.
5.    In lead time, add the number of days or hours required to complete the work type step.

Note The sum of lead time of Work Type Steps mustn't exceed the lead time defined for a Work
Procedure Step. The default lead time is in days. You can update the lead time unit in the work
procedure record.

6. To indicate the order of the work type step, add a sequence number.
7. To indicate the therapy task that’s performed as part of the work type step, select the action plan
template associated with the task.


8. Save your changes.


Clone and Customize the Orchestration Flow in Advanced Therapies

To modify the default configurations and modify the orchestration according to your requirements, clone
the Process Advanced Therapy Work Orders orchestration flow. If you want to add your own evaluation
flow, you can add it here.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To use Therapy Orchestration:                        Health Cloud Advanced Therapy Orchestration
permission set

To open, edit, or create a flow in Flow Builder:     Manage Flow


1. From Setup, in the Quick Find box, enter Flows and then select Flows.
2. Click Process Advanced Therapy Work Orders.
3. In Flow Builder, click Save As.

<!-- page:944 -->



4.    In the Save as a New Flow window, for Orchestration Label, enter a name for your flow.
5.    The Orchestration API Name is auto-populated. Make a note of the API name.
6.    Save your changes.
7.    In the cloned orchestration flow, you can add your own evaluation flow, and change the input values
of the currentWorkOrderStepId and associatedOrchestrationStepStatus. Make these updates in
each of the 10 Complete Therapy Work Order Step [x] step resources.
8.    Save your changes.
9.    In App Launcher, find and select Work Procedure.
10.    Select the appropriate work procedure record.
11.    In the Associated Flow Orchestrator Name field, enter the API name of the new flow.
12.    Save your changes.


## See Also

Salesforce Help: Flow Builder


Assign a Team to a Service Territory Work Type Record

In an advanced therapy, work types like apheresis are performed at service territories like a hospital or
clinic. Care teams are set up at each territory for each work type based on the user or team member
performing the therapy task. To associate a therapy task with a role, first assign a team to a service
territory work type record.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To add a team:                                      Health Cloud Advanced Therapy Orchestration
permission set


As a prerequisite, make sure you create an org-level team and create records for the associated team
members.

1. From the App Launcher, find and select Service Territories.
2. Select the appropriate service territory associated with your therapy’s work procedure step or a work
type.
3. In the Related tab, go to Service Territory Work Type.
4. Select an existing service territory work type record.
5. Click    next to Teams.
6. Select the team you created.

Note Make sure a matching team is found and that the Service Appointment record includes

<!-- page:945 -->




both Work Type and Service Territory details. If this information is missing, the task’s AssignedToId
will remain null until those values are populated.

7. Save your changes.


Manually Assign Therapy Tasks to Users

Make sure stakeholders in a therapy step don’t miss their assigned tasks due to configuration errors.
Create a custom field on the Assessment Task object and configure an Apex trigger to assign therapy
tasks using criteria-based sharing.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To define an Apex trigger:                            Author Apex

To create sharing rules:                              Manage Sharing

To use assessment tasks:                              Industries Visit permission set


1. Create a custom field on the Assessment Task object, with the Text data type.
a. From the object management settings for Assessment Task, go to Field & Relationships.
b. Click New.
c. Select Text as the data type, and click Next.
d. Enter a field label. The API name is auto-populated.
e. Add a value for the maximum length of the text field.
f. Click Next, Next, and Save.
2. Add to your existing Apex Trigger for the Assessment Task object or, if your org doesn't already have
one, create one with these instructions.
a.   Click     , and click Developer Console.
b.   Click File | New | Apex Trigger.
c.   Enter a trigger name, and select Assessment Task from the sObject picklist.
d.   Delete the auto-generated content and paste this sample content.


## trigger TriggerName on AssessmentTask (before insert) {

for(AssessmentTask obj: Trigger.new) {
obj.CustomAssignee__c = obj.AssignedToId;
}
}


3. Create a group of users you want to share the task with.

<!-- page:946 -->



a. From Setup, in the Quick Find box, enter Public Group, and then select Public Group.
b.
Click New.
c.
Add a label for your group. The Group Name is auto-populated.
d.
In Search, select Users.
e.
Select the users you want to share a task with and click Add to move them from Available Members
to Selected Members.
f. Save your changes.
4. Create a criteria-based sharing rule.
a. From Setup, in the Quick Find box, enter Sharing Settings, and then select Sharing Settings.
b.    In Manage sharing settings for, select Assessment Tasks.
c.    In the Sharing Rules related list, click New.
d.    Enter a label. The rule name is auto-populated.
e.    In Select your rule type, select Based on criteria.
f.   As you’ve created an Apex trigger, you can select the custom field as the criteria. Under Select which
records to be shared, select the custom field, and then select EQUALS. Leave the value as blank.
g. In Select the users to share with, select Public Group, and then select the group you created.
h. In Select the level of access for the users, select Read/Write.
i. Save your changes.


## See Also

Apex Developer Guide: Apex Quick Start
Salesforce Security Guide: Create Criteria-Based Sharing Rules


Create a Lightning Aura Component for Tasks in Therapy Orchestration

Help users perform component tasks that involve navigating to different screens. Set up a Lightning Aura
Component to help users navigate to the Schedule Appointments tab to book slots as part of a
component task.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create Aura Components:                             Apex Class Access


1.    Click     , and then select Developer Console
2.    Click Files | New | Lightning Component.
3.    In New Lightning Bundle, add a name and click Submit.
4.    In the Component tab, delete the auto-generated content and paste this sample content.

<aura:component implements="lightning:isUrlAddressable,force:appHostable,fle

<!-- page:947 -->





## xipage:availableForAllPageTypes">

<aura:attribute name="pageReference" type="Object"/>
<aura:handler name="init" value="{! this }" action="{! c.init }"/>
<lightning:navigation aura:id="navService"/>
</aura:component>


5. In the Controller tab, delete the auto-generated content and paste this sample content.

({
init : function(cmp, event, helper) {
var navService = cmp.find("navService");
var pageReference = {
type: 'standard__navItemPage',
attributes: {
apiName: 'standard-ScheduleAppointments',


}
};
cmp.set("v.pageReference", pageReference);
navService.navigate(pageReference);
}
})


6. Save your changes.


## See Also

Salesforce Help: Create a Custom Component for a Component Task


Update Component Task Status with Lightning Message Channel

To change the status of a component task, publish a message through a Lightning message channel and
create a Lightning aura component.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Assessment Tasks:                         Industries Visit permission set



## To change a component task’s status, publish to the

lightning__industries_componentTaskInput lightning message channel. You must add values to

<!-- page:948 -->



these input parameters.

-    assessmentTaskId : Represents the current assessment task.
-    requestedStatus : Represents the status you want to update. The valid status values are NotStarted,
InProgress, and Completed.
-     updatedStatus : Represents the status of the tasks that are updated manually. Use this parameter to
refresh the component task.

Note The assessmentTaskId input parameter is mandatory, but you also must enter a value
for one of the other two parameters.


1. Publish a message to lightning__industries_componentTaskInput Lightning message channel
with this structure.


## var message = {

assessmentTaskId: "0x00",
requestedStatus: "InProgress",
};


2. When the status is updated, a success message is published in the
lightning__industries_componentTaskOutput lightning message channel with this structure.


## outputObject = {

assessmentTaskId: "0x000",
result: "Success"
}


3. Create a Lightning aura component. Use the sample code in these steps to create your code. Change
the status of the task as required.
a.   Click     , and click Developer Console.
b.   Click File | New | Lightning Component.
c.   Enter a name for your aura component.
d.   Click Submit.
e.   In the Component tab, replace the auto-generated code with this sample code.


## <aura:component description="Work Order Step progression"

implements="flexipage:availableForRecordHome,lightning:isUrlAddressable">



## <lightning:messageChannel type="lightning__industries_componentTaskInput"

aura:id="ComponentTaskInputChannel"/>
<lightning:button label="Send Message" title="Send Message" onclick="{!c.s
endMessage }"/>


</aura:component>


f. In the Controller tab, replace the auto-generated code with this sample code.

<!-- page:949 -->




({
sendMessage : function(cmp, event, helper) {



## var payload = {

assessmentTaskId : "0egxx00000000MbAAI", // update the assessm
ent Task ID.
requestedStatus : "Completed"
};
cmp.find("ComponentTaskInputChannel").publish(payload);
}
})


4. Save your changes.
Use the Lightning aura component in the component task.


## See Also

Lightning Aura Components Developer Guide: Create a Message Channel
Lightning Aura Components Developer Guide: Publish on a Message Channel


Repeat Stages In a Therapy Orchestration

Advanced Therapy Orchestration helps you perform two types of flows: linear flows and non-linear flows
that repeat stages. While linear flows are the norm, non-linear flows are built to intervene in situations
when things don’t go according to plan.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


In an ideal scenario, the orchestration workflow starts at the first stage of Apheresis, runs through all the
care program enrollee work orders steps and tasks. The user who is assigned a task logs in to the
Advanced Therapy Management app, and performs the task. The next user then logs in to perform the
consecutive task and so on. This way all the stages, steps, and tasks are performed in a linear order.

But what happens when a therapy stage fails? For example, what if a manufactured personalized
medicine doesn’t meet quality assurance (QA) and apheresis has to be redone?

The patient’s therapy orchestration doesn’t have to stop. Advanced Therapy Management offers non-
linear flows that can repeat stages. In these non-linear flows, Therapy Orchestration is used with Multi-
Step Scheduling to reschedule slots and rerun the orchestration flow. In this preceding example where
Apheresis has to be repeated, the Therapy Orchestration workflows are reset to the beginning of the
Apheresis stage and generates new tasks that are assigned to the same users. The information generated

<!-- page:950 -->



in the second round of Apheresis is captured separately.


## See Also

Repeat a Stage in a Therapy Orchestration


Use Advanced Scheduling and Decision Tables

Provide flexibility for users to find appropriate appointment slots with Advanced Scheduling settings.
Accommodate operational and regulatory variances in lead time based on country or service territory.
Help users select their preferred locations for performing therapy processes based on priority-based
override rules. Customize field lists that store therapy task data according to the country of enrollment.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Find out the requirements for using advanced scheduling and creating override rules.


Functionality                                          Requirement


## Enable Advanced Scheduling and generate

To override default lead time of work types
decision table


## Enable Advanced Scheduling and generate

To set up service territory prioritization rules
decision table


## To customize field lists and make mandatory fields

Generate decision table
optional


## To create custody records by overriding the

Generate decision table
custody verification type



## Enable Advanced Scheduling Settings

To set up location-based prioritization rules and overrule the default lead time of therapy processes,
activate advanced scheduling for therapies.
Configure Decision Tables to Override Default Settings
Override default lead times, field optionality, and custody verification type for a specific set of
conditions by first creating decision tables.
Set Up Service Territory Prioritization Rules
Help users search for available slots in their preferred work procedure step locations with service
territory prioritization rules. For every parent service territory where a therapy is held, configure a set of
child service territories where work procedure steps are held, with a priority number assigned to each
set.

<!-- page:951 -->




## Override Default Lead Time Based on Hierarchy

The time required to complete a therapy can differ based on geographical region, service territory, or
the therapy stage or step. Accommodate these differences in lead time by overriding the default lead
time of a work type step.
Override Optionality of Mandatory Fields Based on Hierarchy
Help users capture therapy data according to the requirements of the country or service territory
where the therapy is performed. Display a customized list of fields and make optional fields mandatory
for a combination of conditions, based on the priority number assigned to each combination.


Enable Advanced Scheduling Settings

To set up location-based prioritization rules and overrule the default lead time of therapy processes,
activate advanced scheduling for therapies.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management               Health Cloud Advanced Therapy Orchestration
app:                                                    permission set


Note After you activate Advanced Scheduling settings, you can’t disable it. After you activate
Advanced Scheduling settings, you can't disable it. When Advanced Scheduling is enabled, lead
time is determined only from work type steps, overriding any lead time defined in work procedure
steps.


1. From Setup, in the Quick Find box, enter Advanced Therapy Management Settings, and then
select Advanced Therapy Management Settings.
2. Click Activate Advanced Scheduling, and then click Enable.


Configure Decision Tables to Override Default Settings

Override default lead times, field optionality, and custody verification type for a specific set of conditions
by first creating decision tables.


**REQUIRED EDITIONS**



Available in: Lightning Experience

<!-- page:952 -->





Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management               Health Cloud Advanced Therapy Orchestration
app:                                                    permission set


The conditions required to conduct a particular therapy aren't uniform across specialties and
geographies. The lead time for a work type step varies depending on country, region, or any other
criteria. Similarly, the tasks for a therapy may require different fields to be optional or mandatory, based
on a set of conditions. To accommodate for variances in lead time and field optionality, create decision
tables. Decision tables configure metadata of input and output parameters to override default settings.
In Advanced Therapy Management, decision tables generate metadata for lead time override, field
optionality override, and custody verification type override.

1. From Setup, in the Quick Find box, enter Advanced Therapy Management Settings, and then
select Advanced Therapy Management Settings.
2. Under Configure Decision Tables, click Generate Decision Tables.
3. Activate each decision table.


Set Up Service Territory Prioritization Rules

Help users search for available slots in their preferred work procedure step locations with service territory
prioritization rules. For every parent service territory where a therapy is held, configure a set of child
service territories where work procedure steps are held, with a priority number assigned to each set.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management               Health Cloud Advanced Therapy Orchestration
app:                                                    permission set

To set up service territory prioritization rules:       Multi-Step Scheduling permission set


Service territory prioritization rules use ascending order of priority, that is, the combination of conditions
with priority number 1 is picked first.

For example, Cell and Gene Therapy is a work procedure held at Goodly Healthification Cell and Gene
Therapy Center (parent service territory). There are two sets of preferred locations for work procedure
steps.

<!-- page:953 -->



- Set A: Apheresis, manufacturing, and infusion are all performed in New York (Priority 1)
- Set B: Apheresis, manufacturing, and infusion are all performed in Chicago (Priority 2)
When the treatment center coordinator searches for slots, the slot formation logic first checks for
available slots in Set A (Priority 1). If no slots are found, the slot formation logic checks for the next
preference (Set B, Priority 2).


Note Make sure that you enable Advanced Scheduling in your org. When Advanced Scheduling is
enabled, Advanced Therapy Management ignores service territory relationships while building slot
chains.


1. From App Launcher, find and select Work Type Service Territory Scheduling Priorities, and click New.
2. Select the parent service territory.
3. Select the work procedure.
4. Select a work type that’s part of the selected work procedure.
5. Select the service territory where the selected work type is performed.
The service territory where the related work type is performed must be associated with a parent
service territory record, such as a treatment center.
6. The Usage Type field is autopopulated. Keep it as is.
7. Assign a priority number to the combination of conditions.
- Set a priority number for all steps in a work procedure for the prioritization rule to be valid.
- Priorities are configured per work procedure. Different work procedures in the same location can
have different priorities.
- The priority number must be unique for each combination of work procedure, work type, parent
service territory, and child service territory where the work type is performed.
- If the same work procedure exists in multiple locations, adjust the priority numbers to reflect the
preferred location order.
- Enable Advanced Scheduling for these rules to take effect.




8. Save your changes.

<!-- page:954 -->



Override Default Lead Time Based on Hierarchy

The time required to complete a therapy can differ based on geographical region, service territory, or the
therapy stage or step. Accommodate these differences in lead time by overriding the default lead time of
a work type step.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management               Health Cloud Advanced Therapy Orchestration
app:                                                    permission set

To override the default lead time of a work type        Multi-Step Scheduling permission set
step:

To update decision tables:                              Health Cloud Starter permission set


Appointment slots are calculated based on the lead time of work procedure steps, that is, the time taken
to complete a therapy stage, such as Apheresis. This lead time is calculated by adding the lead time of
individual work type steps that make up a work procedure step. You can set up a default lead time for
each work type step. However, lead time for a work type step can vary based on different conditions. For
example, the time taken to complete the Identity Verification step (work type step) takes 2 days in New
York, but 1 day in San Francisco. To account for variations in lead time according to certain conditions,
override a work type step’s lead time using a Work Type Step Lead Time Override record.

Set a combination of conditions, such as work procedure, work type, work type step, country, and service
territory, and assign a priority to the combination. When the treatment center coordinator searches for
slots, the Calculate Work Procedure Step Lead Time Using Work Type Steps flow computes the total lead
time of a work procedure step by invoking the Work Type Step Lead Time Override decision table. This
decision table references the override logic you set up in the Work Type Step Lead Time Override record,
and considers the override logic with the highest priority.

If no override logic is configured, the flow considers the default lead time.


Note The logic for the work type step’s lead time override considers the record with the highest
priority, in descending order. So, a Work Type Step Lead Time Override record with priority number
9 is considered over another record with priority number 8.


Lead time override and service territory prioritization rules are used together for finding the most
appropriate slots. If the total calculated lead time for the set of child service territories (where work type
steps are held) with the highest prioritization rule is less than the work procedure step lead time

<!-- page:955 -->



configured, the slot formation logic considers total lead time calculated using work type steps.

If the total calculated lead time for a prioritized set of child service territories (work type steps) is more
than the work procedure step lead time configured, the slot formation logic doesn’t consider any slots for
that combination of child service territories, and instead searches for the service territory prioritization
rule with a lower priority.


Note Make sure you activate Advanced Scheduling settings and generate decision tables for lead
time override.


1. From Setup, in the Quick Find box, enter Decision Tables, and then click Decision Tables. Click
Enable.
2. Click the dropdown next to the Work Type Step Lead Time Override decision table, and then click
Activate.
3. From App Launcher, find and select Work Type Step Lead Time Override, and click New.
4. Add the conditions for an override.
a. Select a work type.
b. Select a work procedure.
c. Select a service territory.
d. Select a work type step.
e. Assign a priority to the combination of conditions.
f. Select the country in which the conditions are applicable.
g. Add the lead time for the work type step. The default lead time is in days. You can change the lead
time unit in the Work Procedure record.


h. Save your changes.


Override Optionality of Mandatory Fields Based on Hierarchy

Help users capture therapy data according to the requirements of the country or service territory where
the therapy is performed. Display a customized list of fields and make optional fields mandatory for a
combination of conditions, based on the priority number assigned to each combination.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management             Health Cloud Advanced Therapy Orchestration
app:                                                  permission set


For example, for a therapy task called “Verify Details”, the admin must capture the Account Number field

<!-- page:956 -->



of the Account object for patients in India. The Account Number field is mandatory only in India. For the
same therapy task, the Account Number field is optional for advanced therapies in Germany or the US.
To comply with country-specific regulations and requirements, create an Advanced Therapy Field
Optionality Override record, and assign a priority number for the combination of conditions.

Field optionality override rules use descending order of priority, that is, between priority number 10 and
priority number 1, number 10 is picked first. For example, the Account object’s Account Number field is
mandatory for India, when the service territory (treatment center) is Mumbai, and this combination has
a priority of 10. There’s another combination of conditions where the Healthcare Provider object’s Name
field is mandatory for India, while the service territory can be any state. The second combination has a
priority of 1. The first field optionality record, with the priority number of 10 is considered for the
override.


Note You can make an optional field mandatory for a specific set of conditions, but you can’t make
a mandatory field optional.


You can customize and add more conditions for the field optionality override as needed.

1. From Setup, in the Quick Find box, enter Decision Tables, and then click Generate Decision
Tables. Click Enable.
2. Click the dropdown next to the Field Optionality Override decision table, and then click Activate.
3. From App Launcher, find and select Advanced Therapy Field Optionality Overrides, and click New
Override Rule.
Optionally, click New to add a customized field list using a JSON string.
4. On the first window, add the conditions for an override.
a. Select a country.
b. Assign a priority to the combination of conditions.
c. Select a service territory.
d. Add a task name.
e. Select a work procedure.
f. Select a work type.
g. Select a work type step.


h. Click Next.
5. Select the object, and then select fields that you want to make mandatory.
a.   To add an object, click    .
b.   Find and select the object you want to add.
c.   Select the fields you want to display.
d.   To change a field from optional to required, click Mandatory.


e. Click Next.
6. Add a display order for each of the selected fields.
7. Save your changes.

<!-- page:957 -->




Get to Know Custody Management

Advanced Therapy Management’s Chain of Custody (CoC) and Chain of Identity (CoI) capabilities help
you comply with pharmaceutical regulations and uphold safety standards across the lifecycle of an
advanced therapy. CoC helps you maintain a digital trail of the patient’s collected biosample as it passes
through the various stages, steps, and tasks of an advanced therapy. CoI ensures that the right patient
receives the right treatment by assigning a unique identifier to the collected biosample.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


You can create custody records automatically as part of Advanced Therapy Management’s Therapy
Orchestration. When you create an enrollee record, Therapy Orchestration is set in motion. When a care
program enrollee work order (such as Apheresis) is in progress, the Override Custody Verification Type
When Work Order Is Changed flow creates the related custody records. When a care program enrollee
work order step (Identity Verification) is in progress, the Override Custody Verification Type When Work
Order Step Is Changed flow creates the related custody records.

You can create electronic signature records for chain of custody entries automatically by creating a flow
or overriding a managed flow. You can also use a subflow to confirm if all signatures on a trail are
complete.

The Evaluate Step and Task Completion Status flow checks whether custody of a biosample for each step
and task has been fulfilled. The Process Advanced Therapy Work Orders orchestration flow moves on to
the following step, if any, only after custody is complete.

As part of CoI, you assign a unique identifier that represents the biosample (custody item). The identifier
can originate in Salesforce or from external systems. Maintaining the CoI ensures the integrity of the
custody item.


## Configure Custody Records With Workflows

To successfully execute the therapy orchestration workflows and capture custody data, set up a
Custody Verification Type Override decision table and create a Custody Verification Type Override
record.
Configure Chain of Identity for a Custody Item
When the Create Custody Chain Entries flow is executed, it creates custody items and custody chain
entries. Add a unique identifier to the custody item to maintain a chain of identity throughout all the
therapy orchestration processes.
Track Chain of Custody Data
Capture all custody-related changes in a therapy orchestration workflow, including the date and time
of past events, and new data that’s generated after every change. Ensure regulation compliance by
tracking and auditing the history of chain of custody events.

<!-- page:958 -->



Configure Custody Records With Workflows

To successfully execute the therapy orchestration workflows and capture custody data, set up a Custody
Verification Type Override decision table and create a Custody Verification Type Override record.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To setup and manage Chain of Custody:
Health Cloud Advanced Therapy Orchestration
permission set

OR

Chain of Custody User permission set


When a therapy stage (work order) or a therapy step (work order step) is in progress, the corresponding
Override Custody Verification Type When Work Order Is Changed flow or the Override Custody
Verification Type When Work Order Is Step Changed flow is triggered.

These record-triggered flows invoke the Custody Verification Type Override decision table to get the
custody verification type and execute the Create Custody Chain Entries subflow. The Create Custody
Chain Entries subflow generates custody chain entry records and optionally creates a custody item.


Note Make sure the Custody Chain Entry object’s fields have field-level security set to visible.


If a custody item requires signatures, use a new flow or override a managed flow to automatically create
electronic signature records when you create or update related custody chain entry records. You can also
create a subflow to confirm if all signatures on a trail are complete.

For each work order, work order step, or task where the custody item requires verification, create a
signature trail (digital verification setup record) and define signature details (digital verification details
record). Then, use a custody verification type override record to set the verification type (number of
signatures required) and link a signature trail to the custody item.

1. From Setup, in the Quick Find box, enter Decision Tables, and then click Generate Decision
Tables.
2. Click Enable.
3. Click the dropdown next to the Custody Verification Type Override decision table, and then click
Activate.
4. From App Launcher, find and select Custody Verification Type Overrides, and then click New.

<!-- page:959 -->



5. Add the conditions for an override.
a. Select a work type.
b. Select a work procedure.
c. Select a service territory.
d. Select a work type step.
e. Select a country.
f. Add a task name.
g. For the Custody Verification Type, select the number of signatures required to verify this custody
item. If you don’t need to capture signatures, select Not Applicable.
h. Assign a priority to the combination of conditions.
i. For Digital Verification Setup, if signatures are required to verify this custody item, select a signature
trail.

A signature trail sets the number of required signatures and determines if designated verifiers must
sign the records in a specific order. After you create the trail, configure the signature details.

j. Save your changes.


Configure Chain of Identity for a Custody Item

When the Create Custody Chain Entries flow is executed, it creates custody items and custody chain
entries. Add a unique identifier to the custody item to maintain a chain of identity throughout all the
therapy orchestration processes.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To setup and manage Chain of Custody:
Health Cloud Advanced Therapy Orchestration
permission set

OR

Chain of Custody User permission set


Note Make sure the Custody Item object’s fields have field-level security set to visible.


1. From App Launcher, find and select Custody Items.
2. Select    next to the custody item record where you want to add or update the unique identifier.
3. In External Identifier, add the identifier for the item.
4. Save your changes.

<!-- page:960 -->



Track Chain of Custody Data

Capture all custody-related changes in a therapy orchestration workflow, including the date and time of
past events, and new data that’s generated after every change. Ensure regulation compliance by tracking
and auditing the history of chain of custody events.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To setup and manage Chain of Custody:
Health Cloud Advanced Therapy Orchestration
permission set

OR

Chain of Custody User permission set

To create custom report types:                        Manage Custom Report Types

To set field history tracking:                        Customize Application


1. Set field history tracking on Custody Item. See Field History Tracking.
2. Create a custom report type with Custody Item as the primary object. See Create a Custom Report
Type.

Alternatively, from App Launcher, find and select Custody Items, and view a list of custody item records.


Generate Customized Work Order Steps or Therapy Tasks for Users

The Generate Work Order Steps for Patient Intake flow and the Generate Work Order Steps for Apheresis
flow create runtime records of care program enrollee work order steps. Care program enrollee work
order steps are then assigned to different stakeholders as tasks in a therapy. For example, Biosample
Collection is a care program enrollee work order step or a task assigned to a lab technician. You can
clone the flows to create work order steps for other therapy stages like Manufacturing and Infusion. Also,
you can customize the default flows to add, remove, or modify work order steps for apheresis and
patient intake, and delegate tasks to various stakeholders in your org.

<!-- page:961 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To customize therapy orchestration flows:              Health Cloud Advanced Therapy Orchestration
permission set


Note Starting from Winter ‘24, you can’t view or add new data in the Associated Flow Name field on
the Work Procedure Step object. You can continue executing the Generate Work Order Steps for
Patient Intake and Generate Work Order Steps for Apheresis flows using data that was stored in the
Associated Flow Name field before Winter ‘24. However, this approach isn’t recommended. Instead,
create records for substages in a therapy stage using Work Type Step records, and associate an
action plan template with the work type step to create therapy tasks.


1. From Setup, enter Flows, and then select Flows.
2. Select the Generate Work Order Steps for Patient Intake flow or the Generate Work Order Steps for
Apheresis flow.
3. Click Save As.
4. Enter a name for your new flow. The API name is auto-populated.

Tip Make a note of the API name as you must add it to the work procedure step record.

5. Make the following customizations.
a.    To add a care program enrollee work order step, click the    between action elements.
b.    Select Action.
c.    In the New Action, for Action, select Create Care Program Enrollee Work Order Step.
d.    Enter a label. For example, Check Medication History. The API name is auto-populated.
e.    In Action Plan Template ID, add the ID of the published action plan template you created for a task
specific to the new work order step.
The Action Plan Template ID is in the URL of the browser on the Action Plan Template’s record.
f.   For Care Program Enrollee ID, select recordId.
g.    Select the label you created for the work order step.
h.    Add a sequence number.
i.   Save your changes.
j.   From the App Launcher, find and select Work Procedure Steps.
k.    Select the work procedure step where you want to add the new care program enrollee work order
step.
l. Click  next to Associated Flow Name.
m. Add the API name of the flow you created.
n. Save your changes.

See Also

<!-- page:962 -->



Salesforce Help: Add and Edit Elements


Set Up Advanced Therapy Management for Experience Cloud

Make your treatment center experience easily accessible to users with Advanced Therapy Management in
an Experience Cloud site.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS



## Set Up an Experience Cloud Site for Advanced Therapy Management

To set up an Experience Cloud site, first enable Digital Experiences and create a site. Then, add profiles
that can access your Experience Cloud site.
Configure an Experience Cloud Site for Advanced Therapy Management
Configure the Experience Cloud site for your advanced therapy console. Create users who can access
the site and customize the Digital Experience site per your requirements.


Set Up an Experience Cloud Site for Advanced Therapy Management

To set up an Experience Cloud site, first enable Digital Experiences and create a site. Then, add profiles
that can access your Experience Cloud site.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create an Experience Cloud site:
Create and Set Up Experiences

AND

View Setup and Configuration


Make sure your org has the following user licenses: Customer Community, Customer Community Plus, or
the External Apps Login User.

1. Set your (system administrator’s) role as CEO.

<!-- page:963 -->



2. Enable Digital Experiences for Advanced Therapy in Experience Cloud.
3. Create an Experience Cloud site for your treatment center.
4. Add profiles to your Experience Cloud site.
a. In the newly created site, click Administration, and then click Members.
b. Under Search Profiles, for Search, select Customer.
c. Move the desired profiles from the Available Profiles to the Selected Profiles. For example, move the
External Apps Login User.
You can move any of these community profiles to the Selected Profiles list: Customer Community
Plus Login User, Customer Community Plus User, Customer Community Plus User Cloned, Customer
Community User, and External Apps Login User.
d. Save your changes.


Configure an Experience Cloud Site for Advanced Therapy Management

Configure the Experience Cloud site for your advanced therapy console. Create users who can access the
site and customize the Digital Experience site per your requirements.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To customize an Experience Cloud site:              Create and Set Up Experiences

To publish an Experience Cloud site:                Create and Set Up Experiences


1. Create site users who can access the Advanced Therapy Experience Cloud site. Select an Experience
Cloud user license, and the corresponding Experience Cloud profile:
a. In the digital site, click Administration, and then click Salesforce Setup.
b. From App Launcher, find and select Advanced Therapy Management.
c. Create an account record with Person Account record type. Create a corresponding contact record.
d. From the highlights panel of the contact record, click     and then click Enable Customer User.
e. In the New User page in Setup, add your email and a unique username that’s not your email.
f.In User License, select an Experience Cloud user license. For example, select External Apps Login.
g. In Profile, select an Experience Cloud profile. For example, select External Apps Login User.
h. Save your changes.
i.In the Related List of the new user, click Permission Set Assignments.
j.Move the Multi-Step Scheduling, Health Cloud Foundation, and Health Cloud Advanced Therapy
Orchestration permission sets from the Available Permission Sets to Enabled Permission Sets.
k. Save your changes.
2. Configure the Menu Items in Experience Cloud:
a. From Setup, enter All Sites and then select All Sites.

<!-- page:964 -->



b. Click Builder.
c. Click      , and then click Navigation.
d. Click     next to the Default Navigation, and then click Edit.
e. In the Menu Editor, click Add Menu Item.
f. Enter a name for the menu item. For example, enter Work Type Extension.
g.    In Type, select Salesforce Object.
h.    Select the object type. For example, select Work Type Extension.
i.   In Default List View, select all records of this object. For example, select All Work Type Extensions.
j.   Click Publicly Available.
k.    Click Save Menu.
l.   Repeat all the substeps in this step to add more objects in the menu items.
m. From Builder, click      , and drag the Appointment Slots component on to an editable part of the
page.
n. From the top-right corner of the Digital Site page, click Publish, Publish, and Got It.
3. Create sharing rules for these objects:
a. Account
b. Action Plan Template
c. Advanced Therapy Field Optionality Override
d. Care Program
e. Geo Country
f. Operating Hours
g. Orchestration Runs
h. Orchestration Stages
i. Orchestration Steps
j. Orchestration Work Items
k. Service Territory
l. Service Territory Relationship
m. Shift
n. Work Procedure
o. Work Type
p. Work Type Service Territory Scheduling Priority
q. Work Type Step Lead Time Override

You can customize the Advanced Therapy digital site portal as needed.


## See Also

Salesforce Help: Create Sharing Rules


Use Advanced Therapy Management

Advanced Therapy Management helps users book appointments for a series of procedures across
multiple service territories all at once. Multi-Step Scheduling eliminates the need for setting up and
trying to coordinate individual appointments at multiple locations.

Admins can set up service territory relationships that determine the designated service territories for

<!-- page:965 -->



each step in a slot chain and can configure resource availability and assignment details. Collating this
information about available slots for all work types on a single screen makes it easier for users to book
slots.

Users can sign electronic records to verify key record updates or record workflow steps such as Chain of
Custody events for Advanced Therapies. The Pending Signatures section of a page such as the Home
page or the Care Program Enrollee detail page lists electronic signature records that are ready for you to
sign. To learn more, see Electronic Signatures.


## Schedule, Cancel and Reschedule Appointment Slots

Use Multi-Step Scheduling to schedule appointment chains, and reschedule or cancel appointments
all at one time.
Confirm Slot Booking Request
When you book slots, the booking requests are initially submitted for confirmation. Advanced Therapy
Mangement offers a customizable Salesforce Flow to enable internal users, like gene therapy
coordinators, to seamlessly confirm appointment booking requests.
Configure an Enrollee Record to Create Tasks and Custody Records
Therapy Orchestration executes auto-launched and record-triggered flows to generate therapy tasks
and custody records. Create a care program enrollee record for an advanced therapy to automatically
create tasks, custody items, custody chain entries, and electronic signature records.
View and Perform the Therapy Tasks Assigned to You
Complete the tasks allocated to you as part of an advanced therapy orchestration step. To keep track
of the therapy progression, go to the care program enrollee record page, and view the completed and
upcoming tasks in the My Tasks section.
Create Ad Hoc Tasks
New patient requirements and emergency situations emerge as the therapy enters a new stage. These
requirements or situations aren’t part of the initial therapy plan. To address such unplanned
requirements and situations, add ad hoc tasks in the relevant steps of the therapy stage. To create the
task, use the predefined action plan template or build it from scratch by using the available options.
Assign the task to the relevant user or group and define mandatory tasks.
Get a Complete View of an Enrollee's Advanced Therapy
Use the Advanced Therapy Management app to access all the information related to an advanced
therapy in one place, including the progress of work procedure steps (therapy stages), work order
steps (therapy substages), and therapy tasks. Also, track the execution of the orchestration flows from
the Orchestration Run record page.
Repeat a Stage in a Therapy Orchestration
Therapy Orchestration not only helps you perform smooth orchestration runs, but also helps mitigate
unexpected errors where a therapy stage has to be repeated.


Schedule, Cancel and Reschedule Appointment Slots

Use Multi-Step Scheduling to schedule appointment chains, and reschedule or cancel appointments all
at one time.

<!-- page:966 -->



Multi-Step Scheduling pulls information from service resources’ availability at the service territories
they’re assigned to. The Service Territory Relationships records map service territories where consecutive
procedure steps are performed. With all of this information in one centralized place, you can easily find
available slots chains.


## Schedule Appointments Using Published Slots

Search for published slots and schedule appointments for patients enrolled in a work procedure.
Schedule Appointments When Slots Are Not Published
In some cases, appointment slots are not published by the service territory. You can still book
appointments for the other steps in the procedure. But if no slots aren’t available for the service
territory where manufacturing is performed, reach out to the service territory contact for details.
Reschedule a Series of Appointments for an Advanced Therapy
In case of sudden unavailability of enrollees, you can easily reschedule the booked slots. But
rescheduling occurs for the entire slot chain, meaning all the appointments that are part of the work
procedure are rescheduled.
Partially Reschedule Appointment Slots for an Advanced Therapy
Partially reschedule an appointment series downstream with the work type you want to reschedule.
Cancel a Series of Appointments for an Advanced Therapy
Sometimes you can’t reschedule appointments due to unavailability of either the service resources or
your enrollees, or both. In such cases, you can cancel the booking entirely.


Schedule Appointments Using Published Slots

Search for published slots and schedule appointments for patients enrolled in a work procedure.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:            Manage Multi-Step Scheduling features

To include users in Salesforce Scheduler             Let a user be included in appointments in
appointments:                                        Salesforce Scheduler

To create, edit and delete Health Cloud data:        Manage Health Cloud


Note Appointment slots are published when shifts are configured for the service resource assigned
to a service territory. Your admin can help with that.


1. From App Launcher, find and select Care Program Enrollees.
Alternatively, from the patient’s record page, go to the Related tab and navigate to the Care Program

<!-- page:967 -->



Enrollee list.

Note Make sure you add the Related List lightning component to the patient’s record page.

2. Select the enrollee record you want to schedule appointments for.
3. Click Book New Slots.
The Schedule Appointments tab is now visible.
4. To perform a basic search:
a. Select a work procedure. For example, the broader therapy process such as Cell and Gene Therapy.
b. For Work Procedure Organization, select the parent service territory for the work procedure.
c. Search with date ranges for either the first work type or the last work type. Select the work type and
enter the dates.
d. Click Search.
5. To search using additional criteria, expand Advanced Search:
a. Select a work type.
b. Select up to three locations where the work type is performed.
c. To broaden your search, add more work types and associated locations.
d. Click Search.
6. To view the available slots, click on the results. You can view the available slots in the consecutive work
types as well.
7. Select a time slot for each step of the work procedure.


8. Click Book Selected Slots.
9. Review the patient details and the slot details.


10. Click Submit.
The request for scheduling slots is submitted for review.


Schedule Appointments When Slots Are Not Published

In some cases, appointment slots are not published by the service territory. You can still book
appointments for the other steps in the procedure. But if no slots aren’t available for the service territory
where manufacturing is performed, reach out to the service territory contact for details.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:             Manage Multi-Step Scheduling features

To include users in Salesforce Scheduler              Let a user be included in appointments in
appointments:                                         Salesforce Scheduler

<!-- page:968 -->




USER PERMISSIONS NEEDED

To create, edit and delete Health Cloud data:         Manage Health Cloud


For Advanced Therapy Management, consider a situation when the available slots are not published for
the apheresis work type. The qualified treatment center (QTC) coordinator can still proceed with booking
slots for apheresis as they can manually enter the start and end dates of the slot.


Warning Don't manually book slots for manufacturing if no slots are available for the service
territory where manufacturing is performed. Instead, reach out to the service territory contact for
help.


1. From App Launcher, find and select Care Program Enrollees.
Alternatively, from the patient’s record page, go to the Related tab and navigate to the Care Program
Enrollee list.
Note Make sure you add the Related List lightning component to the patient’s record page.

2. Select the enrollee record you want to schedule appointments for.
3. Click Book New Slots.
The Schedule Appointments tab is now visible.
4. To perform a basic search:
a. Select a work procedure. For example, the broader therapy process such as Cell and Gene Therapy.
b. For Work Procedure Organization, select the parent service territory for the work procedure.
c. Search with date ranges for either the first work type or the last work type. Select the work type and
enter the dates.
d. Click Search.
5. To search using additional criteria, expand Advanced Search:
a. Select a work type.
b. Select up to three locations where the work type is performed.
c. To broaden your search, add more work types and associated locations.
d. Click Search.
6. To view the available slots, click on the results. You can view the available slots in the consecutive work
types as well.
7. If the time slots for apheresis haven’t been published, you see a prompt to reach out to the Service
Territory contact.


8. Click Book Selected Slots.
9. Review the patient details and the slot details.
10. For slots that haven’t been published, elect a start time and end time to book the appointment.


11. Click Submit.
The request for scheduling slots is submitted for review.


## See Also

Salesforce Help: Schedule Appointments Using Published Slots

<!-- page:969 -->



Reschedule a Series of Appointments for an Advanced Therapy

In case of sudden unavailability of enrollees, you can easily reschedule the booked slots. But
rescheduling occurs for the entire slot chain, meaning all the appointments that are part of the work
procedure are rescheduled.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:           Manage Multi-Step Scheduling features

To include users in Salesforce Scheduler            Let a user be included in appointments in
appointments:                                       Salesforce Scheduler

To create, edit and delete Health Cloud data:       Manage Health Cloud


In Advanced Therapy Management, if a patient has a change in plans and is unavailable for the apheresis
appointment, the QTC coordinator can reschedule the appointment to a later date. The appointments
for the consequent work types of manufacturing and infusion are also rescheduled accordingly.

1. From App Launcher, find and select Care Program Enrollees.
Alternatively, from the patient’s record page, go to the Related tab and navigate to the Care Program
Enrollee list.

Note Make sure you add the Related List lightning component to the patient’s record page.

2. Select the enrollee record associated with the appointment slot that needs rescheduling.
3. Select Reschedule Slots.
The Reschedule Appointments tab is now visible.
4. Run a basic search or an advanced search.
5. Click Reschedule Slots.
6. Review the patient details and the slot details.
7. Click Submit.


## See Also

Salesforce Help: Schedule Appointments Using Published Slots


Partially Reschedule Appointment Slots for an Advanced Therapy

Partially reschedule an appointment series downstream with the work type you want to reschedule.

<!-- page:970 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:           Manage Multi-Step Scheduling features

To include users in Salesforce Scheduler            Let a user be included in appointments in
appointments:                                       Salesforce Scheduler

To create, edit and delete Health Cloud data:       Manage Health Cloud


1. From App Launcher, find and select Care Program Enrollees.
Alternatively, from the patient’s record page, go to the Related tab and navigate to the Care Program
Enrollee list.

Note Make sure you add the Related List lightning component to the patient’s record page.

2. Select the enrollee record associated with the appointment slot that needs rescheduling.
3. Select Reschedule Slots.
4. Select the work type to reschedule. For Partial Reschedule, select any work type except the first one.
5. Click Done.
In Appointment History on the Reschedule Appointments tab, you can view the previous appointment
slots for the work types to reschedule.
6. Run a basic search or an advanced search.

Note You must select new slots for all subsequent work types in the series. For example, if you
reschedule the Manufacturing work type, also select slots for the Infusion work type that follows
the Manufacturing work type.

7. Click Reschedule Slots.
8. Review the patient details and the slot details.
9. Click Submit.


Cancel a Series of Appointments for an Advanced Therapy

Sometimes you can’t reschedule appointments due to unavailability of either the service resources or
your enrollees, or both. In such cases, you can cancel the booking entirely.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:971 -->




USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:           Manage Multi-Step Scheduling features

To include users in Salesforce Scheduler            Let a user be included in appointments in
appointments:                                       Salesforce Scheduler

To create, edit and delete Health Cloud data:       Manage Health Cloud


1. From App Launcher, find and select Care Program Enrollees.
Alternatively, from the patient’s record page, go to the Related tab and navigate to the Care Program
Enrollee list.

Note Make sure you add the Related List lightning component to the patient’s record page.

2. Select the enrollee record associated with the appointment slot that needs canceling.
3. Select Cancel Slots.
Under Appointment Slots, the statuses of the appointments are changed to canceled.


## See Also

Salesforce Help: Schedule Appointments Using Published Slots


Confirm Slot Booking Request

When you book slots, the booking requests are initially submitted for confirmation. Advanced Therapy
Mangement offers a customizable Salesforce Flow to enable internal users, like gene therapy
coordinators, to seamlessly confirm appointment booking requests.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features            Manage Multi-Step Scheduling features

To include users in Salesforce Scheduler            Let a user be included in appointments in
appointments                                        Salesforce Scheduler

To create, edit and delete Health Cloud data        Manage Health Cloud


For example, after the QTC coordinator books slots for apheresis, manufacturing and infusion, the
request must be confirmed by a gene therapy coordinator. The new and automated Confirm Booking
Request Salesforce Flow helps gene therapy coordinators approve the request, and changes the status of
the requested appointments to “Scheduled”.

<!-- page:972 -->




Note Your admin must configure the quick action button for the automated Confirm Booking
Request Flow and add the button to the highlights panel of the care program enrollee record page.


1. From App Launcher, find and select the record page where the admin added the quick action button.
2. To trigger the Flow, click Confirm Booking Request (1) in the highlights panel.
3. To accept the booking request, click Confirm.


The statuses of the appointments are updated to “Scheduled” (2), and the booking request is
confirmed.


## See Also

Salesforce Help: Add a Quick Action Button to Confirm Booking Slots in Advanced Therapy
Management


Configure an Enrollee Record to Create Tasks and Custody Records

Therapy Orchestration executes auto-launched and record-triggered flows to generate therapy tasks and
custody records. Create a care program enrollee record for an advanced therapy to automatically create
tasks, custody items, custody chain entries, and electronic signature records.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management           Health Cloud Advanced Therapy Orchestration
app:                                                permission set


1.    From the App Launcher, find and select Care Program Enrollees.
2.    To create a care program enrollee record, click New.
3.    Add a name.
4.    Select a care program that has its Category field set as Advanced Therapy.
5.    Select an account, lead, or user to represent the care program enrollee.
6.    In Enrollment Location, select the service territory where an advanced therapy care program is
executed.
7.    Save your changes.
8.    View the stages, steps, and therapy tasks generated on the care program enrollee record page.
Perform the therapy tasks assigned to you.
9.    From App Launcher, find and select Custody Items.
10.    View the record created by the latest therapy orchestration run.
11.    From App Launcher, find and select Custody Chain Entries.

<!-- page:973 -->



12. View the record created by the latest therapy orchestration run.


View and Perform the Therapy Tasks Assigned to You

Complete the tasks allocated to you as part of an advanced therapy orchestration step. To keep track of
the therapy progression, go to the care program enrollee record page, and view the completed and
upcoming tasks in the My Tasks section.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access assessment tasks:                          Industries Visit permission set

To access the Advanced Therapy Management            Health Cloud Advanced Therapy Orchestration
app:                                                 permission set


Note The Care Program Enrollee record page can also include the Pending Signatures section, which
lists the electronic signature records that are ready for you to sign.


1. From the App Launcher, find and select Care Program Enrollees.
2. Select the Care Program Enrollee record that you’re assigned a task for.
3. In My Tasks, find and select the task assigned to you.

Note You can view all tasks, but can access only the tasks that are assigned to you.

4. Complete the task flow or component task set up by your admin.

Note To refresh the My Tasks and the stage progression sections, click the refresh button in any of
the sections. You can also view the time when these components were last refreshed. To resume
any stalled stage or step, in the dropdown at the top-right corner of the page, select Resume
Transition Process.


Create Ad Hoc Tasks

New patient requirements and emergency situations emerge as the therapy enters a new stage. These
requirements or situations aren’t part of the initial therapy plan. To address such unplanned
requirements and situations, add ad hoc tasks in the relevant steps of the therapy stage. To create the
task, use the predefined action plan template or build it from scratch by using the available options.
Assign the task to the relevant user or group and define mandatory tasks.

<!-- page:974 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

Important You can create an ad hoc task only in the step of a stage that's already completed or is in
progress.



## Create an Ad Hoc Task by Using an Action Template

In a step of a therapy stage, create ad hoc tasks by using an action plan template.
Create an Ad Hoc Task Without an Action Template
In a step of a therapy stage, create an ad hoc task from scratch by using the available options. You can
add up to 10 ad hoc tasks in a therapy stage.


Create an Ad Hoc Task by Using an Action Template

In a step of a therapy stage, create ad hoc tasks by using an action plan template.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:            Manage Multi-Step Scheduling features

To create, edit and delete Health Cloud data:        Manage Health Cloud


1. From App Launcher, find and select Care Program Enrollees.
Alternatively, from the patient’s record page, go to the Related tab and navigate to the Care Program
Enrollee list.

Note Make sure you add the Related List Lightning component to the patient’s record page.

2.    Select the enrollee record associated where you want to add the ad hoc task.
3.    In the My Tasks section, expand the dropdown and select Add Task.
4.    On the Create Adhoc Tasks page, click Using Action Plan Template, and click Next.
5.    Select the therapy step where you want to add the task and select the action plan template.
6.    To select the tasks in the template, click the plus sign, and then click Next.
7.    On the Review Task Assignments page, update the assignments if needed, and then click Done.

<!-- page:975 -->



Create an Ad Hoc Task Without an Action Template

In a step of a therapy stage, create an ad hoc task from scratch by using the available options. You can
add up to 10 ad hoc tasks in a therapy stage.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access Multi-Step Scheduling features:            Manage Multi-Step Scheduling features

To create, edit and delete Health Cloud data:        Manage Health Cloud


1. From App Launcher, find and select Care Program Enrollees.
Alternatively, from the patient’s record page, go to the Related tab and navigate to the Care Program
Enrollee list.

Note Make sure you add the Related List Lightning component to the patient’s record page.

2. Select the enrollee record where you want to add the ad hoc task.
3. In the My Tasks section, expand the dropdown and select Add Task.
4. On the Create Ad Hoc Tasks page, click Create Tasks Without Using Action Plan Template, and then
click Next.
5. Fill these details.

Field                                                 Description

Select Step                                           Select the therapy step from the dropdown.

Relate To                                             Select the user or group to which you want to
assign the task.

Assigned To                                           Select the specific user or group.

Subject                                               Add the title of the task that you want to add.

Is Required                                           Select if you want to mark the task as required.

6. Save the changes.


Get a Complete View of an Enrollee's Advanced Therapy

Use the Advanced Therapy Management app to access all the information related to an advanced
therapy in one place, including the progress of work procedure steps (therapy stages), work order steps
(therapy substages), and therapy tasks. Also, track the execution of the orchestration flows from the

<!-- page:976 -->



Orchestration Run record page.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To access the Advanced Therapy Management            Health Cloud Advanced Therapy Orchestration
app:                                                 permission set


View the progression of the advanced therapy through the various stages in the Work Procedure Step
Progression section. In My Tasks, view the progress of therapy tasks assigned to you or other stakeholders
in a therapy. You can also view the scheduled, rescheduled, and canceled appointments in the
Appointment Slots section.

1. From App Launcher, find and select Advanced Therapy Management.
2. Select a care program enrollee record that’s associated with an advanced therapy.
View the Work Procedure Step Progression section, the My Tasks section, and the Appointment Slots
section.
3. From App Launcher, find and select Orchestration Run.
4. Select an orchestration record.
5. Go to the Related tab to view the orchestration stage and step runs.




Repeat a Stage in a Therapy Orchestration

Therapy Orchestration not only helps you perform smooth orchestration runs, but also helps mitigate
unexpected errors where a therapy stage has to be repeated.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Therapy Orchestration and Multi-Step Scheduling are used together in non-linear flows to reschedule
slots and rerun the orchestration. The workflows are reset to the beginning of a therapy stage and
executed again. You can repeat the chain of appointments from any stage of therapy and reassign a fresh
set of tasks to the relevant stakeholders in each therapy step.

Consider a situation where a clinician notices that the biosample was destroyed at the time of

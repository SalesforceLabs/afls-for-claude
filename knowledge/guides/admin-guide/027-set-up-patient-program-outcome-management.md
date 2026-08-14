<!-- guide:admin-guide section:set-up-patient-program-outcome-management pages:1039-1063 -->
# Set Up Patient Program Outcome Management



1. From the App Launcher, find and select Care Program Enrollee.
2. Click any care program enrollee.
3. Click the Financial Assistance Program tab, and then click Available Programs.
4. To launch a guided flow and to apply for a financial assistance program, click Reapply that
corresponds to the program.
5. In the Patient Details page, upload the proof of citizenship, and click Next.
6. In the Patient insurance Details page, select the prescribed drug, and Next.

Note In the Patient Insurance Details page, you can optionally add the secondary commercial
insurance details and upload the supporting documents.

7. In the Review and Submit Application page, review the application details, and click Submit.
8. Review the status of the application and expand the Verification Checklist to view the details of each
step of the application lifecycle.


View Benefit Disbursements Details for a Patient

View the details of the benefits that the patient has received. The disbursement details include the count
of benefit coupons and cards.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To view the benefit disbursement details:
- Manage Financial Assistance Program
permission set
- Health Cloud Starter permission set OR Health
Cloud Foundation permission set
-    Rule Engine Designer permission set
-    OmniStudio User permission set



1. From the App Launcher, find and select Care Program Enrollee.
2. Click any care program enrollee.
3. Click the Financial Assistance Program tab, and then click Assistance History.



Set Up Patient Program Outcome Management

Patient Program Outcome Management streamlines the process of defining program outcomes and
indicators, and connects program outcomes with patient progress, enabling measurement at the
outcome level. Enhance care program efficacy and get clear insights into patient and program

<!-- page:1040 -->



performance through Patient Program Outcome Management. Improve patient experience and
adherence by building your customized assessments and logic to compute indicator results, and evaluate
outcomes to refine patient service programs.

Patient Program Outcome Management harnesses the power of Einstein generative AI to generate the
program and patient outcome summary. These summaries empower program leads and patient services
reps with critical insights, enabling them to identify and address deviations from expected outcomes
early. This proactive approach makes sure that patients stay on track to achieve their goals, improving
overall program success.

With Patient Program Outcome Management, you can:

- Evaluate program and patient performance
- Enhance program effectiveness
- Improve program and patient outcomes
- Improve patient engagement, adherence, and satisfaction
- Reduce the patient drop-off risk
Here are some of the key offerings of Patient Program Outcome Management.


Patient Support Programs Console App

Patient Support Programs has a console app that serves as a one-stop shop for program leads and
patient services reps. This app centralizes all related functionalities, enabling easy access and
management. You can also configure the app to meet your specific business needs, enhancing overall
efficiency and effectiveness.


Program Outcome Summary Generation using Einstein Generative AI

Salesforce’s Einstein generative AI empowers program leads to obtain insightful summaries of program
outcomes, providing a clear understanding of how programs are performing against defined outcomes
over a specific period. These summaries help program leads identify underperforming programs and
take preventive measures to mitigate risks. Additionally, they support informed decision-making to
achieve better program outcomes.


Patient Outcome Summary Generation using Einstein Generative AI

With Salesforce’s Einstein generative AI capabilities, patient services reps can obtain the insightful
summary of an individual patient performance and engagement, and gain a clear understanding of the
patient performance against defined outcomes and periods. This summary helps patient services reps in
identifying the patient performance and improving patient engagement and adherence. It also helps in
identifying patient drop-off rates from a care program, and helps prevent such cases.


## User Personas for Patient Program Outcome Management

Patient Program Outcome Management has two types of activities. The optimal way to use Patient

<!-- page:1041 -->



Program Outcome Management is to divide and conquer these activity types with different user
personas.
Permission Sets for Patient Program Outcome Management Users
To get started with Patient Program Outcome Management, assign permission sets to your user
profiles based on their required level of access.
Patient Program Outcome Management Data Model and Permissions
Patient Program Outcome Management uses a variety of objects to capture program outcomes and
measures. A program lead defines the program outcome and indicators, and links patient progress
with program outcomes. A case manager works with patients and captures patient reported
outcomes.
Customize Picklist Values for Outcome and Indicator Entities
Customize the picklist values, making it easier for case managers to choose the appropriate options.
Add or Manage Data for Patient Program Outcome Management
To help your users get the most out of the Patient Program Outcome Management, configure your org
with the necessary data. Add a care program and a care program enrollee, define outcomes and
indicators, and calculate indicator result and party indicator result.
Indicator Result Calculation Flow
Use Patient Program Outcome Management to measure outcomes at the care program level. To have
consistent and real-time results, program leads can create a flow to calculate indicator results.
Patient Support Programs Console App
The Patient Support Programs console app in AFLS is a single-stop shop for patient
services reps and program leads to monitor different aspects of care programs and care program
enrollees. Program leads and patient services reps can customize this app to suit their needs and can
effectively manage their daily tasks by accessing the functionalities of patient support programs via
this app.
Einstein Generative AI for Patient Program Outcome Management
Harness the power of Einstein generative AI to streamline the daily tasks of program leads and patient
services reps. Patient Program Outcome Management uses Einstein generative AI-based flows to
generate patient and program outcome summary.
Generate Program Outcome Summary
With the power of Einstein generative AI, Patient Program Outcome Management enables program
leads to generate a comprehensive program summary for defined outcomes over a specific period.
This summary provides detailed insights into overall program performance and effectiveness. It also
helps program leads take informed decisions to mitigate risks and take the steps to improve the
overall program performance. These next best actions make sure that the program achieves the
intended outcomes and deliver value to patients.
Generate Patient Outcome Summary
Gain valuable insights into individual patient performance and engagement through a comprehensive
summary view. Patient Program Outcome Management uses Einstein generative AI capabilities to
generate patient outcome summary for defined outcomes over a specific period. This summary plays a
key role in identifying the patient drop-off risks and helps reps take the steps to improve patient
engagement and adherence.

<!-- page:1042 -->




User Personas for Patient Program Outcome Management

Patient Program Outcome Management has two types of activities. The optimal way to use Patient
Program Outcome Management is to divide and conquer these activity types with different user
personas.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


- Data Setup - Salesforce Admin: The program lead sets up the org with the right data. They define care
programs and products, enroll patients in care programs, and define program outcomes and
indicators to define their progress. Program leads can also generate the program and patient outcome
summaries, and can take preventive actions to mitigate any risks.
-    Track Patient Progress - Standard User: The patient services reps connects with patients, comprehends
their needs, aids them in their healthcare journey, tracks patient progress, and generates the patient
outcome summary. Reps can take preventive actions if the patients aren’t on track to achieve the
outcomes.


Permission Sets for Patient Program Outcome Management Users

To get started with Patient Program Outcome Management, assign permission sets to your user profiles
based on their required level of access.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


Here are the list of permission sets used in Patient Program Outcome Management.


Permission Set Name                                 Purpose

Access Patient Support Programs as a Case Agent     Give patient services reps access to patient
support programs.

Access Patient Support Programs as a Program        Give program leads access to patient support
Lead                                                programs.

Access Patient Support Programs Using Einstein      Expose patient support programs powered by
Einstein generative AI.

<!-- page:1043 -->




Permission Set Name                                  Purpose

Context Service Admin                                Enables the user to perform CRUD operations on
context entities/objects.

Context Service Runtime                              Enables the user to perform read operation on
context entities/objects.

Health Cloud Foundation                              Assigns read access to additional Health Cloud
platform capabilities.

Health Cloud Starter                                 Provides access to Health Cloud Starter features.

Patient Program Outcome Management                   Provides access to patient program outcomes and
its related functionalities.

Prompt Template Manager                              Manage prompt templates using Prompt Builder
and run them using generative AI features.

Prompt Template User                                 Run prompt templates using generative AI
features.


## See Also

Salesforce Help: Manage Permission Set Assignments


Patient Program Outcome Management Data Model and
Permissions

Patient Program Outcome Management uses a variety of objects to capture program outcomes and
measures. A program lead defines the program outcome and indicators, and links patient progress with
program outcomes. A case manager works with patients and captures patient reported outcomes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Here’s the set of objects used in Patient Program Outcome Management and the level of access that case
managers need for the objects.


Object                              Purpose                            Access


## Account                             Business Accounts represent        Read

organizations involved with your
business, and Person Accounts
represent patients.

<!-- page:1044 -->




Object                          Purpose                              Access


## Care Program                    Represents a set of activities,    Read

such as a patient therapy,
financial assistance, education,
wellness, or fitness plan, offered
to participants by an employer or
insurer.


## Care Program Enrollee           Represents a participant enrolled

in a care program.                • Create
- Read
- Edit
- Delete


## Indicator Assignment            Represents the assignment of an Read

indicator definition that's used to
measure the performance of an
outcome or a related activity.


## Indicator Definition            Represents information about       Read

the indicator assignment and the
process of measuring and
calculating the indicator results.


## Indicator Performance Period    Represents information about a       Read

specified time period including
the frequency of calculating
indicator results and the
baseline value of the indicator.


## Indicator Result                Represents the result of an

indicator assignment for the      •    Create
specified time period that can be •    Read
used to track the performance of •     Edit
the indicator.                    •    Delete



## Outcome                         Represents information about         Read

the expected change in
participants that is driven by the
organization's activity.


## Outcome Activity                Represents a junction between        Read

the outcome and the object
that's related to the activity
undertaken by an organization
to achieve that outcome.

<!-- page:1045 -->




Object                              Purpose                             Access


## Party Indicator Result              Represents information about a

party for which the indicator       • Create
result is calculated.               • Read
- Edit
- Delete


## Time Period                         Represents the time period          Read

that's used to calculate the
indicator performance and
result.


## Unit Of Measure                     Represents the units of measure     Read

for care metrics and care
observations.


## See Also

Discovery Framework Standard Objects


Customize Picklist Values for Outcome and Indicator Entities

Customize the picklist values, making it easier for case managers to choose the appropriate options.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To edit indicator assignments, indicator               Patient Program Outcome Management
definitions, outcomes, and outcome activities:         permission set


You must include picklist values for these Salesforce objects and their fields.


Object                                                Field

Indicator Assignment                                  Indicator Assignment Type

Status

Indicator Definition                                  Status

Outcome                                               Status

Term

<!-- page:1046 -->




Object                                              Field

Outcome Activity                                    Type


1.    From the object management settings for indicator assignment object, go to Fields and Relationships.
2.    Select Indicator Assignment Type.
3.    In the Indicator Assignment Type Picklist Values section, click New.
4.    Enter Outcome and Care Program. Enter each value on its own line.

Note You can configure any value based on your business needs, but the Patient Program
Outcome Management data model supports the calculation of indicator results at the care
program and outcome levels.

5. Save your changes.
You’ve configured the picklist values for the Indicator Assignment Type field for the Indicator
Assignment object.
6. Similarly, add the Outcome and Care Program values for the Type field for the Outcome Activity
object.
7. Similarly, configure the picklist values for all fields mentioned in the table.


Add or Manage Data for Patient Program Outcome Management

To help your users get the most out of the Patient Program Outcome Management, configure your org
with the necessary data. Add a care program and a care program enrollee, define outcomes and
indicators, and calculate indicator result and party indicator result.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud



## Define Care Programs and Care Program Enrollees

Patient Program Outcome Management uses care program and care program enrollee as the
backbone of its operation. To create a care program, define the program and the relationships and
activities within it. To create a care program enrollee, define a person account.
Define Outcomes and Outcome Activities
Add outcomes to track the changes that you expect to see in care program enrollees and ultimately at
a care program level. Use outcome activities to connect outcomes to the efforts, such as care
programs or care program enrollees, that contribute to the end goal.
Indicators for Measuring Results
Measure outcomes consistently by creating a library of indicators, connect those indicators to what
you’re measuring, and add time-bound baseline and target values to track your results against.
Connect indicator definitions to programs to track the effectiveness of programs. Connect indicator
definitions to outcomes to track the effectiveness of the tasks that are done by participants.
Indicator Results for Tracking Progress

<!-- page:1047 -->



Measure the value of indicator assignments with indicator results.


Define Care Programs and Care Program Enrollees

Patient Program Outcome Management uses care program and care program enrollee as the backbone
of its operation. To create a care program, define the program and the relationships and activities within
it. To create a care program enrollee, define a person account.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create care program records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set

To create care program enrollee records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set


Make sure that you create records for the Account object to represent the patient.

1. Create a care program.
a. From the App Launcher, find and select Care Programs.
b. Click New, and enter the name of the care program.
For example, create a care program called Diabetes Control for patients who have high blood sugar.
c. If needed, select the parent program associated with the care program.
d. Select a category for the care program.
For example, to use a care program in the patient support program record, select Patient Services
as the category.

Note Make sure that you add the Category field to the Care Program page layout.

e. Enter the start date of the care program.
f. If necessary, enter the program’s end date.

<!-- page:1048 -->



g. Add a description for the care program.
h. Select the status of the care program.
i. Find and select a program sponsor, if any.
j. Save your changes.
2. Create a care program enrollee.
a. From the App Launcher, find and select Care Program Enrollees.
b. Click New, and enter the name of the care program enrollee.
c. In Care Program, select the care program record that you want to enroll the care program enrollee
to.
d. Select an account.
e. Select the status of the care program enrollee.
f. Save your changes.


Define Outcomes and Outcome Activities

Add outcomes to track the changes that you expect to see in care program enrollees and ultimately at a
care program level. Use outcome activities to connect outcomes to the efforts, such as care programs or
care program enrollees, that contribute to the end goal.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create an outcome:                               Patient Program Outcome Management
permission set

To create an outcome activity:                      Patient Program Outcome Management
permission set


1. From the App Launcher, find and select Outcomes.
2. Click New.
3. Enter a name that describes the outcome.
4. Select the status.
5. If needed, select the intended direction and term, and enter a description.
6. Save your work.
7. In the Outcome Activities related list, click New.
8. Name the outcome activity.
9. Select the type.
For example, the Care Program.
10. Enter the record that you want to track in the lookup field that matches what you selected in the Type
field.
For example, if you selected Care Program as the type, use the Care Program field to look up and

<!-- page:1049 -->



connect to the care program that you want to measure.
11. Save your work.
12. Similarly, add other outcome activities as needed.


Indicators for Measuring Results

Measure outcomes consistently by creating a library of indicators, connect those indicators to what
you’re measuring, and add time-bound baseline and target values to track your results against. Connect
indicator definitions to programs to track the effectiveness of programs. Connect indicator definitions to
outcomes to track the effectiveness of the tasks that are done by participants.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To use Patient Program Outcome Management:          Patient Program Outcome Management
permission set



## Define Indicator Definitions

Use Indicator Definitions to build your library of indicators to consistently measure your outcomes.
Define Indicator Assignments
Use Indicator Assignments to connect indicator definitions to multiple outcomes or care programs.
Define Time Periods
Define time periods to calculate the indicator performance and result. This time period is used in
indicator performance period.
Define Indicator Performance Periods
Define indicator performance periods so that you can measure time-bound indicator results.


Define Indicator Definitions

Use Indicator Definitions to build your library of indicators to consistently measure your outcomes.

1.    From the App Launcher, find and select Indicator Definitions.
2.    Click New.
3.    Enter a name that describes the indicator definition.
4.    Select the status.
5.    Select the unit of measure.

Tip If you don’t see the unit of measure that you want to use, talk to your Salesforce admin before
you add any unit of measure so that you can maintain a clean list.

6. If needed, enter a description.

<!-- page:1050 -->



7. Save your changes.


Define Indicator Assignments

Use Indicator Assignments to connect indicator definitions to multiple outcomes or care programs.

1. From the App Launcher, find and select Indicator Definitions.
2. Click the indicator definition that you want to connect to what you’re measuring.
3. Go to the related lists.
4. In the Indicator Assignments related list, click New.
5. Enter a name that describes the indicator assignment.
6. Select the indicator assignment type.
For example, Care Program or Outcome.
7. Enter the record that you want to measure this lookup field for the selected indicator assignment type.
For example, if you selected Outcome as the type, use the Outcome field to look up and connect to
the outcome that you want to measure.
8. Select the status.
9. Save your work.


Define Time Periods

Define time periods to calculate the indicator performance and result. This time period is used in
indicator performance period.

1. From the App Launcher, find and select Time Periods.
2. Click New.
3. Enter a name that describes the time period.
For example, if you measure indicators by quarters, name the time period Q1FY23.
4. Enter the start date and time.
5. Enter the end date and time.
6. Save your work.
7. Similarly, define more time periods, if needed.


Define Indicator Performance Periods

Define indicator performance periods so that you can measure time-bound indicator results.

1.   From the App Launcher, find and select Indicator Performance Periods.
2.   Click New.
3.   Enter a name that describes the indicator performance period.
4.   Select the time period.
5.   Select the indicator assignment.
6.   To track the target values for this time period, enter a target value and select the target progress.
7.   To track the baseline values for this time period, enter a baseline value.
8.   In Description and Baseline Description, enter additional details, if necessary.

<!-- page:1051 -->



9. Save your work.


Indicator Results for Tracking Progress

Measure the value of indicator assignments with indicator results.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To use Patient Program Outcome Management:             Patient Program Outcome Management
permission set



## Data Aggregation for Indicator Results

Before you enter an aggregated result value, you must collect the data about what you’re measuring.
To collect data for indicator result calculation, you can use various venues, such as by talking to care
program enrollees in person or on the phone, and through the assessment or survey tools available in
Salesforce, online forms, and external datasets.
Automatically Calculate Indicator Results from Data in Your Org
Add a flow to calculate the indicator results to an indicator definition and, with the click of a button,
generate the indicator results associated with an indicator performance period.
Manually Add and Manage Indicator Results
Enter indicator results to track them against time-bound, baseline, and target values.
Manually Add and Manage Party Indicator Results
Enter the party indicator results associated with the indicator results.


Data Aggregation for Indicator Results

Before you enter an aggregated result value, you must collect the data about what you’re measuring. To
collect data for indicator result calculation, you can use various venues, such as by talking to care
program enrollees in person or on the phone, and through the assessment or survey tools available in
Salesforce, online forms, and external datasets.

Use Discovery Framework and Assessments, a survey or assessment tool from Salesforce, to collect data.
Program leads can set up custom assessments by using Discovery Framework. See Create an Assessment
with Discovery Framework.

You can use Patient Program Outcome Management data model with Discovery Framework and
Assessments to gather data for indicator result calculation. You can use Salesforce flows with your own
outcome calculation algorithms to store results in the Patient Program Outcome Management data
model.

<!-- page:1052 -->




Automatically Calculate Indicator Results from Data in Your Org

Add a flow to calculate the indicator results to an indicator definition and, with the click of a button,
generate the indicator results associated with an indicator performance period.

1. Add the flow to an indicator definition.
a. From Setup, in the Quick Find box, enter Flows, and then select Flows.
b. Copy the API name of the flow that your admin created to calculate indicator results.
c. From the App Launcher, find and select the indicator definition associated with the indicator
performance period that you want to calculate indicator results for.
d. On the indicator definition, in Flow Definition API Name, paste the flow API name.
2. Run the flow to create indicator results.
a. Go to the related lists on the indicator definition, and select an indicator assignment.
b. Go to the related lists on the indicator assignment, and select the indicator performance period that
you want to measure the results for.
c. Click Calculate Indicator Results.


Manually Add and Manage Indicator Results

Enter indicator results to track them against time-bound, baseline, and target values.

1.   Aggregate the data collected.
2.   Find the indicator performance period that you want to add an indicator result to.
3.   Click Related.
4.   On the Indicator Results related list, click New.
5.   Enter a result value.
6.   Enter a measurement date.
7.   To track interim or final results, select the result type.
8.   In Description, provide more information about the results.
9.   Save your work.

Similarly, you can create a flow to automatically populate the indicator results.


## See Also

Salesforce Help: Indicator Result Calculation Flow


Manually Add and Manage Party Indicator Results

Enter the party indicator results associated with the indicator results.

1.   From the App Launcher, find and select Party Indicator Results.
2.   Click New.
3.   Find the indicator result.
4.   Enter a measurement date.
5.   Enter a result value.

<!-- page:1053 -->



6. In Party, find and select the care program enrollee.
7. Save your work.

Similarly, you can create a flow to automatically populate the party indicator results.


Indicator Result Calculation Flow

Use Patient Program Outcome Management to measure outcomes at the care program level. To have
consistent and real-time results, program leads can create a flow to calculate indicator results.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


The Patient Program Outcome Management data model supports manual and automatic calculation of
indicator results. Program leads can create a flow of the Indicator Results Process type that automatically
creates the indicator results and populates the final score in the Result Value field on the Indicator Result
object.

Let’s look at an example where Charles Green is a care program enrollee who is enrolled in a Diabetes
Management care program. To calculate the indicator results, the admin first defines outcomes such as
Improve Quality of Life and Improve Patient Engagement, and link these outcomes with the Diabetes
Management care program on the Outcome Activity object.

Next, the admin defines Improve Quality of Life via Assessments in an indicator definition record. In the
Indicator Assignment record, the admin can link this indicator definition with care program or outcomes.
Calculate an indicator result at a care program or at an outcome level depending on the value selected in
the Indicator Assignment Type field on the Indicator Assignment object. Also, define the start and end
dates on the Time Period object. Create an indicator performance period record to link an indicator
assignment and period.

Lastly, based on your business needs, create a flow of the Indicator Result Flow process type and build a
logic to calculate the indicator result for a given period. To calculate the indicator result, the flow collates
the response value score for each assessment question response.

When you use this flow, keep these considerations in mind.

- If you’re creating a custom flow, to show the Calculate Indicator Results button on indicator
performance periods, use the Indicator Result Flow process type. The button appears only if the linked
flow is active. Click the button on an indicator performance period to run the flow that’s on the
associated indicator definition.
-    To calculate results when a user doesn’t have access to all the records that are used to calculate the
results, run the flow in system context to get accurate results.
-    In Setup, add the Flow API Name field to the flow list view so that users without the Manage Flow app

<!-- page:1054 -->



permission can copy the flow API name and run the flow.


## See Also

Salesforce Help: Build a Flow


Patient Support Programs Console App

The Patient Support Programs console app in AFLS is a single-stop shop for patient
services reps and program leads to monitor different aspects of care programs and care program
enrollees. Program leads and patient services reps can customize this app to suit their needs and can
effectively manage their daily tasks by accessing the functionalities of patient support programs via this
app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Assign Permissions to Users

To access the Patient Support Programs console app, admins must assign the Access Patient Support
Programs as a Program Lead permission set to themselves and the Access Patient Support Programs as a
Case Agent permission set to patient services reps.


Patient Support Programs Console App for Program Leads

Program leads can configure this app to create customized dashboards and reports to track program
performance. They can create custom components to track the number of enrollees enrolled in a
particular care program and how well that program is performing. This app acts as a single stop to
evaluate the performance of programs and to identify the ones that don't meet the intended outcomes,
helping program leads take preventive actions to mitigate any risks.


Patient Support Programs Console App for Patient Services Reps

Patient services reps can also personalize this app by creating custom dashboards and reports related to
the care program enrollees, and can track their performance against defined outcomes. This
personalized space can be enhanced using custom components and can help reps improve patient
engagement and adherence, and can reduce patient drop-off risks.


Einstein Generative AI for Patient Program Outcome Management

Harness the power of Einstein generative AI to streamline the daily tasks of program leads and patient

<!-- page:1055 -->



services reps. Patient Program Outcome Management uses Einstein generative AI-based flows to
generate patient and program outcome summary.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


Patient Program Outcome Management embeds generative AI capabilities to help program leads and
patient services reps to summarize program and patient outcomes. Generate multiple summaries based
on your selected outcomes and time period. Use our built-in prompt templates to improve efficiency and
accuracy, leading to better outcomes.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.



## Turn On Einstein for Patient Support Program

Give your patient services reps access to the Einstein generative AI by turning on Einstein for patient
support programs.
Context Definition Understanding and Enablement
Patient Program Outcome Management uses Einstein generative AI to generate patient and program
outcome summaries. These summaries are generated using a screen flow, which in turn uses context
service to fetch the data. Before context service performs its magic, you must turn on context
definition.
Workflow of Program and Patient Outcome Summary Generation
Patient Program Outcome Management has two flows that use Einstein’s generative AI to generate the
program and patient outcome summary. Generate program and patient outcome summary by using
Flow Builder, Context Services, Prompt Template, and Embedded AI. Explore how these capabilities
work together, the key steps in summary generation, and the prerequisites before making any
customizations.


Turn On Einstein for Patient Support Program

Give your patient services reps access to the Einstein generative AI by turning on Einstein for patient
support programs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein

<!-- page:1056 -->




GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED


## To enable Einstein AI

Customize Application and Access Patient Support
Programs Using Einstein (for AFLS)

OR

Customize Application (for Health Cloud)


1. Turn On Einstein Generative AI:
a. From Setup, in the Quick Find box, enter and then select Einstein Setup.
b. Enable Turn on Einstein.
2. From Setup, in the Quick Find box, enter Life Sciences, and then select Patient Support Program
Settings.
3. Turn on Einstein for Patient Support Program.


## See Also

Salesforce Help: Set Up Einstein Generative AI


Context Definition Understanding and Enablement

Patient Program Outcome Management uses Einstein generative AI to generate patient and program
outcome summaries. These summaries are generated using a screen flow, which in turn uses context
service to fetch the data. Before context service performs its magic, you must turn on context definition.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


Patient Program Outcome Management comes with two predefined context definitions,
CareProgramOutcomeSummary and PatientOutcomeSummary, that enable the efficient retrieval and
consumption of data in program and patient outcome summary.



## Important You can’t edit or remove the CareProgramOutcomeSummary and

PatientOutcomeSummary context definitions. If you want to change anything, first clone it, and
then make the changes.



## Each context definition has two mappings, CareProgramSummaryMapping, and

OutcomeSummaryMapping. These two mappings are created to fetch data for indicator results at the
care program and outcomes levels.

<!-- page:1057 -->




CareProgramOutcomeSummary

The CareProgramOutcomeSummary context definition hydrates data for program outcome summary
generation. The nodes and attributes in this structure are mapped to the Indicator Assignment, Indicator
Performance Period, Indicator Result, and Outcome Activity objects.


PatientOutcomeSummary

The PatientOutcomeSummary context definition hydrates data for patient outcome summary
generation. The nodes and attributes in this structure are mapped to the Indicator Assignment, Indicator
Performance Period, Indicator Result, Party Indicator Result, and Outcome Activity objects.


Turn On Context Service

See Turn On Context Service.


## See Also

Salesforce Help: Context Service


Workflow of Program and Patient Outcome Summary Generation

Patient Program Outcome Management has two flows that use Einstein’s generative AI to generate the
program and patient outcome summary. Generate program and patient outcome summary by using
Flow Builder, Context Services, Prompt Template, and Embedded AI. Explore how these capabilities work
together, the key steps in summary generation, and the prerequisites before making any customizations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses



## Capabilities for Summary Generation

Explore the capabilities that are used to generate program and patient outcome summary.
Key Steps to Generate Program Outcome Summary
Use Einstein Embedded AI to trigger a Salesforce flow that uses invocable action to map data into a
suitable format. Use Context Service to hydrate the data related to program outcome summary, and
pass the information into process automation tools. Create a prompt template to include the specific
instructions to be used for generating a summary.
Key Steps to Generate Patient Outcome Summary
Use Einstein Embedded AI to trigger a Salesforce flow that uses invocable action to map data into a
suitable format. Use Context Service to hydrate the data related to patient outcome summary, and
pass the information on to process automation tools. Create a prompt template to include specific

<!-- page:1058 -->



instructions to be used for generating a summary.


Capabilities for Summary Generation

Explore the capabilities that are used to generate program and patient outcome summary.

- Einstein Embedded AI: Einstein Embedded AI integrates intelligent features directly into Salesforce
workflows, providing predictive analytics, automated insights, and personalized recommendations to
enhance decision-making and efficiency for all users.
-   Flow Builder: Flow Builder is a declarative tool for building complex workflows. Elements in a flow can
run various actions, such as aggregate data, create or update records, and assign values to resources.
See Flow Builder.
-   Invocable Actions: Use invocable actions to create reusable actions or methods that can be invoked
from process builders, flows, or even external applications via REST API calls.
-   Context Service: Context Service enables easy retrieval and consumption of information in tools such
as Flows. It comprises context definitions, which is a structured set of data required to run a process.
Patient Program Outcome Management has predefined context definitions called
CareProgramOutcomeSummary and PatientOutcomeSummary that are used in program and patient
outcome summary generation. See Context Service.
-   Einstein generative AI: Einstein generative AI uses advanced models to generate human-like text and
content, enabling dynamic content creation, automated responses, and improved customer
interactions within Salesforce.
-   Prompt Template: Prompt Template is a reusable prompt that includes placeholders for specific details
about the context in which the template is being used. After the placeholders are filled with relevant
data, you can use this prompt template to connect with Large Language Models (LLM) to perform
specific tasks such as creating a summary and sending an email. See Create a Prompt Template.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


Key Steps to Generate Program Outcome Summary

Use Einstein Embedded AI to trigger a Salesforce flow that uses invocable action to map data into a
suitable format. Use Context Service to hydrate the data related to program outcome summary, and pass
the information into process automation tools. Create a prompt template to include the specific
instructions to be used for generating a summary.

Review the key steps in the program outcome summary generation process by using the predefined
context definitions, invocable actions, and a screen flow.

1. After the indicator results are calculated, admins can generate a program outcome summary.
2. On any care program record page, the Generate Program Summary button launches the Generate
Care Program Summary screen flow.
3. To retrieve all information related to a program outcome summary, the flow invokes the Ls

<!-- page:1059 -->




## Commercial Context Data Provider invocable action which takes data from the

CareProgramOutcomeSummary context definition. The outcome data returned by the context service
is used in the succeeding steps.
4. After further calculations, the flow invokes the Serialize Apex Records To Stringified JSON invocable
action to serialize the records returned by apex class into Stringified JSON.
5. At the end, the flow invokes the programOutcomeSummary invocable action that calls the Summarize
Patient Support Program Outcomes prompt template. The output from the Summarize Patient
Support Program Outcomes prompt template is passed to Large Language Models (LLM) which in turn
generates the required text. The final text returned by LLM is shown to users as the program outcome
summary.

Note Info: By default, the Summarize Patient Support Program Outcomes prompt template uses
the OpenAI GPT 4 Turbo model. You can’t edit or remove the Summarize Patient Support
Program Outcomes prompt template. To make changes to the template, open the Summarize
Patient Support Program Outcomes prompt template from Setup, and create a copy by
clicking Save as.

Important Info: The Summarize Patient Support Program Outcomes prompt template generates
the program outcome summary where outcome is associated with Indicator Assignment. To
generate the summary where the care program is associated with Indicator Assignment, you must
customize the prompt template according to your business needs.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Standard Prompt Templates
Salesforce Help: Changing LLM Configurations


Key Steps to Generate Patient Outcome Summary

Use Einstein Embedded AI to trigger a Salesforce flow that uses invocable action to map data into a
suitable format. Use Context Service to hydrate the data related to patient outcome summary, and pass
the information on to process automation tools. Create a prompt template to include specific
instructions to be used for generating a summary.

Here are the key steps in the patient summary generation process by using the predefined context
definitions, invocable actions, and a screen flow.

1. After the indicator results are calculated, patient services reps can generate a patient outcome
summary.
2. On any care program enrollee record page, the Generate Patient Summary button launches the
Generate Patient Summary screen flow.
3. To retrieve all information related to a patient outcome summary, the flow invokes the Ls Commercial
Context Data Provider invocable action which takes data from the PatientOutcomeSummary context
definition. The outcome data returned by the context service is used in the succeeding steps.

<!-- page:1060 -->



4. After further calculations, the flow invokes the Serialize Apex Records To Stringified JSON invocable
action to serialize the records returned by apex class into Stringified JSON.
5. At the end, the flow invokes the patientOutcomeSummary invocable action that calls the Summarize
Patient Outcomes prompt template. The output from the Summarize Patient Outcomes prompt
template is passed to Large Language Models (LLM) which in turn generates the required text. The
final text returned by LLM is shown to users as a patient outcome summary.

Note Info: By default, the Summarize Patient Outcomes prompt template uses the OpenAI GPT 4
Turbo model. You can’t edit or remove the Summarize Patient Outcomes prompt template. To
make changes to the template, open the Summarize Patient Outcomes prompt template from
Setup, and create a copy by clicking Save as.

Important Info: The Summarize Patient Outcomes prompt template generates the patient
outcome summary where outcome is associated with Indicator Assignment. To generate the
summary where the care program is associated with Indicator Assignment, customize the prompt
template to meet your business needs.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Standard Prompt Templates
Salesforce Help: Changing LLM Configurations


Generate Program Outcome Summary

With the power of Einstein generative AI, Patient Program Outcome Management enables program leads
to generate a comprehensive program summary for defined outcomes over a specific period. This
summary provides detailed insights into overall program performance and effectiveness. It also helps
program leads take informed decisions to mitigate risks and take the steps to improve the overall
program performance. These next best actions make sure that the program achieves the intended
outcomes and deliver value to patients.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED


## To generate a patient outcome summary for

program leads:                                       Context Service Admin permission set

<!-- page:1061 -->




USER PERMISSIONS NEEDED


AND

Context Service Runtime permission set

AND

Prompt Template Manager permission set

AND

Prompt Template User permission set

AND

Access Patient Support Programs as a Program
Lead permission set

AND

Patient Program Outcome Management
permission set


The summary is divided into three sections. The first section highlights the program’s performance
against the defined outcomes and time period. The second section outlines what is going well, while the
third section identifies areas that need improvement along with recommended next best actions. You
can easily copy the summary with a single click.


Important If you wish to customize the GenerateCareProgramSummary flow as per your business
needs, you must implement the TransposeContext interface.


You can easily generate the program outcome summary for any care program with just the click of one
button.

1. From the App Launcher, find and select Care Program.
2. Click any care program.
3. Click Generate Program Summary.
The Generate Care Program Summary screen flow is launched.
4. To proceed, click Got It.


5. On the next screen, select the outcomes against which you want to generate the summary. You can
select All, or any individual outcomes, and click Next.
6. On the next screen, select the time period against which you want to generate the summary, and click
Next.
The program outcome summary is generated.

<!-- page:1062 -->



Here’s a sample program outcome summary.




To copy the program outcome summary, click Copy. You can share this summary with the patient,
healthcare provider, or practitioner.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Einstein Generative AI & Trust


Generate Patient Outcome Summary

Gain valuable insights into individual patient performance and engagement through a comprehensive
summary view. Patient Program Outcome Management uses Einstein generative AI capabilities to
generate patient outcome summary for defined outcomes over a specific period. This summary plays a
key role in identifying the patient drop-off risks and helps reps take the steps to improve patient
engagement and adherence.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED


## To generate a patient outcome summary for

program leads:                                        Context Service Admin permission set

AND

Context Service Runtime permission set

AND

Prompt Template Manager permission set

AND

Prompt Template User permission set

AND

<!-- page:1063 -->




USER PERMISSIONS NEEDED


Access Patient Support Programs as a Program
Lead permission set

AND

Patient Program Outcome Management
permission set


## To generate a patient outcome summary for

patient services reps:                                Context Service Admin permission set

AND

Context Service Runtime permission set

AND

Prompt Template Manager permission set

AND

Prompt Template User permission set

AND

Access Patient Support Programs as a Case Agent
permission set

AND

Patient Program Outcome Management
permission set


The summary is divided into three sections. The first section highlights the patient’s performance against
the defined outcomes and time period. The second section outlines what is going well, while the third
section identifies areas that need improvement along with recommended next best actions. This
summary can be easily copied with a single click.


Important If you wish to customize the Generate Patient Summary flow as per your business needs,
you must implement the TransposeContext interface.


You can easily generate the patient outcome summary for any care program enrollee with just the click of
one button. Here are the steps to generate a patient outcome summary.

1. From the App Launcher, find and select Care Program Enrollee.
2. Click any care program enrollee.

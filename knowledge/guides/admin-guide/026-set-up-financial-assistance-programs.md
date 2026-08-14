<!-- guide:admin-guide section:set-up-financial-assistance-programs pages:994-1038 -->
# Set Up Financial Assistance Programs





Note To assign this healthcare provider as the primary provider, select Primary Provider.

3. Save your changes.



Set Up Financial Assistance Programs

Financial Assistance Program streamlines the enrollment of patients, helping them manage out-of-
pocket medical expenses. Patient service reps can identify suitable assistance programs based on
specific criteria and apply on behalf of the enrollees. Reps can view the status of the application and the
history of any financial assistance that was provided to the enrollee. If the application is rejected, the
patient service rep can file an appeal. After the application is approved, another patient service rep can
view the details of the benefit disbursement, such as the count and benefit of reimbursed Copay
coupons.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


By leveraging scalable orchestration and automating processes, companies can significantly reduce
enrollment time, ensuring faster access to assistance for eligible patients. Financial assistance programs
enhance patient enrollment and adherence, minimize dropouts, and improve access to care through
streamlined patient service programs. By empowering your patient service rep to efficiently guide and
enroll patients, companies can improve access to care and overall program and patient outcomes.

The enrollment of a patient in a financial assistance program includes these steps.

<!-- page:995 -->




Apply for a Financial Assistance Program

Your patient service reps can create an application to enroll a patient in a suitable assistance program.
They can connect with patients, get their details, and submit the application on their behalf.

The application to enroll a patient in a suitable financial assistance program goes through multiple
eligibility criteria. The program checks the patient eligibility by verifying their insurance type and benefits
status. If the patient is eligible, then it calculates and assigns benefits, and finally disburses the benefits.
If the application doesn't meet all the defined criteria, then it gets rejected. You can easily configure the
eligibility criteria based on your business needs.


File an Appeal

For the rejected applications, patient service reps can file an appeal. Typically, the reps fix the issues
because of which the application got rejected and submits an appeal. If all the issues were fixed, then
the appeal can be approved or even rejected by another patient service rep. You can configure an appeal
assignment by defining your rules according to your business requirements.

Salesforce provides the ability for your admins and service reps to define the limit to file an appeal
against one application. Your admin can define the timeout for an appeal. By default, an appeal is timed
out if there’s no action taken on it within 30 days after it's filed.


## Financial Assistance Program Data Model and Permissions

Financial Assistance Program uses a data model that supports interoperability. Enable you patient
services representative to apply for a financial assistance application and file an appeal on behalf of a
care program enrollee by assign appropriate level of access to the relevant objects.
Permission Sets for Financial Assistance Program Users
To get started with Financial Assistance Program, assign the appropriate permission sets to your users.
Set Up the Business Rules Engine for Financial Assistance Programs
Set up the Business Rules Engine (BRE) to create complex lookups and calculations in Financial
Assistance Programs. Before setting up BRE, provide the BRE Rule Engine Runtime permissions to your
users. The BRE configurations include creating lookup tables and expression sets for financial
assistance program eligibility and financial assistance program recommendation.
Set up Assessment for Financial Assistance Program
To enable Assessments, you must install Omnistudio, enable Discovery Framework, and update the
Omnistudio settings.
Configure Care Limit Type
To determine the financial assistance that's available to a care program enrollee, define care limit types
such as copay, co-insurance, and total out-of-pocket expenses. If you have configured Benefits
Verification on your org, the copay care limit type is created already.
Update Page Layout Configurations for Financial Assistance Program
Certain fields on the objects that are required for using Financial Assistance Program aren’t available
on the objects, by default. You must edit the objects and add them to the object.
Customize Picklist Values for Financial Assistance Program Fields

<!-- page:996 -->



To make it easier for patient services representatives to choose the appropriate options, customize the
picklist values for fields in Financial Assistance Program objects.
Data Management for Financial Assistance Program
To help your users get the most out of Financial Assistance Programs, configure your org with the
necessary data.
Refresh the Financial Assistance Program Decision Tables
Refresh the decision tables to include the changes that you made to the Program and Program
Recommendation Rules objects. You must refresh the decision tables each time after you update
these objects.
Financial Assistance Program Flows
Enable your patient service reps to apply for financial assistance programs on behalf of enrollees by
using Salesforce flows. Understand how these flows work together, the key steps in enrollment for an
assistance program, and the prerequisites before making any customizations.
Update the Application Appeal Limit
When an application is rejected, a patient service representative can file an appeal to address the
issues that caused the initial rejection. When your reps file an appeal, they can use the rejection
comments to resolve specific issues.
Add Financial Assistance Program to the Care Program Enrollee Record Page
Enable your patient services representatives to apply for a financial assistance program on behalf of a
patient by adding the FinancialAssistanceProgramContainer FlexCard to the Care Program
Enrollee record page.
Create Sharing Rules for Financial Assistance Program
A user sharing rule is a special type of criteria-based sharing rule that you use to grant record access to
the users. For each rule, you assign access permissions to a specific set of users.
Edit the Organization-Wide Sharing Defaults for Financial Assistance Program
Edit the organization-wide default sharing default settings on certain objects to provide access to a set
of users.
Edit Field-Level Security Settings for User Profiles in Financial Assistance Program
Edit the field-level security settings for the Applicant and the Application Form objects to provide edit
access to certain user profiles.
Create and Activate a Service Process Definition
Create a service process definition in the Service Process Studio and activate it so that when a patient
service rep files an appeal, the case record gets linked with the relevant application form ID.
Use Financial Assistance Program
Financial Assistance Program streamlines the process of enrolling a patient in an assistance program. It
reduces the turnaround time to onboard patients and gather their insurance details, and ensures
seamless access to healthcare by enrolling them in a suitable assistance program.


Financial Assistance Program Data Model and Permissions

Financial Assistance Program uses a data model that supports interoperability. Enable you patient
services representative to apply for a financial assistance application and file an appeal on behalf of a

<!-- page:997 -->



care program enrollee by assign appropriate level of access to the relevant objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Here’s the set of objects and the level of user access required for the Financial Assistance Program
application and appeal process.


Object                              Purpose                              Access


## Applicant                           Represents information about

the individual that’s applying for   • Create
the Financial Assistance             • Read
Program.


## Application Form                    Represents the high-level

information of an application        • Create
that's submitted for the             • Read
program.
Assign the View All Records
permission to enable patient
services representatives to view
the applications submitted by
other patient services
representatives.


## Application Form Relation           Represents the relationship

between an application form          • Create
and the program.                     • Read


## Assessment                          Stores the header data for an

assessment.                          • Create
- Read


## Assessment Question                 Represents the container object

that stores the questions            • Read
required for an assessment.


## Assessment Question Response        Represents the container object

that stores the questions            • Create
required for an assessment.          • Read


## Assessment Question Version         Stores the question versions for

the assessment questions.            • Read

<!-- page:998 -->




Object                          Purpose                             Access


## Benefit                         Represents information about

benefits associated with the        • Read
program.                            • Edit


## Benefit Assignment              Represents the enrollment

information of an individual that   • Create
is captured in an application.      • Read


## Benefit Disbursement            Represents the allocation of an

enrollee's benefit that can be      • Create
made as monetary or non-            • Read
monetary with different
frequencies.


## Benefit Type                    Represents information about

the type of benefits                • Read


## Care Benefit Verify Request     Request for verification of

benefits.                           • Read

Care Program                    Represents a set of activities,
such as a patient therapy,         • Read
financial assistance, education,
wellness, or fitness plan, offered
to participants by an employer or
insurer.


## Care Program Enrollee           Represents a participant enrolled

in a care program.                • Read


## Care Program Enrollee Product   Represents the affiliation

between a care program enrollee • Read
and a care program product, a
care program provider, or both.


## Care Program Product            Represents the affiliation

between a care program and a        • Read
care program product, care
program provider, or both.


## Case                            Represents an appeal filed for a

rejected application.               • Create
- Edit
- Read

<!-- page:999 -->




Object                          Purpose                                 Access


## Coverage Benefit                Represents the benefits provided

to a covered member by a         • Read
purchaser’s plan.                • Edit


## Coverage Benefit Item           Specific service covered by the

insurance plan.                         • Read


## Coverage Benefit Item Limit     Allows you to track details

associated with a specific benefit      • Read
as it relates to expenditures,
limits, coverage levels, eligibility,
and exclusion.


## Medication                      Represents detailed information

about different medications.            • Read


## Medication Request              Represents a request or order for

the supply of medication, along         • Read
with information about how it
should be administered.


## Member Plan                     Represents details about the

insurance coverage for a                • Read
member or subscriber.


## Omni Process Assessment         Represents a junction between

Question Version                an OmniScript process and an            • Read
assessment question version.

Process exception               Represents a business exception,
such as a processing failure on         • Create
an order summary.                       • Read


## Program                         Represents information about

the enrollment and                      • Read
disbursement of benefits in a
program.


## Program Enrollment              Represents details of enrollment

for benefits in a program.              • Read


## Purchaser Plan                  Represents the payer plan that a

purchaser makes available to its        • Read
members and members’
dependents.

<!-- page:1000 -->




Object                              Purpose                           Access


## Service Catalog Request             Represents a request made by a

user using the Service Catalog.   • Create
- Edit
- Read


## Service Catalog Item                Represents the dependencies of

Dependency                          a service catalog item            • Create
- Edit
- Read


## See Also

AFLS Developer Guide: Financial Assistance Program


Permission Sets for Financial Assistance Program Users

To get started with Financial Assistance Program, assign the appropriate permission sets to your users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Permission                                           Purpose

Health Cloud Foundation                              Assigns read access to additional Health Cloud
platform capabilities.

Health Cloud Starter                                 Provides access to Health Cloud Starter features.

Industry Service Excellence                          Gives the admin access to objects and features for
Industry Service Excellence.

Manage Financial Assistance Program                  Give users access to the Financial Assistance
Program and its features.

OmniStudio Admin                                     Allows admin users to configure Omniscripts,
Dataraptors, Integration Procedures, and
Flexcards. This permission set also provides
calculation runtime access.

OmniStudio User                                      Allows users to execute Omniscripts, Dataraptors,
Integration Procedures, and Flexcards. This
permission set also provides calculation runtime
access.

<!-- page:1001 -->




Permission                                           Purpose

Rule Engine Designer                                 Provides read and edit access to the calculate run
time objects.

Rule Engine Runtime                                  Provides read access to the calculate run time
objects.


## See Also

Data Protection and Privacy: Assign Permission Set to Users


Set Up the Business Rules Engine for Financial Assistance Programs

Set up the Business Rules Engine (BRE) to create complex lookups and calculations in Financial
Assistance Programs. Before setting up BRE, provide the BRE Rule Engine Runtime permissions to your
users. The BRE configurations include creating lookup tables and expression sets for financial assistance
program eligibility and financial assistance program recommendation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To set up the Business Rules Engine:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set

AND

OmniStudio Admin permission set

AND

OmniStudio User permission set

AND

Rule Engine Designer permission set

AND

<!-- page:1002 -->




USER PERMISSIONS NEEDED


Rule Engine Runtime permission set


## See Also

Salesforce Traihead: Get to Know Business Rules Engine
Salesforce Help: Decision Tables for Business Rules Engine


Create the Financial Assistance Program Eligibility Lookup Table

Create a lookup table for Financial Assistance Program Eligibility.

1.   From the App Launcher, find and select Lookup Tables.
2.   Click New.
3.   Select Decision Table, and then click Next.
4.   Select Create Decision Table, and click Next.
5.   In the Name field, enter Financial Assistance Program Eligibility.
The API name is populated automatically.
6.   Enter a description.
7.   In the Application Usage field, select Default.
8.   In the Decision Table Type field, select Low Volume.
9.   Select the LifeSciencesPSP_ProgramEligibility template, and then click Save & Next.
10.   In the Preview & Save page, click Finish. The Financial Assistance Program Eligibility lookup table
appears.
11.   Click Activate.


Create the Financial Assistance Program Recommendation Lookup Table

Create a lookup table for Financial Assistance Program Recommendation.

1.   From the App Launcher, find and select Lookup Tables.
2.   Click New.
3.   Select Decision Table, and then click Next.
4.   Select Create Decision Table, and click Next.
5.   In the Name field, enter Financial Assistance Program Recommendation.
The API name is populated automatically.
6.   Enter a description.
7.   In the Application Usage field, select Default.
8.   In the Decision Table Type field, select Low Volume.
9.   Select the LifeSciencesPSP_ProgramRecommendation template, and then click Save & Next.
10.   In the Preview & Save page, click Finish. The Financial Assistance Program Recommendation lookup
table appears.
11.   Click Activate.

<!-- page:1003 -->




Verify the Status of the Lookup Tables

After you create and activate the lookup tables, verify that their status is active.

1. From the App Launcher, find and select Lookup Tables.
2. Click the lookup table, and review the status in the Status field.


Create an Expression Set for Financial Assistance Program Eligibility Rules

Create an expression set for calculating the Financial Assistance Program Eligibility Rules.

1. From the App Launcher, find and select Expression Set Templates.
2. In the Expression set Templates page, click Financial Assistance Program Eligibility Rules.
3. In the Financial Assistance Program Eligibility Rules Expression Set page, click Save As, and then select
New Expression Set.
4. In the New Expression Set window that appears, verify the name and the description for the
expression set, and click Save.
The expression set’s first version is also created by default and opens in a new browser tab. The version
inherits the template’s components, such as resources and steps.
5. To open the Expression Set Properties page, click the gear button.
6. In the Expression Set Properties page, enter 1 in the Rank field.
7. Save and activate the expression set.


Create an Expression Set for Financial Assistance Program Recommendation
Rules

Create an expression set for calculating the Financial Assistance Program Recommendation Rules.

1. From the App Launcher, find and select Expression Set Templates.
2. In the Expression set Templates page, click Financial Assistance Program Recommendation Rules.
3. In the Financial Assistance Program Recommendation Rules Expression Set page, click Save As, and
then select New Expression Set.
4. In the New Expression Set window that appears, verify the name and the description for the
expression set, and click Save.
The expression set’s first version is also created by default and opens in a new browser tab. The version
inherits the template’s components, such as resources and steps.
5. To open the Expression Set Properties page, click the gear button.
6. In the Expression Set Properties page, enter 1 in the Rank field.
7. Save and activate the expression set.


Verify the Expression Sets for Financial Assistance Program
Recommendation Rules

After you activate the expression set for Financial Assistance Program Recommendation Rules, verify that

<!-- page:1004 -->



the expression set has been created.

1. From the App Launcher, find and select Expression Sets.
2. Verify that the expression set you created appears in the Expression Sets list.


Set up Assessment for Financial Assistance Program

To enable Assessments, you must install Omnistudio, enable Discovery Framework, and update the
Omnistudio settings.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To set up assessments:
Manage Financial Assistance Program permission
set

AND

OmniStudio Admin permission set

AND

OmniStudio User permission set


## See Also

Salesforce Help: Assessments and Surveys


Prepare Your Org to Use Assessments

To use Financial Assistance Program, install Omnistudio. See Install Omnistudio.

1. Enable Discovery Framework.
a. From Setup, in the Quick Find box, enter Discovery Framework, and then select General
Settings.
b. Turn on Discovery Framework, Enhanced Questions, Import or Export, and Sample Templates.
2. Update the Omnistudio settings.
a. From Setup, in the Quick Find box, enter OmniStudio Settings, and then select OmniStudio
Settings.
b. Turn off Managed Package Runtime.
c. Verify that Omnistudio MetaData is turned on.

<!-- page:1005 -->




Deploy Financial Assistance Program Assessments

1. In Setup, search for Discovery Framework Sample Templates.
2. Click Deploy for the Financial Assistance Program Application Assessment template with v2 as
Available New Version. Then click Deploy again.
3. Activate Integration Procedures.
a. From the App Launcher, find and select OmniStudio Integration Procedures.
b. In the quick find field, enter lsfinc to show the relevant Integration Procedures.
c. ClickLsFinclAsst/CreateApplicationFormAndRelatedRecordsWithAttachments.
d. In the Integration Procedure Designer page for the Integration Procedure, click Activate Version.
e. In the Integration Procedures list, click LsFinclAsst/GetSelectedDrugsData.
f. In the Integration Procedure Designer page for the integration procedure, click Activate Version.
4. Record the Omnistudio package namespace.
a. In Setup, in the Quick Find box, enter Installed Packages.
b. In the Installed Packages section, copy the Omnistudio package namespace in the Namespace
Prefix column.
5. Update OmniScript.
a. From the App Launcher, find and select OmniScripts.
b. Click FinancialAssistanceProgram/ApplicationForm, and click the appropriate version of the
OmniScript.
c. Click Save Responses.
d. In the Remote Class field under the Remote Properties section on the right, replace the current
entry with the following: Omnistudiopackagenamespace.StoreResponses.
Replace Omnistudiopackagenamespace with the OmniStudio package namespace that you
recorded.
e. Activate the version.


Configure Care Limit Type

To determine the financial assistance that's available to a care program enrollee, define care limit types
such as copay, co-insurance, and total out-of-pocket expenses. If you have configured Benefits
Verification on your org, the copay care limit type is created already.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care limit type:
Manage Financial Assistance Program permission
set

<!-- page:1006 -->




USER PERMISSIONS NEEDED


AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1. From Setup, in the Quick Find box, enter Care Limit Type, and then under Benefits Verification,
select Care Limit Type.
2. Verify that copay is present in the Care Limit Type list. If copay isn’t present, proceed to the next step.
3. Click New Care Limit Type.
4. Enter CoPay for the label and the name.
5. Enter copay as the limit type.
6. In Metric Type, select the unit by which the benefit limit is measured. You can select Money or
Amount.

Note Select Money if the limit is on the amount that is billed. If the limit can’t be measured in
terms of money, time, or amount, select Text so that the user can type a description.

7. Save the changes.


Update Page Layout Configurations for Financial Assistance
Program

Certain fields on the objects that are required for using Financial Assistance Program aren’t available on
the objects, by default. You must edit the objects and add them to the object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To update page layout configurations:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


Here’s the list of objects and their fields that you must enable in the Page Layout.

<!-- page:1007 -->




Object                                               Required Fields

Applicant                                            Care Program Enrollee

Assessment                                           Applicant


## Benefit

- Enrollee Limit Frequency
- Enrollee Amount Limit
- Enrollee Transaction Amount Limit
- Budget Amount Used


## Benefit Assignment

- Maximum Benefit Amount
- Minimum Benefit Amount

Care Program Enrollee Product                        Program

Coverage Benefit                                     Pharma Copay Amount

Program                                              Application Appeal Limit

Program Enrollment                                   Care Program Enrollee

Program Recommendation Rule                          Active Commercial Insurance


1. From the object management settings for Applicant, go to Page Layouts.
2. On the Page Layouts page, select Applicant Layout.
3. From the Fields section of the layout table, drag the Care Program Enrollee field to the Applicant Detail
section.
4. To add the required fields to the page layouts for the other objects shown in the table, repeat these
steps.


## See Also

Salesforce Help: Page Layouts


Customize Picklist Values for Financial Assistance Program Fields

To make it easier for patient services representatives to choose the appropriate options, customize the
picklist values for fields in Financial Assistance Program objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1008 -->




User Permissions Needed

To edit the objects:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


You must include picklist values for these objects and their fields.


Object                              Field                             Picklist Value

Benefit                             Enrollee Limit Frequency
- Monthly
- Yearly
- Quarterly
- On Demand

Program Recommendation Rule         Rule Type
- Eligibility
- Recommendation

Program                             Program Type
- copay
- Patient Assistance Program
- Quick Start

Medication Request                  Type
- Proposal
- Plan
- Order
- Original Order
- Option

Status
- Active
- OnHold
- Canceled
- Completed

1. From Setup, in the Object Manager, enter Benefit, and select Benefit.
2. On the Fields and Relationships tab, select Enrollee Limit Frequency .
3. In the Enrollee Limit Picklist Values section, click New.

<!-- page:1009 -->



4. Enter Monthly, Yearly, Quarterly, On Demand in a single line.
5. Save your changes.
6. To add picklist values to the fields on other objects as listed in the table, repeat these steps.


## See Also

Salesforce Traihead: Get Started with Picklists


Data Management for Financial Assistance Program

To help your users get the most out of Financial Assistance Programs, configure your org with the
necessary data.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud



## Create a Person Account

Before you set up a care program enrollee record, create a person account record.
Create a Care Program
Create a Care Program for the financial assistance program.
Create Care Program Enrollee
Create a Care Program Enrollee for the financial assistance program. You can create a care program
enrollee directly from the Care Program Enrollee object or from the Care Program Enrollee Product
object.
Create a Product
Create a product for the care program.
Create a Care Program Product
Create a care program product for the care program.
Create a Program
Create a financial assistance program.
Create a Care Program Enrollee Product
Create a care program enrollee product for the care program enrollee. You can create a care program
enrollee product directly from the Care Program Enrollee Product object or from the Care Program
Enrollee object.
Create a Care Program Assistance
Create a care program assistance for the care program enrollee.
Create a Purchaser Plan
Create a purchaser plan for the financial assistance program.
Create a Member Plan
Create a member plan for the financial assistance program.
Create Program Recommendation Rules

<!-- page:1010 -->



Create program recommendation rule records for the financial assistance program recommendation
and eligibility. For example, create Insulin Financial Assistance Rule - Eligibility and
Insulin Financial Assistance Rule - Recommendation for the Insulin programs.
Create Medication
Create a medication for the financial assistance program.
Create a Medication Request
Create a medication request for the financial assistance program.
Create a Care Benefit Verify Request
Care Benefit Verify Request represents the request of verification of benefits for the financial
assistance program.
Create a Coverage Benefit
Create a coverage benefit rule coverage benefit for the financial assistance program.
Create a Coverage Benefit Item
Create a coverage benefit item for the financial assistance program.
Create a Benefit Type
Create a benefit type for the financial assistance program.
Create a Coverage Benefit Item Limit
Create coverage benefit item limits for the financial assistance program.
Create a Benefit
Create coverage benefit item limits for the financial assistance program.


Create a Person Account

Before you set up a care program enrollee record, create a person account record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a person account:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


Before you create a person account:

<!-- page:1011 -->



- Enable Person Accounts.
- In the Person Account page layout, add Birthdate to the page, and click Save As.
1.    From the App Launcher, find and select Accounts.
2.    Click New.
3.    Select Person Account, and click Next.
4.    Enter the last name.
5.    Enter the birth date. To use Financial Assistance Program, the patient must be 18 years or above.
6.    Enter the billing state. To use Financial Assistance Program, the state must be Arizona or Texas.
7.    Enter the billing country. To use Financial Assistance Program, the country must be US.
8.    Save the details.


## See Also

Salesforce Help: Enable Person Accounts for Use in AFLS


Create a Care Program

Create a Care Program for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care program:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Care Programs.
2.    Click New.
3.    Enter a program name and start date.
4.    Save the details.


Create Care Program Enrollee

Create a Care Program Enrollee for the financial assistance program. You can create a care program
enrollee directly from the Care Program Enrollee object or from the Care Program Enrollee Product
object.

<!-- page:1012 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care program enrollee:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Care Program Enrollees.
2.    Click New.
3.    Enter the name for the care program enrollee.
4.    Select the account of the enrollee.
5.    Select the care program.
6.    Save the details.


Create a Product

Create a product for the care program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a product:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1. From the App Launcher, find and select Products.
2. Click New.
3. Enter a product name, and select Active.

<!-- page:1013 -->



4. Save the changes.


Create a Care Program Product

Create a care program product for the care program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care program product:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Care Program Products.
2.    Click New.
3.    Enter the name, and select the product and the care program.
4.    Save the changes.


Create a Program

Create a financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a program:
Manage Financial Assistance Program permission
set

AND

Health Cloud Starter permission set OR Health

<!-- page:1014 -->




USER PERMISSIONS NEEDED


Cloud Foundation permission set


1.    From the App Launcher, find and select Programs.
2.    Click New.
3.    Enter a name for the financial assistance program.
4.    Enter the start date of the financial assistance program.
5.    Enter a summary for the financial assistance program.
6.    Enter an application appeal limit.
7.    For Program Type, select Copay, Patient Assistance Program, or Quick Start.
8.    Save the changes.


Create a Care Program Enrollee Product

Create a care program enrollee product for the care program enrollee. You can create a care program
enrollee product directly from the Care Program Enrollee Product object or from the Care Program
Enrollee object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care program enrollee product:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Care Program Enrollee Products.
2.    Click New.
3.    Select Care Program Enrollee, Care Program Product, and Program.
4.    Save the details.


Create a Care Program Assistance

Create a care program assistance for the care program enrollee.

<!-- page:1015 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care program assistance:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Care Program Assistances.
2.    Click New.
3.    Select Care Program, Care Program Product, and Program.
4.    Save the details.


Create a Purchaser Plan

Create a purchaser plan for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a purchaser plan:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Purchaser Plans.
2.    Click New.
3.    Enter the start date and the end date of the plan.
4.    For the plan type, select PPO, HMO, or Workers Comp.
5.    For the plan status, select Active.

<!-- page:1016 -->



6. Save the changes.


Create a Member Plan

Create a member plan for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a member plan:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Member Plans.
2.    Click New.
3.    Enter a name for the member plan.
4.    Enter the start date and the end date of the member plan.
5.    Specify whether the plan is primary or secondary.
6.    For the status, select Select Active.
7.    Select the member.
8.    For the plan, select the purchaser plan.
9.    Save the changes.


Create Program Recommendation Rules

Create program recommendation rule records for the financial assistance program recommendation and
eligibility. For example, create Insulin Financial Assistance Rule - Eligibility and
Insulin Financial Assistance Rule - Recommendation for the Insulin programs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1017 -->




USER PERMISSIONS NEEDED

To create a program recommendation rule:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Program Recommendation Rules.
2.    Click New.
3.    Enter a name for the program recommendation rule.
4.    In the Program field, select the Financial Assistance Program.
5.    In the Minimum Age field, enter the minimum age of the patient.
6.    In the Maximum Age field, enter the maximum age of the patient.
7.    In the Country field, enter the name of the country.
8.    In the Recommended Program Priority field, specify the priority of the Financial Assistance Program.
Enter 1 for setting the program as the recommended program. The lowest number has the highest
priority.
9.    In the Rule Type field, select Eligibility.
10.    Select Inclusion Rule.
11.    Save the details.
12.    Clone the rule that you created.
13.    In the Rule Type field, select Recommendation.
14.    Select Active Commercial Insurance if there’s a commercial member plan for the person account.
15.    Save the details.


Create Medication

Create a medication for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a medication:
Manage Financial Assistance Program permission
set

AND

<!-- page:1018 -->




USER PERMISSIONS NEEDED



## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Medications.
2.    Click New.
3.    Enter the name and select the product.
4.    Enter the end date of the prescription period. This date must be a future date.
5.    Save the details.


Create a Medication Request

Create a medication request for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a medication request:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


If the pharmacy benefits of the prescribed drug are verified then instead of creating a medication
request, you must update the Prescription Period End field of the existing medication record.

Here are the steps to create a medication request.

1.    From the App Launcher, find and select Medication Requests.
2.    Click New.
3.    For the status, Select Active.
4.    Select the medication.
5.    Select the patient.
6.    Select the end date of the prescription period.
7.    Select a medication request type.
8.    Save the changes.

<!-- page:1019 -->




Create a Care Benefit Verify Request

Care Benefit Verify Request represents the request of verification of benefits for the financial assistance
program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care benefit verify request:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


If the pharmacy benefits of the prescribed drug are already verified, then instead of creating a care
benefit verify request, you must update the status of the existing care benefit verify request record to
Completed.

1. From the App Launcher, find and select Care Benefit Verify Requests..
2. Click New.
3. Select a member plan.
4. Select the appropriate status.
The date of the request must be a date after the care program start date.
5. In the Authorized Prescription field, enter the Medication Request.
6. Save the changes.


Create a Coverage Benefit

Create a coverage benefit rule coverage benefit for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1020 -->




USER PERMISSIONS NEEDED

To create a coverage benefit:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


If the pharmacy benefits of the prescribed drug are already verified then instead of creating a coverage
benefit, you must update the Active field of the existing coverage benefit record to True.

Here are the steps to create a coverage benefit.

1.    From the App Launcher, find and select Coverage Benefits.
2.    Click New.
3.    Enter a name for the coverage benefit.
4.    Select the member.
5.    Select the member's plan, and then select Active.
6.    Select a care benefit verify request.
7.    Enter other details as needed and save your changes.


Create a Coverage Benefit Item

Create a coverage benefit item for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a coverage benefit item:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


If the pharmacy benefits of the prescribed drug are already verified then instead of creating a coverage
benefit item, you must update the Active field of the existing coverage benefit item record to True.

<!-- page:1021 -->



Here are the steps to create a coverage benefit item.

1.    From the App Launcher, find and select Coverage Benefit Items.
2.    Click New.
3.    Enter a name for the Coverage Benefit Item.
4.    Select the member.
5.    Select the coverage benefit.
6.    Select Active.
7.    Save the changes.


Create a Benefit Type

Create a benefit type for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a benefit type:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Benefit Types.
2.    Click New.
3.    For the process type, select Financial Assistance.
4.    For the type, select Monetary.
5.    Save the details.


Create a Coverage Benefit Item Limit

Create coverage benefit item limits for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1022 -->




USER PERMISSIONS NEEDED

To create a coverage benefit item limit:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Coverage Benefit Item Limits.
2.    Click New.
3.    From the App Launcher, find and select Coverage Benefit Item Limits.
4.    Click New.
5.    Enter a name for the coverage benefit item limit.
6.    Select the coverage benefit item.
7.    Select the care limit type.
8.    In the Applied Limit field, enter the Copay amount if the Care Limit Type is Copay.
9.    Save the changes.


Create a Benefit

Create coverage benefit item limits for the financial assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a benefit:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1.    From the App Launcher, find and select Benefits.
2.    Click New.
3.    Enter a name for the benefit.
4.    Select the benefit type.
5.    Select the frequency of the Enrollee limit.

<!-- page:1023 -->



6.    For the budget amount used, enter 0.
7.    Enter the amount limit for the enrollee.
8.    Enter the transaction amount limit for the enrollee.
9.    Select the financial assistance program.
10.    Select Active.
11.    For the payout frequency, enter the values that are mapped in enrollee limit frequency.
12.    Select the benefit end date.
13.    Enter the maximum benefit amount for the enrollee.
14.    Save the changes.


Refresh the Financial Assistance Program Decision Tables

Refresh the decision tables to include the changes that you made to the Program and Program
Recommendation Rules objects. You must refresh the decision tables each time after you update these
objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To refresh decision tables:
Manage Financial Assistance Program permission
set

AND

Rule Engine Designer permission set

AND

Rule Engine Runtime permission set


1. From Setup, in the Quick Find box, enter Decision Tables.
2. Select the Financial Assistance Program Eligibility Decision Table.
3. Click Refresh.
4. Repeat the steps for Financial Assistance Program Recommendation Decision Table.


## See Also

Salesforce Help: Decision Tables for Business Rules Engine

<!-- page:1024 -->




Financial Assistance Program Flows

Enable your patient service reps to apply for financial assistance programs on behalf of enrollees by using
Salesforce flows. Understand how these flows work together, the key steps in enrollment for an
assistance program, and the prerequisites before making any customizations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Patient service reps can apply for a financial assistance program through a care program enrollee record
page. If the application is rejected, they can file an appeal against the same application. Salesforce
automation takes care of checking the patient eligibility, verifying the insurance type, verifying the
patient's benefits status, calculating and assigning benefits, and finally disbursing the benefits for the
relevant application or appeal.

For appeals, Salesforce automation checks the appeal status and takes the necessary action accordingly.
Tailor these flows to adjust the timeout for filing an appeal.


## Financial Assistance Program Flows

Salesforce ships flows that you can use to automate various tasks within the Financial Assistance
Program. You can customize the flows to run patient assistance programs according to your
requirements.
Clone and Activate the Financial Assistance Program Flows
Streamline the process for applying for a financial assistance program and filing an appeal by cloning
and activating the Process Application for Financial Assistance Program, and Update the Check Appeal
Status and Take Action flows. Simply clone the default flows and activate it.
Customize the Appeal Timeout
Every appeal against the rejection of a financial assistance program application gets timed out if
there’s no action taken on it. Enable your patient service reps to customize the appeal timeout by
updating flows and Integration Procedures.


Financial Assistance Program Flows

Salesforce ships flows that you can use to automate various tasks within the Financial Assistance
Program. You can customize the flows to run patient assistance programs according to your
requirements.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1025 -->



Here’s the list of flows that are shipped to you with the product. See Flow Builder for more information
on the Flow Builder.


## Flows in Financial Assistance Program

Flow                                                   Description

Process Application for Financial Assistance           Determines an applicant's eligibility for a financial
Program                                                assistance program. If the applicant is eligible,
enrolls them in the program and disburses the
calculated benefit to them.

Verify Insurance Type                                  Verifies if the patient has commercial insurance.

Check Benefit Verification Status                      Checks whether a patient has completed benefit
verification for the drugs that are part of the
financial assistance program.

Check Patient Eligibility                              Checks whether a patient is eligible to be enrolled
in a financial assistance program.

Calculate and Assign Benefits                          Calculates and assigns the financial assistance
program benefits to a care program enrollee.

Disburse Benefits                                      Disburses the financial assistance program
benefits to a care program enrollee.

Check Appeal Status and Take Action                    Verifies if an appeal is approved, rejected, or has
timed out, and takes the necessary actions
accordingly.


## See Also

Salesforce Help: Orchestrations
Automate Tasks with Flows


Clone and Activate the Financial Assistance Program Flows

Streamline the process for applying for a financial assistance program and filing an appeal by cloning and
activating the Process Application for Financial Assistance Program, and Update the Check Appeal Status
and Take Action flows. Simply clone the default flows and activate it.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1026 -->




USER PERMISSIONS NEEDED


## To clone and activate the Process Application for

Financial Assistance Program flow:                    Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


## To clone and activate the Check Appeal Status and

Take Action flow:                                 Manage Financial Assistance Program permission
set

AND

Industry Service Excellence permission set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1. Clone and activate the Process Application for Financial Assistance Program flow.
a. From Setup, in the Quick Find box, enter Flows and select it.
b. Open the Process Application for Financial Assistance Program flow.
c. In the Flow Builder, click Save as New Orchestration.
d. Enter a flow label, and a description.
e. Save and activate the new flow.
2. Clone and activate the Check Appeal Status and Take Action flow.
a. From Setup, in the Quick Find box, enter Flows and select it.
b.   Open the Check Appeal Status and Take Action flow.
c.   In the Flow Builder, click Save as New Flow.
d.   Enter a flow label, and a description.
e.   Save and activate the new flow.


## See Also

Salesforce Help: Orchestrations
Automate Your Business Processes
Flow Builder for Flow Orchestration


Customize the Appeal Timeout

Every appeal against the rejection of a financial assistance program application gets timed out if there’s
no action taken on it. Enable your patient service reps to customize the appeal timeout by updating
flows and Integration Procedures.

<!-- page:1027 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To update a flow and an Integration Procedure:
Manage Financial Assistance Program permission
set

AND

Industry Service Excellence permission set

AND

OmniStudio Admin permission set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


By default, the appeal gets timed out after 30 days of its creation, but you can customize this appeal
timeout setting to suit your business needs.


Update the Check Appeal Status And Take Action Flow

To update the appeal timeout, create a version of the Check Appeal Status and Take Action flow by
editing its wait element value and unit of appeal timeout.

Prerequisite: Make sure that you already cloned and activated the Check Appeal Status and Take Action
flow.

1. From Setup, in the Quick Find box, enter Flows and select it.
2.    Open the Check Appeal Status and Take Action flow.
3.    In Flow Builder, click Wait for Appeal Action Response.
4.    Click Edit Element.
5.    Under Wait Configurations, click Appeal Timed Out.
6.    Click Resume Event.
7.    Enter the offset number and offset unit in hours or days.
8.    Save the flow as a new version, and then activate the flow.

<!-- page:1028 -->





## Create a Version of the LSAPEligibleRecommendedAssitancePrograms

Integration Procedure

To update the appeal timeout, create a version of the LSAPEligibleRecommendedAssitancePrograms
Integration Procedure and update the ReapplyTimeout and DiffInDays input fields.

1.   From App Launcher, find and select OmniStudio.
2.   Click the arrow next to OmniStudio FlexCards, and select OmniStudio Integration Procedures.
3.   In the search bar, type and select LSAPEligibleRecommendedAssitancePrograms.
4.   Click LSAPEligibleRecommendedAssitancePrograms (Version 1).
5.   Under Structure, click Procedure Configuration.
6.   Click Create Version.
7.   Click GetShowReapplyStatus Remote Action.
8.   Under Additional Input, for ReapplyTimeout, enter the period after which you want to time out a
financial assistance program appeal.
9. Set DiffInDays to true if the unit of meausre for timeout is in days, else set it to false.
10. Go to Procedure Configuration, click Save, and then click Activate Version.


Create a Version of the GetApplicationTabDetails Integration Procedure

To update the appeal timeout, create a new version of the GetApplicationTabDetails Integration
Procedure and update the ReapplyTimeout and DiffInDays input fields.

1. From App Launcher, find and select OmniStudio.
2. Click the arrow next to OmniStudio FlexCards, and select OmniStudio Integration Procedures.
3. Search for and select GetApplicationTabDetails.
4. Click GetApplicationTabDetails (Version 1).
5. Under Structure, click Procedure Configuration.
6. Click Create Version.
7. Click ModifyStageAndStep Remote Action.
8. Under Additional Input, for ReapplyTimeout, enter the period after which you want to time out a
financial assistance program appeal.
9. Set DiffInDays to true if the unit of meausre for timeout is in days, else set it to false.
10. Go to Procedure Configuration, save your changes, and then activate the new version.


## See Also

Automate Tasks with Flows
Omnistudio
Omnistudio Integration Procedures


Update the Application Appeal Limit

When an application is rejected, a patient service representative can file an appeal to address the issues
that caused the initial rejection. When your reps file an appeal, they can use the rejection comments to

<!-- page:1029 -->



resolve specific issues.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


You can define the number of appeals that your representatives can file for a single application. If you
reach this limit, you can reapply to the same assistance program by creating another application.

To customize the application appeal limit, update the Application Appeal Limit field on the program
entity.


Important Before you file an appeal, you must define the application appeal limit.
See Also
Create a Program


Add Financial Assistance Program to the Care Program Enrollee
Record Page

Enable your patient services representatives to apply for a financial assistance program on behalf of a
patient by adding the FinancialAssistanceProgramContainer FlexCard to the Care Program
Enrollee record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To modify pages:
Manage Financial Assistance Program permission
set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set

To add flexcards:
Omnistudio Admin permission set

AND

<!-- page:1030 -->




USER PERMISSIONS NEEDED


Omnistudio User permission set


To add the FlexCard to use Financial Assistance Program, install Omnistudio in your org.

1.    From the App Launcher, find and select Care Program Enrollees.
2.    Open a care program enrollee record.
3.    Click Setup, and select Edit Page.
4.    Place the Flexcard component at an appropriate spot on the page layout.

Tip We recommend that you create a dedicated tab on your page for this Flexcard and place it
inside that tab.

5. Select the Flexcard component that you placed on the page.
6. In the component properties panel, in Flexcard Name, select FinancialAssistanceProgramContainer.
7. Save your work and activate the page, if needed.


## See Also

Salesforce Help: FlexCards
Salesforce Help: OmniStudio for AFLS


Create Sharing Rules for Financial Assistance Program

A user sharing rule is a special type of criteria-based sharing rule that you use to grant record access to
the users. For each rule, you assign access permissions to a specific set of users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create sharing rules:                            Manage Sharing


To use Financial Assistance Program, create record sharing rules with these access levels:


## Sharing Settings for Financial Assistance Program

Sharing Rule                                        Access Level

Assessment Question                                 Read Only

Benefit Type                                        Read Only

Care Program                                        Read Only

<!-- page:1031 -->




Sharing Rule                                          Access Level

Care Program Enrollee Product                         Read Only

Care Program Product                                  Read Only

Coverage Benefit                                      Read/Write

Coverage Benefit Item                                 Read Only

Medication                                            Read Only

Member Plan                                           Read Only

Omni Data Transformation                              Read Only

Omni Process                                          Read Only

Omni Process Assessment Question Version              Read Only

Omni UI Card                                          Read Only

Program                                               Read Only

Purchaser Plan                                        Read Only

Service Catalog Request                               Read Only


1. From Setup, in the Quick Find box, enter Sharing Settings, and then select it.
2. Under Sharing Rules, go to the sharing rule, for example Care Program Sharing Rules, and then click
New.
3. Enter a label and description for the rule.
4. Select Based on Record Owner as the rule type.
5. To determine the records to be shared, select the record owner role and user.
6. Select the users with whom the records must be shared.
7. Select the access level for the users. For Example:
Read Only
8. Save your changes.


Edit the Organization-Wide Sharing Defaults for Financial
Assistance Program

Edit the organization-wide default sharing default settings on certain objects to provide access to a set of
users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1032 -->




USER PERMISSIONS NEEDED

To create sharing rules:                             Manage Sharing


To use Financial Assistance Program, update the internal access settings of these objects to Public Read
Only:

- Benefit Assignment
- Flow Orchestration Instance Related Obj
- Orchestration Run
- Orchestration Stage Run
- Orchestration Step Run
- Process Exception
- Program Enrollment
1. From Setup, in the Quick Find box, enter Sharing Settings, and then select it.
2. Under Organization-Wide Defaults, click Edit, and then update the default internal access of the
objects to Public Read Only.
3. Save your changes.


Edit Field-Level Security Settings for User Profiles in Financial
Assistance Program

Edit the field-level security settings for the Applicant and the Application Form objects to provide edit
access to certain user profiles.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


1. From Setup, in the Quick Find box, enter Profiles, and then select it.
2.    Select a profile, and then click View that corresponds to the Applicant object.
3.    In the Applicant Field-Level Security page, click Edit and provide edit access to all the fields.
4.    Save your changes.
5.    Similarly, edit the security settings of Usage Type and other fields for the Application Form object.


Create and Activate a Service Process Definition

Create a service process definition in the Service Process Studio and activate it so that when a patient
service rep files an appeal, the case record gets linked with the relevant application form ID.

<!-- page:1033 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED


## To create service process definition

Manage Financial Assistance Program permission
set

AND

Industry Service Excellence permission set


Prerequisite: Make sure that the Industry Service Excellence permission set is assigned to the admin and
patient service reps.

Financial Assistance Program comes with an out-of-the-box service process definition template, Appeal
Extension. You must create a service process definition by using this template and then activate it.

1.    From Setup, in the Quick Find box, find, and select Service Process Studio.
2.    Click New Service Process.
3.    Click Create From Template.
4.    Click Appeal Extension, and click Save and Launch.
5.    On the Details tab, enter API Name as AppealExtension.
6. Click the Fulfillment Flow tab. Or, click Next, and skip to the Fulfillment Flow tab by clicking Next on
each tab.
7. Click Activate.


## See Also

Service Process Studio
Service Process Studio: Create and Activate Service Process Definitions


Use Financial Assistance Program

Financial Assistance Program streamlines the process of enrolling a patient in an assistance program. It
reduces the turnaround time to onboard patients and gather their insurance details, and ensures
seamless access to healthcare by enrolling them in a suitable assistance program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1034 -->



View the status of the application and the history of any financial assistance that's provided to the
enrollee. If the application is approved, view the details of the benefit disbursement, such as the count
and benefit of reimbursed Copay coupons. If the application is rejected, file an appeal.


## Financial Assistance Program Application

Financial Assistance Program helps patients procure expensive drugs that they can’t afford otherwise.
It enhances the patient engagement on drugs by helping them meet the out-of-pocket expenses for
their drugs. The program also improves patient enrollment in various patient service programs and
reduces patient dropouts from the program.
Apply for a Financial Assistance Program
Apply for a suitable financial assistance program on behalf of the care program enrollee.
Financial Assistance Program Appeal
Patient service reps can address a rejected financial assistance program application by filing an appeal.
Before reps file an appeal, they can review the rejection comments to understand the reasons for the
application's rejection. They can then correct the issues and file the appeal.
File an Appeal for a Financial Assistance Program
File an appeal against a rejected application on behalf of a care program enrollee.
Approve or Reject an Appeal
After a patient service rep files an appeal, another patient service rep verifies whether the issues that
led to the rejection of the application were resolved, and then approves or rejects the appeal.
Reapply for a Financial Assistance Program
If an appeal times out or the maximum number of allowed appeals for an application is reached, you
can initiate a new application for the same financial assistance program on behalf of the care program
enrollee.
View Benefit Disbursements Details for a Patient
View the details of the benefits that the patient has received. The disbursement details include the
count of benefit coupons and cards.


Financial Assistance Program Application

Financial Assistance Program helps patients procure expensive drugs that they can’t afford otherwise. It
enhances the patient engagement on drugs by helping them meet the out-of-pocket expenses for their
drugs. The program also improves patient enrollment in various patient service programs and reduces
patient dropouts from the program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Apply for a financial assistance program on behalf of a patient by using a guided workflow. If the
application meets all the criteria, then it gets approved. If it doesn't meet the criteria, it gets rejected but
you can file an appeal against the rejection.

<!-- page:1035 -->




Apply for a Financial Assistance Program

Apply for a suitable financial assistance program on behalf of the care program enrollee.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To apply for a financial assistance program:
- Manage Financial Assistance Program
permission set
-    Health Cloud Starter permission set OR Health
Cloud Foundation permission set
-    Rule Engine Designer permission set
-    Omnistudio User permission set



1. From the App Launcher, find and select Care Program Enrollees.
2. Click any care program enrollee.
3. Click the Financial Assistance Program tab, and then click Available Programs.
4. To launch a guided flow and to apply for a financial assistance program, click Apply that corresponds
to the program.
5. In the Patient Details page, upload the proof of citizenship, and click Next.
6. In the Patient insurance Details page, select the prescribed drug, and Next.
In the Patient insurance Details page, you can optionally add the secondary commercial insurance
details and upload the supporting documents.
7. In the Review and Submit Application page, review the application details, and click Submit.

Note The flow logic and submitting process run simultaneously and can take some time.

8. Review the status of the application and expand the Verification Checklist to view the details of each
step of the application lifecycle.


Financial Assistance Program Appeal

Patient service reps can address a rejected financial assistance program application by filing an appeal.
Before reps file an appeal, they can review the rejection comments to understand the reasons for the
application's rejection. They can then correct the issues and file the appeal.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:1036 -->




Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Appeals can be filed multiple times to ensure resolution. However, if no action is taken on an appeal, it
automatically times out after 30 days. Salesforce has a 30-day timeout period to ensure timely
processing. If an appeal times out without getting approved or rejected, the reps can reapply for the
financial assistance program by submitting a new application. This streamlined process maintains
efficiency and gives reps the flexibility to support patients effectively.


Tip You can modify the appeal limit to be filed against an application by using the Application
Appeal Limit field on the Program object.


## See Also

Update the Application Appeal Limit
Customize the Appeal Timeout


File an Appeal for a Financial Assistance Program

File an appeal against a rejected application on behalf of a care program enrollee.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED


## To file an appeal for a financial assistance

program:                                              Manage Financial Assistance Program permission
set

AND

Rule Engine Designer permission set

AND

Omnistudio User permission set

AND

Industry Service Excellence permission set

AND


## Health Cloud Starter permission set OR Health

Cloud Foundation permission set

<!-- page:1037 -->



1. From the App Launcher, find and select Care Program Enrollees.
2. Click any care program enrollee.
3. Click the Financial Assistance Program tab.

Note The tab name for your Salesforce org can vary based on your admin setup.

4. To see the rejected application, click View Application.
5. On the Applications tab, click File Appeal.
6. If needed, enter a description and upload supporting documents, and click Done.

Note The flow logic and submitting process run simultaneously and can take some time.


After a patient service rep files an appeal, another rep reviews it to verify whether the identified issues
were resolved. Based on the evaluation, the reviewing rep either approves or rejects the appeal.


## See Also

Update the Application Appeal Limit
Customize the Appeal Timeout


Approve or Reject an Appeal

After a patient service rep files an appeal, another patient service rep verifies whether the issues that led
to the rejection of the application were resolved, and then approves or rejects the appeal.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED


## To update an appeal for a financial assistance

program:                                                Manage Financial Assistance Program permission
set

AND

Rule Engine Designer permission set

AND

Omnistudio User permission set

AND

Industry Service Excellence permission set

AND

<!-- page:1038 -->




USER PERMISSIONS NEEDED



## Health Cloud Starter permission set OR Health

Cloud Foundation permission set


1. From the App Launcher, find and select Care Program Enrollees.
2. Click any care program enrollee.
3. Click the Financial Assistance Program tab.

Note The tab name for your Salesforce org can vary based on your admin setup.

4. Under Appeals History, expand the application that the appeal is filed for.
5. Verify the reasons for which the application was rejected initially.
6. Click Accept Appeal or Reject Appeal.

To review the status of the application and to view the details of each step of the application lifecycle,
expand the Verification Checklist .


## See Also

File an Appeal for a Financial Assistance Program


Reapply for a Financial Assistance Program

If an appeal times out or the maximum number of allowed appeals for an application is reached, you
can initiate a new application for the same financial assistance program on behalf of the care program
enrollee.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To reapply for a financial assistance program:
- Manage Financial Assistance Program
permission set
-   Health Cloud Starter permission set OR Health
Cloud Foundation permission set
-   Rule Engine Designer permission set
-   OmniStudio User permission set



Before you reapply for a financial assistance program, make sure that you correct the errors in the
application form. To view the error details, go to the Verification Checklist section in the rejected
application status page.

<!-- guide:admin-guide section:set-up-participant-management pages:791-852 -->
# Set Up Participant Management



hospital.
2.   From the App Launcher, find and select Awards to create records for a practitioner or a provider
organization's professional awards.
3.   From the App Launcher, find and select Board Certifications to create records for a practitioner's
board certifications, which demonstrate the practitioner has undergone extra training to become a
specialist or learn the latest advancements in their speciality.
4.   From the App Launcher, find and select Business Licenses to create records for a practitioner or a
provider organization's professional licenses.
5.   From the App Launcher, find and select Person Educations to create records for a person's
professional education in a provider role.



Set Up Participant Management

Participant Management streamlines the process of recruiting and enrolling participants in clinical trials
by orchestrating each stage, from initial recruitment to enrollment. With this feature, you can provide a
unified clinical trial portal experience for potential participants and clinical trial coordinators.

Using Participant Management, users can gather critical participant information and support the
evaluation of the effectiveness and safety of new medical treatments. Participant Management enables
you to:

- Reduce the cost per eligible participant
- Reduce the cost per conversion of consenting participants
- Reduce the average time between registration and enrollment
- Improve participant registration and enrollment experience
- Lower your participant attrition rate
The key components of Participant Management include:


For Recruitment

During the recruitment phase, potential participants are referred to as Candidates. The following features
support trial discovery, candidate matching, prescreening, and the application process.

- Criteria-Based Search and Filter feature to help users search for and find suitable clinical trials on an
experience cloud site
-    Omnistudio components to digitize initial prescreening and candidate registration processes
-    Einstein Candidate Matching feature to automatically match candidates to clinical trials


For Enrollment

After enrollment, Candidates become Participants and proceed to the next phase of the clinical trial.

- Build enrollment journey using Salesforce orchestration capabilities

<!-- page:792 -->



- Flows to digitize the consent management process
- Invocable actions and flows to digitize the basic randomization process
Participant Management Data Model and Permissions
Participant Management uses a data model that’s FHIR R4 and USCDI-aligned to store its data and
make it interoperable.
Enable Participant Management
Give users access to participant management features by enabling org preferences in your Salesforce
org. By enabling Participant Management, you can streamline the recruitment and enrollment
processes in clinical trials.
Assign Permission Sets for Participant Management Users
Participant Management offers five permission sets: Clinical Trial Manager, Clinical Trial Coordinator,
Clinical Trial Participant, Clinical Trial Guest, and Clinical Trial Site Coordinator in Experience Cloud.
Assign the necessary permission sets to users according to their roles.
Add Data for Participant Recruitment and Enrollment
Quickly create a record from an object’s home page. Clinical trial managers can create records that are
necessary to use the features within Participant Management. Clinical trials are represented using care
programs and research studies.
Participant Recruitment
Participant Management digitizes and optimizes candidate recruitment in clinical trials. With
Participant Management, you can help users overcome recruitment challenges, save time, and
improve trial efficiency.
Participant Enrollment
Participant Enrollment features help your clinical trial managers, coordinators, and participants to
prepare, send, and view consent forms. It includes consent management and randomization features
that can be combined to create a participant enrollment journey using Salesforce orchestration
capabilities.
Use Participant Management
Participant Management helps organizations that conduct clinical research studies to make their
recruitment and enrollment processes more efficient. Clinical trial coordinators or recruiters can use
the Clinical Excellence Console app to track and monitor participant recruitment and enrollment
progress. Clinical trial coordinators can use the Research Study Candidate page to add new Medication
Requests, Health Conditions, Allergies, and Immunization records directly from the patient card.


Participant Management Data Model and Permissions

Participant Management uses a data model that’s FHIR R4 and USCDI-aligned to store its data and make
it interoperable.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:793 -->




Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


Participant Management

Here’s the summary of objects used in Participant Management. Use these objects to set up features that
assist users in the recruitment and enrollment processes.


Object                                             Purpose

Research Study                                     Represents the details of a research study that
include its design, execution, and oversight.

Care Program                                       Represents the extended or additional details of a
research study.

Care Program Eligibility Rule                      Represents a rule defining the inclusion and
exclusion criteria for a research study or care
program. This entity creates an association
between Care Program and an Enrollment
Eligibility Criteria.

Care Program Enrollee                              Represents a participant enrolled in a care
program.

Enrollment Eligibility Criteria                    Represents criteria that define patient enrollment
eligibility for one or more care programs.

Care Program Status Period                         Represents the historical changes to the status of
a care program.

Care Program Site                                  Represents the location details of the care
program site.

Research Study Candidate                           Represents the details of the associated account
and the status of the research participant or
candidate.

Care Program Detail                                Represents the detail records related to the care
program.

Research Study Candidate Status Period             Represents the duration of time that a research
participant or candidate is assigned a particular
status.

Research Study Relation                            Represents the different related research studies.
For example, a cardiac drug research study can be
a part of a larger study encompassing cardiac
diseases and diabetic diseases.

<!-- page:794 -->




Object                                        Purpose

Research Study Searchable Field               Represents a common dataset that includes
multiple fields and values from multiple objects,
and is used as the basis for searches related to
research studies.

Research Study Protocol Information           Represents details of the research study protocol
document.

Data Use Purpose                              Represents the reason for contacting a prospect or
customer, such as for consent verification.

Authorization Form Data Use                   Represents the data use consented to in an
authorization form.

Authorization Form                            Represents the specific version and effective dates
of a form that is associated with consent, such as
consent forms.

Authorization Form Text                       Represents an authorization form’s text and
language settings.

Content Document                              Represents a document that has been uploaded
to a library in Salesforce CRM Content or
Salesforce Files.

Content Document Version                      Represents a specific version of a document in
Salesforce CRM Content or Salesforce Files.

Info Authorization Request                    Tracks a request for authorization on a Data Use
Purpose.

Info Authorization Request Form               Tracks the individual Authorization Form Texts that
belong to an Authorization Request.

Authorization Form Consent                    Represents the date and way in which a user
consented to an authorization form.

Digital Verification                          Stores information about the verification of a
related record.

Care Program Team Member Role Period          Represents the historical changes to the role of a
care program team member.

Care Program Enrollee Status Period           Represents the historical changes to the status or
the stage of a care program enrollee.

Care Program Enrollment Evaluation Result     Represents the result of an evaluation done to
assess the eligibility of a participant enrolling for a
research study or care program.

<!-- page:795 -->




Object                                               Purpose

Diagnostic Summary                                   Represents the findings, interpretations, and
summaries of tests performed on participants.


In addition to these objects, Participant Management also uses the objects in the Discovery Framework
data model to support Assessments and recommendations.


Randomization

Here’s the set of objects to use to define randomization.


Object                                               Purpose

Research Study Randomization                         Represents the randomization algorithm
configuration defined for a research study.

Research Study Randomization Block                   Represents the details of a block that’s generated
through the parameters specified in the research
study randomization.

Research Study Randomization Block Slot              Represents the individual randomization block
items that correspond to a research study
randomization block.

Research Study Randomization Criteria                Represents the criteria definition for grouping the
participants or candidates that participate in the
research study.

Research Study Comparison Group                      Represents the details of a research study
comparison group.

Research Study Comparison Group Candidate            Represents the junction between a research study
control group and a research study participant or
candidate.


Permissions

Users need these permissions and permission sets to use Participant Management.


Permission                         Type                                Purpose

Clinical Trial Manager             Permission Set License              Users can design and run clinical
trials.

Clinical Trial Coordinator         Permission Set License              Users can involve in daily
activities to coordinate tasks of

<!-- page:796 -->




Permission                           Type                            Purpose

clinical trials.

Clinical Trial Participant           Permission Set License          Users can view and register for
research studies as external
users on the Experience Cloud
site.

Clinical Trial Guest                 Permission Set License          Users can view and register for
research studies as guest users
on the Experience Cloud site.

Clinical Trial Site Coordinator in   Permission Set License          Users, such as doctors or nurses,
Experience Cloud                                                     who are Experience Cloud site
external users can coordinate
tasks on clinical trial sites.

Clinical Trial Manager               Permission Set                  Users can design, manage, and
run clinical trials.

Clinical Trial Coordinator           Permission Set                  Users can coordinate tasks of
clinical trials.

Clinical Trial Participant           Permission Set                  Users can view and register for
research studies on the
Experience Cloud site as external
users.

Clinical Trial Guest                 Permission Set                  Users can view and register for
research studies on the
Experience Cloud site as guest
users.

Clinical Trial Site Coordinator in   Permission Set                  Users can coordinate tasks on
Experience Cloud                                                     clinical trials as Experience
Cloud site external users.


## See Also

Assign Permission Sets for Participant Management Users
Salesforce Help: Participant Management Objects and Fields


Enable Participant Management

Give users access to participant management features by enabling org preferences in your Salesforce org.
By enabling Participant Management, you can streamline the recruitment and enrollment processes in
clinical trials.

<!-- page:797 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


1. From Setup, in the Quick Find box, find Participant Management Settings, and select it.
2. To access the participant enrollment features and the data model, turn on Participant Recruitment
and Enrollment.
After you enable this feature setting, you’ll see the guided setup for Participant Recruitment and
Enrollment.
3. To use Randomized Clinical Trials feature, turn on Research Study Randomization.
4. To match candidates with clinical trials using Einstein Candidate Matching, turn on Candidate
Matching.

Your Salesforce org now has access to the Participant Management features and the data model.


Assign Permission Sets for Participant Management Users

Participant Management offers five permission sets: Clinical Trial Manager, Clinical Trial Coordinator,
Clinical Trial Participant, Clinical Trial Guest, and Clinical Trial Site Coordinator in Experience Cloud.
Assign the necessary permission sets to users according to their roles.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To assign permission sets and permission set            Modify All Data and Privacy Center
licenses:


Here’s the list of permission sets required to access various features of Participant Management.


## Permissions

User                                                   Permission Sets Required


## Administrator

Actionable Segmentation

Clinical Trial Manager

<!-- page:798 -->




User                              Permission Sets Required


Criteria-Based Search and Filter

Data Pipelines Base User

Health Cloud Starter

Omnistudio Admin

Omnistudio User (OmniStudioExecution)

Omnistudio User (OmniStudioUser)

Prompt Template Manager

Prompt Template User

Query for Datapipelines User

Use Data Processing Engine


## Trial Manager

Actionable Segmentation

Clinical Trial Manager

Data Pipelines Base User

Health Cloud Starter

Omnistudio Admin

Omnistudio User

Prompt Template Manager

Prompt Template User

Query for Datapipelines User

Criteria-Based Search and Filter

Trial Coordinator
Omnistudio User

Prompt Template User

Health Cloud Starter

Clinical Trial Coordinator

<!-- page:799 -->




User                                                Permission Sets Required


## Trial Participant

Clinical Trial Participant

Trial Coordinator Experience Cloud                  Clinical Trial Site Coordinator in Experience Cloud

Trial Guest                                         Clinical Trial Guest


1. From Setup, in the Quick Find box, enter Users, and then select Users. .
2.    Click the user who you want to assign the permission set license to.
3.    In the Permission Set License Assignments related list, click Edit Assignments.
4.    Select the required permission sets to assign depending on the user role.
5.    Save your changes.


## See Also

Participant Management Data Model and Permissions


Add Data for Participant Recruitment and Enrollment

Quickly create a record from an object’s home page. Clinical trial managers can create records that are
necessary to use the features within Participant Management. Clinical trials are represented using care
programs and research studies.

1. Create a Care Program
You can define a care program and associate it with the research study. To create a care program,
define the program and the relationships and activities within it.
2. Create a Care Program Detail
Stores the keywords, focus, and condition, including other details of the care program of the study.
You can use these details to manage and track specific details of the care programs within clinical
trials.
3. Create Care Program Sites
Stores the name, related care program, and healthcare facility of the care program site. Use this
information to manage and track specific details of the care program site within clinical trials.
4. Create a Research Study
Stores the name, title, and all the necessary essential details of the research study. You can use these
details to manage and track specific details of the research studies within clinical trials.
5. Create a Research Study Candidate
Capture and organize essential details about the participants enrolled for the research study. This
record is created automatically as part of the registration flow. However, trial managers or coordinators
can also manually create these records as necessary.
6. Create a Research Study Comparison Group
Capture and organize essential details about the participants allocated to the comparison groups by
creating a research study comparison group record.
7. Create Assessment Questions
Capture and organize essential details about the assessment questions in your prescreening eligibility

<!-- page:800 -->



checklist.
8. Add Consent Documents for Clinical Trials
You can add consent documents to clinical trials by associating those documents with the related care
program and defining their data use purpose.
9. Add Clinical Data to View Patient Details
Use the object’s homepage to create records for adding clinical data. This data helps site coordinators
track a candidate’s medical information at a glance in the research study candidate’s lightening page.
You can also use these objects in the Candidate Matching context definition to retrieve candidate’s
health data for the Research Study Candidate Evaluation prompt template.


Create a Care Program

You can define a care program and associate it with the research study. To create a care program, define
the program and the relationships and activities within it.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:
Clinical Trial Manager


1.    From the App Launcher, find and select Care Programs.
2.    Click New.
3.    Enter the name of the care program.
4.    Select the parent program associated with the care program, if needed.
5.    Select a category for the care program.
For example, to use a care program in the research study record, select Trial Management as the
category.
6.    Enter the start date of the care program.
7.    If necessary, enter the program’s end date.
8.    Add a description for the care program.
9.    Select the status of the care program.
10.    Find and select a program sponsor, if any.
11.    Save your changes.


Create a Care Program Detail

Stores the keywords, focus, and condition, including other details of the care program of the study. You
can use these details to manage and track specific details of the care programs within clinical trials.

<!-- page:801 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:
Clinical Trial Manager


1.    From the App Launcher, find and select Care Program Details.
2.    Click New.
3.    In CareProgram, select the related care program for this care program detail.
4.    In Detail Type, select the detail type for the program.
5. In Detail Record, select the corresponding detail record for the program.
6. Save your changes.


Create Care Program Sites

Stores the name, related care program, and healthcare facility of the care program site. Use this
information to manage and track specific details of the care program site within clinical trials.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:
Clinical Trial Manager


To learn more about fields and values, refer to CareProgramSite.

1.    From the App Launcher, find and select Care Program Sites.
2.    Click New, and enter the name of the care program site.
3.    Select the related care program for this care program site.
4.    Select the healthcare facility associated with the care program site, if necessary.
5.    Select the location associated with the care program site.

Note Make sure that the latitude and longitude fields on the location object associated with the
care program site object are populated. If these fields aren't populated, searches for care
program sites don't return any results.

<!-- page:802 -->



6. Select the status of the care program site, if necessary.
7. Save your changes.


## See Also

Set Up Experience Cloud Site for Participant Management
Create Guest Users Sharing Rules in Participant Management


Create a Research Study

Stores the name, title, and all the necessary essential details of the research study. You can use these
details to manage and track specific details of the research studies within clinical trials.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:
Clinical Trial Manager


Add or edit values in a custom picklist from the fields area of an object. For more information, see Add or
Edit Picklist Values. To learn more about Research Study fields and values, refer ResearchStudy.

1. From the App Launcher, find and select Research Studies.
2. Enter New, and enter the name of the research study. For example, A Study to Assess the
Effect of Dexpramipexole in Adolescents and Adults With Eosinophilic Asthma
(EXHALE-4).
3. If necessary, enter the title for the research study.
4. Enter the summary for the research study, and a description, if needed.
5. Select the care program that you want to add as part of this research study.
6. Select the blinding type for the research study, if any.
For example, you can select Double Blinding. It’s a type of clinical trial in which participants and
researchers don’t know which treatment or intervention participants receive until the trial ends.
7. Select the publication status. For example, select Active.
8. Select the intent type, if needed.
9. Select the phase applicable to the research study, if any.
10. Select the discontinuation reason, if any.
11. Select the start date and end date, along with time for the research study, if needed.
12. If necessary, select the uniform resource identifier, source system, and source system identifier for the
research study.
13. If necessary, select the source system modified dates.
14. If necessary, select the type for the research study.

<!-- page:803 -->



15.    If necessary, select the primary contact information of the research study.
16.    If necessary, enter an eligible maximum and minimum age.
17.    If necessary, select an eligible gender.
18.    Save your changes.


Create a Research Study Candidate

Capture and organize essential details about the participants enrolled for the research study. This record
is created automatically as part of the registration flow. However, trial managers or coordinators can also
manually create these records as necessary.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:
Clinical Trial Manager

OR

Clinical Trial Coordinator


1. From the App Launcher, find and select Research Study Candidates, and then click New.
2. Search and select the name of the research study candidate.
3. Select the research study that the candidate is associated with.
4. If necessary, select the care program site associated with the research study. For example, select the
site-based matching care program that the candidate is interested in.
5. Select the Status of the candidate of the research study, if necessary.
6. Enter a description for the research study candidate.
7. Save your changes.


Create a Research Study Comparison Group

Capture and organize essential details about the participants allocated to the comparison groups by
creating a research study comparison group record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the

<!-- page:804 -->




Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:
Clinical Trial Manager


1. From the App Launcher, find and select Research Study Comparison Groups, and then click New.
2. Enter a name for the research study comparison group.
3. Select the research study that you want to add to the comparison group.
4. Enter the allocation ratio.
The distribution of participants across groups can be controlled using the allocation ratio field. If you
leave this field blank, it defaults to 1. For example, consider a study with three comparison groups and
allocation ratio values of 1:1:2. If the study has 100 participants, the distribution will be as: 25
participants in the first group, 25 participants in the second group, and 50 participants in the third
group.
5. If necessary, enter a description for the research study comparison group.
6. Select the type code that represents the main intent of the research study for the comparison group.
7. Save your changes.


Create Assessment Questions

Capture and organize essential details about the assessment questions in your prescreening eligibility
checklist.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:
Clinical Trial Manager


1. From the App Launcher, find and select Assessment Questions.
2. Click New.
3. Specify these details.
a. Enter the name of the assessment question.
b. Select the data type of the assessment question.
c. Select the category of the assessment question.
d. Enter the question text. For example, enter Are you on any medication?
e. Enter Response Values. For example, enter Yes and No on separate lines.
Response Values are required for the data types Radio, Radio Group, Select, and Multi-select.

<!-- page:805 -->



f. To make the question available to OmniScript, select Active.
g. If necessary, complete the other fields on the New Assessment Question page.
4. Save your changes.


Add Consent Documents for Clinical Trials

You can add consent documents to clinical trials by associating those documents with the related care
program and defining their data use purpose.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To add and manage data for clinical trials:            Clinical Trial Manager

To initiate consent and manage related tasks:          Clinical Trial Coordinator

To access and view consent forms:                      Clinical Trial Participant


To learn more, see Add Consent Documents to a Care Program.


Add Clinical Data to View Patient Details

Use the object’s homepage to create records for adding clinical data. This data helps site coordinators
track a candidate’s medical information at a glance in the research study candidate’s lightening page. You
can also use these objects in the Candidate Matching context definition to retrieve candidate’s health
data for the Research Study Candidate Evaluation prompt template.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To manage data for clinical trials:                    Clinical Trial Manager

To view and add new requests to the patient card:      Clinical Trial Coordinator


This clinical data is also used in the built-in Prepare Candidate Details for Participant Enrollment data

<!-- page:806 -->



processing engine definition. Create records for these clinical data model objects.

- Account (Patient)
- Allergy Intolerance
- Care Observation
- Care Observation Component
- Clinical Encounter
- Clinical Service Request
- Diagnostic Summary
- Health Condition
- Patient Health Reaction
- Patient Immunization
- Patient Medical Procedure
- Patient Medication Dosage
- Medication
- Medication Request
1. From the App Launcher, find and select the object from the preceding list for the kind of record you
want to create. For example, to create a record for Allegery Intolerance, find and select Allergy
Intolerances.
2. Click New.
3. Enter values in the fields, as applicable.
Complete all the required fields marked with an asterisk (*).
4. Save your changes.


## See Also

Add Clinical Information to the Patient Card


Participant Recruitment

Participant Management digitizes and optimizes candidate recruitment in clinical trials. With Participant
Management, you can help users overcome recruitment challenges, save time, and improve trial
efficiency.

Life Sciences organizations often encounter significant delays in clinical research studies due to the
complexities of identifying and recruiting suitable candidates efficiently. These delays directly impact trial
timelines and overall success. Participant Management addresses these challenges by digitizing and
streamlining the entire recruitment experience. The platform empowers users to:

- Effortlessly locate suitable trials
- Quickly assess candidate eligibility
- Streamline the registration process
- Automatically match candidates to clinical trials
You can integrate built-in Omnistudio components into your Experience Cloud site to help your
organization establish robust prescreening and registration processes. These features enhance the

<!-- page:807 -->



recruitment workflow and offer candidates a unified clinical trial portal experience, which results in
improved enrollment rates. The Einstein Candidate Matching feature automates the process of matching
candidates with the inclusion and exclusion criterial of clinical trials. This automation saves time in
identifying potential candidates and reduces the costs associated with converting candidates for
enrollment.


## Configure Data Processing Engine for Trial Search

Use the Data Processing Engine definition in the Clinical Trial Search feature to populate data from
multiple objects into a single Research Study Searchable Field. Before you enable this feature,
configure the necessary licenses and permissions in your Salesforce org.
Create Searchable Object Configuration for Trial Search
Use a searchable object to convert disparate pieces of data into a single searchable format. You can
select a Data Processing Engine definition to transform the pieces of information across multiple
objects and fields, and populate the searchable object with the consolidated data.
Create Search Configuration for Trial Search
Configure the trial search settings to tailor result relevance and display options.
Set Up Experience Cloud Site for Participant Management
Provide a seamless experience for candidates who wish to participate in clinical trials using Experience
Cloud. You can help your users build an engaging site that features the Criteria-Based Search and Filter
widget, which enables candidates to easily find trials that match their criteria and start the
prescreening and registration process. You can create multiple sites within your organization for
different purposes and transition between them effortlessly.
Clone and Assign Permission Set Licenses for Participant Management Guest User
Participant Management provides built-in permission set licenses that you can clone and customize to
give access to your guest users. You must also clone and modify Omnistudio user permission set
license to assign them to the guest users.
Create Guest Users Sharing Rules in Participant Management
A guest user sharing rule is a special type of criteria-based sharing rule that you use to grant record
access to unauthenticated guest users. Guest user sharing rules can grant only Read-Only access.
Create Authenticated Users Sharing Rules in Participant Management
Experience Cloud site sharing rules are a special type of criteria-based sharing rules that you use to
grant record access to authenticated portal users.
Set Up Eligibility Assessment and Candidate Registration
With Omnistudio components, you can help users check their eligibility and register for clinical trials.
Einstein Generative AI for Participant Management
Participant Management’s Einstein Candidate Matching is an AI-enabled feature designed to
automatically match candidates to the inclusion and exclusion criteria of research studies. Clinical trial
coordinators or recruiters can use this information to build different candidate cohorts.
Clinical Excellence Console App for Participant Management
Clinical trial recruiters at investigative sites are often burdened with disparate solutions to track and
monitor candidates’ recruitment and enrollment progress as well as manage daily tasks and activities.
With the Clinical Excellence Console App, you can help streamline the essential jobs for a trial recruiter
by organizing important metrics and tasks.

<!-- page:808 -->




Configure Data Processing Engine for Trial Search

Use the Data Processing Engine definition in the Clinical Trial Search feature to populate data from
multiple objects into a single Research Study Searchable Field. Before you enable this feature, configure
the necessary licenses and permissions in your Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED


## To enable Criteria-Based Search and Filter and

Data Pipelines:                                       Data Pipelines Base User

AND

Criteria-Based Search and Filter permission set

To run a Data Processing Engine definition:
Customize Application

Modify All Data

Data Pipelines Base User




Before you execute the Data Processing Engine definition, set up all the necessary data: Care Programs,
Care Program Details, Care Program Sites, and Locations.

1. Enable Data Pipelines. For more information, see Enable Data Pipelines.
2. Enable Criteria Based Search & Filter.
For more information, see Set Up Criteria-Based Search and Filter.
3. To open the Data Processing Engine definitions page, in Setup, find and select Data Processing
Engine.
4. To open the built-in Data Processing Engine definition, click Populate Research Study Searchable
Field.
To configure or add new nodes, see Configure a Data Processing Engine Node.
5. To save the Data Processing Engine in your org with a custom name, click Save As.
6. Click Activate on the builder header.
Before you execute the Data Processing Engine definition, set up all the necessary data (Care
Programs, Care Program Details, Care Program Sites, Locations).
7. To execute the Data Processing Engine definition, click Run Definition on the builder header.
Whenever you update the data in any records, you must run the data processing engine definition. Use

<!-- page:809 -->



a scheduled flow or directly run the definition from the builder to regularly synchronize the data in the
Research Study Searchable Field.


Create Searchable Object Configuration for Trial Search

Use a searchable object to convert disparate pieces of data into a single searchable format. You can
select a Data Processing Engine definition to transform the pieces of information across multiple objects
and fields, and populate the searchable object with the consolidated data.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To configure the searchable object:                    Use Criteria-Based Search and Filter system
permission


1. From Setup, in the Quick Find box, enter Criteria-Based Search and Filter, and select it.
2. On the Searchable Object Configuration tab, click New, and then enter the name of the searchable
object.
The API name is automatically populated.
3. Find and select Research Study Searchable Field.
4. (Optional) Enter a description for the searchable object.
5. Save your changes.
6. If you want to specify an alternative display format for fields used as filter criteria.
a. Open the search configuration that you created.
b. Under Filter Field Display Format, click Edit icon.
c. In Select Filter Field Display Format, select Picklist for searchable object fields that you want to see
as dropdowns.
d. Save your changes.


Create Search Configuration for Trial Search

Configure the trial search settings to tailor result relevance and display options.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license

<!-- page:810 -->



1. Select a search configuration type.
a. From Setup, in the Quick Find box, enter Criteria-Based Search and Filter, and select it.
b. Click the Search Configuration tab and then click New.
c. For configuration type, select Clinical Trial Search, and then click Next.
2. Add details to the search configuration.
a. Enter a name for the search configuration, such as Find a Clinical Trial.
The API name is populated automatically.
b. For searchable object, find and select Research Study Searchable Field.
c. For Searchable Object Configuration, select the configuration record that you created in the
searchable object configuration.
d. (Optional) Enter a description for the search configuration.
e. Click Next.
3. Select a FlexCard to display search results.
a. Find and select the TrialManagementCandidateTrialSearchResult Flexcard.
b. Click Next.
4. Configure distance criteria.
a. Select a unit of measure that you want your users to use to filter research studies.
b. Add values for the Distance Filter dropdown.
Users can use these options to filter research studies based on distance from their location.
5. Select fields to group and aggregate search results. For Search Result Display Mode, you can select
from two options Grouping and Aggregation and Multiple Fields.
a. Select the Multiple Fields option to enable range-type filtering.

You can select up to 20 fields in total, which includes both fields and range types.

b. Select fields such as Intent, Phase, Research Study Type, Eligible Gender, Status for filtering, as
needed.
c. Click Next.
6. Configure range types for number and date fields to filter search results.
a. Click Add Range.
b. Select the Range Type as In-Range or Range Overlap.
The In-Range type includes values that fall completely within the specified range. The Overlap
Range type includes values that extend into or overlap with the specified range.
c. Click Next.
- If you select Range Type as In-Range, then select an option from the Range Field. For example,
Current Enrollee Count.
- If you select Range Type as Range Overlap, then selelect a Minimum Range Field and a Maximum
Range Field. For example, Current Enrollee Count as Minimum Range Field and Target Enrollee
Count as a Maximum Range Field.
7. Select fields based on which search results can be sorted.
a. Select the fields that you want to display. For example, you can select Current Enrollee Count and
Number of Sites.
b. Turn on Single Sort option.
Allows users to sort search results based on only one field at a time.
c. Click Next.

<!-- page:811 -->



8. Skip select actions for search results page because actions don’t apply for the card view.
9. Click Done
You see a toast message confirming that your search configuration is successfully created.
10. Activate your search configuration.


Set Up Experience Cloud Site for Participant Management

Provide a seamless experience for candidates who wish to participate in clinical trials using Experience
Cloud. You can help your users build an engaging site that features the Criteria-Based Search and Filter
widget, which enables candidates to easily find trials that match their criteria and start the prescreening
and registration process. You can create multiple sites within your organization for different purposes
and transition between them effortlessly.


**REQUIRED EDITIONS**


Important To use the Participant Management features on Experience Cloud, users require the
Customer Community Plus license.

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To create an Experience Cloud site:
Create and Set Up Experiences

AND

View Setup and Configuration

To customize an Experience Cloud site:
Be a member of the site AND Create and Set Up
Experiences

OR


## Be a member of the site AND View Setup and

Configuration AND an experience admin,
publisher, or builder in that site

To publish an Experience Cloud site:
Be a member of the site AND Create and Set Up
Experiences

OR

Be a member of the site AND an experience

<!-- page:812 -->




USER PERMISSIONS NEEDED


admin or publisher in that site


To set up an Experience Cloud site, you must first enable Digital Experiences. For more information, see
Enable Digital Experiences.

If you haven’t already created an Experience Cloud site, see Create an Experience Cloud Site.

1. From Setup, under Digital Experiences, find and select All Sites.
2. To open the site that you want to add Criteria-Based Search and Filter components to, in the Action
column, click Builder.
3. From Experience Builder Settings, click General, and then select the Public Access option.
4. Add the Criteria-Based Search and Filter widget to your Experience Cloud site homepage.
a. In the Experience Cloud builder, go to Components, then find and select Criteria-Based Search and
Filter, and then drag the component onto the home page.
b. Click the Criteria-Based Search and Filter widget pane that you added, and then click Select.
c. In the Search Configurations page, move the Trial Search Configuration from the Available pane to
the Selected pane, and click OK. For more information, see Create Search Configuration for Trial
Search.
5. Create a new page in your Experience builder.
a. On the Experience Cloud builder, on the top tool bar, click     to open the page's properties.
b. Click New Page at the bottom of the window.
c. In the New Page window, click Object Pages.
d. In New Object Pages window, find and select Research Study.
e. Click Create, and then click Create.
6. Change the content layout in the Experience builder.
a. On the Experience Cloud builder, on the top left corner, click Home to open the Pages menu.
b. Expand Research study, and in the Research Study Detail option, click Page Actions, and then click
Page Settings.
c. In the Properties tab, go to Layout, and click Change.
d. In the Change Content Layout window, under Current Layouts, select 2 columns, 2:1 ratio.
e. Click Change.
7. Add Flexcards to the Experience Cloud page.
a. TrialManagementResearchStudyHighlights
b. TrialManagementResearchStudyDetails
c. TrialManagementResearchStudySites
d. TrialManagementResearchStudyLaunchEligibilityCheck
e. TrialManagementTrialEligibilityCriteria
8. Configure access for guest or unauthenticated users.
a.   On the Experience builder, click      on the left sidebar.
b.   In the General tab, under Guest User Profile, click <Site_Name> Profile link.
c.   In the Profiles Setup page, click Edit.
d.   Under General User Permissions, select Enables consumers and partners to execute OmniScripts,
DRs, Cards through a Community or off platform.

<!-- page:813 -->



e. Under Standard Object Permissions, give Read access to Omni Data Transformations, Omni
Processes, and Omni UI Cards.
9. Clone the permission set licenses for participant management and omnistudio, and then assign them
to guest users.
a. On the Experience Cloud builder, click      on the left sidebar.
b. In the General tab, under Gues User Profile, click <Site_Name> Profile link.
c. On the user profile page, click View Users.
d. Select the name of the guest user.
e. In the Permission Set Assignments section, click Edit Assignments.
f.From the Available Permission Sets list, select the permission set licenses that you cloned and move
them to the Enabled Permission Sets list.
For example, Clinical Trial Guest, Omnistudio User, Omnistudio User.
g. In addition, also add a Criteria-Based Search and Filter for Experience Cloud permission set license.
h. Save your changes.
10. Go back to the Experience cloud builder and publish your Experience Cloud site.


## See Also

Create Search Configuration for Trial Search
Clone and Assign Permission Set Licenses for Participant Management Guest User


Clone and Assign Permission Set Licenses for Participant Management
Guest User

Participant Management provides built-in permission set licenses that you can clone and customize to
give access to your guest users. You must also clone and modify Omnistudio user permission set license
to assign them to the guest users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To assign permission set and permission set         Modify All Data and Privacy Center
license:


1. From Setup, in the Quick Find box, enter Permission Sets, and select it.
2. Find the permission set license that you want to clone and customize and then click clone.
3. Enter a label and description, and then save your changes.
The API name is automatically populated.
4. Click the permission set label that you cloned, and then click Object Settings.
5. Under Object Settings, click OmniScript Saved Sessions, and then click Edit.

<!-- page:814 -->



6. Under Object Permissions, disable the Create, Edit, and Delete option.
We can’t assign these permissions to guest user.
7. Save your changes.
8. Similarly, repeat the steps to clone Omnistudio User. There are two permission set licenses with the
same name.
9. Also, clone Clinical Trial Guest permission set license.
When you clone Clinical Trial Guest, make sure to provide Read access to status and location within
the Care Program Site object.


Create Guest Users Sharing Rules in Participant Management

A guest user sharing rule is a special type of criteria-based sharing rule that you use to grant record access
to unauthenticated guest users. Guest user sharing rules can grant only Read-Only access.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To create sharing rules:                              Manage Sharing


1. From Setup, in the Quick Find box, find Sharing Settings and select it.
2. Create a new sharing rule.
a. In the Sharing Rules related list, go to Omni Data Transformation Sharing Rules, and then click New.
b. In the Omni Transformation Sharing Rules Setup page, under Step 1: Rule Name, enter a label and
description.
c. In Step 2: Select your rule type, select the Based on criteria option.
d. In Step 3: Select which records to be shared, select Field as Active, operator as Equals, and Value as
True.
e. In Step 4: Select the guest users to share with, and select the site where you want these changes to
apply.
f. Save your changes.
3. Similarly, create sharing rules for Omni Process and Omni UI Card.
4. Create sharing rules for Research Study, Research Study Searchable Field, Care Program Site, and
Location.
Follow the above steps. However, for the Step 3, select the criteria based on what you want the guest
user to access or see. For example, if you want the guest user to see the name of the research study,
then select Field as Name, Operator as Contains, and Value as Novel Antiviral Drug ZYX-789.
5. Save your changes.

<!-- page:815 -->




Create Authenticated Users Sharing Rules in Participant Management

Experience Cloud site sharing rules are a special type of criteria-based sharing rules that you use to grant
record access to authenticated portal users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To create sharing rules:                                Manage Sharing


1. From Setup, in the Quick Find box, find Sharing Settings, and select it.
2. Click Edit.
3. For the Experience Cloud user who is already registered on the portal, select Default Internal Access as
Public Read Only.
4. Select Default External Access as Public Read Only for these objects: Authorization Form,
Authorization Form Text, Data Use Purpose, Research Study Candidate, and Care Program.
5. Save your changes.


Set Up Eligibility Assessment and Candidate Registration

With Omnistudio components, you can help users check their eligibility and register for clinical trials.


**REQUIRED EDITIONS**

To store responses after users check their eligibility and register for clinical trials, set up the
TrialManagement_CandidateEligibilityAndRegistration Omniscript. To let users check their eligibility and
register for clinical trials without storing their responses, set up the TrialManagement_CandidateEligibility
and TrialManagement_CandidateEligibilityAndRegistrationMerged Omniscripts.


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license



## Set Up the Omniscript for Eligibility Assessment and Candidate Registration

Let your users check their eligibility and register for clinical trials, while storing their responses during
eligibility assessment and registration.
Set Up the Omniscript for Eligibility Assessment
Help your users easily identify their eligibility for the clinical trials by setting up Omnistudio

<!-- page:816 -->



components. With this feature, candidates can quickly determine their eligibility by responding to a
few predefined questions.
Set Up the Omniscript for Candidate Registration
With Omnistudio components, you can provide a quick registration experience for your users. Set up
the registration and manage duplicate registration scenarios to ensure candidates are registered for
clinical trials.


Set Up the Omniscript for Eligibility Assessment and Candidate Registration

Let your users check their eligibility and register for clinical trials, while storing their responses during
eligibility assessment and registration.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To enable Prefill Assessments:                        Customize Application

Omnistudio Designer

To edit and update Omnistudio components:             Omni Designer

To manage candidate registration:                     Clinical Trial Manager


Before you set up the TrialManagement_CandidateEligibilityAndRegistrationMerged Omniscript, complete
the prerequisites.

- Enable Discovery Framework.
- Enable Prefill Assessment Questions.
- Create Assessment Questions.
- Create an Authorization Form Text record. Before you create this record, ensure that an Authorization
Form record and a corresponding Content Document record are created. To learn more, see Intelligent
Document Automation for Consent and Disclosures.
-    Set Up Person Accounts. The topic linked here explains how to set up person accounts in Health
Cloud. However, you can refer to the topic to follow the steps to set up person accounts in Life
Sciences Cloud.
-    Enable OmniStudio Metadata, deploy custom lightning web components in standard runtime, and
disable Managed Package Runtime in your org.

1. From the App Launcher, find and select Omniscripts.
2. Create a version of the TrialManagement_CandidateEligibilityAndRegistrationMerged Omniscript, and
then click Edit Form.

<!-- page:817 -->



3. Add the assessment questions.
a. Select the assessment questions that you created for eligibility assessment.
b. Drag and drop the questions under the appropriate Omniscript headings. For example, if Participant
Age? is your question, drag it under personal information.
c. Click OK.
4. Add the Authorization Form Text record details and Person Account record Id to the Omniscript.
a. In the Omniscript version that you created, select the CandidateRegistrationRequiredIds set values
element.
b. In Set Values Properties, update the AuthorizationFormTextId and RecordTypeId values.
c. Save your changes.
5. Add the Omniscript version that you created to the Care Program Detail record.
a. From the App Launcher, find and select Care Program Details.
b. Open the Care Program Detail record that you want to add the Omniscript to.
c. Edit the care program detail record.
d. For Detail Type, select Omni Process.
e. For Detail Subtype, select the subtype that you created to use as a differentiator for participant
management.
f. For Detail Record, select the Omniscript version you want to add to the record.
g. Save your changes.
6. Create and configure an Expression Set. For more information, see Create An Expression Set.
7. Create a new version of the TrialManagement_GetCandidiateEligibilityResult integration procedure.
a. From the App Launcher, find and select Integration Procedures.
b. From the Integration Procedures list view, select the TrialManagement_GetCandidiateEligibilityResult
integration procedure.
c. On the TrialManagement_GetCandidiateEligibilityResult integration procedure page, click Create
Version.
This integration procedure evaluates candidate responses and returns a value that indicates whether
it’s a match or not.
8. Add the expression set that you created to the new integration procedure version.
a. From the App Launcher, find and select Omnistudio Integration Procedures.
b. Select the integration procedure version that you created.
c. Under Structure, select ExpressionSetForHealthCondition.
d. In the Properties tab, for Configuration Name, enter the name of the expression set that you
created.
e. Under Additional Input/Output/Failure Response, select Send Only Additional Input.
f. Under Additional Input, enter the key in the DataInput:AssessmentQuestionAPIName and
value in
%AssessmenResponseFormatConvertorAction:result:AssessmentQuestionAPIName%
format. For example, if the assessment response is Participant_Gender then the key is
DataInput:Participant_Gender and value is
%AssessmenResponseFormatConvertorAction:result:Participant_Gender% .
g. Under Structure, select ResponseForCandidateEligibility.
h. Under Additional Output Response, replace the value of the isEligible additional output with
IF((%ExpressionSetForHealthConditioncalculationResults:condition_output__1%
== null),

<!-- page:818 -->



false,ExpressionSetForHealthConditioncalculationResults:condition_output__1)
i. Activate the integration procedure version.
9. Set up reCAPTCHA.
a. Get the Site Key and Secret Key from https://www.google.com/recaptcha. For more information, see
Get the Site Key and Secret Key from ReCaptcha.
b. From Setup, find and select Web-to-Case HTML Generator.
c. On the Setup page, click the lookup icon next to the reCAPTCHA API Key Pair field.
d. On the Lookup page, click New, and then enter the API Key Pair Nickname, Site Key, and Secret.
e. Save your changes.
10. Add the reCAPTCHA details to the Omniscript.
a. From the App Launcher, find and select Omniscripts.
b. Find and open the Omniscript version that you created.
c. On the Omniscript page, select SiteGoogleCaptchaDetails.
d. In Set Values Properties, update the SiteCaptchaAPIKeyPairNickName and SiteCaptchaKey values.
e. Activate the Omniscript version.
11. Add reCAPTCHA settings to the experience cloud site. For more information, see Set Up ReCaptcha.
12. Update the Duplicate Management settings to avoid duplicate registrations.
a. From Setup, in the Quick Find box, enter Matching Rules, and then select Matching Rules.
b. Activate the Standard Person Account Matching Rule.
c. From Setup, in the Quick Find box, enter Duplicate Rules, and then select Duplicate Rules.
d. Click New Rule, and then select Person Account.
e. On the Duplicate Rules setup page, enter a rule name, description, actions, and conditions. For
more information, see Customize Duplicate Rules.
f. For Record-Level Security, select Bypass Sharing Rules.
g. Save your changes.
h. Activate the rule.
i. To create duplicate rules for Lead, repeat steps d to h.
13. To allow guest users to save their responses, add the Save Responses remote action to the
TrialManagement_CandidateEligibilityAndRegistrationMerged Omniscript, and update the remote action
properties.

Important To ensure that each assessment response is linked to the correct candidate, you can
create a record-triggered flow to copy the value from the Custom-Context-Id field you created to
the ResponseContextId field on the Assessment record.

a. Drag the remote action element from the Build panel onto the canvas, and place it directly after the
Execute Candidate Registration Integration Procedure Action element.
b. Click the Remote Action element on the canvas and enter a name and field label in its Properties
panel.
c. In the Remote Properties section, set the value of Remote Class to
discoveryfrmwrk.StoreResponses and the value of Remote Method to invokeMethod.
d. In the Remote Properties section, under Remote options, update the key-value pairs as shown in
the table.

You must create a custom field Clinical_Context_Id in the Assessment object.

<!-- page:819 -->




Key                                               Value

Assessment.Clinical_Context_Id                    %ResearchStudyCandidate%

Assessment.AssessmentStatus                       Completed

e. In the Remote Properties section, update the key-value pairs in the Extra Payload section. Maintain
the key-value pairs as shown in the table, except for the last three, which you can customize based
on your requirements.

Key                                               Value

omniscriptId                                      %omniscriptId%

language                                          %language%

type                                              %type%

runMode                                           %runMode%

sId                                               %sId%

theme                                             %theme%

subType                                           %subType%

userProfile                                       %userProfile%

timeStamp                                         %timeStamp%

userTimeZoneName                                  %userTimeZoneName%

userTimeZone                                      %userTimeZone%

userCurrencyCode                                  %userCurrencyCode%

userName                                          %userName%

omniProcessId                                     %omniProcessId%

localTimeZoneName                                 %localTimeZoneName%

getCandidatePersonalInformation                   %getCandidatePersonalInformation%

getCandidateAndFamilyHealthInformation            %getCandidateAndFamilyHealthInformati
on%

getCandidateLifestyleInformation                  %getCandidateLifestyleInformation%

f. Enable Send Only Extra Payload checkbox.
g. Activate your Omniscript version.

<!-- page:820 -->



Set Up the Omniscript for Eligibility Assessment

Help your users easily identify their eligibility for the clinical trials by setting up Omnistudio components.
With this feature, candidates can quickly determine their eligibility by responding to a few predefined
questions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To enable Prefill Assessments:                         Customize Application

Omnistudio Designer


Before you set up the TrialManagement_CandidateEligibility Omniscript, complete the prerequisites.

- Enable Discovery Framework.
- Enable Prefill Assessment Questions.
- Create Assessment Questions.
- Enable OmniStudio Metadata, deploy custom lightning web components in standard runtime, and
disable Managed Package Runtime in your org.

1. From the App Launcher, find and select Omniscripts.
2. Create a version of the TrialManagement_CandidateEligibility Omniscript, and then click Edit Form.
3. Add the assessment questions.
a. Select the assessment questions that you created for eligibility assessment.
b. Drag and drop the questions under the appropriate Omniscript headings. For example, if Participant
Age? is your question, drag it under personal information.
c. Click OK.
4. Add the Omniscript version that you created to the Care Program Detail record.
a. From the App Launcher, find and select Care Program Details.
b. Open the care program detail record that you want to add the Omniscript to.
c. Edit the care program detail record.
d. For Detail Type, select Omni Process.
e. For Detail Subtype, select the subtype that you created to use as a differentiator for participant
management.
f. For Detail Record, select the Omniscript version you want to add to the record.
g. Save your changes.
5. Create and configure an Expression Set. For more information, see Create An Expression Set.
6. Create a new version of the TrialManagement_GetCandidiateEligibilityResult integration procedure.
a. From the App Launcher, find and select Integration Procedures.
b. From the Integration Procedures list view, select the TrialManagement_GetCandidiateEligibilityResult

<!-- page:821 -->



integration procedure.
c. On the TrialManagement_GetCandidiateEligibilityResult integration procedure page, click Create
Version.
This integration procedure evaluates candidate responses and returns a value that indicates whether
it’s a match or not.
7. Add the expression set that you created to the new integration procedure version.
a. From the App Launcher, find and select Omnistudio Integration Procedures.
b. Select the integration procedure version that you created.
c. Under Structure, select ExpressionSetForHealthCondition.
d. In the Properties tab, for Configuration Name, enter the name of the expression set that you
created.
e. Under Additional Input/Output/Failure Response, select Send Only Additional Input.
f. Under Additional Input, enter the key in the DataInput:AssessmentQuestionAPIName and
value in
%AssessmenResponseFormatConvertorAction:result:AssessmentQuestionAPIName%
format. For example, if the assessment response is Participant_Gender then the key is
DataInput:Participant_Gender and value is
%AssessmenResponseFormatConvertorAction:result:Participant_Gender% .
g. Under Structure, select ResponseForCandidateEligibility.
h. Under Additional Output Response, replace the value of the isEligible additional output with
IF((%ExpressionSetForHealthConditioncalculationResults:condition_output__1%
== null),
false,ExpressionSetForHealthConditioncalculationResults:condition_output__1)
i. Activate the integration procedure version.


## See Also

Create Assessment Questions
Create a Care Program Detail


Set Up the Omniscript for Candidate Registration

With Omnistudio components, you can provide a quick registration experience for your users. Set up the
registration and manage duplicate registration scenarios to ensure candidates are registered for clinical
trials.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To edit and update Omnistudio components:            Omni Designer

<!-- page:822 -->




USER PERMISSIONS NEEDED

To manage candidate registration:                   Clinical Trial Manager


Before you set up the TrialManagement_CandidateEligibilityAndRegistrationMerged Omniscript, complete
the prerequisites.

- Create an Authorization Form Text record. Before you create the record, make sure that you create an
Authorization Form record and an Content Document record.
-    Set Up Person Accounts. The topic linked here explains how to set up person accounts in Health
Cloud. However, you can refer to the topic to follow the steps to set up person accounts in Life
Sciences Cloud.

1. From the App Launcher, find and select Omniscripts.
2. Create a version of the TrialManagement_CandidateEligibilityAndRegistrationMerged Omniscript, and
then click Edit Form.
3. Add the Authorization Form Text record details and Person Account record Id to the Omniscript.
a. In the Omniscript version that you created, select the CandidateRegistrationRequiredIds set values
element.
b. In Set Values Properties, update the AuthorizationFormTextId and RecordTypeId values.
c. Save your changes.
4. Set up reCAPTCHA.
a. Get the Site Key and Secret Key from https://www.google.com/recaptcha. For more information, see
Get the Site Key and Secret Key from ReCaptcha.
b. From Setup, find and select Web-to-Case HTML Generator.
c. On the Setup page, click the lookup icon next to the reCAPTCHA API Key Pair field.
d. On the Lookup page, click New, and then enter the API Key Pair Nickname, Site Key, and Secret.
e. Save your changes.
5. Add the reCAPTCHA details to the Omniscript.
a. From the App Launcher, find and select Omniscripts
b. Find and open the Omniscript version that you created.
c. On the Omniscript page, select SiteGoogleCaptchaDetails.
d. In Set Values Properties, update the SiteCaptchaAPIKeyPairNickName and SiteCaptchaKey values.
e. Activate the Omniscript version.
6. Add reCAPTCHA settings to the experience cloud site. For more information, see Set Up ReCaptcha.
7. Update the Duplicate Management settings to avoid duplicate registrations.
a. From Setup, in the Quick Find box, enter Matching Rules, and then select Matching Rules.
b. Activate the Standard Person Account Matching Rule.
c. From Setup, in the Quick Find box, enter Duplicate Rules, and then select Duplicate Rules.
d. Click New Rule, and then select Person Account.
e. On the Duplicate Rules setup page, enter a rule name, description, actions, and conditions. For
more information, see Customize Duplicate Rules.
f. For Record-Level Security, select Bypass Sharing Rules.
g. Save your changes.
h. Activate the rule.
i. To create duplicate rules for Lead, repeat steps d to h.

<!-- page:823 -->




## Impact of Duplicate Rules in Candidate Registration

In Candidate Registration, the behavior of account creation and associated records is determined by
whether duplicate rules are enabled. Candidate registration for a trial results in the creation of an
account record and an associated research study candidate record. Registration for future trials results
in the creation of a lead record and a consent record.


Impact of Duplicate Rules in Candidate Registration

In Candidate Registration, the behavior of account creation and associated records is determined by
whether duplicate rules are enabled. Candidate registration for a trial results in the creation of an
account record and an associated research study candidate record. Registration for future trials results in
the creation of a lead record and a consent record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


Duplicate Rules Enabled for Person Account

Logged-in Users:

- Registering with a new email ID: Registration is successful and an account is created with a research
study candidate record having a lookup to the newly created account.
-    Registering with an email ID already used for prior registration: Registration fails because the research
study candidate record exists for the specified account.
-    Registering with an existing email ID for which an account exists: Registration is successful. Duplicate
rules prevent the creation of an account. Instead, the feature retrieves the existing account, and a
research study candidate record is created and linked to the retrieved account.

Guest Users:

- Registering with a new email ID: Registration is successful and an account is created with a research
study candidate record having a lookup to the newly created account.
-    Registration fails because duplicate rules prevent new account creation. Because the guest user
doesn’t have access to retrieve an existing account ID, the existing account can't be retrieved.


Duplicate Rules Enabled for Lead

Logged-in Users:

- Registering for future trials with a new email ID: Registration is successful, creating a lead.
- Registering for future trials with an email ID that has a pre-existing lead: Registration is successful. The

<!-- page:824 -->



system uses the existing lead ID and creates a consent record.

Guest Users:

- Registering for future trials with a new email ID: Registration is successful, creating a lead.
- Registering for future trials with an email ID that has a preexisting lead: Registration fails because the
duplicate rule prevents the creation of a lead. Because the guest user doesn’t have access to retrieve
the existing lead ID, the lead creation fails.


Example

Note If Duplicate Rules aren't enabled, then for every scenario, a record (duplicate) is created.
Candidate Registration doesn't restrict the creation of accounts or leads, resulting in duplicate
records.



Einstein Generative AI for Participant Management

Participant Management’s Einstein Candidate Matching is an AI-enabled feature designed to
automatically match candidates to the inclusion and exclusion criteria of research studies. Clinical trial
coordinators or recruiters can use this information to build different candidate cohorts.


**REQUIRED EDITIONS**


Note This tool uses generative AI, which can produce inaccurate or harmful responses. Before using,
review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization. Learn more

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To manage data for clinical trials:                    Clinical Trial Manager


With this feature, you can create a robust pool of candidates who meet specific trial requirements. As a
result, you can improve the efficiency of clinical trials and reduce the time and cost of recruiting
candidates.


Candidate Matching Implementation Options

Implement this feature using Generative AI capabilities or a Data Processing Engine with Actionable
Lists.

<!-- page:825 -->




## Types of Implementation

Implementation                                       Description


## Einstein Generative AI

With Generative AI capabilities, the feature
understands a research study’s inclusion and
exclusion criteria. Einstein Candidate Matching
uses trial-centric criteria to search structured and
unstructured data in extensive databases of
candidate or patient information, such as
electronic medical records (EMR) and electronic
health records (EHRs). This process helps clinical
trial recruiters to identify all the candidates who
qualify for further enrollment-related processes
like an initial outreach to gauge interest in the trial
or perform pre-screening for the clinical trial.

Data Processing Engine and Actionable Lists          If you want to implement the Candidate Matching
feature without Generative AI capabilities, you can
use the Prepare Candidate Details for Participant
Management data processing engine definition
and create actionable lists definition. This
approach helps your users filter out candidates
based on some basic criteria needed to match
candidates to clinical trials.


With the Candidate Matching feature, the clinical trial coordinators are creating a pool of robust
candidates to use for outreach. Knowing that these candidates meet the specific requirements of a
research study, it’s easier to convert them for final enrollment, which increases candidate conversion
rates.


Candidate Matching Flows

You can use these built-in flows to initiate the candidate evaluation process from accounts, research
study candidates, and actionable lists record pages.

- Candidate Evaluation for Research Study
- Evaluate Members for Research Study
- Evaluate Research Study Candidates
- Evaluate Candidates for Research Study

Candidate Matching Prompt Template

The Evaluate Research Study Candidate prompt template is preconfigured to facilitate candidate
evaluation using Einstein Candidate Matching. This prompt template is triggered by the Candidate

<!-- page:826 -->



Evaluation for Research Study flow. The prompt template uses Get Candidate Matching Context Data
custom invocable action to get the candidate’s medical data, along with the research study’s inclusion
and exclusion criteria. This data is then used to match candidates to trials.


Note The prompt template isn’t editable and therefore can’t be customized.


Candidate Matching Quick Actions to Launch Flows

You can initiate the candidate evaluation process using the built-in quick actions from object record
pages with a single click.


Object                                                 Quick Action

Accounts (detail page)                                 Evaluate Candidate

Accounts (list view page)                              Evaluate Candidates

Research Study Candidates (detail page)                Evaluate Candidate

Research Study Candidates (list view page)             Evaluate Candidates

Actionable Lists                                       Evaluate Candidates


Note These quick actions are preconfigured on Accounts and Research Study Candidate record
pages. To initiate candidate evaluation from actionable list members, you must create a bulk action
configuration on Accounts.



## Enable Candidate Matching for Participant Management

Give your users access to candidate matching features by enabling org preference in your Salesforce
org. Users can then choose either AI-enabled Einstein Candidate Matching or a data processing engine
with actionable lists as an implementation method to identify candidates for clinical trials.
Set Up Candidate Matching Using Einstein Generative AI
Use the Participant Management’s Einstein Candidate Matching feature to automatically identify
candidates who meet the criteria for specific clinical trials. With this feature, your users can build a
robust pool of qualified candidates aligned with each trial's requirements.
Troubleshoot Batch Job Execution Errors
Einstein Candidate Matching uses a batch job to process large volumes of records within the flow to
match candidates with clinical trials. If you encounter issues while executing the batch job, you can
debug them.
Set Up Candidate Matching Using Data Processing Engine and Actionable Lists
Help users in setting up the Participant Management’s Candidate Matching feature by using data
processing engine and actionable lists. This approach helps them filter out candidates based on some
basic criteria that are needed to match candidates to clinical trials.

<!-- page:827 -->



Enable Candidate Matching for Participant Management

Give your users access to candidate matching features by enabling org preference in your Salesforce org.
Users can then choose either AI-enabled Einstein Candidate Matching or a data processing engine with
actionable lists as an implementation method to identify candidates for clinical trials.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To manage data for clinical trials:                 Clinical Trial Manager


1. Turn on Candidate Matching.
a. From Setup, in the Quick Find box, enter Participant Management Settings, and select it.
b. Turn on Participant Recruitment and Enrollment.
c. In the Participant Management Setup page, go to the Match Candidates to Trials section and turn
on Candidate Matching.
2. Turn on FHIR-aligned clinical data model.
a. From Setup, in the Quick Find box, enter FHIR, and select FHIR R4 Support Settings.
b. In the FHIR R4 Support Settings page, turn on FHIR-Aligned Clinical Data Model.
3. From Setup, enable these features if you are using Einstein Generative AI as your implementation
method:
- Einstein Generative AI
- Context Definition
4. From Setup, enable these features if you are using data processing engine and actionable lists as your
implementation method:
- Data Pipelines
- Actionable Segmentation
With the necessary features for Candidate Matching now enabled, assign the required permissions to
your users.


## See Also

Salesforce Help: Einstein Generative AI
Salesforce Help: Einstein Generative AI for Participant Management
Salesforce Help: Add Data for Candidate Matching
Enable Candidate Matching for Participant Management
Assign Permission Sets for Participant Management Users

<!-- page:828 -->



Set Up Candidate Matching Using Einstein Generative AI

Use the Participant Management’s Einstein Candidate Matching feature to automatically identify
candidates who meet the criteria for specific clinical trials. With this feature, your users can build a robust
pool of qualified candidates aligned with each trial's requirements.


**REQUIRED EDITIONS**


Note This tool uses generative AI, which can produce inaccurate or harmful responses. Before using,
review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization. Learn more

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To manage data for clinical trials:                    Clinical Trial Manager

To initiate Einstein Candidate Matching:               Clinical Trial Coordinator

To set up Einstein Generative AI:
Prompt Template Manager

AND

Prompt Template User


Prerequisite: Complete the data setup for these objects by creating records from the object’s homepage
for Accounts, Care Programs, Care Program Eligibility Rules, Research Studies, Research Study
Candidates, and Clinical Data Model objects.

1. Enable in-app assisstance to users in sandbox orgs.
a. From Setup, in the Quick Find box, find and select In-App Guidance.
b. Click Settings.
c. Turn on Adoption Assistance in Sandbox Orgs.
d. Save your changes.
2. Set up Einstein Generative AI.
3. To use the Einstein Generative AI capabilities, activate the prompt template as it’s deactivated by
default.
a. From Setup, in the Quick Find box, enter Prompt Builder, and select it.
b. Click Activate.
4. Configure the built-in Candidate Evaluation for Research Study flow to modify the flow run context
and to save it as a new flow.
a. From Setup, enter Flows, and select it.
b. Open Candidate Evaluation for Research Study in the Flow Builder.

<!-- page:829 -->



c. Click      .
d. Click Show Advanced.
e. In the How to Run the flow dropdown, select System Context with Sharing–Enforces Record-Level
Access.
f. Click Done.
g. Click Save As New Flow, and enter a name.
h. Save your changes.
i. Activate your flow.
When you run this flow, the flow respects certain access controls, like organization-wide default
settings, role hierarchies, sharing rules, manual sharing, terms, and territories. However, it doesn’t
respect other access controls, such as object permissions or field-level security that normally restrict a
user’s access to certain data. Ensure this flow is used with full awareness of its implications.

Your users can start using the Einstein Generative AI to identify candidates who match the eligibility
criteria of a clinical trial.


## See Also

Salesforce Help: Add Data for Candidate Matching
Enable Candidate Matching for Participant Management
Assign Permission Sets for Participant Management Users


Troubleshoot Batch Job Execution Errors

Einstein Candidate Matching uses a batch job to process large volumes of records within the flow to
match candidates with clinical trials. If you encounter issues while executing the batch job, you can
debug them.


**REQUIRED EDITIONS**


Note This tool uses generative AI, which can produce inaccurate or harmful responses. Before using,
review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization. Learn more

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To manage data for clinical trials:                    Clinical Trial Manager


1. From Setup, in the Quick Find box, enter Monitor Workflow Services, and select it.
2. Click Candidate-Trial Matching Batch Job.
3. Click the name that has a Completed With Failures status.
4. In the Research study candidate trial matching batch job setup page, select the Failed Records tab and

<!-- page:830 -->



then click the name to check the failed record.
5. In the Batch Job Part Failed Record page, you can check the issue in the Error field in the Details tab.
6. Fix the issues and rerun the batch job. If the issue persists, contact your Salesforce support.


Set Up Candidate Matching Using Data Processing Engine and Actionable Lists

Help users in setting up the Participant Management’s Candidate Matching feature by using data
processing engine and actionable lists. This approach helps them filter out candidates based on some
basic criteria that are needed to match candidates to clinical trials.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To manage data for clinical trials:                   Clinical Trial Manager

To initiate Einstein Candidate Matching:              Clinical Trial Coordinator

To enable Data Pipelines:                             Data Pipelines Base User

To run a Data Processing Engine definition:
Customize Application

AND

Modify All Data

AND

Data Pipelines Base User

To enable Actionable Segmentation:
Actionable Segmentation

AND

Data Pipelines Base User


Prerequisite: Complete the data setup for these objects by creating records from the object’s homepage
for Accounts, Care Programs, Care Program Eligibility Rules, Research Studies, Research Study
Candidates, and Clinical Data Model objects.

1. Clone the built-in Prepare Candidate Details for Participant Management data processing engine
definition.
If your users want to implement the Candidate Matching feature without Einstein capabilities, you can

<!-- page:831 -->



use this data processing engine definition and create an actionable list definition. To learn more about
the data processing engine, see Data Processing Engine.
a. From Setup, enter Data Processing Engine, and select it.
b. Click Prepare Candidate Details for Participant Management.
c. In the Data Processing Engine builder, click Save As.
d. Enter a name, as needed, and click Save.
e. Activate the Data Processing Engine.
f. Run the definition.
2. Create an actionable list definition.
a. From Setup, enter Actionable Segmentation Settings, and select it.
b.    Click Use Existing Data Processing Engine, and enter a name.
c.    In the Object field, select an object from the dropdown.
d.    Select the Data the Processing Engine definition, and click Save.
e.    In the list of definitions, find the one that you created, and click Add Columns.
f.   Select the fields in the Available Fields section and add them to the Selected Fields section, and
then click Save.
g. Similarly, click Add Statuses in the List Member Status Count field.
h. Enter the status value, and click Save.
i. Click Activate and then click OK.
3. Create an actionable list.
a. From the App launcher, find and select Actionable Lists.
b. Click New, and enter a name of the actionable list.
c. Select the list definition that you created and activated earlier, and click Next.
d. Click Add Filter, you can add the values based on what you want to filter out.
e. Click Apply.
f. Click Review and Save.
4. Create a bulk action configuration on Accounts.
For more information, see Create Bulk Action Configurations. With this configuration, your users can
access and initiate Evaluate Candidates quick action from actionable lists.
5. Create a version of Get Account Records from Actionable List Members flow.
a. From Setup, in the Quick Find box, enter Flows, and select it.
b.    Find and select the Evaluate Members for Research Study flow.
c.    Click Save As New Flow, and enter a label.
d.    If necessary, add a description.
e.    Save your changes.
f.   Activate your flow.


Clinical Excellence Console App for Participant Management

Clinical trial recruiters at investigative sites are often burdened with disparate solutions to track and
monitor candidates’ recruitment and enrollment progress as well as manage daily tasks and activities.
With the Clinical Excellence Console App, you can help streamline the essential jobs for a trial recruiter
by organizing important metrics and tasks.

<!-- page:832 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


The Clinical Excellence Console App offers:

- Home page
- Research Study Candidates
- Research Studies

Clinical Excellence Home Page

The Clinical Excellence home page features the enrollment dashboard that offers clinical trial
coordinators visibility into candidates’ clinical data and their enrollment progress through different
enrollment stages. The enrollment dashboard displays key indicators, such as candidate rejection
percentage, candidate conversion rate percentage, and candidate enrollment status. This dashboard
enhances the efficiency of site coordinators or clinical trial recruiters by organizing metrics, tasks, and
events that will enable them to operate efficiently.




- Research Studies: The total number of active research studies users are working on.
- Conversion Rate: The average candidate conversion rate across active research studies.
- Candidate Status: The count of candidates across different stages of research study enrollment.
Note You can update these status values to align with the ones defined in the user org.

- Candidate Enrollment Progress report: The bar graph displays the current enrollee count and target
enrollee count across active research studies.
-    Candidate Rejection Ratio: The bar graph displays the percentage of candidates rejected for each
research study.


Research Study Candidates

In the Clinical Excellence console app, you can access research study candidates. Opening a research

<!-- page:833 -->



study candidate’s record takes the user to the candidate’s lightning page. Here, your users can find the
candidate’s medical information presented through a patient card that helps them track a candidate’s
condition by showing data from medical record fields. This lightning page allows your users to check
candidates’ medical history and add new treatments or care. In addition, this lightning page features an
Evaluation Results tab, which provides detailed outcomes of how each candidate matches the criteria of
a research study. With this feature, your users can make an informed decision about candidate selection.

On the Evaluation Results screen, you see different sections.




- Inclusion Criteria: The criteria candidates must meet to be eligible for the study. This section shows the
number of candidates that meet the criteria.
-   Exclusion Criteria: The criteria that reject candidates or participants from participating in the study.
This section shows the number of excluded participants.
-   Status: The status that indicates whether the candidate meets the specified criteria.
-   Reason: The reason as to why a candidate is a match or not a match with the research study criteria.
-   Matching Reference: The link to the reference record from which the system matched the criterion.


Research Studies

In the Clinical Excellence console app, you can access research studies. Clinical trial coordinators can
build candidate cohorts from the research study record page or research study candidates list page with
a single click. Users can select a research study's inclusion and exclusion criteria to check if candidates
match the selected criteria. Users can then calculate the total number of candidates matching the
selected criteria. They can also update the status of the research study candidates who match the
criteria.

<!-- page:834 -->






## Set Up the Clinical Excellence Console Home Page

Help trial coordinators or recruiters use the Participant Management's Clinical Excellence Console App
to streamline important jobs by organizing metrics and tasks. This console app includes a clinical
excellence Home page. It also includes research study candidate and research study pages where trial
coordinators can view candidates' medical data and candidate-matching evaluation results.
Flexcard for Enrollment Dashboard
The Participant Management’s Clinical Excellence Console uses Flexcards to provide trial coordinators
or recruiters with critical information about the recruitment and enrollment data of research study
candidates. These Flexcards display the number of research studies, candidate conversion rate
percentage, and candidate enrollment status.


Set Up the Clinical Excellence Console Home Page

Help trial coordinators or recruiters use the Participant Management's Clinical Excellence Console App to
streamline important jobs by organizing metrics and tasks. This console app includes a clinical excellence
Home page. It also includes research study candidate and research study pages where trial coordinators
can view candidates' medical data and candidate-matching evaluation results.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To manage data for clinical trials:                  Clinical Trial Manager


1. From Setup, in the Quick Find box, enter Participant Management Settings, and select it.
2. Turn on Participant Enrollment.
3. In the Participant Management Settings Setup page, click Install Reports under the Set Up Participant
Management section.
To use the candidate enrollment progress and candidate rejection percentage reports in the clinical

<!-- page:835 -->



excellence console’s enrollment dashboard, you must install reports.
4. Configure Omnistudio settings.
a. From Setup, in the Quick Find box, enter OmniStudio Settings, and then select it.
b. Turn on OmniStudio Metadata.
c. Turn off Managed Package Runtime.
d. Turn on Deploy Custom Lightning Web Components in Standard Runtime.
For more information, see https://help.salesforce.com/s/
articleView?id=xcloud.os_omnistudio_settings.htm&type=5&language=en_US.
5. The built-in clinical excellence console Home page provides an Included Care Program Status Values
specific to Salesforce. Update the values to align with the ones in your org.
a. From App Launcher, find and select Clinical Excellence.
b. On the Clinical Excellence Home page, click the (     ) icon, and then click Edit Page.
c. In the Lightning App Builder, on the components pane, select Research Studies, and then in the
configuration pane, update the Included Care Program Status Values field with the values defined in
your org.
d. Select the Conversion Rate component, and then update the Included Care Program Status Value
field with the values defined in your org.
e. Select the Candidate Status component, and then update the Included Care Program Status Value
field with the values defined in your org.
f. Save your changes.
6. Update the formula fields with labels specific to your org for Candidate Enrollment Progress and
Candidate Rejection reports.
a. On the Clinical Excellence Home page, select View Report.
b. On the Candidate Enrollment Progress report page, click Edit.
c. Under Columns, select the Is Enrolled formula field, and then click Edit Formula.
d. In the Formula field, update the built-in value Enrolled to the one that aligns with your org.
e. Apply your changes.
f. Save your changes.
g. To return to the dashboard view, click the Home tab, and then click     icon to view the updated
reports.


Flexcard for Enrollment Dashboard

The Participant Management’s Clinical Excellence Console uses Flexcards to provide trial coordinators or
recruiters with critical information about the recruitment and enrollment data of research study
candidates. These Flexcards display the number of research studies, candidate conversion rate
percentage, and candidate enrollment status.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license

<!-- page:836 -->



The Enrollment Dashboard includes these Flexcards.

- TrialManagementConversionRate
- TrialManagementDisplayResearchStudyCount
- EnrollmentDashboardHeader
- TrialManagementDisplayCandidateEnrollmentAnalysis
- TrialManagementDisplayChildCard
If you want to learn more about Omnistudio Flexcards, see OmniStudio Flexcards.


Participant Enrollment

Participant Enrollment features help your clinical trial managers, coordinators, and participants to
prepare, send, and view consent forms. It includes consent management and randomization features
that can be combined to create a participant enrollment journey using Salesforce orchestration
capabilities.

Use flows and invocable actions to set up consents and randomization processes. These features
streamline the enrollment workflow, which digitizes the enrollment processes.


## Enable Custom Sharing

Give your users with access view and manage electronic consent forms. Users with a Customer
Community Plus license can share Authorization Form Texts and Data Use Purpose records with
Accounts, Contracts, and Users specified in the Information Authorization Request record.
Clone and Activate a Flow for E-Consents
Participant Management provides flows that you can use to digitize your consent management
process. Clone and manage the flows so that your users can manage consent forms from an object
page.
Set Up Flows to Prepare Participant Consent Forms
The electronic consent feature enables participants in clinical trials to provide their consent digitally.
With this screen flow, you can help your users prepare the consent forms.
Set Up flows to View Consent Forms
Create a screen flow in Participant Management to enable access to the end users for viewing the
consent forms. With this screen flow, your end users can access and digitally sign the consent forms,
acknowledging their informed consent for clinical trials.
Enable Research Study Randomization
Give your users access to the randomization features. With randomization feature, participants
enrolled for the clinical trials are randomly assigned (randomized) to different comparison groups.
Using Block Generation
Block randomization involves creating research study randomization blocks. Each block consists of
several research study randomization block slots, which are linked to specific research study
comparison groups.
Set Up Block Randomization
Help your users implement randomization by using a block algorithm type with the randomization

<!-- page:837 -->



level as central.
Set Up Criteria-Based Block Randomization
Help your users implement criteria-based randomization in clinical trials with flows and invocable
actions. With the custom implementation, you can extend its capabilities further to randomly assign
candidates to comparison groups.
Set Up Research Study Randomization with Custom Implementation
Help your users implement randomization by using a custom algorithm type.
Using Randomization to Anonymize Participant Allocation
Randomization involves allocating clinical trial participants into different comparison groups. The
randomization API is available as an invocable action allowing it to be used through a flow or via a
REST invocation.


Enable Custom Sharing

Give your users with access view and manage electronic consent forms. Users with a Customer
Community Plus license can share Authorization Form Texts and Data Use Purpose records with
Accounts, Contracts, and Users specified in the Information Authorization Request record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


1. From Setup, in the Quick Find box, find Participant Management Settings, and select it.
2. In the Participant Management Settings setup page, turn on Custom Sharing.

Enable Digital Verification settings. To configure credentials for digital verification, set a record ID as the
named credential. To learn more, see Electronic Signatures.


Clone and Activate a Flow for E-Consents

Participant Management provides flows that you can use to digitize your consent management process.
Clone and manage the flows so that your users can manage consent forms from an object page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license

<!-- page:838 -->




USER PERMISSIONS NEEDED

To open, edit, or create a flow in Flow Builder:     Manage Flow


1. From Setup, in the Quick Find box, enter Flows, and select it.
2. Open the Review and Create Consent Requests flow.
3. Click Save As.
4. Enter a label and description for the flow.
The API name is automatically populated.
5. Save your changes.
6. Activate the flow.

You can create a screen flow to use the above cloned flow as a subflow.


Set Up Flows to Prepare Participant Consent Forms

The electronic consent feature enables participants in clinical trials to provide their consent digitally. With
this screen flow, you can help your users prepare the consent forms.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To open, edit, or create a flow in Flow Builder:     Manage Flow


About this task

To allow users to launch the default flow that you cloned from an object page, you must create a screen
flow and include the flow that you cloned earlier as a subflow. Then, create a quick action to launch this
flow from the object page. This process is necessary if you want your users to prepare consent forms
from an object page with a single click.

These steps are example to guide you in creating a similar flow. For more information on how to build
flows, see Build a Flow.

1. Open Flow Builder. From Setup, in the Quick Find box, enter Flows, select Flows, and then click New
Flow.
2.    Select Start From Scratch, then click Next.
3.    Select the flow type as Screen Flow.
4.    To get the research study candidate based on the Record ID passed as input to this screen flow, add a
Get Records element. For example, select the Field as Id, Operator as Equals, and Value as recordId.
5.    To get the research study that’s associated with the previously fetched Research Study Candidate, add

<!-- page:839 -->



a Get Records element. For example, select the Field as Id, Operator as Equals, and Value as Research
Study Candidate from Fetch_Research_Study_Candidate > Research Study ID.
6. To get the Data Use Purpose records associated with the care program that you fetched the research
study for, add a Get Records element. For example, select the Field as PurposeId, Operator as Equals,
and Value as Research Study from Fetch_Research_Study > Care Program ID.
7. Add a Screen element.
a. In the components section, select the Lookup component for Data Use Purpose.
b. Fill in the mandatory details in the Properties panel. See Flow Screen Input Component: Lookup.
c. Include an input option on the same screen. This option helps the user decide whether to create a
digital verification record or use a digital signature as consent from the participant.
d. Select the data table layout on the edit screen page, and then under Configure Data Source, select
the Source Collection field as Data Use Purposes from Fetch_Data_Use_Purpose.
8. Add the Review and Create Consent Records flow that you cloned earlier as a subflow.
a. In Set Input Values, turn on ConsentGiverId, and select the value recordId.
b. Next, turn on DataUsePurposeId, and select the value Select Data Use Purpose > Select Purpose for
Seeking Consent > First Selected Row > Data Use Prupose ID.
c. Next, turn on isDigitalVerificationRequired, and select the value Select Data Use Purpose > Please
specify if consent via user login credentials is required by checking this checkbox. If not selected,
the default method for providing consent will be using a scribble pad signature.
9. To select the purpose of seeking consent, click Run, and then click Next.
10. Activate your flow.

You can create a Quick Action to launch this screen flow. To create a quick action and add the action to a
page layout, see Create Quick Actions.


Set Up flows to View Consent Forms

Create a screen flow in Participant Management to enable access to the end users for viewing the
consent forms. With this screen flow, your end users can access and digitally sign the consent forms,
acknowledging their informed consent for clinical trials.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To open, edit, or create a flow in Flow Builder:      Manage Flow


These steps are provided as an example to guide you in creating a flow. Use these instructions to fit your
specific requirements. For more information on how to build flows, see Build a Flow.

1. Open Flow Builder. From Setup, in the Quick Find box, enter Flows, select Flows, and then click New

<!-- page:840 -->



Flow.
2. Select Start From Scratch, then click Next.
3. Select the flow type as Screen Flow.
4. Add the elements that you want to use to the canvas.
5. To fetch new Authorization Request Records, add a Get Records element. For example, you can label it
as Fetch New Authorization Request Records.
a. In the Get Records of This Object section, select Info Authorization Request.
b. In Filter Info Authorization Request Records, select Condition Requirements as All Conditions Are
Met (AND).
c. Select the field as ResponseStatus, the operator as Equals, and the value as New.
6. Add a Screen element, and in the components section, find and select Data Table.
a. Select the data table layout on the edit screen page, and then under Configure Data Source, select
the Source Collection field as Info Authorization Request From
Fetch_InfoAuthorization_Request_Records.
b. Select Row Selection Mode as Single.
c. Click Done.
7. Add a Screen element.
a. In the Components section, find and select Consent Form List View.
b. Select Info Authorization Request ID, and Purpose ID.
c. Click Done.
8. Activate your flow.


## See Also

Clone and Activate a Flow for E-Consents


Enable Research Study Randomization

Give your users access to the randomization features. With randomization feature, participants enrolled
for the clinical trials are randomly assigned (randomized) to different comparison groups.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


1. From Setup, in the Quick Find box, find Participant Management Settings, and select it.
2. In the Participant Management Settings setup page, turn on Research Study Randomization.
3. Click Create Decision Table.


Using Block Generation

Block randomization involves creating research study randomization blocks. Each block consists of
several research study randomization block slots, which are linked to specific research study comparison

<!-- page:841 -->



groups.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


Ensure you complete the basic data setup before starting block randomization.

- Create Research Study Comparison Group records with allocation ratios.
- Create a Research Study Randomization record.

Block Generation

If you want to set up block generation during the research study randomization set up phase, you can
use the built-in invocable action Generate Research Study Blocks to facilitate block generation.
Generating randomization blocks before candidate assignment helps trial managers check the quality of
the randomization for the configured parameters and iterate until the randomization quality meets the
customer’s satisfaction.

This invocable action, which is also available as a REST endpoint, can generate research study
randomization blocks based on the configuration you chose in the research study randomization.

The action takes the Research Study Randomization ID and the Research Study Target Count as input
values. It returns the generated block IDs based on the defined configuration in the Research Study
Randomization.

You can trigger the invocable action in various ways, including flows, Apex, or a REST API call.


Invoke Block Generation Invocable Action Using Flows

You can create a screen flow to invoke the Generate Research Study Blocks invocable action. your flow
should meet these criteria.

- The flow must have a research study randomization record ID as a input variable.
- The flow must collect the number of research study candidates meant to be part of the block
randomization.
- The flow must use the invocable action Generate Research Study Blocks.
- This invocable action must use the research study randomization record ID and candidate count as
input parameters.
-    If required, the flow can display the result of the action element inside a screen element.

<!-- page:842 -->




Launch this Flow from an Object Page

You can launch this flow from an object page using a quick action. To create a quick action and add it to
a page layout, see Create Quick Actions.

For example, you can create a quick action in a research study randomization. After the quick action is
setup, you can use it to trigger the flow from research study randomization records. The blocks are
generated according to the configuration defined in the research study randomization.


Set Up Block Randomization

Help your users implement randomization by using a block algorithm type with the randomization level
as central.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To configure and manage randomization data:         Clinical Trial Manager


1.    From the App Launcher, find and select Research Study Randomizations.
2.    Click New.
3.    Enter a name for the research study randomization.
4.    Select the research study that the randomization is associated with.
5.    For algorithm type, select Block.
6.    Enter a description for the research study randomization.
7.    For randomization level, select Central.
8.    Select the Randomization Assigns Candidates to Groups option.
You can store the association between Research Study Candidate and the Assigned Research Study
Comparison Group as a record in the Research Study Comparison Group Candidates.
9.    Enter Minimum Block Size Multiplier.
10.    Enter Maximum Block Size Multiplier.
11.    If you’ve not triggered the Block Generation API, enable the Generate Block on Demand option.
When you activate this setting, the system dynamically creates blocks when the participants are
randomized by invoking the randomization API. This action ensures that randomization proceeds by
generating new blocks when required.
12.    Select the Status Active.
13.    Save your changes.


## See Also

Create a Research Study

<!-- page:843 -->




Set Up Criteria-Based Block Randomization

Help your users implement criteria-based randomization in clinical trials with flows and invocable
actions. With the custom implementation, you can extend its capabilities further to randomly assign
candidates to comparison groups.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To create records and manage randomization data: Clinical Trial Manager


About this task

Create research study comparison group records with individual allocation ratios.

Define Research Study Randomization Criteria for a Research Study.

- The criteria are a combination of a set of factors, for example, a combination of Care Program Site,
Gender, and Age Group.
-    The entity Research Study Randomization Criteria captures the combination of these factors.
-    You can introduce new fields in Research Study Randomization Criteria to accommodate additional
factors for defining the criteria.
-    After the factors are defined, you must populate individual records for Research Study Randomization
Criteria, where each Criteria record corresponds to a combination of factors.
-    For example, consider a study that requires two factors: care program site and gender. If the study is
being conducted at two sites (site A and site B), and if two genders are considered (male and female),
then the combination will be four possible criteria records.

After the criteria are defined, the admin has to specify a flow definition that takes in a particular Research
Study Candidate ID and returns the Research Study Randomization Criteria ID to which the candidate
belongs.

- For example, a candidate, Charles, who has enrolled at site A, must belong to Criteria 1.
- Since the process of determining the criteria of a candidate can change across different
implementations, the setup requires you to create a flow that accommodates this work.
-    The flow defined by you must use a decision table to find a matching criteria for a participant. A built-
in implementation with a decision table and an auto launch flow has been provided, you can extend
its capabilities further depending on your business use case. An auto-launch template flow Trail
Management: Get Research Study Randomization Criteria for Enrolled Candidates has been included
as the default implementation.
-    Create a custom flow that returns the randomization criteria for a give candidate. It must have two

<!-- page:844 -->



input string variables with apiName researchStudyCandidateId and researchStudyRandomizationId. It
must have an output variable with apiName researchStudyRandomizationCriteriaId.

1.    From the App Launcher, find and select Research Study Randomizations.
2.    Click New.
3.    Enter a name for the research study randomization.
4.    Select the research study that the randomization is associated with.
5.    For algorithm type, select Block.
6.    Enter a description for the research study randomization.
7.    For randomization level, select Noncentral.
8.    Enter the apiName of the flow that you cloned in the Algorithm Flow Definition.
If you selected algorithm type as Block and randomization level as Noncentral, you can clone the Trial
Management: Get Research Study Randomization Criteria for Enrolled Candidates flow. This flow calls
an action to lookup in the decision table to get the ID of the Research Study Randomization Criteria
record. To add new fields as input, you must create fields in Research Study Randomization Criteria.
9. The block randomization works as follows.
a. Creation of Research Study Randomization Blocks, where in each Research Study Randomization
Block is associated to a set of Research Study Randomization Block Slots.
b. Each Research Study Randomization Block Slot is related to a Research Study Comparison Group.
c. The Generation of the blocks will be done first and the generated block slots are used for assigning
candidates to comparison groups.
10. The generation of blocks can be done during the setup before the actual assignment process through
the Setting up the generation of blocks invocable action and the generated blocks are used by the
assignment process.
11. Select the Randomization Assigns Candidates to Groups option to store the association between
Research Study Candidate and the Assigned Research Study Comparison Group as a record in the
Research Study Comparison Group Candidates.
12. If the generation step isn’t needed, then select Generate Block on Demand option.
When you activate this setting, the system dynamically creates blocks when participants enroll. This
action ensures that randomization proceeds without waiting for predefined blocks to fill.
13. Select the status as Active for the Research Study Randomization.
14. Save your changes.


Set Up Research Study Randomization with Custom Implementation

Help your users implement randomization by using a custom algorithm type.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license

<!-- page:845 -->




USER PERMISSIONS NEEDED

To create records in a research study:              Clinical Trial Manager


1. From the App Launcher, find and select Research Study Randomizations.
2. Click New.
3. Enter a name for the research study randomization.
4. Select the research study that the randomization is associated with.
5. For algorithm type, select Custom.
6. Enter a description for the Research Study Randomization.
7. Select the Randomization Assigns Candidates to Groups option.
You can store the association between Research Study Candidate and the Assigned Research Study
Comparison Group as a record in the Research Study Comparison Group Candidates.
8. Enter the apiName of the flow that you created for Randomization in the Algorithm Flow Definition.
You can create an autolaunch flow with input parameter as researchStudyCandidateId and output
parameter as researchStudyComparisonGroupId.
9. For status, select Active.
10. Save your changes.


Using Randomization to Anonymize Participant Allocation

Randomization involves allocating clinical trial participants into different comparison groups. The
randomization API is available as an invocable action allowing it to be used through a flow or via a REST
invocation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


Randomization

To set up the randomization API during the design phase, use the 'Assign Candidate to Research Study
Group' invocable action to assign the candidate to a research study comparison group to facilitate the
randomization. Use these specific criteria to invoke the invocable action through the randomization API.

- The API will have an input parameter researchStudyCandidateId, which is the ID of the research study
candidate who must be randomized.
- The API will have an output parameter researchStudyComparisonGroupId, which is the group ID
where the participant fits based on the randomization.
-    The API will have an output parameter such as candidateAllocationSourceId, which is the context
through which the research study candidate is mapped to the research study group.

<!-- page:846 -->



These output parameters can be accessible to the user only in these scenarios.

- If the attribute Randomization Assigns Candidates To Groups is set to false in the Research Study
Randomization object, or
-    If the attribute Randomization Assigns Candidates To Groups is set to true in the Research Study
Randomization object and the user can access the Research Study Comparison Group Candidate
object.


Invoke Randomization Invocable Action Using Flows

You can create a screen flow to invoke the Assign Candidate to Research Study Group invocable action.
Your flow must meet these criteria.

- The flow must have a research study candidate record ID as an input variable.
- This invocable action must use the research study candidate record ID as an input parameter.
- The flow must use the invocable action Assign Candidate to Research Study Group.
- If necessary, the flow can display the result of the action element inside a screen element.

Launch this Flow from an Object Page

You can launch this flow from an object page with a quick action. To create a quick action and add it to a
page layout, see Create Quick Actions.

For example, you can create a quick action in a research study candidate. After the quick action is set up,
you can use it to trigger the flow from research study candidate records. The participants are allocated
according to the configuration defined in the research study randomization.


Use Participant Management

Participant Management helps organizations that conduct clinical research studies to make their
recruitment and enrollment processes more efficient. Clinical trial coordinators or recruiters can use the
Clinical Excellence Console app to track and monitor participant recruitment and enrollment progress.
Clinical trial coordinators can use the Research Study Candidate page to add new Medication Requests,
Health Conditions, Allergies, and Immunization records directly from the patient card.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


Participant Management offers valuable features like clinical trial search, prescreening eligibility,
registration, Einstein candidate matching, consent management, and randomization. These tools help
organizations reduce operational costs by reducing onboarding time and digitizing key processes in

<!-- page:847 -->



clinical trials.


## Create a Research Study

Speed up the process of recruiting and enrolling participants by creating research studies with the
necessary details. Instead of updating multiple object records separately,manage the necessary
information through a single, intuitive flow. Save time and reduce the risk of errors, making sure that
your studies are set up and running smoothly.
Update a Research Study
Ensure participant eligibility by revising key details of the research study such as the name and title to
better reflect the current focus, adjusting the dates to match the current timeline, and refining the
inclusion and exclusion criteria. Select a new pre-eligibility questionnaire to effectively screen potential
participants.
Add Clinical Information to the Patient Card
Use the patient card in the Research Study Candidates page to quickly view a candidate’s clinical data,
such as medications, health conditions, allergies, and last clinical encounters. You can also add new
medication requests, health conditions, allergies, and immunizations from the patient card.
Track and Monitor Candidate Enrollment Progress
As a clinical trial coordinator or recruiter at Investigative sites, you can monitor candidate progress
from Participant Management’s Clinical Excellence Console app home page.
Identify Suitable Candidates for Clinical Trials
As a clinical trial coordinator or recruiter, you can initiate the candidate evaluation process from
specific record pages. You can begin the process with a single click from a research study candidate,
account, or actionable list member record.
View Candidates Matching the Research Study Criteria
As a clinical trial coordinator or recruiter, you can launch the cohort builder from a research study
record page to match candidates with the inclusion and exclusion criteria you selected. The cohort
builder shows the list of criteria for the research study.
Review Candidate Evaluation Results
Use the Evaluation Results tab in the Research Study Candidates page to view the evaluation results of
Einstein Candidate Matching. You can also check different versions of evaluation results.


Create a Research Study

Speed up the process of recruiting and enrolling participants by creating research studies with the
necessary details. Instead of updating multiple object records separately,manage the necessary
information through a single, intuitive flow. Save time and reduce the risk of errors, making sure that
your studies are set up and running smoothly.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license

<!-- page:848 -->




USER PERMISSIONS NEEDED

To create a research study:
Health Cloud Starter

AND

Clinical Trail Manager


1. From the App Launcher, find and select Research Studies.
2. Click Create Study.
3. On the Basic Information window, enter the required information.
4. On the Enrollment Information window, enter the target count of enrollees.
5. On the Participant Eligibility window, under Inclusion Criteria, select existing criteria or create a criteria
that you want to include for the participant. To add more inclusion criteria, click Add. To remove
criteria, click Remove.
6. Under Exclusion Criteria, select an existing or create a criteria that you want to exclude for the
participant. To add more exclusion criteria, click Add. To remove criteria, click Remove. Click Next.
7. Select the pre-eligibility questionnaire for the candidate.
8. Click Finish.

The research study that you created now appears in the Research Studies list.


Update a Research Study

Ensure participant eligibility by revising key details of the research study such as the name and title to
better reflect the current focus, adjusting the dates to match the current timeline, and refining the
inclusion and exclusion criteria. Select a new pre-eligibility questionnaire to effectively screen potential
participants.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To update a research study:
Health Cloud Starter

AND

Clinical Trail Manager


1. From the App Launcher, find and select Research Studies.

<!-- page:849 -->



2. Open the research study that you want to update.
3. In the dropdown menu at the top-right corner of the page, select Update Study Details.
4. Update the details on the Basic Information, Enrollment Information, and the Participant Eligibility
windows.
5. If needed, select a new pre-eligibility questionnaire.
6. Click Finish.


Add Clinical Information to the Patient Card

Use the patient card in the Research Study Candidates page to quickly view a candidate’s clinical data,
such as medications, health conditions, allergies, and last clinical encounters. You can also add new
medication requests, health conditions, allergies, and immunizations from the patient card.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To view and manage data for clinical trials:
Clinical Trial Manager

Clinical Trial Coordinator


1. From the App Launcher, find and select Clinical Excellence.
2. To add a medication request in the Patient Card:
a. Click Add New Medication.
b. Select the status of the request.
c. Select the type of request.
d. Select a medication or a medication code.
e. Save your changes.
See MedicationRequest for a full list of fields.
3. Similarly, you can follow these steps to add other clinical information as needed to the patient card.


Track and Monitor Candidate Enrollment Progress

As a clinical trial coordinator or recruiter at Investigative sites, you can monitor candidate progress from
Participant Management’s Clinical Excellence Console app home page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:850 -->




Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED


## To manage data, track, and monitor candidate

enrollment progress:                                   Clinical Trial Manager

Clinical Trial Coordinator


1. From the App Launcher, enter Clinical Excellence, and select it.
2. On the Clinical Excellence Home page, you can view the Enrollment dashboard. The performance
indicators within it are as follows.
- Research Studies: displays the total number of candidates enrolled for research studies.
- Conversion Rate: displays the average conversion rate of candidates.
- Candidate Status: displays the status of candidate enrollment.
- Candidate Enrollment Progress report: displays the bar graph with analysis of the enrollment
progress of candidates in research studies.
- Candidate Rejection Ratio: Displays the bar graph with analysis of the rejection ratio among
candidates in research studies.
3. In the Quick Links section, click a tile as needed to access additional pages directly from the console
app.


Identify Suitable Candidates for Clinical Trials

As a clinical trial coordinator or recruiter, you can initiate the candidate evaluation process from specific
record pages. You can begin the process with a single click from a research study candidate, account, or
actionable list member record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED


## To manage data, track, and monitor candidate

enrollment progress:                                   Clinical Trial Manager

Clinical Trial Coordinator


1. Use the built-in Quick Actions to initiate the candidate evaluation process from the Accounts and
Research Study Candidates pages. The quick actions are as follows:
- Research Study Candidates list page: Evaluate Candidates
- Research Study Candidates detail page: Evaluate Candidate

<!-- page:851 -->



- Accounts list page: Evaluate Candidates
- Accounts detail page: Evaluate Candidate
- Actionable List Members: Evaluate Candidates
For bulk actions, you can initiate candidate evaluation from the research study candidate list or
accounts list pages. If you want to evaluate a single record, you can do that from the research study
candidate’s detail or the account’s detail page. You can also invoke the candidate evaluation process
from the actionable lists members list view page.
a. From the App Launcher, find and select Research Study Candidates.
b. In the Research Study Candidates list view page, click Evaluate Candidates.
Your admin is notified after the evaluation process is completed.
c. Click Finish on the Candidate Evaluation Process screen.
2. To view the candidate evaluation results.
a. From the App Launcher, find and select Clinical Excellence.
b. In the Clinical Excellence console, open the Research Study Candidates page.
c. To view the candidate evaluation results, click the Evaluation Results tab.


View Candidates Matching the Research Study Criteria

As a clinical trial coordinator or recruiter, you can launch the cohort builder from a research study record
page to match candidates with the inclusion and exclusion criteria you selected. The cohort builder
shows the list of criteria for the research study.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED


## To manage data and monitor candidate

enrollment progress:                                  Clinical Trial Manager

Clinical Trial Coordinator


1. From the App Launcher, find and select the Clinical Excellence console app.
2. Go to Research Studies in the Clinical Excellence console app, and then click a research study record
from where you want to launch the cohort builder.
3. From the research study record page, click Launch Cohort Builder.
4. From the builder, select the inclusion and exclusion criteria set up by your admin.
5. To calculate the total number of candidates matching the selected criteria, click Calculate.
The number is displayed on the page.
6. Click View Candidates.
7. From the list of candidates who match your selected criteria, select the ones whose status you want to
update.

<!-- page:852 -->



a. Click Update Candidate Status.
b. From the Change Candidate Status pop-up, select an option from the Select New Status field.
c. In the Status Update Reason field, describe the reason for updating the status.
You can select only up to 100 records at one time.
d. Save your changes.


Review Candidate Evaluation Results

Use the Evaluation Results tab in the Research Study Candidates page to view the evaluation results of
Einstein Candidate Matching. You can also check different versions of evaluation results.


**REQUIRED EDITIONS**


Note This tool uses generative AI, which can produce inaccurate or harmful responses. Review for
accuracy and safety before using. Learn more

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud and the
Participant Enrollment Add-On license


USER PERMISSIONS NEEDED

To view and manage data for clinical trials:
Clinical Trial Manager

Clinical Trial Coordinator


1. From the App Launcher, find and select the Clinical Excellence console app.
2. Open the Research Study Candidates page to view the list of candidate records.
3. Select the candidate for which you want to review the evaluation results.
4. In the Research Study Candidate record, click the Evaluation Results tab.
5. On the results screen, you see different sections.
- Inclusion Criteria: Determines the criteria required for candidates to be eligible to participate in the
study. This section shows the number of participants that meet the criteria.
- Exclusion Criteria: Determines the criteria that prevent candidates or participants from participating
in the study. This section shows the number of excluded participants.
- Status: This column shows the status that indicates whether the candidate meets the specified
criteria.
- Reason: This column provides context for the status assigned.
- Matching Reference: This column provides a link to the reference record from which the system
matched the criterion.
6. To review different versions of the evaluation results, select the versions from Evaluation Versions
option.

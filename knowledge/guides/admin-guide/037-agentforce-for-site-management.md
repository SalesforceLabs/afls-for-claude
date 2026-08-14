<!-- guide:admin-guide section:agentforce-for-site-management pages:1237-1247 -->
# Agentforce for Site Management




## Salesforce Help: Pharmacy Benefits Verification

Salesforce Help: Use Pharmacy Benefits Reverification



Agentforce for Site Management

Study managers can use the Agentforce capabilities to search sites and investigators for running
feasibility studies to conduct clinical trials. By using Agentforce, they can also summarize the sites and
investigators information in the search results, add the appropriate sites to a specific research study, and
send feasibility questionnaire to those sites and investigators. Agentforce helps study managers perform
the site selection operations without having to update multiple objects and navigate through multiple
pages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS with AFLS
licenses and Agentforce for AFLS, Agentforce for Employee Agent, Einstein GPT Platform,
Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on licenses.



## Agentforce Topic for Site Selection

The Site Selection Assistance agent topic helps site feasibility leads and clinical study managers
identify suitable sites for running clinical trials. The topic includes eight agent actions.
Agentforce Actions for Site Selection
Site Management bundles certain standard agent actions with the Site Selection Assistance Agent
topic.
Site Management Flows
Salesforce provides pre-built flows to automate the site selection tasks in the Site Management
feature. You can customize these flows to streamline your site selection process.
Set Up Agentforce for Site Selection
Set up Agentforce for site selection when you configure the site management feature by using the
guided setup. This ensures that all required settings and configurations are correctly aligned to
enhance the site selection process.
Optimize the Site Selection Process by Using Agentforce
Use Agentforce to complete the essential site selection tasks from searching sites and investigators
through sending feasibility assessments to the sites and investigators. Reduce manual interventions to
update various objects and hopping between screens by using the Agentforce capabilities for site
management.


Agentforce Topic for Site Selection

The Site Selection Assistance agent topic helps site feasibility leads and clinical study managers identify

<!-- page:1238 -->



suitable sites for running clinical trials. The topic includes eight agent actions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS with AFLS
licenses and Agentforce for AFLS, Agentforce for Employee Agent, Einstein GPT Platform,
Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on licenses.

Note The user interface of this product is available in English only and may not be fully supported in
other languages.


topic                                description                           Included AGENT ACTIONS


- Get Site Search Filters for
Research study
-   Add Sites Search Results to
Study
Helps site feasibility leads and
-   Add Site and Investigator to
clinical study managers identify
Study
sites by using search filters,
Site Selection Assistance                                                 •   Summarize Site
display site and investigator
-   Summarize Investigator
information, and send feasibility
-   Send Site Feasibility
assessments to sites.
Assessments
-   Go to Care Program Sites
-   Get Omniscript IDs From
Research Study



## See Also

Salesforce Help: Agent Topics


Agentforce Actions for Site Selection

Site Management bundles certain standard agent actions with the Site Selection Assistance Agent topic.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS with AFLS
licenses and Agentforce for AFLS, Agentforce for Employee Agent, Einstein GPT Platform,
Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on licenses.

Note The user interface of this product is available in English only and may not be fully supported in

<!-- page:1239 -->




other languages.


Agent Action               description                EXAMPLE UTTERANCES EXAMPLE usecase


- "Find sites for
research study
Gets the site search                                    A study manager wants
\"Oncology Research
filters for a research                                  to identify clinical trial
Get Site Search Filters                                   Study\""
study using the research                                sites for conducting an
for Research study                                    •   "Search for sites
study record ID as the                                  Oncology research
matching research
input.                                                  study.
study \"Oncology
Research Study\""



- "Add care site
investigators
1O7VW000001AzEX
0A0,1O7VW000001A
Calls the                        zEZ0A0,1O7VW0000
AddSitesToStudy flow to          01AzEa0AK to study
create care program site         \"Oncology Research      A study manager wants
Add Sites Search Results records from the care            Study\""                 to add the search
to Study                 site investigator            •   "Include care site       results to an Oncology
searchable field records         investigators            research study.
and the research study           1O7VW000001AzEX
records.                         0A0,1O7VW000001A
zEZ0A0,1O7VW0000
01AzEa0AK in study
\"Oncology Research
Study\""



- "Add facility
\"Cleveland Clinic
Sports Medicine\"
Creates a care program         and investigator \"Dr.   A study manager wants
site record from a             Vikram Reddy\" to        to add the sites and
Add Site and
healthcare facility,           study \"Oncology         investigators to an
Investigator to Study
healthcare provider, and       Research Study\"",       Oncology research
research study record.   •     "Connect site            study.
\"Cleveland Clinic
Sports Medicine\"
and investigator \"Dr.

<!-- page:1240 -->




Agent Action               description                 EXAMPLE UTTERANCES EXAMPLE usecase


Vikram Reddy\" to
study \"Oncology
Research Study\""



- Summarize Site
Summarizes the details          \"Cleveland Clinic
of a healthcare facility,       Sports Medicine\" for
A study manager wants
such as its location,           research study
to view the critical
facilities, specialties,        \"Oncology Research
information on the care
resources,                      Study\""
Summarize Site                                                                     program site where an
accreditations,             •   "Provide site
Oncology research
performance, and                information for
study can be
quality compliance in           \"Cleveland Clinic
conducted.
the context of a                Sports Medicine\" in
research study.                 study \"Oncology
Research Study\""



- "Summarize
Investigator \"Dr.
Vikram Reddy\" for
research study
\"Oncology Research
Study\""                A study manager wants
Summarizes the              •   "Get provider           to view the critical
healthcare provider             summary for \"Dr.       information on the site
Summarize Investigator
record for a specific           Vikram Reddy\" in       investigator who can
research study.                 research \"Oncology     conduct an Oncology
Research Study\""       research study.
-   "Get provider
summary for \"Dr.
Vikram Reddy\" in
research \"Oncology
Research Study\""



## Sends the feasibility                                   A study manager wants

assessments to the sites    • "Send feasibility         to send feasibility
Send Site Feasibility      using                           assessments for         assessments to sites
Assessments                careProgramSiteIds,             research study          where an Oncology
omniscriptId, and               \"Oncology Research     research study can be
expiryDate as the input.                                conducted.

<!-- page:1241 -->




Agent Action               description                EXAMPLE UTTERANCES EXAMPLE usecase



## Study\""

-   "Start site evaluation
for study \"Oncology
Research Study\" with
feasibility process"
-   "Send feasibility
assessment for
research study
\"Oncology Research
Study\" using process
\"Initial Site
Feasibility
Assessment\" to care
program sites
184VW000001AzEX,
184VW000001AzEY
with expiry date
\"23th May 2025\""


Follow-up action to
navigate to the care
Go to Care Program
program sites after        N/A                          N/A
Sites
they’re added to a
research study.

Calls the
OmniFrmRschStdy flow
Get Omniscript IDs
to get all the             N/A                          N/A
From Research Study
assessments associated
with the care program.


## See Also

Salesforce Help: Agent Actions
Salesforce Help: Life Sciences | Add Site and Investigator to Study
Salesforce Help: Life Sciences | Add Sites Search Results to Study
Salesforce Help: Life Sciences | Get Omniscript IDs From Research Study
Salesforce Help: Life Sciences | Get Site Search Filters for Research Study
Salesforce Help: Life Sciences | Go to Care Program Sites
Salesforce Help: Life Sciences | Send Site Feasibility Assessments
Salesforce Help: Life Sciences | Summarize Investigator
Salesforce Help: Life Sciences | Summarize Site

<!-- page:1242 -->




Site Management Flows

Salesforce provides pre-built flows to automate the site selection tasks in the Site Management feature.
You can customize these flows to streamline your site selection process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS with AFLS
licenses and Agentforce for AFLS, Agentforce for Employee Agent, Einstein GPT Platform,
Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on licenses.


FLOW                                                 description


## Gets the care program sites associated with a

Get Care Program Sites
research study.


## Creates and sends site feasibility assessments to

Send Assessments to Care Program Sites in Bulk
care program sites in bulk.


## Creates assessment envelopes and associated

Create and Send Assessments to Sites in Bulk
envelope items.


## Sends emails with assessments in bulk using the

assessment envelope IDs as input passed from
Send Assessment Emails in Bulk
Create and Send Assessment Envelopes in Bulk
flow.


## Gets the filters for searching a site from the

Get Site Search Filters
research study and care program detail records.


## Creates the summary of a site and an investigator

Summarize Site and Investigator
in the site and investigator search results page.


## Gets the Omniprocess records from a research

Get Omniprocess Records
study.



Set Up Agentforce for Site Selection

Set up Agentforce for site selection when you configure the site management feature by using the
guided setup. This ensures that all required settings and configurations are correctly aligned to enhance
the site selection process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:1243 -->




Available in: Enterprise and Unlimited Editions with AFLS with AFLS
licenses and Agentforce for AFLS, Agentforce for Employee Agent, Einstein GPT Platform,
Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on licenses.


USER PERMISSIONS NEEDED

To set up Agentforce:
Health Cloud Starter

AND

Study Manager for Site Management

AND

Prompt Template Manager


For more information on how to set up Site Management, see Site Management.

1. From Setup, in the Quick Find box, enter Site Management Settings and select it.
2. Turn on Site Management.
3. Start setting up the Site Management feature by enabling person account types, assigning permission
set licenses to users, and enabling users to relate a contact to multiple accounts.
4. Set up site investigator search by enabling criteria-based search and filter and data pipeline. Configure
data processing engine, default criteria-based search and filter settings, and site investigator scoring.
5. Set up interest tagging by enabling interest tags and topics for objects, creating tag categories and
interest tags, and adding the interest tag components to the record pages.
6. Prepare your org for assessments by installing the Omnistudio package, assigning Omnistudio
permission sets to the users, enabling discovery framework and Omnistudio metadata, and setting up
prefill assessment questions.
7. Enable the Generative AI assessment generation by assigning the required permission set licenses to
users, enabling Industries AI, Einstein, and generative AI assessment questions, and configuring
usecase for the generative AI questionnaire.
8. Configure site feasibility scoring by updating the Care Program Detail subtype and Data Mapper, and
adding the SiteManagementAssessmentDataVisualization flexcard to the research study page.
9. Configure the digital experience for your users by enabling digital experience, setting up the external
user assessment feature, assigning the required permission set licenses to users, and updating the
Bulk Send Assessment Email Flow with the relevant URL.
10. Configure Einstein for Site Selection Assistance by assigning the required permission set licenses to the
users and turning on Einstein, Einstein Bots, and Agentforce.
11. Configure site investigator summarization by turning on summarization and context definitions,
activating the required prompt template, and adding the summarization action to the search results
page.
12. Configure the Site Selection Assistance agent by turning on Site Selection Assistance topic and actions,
creating an Agentforce Employee agent, add topics and actions to the Agentforce Employee agent,
and activating prompt template for site search filters.

<!-- page:1244 -->




## Create Permission Sets

Create permission sets for the Site Selection Assistance agent that you created, and assign those
permission sets to your users.


Create Permission Sets

Create permission sets for the Site Selection Assistance agent that you created, and assign those
permission sets to your users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED

To create permission sets:                            Manage Users


1. From Setup, in the Quick Find box, enter Permission Sets and select it.
2. Click New, and enter a label and description for the permission set. The API name for the permission
set is created automatically.
3. Save your changes.
4. In the setup page for the permission set, click Agent Access.
5. Click Edit, and move your agent from the Available Agents to Enabled Agents.
6. Save your changes.
7. Assign the permission set that you created to your users.


Optimize the Site Selection Process by Using Agentforce

Use Agentforce to complete the essential site selection tasks from searching sites and investigators
through sending feasibility assessments to the sites and investigators. Reduce manual interventions to
update various objects and hopping between screens by using the Agentforce capabilities for site
management.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS with AFLS
licenses and Agentforce for AFLS, Agentforce for Employee Agent, Einstein GPT Platform,
Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on licenses.


Note The user interface of this product is available in English only and may not be fully supported in
other languages.

<!-- page:1245 -->




USER PERMISSIONS NEEDED

To use Agentforce:
Prompt Template User

AND

Access Agentforce Default Action

AND

Study Manager for Site Management

AND

Life Sciences Site Management Summarization


1.    From the App Launcher, find and select Research Studies.
2.    Open the research study for which you want to run the feasibility study.
3.    Click the Agentforce icon on the top of the page.
4.    In the Agentforce window, click Search Sites & Investigators.
5.    Confirm your the research study that you've selected.
6.    To view the search results, click View Search Results. To edit the default search filters, click Edit Filters.
The search results are displayed in the search results page.
7.    To summarize the site information, from the dropdown next to the healthcare facility and the
investigator in the search results, select Summarize Site.
8.    To add the site to the research study, click Add Site to Study.
9.    To summarize the investigator information, from the dropdown next to the healthcare facility and the
investigator in the search results, select Summarize Investigator.
10.    To add the investigator to the research study, click Add Investigator to Study.
11.    Confirm your selection.
12.    To go to the care program sites page and send feasibility assessments, click View Care Program Sites.
13.    To send feasibility assessments, in the Care Program Sites page, select the sites, and click Send
Assessment.
14. On the Agentforce window, select the assessment, and click Submit.
15. Select an expiry date and time for the assessment, and click Submit.
16. Confirm your selection.
The site investigators receive the links to the feasibility assessments on the Experience Cloud portal.

<!-- page:1246 -->





In addition to the solution-oriented features you get with AFLS, you can also design and
implement your own solutions to meet the business needs of your organization. Here’s a set of Salesforce
features you can use to extend your AFLS implementation.


## Advanced Patient Card

The Advanced Patient Card uses FlexCards from OmniStudio to deliver greater flexibility and ease of
use. To show the card on patient accounts, add the HealthCloudPtCardPatientCard FlexCard
component to your Account Layout page.
Assessments and Surveys in AFLS
Improve quality of care by gathering information that helps you manage your patients’ or members’
health more efficiently. Whether it’s an industry standard screener or a member feedback survey, you
have the information you need.
Electronic Signatures
Reduce turnaround time by managing electronic signatures in Salesforce using Digital Verifications. Set
up signature trails for records or workflows that require users to verify key updates.
HLS Accelerators
HLS Accelators are free automations, components, and solutions that help our Health and Life
Sciences customers realize a faster time-to-value. The accelerators remove implementation barriers
and reduce overall implementation efforts.
Intelligent Document Automation
Simplify the document management process, reduce manual data entry, and get patients the right
care and services faster by managing patient and member forms all in one place, from intake through
processing. Patients can upload their own documents on an Experience Cloud site. You can route
forms automatically to the right queue for faster review and processing in a digital, HIPAA-compliant
workspace.
Intelligent Document Reader for AFLS
Use optical character recognition to automatically extract data with Amazon Textract using your AWS
account. Specify the document type that can be associated with the document, upload the document,
and map its fields to a Salesforce object’s fields. The extracted information can be used to create or
update record fields, or to verify data that's already in the org.
Life Events and Milestones in AFLS
With the Events and Milestones component, capture and track significant events in a patient’s life that
may impact their healthcare.
Product Catalog Management in AFLS

<!-- page:1247 -->



The Product Catalog Management app is available for AFLS users to create and manage
products. For example, users in MedTech organizations can use the app to create and manage
products such as pacemakers, X-ray machines, syringes, and other medical devices. Users in Pharma
organizations can use the app to create and classify drugs and drug samples.
View Events Using Enhanced Timeline in AFLS
The Enhanced Timeline component shows key events relating to a person or a resource in one place,
so your users can see information from a single source of truth.

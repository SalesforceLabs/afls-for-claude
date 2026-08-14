<!-- guide:admin-guide section:set-up-patient-support-programs-analytics-for-life-sciences-cloud pages:1064-1074 -->
# Set Up Patient Support Programs Analytics for AFLS



3. Click Generate Patient Summary.
The Generate Patient Summary screen flow is launched.
4. To proceed, click Got It.


5. Select the outcomes for which you want to generate the summary. Select All, or any individual
outcomes, and click Next.
6. Select the time period for which you want to generate the summary, and click Next.
The patient outcome summary is generated.

Here’s a sample patient outcome summary.




To copy the patient outcome summary, click Copy. You can share this summary with the patient,
healthcare provider, or practitioner.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Einstein Generative AI & Trust



Set Up Patient Support Programs Analytics for Life Sciences
Cloud

Patient Support Programs (PSP) Analytics provides a complete solution, including Tableau Einstein
dashboards, to improve patient and program outcomes. The dashboards give program leads and patient
services reps the data-driven insights they need to optimize operational efficiency.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


Integrated with Data 360, the patient support program analytics dashboards provide detailed data
visualizations and analysis of key performance indicators. These indicators can include patient
enrollment status, program completion milestones, and patient engagement levels. The setup generates
custom dashboards that use program activity data to deliver key insights and provide real-time guidance.
These dashboards improve operational efficiency by centralizing key metrics and reducing manual data
collection, while enhancing decision-making by providing real-time data on patient enrollment and
adherence. This increased visibility helps stakeholders monitor program health and identify trends at a
glance.

<!-- page:1065 -->



The dashboards further help to optimize resource allocation by pinpointing programs or patient
segments that need more attention. This focus on data-driven interventions helps drive better patient
outcomes by giving reps and program leads the information they need to personalize support.


## Set Up Patient Support Programs Analytics

To access dashboards and analytics for all patient support programs in AFLS, set up
Patient Support Programs Analytics.
Patient Support Program Analytics Dashboards
Gain comprehensive insights into Patient Support Program (PSP) engagement, adherence, and
financial support. These analytics dashboards empower Program Leads and Patient Services Reps to
monitor program performance and patient outcomes. Users can identify successes and challenges,
take timely corrective actions, and adjust strategies to improve patient adherence and overall health
outcomes.


Set Up Patient Support Programs Analytics

To access dashboards and analytics for all patient support programs in AFLS, set up Patient
Support Programs Analytics.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED


## To view the setup page for Patient Support

Program Analytics:                                     Data Cloud Architect


Note The Analytics Apps and Template functionality included as a part of Tableau Einstein is
available in English only.


To set up Patient Support Programs Analytics, create and map Data 360 assets and ingest Data 360 data.
Use the Patient Support Programs Analytics guided setup to configure Data 360.

1. From Setup, in the Quick Find box, enter Patient Support Programs Analytics Setup, and
then select Patient Support Program Analytics Setup.
2.    Build Your Data 360 Connection.
3.    Configure Access to Patient Support Programs Analytics.
4.    Install and Deploy Patient Support Programs Analytics.
5.    Install Patient Support Programs Analytics App.


## Build Your Data 360 Connection

Configure your Data 360 connection for AFLS. Data 360 is automatically provisioned in
your Salesforce org.

<!-- page:1066 -->




## Configure Access to Patient Support Programs Analytics

Assign permissions to view and manage Patient Support Programs Analytics.
Install and Deploy Patient Support Programs Analytics
To view components such as data streams, calculated insights, and data graphs from Data 360, install
and deploy the Patient Support Programs Analytics data kits from Data 360 in your Salesforce org.
Install Patient Support Programs Analytics App
After your Patient Support Program Analytics data is ingested into Data 360, you’re ready to install the
app to help you get insights on all your patient support programs in AFLS.
Add Patient Support Programs Analytics Dashboards
After your Patient Support Program Analytics app is installed, add analytics dashboards for your
program leads and patient services reps to gain real-time insights into program performance. The
dashboards provide a clear view of patient enrollment and adherence, which helps program leads
optimize operational efficiency and resource allocation. The data also help reps proactively intervene
and personalize support, and drive better patient outcomes.


Build Your Data 360 Connection

Configure your Data 360 connection for AFLS. Data 360 is automatically provisioned in
your Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED

To access Data Cloud Setup:                            Data Cloud Architect


1. To check if Data 360 is enabled on your Salesforce org, from Setup, in the Quick Find box enter Data
Cloud Setup, and select Data Cloud Setup Home.
If Data 360 is enabled, you can see details regarding your Data 360 instance on your home org along
with your org’s details.
2. To enable data exchange between your org and Data 360, connect Data 360 to your Salesforce org.
a. From Setup, in the Quick Find box, enter Salesforce CRM and select Salesforce CRM.
b. Click New.
c. Click Connect to a Salesforce org.
d. After your org is connected, verify that the connection is visible and active.


## See Also

Salesforce Help: Connect Data

<!-- page:1067 -->




Configure Access to Patient Support Programs Analytics

Assign permissions to view and manage Patient Support Programs Analytics.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED

To ingest objects and fields:
Data Cloud Architect

AND


## View All Records and Read permission on the

object being ingested.

AND

Data Cloud Salesforce Connector

AND

Clinical Trial Manager

AND

Health Cloud Starter (for AFLS)

AND

Life Sciences Commercial Admin


In your Salesforce org, assign Read and View All permissions to the Data Cloud Salesforce Connector
permission set to ingest data from different patient support programs of AFLS.

1. Assign the Data Cloud User, Clinical Trial Manager, and Tableau Next Admin permission sets to your
program leads and patient services reps.
2. Enable Discovery Framework.
a. From Setup, in the Quick Find box, enter Discovery Framework, and then select General
Settings.
b. Turn on Discovery Framework, and Enhanced Questions.
3. Enable Surveys.
a. From Setup, in the Quick Find box, enter Survey, and then select Survey Settings.
b. Turn on Surveys.

<!-- page:1068 -->



4. Enable Site Management.
a. From Setup, in the Quick Find box, enter Site Management, and then select Site Management
Settings.
b. Turn on Site Management.
5. Enable Participant Management, Adverse Events, and Research Study Randomization.
a. From Setup, in the Quick Find box, enter Participant Management, and then select Participant
Management Settings.
b. Turn on Participant Recruitment and Enrollment, Adverse Events, and Research Study
Randomization.
6. To ingest AFLS data, update the system settings of Data Cloud Salesforce Connector
permission set.
a. From Setup, in the Quick Find box, enter Permission Sets, and then select Permission Sets.
b. Select Data Cloud Salesforce Connector.
c. To update the system settings to ingest AFLS data, select System Permissions.
d. Click Edit.
e. Enable access to the these system permissions - Access PSP Financial Assistance, Manage Patient
Program Outcomes, Gives users access to verify and reverify pharmacy benefits, Manage Site
Management, Discovery Framework Platform User, and Design and run clinical trials.
7. Save your changes.


## See Also

Salesforce Help: Manage Permission Set Assignments
Salesforce Help: Discovery Framework and Assessments Prerequisites
Salesforce Help: Site Management
Salesforce Help: Surveys
Salesforce Help: Participant Management


Install and Deploy Patient Support Programs Analytics

To view components such as data streams, calculated insights, and data graphs from Data 360, install
and deploy the Patient Support Programs Analytics data kits from Data 360 in your Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS



## Install the Patient Support Programs Data Kit

To access data mappings, data streams, and generate calculated insights in Data 360, install the data
kit bundles available in your Salesforce org.
Verify Data Kit Installation
Verify that your data kit is installed and the required Data Model Objects (DMO) are created.
Deploy the Patient Support Programs Analytics Data Kit
Create data streams from a data kit to connect your Salesforce org to Data 360. Data streams help you

<!-- page:1069 -->



install data bundles which contain stream source objects.


Install the Patient Support Programs Data Kit

To access data mappings, data streams, and generate calculated insights in Data 360, install the data kit
bundles available in your Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED

To install a data kit:                                 Data Cloud Architect


Important Before you install the data kit package, log in to the Salesforce org where you want to
install it.


1. To install the package, copy your install URL.
URL: https://login.salesforce.com/packaging/installPackage.apexp?p0=04tWs000000ZZ7lIAG
2. Enter your Salesforce credentials.
3. Select the audience for the installation.
4. Select Install.
During the installation, you can safely navigate away from this page.

To verify that the package is installed, check your email.


Verify Data Kit Installation

Verify that your data kit is installed and the required Data Model Objects (DMO) are created.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED

To install a data kit:                                 Data Cloud Admin


Important In Setup, on the Installed Packages page, verify that the Salesforce Standard Data Model
SSOT version is 1GP or later. If the version is older than 1GP, contact your Salesforce account
executive.

<!-- page:1070 -->



1. From Setup, in the Quick Find box, enter Data Kits and select Data Kits.
2. Verify that your installed data kit and the details of the data kit package are visible.
3. To ensure that all your associated data streams and mappings are created, from the App Launcher,
find and select Data Cloud.
4. To ensure that your data model objects are ingested into Data 360, select the Data Model tab.


Deploy the Patient Support Programs Analytics Data Kit

Create data streams from a data kit to connect your Salesforce org to Data 360. Data streams help you
install data bundles which contain stream source objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED

To deploy the data kit components:                   Data Cloud Architect


1.    From the App Launcher, find and select Data Cloud.
2.    Select Data Streams.
3.    Click New.
4.    Select Salesforce CRM, and then select Next.
5.    Under Custom Bundles, select AFLS Data Bundle.
6.    Select Next.
7.    Select Default as your data space, and select Next.
8.    Verify the objects under your selected bundle, and select Next.
9.    Verify the fields associated with the objects in the bundle, and select Next.
10.    Verify that the data model objects for the selected bundle are available and select Deploy.


Install Patient Support Programs Analytics App

After your Patient Support Program Analytics data is ingested into Data 360, you’re ready to install the
app to help you get insights on all your patient support programs in AFLS.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS

<!-- page:1071 -->




USER PERMISSIONS NEEDED

To install Patient Support Program Analytics apps:
Data Cloud Architect

AND

Any admin or design time user permission set in
AFLS


1. From Setup, in the Quick Find box, enter Life Sciences, and then select Patient Support Program
Analytics Setup.
2. Under Patient Support Programs Analytics, select Dataspace, and click Install.

If the installation fails, use an API tool to delete the app and repeat the steps in Set Up Patient Support
Programs Analytics.

To retrieve the ID of the app you want to delete, first, send a GET request to /services/
data/{version}/app-framework/apps . Then, use that ID to send a DELETE request to
/services/data/{version}/app-framework/apps/{id} .


Add Patient Support Programs Analytics Dashboards

After your Patient Support Program Analytics app is installed, add analytics dashboards for your program
leads and patient services reps to gain real-time insights into program performance. The dashboards
provide a clear view of patient enrollment and adherence, which helps program leads optimize
operational efficiency and resource allocation. The data also help reps proactively intervene and
personalize support, and drive better patient outcomes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


USER PERMISSIONS NEEDED


## To add Patient Services Program Analytics

dashboards:                                            Data Cloud Architect

AND

Any admin or design time user permission set in
AFLS


Before you add analytics dashboards, make sure that you Install Patient Support Programs Analytics App.

1. From App Launcher, find and select Patient Support Programs.

<!-- page:1072 -->



2.    On home page, Click Setup, and select Edit Page.
3.    Place the Tableau Next Dashboard component at an appropriate spot.
4.    In Dashboard, find and select Program Lead Analytics.
5.    Under the Set Component Visibility section, click Add Filter.
6.    In Field, click Select.
7.    On the Select Field window, from the dropdown, select User, then select Profile, then select Name,
and then click Done.
8.    Select Equal as operator, and enter the name of profile of your program lead as value.
9.    Click Done.
10.    Place another Tableau Next Dashboard component at an appropriate spot.
11.    In the Dashboard search field, find and select Patient Services Rep Analytics.
Optionally, you can customize the visibility of individual dashboard.
12.    Save your changes, and activate the page.


## See Also

Salesforce Help: Create an App Home Page with the Lightning App Builder


Patient Support Program Analytics Dashboards

Gain comprehensive insights into Patient Support Program (PSP) engagement, adherence, and financial
support. These analytics dashboards empower Program Leads and Patient Services Reps to monitor
program performance and patient outcomes. Users can identify successes and challenges, take timely
corrective actions, and adjust strategies to improve patient adherence and overall health outcomes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise, Unlimited, and Developer editions where Patient Support and Programs is
enabled



## Program Lead Analytics Dashboards

Use the Program Lead Analytics dashboard to improve your Patient Support Programs (PSPs). Gain
comprehensive insights into how patients are involved and how financial assistance works. For Life
Sciences cloud, this tool enables program leads monitor consolidated patient engagement metrics
and financial benefits across multiple programs, allowing them to quickly identify successes and
challenges. Analyze patient adherence, program impact, and service delivery to make data-driven
adjustments that improve patient health outcomes, enhance medication adherence, and ensure vital
financial support.
Patient Services Rep Analytics Dashboards
Use the Patient Services Rep Analytics dashboards to gain insights into a specific program within Life
Sciences. These dashboards help care agents track key performance indicators, analyze patient
dropouts, monitor cases raised by patients, and understand how long cases remain open. It also
provides detailed benefit information relevant to the program. This focused approach ensures care
agents have the specific data needed to manage their assigned program effectively.

<!-- page:1073 -->




Program Lead Analytics Dashboards

Use the Program Lead Analytics dashboard to improve your Patient Support Programs (PSPs). Gain
comprehensive insights into how patients are involved and how financial assistance works. For Life
Sciences cloud, this tool enables program leads monitor consolidated patient engagement metrics and
financial benefits across multiple programs, allowing them to quickly identify successes and challenges.
Analyze patient adherence, program impact, and service delivery to make data-driven adjustments that
improve patient health outcomes, enhance medication adherence, and ensure vital financial support.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited editions of AFLS



## Patient Engagement Dashboard for Program Leads

Monitor and visualize patient engagement metrics to gain insights into Patient Support Program (PSP)
interaction, empowering program leads to customize interventions and provide targeted support. Use
real-time patient engagement metrics to monitor low engagement or adherence, and personalize
communication and follow-ups.
Payer and Benefits
Track key programs and patient metrics to optimize patient support. Monitor total programs, enrolled
patients, and payer interactions to identify trends. Analyze financial assistance needs and benefit
verification statuses to ensure patients receive the necessary support. Evaluate program effectiveness
by understanding patient distribution by benefit verification status and payer efficiency.


Patient Engagement Dashboard for Program Leads

Monitor and visualize patient engagement metrics to gain insights into Patient Support Program (PSP)
interaction, empowering program leads to customize interventions and provide targeted support. Use
real-time patient engagement metrics to monitor low engagement or adherence, and personalize
communication and follow-ups.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited editions of AFLS


Filter the data in the Patient Engagement dashboard by region, patient support program, and time
period to get personalized and targeted analysis.

- The KPIs section highlights Patient Support Program (PSP) performance using key metrics. Monitor
total programs, patient enrollment, and assessment rates to gauge program reach and engagement.
To assess recruitment effectiveness track patient response to interventions and calculate enrollment

<!-- page:1074 -->



rates.
-    The Assessment Outcome section measures the effectiveness of patient care and success of
treatments by tracking key performance indicators. Improve health outcomes, patient satisfaction,
patient adherence rates, and patients' quality of life. Analyzing these KPIs helps organizations refine
their products and services for a more patient-centric healthcare system.
-    The Programs that Need Attention section highlights critical insights into life sciences programs.
Identify programs that need immediate attention, benchmark successful initiatives by patient
engagement, and delve into detailed program specifics. Make informed decisions and efficiently
allocate resources to optimize program performance and accelerate progress.


Example A program lead can use the Patient Engagement dashboard to find patterns in how
patients interact with and follow a specific program. By filtering the data by region and time, leads
can pinpoint areas with low engagement and proactively implement targeted interventions, such as
personalized communication campaigns or follow-up calls, to improve patient participation and
treatment adherence.



## Key Performance Indicators in Patient Engagement Dashboard

Learn the definitions of key metrics in the Patient Engagement dashboard.


Key Performance Indicators in Patient Engagement Dashboard

Learn the definitions of key metrics in the Patient Engagement dashboard.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited editions of AFLS


Metric                                               description

Total Programs                                       Shows the overall reach and scope of your patient
services by tracking the number of active
programs. Use this metric to understand the your
offerings and identify opportunities for expansion
or consolidation.

Total Patients Enrolled                              Indicates collective enrollment across all programs
to gauge overall patient engagement. Use this
figure to evaluate the effectiveness of your
outreach strategies and allocate resources
appropriately.

Patients Assessed                                    Determines the proportion of patients who have
completed initial evaluations or assessments. Use
this metric to track the efficiency of your intake

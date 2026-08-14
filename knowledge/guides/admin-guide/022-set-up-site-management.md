<!-- guide:admin-guide section:set-up-site-management pages:853-891 -->
# Set Up Site Management




Set Up Site Management

Life sciences organizations can identify suitable sites and investigators for conducting research studies.
Identification of the right site, the initial step in the research study process, is crucial to the successful
completion of a study.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Study managers who are part of the research study sponsor's organization can get a list of sites and
investigators by using enhanced search capabilities. They can use the search results to assess a site's
feasibility to conduct research studies. Study managers can create assessments on their own or with the
help of generative AI.

At the sites, site investigators can respond to the assessments by logging in to a Digital Experience Cloud
portal. Study managers can then review these responses on the assessment dashboard. On the search
results page, they can use the summarize sites and investigators option and avoid going to the site and
investigator record pages and related lists. Study managers can accelerate the identification process by
assigning scores to the sites and investigators by considering various attributes including the total years
of research study experience and the research publications. They can also assign scores to the responses
that they receive by using the built-in formula question capabilities of the discovery framework. To mark
a site for conducting assessments in the future, study managers can tag the sites and investigators.

Study managers and clinical trial coordinators can create and update the study details by using a single
flow without updating the object records separately. Study managers can use the Site Selection console
app to streamline the selection and activation of clinical trial sites by accessing the required features and
reports in one place.


## Site Management Data Model and Permissions

The Site Management data model lays the foundation for the Site Management feature.
Data for Site Management
Site Management uses data from various objects within your Salesforce org. After you search for sites
and investigators, Site Management gets you the information that’s available in the relevant objects in
the org.
Enable Site Management
With Site Management, your users can identify the sites for conducting clinical research studies. Based
on the customer request for the access to the Site Management features, turn on the org preferences
in the Salesforce org.
Enable Person Accounts Types for Site Management
Configure site investigators as person accounts.
Assign Permission Set Licenses

<!-- page:854 -->



Permission set licenses give study managers and site investigators access to the Site Management
features. Make sure that you assign the required permission set licenses to users to help them use the
features.
Link a Contact to Multiple Accounts
Easily track the relationships between sites and investigators. Get accurate data on sites and
investigators, specifically if an investigator is connected to several sites.
Enable Criteria-Based Search and Filter for Site Management
With criteria-based search and filter, users can search for sites and investigators.
Enable Data Pipeline for Site Management
With a data pipeline, your users can query, consolidate, and compute the data in their Salesforce org.
With the inbuilt data pipelines, users can streamline the collection of the data required for identifying
relevant sites and investigators.
Set Up Data Processing Engine Definition for Site Management
Transform data that's available in different objects to a searchable object by setting up the Data
Processing Engine for site and investigator search. The Data Processing Engine joins, calculates, and
transforms the data across the required objects and aggregates them into your search capability.
Create a Default Criteria-Based Search and Filter Configuration
To search for sites and investigators, create a default search configuration that’s specific to your search
definitions. In addition to the basic search configuration, this Criteria-Based Search and Filter
configuration defines the configurations for the searchable object and the required search action. For
the Agentforce capabilities for site selection, search and filter is automatically configured when you set
up the Site Selection Assistance topic.
Update the Searchable Object Configuration in Criteria-Based Search and Filter
In Criteria-Based Search and Filter, to map the search criteria fields to specific fields in the relevant
source objects, update the searchable object configuration. Users can view the suggested options as
they type the keywords, making the search faster.
Set Up Site and Site Investigator Scoring
Your users can classify site investigators by assigning scores to the investigators. Users can generate
weighted scores for site investigators based on attributes such as clinical trial experience, trial
performance-cycle times, and legal compliance. To generate scores, users can also use the existing
Salesforce platform capabilities, such as the Business Rule Engine (BRE) or Data 360 features like
Calculated Insights or Einstein Studio. Alternatively, users can bring in the proprietary scores that
they’ve generated with their own tools.
Set Up Interest Tags for Sites and Investigators
With interest tags, your users can categorize sites and investigators. They can organize interest tags into
up to three levels of categories. Study managers can also use the tags to identify a site or an
investigator for conducting a specific research study in the future.
Install Omnistudio Package for Site Management
With the Omnistudio package, your users can use the discovery framework and other related
functionalities in Site Management.
Enable Discovery Framework for Site Management
Study managers can use the Discovery Framework features to create site feasibility questionnaires and
collect and validate the responses from the sites. The framework scans through the available data and

<!-- page:855 -->



gets accurate results for your search.
Assign Omnistudio Permission Sets
Study managers require access permissions to create and manage Omnistudio components. Assign
the required permissions to the study managers for creating and managing Flexcards, Omniscripts,
Integration Procedures, and Omnistudio Data Mappers.
Enable Omnistudio Metadata API for Site Management
With Salesforce Omnistudio Metadata APIs, your users can deploy and retrieve standard objects for
the Salesforce org. Omnistudio Metadata supports the OmniProcess (Omniscript and Integration
Procedure), OmniDataTransform (Omnistudio Data Mapper), and OmniUiCard (Flexcard) standard
objects.
Set Up Prefill Assessment Questions
With the Prefill Assessment Questions feature, your users can reuse the responses that they provided
for similar questions in a past assessment. They can save the time and effort of responding to the
same type of questions repeatedly.
Configure Generative AI Assessments for Sites and Investigators
Use the capabilities of generative AI to create assessment questions for identifying the sites and
investigators for conducting clinical trials. Upload a PDF document that has the assessment questions
and use generative AI to choose the relevant questions to be included in the assessment.
Configure Site Feasibility Scoring
Study managers can assign scores to the sites and investigators based on the assessment responses.
The scoring feature uses the formula question capabilities in Discovery Framework to add a score
value to each option in the questionnaire.
Add Flexcard to the Research Study Page
To enable study managers to view assessment details, add the
SiteManagementAssessmentDataVisualization Flexcard to the Research Study page.
Configure Digital Experience for Site Management
Set up Experience Cloud for users to configure site and investigator assessments.
Configure Einstein for Agentforce
To improve the customer experience with Agentforce, you can take advantage of Einstein features,
such as Einstein Bots.
Configure Site and Investigator Summarization
Site and investigator summarization presents all critical information in a concise format, making it easy
for users to quickly review key details on their screen. Configure summarization by turning on context
definitions and activating prompt templates. Then, add the summarization action to the sites and
investigators search results page.
Configure Agentforce for Site Selection Assistance
Help your users use Agentforce to identify potential sites for running feasibility studies, allowing them
to quickly assess and select the most suitable locations. With Agentforce, users can save time and
resources, focusing on the most viable options for their projects.
Stage Management for Research Study or Care Program Orchestration
Simplify the implementation of complex stages in a research study or care program by using Stage
Management in clinical trials. Define the stage sequence, establish milestones from initiation to

<!-- page:856 -->



closure, and monitor operational progress at each stage. With Stage Management, give your users a
comprehensive view of the record’s stage progress seamlessly on a record page.
Contracts for Site Management
Sponsors and clinical trial organizations can use Salesforce Contract Lifecycle Management to manage
the entire lifecycle of clinical trial contracts and agreements, from authoring to activation. In Site
Management, configure contract workflows for non-disclosure or confidentiality disclosure
agreements before site feasibility, and clinical trial agreements after site selection and qualification.
Use contracts to make sure agreements are securely generated, reviewed, and executed quickly to
accelerate the study startup and site activation process.
Using Site Management
Use Site Management to identify the suitable sites for conducting an efficient clinical research study
for your products.


Site Management Data Model and Permissions

The Site Management data model lays the foundation for the Site Management feature.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Site Management

These objects are used in Site Management.


Object                                               Purpose

Account                                              Represents an individual account, which is an
organization or person involved with your business
(such as customers, competitors, and partners).

Account Contact Relation                             Represents the relationship between a contact
and one or more accounts.

Accreditation                                        Represents the professional accreditations of a
facility.

Assessment Envelope                                  Represents the information about an envelope
that contains the assessments related to a user.

Assessment Envelope Item                             Represents the information about an item in an
envelope that contains the assessments related to
a user.

<!-- page:857 -->




Object                                      Purpose

Asset                                       Represents an item of commercial value, such as a
product sold by your company or a competitor
that a customer purchases.

Business Hours                              Specifies the business hours of your support
organization.

Care Program                                Represents a set of activities, such as patient
therapy, financial assistance, education, wellness,
or fitness plan, offered to participants by an
employer or insurer.

Care Program Detail                         Represents the detail records related to the care
program.

Care Program Site                           Represents the details about the care program
site.

Care Program Site Contract                  Represents the association of a care program site
and a contract.

Care Provider Facility Specialty            Represents the specialty of the healthcare facility.

Care Service                                Represents a healthcare treatment, service, or
procedure offered by a provider, practitioner, or
facility.

Care Site Investigator Searchable Field     Represents the information about the clinical trial
investigator associated with a site.

Care Specialty                              Represents a listing of provider specialty codes
and descriptions.

Code Set Bundle                             Represents a group of code sets across multiple
systems and versions. All these code sets refer to
the same conceptual entity.

Contact                                     Represents a contact, which is a person associated
with an account.

Document Checklist Item                     Represents a checklist item for a documentation
file upload.

Healthcare Facility                         Represents a healthcare facility and all its related
details.

Healthcare Practitioner Facility            Represents the different locations where a
practitioner provides services.

Healthcare Provider                         Represents the business-level details of the

<!-- page:858 -->




Object                                                Purpose

healthcare organization or the practitioner.

Healthcare Provider Service                           Represents a junction object between a
Healthcare Service and a Healthcare Provider or a
Healthcare Facility.

Healthcare Provider Specialty                         Represents the specialties for a practitioner or a
provider service organization.

Healthcare Provider Taxonomy                          Represents the taxonomy or subspecialty codes
for a practitioner or facility.

Location                                              Represents a warehouse, service vehicle, work site,
or other element of the region where your team
performs field service work.

Party Publication                                     Represents the details of a party's publication.

Person Employment                                     Represents the information about a person’s
employment.

Research Study                                        Represents the details of a research study that
include its design, execution, and oversight.

Research Study Protocol Information                   Represents the details of the research study
protocol document.

Score Category                                        Represents the categories that are scored in a
unified health profile.

Unit Of Measure                                       Defines the units and systems of units used to
express and account for quantities.


In addition to these objects, Site Management uses the objects in the Discovery Framework data model
to support Assessments.


Permissions and Permission Sets

Admin users of Site Management need these permissions and permission sets to use Site Management.


Permission                         Type                                 Purpose

Context Service Admin              Permission set                       Enables the user to perform
CRUD operations on context
objects.

Criteria-Based Search and Filter   Permission set                       Helps users configure a search
experience based on searchable

<!-- page:859 -->




Permission                      Type                   Purpose

objects and multiple fieldsets.

Data Pipeline Base User         Permission set         Gives users access to data
pipelines.

Document Checklist              Permission set         Helps the user to access the
Document Checklist feature.

Generative AI Assessment        Permission set         Lets users draft assessment
Questions                                              questions from an uploaded
document by using Einstein
generative AI.

Health Cloud Starter            Permission set         Provides access to the Health
Cloud Starter features.

NLP Service                     Permission set         Helps users access and configure
NLP Service through the
respective permission sets.

Omnistudio Admin                Permission set         Helps admin users to configure
Omniscripts, Omnistudio Data
Mappers, Integration
Procedures, and FlexCards. This
permission set also provides
calculation runtime access.

Omnistudio User                 Permission set         Helps users run Omniscripts,
Omnistudio Data Mapper,
Integration Procedures, and
Flexcards. This permission set
also provides calculation runtime
access.

Prompt Template Manager         Permission set         Manage prompt templates using
Prompt Builder and run them
using generative AI features.

Scoring Framework Admin         Permission set         Allow admins to enable Scoring
Framework and define models
for scoring use cases.

Scoring Framework User          Permission set         Allows users to view predicted
scores generated for use cases
based on the defined models.

Study Manager for Site          Permission set         Gives users access to the
Management                                             research study management

<!-- page:860 -->




Permission                         Type                          Purpose

features in Site Management.


Study Managers need these permissions and permission sets to use Site Management.


Permission                         Type                          Purpose

Context Service Runtime            Permission set                Grants read access for context
definitions and read and write
access to all context present in
the cache.

Criteria-Based Search and Filter   Permission set                Helps users configure a search
experience based on searchable
objects and multiple fieldsets.

Document Checklist                 Permission set                Helps the user to access the
Document Checklist feature.

Health Cloud Starter               Permission set                Provides access to the Health
Cloud Starter features.

Natural Language Processing        Permission set                Helps users access and configure
(NLP) Service                                                    NLP Service through the
respective permission sets.

Omnistudio Admin                   Permission set                Helps admin users to configure
Omniscripts, Omnistudio Data
Mappers, Integration
Procedures, and FlexCards. This
permission set also provides
calculation runtime access.

Omnistudio User                    Permission set                Helps users run Omniscripts,
Omnistudio Data Mapper,
Integration Procedures, and
Flexcards. This permission set
also provides calculation runtime
access.

Prompt Template User               Permission set                Run prompt templates using
generative AI features.

Scoring Framework User             Permission set                Allows users to view predicted
scores generated for use cases
based on the defined models.

Study Manager for Site             Permission set                Gives users access to the

<!-- page:861 -->




Permission                          Type                             Purpose

Management                                                           research study management
features in Site Management.

Life Sciences Site Management       Permission set                   Gives users access to the site and
Summarization                                                        investigator summarization
features in Site Management.


Site Investigators need these permissions and permission sets to use Site Management.


Permission                          Type                             Purpose

Omnistudio User                     Permission set                   Helps users run Omniscripts,
Omnistudio Data Mapper,
Integration Procedures, and
Flexcards. This permission set
also provides calculation runtime
access.

Site Management Investigator        Permission set                   Gives site investigators access to
for Experience Cloud                                                 respond to the feasibility
assessments and update the site
profiles from an Experience
Cloud site.



Data for Site Management

Site Management uses data from various objects within your Salesforce org. After you search for sites and
investigators, Site Management gets you the information that’s available in the relevant objects in the
org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


To make the search results significant, enter values in the Participates in Research Study field on the
Healthcare Provider object and the Research Studies Conducted field on the Healthcare Facility object.
Data Processing Engine uses these fields to filter the search results for sites and investigators.


## See Also

Salesforce Help: Site Management Data Model and Permissions

<!-- page:862 -->




Enable Site Management

With Site Management, your users can identify the sites for conducting clinical research studies. Based
on the customer request for the access to the Site Management features, turn on the org preferences in
the Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To turn on Site Management:
Health Cloud Starter

AND

Study Manager for Site Management


1. From Setup, in the Quick Find box, enter Site Management Settings and select it.
2. To access the Site Management enrollment features, turn on Site Management.
When you turn on this feature setting, the Site Management guided setup appears.

Your Salesforce org now has access to the Site Management features and the data model.


Enable Person Accounts Types for Site Management

Configure site investigators as person accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To enable person accounts:
Health Cloud Starter

AND

Study Manager for Site Management


1. In the guided setup, under Set Up Site Management, click Go to Setup next to Enable Person Account

<!-- page:863 -->



Types.
2. Turn on Enable Person Accounts.


## See Also

Salesforce Help: Enable Person Accounts for Use in AFLS


Assign Permission Set Licenses

Permission set licenses give study managers and site investigators access to the Site Management
features. Make sure that you assign the required permission set licenses to users to help them use the
features.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To assign permission set licenses:                   Manage Users


Site Management users require these permission set licenses to the feature:


ROLE                                                PERMISSION SET LICENSE


- Context Service Runtime
- Criteria-Based Search and Filter
- Document Checklist
- Health Cloud Starter
- Natural Language Processing (NLP) Service
- Omnistudio Admin
Study Manager
- Omnistudio User: You can see two permission
sets with this name. Assign both.
-   Prompt Template User
-   Scoring Framework User
-   Study Manager for Site Management
-   Life Sciences Site Management Summarization



- Omnistudio User: You can see two permission
sets with this name. Assign both.
Site Investigator
-   Site Management Investigator for Experience
Cloud

<!-- page:864 -->




ROLE                                                   PERMISSION SET LICENSE


- Life Sciences Site Management Summarization

1. From Setup, in the Quick Find box, enter Users and select it.
2. Click the user and on the user setup page, click Permission Set Assignments.
3. Click Edit Assignments next to Permission Set Assignments.
4. From the Available Permission Sets column, move the permission set licenses to the Enabled
Permission Sets column.


## See Also

Salesforce Help: Assign Permission Sets for AFLS


Link a Contact to Multiple Accounts

Easily track the relationships between sites and investigators. Get accurate data on sites and
investigators, specifically if an investigator is connected to several sites.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To configure digital experience:
Health Cloud Starter

AND

Study Manager for Site Management


1. In the Site Management guided setup, under Set Up Site Management, click Go to Setup next to
Enable Contacts to Multiple Accounts Settings.
2. In the Account Settings page, click Edit, and under Contacts to Multiple Accounts Settings, select
Allow users to relate a contact to multiple accounts.
3. Save your changes.


Enable Criteria-Based Search and Filter for Site Management

With criteria-based search and filter, users can search for sites and investigators.

<!-- page:865 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To turn on criteria-based search and filter:
Health Cloud Starter

AND

Study Manager for Site Management


1. In the Site Management guided setup, under Set Up Site Management, click Go to Setup next to
Enable Criteria-Based Search and Filter.
2. Turn on Enable Criteria-Based Search and Filter.


## See Also

Salesforce Help: Enable Criteria-Based Search and Filter


Enable Data Pipeline for Site Management

With a data pipeline, your users can query, consolidate, and compute the data in their Salesforce org.
With the inbuilt data pipelines, users can streamline the collection of the data required for identifying
relevant sites and investigators.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To enable a data pipeline:
Health Cloud Starter

AND

Data Pipeline Base User


Before you enable the data pipeline, make sure that Criteria-Based Search and Filter is enabled in the
org.

1. In the guided setup, under Set Up Site Investigator Search, click Go to Setup next to Enable Data
Pipeline.

<!-- page:866 -->



2. Turn on Data Pipeline, and enable the Salesforce output connector.


## See Also

Salesforce Help: Enable Data Pipelines


Set Up Data Processing Engine Definition for Site Management

Transform data that's available in different objects to a searchable object by setting up the Data
Processing Engine for site and investigator search. The Data Processing Engine joins, calculates, and
transforms the data across the required objects and aggregates them into your search capability.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To set up the Data Processing Engine definition:     Data Pipeline Base User


Note The Data Processing Engine sources its data from healthcare providers and healthcare
practitioner facilities that conduct research studies. If the number of records from healthcare
practitioner facilities exceeds 1.5 million, the Data Processing Engine can encounter performance
issues. Therefore, it is recommended to limit these records to 1.5 million or less. If you want to
process more records, contact Salesforce Support.


Before you set up the Data Processing Engine, enable the Data Pipeline.

1. In the Site Management guided setup, under Set Up Site Investigator Search, click Go to Setup next to
Set Up Data Processing Engine.
2. In the list of Data Processing Engine definitions, click Populate Care Site Investigator Searchable
Field.
3. On the Site Investigator Searchable Field Data Processing Engine definition page, click the dropdown
next to Save, and select Save As.
4. Specify a name for the new data processing engine definition, and select Criteria-Based Search and
Filter as the process type. If needed, enter a description.
5. Save the data processing engine definition.
6. To update the search conditions for any object in the definition, click the object and add or update the
condition on the Configuration page that opens. Save the changes.
7. Activate the data processing engine definition.
8. To clean up the Care Site Investigator Searchable Field entity before you run the Data Processing
Engine, create another data processing engine definition or use a flow.
9. Schedule the data processing engine definition job to run based on your requirements.

See Also

<!-- page:867 -->



Salesforce Help: Set Up Data Processing Engine


Create a Default Criteria-Based Search and Filter Configuration

To search for sites and investigators, create a default search configuration that’s specific to your search
definitions. In addition to the basic search configuration, this Criteria-Based Search and Filter
configuration defines the configurations for the searchable object and the required search action. For the
Agentforce capabilities for site selection, search and filter is automatically configured when you set up
the Site Selection Assistance topic.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED


## To create a default Criteria-Based Search and Filter

configuration                                          Health Cloud Starter

AND

Criteria-Based Search and Filter


Note The values in the Filter Field Parsing section in the configuration appear as a picklist.


Before you create the default search configuration, make sure that you set up the Data Processing Engine
definitions for the site and investigator search.

1. In the Site Management guided setup, under Set Up Site Investigator Search, click Create
Configuration next to Create a Default Criteria-Based Search and Filter Configuration.
An active search configuration with the required configuration records is created.
2. To update the fields in the search configuration, from Setup, go to the Criteria-Based Search and Filter
setup page, and click Site Investigator Search. Click Edit and update the fields.

After you configure Criteria-Based Search and Filter, add the Criteria-Based Search and Filter component
to a page.


## Configure Sharing Rules for Healthcare Facility Code Set

The search for a Healthcare facility uses information in the Codeset field that is defined on the Code
Set Bundle object. Code Set Bundle is a generic object that you can also use to store information that
isn't related to site management. To help the Site Management users view only the healthcare facilities
in the codeset, configure the object sharing rules feature on the Code Set Bundle object.


## See Also

Salesforce Help: Set Up Criteria-Based Search and Filter

<!-- page:868 -->



Salesforce Help: Add the Criteria-Based Search and Filter Component to a Page


Configure Sharing Rules for Healthcare Facility Code Set

The search for a Healthcare facility uses information in the Codeset field that is defined on the Code Set
Bundle object. Code Set Bundle is a generic object that you can also use to store information that isn't
related to site management. To help the Site Management users view only the healthcare facilities in the
codeset, configure the object sharing rules feature on the Code Set Bundle object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To configure sharing rules for codeset:
Manage Sharing


Before you configure sharing rules, make sure that the healthcare facility codeset has the code set type
set to Healthcare Facility Type.

1. From Setup, in the Quick Find box, enter Sharing Settings and select it.
2.    Under Sharing Rules, next to the Code Set Sharing Rules, click New.
3.    Enter the label name and rule name.
4.    Select Based on Criteria as the rule type.
5.    Select Code Set Type as the field. Select equals as the operator, and enter Healthcare Facility
Type as the value.
6. In Share with, select Public Groups from the dropdown list, and select the public group where you
want to configure the sharing settings.
7. Select Read/Write as the access level.
8. Save your changes.


## See Also

Salesforce Help: Sharing Rules


Update the Searchable Object Configuration in Criteria-Based
Search and Filter

In Criteria-Based Search and Filter, to map the search criteria fields to specific fields in the relevant
source objects, update the searchable object configuration. Users can view the suggested options as they
type the keywords, making the search faster.

<!-- page:869 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To update the searchable object configuration:
Health Cloud Starter

AND

Criteria-Based Search and Filter

AND

Study Manager for Site Management


Note After you map the fields, the text fields in the source object appear as type ahead fields in the
search criteria fields, and picklist fields appear as picklists.


Before you map the fields, make sure that Criteria-Based Search and Filter is enabled.

1. From Setup, in the Quick Find box, enter Criteria-Based Search and Filter and select it.
2. Go to Searchable Object Configuration, and then click Site Investigator Search.
3. In Criteria Field Mapping, click the edit icon.
4. Select the values in the Source Object, Source Field Type, and Source Object Field columns, and save
your changes.


Set Up Site and Site Investigator Scoring

Your users can classify site investigators by assigning scores to the investigators. Users can generate
weighted scores for site investigators based on attributes such as clinical trial experience, trial
performance-cycle times, and legal compliance. To generate scores, users can also use the existing
Salesforce platform capabilities, such as the Business Rule Engine (BRE) or Data 360 features like
Calculated Insights or Einstein Studio. Alternatively, users can bring in the proprietary scores that they’ve
generated with their own tools.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:870 -->




USER PERMISSIONS NEEDED

To set up site investigator scoring:
Health Cloud Starter

AND

Study Manager for Site Management


1. In the Site Management guided setup, under Set Up Site Investigator Search, click Go to Setup next to
Set Up Site Investigator Scoring.
If the Site Management preference is enabled in the org, the OverallInvestigatorScore and the
OverallFacilityScore categories are created by default.
2. To add classification to the score, click the score category, and then click Add Classification.
3. To edit a default score category, click the category, and then click Edit Category.
If you update the name of a default score category, make sure that you update the value field on the
Investigator Score Category configuration page in the Data Processing Engine definition.
4. To add a score category to the score, click the score category, and then click Add Classification.


Set Up Interest Tags for Sites and Investigators

With interest tags, your users can categorize sites and investigators. They can organize interest tags into
up to three levels of categories. Study managers can also use the tags to identify a site or an investigator
for conducting a specific research study in the future.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To set up interest tags:                            Study Manager for Site Management


To use the interest tagging feature for sites and investigators, enable tags for the Healthcare Facility and
Healthcare Provider objects.

1. In the Site Management guided setup, go to Interest Tagging.
2. To enable topics for the objects, click Go to Setup next to Enable Topics for Objects.
3. To enable interest tags for the sites, click Go to Setup next to Enable Interest Tags.
4. In the Topics for Objects setup page, enable topics for the Healthcare Facility and Healthcare Provider
objects.
5. To create tag categories for the sites, click Create Tag Categories next to Create Tag Categories.
6. Create the interest tags, and then click Mark Complete.
7. Add the interest tag component to the research study page, and then click Mark Complete.

<!-- page:871 -->




## See Also

Salesforce Help: Enable Topics for Objects to Use with Interest Tags
Salesforce Help: Enable Interest Tags
Salesforce Help: Create Tag Categories
Salesforce Help: Add the Interest Tags Component to Record Pages


Install Omnistudio Package for Site Management

With the Omnistudio package, your users can use the discovery framework and other related
functionalities in Site Management.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To install the Omnistudio package:                   Omnistudio Admin


1. Install the Omnistudio package.
2. In the Site Management guided setup, go to Install Omnistudio Package, and click Mark Complete.


## See Also

Salesforce Help: Omnistudio for AFLS


Enable Discovery Framework for Site Management

Study managers can use the Discovery Framework features to create site feasibility questionnaires and
collect and validate the responses from the sites. The framework scans through the available data and
gets accurate results for your search.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To enable discovery framework:
Health Cloud Starter

AND

<!-- page:872 -->




USER PERMISSIONS NEEDED


Omnistudio Admin


1. In the Site Management guided setup, under Get Your Org Ready for Assessments, click Enable
Discovery Framework next to Enable Discovery Framework.
2. In the General Setting page, turn on Discovery Framework, Enhanced Questions, and Generative AI
Assessment Questions.


## See Also

Salesforce Help: Discovery Framework and Assessments Prerequisites
Salesforce Help: Enable Discovery Framework


Assign Omnistudio Permission Sets

Study managers require access permissions to create and manage Omnistudio components. Assign the
required permissions to the study managers for creating and managing Flexcards, Omniscripts,
Integration Procedures, and Omnistudio Data Mappers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To assign Omnistudio permission sets:               Manage Users


1. In the guided setup, under Get Your Org Ready for Assessments, click Assign Omnistudio Permission
Sets next to Assign Omnistudio Permission Sets.
2. Assign the Omnistudio User permissions to the users.


## See Also

Salesforce Help: Omnistudio Permission sets


Enable Omnistudio Metadata API for Site Management

With Salesforce Omnistudio Metadata APIs, your users can deploy and retrieve standard objects for the
Salesforce org. Omnistudio Metadata supports the OmniProcess (Omniscript and Integration
Procedure), OmniDataTransform (Omnistudio Data Mapper), and OmniUiCard (Flexcard) standard
objects.

<!-- page:873 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To enable Omnistudio Metadata APIs:                  Omnistudio Admin


1. In the Site Management guided setup, under Get Your Org Ready for Assessments, click Enable
Omnistudio Metadata next to Enable Omnistudio Metadata.
2. Turn on Omnistudio Metadata.


## See Also

Salesforce Help: Enable Omnistudio Metadata API Support


Set Up Prefill Assessment Questions

With the Prefill Assessment Questions feature, your users can reuse the responses that they provided for
similar questions in a past assessment. They can save the time and effort of responding to the same type
of questions repeatedly.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To set up prefill assessment questions:
Health Cloud Starter

AND

Study Manager for Site Management

AND

Omnistudio Admin


1. In the Site Management guided setup, under Get Your Org Ready for Assessments, click Go to Setup
next to Set Up Prefill Assessment Questions.
2. Turn on Prefill Assessment Questions.
3. To set up the prefill questions, click Set Up Prefill Questions. For more information, see Prefill
Assessment Questions with Previously Submitted Responses in a Discovery Framework Omniscript.
4. To configure the prefill assessment question decision table, click Configure Decision Table.

<!-- page:874 -->



5. Add the decision table property to Omniscripts, and click Mark as Complete.
6. To add the prefill feature to the Omniscript, activate the SiteAssessment_QuestionResponse
integration procedure, and click Mark as Complete next to Add Prefill Feature to Omniscripts.
7. To assign the required permission sets to the users to invoke the decision table, under Assign
Permission for Decision Tables, click Assign Permission next to Assign Run Decision Table Permission.


## See Also

Salesforce Help: Prefill Assessment Questions with Previously Submitted Responses in a Discovery
Framework Omniscript


Configure Generative AI Assessments for Sites and Investigators

Use the capabilities of generative AI to create assessment questions for identifying the sites and
investigators for conducting clinical trials. Upload a PDF document that has the assessment questions
and use generative AI to choose the relevant questions to be included in the assessment.


**REQUIRED EDITIONS**

Before you configure assessments, make sure that you assigned the Generative AI Assessment Questions
permission set to the users.


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED


## To configure Generative AI Assessments for Sites

and Investigators:                                   Generative AI Assessments for Sites and
Investigators

AND

Study Manager for Site Management

AND

Natural Language Processing (NLP) Service

AND

Scoring Framework User


Warning Generative AI can produce inaccurate or harmful responses. Review the output for
accuracy and safety. You assume responsibility for how the outcomes of Einstein are applied to your
organization.

<!-- page:875 -->



1. In the Site Management guided setup, under Enable Generative AI Assessment Generation, click Mark
Complete next to Assign Assessment Generation Permission Set Licenses.
2. Click Enable Industries AI next to Enable Industries AI. Turn on Industries AI Setup.
3. In the Site Management guided setup, click Enable Einstein next to Enable Einstein. Turn on Einstein.
4. In the Site Management guided setup, click Go to Setup next to Enable Generative AI Assessment
Questions. Turn on Generative AI Assessment Questions.
5. In the Site Management guided setup, click Go to Setup next to Configure Use Case for Gen AI
Questionnaire. Create a use case configuration of the Assessment Questions Extraction type, and
activate it.


## See Also

Salesforce Help: Einstein Generative AI for Health Cloud
Salesforce Help: Set Up Einstein Generative AI


Configure Site Feasibility Scoring

Study managers can assign scores to the sites and investigators based on the assessment responses. The
scoring feature uses the formula question capabilities in Discovery Framework to add a score value to
each option in the questionnaire.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To configure site feasibility scoring:
Health Cloud Starter

AND

Omnistudio Admin


1. In the Site Management guided setup, under Configure Site Feasibility Score, click Add Picklist Values
next to Add Picklist Values to Care Program Detail Subtype.
2. In Detail Subtype Picklist Values, click New.
3. In the text box, enter Site Management, and save your changes.
4. In the Site Management guided setup, under Configure Site Feasibility Score, click Update Data
Mapper next to Update SiteManagementGetOmniRecordByResearchStudyId Data Mapper.
5. Clone the SiteManagementGetOmniRecordByResearchStudyId data mapper.
6. Open the data mapper, and add a condition for the Care Program Detail subtype.
7. Activate the data mapper.

Add the SiteManagementAssessmentDataVisualization Flexcard to the Research Study page.

<!-- page:876 -->




## See Also

Salesforce Trailhead: Configure Unified Health Scoring


Add Flexcard to the Research Study Page


## To enable study managers to view assessment details, add the

SiteManagementAssessmentDataVisualization Flexcard to the Research Study page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED


## To create a default Criteria-Based Search and Filter

configuration:                                         Health Cloud Starter

AND

Omnistudio Admin


1. From the App Launcher, find and select Research Studies.
2. Open a research study record.
3. Click Setup, and select Edit Page.
4. Place the Flexcard component in a suitable spot on the page layout.
We recommend that you create a dedicated tab on your page for this Flexcard and place it inside that
tab.
5. Select the Flexcard component that you placed on the page.
6. In the component properties panel, select the SiteManagementAssessmentDataVisualization
Flexcard.
7. Save your work and activate the page, if needed.


## See Also

Salesforce Trailhead: Add a FlexCard to a Lightning Page


Configure Digital Experience for Site Management

Set up Experience Cloud for users to configure site and investigator assessments.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:877 -->




USER PERMISSIONS NEEDED

To configure digital experience:
Health Cloud Starter

AND

Study Manager for Site Management


Before you configure digital experience for site management, make sure that you assigned the
Assessment Envelope for Site Management in Experience Cloud permission set to your users.

1. In the Site Management guided setup, under Configure Digital Experiences, click Enable Digital
Experiences next to Enable Digital Experiences. On the settings page, click Enable.
2. In the Site Management guided setup, under Configure Digital Experiences, click Go to Assessment
Setup next to Configure External User Assessments.
3. Enable the external user assessments.
4. Set an expiration period for the assessment envelope.
5. In Send Email Assessment Flow, select Send Assessment Envelope Email. Save your changes.
6. Complete the steps under the Get Your Org Ready to Use Assessments, Create Assessments with
Discovery Framework, and Add the Assessment Component to Pages sections.
7. To send assessments to multiple care program sites:
a. Under Configure Digital Experiences, click Go to Setup next to Update Site URL in Bulk Send
Assessment Email Flow. The flow opens in Flow Builder.
b. In the Toolbox section in Flow Builder, select the ExperienceCloudSiteUrl constant, and update URL
in the Value field as required.
If required, use the Send Assessments to Care Program Sites in Bulk screen flow to add an action in
the Care Program Sites list view to send assessments to multiple sites.


## Configure External User Assessments for Site Management

Help study managers send site feasibility questionnaire to the clinical trial sites. When the
questionnaire is sent, the investigators at the sites receive a link to complete the assessment on the
Experience Cloud portal within a specific date.


## See Also

Salesforce Help: Configure Digital Experiences Settings
Salesforce Help: Add the Assessment Component to Record and App Home Pages
Salesforce Help: Discovery Framework and Assessments Prerequisites
Salesforce Help: Assign a Permission Set License to a User


Configure External User Assessments for Site Management

Help study managers send site feasibility questionnaire to the clinical trial sites. When the questionnaire
is sent, the investigators at the sites receive a link to complete the assessment on the Experience Cloud
portal within a specific date.

<!-- page:878 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To configure assessments:
Industries Assessment permission set license


1. In the Site Management guided setup, under Configure Digital Experiences, click Go to Assessment
Setup next to Configure External User Assessments.
2. In the Assessment Setup page, turn on External User Assessments.
3. Set the default number of days until the assessment envelope expires, and save your changes.

The assessment envelope contains all the assessments that the study manager sends to the sites. They
can change the default expiration date before sending the assessments, but the expiration date can’t
exceed 30 days.

4. In Send Email Assessment Flow, click Edit.
5. Select the Send Email Assessment Flow that is customized for your requirements, and save your
changes.
If the Send Email Assessment Flow isn’t in the dropdown, check to see if it’s activated.


## See Also

Salesforce Help: Customize the Assessment Envelope Email Template Flow


Configure Einstein for Agentforce

To improve the customer experience with Agentforce, you can take advantage of Einstein features, such
as Einstein Bots.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To configure Einstein:
Health Cloud Starter

AND

Study Manager for Site Management

<!-- page:879 -->



1. Assign the permission set licenses to your users.
2. In the Site Management guided setup, under Configure Einstein, click Mark Complete next to Assign
Permission Set Licenses.
3. In the Site Management guided setup, under Configure Einstein, click Go to Setup next to Turn on
Einstein.
4. In the Einstein Setup page, turn on Einstein and deploy prompt templates.
5. In the Site Management guided setup, under Configure Einstein, click Go to Setup next to Turn on
Einstein Bots.
6. In the setup page, turn on Einstein Bots.
7. In the Site Management guided setup, under Configure Einstein, click Go to Setup next to Turn on
Agentforce.
8. In the setup page, turn on Agentforce, and create a new Agentforce Employee agent for site selection
assistance.


## See Also

Salesforce Help: Set Up Einstein Generative AI


Configure Site and Investigator Summarization

Site and investigator summarization presents all critical information in a concise format, making it easy
for users to quickly review key details on their screen. Configure summarization by turning on context
definitions and activating prompt templates. Then, add the summarization action to the sites and
investigators search results page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To configure site and investigator summarization:
Health Cloud Starter

AND

Context Service Admin

AND

Life Sciences Site Management Summarization


1. In the Site Management guided setup, under Configure Site Investigator Summarization, turn on site
investigator summarization.
2. Click Go to Setup next to Turn On Context Definitions.
3. In the Context Service Settings page, turn on Context Definitions.

<!-- page:880 -->



4. Click Go to Setup next to Activate Prompt Templates for Summarization.
5. In the Prompt Builder, activate the Summarize Site or Investigator prompt template.
6. In the Site Management guided setup, under Configure Site Investigator Summarization, click Go to
Setup next to Add Summarization Action to Search Results Page.
7. In the Criteria-Based Search and Filter setup page, activate Criteria-Based Search and Filter.
8. Create an action for summarizing site information.
a. Click Action Configuration, and click New.
b. Select Summarize Site as the name.
c. Select Inline as the action scope.
d. Select LightningWebComponent as the action type.
e. Select Summarize Site as the action reference.
f.If necessary, add a description for the action and specify whether the action is intended for
Agentforce.
g. Save your changes.
9. Similarly, create an action for summarizing investigator information with Summarize Investigator as
the name and the action reference.


## See Also

Salesforce Help: Set Up Criteria-Based Search and Filter


Configure Agentforce for Site Selection Assistance

Help your users use Agentforce to identify potential sites for running feasibility studies, allowing them to
quickly assess and select the most suitable locations. With Agentforce, users can save time and
resources, focusing on the most viable options for their projects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To configure Agentforce:
Health Cloud Starter

AND

Prompt Template User


1. In the Site Management guided setup, under Configure Site Selection Assistance Agent, turn on site
selection assistance topic and actions.
2. Click Go to Setup next to Create Agentforce Employee Agent.
3. Create an Agentforce Employee agent from the template.
4. In the Agentforce setup page, click the Agentforce Employee agent that you created, and select

<!-- page:881 -->



Version 1.
5.    In the Agentforce Builder page, click New, and select Add from Asset Library.
6.    In the Add from Asset Library window, select Site Selection Assistance topic, and click Finish. The Site
Selection Assistance topic is added to the Agentforce Employee agent.
7.    In the Agentforce Builder page, click Activate.
8.    Under Configure Site Selection Assistance Agent, click Go to Setup next to Activate Prompt template
for Site Search Filters.
9.    In the Prompt Builder page, if the prompt template is not activated, click Activate.


## See Also

Salesforce Help: Create an Agent from an Agentforce Employee Agent Template


Stage Management for Research Study or Care Program
Orchestration

Simplify the implementation of complex stages in a research study or care program by using Stage
Management in clinical trials. Define the stage sequence, establish milestones from initiation to closure,
and monitor operational progress at each stage. With Stage Management, give your users a
comprehensive view of the record’s stage progress seamlessly on a record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


## See Also

Salesforce Help: Stage Management


Contracts for Site Management

Sponsors and clinical trial organizations can use Salesforce Contract Lifecycle Management to manage
the entire lifecycle of clinical trial contracts and agreements, from authoring to activation. In Site
Management, configure contract workflows for non-disclosure or confidentiality disclosure agreements
before site feasibility, and clinical trial agreements after site selection and qualification. Use contracts to
make sure agreements are securely generated, reviewed, and executed quickly to accelerate the study
startup and site activation process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


## See Also

Salesforce Help: Salesforce Contracts

<!-- page:882 -->




Using Site Management

Use Site Management to identify the suitable sites for conducting an efficient clinical research study for
your products.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Use the Criteria-Based Search and Filter capabilities to search for sites and investigators. Use the
discovery framework or the generative AI features to create assessments, and then send them to the
identified sites. Review the assessment responses on the assessment dashboard. Assign scores to sites,
investigators, and assessment responses. Tag a site for conducting assessments in the future.


## Site Selection Console App

Study managers at life sciences organizations and contract research organizations often struggle with
the site selection and activation process and the daily tasks because of the use of multiple,
disconnected tools. Use the Site Selection console app to simplify these tasks by consolidating key
metrics and activities into a single platform. Improve organization and efficiency, enhancing the
overall site selection process.
Search for Sites and Investigators
Use Criteria-Based Search and Filter to search for sites and investigators.
View Site and Investigator Summaries on Search Results Page
Quickly get a summary of the key details of clinical trial sites and investigators directly from the search
results page, without going to individual records and related lists. Use this efficient overview to save
time and to streamline your site selection process.
Generate Site Feasibility Assessments
Site feasibility assessments give you a clear idea about the sites and the investigators working at the
sites. Assessments bring you the data about a site that you want to consider for conducting your
research studies.
Send Assessments to Sites
After you identify a site for conducting a research study, send a feasibility assessment to the site. The
investigators at the site can respond to the questions in the feasibility assessments.
Review Assessment Details and Responses
Use the assessment dashboard to view the site assessment details and review the responses. View the
total number of invitations, responses, and the minimum and maximum scores for an assessment.
Create a Research Study
Speed up site selection by creating research studies using a flow, instead of updating multiple object
records separately. Save time and reduce the risk of errors, making sure that your studies are set up
and running smoothly.
Update a Research Study

<!-- page:883 -->



Ensure precise site selection by revising key details of the research study such as the name and title to
better reflect the current focus, adjusting the dates to match the current timeline, and refining the
inclusion and exclusion criteria. Select a new pre-eligibility questionnaire to effectively screen potential
participants.


Site Selection Console App

Study managers at life sciences organizations and contract research organizations often struggle with the
site selection and activation process and the daily tasks because of the use of multiple, disconnected
tools. Use the Site Selection console app to simplify these tasks by consolidating key metrics and
activities into a single platform. Improve organization and efficiency, enhancing the overall site selection
process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


By default, the Site Selection console app includes these items:

- Home Page
- Research Studies
- Care Program sites
- Healthcare Providers
- Healthcare Facilities
- Assessments
- Site and Investigator Search
- Care Site Investigator Searchable Fields
- Omniscripts
Consolidate Key Data By Using Site Selection Console App
Streamline the site selection process by bringing together essential site selection metrics and activities
in one place.


Consolidate Key Data By Using Site Selection Console App

Streamline the site selection process by bringing together essential site selection metrics and activities in
one place.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:884 -->




USER PERMISSIONS NEEDED

To use the Site Selection console app:
Study Manager for Site Management


Add items to the list of default items available on the Site Selection console app, or edit the list.

1.    From the App Launcher, find and select Site Selection.
2.    From the dropdown, select the item that you want to update.
3.    To add items to the list, select Edit from the dropdown.
4.    Click Add More Items.
5.    Select the item, and click Add Items.
6.    Save the changes.


Search for Sites and Investigators

Use Criteria-Based Search and Filter to search for sites and investigators.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


By default, you can perform a search based on the investigator type, investigator therapeutic area,
healthcare facility name, and healthcare facility specialty. Use the advanced filter options on the Search
Criteria page to sort the results. Add fields to search criteria by configuring Criteria-Based Search and
Filter. After you get the search results, add a site to the research study that you want to conduct.

USER PERMISSIONS NEEDED

To search for sites and investigators:
Health Cloud Starter

AND

Study Manager for Site Management

AND

Criteria-Based Search and Filter


Perform the site and investigator search from the page where you integrated the Criteria-Based Search
and Filter component. The results for the fields where you select multiple values, for example
Investigator Therapeutic Area, include values for the specified options. This section uses the Research
Study page as an example for launching the Search Criteria fields.

<!-- page:885 -->




Note Site Management shows only up to 4,000 characters for text field search results. For example,
when you search for care specialties, if the results include 5,000 characters, Site Management
truncates the results, and shows only 4,000 characters. If a search criterion has numeric values, Site
Management removes it from the search results.


1. From the App Launcher, find and select Research Studies.
2. On the Site Investigator Search tab, under Search Criteria, enter the details, and then click Search.
The search results appear on the same page.
3. To filter the search results, in the Filters section, enter the details, and click Apply Filters.
4. To add a site to a research study that you’re conducting, click Add Site to Study.
5. Select the name of the research study, and click Preview Selection.
6. Review your selections, and click Next.
7. Click Finish.


View Site and Investigator Summaries on Search Results Page

Quickly get a summary of the key details of clinical trial sites and investigators directly from the search
results page, without going to individual records and related lists. Use this efficient overview to save time
and to streamline your site selection process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To summarize sites and investigators:
Healthcloud Starter

AND

Study Manager for Site Management

AND

Context Service Runtime

AND

Prompt Template User


On the search results page, view the crucial information about a site including its name, location, type,
network affiliations, accreditation, and the operational and therapeutic characteristics. This information
also covers the supported therapeutic areas, the types and phases of supported clinical trials, past
performance in clinical trials, and compliance and quality metrics related to the site. Study managers can

<!-- page:886 -->



also access the details of investigators, including their professional background, research experience,
Good Clinical Practice (GCP) training, and research contributions.

1. From the App Launcher, find and select Site Management.
2. From the dropdown next to Site Management, select Criteria-Based Search and Filter.
3. Enter the details in the Search Criteria fields, and then click Search.
The search results appear on the same page.
4. To summarize the site information, from the dropdown next to the healthcare facility and the
investigator in the search results, select Summarize Site.
5. On the confirmation window, click I Understand to proceed. If you don't want to see the Einstein AI
disclaimer again, click Don't show this again.
The Site Summary page shows the summary of the site's details. To close the window, click Done.
6. To summarize the investigator information, from the dropdown next to the healthcare facility and the
investigator in the search results, select Summarize Investigator.
7. On the confirmation window, click I Understand to proceed. If you don't want to see the Einstein AI
disclaimer again, click Don't show this again.
The Investigator Summary page shows the summary of the site investigator's details. To close the
window, click Done.


Generate Site Feasibility Assessments

Site feasibility assessments give you a clear idea about the sites and the investigators working at the sites.
Assessments bring you the data about a site that you want to consider for conducting your research
studies.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To generate site feasibility assessments:
Omnistudio Admin

AND

Study Manager for Site Management

AND

Natural Language Processing (NLP) Service

AND

Scoring Framework User

<!-- page:887 -->



1. From the App Launcher, find and select Assessment Questions.
2. To create an assessment with existing questions, click Select Questions. On the Select Discovery
Framework Usage Type window, select Life Sciences Site Management as the usage type.
3. To use Einstein generative AI to create an assessment, click Draft Questions with Einstein.


## See Also

Salesforce Help: Draft Assessment Questions With Assessment Generation


Send Assessments to Sites

After you identify a site for conducting a research study, send a feasibility assessment to the site. The
investigators at the site can respond to the questions in the feasibility assessments.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To send assessments to sites:                       Study Manager for Site Management


1.    From the App Launcher, find and select Care Program Sites.
2.    Select the care program site, and click Assessment Library.
3.    Select the assessment, and click Send.
4.    Review the details, and click Send.

The assessment is sent to the site investigator's email address.


Review Assessment Details and Responses

Use the assessment dashboard to view the site assessment details and review the responses. View the
total number of invitations, responses, and the minimum and maximum scores for an assessment.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To review assessment details and responses:
Health Cloud Starter

<!-- page:888 -->




USER PERMISSIONS NEEDED


AND

Study Manager for Site Management


Use the histogram on the assessment dashboard for a comprehensive view of the assessment responses,
based on the scores that you set for the questions. From the dashboard, go to the details of the
assessment response from a specific site or investigator. Use the advanced filter option to filter the sites
on the histogram, based on the minimum and maximum scores.

1. From the App Launcher, find and select Research Studies.
2. Select the research study that the assessment was completed for.
3. On the Assessment Survey tab, select the assessment, and click Show Results.
4. To filter the sites based on the assessment response scores, expand the Advanced Filters section, and
enter the minimum and the maximum scores. Click Apply Filters.
5. To go to a specific response, in the list of sites and investigators, click See Assessment Response.


Create a Research Study

Speed up site selection by creating research studies using a flow, instead of updating multiple object
records separately. Save time and reduce the risk of errors, making sure that your studies are set up and
running smoothly.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a research study:
Study Manager for Site Management


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

<!-- page:889 -->



The research study that you created appears in the Research Studies list.


Update a Research Study

Ensure precise site selection by revising key details of the research study such as the name and title to
better reflect the current focus, adjusting the dates to match the current timeline, and refining the
inclusion and exclusion criteria. Select a new pre-eligibility questionnaire to effectively screen potential
participants.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To update a research study:
Study Manager for Site Management


1. From the App Launcher, find and select Research Studies.
2. Open the research study that you want to update.
3. In the dropdown menu at the top-right corner of the page, select Update Study Details.
4. Update the details on the Basic Information, Enrollment Information, and the Participant Eligibility
windows.
5. If needed, select a new pre-eligibility questionnaire.
6. Click Finish.

<!-- page:890 -->





Set up Patient Engagement for Life Sciences by implementing features such as Care Programs, Financial
Assistance Programs, Patient Program Outcome Management, and Pharmacy Benefits Verification.


## Set Up Advanced Therapy Management

Advanced Therapy Management’s Multi-Step Scheduling feature supports slot management and
scheduling across multiple territories in a single place, to help users easily search for and book
appointments across multiple sites. Advanced Therapy Orchestration provides flexible workflows that
automatically execute all the components of an advanced therapy, from therapy stages and substages
to individual tasks.
Set Up Benefit Verification
Integrate benefit verification into the end-to-end patient access workflow to help caregivers and
patients reduce the time and effort it takes to find out what coverage is available under each patient's
health benefits.
Set Up Care Programs
Maximize the impact of your care programs with enrollment and management tools to help drive
adherence and improve outcomes. Care programs can cover services such as patient outreach, access
to medications, access to care, financial assistance, or remote monitoring.
Set Up Financial Assistance Programs
Financial Assistance Program streamlines the enrollment of patients, helping them manage out-of-
pocket medical expenses. Patient service reps can identify suitable assistance programs based on
specific criteria and apply on behalf of the enrollees. Reps can view the status of the application and
the history of any financial assistance that was provided to the enrollee. If the application is rejected,
the patient service rep can file an appeal. After the application is approved, another patient service rep
can view the details of the benefit disbursement, such as the count and benefit of reimbursed Copay
coupons.
Set Up Patient Program Outcome Management
Patient Program Outcome Management streamlines the process of defining program outcomes and
indicators, and connects program outcomes with patient progress, enabling measurement at the
outcome level. Enhance care program efficacy and get clear insights into patient and program
performance through Patient Program Outcome Management. Improve patient experience and
adherence by building your customized assessments and logic to compute indicator results, and
evaluate outcomes to refine patient service programs.
Set Up Patient Support Programs Analytics for AFLS
Patient Support Programs (PSP) Analytics provides a complete solution, including Tableau Einstein

<!-- page:891 -->



dashboards, to improve patient and program outcomes. The dashboards give program leads and
patient services reps the data-driven insights they need to optimize operational efficiency.
Set Up Pharmacy Benefits Verification
Gain quick access to patient care and verify benefit coverage details. Patient services representatives
can use a streamlined process to assist patients in getting an accurate summary of their pharmacy
benefits. Representatives can use a guided flow to initiate a verification request to payers and receive a
response for pharmacy coverage details, including coverage status, co-pay, co-insurance, and
deductibles.
Set Up Provider Relationship Cards
Set up provider relationship cards to quickly and efficiently show users what they need to know about
providers and the facilities where they work, all in one place. Identify the information your users look
for on each Provider Relationship Card, then use the card setup wizard to connect the various objects
that contain that information.
Set Up Provider Search for Life Sciences
Powered by the provider data model, Provider Search helps your users find healthcare providers based
on criteria such as location, specialty, and whether the provider is accepting new patients. You can
even see the location of each provider right in AFLS.

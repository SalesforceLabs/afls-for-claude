<!-- guide:admin-guide section:set-up-engagement-execution-features pages:237-309 -->
# Set Up Engagement Execution Features



4. To allow users to create time-off spanning across multiple days, select Let users create time-off slots
across multiple days.
5. For the All Day, Morning, Afternoon, and Evening time slots, select the time interval during which you
want to allow users to create time-off entries.
If users select a slot when creating a time off territory record, the corresponding start and end times
are automatically populated.
6. Save your changes.



Set Up Engagement Execution Features

Streamline scheduling, pre-visit planning, in-visit execution, and post-visit reporting processes with Visit
Management. Capture, manage, and honor consent and communication preferences of healthcare
professionals with Consent Management. Use Remote Engagement to host virtual meetings with
customers. Use Medical Inquiries to deliver fast, compliant, and trusted responses to every HCP inquiry.
Use Surveys to collect feedback from customers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Consent Management

Consent Management enables users to capture, synchronize, and honor the communication
preferences of healthcare professionals across different subscription types and channels. This feature
helps limit outreach to healthcare professionals who have provided consent, which helps
organizations stay compliant with data privacy regulations.
Medical Inquiries
Capture, manage, and respond to critical questions from healthcare professionals (HCPs). Help your
sales representatives and medical science liaisons streamline the inquiry creation process, provide
accurate and timely responses, and handle a variety of inquiry types, including general medical
inquiries, adverse events, and product quality complaints. Leverage configurable workflows and robust
compliance capabilities to ensure that all medical inquiries are handled quickly and in accordance with
medical, legal, and regulatory standards.
Medical Insights
Use Medical Insights to provide field teams a structured way to capture and share insights from their
engagements with HCPs and HCOs. Show relevant insight data for collaboration through customized
record pages with specific field sets and related lists. Streamline the user workflow by creating quick
actions and defining granular permissions to control how users interact with insights.
Remote Engagement
Remote engagement facilitates virtual meetings by providing tools to start and manage remote visits

<!-- page:238 -->



with healthcare professionals. When users schedule remote visits, healthcare professionals receive
invitations with the necessary details such as the meeting link and passcode. During the meeting,
users can manage participants, share screens, and end the session, streamlining virtual interactions
and eliminating the need for in-person visits.
Surveys
Surveys enable you to design and distribute questionnaires to gather structured feedback from
healthcare professionals. Use this data to analyze behavioral trends, monitor patient-related outcomes,
and strengthen provider relationships. These insights support innovation, treatment planning, and
strategic decision-making.
Visit Management
Visit Management optimizes the face-to-face visit experience for your field users and clients by
simplifying visit scheduling, planning, visit engagement, and postvisit reporting. Because this reduces
administrative tasks, field users can focus on building strong relationships with healthcare providers.
Engage seamlessly with accounts across all channels by using intelligent content and remote
capabilities. Manage sample distribution and direct-to-practitioner requests confidently with built-in
compliance controls.


Consent Management

Consent Management enables users to capture, synchronize, and honor the communication preferences
of healthcare professionals across different subscription types and channels. This feature helps limit
outreach to healthcare professionals who have provided consent, which helps organizations stay
compliant with data privacy regulations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license



## Add a Tab for Consent Management on a Record Page

Provide a central location for viewing a healthcare professional's (HCP) consent status, subscriptions,
and communication preferences by adding a custom tab for Consent Management on the account’s
record page. This Consent page provides sales reps with immediate visibility into their HCPs’
subscription and channel preferences.
Manage Subscriptions and Channels
Quickly create a record from an object's homepage that is necessary to use the features within
Consent Management.
Set Up Consent Management
Use Consent Management to capture, manage, and track a healthcare professional's (HCP) consent for
various communication channels and subscription preferences. Define consent statuses, signature
requirements, geolocation settings, and filtering rules to make sure that outreach activities comply
with applicable regulatory requirements.

<!-- page:239 -->




## Add a Logo to the Consent Page

Use static resources to upload a logo or image that you can reference in the AFLS for
Customer Engagement app. This logo appears in the signature section when sales reps collect consent
from healthcare professionals, helping your organization maintain brand consistency.
Mobile App Configuration for Consent Management
Create object metadata cache configuration for supported Consent Management objects and
generate a metadata cache to make sure your sales reps can view and update consents on the Life
Sciences Cloud Mobile app.
Send a Confirmation Email
Send a personalized follow-up email to a healthcare professional (HCP) after you capture their consent
or signature.
Batch Jobs for Consent Management
When account and territory mapping is changed, Consent Management batch jobs help in aligning the
sharing records for Communication Subscription Consent and Communication Subscription
Compliance Snapshot objects.


Add a Tab for Consent Management on a Record Page

Provide a central location for viewing a healthcare professional's (HCP) consent status, subscriptions, and
communication preferences by adding a custom tab for Consent Management on the account’s record
page. This Consent page provides sales reps with immediate visibility into their HCPs’ subscription and
channel preferences.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Consent Management           Life Sciences Commercial Admin
features and objects:


## To create and save Lightning pages in the            Customize Application

Lightning App Builder:


1.    From the App Launcher, find and select Life Sciences Commercial.
2.    Click Accounts.
3.    On the Accounts list view page, select a record to add the tab.
4.    From the Setup Menu, click Edit Page.
5.    To add a tab, click the Tabs pane on the canvas, and in the properties section, click Add Tab.
6.    To customize a tab, select the newly added tab component in the properties pane, then select a

<!-- page:240 -->



standard label, or click Custom to enter the tab name you want.
For example, Consent.
7. In the components pane, find Consent, and then drag it to the newly created tab.
8. Similarly, in the Components pane, find the Related List - Single component, and drag it to the newly
created tab.
9. If you can’t find the related-list component, go to Object Manager from Setup, and click the Account
and Person Account page layout.
See Add the Files Related List to Page Layouts.
10. In the Related List properties pane, in the Related List field, find and select Communication
Subscription Consents.
11. Save your changes.
12. To make your customized record page available to your Lightning Experience web and mobile users,
click Activate in the activation window.
a. In the confirmation window, select App, Record Type, and Profile tab, and then click Assign to
App, Record Type, and Profile.
b. Select the Life Sciences Commercial Lightning app, and click Next.
c. Select the Form Factor as Desktop and Mobile, and click Next.
d. Select the Record Type as Person Account, and click Next.
e. Select the Standard User and System Administrator profiles, and click Next.
f. Save your changes.
Based on your business needs, you can also set the page as an Org Default to show it for all account
records or as an App Default for the specific app.

To see this tab on the AFLS Mobile app, generate a metadata cache.


## See Also

Generate Metadata Cache


Manage Subscriptions and Channels

Quickly create a record from an object's homepage that is necessary to use the features within Consent
Management.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Add a New Subscription

Create a Communication Subscription record to add new subscription topics to the Consent page on
the AFLS for Customer Engagement app.
Create a Data Use Purpose Record

<!-- page:241 -->



Associate a Life Sciences Marketable Product to a Communication Subscription by creating a Data Use
Purpose record to manage and organize consents for specific products.
Add a Channel to the Subscription
Create Communication Subscription Channel types to add new communication channels to a
subscription. These records define the channel types, such as Email, SMS, or Direct Mail, that
healthcare professionals can choose from as their primary mode of communication.
Add a New Engagement Channel Type
Create a new channel type by creating an Engagement Channel Types record. Adding new channel
types makes these options available on the Consent page.


## See Also

Set Up Consent Management


Add a New Subscription

Create a Communication Subscription record to add new subscription topics to the Consent page on the
AFLS for Customer Engagement app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Consent Management           Life Sciences Commercial Admin
features and objects:


## To update and create a new communication

subscription:                                        Life Sciences Field Sales Representative


1. From the App Launcher, find and select Communication Subscriptions.
2. Click New.
3. Enter the name of the new Subscription.
4. Select a Data Use Purpose.
This record creates the link between a Life Sciences Marketable Product and a Communication
Subscription. If no records exist, create a Data Use Purpose record.
5. In the Filter Attribute List field, enter comma-separated attributes to filter subscriptions.
The values must match the values of an Account or Account Territory field that was configured in the
Admin Console for Subscription Filtering Fields.
For example, if you select Account Name as a filtering field in the setup, you enter specific account
names, separated by a comma, in the Filter Attribute List field. Subscriptions will then only appear for
those specific accounts. If the Filter Attribute List field is empty, the system shows subscriptions for all

<!-- page:242 -->



accounts.
6. Save your changes.


## See Also

Create a Data Use Purpose Record


Create a Data Use Purpose Record

Associate a Life Sciences Marketable Product to a Communication Subscription by creating a Data Use
Purpose record to manage and organize consents for specific products.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Consent Management           Life Sciences Commercial Admin
features and objects:


1. From the App Launcher, find and select Data Use Purpose.
2. Click New.
3. Enter the name of the new Data Use Purpose.
4. In the Purpose field, select Life Sciences Marketable Product from the dropdown menu, and then
search for the corresponding product record to link it to the Data Use Purpose for the communication
subscription.
5. Save your changes.


## See Also

Add a New Subscription


Add a Channel to the Subscription

Create Communication Subscription Channel types to add new communication channels to a
subscription. These records define the channel types, such as Email, SMS, or Direct Mail, that healthcare
professionals can choose from as their primary mode of communication.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:243 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Consent Management           Life Sciences Commercial Admin
features and objects:


1. From the App Launcher, find and select Communication Subscription Channel Types.
2. Click New.
3. Enter the name of the new Data Use Purpose.
4. Select the Communication Subscription that you want to align a channel to.
5. Select the Engagement Channel Type.
If you want to create a new channel type, see Add a New Engagement Channel Type.
6. Save your changes.


Add a New Engagement Channel Type

Create a new channel type by creating an Engagement Channel Types record. Adding new channel types
makes these options available on the Consent page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Consent Management           Life Sciences Commercial Admin
features and objects:


1. From the App Launcher, find and select Engagement Channel Types.
2. Click New.
3. Enter the name of the new channel type.

Note This name appears as the channel name that is shown on the Consent page.

4. Select the contact point type that this channel applies to.
5. Select the engagement channel type.
This selection determines the Contact Point object from which the values are populated on the
consent page.
6. To activate the engagement channel type, select Active.
7. Save your changes.

<!-- page:244 -->




Set Up Consent Management

Use Consent Management to capture, manage, and track a healthcare professional's (HCP) consent for
various communication channels and subscription preferences. Define consent statuses, signature
requirements, geolocation settings, and filtering rules to make sure that outreach activities comply with
applicable regulatory requirements.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Consent Management           Life Sciences Commercial Admin
features and objects:


- The Consent page in the AFLS for Customer Engagement app works by creating a series
of connected Communication Subscription records and related object data: Communication
Subscription, Engagement Channel Types, Communication Subscriptions Channel Types, Data Use
Purpose, Compliance Statement Definition, Communication Subscription Consent, Communication
Subscription Compliance Snapshot, Contact Point Address, Contact Point Phone, Contact Point Email,
Contact Point Social, Digital Signatures.
-     Add the Consent component to the Account page layout in a new tab.

1.    From the App Launcher, find and select Life Sciences Commercial.
2.    Click Admin Console.
3.    In the Life Sciences Customer Engagement Setup page, find and select Consent Administration.
4.    Configure general settings based on your requirements.
a. Enable users to add multiple values for consent channels.
Users see an Add More option on the consent tab.
b. Allow users to select Not Asked as the consent status in addition to Opt In and Opt Out.

Note Only the Opt-in and Opt-out statuses are supported when saving the consent.

c. Allow sales reps to lock the consent capture screen.
Prevents healthcare professionals from navigating to other pages while signing the consent.
d. Allow users to view the signature captured in the consent’s last update.
5. In the Signature Section, specify the signature requirement.
- Required
- Not Required
- Optional
6. To capture geolocation data during consent signing, select Capture geolocation during consent
signing.

<!-- page:245 -->



7. Configure the attachment requirements for desktop and mobile.
a. In the Attachment Requirement for Desktop Site field, select an option to determine whether an
attachment is required or not when capturing consent on a desktop site.
b. In the Attachment Requirement for Mobile App field, select an option to determine whether an
attachment is required or not when capturing consent on the AFLS Mobile app.
8. In the Product Restriction section, select Show restricted products.
Show or hide disabled subscriptions associated with the restricted products.
9. Configure the subscription filtering fields.
a. For Account Territory Fields, select a field to filter the subscriptions available for the account.
b. For Account, select the field from the account object to filter subscriptions shown to the account
when a provider account territory info record isn't available.
10. Configure the disclaimer filtering fields.
a. For Account Territories, select the field from the provider account territory info object to filter the
disclaimer.
b. For Account, select the field from the provider account territory info object to filter the disclaimer
when a provider account territory info record isn't available.
11. Configure terms & conditions filtering fields.
a. For Account Territories, select the fields from the provider account territory info object to filter the
terms and conditions.
b. For Account, select the field from the provider account territory info object to filter the terms and
conditions when a provider account territory info record isn't available.
12. Save your changes.


## See Also

Manage Subscriptions and Channels
Generate Metadata Cache
Customize the AFLS Mobile App
Consent Management Trigger Handlers


Add a Logo to the Consent Page

Use static resources to upload a logo or image that you can reference in the AFLS for
Customer Engagement app. This logo appears in the signature section when sales reps collect consent
from healthcare professionals, helping your organization maintain brand consistency.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:246 -->




USER PERMISSIONS NEEDED

To set up and configure Consent Management           Life Sciences Commercial Admin
features and objects:

To create static resources:                          Customize Application


1. From Setup, create a static resource, and enter the name as SignatureAreaLogo.
See Create a Static Resource.
2. Configure the logo in the AFLS Mobile app's UI.
a. From the App Launcher, find and select Life Sciences Commercial.
b. Click Admin Console.
c. In the Life Sciences Customer Engagement Setup page, click Mobile.
d. In the navigation pane, click UI Settings.
e. For the Filter field, select Static Resource.
f. Click New, and enter a label for the UI.
g. Enter a unique name for this configuration.
h. Enter a label that describes the purpose.
For example, Consent Logo for Users.
i. Select Static Resource as the Mobile Type, and in the Resource Name, select the static resource that
you created earlier.
For example, SignatureAreaLogo.
j. Select the profile this configuration applies to.
For example, System Administrator.
k. To activate the configuration, select IsActive.
l. Save your changes.

To see the logo on the AFLS Mobile app, generate a metadata cache.


## See Also

Generate Metadata Cache


Mobile App Configuration for Consent Management

Create object metadata cache configuration for supported Consent Management objects and generate a
metadata cache to make sure your sales reps can view and update consents on the AFLS
Mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:247 -->




USER PERMISSIONS NEEDED

To set up and configure Consent Management               Life Sciences Commercial Admin
features and objects:


Here's the list of objects used for managing consents.


Name                                                    Type

DbSchema_EngagementChannelType                          Data

DbSchema_DigitalSignature                               Data

DbSchema_DataUsePurpose                                 Data

DbSchema_ComplianceStatementDef                         Data

DbSchema_CommSubscriptionConsent                        Data

DbSchema_CommSubscriptionChannelType                    Data

DbSchema_CommSubscription                               Data

DbSchema_CommSubConsentCmplSnpsht                       Data


Important After you create these configurations, make sure to generate a metadata cache. This step
is important because it makes sure that the mobile app accesses the latest metadata definitions,
including any schema changes for supported objects.


## See Also

Create Object Metadata Cache Configuration
Generate Metadata Cache


Send a Confirmation Email

Send a personalized follow-up email to a healthcare professional (HCP) after you capture their consent
or signature.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Consent Management               Life Sciences Commercial Admin
features and objects:

<!-- page:248 -->



Consent confirmation emails confirm the subscriptions and channels that the HCP selected. Configure
the feature to send the email automatically or only when the Request receipt option is selected during
consent capture.

To send the email to the correct recipient, AFLS for Customer Engagement automatically
selects the primary Contact Point Email associated with the account that has the highest preference rank.
Sent emails appear in the account’s Activity History.

1.    Create an email template.
2.    To use the email template for consent confirmation, select Template for consent acknowledgment.
3.    Create a metadata cache configuration for the LifeSciEmailTemplate object.
4.    For consent confirmation emails, when creating the configuration set, add this condition in the Where
Clause.

AND HasSendConsentAcknowledgement = FALSE


5. Create and run the code for the Send SDK method, or add the code to the previously implemented
one. Here’s the code sample.


## Map<String, Object> paramMap = new Map<String, Object>

{ 'emailTemplateId' => '1LLWs000000YtbZOAS',
'accountId' => '001Ws00004MXTqvIAH',
'attachmentIds' => new Set<Id>{'', ''},
'relatedId' => 'relatedId', 'relatedLookupApiName' => 'relatedLookupA' };
Boolean result = (Boolean)
(lsc4ce.LifeScienceApi.getInstance
(lsc4ce.LifeScienceApi.Command.EmailSendService).execute(paramMap));



Batch Jobs for Consent Management

When account and territory mapping is changed, Consent Management batch jobs help in aligning the
sharing records for Communication Subscription Consent and Communication Subscription Compliance
Snapshot objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Available Batch Jobs

- CommSubscriptionConsentShareMgmtBatch: Realigns sharing for Communication Subscription

<!-- page:249 -->



Consent records.
-    CommSubConsentCmplSnpshtShareMgmtBatch: Realigns sharing for Communication Subscription
Compliance Snapshot records.

Run and Schedule a Batch Job

To make sure that new sharing records stay aligned with the latest account and territory changes, use this
Apex code snippet in the Developer Console. See [Run Batch Jobs for AFLS for Customer
Engagement app].




## // Create Map of Input Parameters

Map<String, Object> paramMap = new Map<String, Object>{
'batchName' => 'CommSubscriptionConsentShareMgmtBatch', // mandatory field
'territoryName' => 'California', // optional field
'batchSize' => '200' // optional field , default is 200
};
// Call
Boolean result = (Boolean)(LifeScienceApi.getInstance(LifeScienceApi.Command.C
onsentBatchJob).execute(paramMap));
System.debug('Result: ' + result);


To schedule a batch job, create a scheduled flow based on your business needs. See Schedule a Batch
Job.


## See Also

Salesforce Help: Batch Apex


Medical Inquiries

Capture, manage, and respond to critical questions from healthcare professionals (HCPs). Help your
sales representatives and medical science liaisons streamline the inquiry creation process, provide
accurate and timely responses, and handle a variety of inquiry types, including general medical inquiries,
adverse events, and product quality complaints. Leverage configurable workflows and robust compliance
capabilities to ensure that all medical inquiries are handled quickly and in accordance with medical,
legal, and regulatory standards.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:250 -->



Here's a summary of the key capabilities of Medical Inquiries.

- Improves response times and HCP satisfaction through an efficient inquiry process.
- Offers intuitive web and mobile interfaces for easy submission, documentation attachment, and status
tracking.
-   Features robust workflows and queues for prompt inquiry assignment.
-   Enhances security and data integrity with a dedicated data model and role-based access permissions.
-   Reduces noncompliance risks with an effective approval process for non-standard responses.
-   Enforces organizational policies, such as mandatory signatures, with custom validation rules.
-   Manages different statuses, actions, and records for each stage and role.


## Get Your Org Ready for Medical Inquiries

Before you set up Medical Inquiry in AFLS, make sure you have the required user
profiles, licenses, and permission sets.
Define Statuses for Medical Inquiries
Medical inquiries move through a series of steps from creation to closure. To get a clear understanding
of the progress and assignment of requests, it’s critical to track the real-time status of inquiries. Define
appropriate status values to help your sales representatives and medical science liaisons use the
Medical Inquiry workflow efficiently.
Set Up the Inquiry Record Page for Medical Inquiries
Add tabs and Lightning components to the Inquiry record page so that your sales representatives can
easily create and submit medical inquiry requests, and medical science liaisons can submit their
response to the inquiry questions.
Configure Action Buttons on the Inquiry Record Page
Help your users to handle medical inquiries in an efficient and timely manner by customizing the
target action of the New and Edit buttons on the Inquiry record page. This setup configures a multi-
object Lightning component that enables users to manage both inquiry and case records in one go.
Set Up the Account Record Page for Medical Inquiries
Add tabs and Lightning components to the Account record page so that your sales representatives and
medical science liaisons can easily manage and track all inquiries related to the healthcare
professional.
Configure Action Buttons on the Account Record Page
Let users create medical inquiries directly from the Account record page rather than navigating to the
Inquiry page. Add a button on the Account record page and make it easier for the sales
representatives to get a better context of the healthcare professional while creating the inquiry.
Configure Support Process and Record Types for the Medical Inquiry Workflow
Create support process and record types for the objects used in the medical inquiry workflow. Assign
profiles and page layouts to the record types to determine which one apply when users create, edit, or
view records.
Define Sharing Settings for Medical Inquiries
Promote effective management of medical inquiries by configuring sharing settings for the Inquiry
Question object. This configuration makes sure that the inquiry question and its associated parent
case have the same sharing settings.
Create a Custom Field for Medical Inquiries

<!-- page:251 -->



Set up a formula-derived custom field on the Inquiry object to capture your unique business data for
medical inquiries. The field helps to achieve conditional display of action buttons based on the user
profile or persona. This configuration promotes a seamless workflow by ensuring that sales
representatives can only draft, sign, and submit medical inquiries whereas medical science liaisons can
only assign and respond to the inquiries.
Set Up Workflow Actions for Medical Inquiry Management
Define relevant workflow actions for tasks that users must perform in the medical inquiry process,
such as inquiry submission, assignment, and more. With the help of workflow actions, you can show
contextual action buttons on the Inquiry record detail page depending on the current stage of the
inquiry workflow. For example, the Submit button appears when the inquiry is ready to be submitted
by the sales representative.
Set Up the Workflow Stages to Manage Medical Inquiries
Enhance efficiency, maintain compliance, and promote data integrity with configurable workflow
paths. The workflow outlines the journey of an object through various stages and helps you manage
the different statuses, actions, and record permissions. For the medical inquiry process, set up a
workflow path based on the Inquiry object and its different stages.
Batch Jobs for Medical Inquiries
Batch jobs are automated processes designed to share and manage multiple medical inquiry records
consistently and efficiently. Save time, reduce the risk of manual errors, and maintain the integrity and
reliability of inquiry data by using the MIRF Share Management job.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Get Your Org Ready for Medical Inquiries

Before you set up Medical Inquiry in AFLS, make sure you have the required user profiles,
licenses, and permission sets.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


- Enable Admin Console.
- Create user profiles for sales representatives and medical science liaisons based on the Standard User
profile and associate the profiles with the corresponding user records.
-    Assign the Life Sciences Core and Life Sciences Field Sales Representative permission sets to sales
representatives.
-    Assign the Life Sciences Core and Life Sciences Field Medical permission sets to medical science
liaisons.

<!-- page:252 -->




## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Define Statuses for Medical Inquiries

Medical inquiries move through a series of steps from creation to closure. To get a clear understanding of
the progress and assignment of requests, it’s critical to track the real-time status of inquiries. Define
appropriate status values to help your sales representatives and medical science liaisons use the Medical
Inquiry workflow efficiently.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add case status:                                  Life Sciences Commercial Admin permission set


1.    From Setup, open the Object Manager, and go to the Case object.
2.    Under Fields & Relationships, click Status.
3.    In the Case Status Picklist Values section, click New.
4.    Enter these exact inquiry status values, each on it’s own line: Draft, Signed, Submitted, Assigned,
and Responded.
5.    Save your changes.
6.    Set Draft as the default status.
7.    Set Responded as the closed status.
8.    Save your changes.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Set Up the Inquiry Record Page for Medical Inquiries

Add tabs and Lightning components to the Inquiry record page so that your sales representatives can
easily create and submit medical inquiry requests, and medical science liaisons can submit their
response to the inquiry questions.

<!-- page:253 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up the Inquiry record page:                   Life Sciences Commercial Admin permission set


Prerequisite: Create a field set for the Inquiry Question Answer object.

1. From Setup, go to Object Manager, and select Inquiry.
2. Under Lightning Record Pages, select the inquiry record page and click Edit.
3. Drag the LifeSciStagePathContainer component to an appropriate spot on the page.
4. Save your changes.
5. Add a tab named Inquiry Question Answer.
6. Drag the Related List - Life Sciences component to the Inquiry Question Answer tab, and then set up
these fields.
- Object Name: InquiryQuestionAnswer
- Field Set Name: Enter the name of the Inquiry Question Answer field set.
- Label: Inquiry Question Answer
- Icon Name: standard: work_plan_rule
- Handler for update/delete: StandardUpdateDeleteHandler
- Where Clause: InquiryQuestion.InquiryId = ‘recordId’
- Component name for the New action: StandardNewAction
- Relationship Field API Name: Inquiry.InquiryQuestionId
- View All Components: StandardViewAll
- Show record count: true
7. To view the timeline details for inquiries, drag the Timeline component to the page and configure the
component details.
8. Click Activation.
9. Click Assign as Org Default, and select Desktop and Phone.
10. Click Next and save your changes.

After you're done setting up Lightning components and tabs, you can configure action buttons on the
Inquiry record page.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry

<!-- page:254 -->




Configure Action Buttons on the Inquiry Record Page

Help your users to handle medical inquiries in an efficient and timely manner by customizing the target
action of the New and Edit buttons on the Inquiry record page. This setup configures a multi-object
Lightning component that enables users to manage both inquiry and case records in one go.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure action buttons:                         Life Sciences Commercial Admin permission set


1. From Setup, open the Object Manager, and go to the Inquiry object.
2. Click Buttons, Links, and Actions.
3. For the New label, click   , and then click Edit.
4. Under Lightning Experience Override, select Lightning component, and then select lsc4ce:
MultiEntityCreateOverride.
5. If the Inquiry object has multiple record types, select Skip record type selection page.
6. Save your changes.
7. On the Buttons, Links, and Actions page, for the Edit label, click , and then click Edit.
8. Under Lightning Experience Override, select Lightning component, and then select
lsc4ce:MultiEntityEditOverride.
9. Save your changes.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Set Up the Account Record Page for Medical Inquiries

Add tabs and Lightning components to the Account record page so that your sales representatives and
medical science liaisons can easily manage and track all inquiries related to the healthcare professional.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:255 -->




package.


USER PERMISSIONS NEEDED

To set up the Account record page:                     Life Sciences Commercial Admin permission set


Prerequisite: Create a field set for the Inquiry object.

1. From Setup, go to Object Manager, and select Account.
2. Under Lightning Record Pages, select the account record page and click Edit.
3. Add a tab named Inquiry.
4. Drag the Related List - Life Sciences component to the Inquiry tab, and then set up these fields.
- Object Name: Inquiry
- Field Set Name: Enter the name of the Inquiry field set.
- Label: Inquiry
- Icon Name: standard: work_plan_rule
- Handler for update/delete: StandardUpdateDeleteHandler
- Where Clause: Case.AccountId = ‘{recordId}’
- Component name for the New action: StandardNewAction
- Relationship Field API Name: Case.AccountId
- View All Components: StandardViewAll
- Show record count: True
5. Click Activation.
6. Click Assign as Org Default, and select Desktop and Phone.
7. Click Next and save your changes.

After you're done setting up Lightning components and tabs, you can configure action buttons on the
Account record page.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Configure Action Buttons on the Account Record Page

Let users create medical inquiries directly from the Account record page rather than navigating to the
Inquiry page. Add a button on the Account record page and make it easier for the sales representatives
to get a better context of the healthcare professional while creating the inquiry.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:256 -->




USER PERMISSIONS NEEDED

To configure action buttons:                         Life Sciences Commercial Admin permission set


1. From Setup, open the Object Manager, and go to the Account object.
2. Click Buttons, Links, and Actions.
3. Create the action button.
a. Click New Action.
b. For Action Type, select Lightning Component, and then select lsc4ce:CreateNewInquiry as the
lightning component.
c. Enter a label, name, and description for the action. We recommend naming the action button New
Inquiry.
d. Save your changes.
4. Add the action to the layout.
a. Go to Page Layouts, and select the appropriate layout for the Account record page.
b. Click Edit, and select Mobile and Lightning Experience Actions.
c. Drag the New Inquiry action to the Salesforce Mobile and Lightning Experience Actions section.
d. Save your changes.

Depending on your business needs, you can also add a New Inquiry action button to the Visit record
page using these steps.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Configure Support Process and Record Types for the Medical Inquiry
Workflow

Create support process and record types for the objects used in the medical inquiry workflow. Assign
profiles and page layouts to the record types to determine which one apply when users create, edit, or
view records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up record types and support processes:        Life Sciences Commercial Admin permission set


1. To configure a tailored workflow with specific stages, create a support process for medical inquiries.

<!-- page:257 -->



a. From Setup, in the Quick Find box, enter and select Support Processes.
b. Click New.
c. From Existing Support Process, select Master.
d. Enter a name and description for the support process, and save your changes.
e. Select the Draft, Signed, Submitted, Assigned, and Responded case statuses.
f. Save your changes.
2. For the Case object, create a record type based on the support process that you created. We
recommend naming the record type Medical Inquiry.
3. For the Inquiry object, create a record type. We recommend naming the record type Medical
Inquiry.
4. Assign record type to profiles.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Define Sharing Settings for Medical Inquiries

Promote effective management of medical inquiries by configuring sharing settings for the Inquiry
Question object. This configuration makes sure that the inquiry question and its associated parent case
have the same sharing settings.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create sharing settings:
Life Sciences Commercial Admin permission set

OR

Manage Sharing


1.    From Setup, in the Quick Find box, enter and select Sharing Settings.
2.    In the Organization-Wide Defaults section, click Edit.
3.    For the Inquiry Question object, set the default internal and external access to Controlled by Parent.
4.    Save your changes.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry

<!-- page:258 -->




Create a Custom Field for Medical Inquiries

Set up a formula-derived custom field on the Inquiry object to capture your unique business data for
medical inquiries. The field helps to achieve conditional display of action buttons based on the user
profile or persona. This configuration promotes a seamless workflow by ensuring that sales
representatives can only draft, sign, and submit medical inquiries whereas medical science liaisons can
only assign and respond to the inquiries.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a custom field:
Life Sciences Commercial Admin permission set

OR

Customize Application


1.    From Setup, go to Object Manager, and select Inquiry.
2.    Go to Fields & Relationships and click New.
3.    Select Formula and click Next.
4.    Enter a name for the field, such as IsCreatorOrResponder.
5. Select Text and click Next.
6. In the Simple formula section, enter a formula to assign text to the field based on the user profile.
This example shows how to assign text for each profile.

IF($Profile.Name = '<Enter the profile name of Medical Science Liaison>',
'<Text1>', IF($Profile.Name = '<Enter the profile name of Sales representati
ve>', '<Text2>', ''))


You can replace “Medical Science Liaison” and “Sales Representative” for “Text1” and “Text2.”
7. Click Next.
8. Complete the custom field setup and save your changes.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry

<!-- page:259 -->




Set Up Workflow Actions for Medical Inquiry Management

Define relevant workflow actions for tasks that users must perform in the medical inquiry process, such
as inquiry submission, assignment, and more. With the help of workflow actions, you can show
contextual action buttons on the Inquiry record detail page depending on the current stage of the
inquiry workflow. For example, the Submit button appears when the inquiry is ready to be submitted by
the sales representative.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up workflow actions:                          Life Sciences Commercial Admin permission set


Prerequisite: Create a compliance statement definition record. Select Statement Type as Disclaimer and
Module Type as Medical Inquiry. Add the disclaimer text in Statement Text.

1.    From the App Launcher, find and select Admin Console.
2.    Select Workflow Configuration, and then select Workflow Actions.
3.    On the Workflow Actions page, click New and select Update Record.
4.    Create action buttons for submission, assignment, and response using these details.

Submission Action         Assignment Action         Response Action

Action Name                 Submit Medical Inquiry Assign Medical Inquiry       Respond to Medical
Inquiry

Button Label                Submit                    Assign to Me              Move Status to
Responded

Object                      Inquiry                   Inquiry                   Inquiry

Field                       Case ID                   Case ID                   Case ID

Parent Record Field         Status                    Status                    Status

New Field Value             Submitted                 Assigned                  Responded

Parameters                  None                      None                      None

5. Save your changes.
6. On the Workflow Actions page, click New and select Open Component.
7. Create component actions for signature, response preference, and response using these details.

<!-- page:260 -->




Signature Action          Response Preference    Response Action
Action

Action Name                   Add Signature             Add Response           Add Response
Preference

Button Label                  Add Signature             Add Response           Add Response
Preference

Object                        Inquiry                   Inquiry                Inquiry

Component Name                lsc4ce:InquirySignature lsc4ce:responsePrefere   lsc4ce:inquiryAnswerM
Modal                   nceSelector              odal

Component                     "status":"Signed","isTopi None                   None
Parameters                    cEnabled":true,
"disclaimerText":"Disclai
mer Text "

8. Save your changes.
9. Click Deploy.
The actions are active, and you can add them to a workflow path.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Set Up the Workflow Stages to Manage Medical Inquiries

Enhance efficiency, maintain compliance, and promote data integrity with configurable workflow paths.
The workflow outlines the journey of an object through various stages and helps you manage the
different statuses, actions, and record permissions. For the medical inquiry process, set up a workflow
path based on the Inquiry object and its different stages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up a workflow path:                              Life Sciences Commercial Admin permission set


To create the workflow, add operations for each stage and define the permissions to create, edit, or
delete records based on the user’s role or context. Associate workflow actions to each operation, and set

<!-- page:261 -->



up conditions that must be met to grant permissions and enable actions. The validations help control the
visibility of responses, records, and fields.

Prerequisite: Configure the required workflow actions for the medical inquiry process.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Create a Workflow Path

1.    From the App Launcher, find and select Admin Console.
2.    Select Workflow Configuration.
3.    On the Workflow Paths screen, click New, and enter a name for the medical inquiry workflow.
4.    From the Object API Name list, select Inquiry
5. From the Field API Name list, select Status.
6. Click Continue.


Set Up the Draft Status Stage

1. On the workflow screen, from the workflow path, select Draft.
2. Under Stage Operations, click       and enter a name for the operation. We recommend using Medical
Inquiry Draft.
3. Select Create, Edit, and Delete.
4. Set the priority to 1, and save your changes.
5. Add actions to the stage operation.
a. Under Stage Operation Actions, click Add Actions and select Open Component.
b. Select the Add Signature and Add Response Preference actions.
c. Save your changes.
6. On the Stage Operation Conditions tab, add a condition with these values, if necessary.
a. For Field, enter the name of the formula field you created earlier.
b. For Operator, enter Equals.
c. For Value, enter the text that you configured as Text2 in the formula field.
d. Save your changes.
7. Under Other Permissions, select Salesforce Files, and then select Create, Edit, and Delete.
8. Create a child stage operation for managing inquiry questions.
a. Next to the Medical Inquiry Draft operation, click   , and enter a name for the operation.
b. For the object, select InquiryQuestion, and select Create, Edit, and Delete.
c. Set the priority to 1, and save your changes.
9. Create a child stage operation for managing subject assignments.
a. Next to the Medical Inquiry Draft operation, click  , and enter a name for the operation.
b. For the object, select SubjectAssignment, and select Create, Edit, and Delete.
c. Set the priority to 2, and save your changes.

<!-- page:262 -->




Set Up the Signed Status Stage

1. On the workflow screen, from the workflow path, select Signed.
2. Under Stage Operations, click       and enter a name for the operation. We recommend using Medical
Inquiry Signed.
3. Set the priority to 1, and save your changes.
4. Add actions to the stage operation.
a. Under Stage Operation Actions, click Add Actions and select Update Record.
b. Select the Submit Medical Inquiry action.
c. Save your changes.
5. On the Stage Operation Conditions tab, add a condition with these values.
a. For Field, enter the name of the formula field you created earlier.
b. For Operator, enter Equals.
c. For Value, enter the text that you configured as Text2 in the formula field.
d. Save your changes.
6. Under Other Permissions, select Salesforce Files.
Don’t select Create, Edit, or Delete.
7. Create a child stage operation for managing inquiry questions.
a. Next to the Medical Inquiry Signed operation, click    , and enter a name for the operation.
b. For the object, select InquiryQuestion.
Don’t select Create, Edit, or Delete.
c. Set the priority to 1, and save your changes.
8. Create a child stage operation for managing subject assignments.
a. Next to the Medical Inquiry Signed operation, click      , and enter a name for the operation.
b. For the object, select SubjectAssignment.
Don’t select Create, Edit, or Delete.
c. Set the priority to 2, and save your changes.


Set Up the Submitted Status Stage

1. On the workflow screen, from the workflow path, select Submitted.
2. Under Stage Operations, click       and enter a name for the operation. We recommend using Medical
Inquiry Submitted.
3. Set the priority to 1, and save your changes.
4. Add actions to the stage operation.
a. Under Stage Operation Actions, click Add Actions and select Update Record.
b. Select the Assign Medical Inquiry action.
c. Save your changes.
5. On the Stage Operation Conditions tab, add a condition with these values.
a. For Field, enter the name of the formula field you created earlier.
b. For Operator, enter Equals.
c. For Value, enter the text that you configured as Text1 in the formula field.
d. Save your changes.
6. Under Other Permissions, select Salesforce Files.

<!-- page:263 -->



Don’t select Create, Edit, or Delete.
7. Create a child stage operation for managing inquiry questions.
a. Next to the Medical Inquiry Submitted operation, click   , and enter a name for the operation.
b. For the object, select InquiryQuestion.
Don’t select Create, Edit, or Delete.
c. Set the priority to 1, and save your changes.
8. Create a child stage operation for managing subject assignments.
a. Next to the Medical Inquiry Submitted operation, click      , and enter a name for the operation.
b. For the object, select SubjectAssignment.
Don’t select Create, Edit, or Delete.
c. Set the priority to 2, and save your changes.


Set Up the Assigned Status Stage

1. On the workflow screen, from the workflow path, select Assigned.
2. Under Stage Operations, click       and enter a name for the operation. We recommend using Medical
Inquiry Assigned.
3. Set the priority to 1, and save your changes.
4. Add actions to the stage operation.
a. Under Stage Operation Actions, click Add Actions and select Update Record.
b. Select the Respond to Medical Inquiry action.
c. Save your changes.
d. Under Stage Operation Actions, click Add Actions and select Open Component.
e. Select the Add Response action that you created earlier.
f. Save your changes.
5. On the Stage Operation Conditions tab, add a condition with these values.
a. For Field, enter the name of the formula field you created earlier.
b. For Operator, enter Equals.
c. For Value, enter the text that you configured as Text1 in the formula field.
d. Save your changes.
6. Under Other Permissions, select Salesforce Files.
Don’t select Create, Edit, or Delete.
7. Create a child stage operation for managing inquiry questions.
a. Next to the Medical Inquiry Assigned operation, click   , and enter a name for the operation.
b. For the object, select InquiryQuestion.
Don’t select Create, Edit, or Delete.
c. Set the priority to 1, and save your changes.
8. Create a child stage operation for managing subject assignments.
a. Next to the Medical Inquiry Assigned operation, click      , and enter a name for the operation.
b. For the object, select SubjectAssignment.
Don’t select Create, Edit, or Delete.
c. Set the priority to 2, and save your changes.

<!-- page:264 -->




Set Up the Responded Status Stage

1. On the workflow screen, from the workflow path, select Responded.
2. Under Stage Operations, click       and enter a name for the operation. We recommend using Medical
Inquiry Responded.
3. Set the priority to 1, and save your changes.
4. Create a child stage operation for managing inquiry questions.
a. Next to the Medical Inquiry Responded operation, click    , and enter a name for the operation.
b. For the object, select InquiryQuestion.
Don’t select Create, Edit, or Delete.
c. Set the priority to 1, and save your changes.
5. Create a child stage operation for managing subject assignments.
a. Next to the Medical Inquiry Responded operation, click        , and enter a name for the operation.
b. For the object, select SubjectAssignment.
Don’t select Create, Edit, or Delete.
c. Set the priority to 2, and save your changes.


Activate the Workflow

1. On the workflow screen, click Activate.
2. Save your changes.
The medical inquiry workflow is ready for use to manage inquiries.

Depending on your business needs, configure custom scripts and associate the scripts with the workflow.

- Set up validation scripts to run each time a user performs an action and to prevent incorrect actions or
alert users about errors.
- Set up checklist scripts to show an information icon for users to see the next steps to take.

Batch Jobs for Medical Inquiries

Batch jobs are automated processes designed to share and manage multiple medical inquiry records
consistently and efficiently. Save time, reduce the risk of manual errors, and maintain the integrity and
reliability of inquiry data by using the MIRF Share Management job.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You can find the job under Territories in the Admin Console. Depending on your business needs, you can
either trigger the job immediately or schedule it for later. For more information on how to run or

<!-- page:265 -->



schedule a job, see Run Batch Jobs.


Job NAME                                             Description


## Shares all inquiry records within a territory to all

MIRF Share Management                                sales representatives under that territory. Run this
job after the Align Account to Territory job.


## See Also

Salesforce Help: Create and Submit a Medical Inquiry
Salesforce Help: Review and Respond to a Medical Inquiry


Medical Insights

Use Medical Insights to provide field teams a structured way to capture and share insights from their
engagements with HCPs and HCOs. Show relevant insight data for collaboration through customized
record pages with specific field sets and related lists. Streamline the user workflow by creating quick
actions and defining granular permissions to control how users interact with insights.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license



## Get Your Org Ready for Medical Insights

Before you set up Medical Insights in the AFLS, make sure that you enable all the
necessary system components and data structures.
Add Medical Insights Tab to App Launcher
Make Medical Insights available to users by adding a tab in the Life Sciences mobile app. This tab
enables users to view their insights as well as insights captured by the same profile within their
territories.
Configure Medical Insights Objects
Configure Medical Insight and Medical Insight Accounts objects by customizing the record page layout
and creating required field sets. This customization makes sure that users see relevant medical insights
data on Account and Visit records.
Customize Medical Insights Record Page
Customize the Medical Insights record page by changing the template and removing the Activity
component to provide a seamless user experience when navigating medical insights.
Customize Account and Visit Record Pages
Add necessary components to capture insights from these Account and Visit record pages.
Configure Insights
Configure the settings in Admin Console to enable users to capture insights, add more details and

<!-- page:266 -->



mandate certain required fields before saving them.
Manage Insights Quick Actions
Configure the quick actions to allow users to capture medical insights directly from the Home,
Account, and Visit pages.


Get Your Org Ready for Medical Insights

Before you set up Medical Insights in the AFLS, make sure that you enable all the
necessary system components and data structures.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To get your org ready for medical insights:          Life Sciences Commercial Admin permission set


- Configure database schema for the supported Medical Insights objects.
- Account
- User
- UserReaction
- MedicalInsight
- MedicalInsightAccount
- MedicalInsightProduct
- Subject
- SubjectAssignment
- Activate the Medical Insights trigger handlers.
- PublishMedicalInsightEventHandler
- RecalculateParentLinkedInsightsHandler
- MedicalInsightSharingHandler
- UserReactionMedicalInsightHandler
- RecalculateInsightTopicNameHandler
- InsightCascadeDeleteTriggerHandler
- TopicValidationHandler
See Also
Salesforce Help: Trigger Handler Administration
Salesforce Help: Create Object Metadata Cache Configuration

<!-- page:267 -->




Add Medical Insights Tab to App Launcher

Make Medical Insights available to users by adding a tab in the Life Sciences mobile app. This tab
enables users to view their insights as well as insights captured by the same profile within their territories.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add medical insights tab to App Launcher:         Life Sciences Commercial Admin permission set


1. From Setup, in the Quick Find box, find and select App Manager.
2. Go to Life Sciences Commercial in the list.
3.    Click the   icon, and select Edit.
4.    Select Navigation Items from the App Settings section.
5.    Find and select Medical Insights from Available Items. Move it to Selected Items.
6.    Save your changes.


Configure Medical Insights Objects

Configure Medical Insight and Medical Insight Accounts objects by customizing the record page layout
and creating required field sets. This customization makes sure that users see relevant medical insights
data on Account and Visit records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure medical insights objects:               Life Sciences Commercial Admin permission set


1. From Setup, go to Object Manager.
2. In the Medical Insight object, find and select Page Layout.
a. Select medical insight layout from the list.
b. Select and drag Medical Insight Accounts, Medical Insight Products, Subject Assignments and User

<!-- page:268 -->



Reactions from the component palette onto the record page’s Related Lists section.
3. Select Field Sets to create a field set linking visits and medical insights.
a. Enter VisitInsightsRLFieldSet as the label.
b. Drag and drop Name, Source Type and Content into the field set.
c. Save your changes.
4. Repeat the above step for the Medical Insight Accounts object to create a field set linking accounts
and medical insights. However, enter AccountInsightsRLFieldSet as the label and drag Name, Medical
Insight and Reason Type into the field set.


Customize Medical Insights Record Page

Customize the Medical Insights record page by changing the template and removing the Activity
component to provide a seamless user experience when navigating medical insights.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To customize medical insights record page:           Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Medical Insights.
2. Select a record from the list.
3. Click the    icon, and then select Edit Page.
4. To change the template, select the current page template and click the Change button next to the
Template value.
a. Select Header and One Region template.
b. Click Next and then Done.
5. To remove the Activity component, select the component and click the     icon on the component's
upper right corner.
6. Save your changes.
7. If prompted, activate the updated record page.
a. Assign the page to apps, record types and profiles.
b. Select Life Sciences Commercial for app and desktop and phone for the app’s form factors.
c. Select master record type.
d. Select system administrator and medical sales representative profiles.
e. Review the assignments and save.

<!-- page:269 -->




Customize Account and Visit Record Pages

Add necessary components to capture insights from these Account and Visit record pages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To customize account and visit record pages:         Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Accounts tab in the Life Sciences Commercial app.
2. Select a record from the list.
3. Click the     icon, and then select Edit Page.
4. Select the Related tab on the page canvas.
5. Add the list component to the tab.
a. Select Related List — Life Sciences in the left component panel.
b. Drag and drop it into the Related List tab.
6. Configure the component by selecting it and entering the following values in the right panel.
- Object API Name: MedicalInsightAccount
- Field Set API Name: AccountInsightsRLFieldSet
- Label API Name: Medical Insights
- Where Clause: MedicalInsightAccount.AccountId = '{recordId}'
Clear the value in New Action Handler API Name field and select the show record count check box.
7. Save your changes.
8. If prompted, activate the updated record page.
a. Assign the page to Life Sciences Commercial App for Desktop and Phone for relevant profiles and
record types.
b. Review the assignments and save.
9. Repeat the above steps for Visits tab. However, enter the following values for configuring the
component.
- Object API Name: MedicalInsight
- Field Set API Name: VisitInsightsRLFieldSet
- Label API Name: Medical Insights
- Where Clause: MedicalInsight.VisitId = '{recordId}'

Configure Insights

Configure the settings in Admin Console to enable users to capture insights, add more details and
mandate certain required fields before saving them.

<!-- page:270 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure medical insights:                       Life Sciences Commercial Admin permission set


1.    From App Launcher, find and select Admin Console.
2.    Select Insights and then select Insight Settings.
3.    Apply settings to the required profile selected from the drop down.
4.    Configure the required permissions by selecting the check boxes.
a. Enable users to capture insights from the account page using a button.
b. Add the associated product to an insight. Hide an insight’s associated account and tag when
displaying the details of an insight.
c. Make sure that users can save insights only if they add details like account, product and tag.


Manage Insights Quick Actions

Configure the quick actions to allow users to capture medical insights directly from the Home, Account,
and Visit pages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage insights quick actions:                    Life Sciences Commercial Admin permission set


1. From App Launcher, find and select Admin Console.
2. Select Quick and Custom Action Administration and then select Quick Actions.
3. To create a quick action, click New.
a. Add details like name and label.
b. Select Create Medical insights from the action name drop down.
c. For Sort Order, enter a suitable number to manage the order of displaying quick actions.
d. For Profiles, select System Administrator and Medical Sales Representative from Available and move
them to Chosen.

<!-- page:271 -->



4. Add the quick action to various touch points.
a. To capture insights from the Home page, select it as the location.
Restrict capturing insights to the mobile app by selecting the mobile only check box.
b. To capture insights from an Account record page and the custom Visits page, select Search for the
location and Account from the SObject drop down.
c. To capture insights from the standard Visit Record Page, select Visit for the location and SObject
drop down.


Remote Engagement

Remote engagement facilitates virtual meetings by providing tools to start and manage remote visits with
healthcare professionals. When users schedule remote visits, healthcare professionals receive invitations
with the necessary details such as the meeting link and passcode. During the meeting, users can manage
participants, share screens, and end the session, streamlining virtual interactions and eliminating the
need for in-person visits.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Remote Engagement Permissions

Discover the permissions used to provide access to remote engagement capabilities within Life
Sciences for Customer Engagement.
Set Up Remote Engagement
Configure video call settings, add phone numbers, and define terms and conditions. Set up remote
engagement trigger handlers to generate session keys and passcodes and send invitation emails.
Update external credential details and add authentication parameters for video call connections. Add
Twilio WSS endpoints as trusted URLs and set up Experience Cloud sites for customer access to
remote engagement visits.
Mobile Configuration for Remote Engagement
Set up object metadata cache configurations for Life Sciences remote engagement objects. Generate
a metadata cache to package the object schema configuration that the AFLS mobile
app uses for online and offline access. This configuration defines how the mobile app fetches and
stores the necessary metadata when a network connection is unavailable.


Remote Engagement Permissions

Discover the permissions used to provide access to remote engagement capabilities within Life Sciences
for Customer Engagement.

<!-- page:272 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Org Permissions

Permission                          Type                              Description

Life Sciences: Remote               Permission                        Makes the Remote Engagement
engagement                                                            feature and its objects available.


User Permissions

Permission                          Type                              Purpose

Use Life Sciences Remote            Permission                        Provides access to the Remote
Engagement                                                            Engagement feature and its
objects.

Life Sciences Commercial Admin      Permission set                    Admin users can create and
manage settings for remote
engagement.

Access Remote Engagement for        Permission set                    Provides access to remote
Digital Experience                                                    engagement features in digital
experiences.


Set Up Remote Engagement

Configure video call settings, add phone numbers, and define terms and conditions. Set up remote
engagement trigger handlers to generate session keys and passcodes and send invitation emails. Update
external credential details and add authentication parameters for video call connections. Add Twilio WSS
endpoints as trusted URLs and set up Experience Cloud sites for customer access to remote engagement
visits.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:273 -->




package.


1. Create a Remote Engagement Channel Value
To represent a remote visit conducted via video call, add a new value to the Channel field on the Visit
object. This field is a dynamic enum and is used by the application to determine the visit
communication type. The new channel value is used to configure video call settings.
2. Set Up Experience Cloud Sites for Remote Engagement
Set up a customer portal for your Salesforce org so attendees can join video calls. To support portal
access, create a profile and add it as a member to the portal. Grant users access by using the Access
Remote Engagement for Digital Experience permission set.
3. Set Up Twilio for Remote Engagement
The Life Sciences Customer Engagement managed package includes named and external credentials
for the Twilio account. Finish setting up the account by updating the external credential details. Make
sure that participants can connect to the video call by adding Twilio WSS endpoints as trusted URLs in
your Salesforce org. Use the Admin Console to define video call settings and add phone numbers.
4. Remote Engagement Admin Console Settings
Enable remote engagement trigger handlers to generate session keys and passcodes. Set up email
templates to send invitation emails to attendees. Add a quick action to support ad hoc remote
sessions for accounts.
5. Configure Video Call Terms and Conditions
Add terms and conditions that participants see and must accept upon joining a video call.
6. Add the Video Call Recordings List to the Visit Page
To make video call recordings for visits available to your users, add a related list to the visit record page.


Create a Remote Engagement Channel Value

To represent a remote visit conducted via video call, add a new value to the Channel field on the Visit
object. This field is a dynamic enum and is used by the application to determine the visit communication
type. The new channel value is used to configure video call settings.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create field picklist values:                        Customize Application


1. In Object Manager, find and select Visit.
2. Select Fields & Relationships, and then select Channel.
3. In the Channel Picklist Values section, select New.

<!-- page:274 -->



4. Enter a value for the option. For example, Video Call or Remote.
5. Save the picklist value.


Set Up Experience Cloud Sites for Remote Engagement

Set up a customer portal for your Salesforce org so attendees can join video calls. To support portal
access, create a profile and add it as a member to the portal. Grant users access by using the Access
Remote Engagement for Digital Experience permission set.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Create an Experience Cloud Site for Remote Engagement

To support attendees joining a video call remote session via the Experience Cloud site, configure the
site.
Grant Accounts Access to Your Experience Cloud Site
To give users access to your customer portal for remote engagement or presentations, create a profile
and add it as a member to your Experience Cloud site. If you skip these steps, healthcare professionals
(HCPs) can still join remote sessions or view presentations as guest users.


Create an Experience Cloud Site for Remote Engagement

To support attendees joining a video call remote session via the Experience Cloud site, configure the site.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create an Experience Cloud site:
Create and Set Up Experiences

AND

Setup and Configuration

<!-- page:275 -->




USER PERMISSIONS NEEDED

To customize or publish an Experience Cloud site:
Create and Set Up Experiences AND View Setup
and Configuration AND be a member of the site

OR


## View Setup and Configuration AND be a member

of the site AND have appropriate role-based site
access

To assign Permission sets:                            Manage Profiles and Permission Sets


Before you create an Experience Cloud site, configure Twilio credentials and enable digital experiences.

1. Create an Experience Cloud site by using an Aura Template.
If you already created an Experience Cloud site for the presentation player, you can add new pages to
that site instead.
2. From Builder, create a page for the video call.
3. Select Components and then drag the HCP Remote Platform Conference component onto the page.
The HCP Remote Platform Conference component is under Custom Components. You can also find it
through the search bar.
4. For language support, select Components and drag the Language Selector component onto the
page.
5. To support viewing video call recordings, create a video call player page.
a. Select Components and then drag the recordingPlayer component onto the page.
b. From Setup, in the Quick Find box, search for and select Trusted URLs.
c. Select New Trusted URL.
d. Enter an API name and in the URL field enter https://*.amazonaws.com.
e. Select Active.
f. Set the CSP Context to All, and then select media-src (audio and video).
g. Save your changes.
6. In Properties, set Page Access to Public.
7. Publish the site.
8. Assign these permission sets to the guest user of the site.
- Access Remote Engagement for Digital Experience
- The permission set created in Configure Twilio Credentials
9. Activate the site.

Tip Take note of the video call page URL. You need it when you configure video call settings. You
can view the URL of the published page in the Builder’s general settings for the page.



## See Also

Customize Sites with Experience Builder
Manage Your Site's Pages and Their Properties in Experience Builder

<!-- page:276 -->



Grant Accounts Access to Your Experience Cloud Site

To give users access to your customer portal for remote engagement or presentations, create a profile
and add it as a member to your Experience Cloud site. If you skip these steps, healthcare professionals
(HCPs) can still join remote sessions or view presentations as guest users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create of edit profiles:                          Manage Profiles and Permission Sets


## To create an Experience Cloud Site

Create and Set Up Experiences

AND

Setup and Configuration


If you have one Experience Cloud site for remote engagements and for healthcare professionals (HCPs)
to view presentations, you only need to perform these steps one time.

1. Create a profile.
a. Clone a standard external profile like Customer Community Plus User or Customer Community Plus
Login User.
b. Name the new profile HCP User.
c. Save the profile.
2. Add the profile to the Experience Cloud site.
a. From Setup, in the Quick Find box, search for and select Feature Settings.
b. Go to Digital Experiences and select All Sites.
c. For your site, select Workspaces.
d. Select the Administration tile, then select Members.
e. In Select Profiles, use Customer in search to narrow results.
f. Add the profile that you created earlier to Selected Profiles.
g. Save the changes.


Set Up Twilio for Remote Engagement

The Life Sciences Customer Engagement managed package includes named and external credentials for
the Twilio account. Finish setting up the account by updating the external credential details. Make sure
that participants can connect to the video call by adding Twilio WSS endpoints as trusted URLs in your

<!-- page:277 -->



Salesforce org. Use the Admin Console to define video call settings and add phone numbers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Configure Twilio Credentials

Twilio's named and external credentials are delivered in the AFLS for Customer
Engagement managed package. To finalize the setup, add authentication parameters such as the
Twilio account ID, authorization token, API key, and secrets.
Assign Trusted Twilio URLs
To support attendees connecting to the video call, add Twilio WSS endpoints as trusted URLs in your
Salesforce org.
Configure Video Call Settings with Twilio
To support remote sessions with Twilio, configure video call settings in the Admin Console. These
settings help you define and manage specific details about how your users access and interact with
remote sessions.
Add Video Call Phone Numbers for Twilio
To allow remote users to join meetings from their phones, define dial-in options for Twilio.


Configure Twilio Credentials

Twilio's named and external credentials are delivered in the AFLS for Customer
Engagement managed package. To finalize the setup, add authentication parameters such as the Twilio
account ID, authorization token, API key, and secrets.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create, edit, or delete external credentials:      Manage Named Credentials or Customize
Application


1. From Setup, in the Quick Find box, search for and select Named Credentials.
2. Select External Credentials, and then select Twilio External Credentials.

<!-- page:278 -->



3. In the Principals section, edit the Twilio credentials.
4. In the Authentication Parameters section, add these parameters.

Parameter Name                                       Parameter Value

accountId                                           Enter the Twilio account ID (Account SID).

authToken                                           Enter the Twilio authorization token (Auth
Token).

apiKey                                              Enter the Twilio API key.

secret                                              Enter the Twilio API secret.

awsAccessKeyId                                      Enter the aws s3 access key for reading the
recording files.

awsSecret                                           Enter the aws s3 secret for reading the recording
files.


Note The awsAccessKeyId and awsSecret are required only if Twilio compositions are configured
to be stored on an external s3 bucket. If you use the s3 bucket, the policy for the access key
requires read access to recording files.

5. Save your work.
6. Create a permission set that provides access to Twilio credentials.
a. Create a permission set.
b. Select External Credential Principal Access, and then select Edit.
c. Move twilioExternalCredential - Twilio Credentials from Available External Credential Principals to
Enabled External Credential Principals, and then select Save.
d. Select Permission Set Overview, and then select Object Settings.
e. Select User External Credentials, and then select Edit.
f. Turn on Read permissions, and then save your work.
g. Assign the permission set to users who work with video calls.

See Also
Named Credentials
Create Permission Sets


Assign Trusted Twilio URLs

To support attendees connecting to the video call, add Twilio WSS endpoints as trusted URLs in your
Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:279 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create, read, update, and delete trusted URLs:
Customize Application

AND

Modify All Data


1. From Setup, in the Quick Find box, enter Trusted URLs, then select Trusted URLs.
2. Select New Trusted URL.
3. Enter an API name, set the URL to wss://global.vss.twilio.com, and verify that the URL is set to
Active.
4. Set the CSP Context to Experience Builder Sites, and set the CSP Directive to connect-src (scripts).
5. Select Save & New.
6. Similarly, add wss://sdkgw.us1.twilio.com as a trusted URL.
7. Save your work.

See Also
Manage Trusted URLs


Configure Video Call Settings with Twilio

To support remote sessions with Twilio, configure video call settings in the Admin Console. These settings
help you define and manage specific details about how your users access and interact with remote
sessions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage video call settings                         Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Remote Engagement, and then select Twilio Settings.
3. Set the required video call fields.

<!-- page:280 -->




Field                                                  Value

Remote Visit Channel                                   Select the value added in Create a Remote
Engagement Channel Value.

Video Call Link                                        Enter the URL of the video call Experience Cloud
site page created in Create an Experience Cloud
Site for Remote Engagement.

4. To include a link to your organization's general video call scheduling location, enter it in the Customer
Video Call Link field.
5. Configure the settings for meeting invitations and messaging to meet your business needs.
- Send invitations with WhatsApp: The host can send invitations through their WhatsApp account
from the remote player.
- Don’t send invitations for ad-hoc visits: Prevent sending invitations for spontaneous (ad hoc) visits.
- Don’t send invitations for past visits: Prevent sending invitations for visits scheduled in the past.
6. Configure the settings for the video call experience based on your business needs.

Note You can set these attendee settings only at the org level or guest user profile level.

- Attendees can share their screens
- Hosts can record video calls
- Attendees’ microphone on by default: Automatically turn on the participant’s microphone when
they join the remote session.
- Attendees’ cameras on by default: Automatically turn on the participant’s camera when they join
the remote session.
- Use unsupported browsers: Unsupported browsers can still join remote sessions.
7. Configure the settings to capture signatures or consent from attendees during the session.
If needed, set up confirmation emails to send personalized follow-ups after capturing HCP consent
preferences or signatures.
- Remote signatures: Hosts can trigger remote requests during the session to capture signatures for
direct-to-practitioner products, samples, or product discussions.
- Remote consent: Capture consent remotely during video calls.
8. Save the video call settings.


## See Also

Configure a Custom Domain for Your Experience Cloud Site


Add Video Call Phone Numbers for Twilio

To allow remote users to join meetings from their phones, define dial-in options for Twilio.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:281 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage video call phone numbers:                  Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2.    Select Remote Engagement, and then select Twilio Dial-In Settings.
3.    Select New.
4.    Enter a name, country, and the phone number for dial-in users.

Note Make sure that you enter the phone number exactly as it appears in Twilio, including the
country code. For example, for a phone number with the country code "1" format it as:
+17775555454.
5. If applicable, select Toll Free.
6. If needed, enter messages to show to participants. All messages support speech-to-text.
- Welcome Message
- Error Message
- Timeout Message
- Room Not Started Message
7. Save your work.
8. Select Activate from the dropdown for the dial-in setting.


Remote Engagement Admin Console Settings

Enable remote engagement trigger handlers to generate session keys and passcodes. Set up email
templates to send invitation emails to attendees. Add a quick action to support ad hoc remote sessions
for accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Set Up Remote Engagement Trigger Handlers

To generate session keys and passcodes and send invitation emails to attendees, use remote
engagement trigger handlers.
Set Up Invitation Emails
Automatically send invitation emails to attendees when a planned visit record is created. Send
additional emails notifying attendees of any changes to the visit.
Set Up Remote Signatures

<!-- page:282 -->



Enable your field reps to capture signatures from healthcare professionals (HCPs) during remote visits.
Hosts can trigger requests to capture signatures for direct-to-practitioner products, samples, product
discussions, or consent.
Manage the Start Remote Session Quick Action
To support starting ad-hoc remote sessions from account records, configure the Start Remote Session
action.


Set Up Remote Engagement Trigger Handlers

To generate session keys and passcodes and send invitation emails to attendees, use remote
engagement trigger handlers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage trigger handlers:                          Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console
2. Select Trigger Handler Administration.
3. Turn on these trigger handlers:

Trigger Handler Name                                 Object

RemoteSessionInvitationPVHandler                     Provider Visit

RemoteSessionInvitationVisitHandler                  Visit


Set Up Invitation Emails

Automatically send invitation emails to attendees when a planned visit record is created. Send additional
emails notifying attendees of any changes to the visit.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:283 -->




USER PERMISSIONS NEEDED

To create, edit, and delete email templates:         Life Sciences Commercial Admin permission set


Create an email template. You can include information about the video call invitation URL
{{remotesession.url}} , the phone access number
{{remotesession.phoneNumbersForEmail}} in the email template body. You can also include the
phone access number {{remotesession.phoneNumbersForICS}} in the iCalendar description.
Here’s an example of an invitation email template that includes the URL and phone number:


Dear {{recipient.firstname}} {{recipient.lastname}},


{{sender.name}} scheduled a call with you on {{visit.PlannedVisitStartTim
e}}.


You can access it using the link: {{remotesession.url}}


Alternatively, you can dial in to the call: {{remotesession.phoneNumbersF
orEmail}}.
Thank you,
{{sender.name}}



When you attach iCalendar files to email templates, the email invitations use the Life Sciences email
address for RSVPs. After recipients accept or reject invitations, responses are sent to the RSVP address,
and the response status is updated on the related Life Sciences Email records.

1. Make sure that your org uses the Life Sciences RSVP email address.
a. From Setup, in the Quick Find box, find and select Life Sciences for Customer Engagement Setup.
b. Verify that the RSVP email address is turned on.
2. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
3. Select Email, and then Email Templates.
4. Select New Email Template.
5. Upload a ZIP file of the email template.
6. Enter a subject, name, effective start and end dates, and these additional values.

Field                                                  Value

Automated Email Invitation Context                     Provider Visit

Automated Email Invitation Action                      Create

Template for automated emails                          Selected

Attach iCalendar file                                  Selected

iCalendar Description                                  Enter a description to include in the iCalendar

<!-- page:284 -->




Field                                                 Value

attachment.

7.    Select Upload and Save.
8.    In the list view, select the template you created, and then select Edit.
9.    Align the email template to the territories of the users associated with the template.
10.    Save and activate the template.
11.    Similarly, create two more templates for the Update and Cancel automated email invitation action
types.


## See Also

Upload and Create Email Templates


Set Up Remote Signatures

Enable your field reps to capture signatures from healthcare professionals (HCPs) during remote visits.
Hosts can trigger requests to capture signatures for direct-to-practitioner products, samples, product
discussions, or consent.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create, edit, and delete email templates:         Life Sciences Commercial Admin permission set


With remote signatures for products, meeting hosts can capture electronic signatures for the direct-to-
practitioner products, samples, or product discussions that are added to the visit. When sales reps
request signatures during the remote session, HCPs can review the added products and sign directly in
their browser window.

With remote signatures for consent, sales reps can access the consent page and request signatures
during remote sessions. HCPs receive notifications in their browser. Then, they can review the consent
topics, opt in or opt out, and provide an electronic signature without leaving the visit.

1. Enable hosts to capture signatures during remote visits.
a. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
b. Select Remote Engagement, and then select Twilio Settings.
c. To enable hosts to capture signatures for direct-to-practitioner products, samples, or product
discussions, select Remote signatures.
Make sure that your org is set up for product management.

<!-- page:285 -->



d. To enable hosts to capture signatures for consent, select Remote consent.
Make sure that your org is set up for consent management.
e. Save your changes.
2. Set the signature requirements for the products that you want to capture signatures for.
a. From the App Launcher, find and select Life Sciences Commercial, and then select Products.
b. Select Product Hierarchy.
c. Select the product that you want to capture signatures for, and then select Edit.
d. Set the Signature Requirement Level to Optional or Mandatory.
If you don’t see the Signature Requirement Level field, add it to the page layout for Life Science
Marketable Product.
e. Save your changes.
3. Make sure that products are assigned to the appropriate territories for your sales reps so that they can
capture signatures for those products.
a. From the App Launcher, find and select Life Sciences Commercial, and then select Products.
b. Select Product Alignment.
c. Verify the territory alignments for your products.
4. If needed, set up confirmation emails to send personalized follow-ups after capturing HCP signatures.


Manage the Start Remote Session Quick Action

To support starting ad-hoc remote sessions from account records, configure the Start Remote Session
action.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage the start remote session quick action:
Life Sciences Commercial Admin permission set

AND

Customize Application


1.    From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2.    Select Quick and Custom Action Administration, and then select Quick Actions.
3.    From the dropdown for the Start Remote Session action, select Edit.
4.    Enter a label and set the location to Search.
5. Enter a value for the sort order and select the profiles and permission sets that can access the quick
action.
6. In the SObject field, select Account.

<!-- page:286 -->



7. (Optional) If you use account record types in your org, select the record types that can use the quick
action.
8. Save your work.


## See Also

Quick and Custom Action Management


Configure Video Call Terms and Conditions

Add terms and conditions that participants see and must accept upon joining a video call.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage video call settings:                       Life Sciences Commercial Admin permission set

To create, edit, or delete library permissions:
Manage Content

OR

Manage Salesforce CRM Content

To create libraries:
Create Libraries

OR

Manage Salesforce CRM Content


Before you configure the video call terms and conditions, create a remote engagement Experience Cloud
site.

1. From Setup, in the Quick Find box, enter CRM content, and then select Salesforce CRM Content.
2. Enable Salesforce CRM.
3. From the App Launcher, find and select Files, and then select Libraries.
4. Create a new library called Terms and Conditions.
5. Open the Terms and Conditions library, and then select Add Files.
6. Upload a file that contains your terms and conditions. To make sure that the file is used for the correct
user language, make sure the filename has the language appended and saved in the .html format. For
example, for US terms and conditions in English, use Terms_en_us.html .

<!-- page:287 -->




Tip To support terms and conditions in multiple languages, make sure that the Language Selector
component is added to the Experience Cloud site and that the additional terms and conditions
files are uploaded to the library.

7.    On the Terms and Conditions library page, select Manage Members.
8.    Grant viewer access to Experience Cloud site users and guest users.
9.    Open your Experience Cloud site in Builder, and then edit the video call page.
10.    Select the HCP Remote Platform Conference component and in the Enter the Terms and Conditions
Base Name field, enter Terms.
11. Save and activate the page.


Add the Video Call Recordings List to the Visit Page

To make video call recordings for visits available to your users, add a related list to the visit record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To edit the visit page layout:
Life Sciences Commercial Admin permission set

AND

Customize Application


1. From the Setup menu on a visit record page, select Edit Page.
2. Drag the Video Call Recording List component to the related lists section of the page.
3. Configure the page properties.
- Enable Play Recording Action: Makes the Play button available for users.
- Enable Refresh Recording Link Action: Supports generating a new link if the current vido call link
expires.
- Enable Copy Recording Link Action: Makes the Copy Link button available to users.
- Enable Toggle Access Action: Makes the Change Recording Access button available to users.
4. Save your work.


Mobile Configuration for Remote Engagement

Set up object metadata cache configurations for Life Sciences remote engagement objects. Generate a
metadata cache to package the object schema configuration that the AFLS mobile app

<!-- page:288 -->



uses for online and offline access. This configuration defines how the mobile app fetches and stores the
necessary metadata when a network connection is unavailable.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up Life Sciences Customer Engagement          Life Sciences Commercial Admin permission set
data:


To set up offline access for the objects that support remote engagement in the AFLS
mobile app, create these object metadata cache configurations. Make sure that you also set up offline
access for other areas of the app, such as visits, presentations, emails, and consent.


Object                                              Type

VideoCall                                           Data

VideoCallParticipant                                Data

VideoCallPtcpSession                                Data

VideoCallRecording                                  Data


Important After you create these configurations, you must generate a metadata cache. This step is
important because it makes sure that the mobile app accesses the latest metadata definitions,
including any schema changes for supported objects.


## See Also

Create Object Metadata Cache Configuration
Generate Metadata Cache


Surveys

Surveys enable you to design and distribute questionnaires to gather structured feedback from
healthcare professionals. Use this data to analyze behavioral trends, monitor patient-related outcomes,
and strengthen provider relationships. These insights support innovation, treatment planning, and
strategic decision-making.

<!-- page:289 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Survey Sharing Strategy

Send surveys to a specific account or territory. Create a record of the Survey Subject object that links your
survey invitation to relevant users or groups.

The SurveyInvitationSharingHandler is a trigger handler on the Survey Subject object. It runs
automatically whenever a new Survey Subject record is created or an existing one is updated. This
trigger's purpose is to automatically create Survey Invitation Share records based on one of three distinct
strategies, which convey the sharing logic.

- - Account-Based Sharing: When you link a Survey Subject record to an account, the trigger handler
automatically creates Survey Invitation Share records for users or territories listed in the related
account's Account Share records. This logic doesn't apply to records where the rowCause field is set
to Owner.
- Life Sciences Marketable Product-Based Sharing: When you link a Survey Subject record to a Life
Sciences Marketable Product, the trigger creates corresponding Survey Invitation Share records for
accounts or territories. The product availability and the alignment type (such as Territory
Subordinates, Territory Inclusion, or Territory Exclusion) is determined based on the Product
Territory Availability object to create these records.
- Territory-Based Sharing: When a Survey Subject record is linked to a territory, the trigger creates
Survey Invitation Share records for that territory and its subordinates.

The Survey Engagement Context and Survey Response Offline objects follow a delegate-sharing model,
where their sharing is delegated to the Survey Invitation object. This behavior is governed by the
LifeSciCustEngmtBase org preference, which, when enabled, activates the delegate sharing mechanism.


Survey Listing Strategy

The SurveyListView Lightning component is used on an account or account plan page to show survey
invitations. This component shows all invitations associated with a specific account or account plan, as
well as those available within a territory. Survey invitations appear to users in two primary ways.

- For a Specific Account: To show invitations for a particular account, create records for the Survey
Invitation, Account, and Survey Subject objects. The Survey Subject record links the account and the
survey invitation.
-    For a Territory: To show invitations available within a territory, create records for the Survey Invitation,
Survey Subject, and Survey Engagement Context objects. The Survey Engagement Context record

<!-- page:290 -->



controls where invitations appear. For example, if you set contextType to Account, invitations show for
all accounts within that territory. For an account plan, set contextType to AccountPlan.

Enable retaking the same survey version, enabling users to retake the survey. The retake link becomes
active when you enable this feature; otherwise, it remains inactive. When users retake a survey, a new
survey invitation and a new survey subject record are created.


How Data Sync Works

When a sales representative submits a survey from a mobile device, the responses are captured in two
objects: Survey Response Offline and Survey Question Response Offline. To ensure that the data is
accessible for reporting and analysis, the responses must sync with the core Salesforce objects: Survey
Response and Survey Question Response.

Set up the sync process by creating a schedule-triggered flow that activates the built-in Sync Survey
Response Offline Records batch job. The batch job syncs 50 records at a time.


## Create a Survey to Collect Targeted Feedback

Design engaging and easy-to-use surveys for users to collect feedback and information from
healthcare professionals. The survey builder provides a simple drag-and-drop interface with eight
different question types to suit your data needs. After you add a question, customize its properties,
reorder it, and specify the valid responses that users can choose from.
Generate a Survey Invitation
To distribute a survey, either target specific accounts or associate the survey with a territory. Based on
your sharing strategy, survey invitation share records are automatically created. You can generate a
survey invitation directly from the survey builder.
Association of a Survey Invitation With an Account or Territory
Create a record of the Survey Subject record using Workbench to associate a survey invitation with a
specific target, such as an account or territory.
Set up a Scheduled Flow to Sync Survey Responses
Sync survey responses to Salesforce objects by using the built-in Sync Survey Response Offline Records
batch job. Create a schedule-triggered flow to invoke this batch job and merge your offline data.
Add a Lightning Component to Show Surveys on a Record Page
Show a list of survey invitations on a record page by adding the built-in SurveyListView Lightning
component. Enable users to retake a survey by making the survey link clickable.
Mobile App Configuration for Surveys
Define the database schema for supported Surveys objects in the Life Sciences for Customer
Engagement mobile app. Generate a metadata cache to package the database schema configuration
into a downloadable metadata cache that the mobile app can use for offline access.
Refresh Survey Sharing Data
Recalculate the survey sharing logic and generate survey invitation records for a specified territory by
triggering a batch job. This batch job recursively retrieves all subordinate territories under the selected
territory, identifies all associated account records for the provider account territory info object, and
then fetches all survey invitation records linked to those accounts.

<!-- page:291 -->




Create a Survey to Collect Targeted Feedback

Design engaging and easy-to-use surveys for users to collect feedback and information from healthcare
professionals. The survey builder provides a simple drag-and-drop interface with eight different question
types to suit your data needs. After you add a question, customize its properties, reorder it, and specify
the valid responses that users can choose from.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Survey features and          Life Sciences Commercial Admin
objects:


Here’s a video of the process to help you get started.

Watch the video: https://salesforce.vidyard.com/watch/2eZzRqE1aZoJUmcPkzTZTi

If you aren’t able to watch the video in full screen mode, open the video on a new tab:       Create a
Survey.

1. From the App Launcher, find and select Admin Console.
2. In the Admin Console, click Surveys.
3. Click New.
4. Enter a survey name.
5. Select the survey type as Offline Mobile Survey.
6. If necessary, use the survey as a template, select Create survey as a template, and then click
Continue.
7. Edit the survey’s Welcome page.
8. In the survey builder, if you want your survey to have multiple pages, click +Add Page.
9. To add a question to the page, click Add Question.
There are a total of eight question types for the Offline Mobile Survey type: Date, Long Text, Multiple
Selection, Picklist, Rating, Short Text, Single Selection, and Slider.
a. Enter your question and, if necessary, a description.
b. If you’ve selected the question type as Multiple Selection, Picklist, or Single Selection, enter a
choice, and to add more choices, click Add Choices.
c. If you’ve selected the question type as Rating, then select the type of rating.
There are five rating types: Star, Static Emoji, Thumbs Up, Heart, and Dynamic Emoji (define the
rating scale).
d. If you’ve selected the question type as Short Text, then select the Response Validation Type: No

<!-- page:292 -->



Validation, Number, or Custom (enter the formula in the custom field).
e. If you’ve selected the question type as Slider, enter a minimum value, interval, and a maximum
value.
f. To reorder questions on a survey page, use the up arrow and down arrow above the rich text editor
of the questions.
g. To change the question’s properties, click the     icon.
10. If necessary, edit the survey’s Thank You page.
11. To pause working on the survey and continue later, click Save.
12. To see the survey as you work on it, click Preview.
13. Activate the survey, then click Got It on the confirmation window.

Create a metadata cache after you create or update a record.


Generate a Survey Invitation

To distribute a survey, either target specific accounts or associate the survey with a territory. Based on
your sharing strategy, survey invitation share records are automatically created. You can generate a survey
invitation directly from the survey builder.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Survey features and          Life Sciences Commercial Admin
objects:


1.    From the App Launcher, find and select Surveys.
2.    Open the survey that you just created or the one that you want to generate an invitation link for.
3.    To create an invitation, on the top navigation bar of the survey builder, click Send.
4.    Click Get Invitation.
A survey invitation record is created.


Association of a Survey Invitation With an Account or Territory

Create a record of the Survey Subject record using Workbench to associate a survey invitation with a
specific target, such as an account or territory.

<!-- page:293 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Use this sample code to create a Survey Subject record.


SurveySubject s = new SurveySubject();
s.ParentId = '0Kixx0000004F5ICAU'; // SurveyInvitationId
s.SubjectId = '001xx000003H8IdAAK'; // accountId
s.Name = 'surveySubject';
insert s;



Set up a Scheduled Flow to Sync Survey Responses

Sync survey responses to Salesforce objects by using the built-in Sync Survey Response Offline Records
batch job. Create a schedule-triggered flow to invoke this batch job and merge your offline data.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Surveys features and         Life Sciences Commercial Admin
objects:


1.    From the App Launcher, find and select Flows.
2.    Click New.
3.    On the New Automation screen, click Scheduled, and then click Schedule-Triggered Flow.
4.    In the flow builder, set a schedule by selecting the start date and time, and if necessary, the frequency.
5.    Add an action element to trigger the batch job.
a. In the Search Actions search bar, find and select the API name
Lsc4ce_surveys__Fetch_Survey_Response_Offline_Batch_Job of Sync Survey Response Offline
Records batch job.
b. Enter a label and an API name.
c. If necessary, enter a description.
d. Save your changes.

<!-- page:294 -->



e. In the Save the Flow window, enter the name of the flow, and if necessary, add a description.
f. Save the flow.
6. Activate the flow.
7. To start the sync process, run the flow.

Verify if sync was successful.

- Check if SurveyResponse and SurveyQuestionResponse records are created.
- Verify that the status of the SurveyResponseOffline record is CompletedAndMigrated.

Add a Lightning Component to Show Surveys on a Record Page

Show a list of survey invitations on a record page by adding the built-in SurveyListView Lightning
component. Enable users to retake a survey by making the survey link clickable.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Survey features and           Life Sciences Commercial Admin
objects:


## To create and save Lightning pages in the             Customize Application

Lightning App Builder:


1. In the Record page that you want to add a Lightning component to, from the Settings Menu, click Edit
Page.
2. From the Components pane, in the Search field, enter SurveyListView and select it.

Note This SurveyListView Lightning component is restricted to Account and Account Plan record
pages.

3. Click and drag the component from the left pane to where you'd like to place it in the right pane.
4. To access the properties pane, click the component that you just added.
a. To enable users to retake the survey, select Let users retake a survey after submitting responses.
b. To auto-populate fields with prior responses when users retake a survey in the AFLS
for Customer Engagement app, select Pre-fill responses from previous survey submission.
5. Save your changes, and then click Activation.
6. In the Activation window, to choose whether you want to Assign or Remove your Salesforce org as
default, follow the prompts. You can also leave it as is.
7. Close the window.

<!-- page:295 -->




Mobile App Configuration for Surveys

Define the database schema for supported Surveys objects in the Life Sciences for Customer
Engagement mobile app. Generate a metadata cache to package the database schema configuration
into a downloadable metadata cache that the mobile app can use for offline access.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Configure the object schema for the supported Survey objects to work on the mobile app. Select the
type as Data.

- Survey
- SurveyVersion
- SurveyPage
- SurveyInvitation
- SurveyQuestion
- SurveyQuestionChoice
- SurveyQstnResponseOffline
- SurveyResponseOffline
- SurveySubject
Configure the database schema for these objects if the user wants to view surveys completed on the web
in mobile as well. Select the type as Data.

- SurveyResponse
- SurveyQuestionResponse
Configure the database schema for these objects if surveys are taken on Account Plan or Provider Visits.
Select the type as Data.

- SurveyEngagementContext
After you create these configurations, to make sure that the app can access the latest metadata
definitions, including any schema changes for supported objects, generate a metadata cache.


Refresh Survey Sharing Data

Recalculate the survey sharing logic and generate survey invitation records for a specified territory by
triggering a batch job. This batch job recursively retrieves all subordinate territories under the selected
territory, identifies all associated account records for the provider account territory info object, and then

<!-- page:296 -->



fetches all survey invitation records linked to those accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Survey features and          Life Sciences Commercial Admin
objects:


1. From the App Launcher, find and select Admin Console.
2. From the Admin Console setup page, click Territory Management.
3. On the navigation bar, select Share Survey.
4. In the Share Survey Setup page, click Run Now.
5. In the Run Share Survey Invitation and Responses, in the Hierarchy field, search for and select a
territory.
6. Click Run.
For each invitation, the batch job determines the relevant territories or accounts associated with the
corresponding accounts, excluding rowCause as owner. It creates survey invitation share records to
associate each identified group or user with the appropriate survey invitation, ensuring that survey
access is correctly propagated based on the account's territorial hierarchy.


Visit Management

Visit Management optimizes the face-to-face visit experience for your field users and clients by
simplifying visit scheduling, planning, visit engagement, and postvisit reporting. Because this reduces
administrative tasks, field users can focus on building strong relationships with healthcare providers.
Engage seamlessly with accounts across all channels by using intelligent content and remote capabilities.
Manage sample distribution and direct-to-practitioner requests confidently with built-in compliance
controls.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Use Visit Management to help your users:

<!-- page:297 -->



- Seamlessly interact with accounts across all channels, leveraging built-in intelligent content and
remote capabilities for enhanced field user engagement.
- Quickly access related features such as Field Emails, Medical Inquiries, and Surveys from a central app,
streamlining their workflow.
-    Confidently manage expense allocations, sample distribution, and shipping requests with built-in rules
for compliance, including limits, license validation, and digital signatures.


Visit Lifecycle

The lifecycle of a visit includes three main stages: Plan, Engage, and Report. Let's dive deeper into the
activities usually performed in each stage.


Plan                                Engage                               Report


- Schedule the visit                    • Share presentation slides          • Update visit information,
- Add attendees                         • Launch remote engagement               product details, discussions,
- Confirm visit objectives                  sessions                             marketing items (leave
- Review last visit details             •   Share product information            behinds)
- Review account summaries                  and messages                     •   Record next visit objectives
- Review recommended                    •   Record sample drops or Direct    •   Add expenses and allocate to
messages and presentations            to Practitioner samples              the attendees
-     Add details to the visit (such    •   Capture signatures               •   (KAM only) Update the status
as presentations and samples)     •   Record survey responses              of the account plan related
-     Add visitors (users)              •   Capture medical inquiries            assessment tasks
-   Schedule next visit              •   Update ratings
-   Send follow-up emails
-   Submit the visit



Visit Pages

Visit pages support users throughout the visit lifecycle. For streamlined user experiences, users interact
with two pages throughout the visit lifecycle:

- Visit Engagement Page (Edit Visit)
- This is the AFLS specific, purpose-built page that helps users plan, engage, and
follow-up on the visit within a single page to complete their visit engagements efficiently and
compliantly, such as sharing approved content, products and messages, and capturing samples.
This page is accessible only for planned visits.
-    Visit Record Page (View Visit)
- This is standard lighting record page to view the visit details and all the relevant activities related to
the visit.
- While the Visit Engagement page focuses on important activities and information you need during a
visit, you can only access and manage some previsit or postvisit activities, such as visitors, expenses,

<!-- page:298 -->



ratings, assessment tasks, and file attachments, on the visit record page.


Visit Data Model

Visit management uses a one-to-one relationship between visit and provider visit records. As a result, for
each visit record created, a corresponding provider visit record is automatically created. Provider Visit is a
AFLS object that is used to extend the standard Visit object. See the Visit Management
data model to learn about these objects and how work together to support visit management.


## Get Your Org Ready for Visit Management

Before you get started with visits in AFLS for Customer Engagement, complete a few
tasks to prepare your org for visit management features.
Visit Management Admin Console
To configure what information fields users can see and how they can interact with and manage visit
records, use the Admin Console.
Next Best Message
Next Best Message provides tailored and relevant messages for each product associated with an
account. These recommendations are dynamically generated based on real-time data, allowing field
sales teams to provide this information during visits with their customers.


Get Your Org Ready for Visit Management

Before you get started with visits in AFLS for Customer Engagement, complete a few tasks
to prepare your org for visit management features.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


- Configure the Visit page layout, and then create a metadata cache to push changes to the mobile app.
Create a metadata cache any time changes are made to the page layout.
-    (Optional) Create record types:
- Account
- Visit
- Provider Visit
- Provider Visit Product Discussion
If you use record types, you must create matching record types for Visit and Provider Visit with
identical API names and labels. Then, add the record type to the Visit page. This links the Visit and
Provider Visit objects to support showing standard and custom Provider Visit fields on the Visit page
layout.

<!-- page:299 -->



Use Provider Visit Product Discussion record types to help field users capture product-specific
information during interactions with healthcare professionals.
-    Configure Next Best Message data. See Next Best Message.
-    Configure visit management settings in the Life Sciences Customer Engagement Admin Console. After
you’ve configured the settings, create a metadata cache to make your changes available for users in
the mobile app.
-    (Optional) Override record type selection options for visits and provider visits. If you use the web
version of visit management and you also use record types for Visit and Provider Visit, configure the
New button that is shown on the home and list view pages.

Important You must configure the New button for both Visit and Provider Visit.

- Configure the Visit page layout, and then create a metadata cache to push changes to the mobile app.
Create a metadata cache any time changes are made to the page layout.


When to Create a Metadata Cache

A metadata cache takes the changes you make, and makes them available for your users. However, not
every type of change requires a new metadata cache. Let’s take a closer look at what types of changes
require a metadata cache:


Type                         Visit Engagement Page                       Visit Record Page

Web                 Mobile              Web                  Mobile

Page Layout           Yes                 Yes                 No                   Yes

Record Page           Yes                 Yes                 No                   Yes

Admin Console         No                  Yes                 No                   Yes
Settings

Object                Yes                 Yes                 No                   Yes
Configuration
(Field Sets, Record
Types, Picklist
Values)

Translation           Yes                 Yes                 No                   Yes
(Custom Labels,
Object and Field
Labels)

Data Setup            No                  No                  No                   No



## Configure the Visit Engagement Page

To customize visit details and improve user efficiency, configure page layout and sidebar menu
options. You control which fields and sidebar options appear, so your team can access the information
they need to conduct effective visits.

<!-- page:300 -->




## Mobile App Configuration for Visit Management

Configure the object schema for supported Visit Management objects and generate a metadata cache
to make sure your field users can view and update visits on the AFLS mobile app. You
must also do this for Visit Management to work for desktop users.


## See Also

Configure Visit Settings
Create a Metadata Cache
Tailor Business Processes to Different Record Type Users


Configure the Visit Engagement Page

To customize visit details and improve user efficiency, configure page layout and sidebar menu options.
You control which fields and sidebar options appear, so your team can access the information they need
to conduct effective visits.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Visit Information

To define the visit information that users can view, configure the Visit and Provider Visit page layouts.

On the Visit page layout, the Account, Place, Planned Start Time, and Planned End Time fields are hard-
coded. By default, these fields appear in the same order to users, even if you remove them on the page
layout. Add the Channel and Status fields, and any other standard or custom field you need to meet your
business requirements. If you use Visit and Provider Visit record types in your org, you must add the
Record Type ID field to the Visit page layout.

To support next visit objectives, add a single-column section to the Provider Visit page layout and name it
Next Visit Objectives. Add one of these fields to the section:

- Provider Visit Next Visit Objective: Supports multiline text input.
- Provider Visit Next Visit Objective Type: Supports multiselect picklist input. If you use this field, you
must configure picklist values for it in object manager.

Next, select a value (None, Picklist, Text, or Picklist and Text) for the Next Visit Product Objective Fields
Type setting in the Admin Console Visit Settings. If you select Picklist or Picklist and Text, you must also
create a Next Visit Objective message record in Product Guidance and align the objective message to
applicable territories.

<!-- page:301 -->




Sidebar Menu

To configure sidebar menu options for the visit engagement screen in the mobile app, add them as
related lists to the page layout.

The Recommendations sidebar menu option appears as the first item, but it only appears for users when
recommended messages or presentations are available for the account. You can’t add or remove it from
the sidebar menu.

Additional sidebar menu options appear based on your Visit page layout related list configuration. You
can add a maximum of 10 related lists (8 out-of-the-box and up to 2 custom objects), including:

- Presentation Forums
- Provider Visit Product Detailings
- Product Disbursements
- Provider Visit Requested Samples
- Provider Visit Marketing Items
- Attendees
- Custom Objects
If you use Product Messages, you must add the Provider Visit Product Detailing Message related list to
the page layout to show the associated product messages to users. Similarly, if you use Product
Discussion, you must add the Provider Visit Product Discussion related list to the page layout to show the
+ Add Discussion link to users. Provider Visit Product Messages and Provider Visit Product Discussions
don’t appear in the sidebar. Instead, they appear in the product area of the visit engagement page.

The sidebar menu options appear in the same order as the related lists on the Visit page layout. By
default, the system shows the related list object names as the sidebar menu option labels. You can
override the labels by renaming the object labels in Setup. The sidebar menus are also translatable.


## Override Record Type Selection Options for Visits and Provider Visits

If you use the web version of visit management and you also use record types for Visit and Provider
Visit, configure the New button that is shown on the home and list view pages.


## See Also

Configure Visit Settings
Define Messages and Objectives for Product Detailing
Page Layouts
Rename Object, Tab, and Field Labels


Override Record Type Selection Options for Visits and Provider Visits

If you use the web version of visit management and you also use record types for Visit and Provider Visit,
configure the New button that is shown on the home and list view pages.

<!-- page:302 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage buttons, links, and actions:                 Customize Application


1. From the management settings for the Visit object, go to Buttons, Links, and Actions.
2. From the dropdown for New, select Edit.
3. For Lightning Experience Override, select Lightning component, and then, from the dropdown, select
lsc4ce:LogAVisitAction.
4. Select Skip record type selection page.
5. Save your work.
6. Repeat these steps for the Provider Visit object.


Mobile App Configuration for Visit Management

Configure the object schema for supported Visit Management objects and generate a metadata cache to
make sure your field users can view and update visits on the AFLS mobile app. You must
also do this for Visit Management to work for desktop users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and manage visits:                           Life Sciences Commercial Admin


To enable offline access for the objects that support Visit Management in the AFLS mobile
app, create these object metadata cache configurations.

To limit the data that's downloaded to the mobile device, make sure to specify the SOQL Filter Condition.


Object                               Type                              Notes

LifeSciMetadataRecord                Configuration                     Set the category to
AccountProviderVisitRecordType

<!-- page:303 -->




Object                          Type                    Notes

Mapping .


## LifeSciMetadataRecord           Configuration           Set the category to

ProviderVisitSettings.


## LifeSciMetadataRecord           Configuration           Set the category to

StateLicenseNumberSettings.

BusinessLicense                 Data                    None

BusinessLicenseProduct          Data                    None

ComplianceStatementDef          Data                    None

ContentDocument                 Data                    Required for file attachments.

ContentDocumentLink             Data                    Required for file attachments.

ContentDocumentLinkVersion      Data                    Required for file attachments.

DigitalSignature                Data                    None

Expense                         Data                    None

ExpenseParticipant              Data                    None

ExpenseType                     Data                    None

InventoryCountAssessment        Data                    Not required if Sample Inventory
isn't managed.

InventoryOperation              Data                    Not required if Sample Inventory
isn't managed.

LifeSciCustomScript             Data                    None

LifeSciMarketableProduct        Data                    None

LifeSciProductAcctRstrc         Data                    None

Location                        Data                    None

PresentationClickStrmEntry      Data                    None

PresentationForum               Data                    None

Product2                        Data                    None


## ProductBatchItem                Data

- Not required if Sample
Inventory isn't managed.
-   Select Web-to-Mobile Sync.

<!-- page:304 -->




Object                            Type                              Notes

ProductDisbursement               Data                              None

ProductGuidance                   Data                              None

ProductionBatch                   Data                              Not required if Sample Inventory
isn't managed.

ProductItem                       Data                              None

ProductTerrDtlAvailability        Data                              None

ProductTerritoryAvailability      Data                              None

ProviderAcctTerritoryInfo         Data                              None

ProviderSampleLimit               Data                              Select Web-to-Mobile Sync.

ProviderSampleLimitTemplate       Data                              Select Web-to-Mobile Sync.

ProviderSmplLmtTmplAssignme       Data                              Select Web-to-Mobile Sync.
nt

PrvdVstSmplLmtDiscrepancy         Data                              None

PrvdVstSmplLmtTransaction         Data                              None

ProviderVisit                     Data                              None

ProviderVisitDtlProductMsg        Data                              None

ProviderVisitMarketingItem        Data                              None

ProviderVisitProdDetailing        Data                              None

ProviderVisitProdDiscussion       Data                              None

ProviderVisitRqstSample           Data                              None

TerritoryAcctProdMsgScore         Data                              None

TerritoryProdtQtyAllocation       Data                              Select Web-to-Mobile Sync.

Time Period                       Data                              None

Visit                             Data                              If a related list is configured, set
the attachment download
method to Cache.

Visitor                           Data                              None


Important After you create these configurations, make sure to generate a metadata cache. This step
is important because it makes sure that the mobile app accesses the latest metadata definitions,
including any schema changes for supported objects.

<!-- page:305 -->




## See Also

Create Object Metadata Cache Configuration
Generate Metadata Cache


Visit Management Admin Console

To configure what information fields users can see and how they can interact with and manage visit
records, use the Admin Console.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Configure Visit Settings

To customize the visit user experience at the org, user profile, or individual user level, configure the
visit settings in the Admin Console.
Map Visit Types to Accounts
If you use record types to tailor visit management processes for your users, create maps that define
the associations between account record types and visit record types.
Configure Product Discussion Settings
To help field users capture product-specific information during interactions with healthcare
professionals, create provider visit product discussion record types. Then, define the provider visit
product discussion record types to use for specific marketable products and conditions.
Update Provider Account Territory Information
To calculate year-to-date visits, next visit, and last visit values for Provider Account Territory Information
records, run the Provider Account Territory Information job.
Run Visit Share Management Jobs
To share historical account visit records after territory realignments, run the visit share management
job. This provides field users with continued access to account visit data in their updated territories.


Configure Visit Settings

To customize the visit user experience at the org, user profile, or individual user level, configure the visit
settings in the Admin Console.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:306 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage visit settings:                                Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Visit Administration, and then select Visit Settings.
3. From the Select Type dropdown, select the type of settings to configure. You can configure visit
settings for the org default, specific profiles, or users.
4. Select Visit Settings options and enter values to meet your business needs.

These settings put you in command of how users plan, manage, and submit visits. They govern the
entire scheduling process, from skipping the visit preview screen and setting a default duration to
enforcing future visit limits and managing visit conflicts. You can also use these settings to configure
submission-related details, manage late submissions, and even unlock submitted visits.

5. Select Geolocation Settings options and enter values to meet your business needs.

These settings give you control over geolocation capture for compliance and data integrity. Define
when the system captures a user’s location—specifically, at the point of signature and at the moment of
submission. To make sure that the user’s recorded location remains within a valid range of the visit’s
location, you can set a maximum allowed distance.

6. Select Product Detailing Settings.

These settings help you to customize the product details your users see. You can choose whether to
show recent details and a product selector, and you can define whether users can discuss off-label
products. You can also specify the field type for next visit product objectives.

7. Select Samples and Items Settings.

These settings give you control over sample management. You can specify which healthcare
organization types can receive samples and items, and determine whether users must enter a batch
number, or whether they can show expired batches. To make sure that users stay within defined limits
and inventory counts for both samples and territory quantity allocations, you can also govern how the
system validates samples.

8. Select Signature Settings.

These settings help you to customize the signature and document experience. You can choose
whether to show the document ID and whether the request receipt appears on the signature page.

9. Select profiles in the User Profiles Available in Visitor Search field in Visitor Settings.
10. Save your work.

<!-- page:307 -->



Map Visit Types to Accounts

If you use record types to tailor visit management processes for your users, create maps that define the
associations between account record types and visit record types.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage visit record type mappings:                Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2.    Select Visit Administration, and then select Visit Record Type Mappings.
3.    Select New.
4.    Enter a name, and then select an account record type and a visit record type.
5.    Save your work.


Configure Product Discussion Settings

To help field users capture product-specific information during interactions with healthcare
professionals, create provider visit product discussion record types. Then, define the provider visit
product discussion record types to use for specific marketable products and conditions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage product discussion settings:               Life Sciences Commercial Admin permission set


Before you can define product discussion settings, you must configure products and product types and
create provider visit product discussion record types.

1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Visit Administration, and then select Product Discussion Settings.

<!-- page:308 -->



3. Select a product from the product list.
4. Move record types from Available Record Types to Selected Record Types.
5. Save your work.


## See Also

Configure Products and Product Types
Get Your Org Ready for Visit Management


Update Provider Account Territory Information

To calculate year-to-date visits, next visit, and last visit values for Provider Account Territory Information
records, run the Provider Account Territory Information job.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To run the Provider Account Territory Information        Life Sciences Commercial Admin permission set
job:


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Visit Administration, and then select Visit Jobs.
3. Select Run Now or Schedule.


Run Visit Share Management Jobs

To share historical account visit records after territory realignments, run the visit share management job.
This provides field users with continued access to account visit data in their updated territories.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To start the Visit Share Management job:                 Life Sciences Commercial Admin permission set

<!-- page:309 -->




Tip Run this job after running the Update Provider Account Territory Information job.


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Territory Management, and then select Visit Share Management.
3. Select Run Now or Schedule.
After the job is run, visits are shared with territories based on account territory alignment.


## See Also

Territory Management Batch Jobs


Next Best Message

Next Best Message provides tailored and relevant messages for each product associated with an account.
These recommendations are dynamically generated based on real-time data, allowing field sales teams
to provide this information during visits with their customers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Configure Next Best Message data by using your own predictive model and loading the data into the
Territory Account Product Message Score object.

Alternatively, you can create the records manually.

- Create a Territory Account Product Message Score record. Enter an Account, Product Guidance,
Territory, Total Score, and Rank.
-    For rationale, enter the Score Explainability Information in this format: {"metric": value}. Integer and
String are the only accepted values. Here’s an example of Score Explainability Information in the
correct format:

{"Message Priority": "Top for this quarter",
"HCP Interest Level": "High interest shown",
"Recent Reaction": "Asked for clinical data",
"Messages sent this month": 4,
"Last Discussed": "Discussed on 08/10"}.


To make sure that users can see the recommended product messages in their territories, grant access to
Territory Account Product Message Score records in one of these ways.

- Share Territory Account Product Message Score records with users manually.
- Create owner-based sharing rules for Territory Account Product Message Score. To specify which users'

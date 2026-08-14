<!-- guide:admin-guide section:set-up-intelligent-content-features pages:310-431 -->
# Set Up Intelligent Content Features



records are shared and the users who get access to the data, select Territories.

See Also
Next Best Data Model



Set Up Intelligent Content Features

Equip field teams with a comprehensive content library so they can deliver impactful presentations and
monitor engagement. Enable personalized communications with healthcare professionals and
organizations by providing your field team with preapproved, customizable email templates.


## Emails and Templates

Configure email templates and fragments that streamline email communication between sales reps
and healthcare professionals (HCPs). Manage and capture consent to help ensure that your
organization meets relevant compliance requirements, and monitor email analytics to optimize
campaign performance. Sales reps can send emails to HCPs by using preapproved templates
throughout AFLS for Customer Engagement and the AFLS mobile app.
Presentations
Streamline content management so that field users can deliver tailored presentations to healthcare
professionals (HCPs) during face-to-face and remote interactions. Create and manage effective
presentations that use the most current materials. Give users access to the right content at the right
time by using activation dates and linking presentations to specific products, messages, and territories.
Use feedback and engagement metrics from every interaction to improve marketing strategies and
make content more relevant.
Intelligent Content Reference
Create the content and source files for Life Sciences Customer Engagement presentations and email
templates.


Emails and Templates

Configure email templates and fragments that streamline email communication between sales reps and
healthcare professionals (HCPs). Manage and capture consent to help ensure that your organization
meets relevant compliance requirements, and monitor email analytics to optimize campaign
performance. Sales reps can send emails to HCPs by using preapproved templates throughout Life
Sciences Cloud for Customer Engagement and the AFLS mobile app.

Unlike standard Salesforce email templates, Life Sciences email templates and reusable fragments
provide a controlled framework for sales reps to send emails that are personalized, adherent to industry
standards, and aligned with brand strategy.


## Get Your Org Ready for Emails

Before you get started with email administration, complete a few tasks to prepare your org for email
features.

<!-- page:311 -->




## Mobile Configuration for Emails

Set up object metadata cache configurations for the supported Life Sciences email objects. Generate a
metadata cache to package the object schema configuration that the AFLS mobile app
uses for online and offline access. This configuration defines how the mobile app fetches and stores
the necessary metadata when a network connection is unavailable.
Configure Email Settings
Customize the behavior of email templates and the email queue, and define how sales reps can use
email templates in the field. Optimize email delivery, tracking, and consent management. For granular
control, apply settings for the entire org, for certain profiles, or for specific users.
Manage Email Templates
Create and manage the email templates that you want your sales reps to use in the field. Link email
templates and their fragments to specific products or align them with specific territories so that they’re
available to the right users.
Schedule Email Jobs
Email jobs enable efficient and timely large-scale communication with healthcare professionals (HCPs)
and healthcare organizations (HCOs). Schedule jobs to send emails at specific times or intervals. Track
email status and collect engagement metrics for sent emails.
Monitor and Manage the Email Queue
Get an administrative view into the flow of emails. Monitor and manage emails that were sent recently
or are awaiting delivery.
Use a Third-Party Email Service
The AFLS for Customer Engagement managed package includes the
EmailQueueProcessor Apex interface to integrate with a third-party email service provider and handle
email operations. Create an Apex class that implements the EmailQueueProcessor interface.


Get Your Org Ready for Emails

Before you get started with email administration, complete a few tasks to prepare your org for email
features.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up Life Sciences Customer Engagement           Life Sciences Commercial Admin permission set
data:

To update page layouts and add picklist values:       Customize Application

<!-- page:312 -->



1. Make sure that your org uses the Life Sciences RSVP email address.
a. From Setup, in the Quick Find box, search for and select Life Sciences for Customer Engagement
Setup.
b. Verify that the RSVP email address is turned on.
2. To control the content that users can attach to emails, add a picklist value to this Life Science Email
Template field.

Field                                                 Picklist Values

AttachmentObjectType                                  Add Account as a picklist value so that users can
attach account records to emails.

3. To enable users to send emails from the home page, accounts, presentations, and so on, configure
Email quick actions.
4. Enable users to send emails to multiple accounts at the same time.
a. Enable bulk actions on account lists.
b. Create a quick action with these values, and assign the action to the correct permission sets and
profiles.

Field                                               Value

Action Name                                         Email

Location                                            Search

Object                                              Account

5. To enable users to sort and filter email templates by theme, configure topics for the Life Science Email
Template object.
6. To honor communication preferences across different subscription types and channels, set up Consent
Management.
7. To track sent emails, set up the Activity Timeline for accounts.
8. To enable admins to upload email templates by using the content management Connect API, make
sure that admin users have the System Administrator profile or a profile that's cloned from it. Or,
enable field level security for the correct profiles on all fields on these objects.
- LifeSciEmailTemplate
- LifeSciEmailTmplSnapshot
- LifeSciEmailTmplFragment
- LifeSciEmailTmplRelaFrgmt
9. Activate the Life Science Email object trigger handlers.
- EmailQueueImmediateHandler
- EmailQueueRecipientHandler
- EmailQueueSenderHandler
- EmailAttachmentHandler
- SyncEmailResponseStatusToObjectHandler

<!-- page:313 -->




Mobile Configuration for Emails

Set up object metadata cache configurations for the supported Life Sciences email objects. Generate a
metadata cache to package the object schema configuration that the AFLS mobile app
uses for online and offline access. This configuration defines how the mobile app fetches and stores the
necessary metadata when a network connection is unavailable.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up Life Sciences Customer Engagement           Life Sciences Commercial Admin permission set
data:


To enable offline access for the objects that support emails in the AFLS mobile app, create
these object metadata cache configurations.


Object                              Type                              Notes

CommSubscription                    Data                              None

CommSubscriptionChannelType         Data                              None

CommSubscriptionConsent             Data                              None

ContentDocument                     Data                              None

ContentDocumentLink                 Data                              None

ContentVersion                      Data                              None

DataUsePurpose                      Data                              None

LifeSciEmailTemplate                Data                              None

LifeSciEmailTmplFragment            Data                              None

LifeSciEmailTmplRelaFrgmt           Data                              None

LifeSciEmailTmplSnapshot            Data                              Set the attachment download
method to Cache.

LifeScienceEmail                    Data                              None

LifeSciMarketableProduct            Data                              None

<!-- page:314 -->




Object                               Type                               Notes

Survey                               Data                               None

Topic                                Data                               None

TopicAssignment                      Data                               None


Important After you create these configurations, you must generate a metadata cache. This step is
important because it makes sure that the mobile app accesses the latest metadata definitions,
including any schema changes for supported objects.


## See Also

Create Object Metadata Cache Configuration
Generate Metadata Cache


Configure Email Settings

Customize the behavior of email templates and the email queue, and define how sales reps can use
email templates in the field. Optimize email delivery, tracking, and consent management. For granular
control, apply settings for the entire org, for certain profiles, or for specific users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To adjust email settings:                             Life Sciences Commercial Admin permission set


1. From App Launcher, find and select Admin Console.
2. Select Email, and then select Email Settings.
3. Choose whether to apply settings at the organization level, or select the user profile or the individual
user to apply settings for.
4. Under General Settings, configure these settings as needed.

Setting                             Description

Edit subject before sending         Sales reps can edit the subject line defined in the email template.

Add CC recipients                   Sales reps can add colleagues as CC recipients when sending
emails.

Schedule emails to send later       Sales reps can choose whether to send an email immediately or

<!-- page:315 -->




Setting                           Description


## schedule it to send at a later date and time. Scheduled emails still

adhere to template availability, start and end dates, and
subscription settings.

Sort templates by last modified   Sort templates by the Last Modified Date in AFLS
for Customer Engagement.

5. Under Delivery Settings, configure these settings as needed.

Setting                           Description

Send to healthcare                Sales reps can send emails directly to an HCO account in addition
organizations (HCOs)              to individual healthcare professionals (HCPs).

Send unless recipient opted out   Sales reps can send emails to all addresses that didn't specifically
opt out or unsubscribe from a communication subscription.

Show additional addresses         If the main contact for an account chooses not to receive emails,
when primary contact opts out     sales reps can see other email addresses linked to that HCO
account.

Email Service                     The name of the Apex class for a third-party email service. See Use
a Third-Party Email Service.

6. Under Language Settings, configure these settings as needed.

Setting                           Description

Account Language Filter           The field to use to match the account's language to the email
template's language. Email templates are filtered automatically to
match the HCP or HCO account's preferred language so that
recipients receive content in their chosen language.

User Language Filter              The field to use to filter email templates automatically to match
the user's preferred language so it's easier to find and use relevant
templates.

Filter templates by language      Sales reps can filter templates by language when sending an
email.

7. Under Email Limits, configure these settings as needed.

Setting                           Description

Email Send Limit Warning          Show a warning on the Email Queue page when there are this
many emails left before the org email sending limit.

Email Batch Size                  The number of emails to send in each email queue batch.
Configure email queue jobs on the Email Jobs page. See Schedule

<!-- page:316 -->




Setting                            Description

Email Jobs.

Retry Attempts                     The number of times to retry when an email fails.

8. Under Tracking Settings, configure these settings as needed.

Setting                            Description

Days to Track Status               The number of days to monitor email and delivery status, such as
when emails are opened.

Days to Keep Sent Emails           The number of days to store sent emails.

Days to Check History              The number of days to check sent history to prevent sending
duplicate emails to the same account.

Status Tracking Batch Size         The number of emails to process each time the status tracking job
runs.

9. Under Consent Settings, configure these settings as needed.

Setting                            Description

Turn off Add Email Addresses       Prevent sales reps from entering additional email addresses
manually when sending emails. Sales reps can select only existing
addresses.

Ignore consent verification        Send emails without checking the account's opt-in status for a
channel or topic.

10. Save your changes.


Manage Email Templates

Create and manage the email templates that you want your sales reps to use in the field. Link email
templates and their fragments to specific products or align them with specific territories so that they’re
available to the right users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Open the Email Templates page from the Email tile in the Admin Console. See all available templates, or

<!-- page:317 -->



filter to see only the templates for a certain product or territory. Activate, deactivate, or delete templates
directly from the list.


## Upload and Create Email Templates

Upload ZIP files to create email templates that help users draft emails faster.
Distribute Email Templates to Territories
Assign relevant territories to email templates so that only the sales reps for those territories can access
the templates.
Manage Email Template Attachments
Work with email template attachments and upload new versions.
Manage Email Template Versions
Rather than creating a new email template, you can upload new versions to make smaller changes
such as updating email text or images.
Manage and Share Email Fragments
Fragments are reusable HTML content blocks that sales reps can insert into the body of an email
template to customize email content. For example, a fragment can contain a preapproved product
blurb, such as key benefits or usage instructions. When the user with access to that fragment uses the
related email template, they can select that blurb to include product details.


Upload and Create Email Templates

Upload ZIP files to create email templates that help users draft emails faster.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To upload and create email templates:                  Life Sciences Commercial Admin permission set


Before you create email templates in Salesforce, create the email template ZIP files. In each ZIP file,
include:

- An index.html file for each supported language
- A thumbnail.jpg file
- (Optional) An attachments folder with attachments in supported formats (documents, images,
audio, video, and archives) and required attachments marked with a required__ prefix
- (Optional) A fragments folder with individual fragments, which are HTML content blocks that users
can combine in the email body text to customize the email

<!-- page:318 -->



1. From the App Launcher, find and select Admin Console, and then select Email.
2. Select Email Templates, and then click New.
3. Upload the email template ZIP file.
4. Enter general information for the email template, such as:
- Email subject
- Template name
- Start and end dates
5. If needed, enter more details about the email template.
- The type of email address to use as the email sender and for replies
- The topics to categorize the template under, so sales reps can find it when they search or filter
- The product to apply so the template shows up when sales reps send an email related to that
product
- The survey to include in emails sent from the template
- Whether sales reps can edit the email subject line or email content
- The email addresses to include in the BCC list by default
- Whether sales reps can share presentations as unique links in the email content
6. If the ZIP file includes index.html files for multiple languages, select the languages to use for this
template.
7. Set up the email template for automated use cases or for remote sessions. For more information, see
Set Up Invitation Emails.
a. In the Automated Email Invitation Context field, select the type of visit to use this email template
for.
b. In the Automated Email Invitation Action, select the visit action that triggers Salesforce to send an
email automatically.
c. To use this template as the default template for emails sent automatically for this context and
action, select Template for automated emails.
d. To generate and attach iCalendar invitations to emails sent from the template, select Attach
iCalendar file.
e. In the iCalendar Invitation field, enter the information to include in the iCalendar attachment.
8. Manage subscriptions and consent for the template.
a. In the Communication Subscription field, select the communication subscription record that stores
opt-in and opt-out preferences for email communications.
b. To use this template to send a customized email when consent is captured, select Template for
consent acknowledgment.
This template isn’t visible to users.
c. To ignore email consent preferences for this template and send emails to recipients who haven’t
subscribed, select Ignore opt-out preferences.
9. Save your changes.
10. To make the template available to users, activate the template.

After you upload and activate your email template, edit it or deactivate it so that it’s no longer available
for use. Share the template’s fragments with sales reps so they can customize email content.


## See Also

Manage and Share Email Fragments

<!-- page:319 -->



Distribute Email Templates to Territories

Assign relevant territories to email templates so that only the sales reps for those territories can access
the templates.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To distribute email templates:                       Life Sciences Commercial Admin permission set


Before you distribute email templates to territories, configure account territories and the territory
hierarchy.

1. From the App Launcher, find and select Admin Console.
2. Select Email, and then select Email Templates.
3. Open a template, and then click Edit.
4. Under Territory Search, search for the territory name, or expand the territory alignment tree to find the
right territory.
5. To assign the template to individual territories, select the checkboxes.
6. To assign the template to a parent territory and all child territories, double-click the parent checkbox.
If you assign a template to a parent territory all existing and future child territories under the parent
territory are also aligned to that template.
7. Save your changes.


## See Also

Set Up Sales Territories for AFLS


Manage Email Template Attachments

Work with email template attachments and upload new versions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:320 -->




USER PERMISSIONS NEEDED

To manage email template attachments:                  Life Sciences Commercial Admin permission set


When you create an email template, you can upload attachments as part of the template ZIP file. These
steps open the attachment’s file page so that you can work with existing email template attachments.

1.    From the App Launcher, find and select Admin Console.
2.    Select Email, and then select Email Templates.
3.    Open a template, and then open the file from the Attachments section.
4.    Use the file to perform the necessary action.
- Preview the content.
- Download the current version.
- Upload a new version.
- Edit file details.
- Share the file with users and choose whether to allow those users to share it.
- Create a public link to share a file publicly, select the file’s expiration date, and choose whether it
requires a password.


Manage Email Template Versions

Rather than creating a new email template, you can upload new versions to make smaller changes such
as updating email text or images.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage email template versions:                     Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Email, and then select Email Templates.
3. Open a template, and then scroll to Email Template Version History.
4. To see details about a previous version of the template, click the version number.
5. To upload a new version of the template, click New Version.
6. In the New Email Template window, upload the new ZIP file and update the template’s details.
Fragments and email attachments in the ZIP file are also updated. If the new ZIP file version doesn’t
contain fragments, the previous fragments are deleted.
7. Save your changes.
If the template is already active, the new version is available for use.

<!-- page:321 -->



8. To share new or updated fragments from the new template version so the right sales reps see them
when they send emails, click Update Fragments.


## See Also

Manage and Share Email Fragments


Manage and Share Email Fragments

Fragments are reusable HTML content blocks that sales reps can insert into the body of an email
template to customize email content. For example, a fragment can contain a preapproved product blurb,
such as key benefits or usage instructions. When the user with access to that fragment uses the related
email template, they can select that blurb to include product details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage and share fragments and run email          Life Sciences Commercial Admin permission set
fragment jobs:


When you upload an email template ZIP file that contains a Fragments folder, Life Science Email
Template Fragments records are created automatically. You can also create or update Life Science Email
Template Fragments records manually or by using Data Loader. To create a fragment manually, upload
the fragment’s HTML file and associate its related Content Document record with the Life Science Email
Template Fragment record. When you create fragments manually, include:

- Record names that match the file names in the email template ZIP file, excluding the file extensions.
Record names are case-sensitive and must be fewer than 80 characters.
- Descriptions to show to sales reps when they select fragments.
After you create or update fragments, there are two ways to share fragments so that sales reps can access
them when they send emails.


Share Fragments for One Template

Update fragments sharing for one template from the template's details.

1. From the App Launcher, find and select Admin Console.
2. Select Email, and then select Email Templates.
3. Open a template.

<!-- page:322 -->



4. To share the fragments for the template, click Update Fragments Sharing.


Share Fragments for All Templates

Run or schedule an email fragment job to recalculate sharing rules for fragments across all email
templates.

You can run the job manually, or you can schedule the job to run later or at a regular interval. For
example, to make sure that new sales reps have access to the right fragments, schedule an email
fragment job that runs daily.

1. From the App Launcher, find and select Admin Console.
2. Select Email, and then select Email Fragment Jobs.
3. Run or schedule the email fragment batch job.
In the table, you can see the status of the email fragment jobs and who initiated them.

See Also
Data Loader Guide


Schedule Email Jobs

Email jobs enable efficient and timely large-scale communication with healthcare professionals (HCPs)
and healthcare organizations (HCOs). Schedule jobs to send emails at specific times or intervals. Track
email status and collect engagement metrics for sent emails.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To schedule email jobs:                               Life Sciences Commercial Admin permission set


You can use two types of email jobs.

- Send Email jobs send emails in the queue at a determined time and cadence.
- Track Email Status jobs track information such as when emails are sent, delivered, opened, or
bounced.

1. From the App Launcher, find and select Admin Console.
2. Select Email, and then select Email Jobs.
3. To schedule an email job, click Schedule.

<!-- page:323 -->



For each email job type, there are three slots so that you can customize the cadence.
4. Select whether to run the job one time or on a regular schedule, and then select the schedule.
You can change the schedule later.
5. Save your changes.


Example To send emails in the queue every 20 minutes, schedule all three time slots for the Send
Email job. For each slot, select the hourly frequency. For the first slot, select an offset of 00 minutes.
For the next slot, select an offset of 20 minutes. For the final slot, select an offset of 40 minutes.


Monitor and Manage the Email Queue

Get an administrative view into the flow of emails. Monitor and manage emails that were sent recently or
are awaiting delivery.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To monitor the email queue:                            Life Sciences Commercial Admin permission set


Use the email queue to monitor email transactions. For example, you can monitor failed email attempts
and troubleshoot by adjusting the batch size or editing attachments that exceed file size limits directly
from the email queue. You can also see notifications when your org has exceeded or is close to
exceeding the daily email limit.

1.    From App Launcher, find and select Admin Console.
2.    Select Email, and then select Email Queue.
3.    Sort or filter to find the emails you want to see in the queue.
4.    Review details for each email in the queue, such as the sender, the recipient, email addresses in the
CC and BCC lists, job failures, and job status. Emails can have these statuses.

Status                              Description

Preparing                           The email is saved but not sent.

New                                 The email is scheduled to be sent.

Retry                               The email failed to send, but there are still retries left to send the
email again automatically. This is an intermediate status before
the transaction is processed or fails.

<!-- page:324 -->




Status                            Description

Success                           The email was sent successfully.

Failed                            The email failed to send.

Canceled                          The email was canceled and won't be sent.

5. You can work with emails in the queue in these ways.
- Download the email’s body content.
- Open and download email attachments.
- Edit the email job record and update the template, attachments, recipients, CC and BCC addresses,
consent, related presentation, tracking and status information, and more.
- Send emails immediately or retry sending them by adding them to the next scheduled job queue.
- Cancel emails that haven’t been sent.

Use a Third-Party Email Service

The AFLS for Customer Engagement managed package includes the EmailQueueProcessor
Apex interface to integrate with a third-party email service provider and handle email operations. Create
an Apex class that implements the EmailQueueProcessor interface.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access the EmailQueueProcessor Apex               Life Sciences Commercial Admin permission set
interface:

To define an Apex class:                             Author Apex


1. Open the Setup menu, and then select Developer Console.
2. Create a global Apex class that implements the Lsc4ce.EmailQueueProcessor interface.
3. In the Apex class, include all methods and match the method signatures. If you don’t need to
implement a method’s logic, leave the method body blank.

Method                                                Description

initialize(List<LifeScienceEmail> records)            Initializes resources and setup for the third-party
email service and prepares to process Life
Science Email records.

<!-- page:325 -->




Method                                               Description

setParameters(Map<String, Object>                    We recommend leaving this method empty.
parameters)

addMessage(LifeScienceEmail lScEmail)                Converts a Life Science Email record to the third-
party service’s format and validates the email
before adding it to the queue. Returns true > if
successful.

exceededLimits()                                     Checks if the current email batch size will exceed
limits for the third-party service. Returns true if
the batch size will exceed limits.

canExceedLimits(Integer emails)                      Checks if sending the specifed number of emails
will exceed email sending limits. Returns true if
sending will exceed limits

sendEmail()                                          Send the queued emails through the third-party
service and return a list of error messages.
Returns a null value if the email is sent
successfully.

cleanUp(List<LifeScienceEmail> emails)               Updates the status of processed Life Science
Email records.

updateAttemptStatus(List<LifeScienceEmail>           Updates Life Science Email records with the
emailAttemptsToProcess)                              status of email attempts from the third-party
service

finish()                                             Closes the connection to the third-party email
service.

4. Save your changes.
5. If needed, create a named credential and external credential to securely store API keys.
See Named Credentials as Callout Endpoints.
6. From the Email tile in the Admin Console, update email settings so that AFLS for
Customer Engagement uses your Apex class to send emails and track status.
See Configure Email Settings.


## EmailQueueProcessor Interface

The EmailQueueProcessor interface handles email operations for a third-party email service, including
sending emails and updating the tracking status in Salesforce. You can add additional
implementations for different email service providers.
EmailQueueProcessor Example
This example creates an Apex class that implements the EmailQueueProcessor interface to integrate a
third-party email service with AFLS for Customer Engagement.

See Also

<!-- page:326 -->



Apex Developer Guide


EmailQueueProcessor Interface

The EmailQueueProcessor interface handles email operations for a third-party email service, including
sending emails and updating the tracking status in Salesforce. You can add additional implementations
for different email service providers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Namespace

lsc4ce


Typed

Strongly typed


Signature

Access                                              Signature


## global

void initialize(List<LifeScienceEmai
l> records);



## global

void setParameters(Map<String, Objec
t> params);



## global

Boolean addMessage(LifeScienceEmail
lScEmail);



## global

Boolean exceededLimits();

<!-- page:327 -->




Access                                          Signature


## global

Boolean canExceedLimits(Integer emai
ls);



## global

List<String> sendEmail();



## global

void cleanUp(List<LifeScienceEmail>
records);



## global

List<LifeScienceEmail> updateAttempt
Status(List<LifeScienceEmail> emailA
ttemptsToProcess);


global
void finish();




Methods

Method                                          Description

initialize(List<LifeScienceEmail> records)      Initializes resources and setup for the third-party
email service and prepares to process Life Science
Email records.

setParameters(Map<String, Object> parameters) Configures required parameters for the email
processor, and stores API credentials,
configuration, and connection parameters.

addMessage(LifeScienceEmail lScEmail)           Converts a Life Science Email record to the third-
party service’s format and validates the email
before adding it to the queue. Returns true if
successful.

exceededLimits()                                Checks if the current email batch size will exceed
limits for the third-party service. Returns true if
the batch size will exceed limits.

canExceedLimits(Integer emails)                 Checks if sending the specified number of emails
will exceed email sending limits. Returns true if
sending will exceed limits.

<!-- page:328 -->




Method                                              Description

sendEmail()                                         Send the queued emails through the third-party
service and return a list of error messages. Returns
a null value if the email is sent successfully.

cleanUp(List<LifeScienceEmail> emails)              Updates the status of processed Life Science Email
records.

updateAttemptStatus(List<LifeScienceEmail>          Updates Life Science Email records with the status
emailAttemptsToProcess)                             of email attempts from the third-party service.

finish()                                            Closes the connection to the third-party email
service.


Example Implementation

See EmailQueueProcessor Example.


EmailQueueProcessor Example

This example creates an Apex class that implements the EmailQueueProcessor interface to integrate a
third-party email service with AFLS for Customer Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Example EmailQueueProcessor Interface Implementation

This example implementation of the EmailQueueProcessor interface uses example helper classes.


public without sharing class SampleEmailQueueProcessor implements EmailQueuePr
ocessor {


private Map<Id, Attachment> bodyAttachments;
private Map<Id, ContentVersion> bodyContentVersions;
private final List<SampleEmailMessage> emailMessages = new List<SampleEmai
lMessage>();


public void initialize(List<LifeScienceEmail> records) {

<!-- page:329 -->




Set<Id> attachmentIds = new Set<Id>();



## for(LifeScienceEmail record : records) {

if (!String.isBlank(String.valueOf(record.BodyAttachmentIdentifie
r)) && (record.BodyAttachmentIdentifier instanceof Id)) {
attachmentIds.add((Id)record.BodyAttachmentIdentifier);
}
}


bodyAttachments = new Map<Id, Attachment>();
bodyContentVersions = new Map<Id, ContentVersion>();



## if (!attachmentIds.isEmpty()) {

List<Attachment> attachments = [SELECT Id, Body, ContentType, Name
FROM Attachment WHERE Id IN :attachmentIds];
bodyAttachments = new Map<Id, Attachment>(attachments);



## List<ContentVersion> contentVersions = [SELECT Id, VersionData FRO

M ContentVersion WHERE Id IN :attachmentIds];
bodyContentVersions = new Map<Id, ContentVersion>(contentVersion
s);
}


}



## public Boolean addMessage(LifeScienceEmail lscEmailRecord) {

SampleEmailMessage email = new SampleEmailMessage();
email.setSenderAddress(String.valueOf(lscEmailRecord.SenderEmailAddres
s));
email.setSenderName(String.valueOf(lscEmailRecord.SenderUserName));
email.addRecipient(String.valueOf(lscEmailRecord.SentToEmailAddress));
email.setCCAddress(String.valueOf(lscEmailRecord.CcEmailAddressList).s
plit(','));
email.setBCCAddress(String.valueOf(lscEmailRecord.BccEmailAddressLis
t).split(','));
email.setSubject(String.valueOf(lscEmailRecord.SubjectText));


String body = null;


if (!String.isBlank(String.valueOf(lscEmailRecord.BodyAttachmentIdenti
fier))) {
Attachment bodyAsAttachment = bodyAttachments.get(lscEmailReco
rd.BodyAttachmentIdentifier);
if (bodyAsAttachment == null) {

<!-- page:330 -->





## ContentVersion bodyAsContentVersion = bodyContentVersion

s.get(lscEmailRecord.BodyAttachmentIdentifier);



## if(bodyAsContentVersion == null){

// Exception - No Body Found
} else {
body = bodyAsContentVersion.VersionData.toString();
}



## } else {

body = bodyAsAttachment.Body.toString();
}


}


email.setBody(body);
emailMessages.add(email);
return true;
}



## public Boolean exceededLimits() {

Integer remainingEmails = SampleEmailAPI.getRemainingEmails();
Integer numberEmailsToBeSent = 0;
for (SampleEmailMessage email : emailMessages) {
numberEmailsToBeSent += email.getRecipients().size();
numberEmailsToBeSent += email.getCCs().size();
numberEmailsToBeSent += email.getBCCs().size();
}
return remainingEmails >= numberEmailsToBeSent;
}



## public Boolean canExceedLimits(Integer numEmails) {

Integer remainingEmails = SampleEmailAPI.getRemainingEmails();
return remainingEmails >= numEmails;
}



## public List<String> sendEmail() {

List<String> errorMessages = SampleEmailAPI.sendEmails(emailMessages);
return errorMessages;
}


public void cleanUp(List<LifeScienceEmail> records) {
update records;
}

<!-- page:331 -->






## public List<LifeScienceEmail> updateAttemptStatus(List<LifeScienceEmail> e

mailAttemptsToProcess) {
List<LifeScienceEmail> emailRecordsToUpdate = new List<LifeScienceEmai
l>();
for (LifeScienceEmail email : emailAttemptsToProcess) {
SampleEmailStatus status = SampleEmailAPI.getEmailStatus(email);
if (status != null) {
email.IsBounced = status.getIsBounced();
email.BouncedReason = status.getBouncedReason();
email.BouncedDate = status.getBouncedDate();
email.LastOpenedDate = status.getLastOpenedDate();
email.FirstOpenedDate = status.getFirstOpenedDate();
email.LastEventDateTime = System.now();
}
}
return emailAttemptsToProcess;
}



## public void finish() {

SampleEmailAPI.someMethod();
}



## public void setParameters(Map<String, Object> params) {

// Nothing - Not called yet, reserved for future use
}
}



Example Helper Classes

This example helper class stores an email.


public class SampleEmailMessage {


private String senderAddress;
private String senderName;
private List<String> recipientAddress;
private List<String> ccAddress;
private List<String> bccAddress;
private String subject;
private String body;


public String getSenderAddress() {

<!-- page:332 -->




return senderAddress;
}
public void setSenderAddress(String senderAddress) {
this.senderAddress = senderAddress;
}


public String getSenderName() {
return senderName;
}
public void setSenderName(String senderName) {
this.senderName = senderName;
}



## public List<String> getRecipients() {

return recipientAddress;
}
public void setRecipientAddress(List<String> recipientAddress) {
this.recipientAddress = recipientAddress;
}
public void addRecipient(String recipientEmailAddress) {
this.recipientAddress.add(recipientEmailAddress);
}


public List<String> getCCs() {
return ccAddress;
}
public void setCCAddress(List<String> ccAddress) {
this.ccAddress = ccAddress;
}
public void addCC(String recipientCC) {
this.ccAddress.add(recipientCC);
}


public List<String> getBCCs() {
return bccAddress;
}
public void setBCCAddress(List<String> bccAddress) {
this.bccAddress = bccAddress;
}
public void addBCC(String recipientBCC) {
this.bccAddress.add(recipientBCC);
}


public String getSubject() {

<!-- page:333 -->




return subject;
}
public void setSubject(String subject) {
this.subject = subject;
}


public String getBody() {
return body;
}
public void setBody(String body) {
this.body = body;
}
}


This example helper class stores an email’s status.


public class SampleEmailStatus {


private Datetime SentDateTime;
private Datetime BouncedDate;
private String BouncedReason;
private Boolean IsBounced;
private Datetime FirstOpenedDate;
private Datetime LastOpenedDate;


public Datetime getSentDateTime() {
return SentDateTime;
}
public void setSentDateTime(Datetime SentDateTime) {
this.SentDateTime = SentDateTime;
}


public Datetime getBouncedDate() {
return BouncedDate;
}
public void setBouncedDate(Datetime BouncedDate) {
this.BouncedDate = BouncedDate;
}



## public String getBouncedReason() {

return BouncedReason;
}
public void setBouncedReason(String BouncedReason) {
this.BouncedReason = BouncedReason;

<!-- page:334 -->




}


public Boolean getIsBounced() {
return IsBounced;
}
public void setIsBounced(Boolean IsBounced) {
this.IsBounced = IsBounced;
}



## public Datetime getFirstOpenedDate() {

return FirstOpenedDate;
}
public void setFirstOpenedDate(Datetime FirstOpenedDate) {
this.FirstOpenedDate = FirstOpenedDate;
}



## public Datetime getLastOpenedDate() {

return LastOpenedDate;
}
public void setLastOpenedDate(Datetime LastOpenedDate) {
this.LastOpenedDate = LastOpenedDate;
}
}


This is an example helper class to make external API calls to the third-party email system. To make valid
API calls, update the endpoints.


public class SampleEmailAPI {



## public static Integer getRemainingEmails() {

// Replace with valid request
HttpRequest req = new HttpRequest();
req.setEndpoint('https://www.examplesite.com/some/api/endpoint');
req.setHeader('Authorization', 'someauth');
req.setHeader('Content-Type', 'application/json');
req.setMethod('GET');
req.setBody('Request Body');


Http httpReq = new Http();
HttpResponse response;



## try {

response = httpReq.send(req);
} catch (Exception ex) {

<!-- page:335 -->




// Handle
}


String body = response.getBody();
Map<String, Object> results = parseBody(body);



## // Assumes this value will be returned from the API

return Integer.valueOf(results.get('emails_remaining'));
}



## public static List<String> sendEmails(List<SampleEmailMessage> emails) {

// Replace with valid request
List<String> errorMessages = new List<String>();
for (Integer i = 0; i < emails.size(); i++) {
try {
// Send Message - Replace with valid request
HttpRequest req = new HttpRequest();
req.setEndpoint('https://www.examplesite.com/some/api/endpoin
t');
req.setHeader('Authorization', 'someauth');
req.setHeader('Content-Type', 'application/json');
req.setMethod('POST');
req.setBody('Request Body');


Http httpReq = new Http();
HttpResponse response;



## try {

response = httpReq.send(req);
} catch (Exception ex) {
// Handle
}


String body = response.getBody();
Map<String, Object> results = parseBody(body);



## // Check results if needed

} catch (Exception x) {
errorMessages.add(i, x.getMessage());
}
}
return errorMessages;
}

<!-- page:336 -->





## public static SampleEmailStatus getEmailStatus(LifeScienceEmail email) {

// Replace with valid request
HttpRequest req = new HttpRequest();
req.setEndpoint('https://www.somesite.com/some/api/endpoint');
req.setHeader('Authorization', 'someauth');
req.setHeader('Content-Type', 'application/json');
req.setMethod('GET');
req.setBody('Request Body');


Http httpReq = new Http();
HttpResponse response;



## try {

response = httpReq.send(req);
} catch (Exception ex) {
// Handle
}


String body = response.getBody();
Map<String, Object> results = parseBody(body);


SampleEmailStatus status = new SampleEmailStatus();
// Assumes these values will be returned from the API
status.setSentDateTime(Datetime.parse(String.valueOf(results.get('sen
t_time'))));
status.setIsBounced(Boolean.valueOf(results.get('is_bounced')));
status.setBouncedReason(String.valueOf(results.get('bounced_reaso
n')));
status.setBouncedDate(Datetime.parse(String.valueOf(results.get('bounc
e_date'))));
status.setLastOpenedDate(Datetime.parse(String.valueOf(results.get('la
st_opened'))));
status.setFirstOpenedDate(Datetime.parse(String.valueOf(results.get('f
irst_opened'))));


return status;
}



## public static void someMethod() {

// Replace with valid request
HttpRequest req = new HttpRequest();
req.setEndpoint('https://www.somesite.com/some/api/endpoint');
req.setHeader('Authorization', 'someauth');
req.setHeader('Content-Type', 'application/json');

<!-- page:337 -->




req.setMethod('GET');
req.setBody('Request Body');


Http httpReq = new Http();
HttpResponse response;



## try {

response = httpReq.send(req);
} catch (Exception ex) {
// Handle
}


String body = response.getBody();
Map<String, Object> results = parseBody(body);
}



## private static Map<String, Object> parseBody(String body){

Map<String, Object> m = (Map<String, Object>)JSON.deserializeUntyped(b
ody);
return m;
}
}



Presentations

Streamline content management so that field users can deliver tailored presentations to healthcare
professionals (HCPs) during face-to-face and remote interactions. Create and manage effective
presentations that use the most current materials. Give users access to the right content at the right time
by using activation dates and linking presentations to specific products, messages, and territories. Use
feedback and engagement metrics from every interaction to improve marketing strategies and make
content more relevant.

Managing, presenting, and optimizing content involves multiple stakeholders throughout each
presentation's lifecycle. With Intelligent Content:

- Admins can upload approved presentations and pages by using the Admin Console or content
management REST API resources. Then, they can manage distribution and maintain granular control
over content visibility, activation, and expiration.
-   Field teams can use the content library to find approved, up-to-date presentations that are tailored to
each interaction—even offline. In the presentation player, users have the flexibility to deliver
personalized presentations, use interactive tools, and capture HCP feedback in real time.
-   Commercial teams can leverage data-driven insights and HCP engagement patterns to improve
messaging and optimize presentation content based on what resonates most with HCPs.

<!-- page:338 -->




## Get Your Org Ready for Presentations

Before you get started with Intelligent Content, complete a few tasks to prepare your org for
presentations.
Mobile Configuration for Presentations
Set up object metadata cache configurations for Life Sciences presentation objects. Generate a
metadata cache to package the object schema configuration that the AFLS mobile app
uses for online and offline access. This configuration defines how the mobile app fetches and stores
the necessary metadata when a network connection is unavailable to provide a seamless experience
whether users are online and offline.
Configure Presentation Settings
Presentation settings help to manage how your field users can find, share, and work with presentations
in the content library and the presentation player. Manage data tracking, feedback capture, search
settings, sharing settings, and so on. For granular control, apply settings for the entire org, for certain
profiles, or for specific users.
Create and Manage Presentations
Use a centralized content management hub to manage presentations throughout their lifecycle.
Create presentations by uploading source files, or assemble new presentations from existing pages in
your org. Make sure that field users can access relevant content by linking presentations to specific
products and messages and distributing presentations to specific territories. To help ensure
compliance and consistency, manage version control and activation schedules.
Recommended and Targeted Presentations
Help your field users deliver the most relevant and effective content for each account and healthcare
professional (HCP). Targeted presentations help to make sure that users see and present only the right
content. Recommended presentations suggest the best content to use during interactions.
Smart Content Search
Expand your search beyond just presentation names and metadata properties. Use Data 360 to create
an index of searchable strings from your presentation content. In the content library, your field users
can find presentations by searching within presentation content and see why presentations match
their search terms.
Send Presentations as Links
Help your users improve engagement with healthcare professionals (HCPs) by sending presentations
as secure links. Field users can select multiple presentations and embed links automatically into
approved email templates, and HCPs can review presentations in a dedicated portal without
downloading email attachments. Links reflect the latest version of the presentation and expire after a
defined amount of time, so HCPs know they’re seeing the most up-to-date content. Rich engagement
data—including pages viewed, time spent per page, and the HCP’s navigation path—helps you to
optimize presentations for future interactions.
Understand Mandatory Pages in Presentations
Mandatory presentation pages help to keep interactions compliant by making sure that field users
present specified key messages, disclaimers, or safety information. When you configure presentations,
you can designate specific pages as mandatory to prevent users from bypassing or overlooking critical
content.
Understand Presentation Metrics

<!-- page:339 -->



When sales reps deliver presentations, metrics are tracked during the interaction so that you can get
detailed insights into usage and performance. Engagement data is captured in presentation click
stream entry records. To analyze engagement and improve presentation strategy, build custom reports
and dashboards by using presentation click stream entry data.


## See Also

Compare the AFLS Mobile App and Desktop Site


Get Your Org Ready for Presentations

Before you get started with Intelligent Content, complete a few tasks to prepare your org for
presentations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up Life Sciences Customer Engagement          Life Sciences Commercial Admin permission set
data:

To work with field sets and topics:                  Customize Application


1. Enable your users to access presentations and work with Intelligent Content features.
Make sure that these object permissions are enabled on the right permission sets or profiles.

Object                                                Permissions

Presentation Click Stream Entries                     Read, Create, Edit, Delete

Presentation Forums                                   Read, Create, Edit, Delete

Presentation Linked Pages                             Read, Create, Edit, Delete

Presentation Page Products                            Read

Presentation Pages                                    Read

Presentation Party Accesses                           Read, Create, Edit, Delete

Presentations                                         Read

2. Enable users to create custom presentations in the AFLS mobile app.
a. Enable these additional object permissions on the right permission sets or profiles.

<!-- page:340 -->




Object                                              Permissions

Presentation Linked Pages                           Create, Edit

Presentations                                       Create, Edit

Topic Assignments                                   Create

b. From the Presentations tile in the Admin Console, open the Presentation Settings page and enable
Create custom presentations for the same permission sets or profiles.
3. To report on more presentation fields, add fields to these field sets.

Object                                                Field Set

Presentation                                          Presentation Reporting

Presentation Page                                     Presentation Page Reporting

4. To enable users to sort and filter presentations and pages by theme in the content library, configure
topics for these objects.
- Presentation
- Presentation Page
5. To set up the presentation player so that users can capture medical inquiries, create a quick action
with these values. Assign the action to the correct permission sets and profiles.

Field                                                 Value

Action Name                                           Inquiry

Location                                              Intelligent Content

Object                                                Account

6. To set up the presentation player so that users can start or resume surveys, create a quick action with
these values. Assign the action to the correct permission sets and profiles.

Field                                                 Value

Action Name                                           Survey

Location                                              Intelligent Content

Object                                                Account

7. Enable admins to upload presentations by using the content management REST API.

Make sure that admin users have the System Administrator profile or a profile that's cloned from it. Or,
enable field level security for the correct profiles on all fields on these objects.

- LifeSciMarketableProduct
- Presentation
- PresentationPage

<!-- page:341 -->



- PresentationLinkedPage
- PresentationPageProduct
- ProductGuidance
8. Because record sharing is based on territory assignments, make sure that your Salesforce org uses the
default sharing settings.
a. In the sharing settings for the Presentation and Presentation Page objects, verify that default
internal access is set to Private.
b. On each user profile, verify that the View All Records permission is turned off for the Presentation
object.
9. Make sure that your org has enough Salesforce Files storage available to upload and store presentation
files.


Mobile Configuration for Presentations

Set up object metadata cache configurations for Life Sciences presentation objects. Generate a
metadata cache to package the object schema configuration that the AFLS mobile app
uses for online and offline access. This configuration defines how the mobile app fetches and stores the
necessary metadata when a network connection is unavailable to provide a seamless experience
whether users are online and offline.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up Life Sciences Customer Engagement          Life Sciences Commercial Admin permission set
data:


To enable offline access and improve performance for the objects that support presentations in the Life
Sciences Cloud mobile app, create these object metadata cache configurations.


Object                                              Type

ContentDocument                                     Data

ContentDocumentLink                                 Data

ContentVersion                                      Data

LifeSciMarketableProduct                            Data

Presentation                                        Data

<!-- page:342 -->




Object                                                 Type

PresentationPage                                       Data

PresentationLinkedPage                                 Data

PresentationPageProduct                                Data

ProductGuidance                                        Data

Survey                                                 Data

Topic                                                  Data

TopicAssignment                                        Data


Important After you create these configurations, you must generate a metadata cache. This step is
important because it makes sure that the mobile app accesses the latest metadata definitions,
including any schema changes for supported objects.


## See Also

Create Object Metadata Cache Configuration
Generate Metadata Cache


Configure Presentation Settings

Presentation settings help to manage how your field users can find, share, and work with presentations in
the content library and the presentation player. Manage data tracking, feedback capture, search settings,
sharing settings, and so on. For granular control, apply settings for the entire org, for certain profiles, or
for specific users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To adjust presentation settings:                        Life Sciences Commercial Admin permission set


1. From App Launcher, find and select Admin Console.
2. Select Intelligent Content, and then select Presentation Settings.
3. Select how to apply settings.

Tip Start by applying settings at the org level. Then, customize settings for specific profiles or
roles, such as Field Sales Representatives or Medical Science Liaisons. Apply settings at the user

<!-- page:343 -->




level only when it's necessary.


Org Default                                               Applies settings for all users unless you make
more specific assignments.

Profile                                                   Applies settings only for the profiles that you
select and overrides the org default.

User                                                      Applies settings only for the user that you select
and overrides all other assignments.

4. Under Search Settings, configure these settings to determine how users can search in the content
library.

Setting                               Description

Use advanced search for               Show Advanced Search filters and search options in the content
accounts                              library to help users find accounts based on presentation details.
See Account Search.


## Presentation Search Field

Select the standard field, custom text field, or formula field on the
Presentation object that's used for keyword searches in the
content library.


## With formula fields, users can use multiple criteria in a single

search. For example, create a formula field that combines multiple
values such as name and language into a single searchable string.

Presentation Page Product             To extend keyword search capabilities, select which field on the
Search Field                          Presentation Page Product object is searchable. Users can find
presentations by searching on page properties such as linked
products or messages.

Use Data Cloud to search              Use a Data 360 search index so that users can find relevant
presentation content                  presentations by using phrases and related concepts to search
presentation content. See Smart Content Search.

Search Index API Name                 Enter the API name of the Data 360 search index that you created
for searching presentation content. See Set Up Smart Content
Search.

File Types to Index                   Select the file types to index for searching presentation content
with Data 360. PDFs are indexed automatically, and each
additional type consumes extra storage. To maximize search
potential, we recommend indexing HTML files.

5. Under Targeted Presentation Settings, configure these settings as needed.

<!-- page:344 -->




Setting                           Description

Show Next Best Message            Show suggested presentations in the content library based on the
Next Best Messages suggested for an account. Users see other
presentations that have the same assigned product messages. See
Next Best Message.


## Targeting Context

Select the behavior for targeted presentations.

- Warn shows users which presentations are targeted while
providing access to other presentations.
-   Restrict shows users only targeted presentations.

See Set Up Presentation Targeting.

6. Under Presentation Player Settings, select or deselect the options to determine how sales reps can see
and interact with content in the presentation player.
To make sure that sales reps can easily access the presentation player menu, we recommend enabling
these settings at the org level.

Setting                           Description

Show page name in                 To improve navigation and clarity, show the page title instead of
presentation player               the page number.

Use drawing tools in              Users can annotate or draw to circle or highlight content during
presentation player               interactions.

Use laser pointer in              Users can point to content by using a virtual laser pointer.
presentation player


## Show icon to open player menu

Show an icon to open the presentation player.


## When you don't show an icon, users must swipe or tap to open

the menu. In each presentation's details, use the Player Gesture
and Side field to select the side of the page and the motion that
opens the menu.

7. Under Content Library Settings, configure these settings as needed to determine how sales reps can
work with presentations in the content library.

Setting                           Description


## Create custom presentations

In the AFLS mobile app, users can create custom
presentations in the content library by using approved pages from
HTML presentations.

<!-- page:345 -->




Setting                           Description



## To create custom presentations, users must have create and edit

access on the Presentation and Presentation Linked Page objects.

Collapse content categories       To improve navigation, organize the content library into collapsible
categories based on the topics that you define.

8. Under Tracking Settings, configure these settings as needed.

Setting                           Description

Use geolocation tracking          Capture the GPS location where the field user delivered the
presentation.


## Pause tracking when player

launches                          Pause tracking automatically when a presentation starts so that
you don't capture metrics during training sessions. Field users can
select the play icon in the presentation player to start tracking
metrics again.


## Field users can also preview presentations in the content library to

review content without tracking metrics.


## Turn off participant tracking

Don't capture participant metrics such as the content viewed, the
time spent on each page, and the products or messages
presented.


## This setting is useful for organizations with privacy or compliance

requirements or for use cases where there aren't specific
participants.


## Turn off presenter tracking

Don't capture presenter metrics such as the content presented,
the time spent on each page, and the pages shown.


## This setting is useful for organizations with relevant privacy

requirements or for training or internal use cases.

9. Under Access Control Settings, configure these settings as needed.

Setting                           Description

Lock presentation                 Prevent other admins from editing or deactivating presentations
and their pages after the presentation is finalized.


## Lock player on mobile

Automatically lock the presentation player on mobile devices

<!-- page:346 -->




Setting                           Description



## during face-to-face visits. Healthcare professionals (HCPs) can

handle field users' devices and navigate the presentation without
accessing other parts of the app.

To unlock the presentation player, field users enter their PIN code.

10. Under Share Settings, configure these settings to determine how field users can share presentations
with HCPs.

Setting                           Description


## Send presentations as email

attachments                       Users can share presentations as email attachments and select
the specific pages to include. To review the presentation content,
HCPs download email attachments.

In each presentation's details, select Send presentation by email.
The presentation files must also include a PDF version of the
presentation.

Send presentations as email       Users can share presentations as unique links in email content.
links                             HCPs can see the latest version of the presentation content in the
Digital Experience site that you specify without downloading email
attachments. See Send Presentations as Links.


## Days Until Link Expires

When field users send presentations as email links, presentation
links are valid only for the number of days that you specify.


## Access to presentations is also controlled by the presentation’s

activation and expiration date, status, and any other visibility rules.

Digital Experience Site URL       When field users send presentations as email links, HCPs view
presentations in this Digital Experience site. See Create an
Experience Cloud Site for Presentations

11. Under Feedback Settings, select or deselect these options to configure how field users can capture
HCP feedback and complete surveys during or after presentations.

Setting                           Description

Capture feedback in player        Users can capture the HCP's feedback for a page by using thumbs
menu                              up and thumbs down icons in the presentation player menu.


## Capture feedback on

presentation screen               Users can capture the HCP's feedback by tapping or clicking the

<!-- page:347 -->




Setting                            Description



## page in the presentation player. A flash indicates captured

feedback without interrupting the presentation flow.


## In each presentation's details, use the Content Feedback Side field

to select the side of the page where users can capture feedback.

Retake survey                      Users can open a survey that was completed previously and
collect a new, independent set of responses for each interaction.
Previous responses are stored for historical context.

Retake survey and copy last        Users can open a survey that was completed previously with the
response                           most recent responses prepopulated to reduce data entry. Then,
users update or confirm the data before submitting the new
response. Previous responses are stored for historical context.

12. Save your changes.


Create and Manage Presentations

Use a centralized content management hub to manage presentations throughout their lifecycle. Create
presentations by uploading source files, or assemble new presentations from existing pages in your org.
Make sure that field users can access relevant content by linking presentations to specific products and
messages and distributing presentations to specific territories. To help ensure compliance and
consistency, manage version control and activation schedules.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:348 -->




Intelligent Content in the Admin Console




You manage presentations under Intelligent Content in the Admin Console. The Presentations page
provides a centralized view of all of the presentations in your org. In the list of presentations, you can:

- Filter to find the presentation that you need.
- Remove filters to see all presentations.
- Get details about presentations, such as the presentation’s name, whether it’s active, the products that
are linked to it, and when it was last updated.
- See the custom presentations that sales reps created in the content library, and activate or deactivate
custom presentations.
-   Create presentations.
-   Click Edit to update the products and messages associated with presentation pages in bulk.
-   Click Upload to update presentation files and manage content versions.
-   Activate presentations to make them available in the content library.
-   Deactivate presentations so that users can no longer see them in the content library.
-   Remove presentations.


Create Presentations

You can create presentations in one of two ways.

- Upload PDFs or HTML source files.
- Select and combine existing pages into a new presentation.

Edit Presentations

Open a presentation from the list and click Edit. When you edit an existing presentation, you can:

<!-- page:349 -->



- Update presentation settings including the status, activation dates, topics, territory alignment, and so
on.
- Manage the pages in the presentation by adding, reordering, or removing pages.
You can also update existing presentations by editing the products and messages assigned to each page
individually or in bulk. Or, you can upload new versions.


Control Presentation Availability

To make the presentation available for your field users only within a certain period, select dates for
activation and deactivation. Activating the presentation makes it available in the content library only
within that range. If you don't set the activation schedule, the presentation is available until you
deactivate it. If you no longer need a presentation, you can also remove it from the list.


## Create Presentations by Uploading Pages

Upload source files and create presentations. Each page in the presentation file is stored as a unique
presentation page record.
Create Presentations from Existing Pages
Create presentations by selecting and combining from pages from existing presentations. Assembling
presentations by reusing pages makes maintaining content easier and makes your presentations more
consistent.
Monitor the Presentation API Job Queue
Monitor the status of presentations that are uploaded to AFLS for Customer
Engagement via the content management REST API.
Distribute Presentations to Territories
Assign relevant territories to presentations so that only the sales reps for those territories can access
them in the content library.
Edit Products and Messages for Individual Pages
Individual pages can be reused across presentations. View page details and file versions. Update the
products and messages associated with each page, and select whether the page is mandatory for sales
reps to present.
Edit Products and Messages for Pages in Bulk
Easily update multiple pages in a presentation. Assign new products and messages to all presentation
pages, or make several pages mandatory at once.
Reorder Presentation Pages
After you upload presentation files, you can reorder the pages to customize the content or improve
engagement.
Update and Manage Presentation Versions
Create new versions of existing presentations. Upload new presentation files, remove old content, or
reorder the pages.
Remove Presentations
Remove presentations from your org when you no longer need them.

<!-- page:350 -->



Create Presentations by Uploading Pages

Upload source files and create presentations. Each page in the presentation file is stored as a unique
presentation page record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To upload pages and create presentations:               Life Sciences Commercial Admin permission set


Before you can upload a presentation, create the presentation source files. These file types are
supported.

- ZIP files with an HTML file and a JPEG thumbnail for each presentation page
- PDFs
You upload presentations from the Admin Console. For larger files, you can also use the content
management REST API resources. Presentations must meet these file size limits.


Upload Method                        File Type                          File Size Limit

Admin Console                        HTML ZIP files                     1 GB

Admin Console                        PDFs                               500 MB

Content Management REST API          HTML ZIP files                     2 GB

Content Management REST API          PDFs                               200 pages


Presentation files that you upload are stored as Salesforce Files. When you manage presentation content,
keep storage and file size limits in mind. Review all large files for compliance, performance, and storage
impact.


Upload Presentation Pages

1. From the App Launcher, find and select Admin Console.
2. Select Intelligent Content, and then select Presentations.
3. Click Upload New Pages.
4. On the Presentation Files page, select the presentation ZIP files or a single PDF, and then click Upload
Files.
5. After Salesforce validates the presentation files, click Next.

<!-- page:351 -->



The file type that you upload determines the page order in the presentation. To reorder pages, set up
and save the presentation first.


Configure Presentation Pages

In the Presentation Pages window, add products and messages to each page and configure page settings
as needed.

Adding products and messages allows each presentation page to support cross-product content,
scientific data, or targeted messaging and guidance that's aligned with specific products. You can:

- Link each page to one or more products
- Link each page to one or more messages
- Assign a specific product message to each page
- Leave pages unassigned
1. To select the messages and products that you want to link to presentation pages, click Add.
2. Under Products, search for and select the products to assign to presentation pages, and then select
the related product messages.
3. Save your changes.
4. To update pages with the selected products and messages, select the pages, and then click Apply
Products and Messages.
5. Update each page’s name.
For uploaded ZIP files, the default name for each page is based on the file name. For PDFs, the default
name is based on the sequential number of the page, starting at 1.
6. Select whether the pages are mandatory in the presentation.
7. If custom fields are configured, populate them for each page as needed.
8. Click Next.


Configure Presentation Settings

In the Presentation Settings window, finalize the presentation.

1. Give the presentation a name.
2. To determine when the presentation is available in the content library, select dates for activation and
deactivation.
3. To categorize the presentation, create topics.
Sales reps can use these topics to search and filter presentations in the content library.
4. To determine how sales reps and healthcare professionals (HCPs) can interact with content in the
presentation player, customize presentation settings.
a. Select the gesture that opens the presentation player and the side of the screen where it appears.
Select an option that doesn't interfere with the dynamic content in your presentations.
b. Select the side of the presentation player screen where sales reps can capture feedback from HCPs.
Select a location that doesn't overlap with the presentation content.
c. Select whether sales reps can double-tap to magnify content, which can enhance engagement and

<!-- page:352 -->



improve interactions during visits.
d. Enter the name for public content that appears during remote engagements.
The name that you enter helps HCPs understand the content that they’re opening. For example,
Legal Disclaimer.
e. Enter the URL of the public content.
This URL is the direct link that opens the resource for HCPs, such as product or legal information.
f. Select whether sales reps can email presentations to HCPs.
For sales reps to be able to email a presentation, the presentation’s files must include a PDF version
of the presentation.
5. Save your changes.
6. To make the presentation available in the content library, click Activate.
Active presentations are available in the content library within the activation and deactivation dates. If
you don't set activation and deactivation dates, the presentation is available until you deactivate it.

After you create the presentation, you can open it from the presentation list view to edit its settings and
add or reorder pages. You can also upload new pages, distribute the presentation to specific territories,
or deactivate it so that it’s no longer available for use.

See Also
Salesforce Files


Create Presentations from Existing Pages

Create presentations by selecting and combining from pages from existing presentations. Assembling
presentations by reusing pages makes maintaining content easier and makes your presentations more
consistent.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create presentations:                              Life Sciences Commercial Admin permission set


When you create a presentation from existing pages, your new presentation references the original pages
rather than creating copies. Any updates to the original page are reflected automatically in all
presentations that use that page.

1. From the App Launcher, find and select Admin Console.
2. Select Intelligent Content, and then select Presentations.
3. Click Use Existing Pages.

<!-- page:353 -->



4. Enter a presentation name.
5. Enter details about the presentation as needed.
- To categorize the presentation, create topics.
- Select how sales reps and healthcare professionals (HCPs) can open the menu, capture feedback,
and zoom in on content in the presentation player.
- To make the presentation available in the content library only within a certain period, select dates
for activation and deactivation.
- To include links to product or legal information that HCPs can access during remote sessions, enter
the name and URL for the public content.
6. Under Presentation Pages, click Add.
7. Search for and select the pages that you want to use.
You can select only active presentation pages.
8. Select the territories to distribute the presentation to.
See Distribute Presentations to Territories
9. Save your changes and activate the presentation.
Activating the presentation makes it available in the content library within the activation and
deactivation dates. If you don't set these dates, the presentation is available until you deactivate it.

After you create the presentation, you can open it from the presentation list view to edit its settings and
add or reorder pages. You can also upload new pages, or deactivate the presentation so that it’s no
longer available for use.


Monitor the Presentation API Job Queue

Monitor the status of presentations that are uploaded to AFLS for Customer Engagement
via the content management REST API.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To see the API job queue:                             Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Intelligent Content, and then select API Job Queue.
3. In the job queue, view the status of presentations uploaded through the content management REST
API.
You can see each job’s name, type, status, who initiated the job, and when the job started.

<!-- page:354 -->



Distribute Presentations to Territories

Assign relevant territories to presentations so that only the sales reps for those territories can access
them in the content library.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To distribute presentations:                           Life Sciences Commercial Admin permission set


Before you distribute email templates to territories, configure account territories and the territory
hierarchy.

1.    From the App Launcher, find and select Admin Console.
2.    Select Intelligent Content, and then select Presentations.
3.    Open a presentation, and then click Edit.
4.    Under Territory Distribution, search for the territory name, or expand the territory alignment tree to
find the right territory.
5.    To select territories that aren’t aligned with the products assigned to the presentation pages, turn on
Select unassigned territories.
6.    To select individual territories to distribute the presentation to, select the checkboxes.
7.    To assign the presentation to a parent territory and all child territories, double-click the parent
checkbox.
If you assign a presentation to a parent territory, all existing and new child territories are also aligned
to that presentation.
8.    Save your changes.


## See Also

Set Up Sales Territories for AFLS


Edit Products and Messages for Individual Pages

Individual pages can be reused across presentations. View page details and file versions. Update the
products and messages associated with each page, and select whether the page is mandatory for sales
reps to present.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:355 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To update presentation pages:                        Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Intelligent Content, and then select Pages.
3. Sort or filter the list to find the page that you want.
The Active column shows whether the page is active and available to use in presentations. You can
also see details such as the file type, linked products, and the version number.
4. Open a page, and then click Edit.
5. Edit the page’s details. These properties are editable.
- Whether the page is mandatory for sales reps to present.
- The email template associated with this presentation page. If you configure the template in the
presentation file’s HTML, and if sales reps start an email from this presentation page, the email uses
this template by default.
- The products and messages associated with the page.
- Any custom field values in the Reporting section.
6. Save your changes.
The previous page version is deactivated. If the page was already active, the new page version is active
automatically.

After you save your changes, you can activate or deactivate the page. If you deactivate the page, you
can’t activate it again.


Edit Products and Messages for Pages in Bulk

Easily update multiple pages in a presentation. Assign new products and messages to all presentation
pages, or make several pages mandatory at once.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To update presentation pages in bulk:                Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.

<!-- page:356 -->



2. Select Intelligent Content, and then select Presentations.
3. Sort or filter to find the presentation that you want to update in the list, and then click Edit.
4. On the Presentation Pages page, select additional products and messages, and then apply them to the
presentation’s pages.
5. Update each page’s attributes such as its name, whether it’s a mandatory page in presentations, and
custom field values.
6. Click Next.
7. Adjust the presentation settings, if necessary.
8. Save your changes.


Reorder Presentation Pages

After you upload presentation files, you can reorder the pages to customize the content or improve
engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To reorder presentation pages:                       Life Sciences Commercial Admin permission set


When you upload a presentation in the Admin Console, the file type determines the page order.

- PDF pages follow the sequence in the document.
- HTML pages follow the file order in the ZIP folder.
After you upload and save the presentation, you can reorder pages manually.

1.    From the App Launcher, find and select Admin Console.
2.    Select Intelligent Content, and then select Presentations.
3.    Open a presentation, and then click Edit.
4.    Under Presentation Pages, drag pages to reorder them.
5.    Save your changes.


Update and Manage Presentation Versions

Create new versions of existing presentations. Upload new presentation files, remove old content, or
reorder the pages.

<!-- page:357 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To upload new pages and manage presentation          Life Sciences Commercial Admin permission set
versions:


Note When you update presentation content from the Admin Console, you must upload the entire
presentation file again. To update individual pages, use the Content Management REST API.


1.    From the App Launcher, find and select Admin Console.
2.    Select Intelligent Content, and then select Presentations.
3.    Sort or filter the list to find the presentation that you want to update, and then click Upload.
4.    Select the new presentation ZIP files or PDF to upload.
5.    After Salesforce validates your selected files, click Next.
6.    Under Presentation Pages, in the Page to Update column, select the existing presentation page to map
the new file to.
If the page names match, the new file is mapped to the existing presentation page automatically.
7.    If needed, apply products and messages, reorder the pages, update page names, and update which
pages are mandatory.
8.    Click Next.
9.    Adjust the presentation settings, if necessary.
10.    Save your changes.
Uploading new presentation files increases the number of presentation and page versions
automatically and deactivates the previous versions.


## See Also

AFLS Developer Guide: Content Management


Remove Presentations

Remove presentations from your org when you no longer need them.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:358 -->




USER PERMISSIONS NEEDED

To remove presentations:                               Life Sciences Commercial Admin permission set


Removing a presentation from the Intelligent Content tile in the Admin Console updates the
presentation record's status to Deleted but doesn't delete the record permanently. The presentation
record remains in Salesforce for auditing and data integrity.

1. From the App Launcher, find and select Admin Console.
2. Select Intelligent Content, and then select Presentations.
3. Sort or filter the list to find the presentation that you want to remove.
4. Click Remove (      ).

After you remove the presentation, update the related files in Salesforce Files manually to make sure
that:

- No presentation pages reference the files
- Your organization doesn't require the content for compliance, reporting, or audit purposes

Important Always validate regulatory and data retention requirements before you delete files.
Deleting files permanently can impact audit trails and historical reporting.


Recommended and Targeted Presentations

Help your field users deliver the most relevant and effective content for each account and healthcare
professional (HCP). Targeted presentations help to make sure that users see and present only the right
content. Recommended presentations suggest the best content to use during interactions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Use recommended and targeted presentations together or separately to meet your business needs. This
approach makes sure that your field teams can access presentations in alignment with your engagement
strategy, compliance requirements, and regional practices.


## Set Up Recommended Presentations

Define recommended presentations to help sales reps engage more effectively with their accounts.
When users open the content library or the presentation player from an account, they can filter by
recommended presentations to select the best content for that account and territory.
Set Up Presentation Targeting
To help field users see the right materials and show content to the right audiences, target

<!-- page:359 -->



presentations to specific accounts and territories. Guide users to the most appropriate presentations
for their context, or show users only presentations that are specifically targeted. Show warnings if sales
reps add accounts that aren’t targeted to a presentation, or prevent reps from adding accounts that
aren’t targeted.


Set Up Recommended Presentations

Define recommended presentations to help sales reps engage more effectively with their accounts.
When users open the content library or the presentation player from an account, they can filter by
recommended presentations to select the best content for that account and territory.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up recommended presentations:                 Life Sciences Commercial Admin permission set


When you create and save presentations in the Admin Console, Salesforce automatically generates
unique IDs for each presentation record. Before you set up recommended presentations, open the list of
presentation records from the App Launcher and add the Presentation ID field to the list view.

Find and save the IDs for the presentations that you want to recommend. Select recommended
presentations based on engagement history, account profiles, and preferences or specialties.

1. To populate Provider Account Territory Info records and permissions, run the Align Account to Territory
batch job.
2. On each Provider Account Territory Info record, update the Recommended Presentation Information
field.
In JSON format, enter the IDs of the presentations to recommend and the order to recommend them
in.

{
"Data": [
{ "Id": <presentation id>, "Order": 1 },
{ "Id": <presentation id>, "Order": 2 }
]
}


3. Save your changes.

<!-- page:360 -->



Set Up Presentation Targeting

To help field users see the right materials and show content to the right audiences, target presentations
to specific accounts and territories. Guide users to the most appropriate presentations for their context,
or show users only presentations that are specifically targeted. Show warnings if sales reps add accounts
that aren’t targeted to a presentation, or prevent reps from adding accounts that aren’t targeted.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up presentation targeting:                    Life Sciences Commercial Admin permission set


Before you set up presentation targeting, find the Source System IDs of the presentations from the App
Launcher or from the Intelligent Content tile in the Admin Console. Source System IDs are unique,
customer-provided IDs on presentation records.

1. To populate Provider Account Territory Info records and permissions, run the Align Account to Territory
batch job.
2. On each Provider Account Territory Info record, update the Targeted Presentation Information field.
Enter a semicolon-delimited list of the presentation Source System IDs to target to that account and
territory.

1111;2222


3. From the App Launcher, find and select Admin Console.
4. Select Intelligent Content, and then select Presentation Settings.
5. Under Targeted Presentation Settings, set the targeting context to determine the presentations that
users can see and the accounts that they can add.

Warn                                                Use the Warn context to guide users to the most
appropriate content while still providing access
to other presentations.
- Sales reps can see which presentations are
targeted for a healthcare professional (HCP)
during a visit.
- Sales reps can add accounts that aren’t
targeted to a presentation, but they see a
warning.

Restrict                                              Use the Restrict targeting context for regulated

<!-- page:361 -->




environments, sensitive content, or to enforce
compliance.
- Sales reps can see only presentations that are
targeted for the current account during a visit.
- Sales reps can add only targeted accounts to a
presentation.

6. Save your changes.


Smart Content Search

Expand your search beyond just presentation names and metadata properties. Use Data 360 to create an
index of searchable strings from your presentation content. In the content library, your field users can
find presentations by searching within presentation content and see why presentations match their
search terms.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


How the Search Index Works

To create a search index, Data 360 processes raw presentation file text, extracts its meaning, and chunks
presentation content into manageable, semantically meaningful units. Then, Data 360 generates vector
embeddings from the chunks and adds them to your search index. The vector embeddings for your
presentation content capture the meaning, context, and relationships between concepts.

After the vector embeddings are added to the search index, your field users can perform vector searches
to find the right presentation quickly, even when they don't know the exact presentation title or tag.
Vector searches return results based on your users' search intent and semantic similarity. Search results
are ranked by a relevance score, and users only see presentations with a score of 75% or higher to
ensure high confidence matches.


How Smart Content Search Works

In the content library, field users search to find approved presentations for interactions with healthcare
professionals (HCPs). In a search for “autoimmune disease outcomes,” smart content search returns
presentations that contain content about autoimmune conditions, clinical outcomes, or related concepts
and terminology. Search results for "heart disease" include presentations that discuss cardiovascular risk,
cardiac outcomes, or coronary conditions, even if the content doesn't include the search terms.

<!-- page:362 -->



Smart content search requires online access. When users are offline, search results include standard
keyword-based matches on presentation names, tags, and metadata properties.


## Set Up Smart Content Search

Use Data 360 to create a vector search index of searchable strings from your presentation content.


Set Up Smart Content Search

Use Data 360 to create a vector search index of searchable strings from your presentation content.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up Data Cloud:                                Data Cloud Architect permission set

To configure presentations and settings:             Life Sciences Commercial Admin permission set


Before you set up smart content search, make sure that Data 360 is set up for your Salesforce org. See
Set Up Data 360 for AFLS for Customer Engagement.


Note If you upload a presentation before you set up smart content search, the presentation content
isn't included in your search index. To make older content searchable, upload new versions of
existing presentations.


1. Deploy the Life Sciences Data Kit.
The Life Sciences Data Kit sets up the presentation data streams, data model objects (DMOs), and
data lake objects (DLOs) that support smart content search.
2. In Data 360, verify that these presentation data streams were created as part of the Life Sciences Data
Kit installation. If you don’t see these data streams, create them manually.
- Presentation_Home
- PresentationPage_Home
- PresentationLinkedPage_Home
3. Set up file attachment ingestion so that Data 360 can ingest the files that are attached to presentation
page records and include the file content in your search index.
This configuration sets up data streams for and maps DLOs and DMOs to these Salesforce objects.
- Content Document
- Content Document Link
- Content Version Home
4. Create a vector search index by using the advanced setup option and these values.

<!-- page:363 -->



When you save your search index, take note of the search index configuration's API name. You need it
when you configure presentation settings.

Page                             Section, Field, or Button         Value

Search Type and Source Object    Select Search Type                Vector Search

Search Type and Source Object    Select Source Object              Presentation Page

Chunking                         Select Fields to Chunk            Select at least one field to use
for chunking.

Chunking                         Include File Attachments
Select Include File
Attachments, and then select
Content Document Version.


## This setting makes sure that the

presentation page file
attachments are included in the
search index.

Vectorization                    Select embedding Model
Select any model.


## The embedding model that you

select affects search quality and
relevance.

5. Assign and update Data 360 permission sets.
a. To enable users to search within presentation content in the content library, assign them the Data
Cloud User permission set.
b. In the App Permissions for the Data Cloud Salesforce Connector permission set, make sure that the
Query Non Vetoed Files permission is enabled.
6. In the Life Sciences Commercial app, configure presentation settings.
a. From the Admin Console, select Intelligent Content, and then select Presentation Settings.
b. Under Search Settings, select Use Data Cloud to search presentation content.
c. Enter the API name of the Data 360 search index that you created for presentations and
presentation pages.
d. Select the file types to include in your search index for presentation content.
We recommend indexing HTML files. PDF files are indexed automatically.
e. Save your changes.


## See Also

Billing Considerations for Unstructured Data and Search Index


Send Presentations as Links

Help your users improve engagement with healthcare professionals (HCPs) by sending presentations as

<!-- page:364 -->



secure links. Field users can select multiple presentations and embed links automatically into approved
email templates, and HCPs can review presentations in a dedicated portal without downloading email
attachments. Links reflect the latest version of the presentation and expire after a defined amount of
time, so HCPs know they’re seeing the most up-to-date content. Rich engagement data—including pages
viewed, time spent per page, and the HCP’s navigation path—helps you to optimize presentations for
future interactions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


When field users email presentations to HCPs, the presentation links are generated automatically just
before the email is sent. To generate unique links, Salesforce creates a presentation party access record
for each presentation, account, and sharing event that includes:

- The email recipient
- The start and end dates for when the link is valid
- The link's unique access identifier token
Links are valid only for the amount of time that you define, and recipients lose access to deactivated
presentations automatically. If the HCP forwards the email or shares the link, the link expiration dates
and visibility controls still apply.

1. Create an Experience Cloud Site for Presentations
Provide healthcare professionals (HCPs) with secure, token based access to a dedicated portal for
reviewing presentations. When field users share presentations as email links, HCPs can view content in
the presentation player without logging in or downloading attachments. In your Experience Cloud site,
HCPs always see the latest version of the presentation content, and AFLS for Customer
Engagement tracks presentation metrics and engagement data.
2. Configure Guest User Access for Your Presentation Site
Assign required permission sets so that healthcare professionals (HCPs) can open email links and view
presentations in your Experience Cloud site without logging in.
3. Configure Email Templates and Presentation Settings
Update the email templates that support sharing presentations with healthcare professionals (HCPs).
Configure presentations and settings so that field users can share presentations as unique links in the
email content. Together, these settings provide control over where presentation links appear and what
presentations users can share.


Create an Experience Cloud Site for Presentations

Provide healthcare professionals (HCPs) with secure, token based access to a dedicated portal for
reviewing presentations. When field users share presentations as email links, HCPs can view content in

<!-- page:365 -->



the presentation player without logging in or downloading attachments. In your Experience Cloud site,
HCPs always see the latest version of the presentation content, and AFLS for Customer
Engagement tracks presentation metrics and engagement data.


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

To customize or publish an Experience Cloud site:
Create and Set Up Experiences AND View Setup
and Configuration AND be a member of the site

OR


## View Setup and Configuration AND be a member

of the site AND have appropriate role-based site
access

To assign Permission sets:                            Manage Profiles and Permission Sets


Before you create an Experience Cloud site, enable digital experiences.

1. Create an Experience Cloud site by using an Aura Template.
If you created an Experience Cloud site for remote engagement sessions, you can add a new page to
that site instead.
2. From Builder, create a page for viewing presentations.
3. Select Components and then drag the Presentation Player Digital Experience component to the
page.
You can find the Presentation Player Digital Experience component under Custom Components or by
using the search bar.
4. For language support, select Components and drag the Language Selector component to the page.
5. In Properties, set Page Access to Public.
6. Publish the site.
7. Assign the Access Presentation Player for Digital Experience permission set to guest users.
Updating the guest user profile allows healthcare professionals (HCPs) to view presentations in your
Experience Cloud site without logging in.

<!-- page:366 -->



8. Grant accounts access to your Experience Cloud site.
These steps grant access to your sites to specific permission sets or profiles. If you have an Experience
Cloud site for remote engagement sessions and you've granted access to the site, skip this step.
9. In the Builder's general settings for the page, find and save the presentation page URL. You need it
when you configure presentation settings in Life Sciences Commercial.
This URL directs emailed links to open presentations in your Experience Cloud site.
10. Activate the site.


## See Also

Customize Sites with Experience Builder
Manage Your Site's Pages and Their Properties in Experience Builder


Configure Guest User Access for Your Presentation Site

Assign required permission sets so that healthcare professionals (HCPs) can open email links and view
presentations in your Experience Cloud site without logging in.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To customize or publish an Experience Cloud site:
Create and Set Up Experiences AND View Setup
and Configuration AND be a member of the site

OR


## View Setup and Configuration AND be a member

of the site AND have appropriate role-based site
access

To assign Permission sets:                            Manage Profiles and Permission Sets


1. From Setup, in the Quick Find box, search for and select All Sites under Digital Experiences.
2. Select Builder next to your Experience Cloud site for presentations.
3. In the Builder, select Settings.
4. From the General settings, select the guest user profile.
The profile overview page opens in Setup.
5. Select Assigned Users.
6. Open the record for the Site Guest User that's associated with your Experience Cloud site.
The Site Guest User represents all unauthenticated visitors who access your Experience Cloud site

<!-- page:367 -->



from email links.
7. Under Permission Set Assignments, select Edit Assignments.
8. Move the Access Presentation Player for Digital Experience permission set to the Enabled Permission
Sets list.
9. Save your changes.
Guest users can now open email links to view presentations in your Experience Cloud site.


Configure Email Templates and Presentation Settings

Update the email templates that support sharing presentations with healthcare professionals (HCPs).
Configure presentations and settings so that field users can share presentations as unique links in the
email content. Together, these settings provide control over where presentation links appear and what
presentations users can share.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up email templates and configure              Life Sciences Commercial Admin permission set
presentation settings:


Before you configure email templates and presentation settings, create or update the Digital Experience
site where HCPs can view presentations. Take note of the presentation page URL.

To help ensure compliance, you must complete four steps before users can send presentations as links:

- Add placeholders for links in the email template content.
- Configure the email template record.
- Configure sharing settings for presentations.
- Configure the presentation record.
When configured, users can share links to approved presentations only in email templates that are
authored and configured for that purpose.

1. In the email template ZIP file, update the index.html file. Include this placeholder where you want
presentation links to appear in the email.

<div class="LSC_PresentationLinks" ></div>


Just before the email is sent, Salesforce generates the presentation links and inserts them where you
add this placeholder.

<!-- page:368 -->



2. Upload the email template ZIP file and configure email templates in Life Sciences Commercial.
a. From the Admin Console, find and select Email, and then select Email Templates.
b. Create an email template or upload a new version of an existing template.
c. In the email template details, select Send presentations as links.
3. Configure sharing settings for presentations in Life Sciences Commercial.
a. From the Admin Console, find and select Intelligent Content.
b. Select Presentation Settings, and then scroll to Sharing Settings.
c. Select Send presentations as links.
You can also select Send presentations as attachments so that users can share presentations in
both ways.
d. Enter how many days the links are valid for.
The presentation’s activation and expiration dates, status, and any other visibility rules also control
access to presentations.
e. Enter the URL of the Digital Experience site where HCPs can view presentations.
f. Save your changes.
4. In each presentation's settings, set which presentations sales reps can send by email.
Field users can email only these presentations to HCPs. Email actions aren't available for other
presentations.
a. From the Admin Console, find and select Intelligent Content.
b. On the Presentations page, create a presentation or open an existing one to edit its settings.
c. In the presentation settings, select Send presentation by email.
d. Repeat these steps for each presentation that you want sales reps to be able to share with HCPs as
email links.


## See Also

Create an Experience Cloud Site for Presentations
Configure Presentation Settings
Create Presentations by Uploading Pages
Guidelines for Life Sciences Email Templates


Understand Mandatory Pages in Presentations

Mandatory presentation pages help to keep interactions compliant by making sure that field users
present specified key messages, disclaimers, or safety information. When you configure presentations,
you can designate specific pages as mandatory to prevent users from bypassing or overlooking critical
content.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:369 -->




Mandatory Pages in Setup

You designate pages as mandatory when you set up and manage presentations in the Admin Console.
First, work with your legal or compliance teams to define the required pages for field users to present.
Then, when you upload presentation files or when you edit presentation pages individually or in bulk,
mark pages as mandatory.

When you define mandatory pages, keep these considerations in mind.

- Mandatory pages represent content that users must show at least one time per presentation session.
- You can mark one or more pages as mandatory within a presentation.
- If a mandatory page contains multiple slides, all slides within that page are mandatory.

Mandatory Pages in Custom Presentations

AFLS for Customer Engagement helps to make sure that custom presentations meet your
organization's compliance guidelines. When your field users create custom presentations, required pages
are denoted with an asterisk. If users add another page from a presentation that has mandatory pages,
they must add all mandatory pages to their presentation. To remove a mandatory page, they must
remove all other pages from that presentation too.


Mandatory Pages in the Presentation Player

During interactions with healthcare professionals (HCPs), users can navigate presentations freely in the
content library and the presentation player. In the presentation player, AFLS for Customer
Engagement:

- Denotes mandatory pages with an asterisk
- Tracks whether users have presented all mandatory pages
- Prevents users from closing or switching presentations before they share required content by
displaying a message and highlighting the mandatory pages


Understand Presentation Metrics

When sales reps deliver presentations, metrics are tracked during the interaction so that you can get
detailed insights into usage and performance. Engagement data is captured in presentation click stream
entry records. To analyze engagement and improve presentation strategy, build custom reports and
dashboards by using presentation click stream entry data.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:370 -->




package.


When Metrics Are Tracked

When and how metrics are tracked can vary.

- The metrics that are tracked depend on whether settings such as participant tracking or presenter
tracking are enabled.
- When sales reps present content during a visit, records are synced to Salesforce after the visit is saved
or submitted.
-    When you cancel a presentation, metrics aren’t tracked.
-    When session tracking is paused, metrics aren’t tracked or associated with the related visit. Users see a
reminder on each presentation and page so that they can start or resume tracking when it’s
appropriate.


What Metrics Are Tracked

Each page in the presentation can contain multiple slides, and one record is created for each slide
presented. Metrics are tracked when users spend at least 3 seconds on a slide.

Tracked metrics for each slide can include:

- Presentation details, including pages and content versions.
- Products, messages, and guidance related to presentation pages.
- Information about the related healthcare professional (HCP) account and the visit or remote
engagement during which metrics were captured.
-    Details about how the participant accessed the presentation, including their browser, device type, and
operating system.
-    Timestamps for when the user opened and left a page, and the total time spent on the page.
-    Content feedback from the participant during or after the presentation.

For details about all metrics collected, see PresentationClickStrmEntry in the AFLS
Developer Guide.


## See Also

Reports and Dashboards


Intelligent Content Reference

Create the content and source files for Life Sciences Customer Engagement presentations and email
templates.

<!-- page:371 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Guidelines for Life Sciences Email Templates

Create predefined email templates with dynamic variables, rich text, content fragments, and advanced
queries so that field users can send personalized emails to healthcare professionals (HCPs). In the
email template ZIP file, include structured layouts, images, text, fragments, and attachments. Then,
admins can upload the ZIP files to Life Sciences Customer Engagement and create email templates.
Guidelines for Life Sciences Presentations
Create presentation source files that admins can upload to Life Sciences Customer Engagement and
distribute to sales reps. To personalize content for healthcare professionals (HCPs) and healthcare
organizations (HCOs), include dynamic content in presentation files. Life Sciences Customer
Engagement supports two types of source files for presentations: ZIP files and PDFs.


Guidelines for Life Sciences Email Templates

Create predefined email templates with dynamic variables, rich text, content fragments, and advanced
queries so that field users can send personalized emails to healthcare professionals (HCPs). In the email
template ZIP file, include structured layouts, images, text, fragments, and attachments. Then, admins
can upload the ZIP files to Life Sciences Customer Engagement and create email templates.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Email Template ZIP Files

Create a ZIP file that contains email template data. In Life Sciences Customer Engagement, admins
upload these ZIP files to create and share email templates with field users.
Dynamic Capabilities for Email Templates
Life Sciences Customer Engagement uses a Mustache template processor to process and display
dynamic content in email templates. Before a page loads, data is collected as a JSON string and fed
into the Mustache template processor, which uses it to fill in the content placeholders in the email
template. In the Send Email window, users see the populated email template.

<!-- page:372 -->



Email Template ZIP Files

Create a ZIP file that contains email template data. In Life Sciences Customer Engagement, admins
upload these ZIP files to create and share email templates with field users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


In each email template ZIP file, include these content types.


Content                             Required                          Description


## Index HTML File                     Required

An HTML file that contains the
HTML code for the email
template. Salesforce inserts the
HTML file content into email
bodies. The file name must be
index.html.


## To use several languages within a

single email template so that
users can send emails based on
the recipient’s language, include
1 additional index.html file for
each language in the ZIP file. In
the file name, include a
language suffix to match the ISO
code, for example,
index_en_US.html or
index_fr.html. ISO codes are
case-sensitive.


## Thumbnail File                      Required

A JPG file to use as the preview
image for the email template.
The file name must be
thumbnail.jpg.

- The thumbnail file size limit is
2.97MB.

<!-- page:373 -->




Content                           Required                           Description


- The optimal image resolution
is 220x280 pixels.



## Attachments Folder                Optional

A folder that contains email
attachments. The folder name
must be attachments.

- These attachment formats are
supported:
- Documents
- Images
- Audio
- Video
- Archives
-    To mark attachments as
required, include a
required__ prefix in the file
name. Users can’t deselect,
modify, or remove these
attachments.
-    Attachment file names can’t
include semicolons.
-    For emails to process correctly,
attachments must be under 6
MB.


Fragments Folder                  Optional                           A folder of fragments, which are
HTML content blocks that users
can combine in the email body
text to customize the email. The
folder name must be
fragments.


This example email template shows the customer's name and the sales rep’s name. For information
about the attributes that you can include in the template, see Supported Attributes in Email Templates.


<!DOCTYPE html>
<html>
<body>
<p>

<!-- page:374 -->




Hi {{recipient.name}}, this is an email from a {{sende
r.firstname}}
{{sender.lastname}}
</p>
</body>
</html>



Dynamic Capabilities for Email Templates

Life Sciences Customer Engagement uses a Mustache template processor to process and display
dynamic content in email templates. Before a page loads, data is collected as a JSON string and fed into
the Mustache template processor, which uses it to fill in the content placeholders in the email template.
In the Send Email window, users see the populated email template.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Supported Attributes in Email Templates

Using Mustache variables, you can access Life Sciences Customer Engagement attributes dynamically
from an email template.
Supported Content in Email Templates
Add additional content into email template HTML and ZIP files.
JSON Structure for Email Templates
Understand the hierarchy and structure of the JSON properties that are available to the Mustache
template processor in Life Sciences Customer Engagement email templates.
Querying Data in Email Templates
Query Life Sciences Customer Engagement data in email templates and show results in emails.


Supported Attributes in Email Templates

Using Mustache variables, you can access Life Sciences Customer Engagement attributes dynamically
from an email template.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:375 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


These attributes are supported only for email templates in the AFLS mobile app. When
users send emails on desktop, only attributes on the user and account objects, which represent the email
sender and recipient, are supported.


Supported Formula Fields

Formula fields are supported as variables in Life Sciences email templates only for the user and account
objects, which represent the email sender and recipient.

All standard formula operators and functions are supported in the Life Sciences Customer Engagement
mobile app except for these.

- CURRENCYRATE
- DISTANCE
- GETRECORDIDS
- GETSESSIONID
- HTMLENCODE
- HYPERLINK
- IMAGEPROXYURL
- INCLUDE
- ISCLONE
- JSENCODE
- JSINHTMLENCODE
- JUNCTIONIDLIST
- LINKTO
- REQUIRESCRIPT
- URLENCODE
- URLFOR
- VLOOKUP

Supported Object Attributes

All populated fields on these objects and their associated objects are supported as variables in Life
Sciences email templates. If you use lookup or relationship fields as variables, the ID of the related
record shows in the email body. Enter all field names in lowercase.


Object                              Description                         Format

sender                              Fields on the User object, which     {{sender.fieldname}}
represents the email sender.

sender.userAdditionalInfo           Fields on the associated             {{sender.useradditionalin

<!-- page:376 -->




Object                           Description                          Format

UserAdditionalInfo object.           fo.fieldname}}

sender.lifeScienceMobileApp      Fields on the                        {{sender.lifescimobileapp
associated LifeScienceMobileAp       .fieldname}}
p record.

recipient                        Fields on the Account object,        {{recipient.fieldname}}
which represents the email
recipient.

recipient.healthcareProvider     Fields on the associated             {{recipient.healthcarepro
HealthcareProvider object.           vider.fieldname}}

recipient.healthcareProviderSpec                                      {{recipient.healthcarepro
ialty                            Fields on the associated             viderspecialty.fieldname}
HealthcareProviderSpecialty
}
object.


## Returns a single primary

specialty. Returns only active
records that are set to isPrimary,
ordered by preference rank.

recipient.contactPointAddress                                         {{recipient.contactpointa
Fields on the associated             ddress.fieldname}}
ContactPointAddress object.

Addresses are used in this order.

- If the preferred address is set
on the related
ProviderAcctTerritoryInfo, that
address is used.
-   If the preferred address isn’t
set but a related
ContactPointAddress record is
set to primary, that address is
used.
-   Otherwise, the primary
address that was created most
recently is used.
-   If there’s no recent primary
address, the address that was
created most recently is used.

<!-- page:377 -->




Object                            Description                          Format

recipient.contactPointEmails                                           {{recipient.contactpointe
Fields on the associated             mails.0.fieldname}}
ContactPointEmail object.


## Returns only records that are set

to isPrimary, ordered by
preference rank.

recipient.contactPointPhones                                           {{recipient.contactpointp
Fields on the associated             hones.0.fieldname}}
ContactPointPhone object.


## Returns only records that are set

to isPrimary, ordered by
preference rank.

recipient.contactPointSocials                                          {{recipient.contactpoints
Fields on the associated             ocials.0.fieldname}}
ContactPointSocial object.


## Returns the records that were

updated most recently first.

visit                                                                  {{visit.fieldname}}
Fields on the Visit object.


## Supported in email templates for

remote engagement invitations.

visit.providerVisit               Fields on the associated             {{visit.providervisit.fie
ProviderVisit object.                ldname}}


Supported Variables

These variables are supported in email templates.


Variable                                             Description

surveyDeveloperName                                  The developer name of a survey. To reference this
variable, include {{surveyDeveloperName}} in
the email template.

surveyInvitationLink                                 A link to a survey. To reference this variable,
include {{surveyInvitationLink}} in the
email template.

remotesession.url                                    The URL that’s generated for a remote session

<!-- page:378 -->




Variable                                             Description


## with a specific account. This variable is supported

in email templates for remote engagement
invitations.


Supported Content in Email Templates

Add additional content into email template HTML and ZIP files.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


DateTime Picker

Add a date, time, or date and time picker to an email template.

Add a date picker without a predefined date so that the current date is prepopulated. Use a span
element with the LSC_DateTimeInput class, for example:


<span class="LSC_DateTimeInput">
</span>


Add a time picker without a predefined time so that the current time is prepopulated. Use a span
element with the LSC_DateTimeInput class and a time attribute, for example:


<span class="LSC_DateTimeInput" time>
</span>


Add a time picker without a predefined time and with a time zone stamp so that the current time is
prepopulated with the time zone. Use a span element with LSC_DateTimeInput class and a time
timezone attribute, for example:


<span class="LSC_DateTimeInput" time timezone>
</span>


Add a date or time picker with a predefined value. Use a span element with LSC_DateTimeInput
class, and include the predefined date or time value inside the class, for example:

<!-- page:379 -->




<span class="LSC_DateTimeInput">
30/07/2025
</span>



Deep Link Tokens

Add the ability to use a token and a link within an email template so that healthcare professionals (HCPs)
can easily open and log into their company site. A Salesforce admin must first add a custom field to the
account object to store the required tokens. For example, a Salesforce admin adds these custom fields to
the account object.

-     orchestrationlogintokenlong__c
-     orchestrationlogintokenshort__c

In the email template, you can use these Mustache variables to insert the token into the link.

-     {{recipient.orchestrationlogintokenlong__c}}
-     {{recipient.orchestrationlogintokenshort__c}}

For example, this link uses a token.


https://examplesite.com/portal?token={{recipient.orchestrationlogintokenlon
g__c}



Dropdown Fields and Values

Add dropdown fields with predefined text or URL values to an email template. Users can select these
sections or tags in the template and preview the content before they send the email.

To add a dropdown and values, use a span element with the LSC_DropDownInput class. These
attributes are supported.


Attribute                                         Description

option                                            The predefined values for the dropdown. You can
configure several options, but users can select
only one.

default                                           The default value for the dropdown.

link                                              A dropdown value that’s a URL link. Include the
URL address and link text.


## subject

Dropdown values with this parameter can override

<!-- page:380 -->




Attribute                                           Description



## the email template subject so that users can select

from predefined email subjects.


## The subject parameter supports recipient

attributes, for example, “Hello, dear
{{recipient.fieldname}}.”


See this example.



<span class="LSC_DropDownInput">
<span>option1</span>
<span link="https://www.google.com">option2</span>
<span default>option3</span>
</span>
<span class="LSC_DropDownInput" subject>
<span>option1 subject</span>
<span default link="https://www.google.com">option2 subject</span>
<span>option3 subject</span>
</span>



Fragments

Email fragments are pieces of HTML code that users can select and combine in the body of an email to
customize the content. In the email template ZIP file, add the email fragments in the fragments folder.
Fragment file names are mapped to fragment record names in Salesforce.

To enable users to select fragments in the email body, add the LSC_EmailFragments class to the
template’s index.html file. These attributes are supported.


Attribute                                           Description

min
The minimum number of fragments that users can
select for the template.

- To make fragment selection optional, set
min="0" .
- To make fragment selection mandatory, enter
any number that's greater than 0.


max                                                 The maximum number of fragments that users

<!-- page:381 -->




Attribute                                          Description

can select for the template.


See this example.


<table class = "LSC_EmailFragments" min="1" max="3">
</table>


When you include fragments in your email template, keep these considerations in mind.

- Enclose fragments in a <table> tag.
- To render fragments correctly, enclose fragments in <tr><td> tags.
- To include images or links, use the <a href> tag.
- You can include other attributes supported for Life Sciences Customer Engagement.
- You can’t include HTML start and end tags, such as <HTML> or <BODY> .
See this fragment example.


<tr>
<td>
<table>
<tr>
<td>
<a href="https://www.google.com/">Link</a>
</td>
</tr>
</table>
</td>
</tr>



Presentation Links

Add a placeholder for presentation links where you want links to appear in the email content. In the
Send Email window, users can see the presentation names and links, reorder them, and delete them.
When users share presentations, links are generated automatically and inserted in the email. See Send
Presentations as Email Links.

To add a rich text section in an email template, add an element with the LSC_PresentationLinks
class, for example:


<div class="LSC_PresentationLinks">
</div>

<!-- page:382 -->




Rich Text Section

Add a rich text section to the email template. When users preview email content, they can select these
sections to enter and format text before they send the email.

To add a rich text section in an email template, add an element with the LSC_RichTextInput class,
for example:


<div class="LSC_RichTextInput">
</div>


When you include a rich text section in your email template, keep these considerations in mind.

- To make the rich text field mandatory, add the required=”true” attribute.
- To use the LSC_RichTextInput class with predefined text, include only the text, text tags, such as
<p> and <span> , and text formatting tags, such as <i> and <b> .
- The template styling controls the text size in the rich text section.
When users send emails, the text editor supports these options.

- Bold text
- Italic text
- Underlined text
- Strikethrough text
- Align left
- Align center
- Align right
- Numbered list
- Bulleted list
- Indent formatting
- Outdent formatting

User Pictures

To add a user picture in the email template, include this code in the template’s HTML where you want
the picture to appear. These attributes are supported.


Attribute                                              Description

height                                                 The picture’s height, in pixels.

width                                                  The picture’s width, in pixels.

alt                                                    The text that users see when they hover over the
image.

<!-- page:383 -->



See this example.


{{#sender.useradditionalinfo.userpictureurl}}
<img src="{{{sender.useradditionalinfo.userpictureurl}}}" alt="" height="" wid
th="" />
{{/sender.useradditionalinfo.userpictureurl}}



JSON Structure for Email Templates

Understand the hierarchy and structure of the JSON properties that are available to the Mustache
template processor in Life Sciences Customer Engagement email templates.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


In the AFLS mobile app, all populated account and user fields, along with the associated
objects, are available in lowercase within the JSON. Formula fields aren’t included.


{
"sender" : {
"firstname" : "John",
"lastname" : "Doe",
"username" : "john.doe@company.com",
"email" : "john.doe@company.com",
...,
"useradditionalinfo" : {
"userpictureurl" : "https://publicurltopicture.com/use
r-picture",
"secondaryphone" : "555-5555",
...,
"secondaryemail" : "jdoe@anotheremail.com"
},
"lifesciencemobileapp" : {
"devicemetadataversion" : ""
...,
"isdownloadsyncsuccessful" : true
}
},
"recipient" : {

<!-- page:384 -->




"firstname" : "Jane",
"lastname" : "Smith",
"personemail" : "jane.smith@recipient.com",
...
"healthcareprovider" : {
"providertype" : "Medical Doctor",
...,
"phoneticname" : "Jayn Doe"
},
healthcareproviderspecialty : {
"specialtycode" : "1234567",
...,
"specialtytype" : "Oncology"
}
contactpointaddress : {
"addresstype" : "Business",
...,
"address" : "123 Main St, San Francisco, CA, 94115"
},
contactpointemail : [
{
"emailaddress" : "jsmith@companyemail.com",
...,
"preferencerank" : "1"
},
{
"emailaddress" : "jsmith2@companyemail.com"
...
}
],
contactpointphones : [
{
"telephonenumber" : "555-5550",
...,
"isprimary" : true
},
{
"telephonenumber" : "555-5551",
...


}
],
contactpointsocials : [
{

<!-- page:385 -->




"socialplatformprovider" : "Facebook",
...,
"socialhandlename" : "Jane Doe"
},
{
"socialplatformprovider" : "Twitter"
...
}
],
},
"visit" : {
"status" : "Planned",
...,
"visitpriority" : "High",
"providervisit" : {
"isadhocprovidervisit" : true,
...,
"isconfirmed" : true
}
},
"surveyinvitationlink" : "https://invitationtosurvey.com/link",
"surveydevelopername" : "Survey Developer Name",
"remotesession.url" : "https://urltosession.com/session-id"
}


This code enables you to use the raw JSON that's supplied to the Mustache template processor as a
JavaScript object variable.



## <script type="text/javascript">

<script type="text/javascript">
var allData = {{{.}}};
</script>



Querying Data in Email Templates

Query Life Sciences Customer Engagement data in email templates and show results in emails.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:386 -->




package.



## doLoad Function

Executes code automatically as soon as the Life Sciences email loads.
fetchWithParams Function
Queries Life Sciences Customer Engagement data and returns results to the specified callback
method.
fetchValidationFailed Function
Prevent sending emails with empty or invalid query data in Life Sciences Customer Engagement.


doLoad Function

Executes code automatically as soon as the Life Sciences email loads.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Syntax

doLoad()


Usage

Include any code that you want to execute automatically when the template loads inside of this method.


Example


## function doLoad() {

EmailTemplate.fetchWithParams(
'SELECT Id, Name FROM Account WHERE Id = \'{{recipient.id}}\'',
{'batchSize' : 20},
'getAccountRecordsCallback'
)
}

<!-- page:387 -->



fetchWithParams Function

Queries Life Sciences Customer Engagement data and returns results to the specified callback method.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Syntax

EmailTemplate.fetchWithParams (query, params, callbackMethod)


Arguments

Argument                                             Description

query                                                The query as a string.


## params

Optional. The ability to specify the batch size.


## In the params argument, use the batchSize

attribute to set the number of records to return. A
maximum of 100 records can be returned in each
call. This example returns 75 records.



## EmailTemplate.fetchWithParams(‘SELEC

T Id FROM Account’,{‘batchSize’: 7
5}, ‘processFetch’);



## callbackMethod

The name of the JavaScript method that
represents the queried results in the email and
handles errors.

Enclose the callback method in single or double
quotes.


Usage

- You can fetch 100 records at once.

<!-- page:388 -->



- To fetch related records, use a separate query.
- You can use aggregated and relationship queries.

JavaScript Support

In the email template HTML, place JavaScript scripts inside the <script type="text/javascript">
tag.

To make sure that JavaScript scripts execute in order, avoid using asynchronous functions such as
setTimeout , setInterval , and promises . Otherwise, Life Sciences Customer Engagement doesn’t
know when the template body is complete and ready for users to preview content or send emails.


Limitations

- You can’t query Long Text Area-type fields with a WHERE clause.
- Child relationship queries such as SELECT Id, (SELECT Id FROM Contacts) FROM Account)
aren’t supported.
-   Avoid using global CSS styles, for example div {background: red} , as global styles are applied to
the whole page. Instead, use parent based styles such as .some-custom- container-class div
{background: red} .


Results

In the AFLS mobile app, these events are logged so that you can identify how many times
the function executes in the email.

- Delete
- Upsert
- Fetch
- Target isn't specified

Example

This example email template uses the doLoad and EmailTemplate.fetchWithParams functions.


<!DOCTYPE html>
<html>
<script type="text/javascript">
function doLoad() {
EmailTemplate.fetchWithParams('SELECT Id, Name FROM Account', {'batchS
ize': 100}, 'getAccountRecordsCallback2');
EmailTemplate.fetchWithParams('SELECT Id, Name FROM Account', {'batchS
ize': 1}, 'getAccountRecordsCallback3');

<!-- page:389 -->




}



## function getAccountRecordsCallback2(data) {

if(data.state === 'success') {
const mustacheTarget = document.querySelector('#mainDiv2');
const html = data.records.map((el)=>{
if(el.Name){
return '<div class="renderedData">' +
'<span>' + el.Name + '</span>' +
'</div>'
}
EmailTemplate.fetchValidationFailed('No Name');
}).join('');
const div = document.createElement('div');
div.innerHTML = html;
mustacheTarget.append(div);
}
}



## function getAccountRecordsCallback3(data) {

if(data.state === 'success') {
const mustacheTarget = document.querySelector('#mainDiv3');
const html = data.records.map((el)=>{
if(el.Name){
return '<div class="renderedData">' +
'<span>' + el.Name + '</span>' +
'</div>'
}
EmailTemplate.fetchValidationFailed('No Name');
}).join('');
const div = document.createElement('div');
div.innerHTML = html;
mustacheTarget.append(div);
}
}
</script>
<body>
<title>Email query example with batch</title>



## <h1>Email query example with batch</h1>

<h2>Account object (batch = 100):</h2>



## <p>EmailTemplate.fetchWithParams will pass the Names from Account ob

ject (batch = 100):</p>

<!-- page:390 -->




<div id="mainDiv2"></div>



## <h2>Account object (batch = 1): </h2>

<p>EmailTemplate.fetchWithParams will pass the Names from Account ob
ject (batch = 1):</p>
<div id="mainDiv3"></div>
</body>
</html>



fetchValidationFailed Function

Prevent sending emails with empty or invalid query data in Life Sciences Customer Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Syntax

EmailTemplate.fetchValidationFailed (string)


Arguments

Argument                                            Description


## string

Optional. Contains a specific error message that
users see when the query fails for a specific
recipient. If left blank, users see the default error
message.


## After users remove the account from the list of

recipients, they can send the email.


Usage


## Add the EmailTemplate.fetchValidationFailed (string) function in addition to

EmailTemplate.fetchWithParams (query, CallbackMethod) .

<!-- page:391 -->




Example

This example uses the EmailTemplate.fetchValidationFailed function with the doLoad() and
EmailTemplate.fetchWithParams functions.



## <html>

<script type="text/javascript">



## function doLoad() {

EmailTemplate.fetchWithParams('SELECT Id, Name FROM Account WHERE Id =
\'{{recipient.id}}\'', {'batchSize': 100}, 'getAccountRecordsCallback');
}



## function getAccountRecordsCallback(data) {

if(data.state === 'success') {
const mustacheTarget = document.querySelector('#mainDiv');
const html = data.records.map((el)=>{
//Validates that the name field isn't empty.
if(el.Name){
return '<div class="renderedData">' +
'<span>' + el.Name + '</span>' +
'</div>'
} else {
//Marks the email invalid.
EmailTemplate.fetchValidationFailed('Type is missing');
}


}).join('');
const div = document.createElement('div');
div.innerHTML = html;
mustacheTarget.append(div);
}
}
</script>
<body>
<p>Account Name:</p>
<div id="mainDiv"></div>
</body>
</html>



Guidelines for Life Sciences Presentations

Create presentation source files that admins can upload to Life Sciences Customer Engagement and

<!-- page:392 -->



distribute to sales reps. To personalize content for healthcare professionals (HCPs) and healthcare
organizations (HCOs), include dynamic content in presentation files. Life Sciences Customer Engagement
supports two types of source files for presentations: ZIP files and PDFs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


When you create source files for Intelligent Content presentations, design content to be responsive for
different iOS devices.


## ZIP Files as Sources for Presentations

To use ZIP files as the source for Intelligent Content presentations, create a separate ZIP file for each
page in the presentation. In each individual ZIP file, include the HTML content for the presentation
page. In Life Sciences Customer Engagement, pages are grouped into presentations, and each page
shows separately in the presentation player. Admins can also associate each presentation page with a
product and a key message, and Salesforce tracks presentation metrics for each page so that you can
analyze and improve performance over time.
PDFs as Sources for Presentations
To create PDF source files for Intelligent Content presentations, include all presentation content in a
single PDF. Each page of the PDF source file shows as a separate presentation page in the presentation
player.
Best Practices to Send Presentations in Emails
Follow this guidance when you create presentation source files to send in emails in Life Sciences
Customer Engagement.
Dynamic Capabilities for Presentations
Life Sciences Customer Engagement uses a presentation player that's powered by a Mustache
template processor to display dynamic content. Before a page loads, data is collected as a JSON string
and fed into the template processor, which uses it to fill in the content placeholders on the
presentation page. In the presentation player, users see the fully populated presentation page.


ZIP Files as Sources for Presentations

To use ZIP files as the source for Intelligent Content presentations, create a separate ZIP file for each
page in the presentation. In each individual ZIP file, include the HTML content for the presentation page.
In Life Sciences Customer Engagement, pages are grouped into presentations, and each page shows
separately in the presentation player. Admins can also associate each presentation page with a product
and a key message, and Salesforce tracks presentation metrics for each page so that you can analyze and
improve performance over time.

<!-- page:393 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Life Sciences Customer Engagement downloads presentations and pages, and the presentation player
runs the HTML, CSS, and JavaScript code to show each page.


Presentation Page Contents

In the ZIP file for each presentation page, include these items.


Content                             Required                          Description


## HTML files                          Required

HTML files contain the code for
each slide. For each HTML file
name, use the format
XX_name.html, where XX is the
slide number. Start at page 01,
and increment sequentially for
each additional page.


## In the HTML files, refer to CSS

and JavaScript files for styles and
actions.


## A JPEG file                         Required

JPEGs represent each page’s
thumbnail. For each JPEG file
name, use the format
XX_thumbnail.jpg, where XX
is the page number.


## Limit the thumbnail size to less

than 3050 KB or 2.97 MB. The
optimal resolution for each
image is 328 by 232 pixels. For
other resolutions, the image
uses the Aspect Fill method.

CSS and JavaScript files            Optional                          Static resources that the HTML
files reference.

<!-- page:394 -->




File Name Recommendations for ZIP Source Files

Follow these guidelines for PDF file names. When admins upload presentation ZIP files to Life Sciences
Customer Engagement, presentation pages are sorted alphabetically.

- Use the format XX_name.zip for each page’s ZIP file name, where XX is the page number and name is
a descriptive title. The page number can’t be longer than 2 characters. The descriptive title must
contain at least 2 characters.
-   Limit the file name size to 960 bytes or fewer.
-   Valid characters are A-Z, a-z, and 0-9.
-   HTML file names can’t include spaces.
-   For presentations that admins upload in Life Sciences Customer Engagement:
- These special characters are supported: -, ., _, !, *, ’, (, )
- These special characters aren’t supported: /, \, and combinations `“ and `”.
- We recommend avoiding any other special characters.
-   For presentations uploaded via the content management Connect API, special characters aren’t
supported.
-   File extensions are case-sensitive and must be in lowercase, for example, .jpg.
-   Double-byte kana, katakana, and numbers are supported, but different operating systems can cause
mutations.


Content Recommendations for ZIP Source Files

Note If you create ZIP files on MacOS, the ZIP file can include a system folder. Make sure that you
remove any system folders before admins upload ZIP files to Life Sciences Customer Engagement.


Follow these guidelines for presentation content in ZIP source files.

- Each ZIP file must contain at least one HTML file and its corresponding thumbnail JPEG file. For
example, 02_secondSlide.html and 02_thumbnail.jpg.
- Each HTML file must include a corresponding thumbnail.
- Thumbnails must be in JPEG format. PNG and GIF files aren’t supported.
- If one presentation page ZIP file contains more than 100 slides, we recommend creating separate
page ZIP files for every set of 100 slides.
-   Each presentation page ZIP file must be 1 GB or smaller.
-   CSS and JavaScript files aren’t required in presentation page ZIP files.
-   In each presentation page ZIP file, you can include multiple HTML, JPEG, CSS, and JavaScript files.
-   HTML and JPEG files must be at the top level in each presentation page ZIP file. If you include multiple
CSS and JavaScript files, you can create folders for these.
-   If you create a presentation as one HTML file and use <div> elements to represent each page, the
content appears as a single presentation page in the presentation player.

<!-- page:395 -->




Adding PDFs to Presentations

You can include video files in presentation page ZIP files and refer to the videos in a presentation page’s
HTML code. This example presentation page HTML code includes a reference to a PDF.


<a href="dam/iselling/pdf/example.pdf">EXAMPLE PDF FILE</a>



Adding Videos to Presentations

You can include video files in presentation page ZIP files and refer to the videos in a presentation page’s
HTML code. The video appears on that page in the presentation. The presentation player supports these
video formats. In the HTML code, include the type attribute.


Video Format                                          HTML Type Attribute

MP4                                                   "video/mp4"

MOV                                                   "video/quicktime”

M4V                                                   "video/x-m4v"


This example presentation page HTML code includes a reference to an MP4 video file.



## <video width="320" height="240" controls> <source src="./assets/movie.mp4" typ

e="video/mp4"> Your browser does not support the video tag. </video>



Using Videos for Remote Engagement

Videos are supported for remote sessions when your Salesforce org uses Twilio as the service provider.
Embedded videos and animation can behave differently in the presentation player during remote
sessions. To include animations, we recommend using HTML or JavaScript code instead.


Linking to External Content in Presentations

You can link to external web pages from the presentation page HTML code. Links to PDFs or external
content always open in a separate window. To link to an external web page, use this format.


<a href="https://www.google.com/">Google.com</a>


For details about the characters that you can include in URLs, see the RFC 3986 standard.

<!-- page:396 -->




Adding Additional Content to Presentations

In presentation ZIP files, you can add additional content as PDF files and use links to reference those files
from any page in the presentation. To mark a PDF as additional context, add isadditionalcontent_
as a prefix in the file name. To link to an additional content PDF file, use the gotoSlide() function.

When admins upload additional content as part of a ZIP file presentation in Life Sciences Customer
Engagement, the Additional Content checkbox is selected automatically on the presentation page
record. Admins can also upload additional content PDFs as presentation source files when they upload
or update presentations in bulk.


Using iFrame in Presentations

You can use iFrames in the presentation page HTML code. Scrolling is supported within the iFrame. These
attributes are supported.

-   allow
-   height
-   name
-   sandbox
-   src
-   srcdoc
-   width


Optimizing ZIP File Performance on iPad

To make sure that presentations load quickly and perform well on iPads, follow these guidelines when
you build presentation page ZIP files.

- Compress images before you add them to presentations.
- Avoid adding extensive JavaScript logic to each page, such as navigation bars, tabs, tooltips, and
dropdown menus.
-   Don’t use a content management system (CMS) to generate pages, as the CMS can add unnecessary
code and slow down page load times.
-   Divide complex pages into multiple simple pages. For example, if you have one page with horizontal or
vertical tabs, create a separate page for each tab instead.
-   Add a background, a simple image, or a color to the body tag that shows when the page is loading.
-   Make sure that users are using supported mobile devices.


Example HTML Page in ZIP File Presentations

This example HTML page lists all customers and prints their names.

<!-- page:397 -->




<!DOCTYPE html>
<html>
<head>
<link type="text/css" rel ="stylesheet" href="media/css/style.css">
</head>
<body>
<div id="screen-container">
HELLO
{{#customers}} <!--this is a mustache loop -->
<span id="doc_name" class="template">{{firstName }} {{ lastNam
e }}</span>
{{/customers}}
,<br/>DO YOU WANT TO START THE VISIT?</span>
</div>
</body>
</html>



PDFs as Sources for Presentations

To create PDF source files for Intelligent Content presentations, include all presentation content in a
single PDF. Each page of the PDF source file shows as a separate presentation page in the presentation
player.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


File Name Recommendations for PDF Source Files

Follow these guidelines for PDF file names.

- Limit the file name size to 960 bytes or fewer.
- Valid characters are A-Z, a-z, and 0-9.
- For presentations that admins upload from Life Sciences Customer Engagement:
- These special characters are supported: -, ., _, !, *, ’, (, )
- These special characters aren’t supported: /, \, and combinations `“ and `”.
- We recommend avoiding any other special characters.
- For presentations uploaded via the content management Connect API, special characters aren’t
supported.
-    Format file extensions in lowercase.

<!-- page:398 -->



- Double-byte kana, katakana, and numbers are supported, but different operating systems can cause
mutations.


Content Recommendations for PDF Source Files

Follow these guidelines for presentation content in PDF source files.

- Upload landscape versions of the PDF files.
- Create PDF presentations that are less than 1 GB or 200 pages.
- To make sure that PDF content displays correctly on iOS, test PDFs in the Preview app on an Apple
device.
- To avoid performance issues and make sure that PDFs render correctly on devices with low memory,
optimize the PDF file structure. For example, use the print production tools in Adobe Acrobat to flatten
the PDF. We recommend these parameters:
- Raster/Vector Balance: 0
- Line Art and Text resolution: 160 pixels per inch (PPI), or up to 192 PPI for newer iPad Pros
- Gradient and Mesh resolution: 160 PPI, or up to 192 PPI for newer iPad Pros
- Color: JPEG
- Apply to PDF: All pages in document
- To create thumbnail images, PDF pages are cropped based on the first page's crop box. To show full
images, remove the crop marks, or set the crop box to fit the part of the page that you want to show.
-    To enable navigation between pages in the presentation player, add navigation links to specific pages
in the PDF presentation source file.


Limitations for PDF Source Files

Videos aren’t supported in PDF source files for presentations.


Best Practices to Send Presentations in Emails

Follow this guidance when you create presentation source files to send in emails in Life Sciences
Customer Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


- In ZIP source files for presentations, also include a PDF file of the presentation. The PDF file is sent as
the email attachment.
- To make the page or presentation file mandatory, add the required__ prefix to the file name in the
email template ZIP file. If the presentation is marked as required, users can’t deselect the attachment

<!-- page:399 -->



when they send an email that uses the template.
-    When an admin user uploads a PDF or ZIP file, the files are uploaded to Salesforce. When the PDF is
less than 3 MB, it’s attached to the presentation page record by default. For files that are larger than 3
MB, add the PDF file to the presentation page’s files manually.


Dynamic Capabilities for Presentations

Life Sciences Customer Engagement uses a presentation player that's powered by a Mustache template
processor to display dynamic content. Before a page loads, data is collected as a JSON string and fed into
the template processor, which uses it to fill in the content placeholders on the presentation page. In the
presentation player, users see the fully populated presentation page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Before each page loads in the presentation player, data for each presentation and the associated visit are
collected and provided as a JSON string so that the Mustache template processor can populate
placeholders on the presentation page. The JSON data can also be stored as a JavaScript variable,
allowing for direct access in presentation ZIP files.


## Supported Attributes in Presentations

Using Mustache variables, you can access Life Sciences Customer Engagement attributes dynamically
from presentation ZIP files.
JSON Structure for Presentations
Understand the hierarchy and structure of the JSON properties that are available to the Mustache
template processor for Intelligent Content presentations.
Presentation Player Functions
You can include JavaScript code in the presentation ZIP file for Life Sciences Customer Engagement.
When the JavaScript function is called during presentations, the action is performed in the
presentation player.
Callback Event Function
When an event occurs in the AFLS mobile app, you can use a callback event function to
notify the page’s JavaScript, HTML, or template. For example, events can be triggered when users
pause or resume tracking presentation metrics.


Supported Attributes in Presentations

Using Mustache variables, you can access Life Sciences Customer Engagement attributes dynamically
from presentation ZIP files.

<!-- page:400 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Keep these considerations in mind when you reference Salesforce objects and fields as variables in
presentation ZIP files.

- Formula and lookup fields aren’t supported.
- When you reference a standard Salesforce field, don’t use a prefix or suffix.
- When you reference a custom field in your Salesforce org, use the custom suffix __c .
- Format mustache variables in lowercase, for example, accounttype .
- Users must have access to the Salesforce objects and fields that the presentation template references.

Account Objects and Fields

In the JSON structure, account fields appear in the customers node.


Object                               Fields                            Additional Details


## Account                              All standard and custom Account

object fields.                  • accountType returns HCP for
Person Accounts and HCO for
Business Accounts.
- recordType returns the name
and ID of the account’s record
type.



## ContactPointAddress                  An array of the account’s

associated ContactPointAddress    Addresses are used in this order.
records and fields. Only active
- If the preferred address is set
records are returned.
on the related provider
account territory info, that
address is used.
-    If the preferred address isn’t
set but a related contact point
address record is set to
primary, that address is used.
-    If the account has more than
one primary address, the
primary address that was

<!-- page:401 -->




Object                          Fields                            Additional Details


created most recently is used.
-    If there’s no recent primary
address, the address that was
created most recently is used.



## HealthcareProviderSpecialties   An array of the account’s

associated                        To access the first specialty in the
HealthcareProviderSpecialties.    array, use this code.


{{#customers}}
Customer Name: {{nam
e}}
Specialty: {{healthcar
eProviderSpecialtie
s.0.name}}
{{/customers}}



## Returns only active records that

are set to primary, ordered by
most recently modified.

ContactPointEmail               An array of the account’s         Returns only records that are set
associated ContactPointAddress    to primary, ordered by
records and fields.               preference rank.

ContactPointPhone               An array of the account’s         Returns only records that are set
associated ContactPointPhone      to primary, ordered by
records and fields.               preference rank.

ContactPointSocials             An array of the account’s         Returned records are ordered by
associated ContactPointSocial     the social platform provider.
records and fields.


## HealthCareProvider              All fields on the account’s related None

HealthcareProviderRecord.


Presentation Fields

Field                                            Description

id                                               The presentation ID.

name                                             The presentation name.

<!-- page:402 -->




Field                                            Description

sourceSystemIdentifier                           A user-provided unique, external identifier for the
presentation.


## Pages

A predefined list of page fields.

- id
- sourceSystemIdentifier
- contentDocumentId
- name
- slides:
- name


## isCustom

Identifies whether the presentation is a custom
presentation created by a field user ( true ) or not
( false ). Depending on the variable’s value in the
variable, you can apply custom logic.

See this HTML code example.


<dl>
{{#presentations}}
<dt>Name: {{name}}</dt>
<dt>Is Custom: {{#isCustom}}
This is a custom presentat
ion.
{{/isCustom}}
{{^isCustom}}
This is a standard present
ation.
{{/isCustom}}
</dt>
<br>
{{/presentations}}
</dl>




User Objects and Fields

Object                          Fields                             Additional Details

User                            All standard and custom fields.    None

<!-- page:403 -->




Object                            Fields                              Additional Details

UserAdditionalInfo                All standard and custom fields      None
on the associated
UserAdditionalInfo record.

LifeScienceMobileApp              On the associated                Available only for the Life
LifeScienceMobileApp record, all Sciences Cloud Mobile app.
fields that contain data about
the user’s device, such as
location and last download sync
date.


Visit Fields

Field                                               Description

id                                                  The visit ID.

accountId                                           The account ID.

isParent                                            Returns true when the Parent Visit field is blank.

sourceSystemIdentifier                              A user-provided unique, external identifier for the
visit.


Top-Level JSON Fields

These fields are at the top level of the JSON hierarchy, before Life Sciences Customer Engagement data.


Field                                               Description

currentMode                                         The current mode of the presentation player.

currentTerritoryId                                  The current territory ID.

currentTerritoryName                                The current territory name.

emailTemplateId                                     The ID of the email template associated with the
current presentation page.

state                                               The saved state of the presentation on the Life
Sciences Cloud Mobile app.

presentationIndex                                   The presentation index in the presentations array.

pageIndex                                           The page index in the pages array.

slideIndex                                          The slide index in the slides array.

<!-- page:404 -->



JSON Structure for Presentations

Understand the hierarchy and structure of the JSON properties that are available to the Mustache
template processor for Intelligent Content presentations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

currentMode: The current mode of the presentation player.
currentTerritoryId: The ID of the current territory.
currentTerritoryName: The name of the current territory.
emailTemplateId: The ID of the email template that's associated with the curre
nt page.
state: The saved state of the presentation on the AFLS Mobile a
pp.
presentationIndex: The presentation index in the presentations array.
pageIndex: The page index in the pages array.
slideIndex: The slide index in the slides array.
customers: An array of account records.
id: The account ID.
isPrimary: Indicates the account of the primary visit.
Type: The account type (Account.Type).
PersonEmail: The account email on account. Emails are also captured in con
tact point email records.
firstName: The first name of the account.
lastName: The last name of the account.
middleName: The middle name of the account.
nationality: The nationality of the account.
salutation: The salutation of the account.
healthcareProviderSpecialties: An array of specialties.
isPrimarySpecialty: Returns only primary specialties.
isActive: Returns only active specialties.
name: The specialty name.
name: The name of the account.
accountType: Returns HCP for a person account. Otherwise, returns HCO.
sourceSystemIdentifier: The user-provided unique external identifier for t
he account.
contactPointAddresses: An array of the account's contact point address rec
ords.
id: The ID of the contact point address.

<!-- page:405 -->




street: The street component of the address.
city: The city component of the address.
state: The state component of the address.
postalCode: The postal code for the address.
presentations: An array of presentation records.
id: The presentation ID.
name: The presentation name.
isCustom: Identifies whether the presentation is a custom presentation cre
ated by a field user.
Pages: An array of page records.
id: The page ID.
sourceSystemIdentifier: The user-provided unique external identifier f
or the page.
slides: An array of slides.
name: The name of slide, for example, 01_index.html.
user: User fields.
name: The user's full name.
firstName: The user's first name.
lastName: The user's last name.
userAdditionalInfo: Additional user fields on the associated user addition
al info record.
availableCountries: The countries that are available for the user in t
he context of a search.
preferredCountry: The user's preferred country.
visits: An array of visits.
id: The visit ID.
accountId: The account ID.
isParent: Returns true when the Parent Visit field is blank.
sourceSystemIdentifier: A user-provided unique, external identifier for th
e visit.


This template code example shows how to retrieve data from the JSON structure.


<div id="screen-container">
HELLO
{{#customers}} <!--This is a Mustache loop -->
<span id="doc_name" class="template">{{firstName }} {{ lastName }}</sp
an>
{{/customers}}
,<br/>DO YOU WANT TO START THE VISIT?</span>
</div>


This code enables you to use the raw JSON that's supplied to the Mustache template processor as a
JavaScript object variable.

<!-- page:406 -->




var configData;
document.addEventListener('PresentationDOMContentLoaded', function(event) => {
configData = event.data;
});



Presentation Player Functions

You can include JavaScript code in the presentation ZIP file for Life Sciences Customer Engagement.
When the JavaScript function is called during presentations, the action is performed in the presentation
player.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


All of the functions listed are available in the AFLS mobile app. Only these functions are
available on desktop.

-     gotoSlide
-     goPreviousPage
-     goNextPage


## alert Function

Opens an alert on the user’s mobile device with the specified message.
createVisit Function
Creates a visit for the selected attendees and returns the result to the specified callback method.
When visits are created, Salesforce applies all configured visit validations.
defineNoSwipeRegion Function
Defines an area of the screen where the presentation player ignores the swipe gesture.
destroyNoSwipeRegion Function
Removes the region ID of an area of the screen where the presentation player ignores the swipe
gesture.
disableDismiss and enableDismiss Functions
Dismiss functions control how the presentation player is closed and handled when users select the
Visit button. These functions execute long-term operations in the 'returntovisitbuttonpress' event
handler.
fetchWithParams Function
Queries data that’s not already returned in Mustache variables, and returns results to the specified
callback method.

<!-- page:407 -->




## getSurveyFlowJson Function

Searches for a survey and returns it in JSON format. Then, the presentation HTML can parse the survey
and show it in the presentation player.
goNextPage Function
Goes to the next page in the presentation. If the current page is the last page in the presentation,
nothing happens.
goPreviousPage Function
Goes to the previous page in the presentation. If the current page is the first page in the presentation,
nothing happens.
goToSlide Function
Goes to the specified pages and assets within a presentation.
launchApprovedEmail Function
Opens the Send Email window with the email template that’s linked to the presentation page, if the
presentation page specifies a template. If there’s no email template ID specified on the presentation
page, the page isn't linked to a template.
launchEmails Function
Opens the Send Email window with the email templates that are available to the user.
logError Function
Logs error messages within the presentation player.
saveState Function
Saves data about the presentation’s state to the state property in the JSON that’s supplied to the
presentation’s Mustache template. Stores the state on the user’s mobile device so that users can
resume a presentation and continue where they left off in the same session or a future session.
setSurveyFlowJson Function
Saves survey results to the database for the current presentation and visit when the related visit is
saved or submitted.
startTrackingPage Function
Starts tracking presentation metrics in a new presentation click stream entry record for the specified
presentation page.
stopTrackingPage Function
Stops tracking presentation metrics for the current slide.
updateFeedback Function
Sets the feedback from the healthcare professional (HCP) to the specified type during presentations.
upsert Function
Creates and updates records for the specified objects and returns results to the specified callback
method.


alert Function

Opens an alert on the user’s mobile device with the specified message.

<!-- page:408 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Syntax

PresentationPlayer.alert(message)



Arguments

Argument                                            Description

message                                             The message to show to the user.


createVisit Function

Creates a visit for the selected attendees and returns the result to the specified callback method. When
visits are created, Salesforce applies all configured visit validations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Tip We recommend invoking this function only once per presentation session.


Syntax

PresentationPlayer.createVisit(callbackMethod)

<!-- page:409 -->




Arguments

Argument                                              Description

callbackMethod                                        The name of the JavaScript method that receives
the results of the operation.


Returns

This method returns JSON that contains the ID of the parent visit, for example:


{"state":"success", "id": "<parent_visit_uid>"}



Usage

When this function is called during a presentation and a visit is created successfully:

- Users can select the Visit button in the presentation player menu to open the visit. All presentation
metrics that are tracked during the session are linked to the visit.
- If no attendees were selected before the visit was created, the account field on the visit is blank.
- Product restrictions and presentation targeting apply to the new visit.
- These records are related to the new visit.
- Provider visit
- Provider visit product detailing
- Provider visit detailing product message
- Presentation forum
- Presentation click stream entry

Limitations

- The createVisit function doesn’t populate the new visit’s details into Mustache variables that
reference visits.
-    Don’t use the upsert function to create visits.


Example


## <body>

<input id="name" style="color: black;">
<input id="customField" style="color: black;">
<a href="javascript:createVisit();">Create Visit</a>
</body>
<script type="text/javascript">

<!-- page:410 -->





## function createVisit() {

PresentationPlayer.createVisit('callbackMethod');
}
function callbackMethod(data) {
console.log(data);
PresentationPlayer.alert(JSON.stringify(data));
}
</script>



Errors

This function returns errors when:

- Validation rules fail.
- A visit was already created during the presentation session. In this case, the function returns the ID of
the visit that was created previously in JSON format.
-    The presentation player is opened for an existing visit. In this case, the function returns the ID of the
visit that was created previously in JSON format.
-    The presentation player is opened in a context that’s unrelated to the visit.

This example is an error result in JSON format.


{"state":"error", "errorMessage": "<error>", "id": "<optional_id_of_previousl
y_created_visit>"}



defineNoSwipeRegion Function

Defines an area of the screen where the presentation player ignores the swipe gesture.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Syntax

PresentationPlayer.defineNoSwipeRegion(regionId, x, y, width, height)

<!-- page:411 -->




Arguments

Argument                                            Description

regionId                                            The ID of the region where you don’t want users to
be able to swipe.

x                                                   The horizontal coordinate of the top-left corner of
the area where users can’t swipe as an absolute
position, in points.

y                                                   The vertical coordinate of the top-left corner
where users can’t swipe as an absolute position, in
points.

width                                               The width of the area where users can’t swipe, in
points.

height                                              The height of the area where users can’t swipe, in
points.


Example

In this example, the ID is region.


IntelligentContentPlayer.defineNoSwipeRegion("region",50,50,100,100);



destroyNoSwipeRegion Function

Removes the region ID of an area of the screen where the presentation player ignores the swipe gesture.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Syntax

PresentationPlayer.destroyNoSwipeRegion(regionId)

<!-- page:412 -->




Arguments

Argument                                             Description

regionId                                             The ID of the region where the presentation player
ignores the swipe gesture.


disableDismiss and enableDismiss Functions

Dismiss functions control how the presentation player is closed and handled when users select the Visit
button. These functions execute long-term operations in the 'returntovisitbuttonpress' event handler.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


PresentationPlayer.disableDismiss()

To prevent the presentation player from being dismissed immediately after the users select the Visit
button, call the PresentationPlayer.disableDismiss() function before executing long-term
database operations such as queries or upserts.


PresentationPlayer.enableDismiss()

To notify and dismiss the presentation player, call the PresentationPlayer.enableDismiss()
function after long-term operations are finished. If PresentationPlayer.enableDismiss() isn’t
called within 30 seconds, the presentation player is dismissed automatically.


Usage

The PresentationPlayer.disableDismiss() and PresentationPlayer.enableDismiss()
functions control only the presentation that’s open in the presentation player. The
'returntovisitbuttonpress' event is also sent only to the presentation that’s currently open when
users select the Visit button.

To save data from multiple presentations during one presentation session, users can select the Visit
button after presenting a custom presentation. The 'returntovisitbuttonpress' event is triggered
for the current presentation, and any upsert requests are executed. After opening the visit, users can use

<!-- page:413 -->



the Return to Presentation link to return to the same presentation session.


Example

For example, a user opens a custom presentation in the presentation player. When a page is opened, the
PresentationPlayer.disableDismiss() function is called during the 'viewappearing' event
to prevent the player from being dismissed while long-running operations are in progress.


## After the user finishes the presentation and selects the Visit button, the

'returntovisitbuttonpress' event is triggered, and the presentation executes its long-running
database operations, such as fetching or upserting data. Once these operations are complete, the
PresentationPlayer.enableDismiss() function is called to close the presentation player.


fetchWithParams Function

Queries data that’s not already returned in Mustache variables, and returns results to the specified
callback method.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.

You can query the User, Account, Record Type, Territory2, UserTerritory2Association, AFLS
objects, and custom objects. To query records:

- The user must have Read permissions on the queried objects and fields.
- Active object metadata cache configurations must exist for each object and must be synced to the Life
Sciences Cloud mobile app.


Syntax

PresentationPlayer.fetchWithParams(query, params, callbackMethod)

<!-- page:414 -->




Arguments

Argument                          Description


## query

The SOQL query as a string, or the query locator
value for subsequent fetches. You can include
Mustache variables within queries.

In the query parameter, specify these values.

-    object : The API name of the object.
-    fields : A comma-separated list of field API
names.
-    where : Optional. A WHERE condition that
references field API names.
-     order by : Optional. The field to order the
query by.
-    limit : Optional. The maximum number of
records to return.

The WHERE clause supports:

- These logical operators: AND , OR , NOT
- These comparison operators: IN , LIKE , = ,
<,>
To use the IN operator, surround values in
brackets, for example, "Id IN
{\”val1\”,\”val2\”}" .
- These SOQL keywords.
- SELECT statements with column names,
relations, and aggregate functions, but
without subqueries
- FROM statements with only one object name
- GROUP BY columns or aggregate functions
- HAVING statements
- WHERE statements that support subqueries
and literal sets
- LIMIT and OFFSET functions
- ORDER BY functions
- These literals.
- INT
- FLOAT
- STRING

<!-- page:415 -->




Argument                                                Description


- NULL
- BOOLEAN


## params

Optional. The ability to specify the batch size.


## In the params argument, use the batchSize

attribute to set the number of records to return in
each call.

A maximum of 100 records can be returned in
each call.

callbackMethod                                          The name of the JavaScript method that receives
the query results.


Returns

This function returns a JSON result.


Field Name                            Type                                Description

records                               Array<Object>                       The result data.

done                                  Boolean                             Indicates whether all data has
been queried ( true ) or not
( false ).

totalSize                             Integer                             The total number of records that
were processed in the query.

queryLocator                          String                              A unique SQL identifier that can
be used in future requests.

state                                 String                              The request status, such as
success or error.


Usage

Regardless of batch size, queries are limited to a maximum of 100 records. This example sets the batch
size to 75 records.


PresentationPlayer.fetchWithParams('SELECT FirstName, LastName, Name, Email, P

<!-- page:416 -->





## hone, Username FROM User WHERE Id = ' + userId', {‘batchSize’: 75}, getCurrent

UserRecordCallback');


If the batch size isn’t specified, the fetchWithParams function queries 15 records by default. To query
additional records when using smaller batch sizes, use the queryLocator variable.

This example uses the queryLocator variable.



## function getAccounts() {

PresentationPlayer.fetchWithParams('SELECT Id FROM Account’, {'bat
chSize': 15}, 'getAccountsCallback');
// Return 15 records
}

function getAccountsCallback(data) {
// Process records
PresentationPlayer.fetchWithParams(data.queryLocator, 'getAccounts
Callback');
}



Example

<script type="text/javascript">
var configData;
document.addEventListener('PresentationDOMContentLoaded', function(event)
=> {
configData = event.data;



## function getCurrentUserRecord() {

let userId = ' \’ ' + configData.parameters.id + ' \’ ';
PresentationPlayer.fetchWithParams('SELECT FirstName, LastName, N
ame, Email, Phone, Username FROM User WHERE Id = ' + userId, {'batchSize': 7
5},
'getCurrentUserRecordCallback');
}
function getCurrentUserRecordCallback(data) {
if (data.state === 'success') {
const html = data.records.map((el)=>{
console.log('User Name: ', el.Name);
console.log('User Email: ', el.Email);
});
} else {

<!-- page:417 -->




PresentationPlayer.alert(data.message + '\n' + data.code);
}
}
</script>



Errors

This function returns an error when:

- The query can’t access or find a record.
- A SQL error occurs.

getSurveyFlowJson Function

Searches for a survey and returns it in JSON format. Then, the presentation HTML can parse the survey
and show it in the presentation player.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.

When called, this function:

- Validates input parameters and returns an error if the survey’s developer name is missing.
- Loads the survey based on the developer name and the user’s access.
- If there’s a saved survey for the current presentation and visit, loads the saved responses. If no survey
response is found, loads a new survey.
- Once the survey’s JSON data loads, triggers the "surveyflowjsonloaded" event.
- Shows an error for invalid requests or missing survey data.

Parameters

PresentationPlayer.getSurveyFlowJson(Object)

<!-- page:418 -->




Arguments

Argument                                               Description


## Object

A JSON string in this format.


{"developerName":"name of the surve
y"}




Usage

When survey data is loaded, this function triggers the "surveyflowjsonloaded" event automatically.
To handle the response, register an event listener.


Example

PresentationPlayer.registerEventListener("surveyflowjsonloaded", function(surv
eyJson
){ // Handle the survey JSON data
console.log("Survey loaded:", surveyJson);
});



## // Call the function

PresentationPlayer.getSurveyFlowJson({"developerName": "test_survey"});



goNextPage Function

Goes to the next page in the presentation. If the current page is the last page in the presentation,
nothing happens.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:419 -->




Syntax

PresentationPlayer.goPreviousPage()



goPreviousPage Function

Goes to the previous page in the presentation. If the current page is the first page in the presentation,
nothing happens.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Syntax

PresentationPlayer.goPreviousPage()



goToSlide Function

Goes to the specified pages and assets within a presentation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


To make sure that this function opens the correct page or asset, use unique names or IDs for pages and
assets within the presentation.


Syntax

PresentationPlayer.gotoSlide([PageId|PageName|SourceSystemIdentifier], slideNa
me, animation)

<!-- page:420 -->




Arguments

Argument                          Description


## PageId

The ID of a page in the presentation. If left blank,
the current page is used. You can use the PageId
argument only to navigate to presentation pages.
Use this format.


PresentationPage.Id



## PageName

The name of a presentation page or asset. Use this
format.


PresentationPage.Name



## SourceSystemIdentifier

An optional external ID for the presentation
content, typically provided when users upload
presentations via the content API. Use this format.


PresentationPage.SourceSystemIdentif
ier


slideName                         The name of the slide.


## animation

The animation to use to open the slide. These
values are supported.

-     noanimation | undefined | null: Opens the
slide immediately with no animation.
-     swipeleft : Opens the slide with a left swipe.
-     swiperight : Opens the slide with a right
swipe.

Swipe animations can affect performance in the
presentation player.

<!-- page:421 -->




Usage

To reference another page in a presentation, first retrieve its page ID from the JSON.

Before you use the goToSlide function, include this code at the top of the HTML or other JavaScript code.
The first line of code references the entire JSON file, while the second row gets the page ID, which is
stored in a zero-based array.


var configData;
document.addEventListener('PresentationDOMContentLoaded', (event) => {
configData = event.data;
var PageId =
configData.presentations[configData.presentationIndex].Pages[1].id;
});


Or, you can use this code.


var configData = {{{.}}};


var PageId = configData.presentations[confgData.presentationIndex].Page
s[3].id;


Then, use the goToSlide function with that ID. For example, this code is attached to an HTML button
on the presentation page.



## <button onclick="PresentationPlayer.gotoSlide(PageId, '01_slide.html',null)"

class="class" type="button">Next</button>



launchApprovedEmail Function

Opens the Send Email window with the email template that’s linked to the presentation page, if the
presentation page specifies a template. If there’s no email template ID specified on the presentation
page, the page isn't linked to a template.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.

<!-- page:422 -->




Syntax

PresentationPlayer.launchApprovedEmail()



launchEmails Function

Opens the Send Email window with the email templates that are available to the user.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Syntax

PresentationPlayer.launchEmails(templates)



Arguments

Argument                                             Description


## templates

A comma-separated list of email template names
to include in the Send Email window.


## If left blank, users see all of the templates that are

available for the selected territory.


logError Function

Logs error messages within the presentation player.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:423 -->




package.


This function is supported only in the AFLS mobile app.

To log errors efficiently and prevent excess entries:

- Error messages are tracked and logged for each individual presentation page.
- Only 10 error messages are logged for each presentation page.

Syntax

PresentationPlayer.logError(errorMessage)



Arguments

Argument                                                 Description

errorMessage                                             The specific error message to include in the log.


saveState Function

Saves data about the presentation’s state to the state property in the JSON that’s supplied to the
presentation’s Mustache template. Stores the state on the user’s mobile device so that users can resume
a presentation and continue where they left off in the same session or a future session.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Syntax

PresentationPlayer.saveState(state)

<!-- page:424 -->




Arguments

Argument                                             Description


## state

Any string that represents the state of the
presentation, typically in JSON format. For
example, the presentation state, such as the
current slide position, user preferences, or
progress tracking. The state can be retrieved and
used by the presentation.


## State values are stored and saved for each

presentation and visit. When users resume a
presentation from a visit, they return to their
previous state.


setSurveyFlowJson Function

Saves survey results to the database for the current presentation and visit when the related visit is saved
or submitted.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.

When called, this function:

- Validates that the response object contains a fullName property, or returns an error for invalid
response data.
-    Processes the stored survey data, and saves it to the database when the related visit is saved or
submitted.
-    Creates related survey records.

The surveyflowjsonpassedtovisit event is triggered when the user selects the Visit button to
return to the visit page, not when a user finishes the survey response.

<!-- page:425 -->




Syntax

PresentationPlayer.setSurveyFlowJson(Object, state)



Parameters

Argument                                               Description

Object                                                Required. A survey response JSON object that
includes the fullName , which is the full
developer name of the survey, and additional
survey response data and answers.


## state

Optional. The submission state of the survey
response. Supported values are:

-   save
-   submit

The default value is save .


Usage

Calling the function with the save state creates these survey records.

- A survey invitation record for the responded survey.
- A survey subject record.
- The subject ID is set to the current context, such as the visit ID.
- The parent ID is set to the new survey invitation record's ID.
- A survey engagement context record.
- The context type is set to Presentation.
- The context value is set to the presentation ID.
- The survey invitation ID is set to the new survey invitation record's ID.
- A survey response offline record.
- The response is set to the survey response JSON data.
- The survey invitation ID is set to the new survey invitation record's ID.
Calling the function with the submit state creates these survey records.

- All of the records that are created by the save state.
- Survey question response records for each question response.

<!-- page:426 -->



startTrackingPage Function

Starts tracking presentation metrics in a new presentation click stream entry record for the specified
presentation page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Syntax

PresentationPlayer.startTrackingPage(pageid)



Arguments

Argument                                              Description

pageid                                                The ID of the page to start a new presentation
click stream entry record for. Accepts any string as
the ID for the current slide.


stopTrackingPage Function

Stops tracking presentation metrics for the current slide.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.

<!-- page:427 -->




Syntax

PresentationPlayer.stopTrackingPage()



updateFeedback Function

Sets the feedback from the healthcare professional (HCP) to the specified type during presentations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


This function is supported only in the AFLS mobile app.


Syntax

PresentationPlayer.updateFeedback(type)



Arguments

Argument                                             Description


## type

The type of feedback. Supported values are:

-   Positive
-   Negative
-   Neutral
-   null




Example

This example sets the reaction type to Positive on the related provider visit detailing product message
record.


<a href="javascript:PresentationPlayer.updateFeedback('Positive');">I like the

<!-- page:428 -->




presentation</a>



upsert Function

Creates and updates records for the specified objects and returns results to the specified callback
method.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

Note To use this function, log a request with Salesforce Support to allowlist the objects that you
plan to upsert from the presentation content. For example, to update an account profile within the
content, allowlist the Account object.


This function is supported only in the AFLS mobile app.

You can create or update custom objects and supported Life Sciences Customer Engagement objects. To
create or update records:

- The user must have Read permissions on the specified objects and fields.
- Active object metadata cache configurations must be created for each object and synced to the Life
Sciences Cloud mobile app.


Syntax

PresentationPlayer.upsert(objects, callbackMethod)



Arguments

Argument                                             Description


## objects

An array of objects to create or update records for.

- To create records, specify the object name.
- To update records, specify the ID field that
contains the ID or the offline ID.

<!-- page:429 -->




Argument                                             Description

callbackMethod                                       The name of the JavaScript method that receives
the result of the operation.


Returns

This function returns an array of IDs of the new or updated records.


Limitations

This function can’t create or update User, Record Type, Territory, Territory2, and UserTerritory2Association
records.

You can’t use this function to create or update related records. To update related records, such as records
in a parent-child relationship, use two function calls.


Example

This example creates records by using the object name.



## <body>

<input id="name" style="color: black;">
<input id="customField" style="color: black;">
<a href="javascript:save();">Save Record</a>
</body>
<script type="text/javascript">
function save() {
let name = document.getElementById("name").value;
let customField= document.getElementById("customFiel
d").value;
PresentationPlayer.upsert([{
'sobject': 'Account',
'name': name,
'customField__c': customField
}], 'upsertCallbackMethod');
}
function upsertCallbackMethod(data) {
console.log(data);
PresentationPlayer.alert(JSON.stringify(data));
}
</script>


This example updates records by using record IDs.

<!-- page:430 -->




<script type="text/javascript">
function save() {
let name = document.getElementById("name").value;
let customField= document.getElementById("customFiel
d").value;
let accountId = allData.customers[0].Id;
PresentationPlayer.upsert([{
'sobject': 'Account',
’id’: accountId,
'name': name,
'customField__c': customField
}], 'upsertCallbackMethod');
}
function upsertCallbackMethod(data) {
if (data.state === 'success') {
console.log(data);
PresentationPlayer.alert(JSON.stringify(data));
} else {
PresentationPlayer.alert(data.message + '\n' + d
ata.code);
}
}
</script>



Errors

This function processes up to 15 records at a time. If you submit more than 15 records, an error occurs.

This function can also return errors if there are failures when creating or updating records. For example,
errors can occur when:

- Validation rules fail.
- The user doesn’t have Read or Edit access to the object or field.
- The object or field isn’t supported.
- SQLite database query errors occur.

Callback Event Function

When an event occurs in the AFLS mobile app, you can use a callback event function to
notify the page’s JavaScript, HTML, or template. For example, events can be triggered when users pause
or resume tracking presentation metrics.

<!-- page:431 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Syntax

PresentationPlayer.registerEventListener(iOS_event, myCustomPlayerHandler)



Arguments

Argument                                            Description


## iOS_event

The event that occurs on iOS. These events are
supported.

-   'cancelbuttonpress' : The event is
triggered when users select the Cancel button.
-    'pausebuttonpress' : The event is triggered
when users select the Pause button to stop
tracking presentation metrics.
-    'playbuttonpress' : The event is triggered
when users select the Play button to resume
tracking presentation metrics.
-    'returntovisitbuttonpress' : The event is
triggered when users select the Visit button.
-    'viewappearing' : The event is triggered
when a page is opened.
-   'viewdisappearing' : The event is triggered
when a page is closed.
-   'surveyflowjsonloaded' : The event is
triggered when the
PresentationPlayer.getSurveyFlowJson
() function is called.
-   'surveyflowjsonpassedtovisit' : The
event is triggered just before a visit is opened.


myCustomPlayerHandler                               Your custom JavaScript function.

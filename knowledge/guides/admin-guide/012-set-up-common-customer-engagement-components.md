<!-- guide:admin-guide section:set-up-common-customer-engagement-components pages:481-637 -->
# Set Up Common Customer Engagement Components




Set Up Common Customer Engagement Components

Notify users of critical updates with App Alerts. Prevent legal and regulatory violations by making
informed decisions with License Validation Checks. Manage complex business processes and guide users
through their tasks with clear steps with multi-step workflows and related lists. Maximize customer
engagement efficiency with Multi-Object Components and Dynamic Tree Views. Create Quick and
Custom Actions for smoother workflows. Visualize Sales Data for effective customer interactions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## App Alerts

Deliver in-app notifications to sales reps in their flow of work by using App Alerts. Create alerts and
assign them to specific territories to make sure that notifications reach the right sales reps. With App
Alerts, enhance in-app communication, drive user engagement, and avoid missing opportunities.
Dynamic Tree View Components for Life Sciences
Configure a Dynamic Tree View component to show related AFLS for Customer
Engagement data in an expandable hierarchy. Users can easily explore related records in one place
without going to multiple pages, boosting visibility and saving time. For example, show the account
hierarchy within a health system, or visualize how healthcare professionals (HCPs) and healthcare
organizations (HCOs) are aligned under specific territories.
License Management in Life Sciences
Help your company comply to legal and regulatory standards, and adhere to audit-tracking measures
with flexible license validity evaluations. License management in Life Sciences is a critical process that
makes sure that healthcare providers (HCPs) have the required license and authorization to receive
pharmaceutical samples.
Multi-Object Components for Life Sciences
The AFLS for Customer Engagement multi-object components consolidate fields from
several related objects onto a single record page, making it easier for users to view and manage data.
Showing fields from multiple objects together helps users avoid going to multiple pages and simplifies
the workflows for accounts, inquiries, and visits.
Provider Bulk Sync
Provider Bulk Sync helps organizations to effectively and efficiently manage their relationships with
Healthcare Organizations (HCOs) and Healthcare Providers (HCPs). It allows organizations to integrate
HCP and HCO data from IQVIA OneKey directly into the AFLS data model. This process
helps organizations get verified HCP data, which helps users have the right information for their
customer engagement plans and activities. The verified data can be used for territory planning and
other processes.

<!-- page:482 -->




## Data 360 for Life Sciences Customer Engagement

Integrate Data 360 with AFLS by using the Life Sciences Data Kit. When you deploy the
Life Sciences Data Kit, you get access to prebuilt data mappings, data streams, and other features that
unify and harmonize your Account Management data.
Quick and Custom Action Management
To simplify user experiences in Salesforce and the Life Sciences for Customer Engagement mobile app,
leverage quick actions and custom actions. These actions provide convenient access to essential
information and common tasks, which streamlines user navigation and workflows.
Related Lists for Life Sciences
Records in Salesforce can include details and links to other related records. The AFLS for
Customer Engagement related list offers more customization and filtering options than standard
related lists. If you create a AFLS for Customer Engagement workflow, you can also
control the actions that users can take on related records based on the parent record’s status, user
role, and other business rules. These related lists are supported both online and offline in the Life
Sciences Cloud mobile app.
Reports and Dashboards Administration
Use reports and dashboards to deliver information to your AFLS mobile app users in the
ways that work best for them.
Run Batch Jobs
Automate the processing of large record volumes by running Apex batch jobs from the Admin
Console.
Trigger Handler Administration
View and activate trigger handlers in the Life Sciences Customer Engagement Admin Console.
Workflows for Life Sciences
AFLS for Customer Engagement workflows automate your business processes and guide
users through their tasks with clear steps. Configure the permissions and actions for each step of the
workflow based on the users' context and role. Implement custom validations to make sure that users
follow business processes, and provide checklists to help users understand how to use the workflow.
These workflows are supported both online and offline in the AFLS mobile app.


App Alerts

Deliver in-app notifications to sales reps in their flow of work by using App Alerts. Create alerts and assign
them to specific territories to make sure that notifications reach the right sales reps. With App Alerts,
enhance in-app communication, drive user engagement, and avoid missing opportunities.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:483 -->




## How App Alerts Work

Use App Alerts to create notifications, define how and when they appear, and deliver them to the
correct sales reps. With App Alerts, sales reps can view all alerts in one place, take immediate action,
and avoid missing opportunities.
Additional Message Field for App Alerts
Improve the standard look and presentation of alerts on the mobile app. Use the Additional Message
field on the App Alert object for custom message bodies, categorized tags, and the actions that users
can take directly from the alert.
Set Up App Alerts
Send relevant and targeted notifications, recommendations, and guided actions to sales reps on web
and mobile apps. Configure the trigger handlers, assign access to the Apex classes, and activate the
AFLS for Customer Engagement app for the standard user profile. Add the Lightning
component to the record page to show Alerts to your sales reps.
Create an App Alert
App alerts are the broader, contextual notifications that appear in specific application areas. Choose a
context type to control where the alert appears: All, Object, and Tab.
Record Alert Configuration for App Alerts
Target notifications associated with specific records, such as Accounts and Healthcare Providers, to
your users. You can create a record alert manually or trigger it automatically using the Business Rules
Engine.
Create App Alert Territories
App Alert Territories represents a junction between an Alert, either an App Alert or a Record Alert, and
a Territory where the alert is sent. Use App Alert Territories to associate an alert with one or more
territories so that only the users assigned to those territories see the message.
Mobile App Configuration for App Alerts
Configure the object schema for supported App Alerts objects and generate a metadata cache to
make sure your sales reps receive timely alerts on the AFLS Mobile app.
Create a Metadata Cache
Package the object scheme configuration into a downloadable metadata cache that the mobile app
can use. Create a metadata cache to make sure that the app consistently uses the latest metadata
definitions, even when a network connection is unavailable.


How App Alerts Work

Use App Alerts to create notifications, define how and when they appear, and deliver them to the correct
sales reps. With App Alerts, sales reps can view all alerts in one place, take immediate action, and avoid
missing opportunities.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:484 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You can create App Alerts for sales reps in three ways, depending on your business needs.

- Create Alerts Manually: Create records for the Record Alert, App Alert, and App Alert Territories
objects. To control who sees an alert, map it to one or more territories by using the App Alert
Territories object, which helps you target alerts geographically or organizationally. Only the users
assigned to the mapped territories see the alerts during the specified time period.
-    Create Alerts Automatically: Eliminate the need for manual intervention by automating alerts to trigger
based on specific conditions or user actions. For example, create rules in the Business Rules Engine or
use Flows to send alerts based on real-time context or business rules automatically. See Create Record
Alerts Using Business Rules Engine.
-    Surface Alerts from External Systems: If you have critical information stored outside of Salesforce, use
this method to bring it in as an alert. See Show External System Record Alerts in Salesforce.


Where and How Users See Alerts

Show the alerts directly in the Life Sciences Commercial app, so sales reps can stay informed in their flow
of work.

On mobile, sales reps open alerts from the bell icon in the app header. The message pane organizes
alerts into tabs for notifications, recommendations, and guided actions. Depending on the alert type,
here are some actions users can perform on the mobile app:

- View alerts grouped by type in the message pane
- Dismiss or resolve alerts and if needed, provide a reason
- Complete tasks or actions directly from alerts
- Go to external websites, apps, or internal records
Web: Alerts are shown in the Notifications List Lightning web component on the Notifications and
Recommendations tab. Add this component to a specific record page, the app's homepage, or an app
page. It adapts based on the context and visibility rules that you configure. Here are the actions users can
perform on the web app.

- Guided actions are grouped in the Notifications section
- Users can view alerts and mark them as Read

How Alert Visibility and Behavior Are Controlled

Control alert content and interaction by using the AdditionalMessage field on the App Alert object. This
field supports a JSON structure for defining deep links, external URLs, action buttons, and tags. See
Additional Message in App Alerts.


Note If the alert includes actions, use the actionName field with values such as Dismissed and

<!-- page:485 -->




Resolved. You can also define required and optional reasons that users select when they dismiss the
alert. These responses are stored in the App Alert User Response object.


Alert visibility is controlled by the AlertType and the ValidUntilDate fields.

- For mobile: Alerts remain visible until the user marks them as Read. If no ValidUntilDate value is set,
they stay visible indefinitely.
-    For web: Notifications and recommendations are visible for up to 7 days from the effective date,
unless dismissed or removed earlier. Guided Actions stay active until dismissed or resolved.

Here’s how alert behavior and visibility work across platforms:


Feature                           Web                                  Mobile

Sorting Logic                     If multiple alerts appear on the  Same as web: alerts are sorted
same record, the most recent      by effective date, with the
one, based on the effective date, newest alert shown first.
appears at the top of the list.

Actions                           Users can view and mark a            Users can mark a message as
message as Read.                     Dismissed or Resolved. These
actions are supported in the
message pane. When you
configure the alert to require a
dismissal reason, users can
provide one, as optional or
required. The alert is then
removed from the list, and the
related alert status is updated via
App Alert User Response.

Deep Links and Action Buttons     Not supported. Alerts can’t          Fully supported through the
include buttons or direct links to   AdditionalMessage JSON field.
records or external systems.         You can include buttons, deep
links, internal or external links,
and tags in your alerts.


Additional Message Field for App Alerts

Improve the standard look and presentation of alerts on the mobile app. Use the Additional Message
field on the App Alert object for custom message bodies, categorized tags, and the actions that users can
take directly from the alert.

<!-- page:486 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Additional Message configuration includes three main parts: Message, Tags, and Actions.


Message

Customize the alert message body by using plain text, hyperlinks, and deep links that direct users to
specific records or tabs. Use deep links to guide users to targeted actions directly from the alert. The
message supports:

- Basic HTML formatting, including <a> tags for hyperlinks
- Deep links to open tabs, records, and quick actions
- Web links to external content and documentation
Supported link formats for the Additional Message field.

The table outlines the link formats that you can use in the Additional Message field on the App Alerts
object. These formats use HTML <a> tags to create deep links and external links. The table also explains
the behavior and context of each link format.


Name                                 Examples                           Description


## Message Body

"message": "Agentforce
just got smarter. Expl
ore new features like
guided visit prep, acc
ount insights, and act
ion suggestions — all
designed to help you p
lan faster and engage
more effectively. Tap
to see <a href=\"http
s://siliconangle.com/2
025/05/12/salesforce-a
gentforce-data-cloud-p
ath-software-hyperscal
er\">what's new and bo
ost your daily workflo

<!-- page:487 -->




Name                            Examples                        Description


w</a> ."



## External Web Page

<a href=\"https://sili        • Opens the link inside the in-
conangle.com/2025/05/1            app browser when no target
2/salesforce-agentforc            attribute is specified.
e-data-cloud-path-soft        •   Opens the link inside the
ware-hyperscaler\">wha            device’s default browser, like
t's new and boost your            Safari instead of the in-app
daily workflow</a>                browser.



## <a href=\"https://ww

w.google.com?q=Today+W
eather\" target=\"_bla
nk\">Search Today weat
her in Browser</a>


Tabs                                                            Opens a Salesforce tab directly,
<a href=\"lsc4ce://dee
such as the Account tab.
plink/tab/standard-Acc
ount\" >Account Pag
e</a>


Specific Record                                                 Opens a specific record, such as
<a href=\"lsc4ce://dee
Account, using its record ID.
plink/tab/standard-Acc
ount/sobject-name/Acco
unt/record-id/xxxxx
x\">YYYYY</a>


Quick Actions                                                   Triggers a predefined quick
<a href=\"lsc4ce://dee
action on a specific record, such
plink/tab/standard-Acc
as logging a visit.
ount/sobject-name/Acco
unt/record-id/001fic00
0000PG9AAM/quick-actio
n/lsc4ce__LogAVisi
t\">Plan with Dr. Jone
s</a>

<!-- page:488 -->




Name                                Examples                            Description

External App Deep Linking                                               Opens a screen or channel in a
<a href=\"slack://chan
supported third-party app, such
nel?team=xxxxxxxxx&i
as Slack, using a valid deep link.
d=yyyyyyyyy\"></a>



Note Line breaks aren't supported in the message body. Double quotes (“) in link tags must be
escaped using backslash (\”).


Home Office Announcements

On App Alert records with the Announcement type, the Additional Message fields support these HTML
tags so you can customize the app alerts that appear as notifications on the Life Sciences Commercial
home page.

- <b>
- <i>
- <u>
- <s>
- <p>
- <br>
- <h1>, <h2>, <h3>, <h4>, <h5>, <h6>

Tags

Use tags to categorize additional messages and visually highlight their context and purpose. These tags
appear as labels in the alert that helps users quickly recognize the message. Each tag requires a title, a
short label identifying the tag, for example, What’s New.

Assign one or more tags to each message. Tags can represent campaign names, feature highlights, or
categories such as Territory, Engagement, and Product Update.

This example demonstrates how tags are defined in JSON format.


{
"tags":[ "Agentforce", "What's New", "Next Gen AFLS"
]
}



Actions

Use actions to define what happens when a user interacts with a message. Configure actions to open a

<!-- page:489 -->



web URL, launch a deep link, or enable the user to dismiss or resolve the message. Use these options to
direct users to relevant content or mark the notification as handled.

Suported Actions

For actions that involve opening a web URL or a deep link, each action must include at least a title and
an action. For the dismiss or resolve action type, the required fields are title, actionable, and
actionName; the action field is not necessary. In addition, there are parameters available to guide user
responses when they dismiss or resolve actions.

This table lists the required fields for the two action types.


Action Type                          Required Fields                      JSON Examples


## Open a Web URL or Deep Link

- Title: The label shown on the       {
action button.                    "notificationActions":
-   Action: The URL or deep link      [
that the action directs to.       {
"title": "Agentforce
2.0",
"action": "https://ww
w.theskyplanner.com/wh
at-is-salesforce-einst
ein/"
}
]
}



## Dismiss or Resolve Alerts

- Title: The label shown on the       {
action button.                    "notificationActions":
-   Actionable: Indicates whether     [
the action is interactive or      {
clickable for end users. When     "title": "Dismiss",
the actionable property is set    "actionable": true,
to true, the action button        "actionName": "Dismiss
becomes clickable, and the        ed",
system records the user's         "dismissOptions": [
response when the action is       "Acknowledged",
triggered. Skip this field for    "Expired"
actions that open a web URL       ],
or deep link.                     "dismissOptionRequire
-   actionName: Specifies the         d": true
outcome when users interact       }

<!-- page:490 -->




Action Type                          Required Fields                      JSON Examples


with the action.                   ]
-   (optional) dismissOptions: A       }
list of predefined options for
the user to choose from when
they dismiss the message.
-   (optional)
dismissOptionRequired:
Indicates whether selecting a
dismiss option is mandatory.


See Also
Create an App Alert


Set Up App Alerts

Send relevant and targeted notifications, recommendations, and guided actions to sales reps on web
and mobile apps. Configure the trigger handlers, assign access to the Apex classes, and activate the Life
Sciences Cloud for Customer Engagement app for the standard user profile. Add the Lightning
component to the record page to show Alerts to your sales reps.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure App Alerts:                               Life Sciences Commercial Admin


- Profiles are configured, and permission sets are assigned to users based on their roles. See Assign Life
Sciences Cloud for Customer Engagement Permission Sets.
-    If you’re using territory targeting, ensure your territory model includes territory types, active territory
models, and user assignments to territories. For more information, see Set Up Territory Types and
Territories.
-    Required data is available for related objects, such as Accounts, App Alerts, Record Alerts, and App
Alert Territories.

1. Make sure that your Salesforce org uses the default sharing settings because for App Alerts record
sharing is based on territory assignments.
- In the sharing settings for the App Alert and Record Alert objects, verify that default internal access

<!-- page:491 -->



is set to Private.
- On each user profile, verify that the View All Records permission is disabled for the App Alert and
Record Alert objects.
2. Configure trigger handlers for App Alerts.
a. From the App Launcher, find and select Admin Console.
b. Click Trigger Handler Administration.
c. Turn on NotificationTerritorySharingHandler.
Check if a record on the LifeScienceTriggerHandler object with the developer name
NotificationTerritorySharingHandler was created. If no record exists, create one.
3. From Setup, assign access to the required Apex classes through the built-in Life Sciences Field Sales
Representative or, optionally, through a custom profile created by you.
- LWCSoqlConnector
- NotificationsComponentController
- SystemController
- TerritorySwitcherCmpController
See Set Apex Class Access from Permission Sets and Set Apex Class Access from Profiles.
4. Add the built-in Notifications List Lightning component to the AFLS for Customer
Engagement app.
Add the Lightning component on a record, home, or app page.
a. From the App Launcher, find and select Life Sciences Commercial.
b. Click the     icon, and then click Edit Page.
c. In the Components section, find and select Notifications List in the search box.
d. Drag the component to the canvas.
e. Save your changes.
5. If you selected Announcement as the type of alert, add the AFLS Home Announcement Lightning
component to the AFLS for Customer Engagement app.
Add the Lightning component on a record, home, or app page.
a. From the App Launcher, find and select Life Sciences Commercial.
b.   Click the   icon, and then click Edit Page.
c.   In the Components section, find and select AFLS Home Announcements.
d.   Drag the component to the canvas.
e.   Save your changes.

See Also
Create an App Alert
Record Alert Configuration for App Alerts
Create App Alert Territories


Create an App Alert

App alerts are the broader, contextual notifications that appear in specific application areas. Choose a
context type to control where the alert appears: All, Object, and Tab.

<!-- page:492 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure App Alerts:                             Life Sciences Commercial Admin


1.    From the App Launcher, find and select App Alerts.
2.    Click New.
3.    Enter a subject as needed.
4.    Select the type of alert.
- Announcement: For broad internal communication, such as home office announcements.
Note Use Salesforce Files to upload images and create image URLs for home office
announcements. Make sure to use HTTPS image URLs rather than HTTP, as HTTPS is more
secure. See Upload Images in your Salesforce Org.If images in home announcements don't
appear, check whether the image URLs are from a domain added as a trusted URL. See Manage
Trusted URLs.

- Notification: For short, contextual updates to inform users about relevant actions or statuses.
- Recommendation: To guide users toward the next best action or suggestion.
- Guided Action: To direct users through specific tasks by using predefined instructions.
5. Select the display context type, as needed.
- Object: Shows the alert on the record pages of a specific object. On web and mobile, if the object
type is populated, the alert appears on all records of that object. You must populate the
DisplayContextName with the object name.
- Tab: Shows alerts on a specific tab in the app. The tab must be identified by the
DisplayContextName value.
- Global: Shows the alert across all records. Global is the default value applied if you leave the
DisplayContextType field blank. On the web and mobile, global alerts appear on the homepage.
6. Select the effective start date and time.
Indicates the date and time from when the alert becomes visible to users.
7. If needed, select the effective end date and time.
- On mobile, notifications and recommendations are visible by default for up to 7 days from the
effective start date, unless removed earlier.
- If no ValidUntilDate value is set for the web, alerts are visible indefinitely until the user marks them
as Read.
8. If needed, in Additional Message, enter the JSON object.
This field supports a JSON structure that enables deep links, external website links, action buttons,
and tags. If the alert is actionable, it must be marked as Dismissed or Resolved through the
actionName attribute in the JSON.
9. If you want to prevent the alert from popping up on mobile devices, select Silent.

<!-- page:493 -->



Users can still view messages in the message pane on mobile.
10. Save your changes.


## See Also

Additional Message Field for App Alerts
Set Up App Alerts


Record Alert Configuration for App Alerts

Target notifications associated with specific records, such as Accounts and Healthcare Providers, to your
users. You can create a record alert manually or trigger it automatically using the Business Rules Engine.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


For more information on creating a record in the Record Alert object, see Create a Record Alert.

To trigger alerts automatically, use Business Rules Engine to define the criteria to show a record alert
when a record meets specified conditions. See Create Record Alerts Using Business Rules Engine.

See Also
Set Up App Alerts


Create App Alert Territories

App Alert Territories represents a junction between an Alert, either an App Alert or a Record Alert, and a
Territory where the alert is sent. Use App Alert Territories to associate an alert with one or more territories
so that only the users assigned to those territories see the message.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure App Alerts:                               Life Sciences Commercial Admin

<!-- page:494 -->



1.    From the App Launcher, find and select App Alert Territories.
2.    Click New.
3.    In Alert Reference Record, select the app alert record.
4.    Find and select the territory that you want to link to the selected record.
5.    Save your changes.

Note Remove all associated App Alert Territories before you delete the App Alert record.


See Also
Set Up App Alerts


Mobile App Configuration for App Alerts

Configure the object schema for supported App Alerts objects and generate a metadata cache to make
sure your sales reps receive timely alerts on the AFLS Mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure App Alerts:                              Life Sciences Commercial Admin


Here's the set of objects that require object schema configuration.

- AppAlert
- AppAlertUserResponse
- AppAlertTerritories
- RecordAlert
1.    From the App Launcher, find and select Life Sciences Commercial.
2.    Click Admin Console.
3.    On the Life Sciences Customer Engagement Setup page, click Mobile.
4.    On the navigation pane, click Object Metadata Cache Configuration.
5.    Click New.
6.    Enter the details.
a. Enter the name of the entity configuration.
b. If you want to activate the configuration, select Is Active.
c. Select the users that you want to assign the entity to, based on their profiles or permission sets.
d. If needed, select the attachment data for the object.
For example, select Cache.
e. If needed, in Delta Date field, select the applicable fields for the object.

<!-- page:495 -->



f. To define a logic-based schema or data to store reference points, select the Configuration type.
g. To determine if the synchronization is unidirectional, select One Way Sync.
h. In Where Soql: select one of these.
- Simple: To define conditions by using basic filters.
- Advanced: To write a custom SOQL expression.
i. Select how you want the conditions to be evaluated.
- All of the conditions are met: To apply the rule only when all conditions are true.
- Any of the conditions are met: To apply the rule when at least one condition is true.
- Customize the logic: To define manually how multiple conditions are evaluated.
7. Save your changes.


## See Also

Customize the AFLS Mobile App
Generate Metadata Cache


Create a Metadata Cache

Package the object scheme configuration into a downloadable metadata cache that the mobile app can
use. Create a metadata cache to make sure that the app consistently uses the latest metadata
definitions, even when a network connection is unavailable.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license


USER PERMISSIONS NEEDED

To configure App Alerts:                            Life Sciences Commercial Admin


Important Run the metadata cache every time you configure the mobile app.


1.    From the App Launcher, find and select Admin Console.
2.    On the Modules Setup page, click the Mobile feature.
3.    On the left navigation panel, click Metadata Cache.
4.    On the Entities Setup page, click New.
5.    Enter the details.
a. Enter the name for the metadata cache.
b. Select the type of mobile UI.
For example, select Tab.
c. Enter a name of the tab.
d. Enter a number to determine the sequence in which you want this tab to appear on the admin
console.
e. Select the user profiles that can view this tab.

<!-- page:496 -->



f. To activate the configuration, select Is Active.
g. To save your changes, click Create New Cache.


Dynamic Tree View Components for Life Sciences

Configure a Dynamic Tree View component to show related AFLS for Customer
Engagement data in an expandable hierarchy. Users can easily explore related records in one place
without going to multiple pages, boosting visibility and saving time. For example, show the account
hierarchy within a health system, or visualize how healthcare professionals (HCPs) and healthcare
organizations (HCOs) are aligned under specific territories.

To create a Dynamic Tree View component, configure the objects that appear in the component. Then,
create the component that references the object configurations that you defined. Finally, add the
component to a Lightning record page.


## Create Object Configurations for a Dynamic Tree View Component

Configure the data that you want to show for each object in a AFLS for Customer
Engagement Dynamic Tree View component.
Configure a Dynamic Tree View Component
Create a dynamic tree view component configuration to show AFLS for Customer
Engagement data for related objects in a hierarchical view.
Add a Dynamic Tree View Component to a Record Page
Use Lightning App Builder to add your Dynamic Tree View component to the parent object’s Lightning
record page in AFLS for Customer Engagement.


Create Object Configurations for a Dynamic Tree View Component

Configure the data that you want to show for each object in a AFLS for Customer
Engagement Dynamic Tree View component.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a dynamic tree view object                   Life Sciences Commercial Admin permission set
configuration:

To create, edit, and delete field sets:                Customize Application

<!-- page:497 -->



Before you create a dynamic tree view object configuration, create field sets for each object that you
want to show in the component. Field sets define the fields shown in the component itself and in an info
icon on the component. Then, create the dynamic tree view object configurations.

1. From the App Launcher, find and select Admin Console, and then select Component Library.
2. Select Dynamic Tree View Object Configurations, and then create one.
3. Enter the basic details, such as the name for the dynamic tree view object configuration and whether
it’s active.
4. Enter the API name of the object that this configuration represents in the dynamic tree view
component.
5. To filter the records shown in the dynamic tree view component, enter custom filter logic.
For example, enter Status = 'Active' to show only the records in the Active state.
6. Choose whether to show percentage fields as a progress bar instead of a numeric value.
7. In Parent Object Lookup Field, enter the API name of the lookup field on this object that references
the parent object.
8. In the Object Column Field Set and Object Info Field Set fields, enter the API names of the field sets
that you created for this object.
9. Choose whether to show column headers for this object’s fields in the dynamic tree view component.
10. Enter the API names of the fields that you want to use for filtering or sorting records in the
component, and define the sort order for the records shown.
11. Save your changes.
12. For each object that you want to show in the dynamic tree view component, create a similar
configuration.

Next, create a dynamic tree view component configuration that references the object configurations that
you created.


## See Also

Create and Edit Field Sets


Configure a Dynamic Tree View Component

Create a dynamic tree view component configuration to show AFLS for Customer
Engagement data for related objects in a hierarchical view.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a dynamic tree view component              Life Sciences Commercial Admin permission set

<!-- page:498 -->




USER PERMISSIONS NEEDED

configuration:


1.    From the App Launcher, find and select Admin Console.
2.    Select Component Library.
3.    Select Dynamic Tree View Component Configurations, and then click New.
4.    Enter the basic details for the component, such as its name and whether it’s active.
5.    To filter the records shown for all objects in the component, enter a custom filter logic.
For example, enter Name = 'AccountName' to show the records related to a specific account.
6. In the Child Object Configuration, Parent Object Configuration, and Grandchild Object Configuration
fields, enter the API names of the dynamic tree view object configurations that you created for each
object you want to show in the component.
7. Choose whether to show a search bar and to let users filter records in the component.
8. Select whether the relationship between the parent and child objects uses a junction object. If it does,
enter the details.
- The API name of the junction object.
- The API name of the lookup field on the junction object that references the grandparent object.
- The API name of the lookup field on the junction object that references the related object.
9. Save your changes.

After you save your dynamic tree view component configuration, copy its API name. You need this
information to add your component to the parent object’s record page in Lightning App Builder.


Add a Dynamic Tree View Component to a Record Page

Use Lightning App Builder to add your Dynamic Tree View component to the parent object’s Lightning
record page in AFLS for Customer Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create and save Lightning pages in Lightning      Customize Application
App Builder:

To access the Dynamic Tree View component:           Life Sciences Commercial Admin permission set


1. From Setup, in the Quick Find box, search for and select Lightning App Builder.
2. Edit a record page for the parent object, or create one.

<!-- page:499 -->



3. Search the list of components for Dynamic Tree View, and then drag the component to the page.
4. In the properties pane, enter the API name of the Dynamic Tree View Component Configuration that
you created in the Admin Console.
5. To add visibility rules based on the record field, device type, or other filters, click Add Filter.
An eye icon indicates that visibility rules are applied.
6. Save your changes to the record page, and then activate the page to share it with your users.


## See Also

Get Help for Lightning App Builder


License Management in Life Sciences

Help your company comply to legal and regulatory standards, and adhere to audit-tracking measures
with flexible license validity evaluations. License management in Life Sciences is a critical process that
makes sure that healthcare providers (HCPs) have the required license and authorization to receive
pharmaceutical samples.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


During sample disbursement, sales reps verify whether the healthcare provider (HCP) receiving the
sample is licensed and eligible to practice in a given territory. For certain samples, users must also
validate whether the HCP is licensed to prescribe, dispense, and administer controlled or dangerous
drugs.

With License Management, you can configure custom formulas to evaluate the validity of an HCP's
license. You can also configure the license validity icons on Lightning page, and in visits, searches, and
lists.


## Configure Custom Formulas for License Validations

Prepare your org for License Management by configuring custom validation rules for evaluating the
status of HCP licenses.
Types of Licenses
License Management helps you configure license evaluations for these types of licenses: state license
numbers (SLNs), state distributor licenses (SDLs), and drug enforcement administration (DEA)
number. You can create custom validity formulas to control where these indicators are shown and
meet your company's specific needs.

<!-- page:500 -->




Configure Custom Formulas for License Validations

Prepare your org for License Management by configuring custom validation rules for evaluating the
status of HCP licenses.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create custom formulas:                           Life Sciences Commercial Admin permission set


Create a custom formula field by using a checkbox as the formula return type. This checkbox serves as an
automated check to indicate whether the license validation is successful or not.

1.    From the object management settings for Business License, go to Fields & Relationships.
2.    Select New.
3.    In Data Type, select Formula, and then click Next.
4.    Add a field label.
The field name is automatically populated.
5.    In Formula Return Type, select Checkbox and click Next.
6.    Add a formula for the validation evaluation.
For example, to check if a license is active, select Advanced Formula and then insert isActive.
7.    To make sure your formula is valid, select Check Syntax, and then click Next.
8.    Select the profiles the formula is visible to, and click Next.
The page layout is automatically selected. Keep it as is.
9.    Save your changes.


## See Also

Build a Formula Field


Types of Licenses

License Management helps you configure license evaluations for these types of licenses: state license
numbers (SLNs), state distributor licenses (SDLs), and drug enforcement administration (DEA) number.
You can create custom validity formulas to control where these indicators are shown and meet your
company's specific needs.

<!-- page:501 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


AFLS provides standard license validity formulas. With License Management, you can
configure flexible custom formulas for validity checks. You can also select where the validity indicators
are shown and which profiles can see it.


State License Numbers (SLNs)

SLNs are medical licenses for US healthcare providers (HCPs) and ensure that the HCPs are authorized to
practice medicine and receive or prescribe samples within a specific state. SLNs are typically checked
before sales reps disburse samples to them.


State Distributor Licenses (SDLs)

SDLs are issued to entities or facilities distributing dangerous drugs in certain states. In certain states,
entities that distribute dangerous drugs need specific licenses, such as Terminal Distributor of Dangerous
Drugs (TDDD) in Ohio.


Drug Enforcement Administration (DEA) Number

The DEA number is a license number issued by the Drug Enforcement Administration to providers who
prescribe controlled substances. DEA numbers are important for compliance and audit purposes, and
must be validated when samples include controlled substances.


## Define State License Number Validations

Check the medical license issued to an HCP to practice within a US state by configuring state license
number validations (SLNs). This configuration lets sales reps check a healthcare provider's license
validity before sharing product samples.
Define State Distributor License Validations
To help sales reps comply with regulatory standards while distributing samples, create state distributor
license (SDL) validations. This configuration ensures that the person or the facility that distributes high-
risk products, such as those categorized as dangerous drugs, has the necessary license to do so.
Define Drug Enforcement Administration License Validations
Help your org comply with federal rules by configuring Drug Enforcement Administration (DEA)-issued
identifiers for HCPs who prescribe, dispense, and administer controlled substances. Your sales reps
can confirm an HCP's license before providing samples. The DEA number ensures thorough regulation,
tracking, and audit of controlled substances.

<!-- page:502 -->



Define State License Number Validations

Check the medical license issued to an HCP to practice within a US state by configuring state license
number validations (SLNs). This configuration lets sales reps check a healthcare provider's license validity
before sharing product samples.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create license validations:                       Life Sciences Commercial Admin permission set


Note Make sure you've created a custom formula field on the Business License object.


1.    From the App Launcher, find and select Admin Console.
2.    Select License Management.
3.    In the left navigation pane, select State License Number Setup.
4.    Make these changes.
a. Choose whether this setting applies to the org or to a specific profile.
b. In the License Validity Check section, specify the validation formula by selecting the custom formula
that you configured in the Business License Object.
c. To change the formula configured in the Business License object, select Modify Formula.
d. Choose whether you want to evaluate the license validity and show the validity icon in visits,
searches and lists, and Lightning pages.
e. Save your changes.


Define State Distributor License Validations

To help sales reps comply with regulatory standards while distributing samples, create state distributor
license (SDL) validations. This configuration ensures that the person or the facility that distributes high-
risk products, such as those categorized as dangerous drugs, has the necessary license to do so.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:503 -->




USER PERMISSIONS NEEDED

To create license validations:                       Life Sciences Commercial Admin permission set


Note Make sure you've created a custom formula field on the Business License object.


1.     From the App Launcher, find and select Admin Console.
2.     Select License Management.
3.     In the left navigation pane, select State Distributor License Setup.
4.     Make these changes.
a. Choose whether this setting applies to the org or to a specific profile.
b. In the License Validity Check section, specify the validation formula by selecting the custom formula
that you configured in the Business License Object.
c. To change the formula configured on the Business License object, select Modify Formula.
d. Select Evaluate license validity and show icon in visits.
e. Move the states that require the license validation evaluation to the Selected Values list.
f. Save your changes.


Define Drug Enforcement Administration License Validations

Help your org comply with federal rules by configuring Drug Enforcement Administration (DEA)-issued
identifiers for HCPs who prescribe, dispense, and administer controlled substances. Your sales reps can
confirm an HCP's license before providing samples. The DEA number ensures thorough regulation,
tracking, and audit of controlled substances.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create license validations:                       Life Sciences Commercial Admin permission set


Note Make sure you've created a custom formula field on the Business License object.


1.    From the App Launcher, find and select Admin Console.
2.    Select License Management.
3.    In the left navigation pane, select DEA Number Setup.
4.    Make these changes.
a. Choose whether this setting applies to the org or to a specific profile.
b. In the License Validity Check section, specify the validation formula by selecting the custom formula
that you configured in the Business License Object.

<!-- page:504 -->



c. To change the formula configured on the Business License object, select Modify Formula.
d. Select Evaluate license validity and show icon in visits.
e. Save your changes.


Multi-Object Components for Life Sciences

The AFLS for Customer Engagement multi-object components consolidate fields from
several related objects onto a single record page, making it easier for users to view and manage data.
Showing fields from multiple objects together helps users avoid going to multiple pages and simplifies
the workflows for accounts, inquiries, and visits.


## How Multi-Object Components Work

With the multi-object Lightning components included with Life Sciences Customer Engagement, users
can create, edit, and view records that include fields from multiple objects on a single page.
Set Up the Multi-Object Create and Edit Components
Assign overrides for standard Salesforce buttons to help users in AFLS for Customer
Engagement create or edit records with fields from multiple objects.
Set Up the Multi-Object Record View Component
To help users in AFLS for Customer Engagement view fields from multiple objects on a
single record page, add the Multi-Object Record View component to record pages.


How Multi-Object Components Work

With the multi-object Lightning components included with Life Sciences Customer Engagement, users
can create, edit, and view records that include fields from multiple objects on a single page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Multi-Object Lightning Components

The AFLS for Customer Engagement managed package includes these Lightning
components that support multi-object layouts.

- The MultiEntityCreateOverride component overrides the New action so users can populate fields and
create multiple records at once.
- The MultiEntityEditOverride component overrides the Edit action so users can update fields from
multiple records at once.
-    The Multi-Object Record View component shows the details from related objects on a single Lightning

<!-- page:505 -->



record page.


Supported Objects

The account object supports these components to include fields from the healthcare provider object. To
override the New button on the account object, use the Search Before Create component. See Configure
Search Before Account Creation.

- MultiEntityEditOverride
- Multi-Object Record View
The inquiry object supports these components to include fields from the case object.

- MultiEntityCreateOverride
- MultiEntityEditOverride
- Multi-Object Record View
The visit object supports these components to include fields from the provider visit object. These
components are also supported on the provider visit object to show visit fields.

- MultiEntityEditOverride
- Multi-Object Record View

Considerations

When you set up multi-object components, keep these considerations in mind.

- Multi-object components are available only for supported objects.
- Multi-object components support objects with multiple object types, picklist assignments, and picklist
field dependencies.
-    Inline editing isn’t supported on record detail pages that include a multi-object component.
-    When users create records with a multi-object component, if one record has an error, no new records
are created.
-    When users create or edit records using a multi-object component, validation rules and errors appear
at the top of the page rather than inline.
-    The details that appear in each component depend on the existing parent records and related records.


Set Up the Multi-Object Create and Edit Components

Assign overrides for standard Salesforce buttons to help users in AFLS for Customer
Engagement create or edit records with fields from multiple objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:506 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access and work with AFLS for      Life Sciences Commercial Admin permission set
Customer Engagement multi-object components:

To override standard buttons:                        Customize Application


Multi-object Lightning components are supported only for these Life Sciences objects.


Lightning Component                                  Objects

lsc4ce:MultiEntityCreateOverride                     Inquiry

lsc4ce:MultiEntityEditOverride
- Account
- Inquiry
- Provider Visit
- Visit

1. From the management settings for the object whose buttons you want to override, go to Button, Links,
and Actions.
2. In the row for the New action, select Edit from the dropdown menu.
3. For the Lightning Experience Override, select Lightning component, and then select
lsc4ce:MultiEntityCreateOverride from the dropdown.
4. Save your changes.
5. Similarly, assign the override for the Edit action. Select lsc4ce:MultiEntityEditOverride as the override
for Lightning Experience.

The overrides that you apply to Lightning Experience also apply to the AFLS mobile app.


Set Up the Multi-Object Record View Component

To help users in AFLS for Customer Engagement view fields from multiple objects on a
single record page, add the Multi-Object Record View component to record pages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:507 -->




USER PERMISSIONS NEEDED

To access and work with AFLS for      Life Sciences Commercial Admin permission set
Customer Engagement multi-object components:

To create and save Lightning pages in Lightning      Customize Application
App Builder:


When you install the AFLS for Customer Engagement managed package, the default
Lightning record pages for these objects include the Multi-Object Record View component:

- Account
- Inquiry
- Provider Visit
- Visit
You can add the component to other Lightning record pages for the Account and Inquiry objects and
object types.

1. From Setup, in the Quick Find box, search for and select Lightning App Builder.
2. Edit a record page, or create one.
3. Search the list of components for Multi-Object, and then drag the Multi-Object Record View
component to the page’s Details tab.
4. Remove any other detail components from the tab.
5. Save your changes to the record page, and then activate the page to share it with your users.


## See Also

Get Help for Lightning App Builder


Provider Bulk Sync

Provider Bulk Sync helps organizations to effectively and efficiently manage their relationships with
Healthcare Organizations (HCOs) and Healthcare Providers (HCPs). It allows organizations to integrate
HCP and HCO data from IQVIA OneKey directly into the AFLS data model. This process
helps organizations get verified HCP data, which helps users have the right information for their
customer engagement plans and activities. The verified data can be used for territory planning and other
processes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Set Up Provider Bulk Sync by Using Built-In MuleSoft Integration

<!-- page:508 -->



Integrate AFLS with IQVIA’s OneKey to import healthcare provider and organization
information from an external system into Salesforce AFLS for Customer Engagement.
AFLS offers a prebuilt suite of integrations apps, such as the Provider Bulk Sync API and
the Onekey System API. These apps are deployed by using MuleSoft Direct to seamlessly integrate
with and import healthcare provider information from various external data sources.
Create a Copy of Healthcare Provider Address Records by Using Flows and Batch Jobs
Regulatory restrictions in certain countries prevent the retrieval of healthcare provider (HCP) addresses
via IQVIA OneKey. To ensure data completeness, use Salesforce batch jobs and flows to trigger
invocable actions that create copies of address records from the main affiliated healthcare
organizations (HCOs) for all corresponding HCP records. The Process Affiliation Address Records
invocable action is triggered when a healthcare professional's affiliation status changes, such as joining
or leaving a healthcare organization. The Process Contact Point Address Records invocable action is
triggered when a healthcare organization's address is added or updated.


Set Up Provider Bulk Sync by Using Built-In MuleSoft Integration

Integrate AFLS with IQVIA’s OneKey to import healthcare provider and organization
information from an external system into Salesforce AFLS for Customer Engagement. Life
Sciences Cloud offers a prebuilt suite of integrations apps, such as the Provider Bulk Sync API and the
Onekey System API. These apps are deployed by using MuleSoft Direct to seamlessly integrate with and
import healthcare provider information from various external data sources.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Integrate MuleSoft Direct

To address end-to-end business needs, integrate Salesforce apps with external systems by using
Integration Solutions with MuleSoft Direct. To set up MuleSoft Direct, see Integrate Solutions with
Mulesoft Direct. To set up integration for provider bulk sync, see Explore MuleSoft Direct Integration
Apps.

After the MuleSoft Direct integration is complete, you can sync healthcare provider and organization
data. After a sync job is initiated, you can get the status of the sync job and abort the sync job. To ensure
your provider data stays up to date, schedule a bulk data synchronization job from Salesforce to
automatically pull information from external systems like OneKey regularly.


Note If healthcare provider (HCP) address details aren’t synced, it’s likely due to regulatory
restrictions in that country. Alternatively, you can use Salesforce Flows and batch jobs that trigger

<!-- page:509 -->




invocable actions. This approach allows you to copy the missing address information directly from
the affiliated healthcare organizations (HCOs). See Create a Copy of Healthcare Provider Address
Records by Using Flows and Batch Jobs


## See Also

Explore MuleSoft Direct Integration Apps
Provider Bulk Sync Intergration App
Provider Bulk Sync API


Create a Copy of Healthcare Provider Address Records by Using Flows and
Batch Jobs

Regulatory restrictions in certain countries prevent the retrieval of healthcare provider (HCP) addresses
via IQVIA OneKey. To ensure data completeness, use Salesforce batch jobs and flows to trigger invocable
actions that create copies of address records from the main affiliated healthcare organizations (HCOs) for
all corresponding HCP records. The Process Affiliation Address Records invocable action is triggered
when a healthcare professional's affiliation status changes, such as joining or leaving a healthcare
organization. The Process Contact Point Address Records invocable action is triggered when a healthcare
organization's address is added or updated.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


- Process Contact Point Address: This invocable action synchronizes HCP address information with the
affiliated HCOs. When an HCO address is created, the action creates a copy of the address for all
affiliated HCPs. When an HCO address becomes inactive, the action deactivates the corresponding
copied addresses for all affiliated HCPs.
-    Process Affiliation Address: This invocable action ensures HCPs always have accurate address
information based on their active affiliations with healthcare organizations (HCOs). When an HCP is
affiliated with an HCO, the action copies the HCO addresses and links them to the HCP record. When
the affiliation ends, the action deactivates the copied addresses to maintain up-to-date data.

To copy HCP address records from affiliated HCOs, create the required batch jobs and Salesforce Flows.
The batch job triggers the flow, which in turn invokes the invocable action to create the address records.


## Create Flows to Trigger Invocable Actions to Copy Addresses

Create Salesforce Flows that are used by batch jobs to trigger invocable actions that create a copy of
healthcare provider (HCP) address records from the affiliated healthcare organization (HCOs).
Create Batch Jobs to Copy Healthcare Provider Addresses
Create Batch Management jobs that trigger the necessary flows, which in turn call the invocable

<!-- page:510 -->



actions to create a copy of the Contact Point Addresses and Process Provider Affiliation Addresses.
Sequence Address Batch Jobs by Using a Flow
To make sure that address synchronization batch jobs run in the correct order, create a flow that
automatically initiates the Process Provider Affiliation Addresses batch job only after the Process HCP
Contact Point Addresses batch job completes.


Create Flows to Trigger Invocable Actions to Copy Addresses

Create Salesforce Flows that are used by batch jobs to trigger invocable actions that create a copy of
healthcare provider (HCP) address records from the affiliated healthcare organization (HCOs).


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a flow:                                     Manage Flow


Create a Flow to Copy HCP Contact Point Addresses

Create the flow to trigger the Process Contact Point Address invocable action.

1. From Setup, enter Flows in the Quick Find box, select Flows, and then select New Flow.
2. In the New Flow window, select Autolaunched Flow (No Trigger).
3. Create variables for input values.
a. From the toolbox, select Manager and then select New Resource.
b. For Resource Type, select Variable.
c. For API Name, enter cpaRecordId.
d. For Data Type, select Text.
e. For Description, enter The ID of the contact point address that was passed into the
flow.
f. Select Available for input.
g. Click Done.
4. Create an action element that calls the invocable action and uses the cpaRecordId variable.
a. For Category, select Ls Commercial.
b. Select the Process Contact Point Address Records invocable action.
c. For Label, enter Process Contact Point Address Records.
The API name is automatically populated.
d. Set cpaRecordId as an input value.
e. Click Done.

<!-- page:511 -->



5. Save and activate the flow.


Create a Flow to Copy Provider Affiliation Addresses

Create the flow to trigger the Process Affiliation Address invocable action.

1. From Setup, enter Flows in the Quick Find box, select Flows, and then select New Flow.
2. In the New Flow window, select Autolaunched Flow (No Trigger).
3. Create variables for input values.
a. From the toolbox, select Manager and then select New Resource.
b. For Resource Type, select Variable.
c. For API Name, enter affiliationRecordId.
d. For Data Type, select Text.
e. For Description, enter the ID of the provider affiliation that was passed into the
flow.
f. Select Available for input.
g. Click Done.
4. Create an action element that calls the invocable action and uses the affiliationRecordId variable.
a. For Category, select Ls Commercial.
b. Select the Process Provider Affiliation Address Records invocable action.
c. For Label, enter Process Affiliation Address Records.
The API name is automatically populated.
d. Set affiliationRecordId as an input value.
e. Click Done.
5. Save and activate the flow.


Create Batch Jobs to Copy Healthcare Provider Addresses

Create Batch Management jobs that trigger the necessary flows, which in turn call the invocable actions
to create a copy of the Contact Point Addresses and Process Provider Affiliation Addresses.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a batch job:                                System Administrator profile

<!-- page:512 -->




Create a Batch Job to Copy HCP Contact Point Addresses

Create the batch job to invoke the flow that triggers the Process Contact Point Address invocable action.

1. From Setup, in the Quick Find box, enter Batch Management, and select it.
2. Click New.
3. Complete the required fields.
a. For Name, enter Process HCP Contact Point Addresses.
b. For Process Type, select Flow.
c. For Execution Process, select the Process HCP Contact Point Addresses flow.
d. For Group, enter Life Sciences.
e. Enter the batch size, retry count, and retry interval.
f. Click Next.
4. Select the Flow Input Variable as cpaRecordId and Object as Contact Point Address.
5. Enter the conditions shown in the table.

Field                         Operator                  Type                  Value


## Greater Than Or Equal

Last Modified Date                                      Input Variable        startTime
To

Last Modified Date            Less Than Or Equal To     Input Variable        endTime

Last Modified By ID           Equals                    Value                 Integration User


## Greater Than Or Equal

Created Date                                            Input Variable        startTime
To

Created Date                  Less Than Or Equal To     Input Variable        endTime

Active                        Equals                    Value                 False

6. Save and activate the batch job.


Create Batch Job to Copy Provider Affiliation Addresses

Create the batch job to invoke the flow that triggers the Process Affiliation Address Records invocable
action.

1. From Setup, in the Quick Find box, enter Batch Management, and select it.
2. Click New.
3. Complete the required fields.
a. For Name, enter Process Provider Affiliation Addresses.
b. For Process Type, select Flow.
c. For Execution Process, select the Process Provider Affiliation Addresses flow.
d. For Group, enter Life Sciences.
e. Enter the batch size, retry count, and retry interval.
f. Click Next.

<!-- page:513 -->



4. Select the Flow Input Variable as affiliationRecordId and Object as Provider Affiliation.
5. Enter the conditions shown in the table.

Field                         Operator                  Type                   Value


## Greater Than Or Equal

Last Modified Date                                      Input Variable         startTime
To

Last Modified Date            Less Than Or Equal To     Input Variable         endTime

Last Modified By ID           Equals                    Value                  Integration User

Affiliation Type              Equals                    Value                  Hard


## Account Person

Equals                    Value                  True
Account


## Related Account Person

Equals                    Value                  False
Account


## Greater Than Or Equal

Created Date                                            Input Variable         startTime
To

Created Date                  Less Than Or Equal To     Input Variable         endTime

Active                        Equals                    Value                  False

6. Save and activate the batch job.


Sequence Address Batch Jobs by Using a Flow

To make sure that address synchronization batch jobs run in the correct order, create a flow that
automatically initiates the Process Provider Affiliation Addresses batch job only after the Process HCP
Contact Point Addresses batch job completes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a flow:                                       Manage Flow


1. From Setup, enter Flows in the Quick Find box, select Flows, and then select New Flow.
2. In the New Flow window, select Platform Event - Triggered Flow.
3. For Platform event, select Batch Job Status Changed Event and in Advanced settings, select Run this

<!-- page:514 -->



flow as the user that triggered the event.
4. Create a decision element that uses a record or answers from a screen input to determine a flow path.
a. On the flow canvas, add a Decision element.
b. Enter a label and API name for the element, for example Is HCP Contact Point Addresses
Batch Job Complete?
c. Give labels for the outcomes and enter these conditions.

Resource                        Operator                         Value

Process_HCP_Contact_Point_A
ddresses’s
Triggering                                                       BatchJobDefinitionId
BatchJobStatusChangedEvent      Equals
-> Batch Job                                                     Example batch job definition
ID: 0maxx0000000001AAA



## Triggering

BatchJobStatusChangedEvent      Does not Equal                   Cancelled
-> Batch Job

d. Click Done.
5. Create variables that store the batch job runtime parameters and make the value available for output.
a. From the toolbox, select Manager and then select New Resource.
b. For Resource Type, select Variable.
c. For API Name, enter batchJobRuntimeParameters.
d. For Data Type, select Text.
e. Select Available for output.
f. Click Done.
6. Create a Get Records element to retrieve the HCP Contact Point Addresses batch job details.
a. On the flow canvas, add a Get Records element.
b. Enter a label and API name for the element, for example Get Batch Job Record.
c. For Object, select Batch Job.
d. Under Filter Account Records Condition Requirements, select All Conditions are Met (AND).
e. For Field, enter Id, then select Run ID.
f. For Operator, select Equals.
g. For Value, select Resource Triggering BatchJobStatusChangedEvent -> Batch Job.
h. For How Many Records to Store, select Only the first record.
i. For How to Store Record Data, select Choose fields and assign variables (advanced).
j. For Where to Store Field Values, select In separate variables.
k. For Field, select Runtime Parameter.
l. For Value, select batchJobRuntimeParameters.
m. Click Done.
7. Create these formulas to get the individual batch job runtime parameters.

<!-- page:515 -->




API Name                      Data Type                       Formula



LEFT(
MID(
{!batchJobRuntimeP
arameters},
FIND('{"name":"sta
rtTime","value":"',
{!batchJobRuntimeParam
eters}) + LEN('{"nam
e":"startTime","valu
e":"'),
50
),
FIND(
extractedStartTime            TEXT                                  '"',
MID(
{!batchJobRuntim
eParameters},
FIND('{"name":"s
tartTime","value":"',
{!batchJobRuntimeParam
eters}) + LEN('{"nam
e":"startTime","valu
e":"'),
50
)
) - 1
)




LEFT(
MID(
{!batchJobRuntimeP
arameters},
extractedEndTime              TEXT                                  FIND('{"name":"end
Time","value":"', {!ba
tchJobRuntimeParameter
s}) + LEN('{"name":"en
dTime","value":"'),
50

<!-- page:516 -->




API Name                          Data Type                         Formula


),
FIND(
'"',
MID(
{!batchJobRuntim
eParameters},
FIND('{"name":"e
ndTime","value":"',
{!batchJobRuntimeParam
eters}) + LEN('{"nam
e":"endTime","valu
e":"'),
50
)
) - 1
)




## DATETIMEVALUE(SUBSTITU

TE(SUBSTITUTE({!extrac
startTimeAsDateTime               Date/Time                           tedStartTime}, "T", "
"), "Z", ""))




## DATETIMEVALUE(SUBSTITU

TE(SUBSTITUTE({!extrac
endTimeAsDateTime                 Date/Time                           tedEndTime}, "T", "
"), "Z", ""))



8. Create an Action element to trigger the Process Provider Affiliation Addresses Batch job. This element
uses the startTimeAsDateTime and endTimeAsDateTime formulas.
a. Select the Category as Batch Job, and then select the Process Provider Affiliation Addresses batch
job.
b. For Label, enter Trigger Process Provider Affiliation Address Batch Job.
The API name is automatically populated.
c. In the Set input values section, select startTime as startTimeAsDateTime and endTime as
endTimeAsDateTime.
d. Click Done.
9. Save and activate the flow.

<!-- page:517 -->




Data 360 for Life Sciences Customer Engagement

Integrate Data 360 with AFLS by using the Life Sciences Data Kit. When you deploy the Life
Sciences Data Kit, you get access to prebuilt data mappings, data streams, and other features that unify
and harmonize your Account Management data.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, Data 360, and the Life Sciences Customer Engagement
managed package.



## Set Up Data 360 for AFLS for Customer Engagement

Before you use the Life Sciences data kit, complete the basic configurations required to work in Data
360. Set up Data 360, enable the required AFLS for Customer Engagement features,
connect Data 360 to your Salesforce CRM org, and verify the SSOT version.
Deploy Life Sciences Data Kit
Deploy Life Sciences Data Kit to access data streams, data lake objects, and data transforms built
specifically for Life Sciences use cases.


Set Up Data 360 for AFLS for Customer Engagement

Before you use the Life Sciences data kit, complete the basic configurations required to work in Data
360. Set up Data 360, enable the required AFLS for Customer Engagement features,
connect Data 360 to your Salesforce CRM org, and verify the SSOT version.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, Data 360, and the Life Sciences Customer Engagement
managed package.


USER PERMISSIONS NEEDED

To use Data Cloud:                                   Data Cloud Architect permission set

To set up AFLS for Customer           Life Sciences Commercial Admin permission set
Engagement features:


1. Review and complete all the steps mentioned in the Salesforce Data 360 documentation.
a. Plan Your Data 360 Strategy.
b. Manage Data 360 Users.

<!-- page:518 -->



c. About Data Spaces.
d. Set Up a Salesforce Org CRM Connection.
2. Enable the AFLS for Customer Engagement features required to access the data kits and
their components.
a. Go to Data Cloud Setup.
If you don’t see this option, refresh your page, or log out and log back in with your admin user
credentials.
b. To enable Data Cloud, click Get Started.
Setup can take a few minutes.
c. Turn on AFLS for Customer Engagement features.
3. Connect Data 360 to your Salesforce CRM org.
a. In Data Cloud, click Data Cloud Setup.
b. In the Quick Find box, enter Salesforce CRM, then click Salesforce CRM.
c. Click New.
d. To connect to the Salesforce org that has Data Cloud provisioned, click Connect.
e. After you connect your Salesforce org, review the connection details.
Your Salesforce org is now connected as a data source and data action target.
4. Ensure that your users have Read, View All Fields, and View All Records access to all objects included in
the data kit. See Enable Object and Field Permissions for CRM Connections.
5. Enable the system permissions required to deploy data from the data kit.
a. From Setup, in the Quick Find box, enter Permission, and then select Permission Sets.
b. Select the Data Cloud Salesforce Connector permission set.
c. Click System Permissions.
d. Search for and enable all permissions related to these terms: activity plan, territory, next best,
provider visit, and inventory.
6. Assign the Data Cloud Admin and Life Science Commercial licenses to the System Administrator
profile. See Enable a Permission Set License for the Admin.
7. Verify the SSOT package version.
a. From Setup, in the Quick Find box, enter Installed Packages, then select Installed Packages.
b. Verify that the Salesforce Standard Data Model SSOT version is current.


Deploy Life Sciences Data Kit

Deploy Life Sciences Data Kit to access data streams, data lake objects, and data transforms built
specifically for Life Sciences use cases.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, Data 360, and the Life Sciences Customer Engagement
managed package.

<!-- page:519 -->




USER PERMISSIONS NEEDED

To deploy data kits:                                 Data Cloud Architect permission set


The data kit includes five ready-to-use bundles: Activity Plan, Marketable Product, Presentation, Provider
Visit, and Sales Territory Account.

1. From Data Cloud Setup, in the Quick Find box, enter Data Kits, and then select Data Kits.
2.    Find and select Life Sciences Data Kit.
3.    Review the contents of the data kit, then select Data Kit Deploy.
4.    Select a data space and enter your org ID.
5.    Click Deploy.


## Data Model Objects in Life Sciences Data Kit

The bundles in the Life Sciences Data Kit contain the data streams with mappings for these data
model objects.


Data Model Objects in Life Sciences Data Kit

The bundles in the Life Sciences Data Kit contain the data streams with mappings for these data model
objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, Data 360, and the Life Sciences Customer Engagement
managed package.


Bundle                                               Object Name

Activity Plan                                        Activity Plan

Activity Plan Sales Territory

Provider Activity Goal

Provider Activity Goal Measure

Provider Activity Measure Type

Marketable Product                                   Product Guidance

Life Science Marketable Product

Inventory Product Disbursement

Presentation                                         Presentation Page

<!-- page:520 -->




Bundle                                               Object Name

Presentation Click Stream Entry

Presentation Forum

Presentation Linked Page

Presentation Page Product

Presentation Party Access

Presentation

Provider Visit                                       Provider Visit Detailing Product Message

Provider Visit Product Detailing

Provider Visit

Provider Visit Marketing Item

Provider Visit Product Discussion

Provider Visit Requested Sample

Sales Territory Account                              Sales Territory Acct Prodt Message Score

Sales Territory Acct Recommended Action

Sales Territory Account Score



Quick and Custom Action Management

To simplify user experiences in Salesforce and the Life Sciences for Customer Engagement mobile app,
leverage quick actions and custom actions. These actions provide convenient access to essential
information and common tasks, which streamlines user navigation and workflows.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Quick actions provide direct access to core functionalities and help users initiate key processes without
extensive searching. For example, from an account profile, users can schedule a visit, send an email, or
start a remote visit from a visit record. This immediate accessibility reduces clicks and saves time.

Custom actions invoke Lightning components, flows, Visualforce pages, or canvas apps with the

<!-- page:521 -->



functionality that you define. Use custom actions to simplify commonly performed processes that are
unique to your business needs.


Set Up and Manage Quick Actions

Define who can use specific Life Sciences Customer Engagement quick actions and where the actions
appear. Make sure that the correct users see the correct options exactly when they need them.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To manage quick actions:
Life Sciences Commercial Admin permission set

AND

Customize Application


1. Create an action.
a. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
b. Select Quick and Custom Action Administration, and then select Quick Actions.
c. Select New.
d. Enter a label, name, action name, location, and sort order.
e. If needed, set optional values such as mobile only, sort order, icon, color, associated object, and
record type.
f. Select the profiles and permission sets that can access the action.
g. Save your changes.
2. Manage existing actions.
a. From the App Launcher, find and select LifeSciences Commercial, and then select Admin Console.
b. Select Quick and Custom Action Administration, and then select Quick Actions.
c. From the dropdown, select the action.
- Edit: Change the location, sort order, icon, color, associated object, and record type. Or, update
the profiles and permission sets that have access to the action.
- Activate/Deactivate: Turn the action on or off.
- View Assignments: See a list of profiles and permission sets assigned to the action.
d. Save your changes.


Create Custom Actions

Invoke Lightning components, flows, Visualforce pages, or canvas apps with the functionality that you
define for Life Sciences Customer Engagement users.

<!-- page:522 -->




**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To create custom actions:
Life Sciences Commercial Admin permission set

AND

Customize Application


1.    From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2.    Select Quick and Custom Action Administration, and then select Custom Actions.
3.    Select New.
4.    Enter a label and name for the custom action.
5.    To define where the action is available to users, select an entity type.


Home Page                                          The action is available on the mobile app Home
page.

SObject                                            The action is available on the object defined in
the Entity Name field.

Stage Path                                         The action is available for stage paths.

Visit                                              The action is available to support custom visit
management tasks.

6. To define where the action takes place, select the action type.


App                                                The action takes place in the mobile app.

URL                                                The action opens a new URL.

Utterance                                          The action sends a predefined message to
Agentforce.

7. Select the target type.
- Internal
- External
8. Enter values in the additional fields to meet your business needs.
9. Save your work.

See Also
Quick Actions

<!-- page:523 -->




Related Lists for Life Sciences

Records in Salesforce can include details and links to other related records. The AFLS for
Customer Engagement related list offers more customization and filtering options than standard related
lists. If you create a AFLS for Customer Engagement workflow, you can also control the
actions that users can take on related records based on the parent record’s status, user role, and other
business rules. These related lists are supported both online and offline in the AFLS mobile
app.

When you add the Customer Engagement related list to a record page, you can:

- Customize the list’s header, icon, and columns.
- Filter the records in the list.
- Populate fields on new records based on the parent record's data.
- Specify the record types that users can create.
Get Your Org Ready for Life Sciences Related Lists
Before you create a Life Sciences Customer Engagement related list, complete these steps.
Create Related Lists for Life Sciences
Add a AFLS for Customer Engagement related list to the page layout for Life Sciences
objects, standard Salesforce objects, and custom objects. The related list appears in Life Sciences
Cloud on desktop and in the mobile app.


Get Your Org Ready for Life Sciences Related Lists

Before you create a Life Sciences Customer Engagement related list, complete these steps.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure the Life Sciences Customer               Life Sciences Commercial Admin permission set
Engagement related list:

To create field sets and custom fields:               Customize Application


1. If needed, create a relationship between the parent and child object.
a. Create a lookup field from the child object to the parent object.
b. Add the field to the child object’s page layout.
2. To define the columns for the related list, create a field set.

<!-- page:524 -->



Add up to 10 fields, and arrange them in the order that you want the columns to appear in.
3. To grant users access to the related list child object and any fields used to filter the records in the list,
update permission sets.
These permissions make sure that users can create, read, edit, or delete records in the related list.
4. To further control when users can create, edit, and delete related records based on their role and the
parent object record’s status, create a Life Sciences Customer Engagement workflow for the parent
object.
5. If needed, create custom Lightning web components for the New, Edit, and Delete actions, or other
actions that you want to include in the related list.
You can also create a custom component for the View All link on related lists on iOS.
6. Set up the configurations for the related list to work in the AFLS mobile app.
a. Set up object metadata cache configurations for the related list objects.
b. Generate a metadata cache to package the object schema configuration that the Life Sciences
Cloud mobile app uses for online and offline access.


Create Related Lists for Life Sciences

Add a AFLS for Customer Engagement related list to the page layout for Life Sciences
objects, standard Salesforce objects, and custom objects. The related list appears in AFLS
on desktop and in the mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure the AFLS for Customer       Life Sciences Commercial Admin permission set
Engagement related list:

To create and save Lightning pages in Lightning         Customize Application
App Builder:


When you install the AFLS for Customer Engagement managed package, these default
Lightning record pages include some related lists automatically:

- Account
- Inquiry
- Visit
You can add a Customer Engagement related list to other standard and custom Lightning record pages.

1. From Setup, in the Quick Find box, search for and select Lightning App Builder.

<!-- page:525 -->



2. Edit a record page, or create one.
3. Search the list of components for Related List, and then drag the Related List — Life Sciences
component to the record page’s Related tab.
4. In the properties pane, customize the list.
a. Enter the API name of the child object whose related records you want to show.
b. Enter the API name of the field set that you created on the child object.
The field set defines the fields that you want to use as the list’s columns.
c. Enter the title of the related list.
d. Enter the name of the Salesforce Lightning Design System (SLDS) icon that you want to include in
the list header. Use the format group:name.
e. Enter the API name of the action handler component that handles the edit and delete actions.
To use the standard Edit and Delete actions for each record in the related list, enter
StandardUpdateDeleteHandler.
f. To filter the records in the list, enter a WHERE clause in SOQL format.
For example, enter AccountId = 'recordId'. You can also filter on a polymorphic field. For
example, ContactPointReferenceId IN (SELECT ID from ContactPointAddress WHERE
ParentId = !recordId ) .
g. Enter the API name of the action handler component that handles the new action.
To show the standard New action so users can create related records from the list, enter
StandardNewAction.
h. If the child object has record types, specify the record types that users can create from the list. Enter
the record type API names in a semicolon separated list.
If you don’t specify record types, users can create all types.
i. To simplify data entry, enter the API name of the relationship field to be populated automatically on
new related records. The relationship field must be added to the child record’s page layout.
j. To open the standard View All page, enter StandardViewAll in the View All Component field. To
show users a custom View All page on iOS devices, enter the name of the Lightning web component
that you created.
k. Choose whether to show the number of records in the list header.
5. To add visibility rules based on the record field, device type, or other filters, click Add Filter.
The eye icon on the component indicates that visibility rules are applied.
6. Save your changes to the record page, and then activate the page to share it with your users.

After you add the related list to the page layout, create a metadata cache for the required profiles so
users can access the data in the mobile app when they’re offline.


## See Also

Get Help for Lightning App Builder


Reports and Dashboards Administration

Use reports and dashboards to deliver information to your AFLS mobile app users in the
ways that work best for them.

<!-- page:526 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Manage Reports and Dashboards Settings

Define settings for the reports and dashboards shown to users on the AFLS mobile app.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To manage reports and dashboards settings:
Life Sciences Commercial Admin permission set

AND

Customize Application


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Reports and Dashboards, and then select Reports and Dashboards Settings.
3. Select the mobile report settings based on your business needs.
- Show Sales Data Chart
- Show reports
4. Select the refresh frequency.
5. Save the settings.


Limitations for Charts and Dashboards in the AFLS Mobile
App

Learn about the limitations for report charts and dashboards in the AFLS mobile app. Not
all chart types render correctly or are supported.

After you set up reports and dashboards, you can add them to Lightning page components to help users
visualize data from the Customer Engagement home page and record detail pages. In Lightning App
Builder, you can add these standard components to Lightning pages.

- Dashboard: Supported on the home page
- Report Chart: Supported on the home page and Lightning record pages
You can also show reports or dashboards in separate tabs within the AFLS mobile app.

<!-- page:527 -->




## Limitations for Bar and Column Charts

Standard bar charts and column charts are replaced with stacked charts in the AFLS
mobile app.



## Unsupported Chart Types

These chart types aren’t supported in the AFLS mobile app

- Funnel charts
- Scatter charts
See Also
Customize Reports and Dashboards
Reports and Dashboards
Get Help for Lightning App Builder


Run Batch Jobs

Automate the processing of large record volumes by running Apex batch jobs from the Admin Console.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To run batch jobs:                                   Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select a tile and find the batch job you want to run. For example, Products.
3. To run the batch job now, click Run Now.
a. Select a territory and its subordinates from the appropriate level in the territory hierarchy.
b. Select the batch size for the job, drag the slider handle. The default value is 200.
c. Click Run.
4. To schedule the job for a later time, click Schedule.
a. Select a frequency.
b. To select the batch size of the job, drag the slider handle. The default value is 200.
c. Save your changes.

<!-- page:528 -->




Trigger Handler Administration

View and activate trigger handlers in the Life Sciences Customer Engagement Admin Console.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Manage Trigger Handlers

View all Life Sciences Customer Engagement trigger handlers in one place, and turn them on or off.
Trigger Handlers for the Account - AssessmentTask Objects
Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Account, AccountPlan, AccountPlanObjective, AccountPlanParticipant, ActionPlan, ActivityPlan,
ActivityPlanTerritory, AppAlertTerritory, and AssessmentTask objects.
Trigger Handlers for the Case - GoalAssignment Objects
Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Case, CommSubConsentCmplSnpsht, CommSubscription, CommSubscriptionConsent,
ContactPointAddress, ContactPointEmail, ContactPointPhone, ContactPointSocial, ContentDocument,
ContentDocumentLink, Expense, ExpenseParticipant, and GoalAssignment objects.
Trigger Handlers for the HealthcareProvider - PresentationLinkedPage Objects
Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty,
InventoryCntProdtBatchItem, InventoryCountAssessment, InventoryOperation, LifeScienceEmail,
LifeSciMarketableProduct, Location, Presentation, PresentationForum, and PresentationLinkedPage
objects.
Trigger Handlers for the MedicalInsight - Subject Objects
Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
MedicalInsight, UserReaction, Subject and SubjectAssignment objects.
Trigger Handlers for the ProductBatchItem - ProductTransfer Objects
Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductBatchItem, ProductDisbursement, ProductGuidance, ProductionBatch, ProductRequest,
ProductRequestLineItem, ProductTerrDtlAvailability, ProductTerritoryAvailability, and ProductTransfer
objects.
Trigger Handlers for the ProviderAcctProductInfo - PrvdVstSmplLmtTransaction Objects
Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderAcctProductInfo, ProviderAcctTerritoryInfo, ProviderActivityGoal, ProviderAffiliation,
ProviderVisit, ProviderVisitChangedEvent, ProviderVisitDtlProductMsg, ProviderVisitMarketingItem,
ProviderVisitProdDetailing, ProviderVisitProdDiscussion, ProviderVisitRqstSample, and
PrvdVstSmplLmtTransaction objects.

<!-- page:529 -->




## Trigger Handlers for the SurveySubject - Visitor Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
SurveySubject, Territory2, TerritoryAcctRcmdAction, TerritoryBusinessPlan, TerritoryContentTmplAsgnt,
TerritoryUserDowntime, Visit, and Visitor objects.


Manage Trigger Handlers

View all Life Sciences Customer Engagement trigger handlers in one place, and turn them on or off.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To manage trigger handlers:
Life Sciences Commercial Admin permission set

AND

Customize Application


Before you can use the Admin Console to manage trigger handlers, you must enable it.

1.    From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2.    Select Trigger Hander Administration.
3.    Find specific trigger handlers by using the Object API Name dropdown or Search field.
4.    Turn the trigger handler on or off.


Trigger Handlers for the Account - AssessmentTask Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Account, AccountPlan, AccountPlanObjective, AccountPlanParticipant, ActionPlan, ActivityPlan,
ActivityPlanTerritory, AppAlertTerritory, and AssessmentTask objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You can also review the trigger handlers that apply to all objects.


Account

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the

<!-- page:530 -->



Account object.


Trigger Name                               Description                    Trigger condition

NewAccountSampleLimitInitHandlerforH Initializes the HCO accounts         afterInsert
CO                                   for the Provider Sample
Limit Template.

NewAccountSampleLimitInitHandler           Initializes the HCP accounts   afterInsert
for the Provider Sample
Limit Template.


AccountPlan

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
AccountPlan object.


Trigger Name                               Description                    Trigger condition

AccountPlanDeleteChildrenHandler           Handles the deletion of        beforeDelete
Account Plan Children
records.

AccountPlanChangeStatusHandler             Updates the completion         beforeInsert, beforeUpdate
percentage of the Account
Plan records based on
updates in the related
Account Plan Objective
records.


AccountPlanObjective

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
AccountPlanObjective object.


Trigger Name                               Description                    Trigger condition

SetAccPlanPercentCompleteHandler           Updates the completion         beforeInsert, afterInsert,
percentage of the Account      beforeUpdate, afterUpdate,
Plan Objective records         afterDelete
based on updates in the
related Action Plan records.

<!-- page:531 -->




AccountPlanParticipant

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
AccountPlanParticipant object.


Trigger Name                               Description                    Trigger condition

AccountPlanToParticipantSharingHandler Shares Account Plan and            afterInsert, afterUpdate,
hierarchical records with          afterDelete
participants.


ActionPlan

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ActionPlan object.


Trigger Name                               Description                    Trigger condition

SetAccObjectPercentCompleteHandler         Updates the completion         beforeInsert, afterInsert,
percentage of the Action       beforeUpdate, afterUpdate,
Plan records to 100% when      afterDelete
the parent Account Plan’s
status is changed to
Completed.

ActionPlanDeleteChildrenHandler            Deletes all the action plans   beforeDelete, afterDelete
related to a parent account
plan when the account plan
is deleted.

SetSprintPercentCompleteHandler            Updates the completion         afterInsert, afterUpdate,
percentage of the sprint       afterDelete
based on the average
completion percentages of
the related action plans.

SetGoalAsgmtPercentCompleteHandler         Updates the Completion         beforeInsert, afterInsert,
Percentage of Goal             beforeUpdate, afterUpdate,
Assignment records.            afterDelete


ActivityPlan

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ActivityPlan object.

<!-- page:532 -->




Trigger Name                               Description                       Trigger condition

ActivityPlanTerritoryValidationHandler     Validates the alignment of        beforeInsert, afterInsert,
territories with activity plans   beforeUpdate, afterUpdate,
and displays an error             beforeDelete, afterDelete,
message if the conditions         afterUndelete
aren’t met.

ActivityPlanValidationHandler              Identifies and prevents           beforeInsert, afterInsert,
duplicate activity plan           beforeUpdate, afterUpdate,
records and displays an error     beforeDelete, afterDelete,
message if the conditions         afterUndelete
aren’t met.

PAPATerritoryUpdateHandler                 Adjusts the activity plan         beforeInsert, beforeUpdate,
goals and creates the             afterInsert
corresponding sharing
record for the adjusted
territory.

PAPAApproveProcessHandler                  Prevents users from creating      beforeInsert, beforeUpdate
more than the allowed
number of provider activity
plan adjustment requests.


ActivityPlanTerritory

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ActivityPlanTerritory object.


Trigger Name                               Description                       Trigger condition

ActivityPlanTerritoryModHandler            Validates and prevents an         beforeInsert, afterInsert,
update of the Territory field     beforeUpdate, afterUpdate,
in an Activity Plan Territory     beforeDelete, afterDelete,
record or deletion of the         afterUndelete
Activity Plan Territory record
if the associated activity plan
is active or the status of the
activity plan is not In
Progress. If either condition
is met, an error is displayed
on the record page,
preventing the update or
deletion.

ActivityPlanTerritorySharingHandler        Manages the creation of           beforeInsert, afterInsert,

<!-- page:533 -->




Trigger Name                                Description                      Trigger condition

sharing records upon             beforeUpdate, afterUpdate,
territory alignment and          beforeDelete, afterDelete,
supports the update and          afterUndelete
deletion of sharing records
to reflect territory re-
alignment or removal.


ALL

Review the names, descriptions, and trigger conditions of the trigger handlers associated with all objects.


Trigger Name                                Description                      Trigger condition

StagePathPermissionsHandler                 Enforces permissions             afterInsert, beforeUpdate,
defined in Life Sciences         beforeDelete
workflows. Validates
whether users can create,
edit, or delete records or
work with related files at the
current stage in the
workflow path. Shows an
error message if users don’t
have permission to perform
actions at that workflow
stage.


AppAlertTerritory

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
AppAlertTerritory object.


Trigger Name                                Description                      Trigger condition

NotificationTerritorySharingHandler         Creates sharing records once afterInsert, afterUpdate
a territory has been assigned
to an alert.


AssessmentTask

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
AssessmentTask object.

<!-- page:534 -->




Trigger Name                                 Description                    Trigger condition

SetActionPlanPercentCompleteHandler          Updates the completion         afterInsert, afterUpdate
percentage of Action Plan
records.

AssessmentTaskDeleteAPItemHandler            Deletes all the assessment     beforeDelete
tasks related to an action
plan when the action plan is
deleted.

AssessmentTaskSharingHandler                 Shares Assessment Task         afterInsert, afterUpdate
records with assignees.


Trigger Handlers for the Case - GoalAssignment Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the Case,
CommSubConsentCmplSnpsht, CommSubscription, CommSubscriptionConsent, ContactPointAddress,
ContactPointEmail, ContactPointPhone, ContactPointSocial, ContentDocument, ContentDocumentLink,
Expense, ExpenseParticipant, and GoalAssignment objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You can also review the trigger handlers that apply to all objects.


Case

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the Case
object.


Trigger Name                                 Description                    Trigger condition

CaseMSLQueueHandler                          Monitors and manages case beforeUpdate
status changes. Handles the
medical inquiry queue of the
medical science liaison users
before a case record is
updated. When an inquiry is
submitted and the status
changes to Submitted, the

<!-- page:535 -->




Trigger Name                    Description                         Trigger condition


## trigger handler assigns the

case to the appropriate MSL
queue. When the status
changes to Assigned, the
trigger handler reassigns
ownership to the current
user for handling the inquiry.


## CaseChangeOwnershipHandler      Handles the sharing of the          afterUpdate

medical inquiry records with
the sales representatives
after a case record is
updated. When a case
transitions to Submitted or
Responded status, the
handler creates CaseShare
records to give read access
to the case creator or owner.
This process maintains data
transparency in inquiry
management workflows by
ensuring that the original
creator or owner retains
visibility into the case, even if
ownership changes.


## CaseShareToCreatorHandler       Handles the change of          afterUpdate

ownership of the medical
inquiries between the sales
representative and the
medical science liaison users
after a case record is
updated. When a case's
OwnerId changes, the
ownership change
automatically cascades to all
related inquiry objects, such
as InquiryQuestions and
SubjectAssignments. The
handler queries for cases
with updated ownership,
retrieves the related records,
and updates the Owner on
these child objects, ensuring

<!-- page:536 -->




Trigger Name                               Description                      Trigger condition

data consistency.


CommSubConsentCmplSnpsht

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
CommSubConsentCmplSnpsht object.


Trigger Name                               Description                      Trigger condition

ConsentGiverSnapshotHandler                Validates if the consent giver   beforeInsert
is valid.

ConsentSnapshotSharingHandler              Shares the consent snapshot afterInsert
with territories that are
aligned with the account.


CommSubscription

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
CommSubscription object.


Trigger Name                               Description                      Trigger condition

ConsentNameCommSubHandler                  Updates Communication            beforeUpdate
Subscription Consent
records when related
Communication
Subscription record names
are changed.


CommSubscriptionConsent

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
CommSubscriptionConsent object.


Trigger Name                               Description                      Trigger condition

ConsentGiverConsentHandler                 Validates if the consent-giver   beforeInsert, beforeUpdate
account exists and it's the
same for the snapshot
record.

ConsentSharingHandler                      Shares consent with              afterInsert

<!-- page:537 -->




Trigger Name                               Description                    Trigger condition

territories that are aligned
with the account.

ConsentUniqueRecordHandler                 Handles changes to             beforeInsert
CommSubscriptionConsent
and maintains unique
records.


ContactPointAddress

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ContactPointAddress object.


Trigger Name                               Description                    Trigger condition

AccountAddressPrimaryHandler               Ensures that each account      beforeInsert, afterInsert,
maintains only one primary     beforeUpdate, afterUpdate
contact point address. It gets
triggered whenever a
contact point address record
is created or updated,
guaranteeing that the one
primary rule is always
enforced.

RelatedContactPointAddressHandler          Validates contact point        beforeInsert, beforeUpdate
address hierarchy rules to
ensure child addresses are
associated with person
accounts and parent
addresses are associated
with business accounts.


ContactPointEmail

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ContactPointEmail object.


Trigger Name                               Description                    Trigger condition

ContactPointEmailPopulateHandler           Updates healthcare provider    afterInsert, afterUpdate,
records to maintain an         afterDelete, afterUndelete
accurate list of associated

<!-- page:538 -->




Trigger Name                               Description                     Trigger condition


## email addresses whenever

contact point email records
are created, modified,
removed, or restored. This
ensures the EmailIds field on
the healthcare provider
record reflects the current
related email addresses and
avoids unnecessary
processing.


ContactPointPhone

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ContactPointPhone object.


Trigger Name                               Description                     Trigger condition

ContactPointPhoneHandler                   Updates healthcare provider     afterInsert, afterUpdate,
records to maintain an          afterDelete, afterUndelete
accurate list of associated
phone numbers whenever
contact point phone records
are created, modified,
removed, or restored. This
ensures the PhoneNumbers
field on the healthcare
provider record reflects the
current related telephone
numbers and prevents
redundant processing.


ContactPointSocial

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ContactPointSocial object.


Trigger Name                               Description                     Trigger condition

ContactPointSocialPopulateHandler          Updates healthcare provider     afterInsert, afterUpdate,
records to maintain an          afterDelete, afterUndelete
accurate list of associated

<!-- page:539 -->




Trigger Name                               Description                      Trigger condition


## social media handles

whenever contact point
social records are created,
modified, removed, or
restored. This ensures the
SocialIdentifiers field on the
healthcare provider record
reflects the current related
social handles and prevents
unnecessary execution.


ContentDocument

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ContentDocument object.


Trigger Name                               Description                      Trigger condition

ConsentContentDocumentHandler              Handles changes to               afterInsert, afterUpdate,
ContentDocument.                 afterDelete, afterUndelete

ContentDocumentLockHandler                 Prevents delete operation to     beforeUpdate, beforeDelete
Documents linked to
Submitted Visits or related
entities.


ContentDocumentLink

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ContentDocumentLink object.


Trigger Name                               Description                      Trigger condition

ConsentContentDocumentLinkHandler          Handles changes to               beforeInsert, beforeDelete
ContentDocumentLink.

ContentDocumentLinkLockHandler             Prevents insert/delete           beforeInsert, beforeDelete
operation to Document
Links for Submitted Visits or
related entities.

<!-- page:540 -->




Expense

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Expense object.


Trigger Name                               Description                    Trigger condition

ExpenseLockHandler                         Prevents insert/update/     beforeInsert, beforeUpdate,
delete operation on Expense beforeDelete
if it is locked.


ExpenseParticipant

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ExpenseParticipant object.


Trigger Name                              Description                      Trigger condition

ExpenseParticipantNameHandler             Stores the Account/Contact       beforeInsert
Participant name as the
Expense Participant Name.

ExpenseParticipantLockHandler             Prevents insert/update/delete beforeInsert, beforeUpdate,
operation on                   beforeDelete
ExpenseParticipant/Allocations
if it is locked.


GoalAssignment

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
GoalAssignment object.


Trigger Name                               Description                    Trigger condition

GoalAssignmentDeleteHandler                Deletes Goal Assignment        beforeDelete
records.

SetTerrBusPlanPrcntCompleteHandler         Updates the Completion         beforeInsert, afterInsert,
Percentage of Territory        beforeUpdate, afterUpdate,
Business Plan records.         afterDelete


Trigger Handlers for the HealthcareProvider - PresentationLinkedPage
Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the

<!-- page:541 -->



HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, InventoryCntProdtBatchItem,
InventoryCountAssessment, InventoryOperation, LifeScienceEmail, LifeSciMarketableProduct, Location,
Presentation, PresentationForum, and PresentationLinkedPage objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You can also review the trigger handlers that apply to all objects.


HealthcareProvider

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
HealthcareProvider object.


Trigger Name                                 Description                       Trigger condition

HealthcareProviderHandler                    Manages updates to                beforeInsert, beforeUpdate
healthcare provider records
after creation, restoration, or
modification. This trigger
fetches and updates related
email addresses, phone
numbers, social identifiers,
specialties, and NPI from
their respective related
records, while also
preventing self-calling
updates.

HealthcareProviderAffiliationHandler         Creates a primary affiliation     afterInsert, afterUpdate
between a parent
organization and an account
on the Healthcare Provider
object. If an existing
affiliation is found, the
handler will just set or unset
the primary flag on that
record. The role for the new
affiliation defaults to the
selected value from the
active picklist on the

<!-- page:542 -->




Trigger Name                               Description                     Trigger condition


## provider affiliation; if no

default role is selected, the
handler throws a custom
error.


HealthcareProviderNpi

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
HealthcareProviderNpi object.


Trigger Name                               Description                     Trigger condition

HealthcareProviderNpiHandler               Updates healthcare provider     beforeInsert, afterInsert,
records to maintain the         beforeUpdate, afterUpdate,
correct National Provider       afterDelete, afterUndelete
Identifier (NPI) whenever
healthcare provider NPI
records are created,
modified, removed, or
restored. This ensures the
NationalProviderIdentifier
field on the healthcare
provider record reflects the
current associated NPI and
avoids unnecessary
execution.


HealthcareProviderSpecialty

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
HealthcareProviderSpecialty object.


Trigger Name                               Description                     Trigger condition

HealthcareProviderSpecialityHandler        Updates healthcare provider beforeInsert, afterInsert,
records to maintain an        beforeUpdate, afterUpdate,
accurate list of associated   afterDelete, afterUndelete
specialty types whenever
healthcare provider specialty
records are created,
modified, removed, or
restored. This ensures the

<!-- page:543 -->




Trigger Name                               Description                      Trigger condition


## Specialties field on the

healthcare provider record
reflects the current related
specialties and avoids
redundant processing.


InventoryCntProdtBatchItem

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
InventoryCntProdtBatchItem object.


Trigger Name                               Description                      Trigger condition

InventoryCountPBILockHandler               Prevents modifications to   beforeUpdate, beforeDelete
Inventory Count Product
Batch Item records when the
associated inventory count
assessment is locked.

InventoryCntPBIValidationHandler           Prevents update/delete     beforeInsert, beforeUpdate
operation on
InventoryCntProdtBatchItem
's if unresolved Product
disbursement records are
present for the same
product.


InventoryCountAssessment

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
InventoryCountAssessment object.


Trigger Name                               Description                      Trigger condition

InventoryCountAssessmentLockHandler        Prevents modifications to        beforeInsert, afterInsert,
Inventory Count Assessment       beforeUpdate, beforeDelete
records when they’re in a
locked state, and prevents
the creation of duplicate
“Initial” type inventory count
assessments.

<!-- page:544 -->




InventoryOperation

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
InventoryOperation object.


Trigger Name                               Description                     Trigger condition

InventoryOperationLockHandler              Prevents modifications to       afterInsert, beforeUpdate,
Inventory Operation records     beforeDelete
when they’re in a locked
state.

InventoryOperationSyncTxnHandler           Prevents the creation of     beforeInsert, beforeUpdate
Return, Adjustment, Transfer
In, and Transfer Out type
operations when the
inventory operation is in its
final state, and checks for
pending sync transactions
before updating the
Inventory Operation records.


LifeScienceEmail

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
LifeScienceEmail object.


Trigger Name                               Description                     Trigger condition

EmailQueueImmediateHandler                 Handles emails that are sent    afterInsert, afterUpdate
immediately instead of from
a batch job.

EmailQueueRecipientHandler                 Populates additional            beforeInsert, beforeUpdate
information for email
recipients.

EmailQueueSenderHandler                    Populates additional            beforeInsert
information for the email
sender.

EmailAttachmentHandler                     Populates email                 beforeInsert
attachments.

SyncEmailResponseStatusToObjectHandl Updates the invitation status         afterUpdate
er                                   on related records based on
the email response status.

<!-- page:545 -->




LifeSciMarketableProduct

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
LifeSciMarketableProduct object.


Trigger Name                                Description                   Trigger condition

LifeSciMarketableProductMetadataHandl       Creates or updates the      afterInsert, afterUpdate,
er                                          ProductMetadata field value beforeDelete, afterDelete
in the Life Science
Marketable Product object.


Location

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Location object.


Trigger Name                               Description                    Trigger condition

LocationUserDupHandler                     Prevents duplicate primary     beforeInsert, beforeUpdate
user assignments to
inventory locations.

LocationUserSharingHandler                 Shares records with the        beforeInsert, beforeUpdate,
primary user assigned to an    afterUpdate
inventory location.


Presentation

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Presentation object.


Trigger Name                               Description                    Trigger condition

PresentationSharingHandler                 Recalculates how               beforeDelete
Presentation Page records
are shared after a
presentation is deleted.


PresentationForum

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
PresentationForum object.

<!-- page:546 -->




Trigger Name                                 Description                      Trigger condition

PresentationForumLockHandler                 Prevents creating, editing, or   beforeInsert, beforeUpdate,
deleting Presentation Forum      beforeDelete
records if the related
presentation is locked.


PresentationLinkedPage

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
PresentationLinkedPage object.


Trigger Name                                 Description                      Trigger condition

PresentationLinkedPageSharingHandler         Recalculates how                 beforeInsert, beforeDelete
Presentation Page records
are shared after Presentation
Linked Pages are added or
removed.


Trigger Handlers for the MedicalInsight - Subject Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
MedicalInsight, UserReaction, Subject and SubjectAssignment objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You can also review the trigger handlers that apply to all objects.


MedicalInsight

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
MedicalInsight object.


Trigger Name                                 Description                      Trigger condition

PublishMedicalInsightEventHandler            Publishes                        afterInsert, afterUpdate,
MedicalInsightEvent              afterDelete

<!-- page:547 -->




Trigger Name                               Description                       Trigger condition


## platform events whenever a

medical insight record is
created, updated, or
deleted. This facilitates real-
time event streaming and
integration with external
systems.

RecalculateParentLinkedInsightsHandler     Updates the rollup summary        afterInsert, afterUpdate,
fields on parent medical          afterDelete
insight records when child
insights are modified. This
includes updating the
ChildMedicalInsightCount,
UpvoteCount, and
LastUpvotedDate fields to
make sure roll-up summaries
are accurate.

MedicalInsightSharingHandler               Automatically shares              afterInsert
medical insight records with
peers having the same
territory and profile as the
creator upon creation. This
handler creates sharing
records with edit access to
make sure that peers can
collaborate on insights.

InsightCascadeDeleteTriggerHandler         Automatically deletes child       beforeDelete
medical insight records
when a top-level parent
record is deleted. This
cascade deletion prevents
orphan records and keeps
the insight hierarchy clean.


Subject

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Subject object.

<!-- page:548 -->




Trigger Name                               Description                     Trigger condition

TopicValidationHandler                     Prevents the creation of        beforeUpdate
circular parent-child
relationships when updating
Subject records for medical
insights. This makes sure a
valid single-parent hierarchy
structure.


SubjectAssignment

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
SubjectAssignment object.


Trigger Name                               Description                     Trigger condition

RecalculateInsightTopicNameHandler         Updates the TopicNames          afterInsert, afterDelete
field on the related medical
insight record whenever a
Subject Assignment is
created or deleted. This
makes sure the processed
insight accurately reflects the
set of topics currently
assigned to the record.


UserReaction

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
UserReaction object.


Trigger Name                               Description                     Trigger condition

UserReactionMedicalInsightHandler          Updates the UpvoteCount         afterInsert, afterDelete
field on Medical Insight
records when User Reaction
records are created or
deleted. It also deletes
duplicate records to prevent
multiple upvotes from the
same user on the same
insight.

<!-- page:549 -->




Trigger Handlers for the ProductBatchItem - ProductTransfer Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductBatchItem, ProductDisbursement, ProductGuidance, ProductionBatch, ProductRequest,
ProductRequestLineItem, ProductTerrDtlAvailability, ProductTerritoryAvailability, and ProductTransfer
objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


ProductBatchItem

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductBatchItem object.


Trigger Name                              Description                      Trigger condition

ProductBatchItemOwnershipHandler          Shares records in product        afterInsert
batch item to sales rep in
ProductBatchItem.AssigneeId
.


ProductDisbursement

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductDisbursement object.


Trigger Name                               Description                    Trigger condition

ProductDisbursementInventoryOpCreati       Creates a corresponding        afterInsert, afterUpdate
on                                         Inventory Operation record
when a disbursement is
made.

ProductDisbursementSubmitLockHandle Prevents modifications to             beforeInsert, beforeUpdate,
r                                   Product Disbursement                  beforeDelete
records when the related
Visit record is in a locked
state, that is, when the visit
is signed or submitted.

<!-- page:550 -->




ProductGuidance

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductGuidance object.


Trigger Name                               Description                     Trigger condition

ProductGuidanceDeactivationHandler         Removes sharing if the          afterUpdate
Product Guidance record
was deactivated.


ProductionBatch

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductionBatch object.


Trigger Name                               Description                     Trigger condition

ProductBatchItemUpdateByLotHandler         Shares Product Batch Item       afterUpdate
records with the assignee or
the current user if the
Assignee ID is not specified.


ProductRequest

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductRequest object.


Trigger Name                               Description                     Trigger condition

ProductRequestLockHandler                  Prevents modifications to       beforeUpdate, beforeDelete
Product Request records
when they’re in a locked
state.


ProductRequestLineItem

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductRequestLineItem object.


Trigger Name                               Description                     Trigger condition

ProductRequestLineItemLockHandler          Updates the ordered             beforeInsert, beforeUpdate,
quantity in the Territory       beforeDelete

<!-- page:551 -->




Trigger Name                               Description                     Trigger condition


## Product Quantity Allocation

record when a product
request line item is
modified.

PrdReqLineItmUpdateAllocationHandler       Prevents modifications to       afterInsert, afterUpdate
Product Request Line Item
records when the associated
product request is locked.


ProductTerrDtlAvailability

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductTerrDtlAvailability object.


Trigger Name                               Description                     Trigger condition

ProductTerrDtlAvailabilityHandler          On trigger of these events      afterUpdate, afterDelete
the Product Guidance
records shared with Territory
are deleted.


ProductTerritoryAvailability

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductTerritoryAvailability object.


Trigger Name                               Description                     Trigger condition

ProductTerritoryAvailabilityExclHandler    Deletes ProductGuidance         afterInsert, afterUpdate
share records when an
Exclusion rule is created in
ProductTerritoryAvailability.


ProductTransfer

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProductTransfer object.


Trigger Name                               Description                     Trigger condition

ProductTransferLockHandler                 Prevents modifications to       beforeUpdate, beforeDelete
Product Transfer records

<!-- page:552 -->




Trigger Name                               Description                    Trigger condition


## when the associated

inventory operation is
locked.

ProductTransferValidationHandler           Prevents invalid Transfer In   beforeInsert, beforeUpdate
and Transfer Out operations
by checking transfer
directions, and source and
destination locations.

ReceivedProductAllocationHandler           Updates Territory Product      afterInsert, afterUpdate
Quantity Allocation records
when a product transfer is
received.

TransferOutTriggerHandler                  Creates a Transfer In record   afterInsert, afterUpdate
when a user receives a
product transfer due to
another user submitting a
Transfer Out record.



## Trigger Handlers for the ProviderAcctProductInfo -

PrvdVstSmplLmtTransaction Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderAcctProductInfo, ProviderAcctTerritoryInfo, ProviderActivityGoal, ProviderAffiliation,
ProviderVisit, ProviderVisitChangedEvent, ProviderVisitDtlProductMsg, ProviderVisitMarketingItem,
ProviderVisitProdDetailing, ProviderVisitProdDiscussion, ProviderVisitRqstSample, and
PrvdVstSmplLmtTransaction objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


ProviderAcctProductInfo

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderAcctProductInfo object.

<!-- page:553 -->




Trigger Name                               Description                    Trigger condition

ProviderAcctProductInfoHandler             Sets the value of the          beforeInsert, beforeUpdate
Territory field on the
provider account product
information record to Null
whenever a record is created
or updated.


ProviderAcctTerritoryInfo

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderAcctTerritoryInfo object.


Trigger Name                               Description                    Trigger condition

AccountTerritoryFieldsHandler              Handles a valid territory      beforeInsert, afterInsert,
check for an account and       beforeUpdate
manages Provider Account
Territory Information
Sharing.

ATFPreferredAddressHandler                 Updates the Preferred         beforeInsert, beforeUpdate
Address field on the Provider
Account Territory
Information object from the
account's Primary address in
the Contact Point Address
Object. This preferred
address then displays in the
Account Territory Fields
component on the Account
Dashboard.

NewAlignmentConsentSharingHandler          Creates sharing records for    afterInsert, afterUpdate
Consent and Snapshot
records based on territory
assignments.

PATIRejectionHandler                       Deletes provider account       beforeUpdate
territory info sharing and
object territory association
records when the status of
the associated provider
account territory info records
changes to Rejected.

<!-- page:554 -->




ProviderActivityGoal

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderActivityGoal object.


Trigger Name                               Description                      Trigger condition

ProviderActivityGoalHandler                Validates and prevents the       beforeInsert, afterInsert,
creation of duplicate            beforeUpdate, afterUpdate,
Provider Activity Goals by       beforeDelete, afterDelete,
ensuring the combination of      afterUndelete
Activity Plan and Account is
unique. The trigger performs
this validation when you
create or update a Provider
Activity Goal record. If a
duplicate combination is
found, an error is displayed,
preventing the creation or
update of the record.


ProviderAffiliation

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderAffiliation object.


Trigger Name                               Description                      Trigger condition

AffiliationUniquenessGenericHandler        Ensures a unique                 beforeInsert, beforeUpdate
combination of fields
configured in the field set of
the Provider Affiliation
object, preventing
duplicates and maintaining
accurate records.

AffiliationUniquenessHandler               Ensures affiliation              beforeInsert, beforeUpdate
uniqueness by enforcing a
unique combination of
account, related account,
and role values. This
prevents duplicate
affiliations and maintains
data integrity.

<!-- page:555 -->




Trigger Name                      Description                       Trigger condition

HardAffiliationHandler                                            beforeInsert, afterInsert,
Assigns the affiliation type of beforeUpdate
provider affiliation records as
either hard or soft. Primary
Affiliations are designated as
Hard Affiliations. The
HardAffiliationHandler
trigger handler also ensures
that duplicate Hard type
affiliations between the
same two accounts aren't
created.


## Sets the affiliation type of

workplace affiliations
between an HCP and an
HCO to Hard. It also sets the
affiliation between an
account and its related
account to Hard when the
related account is the
preferred workspace of the
account's provider account
territory info (PATI) record.
Lastly, it sets the affiliation
type of reciprocal affiliations
to None.

AffiliationReciprocalHandler      Manages the creation,            afterInsert, afterUpdate,
updating, and deletion of        beforeDelete
reciprocal affiliations. It
ensures that the inverse
affiliation is maintained
whenever a
ProviderAffiliation is created,
updated, or deleted. Reverse
Affiliations are only created if
the Influence Type field on
the Provider Affiliation
object is selected as either
Unidirectional, Bidirectional,
or Neutral.

AffiliationPrimaryChangeHandler   Ensures a single primary          afterInsert, afterUpdate

<!-- page:556 -->




Trigger Name                               Description                       Trigger condition


## affiliation between an

account and a related
healthcare organization
account. When a new
primary affiliation is created,
the trigger deselects the
primary flag on any prior
affiliations with the same
Account and Related
Account. Additionally, it
updates the associated
Healthcare Provider's
Primary Organization
Account to the affiliation's
Related Account, or creates
a new Healthcare Provider
record if one doesn't exist,
populating it with the
affiliation's Account and
Related Account.

AffiliationAccountUpdateHandler            Prevents the modification of      beforeUpdate
the account and the related
account after an affiliation is
created.


ProviderVisit

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderVisit object.


Trigger Name                               Description                       Trigger condition

PVUpdateChildFieldsHandler                 Maintains data consistency     afterUpdate
for group visits by syncing
child provider visit records
with the parent provider visit
records. Automatically
updates key fields (Planned
Visit Start Time, Planned
Visit End Time, and Channel)
when the parent visit is
modified.

<!-- page:557 -->




Trigger Name                               Description                       Trigger condition

PVLockHandler                              Prevents editing provider         beforeUpdate, beforeDelete
visit data based on the visit's
status and signature state to
maintain data integrity.

RemoteSessionInvitationPVHandler           Manages remote session          afterInsert, afterUpdate,
invitations by creating video beforeDelete
calls, email notifications, and
session keys for provider visit
records.


ProviderVisitChangedEvent

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderVisitChangedEvent object.


Trigger Name                               Description                       Trigger condition

VisitChangedEventShareHandler              Creates Visit shares with the     afterInsert
users shared with Accounts.

PVChangedEventUpdateAccountTerrInfo        Processes provider visit      afterInsert
changed events and updates
provider visit related fields
on Provider Account
Territory Information
records.


ProviderVisitDtlProductMsg

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderVisitDtlProductMsg object.


Trigger Name                               Description                       Trigger condition

ProviderVisitDtlProductMsgLockHandler      Locks the                         beforeInsert, beforeUpdate,
ProviderVisitDtlProductMsg        beforeDelete
record when Visit is
Submitted or Signed.


ProviderVisitMarketingItem

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the

<!-- page:558 -->



ProviderVisitMarketingItem object.


Trigger Name                               Description                    Trigger condition

ProviderVisitMarketingItemLockHandler      Locks the                      beforeInsert, beforeUpdate,
ProviderVisitMarketingItem     beforeDelete
record when Visit is
Submitted or Signed.


ProviderVisitProdDetailing

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderVisitProdDetailing object.


Trigger Name                               Description                    Trigger condition

ProviderVisitProdDtlNameHandler            Generates and populates the beforeInsert, beforeDelete
Product Hierarchy Name
field for the Provider Visit
Product Detailing record.

ProviderVisitProdDtlLockHandler            Locks the                      beforeInsert, beforeUpdate,
ProviderVisitProdDetailing     beforeDelete
record when Visit is
Submitted or Signed.


ProviderVisitProdDiscussion

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderVisitProdDiscussion object.


Trigger Name                               Description                    Trigger condition

ProviderVisitProdDiscussionLockHandler     Locks the                      beforeInsert, beforeUpdate,
ProviderVisitProdDiscussion    beforeDelete
record when Visit is
Submitted or Signed.


ProviderVisitRqstSample

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
ProviderVisitRqstSample object.

<!-- page:559 -->




Trigger Name                               Description                    Trigger condition

ProviderVisitRqstSampleLockHandler         Locks the                      beforeInsert, beforeUpdate,
ProviderVisitRqstSample        beforeDelete
record when Visit is
Submitted or Signed.

CalculateShippedQuantityHandler            Manages Provider Visit         afterUpdate
Request Sample shipped
quantity on Visit.


PrvdVstSmplLmtTransaction

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
PrvdVstSmplLmtTransaction object.


Trigger Name                               Description                    Trigger condition

SampleLimitTransactionHandler              Processes Sample Limit         afterInsert
Records using Rule which
comes from Web and
Mobile as Provider Visit
Sample Limit Transaction
records.


Trigger Handlers for the SurveySubject - Visitor Objects

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
SurveySubject, Territory2, TerritoryAcctRcmdAction, TerritoryBusinessPlan, TerritoryContentTmplAsgnt,
TerritoryUserDowntime, Visit, and Visitor objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


SurveySubject

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
SurveySubject object.

<!-- page:560 -->




Trigger Name                     Description                      Trigger condition

SurveyInvitationSharingHandler                                    beforeInsert, afterInsert,
Applies survey sharing logic     afterUpdate
on the Survey Subject
object. When survey subject
records are created or
updated, this trigger handler
automatically creates survey
invitation share records
based on one of three
strategies:

Account-Based Sharing:
When a survey subject is
linked to an account, the
trigger handler automatically
creates survey invitation
share records for accounts
listed in the related
account’s account share
records. This sharing logic
doesn’t apply to records
where the rowCause field is
set to Owner.


## Life Sciences Marketable

Product-Based Sharing:
When you link a survey
subject record to a Life
Sciences marketable
product, the corresponding
survey invitation share
records are created for either
accounts or territories based
on the product territory
availability records. The
availability of the product is
determined by the product
territory availability object,
which includes an alignment
type field with options such
as territory subordinates,
territory inclusion, or
territory exclusion.

<!-- page:561 -->




Trigger Name                               Description                        Trigger condition


Territory-Based Sharing:
When a survey subject
record is linked to a territory,
survey invitation share
records are created for that
territory and its
subordinates.


Territory2

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
Territory2 object.


Trigger Name                               Description                        Trigger condition

Territory2Handler                          Prevents the deletion of a         beforeDelete
Territory2 record when
related records like
ProviderAcctTerritoryInfo,
Inquiry,
ContactPointBestContactTi
me,
TerritoryAcctRcmdAction,
TerritoryAccountScore,
TerritoryAcctProdMsgScore,
TerritoryUserDowntime, or
TerritoryBusinessPlan
records reference it.


TerritoryAcctRcmdAction

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
TerritoryAcctRcmdAction object.


Trigger Name                               Description                        Trigger condition

TerrAcctRcmdActionSharingHandler           Shares the territory account       afterInsert, afterUpdate
recommended action
records with the specified
territory.

TerrAccRcmActStatusUpdateHandler           Updates the status of the          afterInsert, afterUpdate

<!-- page:562 -->




Trigger Name                               Description                      Trigger condition


## territory account

recommended action when
a visit is created.


TerritoryBusinessPlan

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
TerritoryBusinessPlan object.


Trigger Name                               Description                      Trigger condition

TerritoryBusinessPlanDeleteHandler         Deletes Territory Business       beforeDelete
Plan records.

TerritoryBusPlanChangeStatusHandler        Updates the statuses of          beforeInsert, beforeUpdate
Territory Business Plan
records.


TerritoryContentTmplAsgnt

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
TerritoryContentTmplAsgnt object.


Trigger Name                               Description                      Trigger condition

EmailTemplateTerritorySharingHandler       Updates territory sharing        afterInsert, afterUpdate,
based on Territory Content       afterDelete
Template Assignment
records.


TerritoryUserDowntime

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the
TerritoryUserDowntime object.


Trigger Name                               Description                      Trigger condition

TUDUpdateHandler                           Updates the start time and       beforeInsert, beforeUpdate
end time of time off territory
records based on the time
slot interval configuration.

UDBHValidationHandler                      Prevents the creation of time beforeInsert, beforeUpdate

<!-- page:563 -->




Trigger Name                               Description                      Trigger condition


## off territory records with

start and end times outside
of the org's business hours.

TUDSharingHandler                          Shares a user's time off         afterInsert
territory records with other
users in the same territory,
giving them read-only
access.

TUDVisitValidationHandler                  Prevents the creation of time beforeInsert, beforeUpdate
off territory during a visit.

TUDHolidayValidationHandler                Prevents the creation of time beforeInsert, beforeUpdate
off territory records on
holidays.

TUDOverlapHandler                          Prevents the creation of       beforeInsert, beforeUpdate
overlapping time off territory
records.

TUDEventValidationHandler                  Prevents the creation of time beforeInsert, beforeUpdate
off territory during a general
event.


Visit

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the Visit
object.


Trigger Name                               Description                      Trigger condition

VisitLockHandler                           Prevents editing visit data      beforeInsert, beforeUpdate
based on the status and
signature state to maintain
data integrity.

VisitTimeOffValidationHandler              Prevents scheduling a visit      beforeInsert, beforeUpdate
that conflicts with a time-off
territory to support
scheduling efficiency and
accurate visit reporting.

VisitLifeScienceAccountListLinkHandler     Clears the Life Science          beforeUpdate
Account List field on the
provider visit record if the

<!-- page:564 -->




Trigger Name                        Description                      Trigger condition


## Planned Start Time is

changed on a visit created by
applying a routine.

VisitHolidayValidationHandler       Prevents scheduling a visit      beforeInsert, beforeUpdate
on holidays or outside of
business hours to maintain
compliance with company
policies.

VisitPopulateEndTimeHandler         Calculates and sets the visit's beforeInsert, beforeUpdate
Planned End Time by adding
the default duration defined
in the “Set blank date/time
in Planned Start Time” Visit
Administration setting in the
Admin Console.

FutureVisitLimitValidationHandler   Prevents scheduling visits       beforeInsert, beforeUpdate
beyond the limit specified in
the “Future Visit Limit in
Days” setting in Visit
Administration in the Admin
Console.

VisitUpdateChildFieldsHandler       Maintains data consistency      afterUpdate
in group visits by
synchronizing child visit
records with their parent
visits. Automatically updates
key fields (Planned Visit Start
Time, Planned Visit End
Time, and Channel) when
the parent visit is modified.


## VisitDelayReasonHandler             Clears the previously entered beforeUpdate

reason for delay if a user
changes the visit date and
time and the date no longer
exceeds the submission
delay threshold.

VisitCascadeDeleteHandler           Deletes attendee visits          beforeDelete
automatically when the
parent group visit is deleted,
maintaining data integrity.

<!-- page:565 -->




Trigger Name                               Description                      Trigger condition

VisitSurveyInviteCascadeDeleteHandler      Deletes survey invitations       beforeDelete
linked to a visit when a visit
is deleted, and prevents
deleting them if the visit is
submitted to maintain data
integrity.

RemoteSessionInvitationVisitHandler        Manages remote session          afterUpdate, beforeDelete
invitations by creating video
calls, email notifications, and
session keys for visit records.

VisitMyBestTimeValidationHandler           Prevents scheduling visits       beforeInsert, beforeUpdate
outside of best times
defined for the account
address and user's territory,
improving scheduling
efficiency and aligning with
account availability.

VisitChangePrimaryAccountHandler           Performs validations,            beforeInsert, beforeUpdate,
updates related records, and     afterUpdate
prepopulates fields in the
visit to maintain data
consistency when the
primary account is changed.


Visitor

Review the names, descriptions, and trigger conditions of the trigger handlers associated with the Visitor
object.


Trigger Name                               Description                      Trigger condition

VisitorLockHandler                         Prevents insert/update/          beforeInsert, beforeUpdate,
delete operation on Visitor if   beforeDelete
it is locked.

VisitorShareHandler                        Shares the Visit record with     afterInsert, afterUpdate,
the Visitors (employees).        afterDelete



Workflows for Life Sciences

AFLS for Customer Engagement workflows automate your business processes and guide

<!-- page:566 -->



users through their tasks with clear steps. Configure the permissions and actions for each step of the
workflow based on the users' context and role. Implement custom validations to make sure that users
follow business processes, and provide checklists to help users understand how to use the workflow.
These workflows are supported both online and offline in the AFLS mobile app.


## Get Your Org Ready for Life Sciences Workflows

Before you create a Life Sciences workflow, complete these steps.
Understand Life Sciences Workflows
AFLS for Customer Engagement workflows outline the journey of an object through
various stages and help you manage different statuses, actions, and record permissions. Get familiar
with these terms, and understand how each part supports the overall workflow configuration.
Prepare to Configure a Life Sciences Workflow
AFLS for Customer Engagement workflows are a highly customizable way to streamline
work for your field teams. To make sure your workflows function as expected, review these planning
steps so you don't have to gather information or make decisions during setup.
Manage Life Sciences Workflows
To streamline your business processes, create tailored AFLS for Customer Engagement
workflows.
Considerations for Life Sciences Workflows
When you configure a AFLS for Customer Engagement workflow, keep these
considerations in mind.
Custom Scripts for Life Sciences
Custom scripts are programmatic tools for data validation across AFLS for Customer
Engagement on desktop and both online and offline in the AFLS mobile app. Custom
scripts are used in Life Sciences workflow management and visit management.


Get Your Org Ready for Life Sciences Workflows

Before you create a Life Sciences workflow, complete these steps.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access and work with AFLS for      Life Sciences Commercial Admin permission set
Customer Engagement data:

To update permission sets:                           View Setup and Configuration

<!-- page:567 -->



1. Assign users a permission set that includes the Use Life Sciences Workflow Management permission.
2. To make sure that users can see and work with workflow configurations, enable permissions for these
objects in the correct permission sets.
- Life Science Custom Scripts
- Life Science Stage Actions
- Life Science Stage Objects
3. To make sure that users can access the workflow progress bar and data on the record detail page,
update the sharing settings for these objects and set the default internal access to Public Read Only.
- Life Science Custom Script
- Life Science Stage Action
- Life Science Stage Object
Alternatively, share these records with each user manually.

4. Activate the StagePathPermissionsHandler trigger handler for Life Sciences Customer Engagement
workflows. See Trigger Handler Administration.
5. Set up the configurations for the workflow to work in the AFLS mobile app.
a. Set up object metadata cache configurations for all workflow objects.
b. Generate a metadata cache to package the object schema configuration that the Life Sciences
Cloud mobile app uses for online and offline access.


Understand Life Sciences Workflows

AFLS for Customer Engagement workflows outline the journey of an object through
various stages and help you manage different statuses, actions, and record permissions. Get familiar with
these terms, and understand how each part supports the overall workflow configuration.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


For an example workflow configuration, see Set Up Workflow Actions for Medical Inquiry Management
and Set Up the Workflow Stages to Manage Medical Inquiries.


Workflow Actions

Workflow actions are the actions that users can perform as part of the workflow.


Workflow Path

The workflow path is the object’s overall workflow, and the path from one stage in the workflow to the

<!-- page:568 -->



next.


Workflow Stage Value

Workflow stage values are the steps in the object’s workflow path. A controlling picklist field determines
the stages. For example, if the Status field is the controlling field on a workflow for the Inquiry object, the
workflow path often includes stages such as New, Working, Escalated, and Closed.


Stage Object

The stage object is the object for which a workflow path is configured. When you create and save a
workflow path, stage object records are created automatically. One stage object record is created for
each object that has a workflow configured.


Stage Operation

Stage operations are a grouping of conditions that the record must meet in order to grant permissions
and determine the actions that are available to users. You define stage operations for each stage in the
workflow.


Stage Operation Conditions

Stage operation conditions are the specific conditions within the stage operation that a record must
meet in order to grant permissions and make actions available to users. If the conditions aren’t met, the
permissions and actions aren’t granted. You define stage operation conditions for each stage operation
within each stage of the workflow.


Stage Operation Actions

Stage operation actions are the actions that are available to users when the stage operation is applied to
a particular stage in the workflow path. You create workflow actions separately, and then you assign them
as stage operation actions for each stage in the workflow's path.


Custom Scripts

Custom scripts are Lightning web components that validate user actions or provide checklists to help
users understand the tasks to complete.


Prepare to Configure a Life Sciences Workflow

AFLS for Customer Engagement workflows are a highly customizable way to streamline
work for your field teams. To make sure your workflows function as expected, review these planning
steps so you don't have to gather information or make decisions during setup.

<!-- page:569 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Step 1: Outline the Workflow

Identify the business process that you want to automate. Then, break down the workflow into logical
steps or stages. For example, a common Inquiry process includes stages such as New, Working,
Escalated, and Closed.


Step 2: Define Workflow Objects and Permissions

Identify the parent object that you want the workflow to run on, as well as any related objects.
Determine the permissions users need to create, edit, or delete parent or child records at each stage in
the object's workflow.


Step 3: Identify Fields for Workflow Conditions

Each workflow stage operation includes conditions that must be met so that users can work with records
and take actions. Identify the fields on the parent object or related objects that are required to set up
these conditions.


Step 4: Plan Actions for Each Workflow Stage

Workflow actions can update records, launch a platform event, invoke a Lightning web component, or
open a custom URL. Outline the actions that you want to make available to users at each stage in the
workflow. This way, you can identify the record fields or other components that the actions use or
update.


Step 5: Consider Validation Rules and Checklists

Validation rules and checklists help you maintain data integrity and enforce business rules. For validation
rules, consider what conditions must be met for a record to move to the next stage in the workflow. For
checklists, identify any necessary steps that you want to outline for users so that they know how to move
a record to the next stage.


Manage Life Sciences Workflows

To streamline your business processes, create tailored AFLS for Customer Engagement

<!-- page:570 -->



workflows.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You can manage Life Sciences workflows from the Workflow Configuration tile in the Admin Console.
From the Workflow Paths page, you can:

- Search the list of workflow paths, and sort by column to find the workflow you need.
- Get details about each workflow path, such as the object and record type it applies to, its status, and
its controlling field.
- Create a workflow path.
- Clone a workflow path.
- Open or edit a workflow path to modify its details, activate it, or deactivate it.
After you configure a Life Sciences workflow, you can use Data Loader to move the workflow
configuration to another org.


## Configure Life Sciences Workflow Actions

Before you configure a workflow path, create the actions that users can perform on an object. When
you define the workflow path, you can assign these actions at each stage in the workflow.
Configure Life Sciences Workflow Paths
Create workflow paths for each object and record type to meet your business needs. At each stage of
the record’s lifecycle, define user permissions and the actions that users can take.
Configure Custom Scripts for Life Sciences Workflows
To make sure that records meet your business rules before the Life Sciences Customer Engagement
workflow continues, create and manage custom scripts. Each time a user performs an action,
validation scripts run to prevent incorrect actions or alert users about errors. Checklist scripts show an
info icon on Update Record actions so that users can see the next steps to take.
Assign Custom Scripts to Life Sciences Workflow Objects
To enforce business rules throughout the workflow, update the validation scripts and checklists that
apply to each stage object.

See Also
Data Loader Guide


Configure Life Sciences Workflow Actions

Before you configure a workflow path, create the actions that users can perform on an object. When you
define the workflow path, you can assign these actions at each stage in the workflow.

<!-- page:571 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create workflow actions:                          Life Sciences Commercial Admin permission set


You can create four types of workflow actions.

- Update Record actions edit records in some way, for example, by moving the record to a new status.
- Platform Event actions trigger real-time processes. For example, a platform event can launch a flow.
- Component actions invoke a Lightning web component. For example, you can open a component that
shows a list of available document templates.
- Custom Actions support custom functionality, such as opening an external URL. You create custom
actions from the Quick and Custom Action Administration page in the Admin Console. Actions must
have the Stage Path entity type and the URL action type. See Create Custom Actions.

1. From the App Launcher, find and select Admin Console.
2. Select Workflow Configuration, and then select Workflow Actions.
To see and search for available actions, select the tabs for each action type.
3. To create an action, click New, and select the action type that you want to create.
4. Enter the action’s basic information, such as its name, the button label, and the object on which it’s
available.
5. For an Update Record action, enter these details.
a. Select the field on this object that the action updates, and enter the field’s default value.
b. In the Target Object section, select an additional object, add the fields to update, and enter the
default field values.
When this action is triggered, a window opens where users can review, update, and save changes to
these fields.
c. In the Platform Event Parameters section, select a platform event to publish as part of this action,
add the fields to include, and specify the default values.
The platform event details are sent as parameters to workflows, Apex processes, or other
asynchronous processes that are subscribed to this platform event.
6. For a Platform Event action, enter these details.
a. In the Target Object section, select an additional object, add the fields to update, and enter the
default field values.
When this action is triggered, a window opens where users can review, update, and save changes to
these fields.
b. In the Platform Event Parameters section, select a platform event to publish as part of this action,
add the fields to include, and specify the default values.
The platform event details are sent as parameters to workflows, Apex processes, or other

<!-- page:572 -->



asynchronous processes that are subscribed to this platform event.
7. For a Component action, enter these details.
a. In the Component Parameters section, enter the name of the Lightning web component to open
from this action.
b. To populate field values when the component loads, enter component parameters.
For example, for an action that opens a component to capture a signature, add these parameters to
set these values when the component loads:
"status":"Signed","disclaimerText":"Disclaimer Text".
8. For a Custom Action, select a custom URL action to open an external link.
9. Save your changes.

After you create actions, you can see action details and parameters on the Workflow Actions page. You
can also edit, clone, or delete actions.


## See Also

Define and Manage Platform Events
Lightning Web Components Developer Guide: Create Lightning Web Components


Configure Life Sciences Workflow Paths

Create workflow paths for each object and record type to meet your business needs. At each stage of the
record’s lifecycle, define user permissions and the actions that users can take.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure workflow paths:                         Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Workflow Configuration, and then select Workflow Paths.
3. Click New, and give the workflow path a name.
4. Select the object and record type to create the workflow path for.
5. To determine the stages in the workflow path, select the controlling picklist field.
6. To open the workflow builder and define the workflow path, click Continue.
The workflow builder opens on the first stage of the workflow. To select a different stage, click its name
in the progress bar at the top of the page.
7. Define a stage operation, which groups the conditions that control the permissions that users have,
and the actions they can take when records are in this stage.
a. Under Stage Operations, click the plus icon.

<!-- page:573 -->



b. Name the operation.
c. Select whether users can create, edit, or delete records at this stage when conditions are met.
Standard Salesforce object and field-level permissions still apply.
d. Enter a priority for this operation.
When multiple stage operations apply to a record, the highest priority operation takes precedence,
and users are granted those permissions.
e. Save your changes.
8. Define stage operation conditions that must be met in order to grant users permissions and show
configured actions for this stage and operation.
a. Select Stage Operation Conditions, and then click the plus icon.
b. Select the field to evaluate.
You can select fields on this object or a related object.
c. Set the operator for the condition, and enter the required field value.
d. Add more conditions as needed.
All conditions must be met to grant permissions and actions.
9. Define the stage operation actions, which determine the actions that users can perform when
conditions are met for this stage.
a. Select Stage Operation Actions.
b. Click Add Actions, and then select the type of action to add.
c. Select the actions to add to the page, and then save your changes.
d. Add more actions as needed. To reorder the actions, use the arrows.
10. In the Other Permissions tab, choose whether to grant users access to Salesforce Files.
With this permission, users can manage documents and attachments at this stage when conditions
are met.
11. Add or edit additional stage operations for this stage, if needed.
a. To add another parent stage operation, click the plus icon next to Stage Operations.
b. To add a child stage operation, click the plus icon next to a stage’s name.
Child stage operations control access to child objects of the workflow path's object.
For example, in an Inquiry workflow path, create a child stage operation to control when users can
create, edit, or delete Inquiry Question records.
c. To edit a stage operation, select it under Stage Operations, and then click the pencil icon.
d. To delete a stage operation, select it under Stage Operations, and then click the trash can icon.
e. To clone a stage operation and make minor changes, select it under Stage Operations, and then
click the copy icon.
12. Similarly, configure at least one stage operation for each stage in the workflow.
When a stage is configured, a green checkmark appears in the progress bar.
13. After your workflow is completed, activate it to make it available to that object or object type, or save
your changes and activate it later.
14. To create a copy of this workflow path, click Clone.


## See Also

Considerations for Life Sciences Workflows

<!-- page:574 -->



Configure Custom Scripts for Life Sciences Workflows

To make sure that records meet your business rules before the Life Sciences Customer Engagement
workflow continues, create and manage custom scripts. Each time a user performs an action, validation
scripts run to prevent incorrect actions or alert users about errors. Checklist scripts show an info icon on
Update Record actions so that users can see the next steps to take.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure custom scripts:                         Life Sciences Commercial Admin permission set


First, configure custom scripts for the validations that you want to perform or for the checklists that you
want to apply. See Create Lightning Web Components and Custom Scripts for Life Sciences.

Then, you can apply the custom scripts from the Admin Console in Life Sciences Customer Engagement.

1.    From the App Launcher, find and select Admin Console.
2.    Select Workflow Configuration, and then select Custom Scripts.
3.    Click New, and give the script a name.
4.    Enter the name of the Lightning web component that you created.
5.    Select whether this is a script for a checklist or for validation.
6.    Save your changes.
7.    To sync changes to the customer script after you update the Lightning web component, select Refresh.

After you configure custom scripts, assign them to workflow objects.


Assign Custom Scripts to Life Sciences Workflow Objects

To enforce business rules throughout the workflow, update the validation scripts and checklists that
apply to each stage object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:575 -->




USER PERMISSIONS NEEDED

To assign custom scripts to workflow objects:        Life Sciences Commercial Admin permission set


Stage object records are created automatically after you create and save a AFLS for
Customer Engagement workflow path. One stage object record is created for each object that has a
workflow. Validations and checklists apply to all object types.

1.    From the App Launcher, find and select Admin Console.
2.    Select Workflow Configuration, and then select Stage Objects.
3.    Find the object to apply custom scripts to, and then select Edit from the row-level actions.
4.    In the Validation Script field, select the custom script that you created for validation.
5.    In the Checklist Script field, select the custom script that you created for the checklist items.
6.    Save your changes.
After you save your changes, custom scripts run automatically as long as the object has an active
workflow.


## See Also

Configure Custom Scripts for Life Sciences Workflows
Custom Scripts for Life Sciences


Considerations for Life Sciences Workflows

When you configure a AFLS for Customer Engagement workflow, keep these
considerations in mind.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Conflicting Workflow Paths for Parent and Child Objects

Two workflow paths can control permissions to an object record at the same time. This happens if a
parent object's workflow path applies a child stage operation for the child object, and the child object
has its own workflow path and stage operation. When a record’s permissions are controlled by two
separate workflow paths, the most restrictive permissions apply.

For example, let's say you have separate workflow paths for the Inquiry object and the child Inquiry
Question object. The Inquiry Question workflow path includes a stage operation that grants users only
the Delete permission when the response status is Responded. The Inquiry workflow path includes a
child stage operation that grants users Create, Edit, and Delete permissions on Inquiry Question records

<!-- page:576 -->



when the response status is Responded or Not Responded. Because the Inquiry Question workflow path
is more restrictive, users can’t create or edit Inquiry Question records with a Responded status.


Workflow Paths for Objects with Record Types

If an object has record types, you must configure a workflow path for every record type. If you create
workflow paths only for some record types, users can’t create, edit, or delete records of other types.


Workflow Path Stages

Each workflow stage requires at least one stage operation. If a stage doesn’t have a stage operations:

- Users can’t create, update, or delete records when the record is at that stage.
- The stage doesn’t appear in the progress bar at the top of the record detail page.

Workflow Path Field Lengths

Text fields in the workflow path support a maximum length of up to 255 characters. With this length
limit, you can reference parent objects in the workflow path, for example, in stage operation conditions.


Stage Operation Priority

When a workflow stage has multiple operations, a record in that stage can meet the conditions for more
than one operation. To make sure the correct operation is applied and users are granted the correct
permissions, assign each operation a priority.

For example, the New stage in the Inquiry workflow path has two operations:

- Inquiry New Stage Operation 1" has condition "City==San Francisco AND State==CA"
- Inquiry New Stage Operation 2" has condition "State==CA"
A new Inquiry record in San Francisco, California meets both conditions. Assign the higher priority to
Operation 1 to grant users those permissions.


Workflow Record Update Actions

When a user runs a Record Update action, the action executes in this order.

1. The validation script runs.
2. The window opens where users can review, update, and save changes to additional object fields. For
example, a window opens where a user can enter additional information about why they’re canceling
an inquiry.
3. The primary record is updated.
4. The platform event fires.

<!-- page:577 -->




Custom Scripts for Life Sciences

Custom scripts are programmatic tools for data validation across AFLS for Customer
Engagement on desktop and both online and offline in the AFLS mobile app. Custom
scripts are used in Life Sciences workflow management and visit management.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Custom scripts execute during Life Sciences workflow actions to support more complex business
scenarios than standard Salesforce validation rules. Unlike Salesforce validation rules, custom scripts
consolidate validation logic and can query any accessible database data, rather than just related records.
Custom scripts also offer more dynamic user feedback, providing warnings and custom error messages
when users execute actions.

You can create these types of custom scripts.

- Checklist: Checklist custom scripts are used in AFLS for Customer Engagement
workflows. Checklist scripts help users understand all of the steps to take before they can move to the
next stage in the workflow. These scripts are executed when a user clicks the info icon on Record
Update actions.
-    Validation: Validation custom scripts are used in AFLS for Customer Engagement
workflows. Validation scripts make sure that business rules are met before users can move a record to
the next stage in a workflow. These scripts are executed when a user runs any workflow action.
-    Visit Action Validation: Visit action validation custom scripts validate business rules before a user can
sign and submit a visit. These scripts are executed when a user runs an action to sign or submit visits.


## Understand the Format and Output for Life Sciences Custom Scripts

Understand the format and output for custom scripts in AFLS for Customer
Engagement.
Best Practices for Life Sciences Custom Scripts
Follow these best practices when you create custom scripts for AFLS for Customer
Engagement.
Test Custom Scripts for Life Sciences
Because custom scripts aren’t typical Lightning web components, you can’t test them in the same way.
Write custom Jest tests to test the Lightning web components that you create as custom scripts for
workflows in AFLS for Customer Engagement.
Troubleshoot Custom Scripts for Life Sciences
To troubleshoot and debug custom scripts for AFLS for Customer Engagement workflow
validation, use Chrome Developer Tools. The Console tab shows log information, while the Network

<!-- page:578 -->



tab helps monitor network requests, responses, and performance.
Example Visit Action Validation Script
Visit Action Validation Custom Scripts help make sure that users follow business rules before signing or
submitting a visit. These scripts run when the user selects the Sign or Submit action.
Life Sciences Custom Scripts Reference
Understand the available JavaScript classes, functions, and variables that you can include in a
Lightning web component for custom scripts in AFLS for Customer Engagement.


Understand the Format and Output for Life Sciences Custom Scripts

Understand the format and output for custom scripts in AFLS for Customer Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Format

You create custom scripts as headless Lightning web components, meaning that the component
includes only the JavaScript file and the metadata configuration file. See Create Lightning Web
Components.

In the LWC, contain custom script logic in a self-calling function.



## (() => {

// Add custom script logic here.
...
})();



Output

Custom scripts return an array of JavaScript objects with two defined properties.


Property                            Type                               Details

title                               String                             The message that users see. This
can be a custom label name that
can be translated to match the
current user's language.

<!-- page:579 -->




Property                        Type                           Details


## status                          String

The type of message. Statuses
are:

- success: Shows a success
message for checklist scripts.
Not displayed for validation
scripts.
-   warning: Shows a warning
message for checklist scripts.
For validation scripts, if there
are warnings but not errors,
users see all warnings in one
window, and they can choose
to continue.
-   error: Shows an error message
for checklist scripts. Shows an
error window for validation
scripts.



See this example output.


return [
{
title: "Success Message",
status: "success",
},
{
title: "Success_Message_Custom_Label",
status: "success",
},
{
title: "Warning Message",
status: "warning",
},
{
title: "Warning_Message_Custom_Label",
status: "success",
},
{
title: "Error Message",
status: "error",

<!-- page:580 -->




},
{
title: "Error_Message_Custom_Label",
status: "success",
}
];



Best Practices for Life Sciences Custom Scripts

Follow these best practices when you create custom scripts for AFLS for Customer
Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Asynchronous Calls

Database queries are synchronous on the AFLS mobile app but asynchronous on desktop.
To support asynchronous calls, enclose each validation in an async function.



## (() => {

async function inquiryQuestionsValidation() {
try {
let inquiryQuestions = await db.query(
"InquiryQuestion",
await new ConditionBuilder(
"InquiryQuestion",
new FieldCondition("InquiryId", "=", getRecordId(record))
).build(),
["Id", "Name"]
);



## if (

inquiryQuestions === null ||
inquiryQuestions === undefined ||
inquiryQuestions.length === 0
) {
return {

<!-- page:581 -->




title: "No Inquiry Questions Found",
status: "error",
};
}



## return {

title: "Inquiry Questions Added",
status: "success",
}


} catch(error) {
return {
title: "Caught Exception During Inquiry Questions Validation",
status: "error"
}
}
}



## function getRecordId(record) {

let recordId = record.stringValue("Id");
return recordId ? recordId : record.stringValue("uid");
}


return [inquiryQuestionsValidation()];
})();



Database Queries

- To improve performance, always specify fields in database queries.
- Rather than making multiple WHERE clause queries to the database, filter queries in the JavaScript
instead.


Error Handling

To make sure that you “catch” JavaScript errors, use a Try-Catch block in all validation functions in
custom scripts. Otherwise, when JavaScript errors occur, validation rules don’t show in the UI.

If enableAccessErrors() is called before executing a function to retrieve field values, the function
returns a JavaScript error for the inaccessible field. If an error occurs but isn’t caught by a Try-Catch
block:

- On desktop, users see only a field access error for checklist and validation scripts.
- On the AFLS mobile app, users see a field access error for checklist scripts, but
validation scripts fail.

<!-- page:582 -->




Testing

Because errors can sometimes occur in only one environment, we recommend testing custom scripts on
both desktop and in the AFLS mobile app.


Test Custom Scripts for Life Sciences

Because custom scripts aren’t typical Lightning web components, you can’t test them in the same way.
Write custom Jest tests to test the Lightning web components that you create as custom scripts for
workflows in AFLS for Customer Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


See Test Lightning Web Components.

1. Load the script.
a. Read the script's contents from the file system.
b. Create a new function that accepts all necessary parameters for the script and includes the script's
content as the final parameter.
The parameters that you pass into the function should be mocked versions of the classes and
variables that are used in the script. The last parameter should be return , followed by the content
of your script file.


## // Load the script

const scriptContent = fs.readFileSync(path.resolve(__dirname, '../inquiryQ
uestionsValidation.js'));
const scriptFunction = new Function('env', 'record', 'db', 'ConditionBuild
er', 'FieldCondition', `return ${scriptContent.toString()}`);


2. Mock custom script classes and variables.
To create custom script tests, you must create mocked versions of any out-of-the-box classes and
variables and pass them in during testing. If you don’t pass in mocked classes and variables, test
failures occur.

// Mock the classes and variables that are used in the script
const mockEnv = {
getOption: jest.fn(),
};
const mockDb = {

<!-- page:583 -->




query: jest.fn(),
};
const mockRecord = {
stringValue: jest.fn(),
};
const mockConditionBuilder = jest.fn().mockImplementation(() => ({
build: jest.fn().mockResolvedValue({}),
}));
const mockFieldCondition = jest.fn();


3. Set up a test using this structure.
a. Mock the data that’s necessary for your test scenario.
b. Invoke your script's function, and provide mocked classes and variables.
c. To make sure that the complete result is available, allow all validation functions to resolve.
d. Verify the results.


## // Mock the db.query method to return the desired value

mockDb.query.mockResolvedValue([{ Id: '1', Name: 'Question 1' }]);



## // The scriptFunction returns an array containing a Promise

const promiseArray = scriptFunction(mockEnv, mockRecord, mockDb, mockConditi
onBuilder, mockFieldCondition);



## // Wait for the Promise in the array to resolve

const result = await Promise.all(promiseArray);



## // Assert the result is as expected

expect(result).toEqual([{
title: 'Inquiry Questions Added',
status: 'success',
}]);



## Example Test Suite for Life Sciences Custom Scripts

This example provides a test suite for a custom script in AFLS for Customer
Engagement.


Example Test Suite for Life Sciences Custom Scripts

This example provides a test suite for a custom script in AFLS for Customer Engagement.

This example Jest test suite is designed to test the example custom script in Best Practices for Life
Sciences Custom Scripts.


import fs from 'fs';

<!-- page:584 -->




import path from 'path';



## // Load the script

const scriptContent = fs.readFileSync(path.resolve(__dirname, '../inquiryQuest
ionsValidation.js'));
const scriptFunction = new Function('env', 'record', 'db', 'ConditionBuilder',
'FieldCondition', `return ${scriptContent.toString()}`);


// Mock the classes and variables that are used in the script
const mockEnv = {
getOption: jest.fn(),
};
const mockDb = {
query: jest.fn(),
};
const mockRecord = {
stringValue: jest.fn(),
};
const mockConditionBuilder = jest.fn().mockImplementation(() => ({
build: jest.fn().mockResolvedValue({}),
}));
const mockFieldCondition = jest.fn();



describe('inquiryQuestionsValidation', () => {



## beforeEach(() => {

// Clear all mocks and reset modules to ensure a clean state
jest.clearAllMocks();
});


test('should return Inquiry Questions Added when there are inquiry questio
ns', async () => {
// Mock the db.query method to return the desired value
mockDb.query.mockResolvedValue([{ Id: '1', Name: 'Question 1' }]);



## // The scriptFunction returns an array containing a Promise

const promiseArray = scriptFunction(mockEnv, mockRecord, mockDb, mockC
onditionBuilder, mockFieldCondition);



## // Wait for the Promise in the array to resolve

const result = await Promise.all(promiseArray);


// Assert that the result is as expected

<!-- page:585 -->





## expect(result).toEqual([{

title: 'Inquiry Questions Added',
status: 'success',
}]);
});



## test('should return No Inquiry Questions Found when there are no inquiry q

uestions', async () => {
// Mock the db.query method to return the desired value
mockDb.query.mockResolvedValue([]);



## // The scriptFunction returns an array containing a Promise

const promiseArray = scriptFunction(mockEnv, mockRecord, mockDb, mockC
onditionBuilder, mockFieldCondition);



## // Wait for the Promise in the array to resolve

const result = await Promise.all(promiseArray);



## // Assert that the result is as expected

expect(result).toEqual([{
title: 'No Inquiry Questions Found',
status: 'error',
}]);
});



## test('should return Caught Exception During Inquiry Questions Validation w

hen there is an error', async () => {
// Mock the db.query method to return the desired value
mockDb.query.mockRejectedValue(new Error('Error'));



## // The scriptFunction returns an array containing a Promise

const promiseArray = scriptFunction(mockEnv, mockRecord, mockDb, mockC
onditionBuilder, mockFieldCondition);



## // Wait for the Promise in the array to resolve

const result = await Promise.all(promiseArray);



## // Assert that the result is as expected

expect(result).toEqual([{
title: 'Caught Exception During Inquiry Questions Validation',
status: 'error',
}]);
});

<!-- page:586 -->




});



Troubleshoot Custom Scripts for Life Sciences

To troubleshoot and debug custom scripts for AFLS for Customer Engagement workflow
validation, use Chrome Developer Tools. The Console tab shows log information, while the Network tab
helps monitor network requests, responses, and performance.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Troubleshoot in the Console Tab

Troubleshoot custom scripts from the Chrome Developer Tools Console tab.

1. Open Chrome Developer Tools.
2. Go to the Console tab.
3. Review the output for custom scripts.
Custom scripts can use these messages to provide insights into script execution, variable values, and
debugging information.
- console.log()
-   console.warn()
-   console.error()
4. To investigate specific issues, filter the logs by type.
For example, filter by Error, Warning, or Info.


Troubleshoot Network Requests and Responses

Troubleshoot custom scripts from the Chrome Developer Tools Networks tab. When a custom script
makes asynchronous calls, you can monitor these requests in the Network tab.

1. Open Chrome Developer Tools.
2. Go to the Network tab.
3. To monitor network activity, look for requests that are related to your custom script and how it queries
or retrieves data.
4. To inspect requests and responses, click a specific network request and review its details, including the
headers, payload, and response.
5. To show data that's returned by the server, select the Response tab from within a network request.
The data that's returned by the server can help you debug issues that are related to data retrieval.

<!-- page:587 -->



Example Visit Action Validation Script

Visit Action Validation Custom Scripts help make sure that users follow business rules before signing or
submitting a visit. These scripts run when the user selects the Sign or Submit action.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


To create a custom script for Visit Action Validation, create a Lightning component with these attributes:

- For the Script Name, use visitSampleScript.
- For the component name, use the Lightning component name, for example, visitSampleScript.
- For the Type, use Visit Action Validation.
In the Lightning component's JavaScript file, add the custom script from the example later and deploy
the Lightning component to your org. The custom script performs validation whenever someone submits
the Visit Action and when it's signed.

Be aware:

- If you ever change the Lightning component and save it, also find the record in Custom Scripts and
click Refresh.
-    If you create more than one script with Visit Action validation as a type, only the first version of the
script runs. Which script runs is based on ID or creation date.
-    The same Visit Action validation script runs in the mobile and Web versions of the app so be sure to
test on both.

The example script contains six validation rules:


## Validation Rules

Rule                 Use                   Triggers              Error Message         On Success

atLeastOneSample Ensures that the          Always runs           At least one          Shows the number
IsRequired       visit contains at                               sample must be        of samples for the
least one sample                                added to the visit.   visit
(ProductDisburse
ment).

atLeastOneDetailA Requires both a          Always runs           At least one          Shows counts of
ndSampleAreRequ sample and                                       sample and            both samples and
ired              detailed product                               detailed product      detailed products
(ProviderVisitProd                             must be added to

<!-- page:588 -->




Rule                 Use                  Triggers                Error Message        On Success

Detailing).                                  the visit.

atLeastOneMessag Each detailed            Only when the           At least one         Skips other profiles
eIsRequiredForEac product must have       user is a Field Sales   message is           or non-in-person
hVisitDetail      at least one            Representative          required for each    visits
message.                (specific profile) or   detailed product
when the Visit          when the channel
channel is set to       is 'In-Person' and
In-Person               the user has a
'Field Sales
Representative'
profile

specificSampleDe     If a specific        When samples            If <product1> is     N/A
pendencyCheck        product is           exist                   added to a visit,
selected, the rule                           <product2> must
checks if other                              also be added.
required products
are also selected.

isAtLeastOneHCP      HCO (Healthcare      Only for Institution At least one HCP        Skips if the
Organization or      Accounts             (Healthcare             primary account is
Institution) calls                        Professional) must      a Person Account
must have at least                        be associated           (HCP)
one HCP                                   when creating a
(Healthcare                               visit for an HCO
Provider) account                         (Healthcare
attendee.                                 Organization).

isMoreThanOneHC Restricts to only         Always runs             Only 1 HCO           Shows a count of
O               one HCO                                           (Healthcare          HCO accounts
(Institution)                                     Organization)
attendee per call.                                attendee can be
added per visit.


The sample script also contains three reusable helper methods:

- getActionName(env)
- Gets the action name from the environment
- Determines whether validation should run
- Only runs for Submit, Sign, and runCustomScriptValidations
- parseContextData(record)
- Safely extracts context data from the record object
- Handles both JSON strings and objects (including Proxy objects)
- Returns an empty object on error

<!-- page:589 -->



- getFieldData(contextData, baseFieldName)
- This is a platform-aware field data retrieval method.
- For web, it uses FieldName.VisitId (for example, ProductDisbursement.VisitId .)
- For mobile, it uses a simple field name (for example, ProductDisbursement .)
- The method automatically tries both and returns whichever exists.
There are several aspects to be aware of and handle properly when you implement the script:

- On mobile and web, when the Visit Action Validation script runs, the data for the Visit may only be in
memory, so you need to access the current data by processing the fields in the contextData. You can
use db.query but that should be reserved for data which is not being modified in the Visit, such as
checking the record type of an Account.
-   There could be differences in the context data passed to the custom script between mobile and web.
The example custom script handles these differences by using the common helper method
getFieldData .


Example



## (() => {

// Note: Old data extraction functions removed - no longer needed
// since businessRuleValidator provides clean, structured parameters




## // Platform detection flag - will be set in entry point

let hasWebField = false;



/**
* Gets the action name from environment
* @param {Object} env - JsEnv object for environment options
* @returns {string} The action name or empty string
*/
function getActionName(env) {
try {
if (env && typeof env.getOption === 'function') {
return env.getOption('actionName') || '';
}
return '';
} catch (error) {
return '';
}
}

<!-- page:590 -->






## // AccountDAO - Data Access Object for account-related operations

var accountDao = (function () {
var instance;
var currentRecord;
var isPersonAccount;
var isInstitution;
var childCallAccounts;
var accountCache = new Map(); // Simple cache for account data



// Helper functions for accountDao - moved inside closure to access
currentRecord
async function checkForPersonAccount() {
let accountId = currentRecord.stringValue("AccountId");


// If not found, try extracting directly from context data
if (!accountId) {
try {
const contextData = parseContextData(currentRecord);



## // Try different possible locations for AccountId

accountId = contextData.ProviderVisit?.AccountId ||
contextData.Visit?.AccountId ||
contextData.AccountId ||
contextData.Account?.Id ||
contextData.Account;
} catch (e) {
// Error accessing context data, continue with null acc
ountId
accountId = null;
}
}



## if (!accountId) {

return false; // Default to not person account if no accoun
t ID
}



## try {

let account = await selectAccountById(accountId);
let result = account && account.length > 0 ? account[0].boo
lValue("IsPersonAccount") : false;

<!-- page:591 -->




return result;
} catch (error) {
return false; // Default to false on error
}
}




## async function checkForInstitution() {

let accountId = currentRecord.stringValue("AccountId");
// If not found, try extracting directly from context data
if (!accountId) {
try {
const contextData = parseContextData(currentRecord);



## // Try different possible locations for AccountId

accountId = contextData.ProviderVisit?.AccountId ||
contextData.Visit?.AccountId||
contextData.AccountId ||
contextData.Account?.Id ||
contextData.Account;
} catch (e) {
// Error accessing context data, continue with null acc
ountId
}
}



## if (!accountId) {

return false; // Default to not institution if no account I
D
}



## try {

let account = await selectAccountById(accountId);
let isPersonAccount = account && account.length > 0 ? accou
nt[0].boolValue("IsPersonAccount") : false;


// If it's not a Person Account, then it's a Business Accou
nt (HCO)
let result = !isPersonAccount;
return result;
} catch (error) {
return false; // Default to false on error
}

<!-- page:592 -->




}




## async function selectChildCallAccountsById() {

// Extract attendee account IDs directly from the JSON data
// The attendee data is in the Visit.ParentVisitId array in the
JSON


// Get the data from the current record context
let contextData;
try {
contextData = parseContextData(currentRecord);
} catch (error) {
return [];
}



## // Extract attendee account IDs from Visit.ParentVisitId array

const attendeeVisits = contextData?.["Visit.ParentVisitId"] ||
contextData?.["ChildVisit"];


if (!Array.isArray(attendeeVisits) || attendeeVisits.length ===
0) {
return [];
}



## // Extract AccountIds from the attendee visits

const attendeeAccountIds = attendeeVisits
.map(visit => visit.AccountId || visit.accountid)           // Try P
ascalCase first, then lowercase
.filter(accountId => accountId);


if (attendeeAccountIds.length === 0) {
return [];
}




## // Query the Account records for these IDs

let result = await db.query(
"Account",
await new ConditionBuilder(
"Account",
new SetCondition("Id", "IN", attendeeAccountIds)
).build(),

<!-- page:593 -->




["Id", "Name", "IsPersonAccount"]
);


return result || [];
}




## function getRecordId(record) {

return record ? record.stringValue("Id") : null;
}



async function selectAccountById(accountId) {
// Check cache first
if (accountCache.has(accountId)) {
return accountCache.get(accountId);
}



## // If not in cache, query database

let accounts = await db.query(
"Account",
await new ConditionBuilder(
"Account",
new FieldCondition("Id", "=", accountId)
).build(),
["Id", "Name", "IsPersonAccount"]
);



## // Cache the result

accountCache.set(accountId, accounts);


return accounts;
}




## var initialize = async function(record) {

currentRecord = record;
// Clear cache for new record context
accountCache.clear();
isPersonAccount = await checkForPersonAccount();
isInstitution = await checkForInstitution();
childCallAccounts = await selectChildCallAccountsById();
};

<!-- page:594 -->






## var getIsPersonAccount = function () {

return isPersonAccount;
};




## var getIsInstitution = function () {

return isInstitution;
};




## var getChildCallAccounts = function () {

return childCallAccounts;
};



var createInstance = function () {
return {
initialize: initialize,
getIsPersonAccount: getIsPersonAccount,
getChildCallAccounts: getChildCallAccounts,
getIsInstitution: getIsInstitution,
};
};




## return {

getInstance: function () {
return instance || (instance = createInstance());
},
};
})();




## // Main function that businessRuleValidator calls

async function validateVisit() {
try {
if (!record) {
return [{
title: "Error in validation",
status: "error",
error: "No record provided"

<!-- page:595 -->




}];
}


// Use the properly provided business rule parameters from oute
r scope
const validationResults = await runValidation();


// Platform-specific handling: Web uses Promise.all(), Mobile d
oesn't
let resolvedResults;
if (hasWebField) {
// Web platform - use Promise.all() to resolve all promises
resolvedResults = await Promise.all(validationResults);
} else {
// Mobile platform - use validationResults directly
resolvedResults = validationResults;
}



## // Ensure we always return an array

const finalResults = Array.isArray(resolvedResults) ? resolvedR
esults : [resolvedResults];
return finalResults;
} catch (error) {
return [{
title: "Error in validation",
status: "error",
error: error.message
}];
}
}



## // Function to run the validation with data from outer scope

async function runValidation() {



// Initialize accountDao with the proper record object (JsDbObject)
await accountDao.getInstance().initialize(record);




## // Always validate in this version

const isValidationRequired = true;

<!-- page:596 -->





## // Only run validations if needed

let validationResults = [];
if (isValidationRequired) {
// Array of validation functions to run
// Add new validation functions to this array
const validationFunctions = [
atLeastOneSampleIsRequired,
atLeastOneDetailAndSampleAreRequired,
atLeastOneMessageIsRequiredForEachVisitDetail,
specificSampleDependencyCheck,
isAtLeastOneHCP,
isMoreThanOneHCO,
// Add new validation functions here one at a time
// Example: validateSampleType,
// Example: validateComplianceAgreement,
];


// Run all validation functions (handling both sync and async)


validationResults = validationFunctions.map((validationFn, inde
x) => {
try {
// Call validation functions - they access record, use
r, db, env from outer scope
const result = validationFn();
// If the result is a Promise, return it as is for Promis
e.all
if (result && typeof result.then === 'function') {
return result.then(asyncResult => {
return asyncResult;
}).catch(error => {
return {
title: `Error in ${validationFn.name}: ${erro
r.message}`,
status: "error",
error: error.message
};
});
}
return result;
} catch (error) {
return {
title: `Error in ${validationFn.name}: ${error.messag

<!-- page:597 -->




e}`,
status: "error",
error: error.message
};
}
});




## } else {

// Default return when validation is not required
validationResults = [{
title: "Validation not required",
status: "success"
}];
}
return validationResults;
}





## // Helper function to get context data safely

function parseContextData(record) {
try {
if (!record || typeof record.getContextData !== 'function') {
return {};
}


const contextData = record.getContextData();


// Handle different return types from getContextData()
if (typeof contextData === 'string') {
// If it's a JSON string, parse it
return JSON.parse(contextData);
} else if (typeof contextData === 'object' && contextData !== n
ull) {
// If it's already an object (including Proxy), use it dire
ctly
return contextData;
} else {
return {};
}

<!-- page:598 -->




} catch (error) {
return {};
}
}


/**
* Helper function to get field data with web/mobile fallback
* Web uses nested field paths (e.g., "ObjectName.VisitId")
* Mobile uses simple field names (e.g., "ObjectName")
*
* @param {Object} contextData - The context data object
* @param {string} baseFieldName - The base field name (e.g., "ProductD
isbursement")
* @returns {*} The field data from web or mobile field, or undefined
*/
function getFieldData(contextData, baseFieldName) {
const webField = `${baseFieldName}.VisitId`;
const mobileField = baseFieldName;
return contextData?.[webField] || contextData?.[mobileField];
}



## // Validation rule: at least one sample is required

function atLeastOneSampleIsRequired() {
let hasSamples = false;
let sampleCount = 0;



## try {

// Get context data from the record object (from outer scope)
const contextData = parseContextData(record);
// Use helper to get field data with web/mobile fallback
const sampleData = getFieldData(contextData, "ProductDisburseme
nt") || null;


// Handle Proxy arrays properly
if (sampleData) {
try {
// Try to get length property (works for both arrays an
d Proxy arrays)
sampleCount = sampleData.length || 0;
hasSamples = sampleCount > 0;



} catch (lengthError) {

<!-- page:599 -->





## // Handle Proxy length access error

// Fallback: check if object has any enumerable propert
ies
try {
const keys = Object.keys(sampleData);
hasSamples = keys.length > 0;
sampleCount = keys.length;
} catch (keysError) {
// Error getting keys - graceful fallback
hasSamples = false;
sampleCount = 0;
}
}
}
} catch (e) {
// Handle validation error gracefully
hasSamples = false;
sampleCount = 0;
}


return {
title: hasSamples ?
`Found ${sampleCount} sample(s)` :
"At least one sample must be added to the visit.",
status: hasSamples ? "success" : "error"
};
}




## // Validation rule: at least one detail and sample are required

function atLeastOneDetailAndSampleAreRequired() {
try {
const contextData = parseContextData(record);



## // Use helper to get field data with web/mobile fallback

const productDisbursementData = getFieldData(contextData, "Prod
uctDisbursement");
const providerVisitProdDetailingData = getFieldData(contextDat
a, "ProviderVisitProdDetailing");


// Handle Proxy arrays properly for both fields
let sampleCount = 0;
let detailCount = 0;

<!-- page:600 -->




let hasProductDisbursement = false;
let hasProviderVisitProdDetailing = false;



## // Check product disbursement

if (productDisbursementData) {
try {
sampleCount = productDisbursementData.length || 0;
hasProductDisbursement = sampleCount > 0;
} catch (e) {
// Error accessing length property
const keys = Object.keys(productDisbursementData ||
{});
sampleCount = keys.length;
hasProductDisbursement = sampleCount > 0;
}
}



## // Check provider visit prod detailing

if (providerVisitProdDetailingData) {
try {
detailCount = providerVisitProdDetailingData.length ||
0;
hasProviderVisitProdDetailing = detailCount > 0;
} catch (e) {
// Error accessing length property - try Object.keys fa
llback
const keys = Object.keys(providerVisitProdDetailingDat
a);
detailCount = keys.length;
hasProviderVisitProdDetailing = detailCount > 0;
}
}


if (hasProductDisbursement && hasProviderVisitProdDetailing) {
return {
title: `Found ${sampleCount} sample(s) and ${detailCoun
t} detailed product(s)`,
status: "success"
};
}



## return {

title: "At least one sample and detailed product must be ad

<!-- page:601 -->




ded to the visit.",
status: "error"
};
} catch (e) {
return {
title: "At least one sample and detailed product must be ad
ded to the visit.",
status: "error",
error: e.message
};
}
}



// Validation rule: at least one message is required for each visit det
ail
async function atLeastOneMessageIsRequiredForEachVisitDetail() {
try {
let userId;


// Try to get user Id from user (from outer scope)
if (user) {
try {
userId = user.stringValue('Id');
} catch (error) {
// Try alternative access methods
userId = user.Id || user["Id"];
if (!userId) {
// Error accessing userId, continue with fallback
}
}
}


if (!userId) {
return {
title: 'Profile validation skipped - no userId availabl
e',
status: "success",
};
}



// As rep user don't have access to User.ProfileId and Profile

<!-- page:602 -->





## table

// we can only check by ProfileIdentifier in UserAdditionalInfo
//Please replace the Profile_Id with the id of the profile you
want to apply this validation
let targetProfileId = 'Profile_Id';
let userAdditionalInfoResults;
let isFieldSalesRep = false;



## try {

userAdditionalInfoResults = await db.query(
"UserAdditionalInfo",
await new ConditionBuilder(
"UserAdditionalInfo",
new FieldCondition("UserId", "=", userId)
).build(),
["Id", "ProfileIdentifier"]
);



if (userAdditionalInfoResults && userAdditionalInfoResult
s.length > 0) {
const profileId = userAdditionalInfoResults[0].stringVa
lue('ProfileIdentifier');
isFieldSalesRep = profileId === targetProfileId;
} else {
return {
title: 'Profile validation skipped - profile not fo
und',
status: "success",
};
}


} catch (error) {
return {
title: 'Profile validation skipped - unable to query pr
ofile',
status: "success",
};
}



if (!isFieldSalesRep) {
return {

<!-- page:603 -->





## title: `Profile validation skipped - user is not Field

Sales Representative`,
status: "success",
};
}




## // Get visit context data from the record object

const visitData = parseContextData(record);




## // Check if channel is "In-Person"

const visitChannel = visitData?.Visit?.channel || visitData?.Pr
oviderVisit?.Channel || '';



if (visitChannel !== "In-Person") {
return {
title: `Message validation skipped - visit channel is
"${visitChannel}", not "In-Person"`,
status: "success",
};
}




## // Check if we have visit details to validate

// Use helper to get field data with web/mobile fallback
const visitDetails = getFieldData(visitData, "ProviderVisitProd
Detailing");



if (!Array.isArray(visitDetails) || visitDetails.length === 0)
{
return {
title: 'Message validation passed - no visit details to
validate',
status: "success"
};
}




## // Validate each visit detail has at least one message

let detailsWithoutMessages = [];

<!-- page:604 -->






## visitDetails.forEach((detail, index) => {

// Use helper to get field data with web/mobile fallback
const messages = getFieldData(detail, "ProviderVisitDtlProd
uctMsg");
const hasMessages = Array.isArray(messages) && messages.len
gth > 0;



if (!hasMessages) {
const detailInfo = {
index: index + 1,
productId: detail?.productid || 'Unknown Product',
uid: detail?.uid || 'Unknown Detail'
};
detailsWithoutMessages.push(detailInfo);
}
});




## // Set validation result

if (detailsWithoutMessages.length > 0) {
return {
title: "At least one message is required for each detai
led product when the channel is 'In-Person' and the user has a 'Field Sale
s Representative' profile.",
status: "error"
};
} else {
return {
title: `All ${visitDetails.length} detailed products ha
ve messages - Field Sales Rep In-Person validation passed`,
status: "success"
};
}



} catch (error) {
return {
title: "At least one message is required for each detailed
product when the channel is 'In-Person' and the user has a 'Field Sales Re
presentative' profile.",

<!-- page:605 -->




status: "error",
error: error.message
};
}
}



/**
* The rule 'specificSampleDependencyCheck' blocks the user from submit
ting a visit.
* Validation: If sample "Immunexis 10mg" is selected,
* then "ADRAVIL Sample Pack 5mg" must also be selected.
* @returns result { title: string, status: "success" | "error" };
*/
async function specificSampleDependencyCheck() {




## try {

// Get visit context data from record (from outer scope)
let visitData = parseContextData(record);



## // Check if we have samples to validate

// Use helper to get field data with web/mobile fallback
let samples = getFieldData(visitData, "ProductDisbursement");



## // Handle Proxy arrays properly

let samplesCount = 0;
let isValidSamples = false;


if (samples) {
try {
samplesCount = samples.length || 0;
isValidSamples = samplesCount > 0;
} catch (e) {
// Error accessing samples length
const keys = Object.keys(samples || {});
samplesCount = keys.length;
isValidSamples = samplesCount > 0;
}
}


if (!isValidSamples) {
return {

<!-- page:606 -->




title: 'Sample dependency validation passed - no sample
s to validate',
status: "success"
};
}




## // Get all product item IDs from samples

let productItemIds = [];
try {
if (samples && typeof samples === 'object') {
// Handle both array and Proxy array
for (let i = 0; i < samplesCount; i++) {
try {
const sample = samples[i];




## if (sample) {

const productItemId = sample.ProductItemId
|| sample.productitemid
productItemIds.push(productItemId);
}
} catch (sampleError) {
// Error accessing sample
}
}
}
} catch (mappingError) {
// Error mapping product item IDs
}




if (productItemIds.length === 0) {
return {
title: 'Sample dependency validation passed - no produc
t item IDs found',
status: "success"
};
}



## // Query ProductItem to get Product2Id

let productItems = await db.query(

<!-- page:607 -->




"ProductItem",
await new ConditionBuilder(
"ProductItem",
new SetCondition("Id", "IN", productItemIds)
).build(),
["Id", "Product2Id"]
);



// Extract Product2Ids and create a map of productItemId to Pro
duct2Id
let product2Ids = [];
let productItemToProduct2Map = new Map();



## if (productItems && Array.isArray(productItems)) {

productItems.forEach(item => {
const productItemId = item.stringValue("Id");
const product2Id = item.stringValue("Product2Id");



## if (product2Id) {

product2Ids.push(product2Id);
productItemToProduct2Map.set(productItemId, product
2Id);
}
});
}



## // Query Product2 to get product names

let product2Items = await db.query(
"Product2",
await new ConditionBuilder(
"Product2",
new SetCondition("Id", "IN", product2Ids)
).build(),
["Id", "Name"]
);



## // Create a map of Product2Id to Name

let product2NameMap = new Map();
if (product2Items && Array.isArray(product2Items)) {
product2Items.forEach(item => {
const id = item.stringValue("Id");
const name = item.stringValue("Name");

<!-- page:608 -->




product2NameMap.set(id, name);
});
}


// Create a map of productItemId to ProductName (via Product2)
let itemToProductNameMap = new Map();
productItemToProduct2Map.forEach((product2Id, productItemId) =>
{
const productName = product2NameMap.get(product2Id);
if (productName) {
itemToProductNameMap.set(productItemId, productName);
}
});



## // Get all sample names for the current visit

let sampleNames = [];
try {
if (samples && typeof samples === 'object') {
// Handle both array and Proxy array for sample names
for (let i = 0; i < samplesCount; i++) {
try {
const sample = samples[i];
if (sample) {
const productItemId = sample.ProductItemId
|| sample.productitemid;
const productName = itemToProductNameMap.ge
t(productItemId) || '';
if (productName) {
sampleNames.push(productName);
}
}
} catch (sampleError) {
// Error accessing sample for name mapping
}
}
}
} catch (nameMappingError) {
// Error mapping sample names
}



## // Check if Immunexis 10mg is present

const targetSample = "Immunexis 10mg";
const requiredSample = "ADRAVIL Sample Pack 5mg";

<!-- page:609 -->




let hasImmunexis = sampleNames.includes(targetSample);




## if (hasImmunexis) {

// If Immunexis is present, check if ADRAVIL is also presen
t
let hasAdravil = sampleNames.includes(requiredSample);



if (!hasAdravil) {
return {
title: "If Immunexis 10mg is added to a visit, ADRA
VIL Sample Pack 5mg must also be added. However, ADRAVIL Sample Pack 5mg c
an be added without Immunexis 10mg.",
status: "error"
};
} else {
return {
title: "Sample dependency validation passed - both
Immunexis 10mg and ADRAVIL Sample Pack 5mg present",
status: "success"
};
}
} else {
return {
title: "Sample dependency validation passed - no Immune
xis 10mg found",
status: "success"
};
}




## } catch (error) {

// Error in specificSampleDependencyCheck
// In case of database error, we might want to pass validation
or handle differently
// For now, we'll pass the validation to avoid blocking the use
r due to technical issues
return {
title: "Sample dependency validation passed - technical err
or occurred",
status: "success"
};

<!-- page:610 -->




}
}



/**
* The rule 'isAtLeastOneHCP' blocks the user from submitting a call.
* Validation: Require at least one HCP (Person Account) for a HCO (Ins
titution Account) call on Submit.
* @returns result { title: string, status: "success" | "error" };
*/
async function isAtLeastOneHCP() {
try {


// Log current account details from record (from outer scope)
const currentAccountId = record.stringValue("AccountId");



// Use accountDao to check if current account is a Person Accou
nt
let isPersonAccount = await accountDao.getInstance().getIsPerso
nAccount();
let isInstitution = await accountDao.getInstance().getIsInstitu
tion();




## if (isPersonAccount) {

// This is already a Person Account (HCP), so requirement i
s met
return {
title: "HCP validation passed - current account is a Pe
rson Account (HCP)",
status: "success"
};
}




## // Only apply HCP validation to Institution accounts

if (!isInstitution) {
return {
title: "HCP validation skipped - account is not an Inst
itution Account",
status: "success"
};

<!-- page:611 -->




}




## // This is an Institution Account, check for HCP attendees

let childCallAccounts = await accountDao.getInstance().getChild
CallAccounts();



let isRequirementValid = false;
let hcpAttendees = [];
let nonHcpAttendees = [];



if (Array.isArray(childCallAccounts) && childCallAccounts.lengt
h > 0) {
// Check if any attendee is a Person Account (HCP)
for (let i = 0; i < childCallAccounts.length; i++) {
let attendee = childCallAccounts[i];
let attendeeIsPersonAccount = attendee.boolValue("IsPer
sonAccount");
let attendeeName = attendee.stringValue("Name") || atte
ndee.stringValue("Id");



## if (attendeeIsPersonAccount) {

isRequirementValid = true;
hcpAttendees.push(attendeeName);
} else {
nonHcpAttendees.push(attendeeName);
}
}
}





## // Add more descriptive message based on the scenario

if (!isRequirementValid) {
return {
title: "At least one HCP (Healthcare Professional) must
be associated when creating a visit for an HCO (Healthcare Organizatio
n).",
status: "error"
};

<!-- page:612 -->




} else {
return {
title: `HCP validation passed - Institution Account wit
h ${hcpAttendees.length} HCP attendee(s): ${hcpAttendees.join(', ')}`,
status: "success"
};
}




## } catch (error) {

// Error in isAtLeastOneHCP
// In case of error, fail the validation to be safe
return {
title: "HCP validation failed - error occurred during valid
ation",
status: "error",
error: error.message
};
}
}



/**
* The rule 'isMoreThanOneHCO' blocks user from submitting a call.
* Validation: Restrict to one HCO (Institution Account) attendee per C
all.
* @returns result { title: string, status: "success" | "error" };
* Note: Expected only 1 HCO attendee per call)
*/
async function isMoreThanOneHCO() {
try {


let counter = 0;
let isPersonAccount = await accountDao.getInstance().getIsP
ersonAccount();
let accsRelatedToChildCall = await accountDao.getInstanc
e().getChildCallAccounts();



let hcoAccounts = [];
let hcpAccounts = [];

<!-- page:613 -->





## if (isPersonAccount || accsRelatedToChildCall.length) {

for (let i = 0; i < accsRelatedToChildCall.length; i++)
{
let relatedAcc = accsRelatedToChildCall[i];
let attendeeIsPersonAccount = relatedAcc.boolValu
e("IsPersonAccount");
let attendeeName = relatedAcc.stringValue("Name")
|| relatedAcc.stringValue("Id");


if (!attendeeIsPersonAccount) {
counter++;
hcoAccounts.push(attendeeName);
} else {
hcpAccounts.push(attendeeName);
}
}
} else {
counter++;
}



const isValid = counter <= 1;



if (!isValid) {
return {
title: "Only 1 HCO (Healthcare Organization) attend
ee can be added per visit.",
status: "error"
};
} else {
return {
title: `HCO count validation passed - found ${count
er} HCO account(s)`,
status: "success"
};
}




## } catch (error) {

// Error in isMoreThanOneHCO
return {
title: "HCO count validation failed - error occurred du

<!-- page:614 -->




ring validation",
status: "error",
error: error.message
};
}
}





## // Entry point: Check if proper parameters are provided

if (record && user && env && db) {
// Check action name - only run validation for specific actions
const actionName = getActionName(env);
const allowedActions = ['Submit', 'Sign', 'runCustomScriptValidatio
ns'];



## if (!allowedActions.includes(actionName)) {

// Skip validation for other actions
return [{
title: `Validation skipped - action is "${actionName}"`,
status: 'success'
}];
}



## // Platform detection: Check which field structure exists to determ

ine wrapping behavior
const contextData = parseContextData(record);


// Web uses nested field paths (e.g., "ProviderVisit")
// Mobile uses simple field names (e.g., "Visit")
hasWebField = contextData?.["ProviderVisit"] !== undefined;



## // Wrap in array if using web platform, don't wrap for mobile

const wrapAsArray = hasWebField;


// Apply wrapping based on platform
if (wrapAsArray) {
// Web solution - wrap in array
return [validateVisit()];
} else {
// Mobile solution - no wrapping
return validateVisit();

<!-- page:615 -->




}
}


// If no parameters provided yet, return validation function wrapped in
array
return [validateVisit];
})();




Life Sciences Custom Scripts Reference

Understand the available JavaScript classes, functions, and variables that you can include in a Lightning
web component for custom scripts in AFLS for Customer Engagement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Classes for Life Sciences Custom Scripts

AFLS for Customer Engagement supports various JavaScript classes in custom scripts.
These classes enable you to create powerful and flexible logic within the script, particularly for
constructing queries and managing data. Each class includes a description of its purpose, constructor
details, parameters, methods, and examples.
Variables for Life Sciences Custom Scripts
Global variables in AFLS for Customer Engagement custom scripts provide access to
contextual information such as environment details, database interactions, current record data, and
user information. Use these variables to develop dynamic, data-driven custom scripts.
Functions for Life Sciences Custom Scripts
Use functions to enhance the robustness and adaptability of your custom scripts in AFLS
for Customer Engagement. These functions provide specific utilities, from error handling and
namespace management to retrieving metadata about available fields.


Classes for Life Sciences Custom Scripts

AFLS for Customer Engagement supports various JavaScript classes in custom scripts.
These classes enable you to create powerful and flexible logic within the script, particularly for
constructing queries and managing data. Each class includes a description of its purpose, constructor
details, parameters, methods, and examples.

<!-- page:616 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## AndCondition Class

Builds a SOQL condition based on multiple nested conditions. Extends GroupCondition.
Condition Class
An abstract class that serves as the foundation for all conditions and lacks a concrete implementation.
ConditionBuilder Class
Builds a WHERE clause to use as part of a SOQL query. Validates if the current user has access to the
fields that are used in conditions.
ConditionEnhancedBuilder Class
Serves the same purpose as the ConditionBuilder class. Only use the ConditionEnhancedBuilder class
with the db.bulkQuery function. The ConditionEnhancedBuilder class doesn’t validate whether the
current user has access to the fields that are used in the query conditions.
DateFieldCondition Class
Builds a SOQL condition for a date field based on the specified operator. Extends FieldCondition.
DateTimeFieldCondition Class
Builds a SOQL condition for a datetime field based on the specified operator. Extends FieldCondition.
FieldCondition Class
Builds a SOQL condition for a field based on the specified operator. Extends OperatorCondition.
GroupCondition Class
Builds a SOQL condition based on multiple nested conditions. Extends Condition.
OperatorCondition Class
Extends the Condition class. Used as a super class for specific conditions.
OrCondition Class
Builds a SOQL condition based on multiple nested conditions. Extends GroupCondition.
Query Class
Creates a SOQL query based on an input. Only use the Query class as a subquery of SetCondition. To
build a complex WHERE clause, pass SetCondition to ConditionBuilder.
SetCondition Class
Builds a SOQL condition for a field whose value is in a specified range. Extends OperatorCondition.


AndCondition Class

Builds a SOQL condition based on multiple nested conditions. Extends GroupCondition.

<!-- page:617 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor()

Builds a GroupCondition with AND as the nesting operator.


toSoql()

Returns the generated SOQL query as a string.


Example


## await new ConditionBuilder(

"HealthcareProvider",
new AndCondition()
.add(new FieldCondition("Status", "=", "Active"))
.add(new FieldCondition("IsPrimaryProvider", "=", true))
).build()


// Returns: "(Status = \'Active\') AND (IsPrimaryProvider = true)"



Condition Class

An abstract class that serves as the foundation for all conditions and lacks a concrete implementation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

Important Don’t use the Condition class directly. Instead, use the predefined classes that extend
the Condition class. Provide an instance of a Condition subclass as a parameter for the
ConditionBuilder. The ConditionBuilder then uses the Condition subclass to construct the WHERE
clause part of the query.

<!-- page:618 -->




getRequiredFields()

Returns an empty object.


toSoql()

Returns an empty string.


ConditionBuilder Class

Builds a WHERE clause to use as part of a SOQL query. Validates if the current user has access to the
fields that are used in conditions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(objectType, condition)

Creates an instance of ConditionBuilder.

This method accepts these parameters.


Parameter                           Type                              Description

objectType                          String                            The object for which the query is
built.

condition                           Condition                         The condition to use for the
query.


build()

Builds the condition based on the provided object and condition. Checks if the user has access to the
fields that are used in conditions, and returns an exception if they don’t have access.


Example

await new ConditionBuilder(

<!-- page:619 -->




"Account",
new FieldCondition("Name", "=", "sForce")
).build()


// Returns: "Name = 'sForce'"



ConditionEnhancedBuilder Class

Serves the same purpose as the ConditionBuilder class. Only use the ConditionEnhancedBuilder class
with the db.bulkQuery function. The ConditionEnhancedBuilder class doesn’t validate whether the
current user has access to the fields that are used in the query conditions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(objectType, condition)

Creates an instance of ConditionEnhancedBuilder.

This method accepts these parameters.


Parameter                           Type                                Description

objectType                          String                              The object for which the query is
built.

condition                           Condition                           The condition to use for the
query.


build()

Returns a JavaScript object with a SOQL string and a map of fields that are listed in the condition for
each JavaScript object.


Example

await new ConditionEnhancedBuilder(
"Account",

<!-- page:620 -->




new FieldCondition("Name", "=", "sForce")
).build()


/**
* Returns this JavaScript object:
* {
*     soqlString: "Name = 'sForce'",
*     fieldNamesByObjectNames: {"Account": ["Name"]}
* }
*/



DateFieldCondition Class

Builds a SOQL condition for a date field based on the specified operator. Extends FieldCondition.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(dateField, operator, dateValue)

Creates an instance of DateFieldCondition.

This method accepts these parameters.


Parameter                           Type                              Description

dateField                           String                            The name of the field to use as
part of a condition.

operator                            String                            The operator to use as part of a
condition.

dateValue                           Date                              The date to use as part of a
condition.


toSoql()

Returns the generated SOQL query as a string.

<!-- page:621 -->




Example


## await new ConditionBuilder(

"HealthcareProvider",
new DateFieldCondition("InitialStartDate", "=", new Date())
).build()


// Returns: "InitialStartDate = 2024-08-12"



DateTimeFieldCondition Class

Builds a SOQL condition for a datetime field based on the specified operator. Extends FieldCondition.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(dateTimeField, operator, dateTimeValue)

Creates an instance of DateTimeFieldCondition.

This method accepts these parameters.


Parameter                           Type                              Description

dateTimeField                       String                            The name of the field to use as
part of a condition.

operator                            String                            The operator to use as part of a
condition.

dateTimeValue                       Date                              The date to use as part of a
condition.


toSoql()

Returns the generated SOQL query as a string.

<!-- page:622 -->




Example

await new ConditionBuilder(
"Inquiry",
new DateTimeFieldCondition("CreatedDate", "=", new Date())
).build()


// Returns: "CreatedDate = 2024-08-12T12:47:55.594Z"




FieldCondition Class

Builds a SOQL condition for a field based on the specified operator. Extends OperatorCondition.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(field, operator, value)

Creates an instance of FieldCondition.

This method accepts these parameters.


Parameter                           Type                              Description

field                               String                            The name of the field to use as
part of a condition.

operator                            String                            The operator to use as part of a
condition.

value                               String                            The value to use as part of a
condition. A null value is
supported for the = and !=
operators.


toSoql()

Returns the generated SOQL query as a string.

<!-- page:623 -->




Example

await new ConditionBuilder(
"Inquiry",
new FieldCondition("Type", "=", "MedicalInquiry")
).build()


// Returns: "Type = 'MedicalInquiry'"



GroupCondition Class

Builds a SOQL condition based on multiple nested conditions. Extends Condition.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(nestingOperator)

Creates an instance of GroupCondition.

This method accepts these parameters.


Parameter                           Type                              Description

nestingOperator                     String                            The operator to use between
nested conditions. Supported
operators are AND and OR.


add(condition)

Adds a nested condition to the group condition.

This method accepts these parameters.


Parameter                           Type                              Description

condition                           Condition                         The condition to add to the
group condition.

<!-- page:624 -->




getRequiredFields(objectType)

Returns the required fields for a specified object type.

This method accepts these parameters.


Parameter                           Type                                Description

objectType                          String                              The name of the object to get
the required fields for.


toSoql()

Returns the generated SOQL query as a string.


Example


## await new ConditionBuilder(

"HealthcareProvider",
new GroupCondition("AND")
.add(new FieldCondition("Status", "=", "Active"))
.add(new FieldCondition("IsPrimaryProvider", "=", true))
).build()


// Returns: "(Status = \'Active\') AND (IsPrimaryProvider = true)"



OperatorCondition Class

Extends the Condition class. Used as a super class for specific conditions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(field, operator)

Creates an instance of OperatorCondition.

This method accepts these parameters.

<!-- page:625 -->




Parameter                           Type                                 Description

field                               String                               The name of the field to use as
part of a condition.

operator                            String                               The operator to use as part of a
condition.

value                               Array or Query                       An array of values to use as part
of a condition, or an instance of
a Query object that specifies the
field values to query.


getRequiredFields(objectType)

Returns the required fields for a specified object type.

This method accepts these parameters.


Parameter                           Type                                 Description

objectType                          String                               The name of the object to get
the required fields for.


toSoql()

Returns the generated SOQL query as a string.


OrCondition Class

Builds a SOQL condition based on multiple nested conditions. Extends GroupCondition.


constructor()

Builds a GroupCondition with OR as the nesting operator.


toSoql()

Returns the generated SOQL query as a string.


Example

await new ConditionBuilder(

<!-- page:626 -->




"HealthcareProvider",
new OrCondition()
.add(new FieldCondition("Status", "=", "Active"))
.add(new FieldCondition("IsPrimaryProvider", "=", true))
).build()


// Returns: "(Status = \'Active\') OR (IsPrimaryProvider = true)"



Query Class

Creates a SOQL query based on an input. Only use the Query class as a subquery of SetCondition. To
build a complex WHERE clause, pass SetCondition to ConditionBuilder.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor()

Creates an empty instance of Query.


select(field)

Specifies the field name to select. Only one field name can be selected. Returns an instance of Query.

This method accepts these parameters.


Parameter                           Type                              Description

field                               String                            The name of the field to select.


from(sObjectType)

Specifies the object to query. Returns an instance of Query.

This method accepts these parameters.


Parameter                           Type                              Description

sObjectType                         String                            The name of the object to query.

<!-- page:627 -->




where(condition)

Specifies the where condition for the query. Returns an instance of Query.

This method accepts these parameters.


Parameter                           Type                                Description

condition                           Condition                           The condition to use as part of
the query.


getRequiredFields()

Returns the required fields for a specified object type.

This method is supported only on desktop and doesn’t work on the AFLS mobile app.


toSoql()

Returns the generated SOQL query as a string.


Example

await new ConditionBuilder(
"Account",
new SetCondition(
"Id",
"IN",
new Query()
.select("AccountId")
.from("Visit")
.where(new FieldCondition("Status", "=","Planned"))
)
).build();


// Returns: "Id IN (SELECT AccountId FROM Visit WHERE Status = \'Planned\')"



SetCondition Class

Builds a SOQL condition for a field whose value is in a specified range. Extends OperatorCondition.

<!-- page:628 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


constructor(field, operator, values)

Creates an instance of SetCondition.

This method accepts these parameters.


Parameter                           Type                                 Description

field                               String                               The name of the field to use as
part of a condition.

operator                            String                               The operator to use as part of a
condition.

value                               Array or Query                       An array of values to use as part
of a condition, or an instance of
a Query object that specifies the
field values to query.


getRequiredFields(objectType)

Returns the required fields for a specified object type. This method accepts these parameters.


Parameter                           Type                                 Description

objectType                          String                               The name of the object to get
the required fields for.


toSoql()

Returns the generated SOQL query as a string.


Example

await new ConditionBuilder(
"Inquiry",

<!-- page:629 -->




new SetCondition(
"Type",
"IN",
["MedicalInquiry", "ProductInformation"],
)
).build()


// Returns: "Type IN (\'MedicalInquiry\',\'ProductInformation\')"



Variables for Life Sciences Custom Scripts

Global variables in AFLS for Customer Engagement custom scripts provide access to
contextual information such as environment details, database interactions, current record data, and user
information. Use these variables to develop dynamic, data-driven custom scripts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Environment Variable

The environment (env) variable manages environment settings. You can retrieve or create environment
option values, get log information, and format labels for localization.
Database Variable
The db object provides access to the database to query records. All db functions are executed
synchronously on the AFLS mobile app and asynchronously on desktop. In order to
query correctly, use await syntax.
Record Variable
The record variable represents the current record in the context of the custom script. You can retrieve
string, number, boolean, or date field values, and you can set values for fields on the current record.
User Variable
The user variable represents the current user and provides methods to access and modify field values
on the user record. You can retrieve string, number, boolean, or date field values, and you can set
values for user record fields.


Environment Variable

The environment (env) variable manages environment settings. You can retrieve or create environment
option values, get log information, and format labels for localization.

<!-- page:630 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


getOption(name)

Returns the value of the environment option. These options are set by default.

- fromStatus:
- On desktop, fromStatus is set to the current value of a controlling field for the workflow path. This is
set only when a Record Update action runs.
- On the AFLS for Customer Engagement mobile app, fromStatus is set to the current
value of the field to be updated by a Record Update action. This is set only when a Record Update
action runs.
-    toStatus: The new value of the field to be updated by a Record Update action. This is set only when a
Record Update action runs.
-    fieldName: The name of the field to be updated by a Record Update action. This is set only when a
Record Update action runs.
-    actionName: The name of the action on the action button.


Parameter                            Type                              Description

name                                 String                            The name of the option to
retrieve.


setOption(name, value)

Sets an environment option based on the name and value.


Parameter                            Type                              Description

name                                 String                            The name of the option to set.

value                                Object                            The value of the option to set.


log(msg)

Logs a message to the browser console with the prefix "JS LOG: ".

<!-- page:631 -->




Parameter                           Type                              Description

msg                                 String                            The message to be logged to the
browser console.


formatCustomLabel(key, defaultValue, argumentsList)

Translates a given custom label to match the current user’s locale and replaces %@ symbols with given
arguments. The resulting JavaScript object should be set to the title attribute in the returned message.


Parameter                           Type                              Description

key                                 String                            The name of the custom label.

defaultValue                        String                            A default value to use when no
custom label is found.

argumentsList                       Array                             An array of strings to use to
replace placeholders in custom
labels.


Database Variable

The db object provides access to the database to query records. All db functions are executed
synchronously on the AFLS mobile app and asynchronously on desktop. In order to query
correctly, use await syntax.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


rowById(entity, id, selectedFields)

Retrieves a record for a given object from the database by using the record ID.


Parameter                           Type                              Description

entity                              String                            The name of the object type to
retrieve.

id                                  String                            The ID of the record to retrieve.

<!-- page:632 -->




Parameter                              Type                            Description


## selectedFields                         Array

The array of fields to select.

This parameter is supported only
on desktop.


rowsByEntity(entity, selectedFields)

Retrieves records from the database for a given object.


Parameter                              Type                            Description

entity                                 String                          The name of the object type to
retrieve.


## selectedFields                         Array

The array of fields to select.

This parameter is supported only
on desktop.


query(entity, whereClause, selectedFields)

Retrieves records from the database for a given object based on a WHERE clause.


Parameter                              Type                            Description

entity                                 String                          The name of the object type to
retrieve.

whereClause                            String                          The SOQL WHERE clause to use
in the query. You can use
ConditionBuilder to build the
WHERE clause.


## selectedFields                         Array

The array of fields to select.

This parameter is supported only
on desktop.


bulkQuery(queries)

Returns a key-value container [String: [JsDbObject]] where the key is uniqueRequestKey and the
value is an array of queried records.

<!-- page:633 -->




Parameter                       Type                             Description

uniqueRequestKey                String                           The unique key to use to identify
the specific query result.

sObjectName                     String                           The name of the object type to
retrieve.

condition                       ConditionEnhancedBuilder         The ConditionEnhancedBuilder
object to use for the query.


## selectedFields                  Array

The array of fields to select.

This parameter is supported only
on desktop.


Examples

This is a query() example.


await db.query(
"Inquiry",
await new ConditionBuilder(
"Inquiry",
new FieldCondition("Type", "=", "MedicalInquiry")
).build(),
["Id", "Name", "Status", "Type"]
)


/**
* Returns arrays of Inquiry records of from the local database. The full quer
y is:
* "SELECT Id, Name, Status, Type FROM Inquiry WHERE Type = \'MedicalInquir
y\'"
*/


This is a bulkQuery() example.


let result = await db.bulkQuery([
{
uniqueRequestKey: "inquiryRequest",
sObjectName: "Inquiry",
selectedFields: ["Id", "Name", "Status", "Type"],
condition: new ConditionEnhancedBuilder(

<!-- page:634 -->




"Inquiry",
new FieldCondition("Type", "=", "MedicalInquiry")
).build(),
},
{
uniqueRequestKey: "accountRequest",
sObjectName: "Account",
selectedFields: ["Id", "Name"],
condition: new ConditionEnhancedBuilder(
"Account",
new FieldCondition("Name", "=", "sForce")
).build(),
},
]);


/**
* These queries are executed:
*
* "SELECT Id, Name, Status, Type FROM Inquiry WHERE Type = \'MedicalInquir
y\'"
*
* "SELECT Id, Name FROM Account WHERE Name = \'sForce\'"
*
* The results are combined into a single key-value container, where the key i
s uniqueRequestKey and the value is an array of records. These can be treated
as JavaScript objects, and results can be accessed by properties.
*
* let inquiryRecords = result.inquiryRequest;
* let accountRecords = result.accountRequest;
*/



Record Variable

The record variable represents the current record in the context of the custom script. You can retrieve
string, number, boolean, or date field values, and you can set values for fields on the current record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:635 -->




stringValue(key)

Returns the value of a string field on the record if the field exists and is readable.


Parameter                            Type                                  Description

key                                  String                                The name of the field on the
record.


numValue(key)

Returns the value of a number field on the record if the field exists and is readable.


Parameter                            Type                                  Description

key                                  String                                The name of the field on the
record.


boolValue(key)

Returns the value of a boolean field on the record if the field exists and is readable.


Parameter                            Type                                  Description

key                                  String                                The name of the field on the
record.


dateValue(key)

Returns the value of a date field on the record if the field exists and is readable.


Parameter                            Type                                  Description

key                                  String                                The name of the field on the
record.


setValue(key, value)

Sets a value for a given field on a record.


Parameter                            Type                                  Description

key                                  String                                The name of the field on the
record.

<!-- page:636 -->




Parameter                            Type                                  Description

value                                Object                                The field value to set.


recordTypeName()

Returns the name of the current record’s record type, if it exists.


User Variable

The user variable represents the current user and provides methods to access and modify field values on
the user record. You can retrieve string, number, boolean, or date field values, and you can set values for
user record fields.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


stringValue(key)

Returns the value of a string field on the user record if the field exists and is readable.


Parameter                            Type                                  Description

key                                  String                                Name of the field on the user
object.


numValue(key)

Returns the value of a number field on the user record if the field exists and is readable.


Parameter                            Type                                  Description

key                                  String                                Name of the field on the user
object.


boolValue(key)

Returns the value of a boolean field on the user record if the field exists and is readable.

<!-- page:637 -->




Parameter                            Type                                 Description

key                                  String                               Name of the field on the user
object.


dateValue(key)

Returns the value of a date field on the user record if the field exists and is readable.


Parameter                            Type                                 Description

key                                  String                               The name of the field on the
user object.


setValue(key, value)

Sets a value for a given field on a user record.


Parameter                            Type                                 Description

key                                  String                               The name of the field on the
user object.

value                                Object                               The field value to set.


Functions for Life Sciences Custom Scripts

Use functions to enhance the robustness and adaptability of your custom scripts in AFLS
for Customer Engagement. These functions provide specific utilities, from error handling and namespace
management to retrieving metadata about available fields.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


enableAccessErrors()

Enables returning exceptions in the custom script.

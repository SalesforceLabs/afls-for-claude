<!-- guide:admin-guide section:set-up-the-life-sciences-cloud-mobile-app pages:27-58 -->
# Set Up the AFLS Mobile App



times off territory, and general events.


Up Next Map

Use the UpNextMapDisplay component to show users a list of their upcoming visits, times off territory,
and general events. Users also see their upcoming visits on a map. Users who turn on location services
can also see their distance from the upcoming visits on the map and their estimated time of arrival.

In the component’s properties, set the timing for visit reminders on the device's lock screen. Do Not
Disturb reminders open the iPad settings so that users can turn on Do Not Disturb before the visit. Event
reminders open the AFLS mobile app.

This component is supported only in the AFLS mobile app. Lightning App Builder shows a
placeholder instead of previewing the component.


Visits to Submit

Use the UnsubmittedVisits component to show users the visits that remain in the Planned state after
their planned start time has passed. Visits are ordered by date so that users can quickly identify the visits
that they must submit to stay compliant. Users can also see details about each visit, including the
planned start and end times, the primary account, the place ID, the channel, and whether it was a group
visit. For more information, see Visit Management.

In the AFLS mobile app, the UnsubmittedVisits component fills only 50 percent of the
page.


Standard Salesforce Components

The AFLS for Customer Engagement home page also supports standard Lightning
components.

- To show lists of important records directly on the home page, add a List View component. In the Life
Sciences Cloud mobile app, users see up to 5 records in each list.
- To add other relevant content or messages to the home page, use a Rich Text component.
- To help users visualize important data, use the standard Dashboard and Report Chart components. To
show reports and dashboards on the home page in the AFLS mobile app, turn on report
settings from the Admin Console. See Reports and Dashboards Administration.

For information about these and other components, see Standard Lightning Page Components.



Set Up the AFLS Mobile App

Set up the AFLS mobile app to enable your field users to securely connect with healthcare
professionals and organizations through their iPads. Field users can access and work with critical data,

<!-- page:28 -->



content (PDFs, HTML5, videos), reports, and smart summaries with or without an internet connection.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


The AFLS mobile app is available for iPad in the Apple App Store.

- Supported Devices: iPad (11th generation), iPad Air 11-in and 13-in (7th generation), and iPad Pro
11-in and 13-in (7th generation).
-    Supported OS Versions: iOS 18.0+


## Customize the AFLS Mobile App

Customize the AFLS mobile app to your organization’s needs by configuring the required
settings.
Synchronization Management
Define device synchronization settings between the AFLS mobile app and your
Salesforce org to support data management and control. Help your mobile app users keep their data
current so they can make well-informed decisions.
Deep Linking for the AFLS Mobile App
Your sales reps rely on their mobile devices to perform complex tasks and navigate between multiple
tabs, records, or actions. With deep linking, you can use supported URL schemes to send users directly
to the right spot in the AFLS mobile app from a third-party or web app. For example,
deep links can open specific records, create a record with prepopulated data, or perform a specific
action when the app opens.
AFLS (AFLS) Apps
AFLS Apps are custom Lightning Web Components (LWC) that you can create and embed on the Life
Sciences Cloud mobile app. These apps enable you to design and implement complex features and
integrations on lightning pages and the AFLS mobile app.
Global Search in the AFLS Mobile App
Quickly find information in the AFLS mobile app by using the Global Search feature to
search across a predefined set of objects and fields within the iPad database. You can instantly access
recently viewed records via Global Search.
Compare the AFLS Mobile App and Desktop Site
Here are some highlights of how the AFLS mobile app compares with the desktop site.


Customize the AFLS Mobile App

Customize the AFLS mobile app to your organization’s needs by configuring the required
settings.

<!-- page:29 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Create Object Metadata Cache Configuration

Create a configuration that can be used to generate metadata cache. The mobile app uses this
metadata cache to sync with your Salesforce org, enabling users to access the object in both online
and offline modes.
Validate Object Metadata Cache Configurations
Before you generate the metadata cache, validate the object metadata cache configurations to make
sure that they’re set up correctly. This prevents failures during the metadata generation process.
Cancel Validation of Object Metadata Cache Configurations
Cancel the validation of object metadata cache configurations while the validation in progress.
Assign Profiles to Object Metadata Cache Configurations
Assign profiles to a new object metadata cache configuration to make the configuration available to
users with that specific profiles.
Generate Metadata Cache
To apply an object metadata cache configuration to your mobile app, you must first generate the
metadata cache. The mobile app uses this metadata cache to sync with your Salesforce org, enabling
users to access Customer Engagement features in both online and offline modes.
Configure Application Settings
Configure the essential settings for the mobile app to manage a wide range of settings, including
default browser behavior, security features such as password type, and user access to various
functionalities. By using these settings, you can also control notifications, search capabilities, and the
overall user interface to customize the app to your needs.
Set Up Profile-Based App Settings
Configure parameters to customize the mobile app for specific profiles.
Configure UI Settings
Configure custom UI components for the mobile app. Create and manage records that define how
tabs and static resources are shown in the mobile app.


## See Also

Set Up Consent Management
Mobile App Configuration for App Alerts


Create Object Metadata Cache Configuration

Create a configuration that can be used to generate metadata cache. The mobile app uses this metadata
cache to sync with your Salesforce org, enabling users to access the object in both online and offline

<!-- page:30 -->



modes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create metadata cache configuration:              Life Sciences Commercial Admin permission set


The LifeSciConfigCategory and LifeSciConfigRecords metadata types must have records populated in
order to generate metadata.

1.    From the App Launcher, find and select Admin Console.
2.    Select Mobile and then select Object Metadata Cache Configuration.
3.    For Name, enter a unique name that describes the object.
4.    Select Is Active if the entity is currently active.
5.    For Type, select the type of the object.

Data                                                  A database for the mobile app.

Configuration                                         A database with queried records. The records
contain configuration data that can’t be synced
or queried from the mobile app.

6. For SObject, select an object or a configuration record.
7. For Assignments, select the profile that this configuration is assigned to.
8. For Delta Sync Date Field, enter the name of the field on the selected object that’s used for syncing the
change to the object.
9. To allow data sync only from the object to the mobile app, select Web-to-Mobile Sync.
10. For Attachment Download Method, select how the attachments are downloaded.
11. For SOQL Filter Condition, enter the condition for generating the metadata using the simple editor or
advanced editor. Make sure you enter the conditions without any additional SOQL statements. If you
don’t enter a SOQL filter condition, the metadata is generated for all the rows of the selected object.
12. To test the SOQL query, click Test SOQL.
13. Save your changes.


## Creating SOQL Filter Condition Using Simple Editor

To create a basic SOQL filter condition that’s used to generate the metadata, use the simple editor.
Creating SOQL Filter Condition Using Advanced Editor
To create SOQL filter condition with variables, use the advanced editor.

See Also

<!-- page:31 -->




## First-Generation Managed Packages: Life Science Config Category

First-Generation Managed Packages: Life Science Config Record
Developer Guide: LifeSciConfigCategory
Developer Guide: LifeSciConfigRecord
Mobile App Configuration for Ratings
Mobile App Configuration for Consent Management


Creating SOQL Filter Condition Using Simple Editor

To create a basic SOQL filter condition that’s used to generate the metadata, use the simple editor.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create filter conditions:                          Life Sciences Commercial Admin permission set


1. In the New Object Metadata Cache Configuration window, under Simple Editor, click Add Condition.
2. Complete the fields for the condition.
a. For Field, select a field.
b. For Operator, select an operator.
c. For Type, select the type of the value.
d. For Value, enter a value for the condition.
Make sure strings and IDs are encased in single quotes.
3. Add more conditions, if required.
4. Select a logical operator for the condition.
- All of the conditions are met (AND)
- Any of the conditions are met (OR)
- Customize the logic
5. Click Add SOQL Expression.
6. Save your changes.


Creating SOQL Filter Condition Using Advanced Editor

To create SOQL filter condition with variables, use the advanced editor.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:32 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create filter conditions:                         Life Sciences Commercial Admin permission set


1. Enter the SOQL query in the SOQL Filter Condition field.
Make sure strings and IDs are encased in single quotes.
2. From the Insert dropdown, select a variable to insert in the SOQL query.
3. Test the SOQL filter condition.
4. Save your changes.


Validate Object Metadata Cache Configurations

Before you generate the metadata cache, validate the object metadata cache configurations to make
sure that they’re set up correctly. This prevents failures during the metadata generation process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage validations of metadata configurations: Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select Mobile and then select Object Metadata Cache Configuration.
3.    Select the configuration records that you want to validate.
4.    Click Validate.
You’ll get a notification stating that the validation is queued.

To monitor the validation status, click the link in the notification. After the validation is complete, the
status of the object metadata cache configuration changes to Valid.


Cancel Validation of Object Metadata Cache Configurations

Cancel the validation of object metadata cache configurations while the validation in progress.

<!-- page:33 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage validations of metadata configurations: Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select Mobile and then select Object Metadata Cache Configuration.
3.    Select the configuration records that you want to cancel the validation for.
4.    Click Abort.
5. In the confirmation window, click Yes.


Assign Profiles to Object Metadata Cache Configurations

Assign profiles to a new object metadata cache configuration to make the configuration available to
users with that specific profiles.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To assign profile and permission sets to metadata    Life Sciences Commercial Admin permission set
configurations:


1.    From the App Launcher, find and select Admin Console.
2.    Select Mobile and then select Object Metadata Cache Configuration.
3.    Select the configuration records for which you want to assign a profile.
4.    Click Assign.
5.    In the Select Assignment window, select whether you want to assign a profile.
6.    Select a profile.
7.    Click Submit.

<!-- page:34 -->




Generate Metadata Cache

To apply an object metadata cache configuration to your mobile app, you must first generate the
metadata cache. The mobile app uses this metadata cache to sync with your Salesforce org, enabling
users to access Customer Engagement features in both online and offline modes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To generate metadata cache:                           Life Sciences Commercial Admin permission set


To get notifications when a metadata cache is generated, complete these tasks.

- Enable Read Access for the Metadata Generated platform event.
- Activate the Metadata Active trigger handler.
1. From the App Launcher, find and select Admin Console.
2. Select Mobile and then select Metadata Cache.
3. Click New.
4. For Profiles, select a profile for which you want to generate the metadata for. If you don’t select a
profile, the metadata is generated for all the profiles in your org.
5. For Update Due Date, select the date by when the mobile app users must update the metadata. Users
won’t be able to postpone the update after this date.
6. For Update Alert Date, select the date on which the mobile app users are notified about the new
metadata. Users can see these alerts only if notifications for new metadata are enabled.
7. Save your changes.

An entry with the status Validating is added to the metadata cache list. You’ll receive a notification
after the metadata cache is generated.

Refresh your browser to check whether the metadata cache is validated. If the validation is successful,
the status changes to Published, In Progress, and then Active.


## See Also

Mobile App Configuration for Ratings
Set Up Consent Management
Mobile App Configuration for Consent Management
Add a Tab for Consent Management on a Record Page
Add a Logo to the Consent Page
Mobile App Configuration for App Alerts

<!-- page:35 -->




Configure Application Settings

Configure the essential settings for the mobile app to manage a wide range of settings, including default
browser behavior, security features such as password type, and user access to various functionalities. By
using these settings, you can also control notifications, search capabilities, and the overall user interface
to customize the app to your needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure application settings:                   Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Mobile and then select Application Settings.
3. For Default Browser, select the default browser to show content in web view in the mobile app.
4. For Password Type, select the type of password for the mobile app.
5. For Hourly Dashboard Refresh Limit, select the number of times the mobile app dashboard can be
refreshed in an hour.
6. For App Download URL, enter the full URL to download the latest version of the mobile app from the
App Store.
7. Configure these settings as needed:
- Let users use View Online option on the home screen
- Let users view reports
- Enable Background Notifications
- Enable advanced search
- Use Advanced Search for lookups
- Use Advanced Search for account lookups
- Let users override the lookup search fields
- Enable Dynamic Actions
- Let users publish platform events
- Hide app upgrade notifications
- Show persistent help text
- Enable Survey Branching Single Page
- Enable Survey Confirmation
8. Save your changes.

<!-- page:36 -->




Set Up Profile-Based App Settings

Configure parameters to customize the mobile app for specific profiles.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure profile-based settings:                  Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Mobile and then select Profile Based App Settings.
3. For Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to
a specific profile.
- To apply the settings to all the profiles in your org, select SOrg Default.
- To apply the settings to a specific profile in your org, select Profile.
4. To show tasks in the Kanban view for the selected profile, select Use kanban view for assessment
tasks.
5. To restrict the execution batch jobs when the org is in maintenance, select Don’t allow batch job
execution when the org is in maintenance mode.
6. For Time Interval, enter the time interval in minutes for datetime fields in the mobile app. For
example, enter 10 to display 10-minute intervals in the datetime fields: 12:10, 12:20, 12:30.
7. For Mobile App, select the lightning app that you want to show by default for the selected profile.
8. To let users perform bulk edit operations, select Let users perform bulk edit.
9. Save your changes.


Configure UI Settings

Configure custom UI components for the mobile app. Create and manage records that define how tabs
and static resources are shown in the mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:37 -->




USER PERMISSIONS NEEDED

To configure custom components:                   Life Sciences Commercial Admin permission set


Create a Custom Tab

1.    From the App Launcher, find and select Admin Console.
2.    Select Mobile and then select UI Settings.
3.    Click New.
4.    For Label, enter a display name for the custom UI component.
5.    For Name, enter a unique API name for the custom UI component.
6.    For Mobile UI Type, select Tab.
7.    For Tab Name, enter a display name for the tab.
8.    For Tab Order, enter a number that determines the tab’s position on the dashboard.
9.    Select the profile that you want to assign this custom component to.
10.    Select Is Active to make the component available on the mobile app.
11.    Save your changes.


Create a Static Resource Component

1. From the App Launcher, find and select Admin Console.
2. Select Mobile and then select UI Settings.
3. Click New.
4. For Label, enter a display name for the custom UI component.
5. For Name, enter a unique API name for the custom UI component.
6. For Mobile UI Type, select Static Resource.
7. For Resource Name, select one of these options:
- To use an existing static resource, select Select Static Resource.
- To create a static resource, select New Static Resource.
8. Select the profile you want to assign this custom component to.
9. Select Is Active to make the component available on the mobile app.
10. Save your changes.


Assign Profiles to Custom UI Components

1.    From the App Launcher, find and select Admin Console.
2.    Select Mobile and then select UI Settings.
3.    Select the custom components for which you want to assign a profile.
4.    Click Assign.
5.    On the Select Assignment window, select a profile.
6.    Click Submit.

<!-- page:38 -->




Synchronization Management

Define device synchronization settings between the AFLS mobile app and your Salesforce
org to support data management and control. Help your mobile app users keep their data current so
they can make well-informed decisions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Synchronization Types

Synchronization between the AFLS mobile app and your Salesforce org can happen in a
few different ways: Full, Delta, and Upload Only.


Sync Type                           What it Does                       When it Happens


## Full                                Downloads all territory-specific

data and metadata to the user’s    • Initial Sync: This happens after
mobile device and then uploads         a user’s first login and territory
their transactions, logs, and          selection (if applicable).
statistics to Salesforce.          •   Territory Switch Sync: This
happens after a user switches
to a different territory.
-   Extended Offline Work: If a
user works offline for longer
than the configured Days
Offline Limit (without an initial
or territory switch).
-   Admin-Forced Sync: If an
admin has enabled the Is
Force Full Sync Enabled option
in a user’s profile, a full sync is
performed during the next
Delta Sync.


Delta                               Refreshes the app’s database,
downloads the latest               • During Manual Sync after a
information and sends the user’s       user taps Sync Database.
changes to the server, and         •   After a user unlocks the app

<!-- page:39 -->




Sync Type                          What it Does                        When it Happens


## downloads list views. This

process can run in the                with their passcode. If
foreground (which requires the        metadata has changed, the
user to wait before using the         user is prompted to download
app) or in the background.            the metadata (or skip).



## Upload Only                        Uploads mobile app data, such

as transactions, logs, and          • After a user saves or deletes a
statistics, to Salesforce. It’s a     record, the app initiates the
one-way process, so no                upload in the background to
metadata or other data is             sync all transactions currently
downloaded to the user’s device.      in the queue. If a Wi-Fi
connection isn’t available, the
transaction stays in the queue
until the next synchronization
attempt.



Synchronization Management Data Model

Synchronization Management uses many objects and fields to help users synchronize data your
Salesforce org and the AFLS mobile app. To learn about these objects and fields, see the
Synchronization Management data model.


Note Synchronization management objects aren’t accessible in Object Manager. However, you can
access them through data tools.



## Synchronization Management Guidelines and Best Practices

To secure data in the AFLS mobile app, manage object sharing and DBSchema records.
For optimal performance, always include a WHERE clause in DBSchema settings and monitor the
Transactions queue daily. Ensure efficient synchronization by quickly resolving errors and using
Simulation Mode to proactively find and fix potential problems before they affect users. Limit record
access to necessary users only and keep all required DBSchema settings enabled for the mobile app.
Clone and Activate the Sync Processor Scheduler Flow
To automate data synchronization from the AFLS mobile app to your Salesforce org,
clone and activate the Sync Processor Scheduler flow. This flow automates the scheduling of the Sync
Processor batch management job. The Scheduler flow runs daily at 1:00 AM UTC, processing Device
Sync Transaction records from the past 60 days.
Manage Synchronization Transactions
View completed synchronization records and manually update or retry synchronization transactions in
the Synchronization Admin Console.
Configure Mobile Sync Settings

<!-- page:40 -->



Set the mobile sync settings at the org default or user profile level to determine the record
synchronization details.
Configure Sync Processor Settings
Define comprehensive guidelines for managing records throughout their lifecycle. Descriptive record
handling rules are crucial for data integrity, regulatory compliance, efficient information management,
and risk mitigation.


Synchronization Management Guidelines and Best Practices

To secure data in the AFLS mobile app, manage object sharing and DBSchema records. For
optimal performance, always include a WHERE clause in DBSchema settings and monitor the
Transactions queue daily. Ensure efficient synchronization by quickly resolving errors and using
Simulation Mode to proactively find and fix potential problems before they affect users. Limit record
access to necessary users only and keep all required DBSchema settings enabled for the mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Objects and Security

AFLS includes several objects preconfigured to download data to the mobile app. Each
object has a DBSchema setting that is active and named with the prefix: DbSchema_. These settings are
accessible through the Admin Console under the Mobile tile and then Object Metadata Cache
Configuration in the left navigation. If you don’t need to transfer data for a certain object, deselect Is
Active on the associated DBSchema record.

To enhance data security, configure the sharing settings for objects regularly synced from the mobile
device to Salesforce.


Daily Monitoring

Review the Transactions queue daily in the Admin Console to make sure no transactions remain in the
New status for more than one day. If transactions for a user remain in the New status for an extended
period, contact the user and instruct them to do a full manual sync by selecting Sync Database from the
gear icon in the AFLS mobile app.


Error Handling

Transaction failures require thorough error analysis. Common causes include record locking, processing

<!-- page:41 -->



timeouts, heap size exceptions, and CPU time limit exceptions. These problems often arise from hitting
governor limits due to high loads or nonbulkified code. Validation rules can cause additional errors.
Database validation rules differ from UI logic and include field-level uniqueness or non-null constraints.
When a transaction encounters an error and remains pending, all subsequent transactions will be placed
in the New status.

Proactively identify potential issues with Simulation Mode. Use Simulation Mode to test transactions in a
virtual environment and assess the probability of transaction success or failure. Correct the identified
problem and start a new transaction using the Admin Console.


Clone and Activate the Sync Processor Scheduler Flow

To automate data synchronization from the AFLS mobile app to your Salesforce org, clone
and activate the Sync Processor Scheduler flow. This flow automates the scheduling of the Sync
Processor batch management job. The Scheduler flow runs daily at 1:00 AM UTC, processing Device Sync
Transaction records from the past 60 days.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To activate or deactivate a flow:                    Manage Flows


1. From Setup, in the Quick Find box, enter Flows, and then select Flows.
2.    Open the Sync Processor Scheduler flow template.
3.    In Flow Builder, select Save as New Flow.
4.    Enter a flow label and a description.
5.    Save and activate the flow.


Manage Synchronization Transactions

View completed synchronization records and manually update or retry synchronization transactions in
the Synchronization Admin Console.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:42 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage synchronization transaction:                  Life Sciences Commercial Admin


To view synchronization transactions, from the App Launcher, find and select Life Sciences Commercial,
and then select Admin Console. Select Synchronization, and then Transactions.

Use the filter options to narrow transaction results. Find specific transactions by choosing the view
(success or failed), the transaction name, record ID, period, and the user who made the transaction.

Transactions in the Admin Console have several possible statuses.


Status                                                 Description

New                                                    The transaction is in the processing queue.

Retry                                                  The transaction is queued for a subsequent
processing attempt.

Success                                                The transaction processed successfully.

Failed                                                 The transaction encountered an error and
processing failed.

Canceled                                               The transaction was canceled.


A green Success label indicates successful transactions. To update transaction details, select Edit. The
Edit dropdown menu provides options to view related items and dependencies or add comments
regarding the transaction.

A red Failed label indicates failed transactions. To update transaction details, select Edit. Select Ignore to
stop the transaction from being processed again, or Retry to attempt processing one more time. The
Simulate option records the transaction in the logs without committing any actions. The Simulate
dropdown menu provides options to view related items or dependencies, add a comment about the
transaction, or manually log the record.


Configure Mobile Sync Settings

Set the mobile sync settings at the org default or user profile level to determine the record
synchronization details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:43 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage mobile sync settings:                      Life Sciences Commercial Admin


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Synchronization, and then select Mobile Sync Settings.
3. From the Select Type dropdown, select the type of settings to configure. You can configure mobile
sync settings for the org default or specific user profiles.
4. Select processing options and enter values to meet your business needs.

Setting                           Description                        Recommended Value


## Related Record Retrieve           Enables showing related record     Selected

names for inaccessible records.
The related record is read-only,
preventing users from opening
the inaccessible object.


## Mobile Non Wifi Data Limit in     The limit in MB a user can         25

Megabytes                         download when not on wifi
before a warning message is
shown.


## Mobile Offline Days Limit         The maximum number of days         30

a user can stay offline before
they’re forced to synchronize.


## Mobile Timeout Period in          The number of minutes before       60

Minutes                           the mobile app times out and
returns the user to the PIN
screen.


## Number of Items per               The maximum number of items        10

Transaction                       to include in a transaction.

5. Save your work.
6. To push your changes to the AFLS mobile app, create a metadata cache.


## See Also

Create a Metadata Cache


Configure Sync Processor Settings

Define comprehensive guidelines for managing records throughout their lifecycle. Descriptive record

<!-- page:44 -->



handling rules are crucial for data integrity, regulatory compliance, efficient information management,
and risk mitigation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage sync processor settings:                    Life Sciences Commercial Admin


1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Synchronization, and then select Sync Processor Settings.
3. Select processing options and enter a number of retry attempts to meet your business needs.

Setting                            Description                         Recommended Value


## Optimize performance by            Automatically group transaction Selected

grouping items                     items by order within a single
transaction. When activated,
transaction items sharing the
same Operation and Object
Type values receive an identical
Order field value. Items with the
same order value process
together as a single batch,
which reduces the number of
SOQL queries.


## Cancel sync for deleted records    Automatically cancel                Selected

transactions that try to delete
previously deleted records.


## Cancel sync when record isn’t      Automatically cancel                Selected

found                              transactions attempting to
update nonexistent records.


## Retry sync for locked rows         Automatically retry sync            Selected

transaction if the Unable to
Lock Row error occurs. Retries
continue until the transaction is
successful or a different error
occurs.

<!-- page:45 -->




Setting                            Description                         Recommended Value

Number of Retry Attempts           The number of retries when a        3
transaction fails.

4. Save your work.
5. To push your changes to the AFLS mobile app, create a metadata cache.


## See Also

Create a Metadata Cache


Deep Linking for the AFLS Mobile App

Your sales reps rely on their mobile devices to perform complex tasks and navigate between multiple
tabs, records, or actions. With deep linking, you can use supported URL schemes to send users directly to
the right spot in the AFLS mobile app from a third-party or web app. For example, deep
links can open specific records, create a record with prepopulated data, or perform a specific action
when the app opens.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


With Salesforce-supported URL schemes, your users can open the AFLS mobile app and
perform one of several actions.

- View a specific record.
- Create or update a record with prepopulated data.
- Open a specific tab in the AFLS mobile app.
- Start an action on a specific record page.
- Create an email with a predefined email template and recipients.
Life Sciences deep links work only for users who have the right access to that action, record, or area of
the app. If an unauthenticated user taps a deep link, they’re taken to the login page. When the app is
locked, users are prompted to enter their PIN. After users log in or enter their PIN, they must tap the link
again to view the linked page.


## Deep Linking Format for Life Sciences

Use the predefined URL scheme for the AFLS mobile app on iOS.
Deep Linking for Visits
The AFLS mobile app supports more URL schemes for visits. Deep links for visits support
actions such as opening the Visit Engagement page to create or edit a visit.

<!-- page:46 -->




## Considerations for Life Sciences Deep Links

When you create deep links to open the AFLS mobile app from external and third-party
apps, keep these considerations in mind.


Deep Linking Format for Life Sciences

Use the predefined URL scheme for the AFLS mobile app on iOS.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


URL Scheme Name

The AFLS mobile app supports this value for scheme name in deep link URLs.


afls://deeplink/lightning



Common Parameters

Here are some of the common parameters that the Life Sciences deep link URL scheme format supports.

-     sObject —indicates the API name of a Salesforce object. This value is case-sensitive. For example, use
Account, not account.
-    id —the unique single instance of a Salesforce object. ID lengths of 15 and 18 characters are
supported.
-     actionName —an action that’s available on the specified object’s record detail page.
-     field_api_name —indicates the API name of a Salesforce field.

To use deep links, users must have the correct permissions for that action, record, or area of the app.


View a Record by Using a Salesforce ID

This URL scheme goes to the object tab and then opens a record detail page by using a Salesforce record
ID.


afls://deeplink/lightning/r/{sObject}/{id}/view


This example uses a Salesforce ID to go to a healthcare provider record detail page.

<!-- page:47 -->




afls://deeplink/lightning/r/healthcareprovider/001XXXXXXXXXXXXIAM/view



View a Record by Using an External ID

This URL scheme goes to the object tab and then opens a record detail page by using an external ID.


afls://deeplink/lightning/r/{sObject}/{external_id_field_api_name}:::value/view


This example uses an external ID to go to a healthcare provider record detail page.


afls://deeplink/lightning/r/healthcareprovider/sourcesystemidentifier:::1234/vi
ew



Create a Record

This URL scheme creates a record without populating fields.


afls://deeplink/lightning/o/{sObject}/new


This example creates an inquiry record without populating any fields.


afls://deeplink/lightning/o/Inquiry/new



Create a Record and Populate Fields

This URL scheme creates a record and populates fields.



## afls://deeplink/lightning/o/{sObject}/new?{field_api_name}=value&{field_api_nam

e}=value&{field_api_name}=value


This URL scheme creates a record with a specific record type and populates fields.



## afls://deeplink/lightning/o/{sObject}/new?RecordTypeId={record_type_id}&{fiel

d_api_name}=value&{field_api_name}=value


These field types are supported as URL parameters. To pass more than one parameter, use an
ampersand (&) between them.

- Checkbox
- Date

<!-- page:48 -->



- DateTime
- Email
- Lookup
- Number
- Picklist
- Picklist (Multiselect)
- Reference
- Text
- Text Area
- Text Area (Rich)
For field values with spaces or special characters, use these encoded values.


Character                                            Encoded Value

Space                                                %20

&                                                    %26

=                                                    %3D

?                                                    %3F


This example creates an inquiry record and populates some fields.


afls://deeplink/lightning/o/Inquiry/new?Type=Medical%20Inquiry&IsSignatureCopyR
equested=true



Create or Edit a Record and Its Related Record

This URL scheme upserts a record by creating or editing a record and its related record together. You can
specify records by using either Salesforce IDs or external IDs. Format the record data in JSON format, and
then convert it to Base64 format.


afls://deeplink/lightning/o/{sObject}/upsert?referenceId={id}&data=JSONConverte
dToBase64Format



Go to an Object List

Use this URL scheme to go to an object list.


afls://deeplink/lightning/o/{sObject}/list


This example goes to the list of accounts.

<!-- page:49 -->




afls://deeplink/lightning/o/Account/list



Go to a Lightning Page

Use this URL scheme to go to a Lightning page.


afls://deeplink/lightning/page/{page_name}


This example goes to the home page.


afls://deeplink/lightning/page/Home



Go to a Lightning Component

Use this URL scheme to go to a Lightning component within a tab.


afls://deeplink/lightning/n/{component_name}


This example goes to the AccountFilter Lightning component.


afls://deeplink/lightning/n/lsc4ce__AccountFilter



Initiate an Action for an Account

This URL scheme initiates an action for a specific account on the record detail page.


afls://deeplink/lightning/r/{sObject}/{id}/action/{actionName}


This example opens a survey for the specified account.


afls://deeplink/lightning/r/account/001XXXXXXXXXXXXIAC/action/lsc4ce__Survey



Start an Email

This URL scheme starts an email by specifying one or more email templates and account IDs.



## afls://deeplink/lightning/cmp/lsc4ce:WebEmail?lifesciemailtemplate-id={id}&acco

unt-id={id}&account-id={id}

<!-- page:50 -->



This example opens the Send Email window with the specified template selected and the selected
account as the recipient.



## afls://deeplink/lightning/cmp/lsc4ce:WebEmail?lifesciemailtemplate-id=1LLXXXXXX

XXXXXX4A2&account-id=001XXXXXXXXXXXXYAI



Deep Linking for Visits

The AFLS mobile app supports more URL schemes for visits. Deep links for visits support
actions such as opening the Visit Engagement page to create or edit a visit.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


View a Visit Record

This URL scheme opens a visit record detail page without opening the Visit tab first.


afls://deeplink/lightning/r/Visit/{id}/view?modal=1


This example goes to the specified visit record detail page without opening the Visit tab first.


afls://deeplink/lightning/r/Visit/001XXXXXXXXXXXXKAG/view?modal=1



Create a Visit

This URL scheme creates a visit with no parameters.


afls://deeplink/lightning/o/Visit/new



Create a Visit for an Account

This URL scheme creates a visit for an account.


afls://deeplink/lightning/o/Visit/new?accountid={id}

<!-- page:51 -->



This example creates a visit for the specified account.


afls://deeplink/lightning/o/Visit/new?accountid=001XXXXXXXXXXXXYAI



Create a Visit for a Product

This URL scheme creates a visit with one or more product IDs. This scheme works only for product detail
item records. To validate product restrictions, pass both the account and the product detail items as
parameters in the URL.


afls://deeplink/lightning/o/Visit/new?product-id={id}


This example creates a visit for the specified product detail item.


afls://deeplink/lightning/o/Visit/new?product-id=1KeXXXXXXXXXXXX0AM



Edit a Visit

This URL scheme opens an existing visit in edit mode. Submitted visits open on the record detail page.
Planned visits open on the Visit Engagement page.


afls://deeplink/lightning/r/Visit/{id}/edit


This example opens the specified visit in edit mode.


afls://deeplink/lightning/r/Visit/0Z5XXXXXXXXXXXX0AG/edit



Create or Edit a Record and Its Related Record

This URL scheme upserts a visit by creating or editing a visit and its related record together. Specify
records by using either Salesforce IDs or external IDs. Format the record data in JSON format, and then
convert it to Base64 format.


afls://deeplink/lightning/o/{sObject}/upsert?referenceId={id}&data=JSONConverte
dToBase64Format


When you configure upsert deep links for visits, keep these considerations in mind.

- Upsert deep links can add products and attendees to the visit or edit visit fields.
- The visit record must exist and be editable.

<!-- page:52 -->



- To reference fields and objects, use the API names.
- If the URL doesn’t contain a record ID, a new record is created.
- When you use an upsert deep link for visits, validations don't run for required fields, restricted
products, or on the Visit Engagement page. On the Visit Engagement page, validations run when you
submit the visit.


Considerations for Life Sciences Deep Links

When you create deep links to open the AFLS mobile app from external and third-party
apps, keep these considerations in mind.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Best Practices for Deep Links

- Always pass the record type as a parameter for objects that have record types.
- Make sure that all fields that you include as parameters in a deep link are available on the object page
layout.


Limitations for Deep Links

- Deep links to create records support a single object and its related fields.
- If your Salesforce org uses multi-object components to show fields from multiple objects on a single
record page, deep links work only for the parent objects–account, inquiry, and visit.
-    Deep links to initiate an action are available only for the account object.
-    Deep links to open a window are available only for the visit object and for emails.


AFLS (AFLS) Apps

AFLS Apps are custom Lightning Web Components (LWC) that you can create and embed on the Life
Sciences Cloud mobile app. These apps enable you to design and implement complex features and
integrations on lightning pages and the AFLS mobile app.


**REQUIRED EDITIONS**


Important AFLS Apps aren’t available offline.

<!-- page:53 -->




Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Implement AFLS apps for specific use cases by embedding them on either record pages or the Home
page. The embedding method determines the component's functionality and placement.

- Embed on Record Pages: lets users take immediate action on a specific record.
- LWC Quick Actions: Launch the LWC component from the Quick Action menu on the record page.
- Inline Components: Access the component directly on the record page alongside native
components.
-    Embed on the Home Page: Give users global access to the custom feature.
- Inline Components: Add the custom component to a section of the Home Page.
Note Make sure that your users have access to all the fields or objects used in the custom LWC
components.



## Create and Add an LWC as an Inline Component on a Record Page

Make the custom functionality accessible to users directly from a record page alongside native
components by creating and adding it as an inline component.
Create and Add an LWC Quick Action to a Record Page
Make your custom functionality available from the Quick Action menu of a record page by creating
and adding the custom quick action to the record page.
Create and Add an LWC to the Home Page
Give users global access to a custom feature from the Home page by creating and adding the custom
LWC to the Home page.
Sync Changes to the Mobile App
Sync your latest changes to the AFLS mobile app by generating metadata cache.


Create and Add an LWC as an Inline Component on a Record Page

Make the custom functionality accessible to users directly from a record page alongside native
components by creating and adding it as an inline component.


**REQUIRED EDITIONS**


Note We recommend that you add only one AFLS app as an inline component on a record page.
Adding multiple AFLS apps to the same record page can cause the page renderer to work incorrectly.

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:54 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


1. Create a mobile-ready custom LWC component. Add lscMobileInline_ as the prefix for the API
name of the component.
2. Ensure that the lightning__RecordAction and lightning__RecordPage targets are defined in the
configuration file of the custom LWC. Additionally, the mobileHeight property of type Integer must be
added to RecordPage targetConfig.
3. Add the LWC to the record page.
a. From the Setup menu on a record page, select Edit Page.
b. Drag the LWC component from the Components panel to the desired section of the page.
c. For the mobileHeight field, enter the desired pixel size. This field determines the height of the LWC
component in the mobile app.
d. Save and activate the page.
4. Pass the recordId and SobjectName of the record as context to the LWC using a quick action.
a. Create a quick action of type Lightning Web Component using the LWC component that was added
to the record page in step 3.
This quick action is used to pass the record's context to the custom LWC. To prevent the component
from appearing as both a button in the quick action menu and an Inline element, the AFLS App
hides quick actions with the lscMobileInline_ prefix.
b.    From Setup, in the Quick Find box, find and select Object Manager.
c.    Search for and select the object.
d.    Select Page Layouts, and then select the page layout you want to edit.
e.    From the palette, select Mobile & Lightning Actions.
f.   Drag the desired quick action to the Salesforce Mobile and Lightning Experience Actions section.
g.    Save the page layout.


Create and Add an LWC Quick Action to a Record Page

Make your custom functionality available from the Quick Action menu of a record page by creating and
adding the custom quick action to the record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


1. Create a mobile-ready custom LWC component.
2. Ensure the lightning__RecordAction target is defined in the configuration file of the custom LWC. Look
for the file ending with .js-meta.xml .
3. Create a quick action of type Lightning Web Component using the LWC component.

<!-- page:55 -->



a. From Setup, in the Quick Find box, find and select Object Manager.
b. Search for and select the target object.
c. Select Buttons, Links, and Actions, and then select New Action.
d. For Action Type, select Lightning Web Component.
e. Select the mobile-ready custom LWC component.
f. Give a label for the quick action.
4. Add the quick action to a record page.
a. From Setup, in the Quick Find box, find and select Object Manager.
b. Search for and select the object you want to edit.
c. Select Page Layouts, and then select the page layout you want to edit.
d. From the palette, select Mobile & Lightning Actions.
e. Drag the desired quick action to the Salesforce Mobile and Lightning Experience Actions section.
f. Save the page layout.


Create and Add an LWC to the Home Page

Give users global access to a custom feature from the Home page by creating and adding the custom
LWC to the Home page.


**REQUIRED EDITIONS**


Note We recommend that you add only one AFLS app as an inline component on a home page.
Adding multiple AFLS apps to the same home page can cause the page renderer to work incorrectly.

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


1. Create a mobile-ready custom LWC component. Add lscMobileInline_ as the prefix for the API name
of the component.
2. Ensure that the Lightning__HomePage target is defined in the configuration file of the custom LWC.
Additionally, the mobileHeight property of type Integer must be added to RecordPage targetConfig.
3. Edit the home page from Lightning App Builder.
4. Drag the LWC component from the Components panel to the desired section of the home page.
5. For the mobileHeight field, enter the desired pixel size. This field determines the height of the LWC
component in the mobile app.
6. Save and activate the page.


Sync Changes to the Mobile App

Sync your latest changes to the AFLS mobile app by generating metadata cache.

<!-- page:56 -->




**REQUIRED EDITIONS**

For instructions on how to generate the metadata cache, see Generate Metadata Cache.


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



Global Search in the AFLS Mobile App

Quickly find information in the AFLS mobile app by using the Global Search feature to
search across a predefined set of objects and fields within the iPad database. You can instantly access
recently viewed records via Global Search.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


There’s no configuration required for Global Search. It’s available within the AFLS mobile
app via the Search icon in the top navigation menu.

Global Search shows results based on the fields defined in the Search Layouts for each object. Clicking a
record in the search results opens the record page, which helps you transition swiftly between different
types of records.


Supported Objects

These objects are eligible for global search.

- Account + Healthcare Provider
- Inquiry
- Presentation
- Visit + Provider Visit

Supported Field Types

These field types are eligible for global search:

- Email

<!-- page:57 -->



- Formula (with return type Text)
- Picklist (with i18n support for labels)
- Text.

Compare the AFLS Mobile App and Desktop Site

Here are some highlights of how the AFLS mobile app compares with the desktop site.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Account Management

Feature                                Where                 AFLS         Desktop Site
Mobile App

Account Address field map              Contact Point            The map isn’t          Available. The field
Address records        available. The field    includes a clickable
displays as plain      address hyperlink or
text.              the Google Maps
preview
functionality.

Affiliations                           Affiliated Account      Both the Account        Only the Account
Summary modal         tab and the Account       tab is available on
Plans tab is available         the web.
in the mobile.


Engagement Planning

Feature                                Where                 AFLS         Desktop Site
Mobile App

Account Plan                           Account Plan             Not Available              Available
Stakeholder related
list

Account Plan                           Account Plan             Not Available              Available
Stakeholder related
list

<!-- page:58 -->




Feature                              Where                   AFLS       Desktop Site
Mobile App

Account Plan                         Rich area text fields   Not Available. Rich         Available
area text fields are
displayed in plain
text format with
HTML tags.

Assign or Unassign Participant       Account Plan                 Available           Not Available. If
button                               Stakeholder related                               configured, the
list dropdown                                   Assign or Unassign
Participant button is
available on the
highlights panel of
the Account Plan
Stakeholder record
page.

Assign or Unassign Stakeholder       Account Plan                 Available            Not Available. If
button                               Participant related                               configured, the
list columns                                   Assign or Unassign
dropdown                                       Stakeholder button
is available on the
highlights panel of
the Account Plan
Participant record
page.

Activity Plan Review tab             Home page                  Not Available       Available. Admins
must configure the
tab.


Intelligent Content

Feature                              Where                   AFLS       Desktop Site
Mobile App

Search, tag, and filter presentations Content Library             Available              Available

Search by using conceptual terms     Content Library              Available              Available
and phrases while online with Data
360

Mark presentations as favorites      Content Library              Available            Not Available

Create custom presentations          Content Library              Available            Not Available

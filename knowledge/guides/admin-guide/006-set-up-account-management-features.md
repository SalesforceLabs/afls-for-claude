<!-- guide:admin-guide section:set-up-account-management-features pages:59-174 -->
# Set Up Account Management Features




Feature                                Where                  AFLS        Desktop Site
Mobile App

Get recommended presentations          Content Library              Available            Not Available

Send presentations as links in         Content Library              Available               Available
emails

Send presentations as email            Content Library,             Available            Not Available
attachments                            Presentation Player

Use drawing tools                      Presentation Player          Available            Not Available

Capture healthcare professional        Presentation Player          Available            Not Available
(HCP) feedback

View presentations in preview and      Presentation Player          Available               Available
training mode

View interactive presentations         Presentation Player          Available               Available

View presentations with simple         Presentation Player          Available               Available
dynamic content, such as variables

View presentations with advanced       Presentation Player          Available            Not Available
dynamic presentation content,
such as embedded surveys,
querying records, and updating
records

Track presentation metrics             Presentation Player          Available            Not Available




Set Up Account Management Features

Manage your relationships with healthcare organizations (HCOs) and healthcare professionals (HCPs).
Gain a comprehensive view of HCPs and HCOs, including their contact and social network details,
specialties, affiliations, business licenses, ratings, as well as territory and product, and team-specific
details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Account Address

<!-- page:60 -->



Account Address helps manage addresses for diverse accounts like healthcare professionals (HCPs)
and organizations (HCOs). Accurate address tracking and grouping are important for effective
engagement, compliance, logistics, and data integrity. Accounts often have multiple addresses for
different purposes (for example billing, shipping). Sales reps use this to tailor outreach, ensuring
targeted deliveries and optimized efficiency.
Account Merge
Merge duplicate accounts to create a single, accurate view of customer data. Doing this brings
consistency, and improves business decisions and customer satisfaction.
Account Search
Customize how users find and manage accounts by configuring various settings in the Admin Console.
You can define search criteria and results and adjust the appearance and behavior of search options.
You can manage this setup at both the org and profile levels, and further refine it by record type.
Account Summarization
Prepare for smoother and more efficient customer interactions with the highly customizable Account
Summarization solution. Help users save the time that’s lost while switching between tabs to find the
latest and most relevant information about an account before any customer interaction. Provide
contextual information about provider accounts in a territory, including key account details and
updates made to the account and the account’s related records since the user’s last interaction with
the account. Help users access account summaries on the web and on mobile devices, even when the
user is offline.
Agentforce for Account Summarization
Optimize visit-planning measures and improve provider engagement by leveraging the power of AI-
generated summarization. Get real-time, data-driven insights and contextual information about an
account's latest updates, historical interactions, and related records, tailored for the current user's
assigned territory. Use natural language utterances to interact with persona-based agents in the
intuitive and conversational Agent window to easily get account summaries on the go, on the web and
on the iPad.
Create an Account Team
Let team members view details of all the collaborators of an account across different territories.
Choose which fields to display to the account team.
Activity Timeline
The Activity Timeline in AFLS gives you a 360-degree view of all activities for an account.
It helps sales representatives, Key Account Managers (KAM), and Medical Science Liaisons (MSLs)
visualize past and upcoming interactions with healthcare providers (HCPs) and healthcare
organizations (HCOs). Activity Timeline helps you work more effectively by consolidating relevant
account activities in one place, enabling better collaboration, informed decision-making, and smarter
preengagement planning.
Affiliations
Use the Affiliations feature to understand and map the connections between Healthcare Professionals
(HCPs) and Healthcare Organizations (HCOs). Mapping these relationships in the healthcare
ecosystem provides insights that help you target your engagement and improve outcomes.
Bulk Update for Account-Related Records from Related Lists
Give your users an efficient way to update multiple account-related records in a single action from a

<!-- page:61 -->



related list. To allow bulk updates from related lists, enable bulk edits for the user profile, create a
custom button, and add the custom button to the account page layout.
Data Change Request
Use Data Change Request to manage how data changes are submitted, validated, and implemented
across the AFLS for Customer Engagement app. Reduce manual corrections, prevent
unapproved changes from being applied, and make sure that data consistency across both web and
mobile apps.
Lists and Filters
Use Lists and Filters to organize and prioritize accounts and associated data in the AFLS
for Customer Engagement app. Sales reps manage and refine large volumes of accounts into
meaningful segments, helping them to focus on accounts that align with specific criteria based on
business priorities, territory requirements, or engagement strategies.
Next Best Action
Set up Next Best Action to equip your sales reps with AI-driven weekly action plans. Help your sales
reps achieve better time management and strategic engagement by recommending actions, such as
visits, meetings, and emails for accounts, in the optimal sequence.
Next Best Customer
With the Next Best Customer scores, your field reps can identify the highest priority accounts for their
next engagement. Next Best Customer leverages user-configured data, such as engagement history
and territory alignment, to rank the accounts that are most likely to respond, so your reps can
maximize the impact of each interaction.
Provider Cards for Life Sciences
Provider Cards in AFLS consolidates an account’s information that’s scattered across
various objects and fields, such as the provider’s locations and specialties and the user’s scheduled
visits, and displays it all in a one place on the mobile. You can choose which records to show in the
card. To create provider cards, you can use the predefined template or create them from scratch.
Ratings
Ratings help prioritize and organize customer accounts into meaningful segments. Sales reps can use
ratings to focus on the right customers, align on relevant accounts, and adjust strategies for maximum
efficiency.
Territory Management Batch Jobs
Territory management relies on dedicated batch jobs to handle large-scale data processing. These jobs
automate the critical task of aligning accounts to specific territories, whether through explicit
mappings loaded from external systems or based on geographical representations like zip/postal
codes or bricks.


Account Address

Account Address helps manage addresses for diverse accounts like healthcare professionals (HCPs) and
organizations (HCOs). Accurate address tracking and grouping are important for effective engagement,
compliance, logistics, and data integrity. Accounts often have multiple addresses for different purposes
(for example billing, shipping). Sales reps use this to tailor outreach, ensuring targeted deliveries and
optimized efficiency.

<!-- page:62 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Primary Address

The Primary Address is the single, main contact point for an account, which is used for all official
correspondence and regulatory filings. An HCP's main practice location or an HCO's headquarters is their
primary address.

An account can have only one primary address at a time to provide a clear and consistent point of
contact. The Primary address is stored on the Contact Point Address object, where users can select the Is
Primary checkbox to designate a record as primary. Understanding the Primary Address helps you know
the established main point of contact for an account.


Preferred Address

A preferred address is a specific location that an account designates for particular interactions or
communications within a territory. For instance, a healthcare professional (HCP) might prefer product
samples sent to their home. Or, a healthcare organization (HCO) might specify a delivery address for
certain supplies. With this distinction, life sciences companies can tailor their outreach. It ensures
targeted information, product samples, or deliveries reach the most desired location. It also optimizes
engagement and operational efficiency. The preferred address is a field on the Provider Account Territory
Information object. It stores territory-based account addresses. Only the user within the territory can
access the data. This helps keep the data personal to the user in that territory and the healthcare
professional (HCP). Sales reps can access an account’s preferred address in the Account Territory Field
component on an account dashboard.


## Custom Formula Fields for Account Address

Configure how addresses are shown across the Life Sciences Commercial app by creating custom
formula fields. Use the custom fields for both Contact Point Addresses and Sample Management
Addresses. For example, Sample Management Addresses appear when you create a sample order or
sample transfer. You can apply this custom field usage across the entire organization or for individual
profiles.
Field-Level Security Configuration for Account Address
For your users to create and manage account addresses, grant them access to the Parent field on the
Contact Point Address object for all relevant profiles.
Configure Addresses for an Account
Configure how account addresses appear in the accounts list view by using Admin Console. This
configuration defines the display format for Contact Point Addresses and Sample Management

<!-- page:63 -->



Addresses, enhancing their visibility for users in critical areas such as the Ship To field on a Sample
Order. Optimized address views aid sales representatives in quickly identifying important account
locations for better engagement and streamlined workflows.
Set Up Best Time for Account Address
Customize the Best Time feature to help sales reps identify the optimal times for contacting healthcare
providers (HCPs) at their addresses.
Configure Provider Territory Fields Information on Account Pages
Help sales reps access and manage their assigned provider accounts in the context of the territories
that the providers operate in. Customize the provider's account page to show territory-specific
information in the account’s dashboard.
Configure Search Before Creating for Contact Point Addresses
Configure the account page layout to enable users to check for duplicate contact point addresses
before they create a record. Users can search for duplicate addresses for business and person
accounts.
Batch Jobs for Account Address
Account Address batch jobs are designed to process large volumes of records and help you overcome
the governor limits faced by trigger handlers.


Custom Formula Fields for Account Address

Configure how addresses are shown across the Life Sciences Commercial app by creating custom
formula fields. Use the custom fields for both Contact Point Addresses and Sample Management
Addresses. For example, Sample Management Addresses appear when you create a sample order or
sample transfer. You can apply this custom field usage across the entire organization or for individual
profiles.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


For the account’s list view, you can configure how the address is listed for each account.


Object                              task                                 related admin console setting

Contact Point Address               Create a custom formula field        Contact Point Address Formula
that returns a text data type to     Field
format the account address to
be displayed in the Accounts List
view.

Address                             Create a custom formula field        Samples Management Address

<!-- page:64 -->




Object                              task                                 related admin console setting


## that returns a text data type to     Formula Field

format the sample management
address to be displayed in the
Accounts List view.


## See Also

Salesforce Help: Build a Formula Field


Field-Level Security Configuration for Account Address

For your users to create and manage account addresses, grant them access to the Parent field on the
Contact Point Address object for all relevant profiles.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


On the Contact Point Address object, set the access level of the Parent field to Visible. Make this change
for all relevant user profiles. See Set Field-Level Security for a Field on All Profiles.


Configure Addresses for an Account

Configure how account addresses appear in the accounts list view by using Admin Console. This
configuration defines the display format for Contact Point Addresses and Sample Management
Addresses, enhancing their visibility for users in critical areas such as the Ship To field on a Sample Order.
Optimized address views aid sales representatives in quickly identifying important account locations for
better engagement and streamlined workflows.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access account address settings                      Life Sciences Commercial Admin permission set

<!-- page:65 -->



Before you begin, create the required custom formula fields. See Custom Formula Fields for Account
Address.

1. From App Launcher, find and select Admin Console.
2. Select Address, and then select Account Address.
3. Under the Account Address section, for the Contact Point Address Formula Field, select the custom
formula field you created for Contact Point Address.
4. Under Sample Management Address, for the Address Formula Field, select the formula field you
created on the Address object.
5. Save your changes.


Set Up Best Time for Account Address

Customize the Best Time feature to help sales reps identify the optimal times for contacting healthcare
providers (HCPs) at their addresses.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up best time                                   Life Sciences Commercial Admin permission set


Configure Best Time Parameters

Set up Best Time parameters and manage how sales reps can view and edit their personal best times, the
provider's best times, unavailable times, appointments, and set appointment duration.

1. From the App Launcher, find and select Admin Console.
2. Select Address Administration, and then select Best Time Setup.
3. For Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to
a specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Under Availability Settings, configure these settings as needed.
- Let users edit the unavailable time.
- Let users edit the healthcare provider’s best time.
- Let users edit appointments.
- Let users edit their best time.
- Select an appointment duration.

<!-- page:66 -->



5. Under General Settings, select whether you want to allow users to filter accounts by best time or not.
6. Save your changes.

Note If you apply availability settings at a profile level, repeat steps 4 and 5 for all the relevant
profiles.


Enable Planner Settings

Configure Planner settings for the Best Times tab's calendar view.

1.    From the App Launcher, find and select Admin Console.
2.    Select the Planner Administration tile.
3.    For First Day of Work Week, select a day.
4.    For Work Day Start Time, select a start time for the workday.
5.    For Hourly Slots Viewable on Calendar, select the number of slots you want to display on the calendar.
6. For Time Format, enter a time format for the calendar.
7. Save your changes.


Configure Provider Territory Fields Information on Account Pages

Help sales reps access and manage their assigned provider accounts in the context of the territories that
the providers operate in. Customize the provider's account page to show territory-specific information in
the account’s dashboard.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To edit an account record page:                        Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Accounts.
2.    Select the assigned account's record page.
3.    Go to Setup, and then click Edit Page.
4.    Select the account’s Dashboard tab.

Note If the tab isn't available, create a tab by selecting Add Tab on the right pane. You can select
an existing tab label from the provided options or create a custom label.

5. From the left panel, select Components. Drag the Account Territory Fields and Territory Switcher
components on to the Account Dashboard.
6. Save your changes.

<!-- page:67 -->




Configure Search Before Creating for Contact Point Addresses

Configure the account page layout to enable users to check for duplicate contact point addresses before
they create a record. Users can search for duplicate addresses for business and person accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To edit a page layout:                               Life Sciences Commercial Admin permission set


1. From Setup, go to Object Manager.
2. To add the New button for a person account record page, find and select Person Account.
3. Click Page Layouts, and then select the page layout that's currently active for the profile.
4. Go to the Contact Point Addresses related list, and click the   icon.
5. To enable search before users create contact point addresses, in the Buttons section, configure the
button.
a. Deselect the New standard button.
b. From Available Buttons, move the New custom button to Selected Buttons.
6. Save your changes. To see the button, refresh the account page.
7. To configure the Newbutton for business accounts, from Object Manager, find and select Account,
and then follow the same procedure.


Batch Jobs for Account Address

Account Address batch jobs are designed to process large volumes of records and help you overcome the
governor limits faced by trigger handlers.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Account Address Primary Batch

This batch job marks a single primary address for an account and is an alternative to the Account Address

<!-- page:68 -->



Primary Handler Trigger. If there are multiple addresses present, then the last modified address is
marked as primary.


Provider Account Territory Information Job

This batch job creates provider account territory information records. It also calculates year-to-date visits,
next visit, and last visit values for those records.

After the batch job creates provider account territory records, it automatically populates the preferred
address field based on associated contact point address records.

- If an associated contact point address record is marked as primary, the job uses that address.
- If multiple contact point address records are marked as primary, the job uses the last modified record
marked as primary.
-    If no contact point address record is marked as primary, the job uses the last modified non-primary
record.
-    If no associated contact point address records exist, the preferred address field remains blank.


Account Merge

Merge duplicate accounts to create a single, accurate view of customer data. Doing this brings
consistency, and improves business decisions and customer satisfaction.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


When you merge accounts, the account records are consolidated into one unified record. The account
that remains is the Consolidated Account (also called the winner account), and the account that's
removed is the Merged Account (also called the loser account). All associated child records, transactions,
and other account references from the Merged Account are realigned to the Consolidated Account. With
a quick action, you can merge two accounts from the account record page. To merge more than two
accounts at once, use Connect APIs or batch jobs.


## Configure Manual Account Merge

Let your users manually merge two accounts by adding the Account Merge quick action to account
record pages. First, create the Account Merge action, and then add it to the Account page layout.
Merge Multiple Accounts by Using Connect APIs
The Account Merge feature provides Connect APIs to merge customer accounts in real time. You can
integrate these APIs with any Salesforce capability or an external application to automate your merge
processes.

<!-- page:69 -->




## Merge Multiple Accounts by Using a Batch Job

Use the Merge Account batch job to efficiently merge multiple accounts at once. This job retrieves all
merge request records in Requested status and merges the corresponding accounts.
Merge Two Accounts Manually
Combine two duplicate account records from the account record page. Select a consolidated (winner)
account, choose which field values to keep from each record, and merge them into a single, unified
record.


Configure Manual Account Merge

Let your users manually merge two accounts by adding the Account Merge quick action to account
record pages. First, create the Account Merge action, and then add it to the Account page layout.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create the quick action and edit page layouts     Life Sciences Commercial Admin permission set


Create an Action

Set up the Account Merge quick action on the Account object by using a Lightning web component.

1.    From Setup, go to Object Manager, find and select Accounts.
2.    Click Button, Links, and Actions, and then click New Action.
3.    Select the action type as Lightning Component.
4.    Selectlsc4ce:CustomerMerge as the Lightning web component.
5.    Enter Account Merge as the label and, if needed, add a description.
6.    Save your changes.


Add Account Merge Action to Account Page Layout

Give your users the option to merge accounts by adding the Account Merge action to the highlights
panel on the Account layout and the Person Account page layout.

1.    From Setup, go to Object Manager, find and select Account.
2.    Select Page Layout, and then select Account Layout.
3.    In the palette at the top, select Mobile & Lightning Actions.
4.    If prompted, click the link to override the predefined actions.

<!-- page:70 -->



5. From the Mobile & Lightning Actions category in the palette, drag the Account Merge action to the
Salesforce Mobile and Lightning Experience Actions section.
6. Save your changes.
7. Repeat these steps to add the action to the Person Account Page layout.


Merge Multiple Accounts by Using Connect APIs

The Account Merge feature provides Connect APIs to merge customer accounts in real time. You can
integrate these APIs with any Salesforce capability or an external application to automate your merge
processes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Choose the API that best fits your integration's error-handling and data integrity requirements based on
the details in the table.


Connect API                Transaction Type           Error Handling              Best For

Merge Customer             Atomic                     The entire transaction is   Scenarios where every
Accounts                                              rolled back if a single     merge in a batch must
merge fails. All or         succeed together to
nothing.                    ensure data consistency.

Merge Customer             Non-Atomic                 Partial success is          Processing large
Accounts With Status                                  allowed. Successful         batches where
merges are committed        individual failures don't
even if others in the       affect the entire
batch fail.                 operation.


Merge Customer Accounts API

This API performs an atomic transaction. When you submit multiple account merges in a single request,
the entire operation succeeds or fails as a single unit. If even one merge request is unsuccessful, the
entire transaction is rolled back, and no accounts are merged. This ensures complete data integrity.

To use this API, provide values for the winningId and losingId fields, along with other required fields of
the Merge Request object.

<!-- page:71 -->




Merge Customer Accounts with Status API

This API performs a non-atomic transaction to allow partial success. It processes each winning and losing
account pair in a request independently. Successful merges are committed to the database, while any
that fail don't stop the others from completing.

The API response returns the processing status for each individual merge attempt, allowing you to
identify which specific merges succeeded or failed.

To identify accounts, you must provide values for one of these valid ID combinations for each merge
request:

- winningId and losingId
- winningId and losingExternalId
- winningExternalId and losingId
- winningExternalId and losingExternalId

Merge Multiple Accounts by Using a Batch Job

Use the Merge Account batch job to efficiently merge multiple accounts at once. This job retrieves all
merge request records in Requested status and merges the corresponding accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create merge requests and run the Merge           Life Sciences Commercial Admin permission set
Account batch job


Create a Merge Request

Each merge request record represents a mapping of consolidated and merged accounts. You can create
multiple mappings by creating merge request records. These records are further used in batch job
processing.

1.    From App Launcher, find and select Merge Requests.
2.    Click New.
3.    Select Account as object type.
4.    For status, select Requested.
5.    Enter a value for Winning Record Identifier or Winning External Record Identifier.

<!-- page:72 -->



6. Enter a value for Losing Record Identifier or Losing External Record Identifier.
7. To include field values from a merged account when the corresponding fields in the consolidated
account are blank, select Override Blank Values.
8. Save your changes.


Run the Merge Account Batch Job

Run the Merge Accounts batch job to merge multiple accounts into one so that your users can access the
correct accounts. You can run the job manually on an ad hoc basis, or you can schedule the job to run
later or at a regular interval. For example, schedule the merge account job to run daily to make sure that
new sales reps have access to the unique accounts.

1. From App Launcher, find and select Admin Console.
2. Select Account Management, and then select Merge Account.
3. Run the batch job or schedule it for later. See Run Batch Jobs


Merge Two Accounts Manually

Combine two duplicate account records from the account record page. Select a consolidated (winner)
account, choose which field values to keep from each record, and merge them into a single, unified
record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To merge accounts                                    Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Accounts.
2. Select the account record you want to keep as the consolidated account.
3. Under Quick Actions, select Account Merge.
4. In the Merge Account window, search for and select the duplicate account to merge.
5. If needed, select Retain merged account field values when consolidated account field values are
blank, and click Next.
6. On the Select Fields to Retain window, select the field values that you want to see in the consolidated
account, and click Next.
7. Click Confirm.

<!-- page:73 -->




Account Search

Customize how users find and manage accounts by configuring various settings in the Admin Console.
You can define search criteria and results and adjust the appearance and behavior of search options. You
can manage this setup at both the org and profile levels, and further refine it by record type.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Locate and manage accounts efficiently with Account Search. Focus on strategic, high-value tasks by
using an extensive search functionality with customizable search options and result layouts.

Account Search makes it easier for users to find accounts efficiently in the Salesforce org. Users can find
accounts across the entire Salesforce ecosystem or even search external systems such as a master data
management (MDM) system or IQVIA’s OneKey database. Users can focus on the right accounts by
downloading and aligning accounts to a specific territory.

Users begin their workflow with an internal Salesforce search by using keywords. The search checks for
accounts not in their territory. If users don’t find the account they're looking for, they have the option to
search externally to identify potential accounts. Users can also use advanced search to further refine their
search by using attributes. If the required account doesn't exist, the user confirms its absence before
initiating the account creation process. This flow prevents duplicates, thus maintaining data integrity and
reducing redundancy.

Here’s a video of the process to help you get started.

Watch the video: https://salesforce.vidyard.com/watch/XpKpdKa6gZph4ss99rxGjK

If you aren’t able to watch the video in full screen mode, open the video on a new tab:      Configure
Account Search and Search Before Create Settings.


## Define Sharing Settings for Account Search

Ensure the automatic update of searchable HCP data in the batch job runs successfully by configuring
the Care Specialty object’s sharing settings.
Configure User-Specific Country Settings
Narrow the account search scope by configuring the user-specific country settings. Define countries
accessible by a user, and designate a country preferred by the user for specific interactions.
Customize Account Search Preferences
Customize the appearance and behavior of account search options available to users by configuring
settings in the Admin Console. You can do this at the org and profile level.
Configure External Search

<!-- page:74 -->



Customize the behavior of external search functionality for users. You can configure these settings at
the org and user levels.
Configure Advanced Search
Configure the criteria for performing advanced account search and the search results based on the
record type. You can apply these configurations at the org and profile level.
Set up External Search by Using Built-In MuleSoft Integration
Integrate AFLS with configured external data sources, such as an MDM or IQVIA’s
OneKey, to extend account searches beyond Salesforce. This integration helps sales reps find and add
accounts that aren't yet available in Salesforce.
Configure Search Before Account Creation
Enable users to search for matching accounts before creating a new record in the standard Accounts
tab. This prevents the creation of duplicate account records.


## See Also

Search for Accounts and Align Accounts with Your Territory
Refine Account Search Results by Using Advanced Search Criteria


Define Sharing Settings for Account Search

Ensure the automatic update of searchable HCP data in the batch job runs successfully by configuring
the Care Specialty object’s sharing settings.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To define sharing settings for account search:       Life Sciences Commercial Admin permission set


1.    From Setup, in the Quick Find box, find and select Sharing Settings.
2.    In the Organization-Wide Defaults section, click Edit.
3.    For the Care Specialty object, set the default internal access to Public Read Only.
4.    Save your changes.


Configure User-Specific Country Settings

Narrow the account search scope by configuring the user-specific country settings. Define countries
accessible by a user, and designate a country preferred by the user for specific interactions.

<!-- page:75 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure user-specific country settings:         Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select User Additional Info.
2. Find and select the UAI record of a user.
3. To set the user’s country preferences, click the  icon in the information section.
a. For Available Countries, select a country from Available and move them to Chosen.
b. For Preferred Country, select a country from the dropdown.
4. Save your changes.
If you don’t find a record for a user, you can create a User Additional Info record. You can also upload
these records in bulk by using data loader.


Customize Account Search Preferences

Customize the appearance and behavior of account search options available to users by configuring
settings in the Admin Console. You can do this at the org and profile level.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To customize account search preferences:             Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Account Management, and then select Account Search Preferences.
3. Under the Search Outside Territory section, enable users to search outside their territories and show
active accounts in the internal search results.
Users can manually align an affiliated account only after you've enabled the option to search for
accounts outside their territory.
4. Configure country-based settings for external search.
- To configure search across all countries, don't select country-based search.

<!-- page:76 -->



- To default search to user's available countries, select country-based search.
- To provide users a dropdown with specific countries, select the country-based search and the
country filter.
5. Select the record types available for filtering to include in a search outside the territory and move
them to Selected Values.
6. Under the Advanced Search section, enable business license-based searching and limit the search
scope by a user’s available countries.
7. If necessary, under the Additional Search Preferences section, further customize your search
preferences.
a. Enable users to view accounts in a map view (AFLS Mobile app only) and automatically align affiliated
accounts after a primary account is aligned to a territory.
b. Select a default customer filter and an additional provider territory field for searching.
The selected filter applies to account searches performed outside the Life Sciences Commercial
Accounts tab.
c. To configure the record types of accounts available for filtering during search, select the required
record types and move them to Selected Values.


Configure External Search

Customize the behavior of external search functionality for users. You can configure these settings at the
org and user levels.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure external search:                         Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console. Then, select Account Management.
2. Select External Search and then select Enable users to download out-of-contract accounts.
3. Configure settings at the user level.
a. Select External Search User Settings.
b. Set the user’s limit for downloading out-of-contract accounts for the org or for a particular user.
4. Configure settings at the org level.
a. Select External Search Org Settings.
b. Select an active external system for search from the dropdown.
If you don't select an option, users can’t perform external search.
c. Specify the integration definition API to connect with the external system for external search.
d. Set the org’s limit for downloading out-of-contract accounts.

<!-- page:77 -->



If you exceed the org limit when you download out-of-contract accounts from an external system, all
out-of-contract downloads are blocked for all users. If the org limit is available, the user limit is
checked before downloading.


Configure Advanced Search

Configure the criteria for performing advanced account search and the search results based on the
record type. You can apply these configurations at the org and profile level.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure advanced search:                        Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Search Before Create and then select Field Set Mapping.
The field sets for the HCO and HCP record types are set by default.
3. To associate custom field sets based on your preferences, create custom field sets and select them for
the required record type.
4. To customize the advanced search layout further, select Search Before Create on the Admin Console
page and then select General Settings.
a. To show external search results and internal search results simultaneously, under General Settings
customize the advanced search.
b. To customize the fields that appear in the business license search, its results, and the details for
affiliations and specialties during account creation, select the required field sets.
c. If necessary, set the sorting criteria used to display contact point addresses in the search results.
d. To populate searchable fields on healthcare provider records by using the data from associated
records, run the Update HCP Records with Searchable Data job from the Search Before Create Jobs
section, or activate the Update Healthcare Provider with Searchable Data data processing engine
(DPE) definition from Setup.
You can create data change requests while creating an account that requires approval.

See Also
Data Change Request
Salesforce Help: Create and Edit Field Sets
Salesforce Help: Run Data Processing Engine Definitions

<!-- page:78 -->




Set up External Search by Using Built-In MuleSoft Integration

Integrate AFLS with configured external data sources, such as an MDM or IQVIA’s OneKey,
to extend account searches beyond Salesforce. This integration helps sales reps find and add accounts
that aren't yet available in Salesforce.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Use prebuilt integration applications, including the Provider Services API and Onekey System API, which
are deployed via MuleSoft Direct to facilitate interaction with external data sources.

To address end-to-end business needs, integrate Salesforce apps with external systems by using
Integration Solutions with MuleSoft Direct.

To set up MuleSoft Direct, see Integrate Solutions with Mulesoft Direct.

To set up integration for external search, see Explore MuleSoft Direct Integration Apps.


## Create an Integration Definition

Use integration definitions to quickly set up integrations with different external endpoints by using a
low-code interface. Create integration definitions for Apex classes used to integrate with third-party
systems.


Create an Integration Definition

Use integration definitions to quickly set up integrations with different external endpoints by using a low-
code interface. Create integration definitions for Apex classes used to integrate with third-party systems.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create an integration definition:                   Customize Application


Before you create an integration definition, make sure your named credential is set up. This named

<!-- page:79 -->



credential is typically auto-created as part of the MuleSoft integration and Connected App setup. Find
the named credential in the {MuleSoft Application Name}_provider-services-impl format.

1. From Setup, in the Quick Find box, enter Integration Definitions, and then select Integration
Definitions.
2.    Click New.
3.    For Type, select Apex Defined.
4.    For Name, enter the name of the integration definition.
The Developer Name is auto-populated.
5.    For Apex Class, select lsc4ce.ExternalSearchCalloutService.
6.    For Attribute Value, enter the API Name of your named credential.
7.    Click Save and Activate.


Configure Search Before Account Creation

Enable users to search for matching accounts before creating a new record in the standard Accounts tab.
This prevents the creation of duplicate account records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure search before account creation:         Life Sciences Commercial Admin permission set


1. From Setup, go to Object Manager, and select Account.
2. Click Buttons, Links, and Actions.
3. Select New action from the list.
4. Click the    icon, and select Edit.
5. For Lightning Experience Override, select Lightning component, and then select SbcCreateAccount
component from the dropdown.
6. Save your changes.


Account Summarization

Prepare for smoother and more efficient customer interactions with the highly customizable Account
Summarization solution. Help users save the time that’s lost while switching between tabs to find the
latest and most relevant information about an account before any customer interaction. Provide
contextual information about provider accounts in a territory, including key account details and updates
made to the account and the account’s related records since the user’s last interaction with the account.

<!-- page:80 -->



Help users access account summaries on the web and on mobile devices, even when the user is offline.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


Also, generate separate summaries for different profiles by configuring profile-specific graphs in the
admin console. Customize and extend the Account Summarization solution to generate summaries of
objects and records of your choice.


## Permissions and Admin Settings for Account Summarization

Make sure your admins and users have the right permissions and licenses to access the Account
Summarization solution. Enable the admin settings that grant access to Einstein Generative AI and
Cross-Object Field History settings.
Account Summarization Data Setup
Account Summarization relies on data set up in your org. Review these prerequisites before setting up
Account Summarization.
Account Summarization Workflow
Account Summarization helps sales reps stay informed and prepared for provider visits with agent-
generated summaries of the latest changes that have taken place in account since the user’s last
interaction with the account. The agent-generated summaries are available on both on the web and in
the mobile, and supports both online and offline viewing in the mobile.
Configure History Tracking for Account Summarization
Account Summarization informs sales reps of the latest changes in a provider account since their last
interaction. Choose which fields to include in the information summary.
Create a Cross-Object Graph for Account Summarization
A cross-object graph represents a set of objects and the relationship between the objects. In Account
Summarization, the Account object is the root node in the graph. The Account Summarization graph
template references the objects related to the provider's account. You can configure graphs for
different profiles by customizing the related objects and fields. You can also create a graph from
scratch.
Assign a Cross-Object Graphs to an Org or Profile
Choose the cross-object graph that’s relevant for performing account summaries, and configure the
graph for the org or for a specific profile.
Account Summarization Customizations
Achieve more personalized solutions that cater to the unique needs of your organization by
customizing each component of the Account Summarization capability.

<!-- page:81 -->




Permissions and Admin Settings for Account Summarization

Make sure your admins and users have the right permissions and licenses to access the Account
Summarization solution. Enable the admin settings that grant access to Einstein Generative AI and Cross-
Object Field History settings.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


- Assign these permission sets to Account Summarization admins.
- Health Cloud Starter
- Life Sciences Commercial Admin
- Prompt Template Manager
- Access Life Sciences Customer Engagement Agentforce
- Assign these permission sets to users.
- Health Cloud Starter
- Life Sciences Field Sales Representative
- Access Life Sciences Customer Engagement Agentforce
- These admin settings must be turned on in Life Sciences for Customer Engagement Setup.
- Account Summarization
- Territory-Based Derived Sharing
- To create prompts using Einstein Generative AI, turn on Einstein Setup.
- To create object relationship graphs that store historical data of associated records, turn on Cross-
Object Field History.


Account Summarization Data Setup

Account Summarization relies on data set up in your org. Review these prerequisites before setting up
Account Summarization.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


- Make sure you’re assigned the Life Sciences Commercial Admin permission set.
- Configure territory models and activate the models.

<!-- page:82 -->



- Assign users and accounts to territories.
- Set up data in the Account object and in these related objects.
- Accreditation
- Award
- Party Publication
- Healthcare Provider Specialty
- Provider Visit Request Sample
- Contact Point Address
- Provider Account Territory Info
- Provider Affiliation
- Provider Visit Product Detailing
- Provider Visit Detail Product Message
- Provider Activity Goal
- Inquiry
- Inquiry Question
- If you’re adding other objects to the graph, make sure that you have access to the objects and set up
the data.
-    Configure the Provider Summary Lightning App Builder component to enable history tracking for the
fields that you want to include in the information summary.
-    To provide offline access to account summaries in the mobile app, create the object metadata cache
configuration for the Provider Account Territory Summary object.


## See Also

Generate Metadata Cache
Set Up Sales Territories for AFLS
Track Object Field History


Account Summarization Workflow

Account Summarization helps sales reps stay informed and prepared for provider visits with agent-
generated summaries of the latest changes that have taken place in account since the user’s last
interaction with the account. The agent-generated summaries are available on both on the web and in
the mobile, and supports both online and offline viewing in the mobile.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


By default, when the user interacts with the account for the first time, the summary generated shows the
account’s key information and all the updates that have taken place in the record in the last 90 days.

<!-- page:83 -->




Note You can configure the period of time for which summary changes are captured by customizing
the Generate Provider Account Territory Summary autolaunched flow.


The Account Summarization solution consists of flows, invocable actions, batch jobs, prompt templates,
and cross-object graphs that all work together to summarize a provider account and its related records
for the current user and the territory the account is part of.

The batch job and object meta data cache configurations help ensure that users have access to account
summaries at all times. The batch job generates summaries at regular intervals, while the object meta
data cache configurations sync the Provider Account Territory Summary records across the web and
mobile devices, thereby enabling users to view the summaries even when they're offline.


Account Summarization Cross-Object Graph Template

Cross-object graphs represent a set of objects, and relationship between the objects, where the account-
related information is stored. The graphs also contain information about the specific fields whose
updates are fetched in the summarization flow.

Account Summarization cross-object graphs have the Account object as the root node. The records of
the objects that are configured in the cross-object graph are sorted by the descending order of the last
modified date.

You can create cross-object graphs with a predefined Account Summarization template that offer a
complete view of the account and all its related objects. To get summaries of the latest changes in a
record, you must enable history tracking for the fields configured in the template. To pass on relationship
information to the Summarization flow, you must configure the graph as the org default or for specific
profiles.


Run Account Summarization Batch Job Flow

The Run Account Summarization Batch Job schedule-triggered flow runs on a daily cadence and calls an
action to run the Summarize Provider Accounts batch job. You can customize the date, time, and
frequency of the flow according to your preference.


Note The Run Account Summarization Batch Job is a template flow. As a prerequisite for generating
summaries, you must save it as a new flow, and give it a label and API name.


Summarize Provider Accounts Batch Job

The Summarize Provider Accounts batch job helps summarize the active provider accounts in bulk by
launching the Generate Provider Account Territory Summary flow.

<!-- page:84 -->




Generate Provider Account Territory Summary Flow

The Generate Provider Account Territory Summary flow calls the Get Object Relationship Data invocable
action and the Get Life Sciences Configuration Field Names and Values invocable action to fetch data
from the cross-objects graphs configured for Account Summarization. The output from the invocable
action is passed into the Summarize Provider Account Related Information prompt template to generate
the account summary.


Summarize Provider Account Related Information Prompt

The Summarize Provider Account Related Information prompt template generates summaries of the
objects and fields configured in the cross-object graph, and formats and categorizes the output in the
following JSON format.


{"keyInfo": [{"sectionName": "","sectionData": [{"data": ""}]}],"changeInfo":
[{"sectionName": "","sectionData": [{"data": ""}]}]}


The summary information is stored in the Provider Account Territory Summary records and displayed on
the account’s record page on the web, and in the account’s profile on the iPad.


## See Also

View a Smart Summary of an Account


Configure History Tracking for Account Summarization

Account Summarization informs sales reps of the latest changes in a provider account since their last
interaction. Choose which fields to include in the information summary.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


USER PERMISSIONS NEEDED

To enable history-tracking for fields:                 Life Science Commercial Admin permission set


Note You can’t enable history tracking for the formula, text area, and derived fields.


1. In the management settings for the object that you want to monitor, go to Fields & Relationships.
2. Click Set History Tracking.

<!-- page:85 -->



3. Select fields for which you want to view both past and new values.
4. Select fields for which you want to monitor only the most recent value.
5. Save your changes.


Create a Cross-Object Graph for Account Summarization

A cross-object graph represents a set of objects and the relationship between the objects. In Account
Summarization, the Account object is the root node in the graph. The Account Summarization graph
template references the objects related to the provider's account. You can configure graphs for different
profiles by customizing the related objects and fields. You can also create a graph from scratch.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


USER PERMISSIONS NEEDED

To create cross-objects graph:                      Life Sciences Commercial Admin permission set


Note Make sure you enable cross-objects field history.


1. From Setup, in the Quick Find box, enter and select Cross-Object Field History Graphs.
2. In Feature Settings, select Cross-Object Field History Graphs.
3. Click New Graph.
4. To use the predefined template, select Account Summarization, and then click Create Graph.
You can also create a graph from scratch.
5. In Graph Properties, enter a label for the graph.
The developer name is automatically populated. Make note of graph's developer name for related
tasks, such as assigning the graph to the org or to a profile.
6. Customize the template as needed.
7. Save your changes.

Next, assign the graph to a profile or to the org.


## See Also

Create a Cross-Object Field History Graph


Assign a Cross-Object Graphs to an Org or Profile

Choose the cross-object graph that’s relevant for performing account summaries, and configure the
graph for the org or for a specific profile.

<!-- page:86 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


USER PERMISSIONS NEEDED

To assign the cross-object graph to the org or to a    Life Science Commercial Admin permission set
profile:


1. From App Launcher, find and select Admin Console, and then select Account Management.
2. Select Account Summarization Graph Settings.
3. Choose whether the graph applies to the org or to a specific profile.
4. For Provider Account Related Relationship Graph, select the cross-object graph to assign.
5. Save your changes.


Account Summarization Customizations

Achieve more personalized solutions that cater to the unique needs of your organization by customizing
each component of the Account Summarization capability.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


Here’s a list of the various ways in which each of the Account Summarization components can be
customized and configured to suit your unique needs.

- Create different relationship graphs for different profiles, or create custom graphs to capture
additional information. You can add any object to the cross-object graph, but the object must have a
direct or indirect lookup to the Account object. You can add a maximum of three levels of
relationships in the graph, and up to five nodes at each level in the graph. By default, you create
different graph definitions for different profiles, so that the summaries are tailor-made for each
persona’s unique business needs. For example, to create separate summaries for key account
managers and medical science liaison, configure two different cross-object graphs and associate the
relevant graph with the target profile. You can further customize the graph definitions to create cross-
object graphs for specific purposes, such as a graph with a set of objects and fields that are configured
only for summaries of key information without the details of the changed information.
-    Create custom batch jobs to summarize account records for a subset of accounts, determined by

<!-- page:87 -->



condition logic. You can add filter conditions based on the account’s standard fields, such as account
type, or including custom fields representing the category, tier, or segment that the account belongs
to. For example, you can choose to generate summaries in bulk only for premium accounts.
-    The Account Summarization solution uses the flexible Generate Provider Account Territory Summary
flow that can be customized to fetch data from multiple graphs and feed the data into multiple
prompt templates, based on your requirements.
-    Create a custom prompt template based on the default template, and add custom instructions to
categorize the data. Make sure you display the prompt output in the following format.


## {"keyInfo": [{"sectionName": "","sectionData": [{"data": ""}]}],"changeInf

o": [{"sectionName": "","sectionData": [{"data": ""}]}]}


The highly configurable solution can be customized in multiple ways using various components, such as
with custom graphs, flows, batch jobs, prompts, invocable actions, and context definitions.


## Customize How and When an Account Summary is Generated

Customize the Generate Provider Account Territory Summary flow to fetch records of objects other
than the Account object. Choose when to capture summary changes.
Customize the Batch Job for Summarizing Provider Accounts
The Summarize Provider Accounts batch job summarizes the active provider accounts in bulk at
regular intervals. Customize the batch size, criteria, and retry count and interval.
Customize When to Run a Summarization Batch Job
Choose when and how often to perform summarizations by customizing the Run Account
Summarization Batch Job flow.
Create a Custom Prompt Template for Account Summarization
Configure a custom prompt template to modify the summarization guidelines, add input data, and
update the categorization details. When you modify the objects and fields in the cross-object graph,
you must update the prompt to summarize the details of the objects and fields you added.


Customize How and When an Account Summary is Generated

Customize the Generate Provider Account Territory Summary flow to fetch records of objects other than
the Account object. Choose when to capture summary changes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.

<!-- page:88 -->




USER PERMISSIONS NEEDED

To use Account Summarization:
Life Science Commercial Admin permission set

AND

Access Life Sciences Customer Engagement
Agentforce

To open, edit, or create a flow in Flow Builder:      Manage Flow


1.    From Setup, in the Quick Find box, enter and select Flows.
2.    Select Generate Provider Account Territory Summary to open Flow Builder.
3.    To change the time period to generate summaries, edit the GetLastVisitStartDateTime element.
4.    To fetch specific objects records in the associated cross-object graph, add a Get Records element and
add the filter conditions.
5. To pass the data onto custom prompt templates, clone the
GetRetrieveKeyInformationSummaryandChangedInformationSummary action, and associate it with
the custom prompt template. Add customizations as needed.
6. In the top-right corner, click         and select Save as New Version.
7. Activate the flow.


## See Also

Get Started Automating a Business Task with a Flow


Customize the Batch Job for Summarizing Provider Accounts

The Summarize Provider Accounts batch job summarizes the active provider accounts in bulk at regular
intervals. Customize the batch size, criteria, and retry count and interval.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


USER PERMISSIONS NEEDED

To use Account Summarization:
Life Science Commercial Admin permission set

AND

Access Life Sciences Customer Engagement
Agentforce

<!-- page:89 -->




USER PERMISSIONS NEEDED

To create a batch job:                              System Administrator profile


Note For large number of records, make sure that the batch job operates within the specified
execution limits.


1. From Setup, in the Quick Find box, enter and select Batch Management.
2. Click New and enter a name for the batch job.
The API name is automatically populated.
3. For the process type, select Flow.
4. For Execution Process, enter prvd_sum__ProviderSummarization.
5. For Group, enter Provider Summarization.
6.    Specify the batch size, retry count, and retry interval.
7.    For the flow input variable, select accountId.
8.    For the object that you want to run the batch job for, select Account.
9.    Add criteria to run the batch job.
10.    Save your changes.
11.    Activate the batch job.

Make sure you associate the custom batch job with the Run Account Summarization Batch Job schedule-
triggered flow.

See Also
Create a Batch Job
Execution Governors and Limits


Customize When to Run a Summarization Batch Job

Choose when and how often to perform summarizations by customizing the Run Account
Summarization Batch Job flow.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


USER PERMISSIONS NEEDED

To use Account Summarization:
Life Science Commercial Admin permission set

AND

<!-- page:90 -->




USER PERMISSIONS NEEDED


Access Life Sciences Customer Engagement
Agentforce

To open, edit, or create a flow in Flow Builder:    Manage Flow


Note The Run Account Summarization Batch Job is a template flow. Regardless of whether you use
the default configuration or customize the flow, you must first save it as a new flow.


1.    From Setup, in the Quick Find box, enter and select Flows.
2.    Select the new flow you saved the template Run Account Summarization Batch Job flow as.
3.    In Flow Builder, select the first element.
4.    Enter the date and time to start the flow and the frequency.
5.    Click    and select Action.
6.    Select the batch job that you want to associate with the action.
7.    For userType, select All Users.
8.    Enter the territory ID used in the original action element.
9.    Delete the default action element.
10.    Save your changes.


Create a Custom Prompt Template for Account Summarization

Configure a custom prompt template to modify the summarization guidelines, add input data, and
update the categorization details. When you modify the objects and fields in the cross-object graph, you
must update the prompt to summarize the details of the objects and fields you added.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement, Agentforce for LifeSciences Cloud, Einstein GPT Prompt Builder, and Einstein
GPT Platform Add-on licenses, and the Life Sciences Customer Engagement managed package.


USER PERMISSIONS NEEDED

To use Account Summarization:                       Life Science Commercial Admin permission set

To use prompt templates:
Prompt Template User permission set

AND

Access Life Sciences Customer Engagement
Agentforce

<!-- page:91 -->



1.    From Setup, in the Quick Find box, enter and select Prompt Builder.
2.    Select Summarize Provider Account Related Information.
3.    Click the dropdown next to Save As and select click Save as a New Version.
4.    Make modifications to the prompt as per your preference.
Make sure that the output of the prompt template is in this format.

{"keyInfo": [{"sectionName": "","sectionData": [{"data": ""}]}],"changeInfo":
[{"sectionName": "","sectionData": [{"data": ""}]}]}

5. In Template Settings, choose a model.
6. Activate the prompt.

To use a custom prompt, you must override the autolaunched Generate Provider Account Territory
Summary flow and associate the custom prompt with a new version of the flow.


## See Also

Create a Prompt Template


Agentforce for Account Summarization

Optimize visit-planning measures and improve provider engagement by leveraging the power of AI-
generated summarization. Get real-time, data-driven insights and contextual information about an
account's latest updates, historical interactions, and related records, tailored for the current user's
assigned territory. Use natural language utterances to interact with persona-based agents in the intuitive
and conversational Agent window to easily get account summaries on the go, on the web and on the
iPad.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS for Customer Engagement
Add-on license, Agentforce for AFLS, Flex Credits Metering, Agentforce Employee Agent,
Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder. Also available with
Einstein GPT Trust and Genie Data Platform Starter add-on licenses.


The Agentforce for Account Summarization solution consists of a topic, two actions, and a flow.

- The Pre Visit Planning topic helps the agent summarize provider records in the context of the user's
territory by using the Generate Healthcare Provider Summary action and the Identify Records By Name
action to identify the provider record and the territory of the user.
-     The Pre Visit Planning topic also calls the Generate Account Summary flow which generates the
account summary.

To tailor the Agentforce for Account Summarization solution to your specific needs, customize the topic
and related actions.

<!-- page:92 -->




## Set Up Agentforce for Account Summarization

To start using the Agentforce features, make sure you enable Einstein Setup, visit-specific topics and
actions, and account summarization. Also verify that you have records set up in your org.
Create an Agent for Account Summarization
Provide key account managers, field sales agents, and medical science liaisons with intelligent agents
who summarize information from multiple data points and offer key insights that support planning
initiatives before a visit. Use predefined agent templates to configure agents that cater to the specific
needs of personas in Life Sciences.
Account Summarization Flows for Agentforce
The Generate Healthcare Provider Summary agent action invokes the Generate Account Summary
flow, which determines if an existing summary record exists and if the existing summary record
captures the latest updates in an account. If there are no summary records or if the account record has
updates that haven't been summarized, the flow retrieves the latest summary details.
Provide Access to Your Pre Visit Planning Agent
To help users access the Pre Visit Planning agent, create a permission set with agent access enabled,
and assign it to the user. Or, provide agent access to your user's current profile.


Set Up Agentforce for Account Summarization

To start using the Agentforce features, make sure you enable Einstein Setup, visit-specific topics and
actions, and account summarization. Also verify that you have records set up in your org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS for Customer Engagement
Add-on license, Agentforce for AFLS, Flex Credits Metering, Agentforce Employee Agent,
Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder. Also available with
Einstein GPT Trust and Genie Data Platform Starter add-on licenses.


USER PERMISSIONS NEEDED

To enable Agentforce:                                 Customize Application

To enable Account Summarization:
Life Sciences Commercial Admin permission set

AND

Access Life Sciences Customer Engagement
Agentforce


Prerequisites

- To use Einstein Generative AI, turn on Einstein Setup.

<!-- page:93 -->



- Set up data to summarize accounts.
Licenses

- Assign the following permission sets to your users:
- Health Cloud Starter
- Life Sciences Core
- Prompt Template User
- Access Life Sciences Customer Engagement Agentforce
- Assign licenses based on the the standard user's persona:
- Assign the Life Sciences Key Account Management permission set to key account managers.
- Assign the Life Sciences Field Medical permission set to medical science liaisons.
- Assign the Life Sciences Field Sales Representative permission set to sales representatives.
1. From Setup, in the Quick Find box, enter Life Sciences for Customer Engagement Setup, and
select it.
2. In the Enable AFLS for Customer Engagement Features section, turn on Territory-Based
Derived Sharing admin settings.
3. In the Configure Account Summarization For Customer Engagement section, turn on the Account
Summarization.
4. In the Set Up Agentforce for Visit Planning section, turn on Enable Visit Planning Actions and Topics.


Create an Agent for Account Summarization

Provide key account managers, field sales agents, and medical science liaisons with intelligent agents
who summarize information from multiple data points and offer key insights that support planning
initiatives before a visit. Use predefined agent templates to configure agents that cater to the specific
needs of personas in Life Sciences.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS for Customer Engagement
Add-on license, Agentforce for AFLS, Flex Credits Metering, Agentforce Employee Agent,
Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder. Also available with
Einstein GPT Trust and Genie Data Platform Starter add-on licenses.


USER PERMISSIONS NEEDED

To build and manage Employee agents:
Manage AI Agents and Manage Agentforce
Employee Agents

OR

Customize Application

<!-- page:94 -->



The Key Account Management agent template, the Medical Science Liaison agent template, and the Life
Sciences Field Sales agent template are all based on the Agentforce Employee Agent agent type. All three
templates are all provisioned with the Pre Visit Planning topic, and are geared towards the following
personas in Life Sciences.

- The Key Account Management agent template helps key account managers obtain a holistic view of a
provider in the context of broader organizational goals and strategies.
-    The Medical Science Liaison agent template helps medical science liaisons (MSLs) drive more focused
discussions by helping them stay informed about the key opinion leader's profile, research interests,
and clinical trials.
-    The Life Sciences Field Sales agent template helps sales reps prepare for visits by helping them gain a
deeper understanding of a provider's prescribing habits, past interactions, and key interests.

1. Create an agent based on the Key Account Management, Medical Science Liaison, or the Life Science
Field Sales template.
2. Verify that Generate Healthcare Provider Summary action and the Identify Record by Name action
were added to the agent, and click Next.
3. Enter a name for the company the agent represents, and click Next.
4. Click Create.
5. Activate your agent.


## Agent Topic: Pre Visit Planning

The Pre Visit Planning topic helps optimize customer interactions by providing informed, personalized
insights and summaries. The topic processes the user's utterances to extract the provider's name and
the user's territory, and calls the Identify Record By Name action and the Generate Healthcare Provider
Summary action to generate account summaries.


Agent Topic: Pre Visit Planning

The Pre Visit Planning topic helps optimize customer interactions by providing informed, personalized
insights and summaries. The topic processes the user's utterances to extract the provider's name and the
user's territory, and calls the Identify Record By Name action and the Generate Healthcare Provider
Summary action to generate account summaries.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS for Customer Engagement
Add-on license, Agentforce for AFLS, Flex Credits Metering, Agentforce Employee Agent,
Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder. Also available with
Einstein GPT Trust and Genie Data Platform Starter add-on licenses.

<!-- page:95 -->




## Topic Details

topic                                description                            Included Agent Actions

PreVisitPlanning                     Help key account managers,
medical science liaisons, and          Generate Healthcare Provider
field sales reps prepare for visits    Summary*
by generating contextual
Identify Records By Name
summaries of provider records


*This action executes one or more prompt templates.


Examples of Utterances Classified to This Topic

- "Give me the summary for the current record."
- "Provide the Healthcare Provider summary for the current record."
- "What is the latest summary for the current record?"

Account Summarization Flows for Agentforce

The Generate Healthcare Provider Summary agent action invokes the Generate Account Summary flow,
which determines if an existing summary record exists and if the existing summary record captures the
latest updates in an account. If there are no summary records or if the account record has updates that
haven't been summarized, the flow retrieves the latest summary details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS for Customer Engagement
Add-on license, Agentforce for AFLS, Flex Credits Metering, Agentforce Employee Agent,
Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder. Also available with
Einstein GPT Trust and Genie Data Platform Starter add-on licenses.


Flow                                                    Definition


## Generates the summary of a healthcare

professional’s account by calling a flow that
Generate Account Summary
returns the latest summary of the account for
users of a specified territory.


Provide Access to Your Pre Visit Planning Agent

To help users access the Pre Visit Planning agent, create a permission set with agent access enabled, and
assign it to the user. Or, provide agent access to your user's current profile.

<!-- page:96 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS for Customer Engagement
Add-on license, Agentforce for AFLS, Flex Credits Metering, Agentforce Employee Agent,
Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder. Also available with
Einstein GPT Trust and Genie Data Platform Starter add-on licenses.


USER PERMISSIONS NEEDED

To create permission sets:                           Manage Profiles and Permission Sets

To assign permission sets:                           Assign Permission Sets


Make sure you assign the Health Cloud Starter, Life Sciences Core, Prompt Template User, and the Access
Life Sciences Customer Engagement Agentforce permission sets, along with the persona-specific
permission set to your users.

1. From Setup, in the Quick Find box, enter Profile and then select it.
2. Click New, and enter a label and description for the permission set.
The API name is automatically populated.
Alternatively, select the profile assigned to the user.
3. Click Enabled Agent Access, and then click Edit.
4. Move your agent from the Available Agents list to Enabled Agents list.
5. Save your changes.
In case of new permission sets, assign the permission set to your users.


Create an Account Team

Let team members view details of all the collaborators of an account across different territories. Choose
which fields to display to the account team.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create account teams:                             Life Sciences Commercial Admin permission set


To create an account team, you must have territories set up, and accounts and users assigned to each
territory.

<!-- page:97 -->



1. Choose the fields that you want to display.
a. From the object management settings for Users, select Field Set.
b. Click New, and enter the field label.
The field name is automatically populated. Note the field set’s API name. You need to add it in the
Lightning App Builder.
c. Enter where the field set is used.
d. Save your changes.
e. In the properties panel, move the fields that you want to display onto the editable part of the page.
f. Save your changes.
2.    On the Account’s record page, click      and select Edit Page.
3.    In the Lightning App Builder, on the Additional Information tab, select the Account Team component.
4.    In the Properties pane, for Field Set Name, enter the field set’s API name.
5.    Save your changes.
6.    Activate the page, and assign it as the org default.


## See Also

Coordinating with Account Teams Across Territories


Activity Timeline

The Activity Timeline in AFLS gives you a 360-degree view of all activities for an account. It
helps sales representatives, Key Account Managers (KAM), and Medical Science Liaisons (MSLs) visualize
past and upcoming interactions with healthcare providers (HCPs) and healthcare organizations (HCOs).
Activity Timeline helps you work more effectively by consolidating relevant account activities in one
place, enabling better collaboration, informed decision-making, and smarter preengagement planning.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Key Activity Types

Activity timeline supports a range of activity types, encompassing both standard and custom objects.
Standard activities include Inquiries, Visits, Assessment Tasks, LifeScience Emails, and Survey Responses.
The timeline can include any custom activities your organization tracks for HCPs and HCOs. It also
integrates with intelligent content and tracks products discussed and samples dropped during visits.


Interacting with the Activity Timeline

- Timeline View: Activities appear in chronological order on the Activity Timeline tab of the account

<!-- page:98 -->



record page. Users can scroll through past and future interactions to view events. For convenience,
users can click Today to quickly go to the current date.
-    Calendar View: The calendar offers Month and Week views. The Month view uses large dots to show
daily activity volume. Clicking a day takes you to the Week view, which provides detailed activity
information and links to records. You can customize your view with the same criteria available on the
timeline view.


## Understanding Activity Rollup for HCOs

Activity rollup provides a unified view of activities for Healthcare Organizations (HCO). It improves user
experience and increases efficiency by combining activities for an HCO and its affiliated Healthcare
Professionals (HCPs) in a single place.
Configure First Day of the Week in Your Calendar
Align the calendar view with your team's workweek. Setting the correct start day in the Planner
supports accurate planning and review of time-sensitive activities.
Configure Email Settings for Activity Timeline
Configure email settings to show scheduled and canceled email activities directly on an account page
for your sales team. For the timeline to show email activity, schedule email jobs to update email status.
Assign Permissions to View Activities on Timeline
Give your users the permissions to view activities that are outside their territory.
Configure Activity Timeline General Settings
Customize how the Activity Timeline and Calendar views show activities, including default focus,
territory and address filters, HCP activity rollup, and the visibility of detailed visit information.
Configure Activity Timeline Visibility Settings
Control which standard and custom activities appear in the Activity Timeline and Calendar views, and
customize the fields for expanded activities to make relevant information easily accessible.
Manage Timeline Display Text
Customize the text that appears in the header and body of each activity on the Activity Timeline and
Calendar views, and manage the options for filtering activities.
Activity Timeline Objects Access on Mobile
The Activity Timeline provides desktop and mobile app users with a comprehensive view of their
activities. Configure key objects to make this feature available on the AFLS mobile app
and give your mobile app users access activity-related data.


Understanding Activity Rollup for HCOs

Activity rollup provides a unified view of activities for Healthcare Organizations (HCO). It improves user
experience and increases efficiency by combining activities for an HCO and its affiliated Healthcare
Professionals (HCPs) in a single place.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:99 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


When configured, the Activity Timeline consolidates and shows activities from affiliated accounts directly
within the HCO's activity timeline. On an HCO account, you can see activities from affiliated accounts,
such as HCPs and child HCOs. This rollup offers a full picture of interactions at the institutional level.


Note Rollup functionality works in one direction. HCP activities appear on the HCO's Activity
Timeline, but HCO activities don't appear on the HCP's timeline.


Impact on Activity Timeline and Calendar Views Filters

Implementing activity rollup introduces an Affiliations filter on the Activity Timeline and Calendar views.
Use this filter to narrow down activities based on affiliated accounts.

The filter appears when provider affiliation records exist where a person account is affiliated with an HCO
account. Admins can also configure the filter to only display activities from specific Affiliation Roles, such
as Admitting or Staff. You can apply a maximum of five affiliation roles for filtering.


Customize Display of Rolled-Up Activities

To tell the difference between activities from various affiliated HCPs, you can customize the text for each
activity. Salesforce admins set up custom labels that include details like the HCP’s name or account ID
within the activity’s header or body.

The custom label for the rollup activity header takes precedence over the standard header text label
when the rollup feature is active. With this feature, you can create specific text customizations for rolled-
up activities. With the rollup feature's filters and customization options, you get a more efficient
understanding of all engagements tied to an HCO.


Note The Activity Timeline can generate an error if the Rolled-Up Activity Header Custom Label is
missing.


Configure First Day of the Week in Your Calendar

Align the calendar view with your team's workweek. Setting the correct start day in the Planner supports
accurate planning and review of time-sensitive activities.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:100 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access planner settings                            Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Click Planner, and then click Planner again.
3. In Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to a
specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. For First Day of the Week, enter any day you want to set, for example, Monday.
5. Save your changes.


Configure Email Settings for Activity Timeline

Configure email settings to show scheduled and canceled email activities directly on an account page for
your sales team. For the timeline to show email activity, schedule email jobs to update email status.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access email settings                              Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Click Email Settings and then click Settings.
3. For Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to
a specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Select Schedule emails to send later.
5. Save your changes.

<!-- page:101 -->




Assign Permissions to View Activities on Timeline

Give your users the permissions to view activities that are outside their territory.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To edit object permissions                           Life Sciences Commercial Admin permission set


1.    From Setup, in the Quick Find box, find and select Profiles.
2.    Select the profile associated with your user, and click Edit.
3.    Under Standard Object Permissions, provide View All Records access to Visits.
4.    Save your changes.
5.    Similarly, provide View All Records access to all these objects:
a. Product Disbursements
b. Provider Visits
c. Provider Visit Product Detailings


Configure Activity Timeline General Settings

Customize how the Activity Timeline and Calendar views show activities, including default focus, territory
and address filters, HCP activity rollup, and the visibility of detailed visit information.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access activity timeline settings                 Life Sciences Commercial Admin permission set


Prerequisite:

- Set up the picklist values for roles in provider affiliation. See Customize Picklist Values for Affiliations.
- To apply territory filters and view results, enable View All Records access on the Visit object to all your

<!-- page:102 -->



desired profiles.

1. From the App Launcher, find and select Admin Console.
2. Select Activity Timeline, and then select Activity Timeline General Settings.
3. In Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to a
specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Under Default View Setting, select Default to user’s last submitted visit.

Note When selected, the activity timeline loads to the last completed visit, which is marked with
a red line. If no visit has been submitted, the page defaults to show today's activities, and the
summary box for the last submitted visit expands automatically.

5. Under Visit Activity Settings, configure these settings as needed.
- Let users view products discussed during visit
- Let users view samples discussed during visit
- Show territory in visit header
- Show intelligent content thumbnails
6. Under Territory Filters Settings, configure these settings as needed.
- Use territory filter
- Default territory filter to All
Note The territory filter doesn't apply to activities that aren't associated with a territory.

7. Under Address Filter Setting, select Use address filter.

Note On activity timeline and calendar views, if All is selected in the address filter, all records are
shown regardless of whether they have an associated Contact Point Address record. If an address
became inactive, the activities tied to the address continue to appear in the timeline.

8. Under Activity Rollup Setting, select Roll up HCP activities to the HCO account.
9. Under Affiliation Roles Setting, add the affiliation roles from available values to selected values.

Note To use the affiliation filter on the timeline and calendar views, you must enable the Activity
Rollup Setting and have provider affiliation records.

10. Save your changes.


Configure Activity Timeline Visibility Settings

Control which standard and custom activities appear in the Activity Timeline and Calendar views, and
customize the fields for expanded activities to make relevant information easily accessible.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:103 -->




package.



## Configure Standard Activities for Activity Timeline

Specify which standard activities, such as Visits and Inquiries, are shown in the Activity Timeline and
Calendar views, and define the fields that appear when these activities are expanded.
Custom Activity Setup Overview
Review the tasks you must complete to set up custom activities on your timeline.
Configure Custom Activities for the Activity Timeline
Complete essential setup tasks, such as creating custom objects and defining required fields, before
you configure custom activities on the activity timeline.
Create Custom Activity Records by Using Apex Code
Automatically generate records for your parent custom object. Each such record corresponds to a
custom child object that represents an activity to track on the timeline.
Add Custom Activities to the Activity Timeline
Configure your custom activities, such as meetings or specific events, and show them in the Activity
Timeline and Calendar views for accounts.


Configure Standard Activities for Activity Timeline

Specify which standard activities, such as Visits and Inquiries, are shown in the Activity Timeline and
Calendar views, and define the fields that appear when these activities are expanded.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access activity timeline settings                  Life Sciences Commercial Admin permission set


Activity timeline supports these standard activities: Visit, Survey Response, Assessment Task, Life Science
Email, and Inquiry.

Before you configure standard activities settings, make sure that you create a field set for each of these
objects. These field sets are used to show the field names in the expanded view of an activity timeline
view for each standard activity. Create and Edit Field Sets.

- Assessment Task
- Visit
- Life Science Email
- Inquiry

<!-- page:104 -->



- Survey Response
1. From the App Launcher, find and select Admin Console.
2. Select Activity Timeline, and then select Activity Timeline Visibility Settings.
3. In Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to a
specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Under Standard Activities Settings, select the field sets corresponding to each object present in
Activity Objects list.

Note The timeline shows a maximum of 6 fields from the selected field set. If you don't select a
field set for an object, the expanded view shows only the Name field.

5. Deselect Active, if you don’t want to include activities related to the selected object.
6. Save your changes.


Custom Activity Setup Overview

Review the tasks you must complete to set up custom activities on your timeline.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Start by configuring a custom object that serves as the parent or the container for child custom objects
that represent the individual activities that you want to show on the timeline.

Then, configure the fields of the container object. Make sure the labels and field names of the fields are
exactly as follows.


Field Label                Field Name                 Data Type                   Description

Account                    Account__c                 Lookup (Account)            Represents the account
that's related to the
activity.

Entity Id                  Entity_Id__c               Text                        Represents the ID of the
record to track on the
timeline.

Entity Type                Entity_Type__c             Picklist                    Represents the list of
standard or custom
objects to track.

<!-- page:105 -->




Field Label                Field Name                Data Type                  Description

Entity Subtype             Entity_Subtype__c         Text                       Represents additional
grouping of an object
by criteria, such as
object type or record
type name.

Event Data                 Event_Data__c             Long Text Area             Represents data related
to the event in JSON
format.

Event Date Time            Event_Date_Time__c        Date/Time                  Represents the date and
time of the event's
occurrence.

Event Title                Event_Title__c            Text                       Represents data from
related records, and is
used as a criteria for
adding dynamic filters
to account activities.

Hide From Activity         Hide_From_Activity_His    Checkbox                   Represents whether a
History                    tory__c                                              record must be
excluded from the
account's activity
history.

Title                      Title__c                  Text                       Represents the title of
the event.

Subtitle                   Subtitle__c               Text                       Represents a subtitle for
the event.


Lastly, create another custom object to represent the individual custom activities, such as in-person
meeting.

Instead of manually setting up records, you can also use Apex code to generate records of the custom
container object that correspond to each custom object.


Configure Custom Activities for the Activity Timeline

Complete essential setup tasks, such as creating custom objects and defining required fields, before you
configure custom activities on the activity timeline.

<!-- page:106 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure the visibility settings for the activity      Life Sciences Commercial Admin permission set
timeline:


Note You must create only one custom object to represent the container for all individual custom
activities.


1. Create a custom object to represent the container for all custom activities.
For example, create a custom object called Account Activity. Enter Account Activity as the label of
the object. After you save the object, confirm that Account_Activity__c is the final object name.
2. Create custom fields to represent data in the container topics. First, create a lookup to the Account
object.
For more information on each of the fields, see Custom Activity Setup Overview
a. From the object management settings for the custom container object, select Fields &
Relationships, and click New.
b. For Data Type, select Lookup Relationship, and click Next.
c. For Related To, select Account, and click Next.
d. For Field Label, enter Account.
e. This action automatically adds Account as the field name. After you save the field, confirm that the
final field name is Account__c.
f. Select Required and select Delete this record also.
g. Select the profiles that can access the custom field.
h. Click Next, Next, and Save & New.
3. Create text fields for Entity ID, Entity Subtype, Event Title, Title, and Subtitle.
a. For Data Type, select Text, and click Next.
b. For Field Label, enter Entity ID.
c. This action automatically adds Entity_Id as the field name. After you save the field, confirm that
the final field name is Entity_Id__c.
d. For Length, enter 255.
e.    Select External ID.
f.   Select the profiles that can access the custom field.
g.    Click Next, Next, and Save & New.
h.    Similarly, create text fields for Entity Subtype, Event Title, Title, and Subtitle. After you save the fields,
confirm that the final field names are Entity_Subtype__c, Event_Title__c, Title__c, and
Subtitle__c.
4. Represent the entity type by creating a picklist type field. Add the names of the objects that you want

<!-- page:107 -->



to show on the timeline as the picklist values.
a. For Data Type, select Picklist, and click Next.
b. For Field Label, enter Entity Type.
c. This action automatically adds Entity_Type as the field name. After you save the field, confirm
that the final field name is Entity_Type__c.
d. Select Enter values, with each value separated by a new line, and enter picklist values of your
choice.
e. Select the profiles that can access the custom field.
f. Click Next, Next, and Save & New.
5. Represent the event data by creating a long area text type field.
a. For Data Type, select Text (Long Area), and click Next.
b. For Field Label, enter Event Data.
c. This action automatically adds Entity_Data as the field name. After you save the field, confirm
that the final field name is Entity_Data__c.
d. For Length, enter 131,072.
e. For Visible Lines, enter 10.
f. Select the profiles that can access the custom field.
g. Click Next, Next, and Save & New.
6. Represent the event date and time by creating a date/time type field.
a. For Data Type, select Date/Time, and click Next.
b. For Field Label, enter Event Date Time.
c. This action automatically adds Event_Date_Time as the field name. After you save the field,
confirm that the final field name is Event_Date_Time__c.
d. Select Required.
e. Select the profiles that can access the custom field.
f. Click Next, Next, and Save & New.
7. Provide users with the option to hide records from the activity history with a checkbox type field
a. For Data Type, select Checkbox, and click Next.
b. For Field Label, enter Hide From Activity History.
c. This action automatically adds Hide_From_Activity_History as the field name. After you save
the field, confirm that the final field name is Hide_From_Activity_History__c.
d. For Default Value, select Unchecked.
e. Select the profiles that can access the custom field.
f. Click Next, Next, and Save.
8. Create a custom object to represent each custom activity. The label and the record details appear on
the timeline.
For example, create a custom object to represent in-person meetings.


Create Custom Activity Records by Using Apex Code

Automatically generate records for your parent custom object. Each such record corresponds to a custom
child object that represents an activity to track on the timeline.

<!-- page:108 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure activity timeline visibility settings:     Life Sciences Commercial Admin permission set


Use the following steps as an example to create records for the parent custom object on insert, update,
and delete actions, as applicable. Wherever needed, replace Custom_Activity__c with the API name
of your custom child object. For example, if you create a custom object to represent in-person meetings,
use the In_Person_Meetings object name to replace Custom_Activity__c, wherever applicable.

1. Create a trigger service apex class to generate records for the parent custom object that each
corresponds to the child custom objects.
a. From Setup, select Developer Console.
b. Click File | New | Apex Class.
c. Enter CustomActivityTriggerService as the name.
d. In the CustomActivityTriggerService.aptx file, enter the following sample code. Customize the code
as needed.


## public class CustomActivityTriggerService {

public static void writeAccountActivityRecord(List<Custom_Activity__c> inc
omeRecords) {
List<Account_Activity__c> eventRecords = new List<Account_Activit
y__c>();
for (Custom_Activity__c objRecord : incomeRecords) {
eventRecords.add(new Account_Activity__c(
Account__c = objRecord.Account__c,
Event_Date_Time__c = Datetime.now(), // value should b
e in GMT
Title__c = 'any text you want to use as a Title',
Subtitle__c = 'another text you want to use as Subtitl
e',
Entity_Id__c = objRecord.Id,
Entity_Type__c = SObjectType.Custom_Activity__c.name,
Entity_Subtype__c = 'any value that is used to classif
y ObjectA records, e.g. this can be a record type name',
Event_Data__c = JSON.serialize(new ObjectEventData(obj
Record))
));
}

<!-- page:109 -->




insert eventRecords;
}
private class ObjectEventData {
public List<FieldDTO> fields;
public ObjectEventData(Custom_Activity__c record) {
fields = new List<FieldDTO>();
fields.add(new FieldDTO(SObjectType.Custom_Activity__c.field
s.Status__c.name, String.valueOf(record.Status__c)));
// fields.add(new FieldDTO(SObjectType.Custom_Activity__c.field
s.FieldB__c.name, String.valueOf(record.FieldB__c)));
// fields.add(new FieldDTO(SObjectType.Custom_Activity__c.field
s.FieldC__c.name, String.valueOf(record.FieldC__c), record.FieldC__r.Nam
e));
//example for date time field
fields.add(new FieldDTO(SObjectType.Custom_Activity__c.field
s.Start_Time__c.name, record.Start_Time__c.formatGMT('yyyy-MM-dd\'T\'HH:m
m:ss.SSS\'Z\'')));
}
}
private class FieldDTO {
public String fieldAPIName;
public String fieldValue;
public String relatedRecordName;
public FieldDTO(String fieldAPIName, String fieldValue) {
this.fieldAPIName = fieldAPIName;
this.fieldValue = fieldValue;
}
public FieldDTO(String fieldAPIName, String fieldValue, String rel
atedRecordName) {
this(fieldAPIName, fieldValue);
this.relatedRecordName = relatedRecordName;
}
}
}


2. Create a trigger for the apex class.
This configuration ensures that after you create a record for a custom activity, such as an in-person
meeting, a related parent custom activity record is created.
a. From Setup, select Developer Console.
b. Click File | New | Apex Trigger | .
c. Enter CustomActivityTrigger as the name.
d. Select Custom_Activity__c as the sObject.
e. In the CustomActivityTrigger.aptx file, enter the following sample code. Customize the code as
needed.

<!-- page:110 -->




trigger CustomActivityTrigger on Custom_Activity__c (after insert, after u
pdate) {
//this check can be skipped if trigger is subscribed only on after insert
//and after update events and service class method can be called immediate
ly
if (Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate)) {
CustomActivityTriggerService.writeAccountActivityRecord(Trigger.new);
}
}



Add Custom Activities to the Activity Timeline

Configure your custom activities, such as meetings or specific events, and show them in the Activity
Timeline and Calendar views for accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access activity timeline settings                    Life Sciences Commercial Admin permission set


Complete the steps in Prerequisites to Configure Custom Activities.

1. From the App Launcher, find and select Admin Console.
2. Select Activity Timeline, and then select Activity Timeline Visibility Settings.
3. In Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to a
specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Under Custom Activity Setting, for activity object, select Account Activity.
5. Deselect Active if you don’t want to include this custom activity on the timeline.
6. Save your changes.

After you’ve set up custom activities, verify if they are listed under the Type filter in the Activity Timeline
and Calendar Views.


Manage Timeline Display Text

Customize the text that appears in the header and body of each activity on the Activity Timeline and

<!-- page:111 -->



Calendar views, and manage the options for filtering activities.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Custom Labels for Activity Timeline

Activity Timeline uses custom labels to specify the text that appears in the headers, prefixes, and links
of activities displayed on the Activity Timeline and Calendar views.
Configure Activity Timeline Display Text
Customize how activity headers and bodies appear on the Activity Timeline and Calendar views by
mapping custom labels and fields to specific activity types and statuses.
How Dynamic Text in Custom Labels Works
Use a combination of custom labels, activity settings, and specific field values to control the dynamic
text displayed in activity headers and bodies on the Activity Timeline and Calendar views. Build logic
that determines what information populates the placeholder fields in your custom labels for the
Activity Timeline.


Custom Labels for Activity Timeline

Activity Timeline uses custom labels to specify the text that appears in the headers, prefixes, and links of
activities displayed on the Activity Timeline and Calendar views.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Before you configure the display text, create the custom labels you plan to use. Here are the labels that
correspond to the settings in Admin Console.


task                                                  related admin console setting


## Activity Header Custom Label

Create a custom label to include the text for the
header of each activity.

For example, The visit was planned.

<!-- page:112 -->




task                                                   related admin console setting


## Prefix Text for Body

Create a custom label to include the prefix text for
the body of the activity.

For example, Don’t forget to.


## Link Text for Body

Create a custom label to include the link text for
the body. This text generates a clickable URL link
to the corresponding activity record.

For example, Go To Visit.

Create a custom label to include the text for the      Rolled-Up Activity Header Custom Label
header of each rolled-up activity.


Configure Activity Timeline Display Text

Customize how activity headers and bodies appear on the Activity Timeline and Calendar views by
mapping custom labels and fields to specific activity types and statuses.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access activity timeline settings                   Life Sciences Commercial Admin permission set


Before you configure the display text, complete the steps in Custom Labels for Activity Timeline.

1. From the App Launcher, find and select Admin Console.
2. Select Activity Timeline, and then select Activity Timeline Display Text Settings.
3. In Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to a
specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Click New.
5. Enter a name.
6. In Activity Header Custom Label, enter the name of your activity header custom label.
7. In Prefix Text for Body, enter the name of your prefix text for body custom label.
8. In Activity Type Object, enter the name of the object to customize.

<!-- page:113 -->



9. In Assessment Task Type to Exclude, enter the value of the task type field on the Assessment Task
object to exclude the assessment task activities.
10. In Field to Display in Header, enter the field API name of the selected object.
This field is used in the parameters of the custom label created for the activity header.
11. In Link Text for Body, enter the name of your link text for body custom label .
12. In Rolled-Up Activity Header Custom Label, enter the name of your rolled-up activity header custom
label.

Note In the case of rolled-up activities, Rolled-Up Activity Header Custom Label takes precedence
over Activity Header Custom Label.

13. In Status, enter the API names of the Status field values for the selected object to filter activities based
on their status.

Note Use the API names of the Status field values for the Visit, Inquiry, and Assessment Task
objects. For Life Sciences Email object, use the API value of Email Status field.

14. In Body Text Field, enter the field API name to be shown in the activity body.

After you complete these configurations, create a metadata cache to complete the setup.


How Dynamic Text in Custom Labels Works

Use a combination of custom labels, activity settings, and specific field values to control the dynamic text
displayed in activity headers and bodies on the Activity Timeline and Calendar views. Build logic that
determines what information populates the placeholder fields in your custom labels for the Activity
Timeline.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


To customize the display text, understand how the activity rollup setting affects your labels. This section
explains the logic for how placeholder values are replaced in your custom labels.


How Activity Rollup Affects Placeholders

The number of available placeholders in a custom label depends on whether you roll up Healthcare
Professional (HCP) activities to the Healthcare Organization (HCO) account.

- When activity rollup is enabled: Custom labels can have up to two placeholders ({0} and {1}).
- When activity rollup is disabled: Custom labels for Inquiry, Life Science Email, Assessment Task, and
Survey Response activities can have only one placeholder ({0}).

<!-- page:114 -->




How Placeholder Fields Are Populated

The custom label used, and the value that replaces its first parameter, varies based on the activity type
and specific conditions. Take a look at some such scenarios.


Activity Type              Condition                   custom label used          first parameter is
replaced with

Inquiry, Life Science      Roll up HCP activities to   Rolled-Up Activity         The value of this field:
Email, and Assessment      the HCO account is          Header                     Field to Display in
Task                       enabled.                                               Header.

Roll up HCP activities to   Activity Header
the HCO account is
disabled.

Survey Response            Roll up HCP activities to
the HCO account is
enabled.

Roll up HCP activities to
the HCO account is
disabled.

Visit                      Show territory setting                                 The name of the user
and Roll up HCP                                        who created the visit.
activities to the HCO
account are both
enabled.

Show territory setting is
enabled but Roll up
HCP activities to the
HCO account is
disabled.

Show territory setting                                 The value of this field:
and Roll up HCP                                        Field to Display in
activities to the HCO                                  Header.
account are both
disabled.


## Show territory setting is   Rolled-Up Activity

disabled but Roll up        Header
HCP activities to the
HCO account is
enabled.

<!-- page:115 -->



The first parameter of custom labels for Link Text for Body is replaced by the Body Text Field value. If
there’s no value for Link Text for Body field, the Body Text Field value is used as the link text. For Life
Science Email, the Link Text for Body is always replaced by the Body Text Field.

Here's which custom label applies and what value replaces its second parameter based on the activity
and certain conditions.


Activity Type               Condition                   custom label used           second parameter is
replaced with

Inquiry, and Assessment NA                              Rolled-Up Activity          The account name.
Task                                                    Header

Visit                       If show territory is        Activity Header             The territory associated
enabled.                                                with the visit.

If show territory is        Rolled-Up Activity          The account name.
disabled.                   Header

Life Science Email          If the Email Status is
Opened or Closed.

Any other Email Status.                                 The sender of the email.


Note If Roll up HCP activities to the HCO account is enabled, and Field to Display in Header is
empty, the second parameter's value is displayed as the first parameter, and the second parameter
becomes null.If a visit has a parent visit associated with it, the visit link on the activity timeline
redirects you to the parent visit record.


Activity Timeline Objects Access on Mobile

The Activity Timeline provides desktop and mobile app users with a comprehensive view of their
activities. Configure key objects to make this feature available on the AFLS mobile app and
give your mobile app users access activity-related data.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


For the timeline to function on mobile, create an object metadata cache configuration with the type set
to Data for key objects. These objects support the mobile Activity Timeline:

- Visit

<!-- page:116 -->



- LifeScience Email
- Inquiry
- Survey Response
- Assessment Task
These objects are required to create the metadata cache to make other features work in the activity
timeline, but thesse objects don't show up as activities on the timeline:

- Provider Visit
- Provider Visit Product Detailings
- Product Disbursements
- Presentations
After completing database schema configuration, generate metadata cache for all supported objects.


Affiliations

Use the Affiliations feature to understand and map the connections between Healthcare Professionals
(HCPs) and Healthcare Organizations (HCOs). Mapping these relationships in the healthcare ecosystem
provides insights that help you target your engagement and improve outcomes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Hard affiliations connect a person to a specific location or organization, like an HCP who is affiliated with
a hospital. Soft affiliations are based on influence rather than a physical location, such as HCPs who
significantly influence other doctors through their research or network.

You can choose from multiple dynamic views accessible from the Affiliations tab on an account record
page: List View, Hierarchy View, and Network View.

To identify crucial insights, tailor the relationship visualization by using the advanced filtering and search
capabilities.


## Views for Managing Affiliations

AFLS provides distinct views for affiliations, each designed to help you visualize account
relationships for different purposes. The Table View presents data in a structured list, the Hierarchy
View shows relationships in an org-chart format for mobile users, and the Network View visualizes
connections as a graph. Understanding each view helps you choose the one that best fits your
workflow.
Territory Alignment for Affiliated Accounts

<!-- page:117 -->



A user's territory determines which accounts they can view and manage. With territory alignment for
affiliations, users can manually align an affiliated account from outside their territory to their current
one.
Create Field Sets and Custom Fields for Affiliation Settings
Create the necessary field sets and custom fields on affiliation objects that are required to configure
affiliation settings in the Admin Console.
Field-Level Security for Affiliations
To manage affiliations, users need access to certain fields that aren’t available to them by default.
Picklist Values Customization for Affiliations
To make it easier for your sales rep to select the appropriate options, customize the picklist values for
fields in the Provider Affiliation object.
Customize How Affiliations Are Displayed
Customize the appearance and behavior of account affiliations in the list, network, and hierarchy views
by configuring Affiliation settings. Use these settings to also manage data relationships, enforce data
validation rules, and streamline address management.
Map Direct and Reverse Affiliation Roles
Simplify relationship management by automatically creating a reverse role for every direct role you
define. For instance, when you map a healthcare professional (HCP) as an employee of a healthcare
organization (HCO), AFLS automatically creates the reverse relationship, designating the
HCO as the HCP's Employer. This automation eliminates manual inverse entries and ensures
consistent, efficient relationship management.
Streamline Address Management
Keep practitioner addresses up-to-date by automatically adding the primary address from their
affiliated organization whenever a hard affiliation is created. This makes sure that the practitioner's
workplace address is always listed, without manual updates.
Affiliated Account Summary
The Affiliated Account Summary modal provides a customizable view that surfaces essential
information about affiliated accounts. Users get immediate access to key details without having to
navigate away from their current screen. The feature also includes a quick action button to help users
create a visit directly from the summary.
Manage Affiliation Alignment Rules
Define affiliation alignment rules to automatically align affiliated accounts to specific territories. Create
rules based on criteria such as account type, affiliation role, and specialty to ensure accounts are
assigned correctly.
Batch Jobs for Affiliations
Affiliation batch jobs efficiently process large volumes of records at once by bypassing the governor
limits faced by trigger handlers. These batch jobs automate tasks such as setting affiliation types,
creating reciprocal affiliations, and establishing primary affiliations between accounts and parent
organizations.

<!-- page:118 -->




Views for Managing Affiliations

AFLS provides distinct views for affiliations, each designed to help you visualize account
relationships for different purposes. The Table View presents data in a structured list, the Hierarchy View
shows relationships in an org-chart format for mobile users, and the Network View visualizes connections
as a graph. Understanding each view helps you choose the one that best fits your workflow.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Affiliations Table View

The Affiliations Table View presents account relationships in a structured table format. This view is also
called the list or grid view. This view lists all active affiliations with a start date that falls within the
effective start and end dates of the Provider Affiliation. Configure columns to show the key details for
each affiliation. Users can use a search box to filter accounts by name, and the view includes out-of-the-
box filters such as Strength, Healthcare Professionals (HCPs), Healthcare Organizations (HCOs), and
Territories. The table view shows accounts both within and outside the user's territory. Clicking an
affiliated account in the table view opens a profile panel that displays details about the account. Create
new affiliations and update existing ones directly within the view.


Note The affiliations table view is available on both web and mobile.


Affiliations Hierarchy View

The Hierarchy view gives mobile users an org chart style view of affiliations based between HCPs and
HCOs. This view shows only an account’s Hard Affiliations. It presents these relationships in a structured
hierarchy that can be viewed for accounts within the current territory or outside it. If an account has
multiple hard affiliations, the view will display separate tiles for each. Filtering options available in the
Hierarchy view include Record Type, Role, Show Inactive, and Show Outside Territory. Unlike the List and
Network views, the Hierarchy view doesn't support configurable filters. Show Inactive filter depends on
the Effective Start and End Dates of the Provider Affiliation. Tapping an account name within the
Hierarchy opens the Account Summary for that account.


Note The affiliations hierarchy view is available only on mobile.

<!-- page:119 -->




Affiliations Network View

The Network View visualizes affiliations as a graph. In the graph, lines (or connectors) link account nodes
to represent the affiliations. You must enable this view in the Admin Console. The appearance of the
connectors is configurable. This view shows Hard or Soft types of affiliations. Both Hard and Soft
affiliations are displayed in the view. The Network View includes configurable filters such as Record Type
and Role. Show Inactive filter depends on the Effective Start and End Dates of the Provider Affiliation.
Opening an account node in the network diagram expands the view to show its related affiliations. Use
the network diagram to view affiliations. To edit an affiliation, use the Table View.

Depending on the affiliation's direction, the graph connecting accounts shows either a one-way or two-
way arrow. A one-way arrow indicates a unidirectional affiliation, while a two-way arrow represents a
bidirectional affiliation.


Note The affiliations network view is available on both web and mobile.


Territory Alignment for Affiliated Accounts

A user's territory determines which accounts they can view and manage. With territory alignment for
affiliations, users can manually align an affiliated account from outside their territory to their current one.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


To enable this functionality, select Enable users to search for accounts outside the user’s territory in
Account Search Preferences of Account Management. See Customize Account Search Preferences.

From the Salesforce mobile app's Affiliations view, an account outside a user's current territory is
identifiable by the absence of an edit action next to its name. Tapping this account record shows a
window with an Align option. Selecting this option aligns the affiliated account with the user's current
territory.


Create Field Sets and Custom Fields for Affiliation Settings

Create the necessary field sets and custom fields on affiliation objects that are required to configure
affiliation settings in the Admin Console.

<!-- page:120 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create custom fields and field sets:                 Life Sciences Commercial Admin permission set


Object                              task                                    related admin console setting

Provider Affiliation                Create a field set to uniquely          Provider Affiliation Unique Field
identify provider affiliation           Set
records.


## Create a field set to show a list of Provider Affiliation Columns

columns in the table view of         Field Set
affiliations.


## Create a custom or formula field        Connector Color Field

that stores value in hexadecimal
format to show the color of
connectors in the network view
of affiliation. For example,
#FF0000.


## Connector Thickness Field

Create a custom or formula field
that stores numeric values to
show the thickness of
connectors in the network view
of affiliation.

Account                             Create a text field to search for       Account Search Field
an account in the table view of
affiliations.

Provider Affiliation Product                                                Provider Affiliation Product
Create a field set to filter            Filters Field Set
provider affiliations in the
network view of affiliations. To
enable product filter in network
view, add the Product field. You
can also include Provide
Affiliation fields in the field set.

<!-- page:121 -->




Object                               task                                    related admin console setting



## After you enable the Product

filter, all the active products from
the LifeSciMarketableProduct
and the Product2 objects are
shown the Product filter picklist
in the Affiliation network view.


Create a Custom Field and Define Field Sets.


## Considerations for Affiliations Field Sets

Make sure your implementation is successful by reviewing the considerations for affiliation field sets.
These field sets directly control the appearance and functionality of the affiliation views, such as the
columns in the table view and the filters in the network view. Understanding these limitations
beforehand helps you tailor the experience for your users.


Considerations for Affiliations Field Sets

Make sure your implementation is successful by reviewing the considerations for affiliation field sets.
These field sets directly control the appearance and functionality of the affiliation views, such as the
columns in the table view and the filters in the network view. Understanding these limitations
beforehand helps you tailor the experience for your users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Provider Affiliation Unique Field Set

Keep these limitations in mind for the Provider Affiliation Unique Field Set:

- Fields from the Provider Affiliation object are supported.
- In addition to the default Account and Related Account fields, you can add up to five more fields.
- One multi-select picklist field is supported.
- Text area fields aren’t supported.

Provider Affiliation Product Filters Field Set

For the Provider Affiliation Product Filters Field Set, only single-select picklist and checkbox fields are

<!-- page:122 -->



supported.


## See Also

Salesforce Help: Define a Field Set


Field-Level Security for Affiliations

To manage affiliations, users need access to certain fields that aren’t available to them by default.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


You must manually grant your users access to these fields.


Object                                                     Field

Provider Affiliation                                       Account Name

Related Account Name

Account Person Account

Related Account Person Account

Healthcare Provider                                        Primary Provider


See Set Field-Level Security for a Field on All Profiles.


Picklist Values Customization for Affiliations

To make it easier for your sales rep to select the appropriate options, customize the picklist values for
fields in the Provider Affiliation object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Here are some recommended values, but you can configure any values to fit your business needs.

<!-- page:123 -->




Object                             Field                                Recommended Picklist Values

Provider Affiliation               Affiliation Title
- Board Member
- Chairman
- Specialist
- Surgery Specialist
- Vice Chairman

Role
- Attending
Territory Provider Affiliation     Affiliation Role                    • Admitting
Assignment Rule                                                        • Co-Business
- Consulting
- Staff

Note We recommend that you define default values for the Role field on the Provider Affiliation
object. This default value is used in the HealthcareProviderAffiliationHandler trigger handler.


## See Also

Salesforce Help: Add or Edit Picklist Values
Salesforce Help: Define Default Field Values


Customize How Affiliations Are Displayed

Customize the appearance and behavior of account affiliations in the list, network, and hierarchy views
by configuring Affiliation settings. Use these settings to also manage data relationships, enforce data
validation rules, and streamline address management.


## Configure Core Affiliation Behavior

Use General Settings in the Admin Console to configure core behaviors and views for the Affiliations
tab on an account record page. These settings control aspects such as the creation of reverse
affiliations and how the affiliation type, hard or soft, is determined. The settings also manage the
visibility of the network graph view, and the fields used for uniqueness validation.
Customize the Table View Appearance
Configure the appearance and search capabilities of the Affiliations table view. Customize the view on
the account record page by adjusting pagination and defining the sort order for columns.
Customize the Network View Appearance
Customize the color and thickness of connectors (edges) between accounts in the network view of
affiliations by using Use Network View Settings. You can also configure the filters available to users
within the network view by referencing field sets on the Provider Affiliation Product object.

<!-- page:124 -->



Configure Core Affiliation Behavior

Use General Settings in the Admin Console to configure core behaviors and views for the Affiliations tab
on an account record page. These settings control aspects such as the creation of reverse affiliations and
how the affiliation type, hard or soft, is determined. The settings also manage the visibility of the network
graph view, and the fields used for uniqueness validation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access account management                           Life Sciences Commercial Admin permission set


Prerequisite: Create Field Sets and Custom Fields for Affiliation Settings

1. From the App Launcher, find and select Admin Console.
2. Select Account Management, and then select Affiliations.
3. For Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to
a specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Under General Settings, configure these settings as needed.
- Disable reverse: Select to disable the creation of reverse provider affiliation records.
- Set affiliation type for provider affiliations: Select to set the affiliation type as Soft or Hard for
provider affiliation records based on predefined criteria in HardAffiliationHandler trigger. If the
trigger is enabled, it updates the affiliation type field according to its logic; otherwise, the user-
selected value is retained.
Note Admins must enable this trigger in the setup.

- Enable network view: Select to enable the network view on the affiliation tab.
- Provider Affiliation Unique Field Set: Select the field set from the Provider Affiliation object that
includes a combination of values to uniquely identify a provider affiliation record based on
predefined criteria in the AffiliationUniquenessGenericHandler trigger.
5. Save your changes.


## See Also

Salesforce Help: Define a Field Set
Salesforce Help: Map Direct and Reverse Affiliation Roles

<!-- page:125 -->



Customize the Table View Appearance

Configure the appearance and search capabilities of the Affiliations table view. Customize the view on
the account record page by adjusting pagination and defining the sort order for columns.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access account management                            Life Sciences Commercial Admin permission set


Create Field Sets and Custom Fields for Affiliation Settings

1. From the App Launcher, find and select Admin Console.
2. Select Account Management, and then select Affiliations.
3. For Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to
a specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Under Table View Settings, configure these settings as needed.

Provider Affiliation Columns Field Set: Select the field set from the Provider Affiliation object that
includes fields to display as columns in the affiliations table view.



Records per Page: Enter the default number of records to show on each page.

Fields and Order for Sorting: Enter comma-separated API names of the fields and their sort order
(ASC or DESC). For example, CreatedDate ASC, EffectiveStartDate DESC . This setting applies
only to the web version of the affiliations table.


Note To find a field’s API name, go to the object management settings for the Provider Affiliation
object.


Records per Page Dropdown Values: Enter comma-separated values for the Records per Page
dropdown. For example, 10, 15, 20, 25. The default values are 5, 10, 20, 30.



Account Search Field: Select text fields from the Account object to use for searching for accounts in
the affiliations table view.

<!-- page:126 -->




## See Also

Salesforce Help: Define a Field Set


Customize the Network View Appearance

Customize the color and thickness of connectors (edges) between accounts in the network view of
affiliations by using Use Network View Settings. You can also configure the filters available to users within
the network view by referencing field sets on the Provider Affiliation Product object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access account management settings                 Life Sciences Commercial Admin permission set


Prerequisite: Create Field Sets and Custom Fields for Affiliation Settings.

1. From the App Launcher, find and select Admin Console.
2. Select Account Management, and then select Affiliations.
3. For Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to
a specific profile.
a. To apply the settings to all the profiles in your org, select SOrg Default.
b. To apply the settings to a specific profile in your org, select Profile.
4. Under Network View Settings, configure these settings as needed.

Connector Color Field: Select a custom or formula field containing a hexadecimal code to determine
the connector color in the network view. The default value is #808080 (gray).



Connector Thickness Field: Select a custom or formula number field to determine the thickness of
the connectors in the network view. The default is Affiliation Strength Type.



Provider Affiliation Product Filters Field Set: Select the field set from the Provider Affiliation Product
object. The fields in this set are available as filters in the network view.



5. Save your changes.


## See Also

Salesforce Help: Define a Field Set

<!-- page:127 -->




Map Direct and Reverse Affiliation Roles

Simplify relationship management by automatically creating a reverse role for every direct role you
define. For instance, when you map a healthcare professional (HCP) as an employee of a healthcare
organization (HCO), AFLS automatically creates the reverse relationship, designating the
HCO as the HCP's Employer. This automation eliminates manual inverse entries and ensures consistent,
efficient relationship management.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To access account management settings                Life Sciences Commercial Admin permission set


Prerequisite: Picklist Values Customization for Affiliations.

Reverse Affiliations are only created if the Influence Type field on the Provider Affiliation object is
selected as either Unidirectional, Bidirectional, or Neutral.

1.    From the App Launcher, find and select Admin Console.
2.    Select Account Management, and then select Affiliation Reverse Role Mapping.
3.    Click New.
4.    Enter a name.
5.    Select a direct role.
6.    Select a reversed role.
7.    Save your changes.


Streamline Address Management

Keep practitioner addresses up-to-date by automatically adding the primary address from their affiliated
organization whenever a hard affiliation is created. This makes sure that the practitioner's workplace
address is always listed, without manual updates.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:128 -->




USER PERMISSIONS NEEDED

To access search before create settings               Life Sciences Commercial Admin permission set


Make sure that the HardAffiliationHandler trigger is active.

1.    From the App Launcher, find and select Admin Console.
2.    Select Search Before Create and then select General Settings.
3.    Select Enforce Workplace Address Dependency.
4.    Save your changes.


Affiliated Account Summary

The Affiliated Account Summary modal provides a customizable view that surfaces essential information
about affiliated accounts. Users get immediate access to key details without having to navigate away
from their current screen. The feature also includes a quick action button to help users create a visit
directly from the summary.


**REQUIRED EDITIONS**


Note Healthcare Provider (HCP) details are shown in the account summary only if the HCP is the
primary provider for the account. Address details for an account are shown only if these two
conditions are met: the account has an active provider account territory info (PATI) record, and it's
linked to an active user territory record. The address is fetched from the preferred address field of
the PATI record, which stores the associated contact point address.

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


On the web, the Affiliated Account Summary modal only displays information related to the account. On
the iPad, the Affiliated Account Summary modal consists of two tabs: Account and Account Plans.

Account tab

Both the default modal on the web and the Account tab on the mobile show account details and a "New
Visit" quick action button. If needed, you can tailor the information that's shown in the Account tab by
editing the Account Summary Columns field set on the Healthcare Provider and Contact Point Address
objects. Before you add fields to the field set, make sure that the user has the approriate access.

Account Plans tab

On the iPad, the Account Plans tab displays the list of active account plans associated with the account, if
any. However, as a prerequisite, you must set up object metadata cache settings for account plans.

<!-- page:129 -->




Manage Affiliation Alignment Rules

Define affiliation alignment rules to automatically align affiliated accounts to specific territories. Create
rules based on criteria such as account type, affiliation role, and specialty to ensure accounts are
assigned correctly.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To define affiliation alignment rule                   Life Sciences Commercial Admin permission set


Prerequisites:

- - Add picklist values for the Affiliation Role field on the Territory Provider Affiliation Assignment Rule
object. See Picklist Values Customization for Affiliations.
-     Create Care Specialty Records.

1.    From the App Launcher, find and select Admin Console.
2.    Select Territories, and then select Affiliation Rules.
3.    Click New.
4.    Select the required territory and its subordinates from the appropriate level in the territory hierarchy,
and click Next.
5.    To apply the rule to child territories, select Apply Rule to Child Territories.
6.    Select an account type, and select an affiliation role.
7.    Optionally, select Specialty, and click Submit.
8.    Save your changes.

When you delete an affiliation alignment rule for a parent territory that has the Apply Rule to Child
Territories option enabled, all the corresponding child affiliation alignment rules are also deleted.

Similarly, if you edit an affiliation alignment rule and deselect Apply Rule to Child Territories, the child
affiliation alignment rules are deleted.

After you define the affiliation alignment rules, run the territory management jobs to align affiliated
accounts according to those rules. See Run Territory Management Jobs.


Batch Jobs for Affiliations

Affiliation batch jobs efficiently process large volumes of records at once by bypassing the governor limits

<!-- page:130 -->



faced by trigger handlers. These batch jobs automate tasks such as setting affiliation types, creating
reciprocal affiliations, and establishing primary affiliations between accounts and parent organizations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


AffiliationDataLoadProcessorBatch

This batch job is an alternative to the HardAffiliationHandler and AffiliationReciprocalHandler trigger
handlers. It performs these primary functions:

- It sets the affiliation type on provider affiliation records to hard or soft when the necessary conditions
are met, without requiring explicit user input.
-    It creates the corresponding reverse affiliation for a given affiliation record. The batch job determines
the reverse role for this reverse affiliation by referring to the mapping configured in the Affiliation
Reverse Role Mapping.


AccountPrimaryAffiliationBatch

This batch job provides an alternative to the HealthcareProviderAffiliationHandler trigger handler. When
a parent account is specified on the provider's record, the job creates a primary affiliation between the
healthcare provider's account and its parent organization account. If an affiliation already exists, it
updates the primary flag accordingly.


## Run Affiliation Batch Apex Jobs

Run batch Apex jobs from the Developer console to automate tasks such as setting affiliation types,
creating reciprocal affiliations, and establishing primary affiliations between accounts and parent
organizations. Track the status and health of your batch Apex jobs and terminate them from Setup
when necessary.


## See Also

Salesforce Help: Batch Apex


Run Affiliation Batch Apex Jobs

Run batch Apex jobs from the Developer console to automate tasks such as setting affiliation types,
creating reciprocal affiliations, and establishing primary affiliations between accounts and parent
organizations. Track the status and health of your batch Apex jobs and terminate them from Setup when
necessary.

<!-- page:131 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create, edit, and delete AFLS         Life Sciences Commercial Admin permission set
data:


Before you run the AffiliationDataLoadProcessorBatcha batch job, turn off the HardAffiliationHandler and
the AffiliationReciprocalHandler trigger handlers. Before you run the AccountPrimaryAffiliationBatch
batch job, turn off the HealthcareProviderAffiliationHandler trigger handler.


## Run the batch Apex job using this Apex code: Map<String, Object> paramMap = new

Map<String, Object>{ 'batchName' => '{your_batch_name}', 'batchSize' =>
'{your_batch_size}', 'isCreatedByCurrentUser' =>
'{your_is_created_by_current_user_boolean}', 'createdAfter' =>
'{your_datetime}', 'whereClause' => '{your_where_clause_string}' }; // Call
Boolean result =
(Boolean)(lsc4ce.LifeScienceApi.getInstance(lsc4ce.LifeScienceApi.Command.AffiliationBatchJo
System.debug('Result: ' + result);
The batchSize, createdAfter, isCreatedByCurrentUser, and whereClause parameters are optional. For
instructions on how to run batch Apex jobs, see Executing Anonymous Apex Code.


## Example Map<String, Object> paramMap = new Map<String, Object>{ 'batchName' =>

'AffiliationDataLoadProcessorBatch', 'batchSize' => 200, 'isCreatedByCurrentUser' => tru
Datetime.newInstance(2025, 8, 1, 0, 0, 0), 'whereClause'=> 'AffiliationStrengthType = \'
result =
(Boolean)(lsc4ce.LifeScienceApi.getInstance(lsc4ce.LifeScienceApi.Command.AffiliationBat
System.debug('Result: ' + result); This code runs the AffiliationDataLoadProcessorBatch job, setting the

only the records that were created by the logged in user on the 1st of August 2025 at 0 hours. It executes the recor
type as high.



Bulk Update for Account-Related Records from Related Lists

Give your users an efficient way to update multiple account-related records in a single action from a
related list. To allow bulk updates from related lists, enable bulk edits for the user profile, create a custom
button, and add the custom button to the account page layout.


## Enable Users to Make Changes in Bulk

Allow users to edit multiple account-related records at from the mobile app once by enabling the bulk

<!-- page:132 -->



edit capability for a specific user profile or all user profiles in your org.
Create a Custom Button for Bulk Update
Create a custom button that enables users to perform bulk updates on records directly from a related
list.
Add the Custom Button to Account Layout
To make the custom button accessible to users from a related list, add it to the account page layout.


Enable Users to Make Changes in Bulk

Allow users to edit multiple account-related records at from the mobile app once by enabling the bulk
edit capability for a specific user profile or all user profiles in your org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To enable Bulk Edit:                                     Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select Mobile and then select Profile Based App Settings.
3.    Select Let users perform bulk edit.
4.    Save your changes.


Create a Custom Button for Bulk Update

Create a custom button that enables users to perform bulk updates on records directly from a related
list.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create or change custom buttons or links:             Customize Application

<!-- page:133 -->



1. From Setup, in the Quick Find box, enter Object Manager, and then select Object Manager.
2.    Search for and select the object to which you want to add the custom button.
3.    Select Buttons, Links, and Actions, and then select New Button or Link.
4.    Provide a label and name for the button. For example, Bulk Update.
5.    For Display Type, select List Button.
6.    If Display Checkboxes (for Multi-Record Selection) is selected, clear it.
7.    For Behavior, select a behavior for the button.
8.    Select the content source as URL, and provide the URL in this format: {!URLFOR("/lightning/n/
LS4CE__BulkUpdate?c__parentRecordId="+{ParentObjectName}.Id+"&c__relatedObject={RelatedObj
9. Check syntax.
10. Save your changes.


Add the Custom Button to Account Layout

To make the custom button accessible to users from a related list, add it to the account page layout.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To customize buttons on page layouts:                 Customize Application


1.    From Setup, in the Quick Find box, find and select Object Manager.
2.    Search for and select the object you want to edit. The related list is shown on this object’s record page.
3.    Select Page Layouts, and then select the page layout you want to edit.
4.    From the palette, select Related Lists.
5. Drag the related list you want to edit from the palette to the layout.
6. In the layout, click      to edit the related list.
7.    From the related list properties, click to expand the Buttons section.
8.    Move the custom button from the Available Buttons list to the Selected Buttons list.
9.    Click OK.
10.    Save your changes to the layout.


Data Change Request

Use Data Change Request to manage how data changes are submitted, validated, and implemented
across the AFLS for Customer Engagement app. Reduce manual corrections, prevent
unapproved changes from being applied, and make sure that data consistency across both web and
mobile apps.

<!-- page:134 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Set Up Data Change Request by User Profile

Control how data updates are governed for various objects in the AFLS for Customer
Engagement app. Specify whether changes apply immediately or require review before finalization.
This set up makes sure that data updates comply with your organization’s review policies and support
profile-specific handling of data changes.
Set Up Data Change Request Validation Types
Use validation types to define how data change requests are validated for different record types.
Configure each request to go through internal validation, which your organization manages, or
external validation, managed by OneKey. Select the option that aligns with your organization's quality
requirements.
Create Life Science Data Change Definition Managed Fields
Managed fields determine which updates trigger a Data Change Request for supported objects.
Creating records for each object makes sure that changes to critical data are reviewed, validated, and
approved through the Data Change Request workflow.
Approve or Reject a Data Change Request
Review and act on Data Change Requests submitted by users directly from the AFLS for
Customer Engagement app. Use the built-in Lightning component to create a new tab to approve or
reject a change request.
Mobile App Configuration for Data Change Request
Configure database schema for the supported Data Change Request objects. Generate a metadata
cache to package the object scheme configuration into a downloadable metadata cache that the
mobile app uses for online and offline access.


Set Up Data Change Request by User Profile

Control how data updates are governed for various objects in the AFLS for Customer
Engagement app. Specify whether changes apply immediately or require review before finalization. This
set up makes sure that data updates comply with your organization’s review policies and support profile-
specific handling of data changes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:135 -->




package.


USER PERMISSIONS NEEDED

To set up and configure Data Change Request         Life Sciences Commercial Admin
features and objects:


Important Data Change Request is supported for these objects: Account, HealthcareProvider,
HealthcareProviderSpecialty, HealthcareProviderNPI, ContactPointAddress, ContactPointPhone,
ContactPointSocial, ContactPointEmail, BusinessLicense, and ProviderAffiliation.


- Create object metadata cache configuration for LifeSciDataChgDefMngFld object. Add one record per
field or multiple records for the same field when different configurations are required. See Create
Object Metadata Cache Configuration.
-    Create records for UserAdditionalInfo object for the authenticated user with preferred country and
available country sets. In addition, create associated LifeSciCountry records.

1. From the App Launcher, find and select Life Sciences Commercial.
2. Click Admin Console.
3. In the Life Sciences Customer Engagement Setup page, click Account Management.
4. In the navigation pane, click Data Change Request.
5. To activate the Account object and its related Data Change Request object, turn on Object Status.
6. In the Profile Settings section, select a default behavior from the Default Settings dropdown to
determine when the changes reflect across web and mobile apps.
On the mobile app, the changes reflect immediately if the configuration is set to apply immediately.
The mobile users can see the changes made on the web app only after the app's next sync.
- Don’t apply changes immediately: Sends DCR for approval first on the web app. Changes appear on
the mobile app after approval on the next sync.
- Apply changes to each field individually: Applies all the changes on the mobile app immediately.
Creates a data change request for review. If the changes are later rejected by the authorizer, the
updates will be reverted on the next sync.
- Apply changes immediately: Applies changes at the field level; controls how changes are applied to
each field. On the web app, if the changes are rejected then the changes are reverted on the mobile
app on the next sync.
7. To apply the selected default behavior, turn on Active.
8. Configure different behaviors for specific profiles.
a. In the Profile section, click Add.
b. Select a profile.
For example, select System Administrator.
c. Select the field update type for the profile.
d. To apply the rule, turn on Active.
9. Save your changes.
10. Similarly, set up Data Change Request for the other objects.

<!-- page:136 -->




Set Up Data Change Request Validation Types

Use validation types to define how data change requests are validated for different record types.
Configure each request to go through internal validation, which your organization manages, or external
validation, managed by OneKey. Select the option that aligns with your organization's quality
requirements.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Data Change Request          Life Sciences Commercial Admin
features and objects:


1.  From the App Launcher, in the Quick find and select Life Sciences Commercial.
2.  Click Admin Console.
3.  In the Life Sciences Customer Engagement Setup page, click Account Management.
4.  In the navigation pane, click Data Change Request Validation Types.
5.  In the Data Change Request Validation Types Setup page, add record types for a specific country or for
all countries, and provide the validation type.
a. Select the type of the account.
For example, Person Account or Institution.
b. Select the country.
The default selection is All.
c. Select the validation type.
For example, Internal or External.
d. For internal validation, turn on Requires Approval to restrict the creation of records, either through
the related list or SBC, without approval.
If this option is disabled, it creates records but doesn't create a data change request.
e. For external validation, enter the name of the external validation system.
Uses OneKey by default. If your organization uses a OneKey contract, restrict external DCR
configuration (Record Types and Managed Fields) to only the regions supported by that contract.
Including unsupported regions can cause access issues and prevent DCR records from being
processed. In such cases, manually update the status of the DCR records for unsupported regions.
f. To add a specific country, click Add Country.
Adding a specific country is useful when you have different configurations for multiple countries.
6. Save your changes.
7. Similarly, set up Data Change Request validation types for the other objects as needed.

External Validation Requirements for Data Change Requests

<!-- page:137 -->



Prevent downstream OneKey rejections and rework by making sure your setup is aligned from the
start. Before enabling external validation for Data Change Requests, make sure your data model and
integration mappings meet specific requirements.


External Validation Requirements for Data Change Requests

Prevent downstream OneKey rejections and rework by making sure your setup is aligned from the start.
Before enabling external validation for Data Change Requests, make sure your data model and
integration mappings meet specific requirements.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure App Alerts:                             Life Sciences Commercial Admin


Supported Operations

External validation via OneKey supports Create and Update operations. Delete operations aren't
supported out of the box. If a delete request is submitted for external validation, the request is rejected
before it reaches the external provider. Handle the delete operation through manual data governance
processes or custom logic.

For the Create operation to succeed, follow this sequence:

- Create a business account. When creating a business account, make sure these objects and their
respective fields are created: Account, ContactPointAddress, HealthcareProvider, and
HealthcareProviderSpecialty.
-    After it’s approved, create a Person account associated with the business account. When creating a
Person Account, make sure these objects and their respective fields are created: Account,
ContactPointAddress, HealthcareProvider, HealthcareProviderSpecialty, and ProviderAffiliation.


Minimum Data Thresholds

To pass validation, records must meet specific minimum data thresholds. If these are missing, the Data
Change Request will be rejected before it reaches the external provider.

- A Person Account record must include at least one primary Provider Affiliation and one primary
Healthcare Provider Specialty.

<!-- page:138 -->



- A Business Account record must include at least one primary Healthcare Provider Specialty.
Only workplace-to-individual (Hard) affiliations are supported for Data Change Request syncing.


Mandatory External Managed Fields

Mandatory External Managed Fields for the Create operation to succeed:

- Account: Name, Phone, Fax, PersonGender, PersonMobilePhone, and PersonBirthdate
- ContactPointAddress: Name and Address
- HealthcareProvider: Name, Status, ProfessionalTitle, TotalLicensedBeds, ProviderType, and
ProviderClass
-    HealthcareProviderSpecialty: Name and SpecialtyId
-    ProviderAffiliation: Role, EffectiveStartDate, and EffectiveEndDate


Integration & Mapping (MuleSoft)

- Picklist Alignment: Each picklist value in Salesforce must have a corresponding mapping in your
MuleSoft transformation layer.
-    Failure Risk: If a user selects a value in Salesforce that isn't mapped, the Data Change Request will fail
with a Missing Fields error, even if the field itself is populated.


Create Life Science Data Change Definition Managed Fields

Managed fields determine which updates trigger a Data Change Request for supported objects. Creating
records for each object makes sure that changes to critical data are reviewed, validated, and approved
through the Data Change Request workflow.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Data Change Request           Life Sciences Commercial Admin
features and objects:


Create managed field records for all the supported Data Change Request objects: Account,
HealthcareProvider, HealthcareProviderNpi, HealthcareProviderSpecialty, ContactPointAddress,
ContactPointEmail, ContactPointPhone, ContactPointSocial, BusinessLicense, and ProviderAffiliation.

1. From the App Launcher, find and select Life Sciences Data Change Definition Managed Fields.

<!-- page:139 -->



2. Click New.
3. Enter the name of the record.
Use [object name_field name] format, for example, HealthCareProvider_SourceSystemIdentifier.
4. In the Life Science Data Change Definition field, select an object that it applies to.
For example, Account.
5. Enter the Field API name.
6. To apply the data changes immediately, select Apply Change Immediately.
This option is relevant when Default Settings is set to Apply changes to each field individually. It makes
sure that changes appear on the mobile app immediately and a DCR is created. If the changes are
later rejected by the approver, those changes are reverted on the mobile app after the next sync.
7. Select the validation type.
For example, select Internal or External. Make sure the validation type matches the one configured in
the validation types setup in the admin console.
8. If needed, search for and select the country.
9. Save your changes.


Approve or Reject a Data Change Request

Review and act on Data Change Requests submitted by users directly from the AFLS for
Customer Engagement app. Use the built-in Lightning component to create a new tab to approve or
reject a change request.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To approve or reject a Data Change Request:
Life Sciences Commercial Admin

Life Sciences Key Account Manager


1.    In Setup, search for Tabs and select it.
2.    In the Custom Tabs page, under the Lightning Component Tabs, click New.
3.    In the New Lightning Component Tab page, select lsc4ce:dataChangeListWithApproveReject.
4.    Enter the tab label.
5.    Enter the name of the tab.
6.    For Tab Style, click the Search icon, and select the style for the tab.
7.    Click Next.
8.    Choose the user profiles for which the new Lightning Component tab will be available. You may also
examine or alter the visibility of tabs from the detail and edit pages of each profile.

<!-- page:140 -->



By default, Apply one tab visibility to all profiles is enabled.
9. Apply for different tab visibility for each profile.
10. Save your changes.


Mobile App Configuration for Data Change Request

Configure database schema for the supported Data Change Request objects. Generate a metadata cache
to package the object scheme configuration into a downloadable metadata cache that the mobile app
uses for online and offline access.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Data Change Request             Life Sciences Commercial Admin
features and objects:


When you create database schema configurations for Data Change Request, make sure that you select
the type as mentioned in the table.


Object                                                  Type

DbSchema_LifeSciDataChangeDef                           Configuration

DbSchema_LifeSciDataChgDefRecType                       Configuration

DbSchema_LifeSciDataChgPersonaDef                       Configuration

DbSchema_LifeSciDataChangeRequest                       Data

DbSchema_LifeSciDataChgDefMngFld                        Data

DbSchema_UserAdditionalInfo                             Data

DbSchema_LifeSciCountry                                 Data


Important After you create these configurations, make sure to generate a metadata cache. This step
is important because it makes sure that the mobile app accesses the latest metadata definitions,
including any schema changes for supported objects.

<!-- page:141 -->




Lists and Filters

Use Lists and Filters to organize and prioritize accounts and associated data in the AFLS for
Customer Engagement app. Sales reps manage and refine large volumes of accounts into meaningful
segments, helping them to focus on accounts that align with specific criteria based on business priorities,
territory requirements, or engagement strategies.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license


Lists are static. Once you add accounts to a list, they remain there until you manually remove or add
more accounts. Filters are dynamic. They automatically update the results to show accounts that match
the defined criteria. For example, a filter that selects accounts by speciality shows only accounts that
belong to that speciality.

Users can create and refine lists and filters using specific criteria, such as account specialty, recent
interactions, or location by zip code. These lists can be saved and used to plan visits, schedule follow-ups,
or launch actions from the user's workflow. If needed, generate reports and export the data to a CSV file.


## Lists and Filters Data Model

Lists and Filters data model stores and makes data interoperable, helping users organize and prioritize
large volumes of account-related data.
Enable Actions for Lists
Give users access to perform various actions on lists: select multiple accounts, run actions on the
selected accounts, update actions for different accounts, and export lists to a CSV file.
Configure Filters
Give sales reps access to the available filter-related actions and features. Enable sales reps to create,
edit, and manage large volumes of account data to identify and focus on target accounts.
Configure Columns for Lists
Create a configuration set to define the fields and columns structure for Lists. Configure the fields that
appear as columns, the fields that support sorting, and the default filter columns available in the Life
Sciences Cloud for Customer Engagement app.
Account Search Preferences for Lists and Filters
Define account search preferences to control how accounts appear in the AFLS for
Customer Engagement app. Enable map view to let users view accounts, set default filters, and use
searchable fields to enhance their search results.
Mobile App Configuration for Lists and Filters
Create object metadata cache configuration for supported List and Filter objects. Generate a metadata
cache to make the feature available for users in the AFLS Mobile app.

<!-- page:142 -->




Lists and Filters Data Model

Lists and Filters data model stores and makes data interoperable, helping users organize and prioritize
large volumes of account-related data.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license


Object                                               description

LifeSciAccountListColumn                             Represents the information of the columns
selected from accounts or its supported direct
relationship objects in account filters.

LifeSciAccountListMember                             Represents information about account static lists
and routines.

LifeSciAcctListFilterCrit                            Stores the rules and conditions derived from the
Account object or its supported direct relationship
objects to filter Life Sciences accounts.

LifeScienceAccountList                               Represents the type of account lists, such as filter,
static list, and routine.

LifeScienceAccountListObject                         Represents the object that is referenced in the
provider account list.


Enable Actions for Lists

Give users access to perform various actions on lists: select multiple accounts, run actions on the
selected accounts, update actions for different accounts, and export lists to a CSV file.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license


USER PERMISSIONS NEEDED

To configure Lists and Filters:                       Life Sciences Commercial Admin

<!-- page:143 -->



1. From the App Launcher, find and select Admin Console.
2. Click Lists and Filters.
3. On the navigation panel, click Accounts List Actions.
4. From the Select Type field, select the profile that you want to apply this action to.
For example, you can assign a Medical Sales Representative profile if you want them to perform this
action.
5. In the List Export section, select Let users export account lists to CSV files.
Users can now see the option in the Lists and Filters settings.
6. Save your changes.


Configure Filters

Give sales reps access to the available filter-related actions and features. Enable sales reps to create, edit,
and manage large volumes of account data to identify and focus on target accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license


USER PERMISSIONS NEEDED

To configure Lists and Filters:                       Life Sciences Commercial Admin


- When you create Provider Account Territory Info (PATI) records, make sure you add this criteria for
Account to appear for Lists and Filters: the IsAvailableOffline field must be set to True, the preferred
address field can't be null, and the territory must be aligned to the current active territory.
-     A matching ObjectTerritory2Association record must exist where ObjectId is the accountId and
Territory2Id is the current active territory.

1. From the App Launcher, find and select Admin Console.
2. Click Lists and Filters.
3. On the navigation panel, click Filters.
4. In the Select Type field, select an option to control filter access.
5. In the Select Profile field, select a profile.
For example, you can assign a Medical Sales Representative profile if you want them to perform this
action.
6. In the General Settings section, enable the required checkboxes to customize filter behavior.
a. To let users create account filters, select Let users create account filters.
b. To let users share filters, select Let users share filters.
c. To let users search for and view shared accounts on the web, select Let users view and search
shared accounts.
d. To let users view and apply advanced filters, select Let users view Advanced Filters.
7. In the Available Fields section, define the fields that users can use when creating account filters.

<!-- page:144 -->



If no fields are defined, all fields the user has access to will be available by default.
8. To help users see the recommended accounts on the AFLS for Customer Engagement
mobile app, in the Next Best Customer Settings, select Let users view the next best customer filter.
9. To determine the default number of days to snooze an account, enter a number in the Days to Mute
field.
10. Save your changes.


Configure Columns for Lists

Create a configuration set to define the fields and columns structure for Lists. Configure the fields that
appear as columns, the fields that support sorting, and the default filter columns available in the Life
Sciences Cloud for Customer Engagement app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license


USER PERMISSIONS NEEDED

To configure Lists and Filters:                      Life Sciences Commercial Admin


1.    From the App Launcher, find and select Life Sciences Commercial.
2.    Click Admin Console, and then click Lists & Filters.
3.    On the navigation panel, click Accounts List.
4.    Click New.
5.    Enter a name for the accounts list configuration.
6.    Select the user profiles to which the configuration applies.
7.    Select the type of accounts list configuration.
a. Default: Shows aligned accounts.
b. Search: Shows all Accounts.
c. Static: Shows static lists and routines.

Note On mobile, the Default is applied to all accounts, and Static is used for lists. The Search
configuration type isn't supported on mobile.

8. Select the type of account this configuration is associated with.
For example, Person Account, Business Account, Institution, or Medical Professional.
9. Configure the columns for the list view.
a. Enter the field name using the Object Name.Field Name format to display it as the second column
in the list view.
b. Enter the field name using the Object Name.Field Name format to display it as the third column in
the list view.
c. Enter the field name using the Object Name.Field Name format to display it as the fourth column in
the list view.

<!-- page:145 -->



d. Enter the field name using the Object Name.Field Name format to display it as the fifth column in
the list view.
- Only field API names from these objects are supported: Account, HealthcareProvider,
ContactPointAddress, ProviderAcctTerritoryInfo, ContactPointPhone (Use de-normalized field in
HCP), ContactPointEmail (Use de-normalized field in HCP), ContactPointSocial (Use de-normalized
field in HCP), HealthcareProviderNpi (Use de-normalized field in HCP), HealthcareProviderSpecialty
(Use de-normalized field in HCP).
- If you don’t provide an object prefix, for example, ContactPointAddresses.Name, the system
assumes the field belongs to the Account object. For example, PersonEmail (query from Account);
ContactPointAddresses.Name (query from ContactPointAddress).
- You can also provide multi-level queries. For example,
ProviderAccountTerritoryInfoAccount.NextProviderVisit.ShippingAddress.Id will query
ContactPointAddressId.
- If you do not configure these columns in the additional search preferences section of Account
Management in the admin console, then the list will show these default columns: Column1:
Account Name and Address, Column2: Last Provider Visit, Column3: Target Value, Column4: Activity
Plan, Column5: Progress Bar.
- On mobile, only the two most recently created records for denormalized fields are displayed.
Additional values are grouped into a +N counter that tells how many more records exist beyond the
visible ones.
- On the web, only the three most recently created records for denormalized fields are displayed.
Additional values are grouped into a +N counter.
10. Select the checkbox to override the second column field with the previous and next visit details.
11. Select an option from the dropdown to override the fifth column field with the Activity Plan field.
The values in this dropdown are sourced from the Provider Activity Measure Type object.
12. In the Sort Column Field Set, select an option to sort column fields.
Select fields from the Provider Account Territory Information object. If the field set is empty, fields
available for filtering by default are: First Name, Last Name, Full Name, Address, State or Province, City,
Zip or Postal Code, Next Provider Visit Date, Last Provider Visit Date, and Specialty.
13. To activate the configuration, select Is Active.
14. Save your changes.


Account Search Preferences for Lists and Filters

Define account search preferences to control how accounts appear in the AFLS for
Customer Engagement app. Enable map view to let users view accounts, set default filters, and use
searchable fields to enhance their search results.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS and the AFLS for
Customer Engagement Add-On license

<!-- page:146 -->




USER PERMISSIONS NEEDED

To configure Lists and Filters:                      Life Sciences Commercial Admin


1. From the App Launcher, find and select Life Sciences Commercial.
2. Click Admin Console, and then click Account Management.
3. In the Account Management Setup page, click Account Search Preferences.
4. Select the Apply Settings To as Profile.
5. Select the profile.
6. Configure the Advanced Search Preferences section.
a. To enable the map view (AFLS Mobile app only) so users can visualize accounts on a map, select
Show accounts in a map view.
b. To improve the search results, select the default account type filters.
c. To help users find accounts with greater precision, select an additional field from the Provider
Account Territory Info record that can be used to search accounts with.
The field value is also shown in the search results.
d. To configure account record types available for filtering during search, select the required record
types and move them to Selected Values.
e. To align affiliated accounts, select Align affiliated accounts automatically after an account is
aligned with a territory.
7. Save your changes.


Mobile App Configuration for Lists and Filters

Create object metadata cache configuration for supported List and Filter objects. Generate a metadata
cache to make the feature available for users in the AFLS Mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure Lists and Filters:                      Life Sciences Commercial Admin


Configure object metadata cache configuration for these objects.


DataBase Schema Name                                 Type

Dbschema_LifeSciAccountListColumn                    Data

Dbschema_LifeSciAccountListMember                    Data

<!-- page:147 -->




DataBase Schema Name                                 Type

Dbschema_LifeSciAcctListFilterCrit                   Data

Dbschema_LifeScienceAccountList                      Data

Dbschema_LifeScienceAccountListObject                Data

Dbschema_Report                                      Data

Dbschema_Folder                                      Data

Dbschema_TerritoryAccountScore                       Data

Dbschema_ActivityPlan                                Data


Important Generate a metadata cache after you create these configurations. This step is critical to
make sure that the mobile app uses the latest metadata definitions, including any schema changes
for supported objects.



Next Best Action

Set up Next Best Action to equip your sales reps with AI-driven weekly action plans. Help your sales reps
achieve better time management and strategic engagement by recommending actions, such as visits,
meetings, and emails for accounts, in the optimal sequence.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add components to a record page:                  Customize Application


Before you set up Next Best Action, complete the following prerequisites.

- Configure First Day of Work Week in Planner.
- Activate the required trigger handlers:
- TerrAcctRcmdActionSharingHandler
- TerrAccRcmActStatusUpdateHandler
- Create a standard user with the Field Sales Representative profile.
- Make sure that the standard user has access to the required Apex classes:
- lsc4ce.LogACallController
- lsc4ce.NextBestActionsController

<!-- page:148 -->




## - lsc4ce.VisitCreationCallbackController

- Create a metadata cache for the profile.
- Create a territory.
- Create a user with the Field Sales Representative profile.
- Assign these permissions to the user:
- Industries Visit
- Life Sciences Commercial User
- Life Sciences Field Sales Representative
- AFLS Rep
- Create Territory Account Recommended Action (TARA) records.
Note You can create the TARA records of type Visit and Email. The Email type TARA records apply
only to the mobile app.



## See Also

Trigger Handler Administration


Add Life Sciences Next Best Action Component to Account Record Page

Show sales reps recommended actions, which they can use to create visits or send emails directly from
an account record page.




1. On an account record page, click          , and then select Edit Page.
2. From the Components pane, in the Search field, enter Next Best Actions.
3. Drag and drop the Life Sciences Next Best Actions component from the left pane to the Dashboard
tab on the record page.
4. Save your changes.
5. Activate the page.


Next Best Customer

With the Next Best Customer scores, your field reps can identify the highest priority accounts for their
next engagement. Next Best Customer leverages user-configured data, such as engagement history and
territory alignment, to rank the accounts that are most likely to respond, so your reps can maximize the
impact of each interaction.

Show your users a prioritized set of accounts in the Next Best Customer component on the Life Sciences
Cloud for Customer Engagement home page. Users can also easily see the recommended accounts by
filtering with Next Best Customer in the Account list view and on the Calendar tab.


## Set Up Next Best Customer

To help your sales reps understand and work with the top accounts in their territory, set up the Next

<!-- page:149 -->



Best Customer component, quick actions, and scores.
Account Scores and Rationales for Next Best Customer
Use the Score Explainability Information field on Territory Account Score records to define how
rationales appear in the Next Best Customer component. The Score Explainability Information field
stores a JSON containing the store explainability details for a Next Best Customer (NBC) score. The
JSON structure allows you to show multiple reasons per category and optionally include a Salesforce
chart for a visual representation of the data.


Set Up Next Best Customer

To help your sales reps understand and work with the top accounts in their territory, set up the Next Best
Customer component, quick actions, and scores.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Set Up Next Best Customers Component

Configure the Life Sciences Next Best Customers component to show prioritized accounts with clear
scoring, intuitive rationale explanations, and rich account insights on the AFLS for
Customer Engagement home page.
Configure Next Best Customer Settings for Mobile App
Customize the required settings for the Next Best Customer components in the AFLS
mobile app.
Set Up the Data Required for Next Best Customer
Configure the data required to show accounts on the Next Best Customer component and support
account score calculations.


## See Also

Get Help for Lightning App Builder


Set Up Next Best Customers Component

Configure the Life Sciences Next Best Customers component to show prioritized accounts with clear
scoring, intuitive rationale explanations, and rich account insights on the AFLS for
Customer Engagement home page.


**REQUIRED EDITIONS**


Note If you’ve already added the NbcTopResults component to your home page, remove it before

<!-- page:150 -->




adding the Life Sciences Next Best Customers component.

Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure the Next Best Customer component,       Life Sciences Commercial Admin permission set
actions, and scores:


1. Create a card-view type relationship graph using the NBC Card template. You can use the prebuilt
graph as is or customize it according to your business needs.
2. Add the Life Sciences Next Best Customers component to the home page by using Lightning App
Builder. See Customize the Home Page.
3. Update the component properties.
a. For Graph Name, select the name of the card-view type relationship graph.
b. For Total Cards, enter the number of cards you want to show on the home page. Enter a value from
5 through 10.


## Customize Next Best Customer Card

Customize the record details you want to show on the next best customer card by defining the
relationships between account-related objects using an actionable relationship center (ARC) graph.
Configure Quick Account Summary
Add quick account summary to the Next Best Customer card so users can evaluate account
recommendations at a glance, eliminating the need to navigate to rationale pages.


Customize Next Best Customer Card

Customize the record details you want to show on the next best customer card by defining the
relationships between account-related objects using an actionable relationship center (ARC) graph.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure a next best customer card:              Life Science Commercial Admin permission set


1. From Setup, in the Quick Find box, find and select Actionable Relationship Center.

<!-- page:151 -->



2. Create a relationship graph.
a. Click New Relationship Graph.
b. Create a graph from scratch or select the NBC Card template, and then click Create Graph.
c. In the properties pane, enter a unique label for the graph.
The API name is automatically populated.
d. Add or modify source objects in the graph view, if required.
e. For Graph Type, ensure that Card View is selected.
3. Configure the card layout.
a. From the top left corner of the page, select Switch to Card.
If you're creating the graph using the NBC card template, a default section with three preconfigured
elements appears. You can customize these elements and apply visibility conditions as needed.
b. To display additional information on the Next Best Customer card, create a section and enter a
section display text.
c. To display record details in the section, click Add Element.
You can add up to three elements in a section.
d. To control the space an element occupies in a row, use the Column Span field.
Each row in a section is divided into 12 columns. If the column span is set to 12, the element
occupies the entire row. If the combined column span of multiple elements equals 12, those
elements appear in the same row.
e. Select the alignment for item group elements. You can align item groups vertically or horizontally.
f. Use the Item Alignment field to control how items in an element are aligned relative to other
elements in the same row. For example, selecting Top aligns the element to the top of the row when
displayed alongside other elements.

Note Item alignment can’t be previewed in the card builder.

g. Customize the font size and choose whether you want to apply bold style for each item in an
element.
4. Save your changes.


Note Distance information is included in the NBC Card template by default but it can’t be
previewed in the card view. If you’re creating the graph from scratch, you can’t add distance
information to the Next Best Customer card.

Note In addition to these customizations, you can also apply all other customizations described in
Customizing a Provider Card because the next best customer card and provider card use the same
card customization framework. Consequently, you can apply the configurations explained in this
topic to Provider Card.


Configure Quick Account Summary

Add quick account summary to the Next Best Customer card so users can evaluate account
recommendations at a glance, eliminating the need to navigate to rationale pages.

<!-- page:152 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Before you add a quick summary to the Next Best Customer card, create a custom field for an account-
related object.

1.    From Setup, in the Quick Find box, find and select Actionable Relationship Center.
2.    Edit the NBC Card template, and click Switch to Card.
3.    Add a new element or select an existing element to add the custom field.
4.    Click Add Field.
5.    For Source Object, select the object that you've created a custom field for.
6.    For Source Field, select the custom field.
7.    Optionally, select the font size.
8.    For quick rationale summaries, provide your own data or use Agentforce for Account Summarization.


Configure Next Best Customer Settings for Mobile App

Customize the required settings for the Next Best Customer components in the AFLS
mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure the Next Best Customer component,       Life Sciences Commercial Admin permission set
actions, and scores:


Configure Sorting and Rationale Display Settings

Customize the sorting and rationale display settings for the Next Best Customer components in the Life
Sciences Cloud mobile App.

1. From the App Launcher, find and select Admin Console.
2. Select Next Best Customer, and then select Next Best Customer Setting.
3. For Apply Settings To, select whether you want to apply the settings to all the profiles in your org or to

<!-- page:153 -->



a specific profile.
- To apply the settings to all the profiles in your org, select SOrg Default.
- To apply the settings to a specific profile in your org, select Profile.
4. Configure the Next Best Customer Sorting settings.
- Select whether you want to allow sorting of top customers by distance.
- Enter the account score threshold value that determines the number of top customers shown on
the component. This value defines the number of accounts available for distance-based sorting, so
that only this subset of top-scored accounts is sorted by proximity to ensure low-priority accounts
don't surface just because they are nearby.
Distance-based sorting applies only to accounts with geolocation data.
5. Select whether you want to show the rationale as a standard Salesforce chart on the Life Sciences
Cloud mobile app.

To ensure accounts are accurately sorted by distance, geolocation data must be captured for primary
address or preferred address. Distance is calculated from an account’s preferred contact point address to
the user’s real-time location. If the account doesn't have a preferred address, the distance is calculated
from its primary contact point address. To update the geolocation data, activate data integration rules on
the Contact Point Address object, which uses the Google Maps API to determine latitude, longitude, and
accuracy. Alternatively, you can manually update the data by selecting Check for New Data from the
record’s action menu. For accurate distance calculations, ensure users have their device’s location
services enabled.


Enable Field History Tracking for Total Score

To display the account score history changing chart on the mobile app, enable field history tracking for
Total Score of the Territory Account Score object. Whenever a user modifies Total Score field, its old and
new field values are added to the History related list as well as the date, time, nature of the change, and
user making the change.

1.   From Setup, click Object Manager and then select Territory Account Score.
2.   Select Fields & Relationships, and then select Set History Tracking.
3.   In the Track old and new values section, enable Total Score.
4.   Save your changes.


Configure Quick Actions

Create quick actions with Next Best Customer as the location to allow users to perform actions directly
from the Life Sciences Next Best Customers component.

For instructions on how to create a custom quick action, see Quick and Custom Action Management.


Enable Predefined Next Best Customer Filter

Give your users access to Next Best Customer filter-related actions by making the predefined filter
available on the Account Search.

<!-- page:154 -->



For instructions on how to enable the Next Best Customer filter, see Configure Filters.


Set Up the Data Required for Next Best Customer

Configure the data required to show accounts on the Next Best Customer component and support
account score calculations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure the Next Best Customer component,       Life Sciences Commercial Admin permission set
actions, and scores:

To create and save Lightning pages in Lightning      Customize Application
App Builder:


1. Create Territory Account Score records for each combination of account and territory.
2. On each Territory Account Score record, update the Score Explainability Information field with the
metrics and data that the Next Best Customer logic uses to calculate account scores. See Account
Scores and Rationales for Next Best Customer.
3. To make sure that users can see the recommended accounts in their territories, grant access to
Territory Account Score records in one of these ways.
- Share Territory Account Score records with users manually.
- Create owner-based sharing rules for Territory Account Score. To specify which users’ records are
shared and the users who get access to the data, select Territories.


Note To maintain the accuracy of distance-based sorting within the Top Next Best Customers
component, ensure geolocation data is captured for all accounts.


Account Scores and Rationales for Next Best Customer

Use the Score Explainability Information field on Territory Account Score records to define how rationales
appear in the Next Best Customer component. The Score Explainability Information field stores a JSON
containing the store explainability details for a Next Best Customer (NBC) score. The JSON structure
allows you to show multiple reasons per category and optionally include a Salesforce chart for a visual
representation of the data.

<!-- page:155 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

Note If you’re using Next Best Customer from the Winter’26 release, you can continue to use the
existing JSON structure in the Score Explainability Information field.


You can configure the display of categories, scores, reasons, and charts in the Next Best Customer
component by using the JSON structure. The JSON contains one top-level array rationals.


{
"rationals": [ ... ]
}


Each item in the rationals array represents one metric that contributes to the overall NBC score, for
example: Activity Plan, Digital Engagement, Sales Data, or Territory Changes.


Field                                                    Description

Identifies the scoring category this rationale
Category
belongs to.

(Optional) The numeric contribution of this
Score
category to the overall NBC score.

(Optional) Human-readable explanations
Reasons
describing why this score was assigned.

(Optional) Embedded report references used to
Charts
visualize supporting data


Category

"category": "{ActivityPlan}"


- Represents the scoring dimension or rule group used in the NBC logic.
- When the category value is wrapped in braces, it references a custom label to support localization and
translation. If braces aren't used, the value is treated as a literal string.
-    Used to group insights and display category headers.

<!-- page:156 -->




Score (Optional)

"score": 70


- Indicates the score contribution for a category.
- Represents the weighted score for each metric used in the scoring logic.
- Helps users understand the relative impact across categories.
- Score percentage is calculated by dividing category score by total category score. The Total Score field
isn't used for calculating the percentage.

-        Note Category scores are exclusive to the AFLS mobile app and are not displayed
on the web app.


Reasons (Optional)


## "reasons": [

"Dr. Lydia Jones was recently added to the territory",
"Only 3 of 10 planned visits completed within this cycle.",
"Coverage is currently at 30%, below the expected pace."
]


- A list of plain-language explanations describing the factors influencing the score.
- Multiple reasons can be added for a single category to give more context.

Charts (Optional)

"charts": [
{
"type": "salesforce",
"id": "00Ofic000000OWHEA2",
"reportName": "Activity Plan Progress Report no Product",
"label": "Activity Plan Progress",
"showRefreshButton": true
}
]



- A visual representation of data to support the rationale.
- Rendered as embedded reports on the Next Best Customer component.
- Only two charts can shown on the Next Best Customer component. If more than two components are
configured, only the first two charts are shown.

<!-- page:157 -->




-        Note The charts functionality is currently exclusive to the Life Science Cloud mobile app.


Chart Attribute                                        Description

The type of the chart. Currently only Salesforce
type
charts are supported.

The ID of the Salesforce report used to retrieve
id
the data for the rationale.

reportName                                             The internal name of the Salesforce report.

label                                                  The title of the chart.


## Determines whether users can refresh the chart

showRefreshButton                                      data. When set to true, the Refresh and View
Report actions are available on the chart.


Example

{
"rationals": [
{
"category": "{ActivityPlan}",
"score": 70,
"reasons": [
"Dr. Lydia Jones was recently added to the territory in the latest realign
ment.",
"Only 3 of 10 planned visits completed within this cycle.",
"Coverage is currently at 30%, below the expected pace."
],
"charts": [
{
"type": "salesforce",
"id": "00Ofic000000OWHEA2",
"reportName": "Activity Plan Progress Report with Product",
"label": "Activity Plan Progress",
"showRefreshButton": true
}
]
},
{
"category": "Digital Interactions",
"score": 50,
"reasons": [],
"charts": []

<!-- page:158 -->




}
]
}




Provider Cards for Life Sciences

Provider Cards in AFLS consolidates an account’s information that’s scattered across
various objects and fields, such as the provider’s locations and specialties and the user’s scheduled visits,
and displays it all in a one place on the mobile. You can choose which records to show in the card. To
create provider cards, you can use the predefined template or create them from scratch.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

Note Provider Cards are displayed only in the mobile interface.


To enable users to access Provider Cards in offline mode in the mobile app, create object metadata
cache configurations of type Data for these objects.

- Account
- Healthcare Provider
- Contact Point Address
- Business License
- Contact Point Best Contact Time
- Provider Account Territory Information
- Healthcare Provider Specialty
If you add objects to your card, create object metadata cache configurations for the addition objects.


## ARC Components for Provider Card

Provider Cards help you get a head start on configuring cards by providing a provider-specific template
and a builder where you can choose how you want to render the card interface at run-time.
Nodes and in Retrieval Limits in Provider Cards
Find out about how nodes and retrieval limits are used in the card interface.
Configure a Provider Card
To capture the record details that you want to show in the provider card, define the relationships
between the account-related objects in an actionable relationship center (ARC) graph. Get started by
using the Provider Card template, which includes a customizable graph with nodes related to

<!-- page:159 -->



commonly used objects. You can also create a graph from scratch.
Add a Provider Card to a Record Page
Help users access the provider card on the account tab in the iPad.
Customizing a Provider Card
Explore the different ways in which you can showcase your account’s information by configuring pills,
repeaters, or a combination of both. Configure pills to display information only when it’s available.
Also, customize the information displayed within a repeater by configuring pills or text blocks. Choose
to display the card’s sections, elements, and items by configuring the visibility criteria for each
component. Make sure your users always have the relevant information at hand by configuring the
visibility conditions to dynamically display data from preferred sources or alternate sources if the
preferred source isn’t populated.


## See Also

Create Object Metadata Cache Configuration


ARC Components for Provider Card

Provider Cards help you get a head start on configuring cards by providing a provider-specific template
and a builder where you can choose how you want to render the card interface at run-time.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Graph Components for Cards

Here’s a list of components in the ARC graph that support the provider card.

- Provider Card Template: A predefined, customizable graph with 10 nodes that capture information
related to records of the following objects:
- Account
- Healthcare Provider
- Contact Point Address
- Business License
- Contact Point Best Contact Time
- Provider Account Territory Information
- Healthcare Provider Specialty
-    Card View graph type: A card-specific graph type that displays the Switch to Card button, through
which you can access the card builder.
-    Record Retrieval Limit: Helps you select the maximum number of records to fetch for a node.

<!-- page:160 -->



- Switch to Card and Switch to Graph buttons: To help you easily toggle between the graph and the card
builder.


Card Builder

Provider Cards supports a card builder that consists of sections, elements, and items. Each section is
made up of elements, while each element is made up of individual items.

Here's a breakdown of the provider card's interface.

- Sections store information about an object’s related records, such as information about the provider's
specialties, ratings, preferred address, best time to contact the provider, etc.
-    Elements help you configure the display of record details specific to a section. Choose how you want
to show each element type by using pill groups or repeaters. You can add multiple elements within a
section.
- Items represent fields, separators, and display texts. In pill groups, you can represent fields and add a
label for the field by using display texts. In repeaters, you add multiple fields that are linked by
separators.
-    A pill group contains an assortment of pills from multiple data sources (node objects). Each pill can
display a text or show information about a field.
-    A repeater displays multiple records belonging to the same data source (node object) in a series.
Within a repeater, you can further display your data by using a pill or a text block.


## See Also

Create a Custom ARC Relationship Graph


Nodes and in Retrieval Limits in Provider Cards

Find out about how nodes and retrieval limits are used in the card interface.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Nodes

- Nodes represents objects in the ARC graph. A root node is the primary node in the ARC graph. A root
node can have several child nodes. Child nodes have a lookup to the root node.
-    You can add any object to the root node but you can add the ARC Relationship Graph Lightning App
Builder component only on the record page of the object that you select as the root node. To
configure cards in AFLS, the root node must be the account object, and the card must

<!-- page:161 -->



be added to the account’s record page.
-    A key difference between a pill group and a repeater is that a repeater fetches records (data fields)
from only one node (source object) in an element, whereas pill group can fetch records from multiple
nodes in an element. For example, in a repeater element, you fetch the specialty name, effective start
date, and the date of creation of a healthcare provider’s specialty. In a pill group element, you fetch
data about whether the account is a target account (Provider Account Territory Information’s Targeted
Account field), key opinion leader (Healthcare Provider’s Classification field), and speaker (Healthcare
Provider’s Speaker field).


Retrieval Limits

- The record retrieval limit indicates the maximum number of records that you can fetch for a node and
whether you can use operators for your elements. The retrieval limit also determines whether you can
use a pill group or a repeater.
- The record retrieval limit is only available for graphs of type Card View.
- The record retrieval limit doesn’t apply to the root node of a graph, as the graph automatically retrieves
the record details of the record page it is added to.
-    The pill group can only be applied to the root node and nodes that have the record retrieval limit of 1.
The repeater can be applied to records of all nodes, irrespective of the retrieval limit.
-    For field items in a pill group type element, you can add visibility conditions for all nodes, regardless of
the retrieval limit. However, if the node has retrieval limit of none or more than 1, you can only check
whether records were fetched.
-    You can use operators to add filter conditions only if the node has a retrieval limit of 1. If a node
doesn’t have a record retrieval limit or the limit is more than 1, you can only check whether records
were fetched at a section, element, or item level.


Configure a Provider Card

To capture the record details that you want to show in the provider card, define the relationships
between the account-related objects in an actionable relationship center (ARC) graph. Get started by
using the Provider Card template, which includes a customizable graph with nodes related to commonly
used objects. You can also create a graph from scratch.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure a provider card:                         Life Science Commercial Admin permission set

<!-- page:162 -->



1. From Setup, in the Quick Find box, find and select Actionable Relationship Center.
2. Create an ARC graph.
a. Click New Relationship Graph.
b. Create a graph from scratch or apply the provider card template, and click Create Graph.
c. In the properties pane, enter a label for the graph.
The API name is automatically populated.
d. For the graph type, select Card View.
The Switch to Builder button appears.
e. Add nodes to the graph as needed.
You can add the same node object multiple times. To differentiate between them, customize their
display labels in the graph's Display tab.
f. For Record Retrieval Limit, enter the maximum number of records to fetch for a node.
To understand how retrieval limits affect your graph, see Nodes and Retrieval Limits in Provider
Cards.
3. Configure the card interface.
a. From the top left corner of the page, select Switch To Card.
b. Create a section, and add a section header label.
c. To display record details in the section, click Add Element.
You can add more than one element to a section.
d. To display the record details, select a pill group or a repeater.
- Use a pill group to combine attributes from multiple data sources. You can configure a pill group
only for nodes that have a record retrieval limit of 1.
- Use a repeater to display multiple records that belong to the same node object. You can include a
pill or a text block in a repeater.
4. Configure the card's visibility. See Set the Visibility Conditions for Provider Card Component
You can't configure visibility conditions for items in a repeater.
a. To configure the visibility conditions for sections and elements, select the section or element, and
go to the Visibility Conditions tab.
The visibility conditions for pill group items are on the Properties tab.
b. Click Add Condition.
c. Select the node object and field that you want to display, and select an operator.
d. Enter the condition logic.
5. Save your changes.

Next, you add the ARC Relationship Graph Lightning App Builder component to the record page of the
object that you configure as your root node.


Add a Provider Card to a Record Page

Help users access the provider card on the account tab in the iPad.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:163 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add the provider card to a record page:             Life Science Commercial Admin permission set


1. From the App Launcher, find and select the Account record.
2. In the top-right corner, click     and select Edit Page.
3. Move the Actionable Relationship Graph component onto the record page.
If you create a graph with a root node of your choice, make sure you add the ARC Relationship Graph
Lightning App Builder component to the root node’s record page.
4. In the properties pane, enter a label for the graph.
5. For Graph Name, select the label of the graph.
6. Create a filter for the card to appear only in the mobile.
a. In the Set Component Visibility section, click Add Filter.
b. Select Device as the filter type.
c. In Field, select Form Factor.
d. In Operator, select Equals.
e. In Value, select Phone.
f. Save your changes.


## See Also

Add ARC Relationship Graph Component to Record Pages


Customizing a Provider Card

Explore the different ways in which you can showcase your account’s information by configuring pills,
repeaters, or a combination of both. Configure pills to display information only when it’s available. Also,
customize the information displayed within a repeater by configuring pills or text blocks. Choose to
display the card’s sections, elements, and items by configuring the visibility criteria for each component.
Make sure your users always have the relevant information at hand by configuring the visibility conditions
to dynamically display data from preferred sources or alternate sources if the preferred source isn’t
populated.


## Display Multiple Object Fields in a Provider Card

A repeater displays individual field details of a node object in the same element in the form of a pill or
a text block. For example, configure multiple fields of the Healthcare Provider Specialty, such as
Specialty Name, Specialty Role, Effective From, Effective To, and so on.
Set the Visibility Conditions for Provider Card Components
Configure the provider card by using visibility conditions for sections and elements. Show boolean
records by configuring the visibility of text items and field items.
Show Preferred and Alternate Fields in a Provider Card by Using Visibility Conditions
Configure a provider card to dynamically show data from alternative sources when a preferred field

<!-- page:164 -->



isn’t populated. For example, make the Healthcare Provider object’s Provider Type field your
preference, but if the field isn’t populated, the card dynamically shows your selected alternate field
source, such as the Specialty Role field in the Healthcare Provider Specialty.


## See Also

Get a Quick Snapshot of an Account


Display Multiple Object Fields in a Provider Card

A repeater displays individual field details of a node object in the same element in the form of a pill or a
text block. For example, configure multiple fields of the Healthcare Provider Specialty, such as Specialty
Name, Specialty Role, Effective From, Effective To, and so on.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add repeaters to a provider card:                 Life Science Commercial Admin permission set


Configure Repeaters By Using Pills

Display multiple record details by using repeaters of type Pill.

1. From Setup, in the Quick Find box, find and select Actionable Relationship Center.
2. Edit the provider card template, and click Switch to Card
3. Create a section, and enter a name for the section.
4. Create an element, and select Repeater as the element type.
5. Select the source object, for example, the Healthcare Provider Specialty object.
6. For the display type, select Pill.
7. Add the fields to include in a pill.
a. Click Add Field, and then select a source field.
For example, select the Specialty Name field
b. Select a separator.
c. Continue adding the fields that you want to include.
For example, select the Specialty Role field.
8. Save your changes.

<!-- page:165 -->




Configure Repeaters By Using Text

Render multiple records in a text block by configuring repeaters of type Text.

1.    From Setup, in the Quick Find box, find and select Actionable Relationship Center.
2.    Edit the provider card template, and click Switch to Card
3.    Create a section, and enter a name for the section.
4.    Create an element, and select Repeater as the element type.
5.    Select the source object, for example, the Healthcare Provider Specialty object.
6.    For the display type, select Text.
7.    Add the fields to include in a text.
a. Click Add Field, and then select a source field.
For example, select the Specialty Name field
b. Select a separator.
c. Continue adding the fields that you want to include.
For example, select the Specialty Role field.
8. Save your changes.




Set the Visibility Conditions for Provider Card Components

Configure the provider card by using visibility conditions for sections and elements. Show boolean
records by configuring the visibility of text items and field items.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To use pill groups in the card builder:              Life Science Commercial Admin permission set


Add Visibility Conditions for Sections and Elements

1. From Setup, in the Quick Find box, find and select Actionable Relationship Center.
2. Edit the provider card template, and click Switch to Card
3. Add a visibility condition for a section.
For example, display a section named Account Details only when the account name is valid.
a. Click Add Section, and enter a section label.
For example, enter Details.

<!-- page:166 -->



b. On the Visibility Conditions tab, click Add Condition.
c. Select the node object and related field, such as Account and Account Name.
d. Configure operators to define the section's visibility condition.
For example, select Is Not Null.
4. Add a visibility condition for an element.
For example, display an element only when the account is active.
a. Click Add Element, and enter an element label.
b. On the Visibility Conditions tab, click Add Condition.
c. Select the node object and related field, such as Account and Active.
d. Configure operators for the element’s visibility condition.
For example, select Equals, and select True.





## Configure Boolean Records with Pill Group Item Visibility

Display a boolean record in two ways. Configure different display texts for each the boolean value. Or,
display the field and add Yes or No values according to the boolean value.

You can add visibility conditions only for items that are part of a pill group. However, you can add
visibility conditions for the element and the section that contain the repeater.

1.     From Setup, in the Quick Find box, find and select Actionable Relationship Center.
2.     In the provider card’s graph, click Switch to Card.
3.     Create a section, and add a Pill Group element.
4.     Configure separate display texts for each the boolean value.
a. Click Add Display Text, and enter the text to display when the boolean value equals Yes.
For example, enter Dispenses Medication.
b. Configure when the display text item is displayed. Click Add Condition.
c. Select the record’s source object and field, such as Healthcare Provider and Dispenes Medication.
d. Configure operators to define the display text's visibility.
For example, select Equals and True.
e. Save your changes.
f. Configure the boolean value when the source field’s operator equals false.
For example, create a display text item called Doesn’t Dispense Medication, and add the visibility
conditions.
5. Display the field and add Yes or No values according to the boolean value.
a. To configure the label to display on the card, click Add Display Text, and enter the label that
represents the boolean field.
For example, enter Speaker?.
b. To display boolean values, click Add Display Text, and enter a value, such as Yes.
c. Configure the condition for the item to be visible, click Add Condition.
d. Select the record’s source object and field, such as Healthcare Provider and Speaker.
e. Configure operators to define the display text's visibility.
For example, select Equals and True.
f. Save your changes.

<!-- page:167 -->



g. Similarly, configure the boolean value when the source field’s operator equals false.



Show Preferred and Alternate Fields in a Provider Card by Using Visibility Conditions

Configure a provider card to dynamically show data from alternative sources when a preferred field isn’t
populated. For example, make the Healthcare Provider object’s Provider Type field your preference, but if
the field isn’t populated, the card dynamically shows your selected alternate field source, such as the
Specialty Role field in the Healthcare Provider Specialty.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add visibility conditions:                        Life Science Commercial Admin permission set


By default, the provider card displays a provider’s preferred address based on the Provider Account
Territory Info record. However, if the record’s Preferred Address field isn’t populated, the card shows the
preferred address in the Contact Point Address field.

1. From Setup, in the Quick Find box, find and select Actionable Relationship Center.
2. Edit the provider card template, and click Switch to Card
3. Create a section, and enter a section name.
4. Add the preferred field.
a. In Element Type, select Pill Group, and add a field item.
b. Select the source object and source field.
For example, select Healthcare Provider as the object, and select Provider Type as the field.
c. On the element’s Visibility Conditions tab, select the object and field, and set the operation to Is
Not Null.
5. Add the alternate field.
a. In Element Type, select Pill Group, and add a field item.
b. Select a source object and field that represents your alternate data source.
For example, select Healthcare Provider Specialty as the object and select Specialty Role as the field.
c. On the element’s Visibility Conditions tab, select the object and field, and set the operation to Is
Null.
6. Save your changes.

<!-- page:168 -->




Ratings

Ratings help prioritize and organize customer accounts into meaningful segments. Sales reps can use
ratings to focus on the right customers, align on relevant accounts, and adjust strategies for maximum
efficiency.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Supported Rating Segments

Configure Ratings on different objects to match how sales reps work and where segmentation delivers
the most value. Sales reps view these rating segments directly in the AFLS for Customer
Engagement app:

- General (Account): Displays all fields configured at the account level and applies to all user profiles
linked to an account.
-    Product (Provider Account Product Info): Displays ratings of individual products linked to an account
for product-level targeting. Helps users understand a product's association to an account by showing
key rating information about it.
-    Territory (Provider Account Territory Info): Displays territory-specific ratings linked to an account. Helps
users view territory-specific product preferences or scores aligned with the account’s assigned territory.
-    Team (Provider Account User Group Info): Displays team-specific product ratings that helps users to
see preferences or scores based on the group they belong to.
-    Address (Contact Point Address): Displays location-specific ratings based on where a healthcare
provider operates. Helps users view the account’s location-specific ratings when an address exists. The
default address is sourced from either the ProviderAcctTerritoryInfo object or the primary address on
the Account.


Supported Rating Segments

Configure Ratings on different objects to match how sales reps work and where segmentation delivers
the most value. Sales reps view these rating segments directly in the AFLS for Customer
Engagement app:

- General (Account): Shows all the fields configured at the account level and applies to all the user
profiles linked to an account.
- Product (Provider Account Product Info): Shows ratings of individual products linked to an account for
product-level targeting. Helps users understand a product's association to an account by showing key
rating information about the product.

<!-- page:169 -->



- Territory (Provider Account Territory Info): Shows territory-specific ratings linked to an account. Helps
users view territory-specific product preferences or scores aligned with the account’s assigned territory.
- Team (Provider Account User Group Info): Shows team-specific product ratings that helps users to see
preferences or scores based on the group they belong to.
-    Address (Contact Point Address): Shows location-specific ratings based on where a healthcare provider
operates. It helps users quickly view and assess an account's ratings for a particular location. The
default address is sourced from either the ProviderAcctTerritoryInfo object or the primary address on
the Account.


Visibility and Access Control

Control the visibility of specific ratings by setting permissions based on user roles and profiles. This
flexibility enables sharing a single layout across multiple user profiles while ensuring users see only the
ratings they are authorized to access. This access control method helps maintain data security and
supports targeted user actions.


## Create a Ratings Layout

In the AFLS for Customer Engagement web and mobile app, rating layouts visually
represent ratings on an account's record page. Create a rating layout and add rating fields at various
levels, including account, territory, product, team, or address. These layouts make sure that users see
only the ratings relevant to their role and permissions.
Add Ratings Layout to the Account Record Page
Show visual insights about account activity by adding the ratings layout to healthcare professional
(HCP) and healthcare organization (HCO) accounts. Embed the Ratings component to the custom tab
in the Lightning page and link it to the configured layout.
Mobile App Configuration for Ratings
Create object metadata cache configuration for supported Ratings objects in the Life Sciences for
Customer Engagement mobile app. Generate a metadata cache to package the object metadata
cache configuration into a downloadable metadata cache that the mobile app can use for online and
offline access.


Create a Ratings Layout

In the AFLS for Customer Engagement web and mobile app, rating layouts visually
represent ratings on an account's record page. Create a rating layout and add rating fields at various
levels, including account, territory, product, team, or address. These layouts make sure that users see
only the ratings relevant to their role and permissions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:170 -->




package.


USER PERMISSIONS NEEDED

To set up and configure Ratings:                       Life Sciences Commercial Admin


1.    From the App Launcher, find and select Life Sciences Commercial.
2.    Click Admin Console
3.    In the Life Sciences Customer Engagement Setup page, click Ratings.
4.    On the Ratings Layouts page, click New Layout.
5.    Enter the name for your layout, and click Create.
6.    Enter the details for a new rating.
a. In the layout builder, click  next to the Ratings label.
b. From the dropdown list, select the object the rating applies to.
For example, Account, Territory, Product or Team.
Note For team-based ratings, if a user belongs to multiple groups, you can ensure a specific
group's ratings remain visible by populating the PrimaryUser field in the UserAdditionalInfo
object.

c. In the Display Type section, choose how the rating should appear on the layout.
Based on your selection, a dialog box shows additional options, such as Field, Show Percentage
Change, Ranges, or Format.
d. Complete the required fields, including the source field and a custom name for the rating.
e. Save your changes.
7. Add fields from the selected object to the ratings layout.
a. To add the fields to the layout, click the available fields listed under the Ratings section in the pane.
b. On the layout canvas, drag and position the rating cards on the layout as needed.
c. Hover over the rating card and click    to adjust its size.
d. When you add product ratings, they appear grouped under the Ratings column at the bottom. The
layout supports one column per product.
Similarly, drag and arrange team ratings within the appropriate column in the layout.
8. Reorder columns within the ratings card.
a. Hover over the section you want to rearrange.
b. Click   .
c. Drag the columns to reposition them as necessary.
d. To close the configuration pane and return to the layout builder, click     .
9. To remove a rating from the layout, click         on the rating card.
10. Save your changes.

The layout is created in the admin console. Next, configure object schema to activate supported objects
for Ratings and generate a metadata cache to make this layout available in the mobile app.


Add Ratings Layout to the Account Record Page

Show visual insights about account activity by adding the ratings layout to healthcare professional (HCP)

<!-- page:171 -->



and healthcare organization (HCO) accounts. Embed the Ratings component to the custom tab in the
Lightning page and link it to the configured layout.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up and configure Ratings:                     Life Sciences Commercial Admin


1. From the App Launcher, find and select Accounts.
2. In the Accounts list view page, click the name of the HCP or HCO account.
3. To edit the page layout, click the    icon, and then click Edit Page.
The Lightning App Builder opens.
4. Click the section where you want to add a Ratings tab.
The Properties pane opens on the pane.
5. Click Add Tab.
6. After the new tab is added, click the tab to customize it.
a. Select tab label as Custom.
b. Enter a custom label. For example, Ratings.
c. Click Done.
7. From the Components pane, in the Search field, enter the name of the Lightning component.
8. Drag the Ratings component to the page layout.
Customize the record page layout by dragging components to rearrange them within the page.
9. Add properties to the Ratings component.
a. Click the Ratings component you added earlier.
b. In the Properties pane, from the dropdown, select the layout you created.
c. Select Group Product Ratings by Detail Type.
10. Save your changes, and then click Activation.
11. In the Activation window, select whether to Assign or Remove your org as default, and follow the
prompts to continue. You can also leave it as is and complete your activation.

To make this tab available in the mobile app, generate a metadata cache.


## See Also

Mobile App Configuration for Ratings


Mobile App Configuration for Ratings

Create object metadata cache configuration for supported Ratings objects in the Life Sciences for
Customer Engagement mobile app. Generate a metadata cache to package the object metadata cache

<!-- page:172 -->



configuration into a downloadable metadata cache that the mobile app can use for online and offline
access.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Configure object metadata cache configuration for these objects.


Object                                               Type

Account                                              Data

ProviderAcctTerritoryInfo                            Data

LifeSciMarketableProduct                             Data

ContactPointAddress                                  Data

PrvdAccountUserGroupInfo                             Data

Group                                                Data

GroupMember                                          Data


Important Generate a metadata cache after you create these configurations. This step is critical
because it makes sure that the mobile app accesses the latest metadata definitions, including any
schema changes for supported objects.


## See Also

Add Ratings Layout to the Account Record Page
Create Object Metadata Cache Configuration
Generate Metadata Cache


Territory Management Batch Jobs

Territory management relies on dedicated batch jobs to handle large-scale data processing. These jobs
automate the critical task of aligning accounts to specific territories, whether through explicit mappings
loaded from external systems or based on geographical representations like zip/postal codes or bricks.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for

<!-- page:173 -->




Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


After the Account to Territory, Zip to Territory, and Brick to Territory jobs are run, the Affiliation Alignment
job runs automatically if Affiliation Rules have been created in the org. The job looks at the rule criteria
Account Type, Affiliation Role, and Specialty that have been created and aligns any Accounts based on
Provider Affiliations that meet the criteria for the specified territory(s).


Align Account to Territory

This batch job processes and synchronizes large volumes of manual account-to-territory assignments
created by users directly through Salesforce's standard territory management tools or loaded from
external systems. It carries out two primary functions:

- It automatically generates or updates corresponding Provider Account Territory Info records and
sharing permissions to match manual territory assignments when accounts are manually linked.
- It generates territory-based sharing records and removes orphaned territory assignments and sharing
records for inactive accounts or removed manual assignments. Additionally, a Provider Account
Territory Info record without a corresponding Object Territory Association record is inactivated and
unshared from the territory. This automates cleanup and avoids separate manual maintenance of
accurate sales representative access.


Align Zip to Territory

This batch job automates account assignment to territories using predefined Postal/Zip code mappings.
A Postal/Zip code defines a postal region, primarily used in the United States. The job processes account
and address information to link providers to territories by applying configured geographic assignment
rules. It automatically creates and updates the necessary records, providing sales reps with proper
access.


Align Brick to Territory

This batch job establishes territory-to-account alignments using preconfigured brick mappings. A brick is
a distinct geographical segment, predominantly used in Europe. The job systematically analyzes account
and address data. Then, it applies established geographic assignment rules to integrate providers into
sales territories. This process leads to the automatic creation and updating of essential records,
guaranteeing sales reps appropriate access without manual effort.


## Run Territory Management Jobs

Automate the processing of large record volumes by running the Align Account to Territory, Align Zip to
Territory, and Align Brick to Territory batch Apex jobs from the Admin Console. You can track their
status and terminate them from Setup as needed.

<!-- page:174 -->




Run Territory Management Jobs

Automate the processing of large record volumes by running the Align Account to Territory, Align Zip to
Territory, and Align Brick to Territory batch Apex jobs from the Admin Console. You can track their status
and terminate them from Setup as needed.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To run territory management jobs:                     Life Sciences Commercial Admin permission set


Before you get started with running territory management jobs, make sure that the required mapping or
rule records are in place. For aligning account to territory, populate the account's territory mappings as
Object Territory Association records. For aligning zip and brick to territory, create the Territory Geo
Assignment Rule records with the UsageType set as ZipToTerritory and BrickToTerritory respectively.

1. From the App Launcher, find and select Life Sciences Commercial, and then select Admin Console.
2. Select Territories, and then select Territory Management.
3. Select the batch jobs as per requirements:
a. Align Account to Territory
b. Align Zip to Territory
c. Align Brick to Territory
4. To run the batch job now, click Run Now.
5. Select the required territory and its subordinates from the appropriate level in the territory hierarchy.
6. You can drag the slider handle to select the batch size of the job. The default value is 200.
7. Click Run.
8. You can schedule the job for later.
a. Select the frequency from the dropdown. You can run the job:
- Weekly, to recur every time on the selected day, by selecting the preferred start time from the
dropdown.
- Daily by selecting the preferred start time from the dropdown.
- Hourly, every selected hours, by selecting the hour from the dropdown.
b. Use the slider handle to select the batch job’s size. The default value is 200.
c. Save your changes.

You can view the details of the different jobs that run in a table. These include Job Name, Job ID, Job
Type, Status, Start Date/Time, Completion Date/Time, and Number of Failures. You can also sort batch
jobs in the table by these details.

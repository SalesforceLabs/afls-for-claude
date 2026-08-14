<!-- guide:admin-guide section:set-up-life-sciences-cloud-for-customer-engagement-basics pages:10-26 -->
# Set Up AFLS for Customer Engagement Basics



sets and permission set licenses. The Permission Sets page in Setup describes each permission set and
shows the permission set license related to each permission set.
Create Account Page Layouts and Record Types for Healthcare Organizations (HCOs)
Create a page layout and a record type for the healthcare organization records that you create and
maintain in AFLS.
Create Person Account Page Layouts and Record Types for Healthcare Professionals (HCPs)
Create a page layout and a record type for the healthcare professional records that you create and
maintain in AFLS. Person Accounts represent people in AFLS.
Add Tabs to the Life Sciences Commercial App
The Life Sciences Commercial app shows the Home, Admin Console, and Accounts tabs by default.
Add Customer Engagement tabs such as Calendar, Intelligent Content, and Visits to the Life Sciences
Commercial app. The Life Sciences Commercial app is only available in your org when you install the
AFLS for Customer Engagement managed package.
Create Life Science Metadata Object Sharing Rules
Support access to Customer Engagement features by creating object sharing rules for Life Science
Metadata Categories and Life Science Metadata Records.
Supported Languages in AFLS for Customer Engagement
AFLS for Customer Engagement is localized in over 30 languages that are either fully
supported or provide end-user support. For fully supported languages, AFLS features
and user interface (UI) text appear in the selected language. End-user languages allow individual users
to select a language other than their company’s default language for end-user facing UI.
Set Up the Life Sciences Customer Engagement Home Page
The home page in AFLS for Customer Engagement provides a centralized view of critical
information and tasks so your users can prioritize their work. Customize the home page to show
announcements, upcoming activities, visits to submit, prioritized accounts, and more. To show each
user what matters most to them, tailor the home page for different profiles.


Get Your Org Ready for the AFLS for Customer
Engagement Package

Complete these tasks before you install the AFLS for Customer Engagement managed
package in your org. The package installation process fails when you don’t complete these prerequisite
tasks.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To complete package pre-installation:                  Life Sciences Commercial Admin and Health
Cloud Starter permission sets


Make sure to install the AFLS for Customer Engagement managed package in a new, blank
org that doesn't contain pre-existing configurations. Confirm with your Account Executive during license

<!-- page:11 -->



provisioning that the licenses are applied to a new, blank org. If you plan to install the managed package
in an org with pre-existing configurations, evaluate the org to test the potential impact.

1. Assign the Life Sciences Commercial Admin and Health Cloud Starter permission sets to your admin
user account.
a. From Setup, use the Quick Find box to search for and select Users, and then select your admin user
account.
b. Scroll to Permission Set Assignments and click Edit Assignments.
c. Verify that Health Cloud Starter and Life Sciences Commercial Admin are selected in the Enabled
Permission Sets list. If they aren't selected, move them to the Enabled Permission Sets list from the
Available Permission Sets list.
d. Save your changes.
e. Scroll to Permission Set License Assignments and verify that Health Cloud Starter and Life Sciences
Commercial are listed. These licenses are automatically added when you assign the permission sets.
2. Turn on Life Sciences for Customer Engagement Setup.
a. From Setup, use the Quick Find box to search for and select Life Sciences for Customer
Engagement Setup.
b. Turn on Life Sciences Customer Engagement. The Life Sciences for Customer Engagement Setup
page shows more settings.
c. Turn on RSVP Email Address to create the email address that receives and handles responses from
iCalendar invitations.

Note The Filter Admin Console Tiles Based On User Permissions setting filters the tiles that
display in the Admin Console based on user permissions, in addition to org permissions (which is
the default). Before you activate this setting, be sure that users have the permissions to see the
tiles they need. See Filter Admin Console Tiles by User Permissions.

3. Turn on Surveys and configure survey settings.
a. Expand the Get Your Org Ready to Use AFLS for Customer Engagement section, then
click Configure Surveys.
b. From the Surveys page, turn on Surveys. You can now access the Survey Invitation and Survey
Subject objects in Object Manager.
c. Turn on Survey Owners Can Manage Responses.
d. Leave the other settings blank, and return to the Life Sciences for Customer Engagement Setup
page.

Note Configure territories later in this task.

4. Turn on settings for package installation.
a. From the Get Your Org Ready to Use AFLS for Customer Engagement section, click
Verify and Enable Settings to open the list of settings.
b. Click Enable All.
c. Click Close after all settings are turned on.

Note Don't turn off any of these prerequisite settings or feature preferences via metadata APIs.
Doing so causes future upgrades of the package to fail.

5. Configure organization-wide default sharing settings.
a. From the Get Your Org Ready to Use AFLS for Customer Engagement section, click

<!-- page:12 -->



Configure Sharing.
b. Click Edit.
c. Verify the default internal and external access for the Account and Contract object is Private. If it
isn’t, update the access, and acknowledge the UI messages that appear.
d. Verify the default internal and external access for the Case and Opportunity objects is Private. If it
isn’t, update the access.
e. For the Provider Affiliation and Provider Affiliation Product objects, change the default internal
access to Public Read/Write.
f. Save your changes and return to the Life Sciences for Customer Engagement Setup page.
6. Turn on AFLS for Customer Engagement Features.
a. Expand the AFLS for Customer Engagement Features section.
b. Turn on Account-Based Sharing, Best Contact Time Custom Sharing, Contact Point Social Custom
Sharing, Parent Territory Product Alignment, and Product Hierarchy Business Group Filter.

Note Complete the Account Summarization for Customer Engagement and the Configure
Provider Cards for Customer Engagement sections after you install the managed package.

7. Turn on Inventory Count Settings.
a. From Setup, use the Quick Find box to search for and select Inventory Count Settings.
b. Verify Inventory Count is turned on. If not, turn on Inventory Count.
c. From Setup, use the Quick Find box to search for and select Sales Account Plans.
d. Verify Sales Account Plans are turned on. If not, turn on Sales Account Plans.
e. From Setup, use the Quick Find box to search for and select Care Plan Settings.
f. Verify Care Plans are turned on. If not, turn on Care Plans.
8. Verify that Chatter is turned on in your org.
a. From Setup, use the Quick Find box to search for and select Chatter Settings.
b. Under Chatter Settings, if Enable is selected, don't take any further action. If this option isn't
selected, click Edit, select Enable, and then save your changes.
9. Verify that data protection details are available in records.
a. From Setup, use the Quick Find box to search for and select Data Protection and Privacy.
b. If the Make data protection details available in records setting is selected, don’t take any further
action. If this option isn't selected, click Edit, select Make data protection details available in
records, and then save your changes.
10. Verify Translation Workbench is turned on in your org.
a. From Setup, use the Quick Find box to search for and select Translation Language Settings.
b. If Translation Workbench isn't turned on, click Enable.
c. For Language, if English is selected, click Edit. If English isn't selected, click Add, and then select
English.
d. Move the Admin User to the selected list of translators for English.
e. Save your changes.
11. Turn on Multi-Currency. Follow the steps in Enable Multiple Currencies.
12. Turn on State and Country/Territory Picklists. AFLS uses State and Country fields such as
ContactPointAddress.
a. Follow the steps in Convert State and Country/TerritoryData.
b. Follow the steps in Enable and Disable State and Country/Territory Picklists.
13. Turn on contacts to relate to multiple accounts, and then enable Person Accounts.

<!-- page:13 -->



a. Follow the steps in Enable Contacts to Relate to Multiple Accounts.
b. Follow the steps in Enable Person Accounts for Use in AFLS.
14. Set up sales territories. Follow the steps in Set Up Sales Territories for AFLS. After you set
up sales territories, you're ready to install the package.


Set Up Sales Territories for AFLS

Create a territory type, create a territory model, then create a hierarchy of territories as you build the
territory model. Activate the territory model, and then assign users to territories.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To work with sales territories:                        Customize Application


You can create up to 1000 territories. This limit applies when your org expands to new business units or
countries. You can request an increase from Salesforce if necessary. However, an extension to the limit
affects system performance.

Prerequisite: Complete the steps in Get Your Org Ready for the AFLS for Customer
Engagement Package.

1.    From Setup, use the Quick Find box to search for and select Territory Settings.
2.    If Sales Territories isn't turned on, click Enable Sales Territories.
3.    Create a territory type. Follow the steps in Create Territory Types.
4.    Create a territory model. Follow the steps in Create a Territory Model Record.
5.    Create a hierarchy of territories. Follow the steps in Create Territories.
6.    Activate the territory model. Follow the steps in Activate a Territory Model.

You must assign Customer Engagement users to a territory. Otherwise, they have limited access to the
AFLS for Customer Engagement mobile app. After you create users, assign them to
territories. Follow the steps in Assign Users to Territories.


Install the AFLS for Customer Engagement Package
for Admin Users

Install the AFLS for Customer Engagement managed package in your Salesforce org before
you set up Life Sciences Customer Engagement features. The package contains the Life Sciences
Commercial app, which includes an Admin Console from where you can configure Customer
Engagement features in one place.

<!-- page:14 -->




**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To install the package:                           Life Sciences Commercial Admin and Health
Cloud Starter permission sets


Note The Welcome to Agentforce Life Sciences email sent to your organization includes the
package installation URL. We don't provide the link in the Admin Guide.


Make sure to install the AFLS for Customer Engagement managed package in a new, blank
org that doesn't contain pre-existing configurations. Confirm with your Account Executive during license
provisioning that the licenses are applied to a new, blank org. If you plan to install the managed package
in an org with pre-existing configurations, evaluate the org to test the potential impact.

1. After you complete the prerequisite setup tasks in the org where you want to install the package, click
the Install packages link in your customer welcome email. The link redirects you to the Salesforce
login page for production orgs.
2. To install the package in a production org, continue to the next step. If you use My Domain with single
sign-on (SSO), click Use Custom Domain on the login page, enter the custom domain name, and then
click Continue. To install the package in a sandbox org, go to https://test.salesforce.com. Append the
package link to the browser address.
3. Use your credentials to log into the Salesforce org where you want to install the package.
4. Select Install for Admin Users only.
5. Acknowledge the message and click Install.
6. Click Done. You receive an email when your package installation is successful. In Setup, you can also
open the Installed Packages page to verify if you've installed the package successfully.


Create Custom Admin Profiles for AFLS Customer
Engagement

Create custom profiles for business admins and mobile admins by cloning the system administrator
profile. Then create users and assign them to the relevant profiles.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To create custom profiles:                        Life Sciences Commercial Admin and Health
Cloud Starter permission sets


1.    From Setup, use the Quick Find box to search for and select Profiles.
2.    Click Clone next to the System Administrator profile.
3.    In Profile Name, enter a name such as Business Admin. Do not include underscores in profile names.
4.    Save your changes.

<!-- page:15 -->



5. Repeat the above steps to create a Mobile Admin profile.
6. To add users, see Add AFLS Users.


Create Custom Standard User Profiles for Life Sciences Customer
Engagement

Create custom profiles for personas such as Field Sales Representative and Medical Science Liaison by
cloning the Standard User profile.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To create custom profiles:                           Life Sciences Commercial Admin and Health
Cloud Starter permission sets


1. From Setup, use the Quick Find box to search for and select Profiles.
2. Click Clone next to the Standard User profile.
3. In Profile Name, enter a name for the user profile based on your organization's naming conventions
for your users. Don't include underscores in profile names.
4. Click Edit, and then scroll to the Administrative Permissions section.
5. Turn off the View Setup and Configuration permission.
6. Save your changes.
7. To add users, see Add AFLS Users.
8. Repeat the steps to create more profiles for your users.


Assign AFLS for Customer Engagement Permission
Sets

To work with AFLS for Customer Engagement, users need the appropriate permission sets
and permission set licenses. The Permission Sets page in Setup describes each permission set and shows
the permission set license related to each permission set.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To assign permission sets                            Manage Users

<!-- page:16 -->



Prerequisite: Add AFLS Users

In Setup, you can assign permission sets to users in a few ways. When you assign a permission set to a
user, the permission set license is automatically assigned to the user.

- From the Company Information page, you can select a permission set license to view its details and
assign it to multiple users.
-    From the Permission Sets page, you can select a permission set to view its details and assign it to
multiple users.
-    From the Users page, you can select a user to view his or her details and assign multiple permission set
licenses and permission sets to the user.

These permission sets are available by default in AFLS for Customer Engagement.


Permission Set Label (API Name)                            Description

Life Sciences Commercial Admin                             Provides access to Customer Engagement
(LifeSciencesCommercialAdmin)                              features, data model objects, and metadata
objects.

Life Sciences Field Sales Representative                   Provides Field Sales Representatives access
(LifeSciencesFieldSalesRepresentative)                     to the Customer Engagement features and
objects they require for their role.

Life Sciences Field Medical (LifeSciencesFieldMedical)     Provides Field Medical Users access to the
Customer Engagement features and objects
they require for their role.

Life Sciences Key Account Management                       Provides Key Account Managers access to
(LifeSciencesKeyAccountManagement)                         the Customer Engagement features and
objects they require for their role.

Life Sciences Core (LifeSciencesCore)                      Provides access to Apex classes in the Life
Sciences Cloud for Customer Engagement
package that are required to use Customer
Engagement. Assign this permission set to
all Life Sciences Customer Engagement
users, including admins, field sales
representatives, key account managers, and
field medical users.

Access Presentation Player for Digital Experiences         Provides access to specific Apex classes for
(AccessPresentationPlayerDigital Experience)               Digital Experience users of the presentation
player.

Access Remote Engagement for Digital Experiences           Provides access to specific Apex classes for
(AccessRemoteEngagementDigitalExperience)                  Digital Experience users of remote
engagement.

<!-- page:17 -->



1. Assign the appropriate permission sets to your users via the Permission Sets or Users pages. Make sure
to add the Life Sciences Core permission set for all users.
2. Add more permission sets depending on the features you want to make available to each user.
3. Save your changes.


Create Account Page Layouts and Record Types for Healthcare
Organizations (HCOs)

Create a page layout and a record type for the healthcare organization records that you create and
maintain in AFLS.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To create page layouts and record types:            Life Sciences Commercial Admin and Health
Cloud Starter permission sets


1. Create a page layout for a healthcare organization.
a. From Setup, go to Object Manager.
b. Search for and select Account, and then select Page Layouts.
c. Click New.
d. Select an existing page layout from the dropdown. The first time you do this, select Account Layout,
which is the default layout.
e. Enter a name for the new layout, and then click Save. For example, enter HCO Account Layout.
f. Configure the layout to show the fields that your organization uses for business records.
g. Add the Contact Point Addresses, Contact Point Emails, Contact Point Phones, and Business
Licenses related lists to the layout.
h. Save your changes.
2. Create a record type for a healthcare organization.
a. In the Account object, select Record Types.
b. Click New.
c. Select a Business record type from the dropdown.
d. Enter a label for the new record type. For example, enter Healthcare Organization.
e. Select Active.
f. Select the profiles for which you want to make this record type available, and then make this the
default record type for profiles as needed.
g. Click Next.
h. Select a page layout to assign to all the profiles you selected or assign a different page layout for
each profile.
i. Save your changes.

<!-- page:18 -->





## Create Person Account Page Layouts and Record Types for

Healthcare Professionals (HCPs)

Create a page layout and a record type for the healthcare professional records that you create and
maintain in AFLS. Person Accounts represent people in AFLS.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To create page layouts and record types:              Life Sciences Commercial Admin and Health
Cloud Starter permission sets


Prerequisite: Enable Person Accounts.

1. Create a page layout for a person.
a. From Setup, go to Object Manager.
b. Search for and select Person Account, and then select Page Layouts.
c. Click New.
d. Select an existing page layout from the dropdown.
e. Enter a name for the new layout, and then click Save. For example, enter HCP Person Account
Layout.
f. Configure the layout to show the fields that your organization uses for people records.
g. Add the Contact Point Addresses, Contact Point Emails, Contact Point Phones, and Business
Licenses related lists to the layout.
h. Save your changes.
2. Create a record type for a healthcare professional.
a. In the Person Account object, select Record Types.
b. Click New.
c. Select the existing Person record type from the dropdown.
d. Enter a label for the new record type. For example, enter Healthcare Professional.
e. Select Active.
f. Select the profiles for which you want to make this record type available, and then make this the
default record type for profiles as needed.
g. Click Next.
h. Select a page layout to assign to all the profiles you selected or assign a different page layout for
each profile.
i. Save your changes.


Add Tabs to the Life Sciences Commercial App

The Life Sciences Commercial app shows the Home, Admin Console, and Accounts tabs by default. Add
Customer Engagement tabs such as Calendar, Intelligent Content, and Visits to the Life Sciences
Commercial app. The Life Sciences Commercial app is only available in your org when you install the Life

<!-- page:19 -->



Sciences Cloud for Customer Engagement managed package.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Not all tabs available in the org are available for the AFLS mobile app. For example, don't
configure the standard Salesforce Calendar tab for the mobile app.

1.    From Setup, use the Quick Find box to search for and select App Manager.
2.    Click Edit next to Life Sciences Commercial.
3.    Select Navigation Items.
4.    From the list of Available Items, move the tabs you want to show in the app to the list of Selected
Items.
The Navigation Items page includes two Calendar tabs in the list of Available Items. Make sure to
select the Calendar tab that's relevant to Customer Engagement.

The
correct
5.    To give your users access to the app, select User Profiles, and then move the user profiles from the
Calendar
Available Profiles list to the Selected Profiles list.
tab
6.    Save your changes.
to
7.    From
move Setup, use the Quick Find box to search for and select Profiles. For each user profile that you
selected
from     earlier: under Object Settings, verify that the tab settings are set to Default On for each tab
that you selected earlier. If not, select the object, click Edit, change the setting under Tab Settings, and
Available
save
Itemsyour change.
8.    From
to    the App Launcher, go to the Life Sciences Commercial app to view the tabs.
Selected
If you've set up the AFLS mobile app: after you configure tabs, generate the metadata
Items
cache for your updates to take effect in the mobile app.


## Add Tabs from Custom Objects to the Life Sciences Commercial App

Create custom objects to track and store data that’s unique to your organization. Add custom object
tabs to the AFLS Commercial app and to the AFLS mobile app.


## See Also

Generate Metadata Cache


Add Tabs from Custom Objects to the Life Sciences Commercial App

Create custom objects to track and store data that’s unique to your organization. Add custom object tabs
to the AFLS Commercial app and to the AFLS mobile app.

<!-- page:20 -->



1. From the Object Manager tab in Setup, click Create | Custom Object.
2. Complete the fields for your custom object and configure its features, then save your changes.
3. Create a tab for the custom object.
a. From Setup | Home, use the Quick Find box to search for and select Tabs.
b. From the Custom Tabs section, click New.
c. In Object, select the custom object you created.
d. In Tab Style, select a tab style for the custom object.
e. Click Next.
f. Accept the tab visibility as Default On for all profiles, or select Default Off or Tab Hidden for specific
profiles.
g. Click Next.
h. Make the new tab available to all custom apps or specific custom apps, then save your changes.
4. Verify that the required user profiles have access to the new custom objects.
a. From Setup, use the Quick Find box to search for and select Profiles.
b. Select a profile for which you want to make the tab available, then select Object Settings.
c. Select the custom object you created, click Edit, and then configure the object permissions (Read,
Create, Edit, Delete etc) for the profile.
d. Save your changes.
e. Repeat the steps for each profile that you want to give access to the tab.
5. Add the custom tab to the Life Sciences Commercial app.
a. From Setup, use the Quick Find box to search for and select App Manager.
b. Click Edit next to Life Sciences Commercial.
c. Select Navigation Items.
d. From the list of Available Items, move the custom tab you created to the list of Selected Items.
e. To verify your users have access to the app, select User Profiles, and if necessary, move user profiles
from the Available Profiles list to the Selected Profiles list.
f. Save your changes.
6. Create the database schema for the custom object. Follow the steps in Create Object Metadata Cache
Configuration.
7. Generate the metadata cache for the required profiles. Follow the steps in Generate Metadata Cache.
8. Verify the custom object appears in the top navigation bar of the Life Sciences Commercial app.


Create Life Science Metadata Object Sharing Rules

Support access to Customer Engagement features by creating object sharing rules for Life Science
Metadata Categories and Life Science Metadata Records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:21 -->




User Permissions Needed

To create sharing rules:                             Manage Sharing


1.    From Setup, use the Quick Find box to search for and select Sharing Settings.
2.    From the Manage sharing settings for: dropdown, select Life Science Metadata Categories.
3.    In the Life Science Metadata Category Sharing Rules section, select New.
4.    Enter the label name and rule name.
5.    For the rule type, select Based on record owner.
6.    For owned by members of, select Public Groups from the first dropdown and All Internal Users from
the second dropdown.
7.    For Share with, select Public Groups from the first dropdown list, and select All Internal Users from
the second dropdown.
8.    For Access Level, select Read Only.
9.    Save your work.
10.    Similarly, create a sharing rule for Life Science Metadata Records.
11.    To push your changes to the AFLS mobile app, create a metadata cache.


## See Also

Generate Metadata Cache
Create Object Metadata Cache Configuration


Supported Languages in AFLS for Customer
Engagement

AFLS for Customer Engagement is localized in over 30 languages that are either fully
supported or provide end-user support. For fully supported languages, AFLS features and
user interface (UI) text appear in the selected language. End-user languages allow individual users to
select a language other than their company’s default language for end-user facing UI.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Fully Supported Languages

These languages have full support across AFLS for Customer Engagement features,
including standard objects, Setup, and Help content.

- Chinese (Simplified): zh_CN

<!-- page:22 -->



- Chinese (Traditional): zh_TW
- Danish: da
- Dutch (Netherlands): nl_NL
- English (US): en_US
- Finnish: fi
- French (France): fr
- German (Germany): de
- Italian: it
- Japanese: ja
- Korean: ko
- Norwegian: no
- Portuguese (Brazil): pt_BR
- Russian: ru
- Spanish (Spain): es
- Spanish (Mexico): es_MX
- Swedish: sv
- Thai: th

End-User Languages

These languages provide translations for AFLS for Customer Engagement standard objects
and pages, but don't cover all setup pages or Salesforce Help content.

- Arabic: ar
- Bulgarian: bg
- Croatian: hr
- Czech: cs
- English (UK): en_GB
- Greek: el
- Hebrew: iw
- Hungarian: hu
- Indonesian: in
- Polish: pl
- Portuguese (European): pt_PT
- Romanian (Romania): ro
- Slovak: sk
- Slovene: sl
- Turkish: tr
- Ukrainian: uk
- Vietnamese: vi
Select End User Languages for Your AFLS Org
Select and turn on languages for your users that use the Language Settings and Translation Languages
pages in Setup. While end-user languages appear within your Salesforce org, Salesforce Help and
Setup pages aren't translated into these languages.

<!-- page:23 -->




## See Also

User Interface Language Support
Supported Languages


Select End User Languages for Your AFLS Org

Select and turn on languages for your users that use the Language Settings and Translation Languages
pages in Setup. While end-user languages appear within your Salesforce org, Salesforce Help and Setup
pages aren't translated into these languages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To view language settings:                           View Setup and Configuration

To change language settings:                         Customize Application


1. From Setup, find and select Language Settings.
2. Select Enable end-user languages. The Available Languages list shows all end-user languages.
3. To make a language available to your end users, move the language from the Available Languages list
to the Displayed Language list.
4. Save your changes.
5. From Setup, find and select Translation Language Settings.
6. Click Edit next to a supported language.
7. Select translators for the language from your list of available users.
8. Save your changes.
9. Return to the page after translations are completed, and select Active to make the translated values
available for your users.
10. Save your changes.


## See Also

Select Languages for Your Org


Set Up the Life Sciences Customer Engagement Home Page

The home page in AFLS for Customer Engagement provides a centralized view of critical
information and tasks so your users can prioritize their work. Customize the home page to show
announcements, upcoming activities, visits to submit, prioritized accounts, and more. To show each user
what matters most to them, tailor the home page for different profiles.

<!-- page:24 -->




## Customize the Home Page

Add your company logo to your Salesforce org. Customize the components on the home page in Life
Sciences Customer Engagement by using Lightning App Builder.
Home Page Components
The AFLS for Customer Engagement home page supports various Lightning
components that help your users through their daily work.


Customize the Home Page

Add your company logo to your Salesforce org. Customize the components on the home page in Life
Sciences Customer Engagement by using Lightning App Builder.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To set up the home page:                              Life Sciences Commercial Admin permission set

To create and save Lightning pages in Lightning       Customize Application
App Builder:


1. To define your brand’s unique identity within Salesforce, create a custom theme and add your
company's logo.
Logos are supported only on the desktop site.
a. From Setup, in the Quick Find box, search for and select Themes and Branding.
b. Select New Theme.
c. Under Images, select your organization's logo.
d. Save your changes and activate the theme.
2. Customize the components on the home page.
a. From Setup, in the Quick Find box, search for and select Lightning App Builder.
b. Edit a home page, or create one.
The AFLS mobile app supports a single-column layout for the home page. Most
components fill the entire page, but some components take up only 50% of the page in the mobile
app. See Home Page Components.
c. Search for the component that you want to add, and then drag the component to the page.
d. To add visibility rules based on the record field, device type, or other filters, click Add Filter.
An eye icon on the component indicates that visibility rules are applied.
e. Save your changes to the record page.
f. Activate the home page to share it with your users. Set the home page as the org default, the app
default, or assign it to specified app and profile combinations.

<!-- page:25 -->



If you activate the home page at the app level or the app and profile level, select the Life Sciences
Commercial app.
g. For each profile that you want to create a customized home page for, clone the default home page
and customize it.

When you set up the AFLS mobile app, you create an object metadata cache configuration
and generate a metadata cache. The metadata cache syncs your customized home page to the Life
Sciences Cloud mobile app.


Home Page Components

The AFLS for Customer Engagement home page supports various Lightning components
that help your users through their daily work.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

Note The AFLS mobile app supports a single-column layout for the home page. Most
components fill the entire page, but some components take up only 50% of the page in the mobile
app.


Activity Plan by Product

To show each user’s specific goals so that they can align their work with the overall company strategy, use
the Activity Plan By Product component. Select a plan cycle type, such as AccountGoal or
WeightedTerritoryGoal. See Add the Activity Plan Lightning Component to the Home Page.

In the AFLS mobile app, the Activity Plan By Product component fills only 50 percent of
the page.


Agentforce Welcome

To show an Agentforce search bar and up to 5 predefined utterances, use the lsAgentforceWelcome
component. For example, to help your users work efficiently, define utterances such as “Show me
declining prescribers” and “HCPs to meet with next.” When users select an utterance, it’s entered as an
Agentforce prompt. See Agentforce and Einstein Generative AI.

This component is supported only in the AFLS mobile app. Lightning App Builder shows a
placeholder instead of previewing the component.

<!-- page:26 -->




Home Office Announcements

To show important communications from headquarters or the home office so that users are up to date
on the latest news, use the AFLS Home Announcements component.

To populate the announcements in the component, create app alerts that use the Announcement type.
If needed, customize the app alert with extra HTML. We recommend that you add a trusted image URL to
each announcement. Expired alerts are removed from the Home Announcements component
automatically. See Create an App Alert and Additional Message Field for App Alerts.


Next Best Customer

Note If your org uses the NbcTopResults component, we recommend replacing it with the updated
Life Sciences Next Best Customers component for the best experience.


To show a ranked list of the top prioritized accounts in the territory each day so that users can maximize
the impact of each interaction, use the Life Sciences Next Best Customers component. In the
component properties, choose how many accounts to show. See Next Best Customer.

When you configure quick actions, users can also start engagement activities such as creating a visit or
sending an email directly from their workflow. Quick actions are supported only in the Life Sciences
Cloud mobile app in the rationale view.

To calculate distances to the physician's address accurately, activate data integration rules on the Contact
Point Address object. Data integration rules use Google Maps API to calculate the address's geolocation
data: latitude, longitude, and location accuracy. Salesforce calculates the distance from an account's
preferred contact point address to the user's location. If there’s no preferred address, the distance is
calculated by using the account's primary contact point address instead.

Users can also update geolocation data manually by selecting Check for New Data from the contact
point address record's action menu. In the Data Status window, the Update button refreshes the data.


Notifications and Recommendations

To show users important alerts, notifications, and recommendations directly on the home page, use the
Notifications List component. In the component's properties, choose how many notifications to show. To
populate the alerts in the component, create App Alerts that use the Notification and Recommendation
types. See Create an App Alert.

This component is supported only on the desktop site. In the AFLS mobile app,
notifications appear in the message pane.


Up Next Agenda

On the desktop site, use the UpcomingAgenda component to show users a list of their upcoming visits,

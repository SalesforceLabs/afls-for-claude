<!-- guide:admin-guide section:integrate-data-360-and-tableau-next-with-customer-engagement pages:638-643 -->
# Integrate Data 360 and Tableau Next with Customer Engagement




Integrate Data 360 and Tableau Next with Customer
Engagement

Integrate Data 360 and Tableau Next with Life Sciences to transform complex life sciences data into
actionable insights and enhanced visualizations. Tableau Next requires Data 360 and the Data 360
semantic layer. Set up Sales Data reports to help your users better understand their customers and plan
effective interactions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Set Up Tableau Next for AFLS

AFLS integrates with Tableau Next to transform complex life sciences data into
actionable insights and enhanced visualizations. Tableau Next is the composable, AI-analytics platform
that turns any type of data into actionable insights. Tableau Next requires Data 360 and the Data 360
semantic layer.
Set Up a Tableau View Lighting Web Component for Your Life Sciences Org and Mobile App
View embedded Tableau reports in your Life Sciences org and the AFLS mobile app.
Sales Data Setup
Give users access to the drug distribution data and prescription data, and help them better
understand their customers and plan effective interactions.


Set Up Tableau Next for AFLS

AFLS integrates with Tableau Next to transform complex life sciences data into actionable
insights and enhanced visualizations. Tableau Next is the composable, AI-analytics platform that turns
any type of data into actionable insights. Tableau Next requires Data 360 and the Data 360 semantic
layer.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


To gain a comprehensive understanding of Tableau Next’s capabilities, see Tableau Next.

<!-- page:639 -->



All users require a Data 360 permission set and a Tableau Next permission set.

- Data 360:
- Data Cloud Architect adds and transforms data.
- Data Cloud User views data.
- Tableau:
- Tableau Next Admin administers users and permissions.
- Tableau Next Creator creates content.
- Tableau Next Consumer views content.
- Tableau Next Platform Analyst views and edits content.
To learn more about the permission sets and licenses you require for Tableau Next, see Tableau Next
Permission Sets and Licenses.

Get started by completing the tasks in Admin: Set Up Tableau Next.

- Make sure to create the Tableau Next Admin. See Create the Tableau Next Admin.
- Set up Data 360 for Tableau Next to enable real-time data access and insights in your visualizations.
Tableau Next requires Data 360 for data ingestion and data queries. Before setting up Tableau Next,
configure Data 360 and create a Data Model Object for your org. To learn more, see Set Up Data 360
for Tableau Next.
-    Tableau Semantics within Tableau Next gives you the power to create semantic models and then build
metrics upon them. You can also use semantic models to create calculated fields in your visualizations.
To learn more, see Create Semantic Models and Define Metrics.

To set up Tableau Next for Mobile, see Stay Informed With Tableau Next Mobile Overview.



## Set Up a Tableau View Lighting Web Component for Your Life

Sciences Org and Mobile App

View embedded Tableau reports in your Life Sciences org and the AFLS mobile app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


1. Install the Tableau connected app in your Salesforce org.
a. Follow the installation steps provided in the Salesforce AppExchange. See Tableau Connected App
for Salesforce.
b. In your Salesforce org, to verify the connected app is correctly installed and configured in your org,
go to the Installed Packages page or the App Manager page in Setup.
2. Configure authentication in Tableau.

<!-- page:640 -->



a. Log into your Tableau Organization.
b. Go to Settings.
c. Select the Authentication tab, and then click New Configuration under Authentication types.
d. Select Salesforce as the new authentication type and give the authentication a unique name.
e. Save your changes.
3. Set the default authentication for embedded views.
a. From the Authentication tab in Settings, under Default Authentication Type for Embedded Views,
set the Authentication to the Salesforce org you added in the previous step.
b. Save your changes.
4. Add users to Tableau with Salesforce Authentication.
a. In Tableau, go to Users.
b. Click Add Users.
c. Enter the Salesforce usernames (comma-separated) of the users who need access.
d. Select the users from the list of added users, and set their Authentication Type to the Salesforce org
you added in a prior step.
e. Click Update to save your changes.
5. Verify access to embedded Tableau Views in your Salesforce org.
a. Ensure the Tableau View Lightning Web Component is correctly configured in Salesforce by verifying
the users you added in Tableau can see embedded Tableau reports without logging in separately.
b. Test the integration by logging in with a configured Salesforce user and verifying that Tableau
reports load seamlessly.
6. Configure the Tableau View Lightning Web Component in your org.
a. Open a flexi page and drag and drop the Tableau View component onto the page, and provide the
url for any report on Tableau.

Note After setup, components in the org display the Tableau report without any extra
authentication from the user. The mobile app renders the Tableau View component, but prompts
you to authenticate directly with Tableau from within the embedded view.



Sales Data Setup

Give users access to the drug distribution data and prescription data, and help them better understand
their customers and plan effective interactions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Get Your Org Ready for Sales Data

Before you configure and use Sales Data reports, complete these required setup tasks.
Create a Data Governance Policy

<!-- page:641 -->



Create a data governance policy to manage record-level access. This policy ensures that users access
sales data only from their specific territory.
Add Sales Data Component to a Record Page
Gives your users quick access to their drug distribution data and prescription data by adding the Sales
Data component to a record page.
Add Territory Sales Data Tab to App Launcher
Make the Sales Data component available to your users by adding it as a tab in your app.


Get Your Org Ready for Sales Data

Before you configure and use Sales Data reports, complete these required setup tasks.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To complete the prerequisite setup tasks for Sales     Life Sciences Commercial Admin permission set
Data:

To create data streams                                 Data Cloud Architect

To use Data 360                                        Data Cloud User


1.    Set up territories. See Set Up Sales Territories for AFLS
2.    Create Account records.
3.    Create Product2 records.
4.    Create LifeSciMarketableProduct records.
5.    Create LifeSciMarketableProduct records with the type Market.
6.    Create HealthcareProvider records.
7.    Create Life Science Drug Prescription Data records.
8.    Create Life Science Drug Distribution Data records.
9.    Set up Territory Geo Assignment rules.
10.    Set up Data 360 for drug distribution data and drug prescription data.
- Create a data stream and ingest sales data.
- Transform the data lake object.
- Map the data to the data model object.

<!-- page:642 -->




Create a Data Governance Policy

Create a data governance policy to manage record-level access. This policy ensures that users access
sales data only from their specific territory.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a data access policy:                      Data Cloud Architect

To create custom permissions:                        Manage Custom Permissions

To create permission sets:                           Manage Profiles and Permission Sets

To assign permission sets:                           Assign Permission Sets

To enable custom permissions in permission sets:     Manage Profiles and Permission Sets


The goal is to create tiered access for your sales data. Begin by defining an Allow All policy that grants
general access, and then apply specific custom permissions and permission sets to restrict users to data
from their assigned territories.

1.    Create a custom permission for the territory to be governed.
2.    Create a permission set.
3.    Add the custom permission to the permission set.
4.    Associate the permission set with the default data space.
5.    Create an Allow All policy.
6.    Apply the policy to the users who need access to the data.


Add Sales Data Component to a Record Page

Gives your users quick access to their drug distribution data and prescription data by adding the Sales
Data component to a record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:643 -->




package.


Make sure that the Data Model Object contains the necessary data, including the periods and measures
used in the Sales Data reports and charts.

1. On the record page where you want to add the component, click the gear icon, and then select Edit
Page.
2. From the Components pane, in the Search field, enter Sales Data.
3. Drag the Sales Data component from the left pane and place it on the page layout.
4. Edit the properties of the Sales Data component.
- Select the component in the page layout.
- For Display Format, select whether you want to show the sales data in a chart, table, or both.
- For Sales Data Type, select whether you want to show drug distribution data or prescription data on
the component.
- For Alignment Type, select the type of alignment that the sales data is based on.
- For Time Period, select the time period for which you want to show the sales data.
- For Time Period Units, select the number of time periods (months or weeks) to show on the chart.
- For Data Space API Name, enter the name of the data space to get the sales data from.
- Select the measures that can be applied to the sales data.
- Select the filters that can be applied to the sales data.
5. Save your changes.
6. Activate the page.


Add Territory Sales Data Tab to App Launcher

Make the Sales Data component available to your users by adding it as a tab in your app.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To view tab settings:                                View Setup and Configuration

To edit tab settings:                                Manage Profiles and Permission Sets


1. From Setup, in the Quick Find box, find and select Profiles.
2. Edit the profile that you want to add the custom tab to.
3. On the Profile Edit page, under Custom Tab Settings, enable the Sales Data tab.
- To make the tab visible on the app’s navigation bar and available in the App Launcher, select
Default On.

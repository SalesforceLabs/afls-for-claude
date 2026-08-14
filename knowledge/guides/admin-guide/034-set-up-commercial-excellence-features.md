<!-- guide:admin-guide section:set-up-commercial-excellence-features pages:1155-1161 -->
# Set Up Commercial Excellence Features




Set Up Commercial Excellence Features

Medical device manufacturers can manage their volume and price agreements at the product level with
their customers using sales agreements. They can also manage account and product specific forecasts,
and create account manager targets.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Sales Agreements

Create sales agreements at the account level. Include multiple products within a single sales agreement
and specify planned sales quantities, prices and discounts. Review planned revenue associated with the
agreement and also specify a schedule frequency for the agreement such as One Time, Monthly,
Quarterly or Yearly to align with the business objective.

Over time, you can compare planned quantities to actual quantities as orders are booked and use this
insight to monitor and enforce compliance to the agreement.

To make sales agreements available to your users, see Manage Long-Term Business with Sales
Agreements.




This sample sales agreement tracks anticipated shipments of a product at three price levels.

<!-- page:1156 -->





Forecast Device Sales

Improve business predictability and sales performance by creating account level forecasts for multiple
products in your portfolio. Create a baseline forecast using market and account growth factors relative to
last year’s actuals. Specify forecast horizon and forecast bucket granularity such as monthly versus
quarterly.

Enable account reps and sales managers to edit forecasts, annotate edits, track changes, and view
impact of forecast changes on key metrics such as revenue.

To make forecasting available to your users, see Create Holistic Forecasts with Advanced Account
Forecasting.

<!-- page:1157 -->





Account Manager Targets

Convert your business growth plans into measurable targets with Account Manager Targets. Create
targets for revenue, quantity, and other measure types and allocate specific target percentages to your
team members. Strategically distribute targets by products and accounts to meet market demands and
organizational requirements. Distribute targets by month, quarter, or year for better visibility and periodic
reviews. Update target values at any time and redistribute targets as needed.

To make target managing available to your users, see Strategically Grow Your Business with Account
Manager Targets.


## Configure Path Settings for Sales Agreements

Help Intelligent Sales users visualize the status of a sales agreement, so they can plan accordingly.
Configure Record Conversion for Quotes and Sales Agreements
Before your users can benefit from the time-saving Convert Record flow, there are a few configuration
tasks you must complete.
Use Commercial Excellence
Reduce manual tasks and streamline sales processes by using a screen flow to automate sales
agreement and quote record conversion.

<!-- page:1158 -->




Configure Path Settings for Sales Agreements

Help Intelligent Sales users visualize the status of a sales agreement, so they can plan accordingly.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To configure the component:                            Customize Application


1. From Setup, in the Quick Find box, enter Path Settings, and then select Path Settings.
2. Click New Path.
3. Add the following details:
a. Add a path name. The API Reference name is autopopulated. Keep it as is.
b. For Object, select Sales Agreement.
c. For Record Type, Master is autopopulated. Keep it as is.
d. For Picklist, select Status.
e. Click Next, Next, and then activate your path.
f. Click Finish.
4. Add the Path to the Sales Agreement record page.
a. From the App Launcher, find and select Sales Agreements.
b. Select a record and edit the record page.
c. Select the standard Path component and drag it to an editable part of the page.
In the properties pane, the path you created is auto-selected.
d. Select Save, and then click Activate.
e. Select Assign as Org Default.
f. In form factor, select Desktop and Phone.
g. Click Next and then click Save.


Configure Record Conversion for Quotes and Sales Agreements

Before your users can benefit from the time-saving Convert Record flow, there are a few configuration
tasks you must complete.


Note You can also use record conversion in orgs with Revenue Lifecycle Management and Health
Cloud. Make sure that decision tables, pricing procedures, and product catalog management are
configured and working in the org.



## Assign Permissions and Permission Sets for Record Conversion Users

Assign the Health Cloud Starter (for AFLS) or Health Cloud Foundation (for Health

<!-- page:1159 -->



Cloud) permission set, and the Context Service Runtime and Manufacturing Sales Agreements
permission sets to your users so that they can use record conversion. Users must also be assigned the
Manage Flows and Run Flows permissions.
Verify Context Definition Mapping
Context definitions ensure efficient data mapping at every step of the process. The Convert Record
flow uses a custom definition to map field relationships between records.
Enable Settings for the Convert Record Flow
To use the Convert Record flow, you must enable sales agreements and quotes in your org.
Verify that the Convert Record Quick Actions are Visible to Users
Quickly launch the Convert Record flow by using a quick action.
Record Conversion Notifications
Keep your users up to date about the status of their record conversion jobs by using notifications.


Assign Permissions and Permission Sets for Record Conversion Users

Assign the Health Cloud Starter (for AFLS) or Health Cloud Foundation (for Health Cloud)
permission set, and the Context Service Runtime and Manufacturing Sales Agreements permission sets
to your users so that they can use record conversion. Users must also be assigned the Manage Flows and
Run Flows permissions.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


## See Also

Manage Permission Set Assignments


Verify Context Definition Mapping

Context definitions ensure efficient data mapping at every step of the process. The Convert Record flow
uses a custom definition to map field relationships between records.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


The Convert Record flow uses the SalesAgreementQuotesConversion context definition to map data
between sales agreement and quote records. For example, let’s say that the context definition is
configured to map the Product field between the Sales Agreement and Quote objects. When the Convert

<!-- page:1160 -->



Record flow runs, the value of the Product field is copied from the source object record (the quote or
sales agreement) and prefilled in the flow screen.

You can clone or extend the SalesAgreementQuotesConversion context definition if you need to include
additional data in your record conversion processes. If you clone or extend the context definition, make
sure that you activate the context definition before you add it to the flow.

To add custom field mappings to the SalesAgreementQuotesConversion context definition, clone it. Add
the custom fields to the clone and activate it. Update the context definition reference in the Convert
Record flow to the cloned context definition, and then activate the flow.

See Also
Context Service


Enable Settings for the Convert Record Flow

To use the Convert Record flow, you must enable sales agreements and quotes in your org.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To enable features                                    Customize Application


1. Enable sales agreements.
a. From Setup, in the Quick Find box, enter Manufacturing, and then select Sales Agreements.
b. Turn on Sales Agreements.
2. Enable quotes.
a. From Setup, enter Quote in the Quick Find box, then select Quote Settings.
b. Select the option for enabling quotes.


## See Also

Manage Sales Agreements
Quotes


Verify that the Convert Record Quick Actions are Visible to Users

Quickly launch the Convert Record flow by using a quick action.

<!-- page:1161 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


If the convert record quick action isn’t visible to your users, add it to the page layouts assigned to them
for quotes and sales agreements. If a user has permission to convert records, the quick actions
automatically appear in the Quotes and Sales Agreements related lists and you can’t remove them.

See Also
Quick Actions


Record Conversion Notifications

Keep your users up to date about the status of their record conversion jobs by using notifications.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Verify Notification Delivery Settings

To make sure your users are notified about the status of their conversion jobs, verify or update the
notification delivery settings for the object conversion notification type. Enable notifications for desktop,
mobile, mobile apps, and any additional apps listed.


## See Also

Manage Notification Delivery Settings


Use Commercial Excellence

Reduce manual tasks and streamline sales processes by using a screen flow to automate sales agreement
and quote record conversion.


## Convert a Quote or Sales Agreement

Quickly convert quotes to sales agreements or sales agreements to quotes.


Convert a Quote or Sales Agreement

Quickly convert quotes to sales agreements or sales agreements to quotes.

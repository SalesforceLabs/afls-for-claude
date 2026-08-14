<!-- guide:admin-guide section:set-up-sample-management-features pages:447-480 -->
# Set Up Sample Management Features



1. From the App Launcher, find and select Life Science Product Account Restriction, and click New.
2. Select the account that you want to restrict access for.
3. Choose the Life Science Marketable Product record or the product that you want to restrict access to.
4. If needed, select the territory that you want to control the access for.
When you select a territory, the product is restricted only for the account in that specific territory. If no
territory is selected, the product is restricted for the account universally.
5. Save your changes.


Create Product Territory Alignments in Bulk

Import multiple product records from external systems, align them with territories, and create detailed
availability records by using the Publish Draft Product Territory Alignments batch job.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To run batch jobs:                                   Life Sciences Commercial Admin permission set


In a bulk import, product territory availability records are imported in the Draft state. If a status is not
provided, Product Management automatically assigns the Draft status to the record.

When you run a batch job, the system changes the status of the records from Draft to Active, and creates
Product Territory Detailed Availability records for all child territories.

1. From the App Launcher, find and select Admin Console.
2. Select Product, and then select Product Alignment Job.
3. Click Run Now.




4. To check the status of the job, click Monitor Runs.



Set Up Sample Management Features

Enable pharmaceutical companies to efficiently handle and distribute drug samples to healthcare
providers. Enhance drug sales and keep healthcare providers informed about the safe and effective use
of products, leading to quicker treatments. Track and manage sales representative inventories of
samples, ensuring compliance with regulations, and maintaining accurate records of distribution.

<!-- page:448 -->



Effective sample management is crucial for supporting healthcare providers and low-income patients,
and ensuring ethical practices and regulatory compliance.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Sample Inventory Management

Help users request and manage samples in one place. Define product batches and unique identifiers
to simplify the tracking of the inventory operations. Configure inventory operations, counts, and other
options in the sample inventory dashboard.
Sample Limits
Sample limits provide precise control over sample distribution to help ensure your organization’s
compliance with governmental regulations and organizational policies. Use sample limit templates
and rules based on products and accounts to enforce limits. Streamline administrative tasks, optimize
resource allocation, and reduce audit risks, especially for new product launches or controlled
substances.
Territory Product Quantity Allocations
With territory product quantity allocations, you can control which products are available in each
territory as part of your company’s business strategy. Assign sample quantities to sales territories for a
specified period. Sales reps can only distribute or request approved samples that are allocated to their
assigned territories.


Sample Inventory Management

Help users request and manage samples in one place. Define product batches and unique identifiers to
simplify the tracking of the inventory operations. Configure inventory operations, counts, and other
options in the sample inventory dashboard.


## Prerequisites for Sample Inventory Management

Before setting up Sample Inventory Management, review and complete the prerequisite tasks.
Enable the Sample Inventory Management Dashboard
Give a user profile access to the Sample Inventory Management dashboard, where users can manage
inventory operations and request samples.
Configure Org-Wide Settings for Sample Inventory Management
Configure the admin console settings that apply universally in your Salesforce org.
Configure Profile Settings for Sample Inventory Management
Configure the sample inventory settings. You can apply the settings to a specific profile or the entire
org.
Select the Fields to Use for Sample Inventory Management

<!-- page:449 -->



Choose the fields that you want to show for the inventory count assessment types, inventory operation
types, and disbursement process.
Add a Quick Action Button for Resolving Disbursements
Add a button to make it easy to resolve disbursements. In Sample Inventory Management, you can get
samples disbursements first, and address the unresolved disbursement records later. This scenario
arises when a user hasn't acknowledged the samples they're received, and so they’re in possession of
the quantity required to make a disbursement, but the system count shows otherwise. Sample
Inventory Management enables users to perform the disbursement, but the Product Disbursement
record is created with a warning and the system temporarily pauses the update of the Product Batch
Item’s Remaining Quantity and Product Item’s Quantity On Hand fields. The user must acknowledge
the received inventory and resolve the disbursement.
Customize Actions for Inventory Processes
Create custom actions to override buttons in the Inventory Count Assessment records and in the
Inventory Operations records.
Set Up Data for Sample Inventory Management
Configure location types that serve as the sales representative’s inventory on hand,and define
addresses for the inventory’s storage locations. To easily track product samples in the sample inventory
workflow, configure production batches that store external identifiers, such as unique identification
numbers, and internal identifiers, such as the production batch name. View the sample product
quantity in a sales rep’s possession by configuring product batch items.


## See Also

Create Inventory Count Assessments
Transfer Sample Inventory Between Users and Locations
Return Sample Inventory to the Warehouse
Manually Adjust a Sample Inventory Count Discrepancy
Submit a Request to Replenish Sample Inventory
Acknowledge Received Samples from Transfers and Shipments


Prerequisites for Sample Inventory Management

Before setting up Sample Inventory Management, review and complete the prerequisite tasks.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Permission Sets

- To enable sample inventory admins to configure the necessary sample inventory data, assign the Life

<!-- page:450 -->



Sciences Commercial Admin permission set.
-   To help users create inventory count assessments and inventory operations, and acknowledge received
samples, assign the Field Sales Representative permission set and the Health Cloud Starter permission
set.
-   To request and perform inventory audits, clone the Life Sciences Commercial permission set. Assign
the Perform audits of Inventory Count Assessment records user permission to the user who’s the
auditor. Assign the Request audits of multiple Inventory Count Assessment records user permission to
the user who requests the audits.


Product Data Setup

- Create a Product record and a Life Science Marketable Product record. Make sure you select Drop or
Drop and Ship as the distribution method in the Life Science Marketable Product record. This action
ensures that sample products are visible during visits.
- Add the Production Batch and Product Item related lists to the Product object.
- Create product record types.
- Associate the product record types with the product specification types.
- Create picklist values for these fields.
- Location object’s Location Type field
- Inventory Operation’s Status field
- Product Transfer’s Status field
- Product Request’s Status field
- Production Batch’s Quantity Unit Of Measure field
You must add “Each” as a unit of measure.


Object Metadata Cache Configurations

To provide offline access to Sample Inventory Management in the mobile app, create object metadata
cache configurations of type Data for these objects. For the Location object, add the primaryUserId =
'{USER.ID}' SOQL filter condition.

- ProductItem
- ProductBatchItem
- InventoryOperation
- ProductDisbursement
- ProductionBatch
- Location
- Product2
- LifeSciMarketableProduct

Trigger Handlers

Note Make sure you activate these trigger handlers before you create records for Sample
Management.

<!-- page:451 -->



Sample Limits

- CalculateShippedQuantityHandler
- SampleLimitTransactionHandler
- NewAccountSampleLimitInitHandler
- NewAccountSampleLimitInitHandlerforHCO
Sample Inventory Management

- ProductTransferLockHandler
- ReceivedProductAllocationHandler
- ProductTransferValidationHandler
- TransferOutTriggerHandler
- ProductDisbursementSubmitLockHandler
- ProductDisbursementInventoryOpCreation
- LocationUserDupHandler
- LocationUserSharingHandler
- ProductBatchItemOwnershipHandler
- InventoryOperationLockHandler
- InventoryOperationSyncTxnHandler
- InventoryCountAssessmentLockHandler
- InventoryCountPBILockHandler
- ProductRequestLockHandler
- PrdReqLineItmUpdateAllocationHandler
- ProductRequestLineItemLockHandler
- ProductBatchItemUpdateByLotHandler
- InventoryCntPBIValidationHandler

Additional Configurations

On the Visit Administration tile’s Visit Settings tab, select Validate sample limits.


## See Also

Trigger Handler Administration
Trigger Handlers for the ProductBatchItem - ProductTransfer Objects
Set Up Product Management Features
Create Object Metadata Cache Configuration
Get Your Org Ready for Visit Management


Enable the Sample Inventory Management Dashboard

Give a user profile access to the Sample Inventory Management dashboard, where users can manage
inventory operations and request samples.

<!-- page:452 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To enable the Sample Inventory Management tab:       Life Sciences Commercial Admin permission set


Here’s a video about the dashboard to help you get started.

Watch the video: https://salesforce.vidyard.com/watch/7qz6hNC6mRMk9KdqiAABh5

If you aren’t able to watch the video in full screen mode, open the video on a new tab:       Learn about
the Sample Inventory Management Dashboard.

1.    From Setup, in the Quick Find box, find and select Profiles.
2.    Select the profile, and click Edit.
3.    In the Tab Settings, for Sample Inventory Management, select Default On.
4.    Save your changes.


## See Also

Manage Sample Inventory


Configure Org-Wide Settings for Sample Inventory Management

Configure the admin console settings that apply universally in your Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure admin console settings:                 Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select the Sample Inventory Management tile.
3.    In the left navigation pane, select Org-Wide Settings.
4.    Configure the settings that apply across the org.

<!-- page:453 -->



a. Select the location type that represents the user’s inventory location.
b. Choose whether you want to show only active batch assignments.
If this setting is selected, only active batch assignments are considered for all sample inventory
processes, such as in inventory counts, transfers, returns, and disbursements.
c. Select a validation type for restricting or allowing inventory operations and count assessments when
records aren’t synced.
5. Configure the inventory operation settings.
a. Select the status that indicates that an Inventory Operation record is final.
b. Select the status that represents that the product sample is returned to the sender.
c. Select the status that indicates that a Transfer In record is a duplicate record.
6. Select the inventory count assessment validation type for inventory disbursed during the visits that are
still in Planned state and have signatures captured.
7. Configure the product request settings.
a. Select the final product request status.
b. To control the quantity requested, select Require approval for product requests that exceed the
territory’s remaining quantity and Show a warning when a product request crosses maximum
and minimum limits.
c. Add statuses to indicate that a product request requires approval.
When you define a status in the Product Request Approval Required Status field, Sample Inventory
Management applies the minimum and maximum limits that you’ve defined and checks the
remaining territory allocation.
8. Save your changes.


Configure Profile Settings for Sample Inventory Management

Configure the sample inventory settings. You can apply the settings to a specific profile or the entire org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure admin console settings:                 Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select the Sample Inventory Management tile.
3.    In the left navigation pane, select General Settings.
4.    Choose whether to apply the settings to the org or a specific profile.
5.    Select the statuses that indicate that an inventory count assessment and its related records are locked.
6.    Select the columns that you want to show in inventory count assessments.

<!-- page:454 -->



a. To display the Quantity Received, Quantity Released, and Total System Count columns, select Show
system-calculated quantities in Inventory Count Assessments.
b. To hide the history of Adjustments, Transfer In, Transfer Out, and Return type operations while
performing count assessments, select Hide inventory operations history.
c. To display the system-calculated Opening Count column for all count assessments, select Show
opening count.
d. To display only the inventory counts and operations assigned to the user in the inventory count
assessment window, select Show only assigned assessment and operation records.
7. Configure the product request settings.
a. Select the statuses that indicate that a product request and the related product request line item
are locked.
b. Choose whether to show the remaining allocation for a territory.
8. Select the statuses that indicate that Inventory Operations records and Product Transfer records are
locked.
9. Save your changes.


Select the Fields to Use for Sample Inventory Management

Choose the fields that you want to show for the inventory count assessment types, inventory operation
types, and disbursement process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To edit field sets:                                  Customize Application


1. From the object management settings for Inventory Operation, go to Field Sets.
2. Next to Adjustment, click     , and click Edit.
3. Move the fields that you want to show to the In the Field Set list.
4. Save your changes.
5. Repeat these steps for the Disbursement, Transfer in, Transfer out, Return, and Return to Sender field
sets.
6. From the object management settings for Inventory Count Assessment, select the fields for the Ad
Hoc, Audited, Initial, and Periodic objects.

See Also
About Field Sets

<!-- page:455 -->




Add a Quick Action Button for Resolving Disbursements

Add a button to make it easy to resolve disbursements. In Sample Inventory Management, you can get
samples disbursements first, and address the unresolved disbursement records later. This scenario arises
when a user hasn't acknowledged the samples they're received, and so they’re in possession of the
quantity required to make a disbursement, but the system count shows otherwise. Sample Inventory
Management enables users to perform the disbursement, but the Product Disbursement record is
created with a warning and the system temporarily pauses the update of the Product Batch Item’s
Remaining Quantity and Product Item’s Quantity On Hand fields. The user must acknowledge the
received inventory and resolve the disbursement.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add quick action buttons:                         Life Sciences Commercial Admin permission set


1. Create an action button.
a. From the object management settings for Product Disbursement, go to Buttons, Links, and Actions.
b. Click New Action.
c. For Action Type, select Lightning Component.
d. For Lightning Component, select Isc4ce:ResolveProductDisbursementRecordAction.
e. Enter a label, for example, Resolve Disbursement.
The name is automatically populated.
f. Save your changes.
2. Add the button to the page layout.
a. From the object management settings for Product Disbursement, go to Page Layout.
b. Click Product Disbursement Layout.
c. In the Page Layout editor, go to Mobile & Lightning Actions.
d. Move the button to the Salesforce Mobile and Lightning Experience Actions section.
e. Save your changes.
The button appears on the Product Disbursement page’s highlights panel.


## See Also

https://help.salesforce.com/s/articleView?id=platform.actions_overview.htm&type=5
Quick Actions
Fix Unresolved Product Disbursements

<!-- page:456 -->




Customize Actions for Inventory Processes

Create custom actions to override buttons in the Inventory Count Assessment records and in the
Inventory Operations records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To override buttons for inventory operations:        Life Sciences Commercial Admin permission set


1. Override the New and View buttons for the Inventory Count Assessment object.
a. From the object management settings for Inventory Count Assessment, go to Buttons, Links, and
Actions.
b. Next to the New button, click     and select Edit.
c. In the Override Properties pane, under Lightning Component Override, select Lightning
Component.
d. In the dropdown next to Lightning Component, select lsc4ce:InventoryCountAssessment.
e. Save your changes.
f. Repeat these steps for the View button, but in the Lightning Component dropdown, select
lsc4ce:ViewSamplelnventory.
2. Override the Edit, New, and View buttons for the Inventory Operations object.
a. From the object management settings for Inventory Operations, go to Buttons, Links, and Actions.
b. Next to the Edit button, click   and select Edit.
c. In the Override Properties pane, under Lightning Component Override, select Lightning
Component.
d. In the dropdown next to Lightning Component, select lsc4ce:InventoryOperations.
e. Save your changes.
f. Repeat these steps for the New and View buttons. For the New button, select
lsc4ce:InventoryOperations. For the View button, select lsc4ce:ViewSampleTransaction.


## See Also

https://help.salesforce.com/s/articleView?id=platform.actions_overview.htm&type=5
Quick Actions


Set Up Data for Sample Inventory Management

Configure location types that serve as the sales representative’s inventory on hand,and define addresses
for the inventory’s storage locations. To easily track product samples in the sample inventory workflow,

<!-- page:457 -->



configure production batches that store external identifiers, such as unique identification numbers, and
internal identifiers, such as the production batch name. View the sample product quantity in a sales rep’s
possession by configuring product batch items.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Before you start configuring data, make sure that you have the following records in place.

- To configure products, make sure you create a Product (Product2) record.
- To designate it as a sample product, create a corresponding Life Science Marketable Product
(LifeSciMarketableProducts) record.
-    Create users who represent sales reps.


## Add an Inventory Location and Address for Sample Inventory Management

In Sample Inventory Management, the Location record represents the inventory that’s currently in a
sales rep’s possession, rather than a physical location. Each sales rep is assigned a particular location to
help you trace inventory. Create locations and add addresses for the storage of sample inventory.
Create Production Batches for Sample Inventory
Manage and track inventory transactions by organizing products into batches. Products are tracked by
batches across all inventory operations, counts, acknowledgments, returns, and disbursements.
Create Product Items for Sample Inventory
Product items help establish a one-to-one relationship between a product and a location. When the
location is designated as an inventory location, product items represent the total quantity of a product
assigned to a user as inventory.
Create Product Batch Items for Sample Inventory
A product batch item establishes the relationship between the Product, Life Science Marketable
Product, Production Batch, Product Batch Item, Location, and User records. It captures information
about the product items allocated to a sales rep, organized by the batches that the products belong to.
A product batch item record helps maintain compliance by keeping a sales rep within the defined
disbursement limits. The allotted quantity is updated whenever the sales rep executes an inventory
operation.


Add an Inventory Location and Address for Sample Inventory Management

In Sample Inventory Management, the Location record represents the inventory that’s currently in a sales
rep’s possession, rather than a physical location. Each sales rep is assigned a particular location to help
you trace inventory. Create locations and add addresses for the storage of sample inventory.

<!-- page:458 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create locations:                                  Life Sciences Commercial Admin permission set


Before adding locations, make sure that the Location's page layout contains the Primary User field and
the Inventory Location field.

1. From the App Launcher, find and select Locations.
2. Click New, and enter these details.
a. For the primary user, select the sales rep who is assigned the inventory for the location.
b. Select a location type.
Select the custom picklist value that indicates that the location type represents a sales rep’s
inventory.
c. Select Inventory Location.
If you set the location as an inventory-related location for a sales rep, you must set the location type
as a User Inventory Location Type in the admin console settings. See Configure Org-Wide Settings
for Sample Inventory Management.
d. Save your changes.
3. On the Related tab, under Addresses, click New.
a. Select a location type.
b. Enter an address for the inventory and a postal code.
c. Save your changes.


## See Also

Manage Sample Inventory


Create Production Batches for Sample Inventory

Manage and track inventory transactions by organizing products into batches. Products are tracked by
batches across all inventory operations, counts, acknowledgments, returns, and disbursements.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:459 -->




USER PERMISSIONS NEEDED

To create batches:                                   Life Sciences Commercial Admin permission set


Important To track batches by using external identifiers, you must populate the Unique
Identification Number. If the Unique Identification Number isn't populated, Sample Inventory
Management tracks batches by using the system-generated Production Batch Name.


1. From the App Launcher, go to the Product record that you want to create a batch for.
2. On the Related tab, under Production Batch, click New.
3. Select Active, and add the unique identification number of the batch that the sample product belongs
to.
4. For Quantity Unit of Measure, select Each.
5. Select the expiry date of the batch.
6. Save your changes.


Create Product Items for Sample Inventory

Product items help establish a one-to-one relationship between a product and a location. When the
location is designated as an inventory location, product items represent the total quantity of a product
assigned to a user as inventory.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create product items:                             Life Sciences Commercial Admin permission set


Note For Sample Inventory Management processes to work as intended, you must create only one
Product Item record for a combination of a location and a product. To avoid inadvertently creating
duplicate product items for a combination of a location and a product, we recommend not adding
serial numbers to product items, especially when you import records from an external system.


1.    From the App Launcher, go to the Product record that you want to add a production batch.
2.    In the Product Item section, click New.
3.    Select the location that’s associated with the user.
4.    For Quantity On Hand, enter 0.
The quantity on hand is automatically updated based on the product batch items that the product
item is related to. You can change the product quantity assigned to the user by updating the Quantity

<!-- page:460 -->



On Hand field.
5. For Quantity Unit of Measure, select Each.
6. Save your changes.


Create Product Batch Items for Sample Inventory

A product batch item establishes the relationship between the Product, Life Science Marketable Product,
Production Batch, Product Batch Item, Location, and User records. It captures information about the
product items allocated to a sales rep, organized by the batches that the products belong to. A product
batch item record helps maintain compliance by keeping a sales rep within the defined disbursement
limits. The allotted quantity is updated whenever the sales rep executes an inventory operation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create product batch items:                       Life Sciences Commercial Admin permission set


The Production Batch Item related list must be added to the Production Batch’s related tab.

1. From the App Launcher, go to the Production Batch record that you want to add a production batch
item to.
2. On the Related tab, under Product Batch Item, click New.
3. Select the product item assigned to a user.
4. Select Active.
5. In the Remaining Quantity field, enter the number of samples of the product batch to allocate to the
user's inventory.
6. Save your changes.


Sample Limits

Sample limits provide precise control over sample distribution to help ensure your organization’s
compliance with governmental regulations and organizational policies. Use sample limit templates and
rules based on products and accounts to enforce limits. Streamline administrative tasks, optimize
resource allocation, and reduce audit risks, especially for new product launches or controlled substances.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:461 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Create sample limit templates that contain the rules, operations, and limits to evaluate for each product
and account. Assign sample limit templates to products or product groups, and update the sample limit
rules for individual products as needed. Then, run a job to initialize individual accounts or account
segments with the appropriate sample allocation amounts based on the sample limit template’s rules.
Or set up automatic initialization so sample limits are applied as soon as new HCP and HCO accounts are
created.

Each time a sales rep disburses a sample, a Provider Visit Sample Limit Transaction record is created, and
the related Provider Sample Limit records are updated automatically. When disbursing samples, errors or
warnings make sure that sales reps stay within the defined limits.

To replace the sample limits for an account or product, run a batch job to delete the existing Provider
Sample Limit records associated with the applied sample limit template. Then, apply a new template and
run another job to create the new Provider Sample Limit records for that account and product.


## Sample Limit Templates

Sample limit templates contain the rules, operations, and limits to evaluate for each assigned product
and account. View the sample limit templates included with Life Sciences Customer Engagement.
Create generic templates that use default rules and conditions, or configure advanced templates with
complex sample limit rules.
Manage Sample Limit Template Product Assignments
To enforce rules and manage distribution based on the template’s defined limits, assign sample limit
templates to products or product groups.
Update Sample Limit Rules for Products
See the template and sample limit rules applied to each product. To help ensure your organization’s
compliance with governmental regulations and organizational policies, customize sample limit rules
for individual products.
Create Account Segments for Sample Limits
Group accounts into segments by creating actionable lists so that you can customize sample limits and
distribution strategies for different account groups.
Initialize Sample Limits and Create Sample Limit Records
Sample limits rely on dedicated batch jobs and trigger handlers to handle large-scale data processing.
These sample limit batch jobs automate the creation of provider sample limit records for each
combination of account, product, and assigned sample limit template.
Delete Sample Limit Rules for a Product
To clear all limits for an account and product, delete the product's sample limit rules. Then, you can
reestablish new rules for that product.
Delete All Sample Limits for an Account
To remove outdated restrictions on sample distribution across all accounts, delete sample limits for a
specific template. Then, you can apply new templates for those accounts.

<!-- page:462 -->




## Monitor and Run Batch Jobs for Sample Limit Triggers

Sample limit trigger handlers use batch jobs to automate the processing of large volumes of records.
Track the status and health of sample limit batch jobs, and reprocess records if the batch jobs fail.


Sample Limit Templates

Sample limit templates contain the rules, operations, and limits to evaluate for each assigned product
and account. View the sample limit templates included with Life Sciences Customer Engagement. Create
generic templates that use default rules and conditions, or configure advanced templates with complex
sample limit rules.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

Note The AFLS Sample Limits features, functionality, and templates (the “Sample
Limits Features”) are solely intended to help Customers provide quality services to healthcare
provider (HCP) and similar end customers by giving such Customers capabilities to track and keep
records of samples of medications offered, provided, or otherwise distributed by their own HCP end
customers. Customers must comply with all applicable pharmaceutical, healthcare, and medicinal
product-related laws in their use of the Sample Limits Features. In addition, it is Customer’s
responsibility to: (i) determine which individuals within Customer’s organization can access the
Sample Limits Features; and (ii) set the appropriate permissions consistent with Customer’s use case
and related compliance obligations.


From the Sample Limit Templates page in the Admin Console, you can:

- See all templates.
- Add the default templates provided by Salesforce to your org.
- Create clones of the generic template or new advanced templates.
- Make custom generic templates and advanced templates active or inactive.
Types of Sample Limit Templates
Life Sciences Customer Engagement includes a generic sample limit template and several country-
specific templates by default. You can also create custom generic templates by cloning the default
template. Or, you can create advanced templates that you can configure based on requirements for
other countries.
Add Default Sample Limit Templates to Your Salesforce Org
Life Sciences Customer Engagement provides a generic sample limit template and several country-
specific templates that you can add to your org. These templates contain predefined rules and
operations for sample distribution, and they can’t be edited or deleted.

<!-- page:463 -->




## Create Custom Generic Sample Limit Templates

To apply similar rules or configurations across different teams, geographies, or products with only
small changes, create a custom generic template. When you create a custom generic sample limit
template, you clone the generic sample limit template provided by Life Sciences Customer
Engagement. Your custom generic template includes the default generic template’s rules and
conditions.
Create Advanced Sample Limit Templates
To define custom sample limit rules for more complex needs and for regions with stricter
requirements, create an advanced sample limit template. For example, use an advanced template to
configure sample limit rules for three years from the first drop date.


Types of Sample Limit Templates

Life Sciences Customer Engagement includes a generic sample limit template and several country-
specific templates by default. You can also create custom generic templates by cloning the default
template. Or, you can create advanced templates that you can configure based on requirements for
other countries.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Template Type                       Features                                Limitations


## Default Country-specific

Templates                           • Templates are predefined, and • After limits are created, you
you can’t customize, edit, or          can’t change them.
delete them.                       • You can assign only one
-   You can initialize sample limits       template to a product.
automatically for new              •   You can’t use template priority
healthcare professional (HCP)          to determine the limits to
and healthcare organization            apply.
(HCO) accounts.                    •   The only rule enforcement
type is Error, meaning that
additional distributions are
blocked after limits are met.



## Default Generic Template

- Templates are predefined, and • You can’t assign a priority to
you can’t customize, edit, or          the default generic template.

<!-- page:464 -->




Template Type                   Features                                Limitations



## delete them.                       • You can’t assign multiple

-   You can initialize sample limits       templates to one product.
automatically for HCP and          •   The only rule enforcement
HCO accounts.                          type is Error, meaning that
-   After the template is applied          additional distributions are
to a product, update the limits        blocked after limits are met.
and period from the Sample
Limit Rules page.



## Custom (Cloned) Generic

Template                        • Create a custom generic              • If you assign a custom generic
template by cloning the                template to a product, you
default generic template.              can’t assign a country-specific
-   Choose between Error and               template.
Warning enforcement types to       •   You can’t use a custom generic
define what happens when               template to initialize sample
sample limits are violated.            limits automatically for new
-   Assign multiple templates to           HCP and HCO accounts.
the same product. To
determine which sample limit
rules take precedence when
multiple templates apply,
assign each template a
priority.
-   Update limits for the sample
product by creating another
custom generic template and
assigning it a higher priority.
-   When a new account is
created and multiple cloned
generic templates apply to the
product, sample limits are
created based on the highest
priority template.
-   New sample limits aren’t
created when an account has
existing sample limits with a
higher priority.
-   You must create templates
separately and assign them to
accounts or account

<!-- page:465 -->




Template Type                       Features                                Limitations


segments.



## Advanced Template defined as

Required by Law                     • The template is treated as a         • After limits are created, you
country-specific template.             can’t change them.
- You can initialize sample limits • You can assign only one
automatically for HCP and              template to a product.
HCO accounts.                      •   You can’t use template priority
to determine the limits to
apply.
-   The only rule enforcement
type is Error, meaning that
additional distributions are
blocked after limits are met.



## Advanced Template not defined

as Required by Law                  • To define what happens when • After limits are created, they
sample limits are violated,            can’t be changed.
choose between Error and           • You can assign only one
Warning enforcement types.             template to a product.
-   You can initialize sample limits   •   You can’t use template priority
automatically for HCP and              to determine the limits to
HCO accounts.                          apply.



Add Default Sample Limit Templates to Your Salesforce Org

Life Sciences Customer Engagement provides a generic sample limit template and several country-
specific templates that you can add to your org. These templates contain predefined rules and
operations for sample distribution, and they can’t be edited or deleted.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To add default sample limit templates:                  Life Sciences Commercial Admin permission set

<!-- page:466 -->



These templates are available for you to add to your org.

- Belgium
- Generic Template
- Germany AMG
- Germany AMG + EPFIA
- Italy Class A
- Italy Class C
- Netherlands
- Turkey
1. From the App Launcher, find and select Admin Console.
2. Select Sample Limits, and then select Sample Limit Templates.
3. Select Add Default Templates.
If the templates are added already, you don't see this button.
4. Review the templates, and then add them to your org.

To see each template's rules and conditions, assign the template to a product from the Template Product
Assignments page. Then, from the App Launcher, find the Provider Sample Limit Template Assignment
record that was created. Open the template, or review the rules in the Rule Conditions field.


Create Custom Generic Sample Limit Templates

To apply similar rules or configurations across different teams, geographies, or products with only small
changes, create a custom generic template. When you create a custom generic sample limit template,
you clone the generic sample limit template provided by Life Sciences Customer Engagement. Your
custom generic template includes the default generic template’s rules and conditions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create custom generic sample limit templates:     Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select Sample Limits.
3.    Select Sample Limit Templates, and then click New.
4.    Enter a unique label and API name for the template.
5.    Enter a priority number for the template.
The priority determines which template takes precedence when multiple templates apply to the same

<!-- page:467 -->



sample disbursement.
6. To determine what happens when sample limits are violated, select the limit enforcement type.
- To block additional disbursements, select Error.
- To let sales reps choose whether to continue with the disbursement or not, select Warning.
7. To make the template available for product assignments, select Active.
8. Save your changes.

After you create your template, you can assign the template to products and run jobs to apply sample
limit rules to accounts and products.


Create Advanced Sample Limit Templates

To define custom sample limit rules for more complex needs and for regions with stricter requirements,
create an advanced sample limit template. For example, use an advanced template to configure sample
limit rules for three years from the first drop date.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create advanced sample limit templates:           Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Sample Limits, and then select Sample Limit Templates.
3. Click New, and then click Advanced.
4. Enter a unique label and API name for the template.
5. To make the template available for product assignments, select Active.
6. To configure this template similar to the provided country-specific templates, select Required by Law.
7. If the template isn’t required by law, select the enforcement type to determine what happens when
sample limits are violated.
- To block additional distributions, select Error.
- To let sales reps choose whether to continue with the distribution or not, select Warning.
8. To determine how to apply the template's rules, select the rule operator.
9. Under Sample Limit Rules, enter a name for the first rule and how many samples can be distributed
per period and per visit.
10. Select the period type, and enter the other details for the rule.
- To enforce sample limits from the date of the first sample distribution, select Rolling Start. Set an
interval to define how long to enforce limits after the first drop. Set an offset to add a delay or shift
from the time of the first drop.
- To enforce sample limits from a fixed start date, such as the product’s launch date, select Fixed

<!-- page:468 -->



Start. Set an interval to define how long to enforce limits after the start date. Set an offset to add a
delay or shift from the start date.
- To set the maximum number of samples that can be distributed within a specified date range,
select Date Range .
- To set the maximum number of samples that can be distributed within a calendar year, select
Calendar Year.
11. Create more sample limit rules, or delete the ones that you no longer need.
You can create up to 3 rules.
12. Save your changes.

After you save your template, you can assign it to products and run jobs to apply its sample limit rules to
accounts and products.


Manage Sample Limit Template Product Assignments

To enforce rules and manage distribution based on the template’s defined limits, assign sample limit
templates to products or product groups.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage sample limit templates product               Life Sciences Commercial Admin permission set
assignments:


1. From the App Launcher, find and select Admin Console.
2. Select Sample Limits, and then select Template Product Assignments.
3. Select the template that you want to assign to products.
If you select the default generic template or a custom generic template, you can modify the maximum
quantity for each visit and period. You can also set the period start and end dates for the products that
you select.
4. In the product hierarchy, search for products, or use the arrows to expand or collapse product groups.
5. Select the products to apply sample limit templates to.
6. Scroll to the bottom of the page and save your changes.
When you save your changes, provider sample limit template assignment records are created
automatically for each product and template. If you make changes to the templates, these records
aren’t updated. Update provider sample limit template assignment records manually to reflect the
updated template rules.
7. Go to the Sample Limits Jobs page and run the relevant job.
- If this is the first time you’re assigning the template to a product, run the job to initialize the

<!-- page:469 -->



template for accounts.
-   If the template already had a product assigned and you changed the assigned template, run the
Assign Sample Limit Templates to Products job instead.

After you assign sample limit templates to products, make sure that users can access provider sample
limit template assignments. Update the sharing settings for the provider sample limit template
assignment object and set the default internal access to Public Read Only. Alternatively, share these
records with each user manually.


Update Sample Limit Rules for Products

See the template and sample limit rules applied to each product. To help ensure your organization’s
compliance with governmental regulations and organizational policies, customize sample limit rules for
individual products.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage sample limit rules:                        Life Sciences Commercial Admin permission set


You can update sample limit rules only for products assigned to the default generic template.

1. From the App Launcher, find and select Admin Console.
2. Select Sample Limits, and then select Sample Limit Rules.
3. In the product hierarchy, search for products, or use the arrows to expand or collapse product groups.
4. To see a product's assigned template and sample limit rules, select a product in the hierarchy.
5. If the default generic template is assigned to the product, update its sample limit rules as needed.
Enter or update the maximum limits for each visit and each period, and adjust the period start and
end dates.
6. Save your changes.
7. Go to the Sample Limits Jobs page, and then run the Assign Sample Limit Templates to Products job.
If accounts aren’t initialized with the sample limits for this product yet, run the Assign Sample Limit
Templates to Accounts job instead.


Create Account Segments for Sample Limits

Group accounts into segments by creating actionable lists so that you can customize sample limits and
distribution strategies for different account groups.

<!-- page:470 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To manage sample limits:                               Life Sciences Commercial Admin permission set


## To create actionable list definitions and actionable

lists:                                                 Health Cloud Starter permission set

AND

Actionable Segmentation permission set

AND

Data Pipelines Base User permission set

AND

Query for Datapipelines User permission set

AND

Use Data Processing Engine permission


Create an Actionable List Definition

Create an actionable list definition of type Healthcare Provider List by using the provided Create Dataset
for Segmentation data processing engine template. The Create Dataset for Segmentation data
processing engine creates a dataset by integrating data from the account, healthcare provider, provider
account product information, and provider account territory information objects.

Before you create an actionable list definition, make sure that you set up person accounts and territories.
Then, grant Read access to these objects and their fields for the Analytics Cloud Integration User and
Business Admin user profiles.

- Account
- Healthcare Provider
- Provider Account Product Information
- Provider Account Territory Information
1. From Setup, in the Quick Find box, find and select Data Processing Engine under Workflow Services.
2. Find the Create Dataset for Segmentation job in the list, click the action menu, and then select Save

<!-- page:471 -->



As.
3. Enter a unique name and API name for the definition, and then save your changes.
Copy and save the API name so that you can update the writeback object node.
4. If needed, edit the Data Processing Engine definition.
5. Update the writeback object for the Data Processing Engine definition.
a. Find the cloned Data Processing Engine definition in the list and select it.
b. Select the Create Dataset Writeback object node, and then select Configure.
c. In the Dataset Name field, enter the API name of the Data Processing Engine definition.
d. Save your changes.
6. Activate the cloned Data Processing Engine definition.
7. Run the activated Data Processing Engine definition to create the initial dataset.


Create an Account Segment

Define an account segment by creating an actionable list of type Healthcare Provider List.

1. From the App Launcher, find and select Admin Console.
2. Select Sample Limits, and then Segmentation.
3. Select Manage Segmentation.
The Actionable Lists page opens.
4. On the Actionable Lists page, define an account segment by creating an actionable list. Select a list
definition of type Healthcare Provider List.

After you create an account segment, return to the Sample Limits tile in the Admin Console to initialize
sample limits for those accounts.


## See Also

Create an Actionable List Definition
Create Actionable Lists From List Definitions
Initialize Sample Limits for Accounts


Initialize Sample Limits and Create Sample Limit Records

Sample limits rely on dedicated batch jobs and trigger handlers to handle large-scale data processing.
These sample limit batch jobs automate the creation of provider sample limit records for each
combination of account, product, and assigned sample limit template.


## Initialize Sample Limits for Accounts

To initialize the sample limit templates that are assigned to healthcare professional (HCP) and
healthcare organization (HCO) accounts for the first time, run the Assign Sample Limit Templates to
Accounts job. When you initialize the templates, provider sample limit records are created for each
account and product based on the sample limit template and rules.
Assign Sample Limit Templates to Products
To apply sample limits when new products are assigned to an existing sample limit template or when a
product’s sample limit rules are updated, run the Assign Sample Limit Template to Products job. When

<!-- page:472 -->



you run this job, additional provider sample limit records are created for new products and existing
provider sample limit records are updated based on updates to the template.
Automate Sample Limits for New Accounts
Define how sample limit templates are applied automatically to newly created healthcare professional
(HCP) and healthcare organization (HCO) accounts.


Initialize Sample Limits for Accounts

To initialize the sample limit templates that are assigned to healthcare professional (HCP) and healthcare
organization (HCO) accounts for the first time, run the Assign Sample Limit Templates to Accounts job.
When you initialize the templates, provider sample limit records are created for each account and
product based on the sample limit template and rules.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To run sample limit jobs:                            Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select Sample Limits, and then select Sample Limit Jobs.
3.    Under Assign Sample Limit Templates to Accounts, click Run Now.
4.    In the Account Scope field, select whether to initialize sample limits for all accounts, a specific
account, or a segment of accounts.
5.    Select whether to initialize sample limits for only HCP accounts, only HCO accounts, or both HCP and
HCO accounts.
6.    If you’re initializing sample limits for only a certain account, select an account.
7.    If you’re initializing sample limits for only a certain segment of accounts, select a segment.
8.    Select a sample limit template to apply to the accounts.
9.    To set how many accounts to initialize sample limits for in this job run, adjust the batch size.
10.    Run the job.
The job runs asynchronously. To see the job’s status, monitor the log on the Sample Limit Jobs page.

In the job log, this job’s name is SampleLimitJobInit. Running this job for all accounts or for a segment
of accounts creates two entries in the log. One entry tracks the sample limit records created and one
entry tracks updates to the created records. The number of records processed in each entry can be
different if there aren’t records to update.

<!-- page:473 -->



Assign Sample Limit Templates to Products

To apply sample limits when new products are assigned to an existing sample limit template or when a
product’s sample limit rules are updated, run the Assign Sample Limit Template to Products job. When
you run this job, additional provider sample limit records are created for new products and existing
provider sample limit records are updated based on updates to the template.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To run sample limit jobs:                            Life Sciences Commercial Admin permission set


Run this job only after you assign a sample limit template to a new product or after you update limits for
an existing product.

1. From the App Launcher, find and select Admin Console.
2. Select Sample Limits, and then select Sample Limit Jobs.
3. Under Assign Sample Limit Template to Products, click Run Now.
4. Select the template that you assigned to a product or that you updated sample limit rules for.
Only the products that are assigned to the template appear in the list of available products.
5. Move the products with newly assigned templates or updated rules to the Selected Products section.
6. To determine how many sample limits to update, adjust the batch size.
7. Run the job.
The job runs asynchronously. To see the job’s status, monitor the list on the Sample Limit Jobs page.

In the Sample Limits Job log, this job’s name is SampleLimitJobUpdate. Running the job creates two
entries in the log, one to track the sample limit records created and one to track updates to the
created records. The number of records processed in each job can be different if there aren’t records
to update.


## See Also

Manage Sample Limit Template Product Assignments
Update Sample Limit Rules for Products


Automate Sample Limits for New Accounts

Define how sample limit templates are applied automatically to newly created healthcare professional
(HCP) and healthcare organization (HCO) accounts.

<!-- page:474 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To enable trigger handlers:                              Life Sciences Commercial Admin permission set


You can initialize sample limits automatically with these template types.

- Default country-specific templates
- Default generic template
- Custom advanced templates

Turn on Trigger Handlers

To initialize sample limits automatically for all templates in your Salesforce org, first turn on trigger
handlers.

1. From the App Launcher, find and select LifeSciences Commercial, and then select Admin Console.
2. Select Trigger Handler Administration.
3. Search for and turn on these trigger handlers.
- NewAccountSampleLimitInitHandlerforHCO
- NewAccountSampleLimitInitHandler

Initialize Sample Limits for Specific Templates

After you turn on trigger handlers, you can choose to initialize sample limits for accounts with specific
templates.

1. From the object management settings for the Account object, create a custom text or picklist field to
determine the sample limit templates that are applied automatically to new HCP or HCO accounts.
2. From the App Launcher, find and select Admin Console.
3. Select Sample Limits, and then select Sample Limit Settings.
4. Choose whether to apply the settings at the organization level, or select the user profile or the
individual user to apply the settings for.
5. In the Account Sample Limits Source Field, select the field on the Account object that determines the
sample limit templates that are applied automatically to new healthcare professional or healthcare
organization accounts.
6. Save your changes.

Each time that you create a new account, in the custom field that you created, enter the API name of the

<!-- page:475 -->



sample limit template to initialize for that account. After you save the record, sample limit templates are
initialized automatically for the new account.

If you update the custom sample limit template field on an existing account, run the batch job manually
to initialize the sample limits for that account. See Monitor and Run Batch Jobs for Sample Limit Triggers.


Delete Sample Limit Rules for a Product

To clear all limits for an account and product, delete the product's sample limit rules. Then, you can
reestablish new rules for that product.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To delete sample limit rules:                        Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select Sample Limits, and then select Sample Limit Rules.
3.    In the product hierarchy, search for products, or use the arrows to expand or collapse product groups.
4.    To see a product's assigned template and sample limit rules, select the product in the hierarchy.
5.    To delete sample limit rules and remove the product from the template, click Delete.
6.    Go to the Sample Limits Job page, and then run the Delete Sample Limits job.

After you delete sample limit rules, you can apply a new template to that product and update rules if
needed. Then, initialize the new sample limits for that account and product.


Delete All Sample Limits for an Account

To remove outdated restrictions on sample distribution across all accounts, delete sample limits for a
specific template. Then, you can apply new templates for those accounts.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:476 -->




USER PERMISSIONS NEEDED

To run sample limit jobs:                            Life Sciences Commercial Admin permission set


Running this job doesn’t delete provider sample limit records that are in use for sample limit
transactions. To replace the template that’s in use, assign and initialize a new template for that account
or segment. Then, run this job to delete the sample limits associated with the old template.

1.    From the App Launcher, find and select Admin Console.
2.    Select Sample Limits, and then select Sample Limit Jobs.
3.    Under Delete Sample Limits, click Run Now.
4.    Select the template that you want to delete sample limits for.
5.    To determine how many sample limits to delete in this job, adjust the batch size.
6.    Run the job.
The job runs asynchronously. To see the job’s status, monitor the list on the Sample Limit Jobs page.

To verify that sample limits are deleted after the job runs, go to the App Launcher, and then find and
select Provider Sample Limits. All sample limits created from the template are deleted and no longer
appear in the list view.


Monitor and Run Batch Jobs for Sample Limit Triggers

Sample limit trigger handlers use batch jobs to automate the processing of large volumes of records.
Track the status and health of sample limit batch jobs, and reprocess records if the batch jobs fail.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create, edit, and delete AFLS      Life Sciences Commercial Admin permission set
data:

To use the Developer Console:                        API Enabled AND View All Data


If a batch job fails for one of these trigger handlers, review the batch job and batch job part records to
get details about the failures.

- CalculateShippedQuantityHandler
- NewAccountSampleLimitInitHandler
- NewAccountSampleLimitInitHandlerforHCO

<!-- page:477 -->



Then, you can reprocess the failed records so the sample limits are created or updated.

1. From the Setup menu, open the Developer Console.
2. Select Debug, and then select Open Execute Anonymous Window.
3. To reprocess records created or updated via the CalculateShippedQuantityHandler trigger handler,
enter this Apex code. In sampleIds , replace the example set of Provider Visit Requested Sample
record IDs with your own.

Set<Id> sampleIds = new Set<Id> { '001XXXXXXXXXXXXAA4', '001XXXXXXXXXXXXAA4'
};


Map<String, Object> paramMap = new Map<String, Object>();


paramMap.put('action', 'updateSampleLimitsWithShippedQuantity');


paramMap.put('providerVisitRqstSampleIds', sampleIds);



## LifeScienceApi.getInstance(LifeScienceApi.Command.SampleLimitsJobServi

ce).execute(paramMap);


4. To reprocess records created or updated via the NewAccountSampleLimitInitHandler or
NewAccountSampleLimitInitHandlerforHCO trigger handlers, enter this Apex code. In accountIds ,
enter the IDs of the accounts to process and initialize sample limits for.

Set<Id> accountIds = new Set<Id> { '001XXXXXXXXXXXXAA4', '001XXXXXXXXXXXXAA
4' };


Map<String, Object> paramMap = new Map<String, Object>();


paramMap.put('action', 'initializeSampleLimitsForNewAccounts');

paramMap.put('accountIds', accountIds);



## LifeScienceApi.getInstance(LifeScienceApi.Command.SampleLimitsJobServi

ce).execute(paramMap);


5. Click Execute.
Executing the Apex code invokes the trigger handlers to reprocess the records. If the batch job fails
again, failures are logged in new batch job and batch job part records.

See Also
Developer Console
Apex Developer Guide: Batch Apex

<!-- page:478 -->




Territory Product Quantity Allocations

With territory product quantity allocations, you can control which products are available in each territory
as part of your company’s business strategy. Assign sample quantities to sales territories for a specified
period. Sales reps can only distribute or request approved samples that are allocated to their assigned
territories.


## When to Use Territory Product Quantity Allocations and Sample Limits

Both territory product quantity allocations and sample limits can help you manage sample product
distribution to healthcare professionals (HCPs). Understand the difference between these options and
when to use them.
Set Up Territory Product Quantity Allocations
Allocate sample products to a specific territory over a specified period. Use this feature to control the
products that sales reps can access for sampling to healthcare professionals (HCPs).


When to Use Territory Product Quantity Allocations and Sample Limits

Both territory product quantity allocations and sample limits can help you manage sample product
distribution to healthcare professionals (HCPs). Understand the difference between these options and
when to use them.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Territory product quantity allocations control inventory management and strategic distribution, while
sample limits control regulatory compliance and responsible sampling per account. You can configure
territory product quantity allocations and sample limits separately. Or, use them together to control the
quantity of samples allocated to territories and how many samples sales reps can distribute per account
and visit within that territory and period.


Feature                    Overview                    Purpose                    Characteristics


## Territory Product          Controls how much of a      Helps with inventory

Quantity Allocations       sample product is           management,                • Set at the territory
allocated to a territory    budgeting, and strategic       level.
for distribution to HCPs.   distribution planning.     •   Determines the total
quantity of a sample
product available for
that territory.

<!-- page:479 -->




Feature                    Overview                   Purpose                     Characteristics


- Used for planning
and managing
sample stock.
-   Managed via Territory
Product Quantity
Allocations records.



## Sample Limits              Defines the maximum        Prevents oversampling

number of samples that     to ensure regulatory       • Set at the account
can be distributed to a    compliance and adhere          level.
specific account within    to legal restrictions      •   Determines the
a given time frame or                                     maximum quantity
under certain                                             an account can
conditions.                                               receive.
-   Managed via sample
limit templates with
defined rules, such as
2 samples per visit or
5 samples per period
per account.
-   Limits can reset
periodically.




Set Up Territory Product Quantity Allocations

Allocate sample products to a specific territory over a specified period. Use this feature to control the
products that sales reps can access for sampling to healthcare professionals (HCPs).


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create, edit, and delete Life Sciences Customer     Life Sciences Commercial Admin permission set
Engagement data:


Before you allocate quantities, create territories and products. Then, configure product territory

<!-- page:480 -->



alignments to control how products are assigned to territories and to make sure that the right users have
access.


Create Territory Product Quantity Allocations

To allocate samples to territories, add or update territory product quantity allocation records. Or, use
Data Loader to create allocations in bulk.

1. From the App Launcher, find and select Territory Product Quantity Allocations, and then click New.
2. Select the product and territory that you want to enforce this quantity allocation for.
We recommend defining allocations at the lowest relevant level in the hierarchy where samples are
managed.
3. Select or create a period during which to enforce the quantity allocation for this product and territory.
4. To determine how sales reps can disburse the product, select the allocation type.
- To distribute samples to HCPs during visits, select Drop.
- To ship samples directly to HCPs, select Ship.
5. Define the quantities to enforce.
- The Allocated Quantity is the amount of the sample product that is being allocated to the territory
for the selected time period.
- The Adjustment Quantity is the amount to adjust the allocated quantity.
- The Ordered Quantity represents the total amount that is ordered and available for distribution in
the territory.
- The Max Disbursement Limit Quantity is that the maximum amount that a sales rep can disburse in
a given visit.
6. Save your changes.

After a visit is submitted or signed, territory product quantity allocation records are updated. The debited
quantity shows the amount disbursed or shipped to HCPs, and the remaining quantity is calculated to
reflect the disbursement.

To monitor allocations, track usage, and identify any discrepancies, we recommend setting up reports
and dashboards.


Enforce Validations for Sample Disbursements

To make sure that disbursements don't exceed the territory inventory, enforce validations when users
submit a visit.

1.   From the App Launcher, find and select Admin Console.
2.   Select Visit Administration, and then select Visit Settings.
3.   Select Validate territory quantity inventory.
4.   Choose whether to show an error and prevent the user from submitting the visit or to show a warning
and let the user submit the visit anyway.

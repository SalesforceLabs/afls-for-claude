<!-- guide:admin-guide section:set-up-product-management-features pages:432-446 -->
# Set Up Product Management Features




Set Up Product Management Features

In the Life Sciences industry, delivering value to customers—healthcare professionals, organizations, and
patients—depends on making sure that the right products are available, accessible, and aligned with
regulatory requirements. In AFLS, Product Management supports this goal by making it
easier to configure, classify, and manage the products that your organization discusses, markets, sells,
and distributes. The product hierarchy view helps teams structure portfolios according to SKU-level
organization, while product territory alignments make sure that users access only the products approved
for their designated regions and purpose, supporting compliance and reducing risk. Product messages
and objectives enable personalized and effective engagement by equipping users with targeted guidance
tailored to the needs of the customer.


## Get Your Org Ready for Product Management

Help product management admins and users quickly search for available products, check territory
assignments, and view specific marketing tips to effectively sell the products. Configure all types of
products that your company markets, sells, and discusses, including brands, therapeutic areas, and
indications.
Product Hierarchy Settings
Product hierarchy provides a centralized view of all the products developed, marketed, and distributed
by a life sciences company. It helps product management admins and users drill down into each
product right from the hierarchy, and view the details of each record. Add, remove, or edit products,
product types, and product guidances directly from the hierarchy without switching between multiple
tabs.
Product Territory Alignments
Set up product-territory alignments to enable users to drive targeted product efforts, reduce errors,
and comply with regulatory standards. These alignments control how products and product messages
are assigned to territories, and make sure that the correct user has access to the correct product in the
correct territory.
Organize Products Aligned to a Territory by Priority
Help users prepare for product detailing and discussions by sorting products according to relative
importance of the products. Organize the different products assigned to the same territory by order of
priority.


Get Your Org Ready for Product Management

Help product management admins and users quickly search for available products, check territory
assignments, and view specific marketing tips to effectively sell the products. Configure all types of
products that your company markets, sells, and discusses, including brands, therapeutic areas, and
indications.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:433 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Review the prerequisites for setting up Product Management in your org

- Make sure you enable territory settings and create territory records.
- Verify that the following trigger handlers are active.
- LifeSciMarketableProductMetadataHandler
- ProductGuidanceDeactivationHandler
- ProductTerrDtlAvailabilityHandler
- ProductTerritoryAvailabilityExclHandler
- To enable offline access to Product Management, create object metadata cache configurations of type
Data for these objects.
- Product2
- Life Science Marketable Product
- Product Guidance
- Product Territory Availability
- Product Territory Detailed Availability
- Life Science Product Account Restriction
Set Up Product Record Types
Life Sciences companies develop a diverse range of products that include sellable and non-sellable
products. Both sellable and non-sellable products can be further classified into markets, brands,
products, therapeutic areas, brand indications, and indications. Sellable products can also be
categorized into order items, promotional items, and samples. To keep track of all types of sellable
products, classify and organize them with record types in the Product2 object.
Map Product Record Types to Product Specification Types
Create product specification record types to align each product record type with the related product
specification type, and in turn with the related workflow in Life Sciences.
Select the Product Hierarchy Display Type
Depending on the size of your product hierarchy, choose to view the list of products in its entirety or in
parts. Choose to show all the products at one go or show 500 records at a time.
Show Additional Product Information in the Hierarchy View
Enable users to get more context about the products they’re selling. Select standard or custom fields
to display in the hierarchy view.
Products and Product Types
Before you set up products in your org, learn about the different types of products, their hierarchy and
groupings, and how they all fit together.
Configure Products and Product Types
Enable users to seamlessly use the Product Hierarchy and the Product Territory Alignment settings by
defining products and product types.

See Also

<!-- page:434 -->




## Set Up Sales Territories for AFLS

Trigger Handler Administration
Create Object Metadata Cache Configuration


Set Up Product Record Types

Life Sciences companies develop a diverse range of products that include sellable and non-sellable
products. Both sellable and non-sellable products can be further classified into markets, brands,
products, therapeutic areas, brand indications, and indications. Sellable products can also be categorized
into order items, promotional items, and samples. To keep track of all types of sellable products, classify
and organize them with record types in the Product2 object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create a product record type:                      Life Sciences Commercial Admin permission set


You can create any kind of record type. However, to easily track product record types in the processes and
workflows in AFLS, we recommend creating record types that correspond to these product
specification types—order items, promotional items, and sample products.

1.    From the App Launcher, find and select Admin Console.
2.    Select Product, and then select Product Configuration.
3.    Click New Product Record Type.
4.    Add a record type.
a. Confirm that Master is selected as the existing record type.
b. Enter a label.
For example, Orders
The API name is automatically populated.
c. Add a description.
d. Select Active.
e. Select Mark Available for the profiles that you want to enable the record type for, and click Next.
f. Select Product Layout as the layout that you want to apply to all profiles.
g. Save your changes.
5. Similarly, add product record types for promotional items and sample products.

See Also
Create Record Types

<!-- page:435 -->




Map Product Record Types to Product Specification Types

Create product specification record types to align each product record type with the related product
specification type, and in turn with the related workflow in Life Sciences.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To configure settings in the admin console:          Life Sciences Commercial Admin permission set


You can classify products on the basis of their utility. For example, some products are used for
promotional purposes or even distributed as samples. To further organize product types into categories,
map each product record type to a product specification type by using product specification record
types.

1.    From the App Launcher, find and select Admin Console.
2.    Select Product, and then select Product Configuration.
3.    Click New Product Specification Record Type.
4.    Add a product specification record type.
a. Enter a label.
For example, add Order Item.
The API name is automatically populated.
b.   Select a product record type.
c.   Select the product specification type that you want to map the product specification record type to.
d.   Confirm that the product specification type is for the Life Sciences Commercial feature area.
e.   Save your changes.


Select the Product Hierarchy Display Type

Depending on the size of your product hierarchy, choose to view the list of products in its entirety or in
parts. Choose to show all the products at one go or show 500 records at a time.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed

<!-- page:436 -->




package.


USER PERMISSIONS NEEDED

To configure admin console settings:                 Life Sciences Commercial Admin permission set


1.    From the App Launcher, find and select Admin Console.
2.    Select Product, and then select Product Configuration.
3.    Select the product hierarchy display type.
4.    Save your changes.


Note This setting applies to all users administering products, so all users see the hierarchy the same
way.


Show Additional Product Information in the Hierarchy View

Enable users to get more context about the products they’re selling. Select standard or custom fields to
display in the hierarchy view.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create custom fields:                             Life Sciences Commercial Admin permission set


By default, the product hierarchy view shows only the name of the product. However, you can enhance
the display by select standard or custom fields to display in the hierarchy.


Note To configure a custom field that shows additional product details, add a text field or formula
field on the Life Science Marketable Product object. Make sure that the API name of the field is
LSCAdditionalProductDetails.


1. From the App Launcher, find and select Admin Console.
2. Select Product, and then select Product Configuration.
3. In the Create a Field for Additional Product Details section, click Go to Object Manager.
Alternatively, from the Object Manager, go to the Life Science Marketable Product object.
4. To add a custom field, select New.
a. Select Text as the field type, and click Next.
b. In Field Name, enter LSCAdditionalProductDetails as the API name.

<!-- page:437 -->



c. In Field Label, enter a label of your choice.
d. Confirm that Auto add to custom report type is selected.
e. Enter the maximum length of the value in the text field.
Alternatively, select a formula field. Select a formula return type and enter the formula.
f. Click Next.
g. Select the profiles for which you want the custom field to be visible.
Confirm that the checkboxes next to Add Field and Life Science Marketable Product are selected.
h. Save your changes.
5. Display additional fields in the product hierarchy.
a. On the Product Configuration page, in Life Science Marketable Product Field Name, select the field
you want to display.
Select the custom field you created or any standard field on the Life Science Marketable Product
object.
b. Save your changes.


Products and Product Types

Before you set up products in your org, learn about the different types of products, their hierarchy and
groupings, and how they all fit together.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


In AFLS, use the Life Science Marketable Product object to create all product types.
Physical and sellable products are created using the Product2 object and associated with the Life Science
Marketable Product record of type Product.

Product Types are groupings that help organize the products that a company sells, markets, and
distributes as samples. AFLS gives you the flexibility to create hierarchies among the
product types by using the Parent Product field in the Life Science Marketable Product object. However,
there are certain limitations around implementing child product types for each parent type.

Here are the various groupings of products in AFLS and the parent-child hierarchies that
you can set up for each product type.


Product Type            What it Means                    Example              Child Product Types


## Market                  Represents a grouping of         Diabetes

medical areas.                                       • Brand
- Product

<!-- page:438 -->




Product Type            What it Means                     Example                Child Product Types


- Indication
- Therapeutic Area
- Brand Indication


## Therapeutic Area        Represents a category of          Endocrinology

medical conditions which                                 • Product
share pathophysiological                                 • Indication
features.                                                • Therapeutic Area
- Brand Indication


## Brand                   Represents the brand name of      Glipizide

the medicine prescribed for                              • Brand
treating a medical condition.                            • Product
- Indication
- Therapeutic Area
- Brand Indication


## Product                 Represents tangible, physical,    Glipizide 1mg

sellable products. Each                                  • Product
individual product, defined
using a Product2 record, can
be further categorized as an
order item, a promotional
item, or a sample.


## Indication              Represents an individual          Polyurea

medical condition that                                   • Product
requires an intervention.                                • Indication
- Therapeutic Area
- Brand Indication


## Brand Indication        Represents an instance of the     Glipizide for

brand discussed in the context    Polyurea               • Product
of a specific indication.                                • Indication
- Therapeutic Area
- Brand Indication

Note Therapeutic areas and indications are not sellable but they maintain the hierarchical structure
for delivering product guidance during a visit.


## See Also

Create Products from the Product Hierarchy View

<!-- page:439 -->




Configure Products and Product Types

Enable users to seamlessly use the Product Hierarchy and the Product Territory Alignment settings by
defining products and product types.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create products and product types:                Life Sciences Commercial Admin permission set


As a prerequisite, set the distribution quantity for Sample Management. Add the Default Distribution
Quantity field to the Life Science Marketable Product's page layout, and make sure that field-level
security is enabled for your user.

1. From the App Launcher, find and select Product, and then click New.
2. Select a record type.
For example, select Order Item.
3. Click Next.
4. Enter a name for the product, and select the product currency.
5. Select Active.
6. Save your changes.
7. From the App Launcher, find and select Life Science Marketable Product, and then click New.
8. Enter a name, and select a type for the product you’re creating.
9. Select Active.
10. If the product is of type Product, select a Product2 record in the Product field.
11. If the product is a child product, select the parent record.
The Parent Product field indicates the hierarchy of the record.
12. Save your changes.


Product Hierarchy Settings

Product hierarchy provides a centralized view of all the products developed, marketed, and distributed
by a life sciences company. It helps product management admins and users drill down into each product
right from the hierarchy, and view the details of each record. Add, remove, or edit products, product
types, and product guidances directly from the hierarchy without switching between multiple tabs.

<!-- page:440 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


If your Salesforce admin enables the Product Hierarchy business group filter, you see a custom view of
the product tree that displays only the products in your business group.


## Create Products from the Product Hierarchy View

The Product Hierarchy view emulates the SKU structure of pharmaceutical companies, providing
complete visibility into the entire range of products of a company. This overview is useful for all the
business functions that use products in various capacities, such as Visits and Sample Management.
Search for products, create products, and edit or delete products directly from the Product Hierarchy
view.
Define Messages and Objectives for Product Detailing
Drive effective product strategies and detailing efforts with product messages and objectives.
Messages and objectives are implemented together as product guidance, and help drive key points of
emphasis and product activities aligned with broader business goals.


## See Also

Get Your Org Ready for the AFLS for Customer Engagement Package


Create Products from the Product Hierarchy View

The Product Hierarchy view emulates the SKU structure of pharmaceutical companies, providing
complete visibility into the entire range of products of a company. This overview is useful for all the
business functions that use products in various capacities, such as Visits and Sample Management.
Search for products, create products, and edit or delete products directly from the Product Hierarchy
view.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create, edit, and remove products from the         Life Sciences Commercial Admin permission set
hierarchy:

<!-- page:441 -->



Life Science Marketable Product represents all sellable and non-sellable (marketable) products, while
Product2 represents only sellable products. Life Science Marketable Product is categorized using various
groupings, such as indications, therapeutic areas, brands, markets, and products.

In the Product Hierarchy view, you create products using the Life Science Marketable Product object.
However, make sure that you associate the Life Science Marketable Product records of type Product with
a Product2 record in the Product field.

1.    From the App Launcher, find and select Admin Console.
2.    Select the Product tile.
3.    In the left navigation pane, select Product Hierarchy.
4.    To create a parent Life Science Marketable Product record, select New Product.
a. Add a name and indicate the type.
If you select type as Product, you must add a record in the Product field.
b. Select Active.
c. Save your changes.
5. To create a child Life Science Marketable Product record, select the parent product in the hierarchy.
a. Click Add Child Product.
b. Add the details of the Life Science Marketable Product and activate it.
c. Save your changes.


## See Also

Products and Product Types


Define Messages and Objectives for Product Detailing

Drive effective product strategies and detailing efforts with product messages and objectives. Messages
and objectives are implemented together as product guidance, and help drive key points of emphasis
and product activities aligned with broader business goals.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create messages and objectives:                   Life Sciences Commercial Admin permission set


Users need quick access to product guidance, such as messages and objectives, to educate healthcare
providers and share specific and accurate information about products they’re discussing. In the pharma
industry, messages include the information about the safety, efficacy, dosage limits, success rate, and
side effects of a drug, shared with the provider so that they can make informed choices. Objectives are

<!-- page:442 -->



specific, product-related goals that a user aims to achieve during customer engagement. These
objectives are aligned with broader business goals and tailored to the customer’s current level of
engagement, product adoption, and information needs.


Note Add messages and objectives for brands, therapeutic areas, indications, and brand-
indications.


1.    From the App Launcher, find and select Admin Console.
2.    Select Product, and then select Product Hierarchy.
3.    Select a product.
4.    Create a message.
a. In the Product Details window, under Messages, click New Message.
b. Enter a name for the message.
c. In Content Text, enter a description.
d. Enter the effective start and end dates for the message.
e.
Specify the priority of the message.
f.
To categorize messages by group, add a group name.
g.
To sort groups by their order of priority, add a group sequence.
h.
Enter the reaction of the healthcare professional.
i.
To hide the provider's reaction to the product, select Hide Reaction.
j.
Save your changes.
k.
Select Active.
To deactivate a message, deselect Active, and then click Deactivate.
5. Create an objective.
a. In the Product Details window, under Objectives, click New Objective.
b. Enter a name for the objective.
c. In Content Text, enter a description.
d. Save your changes.
e. Select Active.


Product Territory Alignments

Set up product-territory alignments to enable users to drive targeted product efforts, reduce errors, and
comply with regulatory standards. These alignments control how products and product messages are
assigned to territories, and make sure that the correct user has access to the correct product in the
correct territory.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:443 -->



By default, product-territory alignments are inherited downstream in the product hierarchy. But Life
Sciences Cloud also provides the Parent Territory Product Alignment admin setting that enables product
territory alignments to be extended all the way up in the hierarchy to all parent territories.

Product-territory alignment in AFLS is determined through explicit (direct) alignment,
parent-based inheritance, and explicit exclusion.

- Explicit alignment (direct alignment): A product is explicitly aligned to a specific territory. This means
that the product is directly available in that territory, regardless of other hierarchy-based rules.
-    Inherited from parent (parent alignment): A product is inherited from a parent territory. This means
that it was aligned to a parent territory and is automatically made available to the child territory
through inheritance.
-    Directly excluded (exclusion): A product is explicitly excluded from a territory. This means that the
product is unavailable for a child territory even when the parent territory is aligned to the product.

The final product alignment consisting of only non-excluded products—whether explicitly aligned to the
territory or inherited from a parent—is available to users in that territory.

When you align products to territories, the system automatically creates Product Territory Availability
records in the Queued status. An invocable action creates Product Territory Detailed Availability records
for the queued Product Territory Availability records.

Here are the alignment types—Exclusion, Inclusion, and Territory and Subordinates Inclusion and the
sharing rules.


Symbol                 Meaning                                   Product Territory Availability Alignment
Type

Indicates that a territory isn't          No Product Territory Availability record
aligned to a product.                     created


## Indicates that a territory is directly    Inclusion

aligned to a product. If this territory
is a child territory, it means that
even if the parent territory isn't
aligned to the product, the child
territory still has access to it.


## Indicates that a territory is excluded    Territory Exclusion

from the alignment, even though its
parent territory is aligned to the
product.


## Indicates that a territory is included,   Inclusion

because one of its parent territories
is aligned.

Indicates that a territory, as well as    Territory and Subordinates Inclusion

<!-- page:444 -->




Symbol                 Meaning                                  Product Territory Availability Alignment
Type

its child territories, is aligned to a
product.


When you enable the Parent Territory Product Alignment admin settings, products assigned to a territory
are automatically aligned with its parent territories as well, all the way up in the hierarchy. However, when
you make changes to the admin setting, the new rules aren't applied retroactively to existing Product
Territory Availability records.


## Align Products with or Exclude Products from Territories

Configure precise and targeted product-territory alignments by using territory exclusions. When you
exclude a child territory, it doesn’t inherit the product alignment of its parent territory record.
Align Messages with or Exclude Messages from Territories
To help users quickly and efficiently deliver key messages to healthcare providers, assign product
messages to the territories that are aligned with a product.


Align Products with or Exclude Products from Territories

Configure precise and targeted product-territory alignments by using territory exclusions. When you
exclude a child territory, it doesn’t inherit the product alignment of its parent territory record.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create product alignments:                           Life Sciences Commercial Admin permission set


1. From the App Launcher, find and select Admin Console.
2. Select Product, and then select Product Alignment.
3. Find a product by using the search field, or click the arrow next to Product Hierarchy, and then select
the product.
4. Align a territory with the product according to your preference.
The changes you make are automatically saved.


Align Messages with or Exclude Messages from Territories

To help users quickly and efficiently deliver key messages to healthcare providers, assign product

<!-- page:445 -->



messages to the territories that are aligned with a product.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To align or remove messages:                          Life Sciences Commercial Admin permission set


Note Message exclusion is available only for the lowest level of territories.


1. From the App Launcher, find and select Admin Console.
2. Select Product, and then select Product Alignment.
3. Find a product by using the search field, or click the arrow next to Product Hierarchy, and then select
the product.
The associated territory hierarchy appears.
4. Select a territory assigned to the product.
The list of product messages associated with the product appears.
5. Select a message to align it with a territory.
If the message is shared with a parent territory, its child territories also inherit the message.
If a message isn't activated, it appears in the product-territory alignment window but it remains
unavailable.
6. Deselect a message to remove it from a territory.
You can remove a message from specific child territories, while keeping it assigned to the parent
territory or to the other child territories of the parent.


Organize Products Aligned to a Territory by Priority

Help users prepare for product detailing and discussions by sorting products according to relative
importance of the products. Organize the different products assigned to the same territory by order of
priority.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:446 -->




USER PERMISSIONS NEEDED

To edit the product's priority:                         Life Sciences Commercial Admin permission set


The sort order is applicable specifically for the selected territory, and not for the territory's parent or child
territories.


Note If a priority level is not assigned to a product, the sorting is in descending order of the last
modified date.


1. From the App Launcher, find and select Admin Console.
2. Select Product, and then select Territory Products.
3. Select a territory.
This action shows all products in that territory according to their assigned priority levels.
4. To change the priority, in Territory-Specific Product Priority Order, select a product and click       or     .
5. Save your changes.


## Restrict an Account’s Access to a Product

Account-level product restrictions help organizations enforce business and regulatory requirements by
preventing the detailing, sampling, or ordering of specific products at restricted accounts. Use this
functionality to make sure that product interactions are limited to the appropriate accounts, reducing
compliance risks and supporting adherence to industry regulations.
Create Product Territory Alignments in Bulk
Import multiple product records from external systems, align them with territories, and create detailed
availability records by using the Publish Draft Product Territory Alignments batch job.


Restrict an Account’s Access to a Product

Account-level product restrictions help organizations enforce business and regulatory requirements by
preventing the detailing, sampling, or ordering of specific products at restricted accounts. Use this
functionality to make sure that product interactions are limited to the appropriate accounts, reducing
compliance risks and supporting adherence to industry regulations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To create product account restrictions:                 Life Sciences Commercial Admin permission set

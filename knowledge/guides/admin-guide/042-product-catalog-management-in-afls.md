<!-- guide:admin-guide section:product-catalog-management-in-life-sciences-cloud pages:1257-1258 -->
# Product Catalog Management in AFLS



life event types and contextual actions.



Product Catalog Management in AFLS

The Product Catalog Management app is available for AFLS users to create and manage
products. For example, users in MedTech organizations can use the app to create and manage products
such as pacemakers, X-ray machines, syringes, and other medical devices. Users in Pharma organizations
can use the app to create and classify drugs and drug samples.

Revenue Cloud's Product Catalog Management is available as part of the base license for Life Sciences
Cloud users. Access the Product Catalog Management app via the App Launcher. From the app’s Home
page, you can:

- Create and manage product catalogs. Select catalog types such as Sales and Service to make sure your
product offerings precisely match your business requirements.
-   Create product catalog categories and subcategories. Assign products to categories. Visualize and
streamline product organization using category trees.
-   Create product classifications and assign products and attributes to them. Use product classifications
for consistency across products. A product classification template is a collection of attributes. You can
add a single attribute to multiple product classification templates and apply it to multiple products.
You can also accelerate product creation by using product classification templates where products
inherit attributes. You can override these inherited attributes if needed. You can update a classification
template without impacting the product to which the template has previously been applied.
-   Create products, and assign price books, product selling model options, and product qualifications to
them. Define simple products and configurable and nonconfigurable bundle products. Define
relationships within bundles by using product cardinality. Mark products as sellable or nonsellable.
-   Define product selling models. Select selling model types such as One Time, Term-Defined, and
Evergreen.
-   Define attributes. Assign attribute categories, select attribute data types, and assign picklists for
picklist datatypes. Make attributes required, optional, hidden or visible, and assign default values.
Define product attributes once and use them across multiple products with the help of product
classification templates.
-   Create attribute categories and assign attributes.
-   Create attribute picklists and manage picklist values.
-   Define and manage qualification rules and qualification rule procedures.


## Product Catalog Management Data Model and Permissions

To get started with Product Catalog Management in AFLS, assign permission sets to your
user profiles based on their required level of access. Here’s the set of permissions and objects that you
get with Product Catalog Management.


## See Also

Organize Your Products with Catalogs and Categories
Create Product Templates Using Product Classifications
Manage Products and Product Bundles

<!-- page:1258 -->




## Manage Dynamic Attributes

Manage Qualification Rules for Products


Product Catalog Management Data Model and Permissions

To get started with Product Catalog Management in AFLS, assign permission sets to your
user profiles based on their required level of access. Here’s the set of permissions and objects that you
get with Product Catalog Management.


Permissions

Product Catalog Management uses these permission sets.


Permission Set             Permission Set License     Purpose

Product Catalog            Product Catalog            Provides customer community users with read
Management Customer        Management Customer        access to Product Catalog Management features
Community User             Community User             and objects.

Product Catalog            Product Catalog            Provides access to Product Catalog Management
Management Designer        Management Designer        features and objects.

Product Catalog            Product Catalog            Provides partner community users with read
Management Partner         Management Partner         access to Product Catalog Management features
Community User             Community User             and objects.

Product Catalog            Product Catalog            Provides read access to Product Catalog
Management Viewer          Management Viewer          Management features and objects.

Product Catalog            Manufacturing Sales        Gives users access to the product catalog
Features for Sales         Agreements Psl             management features for Sales Agreements.
Agreements

ProductCatalogManage       Cloud Integration User     Provides read access to Product Catalog
mentC2CPermSet                                        Management objects using API.


Data Model

Product Catalog Management uses these objects.


Object                                           Purpose

Attribute Category                               Captures logical grouping of reusable attributes for
product definition.

Product Attribute Definition                     Defines the relationship between products and their
attributes.

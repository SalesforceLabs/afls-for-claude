<!-- guide:dev-guide section:medtech-commercial-engagement pages:1370-1429 -->
# MedTech Commercial Engagement

AFLS Overview                                                                                        MedTech Commercial Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareInterventionTypeChangeEvent (API version 60.0)
Change events are available for the object.
CareInterventionTypeFeed
Feed tracking is available for the object.
CareInterventionTypeHistory
History is available for tracked fields of the object.
CareInterventionTypeOwnerSharingRule
Sharing rules are available for the object.
CareInterventionTypeShare
Sharing is available for the object.



## Timeline

Use Timeline to configure a chronological view of records from multiple objects.



## TimelineObjectDefinitionLocalization

Represents the translated value of a timeline configuration’s master label when the Translation Workbench is enabled for your
organization. This object is available in API version 60.0 and later.



## TimelineObjectDefinitionLocalization

Represents the translated value of a timeline configuration’s master label when the Translation Workbench is enabled for your organization.
This object is available in API version 60.0 and later.
For more information, see TimelineObjectDefinitionLocalization.



## MedTech Commercial Engagement

These objects are available for AFLS for MedTech Commercial Engagement.



## Intelligent Sales

Help your sales team plan and execute sales visits and manage field inventory with Intelligent Sales.



## Intelligent Sales

Help your sales team plan and execute sales visits and manage field inventory with Intelligent Sales.

**EDITIONS**

Available in: Enterprise and
Unlimited Editions

<!-- page:1371 -->

AFLS Overview                                                                                       MedTech Commercial Engagement




For more details and a larger image, visit the Data Model Gallery.



## ActionPlanTemplateItem

Represents the instance of an item on an action plan template version. This object is available in API version 44.0 and later.
actionplantemplate
Defines a template for different assessment tasks in a visit. This object is available in API version 49.0 and later.
ActionPlanTemplateItem
Represents the instance of an item on an action plan template version. This object is available in API version 44.0 and later.
Address
Represents a mailing, billing, or home address.
AssessmentTask
Perform activities such as patient registration or order authorization to capture information.
Pricebook2
Represents a price book that contains the list of products that your org sells.
Product2
Represents a product that your org sells.
Pricebookentry
Represents a product entry (an association between a price book and product) in a price book.
ProductAvailabilityProjection
Represents the projected product quantity available at an inventory location at various points in time. Records for this object are
automatically created by Intelligent Sales. This object is available in API version 55.0 and later.

<!-- page:1372 -->

AFLS Overview                                                                                     MedTech Commercial Engagement



## ProductFulfillmentLocation

Associates a business account and a product inventory with the responsible field rep. This object is available in API version 49.0 and
later.
ProductItem
Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.
ProductRequest
Represents a device request made as part of a care program.
ProductRequestLineItem
A junction object between ProductRequest and ProductTransfer This object is available in API version 50.0 and later.
productrequired
Represents a product that is needed to complete a visit.
producttransfer
Represents the transfer of inventory between locations in field service.
RecordAction
Represents a relationship between a record and an action, such as a flow. Create a RecordAction for every action that you want to
associate with a particular record. Available in API version 42.0 and later.
SerializedProduct
Records serial numbers for each individual product in an inventory. This object is available in API version 50.0 and later.
Visit
Track information related to a field rep’s visit to a health care provider.
VisitedParty
Represents the contact person at the account that’s being visited. This object is available in API version 49.0 and later.
Visitor
Represents the sales reps performing visits.


SEE ALSO:
https://help.salesforce.com/s/articleView?id=ind.admin_intelligent_sales.htm&type=5
https://help.salesforce.com/s/articleView?id=ind.admin_intelligent_sales_data_model.htm&type=5



## ActionPlanTemplateItem

Represents the instance of an item on an action plan template version. This object is available in API version 44.0 and later.



## Supported Calls

create()delete()describeLayout()describeSObjects()getDeleted()getUpdated()query()retrieve()search()undelete()update()upsert()


Fields


## Field Name                                          Details

ActionPlanTemplateVersionId                         Type
reference

<!-- page:1373 -->

AFLS Overview                                                           MedTech Commercial Engagement



Field Name              Details


## Properties

Create, Filter, Group, Sort,
Description
The version of the action plan template this item is for.

DisplayOrder            Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The order in which this item is displayed within the action plan template version.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the task created from this template item is active. The default
value is false.

IsLocked                Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this action plan template item is locked or not. The default
value is false.

IsRequired              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the task created from this template item is required. The default
value is false.

ItemEntityType          Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update

<!-- page:1374 -->

AFLS Overview                                                         MedTech Commercial Engagement



Field Name              Details


## Description

The type of action plan template item entity..
Possible values are:
- Document Checklist Item
- Event—This value is available in API version 63.0.
- RecordAction
- Task

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

MayEdit                 Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this action plan template item can be edited or not. The default
value is false.

Name                    Type
string
Properties
Create, Filter, Group, Sort, idLookup, Update
Description
The unique identifier for this action plan template item record.

UniqueName              Type
string

<!-- page:1375 -->

AFLS Overview                                                                                        MedTech Commercial Engagement



Field Name                                             Details


## Properties

Create, Filter, Group, Sort, Update
Description
The unique name for this action plan template item. This field is unique within
your organization.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ActionPlanTemplateItemChangeEvent
Change events are available for the object.
ActionPlanTemplateItemFeed
Feed tracking is available for the object.
ActionPlanTemplateItemHistory
History is available for tracked fields of the object.
ActionPlanTemplateItemOwnerSharingRule
Sharing rules are available for the object.
ActionPlanTemplateItemShare
Sharing is available for the object.



## actionplantemplate

Defines a template for different assessment tasks in a visit. This object is available in API version 49.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

ActionPlanType                           Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort
Description
Specifies the type of action plan you’re creating.
Possible values are:
- Industries
- Visit Execution

<!-- page:1376 -->

AFLS Overview                                                                        MedTech Commercial Engagement




## Field                      Details

For Intelligent Sales, select only Visit Execution.

Description                Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description for your action plan template.

IsAdHocItemCreationEnabled Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether ad-hoc creation of tasks is possible.

LastReferencedDate         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The time stamp for the last time this record was referenced.

LastViewedDate             Type
dateTime
Properties
Filter, Nillable, Sort
Description
The time stamp for the last time this record was viewed.

Name                       Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name for your action plan template

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1377 -->

AFLS Overview                                                                                     MedTech Commercial Engagement



Field                                 Details


## Description

Reference to the owner of the record.

TargetEntityType                      Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort
Description
Indicates which entity this template is being created for.
Possible values are:
- Account
- BusinessMilestone—Business Milestone
- Case
- Contact
- Contract
- Lead
- Opportunity
- PersonLifeEvent
- Person Life Event

- Visit
For Intelligent Sales, use only Visit.

UniqueName                            Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The unique name for your action plan template.




## ActionPlanTemplateItem

Represents the instance of an item on an action plan template version. This object is available in API version 44.0 and later.



## Supported Calls

create()delete()describeLayout()describeSObjects()getDeleted()getUpdated()query()retrieve()search()undelete()update()upsert()

<!-- page:1378 -->

AFLS Overview                                                                MedTech Commercial Engagement


Fields


## Field Name                    Details

ActionPlanTemplateVersionId   Type
reference
Properties
Create, Filter, Group, Sort,
Description
The version of the action plan template this item is for.

DisplayOrder                  Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The order in which this item is displayed within the action plan template version.

IsActive                      Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the task created from this template item is active. The default
value is false.

IsLocked                      Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this action plan template item is locked or not. The default
value is false.

IsRequired                    Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the task created from this template item is required. The default
value is false.

<!-- page:1379 -->

AFLS Overview                                                           MedTech Commercial Engagement




## Field Name              Details

ItemEntityType          Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The type of action plan template item entity..
Possible values are:
- Document Checklist Item
- Event—This value is available in API version 63.0.
- RecordAction
- Task

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

MayEdit                 Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this action plan template item can be edited or not. The default
value is false.

Name                    Type
string
Properties
Create, Filter, Group, Sort, idLookup, Update

<!-- page:1380 -->

AFLS Overview                                                                                        MedTech Commercial Engagement



Field Name                                          Details


## Description

The unique identifier for this action plan template item record.

UniqueName                                          Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The unique name for this action plan template item. This field is unique within
your organization.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ActionPlanTemplateItemChangeEvent
Change events are available for the object.
ActionPlanTemplateItemFeed
Feed tracking is available for the object.
ActionPlanTemplateItemHistory
History is available for tracked fields of the object.
ActionPlanTemplateItemOwnerSharingRule
Sharing rules are available for the object.
ActionPlanTemplateItemShare
Sharing is available for the object.



## Address

Represents a mailing, billing, or home address.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

The following access checks must be enabled:
- Industries Insurance
- Retail Execution
- Industries Visit
- Field Service
- Order Management

<!-- page:1381 -->

AFLS Overview                                                                                 MedTech Commercial Engagement



## – Perms: FulfillmentOrder, OrderSummary,AdvancedOrderManagement, OrderCCS

– Prefs: OrdersEnabled, EnhancedCommerceOrders

- Public Sector
- Employee Experience
- Contact Tracing For Employees
You can create an address only when creating a location.


Fields


## Field Name                                      Details

Address                                         Type
address
Properties
Filter, Nillable
Description
The full address.

AddressType                                     Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Picklist of address types. The values are:
- Mailing
- Shipping
- Billing
- Home

City                                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The address city.

Country                                         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The address country.

<!-- page:1382 -->

AFLS Overview                                                           MedTech Commercial Engagement




## Field Name              Details

Description             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A brief description of the address.

DrivingDirections       Type
string
Properties
Create, Filter, Nillable, Sort, Update
Description
Directions to the address.

GeocodeAccuracy         Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The level of accuracy of a location’s geographical coordinates compared with its
physical address. A geocoding service typically provides this value based on the
address’s latitude and longitude coordinates.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Latitude                Type
double
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1383 -->

AFLS Overview                                                          MedTech Commercial Engagement



Field Name              Details


## Description

Used with Longitude to specify the precise geolocation of the address.
Acceptable values are numbers between –90 and 90 with up to 15 decimal
places.

LocationType            Type
picklist
Properties
Create, Defaulted on create, Filter, Filter, Group, Sort, Update
Description
Picklist of location types. The available values are:
- Warehouse (default)
- Site
- Van
- Plant

Longitude               Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
Used with Latitude to specify the precise geolocation of the address.
Acceptable values are numbers between –180 and 180 with up to 15 decimal
places.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
Name of the address.

ParentId                Type
reference
Properties
Create, Filter, Group, Sort
Description
A lookup field to the parent location.
This is a relationship field.
Relationship Name
Parent

<!-- page:1384 -->

AFLS Overview                                                                                   MedTech Commercial Engagement



Field Name                                      Details

Relationship Type
Lookup
Refers To
Location

PostalCode                                      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The address postal code.

State                                           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The address state.

Street                                          Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The address street.

TimeZone                                        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Picklist of available time zones.




## Usage

Important: “Address” in Salesforce can also refer to the Address compound field found on many standard objects. When referencing
the Address object in your Apex code, always use Schema.Address instead of Address to prevent confusion with the
standard Address compound field. If referencing both the address object and the Address field in the same snippet, you can
differentiate between the two by using System.Address for the field and Schema.Address for the object.

<!-- page:1385 -->

AFLS Overview                                                                                        MedTech Commercial Engagement



## Associated Object

This object has the following associated object. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AddressHistory (API version 62.0)
History is available for tracked fields of the object.



## AssessmentTask

Perform activities such as patient registration or order authorization to capture information.



## Special Access Rules

In AFLS, standard and custom fields extend the standard AssessmentTask object to represent tasks to complete a provider
engagement compliance cycle.
The AssessmentTask object and its fields are used by the Key Account Management and the Provider Engagement Compliance feature
areas. This topic lists the fields used in both of these features.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AssessmentTaskDefinitionId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The assessment task definition that is referenced for the task. This field is a relationship field.
Relationship Name
AssessmentTaskDefinition
Refers To
AssessmentTaskDefinition

AssignedToId                            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the user that's assigned the task. This field is a polymorphic relationship field.
Relationship Name
AssignedTo

<!-- page:1386 -->

AFLS Overview                                                                       MedTech Commercial Engagement



Field                   Details

Relationship Type
Lookup
Refers To
User

Description             Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
Description of task that has to be performed at the store.

EndTime                 Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the assessment task is completed.

IsRequired              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicate whether a task must be completed to complete a visit. The default value is False.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record. If this value is null, it’s possible that
this record was referenced (LastReferencedDate) and not viewed.

<!-- page:1387 -->

AFLS Overview                                                                       MedTech Commercial Engagement




## Field                   Details

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
Unique identification of the task.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this assessment template. This field is a polymorphic relationship
field.
Relationship Name
Owner
Refers To
Group, User

ParentId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The visit associated with an assessment task. This field is a relationship field.
Relationship Name
Parent
Refers To
Visit

ReferenceRecordId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the record with which the associated task is related. This field is a polymorphic
relationship field.
Relationship Name
ReferenceRecord
Relationship Type
Lookup

<!-- page:1388 -->

AFLS Overview                                                                       MedTech Commercial Engagement



Field                    Details


## Refers To

CarePgmEnrolleeWkOrdStep, ActionPlan, PrvdEngmtComplianceCycle
Based on the availability of objects in your org.

SequenceNumber           Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The sequence in which the tasks must be performed.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in the source system.
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

SourceSystemName         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system from which data is loaded into this object. This field is available with
the AFLS for Customer Engagement Add-on license in API version 65.0 and
later.

StartTime                Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Time when the task was started by a field rep.

Status                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update

<!-- page:1389 -->

AFLS Overview                                                                                        MedTech Commercial Engagement



Field                                   Details


## Description

View the status of a task.
Possible values are:
- Completed
- InProgress—In Progress
- NotStarted—Not Started
- Skipped
The default value is Not Started.

TaskType                                Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort
Description
Type of a task that the sales rep can perform during the visit.
In AFLS, the task type must match the task type of the assessment task
definition.
Possible values are:
- ComponentTask—Component Task
- DeliveryTask—Delivery Task
- Other
- RecordAction—Record Action
- SignatureTask—Signature Task




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
- AssessmentTaskShare
- AssessmentTaskFeed



## Pricebook2

Represents a price book that contains the list of products that your org sells.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1390 -->

AFLS Overview                                                                      MedTech Commercial Engagement


Fields


## Field                   Details

Description             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Text description of the price book.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the price book is active (true) or not (false). Inactive price books are
hidden in many areas in the user interface. You can change this field’s value as often as
necessary. Label is Active.

IsArchived              Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the price book has been archived (true) or not (false). This field is read
only.

IsDeleted               Type
boolean
Properties
Defaulted on create, Filter
Description
Indicates whether the price book has been moved to the Recycle Bin (true) or not (false).
Label is Deleted.

IsStandard              Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the price book is the standard price book for the org (true) or not
(false). Every org has one standard price book—all other price books are custom price
books.

<!-- page:1391 -->

AFLS Overview                                                                                      MedTech Commercial Engagement




## Field                                    Details

Name                                     Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Required. Name of this object. This field is read-only for the standard price book. Label is
Price Book Name.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
Pricebook2History
History is available for tracked fields of the object.



## Product2

Represents a product that your org sells.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

Description                              Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
A text description of this record. Label is Product Description.

DisplayUrl                               Type
url
Properties
Create, Filter, Nillable, Sort, Update
Description
URL leading to a specific version of a record in the linked external data source.

ExternalDataSourceId                     Type
reference

<!-- page:1392 -->

AFLS Overview                                                                    MedTech Commercial Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
ID of the related external data source.

ExternalId              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unique identifier of a record in the linked external data source. For example, ID #123.

Family                  Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the product family associated with this record. Product families are configured as
picklists in the user interface. Label is Product Family.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this record is active.

IsArchived              Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicated whether the product is archived.

IsSerialized            Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the product supports serial numbers. If an associated product item record
already exists, this boolean can’t be set to true unless the product item’s quantity is zero.

<!-- page:1393 -->

AFLS Overview                                                                    MedTech Commercial Engagement




## Field                   Details

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
Time stamp for the last time this record was referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
Time stamp for the last time this record was viewed.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Required. Default name of this record. Label is Product Name.

ProductCode             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Default product code for this record. Your org defines the product code naming pattern.

QuantityUnitOfMeasure   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Unit of the product; for example, kilograms, liters, or cases. This field comes with only one
value, Each, so you may want to create your own. The QuantityUnitOfMeasure field
on ProductItem inherits this field’s values.

StockKeepingUnit        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1394 -->

AFLS Overview                                                                                     MedTech Commercial Engagement



Field                                   Details


## Description

The SKU for the product. Use in tandem with or instead of the ProductCode field. For
example, you can track the manufacturer’s identifying code in the Product Code field and
assign the product a SKU when you resell it.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
Product2Feed
Feed tracking is available for the object.
Product2History
History is available for tracked fields of the object.



## Pricebookentry

Represents a product entry (an association between a price book and product) in a price book.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), update(), upsert()


Fields


## Field                                   Details

IsActive                                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this price book entry is active.

IsArchived                              Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the price book entry has been archived (true) or not (false). This is set to
true when the product record it’s associated with is archived, or when the price book
record is archived. This field is read only. Available in API version 45.0 and later. Label is
Archived.

<!-- page:1395 -->

AFLS Overview                                                                     MedTech Commercial Engagement




## Field                   Details

Name                    Type
string
Properties
Filter, Group, Nillable, Sort
Description
Name of this price book entry record. This read-only field references the value in the Name
field of the product record. Label is Product Name.

Pricebook2Id            Type
reference
Properties
Create, Filter, Group, Sort
Description
Required. ID of the price book record with which this record is associated. This field must be
specified when creating price book records. It can’t be changed in an update.

Product2Id              Type
reference
Properties
Create, Filter, Group, Sort
Description
Required. ID of the product record with which this record is associated. This field must be
specified when creating product records. It can’t be changed in an update.

ProductCode             Type
string
Properties
Filter, Group, Nillable, Sort
Description
Product code for this record. This read-only field references the value in the ProductCode
field of the associated product record.

UnitPrice               Type
currency
Properties
Create, Filter, Sort, Update
Description
Required. Unit price for this price book entry. You can specify a value only if
UseStandardPrice is set to false. Label is List Price.

UseStandardPrice        Type
boolean

<!-- page:1396 -->

AFLS Overview                                                                                     MedTech Commercial Engagement



Field                                    Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this price book entry uses the standard price defined in the standard price
book record.




## Usage

Use this object to define the association between your organization’s products (product) and your organization’s standard price book
or to other, custom-defined price books ( price book). Create one PricebookEntry record for each standard or custom price and currency
combination for a product in a price book.
When creating these records, you must specify the IDs of the associated price book record and product record. Once created, your client
application can’t update these IDs.
This object is defined only for those organizations that have products enabled as a feature.
If you delete a PriceBookEntry while a line item references it, the line item is unaffected, but the PriceBookEntry will be archived and
unavailable from the API. Deleted PriceBookEntry records can’t be recovered.
You must load the standard price for a product before you are permitted to load its custom price(s).



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PricebookEntryHistory
History is available for tracked fields of the object.



## ProductAvailabilityProjection

Represents the projected product quantity available at an inventory location at various points in time. Records for this object are
automatically created by Intelligent Sales. This object is available in API version 55.0 and later.



## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()


Fields


## Field                                    Details

LastReferencedDate                       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

<!-- page:1397 -->

AFLS Overview                                                                   MedTech Commercial Engagement




## Field                   Details

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

Name                    Type
string
Properties
Filter, Group, idLookup, Sort
Description
The name of the record.

OwnerId                 Type
Lookup
Properties
Filter, Group, Sort
Description
The owner of the record.
Refers To
Group, User

Product2Id              Type
Lookup
Properties
Filter, Group, Nillable, Sort
Description
The product whose quantity is available quantity is projected.
Refers To
Product2

ProductLocationId       Type
Lookup
Properties
Filter, Group, Nillable, Sort
Description
The inventory location of the product with that quantity.
Refers To
Location

<!-- page:1398 -->

AFLS Overview                                                                                        MedTech Commercial Engagement




## Field                                   Details

ProjectedQuantity                       Type
double
Properties
Filter, Nillable, Sort
Description
The quantity projected at the inventory for the specified date.

ProjectionDate                          Type
date
Properties
Filter, Group, Nillable, Sort
Description
The date for when the quantity projection is applicable.

Status                                  Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
The status of the inventory based on the projected quantity and the required quantity for
that day.
Possible values are:
- Available
- ProjectedAvailable
- Shortfall




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ProductAvailabilityProjectionFeed on page 1429
Feed tracking is available for the object.
ProductAvailabilityProjectionHistory on page 1434
History is available for tracked fields of the object.
ProductAvailabilityProjectionShare on page 1438
Sharing is available for the object.



## ProductFulfillmentLocation

Associates a business account and a product inventory with the responsible field rep. This object is available in API version 49.0 and later.

<!-- page:1399 -->

AFLS Overview                                                                        MedTech Commercial Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                     Details

AccountId                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The business account a field rep is responsible for visiting.

FulfillmentLocationId     Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The inventory location from which an order will be fulfilled.

LastReferencedDate        Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate            Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

LocationId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The location of the account the field rep visits.

<!-- page:1400 -->

AFLS Overview                                                                                        MedTech Commercial Engagement




## Field                                   Details

Name                                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the Product Fulfillment Location record.

ProductId                               Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The name of the product the field rep fulfills at the account.

UserId                                  Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The field rep responsible for the account and inventory.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ProductFulfillmentLocationHistory (API version 63.0)
History is available for tracked fields of the object.
ProductFulfillmentLocationOwnerSharingRule (API version 63.0)
Sharing rules are available for the object.
ProductFulfillmentLocationShare (API version 63.0)
Sharing is available for the object.



## ProductItem

Represents the stock of a particular product at a particular location in field service, such as all bolts stored in your main warehouse.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1401 -->

AFLS Overview                                                                MedTech Commercial Engagement



## Special Access Rules

Field Service must be enabled.


Fields


## Field Name                      Details

LastReferencedDate              Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date when the product item was last modified. Its label in the user interface
is Last Modified Date.

LastViewedDate                  Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date when the product item was last viewed.

LocationId                      Type
reference
Properties
Create, Filter, Group, Sort
Description
Location associated with the product item. This usually indicates where the
product item is stored.

OwnerId                         Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The product item’s owner.

Product2Id                      Type
reference
Properties
Create, Filter, Group, Sort
Description
Product associated with the product item, which represents the type of product
in your inventory.

<!-- page:1402 -->

AFLS Overview                                                           MedTech Commercial Engagement




## Field Name              Details

ProductItemNumber       Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
(Read Only) Auto-generated number identifying the product item.

ProductName             Type
string
Properties
Filter, Group, Nillable, Sort
Description
A name for the product item. Try to select a name that indicates what is being
stored where; for example, Batteries in Warehouse A.

QuantityOnHand          Type
double
Properties
Create, Filter, Sort, Update
Description
The quantity at the location. If you want to add a serial number, this value must
be 1.

QuantityUnitOfMeasure   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Units of the product item; for example, kilograms or liters. Quantity Unit of Measure
picklist values are inherited from the Quantity Unit of Measure field on products.

SerialNumber            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A unique number for identification purposes. If you want to enter a serial number,
the Quantity on Hand must be 1.

<!-- page:1403 -->

AFLS Overview                                                                                    MedTech Commercial Engagement



## Usage

Each product item is associated with a product and a location in Salesforce. If a product is stored at multiple locations, the product will
be tracked in a different product item for each location.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ProductItemFeed
Feed tracking is available for the object.
ProductItemHistory
History is available for tracked fields of the object.
ProductItemOwnerSharingRule
Sharing rules are available for the object.
ProductItemShare
Sharing is available for the object.



## ProductRequest

Represents a device request made as part of a care program.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

Field Service must be enabled.
Authenticated external users can create and update ProductRequest objects.


Fields


## Field Name                                          Details

AccountId                                           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account associated with the product request.
This is a relationship field.
Relationship Name
Account
Relationship Type
Lookup

<!-- page:1404 -->

AFLS Overview                                                          MedTech Commercial Engagement



Field Name              Details

Refers To
Account

CareProgramEnrolleeId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the care program enrollee associated with the product request. This
field is available from API version 49.0 and later.
This is a relationship field.
Relationship Name
CareProgramEnrollee
Relationship Type
Lookup
Refers To
CareProgramEnrollee

CaseId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The case associated with the product request.
This is a relationship field.
Relationship Name
Case
Relationship Type
Lookup
Refers To
Case

Description             Type
textarea
Properties
Create, Nillable, Update
Description
A text field for details not recorded in the provided fields.

DestinationLocationId   Type
reference

<!-- page:1405 -->

AFLS Overview                                                          MedTech Commercial Engagement



Field Name              Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Where the product is delivered.
This is a relationship field.
Relationship Name
DestinationLocation
Relationship Type
Lookup
Refers To
Location

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date when the product request was last modified. Its label in the user interface
is Last Modified Date.

LastModifiedById        Type
reference
Properties
Aggregatable, Defaulted on create, Filter, Group, Sort
Description
ID of the user who last updated this object.

NeedByDate              Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Date the product must be delivered by.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the shipment.
This is a polymorphic relationship field.

<!-- page:1406 -->

AFLS Overview                                                           MedTech Commercial Engagement



Field Name              Details

Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ProductRequestNumber    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
An auto-assigned number that identifies the shipment.

ShipToAddress           Type
address
Properties
Filter, Nillable
Description
The address that the product is to be delivered to.

ShipToCity              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The city that the product is to be delivered to.

ShipToCountry           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The country that the product is to be delivered to.

ShipToGeocodeAccuracy   Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The accuracy of the geocode for the shipping address.

<!-- page:1407 -->

AFLS Overview                                                         MedTech Commercial Engagement




## Field Name              Details

ShipToLatitude          Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The latitude of the location where the product is to be delivered to.

ShipToLongitude         Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The longitude of the location where the product is to be delivered to.

ShipToPostalCode        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The postal code of the address where the product is to be delivered to.

ShipToState             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the state where the product is to be delivered to.

ShipToStreet            Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The street address where the product is to be delivered to.

ShipmentType            Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The type of shipment. The picklist includes the following values by default:

<!-- page:1408 -->

AFLS Overview                                                         MedTech Commercial Engagement



Field Name              Details
- None
- Rush
- Overnight
- Next Business Day
- Pick Up

SourceLocationId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The location the product is shipped from.
This is a relationship field.
Relationship Name
SourceLocation
Relationship Type
Lookup
Refers To
Location

Status                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Status of the product transfer.

WorkOrderId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work order that the product request is related to.
This is a relationship field.
Relationship Name
WorkOrder
Relationship Type
Lookup
Refers To
WorkOrder

<!-- page:1409 -->

AFLS Overview                                                                             MedTech Commercial Engagement




## Field Name                                   Details

WorkOrderLineItemId                          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work order line item that the product request is related to.
This is a relationship field.
Relationship Name
WorkOrderLineItem
Relationship Type
Lookup
Refers To
WorkOrderLineItem




## ProductRequestLineItem

A junction object between ProductRequest and ProductTransfer This object is available in API version 50.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                            Details

LastReferencedDate               Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date and time this record was referenced.

LastViewedDate                   Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date and time this record was viewed.

<!-- page:1410 -->

AFLS Overview                                                                    MedTech Commercial Engagement




## Field                       Details

NeedByDate                  Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date specified as required in a transfer request.

ParentId                    Type
reference
Properties
Create, Filter, Group, Sort
Description
Reference to the parent ProductRequest record.

Product2Id                  Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Reference to the product requested.

ProductRequestLineItemNumber Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
Name of this record. This is auto-generated.

QuantityRequested           Type
double
Properties
Create, Filter, Sort, Update
Description
The quantity that was requested.

QuantityUnitOfMeasure       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the quantity requested.

<!-- page:1411 -->

AFLS Overview                                                                                 MedTech Commercial Engagement



Field                                Details
Possible values are:
- Each




## productrequired

Represents a product that is needed to complete a visit.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), undelete(), update(), upsert()


Fields


## Field                                Details

LastReferencedDate                   Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date when the product required was last modified. Its label in the user interface is Last
Modified Date.

LastViewedDate                       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date when the product required was last viewed.

ParentRecordId                       Type
reference
Properties
Create, Filter, Group, Sort
Description
The work order or work order line item that the product is required for.

ParentRecordType                     Type
string
Properties
Filter, Group, Nillable, Sort

<!-- page:1412 -->

AFLS Overview                                                                               MedTech Commercial Engagement



Field                               Details


## Description

Indicates whether the parent record is a work order or a work order line item.

Product2Id                          Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The required product.

ProductName                         Type
string
Properties
Filter, Group, Nillable, Sort
Description
The name of the product required.

ProductRequiredNumber               Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
(Read only) Auto-generated number identifying the product required.

QuantityRequired                    Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
Quantity required of the product.

QuantityUnitOfMeasure               Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Units of the required product




## Usage

Required products can be added to work types, work orders, and work order line items to ensure that the assigned service resource
arrives with the right equipment.

<!-- page:1413 -->

AFLS Overview                                                                                    MedTech Commercial Engagement


Adding required products to work types saves you time and keeps your business processes consistent. Work orders and work order line
items inherit their work type’s required products. For example, if all light bulb replacement jobs require a ladder and a light bulb, add
the ladder and light bulb as required products to your Light Bulb Replacement work type. When it’s time to create a work order for a
customer’s light bulb replacement, applying that work type to the work order adds the required products.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ProductRequiredFeed
Feed tracking is available for the object.
ProductRequiredHistory
History is available for tracked fields of the object.



## producttransfer

Represents the transfer of inventory between locations in field service.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

Description                             Type
textarea
Properties
Create, Nillable, Update
Description
Details not recorded in the provided fields.

DestinationLocationId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The place the product is to be delivered.

ExpectedPickupDate                      Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date that the transfer is being requested for.

<!-- page:1414 -->

AFLS Overview                                                                    MedTech Commercial Engagement




## Field                   Details

IsReceived              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Checkbox identifying that the product was received.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date when the product request was last modified. Its label in the user interface is Last
Modified Date.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date when the product request was last viewed.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Owner of the product transfer.

Product2Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lookup field for the product associated with the product transfer.

ProductTransferNumber   Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort

<!-- page:1415 -->

AFLS Overview                                                                           MedTech Commercial Engagement



Field                       Details


## Description

An auto-assigned number that identifies the product transfer.

QuantityReceived            Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
Amount of product received at the destination location.

QuantitySent                Type
double
Properties
Create, Filter, Sort, Update
Description
Amount of product that’s being requested.

QuantityUnitOfMeasure       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The units of the product, for example grams, liters, or units.

ReceivedById                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lookup field for the person who received the product at the destination location.

ShipmentExpectedDeliveryDate Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date for which the transfer is being accepted..

SourceLocationId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1416 -->

AFLS Overview                                                                                      MedTech Commercial Engagement



Field                                    Details


## Description

Reference to the location of the inventory making the transfer.

SourceProductItemId                      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference to the inventory making the transfer.

Status                                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of the transfer request.
Possible values are:
- Accepted
- Rejected
- Requested




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ProductTransferFeed
Feed tracking is available for the object.
ProductTransferHistory
History is available for tracked fields of the object.
ProductTransferOwnerSharingRule
Sharing rules are available for the object.
ProductTransferShare
Sharing is available for the object.



## RecordAction

Represents a relationship between a record and an action, such as a flow. Create a RecordAction for every action that you want to
associate with a particular record. Available in API version 42.0 and later.

Note: Access to the RecordAction object is determined by a user’s access to the associated parent record.

<!-- page:1417 -->

AFLS Overview                                                                                         MedTech Commercial Engagement



## Supported Calls

create(), delete(), , describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(),
undelete(), update(), upsert()



## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.


Fields


## Field                                 Details

ActionDefinition                      Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Required in Lightning Flow for Service implementations that use version 44.0 or later of the
API. The API name of the action to associate with the record; for example, the API name of
a flow. Use this field rather than FlowDefinition. To distinguish a quick action from a flow
with the same API name, we prepend "QuickAction" to the API name of every quick action.

ActionType                            Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Required in Lightning Flow for Service implementations that use version 46.0 or later of the
API. The type of action. Possible values are:
- Flow (default)
- QuickAction
For versions of the API prior to version 46.0, this field is set to Flow.

FlowDefinition                        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Optional in Lightning Flow for Service implementations using version 42.0 or 43.0 of the API.
An upgrade to Winter '19 or later, which uses API version 44.0 or later, copies FlowDefinition
to ActionDefinition. For versions 42.0 and 43.0, this field is the API name of the flow that’s
associated with the record.

FlowInterviewId                       Type
reference

<!-- page:1418 -->

AFLS Overview                                                                       MedTech Commercial Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Optional. The flow interview ID of the paused or completed flow. This field can’t be set in
Process Builder.
This is a relationship field.
Relationship Name
FlowInterview
Relationship Type
Lookup
Refers To
FlowInterview

IsMandatory             Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Optional. Specifies whether the action is mandatory. The default value is false.


## Note: At runtime, we show a reminder when the user closes a mandatory flow

without completing it. We don't show the reminder for quick actions.

IsUiRemoveHidden        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Optional. Specifies whether the ability to remove the action is hidden in the UI. The default
value is false. If true, the UI hides the ability to remove the action. However, actions can still
be deleted using the API.

Order                   Type
int
Properties
Create, Filter, Group, Sort, Update
Description
Required. The order of the action among all actions associated with this record.

ParticipantRoleId       Type
reference

<!-- page:1419 -->

AFLS Overview                                                                       MedTech Commercial Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The participant role that's associated with the record action.
This field is a polymorphic relationship field and is available in API version 58.0 and later.
Relationship Name
ParticipantRole
Relationship Type
Lookup
Refers To
ParticipantRole

Pinned                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Required. Specifies whether the action is pinned to the top or bottom of the component. If
an action is pinned, users see the Remove option in the UI unless IsUiRemoveHidden
is set to true. Possible values are:
- None (default)
- Top
- Bottom

RecordId                Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Required. Record associated with the action. In version 46.0 and above, we support most
object types. To learn about supported objects, see the Lightning Flow for Service Developer’s
Guide.
This is a relationship field.
Relationship Name
Record
Relationship Type
Lookup
Refers To
Account, Address, Asset, AssetRelationship, AssignedResource, AssociatedLocation, Campaign,
CampaignMember, CarePreauth, CarePreauthItem, Case, ChangeRequest, CollaborationGroup,
Contact, ContactRequest, Contract, CoverageBenefit, CoverageBenefitItem,

<!-- page:1420 -->

AFLS Overview                                                                                       MedTech Commercial Engagement




## Field                                  Details

EnhancedLetterhead, Incident, Lead, Location, MemberPlan, OperatingHours, Opportunity,
Order, PlanBenefit, PlanBenefitItem, Problem, Pricebook2, PricebookEntry, Product2,
ProductItem, ProductItemTransaction, ProductRequest, ProductRequestLineItem,
ProductRequired, ProductTransfer, PurchaserPlan, PurchaserPlanAssn,
RebateMemberAggregateItem, ResourceAbsence, ResourcePreference, ReturnOrder,
ReturnOrderLineItem, ServiceAppointment, ServiceResource, ServiceResourceSkill,
ServiceTerritory, ServiceTerritoryMember, Shipment, SkillRequirement, SocialPersona,
SocialPost, TimeSlot, User, Visit, VoiceCall, WorkOrder, WorkOrderLineItem, WorkType,
WorkTypeGroup
ChangeRequest, Incident, Problem are available in API version 53.0 and later.
RebateMemberAggregateItem is available in API version 54.0 and later.

Status                                 Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Required. The current state of the action. Possible values are:
- New (default)
- Paused
- Complete
- Started
- Unlinked—The action was unlinked because the flow was paused and the current
record for the flow interview changed.
Paused and unlinked statuses do not apply to quick actions. This field can’t be set in Process
Builder.




## Usage

The RecordAction object works with the Actions & Recommendations component in Lightning Experience. Although this junction object
can be used to create relationships between records and actions in Salesforce Classic, those relationships can’t be displayed in Salesforce
Classic.

Note: API version 44.0 added a field, ActionDefinition, so that a RecordAction in future releases can support other types of actions
in addition to flows. API version 44.0 and later maintain the FlowDefinition field to support processes that reference this field in
earlier API versions. Upgrading an org to Winter '19 or later, which uses API version 44.0 or later, copies the FlowDefinition field to
the ActionDefinition field. FlowDefinition will be deprecated in a future release, so use ActionDefinition instead.
When an action is deleted that’s referenced in an ActionDefinition or FlowDefinition, the RecordAction object is deleted. RecordAction
objects are also deleted when the associated parent record is deleted, or when a flow is paused and the current record context has
changed. When an action is completed, the associated RecordAction object is also deleted.
Deleted RecordActions are removed from the list when the page is refreshed.
For more information about the Actions & Recommendations component and how it works with RecordActions, see the Lightning Flow
for Service Developer Guide.

<!-- page:1421 -->

AFLS Overview                                                                                    MedTech Commercial Engagement



## Java Example

Here’s an example of how to associate flows to a record using the RecordAction object.
public void associateNewCustomerFlowWithAccount(Account a) {
try {
RecordAction newRecordAction = new RecordAction();
newRecordAction.setRecordId(a.getId());
newRecordAction.setActionDefinition(“New_Customer_Flow”);
newRecordAction.setOrder(1);


## SaveResult[] results = connection

.create(new SObject[] { newRecordAction });
} catch (ConnectionException ce) {
ce.printStackTrace();
}
}


Data Model





## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.

<!-- page:1422 -->

AFLS Overview                                                                                     MedTech Commercial Engagement




## RecordActionHistory

History is available for tracked fields of the object.



## SerializedProduct

Records serial numbers for each individual product in an inventory. This object is available in API version 50.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

To use this object, you need the Manage Industries Visit permission and the Industries Visit permission set license. This rule doesn’t apply
to using serialized products in Field Service.


Fields


## Field                                   Details

AssetId                                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference to an asset record.

ExpirationDate                          Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date the product expires.

LastReferencedDate                      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date and time this record was referenced.

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:1423 -->

AFLS Overview                                                                       MedTech Commercial Engagement



Field                   Details


## Description

The last date and time this record was viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the serialized product record. This is auto-generated.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Reference to the owner of the record.

Product2Id              Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The product that is serialized.

ProductItemId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference to the inventory, a product item record, this serialized product belongs to.

SerialNumber            Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The serial number of the product.

Status                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update

<!-- page:1424 -->

AFLS Overview                                                                                       MedTech Commercial Engagement



Field                                   Details


## Description

The status of the product. Possible values include:
- Available
- Consumed
- Damaged
- Lost
- Sent
The default value is Available.




## Visit

Track information related to a field rep’s visit to a health care provider.



## Special Access Rules

In AFLS, Visit is used for Customer Engagement.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AccountId                               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account that is associated with a visit.
Relationship Name
Account
Refers To
Account

Channel                                 Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update

<!-- page:1425 -->

AFLS Overview                                                                            MedTech Commercial Engagement



Field                   Details


## Description

The channel of the visit.
Possible values are:
- Email
- In-Person
- Phone
- Remote
- SMS
- WeChat
- WhatsApp
The default value is In-Person. This field is available with the AFLS for
Customer Engagement Add-on license in API version 65.0 and later.

ParentVisitId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
If this visit is the child of a larger group visit, this field is used to provide a link to that visit.
This field is a relationship field. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.
Relationship Name
ParentVisit
Refers To
Visit

PlaceId                 Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
ID of the location that sales reps visit.
Relationship Name
Place
Refers To
Address, ContactPointAddress, Location, RetailStore

PlannedVisitStartTime   Type
dateTime

<!-- page:1426 -->

AFLS Overview                                                                           MedTech Commercial Engagement



Field                   Details


## Properties

Create, Filter, Sort, Update
Description
The date and time when the visit is expected to start.

SignatureType           Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The type of the signature.
Possible values are:
- Digital
- Physical
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

Status                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update
Description
The status of a visit.
Possible values are:
- Completed
- Planned
The default value is Planned.

TerritoryId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the terriory for this visit.
This field is a relationship field. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.
Relationship Name
Territory
Refers To
Territory2

<!-- page:1427 -->

AFLS Overview                                                                                     MedTech Commercial Engagement




## VisitedParty

Represents the contact person at the account that’s being visited. This object is available in API version 49.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

ContactId                              Type
reference
Properties
Create, Filter, Group, Sort
Description
Lookup to the person assigned as the contact at an account. This field references the
Contact object.

IsPrimaryContact                       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the person is the primary visited party.

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate                         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                                   Type
string

<!-- page:1428 -->

AFLS Overview                                                                                         MedTech Commercial Engagement



Field                                     Details


## Properties

Create, Filter, Group, idLookup, Sort, Update
Description
The name of the visited party.

VisitId                                   Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Lookup to the Visit record this person is associated with.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
VisitedPartyHistory
History is available for the object.
VisitedPartyFeed
Feed tracking is available for the object.



## Visitor

Represents the sales reps performing visits.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                     Details

AssigneeId                                Type
reference
Properties
Create, Filter, Group, Sort
Description
Lookup to the person assigned as the visitor.
Such as the employee attending the visit with the field user.
This field is a polymorphic relationship field.

<!-- page:1429 -->

AFLS Overview                                                                      MedTech Commercial Engagement



Field                   Details

Relationship Name
Assignee
Relationship Type
Master-detail
Refers To
- Contact
- User

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view indirectly.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the visitor.

VisitId                 Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Lookup to the Visit record this visitor is associated with.
This field is a relationship field.
Relationship Name
Visit
Refers To
Visit

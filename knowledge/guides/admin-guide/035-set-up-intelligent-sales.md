<!-- guide:admin-guide section:set-up-intelligent-sales pages:1162-1223 -->
# Set Up Intelligent Sales




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To initiate the record conversion:
Manage Flows

AND

Run Flows


To convert a quote to a sales agreement, use the Convert to Sales Agreement quick action on the Quote
record page. Or, to convert a sales agreement to a quote, use the Convert to Quote quick action on the
Sales Agreement record page. The quick actions launch the Convert Record screen flow. The flow prefills
values from fields that are mapped in the SalesAgreementQuotesConversion context definition and that
have values on the source objects. Enter missing data or update the values of prefilled fields, and then
click Next.

A bell notification lets you know when the record conversion is complete.


## See Also

Verify Context Definition Mapping



Set Up Intelligent Sales

Maximize productivity for your sales teams by giving them the tools required to efficiently plan and
execute their surgical case visits and cycle counts. Give your teams valuable insight into field inventory
and impacted revenue, with visits-based product availability projections.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


If someone has a product shortfall, they can request a product transfer from a nearby inventory. Reps
can also blaze through cycle counts with fewer errors using their mobile devices.


## User Personas for Intelligent Sales

Working with Intelligent Sales incorporates three types of activities. The optimal way to use Intelligent

<!-- page:1163 -->



Sales is to divide and conquer these activity types with different user personas.
The Intelligent Sales Data Model
Intelligent Sales uses many objects to work its magic for your sales teams. But not all user roles
interact directly with these objects. Admins interact with them more than sales reps or other field-
oriented roles.
Visit Types in Intelligent Sales
Intelligent Sales helps your sales reps and sales operations teams schedule visits for your business.
Visits can be either surgical case visits for your reps to sell their products, or cycle count visits for your
reps to audit their inventories. Visit types are created using the Work Type object.
Enable Intelligent Sales
Before your users can use Intelligent Sales, you must enable the Intelligent Sales and Visit Inventory
Management org prefs in your Salesforce org.
Assign Permission Sets for Intelligent Sales
Assign the Action Plans and Industries Visits permission sets to your users so that they can use
Intelligent Sales. Also assign the Health Cloud Starter (for AFLS) or Health Cloud
Foundation (for Health Cloud) permission set.
Set Up Visit and Inventory Access
Set up the right object permissions so that users access just the visits and inventories they’re
responsible for. You can use Sharing Settings and custom Apex triggers to set up access.
Use External Data Sources for Expected Quantity in Cycle Counts
Expected quantities in cycle counts are automatically calculated from product item records in
Intelligent Sales. However, if you need to use external data sources for these numbers, use our
IFetchInventoryCount Apex Interface with your own custom Apex classes and methods.
Configure the Page Layouts and Picklist Values for Product Transfer, Product, and Location
Configure the page layouts of Product Transfer, Product, and Locations, and add picklist values for
different location types. You must make these changes before your users start using Intelligent Sales.
Set Up Data for Intelligent Sales
To help your users get the most out of Intelligent Sales, make sure that your Salesforce org is set up
with the right data.
Intelligent Sales Sample Flows for Field Inventory Management
Manage your serialized inventories using the Intelligent Sales Sample Flows for Field Inventory
Managements. Capture and fulfill product requests and ensure all products are accounted for by
performing cycle counts with built-in business processes designed to optimize field inventory
management. To ensure that the flows meet your business’ unique needs, flows are customizable.
Use Intelligent Sales
Intelligent Sales helps organizations that produce and sell medical devices to make their sales and
inventory management processes more efficient. Sales ops teams can use the desktop app to
schedule surgical case visits and cycle counts for their sales reps in the field. Sales reps can use the
mobile app to schedule and perform their own surgical case visits and cycle counts.

<!-- page:1164 -->




User Personas for Intelligent Sales

Working with Intelligent Sales incorporates three types of activities. The optimal way to use Intelligent
Sales is to divide and conquer these activity types with different user personas.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


User Persona                        Responsibilities

Data Setup - Salesforce Admin       The Salesforce admin sets up the org with the right data. For
instance, they create records for account and inventory locations
with the right attributes and a compatible address format.

Visit Planning and Inventory        The sales ops team creates visits with the right resources, the right
Management - Sales Ops              products, and the right assessment tasks. The team anticipates
shortfalls in the visits they create, and proactively requests product
transfers when shortfalls happen. Inventory management
responsibilities can also be shared with sales reps.

Visit Execution - Sales Reps        The sales reps make site visits to fulfill their surgical case orders and
perform visit tasks defined in the visit. They rely solely on the
mobile app for these visits.



The Intelligent Sales Data Model

Intelligent Sales uses many objects to work its magic for your sales teams. But not all user roles interact
directly with these objects. Admins interact with them more than sales reps or other field-oriented roles.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


The Intelligent Sales data model includes these objects.

Account

Hospitals and providers that your organization deals with.

<!-- page:1165 -->



Patients that your devices are registered for in a surgical visit. If you use the Patient Registration
flow in your action plan template, it automatically creates these records for you when the visit is
completed. If Person Accounts are enabled for your Salesforce org and the sales rep has access
to person accounts, the record created is always a person account record. And if not, it’s a
business account record.



## Action Plan Template

Reusable templates that add assessment tasks to visits.



## Address

The address details for your locations.



## Assessment Indicator Definition

The data type for the quantities recorded in generic visit key performance indicator records. For
cycle counts, the data type must always be Number.



## Assessment Task

Tasks sales reps complete during a surgical visit. The visit creation flow creates these records for
you.



## Contact

The point of contact for your sales reps at a given account location.



## Generic Visit Key Performance Indicator

The expected quantities and the counted quantities of a product at an inventory location. As an
admin, you create only a template record in this object, leaving all the value-related fields blank.
Instance records are created when a cycle count is initiated, and the value-related fields are filled
during the cycle count. At the time of execution, instance records for key performance indicators
are created for a visit based on the Generic Visit Key Performance Indicator definition record.
Actual and expected product values are populated during a visit based on your inventory records
in Salesforce.



## Generic Visit Task

The cycle count task for a specific product. Generic visit task records act as definition records
that the system uses to create instance records for specific visits. At the time of execution,
instance records for visit tasks are automatically created for a visit based on the Generic Visit Task
definition record.



## Generic Visit Task Context

The product item context for a generic visit task. Because these records must be associated with
product item records, you need to create separate generic visit task context records for every
product at every inventory location. Generic visit task context records act as definition records
that the system uses to create instance records for specific visits. At the time of execution,

<!-- page:1166 -->



instance records for visit task context are automatically created for a visit based on the Generic
Visit Task Context definition record.



## Generic Visit Task Context Relation

The junction object that connects generic visit task records with generic visit task context
records. These records act as definition records that the system uses to create instance records
for specific visits. At the time of execution, instance records for visit task context relation are
automatically created for a visit based on the Generic Visit Task Context Relation definition
record.



## Location

The locations of different hospitals and your sales reps' inventories.



## Order

This object isn’t a required part of the Intelligent Sales data model and is only used with the
Order Authorization flow. When you use the order authorization flow in your action plan
template, an order record is automatically created with billing details, including the product,
quantity, and amount.



## Product

The products your organization provides.



## Product Availability Projection

The information about the projected availability of products related to visits and transfer
requests. Don’t create or edit any records in this object; its data is managed automatically. Give
your users read access to this object so that they can see their inventory projections in the
Intelligent Sales app.



## Product Fulfillment Location

A combination of records that ties a sales rep to an inventory, an account, and an account
location.

A product fulfillment location consists of these references:

- A product
- An account that orders the product
- The location of the account
- The location of the product inventory fulfilling the order
- The sales rep responsible for the inventory and the location


## Product Item

A combination of a product, the location of its inventory, and the quantity available at that
location. If your product is serialized, the initial quantity for the Product Item record must be
zero. Any change to the quantity is automatically handled based on changes in Serialized

<!-- page:1167 -->



Product.



## Product Request

The date by which a sales rep needs a transfer to happen. The request transfer flow creates these
records for you.



## Product Request Line Item

The junction object that connects a product request record and the corresponding product
transfer record. The request transfer flow creates these records for you.



## Product Required

The products that are added as required for different visits. The visit creation flow creates these
records for you.



## Product Transfer

Product transfers requested by sales reps when they have shortfalls. The request transfer flow
creates these records for you.



## Serialized Product

The serial numbers of individual products and the product item records that they’re associated
with. Each new serialized product that’s associated with a product item record automatically
increases the Product Item record quantity by one.



## Visit

Visits created by sales teams to fulfill product orders from accounts or perform cycle counts for
their inventories. The visit creation flow creates these records for you. This data model is
centered around the Visits object.



## Visited Party

The contacts sales reps visit at accounts. The visit creation flow creates these records for you.



## Visitor

The sales reps assigned to different visits. The visit creation flow creates these records for you.



## Work Type

The duration-related properties of a visit. For surgical visits, select the Is Used For Inventory
Projection checkbox. For cycle count visits, select the Cycle Counting checkbox, and when
applicable, the Blind Cycle Counting checkbox.



Visit Types in Intelligent Sales

Intelligent Sales helps your sales reps and sales operations teams schedule visits for your business. Visits
can be either surgical case visits for your reps to sell their products, or cycle count visits for your reps to

<!-- page:1168 -->



audit their inventories. Visit types are created using the Work Type object.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Surgical Case Visits

Your sales operations team schedules surgical case visits when they receive an order for your products
from a provider. Your reps visit the provider on the day of the procedure to fulfill the order and perform
typical actions like registering the patient’s details for your organization or authorizing the order for
handoff. In some cases, for certain products, sales reps may schedule surgical case visits directly too.
Intelligent Sales supports these tasks out of the box with our Patient Registration and Order
Authorization flows. If your reps need to perform more tasks during a visit, you can create flows and add
them to your action plan templates.

And that’s not all. Intelligent Sales gives your reps and sales operations teams visibility into product
shortfalls, with estimated revenue impact figures, for their upcoming surgical case visits. If your rep has a
shortfall, either the rep or their sales operations contact can easily arrange for a product transfer from a
nearby rep or warehouse.


Cycle Count Visits

Cycle count visits are scheduled for inventories to check the numbers available on record against the
numbers that are physically present in inventories. Cycle counts can be either planned or ad hoc. Sales
operations teams schedule planned counts at regular intervals using their desktops. Sales reps schedule
ad hoc counts using their mobile devices.

Intelligent Sales helps your teams through these counts by pulling in the required inventory numbers
from your records in Salesforce. The barcode scanner in the mobile app also saves your reps the hassle of
manually entering every serial number. And the app automatically adds the scanned serial numbers to its
list and tallies the numbers, so reps don't have to keep track of how many products they've counted.

Intelligent Sales also supports blind cycle counts. A blind cycle count is a cycle count where the sales rep
isn’t aware of the expected inventory count at the location. All you have to do is create a work type that’s
marked for blind cycle counts.


Enable Intelligent Sales

Before your users can use Intelligent Sales, you must enable the Intelligent Sales and Visit Inventory
Management org prefs in your Salesforce org.

<!-- page:1169 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To configure settings:                                Customize Application


1. From Setup, enter Inventory Settings in the Quick Find box and select Inventory Settings.
2. Set Visit Inventory Management to enabled.
3. Enter Intelligent Sales Settings in the Quick Find box and select Intelligent Sales Settings.
4. Set Intelligent Sales to enabled.
Note You can create work types to define your visit types from this page. Select work types for
inventory projections and cycle counts on this page. It's not necessary to do this now. To learn
more, see Set Up Work Types for Visits.

5. Turn on the Expiring Products Page and the Cycle Count Products Page for the mobile app users.
6. Enter Visit Calendar Settings in the Quick Find box and select Visit Calendar Settings.
7. Enable Add Visits to Salesforce Calendar.

Your Salesforce org now has access to the Intelligent Sales app and the Visits data model.


Assign Permission Sets for Intelligent Sales

Assign the Action Plans and Industries Visits permission sets to your users so that they can use Intelligent
Sales. Also assign the Health Cloud Starter (for AFLS) or Health Cloud Foundation (for
Health Cloud) permission set.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To assign permission sets:
Assign Permission Sets

AND

View Setup and Configuration

<!-- page:1170 -->



1. From Setup, enter Permission Sets in the Quick Find box and select Permission Sets.
2. Select Action Plans and click Manage Assignments.
3. Click Add Assignments, select your users, and click Assign.

Repeat these steps for the other permission sets mentioned earlier.


Set Up Visit and Inventory Access

Set up the right object permissions so that users access just the visits and inventories they’re responsible
for. You can use Sharing Settings and custom Apex triggers to set up access.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To set default sharing access:                       Manage Sharing

To edit object permissions:
Manage Profiles and Permission Sets

AND

Customize Application


Before you set up view permissions, it’s a good idea to create different profiles for the different business
functions at your organization.

Here’s how you configure object permissions related to visits and product inventories for a sales rep.

1. From Setup, enter Sharing Settings in the Quick Find box and select Sharing Settings.
2.    Click Edit for Organization-Wide Defaults.
3.    Set Product Fulfillment Location, Product Item, and Visit to Private.
4.    Save your changes.
5.    Enter Profiles in the Quick Find box and select Profiles.
6.    Click the profile you set up for your sales reps.
7.    Click Edit and go to the Standard Object Permissions section.
8.    Select Read, Create, Edit, and Delete for Visits, Product Items, and Product Fulfillment Locations.
9.    Deselect View All Records for Visits, Product Items, and Product Fulfillment Locations.
10.    Save your changes.

Now, you can implement appropriate Apex Classes and Triggers in your org to control how visit and
inventory access is shared with your users. You can write these classes and triggers in any way that best

<!-- page:1171 -->



suits the needs of your organization. In this article, we've provided some sample Apex classes and
triggers to help you get started.


## Sample Apex Trigger for Visit and Inventory Access

Implement appropriate Apex Classes and Triggers in your org to control how visit and inventory access
is shared with your users. You can write these classes and triggers in any way that best suits your
organization's requirements. Here are some sample Apex classes and triggers to help you get started.
The Visit trigger provides sharing access to the Visit object and related objects at the time a visit is
created or updated. The Visitor trigger provides access to the user who is assigned to a visit. You can
use these Apex triggers with profile-based permissions and organization-wide sharing settings to make
sure that users access just their visits and inventories.


Sample Apex Trigger for Visit and Inventory Access

Implement appropriate Apex Classes and Triggers in your org to control how visit and inventory access is
shared with your users. You can write these classes and triggers in any way that best suits your
organization's requirements. Here are some sample Apex classes and triggers to help you get started. The
Visit trigger provides sharing access to the Visit object and related objects at the time a visit is created or
updated. The Visitor trigger provides access to the user who is assigned to a visit. You can use these Apex
triggers with profile-based permissions and organization-wide sharing settings to make sure that users
access just their visits and inventories.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED


## To define, edit, delete, set security, and set version   Author Apex

settings for Apex classes:

To run Apex tests:                                       View Setup and Configuration


Important The sample code Salesforce provides in this Help article for Apex Triggers and Apex
Classes is: (1) made available solely as an example for Customers' reference purposes; and (2) is a
Non-SFDC Application under any Main Services Agreement between a Customer and Salesforce.
Customers can either choose to use this sample code as provided, or write their own code as
appropriate for their own implementation of Salesforce's Services. This sample code is made
available "AS-IS" and Salesforce makes no warranty of any kind regarding this sample code (whether
express, implied, statutory or otherwise).


To set up Apex triggers, you must create a few utility classes first.

<!-- page:1172 -->



1. Click Setup and select Developer Console.
2. Create the VisitAccess utility class.
a. Select File | New | Apex Class.
b. For the Apex class name, enter VisitAccess.
c. Delete the auto-generated content and paste the following code.

public class VisitAccess {


static Set<String> accessLevels = new Set<String>{'read', 'edit'};


public static void insertVisitAccess(Visit visit, User user, String ac
cessType) {
insertVisitAccess(visit, new List<User>{user}, accessType);
}


public static void insertVisitAccess(Visit visit, Id objectId, String
accessType) {
if(isUser(objectId)) {
insertVisitAccess(visit, new User(id=objectId), accessType);
}
}


public static void insertVisitAccess(Visit visit, List<User> users, St
ring accessType) {
if(visit==null || visit.Id==null || users==null || users.isEmpt
y()) {
return;
}
List<VisitShare> shareVisitList = new List<VisitShare>();
for(User user: users) {
if(user==null)
continue;
VisitShare shareVisit = New VisitShare();
shareVisit.ParentId=visit.Id;
shareVisit.UserOrGroupID = user.Id;
shareVisit.AccessLevel = accessType;
shareVisitList.add(shareVisit);
}
try{
Database.insert(shareVisitList);
} catch(Exception e) {
System.debug('Unexpected exception : ' + e);
}
}

<!-- page:1173 -->





## public static void updateVisitAccess(Visit visit, List<Id> oldUsers, L

ist<Id> newUsers, String access) {
if(visit==null) {
return;
}
if(oldUsers!=null) {
for(Id userId : oldUsers) {
if(isUser(userId)) {
deleteVisitAccess(visit, new User(id=userId));
}
}
}
if(newUsers!=null) {
for(Id userId : newUsers) {
if(isUser(userId)) {
insertVisitAccess(visit, userId, access);
}
}
}
}


public static void updateVisitAccess(Visit oldVisit, Visit updatedVisi
t, String access) {
//Comment this condition if for any update visit need to be shared
if(oldVisit.VisitorId==updatedVisit.VisitorId) {
return;
}
updateVisitAccess(oldVisit, oldVisit!=null?new List<Id>{oldVisit.V
isitorId}:new List<Id>(), updatedVisit!=null?new List<Id>{updatedVisit.Vis
itorId}:new List<Id>(), access);
}



## //remove user from oldVisit if user does not have any more access to o

ldVisit, and link user to newVisit
public static void updateVisitAccess(Visit oldVisit, Visit newVisit, L
ist<User> users, String access) {
if(users==null || users.isEmpty()) {
return;
}
if(access==null||!accessLevels.contains(access)) {
access='edit';
}
for(User user : users) {
if(oldVisit!=null)

<!-- page:1174 -->




deleteVisitAccess(oldVisit, user);
if(newVisit!=null)
insertVisitAccess(newVisit, user, access);
}
}




## //remove user from oldVisit if user does not have any more access to o

ldVisit, and link user to newVisit
public static void updateVisitAccess(Visit oldVisit, Visit newVisit, I
d objectId, String access) {
if(isUser(objectId)) {
updateVisitAccess(oldVisit, newVisit, new List<User>{new Use
r(id=objectId)}, access);
}
}



## public static void deleteVisitAccess(Visit visit, List<User> users) {

List<VisitShare> visitShareList = new List<VisitShare>();
for(User user : users) {
if(isUserLinkedToVisit(user, visit))
continue;
List<VisitShare> visitShare = [select Id from VisitShare where
ParentId = :visit.Id and UserOrGroupID = :user.Id and RowCause='Manual'];
if(!visitShare.isEmpty()) {
visitShareList.add(visitShare.get(0));
}
}
delete visitShareList;
}



## public static void deleteVisitAccess(Visit visit, User user) {

deleteVisitAccess(visit, new List<User>{user});
}



## public static void deleteVisitAccess(Visit visit, Id objectId) {

if(isUser(objectId)) {
deleteVisitAccess(visit, new User(id=objectId));
}
}


public static Boolean isUser(Id objId) {
if(objId==null)
return false;

<!-- page:1175 -->




List<User> users = [select Id from User where Id = :objId];
return !users.isEmpty();
}


public static Boolean isUser(Object obj) {
if(obj==null)
return false;
try {
User user = (User)obj;
} catch(TypeException e) {
return false;
}
return true;
}



## public static Boolean isUserLinkedToVisit(User user, Visit visit) {

List<Visit> visits = [select Id from Visit where VisitorId = :use
r.Id and Id=:visit.Id];
List<Visitor> visitors = [select Id from Visitor where AssigneeId
= :user.Id and VisitId=:visit.Id];
return !visits.isEmpty() || !visitors.isEmpty();
}
}


d. Select File | Save.
3. Create the visit trigger.
a. Select File | New | Apex Trigger.
b. For the trigger name, enter VisitTrigger, and select Visit from the sObject picklist.
c. Delete the auto-generated content and paste the following sample.


## trigger VisitTrigger on Visit (after insert, after update) {

List<VisitShare> visitShares = new List<VisitShare>();
for(Visit visit : trigger.new) {
if(trigger.isUpdate) {
Visit oldVisit = trigger.oldMap.get(visit.Id);
VisitAccess.updateVisitAccess(oldVisit, visit, 'edit');
}
if(trigger.isInsert) {
VisitAccess.insertVisitAccess(visit, visit.VisitorId, 'edit');
}
}
}


d. Select File | Save.
4. Create the visitor trigger.

<!-- page:1176 -->



a. Select File | New | Apex Trigger.
b. For the trigger name, enter VisitorTrigger, and select Visitor from the sObject picklist.
c. Delete the auto-generated content and paste the following sample.

trigger VisitorTrigger on Visitor (after insert, after update, after delet
e) {



## if(trigger.isInsert) {

for(Visitor visitor : trigger.new) {
VisitAccess.insertVisitAccess(new Visit(id=visitor.VisitId), v
isitor.AssigneeId, 'edit');
}
}



## if(trigger.isUpdate) {

for(Visitor visitor : trigger.new) {
Visitor oldVisitor = trigger.oldMap.get(visitor.Id);
VisitAccess.updateVisitAccess(new Visit(id=oldVisitor.VisitI
d), new Visit(id=visitor.VisitId), visitor.AssigneeId, 'edit');
}
}



## if(trigger.isDelete) {

for(Visitor visitor : trigger.old) {
VisitAccess.deleteVisitAccess(new Visit(id=visitor.VisitId), v
isitor.AssigneeId);
}
}
}


d. Select File | Save.
Now, sales reps can see only the visits they’re assigned to.
5. Create the ProductItemAccess utility class.
a. Select File | New | Apex Class.
b. For the Apex class name, enter ProductItemAccess.
c. Delete the auto-generated content and paste the following sample.

public class ProductItemAccess {



## public static void insertAccess(List<ProductItem> productItems, List<I

d> users, String access) {


if(productItems==null || productItems.isEmpty() || users==null ||
users.isEmpty()) {
return;

<!-- page:1177 -->




}
productItems = getProductItemsWithId(productItems);
List<ProductItemShare> shareList = new List<ProductItemShare>();
for(Id user: users) {
if(user==null)
continue;
for(ProductItem item : productItems) {
ProductItemShare share = New ProductItemShare();
share.ParentId=item.Id;
share.UserOrGroupID = user;
share.AccessLevel = access;
shareList.add(share);
}
}
try{
Database.insert(shareList);
} catch (Exception e) {
System.debug(e);
}
}


public static void deleteAccess(List<ProductItem> productItems, List<I
d> users) {
List<ProductItemShare> shareList = new List<ProductItemShare>();
for(Id userId : users) {
for(ProductItem productItem : productItems) {
List<ProductItemShare> shares = [select Id from ProductIte
mShare where ParentId = :productItem.Id and UserOrGroupID = :userId and Ro
wCause='Manual'];
if(!shares.isEmpty()) {
shareList.addAll(shares);
}
}
}
delete shareList;
}



## public static List<ProductItem> getProductItems(ProductFulfillmentLoca

tion fulfillLocation) {
return [select Id from ProductItem where Product2Id=:fulfillLocati
on.ProductId and LocationId=:fulfillLocation.FulfillmentLocationId];
}


private static List<ProductItem> getProductItemsWithId(List<ProductIte

<!-- page:1178 -->





## m> productItems) {

List<ProductItem> productItemsWithId = new List<ProductItem>();
for(ProductItem item : productItems) {
if(item==null)
continue;
if(item.id==null) {
List<ProductItem> itemList = [select Id from ProductItem w
here Product2Id=:item.Product2Id and LocationId=:item.locationId];
productItemsWithId.addAll(itemList);
}
}
return productItemsWithId;
}
}


d. Select File | Save.
6. Create the ProductFulfillmentLocationAccess utility class.
a. Select File | New | Apex Class.
b. For the Apex class name, enter ProductFulfillmentLocationAccess.
c. Delete the auto-generated content and paste the following sample.

public class ProductFulfillmentLocationAccess {


static Set<String> accessLevels = new Set<String>{'read', 'edit'};


/**
* Gives access to users on all product fulfillment locations
*/
public static void insertAccessToAllLocations(ProductFulfillmentLocati
on locationToInsert, String accessType) {
List<ProductFulfillmentLocation> fulfillLocations = [select Id, Pr
oductId, FulfillmentLocationId from ProductFulfillmentLocation];
insertAccess(fulfillLocations, getAllResponsibleUsers(), accessTyp
e);
insertProductItemAccess(new List<ProductFulfillmentLocation>{locat
ionToInsert}, new List<Id>{locationToInsert.UserId}, accessType);
}



## public static void insertAccess(List<ProductFulfillmentLocation> fulfi

llLocations, List<Id> users, String accessType) {
if(fulfillLocations==null || fulfillLocations.isEmpty() || user
s==null || users.isEmpty()) {
return;
}

<!-- page:1179 -->





## List<ProductFulfillmentLocationShare> shareList = new List<Product

FulfillmentLocationShare>();
for(Id user: users) {
if(user==null)
continue;
for(ProductFulfillmentLocation location : fulfillLocations) {
if(location==null || location.Id==null)
continue;
ProductFulfillmentLocationShare share = New ProductFulfill
mentLocationShare();
share.ParentId=location.Id;
share.UserOrGroupID = user;
share.AccessLevel = accessType;
shareList.add(share);
}
}
try{
Database.insert(shareList);
} catch (Exception e) {
System.debug(e);
}
}



## public static void updateAccess(ProductFulfillmentLocation oldLocatio

n, ProductFulfillmentLocation updatedLocation, String access) {
deleteAccess(oldLocation);
insertAccessToAllLocations(updatedLocation, access);
}



## public static void deleteAccess(List<Id> users) {

List<ProductFulfillmentLocationShare> shareList = new List<Product
FulfillmentLocationShare>();
for(Id userId : users) {
if(isUserLinkedTofulfillLocation(userId))
continue;
List<ProductFulfillmentLocationShare> shares = [select Id from
ProductFulfillmentLocationShare where UserOrGroupID = :userId and RowCaus
e='Manual'];
if(!shares.isEmpty()) {
shareList.addAll(shares);
}
}
delete shareList;
}

<!-- page:1180 -->





public static void deleteAccess(ProductFulfillmentLocation fulfillLoca
tion) {
deleteAccess(new List<Id>{fulfillLocation.UserId});
deleteProductItemAccess(fulfillLocation);
}



## public static Boolean isUserLinkedTofulfillLocation(Id userId) {

List<ProductFulfillmentLocation> fulfillLocations = [select Id fro
m ProductFulfillmentLocation where UserId = :userId];
return !fulfillLocations.isEmpty();
}


public static void deleteProductItemAccess(ProductFulfillmentLocation
fulfillLocation) {
ProductItemAccess.deleteAccess(ProductItemAccess.getProductItems(fu
lfillLocation), new List<id>{fulfillLocation.UserId});
}



## public static void insertProductItemAccess(List<ProductFulfillmentLoca

tion> fulfillLocations, List<Id> users, String access) {
List<ProductItem> productItems = new List<ProductItem>();
for(ProductFulfillmentLocation location : fulfillLocations) {
productItems.add(new ProductItem(Product2Id=location.ProductI
d, LocationId=location.FulfillmentLocationId));
}
ProductItemAccess.insertAccess(productItems, users, access);
}



## public static List<Id> getAllResponsibleUsers() {

List<Id> users = new List<Id>();
List<ProductFulfillmentLocation> fulfillLocations = [select UserId
from ProductFulfillmentLocation];
for(ProductFulfillmentLocation location : fulfillLocations) {
users.add(location.UserId);
}
return users;
}
}


d. Select File | Save.
Now sales reps can see only the inventories they’re responsible for.

<!-- page:1181 -->




Use External Data Sources for Expected Quantity in Cycle Counts

Expected quantities in cycle counts are automatically calculated from product item records in Intelligent
Sales. However, if you need to use external data sources for these numbers, use our
IFetchInventoryCount Apex Interface with your own custom Apex classes and methods.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To define an Apex class:                               Author Apex


1. In the Developer Console, select File | New | Apex Class.
2. Implement this Apex interface in the Apex class:


## public class UpdateInventory implements healthcloudext.IFetchInventoryCount{

//Sample Apex Class to fetch Inventory count from external Inventory Locatio
n (Input parameter : visitId)
public Map<Id,Integer> getInventoryCount(String visitId){
Map<Id,Integer> sample = new Map<Id,Integer>();
//Logic to fetch numbers from external data source
//Use Apex code to connect to external API and fetch result
//Return Type: Map of Product Item Id against its Count(Inte
ger Value)
return sample;
}
}


If any record against ProductItemId is missing a value, and that product item already has a value for
expected quantity in the Intelligent Sales system, then the value in the Intelligent Sales system is used
instead.


Configure the Page Layouts and Picklist Values for Product Transfer,
Product, and Location

Configure the page layouts of Product Transfer, Product, and Locations, and add picklist values for
different location types. You must make these changes before your users start using Intelligent Sales.

<!-- page:1182 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To modify page layouts:                                Customize Application


1. From Setup, go to Object Manager, find and select Product Transfer, and then go to the Page Layouts
section.
a. Select Product Transfer Layout.
b. From the Fields menu, move the Expected Pickup Date, Source Location, Destination Location, and
Status fields to the Product Transfer Detail section.
c. Save your changes.
2. From Object Manager, find and select Product, and then go to the Page Layouts section.
a. Select Product Layout.
b. From the Fields menu, move the Serialized field onto the page layout.
c. From the Related Lists menu, move the Serialized related list onto the page layout.
d. Save your changes.
3. From Object Manager, find and select Location, and then go to the Page Layouts section.
a. Select Location Layout.
b. From the Fields menu, move the Inventory Location field to the Information section.
c. Save your changes.
4. From Object Manager, return to the Location object to add Location Type picklist values.
a. Go to the Fields and Relationships section.
b. Select Location Type.
c. In the Picklist Values section, click New.
d. Enter location types such as Site, Warehouse, and Van.
e. Save your changes.

These objects now have all the attributes necessary to store transfer requests for your sales reps.


Set Up Data for Intelligent Sales

To help your users get the most out of Intelligent Sales, make sure that your Salesforce org is set up with
the right data.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:1183 -->



Capabilities of Intelligent Sales such as projecting product shortfalls, and creating and executing site
visits, among others, help your MedTech sales team only if the right data is in the right object. For
instance, make sure that your entries in objects like Location, Product Item, and Product Fulfillment
Location have the right attributes.

1. Set Up Work Types for Visits
Use work type records to create visit types. Work types determine the kind of visits that are created
using the New Visit Flow on the Intelligent Sales home page. You can create work types for surgical
case visits, cycle count visits, or blind cycle count visits. The work type used to create a visit also
determines whether that visit is factored into product shortfall projections.
2. Set Up Your Accounts, Contacts, and Locations
The hospital accounts your organization deals with is the first set of information you add to the
Intelligent Sales data model. After you add an account, you add contacts your reps meet with when
they visit that account. Then you can add the accounts’ locations.
3. Set Up Your Products and Inventories
Records in the Product object define your products. Product inventories are stored in the Product Item
object. The Product Fulfillment Location object associates sales reps with the inventories they own and
accounts they’re responsible for.
4. Set Up Visit Tasks and Action Plan Templates for Cycle Counts
Action plan templates define the sets of tasks that your sales reps perform during visits. Our system
automatically creates visit tasks for scheduled cycle count visits using the details you define in these
action plan templates.
5. Set Up Action Plan Templates for Surgical Case Visits
Action plan templates define the sets of tasks your sales reps perform during visits. Our system
automatically creates Assessment Task records for scheduled surgical case visits using the details you
define in these action plan templates. Action plan templates created for surgical case visits use flows
as visit tasks for your sales reps.
6. Register and Authorize Patient Product Orders Faster with Flows
Salesforce provides two pre-built flows with Intelligent sales to make surgical visits easier. The Patient
Registration and Order Authorization flows are both compatible with Intelligent Sales, and helps
perform two assessment tasks that are common in surgical visits.


Set Up Work Types for Visits

Use work type records to create visit types. Work types determine the kind of visits that are created using
the New Visit Flow on the Intelligent Sales home page. You can create work types for surgical case visits,
cycle count visits, or blind cycle count visits. The work type used to create a visit also determines whether
that visit is factored into product shortfall projections.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:1184 -->




USER PERMISSIONS NEEDED

To add a work type:                                   Create on work type


Note If these fields are not aleady visible, add the Is Used For Inventory Projection, Cycle
Counting, and Blind Cycle Counting fields to the Work Type page layout. Make sure the field-level
security for these three fields is set to visible for your users.


1. From Setup, enter Intelligent Sales Settings in the Quick Find box and select Intelligent Sales
Settings.
2.    Click New Work Type.
3.    Enter a name, estimated duration, and duration type for the work type.
4.    If you’re creating a work type for surgical cases, select Is Used For Inventory Projection. If the work
type is for cycle counts, leave this checkbox unselected.
5.    If you’re creating a work type for cycle counts, select Cycle Counting. If the work type is for surgical
cases, leave this checkbox unselected.
6. If you’re creating a work type for blind cycle count, select Blind Cycle Counting after you select Cycle
Counting.
7. Save your work.


Set Up Your Accounts, Contacts, and Locations

The hospital accounts your organization deals with is the first set of information you add to the
Intelligent Sales data model. After you add an account, you add contacts your reps meet with when they
visit that account. Then you can add the accounts’ locations.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To add accounts:                                      Create on account

To add contacts:                                      Create on contact

To add a location to an account:                      Read on product fulfillment location


1. Add an account.
a. From the App Launcher, go to Accounts and click New.
b. Select Business record type and click Next.
c. Enter the account name and other relevant information.
d. Save your changes.

<!-- page:1185 -->



2. Add a contact to your account.
a. Go to the Related tab of your account page.
b. In the Contacts section, click New.
c. Enter the contact’s name and other relevant information.
d. Save your changes.
3. Add a location for your account.
This location is tied to your account in the Product Fulfillment Location object.
a. From the App Launcher, go to Locations and click New.
b. Enter a location name, location type, and other relevant information. To enter a new address, save
the location and then edit the location record to add the address. You're required to enter the
location in the Parent field of the address record.

Note To also use this account location as a consigned inventory location, select Inventory
Location.

c. Save your changes.


Set Up Your Products and Inventories

Records in the Product object define your products. Product inventories are stored in the Product Item
object. The Product Fulfillment Location object associates sales reps with the inventories they own and
accounts they’re responsible for.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To add a product:                                     Create on product

To add a standard price:                              Create on price book

To add an inventory location:                         Create on location

To define an inventory:                               Create on product item

To add serial numbers for products:                   Create on serialized product

To define a product fulfillment location:             Create on product fulfillment location


1. Add a product.
a. From the App Launcher, go to Products and click New.
b. Enter the name, product code, and description.
c. Select Active and Product Family as appropriate for the product.
d. If you expect this product to have serial numbers, then select Serialized. If not, don’t select it.

<!-- page:1186 -->




Note If a product is serialized, it can’t be deserialized as long as any inventory associated with
that product has a non-zero quantity

e. Save your record.
f. On the record page for your new product, go to the Related tab and click Add Standard Price.
g. Make sure that the price book selected is the standard price book and enter the list price.
h. Save your changes.
2. Add an inventory location.
a. From the App Launcher, go to Locations and click New.
b. Add a location name, location type, and other relevant information.
c. Select Inventory Location.
d. Save your record.
e. On the details page of your location, click Edit Visitor Address.
f. In the Visitor Address field, click New Address.
g. In the New Address window, select your location in the Parent field.
h. Enter the location’s address accurately, using the Address, City, State/Province, Zip/Postal Code, and
Country fields.

Important Be sure to enter a value for Zip/Postal Code. If this value is blank, or if the address
data isn’t accurate, your users can’t find nearby inventories to request product transfers from.

i. Save the address record.
j. Save your changes to the location.
3. Define an inventory.
a. From the App Launcher, go to Product Items and click New.
b. In the Product Name field, select the product you’re creating an inventory for.
c. In the Location field, select the location you created for the product’s inventory.
d. In the Quantity On Hand field, enter a value as follows:
- If your product is serialized, then enter 0. This number is automatically updated with each serial
number you create for this inventory.
- If your product isn’t serialized, enter the actual quantity available at that inventory.
e. Enter a unit of measure for the quantity and save your record.

**Note**
- If your product is serialized, then the unit of measure must be Each.
- Don’t add serial numbers for your products here. Use the Serialized Product object instead.
4. Add serial numbers for products that are serialized. Skip this step if you didn’t select Serialized when
you created the product record.
a. From the App Launcher, go to Serialized Products and click New.
b. Enter a serial number.
c. Select the product item associated with the inventory you want to add this serial number to.

Note Leave the Asset field blank.

d. Select the product this serial number belongs to. Make sure that the product you select here and
the product associated with the product item you selected are the same.
e. Enter an expiration date as required and save your record.
5. Define a product fulfillment location.

<!-- page:1187 -->



a. From the App Launcher, go to Product Fulfillment Locations and click New.
b. Enter a name for your product fulfillment location.
c. Select a product in the Product field.
d. Select the inventory location in the Fulfillment Location field.
e. In the Responsible User field, select the user in charge of this inventory.
f.In the Account field, select the account this user is responsible for.
If you’re creating a product fulfillment location record to represent a warehouse that doesn’t directly
supply products to accounts, leave this field blank.
g. In the Account Location field, select the location of the account that this user visits. If the fulfillment
location is a warehouse, leave this field blank.
If you’re creating a product fulfillment location record to represent a warehouse that doesn’t directly
supply products to accounts, leave this field blank.
h. Save your record.


Important It’s critical that you set up all the required product and inventory data accurately. Make
sure that your users create visits that are consistent with the records in the Product Item and
Product Fulfillment Location objects. Missing data and inconsistent records interfere with the
product availability projections and revenue risk estimations.


Set Up Visit Tasks and Action Plan Templates for Cycle Counts

Action plan templates define the sets of tasks that your sales reps perform during visits. Our system
automatically creates visit tasks for scheduled cycle count visits using the details you define in these
action plan templates.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To add a generic visit task record:                     Create on generic visit task

To add a generic visit task context record:             Create on generic visit task context

To add an assessment indicator definition record:       Create on assessment indicator definition

To add a generic visit key performance indicator        Create on generic visit key performance indicator
record:

To add a generic visit task context relation record:    Create on generic visit task context relation

To configure action plans:
Action Plans permission set

<!-- page:1188 -->




USER PERMISSIONS NEEDED


AND

Modify All Data OR Customize Application


1. Create a Generic Visit Task record.

Generic Visit Task records are used as templates for creating Visit Task records when a cycle count is
scheduled. You can use the same Generic Visit Task record for all products and all inventories in your
organization, or you can use dedicated records for each product in your organization. In either case,
only the tasks related to the products selected for a count appear on your rep’s list of tasks for that
count.

a. From the App Launcher, find and select Generic Visit Tasks.
b. Click New.
c. Enter a name for the task.
Count Products
d. Set the status to Is Defined.
e. Leave all other fields blank and save your work.
2. Create a Generic Visit Task Context record.

Generic Visit Task Context records define generic visit tasks in the context of a specific inventory.
Create individual Generic Visit Task Context records for each product in each inventory. For instance, if
your organization has heart valves at warehouses Zeta and Beta, create Generic Visit Task Context
records for heart valves at each warehouse.

a. From the App Launcher, find and select Generic Visit Task Contexts.
b. Click New.
c. Enter a name for the record. We recommend including the name of the inventory so that it’s easier
for you to identify it later.
Count Heart Valves at Warehouse Zeta
d. Set the Context field to Product Item and select a Product Item record.
e. Set the status to Is Defined.
f. Leave all the other fields blank and save your work.
3. Create an Assessment Indicator Definition record.

Assessment Indicator Definition records define the data type for the values stored in Generic Visit Key
Performance Indicator records. We’ll talk about Generic Visit Key Performance Indicators in a bit. For
now, let’s create an Assessment Indicator Definition record and configure it for the Number data type.
You can create a single record for your org and reuse it for all the Generic Visit Key Performance
Indicator records you create for cycle counts.

a. From the App Launcher, find and select Assessment Indicator Definition.
b. Click New.
c. Enter a name for the record and select Number in the Assessment Indicator Definition picklist.

<!-- page:1189 -->



d. Save your work.
4. Create a Generic Visit Key Performance Indicator record.

The expected quantities of products at inventory locations and the actual quantities counted during
cycle counts are stored in Key Performance Indicator (KPI) records. The system creates these KPI
records from the templates you define in the Generic Visit Key Performance Indicator object. A
Generic Visit Key Performance Indicator record is connected to the Generic Visit Task Context record
for which it’s storing expected and counted quantities. Create a separate Generic Visit Key
Performance Indicator record for each Generic Visit Task Context record.

a. Go to the Related tab on the Generic Visit Task Context record that you created earlier.
b. Select New next to Generic Visit Key Performance Indicator.
c. For the Visit Task Context field, select the Generic Visit Task Context record you just came from.
This field is auto-populated if you’re creating the record from the Related tab of the Generic Visit
Task Context record.
d. In the Assessment Indicator Definition field, select the Assessment Indicator Definition record you
created earlier.
e. Select a unit of measure and leave the remaining fields blank.
f. Save your work.
5. Create a Generic Visit Task Context Relation record.
A Generic Visit Task Context Relation record connects a Generic Visit Task Context record to its related
Generic Visit Task record.
a. Go to the Related tab on the Generic Visit Task Context record that you created earlier.
b. Click New next to Generic Visit Task Context Relations.
c. In the Visit Task field, select the Generic Visit Task record you created earlier.
d. In the Visit Task Context field, select the Generic Visit Task Context record you created earlier.
This field is auto-populated if you create this record from the Related tab of the Generic Visit Task
Context record.
e. Save your work.
6. Create an action plan template.
An action plan template defines the tasks that reps perform during a visit.
a. From the App Launcher, find and select Action Plan Templates.
b. Click New.
c. Enter a name and select the template owner.
d. Make sure that the option that lets users add items to action plans isn’t selected.
e. In the Action Plan Type field, select Assessment Execution.
f. In the Target Object field, select Visit.
g. Save your work.
We’re almost done. Just one more step to go!
7. Add your visit tasks to your action plan template and publish it.
a. In the Items tab of your action plan template, click New Generic Assessment Task.

Warning Only add Visit Tasks to your templates for cycle counts.

b. In the Generic Assessment Task Type field, select Generic Visit Task.
c. In the Generic Assessment Tasks field, select the Generic Visit Task record you created for the
action plan template.

<!-- page:1190 -->



d. Select the Is Required checkbox.
e. Save your choices.
f. And finally, click Publish Template on the Action Plan Template record.


Set Up Action Plan Templates for Surgical Case Visits

Action plan templates define the sets of tasks your sales reps perform during visits. Our system
automatically creates Assessment Task records for scheduled surgical case visits using the details you
define in these action plan templates. Action plan templates created for surgical case visits use flows as
visit tasks for your sales reps.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To add an action plan template:                       Create on action plan

To create flows:                                      Manage Flows

To use flows:                                         Run Flows


Before you create an action plan template for a surgical case visit, make sure you have the business flows
that your sales reps need for their assessment tasks. You can either build your own flows using the Flow
Builder, or you can use the Patient Registration and Order Authorization flows provided with Intelligent
Sales. If you create a flow, make sure that this flow accepts VisitId and AssessmentTaskId as
input.

1. Create an action plan template.
a. From the App Launcher, find and select Action Plan Templates.
b. Click New.
c. Enter a name and description.
d. Make sure that Let users add items to action plans isn’t selected.

Note We recommend not selecting Let users add items to action plans to prevent sales reps
from adding unauthorized tasks to their action plans.

e. In the Action Plan Type field, select Assessment Execution.
f. In the Target Object field, select Visit.
g. Save your work.
2. Add task flows in an action plan template and publish it.
a. In the Items tab of your action plan template, click Add Flow.

Warning Only add task flows to your template. Intelligent Sales doesn’t support assessment

<!-- page:1191 -->




task definitions.

b.    In the Task Flow picklist, select a flow to add to your template.
c.    If you want this task to be mandatory during visits, select Required.
d.    Save your changes.
e.    Add more task flows as needed.
f.   After you add all task flows for your template, click Publish Template.


Register and Authorize Patient Product Orders Faster with Flows

Salesforce provides two pre-built flows with Intelligent sales to make surgical visits easier. The Patient
Registration and Order Authorization flows are both compatible with Intelligent Sales, and helps perform
two assessment tasks that are common in surgical visits.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Patient Registration

This flow helps your reps assign products to the patients they’re used for in a visit. During visit execution,
this flow creates an account record for the patient and records information about the products used,
such as the serial number. If Person Accounts are enabled for your Salesforce org and the sales rep has
access to person accounts, the record created is always a person account record. And if not, it’s a
business account record.


Order Authorization

This flow helps your reps generate an order record when a product is consumed during a visit. It also
helps capture the visited party’s signature and consent to be billed for the order. This order record also
has additional information such as the product consumed, its quantity, serial number, order amount,
shipping address, and billing address. It also has a built-in barcode scanner that helps reps enter serial
numbers faster.


Intelligent Sales Sample Flows for Field Inventory Management

Manage your serialized inventories using the Intelligent Sales Sample Flows for Field Inventory
Managements. Capture and fulfill product requests and ensure all products are accounted for by
performing cycle counts with built-in business processes designed to optimize field inventory
management. To ensure that the flows meet your business’ unique needs, flows are customizable.

<!-- page:1192 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


With sample flows such as Trial Request Management and Loan Request Management, your customers
can take your products for a test drive and return them safely to you. If you have products you give out as
samples, then the Sample Request Management flow is for you. You even have flows designed to
facilitate the process of product retrieval and efficiently manage cycle counts. Leverage the full potential
of these flows by customizing them as per your unique business needs.

Let’s take a quick look at the sample flows and what they can do for your business.


Sample Flow                         Description

Sample Request Management           This flow captures the provider's request for a sample product, then
(Request Capture and Request        fulfills the request when the product is delivered to the provider. It
Fulfillment)                        also updates the serialized product inventory and captures the
provider's e-signature for regulatory compliance.

Trial Request Management            This flow captures the provider's request for a trial product, then
(Request Capture and Request        fulfills the request when the product is delivered to the provider. It
Fulfillment)                        links the request with a new or existing opportunity, creates an
order, and updates the serialized product inventory. The flow also
captures the provider's e-signature for regulatory compliance.

Loan Request Management             This flow captures the provider's request for a trial product, then
(Request Capture and Request        fulfills the request when the product is delivered to the provider. It
Fulfillment)                        also creates an order for the delivered product, updates the
serialized product inventory, and captures the provider's e-signature
for regulatory compliance.

Product Retrieval Management        This flow enables the retrieval of a product provided as a loan or a
(Retrieval of Trial and Loan        trial. It captures the product condition details and quantity at the
Products)                           time of retrieval and updates the serialized product inventory. It also
captures the provider's e-signature for regulatory compliance.

Mark as Lost                        The Mark as Lost cycle count flow updates the serialized product
inventory by marking a product as lost during a cycle count.

Relate to Order                     The Relate to Order cycle count flow updates the serialized product
inventory by relating a product to a new or existing order during a
cycle count. You also have the option of linking the order with an
existing visit for the selected account.


To learn more about the sample flows and get instructions for deploying them to Salesforce, see

<!-- page:1193 -->



Accelerator: Intelligent Sales Sample Flows.


Use Intelligent Sales

Intelligent Sales helps organizations that produce and sell medical devices to make their sales and
inventory management processes more efficient. Sales ops teams can use the desktop app to schedule
surgical case visits and cycle counts for their sales reps in the field. Sales reps can use the mobile app to
schedule and perform their own surgical case visits and cycle counts.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


With Intelligent Sales, you get valuable features like visit-based shortfall projections, shortfall-based
revenue-risk estimates, and location-based product transfer requests. The barcode scanner in the mobile
app helps reps handle serialized products more efficiently during visits and counts. These tools help
organizations reduce operational costs by reducing inventory write-off scenarios and projecting product
shortfalls for scheduled visits.




Note Intelligent Sales doesn’t work offline.


Introduction to the Intelligent Sales Mobile App

<!-- page:1194 -->



The Intelligent Sales mobile app provides all the power of the desktop app on the go. Schedule and
execute visits, and view important details about inventory projections, product transfers, and more—all
from your mobile phone.
Shortfall Projections
View shortfall projections for products that are part of the visits you’ve scheduled on the Intelligent
Sales home page on the desktop app. If you’re on the mobile app, these projections are on the My
Products page.
The Typical Day of a Sales Ops Person Using Intelligent Sales
As a part of sales operations, you’re typically involved in supporting your sales reps so that they can
perform at their best for your organization. You schedule visits for them based on the product orders
your organization receives. You keep a close eye on inventories and if you see that a rep doesn’t have
enough products for a visit, you arrange for a product transfer from a nearby inventory or another rep.
And as part of the regular business operations at your organization, you also schedule planned cycle
counts for your reps and their inventories.
The Typical Day of a Sales Rep Using Intelligent Sales
As a sales rep, you’re mostly on the road, moving product for your organization. Because of your highly
mobile work situation, you use Intelligent Sales on a mobile device. Your primary responsibilities are
performing surgical case visits and the occasional cycle count. If you don’t have enough products for a
visit, you request for a product transfer from someone nearby.


Introduction to the Intelligent Sales Mobile App

The Intelligent Sales mobile app provides all the power of the desktop app on the go. Schedule and
execute visits, and view important details about inventory projections, product transfers, and more—all
from your mobile phone.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


The Intelligent Sales mobile app has seven main pages where you perform your core tasks.

<!-- page:1195 -->




Home Page




The Intelligent Sales home page is where you start your day. The page displays all the important
information you need to know, such as:

<!-- page:1196 -->



- The visits you’re scheduled for
- The cycle counts you have to perform
- The products you’re running short on for your visits
- The products expiring in the near future
You can filter this information based on the time period you prefer. You can filter for the current day, or
the next 7, 14, 30, or 90 days. Navigating to an item of interest on this page is as easy as tapping its card.

<!-- page:1197 -->




My Visits




The My Visits page shows your scheduled visits. Change the filter to see the visits for today, or the visits
scheduled for the next 7, 14, 30, or 90 days. If any of these visits have shortfalls, that’s also indicated on

<!-- page:1198 -->



this page. And if you set the filter to Today, you also see a map that shows the locations you’re scheduled
to visit. You can even schedule visits on the go by tapping the + button to launch the visit creation flow.

The My Visits page is also where you begin visit execution. Here’s what you can do when you tap a visit
card:

- Get directions to the visit location.
- See information about the account you’re visiting, such as open cases and open orders.
- View and edit the products assigned to that visit. A caution sign on a product card indicates that you’re
running short on some product. But you don’t have to worry, you can raise a transfer request from
here.
-   See the tasks that you perform during the visit.
-   Start and end the visit.

<!-- page:1199 -->




My Products




The My Products page shows product information for your scheduled visits. See what sort of product
shortfall you’re projected to have, what products you’re running low on, and by how much. You can also

<!-- page:1200 -->



see what revenue is at risk from that shortfall and when the first shortfall is projected to happen. Just like
the My Visits page, you can filter this information for visits scheduled to happen for today, or the next 7,
14, 30, or 90 days.

If you have a shortfall for a product, tap that product card to view the inventory page for that product,
and, if necessary, raise a transfer request.

<!-- page:1201 -->




Request Inbox




The Request Inbox page shows the transfer requests you receive. The page is sectioned into two
parts—Waiting and Accepted. The Waiting section is where you see requests that are waiting for a

<!-- page:1202 -->



response, and the Accepted section has the requests that you accept. But if you reject a request, you
can’t access it from the mobile app anymore.


Sent Requests

<!-- page:1203 -->



The Sent Requests page shows the transfer requests you send to other people. The page is sectioned into
two parts—Accepted and Waiting. View your accepted requests in the Accepted section. View requests
that are still waiting for a response in the Waiting section.

After you receive a product from a request, this page is where you mark the request as received. You can
receive products only on the mobile app.

<!-- page:1204 -->




Cycle Counts




View the cycle counts assigned to you on the Cycle Counts page. This page is similar to the My Visits
page, with one exception: you don't see a map like you do on the My Visits page. The Cycle Counts page
is where you start and end your cycle counts. You can also schedule ad hoc cycle counts on the go from

<!-- page:1205 -->



this page by tapping the + button.


Expiring Products




The Expiring Products page is where you see all the products in your inventory that are expiring in the

<!-- page:1206 -->



near future. The Expiring Products count tells you how many product types are set to expire, and the
Expiring Quantity count tells you how many total pieces of product are set to expire. The card for each
expiring product tells you what quantity of that product is expiring, how many inventory locations are
affected, and when the first expiry is expected to happen. You can filter the products you see by today, or
the next 7, 14, 30, or 90 days.

Tapping the card for a product on this page shows you the list of inventories where pieces of that product
type are expiring. And tapping an inventory shows you the serial numbers of the expiring product pieces
at that inventory, grouped by expiry dates.


Shortfall Projections

View shortfall projections for products that are part of the visits you’ve scheduled on the Intelligent Sales
home page on the desktop app. If you’re on the mobile app, these projections are on the My Products
page.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


You can set filters to see shortfalls for today, the next 7 days, 14 days, 30 days, or 90 days.




In this component, you can see the following:

- The ratio of products that are available and projected to have shortfall.
- The number of different products that have shortfall.
- The revenue risk this shortfall poses.
- The product that has shortfall, the quantity of shortfall, the revenue risk from that product, and the
first day you have shortfall for that product.


Note You need read access on the Product Availability Projection object to see shortfall projections.


The Typical Day of a Sales Ops Person Using Intelligent Sales

As a part of sales operations, you’re typically involved in supporting your sales reps so that they can
perform at their best for your organization. You schedule visits for them based on the product orders
your organization receives. You keep a close eye on inventories and if you see that a rep doesn’t have
enough products for a visit, you arrange for a product transfer from a nearby inventory or another rep.
And as part of the regular business operations at your organization, you also schedule planned cycle
counts for your reps and their inventories.

<!-- page:1207 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


You can perform all of these tasks from the comfort of your desk using the Intelligent Sales desktop app.


Here’s How Intelligent Sales Helps You Through the Day


## Schedule Visits for Product Orders

When you receive a product order from a provider, create a surgical case visit for it and assign a sales
rep to fulfill that visit. You can schedule visits from the Intelligent Sales home page on the desktop
app.
Make Up for Shortfalls with Product Transfers
Let’s say that you notice a product shortfall for one of the visits you’ve scheduled. You can request
someone within the range of 50 miles (80.47 km) to 5000 miles (8047 km) to transfer some inventory
to make up for the shortfall.
Schedule Planned Cycle Counts for Inventories
As part of sales ops, you’re responsible for scheduling regular cycle counts for inventories. These cycle
counts help reduce discrepancies between your records and actual inventory numbers, which in turn
reduces product write-off costs and makes sure your reps have fewer surprises during their visits.


Schedule Visits for Product Orders

When you receive a product order from a provider, create a surgical case visit for it and assign a sales rep
to fulfill that visit. You can schedule visits from the Intelligent Sales home page on the desktop app.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create visits
“Create” on Visits

“Create” on Visitors

“Create” on Visited Parties

<!-- page:1208 -->




USER PERMISSIONS NEEDED


“Create” on Action Plans

“Create” on Assessment Tasks

“Read” on Accounts

“Read” on Locations

“Read” on Contacts

“Read” on Products

“Read” on Work Types

“Read” on Action Plan Templates

"View All Records" on Product Fulfilment Locations

Run Flows

Manage Users

To edit visits
“Edit” on Visits

“Edit” on Visitors

“Edit” on Visited Parties

“Edit” on Action Plans

“Edit” on Assessment Tasks

“Read” on Accounts

“Read” on Contacts

“Read” on Products

“Read” on Work Types

“Read” on Action Plan Templates

Manage Users

To add users as visitors                              Manage Users


Note Before you create a visit, make sure that a matching record exists in the Product Fulfillment

<!-- page:1209 -->




Location object. This record must have the same combination of responsible user, product, account,
account location, and inventory location as your visit.


1. On the Intelligent Sales home page, click New Visit.
2. In the Select Visit Type picklist, select the work type that your admin set up for surgical case visits and
click Next.
3. Select a visit location from Locations.
4. Select a start time and an end time.
5. Select a priority for the visit and click Next.
6. Select a primary visitor from User.
To add a secondary visitor, click Add Visitor and select the person.
7. Select an account.
8. Select the primary visited party and click Next.
To add more visited parties, click Add Person to Visit and select the person.
9. Select a product, enter the quantity you need, and click Next.
To add more products, click Add Product. Or if you don’t want any products, click the Delete icon.
10. Select an action plan template.

An action plan template determines what tasks are required for the visit.

11. Save your visit.


Note If Visit Calendar is enabled in your org and you have access to it, you can view your new visit
on your Salesforce calendar.


Make Up for Shortfalls with Product Transfers

Let’s say that you notice a product shortfall for one of the visits you’ve scheduled. You can request
someone within the range of 50 miles (80.47 km) to 5000 miles (8047 km) to transfer some inventory to
make up for the shortfall.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED


## To create Transfer Requests

“View All Records” on Product Fulfillment Locations

“View All Records” on Product Availability
Projections

<!-- page:1210 -->




USER PERMISSIONS NEEDED


“Create” on Product Transfers

“Create” on Product Requests

“Read” on Products

“Read” on Locations

“Read” on Addresses

Run Flows

Manage Users


## To edit Transfer Requests

“View All Records” on Product Fulfillment Locations

“View All Records” on Product Availability
Projections

“Edit” on Product Transfers

“Edit” on Product Requests

“Read” on Products

“Read” on Locations

“Read” on Addresses

Manage Users


Before you request a product transfer, make sure your org includes the right data. See Set Up Data for
Intelligent Sales and Set Up Your Products and Inventories. Product transfers require at least two product
fulfillment locations.

1. From a visit record, go to the Products tab.
2. Click     for the row with the shortfall, and click Request Transfer.
3. Select the location you want to request inventory from and click Next.
4. Select a transfer date, enter a quantity, and click Done.

Note When you send someone a transfer request, that person receives a Chatter post as a
notification. Chatter posts are also added when someone changes the status of a request by
accepting, rejecting, or marking the request as received.

<!-- page:1211 -->



Schedule Planned Cycle Counts for Inventories

As part of sales ops, you’re responsible for scheduling regular cycle counts for inventories. These cycle
counts help reduce discrepancies between your records and actual inventory numbers, which in turn
reduces product write-off costs and makes sure your reps have fewer surprises during their visits.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED


## To create vists for cycle counts

“Create” on Action Plans

“Create” on Visits

“Create” on Visitors

“Read” on Action Plan Templates

“Read” on Assesssment Indicator Definitions

“Read” on Locations

“Read” on Products

“Read” on Work Types

“Read” and "Create" on Generic Visit Tasks

“Read” and "Create" on Generic Visit Task Contexts

“Read” and "Create" on Generic Visit Task Context
Relations


## “Read” and "Create" on Generic Visit Key

Performance Indicators

Run Flows

Manage Users


## To edit visits for cycle counts

“Edit” on Action Plans

<!-- page:1212 -->




USER PERMISSIONS NEEDED


“Edit” on Visits

“Edit” on Visitors

“Read” on Action Plan Templates

“Read” on Assesssment Indicator Definitions

“Read” on Locations

“Read” on Products

“Read” on Work Types

"Read" and “Edit” on Generic Visit Tasks

"Read" and “Edit” on Generic Visit Task Contexts

"Read" and “Edit” on Generic Visit Task Context
Relations

"Read" and “Edit” on Generic Visit Key Performance
Indicators

Run Flows

Manage Users


Note Before you schedule a cycle count visit, make sure that a matching record exists in the Product
Fulfillment Location object. This record must have the same combination of responsible user,
product, and inventory location you plan to include for the count.


1. From the Intelligent Sales home page, click New Visit.
2. In the Select Visit Type picklist, select the work type your admin set up for cycle count visits and click
Next.
When scheduling a blind cycle count, use the work type configured for blind cycle counts. If you don’t
have one, ask your admin to create one.
3. Select a start time, an end time, and a priority for the counts.
4. Select the inventory’s sales rep as the primary visitor from User.
To add a secondary visitor to assist in the count, click Add Visitor and select the right person.
5. Select an action plan template for the count and click Next.
An action plan template determines what tasks are required for the count.
6. Select the inventory locations for your counts and click Next.
7. Select the products to be counted at the selected locations and click Next.
If the Action Plan Template Available column doesn’t have a tick mark for a product, then that product

<!-- page:1213 -->



isn’t configured for the action plan you selected.
8. After reviewing details on the screen, click Done.
And that’s it! Based on the number of locations you selected, one or more visits are now scheduled for
cycle counts.


The Typical Day of a Sales Rep Using Intelligent Sales

As a sales rep, you’re mostly on the road, moving product for your organization. Because of your highly
mobile work situation, you use Intelligent Sales on a mobile device. Your primary responsibilities are
performing surgical case visits and the occasional cycle count. If you don’t have enough products for a
visit, you request for a product transfer from someone nearby.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


Sometimes, you schedule visits for yourself if something comes up when you’re out on the job. And if
you notice something’s not right with your inventory, you schedule ad hoc cycle counts instead of waiting
for the next planned one. You can do all this from the convenience of your mobile device using
Intelligent Sales on the Salesforce mobile app.


Here’s How Intelligent Sales Helps You Through the Day


## Schedule Visits on the Go

Schedule a surgical case visit while you’re on the road from the My Visits page of the mobile app.
Request a Product Transfer on the Mobile App
When you have a shortfall for any product, you can request a sales rep within 50 miles (80.47Km) to
transfer inventory to you.
Receive Products from Transfer Requests
After a fellow rep accepts your product transfer request, you receive the inventory from them and
close the transfer request.
Perform Visits with the Mobile App
After you reach the account location, start the visit from your mobile app, complete the tasks listed in
the action plan, and end the visit.
Schedule Ad Hoc Cycle Counts
When you have a high value visit coming up, you typically want to verify that inventory’s accurate. But if
don't have the time to wait until the next planned cycle count comes around, you can always schedule
ad hoc cycle counts from the Cycle Counts page on the mobile app.
Perform Cycle Counts with the Mobile App
Complete the cycle counts assigned to you using Intelligent Sales on the Salesforce mobile app. The

<!-- page:1214 -->



Cycle Counts page shows your assigned counts. And you don’t have to worry about looking up the
latest expected numbers for your products because Intelligent Sales automatically pulls in all that data
for you.


Schedule Visits on the Go

Schedule a surgical case visit while you’re on the road from the My Visits page of the mobile app.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create visits
“Create” on Visits

“Create” on Visitors

“Create” on Visited Parties

“Create” on Action Plans

“Create” on Assessment Tasks

“Read” on Accounts

“Read” on Locations

“Read” on Contacts

“Read” on Products

“Read” on Work Types

“Read” and "View All Records" on Action Plan
Templates

"View All Records" on Product Fulfilment Locations

Run Flows

Manage Users

To edit visits
“Edit” on Visits

<!-- page:1215 -->




USER PERMISSIONS NEEDED


“Edit” on Visitors

“Edit” on Visited Parties

“Edit” on Action Plans

“Edit” on Assessment Tasks

“Read” on Accounts

“Read” on Contacts

“Read” on Products

“Read” on Work Types

“Read” on Action Plan Templates

Manage Users

To add users as visitors                              Manage Users


Note Before you create a visit, make sure that a matching record exists in the Product Fulfillment
Location object. This record must have the same combination of responsible user, product, account,
account location, and inventory location as your visit.


1.    On the mobile app, tap + on the My Visits page.
2.    Select a visit location from Locations.
3.    Select a start time and an end time.
4.    For Visit Type, select the work type that your admin set up for surgical case visits.
5.    Select a priority for the visit and click Next.
6.    Select a primary visitor from User.
To add a secondary visitor, click Add Visitor and select the right person.
7.    Select an account.
8.    Select the primary visited party and click Next.
To add more visited parties, click Add Person to Visit.
9.    Select a product, enter the quantity you need, and click Next.
To add more products, click Add Product. Or if you don’t want any products, click the Delete icon.
10.    Select an action plan template and save your visit.

An action plan template determines what tasks are required for the visit.


Note If Visit Calendar is enabled in your org and you have access to it, you can view your visit on
your Salesforce calendar.

<!-- page:1216 -->



Request a Product Transfer on the Mobile App

When you have a shortfall for any product, you can request a sales rep within 50 miles (80.47Km) to
transfer inventory to you.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED


## To create Transfer Requests

“View All Records” on Product Fulfillment Locations

“View All Records” on Product Availability Projections

“Create” on Product Transfers

“Create” on Product Requests

“Read” on Products

“Read” on Locations

“Read” on Addresses

Run Flows

Manage Users


## To edit Transfer Requests

“View All Records” on Product Fulfillment Locations

“View All Records” on Product Availability Projections

“Edit” on Product Transfers

“Edit” on Product Requests

“Read” on Products

“Read” on Locations

“Read” on Addresses

Manage Users


1. On the Intelligent Sales mobile app, go to My Products and tap the card for the product with a

<!-- page:1217 -->



shortfall.
2.    Tap the options icon next to an event card and tap Request Transfer.
3.    On the next page, filter available locations by location type and tap the Request Transfer button for
the location to send a request.
4.    Select a transfer date, enter the quantity you need, add comments you have, and click Done.
5.    Tap Place Request when you’re done.


Receive Products from Transfer Requests

After a fellow rep accepts your product transfer request, you receive the inventory from them and close
the transfer request.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED


## To mark Transfer Requests as Received

“Edit” on Product Transfers

“Edit” on Product Requests

“Edit” on Product Items

“Edit” on Serialized Products

“Read” on Products

Run Flows

Manage Users


The status of the transfer request must be Accepted before you can mark it as received.

1. On the Intelligent Sales mobile app, go to Sent Requests.
2. Tap the options icon for the request you want to close and tap Mark as Received.
3. On the next page, enter the quantity received, and add or scan the barcodes of the products received.
You can scan barcodes by tapping the barcode scanner icon next to serial numbers section header.

Note The quantity received must match the number of serial numbers.

4. Tap Done.

<!-- page:1218 -->



Perform Visits with the Mobile App

After you reach the account location, start the visit from your mobile app, complete the tasks listed in the
action plan, and end the visit.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To start a visit                                      Handled through VisitAccess and
VisitorAccess Apex triggers


## To execute a visit task

- “Read”, “Edit”, and “View All Records” on
Assessment Tasks
-   Run Flows
-   Other necessary permissions based on the
configured task flows


To use Patient Registration
- Create on Account
- Read on Visits
- Read on Serialized Product
- Read on Products
- Run Flows

To use Order Authorization
- Create on Order
- Edit on Serialized Products
- Edit on Product Items
- Read on Products
- Read on Addresses
- Read on Visits
- Run Flows


## To end a visit

- Handled through VisitAccess and
VisitorAccess Apex triggers
- “Read” and “View All Records” on Assessment
Tasks

<!-- page:1219 -->




Note Only the primary visitor can initiate a visit task. For this reason, it is recommended that only
primary visitors start and end a visit.


1. Go to the My Visit page on the Intelligent Sales mobile app.
2. Tap the visit to start.
3. Tap Start Visit.
You can see the time elapsed for this visit on your screen, in the HH:MM format.
4. To progress through the visit, tap a visit task.
Visit tasks are flows configured by your admin. You must complete all tasks marked as required before
you can end the visit.

Note If you’re using the order authorization flow, you must add a signature from the visited party
before you can complete the order.

5. Once all the required tasks are completed, tap End Visit.


Schedule Ad Hoc Cycle Counts

When you have a high value visit coming up, you typically want to verify that inventory’s accurate. But if
don't have the time to wait until the next planned cycle count comes around, you can always schedule
ad hoc cycle counts from the Cycle Counts page on the mobile app.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create visits for cycle counts
- “Create” on Visits
- “Create” on Visitors
- “Create” on Action Plans
- “Read” on Locations
- “Read” on Products
- “Read” on Work Types
- “Read” on Action Plan Templates
- “Read” and “Create" on Generic Visit Tasks
- “Read” and “Create" on Generic Visit Task
Contexts
-   “Read” and “Create" on Generic Visit Task
Context Relations
-   “Read” and “Create" on Generic Visit Key
Performance Indicators

<!-- page:1220 -->




USER PERMISSIONS NEEDED


- “Read” on Assessment Indicator Definitions
- Run Flows
- Manage Users

To edit visits for cycle counts
- “Edit” on Visits
- “Edit” on Visitors
- “Edit” on Action Plans
- “Read” on Locations
- “Read” on Products
- “Read” on Work Types
- “Read” on Action Plan Templates
- “Read” and “Edit" on Generic Visit Tasks
- “Read” and “Edit" on Generic Visit Task Contexts
- “Read” and “Edit" on Generic Visit Task Context
Relations
-   “Read” and “Edit" on Generic Visit Key
Performance Indicators
-   “Read” on Assessment Indicator Definitions
-   Manage Users




**Note**

- Before you schedule a cycle count visit, make sure that a matching record exists in the Product
Fulfillment Location object. This record must have the same combination of responsible user,
product, and inventory location as your count.
-   Make sure that your org has at least one work type configured for cycle counts. Work types are
automatically selected when you schedule a cycle count from your mobile device. If your org has
multiple work types for cycle counts, then a work type that’s configured for blind cycle counts is
selected.



1. On the mobile app, tap + on the Cycle Counts page.
2. Select an action plan template for the count and tap Next.
An action plan template determines what tasks are required for the count.
3. Select a location and tap Next.
4. Select the products to count at that location and tap Done.
A new visit is created for your ad hoc cycle count. The date and time is automatically set to when you
created the count from your mobile device.

<!-- page:1221 -->



Perform Cycle Counts with the Mobile App

Complete the cycle counts assigned to you using Intelligent Sales on the Salesforce mobile app. The
Cycle Counts page shows your assigned counts. And you don’t have to worry about looking up the latest
expected numbers for your products because Intelligent Sales automatically pulls in all that data for you.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To start a visit                                      Handled through VisitAccess and
VisitorAccess Apex triggers


## To execute a visit task

- “Read”, “Edit”, and “View All Records” on
Generic Visit Tasks, Generic Visit Task Contexts,
Generic Visit Task Context Relations, Generic
Visit Key Performance Indicators
-   Run Flows
-   Other necessary permissions based on the
custom visit actions flows configured by the
admin



## To end a visit

- Handled through VisitAccess and
VisitorAccess Apex triggers
- “Read” and “View All Records” on Generic Visit
Tasks



Note Only the primary visitor can initiate a visit task. So we recommend that only primary visitors
start and end a visit.


If you’re counting a serialized inventory, simply scan the barcodes of your products and Intelligent Sales
counts the serial numbers for you. On the other hand, if you’re counting products without serial
numbers, you still need to manually count the numbers and enter them into the mobile app.

1. Go to the Cycle Counts page on the Salesforce mobile app.
2. Tap the cycle count you want to start.
3. Tap Start Visit.
You can see the time elapsed for this count on your screen in the HH:MM format.
4. Tap the visit task that tells you to count your inventory.

<!-- page:1222 -->



5. On the Cycle Count Products screen, enter the quantity you counted for each product (for products
without serial numbers) or tap the Barcode Scanner icon (for products with serial numbers).

If your count only has products without serial numbers, you can skip to step 9.

6. Use the barcode scanner to scan your products.

Tip Make sure to keep your mobile device steady and have only one barcode in the scanner’s
focus area. If you have too many codes in the focus area, the scanner doesn’t recognize them.

7. After you’re done scanning barcodes, tap Done to see the list of serial numbers you scanned.
You can also add serial numbers manually, scan more serial numbers, or remove serial numbers on
this screen.
8. When you’re sure that you have the required serial numbers for the product you counted, tap Save.

Warning Make sure that you’ve recorded all the serial numbers for the product before saving. You
can’t make changes to this list after you save it. If you need to make changes, you have to start
from scratch.

9. After you’ve recorded the quantities for every product, tap Complete Count and select Complete.
If your admin has configured any custom flows for visit actions, such as marking lost inventory or
transferring products, tap the Actions icon to launch that flow. If there aren’t any compatible flows
configured in your org, the Actions icon doesn’t work.
10. After all required tasks are complete, tap End Visit.
11. Enter any comments you have and select Complete Visit to close the count.
And that’s it, you’re done! You can find the numbers for the expected quantities and the counted
quantities in the Key Performance Indicator records associated with the cycle count visit record.

<!-- page:1223 -->





Leverage the power of Agentforce in AFLS. Use the Pharmacy Benefits Reverification agent
to accelerate the benefits reverification process by efficiently updating patients' personal, drug,
pharmacy, and healthcare provider details. Use the Site Selection Assistance Agent to accelerate the site
selection process by quickly searching for sites and investigators and sending feasibility assessments.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses



## Agentforce for Pharmacy Benefits Reverification

Patient services programs reps can leverage the power of Agentforce to accelerate the benefits
reverification process by efficiently updating patients' personal, drug, pharmacy, and healthcare
provider details.
Agentforce for Site Management
Study managers can use the Agentforce capabilities to search sites and investigators for running
feasibility studies to conduct clinical trials. By using Agentforce, they can also summarize the sites and
investigators information in the search results, add the appropriate sites to a specific research study,
and send feasibility questionnaire to those sites and investigators. Agentforce helps study managers
perform the site selection operations without having to update multiple objects and navigate through
multiple pages.

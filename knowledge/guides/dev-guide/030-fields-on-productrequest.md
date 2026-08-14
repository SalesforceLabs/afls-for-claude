<!-- guide:dev-guide section:fields-on-productrequest pages:1474-1474 -->
# Fields on ProductRequest

AFLS Overview                                                                                           Fields on ProductRequest




## Fields on ProductRequest

AFLS fields extend the standard ProductRequest object for sample order information, including destination user and
urgency level.



## Fields

Field                                Details
DestinationLocationUserId Type
Reference
Properties
Filter, Group, Nillable, Sort
Description
The primary user of the destination location associated with the product request.
This field is a relationship field.
Relationship Name
DestinationLocationUser
Refers To
User

UrgencyLevel                         Type
Picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the level of urgency associated with the product request.




## Fields on ProductRequestLineItem

AFLS fields extend the Product Request Line Item object to represent information about sample order details.



## Fields

Field                                Details
ExceptionType                        Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of exception while placing a product request.

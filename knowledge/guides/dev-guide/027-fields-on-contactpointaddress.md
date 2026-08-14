<!-- guide:dev-guide section:fields-on-contactpointaddress pages:1467-1469 -->
# Fields on ContactPointAddress

AFLS Overview                                                                                          Fields on ContactPointAddress



Field                                 Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The individual’s marital status.
Possible values are:
- Divorced
- Married
- Separated
- Single
- Widowed




## Fields on ContactPointAddress

AFLS fields extend the standard Contact Point Address object to represent a contact’s billing or shipping address associated
with an individual or account. This object is available in API version 65.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Fields

Field                                 Details
BrickName                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the geography brick associated with the contact point address record.

Description                           Type
textarea
Properties
Create, Nillable, Update
Description
The description of the contact point address record.

FullAddress                           Type
string

<!-- page:1468 -->

AFLS Overview                                                                            Fields on ContactPointAddress



Field                    Details


## Properties

Filter, Group, Nillable, Sort
Description
The concatenated address of the contact point address.
This field is a calculated field.

GeoGroup1Code            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The first geography group code associated with the contact point address.

GeoGroup2Code            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The second geography group code associated with the contact point address.

IsActive                 Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a contact’s address is active for the account (true) or not (false).
The default value is false.

IsStateDstrLicenseExempt Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the contact point address is exempt from the requirement for a State
Distributor License (SDL).
The default value is false.

IsTerrAssignmentExcluded Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1469 -->

AFLS Overview                                                                                Fields on ContactPointAddress



Field                       Details


## Description

Indicates whether a contact’s address is excluded from territory alignment (true) or not (false).
The default value is false.

IsValidated                 Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a contact’s address is validated (true) or not (false).
The default value is false.

RelatedContactPointAddressId Type
reference
Properties
Create, Filter, Group, Nillable, Sort
Description
The source of this contact point address record.
This field is a relationship field.
Relationship Name
RelatedContactPointAddress
Refers To
ContactPointAddress

SourceSystemIdentifier      Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The ID of the record in the external system.

SourceSystemName            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the external system that generated the record.

WebSiteUrl                  Type
url

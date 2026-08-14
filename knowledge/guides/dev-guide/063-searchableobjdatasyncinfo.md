<!-- guide:dev-guide section:searchableobjdatasyncinfo pages:1928-1929 -->
# SearchableObjDataSyncInfo

AFLS Overview                                                                                         SearchableObjDataSyncInfo



Field                                Details


## Description

Required. Specifies the rules to be evaluated and the boolean operation (AND/OR) for
combining multiple rules.




## SearchableObjDataSyncInfo

Represents information about the data synchronization for a search object, such as frequency of synchronization, status, and the date
and time of the last synchronization. This object is available in API version 58.0 and later.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Special Access Rules

Automotive and Criteria-Based Search and Filter must be enabled.



## Fields

Field                                Details
Description                          Type
textarea
Properties
Filter, Group, Nillable, Sort
Description
The description of a searchable object data sync information record. Maximum length allowed
is 255 characters.

DeveloperName                        Type
string
Properties
Filter, Group, Sort
Description
The developer name of the record.

FullName                             Type
string

<!-- page:1929 -->

AFLS Overview                                                                               SearchableObjDataSyncInfo



Field                   Details


## Properties

Create, Group, Nillable
Description
The full name of the associated metadata object in Metadata API. Query this field only if the
query result contains no more than one record. Otherwise, an error is returned. If more than
one record exists, use multiple queries to retrieve the records. This limit protects performance.

IsDataSyncActive        Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the data synchronization operation for the search object is active (true)
or not (false). This value does not indicate the status of a Data Processing Engine (DPE)
definition, but the system job that executes that DPE definition.
The default value is false.

LastDataSyncRunDate     Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date and time at which the data synchronization job ran. This field does not indicate
the date and time when the Data Processing Engine (DPE) last ran, but rather when the
system job that executes the DPE definition last ran.

MasterLabel             Type
string
Properties
Filter, Group, Sort
Description
Master label for SearchableObjDataSyncInfo. This internal label doesn’t get translated.

Metadata                Type
complexvalue
Properties
Create, Nillable, Update
Description
Metadata that defines search criteria configurations. Query this field only if the query result
contains no more than one record. Otherwise, an error is returned. If more than one record
exists, use multiple queries to retrieve the records. This limit protects performance.

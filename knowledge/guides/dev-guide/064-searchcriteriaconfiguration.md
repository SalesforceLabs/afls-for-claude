<!-- guide:dev-guide section:searchcriteriaconfiguration pages:1930-1934 -->
# SearchCriteriaConfiguration

AFLS Overview                                                                                              SearchCriteriaConfiguration




## Field                                  Details

ScheduleFrequencyInHours Type
int
Properties
Filter, Group, Nillable, Sort
Description
The frequency at which the data synchronization job is run to refresh data in the searchable
object.

SearchableObject                       Type
picklist
Properties
Filter, Group, Restricted picklist, Sort
Description
The object that's used for criteria-based search and filter.
Possible values are:
- VehicleSearchableField—This value is applicable for Automotive Cloud.




## SearchCriteriaConfiguration

Represents the configuration details of searchable field sets such as the group of fields used as the basis for search, aggregation, sort,
and result display. This object is available in API version 58.0 and later.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Special Access Rules

Automotive and Criteria-Based Search and Filter must be enabled.



## Fields

Field                                  Details
ActionList                             Type
textarea
Properties
Nillable

<!-- page:1931 -->

AFLS Overview                                                                                SearchCriteriaConfiguration



Field                    Details


## Description

The list of actions that can be launched for a search result.
Available in API version 59.0 and later.

AdditionalSearchCriteria Type
string
Properties
Nillable
Description
The additional configuration attributes used in criteria-based search.
Available in API version 63.0 and later.

AggrCriteriaFieldsetId   Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The set of fields in the searchable object that can be used as aggregation criteria.
This field is a relationship field.
Relationship Name
AggrCriteriaFieldset
Relationship Type
Lookup
Refers To
FieldSet

ConfigurationType        Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Specifies the type of search criteira configuration. Available in API version 63.0 and later.
Possible values are:
- CLINICAL_TRAIL_SEARCH
- DEFAULT_SEARCH

Description              Type
textarea
Properties
Filter, Group, Nillable, Sort

<!-- page:1932 -->

AFLS Overview                                                                                  SearchCriteriaConfiguration



Field                   Details


## Description

The description of a search criteria configuration record. Maximum length allowed is 255
characters.

DeveloperName           Type
string
Properties
Filter, Group, Sort
Description
The developer name of the record.

DistanceCriteria        Type
textarea
Properties
Nillable
Description
A JSON string that stores the distance configuration attributes used in criteria-based search.

FilterType              Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Specifies the type of filter criteria to use for criteria-based search and filter.
Possible values are:
- GROUPING_AND_AGGREGATION
- MULTIPLE_FIELDS

FullName                Type
string
Properties
Create, Group, Nillable
Description
The full name of the associated metadata object in Metadata API. Query this field only if the
query result contains no more than one record. Otherwise, an error is returned. If more than
one record exists, use multiple queries to retrieve the records. This limit protects performance.

IsActive                Type
boolean
Properties
Defaulted on create, Filter, Group, Sort

<!-- page:1933 -->

AFLS Overview                                                                               SearchCriteriaConfiguration



Field                   Details


## Description

Indicates whether the search criteria configuration is active (true) or not (false).
The default value is false.

IsSingleFieldSort       Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the search results are sorted based on a single field (true) or not (false).
Available in API version 63.0 and later.
The default value is false.

MasterLabel             Type
string
Properties
Filter, Group, Sort
Description
Master label for SearchCriteriaConfiguration. This internal label doesn’t get translated.

Metadata                Type
complexvalue
Properties
Create, Nillable, Update
Description
Metadata that defines search criteria configurations. Query this field only if the query result
contains no more than one record. Otherwise, an error is returned. If more than one record
exists, use multiple queries to retrieve the records. This limit protects performance.

ResultDisplayFormat     Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Specifies the display format of search results.
Possible values are:
- CARD
- LIST

ResultFieldsetId        Type
reference

<!-- page:1934 -->

AFLS Overview                                                                                SearchCriteriaConfiguration



Field                      Details


## Properties

Filter, Group, Nillable, Sort
Description
The set of fields in the searchable object that can be used as search result columns.
This field is a relationship field.
Relationship Name
ResultFieldset
Relationship Type
Lookup
Refers To
FieldSet

ResultFlexCard             Type
string
Properties
Filter, Group, Nillable, Sort
Description
The name of the OmniStudio FlexCard used to display search results as cards.

SearchCriteriaFieldsetId Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The set of fields in the searchable object that can be used for querying data.
This field is a relationship field.
Relationship Name
SearchCriteriaFieldset
Relationship Type
Lookup
Refers To
FieldSet

SearchableObjDataSyncInfoId Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The object that stores data sync information about the searchable object, such as whether
the data sync job is active or not, and when the last data sync job was run.
This field is a relationship field.

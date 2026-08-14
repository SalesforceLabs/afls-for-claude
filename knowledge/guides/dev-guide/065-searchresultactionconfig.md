<!-- guide:dev-guide section:searchresultactionconfig pages:1935-1937 -->
# SearchResultActionConfig

AFLS Overview                                                                                                 SearchResultActionConfig



Field                                  Details


## Relationship Name

SearchableObjDataSyncInfo
Relationship Type
Lookup
Refers To
SearchableObjDataSyncInfo

SearchableObject                       Type
picklist
Properties
Filter, Group, Restricted picklist, Sort
Description
The object that can be used for criteria-based search and filter.
Possible values are:
- VehicleSearchableField—This value is applicable for Automotive Cloud.

SortingCriteriaFieldsetId Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The set of fields in the searchable object that can be used as sort criteria for search results.
This field is a relationship field.
Relationship Name
SortingCriteriaFieldset
Relationship Type
Lookup
Refers To
FieldSet




## SearchResultActionConfig

Represents a collection of fields to set up the actions that a user can perform on results returned by criteria-based search. This object is
available in API version 59.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

<!-- page:1936 -->

AFLS Overview                                                                                              SearchResultActionConfig




## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Special Access Rules

To access this object, Criteria-Based Search and Filter must be enabled in your org.



## Fields

Field                                 Details
ActionReference                       Type
picklist
Properties
Filter, Group, Restricted picklist, Sort
Description
The action that a user can launch for a search result. Specify the ID of an instance that
corresponds to your action type.

ActionScope                           Type
picklist
Properties
Filter, Group, Restricted picklist, Sort
Description
Specifies the scope of the action that the user can launch.
Possible values are:
- Global—Select to apply the action to all record types in the search result.
- Inline—Select to restrict the action to a single record.

ActionType                            Type
picklist
Properties
Filter, Group, Restricted picklist, Sort
Description
Specifies the type of action that a user can launch.
Possible values are:
- FlowDefinition
- LightningWebComponent
- OmniScript—Available in API version 60.0 and later.

AgentConfirmationMessage Type
textarea

<!-- page:1937 -->

AFLS Overview                                                                                 SearchResultActionConfig



Field                   Details


## Properties

Filter, Group, Nillable, Sort
Description
The confirmation message displayed to the agent. The character limit is 255.

Description             Type
textarea
Properties
Filter, Group, Nillable, Sort
Description
The description of the search result action configuration.

DeveloperName           Type
string
Properties
Filter, Group, Sort
Description
The developer name for the search result action configuration.

IsAiAction              Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the current action uses generative AI (true) or not (false). The default
value is false.

Language                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
The language of the search result action configuration.

MasterLabel             Type
string
Properties
Filter, Group, Sort
Description
Label for the search result action configuration. In the UI, this field is Name.

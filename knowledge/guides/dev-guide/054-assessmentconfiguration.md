<!-- guide:dev-guide section:assessmentconfiguration pages:1886-1888 -->
# AssessmentConfiguration

AFLS Overview                                                                                                 AssessmentConfiguration



## CareRequestConfiguration

Represents the details for a record type such as service request, drug request, or admission request. One or more record types can
be associated with a care request.
CareSystemFieldMapping
Represents a mapping from fields in external source systems to Salesforce target entities and attributes
TimelineObjectDefinition
Stores timeline configurations. This object is available in API version 55.0 and later.
Customer Engagement Tooling API Objects
These Tooling API objects are available for Customer Engagement for AFLS.
SearchableObjDataSyncInfo
Represents information about the data synchronization for a search object, such as frequency of synchronization, status, and the
date and time of the last synchronization. This object is available in API version 58.0 and later.
SearchCriteriaConfiguration
Represents the configuration details of searchable field sets such as the group of fields used as the basis for search, aggregation,
sort, and result display. This object is available in API version 58.0 and later.
SearchResultActionConfig
Represents a collection of fields to set up the actions that a user can perform on results returned by criteria-based search. This object
is available in API version 59.0 and later.


SEE ALSO:
Tooling API Developer Guide: Introducing Tooling API



## AssessmentConfiguration

Represents a configuration for Assessment component. An AssessmentConfiguration entry indicates configuration for user flows such
as sending out emails or reminder actions on assessments initiated by the patient. This object is available in API version 58.0 and later.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Fields

Field                                  Details
Configuration                          Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update

<!-- page:1887 -->

AFLS Overview                                                                                  AssessmentConfiguration



Field                   Details


## Description

The configuration name that identifies the action.
Possible values are:
- Send

DeveloperName           Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The unique name of the object in the API. This name can contain only underscores and
alphanumeric characters, and must be unique in your org. It must begin with a letter, not
include spaces, not end with an underscore, and not contain two consecutive underscores.
In managed packages, this field prevents naming conflicts on package installations. With
this field, a developer can change the object’s name in a managed package and the changes
are reflected in a subscriber’s organization. Label is Record Type Name. This field is
automatically generated, but you can supply your own value if you create the record using
the API.

Language                Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The language of the AssessmentConfiguration

ManageableState         Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Indicates the manageable state of the specified component that is contained in a package.
Possible values are:
- beta—Managed-Beta
- deleted—Managed-Proposed-Deleted
- deprecated—Managed-Proposed-Deprecated
- deprecatedEditable—SecondGen-Installed-Deprecated
- installed—Managed-Installed
- installedEditable—SecondGen-Installed-Editable
- released—Managed-Released
- unmanaged—Unmanaged

<!-- page:1888 -->

AFLS Overview                                                                                 AssessmentConfiguration




## Field                   Details

MasterLabel             Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Label that identifies the AssessmentConfiguration throughout the Salesforce user interface.

NamespacePrefix         Type
string
Properties
Filter, Group, Nillable, Sort
Description
The namespace prefix that is associated with this object. Each Developer Edition org that
creates a managed package has a unique namespace prefix. Limit: 15 characters. You can
refer to a component in a managed package by using the
namespacePrefix__componentName notation. The namespace prefix can have one of the
following values. In Developer Edition orgs, NamespacePrefix is set to the namespace prefix
of the org for all objects that support it, unless an object is in an installed managed package.
In that case, the object has the namespace prefix of the installed managed package. This
field’s value is the namespace prefix of the Developer Edition org of the package developer.
In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are
part of an installed managed package. All other objects have no namespace prefix.

ResolutionId            Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The flow definition that is used to perform the action
This field is a relationship field.
Relationship Name
Resolution
Relationship Type
Lookup
Refers To
FlowDefinition

Type                    Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update

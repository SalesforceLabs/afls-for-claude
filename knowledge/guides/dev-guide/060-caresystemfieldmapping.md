<!-- guide:dev-guide section:caresystemfieldmapping pages:1906-1909 -->
# CareSystemFieldMapping

AFLS Overview                                                                                            CareSystemFieldMapping




## Field                                 Details

- In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that
are part of an installed managed package. All other objects have no namespace prefix.




## CareSystemFieldMapping

Represents a mapping from fields in external source systems to Salesforce target entities and attributes

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Fields

Field                                 Details
DeveloperName                         Type
string
Properties
Filter, Group, Sort
Description
The unique name of the object in the API. This name can contain only underscores and
alphanumeric characters, and must be unique in your org. It must begin with a letter, not
include spaces, not end with an underscore, and not contain two consecutive underscores.
In managed packages, this field prevents naming conflicts on package installations. With
this field, a developer can change the object’s name in a managed package and the changes
are reflected in a subscriber’s organization. Label is Record Type Name. This field is
automatically generated, but you can supply your own value if you create the record using
the API.

Note: When creating large sets of data, always specify a unique DeveloperName for
each record. If no DeveloperName is specified, performance may slow as a
DeveloperName is generated for each record.

ExternalIdField                       Type
string
Properties
Filter, Group, Nillable, Sort

<!-- page:1907 -->

AFLS Overview                                                                                 CareSystemFieldMapping



Field                   Details


## Description

The ID of the field in the external system.

FullName                Type
string
Properties
Create, Group, Nillable
Description
The full name of the associated CareSystemFieldMapping type in Metadata API. The full
name can include a namespace prefix.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

IsActive                Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the mapping is active.
The default value is false.

Language                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
The language of CareSystemFieldMapping.
Possible values are:
- da—Danish
- de—German
- en_US—English
- es—Spanish
- es_MX—Spanish (Mexico)
- fi—Finnish
- fr—French
- it—Italian
- ja—Japanese
- ko—Korean
- nl_NL—Dutch

<!-- page:1908 -->

AFLS Overview                                                                                 CareSystemFieldMapping



Field                   Details
- no—Norwegian
- pt_BR—Portuguese (Brazil)
- ru—Russian
- sv—Swedish
- th—Thai
- zh_CN—Chinese (Simplified)
- zh_TW—Chinese (Traditional)

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

MasterLabel             Type
string
Properties
Filter, Group, Sort
Description
Label that identifies the CareSystemFieldMapping throughout the Salesforce user interface.

Metadata                Type
complexvalue
Properties
Create, Nillable, Update
Description
The CareSystemFieldMapping’s metadata.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

<!-- page:1909 -->

AFLS Overview                                                                                 CareSystemFieldMapping




## Field                   Details

NamespacePrefix         Type
string
Properties
Filter, Group, Nillable, Sort
Description
The namespace prefix that is associated with this object. Each Developer Edition org that
creates a managed package has a unique namespace prefix. Limit: 15 characters. You can
refer to a component in a managed package by using the
namespacePrefix__componentName notation.
The namespace prefix can have one of the following values.
- In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for
all objects that support it, unless an object is in an installed managed package. In that
case, the object has the namespace prefix of the installed managed package. This field’s
value is the namespace prefix of the Developer Edition org of the package developer.
- In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that
are part of an installed managed package. All other objects have no namespace prefix.

Role                    Type
picklist
Properties
Defaulted on create, Filter, Group, Restricted picklist, Sort
Description
The role that the entity represents. Picklist values RemoteMonitoringDevice and
RemoteMonitoringPatient are available from API version 49.0 and later.
Possible values are:
- NotApplicable: This role is used when targetObject is set to CareProgram or Product,
which means that there is no applicable role.
- Patient: When the role field is set to Patient, the Enrollment API uses the value of
externalIdField as the patient ID. This role can be used when targetObject is set to Account.
- RemoteMonitoringDevice: Indicates which externalIdField on the Asset object
maps to the Device field in the CareObservation object. This role can be used when
targetObject is set to Asset.
- RemoteMonitoringPatient: Indicates which externalIdField on the Account
object maps to the ObservedSubject field in the Care Observation object. This role is
used when targetObject is set to Account.
- ServiceProvider: The Enrollment API uses the value of externalIdField as the
provider ID. This role is used when targetObject is set to Account.
The default value is NotApplicable.

SourceSystem            Type
string

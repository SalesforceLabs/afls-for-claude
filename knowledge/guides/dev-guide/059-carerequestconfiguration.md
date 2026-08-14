<!-- guide:dev-guide section:carerequestconfiguration pages:1901-1905 -->
# CareRequestConfiguration

AFLS Overview                                                                                             CareRequestConfiguration




## Field                                Details

The default value is HealthcareProvider.

MasterLabel                          Type
string
Properties
Filter, Group, Sort
Description
Label that identifies the CareProviderSearchConfig throughout the Salesforce user interface.

Metadata                             Type
complexvalue
Properties
Create, Nillable, Update
Description
The CareProviderSearchConfig’s metadata.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

SourceField                          Type
string
Properties
Filter, Group, Nillable, Sort
Description
The API name of the field that is copied to the target object.

TargetField                          Type
string
Properties
Filter, Group, Nillable, Sort
Description
The API name of the field in the target object where data copied from SourceField is pasted.




## CareRequestConfiguration

Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be
associated with a care request.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.

<!-- page:1902 -->

AFLS Overview                                                                                CareRequestConfiguration




## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Fields

Field                    Details
CareRequestRecordType    Type
string
Properties
Filter, Group, Nillable, Sort
Description
The record type for the care request.

CareRequestRecords       Type
multipicklist
Properties
Filter, Nillable
Description
The list of available objects used to configure the care request. The possible values are:
Possible values are:
- CareDiagnosis
- CareRequestDrug
- CareRequestExtension
- CareRequestItem

CareRequestType          Type
picklist
Properties
Filter, Group, Nillable, Sort
Description
Type of care request. For example, an appeal, a service request, or an admission.
Possible values are:
- Admission
- Appeal
- Complaint
- Concurrent Review
- Drug Request

<!-- page:1903 -->

AFLS Overview                                                                                CareRequestConfiguration



Field                   Details
- Grievance
- Referral
- Service Request

DeveloperName           Type
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

FullName                Type
string
Properties
Create, Group, Nillable
Description
The full name of the associated CareRequestConfiguration type in Metadata API. The full
name can include a namespace prefix.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

IsActive                Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this configuration is active.
The default value is false.

IsDefaultRecordType     Type
boolean

<!-- page:1904 -->

AFLS Overview                                                                                CareRequestConfiguration



Field                   Details


## Properties

Defaulted on create, Filter, Group, Sort
Description
Indicates whether this is the default record type.
The default value is false.

Language                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
The language of the CareRequestConfiguration.
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

<!-- page:1905 -->

AFLS Overview                                                                                CareRequestConfiguration



Field                   Details
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
Label that identifies the CareRequestConfiguration throughout the Salesforce user interface.

Metadata                Type
complexvalue
Properties
Create, Nillable, Update
Description
The CareRequestConfiguration’s metadata.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

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

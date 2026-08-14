<!-- guide:dev-guide section:carelimittype pages:1892-1895 -->
# CareLimitType

AFLS Overview                                                                                                                 CareLimitType



Field                                   Details


## Description

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

UriPath                                 Type
textarea
Properties
Nillable
Description
External endpoint where Salesforce can access the verification service data.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareBenefitVerifySettingsChangeEvent (API version 60.0)
Change events are available for the object.



## CareLimitType

Defines the characteristics of limits on benefit provision. This object is available in API version 53.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query

<!-- page:1893 -->

AFLS Overview                                                                                              CareLimitType




## Fields

Field                   Details
DeveloperName           Type
string
Properties
Filter, Group, Sort
Description
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
The full name of the associated CareLimitType type in Metadata API. The full name can
include a namespace prefix.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

Language                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
The language of the CareLimitType.
Possible values are:
- da—Danish
- de—German
- en_US—English
- es—Spanish

<!-- page:1894 -->

AFLS Overview                                                                                        CareLimitType




## Field                   Details

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

LimitType               Type
string
Properties
Filter, Group, Nillable, Sort
Description
Source of limit on benefit provision, such as a co-insurance requirement.

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

<!-- page:1895 -->

AFLS Overview                                                                                              CareLimitType




## Field                   Details

MasterLabel             Type
string
Properties
Filter, Group, Sort
Description
Label that identifies the CareLimitType throughout the Salesforce user interface.

Metadata                Type
complexvalue
Properties
Create, Nillable, Update
Description
The CareLimitType’s metadata.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

MetricType              Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Specifies the quantity used for calculating the benefit limit, such as number of visits, amount
spent, or percentage of allowed expenditure.
Possible values are:
- Amount
- Money
- Percentage
- Text

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

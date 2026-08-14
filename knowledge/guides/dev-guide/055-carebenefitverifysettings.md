<!-- guide:dev-guide section:carebenefitverifysettings pages:1889-1891 -->
# CareBenefitVerifySettings

AFLS Overview                                                                                                    CareBenefitVerifySettings



Field                                   Details


## Description

The feature-specific value for this assessment configuration.
Possible values are:
- DiscoveryFramework—Discovery Framework




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AssessmentConfigurationChangeEvent (API version 60.0)
Change events are available for the object.



## CareBenefitVerifySettings

Configuration settings for benefit verification requests. This object is available in API version 53.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Fields

Field                                   Details
DeveloperName                           Type
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

<!-- page:1890 -->

AFLS Overview                                                                                  CareBenefitVerifySettings




## Field                   Details

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
The full name of the associated CareBenefitVerifySettings type in Metadata API. The full name
can include a namespace prefix.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

Language                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
The language of the CareBenefitVerifySettings.
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

<!-- page:1891 -->

AFLS Overview                                                                                  CareBenefitVerifySettings




## Field                   Details

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
Label that identifies the CareBenefitVerifySettings throughout the Salesforce user interface.

Metadata                Type
complexvalue
Properties
Create, Nillable, Update
Description
The CareBenefitVerifySettings’s metadata.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

NamespacePrefix         Type
string
Properties
Filter, Group, Nillable, Sort

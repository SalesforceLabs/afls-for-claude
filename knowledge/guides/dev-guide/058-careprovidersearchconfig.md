<!-- guide:dev-guide section:careprovidersearchconfig pages:1898-1900 -->
# CareProviderSearchConfig

AFLS Overview                                                                                                   CareProviderSearchConfig



Field                                  Details
- no—Norwegian
- pt_BR—Portuguese (Brazil)
- ru—Russian
- sv—Swedish
- th—Thai
- zh_CN—Chinese (Simplified)
- zh_TW—Chinese (Traditional)

MasterLabel                            Type
string
Properties
Filter, Group, Sort
Description
Label for the affiliation. In the UI, this field is Care Provider Affiliation Role Configuration.

Metadata                               Type
complexvalue
Properties
Create, Nillable, Update
Description
The CareProviderAfflRoleConfig’s metadata.
.Query this field only if the query result contains no more than one record. Otherwise, an
error is returned. If more than one record exists, use multiple queries to retrieve the records.
This limit protects performance.

ProviderRole                           Type
string
Properties
Filter, Group, Nillable, Sort
Description
Required.
The role of the healthcare provider in relation to the affiliate.




## CareProviderSearchConfig

Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made
available in the search object (target). This object is available in API version 48.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.

<!-- page:1899 -->

AFLS Overview                                                                                 CareProviderSearchConfig




## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Fields

Field                    Details
DeveloperName            Type
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

FullName                 Type
string
Properties
Create, Group, Nillable
Description
The full name of the associated CareProviderSearchConfig type in Metadata API. The full
name can include a namespace prefix.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

IsActive                 Type
boolean
Properties
Defaulted on create, Filter, Group, Sort

<!-- page:1900 -->

AFLS Overview                                                                                CareProviderSearchConfig



Field                   Details


## Description

Indicates whether this configuration is active.
The default value is false.

Language                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
The language of the CareProviderSearchConfig.
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

MappedObject            Type
picklist
Properties
Defaulted on create, Filter, Group, Restricted picklist, Sort
Description
Specifies the mapped objects where searches for providers are run.
Possible values are:
- HealthcarePractitionerFacility
- HealthcareProvider

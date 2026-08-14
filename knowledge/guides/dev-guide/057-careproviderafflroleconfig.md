<!-- guide:dev-guide section:careproviderafflroleconfig pages:1896-1897 -->
# CareProviderAfflRoleConfig

AFLS Overview                                                                                                  CareProviderAfflRoleConfig




## Field                                   Details

- In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for
all objects that support it, unless an object is in an installed managed package. In that
case, the object has the namespace prefix of the installed managed package. This field’s
value is the namespace prefix of the Developer Edition org of the package developer.
- In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that
are part of an installed managed package. All other objects have no namespace prefix.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareLimitTypeChangeEvent (API version 60.0)
Change events are available for the object.



## CareProviderAfflRoleConfig

Represents information about the affiliations of the healthcare provider. For example, this object represents an affiliation between a
healthcare provider and a hospital. This object is available in API version 59.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query



## Fields

Field                                   Details
AffiliationType                         Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Required.
Specifies the affiliation of the configuration. This field is unique within your organization.
Possible values are:
- HospitalAffiliation

<!-- page:1897 -->

AFLS Overview                                                                                CareProviderAfflRoleConfig




## Field                   Details

DeveloperName           Type
string
Properties
Filter, Group, Sort
Description
Required. The unique name of the object in the API. This name can contain only underscores
and alphanumeric characters, and must be unique in your org. It must begin with a letter,
not include spaces, not end with an underscore, and not contain two consecutive underscores.
In managed packages, this field prevents naming conflicts on package installations. With
this field, a developer can change the object’s name in a managed package and the changes
are reflected in a subscriber’s organization. Label is Record Type Name.

FullName                Type
string
Properties
Create, Group, Nillable
Description
The full name of the associated CareProviderAfflRoleConfig type in Metadata API. The full
name can include a namespace prefix.
Query this field only if the query result contains no more than one record. Otherwise, an error
is returned. If more than one record exists, use multiple queries to retrieve the records. This
limit protects performance.

Language                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
The language of the Care Provider Affiliation Role Configuration.
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

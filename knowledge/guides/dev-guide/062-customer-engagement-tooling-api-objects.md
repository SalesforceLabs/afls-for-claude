<!-- guide:dev-guide section:customer-engagement-tooling-api-objects pages:1911-1927 -->
# Customer Engagement Tooling API Objects

AFLS Overview                                                                   Customer Engagement Tooling API Objects




## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query


Fields


## Field                     Details

AssignedToId              Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Required. The profile or user associated with the record.
This field is a polymorphic relationship field.
Relationship Name
AssignedTo
Relationship Type
Lookup
Refers To
Profile, User

AssignmentLevel           Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Required. Specifies the level of the assignment.
Possible values are:
- Profile
- User

DeveloperName             Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The unique name of the object in the API. This name can contain only underscores and
alphanumeric characters, and must be unique in your org. It must begin with a letter, not
include spaces, not end with an underscore, and not contain two consecutive underscores.

<!-- page:1912 -->

AFLS Overview                                                              Customer Engagement Tooling API Objects




## Field                   Details

In managed packages, this field prevents naming conflicts on package installations. With
this field, a developer can change the object’s name in a managed package and the changes
are reflected in a subscriber’s organization. Label is Record Type Name. This field is
automatically generated, but you can supply your own value if you create the record using
the API.


## Note: When creating large sets of data, always specify a unique DeveloperName

for each record. If no DeveloperName is specified, performance may slow while
Salesforce generates one for each record.

Language                Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The language of the LifeSciConfigAssignment.

LifeSciConfigRecordId   Type
reference
Properties
Create, Filter, Group, Sort
Description
Required. The configuration record associated with the assignment.
This field is a relationship field.
Relationship Name
LifeSciConfigRecord
Refers To
LifeSciConfigRecord

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

<!-- page:1913 -->

AFLS Overview                                                                                Customer Engagement Tooling API Objects




## Field                                  Details

- released—Managed-Released
- unmanaged—Unmanaged

MasterLabel                            Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The label for the configuration assignment. In the UI, this field is Label.

NamespacePrefix                        Type
string
Properties
Filter, Group, Nillable, Sort
Description
The namespace prefix associated with this object. Each Developer Edition organization that
creates a managed package has a unique namespace prefix. The prefix is limited to a
maximum of 15 characters. You can refer to a component in a managed package by using
the namespacePrefix__componentName notation.




## LifeSciConfigCategory

Represents the category that Life Sciences configuration records are organized into. This object is available in API version 65.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query


Fields


## Field                                  Details

Category                               Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update

<!-- page:1914 -->

AFLS Overview                                                          Customer Engagement Tooling API Objects



Field                   Details


## Description

Required. The category used to organize the Life Sciences configuration records.
Possible values are:
- AccountProviderVisitRecordTypeMapping
- AccountSearchSettings
- ActivityHistoryAdministration
- ActivityHistoryRelatedLabel
- ActivityPlanConfiguration
- ActivityPlanSettings
- AddressSettings
- AffiliationReverseRoleMapping
- AffiliationSettings
- ApplicationSettings
- BestTimeSettings
- BulkUpdateRestrictedEntity
- BusinessHoursHolidayMapping
- CalendarEvent
- CallCustomDiscussionRecordType
- CallDiscussionRecordType
- CustomAction
- CustomerMergeSettings
- DEASettings
- DTVComponentConfig
- DTVObjectConfig
- DbSchema
- ExternalSearchPreferences
- ExternalSearchUserSettings
- FieldSetMapping
- InventoryManagementSettings
- KAM
- KAMSettings
- LogSettings
- NavigationIcons
- OptAdministration
- PlannerAdministration
- ProductAdminSettings
- ProfileBasedAppSettings
- ProviderSummarization

<!-- page:1915 -->

AFLS Overview                                                         Customer Engagement Tooling API Objects



Field                   Details
- QuickAction
- ReportsAndDashboardsSync
- SearchBeforeCreate
- SprintSettings
- StateDistributorLicenseSettings
- StateLicenseNumberSettings
- SyncProcessorConfiguration
- SyncTransactionAdminView
- SyncTransactionConfig
- SyncTransactionFieldBehaviour
- TerritoryManagement
- TimeOffTerritoryRule
- TimeOffTerritorySettings
- TimeOffTerritorySlots
- TimeOffTerritoryWorkingDaySettings
- TimelineActivitySetting
- UISchema
- VideoCallPhoneNumber
- VideoCallSettings
- WorkingDaysConfig

CategoryLabel           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The custom label for the category.

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

<!-- page:1916 -->

AFLS Overview                                                              Customer Engagement Tooling API Objects



Field                   Details


## Note: When creating large sets of data, always specify a unique DeveloperName

for each record. If no DeveloperName is specified, performance may slow while
Salesforce generates one for each record.

Language                Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The language of the LifeSciConfigCategory.

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
Create, Filter, Group, Sort, Update
Description
The label for the configuration category. In the UI, this field is Label.

NamespacePrefix         Type
string
Properties
Filter, Group, Nillable, Sort
Description
The namespace prefix associated with this object. Each Developer Edition organization that
creates a managed package has a unique namespace prefix. The prefix is limited to a

<!-- page:1917 -->

AFLS Overview                                                                                Customer Engagement Tooling API Objects




## Field                                  Details

maximum of 15 characters. You can refer to a component in a managed package by using
the namespacePrefix__componentName notation.




## LifeSciConfigFieldValue

Represents a field value for a Life Sciences configuration record. This object is a child of LifeSciConfigRecord.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query


Fields


## Field                                  Details

DataType                               Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Required. The data type of the field.
Possible values are:
- BOOLEAN
- DATE
- DATETIME
- FIELD
- INTEGER
- LONGTEXT
- MULTIPICKLIST
- NUMBER
- OBJECT
- PHONE
- PICKLIST
- RECORDREFERENCE
- TEXT

<!-- page:1918 -->

AFLS Overview                                                         Customer Engagement Tooling API Objects



Field                   Details
- URL

DateTimeValue           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time value for the field.

DateValue               Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date value for the field.

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


## Note: When creating large sets of data, always specify a unique DeveloperName

for each record. If no DeveloperName is specified, performance may slow while
Salesforce generates one for each record.

FieldName               Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Required. The name of the field.

FieldValue              Type
picklist

<!-- page:1919 -->

AFLS Overview                                                               Customer Engagement Tooling API Objects



Field                   Details


## Properties

Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The field reference value for the field.

HasBooleanValue         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the Boolean value of the field is true or false.
The default value is false.

IntegerValue            Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The integer value for the field.

Language                Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The language of the LifeSciConfigFieldValue.

LifeSciConfigRecordId   Type
reference
Properties
Create, Filter, Group, Sort
Description
Required. The configuration record associated with the field value.
This field is a relationship field.
Relationship Name
LifeSciConfigRecord
Refers To
LifeSciConfigRecord

LongTextValue           Type
textarea

<!-- page:1920 -->

AFLS Overview                                                              Customer Engagement Tooling API Objects



Field                   Details


## Properties

Create, Nillable, Update
Description
The long text value for the field.

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
Create, Filter, Group, Sort, Update
Description
The label for the configuration category. In the UI, this field is Label.

NamespacePrefix         Type
string
Properties
Filter, Group, Nillable, Sort
Description
The namespace prefix associated with this object. Each Developer Edition organization that
creates a managed package has a unique namespace prefix. The prefix is limited to a
maximum of 15 characters. You can refer to a component in a managed package by using
the namespacePrefix__componentName notation.

NumberValue             Type
double

<!-- page:1921 -->

AFLS Overview                                                               Customer Engagement Tooling API Objects



Field                   Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The number value for the field.

ObjectValue             Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The object reference value for the field.

PhoneValue              Type
phone
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The phone value for the field.

PicklistValue           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The picklist value for the field.

TextValue               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The text value for the field.

UrlValue                Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The URL value for the field.

<!-- page:1922 -->

AFLS Overview                                                                           Customer Engagement Tooling API Objects




## LifeSciConfigRecord

Represents a configuration record for Life Sciences. This object is a child of LifeScienceConfigCategory.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query


Fields


## Field                                 Details

DeveloperName                         Type
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


## Note: When creating large sets of data, always specify a unique DeveloperName

for each record. If no DeveloperName is specified, performance may slow while
Salesforce generates one for each record.

IsActive                              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the configuration is active (true) or not (false).
The default value is false.

IsOrgLevel                            Type
boolean

<!-- page:1923 -->

AFLS Overview                                                              Customer Engagement Tooling API Objects



Field                   Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the configuration applies to every user in the org (true) or not (false).
The default value is false.

Language                Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The language of the LifeSciConfigRecord.

LifeSciConfigCategoryId Type
reference
Properties
Create, Filter, Group, Sort
Description
Required. The category associated with the configuration.
This field is a relationship field.
Relationship Name
LifeSciConfigCategory
Relationship Type
Lookup
Refers To
LifeSciConfigCategory

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

<!-- page:1924 -->

AFLS Overview                                                             Customer Engagement Tooling API Objects




## Field                   Details

- released—Managed-Released
- unmanaged—Unmanaged

MasterLabel             Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The label for the configuration assignment. In the UI, this field is Label.

NamespacePrefix         Type
string
Properties
Filter, Group, Nillable, Sort
Description
The namespace prefix associated with this object. Each Developer Edition organization that
creates a managed package has a unique namespace prefix. The prefix is limited to a
maximum of 15 characters. You can refer to a component in a managed package by using
the namespacePrefix__componentName notation.

ParentConfigRecordId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The configuration’s parent record.
This field is a relationship field.
Relationship Name
ParentConfigRecord
Relationship Type
Lookup
Refers To
LifeSciConfigRecord

Type                    Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of the configuration. Type defines a relationship between related or similar
configurations.

<!-- page:1925 -->

AFLS Overview                                                                           Customer Engagement Tooling API Objects




## ProviderSampleLimitTemplate

Contains definition and rules of sample limits templates.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported SOAP API Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Supported REST API Methods

DELETE, GET, HEAD, PATCH, POST, Query


Fields

Field                                 Details
DeveloperName

DiscrepancyAlertType                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update
Description
Specify whether a rule violation in the template is flagged as an error or a warning.
Possible values are:
- Error
- Warning
The default value is Error.

IsActive                              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this template is active or not.
The default value is false.

IsAdvanced                            Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates the type of custom template. Defines whether or not the template is advanced.

<!-- page:1926 -->

AFLS Overview                                                            Customer Engagement Tooling API Objects




## Field                   Details

The default value is false.

IsCloned                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the template is a cloned generic template or not. Cloned generic templates
and advanced templates not flagged as IsLawBased are flagged as True.
The default value is false.

IsLawBased              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether an advanced template is a country regulation or not. (If the template is
law-based, the DiscrepancyAlertType setting is Error.)
The default value is false.

ManageableState         Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Indicates the manageable state of the specified component that is contained in a package.
Possible values are:
- beta
- deleted
- deprecated
- deprecatedEditable
- installed
- installedEditable
- released
- unmanaged

MasterLabel             Type
string
Properties
Create, Filter, Group, Sort, Update

<!-- page:1927 -->

AFLS Overview                                                             Customer Engagement Tooling API Objects



Field                   Details


## Description

Label for this provider sample limit template value. This display value is the internal label
that doesn't get translated.

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
- In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the
org for all objects that support it, unless an object is in an installed managed package.
In that case, the object has the namespace prefix of the installed managed package. This
field’s value is the namespace prefix of the Developer Edition org of the package
developer.
- In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects
that are part of an installed managed package. All other objects have no namespace
prefix.

PriorityNumber          Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Priority order of the cloned generic template to be applied to a product.

RuleCondition           Type
textarea
Properties
Create, Update
Description
Required. The rules that establish the limits for this template.

RuleExpression          Type
textarea
Properties
Create, Update

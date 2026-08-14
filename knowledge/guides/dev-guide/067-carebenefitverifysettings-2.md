<!-- guide:dev-guide section:carebenefitverifysettings-2 pages:1939-1940 -->
# CareBenefitVerifySettings

AFLS Overview                                                                                                CareBenefitVerifySettings



## SearchResultActionConfig

Represents a collection of fields to set up the actions that a user can perform on results returned by criteria-based search.
TimelineObjectDefinition
Represents the container that stores the details of a timeline configuration. You can use this resource with Salesforce objects to see
their records' related events in a linear time-sorted view.
UIObjectRelationConfig
Represents the admin-created configuration of the object relation UI component.
Customer Engagement Metadata Type
Metadata API enables you to access some types and feature settings for Customer Engagement for AFLS that you can
customize in the user interface.


SEE ALSO:
Metadata API Developer Guide: Understanding Metadata API



## CareBenefitVerifySettings

Represents the configuration settings for benefit verification requests.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

CareBenefitVerifySettings components have the suffix .careBenefitVerifySettings and are stored in the
careBenefitVerifySettings folder.



## Version

CareBenefitVerifySettings components are available in API version 52.0 and later.



## Fields

Field Name                                   Description
codeSetType                                  Field Type
string
Description
Specifies the code set type for the benefits verification service type codes.

defaultNpi                                   Field Type
string

<!-- page:1940 -->

AFLS Overview                                                                                CareBenefitVerifySettings



Field Name                   Description


## Description

Default National Provider Identifier to be used in the benefits verification request.

generalPlanServiceTypeCode   Field Type
string
Description
Service type code for the plan benefits as a whole.

isDefault                    Field Type
boolean
Description
Indicates whether this record is the default verification service (true) or not
(false).

masterLabel                  Field Type
string
Description
Required.
Name of the benefits verification service.

organizationName             Field Type
string
Description
Specifies the organization name for the benefits verification request service.

serviceApexClass             Field Type
string
Description
Apex class used to access the benefits verification service.

serviceNamedCredential       Field Type
string
Description
Credential used to access the benefits verification service.

serviceTypeSourceSystem      Field Type
string
Description
Service type code for the plan benefits as a whole.

uriPath                      Field Type
string

<!-- guide:dev-guide section:carelimittype-2 pages:1941-1942 -->
# CareLimitType

AFLS Overview                                                                                                   CareLimitType



Field Name                                    Description


## Description

Link to payer endpoint.




## Declarative Metadata Sample Definition

This is an example of a CareBenefitVerifySettings component.
<?xml version="1.0" encoding="UTF-8"?>
<CareBenefitVerifySettings xmlns="http://soap.sforce.com/2006/04/metadata">
<generalPlanServiceTypeCode>abc</generalPlanServiceTypeCode>
<isDefault>true</isDefault>
<masterLabel>test</masterLabel>
<serviceApexClass>TestApexClass</serviceApexClass>
<serviceNamedCredential>test</serviceNamedCredential>
<uriPath>efgh</uriPath>
<serviceTypeSourceSystem>Lorem ipsum dolor</serviceTypeSourceSystem>
<codeSetType>Code set</codeSetType>
<defaultNpi>Npi info</defaultNpi>
<organizationName>Organization name</organizationName>
</CareBenefitVerifySettings>

This is an example package.xml that references the previous definition.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>CareBenefitVerifySettings</name>
</types>
<types>
<members>*</members>
<name>ApexClass</name>
</types>
<types>
<members>*</members>
<name>NamedCredential</name>
</types>
<version>52.0</version>
</Package>




## Wildcard Support in the Manifest File

This metadata type supports the wildcard character * (asterisk) in the package.xml manifest file. For information about using the
manifest file, see Deploying and Retrieving Metadata with the Zip File.



## CareLimitType

Defines the characteristics of limits on benefit provision.

<!-- page:1942 -->

AFLS Overview                                                                                                       CareLimitType



Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

CareLimitType components have the suffix .careLimitType and are stored in the careLimitTypes folder.



## Version

CareLimitType components are available in API version 52.0 and later.



## Fields

Field Name                                 Description
isProtected                                Field Type
boolean
Description
An auto-generated value that doesn’t impact the behavior of the metadata type.

limitType                                  Field Type
string
Description
Source of limit on benefit provision, such as a co-insurance requirement.

masterLabel                                Field Type
string
Description
Required.
Name of the limit type.


## metricType                                 Field Type

CareLimitTypeMetricType (enumeration of type string)
Description
Metric to be used for calculating and displaying the benefit limit, such as number of
visits, amount spent, or percentage of allowed expenditure.
Valid values are:
- Amount
- Money
- Percentage

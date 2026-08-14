<!-- guide:dev-guide section:careprovidersearchconfig-2 pages:1948-1948 -->
# CareProviderSearchConfig

AFLS Overview                                                                                            CareProviderSearchConfig




## CareProviderSearchConfig

Represents the information about the fields that appear in care provider search results. This type extends the Metadata metadata type
and inherits its fullName field.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## File Suffix and Directory Location

CareProviderSearchConfig components have the suffix .careProviderSearchConfig and are stored in the
careProviderSearchConfigs folder.



## Version

CareProviderSearchConfig components are available in API version 48.0 and later.



## Fields

Field Name                             Field Type            Description
isActive                               boolean               Indicates whether this configuration is active (true) or not (false).

isProtected                            boolean               An auto-generated value that doesn’t currently impact the behavior of
the metadata type.

mappedObject                           ProviderSearch        Required. Indicates mapped objects.
ObjectMapping         Possible values are;
(enumeration of
type string)          • HealthCarePractitionerFacility
- HealthCareProvider

masterLabel                            string                Required. Name of the care provider.

sourceField                            string                API name of the field that is copied to the target object.

targetField                            string                API name of the field to copy the data to.




## Declarative Metadata Sample Definition

The following is an example of a CareProviderSearchConfig component.



## <?xml version="1.0" encoding="UTF-8"?>

<CareProviderSearchConfig xmlns="http://soap.sforce.com/2006/04/metadata">
<sourceField>Test1__c</sourceField>
<targetField>Test1__c</targetField>
<mappedObject>HealthcareProvider</mappedObject>
<isProtected>false</isProtected>
<isActive>true</isActive>

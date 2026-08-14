<!-- guide:dev-guide section:carerequestconfiguration-2 pages:1943-1945 -->
# CareRequestConfiguration

AFLS Overview                                                                                           CareRequestConfiguration



Field Name                                 Description
- Text




## Declarative Metadata Sample Definition

This is an example of a CareLimitType component.
<?xml version="1.0" encoding="UTF-8"?>
<CareLimitType xmlns="http://soap.sforce.com/2006/04/metadata">
<limitType>test</limitType>
<masterLabel>test</masterLabel>
<metricType>Money</metricType>
<isProtected>false</isProtected>
</CareLimitType>

This is an example package.xml that references the previous definition.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>CareLimitType</name>
</types>
<version>52.0</version>
</Package>




## Wildcard Support in the Manifest File

This metadata type supports the wildcard character * (asterisk) in the package.xml manifest file. For information about using the
manifest file, see Deploying and Retrieving Metadata with the Zip File.



## CareRequestConfiguration

Represents the details for a record type such as service request, drug request, or admission request. One or more record types can be
associated with a care request.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

CareRequestConfiguration components have the suffix .careRequestConfiguration and are stored in the
careRequestConfigurations folder.

<!-- page:1944 -->

AFLS Overview                                                                                            CareRequestConfiguration




## Version

CareRequestConfiguration components are available in API version 44.0 and later.



## Fields

Field Name                                Description
careRequestRecordType                     Field Type
string
Description
Required.
The record type for the care request.

careRequestRecords                        Field Type
CareRequestRecords[]
Description
The list of objects you can select to configure the care request.

careRequestType                           Field Type
string
Description
Required.
The type of care request. For example, an appeal, a service request, or an admission.

isActive                                  Field Type
boolean
Description
Indicates whether the care request is active (true) or not (false).

Field Type
boolean
Description
Indicates whether the record type of the care request is default (true) or not (false).

Field Type
string
Description
Required.
A user-friendly name for CareRequestConfiguration, which is defined when the
CareRequestConfiguration is created.

<!-- page:1945 -->

AFLS Overview                                                                                  CareRequestConfiguration




## CareRequestRecords

Displays a list of objects to customize the care request.


## Field Name                                   Description

careRequestRecord                            Field Type
string
Description
Required.
The object selected to configure the care request.




## Declarative Metadata Sample Definition

This is an example of a CareRequestConfiguration component.
<?xml version="1.0" encoding="UTF-8"?>
<CareRequestConfiguration xmlns="http://soap.sforce.com/2006/04/metadata">
<careRequestRecordType>DrugRequest</careRequestRecordType>
<careRequestRecords>
<careRequestRecord>CareRequestItem</careRequestRecord>
</careRequestRecords>
<careRequestRecords>
<careRequestRecord>CareRequestDrug</careRequestRecord>
</careRequestRecords>
<careRequestType>Drug Request</careRequestType>
<isActive>false</isActive>
<isDefaultRecordType>false</isDefaultRecordType>
<masterLabel>DrugRequest</masterLabel>
</CareRequestConfiguration>

This is an example package.xml that references the previous definition.



## <?xml version="1.0" encoding="UTF-8"?>

<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>Case.DrugRequest</members>
<name>BusinessProcess</name>
</types>
<types>
<members>*</members>
<name>CareRequestConfiguration</name>
</types>
<types>
<members>CareRequest.DrugRequest</members>
<members>CareRequestDrug.DrugRequest</members>
<members>CareRequestItem.DrugRequest</members>
<members>Case.DrugRequest</members>
<name>RecordType</name>
</types>

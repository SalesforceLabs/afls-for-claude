<!-- guide:dev-guide section:caresystemfieldmapping-2 pages:1946-1947 -->
# CareSystemFieldMapping

AFLS Overview                                                                                          CareSystemFieldMapping



<version>44.0</version>
</Package>




## Wildcard Support in the Manifest File

This metadata type supports the wildcard character * (asterisk) in the package.xml manifest file. For information about using the
manifest file, see Deploying and Retrieving Metadata with the Zip File.



## CareSystemFieldMapping

Represents a mapping from source system fields to Salesforce objects and fields. This type extends the Metadata metadata type and
inherits its fullName field.

[other]: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## File Suffix and Directory Location

CareSystemFieldMapping components have the suffix .careSystemFieldMapping and are stored in the
careSystemFieldMappings folder.



## Version

CareSystemFieldMapping components are available in API version 49.0 and later.



## Special Access Rules

To use this metadata type, your Salesforce org must have the Health Cloud or AFLS license and the user must have the
Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS) permission set.



## Fields

Field Name                             Field Type           Description
externalIdField                        string               The ID of the field in the external system.

isActive                               boolean              Indicates whether this field mapping is active (true) or not (false).
The default value is False.

isProtected                            boolean              An auto-generated value that doesn’t currently impact the behavior of
the metadata type.

masterLabel                            string               Required. The name of the care system field mapping.

role                                   SourceSystemFieldRole Required. The role the field represents. Valid values are:
(enumeration of       • Patient—When the role field is set to Patient, the
type string)             Enrollment API uses the value of externalIdField as the
patient ID. This role can be used when targetObject is set to
Account.

<!-- page:1947 -->

AFLS Overview                                                                                       CareSystemFieldMapping




## Field Name                           Field Type          Description

- RemoteMonitoringDevice—Indicates which
externalIdField on the Asset object maps to the Device
field in the CareObservation object. This role can be used when
targetObject is set to Asset.
- RemoteMonitoringPatient—Indicates which
externalIdField on the Account object maps to the
ObservedSubject field in the Care Observation object. This
role is used when targetObject is set to Account.
- ServiceProvider—The Enrollment API uses the value of
externalIdField as the provider ID. This role is used when
targetObject is set to Account.
- NotApplicable—This role is used when targetObject is
set to CareProgram or Product, which means that there is
no applicable role.

sourceSystem                         string              The system where the record originated.

targetObject                         string              The name of the Salesforce object to which the external system field is
mapped.




## Declarative Metadata Sample Definition

The following is an example of a CareSystemFieldMapping component.



## <?xml version="1.0" encoding="UTF-8"?>

<CareSystemFieldMapping xmlns="http://soap.sforce.com/2006/04/metadata">
<externalIdField>AccountNumber</externalIdField>
<isActive>true</isActive>
<isProtected>false</isProtected>
<masterLabel>Map1</masterLabel>
<role>Patient</role>
<sourceSystem>Epic</sourceSystem>
<targetObject>Account</targetObject>
</CareSystemFieldMapping>

The following is an example package.xml that references the previous definition.



## <?xml version="1.0" encoding="UTF-8"?>

<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>patient</members>
<name>CareSystemFieldMapping</name>
</types>
<version>49.0</version>
</Package>

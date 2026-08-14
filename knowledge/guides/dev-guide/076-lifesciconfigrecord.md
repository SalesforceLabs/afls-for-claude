<!-- guide:dev-guide section:lifesciconfigrecord pages:1958-1962 -->
# LifeSciConfigRecord

AFLS Overview                                                                                               LifeSciConfigRecord


The following is an example package.xml that references the previous definition.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>LifeSciConfigCategory</name>
</types>
<version>65.0</version>
</Package>




## LifeSciConfigRecord

Represents the configuration records used in AFLS.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

LifeSciConfigRecord components have the suffix .lifeSciConfigRecord and are stored in the lifeSciConfigRecords
folder.



## Version

LifeSciConfigRecord components are available in API version 65.0 and later.



## Fields

Field Name                                 Description
assignments                                Field Type
LifeSciConfigAssignment on page 1955
Description
Profiles or users assigned to a configuration record.


## fieldValue                                 Field Type

LifeSciConfigFieldValue on page 1956
Description
The value when it represents a field’s name.

isActive                                   Field Type
Boolean
Description
Indicates whether the configuration record is active. Supported values are true or
false.

<!-- page:1959 -->

AFLS Overview                                                                                               LifeSciConfigRecord




## Field Name                               Description

isOrgLevel                               Field Type
Boolean
Description
Indicates whether the configuration record is at the organization level. Supported
values are true or false.

isProtected                              Field Type
Boolean
Description
Indicates whether the configuration record is protected. Supported values are true
or false.

lifeSciConfigCategory                    Field Type
String
Description
Required
Category of the life science configuration.

masterLabel                              Field Type
String
Description
Required
Main label for the configuration.

parentConfigRecord                       Field Type
String
Description
Parent configuration record.

type                                     Field Type
String
Description
Type of configuration record.




## LifeSciConfigAssignment

The following table describes the assignment for the LifeSciConfigAssignement component.

<!-- page:1960 -->

AFLS Overview                                                                                                   LifeSciConfigRecord




## Field Name                                 Description

assignedTo                                 Field Type
String
Description
User or profile to which the configuration is assigned.


## assignmentLevel                            Field Type

LifeSciAssignmentLevel
Description
Required
Level of assignment for the configuration. Supported values are Profile or User.




## LifeSciConfigFieldValue Fields

The following table describes the fields for the LifeSciConfigFieldValue component.


## Field Name                                 Description

dataType                                   Field Type
LifeSciConfigFieldDataType
Description
Required
Data type of the field. Possible values are:
- TEXT
- LONGTEXT
- NUMBER
- BOOLEAN
- INTEGER
- DATE
- DATETIME
- PHONE
- PICKLIST
- URL
- OBJECT
- FIELD
- RECORDREFERENCE
- MULTIPICKLIST

dateTimeValue                              Field Type
DateTime

<!-- page:1961 -->

AFLS Overview                                                      LifeSciConfigRecord



Field Name              Description


## Description

Date and time value of the field.

dateValue               Field Type
Date
Description
Date value of the field.

fieldName               Field Type
String
Description
Required
The value when it represents a field’s name.

fieldValue              Field Type
String
Description
Required
Value of the field.

hasBooleanValue         Field Type
Boolean
Description
Indicates whether the value is a Boolean.

integerValue            Field Type
Int
Description
Integer value of the field.

longTextValue           Field Type
String
Description
Long text value of the field.

numberValue             Field Type
Double
Description
Number value of the field.

<!-- page:1962 -->

AFLS Overview                                                                        LifeSciConfigRecord




## Field Name                               Description

objectValue                              Field Type
String
Description
The value when it represents an object’s name.

phoneValue                               Field Type
String
Description
Phone value of the field.

picklistValue                            Field Type
String
Description
Picklist value of the field.

textValue                                Field Type
String
Description
Text value of the field.

urlValue                                 Field Type
String
Description
URL value of the field.




## Declarative Metadata Sample Definition

The following is an example of a LifeSciConfigRecord component.
<?xml version="1.0" encoding="UTF-8"?>
<LifeSciConfigRecord xmlns="http://soap.sforce.com/2006/04/metadata">
<isActive>false</isActive>
<isOrgLevel>true</isOrgLevel>
<lifeSciConfigCategory>ApplicationSettings</lifeSciConfigCategory>
<masterLabel>ApplicationSettings_OrgLevel</masterLabel>
</LifeSciConfigRecord>

The following is an example package.xml that references the LifeSciConfigRecord component.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>ApplicationSettings_OrgLevel</members>
<name>LifeSciConfigRecord</name>
</types>

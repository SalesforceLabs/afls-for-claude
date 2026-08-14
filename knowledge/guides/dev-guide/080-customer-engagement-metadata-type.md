<!-- guide:dev-guide section:customer-engagement-metadata-type pages:1972-1977 -->
# Customer Engagement Metadata Type

AFLS Overview                                                                         Customer Engagement Metadata Type



}
}</queryText>
<rowOrder>4</rowOrder>
</UIObjectRelationFieldConfigs>
<contextObject>Contact</contextObject>
<directRelationshipField>AccountId</directRelationshipField>
<isActive>true</isActive>
<masterLabel>Sample Primary Account Configuration</masterLabel>
<relatedObject>Account</relatedObject>
<relationshipType>Direct</relationshipType>
<indirectObjectRelatedField></indirectObjectRelatedField>
<indirectObjectContextField></indirectObjectContextField>
<contextObjectRecordType></contextObjectRecordType>
<indirectRelationshipObject></indirectRelationshipObject>
<relatedObjectRecordType></relatedObjectRecordType>
</UIObjectRelationConfig>

This is an example package.xml that references the previous definition.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>UIObjectRelationConfig</name>
</types>
<version>54.0</version>
</Package>




## Wildcard Support in the Manifest File

This metadata type supports the wildcard character * (asterisk) in the package.xml manifest file. For information about using the
manifest file, see Deploying and Retrieving Metadata with the Zip File.



## Customer Engagement Metadata Type

Metadata API enables you to access some types and feature settings for Customer Engagement for AFLS that you can
customize in the user interface.



## ActionableListDefinition

Represents the data source definition details associated with an actionable list.



## ActionableListDefinition

Represents the data source definition details associated with an actionable list.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.

<!-- page:1973 -->

AFLS Overview                                                                               Customer Engagement Metadata Type




## File Suffix and Directory Location

ActionableListDefinition components have the suffix .actionableListDefinition and are stored in the
actionableListDefinitions folder.



## Version

ActionableListDefinition components are available in API version 57.0 and later.


Fields


## Field Name                                  Description

actionableListDatasetColumns Field Type
ActionableListDatasetColumn[]
Description
The object that stores columns in a dataset associated with an actionable list.


## actionableListMemberStatuses Field Type

ActionableListMemberStatus[]
Description
The object that stores the status and the corresponding status icon details of an
individual actionable list member.

batchCalcJobDefinition                      Field Type
string
Description
The batch calculation job definition that's associated with the creation of an actionable
list. This field is a relationship field.

datasetName                                 Field Type
string
Description
The name of the dataset that is associated with the actionable list.

edgeMart                                    Field Type
string
Description
The edgemart dataset that's associated with the actionable list. Available in API version
58.0 and later.

isActive                                    Field Type
boolean
Description
Indicates whether the actionable list definition is active (true) or not (false).

<!-- page:1974 -->

AFLS Overview                                                              Customer Engagement Metadata Type




## Field Name              Description

The default value is false.

masterLabel             Field Type
string
Description
Required.
The master label of the actionable list definition.

objectName              Field Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort
Description
Required.
The object for which the actionable list is created.
Possible values are:
- Account
- Asset
- CareRequest
- CareRequestItem
- Case
- Claim
- ClinicalServiceRequest
- Contact
- HealthcareFacility
- InsurancePolicy
- Lead
- MemberPlan
- Opportunity
- PersonLifeEvent
The default value is LifeScience.

type                    Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The type of the actionable list that can be built using the actionable list definition.
Possible values are:

<!-- page:1975 -->

AFLS Overview                                                                                Customer Engagement Metadata Type



Field Name                                 Description
- RetailStoreList
- HealthcareProviderList




## ActionableListDatasetColumn

Represents the information about the columns in a dataset associated with an actionable list.


## Table 53: Fields

Field Name                            Description
dataDomain                            Field Type
DatasetColumnDataType (enumeration of type string)
Description
The data domain that is mapped to the data type of the dataset column.
Possible values are:
- Dates
- Dimensions
- Measures


## dataType                              Field Type

DatatableDataType (enumeration of type string)
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The data type of the dataset column in the actionable list. Available in API version 58.0 and
later.
Possible values are:
- Boolean
- Currency
- Date
- DateTime
- Email
- Location
- Number
- Percent
- Phone
- Text
- Url

<!-- page:1976 -->

AFLS Overview                                                                   Customer Engagement Metadata Type




## Field Name                 Description

displayOrder               Field Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The order in which the actionable list dataset columns are displayed. Available in API version
58.0 and later.

isDefault                  Field Type
boolean
Description
Indicates whether the dataset column is added to the actionable list by default (true) or
not (false).
The default value is false.

isGroupedByListDefObj      Field Type
boolean
Description
Indicates whether the dataset column is grouped by the object defined in the actionable
list definition (true) or not (false). Available in API version 59.0 and later.

IsTypeAheadSearchEnabled Field Type
boolean
Description
Indicates whether the type-ahead search for filters is enabled (true) or not (false).
Available in API version 60.0 and later.

objectName                 Field Type
string
Description
The name of the object that's associated with the dataset column.
Possible values are:
- Account
- Asset
- CareRequest
- CareRequestItem
- Case
- Claim
- ClinicalServiceRequest
- Contact
- HealthcareFacility

<!-- page:1977 -->

AFLS Overview                                                                              Customer Engagement Metadata Type



Field Name                            Description
- InsurancePolicy
- Lead
- MemberPlan
- Opportunity
- PersonLifeEvent

sourceColumnApiName                   Field Type
string
Description
The API name of the column in the source dataset.

sourceFieldName                       Field Type
string
Description
The name of the field in the object for which the actionable list dataset is created.




## ActionableListMemberStatus

Represents the status and the corresponding status icon details of an individual actionable list member.


## Table 54: Fields

Field Name                            Description
iconName                              Field Type
string
Description
The name of the icon that's mapped to the status.

status                                Field Type
string
Description
The status of the actionable list member.




## Declarative Metadata Sample Definition

The following is an example of a ActionableListDefinition component.



## <?xml version="1.0" encoding="UTF-8"?>

<ActionableListDefinition
xmlns="http://soap.sforce.com/2006/04/metadata">
<actionableListDatasetColumns>
<isDefault>true</isDefault>

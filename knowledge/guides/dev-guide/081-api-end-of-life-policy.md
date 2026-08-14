<!-- guide:dev-guide section:api-end-of-life-policy pages:1978-1978 -->
# API End-of-Life Policy

AFLS Overview                                                                                                 API End-of-Life Policy




## <sourceFieldName>NewColumn1</sourceFieldName>

</actionableListDatasetColumns>
<actionableListDatasetColumns>
<sourceColumnApiName>ApiName</sourceColumnApiName>
<dataDomain>Dimensions</dataDomain>
<isDefault>false</isDefault>
<sourceFieldName>NewColumn2</sourceFieldName>
<objectName>Account</objectName>
<displayOrder>1</displayOrder>
<dataType>Text</dataType>
</actionableListDatasetColumns>
<actionableListMemberStatuses>
<iconName>NewMember1</iconName>
<status>Active</status>
</actionableListMemberStatuses>
<isActive>true</isActive>
<masterLabel>NewMember2</masterLabel>
<objectName>Account</objectName>
<isProtected>true</isProtected>
<batchCalcJobDefinition>Test1</batchCalcJobDefinition>
<datasetName>AccountDef</datasetName>
</ActionableListDefinition>

The following is an example package.xml that references the previous definition.



## <?xml version="1.0" encoding="UTF-8"?>

<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>ActionableListDefinition</name>
</types>
<version>66.0</version>
</Package>




## Wildcard Support in the Manifest File

This metadata type supports the wildcard character * (asterisk) in the package.xml manifest file. For information about using the
manifest file, see Deploying and Retrieving Metadata with the Zip File.



## API End-of-Life Policy

Salesforce is committed to supporting each API version for a minimum of 3 years from the date of first release. To improve the quality
and performance of the API, versions that are over 3 years old sometimes are no longer supported.
Salesforce notifies customers who use an API version scheduled for deprecation at least 1 year before support for the version ends.

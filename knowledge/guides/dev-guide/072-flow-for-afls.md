<!-- guide:dev-guide section:flow-for-life-sciences-cloud pages:1949-1949 -->
# Flow for AFLS

AFLS Overview                                                                                           Flow for AFLS




## <masterLabel>testlabel</masterLabel>

</CareProviderSearchConfig>

The following is an example package.xml that references the previous definition.



## <?xml version="1.0" encoding="UTF-8"?>

<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>HealthcareProvider.Test1__c</members>
<name>CustomField</name>
</types>
<types>
<members>CareProviderSearchableField.Test1__c</members>
<name>CustomField</name>
</types>
<types>
<members>Test</members>
<name>CareProviderSearchConfig</name>
</types>
<version>48.0</version>
</Package>




## Flow for AFLS

The Flow for AFLS represents the metadata associated with a flow. Use Flow to create an application that takes users
through a series of pages to query and update the records in the database. You can also run logic and provide branching capability
based on user input to build dynamic applications.



## FlowActionCall

AFLS exposes additional actionType values for the FlowActionCall metadata type.


## Field Name                              Field Type           Description

actionType                              InvocableActionType Required.
(enumeration of
type string)        The action type. Additional valid values for AFLS are:
- assignCndtToResearchStudyGroup—Assign candidates,
enrolled in the clinical trials through randomization to research study
comparison groups.
- generateResearchStudyBlocks—Generate research
study randomization block records to link each block with a specific
research study comparison group by using the randomization
process.
- getContextData—Retrieves the context data that is passed as
an input to a prompt template that generates a summary of the
data.
- processCriteriaMatchingResp—Parses a GPT-generated
JSON response to evaluate each inclusion and exclusion criterion

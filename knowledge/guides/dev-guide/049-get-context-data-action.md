<!-- guide:dev-guide section:get-context-data-action pages:1876-1878 -->
# Get Context Data Action

AFLS Overview                                                                                             Get Context Data Action



Example
POST
This sample request is for the Generate Research Study Blocks action.
{
"inputs": [
{
"researchStudyRandomizationId": "1Rdxx0000004CguCAE",
"researchStudyTargetCandidateCount": 10
}
]
}

This sample response is for the Generate Research Study Blocks action.
[
{
"actionName": "generateResearchStudyBlocks",
"errors": null,
"invocationId": null,
"isSuccess": true,
"outputValues": {
"researchStudyRandomizationBlockIds": [
"1Mtxx0000004CLw",
"1Mtxx0000004CLx",
"1Mtxx0000004CLy"
]
},
"sortOrder": -1,
"version": 1
}
]


SEE ALSO:
Salesforce Help: Enable Participant Management
Salesforce Help: Enroll Participants Using Block Generation



## Get Context Data Action

Retrieves the context data that is passed as an input to a prompt template that generates a summary of the data.
This action is available in API version 62.0 and later.


Supported REST HTTP Methods
URI
/services/data/v66.0/actions/standard/getContextData
Formats
JSON, XML

<!-- page:1877 -->

AFLS Overview                                                                             Get Context Data Action



HTTP Methods
GET
Authentication
Authorization: Bearer token



## Inputs

Input                     Details
contextInputRepresentation Type
List<Apex>
Description
Required
A collection of Apex embeddedai__ContextInputRep records that contain details of
the hierarchical data of the sObjects to get the context data for.

contextDefinitionName Type
String
Description
Required
The name of the context definition to use to get the context data.




## Outputs

Output                    Details
recordApexRepresentation Type
List<Apex>
Description
A collection of Apex embeddedai__RecordApexRepresentationrecords that contain
the context data.



Example
Sample Request
{
"inputs": [
{
"contextInputRepresentation": [
{
"mappingName": "OutcomeSummaryMapping",
"ids": [
"9OCxx0000004C92GAE"

<!-- page:1878 -->

AFLS Overview                                                           Get Context Data Action



],
"objectName": "Outcome",
"nodeName": "SummaryContext"
}
],
"contextDefinitionName": "CareProgramOutcomeSummary__stdctx"
}
]
}

Sample Response
[
{
"recordApexRepresentation": [
{
"relatedRecordData": [
{
"relatedRecordData": [
{
"recordData": [
{
"value": "Percentage",
"key": "UnitOfMeasureName"
},
{
"value": "Symptom Monitoring",
"key": "IndicatorDefinitionName"
}
],
"objectType": "IndicatorAssignment"
}
],
"recordData": [
{
"value": "Reduced Symptoms",
"key": "Name"
}
],
"objectType": "Outcome"
}
],
"recordData": [
{
"value": "Drug Use Satisfaction Improvement Program",
"key": "Name"
}
],
"objectType": "CareProgram"
}
]
}
]

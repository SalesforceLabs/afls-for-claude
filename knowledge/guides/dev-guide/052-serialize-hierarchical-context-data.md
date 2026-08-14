<!-- guide:dev-guide section:serialize-hierarchical-context-data pages:1883-1884 -->
# Serialize Hierarchical Context Data

AFLS Overview                                                                        Serialize Hierarchical Context Data



]
}
}
]
}

This sample response is for the Process Criteria Matching Response action.
{
"inclusionCriteriaMatchCount": 1,
"exclusionCriteriaMatchCount": 1
}




## Serialize Hierarchical Context Data

Serializes the hierarchical context data from the Apex embeddedai__RecordApexRepresentation records that are passed
as input to a prompt template that generates a summary of the data.
This action is available in API version 62.0 and later.


Supported REST HTTP Methods
URI
/services/data/v66.0/actions/standard/serializeHierarchicalContextData
Formats
JSON, XML
HTTP Methods
GET
Authentication
Authorization: Bearer token



## Inputs

Input                               Details
recordApexRepresentation Type
Apex type
Description
Required
A collection of Apex embeddedai__RecordApexRepresentation records that contain
the details of the hierarchical data to serialize context data

<!-- page:1884 -->

AFLS Overview                                                               Serialize Hierarchical Context Data




## Outputs

Output                  Details
serializedContextData Type
String
Description
A JSON string of serialized hierarchical context data.



Example
Sample Request
{
"inputs": [
{
"recordApexRepresentation": {
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
}

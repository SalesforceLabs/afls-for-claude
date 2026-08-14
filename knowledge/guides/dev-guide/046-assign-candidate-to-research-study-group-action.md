<!-- guide:dev-guide section:assign-candidate-to-research-study-group-action pages:1871-1872 -->
# Assign Candidate to Research Study Group Action

AFLS Overview                                                                     Assign Candidate to Research Study Group Action



## Get Life Sciences Configuration Field Names and Values

Gets key-value pairs of field names and their values for Life Sciences configuration records of a given category.
Process Criteria Matching Response
Parses a GPT-generated JSON response to evaluate each inclusion and exclusion criterion for a given Research Study Candidate,
determining whether each criterion is matched or not. This action stores the GPT response in the Care Program Enrollment Evaluation
Result entity and computes the number of matched inclusion criteria and exclusion criteria, returning these counts as output.
Serialize Hierarchical Context Data
Serializes the hierarchical context data from the Apex embeddedai__RecordApexRepresentation records that are
passed as input to a prompt template that generates a summary of the data.



## Assign Candidate to Research Study Group Action

Assign candidates, enrolled in the clinical trials through randomization to research study comparison groups.
This action is available in API version 61.0 and later.



## Special Access Rules

The Assign Candidate to Research Study Group action is available in Enterprise and Unlimited Editions with AFLS and the
Participant Enrollment Add-On license. Additionally, the org must be enabled with Research Study Randomization.


Supported REST HTTP Methods
URI
/services/data/v66.0/actions/standard/assignCndtToResearchStudyGroup
Formats
JSON, XML
HTTP Methods
POST
Authentication
Authorization: Bearer token



## Inputs

Input                               Details
researchStudy                       Type
CandidateId                            string
Description
Required.
ID of the research study candidate record that’s randomly assigned to a research study comparison
group.

<!-- page:1872 -->

AFLS Overview                                                                 Assign Candidate to Research Study Group Action




## Outputs

The researchStudyComparisonGroupId parameter is shown in the response body only if one of these conditions is met.
- The DoesAsgnCandidatesToGroups field on the ResearchStdyRandomization object is set to false.
- The DoesAsgnCandidatesToGroups field is set to true and the user has access to the ResearchStdyCmprGroupCndt
object.


## Output                           Details

candidateAllocation              Type
SourceId                            string
Description
ID of the context object or process that’s used to determine the group to assign a candidate to.


## researchStudy                    Type

ComparisonGroupId                   string
Description
ID of the research study comparison group that’s assigned to a candidate.



Example
POST
This sample request is for the Assign Candidate to Research Study Group action.
{
"inputs": [
{
"researchStudyCandidateId": "7evxx00000000cjAAA"
}
]
}

This sample response is for the Assign Candidate to Research Study Group action.
[
{
"actionName": "assignCndtToResearchStudyGroup",
"errors": null,
"invocationId": null,
"isSuccess": true,
"outputValues": {
"researchStudyComparisonGroupId": "1F0xx0000004CSPCA2",
"candidateAllocationSourceId": "1LtSG0000002P8n"
},
"sortOrder": -1,
"version": 1

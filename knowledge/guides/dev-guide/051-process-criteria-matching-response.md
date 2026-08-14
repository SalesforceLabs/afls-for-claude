<!-- guide:dev-guide section:process-criteria-matching-response pages:1881-1882 -->
# Process Criteria Matching Response

AFLS Overview                                                                                  Process Criteria Matching Response



"sortOrder": -1,
"version": 1
}
]




## Process Criteria Matching Response

Parses a GPT-generated JSON response to evaluate each inclusion and exclusion criterion for a given Research Study Candidate, determining
whether each criterion is matched or not. This action stores the GPT response in the Care Program Enrollment Evaluation Result entity
and computes the number of matched inclusion criteria and exclusion criteria, returning these counts as output.
This action is available in API version 62.0 and later.



## Special Access Rules

The Assign Candidate to Research Study Group action is available in Enterprise and Unlimited Editions with AFLS and the
Participant Enrollment Add-On license. Additionally, the org must be enabled with Research Study Randomization.


Supported REST HTTP Methods
URI
/services/data/v66.0/actions/standard/processCriteriaMatchingResp
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
Required
ID of the research study candidate for which GPT response is received.

gptResponse                         Type
string
Description
Required
GPT Response of PromptTemplate Invocable action will be input to this action.

<!-- page:1882 -->

AFLS Overview                                                          Process Criteria Matching Response




## Outputs

Output                           Details
matchedInclusionCount Type
string
Description
Number of inclusion criteria matched.

matchedExclusionCount Type
string
Description
Number of exclusion criteria matched.



Example
POST
This sample request is for the Process Criteria Matching Response action.
{
"inputs": [
{
"researchStudyCandidateId": "7evxx0000000001AAA",
"gptResponse": {
"EligibilityResponse": [
{
"Id": "0bkxx0000000001AAA",
"EligibilityCriteria": "Adult SARI patients with 2019-ncov
infection confirmed by PCR",
"Result": "Unknown",
"Reason": "No information provided"
},
{
"Id": "0bkxx000000001dAAA",
"EligibilityCriteria": "Age < 78",
"Result": "Match",
"Reason": "Patient is 50 years old."
},
{
"Id": "0bkxx000000003FAAQ",
"EligibilityCriteria": "Pregnant",
"Result": "Not Match",
"Reason": "Patient is male."
},
{
"Id": "0bkxx000000004rAAA",
"EligibilityCriteria": "Allergic to Gluten",
"Result": "Match",
"Reason": "Patient has Gluten Allergy."
}

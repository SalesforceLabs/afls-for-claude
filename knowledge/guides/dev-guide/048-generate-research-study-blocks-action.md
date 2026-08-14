<!-- guide:dev-guide section:generate-research-study-blocks-action pages:1874-1875 -->
# Generate Research Study Blocks Action

AFLS Overview                                                                                Generate Research Study Blocks Action




## Output                              Details

success                             Type
Boolean
Description
Indicates if the action was successful (true) or not (false).




## Example

This sample request is for the Build Product Territory Detailed Availability action.
{
"inputs": [
{
"productTerritoryAvailabilityId": "1Kwxx0000004CxxCAE"
}
]
}


This sample input is for calling the Build Product Territory Detailed Availability action from the Apex code.



## Invocable.Action action =

Invocable.Action.createStandardAction('buildProdTerrDtlAvlAction');
action.setInvocationParameter('ProductTerritoryAvailabilityId', '1Kwxx0000004CxxCAE');
List<Invocable.Action.Result> results = action.invoke();


This sample response is for the Build Product Territory Detailed Availability action.
[
{
"outputValues": {
"success": true,
"resultText": "Product Territory Detailed Availabilities built successfully."
}
}
]




## Generate Research Study Blocks Action

Generate research study randomization block records to link each block with a specific research study comparison group by using the
randomization process.
The Generate Research Study Blocks action generates blocks during the design time to verify the randomized assignment of groups and
to test the required block multipliers.
This action is available in API version 61.0 and later.

<!-- page:1875 -->

AFLS Overview                                                                              Generate Research Study Blocks Action




## Special Access Rules

The Generate Research Study Blocks action is available in Enterprise and Unlimited Editions with AFLS and the Participant
Enrollment Add-On license. Additionally, the org must be enabled with Research Study Randomization.


Supported REST HTTP Methods
URI
/services/data/v66.0/actions/standard/generateResearchStudyBlocks
Formats
JSON, XML
HTTP Methods
POST
Authentication
Authorization: Bearer token



## Inputs

Input                             Details
researchStudy                     Type
RandomizationId                      string
Description
Required.
ID of the research study randomization record that you want to generate the blocks for.


## researchStudy        Type

TargetCandidateCount    integer
Description
Required.
Number of candidates that you want to generate the blocks for.




## Outputs

Output                            Details
researchStudy         Type
RandomizationBlockIds    string
Description
List of generated research study randomization block IDs.

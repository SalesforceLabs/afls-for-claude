<!-- guide:dev-guide section:build-product-territory-detailed-availability-action pages:1873-1873 -->
# Build Product Territory Detailed Availability Action

AFLS Overview                                                                       Build Product Territory Detailed Availability Action



}
]


SEE ALSO:
Salesforce Help: Enable Participant Management
Salesforce Help: Anonymize Participant Allocation Using Randomization



## Build Product Territory Detailed Availability Action

Build Product Territory Detailed Availability records using existing Product Territory Availability records.
This action is available in API version 65.0 and later.


Supported REST HTTP Methods
URI
/services/data/v66.0/actions/standard/buildProdTerrDtlAvlAction
Formats
JSON, XML
HTTP Methods
POST
Authentication
Authorization: Bearer token



## Inputs

Input                               Details
productTerritoryAvailabilityId Type
String
Description
Required
ID of the Product Territory Availability record for the action to execute on.




## Outputs

Output                              Details
resultText                          Type
String
Description
Message indicating the result of the action.

<!-- guide:dev-guide section:get-life-sciences-configuration-field-names-and-values pages:1879-1880 -->
# Get Life Sciences Configuration Field Names and Values

AFLS Overview                                                              Get Life Sciences Configuration Field Names and Values




## Get Life Sciences Configuration Field Names and Values

Gets key-value pairs of field names and their values for Life Sciences configuration records of a given category.
This action is available in API version 65.0 and later.


Supported REST HTTP Methods
URI
/services/data/v66.0/actions/standard/getLifeSciCnfgFieldNmAndVal
Formats
JSON, XML
HTTP Methods
POST
Authentication
Authorization: Bearer token



## Inputs

Input                               Details
userId                              Type
String
Description
Required
ID of the user for whom the configuration record is fetched.

categoryName                        Type
String
Description
Required
Name of the category whose configuration record is fetched. The category type is always
hierarchy.

fieldNamesList                      Type
List<String>
Description
Optional
The comma-delimited list of field names of the configuration record that’s fetched. If this
parameter is empty, the invocable action returns all the fields of the given category of
configuration record for the specified user.

<!-- page:1880 -->

AFLS Overview                                                                Get Life Sciences Configuration Field Names and Values




## Outputs

Output                               Details
configurationFieldOutputRepresentations Type
List<Apex>
Description
Collection of Apex RestApi.LsConfigFieldOutput records that contain key-value
pairs of field names and their values belonging to the active configuration record that was fetched.




## Example

This sample request is for the Get Life Sciences Configuration Field Names and Values action.
{
"inputs": [
{
"userId" : "005xx00000114xxYAA",
"categoryName": "ProviderSummarization",
"fieldnamesList" : ["ProviderSummaryConfiguration"]
}
]
}

This sample input is for calling the Get Life Sciences Configuration Field Names and Values action from the Apex code.



## Invocable.Action action =

Invocable.Action.createStandardAction('getLifeSciCnfgFieldNmAndVal');
action.setInvocationParameter('userId', '005xx00000114xxYAA');
action.setInvocationParameter('categoryName', 'ProviderSummarization');
List<Invocable.Action.Result> results = action.invoke();
System.debug('result = ' + results);


This sample response is for the Get Life Sciences Configuration Field Names and Values action.


[
{
"actionName": "getLifeSciCnfgFieldNmAndVal",
"errors": null,
"invocationId": null,
"isSuccess": true,
"outcome": null,
"outputValues": {
"configurationFieldOutputRepresentations": [
{
"value": "lsc4ce__providersummary",
"name": "ProviderSummaryConfiguration"
}
]
},

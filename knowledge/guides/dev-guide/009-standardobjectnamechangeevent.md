<!-- guide:dev-guide section:standardobjectnamechangeevent pages:1431-1432 -->
# StandardObjectNameChangeEvent

AFLS Overview                                                                                  StandardObjectNameChangeEvent


- Any field whose value isn’t on the record and is derived from another record or from a formula, except roll-up summary fields, which
are included. Examples are formula fields. Examples of fields with derived values include LastActivityDate and PhotoUrl.
Each change event also contains header fields. The header fields are included inside the ChangeEventHeader field. They contain
information about the event, such as whether the change was an update or delete and the name of the object, like Account.
In addition to the event payload, the event schema ID is included in the schema field. Also included is the event-specific field,
replayId, which is used for retrieving past events.



## Event Message Example

The following example is an event message in JSON format for a new account record creation.
{
"schema": "IeRuaY6cbI_HsV8Rv1Mc5g",
"payload": {
"ChangeEventHeader": {
"entityName": "Account",
"recordIds": [
"<record_ID>"
],
"changeType": "CREATE",
"changeOrigin": "com/salesforce/api/soap/51.0;client=SfdcInternalAPI/",
"transactionKey": "<transaction_key>",
"sequenceNumber": 1,
"commitTimestamp": 1612912679000,
"commitNumber": 10716283339728,
"commitUser": "<User_ID>"
},
"Name": "Acme",
"Description": "Everyone is talking about the cloud. But what does it mean?",
"OwnerId": "<Owner_ID>",
"CreatedDate": "2021-02-09T23:17:59Z",
"CreatedById": "<User_ID>",
"LastModifiedDate": "2021-02-09T23:17:59Z",
"LastModifiedById": "<User_ID>"
},
"event": {
"replayId": 6
}
}




## API Version and Schema

When you subscribe to change events, the subscription uses the latest API version and the event messages received reflect the latest
field definitions. For more information, see API Version and Event Schema in the Change Data Capture Developer Guide.



## Usage

For more information about Change Data Capture, see Change Data Capture Developer Guide.

<!-- page:1432 -->

AFLS Overview                                              StandardObjectNameChangeEvent




## Objects That Support Change Events

The following objects have associated ChangeEvent objects.
- AccountPlanParticipant
- AccountPlanProduct
- AccountPlanRelationship
- AccountPlanRelaObjAnalysis
- AccountPlanStakeholder
- AccountPlanStkhldrAction
- AccountPlanStkhldrProduct
- AcctPlanPtcpStakeholder
- ActionableList
- ActionableListFilterCriteria
- ActionPlanStatusPeriod
- AppAlert
- AppAlertTerritory
- AppAlertUserResponse
- BusinessLicenseProduct
- CareProgram
- CommSubConsentCmplSnpsht
- CommSubscription
- ContactPointAddress
- ContactPointBestContactTime
- ContactPointSocial
- GoalDefinitionProduct
- HealthcareProvider
- Inquiry
- InquiryQuestion
- InquiryQuestionAnswer
- LifeSciAcctGrpAssignment
- LifeSciEmailTemplate
- LifeSciEmailTmplFragment
- LifeSciEmailTmplRelaFrgmt
- LifeSciEmailTmplSnapshot
- LifeSciMarketableProduct
- LifeSciProductAcctRstrc
- LifeScienceEmail
- MergeRequest
- PartyPublication
- ProductGuidance
- ProductTerritoryAvailability

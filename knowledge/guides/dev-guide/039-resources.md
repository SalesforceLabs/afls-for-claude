<!-- guide:dev-guide section:resources pages:1607-1692 -->
# Resources

AFLS Overview                                                                                                                     Resources




## Resources

Use these resources of AFLS Business APIs to enhance your Salesforce implementation or integrate with other applications.



## Account Management

Use these resources to manage customer accounts.
Account Manual Alignment
Manually align an account to a territory in the Life Sciences package to create a Provider Account Territory Info record.
Account User Territory Information (POST)
Get user details, including territories and additional user information.
Advanced Provider Search
Facilitate three distinct types of account searches: Healthcare Provider (HCP), Healthcare Organization (HCO), and license-based
searches. For HCP and HCO searches, the API processes fields from the account, healthcare provider, and contact point address
entities.The license-based searches use fields from the business license entity.
Book Slot Chain (POST)
Create service appointments for a care program enrollee in advanced therapy management based on the provided appointment
slots.
Contact Encounter (POST)
Load details of contact encounters into the system.
Content Management
Use these resources to manage customer content.
Care Program Enrollments (POST)
Use this API to enroll multiple patients in a care program.
Digital Verification (POST)
Perform verification for the digital verification records within advanced therapy management.
Download Provider (POST)
Download Health Care provider data from an external system to a Salesforce org after a search is performed.
Benefit Verification
Use these resources to verify the health benefits covered by the patient's insurer. The call center agent can view the coverages in
the patient's record page.
Intelligent Document Management
Use the Intelligent Document Management resources to create or update records in Salesforce objects based on the content
document records or received document records.
Patients (GET, POST, PUT)
Retrieve the FHIR patient resource record details. Create or update a patient record rather than making multiple separate calls to the
objects in Salesforce.
Provider Search
Search for Healthcare providers and accounts based on a free-text input, either from internal Salesforce data or an external system.
This API returns account information, including healthcare providers and matching contact point addresses.
Providers
Use these resources to create practitioner or facility records, or update existing fields in provider records and insert new fields.

<!-- page:1608 -->

AFLS Overview                                                                                                                    Resources


Sample Limits Validation (POST)
Validate the samples requested during a visit against the sample limits for that account, product, and sample limit template.
Visits (POST)
Create visits for sales representatives. For example, for a medical device visit, a sales representative visits the surgeon or a hospital
location.
Work Type Lead Time (POST)
Get a list of work types and their associated lead times that are optimized across regions for a specific advanced therapy.



## Account Management

Use these resources to manage customer accounts.


Merge Customer Account (POST)
Merges a list of customer accounts. If any one account merge in the request fails, the entire operation is cancelled.
Merge Customer Account with Status (POST)
Merges a list of customer accounts and provides a status for each request. This API processes all valid requests and does not fail the
entire operation if one request is invalid.


Merge Customer Account (POST)
Merges a list of customer accounts. If any one account merge in the request fails, the entire operation is cancelled.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.
Resource
/connect/life-sciences/commercial/customers/actions/merge

Resource Example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/customers/actions/merge

Available version
65.0
HTTP methods
POST
Request body for POST
{
"customersToMerge": [
{
"winningId": "001x0000002kl8VFFV",
"winningExternalId": "001x0000004op0XHHX",
"losingId": "001x0000009gh6TDDT",
"losingExternalId": "001x0000001ij7UEEU"
},
{
"winningId": "001x0000003mn9WGGW",
"winningExternalId": "001x0000007uv3AKKA",

<!-- page:1609 -->

AFLS Overview                                                                                                                   Resources



"losingId": "001x0000006st2ZJJZ",
"losingExternalId": "001x0000005qr1YIIY"
}
],
"overrideBlankValues": true
}


Name                       Type                       Description                                              Required
customersToMerge MergeCustomersInput                  A list of customer merge requests. A maximum of Required
Representation[] on        100 requests can be included in a single call.
page 1766

override                   Boolean                    Specifies whether to override blank values in the Optional
BlankValues                                           Consolidated Account record with values from the
Merged Account record. The default value is
false.
If set to true, it looks for null values in the fields
of the winning account and fills them with non null
values from the losing account




## Response body for POST

Customer Accounts Merged Output on page 1820


Merge Customer Account with Status (POST)
Merges a list of customer accounts and provides a status for each request. This API processes all valid requests and does not fail the entire
operation if one request is invalid.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.
Resource
/connect/life-sciences/commercial/customers/actions/merge-with-status

Resource Example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/customers/actions/merge-with-status

Available version
65.0
HTTP methods
POST
Request body for POST
{
"customersToMerge": [
{
"winningId": "a3Lxx000000MbzxxAC",
"winningExternalId": "a3Lxx000000MbzxxBC",

<!-- page:1610 -->

AFLS Overview                                                                                                        Resources



"losingId": "001xx00001STZUxxTR",
"losingExternalId": "001x0000007uv3AKKA"
},
{
"winningId": "001x0000007cd4RBBR",
"winningExternalId": "001x0000008ef5SCCS",
"losingId": "001xx00001SYtgxxUI",
"losingExternalId": "001x0000001ij7UEEU"
}
],
"overrideBlankValues": true
}


Name                      Type                       Description                                              Required
customersToMerge MergeCustomersInputRepresentation[] A list of customer merge requests. A maximum of Required
on page 1766               100 requests can be included in a single call.

overrideBlankValues Boolean                          Specifies whether to override blank values in the Optional
Consolidated Account record with values from the
Merged Account record. The default value is
false.
If set to true, it looks for null values in the fields
of the winning account and fills them with non null
values from the losing account.




## Response body for POST

Merge Customer Accounts with Status Output on page 1834



## Account Manual Alignment

Manually align an account to a territory in the Life Sciences package to create a Provider Account Territory Info record.
Resource
/connect/life-sciences/commercial/customer-manual-alignment

Available version
65.0
HTTP methods
POST
Request body for POST


{
"territoryId": "territoryId",
"accountId": "accountId"
}

<!-- page:1611 -->

AFLS Overview                                                                                                                Resources



Name                       Type                       Description                                          Required
accountId                  String                     Account to be aligned to the territory.              Required

territoryId                String                     ID of the territory to which account is aligned.     Required



## Response body for POST

Account Manual Alignment Output on page 1786


Account User Territory Information (POST)
Get user details, including territories and additional user information.
Resource
/connect/life-sciences/commercial/account-user-territory-info

Available version
64.0
HTTP methods
POST
Request body for POST
JSON Example
{
"accountId":"00xxG00000n6bbxxAA",
"fieldNames":["City","IsActive","LanguageLocaleKey"]
}

Properties

Parameter             Type                  Description                                Required or          Available
Name                                                                                   Optional             Version
accountId             String                The ID of the user. Using this ID, this API Required            64.0
fetches users associated with territories
linked to this account.

fieldNames            <list>String          The additional user fields that you want Optional               64.0
to retrieve. The user ID and name is
fetched by default.



## Response body for POST

AccountUserTerritoryInfoOutputRepresentation on page 1785



## Advanced Provider Search

Facilitate three distinct types of account searches: Healthcare Provider (HCP), Healthcare Organization (HCO), and license-based searches.
For HCP and HCO searches, the API processes fields from the account, healthcare provider, and contact point address entities.The
license-based searches use fields from the business license entity.

<!-- page:1612 -->

AFLS Overview                                                                                                               Resources




## Resource

/connect/life-sciences/commercial/advanced-provider-search

Resource Example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/advanced-provider-search?externalSearch=true



Available version
65.0
HTTP methods
POST
Query parameters for POST

Parameter Name            Type                       Description                                          Required or Optional
externalSearch            Boolean                    Indicates whether to perform the search on an      Optional
external system (true) or not (false. By default,
this value is set to false and an internal search
is performed. This is a URL parameter, not part of
the input representation.


Request body for POST
{
"account": [
{
"field": "Name",
"value": "Robert"
},
{
"field": "AccountNumber",
"value": "123456"
}
],
"healthcareProvider": [
{
"field": "Specialties",
"value": "Robert"
},
{
"field": "PhoneticName",
"value": "Robrt"
}
],
"contactPointAddress": [
{
"field": "IsPrimary",
"value": "false"
},

<!-- page:1613 -->

AFLS Overview                                                                                                                   Resources



{
"field": "CountryCode",
"value": "US"
}
],
"businessLicense": [
{
"field": "ComplianceScope",
"value": "Address"
},
{
"field": "LicenseNumber",
"value": "123456"
}
]
}


Property Name              Type                        Description                                            Required or Optional
account                    List<String>                List of account fields and their corresponding search Optional
values. At least one field from either account or
healthcare provider must be populated.

businessLicense List<String>                           List of business license fields and their              Optional
corresponding search values.

contactPoint               List<String>                List of contact point address fields and their         Optional
Address                                                corresponding search values.

healthcare                 List<String>                List of healthcare provider fields and their         Optional
Provider                                               corresponding search values. At least one field from
either account or healthcare provider must be
populated.



## Response body for POST

Provider Search Output on page 1845


Book Slot Chain (POST)
Create service appointments for a care program enrollee in advanced therapy management based on the provided appointment slots.
This API takes both the published and unpublished slots as inputs. If the provided slots are published, the API calls the Salesforce Scheduler
API to book the slots.
Resource
/connect/health/advanced-therapy-management/book-slot-chain

Resource example

https://yourInstance.salesforce.com/services/data/v66.0/connect/health/advanced-therapy-management/book-slot-chain

Available version
60.0

<!-- page:1614 -->

AFLS Overview                                               Resources



HTTP methods
POST
Request body for POST
JSON example
{
"careProgramEnrolleeId":"08pxx0000004C92AAE",
"workProcedureId":"08pxx0000004C92AAE",
"slots":[
{
"schedStartTime":"2022-03-26T16:30:00.000+0000",
"schedEndTime":"2022-03-26T16:30:00.000+0000",
"workTypeId":"08pxx0000004C92AAE",
"serviceTerritoryId":"08pxx0000004C92AAE",
"serviceResourceId":"08pxx0000004C92AAE",
"contactId":"08pxx0000004C92AAE",
"appointmentType":"08pxx0000004C92AAE",
"subject":"Apheresis",
"additionalInformation":"Needs Cab Assistance",
"street":"1 Market Street",
"city":"San Francisco",
"state":"CA",
"postalCode":"94105",
"country":"USA",
"comments":"",
"status":"Scheduled"
},
{
"schedStartTime":"2022-03-26T16:30:00.000+0000",
"schedEndTime":"2022-03-26T16:30:00.000+0000",
"workTypeId":"08pxx0000004C92AAE",
"serviceTerritoryId":"08pxx0000004C92AAE",
"serviceResourceId":"08pxx0000004C92AAE",
"contactId":"08pxx0000004C92AAE",
"appointmentType":"08pxx0000004C92AAE",
"subject":"Apheresis",
"additionalInformation":"Needs Cab Assistance",
"street":"1 Market Street",
"city":"San Francisco",
"state":"CA",
"postalCode":"94105",
"country":"USA",
"comments":"",
"status":"Scheduled"
},
{
"schedStartTime":"2022-03-26T16:30:00.000+0000",
"schedEndTime":"2022-03-26T16:30:00.000+0000",
"workTypeId":"08pxx0000004C92AAE",
"serviceTerritoryId":"08pxx0000004C92AAE",
"serviceResourceId":"08pxx0000004C92AAE",
"contactId":"08pxx0000004C92AAE",
"appointmentType":"08pxx0000004C92AAE",

<!-- page:1615 -->

AFLS Overview                                                                                                                  Resources



"subject":"Apheresis",
"additionalInformation":"Needs Cab Assistance",
"street":"1 Market Street",
"city":"San Francisco",
"state":"CA",
"postalCode":"94105",
"country":"USA",
"comments":"",
"status":"Scheduled"
}
]
}

Properties

Name                  Type                  Description                                 Required or           Available
Optional              Version
careProgramEnrolleeId String                ID of the care program enrollee for whom Required                 60.0
the service appointments must be
created.

slots                 Slots []              Appointment slots to be booked.             Required              60.0

workProcedureId String                      ID of the work procedure for which the Required                   60.0
service appointments are to be created.



## Response body for POST

Book Slot Chain Output


Contact Encounter (POST)
Load details of contact encounters into the system.
Prerequisites
- This API must be used only for person account-enabled orgs.
- Ensure that you have access to the Contact Encounter fields and the Contact Encounter Participants fields in your org.
Contact Tracing Encounters and Participants
- To create a new encounter, set the referenceID field to null.
- To update an existing encounter with details of new encounter participants, pass the referenceID of the encounter in the
payload.
- A single payload can have a maximum of 5 encounters.
- A single payload can have a maximum of 50 participants per encounter.
- Encounter participants are not mandatory. If a participant is specified, the participant type is mandatory. If the participant type is set
to lead, the participant’s first name and last name are mandatory.
Resource
/services/data/vXX.X/contact-tracing

<!-- page:1616 -->

AFLS Overview                                                                                                           Resources



Available version
49.0 and later
Authentication
Authorization: Bearer token

Note: The Lightning Platform REST API supports OAuth 2.0 (an open protocol to allow secure API authorization). See Authorize
Apps with OAuth in Salesforce Help for more details.
HTTP methods
POST
Request body
JSON example
{
contactTracingEncounters: [
{
"referenceId":"0haRM000000000BYAQ",
"name":"SF All Hands Q2"
"estimatedParticipantCount": 10,
"startDateTime" : "2020-06-20T00:00:00Z",
"duration": 12,
"description" : "held in SF tower",
"participants" : [
{
"participantType": "lead",
"recordTypeName": "triage",
"startTime": "2020-06-20T00:00:00Z",
"duration": 12,
"firstName" : "Leo",
"lastName" : "Machado",
"age" : 24,
"phoneNumber" : "24323322",
"emailAddress" : "lee.lo@mail.com",
"address":{
"city":"Seattle",
"state":"Washington",
"country":"US",
"postalCode":"11404",
"street":"Richmond St"
}
},
{
"participantType": "patient"
"referenceId":"001RM000004iUi8YAE",
"sourceSystemId":"211453",
"startTime": "2020-06-20T00:00:00Z",
"duration": 10,
"age" : 34
}
],
"location" : {
"name":"Seattle County",
"description":"Gala event",

<!-- page:1617 -->

AFLS Overview                                                                                                Resources



"latitude" : "47.6" ,
"longitude": "122.3",
"encounterAddress":{
"city":"Seattle",
"state":"Washington",
"country":"US",
"postalCode":"11404",
"street":"Dutch St"
}
}

}
]

}

Properties


## Name                                Type             Description

contactTracingEncounters.           String           The ID of an existing contact encounter record in the
referenceId                                          Salesforce system.

contactTracingEncounters.name String                 Required. The name for the encounter.

contactTracingEncounters.           Integer          The estimated number of participants in the encounter.
estimatedParticipantCount

contactTracingEncounters.           DateTime         Required. The start date and time of the encounter. Must
startDateTime                                        be in YYYY-MM-DDT HH:MM:SS format. For example,
2020-05-18T09:15:00.

contactTracingEncounters.           Integer          Required. The duration of the encounter in minutes.
duration

contactTracingEncounters.           String           The description for the encounter.
description

contactTracingEncounters.           List             The list of participants for the contact encounter. Each
participants                                         element in the list represents
ContactEncounterParticipant. Valid values
are:
- lead
- employee
- patient

Note: Only one value is allowed.

contactTracingEncounters.           String           Required. The encounter participant type. Valid values are:
participants.participantType                         • Lead— A new lead is created with the specified
participant record type. If the record type does not exist
in the org, an error message is returned. If the record

<!-- page:1618 -->

AFLS Overview                                                                                         Resources




## Name                          Type            Description

type is not provided n the payload, the default record
type (triage) is used.
- Employee— The system performs a lookup to the
person account and the record type is ignored. This
lookup can be done in the following ways:
– Using the referenceId that corresponds to
the Salesforce record ID.
– Using sourceSystemId. For an employee, this
ID is typically the employee ID or employee
number. If a match is found, the contact encounter
participant record is created with the contact
field lookup pointing to the matched person
account. If a match is not found, this record is
rejected and an error message is provided in the
response.

- Patient—The system performs a lookup to the person
account and the record type is ignored. This lookup
can be done in the following ways:
– Using the referenceId that corresponds to
the Salesforce record ID.
– Using sourceSystemId. For a patient, this ID
is the patient ID from an external source system. If
a match is found, the contact encounter participant
record is created with the contact_id lookup
pointing to the matched person account. If a match
is not found, this record is rejected and an error
message is provided in the response.

Note: Only one value is allowed.

contactTracingEncounters.     String          The ID of an existing patient or employee record in the
participants.referenceId                      Salesforce system. If a payload has both the
referenceID and the sourceSystemID, the
referenceID is used for the patient or the employee
lookup.

contactTracingEncounters.     String          For a patient, the patient ID from an external source system
participants.sourceSystemId                   at participant level. For an employee, the employee number
representing the employee record in the Salesforce or the
external system. If a payload has both the referenceID
and the sourceSystemID, the referenceID is
used for the patient or employee lookup.

contactTracingEncounters.     String          The name for the record type. The value for this field must
participants.recordTypeName                   be exactly the same as the label of the record type in the
user interface. This field is used only when

<!-- page:1619 -->

AFLS Overview                                                                                             Resources




## Name                           Type             Description

contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.      DateTime         The time when the encounter started.
participants.startTime

contactTracingEncounters.      Integer          Required. The duration of the encounter in minutes.
participants.duration

contactTracingEncounters.      String           Required. The first name of the participant. This field is used
participants.firstName                          only when contactTracingEncounters.
participants.participantType is set to lead.


## Note: If participants.referenceId is

provided, this field is optional.

contactTracingEncounters.      String           Required. The last name of the encounter participant. This
participants.lastName                           field is used only when
contactTracingEncounters.
participants.participantType is set to lead.


## Note: If participants.referenceId is

provided, this field is optional.

contactTracingEncounters.      Integer          The age of the encounter participant.
participants.age

contactTracingEncounters.      String           The phone number of the encounter participant. This field
participants.phoneNumber                        is used only when contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.      String           The email address of the encounter participant. This field
participants.emailAddress                       is used only when contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.      String           The address of the encounter participant. This field is used
participants.address                            only when contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.      String           The city of the encounter participant. This field is used only
participants.address.city                       when contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.      String           The state of the encounter participant. This field is used
participants.address.state                      only when contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.      String           The country of the encounter participant. This field is used
participants.address.country                    only when contactTracingEncounters.
participants.participantType is set to lead.

<!-- page:1620 -->

AFLS Overview                                                                                              Resources




## Name                             Type               Description

contactTracingEncounters.       String              The postal code of the encounter participant. This field is
participants.address.postalCode                     used only when contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.        String             The street of the encounter participant. This field is used
participants.address.street                         only when contactTracingEncounters.
participants.participantType is set to lead.

contactTracingEncounters.        Object (reference Identifies the location of the encounter.
location                         to location)

contactTracingEncounters.        String             Required. The name of the location where the encounter
location.name                                       took place. If the encounter location name already exists
in the system, the existing location record is used and the
following location fields are ignored:
- contactTracingEncounters.
location.description
- contactTracingEncounters.
location.latitude
- contactTracingEncounters.
location.longitude
- contactTracingEncounters.
location.encounteraddress.city
- contactTracingEncounters.
location.encounteraddress.state
- contactTracingEncounters.
location.encounteraddress.country
- contactTracingEncounters.
location.encounteraddress.postalCode
- contactTracingEncounters.
location.encounteraddress.street

contactTracingEncounters.        String             The description of the location where the encounter took
location.description                                place.

contactTracingEncounters.        String             The latitude coordinate of the location where the encounter
location.latitude                                   took place.

contactTracingEncounters.        String             The longitude coordinate of the location where the
location.longitude                                  encounter took place.

contactTracingEncounters.      String               The city where the encounter took place.
location.encounteraddress.city

contactTracingEncounters.       String              The state where the encounter took place.
location.encounteraddress.state

<!-- page:1621 -->

AFLS Overview                                                                                            Resources




## Name                                  Type           Description

contactTracingEncounters.         String             The country where the encounter took place.
location.encounteraddress.country

contactTracingEncounters.            String          The postal code of the location where the encounter took
location.encounteraddress.postalCode                 place.

contactTracingEncounters.        String              The street where the encounter took place.
location.encounteraddress.street



Response body
JSON example
{
"encounters" : [ {
"created" : false,
"id" : "0haxx00000000rFAAQ",
"location" : null,
"participants" : [ {
"created" : true,
"employee" : null,
"errors" : null,
"id" : "0hbxx00000000G9AAI",
"lead" : {
"created" : true,
"id" : "00Qxx000002TST8EAO"
},
"patient" : null
}, {
"created" : true,
"employee" : null,
"errors" : null,
"id" : "0hbxx00000000GAAAY",
"lead" : {
"created" : true,
"id" : "00Qxx000002TST9EAO"
},
"patient" : null
}, {
"created" : true,
"employee" : null,
"errors" : null,
"id" : "0hbxx00000000GBAAY",
"lead" : null,
"patient" : {
"created" : false,
"id" : "001xx000003GZ6tAAG"
}
} ]
} ],
"errors" : null,
"status" : null,

<!-- page:1622 -->

AFLS Overview                                                                                                             Resources



"success" : true
}




## Content Management

Use these resources to manage customer content.


Bulk Presentation (POST)
Create a presentation and its associated content in bulk. You can upload presentation files as PDF or ZIP and associated metadata.
The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing
this API. To know more, see Email Template and Intelligent Content.
Bulk Presentation (PATCH)
Update a presentation and its associated content in bulk. You can upload presentation files as PDF or ZIP and associating metadata.
The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing
this API. To know more, see Email Template and Intelligent Content.
Email Template (POST)
Create an email template. The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets
are required for accessing this API. To know more, see Email Template and Intelligent Content.
Email Template (PATCH)
Update an email template.The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets
are required for accessing this API. To know more, see Email Template and Intelligent Content.
Presentation Page Product (POST, PATCH)
Create or update (delete) product and guidance associations for a presentation page. The Health Cloud Starter and
Life Sciences Commercial Admin Permission Sets are required for accessing this API. To know more, see Email Template
and Intelligent Content.


Bulk Presentation (POST)
Create a presentation and its associated content in bulk. You can upload presentation files as PDF or ZIP and associated metadata. The
Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing this API.
To know more, see Email Template and Intelligent Content.
Resource
/connect/life-sciences/commercial/bulk-presentation

Resource example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/bulk-presentation

Available version
65.0
HTTP methods
POST

Note: For all Bulk APIs, provide the file input either as contentDocumentIdorfileId. Do not include both parameters.

<!-- page:1623 -->

AFLS Overview                                                                      Resources



Request body for POST


{
"contentType": "PRESENTATION_ZIP", // Valid values: PRESENTATION_PDF, PRESENTATION_ZIP,
or PRESENTATION_PAGE.
"presentation": {
// Required for PRESENTATION_PDF or PRESENTATION_ZIP. Not needed for PRESENTATION_PAGE.

"name": "demo-presentation-name",
"id": "demo-presentation-external-id",
"enableDoubleTapZoom": true,
"enablePinchZoom": false,
"playerGesture": "Swipeup",
"activationDate": "2019-06-03T15:00:00.000Z",
"deactivationDate": "2019-06-03T15:00:00.000Z",

// These fields are only valid for PRESENTATION_ZIP.
"topics": [
"topic_id_1",
"topic_id_2"
],
"sendByEmail": false,
"publicContentName": "public_content_name",
"publicContentUrl": "public_content_url",

"customFields": [
{
"fieldName": "Custom_Text_Field__c",
"fieldValue": "custom_field_value_1_string"
}
]
},

"pages": [
{
// Required only for PRESENTATION_PDF. Must be 1 for the file page, and incremented
for subsequent PDF pages. Not needed for ZIP/PAGE.
"pageNumber": 1,
"name": "demo-presentation-page1",
"mandatory": false,
"activationDate": "2019-06-03T15:00:00.000Z",
"deactivationDate": "2019-06-03T15:00:00.000Z",

/* Provide EITHER contentDocumentId OR fileId, but not both.
- For PDF: File input is ONLY provided on the page where pageNumber is 1.
- For ZIP/PAGE: File input is required for ALL pages.
*/
"contentDocumentId": "069xx0000004gbkAAA",
//"fileId": "file1-key",

"id": "demo-page-id-1", // Required for ZIP/PAGE. Not required for PRESENTATION_PDF.

"isAdditionalContent": false, // Required for ZIP/PAGE. Not required for

<!-- page:1624 -->

AFLS Overview                                                                  Resources



PRESENTATION_PDF.

"customFields": [
{
"fieldName": "custom_field_name_1",
"fieldValue": 45
}
],
"products": [
{
"productId": "1Kexx0000004C92CAE",
"guidanceIds": [
"1Kgxx0000004C92CAE"
]
}
]
},
{
//"pageNumber": 2, /* Must be included for a second page if contentType is
PRESENTATION_PDF. */
"name": "demo-presentation-page2",
"mandatory": false,
"activationDate": "2019-06-03T15:00:00.000Z",
"deactivationDate": "2019-06-03T15:00:00.000Z",

// File input is required here for ZIP/PAGE. Must be omitted for PDF.
"contentDocumentId": "069xx0000004gbcAAB",

"id": "demo-page-id-2", // Required for ZIP/PAGE.
"isAdditionalContent": false, // Required for ZIP/PAGE.

"customFields": [
{
"fieldName": "custom_field_name_1",
"fieldValue": "custom_field_value_1"
}
],
"products": [
{
"productId": "1Kexx0000004C92CAE",
"guidanceIds": [
"1Kgxx0000004C92CAE"
]
}
]
}
]
}

<!-- page:1625 -->

AFLS Overview                                                                                                              Resources



Properties

Name                      Type                      Description                                         Required
contentType               String                    The type of content. Valid values are Required
PRESENTATION_PDF, PRESENTATION_ZIP,
or PRESENTATION_PAGE.

presentation              Object on page 1699       JSON payload containing presentation metadata.      Required only if the
contentType is
PRESENTATION_PDFor
PRESENTATION_ZIP

pages                     List<Object> on page      List of presentation pages, each containing its own Required
1698                      metadata and file association. Only one page can
be provided in the pages input for
PRESENTATION_PAGEcontent type.




## Response body for POST

Create Bulk Presentation Output on page 1819


Bulk Presentation (PATCH)
Update a presentation and its associated content in bulk. You can upload presentation files as PDF or ZIP and associating metadata. The
Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are required for accessing this API.
To know more, see Email Template and Intelligent Content.
Resource
/connect/life-sciences/commercial/bulk-presentation

Resource example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/bulk-presentation

Available version
65.0
HTTP methods
PATCH
Request body for PATCH


{
"contentType": "PRESENTATION_ZIP", // Valid values: PRESENTATION_PDF, PRESENTATION_ZIP,
or PRESENTATION_PAGE.

// Required for PDF or ZIP content types. Not required for PRESENTATION_PAGE.
"presentation": {
"name": "demo-presentation-name",
"id": "demo-presentation-id",
"enableDoubleTapZoom": true,
"enablePinchZoom": false,

<!-- page:1626 -->

AFLS Overview                                                                     Resources



"playerGesture": "Swipeup",
"activationDate": "2019-06-03T15:00:00.000Z",
"deactivationDate": "2019-06-03T15:00:00.000Z",

// These fields are only valid for PRESENTATION_ZIP.
"topics": [
"topic_id_1",
"topic_id_2"
],
"sendByEmail": false,
"publicContentName": "public_content_name",
"publicContentUrl": "public_content_url",

"customFields": [
{
"fieldName": "Custom_Text_Field__c",
"fieldValue": "custom_field_value_1_string"
}
]
},

// Only one page can be provided for PRESENTATION_PAGE.
"pages": [
{
// Required only for PRESENTATION_PDF. Must be 1 for the file page, and incremented
for subsequent PDF pages. Not required for ZIP/PAGE.
"pageNumber": 1,
"name": "demo-presentation-page1",
"mandatory": false,
"activationDate": "2019-06-03T15:00:00.000Z",
"deactivationDate": "2019-06-03T15:00:00.000Z",

/* File input (contentDocumentId or fileId) is ONLY required if you are UPDATING
the content of the presentation.
- For PDF: File input is ONLY provided on the page where pageNumber is 1. Omit
fileId/contentDocumentId if only updating metadata.
- For ZIP/PAGE: File input is required for ALL pages if their content is
changing.
*/
"contentDocumentId": "069xx0000004gbkAAA",
//"fileId": "file1-key", /* Use contentDocumentId OR fileId, but not both. */

"id": "demo-page-id-1", // Required for ZIP/PAGE. Omit for PRESENTATION_PDF.
"isAdditionalContent": false, // Required for ZIP/PAGE. Omit for PRESENTATION_PDF.


"customFields": [
{
"fieldName": "custom_field_name_1",
"fieldValue": 45
}
],
"products": [
{

<!-- page:1627 -->

AFLS Overview                                                                                                   Resources



"productId": "1Kexx0000004C92CAE",
"guidanceIds": [
"1Kgxx0000004C92CAE"
]
}
]
},
{
/* Second page example. */
//"pageNumber": 2, /* Must be included for a second page if contentType is
PRESENTATION_PDF. */
"name": "demo-presentation-page2",
"mandatory": false,
"activationDate": "2019-06-03T15:00:00.000Z",
"deactivationDate": "2019-06-03T15:00:00.000Z",

// File input is required here for ZIP/PAGE if content is being updated. Not
required for PDF.
"contentDocumentId": "069xx0000004gbcAAB",

"id": "demo-page-id-2", // Required for ZIP/PAGE.
"isAdditionalContent": false, // Required for ZIP/PAGE.

"customFields": [
{
"fieldName": "custom_field_name_1",
"fieldValue": "custom_field_value_1"
}
],
"products": [
{
"productId": "1Kexx0000004C92CAE",
"guidanceIds": [
"1Kgxx0000004C92CAE"
]
}
]
}
]
}

Properties

Name                  Type                  Description                                      Required
contentType           String                The type of content. Possible values are:        Required
- PRESENTATION_PDF
- PRESENTATION_ZIP
- PRESENTATION_PAGE.

presentation          Object on page 1700   JSON payload containing presentation metadata.   Required only if the
contentType is

<!-- page:1628 -->

AFLS Overview                                                                                               Resources



Name                   Type                   Description                                        Required
PRESENTATION_PDFor
PRESENTATION_ZIP

pages                  List<Object> on page   List of presentation pages, each containing its own Optional
1701                   metadata and file association. Only one page can
be provided in the pages input for
PRESENTATION_PAGEcontent type.




## Response body for PATCH

Update Bulk Presentation Output on page 1819


Email Template (POST)
Create an email template. The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are
required for accessing this API. To know more, see Email Template and Intelligent Content.
Resource
/connect/life-sciences/commercial/bulk-email-template

Resource example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/bulk-email-template

Available version
65.0
HTTP methods
POST
Request body for POST


{
"emailSubject": "Welcome",
"contentDocumentId": "069xx0000004CAeAAM",
"name": "Welcome Email",
"activatedDate": "2025-06-03T15:00:00.000Z",
"senderType": "SYSTEM",
"senderEmailFieldAPIName": "noreply@company.com",
"replyToType": "USER",
"replyToEmailAddress": "support@company.com",
"id": "external-id",
"deactivatedDate": "2025-01-01T00:00:00.000Z",
"description": "This is a welcome email template used for onboarding new users.",
"attachmentObjectTypes": [
"PDF",
"DOCX"
],
"customFields": [
{
"fieldName": "user",
"fieldValue": "admin"

<!-- page:1629 -->

AFLS Overview                                                                                        Resources



},
{
"fieldName": "standard",
"fieldValue": "user"
}
],
"languages": [
"en",
"es"
],
"isActive": true,
"surveyId": "sample-survey-id",
"productId": "sample-product-id",
"communicationSubscriptionId": "sample-comm-subscription-id",
"topics": [
"Onboarding",
"User Engagement"
],
"shouldIgnoreEmailConsent": false,
"isSubjectLineEditable": true,
"bccEmailIdList": "bcc@example.com",
"automatedEmailContextType": "ProviderVisit",
"automatedEmailActionType": "Create",
"isDefaultAutoEmailTemplate": false
}

Properties

Property Name              Type          Description                                        Required
activatedDate              Date          Date when the email template becomes active.       Optional

attachmentObjectTypes List<String>       List of object types for attachments.              Optional

automatedEmailActionType String          Action type for automated emails. Possible values Optional
are:
- Create
- Update
- Cancel

automatedEmailContextType String         Context type for automated emails. Possible values Optional
are:
- ProviderVisit
- Meeting

bccEmailIdList             String        Email ID for BCC.                                  Optional

communicationSubscriptionId String       ID of the communication subscription associated    Optional
with the email temaplate.

contentDocumentId String                 ID of the content document ZIP containing the        Required
email files. You can pass this parameter if you wish
to process the existing document record. This

<!-- page:1630 -->

AFLS Overview                                                                                                   Resources



Property Name            Type           Description                                          Required
parameter cannot be provided when you pass the
fileId.

customFields             Object         Map of custom field names and their values for the Optional
email template.

deactivatedDate Datetime                Date when the email template becomes inactive.       Optional

description              String         Description of the email template.                   Optional

emailSubject             String         Subject line of the email template.                  Required, only if the file
input is provided either
as
contentDocumentId
or fileId

fileId                   String         The multipart form field key that references the      Required
uploaded file for this presentation page. You can
pass this parameter if you wish to process a new
file that you will include in the request. You cannot
provide this parameter when you pass the
contentDocumentId as only one of the two
are allowed.

id                       String         ID of the email template. Either the                 Optional
SourceSystemIdentifier or Salesforce Id
of the LifeSciEmailTemplate record.

isActive                 Boolean        Indicates if the email template is active (true) or Optional
not (false).

isDefaultAutoEmailTemplate Boolean      Indicates if this is a default automated email       Optional
template (true) or not (false).

isSubjectLineEditable Boolean           Indicates if the email subject line is editable (true) Optional
or not (false).

languages                List<String>   List of languages associated with the email template Optional
as per the ISO codes such as en_US, fr, es.

name                     String         Name of the email template.                          Required

productId                String         ID of the associated product.                        Optional

replyToEmailAddress String              Reply-to email address.                              Optional

replyToType              String         Type of reply-to address. Possible values are:       Optional
- SalesRep
- PredefinedEmail

senderEmailFieldAPIName String          API name of the sender's email field.                Optional

<!-- page:1631 -->

AFLS Overview                                                                                         Resources



Property Name           Type              Description                                          Required
senderType              String            Type of sender for the email. Possible values are:   Optional
- SalesRep
- PredefinedEmail

shouldIgnoreEmailConsent Boolean          Indicates whether email consent should be ignored Optional
(true) or not (false).

surveyId                String            ID of the associated survey.                         Optional

topics                  List<String>      List of topics associated with the email template. Optional
TopicAssignment for Life Science
EmailTemplate must be enabled before using
this field.



## Response body for POST

Create Email Template Output on page 1819


Email Template (PATCH)
Update an email template.The Health Cloud Starter and Life Sciences Commercial Admin Permission Sets are
required for accessing this API. To know more, see Email Template and Intelligent Content.
Resource
/connect/life-sciences/commercial/bulk-email-template

Resource example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/bulk-email-template

Available version
65.0
HTTP methods
PATCH
Request body for PATCH


{
"emailSubject": "Welcome",
"contentDocumentId": "069xx0000004CAeAAM",
"name": "Welcome Email",
"activatedDate": "2025-06-03T15:00:00.000Z",
"senderType": "SYSTEM",
"senderEmailFieldAPIName": "noreply@company.com",
"replyToType": "USER",
"replyToEmailAddress": "support@company.com",
"id": "email-template-id",
"deactivatedDate": "2025-01-01T00:00:00.000Z",
"description": "This is a welcome email template used for onboarding new users.",
"attachmentObjectTypes": [

<!-- page:1632 -->

AFLS Overview                                                                                  Resources



"PDF",
"DOCX"
],
"customFields": [
{
"fieldName": "user",
"fieldValue": "admin"
},
{
"fieldName": "standard",
"fieldValue": "user"
}
],
"languages": [
"en",
"es"
],
"isActive": true,
"surveyId": "sample-survey-id",
"productId": "sample-product-id",
"communicationSubscriptionId": "sample-comm-subscription-id",
"topics": [
"Onboarding",
"User Engagement"
],
"shouldIgnoreEmailConsent": false,
"isSubjectLineEditable": true,
"bccEmailIdList": "bcc@example.com",
"automatedEmailContextType": "ProviderVisit",
"automatedEmailActionType": "Create",
"isDefaultAutoEmailTemplate": false
}

Properties

Property Name             Type       Description                                       Required
activatedDate             Date       Date when the email template becomes active.      Optional

attachmentObjectTypes List<String>   List of object types for attachments.             Optional

automatedEmailActionType String      Action type for automated emails. Possible values Optional
are:
- Create
- Update
- Cancel

automatedEmailContextType String     Context type for automated emails. Possible values Optional
are:
- ProviderVisit
- Meeting

<!-- page:1633 -->

AFLS Overview                                                                                                     Resources



Property Name              Type           Description                                          Required
bccEmailIdList             String         Email ID for BCC.                                    Optional

communicationSubscriptionId String        ID of the communication subscription associated      Optional
with the email temaplate.

contentDocumentId String                  ID of the content document ZIP containing the        Optional
email files. You can pass this parameter if you wish
to process the existing document record. You
cannot provide this parameter when you pass the
fileId.

customFields               Object         Map of custom field names and their values for the Optional
email template.

deactivatedDate Datetime                  Date when the email template becomes inactive.       Optional

description                String         Description of the email template.                   Optional

emailSubject               String         Subject line of the email template.                  Required, only if the file
input is provided either
as
contentDocumentId
or fileId.

fileId                     String         The multipart form field key that references the      Optional
uploaded file for this presentation page. You can
pass this parameter if you wish to process a new
file that you will include in the request. You cannot
provide this parameter when you pass the
contentDocumentId as only one of the two
are allowed.

id                         String         ID of the email template. Either the                 Required
SourceSystemIdentifier or Salesforce
ID of the LifeSciEmailTemplate record.

isActive                   Boolean        Indicates if the email template is active (true) or Optional
not (false).

isDefaultAutoEmailTemplate Boolean        Indicates if this is a default automated email       Optional
template (true) or not (false).

isSubjectLineEditable Boolean             Indicates if the email subject line is editable (true) Optional
or not (false).

languages                  List<String>   List of languages associated with the email template Optional
as per the ISO codes such as en_US, fr, es.

name                       String         Name of the email template.                          Optional

productId                  String         ID of the associated product.                        Optional

replyToEmailAddress String                Reply-to email address.                              Optional

<!-- page:1634 -->

AFLS Overview                                                                                                Resources



Property Name           Type                     Description                                          Required
replyToType             String                   Type of reply-to address. Possible values are:       Optional
- SalesRep
- PredefinedEmail

senderEmailFieldAPIName String                   API name of the sender's email field.                Optional

senderType              String                   Type of sender for the email. Possible values are:   Optional
- SalesRep
- PredefinedEmail

shouldIgnoreEmailConsent Boolean                 Indicates whether email consent should be ignored Optional
(true) or not (false).

surveyId                String                   ID of the associated survey.                         Optional

topics                  List<String>             List of topics associated with the email template. Optional
TopicAssignment for Life Science
EmailTemplate must be enabled before using
this field.



## Response body for PATCH

Update Email Template Output on page 1819


Presentation Page Product (POST, PATCH)
Create or update (delete) product and guidance associations for a presentation page. The Health Cloud Starter and Life
Sciences Commercial Admin Permission Sets are required for accessing this API. To know more, see Email Template and
Intelligent Content.
Resource
/connect/life-sciences/commercial/page/products

Resource example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/page/products

Available version
65.0
HTTP methods
POST, PATCH
Request body for POST or PATCH

Note: The PATCH request will delete the records.


{
"id": "string",
"products": [

<!-- page:1635 -->

AFLS Overview                                                                                                                 Resources



{
"productId": "1Kexx000000409xxAE",
"guidanceIds": [
"a0Fc0000007I5l6EAC", "Guidance_2_ext_id"
]
}
]
}


Name                       Type                          Description                                        Required
id                         String                        ID of the presentation page.                       Required, if an existing
page record needs to be
updated for
PRESENTATION_ZIP
and
PRESENTATION_PAGE
content types.

pageNumber                 Integer                       Page number for the presentation page. This value Required for
must be unique and within the range of 1 to 200. PRESENTATION_PDF
content type.

products                   List<Object> on page          Array of objects containing the product ID and     Required
1769                          guidance ID mapping.



## Response body for POST

Presentation Page Product Output on page 1842


Care Program Enrollments (POST)
Use this API to enroll multiple patients in a care program.
A single API call creates both patient enrollment cards, and enrollee products for all the patients. You can enroll up to 200 patients in a
single request.

Important: Ensure that you have configured required care system field-mapping records for provider, patient, care program, and
the product in Setup > Care System Field Mappings. For more information, see CareSystemFieldMapping.



## Enrollments

Enroll multiple patients into a care program.



## Enrollments

Enroll multiple patients into a care program.
Resource
/services/data/vXX.X/connect/health/care-programs/enrollments

Available version
46.0

<!-- page:1636 -->

AFLS Overview                                                                                                             Resources




## Authentication

Use OAuth to connect to Salesforce and get an access token. Pass the access token in your requests. For more information, see
Connect to Connect REST API Using OAuth.
HTTP methods
POST
Request body
Root XML tag
<careProgramEnrollmentData>
JSON example
{
"programId": "programId1",
"sourceSystem": "source-system-name",
"patientData": [
{
"patientId": "patient1",
"careProgramProductData": [
{
"providerId": "provider1",
"productId": "product1"
},
{
"providerId": "provider1",
"productId": "product2"
}
]
},
{
"patientId": "patient2",
"careProgramProductData": [
{
"providerId": "provider3",
"productId": "product4"
}
]
}
]
}

Properties

Name                 Type                 Description                               Required            Available
Version
patientData          Patient Input []     List of all objects that contain patients Yes                 46.0
data. You can have up to 200 items in this
list.

programId            String               ID of the care program as configured in   Yes                 46.0
the care system field mappings.

<!-- page:1637 -->

AFLS Overview                                                                                                       Resources



Name                 Type                 Description                               Required          Available
Version
sourceSystem String                       Name of the source system as configured Yes                 46.0
in the care system field mappings.



## Response body

Program Enrollment Result
Prerequisites
Ensure that you have configured the following care system field mapping configured in Setup > Care System Field Mappings:


## Name                            Role                              Target Object

Care_Program                    Not Applicable                    CareProgram

Patient                         Patient                           Account

Product                         Not Applicable                    Product2

Provider                        Service Provider                  Account



Note: Ensure that you have configured appropriate external ID field and source system for each of these mappings.

For more information, see CareSystemFieldMapping.


Digital Verification (POST)
Perform verification for the digital verification records within advanced therapy management.
Resource
/connect/health/advanced-therapy-management/digital-verification

Resource example

https://yourInstance.salesforce.com/services/data/v60.0/connect/health/advanced-therapy-management/digital-verification

Available version
60.0
HTTP methods
POST
Request body for POST
JSON example
{
"digitalVerificationInputFieldsMap": {
"VerificationStatusCategory": "Completed",
"Comment": "done successfully",
"VerificationSite": "USA"
},
"userCredentials": {

<!-- page:1638 -->

AFLS Overview                                                                                                       Resources



"loginId": "user@example.com",
"password": "123456"
},
"digitalVerificationId": "15Exx0000004CAeEAM",
sessionId:12Exz0022004CAfABM
}

Properties

Name                  Type                Description                                 Required or        Available
Optional           Version
digital      String                       ID of the digital verification record for   Required           60.0
Verification                              which the digital verification is to be
Id                                        performed.

sessionId             String              ID that tracks the session established      Optional           60.0
through a connected app or remote
system in Salesforce.

user                  User Credentials    Authentication credentials of the user      Required           60.0
Credentials           Input               performing the digital verification.

digital      Digital Verification         Map structure holding key-value pairs of Required              60.0
Verification Input Fields Map             digital verification input fields.
InputFields
Map



Response body for POST
Digital Verification


Download Provider (POST)
Download Health Care provider data from an external system to a Salesforce org after a search is performed.
Resource
/connect/life-sciences/commercial/download-provider

Available version
66.0
HTTP methods
POST
Request body for POST
Properties

Property         Type           Description                      Required                        Available Version
Name
country          String         The country code where the       Required                        66.0
Code                            search was performed.

<!-- page:1639 -->

AFLS Overview                                                                                                               Resources



Property         Type              Description                    Required                        Available Version
Name
data             String            The external data source, such Optional                        66.0
source                             as One Key.

entity           String            The type of entity, such as    Required                        66.0
Type                               individual or workplace.

external         String            The unique external ID from    Required                        66.0
Id                                 the search response.

in               Boolean           Indicates whether the record Optional                          66.0
Contract                           is currently in contract.




## Response body for POST

Download Provider Output on page 1822



## Benefit Verification

Use these resources to verify the health benefits covered by the patient's insurer. The call center agent can view the coverages in the
patient's record page.


Benefits Verification (POST)
The Verify Benefits API call is the main resource for checking which health benefits are available to a patient.
Benefits Verification Input
This is the input structure of a Verify Benefits API call.
Benefits Verification Request
This is what a Verify Benefits request looks like.
Benefits Verification Output
This is the content of the output from running the Verify Benefits API call.
Benefits Verification Response
This is the content of the response from a Verify Benefits API call.


Benefits Verification (POST)
The Verify Benefits API call is the main resource for checking which health benefits are available to a patient.
Resource
/connect/health/benefitsverification/verifyBenefits

Available version
53.0
Requires Chatter
No
HTTP methods
POST

<!-- page:1640 -->

AFLS Overview                                                                                                     Resources




## Response body for POST

Benefits Verification Output on page 1636



## Benefits Verification Input

This is the input structure of a Verify Benefits API call.
Root XML tag
inputData
JSON example

Properties

Name                    Type                    Description                                 Required or   Available
Optional      Version
benefitsVerificationRequests Benefits Verification List of Benefits Verification Requests                 53.0
Request on page
1636[]




## Benefits Verification Request

This is what a Verify Benefits request looks like.
Properties

Name                    Type                    Description                                 Required or   Available
Optional      Version
encounterDate String                            Encounter Date                                            53.0

memberAccountId String                          Member Account Id                                         53.0

memberPlanId            String                  Member Plan Id                                            53.0

providerNpi             String                  Provider Npi                                              53.0

providerOrganizationName String                 Provider Organization Name                                53.0

providerType            String                  Provider Type                                             53.0

serviceTypeCodes String[]                       Service Type Codes                                        53.0




## Benefits Verification Output

This is the content of the output from running the Verify Benefits API call.

<!-- page:1641 -->

AFLS Overview                                                                                                               Resources



Property Name             Type                   Description                               Filter Group and       Available Version
Version
benefitsVerificationResponses Benefits Verification Benefits Verification Responses        Small, 53.0            53.0
Response on page
1637[]

code                      String                 Benefits Verification api returned code   Small, 53.0            53.0

isSuccess                 Boolean                Benefits Verification api success flag    Small, 53.0            53.0

message                   String                 Benefits Verification api message         Small, 53.0            53.0




## Benefits Verification Response

This is the content of the response from a Verify Benefits API call.

Property Name             Type                   Description                               Filter Group and       Available Version
Version
careBenefitVerifyRequestId String                Care Benefit Verify Request Id            Small, 53.0            53.0

code                      String                 Benefits Verification api returned code   Small, 53.0            53.0

coverageBenefitId String                         Coverage Benefit Id                       Small, 53.0            53.0

isSuccess                 Boolean                Benefits Verification api success flag    Small, 53.0            53.0

message                   String                 Benefits Verification api message         Small, 53.0            53.0




## Intelligent Document Management

Use the Intelligent Document Management resources to create or update records in Salesforce objects based on the content document
records or received document records.
Currently, a user can use the manual flow from the user interface to create records in the target Salesforce objects. A user can create
target records based on the content document records or received document records using:
- Transform Document—Transform the received document to create a record in the target Salesforce object.
- Review Document—When the transformed document is used to create the target record, users can review the document for any
conflicts, choose to resolve the conflicts, and update the document.
With the Intelligent Document Automation APIs, you can automate the process of getting the mappings between the values of the keys
extracted from the content document and the Salesforce object fields, and create a record in the target Salesforce object.
Before using the APIs, perform AWS text extraction from the content document record or received document record by using the POST
request on the OCR Text Extraction resource.



## Supported Salesforce Objects

Account, BusinessMilestone, Case, Contact, CareDiagnosis, CareRequest, CareRequestDrug, CareRequestExtension, CareRequestItem,
CareProgramEnrollee, Lead, Opportunity, Visit, and custom objects.

<!-- page:1642 -->

AFLS Overview                                                                                                        Resources




## Special Access Rules

To use these resources, you must have the HealthCloud, DocumentChecklist, and AWSTextract1000LimitAddOn licenses.


Available Resources


## Resource                                                         Description

/connect/form-reader/contentDocuments                            Create records in Salesforce objects using a document based on
/${contentDocumentId}/record                                     a content document record.

/connect/form-reader/contentDocuments          Update an existing record in a Salesforce object using a document
/${contentDocumentId}/record/${targetRecordId} based on a content document record.

/connect/form-reader/receivedDocuments                           Create records in Salesforce objects using a document based on
/${receivedDocumentId}/record                                    a received document record.

/connect/form-reader/receivedDocuments          Update an existing record in a Salesforce object using a document
/${receivedDocumentId}/record/${targetRecordId} based on a received document record.

/connect/document-automation/contentDocuments Split a document and attach one or more pages from the
/${contentDocumentId}/linkedObjects/${linkedObjectId} transformed document to Salesforce records.



Record Creation with Content Documents (POST)
Create records in Salesforce objects using a document based on a content document record.
Record Creation with Received Documents (POST)
Create records in Salesforce objects using a document based on a received document record.
Record Update with Content Documents (PATCH)
Update an existing record in a Salesforce object using a document based on a content document record.
Record Update with Received Documents (PATCH)
Update an existing record in a Salesforce object using a document based on a received document record.
Split Documents
Split a document and attach one or more pages from the transformed document to Salesforce records.


Record Creation with Content Documents (POST)
Create records in Salesforce objects using a document based on a content document record.
Resource
/connect/form-reader/contentDocuments/${contentDocumentId}/record

Resource Example


## https://yourInstance.salesforce.com/services/data/vXX.X/connect

/form-reader/contentDocuments/069xx0000004D1sAAE/record

Available version
55.0

<!-- page:1643 -->

AFLS Overview                                                                                     Resources



Requires Chatter
No
HTTP methods
POST
Request body for POST
Root XML tag
<DocumentProcessInput>
JSON example for POST
{
"objectApiName": "Account",
"documentTypeId": "0dexx0000000001",
"overrideConfidenceScoreThreshold": 50,
"ignoreFieldValueConflict": false,
"fieldsWithoutConflictList": {
"noConflictFields": [
{
"field": "name"
},
{
"field": "accountnumber"
}
]
},
"additionalFields": {
"additionalFieldMap": {
"AccountNumber": "9090909"
}
}
"templateApiName": "sample_template"
}

Properties

Name                Type       Description                               Required or   Available
Optional      Version
additionalFields Map<String,   List of additional fields that you want to Optional     55.0
Object>    create or update in the target object and
which are not present in the Intelligent
Form Reader field mappings.

attachDocument Boolean         Indicates whether to automatically create Optional      55.0
the DocumentChecklistItem (DCI) and
ContentDocumentLink records to link the
document to the target object (true)
or not (false).
Default value is false.

documentTypeId String          ID of the document type for the           Optional      55.0
document checklist item.

<!-- page:1644 -->

AFLS Overview                                                                                                Resources



Name                Type                 Description                                Required or   Available
Optional      Version
fieldsWithout Fields Without             List of fields that must not have any       Optional     55.0
ConflictList Conflict Input[]            conflicts for the record creation or update
process.

ignoreFieldValue Boolean                 Indicates whether to ignore conflicts in   Optional      55.0
Conflict                                 OCR (true) or not (false).
Default value is false.

linkedObjectId String                    ID of the linked object record.            Optional      55.0

objectApiName String                     API name of the target object in which     Optional      55.0
you want to create or update a record.

overrideConfidence Integer               Conflict confidence score threshold value Optional       55.0
ScoreThreshold                           for the extracted value.


## Note: The value of this field

overrides the confidence score
threshold value set on the user
interface.

recordTypeId String                      ID of the record type of the target object. Optional     55.0

templateApiName String                   API name of the document template to Optional            59.0
retrieve.



## Response body for POST

Document Process Output


Record Creation with Received Documents (POST)
Create records in Salesforce objects using a document based on a received document record.
Resource
/connect/form-reader/receivedDocuments/${receivedDocumentId}/record

Resource Example


## https://yourInstance.salesforce.com/services/data/vXX.X/connect

/form-reader/receivedDocuments/0ioxx0000000001AAA/record

Available version
55.0
Requires Chatter
No
HTTP methods
POST

<!-- page:1645 -->

AFLS Overview                                                                                       Resources



Request body for POST
Root XML tag
<DocumentProcessInput>
JSON example for POST
{
"objectApiName": "Account",
"documentTypeId": "0dexx0000000001",
"overrideConfidenceScoreThreshold": 50,
"ignoreFieldValueConflict": false,
"fieldsWithoutConflictList": {
"noConflictFields": [
{
"field": "name"
},
{
"field": "accountnumber"
}
]
},
"additionalFields": {
"additionalFieldMap": {
"AccountNumber": "9090909"
}
}
"templateApiName": "sample_template"
}

Properties

Name                Type        Description                                Required or   Available
Optional      Version
additionalFields Map<String,    List of additional fields that you want to Optional      55.0
Object>     create or update in the target object and
which are not present in the Intelligent
Form Reader field mappings.

attachDocument Boolean          Indicates whether to automatically create Optional       55.0
the DocumentChecklistItem (DCI) and
ContentDocumentLink records to link the
document to the target object (true)
or not (false).
Default value is false.

documentTypeId String           ID of the document type for the            Optional      55.0
document checklist item.

fieldsWithout Fields Without    List of fields that must not have any       Optional     55.0
ConflictList Conflict Input[]   conflicts for the record creation or update
process.

<!-- page:1646 -->

AFLS Overview                                                                                                Resources



Name                Type                 Description                                Required or   Available
Optional      Version
ignoreFieldValue Boolean                 Indicates whether to ignore conflicts in   Optional      55.0
Conflict                                 OCR (true) or not (false).
Default value is false.

linkedObjectId String                    ID of the linked object record.            Optional      55.0

objectApiName String                     API name of the target object in which     Optional      55.0
you want to create or update a record.

overrideConfidence Integer               Conflict confidence score threshold value Optional       55.0
ScoreThreshold                           for the extracted value.


## Note: The value of this field

overrides the confidence score
threshold value set on the user
interface.

recordTypeId String                      ID of the record type of the target object. Optional     55.0

templateApiName String                   API name of the document template to Optional            59.0
retrieve.



## Response body for POST

Document Process Output


Record Update with Content Documents (PATCH)
Update an existing record in a Salesforce object using a document based on a content document record.
Resource
/connect/form-reader/contentDocuments/${contentDocumentId}/record/${targetRecordId}

Resource Example


## https://yourInstance.salesforce.com/services/data/vXX.X/connect

/form-reader/contentDocuments/${contentDocumentId}/record/${targetRecordId}

Available version
55.0
Requires Chatter
No
HTTP methods
PATCH
Request body for PATCH
Root XML tag
<DocumentProcessInput>

<!-- page:1647 -->

AFLS Overview                                                                                       Resources



JSON example for PATCH
{
"documentTypeId": "0dexx0000000001",
"overrideConfidenceScoreThreshold": 100,
"ignoreFieldValueConflict": false,
"attachDocument": true,
"fieldsWithoutConflictList": {
"noConflictFields": [
{
"field": "name"
},
{
"field": "accountnumber"
}
]
}
"templateApiName": "sample_template"
}

Properties

Name             Type           Description                                Required or   Available
Optional      Version
additionalFields Map<String,    List of additional fields that you want to Optional      55.0
Object>        create or update in the target object and
which are not present in the Intelligent
Form Reader field mappings.

attachDocument Boolean          Indicates whether to automatically create Optional       55.0
the DocumentChecklistItem (DCI) and
ContentDocumentLink records to link the
document to the target object (true)
or not (false).
Default value is false.

documentTypeId String           ID of the document type for the            Optional      55.0
document checklist item.

fieldsWithout Fields Without    List of fields that must not have any       Optional     55.0
ConflictList Conflict Input[]   conflicts for the record creation or update
process.

ignoreFieldValue Boolean        Indicates whether to ignore conflicts in   Optional      55.0
Conflict                        OCR (true) or not (false).
Default value is false.

linkedObjectId String           ID of the linked object record.            Optional      55.0

objectApiName String            API name of the target object in which     Optional      55.0
you want to create or update a record.

<!-- page:1648 -->

AFLS Overview                                                                                                Resources



Name                 Type                Description                                Required or   Available
Optional      Version
overrideConfidence Integer               Conflict confidence score threshold value Optional       55.0
ScoreThreshold                           for the extracted value.


## Note: The value of this field

overrides the confidence score
threshold value set on the user
interface.

recordTypeId String                      ID of the record type of the target object. Optional     55.0

templateApiName String                   API name of the document template to Optional            59.0
retrieve.



## Response body for PATCH

Document Process Output


Record Update with Received Documents (PATCH)
Update an existing record in a Salesforce object using a document based on a received document record.
Resource
/connect/form-reader/receivedDocuments/${receivedDocumentId}/record/${targetRecordId}

Resource Example


## https://yourInstance.salesforce.com/services/data/vXX.X/connect

/form-reader/receivedDocuments/0ioxx0000000001AAA/record/001xx000003GavnAAC

Available version
55.0
Requires Chatter
No
HTTP methods
PATCH
Request body for PATCH
Root XML tag
<DocumentProcessInput>
JSON example for POST
{
"documentTypeId": "0dexx0000000001",
"overrideConfidenceScoreThreshold": 100,
"ignoreFieldValueConflict": false,
"attachDocument": true,
"fieldsWithoutConflictList": {
"noConflictFields": [
{

<!-- page:1649 -->

AFLS Overview                                                                                       Resources



"field": "name"
},
{
"field": "accountnumber"
}
]
}
"templateApiName": "sample_template"
}

Properties

Name               Type         Description                                Required or   Available
Optional      Version
additionalFields Map<String,    List of additional fields that you want to Optional      55.0
Object>      create or update in the target object and
which are not present in the Intelligent
Form Reader field mappings.

attachDocument Boolean          Indicates whether to automatically create Optional       55.0
the DocumentChecklistItem (DCI) and
ContentDocumentLink records to link the
document to the target object (true)
or not (false).
Default value is false.

documentTypeId String           ID of the document type for the            Optional      55.0
document checklist item.

fieldsWithout Fields Without    List of fields that must not have any       Optional     55.0
ConflictList Conflict Input[]   conflicts for the record creation or update
process.

ignoreFieldValue Boolean        Indicates whether to ignore conflicts in   Optional      55.0
Conflict                        OCR (true) or not (false).
Default value is false.

linkedObjectId String           ID of the linked object record.            Optional      55.0

objectApiName String            API name of the target object in which     Optional      55.0
you want to create or update a record.

overrideConfidence Integer      Conflict confidence score threshold value Optional       55.0
ScoreThreshold                  for the extracted value.


## Note: The value of this field

overrides the confidence score
threshold value set on the user
interface.

recordTypeId String             ID of the record type of the target object. Optional     55.0

<!-- page:1650 -->

AFLS Overview                                                                                                         Resources



Name                 Type                Description                               Required or         Available
Optional            Version
templateApiName String                   API name of the document template to Optional                 59.0
retrieve.



## Response body for PATCH

Document Process Output



## Split Documents

Split a document and attach one or more pages from the transformed document to Salesforce records.
For example, suppose you receive a fax containing multiple patients' documents in a single scanned copy. As needed, separate the
document pages and attach the split documents to the patient's record.
Resource
/connect/document-automation/contentDocuments/${contentDocumentId}/linkedObjects/${linkedObjectId}

Resource Example


## https://yourInstance.salesforce.com/services/data/vXX.X/connect

/document-automation/contentDocuments/0ioRM0000004CqTYAU/linkedObjects/0OxRM0000004CqTYAU

Available version
55.0
Requires Chatter
No
HTTP methods
POST
Parameters for POST

Parameter            Type                 Description                                Required or          Available
Name                                                                                 Optional             Version
contentDocumentID String                  The ID of the content document to be split. Required            55.0

linkedObjectID String                     The ID of the linked object with which the Required             55.0
split document must be associated. This is
the ID of the DocumentChecklistItem
object for Salesforce.


Request body for POST
Root XML tag
<DocumentManagementInput>
JSON example
{
"pageSpecificationList": {

<!-- page:1651 -->

AFLS Overview                                                                                                   Resources



"pageSpecifications": [
{
"page":1,
"rotation":0,
"addToTargetFile":"true"
},
{
"page":2,
"rotation":0,
"addToTargetFile":"true"
}
]
},
"linkedObjectFieldsMap" : {
"linkedObjectFields" : {"ReceivedDocumentId" : "0ioxx00000000ODAAY"}
},
"isOcrRequested" : true
}

Properties

Name                 Type                  Description                                 Required or   Available
Optional      Version
isOcrRequested Boolean                     Indicates whether OCR is required to        Optional      55.0
process the content document (true)
or not (false).
By default, OCR is performed on the first
five pages of the content document.


## Note: Set this field value to true

to perform OCR on all the pages
of a content document that
contains more than five pages.

linkedObjectFieldsMap Map<String,          Represents the map that contains the    Optional          55.0
String>               linked object fields. For example, the
linked object is the Document Checklist
Item for Salesforce.

pageSpecificationList Page Specification   The page specifications list                Required      55.0
List Input[]          representation.

targetFileName String                      The name of the target file that is created Optional      55.0
from the split document.



## Response body for POST

Document Management Result

<!-- page:1652 -->

AFLS Overview                                                                                                                  Resources



Patients (GET, POST, PUT)
Retrieve the FHIR patient resource record details. Create or update a patient record rather than making multiple separate calls to the
objects in Salesforce.

Note: We recommend limiting the number of concurrent requests in your org to five. If you exceed this number, the Patients API
request can fail.
The update request deletes all child records associated with a patient and recreates them. For example, when you update a patient
record having three PersonName records and five Identifier records as child records, the API first deletes all the PersonName and Identifier
child records and then reinserts them. If something goes wrong while updating data, the API rolls back to prevent leaving orphan records
behind.
Resource for POST
/connect/health/patients


## Resource for GET, PUT

/connect/health/patients/${patientId}


## Example URI

/services/data/v53.0/connect/health/patients/001x0000005CQbtAAG

Available version
53.0
Requires Chatter
No
HTTP methods
GET, POST, PUT
Response body for GET
Patient Get Output
Request body for POST and PUT
JSON example
{
"active": true,
"identifier": [
{
"assigner": {
"referenceResource": "Organization",
"referenceId": "Org12345XYZ"
},
"type": {
"text": "Passport Number",
"coding": [
{
"display": "Passport number",
"code": "PPN",
"isActive": true,
"use": "Identifier"
}
]

<!-- page:1653 -->




},
"value": "ABCD5678XYZ"
}
],
"name": [
{
"use": "alias",
"text": "Charles Green",
"family": "Green",
"given": "Charles",
"prefix": "Mr.",
"suffix": "Sr."
}
],
"communication": [
{
"language": "English",
"preferenceRank": 1
}
],
"address": [
{
"use": "temp",
"type": "postal",
"line": "Green Household"
}
],
"telecom": [
{
"system": "email",
"value": "a@bc.com"
}
],
"gender": "male",
"birthDate": "2000-09-12T18:13:41Z",
"maritalStatus": "married",
"contact": [
{
"relationship": {
"coding": [
{
"display": "Partner"
}
]
},
"name": {
"use": "Temp",
"text": "Shawna Green",
"family": "Green",
"given": "Shawna",
"prefix": "Mrs.",
"suffix": "Jr."
},
"telecom": [

<!-- page:1654 -->

AFLS Overview                                                                                           Resources



{
"system": "email",
"value": "c@de.com"
},
{
"system": "phone",
"value": "12345678",
"use": "temp",
"rank": 1
}
],
"address": {
"use": "temp",
"type": "postal",
"line": "Green Household"
}
}
],
"generalPractitioner": [
{
"referenceResource": "Practitioner",
"referenceId": "PRAC789XYZ",
"relationship": "Plastic Surgeon"
}
],
"managingOrganisation": {
"referenceResource": "Organization",
"referenceId": "MI9007GBE"
}
}

Properties

Name             Type                Description                               Required or   Available
Optional      Version
active           Boolean             Indicates whether the patient record is   Optional      53.0
active or not.

additional       Custom Field Value Adds additional information to any fields Optional       53.0
Information      Input[]            not mapped in this API.

address          FHIR Address        The address of the patient.               Optional      53.0
Input[]

birthDate        String              The date of birth of the patient.         Optional      53.0

communication Patient                The languages of communication            Optional      53.0
Communication       associated with the patient.
Language Input[]

contact          Contact Party For   The contact associated with the patient Optional        53.0
Patient Input[]     record, modeled as a person account.
Contacts are connected to patients using

<!-- page:1655 -->

AFLS Overview                                                                                            Resources



Name             Type                Description                                Required or   Available
Optional      Version
the ContactContactRelation__c junction
object.

deceased         String              The date and time of the patient’s death. Optional       53.0
DateTime

gender           String              The gender of the patient.                 Optional      53.0

general      FHIR Reference          The practitioners associated with the     Optional       53.0
Practitioner Input[]                 patient, modeled as either person
accounts or Contacts and
HealthcareProvider records. Practitioners
are connected to patients using the
ContactContactRelation__c junction
object.

identifier       FHIR Identifier     The identifier information for the patient, Optional     53.0
Input[]             stored as Identifier records that reference
the patient record using their
Identifier.ParentRecordId
field.

managing     FHIR Reference          The organization that manages the         Optional       53.0
Organisation Input                   patient record, referenced using a lookup
to the Account object. Managing
organizations are connected to patients
using the AccountContactRelation
junction object.

maritalStatus String                 The current marital status of the patient. Optional      53.0

multiple     Integer                 The birth order of the patient, in the     Optional      53.0
BirthInteger                         event that the patient was a part of a
multiple birth event.

name             FHIR Human Name The names of the patient, stored as a          Optional      53.0
Input[]         PersonName record.

sourceSystemId String                The source system ID associated with a     Optional      53.0
patient record.

telecom          FHIR Contact Point Contact details of the patient, such as   Optional        53.0
Input[]            phone numbers and email addresses.
These contact details are stored as
ContactPointPhone records that
reference the patient records using their
ContactPointPhone.ParentId
field.

<!-- page:1656 -->

AFLS Overview                                                                                                               Resources




## Response body for POST

Patient Upsert Output
Response body for PUT
Patient Update Output



## Provider Search

Search for Healthcare providers and accounts based on a free-text input, either from internal Salesforce data or an external system. This
API returns account information, including healthcare providers and matching contact point addresses.
Resource
/connect/life-sciences/commercial/provider-search

Resource Example

https://yourInstance.salesforce.com/services/data/v66.0/connect/life-sciences/commercial/provider-search?externalSearch=true


Available version
65.0
HTTP methods
POST
Query parameters for POST

Parameter Name            Type                       Description                                          Required or Optional
externalSearch            Boolean                    Indicates whether to perform the search on an     Optional
external system (true) or not (false. By default,
this value is set to false and an internal search
is performed.


Request body for POST
{
"searchInput": "Acme.Corp Dermatology",
"countryCodes": [
"US",
"IN"
]
}


Name                      Type                       Description                                          Required
searchInput               String                     Free-text input to search for accounts.              Required

countryCodes              List<String>               List of country codes to restrict the search to.     Required



## Response body for POST

Provider Search Output on page 1845

<!-- page:1657 -->

AFLS Overview                                                                                                                    Resources




## Providers

Use these resources to create practitioner or facility records, or update existing fields in provider records and insert new fields.



## Create Provider

This API creates healthcare provider records along with the corresponding Account records (for facilities) or Contact records (for
practitioners). You can also use it to manage information about practitioner credentials.
Upsert Provider
This business-level API enables you to upsert data in Salesforce to represent a practitioner and all the objects and fields in the Provider
data model relevant to a Practitioner, such as NPI, provider specialty, and provider taxonomy.



## Create Provider

This API creates healthcare provider records along with the corresponding Account records (for facilities) or Contact records (for
practitioners). You can also use it to manage information about practitioner credentials.



## Use Cases

The Create Provider API is mainly intended to support the operations of payer employees who handle provider records, such as
credentialing specialists.
Prerequisites
Notes about lookups
Supported Fields
The Create provider API supports all standard and custom fields.
Resources
Details and JSON samples
Code Samples
Here are some JSON samples that you can use as a starting point to build request bodies and interpret responses.
Error Handling
This API supports bulk transactions, but Healthcare Provider records are committed one at a time. An input request can succeed in
full or in part. Each provider included in the request succeeds or fails on its own.



## Use Cases

The Create Provider API is mainly intended to support the operations of payer employees who handle provider records, such as credentialing
specialists.


Credentialing Specialist
Goals:
- Create provider records.
- Collect and store credential-related data.
Activities:
- When the provider has gone through the lead process, add maximum credential information to it so supervisor can make an
approval decision.

<!-- page:1658 -->

AFLS Overview                                                                                                             Resources


- When a new provider is added to the Health Plan Network, add its contact to the system so call center agent can direct patients
to that new provider.
- When new information is received about a provider, edit its contact info so the provider information is up to date.
Success Measures:
- Account, Contact, and HealthCareProvider records are created.
- Records in related entities (optionally, for example in License, Person Education, Operating Hours, Specialty records) can be
created if customer provides values in the JSON.
- Data created can be viewed and edited according to user’s access permission.


Prerequisites
Notes about lookups
To ensure uniqueness, when you create a HealthcareProviderSpecialty record with a SpecialtyId lookup field, a CareSpecialty record must
exist with the CareSpecialty.SpecialtyCode field populated.
When you create a HealthcareProviderTaxonomy record, a CareTaxonomy.TaxonomyCode field must exist.
When you create a HealthcareFacilityNetworkSame record, a HealthcarePayerNetwork.Code field must exist.
You can look up to Operating Hours records if they exist, or create Operating Hours records via API.
For all other lookups, information should be provided in this format:
"AccountId":{
"value":"101",
"referenceField":"HCGA__SourceSystemId__c"
}

In this example,
- AccountId is the API name of the lookup field you want to populate.
- referenceField is the field on the lookup object to establish the relationship. You can choose any reference field for these
lookups as long as the values are unique.
- value is the value of the referenceField.
When a single request includes multiple lookups to an object, use the same reference field for all those lookups.
For example, suppose you have created custom lookup fields to the Account object in HealthcareProviderSpecialty and
healthcareTaxonomy. The lookup fields are called C_Account1 and C_Account2. Account1 record has its sourceSystem field set to A1,
and Account2 record has the sourceSystem field set to A2. You want C_Account1 to be populated with the Account1 record and
C_Account2 to be populated with Account2. The reference field to find the account record is SourceSystem. If sourceSystem is A1, you
get the Account1 record, and if sourceSystem is A2 you get the Account2 record.
HealthcareFacilityNetwork has lookups to Account, Practitioner and HealthcarePractitionerFacility. You can create a
HealthcareFacilityNetwork record in an input request in any of these ways:
- Create a record with an account lookup for the facility you are creating.
- Create a record with a practitioner lookup for the practitioner you are creating.
- Create a record with a lookup to HealthcarePractitionerFacility for a practitioner at a given facility.
Apex is not directly supported. However, you can call this API using the HttpRequest Apex class.



## Supported Fields

The Create provider API supports all standard and custom fields.

<!-- page:1659 -->

AFLS Overview                                                                                                                 Resources


Any field that is required in the object specification is required in JSON request bodies for this API.
All fields specified in your JSON request body must be writable. The user must have read-write access.
If no user input is provided, the Name field is populated automatically using this format:
HealthcareProviderSpecialty entity: Jimmy James Specialty - 10-20-20 11:22:33

Note:
- Users can edit the Name field after it has been auto-populated.
- When a user enters data from the UI, the Name field is not auto-populated.

If person accounts are enabled, use the recordType parameter in your input to identify a person account.
If you are updating a practitioner record that has already been created, you only need practitioner ID, not Account or Contact.



## Resources

Details and JSON samples
Resource
/connect/health/providers

Available version
49.0 and later
Authentication
Authorization: Bearer token

Note: The Lightning Platform REST API supports OAuth 2.0 (an open protocol to allow secure API authorization). See Authorize
Apps with OAuth in Salesforce Help for more details.
HTTP methods
POST


Supported Objects

Object                                        Required       Auto-filled           Required Fields Input/Output JSON key
Name field                            name
Account (for facility) or Contact (for        No             NA                                          account/contact
practitioner)

AccountContactRelationship                    No             Yes                                         providerAffliations

Accreditation                                 No             Yes                   Name                  accreditations

Award                                         No             Yes                   Name                  awards

BoardCertification                            No             Yes                   Name                  boardCertifications

BusinessLicense                               No             Yes                   Name                  businessLicenses

CareProviderAdverseAction                     No             Yes                   Name                  careProviderAdverseActions

CareProviderFacilitySpecialty                 No             Yes                   Name                  facilitySpecialties

<!-- page:1660 -->

AFLS Overview                                                                                                     Resources



Object                                     Required      Auto-filled         Required Fields Input/Output JSON key
Name field                          name
ContactProfile                             No            Yes                                     contactProfile

HealthcareFacilityNetwork                  No            Yes                 Name                facilityNetworks

HealthcarePractitionerFacility             No            Yes                 Name                practitionerFacilities

HealthcareProvider                         Yes           Yes                 Name                healthcareProvider

HealthcareProviderNpi                      No            Yes                 Name                npi

HealthcareProviderSpecialty                No            Yes                 Name                specialties

HealthcareProviderTaxonomy                 No            Yes                 Name                taxonomies

HealthcareProviderService                  No            Yes                                     providerServices

HlthCareProvTreatedCondition               No            Yes                                     treatedConditions

Identifier                                 No

OperatingHours                             No            Yes                 Name, TimeZone      operatingHours

PersonEducation (Practioner only)                        Yes                 Name                personEducations

PersonEmployment (Practitioner only)                     Yes                 Name,             personEmployments
RelatedPerson
(Account/Contact)

TimeSlots                                  No            No                  OperatingHours,     TimeSlots
StartTime,
EndTime,
DayOfWeek




## Code Samples

Here are some JSON samples that you can use as a starting point to build request bodies and interpret responses.
- Associate a practitioner with a facility. Each Contact record must have an associated Account record.
- Use the API name of the field, such as RecordType, not the label, such as Record Type.
- Strings with trailing spaces aren’t supported.
- The comments in these samples aren't meant to be valid JSON.


Sample Input: Create a Practitioner
{
"providers": [{
"type": "practitioner",
"contact": {
"fields": {
"FirstName": "Rachel",
"LastName": "Green",
"Description" : "Rachel is a specialist surgeon."

<!-- page:1661 -->

AFLS Overview                                                         Resources



}
},
"healthcareProvider": {
"fields": {
"ProviderType": "Medical Doctor",
"ProviderClass": "Solo Practitioner"
}
}
}]
}



## Sample Input - Create a Practitioner from an Existing Contact

Note: In the sample input, the reference field can be any unique field.

{
"providers": [{
"type": "practitioner",
"contact": {
"id": {
"value": "003RM000007FnBvYAK",
"referenceField": "Id"
}
},
"healthcareProvider": {
"fields": {
"ProviderType": "Physician",
"EffectiveFrom": "2019-01-01 00:00:00"
}
}
}]
}


Sample Input - Create a Practitioner as a Person Account
{
"providers": [
{
"type": "practitioner",
"account":{
"fields":{
"FirstName":"Jimmy",
"LastName":"James",
"Email":"jj@newsradio.com",
"About": "Jimmy James is a doctor.",
"RecordType": "PersonAccount"
}
},
"healthcareProvider":{
"fields":{
"ProviderType":"Physician",
"EffectiveFrom":"2019-01-01",
}

<!-- page:1662 -->

AFLS Overview                                                        Resources



}
]
}



## Sample Input - Create a Practitioner to Be Synced for Provider Search

Note: To use the following code sample, ensure that the org has:
- A facility Account record (Id 001RM000005J5UTYA0 in the code sample)
- CareSpecialty records (SpecialtyCode 15 and 22 in the code sample)

{
"providers": [{
"type": "practitioner",
"contact": {
"fields": {
"FirstName": "Will",
"LastName": "Doc",
"Email": "WillDoc@gmail.com",
"Description": "Will is a doctor."
}
},
"healthcareProvider": {
"fields": {
"ProviderType": "Medical Doctor",
"ProviderClass": "Solo Practitioner"
}
},
"npis": [{
"fields": {
"Npi": "WD-14",
"NpiType": "Individual",
"IsActive": true
}
}],
"specialties": [{
"fields": {
"SpecialtyId": {
"value": "15",
"referenceField": "SpecialtyCode"
},
"SpecialtyRole": "Specialist",
"IsActive": true
}
},
{
"fields": {
"SpecialtyId": {
"value": "22",
"referenceField": "SpecialtyCode"
},
"SpecialtyRole": "Dual",
"IsActive": true
}

<!-- page:1663 -->

AFLS Overview                                                   Resources



}
],
"practitionerFacilities": [{
"fields": {
"AccountId": {
"value": "001RM000005J5UTYA0",
"referenceField": "Id"
},
"IsActive": true
},
"facilityNetworks": [{
"fields": {
"PayerNetworkId": {
"value": "PPO",
"referenceField": "Code"
},
"IsActive": true,
"LowestValidAge": 0,
"PanelStatus": "Panel open",
"PanelLimit": 100
}
},
{
"fields": {
"PayerNetworkId": {
"value": "HMO",
"referenceField": "Code"
},
"IsActive": true,
"GenderRestriction": "Female",
"LowestValidAge": 0,
"PanelStatus": "Panel open",
"PanelLimit": 100
}
}
],
"facilitySpecialties": [{
"fields": {
"SpecialtyId": {
"value": "15",
"referenceField": "SpecialtyCode"
},
"IsPrimarySpecialty": true,
"SpecialtyRole": "Specialist",
"IsActive": true
}
}]
}
]
}
]
}

<!-- page:1664 -->

AFLS Overview                                                Resources


Sample Input - Create a Facility
{
"providers": [{
"type": "facility",
"account": {
"fields": {
"Name": "Geller Clinic",
"Description": "Geller Clinic is an eye clinic.",
"Website": "gellerclinic.com"
},
"operatingHours": {
"fields": {
"Name": "GellerClinicHours",
"Description": "MWTF8-5"
},
"timeSlots": [{
"fields": {
"DayOfWeek": "Monday",
"StartTime": "09:00:00",
"EndTime": "17:30:00"
}
}]
}
},
"healthcareProvider": {
"fields": {
"ProviderType": "MedicalDoctor",
"EffectiveFrom": "2019-01-01"
}
}
}]
}


Sample Input - Create a Facility from an Existing Account
{
"providers": [{
"type": "facility",
"account": {
"id": {
"value": "Geller Clinic",
"referenceField": "Name"
}
},
"healthcareProvider": {
"fields": {
"ProviderType": "MedicalDoctor",
"EffectiveFrom": "2019-01-01"
}
}
}]
}

<!-- page:1665 -->

AFLS Overview                                                                                                           Resources



## Sample Input - Create a Facility to Be Synced for Provider Search

Note: To use the following code sample, ensure that the org has a Specialty record (SpecialtyCode 15 in the code sample).

{
"providers": [{
"type": "facility",
"account": {
"fields": {
"Name": "UCSF Hospital",
"Description": "Test UCSF hospital",
"Website": "UCSFHospital21@test.com"
},
"operatingHours": {
"fields": {
"Name": "UCSF Hospital Hours",
"Description": "MWTF8-5"
},
"timeSlots": [{
"fields": {
"DayOfWeek": "Monday",
"StartTime": "09:00:00",
"EndTime": "17:30:00"
}
}]
}
},
"healthcareProvider": {
"fields": {
"ProviderType": "Hospital",
"Status": "Active",
"EffectiveFrom": "2019-01-01"
}
},
"npis": [{
"fields": {
"Npi": "UCSFH21",
"NpiType": "Organization",
"IsActive": true
}
}],
"specialties": [{
"fields": {
"SpecialtyId": {
"value": "15",
"referenceField": "SpecialtyCode"
},
"IsPrimarySpecialty": true,
"SpecialtyRole": "Specialist",
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2036-01-01",
"IsActive": true
}
}],
"boardCertifications": [{

<!-- page:1666 -->

AFLS Overview                                                                                                 Resources




## "fields": {

"CertificationType": "Dermatology",
"ExpirationDate": "2030-11-12",
"Status": "Certified"
}
}]
}]
}



## Sample Input - Create a Practitioner with All Possible Related Objects

Note: Before you use the code sample, create existing lookup records in your org for the following objects:
- Care Specialty
- Care Taxonomy
- Operating Hours
- Healthcare Payer Network
- Account for Healthcare Practitioner Facility

[
{
"providers": [
{
"type": "practitioner",
"contact": {
"fields": {
"FirstName": "Jimmy",
"LastName": "James",
"Email": "jj@newsradio.com",
"Description": "Jimmy James is a doctor.",
"AccountId": "001xx000003GbOJAA0"
}
},
"contactProfile": {
"fields": {
"Ethnicity": "Asian.",
"Race": "Asian"
}
},
"healthcareProvider": {
"fields": {
"ProviderType": "Physician",
"EffectiveFrom": "2019-01-01",
"ProviderPhotoId": "069xx0000004CDsAAM"
}
},
"providerAffiliations": [
{
"fields": {
"AccountId": {
"value": "001xx000003GbPvAAK",
"referenceField": "Id"

<!-- page:1667 -->




}
}
}
],
"treatedConditions": [
{
"fields": {
"ConditionId": {
"value": "118xx000000MbKkAAK",
"referenceField": "Id"
},
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2029-01-01",
"IsActive": true
}
}
],
"providerServices": [
{
"fields": {
"HealthcareServiceId": {
"value": "13xxx0000004C92AAE",
"referenceField": "Id"
},
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2029-01-01",
"IsActive": true
}
}
],
"npis": [
{
"fields": {
"Npi": "12345123",
"NpiType": "Individual",
"IsActive": true
}
}
],
"specialties": [
{
"fields": {
"SpecialtyId": {
"value": "20",
"referenceField": "SpecialtyCode"
},
"IsPrimarySpecialty": true,
"SpecialtyRole": "Specialist",
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2020-01-01",
"IsActive": true
}
},
{

<!-- page:1668 -->




"fields": {
"SpecialtyId": {
"value": "24",
"referenceField": "SpecialtyCode"
},
"IsPrimarySpecialty": false,
"SpecialtyRole": "Dual",
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2020-01-01",
"IsActive": true
}
}
],
"taxonomies": [
{
"fields": {
"TaxonomyId": {
"value": "207X00000X",
"referenceField": "TaxonomyCode"
},
"IsPrimaryTaxonomy": true,
"SourceSystemIdentifier": "",
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2020-01-01",
"IsActive": true
}
},
{
"fields": {
"TaxonomyId": {
"value": "208200000X",
"referenceField": "TaxonomyCode"
},
"IsPrimaryTaxonomy": false,
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2020-01-01",
"IsActive": true
}
}
],
"facilityNetworks": [
{
"fields": {
"IsActive": true,
"GenderRestriction": "None",
"HighestValidAge": 99,
"LowestValidAge": 10,
"PanelStatus": "Panel open",
"PanelLimit": 10
}
}
],
"facilityServices": [
{

<!-- page:1669 -->





## "fields": {

"HealthcareServiceId": {
"value": "13xxx0000004C92AAE",
"referenceField": "Id"
},
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2029-01-01",
"IsActive": true
}
}
],
"practitionerFacilities": [
{
"fields": {
"AccountId": {
"value": "001xx000003GdxzAAC",
"referenceField": "Id"
},
"LowestValidAge": 12,
"OperatingHoursId": {
"value": "123",
"referenceField": "phone__c"
}
},
"providerFacilityServices": [
{
"fields": {
"HealthcareServiceId": {
"value": "13xxx0000004C92AAE",
"referenceField": "Id"
},
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2029-01-01",
"IsActive": true
}
}
],
"facilityNetworks": [
{
"fields": {
"PayerNetworkId": {
"value": "EB0012397",
"referenceField": "Code"
},
"IsActive": true,
"GenderRestriction": "Male",
"HighestValidAge": 99,
"LowestValidAge": 5,
"PanelStatus": "Panel open",
"PanelLimit": 10
}
},
{
"fields": {

<!-- page:1670 -->




"PayerNetworkId": {
"value": "UH23029",
"referenceField": "Code"
},
"IsActive": true,
"GenderRestriction": "Female",
"HighestValidAge": 99,
"LowestValidAge": 5,
"PanelStatus": "Panel open",
"PanelLimit": 10
}
}
],
"facilitySpecialties": [
{
"fields": {
"SpecialtyId": {
"value": "20",
"referenceField": "SpecialtyCode"
},
"IsPrimarySpecialty": true,
"SpecialtyRole": "Specialist"
}
}
]
},
{
"fields": {
"AccountId": {
"value": "001xx000003GdxzAAC",
"referenceField": "Id"
},
"InitialStartDate": "2018-05-12"
},
"facilityNetworks": [
{
"fields": {
"PayerNetworkId": {
"value": "UH23029",
"referenceField": "Code"
},
"IsActive": true,
"GenderRestriction": "Male",
"HighestValidAge": 99,
"LowestValidAge": 5,
"PanelStatus": "Panel open",
"PanelLimit": 10
}
},
{
"fields": {
"PayerNetworkId": {
"value": "UH23039",
"referenceField": "Code"

<!-- page:1671 -->




},
"IsActive": true,
"GenderRestriction": "Male",
"HighestValidAge": 99,
"LowestValidAge": 5,
"PanelStatus": "Panel open",
"PanelLimit": 10
}
}
],
"facilitySpecialties": [
{
"fields": {
"SpecialtyId": {
"value": "28",
"referenceField": "SpecialtyCode"
},
"IsPrimarySpecialty": true,
"SpecialtyRole": "Dual"
}
}
]
}
],
"boardCertifications": [
{
"fields": {
"CertificationType": "Dermatology",
"Status": "Certified"
}
}
],
"awards": [
{
"fields": {
"AwardDate": "2019-08-15 17:30:00",
"AwardedBy": "Barack Obama"
}
}
],
"businessLicenses": [
{
"fields": {
"Name": "Pediatric lab technician",
"Status": "Draft"
}
}
],
"accreditations": [
{
"fields": {
"Type": "Hospital",
"SubType": "Children's",
"AccreditingBody": "Joint Commission",

<!-- page:1672 -->

AFLS Overview                                            Resources



"Status": "Accreditated",
"SourceSystem": "Aetna-SF",
"SourceSystemIdentifier": "abcd1234"
}
},
{
"fields": {
"Type": "Clinic",
"SubType": "Children's",
"AccreditingBody": "Joint Commission",
"Status": "Verifying"
}
}
],
"personEducations": [
{
"fields": {
"Name": "MedicalDegree",
"EducationLevel": "Masters",
"IsActive": true
}
}
],
"personEmployments": [
{
"fields": {
"AnnualIncome": "400000",
"EmployerPhone": "4148767000"
}
}
],
"careProviderAdverseActions": [
{
"fields": {
"AccreditationId": {
"value": "123",
"referenceField": "SourceSystemIdentifier"
},
"ActionType": "Disciplinary",
"Status": "Verified"
}
},
{
"fields": {
"AccreditationId": {
"value": "123",
"referenceField": "SourceSystemIdentifier"
},
"ActionType": "Disciplinary",
"Status": "Verified"
}
}
]
}

<!-- page:1673 -->

AFLS Overview                                           Resources



]
},
{
"providers": [
{
"type": "practitioner",
"contact": {
"fields": {
"FirstName": "Rachel",
"LastName": "Green",
"Description": "Rachel is a specialist surgeon."
}
},
"contactProfile": {
"fields": {
"Ethnicity": "Asian.",
"Race": "Asian"
}
},
"healthcareProvider": {
"fields": {
"ProviderType": "Medical Doctor",
"ProviderClass": "Solo Practitioner",
"ProviderPhotoId": "069xx0000004CDsAAM"
}
},
"providerAffiliations": [
{
"fields": {
"AccountId": {
"value": "001xx000003GbPvAAK",
"referenceField": "Id"
}
}
}
],
"treatedConditions": [
{
"fields": {
"ConditionId": {
"value": "118xx000000MbKkAAK",
"referenceField": "Id"
},
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2029-01-01",
"IsActive": true
}
}
],
"providerServices": [
{
"fields": {
"HealthcareServiceId": {
"value": "13xxx0000004C92AAE",

<!-- page:1674 -->




"referenceField": "Id"
},
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2029-01-01",
"IsActive": true
}
}
],
"practitionerFacilities": [
{
"fields": {
"AccountId": {
"value": "001xx000003GYikAAG",
"referenceField": "Id"
},
"IsActive": true
},
"facilityNetworks": [
{
"fields": {
"PayerNetworkId": {
"value": "PPO",
"referenceField": "Code"
},
"IsActive": true,
"LowestValidAge": 0,
"PanelStatus": "Panel open",
"PanelLimit": 100
}
},
{
"fields": {
"PayerNetworkId": {
"value": "HMO",
"referenceField": "Code"
},
"IsActive": true,
"GenderRestriction": "Female",
"LowestValidAge": 0,
"PanelStatus": "Panel open",
"PanelLimit": 100
}
}
],
"providerFacilityServices": [
{
"fields": {
"HealthcareServiceId": {
"value": "13xxx0000004C92AAE",
"referenceField": "Id"
},
"EffectiveFrom": "2019-01-01",
"EffectiveTo": "2029-01-01",
"IsActive": true

<!-- page:1675 -->

AFLS Overview                                                                 Resources



}
}
],
"facilitySpecialties": [
{
"fields": {
"SpecialtyId": {
"value": "15",
"referenceField": "SpecialtyCode"
},
"IsPrimarySpecialty": true,
"SpecialtyRole": "Specialist",
"IsActive": true
}
}
]
}
]
}
]
}
]


Sample Output Response for Creating a Practitioner with All Possible Related Objects
{
"providers": [
{
"code": "201",
"isSuccess": true,
"message": "1 successfully processed - 0 failed",
"providers": [
{
"accreditations": [
{
"fields": {},
"id": "0Vlxx0000004CSOCA2"
},
{
"fields": {},
"id": "0Vlxx0000004CSPCA2"
}
],
"awards": [
{
"fields": {},
"id": "0cFxx00000000XtEAI"
}
],
"boardCertifications": [
{
"fields": {},
"id": "0YSxx00000000b7GAA"
}

<!-- page:1676 -->




],
"businessLicenses": [
{
"fields": {},
"id": "0cExx00000000BJEAY"
}
],
"careProviderAdverseActions": [
{
"fields": {},
"id": "0etxx00000000HlAAI"
},
{
"fields": {},
"id": "0etxx00000000HmAAI"
}
],
"code": "201",
"contact": {
"fields": {},
"id": "003xx000004WmIiAAK"
},
"contactProfile": {
"fields": {},
"id": "11Axx0000004bCTEAY"
},
"facilityNetworks": [
{
"fields": {},
"id": "0bYxx00000000srEAA"
}
],
"healthcareProvider": {
"fields": {},
"id": "0cmxx00000003HFAAY"
},
"message": "SUCCESS",
"npis": [
{
"fields": {},
"id": "0bNxx00000000rFEAQ"
}
],
"personEducations": [
{
"fields": {},
"id": "0Srxx0000004CIiCAM"
}
],
"personEmployments": [
{
"fields": {},
"id": "0Stxx0000004CPACA2"
}

<!-- page:1677 -->




],
"practitionerFacilities": [
{
"facilityNetworks": [
{
"fields": {},
"id": "0bYxx00000000ssEAA"
},
{
"fields": {},
"id": "0bYxx00000000stEAA"
}
],
"facilitySpecialties": [
{
"fields": {},
"id": "0bXxx00000000ZVEAY"
}
],
"fields": {},
"id": "0bSxx00000000srEAA",
"identifiers": [],
"providerFacilityServices": [
{
"fields": {},
"id": "15Mxx0000004CgvEAE"
}
]
},
{
"facilityNetworks": [
{
"fields": {},
"id": "0bYxx00000000suEAA"
},
{
"fields": {},
"id": "0bYxx00000000svEAA"
}
],
"facilitySpecialties": [
{
"fields": {},
"id": "0bXxx00000000ZWEAY"
}
],
"fields": {},
"id": "0bSxx00000000ssEAA",
"identifiers": [],
"providerFacilityServices": []
}
],
"providerAffiliations": [
{

<!-- page:1678 -->




"fields": {},
"id": "07kxx0000004D0HAAU"
}
],
"providerServices": [
{
"fields": {},
"id": "15Mxx0000004CguEAE"
}
],
"specialties": [
{
"fields": {},
"id": "0bOxx00000000WHEAY"
},
{
"fields": {},
"id": "0bOxx00000000WIEAY"
}
],
"taxonomies": [
{
"fields": {},
"id": "0bPxx00000000WHEAY"
},
{
"fields": {},
"id": "0bPxx00000000WIEAY"
}
],
"treatedConditions": [
{
"fields": {},
"id": "1K4xx0000004D3UCAU"
}
],
"type": "practitioner"
}
]
},
{
"code": "201",
"isSuccess": true,
"message": "1 successfully processed - 0 failed",
"providers": [
{
"accreditations": [],
"awards": [],
"boardCertifications": [],
"businessLicenses": [],
"careProviderAdverseActions": [],
"code": "201",
"contact": {
"fields": {},

<!-- page:1679 -->




"id": "003xx000004Wj6KAAS"
},
"contactProfile": {
"fields": {},
"id": "11Axx0000004aebEAA"
},
"facilityNetworks": [],
"healthcareProvider": {
"fields": {},
"id": "0cmxx0000000149AAA",
"providerServices": [
{
"fields": {},
"id": "15Mxx0000004CLwEAM"
}
],
"treatedConditions": [
{
"fields": {},
"id": "1K4xx0000004ClkCAE"
}
]
},
"message": "SUCCESS",
"npis": [],
"personEducations": [],
"personEmployments": [],
"practitionerFacilities": [
{
"facilityNetworks": [
{
"fields": {},
"id": "0bYxx00000000CvEAI"
},
{
"fields": {},
"id": "0bYxx00000000CwEAI"
}
],
"facilitySpecialties": [
{
"fields": {},
"id": "0bXxx00000000BJEAY"
}
],
"fields": {},
"id": "0bSxx00000000CvEAI",
"identifiers": [],
"providerFacilityServices": [
{
"fields": {},
"id": "15Mxx0000004CLxEAM"
}
]

<!-- page:1680 -->




}
],
"specialties": [],
"taxonomies": [],
"type": "practitioner"
}
]
}
]
}


Sample Output Response - Partial Success
{
"code": "207",
"message": "all good",
"success": true,
"providers": [
{
"type": "facility",
"code" : "",
"message" : "Specialty Code "409" not found"
"success" : false,
"healthcareProvider" : {
"fields":{
"ProviderType":"Physician",
"EffectiveFrom":"2019-01-01"
}
}
},
{
"type": "practitioner",
"code": "200",
"message": "all good",
"success": true,
"Contact":{
"id": "<contact id>"
},
"healthcareProvider":{
"id": "provider id"
"fields":{
"ProviderType":"Physician",
"EffectiveFrom":"2019-01-01",
"Hc4a__language__c" : "Spanish",
"Hc4a__emergencyContactId__c" : {
"value" : "SF21083209",
"referenceField" : "id"
}
}
},
"npis":[{
"id": "npi id"
}],
"specialties":[

<!-- page:1681 -->

AFLS Overview                                                                                                                Resources



{
"id": "specialty id"
}
],
"taxonomies":[
{
"id": "taxonomy id"
}
],
"practitionerFacilities":[
{
"id": "pract. fac. id",
"facilityNetworks": [
{
"id": "payer. network id"
},
{
"id": "payer. network id"
}
],
"facilitySpecialties": [
{
"id": "fac. spec. id"
}
]
}
],
"boardCertifications" : [
{
"id": "board certification id"
}
],
"awards" : [
{
"id": "award id"
}
]
}
]
}



## Error Handling

This API supports bulk transactions, but Healthcare Provider records are committed one at a time. An input request can succeed in full
or in part. Each provider included in the request succeeds or fails on its own.
For each record requested, HealthcareProvider creation is rolled back, along with any Account or Contact records created, at the first
error for the request. If one related object fails, the remaining related objects are not attempted.
For example, if an input request contains 50 provider records and 10 of those records fail, the remaining 40 records are created. You only
need to resubmit the failed providers, not the whole request.

<!-- page:1682 -->

AFLS Overview                                                                                                                    Resources


Response Codes

Error Code                                        Http Status         Error Message
Code
Bad Request                                       400                 Your request contains invalid data types. Correct the value in
section <section name>, field <JSON key>.

INSUFFICIENT_ACCESS                               403                 You don't have permission to perform this action on <object
name> records. Contact your Salesforce admin for help.

"ResourceApiException                                                 Account: bad field names on insert/update call: Namea
CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY"

"ResourceApiException                                                 sObject type 'HealthcareProvider' is not supported. If you are
CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY"                                 attempting to use a custom object, be sure to append the '__c'
after the entity

"ResourceApiException                                                 Required fields are missing: [Name]
CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY"

Exception                                                             Invalid format of the given date-time object <input date/time>

Bad Request                                       400                 There is no input in the request body. Resubmit the request with
valid input in the request body.

Bad Request                                       400                 We couldn't parse the JSON input. Restructure the JSON and try
again.

Too Many Requests                                 429                 Your request contains <XXX> records. Reduce the number of
records to fewer than <YYY> and try again.

Wrong Record Type                                                     An Account record is required for a facility. Resubmit the request
with an Account record.

Too Many Record Types                                                 Resubmit the request with an Account record or a Contact record
but not both.

Specify Provider Type                                                 Provider type is not specified. Resubmit the request indicating
provider type as facility or practitioner.

Bad Request                                       400                 "Out of Array of allowed Values(picklist) - for static picklist"

PersonAccount isnt enabled in the org, if input request is for a PA

Lookup not found, Specialty Code for eg

Bad Request                                       400                 Missing required fields on standard objects




## Upsert Provider

This business-level API enables you to upsert data in Salesforce to represent a practitioner and all the objects and fields in the Provider
data model relevant to a Practitioner, such as NPI, provider specialty, and provider taxonomy.
Use this API to support single record create (such as CAQH integration) for multiple providers, along with all their associated data.

<!-- page:1683 -->

AFLS Overview                                                                                                               Resources



## Use Cases

Upsert means updating data in healthcare provider record fields and inserting new fields with a single call. For example, you may want
to update the operating hours of an existing provider account at the same time as you specify provider type.
- When a group of providers is up for re-credentialing due to changes in specialty or board certifications, bulk-update existing provider
records.
- When Hospital Group ABC acquires Hospital Group XYZ, move the providers' affiliation from ABC to XYZ.
- When Hospital Group ABC extends its hours with an additional working day at one of its locations, bulk-update the operating hours
for all the providers serving that location.



## Supported Fields

The upsert provider API supports all standard and custom fields.
Resources
Details and JSON samples
Code Samples
Here are some JSON samples you can use as a starting point for building request bodies and interpreting responses.
Error Handling
This API supports bulk transactions, but Healthcare Provider records are committed one at a time. An input request can succeed in
full or in part. Each provider included in the request succeeds or fails on its own.



## Supported Fields

The upsert provider API supports all standard and custom fields.
Any field that is required in the object specification is required in JSON request bodies for this API.
All fields specified in your JSON request body must be writable. The user must have read-write access.
If no user input is provided, the Name field is populated automatically using this format:
HealthcareProviderSpecialty entity: Jimmy James Specialty - 10-20-20 11:22:33

Note:
- Users can edit the Name field after it has been auto-populated.
- When a user enters data from the UI, the Name field is not auto-populated.

If person accounts are enabled, use the recordType parameter in your input to identify a person account.
If you are updating a practitioner record that has already been created, you only need practitioner ID, not Account or Contact.



## Resources

Details and JSON samples
Resource
/connect/health/providers

Available version
52.0 and later
Authentication
Authorization: Bearer token

<!-- page:1684 -->

AFLS Overview                                                                                                                Resources



Note: The Lightning Platform REST API supports OAuth 2.0 (an open protocol to allow secure API authorization). See Authorize
Apps with OAuth in Salesforce Help for more details.
HTTP methods
PATCH


Supported Objects

Object                                         Required       Auto-filled         Required Fields Input/Output JSON key
Name field                          name
Account (for facility) or Contact (for         No             NA                                      account/contact
practitioner)

Accreditation                                  No             Yes                 Name                accreditations

Award                                          No             Yes                 Name                awards

BoardCertification                             No             Yes                 Name                boardCertifications

BusinessLicense                                No             Yes                 Name                businessLicenses

CareProviderAdverseAction                      No             Yes                 Name                careProviderAdverseActions

CareProviderFacilitySpecialty                  No             Yes                 Name                facilitySpecialties

HealthcareFacilityNetwork                      No             Yes                 Name                facilityNetworks

HealthcarePractitionerFacility                 No             Yes                 Name                practitionerFacilities

HealthcareProvider                             Yes            Yes                 Name                healthcareProvider

HealthcareProviderNpi                          No             Yes                 Name                npi

HealthcareProviderSpecialty                    No             Yes                 Name                specialties

HealthcareProviderTaxonomy                     No             Yes                 Name                taxonomies

Identifier                                     No

OperatingHours                                 No             Yes                 Name, TimeZone      operatingHours

PersonEducation (Practioner only)                             Yes                 Name                personEducations

PersonEmployment (Practitioner only)                          Yes                 Name,             personEmployments
RelatedPerson
(Account/Contact)

TimeSlots                                      No             No                  OperatingHours,     TimeSlots
StartTime,
EndTime,
DayOfWeek




## Code Samples

Here are some JSON samples you can use as a starting point for building request bodies and interpreting responses.

<!-- page:1685 -->

AFLS Overview                                                                                                                   Resources


You can create either a practitioner or a facility. A facility is always associated with an account. A practitioner can be associated with a
contact or a person account.
- You can edit up to 25 provider records at a time.
- Use the API name of the field (such as RecordType), not the label (such as "Record Type").
- Strings with trailing spaces are not supported.

Note: The comments in these samples are for documentation purposes only and aren't meant to be valid JSON.


Sample Input: Update an Existing Practitioner Field and Insert New Practitioner Fields
Here's what your JSON request body might look like when you change the last name on a practitioner's person account, and also specify
that the practitioner is a doctor in a solo practice.
{
"providers":[
{
"type":"practitioner",
"account":{
"id":{
"value":"001B000001MVfilIAD",
"referenceField":"Id"
},
"fields":{
"LastName":"Stewart1"
}
}
"healthcareProvider":{
"fields":{
"ProviderType":"Medical Doctor",
"ProviderClass":"Solo Practitioner"
}
}
}
]
}

Note: In this case, we are creating a practitioner as a person account.


Sample Input: Update an Existing Facility and Practitioner Field for a Provider and Insert New Fields
Here's what it might look like when you change the last name of a practitioner and also specify that the practitioner is a doctor in a solo
practice. (A solo practice is treated as a facility with a single practitioner attached to it.)
{
"providers":[
{
"type":"facility",
"account":{
"id":{
"value":"001B000001MVfhEIAT",
"referenceField":"Id"
},

<!-- page:1686 -->

AFLS Overview                                                                                                                  Resources




## "fields":{

"Name":"Public Hospital 1"
}
},
"healthcareProvider":{
"fields":{
"ProviderType":"Medical Doctor",
"ProviderClass":"Solo Practitioner"
}
}
},
{
"type":"practitioner",
"contact":{
"id":{
"value":"003B000000IqubiIAB",
"referenceField":"Id"
},
"fields":{
"LastName":"King1"
}
},
"healthcareProvider":{
"fields":{
"ProviderType":"Medical Doctor",
"ProviderClass":"Solo Practitioner"
}
}
}
]
}

Note: In this case, we are creating a practitioner as a contact on an account. If we had set type to practitioner and specified an
account, we would be creating a person account.



## Error Handling

This API supports bulk transactions, but Healthcare Provider records are committed one at a time. An input request can succeed in full
or in part. Each provider included in the request succeeds or fails on its own.
For each record requested, HealthcareProvider creation is rolled back, along with any Account or Contact records created, at the first
error for the request. If one related object fails, the remaining related objects are not attempted.
For example, if an input request contains 50 provider records and 10 of those records fail, the remaining 40 records are created. You only
need to resubmit the failed providers, not the whole request.


Response Codes

Error Code                                        Http Status         Error Message
Code
Bad Request                                       400                 Your request contains invalid data types. Correct the value in
section <section name>, field <JSON key>.

<!-- page:1687 -->

AFLS Overview                                                                                                                  Resources



Error Code                                       Http Status        Error Message
Code
INSUFFICIENT_ACCESS                              403                You don't have permission to perform this action on <object
name> records. Contact your Salesforce admin for help.

"ResourceApiException                                               Account: bad field names on insert/update call: Namea
CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY"

"ResourceApiException                                               sObject type 'HealthcareProvider' is not supported. If you are
CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY"                               attempting to use a custom object, be sure to append the '__c'
after the entity

"ResourceApiException                                               Required fields are missing: [Name]
CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY"

Exception                                                           Invalid format of the given date-time object <input date/time>

Bad Request                                      400                There is no input in the request body. Resubmit the request with
valid input in the request body.

Bad Request                                      400                We couldn't parse the JSON input. Restructure the JSON and try
again.

Too Many Requests                                429                Your request contains <XXX> records. Reduce the number of
records to fewer than <YYY> and try again.

Wrong Record Type                                                   An Account record is required for a facility. Resubmit the request
with an Account record.

Too Many Record Types                                               Resubmit the request with an Account record or a Contact record
but not both.

Specify Provider Type                                               Provider type is not specified. Resubmit the request indicating
provider type as facility or practitioner.

Bad Request                                      400                "Out of Array of allowed Values(picklist) - for static picklist"

PersonAccount isnt enabled in the org, if input request is for a PA

Lookup not found, Specialty Code for eg

Bad Request                                      400                Missing required fields on standard objects



Sample Limits Validation (POST)
Validate the samples requested during a visit against the sample limits for that account, product, and sample limit template.
Resource
/connect/life-sciences/commercial/sample-limits-validation

Available version
65.0
HTTP methods
POST

<!-- page:1688 -->

AFLS Overview                                                              Resources



Request body for POST
JSON example
{
"sampleLimitsValidationRequest": {
"data": {
"providerVisitsData": {
"providerVisitData": {
"territory": "<ProviderVisit.Visit.Territory>",
"visitPlannedStartTime": "2025-01-01T15:45:00.000+0000",
"productDisbursements": [
{
"productId": "2_childProduct1",
"productBatchItemId": "",
"accountId": "001XXXXXXXXXXXXAAG",
"quantity": 1
},
{
"productBatchItemId": "",
"productId": "2_childProduct2",
"quantity": 6,
"accountId": "001XXXXXXXXXXXXAAG"
}
],
"providerVisitSampleLimitTransactions": {
"001XXXXXXXXXXXXAAG": [
{
"providerVisitId": "a2TXXXXXXXXXXXXEAI",
"limitProductId": "2_childProduct1",
"productId": "2_childProduct1",
"providerSampleLimitTemplateName": "PerYearTemplate",
"providerVisitRequestedSampleId": "callSample1",
"ProviderSampleLimitId": "sampleLimit1",
"quantity": "1",
"account": "001XXXXXXXXXXXXAAG",
"visitPlannedStartTime": "2025-01-01T15:45:00.000+0000"
},
{
"limitProductId": "2_parentProduct1",
"quantity": "6",
"productId": "2_childProduct2",
"ProductDisbursementId": "callSample2",
"ProviderVisitId": "a2TXXXXXXXXXXXXEAI",
"providerSampleLimitTemplateName": "parent_template1",
"ProviderSampleLimitId": "defaultSampleLimit1",
"account": "001XXXXXXXXXXXXAAG",
"visitPlannedStartTime": "2025-01-01T15:45:00.000+0000"
}
]
}
},
"childProviderVisitsData": {
"productDisbursements": [
{

<!-- page:1689 -->

AFLS Overview                                                                Resources



"accountId": "001XXXXXXXXXXXXAAG",
"productId": "2_childProduct1",
"productBatchItemId": "",
"quantity": 1
},
{
"accountId": "001XXXXXXXXXXXXAAG",
"productId": "2_childProduct1",
"productBatchItemId": "",
"quantity": 1
},
{
"accountId": "001XXXXXXXXXXXXAAG",
"productId": "2_childProduct2",
"productBatchItemId": "",
"quantity": 1
}
],
"providerVisitSampleLimitTransactions": {
"0010p000013CLb1AAG": [
{
"providerVisitId": "a2TXXXXXXXXXXXXEAI",
"limitProductId": "2_childProduct1",
"productId": "2_childProduct1",
"ProductDisbursementId": "",
"providerVisitRequestedSampleId": "callSample3",
"providerSampleLimitTemplateName": "PerYearTemplate",
"ProviderSampleLimitId": "sampleLimit1",
"visitPlannedStartTime": "2025-01-01T15:45:00.000+0000",
"account": "001XXXXXXXXXXXXAAG",
"quantity": "1"
},
{
"ProviderVisitId": "a2TXXXXXXXXXXXXEAI",
"limitProductId": "2_parentProduct1",
"productId": "2_childProduct2",
"ProductDisbursementId": "callSample4",
"providerVisitRequestedSampleId": "",
"providerSampleLimitTemplateName": "parent_template1",
"ProviderSampleLimitId": "defaultSampleLimit1",
"visitPlannedStartTime": "2025-01-01T15:45:00.000+0000",
"account": "001XXXXXXXXXXXXAAG",
"quantity": "6"
}
]
}
}
},
"pendingSyncData": {
"providerVisitSampleLimitTransactions": {
"001XXXXXXXXXXXXAAG": [
{
"providerVisitId":
"lscpr1__call__c-639XXXXX-XXXX-XXXX-XXXX-XXXXXXXXXAEB",

<!-- page:1690 -->

AFLS Overview                                                                                                                        Resources



"providerVisitRequestedSampleId":
"lscpr1__callsampleorder__c-988XXXXX-XXXX-XXXX-XXXX-XXXXXXXXX1BF",
"ProductDisbursementId": "",
"limitProductId": "a5AXXXXXXXXXXXXEAU",
"productId": "a5AXXXXXXXXXXXXEAU",
"quantity": "1",
"visitPlannedStartTime": "2024-12-11T18:28:31.404+0000",
"ProviderSampleLimitId": "a5cXXXXXXXXXXXXAAE",
"account": "001XXXXXXXXXXXXAAG",
"providerSampleLimitTemplateName": "PerYearTemplate"
}
]
},
"productDisbursements": [
{}
]
}
},
"action": "validate"
}
}

Properties

Name                     Type                     Description                                     Required or       Available
Optional          Version
sampleLimitsValidationRequest SampleLimitsRequestDataInput The payload that contains the sample   Required          65.0
on page 1774             limit validations to perform in JSON
format.



## Response body for POST

Sample Limits Validation Response Output on page 1844


Visits (POST)
Create visits for sales representatives. For example, for a medical device visit, a sales representative visits the surgeon or a hospital location.
Resource
/connect/general-visit/visits

Resource example

https://yourInstance.salesforce.com/services/data/vXX.X/connect/general-visit/visits

Available version
55.0
Requires Chatter
No
HTTP methods
POST

<!-- page:1691 -->

AFLS Overview                                                                                                 Resources



Request body for POST
Root XML tag
<CreateVisitInput>
JSON example
{
"visitType": "08qSG00000017VhYAI",
"place": "131SG0000006yazYAA",
"plannedVisitStartTime": "2023-12-28T09:07:21.205-07:00",
"status": "Planned",
"account": "001SG00000Cq7T8YAJ",
"visitor": [
{
"user": "005SG000003Z0p9YAC",
"primary": true
}
],
"productRequired": [
{
"productId": "01tSG000000KOxRYAW",
"quantity": 1
}
]
}

Properties

Name                 Type                 Description                                Required or   Available
Optional      Version
account              String               ID of the account that is associated with Required       55.0
a visit.

actionPlanTemplate Action Plan            Represents the details of an action plan Optional        55.0
Template Input       template. Action plan templates define
the sets of tasks that your sales reps
perform during visits.

context              String               Purpose of the visit, such as claim or work Optional     55.0
type.

place                String               Indicates the place that sales             Required      55.0
representatives visit.

plannedVisitEndTime String                Date and time when the visit is expected Optional        55.0
to end.

plannedVisitStartTime String              Date and time when the visit is expected Required        55.0
to start.

productRequired Product Required          Represents the products required for the Required        55.0
Attributes Input[]   visit.

<!-- page:1692 -->

AFLS Overview                                                                                                                Resources



Name                 Type                  Description                                    Required or       Available
Optional          Version
status               String                Indicates the status of the visit.             Optional          55.0
Valid values are:
- Abondoned
- Completed
- InProgress
- Planned

statusRemarks String                       Additional remarks or comments                 Optional          55.0
provided by the sales representatives.

visitPriority String                       Priority of the visit.                         Optional          55.0
Valid values are:
- High
- Low
- Medium

visitType            String                ID of the visit type. This field is a lookup   Optional          55.0
to the Worktype object.

visitedParty Visited Party                 Represents the contacts from the               Optional          55.0
Attributes Input[]    customer organization who are being
visited.

visitor              Visitor Attributes    Represents the service resources from the Required               55.0
Input[]               organization who are executing the visit.


Response body for POST
Create Visit Output


Work Type Lead Time (POST)
Get a list of work types and their associated lead times that are optimized across regions for a specific advanced therapy.
An advanced therapy process (work procedure) comprises several stages (work types), steps, and tasks, each of which has its own
completion time or lead time. For example, the zunotous disease therapy has multiple stages, such as, Apheresis, Manufacturing, and
Infusion, each of which consists of discrete steps. Apheresis has a lead time of two days, following which the manufacturing stage begins.
This API helps to automate and streamline the advanced therapy management process by getting the optimized work type lead times
across various regions.
Resource
/connect/health/advanced-therapy-management/worktype-leadtime

Resource example

https://yourInstance.salesforce.com/services/data/v66.0/connect/health/advanced-therapy-management/worktype-leadtime

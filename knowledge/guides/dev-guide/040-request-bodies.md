<!-- guide:dev-guide section:request-bodies pages:1693-1784 -->
# Request Bodies

AFLS Overview                                                                                                           Request Bodies



Available version
60.0
HTTP methods
POST
Request body for POST
JSON example
{
"contextId":"0Wwxx0000000DWjCAM",
"workProcedureId":"0zjSG00000000PpYAI",
"priority":5
}

Properties

Name                  Type                  Description                                Required or           Available
Optional              Version
contextId             String                ID of a program enrollee, an account, or Optional                60.0
opportunity.

priority              Integer               Number between one and ten indicating Optional                   60.0
the priority associated with a country or
service territory. This field is useful when
you want to override the lead time based
on a country or service territory.

workProcedureId String                      Advanced therapy ID.                       Required              60.0



## Response body for POST

Work Type Lead Time Output



## Request Bodies

This section lists the request bodies for AFLS Business APIs. The query parameters for an endpoint are listed along with
each resource.
To create a JSON request body, specify the properties of the request body in JSON format. If a request body is top-level, it has a root XML
tag listed. To create an XML request body, nest the properties as XML tags inside the root XML tag.



## Account User Territory Info Input

Input representation of the Account User Territory Information.
Action Plan Context Filters Input
Input representation of the action plan context filters.
Action Plan Template Input
Input representation of an action plan template.
Action Plan Template Item Filters Input
Input representation of the action plan template item filters.

<!-- page:1694 -->

AFLS Overview                                                                                                         Request Bodies



## Appointed Representative Input

Person who is the appointed representative for the member.
Assessment Links Input
Associated assessments including id, category, reason and sequence.
Book Slot Chain Input
Input representation of the request to create service appointments.
Bulk Presentation Pages Input
Input representation for a presentation page.
Bulk Presentation Input
Input representation for bulk presentation.
Bulk Presentation Update Input
Input representation for bulk presentation update.
Bulk Presentation Pages Update Input
Input representation for a presentation page update.
Build Identity Verification Context Input
Input representation of the Build Identity Verification Context resource.
Care Request Case Input
Case related to the care request.
Care Request Patient Input
The patient for whom the request is being raised.
Care Authorization Request Input
A complete care authorization request.
Care Diagnosis Input
Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.
Care Request Drug Input
Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated
with a care request.
Care Request Input
The general details of a care-related request including member information, admission date, decision reason, and so on. A single
request can contain multiple diagnoses or drugs. Care requests include prior authorizations for drugs and services, admission
notifications, concurrent review of admissions, appeals, complaints, and grievances.
Care Request Item Input
The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be
associated with a care request.
Care Requests List Input
A list of care authorization requests.
Care Request Reviewer Input
The general details of the care request, care request item, care request drug, or care diagnosis associated with the care request
reviewer.
Care Request Subscriber Input
The primary member on the plan.

<!-- page:1695 -->

AFLS Overview                                                                                                    Request Bodies



## Content Document Input

Input representation for documents linked to the care request record.
Create Visit Request Input
Input representation of the create visit request.
Custom Field Value Input
Adds additional information to any fields not mapped by the medication statement API.
Digital Verification Input
Input representation of the request to perform verification tasks for digital verification records.
Digital Verification Input Fields Map
Input representation of the key-value pairs containing the fields to be updated for the digital verification.
Dispenser Address Input
Address of the pharmacy.
Download Provider Input
The request representation to download provider data using an external identifier.
Document Management Input
Input representation for the document split request.
Document Process Input
Input representation of the content document or received document record to create or update a Salesforce object record.
Enrollee Product Input
Data for a single enrollee product.
Fields Without Conflict Input
Input representation of the list of fields without conflict for record creation.
FHIR Address Input
Input representation for the Address FHIR object.
FHIR Codeable Concept Input
Input representation for the CodeableConcept FHIR object.
FHIR Codeable Concept Or ID Input
Input representation for FHIR Codeable Concept or ID.
FHIR Coding Input
Input representation for the Coding FHIR object.
FHIR Contact Point Input
Input representation for the ContactPoint FHIR object.
FHIR Dispense Input
The input representation of FHIR Dispense.
FHIR Dosage Input
The input representation of dosage information for a patient’s medication.
FHIR Dose
Input representation for the dosage quantity.
FHIR Dose And Rate
Input representation of the specified dose and rate.

<!-- page:1696 -->

AFLS Overview                                                                                               Request Bodies



## FHIR Human Name Input

The input representation for the name of a person and all its associated metadata.
FHIR Identifier Input
The input representation of the Identifier FHIR object.
FHIR Medication Statement
Input representation for the Medication Statement FHIR object.
FHIR Medication Resource Input
The input representation of FHIR Medication.
FHIR Patient Input
Input representation for the FHIR patient resource.
FHIR Rate
Input representation for dosage rate.
FHIR Reference Input
The input representation for the Reference FHIR object.
FHIR Request
Input representation for the supply of medication, along with information about how it should be administered.
First Reviewer Input
The name of the person who reviewed the request.
FHIR Unit Of Measure
Input representation for Unit of Measure.
FHIR Unit Of Measure Or ID
Input representation for Unit of Measure Or Id.
General Practitioner Input
Member's primary or general care practitioner.
Medical Director Input
Name of the medical director who reviewed the request.
Merge Customers Input
The request to merge a Consolidated Account with a Merged Account.
Original Denial Medical Director Input
The name of the medical director who denied the original request.
Patient Contact Party Input
The input representation of the patient contact party.
Page Products Input
Input representation that contains the product and guidance IDs associated with a presentation page.
Page Specification Input
Input representation of the page specification details.
Page Specification List Input
Input representation of the page specification list.
Patient Communication Language Input
Input representation of the patient communication language.

<!-- page:1697 -->

AFLS Overview                                                                                                            Request Bodies



## Patient Input

Input containing data for a single patient.
Product Required Attributes Input
Input representation of the products required for the visit.
Program Enrollment Input
Request body for care program enrollment.
Slot Input
Input representation of an appointment slot.
Reopened By Input
The name of the person who reopened the care request.
Requesting Practitioner Input
Ordering or referring practitioner for the request.
Sample Limits Request Data Input
Input representation for the sample limits data to validate.
Sample Limits Validation Input
Input representation for sample limits validation.
Servicing Facility Input
Facility where the service is being provided.
Servicing Practitioner Input
Practitioner administering the service.
Search Input
Input representation for Search API
Transport Location Input
Input representation for Transport Location
User Credentials Input
Input representation of the user credentials to perform digital verification.
Visited Party Attributes Input
Input representation of the visiting party. For example, for a medical device visit, the visiting party can be the surgeon and the
anesthesiologist.
Visitor Attributes Input
Input representation of the visitor attributes. For example, for a medical device visit, visitor can be the sales representative and the
clinical specialist.
Work Type Lead Time Input
Input representation of the request to get a list of work types and their associated lead times.



## Account User Territory Info Input

Input representation of the Account User Territory Information.
JSON Example
{
"accountId":"00xxG00000n6bbxxAA",

<!-- page:1698 -->

AFLS Overview                                                                                                     Request Bodies



"fieldNames":["City","IsActive","LanguageLocaleKey"]
}

Properties

Parameter             Type                    Description                                   Required or   Available
Name                                                                                        Optional      Version
accountId             String                  The ID of the user. Using this ID, this API   Required      64.0
fetches users associated with territories
linked to this account.

fieldNames            <list>String            The additional user fields that you want to Optional        64.0
retrieve. The user ID and name is fetched
by default.




## Action Plan Context Filters Input

Input representation of the action plan context filters.
Properties

Name                  Type                    Description                                   Required or   Available
Optional      Version
contextId             String                  ID of the Generic Visit Task Context record. Optional       55.0

kpiIds                String[]                IDs of the corresponding key performance Optional           55.0
indicators (KPI) associated with the context
ID.




## Action Plan Template Input

Input representation of an action plan template.
JSON example



## "actionPlanTemplate": {

"templateId": "0PTxx0000004C92GAE",
"templateItemFilters": [
{
"templateItemId": "0PJxx0000004C92GAE"
}
]
}

Properties

Name                  Type                    Description                                   Required or   Available
Optional      Version
templateId            String                  ID of an action plan template.                Optional      55.0

<!-- page:1699 -->

AFLS Overview                                                                                                           Request Bodies



Name                  Type                   Description                                  Required or           Available
Optional              Version
templateItemFilters Action Plan              Details of the action plan template item     Optional              55.0
Template Item          filters.
Filters Input[]




## Action Plan Template Item Filters Input

Input representation of the action plan template item filters.
Properties

Name                  Type                   Description                                  Required or           Available
Optional              Version
contextFilters Action Plan Context Details of the action plan context filters.            Optional              55.0
Filters Input[]

templateItemId String                        ID of the action plan template item.         Optional              55.0




## Appointed Representative Input

Person who is the appointed representative for the member.
Root XML tag
<appointedRepresentative>
JSON example


{
"firstName": "Jane",
"lastName": "Doe"
}

Properties

Name                  Type                   Description                                  Required              Available
Version
firstName             String                 First Name of the appointed                  No                    46.0
representative.

lastName              String                 Last Name of the appointed representative. No                      46.0

suffix                String                 Name suffix of the appointed                 No                    46.0
representative.

birthDate             String                 Birth date of the appointed representative. No                     46.0



Tip: All the fields in this input are optional. However, it is advisable to provide as much information as possible to find a unique
appointed representative record to associate with your care request.

<!-- page:1700 -->

AFLS Overview                                                                                         Request Bodies




## Assessment Links Input

Associated assessments including id, category, reason and sequence.
Root XML tag
<assessmentLinks>
JSON example


{
"id": "0U3SG00000068Cb0AI",
"category": "0iPSG0000024n0z2AA",
"reason": "0iPSG0000024n0z2AA",
"sequence": 333
}
]

Properties

Name                 Type                  Description                             Required   Available
Version
category             String                The category that the supporting content No        63.0
belongs to.

id                   String                The assessment used as the supporting   Yes        55.0
content.

reason               String                The reason why the supporting content is No        63.0
required.

sequence             String                The sequence number of the content      No         63.0
when multiple contents are available.




## Book Slot Chain Input

Input representation of the request to create service appointments.
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

<!-- page:1701 -->

AFLS Overview                                                                                  Request Bodies



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

Name                 Type        Description                             Required or   Available
Optional      Version
careProgramEnrolleeId String     ID of the care program enrollee for whom Required     60.0
the service appointments must be created.

slots                Slots []    Appointment slots to be booked.         Required      60.0

<!-- page:1702 -->

AFLS Overview                                                                                                      Request Bodies



Name                 Type                  Description                                Required or          Available
Optional             Version
workProcedureId String                     ID of the work procedure for which the     Required             60.0
service appointments are to be created.




## Bulk Presentation Pages Input

Input representation for a presentation page.
Properties

Property Name        Type                  Description                                Required             Available version
activation           Datetime              Date and time when the page becomes        Optional             65.0
Date                                       active.

content              String                ID of the content document for the page.   Required when        65.0
DocumentId                                 You cannot provide this paramter when      contentType is
you pass the fileIdas only one of the      PRESENTATION_ZIP,
two parameters are allowed. For the        PRESENTATION_PAGE,
PRESENTATION_PDF content type,            PRESENTATION_PDF.
provide the file input
(contentDocumentId or fileId)
within the metadata only for the first
page (pageNumber 1) in the pages
list.

customFields         Object                Map of custom field names and their        Optional             65.0
values for the page.

deactivation         Datetime              Date and time when the page becomes        Optional             65.0
Date                                       inactive.

fileId               String                File ID for the page content. You can pass Required when         65.0
this parameter if you wish to process a new contentType is
file that you will include in the request. You PRESENTATION_ZIP.
cannot provide this parameter when you
pass the contentDocumentId as
only one of the two are allowed. For the
PRESENTATION_PDF content type,
provide the file input
(contentDocumentId or fileId)
within the metadata only for the first
page (pageNumber 1) in the pages
list.

id                   String                ID of the presentation page. This is either Required            65.0
the source system ID or the Salesforce ID.

<!-- page:1703 -->

AFLS Overview                                                                                                  Request Bodies



Property Name        Type                 Description                                 Required            Available version
isAdditional         Boolean              Indicates whether the page contains         Optional            65.0
Content                                   additional content (true) or not
(false). The default value is false.

mandatory            Boolean              Indicates if the page is mandatory for the Optional             65.0
presentation (true) or not (false). The
default value is false.

name                 String               Name of the presentation page.              Required only if the 65.0
contentType is
PRESENTATION_PAGEor
PRESENTATION_ZIP

pageNumber           Integer              Page number for the presentation page. Required only when 65.0
This value must be unique and within the contentType is
range of 1 to 200.                       PRESENTATION_PDF.
This field is not
required when the
contentType is
PRESENTATION_ZIPor
PRESENTATION_PAGE.

products             List<Products Input List of products and their associated        Optional            65.0
on page 1769>       guidance IDs for the page.




## Bulk Presentation Input

Input representation for bulk presentation.
Properties

Property Name        Type                 Description                                 Required            Available version
activation           Datetime             Date when the presentation becomes           Optional           65.0
Date                                      active. If no value is provided, the default
is the current date and time.

customFields         Object               Map of custom field names and their         Optional            65.0
values for the presentation.

deactivation         Datetime             Date when the presentation becomes          Optional            65.0
Date                                      inactive.

enableDouble         Boolean              Indicates if double-tap zoom is enabled     Optional            65.0
TapZoom                                   for the presentation (true) or not
(false). The default value is false.

enablePinch          Boolean              Indicates if pinch zoom is enabled for the Optional             65.0
Zoom                                      presentation (true) or not (false).

id                   String               ID of the presentation.                     Optional            65.0

<!-- page:1704 -->

AFLS Overview                                                                                          Request Bodies



Property Name        Type                  Description                                 Required   Available version
name                 String                Name of the presentation.                   Required   65.0

playerGesture String                       Player gesture type. Possible values are:   Optional   65.0
- TAPTOP
- TAPBOTTOM
- SWIPEUP
- SWIPEDOWN.

publicContent String                       Public name for the content.                Optional   65.0
Name

publicContent String                       URL for the public content.                 Optional   65.0
Url

sendByEmail          Boolean               Indicates if the presentation can be sent   Optional   65.0
by email (true) or not (false).

topics               List<String>          List of topics associated with the         Optional    65.0
presentation. TopicAssignment must be
enabled for Presentation before using this
field.




## Bulk Presentation Update Input

Input representation for bulk presentation update.
Properties

Property Name        Type                  Description                                 Required   Available version
activation           Datetime              Date when the presentation becomes          Optional   65.0
Date                                       active.

customFields         Object                Map of custom field names and their         Optional   65.0
values for the presentation.

deactivation         Datetime              Date when the presentation becomes          Optional   65.0
Date                                       inactive.

enableDouble         Boolean               Indicates if double-tap zoom is enabled     Optional   65.0
TapZoom                                    for the presentation (true) or not
(false).

enablePinch          Boolean               Indicates if pinch zoom is enabled for the Optional    65.0
Zoom                                       presentation (true) or not (false).

id                   String                ID of the presentation.                     Required   65.0

name                 String                Name of the presentation.                   Optional   65.0

<!-- page:1705 -->

AFLS Overview                                                                                                      Request Bodies



Property Name        Type                 Description                                      Required           Available version
playerGesture String                      Player gesture type. Possible values are:        Optional           65.0
- TAPTOP
- TAPBOTTOM
- SWIPEUP
- SWIPEDOWN.

publicContent String                      Public name for the content.                     Optional           65.0
Name

publicContent String                      URL for the public content.                      Optional           65.0
Url

sendByEmail          Boolean              Indicates if the presentation can be sent        Optional           65.0
by email (true) or not (false).

topics               List<String>         List of topics associated with the               Optional           65.0
presentation.




## Bulk Presentation Pages Update Input

Input representation for a presentation page update.
Properties

Property Name        Type                 Description                                      Required           Available version
activation           Datetime             Date and time when the page becomes              Optional           65.0
Date                                      active.

content              String               ID of the content document for the page. Required when  65.0
DocumentId                                You cannot provide this paramter when contentType is
you pass the fileIdas only one of the PRESENTATION_ZIP.
two parameters are allowed as only one
of the two are allowed. For bulk
presentation PATCH request, this
parameter is not mandatory when the
contentType is PRESENTATION_PDF.

customFields         Object               Map of custom field names and their              Optional           65.0
values for the page.

deactivation         Datetime             Date and time when the page becomes              Optional           65.0
Date                                      inactive.

fileId               String               File ID for the page content. Pass this          Required when      65.0
parameter if you want to process a new           contentType is
file that you will include in the request. You   PRESENTATION_ZIP
cannot provide this parameter when you           .
pass the contentDocumentId as

<!-- page:1706 -->

AFLS Overview                                                                                                  Request Bodies



Property Name         Type                  Description                                 Required       Available version
only one of the two are allowed. For bulk
presentation PATCH request, this
parameter is not mandatory when the
contentType is PRESENTATION_PDF.

id                    String                ID of the presentation page. This is either Optional       65.0
the source system ID or the Salesforce ID.

isAdditional          Boolean               Indicates whether the page contains      Optional          65.0
Content                                     additional content (true) or not (false.
The default value is false.

mandatory             Boolean               Indicates if the page is mandatory for the Optional        65.0
presentation (true) or not (false. The
default value is false

name                  String                Name of the presentation page.              Optional       65.0

pageNumber            Integer               Page number for the presentation page. Required when       65.0
This value must be unique and within the contentType is
range of 1 to 200.                       PRESENTATION_PDF.

products              List<Products Input List of products and their associated         Optional       65.0
on page 1769>       guidance IDs for the page.




## Build Identity Verification Context Input

Input representation of the Build Identity Verification Context resource.
Root XML tag
<buildVerificationContextInput>
JSON example
{
"objectName":"Account",
"selectedRecordId":"001xx000003GZeFAAW"
}

Properties

Name                  Type                  Description                                 Required or    Available
Optional       Version
objectName            String                The API name of the caller’s object.        Optional       54.0

selectedRecordId String                     The record ID of the caller.                Optional       54.0




## Care Request Case Input

Case related to the care request.

<!-- page:1707 -->

AFLS Overview                                                                               Request Bodies



Root XML tag
<case>
Properties

Name                Type     Description                                 Required   Available
Version
caseOrigin          String   The source of the case, such as Email, Yes             46.0
Phone, or Web. Maps to: Case.Origin

caseReason          String   The reason why the case was created, such No           46.0
as Instructions not clear, or User didn’t
attend training. Maps to: Case.Reason

description         String   A text description of the case. Limit: 32 KB. No       46.0
Maps to: Case.Description

parentCaseNumber String      The ID of the parent case in the hierarchy. No         46.0
Maps to: Case.ParentId

priority            String   The importance or urgency of the case,      No         46.0
such as High, Medium, or Low. Maps to:
Case.Priority

status              String   The status of the case. Maps to:            No         46.0
Case.Status

subject             String   The subject of the case. Limit: 255         Yes        46.0
characters. Maps to: Case.Subject

type                String   The type of case, such as Feature Request No           46.0
or Question. Maps to: Case.Type

suppliedCompany String       The company name that was entered           No         46.0
when the case was created. This field can't
be updated after the case has been
created. Maps to:
Case.SuppliedCompany

suppliedEmail String         The email address that was entered when No             46.0
the case was created. This field can't be
updated after the case has been created.
Maps to: Case.SuppliedEmail

suppliedName        String   The name that was entered when the case No             46.0
was created. This field can't be updated
after the case has been created. Maps to:
Case.SuppliedName

suppliedPhone String         The phone number that was entered when No              46.0
the case was created. This field can't be
updated after the case has been created.
Maps to: Case.SuppliedPhone

<!-- page:1708 -->

AFLS Overview                                                                                             Request Bodies




## Care Request Patient Input

The patient for whom the request is being raised.
Root XML tag
<patient>
Properties

Name                 Type                  Description                                 Required   Available
Version
addressLine1         String                Patient’s address line 1.                   No         46.0

addressLine2         String                Patient’s Address Line 2.                   No         46.0

birthDate            String                Date of birth of the patient. Maps to:      No         46.0
CareRequest.MemberDateOfBirth


## Note: Required if birth date is

specified in the member account
record. Must be in DateTime
format; for example:
1970-04-30T00:00:00.

city                 String                City where the patient lives.               No         46.0

firstName            String                First name of the patient.                  No         46.0

gender               String                Gender of the patient. Maps to:             No         46.0
CareRequest.MemberGender

lastName             String                Last name of the patient.                   Yes        46.0

medicareCoverage Boolean                   Indicates whether the patient has Medicare No          46.0
coverage. Maps to:
CareRequestExtension.IsMedicareCoverage

memberCondition String                     Free-form description of the patient’s      No         46.0
condition. Maps to:
CareRequest.MemberCondition

memberId             String                Lookup to MemberPlan.MemberNumber. Yes                 46.0


## Note: Not the insurance identifier

for the member in Account.

memberPrognosis String                     Indicator of the provider's prognosis for   No         46.0
the patient. Maps to:
CareRequest.MemberPrognosis

memberStatus         String                The patient’s status at admission, date of No          46.0
outpatient service, or start of care. Maps
to: CareRequest.MemberStatus

middleName           String                Middle name of the patient.                 No         46.0

<!-- page:1709 -->

AFLS Overview                                                                               Request Bodies



Name                 Type           Description                          Required   Available
Version
state                String         State where the patient lives.       No         46.0

suffix               String         Name suffix of the patient.          No         46.0

zipCode              String         ZIP code of the patient’s address.   No         46.0




## Care Authorization Request Input

A complete care authorization request.
Root XML tag
<careAuthorization>
JSON example
{
"careRequestCase": {
"caseOrigin": "Web",
"subject": "Case No 10"
},
"contentDocumentLinks": [
{
"id": "069xx0000004CNZAA2"
},
{
"id": "069xx0000004CNYAA2"
}
],
"assessmentLinks": [
{
"id": "0U3SG00000068Cb0AI"
}
],
"patient": {
"lastName": "Fedex",
"firstName": "Roger"
},
"careRequestItems": [
{
"name": "95810",
"codeType": "CPT",
"sourceSystem": "source_system_name",
"codeDescription": "Dysuria",
"sourceSystemIdentifier": "0015cmi",
"quantity": "15"
}
],
"careRequestDrugs": [
{
"sourceSystem": "source_system_name",
"daysSupply": "10",
"frequency": "16",

<!-- page:1710 -->

AFLS Overview                                                                                              Request Bodies



"name": "Metoprolol"
}
],
"careRequest": {
"requestingPractitionerSpecialty": "Neurologist",
"placeOfService": "InPatient",
"sourceSystemIdentifier": "0015",
"name": "Care Request 15",
"requestingPractitionerLicense": "M.D",
"sourceSystem": "source_system_name",
"servicingPractitionerLicense": "M.D",
"servicingPractitionerSpecialty": "Hospitalist",
"recordType": "Complaint"
},
"careDiagnoses": [
{
"sourceSystem": "ajSource",
"name": "G47.30",
"codeDescription": "Sleep apnea, unspecified",
"codeType": "ICD-10-CM"
}
]
}

Properties

Name                Type                 Description                                 Required or   Available
Optional      Version
assessmentLinks Assessment Links         The details of the associated assessments Optional        55.0
Input[]              used as the supporting content.

careDiagnoses Care Diagnosis             List of associated diagnosis including code Optional      46.0
Input[]              type, name, and description. One or more
care diagnoses can be associated with a
care request.

careRequest         Care Request Input[] The general details of a care-related        Optional     46.0
request including member information,
admission date, decision reason, and so
on. A single request can contain multiple
diagnoses, services, or drugs. Care requests
include prior authorizations for drugs and
services, admission notifications,
concurrent review of admissions, appeals,
complaints, and grievances.

careRequestDrugs Care Request Drug       List of requested drug including name,    Optional        46.0
Input[]              strength, frequency, and instructions for
administration. One or more drug requests
can be associated with a care request.

careRequestItems Care Request Item       The details of a care service request,      Optional      46.0
Input[]              including name, modifiers, and the

<!-- page:1711 -->

AFLS Overview                                                                                                     Request Bodies



Name                 Type                 Description                                 Required or         Available
Optional            Version
effective date. One or more care service
requests can be associated with a care
request.

contentDocumentLinks Documents Input[]    List of clinical documents to be attached   Optional            55.0
as content document links to the prior
authorization request.

careRequestCase Care Request Case         Case related to the care request.           Optional            46.0
Input[]

patient              Care Request         The patient for whom the request is being Optional              46.0
Patient Input[]      raised.

subscriber           Care Request         The primary member on the plan.             Optional            46.0
Subscriber Input[]

transportLocations Transport Location     List of Transport Locations.                Optional            46.0
Input[]




## Care Diagnosis Input

Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.
Root XML tag
<careDiagnosis>
JSON example
{
"sourceSystem": "source_system_name",
"name": "G47.30",
"codeDescription": "Sleep apnea, unspecified",
"codeType": "ICD-10-CM"
}

Properties

Name                 Type                 Description                                 Required            Available
Version
careRequest          Care Request         The care diagnosis associated with the care No                  52.0
Reviewers            Reviewer Input       request reviewer. Maps to:
CareDiagnosis.CareRequestReviewers

codeDescription String                    Diagnosis code description. Maps to:        No                  46.0
CareDiagnosis.CodeDescription

codeType             String               Code type for the diagnosis. Maps to:       No                  46.0
CareDiagnosis.CodeType

<!-- page:1712 -->

AFLS Overview                                                                                           Request Bodies



Name                Type     Description                                     Required           Available
Version
codeTypeID          String   ID of the code type for the diagnosis. Maps No                     46.0
to:
CareDiagnosis.CodeTypeIdentifier

diagnosisCodeSet String      The diagnosis code set. Maps to:                No                 52.0
CareDiagnosis.DiagnosisCodeSet

dischargeCode String         Discharge diagnosis code. Maps to:              No                 46.0
CareDiagnosis.DischargeCode

dischargeCode String         Description of the discharge diagnosis          No                 46.0
Description                  code. Maps to:
CareDiagnosis.DischargeCodeDescription

dischargeCode String         Code type for the discharge diagnosis.          No                 46.0
Type                         Maps to:
CareDiagnosis.DischargeCodeType

dischargeCode String         ID of the code type for the discharge           No                 46.0
TypeId                       diagnosis. Maps to:
CareDiagnosis.DischargeCodeTypeIdentifier

dischargeDiagnosis String    The discharge diagnosis code set         No                        52.0
CodeSet                      associated with the care diagnosis. Maps
to:
CareDiagnosis.DischargeDiagnosisCodeSet

dischargeDiagnosis String    Effective date for the discharge diagnosis. No                     46.0
EffectiveDate                Maps to:
CareDiagnosis.DischargeDiagnosisEffectiveDate

discharge        String      Termination date for the discharge              No                 46.0
DiagnosisEndDate             diagnosis. Maps to:
CareDiagnosis.DischargeDiagnosisEndDate

effectiveDate String         Effective date for the diagnosis. Maps to:      No                 46.0
CareDiagnosis.EffectiveDate

endDate             String   Termination date for the diagnosis. Maps No                        46.0
to: CareDiagnosis.EndDate

healthcare    String         Healthcare Diagnosis Code.                      No                 46.0
DiagnosisCode

healthConditionId String     The health condition that's associated with No                     57.0
the member. Maps to:
CareDiagnosis.HealthCondition

id                  String   ID of the Care Diagnosis.                       Required for PATCH 46.0

modifiedCode        String   Modified diagnosis code. Maps to:               No                 46.0
CareDiagnosis.ModifiedCode

<!-- page:1713 -->

AFLS Overview                                                                               Request Bodies



Name                Type      Description                                Required   Available
Version
modifiedCode        String    Modified diagnosis code description. Maps No          46.0
Description                   to:
CareDiagnosis.ModifiedCodeDescription

modifiedCode        String    Code type for the modified diagnosis.      No         46.0
Type                          Maps to:
CareDiagnosis.ModifiedCodeType

modifiedCode        String    ID of the code type for the modified       No         46.0
TypeId                        diagnosis. Maps to:
CareDiagnosis.ModifiedCodeTypeIdentifier

modifiedDiagnosis String      The modified diagnosis code set associated No         52.0
CodeSet                       with the care diagnosis. Maps to:
CareDiagnosis.ModifiedDiagnosisCodeSet

modifiedEffective String      Modified effective date for the diagnosis. No         46.0
Date                          Maps to:
CareDiagnosis.ModifiedEffectiveDate

modifiedEnd         String    Modified termination date for the          No         46.0
Date                          diagnosis. Maps to:
CareDiagnosis.ModifiedEndDate

modifiedPrimary Boolean       Modified Primary Diagnosis                 No         46.0
Diagnosis

name                String    Name of the diagnosis code. Maps to:       Yes        46.0
CareDiagnosis.Name

presentOn           String    Specifies if the health condition was    No           57.0
Admission                     present at the time of member admission.
Maps to:
CareDiagnosis.PresentOnAdmission

primary             Boolean   Indicates whether it is a primary diagnosis No        46.0
(true) or not (false).

primaryDischarge Boolean      Indicates whether it is a primary Discharge No        46.0
Diagnosis                     Diagnosis (true) or not (false).

sourceSystem        String    System from which this request was         No         46.0
sourced. Maps to:
CareDiagnosis.SourceSystem

sourceSystem        String    ID of the system from which the request    No         46.0
Identifier                    was sourced. Maps to:
CareDiagnosis.SourceSystemIdentifier

sourceSystem        String    Timestamp of the most recent update from No           46.0
Modified                      the source system. Maps to:
CareDiagnosis.SourceSystemModified

<!-- page:1714 -->

AFLS Overview                                                                                                     Request Bodies




## Care Request Drug Input

Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated
with a care request.
Root XML tag
<careRequestDrug>
JSON example
{
"sourceSystem": "source_system_name",
"daysSupply": "10",
"frequency": "16",
"name": "Metoprolol"
}

Properties

Name                 Type                 Description                                   Required          Available
Version
approvedUnits Integer                     Approved quantity of the drug. Maps to:       No                46.0
CareRequestDrug.ApprovedUnits

AssertionIdentifier String                The unique identifier of the coverage         No                63.0
assertion. This is unavailable for PATCH
requests.

authApproval         String               The unique identifier assigned to the drug No                   57.0
Identifier                                on approval of the authorization request.
Maps to:
CareRequestDrug.AuthApprovalIdentifier

authorization String                      The unique identifier of the authorization No                   57.0
RefIdentifier                             request associated with this requested
drug. Maps to:
CareRequestDrug.AuthorizationRefIdentifier

careRequest          Care Request         The care request drug associated with the No                    52.0
Reviewers            Reviewer Input       care request reviewer. Maps to:
CareRequestDrug.CareRequestReviewers

clinical      String                      The clinical determination of the drug        No                52.0
Determination                             request. Maps to:
CareRequestDrug.ClinicalDetermination

clinical          String                  The notes related to the clinical             No                52.0
DeterminationNote                         determination. Maps to:
CareRequestDrug.ClinicalDeterminationNote

clinical            String                The reason for the clinical determination. No                   52.0
DeterminationReason                       Maps to:
CareRequestDrug.ClinicalDeterminationReason

<!-- page:1715 -->

AFLS Overview                                                                                          Request Bodies



Name                Type                Description                                 Required   Available
Version
code                String              Code for the drug. Maps to:                 No         46.0
CareRequestDrug.Code

codeType            String              ID code type for the drug. Maps to:         No         46.0
CareRequestDrug.CodeType

daysSupply          Integer             Number of days to supply the drug. Maps No             46.0
to:
CareRequestDrug.DaysSupply

decisionDate        String              The date and time when the decision was No             52.0
made for this drug request. Maps to:
CareRequestDrug.DecisionDate

deniedUnits         Integer             Denied quantity of the drug. Maps to:       No         46.0
CareRequestDrug.DeniedUnits

dispenser           Dispenser Address   Pharmacy address.                           No         46.0
Address             Input

dispenserFax        String              Pharmacy fax number. Maps to:               No         46.0
Number                                  CareRequestDrug.DispenserFaxNumber

dispenserId         String              ID for the pharmacy. Maps to:               No         46.0
CareRequestDrug.DispenserIdentifier

dispenserName String                    Name of the pharmacy. Maps to:              No         46.0
CareRequestDrug.DispenserName

dispenserPhone String                   Pharmacy phone number. Maps to:             No         46.0
Number                                  CareRequestDrug.DispenserPhoneNumber

dispenserTaxId String                   Pharmacy tax identification number. Maps No            46.0
to:
CareRequestDrug.DispenserTaxIdentifier

dispensingPharmacy String               The pharmacy that dispenses the drug.       No         52.0
Maps to:
CareRequestDrug.DispensingPharmacy

dose                String              Dose of the drug. Maps to:                  No         46.0
CareRequestDrug.Dose

drugAdministra String                   The setting in which the drug is expected No           57.0
tionSetting                             to be administered to the patient. Maps
to:
CareRequestDrug.DrugAdministrationSetting

frequency           String              Frequency of the drug. Maps to:             No         46.0
CareRequestDrug.Frequency

<!-- page:1716 -->

AFLS Overview                                                                                            Request Bodies



Name                Type      Description                                    Required            Available
Version
medicationCode String         The code of the care request drug. Maps        No                  52.0
to:
CareRequestDrug.MedicationCode

id                  String    ID of the Care Request Drug.                   Required for PATCH. 46.0

modifiedCode        String    Code for the modified drug. Maps to:           No                  46.0
CareRequestDrug.ModifiedCode

modifiedCode        String    ID code type for the modified drug. Maps No                        46.0
Type                          to:
CareRequestDrug.ModifiedCodeType

medicationRef String          The medication request or statement            No                  57.0
ObjectId                      associated with the care request drug.

modifiedDays        Integer   Number of days of supply for the modified No                       46.0
Supply                        drug. Maps to:
CareRequestDrug.ModifiedDaysSupply

modifiedDose        String    Dose of the modified drug. Maps to:            No                  46.0
CareRequestDrug.ModifiedDose

modified            String    Frequency of the modified drug. Maps to: No                        46.0
Frequency                     CareRequestDrug.ModifiedFrequency

modifiedName        String    Name of the modified drug. Maps to:            No                  46.0
CareRequestDrug.ModifiedName

modifiedSig         String    Directions for use of the modified drug.       No                  46.0
Maps to:
CareRequestDrug.ModifiedSig

modifiedStrength String       Strength of the modified drug. Maps to:        No                  46.0
CareRequestDrug.ModifiedStrength

modifiedTherapy Integer       Duration of therapy for the modified drug. No                      46.0
Duration                      Maps to:
CareRequestDrug.ModifiedTherapyDuration

modifiedUnits Integer         Modified quantity of the drug. Maps to:        No                  46.0
CareRequestDrug.ModifiedUnits

name                String    Name of the drug. Maps to:                     No                  46.0
CareRequestDrug.Name

prescription        String    Date for the prescription. Maps to:            No                  46.0
Date                          CareRequestDrug.PrescriptionDate

prescription        String    Date of fills for the prescription. Maps to:   No                  57.0
FillDate                      CareRequestDrug.PrescriptionFillDate

<!-- page:1717 -->

AFLS Overview                                                                                           Request Bodies



Name                Type                 Description                                 Required   Available
Version
prescriptionFills Integer                Number of fills for the prescription. Maps No          46.0
to:
CareRequestDrug.PrescriptionFills

priority            String               The priority representing the urgency of No            57.0
the drug's authorization request. Maps to:
CareRequestDrug.Priority

requestType         String               The type of drug request. Maps to:          No         57.0
CareRequestDrug.RequestType

responseDateTime String                  The date and time when the response was No             63.0
sent for the drug request. This is
unavailable for PATCH requests.

serviceCategory String                   Name of the service type such as medical No            46.0
care, diagnostic radiology, pharmacy, or
diagnostic laboratory. Maps to:
CareRequestDrug.ServiceCategory

serviceCategory String                   Alphanumeric code that uniquely identifies No          46.0
Code                                     a service type. Maps to:
CareRequestDrug.ServiceCategoryCode

servicingFacility Servicing Facility     The facility where a patient receives service No       57.0
Input                of the requested drug. Maps to:
CareRequestDrug.ServicingFacility

servicingProvider Servicing              The healthcare provider who provides the No            57.0
Practitioner Input   service of the requested drug. Maps to:
CareRequestDrug.ServicingProvider

sig                 String               Directions for use of the drug. Maps to:    No         46.0
CareRequestDrug.Sig

sourceSystem        String               System from which this request was          No         46.0
sourced. Maps to:
CareRequestDrug.SourceSystem

sourceSystem        String               ID of the system from which the request     No         46.0
Identifier                               was sourced. Maps to:
CareRequestDrug.SourceSystemIdentifier

sourceSystem        String               Timestamp of the most recent update from No            46.0
Modified                                 the source system. Maps to:
CareRequestDrug.SourceSystemModified

status              String               The authorization status of the requested No           57.0
drug. Maps to:
CareRequestDrug.Status

<!-- page:1718 -->

AFLS Overview                                                                                                         Request Bodies



Name                  Type                  Description                                 Required              Available
Version
statusReason          String                The reason for the authorization status of No                     57.0
the requested drug. Maps to:
CareRequestDrug.StatusReason

strength              String                Strength of the drug. Maps to:              No                    46.0
CareRequestDrug.Strength

submittedDateTime String                    The date and time when the drug request No                        63.0
was submitted. This is unavailable for
PATCH requests.

therapyDuration Integer                     Duration of therapy for the drug. Maps to: No                     46.0
CareRequestDrug.TherapyDuration

transactioNumber Integer                    The transaction number assigned to the      No                    63.0
drug request. This is unavailable with
PATCH requests.

units                 Integer               Quantity of the drug. Maps to:              No                    46.0
CareRequestDrug.Units




## Care Request Input

The general details of a care-related request including member information, admission date, decision reason, and so on. A single request
can contain multiple diagnoses or drugs. Care requests include prior authorizations for drugs and services, admission notifications,
concurrent review of admissions, appeals, complaints, and grievances.
Root XML tag
<careRequest>
JSON example
{
"requestingPractitionerSpecialty": "Neurologist",
"placeOfService": "InPatient",
"sourceSystemIdentifier": "0015",
"name": "Care Request 15",
"requestingPractitionerLicense": "M.D",
"sourceSystem": "source_system_name",
"servicingPractitionerLicense": "M.D",
"servicingPractitionerSpecialty": "Hospitalist",
"recordType": "Complaint"
}

<!-- page:1719 -->

AFLS Overview                                                                                     Request Bodies



Properties

Name                Type     Description                                       Required   Available
Version
acknowledgement String       Date and time when an acknowledgment No                      46.0
LetterSentDate               letter was sent to the requester. Maps to:
CareRequest.AcknowledgementLetterSentDate

actualAdmission String       Actual admission date for the patient.            No         46.0
Date                         Maps to:
CareRequest.ActualAdmissionDate

actualDischarge String       Actual discharge date for the patient. Maps No               46.0
Date                         to:
CareRequest.ActualDischargeDate

admission           String   Notes related to the admission. Maps to:          No         46.0
Notes                        CareRequest.AdmissionNotes

admission           String   Where the patient was admitted from, for No                  46.0
Source                       example, a clinic or an emergency room.
Maps to:
CareRequest.AdmissionSource

admissionType String         Type of admission, for example,                   No         46.0
emergency or elective. Maps to:
CareRequest.AdmissionType

ambulanceTransport Integer   Ambulance Transport Distance                      No         46.0
Distance

ambulanceTransport String    Reason for ambulance transport. Maps to: No                  46.0
Reason                       CareRequestExtention.AmbulanceTransportReason

ambulanceTransport String    Type of ambulance transport. Maps to:             No         46.0
Type                         CareRequestExtention.AmbulanceTransportType

aorReceived         String   Date and time when the Appointment of No                     46.0
Date                         Representative (AOR) form was received.
Maps to:
CareRequest.AorReceivedDate

aorRequestedDate String      Date and time when the AOR form was               No         46.0
requested. Maps to:
CareRequest.AorRequestedDate

appealEffectuation String    The effective date of the outcome of the No                  52.0
DateTime                     appeal request. For example, if a claim was
successfully appealed, this field displays
the date when the claim was paid. Maps
to:
CareRequestExtension.AppealEffectuationDateTime

<!-- page:1720 -->

AFLS Overview                                                                                                  Request Bodies



Name                     Type             Description                                       Required   Available
Version
appealRequest String                      Specifies the reason for raising the appeal No               52.0
ReasonType                                request. Maps to:
CareRequest.AppealRequestReasonType

appointedRepVerbal String                 Date and time of verbal contact with the No                  46.0
ContactDate                               member's appointed representative. Maps
to:
CareRequest.AppointedRepVerbalContactDate

appointedRepWritten String                Date and time correspondence was sent No                     46.0
ContactDate                               to the member's appointed representative.
Maps to:
CareRequest.AppointedRepWrittenContactDate

appointed      Appointed                  Appointed representative for the member. No                  46.0
Representative Representative             If provided, the first name, last name,
Input            birthdate, and suffix fields are used to find
at a unique Id, which is used to update
CareRequest.AppointedRepresentativeId
field.

approvedLength Integer                    Approved number of days for the                   No         46.0
OfStay                                    admission. Maps to:
CareRequest.ApprovedLengthOfStay

approvedLevel String                      Approved level of care for the patient, for No               46.0
OfCare                                    example, Hospital-Observaton or
SNF-Rehabilitation. Screen reader support
enabled. Maps to:
CareRequest.ApprovedLevelOfCare

authorization String                      The unique identifier of the authorization No                57.0
RefIdentifier                             request. Maps to:
CareRequestExtension.AuthorizationRefIdentifier

careRequest              Care Request     The care request associated with the care No                 52.0
Reviewers                Reviewer Input   request reviewer. Maps to:
CareRequest.CareRequestReviewers

caseSubStatus String                      Sub status of care request in each stage of No               57.0
care request. Maps to:
CareRequest.CaseSubStatus

claimNumber              String           Claim number for the medical service or           No         46.0
medication, if one exists. Maps to:
CareRequest.ClaimNumber

clientSourceSysIdentifier String          An identifier of the client's source system No               63.0
that sent the care request. This is
unavailable for PATCH requests.

<!-- page:1721 -->

AFLS Overview                                                                                    Request Bodies



Name                Type      Description                                     Required   Available
Version
clinicalCase        String    Clinical case type for the patient, for    No              46.0
Type                          example, High Risk Fall or Adult Diabetes.
Maps to:
CareRequest.ClinicalCaseType

criteriaMet         String    Indicates whether criteria for care was met. No            46.0
Maps to:
CareRequest.CriteriaMet

cumulativeLength Integer      Total number of days for the admission.         No         46.0
OfStay                        Maps to:
CareRequest.CumulativeLengthOfStay

currentLevel        String    Level of care that the patient is receiving. No            46.0
OfCare                        Maps to:
CareRequest.CurrentLevelOfCare

decisionDate        String    Date by which the decision must be made No                 46.0
for the request. Maps to:
CareRequest.DecisionDate

decisionLetter String         The text of the determination letter sent       No         46.0
to the member and provider. Maps to:
CareRequest.DecisionLetter

decisionNotes String          Notes related to the decision. Maps to:         No         46.0
CareRequest.DecisionNotes

decisionReason String         Reason for the decision. Maps to:               No         46.0
CareRequest.DecisionReason

decisionReason String         Text describing the reason for the decision. No            46.0
Description                   Maps to:
CareRequest.DecisionReasonDescription

deniedLength        Integer   Number of days denied for the admission. No                46.0
OfStay                        Maps to:
CareRequest.DeniedLengthOfStay

deniedLevel         String    Level of care denied for the patient. Maps No              46.0
OfCare                        to:
CareRequest.DeniedLevelOfCare

disposition         String    Notes related to the disposition of the         No         46.0
Notes                         request. Maps to:
CareRequest.DispositionNotes

document         String       The current status of the document upload No               55.0
AttachmentStatus              based on the checklist provided to the
reviewers. Maps to:
CareRequestExtention.DocumentAttachmentStatus

<!-- page:1722 -->

AFLS Overview                                                                                        Request Bodies



Name                Type             Description                                  Required   Available
Version
Valid values are:
- Complete
- Incomplete

dueDate             String           Date the request is due for completion.      No         46.0
Maps to: CareRequest.DueDate

effectiveFrom String                 The start date for an effective-date range. No          46.0
Maps to:
CareRequest.EffectiveFrom

effectiveTo         String           The end date for an effective-date range. No            46.0
Maps to:
CareRequest.EffectiveTo

expirationDate String                Expiration date for the request. Maps to:    No         46.0
CareRequest.ExpirationDate

extendedRequest Boolean              Indicates whether a request was extended. No            46.0
Maps to:
CareRequest.IsExtendedRequest

extensionRequest String              Date and time an extension was requested. No            46.0
ReceivedDate                         Maps to:
CareRequest.ExtensionRequestReceivedDate

external            String           Complaint ID number. Maps to:                No         46.0
ComplaintId                          CareRequest.ExternalComplaintIdentifier

facility            String           The medical record number used to            No         46.0
RecordNumber                         identify a patient. Maps to:
CareRequest.FacilityRecordNumber

facility            String           Type of facility bed for the patient. Maps   No         46.0
RoomBedType                          to:
CareRequest.FacilityRoomBedType

facilityRoom        String           The facility room number for the patient. No            46.0
Number                               Maps to:
CareRequest.FacilityRoomNumber

finalLevel          String           Final level of care the patient. Maps to:    No         46.0
OfCare                               CareRequest.FinalLevelOfCare

firstReviewer First Reviewer Input The person who reviewed the request.           No         46.0

first         String                 Notes from the first reviewer related to the No         46.0
ReviewerNotes                        case. Maps to:
CareRequest.FirstReviewerNotes

<!-- page:1723 -->

AFLS Overview                                                                                                                     Request Bodies



Name                   Type                Description                                                Required            Available
Version
general                General Practitioner Member's primary or general care                          No                  46.0
Practitioner           Input                practitioner. Maps to
CareRequest.generalPractitioner

generalPractitioner String                 Date when the primary care practitioner No                                     46.0
VerbalNotification                         was verbally notified of the decision. Maps
Date                                       to:
CareRequest.GeneralPractitionerVerbalNotifiedDate

generalPractitioner String                 Date when the primary care practitioner                    No                  46.0
WrittenNotification                        was notified of the decision by written
Date                                       correspondence. Maps to:
CareRequest.GeneralPractitionerWrittenNotifiedDate

grievanceType String                       Specifies the type of grievance. Maps to:                  No                  52.0
CareRequest.GrievanceType

healthCare             String              The healthcare provider associated with No                                     52.0
Provider                                   the care request against whom the
Grievance is filed. Maps
toCareRequestExtension.HealthCareProvider

homeHealthCertification String             Certification end date for home health                     No                  46.0
EndDate                                    care. Maps to:
CareRequestExtension.HomeHealthCertificationEndDate

homeHealthCertification String             Certification start date for home health                   No                  46.0
StartDate                                  care. Maps to:
CareRequestExtension.HomeHealthCertificationStartDate

homeHealth             String              Date that home health services are          No                                 46.0
StartDate                                  scheduled or anticipated to start. Maps to:
CareRequestExtension.HomeHealthStartDate

id                     String              ID of the Care Request.                                    Required for PATCH. 46.0

independentReview String                   The determination made by the                              No                  52.0
Determination                              independent review. Maps to:
CareRequestExtension.IndependentReviewDetermination

independentReview String                   The date when the determination was                        No                  52.0
DeterminationDate                          made by the independent review. Maps
to:
CareRequestExtension.IndependentReviewDeterminationDate

independentReview String                   The date when the review request was   No                                      52.0
SubmissionDate                             submitted for independent review. Maps
to:
CareRequestExtension.IndependentReviewSubmissionDate

<!-- page:1724 -->

AFLS Overview                                                                                            Request Bodies



Name                Type           Description                                        Required   Available
Version
infoReceieved String               Date and time when additional                      No         46.0
Date                               information was received from the
provider or member. Maps to:
CareRequest.InfoReceivedDate

infoRequested String               Date and time when additional                      No         46.0
Date                               information was requested from the
provider or member. Maps to:
CareRequest.InfoRequestedDate

initialDenial String               Date of initial denial notification. Maps to: No              46.0
NotificationDate                   CareRequest.InitialDenialNotificationDate

initialDenial String               The time when the initial care request was No                 52.0
NotificationTime                   denied. Maps to
CareRequest.InitialDenialNotificationTime

isIndependentReview Boolean        Indicates whether independent review is No                    52.0
Required                           required. Maps to
CareRequestExtension.IsIndependentReviewRequired

isReadmission Boolean              Indicates whether the care request is for a No                52.0
readmission. Maps to
CareRequest.IsReadmission

medicalDirector Medical Director   The medical director who reviewed the              No         46.0
Input          request.

medicalDirector String             Notes from the medical director related to No                 46.0
Notes                              the request. Maps to:
CareRequest.MedicalDirectorNotes

memberContact String               Date and time when the member was                  No         46.0
Date                               contacted. Maps to:
CareRequest.MemberContactDateTime

memberGroup         String         Insurance group number for the member. No                     46.0
Number                             Maps to:
CareRequest.MemberGroupNumber

memberPrimary String               The primary insurance plan of a member No                     52.0
Plan                               associated with the care request when the
member is insured under multiple plans.
Maps to:
CareRequest.MemberPrimaryPlan

memberSecondary String             The secondary insurance plan of a member No                   52.0
Plan                               associated with the care request when the
member is insured under multiple plans.
Maps to:
CareRequest.MemberSecondaryPlan

<!-- page:1725 -->

AFLS Overview                                                                                             Request Bodies



Name                Type           Description                                         Required   Available
Version
memberVerbal String                Date when the member was verbally                   No         46.0
NotificationDate                   notified of the decision. Maps to:
CareRequest.MemberVerbalNotificationDate

memberWritten String               Date when the member was notified of                No         46.0
NotificationDate                   the decision by written correspondence.
Maps to:
CareRequest.MemberWrittenNotificationDate

modification        String         Date the case was modified. Maps to:                No         46.0
Date                               CareRequest.ModificationDate

modifiedLength Integer             Modified number of days for the                     No         46.0
OfStay                             admission. Maps to:
CareRequest.ModifiedLengthOfStay

modifiedLevel String               Modified level of care for the patient. Maps No                46.0
OfCare                             to:
CareRequest.ModifiedLevelOfCare

name                String         Name of the Care Request. Maps to:                  Yes        46.0
CareRequest.Name

nextReview          String         Date the next review is scheduled for               No         46.0
Date                               completion. Maps to:
CareRequest.NextReviewDate

nursingHome       String           Nursing home-resident status at the time No                    46.0
ResidentialStatus                  of service. Maps to:
CareRequestExtension.NursingHomeResidentialStatus

originalDenial Original Denial     The medical director who denied the                 No         46.0
MedicalDirector Medical Director   original request.
Input

parProvider         String         Indicator of whether this provider has              No         46.0
entered into an agreement with the
insurance carrier. Maps to:
CareRequest.ParProvider

placeOfService String              Place of service for the member's care such No                 46.0
as an inpatient hospital or an ambulatory
surgery center. Maps to:
CareRequest.PlaceOfService

practitioner        String         Date and time when the provider was                 No         46.0
ContactDate                        contacted. Maps to:
CareRequest.PractitionerContactDateTime

<!-- page:1726 -->

AFLS Overview                                                                                        Request Bodies



Name                Type      Description                                         Required   Available
Version
priorDischarge String         Specifies the previous discharge status of No                  52.0
Status                        the member. Maps to:
CareRequestExtension.PriorDischargeStatus

quantity            Integer   Quantity of the request.                            No         46.0

quantityType        String    Quantity type for the request such as days, No                 46.0
units, or visits. Maps to:
CareRequest.QuantityType

receivedDate        String    Date the request was received. Maps to:             No         46.0
CareRequest.ReceivedDate

reconsideration String        Date of reconsideration denial notification. No                46.0
DenialNotification            Maps to:
Date                          CareRequest.ReconsiderationDenialNotificationDate

reconsideration String        The time of reconsideration denial                  No         52.0
DenialNotification            notification. Maps to:
Time                          CareRequest.ReconsiderationDenialNotificationTime

recordType          String    Record type of the care request object.             No         46.0

recordTypeId        String    ID of the record type of the care request           No         46.0
object.

referenceCare String          The reference care request case number No                      52.0
RequestCase                   associated with the care request. Maps to:
CareRequest.ReferenceCareRequestCase

reference           String    Reference authorization number for an     No                   46.0
CaseNumber                    appeal, complaint, or grievance. Maps to:
CareRequest.ReferenceCaseNumber

reopenDecision String         Date and time the request was reopened. No                     52.0
DateTime                      Maps to:
CareRequest.ReopenDecisionDateTime

reopenReason        String    Reason the request was reopened. Maps No                       46.0
to: CareRequest.ReopenReason

reopenReason        String    Description of why the request was                  No         46.0
Description                   reopened. Maps to:
CareRequest.ReopenReasonDescription

reopenRequest String          The result of the reopen request. Maps to: No                  52.0
Outcome                       CareRequestExtension.ReopenRequestOutcome

reopenRequest String          The type of reopen request. Maps to:                No         52.0
Type                          CareRequestExtension.ReopenRequestType

<!-- page:1727 -->

AFLS Overview                                                                                                  Request Bodies



Name                Type                 Description                                        Required   Available
Version
reopenedBy          Reopened By Input The user who reopened the care request. No                       52.0
Maps to:
CareRequestExtension.ReopenedBy

reopenedBy          String               The ID of the user who reopened the care No                   52.0
UserId                                   request. Maps to:
CareRequestExtension.ReopenedByUserId

reopenedDate        String               Date the request was reopened. Maps to: No                    46.0
CareRequest.ReopenedDate

requestExtension String                  The reason for requesting the care                 No         52.0
Reason                                   extension. Maps to:
CareRequestExtension.RequestExtensionReason

requestExtnDecision String               The date when the decision to extend the No                   52.0
DateTime                                 care request extension was made. Maps
to:
CareRequestExtension.RequestExtnDecisionDateTime

requestOutcome String                    Specifies the outcome of the request. Maps No                 52.0
to:
CareRequestExtension.RequestOutcome

requestOutcome String                    The description of the request outcome.            No         52.0
Desc                                     Maps to:
CareRequestExtension.RequestOutcomeDesc

requestType         String               Category type of the request. Maps to:             No         46.0
CareRequestExtension.RequestType

requestedDate String                     Date the request was originally requested. No                 46.0
Maps to:
CareRequest.RequestedDate

requestedLength Integer                  Requested length of stay for the patient.          No         57.0
OfStay                                   Maps to:
CareRequest.RequestedLengthOfStay

requestedLevel String                    Requested level of care for the patient.           No         46.0
OfCare                                   Maps to:
CareRequest.RequestedLevelOfCare

requesterType String                     Indicates the role of the individual               No         46.0
initiating the request. Maps to:
CareRequest.RequesterType

requesting          Requesting           Ordering or referring practitioner for the         No         46.0
Practitioner        Practitioner Input   request.

requesting          String               Requesting Practitioner License Maps to:           No         46.0
PractitionerLicense                      CareRequest.RequestingPractitionerLicense

<!-- page:1728 -->

AFLS Overview                                                                                             Request Bodies



Name                 Type      Description                                             Required   Available
Version
requesting            String   Specialty of the practitioner, for example, No                     46.0
PractitionerSpecialty          Family Practice or General Surgery. Maps
to:
CareRequest.RequestingPractitionerSpecialty

requesting         String      Date when the practitioner was verbally                 No         46.0
PractitionerVerbal             notified of the decision. Maps to:
NotificationDate               CareRequest.RequestingPractitionerVerbalNotifiedDate

requesting          String     Date when the practitioner was notified No                         46.0
PractitionerWritten            of the decision by written correspondence.
NotificationDate               Maps to:
CareRequest.RequestingPractitionerWrittenNotifiedDate

resolutionDate String          Date when the complaint, appeal, or                     No         46.0
grievance was resolved. Maps to:
CareRequest.ResolutionDate

resolution           String    The resolution details provided for the   No                       52.0
Description                    complaint, appeal, or grievance. Maps to:
CareRequestExtension.ResolutionDescription

resolution     String          Date and time when a resolution letter was No                      46.0
LetterSentDate                 sent to the requester. Maps to:
CareRequest.ResolutionLetterSentDate

resolutionNotes String         Resolution notes for the request. Maps to: No                      46.0
CareRequest.ResolutionNotes

reviewDate           String    Date the review was completed. Maps to: No                         46.0
CareRequest.ReviewDate

rootCauseNotes String          Field for notes related to the root cause for No                   46.0
the request. Maps to:
CareRequest.RootCauseNotes

scheduled     String           Anticipated admission date for the patient. No                     46.0
AdmissionDate                  Maps to:
CareRequest.ScheduledAdmissionDate

scheduled     String           Scheduled discharge date for the patient. No                       46.0
DischargeDate                  Maps to:
CareRequest.ScheduledDischargeDate

serviceDate          String    Date when patient received the service.                 No         46.0
Maps to:
CareRequest.ServiceDate

serviceLevel         String    The level of service rendered. Maps to:                 No         46.0
CareRequestExtension.ServiceLevel

<!-- page:1729 -->

AFLS Overview                                                                                                             Request Bodies



Name                   Type                  Description                                   Required               Available
Version
serviceType            String                Classification of the type of service. Maps No                       46.0
to:
CareRequestExtension.ServiceType

serviceor          Boolean                   Indicates whether the member has already No                          46.0
MedicationReceived                           received the medial service or medication.
Maps to:
CareRequest.IsServiceOrMedicationReceived

servicingFacility Servicing Facility         Facility where the service is being           No                     46.0
Input                 provided.

servicingPractitioner Servicing              Practitioner administering the service.       No                     46.0
Practitioner Input

servicingPractitioner String                 License type of the practitioner. Maps to: No                        46.0
License                                       CareRequest.ServicingPractitionerLicense

servicingPractitioner String                 Specialty of the practitioner. Maps to:       No                     46.0
Specialty                                     CareRequest.ServicingPractitionerSpecialty

sourceSystem           String                System from which this request was            No                     46.0
sourced. Maps to:
CareRequest.SourceSystem

sourceSystem           String                ID of the system from which the request       No                     46.0
Identifier                                   was sourced. Maps to:
CareRequest.SourceSystemIdentifier

sourceSystem           String                The timestamp of the most recent update No                           46.0
Modified                                     from the source system. Maps to:
CareRequest.SourceSystemModified

supportingDocUrl String                      The URL of supporting documentation          No                      63.0
such as a questionnaire. This is unavailable
for PATCH requests.

unitOfMeasure String                         The unit of measure associated with the       No                     55.0
prior authorization request. Maps to:
CareRequestExtention.UnitOfMeasure
This field is a lookup to
UnitOfMeasure.





## Care Request Item Input

The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated
with a care request.
Root XML tag
<careRequestItem>

<!-- page:1730 -->

AFLS Overview                                                                                        Request Bodies



JSON example
{
"name": "95810",
"codeType": "CPT",
"sourceSystem": "source_system_name",
"codeDescription": "Dysuria",
"sourceSystemIdentifier": "0015cmi",
"quantity": "15"
}

Properties

Name                Type             Description                                  Required   Available
Version
approvedLength Integer               The number of days requested for the         No         52.0
OfStay                               admission. Maps to:
CareRequestItem.ApprovedLengthOfStay

approvedLevel Integer                Specifies the approved level of care for the No         52.0
OfCare                               patient. Maps to:
CareRequestItem.ApprovedLevelOfCare

approvedQuantity Integer             The approved quantity of the care item.      No         46.0
Maps to:
CareRequestItem.ApprovedQuantity

approvedService String               The end date of the approved service that No            52.0
EndDate                              the patient received. Maps to:
CareRequestItem.ApprovedServiceEndDate

approvedService String               The start date of the approved service that No          52.0
StartDate                            the patient received. Maps to:
CareRequestItem.ApprovedServiceStartDate

AssertionIdentifier String           The unique identifier of the coverage        No         63.0
assertion. This is unavailable for PATCH
requests.

authApproval        String           The unique identifier assigned to the item No           57.0
Identifier                           on approval of the prior authorization
request. Maps to:
CareRequestItem.AuthApprovalIdentifier

authorization String                 The unique identifier of the prior         No           57.0
RefIdentifier                        authorization request associated with this
requested item. Maps to:
CareRequestItem.AuthorizationRefIdentifier

careRequest         Care Request     The care request item associated with the No            52.0
Reviewers           Reviewer Input   care request reviewer. Maps to:
CareRequestItem.CareRequestReviewers

<!-- page:1731 -->

AFLS Overview                                                                                  Request Bodies



Name                Type     Description                                    Required   Available
Version
clinical      String         The clinical determination of the care         No         52.0
Determination                request. Maps to:
CareRequestItem.ClinicalDetermintation

clinical           String    The notes related to the clinical              No         52.0
DeterminationNotes           determination. Maps to:
CareRequestItem.ClinicalDetermintationNotes

clinical            String   The reason for the clinical determination. No             52.0
DeterminationReason          Maps to:
CareRequestItem.ClinicalDetermintationReason

clinicalService String       The clinical service request associated with No           57.0
RequestId                    the care request item. Maps to:
CareRequestItem.ClinicalServiceRequest

code                String   ID of the service code. Maps to:               No         46.0
CareRequestItem.Name

codeDescription String       Description of the denied service code.        No         46.0
Maps to:
CareRequestItem.CodeDescription

codeType            String   Code type for the service. Maps to:            No         46.0
CareRequestItem.CodeType

codeTypeId          String   ID of the code type for the service. Maps      No         46.0
to:
CareRequestItem.CodeTypeIdentifier

cumulativeLength Integer     The number of days a patient is admitted. No              52.0
OfStay                       Maps to:
CareRequestItem.CumulativeLengthOfStay

currentLevel        String   Specifies the level of care the patient is     No         52.0
OfCare                       receiving. Maps to:
CareRequestItem.CurrentLevelOfCare

decisionDate        String   The date and time when the last decision No               52.0
was made for this care request item. Maps
to:
CareRequestItem.DecisionDate

deniedLevel         String   The level of care denied for the patient.      No         52.0
OfCare                       Maps to:
CareRequestItem.DeniedLevelOfCare

deniedQuantity Integer       The quantity of the denied service. Maps       No         46.0
to:
CareRequestItem.DeniedQuantity

<!-- page:1732 -->

AFLS Overview                                                                                           Request Bodies



Name                Type     Description                                    Required            Available
Version
effectiveDate String         Effective date for the diagnosis Maps to:      No                  46.0
CareRequestItem.EffectiveDate

endDate             String   Termination date for the service. Maps to: No                      46.0
CareRequestItem.EndDate

freeFormProcedure String     Free-form description of the procedure.        No                  46.0
Description                  Maps to:
CareRequestItem.FreeFormProcedureDescription

healthcare    String         Healthcare Procedure Code.                     No                  46.0
ProcedureCode

id                  String   ID of the CareRequestItem.                     Required for PATCH. 46.0

modifiedCare        String   Modified Care End Date                         No                  46.0
EndDate

modifiedCode        String   Modified Code                                  No                  46.0

modifiedCode        String   Description of the modified service code. No                       46.0
Description                  Maps to:
CareRequestItem.ModifiedCodeDescription

modifiedCode        String   Code type for the modified service. Maps No                        46.0
Type                         to:
CareRequestItem.ModifiedCodeType

modifiedCode        String   ID of the code type for the modified           No                  46.0
TypeId                       service. Maps to:
CareRequestItem.ModifiedCodeTypeIdentifier

modified      String         Effective date for the modified service.       No                  46.0
EffectiveDate                Maps to:
CareRequestItem.ModifiedEffectiveDate

modifiedLevel String         Specifies the modified level of care for the No                    52.0
OfCare                       patient. Maps to:
CareRequestItem.ModifiedLevelOfCare

modifiedModifier String      Modifier for modified service code. Maps No                        46.0
to:
CareRequestItem.ModifiedModifier

modifiedModifier String      Modifier description for modified service      No                  46.0
Description                  code. Maps to:
CareRequestItem.ModifiedModifierDescription

modifiedProcedure String     The code set for the modified service, drug, No                    52.0
CodeSet                      or device associated with the care request
item. Maps to:
CareRequestItem.ModifiedProcedureCodeSet

<!-- page:1733 -->

AFLS Overview                                                                                 Request Bodies



Name                Type      Description                                  Required   Available
Version
modifiedQuantity Integer      The modified quantity of requested care. No             46.0
Maps to:
CareRequestItem.ModifiedQuantity

modifier1           String    First modifier for the service code. Maps No            46.0
to: CareRequestItem.Modifier

modifier1           String    Description for the first modifier for the   No         46.0
Description                   service code. Maps to:
CareRequestItem.ModifierDescription

modifier2           String    Second modifier for service code. Maps to: No           46.0
CareRequestItem.Modifier2

modifier2           String    Description of the second modifier for the No           46.0
Description                   service code. Maps to:
CareRequestItem.Modifier2Description

modifier3           String    Third modifier for service code. Maps to:    No         46.0
CareRequestItem.Modifier3

modifier3           String    Description of the third modifier for the    No         46.0
Description                   service code. Maps to:
CareRequestItem.Modifier3Description

modifier4           String    Fourth modifier for service code. Maps to: No           46.0
CareRequestItem.Modifier4

modifier4           String    Description of the fourth modifier for the No           46.0
Description                   service code. Maps to:
CareRequestItem.Modifier4Description

modifierCodeSet String        The modifier code set for the service code No           52.0
associated with the care request item.
Maps to
CareRequestItem.ModifierCodeSet

name                String    Name of the care request item. Maps to       No         46.0
CareRequestItem.Name

priority            String    The priority representing the urgency of No             57.0
the item's authorization request. Maps to
CareRequestItem.Priority

procedureCodeSet String       The code set for the service, drug, or device No        52.0
associated with the care request item.
Maps to
CareRequestItem.ProcedureCodeSet

quantity            Integer   The quantity of the item that is requested. No          46.0
Maps to:
CareRequestItem.Quantity

<!-- page:1734 -->

AFLS Overview                                                                                           Request Bodies



Name                Type                 Description                                 Required   Available
Version
quantityType        String               Quantity type for the request such as days, No         46.0
units, or visits. Maps to:
CareRequestItem.QualityType

reasonCode          String               The reason justifying the care request of   No         57.0
the item. Maps to:
CareRequestItem.ReasonCode

requestType         String               The type of item request. Maps to:          No         57.0
CareRequestItem.RequestType

requestedLength Integer                  The number of days requested for the        No         52.0
OfStay                                   admission. Maps to:
CareRequestItem.RequestedLengthOfStay

requestedLevel String                    Specifies the requested level of care for the No       52.0
OfCare                                   patient. Maps to:
CareRequestItem.RequestedLevelOfCare

requestedService String                  The end date of the requested service.      No         52.0
EndDate                                  Maps to:
CareRequestItem.RequestedServiceEndDate

requestedService String                  The start date of the requested service.    No         52.0
StartDate                                Maps to:
CareRequestItem.RequestedServiceStartDate

responseDateTime String                  The date and time when the response was No             63.0
sent for the drug request.

serviceCategory String                   Name of the service type such as medical No            46.0
care, diagnostic radiology, pharmacy, or
diagnostic laboratory. Maps to:
CareRequestItem.ServiceCategory

serviceCategory String                   Alphanumeric code that uniquely identifies No          46.0
Code                                     a service type. Maps to:
CareRequestItem.ServiceCategoryCode

servicingFacility Servicing Facility     The facility where a patient receives service No       57.0
Input                of the requested item. Maps to:
CareRequestItem.ServicingFacility

servicingProvider Servicing              The healthcare provider who provides the No            57.0
Practitioner Input   service of the requested item. Maps to:
CareRequestItem.ServicingProvider

sourceSystem        String               System from which the request was           No         46.0
sourced. Maps to:
CareRequestItem.SourceSystem

<!-- page:1735 -->

AFLS Overview                                                                                      Request Bodies



Name                   Type         Description                                 Required   Available
Version
sourceSystem           String       ID of the system from which the request     No         46.0
Identifier                          was sourced. Maps to:
CareRequestItem.SourceSystemIdentifier

sourceSystem           String       Timestamp of the most recent update from No            46.0
Modified                            the source system. Maps to:
CareRequestItem.SourceSystemModified

status                 String       The authorization status of this service.   No         46.0
Maps to:
CareRequestItem.Status

statusReason           String       Reason for the authorization status of this No         46.0
service. Maps to:
CareRequestItem.StatusReason

submittedDateTime String            The date and time when the drug request Yes            63.0
was submitted. This is unavailable for
PATCH requests.

transactionNumber Integer           The transaction number assigned to the No              63.0
drug request. This is unavailable for PATCH
requests.




## Care Requests List Input

A list of care authorization requests.
Root XML tag
<careRequestsList>
JSON Schema


{
"careRequestsList": [
{
"careRequestCase": {
"caseOrigin": "Web"
},
"careRequest": {
"recordType": "Admission",
"authorizationRefIdentifier": "1234",
"name": "Headache",
"member": "001RM000005XHdbYAG",
"memberPrimaryPlan": "0SqRM00000000Fp0AI",
"caseSubStatus": "active",
"servicingFacility": {
"npi": "742963",
"servicingFacilityId": "0klRM0000004CBnYAM"
},

<!-- page:1736 -->

AFLS Overview                                             Request Bodies



"requestingPractitioner": {
"npi": "11111",
"healthCareProviderId": "0cmRM0000000tldYAA"
}
},
"careRequestItems": [
{
"authApprovalIdentifier": "123",
"authorizationRefIdentifier": "123",
"name": "CRI Connect-1.0",
"procedureCodeSet": "0hxxG0000008hKxxAI",
"requestType": "Order",
"priority": "Stat",
"healthcareProcedureCode": "0XSxx000000SXxxA2",
"reasonCode": "0hsRM00000003ytYAA",
"servicingFacility": {
"npi": "742963",
"servicingFacilityId": "0klRM0000004CBnYAM"
},
"servicingProvider": {
"npi": "11111",
"healthCareProviderId": "0cmRM0000000tldYAA"
},
"clinicalServiceRequestId": "0jyRM0000004CAGYA2"
}
],
"careDiagnoses": [
{
"name": "CD Connect 1.0",
"presentOnAdmission": "Yes",
"diagnosisCodeSet": "0hsSG0000008hKjYAI",
"healthcareDiagnosisCode": "0XNSG0000000PjB4AU",
"healthConditionId": "0j4RM0000004Mk9YAE"
}
],
"careRequestDrugs": [
{
"name": "CRD Connect 1.0",
"status": "Active",
"statusReason": "Insufficient Information",
"requestType": "Filler Order",
"drugAdministrationSetting": "Inpatient",
"priority": "Routine",
"medicationRefObjectId": "0kmRM0000004CSeYAM",
"authApprovalIdentifier": "123",
"authorizationRefIdentifier": "123",
"servicingFacility": {
"npi": "742963",
"servicingFacilityId": "0klRM0000004CBnYAM"
},
"servicingProvider": {
"npi": "11111",
"healthCareProviderId": "0cmRM0000000tldYAA"
}

<!-- page:1737 -->

AFLS Overview                                                                                                           Request Bodies



}
],
"assessmentLinks": [
{
"id": "0U3SG00000068Cb0AI"
},
"patient": {
"memberId": "001RM000005XHdbYAG",
"lastName": "Green",
"firstName": "Charles",
"birthDate": "2001-10-26T21:32:52"
}
}
]
}

Properties

Name                  Type                   Description                                  Required              Available
Version
careRequestsList Care Authorization          List of Care Requests to be created or       Yes                   46.0
Request Input[]        updated. (Up to 25 items.)




## Care Request Reviewer Input

The general details of the care request, care request item, care request drug, or care diagnosis associated with the care request reviewer.
Root XML tag
<careRequestReviewer>
JSON example



## "careRequestReviewers": [{

"reviewer": "0cmx0000000JP7WAAW",
"reviewerType": "Registered Nurse Review",
"status": "In process",
"reviewDate": "2021-04-20T13:09:04.359Z",
"reviewerNotes": "Care Request Review is In Process"
}]

Properties

Name                  Type                   Description                                  Required or           Available
Optional              Version
contentDocument Content Document The details of the content document.                     No                    57.0
Input

id                    String                 The ID of the care request reviewer.         Yes                   52.0

reviewDate            String                 The date when the care request was           No                    52.0
reviewed.

<!-- page:1738 -->

AFLS Overview                                                                                Request Bodies



Name                Type     Description                               Required or   Available
Optional      Version
reviewer            String   The name of the user who reviewed the     Yes           52.0
care request.

reviewerNotes String         The notes related to the review.          No            52.0

reviewerType        String   The type of the reviewer who reviewed     No            52.0
the care request.
Possible values are:
- Medical Director Review
- Registered Nurse Review
- Physician Review
- Peer Review

status              String   The status of the care request.           No            52.0
Possible values are:
- Approved
- Denied
- In process




## Care Request Subscriber Input

The primary member on the plan.
Root XML tag
<subscriber>
Properties

Name                Type     Description                               Required      Available
Version
addressLine1        String   Subscriber’s address line 1.              No            46.0

addressLine2        String   Subscriber’s address line 2.              No            46.0

city                String   Subscriber’s city.                        No            46.0

firstName           String   First name of the subscriber. Maps to:    No            46.0
Account.FirstName

lastName            String   Last name of the subscriber. Maps to:     Yes           46.0
Account.LastName

memberId            String   Subscriber Member ID.                     Yes           46.0

middleName          String   Middle name of the subscriber. Maps to:   No            46.0
Account.MiddleName

<!-- page:1739 -->

AFLS Overview                                                                                                  Request Bodies



Name                  Type                     Description                               Required      Available
Version
state                 String                   Subscriber’s state.                       No            46.0

suffix                String                   Name suffix of the subscriber for a person No           46.0
account. Maximum size is 40 characters.
Maps to: Account.Suffix

zipCode               String                   Subscriber’s zip code.                    No            46.0




## Content Document Input

Input representation for documents linked to the care request record.
Root XML tag
<documents>
Properties

Name                  Type                     Description                               Required or   Available
Optional      Version
category              String                   The category that the supporting content Required       63.0
belongs to. This is unavailable for PATCH
requests.

id                    String                   ID of the clinical document present in the Required     55.0
ContentDocument object.

reason                String                   The code representing the reason why the Optional       63.0
supporting content is required. This is
unavailable for PATCH requests.

sequence              String                   The sequence number of the content         Optional     63.0
when multiple contents are available. This
is unavailable for PATCH requests.




## Create Visit Request Input

Input representation of the create visit request.
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

<!-- page:1740 -->

AFLS Overview                                                                                              Request Bodies



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
account              String               ID of the account that is associated with a Required     55.0
visit.

actionPlanTemplate Action Plan            Represents the details of an action plan Optional        55.0
Template Input       template. Action plan templates define the
sets of tasks that your sales reps perform
during visits.

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

status               String               Indicates the status of the visit.         Optional      55.0
Valid values are:
- Abondoned
- Completed
- InProgress
- Planned

statusRemarks String                      Additional remarks or comments provided Optional         55.0
by the sales representatives.

<!-- page:1741 -->

AFLS Overview                                                                                                Request Bodies



Name                Type                 Description                                   Required or   Available
Optional      Version
visitPriority String                     Priority of the visit.                        Optional      55.0
Valid values are:
- High
- Low
- Medium

visitType           String               ID of the visit type. This field is a lookup to Optional    55.0
the Worktype object.

visitedParty        Visited Party        Represents the contacts from the customer Optional          55.0
Attributes Input[]   organization who are being visited.

visitor             Visitor Attributes   Represents the service resources from the Required          55.0
Input[]              organization who are executing the visit.




## Custom Field Value Input

Adds additional information to any fields not mapped by the medication statement API.
Root XML tag
<CustomFieldValue>
JSON example
{
"CustomFieldValue": [ {
"fieldName": "Laterality__c",
"dataType": "picklist",
"fieldValue": "Bilateral",
} ]
}

Properties

Name                Type                 Description                                   Required or   Available
Optional      Version
dataType            String               Specifies the primitive data type of a field. Required      53.0
Possible values are:
- Boolean
- DateOnly
- DateTime
- Number
- String
- TimeOnly

fieldName           String               The name of the field.                        Required      53.0

<!-- page:1742 -->

AFLS Overview                                                                                                      Request Bodies



Name                   Type                   Description                                  Required or     Available
Optional        Version
fieldValue             Object                 The value of the field.                      Required        53.0




## Digital Verification Input

Input representation of the request to perform verification tasks for digital verification records.
JSON example
{
"digitalVerificationInputFieldsMap": {
"VerificationStatusCategory": "Completed",
"Comment": "done successfully",
"VerificationSite": "USA"
},
"userCredentials": {
"loginId": "user@example.com",
"password": "123456"
},
"digitalVerificationId": "15Exx0000004CAeEAM",
sessionId:12Exz0022004CAfABM
}

Properties

Name                   Type                   Description                                  Required or     Available
Optional        Version
digital                String                 ID of the digital verification record for    Required        60.0
Verification                                  which the digital verification is to be
Id                                            performed.

sessionId              String                 ID that tracks the session established       Optional        60.0
through a connected app or remote
system in Salesforce.

user                   User Credentials       Authentication credentials of the user       Required        60.0
Credentials            Input                  performing the digital verification.

digital                Digital Verification   Map structure holding key-value pairs of     Required        60.0
Verification           Input Fields Map       digital verification input fields.
InputFields
Map




## Digital Verification Input Fields Map

Input representation of the key-value pairs containing the fields to be updated for the digital verification.

<!-- page:1743 -->

AFLS Overview                                                                                                     Request Bodies



JSON example
{
"digitalVerificationInputFieldsMap": {
"VerificationStatusCategory": "Completed",
"Comment": "done successfully",
"VerificationSite": "USA"
}
}

Properties

Name                  Type                 Description                                Required or         Available
Optional            Version
digital               Map<String,          Specifies the map holding the digital       Required           60.0
Verification          String>              verification record details to be modified.
InputFields
Map




## Dispenser Address Input

Address of the pharmacy.
Root XML tag
<dispenserAddress>
Properties

Name                  Type                 Description                                Required            Available
Version
city                  String               City of the pharmacy.                      No                  46.0

country               String               Country of the pharmacy.                   No                  46.0

postalCode            String               Postal code of the pharmacy.               No                  46.0

state                 String               State of the pharmacy.                     No                  46.0

street                String               Street of the pharmacy.                    No                  46.0




## Download Provider Input

The request representation to download provider data using an external identifier.
Properties

Property        Type            Description                        Required                       Available Version
Name
country         String          The country code where the         Required                       66.0
Code                            search was performed.

<!-- page:1744 -->

AFLS Overview                                                                                   Request Bodies



Property        Type            Description                          Required   Available Version
Name
data            String          The external data source, such Optional         66.0
source                          as One Key.

entity          String          The type of entity, such as          Required   66.0
Type                            individual or workplace.

external        String          The unique external ID from the Required        66.0
Id                              search response.

in              Boolean         Indicates whether the record is Optional        66.0
Contract                        currently in contract.




## Document Management Input

Input representation for the document split request.
Root XML tag
<DocumentManagementInput>
JSON example
{
"pageSpecificationList": {
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

<!-- page:1745 -->

AFLS Overview                                                                                                     Request Bodies



Properties

Name                 Type                  Description                                   Required or     Available
Optional        Version
isOcrRequested Boolean                     Indicates whether OCR is required to   Optional               55.0
process the content document (true) or
not (false).
By default, OCR is performed on the first
five pages of the content document.


## Note: Set this field value to true to

perform OCR on all the pages of a
content document that contains
more than five pages.

linkedObjectFieldsMap Map<String,          Represents the map that contains the          Optional        55.0
String>               linked object fields. For example, the linked
object is the Document Checklist Item for
Salesforce.

pageSpecificationList Page Specification   The page specifications list representation. Required         55.0
List Input[]

targetFileName String                      The name of the target file that is created Optional          55.0
from the split document.




## Document Process Input

Input representation of the content document or received document record to create or update a Salesforce object record.
Properties

Name                 Type                  Description                                   Required or     Available
Optional        Version
additionalFields Map<String,               List of additional fields that you want to Optional           55.0
Object>               create or update in the target object and
which are not present in the Intelligent
Form Reader field mappings.

attachDocument Boolean                     Indicates whether to automatically create Optional            55.0
the DocumentChecklistItem (DCI) and
ContentDocumentLink records to link the
document to the target object (true) or
not (false).
Default value is false.

documentTypeId String                      ID of the document type for the document Optional             55.0
checklist item.

<!-- page:1746 -->

AFLS Overview                                                                                       Request Bodies



Name                  Type         Description                                Required or   Available
Optional      Version
fieldsWithout Fields Without       List of fields that must not have any       Optional     55.0
ConflictList Conflict Input[]      conflicts for the record creation or update
process.

ignoreFieldValue Boolean           Indicates whether to ignore conflicts in   Optional      55.0
Conflict                           OCR (true) or not (false).
Default value is false.

linkedObjectId String              ID of the linked object record.            Optional      55.0

objectApiName String               API name of the target object in which you Optional      55.0
want to create or update a record.

overrideConfidence Integer         Conflict confidence score threshold value Optional       55.0
ScoreThreshold                     for the extracted value.


## Note: The value of this field

overrides the confidence score
threshold value set on the user
interface.

recordTypeId          String       ID of the record type of the target object. Optional     55.0

templateApiName String             API name of the document template to       Optional      59.0
retrieve.




## Enrollee Product Input

Data for a single enrollee product.
Root XML tag
<careProgramProductData>
JSON example
{
"providerId": "provider3",
"productId": "product4"
}

Properties

Name                  Type         Description                                Required      Available
Version
productId             String       ID of the Product2 object as configured Yes              46.0
in the Care System Field Mapping.

providerId            String       ID of the provider’s account as configured No            46.0
in the Care System Field Mapping.

<!-- page:1747 -->

AFLS Overview                                                                                                 Request Bodies




## Fields Without Conflict Input

Input representation of the list of fields without conflict for record creation.
Root XML tag
<FieldsWithoutConflict>
Properties

Name                   Type                   Description                               Required or   Available
Optional      Version
field                  String                 The name of the field.                    Optional      55.0




## FHIR Address Input

Input representation for the Address FHIR object.
The Address FHIR object maps to the ContactPointAddress object in Salesforce.
JSON example
{
"address": [ {
"use": "temp",
"type": "postal",
"city": "San Francisco",
"state": "California",
"country": "U.S",
"postalCode": "12345",
"line": "Salesforce",
"periodStart": "1999-11-09T15:40:30.000Z",
"periodEnd": "20202-01-02T15:40:30.000Z"
} ]
}

Properties

Name                   Type                   Description                               Required or   Available
Optional      Version
additional             Custom Field Value Adds additional information to any fields Optional          53.0
Information            Input[]            not mapped in this API.

city                   String                 The city of the address.                  Optional      53.0

country                String                 The country of the address.               Optional      53.0

line                   String                 The street of the address.                Optional      53.0

periodEnd              String                 The date until when the address is active. Optional     53.0

periodStart            String                 The date from when the address is active. Optional      53.0

postalCode             String                 The postal code for the address.          Optional      53.0

state                  String                 The state or province of the address.     Optional      53.0

<!-- page:1748 -->

AFLS Overview                                                                                             Request Bodies



Name                Type                 Description                                Required or   Available
Optional      Version
type                String               The type of address. For example, postal   Optional      53.0
and physical.

use                 String               The usage type of the address.             Optional      53.0




## FHIR Codeable Concept Input

Input representation for the CodeableConcept FHIR object.
The CodeableConcept FHIR object maps to the CodeSetBundle object in Salesforce.
Root XML tag
<FhirCodeableConceptInput>
JSON example
{
"codeableConcept": {
"text": "Burn of Ear",
"coding": [ {
"display": "Burn of ear",
"code": "1234567",
"system": "http://sfdc.co",
"version": "2.16.840.1.113883.6.96",
"isActive": true,
"isPrimary": true,
"use": "Clinical",
"userSelected": true,
"startDate": "1993-11-09T15:40:30.000Z",
"endDate": "2021-08-24T17:00:00.000Z",
"additionalInformation": [ {
"fieldName": "IsCustomCode",
"dataType": "boolean",
"fieldValue": true
} ]
}, {
"display": "Burn of ear",
"code": "9876543",
"system": "http://sfdc.org",
"version": "3.17.841.2.113884.7.97",
"isActive": true,
"isPrimary": true,
"use": "Clinical",
"userSelected": true,
"startDate": "1997-01-25T03:40:30.000Z",
"endDate": "2021-08-24T05:00:00.000Z",
"additionalInformation": [ {
"fieldName": "IsCustomCode",
"dataType": "boolean",
"fieldValue": true
}
} ]

<!-- page:1749 -->

AFLS Overview                                                                                                   Request Bodies



}
}

Properties

Name                 Type                 Description                                     Required or   Available
Optional      Version
additional           Custom Field Value Adds additional information to any fields Optional              53.0
Information          Input[]            not mapped in this API.

coding               FHIR Coding Input[] The codes that are part of this                  Optional      53.0
codeableConcept. You can specify up to
15 codings for a concept.

hash                 String               The unique key that represents the                Optional    53.0
concept with its combination of codings.
If this value isn’t specified explicitly, a value
is auto-generated by the system.

recordId             String               recordId                                        Optional      53.0

text                 String               The human-readable textual                Optional            53.0
representation of the concept represented
by the codeableConcept and its codings.




## FHIR Codeable Concept Or ID Input

Input representation for FHIR Codeable Concept or ID.
Root XML tag
<FhirCodeableConceptOrIdInput>
JSON example
{
"codeableConcept":{
"text":"Burn of Ear status reason",
"coding":[ {
"display":"Burn of status reasonn ear",
"code":"1234995607",
"system":"http://sfdc.co",
"version":"2.16.840.1.113883.6.96",
"isActive":true,
"isPrimary":true,
"use":"Clinical",
"userSelected":true,
"startDate":"1993-11-09T15:40:30.000Z",
"endDate":"2021-08-24T17:00:00.000Z"
}
] }
}

<!-- page:1750 -->

AFLS Overview                                                                                                      Request Bodies



Properties

Name                 Type                     Description                           Required or            Available
Optional               Version
codeableConcept FHIR Codeable                 Represents the CodeableConcept FHIR   Required               54.0
Concept                  object.
Note:
Optional if
salesforceId
is specified.

salesforceId         String                   The ID of the Salesforce record.      Required               54.0

Note:
Optional if
codeableConcept
is specified.




## FHIR Coding Input

Input representation for the Coding FHIR object.
The Coding FHIR object maps to the CodeSet object in Salesforce.
Root XML tag
<FhirCodingInput>
JSON example



## "coding": [ {

"display": "Burn of ear",
"code": "1234567",
"system": "http://sfdc.co",
"version": "2.16.840.1.113883.6.96",
"isActive": true,
"isPrimary": true,
"use": "Clinical",
"userSelected": true
"startDate": "1993-11-09T15:40:30.000Z",
"endDate": "2021-08-24T17:00:00.000Z",
"additionalInformation": [ {
"fieldName": "IsCustomCode",
"dataType": "boolean",
"fieldValue": true
} ]
} ]
}

<!-- page:1751 -->

AFLS Overview                                                                                              Request Bodies



Properties

Name                 Type                  Description                               Required or   Available
Optional      Version
additional           Custom Field Value Adds additional information to any fields Optional         53.0
Information          Input[]            not mapped in this API.

code                 String                The industry-defined code that represents Optional      53.0
a concept and is defined by its system
version.

display              String                The human-readable text representation Optional         53.0
of the code.

endDate              String                The date until when the code is valid.    Optional      53.0

hash                 String                The code set key associated with the code Optional      53.0
set record create for this coding. This field
is a text field with a unique value to
identify the code set record. You can either
manually assign a code set key, or let the
system generate one for you if you don’t
specify it in your request.

isActive             Boolean               Indicates whether the code is active      Optional      53.0
(true) or not (false).

isCustomCode         Boolean               Indicates whether the defined code is a   Optional      54.0
custom code (true) or not (false).

recordId             String                The Salesforce record ID of the code.     Optional      53.0

startDate            String                The date from when the code is valid.     Optional      53.0

system               String                The terminology system that defines the   Optional      53.0
code.

use                  String                The code set type associated with the code Optional     53.0
set record, stored as a picklist value.

userSelected         Boolean               Indicates whether the code was selected Optional        53.0
directly by the user and is intended to be
the primary code for the concept.

version              String                The version of the system that defines the Optional     53.0
code.




## FHIR Contact Point Input

Input representation for the ContactPoint FHIR object.
The ContactPoint FHIR object maps to the ContactPoint object in Salesforce.

<!-- page:1752 -->

AFLS Overview                                                                                              Request Bodies



JSON example
{
"ContactPoint": [ {
"system": "email",
"value": "a@bc.com",
"use": "office",
"rank": "1",
"periodStart": "1998-05-26T15:40:30.000Z",
"periodEnd": "2021-08-09T15:40:30.000Z"
} ]
}

Properties

Name                 Type                Description                                 Required or   Available
Optional      Version
additional           Custom Field Value Adds additional information to any fields Optional         53.0
Information          Input[]            not mapped in this API.

periodEnd            String              The date until when the contact detail is   Optional      53.0
active.

periodStart          String              The date from when the contact detail is    Optional      53.0
active.

rank                 Integer             The preference rank of the contact detail Optional        53.0
among all the contact details associated
with a person.

system               String              The system of the contact detail. For       Optional      53.0
example, email and phone.

use                  String              The usage type of the contact detail. For   Optional      53.0
example, home and office.

value                String              The actual details of the patient’s contact Optional      53.0
point phone record stored in the
ContactPointPhone.Telephone
Number. ContactPointPhone
.AreaCode, ContactPointPhone
.ExtensionNumber, and
Contact.Email fields.




## FHIR Dispense Input

The input representation of FHIR Dispense.
Root XML tag
<FhirDispenseInput>

<!-- page:1753 -->

AFLS Overview                                                                                            Request Bodies



Properties

Name                 Type                  Description                             Required or   Available
Optional      Version
medicationReference String                 The reference of the medication request. Optional     54.0




## FHIR Dosage Input

The input representation of dosage information for a patient’s medication.
The Dosage FHIR resource maps to the PatientMedicationDosage object in Salesforce.
Root XML tag
<FhirDosageInput>
JSON example
{
"sequence":"10.0",
"text":"commentsText",
"additionalInstruction":"Additioanl Instructions",
"patientInstruction":"Patient Instructions",
"asNeeded":"true",
"site":{
"salesforceId":"0iPxx00000000MbEAI" },
"route":{
"codeableConcept":{
"text":"Burn of Ear route",
"coding":[
{
"display":"Burn of ear route",
"code":"123456700",
"system":"http://sfdc.co",
"version":"2.16.840.1.113883.6.96",
"isActive":true,
"isPrimary":true,
"use":"Clinical",
"userSelected":true,
"startDate":"1993-11-09T15:40:30.000Z",
"endDate":"2021-08-24T17:00:00.000Z",
} ]
}
},
"method":{
"codeableConcept":{
"text":"Burn of Ear Method",
"coding":[
{
"display":"Burn of ear",
"code":"1234567777",
"system":"http://sfdc.co",
"version":"2.16.840.1.113883.6.96",
"isActive":true,

<!-- page:1754 -->

AFLS Overview                                                                                            Request Bodies



"isPrimary":true,
"use":"Clinical",
"userSelected":true,
"startDate":"1993-11-09T15:40:30.000Z",
"endDate":"2021-08-24T17:00:00.000Z",
} ]
}
},
"doseAndRate":{
"type":"Ordered",
"dose":{
"dosageQuantityType":"Dose",
"dosageQuantityNumerator":"10",
"dosageQuantityDenominator":"20",
"dosageUnit":{
"unitOfMeasure":{
"unitCode":"MGTest",
"description":"MG description",
"type":"Custom" }
}
},
"rate":{
"dosageRateType":"Frequency Ratio",
"dosageRateNumerator":"2",
"dosageRateDenominator":"3",
"dosageRateUnit":{
"salesforceId":"0hExx0000000001EAA" }
}
},
"sourceSystem":"http://sfdc.co",
"sourceSystemId":"567890",
"sourceSystemModified":"2012-07-26T15:40:30.000Z"
}

Properties

Name                 Type                Description                               Required or   Available
Optional      Version
additionalInformation Custom Field Value The additional information associated with Optional     54.0
Input[]             the medication for the patient.

additionalInstruction String             The supplemental instructions or warnings Optional      54.0
associated with the medication for the
patient.

asNeeded             Boolean             Indicates whether the medication is taken Optional      54.0
on an as-needed basis.

doseAndRate          FHIR Dose And Rate The amount of dosage administration.       Optional      54.0
Input

method               FHIR Codeable       The method of dosage administration.      Optional      54.0
Concept Or ID Input

<!-- page:1755 -->

AFLS Overview                                                                                                 Request Bodies



Name                 Type                  Description                                  Required or   Available
Optional      Version
patientInstruction String                  The patient or consumer instructions         Optional      54.0
associated with this medication.

route                FHIR Codeable       The route of dosage adminisitration.           Optional      54.0
Concept Or ID Input

sequence             Double                The position of this medication in the       Optional      54.0
sequence of medications prescribed to a
patient.

site                 FHIR Codeable       The site of dosage adminisitration.            Optional      54.0
Concept Or ID Input

sourceSystem         String                The source system from where the dosage Optional           54.0
record was brought into Salesforce.

sourceSystemId String                      The identifier of the dosage record in its   Optional      54.0
source system.

sourceSystemModified String                The date and time when the dosage record Optional          54.0
was last modified in its source system.

text                 String                The free text dosage instructions            Optional      54.0
associated with the medication for the
patient.




## FHIR Dose

Input representation for the dosage quantity.
Root XML tag
<FhirDoseInput>
JSON example
{
"dosageQuantityType":"Dose",
"dosageQuantityNumerator":"10",
"dosageQuantityDenominator":"20",
"dosageUnit":{
"unitOfMeasure":{
"unitCode":"MGTttest",
"description":"MG description",
"type":"Custom"
}
}
}

<!-- page:1756 -->

AFLS Overview                                                                                              Request Bodies



Properties

Name                   Type                 Description                              Required or   Available
Optional      Version
dosageQuantityDenominator Double            The denominator value for the quantity of Optional     54.0
medication per dose. This field can be used
to record a simple quantity or a quantity
range.

dosageQuantityNumerator Double              The numerator value for the quantity of Optional       54.0
medication per dose. This field can be used
to record a simple quantity or a quantity
range.

dosageQuantityType String                   The type of dosage quantity recorded in Optional       54.0
DosageQuantityNumerator and
DosageQuantityDenominator.
Possible values are:
- Dose
- Dose Range

dosageUnit             FHIR Unit Of         The unit of dosage quantity.             Optional      54.0
Measure Or ID




## FHIR Dose And Rate

Input representation of the specified dose and rate.
Root XML tag
<FhirDoseAndRateInput>
JSON example
{
"type":"Ordered",
"dose":{
"dosageQuantityType":"Dose",
"dosageQuantityNumerator":"10",
"dosageQuantityDenominator":"20",
"dosageUnit":{
"unitOfMeasure":{
"unitCode":"MGTttest",
"description":"MG description",
"type":"Custom"
}
}
},
"rate":{
"dosageRateType":"Frequency Ratio",
"dosageRateNumerator":"2",
"dosageRateDenominator":"3",

<!-- page:1757 -->

AFLS Overview                                                                                             Request Bodies



"dosageRateUnit":{
"unitOfMeasure":{
"unitCode":"MGTeste2",
"description":"MG description2",
"type":"Custom"
}
}
}
}

Properties

Name                 Type                  Description                              Required or   Available
Optional      Version
dose                 FHIR Dose Input       Represents the dosage quantity.          Optional      54.0

rate                 FHIR Rate Input       Represents the dosage rate.              Optional      54.0

type                 String                The type of the specified dose.          Optional      54.0




## FHIR Human Name Input

The input representation for the name of a person and all its associated metadata.
The HumanName FHIR object maps to the HumanName object in Salesforce.
JSON example
"humanName": [
{
"use": "Official",
"text": "Charles Green",
"family": "Green",
"given": "Charles",
"prefix": "Mr.",
"suffix": "Jr.",
"periodStart": "1998-05-26T15:40:30.000Z",
"periodEnd": "2021-08-09T15:40:30.000Z",
"sourceSystem": "http://sfdc.co",
"sourceSystemId": "567890",
"sourceSystemModified": "2012-07-26T15:40:30.000Z"
}
]

Properties

Name                 Type                  Description                              Required or   Available
Optional      Version
additional           Custom Field          Adds additional information to any fields Optional     53.0
Information          Value[]               not mapped in this API.

<!-- page:1758 -->

AFLS Overview                                                                                                 Request Bodies



Name                  Type                   Description                                Required or   Available
Optional      Version
family                String                 The last name of the patient. This field   Optional      53.0
stores a combination of the patient’s
middle and last name.

given                 String                 The first name of the patient.             Optional      53.0

periodEnd             String                 The date until when the name is active.    Optional      53.0

periodStart           String                 The date from when the name is active.     Optional      53.0

prefix                String                 The prefix of the name.                    Optional      53.0

sourceSystem          String                 The source system from where the           Optional      53.0
humanName is brought into Salesforce.

sourceSystemId String                        The identifier of the humanName record     Optional      53.0
in its source system.

sourceSystem          String                 The date and time when the humanName Optional            53.0
ModifiedDate                                 record was last modified in its source
system.

suffix                String                 The suffix of the name.                    Optional      53.0

text                  String                 The full name of the person.               Optional      53.0

use                   String                 The usage type of the name.                Optional      53.0




## FHIR Identifier Input

The input representation of the Identifier FHIR object.
The Identifier FHIR object maps to the Identifier object in Salesforce.
Root XML tag
<FhirIdentifierInput>
JSON example
{
"identifier": [ {
"assigner": {
"referenceResource": "Organization",
"referenceId": "XYZId"
},
"type": {
"text": "Passport number",
"coding": [ {
"display": "Passport number",
"code": "PPN",
"isActive": true,
"use": "Identifier"
} ]
},

<!-- page:1759 -->

AFLS Overview                                                                                                         Request Bodies



"value": "ABCD5678",
"use": "Official",
"periodStart": "1998-05-26T15:40:30.000Z",
"periodEnd": "2021-08-09T15:40:30.000Z",
"sourceSystem": "http://sfdc.co",
"sourceSystemId": "567890",
"sourceSystemModified": "2012-07-26T15:40:30.000Z"
} ]
}

Properties

Name                    Type                Description                                  Required or          Available
Optional             Version
additional              Custom Field Value Adds additional information to any fields Optional                 53.0
Information             Input[]            not mapped in this API.

assigner                FHIR Reference      The authorized body that issued the          Optional             53.0
Input               identifier, stored as a reference to the
Account object.

periodEnd               String              The date and time until when the Identifier Optional              53.0
is active, recorded in DateTime format.

periodStart             String              The date and time from when the Identifier Optional               53.0
is active, recorded in DateTime format.

sourceSystem            String              The source system from which the             Optional             53.0
identifier record was brought into
Salesforce.

sourceSystemId String                       The identifier of the identifier record in its Optional           53.0
source system.

sourceSystemModifiedDate String             The date and time when the identifier        Optional             53.0
record was last modified in its source
system.

type                    FHIR Codeable       The system-defined code that represents Optional                  53.0
Concept Input       the type of ID the identifier record is.

use                     String              The usage type of the Identifier record.     Optional             53.0

value                   String              The value associated with an Identifier      Optional             53.0
record.




## FHIR Medication Statement

Input representation for the Medication Statement FHIR object.
This is a record of medication that the patient is currently taking or has taken in the past. The Medication Statement FHIR resource maps
to the MedicationStatement object in Salesforce.

<!-- page:1760 -->

AFLS Overview                                                                                               Request Bodies




## Root XML tag

<FhirMedicationStatementInput>
Properties

Name                  Type                Description                                 Required or   Available
Optional      Version
additionalInformation Custom Field Value Additional information associated with the Optional        54.0
Input[]             medication statement.

basedOn               FHIR Reference      Additional information based on which       Optional      54.0
Input[]             the medication statement is prepared.

category              String              The category of the medication statement. Optional        54.0

context               FHIR Reference      The specific context associated with the    Optional      54.0
Input               medication.

dateAsserted          String              The date and time the medication            Optional      54.0
statement is made.

derivedFrom           FHIR Reference      Additional information about where the      Optional      54.0
Input[]             medication statement is derived.

dosage                FHIR Dosage Input[] Represents the dosage information set for Optional        54.0
medication.

effectiveEndDateTime String               The stated end date and time for the        Optional      54.0
medication.

effectiveStartDateTime String             The stated start date and time for the      Optional      54.0
medication.

identifier            FHIR Identifier     Set an identifier value to the medication   Optional      54.0
Input[]             statement.

informationSource FHIR Reference          Set who or where the information in the     Optional      54.0
Input               medication statement came from.

medication            FHIR Medication     Represents detailed information about       Required      54.0
Resource Input      different medications.

partOf                FHIR Reference      Validates only references of medication     Optional      54.0
Input[]             dispense, medication statement,
procedure, observation are passed.

reasonCode            FHIR Codeable       The system-defined code that specifies the Optional       54.0
Concept Or ID       reason for the medication.
Input[]

reasonReference FHIR Reference            The observation, condition, or diagnostic Optional        54.0
Input[]             report that warranted the medication.

sourceSystem          String              The name of the system this record came Optional          54.0
from.

<!-- page:1761 -->

AFLS Overview                                                                                              Request Bodies



Name                 Type                 Description                                Required or   Available
Optional      Version
sourceSystemId String                     The ID of this record in its source system. Optional     54.0

sourceSystemModified String               The date on which this item was last       Optional      54.0
changed in the source system.

status               String               The status of the medication in this       Required      54.0
statement.
Possible values are:
- Active
- Completed
- Entered-in-Error
- Intended
- Not-Taken
- On-Hold
- Stopped
- Unknown

statusReason         FHIR Codeable        The reason for the medication status.      Optional      54.0
Concept Or ID
Input[]




## FHIR Medication Resource Input

The input representation of FHIR Medication.
The medication FHIR resource maps to the Medication object in Salesforce.
Root XML tag
<FhirMedicationResourceInput>
JSON example
{
"medicationReference":{
"referenceResource":"Medication",
"referenceId":"",
"salesforceId":"0itRM0000004CUkYAM",
"relationship":""
}

<!-- page:1762 -->

AFLS Overview                                                                                                                   Request Bodies



Properties

Name                   Type                 Description                               Required or                       Available
Optional                          Version
medicationCodeableConcept FHIR Codeable    The codeable concept value of the          Optional                          54.0
Concept Or ID Input medication.
Note: This
field must be
specified if
medicationReference
is not
specified.

medicationReference FHIR Reference          The reference of the medication request. Optional                           54.0
Input
Note: This
field must be
specified if
medicationCodeableConcept
is not
specified.




## FHIR Patient Input

Input representation for the FHIR patient resource.
The Patient FHIR resource maps to the Patient objects in Salesforce. Patients are modeled using Person Accounts.
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
},
"value": "ABCD5678XYZ"
}
],

<!-- page:1763 -->




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
{
"system": "email",
"value": "c@de.com"
},

<!-- page:1764 -->

AFLS Overview                                                                                            Request Bodies



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

Name                Type                 Description                               Required or   Available
Optional      Version
active              Boolean              Indicates whether the patient record is   Optional      53.0
active or not.

additional          Custom Field Value Adds additional information to any fields Optional        53.0
Information         Input[]            not mapped in this API.

address             FHIR Address Input[] The address of the patient.               Optional      53.0

birthDate           String               The date of birth of the patient.         Optional      53.0

communication Patient                    The languages of communication            Optional      53.0
Communication        associated with the patient.
Language Input[]

contact             Contact Party For    The contact associated with the patient Optional        53.0
Patient Input[]      record, modeled as a person account.
Contacts are connected to patients using
the ContactContactRelation__c junction
object.

deceased            String               The date and time of the patient’s death. Optional      53.0
DateTime

<!-- page:1765 -->

AFLS Overview                                                                                                Request Bodies



Name                 Type                 Description                                  Required or   Available
Optional      Version
gender               String               The gender of the patient.                   Optional      53.0

general              FHIR Reference       The practitioners associated with the      Optional        53.0
Practitioner         Input[]              patient, modeled as either person accounts
or Contacts and HealthcareProvider
records. Practitioners are connected to
patients using the ContactContact
Relation__c junction object.

identifier           FHIR Identifier      The identifier information for the patient, Optional       53.0
Input[]              stored as Identifier records that reference
the patient record using their
Identifier.ParentRecordId
field.

managing             FHIR Reference       The organization that manages the patient Optional         53.0
Organisation         Input                record, referenced using a lookup to the
Account object. Managing organizations
are connected to patients using the
AccountContactRelation junction object.

maritalStatus String                      The current marital status of the patient.   Optional      53.0

multiple             Integer              The birth order of the patient, in the event Optional      53.0
BirthInteger                              that the patient was a part of a multiple
birth event.

name                 FHIR Human Name The names of the patient, stored as a             Optional      53.0
Input[]         PersonName record.

sourceSystemId String                     The source system ID associated with a       Optional      53.0
patient record.

telecom              FHIR Contact Point   Contact details of the patient, such as     Optional       53.0
Input[]              phone numbers and email addresses.
These contact details are stored as Contact
PointPhone records that reference the
patient records using their Contact
PointPhone.ParentId field.




## FHIR Rate

Input representation for dosage rate.
Root XML tag
<FhirRateInput>
JSON example
{
"dosageRateType":"Frequency Ratio",

<!-- page:1766 -->

AFLS Overview                                                                                               Request Bodies



"dosageRateNumerator":"2",
"dosageRateDenominator":"3",
"dosageRateUnit":{
"unitOfMeasure":{
"unitCode":"MGTeste2",
"description":"MG description2",
"type":"Custom"
}
}
}
}

Properties

Name                 Type                  Description                                Required or   Available
Optional      Version
dosageRateDenominator Double               The denominator value for the rate of       Optional     54.0
medication in the dosage. That is, amount
of medication per unit of time. This field
can be used to record a simple rate, a rate
ratio, or a rate range

dosageRateNumerator Double                 The numerator value for the rate of         Optional     54.0
medication in the dosage. That is, amount
of medication per unit of time. This field
can be used to record a simple rate, a rate
ratio, or a rate range.

dosageRateType String                      The type of dosage rate recorded in        Optional      54.0
DosageRateNumerator and
DosageRateDenominator.
Possibale values are:
- Frequency
- Frequency Range
- Frequency Ratio

dosageRateUnit FHIR Unit Of                The unit of dosage rate.                   Optional      54.0
Measure Or ID




## FHIR Reference Input

The input representation for the Reference FHIR object.
Root XML tag
<FhirReferenceInput>
JSON example
{
"reference": {
"referenceResource": "practitioner",

<!-- page:1767 -->

AFLS Overview                                                                                                       Request Bodies



"referenceId": "ABCId",
"relationship": "Oncologist"
}
}

Properties

Name                 Type                 Description                                Required or            Available
Optional               Version
referenceId          String               The ID of the medication or practitioner   Required               53.0
(healthcare provider) record or the
Note:
managing organization (account) record
Optional if
in the source system.
salesforceId
is specified.

referenceResource String                  The FHIR resource referred to. For example, Required              53.0
organization or practitioner.

relationship         String               The relationship between the patient and Optional                 53.0
the healthcare provider or the managing
organization, stored using the Reciprocal
Roles records.

salesforceId         String               The Salesforce ID of the record that’s     Required               54.0
created in Salesforce.
Note:
Optional if
referenceId
is specified.




## FHIR Request

Input representation for the supply of medication, along with information about how it should be administered.
The MedicationRequest FHIR resource maps to the MedicationRequest object inSalesforce.
Root XML tag
<FhirRequestInput>
Properties

Name                 Type                 Description                                Required or            Available
Optional               Version
medicationReference String                The reference of the medication request. Optional                 54.0

status               String               The status of the medication request.      Optional               54.0
Possible values are:
- Active
- Cancelled

<!-- page:1768 -->

AFLS Overview                                                                                       Request Bodies



Name                 Type               Description                           Required or   Available
Optional      Version
- Completed
- Draft
- Entered-in-Error
- On-Hold
- Stopped
- Unknown

type                 String             The type of the medication request.   Optional      54.0
Possible values are:
- Filler Order
- Instance Order
- Option
- Original Order
- Plan
- Proposal
- Reflex Order




## First Reviewer Input

The name of the person who reviewed the request.
Root XML tag
<firstReviewer>
Properties

Name                 Type               Description                           Required      Available
Version
username             String             User name of the first reviewer.      Yes           46.0




## FHIR Unit Of Measure

Input representation for Unit of Measure.
Root XML tag
<FhirUnitOfMeasureInput>
JSON example
{
"unitCode":"MGTeste2",
"description":"MG description2",
"type":"Custom"
}

<!-- page:1769 -->

AFLS Overview                                                                                                        Request Bodies



Properties

Name                  Type                   Description                                Required or          Available
Optional             Version
description           String                 The description of this unit of measure.   Optional             54.0

type                  String                 The type of the unit of measure. For       Required             54.0
example, weight, distance, and period.

unitCode              String                 The code for this unit of measure. For  Required                54.0
example, mm[Hg], mcg/mL., kgs, and lbs.




## FHIR Unit Of Measure Or ID

Input representation for Unit of Measure Or Id.
Root XML tag
<FhirUnitOfMeasureOrIdInput>
JSON example
{
"unitOfMeasure":{
"unitCode":"MGTeste2",
"description":"MG description2",
"type":"Custom"
}
}

Properties

Name                  Type                   Description                                Required or          Available
Optional             Version
salesforceId          String                 The Salesforce ID of the unit of measure   Required             54.0
record.
Note:
Optional if
unitOfMeasure
is specified.

unitOfMeasure FHIR Unit Of                   Represents the unit of measures for care   Optional             54.0
Measure                metrics and care observations.
Note:
Optional if
salesforceId
is specified.




## General Practitioner Input

Member's primary or general care practitioner.

<!-- page:1770 -->

AFLS Overview                                                                                                   Request Bodies




## Root XML tag

<generalPractitioner>
Properties

Name                   Type               Description                              Required             Available
Version
npi                    String             General Practitioner NPI number.         Yes                  46.0




## Medical Director Input

Name of the medical director who reviewed the request.
Root XML tag
<medicalDirector>
Properties

Name                   Type               Description                              Required             Available
Version
username               String             Medical Director’s username.             Yes                  46.0




## Merge Customers Input

The request to merge a Consolidated Account with a Merged Account.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.
Properties

Property         Type           Description                      Required                     Available Version
Name
winningId String                The Salesforce ID of the     Required                         65.0
Consolidated Account.
Required when a Consolidated
Account external ID isn't
provided. Must be unique
within the request.

winningExternalId String        The external ID of the       Required                         65.0
Consolidated Account.
Required when a Consolidated
Account ID isn't provided.

losingId         String         The Salesforce ID of the Merged Required                      65.0
Account. Required when a
Merged Account external ID
isn't provided. Must be unique
within the request.

<!-- page:1771 -->

AFLS Overview                                                                                              Request Bodies



Property        Type            Description                       Required                 Available Version
Name
losingExternalId String         The external ID of the Merged Required                     65.0
Account. Required when a
Merged Account ID isn't
provided.




## Original Denial Medical Director Input

The name of the medical director who denied the original request.
Root XML tag
<originalDenialMedicalDirector>
Properties

Name                  Type                 Description                          Required           Available
Version
username              String               Original Denial Medical Director’s   Yes                46.0
username.




## Patient Contact Party Input

The input representation of the patient contact party.
JSON example
{
"PatientContactParty": [ {
"relationship": {
"coding": [
{
"display": "relative"
}
]
},
"name": {
"use": "official",
"text": "Shawna Green",
"family": "Green",
"given": "Shawna",
"prefix": "Mrs.",
"suffix": "Sr."
},
"telecom": [
{
"system": "email",
"value": "c@d3.com"
},
{
"system": "phone",

<!-- page:1772 -->

AFLS Overview                                                                                            Request Bodies



"value": "12345678",
"use": "temp",
"rank": 1
}
],
"address": {
"use": "temp",
"type": "postal",
"line": "Green Household"
},
"organization": {
"referenceResource": "Green Family Business",
"referenceId": "XYZId"
},
"gender": "female",
"periodStart": "1998-05-26T15:40:30.000Z",
"periodEnd": "2021-08-09T15:40:30.000Z",
} ]
}

Properties

Name                Type                 Description                               Required or   Available
Optional      Version
additional          Custom Field Value Adds additional information to any fields Optional        53.0
Information         Input[]            not mapped in this API.

address             FHIR Address Input The address associated with the contact     Optional      53.0
party, stored as ContactPointAddress
records.

gender              String               The gender of the contact party.          Optional      53.0

name                FHIR Human Name The name of the contact party, stored as       Optional      53.0
Input           PersonName records.

organisation        FHIR Reference       The organization associated with the      Optional      53.0
Input                contact party.

periodEnd           String               The date until when the contact is        Optional      53.0
associated with the patient.

periodStart         String               The date from when the contact is         Optional      53.0
associated with the patient.

relationship        FHIR Codeable        The type of relationship between the      Optional      53.0
Concept Input        contact party and the patient, recorded
using a reference to Reciprocal Roles.

telecom             FHIR Contact Point   The telecom information for the contact   Optional      53.0
Input[]              party, stored as ContactPointPhone
records.

<!-- page:1773 -->

AFLS Overview                                                                                                   Request Bodies




## Page Products Input

Input representation that contains the product and guidance IDs associated with a presentation page.
Properties

Property Name         Type                   Description                                  Required      Available
Version
guidanceIds           List<Object>           List of guidance IDs.                        Optional      65.0

productId             String                 ID of the product.                           Optional      65.0




## Page Specification Input

Input representation of the page specification details.
Root XML tag
<PageSpecification>
Properties

Name                  Type                   Description                                  Required or   Available
Optional      Version
addToTargetFile Boolean                      Indicates whether the page must to be        Required      55.0
added to the target file (true) or not
(false).

page                  Integer                The page number of the document to be Required             55.0
split.

rotation              Integer                The angle at which the page needs to be Required           55.0
rotated.
Valid values are: 0, 90, 180, 270, or 360.




## Page Specification List Input

Input representation of the page specification list.
Properties

Name                  Type                   Description                                  Required or   Available
Optional      Version
pageSpecifications Page Specification        Represents the page specification details Required         55.0
of the content document that needs to be
split.




## Patient Communication Language Input

Input representation of the patient communication language.

<!-- page:1774 -->

AFLS Overview                                                                                               Request Bodies


The PatientCommunicationLanguage FHIR object maps to the PersonLanguage object in Salesforce.
JSON example
"PatientCommunicationLanguage": [
{
"language": "High Elvish",
"preferenceRank": 2
}
]

Properties

Name                  Type                Description                                 Required or   Available
Optional      Version
additional            Custom Field Value Adds additional information to any fields Optional         53.0
Information           Input[]            not mapped in this API.

language              String              The language used by the person.            Optional      53.0

preferenceRank Integer                    The ranked order of preference the person Optional        53.0
has for the language as a medium of
communication.




## Patient Input

Input containing data for a single patient.
Root XML tag
<patientData>
JSON example
{
"patientId": "patient2",
"careProgramProductData": [
{
"providerId": "provider3",
"productId": "product4"
}
]
}

Properties

Name                  Type                Description                                 Required      Available
Version
careProgramProductData Enrollee Product   List of all objects that contain data related No          46.0
Input[]             to the enrollee’s care program product.

patientId             String              ID of the patient as configured in the care Yes           46.0
system field mappings.

<!-- page:1775 -->

AFLS Overview                                                                                 Request Bodies




## Product Required Attributes Input

Input representation of the products required for the visit.
Properties

Name                  Type                   Description                Required or   Available
Optional      Version
productId             String                 ID of the product.         Required      55.0

quantity              Integer                Quantity of the product.   Required      55.0




## Program Enrollment Input

Request body for care program enrollment.
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

<!-- page:1776 -->

AFLS Overview                                                                                                  Request Bodies



Properties

Name                 Type                 Description                                    Required      Available
Version
patientData          Patient Input []     List of all objects that contain patients data. Yes          46.0
You can have up to 200 items in this list.

programId            String               ID of the care program as configured in        Yes           46.0
the care system field mappings.

sourceSystem         String               Name of the source system as configured Yes                  46.0
in the care system field mappings.




## Slot Input

Input representation of an appointment slot.
Properties

Name                 Type                 Description                                    Required or   Available
Optional      Version
additionalInformation String              Additional information about the               Optional      60.0
appointment slot to be booked.

appointmentType String                    ID of the Service Appointment record’s         Optional      60.0
appointment type.

city                 String               Name of the city in which the appointment Optional           60.0
slot must be booked.

comments             String               Appointment slot comments.                     Optional      60.0

contactId            String               ID of the contact for whom the                 Optional      60.0
appointment slot must be booked.

country              String               Name of the country in which the               Optional      60.0
appointment slot must be booked.

description          String               Description for the appointment slot.          Optional      60.0

postalCode           String               Postal code of the city in which the           Optional      60.0
appointment slot must be booked.

schedEndTime         String               Appointment end time.                          Required      60.0

schedStartTime String                     Appointment start time.                        Required      60.0

serviceAppointmentId String               ID of the Service Appointment record           Optional      60.0
associated with the appointment slot.

serviceResourceId String                  ID of the Service Resource record              Required      60.0
associated with the appointment slot.

<!-- page:1777 -->

AFLS Overview                                                                                                       Request Bodies



Name                  Type                   Description                                Required or         Available
Optional            Version
serviceTerritoryId String                    ID of the service territory in which the   Required            60.0
appointment slot must be booked.

state                 String                 Name of the state in which the             Optional            60.0
appointment slot must be booked.

status                String                 Status of the appointment slot. Possible Required              60.0
values are the enum values configured for
the status field of the Service Appointment
object on the Salesforce Scheduler.

street                String                 Name of the street in which the            Optional            60.0
appointment slot must be booked.

subject               String                 Subject for the appointment slot.          Optional            60.0

workTypeId            String                 ID of the work type for which the          Required            60.0
appointment slot must be booked.




## Reopened By Input

The name of the person who reopened the care request.
Root XML tag
<reopenedBy>
JSON example



## "reopenedBy": {

"username": "admin@um.org"
}

Properties

Name                  Type                   Description                                Required or         Available
Optional            Version
username              String                 The user who reopened the care request. No                     52.0

Note: This
field is
required if
reopenedBy
is passed in
the request.




## Requesting Practitioner Input

Ordering or referring practitioner for the request.

<!-- page:1778 -->

AFLS Overview                                                                                                   Request Bodies




## Root XML tag

<requestingPractitioner>
Properties

Name                  Type                  Description                                   Required      Available
Version
healthCareProviderId String                 The provider associated with request          Yes           55.0
creation for this prior authorization. This
field is a lookup to
HealthcareProviderId.

npi                   String                Requesting Practitioner‘s NPI number.         Yes           46.0




## Sample Limits Request Data Input

Input representation for the sample limits data to validate.
Properties

Name                  Type                  Description                                   Required or   Available
Optional      Version
action                String                The action to perform. Supported values       Required      65.0
are:
- validate

data                  Object                The records to validate.                      Required      65.0




## Sample Limits Validation Input

Input representation for sample limits validation.
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

<!-- page:1779 -->

AFLS Overview                                                           Request Bodies



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

<!-- page:1780 -->

AFLS Overview                                                                Request Bodies



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
"providerVisitId": "lscpr1__call__c-639XXXXX-XXXX-XXXX-XXXX-XXXXXXXXXAEB",

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

<!-- page:1781 -->

AFLS Overview                                                                                                            Request Bodies



}
}

Properties

Name                    Type                     Description                                       Required or   Available
Optional      Version
sampleLimitsValidationRequest SampleLimitsRequestDataInput The payload that contains the sample limit Required   65.0
on page 1774             validations to perform in JSON format.




## Servicing Facility Input

Facility where the service is being provided.
Root XML tag
<servicingFacility>
Properties

Name                    Type                     Description                                       Required      Available
Version
npi                     String                   Servicing facility’s NPI number.                  Yes           46.0

servicingFacilityId String                       ID of the facility where the patient is      Yes                55.0
receiving the service for this care request.




## Servicing Practitioner Input

Practitioner administering the service.
Root XML tag
<servicingPractitioner>
Properties

Name                    Type                     Description                                       Required      Available
Version
healthCareProviderId String                      The provider associated with providing the Yes                  55.0
service for this care request. This field is a
lookup to HealthcareProviderId.

npi                     String                   Servicing practitioner’s NPI number.              Yes           46.0




## Search Input

Input representation for Search API
Root XML tag
<searchInput>

<!-- page:1782 -->

AFLS Overview                                                      Request Bodies



JSON example
{
"searchTerm":"Joe Tester",
"verificationContext":{
"processDefinition":{
"processDetail":{
"processDetailList":[
{
"verificationProcessFieldList":{
"verificationProcessFields":[
{
"dataSourceType" : "Salesforce",
"developerName" : "SampleAccountName",
"fieldName" : "Name",
"fieldType" : "optionalVerifier",
"label" : "Account Name"
}, {
"dataSourceType" : "Salesforce",
"developerName" : "SampleAccountNumber",
"fieldName" : "AccountNumber",
"fieldType" : "optionalVerifier",
"label" : "Account Number"
}, {
"dataSourceType" : "Salesforce",
"developerName" : "SamplePhone",
"fieldName" : "Phone",
"fieldType" : "optionalVerifier",
"label" : "Phone"
}, {
"dataSourceType" : "Salesforce",
"developerName" : "SamplePostalCode",
"fieldName" : "BillingPostalCode",
"fieldType" : "optionalVerifier",
"label" : "Billing Zip/Postal Code"
}, {
"dataSourceType" : "Salesforce",
"developerName" : "SampleAccount",
"fieldName" : "Name",
"fieldType" : "resultField",
"label" : "Account Name"
}, {
"dataSourceType" : "Salesforce",
"developerName" : "AccountNumberSample",
"fieldName" : "AccountNumber",
"fieldType" : "resultField",
"label" : "Account Number"
}, {
"dataSourceType" : "Salesforce",
"developerName" : "SamplePhoneNumber",
"fieldName" : "Phone",
"fieldType" : "resultField",
"label" : "Phone"
}

<!-- page:1783 -->

AFLS Overview                                                                                               Request Bodies



]
},
"searchType": "Text-Based",
"searchSequenceNo": 1,
"searchResultUniqueIdField": "Id",
"searchObjectName": "Account",
"optionalVerifierCount": 1,
"dataSourceType": "Salesforce"
}
]
}
}
}
}

Properties

Name                    Type             Description                                  Required or   Available
Optional      Version
searchTerm              String           The search term for the account to use       Required      54.0
when performing a search.

verificationContext Verification Context The structure that contains the setup data Required        54.0
Input            and context required to perform the
search.




## Transport Location Input

Input representation for Transport Location
Root XML tag
<transportLocation>
Properties

Name                    Type             Description                                  Required      Available
Version
ambulanceTransportDistance Double        Distance traveled during ambulance           No            46.0
transport. Maps to:
CareRequestItem.AmbulanceTransportDistance

ambulanceTransportReason String          Reason for ambulance transport. Maps to: No                46.0
CareRequestItem.AmbulanceTransportReason

ambulanceTransportType String            Type of ambulance transport. Maps to:        No            46.0
CareRequestItem.AmbulanceTransportType

name                    String           Name of the transport location.              Yes           46.0

<!-- page:1784 -->

AFLS Overview                                                                                                                Request Bodies




## User Credentials Input

Input representation of the user credentials to perform digital verification.
JSON example
{
"userCredentials": {
"loginId": "user@example.com",
"password": "123456"
}
}

Properties

Name                   Type                    Description                                    Required or            Available
Optional               Version
loginId                String                  Login ID or username used by the user to Required                     60.0
authenticate for the digital verification.

password               String                  Password used by the user to authenticate Required                    60.0
for the digital verification.




## Visited Party Attributes Input

Input representation of the visiting party. For example, for a medical device visit, the visiting party can be the surgeon and the
anesthesiologist.
Properties

Name                   Type                    Description                                    Required or            Available
Optional               Version
primary                Boolean                 Indicates whether the contact of the visited Optional                 55.0
party is a primary contact (true) or not
(false).

user                   String                  ID of the person from the customer             Optional               55.0
account being visited.




## Visitor Attributes Input

Input representation of the visitor attributes. For example, for a medical device visit, visitor can be the sales representative and the clinical
specialist.
JSON example


"visitor": [
{
"user": "005xx000001X7fNAAS",
"primaryVisitor": true

<!-- guide:dev-guide section:response-bodies pages:1785-1852 -->
# Response Bodies

AFLS Overview                                                                                                       Response Bodies



}
]

Properties

Name                  Type                   Description                                 Required or          Available
Optional             Version
primary               Boolean                Indicates whether a service resource is the Required             55.0
primary resource (true) or not (false)
for a visit.

user                  String                 ID of the assigned service resource.        Required             55.0




## Work Type Lead Time Input

Input representation of the request to get a list of work types and their associated lead times.
JSON example
{
"contextId":"0Wwxx0000000DWjCAM",
"workProcedureId":"0zjSG00000000PpYAI",
"priority":5
}

Properties

Name                  Type                   Description                                 Required or          Available
Optional             Version
contextId             String                 ID of a program enrollee, an account, or    Optional             60.0
opportunity.

priority              Integer                Number between one and ten indicating Optional                   60.0
the priority associated with a country or
service territory. This field is useful when
you want to override the lead time based
on a country or service territory.

workProcedureId String                       Advanced therapy ID.                        Required             60.0




## Response Bodies

A resource can return a response body in either JSON or XML format.
Refer to HTTP response code to find out whether the request was successful or not, as well as the error messages for the failed requests.



## Account User Territory Info

The details of the users and the territories associacted with the account.
Account Manual Alignment Output
Represents the output for the request to align customer account manually.

<!-- page:1786 -->

AFLS Overview                                                                                                          Response Bodies



## Appointed Representative

Person who is an appointed representative for the member.
Book Slot Chain Output
Output representation of the request to create service appointments.
Care Request Case
Case related to the care request.
Care Request Patient
The patient for whom the request is being raised.
Care Authorization Request
Output of create or update request for care services review.
Care Authorization Request Related Record
Care Authorization request related record output representation
Care Authorization Request Result
Result of POST or PATCH request.
Create or Update Care Authorization Request Result
Response to create or update care services review request.
Care Diagnosis
Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.
Care Program Enrollment Result
Result containing details about a single patient enrollment.
Care Request Drug
Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated
with a care request.
Care Request Item
The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be
associated with a care request.
Care Request
The general details of a care-related request including member information, admission date, decision reason, and so on. A single
request can contain multiple diagnoses, services, or drugs. Care requests include prior authorizations for drugs and services, admission
notifications, concurrent review of admissions, appeals, complaints, and grievances.
Care Request Reviewer Output
Output representation of the care request reviewer.
Care Authorization Request Response
The response body for the Care Services Review GET request.
Create Visit Output
Output representation of the create visit request.
Content Document Output
Content document output representation.
Content Management Output
Represents the information about the job status and any associated messages returned for Content Management APIs.

<!-- page:1787 -->

AFLS Overview                                                                                           Response Bodies



## Custom Field Value

The output representation of the custom field values.
Customer Account Merge Output
Output representation of the response for a successful account merge operation.
Digital Verification Output
Output Representation for the digital verification API request.
Dispenser Address
Pharmacy address.
Download Provider Output
The response representation containing the status of the provider download request and the resulting data.
Document Conflict Field
Output representation of the target object field with conflict.
Document Conflict Field List
Output representation of the target object fields with conflicts.
Document Management Result
Output representation of the document split request.
Document Process Output
Output representation of the document process creation or update request.
Error Response Output
Error response representation.
Enrollee Product Result
Details about the enrollee’s products.
Enrollment Card Result
Details of the enrollment care for a single enrollee.
Error Message
A generic error message containing error code and the message text.
First Reviewer
The name of the person who reviewed the request first.
FHIR Reference
The output representation of the FHIR reference values.
Field Value Output
Represents the value of a field.
FHIR Address
The output representation of the FHIR address values.
FHIR Codeable Concept
The output representation of the Code Set Bundle records created to represent a codeableConcept value.
FHIR Coding
The output representation of the Code Set records created to represent a Coding value.
FHIR Human Name
The output representation of a PersonName record created to represent a humanName value.

<!-- page:1788 -->

AFLS Overview                                                                                                          Response Bodies



## FHIR Contact Point

The output representation of contact details stored as a ContactPointPhone record.
FHIR Identifier
The output representation of the Identified records created to represent an identifier value.
FHIR Patient
The output representation of the patient stored in Salesforce, as specified in the input request.
General Practitioner
Member's primary or general care practitioner.
Medical Director
Name of the medical director who reviewed the request.
Merge Customer Account with Status Output
The response body for the merge customer account with status request.
Original Denial Medical Director
The name of the medical director who denied the original request.
Object Field
Output representation of of the target object field.
Object Field List
Output representation of the target object fields list.
OCR Document Scan Result
Output representation of the OCR document scan result ID.
OCR Document Scan Result List
Output representation of the list of the OCR document scan results IDs.
Patient Communication Language
The output representation of the PersonLanguage records that represent the communication preferences of a person.
Patient Contact Party
The output representation of contact parties associated with a patient.
Patient Get
Output representation of details of a patient record.
Patient Upsert
Output representation of result after a Patient FHIR resource is created.
Patient Update
Output representation of result after a Patient FHIR resource is updated.
Payload Output
Output representation of the details communicated to the recipient.
Presentation Page Product Output
Represents the output for Presentation Page Products API.
Program Enrollment Result
Result containing details of all patient enrollment status. If there is success, it contains id of new records created for each patient.
Rejected Merge Request Output
A merge request that was rejected due to invalid input.

<!-- page:1789 -->

AFLS Overview                                                               Response Bodies



## Requesting Practitioner

Ordering or referring practitioner for the request.
Reopened By Output
The name of the person who reopened the care request.
Sample Limits Validation Response Output
Output representation for a sample limits validation request.
Search Results Output
Output representation for provider search request.
Servicing Facility
Facility where the service is being provided.
Servicing Practitioner
Practitioner administering the service.
Subscriber
The primary member on the plan.
Tracked Communication Output
Output representation of tracked communications for a care request.
Transport Location
Transport Location output representation
Verifier Output
Represents a verifier.
Work Type Lead Time Output
Output representation of a list of work types and their associated lead times.



## Account User Territory Info

The details of the users and the territories associacted with the account.
JSON example
{
"code": "200",
"message": null,
"response": {
"warnings": null,
"UserTerritoryInfo": [
{
"userInformation": {
"Name": "John Doe",
"IsActive": true,
"Username": "jdoe@example.org",
"Id": "005xx00000ElNh3xxF"
},
"territoryInformation": {
"Name": "RD - Midwest 20A",
"Id": "0MISxx00000NLzpxxG"
}
},

<!-- page:1790 -->

AFLS Overview                                                                                                 Response Bodies



{
"userInformation": {
"Name": "Peter Pan",
"IsActive": true,
"Username": "ppan@example.com",
"Id": "005xx00000Enxi1xxB"
},
"territoryInformation": {
"Name": "RD - Midwest 20A",
"Id": "0MISxx00000NLzpxxG"
}
}
],
"errors": null
},
"success": true
}


Property Name        Type                 Description                                   Filter Group and Available
Version          Version
code                 String               The API response code.                        Small, 64.0      64.0

message              String               If the parameters were invalid, this          Small, 64.0      64.0
property contains the error message.

response             Map <String,         Data related to the users and territories     Small, 64.0      64.0
Object>

success              Boolean              This flag indicates if the request was        Small, 64.0      64.0
successful or not..




## Account Manual Alignment Output

Represents the output for the request to align customer account manually.
Properties

Property         Type               Description                           fILTER Group and Version         Available
Name                                                                                                       version
success          Boolean            Indicates if the API request was  Small, 65.0                          65.0
successful (true) or not (false).

message          String             Message related to the API request, Small, 65.0                        65.0
which can help in case of failure.

code             String             HTTP status code for the API          Small, 65.0                      65.0
response.

response         Map<String,        Map that holds the account and        Small, 65.0                      65.0
Object>            territory data.

<!-- page:1791 -->

AFLS Overview                                                                                             Response Bodies



Example
{
"success": true,
"message": "",
"code": "200",
"response": {
"ProviderAcctTerritoryInfo": [
{
"attributes": {
"type": "ProviderAcctTerritoryInfo",
"url":
"/services/data/v65.0/sobjects/ProviderAcctTerritoryInfo/1GxxM000001G5hxxAC"
},
"Id": "1GxxM000001G5hxxAC",
"Name": "PATI-000000008",
"AccountId": "00xxM00000FyWOxxAV",
"Territory2Id": "OxxSM0000028E4xxAE"
}
]
}
}




## Appointed Representative

Person who is an appointed representative for the member.

Property Name        Type                  Description                                 Filter Group and   Available Version
Version
firstName            String                First Name of the appointed representative. Big, 46.0          46.0
Maps to: Account.FirstName

lastName             String                Last Name of the appointed representative. Big, 46.0           46.0
Maps to: Account.LastName




## Book Slot Chain Output

Output representation of the request to create service appointments.
JSON example
{
"isSuccess":true,
"serviceAppointmentIds":[
"08pxx0000004C92AAE",
"08pxx0000004C92AAE",
"08pxx0000004C92AAE"
],
"serviceAppointmentGroupId":"08pxx0000004C92AAE",
"message":"",
"code":200
}

<!-- page:1792 -->

AFLS Overview                                                                                       Response Bodies



Property Name            Type      Description                                   Filter Group and   Available Version
Version
code                     String    API response code.                            Small, 60.0        60.0

isSuccess                Boolean   Indicates whether the request was             Small, 60.0        60.0
successful (true) or not (false).

message                  String    Error message when the request fails.         Small, 60.0        60.0

serviceAppointmentGroupId String   ID of the service appointment group to        Small, 60.0        60.0
which the created service appointments
belong to.

serviceAppointmentIds String[]     IDs of the created service appointments.      Big, 60.0          60.0




## Care Request Case

Case related to the care request.

Property Name            Type      Description                                   Filter Group and   Available Version
Version
accountName              String    Name of the account.                          Big, 46.0          46.0

caseNumber               String    Case number.                                  Big, 46.0          46.0

caseOrigin               String    The source of the case, such as Email, Phone, Big, 46.0          46.0
or Web. Maps to: Case.Origin

caseOwner                String    Case owner.                                   Big, 46.0          46.0

caseReason               String    The reason why the case was created, such Big, 46.0              46.0
as Instructions not clear, or User didn’t
attend training. Maps to: Case.Reason

closed                   Boolean   Indicates if the case is closed.              Big, 46.0          46.0

contactName              String    Contact Name.                                 Big, 46.0          46.0

createdBy                String    Case created by.                              Big, 46.0          46.0

dateClosed               String    Date and time when the case was closed.       Big, 46.0          46.0

dateOpened               String    Date and time when the case was opened. Big, 46.0                46.0

description              String    A text description of the case.               Big, 46.0          46.0

escalated                Boolean   Indicates if the case is escalated.           Big, 46.0          46.0

lastModifiedBy String              Last modified by.                             Big, 46.0          46.0

lastModifiedDate String            Last modified date of the case.               Big, 46.0          46.0

lastReferencedDate String          Last referenced date of the case.             Big, 46.0          46.0

lastViewedDate String              Last viewed date of the case.                 Big, 46.0          46.0

<!-- page:1793 -->

AFLS Overview                                                                                              Response Bodies



Property Name         Type                  Description                                 Filter Group and   Available Version
Version
parentCase            String                Parent Case.                                Big, 46.0          46.0

priority              String                The importance or urgency of the case, such Big, 46.0          46.0
as High, Medium, or Low. Maps to:
Case.Priority

status                String                The status of the case. Maps to:            Big, 46.0          46.0
Case.Status

subject               String                The subject of the case. Maps to:           Big, 46.0          46.0
Case.Subject

type                  String                The type of case, such as Feature Request   Big, 46.0          46.0
or Question. Maps to: Case.Type

webCompany            String                The company name that was entered when Big, 46.0               46.0
the case was created. This field can't be
updated after the case has been created.
Maps to: Case.SuppliedCompany

webEmail              String                The email address that was entered when     Big, 46.0          46.0
the case was created. This field can't be
updated after the case has been created.
Maps to: Case.SuppliedEmail

webName               String                The name that was entered when the case Big, 46.0              46.0
was created. This field can't be updated after
the case has been created. Maps to:
Case.SuppliedName

webPhone              String                The phone number that was entered when Big, 46.0               46.0
the case was created. This field can't be
updated after the case has been created.
Maps to: Case.SuppliedPhone




## Care Request Patient

The patient for whom the request is being raised.

Property Name         Type                  Description                                 Filter Group and   Available Version
Version
birthDate             String                Date of birth of the patient.               Big, 46.0          46.0

firstName             String                First name of the patient.                  Big, 46.0          46.0

lastName              String                Last name of the patient.                   Big, 46.0          46.0

memberId              String                Insurance identifier for the member.        Big, 46.0          46.0

<!-- page:1794 -->

AFLS Overview                                                                                                 Response Bodies




## Care Authorization Request

Output of create or update request for care services review.

Property Name         Type                   Description                                   Filter Group and   Available Version
Version
careDiagnoses Care Diagnoses[]               A list of associated diagnoses including code Big, 46.0          46.0
type, name, and description. One or more
care diagnoses can be associated with a care
request.

careRequest           Care Request           The general details of a care-related request Big, 46.0          46.0
including member information, admission
date, decision reason, and so on. A single
request can contain multiple diagnoses,
services, or drugs. Care requests include
prior authorizations for drugs and services,
admission notifications, concurrent review
of admissions, appeals, complaints, and
grievances.

careRequestCase Care Request Case            Case related to the care request.             Big, 46.0          46.0

careRequestDrugs Care Request Drug[] A list of requested drugs including name,             Big, 46.0          46.0
strength, frequency, and instructions for
administration. One or more drug requests
can be associated with a care request.

careRequestItems Care Request Item[] A list of care request items containing name, Big, 46.0                  46.0
modifiers, and the effective date. One or
more care service requests can be
associated with a care request.

patient               Patient                The patient for whom the request is raised. Big, 46.0            46.0

subscriber            Subscriber             The primary member on the plan.               Big, 46.0          46.0

tracked        Tracked                       A list of tracked communications for a care Big, 57.0            57.0
Communications Communication                 request.
Output[]

transportLocations Transport Locations[] Transport location output.                        Big, 46.0          46.0




## Care Authorization Request Related Record

Care Authorization request related record output representation

Property Name         Type                   Description                                   Filter Group and   Available Version
Version
isSuccess             Boolean                Indicates if the operation was a success.     Small, 46.0        46.0

<!-- page:1795 -->

AFLS Overview                                                                                               Response Bodies



Property Name         Type                  Description                                  Filter Group and   Available Version
Version
created               Boolean               Indicate if the record was created.          Big, 46.0          46.0

id                    String                Id for the newly created record.             Big, 46.0          46.0

objectType            String                The type of the object created.              Big, 46.0          46.0

status                String                Indicates the status of the record creation. Big, 46.0          46.0




## Care Authorization Request Result

Result of POST or PATCH request.

Property Name         Type                  Description                                  Filter Group and   Available Version
Version
relatedRecords Care Authorization           List of related records                      Big, 46.0          46.0
Request Related
Record[]




## Create or Update Care Authorization Request Result

Response to create or update care services review request.
JSON example
{
"code": "SUCCESS",
"isSuccess": true,
"result": [
{
"created": true,
"id": "0Umxx0000004FA9CAM",
"objectType": "CareRequest",
"relatedRecords": [
{
"created": true,
"id": "0VDxx0000004DwLGAU",
"objectType": "CareRequestDrug"
},
{
"created": true,
"id": "0VKxx0000004DwMGAU",
"objectType": "CareRequestItem"
},
{
"created": true,
"id": "0VKxx0000004DwNGAU",
"objectType": "CareRequestItem"
},
{

<!-- page:1796 -->

AFLS Overview                                                                                                  Response Bodies



"created": true,
"id": "0VCxx0000004DwMGAU",
"objectType": "CareDiagnosis"
},
{
"created": true,
"id": "0VCxx0000004DwNGAU",
"objectType": "CareDiagnosis"
},
{
"created": true,
"id": "06Hxx0000004DWbEAM",
"objectType": "CareRequestReviewer"
},
{
"created": true,
"id": "06Hxx0000004DWcEAM",
"objectType": "CareRequestReviewer"
},
{
"created": true,
"id": "06Hxx0000004DWdEAM",
"objectType": "CareRequestReviewer"
},
{
"created": true,
"id": "06Hxx0000004DWeEAM",
"objectType": "CareRequestReviewer"
},
{
"created": true,
"id": "06Hxx0000004DWfEAM",
"objectType": "CareRequestReviewer"
}
]
}
]
}


Property Name          Type                 Description                                     Filter Group and   Available Version
Version
code                   String               Care Authorization returned code                Small, 46.0        46.0

isSuccess              Boolean              Flag to indicate if the request was successful. Small, 46.0        46.0

message                String               If there is any error, this property contains   Small, 46.0        46.0
the error message.

outputResults Care Authorization            Care Authorization Request results output       Small, 46.0        46.0
Request[]

result                 Care Authorization   Care Authorization Request result               Small, 46.0        46.0
Request Result[]

<!-- page:1797 -->

AFLS Overview                                                                                                  Response Bodies




## Care Diagnosis

Associated diagnosis including code type, name, and description. One or more care diagnoses can be associated with a care request.

Property Name        Type                  Description                                      Filter Group and   Available Version
Version
careRequest          Care Request          The care diagnosis associated with the care Big, 52.0               52.0
Reviewers            Reviewer Output[]     request reviewer. Maps to:
CareDiagnosis.CareRequestReviewers

code                 String                Name of the diagnosis code. Maps to:             Big, 46.0          46.0
CareDiagnosis.Name

codeDescription String                     Diagnosis code description. Maps to:             Big, 46.0          46.0
CareDiagnosis.CodeDescription

codeType             String                Code type for the diagnosis. Maps to:            Big, 46.0          46.0
CareDiagnosis.CodeType

codeTypeID           String                ID of the code type for the diagnosis. Maps Big, 46.0               46.0
to:
CareDiagnosis.CodeTypeIdentifier

diagnosisCodeSet String                    The diagnosis code set. Maps      Big, 52.0                         52.0
to:CareDiagnosis.DiagnosisCodeSet

dischargeCode String                       Discharge diagnosis code. Maps to:               Big, 46.0          46.0
CareDiagnosis.DischargeCode

dischargeCode String                       Description of the discharge diagnosis code. Big, 46.0              46.0
Description                                Maps to:
CareDiagnosis.DischargeCodeDescription

dischargeCode String                       Code type for the discharge diagnosis. Maps Big, 46.0               46.0
Type                                       to:
CareDiagnosis.DischargeCodeType

dischargeCodeTypeId String                 ID of the code type for the discharge            Big, 46.0          46.0
diagnosis. Maps to:
CareDiagnosis.DischargeCodeTypeIdentifier

dischargeDiagnos String                    Effective date for the discharge diagnosis.      Big, 46.0          46.0
isEffectiveDate                            Maps to:
CareDiagnosis.DischargeDiagnosisEffectiveDate

dischargeDiagnosis String                  The discharge diagnosis code set associated Big, 52.0               52.0
CodeSet                                    with the care diagnosis. Maps to:
CareDiagnosis.DischargeDiagnosisCodeSet

dischargeDiagnos String                    Termination date for the discharge               Big, 46.0          46.0
isEndDate                                  diagnosis. Maps to:
CareDiagnosis.DischargeDiagnosisEndDate

<!-- page:1798 -->

AFLS Overview                                                                                 Response Bodies



Property Name       Type     Description                                   Filter Group and   Available Version
Version
effectiveDate String         Effective date for the diagnosis. Maps to:    Big, 46.0          46.0
CareDiagnosis.EffectiveDate

endDate             String   Termination date for the diagnosis. Maps      Big, 46.0          46.0
to: CareDiagnosis.EndDate

healthcare    String         Healthcare Diagnosis Code.                    Big, 46.0          46.0
DiagnosisCode

healthCondition String       The health condition that's associated with Big, 57.0            57.0
Id                           the member. Maps to:
CareDiagnosis.HealthCondition

id                  String   ID of the Care Diagnosis.                     Big, 46.0          46.0

modifiedCode        String   Modified diagnosis code. Maps to:             Big, 46.0          46.0
CareDiagnosis.ModifiedCode

modifiedCode        String   Modified diagnosis code description. Maps Big, 46.0              46.0
Description                  to:
CareDiagnosis.ModifiedCodeDescription

modifiedCodeType String      Code type for the modified diagnosis. Maps Big, 46.0             46.0
to:
CareDiagnosis.ModifiedCodeType

modifiedCodeTypeId String    ID of the code type for the modified          Big, 46.0          46.0
diagnosis. Maps to:
CareDiagnosis.ModifiedCodeTypeIdentifier

modifiedDiagnosis String     The modified diagnosis code set associated Big, 52.0             52.0
CodeSet                      with the care diagnosis. Maps to:
CareDiagnosis.ModifiedDiagnosisCodeSet

modifiedEffective String     Modified effective date for the diagnosis.    Big, 46.0          46.0
Date                         Maps to:
CareDiagnosis.ModifiedEffectiveDate

modifiedEndDate String       Modified termination date for the diagnosis. Big, 46.0           46.0
Maps to:
CareDiagnosis.ModifiedEndDate

modifiedPrimary Boolean      Modified Primary Diagnosis                    Big, 46.0          46.0
Diagnosis

name                String   Name of the diagnosis code. Maps to:          Big, 46.0          46.0
CareDiagnosis.Name

presentOn           String   Specifies if the health condition was present Big, 57.0          57.0
Admission                    at the time of member admission. Maps to:
CareDiagnosis.PresentOnAdmission

<!-- page:1799 -->

AFLS Overview                                                                                                  Response Bodies



Property Name         Type                   Description                                   Filter Group and   Available Version
Version
primary               Boolean                Indicates whether it is a primary diagnosis   Big, 46.0          46.0
(true) or not (false).

primaryDischarge Boolean                     Indicates whether it is a primary Discharge Big, 46.0            46.0
Diagnosis                                    Diagnosis (true) or not (false).

sourceSystem          String                 System from which this request was            Big, 46.0          46.0
sourced. Maps to:
CareDiagnosis.SourceSystem

sourceSystem          String                 ID of the system from which the request       Big, 46.0          46.0
Identifier                                   was sourced. Maps to:
CareDiagnosis.SourceSystemIdentifier

sourceSystem          String                 Timestamp of the most recent update from Big, 46.0               46.0
Modified                                     the source system. Maps to:
CareDiagnosis.SourceSystemModified




## Care Program Enrollment Result

Result containing details about a single patient enrollment.

Property Name         Type                   Description                                   Filter Group and   Available Version
Version
enrolleeProducts Enrollee Product            A list containing results of care program     Small, 46.0        46.0
Result[]               enrollee products creation for each enrollee.

enrollmentCard Enrollment Card               Results of care program enrollment card       Small, 46.0        46.0
Result                 creation for the enrollee.

error                 Error Message          Error code and message.                       Small, 46.0        46.0

isSuccess             Boolean                Indicates if the operation was a success.     Small, 46.0        46.0

created               Boolean                Indicate if the record was created.           Big, 46.0          46.0

id                    String                 Id for the newly created                      Big, 46.0          46.0
CareProgramEnrollee record.

objectType            String                 The type of the object created. In this case, Big, 46.0          46.0
it is CareProgramEnrollee.

status                String                 Indicates the status of the record creation. Big, 46.0           46.0




## Care Request Drug

Requested drug including name, strength, frequency, and instructions for administration. One or more drug requests can be associated
with a care request.

<!-- page:1800 -->

AFLS Overview                                                                                            Response Bodies



Property Name       Type                Description                                   Filter Group and   Available Version
Version
approvedUnits Integer                   Approved quantity of the drug. Maps to:       Big, 46.0          46.0
CareRequestDrug.ApprovedUnits

authApproval        String              The unique identifier assigned to the drug Big, 57.0             57.0
Identifier                              on approval of the authorization request.
Maps to:
CareRequestDrug.AuthApprovalIdentifier

authorization String                    The unique identifier of the authorization Big, 57.0             57.0
RefIdentifier                           request associated with this requested drug.
Maps to:
CareRequestDrug.AuthorizationRefIdentifier

careRequest         Care Request        The care request drug associated with the     Big, 52.0          52.0
Reviewers           Reviewer Output[]   care request reviewer. Maps to:
CareRequestDrug.CareRequestReviewers

clinical      String                    The clinical determination of the drug        Big, 52.0          52.0
Determination                           request. Maps to:
CareRequestDrug.ClinicalDetermination

clinical          String                The notes related to the clinical             Big, 52.0          52.0
DeterminationNote                       determination. Maps to:
CareRequestDrug.ClinicalDeterminationNote

clinical            String              The reason for the clinical determination.    Big, 52.0          52.0
DeterminationReason                     Maps to:
CareRequestDrug.ClinicalDeterminationReason

code                String              Code for the drug. Maps to:                   Big, 46.0          46.0
CareRequestDrug.Code

codeType            String              ID code type for the drug. Maps to:           Big, 46.0          46.0
CareRequestDrug.CodeType

daysSupply          Integer             Number of days to supply the drug. Maps Big, 46.0                46.0
to: CareRequestDrug.DaysSupply

deniedUnits         Integer             Denied quantity of the drug. Maps to:         Big, 46.0          46.0
CareRequestDrug.DeniedUnits

dispenserAddress Dispenser Address      Pharmacy address.                             Big, 46.0          46.0

dispenserFax        String              Pharmacy fax number. Maps to:                 Big, 46.0          46.0
Number                                  CareRequestDrug.DispenserFaxNumber

dispenserId         String              ID for the pharmacy. Maps to:                 Big, 46.0          46.0
CareRequestDrug.DispenserIdentifier

dispenserName String                    Name of the pharmacy. Maps to:                Big, 46.0          46.0
CareRequestDrug.DispenserName

<!-- page:1801 -->

AFLS Overview                                                                                Response Bodies



Property Name       Type      Description                                 Filter Group and   Available Version
Version
dispenserPhone String         Pharmacy phone number. Maps to:             Big, 46.0          46.0
Number                        CareRequestDrug.DispenserPhoneNumber

dispenserTaxId String         Pharmacy tax identification number. Maps Big, 46.0             46.0
to:
CareRequestDrug.DispenserTaxIdentifier

dose                String    Dose of the drug. Maps to:                  Big, 46.0          46.0
CareRequestDrug.Dose

drugAdministration String     The setting in which the drug is expected Big, 57.0            57.0
Setting                       to be administered to the patient. Maps to:
CareRequestDrug.DrugAdministrationSetting

frequency           String    Frequency of the drug. Maps to:             Big, 46.0          46.0
CareRequestDrug.Frequency

id                  String    Id                                          Big, 46.0          46.0

modifiedCode        String    Code for the modified drug. Maps to:        Big, 46.0          46.0
CareRequestDrug.ModifiedCode

medicationRef String          The medication request or statement         Big, 57.0          57.0
ObjectId                      associated with the care request drug. Maps
to:
CareRequestDrug.MedicationRefObject

modifiedCode        String    ID code type for the modified drug. Maps    Big, 46.0          46.0
Type                          to:
CareRequestDrug.ModifiedCodeType

modifiedDays        Integer   Number of days of supply for the modified Big, 46.0            46.0
Supply                        drug. Maps to:
CareRequestDrug.ModifiedDaysSupply

modifiedDose        String    Dose of the modified drug. Maps to:         Big, 46.0          46.0
CareRequestDrug.ModifiedDose

modifiedFrequency String      Frequency of the modified drug. Maps to:    Big, 46.0          46.0
CareRequestDrug.ModifiedFrequency

modifiedName        String    Name of the modified drug. Maps to:         Big, 46.0          46.0
CareRequestDrug.ModifiedName

modifiedSig         String    Directions for use of the modified drug.    Big, 46.0          46.0
Maps to:
CareRequestDrug.ModifiedSig

modifiedStrength String       Strength of the modified drug. Maps to:     Big, 46.0          46.0
CareRequestDrug.ModifiedStrength

<!-- page:1802 -->

AFLS Overview                                                                                              Response Bodies



Property Name       Type                 Description                                    Filter Group and   Available Version
Version
modifiedTherapy Integer                  Duration of therapy for the modified drug. Big, 46.0              46.0
Duration                                 Maps to:
CareRequestDrug.ModifiedTherapyDuration

modifiedUnits Integer                    Modified quantity of the drug. Maps to:        Big, 46.0          46.0
CareRequestDrug.ModifiedUnits

name                String               Name of the drug. Maps to:                     Big, 46.0          46.0
CareRequestDrug.Name

prescriptionDate String                  Date for the prescription. Maps to:            Big, 46.0          46.0
CareRequestDrug.PrescriptionDate

prescription        String               Date for the prescription fills. Maps to:      Big, 57.0          57.0
FillDate                                  CareRequestDrug.PrescriptionFillDate

prescriptionFills Integer                Number of fills for the prescription. Maps to: Big, 46.0          46.0
CareRequestDrug.PrescriptionFills

priority            String               The priority representing the urgency of the Big, 57.0            57.0
drug's authorization request. Maps to:
CareRequestDrug.Priority

requestType         String               The type of drug request. Maps to:             Big, 57.0          57.0
CareRequestDrug.RequestType

serviceCategory String                   Name of the service type such as medical       Big, 46.0          46.0
care, diagnostic radiology, pharmacy, or
diagnostic laboratory. Maps to:
CareRequestDrug.ServiceCategory

serviceCategory String                   Alphanumeric code that uniquely identifies Big, 46.0              46.0
Code                                     a service type. Maps to:
CareRequestDrug.ServiceCategoryCode

servicingFacility Servicing Facility     The facility where a patient receives service Big, 57.0           57.0
Output               of the requested drug. Maps to:
CareRequestDrug.ServicingFacility

servicingProvider Servicing Practitioner The healthcare provider who provides the       Big, 57.0          57.0
Output               service of the requested drug. Maps to:
CareRequestDrug.ServicingProvider

sig                 String               Directions for use of the drug. Maps to:       Big, 46.0          46.0
CareRequestDrug.Sig

sourceSystem        String               System from which this request was             Big, 46.0          46.0
sourced. Maps to:
CareRequestDrug.SourceSystem

<!-- page:1803 -->

AFLS Overview                                                                                                           Response Bodies



Property Name          Type                    Description                                    Filter Group and       Available Version
Version
sourceSystem           String                  ID of the system from which the request        Big, 46.0              46.0
Identifier                                     was sourced. Maps to:
CareRequestDrug.SourceSystemIdentifier

sourceSystem           String                  Timestamp of the most recent update from Big, 46.0                    46.0
Modified                                       the source system. Maps to:
CareRequestDrug.SourceSystemModified

status                 String                  The authorization status of the requested      Big, 57.0              57.0
drug. Maps to:
CareRequestDrug.Status

statusReason           String                  The reason for the authorization status of     Big, 57.0              57.0
the requested drug. Maps to:
CareRequestDrug.StatusReason

strength               String                  Strength of the drug. Maps to:                 Big, 46.0              46.0
CareRequestDrug.Strength

therapyDuration Integer                        Duration of therapy for the drug. Maps to:     Big, 46.0              46.0
CareRequestDrug.TherapyDuration

units                  Integer                 Quantity of the drug. Maps to:                 Big, 46.0              46.0
CareRequestDrug.Units




## Care Request Item

The details of a care service request, including name, modifiers, and the effective date. One or more care service requests can be associated
with a care request.

Property Name          Type                    Description                                    Filter Group and       Available Version
Version
approvedLength Integer                         The number of days requested for the           Big, 52.0              52.0
OfStay                                         admission. Maps to:
CareRequestItem.ApprovedLengthOfStay

approvedLevel String                           Specifies the approved level of care for the Big, 52.0                52.0
OfCare                                         patient. Maps to:
CareRequestItem.ApprovedLevelOfCare

approvedQuantity Integer                       The approved quantity of the care item.        Big, 46.0              46.0
Maps to:
CareRequestItem.ApprovedQuantity

approvedService String                         The end date of the approved service that      Big, 52.0              52.0
EndDate                                        the patient received. Maps to:
CareRequestItem.ApprovedServiceEndDate

<!-- page:1804 -->

AFLS Overview                                                                                             Response Bodies



Property Name       Type                Description                                    Filter Group and   Available Version
Version
approvedService String                  The start date of the approved service that Big, 52.0             52.0
StartDate                               the patient received. Maps to:
CareRequestItem.ApprovedServiceStartDate

authApproval        String              The unique identifier assigned to the item     Big, 57.0          57.0
Identifier                              on approval of the prior authorization
request. Maps to:
CareRequestItem.AuthApprovalIdentifier

authorization String                    The unique identifier of the prior             Big, 57.0          57.0
RefIdentifier                           authorization request associated with this
requested item. Maps to:
CareRequestItem.AuthorizationRefIdentifier

careRequest         Care Request        The care request item associated with the      Big, 52.0          52.0
Reviewers           Reviewer Output[]   care request reviewer. Maps to:
CareRequestItem.CareRequestReviewers

clinical      String                    The clinical determination of the care         Big, 52.0          52.0
Determination                           request. Maps to:
CareRequestItem.ClinicalDetermintation

clinical           String               The notes related to the clinical              Big, 52.0          52.0
DeterminationNotes                      determination. Maps to:
CareRequestItem.ClinicalDetermintationNotes

clinical            String              The reason for the clinical determination.     Big, 52.0          52.0
DeterminationReason                     Maps to:
CareRequestItem.ClinicalDetermintationReason

clinicalService String                  The clinical service request associated with Big, 57.0            57.0
RequestId                               the care request item. Maps to:
CareRequestItem.ClinicalServiceRequest

codeDescription String                  Description of the denied service code.        Big, 46.0          46.0
Maps to:
CareRequestItem.CodeDescription

codeType            String              Code type for the service. Maps to:            Big, 46.0          46.0
CareRequestItem.CodeType

codeTypeId          String              ID of the code type for the service. Maps to: Big, 46.0           46.0
CareRequestItem.CodeTypeIdentifier

cumulativeLength Integer                The number of days a patient is admitted.      Big, 52.0          52.0
OfStay                                  Maps to:
CareRequestItem.CumulativeLengthOfStay

currentLevel        String              Specifies the level of care the patient is     Big, 52.0          52.0
OfCare                                  receiving. Maps to:
CareRequestItem.CurrentLevelOfCare

<!-- page:1805 -->

AFLS Overview                                                                                   Response Bodies



Property Name        Type     Description                                    Filter Group and   Available Version
Version
decisionDate         String   The date and time when the last decision Big, 52.0                52.0
was made for this care request item. Maps
to:
CareRequestItem.DecisionDate

deniedLevel          String   The level of care denied for the patient.      Big, 52.0          52.0
OfCare                        Maps to:
CareRequestItem.DeniedLevelOfCare

deniedQuantity Integer        The quantity of the denied service. Maps to: Big, 46.0            46.0
CareRequestItem.DeniedQuantity

effectiveDate String          Effective date for the diagnosis Maps to:      Big, 46.0          46.0
CareRequestItem.EffectiveDate

endDate              String   Termination date for the service. Maps to:     Big, 46.0          46.0
CareRequestItem.EndDate

freeForm             String   Free-form description of the procedure.        Big, 46.0          46.0
ProcedureDescription          Maps to:
CareRequestItem.FreeFormProcedureDescription

healthcare    String          Healthcare Procedure Code.                     Big, 46.0          46.0
ProcedureCode

id                   String   ID of the CareRequestItem.                     Big, 46.0          46.0

modifiedCare         String   Modified Care End Date.                        Big, 46.0          46.0
EndDate

modifiedCode         String   Modified Code.                                 Big, 46.0          46.0

modifiedCode         String   Description of the modified service code.      Big, 46.0          46.0
Description                   Maps to:
CareRequestItem.ModifiedCodeDescription

modifiedCode         String   Code type for the modified service. Maps       Big, 46.0          46.0
Type                          to:
CareRequestItem.ModifiedCodeType

modifiedCode         String   ID of the code type for the modified service. Big, 46.0           46.0
TypeId                        Maps to:
CareRequestItem.ModifiedCodeTypeIdentifier

modified      String          Effective date for the modified service. Maps Big, 46.0           46.0
EffectiveDate                 to:
CareRequestItem.ModifiedEffectiveDate

modifiedLevel String          Specifies the modified level of care for the   Big, 52.0          52.0
OfCare                        patient. Maps to:
CareRequestItem.ModifiedLevelOfCare

<!-- page:1806 -->

AFLS Overview                                                                                 Response Bodies



Property Name       Type     Description                                   Filter Group and   Available Version
Version
modifiedModifier String      Modifier for modified service code. Maps to: Big, 46.0           46.0
CareRequestItem.ModifiedModifier

modifiedModifier String      Modifier description for modified service     Big, 46.0          46.0
Description                  code. Maps to:
CareRequestItem.ModifiedModifierDescription

modified         String      The code set for the modified service, drug, Big, 52.0           52.0
ProcedureCodeSet             or device associated with the care request
item. Maps to:
CareRequestItem.ModifiedProcedureCodeSet

modifiedQuantity Integer     The modified quantity of requested care.      Big, 46.0          46.0
Maps to:
CareRequestItem.ModifiedQuantity

modifier1           String   First modifier for the service code. Maps to: Big, 46.0          46.0
CareRequestItem.Modifier

modifier1           String   Description for the first modifier for the    Big, 46.0          46.0
Description                  service code. Maps to:
CareRequestItem.ModifierDescription

modifier2           String   Second modifier for service code. Maps to: Big, 46.0             46.0
CareRequestItem.Modifier2

modifier2           String   Description of the second modifier for the    Big, 46.0          46.0
Description                  service code. Maps to:
CareRequestItem.Modifier2Description

modifier3           String   Third modifier for service code. Maps to:     Big, 46.0          46.0
CareRequestItem.Modifier3

modifier3           String   Description of the third modifier for the     Big, 46.0          46.0
Description                  service code. Maps to:
CareRequestItem.Modifier3Description

modifier4           String   Fourth modifier for service code. Maps to:    Big, 46.0          46.0
CareRequestItem.Modifier4

modifier4           String   Description of the fourth modifier for the    Big, 46.0          46.0
Description                  service code. Maps to:
CareRequestItem.Modifier4Description

modifierCode        String   The modifier code set for the service code Big, 52.0             52.0
Set                          associated with the care request item. Maps
to
CareRequestItem.ModifierCodeSet

name                String   Name of the care request item. Maps to        Big, 46.0          46.0
CareRequestItem.Name

<!-- page:1807 -->

AFLS Overview                                                                                  Response Bodies



Property Name       Type      Description                                   Filter Group and   Available Version
Version
priority            String    The priority representing the urgency of the Big, 57.0           57.0
item's authorization request. Maps to
CareRequestItem.Priority

procedureCode String          The code set for the service, drug, or device Big, 52.0          52.0
Set                           associated with the care request item. Maps
to
CareRequestItem.ProcedureCodeSet

quantity            Integer   The quantity of the item that is requested. Big, 46.0            46.0
Maps to:
CareRequestItem.Quantity

quantityType        String    Quantity type for the request such as days, Big, 46.0            46.0
units, or visits. Maps to:
CareRequestItem.QualityType

serviceCategory String        Name of the service type such as medical      Big, 46.0          46.0
care, diagnostic radiology, pharmacy, or
diagnostic laboratory. Maps to:
CareRequestItem.ServiceCategory

reasonCode          String    The reason justifying the care request of the Big, 57.0          57.0
item. Maps to:
CareRequestItem.ReasonCode

requestType         String    The type of item request. Maps to:            Big, 57.0          57.0
CareRequestItem.RequestType

requestedLength Integer       The number of days requested for the          Big, 52.0          52.0
OfStay                        admission. Maps to:
CareRequestItem.RequestedLengthOfStay

requestedLevel String         Specifies the requested level of care for the Big, 52.0          52.0
OfCare                        patient. Maps to:
CareRequestItem.RequestedLevelOfCare

requested      String         The end date of the requested service. Maps Big, 52.0            52.0
ServiceEndDate                to:
CareRequestItem.RequestedServiceEndDate

requested        String       The start date of the requested service. Maps Big, 52.0          52.0
ServiceStartDate              to:
CareRequestItem.RequestedServiceStartDate

serviceCategory String        Alphanumeric code that uniquely identifies Big, 46.0             46.0
Code                          a service type. Maps to:
CareRequestItem.ServiceCategoryCode

<!-- page:1808 -->

AFLS Overview                                                                                                            Response Bodies



Property Name          Type                    Description                                     Filter Group and        Available Version
Version
servicingFacility Servicing Facility           The facility where a patient receives service Big, 57.0                 57.0
Output                  of the requested item. Maps to:
CareRequestItem.ServicingFacility

servicingProvider Servicing Practitioner The healthcare provider who provides the              Big, 57.0               57.0
Output                  service of the requested item. Maps to:
CareRequestItem.ServicingProvider

sourceSystem           String                  System from which the request was               Big, 46.0               46.0
sourced. Maps to:
CareRequestItem.SourceSystem

sourceSystem           String                  ID of the system from which the request         Big, 46.0               46.0
Identifier                                     was sourced. Maps to:
CareRequestItem.SourceSystemIdentifier

sourceSystem           String                  Timestamp of the most recent update from Big, 46.0                      46.0
Modified                                       the source system. Maps to:
CareRequestItem.SourceSystemModified

status                 String                  The authorization status of this service. Maps Big, 46.0                46.0
to: CareRequestItem.Status

statusReason           String                  Reason for the authorization status of this     Big, 46.0               46.0
service. Maps to:
CareRequestItem.StatusReason




## Care Request

The general details of a care-related request including member information, admission date, decision reason, and so on. A single request
can contain multiple diagnoses, services, or drugs. Care requests include prior authorizations for drugs and services, admission notifications,
concurrent review of admissions, appeals, complaints, and grievances.

Property Name          Type                    Description                                     Filter Group and        Available Version
Version
acknowledgement String                         Date and time when an acknowledgment            Big, 46.0               46.0
LetterSentDate                                 letter was sent to the requester. Maps to:
CareRequest.AcknowledgementLetterSentDate

actualAdmission String                         Actual admission date for the patient. Maps Big, 46.0                   46.0
Date                                           to:
CareRequest.ActualAdmissionDate

actualDischarge String                         Actual discharge date for the patient. Maps Big, 46.0                   46.0
Date                                           to:
CareRequest.ActualDischargeDate

admissionNotes String                          Notes related to the admission. Maps to:        Big, 46.0               46.0
CareRequest.AdmissionNotes

<!-- page:1809 -->

AFLS Overview                                                                                           Response Bodies



Property Name       Type           Description                                       Filter Group and   Available Version
Version
admissionSource String             Where the patient was admitted from, for          Big, 46.0          46.0
example, a clinic or an emergency room.
Maps to:
CareRequest.AdmissionSource

admissionType String               Type of admission, for example, emergency Big, 46.0                  46.0
or elective. Maps to:
CareRequest.AdmissionType

ambulanceTransport Integer         Ambulance Transport Distance                      Big, 46.0          46.0
Distance

ambulanceTransport String          Reason for ambulance transport. Maps to: Big, 46.0                   46.0
Reason                             CareRequestExtention.AmbulanceTransportReason

ambulanceTransport String          Type of ambulance transport. Maps to:             Big, 46.0          46.0
Type                               CareRequestExtention.AmbulanceTransportType

aorReceived         String         Date and time when the Appointment of             Big, 46.0          46.0
Date                               Representative (AOR) form was received.
Maps to:
CareRequest.AorReceivedDate

aorRequested        String         Date and time when the AOR form was               Big, 46.0          46.0
Date                               requested. Maps to:
CareRequest.AorRequestedDate

appealEffectuation String          The effective date of the outcome of the       Big, 52.0             52.0
DateTime                           appeal request. For example, if a claim was
successfully appealed, this field displays the
date when the claim was paid. Maps to:
CareRequestExtension.AppealEffectuationDateTime

appealRequest String               Specifies the reason for raising the appeal       Big, 52.0          52.0
ReasonType                         request. Maps to:
CareRequest.AppealRequestReasonType

appointedRep String                Date and time of verbal contact with the Big, 46.0                   46.0
VerbalContactDate                  member's appointed representative. Maps
to:
CareRequest.AppointedRepVerbalContactDate

appointedRep String                Date and time correspondence was sent to Big, 46.0                   46.0
WrittenContactDate                 the member's appointed representative.
Maps to:
CareRequest.AppointedRepWrittenContactDate

appointedRepresen Appointed        Appointed representative for the member. Big, 46.0                   46.0
tative            Representative

<!-- page:1810 -->

AFLS Overview                                                                                                Response Bodies



Property Name       Type                Description                                       Filter Group and   Available Version
Version
approvedLength Integer                  Approved number of days for the admission. Big, 46.0                 46.0
ofStay                                  Maps to:
CareRequest.ApprovedLengthOfStay

approvedLevel String                    Approved level of care for the patient, for       Big, 46.0          46.0
ofCare                                  example, Hospital-Observaton or
SNF-Rehabilitation. Maps to:
CareRequest.ApprovedLevelOfCare

authorization String                    The unique identifier of the authorization        Big, 57.0          57.0
RefIdentifier                           request. Maps to:
CareRequestExtension.AuthorizationRefIdentifier

careRequest         Care Request        The care request associated with the care         Big, 52.0          52.0
Reviewers           Reviewer Output[]   request reviewer. Maps to:
CareRequest.CareRequestReviewers

caseSubStatus String                    Sub status of care request in each stage of Big, 57.0                57.0
care request. Maps to:
CareRequest.CaseSubStatus

claimNumber         String              Claim number for the medical service or           Big, 46.0          46.0
medication, if one exists. Maps to:
CareRequest.ClaimNumber

clinicalCase        String              Clinical case type for the patient, for           Big, 46.0          46.0
Type                                    example, High Risk Fall or Adult Diabetes.
Maps to:
CareRequest.ClinicalCaseType

criteriaMet         String              Indicates whether criteria for care was met. Big, 46.0               46.0
Maps to:
CareRequest.CriteriaMet

cumulativeLength Integer                Total number of days for the admission.           Big, 46.0          46.0
ofStay                                  Maps to:
CareRequest.CumulativeLengthOfStay

currentLevel        String              Level of care that the patient is receiving.      Big, 46.0          46.0
ofCare                                  Maps to:
CareRequest.CurrentLevelOfCare

decisionDate        String              Date by which the decision must be made Big, 46.0                    46.0
for the request. Maps to:
CareRequest.DecisionDate

decisionDays        Integer             Number of days remaining for a decision or Big, 46.0                 46.0
Remaining                               resolution. Maps to:
CareRequest.DecisionDaysRemaining

<!-- page:1811 -->

AFLS Overview                                                                                    Response Bodies



Property Name       Type      Description                                     Filter Group and   Available Version
Version
decisionLetter String         The text of the determination letter sent to Big, 46.0             46.0
the member and provider. Maps to:
CareRequest.DecisionLetter

decisionNotes String          Notes related to the decision. Maps to:         Big, 46.0          46.0
CareRequest.DecisionNotes

decisionReason String         Reason for the decision. Maps to:               Big, 46.0          46.0
CareRequest.DecisionReason

decisionReason String         Text describing the reason for the decision. Big, 46.0             46.0
Description                   Maps to:
CareRequest.DecisionReasonDescription

deniedLength        Integer   Number of days denied for the admission.        Big, 46.0          46.0
ofStay                        Maps to:
CareRequest.DeniedLengthOfStay

deniedLevel         String    Level of care denied for the patient. Maps      Big, 46.0          46.0
ofCare                        to:
CareRequest.DeniedLevelOfCare

disposition         String    Notes related to the disposition of the         Big, 46.0          46.0
Notes                         request. Maps to:
CareRequest.DispositionNotes

documentAttachment String     The status of the document upload based Big, 55.0                  55.0
Status                        on the checklist provided to the reviewers.
Maps to:
CareRequestExtension.DocumentAttachmentStatus
Valid values are:
- Complete
- Incomplete

dueDate             String    Date the request is due for completion.         Big, 46.0          46.0
Maps to: CareRequest.DueDate

effectiveFrom String          The start date for an effective-date range.     Big, 46.0          46.0
Maps to:
CareRequest.EffectiveFrom

effectiveTo         String    The end date for an effective-date range.       Big, 46.0          46.0
Maps to:
CareRequest.EffectiveTo

expirationDate String         Expiration date for the request. Maps to:       Big, 46.0          46.0
CareRequest.ExpirationDate

extendedRequest Boolean       Extended Request Maps to:                       Big, 46.0          46.0
CareRequest.

<!-- page:1812 -->

AFLS Overview                                                                                                     Response Bodies



Property Name       Type                 Description                                           Filter Group and   Available Version
Version
extensionRequest String                  Date and time an extension was requested. Big, 46.0                      46.0
ReceivedDate                             Maps to:
CareRequest.ExtensionRequestReceivedDate

external            String               Complaint ID number. Maps to:                         Big, 46.0          46.0
ComplaintID                              CareRequest.ExternalComplaintIdentifier

facilityRecord String                    The medical record number used to identify Big, 46.0                     46.0
Number                                   a patient. Maps to:
CareRequest.FacilityRecordNumber

facilityRoom        String               Type of facility bed for the patient. Maps to: Big, 46.0                 46.0
BedType                                  CareRequest.FacilityRoomBedType

facilityRoom        String               The facility room number for the patient.             Big, 46.0          46.0
Number                                   Maps to:
CareRequest.FacilityRoomNumber

finalLevel          String               Final level of care the patient. Maps to:             Big, 46.0          46.0
ofCare                                   CareRequest.FinalLevelOfCare

firstReviewer First Reviewer             The person who reviewed the request.                  Big, 46.0          46.0

firstReviewer String                     Notes from the first reviewer related to the Big, 46.0                   46.0
Notes                                    case. Maps to:
CareRequest.FirstReviewerNotes

generalPractitioner General Practitioner Member's primary or general care                      Big, 46.0          46.0
practitioner.

generalPractitioner String               Date when the primary care practitioner was Big, 46.0                    46.0
VerbalNotificationDate                   verbally notified of the decision. Maps to:
CareRequest.GeneralPractitionerVerbalNotifiedDate

generalPractitioner String               Date when the primary care practitioner was Big, 46.0                    46.0
WrittenNotificationDate                  notified of the decision by written
correspondence. Maps to:
CareRequest.GeneralPractitionerWrittenNotifiedDate

grievanceType String                     Specifies the type of grievance. Maps to:             Big, 52.0          52.0
CareRequest.GrievanceType

healthcareProvider String                The healthcare provider associated with the Big, 52.0                    52.0
care request against whom the Grievance
is filed. Maps
toCareRequestExtension.HealthCareProvider

homeHealthCertifi String                 Certification end date for home health care. Big, 46.0                   46.0
cationEndDate                            Maps to:
CareRequestExtension.HomeHealthCertificationEndDate

<!-- page:1813 -->

AFLS Overview                                                                                             Response Bodies



Property Name       Type     Description                                               Filter Group and   Available Version
Version
homeHealthCertifi String     Certification start date for home health care. Big, 46.0                     46.0
cationStartDate              Maps to:
CareRequestExtension.HomeHealthCertificationStartDate

homeHealth          String   Date that home health services are          Big, 46.0                        46.0
StartDate                    scheduled or anticipated to start. Maps to:
CareRequestExtension.HomeHealthStartDate

id                  String   ID of the Care Request.                                   Big, 46.0          46.0

independentReview String     The determination made by the                             Big, 52.0          52.0
Determination                independent review. Maps to:
CareRequestExtension.IndependentReviewDetermination

independentReview String     The date when the determination was made Big, 52.0                           52.0
DeterminationDate            by the independent review. Maps to:
CareRequestExtension.IndependentReviewDeterminationDate

independentReview String     The date when the review request was                      Big, 52.0          52.0
SubmissionDate               submitted for independent review. Maps
to:
CareRequestExtension.IndependentReviewSubmissionDate

infoReceieved String         Date and time when additional information Big, 46.0                          46.0
Date                         was received from the provider or member.
Maps to:
CareRequest.InfoReceivedDate

infoRequested String         Date and time when additional information Big, 46.0                          46.0
Date                         was requested from the provider or
member. Maps to:
CareRequest.InfoRequestedDate

initialDenial String         Date of initial denial notification. Maps to:             Big, 46.0          46.0
NotificationDate             CareRequest.InitialDenialNotificationDate

initialDenial String         The time when the initial care request was Big, 52.0                         52.0
NotificationTime             denied. Maps to
CareRequest.InitialDenialNotificationTime

isIndependent Boolean        Indicates whether independent review is                   Big, 52.0          52.0
ReviewRequired               required. Maps to
CareRequestExtension.IsIndependentReviewRequired

isReadmission Boolean        Indicates whether the care request is for a               Big, 52.0          52.0
readmission. Maps to
CareRequest.IsReadmission

lastModified        String   Last Modified Date                                        Big, 46.0          46.0
Date

<!-- page:1814 -->

AFLS Overview                                                                                      Response Bodies



Property Name       Type           Description                                  Filter Group and   Available Version
Version
medicalDirector Medical Director   The medical director who reviewed the        Big, 46.0          46.0
request.

medicalDirector String             Notes from the medical director related to Big, 46.0            46.0
Notes                              the request. Maps to:
CareRequest.MedicalDirectorNotes

member              String         Insurance identifier for the member. Maps Big, 46.0             46.0
to: CareRequest.MemberId

memberContact String               Member Contact Date Maps to:                 Big, 46.0          46.0
Date                               CareRequest.

memberGroup         String         Insurance group number for the member.       Big, 46.0          46.0
Number                             Maps to:
CareRequest.MemberGroupNumber

memberPrimary String               The primary insurance plan of a member Big, 52.0                52.0
Plan                               associated with the care request when the
member is insured under multiple plans.
Maps to:
CareRequest.MemberPrimaryPlan

memberSecondary String             The secondary insurance plan of a member Big, 52.0              52.0
Plan                               associated with the care request when the
member is insured under multiple plans.
Maps to:
CareRequest.MemberSecondaryPlan

memberVerbalNotifi String          Date when the member was verbally            Big, 46.0          46.0
cationDate                         notified of the decision. Maps to:
CareRequest.MemberVerbalNotificationDate

memberWrittenNotifi String         Date when the member was notified of the Big, 46.0              46.0
cationDate                         decision by written correspondence. Maps
to:
CareRequest.MemberWrittenNotificationDate

modification        String         Date the case was modified. Maps to:         Big, 46.0          46.0
Date                               CareRequest.ModificationDate

modifiedLength Integer             Modified number of days for the admission. Big, 46.0            46.0
ofStay                             Maps to:
CareRequest.ModifiedLengthOfStay

modifiedLevel String               Modified level of care for the patient. Maps Big, 46.0          46.0
ofCare                             to:
CareRequest.ModifiedLevelOfCare

<!-- page:1815 -->

AFLS Overview                                                                                             Response Bodies



Property Name         Type         Description                                         Filter Group and   Available Version
Version
nextReview            String       Date the next review is scheduled for               Big, 46.0          46.0
Date                               completion. Maps to:
CareRequest.NextReviewDate

nursingHomeResi String             Nursing home resident status at the time of Big, 46.0                  46.0
dentialStatus                      service. Maps to:
CareRequestExtension.NursingHomeResidentialStatus

originalDenial Original Denial     The medical director who denied the                 Big, 46.0          46.0
MedicalDirector Medical Director   original request.

parProvider           String       Indicator of whether this provider has              Big, 46.0          46.0
entered into an agreement with the
insurance carrier. Maps to:
CareRequest.ParProvider

placeof               String       Place of service for the member's care such Big, 46.0                  46.0
Service                            as an inpatient hospital or an ambulatory
surgery center. Maps to:
CareRequest.PlaceOfService

practitioner          String       Date and time when the provider was                 Big, 46.0          46.0
ContactDate                        contacted. Maps to:
CareRequest.PractitionerContactDateTime

priorDischarge String              Specifies the previous discharge status of          Big, 52.0          52.0
Status                             the member. Maps to:
CareRequestExtension.PriorDischargeStatus

quantity              Integer      Quantity of the request.                            Big, 46.0          46.0

quantityType          String       Quantity type for the request such as days, Big, 46.0                  46.0
units, or visits. Maps to:
CareRequest.QuantityType

receivedDate          String       Date the request was received. Maps to:             Big, 46.0          46.0
CareRequest.ReceivedDate

reconsiderationDenial String       Date of reconsideration denial notification. Big, 46.0                 46.0
NotificationDate                   Maps to:
CareRequest.ReconsiderationDenialNotificationDate

reconsiderationDenial String       The time of reconsideration denial                  Big, 52.0          52.0
NotificationTime                   notification. Maps to:
CareRequest.ReconsiderationDenialNotificationTime

recordType            String       Record type of the care request object.             Big, 46.0          46.0

referenceCare String               The reference care request case number              Big, 52.0          52.0
RequestCase                        associated with the care request. Maps to:
CareRequest.ReferenceCareRequestCase

<!-- page:1816 -->

AFLS Overview                                                                                                 Response Bodies



Property Name       Type                Description                                        Filter Group and   Available Version
Version
referenceCase String                    Reference authorization number for an              Big, 46.0          46.0
Number                                  appeal, complaint, or grievance. Maps to:
CareRequest.ReferenceCaseNumber

reopenDecision String                   Date and time the request was reopened.            Big, 52.0          52.0
DateTime                                Maps to:
CareRequest.ReopenDecisionDateTime

reopenReason        String              Reason the request was reopened. Maps to: Big, 46.0                   46.0
CareRequest.ReopenReason

reopenReason        String              Description of why the request was                 Big, 46.0          46.0
Description                             reopened. Maps to:
CareRequest.ReopenReasonDescription

reopenRequest String                    The result of the reopen request. Maps to:         Big, 52.0          52.0
Outcome                                 CareRequestExtension.ReopenRequestOutcome

reopenRequest String                    The type of reopen request. Maps to:               Big, 52.0          52.0
Type                                    CareRequestExtension.ReopenRequestType

reopenedBy          Reopened By Output The user who reopened the care request.             Big, 52.0          52.0
Maps to:
CareRequestExtension.ReopenedBy

reopenedDate        String              Date the request was reopened. Maps to:            Big, 46.0          46.0
CareRequest.ReopenedDate

requestExtension String                 The reason for requesting the care                 Big, 52.0          52.0
Reason                                  extension. Maps to:
CareRequestExtension.RequestExtensionReason

requestExtn      String                 The date when the decision to extend the Big, 52.0                    52.0
DecisionDateTime                        care request extension was made. Maps to:
CareRequestExtension.RequestExtnDecisionDateTime

requestOutcome String                   Specifies the outcome of the request. Maps Big, 52.0                  52.0
to:
CareRequestExtension.RequestOutcome

requestOutcome String                   The description of the request outcome.            Big, 52.0          52.0
Desc                                    Maps to:
CareRequestExtension.RequestOutcomeDesc

requestType         String              Category type of the request. Maps to:             Big, 46.0          46.0
CareRequestExtension.RequestType

requestedDate String                    Date the request was originally requested. Big, 46.0                  46.0
Maps to:
CareRequest.RequestedDate

<!-- page:1817 -->

AFLS Overview                                                                                                   Response Bodies



Property Name         Type           Description                                             Filter Group and   Available Version
Version
requestedLength Integer              Requested length of stay for the patient.               Big, 57.0          57.0
OfStay                               Maps to:
CareRequest.RequestedLengthOfStay

requestedLevel String                Requested level of care for the patient. Maps Big, 46.0                    46.0
ofCare                               to:
CareRequest.RequestedLevelOfCare

requesterType String                 Indicates the role of the individual initiating Big, 46.0                  46.0
the request. Maps to:
CareRequest.RequesterType

requesting            Requesting     Ordering or referring practitioner for the              Big, 46.0          46.0
Practitioner          Practitioner   request.

requestingPractitione String         Requesting Practitioner License Maps to:                Big, 46.0          46.0
rLicense                             CareRequest.RequestingPractitionerLicense

requestingPractitioner String        Specialty of the practitioner, for example, Big, 46.0                      46.0
Specialty                            Family Practice or General Surgery. Maps to:
CareRequest.RequestingPractitionerSpecialty

requestingPractitioner String        Date when the practitioner was verbally                 Big, 46.0          46.0
VerbalNotificationDate               notified of the decision. Maps to:
CareRequest.RequestingPractitionerVerbalNotifiedDate

requestingPractitioner String        Date when the practitioner was notified of Big, 46.0                       46.0
WrittenNotificationDate              the decision by written correspondence.
Maps to:
CareRequest.RequestingPractitionerWrittenNotifiedDate

resolutionDate String                Date when the complaint, appeal, or                     Big, 46.0          46.0
grievance was resolved. Maps to:
CareRequest.ResolutionDate

resolutionDescription String         The resolution details provided for the                 Big, 52.0          52.0
complaint, appeal, or grievance. Maps to:
CareRequestExtension.ResolutionDescription

resolutionLetter String              Date and time when a resolution letter was Big, 46.0                       46.0
SentDate                             sent to the requester. Maps to:
CareRequest.ResolutionLetterSentDate

resolutionNotes String               Resolution notes for the request. Maps to:              Big, 46.0          46.0
CareRequest.ResolutionNotes

reviewDate            String         Date the review was completed. Maps to:                 Big, 46.0          46.0
CareRequest.ReviewDate

rootCauseNotes String                Field for notes related to the root cause for Big, 46.0                    46.0
the request. Maps to:
CareRequest.RootCauseNotes

<!-- page:1818 -->

AFLS Overview                                                                                                  Response Bodies



Property Name         Type                   Description                                    Filter Group and   Available Version
Version
scheduledAdmission String                    Anticipated admission date for the patient. Big, 46.0             46.0
Date                                         Maps to:
CareRequest.ScheduledAdmissionDate

scheduledDischarge String                    Scheduled discharge date for the patient.      Big, 46.0          46.0
Date                                         Maps to:
CareRequest.ScheduledDischargeDate

serviceDate           String                 Date when patient received the service.        Big, 46.0          46.0
Maps to:
CareRequest.ServiceDate

serviceLevel          String                 The level of service rendered. Maps to:        Big, 46.0          46.0
CareRequestExtension.ServiceLevel

serviceType           String                 Classification of the type of service. Maps to: Big, 46.0         46.0
CareRequestExtention.ServiceType

serviceorMedication Boolean                  Indicates whether the member has already Big, 46.0                46.0
Received                                     received the medial service or medication.
Maps to:
CareRequest.IsServiceOrMedicationReceived

servicingFacility Servicing Facility         Facility where the service is being provided. Big, 46.0           46.0

servicingPractitioner Servicing Practitioner Practitioner administering the service.        Big, 46.0          46.0

servicingPractitioner String                 License type of the practitioner. Maps to:     Big, 46.0          46.0
License                                      CareRequest.ServicingPractitionerLicense

servicingPractitioner String                 Specialty of the practitioner. Maps to:        Big, 46.0          46.0
Specialty                                    CareRequest.ServicingPractitionerSpecialty

sourceSystem          String                 System from which this request was             Big, 46.0          46.0
sourced. Maps to:
CareRequest.SourceSystem

sourceSystemIdentifier String                ID of the system from which the request        Big, 46.0          46.0
was sourced. Maps to:
CareRequest.SourceSystemIdentifier

sourceSystemModified String                  Timestamp of the most recent update from Big, 46.0                46.0
the source system. Maps to:
CareRequest.SourceSystemModified

unitOfMeasure String                         The unit of measure associated with the        Big, 55.0          55.0
prior authorization request. Maps to:
CareRequestExtension.UnitofMeasure

<!-- page:1819 -->

AFLS Overview                                                                                             Response Bodies




## Care Request Reviewer Output

Output representation of the care request reviewer.

Property Name         Type                  Description                                Filter Group and   Available Version
Version
contentDocument Content Document            The details of the content document.       Big, 57.0          57.0
Output

id                    String                The ID of the care request reviewer.       Big, 52.0          52.0

reviewDate            String                The date when the care request was         Big, 52.0          52.0
reviewed.

reviewer              String                The name of the user who reviewed the care Big, 52.0          52.0
request.

reviewerNotes String                        The notes related to the review.           Big, 52.0          52.0

reviewerType          String                The type of the reviewer who reviewed the Big, 52.0           52.0
care request.
Possible values are:
- Medical Director Review
- Registered Nurse Review
- Physician Review
- Peer Review

status                String                The status of the care request.            Big, 52.0          52.0
Possible values are:
- Approved
- Denied
- In process




## Care Authorization Request Response

The response body for the Care Services Review GET request.
JSON example


{
"careAuthorizationRequests": [
{
"careDiagnoses": [
{
"careRequestReviewers": [],
"healthConditionId": "0j4RM0000004Mk9YAE",
"id": "0VCRM0000004COJ4A2",
"modifiedPrimaryDiagnosis": false,

<!-- page:1820 -->

AFLS Overview                                            Response Bodies



"name": "CD Connect 1.0",
"presentOnAdmission": "Yes",
"primary": false,
"primaryDischargeDiagnosis": false
}
],
"careRequest": {
"appointedRepresentative": {},
"authorizationRefIdentifier": "1234",
"careRequestReviewers": [],
"caseSubStatus": "active",
"extendedRequest": false,
"firstReviewer": {},
"generalPractitioner": {
"generalPractitionerNpi": "1234"
},
"id": "0UmRM0000004HOG0A2",
"initialDenialNotificationTime": "",
"isIndependentReviewRequired": false,
"isReadmission": false,
"lastModifiedDate": "2022-11-29T15:39:56.000Z",
"medicalDirector": {},
"member": "001RM000005XHdbYAG",
"memberPrimaryPlan": "Gold Plan",
"originalDenialMedicalDirector": {},
"reconsiderationDenialNotificationTime": "",
"recordType": "Admission",
"reopenedBy": {},
"requestingPractitioner": {
"healthCareProviderId": "0cmRM0000000tldYAA",
"requestingPractitionerNpi": "742963"
},
"serviceorMedicationReceived": false,
"servicingFacility": {
"servicingFacilityId": "0klRM0000004CBnYAM",
"servicingFacilityNpi": "742963"
},
"servicingPractitioner": {
"servicingPractitionerNpi": "1234"
}
},
"careRequestCase": {
"caseNumber": "00001078",
"caseOrigin": "Web",
"caseOwner": "Chiranjeevi User",
"closed": false,
"createdBy": "005RM000002dmjJYAQ",
"dateOpened": "2022-11-29T15:39:56.000Z",
"escalated": false,
"lastModifiedBy": "005RM000002dmjJYAQ",
"lastModifiedDate": "2022-11-29T15:39:56.000Z",
"lastReferencedDate": "2022-11-29T15:39:56.000Z",
"lastViewedDate": "2022-11-29T15:39:56.000Z",
"priority": "Medium",

<!-- page:1821 -->

AFLS Overview                                              Response Bodies



"status": "New"
},
"careRequestDrugs": [
{
"authApprovalIdentifier": "123",
"authorizationRefIdentifier": "123",
"careRequestReviewers": [],
"dispenserAddress": {},
"drugAdministrationSetting": "Inpatient",
"id": "0VDRM0000004Cla4AE",
"medicationRefObjectId": "0kmRM0000004CSeYAM",
"name": "CRD Connect 1.0",
"priority": "Routine",
"requestType": "Filler Order",
"servicingFacility": {
"servicingFacilityId": "0klRM0000004CBnYAM",
"servicingFacilityNpi": "742963"
},
"servicingProvider": {
"healthCareProviderId": "0cmRM0000000tldYAA",
"servicingPractitionerNpi": "1234"
},
"status": "Active",
"statusReason": "Insufficient Information"
}
],
"careRequestItems": [
{
"authApprovalIdentifier": "123",
"authorizationRefIdentifier": "123",
"careRequestReviewers": [],
"clinicalServiceRequestId": "0jyRM0000004CAGYA2",
"id": "0VKRM0000004CPd4AM",
"name": "CRI Connect-1.0",
"priority": "Stat",
"reasonCode": "0hsRM00000003ytYAA",
"requestType": "Order",
"servicingFacility": {
"servicingFacilityId": "0klRM0000004CBnYAM",
"servicingFacilityNpi": "742963"
},
"servicingProvider": {
"healthCareProviderId": "0cmRM0000000tldYAA",
"servicingPractitionerNpi": "1234"
}
}
],
"patient": {
"firstName": "Charles",
"lastName": "Green",
"memberId": "001RM000005XHdbYAG"
},
"subscriber": {},
"trackedCommunications": [

<!-- page:1822 -->

AFLS Overview                                                                                               Response Bodies



{
"categories": [
"0hsRM00000003ytYAA"
],
"mediums": [
"0hsRM00000003ytYAA"
],
"name": "CX Label Test",
"notes": [
"0nNRM00000000272AA"
],
"payloads": [
{
"authorNoteId": "0nNRM00000000272AA",
"codeSetBundleId": "0hsRM00000003ytYAA"
}
],
"priority": "Urgent",
"reasonCodes": [
"0hsRM00000003ytYAA"
],
"recipients": [
"001RM000005ZZgSYAW"
],
"replacedItems": [
"108RM0000004C9IYAU"
],
"status": "Active",
"statusReason": "Unknown",
"type": "COMMUNICATIONREQUEST"
}
],
"transportLocations": []
}
],
"errorMessage": "",
"isSuccess": true
}


Property Name          Type                    Description                              Filter Group and Available
Version          Version
careAuthorizationRequests Care Authorization   A list of care authorization requests.   Small, 46.0      46.0
Request[]

errorMessage           String                  If the parameters were invalid, this     Small, 46.0      46.0
property contains the error message.

isSuccess              Boolean                 This flag indicates if the request was   Small, 46.0      46.0
successful or not.



Note: When you call the CareAuthorization GET API with the sectionNames attribute set, empty sections may
appear in the response body. This is normal and can be ignored.

<!-- page:1823 -->

AFLS Overview                                                                                                    Response Bodies




## Create Visit Output

Output representation of the create visit request.
JSON example
{
"code": "201",
"errorCode": "",
"errorMessage": "",
"status": "Success",
"visitId": "<visitId>"
}


Property Name         Type                   Description                                  Filter Group and       Available Version
Version
code                  String                 Code returned by the create visit request.   Small, 55.0            55.0

errorCode             String                 Error code with information about the error. Small, 55.0            55.0

errorMessage          String                 Message stating the reason for error, if any. Small, 55.0           55.0

status                String                 Status of the create visit request.          Small, 55.0            55.0

visitId               String                 ID of the visit record that is created.      Small, 55.0            55.0




## Content Document Output

Content document output representation.

Property Name         Type                   Description                                  Filter Group and       Available Version
Version
id                    String                 The ID of the content document.              Big, 57.0              57.0




## Content Management Output

Represents the information about the job status and any associated messages returned for Content Management APIs.
Properties

Property       Type             Description                         Filter Group and Version        Available Version
Name
isSuccess Boolean               Indicates whether the request Small, 65.0                           65.0
was successfully accepted or
processed.

message        String           Message that provides details       Small, 65.0                     65.0
about the request outcome.

errors         List<String>     List of errors that occurred        Small, 65.0                     65.0
during the request validation.

<!-- page:1824 -->

AFLS Overview                                                                                                     Response Bodies



Property        Type            Description                        Filter Group and Version           Available Version
Name
jobId           String          Job ID of the asynchronous         Small, 65.0                        65.0
processing of the request.


Example
{
"isSuccess": true,
"message": "Create Presentation Request Accepted for
processing",
"errors": [],
"jobId": "20V**********"
}




## Custom Field Value

The output representation of the custom field values.

Property Name         Type                  Description                                     Filter Group and      Available Version
Version
dataType              String                Specifies the primitive data type of a field.   Small, 53.0           53.0
Possible values are:
- Boolean
- DateOnly
- DateTime
- Number
- String
- TimeOnly

fieldName             String                The name of the custom field.                   Small, 53.0           53.0

fieldValue            Object                The value of the custom field.                  Small, 53.0           53.0

message               String                A message with any errors that can              Small, 53.0           53.0
encounter while processing the request.




## Customer Account Merge Output

Output representation of the response for a successful account merge operation.
JSON example
{
"code": "",
"success": true,
"message": "",

<!-- page:1825 -->

AFLS Overview                                                                                                 Response Bodies



"mergedAccountIds": [
{
"accountId": "001xx000002kl8xxFV"
},
{
"accountId": "001xx000003mn9xxGW"
}
]
}


Name                  Type                  Description                                 Filter Group and Available
Version          Version
code                  String                Code that represents the status of the      Small, 65.0       65.0
operation.

merged                String[]              List of the Consolidated Account IDs that Small, 65.0         65.0
AccountIds                                  were successfully merged.

message               String                Message related to the status of the        Small, 65.0       65.0
operation.

success               Boolean               Indicates whether the entire merge          Small, 65.0       65.0
operation was successful.




## Digital Verification Output

Output Representation for the digital verification API request.
Sample Response
{
"isSuccess": true,
"message": "Performed all Steps of Digital Verification Successfully",
"code": 200
}


Property Name          Type                   Description                                  Filter Group and   Available Version
Version
code                   String                 Response code of the Digital Verification    Small, 60.0        60.0
API.

isSuccess              Boolean                Indicates whether the digital verification   Small, 60.0        60.0
process was successful (true) or not
(false).

message                String                 Feedback message from the digital            Small, 60.0        60.0
verification API request.



Dispenser Address
Pharmacy address.

<!-- page:1826 -->

AFLS Overview                                                                                                               Response Bodies



Property Name          Type                    Description                                      Filter Group and        Available Version
Version
dispenserCity String                           Dispenser City                                   Big, 46.0               46.0

dispenserCountry String                        Dispenser Country                                Big, 46.0               46.0

dispenserPostalCode String                     Dispenser Postal Code                            Big, 46.0               46.0

dispenserState String                          Dispenser State                                  Big, 46.0               46.0

dispenserStreet String                         Dispenser Street                                 Big, 46.0               46.0




## Download Provider Output

The response representation containing the status of the provider download request and the resulting data.
Properties

Property Name                    Type                                 Description
code                             String                               The API response code, such as 200 or 500.

message                          String                               In case of a failure, this property provides error details.

response                         Map<String, Object>                  The actual response data, which includes information about the
created entities such as accounts and contact point addresses.

success                          Boolean                              Indicates whether the API request was successful.




## Document Conflict Field

Output representation of the target object field with conflict.

Property Name          Type                    Description                                      Filter Group and        Available Version
Version
objectFieldName String                         The name of the field in the target object       Small, 55.0             55.0
that has a conflict.




## Document Conflict Field List

Output representation of the target object fields with conflicts.

Property Name          Type                    Description                                      Filter Group and        Available Version
Version
conflictFieldList Document Conflict            Representation of the target object fields       Small, 55.0             55.0
Field[]                 that have conflicts.

<!-- page:1827 -->

AFLS Overview                                                                                            Response Bodies




## Document Management Result

Output representation of the document split request.
JSON example
Example of a success response:
{
"contentDocumentId": "069xx0000004D1sAAE",
"isSuccess": true
}

Example of an error response:
{
"error": {
"code": "INVALID_INPUT",
"message": "The ReceivedDocument field doesn’t exist in the specified
DocumentChecklistItem object."
},
"isSuccess": false
}


Property Name        Type                  Description                                Filter Group and   Available Version
Version
contentDocumentId String                   The ID of the content document that is     Small, 55.0        55.0
created after the request is successful.

error                Error Response        Error representation.                      Small, 55.0        55.0
Output

isSuccess            Boolean               Indicates whether the document split       Small, 55.0        55.0
request is successful (true) or not
(false).




## Document Process Output

Output representation of the document process creation or update request.
Response body example for POST
{
"isSuccess": true,
"message": "Account record was created.",
"objectFieldList": {
"objectFieldList": [
{
"fieldName": "Name",
"fieldValue": "Robert Weber"
},
{
"fieldName": "AccountNumber",
"fieldValue": "1962550079"
}

<!-- page:1828 -->

AFLS Overview                                                                                           Response Bodies



]
},
"ocrDocumentScanResultIdList": {
"ocrDocumentScanResultIdList": [
{
"resultId": "0ixxx00000002t3AAA"
}
]
},
"parentId": "001xx000003GeGFAA0"
}

Response body example for PATCH
{
"isSuccess": true,
"message": "Account record was updated.",
"objectFieldList": {
"objectFieldList": [
{
"fieldName": "Id",
"fieldValue": "001xx000003GeGFAA0"
},
{
"fieldName": "Name",
"fieldValue": "Robert Weber"
},
{
"fieldName": "AccountNumber",
"fieldValue": "1962550079"
}
]
},
"ocrDocumentScanResultIdList": {
"ocrDocumentScanResultIdList": [
{
"resultId": "0ixxx00000002t3AAA"
}
]
},
"parentId": "001xx000003GeGFAA0"
}


Property Name       Type              Description                                    Filter Group and   Available Version
Version
code                String            The code returned by the create or update Small, 55.0             55.0
API request.

conflictFieldList Document Conflict   The list of fields in the target object that   Small, 55.0        55.0
Field List        have conflicts.

isSuccess           Boolean           Indicates whether the create or update         Small, 55.0        55.0
request is successful (true) or not
(false).

<!-- page:1829 -->

AFLS Overview                                                                                            Response Bodies



Property Name         Type              Description                                   Filter Group and   Available Version
Version
message               String            The message of the create or update API       Small, 55.0        55.0
request.

objectFieldList Object Field List       The list of fields that are created or updated Small, 55.0       55.0
in the target object record.

ocrDocumentScan OCR Document Scan The list of the OCR document scan result            Small, 55.0        55.0
ResultIdList Result List          record IDs.

parentId              String            The ID of the target object in which the      Small, 55.0        55.0
record is created or updated.




## Error Response Output

Error response representation.
JSON example
{
"error": {
"code": "INVALID_INPUT",
"message": "The ReceivedDocument field doesn’t exist in the specified
DocumentChecklistItem object."
}
}


Property Name         Type              Description                                   Filter Group and   Available Version
Version
errorCode             String            Error code.                                   Small, 55.0        55.0

message               String            Message stating the reason for error, if any. Small, 55.0        55.0




## Enrollee Product Result

Details about the enrollee’s products.

Property Name         Type              Description                                   Filter Group and   Available Version
Version
error                 Error Message     Error code and message.                       Small, 46.0        46.0

isSuccess             Boolean           Indicates if the operation was a success.     Small, 46.0        46.0

productId             String            Id of the care program product.               Small, 46.0        46.0

providerId            String            Id of the care program provider.              Small, 46.0        46.0

created               Boolean           Indicate if the record was created.           Big, 46.0          46.0

<!-- page:1830 -->

AFLS Overview                                                                                                   Response Bodies



Property Name          Type                    Description                                   Filter Group and   Available Version
Version
id                     String                  Id for the newly created                      Big, 46.0          46.0
CareProgramEnrolleeProduct
record.

objectType             String                  The type of the object created. In this case, Big, 46.0          46.0
it is
CareProgramEnrolleeProduct.

status                 String                  Indicates the status of the record creation. Big, 46.0           46.0




## Enrollment Card Result

Details of the enrollment care for a single enrollee.

Property Name          Type                    Description                                   Filter Group and   Available Version
Version
error                  Error Message           Error code and message.                       Small, 46.0        46.0

isSuccess              Boolean                 Indicates if the operation was a success.     Small, 46.0        46.0

created                Boolean                 Indicate if the record was created.           Big, 46.0          46.0

id                     String                  Id for the newly created                      Big, 46.0          46.0
CareProgramEnrollmentCard
record.

objectType             String                  The type of the object created. In this case, Big, 46.0          46.0
it is CareProgramEnrollmentCard.

status                 String                  Indicates the status of the record creation. Big, 46.0           46.0




## Error Message

A generic error message containing error code and the message text.

Property Name          Type                    Description                                   Filter Group and   Available Version
Version
code                   String                  Error code.                                   Small, 46.0        46.0

message                String                  Error message text.                           Small, 46.0        46.0




## First Reviewer

The name of the person who reviewed the request first.

<!-- page:1831 -->

AFLS Overview                                                                                               Response Bodies



Property Name          Type                 Description                                  Filter Group and   Available Version
Version
username               String               username                                     Big, 46.0          46.0




## FHIR Reference

The output representation of the FHIR reference values.

Property Name          Type                 Description                                  Filter Group and   Available Version
Version
accountContact String                       The Salesforce ID of junction record. This   Small, 53.0        53.0
RelationId                                  record is created to connect a person’s
person account record with the person
account record of an associated person,
such as a contact party or practitioner.

contactContact String                       The Salesforce ID of junction record. This   Small, 53.0        53.0
RelationId                                  record is created to connect a person’s
person account record with the business
account record of an associated
organization, such as an issuer or a
managing organization.

message                String               A message with any errors that can           Small, 53.0        53.0
encounter while processing the request.

referenceId            String               The source system ID of the person or        Small, 53.0        53.0
organization referenced.

referenceResource String                    The FHIR resource type of the referenced     Small, 53.0        53.0
entity, for instance practitioner or
organization.

relationship           String               The relationship between the patient and Small, 53.0            53.0
the healthcare provider or the managing
organization, stored using Reciprocal Roles
records.

salesforceId           String               The Salesforce ID of the record that         Small, 53.0        53.0
represents the referenced person or
organization.




## Field Value Output

Represents the value of a field.

<!-- page:1832 -->

AFLS Overview                                                                                                Response Bodies



Property Name         Type                  Description                                   Filter Group and   Available Version
Version
developerName String                        The developer name of a field.                Small, 54.0        54.0

value                 String                The value of a field.                         Small, 54.0        54.0




## FHIR Address

The output representation of the FHIR address values.

Property Name         Type                  Description                                   Filter Group and   Available Version
Version
additional            Custom Field Value[] The data stored in any custom fields as        Small, 53.0        53.0
Information                                specified in the input request.

city                  String                The city of the address.                      Small, 53.0        53.0

country               String                The country of the address.                   Small, 53.0        53.0

line                  String                The street of the address.                    Small, 53.0        53.0

message               String                A message with any errors that can            Small, 53.0        53.0
encounter while processing the request.

periodEnd             String                The date until when the address is active.    Small, 53.0        53.0

periodStart           String                The date from when the address is active.     Small, 53.0        53.0

postalCode            String                The postal code for the address.              Small, 53.0        53.0

salesforceId          String                The Salesforce ID of the address record that’s Small, 53.0       53.0
created in Salesforce.

state                 String                The state or province of the address.         Small, 53.0        53.0

type                  String                The type of the address. For example,         Small, 53.0        53.0
physical and postal.

use                   String                The usage type of the address.                Small, 53.0        53.0




## FHIR Codeable Concept

The output representation of the Code Set Bundle records created to represent a codeableConcept value.

Property Name         Type                  Description                                   Filter Group and   Available Version
Version
additional            Custom Field Value[] The data stored in any custom fields as        Small, 53.0        53.0
Information                                specified in the input request.

<!-- page:1833 -->

AFLS Overview                                                                                               Response Bodies



Property Name         Type                  Description                                  Filter Group and   Available Version
Version
coding                .FHIR Coding[]        The code set records created to represent    Small, 53.0        53.0
the codings specified in the
codeableConcept input.

hash                  String                The unique code set bundle key that          Small, 53.0        53.0
represents the combination of code sets
included in the code set bundle.

message               String                A message with any errors that can           Small, 53.0        53.0
encounter while processing the request.

salesforceId          String                The Salesforce ID of the code set bundle     Small, 53.0        53.0
records created in Salesforce to store the
codeableConcept values.

text                  String                The human-readable textual representation Small, 53.0           53.0
of the concept, as specified in the
codeableConcept request.




## FHIR Coding

The output representation of the Code Set records created to represent a Coding value.

Property Name         Type                  Description                                  Filter Group and   Available Version
Version
additional            Custom Field Value[] The data stored in any custom fields as       Small, 53.0        53.0
Information                                specified in the input request.

code                  String                The industry-defined code that represents Small, 53.0           53.0
a concept, and is defined by a system and
its version.

display               String                The human-readable textural representation Small, 53.0          53.0
of the concept represented by the code.

endDate               String                The date until when the code set is valid.   Small, 53.0        53.0

hash                  String                The unique code set key associated with the Small, 53.0         53.0
code set record.

isActive              Boolean               Indicates whether the code set is active or Small, 53.0         53.0
not.

message               String                A message with any errors that can           Small, 53.0        53.0
encounter while processing the request.

salesforceId          String                The Salesforce ID of the code set record     Small, 53.0        53.0
created to store a coding value.

startDate             String                The date from when the code set is valid.    Small, 53.0        53.0

<!-- page:1834 -->

AFLS Overview                                                                                            Response Bodies



Property Name       Type                 Description                                  Filter Group and   Available Version
Version
system              String               The terminology system that defines the      Small, 53.0        53.0
meaning of the code set.

use                 String               The code set usage type associated with the Small, 53.0         53.0
code set record, stored as a picklist value.

userSelected        Boolean              Indicates whether the code was selected      Small, 53.0        53.0
directly by the user and is intended to be
the primary code for the concept.

version             String               The version of the system that defines a     Small, 53.0        53.0
code set.




## FHIR Human Name

The output representation of a PersonName record created to represent a humanName value.

Property Name       Type                 Description                                  Filter Group and   Available Version
Version
additional          Custom Field Value[] The data stored in any custom fields as      Small, 53.0        53.0
Information                              specified in the input request.

family              String               The family name of the patient. This field Small, 53.0          53.0
stores a combination of the person’s middle
and last names.

given               String               The first name of the person.                Small, 53.0        53.0

message             String               A message with any errors that can           Small, 53.0        53.0
encounter while processing the request.

periodEnd           String               The date until when the name is active.      Small, 53.0        53.0

periodStart         String               The date from when the name is active.       Small, 53.0        53.0

prefix              String               The prefix attached to the person’s name.    Small, 53.0        53.0

salesforceId        String               The Salesforce ID of the PersonName record Small, 53.0          53.0
created to store the humanName value.

sourceSystem        String               The source system from where the             Small, 53.0        53.0
PersonName record was brought into
Salesforce.

sourceSystemId String                    The identifier of the person name record in Small, 53.0         53.0
its source system.

sourceSystem        String               The date and time when the person name Small, 53.0              53.0
ModifiedDate                             record was last modified in its source
system.

<!-- page:1835 -->

AFLS Overview                                                                                                 Response Bodies



Property Name         Type                   Description                                   Filter Group and   Available Version
Version
suffix                String                 The suffix attached to the person’s name.     Small, 53.0        53.0

text                  String                 The full name of the person.                  Small, 53.0        53.0

use                   String                 The type of use the name is meant for. For Small, 53.0           53.0
example, temp, official, or alias.




## FHIR Contact Point

The output representation of contact details stored as a ContactPointPhone record.

Property Name         Type                   Description                                   Filter Group and   Available Version
Version
additional            Custom Field Value[] The data stored in any custom fields as         Small, 53.0        53.0
Information                                specified in the input request.

message               String                 A message with any errors that can            Small, 53.0        53.0
encounter while processing the request.

periodEnd             String                 The date until when a contact detail is       Small, 53.0        53.0
active.

periodStart           String                 The date from when a contact detail is        Small, 53.0        53.0
active.

rank                  Integer                The preferred order in which the patient’s    Small, 53.0        53.0
contact details are to be used.

salesforceId          String                 The Salesforce ID of the record created to    Small, 53.0        53.0
store the contact detail.

system                String                 The communication system associated with Small, 53.0             53.0
a contact detail. For example, phone and
email.

use                   String                 The usage type of the contact detail.         Small, 53.0        53.0

value                 String                 The contact number or email address stored Small, 53.0           53.0
in the ContactPointPhone
.TelephoneNumber. Contact
PointPhone.AreaCode, Contact
PointPhone.ExtensionNumber,
and Contact.Email fields.




## FHIR Identifier

The output representation of the Identified records created to represent an identifier value.

<!-- page:1836 -->

AFLS Overview                                                                                                     Response Bodies



Property Name           Type                  Description                                      Filter Group and   Available Version
Version
additional              Custom Field Value[] The data stored in any custom fields as           Small, 53.0        53.0
Information                                  specified in the input request.

assigner                FHIR Reference        The authorized body that issued the              Small, 53.0        53.0
identifier, specified as a reference to an
Account record.

message                 String                A message with any errors that can               Small, 53.0        53.0
encounter while processing the request.

periodEnd               String                The date and time until when the Identifier Small, 53.0             53.0
is active, recorded in DateTime format.

periodStart             String                The date and time from when the Identifier Small, 53.0              53.0
is active, recorded in DateTime format.

salesforceId            String                The Salesforce ID of the Identifier record       Small, 53.0        53.0
created to store the identifier value.

sourceSystem            String                The source system from which the identifier Small, 53.0             53.0
record was brought into Salesforce.

sourceSystemId String                         The identifier of the identifier record in its   Small, 53.0        53.0
source system

sourceSystemModifiedDate String               The date and time when the identifier            Small, 53.0        53.0
record was last modified in its source
system.

type                    FHIR Codeable         The system-defined code that represents          Small, 53.0        53.0
Concept               the type of ID the identifier record is.

use                     String                The usage type of the Identifier.                Small, 53.0        53.0

value                   String                The ID value of the Identifier.                  Small, 53.0        53.0




## FHIR Patient

The output representation of the patient stored in Salesforce, as specified in the input request.

Property Name           Type                  Description                                      Filter Group and   Available Version
Version
active                  Boolean               Indicates whether the patient is active or       Small,53.0         53.0
not.

additional              Custom Field Value    The data stored in any custom fields as          Small, 53.0        53.0
Information             Output[]              specified in the input request.

address                 FHIR AddresOutput[] The addresses of the patient, stored as            Small, 53.0        53.0
contact point address records.

<!-- page:1837 -->

AFLS Overview                                                                                               Response Bodies



Property Name        Type                  Description                                   Filter Group and   Available Version
Version
birthDate            String                The date of birth of the patient, recorded in Small, 53.0        53.0
Date format.

communication Patient                      The languages of communication associated Small, 53.0            53.0
Communication         with the patient, recorded in the
Language[]            PersonLanguage object.

contact              Patient Contact       The contact party associated with the      Small, 53.0           53.0
Party[]               patient record. Contacts are connected to
patients using a ContactContactRelation__c
junction record.

deceasedDateTime String                    The date and time of the patient’s death.     Small, 53.0        53.0

gender               String                The gender of the patient.                    Small, 53.0        53.0

general              FHIR Reference[]      The practitioner associated with the patient. Small, 53.0        53.0
Practitioner                               Practitioners are connected to patients using
a ContactContactRelation__c junction
record.

identifier           FHIR Identifier[]     The identifier information for the patient,   Small, 53.0        53.0
stored as Identifier records that reference
the patient record using their
Identifier.ParentRecordId
field.

managing             FHIR Reference        The organization that manages the patient Small, 53.0            53.0
Organisation                               recorded. Managing organizations are
connected to patients using the Account
ContactRelation junction object.

maritalStatus String                       The current marital status of the patient.    Small, 53.0        53.0

message              String                A message with any errors that can            Small, 53.0        53.0
encounter while processing the request.

multipleBirthInteger Integer               The birth order of the patient in a           Small, 53.0        53.0
multiple-birth event.

name                 FHIR Human Name[] The person name of the patient.                   Small, 53.0        53.0

salesforceId         String                The Salesforce ID of the Person Account       Small, 53.0        53.0
record that represents the patient.

sourceSystemId String                      The record identifier of the patient’s record Small, 53.0        53.0
in its source system.

telecom              FHIR Contact Point[] The contact details of the patient. For        Small, 53.0        53.0
example, phone numbers and email
addresses.

<!-- page:1838 -->

AFLS Overview                                                                                             Response Bodies




## General Practitioner

Member's primary or general care practitioner.

Property Name         Type                  Description                                Filter Group and   Available Version
Version
generalPractitionerNpi String               General Practitioner NPI number.           Big, 46.0          46.0




## Medical Director

Name of the medical director who reviewed the request.

Property Name         Type                  Description                                Filter Group and   Available Version
Version
username              String                username                                   Big, 46.0          46.0




## Merge Customer Account with Status Output

The response body for the merge customer account with status request.
JSON example
{
"code": "",
"success": true,
"message": "",
"jobId": "01pxx000001T7QxxAK",
"accepted": [
"a3Lxx000000MbzxxAC",
"a3Lxx000000MbzxxBC"
],
"rejected": [
{
"winningId": "001xx00001STZUxxTR",
"winningExternalIdField": null,
"losingId": "001xx00001SYtgxxUI",
"losingExternalIdField": null,
"errorMessage": "Unable to find the Account with salesforce id 001xx00001STZVxxAS."

}
]
}


Property Name         Type                  Description                                Filter Group and   Available Version
Version
code                  String                A code that represents the status of the   Small, 65.0        65.0
operation.

success               Boolean               Indicates whether the operation was        Small, 65.0        65.0
successful.

<!-- page:1839 -->

AFLS Overview                                                                                                   Response Bodies



Property Name          Type                    Description                                   Filter Group and   Available Version
Version
message                String                  A message related to the status of the        Small, 65.0        65.0
operation.

jobId                  String                  ID of the asynchronous job created to         Small, 65.0        65.0
process the requests.

accepted               String[]                A list of the Consolidated Account IDs for Small, 65.0           65.0
which the merge request was successfully
accepted for processing.

rejected               RejectedMergeRequest[] A list of merge requests that were rejected                       65.0
due to invalid input.




## Original Denial Medical Director

The name of the medical director who denied the original request.

Property Name          Type                    Description                                   Filter Group and   Available Version
Version
username               String                  username                                      Big, 46.0          46.0




## Object Field

Output representation of of the target object field.

Property Name          Type                    Description                                   Filter Group and   Available Version
Version
fieldName              String                  The name of the field in the target object.   Small, 55.0        55.0

fieldValue             Object                  The value of the field.                       Small, 55.0        55.0




## Object Field List

Output representation of the target object fields list.

Property Name          Type                    Description                                   Filter Group and   Available Version
Version
objectFieldList Object Field[]                 Represents the fields that are created or     Small, 55.0        55.0
updated in the Salesforce object.




## OCR Document Scan Result

Output representation of the OCR document scan result ID.

<!-- page:1840 -->

AFLS Overview                                                                                              Response Bodies



Property Name         Type                   Description                               Filter Group and    Available Version
Version
resultId              String                 The ID of the OCR document scan result.   Small, 55.0         55.0




## OCR Document Scan Result List

Output representation of the list of the OCR document scan results IDs.

Property Name         Type                   Description                               Filter Group and    Available Version
Version
ocrDocumentScan OCR Document Scan Represents the OCR document scan result              Small, 55.0         55.0
ResultIdList Result[]             IDs.




## Patient Communication Language

The output representation of the PersonLanguage records that represent the communication preferences of a person.

Property Name         Type                   Description                               Filter Group and    Available Version
Version
additional            Custom Field Value[] The data stored in any custom fields as     Small, 53.0         53.0
Information                                specified in the input request.

language              String                 The language specified for communication. Small, 53.0         53.0

message               String                 A message with any errors that can        Small, 53.0         53.0
encounter while processing the request.

preferenceRank Integer                       The ranked order of preference the person Small, 53.0         53.0
has for being communicated with using the
language.

salesforceId          String                 The Salesforce ID of the PersonLanguage Small, 53.0           53.0
record that represents the communication
preferences of a person.




## Patient Contact Party

The output representation of contact parties associated with a patient.

Property Name         Type                   Description                               Filter Group and    Available Version
Version
additional            Custom Field Value[] The data stored in any custom fields as     Small, 53.0         53.0
Information                                specified in the input request.

address               FHIR Address           The address associated with the contact   Small, 53.0         53.0
party, stored as ContactPointAddress
records.

<!-- page:1841 -->

AFLS Overview                                                                                                Response Bodies



Property Name          Type                  Description                                  Filter Group and   Available Version
Version
contactContact String                        The Salesforce ID of the junction record that Small, 53.0       53.0
RelationId                                   connects the patient and the contact party.

gender                 String                The gender of the contact party.             Small, 53.0        53.0

message                String                A message with any errors that can           Small, 53.0        53.0
encounter while processing the request.

name                   FHIR Human Name       The names of the contact party, specified    Small, 53.0        53.0
as PersonName records.

organisation           FHIR Reference        The organization associated with the         Small, 53.0        53.0
contact party.

periodEnd              String                The date until when the person is a valid    Small, 53.0        53.0
contact for the patient.

periodStart            String                The date from when the person is a valid     Small, 53.0        53.0
contact for the patient.

relationship           FHIR Codeable         The type of relationship between the          Small, 53.0       53.0
Concept               contact party and the patient, specified with
Reciprocal Role records.

salesforceId           String                The Salesforce ID of the Person Account      Small, 53.0        53.0
record that represents the contact party.

telecom                FHIR Contact Point[] The contact details of the contact party. For Small, 53.0        53.0
example, phone numbers and email
addresses.




## Patient Get

Output representation of details of a patient record.
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

<!-- page:1842 -->




"use": "Identifier"
}
]
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

<!-- page:1843 -->

AFLS Overview                                                                                       Response Bodies



"suffix": "Jr."
},
"telecom": [
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
"sourceSystemId":"567890",
"deceasedDateTime": "2023-02-10T10:40:13.000Z",
"salesforceId":"0NBRM0000004CGx4AM",
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

Property Name       Type             Description                                Filter Group and Available
Version          Version
active              Boolean          Indicates whether the patient record is    Small, 53.0      53.0
active or not.

address             FHIR Address[]   The addresses of the patient, stored as    Small, 53.0      53.0
contact point address records.

birthDate           String           The date of birth of the patient, recorded Small, 53.0      53.0
in Date format.

communication Patient                The languages of communication             Small, 53.0      53.0
Communication    associated with the patient, recorded in
Language[]       the PersonLanguage object.

<!-- page:1844 -->

AFLS Overview                                                                                                 Response Bodies



Property Name         Type                   Description                                  Filter Group and Available
Version          Version
contact               Patient Contact        The contact party associated with the     Small, 53.0         53.0
Party[]                patient record. Contacts are connected to
patients using a ContactContact
Relation__c junction record.

deceasedDateTime String                      The date and time of the patient’s death. Small, 53.0         53.0

gender                String                 The gender of the patient.                   Small, 53.0      53.0

general               FHIR Reference[]       The practitioner associated with the         Small, 53.0      53.0
Practitioner                                 patient. Practitioners are connected to
patients using a ContactContact
Relation__c junction record.

identifier            FHIR Identifier[]      The identifier information for the patient, Small, 53.0       53.0
stored as Identifier records that reference
the patient record using their
Identifier.ParentRecordId
field.

managing              FHIR Reference[]       The organization that manages the patient Small, 53.0         53.0
Organisation                                 recorded. Managing organizations are
connected to patients using the Account
ContactRelation junction object.

maritalStatus String                         The current marital status of the patient.   Small, 53.0      53.0

message               String                 A message with any errors that can have      Small, 53.0      53.0
been encountered while processing the
request.

multiple              Integer                The birth order of the patient in a          Small, 53.0      53.0
BirthInteger                                 multiple-birth event.

name                  FHIR Human Name[] The person name of the patient.                   Small, 53.0      53.0

resourceType          String                 Reserved for future use.                     Small, 53.0      53.0

salesforceId          String                 The Salesforce ID of the Person Account      Small, 53.0      53.0
record that represents the patient.

sourceSystemId String                        The record identifier of the patient’s record Small, 53.0     53.0
in its source system.

telecom               FHIR Contact Point[] The contact details of the patient,            Small, 53.0      53.0
including phone numbers and email
addresses.




## Patient Upsert

Output representation of result after a Patient FHIR resource is created.

<!-- page:1845 -->

AFLS Overview                                                                                                Response Bodies



Property Name         Type                   Description                                  Filter Group and   Available Version
Version
errorCode             Integer                The error code in case of failure.           Small, 53.0        53.0

errorMessage          String                 The error message in case of failure.        Small, 53.0        53.0

failedCount           Integer                Specifies the failed count number.           Small, 53.0        53.0

failedRecords FHIR Patient[]                 Represents the failed records.               Small, 53.0        53.0

status                String                 Specifies the status of the request.         Small, 53.0        53.0
Possible values are:
- Failure—Specifies that the upsert
request of the Patient FHIR resource
couldn’t be completed.
- Success—Specifies that the upsert
request of the Patient FHIR resource is
successfully completed.

successRecords FHIR Patient[]                Represents the records that got successfully Small, 53.0        53.0
created.




## Patient Update

Output representation of result after a Patient FHIR resource is updated.

Property Name         Type                   Description                                  Filter Group and   Available Version
Version
code                  Integer                The error in case of failure.                Small, 53.0        53.0

errorCode             Integer                The error code in case of failure.           Small, 53.0        53.0

errorMessage          String                 The error message in case of failure.        Small, 53.0        53.0

status                String                 Specifies the status of the request.         Small, 53.0        53.0
Possible values are:
- Failure—Specifies that the update
request of the Patient FHIR resource
couldn’t be completed.
- PartialSuccess—Specifies that
the update request of the Patient FHIR
resource is partially completed.
- Success—Specifies that the update
request of the Patient FHIR resource is
successfully completed.

<!-- page:1846 -->

AFLS Overview                                                                                                              Response Bodies




## Payload Output

Output representation of the details communicated to the recipient.

Property Name            Type                       Description                                     Filter Group and       Available Version
Version
authorNoteId             String                     The author note ID that contains the            Big, 57.0              57.0
communication details along with
information about the author of the note
and the time the note was authored.

codeSetBundleId String                              The ID of the code set bundle.                  Big, 57.0              57.0




## Presentation Page Product Output

Represents the output for Presentation Page Products API.
Properties

Property           Type                 Description                        Filter Group and Version            Available Version
Name
isSuccess Boolean                       Indicates whether the request Small, 65.0                              65.0
was successfully accepted or
processed.

message            String               Message that provides details      Small, 65.0                         65.0
about the request outcome.

errors             List<String>         List of errors that occurred       Small, 65.0                         65.0
during the request validation.


Example
{
"isSuccess": true,
"message": "Presentation page products created successfully",

"errors": []
}




## Program Enrollment Result

Result containing details of all patient enrollment status. If there is success, it contains id of new records created for each patient.

Property Name            Type                       Description                                     Filter Group and       Available Version
Version
careProgramEnrollmentResults Care Program           A list containing the results of all the patient Small, 46.0           46.0
Enrollment Result[]        enrollments.

<!-- page:1847 -->

AFLS Overview                                                                                                             Response Bodies



Property Name              Type                    Description                                      Filter Group and      Available Version
Version
error                      Error Message           Error output containing the code and the         Small, 46.0           46.0
message text.

isSuccess                  Boolean                 Indicates whether the enrollment was             Small, 46.0           46.0
successful.




## Rejected Merge Request Output

A merge request that was rejected due to invalid input.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.
Properties

Property             Type              Description                        Filter Group and Version            Available Version
Name
winningId String                       The Salesforce ID of the      Small, 65.0                              65.0
Consolidated Account that was
part of the rejected request.

winningExternalIdField String          The external ID of the        Small, 65.0                              65.0
Consolidated Account that was
part of the rejected request.

losingId             String            The Salesforce ID of the Merged Small, 65.0                            65.0
Account that was part of the
rejected request.

losingExternalIdField String           The external ID of the Merged Small, 65.0                              65.0
Account that was part of the
rejected request.

errorMessage String                    The error message explaining Small, 65.0                               65.0
why the request was rejected.




## Requesting Practitioner

Ordering or referring practitioner for the request.

Property Name              Type                    Description                                      Filter Group and      Available Version
Version
healthCareProviderId String                        The provider associated with request              Big, 55.0            55.0
creation for this prior authorization. This field
is a lookup to
HealthcareProviderId.

<!-- page:1848 -->

AFLS Overview                                                                                             Response Bodies



Property Name            Type                Description                               Filter Group and   Available Version
Version
requestingPractitionerNpi String             Requesting Practitioner NPI number.       Big, 46.0          46.0




## Reopened By Output

The name of the person who reopened the care request.

Property Name            Type                Description                               Filter Group and   Available Version
Version
username                 String              The user who reopened the care request.   Big, 52.0          52.0




## Sample Limits Validation Response Output

Output representation for a sample limits validation request.
JSON example
{
"code": null,
"message": null,
"response": {
"result": "Error",
"validationResults": [
{
"message": "Quantity exceeds sample limits",
"errors": [
{
"type": "sampleLimit",
"message": "Quantity exceeds sample limits",
"lotAllocationWarningMessage": null,
"filters": [
{
"value": "1KeXXXXXXXXXXXX0AM",
"field": "sample"
}
],
"accountId": "001XXXXXXXXXXXXAAG"
}
],
"errorLevel": "validation",
"errorBehaviour": "Error"
}
],
"errorBehaviour": "Error",
"message": "Quantity exceeds sample limits",
"errors": [
{
"type": "sampleLimit",
"message": "Quantity exceeds sample limits",
"lotAllocationWarningMessage": null,

<!-- page:1849 -->

AFLS Overview                                                                                                Response Bodies



"filters": [
{
"value": "1KeXXXXXXXXXXXXz0AM",
"field": "sample"
}
],
"accountId": "001XXXXXXXXXXXX1AAG"
}
],
"errorLevel": "validation"
},
"success": true
}


Property Name         Type                  Description                                   Filter Group and   Available Version
Version
code                  String                The API error code, if available.             Small, 65.0        65.0

message               String                The error or success message, if available.   Small, 65.0        65.0

response              Map<String,           Data related to the sample limits validation Small, 65.0         65.0
Object>               results.

success               Boolean               Indicates whether the request was             Small, 65.0        65.0
successful (true) or not (false).




## Search Results Output

Output representation for provider search request.
JSON example
{
"success": true,
"message": "",
"code": "200",
"response": {
"simpleSearchFieldSetMembers": {
"HCO": {},
"HCP": {}
},
"groupAddressMatches": []
}
}

Properties

Name                 Type                 Description                                  Filter Group and Available version
Version
success              Boolean              Indicates whether the API request was        Small, 65.0       65.0
successful (true) or not (false..

<!-- page:1850 -->

AFLS Overview                                                                                                    Response Bodies



Name                    Type                 Description                                   Filter Group and Available version
Version
message                 String               Message returned in case of an API failure. Small, 65.0         65.0

code                    String               HTTP response code.                           Small, 65.0       65.0

response                Map<String,          Actual search data, which includes results Small, 65.0          65.0
Object>              for simpleSearchFieldSet
Members and groupAddress
Matches.




## Servicing Facility

Facility where the service is being provided.

Property Name           Type                   Description                                    Filter Group and   Available Version
Version
servicingFacilityId String                     ID of the facility where the patient is        Big, 55.0          55.0
receiving the service for this care request.

servicingFacilityNpi String                    Servicing Facility NPI number.                 Big, 46.0          46.0




## Servicing Practitioner

Practitioner administering the service.

Property Name           Type                   Description                                    Filter Group and   Available Version
Version
healthCareProviderId String                    ID of the provider associated with providing Big, 55.0            55.0
the service for this care request. This field is
a lookup to HealthcareProviderId.

servicingPractitionerNpi String                Servicing Practitioner NPI number.             Big, 46.0          46.0




## Subscriber

The primary member on the plan.

Property Name           Type                   Description                                    Filter Group and   Available Version
Version
firstName               String                 First name of the subscriber. Maps to:         Big, 46.0          46.0
Account.FirstName

lastName                String                 Last name of the subscriber. Maps to:          Big, 46.0          46.0
Account.LastName

<!-- page:1851 -->

AFLS Overview                                                                                                   Response Bodies



Property Name        Type                  Description                                       Filter Group and   Available Version
Version
memberID             String                Member ID for the subscriber. Maps to:            Big, 46.0          46.0
careRequestExtention.SubscriberMemberIdentifier




## Tracked Communication Output

Output representation of tracked communications for a care request.

Property Name        Type                  Description                                       Filter Group and   Available Version
Version
categories           String[]              The categories of the communication.              Big, 57.0          57.0

communicator         String                The individual sending this communication Big, 57.0                  57.0
Reference                                  request.

contextReference String                    The clinical encounter for which the              Big, 57.0          57.0
communication is created.

mediums              String[]              The mediums of the communication                  Big, 57.0          57.0
request.

name                 String                The name of the communication request.            Big, 57.0          57.0

notes                String[]              The comments made about the                       Big, 57.0          57.0
communication request.

occurrenceEnd String                       The date by when the communication is             Big, 57.0          57.0
DateTime                                   expected to end.

occurrenceStart String                     The date from when the communication is Big, 57.0                    57.0
DateTime                                   expected to be sent.

payloads             Payload Output[]      Represents details of the communication.          Big, 57.0          57.0

priority             String                The priority of the communication.                Big, 57.0          57.0

reasonCodes          String[]              The codes that represent the reason for the Big, 57.0                57.0
communication.

recipients           String[]              The recipients of the communication.              Big, 57.0          57.0

replacedItems String[]                     The parent TrackedCommunication records Big, 57.0                    57.0
to which the details are being added.

requesterReference String                  The requester of the communication.               Big, 57.0          57.0

status               String                The status of the communication.                  Big, 57.0          57.0

statusReason         String                The reason for the status of the                  Big, 57.0          57.0
communication.

subject              String                The patient for whom the communication Big, 57.0                     57.0
is created.

<!-- page:1852 -->

AFLS Overview                                                                                                 Response Bodies



Property Name           Type                 Description                                   Filter Group and   Available Version
Version
type                    String               The type of the communication.                Big, 57.0          57.0




## Transport Location

Transport Location output representation

Property Name           Type                 Description                                   Filter Group and   Available Version
Version
ambulanceTransportDistance Double            Distance traveled during ambulance            Big, 46.0          46.0
transport. Maps to:
CareRequestItem.AmbulanceTransportDistance

ambulanceTransportReason String              Reason for ambulance transport. Maps to:      Big, 46.0          46.0
CareRequestItem.AmbulanceTransportReason

ambulanceTransportType String                Type of ambulance transport. Maps to:         Big, 46.0          46.0
CareRequestItem.AmbulanceTransportType

name                    String               Name                                          Big, 46.0          46.0




## Verifier Output

Represents a verifier.

Property Name           Type                 Description                                   Filter Group and   Available Version
Version
developerName String                         The developer name of the verifier.           Small, 54.0        54.0

verificationState String                     Indicates whether the verifier was checked. Small, 54.0          54.0




## Work Type Lead Time Output

Output representation of a list of work types and their associated lead times.
JSON example
{
"code":"202",
"isSuccess":true,
"message":"",
"workTypeLeadTimeMap":{
"08qxx0000004QlUAAU":1,
"08qxx0000004QjsAAE":1,
"08qxx0000004Qn6AAE":5
}
}

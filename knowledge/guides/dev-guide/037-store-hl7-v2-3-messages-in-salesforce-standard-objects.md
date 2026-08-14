<!-- guide:dev-guide section:store-hl7-v2-3-messages-in-salesforce-standard-objects pages:1588-1605 -->
# Store HL7 v2.3 Messages in Salesforce Standard Objects

AFLS Overview                                                            Store HL7 v2.3 Messages in Salesforce Standard Objects



Timing           Salesforce Field                  Type              Salesforce       Notes
Resource                                                             Cardinality
repeat           ActivityTiming.Weekly Lookup:                            0.M         N/A
.timeOf          ActivityTimeId        Operating
Day                                                Hours

repeat           ActivityTiming.                   Picklist                0.1        While FHIR defines repeat.when as a
.when            ActivityTime                                                         zero-to-many code, the Salesforce
implementation is a zero-to-one picklist.

repeat           ActivityTiming.                   Int                     0.1        N/A
.offset          ActivityTimeOffset


## code             ActivityTiming.Timing Lookup:                             0.1

CodeId                CodeSet
Bundle




## Store HL7 v2.3 Messages in Salesforce Standard Objects

Like the Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7), HL7 v2.3 is also a database framework
defined by HL7 to facilitate interoperability between electronic healthcare systems. Because the Clinical Data Model was built to align
with FHIR v4.0, it is also compatible with its predecessor HL7 v2.3. However, because of the way the Salesforce platform works, the
Salesforce implementation varies from the HL7 recommendations in certain cases such as the data types that are used.
Here are some HL7 messages and their segments that are supported in Salesforce standard objects.



## HL7 v2.3 Messages Supported in Salesforce Standard Objects

Salesforce Standard objects support ADT, ORM, ORU, MDM, VXU, and RDE messages from HL7 v2.3 based systems.
HL7 v2.3 Segments Supported in Salesforce Standard Objects
Salesforce Standard objects support the following segments in HL7 v2.3.
HL7 v2.3 Data Types Supported in Salesforce Standard Objects
Salesforce Standard objects support the following data types defined in HL7 v2.3.



## HL7 v2.3 Messages Supported in Salesforce Standard Objects

Salesforce Standard objects support ADT, ORM, ORU, MDM, VXU, and RDE messages from HL7 v2.3 based systems.
These messages can be stored in Salesforce by mapping their constituent segments to fields in Salesforce standard objects.
- Admission, Discharge, and Transfer (ADT)
– Patient Identification (PID) on page 1592
– Patient Visit (PV1) on page 1594
– Patient Visit - Additional Information (PV2) on page 1596
– Observation Segment (OBX) on page 1588
– Patient Allergy Information (AL1) on page 1586

- Order Message (ORM_O01)
– Patient Identification (PID) on page 1592

<!-- page:1589 -->

AFLS Overview                                                    Store HL7 v2.3 Messages in Salesforce Standard Objects



## – Patient Visit (PV1) on page 1594

– Patient Visit - Additional Information (PV2) on page 1596
– Patient Allergy Information (AL1) on page 1586
– Common Order Segment (ORC) on page 1591

- Unsolicited Transmission of an Observation Message (ORU_R01)
– Patient Identification (PID) on page 1592
– Patient Visit (PV1) on page 1594
– Patient Visit - Additional Information (PV2) on page 1596
– Common Order Segment (ORC) on page 1591
– Observation Request Segment (OBR) on page 1587
– Observation Segment (OBX) on page 1588

- Unsolicited Vaccination Record Update (VXU_V04)
– Patient Identification (PID) on page 1592
– Patient Visit (PV1) on page 1594
– Patient Visit - Additional Information (PV2) on page 1596
– Common Order Segment (ORC) on page 1591
– Pharmacy Administration Segment (RXA) on page 1597
– Pharmacy Route Segment (RXR) on page 1599
– Observation Segment (OBX) on page 1588

- Pharmacy/Treatment Encoded Order Message (RDE_O01)
– Patient Identification (PID) on page 1592
– Patient Visit (PV1) on page 1594
– Patient Visit - Additional Information (PV2) on page 1596
– Patient Allergy Information (AL1) on page 1586
– Common Order Segment (ORC) on page 1591
– Pharmacy Encoded Order Segment (RXE) on page 1598
– Pharmacy Route Segment (RXR) on page 1599
– Pharmacy Component Order Segment (RXC) on page 1598
– Observation Segment (OBX) on page 1588



## HL7 v2.3 Segments Supported in Salesforce Standard Objects

Salesforce Standard objects support the following segments in HL7 v2.3.



## AL1 - Patient Allergy Information

The Patient Allergy Information (AL1) HL7 segment maps to the AllergyIntolerance object in Salesforce.
OBR - Observation Request Segment
The Observation Request Segment (OBR) HL7 segment maps primarily to the ClinicalServiceRequest,
DiagnosticSummary, and PatientMEdicalProcedure objects in Salesforce.

<!-- page:1590 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects



## OBX - Observation Segment

The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.
ORC - Common Order Segment
The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and
MedicationRequest objects in Salesforce.
PID - Patient Identification
The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.
PV1 - Patient Visit
The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.
PV2 - Patient Visit - Additional Information
The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.
RXA - Pharmacy Administration Segment
The Pharmacy Administration Segment (RXA) HL7 segment maps primarily to the PatientImmunization and Medication
objects in Salesforce.
RXC - Pharmacy Component Order Segment
The Pharmacy Component Order Segment (RXC) HL7 segment maps to the Medication and MedicationRequestobjects
in Salesforce.
RXE - Pharmacy Encoded Order Segment
The Pharmacy Encoded Order Segment (RXE) HL7 segment maps primarily to the Medication object in Salesforce.
RXR - Pharmacy Route Segment
The Pharmacy Route Segment (RXR) HL7 segment maps primarily to the PatientImmunization and
PatientMedicationDosage objects in Salesforce.



## AL1 - Patient Allergy Information

The Patient Allergy Information (AL1) HL7 segment maps to the AllergyIntolerance object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for AL1 map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 38: AL1 - Salesforce

AL1                              Salesforce Field                 Type                             Notes
AL1.2 - Allergy Type             AllergyIntolerance.Category Picklist                              N/A

AL1.3 - Allergy Code/Mnemonic/ AllergyIntolerance.CodeId Lookup: CodeSetBundle                     N/A
Description

AL1.4 - Allergy Severity         PatientHealthReaction Picklist                                    N/A
.Severity

AL1.5 - Allergy Reaction         PatientHealthReaction Lookup: CodeSetBundle                       N/A
.ManifestedSymptomId

<!-- page:1591 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects



AL1                              Salesforce Field                 Type                             Notes
AL1.6 - Identification Date      onset.onsetDateTime              DateTime                         N/A




## OBR - Observation Request Segment

The Observation Request Segment (OBR) HL7 segment maps primarily to the ClinicalServiceRequest,
DiagnosticSummary, and PatientMEdicalProcedure objects in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for OBR map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 39: OBR - Salesforce

OBR                              Salesforce Field                 Type                             Notes
OBR.2 - Place Order Number       Identifier                       Object                           Place Order Number is created
as an identifier record. This
record will then reference the
entity it belongs to using the
ParentRecordId field.

OBR.3 - Fill Order Number        Identifier                       Object                           Fill Order Number is created as
an identifier record. This record
will then reference the entity it
belongs to using the
ParentRecordId field.

OBR.4 - Universal Service Id     • ClinicalService                Lookup: CodeSetBundle            N/A
Request.Request
CodeId
- PatientMedical
Procedure.CodeId
- DiagnosticSummary
.CodeId

OBR.5 - Order Status             • ClinicalService                Picklists                        N/A
Request.Status
- MedicationRequest
.Status

OBR.7 - Observation Date/Time PatientMedical                      Double                           N/A
Procedure.StartDate

OBR.16 - Ordering Provider       ClinicalService                  Lookup: HealthcareProvider,      N/A
Request.RequesterId              Account, Asset

<!-- page:1592 -->

AFLS Overview                                                        Store HL7 v2.3 Messages in Salesforce Standard Objects



OBR                             Salesforce Field                  Type                             Notes
OBR.22 - Results Rpt/Status     DiagnosticSummary.                DateTime                         N/a
Chng - Date/Time                IssuedDateTime

OBR.24 - Diagnostic Service     • ClinicalService                 • Lookup: CodeSetBundle          N/A
Section ID                        Request.CategoryId • Picklist
- DiagnosticSummary
.CategoryId

OBR.25 - Result Status          • PatientMedical                  Picklist                         N/A
Procedure.Status
- DiagnosticSummary
.Status

OBR.27 - Quantity/Timing        ClinicalService                   Double                           N/A
Request.Quantity
Numerator

ClinicalService                   Double                           N/A
Request.Quantity
Denominator

ClinicalService                   Lookup: UnitOfMeasure            N/A
Request.Quantity
NumeratorUnitId

OBR.31 - Reason For Study       PatientMedical                    Lookup: CodeSetBundle            N/A
Procedure
.ReasonCodeId

OBR-32 - Principal Result       DiagnosticSummary.                Lookup: CarePerformer            N/A
Interpreter                     InterpretedById




## OBX - Observation Segment

The Observation Segment (OBX) HL7 segment maps to the CareObservation object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for OBX map to fields in Salesforce standard objects.

Note: Only the Segments supported by Salesforce are mentioned below.


## Table 40: OBX - Salesforce

OBX                             Salesforce Field                  Type                             Notes
OBX.2 - Value Type              CareObservation.ObservedValueType Picklist                         N/A

<!-- page:1593 -->

AFLS Overview                                                 Store HL7 v2.3 Messages in Salesforce Standard Objects



OBX                              Salesforce Field          Type                             Notes
OBX.3 - Observation Identifier   CareObservation           Lookup: CodeSetBundle            N/A
.CodeId

CareObservation           Lookup: CodeSetBundle            N/A
Component.Component
TypeCodeId

OBX.5 - Observation Value        • CareObservation.        Multiple Data types; Refer Object N/A
ObservedValue          reference documentation
Numerator
- CareObservation.
ObservedValue
Denominator
- CareObservation.
ObservedValue
CodeId
- CareObservation.
ObservedValueText
- CareObservation.Is
Observed
- CareObservation.
ObservationStart
Time
- CareObservation.
ObservationEndTime
- Care
ObservationComponent
.ObservedValue
Numerator
- CareObservation
Component.Observed
ValueDenominator
- Care
ObservationComponent
.ObservedValue
CodeId
- Care
ObservationComponent
.ObservedValueText
- Care
ObservationComponent
.IsObserved
- CareObservation
Component.

<!-- page:1594 -->

AFLS Overview                                                      Store HL7 v2.3 Messages in Salesforce Standard Objects



OBX                           Salesforce Field                  Type                         Notes
ObservationStart
Time
- Care
ObservationComponent
.ObservationEnd
Time
- Attachment.
ContentType
- Attachment.Body
- PatientMedical
Procedure.ReportId

OBX.6 - Units                 • CareObservation.                Lookup: UnitOfMeasure        N/A
ObservedValue
UnitId
- CareObservation
Component.Observed
ValueUnitId

OBX.7 - Reference Range       • CareObservation                 Double                       N/A
.LowerBaseline
Value
- CareObservation
.UpperBaseline
Value
- CareObservation
Component.Lower
BaselineValue
- CareObservation
Component.Upper
BaselineValue

OBX.8 - Abnormal Flags        • CareObservation.                Lookup: CodeSetBundle        N/A
Value
Interpretation
- CareObservation
Component.Value
Interpretation

OBX.11 - Observation Result   CareObservation.ObservationStatus Picklist                     N/A
Status

OBX.14 - Date/Time of the     CareObservation.IssuedDateTime DateTime                        N/A
Observation

<!-- page:1595 -->

AFLS Overview                                                        Store HL7 v2.3 Messages in Salesforce Standard Objects



OBX                             Salesforce Field                 Type                              Notes
OBX.16 - Responsible Observer CareObservation.ObserverId Lookup: HealthcareProvider,               N/A
Account

CarePerformer                    Object                            The performer information for a
Procedure is represented as Care
Performer records that reference
the PatientMedicalProcedure
record using their Care
Performer.Parent
RecordId field.

OBX.17 - Observation Method     CareObservation.MethodId Lookup: CodeSetBundle                     N/A




## ORC - Common Order Segment

The Common Order Segment (ORC) HL7 segment maps primarily to the ClinicalServiceRequest and MedicationRequest
objects in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for ORC map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 41: ORC - Salesforce

ORC                             Salesforce Field                 Type                              Notes
ORC.1 - Order Control           • ClinicalService                Picklists                         N/A
Request.Status
- MedicationRequest
.Status

ORC.2 - Place Order Number      Identifier                       Object                            Place Order Number is created
as an identifier record. This
record will then reference the
entity it belongs to using the
ParentRecordId field.

ORC.3 - Fill Order Number       Identifier                       Object                            Fill Order Number is created as
an identifier record. This record
will then reference the entity it
belongs to using the
ParentRecordId field.

ORC.4 - Placer Group Number     ClinicalService                  Lookup: Identifier                N/A
Request.Service
RequestGroup
IdentifierId

<!-- page:1596 -->

AFLS Overview                                                          Store HL7 v2.3 Messages in Salesforce Standard Objects



ORC                                Salesforce Field                Type                            Notes
ORC.5 - Order Status               • ClinicalService               Picklists                       N/A
Request.Status
- MedicationRequest
.Status

ORC.7 - Quantity/Timing            ClinicalService                 Double                          N/A
Request.Quantity
Numerator

ClinicalService                 Double                          N/A
Request.Quantity
Denominator

ClinicalService                 Lookup: UnitOfMeasure           N/A
Request.Quantity
NumeratorUnitId

ORC.9 - Date and Time of           ClinicalService                 DateTime                        N/A
Transaction                        Request.DateSigned

ORC.12 - Ordering Provider         ClinicalService                 Lookup: HealthcareProvider,     N/A
Request.RequesterId             Account, Asset

ORC.12 - Order Control Code        • ClinicalService               Lookup: CodeSetBundle           N/a
Reason                                Request
.ReasonCodeId
- MedicationRequest
.
StatusReasonCodeId




## PID - Patient Identification

The Patient Identification (PID) HL7 segment maps to the ContactPointPhone object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for PID map to fields in Salesforce standard objects.

Note: Only the Segments supported by Salesforce are mentioned below.


## Table 42: PID - Salesforce

PID                                Salesforce Field                Type                            Notes
PID.2 - Patient ID (External ID)   Identifier                      Object                          The identifier record for the
patient is associated to the
patient by referencing the
patient’s account record using

<!-- page:1597 -->

AFLS Overview                                                 Store HL7 v2.3 Messages in Salesforce Standard Objects



PID                                Salesforce Field        Type                         Notes
the ParentRecordId field in
Identifier.

PID.3 - Patient ID (Internal ID)   Identifier              Object                       The identifier record for the
patient is associated to the
patient by referencing the
patient’s account record using
the ParentRecordId field in
Identifier.

PID.4 - Alternate Patient ID       Identifier              Object                       The identifier record for the
patient is associated to the
patient by referencing the
patient’s account record using
the ParentRecordId field in
Identifier.

PID.5 - Patient Name               PersonName              Object                       The name information for a
patient is represented as Person
Name records that reference the
patient record using their Person
Name.ParentRecordId field.

PID.7 - Date/Time of Birth         Contact.BirthDate       Date                         Salesforce supports only the
date of birth. The time of birth
isn’t supported.

PID.8 - Sex                        Contact.Gender          Picklist                     N/A

PID.9 - Patient Alias              PersonName              Object                       The name information for a
patient is represented as Person
Name records that reference the
patient record using their Person
Name.ParentRecordId field.

PID.11 - Patient Address           ContactPointAddress     Object                       The address information for a
patient is represented as Contact
PointAddress records that
reference the patient record
using their ContactPointAddress
.ParentId field.

PID.13 - Home Phone                ContactPointPhone       Object                       The telecom information for a
patient is represented as Contact
PointPhone records that
reference the patient record
using their ContactPointPhone
.ParentId field.

PID.14 - Work Phone                ContactPointPhone       Object                       The telecom information for a
patient is represented as Contact

<!-- page:1598 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects



PID                              Salesforce Field                 Type                             Notes
PointPhone records that
reference the patient record
using their ContactPointPhone
.ParentId field.

PID.15 - Primary Langauge        PersonLanguage                   Object                           The name information for a
patient is represented as Person
Name records that reference the
patient record using their Person
Language.IndividualId field.

PID.16 - Marital Status          Contact.MaritalStatus Picklist                                    N/A

PID.25 - Multiple Birth Indicator Contact.SequenceIn              Double                           N/A
MultipleBirth

PID.29 - Patient Death Date and Contact.DeceasedDate DateTime                                      N/A
Time




## PV1 - Patient Visit

The Patient Visit (PV1) HL7 segment maps to the Encounter object, among other objects in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for PV1 map to fields in Salesforce standard objects.

Note: Only the Segments supported by Salesforce are mentioned below.


## Table 43: PV1 - Salesforce

PV1                              Salesforce Field                 Type                             Notes
PV1.2 - Patient Class            ClinicalEncounter.               Picklist                         N/A
Category

PV1.3 - Assigned Patient         ClinicalEncounter                Object                           The facility information for a
Location                         Facility                                                          patient visit is represented as
ClinicalEncounter
Facility records that
reference the encounter record
using their Clinical
EncounterFacility.
ClinicalEncounterId
field.

PV1.4 - Admission Type           ClinicalEncounter.               Lookup: CodeSetBundle            N/A
TypeId

PV1.5 - Preadmit Number          ClinicalEncounter.Pre Lookup: Identifier                          N/A
AdmissionIdentifierId

<!-- page:1599 -->

AFLS Overview                                            Store HL7 v2.3 Messages in Salesforce Standard Objects



PV1                         Salesforce Field          Type                         Notes
PV1.7 - Attending Doctor    ClinicalEncounter         Object                       The participant information for
Provider                                               an encounter is represented as
ClinicalEncounterProvider
records that reference the
encounter record using their
ClinicalEncounterProvider.
ClinicalEncounterId field.

PV1.8 - Referring Doctor    ClinicalEncounter         Object                       The participant information for
Provider                                               an encounter is represented as
ClinicalEncounterProvider
records that reference the
encounter record using their
ClinicalEncounterProvider.
ClinicalEncounterId field.

PV1.9 - Consulting Doctor   ClinicalEncounter         Object                       The participant information for
Provider                                               an encounter is represented as
ClinicalEncounterProvider
records that reference the
encounter record using their
ClinicalEncounterProvider.
ClinicalEncounterId field.

PV1.10 - Hospital Service   ClinicalEncounter         Picklist                     N/A
.ServiceType

PV1.13 - Readmission Indicator ClinicalEncounter.     Lookup: CodeSetBundle        N/A
ReadmissionCodeId

PV1.14 - Admit Source       ClinicalEncounter.        Picklist                     N/A
AdmissionSource

PV1.16 - VIP Indicator      ClinicalEncounter         Picklist                     N/A
.SpecialCourtesy

PV1.17 - Admitting Doctor   ClinicalEncounter         Object                       The participant information for
Provider                                               an encounter is represented as
ClinicalEncounterProvider
records that reference the
encounter record using their
ClinicalEncounterProvider.
ClinicalEncounterId field.

PV1.18 - Patient Type       ClinicalEncounter.        Lookup: CodeSetBundle        N/A
TypeId

PV1.19 - Visit Identifier   ClinicalEncounter         Object                       The identifier information for an
Identifier                                             encounter is represented as
ClinicalEncounterIdentifier
records that reference the

<!-- page:1600 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects



PV1                              Salesforce Field                 Type                             Notes
encounter record using their
ClinicalEncounterIdentifier.
ParentRecordId field.

PV1.22 - Courtesy Code           ClinicalEncounter                Picklist                         N/A
.SpecialCourtesy

PV1.36 - Discharge Disposition   ClinicalEncounter.   Lookup: CodeSetBundle                        N/A
DischargeDisposition
Id

PV1.37 - Discharged to Location ClinicalEncounter.                Lookup: HealthcareFacility       N/A
DestinationFacilityId

ClinicalEncounter.               Lookup: Account                  N/A
Destination
OrganizationId

PV1.38 - Diet Type               ClinicalEncounter.               Picklist                         N/A
DietPreference

PV1.44 - Admit Date/Time         ClinicalEncounter                DateTime                         N/A
.StartDate

PV1.45 - Discharge Date/Time     ClinicalEncounter.End DateTime                                    N/A
Date

PV1.50 - Alternate Visit ID      ClinicalEncounter                Object                           The identifier information for an
Identifier                                                        encounter is represented as
ClinicalEncounterIdentifier
records that reference the
encounter record using their
ClinicalEncounterIdentifier.
ParentRecordId field.




## PV2 - Patient Visit - Additional Information

The Patient Visit - Additional Information (PV2) HL7 segment maps primarily to the ClinicalEncounter object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for PV2 map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 44: PV2 - Salesforce

PV2                              Salesforce Field                 Type                             Notes
PV2.3 - Admit Reason             ClinicalEncounter                Lookup: CodeSetBundle            N/A
Reason.ReasonCodeId

<!-- page:1601 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects



PV2                              Salesforce Field                 Type                             Notes
PV2.7 - Visit User Code          ClinicalAlert.CodeId Lookup: CodeSetBundle                        N/A

PV2.11 - Actual Length of        ClinicalEncounter.               Double                           N/A
Inpatient Stay                   Duration

ClinicalEncounter.               Lookup: UnitOfMeasure            N/A
DurationUnitId

PV2.25 - Patient Status Code     ClinicalEncounter.               Lookup: CodeSetBundle            N/A
PriorityId




## RXA - Pharmacy Administration Segment

The Pharmacy Administration Segment (RXA) HL7 segment maps primarily to the PatientImmunization and Medication
objects in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXA map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 45: RXA - Salesforce

RXA                              Salesforce Field                 Type                             Notes
RXA.3 - Date/Time Start of       PatientImmunization              DateTime                         N/A
Administration                   .VaccinationDate

RXA.5 - Administered Code        • Patient                        Lookup: CodeSetBundle            N/A
Immunization
.VaccineCodeId
- Medication.
MedicationCodeId

RXA.6 - Administered Amount      PatientImmunization. Double                                       N/A
Dose

RXA.7 - Administered Unit        PatientImmunization. Lookup:UnitOfMeasure                         N/A
DoseUnitId

RXA.8 - Administered Dosage      Medication.Medication Lookup: CodeSetBundle                       N/A
Form                             FormId

RXA.10 - Administering Provider CarePerformer                     Object                           The performer information for
an immunization is represented
as CarePerformer records that
reference the Patient
Immunization record using their

<!-- page:1602 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects



RXA                              Salesforce Field                 Type                             Notes
CarePerformer.Parent
RecordId field.

RXA.11 - Administered-at         PatientImmunization              Lookup: Healthcare Facility      N/A
Location                         .FacilityId

RXA.15 - Substance Lot Number PatientImmunization                 String                           N/A
.LotNumber

RXA.16 - Substance Expiration    PatientImmunization              DateTime                         N/A
Date                             .ExpirationDate

RXA.17 - Substance               • Patient                        • String                         N/A
Manufacturer Name                   Immunization                  • Lookup: Account
.Manufacturer
- Medication.
ManufacturerId

RXA.18 - Substance Refusal       PatientImmunization              • Lookup: CodeSetBundle          N/A
Reason                           .StatusReasonCodeId

RXA.20 - Completion Status       PatientImmunization              Picklist                         N/A
.Status




## RXC - Pharmacy Component Order Segment

The Pharmacy Component Order Segment (RXC) HL7 segment maps to the Medication and MedicationRequestobjects in
Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXC map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 46: RXC - Salesforce

RXC                              Salesforce Field                 Type                             Notes
RXC.2 - Component Code           • Medication                     Lookup: CodeSetBundle            N/A
.MedicationCodeId
- MedicationRequest
.MedicationCodeId




## RXE - Pharmacy Encoded Order Segment

The Pharmacy Encoded Order Segment (RXE) HL7 segment maps primarily to the Medication object in Salesforce.

<!-- page:1603 -->

AFLS Overview                                                          Store HL7 v2.3 Messages in Salesforce Standard Objects



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXE map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 47: RXE - Salesforce

RXE                              Salesforce Field                  Type                            Notes
RXE.2 - Give Code                Medication.Medication Lookup: CodeSetBundle                       N/A
CodeId

RXE.2 - Give Dosage Form         Medication.Medication Lookup: CodeSetBundle                       N/A
FormId




## RXR - Pharmacy Route Segment

The Pharmacy Route Segment (RXR) HL7 segment maps primarily to the PatientImmunization and
PatientMedicationDosage objects in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for RXR map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 48: RXR - Salesforce

RXR                              Salesforce Field                  Type                            Notes
RXR.1 - Route                    • Patient                         Lookup: CodeSetBundle           N/A
Immunization
.RouteId
- PatientMedication
Dosage.RouteId

RXR.2 - Site                     • Patient                         Lookup: CodeSetBundle           N/A
Immunization
.SiteId
- PatientMedication
Dosage.SiteId

RXR.4 - Administration Method PatientMedication                    Lookup: CodeSetBundle           N/A
Dosage.MethodId




## HL7 v2.3 Data Types Supported in Salesforce Standard Objects

Salesforce Standard objects support the following data types defined in HL7 v2.3.

<!-- page:1604 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects



## CE - Coded Element

The Coded Element (CE) HL7 segment maps to the CodeSet object in Salesforce.
CX - Extended Composite ID With Check Digit
The Extended Composite ID With Check Digit (CX) HL7 segment maps to the Identifier object in Salesforce.
XPN - Extended Person Name
The Extended Person Name (XPN) HL7 segment maps to the PersonName object in Salesforce.
XTN - Extended Telecommunication Number
The Extended Telecommunication Number (XTN) HL7 segment maps to the ContactPointPhone object in Salesforce.



## CE - Coded Element

The Coded Element (CE) HL7 segment maps to the CodeSet object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for CE map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 49: CE - Salesforce

CE                               Salesforce Field                 Type                            Notes
CE.1 - Identifier                CodeSet.Code                     String                          N/A

CE.2 - Text                      CodeSet.Name                     String                          N/A

CodeSetBundle.Name               String                          N/A

CE.3 - Name of Coding System     CodeSet.SourceSystem String                                      N/A




## CX - Extended Composite ID With Check Digit

The Extended Composite ID With Check Digit (CX) HL7 segment maps to the Identifier object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for CX map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 50: CX - Salesforce

CX                               Salesforce Field                 Type                            Notes
CX.1 - ID                        Identifier.IdValue               String                          N/A

CX.4 - Assigning Authority       Identifier.IssuingAuthority Lookup: Account                      N/A

CX.5 - Identifier Type Code      Identifier.IdType                Lookup: CodeSet, CodeSet        N/A
Bundle

<!-- page:1605 -->

AFLS Overview                                                         Store HL7 v2.3 Messages in Salesforce Standard Objects




## XPN - Extended Person Name

The Extended Person Name (XPN) HL7 segment maps to the PersonName object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for XPN map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.


## Table 51: XPN - Salesforce

XPN                              Salesforce Field                 Type                             Notes
XPN.1 - Family Name              PersonName.LastName              String                           In cases where a person has a
middle name,
PersonName.LastName
is supposed to store a
combination of the middle
name and the last name.

XPN.2 - Given Name               PersonName.FirstName String                                       N/A

XPN.3 - Middle Initial or Name   N/A                              N/A                              This attribute isn’t implemented
in PersonName. In cases
where a person has a middle
name,
PersonName.LastName
is supposed to store a
combination of the middle
name and the last name.

XPN.4 - Suffix                   PersonName.Suffix                String                           N/A

XPN.5 - Prefix                   PersonName.Prefix                String                           N/A

XPN.6 - Degree                   N/A                              N/A                              This attribute isn’t implemented
in PersonName.

XPN.7 - Name Type Code           PersonName.NameUsageType Dynamic Picklist                         While HL7 defines XPN.7 as a
code, Salesforce implements
PersonName.NameUsageType
as a dynamic picklist.




## XTN - Extended Telecommunication Number

The Extended Telecommunication Number (XTN) HL7 segment maps to the ContactPointPhone object in Salesforce.



## HL7 V2.3 - Clinical Data Model Mapping

Here’s how the segments defined by HL7 V2.3 for XTN map to fields in Salesforce standard objects.

Note: Only the segments supported by Salesforce are mentioned below.

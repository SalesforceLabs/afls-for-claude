<!-- guide:dev-guide section:mapping-fhir-v4-0-to-salesforce-standard-objects pages:1483-1587 -->
# Mapping FHIR v4.0 to Salesforce Standard Objects

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects



## Mapping FHIR v4.0 to Salesforce Standard Objects

The Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7) enables healthcare systems to work
seamlessly together enhancing their interoperability. The Clinical Data Model is built to align with HL7’s FHIR R4. However, because
of the way the Salesforce platform works, the Salesforce implementation of FHIR R4 isn’t identical to how it’s defined by HL7. Here’s
how various FHIR resources map to fields in different standard objects in Salesforce.
Store HL7 v2.3 Messages in Salesforce Standard Objects
Like the Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7), HL7 v2.3 is also a database
framework defined by HL7 to facilitate interoperability between electronic healthcare systems. Because the Clinical Data Model was
built to align with FHIR v4.0, it is also compatible with its predecessor HL7 v2.3. However, because of the way the Salesforce platform
works, the Salesforce implementation varies from the HL7 recommendations in certain cases such as the data types that are used.



## Mapping FHIR v4.0 to Salesforce Standard Objects

The Fast Health Interoperability Resources (FHIR) standard defined by Health Level Seven (HL7) enables healthcare systems to work
seamlessly together enhancing their interoperability. The Clinical Data Model is built to align with HL7’s FHIR R4. However, because of
the way the Salesforce platform works, the Salesforce implementation of FHIR R4 isn’t identical to how it’s defined by HL7. Here’s how
various FHIR resources map to fields in different standard objects in Salesforce.



## Considerations for Integration

The Salesforce implementation of FHIR resources differs from the FHIR specification. Built on the core Salesforce platform, the
FHIR-aligned clinical data model comes with field mappings that help you integrate with the FHIR R4 specification.
Address
The Address FHIR resource maps to the ContactPointAddress object in Salesforce.
AdverseEvent
The AdverseEvent FHIR resource maps to the AdverseEvent objects in Salesforce.
AllergyIntolerance
The allergyIntolerance FHIR resource maps to the AllergyIntolerance and PatientHealthReaction
objects in Salesforce.
Annotation
The Annotation FHIR resource maps to the AuthorNote object in Salesforce.
Attachment
The Attachment FHIR resource maps to the Attachment object in Salesforce.
CarePlan
The CarePlan FHIR resource maps to the CarePlan, CarePlanDetail, CarePlanActivity, and Care
PlanActivityDetail objects in Salesforce.
CodeableConcept
The CodeableConcept FHIR resource maps to the CodeSetBundleBundle object in Salesforce.
Coding
The Coding FHIR resource maps to the CodeSet object in Salesforce.
CommunicationRequest
The CommunicationRequest FHIR resource maps to the TrackedCommunication and
TrackedCommunicationDetail objects in Salesforce.

<!-- page:1484 -->

AFLS Overview                                                       Mapping FHIR v4.0 to Salesforce Standard Objects



## Condition

The Condition FHIR resource maps to the HealthCondition object in Salesforce.
ContactPoint
The ContactPoint FHIR resource maps to the ContactPointPhone object in Salesforce.
Device
The Device FHIR resource maps to the Asset and CareRegisteredDevice objects in Salesforce.
DiagnosticReport
The diagnosticReport FHIR resource maps to the DiagnosticSummary object in Salesforce.
DocumentReference
The DocumentReference FHIR resource maps to the DiagnosticSummary and DiagnosticSummaryDetail
objects in Salesforce.
Dosage
The Dosage FHIR resource maps to the PatientMedicationDosage object in Salesforce.
Encounter
The Encounter FHIR resource maps to the ClinicalEncounter, ClinicalEncounterDiagnosis, Clinical
EncounterFacility, ClinicalEncounterIdentifier, ClinicalEncounterProvider, Clinical
EncounterReason, and ClinicalEncounterSvcRequest objects in Salesforce.
EpisodeOfCare
The episodeOfCare FHIR resource maps to the CareEpisode and CareEpisodeDetail objects in Salesforce.
Flag
The Flag FHIR resource maps to the ClinicalAlert object in Salesforce.
Goal
The Goal FHIR resource maps to the GoalAssignment and GoalAssignmentDetail objects in Salesforce.
HumanName
The HumanName FHIR resource maps to the PersonName object in Salesforce.
Identifier
The Identifier FHIR resource maps to the Identifier object in Salesforce.
Immunization
The Immunization FHIR resource maps to the PatientImmunization and PatientHealthReaction objects in
Salesforce.
InformationOrigin
The CRDMetricData FHIR resource maps to the AssessmentQuestionResponse object.
Location
The Location FHIR resource maps to the HealthcareFacility and Location objects in Salesforce.
Medication
The medication FHIR resource maps to the Medication object in Salesforce.
MedicationRequest
The MedicationRequest FHIR resource maps to the MedicationRequest object in Salesforce.
MedicationStatement
The medicationStatement FHIR resource maps to the MedicationStatement object in Salesforce.

<!-- page:1485 -->

AFLS Overview                                                                   Mapping FHIR v4.0 to Salesforce Standard Objects



## Observation

The observation FHIR resource maps to the CareObservation and CareObservationComponent objects in
Salesforce.
Organization
The Organization FHIR resource maps primarily to the Account object in Salesforce.
Patient
The Patient FHIR resource maps to the Account and Contact objects in Salesforce. Patients are modeled using Person
Accounts.
Practitioner
The Practitioner FHIR resource maps to the HealthcareProvider object and person accounts in Salesforce.
PractitionerRole
The practitionerRole FHIR resource maps to the HealthcarePractitionerFacility and
CareProviderFacilitySpecialty objects in Salesforce.
Procedure
The procedure FHIR resource maps to the PatientMedicalProcedure and PatientMedicalProcedureDetail
objects in Salesforce.
RelatedPerson
The relatedPerson FHIR resource maps to the Account and Contact objects in Salesforce, and is connected to the
person that person’s related to using the ContactContactRelation__c object.
ResearchStudy
The ResearchStudy FHIR resource maps to the ResearchStudy objects in Salesforce.
ServiceRequest
The serviceRequest FHIR resource maps to the ClinicalServiceRequest and ClinicalServiceRequest
Detail objects in Salesforce.
Timing
The Timing FHIR resource maps to the ActivityTiming object in Salesforce.


SEE ALSO:
Clinical Data Model



## Considerations for Integration

The Salesforce implementation of FHIR resources differs from the FHIR specification. Built on the

**EDITIONS**
core Salesforce platform, the FHIR-aligned clinical data model comes with field mappings that help
you integrate with the FHIR R4 specification.                                                          Available in: Enterprise and
A middleware integration solution is required to convert messages from HL7 and FHIR-based              Unlimited Editions.
systems to the fields and objects in Salesforce. But before you integrate, here are a few things to
remember:
- The HumanName FHIR resource maps to the PersonName field in Salesforce. The FHIR resource stores names in the FirstName,
MiddleName, and LastName fields, while Salesforce’s clinical data model stores information in the FirstName, LastName,
and FullName fields. LastName can store the family name and any middle name, or any consequent names after the first
name. FullName stores the combination of the patient’s first and last name. The ParentRecordId field relates this name
to the person by referencing the Account or Contact record of the person’s Person Account.

<!-- page:1486 -->

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects


- If a coding or codeable concept in FHIR has a value set with conceptually simple values, then Salesforce uses a picklist. For example,
the FHIR identifier.use resource, which is a code data type, maps to the Identifier.IdUsageType field of the
Identifier object, which is a picklist in Salesforce.
- For resources that FHIR defines as code data types, Salesforce uses a string. For example, the FHIR coding.code resource, which
is code data type, maps to the CodeSet.Code field of the CodeSet object, which is a string in Salesforce.
- For two resources that FHIR defines as URI, Salesforce uses a string. These two resources are the Identifier.SourceSystem
field and the CodeSet.SourceSystem field. The FHIR identifier.system resource, which is a URI, maps to the
Identifier.SourceSystem field of the Identifier object, which is a string in Salesforce. Similarly, the FHIR coding.system
resource, which is a URI, maps to the CodeSet.SourceSystem field of the CodeSet object, which is also a string in Salesforce.
- According to FHIR, CodeableConcept has a zero-to-many coding resource. Because Salesforce doesn’t support zero-to-many
references, Code Set Bundle flattens this zero-to-many reference to 15 zero-to-one Code Set references. The Code Set references
are CodeSet1Id, CodeSet2Id, CodeSet3Id, and so on, until CodeSet15Id.
Salesforce doesn’t have data types for periods, quantities, ranges, and ratios. Instead, resources that need these data types are flattened
to sets of two or three fields in their implementation.
- Period fields are flattened into a set of start date and end date fields. For example, allergyIntolerance.onset.onset
Period in the FHIR specification maps to the AllergyIntolerance.OnsetStartDateTime and Allergy
Intolerance.OnsetEndDateTime fields in Salesforce.
- Quantity fields are flattened into a combination of a numeric quantity and unit fields. The unit field indicates the unit of measure.
The quantity field, which is a double field, represents the numeric value. For example, medicationRequest.dispense
Request.initialFill.quantity is flattened into a set of quantity and unit fields.
- Range fields are flattened into a set of upper and lower limits and unit fields. To reference the unit, we have a Lookup to the
UnitofMeasure object. For example, procedure.performed.performedRange in the FHIR specification maps to the
PatientMedicalProcedure.PerformedAtAgeLowerLimit, PatientMedicalProcedure.PerformedAt
AgeUpperLimit, and PatientMedicalProcedure.PerformedAgeRangeUnit fields in Salesforce.
- Ratio fields are flattened into a set of numerator and denominator fields. If the ratio refers to a quantity, then a unit field is added.
To reference the unit, we have a Lookup to the UnitofMeasure object. For example, serviceRequest.quantity.quantity
Ratio in the FHIR specification maps to the ClinicalServiceRequest.QuantityNumerator, ClinicalService
Request.QuantityDenominator, and ClinicalServiceRequest.QuantityNumeratorUnitId fields in
Salesforce.



## Address

The Address FHIR resource maps to the ContactPointAddress object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Address map to the fields in Salesforce.


## Table 1: Address - Salesforce

Address          Salesforce Field                   Type              Salesforce      Notes
Resource                                                              Cardinality
use              ContactPointAddress                Picklist               0.1        FHIR defines ContactPointAddress.use
.UsageType                                                           as a code set. However, the Salesforce
implementation of ContactPointAddress
.ContentType is a picklist.

type             N/A                                N/A                    N/A        Not supported

<!-- page:1487 -->

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects



Address          Salesforce Field                  Type              Salesforce      Notes
Resource                                                             Cardinality
text             N/A                               N/A                   N/A         Not supported

line             ContactPointAddress               String                 0.1        While FHIR defines address.line as
.Street                                                             zero-many, Salesforce supports only one string
for each record. If you have multiple lines, it’s
recommended to merge them into a single string
before passing it to Salesforce.

city             ContactPointAddress               String                 0.1        N/A
.City

district         N/A                               N/A                   N/A         Not supported

state            ContactPointAddress               String                 0.1        N/A
.State

postal           ContactPointAddress               String                 0.1        N/A
Code             .PostalCode

country          ContactPointAddress               String                 0.1        N/A
.Country

period           ContactPointAddress               Date                   0.1        Because Salesforce doesn’t support a native period
.ActiveFromDate                                                     data type, the Salesforce implementation flattens
address.period to a set of from and to
ContactPointAddress               Date                   0.1
dates.
.ActiveToDate




## AdverseEvent

The AdverseEvent FHIR resource maps to the AdverseEvent objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for adverseEvent map to the fields in Salesforce.


## Table 2: adverseEvent - Salesforce

Adverse          Salesforce Field                  Type              Salesforce      Notes
Event                                                                Cardinality
Resource
status           AdverseEventEntry.                Dynamic Enum           1.1        While FHIR defines adverseEventEntry
Status                                                               .status as a code set, the Salesforce
implementation of AdverseEventEntry
.Status is text.

actuality AdverseEventEntry.                       Dynamic Enum           1.1        While FHIR defines adverseEventEntry
Type                                                                        .actuality as a code set, the Salesforce
implementation of AdverseEventEntry
.type is dynamic enum.

<!-- page:1488 -->

AFLS Overview                                                           Mapping FHIR v4.0 to Salesforce Standard Objects



Adverse        Salesforce Field               Type              Salesforce    Notes
Event                                                           Cardinality
Resource
category       AdverseEventEntry              Picklist             0.M        While FHIR defines adverseEventEntry
.Category                      (Multi-Select)                  .category as a code set bundle, the
Salesforce implementation of AdverseEvent
Entry.Category is picklist (Multi-Select).

code           AdverseEventEntry              Lookup: Code          0.1       While FHIR defines adverseEventEntry
.EventCode                     Set, Code Set                   .eventCode as a code set bundle, the
Bundle                          Salesforce implementation of AdverseEvent
Entry.EventCode is a lookup.

subject        AdverseEventEntry              Polymorphic           1.1       N/A
.Subject                       Lookup: Care
Program
Enrollee,
Account, Team
Member, Care
ProgramGroup,
Team, Health
CareProvider

encounter AdverseEventEntry                   Lookup:               0.1       N/A
.ClinicalEncounter                  Clinical
Encounter

cause          AdverseEventEntry.             Date/Time             0.1       Since Salesforce doesn’t natively support the
CauseStartDateTime                                             period data type, adverseEvent.cause is
flattened into a set of cause start date time and
AdverseEventEntry              Date/Time             0.1
cause end date time fields.
.CauseEndDateTime

effect         AdverseEventEntry              Date/Time             0.1       Since Salesforce doesn’t natively support the
.EventStartDateTime                                            period data type, adverseEvent.effect
is flattened into a set of event start date time and
AdverseEventEntry              Date/Time             0.1
event end date time fields.
.EventEndDateTime

detected       AdverseEventEntry              Date/Time             0.1       N/A
.DetectedDate

recordedDate   AdverseEventEntry.Recorded     Date/Time             0.1       N/A
Date

resultingEffect AdverseEventResultingEffect   Lookup: Health        1.1       While FHIR defines adverseEvent
.Effect                       Condition, Care                 ResultingEffect.resultingEffect
Observation                     as a zero-to-many resource, the Salesforce
implementation of AdverseEvent
ResultingEffect.Effect is
one-to-many.

<!-- page:1489 -->

AFLS Overview                                                          Mapping FHIR v4.0 to Salesforce Standard Objects



Adverse        Salesforce Field             Type                Salesforce    Notes
Event                                                           Cardinality
Resource
location       AdverseEventEntry.Location   Lookup:                 0.1       N/A
Healthcare
Facility, Care
Program Site

seriousness AdverseEventEntry.Severity      Picklist                0.1       While FHIR defines adverseEventEntry
.Severity as a code set bundle, the
Salesforce implementation of AdverseEvent
Entry.Severity is picklist.

outcome        AdverseEventOutcome          Lookup: Code            1.1       While FHIR defines adverseEvent
.OutcomeCode                 Set, Code Set                     Outcome.outcome as a CodeSetBundle, the
Bundle                            Salesforce implementation of AdverseEvent
Outcome.OutcomeCode is a lookup.

recorder       AdverseEventEntry.RecordedBy Lookup:                 1.1       While FHIR defines adverseEventOutcome
Account Care                      .recorder as a zero-to-many resource, the
Program                           Salesforce implementation of AdverseEvent
Enrollee                          Outcome.RecordedBy is one-to-one.

participant    AdverseEventParty.Role       Dynamic Enum            0.1       N/A
.function

participant    AdverseEventParty.Party      Lookup:                 1.1       N/A
.actor                                      Account,
Contact, Care
Program
Enrollee,
Healthcare
Facility, Care
Registered
Device,
Healthcare
Practitioner
Facility

expectedIn    AdverseEventEntry.Expected    Boolean                 0.1       N/A
ResearchStudy

suspect   AdverseEventCause.                Lookup:                 1.1       While FHIR defines adverseEventCause
Entity    Cause                             Patient                           .suspectEntity.instance as a Code
.instance                                   Immunization,                     SetBundle, the Salesforce implementation of
Medication,                       AdverseEventCause.Cause is a lookup.
Medication
Statement,
Research
Study, Patient
Medical

<!-- page:1490 -->

AFLS Overview                                                          Mapping FHIR v4.0 to Salesforce Standard Objects



Adverse          Salesforce Field             Type              Salesforce    Notes
Event                                                           Cardinality
Resource
Procedure,
Care
Registered
Device

suspectEntity.   AdverseEventCause.Assessment Lookup: Code          0.1       N/A
causality        MethodCode                   Set, CodeSet
.assessment                                   Bundle
Method

suspectEntity. AdverseEventCause.Probability Dynamic Enum           0.1       N/A
causality.entity
Relatedness

suspect   AdverseEventCause.AuthoredBy Polymorphic                  0.1       N/A
Entity.                                Lookup:
causality                              Account,
.author                                Contact, User,
Healthcare
Facility,
Healthcare
Practitioner
Facility,
ResearchStudy
Participant

contributing     AdverseEventContributing     Polymorphic          1.M        While FHIR defines adverseEvent
Factor.item      Factor.ContributingFactor    Lookup: Health                  ContributingFactor.contributing
Condition, Care                 Factor.item as a zero-to-many resource,
Observation,                    the Salesforce implementation of Adverse
Allergy                         EventContributingFactor.
Intolerance,                    ContributingFactor is one-to-many.
Patient
Immunization,
CareRegistered
Device,
Medication,
Medication
Statement,
Diagnostic
Summary,
PatientMedical
Procedure,
Medication
Administration

<!-- page:1491 -->

AFLS Overview                                                                   Mapping FHIR v4.0 to Salesforce Standard Objects



Adverse          Salesforce Field                  Type               Salesforce      Notes
Event                                                                 Cardinality
Resource
preventive       AdverseEventAction.ActionCode Polymorphic                 0.1        While FHIR defines adverseEventAction.
Action.item                                    Lookup: Code                           preventiveAction.item as a one-to-one
Set, CodeSet                           resource, the Salesforce implementation of
Bundle                                 AdverseEventAction.ActionCode is
zero-to-one.

mitigating       AdverseEventAction.ActionCode Polymorphic                 0.1        While FHIR defines adverseEventAction.
Action.item                                    Lookup: Code                           mitigatingAction.item as a one-to-one
Set, CodeSet                           resource, the Salesforce implementation of
Bundle                                 AdverseEventAction.ActionCode is
zero-to-one.

supportingInfo AdverseEventSupporting              Polymorphic             1.1        N/A
.item          Information.Supporting              Lookup: Health
Information                         Condition, Care
Observation,
Allergy
Intolerance,
Patient
Immunization,
Diagnostic
Summary,
Medication,
Medication
Statement




## AllergyIntolerance

The allergyIntolerance FHIR resource maps to the AllergyIntolerance and PatientHealthReaction objects
in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for allergyIntolerance map to the fields in Salesforce.


## Table 3: allergyIntolerance - Salesforce

Allergy          Salesforce Field                  Type               Salesforce      Notes
Intolerance                                                           Cardinality
Resource
identifier Identifier                              Object                 0.M         The identifier information for an allergy
intolerance is represented as Identifier
records that reference the AllergyIntolerance
record using their Identifier.Parent
RecordId field.

<!-- page:1492 -->

AFLS Overview                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




## Allergy        Salesforce Field          Type              Salesforce    Notes

Intolerance                                                Cardinality
Resource
clinical       AllergyIntolerance        Picklist              0.1       While FHIR defines allergyIntolerance
Status         .Status                                                   .clinicalStatus as a code set bundle, the
Salesforce implementation of Allergy
Intolerance.Status is picklist.

verificationStatus AllergyIntolerance    Picklist              0.1       While FHIR defines allergyIntolerance
.VerificationStatus                                   .verificationStatus as a code set
bundle, the Salesforce implementation of
AllergyIntolerance.Verification
Status is picklist.

type           AllergyIntolerance        Picklist              0.1       While FHIR defines allergyIntolerance
.Type                                                     .category as a code set bundle, the
Salesforce implementation of Allergy
Intolerance.Categories is a picklist.

category       AllergyIntolerance        Multi-Select          0.M       While FHIR defines allergyIntolerance
.Category                 Picklist                        .category as a code set bundle, the
Salesforce implementation of Allergy
Intolerance.Category is a picklist.

criticality AllergyIntolerance           Picklist              0.1       While FHIR defines allergyIntolerance
.Severity                                                    .criticality as a code set bundle, the
Salesforce implementation of Allergy
Intolerance.Severity is picklist.


## code           AllergyIntolerance        Lookup:               1.1       N/A

.CodeId                   CodeSetBundle


## patient        AllergyIntolerance        Master-Detail         1.1       N/A

.PatientId                Reference:
Account


## encounter AllergyIntolerance   Lookup:                         0.1       N/A

.ClinicalEncounterId Clinical
Encounter

onset          AllergyIntolerance        DateTime              0.1       AllergyIntolerance.OnsetStart
.onset         .OnsetStartDateTime                                       DateTime is used as both the equivalent of
DateTime                                                                 allergyIntolerance.onset.onset
DateTime and the start date of allergy
Intolerance.onset.onsetPeriod

onset     N/A                            N/A                   N/A       Not supported
.onsetAge

onset          AllergyIntolerance        DateTime              0.1       Since Salesforce doesn’t natively support the
.onset         .OnsetStartDateTime                                       period data type, allergyIntolerance
Period                                                                   .onset.onsetPeriod is flattened into a

<!-- page:1493 -->

AFLS Overview                                                  Mapping FHIR v4.0 to Salesforce Standard Objects




## Allergy        Salesforce Field       Type             Salesforce    Notes

Intolerance                                            Cardinality
Resource
AllergyIntolerance     DateTime             0.1       set of start date and end date fields. The start date
.OnsetEndDateTime                                     field is also used as the equivalent of allergy
Intolerance.onset.onsetDateTime

onset          N/A                    N/A                  N/A       Not supported
.onset
Range

onset          N/A                    N/A                  N/A       Not supported
.onset
String


## recorded       AllergyIntolerance     DateTime             0.1       N/A

Date           .RecordCreationDate
Time


## recorder       AllergyIntolerance     Polymorphic          0.1       N/A

.RecordCreatorId       Lookup:
Account,
Healthcare
.Provider


## asserter       AllergyIntolerance     Polymorphic          0.1       N/A

.AssertionSourceId     Lookup:
Account,
Healthcare
.Provider


## last       AllergyIntolerance         DateTime             0.1       N/A

Occurrence .LastOccurenceDate
Time

note           N/A                    N/A                  N/A       Not supported

reaction       PatientHealthReaction Object                0.M       The reaction information for an allergy intolerance
is represented as PatientHealth
Reaction records that reference the Allergy
Intolerance record using their Patient
HealthReaction.ParentId field.


## reaction   PatientHealthReaction Lookup:                   0.1       N/A

.substance .CausativeSubstanceId CodeSet
Bundle

reaction       PatientHealthReaction Lookup:               0.1       While FHIR defines allergyIntolerance
.manifestation .ManifestedSymptomId CodeSet                           .reaction.manifestation as a
Bundle                          one-to-many resource, the Salesforce
implementation of PatientHealth

<!-- page:1494 -->

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects



Allergy          Salesforce Field                  Type              Salesforce        Notes
Intolerance                                                          Cardinality
Resource
Reaction.ManifestedSymptomId is
zero-to-one.

reaction     PatientHealthReaction String                                 0.1          N/A
.description .Details

reaction         PatientHealthReaction DateTime                           0.1          N/A
.onset           .ReactionDateTime

reaction  PatientHealthReaction Picklist                                  0.1          While FHIR defines allergyIntolerance
.severity .Severity                                                                    .reaction.severity as a code set bundle,
the Salesforce implementation of Patient
HealthReaction.Severity is a picklist.

reaction  PatientHealthReaction Lookup:                                   0.1          N/A
.exposure .ExposureRouteId      CodeSet
Route                           Bundle

reaction         N/A                               N/A                   N/A           Not supported
.note



SEE ALSO:
AllergyIntolerance



## Annotation

The Annotation FHIR resource maps to the AuthorNote object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Annotation map to the fields in Salesforce.


## Table 4: Annotation - Salesforce

Annotation       Salesforce Field                  Type              Salesforce        Notes
Resource                                                             Cardinality
author    AuthorNote.AuthorId                      Lookup:                0.1          N/A
.author                                            Account,
Reference                                          Contact,
Healthcare
Provider

author           AuthorNote.AuthorName String                             0.1          N/A
.author
String

<!-- page:1495 -->

AFLS Overview                                                                   Mapping FHIR v4.0 to Salesforce Standard Objects



Annotation       Salesforce Field                  Type              Salesforce        Notes
Resource                                                             Cardinality
time             AuthorNote.Authored               DateTime               0.1          N/A
DateTime

text             ActivityTiming.Note               Double                 0.1          N/A
Text




## Attachment

The Attachment FHIR resource maps to the Attachment object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Attachment map to the fields in Salesforce.


## Table 5: Attachment - Salesforce

Attachment       Salesforce Field                  Type              Salesforce        Notes
Resource                                                             Cardinality
content          Attachment.Content                String                 0.1          FHIR defines Attachment.use as a code set.
Type             Type                                                                  However, the Salesforce implementation of
Attachment.ContentType is a string.

language         DiagnosticSummary                 String                 0.1          FHIR defines Attachment.use as a code set.
.AttachmentLanguage                                                   However, the Salesforce implementation of
DiagnosticSummary.Attachment
Language is a string.

data             Attachment.Body                   Base64                 0.1          N/A

url              N/A                               N/A                    N/A          Not supported

size             Attachment.BodyLength Double                             0.1          N/A

hash             N/A                               N/A                    N/A          Not supported

title            Attachment.Name                   String                 0.1          N/A

Creation         Attachment.Created                DateTime               0.1          N/A
Date




## CarePlan

The CarePlan FHIR resource maps to the CarePlan, CarePlanDetail, CarePlanActivity, and Care
PlanActivityDetail objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for CarePlan map to the fields in Salesforce.

<!-- page:1496 -->

AFLS Overview                                                          Mapping FHIR v4.0 to Salesforce Standard Objects



## Table 6: CarePlan - Salesforce

CarePlan       Salesforce Field             Type            Salesforce       Notes
Resource                                                    Cardinality
identifier Identifier                       Object               0.M         The identifier information for a care plan is
represented as Identifier records that
reference the CarePlan record using their
Identifier.ParentRecordId field.

instantiates N/A                            N/A                 N/A          Not supported
Canonical

instantiates N/A                            N/A                 N/A          Not supported
Uri

basedOn        CarePlanDetail.Detail Picklist                    0.M         Select Based On as the picklist value in detailType.
Type                                                          .

CarePlanDetail.Detail Lookup:                                 Select Care Plan as the domain set in
RecordId              CarePlan                                DetailRecordId.

replaces       CarePlanDetail.Detail Picklist                    0.M         Select Replaced Care Plan as the picklist value in
Type                                                          detailType. .

CarePlanDetail.Detail Lookup:                                 Select Care Plan as the domain set in
RecordId              CarePlan                                DetailRecordId.

partOf         CarePlanDetail.Detail Picklist                    0.M         Select Part Of as the picklist value in detailType. .
Type

CarePlanDetail.Detail Lookup:                                 Select Care Plan as the domain set in
RecordId              CarePlan                                DetailRecordId.

status         CarePlan.Status              Picklist             1.1         While FHIR defines this field as a code, the
Salesforce implementation is a picklist.

intent         CarePlan.AuthorizationType   Picklist             0.1         While FHIR defines this field as a one-to-one code,
the salesforce implementation is a zero-to-one
picklist.

category       CarePlanDetail.Detail Picklist                    0.M         Select Category as the picklist value in detailType.
Type                                                          .

CarePlanDetail.Detail Lookup:
CodeId                CodeSet
Bundle,
CodeSet

title          CarePlan.Name                Text                 1.1         While FHIR defines this as a zero-to-one value, the
Salesforce implementation is one-to-one..

description CarePlan.Description Text Area                       0.1         N/A

subject        CarePlan                     Lookup:              1.1         The Salesforce implementation doesn’t support
.ParticipantId               Account                          Groups.

<!-- page:1497 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## CarePlan       Salesforce Field       Type           Salesforce    Notes

Resource                                             Cardinality
encounter CarePlan.Clinical           Lookup:            0.1       N/A
EncounterId                 Clinical
Encounter

period         CarePlan.CreatedDate DateTime             0.1       While FHIR defines this field as a Period field, the
Salesforce implementation uses a pair of DateTime
CarePlan.EndDate       DateTime           0.1
fields.

created        CarePlan.StartDate     Date               0.1       N/A

author         CarePlan.AuthorId      Lookup:            0.1       The Salesforce implementation doesn’t support
Account,                     careTeam calues for this field.
Healthcare
Provider,
Healthcare
Practitioner
Facility,
Care
Registered
Device

contributor CarePlanDetail.Detail Picklist              0.M        Select Part Of as the picklist value in detailType. .
Type

CarePlanDetail.Detail Lookup:                       Select an appropriate domain set for
RecordId              Account,                      DetailRecordId.
Healthcare
Provider,
Healthcare
Practitioner
Facility,
Care
Registered
Device

careTeam       CaseTeam               Object            0.M        Create case teams for the Case record that’s the
parent record of the CarePlan record.

status         CarePlan.statusReason Text                0.1       N/A
Reason

addresses CarePlanDetail.Detail Picklist                0.M        Select Addressed Item as the picklist value in
Type                                                     detailType.

CarePlanDetail.Detail Lookup:                       Select HealthCondition as the domain set for
RecordId              Health                        DetailRecordId.
Condition

supporting CarePlanDetail.Detail Picklist               0.M        Select Supporting Information as the picklist value
Info       Type                                                    in detailType.

<!-- page:1498 -->

AFLS Overview                                                               Mapping FHIR v4.0 to Salesforce Standard Objects



CarePlan       Salesforce Field              Type                   Salesforce    Notes
Resource                                                            Cardinality
CarePlanDetail.Detail Lookup: Care                                 Select an appropriate domain set for
RecordId              Plan,Account,Healthcare                      DetailRecordId.
Provider,Healthcare
Practitioner
Facility,Care
Registered
Device,Health
Condition

goal           GoalAssignment                Object                    0.M        Associate the GoalAssignment record to its parent
care plan using the ParentRecordId field.

activity       CarePlanActivity              Object                    0.M        The activity subset of a carePlan FHIR resource is
represented in Salesforce as CarePlanActivity
records that reference the care plan as its parent.

activity       CarePlanActivity              Picklist                  0.M        Select Outcome Code as the picklist value in
.outcome       Detail.DetailType                                                  detailType. .
Codeable
CarePlanActivity              Lookup:                              N/A
Concept
Detail.DetailCodeId           CodeSet
Bundle,
CodeSet

activity.

activity  CarePlanActivity      Picklist                               0.M        Select Outcome Code as the picklist value in detail
.outcome  Detail.DetailType                                                       Type. .
Reference
CarePlanActivity      Lookup:                                           Select an appropriate domain set for Detail
Detail.DetailRecordId Clinical                                          RecordId.
Encounter,Patient
Medical
Procedure,Health
Condition,Care
Observation,Diagnostic
Summary,Account,Healthcare
Provider,Healthcare
Practitioner
Facility,Care
Registered
Device

activity  AuthorNote                         Object                     0.        Represented as AuthorNote records that reference
.progress                                                                         CarePlanActivity records as their parent.

activity   CarePlanActivity                  Lookup:                    0.1       The Salesforce implementation of this field doesn’t
.reference .ReferenceRecordId                Medication                           support Appointment, CommunicationRequest,
Statement,Medication                 DeviceRequest, NutritionOrder, VisionPrescription,
Request,Clinical                     and RequestGroup.

<!-- page:1499 -->

AFLS Overview                                                    Mapping FHIR v4.0 to Salesforce Standard Objects




## CarePlan       Salesforce Field          Type            Salesforce    Notes

Resource                                                 Cardinality
Service
Request

CarePlanActivity          Lookup: Task        0.1       The Salesforce implementation implements the
.ReferenceTaskId                                        Task data type for this field as a separate field on
the object.

activity       CarePlanActivity          Picklist            0.1       While FHIR defines this field as a code, the
.detail        .ActivityType                                           Salesforce implementation is a code.
.kind

activity      N/A                        N/A                N/A        Not supported
.detail
.instantiates
Canonical

activity      N/A                        N/A                N/A        Not supported
.detail
.instantiates
Uri


## activity       CarePlanActivity          Lookup:             0.1       N/A

.detail        .ActivityCodeId           CodeSet
.code                                    Bundle,
CodeSet

activity       CarePlanActivity          Picklist           0.M        Select Reason Code as the picklist value in
.detail        Detail.DetailType                                       detailType. .
.reason
CarePlanActivity          Lookup:                       N/A
Code
Detail.DetailCodeId       CodeSet
Bundle,
CodeSet

activity  CarePlanActivity      Picklist                    0.M        Select Reason Code as the picklist value in detail
.detail   Detail.DetailType                                            Type. .
.reason
CarePlanActivity      Lookup:                                Select an appropriate domain set for Detail
Reference
Detail.DetailRecordId Health                                 RecordId.
Condition,Care
Observation,Diagnostic
Summary

activity       GoalAssignment            Object             0.M        Associate the GoalAssignment record to its parent
.detail                                                                care plan activity using the ParentRecordId field.
.goal

activity       CarePlanActivity          Picklist            0.1       While FHIR defines this field as a one-to-one code,
.detail        .Status                                                 the Salesforce implementation is a zero-to-one
.status                                                                picklist.

<!-- page:1500 -->

AFLS Overview                                                  Mapping FHIR v4.0 to Salesforce Standard Objects




## CarePlan       Salesforce Field        Type            Salesforce    Notes

Resource                                               Cardinality
activity       CarePlanActivity        Lookup:             0.1       N/A
.detail        .StatusReasonCodeId     CodeSet
.status                                Bundle,
Reason                                 CodeSet

activity       CarePlanActivity        Picklist            0.1       The Salesforce implementation is a picklist with
.detail        .ProhibitedActivity                                   the values Default, True, and False.
.doNot
Perform


## activity   CarePlanActivity            Lookup:             0.1       N/A

.detail    .ActivityTimingId           Activity
.scheduled                             Timing
Timing

activity   CarePlanActivity      DateTime                  0.1       The Salesforce implementation uses a pair of
.detail    .ScheduledPeriodStart                                     DateTime fields instead of a period field.
.scheduled DateTime
Period
CarePlanActivity      DateTime                  0.1
.ScheduledPeriodEnd
DateTime


## activity   CarePlanActivity     Text                       0.1       N/A

.detail    .ScheduleDescription
.scheduled
String


## activity  CarePlanActivity             Lookup:             0.1       N/A

.detail   .LocationId                  Location,
.location                              Healthcare
Facility

activity   CarePlanActivity      Picklist                 0.M        Select Reason Code as the picklist value in detail
.detail    Detail.DetailType                                         Type. .
.performer
CarePlanActivity      Lookup:                             Select an appropriate domain set for Detail
Detail.DetailRecordId Account,Healthcare                  RecordId. The Salesforce implementation doesn’t
Provider,Healthcare                 support careTeam and healthService values for
Practitioner                        this field.
Facility,Care
Registered
Device


## activity       CarePlanActivity     Lookup:                0.1       N/A

.detail        .AdministeredProduct CodeSet
.product       CodeId               Bundle,
Codeable                            CodeSet
Concept

<!-- page:1501 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



CarePlan        Salesforce Field                  Type             Salesforce      Notes
Resource                                                           Cardinality
activity  CarePlanActivity     Lookup:                                  0.1        N/A
.detail   .AdministeredProduct Medication
.product  Id
Reference

activity        CarePlanActivity                  Number                0.1        Salesforce implements the quantity data type as
.detail         .DailyDoseQuantity                                                 a pair of number and unit fields.
.daily
CarePlanActivity                  Lookup: Unit          0.1
Amount
.DailyDoseUnitId                  OfMeasure

activity  CarePlanActivity                        Number                0.1        Salesforce implements the quantity data type as
.detail   .SuppliedQuantity                                                        a pair of number and unit fields.
.quantity
CarePlanActivity                        Lookup: Unit          0.1
.SuppliedQuantity                       OfMeasure
UnitId

activity     CarePlanActivity                     Text                  0.1        N/A
.detail      .Description
.description

note            AuthorNote                        Object                 0.        Represented as AuthorNote records that reference
CarePlan records as their parent.




## CodeableConcept

The CodeableConcept FHIR resource maps to the CodeSetBundleBundle object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for CodeableConcept map to the fields in Salesforce.


## Table 7: CodeableConcept - Salesforce

Codeable        Salesforce Field                  Type             Salesforce      Notes
Concept                                                            Cardinality
Resource
coding          CodeSet                           Lookup:               0.1        FHIR defines CodeableConcept.coding
Bundle.CodeSet1Id,                CodeSet                          as a zero-to-many reference. However, the
CodeSet                                                            Salesforce implementation has flattened this into
Bundle.CodeSet2Id,                                                 fifteen zero-to-one references to CodeSet
CodeSet
Bundle.CodeSet3Id,…
and CodeSet
Bundle.CodeSet15Id

<!-- page:1502 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Codeable         Salesforce Field                  Type              Salesforce    Notes
Concept                                                              Cardinality
Resource
text             CodeSetBundle.Name                String                 0.1      N/A



SEE ALSO:
CodeSetBundle



## Coding

The Coding FHIR resource maps to the CodeSet object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Coding map to the fields in Salesforce.


## Table 8: Coding - Salesforce

Coding           Salesforce Field                  Type              Salesforce    Notes
Resource                                                             Cardinality
system           CodeSet.SourceSystem String                              0.1      FHIR defines coding.system as a URI.
However, the Salesforce implementation of
CodeSet.SourceSystem is a string
because Salesforce doesn’t support the URI data
type.

version          CodeSet.SystemVersion String                             0.1      N/A

code             CodeSet.Code                      String                 0.1      FHIR defines coding.code as a code data
type. However, the Salesforce implementation of
CodeSet.Code is a string because Salesforce
doesn’t support the Code data type.

display          CodeSet.Name                      String                 0.1      N/A

user             CodeSet.IsPrimary                 Boolean                0.1      N/A
Selected



SEE ALSO:
CodeSet



## CommunicationRequest

The CommunicationRequest FHIR resource maps to the TrackedCommunication and
TrackedCommunicationDetail objects in Salesforce.

<!-- page:1503 -->

AFLS Overview                                                               Mapping FHIR v4.0 to Salesforce Standard Objects




## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for CommunicationRequest map to the fields in Salesforce.


## Table 9: CommunicationRequest - Salesforce

communicationrequest Salesforce Field            Type             Salesforce      Notes
Resource                                                          Cardinality
identifier Identifier                            Object                0.M        The identifier information for a communication
request is represented as Identifier records
that reference the TrackedCommunication record
using their Identifier.Parent
RecordId field.

basedOn          N/A                             N/A                   N/A        Not supported

status           TrackedCommunication.Status Picklist                  1.1        While FHIR defines
CommunicationRequest.status as a
code set, the Salesforce implementation of
TrackedCommunication.Status is a
picklist.

statusReason TrackedCommunication.StatusReason Picklist                0.1        While FHIR defines
CommunicationRequest
.statusReason as a code set bundle, the
Salesforce implementation of
TrackedCommunication.StatusReason
is a picklist.

groupIdentifier N/A                              N/A                   N/A        Not supported

intent           N/A                             N/A                   N/A        Not supported

priority         TrackedCommunication.Priority Picklist                0.1        While FHIR defines
CommunicationRequest.priority as
a code set, the Salesforce implementation of
TrackedCommunication.Priority is
a picklist.

subject          TrackedCommunication Lookup:                          0.1        N/A
.Subject             Account,
Contact, User

occurrence TrackedCommunication. Date/Time                             0.1        Since Salesforce doesn’t natively support the
OccurrenceStartDateTime                                                period data type,
CommunicationRequest.occurrence
TrackedCommunication. Date/Time                       0.1
is flattened into a set of occurrence start date time
OccurrenceEndDateTime
and occurrence end date time fields.

authoredOn TrackedCommunication Date/Time                              0.1        N/A
.CreatedDate

doNotPerform N/A                                 N/A                   N/A        Not supported

encounter N/A                                    N/A                   N/A        Not supported

<!-- page:1504 -->

AFLS Overview                                                                   Mapping FHIR v4.0 to Salesforce Standard Objects



communicationrequest Salesforce Field              Type              Salesforce       Notes
Resource                                                             Cardinality
requester TrackedCommunication Lookup:                                    0.1         N/A
.RequesterReferenceId Account,
Contact, User

informationProvider TrackedCommunication Lookup:                          0.M         N/A
.CommunicatorReferenceId Account,
Contact, User

replaces         TrackedCommunication Picklist                            0.M         Select Replaced Item as the picklist value in
Detail.DetailType                                                    DetailType.

category         TrackedCommunication Picklist                            0.M         Select Category as the picklist value in DetailType.
Detail.DetailType

medium           TrackedCommunication Picklist                            0.M         Select Medium as the picklist value in DetailType.
Detail.DetailType

about            TrackedCommunication Picklist                            0.M         Select About as the picklist value in DetailType.
Detail.DetailType

recipient TrackedCommunication Picklist                                   0.M         Select Recipient as the picklist value in DetailType.
Detail.DetailType

reason           TrackedCommunication Picklist                            0.M         Select Reason Code as the picklist value in
Detail.DetailType                                                    DetailType.

note             TrackedCommunication Picklist                            0.M         Select Note as the picklist value in DetailType.
Detail.DetailType

payload.content TrackedCommunication Picklist                             1.1         Select Payload as the picklist value in DetailType.
Detail.DetailType




## Condition

The Condition FHIR resource maps to the HealthCondition object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Condition map to the fields in Salesforce.


## Table 10: Condition - Salesforce

Condition        Salesforce Field                  Type              Salesforce       Notes
Resource                                                             Cardinality
identifier Identifier                              Object                 0.M         The identifier information for a health condition
is represented as Identifier records that
reference the health condition record using their
Identifier.ParentRecordId field.

<!-- page:1505 -->

AFLS Overview                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




## Condition      Salesforce Field        Type               Salesforce    Notes

Resource                                                  Cardinality
clinical       HealthCondition         Picklist               0.1       While FHIR defines Condition.clinical
Status         .ConditionStatus                                          Status as a code set bundle, the Salesforce
implementation of HealthCondition
.ConditionStatus is picklist.

verification HealthCondition           Picklist               0.1       While FHIR defines condition
Status       .DiagnosticStatus                                          .verificationStatus as a code set
bundle, the Salesforce implementation of
HealthCondition.Diagnostic
Status is picklist.

category       HealthCondition.Type Picklist                  0.1       While FHIR defines Condition.category
as a zero-to-many code set bundle, the Salesforce
implementation of HealthCondition
.Categories is a zero-to-one picklist.

severity       HealthCondition         Picklist               0.1       While FHIR defines condition.severity
.Severity                                                as a code set bundle, the Salesforce
implementation of HealthCondition
.Severity is picklist.

code           HealthCondition         Lookup:                1.1       While FHIR defines condition.code as a
.ConditionCodeId        CodeSet                          zero-to-one resource, the Salesforce
Bundle                           implementation is a one-to-one field.

bodySite       HealthCondition         Lookup:                0.1       Use this field if only one bodySite value is required
.SiteId                 CodeSet                          for the condition.
Bundle

HealthConditionDetail Object                   0.M       Use the child object to specify BodySite values for
a condition if multiple bodySite values are
reuqired.

subject        HealthCondition         Master-Detail          1.1       The Salesforce implementation of Condition
.PatientId              Reference:                       .subject doesn’t support groups.
Account


## encounter HealthCondition      Lookup:                        0.1       N/A

.ClinicalEncounterId Encounter

onset          HealthCondition.Onset DateTime                 0.1       HealthCondition.OnsetStartDate
.onset         StartDateTime                                            Time is used as both the equivalent of
DateTime                                                                condition.onset.onsetDateTime
and the start date of condition.onset
.onsetPeriod

onset     N/A                          N/A                    N/A       Not supported
.onsetAge

<!-- page:1506 -->

AFLS Overview                                                  Mapping FHIR v4.0 to Salesforce Standard Objects




## Condition      Salesforce Field       Type             Salesforce    Notes

Resource                                               Cardinality
onset          HealthCondition.Onset DateTime              0.1       Since Salesforce doesn’t natively support the
.onset         StartDateTime                                         period data type, condition.onset
Period                                                               .onsetPeriod is flattened into a set of start
HealthCondition.Onset DateTime              0.1
date and end date fields. The start date field is
EndDateTime
also used as the equivalent of condition
.onset.onsetDateTime

onset          N/A                    N/A                  N/A       Not supported
.onset
Range

onset          N/A                    N/A                  N/A       Not supported
.onset
String

abatement HealthCondition             DateTime             0.1       HealthCondition.AbatementStart
.abatement .AbatementStartDate                                       DateTime is used as both the equivalent of
DateTime   Time                                                      condition.abatement.abatement
DateTime and the start date of condition
.abatement.abatementPeriod

abatement N/A                         N/A                  N/A       Not supported
.abatement
Age

abatement HealthCondition             DateTime             0.1       Since Salesforce doesn’t natively support the
.abatement .AbatementStartDate                                       period data type, condition.abatement
Period     Time                                                      .abatementPeriod is flattened into a set
of start date and end date fields. The start date
HealthCondition       DateTime              0.1
field is also used as the equivalent of
.AbatementEndDateTime
condition.abatement.abatement
DateTime

abatement N/A                         N/A                  N/A       Not supported
.abatement
Range

abatement N/A                         N/A                  N/A       Not supported
.abatement
String


## recorded       HealthCondition        DateTime             0.1       N/A

Date           .RecordCreationDate
Time


## recorder       HealthCondition        Polymorphic          0.1       N/A

.RecordCreatorId       Lookup:
Account,
Healthcare
Provider

<!-- page:1507 -->

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects



Condition        Salesforce Field                  Type              Salesforce      Notes
Resource                                                             Cardinality
asserter         HealthCondition                   Polymorphic            0.1        N/A
.AssertionSourceId                Lookup:
Account,
Healthcare
Provider

stage            HealthCondition                   Lookup:                0.1        The child resources of condition.stage is
.StageId                          CodeSet                           combined into a single code set bundle reference
Bundle                            field. While FHIR defines condition.stage
as a zero-to-many resource, the Salesforce
implementation is a zero-to-one field.

evidence         N/A                               N/A                   N/A         Not supported

note             AuthorNote                        Object                 0.M        The notes for a health condition is represented as
AuthorNote records that reference the health
condition record using their AuthorNote
.ParentRecordId field.



SEE ALSO:
HealthCondition



## ContactPoint

The ContactPoint FHIR resource maps to the ContactPointPhone object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for ContactPoint map to the fields in Salesforce.


## Table 11: ContactPoint - Salesforce

Contact          Salesforce Field                  Type              Salesforce      Notes
Point                                                                Cardinality
Resource
system           ContactPointPhone                 Picklist               0.1        While FHIR defines contactPoint.system
.PhoneType                                                          as a reference to a code set bundle, the Salesforce
implementation is a picklist.

value            ContactPointPhone                 Phone                  0.1        While FHIR defines contactPoint.value
.TelephoneNumber                                                    as a string, ContactPointPhone
.TelephoneNumber is a phone data type.

ContactPointPhone                 String                 0.1        N/A
.AreaCode

ContactPointPhone                 String                 0.1        N/A
.ExtensionNumber

<!-- page:1508 -->

AFLS Overview                                                                 Mapping FHIR v4.0 to Salesforce Standard Objects



Contact          Salesforce Field                  Type              Salesforce     Notes
Point                                                                Cardinality
Resource
Contact.Email                     Email                  0.1       While FHIR defines contactPoint.value
as a string, Contact.Email is an email data
type.

use              ContactPointPhone                 Picklist               0.1       While FHIR defines contactPoint.use as
.UsageType                                                         a code, the Salesforce implementation is a picklist.

ContactPointEmail                 Picklist               0.1
.UsageType

rank             ContactPointPhone                 Double                 0.1       N/A
.PreferenceRank

ContactPointEmail                 Double                 0.1       N/A
.PreferenceRank

period           ContactPointPhone                 Date                   0.1       Because Salesforce doesn’t support a native period
.ActiveFromDate                                                    data type, the Salesforce implementation of
contactPoint.period is flattened to a
ContactPointPhone                 Date                   0.1
set of from and to dates.
.ActiveToDate

ContactPointEmail                 Date                   0.1       Because Salesforce doesn’t support a native
.ActiveFromDate                                                    period data type, the Salesforce implementation
of contactPoint.period is flattened to
ContactPointEmail                 Date                   0.1
a set of from and to dates.
.ActiveToDate




## Device

The Device FHIR resource maps to the Asset and CareRegisteredDevice objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Device map to the fields in Salesforce.


## Table 12: Patient - Salesforce

Device           Salesforce Field                  Type              Salesforce     Notes
Resource                                                             Cardinality
identifier Identifier                              Object                 0.M       The identifier information for a device is
represented as Identifier records that
reference the CareRegisteredDevice record using
their Identifier.ParentRecordId field
.

uidCarrier CareRegisteredDevice External                                  0.3       While FHIR defines uidCarrier.Device
.Device    .UniqueDeviceId1     Lookup                                              Identifier as a zero-to-many value, the
Identifier

<!-- page:1509 -->

AFLS Overview                                               Mapping FHIR v4.0 to Salesforce Standard Objects




## Device         Salesforce Field       Type          Salesforce    Notes

Resource                                            Cardinality
CareRegisteredDevice External                      Salesforce implementation supports a maximum
.UniqueDeviceId2     Lookup                        of three values using three fields.


## CareRegisteredDevice External

.UniqueDeviceId3     Lookup

uidCarrier CareRegisteredDevice URL                     0.3       While FHIR defines uidCarrier.Issuer as
.Issuer    .UniqueDeviceId1                                       a zero-to-many value, the Salesforce
Issuer                                                 implementation supports a maximum of three
values using three fields.
CareRegisteredDevice URL
.UniqueDeviceId2
Issuer

CareRegisteredDevice URL
.UniqueDeviceId3
Issuer

uidCarrier N/A                        N/A               N/A       Not supported
.jurisdiction

uidCarrier N/A                        N/A               N/A       Not supported
.carrierAIDC

uidCarrier N/A                        N/A               N/A       Not supported
.arrierHRF

uidCarrier N/A                        N/A               N/A       Not supported
.entryType

status         Asset.Status           Picklist          0.1       While FHIR defines device.status as code,
the Salesforce implementation is a picklist.

status         Asset.StatusReason     Picklist          0.1       While FHIR defines device.statusReason
Reason                                                            as a zero-to-many codeable concept, the
Salesforce implementation is a zero-to-one picklist
.

distinct   Asset.Uuid                 String            0.1       N/A
Identifier

manufacturer Asset.AssetProviderBy Lookup:              0.1       While FHIR defines device.manufacturer
Account                     as string, the Salesforce implementation is a
lookup to Account (Organization).

manufacture Asset.ManufactureDate Date                  0.1       While FHIR defines
Date                                                              device.manufactureDate as DateTime,
the Salesforce implementation is a of the data
type Date.

expiration Asset.UsageEndDate         Date              0.1       While FHIR defines
Date                                                              device.expirationDate as DateTime,

<!-- page:1510 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## Device         Salesforce Field       Type         Salesforce    Notes

Resource                                           Cardinality
the Salesforce implementation is a of the data
type Date.

lotNumber N/A                         N/A              N/A       Not supported

serial         Asset.SerialNumber     String           0.1       N/A
Number

device    CareRegisteredDevice String                  0.1       While FHIR defines device.deviceName as
Name.name .Name                                                  a zero-to-many resource, the Salesforce
implementation is zero-to-one.
device    Lookup: CareRegistered Multi-Select          0.M
Name.type Device.NameType        Picklist

model          Asset.ProductCode      String           0.1       N/A
Number

part           N/A                    N/A              N/A       Not supported
Number

type           CareRegisteredDevice Lookup: Code       0.1       While FHIR defines device.type as a
.DeviceTypeId        Set                          codeable concept value, the Salesforce
implementation is a code set.

specialization N/A                    N/A              N/A       Not supported

version        N/A                    N/A              N/A       Not supported

property       N/A                    N/A              N/A       Not supported


## patient        CareRegisteredDevice Lookup:            0.1       N/A

.PatientId           Account

owner          Asset.AssetServicedBy Lookup:           0.1       N/A
Account

contact        CareRegisteredDevice String             0.1       While FHIR defines device.contact as a
.SupportContactDetail                             contact point value, the Salesforce
implementation is a string.

location       N/A                    N/A              N/A       N/A

url            Asset.Product2Id       URL              0.1       N/A
.DisplayUrl

account        N/A                    N/A              N/A       Not supported

note.          AuthorNote             Object           0.M       The notes for a device are represented as
AuthorNote records that reference the
CareRegisteredDevice record using their
AuthorNote.ParentRecordId field.

<!-- page:1511 -->

AFLS Overview                                                                  Mapping FHIR v4.0 to Salesforce Standard Objects



Device           Salesforce Field                  Type              Salesforce      Notes
Resource                                                             Cardinality
safety           CareRegisteredDevice String                              0.1        While FHIR defines device.safety as a
.SafetyInformation                                                  codeable concept, the Salesforce implementation
is a string field.

parent           Asset.ParentId                    Lookup Asset           0.1        N/A




## DiagnosticReport

The diagnosticReport FHIR resource maps to the DiagnosticSummary object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for diagnosticReport map to the fields in Salesforce.


## Table 13: diagnosticReport - Salesforce

Diagnostic       Salesforce Field                  Type              Salesforce      Notes
Report                                                               Cardinality
Resource
identifier Identifier                              Object                 0.M        The identifier information for a diagnostic
summary is represented as Identifier
records that reference the Diagnostic
Summary record using their Identifier
.ParentRecordId field.

basedOn          DiagnosticSummary                 Polymorphic            0.1        While FHIR defines diagnosticReport
.BasedOnId                        Lookup:                           .basedOn as a zero-to-many reference, the
Medication
Salesforce implementation is a zero-to-one text
Statement,                        field.
Clinical
Service                           Only references to medication statement and
Request                           clinical service request records are supported.

status           DiagnosticSummary                 Picklist               1.1        While FHIR defines diagnosticReport
.Status                                                             .status as a reference to code set bundle, the
Salesforce implementation is a picklist.

category         DiagnosticSummary                 Multi-Select           0.M        While FHIR defines diagnosticReport
.Category                         Picklist                          .category as a reference to code set bundle,
the Salesforce implementation is a multi-select
picklist.

code             DiagnosticSummary.                Lookup:                1.1        N/A
CodeId                            CodeSet
Bundle

<!-- page:1512 -->

AFLS Overview                                                   Mapping FHIR v4.0 to Salesforce Standard Objects




## Diagnostic     Salesforce Field        Type             Salesforce    Notes

Report                                                  Cardinality
Resource
subject        DiagnosticSummary       Master-Detail:       1.1       The Salesforce implementation of diagnostic
.PatientId              Account                        Report.subject supports references to
only patients.


## encounter DiagnosticSummary    Lookup:                      0.1       N/A

.ClinicalEncounterId Clinical
Encounter


## effective DiagnosticSummary            DateTime             0.1       N/A

.effective .EffectiveStartDate
DateTime   Time

effective DiagnosticSummary            DateTime             0.1       Because Salesforce doesn’t support a native period
.effective .EffectiveStartDate                                        data type, the diagnosticReport
Period     Time                                                       .effective.effectivePeriod field is
flattened into a set of start date and end date
DiagnosticSummary     DateTime               0.1
fields.
.EffectiveEndDateTime

issued         DiagnosticSummary       DateTime             0.1       Because Salesforce doesn’t support a native
.IssuedDateTime                                        instant data type, the diagnosticReport
.issued FHIR resource is implemented as a
date time field in Salesforce.

performer DiagnosticSummary            Lookup: Care         0.1       While FHIR defines diagnosticReport
.IssuedById                  Performer                      .performer as a zero-to-many resource, the
Salesforce implementation is a zero-to-one
reference to CarePerformer.

resultsInterpreter DiagnosticSummary   Lookup: Care         0.1       While FHIR defines diagnosticReport
.InterpretedById    Performer                      .resultsInterpreter as a zero-to-many
resource, the Salesforce implementation is a
zero-to-one reference to CarePerformer.

specimen       N/A                     N/A                 N/A        Not supported

result         DiagnosticSummary       Lookup: Care         0.1       While FHIR defines diagnosticReport
.CareObservationId      Observation                    .result as a zero-to-many resource, the
Salesforce implementation is a zero-to-one
reference to CareObservation.

imaging        N/A                     N/A                 N/A        Not supported
Study

media          DiagnosticSummary       String               0.1       The zero-to-many diagnosticReport
.comment       .ImageComments1                                         .media resource is flattened to five separate
zero-to-one text fields and five separate
DiagnosticSummary       String
zero-to-one URL fields in the Salesforce
.ImageComments2
implementation.

<!-- page:1513 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Diagnostic      Salesforce Field                 Type              Salesforce      Notes
Report                                                             Cardinality
Resource
DiagnosticSummary                String                 0.1
.ImageComments3

DiagnosticSummary                String                 0.1
.ImageComments4

DiagnosticSummary                String                 0.1
.ImageComments5


## media           DiagnosticSummary                URL                    0.1

.link           .ImageUrl1

DiagnosticSummary                URL                    0.1
.ImageUrl2

DiagnosticSummary                URL                    0.1
.ImageUrl3

DiagnosticSummary                URL                    0.1
.ImageUrl4

DiagnosticSummary                URL                    0.1
.ImageUrl5

conclusion DiagnosticSummary                     String                 0.1        N/A
.Summary

conclusion DiagnosticSummary                     Lookup:                0.1        While FHIR defines diagnosticReport
Code       .SummaryCodeId                         CodeSet                          .conclusionCode as a zero-to-many
Bundle                           resource, the Salesforce implementation is a
zero-to-one reference.

presented N/A                                    N/A                   N/A         Not supported
Form




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1514 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects




SEE ALSO:
DiagnosticSummary



## DocumentReference

The DocumentReference FHIR resource maps to the DiagnosticSummary and DiagnosticSummaryDetail objects
in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for DocumentReference map to the fields in Salesforce.


## Table 14: Patient - Salesforce

DocumentReference             Salesforce Field                           Type          Salesforce Notes
Resource                                                                               Cardinality
MasterIdentifier              N/A                                        N/A                  N/A   Not supported

identifier                    Identifier                                 Object               0.M   The identifier information for
a documentReference is
represented as
Identifier records that
reference the
DiagnosticSummary record
using their Identifier.
ParentRecordId field.

status                        DiagnosticSummary.Status                   Picklist             1.1   While FHIR defines
document
Reference.status as

<!-- page:1515 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects



DocumentReference       Salesforce Field                Type           Salesforce Notes
Resource                                                               Cardinality
a code, the Salesforce
implementation is a picklist.

docStatus               DiagnosticSummary.Document      Picklist           0.1     While FHIR defines
Stage                                                      document
Reference.docStatus
as a code, the Salesforce
implementation is a picklist.

type                    DiagnosticSummary.Document      Lookup:            0.1     N/A
TypeCodeId                      CodeSet
Bundle

category                DiagnosticSummary.Category      Multi-Select      0.M      While FHIR defines
Picklist                   documentReference.category
as a codeable concept, the
Salesforce implementation is
a picklist.

subject                 DiagnosticSummary.PatientId Maste-Detail:          1.1     The Salesforce
Account                    implementation supports only
patients as subjects of a
document reference.

date                    DiagnosticSummary.Issued        DateTime           0.1     N/A
DateTime

author                  DiagnosticSummaryDetail         Object            0.M      The author information of a
document reference is
represented using the
DiagnosticSummaryDetail
child object. The
DetailRecordId field
references the author, the
DetailTypefield specifies
the child record type as
Author, and the
DiagnosticSummaryId
field references the parent
DiagnosticSummary
record that represents the
document reference.

authenticator           DiagnosticSummary               Lookup:            0.1     The Salesforce
.AuthenticatorId                Healthcare                 implementation doesn’t
Provider,                  directly support
Account,                   practitionerRole or
Contact,                   HealthcarePractitionerFacility
User                       records as authenticators.

<!-- page:1516 -->

AFLS Overview                                             Mapping FHIR v4.0 to Salesforce Standard Objects



DocumentReference       Salesforce Field             Type           Salesforce Notes
Resource                                                            Cardinality
custodian               DiagnosticSummary.Custodian Lookup:             0.1     N/A
Id                          Account

relatesTo.code          DiagnosticSummaryDetail      Picklist          0.M      The related document
.DocumentRelationType                                   information of a document
reference is represented using
relatesTo.target        DiagnosticSummaryDetail      Lookup:           0.M
the
.DetailRecord                Diagnostic
DiagnosticSummaryDetail
Summary
child object. The
DetailRecordId field
references the related
document, the Document
RelationType field
specifies the type of relation,
the DetailTypefield
specifies the child record type
as Related Document, and the
DiagnosticSummaryId
field references the parent
DiagnosticSummary
record that represents the
document reference.

description             DiagnosticSummary.Summary    String             0.1     While FHIR defines
document
Reference.status
Reason as a zero-to-many
codeable concept, the
Salesforce implementation is
a zero-to-one picklist.

securityLabel           DiagnosticSummary.Document   Lookup:            0.1     N/A
SecurityCode                 CodeSet
Bundle

content.attachment DiagnosticSummary.Report          Lookup:            0.1     While FHIR defines
AttachmentId                      Attachment                 documentReference.Content
as a one-to-many resource,
the Salesforce implementation
is zero-to-one.

content.format          DiagnosticSummary.Document   Lookup:            0.1     N/A
FormatCode                   CodeSet

context.encounter       DiagnosticSummaryDetail      Object            0.M      The encounter context
information of a document
reference is represented using
the
DiagnosticSummaryDetail

<!-- page:1517 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



DocumentReference             Salesforce Field                            Type         Salesforce Notes
Resource                                                                               Cardinality
child object. The
DetailRecordId field
references the clincial
encounter record, the
DetailTypefield specifies
the child record type as
Clinical Encounter, and the
DiagnosticSummaryId
field references the parent
DiagnosticSummary
record that represents the
document reference.

context.event                 N/A                                         N/A              N/A     Not supported

context.period                N/A                                         N/A              N/A     Not supported

context.facility              N/A                                         N/A              N/A     Not supported
Type

context.practice              N/A                                         N/A              N/A     Not supported
Setting

context.source                N/A                                         N/A              N/A     Not supported
PatientInfo

context.related               N/A                                         N/A              N/A     Not supported




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1518 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## Dosage

The Dosage FHIR resource maps to the PatientMedicationDosage object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Dosage map to the fields in Salesforce.


## Table 15: Dosage - Salesforce

Dosage           Salesforce Field                  Type              Salesforce    Notes
Resource                                                             Cardinality
sequence         PatientMedication                 Double                 0.1      N/A
Dosage.Sequence

text             PatientMedication                 String                 0.1      Both dosage.text and dosage.timing
Dosage.Comments                                                   are mapped to the PatientMedication
Dosage.Comments field in Salesforce.

additional PatientMedication                       String                 0.1      While FHIR defines Dosage.additional
Instruction Dosage.Additional                                                       Instruction as a zero-to-many reference to
Instruction                                                            code set bundle, the Salesforce implementation
is a zero-to-one text field.

patient     PatientMedication                      String                 0.1      N/A
Instruction Dosage.Patient
Instruction

timing           PatientMedication                 String                 0.1      N/A
Dosage.TimingId

asNeeded  PatientMedication                        Boolean                0.1      N/A
.asNeeded Dosage.IsAsNeeded
Boolean

asNeeded  N/A                                      N/A                   N/A       Not supported
.asNeeded
Codeable
Concept

site             PatientMedication                 Lookup:                0.1      N/A
Dosage.SiteId                     CodeSet
Bundle

route            PatientMedication                 Lookup:                0.1      N/A
Dosage.RouteId                    CodeSet
Bundle

method           PatientMedication                 Lookup:                0.1      N/A
Dosage.MethodId                   CodeSet
Bundle

doseAnd          N/A                               N/A                    0.1      While FHIR defines dosage.doseAndRate
Rate                                                                               as a zero-to-many block of child resources, the

<!-- page:1519 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## Dosage         Salesforce Field      Type          Salesforce    Notes

Resource                                           Cardinality
Salesforce implementation supports only a
zero-to-one set of information per record.

doseAnd   PatientMedication          Picklist          0.1       While FHIR defines dosage.doseAndRate
Rate.type Dosage.Dosage                                           .type as a code set bundle, the Salesforce
DefinitionType                                         implementation is a picklist.

doseAnd   PatientMedication     Picklist               0.1       A Salesforce-original field that determines
Rate.dose Dosage.DosageQuantity                                  whether the dosage.doseAndRate.dose
Type                                                   value in the record is a dose range or a dose
quantity.

PatientMedication     Double            0.1       Because Salesforce doesn’t support native
Dosage.DosageQuantity                             quantity or range data types, the dosage
Numerator                                          .doseAndRate.dose FHIR resource is
flattened to a set of numerator, denominator, and
PatientMedication     Double            0.1
unit fields.
Dosage.DosageQuantity
Denominator


## PatientMedication     Lookup:           0.1

Dosage.DosageUnitId    UnitOf
Measure

doseAnd   PatientMedication     Picklist               0.1       A Salesforce-original field that determines
Rate.rate Dosage.DosageRateType                                  whether the dosage.doseAndRate.rate
value in the record is a simple frequency,
frequency range, or frequency ratio.

PatientMedication     Double            0.1       Because Salesforce doesn’t support native
Dosage.DosageRate                                 quantity, range, or ratio data types, the dosage
Numerator                                          .doseAndRate.dose FHIR resource is
flattened to a set of numerator, denominator, and
PatientMedication     Double            0.1
unit fields.
Dosage.DosageRate
Denominator


## PatientMedication     Lookup:           0.1

Dosage.DosageRate      UnitOf
UnitId                 Measure

doseAnd   N/A                        N/A               N/A       Not supported
Rate
.maxDose
PerPeriod

doseAnd        N/A                   N/A               N/A       Not supported
Rate.max
DosePer
Administration

<!-- page:1520 -->

AFLS Overview                                                                   Mapping FHIR v4.0 to Salesforce Standard Objects



Dosage           Salesforce Field                  Type              Salesforce       Notes
Resource                                                             Cardinality
doseAnd          N/A                               N/A                   N/A          Not supported
Rate.max
DosePer
Lifetime



SEE ALSO:
PatientMedicationDosage



## Encounter

The Encounter FHIR resource maps to the ClinicalEncounter, ClinicalEncounterDiagnosis, Clinical
EncounterFacility, ClinicalEncounterIdentifier, ClinicalEncounterProvider, ClinicalEncounter
Reason, and ClinicalEncounterSvcRequest objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Encounter map to the fields in Salesforce.


## Table 16: Patient - Salesforce

Encounter        Salesforce Field                  Type              Salesforce       Notes
Resource                                                             Cardinality
identifier ClinicalEncounter                       Object                0.M          The identifier information for an encounter is
Identifier                                                                 represented as ClinicalEncounter
Identifier records that reference the
encounter record using their Clinical
EncounterIdentifier.Parent
RecordId field.

status           ClinicalEncounter                 Picklist               1.1         While FHIR defines encounter.status as
.Status                                                              a code, its Salesforce implementation is a picklist
.

status           N/A                               N/A                   N/A          Not supported
History

class            ClinicalEncounter.                Picklist               1.1         While FHIR defines encounter.class as a
Category                                                             code set, its Salesforce implementation is a picklist
.

class            N/A                               N/A                   N/A          Not supported
History

type             ClinicalEncounter.                Lookup:                0.1         While FHIR defines encounter.type as a
TypeId                            CodeSet                            zero-to-many resource, the Salesforce
Bundle                             implementation is zero-to-one.

<!-- page:1521 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## Encounter      Salesforce Field      Type          Salesforce    Notes

Resource                                           Cardinality
service        ClinicalEncounter     Picklist          0.1       While FHIR defines encounter.service
Type           .ServiceType                                       Type as a code set bundle, its Salesforce
implementation is a picklist.


## priority       ClinicalEncounter.    Lookup:           0.1       N/A

PriorityId            CodeSet
Bundle

subject        ClinicalEncounter.    Lookup:           1.1       While FHIR defines encounter.subject as
PatientId             Account                     a zero-to-one resource, the Salesforce
implementation is one-to-one.

episodeOf N/A                        N/A               N/A       Not supported
Care

basedOn        ClinicalEncounterSvc Object             0.M       The service request information that an encounter
Request                                           is based on is represented as Clinical
EncounterSvcRequest records that
reference the encounter record using their
ClinicalEncounterSvcRequest.
ClinicalEncounterId field.

participant ClinicalEncounter        Object            0.M       The participant information for an encounter is
Provider                                             represented as ClinicalEncounter
Provider records that reference the encounter
record using their ClinicalEncounter
Provider.ClinicalEncounterId field
.

participant ClinicalEncounter     Lookup:              0.1       While FHIR defines encounter
.type       Provider.Practitioner CodeSet                        .participant.type as a zero-to-many
TypeId                Bundle                         resource, the Salesforce implementation is
zero-to-one.

participant ClinicalEncounter        DateTime          0.1       Because Salesforce doesn’t have a native period
.period     Provider.StartDate                                   data type, the encounter.participant
.period resource is flattened into a set of start
ClinicalEncounter     DateTime          0.1
date and end date fields, and set of duration and
Provider.EndDate
duration unit fields.
ClinicalEncounter     Double            0.1
Provider.Duration


## ClinicalEncounter     Lookup:           0.1

Provider.Duration     UnitOf
UnitId                Measure


## participant ClinicalEncounter     Lookup:              0.1       N/A

.individual Provider.Practitioner Healthcare
Id                    Provider

<!-- page:1522 -->

AFLS Overview                                                  Mapping FHIR v4.0 to Salesforce Standard Objects




## Encounter      Salesforce Field       Type             Salesforce    Notes

Resource                                               Cardinality
appointment N/A                       N/A                  N/A       Not supported

period         ClinicalEncounter      DateTime             0.1       Because Salesforce doesn’t have a native period
.StartDate                                            data type, the encounter.period resource
is flattened into a set of start date and end date
ClinicalEncounter.End DateTime              0.1
fields.
Date

length         ClinicalEncounter.     Double               0.1       Because Salesforce doesn’t have a native duration
Duration                                              data type, the encounter.length resource
is flattened into a set of duration and duration
ClinicalEncounter.     Lookup:              0.1
unit fields.
DurationUnitId         UnitOf
Measure

reason         ClinicalEncounter      Lookup:              0.M       The reason for an encounter is represented as
Code           Reason.ReasonCodeId    CodeSet                        ClinicalEncounterReason records that
Bundle                         reference the encounter record using their
ClinicalEncounterReason.
ClinicalEncounterId field.

reason    ClinicalEncounter           Polymorphic          0.M       The reason for an encounter is represented as
Reference Reason.Reason               Lookup:                        ClinicalEncounterReason records that
ReferenceId                 Health                         reference the encounter record using their
Condition,                     ClinicalEncounterReason.
Care                           ClinicalEncounterId field.
Observation,
and
Patient
Medical
Procedure

diagnosis ClinicalEncounter           Object               0.M       The diagnosis information for an encounter is
Diagnosis                                                  represented as ClinicalEncounter
Diagnosis records that reference the
encounter record using their Clinical
EncounterDiagnosis.Clinical
EncounterId field.


## diagnosis ClinicalEncounter      Polymorphic               0.1       N/A

.condition Diagnosis.DiagnosisId Lookup:
Health
Condition,
and
Patient
Medical
Procedure

<!-- page:1523 -->

AFLS Overview                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




## Encounter      Salesforce Field         Type              Salesforce    Notes

Resource                                                  Cardinality
diagnosis ClinicalEncounter     Lookup:                       0.1       N/A
.use      Diagnosis.UsageTypeId CodeSet
Bundle


## diagnosis ClinicalEncounter             Double                0.1       N/A

.rank     Diagnosis.Diagnosis
Rank

account        N/A                      N/A                   N/A       Not supported


## hospitalization ClinicalEncounter.Pre   Lookup:               0.1       N/A

.pre            AdmissionIdentifierId   Clinical
Admission                               Encounter
Identifier                              Identifier
.

hospitalization ClinicalEncounter.      Lookup:               0.1       While FHIR defines encounter
.origin         PreviousFacilityId      Healthcare                       .hospitalization.origin as a single
Facility                        resource, the Salesforce implementation flattens
it into two fields.
ClinicalEncounter.   Lookup:                   0.1
PreviousOrganization Account
Id

hospitalization ClinicalEncounter.      Picklist              0.1       While FHIR defines encounter
.admitSource AdmissionSource                                             .hospitalization.admitSource as
a code set bundle, its Salesforce implementation
is a picklist.


## hospitalization ClinicalEncounter.      Lookup:               0.1       N/A

.re             ReadmissionCodeId       CodeSet
Admission                               Bundle

hospitalization ClinicalEncounter.      Multi-Select          0.M       While FHIR defines encounter
.diet           DietPreference          Picklist                        .hospitalization.dietPreference
Preference                                                              as a code set bundle, its Salesforce
implementation is a picklist.

hospitalization ClinicalEncounter       Picklist              0.1       While FHIR defines encounter
.special        .SpecialCourtesy                                        .hospitalization.special
Courtesy                                                                Courtesy as a zero-to-many code set bundle,
its Salesforce implementation is a zero-to-one
picklist.

hospitalization N/A                     N/A                   N/A       Not supported
.special
Arrangement

hospitalization ClinicalEncounter. Lookup:                    0.1       While FHIR defines encounter
.destination DestinationFacilityId Healthcare                           .hospitalization.destination as
Facility

<!-- page:1524 -->

AFLS Overview                                                          Mapping FHIR v4.0 to Salesforce Standard Objects



Encounter      Salesforce Field              Type              Salesforce    Notes
Resource                                                       Cardinality
ClinicalEncounter.            Lookup:               0.1       a single resource, the Salesforce implementation
Destination                   Account                         flattens it into two fields.
OrganizationId

hospitalization ClinicalEncounter. Lookup:                         0.1       N/A
.discharge DischargeDisposition CodeSet
Disposition Id                     Bundle

location       ClinicalEncounter             Object                0.M       The facility information for an encounter is
Facility                                                      represented as ClinicalEncounter
Facility records that reference the encounter
record using their ClinicalEncounter
Facility.ClinicalEncounterId field
.

location  ClinicalEncounter                  Lookup:               0.1       N/A
.location Facility.FacilityId                Healthcare
Facility

location       ClinicalEncounter             Picklist              0.1       While FHIR defines encounter.location
.status        Facility.Status                                                .status as a code, its Salesforce
implementation is a picklist.

location  ClinicalEncounter                  Lookup:               0.1       N/A
.physical Facility.Facility                  CodeSet
Type      TypeId                             Bundle

location       ClinicalEncounter             DateTime              0.1       Because Salesforce doesn’t have a native period
.period        Facility.StartDate                                            data type, the encounter.location
.period resource is flattened into a set of start
ClinicalEncounter             DateTime              0.1
date and end date fields, and set of duration and
Facility.EndDate
duration unit fields.
ClinicalEncounter             Double                0.1
Facility.Duration


## ClinicalEncounter             Lookup:               0.1

Facility.Duration             UnitOf
UnitId                        Measure

serviceProvider ClinicalEncounter.           Lookup:               0.1       While FHIR defines encounter.service
FacilityId                    Healthcare                      Provider as referencing an organization, the
Facility                        Salesforce implementation references a facility.

partOf         ClinicalEncounter.RelatedClinical Lookup:           0.1       N/A
EncounterId                       Clinical
Encounter

<!-- page:1525 -->

AFLS Overview                                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.




SEE ALSO:
ClinicalEncounter
ClinicalEncounterDiagnosis
ClinicalEncounterFacility
ClinicalEncounterIdentifier
ClinicalEncounterProvider
ClinicalEncounterReason
ClinicalEncounterSvcRequest



## EpisodeOfCare

The episodeOfCare FHIR resource maps to the CareEpisode and CareEpisodeDetail objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for episodeOfCare map to the fields in Salesforce.


## Table 17: episodeOfCare - Salesforce

Goal             Salesforce Field                 Type              Salesforce      Notes
Resource                                                            Cardinality
identifier Identifier                             Object                 0.M        The identifier information for an episode of care
is represented as Identifier records that
reference the CareEpisode record using their
Identifier.ParentRecordId field.

<!-- page:1526 -->

AFLS Overview                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




## Goal           Salesforce Field         Type              Salesforce    Notes

Resource                                                  Cardinality
status         CareEpisode.Status       Picklist              1.1       While FHIR defines this field as a code value, the
Salesforce implementation is a picklist.

status         N/A                      N/A                   N/A       Not supported
History

type           CareEpisode.Type         Multi-Select          0.M       While FHIR defines this field as a codeable
Picklist                        concept, the Salesforce implementation is a
multi-select picklist.

diagnosis CareEpisodeDetail             Picklist              0.M       Select Diagnosis as the picklist value in detailType.
.condition .DetailType

CareEpisodeDetail        Lookup:
.DetailRecordId          Health
Condition


## diagnosis CareEpisodeDetail             Lookup:               0.1       N/A

.role     .RoleCodeId                   CodeSet
Bundle,
CodeSet

diagnosis CareEpisodeDetail             Number                0.1       N/A
.rank     .Rank

patient        CareEpisode.PatientId Master-Detail:           1.1       N/A
Account


## managing       CareEpisode              Lookup:               0.1       N/A

Organization   .Responsible             Account,
OrganizationId           Healthcare
Provider

period         CareEpisode.StartDate DateTime                 0.1       The Salesforce implementation implements the
Time                                                     Period data type as a pair of DateTime fields.

CareEpisode.EndEnd       DateTime              0.1
DateTime

referral       CareEpisodeDetail        Picklist              0.1       Select Referral Request as the picklist value in
Request        .DetailType                                              detailType.

CareEpisodeDetail        Lookup:                         Select ClinicalServiceRequest as the domain set
.DetailRecordId          Clinical                        for ReferenceRecordId.
Service
Request


## care           CareEpisode.Care         Lookup:               0.1       N/A

Manager        CoordinatorId            Healthcare
Provider,
Healthcare

<!-- page:1527 -->

AFLS Overview                                                                 Mapping FHIR v4.0 to Salesforce Standard Objects



Goal             Salesforce Field                   Type              Salesforce    Notes
Resource                                                              Cardinality
Practitioner
Facility

team             N/A                                N/A                    N/A      Not supported

account          N/A                                N/A                    N/A      Not supported




## Flag

The Flag FHIR resource maps to the ClinicalAlert object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Flag map to the fields in Salesforce.


## Table 18: Flag - Salesforce

Flag             Salesforce Field                   Type              Salesforce    Notes
Resource                                                              Cardinality
identifier Identifier                               Object                 0.M      The identifier information for a clinical alert is
represented as Identifier records that
reference the clinical alert record using their
Identifier.ParentRecordId field.

status           ClinicalAlert.Status Picklist                             0.1      While FHIR defines Flag.status as a code,
the Salesforce implementation of Clinical
Alert.Status is picklist.

category         ClinicalAlert                      Multi-Select           0.M      While FHIR defines Flag.category as a code
.Categories                        Picklist                        set bundle, the Salesforce implementation of
ClinicalAlert.Categories is a
multi-select picklist.

code             ClinicalAlert.CodeId Lookup:                              1.1      While FHIR defines Flag.code as a code set
CodeSet                                       bundle only, the Salesforce implementation
Bundle                                        flattens it into ClinicalAlert.Code and
ClinicalAlert.CodeDescription.
ClinicalAlert.Code                 String                 0.1
The latter is meant to display non-coded
Description
information to users as required.

subject          ClinicalAlert.Subject Polymorphic                         1.1      The Salesforce implementation of flag
Lookup:                         .subject doesn’t support plan definitions.
Location,
Account
Healthcare
Provider,
Medication,
and

<!-- page:1528 -->

AFLS Overview                                                                 Mapping FHIR v4.0 to Salesforce Standard Objects



Flag               Salesforce Field                Type               Salesforce    Notes
Resource                                                              Cardinality
Patient
Medical
Procedure

period             ClinicalAlert.Start             Date Time               0.1      In Salesforce’s implementation, Flag.period
Date                                                             is split into two fields, ClinicalAlert
.StartDate and ClinicalAlert.End
ClinicalAlert.EndDate Date Time                         0.1
Date.

encounter          ClinicalAlert.Related Lookup:                           0.1      N/A
EncounterId           Clinical
Encounter

author             ClinicalAlert.Raised Polymorphic                        0.1      The Salesforce implementation of flag
ById                 Lookup:                                     .author doesn’t support patients, and
Healthcare                                  organizations.
Provider,
Care
Registered
Device, and
Healthcare
Practitioner
Facility



SEE ALSO:
ClinicalAlert



## Goal

The Goal FHIR resource maps to the GoalAssignment and GoalAssignmentDetail objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Goal map to the fields in Salesforce.


## Table 19: Goal - Salesforce

Goal               Salesforce Field                Type               Salesforce    Notes
Resource                                                              Cardinality
Identifier N/A                                     N/A                    N/A       Not supported

lifecycle GoalAssignment.Status Picklist                                   0.1      While FHIR defines this field as a one-to-one code
Status                                                                              value, the Salesforce implementation is a
zero-to-one picklist.

<!-- page:1529 -->

AFLS Overview                                                      Mapping FHIR v4.0 to Salesforce Standard Objects




## Goal           Salesforce Field             Type           Salesforce    Notes

Resource                                                   Cardinality
achievementStatus GoalAssignment            Picklist           0.1       While FHIR defines this value as a codeable
.ProgressionStatus                                     concept, the Salesforce implementation is a
picklist.

category       N/A                          N/A                N/A       Not supported

continuous GoalAssignment                   Boolean            0.1       N/A
.IsContinuousGoal

priority       GoalAssignment               Picklist           0.1       While FHIR defines this field as a codeable
.Priority                                                 concept, the Salesforce implementation is a
picklist.

description GoalAssignment.Description      Text Area          0.1       While FHIR defines this field as a one-to-one
codeable concept, the salesforce implementation
GoalAssignment.Description   Lookup:            0.1
supports both zero-to-one text values and
CodeId                       CodeSet
zero-to-one codeable concept and codeset values.
Bundle,
CodeSet

subject        GoalAssignment.Parent Lookup:                   1.1       The Salesforce implementation additionally
RecordId              Account,                            supports goal and carePlan as valid subject values
CarePlan.                           for goal.
Goal
Assignment,
CarePlan
Activity

start          GoalAssignment.Start Date                       0.1       N/A
Date


## GoalAssignment.Start Lookup:                    0.1       N/A

EventCodeId          CodeSet
Bundle,
CodeSet

target         N/A                          N/A                N/A       Not Supported

status         GoalAssignment.Status DateTime                  0.1       The Salesforce Implementation uses the DateTime
Date           Date                                                      data type instead of Date.


## status         GoalAssignment.status Text                      0.1       N/A

Reason         Reason

expressedBy GoalAssignment                  Lookup:            0.1       The Salesforce implementation doesn’t support
.AssignedById                   Account,                     careTeam values for this field.
Contact,
Healthcare
Provider,
Healthcare

<!-- page:1530 -->

AFLS Overview                                                                 Mapping FHIR v4.0 to Salesforce Standard Objects



Goal            Salesforce Field                 Type             Salesforce      Notes
Resource                                                          Cardinality
Practitioner
Facility

addresses GoalAssignmentDetail Picklist                                0.M        Select Addressed Item as the picklist value in
.DetailType                                                             detailType and select one of the supported
domain sets in detailRecord.

GoalAssignmentDetail Lookup:                                      The Salesforce implementation doesn’t support
.DetailRecordId      Health                                       procedure, nutritionOrder, and RiskAssessment
Condition,                                   values.
Care
Observation,
Medication
Statement,
Medication
Request,
Clinical
Service
Request

outcome         GoalAssignmentDetail Picklist                          0.M        Select Outcome Code as the picklist value in
Code            .DetailType                                                       detailType.


## GoalAssignmentDetail Lookup:                                      N/A

.DetailCodeId        CodeSet
Bundle,
CodeSet

outcome   GoalAssignmentDetail Picklist                                0.M        Select Outcome Reference as the picklist value in
Reference .DetailType                                                             detailType.

GoalAssignmentDetail Lookup: Care                                 Select Care Observation as the domain set in
.DetailRecordId      Observation                                  DetailRecordId.

note            N/A                              N/A                   N/A        Not supported




## HumanName

The HumanName FHIR resource maps to the PersonName object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for HumanName map to the fields in Salesforce.

<!-- page:1531 -->

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects



## Table 20: HumanName - Salesforce

Human            Salesforce Field                   Type               Salesforce      Notes
Name                                                                   Cardinality
Resource
family           PersonName.LastName                String                  0.1        In cases where a person has a middle name,
PersonName.LastName is supposed to
store a combination of the middle name and the
last name.

Given            PersonName.FirstName String                                0.1        While the cardinality defined by FHIR for Human
Name.Given is zero-to-many, the Salesforce
implementation in PersonName.First
Name is zero-to-one.

text             PersonName.FullName                String                  0.1        N/A

use              PersonName.NameUsage Dynamic                               0.1        While FHIR defines HumanName.use as a code,
Type                 picklist                                         Salesforce implements PersonName.Name
UsageType as a dynamic picklist.

prefix           PersonName.Prefix                  String                  0.1        While the cardinality defined by FHIR for Human
Name.prefix is zero-to-many, the Salesforce
implementation in PersonName.Prefix is
zero-to-one.

suffix           PersonName.Suffix                  String                  0.1        While the cardinality defined by FHIR for Human
Name.suffix is zero-to-many, the Salesforce
implementation in PersonName.Suffix is
zero-to-one.

period           PersonName.Effective Date Time                             0.1        In Salesforce’s implementation, HumanName
Date                                                                   .period is split into two fields, PersonName
.EffectiveDate and PersonName.End
PersonName.EndDate                 Date Time               0.1
Date.




## Identifier

The Identifier FHIR resource maps to the Identifier object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Identifier map to the fields in Salesforce.


## Table 21: Identifier - Salesforce

Identifier       Salesforce Field                   Type               Salesforce      Notes
Resource                                                               Cardinality
use              Identifier.IdUsage                 Picklist                0.1        FHIR defines identifier.use as a code set.
Type                                                                  However, the Salesforce implementation of
Identifier.IdUsageType is a dynamic

<!-- page:1532 -->

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects



Identifier      Salesforce Field                  Type              Salesforce      Notes
Resource                                                            Cardinality
picklist because of the limited list of possible
values.

type            Identifier.IdTypeId               Polymorphic            0.1        N/A
Lookup:
CodeSet,
CodeSet
Bundle

system          Identifier.Source                 String                 0.1        FHIR defines identifier.system as a URI.
System                                                              However, the Salesforce implementation of
Identifier.SourceSystem is a string
because Salesforce doesn’t support the URI data
type.

value           Identifier.IdValue                String                 0.1        N/A

period          Identifier.Effective DateTime                            0.1        In Salesforce’s implementation, identifier
Date                                                                 .period is split into two fields, Identifier
.EffectiveDate and Identifier.End
Identifier.EndDate                DateTime               0.1
Date.

assigner        Identifier.Issuing                Lookup:                0.1        N/A
AuthorityId                        Account



SEE ALSO:
Identifier



## Immunization

The Immunization FHIR resource maps to the PatientImmunization and PatientHealthReaction objects in
Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Immunization map to the fields in Salesforce.


## Table 22: Immunization - Salesforce

Immunization Salesforce Field                     Type              Salesforce      Notes
Resource                                                            Cardinality
identifier Identifier                             Object                 0.M        The identifier information for an immunization is
represented as Identifier records that
reference the PatientImmunization record using
their Identifier.ParentRecordId field
.

<!-- page:1533 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## Immunization Salesforce Field        Type            Salesforce    Notes

Resource                                             Cardinality
status         PatientImmunization   Picklist            0.1       While FHIR defines immunization.status
.Status                                             as a code set bundle, the Salesforce
implementation of PatientImmunization
.Status is picklist.


## status         PatientImmunization   Lookup:             0.1       N/A

Reason         .StatusReasonCodeId   CodeSet
Bundle


## vaccine        PatientImmunization   Lookup:             0.1       N/A

Code           .VaccineCodeId        CodeSet
Bundle


## patient        PatientImmunization   Master-Detail       1.1       N/A

.PatientId            Reference:
Account


## encounter PatientImmunization. Lookup:                   0.1       N/A

ClinicalEncounterId  Clinical
Encounter


## occurrence PatientImmunization       DateTime            0.1       N/A

.occurrence .VaccinationDate
DateTime


## occurrence PatientImmunization       String              0.1       N/A

.occurrence .VaccinationPeriod
String

recorded       PatientImmunization   DateTime            0.1       N/A
.RecordCreationDate
Time


## primary        PatientImmunization   Boolean             0.1       N/A

Source         .IsRecordedBy
Vaccinator


## report         PatientImmunization Lookup:               0.1       N/A

Origin         .InformationSourceId CodeSet
Bundle


## location       PatientImmunization   Lookup:             0.1       N/A

.FacilityId           Healthcare
.Facility

manufacturer PatientImmunization     String              0.1       Use this field if only the name of the organization
.Manufacturer                                         is required.


## PatientImmunization   Lookup:                       N/A

.Manufacturer         Account
AccountId

<!-- page:1534 -->

AFLS Overview                                                 Mapping FHIR v4.0 to Salesforce Standard Objects




## Immunization Salesforce Field        Type             Salesforce    Notes

Resource                                              Cardinality
lotNumber PatientImmunization        String               0.1       N/A
.LotNumber


## expiration PatientImmunization       DateTime             0.1       N/A

Date       .ExpirationDate


## site           PatientImmunization   Lookup:              0.1       N/A

.SiteId                CodeSet
Bundle


## route          PatientImmunization   Lookup:              0.1       N/A

.RouteId               CodeSet
Bundle

dose           PatientImmunization. Double                0.1       The Salesforce equivalent of immunization
Dose                                                 .dose is represented used the fields Patient
Immunization.Dose for the quantity and
PatientImmunization. Lookup:               0.1
PatientImmunization.DoseUnitId
DoseUnitId           UnitOf
for the unit.
Measure

performer CarePerformer              Object               0.M       The performer information for an immunization
is represented as CarePerformer records
that reference the PatientImmunization record
using their CarePerformer.Parent
RecordId field.


## performer CarePerformer.RoleId Lookup:                    0.1       N/A

.function                      CodeSet
Bundle


## performer CarePerformer              Polymorphic          1.1       N/A

.actor    .PersonId                  Lookup:
Account
and
Healthcare
Provider

note           N/A                   N/A                  N/A       Not supported


## reason         PatientImmunization   Lookup:              0.1       N/A

Code           .ReasonCodeId          CodeSet
Bundle

reason    PatientImmunization        Lookup:              0.1       The FHIR resourceimmunization.reason
Reference .HealthConditionId          Health                        Reference is flattened into three separate
Condition                     zero-to-one references to HealthCondition,
CareObservation, and Diagnostic
PatientImmunization. Lookup: Care          0.1
Summary in the Salesforce implementation.
CareObservationId    Observation

<!-- page:1535 -->

AFLS Overview                                               Mapping FHIR v4.0 to Salesforce Standard Objects




## Immunization Salesforce Field         Type          Salesforce    Notes

Resource                                            Cardinality
PatientImmunization Lookup:              0.1
.DiagnosticSummaryId Diagnostic
Summary

isSubpotent PatientImmunization       Boolean           0.1       N/A
.IsSubpotent

subpotent PatientImmunization         Lookup:           0.1       While FHIR defines immunization
Reason    .SubpotencyReason           CodeSet                     .subpotentReason as a zero-to-many
CodeId                      Bundle                      resource, the Salesforce implementation of
PatientImmunization.Subpotency
ReasonCodeId is a zero-to-one reference.

education N/A                         N/A              N/A        Not supported

program     N/A                       N/A              N/A        Not supported
Eligibility

fundingSource N/A                     N/A              N/A        Not supported

reaction       PatientHealthReaction Object            0.M        The reaction information for an immunization is
represented as PatientHealthReaction
records that reference the PatientImmunization
record using their PatientHealth
Reaction.ParentId field.


## reaction       PatientHealthReaction DateTime           0.1       N/A

.date          .ReactionDateTime


## reaction       PatientHealthReaction Lookup: Care       0.1       N/A

.detail        .ObservationId        Observation


## reaction  PatientHealthReaction Boolean                 0.1       N/A

.reported .IsSelfReported

protocol       N/A                    N/A               0.1       While FHIR defines immunization
Applied                                                           .protocolApplied as a zero-to-many
reference, the Salesforce implementation of its
child resources is zero-to-one.


## protocol       PatientImmunization. String              0.1       N/A

Applied        Immunization
.series        Recommendation

protocol   PatientImmunization        String            0.1       While FHIR defines immunization
Applied    .Recommending                                           .protocolApplied.authority as a
.authority Authority                                              reference to organization, the Salesforce
implementation of PatientImmunization
.RecommendingAuthority is a text field
.

<!-- page:1536 -->

AFLS Overview                                                                           Mapping FHIR v4.0 to Salesforce Standard Objects



Immunization Salesforce Field                                  Type           Salesforce    Notes
Resource                                                                      Cardinality
protocol             PatientImmunization Lookup:                                  0.1       N/A
Applied              .TargetDiseaseCodeId CodeSet
.target                                   Bundle
Disease

protocol             PatientImmunization. Double                                  0.1       N/A
Applied              CurrentDose
.dose
Number
Positive
Int

protocol             N/A                                       N/A                N/A       The Salesforce implementation of
Applied                                                                                     immunization.protocolApplied
.dose                                                                                       .doseNumber supports only integer values.
Number
String

protocol             PatientImmunization                       Double             0.1       N/A
Applied              .RecommendedDoses
.series
Doses
Positive
Int

protocol             N/A                                       N/A                N/A       The Salesforce implementation of
Applied                                                                                     immunization.protocolApplied
.series                                                                                     .seriesDoses supports only integer values
Doses                                                                                       .
String



SEE ALSO:
PatientImmunization



## InformationOrigin

The CRDMetricData FHIR resource maps to the AssessmentQuestionResponse object.



## FHIR V4.0 - Discovery Framework Data Model Mapping

Here’s how the fields defined by FHIR for InformationOrigin map to the fields in Salesforce.


## Table 23: InformationOrigin - Salesforce

informationorigin Salesforce Field                             Type           Salesforce    Notes
element                                                                       Cardinality
extension:source.value[x] AssessmentQuestionResponse.OriginType Picklist          0.1       N/A

<!-- page:1537 -->

AFLS Overview                                                                                     Mapping FHIR v4.0 to Salesforce Standard Objects



informationorigin Salesforce Field                                   Type                 Salesforce    Notes
element                                                                                   Cardinality
extension:author AssessmentQuestionResponse.ReviewerId Reference:                             0.1       N/A
Account,
Contact,
Healthcare
Provider, User

extension:author.extension:role AssessmentQuestionResponse.ReviewerRoleId Reference:          0.M       N/A
Code Set, Code
Set Bundle




## Location

The Location FHIR resource maps to the HealthcareFacility and Location objects in Salesforce.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Location map to the fields in the Salesforce.


## Table 24: Location - Salesforce

Location               Salesforce Field                              Type                 Salesforce    Notes
Resource                                                                                  Cardinality
identifier Identifier                                                Object                   0.M       The identifier information for a facility is
represented as Identifier records that
reference the facility record using their
Identifier.ParentRecordId field.

status                 Account.IsActive                              Boolean                  0.1       While FHIR defines location.status as a
code, the salesforce implementation is a boolean
field in the referenced account record.

operational N/A                                                      N/A                      N/A       Not supported
Status

name                   HealthcareFacility                            String                   0.1       N/A
.Name

alias                  N/A                                           N/A                      N/A       Not supported

description Location.Description String                                                       0.1       N/A

mode                   N/A                                           N/A                      N/A       Not supported

type                   HealthcareFacility.                           Lookup:                  0.1       While FHIR defines location.type as a
FacilityTypeId                                 CodeSet                           zero-to-many resource, Salesforce implements
Bundle                            HealthcareFacility.Facility
TypeId as a zero-to-one field.

<!-- page:1538 -->

AFLS Overview                                                 Mapping FHIR v4.0 to Salesforce Standard Objects




## Location       Salesforce Field      Type             Salesforce    Notes

Resource                                              Cardinality
telecom        ContactPointPhone     Object               0.M       The telecom information of the facility is stored
as ContactPointPhone records that
reference the account referenced by the facility
record.

address        ContactPointAddress   Object               0.M       The address information of the facility is stored as
ContactPointAddress records that
reference the account referenced by the facility
record.

physical       HealthcareFacility    Picklist             0.1       While FHIR defines location.physical
Type           .LocationType                                         Type as a code set bundle, Salesforce
implements HealthcareFacility
.LocationType as a picklist.

position       Location.Location     Geolocation          0.1       The location.position FHIR resource is
mapped to the Location.Location
salesforce field. This location (Salesforce object)
record is referenced by the healthcare facility
record using its HealthcareFacility
.LocationId lookup field.
position.altitude is not supported in
Location.Location.

managing     AccountAccount          Junction             0.1       The junction object that connects the facility
Organization Relation__c             Object                         account with the parent organization’s business
account.


## partOf         HealthcareFacility    Lookup:              0.1       N/A

.ParentFacilityId     Healthcare
Facility

hoursOf   TimeSlot.DayOfWeek         Picklist             0.1       While FHIR defines location.hoursOf
Operation                                                           Operation.daysOfWeek as a code set
.daysOf                                                             bundle, Salesforce implementation is a picklist.
Week
While the TimeSlot.DayOfWeek field is a
zero-to-one field, multiple time slot records can
reference the same operating hours record,
thereby supporting a zero-to-many reference for
location.hoursOfOperation
.daysOfWeek in the Salesforce
implementation.
The time slot record references the operating
hours record using its TimeSlot
.OperatingHoursId master-detail
reference field. This operating hours record is
referenced by the facility’s account record using

<!-- page:1539 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Location        Salesforce Field                 Type              Salesforce      Notes
Resource                                                           Cardinality
its Account.OperatingHoursId lookup
field. And finally, this account record is referenced
by the facility record using its Healthcare
Facility.AccountId master-detail
reference field.

hoursOf   N/A                                    N/A                   N/A         Not supported
Operation
.allDay

hoursOf   TimeSlot.StartTime                     Time                   0.1        The time slot record references the operating
Operation                                                                          hours record using its TimeSlot
.opening                                                                            .OperatingHoursId master-detail
Time                                                                               reference field. This operating hours record is
referenced by the facility’s account record using
its Account.OperatingHoursId lookup
field. And finally, this account record is referenced
by the facility record using its Healthcare
Facility.AccountId master-detail
reference field.

hoursOf   TimeSlot.EndTime                       Time                   0.1        The time slot record references the operating
Operation                                                                          hours record using its TimeSlot
.closing                                                                            .OperatingHoursId master-detail
Time                                                                               reference field. This operating hours record is
referenced by the facility’s account record using
its Account.OperatingHoursId lookup
field. And finally, this account record is referenced
by the facility record using its Healthcare
Facility.AccountId master-detail
reference field.

availability HealthcareFacility                  String                 0.1        N/A
Exceptions .Availability
Exceptions

endPoint        N/A                              N/A                   N/A         Not supported




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1540 -->

AFLS Overview                                                                    Mapping FHIR v4.0 to Salesforce Standard Objects




SEE ALSO:
HealthcareFacility



## Medication

The medication FHIR resource maps to the Medication object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for medication map to the fields in Salesforce.


## Table 25: medication - Salesforce

Medication       Salesforce Field                  Type              Salesforce        Notes
Resource                                                             Cardinality
identifier Identifier                              Object                0.M           The identifier information for a medication is
represented as Identifier records that
reference the medication record using their
Identifier.ParentRecordId field.

code             Medication.Medication Lookup:                            0.1          N/A
CodeId                CodeSet
Bundle

status           Medication.Status                 Picklist               1.1          While FHIR defines medication.status as
a code set bundle, the Salesforce implementation
of Medication.Status is picklist.

manufacturer Medication.                           Lookup:                0.1          N/A
ManufacturerId                        Account

<!-- page:1541 -->

AFLS Overview                                                    Mapping FHIR v4.0 to Salesforce Standard Objects




## Medication      Salesforce Field        Type             Salesforce    Notes

Resource                                                 Cardinality
form            Medication.Medication Lookup:                0.1       N/A
FormId                CodeSet
Bundle

amount          Medication.Quantity     Double               0.1       Because Salesforce doesn’t support a native
Numerator                                              quantity data type, the medication.amount field
is flattened into a set of numerator, denominator,
Medication.Quantity     Double               0.1
and unit fields.
Denominator


## Medication.Quantity     Lookup:              0.1

UnitId                   UnitOfMeasure

ingredient MedicinalIngredient          Lookup:              0.1       Zero-to-many value for
.item      .IngredientId                CodeSet                        medication.ingredient is implmeneted
Bundle,                        using the child object
Medication                     MedicinalIngredient. Each ingredient
record references the parent Medication record
ingredient MedicinalIngredient          Boolean              0.1
using the ParentRecordId field.
.isActive .IsActive


## ingredient MedicinalIngredient          Double               0.1

.strength .StrengthNumerator


## MedicinalIngredient     Lookup:              0.1

.StrengthNumerator      UnitOfMeasure
UnitId

MedicinalIngredient Double                   0.1
.StrengthDenominator


## MedicinalIngredient Lookup:                  0.1

.StrengthDenominator UnitOfMeasure
UnitId

batch      Medication.Batch             Int                  0.1       N/A
.lotNumber Number

batch       Medication.Expiration DateTime                   0.1       N/A
.expiration DateTime
Date



SEE ALSO:
Medication



## MedicationRequest

The MedicationRequest FHIR resource maps to the MedicationRequest object in Salesforce.

<!-- page:1542 -->

AFLS Overview                                                                 Mapping FHIR v4.0 to Salesforce Standard Objects




## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for MedicationRequest map to the fields in Salesforce.


## Table 26: MedicationRequest - Salesforce

Medication      Salesforce Field                  Type              Salesforce      Notes
Request                                                             Cardinality
Resource
identifier Identifier                             Object                0.M         The identifier information for a medication request
is represented as Identifier records that
reference the MedicationRequest record
using their Identifier.ParentRecord
Id field.

status          MedicationRequest.                Picklist               1.1        While FHIR defines MedicationRequest
Status                                                               .status as a code set bundle, the Salesforce
implementation of MedicationRequest.
Status is picklist.

status          MedicationRequest.                Lookup:                0.1        N/A
Reason          StatusReasonCodeId                CodeSet
Bundle

intent          MedicationRequest.                Picklist               1.1        While FHIR defines MedicationRequest
Type                                                                 .intent as a code set bundle, the Salesforce
implementation of MedicationRequest.
Type is picklist.

category        MedicationRequest.    Lookup:                            0.1        While FHIR defines MedicationRequest
Medication            CodeSet                                       .category as a zero-to-many resource, the
AdministrationContext Bundle                                        Salesforce implementation is zero-to-one.
Id

priority        MedicationRequest.                Picklist               0.1        While FHIR defines MedicationRequest
Priority                                                            .priority as a code set bundle, the
Salesforce implementation of Medication
Request.Priority is picklist.

doNot           MedicationRequest.Is Boolean                             0.1        N/A
Perform         Ignored

reported        MedicationRequest.Is Boolean                             0.1        N/A
.reported       SecondaryInformation
Boolean

reported        MedicationRequest.                Polymorphic            0.1        N/A
.reported       SecondarySourceId                 Lookup:
Reference                                         Account,
Healthcare
Provider

<!-- page:1543 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## Medication     Salesforce Field     Type             Salesforce    Notes

Request                                              Cardinality
Resource
medication MedicationRequest.       Lookup:              0.1       While the individual fields Medication
.medication MedicationCodeId        CodeSet                        Request.MedicationCodeId and
Codeable                            Bundle                         MedicationRequest.MedicationId
Concept                                                            are zero-to-one references, the set {
MedicationRequest.MedicationCode
medication MedicationRequest.       Lookup:              0.1
Id, MedicationRequest.Medication
.medication MedicationId            Medication
Id} is a one-to-one resource.
Reference

subject        MedicationRequest.   Master-Detail        1.1       Only references to patients are supported.
PatientId            Reference:
Account


## encounter MedicationRequest    Lookup:                   0.1       N/A

.ClinicalEncounterId Clinical
Encounter

supporting N/A                      N/A                  N/A       Not Supported
Information


## authored       MedicationRequest.   DateTime             0.1       N/A

On             PrescribedDate


## requester MedicationRequest.        Polymorphic          0.1       N/A

RequesterId               Lookup:
Account,
Healthcare
Provider,
Care
Registered
Device

performer MedicationRequest.        Polymorphic          0.1       Doesn’t support references to care teams.
PerformerId               Lookup:
Account,
Care
Registered
Device, and
Healthcare
Provider


## performer MedicationRequest.        Lookup:              0.1       N/A

Type      PerformerTypeId           CodeSet
Bundle

recorder       N/A                  N/A                  N/A       Not Supported

<!-- page:1544 -->

AFLS Overview                                                 Mapping FHIR v4.0 to Salesforce Standard Objects




## Medication     Salesforce Field      Type             Salesforce    Notes

Request                                               Cardinality
Resource
reason         MedicationRequest.    Lookup:              0.1       While FHIR defines MedicationRequest
Code           ReasonCodeId          CodeSet                        .reasonCode as a zero-to-many resource,
Bundle                         the Salesforce implementation is zero-to-one.

reason    MedicationRequest.         Polymorphic          0.1       While FHIR defines MedicationRequest
Reference ReasonReferenceId          Lookup:                        .reasonReference as a zero-to-many
Health                         resource, the Salesforce implementation is
Condition,                     zero-to-one.
Care
Observation

instantiates N/A                     N/A                  N/A       Not Supported
Canonical

instantiates N/A                     N/A                  N/A       Not Supported
Canonical

basedOn        MedicationRequest.    Lookup:              0.1       The medicationRequest.basedOn FHI
RelatedRequestId      Medication                     R resource is flattened to a set of medication
Request                        request and service request fields in the Salesforce
implementation.
MedicationRequest     Lookup:              0.1
Detail.Clinical       Clinical
ServiceRequestId      Service
Request


## group      MedicationRequest.        Lookup:              0.1       N/A

Identifier MedicationRequest         Identifier
GroupId

courseOf       MedicationRequest.    Picklist             0.1       While FHIR defines MedicationRequest
Therapy        TherapyDuration                                      .courseOfTherapyType as a code set
Type                                                                bundle, the Salesforce implementation of
MedicationRequest.Therapy
Duration is picklist.

insurance N/A                        N/A                  N/A       Not supported

note           N/A                   N/A                  N/A       Not supported

dosage         PatientMedication     Object               0.M       The dosage information for a medication request
Instruction    Dosage                                               is represented as PatientMedication
Dosage records that reference the
MedicationRequest record using their
PatientMedicationDosage.Parent
RecordId field.

dispense       MedicationRequest.    Double               0.1       Because Salesforce doesn’t support a native
Request        InitialFillQuantity                                  quantity data type, the implementation of
.initial                                                            medicationRequest.dispense

<!-- page:1545 -->

AFLS Overview                                             Mapping FHIR v4.0 to Salesforce Standard Objects




## Medication     Salesforce Field      Type         Salesforce    Notes

Request                                           Cardinality
Resource
Fill      MedicationRequest          Lookup:          0.1       Request.initialFill.quantity is
.quantity .FillQuantityUnitId        UnitOf                     flattened into a set of quantity and unit fields.
Measure

dispense       MedicationRequest.    Double           0.1       Because Salesforce doesn’t support a native
Request        InitialFillDuration                              duration data type, the implementation of
.initial                                                        medicationRequest.dispense
MedicationRequest     Lookup:          0.1
Fill                                                            Request.initialFill.duration is
.FillDurationUnitId   UnitOf
.duration                                                       flattened into a set of duration and unit fields.
Measure

dispense  MedicationRequest.         Double           0.1       Because Salesforce doesn’t support a native
Request   DispenseInterval                                      duration data type, the implementation of
.dispense                                                       medicationRequest.dispense
MedicationRequest.         Lookup:          0.1
Interval                                                        Request.dispenseInterval is flattened
DispenseIntervalUnit       UnitOf
into a set of interval and unit fields.
Id                         Measure

dispense  MedicationRequest.    DateTime              0.1       Because Salesforce doesn’t support a native period
Request   PrescriptionPeriod                                    data type, the implementation of medication
.validity Start                                                 Request.dispenseRequest
Period                                                          .validityPeriod is flattened into a set of
MedicationRequest.    DateTime              0.1
start and end dates.
PrescriptionPeriodEnd


## dispense  MedicationRequest.         Double           0.1       N/A

Request   RefillsAllowed
.numberOf
Repeats
Allowed

dispense  MedicationRequest.         Double           0.1       Because Salesforce doesn’t support a native
Request   RefillQuantity                                        quantity data type, the medicationRequest
.quantity                                                       .dispenseRequest.quantity is
MedicationRequest          Lookup:          0.1
flattened into a set of quantity and unit fields.
.FillQuantityUnitId        UnitOf
Measure

dispense       MedicationRequest.    Double           0.1       Because Salesforce doesn’t support a native
Request        RefillDuration                                   duration data type, the medication
.expected                                                       Request.dispenseRequest
MedicationRequest     Lookup:          0.1
Supply                                                          .expectedSupplyDuration is flattened
.FillDurationUnitId   UnitOf
Duration                                                        into a set of duration and unit fields.
Measure


## dispense   MedicationRequest.        Lookup:          0.1       N/A

Request    DispenserId               Account
.performer

<!-- page:1546 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Medication      Salesforce Field                  Type             Salesforce      Notes
Request                                                            Cardinality
Resource
substitution MedicationRequest.Can Boolean                              0.1        N/A
.allowed     Substitute
.allowed
Boolean

substitution MedicationRequest.                   Lookup:               0.1        0.1
.allowed     AllowedSubstitution                  CodeSet
.allowed     TypeCodeId                           Bundle
Codeable
Concept

substitution MedicationRequest.                   Lookup:               0.1        N/A
.reason      SubstitutionReason                   CodeSet
CodeId                               Bundle

prior        MedicationRequest.   Lookup:                               0.1        N/A
Prescription PreviousPrescription Medication
Id                   Request

detected        N/A                               N/A                   N/A        Not supported
Issue

event           N/A                               N/A                   N/A        Not supported
History



SEE ALSO:
MedicationRequest



## MedicationStatement

The medicationStatement FHIR resource maps to the MedicationStatement object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for medicationStatement map to the fields in Salesforce.


## Table 27: MedicationStatement - Salesforce

Medication      Salesforce Field                  Type             Salesforce      Notes
Statement                                                          Cardinality
Resource
identifier Identifier                             Object                0.M        The identifier information for a medication
statement is represented as Identifier
records that reference the Medication
Statement record using their Identifier
.ParentRecordId field.

<!-- page:1547 -->

AFLS Overview                                                  Mapping FHIR v4.0 to Salesforce Standard Objects




## Medication     Salesforce Field        Type            Salesforce    Notes

Statement                                              Cardinality
Resource
basedOn        MedicationStatement Lookup:                 0.1       While FHIR defines medicationStatement
.MedicationRequestId Medication                       .basedOn as a zero-to-many resource, the
Request                          Salesforce implementation of Medication
Statement.MedicationRequestId is
zero-to-one.
The Salesforce implementation doesn’t support
references to care plan or service request records
.

partOf         MedicationStatement     Lookup:             0.1       The Salesforce implementation of medication
.ParentMedication       Medication                    Request.partOf is flattened into three
StatementId             Statement                     separate references.
MedicationStatement     Lookup:             0.1       References to medication administration and
.ProcedureId            Patient                       medication dispense records are not supported.
Medical
While FHIR defines medicationStatement
Procedure
.partOf as a zero-to-many resource, the
MedicationStatement     Lookup: Care        0.1       Salesforce implementation is zero-to-one for each
.CareObservationId      Observation                   of the flattened fields.

status         MedicationStatement. Picklist               1.1       While FHIR defines MedicationStatement
Status                                                 .status as a code set bundle, the Salesforce
implementation of MedicationStatement
.Status is picklist.


## status         MedicationStatement. Lookup:                0.1       N/A

Reason         StatusReasonCodeId   CodeSet
Bundle

category       MedicationStatement     Picklist            0.1       While FHIR defines MedicationStatement
.DeliverySetting                                      .category as a code set bundle, the
Salesforce implementation is a picklist.

medication MedicationStatement         Lookup:             0.1       While the individual fields Medication
.medication .MedicationCodeId          CodeSet                       Statement.MedicationCodeId and
Codeable                               Bundle                        MedicationStatement
Concept                                                              .MedicationId are zero-to-one references,
the set {MedicationStatement
medication MedicationStatement         Lookup:             0.1
.MedicationCodeId, Medication
.medication .MedicationId              Medication
Statement.MedicationId} is a
Reference
one-to-one resource.

subject        MedicationStatement     Master-Detail       1.1       Only references to patients are supported.
.PatientId              Reference:
Account

<!-- page:1548 -->

AFLS Overview                                                 Mapping FHIR v4.0 to Salesforce Standard Objects




## Medication     Salesforce Field      Type             Salesforce    Notes

Statement                                             Cardinality
Resource
context        MedicationStatement Lookup:                0.1       Only references to encounters are supported.
.ClinicalEncounterId Clinical
Encounter

effective MedicationStatement        DateTime             0.1       The MedicationStatement.StartDate
.effective .StartDateTime                                           Time field is used as both the Salesforce
DateTime                                                            counterpart for medicationStatement
.effective.effectiveDateTime and
the start date field for medication
Statement.effective.effective
Period.

effective MedicationStatement        DateTime             0.1       Because Salesforce doesn’t support a native period
.effective .StartDateTime                                           data type, the implementation of medication
Period                                                              Statement.effective.effective
MedicationStatement       DateTime             0.1
Period is flattened into a set of start and end
.EndDateTime
dates.


## date           MedicationStatement   DateTime             0.1       N/A

Asserted       .AssertionDateTime


## information MedicationStatement. Polymorphic              0.1       N/A

Source      StatementSourceId    Lookup:
Account,
Healthcare
Provider

derived        N/A                   N/A                  N/A       Not supported
From

reason         MedicationStatement   Lookup:              0.1       While FHIR defines MedicationStatement
Code           .MedicationReason     CodeSet                        .reasonCode as a zero-to-many resource,
CodeId                Bundle                         the Salesforce implementation is zero-to-one.

reason    MedicationStatement        Polymorphic          0.1       While FHIR defines MedicationStatement
Reference .MedicationReasonId        Lookup:                        .reasonReference as a zero-to-many
Health
resource, the Salesforce implementation is
Condition,                     zero-to-one.
Care
Observation                    Only references to condition and observation
records are supported.

note           N/A                   N/A                  N/A       Not supported

dosage         PatientMedication     Object               0.M       The dosage information for a medication
Dosage                                               statement is represented as Patient
MedicationDosage records that reference
the MedicationStatement record using

<!-- page:1549 -->

AFLS Overview                                                                     Mapping FHIR v4.0 to Salesforce Standard Objects



Medication       Salesforce Field                  Type              Salesforce         Notes
Statement                                                            Cardinality
Resource
their PatientMedicationDosage
.ParentRecordId field.



SEE ALSO:
MedicationStatement



## Observation

The observation FHIR resource maps to the CareObservation and CareObservationComponent objects in Salesforce
.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for observation map to the fields in Salesforce.


## Table 28: observation - Salesforce

Observation Salesforce Field                       Type              Salesforce         Notes
Resource                                                             Cardinality
identifier N/A                                     N/A                    N/A           Not supported

basedOn          CareObservation.Based Polymorphic                        0.1           While FHIR defines observation.basedOn
OnId                  Lookup:                                          as a zero-to-many reference, the Salesforce
Medication                                       implementation is a zero-to-one text field.
Request,
Clinical                                         Only references to medication request and clinical
Service                                          service request records are supported.
Request

partOf           CareObservation.Part Polymorphic                         0.1           While FHIR defines observation.partOf
OfId                 Lookup:                                           as a zero-to-many reference, the Salesforce
Medication                                        implementation is a zero-to-one text field.
Statement,
Patient                                           Only references to medication statement, patient
Immunization,                                     immunization, and patient medical procedure
Patient                                           records are supported.
Medical
Procedure

status           CareObservation.                  Picklist               1.1           While FHIR defines observation.status
ObservationStatus                                                      as a reference to code set bundle, the Salesforce
implementation is a picklist.

category         CareObservation                   Picklist               0.1           While FHIR defines observation
.Category                                                              .category as a zero-to-many reference to

<!-- page:1550 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## Observation Salesforce Field        Type             Salesforce    Notes

Resource                                             Cardinality
code set bundle, the Salesforce implementation
is a zero-to-one picklist.

code           CareObservation      Lookup:              1.1       While FHIR defines observation.code as
.CodeId              CodeSet                        a one-to-one reference to code set bundle,
Salesforce implements this as three separate
CareObservation      Lookup:              0.1
CodeSet reference fields. The first one is a
.AdditionalCode1Id   CodeSet
one-to-one field, while the other two are
CareObservation      Lookup:              0.1       zero-to-one fields.
.AdditionalCode2Id   CodeSet

subject        CareObservation.     Master-Detail:       1.1       The Salesforce implementation of
ObservedSubjectId    Account                        observation.subject supports
references to only patients.

focus          N/A                  N/A                  N/A       Not supported


## encounter CareObservation           Lookup:              0.1       N/A

.EncounterId              Clinical
Encounter


## effective CareObservation           DateTime             0.1       N/A

.effective .EffectiveDateTime
DateTime

effective CareObservation           DateTime             0.1       Because Salesforce doesn’t support a native period
.effective .EffectiveDateTime                                      data type, the observation.effective
Period                                                             .effectivePeriod field is flattened into a
CareObservation.End      DateTime             0.1
set of effective date and end date fields.
DateTime

effective N/A                       N/A                  N/A       Not supported
.effective
Timing

effective N/A                       N/A                  N/A       Not supported
.effective
Instant

issued         CareObservation      DateTime             0.1       Because Salesforce doesn’t support a native
.IssuedDateTime                                     instant data type, the observation
.issued FHIR resource is implemented as a
date time field in Salesforce.

performer CareObservation.          Polymorphic          0.1       While FHIR defines observation
ObserverId                Lookup:                        .performer as a zero-to-many resource, the
Account,
Salesforce implementation is a zero-to-one
Healthcare                     reference to Account and Healthcare
Provider                       Provider.
References to care teams are not supported.

<!-- page:1551 -->

AFLS Overview                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




## Observation Salesforce Field         Type                 Salesforce    Notes

Resource                                                  Cardinality
results     CareObservation          Lookup: Care             0.1       While FHIR defines observation.results
Interpreter .InterpretedById         Performer                          Interpreter as a zero-to-many resource,
the Salesforce implementation is a zero-to-one
reference to CarePerformer.

value          CareObservation.      Static Picklist          0.1       A Salesforce-original field that determines
ObservedValueType                                        whether the value stored in Care
Observation.ObservedValue
Numerator and CareObservation.
ObservedValueDenominator is a range,
ratio, or quantity. This field is used only when the
data entered for observation.value is
one these data types.

CareObservation.      Double                   0.1       Because Salesforce doesn’t support native range,
ObservedValue                                            ratio, and quantity data types, the
Numerator                                                 observation.value FHIR resource is
CareObservation.      Double                   0.1       flattened to a set of numerator, denominator, and
ObservedValue                                            unit fields for this type of data.
Denominator                                              The Salesforce implementation of
observation.value doesn’t support
CareObservation.      Lookup:                  0.1
observation.value.valueSample
ObservedValueUnitId   UnitOf
Data and observation.value.value
Measure
Time.
CareObservation.ObservedValue
UnitId is a duplicate field that stores the same
information as CareObservation.UnitOf
MeasureId. Use only one of these two fields
to specify the unit of a quantity value.


## CareObservation.      Lookup:                  0.1       N/A

ObservedValue         CodeSet
Denominator           Bundle

CareObservation.      Double                   0.1       N/A
NumbericValue

CareObservation.      String                   0.1       N/A
ObservedValueText

CareObservation       Boolean                  0.1       CareObservation.IsObserved is a
.IsOutcomePositive                                       duplicate field that can store the same
information. Use only one of these two fields.

CareObservation.     DateTime                  0.1       CareObservation.ObservationStart
ObservationStartTime                                     Time is used for both observation

<!-- page:1552 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## Observation Salesforce Field           Type          Salesforce    Notes

Resource                                             Cardinality
CareObservation.        DateTime          0.1       .component.value.valueDateTime
ObservationEndTime                                  and observation.component.value
.valuePeriod.
Because Salesforce doesn’t support a native
period data type, the observation.value
.valuePeriod FHIR resource is flattened to
a set of start and end dates.

data           N/A                     N/A               N/A       Not supported
Absent
Reason

interpretation CareObservation.Value Picklist            0.1       While FHIR defines observation
Interpretation                                      .interpretation as a zero-to-many code
set bundle, the Salesforce implementation is a
zero-to-one picklist.

note           N/A                     N/A               N/A       Not supported


## bodySite       CareObservation.Body Lookup:              0.1       N/A

SiteId               CodeSet
Bundle


## method         CareObservation         Lookup:           0.1       N/A

.MethodId               CodeSet
Bundle

specimen       N/A                     N/A               N/A       Not supported

device         CareObservation         Lookup:           0.1       References to device metrics records aren’t
.DeviceId               Asset                       supported.

reference CareObservation.Lower Double                   0.1       Because Salesforce doesn’t support a native
Range.low BaselineValue                                            quantity data type, the observation
.referenceRange.low FHIR resource is
CareObservation.        Lookup:           0.1
flattened to a set of value and unit fields for this
BaselineUnitId          UnitOf
type of data.
Measure

reference CareObservation.Upper Double                   0.1       Because Salesforce doesn’t support a native
Range     BaselineValue                                            quantity data type, the observation
.high                                                              .referenceRange.high FHIR resource is
CareObservation.      Lookup:                  0.1
flattened to a set of value and unit fields for this
BaselineUnitId        UnitOfMeasure
type of data.

reference N/A                          N/A               N/A       Not supported
Range
.type

<!-- page:1553 -->

AFLS Overview                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




## Observation Salesforce Field         Type                 Salesforce    Notes

Resource                                                  Cardinality
reference N/A                        N/A                      N/A       Not supported
Range
.appliesTo

reference N/A                        N/A                      N/A       Not supported
Range.age


## reference CareObservation.           String                   0.1       N/A

Range     BaselineValueText
.text

hasMember CareObservation       Lookup: Care                  0.1       While FHIR defines observation
.RelatedObservationId Observation                             .hasMember as a zero-to-many resource, the
Salesforce implementation is zero-to-one.
Only references to observation records are
supported.

derived        CareObservation       Lookup: Care             0.1       While FHIR defines observation
From           .DerivationSourceId   Observation,                       .derivedFrom as a zero-to-many resource,
Diagnostic                         the Salesforce implementation is zero-to-one.
Summary

component CareObservation            Object                   0.M       The component information for a care observation
Component                                                     is represented as CareObservation
Component records that reference the Care
Observation record using their
Identifier.CareObservationId field
.


## component CareObservation            Lookup:                  1.1       N/A

.code     Component.Component        CodeSet
TypeCodeId                 Bundle

component CareObservation            Static Picklist          0.1       A Salesforce-original field that determines
.value    Component.ValueType                                           whether the value stored in Care
ObservationComponent.Observed
ValueNumerator and Care
ObservationComponent.Observed
ValueDenominator is a range, ratio, or
quantity. This field is used only when the data
entered for observation.component
.value is one these data types.

CareObservation       Double                   0.1       Because Salesforce doesn’t support native range,
Component.Observed                                       ratio, and quantity data types, the
ValueNumerator                                           observation.component.value FHIR

<!-- page:1554 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## Observation Salesforce Field          Type         Salesforce    Notes

Resource                                           Cardinality
CareObservation        Double           0.1       resource is flattened to a set of numerator,
Component.Observed                                denominator, and unit fields for this type of data
ValueDenominator                                  .

CareObservation        Lookup:          0.1       The Salesforce implementation of
Component.Observed     UnitOf                     observation.component.value
ValueUnitId            Measure                    doesn’t support observation.component
.value.valueSampleData and
observation.component.value
.valueTime.


## CareObservation        Lookup:          0.1       N/A

Component.Observed     CodeSet
ValueCodeId            Bundle

CareObservation        Double           0.1       N/A
Component.Numeric
Value

CareObservation        String           0.1       N/A
Component.Observed
ValueText

CareObservation      Boolean            0.1       N/A
Component.IsObserved

CareObservation       DateTime          0.1       CareObservationComponent.
Component.Observation                             ObservationStartTime is used for both
StartTime                                         observation.component.value
CareObservation       DateTime          0.1       .valueDateTime and observation
Component.Observation                             .component.value.valuePeriod.
EndTime                                           Because Salesforce doesn’t support a native
period data type, the observation
.component.value.valuePeriod FHIR
resource is flattened to a set of start and end dates
.

component CareObservation       String                 0.1       While FHIR defines observation
.data     Component.MissingData                                  .component.dataAbsentReason as a
Absent    Reason                                                 code set bundle reference, the Salesforce
Reason                                                           implementation is a text field.

component CareObservation             Lookup:          0.1       While FHIR defines observation
.interpretation Component.Value       CodeSet                    .component.interpretation as a code
Interpretation        Bundle                     set bundle reference, the Salesforce
implementation is a picklist.

<!-- page:1555 -->

AFLS Overview                                                                     Mapping FHIR v4.0 to Salesforce Standard Objects



Observation Salesforce Field                       Type              Salesforce      Notes
Resource                                                             Cardinality
component CareObservation                          Double                 0.1        Because Salesforce doesn’t support a native
.reference Component.Lower                                                           quantity data type, the observation
Range.low BaselineValue                                                                  .component.referenceRange.low
FHIR resource is flattened to a set of value and
CareObservation                   Lookup:                0.1
unit fields for this type of data.
Component.Baseline                UnitOf
UnitId                            Measure

component CareObservation                          Double                 0.1        Because Salesforce doesn’t support a native
.reference Component.Upper                                                           quantity data type, the observation
Range      BaselineValue                                                                 .component.referenceRange.high
.high                                                                                FHIR resource is flattened to a set of value and
CareObservation                         Lookup:                0.1
unit fields for this type of data.
Component.Baseline                      UnitOf
UnitId                                  Measure

component N/A                                      N/A                    N/A        Not supported
.reference
Range
.type

component N/A                                      N/A                    N/A        Not supported
.reference
Range
.applies
To

component N/A                                      N/A                    N/A        Not supported
.reference
Range.age

component CareObservation                          String                 0.1        N/A
.reference Component.Baseline
Range      ValueText
.text



Note: The fields CareObservation.IsOutcomePositive and CareObservation.UnitOfMeasureId don’t
have FHIR-defined validation rules built into them because these fields are used in other features and data models. You can define
your own custom validation rules on them based on your business requirements.



## Organization

The Organization FHIR resource maps primarily to the Account object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Organization map to the fields in Salesforce.

<!-- page:1556 -->

AFLS Overview                                                      Mapping FHIR v4.0 to Salesforce Standard Objects



## Table 29: Organization - Salesforce

Organization Salesforce Field           Type              Salesforce    Notes
Resource                                                  Cardinality
identifier Identifier                   Object                0.M       The identifier information for an organization is
represented as Identifier records that
reference the organization record using their
Identifier.ParentRecordId field.

active         Account.IsActive         Boolean               0.1       N/A

type           Account.Type             Picklist              0.1       While FHIR defines account.type as a
zero-to-many code set bundle reference, its
Salesforce implementation is a zero-to-one picklist
.

name           Account.Name             String                0.1       N/A

alias          N/A                      N/A                   N/A       Not supported

telecom        ContactPointPhone        Object                0.M       The telecom information for an organization is
represented as ContactPointPhone records
that reference the organization record using their
ContactPointPhone.ParentId field.

address        ContactPointAddress      Object                0.M       The address information for an organization is
represented as ContactPointAddress
records that reference the organization record
using their ContactPointAddress
.ParentId field.

contact        AccountContact           Lookup:               0.M       Contacts are connected to organizations using
Relation.ContactId       Contact                         the AccountContactRelation junction
object. The AccountContactRelation
.AccountId field references the organization’s
account record, and the AccountContact
Relation.ContactId field references the
contact record of the contact’s person account.

contact       AccountContact            Multi-Select          0.M       While FHIR defines organization
.relationship Relation.Roles            picklist                         .contact.purpose as a code set bundle,
its Salesforce implementation is a picklist.

contact        PersonName               Object                0.M       The name information for a contact is represented
.name                                                                   as PersonName records that reference the
contact’s person account using their Person
Name.ParentRecordId field.
While FHIR defines patient.contact
.name as a zero-to-one resource, the Salesforce
implementation can support zero-to-many
references.

<!-- page:1557 -->

AFLS Overview                                                                 Mapping FHIR v4.0 to Salesforce Standard Objects



Organization Salesforce Field                       Type              Salesforce    Notes
Resource                                                              Cardinality
contact          ContactPointPhone                  Object                 0.M      The telecom information for a contact is
.telecom                                                                            represented as ContactPointPhone records
that reference the contact’s person account record
using their ContactPointPhone
.ParentId field.

contact          ContactPointAddress                Object                 0.M      The address information for a contact is
.address                                                                            represented as ContactPointAddress
records that reference the contact’s person
account record using their ContactPoint
Address.ParentId field.
While FHIR defines patient.contact
.address as a zero-to-one resource, the
Salesforce implementation can support
zero-to-many references.

contact   N/A                                       N/A                    N/A      Not supported
.endPoint




## Patient

The Patient FHIR resource maps to the Account and Contact objects in Salesforce. Patients are modeled using Person Accounts.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Patient map to the fields in Salesforce.


## Table 30: Patient - Salesforce

Patient          Salesforce Field                   Type              Salesforce    Notes
Resource                                                              Cardinality
identifier Identifier                               Object                 0.M      The identifier information for a patient is
represented as Identifier records that
reference the patient record using their
Identifier.ParentRecordId field.

active           Account.IsActive                   Boolean                0.1      N/A

name             PersonName                         Object                 0.M      The name information for a patient is represented
as PersonName records that reference the
patient record using their PersonName
.ParentRecordId field.

telecom          ContactPointPhone                  Object                 0.M      The telecom information for a patient is
represented as ContactPointPhone records
that reference the patient record using their
ContactPointPhone.ParentId field.

<!-- page:1558 -->

AFLS Overview                                                      Mapping FHIR v4.0 to Salesforce Standard Objects




## Patient        Salesforce Field        Type                Salesforce    Notes

Resource                                                   Cardinality
gender         Contact.Gender          Picklist                0.1       While FHIR defines patient.gender as a
code set, its Salesforce implementation is a picklist
.

birthDate Contact.Birthdate            Date                    0.1       N/A

deceased  N/A                          N/A                    N/A        Not supported
.deceased
Boolean

deceased  Contact.DeceasedDate DateTime                        0.1       While FHIR defines patient.deceased as
.deceased                                                                either a boolean or a date, Salesforce supports
DateTime                                                                 only a date.

address        ContactPointAddress     Object                 0.M        The address information for a patient is
represented as ContactPointAddress
records that reference the patient record using
their ContactPointAddress.ParentId
field.

marital        Contact.MaritalStatus Picklist                  0.1       While FHIR defines patient.marital
Status                                                                    Status as a code set bundle, its Salesforce
implementation is a picklist.

multiple  N/A                          N/A                    N/A        Not supported
Birth
.multiple
Birth
Boolean

multiple  Contact.SequenceIn           Double                  0.1       While FHIR defines patient.multiple
Birth     MultipleBirth                                                  Birth as either a boolean or an integer,
.multiple                                                                Salesforce supports only an integer.
Birth
Integer

photo          N/A                     N/A                    N/A        Not supported

contact        ContactContact          Lookup:                0.M        Contacts are connected to patients using the
Relation__c              Contact                          ContactContactRelation__c junction
.RelatedContact__c                                        object. The ContactContact
Relation__c.Contact__c field
references the contact record of the patient’s
person account, and the ContactContact
Relation__c.RelatedContact__c
field references the contact record of the contact’s
person account.

contact       ContactContact           Lookup:                0.M        While FHIR defines patient.contact
.relationship Relation__c.Role__c      ReciprocalRole__c                 .relationship as a code set bundle, its

<!-- page:1559 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## Patient        Salesforce Field      Type          Salesforce    Notes

Resource                                           Cardinality
Salesforce implementation is a reference to
ReicprocalRole__c.

contact        PersonName            Object            0.M       The name information for a contact is represented
.name                                                            as PersonName records that reference the
contact record of the contact’s person account
using their PersonName.Parent
RecordId field.
While FHIR defines patient.contact
.name as a zero-to-one resource, the Salesforce
implementation can support zero-to-many
references.

contact        ContactPointPhone     Object            0.M       The telecom information for a contact is
.telecom                                                         represented as ContactPointPhone records
that reference the contact’s person account record
using their ContactPointPhone
.ParentId field.

contact        ContactPointAddress   Object            0.M       The address information for a contact is
.address                                                         represented as ContactPointAddress
records that reference the contact’s person
account record using their ContactPoint
Address.ParentId field.
While FHIR defines patient.contact
.address as a zero-to-one resource, the
Salesforce implementation can support
zero-to-many references.

contact        Contact.Gender        Picklist          0.1       While FHIR defines patient.contact
.gender                                                           .gender as a code set, its Salesforce
implementation is a picklist.

contact       N/A                    N/A               N/A       Not supported
.organization

contact        ContactContact        Date              0.1       Because Salesforce doesn’t support a native period
.period        Relation__c                                       data type, the patient.contact.period
.StartDate__c                                     FHIR resource is flattened to a set of from and to
dates.
ContactContact        Date              0.1
Relation__c
.EndDate__c

communication PersonLanguage         Object            0.M       The language information for a patient is
represented as PersonLanguage records

<!-- page:1560 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Patient         Salesforce Field                 Type              Salesforce      Notes
Resource                                                           Cardinality
that reference the patient record using their
PersonLanguage.IndividualId field.

communication PersonLanguage.                    Picklist               0.1        While FHIR defines patient
.language Language                                                                 .communication.language as a code
set bundle, its Salesforce implementation is a
picklist.

communication PersonLanguage.Rank                Double                 0.1        While FHIR defines patient
.preferred                                                                          .communication.preferred as a
boolean, its Salesforce implementation is an
integer field that ranks the degree of preference.

general      ContactContact                      Lookup:                0.M        Practitioners are connected to patients using the
Practitioner Relation__c                          Contact                          ContactContactRelation__c junction
.RelatedContact__c                                                    object. The ContactContact
Relation__c.Contact__c field
references the contact record of the patient’s
person account, and the ContactContact
Relation__c.RelatedContact__c
field references the contact record of the
practitioner’s person account.
Salesforce doesn't support PractitionerRole type
values for patient.generalPractitioner

managing     AccountContact                      Lookup:                0.M        Managing organizations are connected to patients
Organization Relation.AccountId                   Account                          using the AccountContactRelation
junction object. The AccountContact
Relation.AccountId field references the
account record of the patient’s organization, and
the AccountContactRelation
.ContactId field references the contact
record of the patient’s person account.

link            N/A                              N/A                   N/A         Not supported




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1561 -->

AFLS Overview                                                                      Mapping FHIR v4.0 to Salesforce Standard Objects





## Practitioner

The Practitioner FHIR resource maps to the HealthcareProvider object and person accounts in Salesforce.
The Practitioner resource in FHIR is represented as a combination of HealthcareProvider records and person accounts
in Salesforce, where the HealthcareProvider record is the base. The person account is associated to the
HealthcareProvider record by referencing the person account record using the AccountId field on
HealthcareProvider.

Note: If your implementation models providers as contacts instead of person accounts, you can’t associate the fields mapped to
Account to your providers. You can instead associate your HealthcareProvider record to the Contact record using the
PractitionerId field on HealthcareProvider.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Practitioner map to the fields in Salesforce.


## Table 31: Practitioner - Salesforce

Practitioner     Salesforce Field                   Type              Salesforce         Notes
Resource                                                              Cardinality
identifier Identifier                               Object                 0.M           The identifier information for a
documentReference is represented as
Identifier records that reference the
HealthcareProvider record using their
Identifier.ParentRecordId field.

active           Account.IsActive                   Boolean                0.1           The practitioner.active field is
mapped to the account record of the provider’s
person account. This account record is referenced
using the HealthcareProvider
.AccountId field.
If your Implementation models providers as
Contacts instead of Person Accounts, then you

<!-- page:1562 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## Practitioner   Salesforce Field      Type          Salesforce    Notes

Resource                                           Cardinality
can’t map practitioner.active to your
providers.

name           PersonName            Object            0.M       The name information for a practitioner is
represented as PersonName records that
reference the practitioner’s person account record
using their PersonName.Parent
RecordId field.

telecom        ContactPointPhone     Object            0.M       The telecom information for a practitioner is
represented as ContactPointPhone records
that reference the account record of the
practitioner’s person account using the
ContactPointPhone.ParentId field.
If your Implementation models providers as
Contacts instead of Person Accounts, then you
can’t map practitioner.telecom to your
providers.

address        ContactPointAddress   Object            0.M       The address information for a practitioner is
represented as ContactPointAddress
records that reference the account record of the
practitioner’s person account using the
ContactPointAddress.ParentId field
.
If your Implementation models providers as
Contacts instead of Person Accounts, then you
can’t map practitioner.address to your
providers.

gender         Contact.Gender        Picklist          0.1       While FHIR defines practitioner.gender
as a code set, its Salesforce implementation is a
picklist.
The practitioner’s gender is mapped to the
contact record of their person account. This
contact record is referenced using the
HealthcareProvider
.PractitionerId field on
HealthcareProvider.

birthDate Contact.Birthdate          Date              0.1       N/A

photo          N/A                   N/A               N/A       Not supported

qualification BoardCertification     Object            0.M       The qualification information for a practitioner is
represented as BoardCertification

<!-- page:1563 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Practitioner    Salesforce Field                 Type              Salesforce      Notes
Resource                                                           Cardinality
records that reference the practitioner’s
HealthcareProvider record using their
BoardCertification.Healthcare
ProviderId field.

qualification Identifier                         Object                 0.M        The identifier information for a qualification is
.identifier                                                                        represented as Identifier records that
reference the BoardCertification record using their
Identifier.ParentRecordId field.

qualification BoardCertification                 Picklist               0.1        While FHIR defines practitioner
.code         .CertificationType                                                    .qualification.code as a code set
bundle, its Salesforce implementation is a picklist
.

qualification BoardCertification                 Date                   0.1        Because Salesforce doesn’t support a native period
.period       .EffectiveFrom                                                       data type, the practitioner
.qualification.period FHIR resource
BoardCertification               Date                   0.1
is flattened to a set of from and to dates.
.EffectiveTo

qualification BoardCertification                 String                 0.1        N/A
.issuer       .BoardName

communication PersonLanguage                     Object                 0.M        The language information for a practitioner is
represented as PersonLanguage records
that reference the practitioner’s person account
using their PersonLanguage
.IndividualId field.
While FHIR defines practitioner
.communication as a code set bundle, the
Salesforce implementation is a reference to
PersonLanguage.




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1564 -->

AFLS Overview                                                                   Mapping FHIR v4.0 to Salesforce Standard Objects





## PractitionerRole

The practitionerRole FHIR resource maps to the HealthcarePractitionerFacility and
CareProviderFacilitySpecialty objects in Salesforce.
The practitionerRole resource in FHIR is represented as a combination of HealthcarePractitionerFacility and
CareProviderFacilitySpecialty records, where the HealthcarePractitionerFacility record is the base.
The CareProviderFacilitySpecialty record is associated to the HealthcarePractitionerFacility record
by referencing the HealthcarePractitionerFacility record using the PractitionerFacilityId field on
CareProviderFacilitySpecialty.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for PractitionerRole map to the fields in Salesforce.


## Table 32: PractitionerRole - Salesforce

Practitioner            Salesforce Field                            Type                     Salesforce Notes
Resource                                                                                     Cardinality
identifier              Identifier                                  Object                     0.M    The identifier information for a
practitionerRole is represented as
Identifier records that
reference the HealthcarePractitioner
Facility record using their
Identifier.Parent
RecordId field.

active                  HealthcarePractitioner                      Boolean                    0.1    N/A
Facility.IsActive

period                  HealthcarePractitioner                      Date                       0.1    Because Salesforce doesn’t support
Facility.EffectiveFrom                                                        a native period data type, the
practitionerRole
HealthcarePractitioner                      Date                       0.1
.period FHIR resource is
Facility.EffectiveTo
flattened to a set of from and to
dates.

<!-- page:1565 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Practitioner            Salesforce Field           Type               Salesforce Notes
Resource                                                              Cardinality
practitioner            HealthcarePractitioner     Lookup:              0.1    N/A
Facility.Healthcare         Healthcare
ProviderId                  Provider

organization            HealthcarePractitioner     Lookup: Account      0.1    N/A
Facility.AccountId

code                    CareProviderFacility       Picklist             0.M    While FHIR defines
Specialty.SpecialtyRole                                practitionerRole.code
as a code set bundle, its Salesforce
implementation is a picklist.
Zero-to-many values can be
associated by creating multiple
CareProviderFacility
Specialty records that
reference a Healthcare
PractitionerFacility
record. However, a single
CareProviderFacility
Specialty record can have
only one combination of role and
specialty.

specialty               CareProviderFacility       Lookup:              0.M    While FHIR defines
Specialty.SpecialtyId       CareSpecialty              practitionerRole.code
as a code set bundle, its Salesforce
implementation is a
CareSpecialty reference.
Zero-to-many values can be
associated by creating multiple
CareProviderFacility
Specialty records that
reference a Healthcare
PractitionerFacility
record. However, a single
CareProviderFacility
Specialty record can have
only one combination of role and
specialty.

location                HealthcarePractitioner     Lookup:              0.1    The Salesforce implementation
Facility.Healthcare         Healthcare                 supports only one
FacilityId                  Facility                   practitionerRole
.location reference for each
practitioner role.

<!-- page:1566 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Practitioner            Salesforce Field                         Type                 Salesforce Notes
Resource                                                                              Cardinality
healthcare              N/A                                      N/A                       N/A   Not supported
Service

telecom                 N/A                                      N/A                       N/A   Not supported

availableTime           HealthcarePractitioner    Operating                                0.M   Even though only one
Facility.OperatingHoursId Hours                                          OperatingHours record can
be referenced from a
HealthcarePractitioner
Facility record, multiple time
slots can be added to that
OperatingHours record. As
such, zero-to-many available time
values can be added to a single
HealthcarePractitioner
Facility record through a
single OperatingHours
reference.

notAvailable            N/A                                      N/A                       N/A   Not supported

availability            HealthcarePractitioner                   String                    0.1   N/A
Exceptions              Facility.Avialability
Exceptions

endPoint                N/A                                      N/A                       N/A   Not supported




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1567 -->

AFLS Overview                                                                   Mapping FHIR v4.0 to Salesforce Standard Objects





## Procedure

The procedure FHIR resource maps to the PatientMedicalProcedure and PatientMedicalProcedureDetail
objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Procedure map to the fields in Salesforce.


## Table 33: Procedure - Salesforce

Procedure        Salesforce Field                  Type              Salesforce       Notes
Resource                                                             Cardinality
identifier Identifier                              Object                0.M          The identifier information for a Procedure is
represented as Identifier records that
reference the PatientMedicalProcedure record
using their Identifier.Parent
RecordId field.

instantiates N/A                                   N/A                   N/A          Not Supported
Canonical

instantiates N/A                                   N/A                   N/A          Not Supported
Canonical

<!-- page:1568 -->

AFLS Overview                                                 Mapping FHIR v4.0 to Salesforce Standard Objects




## Procedure      Salesforce Field   Type              Salesforce    Notes

Resource                                            Cardinality
basedOn        PatientMedical     Object                0.M       The information about the service request that a
ProcedureDetail                                    procedure is based on is represented as
PatientMedicalProcedureDetail
records that reference the PatientMedical
Procedure record using their Patient
MedicalProcedureDetail.Patient
MedicalProcedureId field.
The Salesforce implementation of procedure
.basedOn doesn’t support references to care
plans.

PatientMedical     Lookup:               0.1       For procedure.basedOn information,
ProcedureDetail.   Clinical                        PatientMedicalProcedureDetail.
DetailRecordId     Service                         DetailRecordId must reference a
Request                         ClinicalServiceRequest record.

PatientMedical     Picklist              0.1       For procedure.basedOn information,
ProcedureDetail.                                   PatientMedicalProcedureDetail.
DetailType         Value: Based                    DetailType must use the value Based On
On                              .

partOf         PatientMedical     Object                0.M       The information about the procedure or
ProcedureDetail                                    observation that a procedure is a part of is
represented as PatientMedical
ProcedureDetail records that reference
the PatientMedicalProcedure record
using their PatientMedicalProcedure
Detail.PatientMedicalProcedure
Id field.
The Salesforce implementation of procedure
.partOf doesn’t support references to
medication administration.

PatientMedical     Polymorphic           0.1       For procedure.partOf information,
ProcedureDetail.   Lookup:                         PatientMedicalProcedureDetail.
DetailRecordId     Patient                         DetailRecordId must reference a either a
Medical                         PatientMedicalProcedure record or a
Procedure,                      CareObservation.
Care
Observation

PatientMedical     Picklist              0.1       For procedure.partOf information,
ProcedureDetail.                                   PatientMedicalProcedureDetail.
DetailType         Value: Part Of                  DetailType must use the value Part Of.

<!-- page:1569 -->

AFLS Overview                                                   Mapping FHIR v4.0 to Salesforce Standard Objects




## Procedure      Salesforce Field      Type               Salesforce    Notes

Resource                                                Cardinality
status         PatientMedical        Picklist               0.1       While FHIR defines procedure.status as
Procedure.Status                                       a code set bundle, the Salesforce implementation
of PatientMedicalProcedure.Status
is picklist.


## status         PatientMedical        Lookup:                0.1       N/A

Reason         Procedure.Status      CodeSet
ReasonCodeId          Bundle


## category       PatientMedical        Lookup:                0.1       N/A

Procedure.TypeId      CodeSet
Bundle


## code           PatientMedical        Lookup:                0.1       N/A

Procedure.CodeId      CodeSet
Bundle

subject        PatientMedical        MasterDetail:          1.1       The Salesforce implementation of procedure
Procedure.PatientId   Account                          .subject doesn’t support references to
groups.


## encounter PatientMedical             Lookup:                0.1       N/A

Procedure.Clinical         Clinical
EncounterId                Encounter

performed PatientMedical             DateTime               0.1       PatientMedicalProcedure.Start
.performed Procedure.StartDate                                        Date is used for both procedure
DateTime                                                              .performed.performedDateTime and
procedure.performed.performed
Period. For the latter, the field is used to
represent the start date of the period.

performed PatientMedical             DateTime               0.1       Because Salesforce doesn’t support a native period
.performed Procedure.StartDate                                        data type, the procedure.performed
Period                                                                .performedPeriod field is flattened into a
PatientMedical            DateTime               0.1
set of start date and end date fields.
Procedure.EndDate


## performed PatientMedical             String                 0.1       N/A

.performed Procedure.Duration
String     TimeString

performed PatientMedical             Double                 0.1       Because Salesforce doesn’t support a native age
.performedAge Procedure.Performed                                     data type, the procedure.performed
AtAge                                                    .performedAge FHIR resource is flattened
into a set of age and unit fields.
PatientMedical        Lookup:                0.1
Procedure.PerformedAt UnitOf
AgeUnitId             Measure

<!-- page:1570 -->

AFLS Overview                                                      Mapping FHIR v4.0 to Salesforce Standard Objects




## Procedure      Salesforce Field      Type                  Salesforce    Notes

Resource                                                   Cardinality
performed PatientMedical         Double                        0.1       Because Salesforce doesn’t support a native range
.performed Procedure.PerformedAt                                         data type, the procedure.performed
Range      AgeLowerLimit                                                  .performedRange FHIR resource is flattened
into a set of lower limit, upper limit, and unit fields
PatientMedical        Double                    0.1
.
Procedure.PerformedAt
AgeUpperLimit


## PatientMedical        Lookup:                   0.1

Procedure.Performed    UnitOf
AgeRangeUnit           Measure


## recorder       PatientMedical        Lookup:                   0.1       N/A

Procedure.Record       Account,
CreatorId              HealthcareProvider


## asserter       PatientMedical        Lookup:                   0.1       N/A

Procedure.Assertion    Account,
SourceId               Healthcare
Provider

performer CarePerformer              Object                   0.M        The performer information for a Procedure is
represented as CarePerformer records that
reference the PatientMedicalProcedure record
using their CarePerformer.Parent
RecordId field.


## performer CarePerformer.RoleId Polymorphic                     0.1       N/A

.function                      Lookup:
CodeSet,
CodeSet
Bundle

performer CarePerformer              Polymorphic               0.1       The Salesforce implementation doesn’t support
.actor    .PersonId                  Lookup:                             references to devices.
Account,
Healthcare
Provider


## performer CarePerformer              Lookup:                   0.1       0.1

.actoron  .Affiliated                 Account
BehalfOf  OrganizationId


## location       PatientMedical       Lookup:                    0.1       N/A

Procedure.FacilityId Healthcare
.Facility

reason         PatientMedical        Lookup:                   0.1       While FHIR defines procedure.reason
Code           Procedure.Reason       CodeSet                             Code as a zero-to-many resource, the Salesforce
CodeId                 Bundle                             implementation is zero-to-one.

<!-- page:1571 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## Procedure      Salesforce Field     Type             Salesforce    Notes

Resource                                             Cardinality
reason    PatientMedical            Polymorphic          0.1       While FHIR defines procedure.reason
Reference Procedure.Reason          Lookup:                         Code as a zero-to-many resource, the Salesforce
ReferenceId               Health
implementation is zero-to-one.
Condition,
Care                           The Salesforce implementation doesn’t support
Observation,                   document reference records.
Patient
Medical
Procedure,
and
Diagnostic
Summary

bodySite       PatientMedical       Object               0.M       The body site information of a procedure is
ProcedureDetail                                     represented as PatientMedical
ProcedureDetail records that reference
the PatientMedicalProcedure record
using their PatientMedicalProcedure
Detail.PatientMedicalProcedureId
field.

PatientMedical       Polymorphic          0.1       For procedure.bodySite information,
ProcedureDetail.     Lookup:                        PatientMedicalProcedureDetail.
DetailCodeId         CodeSet,                       DetailCodeId must reference a CodeSet
CodeSet                        or CodeSetBundle record.
Bundle

PatientMedical       Picklist             0.1       For procedure.bodySite information,
ProcedureDetail.                                    PatientMedicalProcedureDetail.
DetailType           Value: Body                    DetailType must use the value Body
Site                           Site.

outcome        PatientMedical       Picklist             0.1       While FHIR defines procedure.outcome as
Procedure.Outcome                                   a code, the Salesforce implementation of
PatientMedicalProcedure.Outcome
is a picklist.

report         PatientMedical       Lookup:              0.1       While FHIR defines procedure.report as
Procedure.ReportId   Diagnostic                     a zero-to-many resource, the Salesforce
Summary                        implementation is zero-to-one.
The Salesforce implementation of procedure
.report doesn’t support references to
composition or document reference records.

complication PatientMedical         Object               0.M       The complication information of a procedure is
ProcedureDetail                                       represented as PatientMedical

<!-- page:1572 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## Procedure      Salesforce Field   Type             Salesforce    Notes

Resource                                           Cardinality
ProcedureDetail records that reference
the PatientMedicalProcedure record
using their PatientMedicalProcedure
Detail.PatientMedicalProcedureId
field.


## PatientMedical     Polymorphic          0.1       For procedure.complication

ProcedureDetail.   Lookup:                        information, PatientMedicalProcedure
DetailCodeId       CodeSet,                        Detail.DetailCodeId must reference a
CodeSet                         CodeSet or CodeSetBundle record.
Bundle


## PatientMedical     Picklist             0.1       For procedure.complication

ProcedureDetail.                                  information, PatientMedicalProcedure
DetailType         Value:                          Detail.DetailType must use the value
Complication                    Complication.

complication PatientMedical       Object               0.M       The complication detail information of a
Detail       ProcedureDetail                                     procedure is represented as Patient
MedicalProcedureDetail records that
reference the PatientMedicalProcedure
record using their PatientMedical
ProcedureDetail.PatientMedical
ProcedureId field.

PatientMedical     Lookup:              0.1       For procedure.complicationDetail
ProcedureDetail.   Health                         information, PatientMedicalProcedure
DetailRecordId     Condition                       Detail.DetailRecordId must reference
a HealthCondition record.

PatientMedical     Picklist             0.1       For procedure.complicationDetail
ProcedureDetail.                                  information, PatientMedicalProcedure
DetailType         Value:                          Detail.DetailType must use the value
Complication                    Complication Detail.
Detail

followUp       PatientMedical     Object               0.M       The follow up information of a procedure is
ProcedureDetail                                   represented as PatientMedical
ProcedureDetail records that reference
the PatientMedicalProcedure record
using their PatientMedicalProcedure
Detail.PatientMedicalProcedureId
field.

PatientMedical     Polymorphic          0.1       For procedure.followUp information,
ProcedureDetail.   Lookup:                        PatientMedicalProcedureDetail.
DetailCodeId       CodeSet,

<!-- page:1573 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Procedure       Salesforce Field                 Type              Salesforce      Notes
Resource                                                           Cardinality
CodeSet                          DetailCodeId must reference a CodeSet
Bundle                           or CodeSetBundle record.

PatientMedical                   Picklist               0.1        For procedure.complicationDetail
ProcedureDetail.                                                   information, PatientMedicalProcedure
DetailType                       Value: Follow                      Detail.DetailType must use the value
Up                                 Follow Up.

Note            AuthorNote                       Object                 0.M        Use the AuthorNote object to add notes to a
procedure, and use the ParentRecordId field to
reference the parent procedure the note belongs
to.

focal           PatientMedical                   Lookup: Care           0.M        Use the PatientMedicalProcedure
Device          ProcedureDetail.                 Registered                        Detail child object to add multiple focalDevice
DetailrecordId                   Device                            values that reference the parent procedure record.

used      PatientMedical                         Lookup: Care           0.M        Use the PatientMedicalProcedure
Reference ProcedureDetail.                       Registered                        Detail child object to specify devices used in
DetailRecordId                         Device                            a procedure, and reference the parent procedure
record.

usedCode        PatientMedical                   N/A                    0.M        Use the PatientMedicalProcedure
ProcedureDetail.                                                   Detail child object to specify codes for items
DetailCodeId                                                       used in a procedure, and reference the parent
procedure record.




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1574 -->

AFLS Overview                                                                     Mapping FHIR v4.0 to Salesforce Standard Objects




SEE ALSO:
CarePerformer
PatientMedicalProcedure
PatientMedicalProcedureDetail



## RelatedPerson

The relatedPerson FHIR resource maps to the Account and Contact objects in Salesforce, and is connected to the person
that person’s related to using the ContactContactRelation__c object.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for RelatedPerson map to the fields in Salesforce.


## Table 34: RelatedPerson - Salesforce

RelatedPerson Salesforce Field                     Type                Salesforce    Notes
Resource                                                               Cardinality
identifier Identifier                              Object                 0.M        The identifier information for a related person is
represented as Identifier records that
reference the related person’s person account
using their Identifier.Parent
RecordId field.

active           Account.IsActive                  Boolean                 0.1       N/A

patient          ContactContact                    Lookup:                 1.1       Though Salesforce can tehnically accommodate
Relation__c                       Contact                           patient as a zero-to-many association, it is
.Contact__c                                                         recommended to align with the FHIR defined
one-to-one association.

relationship ContactContact                        Lookup:                0.M        While FHIR defines relatedPerson
Relation__c.Role__c                   ReciprocalRole__c                 .relationship as a code set bundle, its

<!-- page:1575 -->

AFLS Overview                                              Mapping FHIR v4.0 to Salesforce Standard Objects




## RelatedPerson Salesforce Field       Type          Salesforce    Notes

Resource                                           Cardinality
Salesforce implementation is a reference to
ReicprocalRole__c.

name           PersonName            Object            0.M       The name information for a related person is
represented as PersonName records that
reference the related person’s person account
using their PersonName.Parent
RecordId field.

telecom        ContactPointPhone     Object            0.M       The telecom information for a related person is
represented as ContactPointPhone records
that reference the related person’s person account
using their ContactPointPhone
.ParentId field.

gender         Contact.Gender        Picklist          0.1       While FHIR defines relatedPerson
.gender as a code set, its Salesforce
implementation is a picklist.

birthDate Contact.Birthdate          Date              0.1       N/A

address        ContactPointAddress   Object            0.M       The address information for a related person is
represented as ContactPointAddress
records that reference the related person’s person
account using their ContactPointAddress
.ParentId field.

photo          N/A                   N/A               N/A       Not supported

period         ContactContact        Date              0.1       Because Salesforce doesn’t support a native period
Relation__c                                       data type, the relatedPerson.period
.StartDate__c                                     FHIR resource is flattened to a set of strart and end
dates.
ContactContact        Date              0.1
Relation__c
.EndDate__c

communication PersonLanguage         Object            0.M       The language information for a related person is
represented as PersonLanguage records
that reference the related person’s person account
using their PersonLanguage
.IndividualId field.

communication PersonLanguage.        Picklist          0.1       While FHIR defines relatedPerson
.language Language                                               .communication.language as a code
set bundle, its Salesforce implementation is a
picklist.

communication PersonLanguage.Rank    Double            0.1       While FHIR defines relatedPerson
.preferred                                                       .communication.preferred as a

<!-- page:1576 -->

AFLS Overview                                                                     Mapping FHIR v4.0 to Salesforce Standard Objects



RelatedPerson Salesforce Field                     Type              Salesforce      Notes
Resource                                                             Cardinality
boolean, its Salesforce implementation is an
integer field that ranks the degree of preference.




## ResearchStudy

The ResearchStudy FHIR resource maps to the ResearchStudy objects in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for researchStudy map to the fields in Salesforce.


## Table 35: researchStudy - Salesforce

Research         Salesforce Field                  Type              Salesforce      Notes
Study                                                                Cardinality
Resource
url              ResearchStudy.Uniform URL                                0.1        N/A
ResourceIdentifier

identifier ResearchStudy                           Object                 0.M        The identifier information for a research study is
.Identifier                                                               represented as Identifier records that
reference the ResearchStudy record using their
Identifier.ParentRecordId field.

name             ResearchStudy.Name                Text                   1.1        While FHIR defines researchStudy.name
as a zero-to-one resource, the Salesforce
implementation of ResearchStudy.Name
is one-to-one.

title            ResearchStudy.Title               Long Text Area         0.1        While FHIR defines researchStudy.type
as a text, the Salesforce implementation of
ResearchStudy.Title is a long text area.

date             ResearchStudy.Source Date/Time                           1.1        N/A
SystemModified

status           ResearchStudy                     Picklist               1.1        N/A
.PublicationStatus

primary          ResearchStudy.Intent Picklist                            0.1        N/A
Purpose          Type
Type

phase            ResearchStudy.Phase               Picklist               0.1        N/A

studyDesign      CareProgramDetail.DetailRecord Lookup:                   1.M        While FHIR defines researchStudy
CodeSet,                             .studyDesign as a zero-to-many resource,
CodeSetBundle,                       the Salesforce implementation of

<!-- page:1577 -->

AFLS Overview                                                               Mapping FHIR v4.0 to Salesforce Standard Objects



Research       Salesforce Field                Type                 Salesforce    Notes
Study                                                               Cardinality
Resource
OmniProcess,                       CareProgramDetail.DetailRecord
CarePlanTemplate                   is one-to-many.

focus          CareProgramDetail.DetailRecord Lookup:                  1.M        While FHIR defines researchStudy.focus
CodeSet,                            as a zero-to-many resource, the Salesforce
CodeSetBundle,                      implementation of
OmniProcess,                        CareProgramDetail.DetailRecord
CarePlanTemplate                    is one-to-many.

condition      CareProgramDetail.DetailRecord Lookup:                  1.M        While FHIR defines researchStudy
CodeSet,                            .condition as a zero-to-many resource, the
CodeSetBundle,                      Salesforce implementation of
OmniProcess,                        CareProgramDetail.DetailRecord
CarePlanTemplate                    is one-to-many.

keyword        CareProgramDetail.DetailRecord Lookup:                  1.M        While FHIR defines researchStudy
CodeSet,                            .keyword as a zero-to-many resource, the
CodeSetBundle,                      Salesforce implementation of
OmniProcess,                        CareProgramDetail.DetailRecord
CarePlanTemplate                    is one-to-many.

region         CareProgramDetail.DetailRecord Lookup:                             While FHIR defines researchStudy
CodeSet,                            .region as a zero-to-many resource, the
CodeSetBundle,                      Salesforce implementation of
OmniProcess,                        CareProgramDetail.DetailRecord
CarePlanTemplate                    is one-to-many.

description ResearchStudy.Summary Long Text Area                        0.1       N/A
.Summary

description ResearchStudy.Description          Long Text Area           0.1       N/A

period         ResearchStudy.Start             Date/Time                0.1       Since Salesforce doesn’t natively support the
Date                                                               period data type, researchStudy.Period
is flattened into a set of start date and end date
ResearchStudy.EndDate Date/Time                          0.1
fields. The start date field is also used as the
equivalent of researchStudy.period
DateTime.

site           CareProgramSite.HealthCare      Lookup:                 0.M        N/A
Facility                        HealthCareFacility

classifier     CareProgramSite.DetailRecord    Lookup:                 1.M        While FHIR defines researchStudy
CodeSet,                           .classifier as a zero-to-many resource,
CodeSetBundle,                     the Salesforce implementation of
OmniProcess,                       CareProgramSite.DetailRecord is
CarePlanTemplate                   one-to-many.

<!-- page:1578 -->

AFLS Overview                                                          Mapping FHIR v4.0 to Salesforce Standard Objects



Research           Salesforce Field          Type              Salesforce    Notes
Study                                                          Cardinality
Resource
associated         CareProgramTeamMember.    Polymorphic           0.1       While FHIR defines
Party.name         Member                    Lookup                          researchStudy.associatedParty.name
as a text, the Salesforce implementation of
CareProgramTeamMember.Member is a
polymorphic lookup.

associated         CareProgramTeamMemberRole DynamicEnum           1.1       N/A
Party.role         Period.Role

associated CareProgramTeamMemberRole Date/Time                     0.1       Since Salesforce doesn’t natively support the
Party.period Period.EffectiveStartDate                                       period data type, researchStudy.
associatedParty.period is flattened
into a set of start date and end date fields. The
start date field is also used as the equivalent of
researchStudy.periodDateTime.

associated CareProgramTeamMemberRole Date/Time                     0.1       Since Salesforce doesn’t natively support the
Party.period Period.EffectiveEndDate                                         period data type, researchStudy.
associatedParty.period is flattened
into a set of start date and end date fields. The
start date field is also used as the equivalent of
researchStudy.periodDateTime.

associated         CareProgramTeamMember     Multi-Select          0.M       While FHIR defines
Party.classifier   .Category                                                 researchStudy.associatedParty.name
as a CodeSetBundle, the Salesforce
implementation of
CareProgramTeamMember.Category
is Multi-Select.

progressStatus CareProgramStatusPeriod.Status DynamicEnum          1.M       While FHIR defines researchStudy.state
.state                                                                       as a zero-to-many resource, the Salesforce
implementation of
CareProgramDetail.DetailRecord
is one-to-many.

progressStatus CareProgramStatusPeriod.Are   Boolean               0.1       N/A
.actual        DatesTentative

progressStatus CareProgramStatusPeriod       Date/Time             0.1       Since Salesforce doesn’t natively support the
.period        .EffectiveStartDateTime                                       period data type, researchStudy.
progressStatus.period is flattened into
effective start date time field.

progressStatus CareProgramStatusPeriod       Date/Time             0.1       Since Salesforce doesn’t natively support the
.period        .EffectiveEndDateTime                                         period data type, researchStudy.
progressStatus.period is flattened into
an effective end date time field.

<!-- page:1579 -->

AFLS Overview                                                          Mapping FHIR v4.0 to Salesforce Standard Objects



Research       Salesforce Field              Type               Salesforce    Notes
Study                                                           Cardinality
Resource
why            ResearchStudy                 Picklist               0.1       While FHIR defines
Stopped        .Discontinuation                                               researchStudy.whyStopped as a code
Reason                                                         set bundle, the Salesforce implementation of
ResearchStudy
.DiscontinuationReason is a picklist.

recruitment   CareProgram.TargetEnrollee     Number                 0.1       N/A
.targetnumber Count

recruitment   CareProgram.CurrentEnrollee    Number                 0.1       N/A
.actualnumber Count

recruitment ResearchStudy.Inclusion          Rich Text Area         0.1       N/A
.eligibility ExclusionCriteria

comparison     ResearchStudyComparison       Text                   1.1       N/A
Group.name     Group.Name

comparison     ResearchStudyComparison       Lookup:                1.1       While FHIR defines researchStudy
Group.type     Group.TypeCode                CodeSet                          .comparisonGroup.type as a zero-to-one
resource, the Salesforce implementation of
CareProgramDetail.TypeCode is
one-to-one.

comparison     ResearchStudyComparison       Text                   0.1       N/A
Group          Group.Description
.description

objective.name CareProgramGoal.Name          Long Text Area         1.1       While FHIR defines researchStudy
.objective.name as a zero-to-one resource,
the Salesforce implementation of
CareProgramGoal.Name is one-to-one.

objective.type CareProgramGoal.Type          Picklist               0.1       N/A

objective      CareProgramGoal.Description   Long Text Area         0.1       N/A
.description

result         DiagnosticSummary.BasedOn     Lookup:                0.1       N/A
Medication
Statement,
Clinical Service
Request




## ServiceRequest

The serviceRequest FHIR resource maps to the ClinicalServiceRequest and ClinicalServiceRequest
Detail objects in Salesforce.

<!-- page:1580 -->

AFLS Overview                                                                  Mapping FHIR v4.0 to Salesforce Standard Objects




## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for serviceRequest map to the fields in Salesforce.


## Table 36: serviceRequest - Salesforce

Service          Salesforce Field                  Type              Salesforce      Notes
Request                                                              Cardinality
Resource
identifier Identifier                              Object                 0.M        The identifier information for a service request is
represented as Identifier records that
reference the ClinicalServiceRequest
record using their Identifier.Parent
RecordId field.

instantiates N/A                                   N/A                    N/A        Not Supported
Canonical

instantiates N/A                                   N/A                    N/A        Not Supported
Canonical

basedOn          ClinicalService                   Object                 0.M        The information about the service request or
RequestDetail                                                       medication request that a service request is based
on is represented as ClinicalService
RequestDetail records that reference the
ClinicalServiceRequest record using
their ClinicalServiceRequestDetail
.ClinicalServiceRequestId field.
The Salesforce implementation of service
Request.basedOn doesn’t support
references to care plans.

ClinicalService      Polymorphic                         0.1        For serviceRequest.basedOn
RequestDetail.Detail Lookup:                                        information, ClinicalServiceRequest
RecordId             Clinical                                        Detail.DetailRecordId must reference
Service                                        a ClinicalServiceRequest or
Request,                                        MedicationRequest record.
Medication
Request

ClinicalService      Picklist                            0.1        For serviceRequest.basedOn
RequestDetail.Detail                                                information, ClinicalServiceRequest
Type                 Value: Based                                    Detail.DetailType must use the value
On                                 Based On.

replaces         ClinicalService                   Lookup:                0.1        While FHIR defines serviceRequest
Request.Original                  Clinical                          .replaces as a zero-to-many resource, the
RequestId                         Service                           Salesforce implementation is zero-to-one.
Request

<!-- page:1581 -->

AFLS Overview                                             Mapping FHIR v4.0 to Salesforce Standard Objects




## Service        Salesforce Field     Type          Salesforce    Notes

Request                                           Cardinality
Resource
requisition ClinicalService         Lookup:           0.1       N/A
Request.Service         Identifier
RequestGroup
IdentifierId

status         ClinicalService      Picklist          1.1       While FHIR defines serviceRequest
Request.Status                                    .status as a code set bundle, the Salesforce
implementation of ClinicalService
Request.Status is picklist.

intent         ClinicalService      Picklist          1.1       While FHIR defines serviceRequest
Request.Type                                      .intent as a code set bundle, the Salesforce
implementation of ClinicalService
Request.Type is picklist.


## category       ClinicalService      Lookup:           0.1       N/A

Request.CategoryId   CodeSet
Bundle

priority       ClinicalService      Picklist          0.1       While FHIR defines serviceRequest
Request.Priority                                 .priority as a code set bundle, the
Salesforce implementation of Clinical
ServiceRequest.Priority is picklist.


## doNot          ClinicalService      Boolean           0.1       N/A

Perform        Request.IsIgnored


## code           ClinicalService       Lookup:          0.1       N/A

Request.RequestCodeId CodeSet
Bundle

order          N/A                  N/A               N/A       Not Supported
Detail

quantity  ClinicalService           Double            0.1       Because Salesforce doesn’t support a native
.quantity Request.Quantity                                      quantity data type, the implementation of
Quantity  Numerator                                             serviceRequest.quantity
.quantityQuantity is flattened into a set
ClinicalService      Lookup:           0.1
of quantity and unit fields.
Request.Quantity     UnitOf
NumeratorUnitId      Measure

quantity  ClinicalService           Double            0.1       Because Salesforce doesn’t support a native ratio
.quantity Request.Quantity                                      data type, the implementation of service
Ratio     Numerator                                             Request.quantity.quantityRatio
is flattened into a set of numerator, denominator
ClinicalService      Double            0.1
and unit fields.
Request.Quantity
Denominator

<!-- page:1582 -->

AFLS Overview                                                    Mapping FHIR v4.0 to Salesforce Standard Objects




## Service        Salesforce Field        Type              Salesforce    Notes

Request                                                  Cardinality
Resource
ClinicalService         Lookup:               0.1
Request.Quantity        UnitOf
NumeratorUnitId         Measure

ClinicalService      Picklist                 0.1       For serviceRequest.quantity
Request.QuantityType                                    .quantityRatio information, Clinical
Value: Ratio                    ServiceRequest.QuantityType must
use the value Ratio.

quantity  ClinicalService              Double                0.1       Because Salesforce doesn’t support a native range
.quantity Request.Quantity                                             data type, the implementation of service
Range     Numerator                                                    Request.quantity.quantityRange
is flattened into a set of numerator, denominator
ClinicalService         Double                0.1
and unit fields.
Request.Quantity
Denominator


## ClinicalService         Lookup:               0.1

Request.Quantity        UnitOf
NumeratorUnitId         Measure

ClinicalService      Picklist                 0.1       For serviceRequest.quantity
Request.QuantityType                                    .quantityRange information, Clinical
Value: Range                    ServiceRequest.QuantityType must
use the value Range.

subject        ClinicalService         Master-Detail         1.1       Only references to patients are supported.
Request.PatientId       Reference:
Account


## encounter ClinicalService              Lookup:               0.1       N/A

Request.Clinical             Clinical
EncounterId                  Encounter

occurrence ClinicalService             DateTime              0.1       ClinicalServiceRequest.StartDate
.occurrence Request.StartDate                                          is used for both serviceRequest
DateTime                                                                .occurrence.occurrenceDateTime
and serviceRequest.occurrence
.occurrencePeriod. For the latter, the field
is used to represent the start date of the period.

occurrence ClinicalService             DateTime              0.1       Because Salesforce doesn’t support a native period
.occurrence Request.StartDate                                          data type, the serviceRequest
Period                                                                 .occurrence.occurrencePeriod is
ClinicalService            DateTime              0.1
flattened into a set of start date and end date
Request.EndDate
fields.

<!-- page:1583 -->

AFLS Overview                                                Mapping FHIR v4.0 to Salesforce Standard Objects




## Service        Salesforce Field     Type             Salesforce    Notes

Request                                              Cardinality
Resource
occurrence N/A                      N/A                  N/A       Not supported
.occurrence
Timing


## asNeeded  ClinicalService           Boolean              0.1       N/A

.asNeeded Request.Has
Boolean   Prerequisites


## asNeeded  ClinicalService      Lookup:                   0.1       0.1

.asNeeded Request.Prerequisite CodeSet
Codeable  CodeId               Bundle
Concept


## authored       ClinicalService      DateTime             0.1       N/A

On             Request.DateSigned


## requester ClinicalService           Polymorphic          0.1       N/A

Request.RequesterId       Lookup:
Account,
Asset,
Care
Registered
Device, and
Healthcare
Provider


## performer ClinicalService       Lookup:                  0.1       N/A

Type      Request.PerformerType CodeSet
Id                    Bundle

performer ClinicalService           Polymorphic          0.1       References to care teams and healthcare services
Request.PerformerId       Lookup:                        are not supported.
Account,
Asset,                         While FHIR defines serviceRequest
Care                           .performer as a zero-to-many resource, the
Registered                     Salesforce implementation is zero-to-one.
Device, and
Healthcare
Provider

location       ClinicalService      Lookup:              0.1       While FHIR defines serviceRequest
Code           Request.Facility     CodeSet                        .locationCode as a zero-to-many resource,
CodeId               Bundle                         the Salesforce implementation is zero-to-one.

location  ClinicalService           Lookup:              0.1       While FHIR defines serviceRequest
Reference Request.FacilityId        Healthcare                     .locationReference as a zero-to-many
Facility                       resource, the Salesforce implementation is
zero-to-one.

<!-- page:1584 -->

AFLS Overview                                                   Mapping FHIR v4.0 to Salesforce Standard Objects




## Service        Salesforce Field        Type           Salesforce    Notes

Request                                               Cardinality
Resource
reasonCode     ClinicalService      Lookup:               0.1       While FHIR defines serviceRequest
Request.ReasonCodeId CodeSet                         .reasonCode as a zero-to-many resource,
Bundle                          the Salesforce implementation is zero-to-one.


## reason    ClinicalService              Lookup:            0.1       N/A

Reference Request.Diagnostic           Diagnostic
ReportId                     Summary

ClinicalService         Lookup:            0.1       To support zero-to-many values, use the child
Request.ConditionId     Health                       object instead.
Condition

ClinicalService       Lookup: Care         0.1       To support zero-to-many values, use the child
Request.ObservationId Observation                    object instead.

ClinicalService         Object             0.M       The records referencing the reasons for a service
RequestDetail                                        request are represented as Clinical
ServiceRequestDetail records that
reference the ClinicalServiceRequest
record using their ClinicalService
RequestDetail.ClinicalService
RequestId field.


## ClinicalService      Polymorphic           0.1       For serviceRequest.reason

RequestDetail.Detail Lookup:                         Reference information, Clinical
RecordId             Health                          ServiceRequestDetail.Detail
Condition,                      RecordId must reference a Health
Care                            Condition or CareObservation record
Observation,                    .
Diagnostic
Summary


## ClinicalService      Picklist              0.1       For serviceRequest.reason

RequestDetail.Detail                                 Reference information, Clinical
Type                 Value: Reason                   ServiceRequestDetail.DetailType
Reference                    must use the value Reason Reference.

insurance N/A                          N/A                N/A       Not supported

supporting N/A                         N/A                N/A       Not supported
Info

specimen       N/A                     N/A                N/A       Not supported

bodySite       ClinicalService         Object             0.M       The body site information of a serviceRequest is
RequestDetail                                        represented as ClinicalServiceRequest
Detail records that reference the Clinical
ServiceRequest record using their

<!-- page:1585 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects



Service         Salesforce Field                 Type              Salesforce      Notes
Request                                                            Cardinality
Resource
ClinicalServiceRequestDetail
.ClinicalServiceRequestId field.

ClinicalService      Polymorphic                        0.1        For serviceRequest.bodySite
RequestDetail.Detail Lookup:                                       information, ClinicalServiceRequest
CodeId               CodeSet,                                       Detail.DetailCodeId must reference a
CodeSet                                        CodeSet or CodeSetBundle record.
Bundle

ClinicalService      Picklist                           0.1        For serviceRequest.bodySite
RequestDetail.Detail                                               information, ClinicalServiceRequest
Type                 Value: Body                                    Detail.DetailType must use the value
Site                               Body Site.

Note            N/A                              N/A                   N/A         Not supported

patient     ClinicalService                      Text                   0.1        N/A
Instruction Request.Patient
Instruction

relevant        N/A                              N/A                   N/A         Not supported
History




## Sample Record Diagram

Here's a diagram that shows an example of how this resource is represented in Salesforce.

<!-- page:1586 -->

AFLS Overview                                                                Mapping FHIR v4.0 to Salesforce Standard Objects




SEE ALSO:
ClinicalServiceRequest
ClinicalServiceRequestDetail



## Timing

The Timing FHIR resource maps to the ActivityTiming object in Salesforce.



## FHIR V4.0 - Clinical Data Model Mapping

Here’s how the fields defined by FHIR for Timing map to the fields in Salesforce.


## Table 37: Timing - Salesforce

Timing           Salesforce Field                  Type              Salesforce    Notes
Resource                                                             Cardinality
event            Event.ActivityDate                Object                 0.M      timing.event is stored in Event.
ActivityDate. This event record then
references the ActivityTiming record using its
WhatId field.

repeat           ActivityTiming.Period Int                                0.1      Because Salesforce doesn’t support a native
.bounds          Length                                                            duration data type, repeat.bounds
.bounds                                                                             .boundsDuration is flattened to a set of
ActivityTiming.Period Lookup: UnitOf                     0.1
Duration                                                                           length and unit fields.
LengthUnitId          Measure

repeat           ActivityTiming.Period Double                             0.1      Because Salesforce doesn’t support a native
.bounds          LengthLowerLimit                                                  duration data type, repeat.bounds
.bounds                                                                             .boundsRange is flattened to a set of lower
ActivityTiming.Period Double                             0.1
Range                                                                              limit, upper limit, and unit fields.
LengthUpperLimit

<!-- page:1587 -->

AFLS Overview                                                    Mapping FHIR v4.0 to Salesforce Standard Objects




## Timing         Salesforce Field         Type             Salesforce    Notes

Resource                                                 Cardinality
ActivityTiming.Period Lookup: UnitOf          0.1
LengthUnitId          Measure

repeat         ActivityTiming.Period DateTime                0.1       Because Salesforce doesn’t support a native period
.bounds        StartDateTime                                           data type, repeat.bounds.bounds
.bounds                                                                Period is flattened to a set of start and end
ActivityTiming.Period DateTime                0.1
Period                                                                 date fields.
EndDateTime


## repeat         ActivityTiming.Count Int                      0.1       N/A

.count         InPeriod


## repeat    ActivityTiming.Max            Int                  0.1       N/A

.countMax CountInPeriod


## repeat    ActivityTiming                Double               0.1       N/A

.duration .ActivityDuration


## repeat    ActivityTiming.Max            Double               0.1       N/A

.duration ActivityDuration
Max


## repeat    ActivityTiming                Lookup: UnitOf       0.1       N/A

.duration .ActivityDuration             Measure
Unit      UnitId


## repeat     ActivityTiming               Double               0.1       N/A

.frequency .ActivityCountPer
Repetition


## repeat     ActivityTiming.Max           Int                  0.1       N/A

.frequency ActivityCountPer
Max        Repetition


## repeat         ActivityTiming           Double               0.1       N/A

.period        .RepetitionCycle
Length


## repeat         ActivityTiming.Max    Double                  0.1       N/A

.period        RepetitionCycleLength
Max


## repeat         ActivityTiming           Lookup: UnitOf       0.1       N/A

.period        .RepetitionCycle         Measure
Unit           UnitId

repeat         ActivityTiming.Weekly Lookup:                0.M        While FHIR defines repeat.dayOfWeek as
.dayOf         ActivityTimeId        Operating                         a code value, the Salesforce implementation uses
Week                                    Hours                          a reference to OperatingHours. A record in
OperatingHours can have multiple values for days
in a week and time.

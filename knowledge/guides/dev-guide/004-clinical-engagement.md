<!-- guide:dev-guide section:clinical-engagement pages:7-146 -->
# Clinical Engagement

AFLS Overview                                                                                                     Clinical Engagement




## Adverse Events

Adverse Events data model helps you in managing and documenting any unfavorable or unintended

**EDITIONS**
signs, symptoms, or diseases that occur in participants during the research study. These adverse
events can include a wide range of physical or psychological effects that varies from mild discomfort
to serious health complications.                                                                           Available in: Lightning
Experience
The adverse events objects are available to users with Health Cloud Starter or Health Cloud license.
Available in: Enterprise and
Available in API version 61.0 and later.
Unlimited Editions with Life
Sciences Cloud or Health
Cloud




For more details and a larger image, visit the Data Model Gallery.



## AdverseEventAction

Preventive actions that contributed to avoiding the adverse event or Ameliorating actions taken after the adverse event occured in
order to reduce the extent of harm. This object is available in API version 61.0 and later.
AdverseEventCause
Describes the entity that is suspected to have caused the adverse event. This object is available in API version 61.0 and later.
AdverseEventContribFactor
The contributing factors suspected to have increased the probability or severity of the adverse event. This object is available in API
version 61.0 and later.

<!-- page:8 -->

AFLS Overview                                                                                                    Clinical Engagement



## AdverseEventEntry

Represents the event related to unintended/anticipated effects on research participants. This object is available in API version 61.0
and later.
AdverseEventOutcome
Type of outcome from the adverse event. This object is available in API version 61.0 and later.
AdverseEventParty
Indicates who or what participated in the adverse event and how they were involved. This object is available in API version 61.0 and
later.
AdverseEvntResultingEffect
Effect on the subject due to this event. This object is available in API version 61.0 and later.
AdverseEventSupportInfo
Supporting information relevant to the event. This object is available in API version 61.0 and later.



## AdverseEventAction

Preventive actions that contributed to avoiding the adverse event or Ameliorating actions taken after the adverse event occured in order
to reduce the extent of harm. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

ActionCodeId                           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code of the adverse incident action.
This field is a polymorphic relationship field.
Relationship Name
ActionCode
Refers To
CodeSet, CodeSetBundle

ActionReferenceId                      Type
reference
Properties
Create, Filter, Group, Sort, Update

<!-- page:9 -->

AFLS Overview                                                                                      Clinical Engagement



Field                   Details


## Description

The reference of the action that caused the adverse incident.
This field is a polymorphic relationship field.
Relationship Name
ActionReference
Refers To
DiagnosticSummary, Medication, MedicationRequest, PatientImmunization,
PatientMedicalProcedure

ActionType              Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifes the type of action that contributed to the adverse incident.
Possible values are:
- Mitigative
- Preventive
The default value is Preventive.

AdverseEventEntryId     Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent adverse incident associated with the action.
This field is a relationship field.
Relationship Name
AdverseEventEntry
Relationship Type
Master-detail
Refers To
AdverseEventEntry (the master object)

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

<!-- page:10 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEventActionChangeEvent on page 1426
Change events are available for the object.
AdverseEventActionFeed on page 1429
Feed tracking is available for the object.
AdverseEventActionHistory on page 1434
History is available for tracked fields of the object.



## AdverseEventCause

Describes the entity that is suspected to have caused the adverse event. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AdverseEventEntryId                     Type
reference
Properties
Create, Filter, Group, Sort

<!-- page:11 -->

AFLS Overview                                                                                     Clinical Engagement



Field                    Details


## Description

The adverse incident associated with the adverse incident cause.
This field is a relationship field.
Relationship Name
AdverseEventEntry
Relationship Type
Master-detail
Refers To
AdverseEventEntry (the master object)

AssessmentMethodCodeId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The assessment method code associated with the adverse incident cause.
This field is a polymorphic relationship field.
Relationship Name
AssessmentMethodCode
Refers To
CodeSet, CodeSetBundle

AuthoredById             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who has authored the adverse incident cause.
This field is a polymorphic relationship field.
Relationship Name
AuthoredBy
Refers To
Account, Contact, HealthcareFacility, HealthcarePractitionerFacility, ResearchStudyCandidate,
User

CauseCodeId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code of the adverse incident cause.

<!-- page:12 -->

AFLS Overview                                                                                       Clinical Engagement




## Field                   Details

This field is a polymorphic relationship field.
Relationship Name
CauseCode
Refers To
CodeSet, CodeSetBundle

CauseId                 Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The cause of the adverse event.
This field is a polymorphic relationship field.
Relationship Name
Cause
Refers To
CareRegisteredDevice, Medication, MedicationStatement, PatientImmunization,
PatientMedicalProcedure, ResearchStudy

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study.

<!-- page:13 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

Probability                             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the probability of the cause to have been the reason for the adverse incident.
Possible values are:
- Certain
- Likely
- Possible
- Unlikely
- Conditional or Classified
- Unassessable or Unclassifiable




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEventCauseChangeEvent on page 1426
Change events are available for the object.
AdverseEventCauseFeed on page 1429
Feed tracking is available for the object.
AdverseEventCauseHistory on page 1434
History is available for tracked fields of the object.



## AdverseEventContribFactor

The contributing factors suspected to have increased the probability or severity of the adverse event. This object is available in API version
61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AdverseEventEntryId                     Type
reference

<!-- page:14 -->

AFLS Overview                                                                                    Clinical Engagement



Field                    Details


## Properties

Create, Filter, Group, Sort
Description
The parent adverse incident associated with the contributing factor of the incident.
This field is a relationship field.
Relationship Name
AdverseEventEntry
Relationship Type
Master-detail
Refers To
AdverseEventEntry (the master object)

ContributingFactorCodeId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The contributing factor of the adverse event.
This field is a polymorphic relationship field.
Relationship Name
ContributingFactorCode
Refers To
CodeSet, CodeSetBundle

ContributingFactorId     Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The code of the adverse event contributing factor.
This field is a polymorphic relationship field.
Relationship Name
ContributingFactor
Refers To
AllergyIntolerance, CareObservation, CareRegisteredDevice, DiagnosticSummary,
HealthCondition, Medication, MedicationStatement, PatientImmunization,
PatientMedicalProcedure

LastReferencedDate       Type
dateTime

<!-- page:15 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details


## Properties

Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEventContribFactorChangeEvent on page 1426
Change events are available for the object.
AdverseEventContribFactorFeed on page 1429
Feed tracking is available for the object.
AdverseEventContribFactorHistory on page 1434
History is available for tracked fields of the object.



## AdverseEventEntry

Represents the event related to unintended/anticipated effects on research participants. This object is available in API version 61.0 and
later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:16 -->

AFLS Overview                                                                     Clinical Engagement


Fields


## Field                   Details

Category                Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the category of the adverse event.
Possible values are:
- Wrong Patient
- Procedure Incident
- Medication Incident
- Device Malfunction
- Unsafe Physical Environment
- Hospital Acquired Infection
- Wrong Body Site

CauseEndDateTime        Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time of the cause.

CauseStartDateTime      Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time of the cause.

ClinicalEncounterId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical encounter associated with the adverse incident.
This field is a relationship field.
Relationship Name
ClinicalEncounter

<!-- page:17 -->

AFLS Overview                                                                    Clinical Engagement



Field                      Details

Refers To
ClinicalEncounter

DetectedDateTime           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the adverse event was detected.

EventCodeId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code of the adverse incident.
This field is a polymorphic relationship field.
Relationship Name
EventCode
Refers To
CodeSet, CodeSetBundle

EventEndDateTime           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time of the incident.

EventStartDateTime         Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time of the incident.

HasSubjectDiscontinuedStudy Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:18 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details


## Description

Indicates whether the subject has discontinued from the research study due to the adverse
incident.
The default value is false.

IsExpected              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the adverse incident is expected for the research study.
The default value is false.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

LocationId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The site where the adverse event occured.
This field is a polymorphic relationship field.
Relationship Name
Location
Refers To
CareProgramSite, HealthcareFacility

<!-- page:19 -->

AFLS Overview                                                                    Clinical Engagement




## Field                      Details

Name                       Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the adverse event.

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

RecordedById               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account or person who recorded the adverse incident.
This field is a polymorphic relationship field.
Relationship Name
RecordedBy
Refers To
Account, CareProgramEnrollee

RecordedDateTime           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the adverse event was recorded.

RelatedAdverseEventEntryId Type
reference

<!-- page:20 -->

AFLS Overview                                                                      Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The adverse event entry that's associated with this record.
This field is a relationship field.
Relationship Name
RelatedAdverseEventEntry
Refers To
AdverseEventEntry

ReportingContextId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The context for which the adverse incident has been reported.
This field is a polymorphic relationship field.
Relationship Name
ReportingContext
Refers To
ResearchStudy

Severity                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the severity of the adverse event.
Possible values are:
- Mild
- Moderate
- Serious
- Life Threatening or Disabling
- Death
- Unserious

SourceSystem            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:21 -->

AFLS Overview                                                                           Clinical Engagement



Field                    Details


## Description

The name of the external system that generated the record.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The ID of the record in the external system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed in the source system

Status                   Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the adverse incident.
Possible values are:
- In Progress
- Completed
- Entered-in-Error
- Unknown

SubjectId                Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The subject of the adverse incident.
This field is a polymorphic relationship field.
Relationship Name
Subject
Refers To
Account, CareProgramEnrollee, HealthcareProvider

<!-- page:22 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

Type                                    Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the type of adverse incident.
Possible values are:
- Actual Adverse Event
- Potential Adverse Event




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEventEntryChangeEvent on page 1426
Change events are available for the object.
AdverseEventEntryFeed on page 1429
Feed tracking is available for the object.
AdverseEventEntryHistory on page 1434
History is available for tracked fields of the object.
AdverseEventEntryShare on page 1438
Sharing is available for the object.



## AdverseEventOutcome

Type of outcome from the adverse event. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AdverseEventEntryId                     Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent adverse incident associated with the outcome.

<!-- page:23 -->

AFLS Overview                                                                                       Clinical Engagement




## Field                   Details

This field is a relationship field.
Relationship Name
AdverseEventEntry
Relationship Type
Master-detail
Refers To
AdverseEventEntry (the master object)

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study.

OutcomeCodeId           Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The code of the adverse event outcome.
This field is a polymorphic relationship field.
Relationship Name
OutcomeCode
Refers To
CodeSet, CodeSetBundle

<!-- page:24 -->

AFLS Overview                                                                                                          Clinical Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEventOutcomeChangeEvent on page 1426
Change events are available for the object.
AdverseEventOutcomeFeed on page 1429
Feed tracking is available for the object.
AdverseEventOutcomeHistory on page 1434
History is available for tracked fields of the object.



## AdverseEventParty

Indicates who or what participated in the adverse event and how they were involved. This object is available in API version 61.0 and
later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AdverseEventEntryId                     Type
reference
Properties
Create, Filter, Group, Sort
Description
The adverse incident associated with the party.
This field is a relationship field.
Relationship Name
AdverseEventEntry
Relationship Type
Master-detail
Refers To
AdverseEventEntry (the master object)

LastReferencedDate                      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

<!-- page:25 -->

AFLS Overview                                                                                       Clinical Engagement




## Field                   Details

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the adverse event.

PartyId                 Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The ID of the adverse event party.
This field is a polymorphic relationship field.
Relationship Name
Party
Refers To
Account, CareProgramEnrollee, CareRegisteredDevice, Contact, HealthcareFacility,
HealthcarePractitionerFacility

Role                    Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the role of the party in the adverse incident.
Possible values are:
- Informant
- Participant
- Witness
- Author
- LSAdverseEventPartyRole

<!-- page:26 -->

AFLS Overview                                                                                                          Clinical Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEventPartyChangeEvent on page 1426
Change events are available for the object.
AdverseEventPartyFeed on page 1429
Feed tracking is available for the object.
AdverseEventPartyHistory on page 1434
History is available for tracked fields of the object.



## AdverseEvntResultingEffect

Effect on the subject due to this event. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AdverseEventEntryId                     Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent adverse incident associated with the effect.
This field is a relationship field.
Relationship Name
AdverseEventEntry
Relationship Type
Master-detail
Refers To
AdverseEventEntry (the master object)

EffectId                                Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The effect of the adverse incident.
This field is a polymorphic relationship field.

<!-- page:27 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details

Relationship Name
Effect
Refers To
CareObservation, HealthCondition

LastReferencedDate                      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEvntResultingEffectChangeEvent on page 1426
Change events are available for the object.
AdverseEvntResultingEffectFeed on page 1429
Feed tracking is available for the object.
AdverseEvntResultingEffectHistory on page 1434
History is available for tracked fields of the object.



## AdverseEventSupportInfo

Supporting information relevant to the event. This object is available in API version 61.0 and later.

<!-- page:28 -->

AFLS Overview                                                                                        Clinical Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                    Details

AdverseEventEntryId      Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent adverse incident associated with the supporting information.
This field is a relationship field.
Relationship Name
AdverseEventEntry
Relationship Type
Master-detail
Refers To
AdverseEventEntry (the master object)

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study.

<!-- page:29 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

SupportingInfoCodeId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code of the supporting information.
This field is a polymorphic relationship field.
Relationship Name
SupportingInfoCode
Refers To
CodeSet, CodeSetBundle

SupportingInformationId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The supporting information of the adverse incident.
This field is a polymorphic relationship field.
Relationship Name
SupportingInformation
Refers To
AllergyIntolerance, CareObservation, DiagnosticSummary, HealthCondition, Medication,
MedicationStatement, PatientImmunization




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdverseEventSupportInfoChangeEvent on page 1426
Change events are available for the object.
AdverseEventSupportInfoFeed on page 1429
Feed tracking is available for the object.
AdverseEventSupportInfoHistory on page 1434
History is available for tracked fields of the object.

<!-- page:30 -->

AFLS Overview                                                                                                      Clinical Engagement




## Participant Management

Participant Management data model helps you to streamline the recruitment and enrollment

**EDITIONS**
processes in clinical trials with advanced digital solutions. With this data model, you can store clinical
trial data representing care programs and research studies. It’s USCDI and FHIR R4-aligned, which
helps with your system's interoperability and compliance while managing participant data efficiently.        Available in: Lightning
Experience
Participant data in clinical trials is essential in the Life Sciences industry as it helps you track and
Available in: Enterprise and
manage participants' enrollment journey. This data model is your key to collecting information on
Unlimited Editions with Life
participants and monitoring the effectiveness and safety of clinical trials.
Sciences or Health Cloud
The Participant Management data model allows you to store clinical trial data representing care
program management and research studies. Participant Management uses Care Program
Management objects to improve patient outcomes. It also uses the Discovery Framework objects
to build more complex prescreening assessment forms and questions to check participants' eligibility. To learn more about Care Program
Management objects and Discovery Framework objects, refer Care Program Management and Discovery Framework Standard Objects.
Participant Management also reuses some of the standard Salesforce objects to digitize the Consent Management flow. You can add
consent documents to clinical trials by associating them with the related care program and defining their data use purpose. To learn
more about the standard objects used for e-consents, refer Standard Objects.
The participant management objects are available to users with Health Cloud Starter and the Participant Enrollment Add-On license.
Available in API version 61.0 and later.




For more details and a larger image, visit the Data Model Gallery.

<!-- page:31 -->

AFLS Overview                                                                                                           Clinical Engagement



## CareProgram

Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants
by an employer or insurer.
CareProgramDetail
Represents the detail records related to the care program. This object is available in API version 61.0 and later.
CareProgramEligibilityRule
Represents a rule defining the criteria for patient care program enrollment eligibility. This entity creates an association between Care
Program and an Enrollment Eligibility Criteria.
CareProgramEnrollee
Represents a participant enrolled in a care program.
CareProgramSite
Represents the details about the care program site. This object is available in API version 61.0 and later.
CareProgramStatusPeriod
Represents the historical changes to the status of a care program. This object is available in API version 61.0 and later.
CareProgramTeamMember
Represents a person who delivers services under a program, such as a program manager or care coordinator.
CarePgmEnrleeStatusPeriod
Represents the historical changes to the status or stage of a care program enrollee. This object is available in API version 61.0 and
later.
CarePgmEnrollmentEvalRslt
Represents the result of an evaluation done to assess the eligibility of a participant enrolling for a research study or care program.
This object is available in API version 62.0 and later.
CarePgmTeamMbrRolePeriod
Represents the historical changes in the role of a care program team member. This object is available in API version 61.0 and later.
DiagnosticSummary
Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0
and later.
DigitalVerification
Stores information about the verification of a related record. This object is available in API version 60.0 and later.
EnrollmentEligibilityCriteria
Represents criteria that define patient enrollment eligibility for one or more care programs.
ResearchStudy
Represents the details of a research study that include its design, execution, and oversight. This object is available in API version 61.0
and later.
ResearchStudyCandidate
Represents the details of the research participant which includes the associated account and the status of the subject. This object
is available in API version 61.0 and later.
ResearchStudyCmprGroup
Represents the details of a research study comparison group. This object is available in API version 61.0 and later.
ResearchStudyProtocolInfo
Represents details of the research study protocol document. This object is available in API version 62.0 and later.

<!-- page:32 -->

AFLS Overview                                                                                                         Clinical Engagement



## ResearchStudyRelation

Represents different related research studies. This object is available in API version 61.0 and later.
ResearchStudyRndmBlockSlot
Represents the individual randomization block items corresponding to a Research Study Randomization Block This object is available
in API version 61.0 and later.
ResearchStdyCndtStatusPrd
Represents the time duration during which a research study candidate is assigned a specific status. This object is available in API
version 61.0 and later.
ResearchStdyCmprGroupCndt
Represents the junction between a research study control group and a research study candidate. This object is available in API version
61.0 and later.
RsrchStdyRandomizationCrit
Represents the criteria definition for grouping the candidates participating in the research study. This object is available in API version
61.0 and later.
ResearchStdyRandomization
Represents the randomization algorithm configuration defined for a research study. This object is available in API version 61.0 and
later.
RsrchStdyRandomizationBlock
Represents the details of a block that’s generated through the parameters specified in the research study randomization. This object
is available in API version 61.0 and later.
ResearchStdySearchableField
Represents a common dataset that includes multiple fields and values from multiple objects and serves as the basis for searches
related to research studies. This object is available in API version 61.0 and later.



## CareProgram

Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants
by an employer or insurer.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field Name                                          Details

ActiveSiteCount                                     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of active sites for conducting the research study. This field is available
in API version 64.0 and later when Site Management is enabled.

<!-- page:33 -->

AFLS Overview                                                                           Clinical Engagement




## Field Name              Details

BudgetAmount            Type
Currency
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Approved budget for the care program.

CareProgramName         Type
Text
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the care program.

Category                Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Represents the category of the care program.
Possible values are:
- AdvancedTherapy
- TrialManagement (This field is available for the Participant Management
feature in API version 61.0 and later.)
- Patient Services (This field is available with Patient Program Outcome
Management permission set in API version 62.0 and later.)

CurrentEnrolleeCount    Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of enrollees who have joined the care program to date. This field is
available for the Participant Management feature in API version 61.0 and later.

Description             Type
Long Text Area
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A short description explaining the program.

<!-- page:34 -->

AFLS Overview                                                                                 Clinical Engagement




## Field Name                    Details

EndDate                       Type
Date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Program termination date.

EnrollmentDurationMeasureId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measure for the participant enrollment duration. This field is available
in API version 64.0 and later when Site Management is enabled.
This field is a relationship field.
Relationship Name
EnrollmentDurationMeasure
Refers To
UnitOfMeasure

EnrollmentRate                Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The rate of the participant enrollment at the site. This is calculated by dividing
the target enrollment count by the target enrollment duration and the number
of planned sites. This field is available in API version 64.0 and later when Site
Management is enabled.

FirstSiteClosedOutDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the first site is closed out.

FirstSiteActivatedDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:35 -->

AFLS Overview                                                                             Clinical Engagement



Field Name               Details


## Description

The date on which the first site is activated for conducting research studies. This
field is available in API version 64.0 and later when Site Management is enabled.

LastSiteActivatedDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the last site is activated for conducting research studies. This
field is available in API version 64.0 and later when Site Management is enabled.

LastSiteClosedOutDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the last site is closed out. This field is available in API version
64.0 and later when Site Management is enabled.

ParentProgram            Type
Lookup(Care Program)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of another program that this program is a part of, if any.

ProgramSponsor           Type
Lookup(Account)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the third-party program sponsor, if any.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.

<!-- page:36 -->

AFLS Overview                                                                              Clinical Engagement




## Field Name                 Details

StartDate                  Type
Date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Effective start date of the program.

Status                     Type
Pick list
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Status of the program.

TargetEnrollmentDuration   Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The duration in which the enrollment for the targeted number of participants
must be completed. This field is available in API version 64.0 and later when Site
Management is enabled.

TargetEnrolleeCount        Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The target enrollee count of the care program. This field is available for the
Participant Management feature in API version 61.0 and later.

TargetSiteCount            Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of sites planned for conducting the research study. This field is
available in API version 64.0 and later when Site Management is enabled.

<!-- page:37 -->

AFLS Overview                                                                                                          Clinical Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramFeed
Feed tracking is available for the object.
CareProgramHistory
History is available for tracked fields of the object.
CareProgramShare
Sharing is available for the object.



## CareProgramDetail

Represents the detail records related to the care program. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

CareProgramId                            Type
reference
Properties
Create, Filter, Group, Sort
Description
The care program that the specified detail is related to.
This field is a relationship field.
Relationship Name
CareProgram
Relationship Type
Master-detail
Refers To
CareProgram (the master object)

DetailRecordId                           Type
reference
Properties
Create, Filter, Group, Sort, Update

<!-- page:38 -->

AFLS Overview                                                                                      Clinical Engagement



Field                   Details


## Description

The detail of the specified type, associated with the specified care program.
This field is a polymorphic relationship field.
Relationship Name
DetailRecord
Refers To
CodeSet, CodeSetBundle, OmniProcess

DetailSubtype           Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The subtype of the care program detail.

DetailType              Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The type of detail specified in the Detail Record field for the specified care program.
Possible values are:
- CarePlanTemplate—Care Plan Template
- ClassificationCode—Classification Code
- ConditionCode—Condition Code
- Focus
- KeywordCode—Keyword Code
- Label
- OmniProcess—Omni Process
- RegionCode—Region Code
- Result
- StudyDesignCode—Study Design Code

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

<!-- page:39 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the care program detail.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramDetailChangeEvent on page 1426
Change events are available for the object.
CareProgramDetailFeed on page 1429
Feed tracking is available for the object.
CareProgramDetailHistory on page 1434
History is available for tracked fields of the object.



## CareProgramEligibilityRule

Represents a rule defining the criteria for patient care program enrollment eligibility. This entity creates an association between Care
Program and an Enrollment Eligibility Criteria.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                   Details

CareProgramId                           Type
reference

<!-- page:40 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Sort, Update
Description
Identifier of a care program. Represents a set of activities, such as therapy, wellness, or a
fitness plan, offered to participants by a healthcare provider, life sciences organization,
employer, or insurer.

EligibilityCriteriaId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Criteria that define patient enrollment eligibility for a care program.

IsInclusionRule         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the rule is included or excluded when determining care program eligibility.
This field is available in API version 62.0 and later.
The default value is false.

IsRequired              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the care program eligibility rule is required.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:41 -->

AFLS Overview                                                                                        Clinical Engagement



Field                    Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, Sort
Description
Name for the care program eligibility rule.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.

Status                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Defines whether the eligibility rule is in force or not.

Type                     Type
picklist

<!-- page:42 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Type of the eligibility Rule. This field is available for the Participant Management feature in
API version 61.0 and later.
Possible values are:
- Inclusion Rule
- Exclusion Rule
- Age Rule
- Gender Rule




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramEligibilityRuleChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramEligibilityRuleFeed
Feed tracking is available for the object.
CareProgramEligibilityRuleHistory
History is available for tracked fields of the object.
CareProgramEligibilityRuleOwnerSharingRule
Sharing rules are available for the object.
CareProgramEligibilityRuleShare
Sharing is available for the object.



## CareProgramEnrollee

Represents a participant enrolled in a care program.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:43 -->

AFLS Overview                                                                                  Clinical Engagement


Fields


## Field Name                 Details

AccountId                  Type
Lookup(Account)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person Account representing the enrollee

BenefitCoverageType        Type
Picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the coverage status of the enrollee under both Medicare and Medicaid.
Possible values are:
- ContinuedEnrollee
- NewEnrollee


## CareProgramId              Type

Master-Detail(Care Program)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Look up for Care Program.

ClinicalServiceRequestId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical service request associated with the care program enrollee.
This field is a relationship field and is available in API version 60.0 and later.
Relationship Name
ClinicalServiceRequest
Relationship Type
Lookup
Refers To
ClinicalServiceRequest

<!-- page:44 -->

AFLS Overview                                                                            Clinical Engagement




## Field Name               Details

CurrentWorkOrderId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work order that's currently being executed for the care program enrollee.
This field is a relationship field and is available for the Advanced Therapy
Management feature in API version 58.0 and later.
Relationship Name
CurrentWorkOrder
Relationship Type
Lookup
Refers To
CarePgmEnrolleeWorkOrder

CurrentWorkOrderStepId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work order step that's currently being executed for the care program enrollee.
This field is a relationship field and is available for the Advanced Therapy
Management feature in API version 58.0 and later.
Relationship Name
CurrentWorkOrderStep
Relationship Type
Lookup
Refers To
CarePgmEnrolleeWkOrdStep

EnrolledAtId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The site, location, or territory where the enrollee enrolled in the care program.
This field is available in API version 64.0 when Site Management is enabled.
This field is a polymorphic relationship field.
Relationship Name
EnrolledAt

<!-- page:45 -->

AFLS Overview                                                                           Clinical Engagement



Field Name              Details

Refers To
CareProgramSite

EnrolleeType            Type
Picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies whether the enrollee is a new enrollee or a continued enrollee.
Possible values are:
- FullBenefitDual
- PartialBenefitDual
- NonDual
- Dual

EnrollmentLocationId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The service territory where an advanced therapy care program is executed.
This field is a relationship field and is available for the Advanced Therapy
Management feature in API version 59.0 and later.
Relationship Name
EnrollmentLocation
Relationship Type
Lookup
Refers To
ServiceTerritory

FlowInterviewId         Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Runtime instance of the associated flow.
This field is a relationship field.
Relationship Name
FlowInterview

<!-- page:46 -->

AFLS Overview                                                                               Clinical Engagement



Field Name                    Details

Refers To
FlowInterview

FlowOrchestrationInstanceId   Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Runtime instance of the associated flow orchestration.
This field is a relationship field.
Relationship Name
FlowOrchestrationInstance
Refers To
FlowOrchestrationInstance

IsPatientInLtrmCareFacility   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates that the patient was at a long-term healthcare facility during outreach
or enrollment to the care program. This field is available for the Medication
Management feature in API version 56.0 and later.
The default value is false.

LastReferencedDate            Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate                Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

<!-- page:47 -->

AFLS Overview                                                                              Clinical Engagement




## Field Name                  Details

LeadId                      Type
Lookup(Lead)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lead representing the enrollee.

Name                        Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of the enrollee.

OptOutPeriodEndDateTime     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which the patient’s opt-out from the care program ends. This field
is available in API version 56.0 and later.

OptOutPeriodStartDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date that the patient opted out of the care program. This field is available in
API version 56.0 and later.

OptOutReasonType            Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reason why the patient opted out of the care program. This field is available
in API version 56.0 and later.

ResearchStudyCandidateId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:48 -->

AFLS Overview                                                                            Clinical Engagement



Field Name               Details


## Description

The related Research Study Candidate record of the care program enrollee.
This field is a relationship field.
Relationship Name
ResearchStudyCandidate
Refers To
ResearchStudyCandidate

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The UserId for the record owner. This field is a polymorphic relationship field.
This field is available in API version 58.0 and later.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the enrollee record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the enrollee record was sourced.

Status                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Status of the enrollee.
Possible values are:
- Active
- Inactive

<!-- page:49 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field Name                                          Details

UserId                                              Type
Lookup(User)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
User representing the enrollee.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramEnrolleeChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramEnrolleeFeed
Feed tracking is available for the object.
CareProgramEnrolleeHistory
History is available for tracked fields of the object.
CareProgramEnrolleeOwnerSharingRule (API version 58.0)
Sharing rules are available for the object.
CareProgramEnrolleeShare (API version 58.0)
Sharing is available for the object.



## CareProgramSite

Represents the details about the care program site. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

ActlFirstPtcpEnrlDate                   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the first participant was enrolled in the study at the site. This field is
available in API version 64.0 and later when Site Management is enabled.

<!-- page:50 -->

AFLS Overview                                                                                          Clinical Engagement




## Field                     Details

ActlFstPtcpFstVstDate     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the first enrolled participant at the site had their initial study visit, as
specified in the study protocol. This field is available in API version 64.0 and later when Site
Management is enabled.

ActlFstPtcpLastVstDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the first enrolled participant at the site completed their final scheduled
study visit, as outlined in the study protocol. This field is available in API version 64.0 and
later when Site Management is enabled.

ActlLastPtcpEnrlDate      Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the last participant was enrolled in the study at the site. This field is
available in API version 64.0 and later when Site Management is enabled.

ActualPtcpEnrollmentCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual number of participants that are enrolled for the research study at the site. This
field is available in API version 62.0 and later when Site Management is enabled.

ActualPtcpEnrollmentDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual number of days spent enrolling participants at the site. This field is available in
API version 62.0 and later when Site Management is enabled.

<!-- page:51 -->

AFLS Overview                                                                                           Clinical Engagement




## Field                     Details

ActualPtcpEnrollmentRate Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The actual rate of participant enrollment at the site. This field is available in API version 64.0
and later when Site Management is enabled.

ActlLastPtcpFstVstDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the last enrolled participant at the site had their initial study visit, as
defined by the study protocol. This field is available in API version 64.0 and later when Site
Management is enabled.

ActlLastPtcpLastVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the last enrolled participant at the site completed their final scheduled
study visit, as outlined in the study protocol. This field is available in API version 64.0 and
later when Site Management is enabled.

CareProgramId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program associated with the research study that's conducted at the specified site.
This field is a relationship field.
Relationship Name
CareProgram
Refers To
CareProgram

ClnclTrialAgreeSignedDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:52 -->

AFLS Overview                                                                                             Clinical Engagement



Field                      Details


## Description

The date when the clinical trial agreement for the site was signed. This field is available in
API version 64.0 and later when Site Management is enabled.

ClnclTrialAgreeTrnarndDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The time taken to execute the clinical trial agreement. This field is available in API version
62.0 and later when Site Management is enabled.

ForcstFirstPtcpEnrlDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected date when the first participant enrolls in the study at the site. This field is
available in API version 64.0 and later when Site Management is enabled.

ForcstFstPtcpFstVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected date when the first enrolled participant at the site has their initial study visit,
such as a screening or a baseline visit. This field is available in API version 64.0 and later when
Site Management is enabled.

ForcstFstPtcpLastVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The initially projected date when the first enrolled participant at the site completes their final
scheduled study visit, as defined in the study protocol. This field is available in API version
64.0 and later when Site Management is enabled.

ForcstLastPtcpEnrlDate     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:53 -->

AFLS Overview                                                                                          Clinical Engagement



Field                     Details


## Description

The projected date when the final participant enrolls in the study at the site. This field is
available in API version 64.0 and later when Site Management is enabled.

ForcstLastPtcpFstVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected date when the last enrolled participant at the site has their initial study visit,
as defined by the study protocol. This field is available in API version 64.0 and later when Site
Management is enabled.

ForcstLastPtcpLastVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The initially projected date when the last enrolled participant at the site completes their final
scheduled study visit, as outlined in the study protocol. This field is available in API version
64.0 and later when Site Management is enabled.

HealthCareFacilityId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The health care facility associated with the care program site.
This field is a relationship field.
Relationship Name
HealthCareFacility
Refers To
HealthcareFacility

InvestigatorId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The investigator who is responsible for conducting the research study at the healthcare
facility. This field is available in API version 63.0 and later when Site Management is enabled.
This field is a relationship field.

<!-- page:54 -->

AFLS Overview                                                                                        Clinical Engagement



Field                    Details

Relationship Name
Investigator
Refers To
HealthcareProvider

InvtglProductReleaseDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of days between the start of the site activation process to the release of the
investigational product at the site. This field is available in API version 62.0 and later when
Site Management is enabled.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

LocationId               Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The location associated with the care program site.
This field is a relationship field.
Relationship Name
Location
Refers To
Location

<!-- page:55 -->

AFLS Overview                                                                                         Clinical Engagement




## Field                      Details

Name                       Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the care program site.

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the object assigned to the territory.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

PlannedPtcpEnrollmentRate Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The planned rate of participant enrollment, based on the estimates by the investigator at
the site.

PredictedPtcpEnrollmentRate Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The predicted rate of participant enrollment at the site.

ProjectedPtcpEnrlCount     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of participants that are expected to enroll for the research study at the site. This
field is available in API version 62.0 and later when Site Management is enabled.

<!-- page:56 -->

AFLS Overview                                                                                           Clinical Engagement




## Field                      Details

ProjectedPtcpEnrlDrtn      Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected number of days to enroll participants at the site. This field is available in API
version 62.0 and later when Site Management is enabled.

ProtocolDeviationCount     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of protocol deviations reported during the research study at the site. This field
is available in API version 62.0 and later when Site Management is enabled.

QualVstToInitVstDrtn       Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of days between the site qualification visit and site initiation visit. This field is
available in API version 62.0 and later when Site Management is enabled.

RandomizedParticipantCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of participants randomly assigned to different study groups at the site. This field
is available in API version 62.0 and later when Site Management is enabled.

RegulatoryDocTurnaroundDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The turnaround time for the preparation of the regulatory documents for IRB or the ethics
committee submission. This field is available in API version 62.0 and later when Site
Management is enabled.

<!-- page:57 -->

AFLS Overview                                                                                        Clinical Engagement




## Field                    Details

ResearchStudyId          Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The research study associated with the care program site.
This field is a relationship field.
Relationship Name
ResearchStudy
Refers To
ResearchStudy

RsrchStudyCmplPtcpCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of participants who completed the research study at the site. This field is available
in API version 62.0 and later when Site Management is enabled.

ScreenedParticipantCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of participants screened for the research study at the site. This field is available
in API version 62.0 and later when Site Management is enabled.

SeriousAdverseEventCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of serious adverse events reported during the research study at the site. This
field is available in API version 62.0 and later when Site Management is enabled.

SiteActivatedDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:58 -->

AFLS Overview                                                                                        Clinical Engagement



Field                    Details


## Description

The date when the site was activated for the research study. This field is available in API
version 64.0 and later when Site Management is enabled.

SiteClosedOutDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date when the site was closed out for the research study. This field is available in API
version 64.0 and later when Site Management is enabled.

SiteIdentifiedDate       Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date when the site was identified for the feasibility for conducting research study. This
field is available in API version 64.0 and later when Site Management is enabled.

SiteActvToFirstPtcpDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of days between the site activation and the first participant visit to the site. This
field is available in API version 62.0 and later when Site Management is enabled.

SiteActvToLastPtcpDrtn   Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of days between the site activation and the last participant visit to the site. This
field is available in API version 62.0 and later when Site Management is enabled.

SponsorRepresentativeId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:59 -->

AFLS Overview                                                                                        Clinical Engagement



Field                   Details


## Description

The representative of the sponsor for the site during the research study. This field is available
in API version 62.0 and later when Site Management is enabled.
This field is a relationship field.
Relationship Name
SponsorRepresentative
Refers To
Contact

Status                  Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The status of the care program site.
Possible values are:
- Inactive
- Recruitment Closed
- Recruitment Ongoing
- Trial Completed
- Trial Ongoing
- Trial Upcoming

TeamId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The team associated with the care program site.
This field is a relationship field.
Relationship Name
Team
Refers To
Team

UnitOfMeasureId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:60 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                    Details


## Description

The unit of measure for selected duration. This field is available in API version 62.0 and later
when Site Management is enabled.
This field is a relationship field.
Relationship Name
UnitOfMeasure
Refers To
UnitOfMeasure




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramSiteOwnerSharingRule
Sharing rules are available for the object.
CareProgramSiteShare
Sharing is available for the object.



## CareProgramStatusPeriod

Represents the historical changes to the status of a care program. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

AreDatesTentative                        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the period dates are actual or expected.
The default value is false.

CareProgram                              Type
reference
Properties
Create, Filter, Group, Sort

<!-- page:61 -->

AFLS Overview                                                                                        Clinical Engagement



Field                    Details


## Description

The parent care program associated with the status.
This field is a relationship field.
Relationship Name
CareProgram
Relationship Type
Master-detail
Refers To
CareProgram (the master object)

EffectiveEndDateTime     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time of the period when the specified status was in effect for the specified
care program.

EffectiveStartDateTime   Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The start date and time of the period when the specified status was in effect for the specified
care program.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

<!-- page:62 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the care program status period.

Reason                                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reason why the care program was assigned the status.

Status                                  Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the care program.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
careprogramstatusperiodChangeEvent on page 1426
Change events are available for the object.
careprogramstatusperiodFeed on page 1429
Feed tracking is available for the object.
careprogramstatusperiodHistory on page 1434
History is available for tracked fields of the object.



## CareProgramTeamMember

Represents a person who delivers services under a program, such as a program manager or care coordinator.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:63 -->

AFLS Overview                                                                         Clinical Engagement


Fields


## Field Name              Details

AccountId               Type
Lookup(Account)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person account representing the team member.


## CareProgramId           Type

Master-Detail(CareProgram)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lookup for the care program.

Category                Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the category that the member belongs to. This field is available for the
Participant Management feature in API version 61.0 and later.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

<!-- page:64 -->

AFLS Overview                                                                            Clinical Engagement




## Field Name               Details

MemberId                 Type
dateTime
Properties
Filter, Nillable, Sort
Description
The team member associated with the care program team member. This field is
available for the Participant Management feature in API version 61.0 and later.

Name                     Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of the care program team member.

Role                     Type
Picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Role of the team member.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.

UserId                   Type
Lookup(User)
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:65 -->

AFLS Overview                                                                                                          Clinical Engagement



Field Name                                          Details


## Description

User representing the team member.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramTeamMemberChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramTeamMemberFeed
Feed tracking is available for the object.
CareProgramTeamMemberHistory
History is available for tracked fields of the object.



## CarePgmEnrleeStatusPeriod

Represents the historical changes to the status or stage of a care program enrollee. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CareProgramEnrolleeId                   Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent Care program Enrollee that's associated with the status period.
This field is a relationship field.
Relationship Name
CareProgramEnrollee
Relationship Type
Master-detail
Refers To
CareProgramEnrollee (the master object)

EffectiveEndDateTime                    Type
dateTime

<!-- page:66 -->

AFLS Overview                                                                                        Clinical Engagement



Field                    Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The effective end date and time of the role.

EffectiveStartDateTime   Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The effective start date and time of the role.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the care program enrollee status period.

Status                   Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the enrollee.

<!-- page:67 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

StatusReason                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reason for the status.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CarePgmEnrleeStatusPeriodChangeEvent on page 1426
Change events are available for the object.
CarePgmEnrleeStatusPeriodFeed on page 1429
Feed tracking is available for the object.
CarePgmEnrleeStatusPeriodHistory on page 1434
History is available for tracked fields of the object.



## CarePgmEnrollmentEvalRslt

Represents the result of an evaluation done to assess the eligibility of a participant enrolling for a research study or care program. This
object is available in API version 62.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CareProgramEligibilityRuleId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program eligibility rule that’s used to do the evaluation.
This field is a relationship field.
Relationship Name
CareProgramEligibilityRule

<!-- page:68 -->

AFLS Overview                                                                                     Clinical Engagement



Field                     Details


## Refers To

CareProgramEligibilityRule

EnrolleeReferenceRecordId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The record of the object that's associated with the evaluation.
This field is a polymorphic relationship field.
Relationship Name
EnrolleeReferenceRecord
Refers To
CareProgramEnrollee, ResearchStudyCandidate

EvaluationIdentifier      Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The unique identifier for each evaluation.

IsLatestEvaluation        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the evaluation is the latest (true) or not (false).
The default value is false.

LastReferencedDate        Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate            Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:69 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

Reason                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reason that describes the evaluation result.

RefRecordIdentifierList Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The list of reference record identifiers for the result.

Result                  Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update

<!-- page:70 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details


## Description

Specifies the result of the evaluation.
Possible values are:
- InsufficientData—Insufficient Data
- Match
- NotMatch—Not Match




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CarePgmEnrollmentEvalRsltChangeEvent on page 1426
Change events are available for the object.
CarePgmEnrollmentEvalRsltFeed on page 1429
Feed tracking is available for the object.
CarePgmEnrollmentEvalRsltHistory on page 1434
History is available for tracked fields of the object.
CarePgmEnrollmentEvalRsltOwnerSharingRule on page 1436
Sharing rules are available for the object.
CarePgmEnrollmentEvalRsltShare on page 1438
Sharing is available for the object.



## CarePgmTeamMbrRolePeriod

Represents the historical changes in the role of a care program team member. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CareProgramTeamMemberId Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent care program team member associated with the role.
This field is a relationship field.

<!-- page:71 -->

AFLS Overview                                                                                        Clinical Engagement



Field                    Details


## Relationship Name

CareProgramTeamMember
Relationship Type
Master-detail
Refers To
CareProgramTeamMember (the master object)

EffectiveEndDateTime     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time until when the team member is assigned the role.

EffectiveStartDateTime   Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The date and time when the team member was assigned the role.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort

<!-- page:72 -->

AFLS Overview                                                                                                   Clinical Engagement



Field                                 Details


## Description

The name of the care program team member role period.

Role                                  Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the role of the care program team member.
Possible values are:
- Collaborator
- Contact-General
- Contact-Recruitment
- Funding Source
- Primary Investigator
- Sponsor
- Sponsor-Investigator
- Sponsor-Lead
- Study-Chair
- Study-Director
- Subinvestigator




## DiagnosticSummary

Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0 and
later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

AttachmentLanguage                    Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:73 -->

AFLS Overview                                                                                    Clinical Engagement



Field                   Details


## Description

Records the language of the attached document.


## BasedOnId               Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the medication or clinical service request that the diagnostic summary is based
on.
Referenced Objects
- MedicationStatement
- ClinicalServiceRequest

CareObservationId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the care observation that’s a part of the diagnostic summary.
Referenced Objects
- ClinicalServiceRequest

Category                Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the category of the department or service that the diagnostic summary is a product
of.
Possible values are:
- Community
- Inpatient
- Outpatient
- Patient Specified

ClinicalEncounterId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:74 -->

AFLS Overview                                                                                 Clinical Engagement



Field                   Details


## Description

Specifies the encounter that the diagnostic summary is about.
Referenced Objects
- ClinicalEncounter

CodeId                  Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that describes the diagnostic summary.
Referenced Objects
- CodeSetBundle

CaseId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The case associated with the diagnostic summary.
This field is a relationship field.
Relationship Name
Case
Refers To
Case

ContentDocumentId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The content document associated with diagnostic summary. You can include up to 5
documents in the PDF format. This field is available in API version 62.0 and later.
This field is a relationship field.
Referenced Objects
- ContentDocument

EffectiveEndDateTime    Type
dateTime

<!-- page:75 -->

AFLS Overview                                                                                   Clinical Engagement



Field                    Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The end date and time of the clinically relevant period of the summary.

EffectiveStartDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time of the clinically relevant period of the summary.

ImageComments1           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Comments about the first image linked in the report.

ImageComments2           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Comments about the second image linked in the report.

ImageComments3           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Comments about the third image linked in the report.

ImageComments4           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Comments about the fourth image linked in the report.

ImageComments5           Type
string

<!-- page:76 -->

AFLS Overview                                                                        Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Comments about the fifth image linked in the report.

ImageUrl1               Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The link to a key image associated with the diagnostic summary.

ImageUrl2               Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The link to a key image associated with the diagnostic summary.

ImageUrl3               Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The link to a key image associated with the diagnostic summary.

ImageUrl4               Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The link to a key image associated with the diagnostic summary.

ImageUrl5               Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The link to a key image associated with the diagnostic summary.

InterpretedById         Type
reference

<!-- page:77 -->

AFLS Overview                                                                                 Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
References the person or organization responsible for interpreting the diagnostic summary
and its conclusions.
Referenced Objects
- CarePerformer

IssuedById              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care performer that issues the diagnostic summary.
Referenced Objects
- CarePerformer

IssuedDateTime          Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the diagnostic summary was issued.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date that the record was referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date that the record was viewed.

Name                    Type
string

<!-- page:78 -->

AFLS Overview                                                                                   Clinical Engagement



Field                    Details


## Properties

Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the diagnostic summary record.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the diagnostic summary record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
- Group
- User


## PatientId                Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
References the patient who is the subject of the diagnostic summary.
Referenced Objects
- Account

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The source system from where the record was brought into Salesforce.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:79 -->

AFLS Overview                                                                                   Clinical Engagement



Field                   Details


## Description

The identifier of the record in its source system.

SourceSystemModified    Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

Status                  Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The status of the diagnostic summary.
Possible values are:
- Active
- Completed
- Entered-in-error
- Intended
- Not-taken
- On-hold
- Stopped
- Unknown

Summary                 Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical conclusion of the tests performed in the diagnostic service.

SummaryCodeId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the clinical conclusion of the tests as reported in
the diagnostic service.

<!-- page:80 -->

AFLS Overview                                                                                                       Clinical Engagement



Field                                 Details

Referenced Objects
- CodeSetBundle

UsageType                             Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies whether the information in the record represents a diagnostic summary or a
document reference.
Possible values are:
- DiagnosticSummary—Diagnostic Summary
- DocumentReference—Document Reference




## Usage

DiagnosticSummary is used to store records representing both DiagnosticReport and DocumentReference type information from
FHIR-based systems. You can use the UsageType field to specify which records represent diagnostic reports and which records represent
document references.
For document reference records, you can also use the DiagnosticSummaryDetail child object to associate authors, related documents,
and related encounters to your DiagnosticSummary record.



## Additional Information for DiagnosticSummary in Other Objects

In addition to creating a record using these fields, you can add more details to your DiagnosticSummary record by creating records in
certain other objects, and referencing your DiagnosticSummary record as the parent record. Here’s the list of objects you can associate
to DiagnosticSummary in this way, the type of information they add, and the field they use to reference DiagnosticSummary.

Object                                        Type of Information                            Reference Field
Identifier                                    Associates an identifier value to the          ParentRecordId
diagnostic summary.

DiagnosticSummaryDetail                       Associates document reference-type             DiagnosticSummaryId
DiagnosticSummary records with various
other records and defines the nature of
association. For instance, authors, related
documents, and related encounters.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
DiagnosticSummaryChangeEvent (API version 58.0)
Change events are available for the object.

<!-- page:81 -->

AFLS Overview                                                                                                   Clinical Engagement




## DiagnosticSummaryFeed

Feed tracking is available for the object.
DiagnosticSummaryHistory
History is available for tracked fields of the object.
DiagnosticSummaryOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
DiagnosticSummaryShare (API version 56.0)
Sharing is available for the object.



## DiagnosticSummaryDetail

Represents additional information associated with document reference-type DiagnosticSummary records. This additional information
may be related documents, authors, or related encounters. This object is available in API version 52.0 and later.



## DigitalVerification

Stores information about the verification of a related record. This object is available in API version 60.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

Comment                                 Type
textarea
Properties
Create, Nillable, Update
Description
Stores additional comments about the verification.

DesignatedVerifierId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The user or user group who can provide verification for a parent reference record.
This field is a polymorphic relationship field.
Relationship Name
DesignatedVerifier
Relationship Type
Lookup

<!-- page:82 -->

AFLS Overview                                                                                                Clinical Engagement



Field                           Details

Refers To
Group, User

DigitalVerificationSetupDetailId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The details associated with the digital verification setup record.
This field is a relationship field.
Relationship Name
DigitalVerificationSetupDetail
Relationship Type
Lookup
Refers To
DigitalVerfSetupDetail

LastReferencedDate              Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed a record indirectly; for example, through
a list view or related record.

LastViewedDate                  Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record. If this value is null, it’s possible
that this record was referenced (LastReferencedDate) and not viewed.

Name                            Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the digital verification record.

<!-- page:83 -->

AFLS Overview                                                                             Clinical Engagement




## Field                   Details

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
ID of the owner of this object.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ParentReferenceRecordId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The parent reference record that is verified.
This field is a polymorphic relationship field.
Relationship Name
ParentReferenceRecord
Relationship Type
Lookup
Refers To
ClinicalTrial__c, CustodyChainEntry, DemoObject__c, HC24__AccountAccountRelation__c,
HC24__CandidatePatient__c, HC24__CardView_Dropdown__c, HC24__CarePlanGoal__c,
HC24__CarePlanProblem__c, HC24__CarePlanTemplateGoal__c,
HC24__CarePlanTemplateProblem__c, HC24__CarePlanTemplateTask__c,
HC24__CarePlanTemplate__c, HC24__CareProgramPlanTemplate__c,
HC24__Clinical_Assessment_Response__c, HC24__CommunityProfileName__c,
HC24__ConditionToHCCCodeMapping__c, HC24__ContactContactRelation__c,
HC24__CrossObjectRelationship__c, HC24__CustomFieldSets__c,
HC24__CustomLabelConfig__c, HC24__EHRProcedurePerformer__c,
HC24__EHRProcedureRequest__c, HC24__EHRProcedure__c,
HC24__EhrAllergyIntolerance__c, HC24__EhrCarePlanActivity__c,
HC24__EhrCarePlanConcern__c, HC24__EhrCarePlanGoal__c,
HC24__EhrCarePlanParticipant__c, HC24__EhrCarePlan__c,
HC24__EhrConditionRelatedItem__c, HC24__EhrCondition__c, HC24__EhrDevice__c,
HC24__EhrDosageInstruction__c, HC24__EhrEncounterAccomodation__c,
HC24__EhrEncounterParticipant__c, HC24__EhrEncounter__c,
HC24__EhrImmunizationReaction__c, HC24__EhrImmunization__c,

<!-- page:84 -->

AFLS Overview                                                                                 Clinical Engagement




## Field                    Details

HC24__EhrMedicationPrescription__c, HC24__EhrMedicationStatement__c,
HC24__EhrObservation__c, HC24__EhrPatientCareProvider__c,
HC24__EhrPatientContact__c, HC24__EhrPatient__c, HC24__EhrPractitionerIdentity__c,
HC24__EhrPractitionerQualification__c, HC24__EhrPractitionerRole__c,
HC24__EhrPractitioner__c, HC24__EhrRelatedObservation__c, HC24__EhrRelatedPerson__c,
HC24__EhrVaccinationProtocol__c, HC24__EhrVirtualDeviceChannel__c,
HC24__EhrVirtualDevice__c, HC24__FilterColumn__c, HC24__FilterCondition__c,
HC24__FilterCriterion__c, HC24__HcFlexibleCarePlanTabs__c,
HC24__HealthCloudFeatureToggle__c, HC24__HousingAssessment__c,
HC24__IndustriesAppConfig__c, HC24__IndustriesSettings__c,
HC24__PatientCardViewConfiguration__c, HC24__ProgramPatientAffiliation__c,
HC24__ProgramPatientSummary__c, HC24__Program__c, HC24__Provider__c,
HC24__ReciprocalRole__c, HC24__TaskGroups__c, HC24__TimelineViewConfiguration__c,
HC24__UsePersonAccount__c, HC24__individualExcludedFields__c, custom_sk__c,
vlocity_lwc20__CardFrameworkConfiguration__c, vlocity_lwc20__DRBatchQueue__c,
vlocity_lwc20__DRBulkData__c, vlocity_lwc20__DREncryption__c,
vlocity_lwc20__DRWorker__c, vlocity_lwc20__Interface_DRGeneric__c,
vlocity_lwc20__TestResult__c, vlocity_lwc20__TriggerSetup__c,
vlocity_lwc20__UISettings__c, vlocity_lwc20__VlocityDataPack__c,
vlocity_lwc20__VlocityDocuSignTemplate__c, vlocity_lwc20__VlocityErrorLogEntry__c,
vlocity_lwc20__VlocityScheduledJob__c, vlocity_lwc20__VlocityTrackingEntry__c

PostVerificationMessage Type
textarea
Properties
Create, Nillable, Update
Description
The message that is displayed after a verification is performed.

PreVerificationMessage   Type
textarea
Properties
Create, Nillable, Update
Description
The message that is displayed before a verification is performed.

VerificationDateTime     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the verification of the related record was done.

<!-- page:85 -->

AFLS Overview                                                                                    Clinical Engagement




## Field                      Details

VerificationRequestDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the verification was requested.

VerificationSite           Type
textarea
Properties
Create, Nillable, Update
Description
The place where the verification is done.

VerificationStatus         Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of verification for the parent reference record.

VerificationStatusCategory Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The status category of the verification for the parent reference record.
Possible values are:
- Completed
- OnHold
- ReadyForSigning
- RejectedClosed
- RejectedOpen

VerifiedById               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The user who performed the verification.

<!-- page:86 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

This field is a polymorphic relationship field.
Relationship Name
VerifiedBy
Relationship Type
Lookup
Refers To
User

VerifierOrder                           Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The order of the verifier who performed the verification.
Possible values are:
- FifthVerifier
- FirstVerifier
- FourthVerifier
- SecondVerifier
- ThirdVerifier




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
DigitalVerificationHistory on page 1434
History is available for tracked fields of the object.
DigitalVerificationShare on page 1438
Sharing is available for the object.



## EnrollmentEligibilityCriteria

Represents criteria that define patient enrollment eligibility for one or more care programs.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:87 -->

AFLS Overview                                                                                       Clinical Engagement


Fields


## Field                   Details

Description             Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
A comprehensive description of the enrollment eligibility criteria.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, Sort
Description
A short name for the enrollment eligibility criteria.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

SourceSystem            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:88 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                    Details


## Description

System from which the record was sourced.

SourceSystemIdentifier                   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
EnrollmentEligibilityCriteriaChangeEvent (API version 59.0)
Change events are available for the object.
EnrollmentEligibilityCriteriaFeed
Feed tracking is available for the object.
EnrollmentEligibilityCriteriaHistory
History is available for tracked fields of the object.
EnrollmentEligibilityCriteriaOwnerSharingRule
Sharing rules are available for the object.
EnrollmentEligibilityCriteriaShare
Sharing is available for the object.



## ResearchStudy

Represents the details of a research study that include its design, execution, and oversight. This object is available in API version 61.0
and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

ActlFirstPtcpEnrlDate                    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:89 -->

AFLS Overview                                                                                           Clinical Engagement



Field                    Details


## Description

The actual date when the first participant was enrolled in the study at a participating clinical
trial site. This field is available in API version 64.0 and later when Site Management is enabled.

ActlFstPtcpFstVstDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the first enrolled participant across all sites had their initial study visit,
as specified in the study protocol. This field is available in API version 64.0 and later when
Site Management is enabled.

ActlFstPtcpLastVstDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the first enrolled participant across all sites completed their final
scheduled study visit, as outlined in the study protocol. This field is available in API version
64.0 and later when Site Management is enabled.

ActlLastPtcpEnrlDate     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the final participant was enrolled in the study across all participating
clinical trial sites. This field is available in API version 64.0 and later when Site Management
is enabled.

ActlLastPtcpFstVstDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the last enrolled participant across all sites had their initial study visit,
as defined by the study protocol. This field is available in API version 64.0 and later when Site
Management is enabled.

ActlLastPtcpLastVstDate Type
date

<!-- page:90 -->

AFLS Overview                                                                                        Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the last enrolled participant across all sites completed their final
scheduled study visit, as outlined in the study protocol. This field is available in API version
64.0 and later when Site Management is enabled.

ActualFinalDbLockDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The actual date when the final database lock is implemented across the clinical trial sites.
This field is available in API version 64.0 and later when Site Management is enabled.

BiospecRetention        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the retention of the collected participant samples in a biorepository. This field is
available in API version 62.0 and later.
Possible values are:
- None Retained
- Samples With DNA
- Samples Without DNA

BlindingTypeCodeId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Blinding Type of the Care Program.
This field is a polymorphic relationship field.
Relationship Name
BlindingTypeCode
Refers To
CodeSet, CodeSetBundle

CareProgramId           Type
reference

<!-- page:91 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The care program associated with the research study.
This field is a relationship field.
Relationship Name
CareProgram
Refers To
CareProgram

CareSpecialtyId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care specialty associated with the research study. This field is available in API version
62.0 and later.
This field is a relationship field.

Description             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A detailed description of the research.

DiscontinuationReason   Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The reason why the research was discontinued.
Possible values are:
- Accrual Goal Met
- Lack of Progress
- Temporarily Closed as per Study Design
- Toxicity

EligibleGender          Type
picklist

<!-- page:92 -->

AFLS Overview                                                                                          Clinical Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the gender that's eligible for the research study.
Possible values are:
- Any
- Female
- Male
- Transgender

EligibleMaximumAge       Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The maximum eligibility age of a candidate for the research study.

EligibleMinimumAge       Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The minimum eligibility age of a candidate for the research study.

EndDate                  Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date when the research ends.


ForcstFirstPtcpEnrlDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected date when the first participant enrolls in the study at a participating clinical
trial site. This field is available in API version 64.0 and later when Site Management is enabled.

ForcstFstPtcpLastVstDate Type
date

<!-- page:93 -->

AFLS Overview                                                                                             Clinical Engagement



Field                     Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The initially projected date when the first enrolled participant across all sites completes their
final scheduled study visit, as defined in the study protocol. This field is available in API version
64.0 and later when Site Management is enabled.

ForcstFstPtcpFstVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected date when the first enrolled participant across all sites has their initial study
visit, such as a screening or baseline visit. This field is available in API version 64.0 and later
when Site Management is enabled.

ForcstLastPtcpEnrlDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected date when the final participant enrolls in the study across all participating
clinical trial sites. This forecast is based on the planned sample size and recruitment rate. This
field is available in API version 64.0 and later when Site Management is enabled.

ForcstLastPtcpFstVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The projected date when the last enrolled participant across all sites has their initial study
visit, as defined by the study protocol. This field is available in API version 64.0 and later when
Site Management is enabled.

ForcstLastPtcpLastVstDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The initially projected date when the last enrolled participant across all sites completes their
final scheduled study visit, as outlined in the study protocol. This field is available in API
version 64.0 and later when Site Management is enabled.

<!-- page:94 -->

AFLS Overview                                                                                          Clinical Engagement




## Field                      Details

InclusionExclusionCriteria Type
textarea
Properties
Create, Nillable, Update
Description
The inclusion criteria and exclusion criteria of the research study.

IntentType                 Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The type of the research, based on the intent of its activities.
Possible values are:
- Basic Science
- Device Feasibility
- Diagnostic Study
- Health Services Research
- Prevention
- Screening
- Supportive Care
- Treatment

LastReferencedDate         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate             Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                       Type
string

<!-- page:95 -->

AFLS Overview                                                                                      Clinical Engagement



Field                    Details


## Properties

Create, Filter, Group, idLookup, Sort, Update
Description
The name of the research study.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

Phase                    Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The current phase of the research.
Possible values are:
- Early Phase 1
- Not Applicable
- Phase 1
- Phase 1/Phase 2
- Phase 2
- Phase 2/Phase 3
- Phase 3
- Phase 4

PlannedFinalDbLockDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The planned date when the final database lock is implemented across the clinical trial sites.
This field is available in API version 64.0 and later when Site Management is enabled.

<!-- page:96 -->

AFLS Overview                                                                             Clinical Engagement




## Field                      Details

PrimaryContactInformationId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The primary phone number of the candidate.
This field is a relationship field.
Relationship Name
PrimaryContactInformation
Refers To
ContactPointPhone

ProtocolDocumentId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The protocol content document associated with the research study.
This field is a relationship field.
Relationship Name
ProtocolDocument
Refers To
ContentDocument

PublicationStatus          Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The publication status of the research study's record.
Possible values are:
- Active
- Draft
- Retired
- Unknown

ResearchStudyNumber        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:97 -->

AFLS Overview                                                                                   Clinical Engagement



Field                      Details


## Description

The identifier of the research study.

ShouldAcptHealthyCandidates Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the research study should accept healthy candidates (true) or not
(false).
The default value is false.

SourceSystem               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the external system that generated the record.

SourceSystemIdentifier     Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The ID of the record in the external system.

SourceSystemModified       Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed in the source system.

StartDate                  Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date when the research starts.

Summary                    Type
textarea

<!-- page:98 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                    Details


## Properties

Create, Nillable, Update
Description
A brief summary of the research.

Title                                    Type
textarea
Properties
Create, Nillable, Update
Description
The human-readable name of the research study.

Type                                     Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of research study.
Possible values are:
- Interventional
- Observational

UniformResourceIdentifier Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The canonical identifier of the research study.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ResearchStudyChangeEvent on page 1426
Change events are available for the object.
ResearchStudyFeed on page 1429
Feed tracking is available for the object.
ResearchStudyHistory on page 1434
History is available for tracked fields of the object.
ResearchStudyShare on page 1438
Sharing is available for the object.

<!-- page:99 -->

AFLS Overview                                                                                                   Clinical Engagement




## ResearchStudyCandidate

Represents the details of the research participant which includes the associated account and the status of the subject. This object is
available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

CandidateId                           Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The candidate of the research study.
This field is a polymorphic relationship field.
Relationship Name
Candidate
Refers To
Account

CareProgramSiteId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The location where the study happens.
This field is a relationship field.
Relationship Name
CareProgramSite
Refers To
CareProgramSite

LastReferencedDate                    Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

<!-- page:100 -->

AFLS Overview                                                                                         Clinical Engagement




## Field                     Details

LastViewedDate            Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

MatchedExclusionCritCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of exclusion criteria fulfilled by the candidate during automatic evaluation. This
field is available in API version 62.0 and later.

MatchedInclusionCritCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of inclusion criteria fulfilled by the candidate during automatic evaluation. This
field is available in API version 62.0 and later.

Name                      Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study candidate.

OwnerId                   Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner

<!-- page:101 -->

AFLS Overview                                                                            Clinical Engagement



Field                    Details

Refers To
Group, User

ResearchStudyId          Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The research study that the Candidate is a part of.
This field is a relationship field.
Relationship Name
ResearchStudy
Refers To
ResearchStudy

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the external system that generated the record.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The ID of the record in the external system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed in the source system.

SourceType               Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update

<!-- page:102 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                    Details


## Description

Specifies the type of source from where the information about the candidate is obtained.
Possible values are:
- Others
- Participant Registry
- Referrals
- Site Patient Pool

Status                                   Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The status of the research study candidate.
Possible values are:
- Consent
- Enrolled
- New
- Randomization
- Referral Accepted
- Rejected
- Screening




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
researchstudycandidateChangeEvent on page 1426
Change events are available for the object.
researchstudycandidateFeed on page 1429
Feed tracking is available for the object.
researchstudycandidateHistory on page 1434
History is available for tracked fields of the object.
researchstudycandidateShare on page 1438
Sharing is available for the object.



## ResearchStudyCmprGroup

Represents the details of a research study comparison group. This object is available in API version 61.0 and later.

<!-- page:103 -->

AFLS Overview                                                                                        Clinical Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                    Details

AllocationRatioValue     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The comparison group's allocation ratio in the research study randomization.

Description              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the research study comparison group.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the research study randomization comparison group.

<!-- page:104 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

OwnerId                                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the object assigned to the territory.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

ResearchStudyId                         Type
reference
Properties
Create, Filter, Group, Sort
Description
The research study associated with the research study comparison group.
This field is a relationship field.
Relationship Name
ResearchStudy
Refers To
ResearchStudy

TypeCodeId                              Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The code set associated with the research study comparison group.
This field is a relationship field.
Relationship Name
TypeCode
Refers To
CodeSet




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.

<!-- page:105 -->

AFLS Overview                                                                                                Clinical Engagement




## ResearchStudyCmprGroupFeed on page 1429

Feed tracking is available for the object.
ResearchStudyCmprGroupHistory on page 1434
History is available for tracked fields of the object.
ResearchStudyCmprGroupShare on page 1438
Sharing is available for the object.



## ResearchStudyProtocolInfo

Represents details of the research study protocol document. This object is available in API version 62.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

Content                                 Type
textarea
Properties
Create, Update
Description
The content text for the research study protocol.

ContentType                             Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the type of the content stored.
Possible values are:
- Abbreviations
- Adverse Events Classification
- Adverse Events Definition
- Adverse Events Participant Reporting
- Adverse Events Reporting
- Analysis Dataset Criteria
- Analysis Population Criteria
- Background
- Biospecimen Sample Retention

<!-- page:106 -->

AFLS Overview                                                      Clinical Engagement




## Field                   Details

- Clinical Masking Description
- Clinical Monitoring
- Confidentiality and Privacy
- Conflict of Interest Policy
- Data Handling and Record Keeping
- Dosage Justification
- End of Study Procedure
- Event Assessment Frequency and Time Period
- Gender Eligibility Description
- Informed Consent Process
- Intervention Benefits
- Intervention Compliance
- Intervention Discontinuation
- Intervention Dosing and Administration
- Intervention Preparation
- Intervention Risks
- Intervention Risks and Benefits Assessments
- Intervention Storage and Stability
- Lost to Follow-up
- Pregnancy Reporting
- Primary Endpoint Analysis
- Protocol Deviations
- Publication and Data Sharing Policy
- Quality Assurance and Control
- Safety Analysis
- Safety Oversight
- Sample Size Determination
- Secondary Endpoint Analysis
- Serious Adverse Events Definition
- Serious Adverse Events Reporting
- Special Interest Reporting
- Statistical Analysis Summary
- Study Design
- Study Discontinuation and Closure
- Study Population
- Study Population Description
- Study Record Retention Period
- Study Scientific Rationale

<!-- page:107 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details
- Subgroup Analysis
- Summary

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last referenced a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study protocol information.

ResearchStudyId         Type
reference
Properties
Create, Filter, Group, Sort
Description
The research study associated with the content.
This field is a relationship field.
Relationship Name
ResearchStudy
Relationship Type
Master-detail
Refers To
ResearchStudy (the master object)

<!-- page:108 -->

AFLS Overview                                                                                                      Clinical Engagement




## ResearchStudyRelation

Represents different related research studies. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate                         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                   Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study relation.

RelatedResearchStudyId                 Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The smaller research study that's a part of the larger study.
This field is a relationship field.
Relationship Name
RelatedResearchStudy

<!-- page:109 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details

Refers To
ResearchStudy

ResearchStudyId                         Type
reference
Properties
Create, Filter, Group, Sort
Description
The larger research study that the smaller study is a part of.
This field is a relationship field.
Relationship Name
ResearchStudy
Relationship Type
Master-detail
Refers To
ResearchStudy (the master object)




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ResearchStudyRelationChangeEvent on page 1426
Change events are available for the object.
ResearchStudyRelationFeed on page 1429
Feed tracking is available for the object.
ResearchStudyRelationHistory on page 1434
History is available for tracked fields of the object.



## ResearchStudyRndmBlockSlot

Represents the individual randomization block items corresponding to a Research Study Randomization Block This object is available in
API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:110 -->

AFLS Overview                                                                                        Clinical Engagement


Fields


## Field                    Details

ItemAssignmentStatus     Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the status of the research study randomization block item.
Possible values are:
- Abandoned
- Assigned
- Available

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study randomization block slot.

ResearchStudyCmprGroupId Type
reference
Properties
Create, Filter, Group, Sort, Update

<!-- page:111 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details


## Description

The research study comparison group associated with the research study randomization
block item.
This field is a relationship field.
Relationship Name
ResearchStudyCmprGroup
Refers To
ResearchStudyCmprGroup

RsrchStdyRandomizationBlkId Type
reference
Properties
Create, Filter, Group, Sort
Description
The research study randomization block associated with the research study randomization
block item.
This field is a relationship field.
Relationship Name
RsrchStdyRandomizationBlk
Relationship Type
Master-detail
Refers To
RsrchStdyRandomizationBlock (the master object)

SequenceNumber                          Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The sequence number of the research study randomization block item.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ResearchStudyRndmBlockSlotChangeEvent on page 1426
Change events are available for the object.
ResearchStudyRndmBlockSlotFeed on page 1429
Feed tracking is available for the object.
ResearchStudyRndmBlockSlotHistory on page 1434
History is available for tracked fields of the object.

<!-- page:112 -->

AFLS Overview                                                                                                     Clinical Engagement




## ResearchStudyRndmBlockSlotOwnerSharingRule on page 1436

Sharing rules are available for the object.
ResearchStudyRndmBlockSlotShare on page 1438
Sharing is available for the object.



## ResearchStdyCndtStatusPrd

Represents the time duration during which a research study candidate is assigned a specific status. This object is available in API version
61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

EffectiveEndDateTime                  Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The effective end date and time of the candidate status.

EffectiveStartDateTime                Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The effective start date and time of the candidate status.

LastReferencedDate                    Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate                        Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:113 -->

AFLS Overview                                                                                        Clinical Engagement



Field                    Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study candidate status period.

ResearchStudyCandidateId Type
reference
Properties
Create, Filter, Group, Sort
Description
The research study candidate associated with the research study candidate status period.
This field is a relationship field.
Relationship Name
ResearchStudyCandidate
Relationship Type
Master-detail
Refers To
ResearchStudyCandidate (the master object)

Status                   Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the candidate.
Possible values are:
- Dropped
- Eligible
- Enrolled
- Evaluation Completed
- Evaluation In Progress
- In Consideration
- Ineligible
- New

<!-- page:114 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details
- Pre-screening
- Randomized
- Rejected
- Screening

StatusReason                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reason why the candidate was assigned the status.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ResearchStdyCndtStatusPrdChangeEvent
Change events are available for the object.



## ResearchStdyCmprGroupCndt

Represents the junction between a research study control group and a research study candidate. This object is available in API version
61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CandidateAllocSourceId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The context through which the research study candidate is mapped to the research study
group.
This field is a polymorphic relationship field.
Relationship Name
CandidateAllocSource

<!-- page:115 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details


## Refers To

ResearchStudyRndmBlockSlot, devopsimpkg11__CardFrameworkConfiguration__c,
devopsimpkg11__DRBatchQueue__c, devopsimpkg11__DRBulkData__c,
devopsimpkg11__DREncryption__c, devopsimpkg11__DRWorker__c,
devopsimpkg11__Interface_DRGeneric__c, devopsimpkg11__TestResult__c,
devopsimpkg11__TriggerSetup__c, devopsimpkg11__UISettings__c,
devopsimpkg11__VlocityDataPack__c, devopsimpkg11__VlocityDocuSignTemplate__c,
devopsimpkg11__VlocityErrorLogEntry__c, devopsimpkg11__VlocityScheduledJob__c,
devopsimpkg11__VlocityTrackingEntry__c

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study comparison group candidate.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the object assigned to the territory.
This field is a polymorphic relationship field.
Relationship Name
Owner

<!-- page:116 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details

Refers To
Group, User

ResearchStudyCandidateId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The research study candidate associated with the research study candidate group.
This field is a relationship field.
Relationship Name
ResearchStudyCandidate
Refers To
ResearchStudyCandidate

ResearchStudyCmprGroupId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The research study group associated with the research study candidate group.
This field is a relationship field.
Relationship Name
ResearchStudyCmprGroup
Refers To
ResearchStudyCmprGroup




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ResearchStdyCmprGroupCndtFeed on page 1429
Feed tracking is available for the object.
ResearchStdyCmprGroupCndtHistory on page 1434
History is available for tracked fields of the object.
ResearchStdyCmprGroupCndtShare on page 1438
Sharing is available for the object.

<!-- page:117 -->

AFLS Overview                                                                                                      Clinical Engagement




## RsrchStdyRandomizationCrit

Represents the criteria definition for grouping the candidates participating in the research study. This object is available in API version
61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

CareProgramSiteId                      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program site associated with the research study randomization criteria.
This field is a relationship field.
Relationship Name
CareProgramSite
Refers To
CareProgramSite

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate                         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                   Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort

<!-- page:118 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details


## Description

The name of the research study randomization criteria.

OwnerId                                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the object assigned to the territory.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

ResearchStdyRandomizationId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The research study randomization associated with the research study randomization criteria.
This field is a relationship field.
Relationship Name
ResearchStdyRandomization
Refers To
ResearchStdyRandomization




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
RsrchStdyRandomizationCritChangeEvent on page 1426
Change events are available for the object.
RsrchStdyRandomizationCritFeed on page 1429
Feed tracking is available for the object.
RsrchStdyRandomizationCritHistory on page 1434
History is available for tracked fields of the object.
RsrchStdyRandomizationCritShare on page 1438
Sharing is available for the object.

<!-- page:119 -->

AFLS Overview                                                                                                    Clinical Engagement




## ResearchStdyRandomization

Represents the randomization algorithm configuration defined for a research study. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

AlgorithmFlowDefinition Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The flow definition that contains the block generation algorithm.

AlgorithmType                         Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the algorithm type of the research study randomization.
Possible values are:
- Block
- Custom

Description                           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the research study randomization.

DoesAsgnCandidatesToGroups Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the randomization procedure should create a Research Study Comparison
Group Candidate record for candidates for the matching group.

<!-- page:120 -->

AFLS Overview                                                                                          Clinical Engagement




## Field                      Details

The default value is false.

DoesGenerateBlockOnDemand Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the algorithm can generate new blocks during randomization (true) or
not (false).
The default value is false.

LastReferencedDate         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate             Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

MaximumBlockSizeMultiplier Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The maximum multiplier that's applied to decide the size of a block type research study
randomization.

MinimumBlockSizeMultiplier Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The minimum multiplier that's applied to decide the size of a block type research study
randomization.

<!-- page:121 -->

AFLS Overview                                                                               Clinical Engagement




## Field                   Details

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the research study randomization.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the object assigned to the territory.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

RandomizationLevel      Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the randomization level of the research study randomization.
Possible values are:
- Central
- Noncentral

ResearchStudyId         Type
reference
Properties
Create, Filter, Group, Sort
Description
The research study associated with the research study randomization.
This field is a relationship field.
Relationship Name
ResearchStudy
Refers To
ResearchStudy

<!-- page:122 -->

AFLS Overview                                                                                                          Clinical Engagement




## Field                                   Details

Status                                  Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the status of the research study randomization.
Possible values are:
- Active
- Draft
- Inactive




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ResearchStdyRandomizationFeed on page 1429
Feed tracking is available for the object.
ResearchStdyRandomizationHistory on page 1434
History is available for tracked fields of the object.
ResearchStdyRandomizationShare on page 1438
Sharing is available for the object.



## RsrchStdyRandomizationBlock

Represents the details of a block that’s generated through the parameters specified in the research study randomization. This object is
available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CurrentBlockItemSeqNumber Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The sequence number of the item in the research study randomization block.

<!-- page:123 -->

AFLS Overview                                                                                          Clinical Engagement




## Field                      Details

LastReferencedDate         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate             Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                       Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study randomization block.

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the object assigned to the territory.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

ResearchStdyRandomizationId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The research study randomization associated with the research study randomization block.
This field is a relationship field.

<!-- page:124 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details


## Relationship Name

ResearchStdyRandomization
Refers To
ResearchStdyRandomization

RsrchStdyRndmCriteriaSrcId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The Research study criteria source associated with the research study randomization block.
This field is a polymorphic relationship field.
Relationship Name
RsrchStdyRndmCriteriaSrc
Refers To
CareProgramSite, RsrchStdyRandomizationCrit,
devopsimpkg11__CardFrameworkConfiguration__c, devopsimpkg11__DRBatchQueue__c,
devopsimpkg11__DRBulkData__c, devopsimpkg11__DREncryption__c,
devopsimpkg11__DRWorker__c, devopsimpkg11__Interface_DRGeneric__c,
devopsimpkg11__TestResult__c, devopsimpkg11__TriggerSetup__c,
devopsimpkg11__UISettings__c, devopsimpkg11__VlocityDataPack__c,
devopsimpkg11__VlocityDocuSignTemplate__c, devopsimpkg11__VlocityErrorLogEntry__c,
devopsimpkg11__VlocityScheduledJob__c, devopsimpkg11__VlocityTrackingEntry__c

Status                                  Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the status of the research study randomization block.
Possible values are:
- AllocationComplete—Allocation Complete
- Available
- InProgress—In Progress




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
RsrchStdyRandomizationBlockChangeEvent on page 1426
Change events are available for the object.

<!-- page:125 -->

AFLS Overview                                                                                                  Clinical Engagement




## RsrchStdyRandomizationBlockFeed on page 1429

Feed tracking is available for the object.
RsrchStdyRandomizationBlockHistory on page 1434
History is available for tracked fields of the object.
RsrchStdyRandomizationBlockShare on page 1438
Sharing is available for the object.



## ResearchStdySearchableField

Represents a common dataset that includes multiple fields and values from multiple objects and serves as the basis for searches related
to research studies. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                Details

CurrentEnrolleCount                  Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The current enrollment count of the research study.

Description                          Type
textarea
Properties
Create, Nillable, Update
Description
The description of the research study.

DoesAcceptHealthyCandidates Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the research study accepts healthy candidates (true) or not (false).
The default value is false.

EligibleGender                       Type
string

<!-- page:126 -->

AFLS Overview                                                                                   Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The eligible gender for the research study.

EndDateTime             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time of the research study.

Focus                   Type
textarea
Properties
Create, Nillable, Update
Description
The focus of the research study.

Intent                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The intent of the research study.

Keywords                Type
textarea
Properties
Create, Nillable, Update
Description
The keywords that are used to search for the research study.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime

<!-- page:127 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details


## Properties

Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

MaximumEligibleAge      Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The maximum eligible age for the research study.

MinimumEligibleAge      Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The minimum eligible age for the research study.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the research study searchable field.

OmniProcess             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the Omni Process associated with the research study.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the object assigned to the territory.
This field is a polymorphic relationship field.

<!-- page:128 -->

AFLS Overview                                                                                Clinical Engagement



Field                   Details

Relationship Name
Owner
Refers To
Group, User

Phase                   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The phase of the research study.

PrimaryConditionArea    Type
textarea
Properties
Create, Nillable, Update
Description
The focus area of the research study.

ResearchStudyId         Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The research study associated with the research study searchable field.
This field is a relationship field.
Relationship Name
ResearchStudy
Refers To
ResearchStudy

ResearchStudyNumber     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier number of the research study.

ResearchStudyType       Type
string

<!-- page:129 -->

AFLS Overview                                                                  Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The type of research study.

SiteCount               Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The count of sites where the research study is conducted.

Sponsor                 Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The sponsor of the research study.

StartDateTime           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time of the research study.

Status                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of the research study.

Summary                 Type
textarea
Properties
Create, Nillable, Update
Description
The summary of the research study.

TargetEnrolleeCount     Type
int

<!-- page:130 -->

AFLS Overview                                                                                                          Clinical Engagement



Field                                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The maximum enrollment count of the research study.

Title                                   Type
textarea
Properties
Create, Nillable, Update
Description
The title of the research study.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ResearchStdySearchableFieldChangeEvent on page 1426
Change events are available for the object.
ResearchStdySearchableFieldFeed on page 1429
Feed tracking is available for the object.
ResearchStdySearchableFieldHistory on page 1434
History is available for tracked fields of the object.
ResearchStdySearchableFieldShare on page 1438
Sharing is available for the object.



## Site Management

The Site Management data model helps life sciences organizations identify suitable sites for conducting research studies. Study managers
can search for the sites and investigators using the Criteria-Based Search and Filter, and send them assessments. From the assessment
responses, study managers can assign scores to the sites, investigators, and their responses. They can also tag the sites and investigators
for future site selection efforts.


Available in: Lightning Experience
Available in: Enterprise and Unlimited Editions with AFLS



The Site Management objects are available in API version 62.0 and later.

<!-- page:131 -->

AFLS Overview                                                                                                         Clinical Engagement




For more details and a larger image, visit the Data Model Gallery.



## CareProgramSiteContract

Represents the association of a care program site and a contract. This object is available in API version 62.0 and later.
CareSiteIstgrSearchableFld
Represents information about the clinical trial investigator associated with a site. This object is available in API version 63.0 and later.
PartyPublication
Represents the details of a party's publication. This object is available in API version 62.0 and later.
ResearchStudyProtocolInfo
Represents details of the research study protocol document. This object is available in API version 62.0 and later.



## CareProgramSiteContract

Represents the association of a care program site and a contract. This object is available in API version 62.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:132 -->

AFLS Overview                                                                                   Clinical Engagement


Fields


## Field                   Details

CareProgramSiteId       Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent care program site associated with the record that the sponsor intends to engage
through a contract.
This field is a relationship field.
Relationship Name
CareProgramSite
Relationship Type
Master-detail
Refers To
CareProgramSite

ContractId              Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The contract associated with the record between the sponsor and the care program site.
This field is a relationship field.
Relationship Name
Contract
Refers To
Contract

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last referenced a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:133 -->

AFLS Overview                                                                                                        Clinical Engagement



Field                                  Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                   Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the care program site contract.




## CareSiteIstgrSearchableFld

Represents information about the clinical trial investigator associated with a site. This object is available in API version 63.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

ActiveStudyCount                       Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The count of active research studies performed by the investigator for a specialty.

AverageActualPtcpEnrlDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average actual number of days for enrollment of participants at the site.

AverageOpdPatientCount                 Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:134 -->

AFLS Overview                                                                                         Clinical Engagement



Field                      Details


## Description

The average count of the patients who visit the OPD at the healthcare facility.

AvgActualPtcpEnrlCount     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average number of participants who enrolled for the research study at the site.

AvgClnclTrialAgreeDrtn     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average time taken to execute the clinical trial agreement.

AvgInvtglProductReleaseDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average number of days between the start of the site activation process to the release
of the investigational product at the site.

AvgQualVstToInitVstDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average number of days between the site qualification visit and site initiation visit.

AvgRgltyDocTrnarndDrtn     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average turnaround time for the preparation of the regulatory documents for Institutional
Review Board (IRB) or the Ethics Committee (EC) submission.

AvgSiteActvToFstPtcpDrtn Type
int

<!-- page:135 -->

AFLS Overview                                                                                         Clinical Engagement



Field                     Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The average number of days between the site activation and the first participant visit to the
site.

AvgSiteActvToLastPtcpDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average number of days between the site activation and the last participant visit to the
site.

CompletedStudyCount       Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The count of research studies completed by the investigator for a specialty.

HealthcareFacilityCity    Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The city where the healthcare facility is located.

HealthcareFacilityClsfn Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The classification of the healthcare facility, such as Previous Partner, Key opinion Leader, and
New Member.

HealthcareFacilityCountry Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The country where the healthcare facility is located.

<!-- page:136 -->

AFLS Overview                                                                                        Clinical Engagement




## Field                      Details

HealthcareFacilityId       Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The healthcare facility associated with the site investigator.
This field is a relationship field.
Relationship Name
HealthcareFacility
Refers To
HealthcareFacility

HealthcareFacilityName     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the healthcare facility associated with the site investigator.

HealthcareFacilitySpecialty Type
textarea
Properties
Create, Nillable, Update
Description
The healthcare specialty associated with the healthcare facility.

HealthcareFacilityState Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The state where the healthcare facility is located.

HealthcareFacilityType     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of the healthcare facility associated with the site investigator, such as Government.

<!-- page:137 -->

AFLS Overview                                                                                        Clinical Engagement




## Field                      Details

HlthcrFacilRsrchStudyExprc Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The total years of experience of the healthcare facility in conducting research studies.

InvestigatorClassification Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The classification of the investigator, such as Previous Partner, Key Opinion Leader, and New
Member.

InvestigatorId             Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The investigator who conducts the research study at the healthcare facility.
This field is a relationship field.
Relationship Name
Investigator
Refers To
HealthcareProvider

InvestigatorName           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the investigator who conducts the research study at the healthcare facility.

InvestigatorTherapeuticArea Type
textarea
Properties
Create, Nillable, Update
Description
The therapeutic areas that an investigator specializes in, for example, Oncology and
Cardiology.

<!-- page:138 -->

AFLS Overview                                                                                             Clinical Engagement




## Field                      Details

InvestigatorType           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of the investigator who conducts the research study at the healthcare facility, such
as Investigator or Sub investigator.

InvtglProdtDestructionCpbl Type
textarea
Properties
Create, Nillable, Update
Description
The type of investigational product disposal capability.

InvtglProdtPreparationCpbl Type
textarea
Properties
Create, Nillable, Update
Description
Specifies the list of handling equipment available at the facility for the investigational product.

InvtglProductStorageCpbl Type
textarea
Properties
Create, Nillable, Update
Description
The features of the investigational product storage available at the healthcare facility.

IsAfflWithSiteMgmtOrg      Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the healthcare facility is affiliated to a site management organization
(true) or not (false).
The default value is false.

IsHealthcareFacilAcrdtAvl Type
boolean

<!-- page:139 -->

AFLS Overview                                                                                        Clinical Engagement



Field                      Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the healthcare facility is accredited to a healthcare accreditation body
(true) or not (false).
The default value is false.

IsIstgrLicenseAvailable Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the investigator has a license to conduct clinical trials (true) or not
(false).
The default value is false.

IsIstgrPublicationAvailable Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the investigator has published articles related to the research study (true)
or not (false).
The default value is false.

IsSatelliteSiteAssociated Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether satellite sites are associated with the healthcare facility (true) or not
(false).
The default value is false.

LaboratoryCapability       Type
textarea
Properties
Create, Nillable, Update
Description
The imaging and the non-imaging laboratory capabilities in the healthcare facility, such as
X-ray and blood tests.

<!-- page:140 -->

AFLS Overview                                                                                        Clinical Engagement




## Field                    Details

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the care site investigator searchable field.

OverallFacilityScore     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The overall score for the healthcare facility based on criteria such as facility experience and
licenses.

OverallInvestigatorScore Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The overall score of the investigator based on criteria, such as experience and licenses.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:141 -->

AFLS Overview                                                                                                    Clinical Engagement



Field                                   Details


## Description

The owner of the care site investigator searchable field record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

PatientAgeRange                         Type
textarea
Properties
Create, Nillable, Update
Description
The age range of the patients at the healthcare facility.

SuppInvtglProductType                   Type
textarea
Properties
Create, Nillable, Update
Description
The type of investigational product supported at the healthcare facility.

SupportedStudyPhase                     Type
textarea
Properties
Create, Nillable, Update
Description
The phases of the research study that are supported at the healthcare facility.

SupportedStudyType                      Type
textarea
Properties
Create, Nillable, Update
Description
The type of research study supported at the healthcare facility.




## PartyPublication

Represents the details of a party's publication. This object is available in API version 62.0 and later.

<!-- page:142 -->

AFLS Overview                                                                                         Clinical Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                    Details

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
The timestamp for when the current user last referenced a record related to this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the party publication.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

PartyId                  Type
reference

<!-- page:143 -->

AFLS Overview                                                                  Clinical Engagement



Field                   Details


## Properties

Create, Filter, Group, Sort, Update
Description
The party associated with the publication.
This field is a polymorphic relationship field.
Relationship Name
Party
Refers To
Account, HealthcareProvider, Individual

PublicationDate         Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which the publication is available.

PublicationIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier for the publication.

PublishedOn             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the journal where the publication is available.

Summary                 Type
textarea
Properties
Create, Nillable, Update
Description
The abstract of the publication.

Title                   Type
string

<!-- page:144 -->

AFLS Overview                                                                                                Clinical Engagement



Field                                 Details


## Properties

Create, Filter, Group, Sort, Update
Description
The title of the publication.

Url                                   Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The URL to the publication.




## ResearchStudyProtocolInfo

Represents details of the research study protocol document. This object is available in API version 62.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

Content                               Type
textarea
Properties
Create, Update
Description
The content text for the research study protocol.

ContentType                           Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the type of the content stored.
Possible values are:
- Abbreviations
- Adverse Events Classification
- Adverse Events Definition

<!-- page:145 -->

AFLS Overview                                                      Clinical Engagement




## Field                   Details

- Adverse Events Participant Reporting
- Adverse Events Reporting
- Analysis Dataset Criteria
- Analysis Population Criteria
- Background
- Biospecimen Sample Retention
- Clinical Masking Description
- Clinical Monitoring
- Confidentiality and Privacy
- Conflict of Interest Policy
- Data Handling and Record Keeping
- Dosage Justification
- End of Study Procedure
- Event Assessment Frequency and Time Period
- Gender Eligibility Description
- Informed Consent Process
- Intervention Benefits
- Intervention Compliance
- Intervention Discontinuation
- Intervention Dosing and Administration
- Intervention Preparation
- Intervention Risks
- Intervention Risks and Benefits Assessments
- Intervention Storage and Stability
- Lost to Follow-up
- Pregnancy Reporting
- Primary Endpoint Analysis
- Protocol Deviations
- Publication and Data Sharing Policy
- Quality Assurance and Control
- Safety Analysis
- Safety Oversight
- Sample Size Determination
- Secondary Endpoint Analysis
- Serious Adverse Events Definition
- Serious Adverse Events Reporting
- Special Interest Reporting
- Statistical Analysis Summary

<!-- page:146 -->

AFLS Overview                                                                                       Clinical Engagement



Field                   Details
- Study Design
- Study Discontinuation and Closure
- Study Population
- Study Population Description
- Study Record Retention Period
- Study Scientific Rationale
- Subgroup Analysis
- Summary

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last referenced a record related to this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the research study protocol information.

ResearchStudyId         Type
reference
Properties
Create, Filter, Group, Sort
Description
The research study associated with the content.
This field is a relationship field.
Relationship Name
ResearchStudy

<!-- guide:dev-guide section:patient-engagement pages:718-1369 -->
# Patient Engagement

AFLS Overview                                                                                                          Patient Engagement




## Patient Engagement

These objects are available for AFLS for Patient Engagement.



## Advanced Therapy Management

Advanced Therapy Management helps streamline complex procedures that involve multiple appointments across different locations.
Use Advanced Therapy Management’s Multi-Step Scheduling solution for easy scheduling of appointments for program participants.
Configure procedure steps based on lead times and set up affiliated service territories to establish where work types are sequentially
performed.
Care Program Management
Drive increased adherence and improve patient outcomes using the care program management data model. Now you can enroll
and manage patients to achieve the maximum impact of your programs.
Clinical Data Model
Patient data and healthcare records are important in the healthcare industry. Without accurate information, performing and managing
care becomes difficult. These records are readily available if a patient seeks care from the same provider every time. However, in
reality, a patient’s healthcare journey takes them to multiple providers and hospitals at different times. Because the patient’s health
hinges on the accuracy of their medical records, it’s crucial for the systems used by different providers and hospitals to be interoperable.
And to make this interoperability possible, it’s vital to have some industry-recognized standards for how these records are structured,
stored, and transferred. That’s where the standards defined by Health Level 7 (HL7) come in.
Electronic Signatures
Manage electronic signatures by using Digital Verifications. Set up signature trails for records or workflows that require users to verify
key updates. Define signature details such as the order of designated verifiers and whether designated verifiers belong to a user
group or have a specific participant role.
Financial Assistance Program
The financial assistance program data model helps life sciences organizations implement several financial assistance programs for
eligible patients to receive assistance with their out of pocket medical expenses.
Health Insurance
The health insurance data model provides objects for managing the ways care is paid for. It represents information about participants
such as employment, insurance coverage, and dependents. You can manage details of the benefits provided by plans to members
and treatment preauthorization requests made by members or providers.
Intelligent Document Automation
Use the Intelligent Document Automation data objects to simplify the document management process, reduce manual data entry,
and get patients the right care and services faster by managing patient and member forms all in one place, from intake through
processing.
Patient Program Outcome Management
Patient Program Outcome Management data model helps you to improve patient and program outcomes by defining and measuring
program outcomes, linking patient progress to program outcomes. Program Leads can define outcomes for a care program, and
can generate a program and patient outcome summary. Additionally, case agents can generate a patient outcome summary.
Pharmacy Benefits Verification
Pharmacy Benefits Verification uses a data model that’s FHIR-CARIN and NCPDP aligned to store its data and make it interoperable.
The pharmacy benefits verification data model supports drug manufacturers, providers, pharmacists, and life sciences organizations
in determining pharmacy benefits coverage for the medications prescribed to the patients under a care program.
Provider Relationship Management
Use the Provider Relationship Management data model along with standard Salesforce objects to manage your provider relationships.

<!-- page:719 -->

AFLS Overview                                                                                                      Patient Engagement



## Social Determinants

The social determinants data model represents the barriers, health determinants, and interventions for a patient or member. Available
in API version 45.0 and later.
Timeline
Use Timeline to configure a chronological view of records from multiple objects.



## Advanced Therapy Management

Advanced Therapy Management helps streamline complex procedures that involve multiple appointments across different locations.
Use Advanced Therapy Management’s Multi-Step Scheduling solution for easy scheduling of appointments for program participants.
Configure procedure steps based on lead times and set up affiliated service territories to establish where work types are sequentially
performed.
Advanced Therapy Management’s Multi-Step Scheduling is powered by Salesforce Scheduler to search for available slots at affiliated
service territories. With the combined help of new Advanced Therapy Management objects and existing Scheduler objects, Multi-Step
Scheduling provides a centralized platform that helps users book, reschedule, and cancel slots for various procedure steps.
Advanced Therapy Management helps pharmaceutical companies conduct complex therapies like cell and gene therapy with ease.
Treatment center coordinators can schedule appointments for procedure steps like apheresis, manufacturing, and infusion at one go.
Service territory relationships streamline search results by defining relationships between affiliated sites where consecutive therapy steps
are performed. Salesforce Scheduler’s existing objects support effective slot management by helping users configure service resources,
assets, and their availabilities at designated locations.
Advanced Therapy Management objects are available to users with the Multi-Step Scheduling permission set and permission set license.
Admins must also purchase the Asset Scheduler Add-On license for each asset assigned to a service territory.




For more details and a larger image, visit the Data Model Gallery.

<!-- page:720 -->

AFLS Overview                                                                                                        Patient Engagement



## AdvTherapyFieldOptOverride

Represents a list of fields with changed optionality, based on certain parameters. This object is available in API version 59.0 and later.
CarePgmEnrolleeWorkOrder
Represents information about the work order that's executed for the care program enrollee. This object is available in API version
58.0 and later.
CarePgmEnrolleeWkOrdStep
Represents information about the step in a work order that's executed for the care program enrollee. This object is available in API
version 58.0 and later.
CareProgramEnrollee
Represents a participant enrolled in a care program.
CustodyChainEntry
Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.
CustodyItem
Represents information about an item in the custody chain. This object is available in API version 59.0 and later.
CustodyVerfcTypeOverride
Represents information about the verification of an entry in the chain of custody. This object is available in API version 59.0 and later.
ServiceAppointmentGroup
Stores information about a group of related service appointments. This object is available in API version 56.0 and later.
ServiceTerritoryRelationship
Represents the relationship between service territories based on work types performed. This object is available in API version 56.0
and later.
Team
Represents the team of members associated with an organization. This object is available in API version 58.0 and later.
TeamMember
Represents the member associated with a team. This object is available in API version 58.0 and later.
WorkProcedure
Represents information about a procedure or process that's part of a program, such as a care program in Health Cloud or Life Sciences
Cloud.
WorkProcedureStep
Represents information about the work type that's a part of a work procedure.
WorkTypeExtension
Represents additional information about a work type.
WorkTypeStep
Represents each step within a work type.
WorkTypeStepLdTimeOvride
Represents the lead time that's used to override the default lead time required for the work procedure, work type, or work type step
that's performed at a service territory in a country. This object is available in API version 59.0 and later.

<!-- page:721 -->

AFLS Overview                                                                                                       Patient Engagement



## WorkTypeSvcTerrSchdPrio

Represents the priority of the combination of the service territory, work type, and work procedure while fetching appointment slots.
This object is available in API version 59.0 and later.


SEE ALSO:
Salesforce Scheduler Developer Guide: Salesforce Scheduler Standard Objects



## AdvTherapyFieldOptOverride

Represents a list of fields with changed optionality, based on certain parameters. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

CountryId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The country for which the override is applicable.
This field is a relationship field.
Relationship Name
Country
Relationship Type
Lookup
Refers To
GeoCountry

FieldList                              Type
textarea
Properties
Create, Update
Description
The list of fields with optionality that's overruled based on the priority of the conditions.

LastReferencedDate                     Type
dateTime

<!-- page:722 -->

AFLS Overview                                                                    Patient Engagement



Field                   Details


## Properties

Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the field optionality override record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the field optionality override record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Priority                Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The priority of each condition.

<!-- page:723 -->

AFLS Overview                                                                              Patient Engagement




## Field                   Details

ServiceTerritoryId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The service territory condition for which the override is applicable.
This field is a relationship field.
Relationship Name
ServiceTerritory
Relationship Type
Lookup
Refers To
ServiceTerritory

TaskName                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The task condition for which the override is applicable.

WorkProcedureId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work procedure condition for which the override is applicable.
This field is a relationship field.
Relationship Name
WorkProcedure
Relationship Type
Lookup
Refers To
WorkProcedure

WorkTypeId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work type condition for which the override is applicable.

<!-- page:724 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

This field is a relationship field.
Relationship Name
WorkType
Relationship Type
Lookup
Refers To
WorkType

WorkTypeStepId                          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work type step condition for which the override is applicable.
This field is a relationship field.
Relationship Name
WorkTypeStep
Relationship Type
Lookup
Refers To
WorkTypeStep




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AdvTherapyFieldOptOverrideChangeEvent (API version 60.0)
Change events are available for the object.
AdvTherapyFieldOptOverrideFeed
Feed tracking is available for the object.
AdvTherapyFieldOptOverrideHistory
History is available for tracked fields of the object.
AdvTherapyFieldOptOverrideOwnerSharingRule
Sharing rules are available for the object.
AdvTherapyFieldOptOverrideShare
Sharing is available for the object.



## CarePgmEnrolleeWorkOrder

Represents information about the work order that's executed for the care program enrollee. This object is available in API version 58.0
and later.

<!-- page:725 -->

AFLS Overview                                                                                    Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                    Details

CareProgramEnrolleeId    Type
reference
Properties
Create, Filter, Group, Sort
Description
This field represents the care program enrollee for whom the work order record is created.
This field is a relationship field.
Relationship Name
CareProgramEnrollee
Relationship Type
Master-Detail
Refers To
CareProgramEnrollee

EndDateTime              Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time for the execution of the care program enrollee work order.

IsCustodyCompleted       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether all the custody chain entries for the work order are completed (true) or
not (false).
The default value is false.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:726 -->

AFLS Overview                                                                                      Patient Engagement



Field                   Details


## Description

The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the work order record.

NextWorkOrderId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
This field represents next work order that's executed for the associated care program enrollee.
This field is a relationship field.
Relationship Name
NextWorkOrder
Relationship Type
Lookup
Refers To
CarePgmEnrolleeWorkOrder

PreviousWorkOrderId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The previous work order that's executed for the associated care program enrollee.
This field is a relationship field.
Relationship Name
PreviousWorkOrder

<!-- page:727 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details

Relationship Type
Lookup
Refers To
CarePgmEnrolleeWorkOrder

ServiceAppointmentId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
This field represents the service appointment that's associated with the work type.
This field is a relationship field.
Relationship Name
ServiceAppointment
Relationship Type
Lookup
Refers To
ServiceAppointment

StartDateTime           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time for the execution of the care program enrollee work order.

Status                  Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
This field specifies the execution status of the care program enrollee work order.
Possible values are:
- Canceled
- Completed
- InProgress
- NotStarted

WorkTypeId              Type
reference

<!-- page:728 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Properties

Create, Filter, Group, Sort, Update
Description
This field represents work type for which the work order of the care program enrollee is
created.
This field is a relationship field.
Relationship Name
WorkType
Relationship Type
Lookup
Refers To
WorkType




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CarePgmEnrolleeWorkOrderChangeEvent (API version 60.0)
Change events are available for the object.
CarePgmEnrolleeWorkOrderFeed
Feed tracking is available for the object.
CarePgmEnrolleeWorkOrderHistory
History is available for tracked fields of the object.



## CarePgmEnrolleeWkOrdStep

Represents information about the step in a work order that's executed for the care program enrollee. This object is available in API version
58.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

ActionPlanTemplateId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:729 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Description

Represents the action plan template containing the tasks related to each work order step.
This field is a relationship field.
Relationship Name
ActionPlanTemplate
Relationship Type
Lookup
Refers To
ActionPlanTemplate

AreAllTasksCompleted    Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Determine whether all the child tasks for the step are completed (true) or not (false).
The default value is false.

EndDateTime             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Represents the end date and time for the execution of the work order step.

IsCustodyCompleted      Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Determine whether all the custody chain entries for the step and the related tasks are
completed (true) or not (false).
The default value is false.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

<!-- page:730 -->

AFLS Overview                                                                                    Patient Engagement




## Field                     Details

LastViewedDate            Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                      Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
Represents the name of the step associated with the care program enrollee work order
record.

ParentEnrolleeWorkOrderId Type
reference
Properties
Create, Filter, Group, Sort
Description
Represents the parent work order of the care program enrollee that's associated with the
step.
This field is a relationship field.
Relationship Name
ParentEnrolleeWorkOrder
Relationship Type
Master-Detail
Refers To
CarePgmEnrolleeWorkOrder

SequenceNumber            Type
int
Properties
Create, Filter, Group, Sort, Update
Description
Represents the sequence in which the work order step will be executed.

StartDateTime             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:731 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Description

Represents the start date and time for the execution of the work order step.

Status                                  Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the execution status of the work order step.
Possible values are:
- Canceled
- Completed
- InProgress
- NotStarted

WorkTypeStepId                          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work type step for which the work order step of the care program enrollee is created.
This field is a polymorphic relationship field.
Relationship Name
WorkTypeStep
Relationship Type
Lookup
Refers To
WorkTypeStep




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CarePgmEnrolleeWkOrdStepChangeEvent (API version 60.0)
Change events are available for the object.
CarePgmEnrolleeWkOrdStepFeed on page 1429
Feed tracking is available for the object.



## CareProgramEnrollee

Represents a participant enrolled in a care program.

<!-- page:732 -->

AFLS Overview                                                                                                     Patient Engagement



Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field Name                                    Details

AccountId                                     Type
Lookup(Account)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person Account representing the enrollee

BenefitCoverageType                           Type
Picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the coverage status of the enrollee under both Medicare and Medicaid.
Possible values are:
- ContinuedEnrollee
- NewEnrollee


## CareProgramId                                 Type

Master-Detail(Care Program)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Look up for Care Program.

ClinicalServiceRequestId                      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical service request associated with the care program enrollee.
This field is a relationship field and is available in API version 60.0 and later.

<!-- page:733 -->

AFLS Overview                                                                            Patient Engagement



Field Name               Details


## Relationship Name

ClinicalServiceRequest
Relationship Type
Lookup
Refers To
ClinicalServiceRequest

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

<!-- page:734 -->

AFLS Overview                                                                           Patient Engagement



Field Name              Details


## Description

The site, location, or territory where the enrollee enrolled in the care program.
This field is available in API version 64.0 when Site Management is enabled.
This field is a polymorphic relationship field.
Relationship Name
EnrolledAt
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

<!-- page:735 -->

AFLS Overview                                                                               Patient Engagement



Field Name                    Details


## Description

Runtime instance of the associated flow.
This field is a relationship field.
Relationship Name
FlowInterview
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

<!-- page:736 -->

AFLS Overview                                                                              Patient Engagement



Field Name                  Details


## Properties

Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

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

<!-- page:737 -->

AFLS Overview                                                                             Patient Engagement



Field Name                 Details


## Description

The reason why the patient opted out of the care program. This field is available
in API version 56.0 and later.

ResearchStudyCandidateId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The related Research Study Candidate record of the care program enrollee.
This field is a relationship field.
Relationship Name
ResearchStudyCandidate
Refers To
ResearchStudyCandidate

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The UserId for the record owner. This field is a polymorphic relationship field.
This field is available in API version 58.0 and later.

SourceSystem               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the enrollee record was sourced.

SourceSystemIdentifier     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the enrollee record was sourced.

Status                     Type
picklist

<!-- page:738 -->

AFLS Overview                                                                                                          Patient Engagement



Field Name                                          Details


## Properties

Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Status of the enrollee.
Possible values are:
- Active
- Inactive

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



## CustodyChainEntry

Represents information about an entry or event in the chain of custody. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:739 -->

AFLS Overview                                                                                  Patient Engagement


Fields


## Field                   Details

AssessmentTaskId        Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The assessment task for which a custody chain entry is created.
This field is a relationship field.
Relationship Name
AssessmentTask
Relationship Type
Lookup
Refers To
AssessmentTask

CustodianId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The user, organization, or location that has custody of the item.
This field is a polymorphic relationship field.
Relationship Name
Custodian
Relationship Type
Lookup
Refers To
Account, Contact, ServiceTerritory, User

CustodyItemId           Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent custody item that's associated with the custody chain entry record.
This field is a relationship field.
Relationship Name
CustodyItem
Relationship Type
Master-Detail

<!-- page:740 -->

AFLS Overview                                                                                  Patient Engagement



Field                   Details

Refers To
CustodyItem

Description             Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the custody chain entry record of the item.

EndDateTime             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time of custody chain entry the item.

EnrolleeWorkOrderId     Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The care program enrollee work order for which a custody chain entry is created.
This field is a relationship field.
Relationship Name
EnrolleeWorkOrder
Relationship Type
Lookup
Refers To
CarePgmEnrolleeWorkOrder

EnrolleeWorkOrderStepId Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The care program enrollee work order step for which a custody chain entry is created.
This field is a relationship field.
Relationship Name
EnrolleeWorkOrderStep

<!-- page:741 -->

AFLS Overview                                                                           Patient Engagement



Field                   Details

Relationship Type
Lookup
Refers To
CarePgmEnrolleeWkOrdStep

ItemCustodySiteId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The place where the item is held in custody.
This field is a polymorphic relationship field.
Relationship Name
ItemCustodySite
Relationship Type
Lookup
Refers To
Address, Location, ServiceTerritory

ItemVerificationType    Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of verification for the item.
Possible values are:
- DualSignature
- FiveSignatures
- FourSignatures
- NoSignature
- NotApplicable
- SingleSignature
- ThreeSignatures

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

<!-- page:742 -->

AFLS Overview                                                                                     Patient Engagement




## Field                    Details

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the custody chain entry record.

RecordUpdateInformation Type
textarea
Properties
Create, Nillable, Update
Description
Stores information about the update in the custody chain entry for which the record was
created.

ReferenceObjectApiName   Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The API name of the reference object storing the stage, step, or task, or the custom object
record for which the custody chain entry is created. For internal use only.
Possible values are:
- AssessmentTask—Assessment Task
- CarePgmEnrolleeWkOrdStep—Care Program Enrollee Work Order Step
- CarePgmEnrolleeWorkOrder—Care Program Enrollee Work Order
- ForecastingItem__hd—Forecasting Item (Historical)

ReferenceRecordId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The stage, step, task, or any custom object for which the custody entry is created.

<!-- page:743 -->

AFLS Overview                                                                           Patient Engagement




## Field                   Details

This field is a polymorphic relationship field.
Relationship Name
ReferenceRecord
Relationship Type
Lookup
Refers To
AssessmentTask, CarePgmEnrolleeWkOrdStep, CarePgmEnrolleeWorkOrder

StartDateTime           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time of custody chain entry for the item.

Status                  Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the status of the custody entry record.
Possible values are:
- Completed
- New
- Rejected

StatusCategory          Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the category of the custody entry record's status.
Possible values are:
- Completed
- New
- Rejected

VerificationProcessType Type
picklist

<!-- page:744 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Properties

Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of process in which a verification is performed.
Possible values are:
- Parallel
- Sequential




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CustodyChainEntryChangeEvent (API version 60.0)
Change events are available for the object.
CustodyChainEntryFeed on page 1429
Feed tracking is available for the object.
CustodyChainEntryHistory on page 1434
History is available for tracked fields of the object.



## CustodyItem

Represents information about an item in the custody chain. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

Category                                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the category of the item that's in custody.

CollectionDateTime                      Type
dateTime

<!-- page:745 -->

AFLS Overview                                                                           Patient Engagement



Field                   Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The date and time when the custody item was collected.

Description             Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the item that's in custody.

ExternalIdentifier      Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The external identifier for the custody item or the custody chain.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the item that's in custody.

OwnerId                 Type
reference

<!-- page:746 -->

AFLS Overview                                                                                        Patient Engagement



Field                      Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ReferenceItemObjectApiName Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The API name of the reference object that stores the record of the item that's in custody. For
internal use only.
Possible values are:
- CareProgramEnrollee
- The API name of any custom object created in the org.

ReferenceItemRecordId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The API name of the reference object that stores the record of the item that's in custody.
This field is a relationship field.
Relationship Name
ReferenceItemRecord
Relationship Type
Lookup
Refers To
CareProgramEnrollee

Status                     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:747 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Description

Specifies the status of the item that's in custody.

SubjectId                                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The subject for which a custody item is collected.
This field is a polymorphic relationship field.
Relationship Name
Subject
Relationship Type
Lookup
Refers To
CareProgramEnrollee

UsageType                                Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The usage of the custody item in an application or cloud. For internal use only.
Possible values are:
- Healthcare




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CustodyItemChangeEvent (API version 60.0)
Change events are available for the object.
CustodyItemFeed
Feed tracking is available for the object.
CustodyItemHistory
History is available for tracked fields of the object.
CustodyItemOwnerSharingRule
Sharing rules are available for the object.
CustodyItemShare
Sharing is available for the object.

<!-- page:748 -->

AFLS Overview                                                                                                      Patient Engagement




## CustodyVerfcTypeOverride

Represents information about the verification of an entry in the chain of custody. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

CountryId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The country for which the custody event is configured.
This field is a relationship field.
Relationship Name
Country
Relationship Type
Lookup
Refers To
GeoCountry

CustodyVerificationType Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of verification required for a custody event.
Possible values are:
- DualSignature
- FiveSignatures
- FourSignatures
- NoSignature
- NotApplicable
- SingleSignature
- ThreeSignatures

DigitalVerificationSetupId Type
reference

<!-- page:749 -->

AFLS Overview                                                                     Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The digital verification setup associated with the override.
This field is a relationship field.
Relationship Name
DigitalVerificationSetup
Relationship Type
Lookup
Refers To
DigitalVerificationSetup

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the custody verification override record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the custody verification override record.
This field is a polymorphic relationship field.

<!-- page:750 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details

Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Priority                Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The priority number assigned to the conditions that apply to the custody verification.

ServiceTerritoryId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The service territory for which custody is being configured.
This field is a relationship field.
Relationship Name
ServiceTerritory
Relationship Type
Lookup
Refers To
ServiceTerritory

TaskName                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The task for which the custody event is being configured.

WorkProcedureId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work procedure for which custody is being configured.

<!-- page:751 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

This field is a relationship field.
Relationship Name
WorkProcedure
Relationship Type
Lookup
Refers To
WorkProcedure

WorkTypeId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work type for which custody is being configured.
This field is a relationship field.
Relationship Name
WorkType
Relationship Type
Lookup
Refers To
WorkType

WorkTypeStepId                          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work type step for which custody is being configured.
This field is a relationship field.
Relationship Name
WorkTypeStep
Relationship Type
Lookup
Refers To
WorkTypeStep




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.

<!-- page:752 -->

AFLS Overview                                                                                                      Patient Engagement



CustodyVerfcTypeOverrideChangeEvent (API version 60.0)
Change events are available for the object.
CustodyVerfcTypeOverrideFeed
Feed tracking is available for the object.
CustodyVerfcTypeOverrideHistory
History is available for tracked fields of the object.
CustodyVerfcTypeOverrideOwnerSharingRule
Sharing rules are available for the object.
CustodyVerfcTypeOverrideShare
Sharing is available for the object.



## ServiceAppointmentGroup

Stores information about a group of related service appointments. This object is available in API version 56.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

AppointmentGroupType                     Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Specifies the type of appointment group associated with the service appointment group.
Possible values are:
- Multi-Step
- Recurring

Description                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores information about the service appointment group.

LastReferencedDate                       Type
dateTime

<!-- page:753 -->

AFLS Overview                                                                             Patient Engagement



Field                   Details


## Properties

Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the service appointment group.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
ID of the record owner.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ReferenceRecordId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the record associated with the service appointment group.
This field is a polymorphic relationship field.

<!-- page:754 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details

Relationship Name
ReferenceRecord
Relationship Type
Lookup
Refers To
Account, CareProgramEnrollee, Case, Opportunity

Status                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the status of the service appointment group.
Possible values are:
- Awaiting Approval
- Canceled
- None
- Scheduled
The default value is None.

StatusCode              Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Specifies the status code used for scheduling the service appointment group.
Possible values are:
- Canceled
- Processed
- Proposed

WorkProcedureId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the work procedure associated with the service appointment group.
This field is a relationship field.
Relationship Name
WorkProcedure

<!-- page:755 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details

Relationship Type
Lookup
Refers To
WorkProcedure




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ServiceAppointmentChangeEvent (API version 60.0)
Change events are available for the object.
ServiceAppointmentGroupFeed
Feed tracking is available for the object.
ServiceAppointmentGroupHistory
History is available for tracked fields of the object.
ServiceAppointmentGroupShare
Sharing is available for the object.



## ServiceTerritoryRelationship

Represents the relationship between service territories based on work types performed. This object is available in API version 56.0 and
later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

LastReferencedDate                       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate                           Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:756 -->

AFLS Overview                                                                            Patient Engagement



Field                     Details


## Description

The most recent date on which a user viewed the record.

Name                      Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the service territory relationship.

OwnerId                   Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
ID of the record owner.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

RelatedServiceTerritoryId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The related service territory that's associated with a work type.
This field is a relationship field.
Relationship Name
RelatedServiceTerritory
Relationship Type
Lookup
Refers To
ServiceTerritory

ServiceTerritoryId        Type
reference

<!-- page:757 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Properties

Create, Filter, Group, Sort, Update
Description
The service territory that's associated with a work type.
This field is a relationship field.
Relationship Name
ServiceTerritory
Relationship Type
Lookup
Refers To
ServiceTerritory

WorkTypeId                              Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The work type that's performed at a service territory.
This field is a relationship field.
Relationship Name
WorkType
Relationship Type
Lookup
Refers To
WorkType




## Usage

Create a service territory relationship record to map affiliated sites where consecutive work types are performed. Select a service territory
where a work type—such as apheresis—is held. In Related Service Territory, select the service territory where the next work type—such
as manufacturing—is held.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ServiceTerritoryRelationshipChangeEvent (API version 60.0)
Change events are available for the object.
ServiceTerritoryRelationshipFeed
Feed tracking is available for the object.

<!-- page:758 -->

AFLS Overview                                                                                                    Patient Engagement




## ServiceTerritoryRelationshipHistory

History is available for tracked fields of the object.
ServiceTerritoryRelationshipShare
Sharing is available for the object.



## Team

Represents the team of members associated with an organization. This object is available in API version 58.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

LastReferencedDate                       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate                           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                                     Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the team.

OwnerId                                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the record owner.

<!-- page:759 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                    Details

This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Status                                   Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
This field specifies the status of the team.
Possible values are:
- Active
- Entered-in-Error
- Inactive
- Proposed
- Suspended




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
TeamChangeEvent (API version 60.0)
Change events are available for the object.
TeamFeed
Feed tracking is available for the object.
TeamHistory
History is available for tracked fields of the object.
TeamShare
Sharing is available for the object.



## TeamMember

Represents the member associated with a team. This object is available in API version 58.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:760 -->

AFLS Overview                                                                    Patient Engagement


Fields


## Field                   Details

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

MemberId                Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
This field represents the user that's part of the team.
This field is a polymorphic relationship field.
Relationship Name
Member
Relationship Type
Lookup
Refers To
Account, Contact, User

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the team member.

RoleId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:761 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Description

Represents the role associated with the member.
This field is a relationship field.
Relationship Name
Role
Relationship Type
Lookup
Refers To
ParticipantRole

TeamId                                  Type
reference
Properties
Create, Filter, Group, Sort
Description
This field represents the team that's associated with the member.
This field is a relationship field.
Relationship Name
Team
Relationship Type
Master-Detail
Refers To
Team




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
TeamMemberChangeEvent (API version 60.0)
Change events are available for the object.
TeamMemberFeed
Feed tracking is available for the object.
TeamMemberHistory
History is available for tracked fields of the object.



## WorkProcedure

Represents information about a procedure or process that's part of a program, such as a care program in Health Cloud or Life Sciences
Cloud.

<!-- page:762 -->

AFLS Overview                                                                                                 Patient Engagement



## Special Access Rules

Available in API version 61.0 and later with AFLS.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

AssociatedFlowOrchestratorName Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The API name of the flow orchestrator associated with the work procedure.

Description                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the work procedure.

IsActive                               Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active (true) or not (false).

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate                         Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:763 -->

AFLS Overview                                                                                 Patient Engagement



Field                   Details


## Description

The most recent date on which a user viewed the record.

LeadTimeUnitType        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The unit of measure for the lead time required to complete the work procedure.
Possible values are:
- Days
- Hours
- Minutes

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the work procedure.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
ID of the record owner.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ReferenceRecordId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The record ID of the object associated with this work procedure.

<!-- page:764 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

This field is a polymorphic relationship field.
Relationship Name
ReferenceRecord
Relationship Type
Lookup
Refers To
CareProgram




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
WorkProcedureChangeEvent (API version 60.0)
Change events are available for the object.
WorkProcedureFeed
Feed tracking is available for the object.
WorkProcedureHistory
History is available for tracked fields of the object.
WorkProcedureShare
Sharing is available for the object.



## WorkProcedureStep

Represents information about the work type that's a part of a work procedure.



## Special Access Rules

Available in API version 61.0 and later with AFLS.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AssociatedFlowName                      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:765 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details


## Description

Represents the flow definition that associated with the work procedure step.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

LeadTime                Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The time required before a work procedure step can begin.

LeadTimeUnitType        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The unit of measure used to calculate the lead time.
Possible values are:
- Days
- Hours
- Minutes

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the work procedure step.

<!-- page:766 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

SequenceNumber                          Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates the sequence in which the work type will be performed.

WorkProcedureId                         Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent work procedure that's associated with the step.
This field is a relationship field.
Relationship Name
WorkProcedure
Relationship Type
Master-Detail
Refers To
WorkProcedure

WorkTypeId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work type that's associated with the work procedure step.
This field is a relationship field.
Relationship Name
WorkType
Relationship Type
Lookup
Refers To
WorkType




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
WorkProcedureStepChangeEvent (API version 60.0)
Change events are available for the object.

<!-- page:767 -->

AFLS Overview                                                                                                   Patient Engagement




## WorkProcedureStepFeed

Feed tracking is available for the object.
WorkProcedureStepHistory
History is available for tracked fields of the object.



## WorkTypeExtension

Represents additional information about a work type.



## Special Access Rules

Available in API version 61.0 and later with AFLS.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

IconUrl                                Type
url
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The URL of the image related to the work type.

IsNonStandard                          Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the work type is nonstandard, that is, the work type can also be performed
at child service territories that aren’t part of the parent service territory.
The default value is FALSE.

IsSchedulingRequired                   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a work type requires scheduling.
The default value is FALSE.

<!-- page:768 -->

AFLS Overview                                                                                 Patient Engagement




## Field                   Details

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the work type extension.

ParentWorkTypeId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the parent record of the work type for which information is being added.
This field is a relationship field.
Relationship Name
ParentWorkType
Relationship Type
Lookup
Refers To
WorkType

WorkTypeId              Type
reference
Properties
Create, Filter, Group, Sort
Description
Represents the work type for which information is being added.

<!-- page:769 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

This field is a relationship field.
Relationship Name
WorkType
Relationship Type
Master-Detail
Refers To
WorkType




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
WorkTypeExtensionChangeEvent (API version 60.0)
Change events are available for the object.
WorkTypeExtensionFeed
Feed tracking is available for the object.
WorkTypeExtensionHistory
History is available for tracked fields of the object.



## WorkTypeStep

Represents each step within a work type.



## Special Access Rules

Available in API version 61.0 and later with AFLS.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

ActionPlanTemplateId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The action plan template associated with the work type step.
This field is a relationship field.

<!-- page:770 -->

AFLS Overview                                                                                  Patient Engagement



Field                   Details

Relationship Name
ActionPlanTemplate
Relationship Type
Lookup
Refers To
ActionPlanTemplate

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

LeadTime                Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The lead time required, in hours or days, to complete the work type step.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the work type step record.

ParentWorkTypeId        Type
reference
Properties
Create, Filter, Group, Sort
Description
The work type associated with the step.

<!-- page:771 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

This field is a relationship field.
Relationship Name
ParentWorkType
Relationship Type
Master-Detail
Refers To
WorkType

SequenceNumber                          Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The sequence number in which the work type step is performed.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
WorkTypeChangeEvent (API version 60.0)
Change events are available for the object.
WorkTypeStepFeed
Feed tracking is available for the object.
WorkTypeStepHistory
History is available for tracked fields of the object.



## WorkTypeStepLdTimeOvride

Represents the lead time that's used to override the default lead time required for the work procedure, work type, or work type step
that's performed at a service territory in a country. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CountryId                               Type
reference

<!-- page:772 -->

AFLS Overview                                                                                  Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The country for which priority is being defined.
This field is a relationship field.
Relationship Name
Country
Relationship Type
Lookup
Refers To
GeoCountry

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

LeadTime                Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The time taken, in hours or days, for the combination of work procedure, work type, work
type step, country, and service territory.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the work type step lead time override record.

<!-- page:773 -->

AFLS Overview                                                                   Patient Engagement




## Field                   Details

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the work type step lead time override record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Priority                Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The priority of the conditions for a lead time.

ServiceTerritoryId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The service territory for which priority is being defined.
This field is a relationship field.
Relationship Name
ServiceTerritory
Relationship Type
Lookup
Refers To
ServiceTerritory

WorkProcedureId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work procedure for which priority is being defined.

<!-- page:774 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

This field is a relationship field.
Relationship Name
WorkProcedure
Relationship Type
Lookup
Refers To
WorkProcedure

WorkTypeId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work type for which priority is being defined.
This field is a relationship field.
Relationship Name
WorkType
Relationship Type
Lookup
Refers To
WorkType

WorkTypeStepId                          Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The work type step for which priority is being defined.
This field is a relationship field.
Relationship Name
WorkTypeStep
Relationship Type
Lookup
Refers To
WorkTypeStep




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.

<!-- page:775 -->

AFLS Overview                                                                                                    Patient Engagement



WorkTypeStepLdTimeOvrideChangeEvent (API version 60.0)
Change events are available for the object.
WorkTypeStepLdTimeOvrideFeed
Feed tracking is available for the object.
WorkTypeStepLdTimeOvrideHistory
History is available for tracked fields of the object.
WorkTypeStepLdTimeOvrideOwnerSharingRule
Sharing rules are available for the object.
WorkTypeStepLdTimeOvrideShare
Sharing is available for the object.



## WorkTypeSvcTerrSchdPrio

Represents the priority of the combination of the service territory, work type, and work procedure while fetching appointment slots. This
object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

LastReferencedDate                      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the work type service territory scheduling priority record.

<!-- page:776 -->

AFLS Overview                                                                                         Patient Engagement




## Field                    Details

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the work type service territory scheduling priority record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ParentServiceTerritoryId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the parent service territory condition for which priority is being defined.
This field is a relationship field.
Relationship Name
ParentServiceTerritory
Relationship Type
Lookup
Refers To
ServiceTerritory

Priority                 Type
int
Properties
Create, Filter, Group, Sort, Update
Description
The combined priority of all the conditions for a service territory.

ServiceTerritoryId       Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Represents the service territory condition for which priority is being defined.

<!-- page:777 -->

AFLS Overview                                                                                     Patient Engagement




## Field                   Details

This field is a relationship field.
Relationship Name
ServiceTerritory
Relationship Type
Lookup
Refers To
ServiceTerritory

UsageType               Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The usage type of the scheduling priority in an application or cloud. For internal use only.
Possible values are:
- Healthcare

WorkProcedureId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the work procedure condition for which priority is being defined.
This field is a relationship field.
Relationship Name
WorkProcedure
Relationship Type
Lookup
Refers To
WorkProcedure

WorkTypeId              Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Represents the work type condition for which priority is being defined.
This field is a relationship field.
Relationship Name
WorkType

<!-- page:778 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details

Relationship Type
Lookup
Refers To
WorkType




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
WorkTypeSvcTerrSchdPrioChangeEvent (API version 60.0)
Change events are available for the object.
WorkTypeSvcTerrSchdPrioFeed
Feed tracking is available for the object.
WorkTypeSvcTerrSchdPrioHistory
History is available for tracked fields of the object.
WorkTypeSvcTerrSchdPrioOwnerSharingRule
Sharing rules are available for the object.
WorkTypeSvcTerrSchdPrioShare
Sharing is available for the object.



## Care Program Management

Drive increased adherence and improve patient outcomes using the care program management data model. Now you can enroll and
manage patients to achieve the maximum impact of your programs.
The program management data model represents the entire picture of a program—from products and providers to enrollment eligibility
of the enrollee. Available in API version 46.0 and later.

<!-- page:779 -->

AFLS Overview                                                                                                           Patient Engagement




For more details and a larger image, visit the Data Model Gallery.



## CarePgmProvHealthcareProvider

Represents a junction object identifying the primary healthcare professional associated with a care program provider and to look
up all healthcare professionals for care program providers. This object is available in API version 49.0 and later.
CareProgram
Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants
by an employer or insurer.
CareProgramCampaign
Represents a relationship between the Care Program object and the Campaign object. This junction object enables admins to
associate one or more campaigns to a program.
CareProgramEligibilityRule
Represents a rule defining the criteria for patient care program enrollment eligibility. This entity creates an association between Care
Program and an Enrollment Eligibility Criteria.
CareProgramEnrollee
Represents a participant enrolled in a care program.
CareProgramEnrolleeProduct
Represents the affiliation between a care program enrollee and a care program product, a care program provider, or both.
CareProgramEnrollmentCard
Represents a care program membership card that includes a membership number or enrollment code.
CareProgramGoal
Represents a business or clinical goal related to a care program.

<!-- page:780 -->

AFLS Overview                                                                                                      Patient Engagement



## CareProgramProduct

Represents the affiliation between a care program and a care program product, care program provider, or both.
CareProgramProvider
Represents a business account that is the service provider for a care program product.
CareProgramTeamMember
Represents a person who delivers services under a program, such as a program manager or care coordinator.
CareRegisteredDevice
Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version
49.0 and later.
CareSystemFieldMapping
Represents a mapping from source system fields to Salesforce target entities and attributes.
EnrollmentEligibilityCriteria
Represents criteria that define patient enrollment eligibility for one or more care programs.



## CarePgmProvHealthcareProvider

Represents a junction object identifying the primary healthcare professional associated with a care program provider and to look up all
healthcare professionals for care program providers. This object is available in API version 49.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

CareProgramProviderId                  Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the care program provider that is associated with the healthcare provider (healthcare
professional).

EffectiveFrom                          Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from when this association record is effective.

EffectiveTo                            Type
date

<!-- page:781 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The date when this association record is no longer effective.

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the healthcare provider (healthcare professional) that is associated with the care
program provider.

IsPrimaryProvider       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates that the healthcare provider (healthcare professional) is the primary provider for
the care program provider.

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
Create, Filter, Group, idLookup, Sort, Update

<!-- page:782 -->

AFLS Overview                                                                                                         Patient Engagement



Field                                   Details


## Description

The name for this association between a care program provider and a healthcare provider
(healthcare professional).

SourceSystem                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system from which the record was sourced.

SourceSystemIdentifier                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the system from which the record was sourced.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CarePgmProvHealthcareProviderChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.
CarePgmProvHealthcareProviderFeed
Feed tracking is available for the object.
CarePgmProvHealthcareProviderHistory
History is available for tracked fields of the object.



## CareProgram

Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants
by an employer or insurer.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:783 -->

AFLS Overview                                                                            Patient Engagement


Fields


## Field Name              Details

ActiveSiteCount         Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of active sites for conducting the research study. This field is available
in API version 64.0 and later when Site Management is enabled.

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

<!-- page:784 -->

AFLS Overview                                                                                 Patient Engagement



Field Name                    Details


## Description

The number of enrollees who have joined the care program to date. This field is
available for the Participant Management feature in API version 61.0 and later.

Description                   Type
Long Text Area
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A short description explaining the program.

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

<!-- page:785 -->

AFLS Overview                                                                             Patient Engagement




## Field Name               Details

FirstSiteClosedOutDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the first site is closed out.

FirstSiteActivatedDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
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

<!-- page:786 -->

AFLS Overview                                                                              Patient Engagement



Field Name                 Details


## Description

Name of the third-party program sponsor, if any.

SourceSystemIdentifier     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.

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

<!-- page:787 -->

AFLS Overview                                                                                                          Patient Engagement




## Field Name                                          Details

TargetSiteCount                                     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of sites planned for conducting the research study. This field is
available in API version 64.0 and later when Site Management is enabled.




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



## CareProgramCampaign

Represents a relationship between the Care Program object and the Campaign object. This junction object enables admins to associate
one or more campaigns to a program.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field Name                                          Details

CampaignId                                          Type
Lookup(Campaign)
Properties
Create, Filter, Group, Sort
Description
The campaign associated to the care program.

<!-- page:788 -->

AFLS Overview                                                                          Patient Engagement




## Field Name               Details

CareProgram              Type
Master-Detail(Care Program)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the care program.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, Sort
Description
A short name for the care program campaign.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the care program campaign was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:789 -->

AFLS Overview                                                                                                        Patient Engagement



Field Name                                          Details


## Description

ID of the system from which the record was sourced.

Status                                              Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of the care program campaign record.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareProgramCampaignChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.
CareProgramCampaignFeed
Feed tracking is available for the object.
CareProgramCampaignHistory
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
Properties
Create, Filter, Group, Sort, Update
Description
Identifier of a care program. Represents a set of activities, such as therapy, wellness, or a
fitness plan, offered to participants by a healthcare provider, life sciences organization,
employer, or insurer.

<!-- page:790 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

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
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string

<!-- page:791 -->

AFLS Overview                                                                                        Patient Engagement



Field                    Details


## Properties

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
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Type of the eligibility Rule. This field is available for the Participant Management feature in
API version 61.0 and later.
Possible values are:

<!-- page:792 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details
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


Fields


## Field Name                                          Details

AccountId                                           Type
Lookup(Account)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person Account representing the enrollee

<!-- page:793 -->

AFLS Overview                                                                                  Patient Engagement




## Field Name                 Details

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

CurrentWorkOrderId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work order that's currently being executed for the care program enrollee.
This field is a relationship field and is available for the Advanced Therapy
Management feature in API version 58.0 and later.

<!-- page:794 -->

AFLS Overview                                                                            Patient Engagement



Field Name               Details

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
Refers To
CareProgramSite

EnrolleeType             Type
Picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies whether the enrollee is a new enrollee or a continued enrollee.

<!-- page:795 -->

AFLS Overview                                                                                 Patient Engagement



Field Name                    Details
Possible values are:
- FullBenefitDual
- PartialBenefitDual
- NonDual
- Dual

EnrollmentLocationId          Type
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

FlowInterviewId               Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Runtime instance of the associated flow.
This field is a relationship field.
Relationship Name
FlowInterview
Refers To
FlowInterview

FlowOrchestrationInstanceId   Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Runtime instance of the associated flow orchestration.
This field is a relationship field.

<!-- page:796 -->

AFLS Overview                                                                               Patient Engagement



Field Name                    Details


## Relationship Name

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

LeadId                        Type
Lookup(Lead)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lead representing the enrollee.

Name                          Type
string

<!-- page:797 -->

AFLS Overview                                                                              Patient Engagement



Field Name                  Details


## Properties

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
Description
The related Research Study Candidate record of the care program enrollee.
This field is a relationship field.
Relationship Name
ResearchStudyCandidate
Refers To
ResearchStudyCandidate

<!-- page:798 -->

AFLS Overview                                                                            Patient Engagement




## Field Name               Details

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

UserId                   Type
Lookup(User)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
User representing the enrollee.

<!-- page:799 -->

AFLS Overview                                                                                                          Patient Engagement



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



## CareProgramEnrolleeProduct

Represents the affiliation between a care program enrollee and a care program product, a care program provider, or both.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                   Details

CareProgramEnrolleeId                   Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The care program enrollee associated with this care program product or care program
provider.

CareProgramProductId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program product associated with this care program enrollee and care program
provider.

CareProgramProviderId                   Type
reference

<!-- page:800 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The care program provider associated with this care program enrollee and care program
product.

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
Create, Filter, Group, Sort, Update
Description
Name of the product the enrollee participates in.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

ProgramId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The program that offers financial assistance for this product.

<!-- page:801 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

This field is a relationship field.
This field is available in API version 62.0 and later with the Manage Financial Assistance
Program permission set.
Relationship Name
Program
Refers To
Program


SourceSystem                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.

Status                                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of the care program product or service related to the care program provider and
the recipient of the product or service.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramEnrolleeProductChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramEnrolleeProductFeed
Feed tracking is available for the object.
CareProgramEnrolleeProductHistory
History is available for tracked fields of the object.

<!-- page:802 -->

AFLS Overview                                                                                                       Patient Engagement




## CareProgramEnrolleeProductOwnerSharingRule

Sharing rules are available for the object.
CareProgramEnrolleeProductShare
Sharing is available for the object.



## CareProgramEnrollmentCard

Represents a care program membership card that includes a membership number or enrollment code.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                  Details

CardNumber                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unique card number for a care program. Often a membership number or enrollment
code on a physical card assigned to the care program enrollee.

CareProgramEnrolleeId                  Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The care program enrollee with whom this care program card is associated.

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

<!-- page:803 -->

AFLS Overview                                                                                        Patient Engagement



Field                    Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, Sort
Description
Name for the care program enrollment card.

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
The status of a card in relation to a care program enrollee.

<!-- page:804 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramEnrollmentCardChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramEnrollmentCardFeed
Feed tracking is available for the object.
CareProgramEnrollmentCardHistory
History is available for tracked fields of the object.
CareProgramEnrollmentCardOwnerSharingRule
Sharing rules are available for the object.
CareProgramEnrollmentCardShare
Sharing is available for the object.



## CareProgramGoal

Represents a business or clinical goal related to a care program.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                    Details

CareProgramId                            Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The care program associated with a corresponding goal.

CompletionDate                           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The completion date of a care program goal.

Description                              Type
textarea
Properties
Create, Nillable, Update

<!-- page:805 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

A detailed description of the care program goal.

DueDate                 Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The due date for a care program goal.

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
Name of the care program goal.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

Priority                Type
picklist

<!-- page:806 -->

AFLS Overview                                                                                   Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The priority of the care program goal.

ProgressPercentage       Type
percent
Properties
Create, Filter, Nillable, Sort, Update
Description
The percentage completion of the care program goal.

SequenceNumber           Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The order or sequence of the care program goal relative to other care program goals.

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

StartDate                Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The start date for a care program goal.

Status                   Type
picklist

<!-- page:807 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                    Details


## Properties

Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of a care program goal.

Type                                     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of the care program goal.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareProgramGoalChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.
CareProgramGoalFeed
Feed tracking is available for the object.
CareProgramGoalHistory
History is available for tracked fields of the object.
CareProgramGoalOwnerSharingRule
Sharing rules are available for the object.
CareProgramGoalShare
Sharing is available for the object.



## CareProgramProduct

Represents the affiliation between a care program and a care program product, care program provider, or both.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                    Details

Availability                             Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update

<!-- page:808 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The default availability of the product to an enrollee in the context of a care program. For
example, some products or services are available to all enrollees, others are limited to special
circumstances, and others are no longer available.

CareProgramId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifier for the care program associated with a care program product.

CareProgramPrice        Type
currency
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A standard list price for a given product in the context of a care program.

LastReferencedDate      Type
dateTime
Properties
Filter, Group, Nillable, Sort
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
Create, Filter, Group, Sort, Update
Description
Name of the care program product.

<!-- page:809 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

OwnerId                                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the user who owns this record.

ProductId                               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifier of the product associated with a care program

SourceSystem                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the care program product was sourced.

SourceSystemIdentifier                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the care program product was sourced.

Status                                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of the product in the context of a care program.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramProductChangeEvent (API version 59.0)
Change events are available for the object.

<!-- page:810 -->

AFLS Overview                                                                                                       Patient Engagement




## CareProgramProductFeed

Feed tracking is available for the object.
CareProgramProductHistory
History is available for tracked fields of the object.
CareProgramProductOwnerSharingRule
Sharing rules are available for the object.
CareProgramProductShare
Sharing is available for the object.



## CareProgramProvider

Represents a business account that is the service provider for a care program product.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                    Details

AccountId                                Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The account/business entity that is providing the care program product/service to a care
program enrollee.

CareProgramContactId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The primary person a patient can contact about the care program.

CareProgramProductId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program product to which this care program provider is associated.

<!-- page:811 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

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
Create, Filter, Group, Sort, Update
Description
Name of the provider associated with the care program.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

Role                    Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The type of organization delivering the services included in the program.

SourceSystem            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:812 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Description

System from which the record was sourced.

SourceSystemIdentifier                   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.

Status                                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of a care program provider in relation to a care program product.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramProviderChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramProviderFeed
Feed tracking is available for the object.
CareProgramProviderHistory
History is available for tracked fields of the object.
CareProgramProviderOwnerSharingRule
Sharing rules are available for the object.
CareProgramProviderShare
Sharing is available for the object.



## CareProgramTeamMember

Represents a person who delivers services under a program, such as a program manager or care coordinator.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:813 -->

AFLS Overview                                                                          Patient Engagement


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

<!-- page:814 -->

AFLS Overview                                                                            Patient Engagement




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

<!-- page:815 -->

AFLS Overview                                                                                                          Patient Engagement



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



## CareRegisteredDevice

Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version 49.0
and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CareProgramEnrolleeId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the care program enrollee to whom this device is registered.


## DeviceId                                Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The asset ID for the device.
Referenced Objects
Asset

<!-- page:816 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

DeviceTypeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of the device.
Examples: Cystoscope, oxygen tent
Referenced Objects
CodeSet

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
Create, Filter, Group, idLookup, Sort, Update
Description
The name of this device registration record.

PatientId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account ID of the patient to whom this device is registered.
Referenced Objects
Account

<!-- page:817 -->

AFLS Overview                                                                                       Patient Engagement




## Field                    Details

RegistrationDate         Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when this device was registered.

SafetyInformation        Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The health and safety information about with the device.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the system from which the record was sourced.

Status                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update
Description
Indicates whether the device registration is active.
Possible values are:
- Active
- Inactive

SupportContactDetail     Type
textarea

<!-- page:818 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details


## Properties

Create, Nillable, Update
Description
Contact details of the person or organization that provides support for the device.

UniqueDeviceId1         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Unique device identifier (UDI) assigned to device label or package. It identifies the labeler
and the specific version or model of a device. A device may have multiple UDIs since it could
have been sold in multiple jurisdictions.

UniqueDeviceId1Issuer   Type
url
Properties
Create, Filter, Nillable, Sort, Update
Description
The organization that issued the UDI1 for the device.

UniqueDeviceId2         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Unique device identifier (UDI) assigned to device label or package. It identifies the labeler
and the specific version or model of a device. A device may have multiple UDIs since it could
have been sold in multiple jurisdictions.

UniqueDeviceId2Issuer   Type
url
Properties
Create, Filter, Nillable, Sort, Update
Description
The organization that issued the UDI2 for the device.

UniqueDeviceId3         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:819 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                   Details


## Description

Unique device identifier (UDI) assigned to device label or package. It identifies the labeler
and the specific version or model of a device. A device may have multiple UDIs since it could
have been sold in multiple jurisdictions.

UniqueDeviceId3Issuer                   Type
url
Properties
Create, Filter, Nillable, Sort, Update
Description
The organization that issued the UDI3 for the device.




## Additional Information for CareRegisteredDevice in Other Objects

In addition to creating a record using these fields, you can add more details to your CareRegisteredDevice record by creating records in
certain other objects, and referencing your CareRegisteredDevice record as the parent record. Here’s the list of objects you can associate
to CareRegisteredDevice in this way, the type of information they add, and the field they use to reference CareRegisteredDevice.

Object                                           Type of Information                        Reference Field
Identifier                                       Associates an identifier value to the        ParentRecordId
CareRegisteredDevice record. This identifier
is not the same as the device’s UID.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareRegisteredDeviceChangeEvent (API version 60.0)
Change events are available for the object.
CareRegisteredDeviceFeed
Feed tracking is available for the object.
CareRegisteredDeviceHistory
History is available for tracked fields of the object.



## CareSystemFieldMapping

Represents a mapping from source system fields to Salesforce target entities and attributes.



## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

<!-- page:820 -->

AFLS Overview                                                                               Patient Engagement


Fields


## Field Name              Details

DeveloperName           Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The unique name of the record in the API. This name can contain only underscores
and alphanumeric characters, and must be unique in your org. It must begin with
a letter, not include spaces, not end with an underscore, and not contain two
consecutive underscores. This field is automatically generated but you can supply
your own value if you create the record using the API.

ExternalIdField         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the field in the external system.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

NamespacePrefix         Type
string
Properties
Filter, Nillable
Description
The namespace prefix that is associated with this object. Each Developer Edition
org that creates a managed package has a unique namespace prefix. Limit: 15
characters. You can refer to a component in a managed package by using the
namespacePrefix__componentName notation.
The namespace prefix can have one of the following values.
- In Developer Edition orgs, NamespacePrefix is set to the namespace
prefix of the org for all objects that support it, unless an object is in an installed
managed package. In that case, the object has the namespace prefix of the
installed managed package. This field’s value is the namespace prefix of the
Developer Edition org of the package developer.

<!-- page:821 -->

AFLS Overview                                                                           Patient Engagement




## Field Name              Details

- In orgs that are not Developer Edition orgs, NamespacePrefix is set
only for objects that are part of an installed managed package. All other
objects have no namespace prefix.

MasterLabel             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The label for this care system field mapping.

Role                    Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update
Description
The role that the entity represents. Picklist values
RemoteMonitoringDevice and RemoteMonitoringPatient are
available from API version 49.0 and later.
Possible values are:
- Patient—When the role field is set to Patient, the Enrollment API
uses the value of externalIdField as the patient ID. This role can be
used when targetObject is set to Account.
- RemoteMonitoringDevice—Indicates which externalIdField
on the Asset object maps to the Device field in the CareObservation object.
This role can be used when targetObject is set to Asset.
- RemoteMonitoringPatient—Indicates which
externalIdField on the Account object maps to the
ObservedSubject field in the Care Observation object. This role is used
when targetObject is set to Account.
- ServiceProvider—The Enrollment API uses the value of
externalIdField as the provider ID. This role is used when
targetObject is set to Account.
- NotApplicable—This role is used when targetObject is set to
CareProgram or Product, which means that there is no applicable
role.

SourceSystem            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:822 -->

AFLS Overview                                                                                                 Patient Engagement



Field Name                                        Details


## Description

System from which the record was sourced.

TargetObject                                      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the parent entity for the external ID.




## EnrollmentEligibilityCriteria

Represents criteria that define patient enrollment eligibility for one or more care programs.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

Description                           Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
A comprehensive description of the enrollment eligibility criteria.

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

<!-- page:823 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, Sort
Description
A short name for the enrollment eligibility criteria.

OwnerId                                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

SourceSystem                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier                  Type
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

<!-- page:824 -->

AFLS Overview                                                                                                      Patient Engagement




## EnrollmentEligibilityCriteriaHistory

History is available for tracked fields of the object.
EnrollmentEligibilityCriteriaOwnerSharingRule
Sharing rules are available for the object.
EnrollmentEligibilityCriteriaShare
Sharing is available for the object.



## Clinical Data Model

Patient data and healthcare records are important in the healthcare industry. Without accurate

**EDITIONS**
information, performing and managing care becomes difficult. These records are readily available
if a patient seeks care from the same provider every time. However, in reality, a patient’s healthcare Available in: Enterprise and
journey takes them to multiple providers and hospitals at different times. Because the patient’s       Unlimited Editions
health hinges on the accuracy of their medical records, it’s crucial for the systems used by different
providers and hospitals to be interoperable. And to make this interoperability possible, it’s vital to
have some industry-recognized standards for how these records are structured, stored, and transferred. That’s where the standards
defined by Health Level 7 (HL7) come in.
Two standards defined by HL7 for this purpose are the Fast Health Interoperability Resources (FHIR) v4.0 and HL7 (the standard) 2.3. The
Clinical Data Model is built from the ground up to align with FHIR v4.0, and also supports many of the HL7 v2.3 message types.
To enable these objects in your org, go to FHIR R4 Support Settings in Setup and enable the FHIR-Aligned Clinical Data Model
org pref.

Note: Some of these objects are available in your org even before enabling this org pref because they’re part of other data models
in Health Cloud and AFLS.

Note: To use the Clinical Data Model objects on an Experience Cloud site, community users need the FHIR R4 for Experience
Cloud Sites permission set.
Here’s the list of objects that need the org pref to be enabled versus a list of objects that don’t require the org pref.

Org Pref Required                                                      Org Pref Not Required

- AllergyIntolerance                                                   • CareObservation
- CarePerformer                                                        • CareObservationComponent
- ClinicalAlert                                                        • CareProviderFacilitySpecialty
- ClinicalEncounter                                                    • CodeSet
- ClinicalEncounterDiagnosis                                           • CodeSetBundle
- ClinicalEncounterFacility                                            • HealthcareFacility
- ClinicalEncounterIdentifier                                          • HealthcarePractitionerFacility
- ClinicalEncounterProvider                                            • HealthcareProvider
- ClinicalEncounterReason                                              • Identifier
- ClinicalEncounterSvcRequest                                          • Medication
- ClinicalServiceRequest                                               • Medication Administration
- ClinicalServiceRequestDetail                                         • Medication Administration Detail
- DiagnosticSummary                                                    • PersonLanguage
- HealthCondition                                                      • PersonName

<!-- page:825 -->

AFLS Overview                                                                                                         Patient Engagement



Org Pref Required                                                      Org Pref Not Required

- MedicationRequest                                                    • Problem Definition Relationship
- MedicationStatement                                                  • Specimen
- PatientHealthReaction
- PatientImmunization
- PatientMedicalProcedure
- PatientMedicalProcedureDetail
- PatientMedicationDosage



And here’s the list of fields added to standard objects when you enable this org pref.
- ContactPointPhone.PreferenceRank
- ContactPointPhone.UsageType
- ContactPointEmail.PreferenceRank
- ContactPointEmail.UsageType
- ContactPointAddress.PreferenceRank
- ContactPointAddress.UsageType
- Account.IsActive
- Account.EffectiveDate
- Account.SourceSystemIdentifier
- Account.SourceSystemModifiedDate
- Account.EndDate
- Contact.MaritalStatus
- Contact.Gender
- Contact.DeceasedDate
- Contact.SequenceInMultipleBirth

Note:
- Starting with the Spring ’23 release, new customers won’t be able to create records in the packaged EHR objects that have
counterpart standard objects in the FHIR R4-aligned data model.
- All future development will be built on the FHIR R4-aligned data model. The packaged objects in the EHR data model won’t
be used for future development.



## ActivityTiming

Represents detailed information about an activity that’s repeated in regular intervals over a period of time. This object is available in
API version 52.0 and later.
AllergyIntolerance
Represents a clinical assessment of a patient’s allergy or intolerance. This object is available in API version 51.0 and later.

<!-- page:826 -->

AFLS Overview                                                                                                        Patient Engagement



## AuthorNote

Stores notes associated with different types of records along with information about the author of the note and the time the note
was authored. The author isn’t necessarily the person who created a record. The author is the person who provided the information
in the note. This object is available in API version 52.0 and later.
CarePerformer
Represents the person performing care in observations, procedure, and immunizations. This person may be a physician, the patient’s
contact, or anyone who administered any sort of care to the patient in the context of the concerned care event. This object is available
in API version 51.0 and later.
CareRegisteredDevice
Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version
49.0 and later.
DiagnosticSummary
Represents the findings, interpretations, and summaries of tests performed on patients. This object is available in API version 51.0
and later.
ClinicalAlert
Represents a warning or notification of significance related to different healthcare entities. The subject of the alert may be a patient,
a location, a provider, a procedure, or even a medication. This object is available in API version 51.0 and later.
ClinicalDetectedIssue
Represents information about a detected issue resulting from a clinical activity. This object is available in API version 55.0 and later.
ClinicalDetectedIssueDetail
Represents additional information about a clinical detected issue. This object is available in API version 55.0 and later.
ClinicalEncounter
Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a
patient’s healthcare service experience, all the way from pre-admission to stay to discharge, and everything in between. This object
is available in API version 51.0 and later.
ClinicalServiceRequest
Represents requests for a procedure or diagnostic service that needs to be planned, proposed, or performed as part of the patient’s
healthcare. This object is available in API version 51.0 and later.
CodeSet
Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all
sorts of digital records. This object is available in API version 50.0 and later.
CodeSetBundle
Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This
object is available in API version 50.0 and later.
HealthcareFacility
Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details.
This object is available in API version 51.0 and later.
HealthCondition
Represents a clinical condition, problem, or any clinically relevant occurrence that is a matter of concern. This object is available in
API version 51.0 and later.
Identifier
Represents identifier information for multiple objects. This object is available in API version 51.0 and later.

<!-- page:827 -->

AFLS Overview                                                                                                       Patient Engagement



## Medication

Represents detailed information about different medications. This object is available in API version 51.0 and later.
MedicationDispense
Represents the dispense of a medication to a patient in response to a medication request or order. This object also includes the
instructions for how the medication is to be administered This object is available in API version 54.0 and later.
MedicationRequest
Represents a request or order for the supply of medication, along with information about how it should be administered. This object
is available in API version 51.0 and later.
MedicationStatement
Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version
51.0 and later.
PatientHealthReaction
Represents a patient’s adverse reaction to an allergy, intolerance, or immunization. This object is available in API version 51.0 and
later.
PatientImmunization
Represents information about a patient’s immunizations. This object is available in API version 51.0 and later.
PatientMedicalProcedure
Represents detailed information about a healthcare procedure the patient has undergone, is undergoing or will undergo. This object
is available in API version 51.0 and later.
PatientMedicationDosage
Represents dosage information for medication. This object is primarily used to add dosage information in MedicationStatement,
MedicationRequest, or MedicationDispense records. This object is available in API version 51.0 and later.



## ActivityTiming

Represents detailed information about an activity that’s repeated in regular intervals over a period of time. This object is available in API
version 52.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

ActivityCountPerRepetition Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The recommended number of times the activity should be performed in a repetition cycle.

<!-- page:828 -->

AFLS Overview                                                                                     Patient Engagement




## Field                    Details

ActivityDuration         Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The length of time that the activity should be performed during each occurrence.

ActivityDurationUnitId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the length of time that the activity should be performed during each occurrence.
This is a relationship field.
Referenced Object
UnitOfMeasure

ActivityTime             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The approximate time of day or a daily event that acts as a point of reference for when the
activity should be performed.
Possible values are:
- Default

ActivityTimeOffset       Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of minutes before or after the reference point specified in ActivityTime
when the activity should be performed.

CountInPeriod            Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The recommended number of times the activity should be performed in the specified period.

<!-- page:829 -->

AFLS Overview                                                                                     Patient Engagement




## Field                        Details

LastReferencedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate               Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed th reecord.

MaxActivityCountPerRepetition Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The maximum number of times the activity should be performed in a repetition cycle.

MaxActivityDuration          Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The maximum length of time that the activity should be performed during each occurrence.

MaxCountInPeriod             Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The maximum number of times the activity should be performed in the specified period.

MaxRepetitionCycleLength Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The maximum length of each cycle of repetition.

<!-- page:830 -->

AFLS Overview                                                                                    Patient Engagement




## Field                    Details

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the ActivityTiming record. This value is generated automatically.


## OwnerId                  Type

Polymorphic reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the ActivityTiming record.
Relationship Name
Owner
Relationship Type
Lookup
Referenced Object
Group, User

PeriodEndDateTime        Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date of the period during which this activity should be performed.

PeriodLength             Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The length of the period during which this activity should be performed.

PeriodLengthLowerLimit   Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The lower limit of the length of the period during which this activity should be performed.

<!-- page:831 -->

AFLS Overview                                                                                        Patient Engagement




## Field                    Details

PeriodLengthUnitId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the period's length. This field is used to specify the unit for PeriodLength,
PeriodLengthLowerLimit, and PeriodLengthUpperLimit.
Referenced Object
UnitOfMeasure

PeriodLengthUpperLimit   Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The upper limit of the length of the period during which this activity should be performed.

PeriodStartDateTime      Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date of the period during which this activity should be performed.

RepetitionCycleLength    Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The recommended length of each cycle of repetition.

RepetitionCycleUnitId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the length of each cycle of repetition.
Referenced Object
UnitOfMeasure

<!-- page:832 -->

AFLS Overview                                                                                      Patient Engagement




## Field                    Details

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system the record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last changed in the source system.

TimingCodeId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the timing information of an activity. This code is
expected to be a complete statement of what is specified in the other fields of this object,
and either this code or the data in the other fields may be used to interpret the timing of an
activity.
This is a relationship field.
Referenced Object
CodeSet

UsageType                Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of activity the timing information is used for.
Possible values are:

<!-- page:833 -->

AFLS Overview                                                                                                    Patient Engagement




## Field                                 Details

- CareObservation—Care Observation
- ClinicalServiceRequest—Clinical Service Request
- MedicationDosage—Medication Dosage

WeeklyActivityTimeId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The day and time of the week when this activity should be performed.
Referenced Object
OperatingHours




## Usage

ActivityTiming records are referenced from MedicationDosage records to specify the timing of their activities. Here’s an example of an
activity’s timing information and how an ActivityTiming record would represent that information.
Scenario: Let’s say your doctor tells you that you have to run for 10 minutes every 2 days, 30 minutes after your meals. You need to run
at least 5 times in the span of those 2 days. You have to do this for 3 to 4 weeks. You’re also told that you shouldn’t run for more than
15 minutes at a time, and that you shouldn’t do it more than 7 times in 3 days. So in those 3-4 weeks, you should run somewhere between
60-84 times.
Sample Record:
Id: 1CDR00000000006OAA
OwnerId: 005R0000000dNImIAM
IsDeleted: false
Name: AT-3147
CreatedDate: 2021-04-15T10:48:14.000+0000
CreatedById: 005R0000000dNImIAM
LastModifiedDate: 2021-04-15T10:49:47.000+0000
LastModifiedById: 005R0000000dNImIAM
SystemModstamp: 2021-04-15T10:49:47.000+0000
LastViewedDate: 2021-04-15T11:14:26.000+0000
LastReferencedDate: 2021-04-15T11:14:26.000+0000
TimingCodeId: null
PeriodStartDateTime: null
PeriodEndDateTime: null
PeriodLength: null
PeriodLengthLowerLimit: 3
PeriodLengthUpperLimit: 4
PeriodLengthUnitId: 0hER0000000001VMAQ
CountInPeriod: 60
MaxCountInPeriod: 84
ActivityDuration: 10
MaxActivityDuration: 15
ActivityDurationUnitId: 0hER0000000001aMAA
ActivityCountPerRepetition: 5

<!-- page:834 -->

AFLS Overview                                                                                                            Patient Engagement




## MaxActivityCountPerRepetition: 7

RepetitionCycleLength: 2
MaxRepetitionCycleLength: 3
RepetitionCycleUnitId: 0hER0000000001fMAA
ActivityTime: AfterMeal
ActivityTimeOffset: 30
WeeklyActivityTimeId: 0OHR00000000HanOAE
UsageType: MedicationDosage
SourceSystem: WWHR
SourceSystemIdentifier: 763851
SourceSystemModified: 2021-04-05T23:00:00.000+0000



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ActivityTimingChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.
ActivityTimingFeed on page 1429
Feed tracking is available for the object.
ActivityTimingHistory on page 1434
History is available for tracked fields of the object.
ActivityTimingShare on page 1438
Sharing is available for the object.



## AllergyIntolerance

Represents a clinical assessment of a patient’s allergy or intolerance. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

AssertionSourceId                        Type
Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the person who asserted the information about the allergy or intolerance.
Example
The patient or the provider who assessed the patient’s condition.

<!-- page:835 -->

AFLS Overview                                                                             Patient Engagement



Field                    Details

Referenced Objects
- Account
- HealthcareProvider

Category                 Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the categories the allergy or intolerance belongs to.
Possible values are:
- Biologic
- Environment
- Food
- Medication

ClinicalEncounterId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The encounter where the allergy or intolerance was asserted.
Example
The encounter record for a patient’s ER visit after a bee sting.

CodeId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the allergy or intolerance.

LastOccurrenceDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date of the last occurrence of the allergy or intolerance.
Example
1993-11-09T21:45:00.384Z

<!-- page:836 -->

AFLS Overview                                                                                         Patient Engagement




## Field                   Details

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
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the AllergyIntolerance record.

OnsetEndDateTime        Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end of the estimated onset period.
Example
1993-11-09T23:50:00.384Z

OnsetStartDateTime      Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The onset date of the allergy intolerance or the estimated start date of the allergy intolerance's
onset.
Example
1993-11-09T21:45:00.384Z

<!-- page:837 -->

AFLS Overview                                                                                      Patient Engagement




## Field                    Details

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the allergy intolerance record. Available in API version 56.0 and later.
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
The patient who has the allergy or intolerance.
Referenced Objects
- Account

RecordCreationDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The time the record for the allergy or intolerance was created.


## RecordCreatorId          Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who created the record for the allergy or intolerance.
Referenced Objects
- Account
- HealthcareProvider

<!-- page:838 -->

AFLS Overview                                                                                   Patient Engagement




## Field                    Details

Severity                 Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the severity of the allergy or intolerance.
Possible values are:
- High
- Low
- Unable to assess

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
Description
The identifier of the record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

Status                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the allergy or intolerance. Possible values are:
- Active
- Inactive

<!-- page:839 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details
- Resolved

Type                                    Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies whether the record is about an allergy or an intolerance.
Possible values are:
- Allergy
- Intolerance

VerificationStatus                      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies whether the allergy or intolerance has been verified.
Possible values are:
- Confirmed
- Entered in error
- Refuted
- Unconfirmed




## Additional Information for AllergyIntolerance in Other Objects

In addition to creating a record using these fields, you can add more details to your AllergyIntolerance record by creating records in
certain other objects, and referencing your AllergyIntolerance record as the parent record. Here’s the list of objects you can relate to
AllergyIntolerance in this way, the type of information they add, and the field they use to reference AllergyIntolerance.

Object                                          Type of Information                             Reference Field
PatientMedicalReaction                          Specifies the information about the patient’s ParentId
adverse reaction linked to the allergy or
intolerance.

Identifier                                      Associates an identifier value to the allergy ParentRecordId
intolerance.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.

<!-- page:840 -->

AFLS Overview                                                                                                Patient Engagement



AllergyIntoleranceChangeEvent (API version 58.0)
Change events are available for the object.
AllergyIntoleranceOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
AllergyIntoleranceShare (API version 56.0)
Sharing is available for the object.



## AuthorNote

Stores notes associated with different types of records along with information about the author of the note and the time the note was
authored. The author isn’t necessarily the person who created a record. The author is the person who provided the information in the
note. This object is available in API version 52.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                Details

AuthorId                             Type
Preference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the author of the note.
This is a polymorphic relationship field.
Relationship Name
Author
Relationship Type
Lookup
Referenced Objects
- Account
- Contact
- HealthcareProvider
- User—This value is available in API version 55.0 and later.

AuthorName                           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:841 -->

AFLS Overview                                                                                  Patient Engagement



Field                   Details


## Description

The name of the author of the note.

AuthoredDateTime        Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the note was authored.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the AuthorNote record. This value is generated automatically.

NoteText                Type
textarea
Properties
Create, Update
Description
The contents of the note.


## OwnerId                 Type

Polymorphic reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:842 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Description

The owner of the AuthorNote record.
Relationship Name
Owner
Relationship Type
Lookup
Referenced Objects
Group, User


## ParentRecordId          Type

Polymorhpic reference
Properties
Create, Filter, Group, Sort, Update
Description
References the parent record that the note is associated with.
Referenced Objects
- Account
- AllergyIntolerance
- CareObservation
- CareRegisteredDevice
- ClinicalDetectedIssue—This value is available in API version 55.0 and later.
- ClinicalServiceRequest
- HealthCondition
- MedicationRequest
- MedicationStatement
- PatientImmunization
- PatientMedicalProcedure

RecipientType           Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The type of recipient for an author note.
Possible values are:
- Patient
- Provider
This field is available in API version 55.0 and later.

<!-- page:843 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                    Details

SourceSystem                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system the record came from.

SourceSystemIdentifier                   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the record in its source system.

SourceSystemModified                     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last changed in the source system.




## Usage

When a record requires a related note with the information about the author of that note, that information is stored in an AuthorNote
record. This AuthorNote record references the parent record it’s associated with using the ParentRecordId field.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AuthorNoteFeed
Feed tracking is available for the object.
AuthorNoteHistory
History is available for tracked fields of the object.
AuthorNoteShare
Sharing is available for the object.
AuthorNoteChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.

<!-- page:844 -->

AFLS Overview                                                                                                   Patient Engagement




## CarePerformer

Represents the person performing care in observations, procedure, and immunizations. This person may be a physician, the patient’s
contact, or anyone who administered any sort of care to the patient in the context of the concerned care event. This object is available
in API version 51.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

AffiliatedOrganizationId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the business account of the organization the care performer is affiliated to in the
context of the care event.
Referenced Objects
- Account

CareSpecialtyId                       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the CareSpecialty record that represents the performer’s specialty.
Referenced Objects
- CareSpecialty

LastReferencedDate                    Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date that the record was referenced.

LastViewedDate                        Type
dateTime

<!-- page:845 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details


## Properties

Filter, Nillable, Sort
Description
The last date that the record was viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the CarePerformer record.


## ParentRecordId          Type

Polymorphic master-detail reference
Properties
Create, Filter, Group, Sort
Description
References the care observation, procedure, or immunization that this performer was involved
in.
Referenced Objects
- PatientMedicalProcedure
- CareObservation
- PatientImmunization
- MedicationDispense—This value is available in API version 55.0 and later.


## PersonId                Type

Polymorphic reference
Properties
Create, Filter, Group, Sort, Update
Description
References the person who performed care.
Referenced Objects
- Account
- HealthcareProvider
- User—This value is available in API version 55.0 and later.


## RoleId                  Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:846 -->

AFLS Overview                                                                                                        Patient Engagement



Field                                   Details


## Description

The system-defined code that specifies the care performer's role in the care event.
Referenced Objects
- CodeSet
- CodeSetBundle




## Usage

This object is used to record the relevant details of a care performer in the context of specific care events. The performed care is connected
to the procedure, observation, or immunization care event using the ParentRecordId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CarePerformerFeed
Feed tracking is available for the object.
CarePerformerHistory
History is available for tracked fields of the object.
CarePerformerChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## CareRegisteredDevice

Represents a device or device registration information for a patient or a care program enrollee. This object is available in API version 49.0
and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CareProgramEnrolleeId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the care program enrollee to whom this device is registered.

<!-- page:847 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

DeviceId                Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The asset ID for the device.
Referenced Objects
Asset

DeviceTypeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of the device.
Examples: Cystoscope, oxygen tent
Referenced Objects
CodeSet

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
Create, Filter, Group, idLookup, Sort, Update
Description
The name of this device registration record.

<!-- page:848 -->

AFLS Overview                                                                                       Patient Engagement




## Field                    Details

PatientId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account ID of the patient to whom this device is registered.
Referenced Objects
Account

RegistrationDate         Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when this device was registered.

SafetyInformation        Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The health and safety information about with the device.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the system from which the record was sourced.

Status                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update

<!-- page:849 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details


## Description

Indicates whether the device registration is active.
Possible values are:
- Active
- Inactive

SupportContactDetail    Type
textarea
Properties
Create, Nillable, Update
Description
Contact details of the person or organization that provides support for the device.

UniqueDeviceId1         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Unique device identifier (UDI) assigned to device label or package. It identifies the labeler
and the specific version or model of a device. A device may have multiple UDIs since it could
have been sold in multiple jurisdictions.

UniqueDeviceId1Issuer   Type
url
Properties
Create, Filter, Nillable, Sort, Update
Description
The organization that issued the UDI1 for the device.

UniqueDeviceId2         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Unique device identifier (UDI) assigned to device label or package. It identifies the labeler
and the specific version or model of a device. A device may have multiple UDIs since it could
have been sold in multiple jurisdictions.

UniqueDeviceId2Issuer   Type
url
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:850 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                   Details


## Description

The organization that issued the UDI2 for the device.

UniqueDeviceId3                         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Unique device identifier (UDI) assigned to device label or package. It identifies the labeler
and the specific version or model of a device. A device may have multiple UDIs since it could
have been sold in multiple jurisdictions.

UniqueDeviceId3Issuer                   Type
url
Properties
Create, Filter, Nillable, Sort, Update
Description
The organization that issued the UDI3 for the device.




## Additional Information for CareRegisteredDevice in Other Objects

In addition to creating a record using these fields, you can add more details to your CareRegisteredDevice record by creating records in
certain other objects, and referencing your CareRegisteredDevice record as the parent record. Here’s the list of objects you can associate
to CareRegisteredDevice in this way, the type of information they add, and the field they use to reference CareRegisteredDevice.

Object                                           Type of Information                        Reference Field
Identifier                                       Associates an identifier value to the        ParentRecordId
CareRegisteredDevice record. This identifier
is not the same as the device’s UID.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareRegisteredDeviceChangeEvent (API version 60.0)
Change events are available for the object.
CareRegisteredDeviceFeed
Feed tracking is available for the object.
CareRegisteredDeviceHistory
History is available for tracked fields of the object.

<!-- page:851 -->

AFLS Overview                                                                                                    Patient Engagement




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
Description
Records the language of the attached document.


## BasedOnId                             Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the medication or clinical service request that the diagnostic summary is based
on.
Referenced Objects
- MedicationStatement
- ClinicalServiceRequest

CareObservationId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the care observation that’s a part of the diagnostic summary.
Referenced Objects
- ClinicalServiceRequest

Category                              Type
multipicklist
Properties
Create, Filter, Nillable, Update

<!-- page:852 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details


## Description

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
Description
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

<!-- page:853 -->

AFLS Overview                                                                                   Patient Engagement




## Field                    Details

ContentDocumentId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The content document associated with diagnostic summary. You can include up to 5
documents in the PDF format. This field is available in API version 62.0 and later.
This field is a relationship field.
Referenced Objects
- ContentDocument

EffectiveEndDateTime     Type
dateTime
Properties
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

<!-- page:854 -->

AFLS Overview                                                                        Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Comments about the third image linked in the report.

ImageComments4          Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Comments about the fourth image linked in the report.

ImageComments5          Type
string
Properties
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

<!-- page:855 -->

AFLS Overview                                                                                 Patient Engagement



Field                   Details


## Properties

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
Properties
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

<!-- page:856 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Properties

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
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the diagnostic summary record.

OwnerId                 Type
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


## PatientId               Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
References the patient who is the subject of the diagnostic summary.

<!-- page:857 -->

AFLS Overview                                                                                   Patient Engagement



Field                    Details

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
Description
The identifier of the record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

Status                   Type
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

<!-- page:858 -->

AFLS Overview                                                                                                  Patient Engagement




## Field                                Details

Summary                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical conclusion of the tests performed in the diagnostic service.

SummaryCodeId                        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the clinical conclusion of the tests as reported in
the diagnostic service.
Referenced Objects
- CodeSetBundle

UsageType                            Type
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

<!-- page:859 -->

AFLS Overview                                                                                                       Patient Engagement



Object                                         Type of Information                           Reference Field
Identifier                                     Associates an identifier value to the         ParentRecordId
diagnostic summary.

DiagnosticSummaryDetail                        Associates document reference-type            DiagnosticSummaryId
DiagnosticSummary records with various
other records and defines the nature of
association. For instance, authors, related
documents, and related encounters.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
DiagnosticSummaryChangeEvent (API version 58.0)
Change events are available for the object.
DiagnosticSummaryFeed
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



## DiagnosticSummaryDetail

Represents additional information associated with document reference-type DiagnosticSummary records. This additional information
may be related documents, authors, or related encounters. This object is available in API version 52.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

DetailRecordId                          Type
Polymorphic reference

<!-- page:860 -->

AFLS Overview                                                                                         Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
References a record that adds information to a DiagnosticSummary record.
Referenced Objets
Account, CareRegisteredDevice, ClinicalEncounter, DiagnosticSummary, HealthcareProvider

DetailType              Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the relation between the DiagnosticSummary record and the detail record.
Possible values are:
- Author
- ClinicalEncounter—Clinical Encounter
- RelatedDocument—Related Document
- Specimen


## DiagnosticSummaryId     Type

Master-Detail reference
Properties
Create, Filter, Group, Sort
Description
The parent DiagnosticSummary record that the detail record is associated to.
Referenced Objets
DiagnosticSummary

DocumentRelationType    Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
If the detail type is Related Document, then this field specifies the type of relationship between
the two documents.
Possible values are:
- Addition
- Conversion
- Replacement
- Signature

<!-- page:861 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

LastReferencedDate                      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced the record.

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed the record.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the DiagnosticSummaryDetail record.




## Usage

- Use the DiagnosticSummaryId field to reference the parent DiagnosticSummary record that the additional information is being
associated to.
- Use the DetailType picklist to specify the type of information that’s being associated to the DiagnosticSummary record.
- Use the DetailRecordId field to reference the record with the associated information. The records that correspond to each detail type
are as follows.
– Author: Account, CareRegisteredDevice, and HealthcareProvider
– ClinicalEncounter: ClinicalEncounter
– RelatedDocument: DiagnosticSummary

- If the detail type is related document, then use the DocumentRelationType picklist to specify the type of the relation between the
two documents.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
DiagnosticSummaryDetailFeed on page 1429
Feed tracking is available for the object.

<!-- page:862 -->

AFLS Overview                                                                                                      Patient Engagement




## DiagnosticSummaryDetailHistory on page 1434

History is available for tracked fields of the object.
DiagnosticSummaryDetailChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalAlert

Represents a warning or notification of significance related to different healthcare entities. The subject of the alert may be a patient, a
location, a provider, a procedure, or even a medication. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

Categories                              Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the category that the alert belongs to.
Possible values are:
- Clinical
- Diet
- Drug
- Lab
- Subject Contact

CodeDescription                         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the alert.

CodeId                                  Type
reference
Properties
Create, Filter, Group, Sort, Update

<!-- page:863 -->

AFLS Overview                                                                 Patient Engagement



Field                   Details


## Description

The system-defined code that represents the alert.
Referenced Objects
- CodeSetBundle

EndDate                 Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the alert was deactivated.

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
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the clinical alert record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The user that this record belongs to.

<!-- page:864 -->

AFLS Overview                                                                                   Patient Engagement




## Field                    Details

RaisedById               Type
Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person or facility that raised the alert.
Referenced Objects
- HealthcareProvider
- HealthcarePractitionerFacility
- CareRegisteredDevice

RelatedEncounterId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The encounter that this alert is related to.
Referenced Objects
- ClincialEncounter

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
Description
The identifier of the record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

<!-- page:865 -->

AFLS Overview                                                                  Patient Engagement




## Field                   Details

StartDate               Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the alert was activated.

Status                  Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The status of the clinical alert.
Possible values are:
- Active
- Entered-In-Error
- Inactive


## SubjectId               Type

polymorphic reference
Properties
Create, Filter, Group, Sort, Update
Description
The person or entity the alert is about.
Examples
- A patient experiencing kidney failure.
- A location with an avian flu outbreak.
- A practitioner flagged from referrals.
- A medication that’s flagged for special circumstances.
Referenced Objects
- Location
- HealthcareProvider
- Medication
- PatientMedicalProcedure
- Account

<!-- page:866 -->

AFLS Overview                                                                                                       Patient Engagement



## Additional Information for Clinical Alert in Other Objects

In addition to creating a record using these fields, you can add more details to your clinical alert record by creating records in certain
other objects, and referencing your ClinicalAlert record as the parent record. Here’s the list of objects you can associate to ClinicalAlert
in this way, the type of information they add, and the field they use to reference ClinicalAlert.

Object                                           Type of Information                            Reference Field
Identifier                                       Associates an identifier value to the clinical ParentRecordId
alert.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalAlertFeed
Feed tracking is available for the object.
ClinicalAlertHistory
History is available for tracked fields of the object.
ClinicalAlertShare
Sharing is available for the object.
ClinicalAlertChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalDetectedIssue

Represents information about a detected issue resulting from a clinical activity. This object is available in API version 55.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                     Details

CategoryCodeId                            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code of the category associated with the issue.
This field is a polymorphic relationship field.

<!-- page:867 -->

AFLS Overview                                                                                      Patient Engagement



Field                      Details

Relationship Name
CategoryCode
Relationship Type
Lookup
Refers To
CodeSet, CodeSetBundle

Description                Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the issue.

IdentificationEndDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the issue identification was complete.

IdentificationStartDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the issue was identified.

IdentifiedById             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account, healthcare provider, user, or device that detected the issue.
This field is a polymorphic relationship field.
Relationship Name
IdentifiedBy
Relationship Type
Lookup
Refers To
Account, CareRegisteredDevice, HealthcareProvider, User

<!-- page:868 -->

AFLS Overview                                                                         Patient Engagement




## Field                   Details

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.


Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the clinical detected issue record.


## PatientId               Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The patient associated with the issue.
This field is a relationship field.
Relationship Name
Patient
Relationship Type
Lookup
Refers To
Account

ReferenceUri            Type
textarea
Properties
Create, Nillable, Update

<!-- page:869 -->

AFLS Overview                                                                                    Patient Engagement



Field                     Details


## Description

The medical references available on the issue.

SeverityLevel             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the impact level of the issue.
Possible values are:
- High
- Low
- Moderate

SourceSysModifiedDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

SourceSystem              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The source system from where the record was brought into Salesforce.

SourceSystemIdentifier    Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier for the record in its source system.

Status                    Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the issue.

<!-- page:870 -->

AFLS Overview                                                                                                           Patient Engagement



Field                                    Details
Possible values are:
- Amended
- Cancelled
- Corrected
- Entered in Error
- Final
- Preliminary
- Registered
- Unknown




## Usage

Indicates an actual or potential clinical issue associated with a clinical action for a patient. The category of the clinical issue, for example,
drug-drug interactions or duplicate therapy, is stored in the Category Code field that has a lookup to the CodeSetBundle and CodeSet
objects.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ClinicalDetectedIssueFeed
Feed tracking is available for the object.
ClinicalDetectedIssueHistory
History is available for tracked fields of the object.
ClinicalDetectedIssueChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalDetectedIssueDetail

Represents additional information about a clinical detected issue. This object is available in API version 55.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:871 -->

AFLS Overview                                                                                    Patient Engagement


Fields


## Field                   Details

ClinicalDetectedIssueId Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent clinical detected issue associated with the issue detail.
This field is a relationship field.
Relationship Name
ClinicalDetectedIssue
Relationship Type
Lookup
Refers To
ClinicalDetectedIssue

DetailCodeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code associated with the Clinical Detected Issue Detail record.
This field is a polymorphic relationship field.
Relationship Name
DetailCode
Relationship Type
Lookup
Refers To
CodeSet, CodeSetBundle

DetailRecordId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reference to a record that adds information to a Clinical Detected Issue record.
This field is a polymorphic relationship field.
Relationship Name
DetailRecord
Relationship Type
Lookup

<!-- page:872 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details


## Refers To

Account, ClinicalEncounterDiagnosis, DiagnosticSummary, HealthcareProvider

DetailType              Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the relation between the Clinical Detected Issue record and the detail record.
Possible values are:
- Evidence
- Implicated
- Mitigation

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

MitigationAuthorId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The owner who is responsible for creating and executing the mitigation plan.
This field is a polymorphic relationship field.
Relationship Name
MitigationAuthor
Relationship Type
Lookup
Refers To
HealthcarePractitionerFacility, HealthcareProvider, User

<!-- page:873 -->

AFLS Overview                                                                                                            Patient Engagement




## Field                                    Details

MitigationAuthoringDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time of authoring the mitigation details.

Name                                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the clinical detected issue detail record.




## Usage

- Use the ClinicalDetectedIssueId field to reference the parent ClinicalDetectedIssue record that the additional information
is being associated to.
- Use the DetailRecordId field to reference the record with the associated information. This field looks up to the following
objects:
– Account
– ClinicalEncounterDiagnosis
– DiagnosticSummary
– HealthcareProvider

- Use the DetailType picklist to specify the type of information that’s being associated to the ClinicalDetectedIssue record.
- If the detail type is Evidence, specify either a detail code or detail record or both. If the detail type is Implicated, specify a detail record,
but do not add a detail code. If the detail type is Mitigation, specify a detail code, but do not add a detail record.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ClinicalDetectedIssueDetailFeed
Feed tracking is available for the object.
ClinicalDetectedIssueDetailHistory
History is available for tracked fields of the object.
ClinicalDetectedIssueDetailChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.

<!-- page:874 -->

AFLS Overview                                                                                                        Patient Engagement




## ClinicalEncounter

Represents a healthcare related encounter of a patient with a care provider. This is a broad object that covers multiple phases of a patient’s
healthcare service experience, all the way from pre-admission to stay to discharge, and everything in between. This object is available
in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

AdmissionSource                        Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the source of the admission.
Possible values are:
- Another Hospital
- Emergency Department
- General Practitioner Referral
- In-Hospital Birth
- Nursing Home
- Other
- Other Medical Practitioner Referral
- Outpatient Department
- Psychiatric Hospital
- Rehabilitation Facility

CaseId                                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The case associated with the clinical encounter of a patient with a care provider.
This field is a relationship field.
Relationship Name
Case
Refers To
Case

<!-- page:875 -->

AFLS Overview                                                                Patient Engagement




## Field                     Details

Category                  Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the classification of the encounter.
Possible values are:
- Ambulatory
- Emergency
- Home Health
- Inpatient Encounter

DestinationFacilityId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The facility to which the patient is transferred.
Referenced Objects
- HealthcareFacility

DestinationOrganizationId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The organization to which the patient is transferred.
Referenced Objects
- Account

DietPreference            Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
The diet preferences of the patient.
Possible values are:
- Dairy-Free
- Gluten-Free

<!-- page:876 -->

AFLS Overview                                                                              Patient Engagement



Field                    Details
- Halal
- Kosher
- Nut-Free
- Vegan
- Vegetarian

DischargeDispositionId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of the patient at discharge.
Referenced Objects
- CodeSetBundle

Duration                 Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The duration of the patient encounter, in the given unit of measure.

DurationUnitId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measurement for the encounter duration.
Referenced Objects
- UnitOfMeasure

EndDate                  Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which the encounter ended.

FacilityId               Type
reference

<!-- page:877 -->

AFLS Overview                                                                      Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The facility where the encounter took place.
Referenced Objects
- HealthcareFacility

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the clinical encouter record.

PatientId                Type
reference
Properties
Create, Filter, Group, Sort
Description
The patient receiving the treatment.
Referenced Objects
- Account

PreAdmissionIdentifierId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:878 -->

AFLS Overview                                                                                   Patient Engagement



Field                    Details


## Description

The identifier for the encounter pre-admission.
Referenced Objects
- ClinicalEncounterIdentified

PreviousFacilityId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The patient's location before the admission.
Referenced Objects
- HealthcareFacility

PreviousOrganizationId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the organization where the patient was previously located.
Referenced Objects
- Account

PriorityId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the priority associated with the urgency of the
encounter.
Referenced Objects
- CodeSetBundle

ReadmissionCodeId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code for the readmission.

<!-- page:879 -->

AFLS Overview                                                                     Patient Engagement



Field                      Details

Referenced Objects
- CodeSetBundle

RelatedClinicalEncounterId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies an encounter that is related to this encounter.
Referenced Objects
- ClinicalEncounter

ServiceAppointment         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The appointment associated with this clinical encounter.
Referenced Objects
- ServiceAppointment

ServiceType                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the classification of the type of service.
Possible values are:
- Homoeopathy
- Meditation
- Naturopathy
- Reflexology

SourceSystem               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

<!-- page:880 -->

AFLS Overview                                                                            Patient Engagement




## Field                    Details

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The ID of this record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed in the source system.

SpecialCourtesy          Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies a class of courtesy extended to the patient.
Possible values are:
- Extended
- Normal
- Professional
- Staff
- Unknown
- VIP

StartDate                Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The date on which the encounter began.

Status                   Type
picklist
Properties
Create, Filter, Group, Sort, Update

<!-- page:881 -->

AFLS Overview                                                                                                     Patient Engagement



Field                                 Details


## Description

Specifies the status of the patient encounter.
Possible values are:
- Arrived
- Cancelled
- Finished
- In Progress
- Planned
- Triaged

TypeId                                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of the encounter.
Referenced Objects
- CodeSetBundle




## Additional Information for ClinicalEncounter in Other Objects

In addition to creating a record using these fields, you can add more details to your ClinicalEncounter record by creating records in
certain other objects, and referencing your ClinicalEncounter record as the parent record. Here’s the list of objects you can associate to
ClinicalEncounter in this way, the type of information they add, and the field they use to reference ClinicalEncounter.

Object                                        Type of Information                           Reference Field
ClinicalEncounterDiagnosis                    Specifies the different diagnoses from an     ClinicalEncounterId
encounter, and other diagnosis-related
information.

ClinicalEncounterFacility                     Specifies the different healthcare facilities ClinicalEncounterId
involved in an encounter, and other details
relevant to the facility and the encounter.

ClinicalEncounterIdentifier                   Specifies identifiers for the encounter. The ClinicalEncounterId
object is very similar to the standard
Identifier object, but is exclusive to
ClinicalEncounter.

ClinicalEncounterProvider                     Specifies the different providers involved in ClinicalEncounterId
an encounter and the details of their
involvement.

<!-- page:882 -->

AFLS Overview                                                                                                           Patient Engagement



Object                                          Type of Information                             Reference Field
ClinicalEncounterReason                         Specifies the reasons for why the encounter ClinicalEncounterId
happened or was required.

ClinicalEncounterSvcRequest                     Specifies service requests that the encounter ClinicalEncounterId
was based on.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalEncounterChangeEvent (API version 58.0)
Change events are available for the object.
ClinicalEncounterFeed
Feed tracking is available for the object.
ClinicalEncounterHistory
History is available for tracked fields of the object.



## ClinicalEncounterDiagnosis

Represents a diagnosis related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API
version 51.0 and later.
ClinicalEncounterFacility
Represents information about the different facilities involved in an encounter, the time spent at those facilies, and other relevant
details. This is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.
ClinicalEncounterIdentifier
Represents the identifier information for a clinical encounter. This object is a child object of ClinicalEncounter. This object is available
in API version 51.0 and later.
ClinicalEncounterProvider
Represents the providers involved in an encounter. This object is a child object of ClinicalEncounter. This object is available in API
version 51.0 and later.
ClinicalEncounterReason
Represents the reasons for why the encounter was required. This object is a child object of ClinicalEncounter. This object is available
in API version 51.0 and later.
ClinicalEncounterSvcRequest
Represents the service requests related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available
in API version 51.0 and later.



## ClinicalEncounterDiagnosis

Represents a diagnosis related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in API
version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:883 -->

AFLS Overview                                                                                   Patient Engagement


Fields


## Field                   Details

ClinicalEncounterId     Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
References the parent clinical encounter record the diagnosis belongs to.
Referenced Objects
- ClinicalEncounter

DiagnosisId             Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
References the condition or procedure relevant to the encounter.
Referenced Objects
- HealthCondition
- PatientMedicalProcedure

DiagnosisRank           Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
Specifies the rank of a particular diagnosis among multiple diagnoses for an encounter.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date and time whenthe record was referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date and time when the record was viewed.

<!-- page:884 -->

AFLS Overview                                                                                                       Patient Engagement




## Field                                    Details

Name                                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
A system-generated name for the ClinicalEncounterDiagnosis record.

UsageTypeId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the role the diagnosis plays in context of the
encounter.
Referenced Objects
- CodeSetBundle




## Usage

Once the diagnosis-related information is recorded in the ClinicalEncounterDiagnosis record, the parent ClinicalEncounter record is
referenced using the ClinicalEncounterId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalEncounterDiagnosisChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.
ClinicalEncounterDiagnosisFeed
Feed tracking is available for the object.
ClinicalEncounterDiagnosisHistory
History is available for tracked fields of the object.



## ClinicalEncounterFacility

Represents information about the different facilities involved in an encounter, the time spent at those facilies, and other relevant details.
This is a child object of ClinicalEncounter. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:885 -->

AFLS Overview                                                                                       Patient Engagement


Fields


## Field                   Details

ClinicalEncounterId     Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent clinical encounter that the clinical encounter facility record is related to,
Referenced Objects
- ClinicalEncounter

Duration                Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The duration of time that the patient was present at the facility.

DurationUnitId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of time for the Duration field.
Referenced Objects
- UnitOfMeasure

EndDate                 Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time of the patient’s time at the facility during the encounter.

FacilityId              Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The healthcare facility where the encounter occurred.

<!-- page:886 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details

Referenced Objects
- HealthcareFacility

FacilityTypeId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of the facility, in the context of its physical
structure.
Referenced Objects
- CodeSetBundle

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date and time when the record was viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the ClinicalEncounterFacility record.

StartDate               Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time of the patient’s time at the facility during the encounter.

<!-- page:887 -->

AFLS Overview                                                                                                         Patient Engagement




## Field                                    Details

Status                                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of the patient’s presence at the facility in the context of the patient’s encounter.
Possible values are:
- Active
- Completed
- Planned
- Reserved




## Usage

Once the facility-related information is recorded in the ClinicalEncounterFacility record, the parent ClinicalEncounter record is referenced
using the ClinicalEncounterId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalEncounterFacilityFeed
Feed tracking is available for the object.
ClinicalEncounterFacilityHistory
History is available for tracked fields of the object.
ClinicalEncounterFacilityChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalEncounterIdentifier

Represents the identifier information for a clinical encounter. This object is a child object of ClinicalEncounter. This object is available in
API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

ClinicalEncounterId                      Type
Master-detail reference

<!-- page:888 -->

AFLS Overview                                                                            Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Sort
Description
The parent clinical encounter that this identifier belongs to.
Referenced Objects
- ClinicalEncounter

EffectiveDate           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time from when the identifier is in effect.

EndDate                 Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time from when the identifier is no longer in effect.


## IdTypeId                Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of the identifier.
Referenced Objects
- CodeSet
- CodeSetBundle

IdUsageType             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of use of the identifier.
Possible values are:
- Official
- Old

<!-- page:889 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details
- Secondary
- Temp
- Usual

IdValue                 Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The unique value of the identifier. No two ClinicalEncounterIdentifier records in an org can
share the same IdValue.

IssuingAuthorityId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The authority or organization that issued the identifier.
Referenced Objects
- Account

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the ClinicalEncounterIdentifier record.

<!-- page:890 -->

AFLS Overview                                                                                                        Patient Engagement




## Field                                    Details

SourceSystem                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The source system that the identifier belongs to.




## Usage

Once the identifier-related information is recorded in the ClinicalEncounterIdentifier record, the parent ClinicalEncounter record is
referenced using the ClinicalEncounterId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalEncounterIdentifierFeed
Feed tracking is available for the object.
ClinicalEncounterIdentifierHistory
History is available for tracked fields of the object.
ClinicalEncounterIdentifierChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalEncounterProvider

Represents the providers involved in an encounter. This object is a child object of ClinicalEncounter. This object is available in API version
51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

ClinicalEncounterId                      Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent clinical encounter that the ClinicalEncounterProvider record belongs to.

<!-- page:891 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details

Referenced Objects
- ClinicalEncounter.

Duration                Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The duration of the performer's participation in the encounter.

DurationUnitId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measurement for the duration field.

EndDate                 Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the provider’s participation in the encounter ended.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                    Type
string

<!-- page:892 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                  Details


## Properties

Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the ClinicalEncounterProvider record.

PractitionerId                         Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The person who is performing care in the encounter.
Referenced Objects
- HealthcareProvider

PractitionerTypeId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the role of the practitioner in the encounter. For
example, admitter, attender discharger, or escort.
Referenced Objects
- CodeSetBundle

StartDate                              Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the provider’s participation in the encounter started.




## Usage

Once the provider-related information is recorded in the ClinicalEncounterProvider record, the parent ClinicalEncounter record is
referenced using the ClinicalEncounterId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalEncounterProviderFeed
Feed tracking is available for the object.

<!-- page:893 -->

AFLS Overview                                                                                                     Patient Engagement




## ClinicalEncounterProviderHistory

History is available for tracked fields of the object.
ClinicalEncounterProviderChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalEncounterReason

Represents the reasons for why the encounter was required. This object is a child object of ClinicalEncounter. This object is available in
API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

ClinicalEncounterId                      Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent ClinicalEncounter record that this ClinicalEncounterReason record belongs to.
Referenced Objects
- ClinicalEncounter

LastReferencedDate                       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate                           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                                     Type
string

<!-- page:894 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                    Details


## Properties

Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of this encounter reason.

ReasonCodeId                             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that indicates the reason why the encounter took place.
Referenced Objects
- CodeSetBundle


## ReasonReferenceId                        Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reason for the encounter.
Referenced Objects
- HealthCondition
- CareObservation
- PatientMedicalProcedure




## Usage

Once the reasons for the encounter is recorded in the ClinicalEncounterReason record using the ReasonCodeId and ReasonReferenceId
fields, the parent ClinicalEncounter record is referenced using the ClinicalEncounterId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalEncounterReasonFeed
Feed tracking is available for the object.
ClinicalEncounterReasonHistory
History is available for tracked fields of the object.
ClinicalEncounterReasonChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.

<!-- page:895 -->

AFLS Overview                                                                                                        Patient Engagement



## ClinicalEncounterSvcRequest

Represents the service requests related to a clinical encounter. This object is a child object of ClinicalEncounter. This object is available
in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

ClinicalEncounterId                    Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent ClinicalEnounter record that this ClinicalEncounterSvcRequest record belongs
to.
Referenced Objects
- ClinicalEncouter

ClinicalServiceRequestId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The service request that the encounter is based on.
Referenced Objects
- ClinicalServiceRequest

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate                         Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:896 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                    Details


## Description

The most recent date on which a user viewed this record.

Name                                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the clinical encounter service request record.




## Usage

Once the service request-related information is recorded in the ClinicalEncounterSvcRequest record, the parent ClinicalEncounter record
is referenced using the ClinicalEncounterId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalEncounterSvcRequestFeed
Feed tracking is available for the object.
ClinicalEncounterSvcRequestHistory
History is available for tracked fields of the object.
ClinicalEncounterSvcRequestChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalServiceRequest

Represents requests for a procedure or diagnostic service that needs to be planned, proposed, or performed as part of the patient’s
healthcare. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

BodySiteId                               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:897 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details


## Description

The system-defined code that represents site of the body associated with the service request.
Referenced Objects
- CodeSetBundle

CategoryId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the category of the service request.
Referenced Objects
- CodeSetBundle

ConditionId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The condition that justifies the service request.
Referenced Objects
- HealthCondition

DateSigned              Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date the service request was signed.

DiagnosticReportId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The diagnosis that justifies the service request.
Referenced Objects
- ClinicalEncounterDiagnosis

<!-- page:898 -->

AFLS Overview                                                                                    Patient Engagement




## Field                    Details

DiseaseInvestigationId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The disease investigation related to the clinical service request.
This field is a relationship field.
Relationship Name
DiseaseInvestigation
Refers To
DiseaseInvestigation

EncounterId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The encounter related to the service request.
Referenced Objects
- ClinicalEncounter

EndDate                  Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time for the service request.

FacilityCodeId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-generated code for the facility where the service request is to be performed.
Referenced Objects
- CodeSetBundle

FacilityId               Type
reference

<!-- page:899 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The facility where the service request is to be performed.
Referenced Objects
- HealthcareFacility

HasPrerequisites        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether there are any prerequisites for the service request. If the value of this field
is true, then you can’t select a PrerequisiteCodeId.

IsAccepted              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the clinical service request is accepted (true) or not (false). The default
value is false.

IsIgnored               Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the request should be ignored.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:900 -->

AFLS Overview                                                                                      Patient Engagement



Field                   Details


## Description

The most recent date on which a user viewed this record.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the clinical service request.

ObservationId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The observation that justifies the service request.
Referenced Objects
- ClinicalObservation

OriginalRequestId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A reference to the original service request the service request replaces.
Referenced Objects
- ClinicalServiceRequest

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the clinical service request record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup

<!-- page:901 -->

AFLS Overview                                                                                  Patient Engagement



Field                   Details

Refers To
- Group
- User

Note: To enable queues for the Clinical Service Request object, change the sharing
settings for the object from Controlled By Parent to Private.


## PatientId               Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The patient associated with the service request.
Referenced Objects
- Account

PatientInstruction      Type
textarea
Properties
Create, Nillable, Update
Description
Instructions for the patient.


## PerformerId             Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person or device that performs the service request.
Referenced Objects
- Account
- Asset
- HealthcareProvider
- CareRegisteredDevice

PerformerTypeId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:902 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Description

The system-defined code that represents the type or role of the person performing the
service request.
Referenced Objects
- CodeSetBundle

PrerequisiteCodeId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-generated code that represents the prerequisites for the service request. You
can’t select a record for this field if the HasPrerequisites field is set to true.
Referenced Objects
- CodeSetBundle

Priority                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the priority of the service request.
Possible values are:
- ASAP
- Routine
- Stat
- Urgent

QuantityDenominator     Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The denominator value of the quantity associated with the service request.

QuantityNumerator       Type
double
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:903 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details


## Description

The numerator value of the quantity associated with the service request.

QuantityNumeratorUnitId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the numerator value of the quantity associated with the service request.
Referenced Objects
- UnitOfMeasure

QuantityType            Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Indicates the type of quantity related to the service request.
Possible values are:
- Range
- Ratio

ReasonCodeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the justification for the service request.
Referenced Objects
- CodeSetBundle

RequestCodeId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the service request.
Referenced Objects
- CodeSetBundle

<!-- page:904 -->

AFLS Overview                                                                                  Patient Engagement




## Field                          Details

RequesterId                    Type
Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person or device raising a service request.
Referenced Objects
- Account
- Asset
- HealthcareProvider
- CareRegisteredDevice

ServiceRequestGroupIdentifierId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifier that ties the service request to its batch of requests.
Referenced Objects
- Identifier

SourceSystem                   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this record in its source system.

SourceSystemModified           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:905 -->

AFLS Overview                                                                           Patient Engagement



Field                   Details


## Description

The date on which this item was last changed in the source system.

StartDate               Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time for the service request.

Status                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The status of the service request.
Possible values are:
- Active
- Completed
- Draft
- Entered-in-Error
- On-Hold
- Revoked
- Unknown

Type                    Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The type of the service request.
Possible values are:
- Directive
- Filler-Order
- Instance-Order
- Option
- Order
- Original-Order
- Plan

<!-- page:906 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details
- Proposal
- Reflex-Order




## Additional Information for ClinicalServiceRequest in Other Objects

In addition to creating a record using these fields, you can add more details to your ClinicalServiceRequest record by creating records
in certain other objects, and referencing your ClinicalServiceRequest record as the parent record. Here’s the list of objects you can associate
to ClinicalServiceRequest in this way, the type of information they add, and the field they use to reference ClinicalServiceRequest.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the service ParentRecordId
request.

ClinicalServiceRequestDetail                    Associates the service request with various ClinicalServiceRequestId
other records and defines the nature of the
association. For instance, if the service
request is based on an associated record.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ClinicalServiceRequestFeed
Feed tracking is available for the object.
ClinicalServiceRequestHistory
History is available for tracked fields of the object.
ClinicalServiceRequestOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
ClinicalServiceRequestShare (API version 56.0)
Sharing is available for the object.
ClinicalServiceRequestChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## ClinicalServiceRequestDetail

Associates records from different objects to a clinical service request record to add more information to it. This is a multi-object
junction object. This object is available in API version 51.0 and later.



## ClinicalServiceRequestDetail

Associates records from different objects to a clinical service request record to add more information to it. This is a multi-object junction
object. This object is available in API version 51.0 and later.

<!-- page:907 -->

AFLS Overview                                                                                          Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                     Details

ClinicalServiceRequestId Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
References the parent service request record.
Referenced Objects
- ClinicalServiceRequest


## DetailCodeId              Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References a code set or code set bundle that adds information to a clinical service request
record.
Referenced Objects
- CodeSet
- CodeSetBundle


## DetailRecordId            Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References a record that adds information to a clinical service request record.
Referenced Objects
- ClinicalServiceRequest
- MedicationRequest
- HealthcareFacility
- CareObservation
- HealthCondition
- DiagnosticSummary
- Specimen

<!-- page:908 -->

AFLS Overview                                                                                                 Patient Engagement




## Field                                Details

DetailType                           Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the relation between the service request and the detail record.
Possible values are:
- Based On
- Body Site
- Reason Reference
- Request Facility
- Specimen

LastReferencedDate                   Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate                       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                                 Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the clinical service request detail record.




## Usage

ClinicalServiceRequestDetail records add additional information to ClinicalServiceRequest records. This information may be of the
following types, referencing the following types of records:
- Based On: Clinical service requests or medication requests
- Body Site: Code sets or code set bundles

<!-- page:909 -->

AFLS Overview                                                                                                       Patient Engagement


- Reason Reference: Health conditions, care observations, or diagnostic summaries
- Request Facility: Healthcare facilities, code sets, or code set bundles
The records providing this additional information is selected using either the DetailCodeId or DetailRecordId fields, and
then the type of information is specified using the DetailType field. This information is then connected to the clinical service request
record it belongs to using the ClinicalServiceRequestId field.
One record of ClinicalServiceRequestDetail can specify only one type and piece of information. If multiple detail types or detail instances
are required in the parent clinical service request record, multiple records of ClinicalServiceRequestDetail are required.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ClinicalServiceRequestDetailFeed
Feed tracking is available for the object.
ClinicalServiceRequestDetailHistory
History is available for tracked fields of the object.
ClinicalServiceRequestDetailChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## CodeSet

Represents various industry defined codes in the context of their systems and versions of those systems. These codes are used in all sorts
of digital records. This object is available in API version 50.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

Code                                     Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that’s represented by this code set.

CodeDescription                          Type
textarea
Properties
Create, Nillable, Update
Description
Additional information associated with the code set.

<!-- page:910 -->

AFLS Overview                                                                                     Patient Engagement




## Field                   Details

CodeSetKey              Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
Represents a unique key that identifies the concept represented by code sets across different
systems and versions. This key isn’t case-sensitive.

CodeSetType             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of the code set.

EndDate                 Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The end date of the code set’s effective period.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the code set is an active code set.

IsCustomCode            Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the code set is defined by a specific organization, as opposed to recognized
across the industry.

IsPrimary               Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:911 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

Indicates whether the code set is the primary code set for the concept. That is, it was selected
manually by a user instead of being selected by an automated process.

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
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The textual representation of the meaning of the code.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
A reference to the person who owns the code set record.

SourceSystem            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system that sets the context for the code and defines its meaning.

StartDate               Type
date

<!-- page:912 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The start date of the code set’s effective period.

SystemVersion                           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The version of the source system the code belongs to.




## Usage

Code sets are used across multiple features and objects to represent coded, system-defined information about various entities. These
codes are usually industry recognized codes from systems like LOINC or SNOMED.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CodeSetChangeEvent (API version 59.0)
Change events are available for the object.



## CodeSetBundle

Represents a group of code sets across multiple systems and versions. All of these code sets refer to the same conceptual entity. This
object is available in API version 50.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CodeSet10Id                             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

<!-- page:913 -->

AFLS Overview                                                                                  Patient Engagement




## Field                   Details

CodeSet11Id             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet12Id             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet13Id             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet14Id             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet15Id             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet1Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

<!-- page:914 -->

AFLS Overview                                                                                  Patient Engagement




## Field                   Details

CodeSet2Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet3Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet4Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet5Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet6Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet7Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

<!-- page:915 -->

AFLS Overview                                                                                  Patient Engagement




## Field                   Details

CodeSet8Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSet9Id              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A code set that represents the conceptual entity represented by the code set bundle.

CodeSetBundleKey        Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
A unique key that represents the concept referenced by the bundled code sets. This value
is unique, but not case sensitive.

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
Properties
Create, Filter, Group, idLookup, Sort, Update

<!-- page:916 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Description

The name of a conceptual entity referenced by the different code sets grouped together in
the bundle.

OwnerId                                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
References the user who owns the code set bundle record.

Type                                    Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of the code set bundle. This field can be used to group together code set
bundles of similar types. Add values to this picklist as needed for your business functions.




## Usage

The different code sets that represent the same conceptual entity are referenced using the different CodeSetId fields, and then given
a unique CodeSetBundleKey. This object can’t have more than one record referencing the same group of code sets. Though the
industry defines code set bundles as supporting infinite references to code sets, the Salesforce implementation supports a maximum
of fifteen code set references in a bundle.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CodeSetBundleChangeEvent (API version 59.0)
Change events are available for the object.



## HealthcareFacility

Represents a healthcare facility and all its related details. These details may be physical, functional, geographic, or business details. This
object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:917 -->

AFLS Overview                                                                                             Patient Engagement


Fields


## Field                      Details

AccountId                  Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
References the business account of the facility.
Referenced Objects
- Account

AreResearchStudiesConducted Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether research studies are conducted in the healthcare facility (true) or not
(false). This field is available in API version 63.0 when Site Management is enabled.
The default value is false.

AvailabilityExceptions     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The times when the facility isn’t available. Only non-standard time-offs are recorded in this
field.
Examples
Facility time off because of a natural disaster.

AverageActualPtcpEnrlDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average actual number of days spent enrolling participants at the site. This field is available
in API version 62.0 and later when Site Management is enabled.

AverageActlPtcpEnrlRate Type
double
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:918 -->

AFLS Overview                                                                                            Patient Engagement



Field                      Details


## Description

The average actual participant enrollment rate for all research studies at the site. This field
is available in API version 64.0 and later when Site Management is enabled.

AverageOpdPatientCount     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average count of the patients that visit the OPD at the healthcare facility. This field is
available in API version 62.0 and later when Site Management is enabled.

AvgActualPtcpEnrlCount     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average actual number of participants that are enrolled for the research study at the site.
This field is available in API version 62.0 and later when Site Management is enabled.

AvgClnclTrialAgreeDrtn     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average time taken to execute the clinical trial agreement. This field is available in API
version 62.0 and later when Site Management is enabled.

AvgInvtglProductReleaseDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average number of days between the start of the site activation process to the release
of the investigational product at the site. This field is available in API version 62.0 and later
when Site Management is enabled.

AvgProjectedPtcpEnrlCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:919 -->

AFLS Overview                                                                                         Patient Engagement



Field                     Details


## Description

The average number of participants that are expected to enroll for the research study at the
site. This field is available in API version 62.0 and later when Site Management is enabled.

AvgProjectedPtcpEnrlDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average projected number of days to enroll participants at the site. This field is available
in API version 62.0 and later when Site Management is enabled.

AvgProtocolDeviationCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average number of protocol deviations reported during the research study at the site.
This field is available in API version 62.0 and later when Site Management is enabled.

AvgQualVstToInitVstDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average number of days between the site qualification visit and site initiation visit. This
field is available in API version 62.0 and later when Site Management is enabled.

AvgRegltyDocTrnarndDrtn Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The average turnaround time for the preparation of the regulatory documents for Institutional
Review Board (IRB) or the Ethics Committee (EC) submission. This field is available in API
version 62.0 and later when Site Management is enabled.

AvgRsrchEthicalReviewDrtn Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update

<!-- page:920 -->

AFLS Overview                                                                                             Patient Engagement



Field                     Details


## Description

Specifies the average duration required for an approval for the clinical trial at the heathcare
facility from the Institutional Review Board (IRB) or Ethics Committee (EC). This field is available
in API version 62.0 and later when Site Management is enabled.
Possible values are:
- 30 - 60 Days
- 61 - 90 Days
- 91 - 120 Days
- Greater than 120 Days
- Less than 30 Days

AvgSiteActvToFstPtcpDrtn Type
int
Properties
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
site. This field is available in API version 62.0 and later when Site Management is enabled.

Classification            Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the classification of the healthcare facility, such as Previous Partner, Key Opinion
Leader, and Novice Member. This field is available in API version 63.0 and later when Site
Management is enabled.
Possible values are:
- Key Opinion Leader
- Novice Member.
- Previous Partner

<!-- page:921 -->

AFLS Overview                                                                                              Patient Engagement




## Field                      Details

ClinicalTrialAgreementType Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the type of clinical trial agreement that can be done with the healthcare facility.
This field is available in API version 62.0 and later when Site Management is enabled.
Possible values are:
- Tetra-Partite
- Tripartite

HealthcareProviderId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The healthcare provider associated with the facility.
This field is a relationship field. This field is available in API version 62.0 and later when Site
Management is enabled.
Relationship Name
HealthcareProvider
Refers To
HealthcareProvider

InvestigationalProductType Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the type of investigational product available at the healthcare facility. This field is
available in API version 62.0 and later when Site Management is enabled.
Possible values are:
- Biologic
- Device
- Diagnostic
- Drug
- Others
- Palliative
- Vaccine

<!-- page:922 -->

AFLS Overview                                                                                             Patient Engagement




## Field                      Details

InvtglProdtDestructionCpbl Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the type of Investigational Product disposal capability. This field is available in API
version 62.0 and later when Site Management is enabled.
Possible values are:
- Off-Site
- On-Site
- Others

InvtglProdtPreparationCpbl Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the list of handling equipment available at the facility for the investigational product.
This field is available in API version 62.0 and later when Site Management is enabled.
Possible values are:
- Extemporaneous Preparation
- Horizontal Laminar Flow Hood
- Non-Vented Glove Box
- Other
- Vented Glove Box
- Vertical Laminar Flow Hood

InvtglProductStorageCpbl Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the features of the investigational product store available at the healthcare facility.
This field is available in API version 62.0 and later when Site Management is enabled.
Possible values are:
- Access Controlled
- Back-Up Power
- Minimum and Maximum Temperature Monitoring
- Temperature Alarm

<!-- page:923 -->

AFLS Overview                                                                                       Patient Engagement




## Field                     Details

- Temperature Monitoring
- Temperature Monitoring Log Generation

IsAfflWithSiteMgmtOrg     Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the healthcare facility is affiliated to the site management organization.
This field is available in API version 62.0 and later when Site Management is enabled.
The default value is false.

FacilityTypeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of the facility in terms of that functions
performed.
Referenced Objects
- CodeSetBundle

IsAlwaysOpen              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the facility is open during all hours.

IsDedResearchStudyRoomAvl Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a dedicated room is available at the healthcare facility to conduct the
research study. This field is available in API version 62.0 and later when Site Management is
enabled.
The default value is false.

IsDedRsrchStdyMntrRmAvl Type
boolean

<!-- page:924 -->

AFLS Overview                                                                                         Patient Engagement



Field                     Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a dedicated room is available at the healthcare facility to monitor the
research study. This field is available in API version 62.0 and later when Site Management is
enabled.
The default value is false.

IsGoodClnclPracTrnPrvd    Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether good clinical practice training is provided at the healthcare facility. This
field is available in API version 62.0 and later when Site Management is enabled.
The default value is false.

IsPgxSpcmnCollAvl         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the pharmacogenoic specimen collection is available at the healthcare
facility. This field is available in API version 62.0 and later when Site Management is enabled.
The default value is false.

IsPkpdSpcmnCollStrgAvl    Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether PKPD specimen collection and storage is available at the healthcare facility.
This field is available in API version 62.0 and later when Site Management is enabled.
The default value is false.

IsRsrchEthicalRvwSbmsSupp Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:925 -->

AFLS Overview                                                                                           Patient Engagement



Field                    Details


## Description

Indicates whether the facility supports the regulatory document submission to the Institutional
Review Board (IRB) or Ethics Committee (EC). This field is available in API version 62.0 and
later when Site Management is enabled.
The default value is false.

IsRsrchStudyMtrlStoreAvl Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a store is available at the healthcare facility to keep the research study
materials, such as laboratory kits. This field is available in API version 62.0 and later when Site
Management is enabled.
The default value is false.

IsSatelliteSite          Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the healthcare facility is a satellite site of another healthcare facility (true)
or not (false). This field is available in API version 62.0 and later when Site Management
is enabled.
The default value is false.

IsTrainingProvided       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a training is provided to the research staff at the healthcare facility. This
field is available in API version 62.0 and later when Site Management is enabled.
The default value is false.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date that the record was referenced.

<!-- page:926 -->

AFLS Overview                                                                                Patient Engagement




## Field                   Details

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The last date that the record was viewed.

LicensedBedCount        Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of licensed beds the facility has.

LocationId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the location record representing the facility’s geolocation.
Referenced Objects
- Location

LocationType            Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of the facility in terms of its physical structure.
Possible values are:
- Building
- Facility
- House
- ICU Ward

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update

<!-- page:927 -->

AFLS Overview                                                                                            Patient Engagement



Field                      Details


## Description

The name of the healthcare facility record.

ParentHealthcareFacilityId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The parent facility that the facility is a part of.
Examples
The hospital that an ER wing is a part of.
Referenced Objects
- HealthcareFacility

PatientAgeRange            Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the age range of the patients at the healthcare facility. This field is available in API
version 62.0 and later when Site Management is enabled.
Possible values are:
- 18 to 64
- Greater than or Equal to 65
- Less than or Equal to 17

RegulatoryViolationCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of regulatory violations reported during the research study at the site. This field
is available in API version 62.0 and later when Site Management is enabled.

ResearchStudyMethod        Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the method of conducting the study at the healthcare facility. This field is available
in API version 62.0 and later when Site Management is enabled.

<!-- page:928 -->

AFLS Overview                                                                                           Patient Engagement



Field                    Details
Possible values are:
- Hybrid
- Traditional
- Virtual

ResearchStudyPhase       Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the phases under which the study is conducted. This field is available in API version
62.0 and later when Site Management is enabled.
Possible values are:
- Phase 1
- Phase 2
- Phase 3
- Phase 4

ResearchStudyStartYear   Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The start year of the research study at the healthcare facility. This field is available in API
version 62.0 and later when Site Management is enabled.

ResearchStudyType        Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the type of research study conducted at the healthcare facility. This field is available
in API version 62.0 and later when Site Management is enabled.
Possible values are:
- Expanded Access
- Interventional
- Observational

RsrchEthicalRvwComteType Type
multipicklist

<!-- page:929 -->

AFLS Overview                                                                                         Patient Engagement



Field                    Details


## Properties

Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the type of the Institutional Review Board (IRB) or Ethics Committee (EC). This field
is available in API version 62.0 and later when Site Management is enabled.
Possible values are:
- 30 - 60 Days
- 61 - 90 Days
- 91 - 120 Days
- Greater than 120 Days
- Less than 30 Days

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
Description
The identifier of the record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

UnitOfMeasureId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measure that’s used to calculate the duration of a specific activity at the facility.
This field is available in API version 62.0 and later when Site Management is enabled.
This field is a relationship field.

<!-- page:930 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details

Relationship Name
UnitOfMeasure
Refers To
UnitOfMeasure




## Additional Information for HealthcareFacility in Other Objects

In addition to creating a record using these fields, you can add more details to your HealthcareFacility record by creating records in
certain other objects, and referencing your HealthcareFacility record as the parent record. Here’s the list of objects you can associate to
HealthcareFacility in this way, the type of information they add, and the field they use to reference HealthcareFacility.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the facility. ParentRecordId




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthcareFacilityChangeEvent (API version 59.0)
Change events are available for the object.
HealthcareFacilityFeed
Feed tracking is available for the object.
HealthcareFacilityHistory
History is available for tracked fields of the object.



## HealthCondition

Represents a clinical condition, problem, or any clinically relevant occurrence that is a matter of concern. This object is available in API
version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AbatementEndDateTime                    Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:931 -->

AFLS Overview                                                                                   Patient Engagement



Field                    Details


## Description

The end date and time of the abatement period.

AbatementStartDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date and time of the abatement period or the specific date and time when the
condition abated.


## AssertionSourceId        Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person made the assertion about the condition. This may be a physician, a patient, or
even the patient’s contact.
Referenced Objects
- Account
- HealthcareProvider

CaseId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The case associated with the health condition of the disease outbreak.
This field is a relationship field.
Relationship Name
Case
Refers To
Case

ClinicalEncounterId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical encounter that the immunization was a part of.

<!-- page:932 -->

AFLS Overview                                                               Patient Engagement



Field                   Details

Referenced Objects
- ClinicalEncounter

ConditionCodeId         Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that represents the condition.
Referenced Objects
- CodeSetBundle

ConditionStatus         Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the condition.
Possible values are:
- Active
- Inactive
- Recurrence
- Relapse
- Remission
- Resolved

DiagnosticStatus        Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The diagnostic status of the condition.
Possible values are:
- Confirmed
- Differential
- Entered in error
- Provisional
- Refuted
- Unconfirmed

<!-- page:933 -->

AFLS Overview                                                                         Patient Engagement




## Field                    Details

ExtlProblemDefIdentifier Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the external problem definition in the source system.

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the health condition record.

OnsetEndDateTime         Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date and time of the onset period.

OnsetStartDateTime       Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:934 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details


## Description

The start date and time of the onset period or the specific date and time when the condition
manifested.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the health condition record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
- Group
- User


## PatientId               Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The patient who is afflicted with the condition.
Referenced Objects
- Account

ProblemDefinitionId     Type
Lookup
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the problem definition in the PGI library that was used to instantiate the
HealthCondition record in a care plan.
This field is available from version 57.0
This field is a relationship field.
Relationship Name
ProblemDefinition

<!-- page:935 -->

AFLS Overview                                                                         Patient Engagement



Field                    Details

Relationship Type
Lookup
Refers To
ProblemDefinition

ProblemDescription       Type
textarea
Properties
Create, Nillable, Update
Description
The description for the condition as a problem in a care plan.
This field is available from version 57.0

ProblemName              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the condition as a problem in a care plan.
This field is available from version 57.0

RecordCreationDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record of the condition was created.


## RecordCreatorId          Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who created the record of the condition.
Referenced Objects
- Account
- HealthcareProvider

RelatedHealthConditionId Type
reference

<!-- page:936 -->

AFLS Overview                                                                                     Patient Engagement



Field                      Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The health condition associated with the primary health condition.
This field is a relationship field.
Relationship Name
RelatedHealthCondition
Refers To
HealthCondition

RelatedHealthConditionType Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of health condition based on which the primary and related health
conditions are associated.
Possible values are:
- Coinfection

ReportDate                 Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date the health condition was reported.

Severity                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the severity of the condition.
Possible values are:
- Mild
- Moderate
- Severe

SiteId                     Type
reference

<!-- page:937 -->

AFLS Overview                                                                                    Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the site of the condition on the patient’s body.
Referenced Objects
- CodeSetBundle

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The source system from where the record was brought into Salesforce.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier for the record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

StageId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the stage of the condition.
Referenced Objects
- CodeSetBundle

Type                     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:938 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Description

The contextual type of the condition.
Possible values are:
- Encounter Diagnosis
- Problem List Item

DiagnosticStatusCategory Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the category of a patient's diagnosis status.
Possible values are:
- Confirmed
- Probable
- Suspected
- Unknown




## Additional Information for HealthCondition in Other Objects

In addition to creating a record using these fields, you can add more details to your HealthCondition record by creating records in certain
other objects, and referencing your HealthCondition record as the parent record. Here’s the list of objects you can associate to
HealthCondition in this way, the type of information they add, and the field they use to reference HealthCondition.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the health ParentRecordId
condition.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthConditionChangeEvent (API version 58.0)
Change events are available for the object.
HealthConditionOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
HealthConditionShare (API version 56.0)
Sharing is available for the object.

<!-- page:939 -->

AFLS Overview                                                                                                        Patient Engagement



## HealthConditionDetail

This child object is used to associate body site and laterality codes to HealthCondition records. This object is available in API version
52.0 and later.



## HealthConditionDetail

This child object is used to associate body site and laterality codes to HealthCondition records. This object is available in API version 52.0
and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

DetailCodeId                           Type
Polymorphic Master-Detail reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References a code set or code set bundle that adds information to a HealthCondition record.
Referenced Objects
CodeSet, CodeSetBundle

DetailType                             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Speicifies the type of information represented by the detail code that’s accosicated to the
HealthCondition record.
Possible values are:
- Body Site
- Laterality


## HealthConditionId                      Type

Master-Detail reference
Properties
Create, Filter, Group, Sort
Description
The parent HealthCondition record to which the body site and laterality information is being
added.

<!-- page:940 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details

Referenced Objects
HealthCondition

LastReferencedDate                      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate                          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the HealthConditionDetail record.




## Usage

- Use the HealthConditionId field to reference the parent HealthCondition record that the additional information is being associated
to.
- Use the DetailType picklist to specify the type of code that’s being associated to the HealthCondition record.
- Use the DetailCodeId field to reference the code set or code set bundle record with the associated information.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthConditionDetailFeed on page 1429
Feed tracking is available for the object.
HealthConditionDetailHistory on page 1434
History is available for tracked fields of the object.
HealthConditionDetailChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.

<!-- page:941 -->

AFLS Overview                                                                                                 Patient Engagement




## Identifier

Represents identifier information for multiple objects. This object is available in API version 51.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

Description                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description related to the identifier.

EffectiveDate                          Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time from when the identifier is valid.

EndDate                                Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time from when the identifier is no longer valid.


## IdTypeId                               Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of ID the identifier is.
Referenced Objects
- CodeSet

<!-- page:942 -->

AFLS Overview                                                        Patient Engagement



Field                   Details
- CodeSetBundle

IdUsageType             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of use of the ID.
Possible values are:
- Official
- Old
- Secondary
- Temp
- Usual

IdValue                 Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The value of the identifier.

IdentifierKey           Type
string
Properties
Filter, Group, idLookup, Nillable, Sort
Description
A unique key assigned to the identifier record.
This is a calculated field.

IssuingAuthorityId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The authorized body that issued the identifier.
Referenced Objects
- Account

<!-- page:943 -->

AFLS Overview                                                                Patient Engagement




## Field                   Details

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name for the identifier record.


## ParentRecordId          Type

Polymorphic master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent entity associated with the identifier.
Referenced Objects
- Account
- BoardCertification
- Contact
- CareRegisteredDevice
- Medication
- HealthCondition
- AllergyIntolerance
- PatientMedicalProcedure
- PatientImmunization
- MedicationStatement
- ClinicalEncounter
- HealthcareFacility

<!-- page:944 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                  Details
- HealthcareProvider
- ClinicalAlert
- MedicationRequest
- DiagnosticSummary
- HealthcarePractitionerFacility
- ClinicalServiceRequest
- ClinicalDetectedIssue—This value is available in API version 55.0 and later.

SourceSystem                           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The source system from which the identifier record was brought into Salesforce.

SourceSystemIdentifier                 Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier of the identifier record in its source system.

SourceSystemModified                   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the identifier record was last modified in its source system.




## Usage

The identifier object is used to assign identifiers to records in various other objects. Here’s a list of the objects whose records you can
add identifiers to:
- Account
- Contact
- Board Certification
- Medication
- HealthCondition
- AllergyIntolerance
- PatientMedicalProcedure

<!-- page:945 -->

AFLS Overview                                                                                                          Patient Engagement


- PatientImmunization
- MedicationStatement
- ClinicalEncounter
- HealthcareFacility
- ClinicalAlert
- MedicationRequest
- DiagnosticSummary
- HealthcarePractitionerFacility
- ClinicalServiceRequest
- ClinicalDetectedIssue
You connect the identifier record to its related record in any of the listed objects by referencing that record using the ParentRecordId
field.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
IdentifierChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## Medication

Represents detailed information about different medications. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

BatchNumber                             Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the batch number of the medication.

BrandNameAlternative                    Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:946 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The branded alternative for a generic medication. This field is available in API version 56.0
and later.

ExpirationDateTime      Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Specifies the expiration date of the medication.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

ManufacturerId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The company that makes the medicine.
Referenced Objects
- Account

MedicationCategory      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The category of the medication. This field is available in API version 56.0 and later.
Possible values are:

<!-- page:947 -->

AFLS Overview                                                                                Patient Engagement



Field                   Details
- Branded Product
- Generic Product
- Innovator Product
- Therapeutic Moeity

MedicationCodeId        Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that identifies a medication.
Referenced Objects
- CodeSetBundle

MedicationFormId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code for the dosage form this medication is manufactured in.
Referenced Objects
- CodeSetBundle

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the medication.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The user who owns the medication record.

ProductId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:948 -->

AFLS Overview                                                                                        Patient Engagement



Field                    Details


## Description

The product that's associated with the medication.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Financial Assistance
Program permission set.


QuantityDenominator      Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The total volume of the medication contained in the packaged product.

QuantityNumerator        Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The total amount of the medication contained in the packaged product.

QuantityUnitId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The measurement unit for the quantity.
Referenced Objects
- UnitOfMeasure

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:949 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Description

The ID of this record on its source system.

SourceSystemModified                    Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed on the source system.

Status                                  Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the medication.
Possible values are:
- Active
- Entered in error
- Inactive




## Additional Information for Medication in Other Objects

In addition to creating a record using these fields, you can add more details to your Medication record by creating records in certain
other objects, and referencing your Medication record as the parent record. Here’s the list of objects you can associate to Medication in
this way, the type of information they add, and the field they use to reference Medication.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the           ParentRecordId
medication record.

MedicinalIngredient                             Adds information about the different            ParentRecordId
ingredients used in the medication.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MedicationChangeEvent (API version 59.0)
Change events are available for the object.

<!-- page:950 -->

AFLS Overview                                                                                                     Patient Engagement



## MedicinalIngredient

MedicinalIngredient is a child object of Medication that represents substances or drugs that are used as ingredients in the medication.
This object is available in API version 52.0 and later.



## MedicinalIngredient

MedicinalIngredient is a child object of Medication that represents substances or drugs that are used as ingredients in the medication.
This object is available in API version 52.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

IngredientId                          Type
Polymorphic reference
Properties
Create, Filter, Group, Sort, Update
Description
The substance that’s used as an ingredient in the medication. If the ingredient is another
medication or drug, reference a Medication record. If the ingredient is not a medication,
reference a code set bundle record with the system-defined code that represents the
ingredient.
Referenced Objects
Medication, CodeSetBundle

IsActive                              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the ingredient is an active ingredient in the medication. An active ingredient
affects the therapeutic action of the medication.
The default value is 'false'.

LastReferencedDate                    Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

<!-- page:951 -->

AFLS Overview                                                                                  Patient Engagement




## Field                   Details

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the record.


## OwnerId                 Type

Polymorphic reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the record.
Referenced Objects
Group, User

ParentRecordId          Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The medication that this ingredient is a part of.
This is a relationship field.
Referenced Objects
Medication

StrengthDenominator     Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The denominator value of the ingredient’s strength or quantity in the medication.

<!-- page:952 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

StrengthDenominatorUnitId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of StrengthDenominator
Referenced Objects
UnitOfMeasure

StrengthNumerator                       Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The numerator value of the ingredient’s strength or quantity in the medication.

StrengthNumeratorUnitId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of StrengthNumerator
This is a relationship field.
Refers To
UnitOfMeasure




## Usage

Ingredients are added to a medication record by creating MedicinalIngredient records to represent each ingredient, and then referencing
the medication record using the ParentRecordId field in all the MedicinalIngredient records.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MedicinalIngredientChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.
MedicinalIngredientFeed
Feed tracking is available for the object.
MedicinalIngredientHistory on page 1434
History is available for tracked fields of the object.

<!-- page:953 -->

AFLS Overview                                                                                                       Patient Engagement




## MedicinalIngredientShare on page 1438

Sharing is available for the object.



## MedicationDispense

Represents the dispense of a medication to a patient in response to a medication request or order. This object also includes the instructions
for how the medication is to be administered This object is available in API version 54.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

CollectedBy                            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The contact, account, or a healthcare provider who collected the dispensed medication. This
field is available in API version 55.0 and later.
This field is a polymorphic relationship field.
Relationship Name
CollectedBy
Relationship Type
Lookup
Refers To
Account, Contact, HealthcareProvider

ContextId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The encounter that establishes the context for the dispense of a medication.
Refers To
- ClinicalEncounter

<!-- page:954 -->

AFLS Overview                                                                                         Patient Engagement




## Field                   Details

DeliveryLocationId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The location where the dispensed medication will be delivered. This field is available in API
version 55.0 and later.
This field is a polymorphic relationship field.
Relationship Name
DeliveryLocation
Relationship Type
Lookup
Refers To
HealthcareFacility, Location

DispenseTypeCodeId      Type
Polymorphic lookup
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that identifies the dispense event type. For instance, a first fill, trial
fill, or refill.
Refers To
- CodeSet
- CodeSetBundle

DispensedDateTime       Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the medication was handed over.

HealthcareFacilityId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The location where the dispense occurred.

<!-- page:955 -->

AFLS Overview                                                                                            Patient Engagement



Field                           Details

Refers To
- HealthcareFacility

IsSubstituted                   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a substitute medication was dispensed.
The default value is false.
This field is available in API version 55.0 and later.

LastReferencedDate              Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate                  Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

MedAdministrationSettingCategory Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the setting in which the medication is expected to be administered to the patient.
Possible values are:
- Inpatient
- Outpatient
- Community
- Discharge

MedicationCodeId                Type
reference

<!-- page:956 -->

AFLS Overview                                                                                 Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that identifies the medication that's dispensed.
Refers To
- CodeSet
- CodeSetBundle

MedicationId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The medication that's dispensed.
Relationship Name
Medication
Relationship Type
Lookup
Refers To
- Medication

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the record.


## PatientId               Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The patient for whom the medication is dispensed.
Refers To
- Account

PreparedDateTime        Type
dateTime

<!-- page:957 -->

AFLS Overview                                                                                         Patient Engagement



Field                      Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The date and time when the medication was prepared for dispense.

PrimaryDetectedIssueId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The primary clinical issue associated with the medication dispensation. This field is available
in API version 55.0 and later.
This field is a relationship field.
Relationship Name
PrimaryDetectedIssue
Relationship Type
Lookup
Refers To
ClinicalDetectedIssue

PrimaryMedicationRequestId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The primary medication request that authorized the dispense of the medication.
Refers To
- MedicationRequest

PrimaryProcedureId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The primary medical procedure associated with the medication dispensation. This field is
available in API version 55.0 and later.
This field is a relationship field.
Relationship Name
PrimaryProcedure
Relationship Type
Lookup

<!-- page:958 -->

AFLS Overview                                                                                    Patient Engagement



Field                       Details


## Refers To

PatientMedicalProcedure

Quantity                    Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The quantity of medication that was dispensed.

QuantityUnitId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the quantity of medication that was dispensed.
Refers To
- UnitOfMeasure

SourceSystem                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this record in its source system.

SourceSystemModifiedDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when this item was last changed in the source system.

<!-- page:959 -->

AFLS Overview                                                                                            Patient Engagement




## Field                        Details

Status                       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the dispense event.
Possible values are:
- Cancelled
- Completed
- Declined
- Entered-In-Error
- In-Progress
- On-Hold
- Preparation
- Stopped
- Unknown


## StatusReasonCodeId           Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the reason for the specified status.
Refers To
- CodeSet
- CodeSetBundle

StatusReasonRelatedIssueId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies clinical issue that resulted in the status of the medication dispensation. This field
is available in API version 55.0 and later.
This field is a relationship field.
Relationship Name
StatusReasonRelatedIssue
Relationship Type
Lookup

<!-- page:960 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details


## Refers To

ClinicalDetectedIssue

SubstitutedById         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the user or healthcare provider who substituted the medication. This field is available
in API version 55.0 and later.
This field is a polymorphic relationship field.
Relationship Name
SubstitutedBy
Relationship Type
Lookup
Refers To
HealthcareProvider, User

SubstitutionReason      Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the reason for substituting the medication.
Possible values are:
- Continuing therapy
- Formulary policy
- Out of stock
- Regulatory requirement
This field is available in API version 55.0 and later.

SubstitutionType        Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of substitution done for the medication.
Possible values are:
- Brand composition
- Equivalent

<!-- page:961 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

- Equivalent composition
- Formulary
- Generic composition
- None
- Therapeutic alternative
- Therapeutic brand
- Therapeutic generic
This field is available in API version 55.0 and later.

SupplyDaysCount                         Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The number of days that the dispensed supply is expected to last.




## Additional Information for MedicationStatement in Other Objects

In addition to creating a record using these fields, you can add more details to your MedicationDispense record by creating records in
certain other objects, and referencing your MedicationDispense record as the parent record. Here’s the list of objects you can associate
to MedicationStatement in this way, the type of information they add, and the field they use to reference MedicationStatement.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the           ParentRecordId
medication dispense.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MedicationDispenseChangeEvent (API version 59.0)
Change events are available for the object.
MedicationDispenseFeed
Feed tracking is available for the object.
MedicationDispenseHistory
History is available for tracked fields of the object.



## MedicationRequest

Represents a request or order for the supply of medication, along with information about how it should be administered. This object is
available in API version 51.0 and later.

<!-- page:962 -->

AFLS Overview                                                                                           Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                        Details

AllowedSubstitutionTypeCodeId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of substitution that's allowed. This field
can’t be used if the CanSubstitute field is set to true.
Referenced Objects
- CodeSetBundle

CanSubstitute                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether substitution is acceptable. If the value for this field is set to true, then
the AllowedSubstitutionTypeCodeId field can’t be selected.

CarePlanId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care plan related to this medication request.
This field is a relationship field.
Relationship Name
CarePlan
Relationship Type
Lookup
Referenced Objects
- CarePlan

CaseId                       Type
reference

<!-- page:963 -->

AFLS Overview                                                                           Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The case associated with the medication request.
This field is a relationship field.
Relationship Name
Case
Refers To
Case

ClinicalEncounterId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical encounter related to the medication request.
Referenced Objects
- ClinicalEncounter

ClinicalServiceRequestId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the service request related to the medication request.
Referenced Objects
- ClinicalServiceRequest

DispenseInterval         Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The minimum interval required between refills.

DispenseIntervalUnitId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:964 -->

AFLS Overview                                                               Patient Engagement



Field                   Details


## Description

The unit for that interval.
Referenced Objects
- UnitOfMeasure

DispenserId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who provides the medication.
Referenced Objects
- Account

FillDurationUnitId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit for the fill duration.
Referenced Objects
- UnitOfMeasure

FillQuantityUnitId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the fill quantity.
Referenced Objects
- UnitOfMeasure

InitialFillDuration     Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The length of time the first fill is expected to last.

<!-- page:965 -->

AFLS Overview                                                                                         Patient Engagement




## Field                            Details

InitialFillQuantity              Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The quantity to be filled in the first dispense.

IsIgnored                        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the request should be ignored.

IsSecondaryInformation           Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the request is based on information from a secondary source instead of
a primary one. If this field is set to true, then the SecondarySourceId field can’t be
selected.

LastReferencedDate               Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate                   Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

MedicationAdministrationContextId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:966 -->

AFLS Overview                                                                                     Patient Engagement



Field                    Details


## Description

The system-defined code that represents the setting in which the medication is administered.
Referenced Objects
- CodeSetBundle

MedicationCodeId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the medication requested. A record can select either
a MedicationId or a MedicationCodeId, but not both.
Referenced Objects
- CodeSetBundle

MedicationId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lookup to the medication record for the medicine requested. A record can select either a
MedicationId or a MedicationCodeId, but not both.
Referenced Objects
- Medication

MedicationRequestGroupId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A shared identifier common to all medication requests that were authorized more or less
simultaneously by a single author.
Referenced Objects
- Identifier

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort

<!-- page:967 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Description

The system-generated name of the medication request record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the medication request record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Referenced Objects
- Group
- User


## PatientId               Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The person who needs the medicine.
Referenced Objects
- Account


## PerformerId             Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who administers the medicine.
Referenced Objects
- Account
- HealthcareProvider
- CareRegisteredDevice

PerformerTypeId         Type
reference

<!-- page:968 -->

AFLS Overview                                                                                      Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the performer's role. For instance, the cardiologist,
neurosurgeon, and so on.
Referenced Objects
- CodeSetBundle

PrescribedDate           Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and optionally the time when the prescription was initially written or authored on.

PrescriptionPeriodEnd    Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The end date for the prescription's validity.

PrescriptionPeriodStart Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date for the prescription's validity.

PreviousPrescriptionId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference to previous prescriptions.
Referenced Objects
- MedicationRequest

Priority                 Type
picklist

<!-- page:969 -->

AFLS Overview                                                                                Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the priority of the request.
Possible values are:
- ASAP
- Routine
- Stat
- Urgent

ReasonCodeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code for why the medicine was requested.
Referenced Objects
- CodeSetBundle


## ReasonReferenceId       Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference to the condition or observation that warranted this medicine.
Referenced Objects
- HealthCondition
- CareObservation

RefillDuration          Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
How long the refill is expected to last.

RefillQuantity          Type
double
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:970 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The quantity in each refill.

RefillsAllowed          Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of refills that are allowed.

RelatedRequestId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A plan or request that is fulfilled in whole or in part by this medication request.
Referenced Objects
- MedicationRequest


## RequesterId             Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who raised the request.
Referenced Objects
- Account
- HealthcareProvider
- CareRegisteredDevice


## SecondarySourceId       Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the person who gave the information for the request. This field can’t be selected
if the IsSecondarySource field is set to true.
Referenced Objects
- Account
- HealthcareProvider

<!-- page:971 -->

AFLS Overview                                                                            Patient Engagement




## Field                    Details

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed in the source system.

Status                   Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The status of the medication request.
Possible values are:
- Active
- Cancelled
- Completed
- Draft
- Entered-in-Error
- On-Hold
- Stopped
- Unknown

StatusReasonCodeId       Type
reference

<!-- page:972 -->

AFLS Overview                                                                                      Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the reason for the status.
Referenced Objects
- CodeSetBundle

SubstitutionReasonCodeId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies why a substitution is required.
Referenced Objects
- CodeSetBundle

TherapyDuration          Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the overall pattern of the administration of the medication to the patient.
For instance, Continuous, Acute, Seasonal.
Possible values are:
- Continuous
- Seasonal
- Short Term

Type                     Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The type of the request.
Possible values are:
- Filler Order
- Instance Order
- Option
- Order

<!-- page:973 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details
- Original Order
- Plan
- Proposal
- Reflex Order




## Additional Information for MedicationRequest in Other Objects

In addition to creating a record using these fields, you can add more details to your MedicationRequest record by creating records in
certain other objects, and referencing your MedicationRequest record as the parent record. Here’s the list of objects you can associate
to MedicationRequest in this way, the type of information they add, and the field they use to reference MedicationRequest.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the           ParentRecordId
medication request.

PatientMedicationDosage                         Associates dosage-related information for       ParentRecordId
the medication in the medication request
record.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MedicationRequestChangeEvent (API version 59.0)
Change events are available for the object.
MedicationRequestFeed
Feed tracking is available for the object.
MedicationRequestHistory
History is available for tracked fields of the object.
MedicationRequestOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
MedicationRequestShare (API version 56.0)
Sharing is available for the object.



## MedicationStatement

Represents a record of medication that the patient is currently taking or has taken in the past. This object is available in API version 51.0
and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:974 -->

AFLS Overview                                                                     Patient Engagement


Fields


## Field                   Details

AssertionDateTime       Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time the medication statement was made.

CareObservationId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The observation that warranted this medication.
Referenced Objects
- CareObservation

CaseId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The case associated with the patient's medication statement.
This field is a relationship field.
Relationship Name
Case
Refers To
Case

ClinicalEncounterId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The encounter related to the medication statement.
Referenced Objects
- ClinicalEncounter

DeliverySetting         Type
picklist

<!-- page:975 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the setting in which the medication was administered.
Possible values are:
- Community
- Inpatient
- Outpatient
- PatientSpecified

EndDateTime             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The stated end date and time for the medication.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

MedicationCodeId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that identifies a medication. A record can select either a
MedicationId or a MedicationCodeId, but not both.
Referenced Objects
- CodeSetBundle

<!-- page:976 -->

AFLS Overview                                                                                   Patient Engagement




## Field                    Details

MedicationId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The medication associated with this medication statement. A record can select either a
MedicationId or a MedicationCodeId, but not both.
Referenced Objects
- Medication

MedicationReasonCodeId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the reason this medication was taken.
Referenced Objects
- CodeSetBundle


## MedicationReasonId       Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The observation, condition, or diagnostic report that warranted the medication.
Referenced Objects
- HealthCondition
- CareObservation

MedicationRequestId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A medication request associated with the medication statement.
Referenced Objects
- MedicationRequest

Name                     Type
string

<!-- page:977 -->

AFLS Overview                                                                                      Patient Engagement



Field                      Details


## Properties

Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the medication statement record.

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the medication statement record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
- Group
- User

ParentMedicationStatementId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The parent medication statement associated with the medication statement.
Referenced Objects
- MedicationStatement


## PatientId                  Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
A patient that the medication statement refers to.
Referenced Objects
- Account

ProcedureId                Type
reference

<!-- page:978 -->

AFLS Overview                                                                            Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The procedure associated with this medication statement.
Referenced Objects
- PatientMedicalProcedure

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed in the source system.

StartDateTime            Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The stated start date and time for the medication.

StatementSourceId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who made the medication statement.

<!-- page:979 -->

AFLS Overview                                                                                                    Patient Engagement




## Field                                 Details

Status                                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the medication in this statement.
Possible values are:
- Active
- Completed
- Entered-in-error
- Intended
- Not-taken
- On-hold
- Review Pending - This picklist value is available for the Home Health feature in API
version 59.0 and later.
- Stopped
- Unknown

StatusReasonCodeId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the reason for the status.
Referenced Objects
- CodeSetBundle




## Additional Information for MedicationStatement in Other Objects

In addition to creating a record using these fields, you can add more details to your MedicationStatement record by creating records in
certain other objects, and referencing your MedicationStatement record as the parent record. Here’s the list of objects you can associate
to MedicationStatement in this way, the type of information they add, and the field they use to reference MedicationStatement.

Object                                       Type of Information                           Reference Field
Identifier                                   Associates an identifier value to the         ParentRecordId
medication statement.

PatientMedicationDosage                      Associates dosage related information for ParentRecordId
the medication in the medication statement
record.

<!-- page:980 -->

AFLS Overview                                                                                                       Patient Engagement



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
MedicationStatementChangeEvent (API version 58.0)
Change events are available for the object.
MedicationStatementFeed
Feed tracking is available for the object.
MedicationStatementHistory
History is available for tracked fields of the object.
MedicationStatementOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
MedicationStatementShare (API version 56.0)
Sharing is available for the object.



## MedicationStatementDetail

Represents additional information associated with MedicationStatement records. This object is available in API version 54.0 and later.



## MedicationStatementDetail

Represents additional information associated with MedicationStatement records. This object is available in API version 54.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

DetailCodeId                           Type
Polymorphic Master-Detail reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References a code set or code set bundle that adds information to a MedicationStatement
record.
Referenced Objects
- CodeSet
- CodeSetBundle


## DetailRecordId                         Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:981 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Description

References a record that adds information to a MedicationStatement record
Refers To
- CareObservation
- ClinicalServiceRequest
- DiagnosticSummary
- HealthCondition
- MedicationDispense
- MedicationRequest
- MedicationStatement
- PatientMedicalProcedure

DetailType              Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of information added to the MedicationStatement record.
Possible values are:
- Based On
- Part Of
- Status Reason
- Reason Code
- Reason Reference
- Derived From

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

<!-- page:982 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

MedicationStatementId                   Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent MedicationStatement record to which additional information is being added.
This is a relationship field.
Refers To
- MedicationStatement

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the record.




## Usage

- Use the MedicationStatementId field to reference the parent MedicationStatement record that the additional information is being
associated to.
- Use the DetailType picklist to specify the type of detail that’s being associated to the MedicationStatement record. Here's how the
associated record types are mapped to values in the DetailType field.
– Based On - MedicationRequest, ServiceRequest
– Part Of - MedicationDispense, MedicationStatement, PatientMedicalProcedure, CareObservation
– Status Reason - CodeSet, CodeSetBundle
– Reason Code - CodeSet, CodeSetBundle
– Reason Reference - HealthCondition, CareObservation, DiagnosticSummary
– Derived From - CareObservation, ClinicalServiceRequest, DiagnosticSummary, HealthCondition, MedicationDispense,
MedicationRequest, MedicationStatement, PatientMedicalProcedure

- Use the DetailCodeId and DetailRecordId fields to reference the records with the associated information.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MedicationStatementDetailChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.

<!-- page:983 -->

AFLS Overview                                                                                                       Patient Engagement




## PatientHealthReaction

Represents a patient’s adverse reaction to an allergy, intolerance, or immunization. This object is available in API version 51.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

CausativeSubstanceId                   Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that represents the substance that triggered the reaction.
Referenced Objects
- CodeSetBundle

Details                                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Additional information about the reaction and, if required, the manifested symptoms.

ExposureRouteId                        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the route of exposure related to the reaction.
Referenced Objects
- CodeSetBundle

IsSelfReported                         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:984 -->

AFLS Overview                                                                                 Patient Engagement



Field                   Details


## Description

Indicates whether the reaction was reported by the patient.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

ManifestedSymptomId     Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that represents the manifested symptom.
Referenced Objects
- CodeSetBundle

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the PatientHealthReaction record.

ObservationId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The observation that provides additional information about the reaction.
Referenced Objects
- CareObservation

<!-- page:985 -->

AFLS Overview                                                                                                       Patient Engagement




## Field                                   Details

ParentId                                Type
Polymorphic master-detail reference
Properties
Create, Filter, Group, Sort
Description
The imm unization or allergy intolerance that this reaction is a result of.
Referenced Objects
- AllergyIntolerance
- PatientImmunization

ReactionDateTime                        Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time of the reaction.

Severity                                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the severity of the reaction.
Possible values are:
- Mild
- Moderate
- Severe




## Usage

PatientHealthReaction records are used to add more information to AllergyIntolerance and PatientImmunization records in the event
of the patient experiencing an adverse reaction related to those events. The PatientHealthReaction record is associated to the
AllergyIntolerance or PatientImmunization records using the ParentId field.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PatientHealthReactionFeed
Feed tracking is available for the object.
PatientHealthReactionHistory
History is available for tracked fields of the object.

<!-- page:986 -->

AFLS Overview                                                                                              Patient Engagement



PatientHealthReactionChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## PatientImmunization

Represents information about a patient’s immunizations. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

CareObservationId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The observation that determined the need for the immunization.
Referenced Objects
- CareObservation

ClinicalEncounterId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical encounter that the immunization was a part of.
Referenced Objects
- ClinicalEncounter

CurrentDose                           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The current dose the patient is on in the total number of doses recommended for
immunization.

DiagnosticSummaryId                   Type
reference

<!-- page:987 -->

AFLS Overview                                                                              Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The diagnostic summary that determined the need for the immunization.
Referenced Objects
- DiagnosticSummary

Dose                    Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount of vaccine that was administered.

DoseUnitId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the amount of vaccine that was administered.
Referenced Object
UnitOfMeasure

ExpirationDate          Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the immunization is expected to expire.

FacilityId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The healthcare facility where the immunization was performed.
Referenced Objects
- HealthcareFacility

HealthConditionId       Type
reference

<!-- page:988 -->

AFLS Overview                                                                                     Patient Engagement



Field                      Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The health condition that determined the need for the immunization.
Referenced Objects
- HealthCondition

ImmunizationRecommendation Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The protocol that was followed for the immunzation.

InformationSourceId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the source that provided information about the
immunization.
Referenced Objects
- CodeSetBundle

IsRecordedByVaccinator     Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the immunization record was recorded by the vaccinator.

IsSubpotent                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the vaccination dose was sub-potent.

LastReferencedDate         Type
dateTime

<!-- page:989 -->

AFLS Overview                                                                      Patient Engagement



Field                   Details


## Properties

Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

LotNumber               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The lot number of the vaccine.

Manufacturer            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the vaccine’s manufacturer.

ManufacturerAccountId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the organization that manufactured the vaccine.
Referenced Objects
Account

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the patient immunization record.

<!-- page:990 -->

AFLS Overview                                                                                   Patient Engagement




## Field                   Details

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the patient immunization record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
- Group
- User


## PatientId               Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The patient who was immunized.
Referenced Objects
- Account

ReasonCodeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the reason for the immunization.
Referenced Objects
- CodeSetBundle

RecommendedDoses        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Total number of doses recommended to achieve immunity.

<!-- page:991 -->

AFLS Overview                                                                                       Patient Engagement




## Field                    Details

RecommendingAuthority    Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The authority or organization that recommended the vaccination protocol that was followed.

RecordCreationDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the patient immunization record was created.

RouteId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the route followed in the vaccine administration.
Referenced Objects
- CodeSetBundle

SiteId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the site of the vaccine administration on the patient’s
body.
Referenced Objects
- CodeSetBundle

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The source system from where the immunization record was brought into Salesforce.

<!-- page:992 -->

AFLS Overview                                                                                    Patient Engagement




## Field                    Details

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier of the immunization record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the immunization record was last modified in its source system.

Status                   Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the vaccination.
Possible values are:
- Completed
- Entered in Error
- Not Done

StatusReasonCodeId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the reason for the status of the vaccination.
Referenced Objects
- CodeSetBundle

SubpotencyReasonCodeId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the reason for why the vaccination was sub-potent.

<!-- page:993 -->

AFLS Overview                                                                                      Patient Engagement



Field                   Details

Referenced Objects
- CodeSetBundle

TargetDiseaseCodeId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the disease that was targeted in the immunization.
Referenced Objects
- CodeSetBundle

VaccinationDate         Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time of the vaccination. If you specify a vaccination date, you can’t specifiy a
vaccination period.

VaccinationPeriod       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The period of time during which the vaccination happened. If you specify a vaccination
period, you can’t specify a vaccination date.

VaccineCodeId           Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that represents vaccine that was administered in the immunization.
Referenced Objects
- CodeSetBundle

<!-- page:994 -->

AFLS Overview                                                                                                          Patient Engagement



## Additional Information for PatientImmunization in Other Objects

In addition to creating a record using these fields, you can add more details to your PatientImmunization record by creating records in
certain other objects, and referencing your PatientImmunization record as the parent record. Here’s the list of objects you can associate
to PatientImmunization in this way, the type of information they add, and the field they use to reference PatientImmunization.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the patient ParentRecordId
immunization.

Patient Health Reaction                         Adds information about a patient’s adverse ParentId
reaction to an immunization, if any.

Patient Immunization Protocol                   Adds information about this protocols           PatientImmunizationId
followed by a provider during the
immunization. This object enables the
support of one-to-many values between
immunization and protocols applied.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
PatientImmunizationChangeEvent (API version 58.0)
Change events are available for the object.
PatientImmunizationFeed
Feed tracking is available for the object.
PatientImmunizationHistory
History is available for tracked fields of the object.
PatientImmunizationOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
PatientImmunizationShare (API version 56.0)
Sharing is available for the object.



## PatientImmunizationProtocol

Represents the protocol followed by a provider for a patient’s immunization and its related details. The protocol defines the set of
recommendations that are followed while a vaccine is administered. This object is a child of the PatientImmunization
object. This object is available in API version 56.0 and later.



## PatientImmunizationProtocol

Represents the protocol followed by a provider for a patient’s immunization and its related details. The protocol defines the set of
recommendations that are followed while a vaccine is administered. This object is a child of the PatientImmunization object.
This object is available in API version 56.0 and later.

<!-- page:995 -->

AFLS Overview                                                                                   Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                      Details

CurrentDose                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The current dose the patient is on in the total number of doses recommended for
immunization.

ImmunizationRecommendation Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the protocol that was followed for the immunization.

LastReferencedDate         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate             Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

Name                       Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the PatientImmuizationProtocol record.

<!-- page:996 -->

AFLS Overview                                                                          Patient Engagement




## Field                   Details

OwnerId                 Type
Polymorphic lookup
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the record.
Relationship Name
Owner
Refers To
- Group
- User


## PatientImmunizationId   Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The parent PatientImmunization record that the applied protocol is a part of.
Relationship Name
PatientImmunization
Refers To
PatientImmunization

RecommendedDoses        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description

RecommendingAuthority   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Total number of doses recommended to achieve immunity.

TargetDisease1CodeId    Type
Lookup
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:997 -->

AFLS Overview                                                                                Patient Engagement



Field                   Details


## Description

The system-defined code that represents a disease that was targeted in the immunization
Relationship Name
TargetDisease1Code
Refers To
CodeSetBundle

TargetDisease2CodeId    Type
Lookup
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents a disease that was targeted in the immunization
Relationship Name
TargetDisease2Code
Refers To
CodeSetBundle

TargetDisease3CodeId    Type
Lookup
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents a disease that was targeted in the immunization
This field is a relationship field.
Relationship Name
TargetDisease3Code
Refers To
CodeSetBundle

TargetDisease4CodeId    Type
Lookup
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents a disease that was targeted in the immunization
This field is a relationship field.
Relationship Name
TargetDisease4Code
Refers To
CodeSetBundle

<!-- page:998 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

TargetDisease5CodeId                    Type
Lookup
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents a disease that was targeted in the immunization
This field is a relationship field.
Relationship Name
TargetDisease5Code
Refers To
CodeSetBundle

TargetDisease6CodeId                    Type
Lookup
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents a disease that was targeted in the immunization
This field is a relationship field.
Relationship Name
TargetDisease6Code
Refers To
CodeSetBundle




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
PatientImmunizationProtocolFeed on page 1429
Feed tracking is available for the object.
PatientImmunizationProtocolHistory on page 1434
History is available for tracked fields of the object.
PatientImmunizationProtocolOwnerSharingRule (API version 57.0)
Sharing rules are available for the object.
PatientImmunizationProtocolShare (API version 57.0)
Sharing is available for the object.
PatientImmunizationProtocolChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.

<!-- page:999 -->

AFLS Overview                                                                                              Patient Engagement




## PatientMedicalProcedure

Represents detailed information about a healthcare procedure the patient has undergone, is undergoing or will undergo. This object
is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                               Details

AssertionSourceId                   Type
Polymorphic Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who made the statement about the procedure.
Example
The patient or the provider who assessed the patient’s condition.
Referenced Objects
- Account
- HealthcareProvider

ClinicalEncounterId                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The patient’s clinical encounter that the procedure is a part of.
Referenced Objects
- ClinicalEncounter

CodeId                              Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that identifies a procedure.
Example
The SNOMED code for frontal sinusectomy.

<!-- page:1000 -->

AFLS Overview                                                                                 Patient Engagement



Field                   Details

Referenced Object
CodeSetBundle

DurationTimeString      Type
String
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The duration of the procedure in string format.
Example
2 hours

EndDate                 Type
DateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time that the procedure ended or the end date of the estimated period within
which the procedure was performed.
Example
1993-11-09T18:30:00.384Z

FacilityId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The heathcare facility where the procedure is performed.
Referenced Object
HealthcareFacility

LastReferencedDate      Type
DateTime
Properties
Filter, Nillable, Sort
Description
The date and time the last time this record was referenced.

LastViewedDate          Type
DateTime

<!-- page:1001 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Properties

Filter, Nillable, Sort
Description
The date and time the last time this record was viewed.

Name                    Type
Dtring
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the record. This is automatically generated when the record is saved.
Example
PMP-7396

Outcome                 Type
Picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the outcome for the procedure.
Possible values are:
- Partially successful
- Successful
- Unsuccessful

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the patient medical procedure record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
- Group
- User

<!-- page:1002 -->

AFLS Overview                                                                                    Patient Engagement




## Field                    Details

PatientId                Type
Master-Detail Reference
Properties
Create, Filter, Group, Sort
Description
The patient on whom the procedure was performed.
Example
Charles Green
Referenced Object
Account

PerformedAgeRangeUnitId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measure for the performed at age upper and lower limit fields.
Referenced Object
UnitOfMeasure

PerformedAtAge           Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The patient’s age when the procedure was performed.

PerformedAtAgeLowerLimit Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The lower limit for the range of the patient’s age when the procedure was performed

PerformedAtAgeUnitId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measure for the PerformedAtAge field.

<!-- page:1003 -->

AFLS Overview                                                                                 Patient Engagement



Field                    Details

Referenced Object
UnitOfMeasure

PerformedAtAgeUpperLimit Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The upper limit for the range of the patient’s age when the procedure was performed

ReasonCodeId             Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the reason for the procedure.
Example
The SNOMED code for paraparesis.
Referenced Object
CodeSetBundle

ReasonReferenceId        Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The event that warranted the procedure.
Referenced Objects
- HealthCondition
- CareObservation
- PatientMedicalProcedure
- DiagnosticSummary
Example
Chronic sinusitis, a record in HealthCondition.

RecordCreatorId          Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who created the record.

<!-- page:1004 -->

AFLS Overview                                                                                   Patient Engagement



Field                    Details

Referenced Objects
- Account
- HealthcareProvider
Example
Dr. Carol Peterson

ReportId                 Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The report associated with this procedure..
Example
Charles Green’s sinusectomy report.
Referenced Object
DiagnosticSummary

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
Description
The identifier of the record in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the record was last modified in its source system.

StartDate                Type
DateTime

<!-- page:1005 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The date and time that the procedure began or the start date of the estimated period within
which the procedure was performed.
This field can be used in two ways to indicate the date and time of the procedure:
- If you want to specify a single date as either the actual or estimated date of the procedure,
enter that date and time in this field.
- If you want to specify a period in which the procedure was estimated to have happened,
use this field to specify that start of the period, and the EndDate field to specify the
end of the period.
Example
1993-11-09T21:45:00.384Z

Status                  Type
Picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the procedure.
Possible values are:
- Completed
- Entered in error
- In Progress
- Not Done
- On Hold
- Preparation
- Stopped
- Unknown

StatusReasonCodeId      Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the reason for the status.
Example
The SNOMED code for ‘Procedure not ordered’
Referenced Object
CodeSetBundle

<!-- page:1006 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

TypeId                                  Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the procedure's type.
Example
The SNOMED code for ‘Surgical procedure’
Referenced Object
CodeSetBundle




## Additional Information for PatientMedicalProcedure in Other Objects

In addition to creating a record using these fields, you can add more details to your PatientMedicalProcedure record by creating records
in certain other objects, and referencing your PatientMedicalProcedure record as the parent record. Here’s the list of objects you can
associate to PatientMedicalProcedure in this way, the type of information they add, and the field they use to reference
PatientMedicalProcedure.

Object                                          Type of Information                             Reference Field
CarePerformer                                   Specifies the person who performed the          ParentRecordId
procedure.

Identifier                                      Associates an identifier value to the           ParentRecordId
procedure.

PatientMedicalProcedureDetail                   Associates the procedure with various other PatientMedicalProcedureId
records and defines the nature of
association. For instance, if the procedure is
based on, part of, or a follow up of the
associated record, and so on.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
PatientMedicalProcedureChangeEvent (API version 58.0)
Change events are available for the object.
PatientMedicalProcedureOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
PatientMedicalProcedureShare (API version 56.0)
Sharing is available for the object.

<!-- page:1007 -->

AFLS Overview                                                                                                  Patient Engagement



## PatientMedicalProcedureDetail

Associates records from different objects to a patient medical procedure record to add more information to the procedure record.
This is a multi-object junction object. This object is available in API version 51.0 and later.



## PatientMedicalProcedureDetail

Associates records from different objects to a patient medical procedure record to add more information to the procedure record. This
is a multi-object junction object. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                Details

DetailCodeId                         Type
Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References a code set or code set bundle that adds information to a patient medical procedure
record.
Referenced Objects
- CodeSet
- CodeSetBundle


## DetailRecordId                       Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References a record that adds information to a patient medical procedure record.
Referenced Objects
- PatientMedicalProcedure
- CareObservation
- HealthCondition
- ClinicalServiceRequest
- CareRegisteredDevice

DetailType                           Type
picklist

<!-- page:1008 -->

AFLS Overview                                                                                    Patient Engagement



Field                     Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of information added to the patient medical procedure record.
Possible values are:
- Based On
- Body Site
- Complication
- Complication Detail
- Follow Up
- Part Of

LastReferencedDate        Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

LastViewedDate            Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

Name                      Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the patient medical procedure detail record.


## PatientMedicalProcedureId Type

Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The patient medical procedure to which details are being added.

<!-- page:1009 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                   Details


## Referenced Objects

- PatientMedicalProcedure




## Usage

PatientMedicalProcedureDetail records add additional information to PatientMedicalProcedure records. This information may be of the
following types, referencing the following types of records:
- Based On: Clinical service requests
- Body Site: Code sets or code set bundles
- Complication: Code sets or code set bundles
- Complication Detail: Health conditions
- Follow Up: Code sets or code set bundles
- Part Of: Patient medical procedures or clinical observations
The records providing this additional information is selected using either the DetailCodeId or DetailRecordId fields, and
then the type of information is specified using the DetailType field. This information is then connected to the patient medical
procedure record it belongs to using the PatientMedicalProcedureId field.
One record of PatientMedicalProcedureDetail can specify only one type and piece of information. If multiple detail types or detail instances
are required in the parent procedure record, multiple records of PatientMedicalProcedureDetail are required.



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PatientMedicalProcedureDetailChangeEvent on page 1426 (API Version 62.0)
Change events are available for the object.
PatientMedicalProcedureDetailFeed
Feed tracking is available for the object.
PatientMedicalProcedureDetailHistory
History is available for tracked fields of the object.



## PatientMedicationDosage

Represents dosage information for medication. This object is primarily used to add dosage information in MedicationStatement,
MedicationRequest, or MedicationDispense records. This object is available in API version 51.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1010 -->

AFLS Overview                                                                                       Patient Engagement


Fields


## Field                     Details

AdditionalInstruction     Type
textarea
Properties
Create, Nillable, Update
Description
The supplemental instructions or warnings associated with the medication for the patient.

Comments                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The comments associated with the medication dosage for the patient.

DosageDefinitionType      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies how the dosage was determined.
Possible values are:
- Calculated
- Ordered

DosageQuantityDenominator Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The denominator value for the quantity of medication per dose. This field can be used to
record a simple quantity or a quantity range.

DosageQuantityNumerator Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The numerator value for the quantity of medication per dose. This field can be used to record
a simple quantity or a quantity range.

<!-- page:1011 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

DosageQuantityType      Type
Static picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of dosage quantity recorded in DosageQuantityNumerator and
DosageQuantityDenominator.
Possible values are:
- Dose
- Dose Range

DosageRateDenominator   Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The denominator value for the rate of medication in the dosage. That is, amount of medication
per unit of time. This field can be used to record a simple rate, a rate ratio, or a rate range.

DosageRateNumerator     Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The numerator value for the rate of medication in the dosage. That is, amount of medication
per unit of time. This field can be used to record a simple rate, a rate ratio, or a rate range.

DosageRateType          Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of dosage rate recorded in DosageRateNumerator and
DosageRateDenominator.
Possible values are:
- Frequency
- Frequency Range
- Frequency Ratio

DosageRateUnitId        Type
reference

<!-- page:1012 -->

AFLS Overview                                                                                 Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the dosage rate recorded using DosageRateNumerator and
DosageRateDenominator.
Referenced Objects
- UnitOfMeasure

DosageUnitId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the dosage rate recorded using DosageQuantityNumerator and
DosageQuantityDenominator.
Referenced Objects
- UnitOfMeasure

DosePrerequisiteId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the conditions that are to be met for the dosage
to be taken.
Referenced Objects
- CodeSetBundle

IsAsNeeded              Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the medication is taken on an as-needed basis.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last referenced.

<!-- page:1013 -->

AFLS Overview                                                                                 Patient Engagement




## Field                   Details

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The date and time when the record was last viewed.

MethodId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the method of dosage administration.
Referenced Objects
- CodeSetBundle

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the PatientMedicationDosage record.


## ParentRecordId          Type

Master-detail polymorphic reference
Properties
Create, Filter, Group, Sort
Description
The MedicationStatement, MedicationRequest, or the MedicationDispense record that the
PatientMedicationDosage record belongs to.
Referenced Objects
- MedicationDispense—This value is available in API version 55.0 and later.
- MedicationStatement
- MedicationRequest
- MedicationAdministration

PatientInstruction      Type
textarea
Properties
Create, Nillable, Update

<!-- page:1014 -->

AFLS Overview                                                                                     Patient Engagement



Field                    Details


## Description

The patient or consumer instructions associated with this medication.

RouteId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the route of dosage administration.
Referenced Objects
- CodeSetBundle

Sequence                 Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The position of this medication in the sequence of medications prescribed to a patient.

SiteId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the site of dosage administration.
Referenced Objects
- CodeSetBundle

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The source system from where the dosage record was brought into Salesforce.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier of the dosage record in its source system.

<!-- page:1015 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

SourceSystemModified                    Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the dosage record was last modified in its source system.

TimingId                                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The timing information for when and how frequent the medication dosage should be taken.
Referenced Objects
- ActivityTiming




## Usage

PatientMedicationDosage records are used to add more dosage-related information to MedicationStatement, MedicationRequest, and
MedicationDispense records. The PatientMedicationDosage record is associated to the MedicationStatement, MedicationRequest, and
MedicationDispense records using the ParentRecordId field.



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
PatientMedicationDosageChangeEvent (API version 59.0)
Change events are available for the object.



## Electronic Signatures

Manage electronic signatures by using Digital Verifications. Set up signature trails for records or workflows that require users to verify
key updates. Define signature details such as the order of designated verifiers and whether designated verifiers belong to a user group
or have a specific participant role.
The Digital Verification standard objects are visible to users with the Health Cloud Advanced Therapy Orchestration permission set license
and the Health Cloud Advanced Therapy Orchestration permission set. Available in API version 60.0 and later.



## DigitalVerification

Stores information about the verification of a related record. This object is available in API version 60.0 and later.
DigitalVerificationSetup
Stores information about a digital verification setup, such as the number of signatures needed and the record action that's related
to the verification. This object is available in API version 60.0 and later.

<!-- page:1016 -->

AFLS Overview                                                                                                     Patient Engagement



## DigitalVerfSetupDetail

Stores contextual details of a digital verification setup, such as the user who does the verification, and the messages that display at
the time of verification. This object is available in API version 60.0 and later.



## DigitalVerification

Stores information about the verification of a related record. This object is available in API version 60.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

Comment                                Type
textarea
Properties
Create, Nillable, Update
Description
Stores additional comments about the verification.

DesignatedVerifierId                   Type
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
Refers To
Group, User

DigitalVerificationSetupDetailId Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The details associated with the digital verification setup record.

<!-- page:1017 -->

AFLS Overview                                                                                        Patient Engagement




## Field                   Details

This field is a relationship field.
Relationship Name
DigitalVerificationSetupDetail
Relationship Type
Lookup
Refers To
DigitalVerfSetupDetail

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed a record indirectly; for example, through
a list view or related record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record. If this value is null, it’s possible
that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the digital verification record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
ID of the owner of this object.
This field is a polymorphic relationship field.
Relationship Name
Owner

<!-- page:1018 -->

AFLS Overview                                                                             Patient Engagement



Field                   Details

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

<!-- page:1019 -->

AFLS Overview                                                                                   Patient Engagement




## Field                      Details

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

PreVerificationMessage     Type
textarea
Properties
Create, Nillable, Update
Description
The message that is displayed before a verification is performed.

VerificationDateTime       Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the verification of the related record was done.

VerificationRequestDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the verification was requested.

VerificationSite           Type
textarea

<!-- page:1020 -->

AFLS Overview                                                                                    Patient Engagement



Field                      Details


## Properties

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
This field is a polymorphic relationship field.
Relationship Name
VerifiedBy
Relationship Type
Lookup
Refers To
User

<!-- page:1021 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

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



## DigitalVerificationSetup

Stores information about a digital verification setup, such as the number of signatures needed and the record action that's related to
the verification. This object is available in API version 60.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

LastReferencedDate                      Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:1022 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details


## Description

The timestamp when the current user last viewed a record indirectly; for example, through
a list view or related record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record. If this value is null, it’s possible
that this record was referenced (LastReferencedDate) and not viewed.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the digital verification setup record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

RecordActionType        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the record action applicable for the digital verification setup, such as Create and
Edit.
Possible values are:

<!-- page:1023 -->

AFLS Overview                                                                                         Patient Engagement



Field                    Details
- Create
- Edit

ReferenceObjectApiName   Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The parent object for which the digital verification setup is applicable.
Possible values are:
- CarePgmEnrolleeWorkOrder
- CarePgmEnrolleeWkOrdStep
- The API name of any custom object created in the org.

VerificationProcessType Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the process type of the verification, such as sequential or parallel.
Possible values are:
- Parallel
- Sequential

VerificationType         Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the process type of the digital verification setup.
Possible values are:
- DualSignature
- FiveSignatures
- FourSignatures
- NoSignature
- NotApplicable
- SingleSignature
- ThreeSignatures

<!-- page:1024 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
DigitalVerificationSetupHistory on page 1434
History is available for tracked fields of the object.
DigitalVerificationSetupOwnerSharingRule on page 1436
Sharing rules are available for the object.
DigitalVerificationSetupShare on page 1438
Sharing is available for the object.



## DigitalVerfSetupDetail

Stores contextual details of a digital verification setup, such as the user who does the verification, and the messages that display at the
time of verification. This object is available in API version 60.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

DesignatedVerifierId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The role, user or user group associated with the digital verification setup detail.
This field is a polymorphic relationship field.
Relationship Name
DesignatedVerifier
Relationship Type
Lookup
Refers To
Group, ParticipantRole

DigitalVerificationSetupId Type
reference
Properties
Create, Filter, Group, Sort
Description
The parent digital verification setup associated with the digital verification setup detail.

<!-- page:1025 -->

AFLS Overview                                                                                         Patient Engagement




## Field                    Details

This field is a relationship field.
Relationship Name
DigitalVerificationSetup
Relationship Type
Lookup
Refers To
DigitalVerificationSetup

LastReferencedDate       Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed a record indirectly; for example, through
a list view or related record.

LastViewedDate           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record. If this value is null, it’s possible
that this record was referenced (LastReferencedDate) and not viewed.

Name                     Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the digital verification setup detail record.

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

<!-- page:1026 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Description

The message that is displayed before a verification is performed.

VerifierRank                            Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the rank of the verifier that provides the verification.
Possible values are:
- FifthVerifier
- FirstVerifier
- FourthVerifier
- SecondVerifier
- ThirdVerifier




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
DigitalVerfSetupDetailHistory on page 1434
History is available for tracked fields of the object.



## Financial Assistance Program

The financial assistance program data model helps life sciences organizations implement several

**EDITIONS**
financial assistance programs for eligible patients to receive assistance with their out of pocket
medical expenses.
Available in: Lightning
The financial assistance program objects are available to users with Health Cloud Starter (for Life           Experience
Sciences Cloud) or Health Cloud Foundation (for Health Cloud) and the Manage Financial Assistance
Available in: Enterprise and
Program permission set. The objects are available in API version 61.0 and later.
Unlimited Editions with Life
Sciences or Health Cloud

<!-- page:1027 -->

AFLS Overview                                                                                                       Patient Engagement




For more details and a larger image, visit the Data Model Gallery.



## Applicant

Specify the care program enrollee represented as an applicant. This object is available in API version 59.0 and later.
Benefit
Represents information about benefits associated with the financial assistance program. Benefits are mapped to the members based
on the program rules. This object is available in API version 51.0 and later.
BenefitType
Represents information about the type of benefits, such as Financial Assistance Program, available to the care program enrollee. This
object is available in API version 51.0 and later.
ProgramEnrollment
Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.
CareProgramAssistance
Represents a junction between Care Program and Program objects. This object is available in API version 61.0 and later.
ProgramEnrlEligibilityCrit
Represents a junction between Program and Enrollment Eligibility Criteria objects. This object is available in API version 61.0 and
later.
ProgramRecommendationRule
Represents the eligibility criteria and recommendation for a program. This object is available in API version 61.0 and later.

<!-- page:1028 -->

AFLS Overview                                                                                                   Patient Engagement




## Applicant

Specify the care program enrollee represented as an applicant. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

AccountId                             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account ID associated with the applicant.
This field is a relationship field.
Relationship Name
Account
Relationship Type
Lookup
Refers To
Account

ApplicationFormId                     Type
reference
Properties
Create, Filter, Group, Sort
Description
The application that's submitted for a product request.
This field is a relationship field.
Relationship Name
ApplicationForm
Relationship Type
Lookup
Refers To
ApplicationForm

BirthDate                             Type
date

<!-- page:1029 -->

AFLS Overview                                                            Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The date of birth of the applicant.

CareProgramEnrolleeId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
This field is a relationship field.

ContactId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The related contact ID associated with the account.
This field is a relationship field.
Relationship Name
Contact
Relationship Type
Lookup
Refers To
Contact

Email                   Type
email
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The email address of the applicant.

FirstName               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The first name of the applicant.

<!-- page:1030 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

LastName                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The last name of the applicant.

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

MiddleName              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The middle name of the applicant.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
A unique number that represents the applicant.

PartyProfileId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1031 -->

AFLS Overview                                                                                                            Patient Engagement



Field                                   Details


## Description

The party profile requesting a product with the application form.
This field is a relationship field.
Relationship Name
PartyProfile
Relationship Type
Lookup
Refers To
PartyProfile

Phone                                   Type
phone
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The applicant's phone number.

Suffix                                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The suffix of the applicant.

UniqueReferenceNumber                   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The customer reference number of the applicant.




## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API version as this object. Otherwise,
they’re available in the specified API version and later.
ApplicantChangeEvent on page 1426
Change events are available for the object.
ApplicantFeed on page 1429
Feed tracking is available for the object.
ApplicantHistory on page 1434
History is available for tracked fields of the object.

<!-- page:1032 -->

AFLS Overview                                                                                               Patient Engagement




## ApplicantOwnerSharingRule on page 1436

Sharing rules are available for the object.
ApplicantShare on page 1438
Sharing is available for the object.



## Benefit

Represents information about benefits associated with the financial assistance program. Benefits are mapped to the members based
on the program rules. This object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

BenefitTypeId                            Type
reference
Properties
Create, Filter, Group, Sort
Description
ID of the benefit type.
This field is a relationship field.
Relationship Name
BenefitType
Relationship Type
Lookup
Refers To
BenefitType

BudgetAmountUsed                         Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The budget amount used by an employee after enrolling in a corresponding program.

EndDateTime                              Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1033 -->

AFLS Overview                                                                                   Patient Engagement



Field                    Details


## Description

The end date of the benefit.

EnrolleeAmountLimit      Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount limit allocated to enrollee for a corresponding program.

EnrolleeLimitFrequency   Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The assigned frequency for an enrollee limit for a corresponding program.
Possible values are:
- Monthly
- Monthly, Yearly , Annual, Weekly, Quarterly
- Yearly

EnrolleeTrxnAmountLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The enrollee transaction amount limit for a corresponding program.

IsActive                 Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Required. Indicates whether the program benefit is active.

MaxBenefitAmount         Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The maximum amount that can be disbursed for a period.

<!-- page:1034 -->

AFLS Overview                                                                                                  Patient Engagement




## Field                                Details

Name                                 Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the benefit.

PayoutFrequency                      Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Possible values are:
- Annual
- BiWeekly - Bi-Weekly
- Monthly
- OnDemand - On-Demand
- Quaterly
- Weekly

ProgramId                            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier of the program that's associated with the benefit.
This field is a relationship field.




## BenefitType

Represents information about the type of benefits, such as Financial Assistance Program, available to the care program enrollee. This
object is available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1035 -->

AFLS Overview                                                                                      Patient Engagement


Fields


## Field                   Details

Benefit Type Name       Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
Required. The name of the benefit type.

Category                Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The category of the benefit type. Picklist values aren't provided for this field and must be
added based on the requirements of the organization.

Description             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of benefit type.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

ProcessType             Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update

<!-- page:1036 -->

AFLS Overview                                                                                                            Patient Engagement



Field                                    Details


## Description

Required. The process type associated with the benefit.
The possible value is:
- Financial Assistance Program
This value is available in API version 61.0 and later.

Type                                     Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The process type associated with the benefit.
Possible values are:
- Monetary
- Service
- Goods

UnitofMeasureId                          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measure for the benefit.
This is a polymorphic relationship field.
Relationship Type
UnitofMeasure
Refers To
UnitofMeasure




## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise,
they’re available in the specified API version and later.
BenefitTypeOwnerSharingRule
Sharing rules are available for the object.
BenefitTypeShare
Sharing is available for the object.

<!-- page:1037 -->

AFLS Overview                                                                                                  Patient Engagement




## ProgramEnrollment

Represents details of enrollment for benefits in a program. This object is available in API version 57.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

AccountId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the account that’s associated with an organization enrolled in the program.
This field is a relationship field.
Relationship Name
Account
Relationship Type
Lookup
Refers To
Account

ApplicationDate                        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date when the enrollee applied to the program.

CareProgramEnrolleeId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program enrollee associated with the program enrollment.
This field is a relationship field.

<!-- page:1038 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details

Relationship Name
CareProgramEnrollee
Refers To
CareProgramEnrollee

ContactId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the contact that’s associated with an individual enrolled in the program.
This field is a relationship field.
Relationship Name
Contact
Relationship Type
Lookup
Refers To
Contact

EndDate                 Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The end date of the enrollment in the program. This field is accessible if you enabled Data
Protection and Privacy in Setup.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the enrollment for the participant in the program is active (true) or not
(false).
The default value is false.
This field is accessible if you enabled Data Protection and Privacy in Setup.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update

<!-- page:1039 -->

AFLS Overview                                                                                                            Patient Engagement



Field                                    Details


## Description

The name of the program enrollment record.

ProgramId                                Type
reference
Properties
Create, Filter, Group, Sort
Description
The identifier of the program that's associated with the enrollee.
This field is a relationship field.
Relationship Name
Program
Relationship Type
Master-Detail
Refers To
Program

StartDate                                Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The start date of the enrollment in the program. This field is accessible if you enabled Data
Protection and Privacy in Setup.

Status                                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The enrollment status of the enrollee for the program.
This field is accessible if you enabled Data Protection and Privacy in Setup.




## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise,
they’re available in the specified API version and later.
ProgramEnrollmentFeed
Feed tracking is available for the object.
ProgramEnrollmentHistory
History is available for tracked fields of the object.

<!-- page:1040 -->

AFLS Overview                                                                                                    Patient Engagement




## ProgramEnrollmentOwnerSharingRule

Sharing rules are available for the object.
ProgramEnrollmentShare
Sharing is available for the object.



## CareProgramAssistance

Represents a junction between Care Program and Program objects. This object is available in API version 61.0 and later.



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
The care program associated with the care program assistance.
This field is a relationship field.
Relationship Name
CareProgram
Relationship Type
Master-detail
Refers To
CareProgram (the master object)

CareProgramProductId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program product associated with the care program assistance.
This field is a relationship field.
Relationship Name
CareProgramProduct
Refers To
CareProgramProduct

<!-- page:1041 -->

AFLS Overview                                                                                                     Patient Engagement




## Field                                 Details

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
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                  Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the care program assistance.

ProgramId                             Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The program associated with the care program assistance.
This field is a relationship field.
Relationship Name
Program
Refers To
Program




## ProgramEnrlEligibilityCrit

Represents a junction between Program and Enrollment Eligibility Criteria objects. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1042 -->

AFLS Overview                                                                                          Patient Engagement


Special Access Rules

Fields


## Field                      Details

EnrollmentEligibilityCritId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The enrollment eligibility criteria associated with the program enrollment eligibility criteria.
This field is a relationship field.
Relationship Name
EnrollmentEligibilityCrit
Refers To
EnrollmentEligibilityCriteria

IsRequired                 Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether an enrollment eligibility criterion is mandatory (true) or optional (false).
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

Name                       Type
string

<!-- page:1043 -->

AFLS Overview                                                                                                     Patient Engagement



Field                                 Details


## Properties

Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the program enrollment eligibility criteria.

ProgramId                             Type
reference
Properties
Create, Filter, Group, Sort
Description
The program associated with the program enrollment eligibility criteria.
This field is a relationship field.
Relationship Name
Program
Relationship Type
Master-detail
Refers To
Program (the master object)

Status                                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the program enrollment eligibility criteria.

Type                                  Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of enrollment eligibility criteria.




## ProgramRecommendationRule

Represents the eligibility criteria and recommendation for a program. This object is available in API version 61.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1044 -->

AFLS Overview                                                                                        Patient Engagement


Fields


## Field                    Details

Country                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The country where the program is eligible for implementation.

HasActiveCommercialIns   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this program has an active commercial insurance.
The default value is false.

IsInclusionRule          Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether it's an inclusion rule (true) or an exclusion rule (false).
The default value is false.

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

MaximumAge               Type
int

<!-- page:1045 -->

AFLS Overview                                                                             Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The maximum age for enrolling in the program.

MinimumAge              Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The minimum age for enrolling in the program.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the program recommendation rule.

ProgramId               Type
reference
Properties
Create, Filter, Group, Sort
Description
The program associated with the program recommendation rule.
This field is a relationship field.
Relationship Name
Program
Relationship Type
Master-detail
Refers To
Program (the master object)

ProgramType             Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
The type of program associated with the program recommendation rule.
Possible values are:
- Copay

<!-- page:1046 -->

AFLS Overview                                                                                                  Patient Engagement




## Field                                  Details

- Patient Assistance Program
- Quick Start

RecommendedProgramPriority Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The recommended priority of the program.

RuleType                               Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Indicates the type of rule.
Possible values are:
- Eligibility
- Recommendation




## Health Insurance

The health insurance data model provides objects for managing the ways care is paid for. It represents information about participants
such as employment, insurance coverage, and dependents. You can manage details of the benefits provided by plans to members and
treatment preauthorization requests made by members or providers.
The health insurance data model includes standard objects and record types. You need the Health Cloud Starter permission set to create,
edit, and delete records in the data model.



## CarePreauth

Represents the details of preauthorizations for care under a member’s plan.
CarePreauthItem
Represents the details of items included in a preauthorization for care under a member’s plan.
CoverageBenefit
Represents the benefits provided to a covered member by a purchaser’s plan.
CoverageBenefitItem
Specific service covered by the insurance plan. This object is available in API version 53.0 and later.
Member
A member is a person who is the primary subscriber, a dependent, or anyone else who is covered under the insurance plan.
MemberPlan
Represents details about the insurance coverage for a member or subscriber.

<!-- page:1047 -->

AFLS Overview                                                                                                    Patient Engagement



## Payer

A payer is a health insurance company that helps cover the cost of member care. payer is represented by records on the Account
object.
PlanBenefit
Represents the standard benefits available under a plan that the purchaser offers to their members.
PlanBenefitItem
Represents the details of a benefit available under a purchaser’s plan that is offered to their members.
Purchaser
A purchaser is the organization (an employer) that is providing medical insurance plans for their members (employees).
Purchaser Group
A purchaser group is a subset of the purchaser. For example, your company may have individual employee groups in different regions
of the country. Each purchaser group can have separate options for insurance plans.
Purchaser Group Member Association
An association that records the members who belong to a purchaser group. This association is represented by records on the
AccountContactRelation object.
PurchaserPlan
Represents the payer plan that a purchaser makes available to its members and members’ dependents.
PurchaserPlanAssn
Represents a junction object that associates the purchaser to the plans they offer to members.
Purchaser Payer Association
An association that records the purchasers who purchase plans from payers. This association is represented by records on the
AccountAccountRelation object.



## CarePreauth

Represents the details of preauthorizations for care under a member’s plan.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                        Details

EffectiveFrom                                     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this preauthorization is effective.

<!-- page:1048 -->

AFLS Overview                                                                           Patient Engagement




## Field Name              Details

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date after which this preauthorization is no longer effective.

LastReferencedDate      Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate          Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

MemberPlanId            Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the member plan for which this preauthorization is being provided.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The name of this preauthorization.

Notes                   Type
textarea
Properties
Create, Nillable, Update

<!-- page:1049 -->

AFLS Overview                                                                           Patient Engagement



Field Name               Details


## Description

Notes about this preauthorization.

PayerId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the payer covering the cost of this treatment.

PreauthIdentifier        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
An identifier provided by the insurance company for preauthorization of a service.

ReferringPhysician       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the doctor who referred the member for this treatment.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this preauthorization record was obtained from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this preauthorization record on its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1050 -->

AFLS Overview                                                                                                       Patient Engagement



Field Name                                          Details


## Description

The date on which this preauthorization was last changed on its source system.

Status                                              Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of this preauthorization record. The default the picklist values are:
- Active
- Inactive




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CarePreauthChangeEvent (API version 60.0)
Change events are available for the object.
CarePreauthFeed
Feed tracking is available for the object.
CarePreauthHistory
History is available for tracked fields of the object.
CarePreauthOwnerSharingRule
Sharing rules are available for the object.
CarePreauthShare
Sharing is available for the object.



## CarePreauthItem

Represents the details of items included in a preauthorization for care under a member’s plan.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                        Details

CarePreauthId                     Type
reference

<!-- page:1051 -->

AFLS Overview                                                                                             Patient Engagement



Field Name              Details


## Properties

Create, Filter, Group, Sort
Description
The ID of the care preauthorization this item details.

EndingServiceCode       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ending service code for the category of care being provided.

LastReferencedDate      Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s possible
that this record was referenced (LastReferencedDate) and not viewed.

Laterality              Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The side of the body receiving care.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of this preauthorized care item.

<!-- page:1052 -->

AFLS Overview                                                                               Patient Engagement




## Field Name              Details

Notes                   Type
textarea
Properties
Create, Nillable, Update
Description
Notes about this preauthorized care item.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PreauthitemSequence Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Sequence of this item among the preauthorized care items.

Quantity                Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Quantity being preauthorized.

SourceSystem            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this preauthorization record was obtained from.

SourceSystemIdentifier Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this preauthorization record on its source system.

<!-- page:1053 -->

AFLS Overview                                                                                                       Patient Engagement




## Field Name                        Details

SourceSystemModified Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this preauthorization was last changed on its source system.

StartingServiceCode Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The starting service code for the category of care being provided.

Unit                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Units by which the preauthorized quantity is measured.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CarePreauthItemChangeEvent (API version 60.0)
Change events are available for the object.
CarePreauthItemFeed
Feed tracking is available for the object.
CarePreauthItemHistory
History is available for tracked fields of the object.
CarePreauthItemOwnerSharingRule
Sharing rules are available for the object.
CarePreauthItemShare
Sharing is available for the object.



## CoverageBenefit

Represents the benefits provided to a covered member by a purchaser’s plan.

<!-- page:1054 -->

AFLS Overview                                                                                                    Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                        Details

BenefitNotes                                      Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the benefits available to the member under this
plan’s coverage.

BenefitPeriodEndDate                              Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Last day of the coverage benefit period.

BenefitPeriodStartDate                            Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
First day of the coverage benefit period.

CareBenefitVerifyRequestId                        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care benefit verify request associated with the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
CareBenefitVerifyRequest
Relationship Type
Lookup

<!-- page:1055 -->

AFLS Overview                                                                          Patient Engagement



Field Name              Details


## Refers To

CareBenefitVerifyRequest

CoinsuranceNotes        Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the contribution the member makes towards
treatment.

CopayNotes              Type
textarea
Properties
Create, Nillable, Update
Description
Additional information on the copayment amounts members contributes.

CoverageType            Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
General category of service covered.
Possible values are:
- Dental
- Medical
- Vision
- Home Health - This picklist value is available for the Home Health feature
in API version 59.0 and later.
- Pharmacy - This picklist value is available for the Pharmacy Benefits
Verification feature in API version 63.0 and later. See Activate Picklist Value
for Coverage Benefit to activate this value.

DeductibleNotes         Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the member’s deductibles under this plan.

<!-- page:1056 -->

AFLS Overview                                                                                  Patient Engagement




## Field Name                         Details

Disclaimer                         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Overall plan benefit disclaimers.

EmergencyDepartmentCopay           Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards emergency treatment.

FamilyInNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by the health plan’s
preferred providers for all family members.

FamilyInNetworkDeductibleLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member is required to pay for health care provided by the health
plan’s preferred providers for all family members. When this amount is reached,
the plan starts to contribute towards treatment.

FamilyInNetworkDeductibleRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount the member still has to pay for health care provided by
the health plan’s preferred providers for all family members. When this amount
is reached, the plan starts to contribute towards treatment.

FamilyInNetworkOutofPocketApplied Type
currency

<!-- page:1057 -->

AFLS Overview                                                                                    Patient Engagement



Field Name                          Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The amount of the member has paid in this coverage year for health care provided
by the health plan’s preferred providers for all family members. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FamilyInNetworkOutofPocketLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most the member pays during the coverage year for health care provided
by the health plan’s preferred providers for all family members. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FamilyInNetworkOutofPocketRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount for the member to pay during this coverage year for care
provided by the plan’s preferred providers for all family members. When this
amount is reached, the plan starts to contribute towards treatment. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FamilyOutofNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by non-preferred
providers for all family members.

FamilyOutofNetworkDeductibleLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The total amount the member has to pay for health care provided by
non-preferred providers for all family members. When this amount is reached,
the plan starts to contribute towards treatment.

<!-- page:1058 -->

AFLS Overview                                                                                         Patient Engagement




## Field Name                            Details

FamilyOutofNetworkDeductibleRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member still has to pay for health care provided by non-preferred
providers for all family members. When this amount is reached, the plan starts
to contribute towards treatment.

FamilyOutofNetworkOutofPocketApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount of the member has paid in this coverage year for health care provided
by non-preferred providers for all family members. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

FamilyOutofNetworkOutofPocketLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most the member pays during the coverage year for health care provided
by non-preferred providers for all family members. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

FamilyOutofNetworkOutofPocketRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount for the member to pay during this coverage period for
health care provided by non-preferred providers for all family members. When
this amount is reached, the plan starts to contribute towards treatment. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FinalCoverageStatusCodeId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1059 -->

AFLS Overview                                                                                       Patient Engagement



Field Name                          Details


## Description

The code that's determined after considering the restrictions and other status
types that apply to the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
FinalCoverageStatusCode
Relationship Type
Lookup
Refers To
CodeSet

FrequencyType                       Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The frequency type of the coverage benefit associated with the home healthcare
visit.
Possible values are:
- Daily
- Fortnightly
- Monthly
- Quarterly
- Weekly
- Yearly
This field is available in API version 66.0 and later with the Home Health add-on
license.

IndividualInNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by the health plan’s
preferred providers to the most costly family member.

IndividualInNetworkDeductibleLimit Type
currency

<!-- page:1060 -->

AFLS Overview                                                                                       Patient Engagement



Field Name                             Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay for health care provided by the plan’s
preferred providers for any family member. When this amount is reached, the
plan starts to contribute towards treatment.

IndividualInNetworkDeductibleRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount the member has to pay for care during the coverage year
provided by the plan’s preferred providers for any family member. When this
amount is reached, the plan starts to contribute towards treatment.

IndividualInNetworkOutofPocketApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount of the member has paid in this coverage year for health care provided
by the plan’s preferred providers to any one family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualInNetworkOutofPocketLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most the member pays during the coverage year for health care provided
by the health plan’s preferred providers for any family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualInNetworkOutofPocketRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount remaining for the member to pay during the coverage year for care
provided by the plan’s preferred providers for any family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

<!-- page:1061 -->

AFLS Overview                                                                                      Patient Engagement




## Field Name                              Details

IndividualOutofNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by non-preferred
providers to the most costly family member.

IndividualOutofNetworkDeductibleLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay for health care provided by non-preferred
providers to any one family member. When this amount is reached, the plan
starts to contribute towards treatment.

IndividualOutofNetworkDeductibleRemain Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount the member has to pay for health care during the coverage
year provided by non-preferred providers to any family member. When this
amount is reached, the plan starts to contribute towards treatment.

IndividualOutofNetworkOutofPocketApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount of the member has paid in this coverage period for health care
provided by non-preferred providers to any family members. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualOutofNetworkOutofPocketLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1062 -->

AFLS Overview                                                                                        Patient Engagement



Field Name                             Details


## Description

The most the member pays during the coverage year for health care provided
by non-preferred providers to any family member. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

IndividualOutofNetworkOutofPocketRemain Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount remaining for the member to pay during the coverage year for health
care provided by non-preferred providers to any family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

InNetworkCoinsuranceAmount             Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards treatment undertaken by the
health plan’s preferred providers.

InNetworkCoinsurancePercentage Type
percent
Properties
Create, Filter, Nillable, Sort, Update
Description
The percentage of treatment cost the member pays for treatment undertaken
by the health plan’s preferred providers.

InNetworkLifetimeMaximum               Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay during lifetime coverage under this plan
after which the provider covers all costs for treatment provided by its preferred
providers. It includes deductibles, copayments, and coinsurance, but excludes
premiums.

IsActive                               Type
boolean

<!-- page:1063 -->

AFLS Overview                                                                         Patient Engagement



Field Name              Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the coverage benefit is currently in force.
The default value is 'false'.

LastReferencedDate      Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate          Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

LifetimeMaximumNotes    Type
textarea
Properties
Create, Nillable, Update
Description
Additional information on the lifetime maximum payments the member Will be
expected to make.

MemberId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the member receiving these benefits.

MemberPlanId            Type
reference
Properties
Create, Filter, Group, Sort

<!-- page:1064 -->

AFLS Overview                                                                                  Patient Engagement



Field Name                       Details


## Description

The ID of the member plan receiving these benefits.

Name                             Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of these coverage benefits.

OutcomeStatusCodeId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The outcome code set associated with the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
OutcomeStatusCode
Relationship Type
Lookup
Refers To
CodeSet

OutofNetworkCoinsuranceAmount    Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards treatment undertaken by
non-preferred providers.

OutofNetworkCoinsurancPercentage Type
percent
Properties
Create, Filter, Nillable, Sort, Update
Description
The percentage of treatment cost the member pays for treatment undertaken
by non-preferred providers.

<!-- page:1065 -->

AFLS Overview                                                                                 Patient Engagement




## Field Name                    Details

OutofNetworkLifetimeMaximum   Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay during lifetime coverage under this plan
after which the plan provider covers all costs for treatment provided by its
non-preferred providers. It includes deductibles, copayments, and coinsurance,
but excludes premiums.

OutofPocketNotes              Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the out-of-pocket payment the member makes.

OwnerId                       Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PharmaCopayAmount             Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards the pharma products.
This field is available in API version 62.0 and later with the Manage Financial
Assistance Program permission set.


PrimaryCareCopay              Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards primary care treatment.

<!-- page:1066 -->

AFLS Overview                                                                          Patient Engagement




## Field Name               Details

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this benefits record was obtained from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this benefits record on its source system.

SourceSystemModified     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which these benefits were last changed on their source system.

SpecialistCopay          Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards specialist consultations.

StatusCodeId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status code set associated with the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
StatusCode
Relationship Type
Lookup

<!-- page:1067 -->

AFLS Overview                                                                                                            Patient Engagement



Field Name                                           Details

Refers To
CodeSet

TotalBenefitAmount                                   Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The total amount of the coverage benefit associated with the home healthcare
visit.
This field is available in API version 66.0 and later with the Home Health add-on
license.

UrgentCareCopay                                      Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards urgent care.

VerificationDate                                     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Date on which the benefit was verified.




## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise,
they’re available in the specified API version and later.
CoverageBenefitChangeEvent (API version 59.0)
Change events are available for the object.
CoverageBenefitFeed
Feed tracking is available for the object.
CoverageBenefitHistory
History is available for tracked fields of the object.
CoverageBenefitOwnerSharingRule
Sharing rules are available for the object.
CoverageBenefitShare
Sharing is available for the object.

<!-- page:1068 -->

AFLS Overview                                                                                    Patient Engagement




## CoverageBenefitItem

Specific service covered by the insurance plan. This object is available in API version 53.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

BenefitCategory                        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the category this benefit is in.

CodeSetServiceTypeId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of a Code Set Service Type in the Code Set object.
This is a relationship field.
Relationship Name
CodeSetServiceType
Relationship Type
Lookup
Refers To
CodeSet

CoverageBenefitId                      Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the covered benefit this item belongs to.
This is a relationship field.
Relationship Name
CoverageBenefit

<!-- page:1069 -->

AFLS Overview                                                                                      Patient Engagement



Field                   Details

Relationship Type
Lookup
Refers To
CoverageBenefit

CoverageLevel           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Description of the level of coverage provided by this item.

DoesDeductibleApply     Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the benefit item requires a prior expenditure by the patient.
The default value is 'false'.

FrequencyType           Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The frequency type of the coverage benefit item associated with the home healthcare visit.
Possible values are:
- Daily
- Fortnightly
- Monthly
- Quarterly
- Weekly
- Yearly
This field is available in API version 66.0 and later with the Home Health add-on license.

InNetworkCoverage       Type
textarea
Properties
Create, Nillable, Update

<!-- page:1070 -->

AFLS Overview                                                                                      Patient Engagement



Field                      Details


## Description

Description of the in network coverage provided by this item.

IsActive                   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the benefit item is currently available.
The default value is 'false'.

IsInPlanNetwork            Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the benefit is available only in-network (true) or both in-network and
out-of-network (false).
The default value is 'false'.

IsPreauthorizationRequired Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the service must be approved before use.
The default value is 'false'.

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

<!-- page:1071 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

MemberId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the member receiving this benefit item.
This is a relationship field.
Relationship Name
Member
Relationship Type
Lookup
Refers To
Account

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
Name of this coverage benefit item.

Notes                   Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about this coverage benefit item.

OutofNetworkCoverage    Type
textarea
Properties
Create, Nillable, Update
Description
Description of the coverage for non-preferred providers.

OwnerId                 Type
reference

<!-- page:1072 -->

AFLS Overview                                                                              Patient Engagement



Field                    Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ServiceType              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of service this plan benefit item provides.

ServiceTypeCode          Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code for the type of service this plan benefit item provides.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this coverage benefits item record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier of the CoverageBenefitItem in its source system.

<!-- page:1073 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

SourceSystemModified                    Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The ID of this coverage benefits item record on its source system.

SourceSystemModified                    Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this coverage benefits item was last changed on the source system.

TimePeriod                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A description of the period this plan benefit item covers.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CoverageBenefitItemChangeEvent (API version 59.0)
Change events are available for the object.



## Member

A member is a person who is the primary subscriber, a dependent, or anyone else who is covered under the insurance plan.
Members are represented with an Account object record of record type Person Account.



## MemberPlan

Represents details about the insurance coverage for a member or subscriber.

Note: The primary member on the plan is called the subscriber. The other members are dependents.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()

<!-- page:1074 -->

AFLS Overview                                                                          Patient Engagement


Fields


## Field Name              Details

Affiliation             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
An affiliation to a government service, such as the army or navy.

EffectiveFrom           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this member plan is effective.

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this member plan ceases to be effective.

ExternalIDentifier      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier used to identify the record outside the Salesforce org.

GroupNumber             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The group number or policy number of the primary member.

IssuerNumber            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1075 -->

AFLS Overview                                                                         Patient Engagement



Field Name              Details


## Description

Reference number for the issuer of the plan.

LastReferencedDate      Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastVerification        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this plan was last verified.

LastViewedDate          Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

MemberId                Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the member’s record.

MemberNumber            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The member’s reference number for this plan.

<!-- page:1076 -->

AFLS Overview                                                                          Patient Engagement




## Field Name              Details

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The name by which the member knows this plan.

Notes                   Type
textarea
Properties
Create, Nillable, Update
Description
Notes about this member plan.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PayerId                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the payer’s Account object record.

PayerNetworkId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The payer insurance plan or network that is associated with the patient. This field
is a relationship field.
Relationship Name
PayerNetwork
Relationship Type
Lookup
Refers To
HealthcarePayerNetwork

<!-- page:1077 -->

AFLS Overview                                                                            Patient Engagement




## Field Name                 Details

PlanId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lookup of the Purchaser Plan ID.

PrimaryCarePhysician       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the physician providing primary care under this plan.

PrimarySecondaryTertiary   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Whether this plan is the primary, secondary, or tertiary plan.

RelationshipToSubscriber   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The relationship of this member to the plan’s subscriber. Valid options are:
- Self
- Spouse
- Child
- Unknown
- Other Relationship

SourceSystem               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this plan record came from.

<!-- page:1078 -->

AFLS Overview                                                                            Patient Engagement




## Field Name               Details

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this plan record on its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this plan record was last changed on the source system.

Status                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether the plan is active.

SubscriberId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the subscriber’s record.

VerificationStatus       Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of the plan’s verification. Valid options are:
- Active - Verified
- Rejected
- Not Checked
- Unknown
- Inactive

<!-- page:1079 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MemberPlanChangeEvent (API version 57.0)
Change events are available for the object.
MemberPlanFeed
Feed tracking is available for the object.
MemberPlanHistory
History is available for tracked fields of the object.
MemberPlanOwnerSharingRule
Sharing rules are available for the object.
MemberPlanShare
Sharing is available for the object.



## Payer

A payer is a health insurance company that helps cover the cost of member care. payer is represented by records on the Account object.
To learn more, see Account.



## PlanBenefit

Represents the standard benefits available under a plan that the purchaser offers to their members.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                          Details

BenefitNotes                                        Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the benefits available to members under this plan’s
coverage.

CoinsuranceNotes                                    Type
textarea
Properties
Create, Nillable, Update

<!-- page:1080 -->

AFLS Overview                                                                   Patient Engagement



Field Name              Details


## Description

Information about the contribution a member makes towards treatment.

CopayNotes              Type
textarea
Properties
Create, Nillable, Update
Description
Additional information on the copayment amounts that members contribute.

DeductibleNotes         Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about a member’s deductibles.

DocumentLocation        Type
url
Properties
Create, Nillable, Update
Description
Hyperlink to internal or external resources.

EffectiveDate           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which these benefits are communicated to plan members.

EffectiveFrom           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which these benefits become effective.

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1081 -->

AFLS Overview                                                                                  Patient Engagement



Field Name                      Details


## Description

The date on which these benefits ceased to be effective.

EmergencyDepartmentCopay        Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
Patient's portion of payment for using emergency department services.

FamilyInNetworkDeductible       Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member pays for health care provided by the health plan’s preferred
providers for all family members. When this amount is reached, the plan starts
to contribute towards treatment.

FamilyInNetworkOutofPocket      Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most a member pays during a coverage year for health care provided by the
health plan’s preferred providers for all family members. It includes deductibles,
copayments, and coinsurance, but is in addition to premiums.

FamilyOutofNetworkDeductible    Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member pay for health care provided by non-preferred providers
for all family members before this plan starts to contribute towards treatment.

FamilyOutofNetworkOutofPocket   Type
currency
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1082 -->

AFLS Overview                                                                                    Patient Engagement



Field Name                       Details


## Description

The most a member pays during a coverage year for health care provided by
non-preferred providers for all family members. It includes deductibles,
copayments, and coinsurance, but is in addition to premiums.

FrequencyType                    Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The frequency type of the plan benefit associated with the home healthcare visit.
Possible values are:
- Daily
- Fortnightly
- Monthly
- Quarterly
- Weekly
- Yearly
This field is available in API version 66.0 and later with the Home Health add-on
license.

IndividualInNetworkDeductible    Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member pays for health care provided by the health plan’s preferred
providers to any one family member. When this amount is reached, the plan
starts to contribute towards treatment.

IndividualInNetworkOutofPocket Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most a member pays during a coverage year for health care provided by the
health plan’s preferred providers for any one family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualOutofNetworkDeductible Type
currency

<!-- page:1083 -->

AFLS Overview                                                                                   Patient Engagement



Field Name                        Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The amount a member pays for health care provided by non-preferred providers
to any one family member before this plan starts to contribute towards treatment.

IndividualOutofNetworkOutofPocket Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most a member pays during a coverage year for health care provided by
non-preferred providers for any one family member. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

InNetworkCoinsuranceAmount        Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member contributes towards each treatment undertaken by the
health plan’s preferred providers.

InNetworkCoinsurancePercentage Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The percentage of treatment cost the member pays for each treatment
undertaken by the health plan’s preferred providers.

InNetworkLifetimeMaximum          Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most a member pays during the lifetime membership on this plan for health
care provided by the health plan’s preferred providers. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

LastReferencedDate                Type
datetime

<!-- page:1084 -->

AFLS Overview                                                                                   Patient Engagement



Field Name                        Details


## Properties

Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate                    Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

LifetimeMaximumNotes              Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about a member’s maximum lifetime payments.

Name                              Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of these plan coverage benefits.

OutofNetworkCoinsuranceAmount     Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member contributes towards treatment undertaken by
non-preferred providers.

OutofNetworkCoinsurancePercentage Type
double
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1085 -->

AFLS Overview                                                                            Patient Engagement



Field Name                    Details


## Description

The percentage of treatment cost the member pays for treatment undertaken
by non-preferred providers.

OutofNetworkLifetimeMaximum   Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most a member pays during the lifetime membership on this plan for health
care provided by non-preferred providers. It includes deductibles, copayments,
and coinsurance, but excludes premiums.

OutofPocketNotes              Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the out-of-pocket payment a member makes.

OwnerId                       Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PrimaryCareCopay              Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member contributes towards primary care treatment.

PurchaserPlanId               Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the purchaser plan offering these benefits.

<!-- page:1086 -->

AFLS Overview                                                                            Patient Engagement




## Field Name               Details

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this benefits record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this benefits record on its source system.

SourceSystemModified     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which these benefits were last changed on their source system.

SpecialistCopay          Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member contributes towards specialist consultations.

Status                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of these benefits. The default the picklist values are:
- Active
- Inactive

TotalBenefitAmount       Type
currency
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1087 -->

AFLS Overview                                                                                                         Patient Engagement



Field Name                                          Details


## Description

The total amount of the plan benefit associated with the home healthcare visit.
This field is available in API version 66.0 and later with the Home Health add-on
license.

UrgentCareCopay                                     Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount a member contributes towards urgent care.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PlanBenefitChangeEvent (API version 60.0)
Change events are available for the object.
PlanBenefitFeed
Feed tracking is available for the object.
PlanBenefitHistory
History is available for tracked fields of the object.
PlanBenefitOwnerSharingRule
Sharing rules are available for the object.
PlanBenefitShare
Sharing is available for the object.



## PlanBenefitItem

Represents the details of a benefit available under a purchaser’s plan that is offered to their members.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                          Details

BenefitCategory                                     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1088 -->

AFLS Overview                                                                           Patient Engagement



Field Name              Details


## Description

Name of the benefit category this item belongs to.

CoverageLevel           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Description of the level of coverage provided.

FrequencyType           Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The frequency type of the plan benefit item associated with the home healthcare
visit.
Possible values are:
- Daily
- Fortnightly
- Monthly
- Quarterly
- Weekly
- Yearly
This field is available in API version 66.0 and later with the Home Health add-on
license.

InNetworkCoverage       Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount available to contribute towards treatment costs for each treatment
undertaken by the health plan’s preferred providers.

IsInPlanNetwork         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates if the benefit is only available in the plan network.

<!-- page:1089 -->

AFLS Overview                                                                         Patient Engagement




## Field Name              Details

ItemCodeId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code of the plan benefit item.
This field is a polymorphic relationship field.
This field is available in API version 64.0 and later.
Relationship Name
ItemCode
Refers To
CodeSet, CodeSetBundle

LastReferencedDate      Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate          Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of this benefit item.

Notes                   Type
textarea
Properties
Create, Nillable, Update

<!-- page:1090 -->

AFLS Overview                                                                             Patient Engagement



Field Name                  Details


## Description

Additional information about this benefit item.

OutofNetworkCoverage        Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount available to contribute towards treatment costs for each treatment
undertaken by non-preferred providers.

OwnerId                     Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PauthRequirementEndDate     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date from which preauthorization for the plan benefit item is required or
not.
This field is available in API version 64.0 and later.

PauthRequirementStartDate   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The last date for which preauthorization for the plan benefit item is required or
not.
This field is available in API version 64.0 and later.

PlanBenefitId               Type
reference
Properties
Create, Filter, Group, Sort

<!-- page:1091 -->

AFLS Overview                                                                               Patient Engagement



Field Name                   Details


## Description

The ID of the benefit this item belongs to.

PreauthorizationTypeCodeId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code which represents the type of preauthorization that the plan benefit
item requires.
This field is a relationship field.
This field is available in API version 64.0 and later.
Relationship Name
PreauthorizationTypeCode
Refers To
CodeSet

ServiceType                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of service this plan benefit item provides for.

ServiceTypeCode              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code for the type of service this plan benefit item provides for.

SourceSystem                 Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this benefits item record came from.

SourceSystemIdentifier       Type
string

<!-- page:1092 -->

AFLS Overview                                                                                                       Patient Engagement



Field Name                                          Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this benefits item record on its source system.

SourceSystemModified                                Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this benefits item was last updated from the source system.

TimePeriod                                          Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A description of the period during which services under this plan benefit item
are to be rendered or continued.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PlanBenefitItemChangeEvent (API version 60.0)
Change events are available for the object.
PlanBenefitItemFeed
Feed tracking is available for the object.
PlanBenefitItemHistory
History is available for tracked fields of the object.
PlanBenefitItemOwnerSharingRule
Sharing rules are available for the object.
PlanBenefitItemShare
Sharing is available for the object.



## Purchaser

A purchaser is the organization (an employer) that is providing medical insurance plans for their members (employees).
A purchaser is represented by records on the Account object of record type Business.

<!-- page:1093 -->

AFLS Overview                                                                                                    Patient Engagement




## Purchaser Group

A purchaser group is a subset of the purchaser. For example, your company may have individual employee groups in different regions
of the country. Each purchaser group can have separate options for insurance plans.
A purchaser group is represented by records on the Account object of record type Business.
See Also:
- Account



## Purchaser Group Member Association

An association that records the members who belong to a purchaser group. This association is represented by records on the
AccountContactRelation object.



## PurchaserPlan

Represents the payer plan that a purchaser makes available to its members and members’ dependents.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                        Details

Affiliation                                       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
An affiliation to a government service, such as the army or navy.

EffectiveFrom                                     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this purchaser plan is effective.

EffectiveTo                                       Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this purchaser plan ceases to be effective.

<!-- page:1094 -->

AFLS Overview                                                                         Patient Engagement




## Field Name              Details

IsVerifiable            Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a benefits verification can be performed on this plan.

LineOfBusiness          Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The category of insurance policy that the purchaser plan belongs to. For example,
whether the plan is a group health insurance, individual health insurance, etc.
This field is available in API version 64.0 and later.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The name of this plan.

Notes                   Type
textarea
Properties
Create, Nillable, Update
Description
Notes about this payer.

Payer                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the payer’s Account object record.

PlanNumber              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1095 -->

AFLS Overview                                                                   Patient Engagement



Field Name               Details


## Description

The plan’s reference number.

PlanStatus               Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether the plan is active.

PlanType                 Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of plan, with the following default options:
- PPO
- HMO
- Medicare
- Medicaid
- Workers Comp

ServiceType              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the service type offered by this plan.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this plan record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1096 -->

AFLS Overview                                                                                                       Patient Engagement



Field Name                                          Details


## Description

The ID of this plan record on its source system.

SourceSystemModified                                Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this plan record was last changed on the source system.

SponsorType                                         Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of sponsor for the plan. For example, if it's self-sponsored,
government-sponsored, or company-sponsored.
This field is available in API version 64.0 and later.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PurchaserPlanFeed
Feed tracking is available for the object.
PurchaserPlanHistory
History is available for tracked fields of the object.
PurchaserPlanOwnerSharingRule
Sharing rules are available for the object.
PurchaserPlanShare
Sharing is available for the object.
PurchaserPlanChangeEvent
Change data capture is available for this object.



## PurchaserPlanAssn

Represents a junction object that associates the purchaser to the plans they offer to members.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()

<!-- page:1097 -->

AFLS Overview                                                                         Patient Engagement


Fields


## Field Name              Details

LastReferencedDate      Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate          Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

Name                    Type
string
Properties
Autonumber, Defaulted on create, Filter, Sort
Description
The name of this purchaser to purchaser plan association.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PurchaserId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the plan purchaser’s Account object record.

PurchaserPlanId         Type
reference

<!-- page:1098 -->

AFLS Overview                                                                        Patient Engagement



Field Name               Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the associated plan on the Purchaser Plan object.

Role                     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether the purchaser plays a primary or secondary role in the plan.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this record on its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed on the source system.

Status                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether this purchaser plan relationship is active.

<!-- page:1099 -->

AFLS Overview                                                                                                       Patient Engagement



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PurchaserPlanAssnChangeEvent (API version 60.0)
Change events are available for the object.
PurchaserPlanAssnFeed
Feed tracking is available for the object.
PurchaserPlanAssnHistory
History is available for tracked fields of the object.
PurchaserPlanAssnOwnerSharingRule
Sharing rules are available for the object.
PurchaserPlanAssnShare
Sharing is available for the object.



## Purchaser Payer Association

An association that records the purchasers who purchase plans from payers. This association is represented by records on the
AccountAccountRelation object.



## Intelligent Document Automation

Use the Intelligent Document Automation data objects to simplify the document management process, reduce manual data entry, and
get patients the right care and services faster by managing patient and member forms all in one place, from intake through processing.
The Intelligent Document Automation data objects are visible to users with the Health Cloud Starter permission set. Available in API
version 47.0 and later.



## ReceivedDocument

Contains a request for an operation to be performed on a document, such as rotating, splitting, or text extraction. This object is
available in API version 50.0 and later.
ReceivedDocumentType
Represents a junction object between Received Document and Document Type. This object is available in API version 58.0 and later.



## ReceivedDocument

Contains a request for an operation to be performed on a document, such as rotating, splitting, or text extraction. This object is available
in API version 50.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1100 -->

AFLS Overview                                                                                   Patient Engagement


Fields


## Field                   Details

Direction               Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies whether the org is receiving or sending the document.
Possible values are:
- INCOMING—Incoming
- OUTGOING—Outgoing

DocumentNumber          Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
Unique document identification number.

HasAutoOcrDisabled      Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort
Description
Determines whether text is extracted from the document automatically. Default is False.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the document is being processed.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

<!-- page:1101 -->

AFLS Overview                                                                                        Patient Engagement




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
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the received document.

OcrStatus               Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort
Description
Current state of the text extraction process.
Possible values are: Draft, Approved, In Approval, In Review, Obsolete, Superseded, Archived.
Default is Draft.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The user who owns the ReceivedDocument record.

Priority                Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Determines the order in which the document is processed when it is part of a queue.
Possible values are:
- ONE—1
- THREE—3
- TWO—2

<!-- page:1102 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

Source                                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Origin of the incoming document. Can be used to specify processing priority.

Status                                  Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Current stage of processing.
Possible values are:
- APPROVED
- ARCHIVED
- COMPLETED—Document processing is complete.
- DRAFT
- IN_REVIEW
- NEEDS_REVIEW—Document requires review, for example because processing couldn’t
be completed.
- OBSOLETE
- PROCESSING—Document processing is in progress.
- SUPERSEDED

StatusReason                            Type
textarea
Properties
Create, Nillable, Update
Description
Reason for the status when processing and transforming the document.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ReceivedDocumentChangeEvent (API version 59.0)
Change events are available for the object.

<!-- page:1103 -->

AFLS Overview                                                                                                   Patient Engagement




## ReceivedDocumentType

Represents a junction object between Received Document and Document Type. This object is available in API version 58.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                               Details

DocumentTypeId                      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the document type for the document checklist item.
This field is a relationship field.
Relationship Name
DocumentType
Relationship Type
Lookup
Refers To
DocumentType

LastReferencedDate                  Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate                      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

Name                                Type
string

<!-- page:1104 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                 Details


## Properties

Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
Name of the received document type.

PageNumber                            Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Page number of the received document.

ReceivedDocumentId                    Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the received document for the received document type.
This field is a relationship field.
Relationship Name
ReceivedDocument
Relationship Type
Lookup
Refers To
ReceivedDocument




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
ReceivedDocumentTypeChangeEvent (API version 60.0)
Change events are available for the object.

<!-- page:1105 -->

AFLS Overview                                                                                                           Patient Engagement




## Patient Program Outcome Management

Patient Program Outcome Management data model helps you to improve patient and program

**EDITIONS**
outcomes by defining and measuring program outcomes, linking patient progress to program
outcomes. Program Leads can define outcomes for a care program, and can generate a program                      Available in: Lightning
and patient outcome summary. Additionally, case agents can generate a patient outcome summary.                  Experience
Patient Program Outcome Management reuses Care Program Management standard objects to
Available in: Enterprise and
calculate the outcomes at a care program level. To learn more about Care Program Management
Unlimited Editions with
objects, refer Care Program Management Standard Objects.                                                        Health Cloud or Life Sciences
The patient program outcome management objects are available to users with Health Cloud Starter                 Cloud
and Patient Program Outcome Management permission set. Available in API version 61.0 and later.




To view a larger version, right-click or control-click the image and select Open Image in New Tab.



## CareProgram

Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants
by an employer or insurer.
CareProgramEnrollee
Represents a participant enrolled in a care program.
IndicatorAssignment
Represents the assignment of an indicator definition that's used to measure the performance of an outcome or a related activity.
This object is available in API version 59.0 and later.
IndicatorDefinition
Represents information about the indicator assignment and the process of measuring and calculating the indicator results. This
object is available in API version 59.0 and later.

<!-- page:1106 -->

AFLS Overview                                                                                                         Patient Engagement



## IndicatorPerformancePeriod

Represents information about a specified time period including the frequency at which indicator results should be calculated and
the baseline value of the indicator. This object is available in API version 59.0 and later.
IndicatorResult
Represents the result of an indicator assignment for the specified time period that can be used to track the performance of the
indicator. This object is available in API version 59.0 and later.
Outcome
Represents information about the expected change in participants that is driven by the organization's activity. This object is available
in API version 59.0 and later.
OutcomeActivity
Represents a junction between Outcome and the object that's related to the activity undertaken by an organization to achieve that
outcome. This object is available in API version 59.0 and later.
PartyIndicatorResult
Represents information about a party for which the indicator result is calculated. This object is available in API version 62.0 and later.
TimePeriod
Represents the time period that's used to calculate the indicator performance and result. This object is available in API version 59.0
and later.



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

BudgetAmount                                        Type
Currency
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1107 -->

AFLS Overview                                                                           Patient Engagement



Field Name              Details


## Description

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

EndDate                 Type
Date

<!-- page:1108 -->

AFLS Overview                                                                                 Patient Engagement



Field Name                    Details


## Properties

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
Description
The date on which the first site is activated for conducting research studies. This
field is available in API version 64.0 and later when Site Management is enabled.

<!-- page:1109 -->

AFLS Overview                                                                             Patient Engagement




## Field Name               Details

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

StartDate                Type
Date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1110 -->

AFLS Overview                                                                                                          Patient Engagement



Field Name                                          Details


## Description

Effective start date of the program.

Status                                              Type
Pick list
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Status of the program.

TargetEnrollmentDuration                            Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The duration in which the enrollment for the targeted number of participants
must be completed. This field is available in API version 64.0 and later when Site
Management is enabled.

TargetEnrolleeCount                                 Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The target enrollee count of the care program. This field is available for the
Participant Management feature in API version 61.0 and later.

TargetSiteCount                                     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of sites planned for conducting the research study. This field is
available in API version 64.0 and later when Site Management is enabled.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramChangeEvent (API version 59.0)
Change events are available for the object.

<!-- page:1111 -->

AFLS Overview                                                                                                       Patient Engagement




## CareProgramFeed

Feed tracking is available for the object.
CareProgramHistory
History is available for tracked fields of the object.
CareProgramShare
Sharing is available for the object.



## CareProgramEnrollee

Represents a participant enrolled in a care program.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field Name                                          Details

AccountId                                           Type
Lookup(Account)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person Account representing the enrollee

BenefitCoverageType                                 Type
Picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the coverage status of the enrollee under both Medicare and Medicaid.
Possible values are:
- ContinuedEnrollee
- NewEnrollee


## CareProgramId                                       Type

Master-Detail(Care Program)
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1112 -->

AFLS Overview                                                                                  Patient Engagement



Field Name                 Details


## Description

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

CurrentWorkOrderId         Type
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

CurrentWorkOrderStepId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The work order step that's currently being executed for the care program enrollee.
This field is a relationship field and is available for the Advanced Therapy
Management feature in API version 58.0 and later.

<!-- page:1113 -->

AFLS Overview                                                                           Patient Engagement



Field Name              Details

Relationship Name
CurrentWorkOrderStep
Relationship Type
Lookup
Refers To
CarePgmEnrolleeWkOrdStep

EnrolledAtId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The site, location, or territory where the enrollee enrolled in the care program.
This field is available in API version 64.0 when Site Management is enabled.
This field is a polymorphic relationship field.
Relationship Name
EnrolledAt
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

<!-- page:1114 -->

AFLS Overview                                                                               Patient Engagement



Field Name                    Details

Relationship Name
EnrollmentLocation
Relationship Type
Lookup
Refers To
ServiceTerritory

FlowInterviewId               Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Runtime instance of the associated flow.
This field is a relationship field.
Relationship Name
FlowInterview
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

<!-- page:1115 -->

AFLS Overview                                                                             Patient Engagement




## Field Name                  Details

LastReferencedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate              Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

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

<!-- page:1116 -->

AFLS Overview                                                                             Patient Engagement



Field Name                 Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The date that the patient opted out of the care program. This field is available in
API version 56.0 and later.

OptOutReasonType           Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reason why the patient opted out of the care program. This field is available
in API version 56.0 and later.

ResearchStudyCandidateId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The related Research Study Candidate record of the care program enrollee.
This field is a relationship field.
Relationship Name
ResearchStudyCandidate
Refers To
ResearchStudyCandidate

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The UserId for the record owner. This field is a polymorphic relationship field.
This field is available in API version 58.0 and later.

SourceSystem               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the enrollee record was sourced.

<!-- page:1117 -->

AFLS Overview                                                                                                          Patient Engagement




## Field Name                                          Details

SourceSystemIdentifier                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the enrollee record was sourced.

Status                                              Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Status of the enrollee.
Possible values are:
- Active
- Inactive

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

<!-- page:1118 -->

AFLS Overview                                                                                                      Patient Engagement




## IndicatorAssignment

Represents the assignment of an indicator definition that's used to measure the performance of an outcome or a related activity. This
object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.


Fields


## Field                                  Details

CareProgramId                          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program associated with the indicator assignment.
This field is a relationship field.
This field is available in API version 61.0 and later with the Patient Program Outcome
Management permission set.
Relationship Name
CareProgram
Relationship Type
Lookup
Refers To
CareProgram

IndicatorAssignmentType Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the object that the indicator assignment measures.
Possible values are:
- Outcome
- Care Program —This value is available from API version 61.0 and later.

<!-- page:1119 -->

AFLS Overview                                                                                      Patient Engagement




## Field                   Details

IndicatorDefinitionId   Type
reference
Properties
Create, Filter, Group, Sort
Description
The indicator definition that's associated with the indicator assignment.
This field is a relationship field.
Relationship Name
IndicatorDefinition
Relationship Type
Master-Detail
Refers To
IndicatorDefinition

IndicatorImprvGuideline Type
textarea
Properties
Create,Nillable, Update
Description
The guidelines to improve the indicator score.
This field is available in API version 62.0 and later with the Patient Program Outcome
Management permission set.

IntendedDirection       Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the intended direction of change in the behavior, knowledge, skills, status, or level
of functioning that's detailed in the parent indicator definition.
Possible values are:
- Decrease
- Increase
- Maintain

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:1120 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The timestamp when the current user last accessed this record indirectly, for example, through
a list view or related record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view indirectly.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the indicator assignment.

OutcomeId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The outcome that the indicator assignment measures.
This field is a relationship field.
Relationship Name
Outcome
Relationship Type
Lookup
Refers To
Outcome

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of this indicator assignment.
This field is a polymorphic relationship field.

<!-- page:1121 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                     Details

Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Status                                    Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the indicator assignment.
Possible values are:
- Active
- Canceled
- Completed
- Planned




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
IndicatorAssignmentFeed
Feed tracking is available for the object.
IndicatorAssignmentHistory
History is available for tracked fields of the object.
IndicatorAssignmentOwnerSharingRule
Sharing rules are available for the object.
IndicatorAssignmentShare
Sharing is available for the object.



## IndicatorDefinition

Represents information about the indicator assignment and the process of measuring and calculating the indicator results. This object
is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1122 -->

AFLS Overview                                                                                                      Patient Engagement



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.


Fields


## Field                                  Details

Description                            Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
The description of the indicator definition.

FlowDefinitionApiName                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The API name of the flow definition associated with the indicator definition. This field is
available from API version 60.0 and later.

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last referenced this indicator definition.

LastViewedDate                         Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last viewed this indicator definition.

Name                                   Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the indicator definition.

<!-- page:1123 -->

AFLS Overview                                                                                      Patient Engagement




## Field                   Details

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns the outcome.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Status                  Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
Specifies the status of the indicator definition.
Possible values are:
- Active
- Canceled
- Completed
- Planned

UnitOfMeasureId         Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The unit of measure for the target, baseline, and result values that are associated with this
indicator definition.
This field is a relationship field.
Relationship Name
UnitOfMeasure
Relationship Type
Lookup
Refers To
UnitOfMeasure

<!-- page:1124 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
IndicatorDefinitionFeed
Feed tracking is available for the object.
IndicatorDefinitionHistory
History is available for tracked fields of the object.
IndicatorDefinitionOwnerSharingRule
Sharing rules are available for the object.
IndicatorDefinitionShare
Sharing is available for the object.



## IndicatorPerformancePeriod

Represents information about a specified time period including the frequency at which indicator results should be calculated and the
baseline value of the indicator. This object is available in API version 59.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.


Fields


## Field                                     Details

BaselineDescription                       Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
The description of the baseline value.

BaselineValue                             Type
double
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1125 -->

AFLS Overview                                                                                       Patient Engagement



Field                     Details


## Description

The value of the indicator assignment at the beginning of the indicator performance period.

Description               Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
The description of the indicator performance period.

IndicatorAssignmentId     Type
reference
Properties
Create, Filter, Group, Sort
Description
The indicator assignment that’s associated with the indicator performance period.
This field is a relationship field.
Relationship Name
IndicatorAssignment
Relationship Type
Master-Detail
Refers To
IndicatorAssignment

LastReferencedDate        Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last accessed this record indirectly, for example, through
a list view or related record.

LastResultMeasurementDate Type
date
Properties
Filter, Group, Nillable, Sort
Description
The date when the last result value was measured.
This field is a calculated field.

<!-- page:1126 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

LastResultValue         Type
double
Properties
Filter, Nillable, Sort
Description
The result value from the most recently measured indicator result.
This field is a calculated field.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the indicator performance period.

TargetProgress          Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the progress of the target within the time period.
Possible values are:
- At Risk
- Complete
- Not Met
- Not Started
- On Track

TargetValue             Type
double
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1127 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Description

The target value of the indicator assignment within the time period.

TimePeriodId                             Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The time period that is associated with the indicator performance period.
This field is a relationship field.
Relationship Name
TimePeriod
Relationship Type
Lookup
Refers To
TimePeriod




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
IndicatorPerformancePeriodFeed
Feed tracking is available for the object.
IndicatorPerformancePeriodHistory
History is available for tracked fields of the object.



## IndicatorResult

Represents the result of an indicator assignment for the specified time period that can be used to track the performance of the indicator.
This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.

<!-- page:1128 -->

AFLS Overview                                                                                         Patient Engagement


Fields


## Field                   Details

CalculationMethod       Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Determines whether the indicator result was added manually or calculated by automation.
This field is available from API version 60.0 and later.
Possible values are:
- AutomaticallyCalculated
- Manual

Denominator             Type
double
Properties
Create, Filter, Nillable, Sort
Description
The denominator in automatically-calculated results that are an average or percent. This field
is available from API version 60.0 and later.

Description             Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
The description of the indicator result.

FlowDefinitionApiName   Type
string
Properties
Create, Filter, Group, Nillable, Sort
Description
The API name of the flow definition associated with this indicator result. This field is available
from API version 60.0 and later.

FlowVersion             Type
int
Properties
Create, Filter, Group, Nillable, Sort

<!-- page:1129 -->

AFLS Overview                                                                                             Patient Engagement



Field                       Details


## Description

The version of the flow that calculated this result. This field is available from API version 60.0
and later.

IndicatorPerformancePeriodId Type
reference
Properties
Create, Filter, Group, Sort
Description
The indicator performance period for which the result is defined.
This field is a relationship field.
Relationship Name
IndicatorPerformancePeriod
Relationship Type
Master-Detail
Refers To
IndicatorPerformancePeriod

LastReferencedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last referenced this indicator result.

LastViewedDate              Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last viewed this indicator result.

MeasurementDate             Type
date
Properties
Create, Filter, Group, Sort, Update
Description
The date on which the indicator result is measured.

Name                        Type
string

<!-- page:1130 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Properties

Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the indicator result.

Numerator                                Type
double
Properties
Create, Filter, Nillable, Sort
Description
The numerator in automatically-calculated results that are an average or percent. This field
is available from API version 60.0 and later.

ResultValue                              Type
double
Properties
Create, Filter, Sort, Update
Description
The result for the indicator performance period.

Type                                     Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of the result for the time period.
Possible values are:
- Final
- Interim




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
IndicatorResultFeed
Feed tracking is available for the object.
IndicatorResultHistory
History is available for tracked fields of the object.

<!-- page:1131 -->

AFLS Overview                                                                                                      Patient Engagement




## Outcome

Represents information about the expected change in participants that is driven by the organization's activity. This object is available in
API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.


Fields


## Field                                  Details

Description                            Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
The description of the outcome.

IntendedDirection                      Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the intended direction of change in the behavior, knowledge, skills, status, or level
of functioning that's detailed in the outcome.
Possible values are:
- Decrease
- Increase
- Maintain

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last referenced this outcome.

<!-- page:1132 -->

AFLS Overview                                                                                  Patient Engagement




## Field                   Details

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last viewed this outcome.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the outcome.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns the outcome.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

SourceName              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the source that initially defined the outcome. For example, United Nations
Sustainable Development Goals (UNSDG).

Status                  Type
picklist
Properties
Create, Filter, Group, Sort, Update

<!-- page:1133 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Description

Specifies the status of the outcome.
Possible values are:
- Active
- Canceled
- Completed
- Planned

Term                                     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the term for which the outcome is defined.
Possible values are:
- Long-Term
- Medium-Term
- Short-Term




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
OutcomeFeed
Feed tracking is available for the object.
OutcomeHistory
History is available for tracked fields of the object.
OutcomeOwnerSharingRule
Sharing rules are available for the object.
OutcomeShare
Sharing is available for the object.



## OutcomeActivity

Represents a junction between Outcome and the object that's related to the activity undertaken by an organization to achieve that
outcome. This object is available in API version 59.0 and later.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.

<!-- page:1134 -->

AFLS Overview                                                                                                      Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.


Fields


## Field                                  Details

CareProgramId                          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program associated with the outcome activity.
This field is a relationship field.
This field is available in API version 61.0 and later with the Patient Program Outcome
Management permission set.
Relationship Name
CareProgram
Relationship Type
Lookup
Refers To
CareProgram

LastReferencedDate                     Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last referenced this outcome activity.

LastViewedDate                         Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last viewed this outcome activity.

<!-- page:1135 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

Name                                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the outcome activity.

OutcomeActivityType                     Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The type of activity that's associated with the outcome, such as care program.
Possible values are:
- Care Program —This value is available from API version 61.0 and later.

OutcomeId                               Type
reference
Properties
Create, Filter, Group, Sort
Description
The outcome that's associated with the outcome activity.
This field is a relationship field.
Relationship Name
Outcome
Relationship Type
Master-Detail
Refers To
Outcome




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
OutcomeActivityFeed
Feed tracking is available for the object.
OutcomeActivityHistory
History is available for tracked fields of the object.

<!-- page:1136 -->

AFLS Overview                                                                                                       Patient Engagement




## PartyIndicatorResult

Represents information about a party for which the indicator result is calculated. This object is available in API version 62.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.


Fields


## Field                                  Details

CareProgramEnrolleeId                  Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The ID of the care program enrollee record associated with the party indicator result.
This field is a relationship field.
Relationship Name
CareProgramEnrollee
Refers To
CareProgramEnrollee

IndicatorResultId                      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the indicator result record associated with the party.
This field is a relationship field.
Relationship Name
IndicatorResult
Refers To
IndicatorResult

MeasurementDate                        Type
date

<!-- page:1137 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details


## Properties

Create, Filter, Group, Sort, Update
Description
The date when the party indicator result is measured.

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the party indicator result.

PartyId                                 Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The object for which the indicator result is calculated.
This field is a relationship field.
Relationship Name
Party
Refers To
CareProgramEnrollee

ResultValue                             Type
double
Properties
Create, Filter, Sort, Update
Description
The result value that's used to score the party.



Usage


## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
PartyIndicatorResultFeed on page 1429
Feed tracking is available for the object.
PartyIndicatorResultHistory
History is available for tracked fields of the object.

<!-- page:1138 -->

AFLS Overview                                                                                                      Patient Engagement




## PartyIndicatorResultShare

Sharing is available for the object.



## TimePeriod

Represents the time period that's used to calculate the indicator performance and result. This object is available in API version 59.0 and
later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Special Access Rules

This object is available in products where the Health Cloud Foundation (for Health Cloud) or Health Cloud Starter (for AFLS),
and Patient Program Outcome Management permission sets are assigned to users.


Fields


## Field                                    Details

EndDate                                  Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The end date and time of the time period.

LastReferencedDate                       Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last referenced this time period.

LastViewedDate                           Type
dateTime
Properties
Filter, Nillable, Sort
Description
Date and time when a user last viewed this time period.

Name                                     Type
string

<!-- page:1139 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Properties

Create, Filter, Group, idLookup, Sort, Update
Description
The name of the time period.

OwnerId                                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns the time period.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

StartDate                                Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The start date and time of the time period.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
TimePeriodFeed
Feed tracking is available for the object.
TimePeriodHistory
History is available for tracked fields of the object.
TimePeriodOwnerSharingRule
Sharing rules are available for the object.
TimePeriodShare
Sharing is available for the object.

<!-- page:1140 -->

AFLS Overview                                                                                                       Patient Engagement




## Pharmacy Benefits Verification

Pharmacy Benefits Verification uses a data model that’s FHIR-CARIN and NCPDP aligned to store its

**EDITIONS**
data and make it interoperable. The pharmacy benefits verification data model supports drug
manufacturers, providers, pharmacists, and life sciences organizations in determining pharmacy
benefits coverage for the medications prescribed to the patients under a care program.                      Available in: Lightning
Experience
The pharmacy benefits verification objects are available to users with the Health Cloud Starter and
Available in: Enterprise and
Manage Pharmacy Benefits Verification permission set. Available in API version 61.0 and later.
Unlimited Editions with Life
Sciences or Health Cloud




For more details and a larger image, visit the Data Model Gallery.



## AssessmentEnvelope

Represents information about an envelope that contains the assessments related to a user. For example, you can create an envelope
that contains assessments for a patient or a caregiver related to depression or anxiety. This object is available in API version 58.0 and
later.
AssessmentEnvelopeItem
Represents information about an item in an envelope that contains the assessments related to a user. For example, you can create
an item that contains an assessment for depression or anxiety. This object is available in API version 58.0 and later.
CareBenefitVerifyRequest
Request for verification of benefits. This object is available in API version 53.0 and later.

<!-- page:1141 -->

AFLS Overview                                                                                                           Patient Engagement



## CareProgram

Represents a set of activities, such as a patient therapy, financial assistance, education, wellness, or fitness plan, offered to participants
by an employer or insurer.
CareProgramEnrollee
Represents a participant enrolled in a care program.
CareProgramProduct
Represents the affiliation between a care program and a care program product, care program provider, or both.
CoverageBenefit
Represents the benefits provided to a covered member by a purchaser’s plan.
CoverageBenefitItem
Specific service covered by the insurance plan. This object is available in API version 53.0 and later.
CoverageBenefitItemLimit
Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and
exclusion. This object is available in API version 53.0 and later.
HealthcareProvider
Represents business-level details about the healthcare organization or the practitioner.
Medication
Represents detailed information about different medications. This object is available in API version 51.0 and later.
MedicationRequest
Represents a request or order for the supply of medication, along with information about how it should be administered. This object
is available in API version 51.0 and later.
MemberPlan
Represents details about the insurance coverage for a member or subscriber.
PurchaserPlan
Represents the payer plan that a purchaser makes available to its members and members’ dependents.
UnitOfMeasure
Represents the unit of measures for care metrics and care observations. This object is available in API version 49.0 and later.



## AssessmentEnvelope

Represents information about an envelope that contains the assessments related to a user. For example, you can create an envelope
that contains assessments for a patient or a caregiver related to depression or anxiety. This object is available in API version 58.0 and
later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1142 -->

AFLS Overview                                                                       Patient Engagement


Fields


## Field                   Details

AccountId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The recipient of the assessment envelope, such as a patient.
This field is a relationship field.
Relationship Name
Account
Relationship Type
Lookup
Refers To
Account

ContactId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The recipient of the assessment envelope, such as a caregiver.
This field is a relationship field.
Relationship Name
Contact
Relationship Type
Lookup
Refers To
Contact

ExpirationDateTime      Type
dateTime
Properties
Create, Filter, Sort, Update
Description
The date and time of assessment envelope expiration.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:1143 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

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
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the assessment envelope.

NotificationStatus      Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The sent status of the assessment envelope
Possible values are:
- NotSent
- Sent

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

<!-- page:1144 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                    Details

RequestReferenceId                       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reference to the context of the assessment envelope request.
This field is a polymorphic relationship field.
Relationship Name
RequestReference
Relationship Type
Lookup
Refers To
Case, ClinicalEncounter, ClinicalServiceRequest, ServiceAppointment

Status                                   Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Specifies the status of the envelope that contains the assessments
Possible values are:
- Completed
- InProgress—In Progress
- NotStarted—Not Started




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AssessmentEnvelopeChangeEvent (API version 60.0)
Change events are available for the object.
AssessmentEnvelopeFeed
Feed tracking is available for the object.
AssessmentEnvelopeHistory
History is available for tracked fields of the object.
AssessmentEnvelopeOwnerSharingRule
Sharing rules are available for the object.
AssessmentEnvelopeShare
Sharing is available for the object.

<!-- page:1145 -->

AFLS Overview                                                                                               Patient Engagement




## AssessmentEnvelopeItem

Represents information about an item in an envelope that contains the assessments related to a user. For example, you can create an
item that contains an assessment for depression or anxiety. This object is available in API version 58.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                Details

AssessmentEnvelopeId                 Type
reference
Properties
Create, Filter, Group, Sort
Description
The assessment envelope that is associated with the item.
This field is a relationship field.
Relationship Name
AssessmentEnvelope
Relationship Type
Lookup
Refers To
AssessmentEnvelope

AssessmentId                         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier for the assessment envelope item.
This field is a relationship field.
Relationship Name
Assessment
Relationship Type
Lookup
Refers To
Assessment

LastReferencedDate                   Type
dateTime

<!-- page:1146 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

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
Create, Filter, Group, idLookup, Sort, Update
Description
Tne name of the assessment envelope item.

OmniProcessId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represent the related OmniProcess.
This field is a relationship field.
Relationship Name
OmniProcess
Relationship Type
Lookup
Refers To
OmniProcess

Status                  Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
Indicates the status of the assessment envelope item.
Possible values are:

<!-- page:1147 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                   Details
- Completed
- InProgress
- NotStarted




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AssessmentEnvelopeItemChangeEvent (API version 60.0)
Change events are available for the object.
AssessmentEnvelopeItemFeed
Feed tracking is available for the object.
AssessmentEnvelopeItemHistory
History is available for tracked fields of the object.



## CareBenefitVerifyRequest

Request for verification of benefits. This object is available in API version 53.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AssignedToId                            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The user assigned to the care benefit verify request.
This field is a relationship field.
This field is available in API version 62.0 and later.
Relationship Name
AssignedTo
Refers To
User

<!-- page:1148 -->

AFLS Overview                                                                                      Patient Engagement




## Field                    Details

AuthorizedPrescriptionId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The authorized prescription associated with the care benefit verify request.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
AuthorizedPrescription
Relationship Type
Lookup
Refers To
MedicationRequest

BenefitCategoryCodeId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The benefit category code associated with the care benefit verify request.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
BenefitCategoryCode
Relationship Type
Lookup
Refers To
CodeSet

BillablePrdEndDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when billable period ended.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.

<!-- page:1149 -->

AFLS Overview                                                                                      Patient Engagement




## Field                    Details

BillablePrdStartDateTime Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when billable period started.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.

CareProgramEnrolleeId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care program enrollee associated with the care benefit verify request.
This field is a relationship field.
This field is available in API version 62.0 and later.
Relationship Name
CareProgramEnrollee
Refers To
CareProgramEnrollee

CareProgramId            Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The care program associated with the care benefit verify request.
This field is a relationship field.
This field is available in API version 62.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
CareProgram
Refers To
CareProgram

CaseId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1150 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details


## Description

Identifies the associated case.
This field is a relationship field.
Relationship Name
Case
Relationship Type
Lookup
Refers To
Case

CoverageBenefitId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifies the set of services covered by the insurance plan.
This field is a relationship field.
Relationship Name
CoverageBenefit
Relationship Type
Lookup
Refers To
CoverageBenefit

InitialFillDuration     Type
double
Properties
Filter, Nillable, Sort
Description
The initial fill duration of the authorized prescription.
This field is available in API version 62.0 and later with the Manage Pharmacy Benefits
Verification permission set.

InitialFillQuantity     Type
double
Properties
Filter, Nillable, Sort
Description
The initial fill quantity of the authorized prescription.
This field is available in API version 62.0 and later with the Manage Pharmacy Benefits
Verification permission set.

<!-- page:1151 -->

AFLS Overview                                                                                        Patient Engagement




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

MemberPlanId             Type
reference
Properties
Create, Filter, Group, Sort
Description
Identifies the member plan that includes the benefit item being verified.
This field is a relationship field.
Relationship Name
MemberPlan
Relationship Type
Lookup
Refers To
MemberPlan

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of the care benefit verification request.

OriginalPrescriptionId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1152 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details


## Description

The original prescription associated with the care benefit verify request.
This field is a polymorphic relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
OriginalPrescription
Relationship Type
Lookup
Refers To
MedicationRequest

PayerId                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The payer associated with the care benefit verify request.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
Payer
Relationship Type
Lookup
Refers To
Account

PlanId                  Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The purchaser plan from the member plan associated with the care program enrollee.
This field is a relationship field.
This field is available in API version 62.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
Plan

<!-- page:1153 -->

AFLS Overview                                                                                      Patient Engagement



Field                    Details

Refers To
PurchaserPlan

PrescriberId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The prescriber associated with the care benefit verify request.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
Prescriber
Relationship Type
Lookup
Refers To
HealthcareProvider

PrescriptionMedicationId Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The medication code or medication name of the authorized prescription.
This field is a polymorphic relationship field.
This field is available in API version 62.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
PrescriptionMedication
Refers To
CodeSetBundle, Medication

PriorityCodeId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The priority code associated with the care benefit verify request.
This field is a relationship field.

<!-- page:1154 -->

AFLS Overview                                                                                           Patient Engagement




## Field                         Details

This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
PriorityCode
Relationship Type
Lookup
Refers To
CodeSet

ProviderId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The provider of the care benefit verify request.
This field is a polymorphic relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
Provider
Relationship Type
Lookup
Refers To
Account, HealthcareProvider

RelatedCareBnftVerifyRequestId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The original care benefit verify request from which the current request is cloned.
This field is a relationship field.
This field is available in API version 62.0 and later.
Relationship Name
RelatedCareBnftVerifyRequest
Refers To
CareBenefitVerifyRequest

Request                       Type
textarea

<!-- page:1155 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details

Properties
Nillable
Description
The JSON request body sent to an external system for care benefit verification.

RequestDate             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Date of verification request.

RequestedById           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person or organization requesting verification.
This field is a relationship field.
Relationship Name
RequestedBy
Relationship Type
Lookup
Refers To
User

RequesterId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The requester associated with the care benefit verify request.
This field is a polymorphic relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Relationship Name
Requester
Relationship Type
Lookup
Refers To
Account, HealthcareProvider

<!-- page:1156 -->

AFLS Overview                                                                           Patient Engagement




## Field                   Details

ResponseBody            Type
base64
Properties
Create, Nillable, Update
Description
Full JSON response from external system.

ResponseContentType     Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The content type of the response from the external system.
Possible values are:
- application/html
- application/java-archive
- application/javascript
- application/json
- application/msword
- application/octet-stream
- application/octet-stream;type=unknown
- application/opx
- application/pdf
- application/postscript
- application/rtf
- application/vnd.box.notes
- application/vnd.google-apps.document
- application/vnd.google-apps.drawing
- application/vnd.google-apps.form
- application/vnd.google-apps.presentation
- application/vnd.google-apps.script
- application/vnd.google-apps.spreadsheet
- application/vnd.ms-excel
- application/vnd.ms-excel.sheet.macroEnabled.12
- application/vnd.ms-infopath
- application/vnd.ms-powerpoint
- application/vnd.ms-powerpoint.presentation.macroEnabled.12
- application/vnd.ms-word.document.macroEnabled.12
- application/vnd.oasis.opendocument.presentation

<!-- page:1157 -->

AFLS Overview                                                                     Patient Engagement




## Field                   Details

- application/vnd.oasis.opendocument.spreadsheet
- application/vnd.oasis.opendocument.text
- application/vnd.openxmlformats-officedocument.presentationml.presentation
- application/vnd.openxmlformats-officedocument.presentationml.slideshow
- application/vnd.openxmlformats-officedocument.presentationml.template
- application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
- application/vnd.openxmlformats-officedocument.spreadsheetml.template
- application/vnd.openxmlformats-officedocument.wordprocessingml.document
- application/vnd.openxmlformats-officedocument.wordprocessingml.template
- application/vnd.visio
- application/x-gzip
- application/x-java-source
- application/x-javascript
- application/x-shockwave-flash
- application/x-sql
- application/x-zip-compressed
- application/xhtml+xml
- application/xml
- application/zip
- audio/mp4
- audio/mpeg
- audio/ogg
- audio/x-aac
- audio/x-ms-wma
- audio/x-ms-wmv
- audio/x-wav
- image/bmp
- image/gif
- image/jpeg
- image/jpeg;type=mobile
- image/png
- image/svg+xml
- image/tiff
- image/vnd.adobe.photoshop
- image/vnd.dwg
- image/x-photoshop
- message/rfc822
- model/vnd.usdz+zip

<!-- page:1158 -->

AFLS Overview                                                             Patient Engagement



Field                   Details
- text/css
- text/csv
- text/html
- text/plain
- text/rtf
- text/snote
- text/stypi
- text/vnd.salesforce.quip-chat
- text/vnd.salesforce.quip-doc
- text/vnd.salesforce.quip-sheet
- text/vnd.salesforce.quip-slides
- text/vnd.salesforce.quip-template
- text/vtt
- text/webviewhtml
- text/x-c
- text/x-c++
- text/xml
- video/mp4
- video/mpeg
- video/ogg
- video/quicktime
- video/x-m4v
- video/x-ms-asf
- video/x-msvideo

ResponseLength          Type
int
Properties
Filter, Group, Nillable, Sort
Description
The length of the response from the external system.

ResponseName            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the response from the external system.

<!-- page:1159 -->

AFLS Overview                                                                                      Patient Engagement




## Field                   Details

Status                  Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Status of the verification request.
Possible values are:
- Acknowledged
- Completed
- Copy
- Error
- Partial
- Pending
- Rejected
- TimedOut—Timed Out
- Verified
- Pending Confirmation
- Receieved Confirmation
- Ready for Verification

StatusReason            Type
textarea
Properties
Create, Nillable, Update
Description
The reason for the specified status of the care benefit verification request.

VerificationMode        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the mode of verification used in the care benefit verify request.
This field is available in API version 63.0 and later with the Manage Pharmacy Benefits
Verification permission set.
Possible values are:
- Electronic
- Manual

<!-- page:1160 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareBenefitVerifyRequestChangeEvent (API version 60.0)
Change events are available for the object.
CareBenefitVerifyRequestFeed
Feed tracking is available for the object.
CareBenefitVerifyRequestHistory
History is available for tracked fields of the object.



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

BudgetAmount                                        Type
Currency
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Approved budget for the care program.

CareProgramName                                     Type
Text
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the care program.

<!-- page:1161 -->

AFLS Overview                                                                                 Patient Engagement




## Field Name                    Details

Category                      Type
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

CurrentEnrolleeCount          Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of enrollees who have joined the care program to date. This field is
available for the Participant Management feature in API version 61.0 and later.

Description                   Type
Long Text Area
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A short description explaining the program.

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

<!-- page:1162 -->

AFLS Overview                                                                            Patient Engagement



Field Name               Details


## Description

The unit of measure for the participant enrollment duration. This field is available
in API version 64.0 and later when Site Management is enabled.
This field is a relationship field.
Relationship Name
EnrollmentDurationMeasure
Refers To
UnitOfMeasure

EnrollmentRate           Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The rate of the participant enrollment at the site. This is calculated by dividing
the target enrollment count by the target enrollment duration and the number
of planned sites. This field is available in API version 64.0 and later when Site
Management is enabled.

FirstSiteClosedOutDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the first site is closed out.

FirstSiteActivatedDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the first site is activated for conducting research studies. This
field is available in API version 64.0 and later when Site Management is enabled.

LastSiteActivatedDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the last site is activated for conducting research studies. This
field is available in API version 64.0 and later when Site Management is enabled.

<!-- page:1163 -->

AFLS Overview                                                                             Patient Engagement




## Field Name               Details

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

StartDate                Type
Date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Effective start date of the program.

Status                   Type
Pick list
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update

<!-- page:1164 -->

AFLS Overview                                                                                                          Patient Engagement



Field Name                                          Details


## Description

Status of the program.

TargetEnrollmentDuration                            Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The duration in which the enrollment for the targeted number of participants
must be completed. This field is available in API version 64.0 and later when Site
Management is enabled.

TargetEnrolleeCount                                 Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The target enrollee count of the care program. This field is available for the
Participant Management feature in API version 61.0 and later.

TargetSiteCount                                     Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of sites planned for conducting the research study. This field is
available in API version 64.0 and later when Site Management is enabled.




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

<!-- page:1165 -->

AFLS Overview                                                                                                    Patient Engagement




## CareProgramEnrollee

Represents a participant enrolled in a care program.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field Name                                       Details

AccountId                                        Type
Lookup(Account)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person Account representing the enrollee

BenefitCoverageType                              Type
Picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the coverage status of the enrollee under both Medicare and Medicaid.
Possible values are:
- ContinuedEnrollee
- NewEnrollee


## CareProgramId                                    Type

Master-Detail(Care Program)
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Look up for Care Program.

ClinicalServiceRequestId                         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1166 -->

AFLS Overview                                                                                Patient Engagement



Field Name               Details


## Description

The clinical service request associated with the care program enrollee.
This field is a relationship field and is available in API version 60.0 and later.
Relationship Name
ClinicalServiceRequest
Relationship Type
Lookup
Refers To
ClinicalServiceRequest

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

<!-- page:1167 -->

AFLS Overview                                                                           Patient Engagement




## Field Name              Details

EnrolledAtId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The site, location, or territory where the enrollee enrolled in the care program.
This field is available in API version 64.0 when Site Management is enabled.
This field is a polymorphic relationship field.
Relationship Name
EnrolledAt
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

<!-- page:1168 -->

AFLS Overview                                                                               Patient Engagement




## Field Name                    Details

FlowInterviewId               Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Runtime instance of the associated flow.
This field is a relationship field.
Relationship Name
FlowInterview
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

<!-- page:1169 -->

AFLS Overview                                                                              Patient Engagement




## Field Name                  Details

LastViewedDate              Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

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

<!-- page:1170 -->

AFLS Overview                                                                             Patient Engagement



Field Name                 Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The reason why the patient opted out of the care program. This field is available
in API version 56.0 and later.

ResearchStudyCandidateId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The related Research Study Candidate record of the care program enrollee.
This field is a relationship field.
Relationship Name
ResearchStudyCandidate
Refers To
ResearchStudyCandidate

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The UserId for the record owner. This field is a polymorphic relationship field.
This field is available in API version 58.0 and later.

SourceSystem               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the enrollee record was sourced.

SourceSystemIdentifier     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the enrollee record was sourced.

<!-- page:1171 -->

AFLS Overview                                                                                                          Patient Engagement




## Field Name                                          Details

Status                                              Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Status of the enrollee.
Possible values are:
- Active
- Inactive

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



## CareProgramProduct

Represents the affiliation between a care program and a care program product, care program provider, or both.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()

<!-- page:1172 -->

AFLS Overview                                                                                       Patient Engagement


Fields


## Field                   Details

Availability            Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The default availability of the product to an enrollee in the context of a care program. For
example, some products or services are available to all enrollees, others are limited to special
circumstances, and others are no longer available.

CareProgramId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifier for the care program associated with a care program product.

CareProgramPrice        Type
currency
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A standard list price for a given product in the context of a care program.

LastReferencedDate      Type
dateTime
Properties
Filter, Group, Nillable, Sort
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

<!-- page:1173 -->

AFLS Overview                                                                            Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Sort, Update
Description
Name of the care program product.

OwnerId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the user who owns this record.

ProductId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifier of the product associated with a care program

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the care program product was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the care program product was sourced.

Status                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of the product in the context of a care program.

<!-- page:1174 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProgramProductChangeEvent (API version 59.0)
Change events are available for the object.
CareProgramProductFeed
Feed tracking is available for the object.
CareProgramProductHistory
History is available for tracked fields of the object.
CareProgramProductOwnerSharingRule
Sharing rules are available for the object.
CareProgramProductShare
Sharing is available for the object.



## CoverageBenefit

Represents the benefits provided to a covered member by a purchaser’s plan.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                          Details

BenefitNotes                                        Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the benefits available to the member under this
plan’s coverage.

BenefitPeriodEndDate                                Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Last day of the coverage benefit period.

BenefitPeriodStartDate                              Type
date

<!-- page:1175 -->

AFLS Overview                                                                              Patient Engagement



Field Name                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
First day of the coverage benefit period.

CareBenefitVerifyRequestId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care benefit verify request associated with the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
CareBenefitVerifyRequest
Relationship Type
Lookup
Refers To
CareBenefitVerifyRequest

CoinsuranceNotes             Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the contribution the member makes towards
treatment.

CopayNotes                   Type
textarea
Properties
Create, Nillable, Update
Description
Additional information on the copayment amounts members contributes.

CoverageType                 Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1176 -->

AFLS Overview                                                                                   Patient Engagement



Field Name                       Details


## Description

General category of service covered.
Possible values are:
- Dental
- Medical
- Vision
- Home Health - This picklist value is available for the Home Health feature
in API version 59.0 and later.
- Pharmacy - This picklist value is available for the Pharmacy Benefits
Verification feature in API version 63.0 and later. See Activate Picklist Value
for Coverage Benefit to activate this value.

DeductibleNotes                  Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the member’s deductibles under this plan.

Disclaimer                       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Overall plan benefit disclaimers.

EmergencyDepartmentCopay         Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards emergency treatment.

FamilyInNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by the health plan’s
preferred providers for all family members.

<!-- page:1177 -->

AFLS Overview                                                                                    Patient Engagement




## Field Name                          Details

FamilyInNetworkDeductibleLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member is required to pay for health care provided by the health
plan’s preferred providers for all family members. When this amount is reached,
the plan starts to contribute towards treatment.

FamilyInNetworkDeductibleRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount the member still has to pay for health care provided by
the health plan’s preferred providers for all family members. When this amount
is reached, the plan starts to contribute towards treatment.

FamilyInNetworkOutofPocketApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount of the member has paid in this coverage year for health care provided
by the health plan’s preferred providers for all family members. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FamilyInNetworkOutofPocketLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most the member pays during the coverage year for health care provided
by the health plan’s preferred providers for all family members. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FamilyInNetworkOutofPocketRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1178 -->

AFLS Overview                                                                                     Patient Engagement



Field Name                           Details


## Description

The remaining amount for the member to pay during this coverage year for care
provided by the plan’s preferred providers for all family members. When this
amount is reached, the plan starts to contribute towards treatment. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FamilyOutofNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by non-preferred
providers for all family members.

FamilyOutofNetworkDeductibleLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The total amount the member has to pay for health care provided by
non-preferred providers for all family members. When this amount is reached,
the plan starts to contribute towards treatment.

FamilyOutofNetworkDeductibleRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member still has to pay for health care provided by non-preferred
providers for all family members. When this amount is reached, the plan starts
to contribute towards treatment.

FamilyOutofNetworkOutofPocketApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount of the member has paid in this coverage year for health care provided
by non-preferred providers for all family members. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

FamilyOutofNetworkOutofPocketLimit Type
currency

<!-- page:1179 -->

AFLS Overview                                                                                         Patient Engagement



Field Name                            Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The most the member pays during the coverage year for health care provided
by non-preferred providers for all family members. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

FamilyOutofNetworkOutofPocketRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount for the member to pay during this coverage period for
health care provided by non-preferred providers for all family members. When
this amount is reached, the plan starts to contribute towards treatment. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

FinalCoverageStatusCodeId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code that's determined after considering the restrictions and other status
types that apply to the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
FinalCoverageStatusCode
Relationship Type
Lookup
Refers To
CodeSet

FrequencyType                         Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The frequency type of the coverage benefit associated with the home healthcare
visit.
Possible values are:

<!-- page:1180 -->

AFLS Overview                                                                                        Patient Engagement



Field Name                            Details
- Daily
- Fortnightly
- Monthly
- Quarterly
- Weekly
- Yearly
This field is available in API version 66.0 and later with the Home Health add-on
license.

IndividualInNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by the health plan’s
preferred providers to the most costly family member.

IndividualInNetworkDeductibleLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay for health care provided by the plan’s
preferred providers for any family member. When this amount is reached, the
plan starts to contribute towards treatment.

IndividualInNetworkDeductibleRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The remaining amount the member has to pay for care during the coverage year
provided by the plan’s preferred providers for any family member. When this
amount is reached, the plan starts to contribute towards treatment.

IndividualInNetworkOutofPocketApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1181 -->

AFLS Overview                                                                                       Patient Engagement



Field Name                             Details


## Description

The amount of the member has paid in this coverage year for health care provided
by the plan’s preferred providers to any one family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualInNetworkOutofPocketLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most the member pays during the coverage year for health care provided
by the health plan’s preferred providers for any family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualInNetworkOutofPocketRemaining Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount remaining for the member to pay during the coverage year for care
provided by the plan’s preferred providers for any family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualOutofNetworkDeductibleApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has paid for health care provided by non-preferred
providers to the most costly family member.

IndividualOutofNetworkDeductibleLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay for health care provided by non-preferred
providers to any one family member. When this amount is reached, the plan
starts to contribute towards treatment.

IndividualOutofNetworkDeductibleRemain Type
currency

<!-- page:1182 -->

AFLS Overview                                                                                      Patient Engagement



Field Name                              Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The remaining amount the member has to pay for health care during the coverage
year provided by non-preferred providers to any family member. When this
amount is reached, the plan starts to contribute towards treatment.

IndividualOutofNetworkOutofPocketApplied Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount of the member has paid in this coverage period for health care
provided by non-preferred providers to any family members. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

IndividualOutofNetworkOutofPocketLimit Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The most the member pays during the coverage year for health care provided
by non-preferred providers to any family member. It includes deductibles,
copayments, and coinsurance, but excludes premiums.

IndividualOutofNetworkOutofPocketRemain Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount remaining for the member to pay during the coverage year for health
care provided by non-preferred providers to any family member. It includes
deductibles, copayments, and coinsurance, but excludes premiums.

InNetworkCoinsuranceAmount              Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards treatment undertaken by the
health plan’s preferred providers.

<!-- page:1183 -->

AFLS Overview                                                                                Patient Engagement




## Field Name                     Details

InNetworkCoinsurancePercentage Type
percent
Properties
Create, Filter, Nillable, Sort, Update
Description
The percentage of treatment cost the member pays for treatment undertaken
by the health plan’s preferred providers.

InNetworkLifetimeMaximum       Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay during lifetime coverage under this plan
after which the provider covers all costs for treatment provided by its preferred
providers. It includes deductibles, copayments, and coinsurance, but excludes
premiums.

IsActive                       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the coverage benefit is currently in force.
The default value is 'false'.

LastReferencedDate             Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate                 Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

<!-- page:1184 -->

AFLS Overview                                                                         Patient Engagement




## Field Name              Details

LifetimeMaximumNotes    Type
textarea
Properties
Create, Nillable, Update
Description
Additional information on the lifetime maximum payments the member Will be
expected to make.

MemberId                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the member receiving these benefits.

MemberPlanId            Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the member plan receiving these benefits.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of these coverage benefits.

OutcomeStatusCodeId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The outcome code set associated with the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
OutcomeStatusCode

<!-- page:1185 -->

AFLS Overview                                                                               Patient Engagement



Field Name                       Details

Relationship Type
Lookup
Refers To
CodeSet

OutofNetworkCoinsuranceAmount    Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards treatment undertaken by
non-preferred providers.

OutofNetworkCoinsurancPercentage Type
percent
Properties
Create, Filter, Nillable, Sort, Update
Description
The percentage of treatment cost the member pays for treatment undertaken
by non-preferred providers.

OutofNetworkLifetimeMaximum      Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member has to pay during lifetime coverage under this plan
after which the plan provider covers all costs for treatment provided by its
non-preferred providers. It includes deductibles, copayments, and coinsurance,
but excludes premiums.

OutofPocketNotes                 Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about the out-of-pocket payment the member makes.

OwnerId                          Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1186 -->

AFLS Overview                                                                            Patient Engagement



Field Name               Details


## Description

The ID of the user who owns this record.

PharmaCopayAmount        Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards the pharma products.
This field is available in API version 62.0 and later with the Manage Financial
Assistance Program permission set.


PrimaryCareCopay         Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards primary care treatment.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this benefits record was obtained from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this benefits record on its source system.

SourceSystemModified     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which these benefits were last changed on their source system.

<!-- page:1187 -->

AFLS Overview                                                                          Patient Engagement




## Field Name              Details

SpecialistCopay         Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards specialist consultations.

StatusCodeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status code set associated with the coverage benefit.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Pharmacy
Benefits Verification permission set.
Relationship Name
StatusCode
Relationship Type
Lookup
Refers To
CodeSet

TotalBenefitAmount      Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The total amount of the coverage benefit associated with the home healthcare
visit.
This field is available in API version 66.0 and later with the Home Health add-on
license.

UrgentCareCopay         Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The amount the member contributes towards urgent care.

<!-- page:1188 -->

AFLS Overview                                                                                                            Patient Engagement




## Field Name                                           Details

VerificationDate                                     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Date on which the benefit was verified.




## Associated Objects

This object has these associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise,
they’re available in the specified API version and later.
CoverageBenefitChangeEvent (API version 59.0)
Change events are available for the object.
CoverageBenefitFeed
Feed tracking is available for the object.
CoverageBenefitHistory
History is available for tracked fields of the object.
CoverageBenefitOwnerSharingRule
Sharing rules are available for the object.
CoverageBenefitShare
Sharing is available for the object.



## CoverageBenefitItem

Specific service covered by the insurance plan. This object is available in API version 53.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

BenefitCategory                          Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the category this benefit is in.

<!-- page:1189 -->

AFLS Overview                                                                                    Patient Engagement




## Field                   Details

CodeSetServiceTypeId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of a Code Set Service Type in the Code Set object.
This is a relationship field.
Relationship Name
CodeSetServiceType
Relationship Type
Lookup
Refers To
CodeSet

CoverageBenefitId       Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the covered benefit this item belongs to.
This is a relationship field.
Relationship Name
CoverageBenefit
Relationship Type
Lookup
Refers To
CoverageBenefit

CoverageLevel           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Description of the level of coverage provided by this item.

DoesDeductibleApply     Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the benefit item requires a prior expenditure by the patient.

<!-- page:1190 -->

AFLS Overview                                                                                      Patient Engagement




## Field                   Details

The default value is 'false'.

FrequencyType           Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The frequency type of the coverage benefit item associated with the home healthcare visit.
Possible values are:
- Daily
- Fortnightly
- Monthly
- Quarterly
- Weekly
- Yearly
This field is available in API version 66.0 and later with the Home Health add-on license.

InNetworkCoverage       Type
textarea
Properties
Create, Nillable, Update
Description
Description of the in network coverage provided by this item.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the benefit item is currently available.
The default value is 'false'.

IsInPlanNetwork         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the benefit is available only in-network (true) or both in-network and
out-of-network (false).
The default value is 'false'.

<!-- page:1191 -->

AFLS Overview                                                                                          Patient Engagement




## Field                      Details

IsPreauthorizationRequired Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Specifies whether the service must be approved before use.
The default value is 'false'.

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

MemberId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the member receiving this benefit item.
This is a relationship field.
Relationship Name
Member
Relationship Type
Lookup
Refers To
Account

Name                       Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update

<!-- page:1192 -->

AFLS Overview                                                                 Patient Engagement



Field                   Details


## Description

Name of this coverage benefit item.

Notes                   Type
textarea
Properties
Create, Nillable, Update
Description
Additional information about this coverage benefit item.

OutofNetworkCoverage    Type
textarea
Properties
Create, Nillable, Update
Description
Description of the coverage for non-preferred providers.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ServiceType             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of service this plan benefit item provides.

ServiceTypeCode         Type
string

<!-- page:1193 -->

AFLS Overview                                                                                 Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The code for the type of service this plan benefit item provides.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this coverage benefits item record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier of the CoverageBenefitItem in its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The ID of this coverage benefits item record on its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this coverage benefits item was last changed on the source system.

TimePeriod               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A description of the period this plan benefit item covers.

<!-- page:1194 -->

AFLS Overview                                                                                                            Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CoverageBenefitItemChangeEvent (API version 59.0)
Change events are available for the object.



## CoverageBenefitItemLimit

Allows you to track details associated with a specific benefit as it relates to expenditures, limits, coverage levels, eligibility, and exclusion.
This object is available in API version 53.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AllowedLimit                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Maximum amount that will be paid for the service.

AllowedQuantity                         Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The maximum quantity allowed of the coverage benefit item.
This field is available in API Version 62.0 and later.

AllowedQuantityUnitId                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measure for the allowed quantity of the coverage benefit item.
This field is a relationship field.
This field is available in API Version 62.0 and later.

<!-- page:1195 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details

Relationship Name
AllowedQuantityUnit
Refers To
UnitOfMeasure

AppliedLimit            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies whether the benefit has been claimed.

AppliedQuantity         Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The quantity of the coverage benefit item already used by the member.
This field is available in API Version 62.0 and later.

AppliedQuantityUnitId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of measure for the applied quantity of the coverage benefit item.
This field is a relationship field.
This field is available in API Version 62.0 and later.
Relationship Name
AppliedQuantityUnit
Refers To
UnitOfMeasure

CareLimitTypeId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies whether the limit is a required payment or excluded service.
This is a relationship field.

<!-- page:1196 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details

Relationship Name
CareLimitType
Relationship Type
Lookup
Refers To
CareLimitType

CoverageBenefitItemId   Type
reference
Properties
Create, Filter, Group, Sort
Description
Specific service covered by the insurance plan.
This is a relationship field.
Relationship Name
CoverageBenefitItem
Relationship Type
Lookup
Refers To
CoverageBenefitItem

CoverageLevel           Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Defines the persons eligible for the benefit item.
Possible values are:
- EmployeeSpouse—Employee & Spouse
- Family
- Individual

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this record.

LastViewedDate          Type
dateTime

<!-- page:1197 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

LimitNotes              Type
textarea
Properties
Create, Nillable, Update
Description
General information about the limit.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the coverage benefit item limit.

NetworkType             Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies whether the benefit refers to in-network providers or out-of-network providers.
Possible values are:
- In—In-network providers
- NA—Not applicable
- Out—Out-of-network providers
If the related CoverageBenefitItem record has an IsInPlanNetwork value of true,
NetworkType is typically In. If the related record has an IsInPlanNetwork value
of false, NetworkType can be any value.

PriorityOrder           Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
This limit's position in the sequence for calculating limits.

<!-- page:1198 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

TermType                                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of time period during which the benefit item is available.
Possible values are:
- Calendar Year
- Day
- Month
- Year to Date




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CoverageBenefitItemLimitChangeEvent (API version 60.0)
Change events are available for the object.



## HealthcareProvider

Represents business-level details about the healthcare organization or the practitioner.



## Special Access Rules

In AFLS, the HealthCareProvider object and its fields are used by the Account Management and the Segmentation feature
areas. This topic lists fields used in both features.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AbbreviatedName                         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1199 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details


## Description

Stores the abbreviated name of the Japanese healthcare organization (HCO) for INS-DOC
records. This field is available with the AFLS for Customer Engagement Add-on
license in API version 65.0 and later.

AccountId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Account that this healthcare provider is associated with. This field is a relationship field.
Relationship Name
Account
Refers To
Account

AssociatedSampleLimit   Type
textarea
Properties
Create, Nillable, Update
Description
The JSON comprising the list of Sample Limits for the HealthcareProvider record. This field
is available with the AFLS for Customer Engagement Add-on license in API
version 65.0 and later.

CaqhIdentifier          Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
This field is unique within your organization. This field is available with the Life Sciences
Cloud for Customer Engagement Add-on license in API version 65.0 and later.

DataChangeComments      Type
textarea
Properties
Create, Filter, Nillable, Sort, Update
Description
Captures comments explaining the reasons or context for changes made to the data. This
field is available with the AFLS for Customer Engagement Add-on license in
API version 65.0 and later.

<!-- page:1200 -->

AFLS Overview                                                                                      Patient Engagement




## Field                    Details

DoesDispenseMedication   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the account dispenses medication.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

EffectiveFrom            Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date from which the provider becomes effective.

EffectiveTo              Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date from which the provider is no longer effective.

EhrSystem                Type
textarea
Properties
Create, Nillable, Update
Description
Name of the EHR system used at this facility or organization.

HasCarrierContract       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the provider’s contract follows a CMS model MA contract amendment,
based on Centers for Medicare and Medicaid Services (CMS) guidelines.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

<!-- page:1201 -->

AFLS Overview                                                                                      Patient Engagement




## Field                   Details

HasSalesDataRestriction Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether access to the sales data about the healthcare provider is restricted.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

InitialStartDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date when the facility first became operational or the practitioner first began
practicing.

IsNotSearchable         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the provider is excluded from search results.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

IsPrivacyLawEnabled     Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the privacy law regulations are enabled.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

IsSpeaker               Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the provider is designated as a speaker for engagement.

<!-- page:1202 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

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
Create, Filter, Group, Sort, Update
Description
Name of the provider.

OperatingCountryCode    Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the country code of the country to which the account belongs.
Possible values are:
- US
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1203 -->

AFLS Overview                                                                                         Patient Engagement



Field                      Details


## Description

The ID of the user who owns this record. This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

ParentOrganizationAccountId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the ID of the parent account, used to establish the account hierarchy. This field is
a relationship field. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.
Relationship Name
ParentOrganizationAccount
Refers To
Account

PhoneticName               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores the Japanese phonetic name, applicable to both HCP and HCO, which is used for
sorting and text-based searches. This field is available with the AFLS for
Customer Engagement Add-on license in API version 65.0 and later.

PhoneticName2              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores the Japanese phonetic name, applicable to both HCP and HCO, which is used for
sorting and text-based searches. This field is available with the AFLS for
Customer Engagement Add-on license in API version 65.0 and later.

PractitionerId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1204 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details


## Description

The practitioner that this healthcare provider record is associated with. This field is a
relationship field.
Relationship Name
Practitioner
Refers To
Contact

ProfessionalDesignation Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the professional designation of the healthcare professional. This field is available
with the AFLS for Customer Engagement Add-on license in API version 65.0
and later.

ProfessionalTitle       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the professional title of the healthcare professional. This field is available with the
AFLS for Customer Engagement Add-on license in API version 65.0 and later.

ProviderClass           Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The class of facility, such as an IPA, medical group, or solo practitioner.
Possible values are:
- IPA
- Medical Group
- Solo Practitioner

ProviderFullName        Type
string
Properties
Filter, Group, Nillable, Sort

<!-- page:1205 -->

AFLS Overview                                                                                          Patient Engagement



Field                   Details


## Description

The full name of the healthcare provider. This field is available with the AFLS
for Customer Engagement Add-on license in API version 65.0 and later.

ProviderPhotoId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The Content Document file that is a photo of the Healthcare Provider. This field is a relationship
field.
Relationship Name
ProviderPhoto
Relationship Type
Lookup
Refers To
ContentDocument

ProviderType            Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Type of provider or facility. For example, pharmacist or ambulatory care facility.
Possible values are:
- Ambulatory Care
- Dentist
- Hospital
- Laboratory
- Medical Doctor
- Pharmacist
- Pharmacy

ReferredByContactId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the provider who originated the referral. This field is a relationship field. This field
is available with the AFLS for Customer Engagement Add-on license in API
version 65.0 and later.

<!-- page:1206 -->

AFLS Overview                                                                                             Patient Engagement



Field                      Details

Relationship Name
ReferredByContact
Refers To
Contact

RelatedHealthcareProviderId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the HCP account associated with the INS-DOC. This field is a relationship field. This
field is available with the AFLS for Customer Engagement Add-on license in
API version 65.0 and later.
Relationship Name
RelatedHealthcareProvider
Refers To
HealthcareProvider

RelatedUserId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The User record that relates to the Healthcare Provider record. This field is a relationship field.
Relationship Name
RelatedUser
Relationship Type
Lookup
Refers To
User

SalesDataRstrcEffectiveDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date when the sales data restriction becomes effective. This field is available
with the AFLS for Customer Engagement Add-on license in API version 65.0
and later.

SourceSystem               Type
string

<!-- page:1207 -->

AFLS Overview                                                                                     Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The system from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the system from which the record was sourced. This field is unique within your
organization

SourceSystemModifiedDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date when the record was last updated in the source system

Status                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the provider.
Possible values are:
- Active
- Inactive
- Pending
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

TerminationDate          Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Termination date for this provider.

<!-- page:1208 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                    Details

TerminationReason                        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reason for termination.

TotalLicensedBeds                        Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Total number of licensed beds at this facility, if applicable.

WrittenName                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores the Chines character name of the organization, applicable only to healthcare
professionals (HCPs), which is required for INS-DOC records. This field is available with the
AFLS for Customer Engagement Add-on license in API version 65.0 and later.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthcareProviderChangeEvent (API version 59.0)
Change events are available for the object.
HealthcareProviderFeed
Feed tracking is available for the object.
HealthcareProviderHistory
History is available for tracked fields of the object.
HealthcareProviderOwnerSharingRule
Sharing rules are available for the object.
HealthcareProviderShare
Sharing is available for the object.



## Medication

Represents detailed information about different medications. This object is available in API version 51.0 and later.

<!-- page:1209 -->

AFLS Overview                                                                                        Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                     Details

BatchNumber               Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the batch number of the medication.

BrandNameAlternative      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The branded alternative for a generic medication. This field is available in API version 56.0
and later.

ExpirationDateTime        Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Specifies the expiration date of the medication.

LastReferencedDate        Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate            Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

<!-- page:1210 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

ManufacturerId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The company that makes the medicine.
Referenced Objects
- Account

MedicationCategory      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The category of the medication. This field is available in API version 56.0 and later.
Possible values are:
- Branded Product
- Generic Product
- Innovator Product
- Therapeutic Moeity

MedicationCodeId        Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The system-defined code that identifies a medication.
Referenced Objects
- CodeSetBundle

MedicationFormId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code for the dosage form this medication is manufactured in.
Referenced Objects
- CodeSetBundle

<!-- page:1211 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the medication.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The user who owns the medication record.

ProductId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The product that's associated with the medication.
This field is a relationship field.
This field is available in API version 61.0 and later with the Manage Financial Assistance
Program permission set.


QuantityDenominator     Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The total volume of the medication contained in the packaged product.

QuantityNumerator       Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The total amount of the medication contained in the packaged product.

QuantityUnitId          Type
reference

<!-- page:1212 -->

AFLS Overview                                                                            Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The measurement unit for the quantity.
Referenced Objects
- UnitOfMeasure

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this record on its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed on the source system.

Status                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the medication.
Possible values are:
- Active
- Entered in error
- Inactive

<!-- page:1213 -->

AFLS Overview                                                                                                          Patient Engagement



## Additional Information for Medication in Other Objects

In addition to creating a record using these fields, you can add more details to your Medication record by creating records in certain
other objects, and referencing your Medication record as the parent record. Here’s the list of objects you can associate to Medication in
this way, the type of information they add, and the field they use to reference Medication.

Object                                          Type of Information                             Reference Field
Identifier                                      Associates an identifier value to the           ParentRecordId
medication record.

MedicinalIngredient                             Adds information about the different            ParentRecordId
ingredients used in the medication.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MedicationChangeEvent (API version 59.0)
Change events are available for the object.



## MedicinalIngredient

MedicinalIngredient is a child object of Medication that represents substances or drugs that are used as ingredients in the medication.
This object is available in API version 52.0 and later.



## MedicationRequest

Represents a request or order for the supply of medication, along with information about how it should be administered. This object is
available in API version 51.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

AllowedSubstitutionTypeCodeId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the type of substitution that's allowed. This field
can’t be used if the CanSubstitute field is set to true.
Referenced Objects
- CodeSetBundle

<!-- page:1214 -->

AFLS Overview                                                                                      Patient Engagement




## Field                   Details

CanSubstitute           Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether substitution is acceptable. If the value for this field is set to true, then
the AllowedSubstitutionTypeCodeId field can’t be selected.

CarePlanId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The care plan related to this medication request.
This field is a relationship field.
Relationship Name
CarePlan
Relationship Type
Lookup
Referenced Objects
- CarePlan

CaseId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The case associated with the medication request.
This field is a relationship field.
Relationship Name
Case
Refers To
Case

ClinicalEncounterId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The clinical encounter related to the medication request.

<!-- page:1215 -->

AFLS Overview                                                                           Patient Engagement



Field                    Details

Referenced Objects
- ClinicalEncounter

ClinicalServiceRequestId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the service request related to the medication request.
Referenced Objects
- ClinicalServiceRequest

DispenseInterval         Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The minimum interval required between refills.

DispenseIntervalUnitId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit for that interval.
Referenced Objects
- UnitOfMeasure

DispenserId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who provides the medication.
Referenced Objects
- Account

FillDurationUnitId       Type
reference

<!-- page:1216 -->

AFLS Overview                                                                  Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The unit for the fill duration.
Referenced Objects
- UnitOfMeasure

FillQuantityUnitId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The unit of the fill quantity.
Referenced Objects
- UnitOfMeasure

InitialFillDuration      Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The length of time the first fill is expected to last.

InitialFillQuantity      Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The quantity to be filled in the first dispense.

IsIgnored                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the request should be ignored.

IsSecondaryInformation   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1217 -->

AFLS Overview                                                                                             Patient Engagement



Field                            Details


## Description

Indicates whether the request is based on information from a secondary source instead of
a primary one. If this field is set to true, then the SecondarySourceId field can’t be
selected.

LastReferencedDate               Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate                   Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

MedicationAdministrationContextId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the setting in which the medication is administered.
Referenced Objects
- CodeSetBundle

MedicationCodeId                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the medication requested. A record can select either
a MedicationId or a MedicationCodeId, but not both.
Referenced Objects
- CodeSetBundle

MedicationId                     Type
reference

<!-- page:1218 -->

AFLS Overview                                                                                    Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Lookup to the medication record for the medicine requested. A record can select either a
MedicationId or a MedicationCodeId, but not both.
Referenced Objects
- Medication

MedicationRequestGroupId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A shared identifier common to all medication requests that were authorized more or less
simultaneously by a single author.
Referenced Objects
- Identifier

Name                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the medication request record.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The owner of the medication request record. Available in API version 56.0 and later.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Referenced Objects
- Group
- User

<!-- page:1219 -->

AFLS Overview                                                                                     Patient Engagement




## Field                   Details

PatientId               Type
Master-detail reference
Properties
Create, Filter, Group, Sort
Description
The person who needs the medicine.
Referenced Objects
- Account


## PerformerId             Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who administers the medicine.
Referenced Objects
- Account
- HealthcareProvider
- CareRegisteredDevice

PerformerTypeId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that represents the performer's role. For instance, the cardiologist,
neurosurgeon, and so on.
Referenced Objects
- CodeSetBundle

PrescribedDate          Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and optionally the time when the prescription was initially written or authored on.

PrescriptionPeriodEnd   Type
dateTime

<!-- page:1220 -->

AFLS Overview                                                         Patient Engagement



Field                    Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The end date for the prescription's validity.

PrescriptionPeriodStart Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The start date for the prescription's validity.

PreviousPrescriptionId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference to previous prescriptions.
Referenced Objects
- MedicationRequest

Priority                 Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the priority of the request.
Possible values are:
- ASAP
- Routine
- Stat
- Urgent

ReasonCodeId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The code for why the medicine was requested.

<!-- page:1221 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details

Referenced Objects
- CodeSetBundle


## ReasonReferenceId       Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference to the condition or observation that warranted this medicine.
Referenced Objects
- HealthCondition
- CareObservation

RefillDuration          Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
How long the refill is expected to last.

RefillQuantity          Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
The quantity in each refill.

RefillsAllowed          Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of refills that are allowed.

RelatedRequestId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
A plan or request that is fulfilled in whole or in part by this medication request.

<!-- page:1222 -->

AFLS Overview                                                                                     Patient Engagement



Field                    Details

Referenced Objects
- MedicationRequest


## RequesterId              Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who raised the request.
Referenced Objects
- Account
- HealthcareProvider
- CareRegisteredDevice


## SecondarySourceId        Type

Polymorphic reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the person who gave the information for the request. This field can’t be selected
if the IsSecondarySource field is set to true.
Referenced Objects
- Account
- HealthcareProvider

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this record in its source system.

<!-- page:1223 -->

AFLS Overview                                                                            Patient Engagement




## Field                    Details

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this item was last changed in the source system.

Status                   Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The status of the medication request.
Possible values are:
- Active
- Cancelled
- Completed
- Draft
- Entered-in-Error
- On-Hold
- Stopped
- Unknown

StatusReasonCodeId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system-defined code that specifies the reason for the status.
Referenced Objects
- CodeSetBundle

SubstitutionReasonCodeId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies why a substitution is required.
Referenced Objects
- CodeSetBundle

<!-- page:1224 -->

AFLS Overview                                                                                                   Patient Engagement




## Field                                 Details

TherapyDuration                       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the overall pattern of the administration of the medication to the patient.
For instance, Continuous, Acute, Seasonal.
Possible values are:
- Continuous
- Seasonal
- Short Term

Type                                  Type
picklist
Properties
Create, Filter, Group, Sort, Update
Description
The type of the request.
Possible values are:
- Filler Order
- Instance Order
- Option
- Order
- Original Order
- Plan
- Proposal
- Reflex Order




## Additional Information for MedicationRequest in Other Objects

In addition to creating a record using these fields, you can add more details to your MedicationRequest record by creating records in
certain other objects, and referencing your MedicationRequest record as the parent record. Here’s the list of objects you can associate
to MedicationRequest in this way, the type of information they add, and the field they use to reference MedicationRequest.

Object                                       Type of Information                           Reference Field
Identifier                                   Associates an identifier value to the         ParentRecordId
medication request.

PatientMedicationDosage                      Associates dosage-related information for     ParentRecordId
the medication in the medication request
record.

<!-- page:1225 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MedicationRequestChangeEvent (API version 59.0)
Change events are available for the object.
MedicationRequestFeed
Feed tracking is available for the object.
MedicationRequestHistory
History is available for tracked fields of the object.
MedicationRequestOwnerSharingRule (API version 56.0)
Sharing rules are available for the object.
MedicationRequestShare (API version 56.0)
Sharing is available for the object.



## MemberPlan

Represents details about the insurance coverage for a member or subscriber.

Note: The primary member on the plan is called the subscriber. The other members are dependents.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                          Details

Affiliation                                         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
An affiliation to a government service, such as the army or navy.

EffectiveFrom                                       Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this member plan is effective.

EffectiveTo                                         Type
date

<!-- page:1226 -->

AFLS Overview                                                                          Patient Engagement



Field Name              Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this member plan ceases to be effective.

ExternalIDentifier      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The identifier used to identify the record outside the Salesforce org.

GroupNumber             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The group number or policy number of the primary member.

IssuerNumber            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reference number for the issuer of the plan.

LastReferencedDate      Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastVerification        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this plan was last verified.

<!-- page:1227 -->

AFLS Overview                                                                         Patient Engagement




## Field Name              Details

LastViewedDate          Type
datetime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

MemberId                Type
reference
Properties
Create, Filter, Group, Sort
Description
The ID of the member’s record.

MemberNumber            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The member’s reference number for this plan.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The name by which the member knows this plan.

Notes                   Type
textarea
Properties
Create, Nillable, Update
Description
Notes about this member plan.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1228 -->

AFLS Overview                                                                             Patient Engagement



Field Name                 Details


## Description

The ID of the user who owns this record.

PayerId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the payer’s Account object record.

PayerNetworkId             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The payer insurance plan or network that is associated with the patient. This field
is a relationship field.
Relationship Name
PayerNetwork
Relationship Type
Lookup
Refers To
HealthcarePayerNetwork

PlanId                     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Lookup of the Purchaser Plan ID.

PrimaryCarePhysician       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the physician providing primary care under this plan.

PrimarySecondaryTertiary   Type
picklist

<!-- page:1229 -->

AFLS Overview                                                                            Patient Engagement



Field Name                 Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Whether this plan is the primary, secondary, or tertiary plan.

RelationshipToSubscriber   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The relationship of this member to the plan’s subscriber. Valid options are:
- Self
- Spouse
- Child
- Unknown
- Other Relationship

SourceSystem               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this plan record came from.

SourceSystemIdentifier     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this plan record on its source system.

SourceSystemModified       Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this plan record was last changed on the source system.

Status                     Type
picklist

<!-- page:1230 -->

AFLS Overview                                                                                                          Patient Engagement



Field Name                                          Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether the plan is active.

SubscriberId                                        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the subscriber’s record.

VerificationStatus                                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
The status of the plan’s verification. Valid options are:
- Active - Verified
- Rejected
- Not Checked
- Unknown
- Inactive




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
MemberPlanChangeEvent (API version 57.0)
Change events are available for the object.
MemberPlanFeed
Feed tracking is available for the object.
MemberPlanHistory
History is available for tracked fields of the object.
MemberPlanOwnerSharingRule
Sharing rules are available for the object.
MemberPlanShare
Sharing is available for the object.

<!-- page:1231 -->

AFLS Overview                                                                                                    Patient Engagement




## PurchaserPlan

Represents the payer plan that a purchaser makes available to its members and members’ dependents.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field Name                                        Details

Affiliation                                       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
An affiliation to a government service, such as the army or navy.

EffectiveFrom                                     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this purchaser plan is effective.

EffectiveTo                                       Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this purchaser plan ceases to be effective.

IsVerifiable                                      Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether a benefits verification can be performed on this plan.

LineOfBusiness                                    Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1232 -->

AFLS Overview                                                                         Patient Engagement



Field Name              Details


## Description

The category of insurance policy that the purchaser plan belongs to. For example,
whether the plan is a group health insurance, individual health insurance, etc.
This field is available in API version 64.0 and later.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The name of this plan.

Notes                   Type
textarea
Properties
Create, Nillable, Update
Description
Notes about this payer.

Payer                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the payer’s Account object record.

PlanNumber              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The plan’s reference number.

PlanStatus              Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether the plan is active.

PlanType                Type
picklist

<!-- page:1233 -->

AFLS Overview                                                                      Patient Engagement



Field Name               Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The type of plan, with the following default options:
- PPO
- HMO
- Medicare
- Medicaid
- Workers Comp

ServiceType              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the service type offered by this plan.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system this plan record came from.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of this plan record on its source system.

SourceSystemModified     Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date on which this plan record was last changed on the source system.

SponsorType              Type
picklist

<!-- page:1234 -->

AFLS Overview                                                                                                       Patient Engagement



Field Name                                           Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The type of sponsor for the plan. For example, if it's self-sponsored,
government-sponsored, or company-sponsored.
This field is available in API version 64.0 and later.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
PurchaserPlanFeed
Feed tracking is available for the object.
PurchaserPlanHistory
History is available for tracked fields of the object.
PurchaserPlanOwnerSharingRule
Sharing rules are available for the object.
PurchaserPlanShare
Sharing is available for the object.
PurchaserPlanChangeEvent
Change data capture is available for this object.



## UnitOfMeasure

Represents the unit of measures for care metrics and care observations. This object is available in API version 49.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

Description                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of this unit of measure.

ConversionFactor                         Type
double

<!-- page:1235 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
The factor or rate that's used to convert this unit of measurement to the base unit.

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
Create, Filter, Group, idLookup, Sort, Update
Description
The name of this unit of measure.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

Type                    Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The type of the unit of measure. For example, weight, distance, period.

<!-- page:1236 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

Sequence                                Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The sequence number assigned to the unit of measure.

Status                                  Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the status of the unit of measure.
Possible values are:
- Active
- Draft
- Inactive

UnitCode                                Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The code for this unit of measure. For example, mm[Hg], mcg/mL., kgs, lbs.

UnitOfMeasureClassId                    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The class associated with the unit of measurement.
This field is a relationship field.
Relationship Name
UnitOfMeasureClass
Refers To
UnitOfMeasureClass




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.

<!-- page:1237 -->

AFLS Overview                                                                                                    Patient Engagement



UnitOfMeasureChangeEvent (API version 59.0)
Change events are available for the object.
UnitOfMeasureOwnerSharingRule
Sharing rules are available for the object.
UnitOfMeasureShare
Sharing is available for the object.



## Provider Relationship Management

Use the Provider Relationship Management data model along with standard Salesforce objects to manage your provider relationships.
The Provider Relationship Management data model represents the practitioners, facilities, physician relationships, specialties, and
organizational hierarchy for your network of providers.
- Physician and organization affiliations, such as hospitals where the physician has attending or admitting privileges
- Practicing locations and specialties offered by a practitioner at a location
- Practice administrators for healthcare facilities
- Operating hours for facilities or practitioner's hours at a particular facility
- Specialty and taxonomy attributes of a practitioner or facility
- National Provider Identifier (NPI) and other provider identifiers
- Insurance payer and plan networks
- Practitioner license, education, board certifications, awards, and accreditation information
Provider information is also represented using existing standard Salesforce objects in addition to objects only available through Health
Cloud and AFLS.
- Account: Represents a healthcare facility or location. The account hierarchy represents the way the healthcare system is organized.
Other companies, like billing companies for physicians or healthcare facilities are represented as accounts and connected to healthcare
facilities or physicians using account-account or account-contact relationships.
- Contact: Represents physicians and other licensed practitioners. Other professionals, such as nurses are represented using a contact
record and connected to the physician using the contact-contact relationships.
- Account Contact Relationship: Represents physician and health system business affiliations, such as attending and admitting privileges.
- Person Education: Represents the educational details of a physician or licensed practitioner.
- Identity Document: Represents all identifiers for a practitioner or facility, other than the NPI.
- Location: Represents more details of a healthcare location, such as a clinic.
- Associated Location: Represents the junction between an account and a location.
- Operating Hours: Represents the hours that a facility is open.
- Time Slot: Represents a range of time on a specified day of the week during which healthcare work can be performed. Operating
hours consist of one or more time slots.

<!-- page:1238 -->

AFLS Overview                                                                                                      Patient Engagement



Provider Relationship Management




For more details and a larger image, visit the Data Model Gallery.



## Use Composite API Requests to Import Data for Provider Relationship Cards

If you’re setting up provider relationship cards to show practitioner information, you can use Composite API requests to create and
link multiple records.
Accreditation
Represents the professional accreditations of a facility. For example, a joint commission accredits a facility as a general acute care
hospital.
Award
Represents a person's or organization's professional awards.
BoardCertification
Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.
BusinessLicense
Represents the licenses of a party role like healthcare provider or producer.
CareProviderAdverseAction
Captures adverse actions against the provider, such as malpractice lawsuits or revoked licences. This object is available in API version
47.0 and later.
CareProviderFacilitySpecialty
Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in
both spine and neuro may provide spine services at one location and neuro services at another.

<!-- page:1239 -->

AFLS Overview                                                                                                         Patient Engagement



## CareProviderSearchableField

This object holds denormalized data from certain fields in the Provider Relationship Management data model. Provider search APIs
query this object instead of multiple objects, which improves search performance. This object is available in API version 47.0 and
later.
CareProviderSearchConfig
Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made
available in the search object (target). This object is available in API version 48.0 and later.
CareService
Represents a healthcare treatment, service, or procedure offered by a provider, practitioner, or facility. This object is available in API
version 59.0 and later.
CareSpecialty
Represents a listing of provider specialty codes and descriptions. For example, 02 - Physician/General Surgery.
CareSpecialtyTaxonomy
The junction object between CareSpecialty and CareTaxonomy. This object is available in API version 52.0 and later.
CareTaxonomy
Represents a static list of taxonomy codes.
HealthcareFacilityNetwork
Represents a junction object identifying the insurance network that a location or business entity is a part of. Network participation
records are also stored in this object.
HealthcarePayerNetwork
Represents an insurance network group. For example, an insurance company’s exclusive provider organization (EPO) plans.
HealthcarePractitionerFacility
Represents the different locations in which a practitioner provides services.
HealthcareProvider
Represents business-level details about the healthcare organization or the practitioner.
HealthcareProviderNpi
Represents identifiers from the National Provider Identifier that are assigned to every facility and licensed practitioner in the United
States. Also includes NPI assigned date, primary mailing address on file, and so on.
HealthcareProviderService
Represents a junction object between a HealthcareService and a HealthcareProvider or HealthcareFacility or
HealthcarePractitionerFacility. This object is available in API version 59.0 and later.
HealthcareProviderSpecialty
Represents specialties for a practitioner or a service provider organization. A provider can have multiple specialties such as
anesthesiology and cardiovascular.
HealthcareProviderTaxonomy
Represents taxonomy or subspecialty codes for a practitioner or facility. A provider or facility can have multiple taxonomies.
HealthcareServiceDetail
Represents a junction object between a CareService and a CodeSetBundle. For example, this object links a healthcare service such
as physical therapy to a set of related codes. This object is available in API version 59.0 and later.

<!-- page:1240 -->

AFLS Overview                                                                                                         Patient Engagement



## HlthCareProvTreatedCondition

Represents a junction object between a healthcare provider, facility, or practitioner and a problem definition that's related to a health
condition, such as disease or illness. For example, this object links a doctor to the treatment of diabetes, or a facility to the treatment
of spinal injuries. This object is available in API version 59.0 and later.
PersonEducation
Represents information about professional education for a person in a provider role.
PersonEmployment
Represents information about a person’s employment.
ProviderSearchSyncLog
Represents a log with information about the provider search data sync status of a healthcare provider record. This object is available
in API version 49.0 and later.



## Use Composite API Requests to Import Data for Provider Relationship Cards

If you’re setting up provider relationship cards to show practitioner information, you can use Composite API requests to create and link
multiple records.



## Usage

You can create records individually by using the Lightning Platform SOAP API or REST API. Or you can use the Composite resource in
REST API to create and link multiple records with a single API call. This approach lets you create 200 records per call.



## Example

Let’s say we want to add healthcare provider Dr. Scott Kaplan to your records. This example shows how to use a single API call to create
Account, Contact, HealthcareProvider, PersonEducation, HealthcareProviderNpi,
HealthcarePractitionerFacility, HealthcareProviderSpeciality, HealthcareFacilityNetwork,
and HealthcareProviderTaxonomy records with Dr. Scott Kaplan's data. It also shows how to use a composite request to link
records using Dr. Kaplan’s contactId as the practitionerId.
In this example, we assume that there are two Specialty records with SpecialtyCode Neurology and Cardiology, a
PayerNetwork record with code United Healthcare, and a Taxonomy record with TaxonomyCode Critical
Care. Setting allOrNone to True rolls back your request if a single record creation fails.
Execute this example using a composite request:

curl https://yourInstance.salesforce.com/services/data/v47.0/composite/ -H "Authorization:
Bearer token” -H "Content-Type: application/json" -d "@composite.json"

Example request body of the composite.json file.
{
"allOrNone" : true,
"compositeRequest" : [
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/Account",
"referenceId" : "scottKaplanAccount",
"body" : { "Name" : "Dr. Scott Kaplan" }
},
{
"method" : "POST",

<!-- page:1241 -->

AFLS Overview                                                        Patient Engagement



"url" : "/services/data/v47.0/sobjects/Contact",
"referenceId" : "scottKaplanContact",
"body" : {
"FirstName" : "Scott",
"LastName" : "Kaplan",
"AccountId" : "@{scottKaplanAccount.id}"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/HealthcareProvider",
"referenceId" : "scottKaplanProvider",
"body" : { "Name" : "Dr. Scott Kaplan",
"PractitionerId" : "@{scottKaplanContact.id}"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/PersonEducation",
"referenceId" : "scottKaplanPersonEducation",
"body" : {
"Name": "Dr. Scott Kaplan",
"ContactId" : "@{scottKaplanContact.id}"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/HealthcareProviderNpi",
"referenceId" : "scottKaplanNpi",
"body" : {
"Name": "Dr. Scott Kaplan",
"Npi" : "1558444601",
"PractitionerId" : "@{scottKaplanContact.id}",
"NpiType" : "Individual"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/HealthcarePractitionerFacility",
"referenceId" : "scottKaplanPractitionerFacility",
"body" : {
"Name": "Palo Alto Medical Foundation",
"PractitionerId" : "@{scottKaplanContact.id}"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/HealthcareProviderSpecialty",
"referenceId" : "hcProviderSpecialtyRef1",
"body" : {
"Name": "Cardiology",
"Specialty" : {
"SpecialtyCode" : "Cardiology"
},

<!-- page:1242 -->

AFLS Overview                                                              Patient Engagement



"PractitionerId" : "@{scottKaplanContact.id}"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/HealthcareProviderSpecialty",
"referenceId" : "scottKaplanSpeciality2",
"body" : {
"Name": "Neurology",
"Specialty" : {
"SpecialtyCode" : "Neurology"
},
"PractitionerId" : "@{scottKaplanContact.id}"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/HealthcareFacilityNetwork",
"referenceId" : "scottKaplanFacilityNetwork",
"body" : {
"Name": "United Healthcare",
"PayerNetwork" : {
"Code" : "United Healthcare"
},
"PractitionerId" : "@{scottKaplanContact.id}"
}
},
{
"method" : "POST",
"url" : "/services/data/v47.0/sobjects/HealthcareProviderTaxonomy",
"referenceId" : "scottKaplanTaxonomy",
"body" : {
"Name": "Critical care",
"Taxonomy" : {
"TaxonomyCode" : "Critical Care"
},
"PractitionerId" : "@{scottKaplanContact.id}"
}
}

]
}

Here’s a sample response:


{
"compositeResponse": [{
"body": {
"id": "001RM000004MkdJYAS",
"success": true,
"errors": []
},
"httpHeaders": {
"Location": "/services/data/v47.0/sobjects/Account/001RM000004MkdJYAS"

<!-- page:1243 -->

AFLS Overview                                                                                                          Patient Engagement



},
"httpStatusCode": 201,
"referenceId": "scottKaplanAccount"
}, {
"body": {
"id": "003RM000006Ev2AYAS",
"success": true,
"errors": []
},
"httpHeaders": {
"Location": "/services/data/v47.0/sobjects/Contact/003RM000006Ev2AYAS"
},
"httpStatusCode": 201,
"referenceId": "scottKaplanContact"
}, {
"body": {
"id": "0bYRM0000004CAG2A2",
"success": true,
"errors": []
},
"httpHeaders": {
"Location":
"/services/data/v47.0/sobjects/HealthcareFacilityNetwork/0bYRM0000004CAG2A2"
},
"httpStatusCode": 201,
"referenceId": "scottKaplanFacilityNetwork"
}, {
"body": {
"id": "0bPRM0000004CAB2A2",
"success": true,
"errors": []
},
"httpHeaders": {
"Location":
"/services/data/v47.0/sobjects/HealthcareProviderTaxonomy/0bPRM0000004CAB2A2"
},
"httpStatusCode": 201,
"referenceId": "scottKaplanTaxonomy"
}]
}


In this example, Account ID 001RM000004MkdJYAS and Contact ID 0bYRM0000004CAG2A2 were created on execution. The
same Contact ID is used as the PractitionerId where applicable.



## Accreditation

Represents the professional accreditations of a facility. For example, a joint commission accredits a facility as a general acute care hospital.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()

<!-- page:1244 -->

AFLS Overview                                                                                  Patient Engagement


Fields


## Field                   Details

AccountId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Healthcare facility (Account) that this accreditation is associated with.

AccreditationRating     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Rating system used by the accrediting body.

AccreditingBody         Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The organization that provided the accreditation.

EffectiveFrom           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this accreditation is effective.

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this accreditation is no longer effective.

HealthcareFacilityId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1245 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The healthcare facility associated with the accreditation.
This field is available in API version 62.0 and later when Site Management (Pilot) is enabled.
This field is a relationship field.
Relationship Name
HealthcareFacility
Refers To
HealthcareFacility

LastFullSurveyDate      Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Date of the last full survey completed by accrediting body.

LastOnsiteSurveyDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Date that accrediting body was last onsite.

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

<!-- page:1246 -->

AFLS Overview                                                                  Patient Engagement



Field                    Details


## Properties

Create, Filter, Group, Sort, Update
Description
Name of the accreditation.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PractitionerId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Practitioner that this accreditation is associated with.

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
Create, Filter, Group, Nillable, Sort, Update
Description
Accreditation status.

SubType                  Type
picklist

<!-- page:1247 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Subtype of the accreditation.

Type                                     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Type of accreditation.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
AccreditationChangeEvent (API version 60.0)
Change events are available for the object.
AccreditationFeed
Feed tracking is available for the object.
AccreditationHistory
History is available for tracked fields of the object.
AccreditationOwnerSharingRule
Sharing rules are available for the object.
AccreditationShare
Sharing is available for the object.



## Award

Represents a person's or organization's professional awards.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(),
query(), retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

AccountId                                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1248 -->

AFLS Overview                                                                  Patient Engagement



Field                   Details


## Description

ID of the organization receiving the award.
This field is a relationship field.
Relationship Name
Account
Relationship Type
Lookup
Refers To
Account

AwardDate               Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Date award was received.

AwardedBy               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the issuing organization.

ContactId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Person who received the award and is listed as a contact.
This field is a relationship field.
Relationship Name
Contact
Relationship Type
Lookup
Refers To
Contact

HealthcareProviderId    Type
reference

<!-- page:1249 -->

AFLS Overview                                                                     Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Healthcare provider that this award is associated with.
This field is a relationship field.
Relationship Name
HealthcareProvider
Relationship Type
Lookup
Refers To
HealthcareProvider

Identifier              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Issuing organization's identifier for the award recipient.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

<!-- page:1250 -->

AFLS Overview                                                                         Patient Engagement




## Field                   Details

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Award name.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
ID of the user who owns this record.
This field is a relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Status                  Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Award status. Example values:
- Inactive
- Revoked
- Draft
- Verified

UserId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the person who received the award and is listed as a user.
This field is a relationship field.

<!-- page:1251 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                   Details

Relationship Name
User
Relationship Type
Lookup
Refers To
User

VerificationStatus                      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Current award status. Example values:
- Authorized
- Pending
- Unverified

VerifiedDate                            Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Award was validated on this date.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
AwardChangeEvent (API version 61.0)
Change events are available for the object.
AwardFeed on page 1429
Feed tracking is available for the object.
AwardHistory on page 1434
History is available for tracked fields of the object.
AwardOwnerSharingRule on page 1436
Sharing rules are available for the object.
AwardShare on page 1438
Sharing is available for the object.



## BoardCertification

Represents the practitioner's board certifications such as being board-certified in cardiology and cardiovascular disease.

<!-- page:1252 -->

AFLS Overview                                                                                                       Patient Engagement



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                  Details

AccountId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Account that this healthcare provider is associated with.

BoardName                              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the organization providing the board certification.

CertificationType                      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Type of certification.

CurrentCertificationDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Date of most recent board certification.

EffectiveFrom                          Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this certification is effective.

<!-- page:1253 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this certification is no longer effective.

ExpirationDate          Type
date
Properties
Create, Filter, Group, Nillable, Update
Description
Expiration date of the board certification.

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
Create, Filter, Group, Sort, Update
Description
Name of the provider.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1254 -->

AFLS Overview                                                                  Patient Engagement



Field                    Details


## Description

The ID of the user who owns this record.

PractitionerId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Practitioner that this certification is associated with.

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
Create, Filter, Group, Nillable, Sort, Update
Description
Status of the certification.

TerminationDate          Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Termination date for this provider.

TerminationReason        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1255 -->

AFLS Overview                                                                                                         Patient Engagement



Field                                    Details


## Description

Reason for termination.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
BoardCertificationChangeEvent (API version 60.0)
Change events are available for the object.
BoardCertificationFeed
Feed tracking is available for the object.
BoardCertificationHistory
History is available for tracked fields of the object.
BoardCertificationOwnerSharingRule
Sharing rules are available for the object.
BoardCertificationShare
Sharing is available for the object.



## BusinessLicense

Represents the licenses of a party role like healthcare provider or producer.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

AccountId                                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the organization holding the license. This field is a relationship field.
Relationship Name
Account
Refers To
Account

ComplianceScope                          Type
picklist

<!-- page:1256 -->

AFLS Overview                                                                                          Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The scope of compliance for the business license.
Possible values are:
- Address
- Jurisdiction
- StateDistributorLicense
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

ContactId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the person who holds the license and is listed as a contact. This field is a relationship
field.
Relationship Name
Contact
Refers To
Contact

ContactPointAddressId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the person who holds the license and is listed as a contact. This field is a relationship
field. This field is available with the AFLS for Customer Engagement Add-on
license in API version 65.0 and later.
Relationship Name
ContactPointAddress
Refers To
ContactPointAddress

Description             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1257 -->

AFLS Overview                                                                                           Patient Engagement



Field                   Details


## Description

Description of the license.

HealthCareFacilityId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID associated with the healthcare facility. This field is a relationship field. This field is
available with the AFLS for Customer Engagement Add-on license in API
version 65.0 and later.
Relationship Name
HealthCareFacility
Refers To
HealthcareFacility

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the Healthcare Provider who holds this license. This field is a relationship field. This
field is a lookup to HealthcareProvider.
Relationship Name
HealthcareProvider
Refers To
HealthcareProvider

Identifier              Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
Issuer's ID for the licensee. This field is unique within your organization.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the license is active (true) or not (false). The default value is false.

<!-- page:1258 -->

AFLS Overview                                                                                         Patient Engagement




## Field                   Details

IsLicenseValidated      Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the business license is valid (true) or not (false). The default value is
false. This field is a calculated field. This field is available with the AFLS for
Customer Engagement Add-on license in API version 65.0 and later.

IsPrimaryLicense        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates if the license is the primary license. The default value is false.

IssueDate               Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date the license or certification was issued.

Issuer                  Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
License issuer's name.

JurisdictionCountry     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Country where license is valid.

JurisdictionOther       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1259 -->

AFLS Overview                                                                                     Patient Engagement



Field                   Details


## Description

Name of other jurisdiction.

JurisdictionState       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
State where license is valid.

JurisdictionType        Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Jurisdiction for the license.
Possible values are:
- COUNTRY
- COUNTY
- PROVINCE
- STATE
The default value is STATE.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last referenced a record related to this record. This
field is available with the AFLS for Customer Engagement Add-on license in
API version 65.0 and later.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed. This field is
available with the AFLS for Customer Engagement Add-on license in API
version 65.0 and later.

<!-- page:1260 -->

AFLS Overview                                                                                          Patient Engagement




## Field                   Details

LicenseClass            Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The class that the distributor’s license belongs to.
Possible values are:
- APN - Advanced Practice Nurse
- LPN - Licensed Practical Nurse
- MD - Medical Doctor (MD)
- PC - Professional Counselor
- PT - Physical Therapist

LicenseNumber           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of the license.

LicenseValidatedIcon    Type
string
Properties
Filter, Group, Nillable, Sort
Description
The icon used to indicate the validation status of the business license. This field is a calculated
field. This field is available with the AFLS for Customer Engagement Add-on
license in API version 65.0 and later.

LineOfAuthority         Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The line of authority that the distributor is licensed for.
Possible values are:
- Accident & Health or Sickness
- Casualty
- Property

<!-- page:1261 -->

AFLS Overview                                                                                      Patient Engagement




## Field                   Details

This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
Name of the business or professional license.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record. This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

PeriodEnd               Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
License's expiration date.

PeriodStart             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
License's effective start date.

ResidenceStatus         Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Residence status of the producer.

<!-- page:1262 -->

AFLS Overview                                                                                     Patient Engagement



Field                    Details
Possible values are:
- Non-resident
- Resident
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

SourceSystemUpdateDate   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Represents the date when the record was last updated in the source system.

StateDstrLicenseCategory Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The State Distributor License category for the business license.
Possible values are:
- CategoryII—Category II
- CategoryIII—Category III
- LimitedCategoryII—Limited Category II
- LimitedCategoryIII—Limited Category III
This field is available with the AFLS for Customer Engagement Add-on license in
API version 65.0 and later.

Status                   Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Current status of the license.
Possible values are:
- Draft
- Inactive
- Revoked
- Verified
The default value is Inactive.

<!-- page:1263 -->

AFLS Overview                                                                                                         Patient Engagement




## Field                                    Details

UserId                                   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The person who holds the license and is listed as a user. This field is a relationship field.
Relationship Name
User
Refers To
User

VerificationStatus                       Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Current status for the license.
Possible values are:
- Authorized
The default value is Authorized.

VerifiedDate                             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
License was validated on this date.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
BusinessLicenseFeed
Feed tracking is available for the object.
BusinessLicenseHistory
History is available for tracked fields of the object.
BusinessLicenseOwnerSharingRule
Sharing rules are available for the object.
BusinessLicenseShare
Sharing is available for the object.

<!-- page:1264 -->

AFLS Overview                                                                                                       Patient Engagement




## CareProviderAdverseAction

Captures adverse actions against the provider, such as malpractice lawsuits or revoked licences. This object is available in API version
47.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                  Details

AccountId                              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The account this adverse action is associated with.

AccreditationId                        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The accreditation that might be affected by this adverse action.

ActionIssueDate                        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date when the adverse action was issued by the regulatory authority.

ActionType                             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The type of adverse action that is being taken.
Possible values are:
- AdministrativeDisciplinaryAction
- CourtOrder
- FelonyConviction

<!-- page:1265 -->

AFLS Overview                                                                              Patient Engagement




## Field                   Details

- MalpracticeJudgement
- MisdemeanorConviction
- ProbationaryLicense

BoardCertificationId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The board certification that might be affected by this adverse action

BusinessLicenseId       Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The business license that might be affected by this adverse action.

CaseNumber              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The case number associated with this adverse action.

CourtSentence           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The final sentence by the governing court, if any.

Description             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Summary of the adverse action.

EffectiveFrom           Type
date

<!-- page:1266 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this Adverse Action is effective.

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this Adverse Action is no longer effective.

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
HealthcareProvider that this Adverse Action is associated with

IncidentDate            Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date when the incident took place that resulted in the adverse action.

IncidentReportedDate    Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which the incident was reported to the regulatory authority.

InsurancePolicyNumber   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The number of the insurance policy associated with an adverse action.

InsuranceProviderName   Type
string

<!-- page:1267 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The name of the insurance provider that issued the policy associated with an adverse action.

Jurisdiction            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the court or goverment body that issued the legal determination.

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
Create, Filter, Group, idLookup, Sort, Update
Description
The name of the adverse action that is being taken.

PenaltyAmount           Type
currency
Properties
Create, Filter, Nillable, Sort, Update
Description
The penalty amount imposed for an adverse action.

<!-- page:1268 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Time stamp that indicates when the current user last viewed this record.

PractitionerId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The practitioner this adverse action record is associated with.

RegulatoryBody          Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the regulatory authority to which the incident was reported.

RegulatoryBodyType      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the type of regulatory authority to which the incident was reported.

ReportingEntity         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the entity or organization that reported this action.

SourceSystem            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

<!-- page:1269 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

SourceSystemIdentifier Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
Unique record ID in source system.

Status                                  Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of the license or certification, such as "revoked" or "suspended."
Possible values are:
- Active
- Revoked
- Suspended




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareProviderAdverseActionChangeEvent (API version 60.0)
Change events are available for the object.
CareProviderAdverseActionFeed
Feed tracking is available for the object.
CareProviderAdverseActionHistory
History is available for tracked fields of the object.



## CareProviderFacilitySpecialty

Represents all the specialties that the practitioner provides at a given location. For example, a physician who is board-certified in both
spine and neuro may provide spine services at one location and neuro services at another.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()

<!-- page:1270 -->

AFLS Overview                                                                                        Patient Engagement


Fields


## Field                      Details

AccountId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Facility associated with this provider facility specialty record.

ActiveResearchStudyCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The count of active research studies being performed by the care provider for the specialty.
This field is available in API version 62.0 and later when Site Management (Pilot) is enabled.

CompletedResearchStudyCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The count of research studies completed by the care provider for the specialty. This field is
available in API version 62.0 and later when Site Management (Pilot) is enabled.

EffectiveFrom              Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this record is effective.

EffectiveTo                Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this record is no longer effective.

HealthcareFacilityId       Type
reference

<!-- page:1271 -->

AFLS Overview                                                                                         Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the healthcare facility associated with the specialty. This field is available in API
version 62.0 and later when Site Management (Pilot) is enabled.
This field is a relationship field.
Relationship Name
HealthcareFacility
Refers To
HealthcareFacility

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

IsPrimarySpecialty      Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this specialty is the practitioner's primary specialty at this facility, or the
facility's primary specialty.

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

<!-- page:1272 -->

AFLS Overview                                                                                          Patient Engagement




## Field                    Details

Name                     Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of the specialty provided at this provider facility.

OwnerId                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PractitionerFacilityId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Practitioner facility associated with this provider facility specialty record.

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

SpecialtyId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifies the specialty associated with this provider facility specialty record

<!-- page:1273 -->

AFLS Overview                                                                                                       Patient Engagement




## Field                                   Details

SpecialtyRole                           Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Role of the specialty for the provider or practitioner.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareProviderFacilitySpecialtyChangeEvent (API version 60.0)
Change events are available for the object.
CareProviderFacilitySpecialtyFeed
Feed tracking is available for the object.
CareProviderFacilitySpecialtyHistory
History is available for tracked fields of the object.
CareProviderFacilitySpecialtyOwnerSharingRule
Sharing rules are available for the object.
CareProviderFacilitySpecialtyShare
Sharing is available for the object.



## CareProviderSearchableField

This object holds denormalized data from certain fields in the Provider Relationship Management data model. Provider search APIs query
this object instead of multiple objects, which improves search performance. This object is available in API version 47.0 and later.



## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete()


Fields


## Field                                   Details

Address                                 Type
textarea
Properties
Nillable
Description
Specified in Account.ShippingAddress.

CertificationType                       Type
textarea

<!-- page:1274 -->

AFLS Overview                                                                                      Patient Engagement



Field                   Details

Properties
Nillable
Description
Specified in BoardCertification.CertificationType.

Note: BoardCertification.HealthcareProvider must also be
specified.

Condition               Type
textarea
Properties
Nillable
Description
The conditions represented by the problem definitions that the healthcare provider offers
treatment for.

EducationLevel          Type
textarea
Properties
Nillable
Description
Specified in PersonEducation.EducationLevel. Not applicable for a facility.


## Note: Degree, Status, DegreeEarner, and HealthCareProvider

must also be specified.

FacilityId              Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Represents the facility with which the practitioner is associated. Use for practitioner records
only. If the provider is a facility, set this field value to null.

FacilityName            Type
string
Properties
Filter, Group, Nillable, Sort
Description
Specified in Account.Name.

FacilityPhone           Type
phone

<!-- page:1275 -->

AFLS Overview                                                                                      Patient Engagement



Field                   Details


## Properties

Filter, Group, Nillable, Sort
Description
Facility's main contact phone number. Specified in Account.Phone.

IsAcceptingNewPatients Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the practitioner is accepting new patients. Specified in
HealthcareFacilityNetwork.PanelStatus, where PanelStatus =
Open indicates Accepting New Patients = true. The default value is false.

Note: This field applies only to practitioners, not facilities.

IsUpdateNeeded          Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether a change to data in a healthcare provider record or a related record requires
a data sync (true) or not (false). The default value is false.

LanguagesSpoken         Type
textarea
Properties
Nillable
Description
The languages spoken by the person. Specified in PersonLanguage.Language.

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

<!-- page:1276 -->

AFLS Overview                                                                                          Patient Engagement



Field                      Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

LicenseJurisdictionCountry Type
String
Properties
Filter, Nillable
Description
The country where the license of the Healthcare Provider is registered. Specified in
BusinessLicense.JurisdictionCountry.
This field is available in API version 57.0 or later.

LicenseJurisdictionRegion Type
String
Properties
Filter, Nillable
Description
The region where the license of the Healthcare Provider is registered. Specified in
BusinessLicense.JurisdictionRegion.
This field is available in API version 57.0 or later.

LicenseJurisdictionState Type
String
Properties
Filter, Nillable
Description
The state where the license of the Healthcare Provider is registered. Specified in
BusinessLicense.JurisdictionState.
This field is available in API version 57.0 or later.

LicenseName                Type
String
Properties
Filter, Nillable
Description
The name of the license associated with the Healthcare Provider. Specified in
BusinessLicense.Name.
This field is available in API version 57.0 or later.

<!-- page:1277 -->

AFLS Overview                                                                                              Patient Engagement




## Field                      Details

LicenseStatus              Type
String
Properties
Filter, Nillable
Description
Specifies the status of the license given to the Healthcare Provider. Specified in
BusinessLicense.Status.
This field is available in API version 57.0 or later.

NationalProviderIdentifier Type
string
Properties
Filter, Group, Nillable, Sort
Description
Provider’s unique NPI number. Specified in HealthcareProviderNpi.Account
for a facility, and HealthcareProviderNpi.Practitioner for a practitioner.

OperatingHoursId           Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Identifies a set of operating hours for this practitioner at this facility. Specified in
Account.OperatingHoursId for a facility, or in
HeathcarePractitionerFacility.OperatingHoursId for a
practitioner-facility combination.

PhotoUrl                   Type
string
Properties
Filter, Group, Nillable, Sort
Description
The URL for a photograph of the practitioner. Field is synced based on
Account-PhotoUrl or Contact.PhotoUrl.

PlanType                   Type
textarea
Properties
Nillable
Description
The type of plan, with the following default options:
- PPO

<!-- page:1278 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details
- HMO
- Medicare
- Medicaid
- Workers Comp
Specified in HealthcareFacilityNetwork.Account for a facility, or
HealthcareFacilityNetwork.PractitionerFacility for a
practitioner-facility combination.


## Note: HealthcareFacilityNetwork.Name and PayerNetwork.Name

must also be populated.

ProviderGender          Type
string
Properties
Filter, Group, Nillable, Sort
Description
The gender of the HealthcareProvider. Specified in Contact.Gender or
Account.PersonGender.

ProviderId              Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Lookup to HealthcareProvider. Represents a facility or practitioner-facility
combination.

ProviderName            Type
string
Properties
Filter, Group, idLookup, Nillable, Sort
Description
Name of the provider. Specified in Account for a facility, or in Contact for a practitioner.

ProviderType            Type
string
Properties
Filter, Group, Nillable, Sort
Description
Type of provider or facility. For example, a pharmacist or an ambulatory care facility. Specified
in HealthCareProvider.ProviderType.

<!-- page:1279 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

Service                 Type
textarea
Properties
Nillable
Description
The list of services that the healthcare provider offers.

ServiceCode             Type
textarea
Properties
Nillable
Description
The list of codes associated with the service that the healthcare provider offers.

Specialty               Type
textarea
Properties
Nillable
Description
Specialty associated with the provider. Specified in CareSpecialty.SpecialtyType.
For a facility, the Specialty is sourced from a Care Provider Facility Specialty record, which
connects a facility (CareProviderFacilitySpecialty.AccountId) to a care
specialty (CareProviderFacilitySpecialty.SpecialtyId).
For a practitioner, the Specialty is sourced from a Care Provider Facility Specialty record,
which connects a Healthcare Practitioner Facility record
(CareProviderFacilitySpecialty.PractitionerFacilityId) to a care
specialty (CareProviderFacilitySpecialty.SpecialtyId). The Healthcare
Practitioner Facility record then connects the facility
(HealthcarePractitionerFacility.AccountId) to a practitioner
(HealthcarePractitionerFacility.PractitionerId).
All source records must be active.

SubSpecialty            Type
textarea
Properties
Nillable
Description
Provider's subspecialty. Specified in
HealthcareProviderTaxonomy.TaxonomyType. Not valid for a
practitioner-facility combination.

Note: Taxonomy.TaxonomyType must also be specified.

<!-- page:1280 -->

AFLS Overview                                                                                                       Patient Engagement




## Field                                   Details

SyncLogRecord                           Type
string
Properties
Filter, Group, Nillable, Sort
Description
The provider search sync log record that shows the data sync status of a healthcare provider
record.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareProviderSearchableFieldChangeEvent (API version 60.0)
Change events are available for the object.



## CareProviderSearchConfig

Represents fields that can appear in provider search results. Use this object to specify fields in arbitrary objects (source) that are made
available in the search object (target). This object is available in API version 48.0 and later.



## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()


Fields


## Field                                   Details

DeveloperName                           Type
string
Properties
Create, Filter, Group, Sort, Update
Description
The unique name of the object in the API. This name can contain only underscores and
alphanumeric characters, and must be unique in your org.


## Note: Only users with View DeveloperName OR View Setup and Configuration

permission can view, group, sort, and filter this field.

IsActive                                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this configuration is active.

<!-- page:1281 -->

AFLS Overview                                                                                        Patient Engagement




## Field                   Details

Language                Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The language that the care provider search uses.
Possible values are:
- da—Danish
- de—German
- en_US—English
- es—Spanish
- es_MX—Spanish (Mexico)
- fi—Finnish
- fr—French
- it—Italian
- ja—Japanese
- ko—Korean
- nl_NL—Dutch
- no—Norwegian
- pt_BR—Portuguese (Brazil)
- ru—Russian
- sv—Swedish
- th—Thai
- zh_CN—Chinese (Simplified)
- zh_TW—Chinese (Traditional)

MappedObject            Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Restricted picklist, Sort, Update
Description
Indicates mapped objects.
Possible values are:
- HealthcarePractitionerFacility
- HealthcareProvider

MasterLabel             Type
string

<!-- page:1282 -->

AFLS Overview                                                                                                        Patient Engagement



Field                                  Details


## Properties

Create, Filter, Group, Sort, Update
Description
The label for the care provider.

SourceField                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The API name of the field that is copied to the target object.

TargetField                            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The API name of the field to copy the data to.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareProviderSearchConfigChangeEvent (API version 60.0)
Change events are available for the object.



## CareService

Represents a healthcare treatment, service, or procedure offered by a provider, practitioner, or facility. This object is available in API
version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

Description                            Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1283 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The description of the healthcare service.

IsAppointmentRequired   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether an appointment is required for access to this service (true) or not required
(false).
The default value is false.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last accessed this record indirectly, for example, through
a list view or related record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view indirectly.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
Required.
The name of the healthcare service offered by the provider.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1284 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Description

The ID of the owner of the record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ReferralMethods                          Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the referral method for the service.

ServiceProvision                         Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the conditions under which the service is provided.
Possible values are:
- Free
- Discount Available
- Fees Apply
.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareServiceHistory
History is available for tracked fields of the object.
CareServiceOwnerSharingRule
Sharing rules are available for the object.
CareServiceShare
Sharing is available for the object.

<!-- page:1285 -->

AFLS Overview                                                                                   Patient Engagement




## CareSpecialty

Represents a listing of provider specialty codes and descriptions. For example, 02 - Physician/General Surgery.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                           Details

Description                     Typestring
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Description of the specialty.

EffectiveFrom                   Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this specialty is effective.

EffectiveTo                     Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this specialty is no longer effective.

IsActive                        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

LastReferencedDate              Type
dateTime
Properties
Filter, Nillable, Sort

<!-- page:1286 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

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
Create, Filter, Group, idLookup Sort, Update
Description
Name of the specialty master record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

SpecialtyCode           Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
Code for the specialty.

SpecialtyType           Type
picklist

<!-- page:1287 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Type of care specialty.

SpecialtyUsage                           Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether this specialty is related to the practitioner, the organization, or both.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareSpecialtyChangeEvent (API version 59.0)
Change events are available for the object.
CareSpecialtyFeed
Feed tracking is available for the object.
CareSpecialtyHistory
History is available for tracked fields of the object.
CareSpecialtyOwnerSharingRule
Sharing rules are available for the object.
CareSpecialtyShare
Sharing is available for the object.



## CareSpecialtyTaxonomy

The junction object between CareSpecialty and CareTaxonomy. This object is available in API version 52.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

CareSpecialtyId                          Type
reference

<!-- page:1288 -->

AFLS Overview                                                                      Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Sort, Update
Description
The care specialty associated with a care specialty taxonomy.
This is a relationship field.
Relationship Name
CareSpecialty
Relationship Type
Lookup
Refers To
CareSpecialty

CareTaxonomyId          Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The care taxonomy associated with a care specialty taxonomy.
This is a relationship field.
Relationship Name
CareTaxonomy
Relationship Type
Lookup
Refers To
CareTaxonomy

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

<!-- page:1289 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

Name                                    Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The system-generated name of the record.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareSpecialtyTaxonomyFeed on page 1429
Feed tracking is available for the object.
CareSpecialtyTaxonomyHistory on page 1434
History is available for tracked fields of the object.
CareSpecialtyTaxonomyChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.



## CareTaxonomy

Represents a static list of taxonomy codes.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                   Details

Description                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Description of the taxonomy.

EffectiveFrom                           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1290 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The date from which this taxonomy is effective.

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this taxonomy is no longer effective.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

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
Create, Filter, Group, Sort, Update
Description
Name of the taxonomy master record.

OwnerId                 Type
reference

<!-- page:1291 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                 Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

ParentTaxonomyId                      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The parent taxonomy associated with a care taxonomy.
This is a relationship field.
Relationship Name
ParentTaxonomy
Relationship Type
Lookup
Refers To
CareTaxonomy

TaxonomyCode                          Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Code for the taxonomy.

TaxonomyType                          Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Type of taxonomy.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareTaxonomyChangeEvent (API version 60.0)
Change events are available for the object.
CareTaxonomyFeed
Feed tracking is available for the object.

<!-- page:1292 -->

AFLS Overview                                                                                                       Patient Engagement




## CareTaxonomyHistory

History is available for tracked fields of the object.



## HealthcareFacilityNetwork

Represents a junction object identifying the insurance network that a location or business entity is a part of. Network participation records
are also stored in this object.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                   Details

AccountId                               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Account associated with this facility network.

Description                             Type
textarea
Properties
Create, Nillable, Update
Description
Description of the facility network.

EffectiveFrom                           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this facility network is effective.

EffectiveTo                             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this facility network is no longer effective.

<!-- page:1293 -->

AFLS Overview                                                                                           Patient Engagement




## Field                   Details

GenderRestriction       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether this facility network only applies to male or female patients or members
instead of all patients or members.

HealthcareFacilityId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
References the HealthcareFacility record associated with the network. Use this field if the
associated provider is a business account.
This is a relationship field.
Relationship Type
Lookup
Refers To
HealthcareFacility

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Healthcare provider associated with this facility network.
Relationship Type
Lookup
Refers To
HealthcareProvider

HighestValidAge         Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates the highest age of patient that this facility network is applicable for.

IsActive                Type
boolean

<!-- page:1294 -->

AFLS Overview                                                                                          Patient Engagement



Field                   Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

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

LowestValidAge          Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates the lowest age of patient that this facility network is applicable for.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of the facility network record.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

<!-- page:1295 -->

AFLS Overview                                                                                              Patient Engagement




## Field                     Details

PanelLimit                Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
Indicates the maximum number of patients in the practitioner's panel for this payer network
and practitioner location.

PanelStatus               Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Indicates whether the practitioner is accepting new patients based on the status of their
patient panel.

PayerNetworkId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Payer network associated with this facility network.

PractitionerFacilityId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Practitioner facility associated with this facility network. Use this field if the provider associated
with the network is an individual practitioner.

PractitionerId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The individual practitioner associated with the facility network.

ProviderNetworkContractId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1296 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                 Details


## Description

Provider network contract associated with this facility network
This is a relationship field.
Relationship Type
Lookup
Refers To
ProviderNetworkContract

ProviderNetworkTierId                 Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Provider network tier associated with this facility network.
This is a relationship field.
Relationship Type
Lookup
Refers To
ProviderNetworkTier

SourceSystem                          Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
HealthcareFacilityNetworkChangeEvent (API version 60.0)
Change events are available for the object.
HealthcareFacilityNetworkFeed
Feed tracking is available for the object.

<!-- page:1297 -->

AFLS Overview                                                                                             Patient Engagement




## HealthcareFacilityNetworkHistory

History is available for tracked fields of the object.
HealthcareFacilityNetworkOwnerSharingRule
Sharing rules are available for the object.
HealthcareFacilityNetworkShare
Sharing is available for the object.



## HealthcarePayerNetwork

Represents an insurance network group. For example, an insurance company’s exclusive provider organization (EPO) plans.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

Code                                     Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
Code representing the payer network.

Description                              Type
textarea
Properties
Create, Nillable, Update
Description
Description of the payer network.

EffectiveFrom                            Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this payer network is effective.

EffectiveTo                              Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1298 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The date on which this payer network is no longer effective.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

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

LineofBusiness          Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the line of business supported by this payer network.
Possible values are:
- Commercial for Groups
- Commercial for Individuals
- Exchange
- Medicaid
- Medicare

Name                    Type
string

<!-- page:1299 -->

AFLS Overview                                                                                Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, idLookup, Sort, Update
Description
Name of the payer network.

NetworkType             Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Type of network, such as HMO, PPO, or EPO.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ParentPayerNetworkId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The parent healthcare payer network associated with this payer network.
This is a relationship field.
Relationship Type
Lookup
Refers To
HealthcarePayerNetwork

PayerId                 Type
reference

<!-- page:1300 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                    Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The account associated with the payer network.
This is a relationship field.
Relationship Name
Payer
Relationship Type
Lookup
Refers To
Account

SourceSystem                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier                   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
ID of an external record on its source system.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
HealthcarePayerNetworkChangeEvent (API version 60.0)
Change events are available for the object.
HealthcarePayerNetworkFeed
Feed tracking is available for the object.
HealthcarePayerNetworkHistory
History is available for tracked fields of the object.
HealthcarePayerNetworkOwnerSharingRule
Sharing rules are available for the object.
HealthcarePayerNetworkShare
Sharing is available for the object.

<!-- page:1301 -->

AFLS Overview                                                                                           Patient Engagement




## HealthcarePractitionerFacility

Represents the different locations in which a practitioner provides services.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

AccountId                             Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Account associated with this practitioner facility.
This is a relationship field.
Relationship Name
Account
Relationship Type
Lookup
Refers To
Account

EffectiveFrom                         Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this practitioner facility is effective.

EffectiveTo                           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this practitioner facility is no longer effective.

GenderRestriction                     Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1302 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

Indicates whether physician sees patients of a specific gender.

HealthcareFacilityId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The Healthcare facility associated with this healthcare practitioner facility.
Relationship Type
Lookup
Refers To
HealthcareFacility

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Healthcare provider associated with this healthcare practitioner facility.
This is a relationship field.
Relationship Type
Lookup
Refers To
HealthcareProvider

HighestValidAge         Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The highest age of patients that the practitioner sees at this facility

InitialStartDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Date the practitioner started at this facility.

<!-- page:1303 -->

AFLS Overview                                                                                         Patient Engagement




## Field                    Details

IsActive                 Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

IsDirectoryPrint         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this facility is displayed in an online or printed directory.

IsPrimaryCarePhysician   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the practitioner provides primary care services at this facility.

IsPrimaryFacility        Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the facility is the primary facility for the practitioner.

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

<!-- page:1304 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

The timestamp for when the current user last viewed this record. If this value is null, it’s
possible that this record was referenced (LastReferencedDate) and not viewed.

LowestValidAge          Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The lowest age of patients that the practitioner sees at this facility.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
Name of the practitioner facility record.

OperatingHoursId        Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifies the operating hours for this practitioner at this facility.
This is a relationship field.
Relationship Name
OperatingHours
Relationship Type
Lookup
Refers To
OperatingHours

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner

<!-- page:1305 -->

AFLS Overview                                                                  Patient Engagement



Field                    Details

Relationship Type
Lookup
Refers To
Group, User

PractitionerId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the practitioner associated with this facility.
This is a relationship field.
Relationship Name
Practitioner
Relationship Type
Lookup
Refers To
Contact

ServiceTerritoryMember   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The service territory member associated with the record.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
ID of an external record on its source system.

<!-- page:1306 -->

AFLS Overview                                                                                                       Patient Engagement




## Field                                   Details

TerminationDate                         Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Date the practitioner stopped working at this facility.

TerminationReasonCode                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reason the practitioner facility is no longer current.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
HealthcarePractitionerFacilityFeed
Feed tracking is available for the object.
HealthcarePractitionerFacilityHistory
History is available for tracked fields of the object.
HealthcarePractitionerFacilityOwnerSharingRule
Sharing rules are available for the object.
HealthcarePractitionerFacilityShare
Sharing is available for the object.



## HealthcareProvider

Represents business-level details about the healthcare organization or the practitioner.



## Special Access Rules

In AFLS, the HealthCareProvider object and its fields are used by the Account Management and the Segmentation feature
areas. This topic lists fields used in both features.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1307 -->

AFLS Overview                                                                                        Patient Engagement


Fields


## Field                   Details

AbbreviatedName         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores the abbreviated name of the Japanese healthcare organization (HCO) for INS-DOC
records. This field is available with the AFLS for Customer Engagement Add-on
license in API version 65.0 and later.

AccountId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Account that this healthcare provider is associated with. This field is a relationship field.
Relationship Name
Account
Refers To
Account

AssociatedSampleLimit   Type
textarea
Properties
Create, Nillable, Update
Description
The JSON comprising the list of Sample Limits for the HealthcareProvider record. This field
is available with the AFLS for Customer Engagement Add-on license in API
version 65.0 and later.

CaqhIdentifier          Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
This field is unique within your organization. This field is available with the Life Sciences
Cloud for Customer Engagement Add-on license in API version 65.0 and later.

DataChangeComments      Type
textarea

<!-- page:1308 -->

AFLS Overview                                                                                      Patient Engagement



Field                    Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
Captures comments explaining the reasons or context for changes made to the data. This
field is available with the AFLS for Customer Engagement Add-on license in
API version 65.0 and later.

DoesDispenseMedication   Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the account dispenses medication.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

EffectiveFrom            Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date from which the provider becomes effective.

EffectiveTo              Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date from which the provider is no longer effective.

EhrSystem                Type
textarea
Properties
Create, Nillable, Update
Description
Name of the EHR system used at this facility or organization.

HasCarrierContract       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1309 -->

AFLS Overview                                                                                      Patient Engagement



Field                   Details


## Description

Indicates whether the provider’s contract follows a CMS model MA contract amendment,
based on Centers for Medicare and Medicaid Services (CMS) guidelines.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

HasSalesDataRestriction Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether access to the sales data about the healthcare provider is restricted.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

InitialStartDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date when the facility first became operational or the practitioner first began
practicing.

IsNotSearchable         Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the provider is excluded from search results.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

IsPrivacyLawEnabled     Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the privacy law regulations are enabled.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

<!-- page:1310 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

IsSpeaker               Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the provider is designated as a speaker for engagement.
The default value is false. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.

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
Create, Filter, Group, Sort, Update
Description
Name of the provider.

OperatingCountryCode    Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the country code of the country to which the account belongs.
Possible values are:
- US
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

<!-- page:1311 -->

AFLS Overview                                                                                         Patient Engagement




## Field                      Details

OwnerId                    Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record. This field is a polymorphic relationship field.
Relationship Name
Owner
Refers To
Group, User

ParentOrganizationAccountId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the ID of the parent account, used to establish the account hierarchy. This field is
a relationship field. This field is available with the AFLS for Customer
Engagement Add-on license in API version 65.0 and later.
Relationship Name
ParentOrganizationAccount
Refers To
Account

PhoneticName               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores the Japanese phonetic name, applicable to both HCP and HCO, which is used for
sorting and text-based searches. This field is available with the AFLS for
Customer Engagement Add-on license in API version 65.0 and later.

PhoneticName2              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores the Japanese phonetic name, applicable to both HCP and HCO, which is used for
sorting and text-based searches. This field is available with the AFLS for
Customer Engagement Add-on license in API version 65.0 and later.

<!-- page:1312 -->

AFLS Overview                                                                                        Patient Engagement




## Field                   Details

PractitionerId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The practitioner that this healthcare provider record is associated with. This field is a
relationship field.
Relationship Name
Practitioner
Refers To
Contact

ProfessionalDesignation Type
multipicklist
Properties
Create, Filter, Nillable, Update
Description
Specifies the professional designation of the healthcare professional. This field is available
with the AFLS for Customer Engagement Add-on license in API version 65.0
and later.

ProfessionalTitle       Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the professional title of the healthcare professional. This field is available with the
AFLS for Customer Engagement Add-on license in API version 65.0 and later.

ProviderClass           Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The class of facility, such as an IPA, medical group, or solo practitioner.
Possible values are:
- IPA
- Medical Group
- Solo Practitioner

<!-- page:1313 -->

AFLS Overview                                                                                         Patient Engagement




## Field                   Details

ProviderFullName        Type
string
Properties
Filter, Group, Nillable, Sort
Description
The full name of the healthcare provider. This field is available with the AFLS
for Customer Engagement Add-on license in API version 65.0 and later.

ProviderPhotoId         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The Content Document file that is a photo of the Healthcare Provider. This field is a relationship
field.
Relationship Name
ProviderPhoto
Relationship Type
Lookup
Refers To
ContentDocument

ProviderType            Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Type of provider or facility. For example, pharmacist or ambulatory care facility.
Possible values are:
- Ambulatory Care
- Dentist
- Hospital
- Laboratory
- Medical Doctor
- Pharmacist
- Pharmacy

ReferredByContactId     Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1314 -->

AFLS Overview                                                                                             Patient Engagement



Field                      Details


## Description

Specifies the provider who originated the referral. This field is a relationship field. This field
is available with the AFLS for Customer Engagement Add-on license in API
version 65.0 and later.
Relationship Name
ReferredByContact
Refers To
Contact

RelatedHealthcareProviderId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the HCP account associated with the INS-DOC. This field is a relationship field. This
field is available with the AFLS for Customer Engagement Add-on license in
API version 65.0 and later.
Relationship Name
RelatedHealthcareProvider
Refers To
HealthcareProvider

RelatedUserId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The User record that relates to the Healthcare Provider record. This field is a relationship field.
Relationship Name
RelatedUser
Relationship Type
Lookup
Refers To
User

SalesDataRstrcEffectiveDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1315 -->

AFLS Overview                                                                                      Patient Engagement



Field                    Details


## Description

Specifies the date when the sales data restriction becomes effective. This field is available
with the AFLS for Customer Engagement Add-on license in API version 65.0
and later.

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The system from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the system from which the record was sourced. This field is unique within your
organization

SourceSystemModifiedDate Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the date when the record was last updated in the source system

Status                   Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the status of the provider.
Possible values are:
- Active
- Inactive
- Pending
This field is available with the AFLS for Customer Engagement Add-on license
in API version 65.0 and later.

<!-- page:1316 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

TerminationDate                         Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Termination date for this provider.

TerminationReason                       Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Reason for termination.

TotalLicensedBeds                       Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Total number of licensed beds at this facility, if applicable.

WrittenName                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Stores the Chines character name of the organization, applicable only to healthcare
professionals (HCPs), which is required for INS-DOC records. This field is available with the
AFLS for Customer Engagement Add-on license in API version 65.0 and later.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthcareProviderChangeEvent (API version 59.0)
Change events are available for the object.
HealthcareProviderFeed
Feed tracking is available for the object.
HealthcareProviderHistory
History is available for tracked fields of the object.

<!-- page:1317 -->

AFLS Overview                                                                                                          Patient Engagement




## HealthcareProviderOwnerSharingRule

Sharing rules are available for the object.
HealthcareProviderShare
Sharing is available for the object.



## HealthcareProviderNpi

Represents identifiers from the National Provider Identifier that are assigned to every facility and licensed practitioner in the United States.
Also includes NPI assigned date, primary mailing address on file, and so on.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(),
upsert()


Fields


## Field                                    Details

AccountId                                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the facility that this NPI belongs to.

EffectiveFrom                            Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this NPI is effective.

EffectiveTo                              Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this NPI is no longer effective.

IsActive                                 Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update

<!-- page:1318 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Description

Indicates whether the record is active.

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
Create, Filter, Group, Sort, Update
Description
Practitioner or facility name as listed in the NPI database.

Npi                     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Ten-digit identifier for a provider from the National Plan and Provider Enumeration System.

NpiType                 Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifies whether the NPI is for an individual or an organization.

OwnerId                 Type
reference

<!-- page:1319 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                    Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

PractitionerId                           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Name of the practitioner that this NPI belongs to.

SourceSystem                             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier                   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the system from which the record was sourced.




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
HealthcareProviderNpiChangeEvent (API version 60.0)
Change events are available for the object.
HealthcareProviderNpiFeed
Feed tracking is available for the object.
HealthcareProviderNpiHistory
History is available for tracked fields of the object.
HealthcareProviderNpiOwnerSharingRule
Sharing rules are available for the object.
HealthcareProviderNpiShare
Sharing is available for the object.

<!-- page:1320 -->

AFLS Overview                                                                                                    Patient Engagement




## HealthcareProviderService

Represents a junction object between a HealthcareService and a HealthcareProvider or HealthcareFacility or HealthcarePractitionerFacility.
This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                 Details

CareServiceId                         Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Required.
The ID of the healthcare service that is offered.
This field is a relationship field.
Relationship Name
CareService
Relationship Type
Lookup
Refers To
CareService

EffectiveFrom                         Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date the Healthcare Provider or Healthcare Facility or Healthcare Practitioner Facility
began offering this service.

EffectiveTo                           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date the Healthcare Provider or Healthcare Facility or Healthcare Practitioner Facility
stopped offering this service.

<!-- page:1321 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this offering is active (true) or not active (false).
The default value is false.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last accessed this record indirectly, for example, through
a list view or related record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view indirectly.

Name                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of this association between a Healthcare Service and a Healthcare Provider or
Healthcare Facility or Healthcare Practitioner Facility.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the owner of the record.
This field is a polymorphic relationship field.
Relationship Name
Owner

<!-- page:1322 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details

Relationship Type
Lookup
Refers To
Group, User

ProviderId                               Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Required.
The ID of the Healthcare Provider or Healthcare Facility or Healthcare Practitioner Facility
that offers this service.
This field is a polymorphic relationship field.
Relationship Name
Provider
Relationship Type
Lookup
Refers To
HealthcareFacility, HealthcarePractitionerFacility, HealthcareProvider




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthcareProviderServiceHistory
History is available for tracked fields of the object.
HealthcareProviderServiceOwnerSharingRule
Sharing rules are available for the object.
HealthcareProviderServiceShare
Sharing is available for the object.



## HealthcareProviderSpecialty

Represents specialties for a practitioner or a service provider organization. A provider can have multiple specialties such as
anesthesiology and cardiovascular.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()

<!-- page:1323 -->

AFLS Overview                                                                                         Patient Engagement


Fields


## Field                      Details

AccountId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Account associated with this specialty.
This is a relationship field.
Relationship Name
Account
Relationship Type
Lookup
Refers To
Account

ActiveResearchStudyCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The count of active research studies being performed by the healthcare provider for the
specialty. This field is available in API version 62.0 and later when Site Management (Pilot)
is enabled.

CompletedResearchStudyCount Type
int
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The count of research studies completed by the healthcare provider for the specialty. This
field is available in API version 62.0 and later when Site Management (Pilot) is enabled.

EffectiveFrom              Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this provider specialty is effective.

EffectiveTo                Type
date

<!-- page:1324 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this provider specialty is no longer effective.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

IsPrimarySpecialty      Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the specialty is the provider's primary specialty.

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
Create, Filter, Group, idLookup, Sort, Update
Description
Name of the provider’s specialty.

<!-- page:1325 -->

AFLS Overview                                                                                   Patient Engagement




## Field                   Details

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

PractitionerId          Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Practitioner associated with the specialty.
This is a relationship field.
Relationship Name
Practitioner
Relationship Type
Lookup
Refers To
Contact

ResearchStudyPhase      Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the research study phase that the healthcare provider has experience with. This
field is available in API version 62.0 and later when Site Management (Pilot) is enabled.
Possible values are:
- Phase 1
- Phase 2
- Phase 3
- Phase 4

<!-- page:1326 -->

AFLS Overview                                                                                      Patient Engagement




## Field                    Details

ResearchStudyType        Type
multipicklist
Properties
Create, Filter, Nillable, Restricted picklist, Update
Description
Specifies the research study type that the healthcare provider has experience with. This field
is available in API version 62.0 and later when Site Management (Pilot) is enabled.
Possible values are:
- Hybrid
- Traditional
- Virtual

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
ID of an external record on its source system.

SpecialtyId              Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Care specialty record associated with the provider.
This is a relationship field.
Relationship Name
Specialty
Relationship Type
Lookup
Refers To
CareSpecialty

<!-- page:1327 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                    Details

SpecialtyRole                            Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Role of the specialty for the provider or practitioner.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthcareProviderSpecialtyChangeEvent (API version 59.0)
Change events are available for the object.
HealthcareProviderSpecialtyFeed
Feed tracking is available for the object.
HealthcareProviderSpecialtyHistory
History is available for tracked fields of the object.
HealthcareProviderSpecialtyOwnerSharingRule
Sharing rules are available for the object.
HealthcareProviderSpecialtyShare
Sharing is available for the object.



## HealthcareProviderTaxonomy

Represents taxonomy or subspecialty codes for a practitioner or facility. A provider or facility can have multiple taxonomies.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

AccountId                                Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The business account associated with the provider taxonomy.
This is a relationship field.

<!-- page:1328 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details

Relationship Name
Account
Relationship Type
Lookup
Refers To
Account

EffectiveFrom           Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date from which this taxonomy is effective.

EffectiveTo             Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date on which this taxonomy is no longer effective.

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The healthcare provider associated with the taxonomy. This field is available in API version
62.0 and later when Site Management (Pilot) is enabled.
This field is a relationship field.
Relationship Name
HealthcareProvider
Refers To
HealthcareProvider

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

<!-- page:1329 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

IsPrimaryTaxonomy       Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the taxonomy is the provider's primary taxonomy.

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
Create, Filter, Group, idLookup, Sort, Update
Description
Name of the provider taxonomy.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup

<!-- page:1330 -->

AFLS Overview                                                                     Patient Engagement



Field                    Details

Refers To
Group, User

PractitionerId           Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Contact record for the practitioner.
This is a relationship field.
Relationship Name
Practitioner
Relationship Type
Lookup
Refers To
Contact

SourceSystem             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
System from which the record was sourced.

SourceSystemIdentifier   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
Record ID in source system of provider directory.

TaxonomyId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Care taxonomy record associated with the provider taxonomy.
This is a relationship field.
Relationship Name
Taxonomy

<!-- page:1331 -->

AFLS Overview                                                                                                       Patient Engagement



Field                                   Details

Relationship Type
Lookup
Refers To
CareTaxonomy




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
HealthcareProviderTaxonomyChangeEvent (API version 60.0)
Change events are available for the object.
HealthcareProviderTaxonomyFeed
Feed tracking is available for the object.
HealthcareProviderTaxonomyHistory
History is available for tracked fields of the object.
HealthcareProviderTaxonomyOwnerSharingRule
Sharing rules are available for the object.
HealthcareProviderTaxonomyShare
Sharing is available for the object.



## HealthcareServiceDetail

Represents a junction object between a CareService and a CodeSetBundle. For example, this object links a healthcare service such as
physical therapy to a set of related codes. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                   Details

CareServiceId                           Type
reference
Properties
Create, Filter, Group, Sort
Description
Required.
The ID of the healthcare service associated with the code.
This field is a relationship field.

<!-- page:1332 -->

AFLS Overview                                                                                        Patient Engagement



Field                   Details

Relationship Name
CareService
Relationship Type
Lookup
Refers To
CareService

DetailCodeId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Required.
The ID of the code associated with the healthcare service.
This field is a polymorphic relationship field.
Relationship Name
DetailCode
Relationship Type
Lookup
Refers To
CodeSet, CodeSetBundle

DetailType              Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the type of service detail.
Possible values are:
- Service_Category
- Service_Type
The default value is Service_Category.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last accessed this record indirectly, for example, through
a list view or related record.

<!-- page:1333 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                    Details

LastViewedDate                           Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view indirectly.

Name                                     Type
string
Properties
Autonumber, Defaulted on create, Filter, idLookup, Sort
Description
The name of this association between a HealthcareService and a CodeSetBundle.

OwnerId                                  Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the owner of the record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HealthcareServiceDetailHistory
History is available for tracked fields of the object.
HealthcareServiceDetailOwnerSharingRule
Sharing rules are available for the object.
HealthcareServiceDetailShare
Sharing is available for the object.

<!-- page:1334 -->

AFLS Overview                                                                                                          Patient Engagement




## HlthCareProvTreatedCondition

Represents a junction object between a healthcare provider, facility, or practitioner and a problem definition that's related to a health
condition, such as disease or illness. For example, this object links a doctor to the treatment of diabetes, or a facility to the treatment of
spinal injuries. This object is available in API version 59.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                  Details

ConditionId                            Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
Required.
The ID of the health condition that's treated by a healthcare provider, facility, or practitioner.
This field is a relationship field.
Relationship Name
Condition
Relationship Type
Lookup
Refers To
ProblemDefinition

EffectiveFrom                          Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date when the provider began treating the condition.

EffectiveTo                            Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date when the provider stopped treating the condition.

<!-- page:1335 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Sort
Description
Required.
The ID of the HealthcareProvider or HealthcareFacility or PractitionerFacility associated with
the record. This represents the Provider that treats the condition.
This field is a relationship field.
Relationship Name
HealthcareProvider
Relationship Type
Lookup
Refers To
HealthcareProvider

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the provider is actively treating the condition (true) or not (false).
The default value is false.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last accessed this record indirectly, for example, through
a list view or related record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view indirectly.

<!-- page:1336 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

Name                                    Type
string
Properties
Create, Filter, Group, idLookup, Sort, Update
Description
The name of this association between a healthcare provider, facility, or practitioner, and a
problem definition that's related to a health condition.

OwnerId                                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
HlthCareProvTreatedConditionHistory
History is available for tracked fields of the object.
HlthCareProvTreatedConditionOwnerSharingRule
Sharing rules are available for the object.
HlthCareProvTreatedConditionShare
Sharing is available for the object.



## PersonEducation

Represents information about professional education for a person in a provider role.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(),
query(), retrieve(), search(), undelete(), update(), upsert()

<!-- page:1337 -->

AFLS Overview                                                                           Patient Engagement


Fields


## Field                   Details

CompletionDate          Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Education's completion date.

ContactId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the person who earned the degree and is listed as a contact.

EducationLevel          Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Level of education achieved. Example values:
- Undergraduate degree
- Medical school
- Internship
- Residency
- Fellowship

GraduationDate          Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Graduation date from institution.

Identifier              Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID issued to the recipient by the educational institution.

<!-- page:1338 -->

AFLS Overview                                                                               Patient Engagement




## Field                   Details

IdentifierIssuer        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Educational institution's name.

IndividualId            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the person who earned the degree and is listed as an individual.

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the record is active.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user referenced this record.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The most recent date on which a user viewed this record.

Name                    Type
string
Properties
Create, Filter, Group, Sort, Update
Description
Name of the degree earned.

<!-- page:1339 -->

AFLS Overview                                                                           Patient Engagement




## Field                   Details

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.

StartDate               Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Education's start date.

Status                  Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Current status of education. Valid values:
- Inactive
- Revoked
- Draft
- Verified
The default value is Inactive.

UserId                  Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
ID of the person who earned the degree and is listed as a user.

VerificationStatus      Type
picklist
Properties
Create, Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Current educational status. Valid values:
- Authorized

<!-- page:1340 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details
- None
The default value is None.

VerifiedDate                             Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Education was validated on this date.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
PersonEducationChangeEvent (API version 58.0)
Change events are available for the object.
PersonEducationFeed
Feed tracking is available for the object.
PersonEducationHistory
History is available for tracked fields of the object.
PersonEducationOwnerSharingRule
Sharing rules are available for the object.
PersonEducationShare
Sharing is available for the object.



## PersonEmployment

Represents information about a person’s employment.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

AnnualIncome                             Type
currency
Properties
Create, Filter, Nillable, Sort, Update

<!-- page:1341 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details


## Description

The annual income of the person.

Description             Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The description of the employment.

EmployerAddress         Type
address
Properties
Filter, Nillable
Description
The complete address of the employer.

EmployerCity            Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The city where the employer is located.

EmployerCountry         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The country where the employer is located.

EmployerGeocodeAccuracy Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
The level of accuracy of a location’s geographical coordinates compared with its physical
address. A geocoding service typically provides this value based on the address’s latitude
and longitude coordinates.
Possible values are:
- Address

<!-- page:1342 -->

AFLS Overview                                                                                   Patient Engagement



Field                   Details
- Block
- City
- County
- ExtendedZip
- NearAddress
- Neighborhood
- State
- Street
- Unknown
- Zip

EmployerLatitude        Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
Used with Longitude to specify the precise geolocation of the address. Acceptable values
are numbers between –90 and 90 with up to 15 decimal places.

EmployerLongitude       Type
double
Properties
Create, Filter, Nillable, Sort, Update
Description
Used with Latitude to specify the precise geolocation of the address. Acceptable values are
numbers between –180 and 180 with up to 15 decimal places.

EmployerPhone           Type
phone
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Employer's phone number.

EmployerPostalCode      Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The postal code of the employer’s address.

<!-- page:1343 -->

AFLS Overview                                                           Patient Engagement




## Field                   Details

EmployerState           Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The state of the employer’s address.

EmployerStreet          Type
textarea
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The street address of the employer.

EmploymentStatus        Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the employment status with the employer.
Possible values are:
- Employed
- Home Maker
- Retired
- Self-Employed
- Student
- Unemployed with Income
- Unemployed without Income

EmploymentType          Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Possible values are:
- Contract
- Full-Time
- Part-Time
- Self-Employed

<!-- page:1344 -->

AFLS Overview                                                                                       Patient Engagement



Field                   Details
- Temporary

EndDate                 Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The last date of employment at this job.

HealthcareProviderId    Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The healthcare provider associated with the person employment.
This field is a relationship field.
Relationship Name
HealthcareProvider
Relationship Type
Lookup
Refers To
HealthcareProvider

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last accessed this record, a record related to this record,
or a list view.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
the user might have only accessed this record or list view (LastReferencedDate) but
not viewed it.

Name                    Type
string

<!-- page:1345 -->

AFLS Overview                                                                 Patient Engagement



Field                   Details


## Properties

Create, Filter, Group, idLookup, Sort, Update
Description
The name for this record.

Occupation              Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Specifies the person’s occupation.
Possible values are:
- Dental assistants
- Dental hygienists
- Dentists
- Diagnostic related technologists and technicians
- Health technologists and technicians (all)
- Healthcare support occupations (all)
- Licensed practical and licensed vocational nurses
- Nurse midwives and nurse practitioners
- Nursing, psychiatric, and home health aides
- Occupational and physical therapist assistants and aides
- Other occupations within the healthcare sector
- Pharmacists and pharmacy aides
- Phlebotomists
- Physical therapists
- Physician assistants
- Physicians and surgeons
- Registered nurses
- Respiratory therapists

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
The user who owns this record.
This field is a polymorphic relationship field.

<!-- page:1346 -->

AFLS Overview                                                         Patient Engagement



Field                   Details

Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Position                Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The last position of the person at this job.

RelatedPersonId         Type
reference
Properties
Create, Filter, Group, Sort, Update
Description
The person associated with the employment.
This field is a polymorphic relationship field.
Relationship Name
RelatedPerson
Relationship Type
Lookup
Refers To
Account, Contact

StartDate               Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The start date of employment at this job.

VerificationDate        Type
date
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The date of verification of the employment.

<!-- page:1347 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                   Details

VerificationStatus                      Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The status of verification of the employment.
Possible values are:
- Authorized
- Confirmed
- Expired
- In Progress
- Submitted
- Verified




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
PersonEmploymentChangeEvent on page 1426 (API version 61.0)
Change events are available for the object.
PersonEmploymentFeed on page 1429
Feed tracking is available for the object.
PersonEmploymentHistory on page 1434
History is available for tracked fields of the object.
PersonEmploymentShare on page 1438
Sharing is available for the object.



## ProviderSearchSyncLog

Represents a log with information about the provider search data sync status of a healthcare provider record. This object is available in
API version 49.0 and later.



## Supported Calls

delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(),
search(), undelete()

<!-- page:1348 -->

AFLS Overview                                                                                       Patient Engagement


Fields


## Field                   Details

FacilityId              Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The business account of the facility.
This field is a relationship field.
Relationship Name
Facility
Relationship Type
Lookup
Refers To
Account

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last accessed this record indirectly, for example, through
a list view or related record.

LastSync                Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp of the most recent data sync.

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp when the current user last viewed this record or list view. If this value is null,
and LastReferenceDate is not null, the user accessed this record or list view indirectly.

Message                 Type
string

<!-- page:1349 -->

AFLS Overview                                                                        Patient Engagement



Field                   Details


## Properties

Filter, Group, Nillable, Sort
Description
The message returned if an error occurred during the data sync.

Name                    Type
string
Properties
Filter, Group, idLookup, Sort
Description
Name of the provider search sync log.

OwnerId                 Type
reference
Properties
Filter, Group, Sort
Description
The ID of the owner of the record.
This field is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ProviderId              Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The ID of the healthcare organization or the practitioner.
This field is a relationship field.
Relationship Name
Provider
Relationship Type
Lookup
Refers To
HealthcareProvider

<!-- page:1350 -->

AFLS Overview                                                                                                          Patient Engagement




## Field                                    Details

ProviderName                             Type
string
Properties
Filter, Group, Nillable, Sort
Description
The name of the healthcare provider.

SyncStatus                               Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Sort
Description
The status of the data sync.
Possible values are:
- Failure
- Success
The default value is Success.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ProviderSearchSyncLogChangeEvent (API version 60.0)
Change events are available for the object.
ProviderSearchSyncLogFeed
Feed tracking is available for the object.
ProviderSearchSyncLogHistory
History is available for tracked fields of the object.
ProviderSearchSyncLogOwnerSharingRule
Sharing rules are available for the object.
ProviderSearchSyncLogShare
Sharing is available for the object.



## Social Determinants

The social determinants data model represents the barriers, health determinants, and interventions for a patient or member. Available
in API version 45.0 and later.
The social determinants standard objects are visible to users with the Health Cloud Starter permission set.

<!-- page:1351 -->

AFLS Overview                                                                                                     Patient Engagement





## CareBarrier

Represents the circumstances or obstacles affecting a patient or member. Available in API version 45.0 and later.
CareBarrierDeterminant
Represents the relationship of a barrier to a determinant for a patient or member. Available in API version 45.0 and later.
CareBarrierType
Represents the standard, defined list of barriers maintained by an organization. Available in API version 45.0 and later.
CareDeterminant
Represents the determinants of health for a patient such as availability of safe housing, adequate employment, or local food markets.
Available in API version 45.0 and later.
CareDeterminantType
Represents the standard, defined list of determinants of health maintained by an organization, including the domain and type.
Available in API version 45.0 and later.
CareInterventionType
Represents the standard, defined list of interventions maintained by an organization. Available in API version 45.0 and later.



## CareBarrier

Represents the circumstances or obstacles affecting a patient or member. Available in API version 45.0 and later.

<!-- page:1352 -->

AFLS Overview                                                                                  Patient Engagement



## Supported Calls

describeLayout(),describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()


Fields


## Field Name                        Details

CareBarrierTypeId                 Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Identifier for the care barrier type for the patient or member.
This is a relationship field.
Relationship Name
CareBarrierType
Relationship Type
Lookup
Refers To
CareBarrierType

CaseId                            Type
reference
Properties
Filter, Group, Nillable, Sort
Description
ID of the associated case.
This is a relationship field.
Relationship Name
Case
Relationship Type
Lookup
Refers To
Case

EffectiveFrom                     Type
date
Properties
Filter, Group, Nillable, Sort
Description
The date on which the barrier becomes effective.

<!-- page:1353 -->

AFLS Overview                                                                            Patient Engagement




## Field Name                 Details

EffectiveTo                Type
date
Properties
Filter, Group, Nillable, Sort
Description
Termination date for the barrier.

ExtlProblemDefIdentifier   Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the external problem definition in the source system.

IsActive                   Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this barrier is active.

LastReferencedDate         Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate             Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

Name                       Type
string
Properties
Filter, Group, idLookup, Sort

<!-- page:1354 -->

AFLS Overview                                                                   Patient Engagement



Field Name              Details

Description
Name of the barrier.

OwnerId                 Type
reference
Properties
Filter, Group, Sort
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

PatientId               Type
reference
Properties
Filter, Group, Sort
Description
Identifier for the patient or member.
This is a relationship field.
Relationship Name
Patient
Relationship Type
Lookup
Refers To
Account

Priority                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Sort, Update
Description
Priority of the barrier.
The values are:
- Low
- Normal

<!-- page:1355 -->

AFLS Overview                                                                                Patient Engagement



Field Name                     Details
- High

SourceSystemIdentifier         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the care barrier record in the external source system.

SourceSystemModifiedDateTime   Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date and time when the care barrier record was last modified in the external
source system.

SourceSystemName               Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the external source system from which the record was imported.

Status                         Type
picklist
Properties
Defaulted on create, Filter, Group, Sort
Description
Status of the barrier.
The values are:
- Open
- Addressed

SurveyResponseId               Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Identifier for the survey response related to the barrier.

<!-- page:1356 -->

AFLS Overview                                                                                                          Patient Engagement



## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareBarrierChangeEvent (API version 58.0)
Change events are available for the object.
CareBarrierFeed
Feed tracking is available for the object.
CareBarrierHistory
History is available for tracked fields of the object.
CareBarrierOwnerSharingRule
Sharing rules are available for the object.
CareBarrierShare
Sharing is available for the object.



## CareBarrierDeterminant

Represents the relationship of a barrier to a determinant for a patient or member. Available in API version 45.0 and later.



## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()


Fields


## Field Name                                          Details

CareBarrierId                                       Type
reference
Properties
Filter, Group, Sort
Description
ID of the care barrier associated with this record.
This is a relationship field.
Relationship Name
CareBarrier
Relationship Type
Lookup
Refers To
CareBarrier

CareDeterminantId                                   Type
reference
Properties
Filter, Group, Sort

<!-- page:1357 -->

AFLS Overview                                                                          Patient Engagement



Field Name              Details


## Description

ID of the care determinant associated with this record.
This is a relationship field.
Relationship Name
CareDeterminant
Relationship Type
Lookup
Refers To
CareDeterminant

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

Name                    Type
string
Properties
Filter, Group, idLookup, Sort
Description
The name of the relationship between the barrier and the determinant. For
example, Mold growth in home - Housing.

OwnerId                 Type
reference
Properties
Filter, Group, Sort

<!-- page:1358 -->

AFLS Overview                                                                                                       Patient Engagement



Field Name                                           Details


## Description

The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User




## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareBarrierDeterminantChangeEvent (API version 60.0)
Change events are available for the object.
CareBarrierDeterminantFeed
Feed tracking is available for the object.
CareBarrierDeterminantHistory
History is available for tracked fields of the object.
CareBarrierDeterminantOwnerSharingRule
Sharing rules are available for the object.
CareBarrierDeterminantShare
Sharing is available for the object.



## CareBarrierType

Represents the standard, defined list of barriers maintained by an organization. Available in API version 45.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field                                    Details

Code                                     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update

<!-- page:1359 -->

AFLS Overview                                                                                    Patient Engagement



Field                   Details


## Description

Medical vocabulary code for the barrier.

CodeType                Type
picklist
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Medical vocabulary code type for the barrier.
Possible values are:
- ICD-10-CM
- SNOMED CT

Description             Type
textarea
Properties
Create, Nillable, Update
Description
Description of the barrier.

DiagnosisCodeSetId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Diagnosis code set associated with the care barrier type.
This is a polymorphic relationship field.
Relationship Name
DiagnosisCodeSet
Relationship Type
Lookup
Refers To
CodeSet, CodeSetBundle

HealthCareDiagnosisId   Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
Diagnosis code for the barrier. HealthCareDiagnosisId may be deprecated in a future release,
so use DiagnosisCodeSetId instead.

<!-- page:1360 -->

AFLS Overview                                                                                       Patient Engagement




## Field                   Details

This is a relationship field.
Relationship Name
HealthCareDiagnosis
Relationship Type
Lookup
Refers To
HealthCareDiagnosis

IsActive                Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether this care barrier type is active.
The default value is 'false'.

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
Create, Filter, Group, idLookup, Sort, Update
Description
Name of the care barrier type.

OwnerId                 Type
reference

<!-- page:1361 -->

AFLS Overview                                                                                                          Patient Engagement



Field                                    Details


## Properties

Create, Defaulted on create, Filter, Group, Sort, Update
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareBarrierTypeChangeEvent (API version 60.0)
Change events are available for the object.
CareBarrierTypeFeed
Feed tracking is available for the object.
CareBarrierTypeHistory
History is available for tracked fields of the object.
CareBarrierTypeOwnerSharingRule
Sharing rules are available for the object.
CareBarrierTypeShare
Sharing is available for the object.



## CareDeterminant

Represents the determinants of health for a patient such as availability of safe housing, adequate employment, or local food markets.
Available in API version 45.0 and later.



## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()


Fields


## Field Name                                          Details

CareDeterminantTypeId                               Type
reference

<!-- page:1362 -->

AFLS Overview                                                                         Patient Engagement



Field Name              Details

Properties
Filter, Group, Sort
Description
Care determinant for the patient or member.
This is a relationship field.
Relationship Name
CareDeterminantType
Relationship Type
Lookup
Refers To
CareDeterminantType

IsActive                Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this care determinant is active.

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

Name                    Type
string
Properties
Filter, Group, idLookup, Sort

<!-- page:1363 -->

AFLS Overview                                                           Patient Engagement



Field Name              Details


## Description

Name of the care determinant.

OwnerId                 Type
reference
Properties
Filter, Group, Sort
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

PatientId               Type
reference
Properties
Filter, Group, Sort
Description
Identifier for the patient or member.
This is a relationship field.
Relationship Name
Patient
Relationship Type
Lookup
Refers To
Account

Priority                Type
picklist
Properties
Defaulted on create, Filter, Group, Nillable, Sort
Description
Priority of the determinant such as Low or High.

SurveyResponseId        Type
reference

<!-- page:1364 -->

AFLS Overview                                                                                                          Patient Engagement



Field Name                                          Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
Survey response related to the determinant.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
CareDeterminantChangeEvent (API version 58.0)
Change events are available for the object.
CareDeterminantFeed
Feed tracking is available for the object.
CareDeterminantHistory
History is available for tracked fields of the object.
CareDeterminantOwnerSharingRule
Sharing rules are available for the object.
CareDeterminantShare
Sharing is available for the object.



## CareDeterminantType

Represents the standard, defined list of determinants of health maintained by an organization, including the domain and type. Available
in API version 45.0 and later.



## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search()


Fields


## Field Name                                          Details

Description                                         Type
textarea
Properties
Nillable
Description
Description of the determinant.

Domain                                              Type
picklist

<!-- page:1365 -->

AFLS Overview                                                                       Patient Engagement



Field Name              Details

Properties
Filter, Group, Sort
Description
The domain for the determinant.
The values are:
- Access to health care
- Child care
- Clothing
- Education
- Employment
- Finances
- Food
- General (non-specific)
- Housing
- Immigration/Migration
- Incarceration
- Primary Language
- Race/Ethnicity
- Residential Address
- Safety
- Social Connections/Isolation
- Stress
- Transportation
- Utilities
- Veteran Status

IsActive                Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this care determinant type is active.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

<!-- page:1366 -->

AFLS Overview                                                                         Patient Engagement




## Field Name              Details

LastViewedDate          Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

Name                    Type
string
Properties
Filter, Group, idLookup, Sort
Description
Name of the care determinant type.

OwnerId                 Type
reference
Properties
Filter, Group, Sort
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

Type                    Type
picklist
Properties
Defaulted on create, Filter, Group, Sort
Description
The type of determinant.
The values are:
- Social
- Behavior
- Genetics

<!-- page:1367 -->

AFLS Overview                                                                                                       Patient Engagement



## Associated Objects

This object has the following associated objects. Unless noted, they are available in the same API version as this object.
CareDeterminantTypeChangeEvent (API version 60.0)
Change events are available for the object.
CareDeterminantTypeFeed
Feed tracking is available for the object.
CareDeterminantTypeHistory
History is available for tracked fields of the object.
CareDeterminantTypeOwnerSharingRule
Sharing rules are available for the object.
CareDeterminantTypeShare
Sharing is available for the object.



## CareInterventionType

Represents the standard, defined list of interventions maintained by an organization. Available in API version 45.0 and later.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()


Fields


## Field Name                                          Details

Code                                                Type
string
Properties
Filter, Group, Nillable, Sort
Description
Medical vocabulary code for the intervention.

CodeType                                            Type
picklist
Properties
Defaulted on Create, Filter, Group, Nillable, Sort
Description
Medical vocabulary code type for the intervention.

Description                                         Type
textarea
Properties
Nillable

<!-- page:1368 -->

AFLS Overview                                                                       Patient Engagement



Field Name              Details


## Description

Description of the intervention.

HealthCareProcedureId   Type
reference
Properties
Filter, Group, Nillable, Sort
Description
Procedure code for the intervention.
This is a relationship field.
Relationship Name
HealthCareProcedure
Relationship Type
Lookup
Refers To
HealthCareProcedure

InterventionType        Type
picklist
Properties
Filter, Group, Nillable, Sort
Description
The type of intervention.

IsActive                Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether this intervention type is active.

LastReferencedDate      Type
dateTime
Properties
Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed a record related to this
record.

LastViewedDate          Type
dateTime

<!-- page:1369 -->

AFLS Overview                                                                         Patient Engagement



Field Name              Details


## Properties

Filter, Nillable, Sort
Description
The timestamp for when the current user last viewed this record. If this value is
null, it’s possible that this record was referenced (LastReferencedDate) and not
viewed.

Name                    Type
string
Properties
Filter, Group, idLookup, Sort
Description
Name of the intervention type.

OwnerId                 Type
reference
Properties
Filter, Group, Sort
Description
The ID of the user who owns this record.
This is a polymorphic relationship field.
Relationship Name
Owner
Relationship Type
Lookup
Refers To
Group, User

ProcedureCodeSetId      Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The procedure code set associated with the care intervention type.
This is a polymorphic relationship field.
Relationship Name
ProcedureCodeSet
Relationship Type
Lookup
Refers To
CodeSet, CodeSetBundle

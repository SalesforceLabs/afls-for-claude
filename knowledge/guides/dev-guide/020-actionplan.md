<!-- guide:dev-guide section:actionplan pages:1458-1460 -->
# ActionPlan

AFLS Overview                                                                                                                     ActionPlan



Field                                   Details

Relationship Name
GoalDefinition
Refers To
GoalDefinition

SourceSystemIdentifier                  Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in the source system.

SourceSystemName                        Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system from which data is loaded into the object.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
AccountPlanObjectiveChangeEvent
Change events are available for the object.
AccountPlanObjectiveFeed
Feed tracking is available for the object.
AccountPlanObjectiveHistory
History is available for tracked fields of the object.
AccountPlanObjectiveShare on page 1438
Sharing is available for the object.


SEE ALSO:
Object Reference for the Salesforce Platform: AccountPlanObjective
Object Reference for the Salesforce Platform: AccountPlanObjective



## ActionPlan

AFLS fields extend the standard ActionPlan object to represent the instance of an action plan.

<!-- page:1459 -->

AFLS Overview                                                                                                       ActionPlan


The ActionPlan object and its fields are used by the Key Account Management and the Provider Engagement Compliance feature areas.
This topic only lists the fields used in Key Account Management. To learn about the fields that are used in Provider Engagement
Compliance, see the ActionPlan object documentation in the Provider Engagement Compliance section.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), undelete(), update(), upsert()



## Fields

Field                               Details
CompletedPercentage                 Type
percent
Properties
Create, Filter, Nillable, Sort, Update
Description
The percentage of the action plan that has been completed.

SourceSystemIdentifier              Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in the source system.

SourceSystemName                    Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system from which data is loaded into this object.

SprintId                            Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The sprint which tracks the action plan.
This field is a relationship field.
Relationship Name
Sprint

<!-- page:1460 -->

AFLS Overview                                                                                                                     ActionPlan



Field                                   Details

Refers To
Sprint

StatusCode                              Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort, Update
Description
Specifies the current status of the action plan.
Possible values are:
- Canceled
- Completed
- In Progress
- Not Started
- Restarted

TargetReferenceRecordId Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The reference record associated with the action plan.
This field is a polymorphic relationship field.
Relationship Name
TargetReferenceRecord
Refers To
CareProgram, Visit




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ActionPlanChangeEvent
Change events are available for the object.
ActionPlanFeed
Feed tracking is available for the object.

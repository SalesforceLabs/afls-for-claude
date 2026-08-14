<!-- guide:dev-guide section:accountplanobjective pages:1457-1457 -->
# AccountPlanObjective

AFLS Overview                                                                                                AccountPlanObjective




## AccountPlanShare on page 1438

Sharing is available for the object.


SEE ALSO:
Object Reference for the Salesforce Platform: AccountPlan
Object Reference for the Salesforce Platform: AccountPlan



## AccountPlanObjective

AFLS fields extend the standard Account Plan Objective object to represent information about strategic objectives or
initiatives pursued by a relationship team with a customer to enhance customer engagement and satisfaction.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Fields

Field                                    Details
ActionPlanCompletedPct                   Type
percent
Properties
Create, Filter, Nillable, Sort, Update
Description
The completed percentage of action plans associated with the account plan objective.

DueDate                                  Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
The date when the objective is due to be completed.

GoalDefinitionId                         Type
reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The goal definition associated with the account plan objective.
This field is a relationship field.

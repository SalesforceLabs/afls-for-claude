<!-- guide:dev-guide section:actionplanitem pages:1461-1461 -->
# ActionPlanItem

AFLS Overview                                                                                                                ActionPlanItem




## ActionPlanShare

Sharing is available for the object.


SEE ALSO:
Object Reference for the Salesforce Platform: ActionPlan



## ActionPlanItem

AFLS fields extend the standard ActionPlanItem object to represent the instance of an action plan item.
The ActionPlanItem object and its fields are used by the Key Account Management and the Provider Engagement Compliance feature
areas. This topic only lists the fields used in Key Account Management. To learn about the fields that are used in Provider Engagement
Compliance, see the ActionPlanItem object documentation in the Provider Engagement Compliance section.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), undelete(), update(), upsert()



## Fields

Field                                    Details
SourceSystemIdentifier                   Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in the source system.

SourceSystemName                         Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system from which data is loaded into this object.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.

<!-- guide:dev-guide section:actionplantemplateitemvalue pages:1462-1462 -->
# ActionPlanTemplateItemValue

AFLS Overview                                                                                              ActionPlanTemplateItemValue




## ActionPlanItemChangeEvent

Change events are available for the object.


SEE ALSO:
Object Reference for the Salesforce Platform: ActionPlanItem



## ActionPlanTemplateItemValue

AFLS fields extend the standard ActionPlanTemplateItemValue object to represent the value associated with an action
plan template item.
The ActionPlanTemplateItemValue object and its fields are used by the Key Account Management and the Provider Engagement
Compliance feature areas. This topic only lists the fields used in Key Account Management. To learn about the fields that are used in
Provider Engagement Compliance, see the ActionPlanTemplateItemValue object documentation in the Provider Engagement Compliance
section.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Fields

Field                                   Details
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
The name of the system from which data is loaded into this object.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.

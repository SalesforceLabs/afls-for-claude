<!-- guide:dev-guide section:fields-on-actionplantemplateitem pages:1464-1464 -->
# Fields on ActionPlanTemplateItem

AFLS Overview                                                                                  Fields on ActionPlanTemplateItem




## Fields on ActionPlanTemplateItem

AFLS fields extend the standard ActionPlanTemplateItem object to support integration with external systems, commonly
used for Key Account Management.



## Fields

Field                                Details
SourceSystemIdentifier               Type
string
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in the source system.

SourceSystemName                     Type
string
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system from which data is loaded into this object.




## ActionPlanTemplateVersion

AFLS fields extend the standard ActionPlanTemplateVersion object to represent a version of an action plan template.
The ActionPlanTemplateVersion object and its fields are used by the Key Account Management and the Provider Engagement Compliance
feature areas. This topic only lists the fields used in Key Account Management. To learn about the fields that are used in Provider
Engagement Compliance, see the ActionPlanTemplateVersion object documentation in the Provider Engagement Compliance section.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Fields

Field                                Details
ActionPlanTemplateId                 Type
reference
Properties
Create, Filter, Group, Sort

<!-- guide:dev-guide section:fields-on-actionplantemplate pages:1463-1463 -->
# Fields on ActionPlanTemplate

AFLS Overview                                                                                        Fields on ActionPlanTemplate




## ActionPlanTemplateItemValueChangeEvent

Change events are available for the object.


SEE ALSO:
Object Reference for the Salesforce Platform: ActionPlanTemplateItemValue



## Fields on ActionPlanTemplate

AFLS fields extend the standard ActionPlanTemplate object for integration with external systems.



## Fields

Field                                Details
ParentTemplateId                     Type
Reference
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The ID of the parent template associated with the action plan template.
This field is a relationship field.
Relationship Name
ParentTemplate
Refers To
ActionPlanTemplate

SourceSystemIdentifier               Type
String
Properties
Create, Filter, Group, idLookup, Nillable, Sort, Update
Description
The identifier of the record in the source system.

SourceSystemName                     Type
String
Properties
Create, Filter, Group, Nillable, Sort, Update
Description
The name of the system from which data is loaded into this object.

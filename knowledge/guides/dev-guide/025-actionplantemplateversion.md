<!-- guide:dev-guide section:actionplantemplateversion pages:1465-1465 -->
# ActionPlanTemplateVersion

AFLS Overview                                                                               ActionPlanTemplateVersion



Field                   Details


## Description

The ID of the action plan template this version represents.
This field is a relationship field.
Relationship Name
ActionPlanTemplate
Relationship Type
Master-detail
Refers To
ActionPlanTemplate (the master object)

ActivationDateTime      Type
dateTime
Properties
Create, Filter, Nillable, Sort
Description
The date and time when this version becomes active.

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
The name of the action plan template version.

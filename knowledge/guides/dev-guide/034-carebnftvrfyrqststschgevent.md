<!-- guide:dev-guide section:carebnftvrfyrqststschgevent pages:1481-1481 -->
# CareBnftVrfyRqstStsChgEvent

AFLS Overview                                                                                               CareBnftVrfyRqstStsChgEvent




## Special Access Rules

This object is available to users with Health Cloud Starter and Manage Financial Assistance Program permission set.



## Fields

Field                                   Details
AppealIdentifier                        Type
string
Properties
Create, Nillable
Description
The identifier of an appeal that has a status change.

AppealStatus                            Type
picklist
Properties
Create, Nillable, Restricted picklist
Description
Specifies the status of an appeal.
Possible values are:
- Accepted
- Rejected

ApplicationFormIdentifier Type
string
Properties
Create, Nillable
Description
The identifier of the application associated with an appeal.

EventCreationDateTime                   Type
dateTime
Properties
Create, Nillable
Description
The date and time when the event was created.




## CareBnftVrfyRqstStsChgEvent

Notifies subscribers of changes to the status of a care benefit verify request. This object is available in API version 65.0 and later.

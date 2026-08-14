<!-- guide:dev-guide section:fields-on-event-relation pages:1472-1473 -->
# Fields on Event Relation

AFLS Overview                                                                                                  Fields on Event Relation



Field                                  Details

Relationship Name
Owner
Refers To
Calendar, User

StartDateTime                          Type
dateTime
Properties
Create, Filter, Nillable, Sort, Update
Description
Indicates the start date and time of the event. Available in versions 13.0 and later.
If the Event IsAllDayEvent flag is set to true (indicating that it’s an all-day Event), then
the event start date information is contained in the StartDateTime field. The time
portion of this field is always transferred in the Coordinated Universal Time (UTC) time zone.
Translate the time portion to or from a local time zone for the user or the application, as
appropriate.
If the Event IsAllDayEvent flag is set to false (indicating that it isn’t an all-day event),
then the event start date information is contained in the StartDateTime field. The time
portion is always transferred in the Coordinated Universal Time (UTC) time zone. You need
to translate the time portion to or from a local time zone for the user or the application, as
appropriate.
If this field has a value, then ActivityDate and ActivityDateTime must either
be null or match the value of this field.

Subject                                Type
combobox
Properties
Create, Filter, Nillable, Sort, Update
Description
The subject line of the event, such as Call, Email, or Meeting. Limit: 255 characters.



SEE ALSO:
Object Reference for the Salesforce Platform: Event



## Fields on Event Relation

AFLS fields extend the standard Event Relation object to represent a person (a user, lead, or contact) or a resource (such
as a conference room) invited to an event.

<!-- page:1473 -->

AFLS Overview                                                                                                 Fields on Event Relation




## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(),
update(), upsert()



## Fields

Field                                         Details
EventId                                       Type
reference
Properties
Create, Filter, Group, Sort
Description
Contains the ID of the event. This value can’t be changed after it’s been specified.
This is a relationship field.
Relationship Name
Event
Relationship Type
Lookup
Refers To
Event

RelationId                                    Type
reference
Properties
Create, Filter, Group, Sort
Description
Contains the ID of the person (User, Contact, or Lead) or the resource invited to an
event. When Shared Activities is enabled, RelationId can also contain the ID of
an account, opportunity, or other object related to an event.
This value can’t be changed after it’s been specified.
This is a polymorphic relationship field.
Relationship Name
Relation
Relationship Type
Lookup
Refers To
Calendar, Contact, Lead, User



SEE ALSO:
Object Reference for the Salesforce Platform: EventRelation

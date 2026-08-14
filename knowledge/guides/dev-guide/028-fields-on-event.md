<!-- guide:dev-guide section:fields-on-event pages:1470-1471 -->
# Fields on Event

AFLS Overview                                                                                                                Fields on Event



Field                                   Details


## Properties

Create, Filter, Group, Nillable, Sort, Update
Description
The URL of the website associated with the contact.




## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object.
Otherwise, they’re available in the specified API version and later.
ContactPointAddressChangeEvent on page 1426
Change events are available for the object.
ContactPointAddressHistory on page 1434
History is available for tracked fields of the object.
ContactPointAddressShare on page 1438
Sharing is available for the object.


SEE ALSO:
Object Reference for the Salesforce Platform: ContactPointAddress



## Fields on Event

AFLS fields extend the standard Event object to represent an event in the calendar. In the user interface, event and task
records are collectively referred to as activities.



## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(),
retrieve(), search(), undelete(), update(), upsert()



## Fields

Field                                   Details
Description                             Type
textarea
Properties
Create, Nillable, Update
Description
Contains a text description of the event. Limit: 32,000 characters.

EndDateTime                             Type
dateTime

<!-- page:1471 -->

AFLS Overview                                                                                               Fields on Event



Field                   Details


## Properties

Create, Filter, Nillable, Sort, Update
Description
Available in API versions 13.0 and later. The time portion of this field is always transferred in
the Coordinated Universal Time (UTC) time zone. Translate the time portion to or from a
local time zone for the user or the application, as appropriate.
This field is optional, depending on the following:
- If IsAllDayEvent is true, you can supply a value for either DurationInMinutes
or EndDateTime. Supplying values in both fields is allowed if the values add up to
the same amount of time. If both fields are null, the duration defaults to one day.
- If IsAllDayEvent is false, a value must be supplied for either
DurationInMinutes or EndDateTime. Supplying values in both fields is allowed
if the values add up to the same amount of time.
Depending on your API version, errors with the DurationInMinutes and
EndDateTime fields may appear in different places.
- Versions 38.0 and before—Errors always appear in the DurationInMinutes field.
- Versions 39.0 and later—If there’s no value for the DurationInMinutes field,
errors appear in the EndDateTime field. Otherwise, they appear in the
DurationInMinutes field.

IsAllDayEvent           Type
boolean
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Indicates whether the ActivityDate field (true) or the ActivityDateTime
field (false) is used to define the date or time of the event. Label is All-Day Event. See
also DurationInMinutes and EndDateTime.
The default value is false.

OwnerId                 Type
reference
Properties
Create, Defaulted on create, Filter, Group, Sort, Update
Description
Contains the ID of the user or public calendar who owns the event. Label is Assigned to ID.
This is a polymorphic relationship field.
By default, the event is assigned to the user who created it. If the event is created by the
Automated Process user, add a different value for OwnerId. The Automated Process user
isn’t a valid value for the OwnerId field.

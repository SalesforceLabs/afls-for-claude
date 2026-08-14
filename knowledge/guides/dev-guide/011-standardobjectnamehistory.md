<!-- guide:dev-guide section:standardobjectnamehistory pages:1438-1439 -->
# StandardObjectNameHistory

AFLS Overview                                                                                               StandardObjectNameHistory




## Field                                  Details

- RypplePost—generated when a user creates a Thanks badge in WDC.
- TextPost—a direct text entry on a feed.
- TrackedChange—a change or group of changes to a tracked field.
- UserStatus—automatically generated when a user adds a post. Deprecated.

Visibility                             Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Specifies whether this feed item is available to all users or internal users only. This field is
available if Salesforce Communities are enabled for your organization.
Visibility can have the following values:
- AllUsers—The feed item is available to all users who have permission to see the
feed item.
- InternalUsers—The feed item is available to internal users only.
Note the following exceptions for Visibility:
- For record posts, Visibility is set to InternalUsers for all internal users by
default.
- External users can set Visibility only to AllUsers.
- On user and group posts, only internal users can set Visibility to
InternalUsers.





## Usage

A feed for an object is automatically created when a user enables feed tracking for the object. Use feeds to track changes to records. For
example, AccountFeed tracks changes to an account record. Use feed objects to retrieve the content of feed fields, such as type of feed
or feed ID.
Note the following SOQL restrictions. No SOQL limit if logged-in user has View All Data permission. If not, specify a LIMIT clause of
1,000 records or fewer. SOQL ORDER BY on fields using relationships is not available. Use ORDER BY on fields on the root object
in the SOQL query.



## StandardObjectNameHistory

StandardObjectNameHistory is the model for all history objects associated with standard objects. These objects represent the
history of changes to the values in the fields of a standard object.
The object name is variable and uses StandardObjectNameHistory syntax. For example, AccountHistory represents the history of
changes to the values of an account record’s fields. We list the available associated history objects at the end of this topic. For specific
version information, see the documentation for the standard object.

<!-- page:1439 -->

AFLS Overview                                                                                           StandardObjectNameHistory




## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()



## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountHistory, see the special
access rules for Account.



## Fields

Field Name                                        Details
StandardObjectNameId                              Type
reference
Properties
Filter, Group, Sort
Description
ID of the standard object.

DataType                                          Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
Data type of the field that was changed.

Field                                             Type
picklist
Properties
Filter, Group, Restricted picklist, Sort
Description
Name of the field that was changed.

NewValue                                          Type
anyType
Properties
Nillable, Sort
Description
New value of the field that was changed.

OldValue                                          Type
anyType

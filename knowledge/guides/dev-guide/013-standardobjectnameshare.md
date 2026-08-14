<!-- guide:dev-guide section:standardobjectnameshare pages:1442-1442 -->
# StandardObjectNameShare

AFLS Overview                                                                                               StandardObjectNameShare



Field Name                                         Details


## Description

ID of the user or group that you are granting access to.




## StandardObjectNameShare

StandardObjectNameShare is the model for all share objects associated with standard objects. These objects represent a sharing
entry on the standard object.
The object name is variable and uses StandardObjectNameShare syntax. For example, AccountBrandShare is a sharing entry on
an account brand. We list the available associated share objects at the end of this topic. For specific version information, see the standard
object documentation.



## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()



## Special Access Rules

For specific special access rules, if any, see the documentation for the standard object. For example, for AccountBrandShare, see the
special access rules for AccountBrand.



## Fields

Field Name                                         Details
AccessLevel                                        Type
picklist
Properties
Create, Filter, Group, Restricted picklist, Sort, Update
Description
The level of access allowed. Values are:
- All (owner)
- Edit (read/write)
- Read (read only)

ParentId                                           Type
reference
Properties
Create, Filter, Group, Sort
Description
ID of the parent record.

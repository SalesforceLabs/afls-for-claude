<!-- guide:dev-guide section:uiobjectrelationconfig pages:1967-1971 -->
# UIObjectRelationConfig

AFLS Overview                                                                                                                                                                                                                                                                                                                                                                                                                        UIObjectRelationConfig



Comments&quot;},{&quot;entity&quot;:&quot;CombinedAttachments&quot;,&quot;label&quot;:&quot;Attachments&quot;},{&quot;entity&quot;:&quot;AttachedContentDocuments&quot;,&quot;label&quot;:&quot;Files&quot;}],&quot;title&quot;:{&quot;field&quot;:&quot;CaseNumber&quot;,&quot;label&quot;:&quot;Case

Number&quot;,&quot;type&quot;:&quot;AutoNumber&quot;},&quot;subTitle&quot;:{&quot;field&quot;:&quot;Comments&quot;,&quot;label&quot;:&quot;Internal

Comments&quot;,&quot;type&quot;:&quot;MultiLineText&quot;}},&quot;filters&quot;:[{&quot;field&quot;:{&quot;field&quot;:&quot;Status&quot;,&quot;label&quot;:&quot;Status&quot;,&quot;type&quot;:&quot;DynamicEnum&quot;},&quot;operator&quot;:&quot;EQ&quot;,&quot;values&quot;:[&quot;New&quot;],&quot;order&quot;:1}],&quot;sort&quot;:{&quot;field&quot;:&quot;CreatedDate&quot;,&quot;label&quot;:&quot;Created

Date&quot;,&quot;type&quot;:&quot;DateTime&quot;},&quot;anchorReferenceField&quot;:{&quot;field&quot;:&quot;AccountId&quot;,&quot;label&quot;:&quot;Account

ID&quot;,&quot;type&quot;:&quot;EntityId&quot;}}},{&quot;oneToMany&quot;:{&quot;eventObject&quot;:{&quot;name&quot;:&quot;Event&quot;,&quot;label&quot;:&quot;Event&quot;,&quot;recordTypes&quot;:[],&quot;fieldsToDisplay&quot;:[{&quot;field&quot;:&quot;ActivityDate&quot;,&quot;label&quot;:&quot;Due
Date
O
nl
y&
qu
ot
;,
&q
uo
t;
ty
pe
&q
uo
t;
:&
qu
ot
;D
ue
Da
te
&q
uo
t;
},
{&
qu
ot
;f
i
el
d&
qu
ot
;:
&q
uo
t;
Ate
nd
es&
qu
ot
;,
&q
uo
t;
la
be
l&
qu
ot
;:
&q
uo
t;
A
ten
des
&q
uo
t;
,&
qu
ot
;t
yp
e&
qu
ot
;:
&q
uo
t;
St
ri
ng
Pl
us
Cl
ob
&q
uo
t
;}
],
&q
uo
t;
re
la
te
dl
is
ts
To
Di
sp
la
y&
qu
ot
;:
[]
,&
qu
ot
;t
it
le
&q
u
ot
;:
{&
qu
ot
;f
ie
ld
&q
uo
t;
:&
qu
ot
;D
es
cr
ip
ti
on
&q
uo
t;
,&
qu
ot
;l
ab
e
l&
qu
ot
;:
&q
uo
t;
De
sc
ri
pt
io
n&
qu
ot
;,
&q
uo
t;
ty
pe
&q
uo
t;
:&
qu
ot
;S
t
ri
ng
Pl
us
Cl
ob
&q
uo
t;
},
&q
uo
t;
su
bT
it
le
&q
uo
t;
:{
&q
uo
t;
fi
el
d&
qu
o
t;
:&
qu
ot
;L
oc
at
io
n&
qu
ot
;,
&q
uo
t;
la
be
l&
qu
ot
;:
&q
uo
t;
Lo
ca
ti
on
&
qu
ot
;,
&q
uo
t;
ty
pe
&q
uo
t;
:&
qu
ot
;T
ex
t&
qu
ot
;},
&q
uo
t;
fi
lt
er
s&
q
uo
t;
:[
],
&q
uo
t;
so
rt
&q
uo
t;
:{
&q
uo
t;
fi
el
d&
qu
ot
;:
&q
uo
t;
Ac
ti
v
it
yD
at
e&
qu
ot
;,
&q
uo
t;
la
be
l&
qu
ot
;:
&q
uo
t;
Du
e
Date
Only&quot;,&quot;type&quot;:&quot;DueDate&quot;},&quot;anchorReferenceField&quot;:{&quot;field&quot;:&quot;WhatId&quot;,&quot;label&quot;:&quot;Related
To
ID&quot;,&quot;type&quot;:&quot;EntityId&quot;}}},{&quot;oneToMany&quot;:{&quot;eventObject&quot;:{&quot;name&quot;:&quot;Task&quot;,&quot;label&quot;:&quot;Task&quot;,&quot;recordTypes&quot;:[],&quot;fieldsToDisplay&quot;:[{&quot;field&quot;:&quot;CallDisposition&quot;,&quot;label&quot;:&quot;Call

Result&quot;,&quot;type&quot;:&quot;Text&quot;},{&quot;field&quot;:&quot;CallObject&quot;,&quot;label&quot;:&quot;Call
Object
Identifier&quot;,&quot;type&quot;:&quot;Text&quot;},{&quot;field&quot;:&quot;CallType&quot;,&quot;label&quot;:&quot;Call

Type&quot;,&quot;type&quot;:&quot;StaticEnum&quot;}],&quot;relatedlistsToDisplay&quot;:[],&quot;title&quot;:{&quot;field&quot;:&quot;Description&quot;,&quot;label&quot;:&quot;Description&quot;,&quot;type&quot;:&quot;StringPlusClob&quot;},&quot;subTitle&quot;:{&quot;field&quot;:&quot;Priority&quot;,&quot;label&quot;:&quot;Priority&quot;,&quot;type&quot;:&quot;DynamicEnum&quot;}},&quot;filters&quot;:[],&quot;sort&quot;:{&quot;field&quot;:&quot;ActivityDate&quot;,&quot;label&quot;:&quot;Due
Date
Only&quot;,&quot;type&quot;:&quot;DueDate&quot;},&quot;anchorReferenceField&quot;:{&quot;field&quot;:&quot;WhatId&quot;,&quot;label&quot;:&quot;Related
To ID&quot;,&quot;type&quot;:&quot;EntityId&quot;}}}]}}</definition>
<isActive>true</isActive>
<masterLabel>HealthTimeline</masterLabel>
</TimelineObjectDefinition>

The following is an example package.xml that references the previous definition.


<?xml version="1.0" encoding="UTF-8"?>
<Package
xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>TimelineObjectDefinition</name>
</types>
<version>55.0</version>
</Package>




## Wildcard Support in the Manifest File

This metadata type supports the wildcard character * (asterisk) in the package.xml manifest file. For information about using the
manifest file, see Deploying and Retrieving Metadata with the Zip File.



## UIObjectRelationConfig

Represents the admin-created configuration of the object relation UI component.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.

<!-- page:1968 -->

AFLS Overview                                                                                                UIObjectRelationConfig




## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

UIObjectRelationConfig components have the suffix .uiObjectRelationConfig and are stored in the
uiObjectRelationConfigs folder.



## Version

UIObjectRelationConfig components are available in API version 54.0 and later.



## Special Access Rules

You must be a Health Cloud or AFLS customer to use this metadata type



## Fields

Field Name                                 Description
contextObject                              Field Type
string
Description
Required.
The object that provides the context for this object relation configuration.

contextObjectRecordType                    Field Type
string
Description
The record type of the context object for this configuration, if applicable.

directRelationshipField                    Field Type
string
Description
For direct relationships, the child relationship field on the related object that matches
the context object.

indirectObjectContextField                 Field Type
string
Description
For indirect relationships, the field on the junction object that matches the context
object.

<!-- page:1969 -->

AFLS Overview                                                                                   UIObjectRelationConfig




## Field Name                   Description

indirectObjectRelatedField   Field Type
string
Description
For indirect relationships, the field on the junction object that matches the related
object.

indirectRelationshipObject   Field Type
string
Description
For indirect relationships, the junction object representing the relationship between
the related object and its context object.

isActive                     Field Type
boolean
Description
Indicates whether the configuration is active (true) or not (false).

masterLabel                  Field Type
string
Description
Required.
Label for the UIObjectRelationConfig. In the UI, this field is UI Object Relation Config.

relatedObject                Field Type
string
Description
Required.
The object containing the data that this object relation configuration displays.

relatedObjectRecordType      Field Type
string
Description
The record type of the related object for this configuration.


## relationshipType             Field Type

ObjectRelationshipType (enumeration of type string)
Description
Required.
A string indicating the type of relationship between the related object and context
object.
Valid values are:

<!-- page:1970 -->

AFLS Overview                                                                                                   UIObjectRelationConfig



Field Name                                  Description
- Direct
- Indirect
- InverseDirect
- Self


## UIObjectRelationFieldConfigs Field Type

UIObjectRelationFieldConfig[]
Description
Provides a configuration for an object relation field on a specific row of content.




## UIObjectRelationFieldConfig

Represents a configuration for a single row of content on a specific object relation configuration.


## Field Name                                  Description

displayLabel                                Field Type
string
Description
Required.
A string containing the user-defined label for this field, to be displayed on each object
relation of this type.

queryText                                   Field Type
string
Description
Required.
A case-insensitive template query for generating the content in this field.

rowOrder                                    Field Type
int
Description
Required.
Determines the top-to-bottom display order of this field on the object relation UI.




## Declarative Metadata Sample Definition

This is an example of a UIObjectRelationConfig component.
<?xml version="1.0" encoding="UTF-8"?>
<UIObjectRelationConfig xmlns="http://soap.sforce.com/2006/04/metadata">

<!-- page:1971 -->

AFLS Overview                                        UIObjectRelationConfig




## <UIObjectRelationFieldConfigs>

<displayLabel>Address:</displayLabel>
<queryText>{
"startNode": {
"initialObject": "RelatedObject"
},
"traversalNodes": [],
"fieldNode": {
"fieldEnumOrId": "ShippingAddress"
}
}</queryText>
<rowOrder>1</rowOrder>
</UIObjectRelationFieldConfigs>
<UIObjectRelationFieldConfigs>
<displayLabel>Phone:</displayLabel>
<queryText>{
"startNode": {
"initialObject": "RelatedObject"
},
"traversalNodes": [],
"fieldNode": {
"fieldEnumOrId": "Phone"
}
}</queryText>
<rowOrder>2</rowOrder>
</UIObjectRelationFieldConfigs>
<UIObjectRelationFieldConfigs>
<displayLabel>Fax:</displayLabel>
<queryText>{
"startNode": {
"initialObject": "RelatedObject"
},
"traversalNodes": [],
"fieldNode": {
"fieldEnumOrId": "Fax"
}
}</queryText>
<rowOrder>3</rowOrder>
</UIObjectRelationFieldConfigs>
<UIObjectRelationFieldConfigs>
<displayLabel>Parent Organization:</displayLabel>
<queryText>{
"startNode": {
"initialObject": "RelatedObject"
},
"traversalNodes": [
{
"destinationObjectEnumOrId": "Account",
"fieldEnumOrId": "ParentId",
"traversalDirection": "parent"
}
],
"fieldNode": {
"fieldEnumOrId": "Name"

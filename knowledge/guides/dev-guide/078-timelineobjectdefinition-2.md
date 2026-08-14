<!-- guide:dev-guide section:timelineobjectdefinition-2 pages:1965-1966 -->
# TimelineObjectDefinition

AFLS Overview                                                                                                  TimelineObjectDefinition




## Declarative Metadata Sample Definition

The following is an example of a SearchResultActionConfig component.
<?xml version="1.0" encoding="UTF-8"?>
<SearchResultActionConfig xmlns="http://soap.sforce.com/2006/04/metadata">
<actionReference>setup_service_experience__Create_Case</actionReference>
<actionScope>Global</actionScope>
<actionType>FlowDefinition</actionType>
<agentConfirmationMessage>test confirmation message</agentConfirmationMessage>
<description>Screen flow to create a case.</description>
<isAiAction>true</isAiAction>
<masterLabel>Create a Case</masterLabel>
</SearchResultActionConfig>

The following is an example package.xml that references the previous definition.
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
<types>
<members>*</members>
<name>SearchResultActionConfig</name>
</types>
<version>59.0</version>
</Package>




## Wildcard Support in the Manifest File

This metadata type supports the wildcard character * (asterisk) in the package.xml manifest file. For information about using the
manifest file, see Deploying and Retrieving Metadata with the Zip File.



## TimelineObjectDefinition

Represents the container that stores the details of a timeline configuration. You can use this resource with Salesforce objects to see their
records' related events in a linear time-sorted view.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

TimelineObjectDefinition components have the suffix .timelineObjectDefinition and are stored in the
timelineObjectDefinitions folder.



## Version

TimelineObjectDefinition components are available in API version 55.0 and later.

<!-- page:1966 -->

AFLS Overview                                                                                                                                                                                                                                                           TimelineObjectDefinition




## Special Access Rules

TimelineObjectDefinition is available in any org that has the Timeline org preference enabled.



## Fields

Field Name                                                                                              Description
baseObject                                                                                              Field Type
string
Description
Required.
The object on which a timeline is based. Information displayed in a timeline comes
from objects that are related to the base object. The base object can be a Salesforce
object or custom object.

definition                                                                                              Field Type
string
Description
Required.
The timeline definition in JSON format.

isActive                                                                                                Field Type
boolean
Description
Indicates whether the timeline is active (true) or not (false).

masterLabel                                                                                             Field Type
string
Description
Required.
The user interface label of the timeline object definition record.




## Declarative Metadata Sample Definition

The following is an example of a TimelineObjectDefinition component.
<?xml version="1.0" encoding="UTF-8"?>
<TimelineObjectDefinition
xmlns="http://soap.sforce.com/2006/04/metadata">
<baseObject>Account</baseObject>

<definition>{&quot;timeline&quot;:{&quot;anchorObject&quot;:{&quot;object&quot;:{&quot;entity&quot;:&quot;Account&quot;,&quot;label&quot;:&quot;Account&quot;,&quot;source&quot;:&quot;&quot;,&quot;icon&quot;:&quot;&quot;}},&quot;age&quot;:{&quot;field&quot;:&quot;EffectiveDate&quot;,&quot;label&quot;:&quot;Effective

D
a
t
e
&q
u
o
t
;,
&
q
u
ot
;
t
y
pe
&
q
u
ot
;
:
&
qu
o
t
;
Da
t
e
T
im
e
&
q
uo
t
;
}
,&
q
u
o
t;
e
v
e
nt
s
&
q
uo
t
;
:
[{
&
q
u
ot
;
o
n
eT
o
M
a
ny
&
q
u
ot
;
:
{
&q
u
o
t
;e
v
e
n
tO
b
j
e
ct
&
q
u
ot
;
:
{
&q
u
o
t
;n
a
m
e
&q
u
o
t
;:
&
q
u
ot
;
C
a
se
&
q
u
ot
;
,
&
qu
o
t
;
la
b
e
l
&q
u
o
t
;:
&
q
u
ot
;
C
a
se
&
q
u
ot
;
,
&
qu
o
t
;
re
c
o
r
dT
y
p
e
s&
q
u
o
t;
:
[
]
,&
q
u
o
t;
f
i
e
ld
s
T
o
Di
s
p
l
ay
&
q
u
ot
;
:
[
{&
q
u
o
t;
f
i
e
ld
&
q
u
ot
;
:
&
qu
o
t
;
De
s
c
r
ip
t
i
o
n&
q
u
o
t;
,
&
q
uo
t
;
l
ab
e
l
&
qu
o
t
;
:&
q
u
o
t;
D
e
s
cr
i
p
t
io
n
&
q
uo
t
;
,
&q
u
o
t
;t
y
p
e
&q
u
o
t
;:
&
q
u
ot
;
S
t
ri
n
g
P
lu
s
C
l
ob
&
q
u
ot
;
}
,
{&
q
u
o
t;
f
i
e
ld
&
q
u
ot
;
:
&
qu
o
t
;
Pr
i
o
r
it
y
&
q
uo
t
;
,
&q
u
o
t
;l
a
b
e
l&
q
u
o
t;
:
&
q
uo
t
;
P
ri
o
r
i
ty
&
q
u
ot
;
,
&
qu
o
t
;
ty
p
e
&
qu
o
t
;
:&
q
u
o
t;
D
y
n
am
i
c
E
nu
m
&
q
uo
t
;
}
,{
&
q
u
ot
;
f
i
el
d
&
q
uo
t
;
:
&q
u
o
t
;S
t
a
t
us
&
q
u
ot
;
,
&
qu
o
t
;
la
b
e
l
&q
u
o
t
;:
&
q
u
ot
;
S
t
at
u
s
&
qu
o
t
;
,&
q
u
o
t;
t
y
p
e&
q
u
o
t;
:
&
q
uo
t
;
D
yn
a
m
i
cE
n
u
m
&q
u
o
t
;}
,
{
&
qu
o
t
;
fi
e
l
d
&q
u
o
t
;:
&
q
u
ot
;
S
u
bj
e
c
t
&q
u
o
t
;,
&
q
u
ot
;
l
a
be
l
&
q
uo
t
;
:
&q
u
o
t
;S
u
b
j
ec
t
&
q
uo
t
;
,
&q
u
o
t
;t
y
p
e
&q
u
o
t
;:
&
q
u
ot
;
T
e
xt
&
q
u
ot
;
}
]
,&
q
u
o
t;
r
e
l
at
e
d
l
is
t
s
T
oD
i
s
p
la
y
&
q
uo
t
;
:
[{
&
q
u
ot
;
e
n
ti
t
y
&
qu
o
t
;
:&
q
u
o
t;
C
a
s
eC
o
me
n
t
s
&q
u
o
t
;,
&
q
u
ot
;
l
a
be
l
&
q
uo
t
;
:
&q
u
o
t
;C
a
s
e

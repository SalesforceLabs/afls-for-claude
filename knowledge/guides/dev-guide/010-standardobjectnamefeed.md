<!-- guide:dev-guide section:standardobjectnamefeed pages:1433-1437 -->
# StandardObjectNameFeed

AFLS Overview                                                                                             StandardObjectNameFeed


- ProviderAcctProductInfo
- ProviderAcctTerritoryInfo
- ProviderAffiliation
- ProviderAffiliationProduct
- PrvdEngmtComplianceCycle
- PrvdAccountTerritorySummary
- Sprint
- TerritoryAccountScore
- TerritoryAcctProdMsgScore
- TerritoryAcctRcmdAction
- TerritoryBusinessPlan
- TerrGeoAssignmentRule
- TerrProvAffilAssignRule
- VideoCall
- VideoCallParticipant
- VideoCallPtcpRequest
- VideoCallPtcpSession
- VideoCallRecording



## StandardObjectNameFeed

StandardObjectNameFeed is the model for all feed objects associated with standard objects. These objects represent the posts
and feed-tracked changes of a standard object.
The object name is variable and uses StandardObjectNameFeed syntax. For example, AccountFeed represents the posts and
feed-tracked changes on an account record. We list the available associated feed objects at the end of this topic. For specific version
information, see the documentation for the standard object.



## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()



## Special Access Rules

In the internal org, users can delete all feed items they created. This rule varies in communities where threaded discussions and
delete-blocking are enabled. Community members can delete all feed items they created, provided the feed items don’t have content
nested under them—like a comment, answer, or reply. Where the feed item has nested content, only feed moderators and users with
the Modify All Data permission can delete threads.
To delete feed items they didn’t create, users must have one of these permissions:
- Modify All Data
- Modify All Records on the parent object, like Account for AccountFeed
- Moderate Chatter

Note: Users with the Moderate Chatter permission can delete only the feed items and comments they can see.

<!-- page:1434 -->

AFLS Overview                                                                                             StandardObjectNameFeed


Only users with this permission can delete items in unlisted groups.

For more special access rules, if any, see the documentation for the standard object. For example, for AccountFeed, see the special access
rules for Account.



## Fields

Field                                 Details
BestCommentId                         Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The ID of the comment marked as best answer on a question post.

Body                                  Type
textarea
Properties
Nillable, Sort
Description
The body of the post. Required when Type is TextPost. Optional when Type is
ContentPost or LinkPost.

CommentCount                          Type
int
Properties
Filter, Group, Sort
Description
The number of comments associated with this feed item.

ConnectionId                          Type
reference
Properties
Filter, Group, Nillable, Sort
Description
When a PartnerNetworkConnection modifies a record that is tracked, the CreatedBy field
contains the ID of the system administrator. The ConnectionId contains the ID of the
PartnerNetworkConnection. Available if Salesforce to Salesforce is enabled for your
organization.

InsertedById                          Type
reference
Properties
Group, Nillable, Sort

<!-- page:1435 -->

AFLS Overview                                                                                StandardObjectNameFeed



Field                   Details


## Description

ID of the user who added this item to the feed. For example, if an application migrates posts
and comments from another application into a feed, the InsertedBy value is set to the
ID of the context user.

isRichText              Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the feed item Body contains rich text. If you post a rich text feed comment
using SOAP API, set IsRichText to true and escape HTML entities from the body.
Otherwise, the post is rendered as plain text.
Rich text supports the following HTML tags:
- <p>

Tip: Though the <br> tag isn’t supported, you can use <p>&nbsp;</p>
to create lines.

- <a>
- <b>
- <code>
- <i>
- <u>
- <s>
- <ul>
- <ol>
- <li>
- <img>
The <img> tag is accessible only through the API and must reference files in Salesforce
similar to this example: <img src="sfdc://069B0000000omjh"></img>

Note: In API version 35.0 and later, the system replaces special characters in rich text
with escaped HTML. In API version 34.0 and prior, all rich text appears as a plain-text
representation.

LikeCount               Type
int
Properties
Filter, Group, Sort
Description
The number of likes associated with this feed item.

<!-- page:1436 -->

AFLS Overview                                                                                     StandardObjectNameFeed




## Field                   Details

LinkUrl                 Type
url
Properties
Nillable, Sort
Description
The URL of a LinkPost.

NetworkScope            Type
picklist
Properties
Group, Nillable, Restricted picklist, Sort
Description
Specifies whether this feed item is available in the default Experience Cloud site, a specific
Experience Cloud site, or all sites. This field is available in API version 26.0 and later, if digital
experiences is enabled for your org.
NetworkScope can have the following values:
- NetworkId—The ID of the Experience Cloud site in which the FeedItem is available.
If left empty, the feed item is only available in the default Experience Cloud site.
- AllNetworks—The feed item is available in all Experience Cloud sites.
Note the following exceptions for NetworkScope:
- Only feed items with a Group or User parent can set a NetworkId or a null value for
NetworkScope.
- For feed items with a record parent, users can set NetworkScope only to
AllNetworks.
- You can’t filter a feed item on the NetworkScope field.

ParentId                Type
reference
Properties
Filter, Group, Sort
Description
ID of the record that is tracked in the feed. The detail page for the record displays the feed.

RelatedRecordId         Type
reference
Properties
Group, Nillable, Sort
Description
ID of the ContentVersion record associated with a ContentPost. This field is null for all
posts except ContentPost.

<!-- page:1437 -->

AFLS Overview                                                                              StandardObjectNameFeed




## Field                   Details

Title                   Type
string
Properties
Group, Nillable, Sort
Description
The title of the feed item. When the Type is LinkPost, the LinkUrl is the URL and
this field is the link name.

Type                    Type
picklist
Properties
Filter, Group, Nillable, Restricted picklist, Sort
Description
The type of feed item. Values are:
- ActivityEvent—indirectly generated event when a user or the API adds a Task
associated with a feed-enabled parent record (excluding email tasks on cases). Also
occurs when a user or the API adds or updates a Task or Event associated with a case
record (excluding email and call logging).
For a recurring Task with CaseFeed disabled, one event is generated for the series only.
For a recurring Task with CaseFeed enabled, events are generated for the series and each
occurrence.

- AdvancedTextPost—created when a user posts a group announcement and, in
Lightning Experience as of API version 39.0 and later, when a user shares a post.
- AnnouncementPost—Not used.
- ApprovalPost—generated when a user submits an approval.
- BasicTemplateFeedItem—Not used.
- CanvasPost—a post made by a canvas app posted on a feed.
- CollaborationGroupCreated—generated when a user creates a public group.
- CollaborationGroupUnarchived—Not used.
- ContentPost—a post with an attached file.
- CreatedRecordEvent—generated when a user creates a record from the publisher.
- DashboardComponentAlert—generated when a dashboard metric or gauge
exceeds a user-defined threshold.
- DashboardComponentSnapshot—created when a user posts a dashboard
snapshot on a feed.
- LinkPost—a post with an attached URL.
- PollPost—a poll posted on a feed.
- ProfileSkillPost—generated when a skill is added to a user’s Chatter profile.
- QuestionPost—generated when a user posts a question.
- ReplyPost—generated when Chatter Answers posts a reply.

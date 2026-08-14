<!-- guide:dev-guide section:visitedpartyfeed pages:1443-1447 -->
# VisitedPartyFeed

AFLS Overview                                                                                                  VisitedPartyFeed




## Field Name                                      Details

RowCause                                        Type
picklist
Properties
Create, Filter, Group, Nillable, Restricted picklist, Sort
Description
Reason that the sharing entry exists.

UserOrGroupId                                   Type
reference
Properties
Create, Filter, Group, Sort
Description
ID of the user or group that has been given access to the object.




## VisitedPartyFeed

This object represents the posts and feed-tracked changes of the VisitedParty object. This object is available in API version 49.0
and later.



## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()



## Fields

Field                               Details
BestCommentId                       Type
reference
Properties
Filter, Group, Nillable, Sort
Description
The ID of the comment marked as best answer on a question post.

Body                                Type
textarea
Properties
Nillable, Sort
Description
The body of the post. Required when Type is TextPost. Optional when Type is ContentPost
or LinkPost.

<!-- page:1444 -->

AFLS Overview                                                                                         VisitedPartyFeed




## Field                   Details

CommentCount            Type
int
Properties
Filter, Group, Sort
Description
The number of comments associated with this feed item.

InsertedById            Type
reference
Properties
Group, Nillable, Sort
Description
ID of the user who added this item to the feed. For example, if an application migrates posts
and comments from another application into a feed, the InsertedBy value is set to the ID of
the context user.

IsRichText              Type
boolean
Properties
Defaulted on create, Filter, Group, Sort
Description
Indicates whether the feed item Body contains rich text. Set IsRichText to true if
you post a rich text feed item via SOAP API. Otherwise, the post is rendered as plain text.
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
The <img> tag is accessible only via the API and must reference files in Salesforce
similar to this example: <img src="sfdc://069B0000000omjh"></img>

<!-- page:1445 -->

AFLS Overview                                                                                                 VisitedPartyFeed




## Field                   Details

LikeCount               Type
int
Properties
Filter, Group, Sort
Description
The number of likes associated with this feed item.

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

<!-- page:1446 -->

AFLS Overview                                                                                      VisitedPartyFeed




## Field                   Details

RelatedRecordId         Type
reference
Properties
Group, Nillable, Sort
Description
ID of the ContentVersion record associated with a ContentPost. This field is null for all
posts except ContentPost.

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
Possible values are:
- ActivityEvent
- AdvancedTextPost—created when a user posts a group announcement and when
a user shares a post.
- AnnouncementPost
- ApprovalPost
- AttachArticleEvent
- BasicTemplateFeedItem—Basic Template Post
- CallLogPost
- CanvasPost—a post made by a canvas app posted on a feed.
- CaseCommentPost
- ChangeStatusPost
- ChatTranscriptPost
- CollaborationGroupCreated
- CollaborationGroupUnarchived
- ContentPost
- CreateRecordEvent
- DashboardComponentSnapshot
- EmailMessageEvent

<!-- page:1447 -->

AFLS Overview                                                                                                            VisitedPartyFeed



Field                                 Details
- FacebookPost
- LinkPost
- MilestoneEvent
- PollPost
- ProfileSkillPost
- QuestionPost
- ReplyPost
- RypplePost—generated when a user creates a Thanks badge in WDC.
- SocialPost
- TextPost
- TrackedChange
- UserStatus

Visibility                            Type
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

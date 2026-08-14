<!-- guide:dev-guide section:visitorfeed pages:1448-1451 -->
# VisitorFeed

AFLS Overview                                                                                                             VisitorFeed




## VisitorFeed

This object represents the posts and feed-tracked changes of the Visitor object. This object is available in API version 49.0 and later.



## Supported Calls

delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()



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
The body of the post. Required when Type is TextPost. Optional when Type is ContentPost
or LinkPost.

CommentCount                          Type
int
Properties
Filter, Group, Sort
Description
The number of comments associated with this feed item.

InsertedById                          Type
reference
Properties
Group, Nillable, Sort
Description
ID of the user who added this item to the feed. For example, if an application migrates posts
and comments from another application into a feed, the InsertedBy value is set to the ID of
the context user.

IsRichText                            Type
boolean

<!-- page:1449 -->

AFLS Overview                                                                                             VisitorFeed



Field                   Details


## Properties

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

<!-- page:1450 -->

AFLS Overview                                                                                                        VisitorFeed



Field                   Details


## Properties

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

Title                   Type
string
Properties
Group, Nillable, Sort
Description
The title of the feed item. When the Type is LinkPost, the LinkUrl is the URL and
this field is the link name.

<!-- page:1451 -->

AFLS Overview                                                                              VisitorFeed




## Field                   Details

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

<!-- guide:dev-guide section:searchresultactionconfig-2 pages:1963-1964 -->
# SearchResultActionConfig

AFLS Overview                                                                                                  SearchResultActionConfig



<version>65.0</version>
</Package>




## SearchResultActionConfig

Represents a collection of fields to set up the actions that a user can perform on results returned by criteria-based search.

Important: Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain
terms to avoid any effect on customer implementations.



## Parent Type

This type extends the Metadata metadata type and inherits its fullName field.



## File Suffix and Directory Location

SearchResultActionConfig components have the suffix .SearchResultActionConfigSettings and are stored in the
SearchResultActionConfigSettings folder.



## Version

SearchResultActionConfig components are available in API version 59.0 and later.



## Special Access Rules

This type is available if Criteria-Based Search and Filter is enabled in your org.



## Fields

Field Name                                    Description
actionReference                               Field Type
string
Description
Required.
The action that a user can launch for a search result. Specify the ID of an instance that
corresponds to your action type.


## actionScope                                   Field Type

SearchResultActionScope (enumeration of type string)
Description
Required.
Specifies the scope of the action that the user can launch.
Valid values are:
- Global—Select to apply the action to all record types in the search result.

<!-- page:1964 -->

AFLS Overview                                                                           SearchResultActionConfig




## Field Name                 Description

- Inline—Select to restrict the action to a single record. Available in API version
64.0 and later.


## actionType                 Field Type

SearchResultActionType (enumeration of type string)
Description
Required.
Specifies the type of action that a user can launch.
Valid values are:
- FlowDefinition
- LightningWebComponent
- OmniScript—Available in API version 60.0 and later.

agentConfirmationMessage   Field Type
string
Description
The confirmation message displayed to the agent. The character limit is 255. Available
in API version 64.0 and later.

description                Field Type
string
Description
The description of the search result action configuration.

isAiAction                 Type
boolean
Description
Indicates whether the current action uses generative AI (true) or not (false). The
default value is false. Available in API version 64.0 and later.

masterLabel                Field Type
string
Description
Required.
The name of the action that's displayed in the search page.

<!-- guide:dev-guide section:life-sciences-cloud-fields-on-standard-objects pages:1452-1452 -->
# AFLS Fields on Standard Objects

AFLS Overview                                                                         AFLS Fields on Standard Objects




## Field                                 Details

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



## AFLS Fields on Standard Objects

AFLS adds fields to some standard Salesforce objects to represent information about individuals. These fields are available
only in orgs where AFLS is enabled.



## Fields on Account

AFLS fields extend the standard Account object to represent information about patients and providers.
AccountPlan
AFLS fields extend the standard Account Plan object to represent information about customers with measurable
objectives and executable steps to proactively manage and grow customer relationships.
AccountPlanObjective
AFLS fields extend the standard Account Plan Objective object to represent information about strategic objectives or
initiatives pursued by a relationship team with a customer to enhance customer engagement and satisfaction.

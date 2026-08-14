<!-- guide:admin-guide section:leverage-customer-engagement-best-practices pages:718-733 -->
# Leverage Customer Engagement Best Practices




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


USER PERMISSIONS NEEDED

To resolve disbursements:
Life Sciences Field Sales Representative permission
set

AND

Health Cloud Starter permission set


Note Make sure your admin configures the custom action button to resolve disbursements.


1. From the App Launcher, find and select Product Disbursement, and select the record that requires
resolution.
2. Select the custom action button your admin configured to resolve disbursements.


## See Also

Add a Quick Action Button for Resolving Disbursements



Leverage Customer Engagement Best Practices

Leveraging extensive past experience in CRM, Medtech, and Life Sciences implementations, Salesforce
has compiled best practices from partners, clients, and professional services. These insights, gathered
over eight years from common mistakes and configuration issues, aim to guide future implementations
for clients, partners, and professional services.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.



## Project Execution Best Practices for AFLS

Review project implementation best practices gathered by Salesforce from partners, clients, and
professional services. Adopt these insights for your own implementation.

<!-- page:719 -->




## Salesforce Platform Best Practices for AFLS

Review Salesforce Platform best practices gathered by Salesforce from partners, clients, and
professional services. Adopt these insights for your own implementation.
Schema Management Best Practices for AFLS
Review schema management best practices gathered by Salesforce from partners, clients, and
professional services. Adopt these insights for your own implementation.
Profile and Page Layout Best Practices for AFLS
AFLS provides standard security profiles such as the System Administrator and the
Standard User profiles as a template to customize security profiles for your organization.
Trigger Handler Best Practices during Data Migration
Trigger handlers are important to maintain data sanity. However, keeping all trigger handlers enabled
during data migration can lead to slow performance or hit governor limits. Make sure to review the
trigger handler documentation and understand the purpose of each trigger handler.


Project Execution Best Practices for AFLS

Review project implementation best practices gathered by Salesforce from partners, clients, and
professional services. Adopt these insights for your own implementation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Planning

- Agree project roles and responsibilities at the beginning. Determine the following:
- How to conduct the implementation.
- Identify procedures for escalating project risks/problems.
- Decide on communication methods and frequency.
- Establish the function of the Architect: Governs changes to the data model and coordinates various
logic pieces such as triggers, scheduled jobs, and technical design.
-    Discuss documentation processes and requirements upfront.
- Request compliance documentation at the launch of a project to ensure you meet local industry
regulations and standards. Some companies require heavy amounts of documentation to meet
compliance regulations.
- Decide on your object naming and documentation standards before you start to implement any
features.
-    Consider the AFLS release schedule and holidays when you plan the timeline for an
implementation project.
-    Avoid development customizations as much as possible.This adds risks, extends timelines, and adds

<!-- page:720 -->



maintenance costs to the project.
- Design changes can impact requirements, and requirement changes can impact the time required
for technical resources.


Testing

- To avoid surprises when you go live, consider validating all tests upon every push of code to a dev
branch.
-    Plan ahead to conduct integration tests well before the client UAT. Performing integration testing too
close to UAT doesn't allow sufficient time to resolve any challenges that you encounter. Integration
tests involve the AFLS mobile app and the AFLS org on the web. Increase
the API limits during Regression and UAT to avoid governor limit issues during testing.
-    Conduct performance tests from within the customer network on a user's device from the start. This
provides the best real experience for the customer to test from.
- Consider device consistency during the unit, regression, and UAT testing phases of an implementation.
For example, the team cannot test with a Mac and Chrome during regression testing, and then test
with Windows and Chrome for UAT. Similarly, the team cannot do regression testing with one version
of iPad and then UAT with a different version of iPad. The behavior and test criteria differs in these
scenarios. Therefore, the best practice is to keep device testing consistent.


Support

- Bandwidth, outdated browser versions, and network latency can degrade user experience.
- Raise a case with the Salesforce support team as needed.

Salesforce Platform Best Practices for AFLS

Review Salesforce Platform best practices gathered by Salesforce from partners, clients, and professional
services. Adopt these insights for your own implementation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


API Best Practices

- No apex triggers or workflows on firing of APEX REST Reads/Inserts.
- Operation choice (Insert (fastest) -> Update -> Upsert).
- Record sizes matter (3 MB limit).
- Optimize sharing (Use less sharing models).

<!-- page:721 -->



To learn more, see API Best Practices and Use Cases.


Indexes

To make queries faster, ensure there are proper indexes and external IDs for fields that are in the 'where'
clause.

Indexes must be below these thresholds to be useful:

- Custom Indexes: Lower of (10% of 1M + 5% over 1M) or 333,333.
- Standard Indexes: Lower of (30% of 1M + 15% over 1M) or 1M.
Indexes modified by “AND” and “OR":

- AND – Below 20% of total records or 666K for custom index.
- OR – Below 10% of total records or 333K in summation of all indexes.
Predicates that won’t use indexes:

- Not equal to (i.e. “!=“).
- NOT (i.e. NOT IN).
To learn more, see Indexes.


Page Layout Section Header Translations

You cannot custom translate standard section headers. The Salesforce Platform automatically translates
them based on the user's language settings. They are not configurable via the Translation Workbench. If
you want custom translation, hide the standard section header and create a new custom section header.
You can translate this custom section header using Translation Workbench.

Avoid using standard sections in the layouts. Always use custom sections.


Reports

- Use report filters
- Pre-aggregate data
- De-normalize data
- Use a data warehouse
To learn more, see Reporting.


Sharing Best Practices

Avoid over protection. Follow a pattern of least-privilege. Don't nest groups deeply.

<!-- page:722 -->



To learn more, see Best Practices for Optimizing Sharing Performance.


Skinny Tables

Salesforce can create skinny tables to contain frequently used fields and to avoid joins. This can improve
the performance of certain read-only operations. Skinny tables are kept in sync with their source tables
when the source tables are modified. If you want to use skinny tables, contact Salesforce Customer
Support.

Advantages of skinny tables include:

- Better Cache Utilization
- Reduced Joins
- Invisible to End users
- Supported in reports, list views and SOQL queries
To learn more, see Skinny Tables.


Web Browser Considerations

Use separate browser contexts when you access different Salesforce environments such as sandboxes or
multiple production instances. Otherwise, cookies and session info can get mixed up and cause
problems such as corruption issues with the organization and AFLS functionality. Examples
of separate browser contexts include using different Chrome users/people, Firefox profiles, or browser
extensions that create separate contexts.

All incognito/private browser windows share a common set of cookies. You can use an incognito/private
window to separate from an org logged into a non-incognito/private window. However, it may cross
cookies when using multiple incognito/private windows for multiple org logins.


Schema Management Best Practices for AFLS

Review schema management best practices gathered by Salesforce from partners, clients, and
professional services. Adopt these insights for your own implementation.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.

<!-- page:723 -->




Field Types

There are two types of fields on an object:

- Salesforce standard fields are delivered by Salesforce.com
- Customer custom fields are created for the customer implementation.

API Naming Convention

Always implement the API naming convention agreed upon at the start of the project. The convention
depends on the strategy chosen by the system architect. Keep it universal by adding the organization’s
prefix or suffix to differentiate between Salesforce custom fields and customer-built custom fields.

Examples:

- OneEducation_<client name>__c
- License_<client name>__c
In the description section, identify the:

- Group that requested the field
- ISO codes of the countries
- Business Units
- Integrations using the field

Organize Fields

Organize your fields by prefixing any unused custom field labels with “dep_[fieldname] (Dep for
'Deprecated')

Examples:

- dep_fax
- dep_website
Salesforce sorts the fields by label name. Prefixing them moves them to the bottom of the list and out of
your way. This makes it easier for you to manage the environment.


Field Limitations

Understand the field limitations per object:

- The number of custom fields allowed per object varies according to your Salesforce edition. The
Unlimited edition allows a maximum of 800 custom fields. To learn more, see Custom Fields Allowed
Per Object.
-   You can designate up to 25 External ID fields per object. To learn more, see Maximum number of

<!-- page:724 -->



External Ids per object or entity.
-    25 roll-up summary fields are allowed. To learn more, see Increase the maximum limit of a roll-up
summary field.
-    Two master-detail and 40 relationship fields (master-detail plus lookup) are allowed per object To
learn more, see Increase the maximum relationships allowed per object.


Profile and Page Layout Best Practices for AFLS

AFLS provides standard security profiles such as the System Administrator and the
Standard User profiles as a template to customize security profiles for your organization.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Here are the recommended security best practices for profiles and page layouts.

- Use Field Level Security rather than page layouts to hide fields from users. Field Level Security is a safer
method for restricting accessibility to data due to compliance regulations. This also helps minimize the
number of page layouts. Page layouts prevent a user from seeing fields but does not prevent them
from seeing fields in Salesforce reports. Only field level security completely prevents access to fields.
-    Always use the least possible number of profiles. Minimizing the number of profiles reduces the
amount of security profile field level security settings you must update when you add a new field to an
object. Rename unused profiles to include ‘dep_’ to move them out of your way.
-    Always use the least possible number of page layouts. This decreases the likelihood of inconsistencies
for different record types. Consider using Dynamic Forms instead for ease of maintenance.
-    If you consider adding Security Exclusion to bypass enforcement of user access permissions in triggers,
you must evaluate this decision very carefully before implementation. While the Salesforce Platform
allows you to bypass user permissions, Salesforce doesn't recommend it because CRM is a point in
time system, and audits of the system can sometimes lead to inaccurate assessments.


Trigger Handler Best Practices during Data Migration

Trigger handlers are important to maintain data sanity. However, keeping all trigger handlers enabled
during data migration can lead to slow performance or hit governor limits. Make sure to review the
trigger handler documentation and understand the purpose of each trigger handler.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:725 -->




Available in: Enterprise and Unlimited Editions with AFLS, AFLS for
Customer Engagement Add-on license, and the Life Sciences Customer Engagement managed
package.


Bypass AFLS Trigger Handlers

There are two ways to bypass AFLS trigger handlers during data migration.

- Create a user with the Salesforce Integration license type. In the Permission Set License Assignments
for the user, click Edit Assignments, and then grant the Salesforce API Integration permission set
license, which includes the Skip Life Sciences Trigger Handlers permission to bypass all trigger
handlers. This only bypasses the trigger handlers for integration users. For all other users, these
handlers continue to run. This can significantly increase the data load performance. However, this
places the responsibility on customers to ensure data sanity during data migration. This approach is
most suitable for environments that are live with active users.
-    Disable handlers selectively from the Admin Console in the Life Sciences Commercial app. This
disables the trigger handler for all users in the system. This approach is most suitable for environments
that aren't yet live with active users.

Here are the trigger handlers that have equivalent jobs that you can run after data loads. You can disable
these handlers from the Admin Console during data loads.


Object                       Handler Name                              Description            Job

Account                      NewAccountSampleLimitInitHandlerfor       Disable this trigger   Admin
HCO                                       handler during         Console ->
data loads. Run        Sample
the job post data      Limits Tile
loads and Sample       -> Sample
Limits setup is        Limit Jobs
completed.             -> Assign
Sample
Limit
Templates
to Accounts

Account                      NewAccountSampleLimitInitHandler          Disable this trigger   Admin
handler during         Console ->
data loads. Run        Sample
the job post data      Limits Tile
loads and Sample       -> Sample
Limits setup is        Limit Jobs
completed.             -> Assign
Sample
Limit

<!-- page:726 -->




Object                          Handler Name                          Description            Job

Templates
to Accounts

ContactPointEmail               ContactPointEmailPopulateHandler      Updates                Admin
healthcare             Console -->
provider records to    Search
maintain an            Before
accurate list of       Create -->
associated email       General
addresses              Settings -->
whenever contact       Search
point email            Before
records are            Create Jobs
created, modified,
removed, or
restored. This
ensures the
EmailIds field on
the healthcare
provider record
reflects the current
related email
addresses and
avoids
unnecessary
processing.

ContactPointPhone               ContactPointPhoneHandler              Updates                Admin
healthcare             Console -->
provider records to    Search
maintain an            Before
accurate list of       Create -->
associated phone       General
numbers                Settings -->
whenever contact       Search
point phone            Before
records are            Create Jobs
created, modified,
removed, or
restored. This
ensures the
PhoneNumbers
field on the
healthcare

<!-- page:727 -->




Object                          Handler Name                          Description            Job

provider record
reflects the current
related telephone
numbers and
prevents
redundant
processing.

ContactPointSocial              ContactPointSocialPopulateHandler     Updates                Admin
healthcare             Console -->
provider records to    Search
maintain an            Before
accurate list of       Create -->
associated social      General
media handles          Settings -->
whenever contact       Search
point social           Before
records are            Create Jobs
created, modified,
removed, or
restored. This
ensures the
SocialIdentifiers
field on the
healthcare
provider record
reflects the current
related social
handles and
prevents
unnecessary
execution.

HealthcareProvider              HealthcareProviderHandler             Manages updates        Admin
to healthcare          Console -->
provider records       Search
after creation,        Before
restoration, or        Create -->
modification. This     General
trigger fetches and    Settings -->
updates related        Search
email addresses,       Before
phone numbers,         Create Jobs
social identifiers,

<!-- page:728 -->




Object                          Handler Name                            Description             Job

specialties, and
NPI from their
respective related
records, while also
preventing self-
calling updates.

HealthcareProviderNpi           HealthcareProviderNpiHandler            Updates                 Admin
healthcare              Console -->
provider records to     Search
maintain the            Before
correct National        Create -->
Provider Identifier     General
(NPI) whenever          Settings -->
healthcare              Search
provider NPI            Before
records are             Create Jobs
created, modified,
removed, or
restored. This
ensures the
NationalProviderId
entifier field on the
healthcare
provider record
reflects the current
associated NPI
and avoids
unnecessary
execution.

HealthcareProviderSpecia        HealthcareProviderSpecialityHandler     Updates                 Admin
lty                                                                     healthcare              Console -->
provider records to     Search
maintain an             Before
accurate list of        Create -->
associated              General
specialty types         Settings -->
whenever                Search
healthcare              Before
provider specialty      Create Jobs
records are
created, modified,
removed, or

<!-- page:729 -->




Object                          Handler Name                             Description            Job

restored. This
ensures the
Specialities field
on the healthcare
provider record
reflects the current
related specialties
and avoids
redundant
processing.

ProviderVisitChangedEve         VisitChangedEventShareHandler            Creates Visit shares Admin
nt                                                                       with the users       Console ->
shared with            Territories
Accounts.              -> Visit
Share
Manageme
nt Jobs

ProviderVisitChangedEve         PVChangedEventUpdateAccountTerrInf       Processes provider     Admin
nt                              o                                        visit changed          Console ->
events and             Visit
updates provider       Administrat
visit related fields   ion-> Visit
on Provider            Jobs ->
Account Territory      Provider
Information            Account
records.               Territory
Information
Job


Consider disabling these trigger handlers for historical data load purpose.


Object                          Handler Name                              Description

ALL                             StagePathPermissionsHandler               Enforces permissions defined
in Life Sciences workflows.
Validates whether users can
create, edit, or delete records
or work with related files at the
current stage in the workflow
path. Shows an error message
if users don’t have permission
to perform actions at that

<!-- page:730 -->




Object                          Handler Name                           Description

workflow stage.

ContentDocument                 ContentDocumentLockHandler             Prevents delete operation to
Documents linked to
Submitted Visits or related
entities.

ContentDocumentLink             ContentDocumentLinkLockHandler         Prevents insert/delete
operation to Document Links
for Submitted Visits or related
entities.

Expense                         ExpenseLockHandler                     Prevents insert/update/delete
operation on Expense if it is
locked.

ExpenseParticipant              ExpenseParticipantLockHandler          Prevents insert/update/delete
operation on
ExpenseParticipant/Allocations
if it is locked.

LifeScienceEmail                EmailQueueImmediateHandler             Handles emails that are sent
immediately instead of from a
batch job.

ProductDisbursement             ProductDisbursement2d0Handler          Creates a corresponding
Inventory Operation record
when a disbursement is made.

ProductDisbursement             ProductDisbursementSubmitLockHandl     Prevents modifications to
er                                     Product Disbursement records
when the related Visit record is
in a locked state, that is, when
the visit is signed or submitted.

ProviderVisit                   PVUpdateChildFieldsHandler             Maintains data consistency for
group visits by syncing child
provider visit records with the
parent provider visit records.
Automatically updates key
fields (Planned Visit Start Time,
Planned Visit End Time, and
Channel) when the parent visit
is modified.

ProviderVisit                   RemoteSessionInvitationPVHandler       Manages remote session
invitations by creating video

<!-- page:731 -->




Object                          Handler Name                            Description


## calls, email notifications, and

session keys for provider visit
records.

ProviderVisit                   PVLockHandler                           Prevents editing provider visit
data based on the visit's status
and signature state to maintain
data integrity.

ProviderVisitDtlProductMs       ProviderVisitDtlProductMsgLockHandler   Locks the
g                                                                       ProviderVisitDtlProductMsg
record when Visit is Submitted
or Signed.

ProviderVisitMarketingIte       ProviderVisitMarketingItemLockHandler   Locks the
m                                                                       ProviderVisitMarketingItem
record when Visit is Submitted
or Signed.

ProviderVisitProdDetailing      ProviderVisitProdDtlLockHandler         Locks the
ProviderVisitProdDetailing
record when Visit is Submitted
or Signed.

ProviderVisitProdDiscussio      ProviderVisitProdDiscussionLockHandler Locks the
n                                                                      ProviderVisitProdDiscussion
record when Visit is Submitted
or Signed.

ProviderVisitRqstSample         ProviderVisitRqstSampleLockHandler      Locks the
ProviderVisitRqstSample record
when Visit is Submitted or
Signed.

TerritoryUserDowntime           TUDBHValidationHandler                  Prevents the creation of time
off territory records with start
and end times outside of the
org's business hours.

TerritoryUserDowntime           TUDVisitValidationHandler               Prevents the creation of time
off territory during a visit.

TerritoryUserDowntime           TUDHolidayValidationHandler             Prevents the creation of time
off territory records on holidays.

TerritoryUserDowntime           TUDOverlapHandler                       Prevents the creation of
overlapping time off territory

<!-- page:732 -->




Object                          Handler Name                              Description

records.

TerritoryUserDowntime           TUDEventValidationHandler                 Prevents the creation of time
off territory during a general
event.

Visit                           VisitLockHandler                          Prevents editing visit data
based on the status and
signature state to maintain data
integrity.

Visit                           VisitTimeOffValidationHandler             Prevents scheduling a visit that
conflicts with a time-off
territory to support scheduling
efficiency and accurate visit
reporting.

Visit                           VisitLifeScienceAccountListLinkHandler    Clears the Life Science Account
List field on the provider visit
record if the Planned Start Time
is changed on a visit created by
applying a routine.

Visit                           VisitHolidayValidationHandler             Prevents scheduling a visit on
holidays or outside of business
hours to maintain compliance
with company policies.

Visit                           VisitPopulateEndTimeHandler               Calculates and sets the visit's
Planned End Time by adding
the default duration defined in
the “Set blank date/time in
Planned Start Time” Visit
Administration setting in the
Admin Console.

Visit                           FutureVisitLimitValidationHandler         Prevents scheduling visits
beyond the limit specified in
the “Future Visit Limit in Days”
setting in Visit Administration
in the Admin Console.

Visit                           VisitUpdateChildFieldsHandler             Maintains data consistency in
group visits by synchronizing
child visit records with their
parent visits. Automatically
updates key fields (Planned

<!-- page:733 -->




Object                          Handler Name                               Description


## Visit Start Time, Planned Visit

End Time, and Channel) when
the parent visit is modified.

Visit                           VisitConflictValidationHandler             Prevents scheduling another
visit for the same account on
the same day and by the same
user to avoid double-booking.

Visit                           VisitDelayReasonHandler                    Clears the previously entered
reason for delay if a user
changes the visit date and time
and the date no longer exceeds
the submission delay threshold.

Visit                           VisitCascadeDeleteHandler                  Deletes attendee visits
automatically when the parent
group visit is deleted,
maintaining data integrity.

Visit                           VisitSurveyInviteCascadeDeleteHandler      Deletes survey invitations
linked to a visit when a visit is
deleted, and prevents deleting
them if the visit is submitted to
maintain data integrity.

Visit                           RemoteSessionInvitationVisitHandler        Manages remote session
invitations by creating video
calls, email notifications, and
session keys for visit records.

Visit                           VisitMyBestTimeValidationHandler           Prevents scheduling visits
outside of best times defined
for the account address and
user's territory, improving
scheduling efficiency and
aligning with account
availability.

Visitor                         VisitorLockHandler                         Prevents insert/update/delete
operation on Visitor if it is
locked.

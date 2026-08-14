<!-- guide:admin-guide section:life-sciences-cloud-for-customer-engagement-patch-releases pages:734-768 -->
# AFLS for Customer Engagement Patch Releases




AFLS for Customer Engagement Patch Releases

We release patches periodically. The patch updates in this section provide information on each patch
release for the AFLS for Customer Engagement package and AFLS mobile
app.


## AFLS for Customer Engagement Package Patch Releases

The patch updates in this section provide information on patch releases for the AFLS for
Customer Engagement package.
AFLS Mobile App Patch Releases
The patch updates in this section provide information on patch releases for the AFLS
mobile app.


AFLS for Customer Engagement Package Patch
Releases

The patch updates in this section provide information on patch releases for the AFLS for
Customer Engagement package.


## Patch Releases Spring `26

We release patches periodically. Check back here for information on each Spring `26 patch release for
the AFLS for Customer Engagement package.
Patch Releases Winter `26
We release patches periodically. Check back here for information on each Winter `26 patch release for
the AFLS for Customer Engagement package.


Patch Releases Spring `26

We release patches periodically. Check back here for information on each Spring `26 patch release for
the AFLS for Customer Engagement package.


Patch 260.5.0.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                            Issue                              Description

Inventory Management               While editing an Inventory          The issue has been fixed and the
Operation record of type            destination address appears as
Transfer In and Transfer Out, the expected.
destination address is not visible.

<!-- page:735 -->




Feature                         Issue                                Description

Affiliations                    The Create Account button was        The Create Account button now
incorrectly disabled after a         remains active after a failed
validation error, forcing users to   attempt. This allows users to
restart the account creation         correct their information and
process.                             retry without starting over.


## In the account creation screen,      Updated the dropdowns to

the Role and Department              ensure the correct display labels
dropdowns were incorrectly           are shown for all affiliations.
displaying internal API names
instead of labels.

Account Search                  Advanced search wasn’t working       Advanced search now works as
when dependent picklists with a      intended after adding
multi-level dependency were          dependent picklists to the
configured in the Advanced           Advanced Search field set.
Search field set.

Sales Data                      Sales charts would not display all   All product names are now
products when their measure          visible in the sales data grid,
values were identical. When a        even when their values are the
user hovered over the grid, only     same.
one product was visible.

Territory Management            A NullPointerException occurred      Updated the underlying logic to
when searching for accounts          include a null check, preventing
outside the user’s territory. This   the exception.
was triggered when a
FieldSetMapping configuration
record did not have a
corresponding
LifeSciConfigAssignment record.

Visit Management                The list of values in a lookup field The issue is resolved and long
on the Visit Engagement page         lists of values in lookup fields
doesn't scroll, preventing users     now scroll.
from selecting the intended
values.


## Detailing products with Parent       Parent Brand Product’s Type

Brand Product with “Market”          filtering is removed so that
type were not displayed on the       detailing products are displayed
Visit Engagement page sidebar        regardless of the Parent Brand
menu.                                Product’s Type.

Remote Engagement               The Remote Engagement with           Added a disclaimer for the

<!-- page:736 -->




Feature                           Issue                               Description


## Microsoft Teams pilot feature       Remote Engagement with

disclaimer is missing from the      Microsoft Teams pilot feature to
Remote Engagement pages for         the correct pages in the Admin
Microsoft Teams in the Admin        Console.
Console.

Intelligent Content               Emailed links to large              Fixed the issue that caused large
presentations don’t open            presentations not to load
presentations correctly.            correctly.


Patch 260.3.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                           Issue                               Description

Surveys                           Users encounter an error when       The issue is resolved, and
running the                         SurveyInvitationShareBatchJob
SurveyInvitationShareBatchJob.      is now running successfully.

Visit Management                  The remaining quantities for        The issue is fixed, and the
Territory Product Quantity          remaining quantity of Territory
Allocation and Product Batch        Product Quantity Allocation and
Item records were not updated       Product Batch Item records
for samples that do not require a   updates correctly.
signature from attendee visits
when a group visit is submitted.

MS Teams                          Remote visits with multiple         Remote visits with Microsoft
attendees create duplicate          Teams now generate a single
Microsoft Teams calendar events     calendar event and email.
and outbound emails for every
participant.

Inventory Management              When the user tries to edit an      The issue has been fixed, and
Inventory Operation record of       users can edit Inventory
type Return, the system throws      Operation records of type
an error.                           Return.

Intelligent Content               Some emails fail to send when       Emails are now sent as expected.
users send presentations as links
to multiple accounts.

Remote Engagement                 When Twilio is the service          Fixed the issue that caused users

<!-- page:737 -->




Feature                           Issue                              Description

provider for remote sessions, an   to see an error.
error occurs when users change
an in-person visit to a remote
visit.


## When Twilio is the service         Now, only the cancellation email

provider for remote sessions,      is sent.
updating the visit date and
changing the visit channel from
remote to in-person sends two
separate emails.


Patch 260.2.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                           Issue                              Description

Account Search                    Users encountered a Page Not       Resolved an error in Advanced
Found error when using             Search to ensure account search
Advanced Search to search          results load correctly.
accounts.

Affiliations                      The Customer Search                Fixed the query logic to
functionality incorrectly          determine the affiliated HCPs
determines the affiliated HCPs.    correctly.

Email                             When sending emails from the       Users can now select email
desktop site, users can’t select   templates to send emails from
email templates in the Send        the desktop site.
Email window.

Home Page                         Some users see duplicates of       Users no longer see duplicates of
general events in the Up Next      general events in the Up Next
agenda.                            agenda.

Intelligent Content               Users can add accounts as          When a presentation’s targeting
attendees for presentations even   context is set to Restrict, users
when the presentation’s            can add only the accounts that
targeting context is set to        the presentation is targeted for
Restrict.                          as attendees.

Medical Insights                  Users are unable to save new       Users can now create new
Subject Assignment records due     subject assignment records

<!-- page:738 -->




Feature                           Issue                               Description

to a system "permission" error   without any errors.
that blocks the save workflow
despite the user having expected
access.

Surveys                           The                                 Updated the batch job logic to
SurveyInvitationShareBatchJob       correctly fetch and populate the
is failing with a "Territory name   territory name from the source
cannot be null" error, which        record before processing. Users
prevents the survey batch from      can now run the batch job
running successfully.               successfully.

Visit Management                  No confirmation dialog was          Deleting a product from Visit
shown when deleting a product       Information now displays a
from Visit Information.             confirmation dialog.


## After signing or submitting a Visit The Disbursed Date is now

with a sample, the Disbursed        updated correctly on the
Date field on the Product           Product Disbursement record.
Disbursement record was empty.


## When trying to submit a visit       Fixed the issue, and users can

with samples, users encounter       now submit visits without an
an error if there is an attendee    error.
visit in the USA794 org.


Patch Releases Winter `26

We release patches periodically. Check back here for information on each Winter `26 patch release for
the AFLS for Customer Engagement package.


Patch 258.15.0.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                           Issue                               Description

Visit Management                  When a Direct to Practitioner       A validation error or warning
sample quantity exceeds the         message is correctly displayed
Max per Visit quantity, the         whenever the Direct to
validation was not triggered        Practitioner sample quantity
when Document ID is captured.       exceeds the defined Max per
Visit limit.

<!-- page:739 -->




Feature                         Issue                                Description


## Picklists were showing values        Picklists now correctly display

that are not available for the       only the values assigned to the
selected Record Type.                Record Type.


## Provider Visit Product Discussion    Provider Visit Product Discussion

records weren't created when         records are now created as
saving or submitting a visit if      expected.
different discussions are
configured by record type.

Account Search                  In the SBC Create Account flow,      The IsActive flag is now
newly created Provider Affiliation   automatically set to true for
records didn't have the IsActive     Provider Affiliation records
flag set to true.                    created during the flow.


## In the Account Picker                The query logic has been

component, a query limit error       optimized to prevent limit errors
occurred when attempting to          when fetching associated
fetch only accounts associated       accounts.
with an HCP.


## An error occurred when a             Account search preferences now

boolean field was configured as      correctly handle all data types,
a Provider Account Territory Info    allowing boolean fields to be
searchable field in the Account      used as searchable fields without
Search Preference settings.          error.

Object Metadata Cache           The validation status of the         The validation status is now
Configuration                   Object Metadata Cache                correctly reflecting.
Configuration records isn’t
accurately shown.

Calendar                        Available visits weren't shown in    The display logic is corrected to
Calendar even when filters are       ensure that all available visits are
set to show all visits.              now properly shown according
to the applied filter settings.


## An unknown error occurs when         Visit previews now load as

previewing a newly created visit     expected after creation.
in Calendar.

Ratings                         PrvdAccountUserGroupInfo             The Ratings layout now correctly
entity were not visible in the       shows all the
Ratings layout.                      PrvdAccountUserGroupInfo
fields.

Sample Limits                   Users encountered an error           Fixed the issue that caused users

<!-- page:740 -->




Feature                         Issue                                 Description

(gack) when trying to view or         to see an error (gack).
save sample limit templates in
the Admin Console.


## The                                   To avoid hitting Apex limits, the

NewAccountSampleLimitInitHan          NewAccountSampleLimitInitHan
dler and                              dler and
NewAccountSampleLimitInitHan          NewAccountSampleLimitInitHan
dlerforHCO trigger handlers           dlerforHCO trigger handlers now
created Apex jobs of type Batch,      create Apex jobs of type
exceeding the limit for the           Queueable.
maximum number of batch
Apex jobs in the Apex flex
queue.

My Team                         All Day events were incorrectly       All Day events are correctly
displayed on the previous day's       shown for the intended date.
calendar due to a time zone or
date conversion error during the
creation process.

Affiliations                    An error occurred when inserting      Updated the trigger handler
a provider affiliation record from    logic to stop cloning the Source
MuleSoft because the system           System Identifier to the reverse
found multiple Provider               affiliation record, ensuring
Affiliation records with the same     uniqueness for the external ID
Source System Identifier. This        field.
was caused by a trigger handler
incorrectly cloning the identifier
onto the automatically
generated reverse affiliation
record.

Inventory Management            Users couldn’t submit inventory       Users can now submit inventory
count assessments for samples         count assessments for samples
that were disbursed for visits        disbursed for planned visits, but
which were still in planned state,    with warnings or error messages
but for which signatures were         that indicate the specific record
already captured.                     or records that need an update.

Time Off Territory              The Admin Console displayed a         Resolved the error by adding
"cannot dereference a null            validations to handle empty or
object" error on the Time Off         missing time slot interval values.
Territory settings page when any
default time slot interval is saved

<!-- page:741 -->




Feature                           Issue                                Description

with blank values.


Patch 258.13.0.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                           Issue                                Description

Visit Management                  When a default channel was set,      If a default channel is set, the
the Channel field could be           Channel field now retains that
empty causing an error that the      setting.
visit is already signed and locked
when trying to submit the visit.


## Even if a sample limit template      Sample limits are no longer

wasn't assigned to a product,        checked if a sample limit
limit validation would still be      template isn't assigned to a
performed, resulting in an error.    product.


## It was possible to submit a Visit   Attempting to submit a Visit that

with a child visit that contained a has a child visit with a restricted
restricted product.                 product displays an error.


## In certain circumstances it was      A blank Reaction Type Value is

possible for a Reaction Type         no longer changed by the app
Value to be changed from blank       automatically.
to Positive automatically,
preventing the visit from being
saved.


## A rep could delete an attendee       Deleting an attendee after a visit

using a quick action after the       is signed now displays a message
visit was signed. Also, there was    that the record is signed and
no warning this happened.            locked.


## Searching for accounts was too       Searching for accounts is now

slow.                                significantly faster. However, as a
result of a logic change to
improve performance, account
search now returns accounts
that match the Account name
and not the Written and
Phonetic name.

<!-- page:742 -->




Feature                         Issue                                Description

Home Page                       In the Up Next agenda on the         Event dates now match the
home page, the event date            corresponding start and end
didn’t match the event’s start       times, duplicate date sections
and end times when the user's        are removed, and multi-day
timezone changed, and the            events are split into multiple
same date sometimes appeared         entries. Additionally, the event
in multiple sections. On desktop,    time format no longer includes
multi-day events weren’t split       seconds.
into multiple events in the
agenda.


## In the Up Next agenda, Time Off      Time Off Territory events now

Territory events show the record     show the type of event, for
name instead of the type of          example, Personal Absence or
event.                               Training.


## In the Up Next component on          All day general events now show

the home page, all day general       up on the correct date in the Up
events didn’t appear on the          Next agenda on the home page.
correct date.

Calendar                        The Visit preview fails to load      Fixed the underlying logic to
and returns an unexpected error      show the preview for valid visit
even when attendee records are       records.
correctly associated with the
visit.

Medical Inquiry                 When the                             Users can now create a new
MultiEntityCreateOverride            inquiry when the
component was configured for         MultiEntityCreateOverride
the New button on the Inquiry        component is configured.
object and users tried to create a
new inquiry, an error occurred.


## Searching for response delivery      After the fix, the search and the

preferences took longer than         sort functionalities are working
expected and required multiple       as expected.
clicks. On clicking the Contact
Point Address, Contact Point
Email, and Contact Point Phone
column headers, the results
couldn’t be sorted.

Email                           Email consent checks didn't     Now emails are sent only when
check the EffectiveFromDate and valid consent is present,
EffectiveToDate fields on       respecting the Effective From

<!-- page:743 -->




Feature                           Issue                                 Description


## Communication Subscription            Date and Effective To Date on

Consent records, meaning that         Communication Subscription
emails could be sent to people        Consent records.
whose consent had expired or
hadn't yet started.

Inventory Management              The creation of inventory             Now inventory operation records
operation records would fail if       can be created irrespective of
the related User Additional Info      whether the product return
record didn’t have a product          address field is populated or not.
return address.


Patch 258.12.0.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                           Issue                                 Description

Visit Management                  The Visit page didn't load for Life   The Visit page now loads
Sciences Field Medical users.         correctly for Life Sciences Field
Medical users.


## A Product Item without a              Product Items with Production

Production Batch ID wouldn't          Batch IDs are now displayed
display in Samples.                   correctly in Samples.


## Setting a Document ID on a Visit      You can now submit a Visit with

would cause the Place ID and          a Document ID and the Place ID
Shipping Address to display           and Shipping Address display
incorrectly and submitting the        correctly.
Visit would fail with the message
"We couldn't perform the action
because this visit is signed and
locked."


## Products are correctly displayed

When the "Show recent details    in the Product Details sidebar
and product selector" setting is and in Product Selector for Visit
enabled, some products that      in the web app.
were displayed in the Product
Details sidebar for mobile
wouldn't be displayed in the web
app.

<!-- page:744 -->




Feature                         Issue                                Description



## Also, recent products that were

displayed in the sidebar weren't
displayed in the Product Selector
in Visit.


## The Place ID on the Visit would      The Place ID displays correctly

change to a different ID after       after the Visit is submitted.
submission.


## A Visit could be saved without a     A Visit can no longer be saved

shipping address if the account      without a shipping address.
was changed.

Inventory Management            On the Sample Inventory              The issue has been fixed and
Management dashboard, users          users can now submit inventory
were unable to submit inventory      count assessments even when
count assessments due to high        the volume of Inventory
volume of Inventory Operation        Operation records is high.
records.


## On the Sample Inventory              After the fix, when users try to

Management dashboard, in the         create product requests, the
Inventory Operations section,        product types displayed are the
when users would try to create       labels of the product
product requests, the product        specification types.
types displayed would be the
API names of the product
specification types, instead of
the labels.

General                         The Life Sciences Commercial         The Life Sciences Commercial
Lightning App didn’t have an         Lightning App now has the same
icon in the App Launcher.            icon as the AFLS
Mobile app.

Email                           Users saw an unhelpful error         Users now see a helpful error
when the RSVP email address          informing them that the email
isn’t enabled on the Life Sciences   RSVP email address isn’t set up
for Customer Engagement Setup        yet.
page.


## Issues occurred when sending         Emails that are sent via the

emails via the LifeScienceApi        LifeScienceApi global Apex class
global Apex class. For example,      are now sent correctly.
attachments weren’t included in

<!-- page:745 -->




Feature                         Issue                               Description


## emails, and some emails that

were marked as canceled were
still sent.

Activity Timeline               Clicking Resend Email on the        Fixed the logic to correctly
activity timeline incorrectly       process attachment IDs during
displayed an error and an           the resend action, allowing the
incorrect label is shown for the    email to be resent without an
associated action.                  error. The timeline entry now
displays the correct label.

Mobile App Setup                                                   Fixed the validation logic to
The object metadata cache          show relevant errors.
configuration validation
incorrectly requires a profile
when the Type field is set to Data
or Configuration.


## Additionally, an incorrect

validation error is shown
requiring an Sobject even when
it is selected.


## The View Assignments action         The profile assignments are now

didn’t show the assigned profiles   shown when a user clicks the
for records on the UI Settings      View Assignments action. The
page in the mobile app setup.       custom UI component label is
Additionally, the label of the      populated in the edit view.
custom UI component wasn’t
populated when a user edits the
record.


## When a profile was assigned to      Fixed the underlying issue to

an Object Metadata Cache            ensure that the object metadata
configuration record in the list    cache configurations remain
view, the record was incorrectly    active when profiles are assigned
being deactivated.                  from the list view.


## When metadata cache is              The status of the

generated after the Community       LifeSciMobileMetadataRecord is
User profile is assigned to all     now correctly updated to
object metadata cache               Inactive, resolving the indefinite
configuration records, the          Validating status issue.
LifeSciMobileMetadataRecord
persists indefinitely in the
Validating status.

<!-- page:746 -->




Feature                         Issue                              Description

Product Management              The LSCAdditionalProductDetails    The issue has been fixed and the
custom field on the Life Science   LSCAdditionalProductDetails
Marketable Product object was      custom field on the Life Science
not visible in the complete        Marketable Product object is
Product Hierarchy view.            now visible in both the complete
and partial Product Hierarchy
views.

Activity Plan                   The Calculate Provider Activity    Users can now run the Calculate
Goal Measures batch job            Provider Activity Goal Measures
couldn’t be run more than once.    batch job multiple times.

Inventory Management            On the Sample Inventory            The issue has been fixed and
Management dashboard, users        users can now submit inventory
were unable to submit inventory    count assessments even when
count assessments due to high      the volume of Inventory
volume of Inventory Operation      Operation records is high.
records.


## On the Sample Inventory            After the fix, when users try to

Management dashboard, in the       create product requests, the
Inventory Operations section,      product types displayed are the
when users would try to create     labels of the product
product requests, the product      specification types.
types displayed would be the
API names of the product
specification types, instead of
the labels.

Account Address                 The Accounts list view fails to    The Accounts list view now loads
load when the Contact Point        correctly, displaying accounts
Address formula in Address         and their addresses, even when
Setup contains special             the Contact Point Address
characters.                        formula in setup contains special
characters.

Medical Inquiry                 After a user submits an inquiry    The issue is fixed and now the
record in the mobile and the app   status of a submitted inquiry
syncs, the status of the record    record doesn’t change after a
incorrectly changes to “Signed”.   sync.

Calendar                        An unexpected error is shown       Removed the incorrect
when the user clicks Cancel on     validation check that was
the Delete Events window.          preventing the window from
closing. The Delete Events dialog
now closes correctly without an

<!-- page:747 -->




Feature                           Issue                               Description

error.


## The Delete Events window            Modified the underlying logic to

prevents users from selecting       correctly support multi-selection
and deleting multiple event         of event types. Users can now
types simultaneously, restricting   select and delete multiple event
the selection to only one type at   types in a single operation.
a time.


Patch 258.11.0.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                           Issue                               Description

Visit Management                  From an Attendee Visit, Account     Account Card quick actions now
Card quick actions (such as         work.
Inquiry, Last Visit, Survey ,
Attendee Visit, and Send Email)
didn't work.


## The Visits to Submit page would The Visits to Submit page now

sometimes display visits that had displays only visits that have not
already been submitted.           yet been submitted.


## The Provider Account Territory      The Provider Account Territory

information job would fail to       information job now correctly
process some records.               processes all records.


## Users who didn't manage

sample inventory in Life Sciences   Inventory validation is now
Cloud would see a warning when      performed only for users who
signing and submitting a Visit      manage inventory in Life
with Samples.                       Sciences Cloud.


## Use of custom objects and fields    The Visits page now works

would prevent the Visits page       correctly with custom objects
from loading.                       and fields.


## The list of products shown in the   The list of products shown on

Samples and Direct to               web and mobile Visit
Practitioner sections of Visit      Management pages is now
Management pages would be           identical.
different between the web and

<!-- page:748 -->




Feature                         Issue                               Description

mobile interfaces.

Users were unable to allocate       Expenses can now be allocated.
expenses.


## The Edit Visitors window would      The Edit Visitors window now

throw a null-pointer exception      works correctly regardless of
when no profiles were selected      whether any profiles have been
in Visitor Settings.                selected in Visitor Settings.

Inventory Management            The audit-related user perms,       The issue has been resolved and
Request audits of multiple          the Request audits of multiple
Inventory Count Assessment          Inventory Count Assessment
records and Perform audits of       records and Perform audits of
Inventory Count Assessment          Inventory Count Assessment
records, were not accessible to     records user perms are
the user.                           accessible to the user.


## While acknowledging a product       The issue has been fixed, and

transfer, the Quantity on Hand      the Quantity on Hand field in the
field in the Product Item record    Product Item record and the
and the Remaining Quantity          Remaining Quantity field in the
field in the Product Batch Item     Product Batch Item record are
record were being updated           updated when users click
when users clicked on the Save      Submit during the
button.                             acknowledgment of a product
transfer.


## Users weren’t able to add           The issue has been resolved and

comments in Inventory               users can now add comments in
Operation records.                  Inventory Operation records.


## The page layout for Product         The page layout for Product

Disbursement wasn’t visible in      Disbursement is now visible in
the Object Manager.                 the Object Manager.


## After a visit is submitted, users   The issue is now resolved and

couldn’t update the Inventory       users can update the Inventory
Count Reference field in the        Count Reference field in the
related Product Disbursement        related Product Disbursement
record.                             record after a visit is submitted.

Consent Management              Opening the Consent wizard and      The Consent wizard now handles
attempting to add a new email       Communication Subscription
on the recipient page throws a      status changes correctly, and
component execution error           adding a new email no longer
when the Communication              triggers the component

<!-- page:749 -->




Feature                         Issue                               Description

Subscription record isn’t in the    execution error.
expected status.

Time Off Territory              A visit could be created during a   Visit creation is now correctly
Time Off Territory (TOT) event,     blocked during a Time Off
bypassing the overlapping rule      Territory event.
which should have prevented
the creation.

Data change request             A DCR record was not getting        The DCR record is now created
created when creating an HCP        when using this combination.
account or an HCO account
using this combination: Update
Type = Don’t apply changes
immediately and Record
Creation Approval = Yes.


## When users approve or reject        The status of the rejected

data change requests from the       Healthcare Provider records now
internal DCR tab, the status for    update to inactive, and approved
Healthcare Provider records and     Provider Affiliation records now
Provider Affiliations doesn't       update to active when processed
change to active or inactive.       from the internal DCR tab.


## The                                 The SOQL query was moved

HealthcareProviderRefetchingBat     outside the loop to prevent
ch job fails with Too many SOQL     multiple executions, making sure
queries:201 error because the       the
getRecordTypeNameFromSObje          HealthcareProviderReferencingB
ct method is being called inside    atch job runs without exceeding
a loop in the DCR service           the query limit.
handler.

Lists and Filters               When users select an account        Users can now select and add an
from the Accounts tab and click     account to a new list or an
Select and Add, the selected        existing list.
account isn't shown on the
resulting window.


## Some quick actions are missing

in the More Actions menu for        The issue was resolved by
individual accounts.                making sure the quick actions
are properly configured and
displayed in the More Actions
menu for all accounts.

<!-- page:750 -->




Feature                           Issue                                 Description

Activity Plan                     The deprecated Account Activity       The deprecated components,
Goal and Activity Plan Lightning      Account Activity Goal and
App Builder components were           Activity Plan, are now flagged as
appearing in the Home Page and        “Deprecated” in the Lightning
Account record pages, without         App Builder.
being flagged as “Deprecated”.

Account Search                    The                                   The job was optimized by
HealthcareProviderFlatteningBat       refining the database queries to
chJob failed due to Salesforce        fetch only necessary records.
governor limits, specifically the     Unnecessary queries were
"Too many SOQL rows: 50001"           further eliminated by skipping
error.                                the DCR logic, as DCR processing
was not required for this job.

Account Merge                     Merging of accounts was failing       Made the
because                               CommSubConsentCmplSnpsht
CommSubConsentCmplSnpsht              fields accessible and now
fields were not accessible.           accounts can be merged.


## Activity Timeline                 Incorrect labels were shown for

the values in the Type dropdown       Correct labels are now shown for
on the Activity Timeline tab.         the values in the Type
dropdown.

Territory Management Jobs         Duplicate entries of the Territory    The child records of the job were
Management job unexpectedly           filtered out. This ensures that
appeared when a job is run or         duplicate entries are not shown
scheduled.                            and only one entry per parent
batch job appears.

Provider Account Territory Info   The Provider Account Territory        The component’s title is updated
Info component’s title showed         to the correct name, Provider
an inaccurate name.                   Account Territory Information, to
ensure accuracy across the user
interface.

Calendar                          When a visit is created by            The territory name is now
dragging an account or address        populated when a visit is created
to the calendar grid, the territory   by dragging an account or
name isn’t populated.                 address to the calendar.


## When creating a visit from the

Calendar, the visit duration          The visit now correctly uses the
incorrectly defaults to 30            defined default visit durations
minutes even though a specific        when creating a visit from the

<!-- page:751 -->




Feature                           Issue                               Description


## default duration has been

defined.                            Calendar.

- If a default duration is
defined, the defined duration
is used.
-   If no default duration is
defined, the visit duration
defaults to 30 minutes.



Patch 258.9.0.0

This patch contains fixes to ensure that the AFLS for Customer Engagement features work
correctly.


Feature                           Issue                               Description


## A random inventory storage          Corrected the address mapping

Inventory Management              address is shown for sales reps     logic to ensure accurate user
without an address in the           association.
Inventory Management screen.

Account Summarization             Scratch org definitions included    Removed these components to
unnecessary summarization and       streamline the configuration.
agent preferences.

Object Metadata Cache             Users are unable to save records    Added support for the
Configuration                     containing SOQL filter              {STI.OBJ.IDS} SOQL variable.
conditions with the variable        Users can now save records with
{STI.OBJ.IDS} in the Object         SOQL filter conditions
Metadata Cache Configuration        containing this variable.
window.


## The Web-to-Mobile Sync              The display error has been fixed

checkbox in the Object              and the checkbox now
Metadata Cache Configuration        accurately reflects the status
window incorrectly shows its        when it’s selected.
status even when it was selected.


## Permission set assignments were The display error has been fixed

incorrectly shown when viewing to show only profile
assignments for an object       assignments.
metadata cache configuration.

External Search                   Searching externally for business   The underlying issue is resolved.

<!-- page:752 -->




Feature                           Issue                                Description


## license records using the isActive   In case of a failure due to

field resulted in the invalid        unsupported fields in the
conversion of data type from         external search criteria, an error
Boolean to String.                   message specifying the field
appears.

Surveys                           Users encountered an error           Added the
when attempting to view Surveys      VisitInvitationFetchStrategy class
during a visit due to missing        to the LifeSciencesCore
Apex class access in the             permission set and included the
LifeSciencesCore permission set.     Survey quick action to the
Account page layout to make
sure users have error-free access.

Visit                             A validation error is occurring on   Fixed the validation logic to align
the visit creation screen            with the configured settings.
requiring a production batch
even when the settings were
configured to not require it.


## The mobile app's Visit               Fixed the validation to show the

Engagement screens incorrectly       sample limits error only for
show a sample limits error for       sample products that are
sample products, even though a       assigned to a sample template.
sample limit template isn’t
assigned to a sample product.

Error Log Management              Clicking an error log hyperlink in   Removed the hyperlink for error
the Error Log Management tile is     log numbers.
causing a gack.

Affiliations                      The Affiliation List View isn’t      Removed these two fields from
displayed due to field-level         the underlying query as they
security for the Phone and           were unused.
ParentId fields on the account
object.



AFLS Mobile App Patch Releases

The patch updates in this section provide information on patch releases for the AFLS
mobile app.


## Patch Releases Spring `26

We release patches periodically. Check back here for information on each Winter `26 patch release for
the AFLS mobile app.

<!-- page:753 -->




## Patch Releases Winter `26

We release patches periodically. Check back here for information on each Winter `26 patch release for
the AFLS mobile app.


Patch Releases Spring `26

We release patches periodically. Check back here for information on each Winter `26 patch release for
the AFLS mobile app.


Patch 260.5.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                              Description

Visit Management                   In some cases, list view filter    Fixed the list view filter
conditions in the mobile app       evaluation in the mobile app to
don’t return records even when     apply conditions that reference
matching records exist.            related fields correctly.


## On a Visit Engagement page,        The issue is fixed and picklist

Channel picklist values weren't    values are correctly filtered.
filtered based on the selected
record type.


## When a sample limit template       The issue is fixed, and the

with warning mode was applied,     correct message texts are
incorrect warning message texts    displayed.
were displayed when the
quantity exceeded the limit.

Advanced Search                    The Name field was missing on      Updated the record type
the Advanced Search window for     resolution logic to ensure HCO
HCO accounts, despite being        accounts correctly map to their
correctly configured in the        specific record types, ensuring
fieldset.                          the Name field renders as
expected in the Advanced
Search window.


Patch 260.4.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                              Description

Visit Management                   When saving a visit with a         The SDL validation logic is

<!-- page:754 -->




Feature                         Issue                                  Description


## product that has no State              changed so that it no longer

Distributor License (SDL)              triggers for products without a
category, the visit fails to save if   State Distributor License (SDL)
the selected address doesn’t           category, and the visit is now
have a valid SDL license.              successfully saved.


## Because newer versions of the          Expense Report is no longer a

mobile app required expenses to        required field for expenses so
be linked to a valid expense           you can create and edit expense
report, expenses couldn't be           entries without having to select
created or edited until they were      an expense report.
linked to expense reports.

Lists and Filters               In the mobile app, certain list        Fixed the list view filter
view filter conditions return no       conditions in the mobile app to
records even though matching           ensure results are consistent
records appear on web.                 with the web.

Inquiry                         The Inquiry action wasn’t              Resolved the naming conflict
rendering on the Home page             and the Inquiry action is now
due to a naming discrepancy            visible on the Home page as
between the web and the                expected.
mobile app configuration.

Presentations                   When adding new pages to a             Users can now tap the + icon to
custom presentation in the             add a page to a custom
mobile app, tapping the + icon         presentation, ensuring the
didn’t add the selected page as        behavior aligns with user
expected. Instead, users had to        expectations and provides a
tap the page thumbnail directly        more intuitive, consistent
to add it, resulting in an             experience.
inconsistent user experience.

Intelligent Content             When reordering pages in a             Page numbers update
presentation, the page                 automatically and accurately
numbering did not update               when pages are reordered. Users
correctly. This could result in        see the correct sequence
incorrect or duplicate page            reflected immediately, ensuring
numbers being displayed.               a smooth and reliable
presentation experience.

General                         The Account Name field isn’t     The Account Name field now
populated correctly in the Life  reflects the correct value from
Sciences Cloud mobile app        the custom formula.
when the Account Field to
Display setting in Admin Console

<!-- page:755 -->




Feature                            Issue                                Description

uses a custom formula field.


Patch 260.2.1

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                                Description

Visit Management                   A deeplink with lightning/o/         A deeplink with lightning/o/
OBJECT_NAME/list format was          OBJECT_NAME/list format now
not redirecting to the object list   redirects to the object list view.
view.

The field for entering the           The issue has been corrected,
Document ID in the pop-up isn’t      and the field for entering the
visible on the Visit Engagement      Document ID is visible.
page.


## No records are displayed when        The issue is corrected, and

using special date strings like      special date strings now return
TODAY and THIS_WEEK in the           the correct results.
list view filters.


## The Visit Information section of     The Visit Information section is

the Attendee Visit Engagement        now editable only on the parent
page was editable.                   Visit Engagement page and read-
only in the Attendee Visit
Engagement page.


## The text field for entering the      The issue is corrected, and the

Submit Delay Reason on a pop-        Submit Delay Reason field is now
up screen isn’t visible on the Visit visible.
Engagement page on mobile.


## Multi-select picklists for Product   The multi-select picklist field

Discussions on the Visit             type is now displayed correctly in
Engagement page weren't              the Product Discussions section
supported in the mobile app.         of the Visit Engagement page.


## While capturing a signature, the     A spinner now displays when the

mobile app appeared                  app is capturing a signature.
unresponsive, even though it
was still processing the capture.


## Product messages weren't             The issue has been fixed, and

displayed by message groups          product messages are now

<!-- page:756 -->




Feature                            Issue                                 Description


## even when message groups were displayed by message groups

set for the messages.         when those are set for messages.

General                            Mobile sync fails when users          To enable sync to complete
enable the Related Record             successfully, deselect the Related
Retrieve checkbox because the         Record Retrieve checkbox to
mobile client queries the Name        prevent the mobile client from
field for related records, but        adding Name fields for related
some related objects don’t have       objects.
a Name field, causing a sync
failure.

Planner                            The Calendar was taking too           Optimized the main database
long to load when the accounts        query to include child visit
had too many visit events.            counts, eliminating the need for
additional queries and
significantly improving calendar
load times.

Calendar                           The Calendar crashes frequently,      Fixed the underlying issues to
especially while loading,             prevent Calendar from crashing.
scrolling, and during drag-and-
drop scheduling.


## Inquiry                            The Recently Viewed related list

on the Activity Plan and Inquiry      The Recently Viewed related list
objects displayed inconsistently      now displays items consistently
between the web and iPad              across both web and iPad
interfaces. On the web, it            interfaces for Activity Plan and
showed only a few records, while      Inquiry objects.
on the iPad, it correctly displayed
all recently viewed records for
the same user.


Patch Releases Winter `26

We release patches periodically. Check back here for information on each Winter `26 patch release for
the AFLS mobile app.


Patch 258.15.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.

<!-- page:757 -->




Feature                            Issue                                 Description

Visit Management                   In the Visit Information section      A custom picklist in the Visit
on the Visit Engagement page          Information section on the Visit
(Mobile), a custom picklist filters   Engagement page (Mobile) now
correctly by the controlling field,   respects record type restrictions
but doesn’t filter by the selected    and displays only applicable
Record Type. As a result, users       values.
see values that should not be
available for that Record Type.


## The Visit Information section on      The Visit Information section on

the Attendee Visit Engagement         the Attendee Visit Engagement
page (Mobile) should be read-         screen (Mobile) is now read-only.
only, but it’s currently editable
for users.


## The multi-select picklist field       The multi-select picklist field

type wasn't supported for             type now displays correctly in the
Product Discussions.                  Product Discussions section of
the Visit Engagement page.


Patch 258.14.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                                 Description

Visit Management                   In the Advanced Account Search        The issue is fixed so that the
from the Switch Account link on       appropriate lists and filters
a Visit Engagement page, the          selectors are displayed in
Type, Lists, and Filters weren't      Advanced Account Search.
displayed.


## Creating a visit with over 20       Visits with more than 20

attendees resulted in this error:   attendees now save correctly.
"common.exception.ApiExceptio
n: We couldn't perform the
action because this visit is signed
and locked."


## After capturing a signature, the      The floating action button

Floating Action Button (FAB)          remains at the bottom of the
incorrectly disappears from the       page after a signature is
bottom-right corner of the page.      captured.

General                            The mobile app was crashing at        Delayed the initialization of the

<!-- page:758 -->




Feature                            Issue                               Description


## startup because Intelligent         Intelligent Content until the user

Content was attempting to           manually opens the tab to
access database and background      ensure all required services are
services before they had finished   ready for use.
initializing.

Key Account Management             The Account Plan Participant        The issue has been fixed and
records on the mobile weren’t       Account Plan Participant records
syncing with the web.               on the mobile are now syncing
with the web as expected.


Patch 258.13.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                               Description

Home Page                          In the Up Next component on         All day general events now show
the home page, all day general      up on the correct date in the Up
events didn’t appear on the         Next agenda on the home page.
correct date.

Visit Management                   When creating a visit, validation   The Time Off Territory Rules
was skipped when the Time Off       setting is now checked when
Territory Rules setting was         creating a visit.
turned off, causing all
appointments that overlapped
with scheduled downtime to be
blocked.


## Trying to start a visit a few       Visits can now be started in

minutes early failed with the       advance.
error "Visit Date and Time
cannot be in the future."


## Creating a visit with many          The time to create a visit is

activities could take 40-50         significantly shorter.
seconds.


## Updating visit attendees and        Errors are no longer shown when

deleting visits on mobile would     a visit is successfully updated.
cause Device Sync Transaction
(DST) errors even though the
operations were successful.

<!-- page:759 -->




Feature                            Issue                                 Description


## A Device Sync Transaction (DST)       Field level access is now checked

error would occur when a user         correctly for custom fields. Also,
had only read access to custom        client orgs should not have the
fields on a record, or if the         Private API enabled in order to
Private API was enabled in a          prevent this issue from
client org.                           happening with fields such as
MayEdit and IsLocked which are
added to pages automatically.


## Reps could delete an attendee         The option to delete an attendee

visit that's already signed from      is no longer available after the
the Attendee section of the Visit.    visit is signed.


## Custom objects weren't being          The mobile app now correctly

displayed on mobile.                  displays custom objects.

Medical Inquiry                    Even after an Inquiry record was      These issues have been fixed.
submitted, the record stayed in       The label has been corrected,
draft status. “Contact Info” was      the Inquiry record displays the
erroneously displayed as              correct status, and users can
“Response Contact Point Record        scroll through and select Contact
ID”. Users were also unable to        Point Email and Contact Point
scroll through Contact Point          Phone records as expected.
Email and Contact Point Phone
records and select the last two
records.

Lists and Filters                  When users sorted accounts by           The sort criteria for Next Visit or
next visit or last visit date, the list Last Visit date was fixed, and the
showed no results.                      correct accounts now display
when these options are selected.

General                            When users changed the user           Now translations load in the Life
language and device language,         Sciences Cloud mobile app on
translations didn’t load in the       iPads.
AFLS mobile app
on iPads.


Patch 258.12.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                                 Description

Agentforce                         The Agentforce window is              The Agentforce window is now

<!-- page:760 -->




Feature                         Issue                                 Description


## missing in the Tableau Next           available in the Tableau Next

metrics view.                         metrics view.

Visit Management                For General Events, if the event  The correct date and time is now
was set to All Day the wrong date displayed for All Day General
and time would be displayed.      Events.


## It was possible to schedule a visit   Visits can no longer be

during the Visit Conflict             scheduled during a Visit Conflict
Validation Period even when the       Validation Period if the Visit
validation mode is set to error.      Conflict Validation Mode is set to
Error.


## Even if a Sample Limit Template       An error is no longer shown for

wasn't assigned to a sample           products if the Sample Limit
product, you could still see a        Template isn't assigned.
sample limit error on the Visit
Engagement.


## Links shown by Agentforce in the Links shown in the Agentforce

Agentforce conversational        conversational window are now
window didn't work.              clickable.


## An SDL License Validation error       An SDL License Validation no

would occur for Life Science          longer occurs for sample
Marketable Products that didn't       products that don't have SDL
have a State Distributor License      categories.
Category populated.


## The View Online quick action on       The View Online quick action

the Visit record page would fail      now works correctly on mobile.
with the message "This Action is
only meant for Mobile App".


## The Inquiry quick action from         The Inquiry quick action now

the Visit record page didn't          works correctly, displaying the
display the Case ID, or allow         Case ID and allowing users to
users to modify the Case field        modify the Case field manually.
manually.

General                         Users didn't always know when         Users now get alerts when
new versions of the Life Sciences     there’s a new version of the Life
Cloud Mobile app were                 Sciences Cloud Mobile app
available.                            available in the app store, and
they have 7 days to upgrade to
the latest version.

<!-- page:761 -->




Feature                            Issue                               Description

Home Page                          On the home page in the Life        Now, general events show the
Sciences Cloud Mobile app, the      correct date on the home page
incorrect date shows for general    in the AFLS
events.                             Mobile app.


Patch 258.11.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                               Description

Synchronization Management         Text in the DeviceSyncSummary       In the DeviceSyncSummary
payload was mislabeled as           payload, text is now correctly
OCEDBSize.                          labeled DBSize.

Account Plan                       Users couldn't import goal        Users can now import goal
definitions onto account plans or definitions onto account plans
create account plan objectives.   and create account plan
objectives.

Activity Timeline                  When the Address filter was         The Address filter on the Activity
applied on the Activity Timeline    Timeline tab has been fixed and
tab, no records were displayed.     now correctly returns all relevant
activity records that match the
selected address criteria.

Activity Plans                     The Activity Plans widget wasn’t    The Activity Plans widget now
appearing in the mobile app.        appears in the mobile app.


## In the Activity Plans widget, the   The Non-Product Cumulative

Non-Product Cumulative value        value now appears in the
wasn’t appearing in the             dropdown for Activity.
dropdown.

Affiliations                       The Affiliation tab was taking too Fixed the underlying issue. Now
long to load.                      the Affiliations tab loads
immediately.


## Planner                            When creating a visit from the

Calendar, the visit duration        The visit now correctly uses the
incorrectly defaults to 30          defined default visit durations
minutes even though a specific      when creating a visit from the
default duration has been           Calendar.
defined.
- If a default duration is

<!-- page:762 -->




Feature                         Issue                               Description


defined, the defined duration
is used.
-   If no default duration is
defined, the visit duration
defaults to 30 minutes.


Visit Management                Labels for "Content & Samples"      Labels for "Content & Samples"
weren't shown in the sidebars of    are now shown correctly on visit
visit screens for Medical Science   screens for MSL users.
Liaison (MSL) users.


## Custom fields weren't displayed     Custom fields are now shown

on the edit page and on Visit       correctly on the edit page and
records.                            on Visit records.


## When a Child Visit contained a      Selecting Submit on a Parent

sample or DTP with a Mandatory      Visit works correctly when a
Signature requirement and user      Child Visit contains a sample or
selected Submit on the Parent       DTP with a Mandatory Signature
Visit, an error was shown           requirement.
indicating the signature or
DocumentId wasn't captured for
the attendee.


## When a remote visit was created     The child attendee visit record is

with a child attendee, after the    now retained along with the
remote session ended the child      added products.
attendee visit and any added
products were deleted.


## The signature screen wasn't         The signature screen now

displayed as a full window,         displays as a full window.
allowing HCPs to see part of the
application when they sign.


## Mobile Visits with large

Mobile Visits with large          transactions are now processed
transactions such as more than    correctly.
twenty attendees, would fail with
these messages.

- SYNC_SAVE_FAILED
- Something went wrong while
saving the target record. We

<!-- page:763 -->




Feature                         Issue                                Description



## couldn't perform the action

because this visit is signed and
locked.



## A single Visit record is now

When a user submitted an ad          created following a remote
hoc, remote visit, a second,         engagement.
duplicate visit record for the
same time and channel would
be created in completed status
but containing no information,
despite the original planned visit
being correctly updated to
completed status.


## The New Inquiry window would         The New Inquiry window now

become unresponsive when             functions correctly.
launched from Inquiry action on
a Visit Engagement page.


## After an Attendee Visit              After signing an Attendee Visit

Engagement was signed, the           Engagement, sample details
Direct to Practitioner sample        can't be changed.
details were still editable.


## When the Contact Point Address       The Place ID displays a complete

Formula Field was set to None,       address when the Contact Point
the Place ID would display an ID     Address Formula Field is set to
instead of a complete address.       None.


## For remote engagements, digital      Digital signatures are now saved

signatures weren't being saved       correctly for remote
correctly.                           engagements.


## Surveys completed from Mobile        Completed surveys now appear

for Visits would appear under        correctly on mobile.
the Completed section of the
corresponding records on the
web, but not on mobile.


## Samples and Direct to            KAM users no longer see the

Practitioner related lists were  Samples and Direct to
displayed to Key Account         Practitioner related lists.
Manager (KAM) users even when
they shouldn't have been able to

<!-- page:764 -->




Feature                            Issue                                Description

see them.


## When samples were added to           The signature page now displays

the visit, license information       the correct license information
related to the visit's place and     when samples and Direct to
shipping address were displayed      Practitioners are added to a visit.
on the signature page. When
Direct to Practitioners (DTPs)
were added to the visit, license
information related to the visit's
place and shipping address were
displayed.

General                            The AFLS Mobile       The AFLS Mobile
app wasn’t available for             app is now available in France.
distribution in France.


## Logging out of the Life Sciences     Users can now log out of the Life

Cloud Mobile app takes 2             Sciences Cloud Mobile app
minutes or longer.                   without delay.

Home Page                          In some cases, the home page         The home page no longer
crashes when trying to refresh       crashes when refreshing map
data for maps.                       data.


Patch 258.9.0

This patch contains fixes to ensure that the AFLS mobile app features work correctly.


Feature                            Issue                                Description

Search Before Create               When users click the Search          Updated the configuration to
Online button from the Accounts      permanently enable the
page, a blank screen appears         advanced search layout,
instead of the search interface.     ensuring that the search page
loads properly and consistently.

Data Change Request                When records are updated from        Fixed the DCR approval logic to
the mobile app, Data Change          correctly process requests
Request (DCR) are created.           created from record updates
Admins encountered an error          made through the mobile app,
while approving these DCRs.          enabling admins to approve
them successfully.

Home Page                          In the Up Next component on          The Edit Visit action now opens

<!-- page:765 -->




Feature                         Issue                                Description

the home page, the Edit Visit      the page to edit visit details.
action opened the visit details in
view mode instead of edit mode.

Remote Engagement               Ending a remote engagement          The selected presentation and
session resulted in the loss of the associated metrics are saved and
selected presentation and a         recorded properly.
failure to capture presentation
metrics.

Account Address                 The State License Number shield Fixed the logic so the icon now
icon appears on the Account List correctly appears when a
only if a contact point address is Business License record exists.
set on the Business License
record, which was incorrect.

External Search                 Search for Business License          The code is updated to use the
records in Salesforce failed due     correct search API, resolving the
to an outdated API endpoint.         endpoint failure and restoring a
smooth search experience.

Visit Management                Validations were missing for         Added sample limits validations
sample limits when signing child     for child visits.
visits.


## Manual sync is failing after users   Fixed the underlying database

created a visit or inquiry.          error that prevented syncs.
Manual syncs for visits and
inquiries are now succeeding.


## Visit creation is failing with an    Users can now create visits

incorrect validation error. The      without a batch.
user is prompted to select a
batch, even though the Batch
field is not required.

Mobile-to-Web Sync              Transactions on the mobile app     Fixed the sync issue.
were failing to sync automatically
to the web, requiring manual
intervention.

Time Off Territory              An incorrect validation error is     Fixed the validation logic to
shown when a user tries to           show relevant errors.
create an overlapping event.

Activity Timeline               Field sets were not visible in the   Fixed the visibility of field sets in
activity timeline.                   the activity timeline.

<!-- page:766 -->




Feature                         Issue                                 Description

Planner                         The Day View field set values         Ensured that the Day View field
aren’t shown in the Visit tile on     set now picks fields from the
the calendar.                         Visit object.


## Incorrect warnings or errors are      Fixed the validation logic to

shown when a user tries to            show relevant warnings and
create a visit for an account that    errors.
already has one scheduled
within the period specified by
the admin.


## Incorrect best time values are        Fixed the incorrect time values

shown when a user drags an            and resolved display errors in the
account or account address to         calendar.
the calendar grid.

Consent Management              When selecting consent for the        Reverted the feature to its
first time, no channels were          previous state, displaying all
displayed until values were           configured channels from each
selected, leading to a confusing      subscription regardless of
user experience.                      channel values being selected.

Email                           Consent subscriptions were            Fixed the issue to ensure that
opted out incorrectly after users     consent subscriptions remain
sent an email.                        intact, preventing unintended
opt-outs after users send an
email.

Provider Card                   In the Account tab, the provider      The provider card now displays
card shows “Account Snapshot”         the name of the ARC graph,
instead of the graph name, and        upcoming visit details, preferred
shows the NextProviderVisitDate       address, and the sample
field name instead of the visit       eligibility details. It no longer
details. It doesn’t show the          hides the Best Time to Contact
preferred address, the sample         element name when the
eligibility details, and hides the    corresponding record details
best time to contact the provider     aren’t available. Also, the card no
when the corresponding record         longer shows the KOL text item
details aren’t available. Also, the   when the specified conditions
card shows the KOL text item          aren’t met.
even if the conditions aren’t met.

General                         The mobile app is crashing when Fixed the issue to prevent the
a user attempts to log out after app from crashing when users
entering the PIN.                log out after entering the PIN.

<!-- page:767 -->




Feature                         Issue                            Description

Agentforce Home                 Tapping the primary chat box in Now the chat box works as
the iOS Agentforce Home         expected.
Welcome component resulted in
an error on the Agentforce chat
window.

<!-- page:768 -->





Set up Clinical Engagement for Life Sciences by implementing features such as Participant Management
and Site Management.


## Get Started with Clinical Engagement

Accelerate clinical trials across patients, sponsors, sites, and more on a flexible and compliant
platform. Clinical engagement in AFLS helps clinical research organizations raise trial
awareness with candidates, speed up their onboarding, and mitigate attrition. Empower candidates to
discover trials, evaluate eligibility, and sign up for eligible trials with robust self-service portals.
Streamline participant enrollment with optimized auto-matching and consent management features.
Sign Up for a Life Sciences Trial Org
Sign up for a trial to get hands on with Clinical and Patient Engagement features in a Life Sciences
Cloud org. The trial org doesn't include Life Sciences for Customer Engagement features.
Plan and Prepare for Clinical Engagement
Let’s walk you through some key concepts before you begin your implementation. Learning about how
AFLS models data and its users will help you optimize your implementation to the
needs of your organization.
Set Up Clinical Engagement Basics
Before you set up specific clinical engagement features in Agentforce Life Sciences, perform basic
setup tasks such as enabling person accounts and installing OmniStudio.
Set Up Participant Management
Participant Management streamlines the process of recruiting and enrolling participants in clinical
trials by orchestrating each stage, from initial recruitment to enrollment. With this feature, you can
provide a unified clinical trial portal experience for potential participants and clinical trial coordinators.
Set Up Site Management
Life sciences organizations can identify suitable sites and investigators for conducting research studies.
Identification of the right site, the initial step in the research study process, is crucial to the successful
completion of a study.

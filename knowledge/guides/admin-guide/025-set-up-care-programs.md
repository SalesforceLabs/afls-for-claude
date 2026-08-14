<!-- guide:admin-guide section:set-up-care-programs pages:978-993 -->
# Set Up Care Programs



Care program participants who are members of a site can log in and review and consent to forms
related to their care program.
Add Consent Documents to a Care Program
Add consent documents to a care program by defining the relationship in the Data Use Purpose tab or
by copying existing consent documents for a new care program.
Register and Ship Devices for Care Programs
Help patients stay on course with their care metric targets by registering healthcare devices or creating
a shipping request to deliver devices to them. Care Coordinators can then track biometric data from
these devices, identify healthcare gaps, and engage with patients for follow-ups.
Use Care Programs
Enroll participants in care programs like a diet and nutrition class or an employer-sponsored wellness
program. Stay compliant by capturing electronic signatures and tracking consent for each care
program enrollment. Consent can take place with the participant providing consent in person, using a
tablet or mobile device. Patients and members who aren’t physically present can log into their
Experience Cloud site, then view and provide consent for documents related to the program.


Map External Program Enrollment Fields to Your Org

To use the Care Program Enrollments API to create program enrollment records, create mappings from
source system fields to Salesforce target entities and attributes.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


1. From Setup, in the Quick Find box, enter Care System Field Mapping, and then select Care
System Field Mapping.
2. Click New Care System Field Mapping.
3. Enter these values:

Field                                                 Description

Label                                                 The label for this care system field mapping.

Name                                                  The unique name used by the API.


## Source System

Name of the system from which the record was
sourced.

Target Object                                         Name of the parent entity for the external ID.


## External ID Field

The ID of the field in the external system.

<!-- page:979 -->




Field                                                 Description

IsActive                                              Select to activate this configuration and make it
available to users.


## Role

The role the entity field represents.

4. Save your work.


Manage Care Program Enrollment Flows

Give your users a streamlined, guided care program enrollment process. With Flow Builder, you can clone
and configure the Program Enrollment flow and take advantage of the rich care program management
data model.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS



## Configure User Permissions and Sharing Rules

Set up organization-wide default sharing settings and grant specific access to the objects that make up
a care program. Create and clone permission sets to give users the correct access to forms and other
data.
Create User Records for Care Program Site Participants
Create user records that include permission for participants to log in to a site in order to review and
consent to the related forms. Person accounts store information about specific people by combining
certain account and contact fields into one record. Person accounts are the recommended record
types for care plan participants.
Create a Care Program and Add Related Records
To create a care program, define the program and the relationships and activities within it. Also create
a care program product and care program provider and other records as needed.
Create a Care Program Goal
Create a Care Program Goal, and associate it with a care program.
Care Program Providers
To help a care team identify the primary healthcare practitioner associated with a care program
provider, create an association between the practitioner and the provider. This link also allows the care
team to look up all the healthcare practitioners involved with a care program provider.
Configure the Program Enrollment Flow
Use Flow Builder to automate your care program enrollment process. We’ve delivered an enrollment
flow that helps your users select a program, add related products and providers, and capture the
participant’s consent.

<!-- page:980 -->




Configure User Permissions and Sharing Rules

Set up organization-wide default sharing settings and grant specific access to the objects that make up a
care program. Create and clone permission sets to give users the correct access to forms and other data.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


1. Set org-wide sharing for the following objects to be Private, Public Read Only, or Public Read/Write, as
necessary.

Authorization Form

Authorization Form Consent

Authorization Form Data Use

Authorization Form Text

Care Program

Care Program Enrollee Product

Care Program Enrollment Card

Care Program Product

Care Program Provider

Data Use Purpose

2. Create a permission set that gives access to the objects used to manage consent forms. Select Object
Settings in your new permission set and enable the following object permissions.

Authorization Forms: Read

Authorization Form Consents: Read, Create, Edit

Authorization Form Data Uses: Read

Authorization Form Texts: Read

Data Use Purposes: Read

3. Clone the Health Cloud Starter (for AFLS) or Health Cloud Foundation permission set

<!-- page:981 -->



(for Health Cloud). Select Object Settings in your cloned permission set and configure Read access for
these objects.

Care Programs

Care Program Enrollees

Care Program Enrollee Products

Care Program Enrollment Cards

Care Program Products

Care Program Providers

4. Enable care coordinators and care managers to enroll participants in programs.
a. From Setup, in the Quick Find box, enter Profiles, and then select Profiles.
b. Clone the Standard User profile and add a profile name.
c. In the cloned profile, click Edit and scroll to General User Permissions.
d. Enable Run Flows.

Note Care Program Enrollee requires at least an Account, User, or Lead record and has a
validation preventing a duplicate of an Account, User, or Lead relationship.

5. Allow care coordinators to enroll patients in the same care program more than one time.
a. From Setup, in the Quick Find Box, enter Program Enrollee Settings, and then select Program
Enrollee Settings.
b. Enable Multiple Enrollments in the Same Care Program.

Note Enabling this setting removes the validation that prevents duplicate enrollments in a care
program. It only checks that at least one of the Account, Lead, or User fields in a care program
enrollee record are populated.

Note After you enable this setting, you can’t disable it.

6. To enable participants to view content in a site, clone the Customer Community Plus User profile or a
similar profile that includes View Content permission. Grant the View Content in Portal permission to
the cloned profile.
a. From Setup, in the Quick Find box, enter Profiles, and then select Profiles.
b.   Clone the Customer Community Plus User profile and add a profile name.
c.   In the cloned profile, click Edit and scroll to General User Permissions.
d.   Enable View Content in Portals.
e.   Save your changes.


Create User Records for Care Program Site Participants

Create user records that include permission for participants to log in to a site in order to review and
consent to the related forms. Person accounts store information about specific people by combining
certain account and contact fields into one record. Person accounts are the recommended record types

<!-- page:982 -->



for care plan participants.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Make sure to enable Experience Cloud in your org.

1. From the App Launcher, find and select Accounts.
2. To open a patient’s record page, click the name of a patient
3. Click    , and select Enable Customer User.

This option opens a new user record in your Salesforce org with some details prepopulated from the
contact record.

4. Edit the user record for this external user and assign the Customer Community Plus license and the
cloned Customer Community Plus profile.
5. Click Save.
6. Select Permission Sets and add the cloned Health Cloud Starter (for AFLS) or Health
Cloud Foundation (for Health Cloud) permission set and the permission set you created to manage
access to consent forms.


Note Make sure to add the user to the library associated with the care program consent forms.


Create a Care Program and Add Related Records

To create a care program, define the program and the relationships and activities within it. Also create a
care program product and care program provider and other records as needed.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Make sure you create records for the Product and the Provider objects. You must associate these records
with the Care Program Product and Care Program Provider, respectively.

1. Create a care program.
a. From the App Launcher, find and select Care Programs.
b. Click New, and enter the name of the care program. For example, create a care program called
Diabetes Control for patients who have high blood sugar.

<!-- page:983 -->



c. Select the parent program the care program is part of, if any.
d. If you create a care program for advanced therapies, in Category, select Advanced Therapy.

Note Make sure you add the Category field to the Care Program Page Layout

e. Enter the start date and end date for the care program.
f. Add a description for the care program.
g. Select the status of the care program.
h. Save your changes.
2. Create a care program product.

Note Unless you specify a product in the Product field, you won’t be able to choose a product
when you enroll a patient to the care program using the Care Program Enrollment Flow.

a. From the App Launcher, find and select Care Program Products.
b. Click New, and enter the name of the care program product.
c. In Care Program, select the care program record the product is for. For example, select the care
program you created in the previous step, that is, Diabetes Control.
d. Select a product.
e. Select the status of the care program product.
f. Save your changes.
3. Create a care program provider.
a. From the App Launcher, find and select Care Program Provider.
b. Click New, and enter the provider’s name.
c. Select the account that provides the product to the enrollee.
d. Select the care program product you created in the previous step.
e. Select the status of the care program provider.
f. Save your changes.
4. Optionally, configure the following records based on how your company uses care programs.
- Care Program Eligibility Rules: Define the eligibility criteria for participation in a care program. Use
the Care Program Eligibility Rules object to associate a care program with an enrollment eligibility
criteria record.
- Care Program Enrollee: Create records for participants enrolled in a care program. Indicate whether
the patient was at a long-term healthcare facility during enrollment, add the Lead Id representing
the patient, and specify the opt-out date and reason.
- Care Program Enrollee Product: Create records that associate care program enrollees with care
program products, care program providers, or both.
- Care Program Enrollment Card: Create a care program membership card that includes the enrollee’s
name and a membership card number or enrollment number.
- Care Program Team Member: Create records for people who deliver services under a program, such
as a program manager or care coordinator.


Create a Care Program Goal

Create a Care Program Goal, and associate it with a care program.

<!-- page:984 -->




**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


To create goals as part of a care program, define the care program goals.

1. On the Care Program Goals tab, click New.
2. Enter the goal name. For example, Reduce Sugar Intake.
3. Select a care program.
To create a care program, click New Care Program.
4. Select a Start Date and an End Date.
5. Choose the status of the care program goal.
6. Save your work.


Care Program Providers

To help a care team identify the primary healthcare practitioner associated with a care program provider,
create an association between the practitioner and the provider. This link also allows the care team to
look up all the healthcare practitioners involved with a care program provider.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


1. In the App Launcher, select Care Program Healthcare Providers and then click New.
2. Add a name for the association between a care program provider and healthcare provider (healthcare
professional).
3. Choose a care program provider.
4. Choose a healthcare provider.

<!-- page:985 -->





Note To assign this healthcare provider as the primary provider, select Primary Provider.

5. Save your changes.


Configure the Program Enrollment Flow

Use Flow Builder to automate your care program enrollment process. We’ve delivered an enrollment flow
that helps your users select a program, add related products and providers, and capture the participant’s
consent.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


If your enrollment process requires that consent happen apart from enrollment, remove the Enrollment
Consent Forms component from the Program Enrollment flow. Create a separate flow that uses the
enrollee record and then add the Consent Form List View component to the flow.


Note The Enrollment Consent Forms component is supported only when it's used with the
ProgramManagement object. The Microsoft Edge browser isn’t supported for electronic signature
capture during consent. Patient enrollment and the review and acceptance of consent documents
not requiring a signature are supported in Microsoft Edge.


1. From Setup, enter Flows in the Quick Find box, select Flows, and then click New Flow.
2. In New Flow screen, select All + Template.

<!-- page:986 -->



3. Select the Program Enrollment flow type, and click Next.
4. The elements for a basic enrollment and consent flow appear in the builder.
Drag any additional elements you want to use onto the canvas.
5. Select each of the flow elements and configure the screen properties.
6. Save your flow.
7. Add the Enroll in Program quick action to a record page.

Note Health Cloud orgs that were created before Winter ’20 must add the Enroll in Program quick
action to the Person Account or Account page layout. Newer orgs that use the delivered flow and
page layout without making any changes don’t require this step.

a. From the object management settings for Person Account, go to Page Layouts and select Person
Account Layout.
b. If the buttons in the Salesforce Mobile and Lightning Experience Actions section aren’t visible, click
override the predefined actions.
c. Click Mobile & Lightning Actions.
d. Drag the Enroll in Program action into the Salesforce Mobile and Lightning Experience Actions
section.

Note Under Quick Actions, there’s an Enroll in Program action, but it isn’t supported in the
Lightning app. Make sure to use the Enroll in Program action found in the Mobile & Lightning
Actions section.

e. Save your changes.


Create an Experience Cloud Site and Set Up Member Access

Care program participants who are members of a site can log in and review and consent to forms related
to their care program.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Clone the Customer Community Plus User profile or a similar profile that includes View Content
permission. Grant the View Content in Portal permission to the cloned profile.

1. From Setup, in the Quick Find box, enter All Sites, and then select All Sites.
2.    Select Workspaces next to your Experience Cloud site.
3.    Click Administration | Members.
4.    Select the cloned Customer Community Plus profile.
5.    Click Add.
6.    Save your changes.
7. From Workspace, go to Builder and click   .
8. Drag the Care Programs for Health Cloud Empower component from the Components panel onto an

<!-- page:987 -->



editable area of the page.
9.    Edit the properties of the component, as necessary.
10.    From Home, select +New Page.
11.    To create a custom detail page for Care Program Enrollee, click Object Pages, and select the Care
Program Enrollee object.
12.    Click Create.
13.    Drag the Care Program Consent Forms component onto an editable area of the page.
14.    Publish and activate the site.


Add Consent Documents to a Care Program

Add consent documents to a care program by defining the relationship in the Data Use Purpose tab or by
copying existing consent documents for a new care program.


## Associate New Consent Documents with a Care Program

To associate new consent documents with a care program, define the relationship in the Data Use
Purpose tab. Provide more information about each consent form with Authorization Form and
Authorization Form Text. Then, use Authorization Form Data to associate the consent form with the
care program.
Copy Existing Consent Documents for a New Care Program
To copy existing consent documents for a new care program instead of creating documents from
scratch, clone the documents from a Data Use Purpose record.
Upload Care Program Consent Documents
Upload and organize the consent documents that are associated with a care program. Each document
that is stored in the document library resides in a folder. The folder’s attributes determine the
accessibility of the folder and the documents within it.
Grant Site Members Access to Consent Documents
Make sure site members can view and consent to documents when they log into the site and open
their care program card.


Associate New Consent Documents with a Care Program

To associate new consent documents with a care program, define the relationship in the Data Use
Purpose tab. Provide more information about each consent form with Authorization Form and
Authorization Form Text. Then, use Authorization Form Data to associate the consent form with the care
program.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:988 -->



Make sure you have the consent form you want to use for your care program in your org. If you don’t
have a consent form in your org, navigate to the Files tab and upload a consent form file.

1. Create a data use purpose for your consent form. Data Use Purpose is a container for the forms that go
with a care program. For example, in a knee post-arthroscopy care program, there can be several forms
to consent to. A participant must consent to a physical therapy session for treatment, or equipment
rental, or a home health visit.
a. From the App Launcher, find and select Data Use Purpose, and then select New.
b. Enter a name for the data use purpose, such as Pre-Arthroscopy Program Consent Forms.
c. Select the name of the care program from the Purpose field.

Note The Legal Basis field and the checkbox that lets users opt out of the consent process
aren’t used for care programs.

d. Save your changes.
2. Next, create an Authorization Form record to provide information about each consent form.
a. From the App Launcher, find and select Authorization Form, and then select New.
b. Enter the name, revision number, and effective dates of the consent form.
c. Add a default auth form text to use if text isn’t available for a specific language.
If you don’t have a default auth form text record available in your org, create a default auth form text
record after you save the Authorization Form record. Add the default auth form text record to the
Authorization Form record.

Note If Intelligent Document Automation is enabled in your org, only Authorization Form
records that have an associated record in the Default Auth Form Text field are displayed in the
care program enrollment flow

d. If the program requires that the participant consents to the form, select Signature Required.
e. Save your changes.
3. Create an Authorization Form Text record to manage the text associated with the consent form.
You can create multiple text versions for the same consent form to support different languages,
regions, and situations.
a. From the App Launcher, find and select Authorization Form Text, and then select New.
b. Enter the name of the text for the consent form. For example, Consent for Treatment
(Spanish).
c. For Summary Auth Form Text, add a summary to describe the form’s purpose and display to
customers when asking for their consent.
d. For Authorization Form, select the associated authorization form record.
e. Select the locale for the content document.
Make sure that the value in the Locale field matches the language of the org or the site in which the
form is viewed. The consent form doesn’t appear when the Locale field is incorrect. Create an
authorization form text record for each language supported in your org.
f. Select the checkbox for Is Active.
Note If Intelligent Document Automation is enabled in your org, only Authorization Form Texts
records that are active are displayed in the care program enrollment flow.

g. For Content Document, select the uploaded consent form.
h. Save your changes.

<!-- page:989 -->



4. Connect the consent form with the care program.
a. From App Launcher, find and select Authorization Form Data Uses.
b. Select New
c. Enter the name of the form in the Authorization Form field.
d. Add the name of the care program in the Data Use Purpose field.
e. Save your changes.


Copy Existing Consent Documents for a New Care Program

To copy existing consent documents for a new care program instead of creating documents from scratch,
clone the documents from a Data Use Purpose record.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


1. From the App Launcher, go to Data Use Purpose and then click the record that contains the existing
consent documents.
2. Click the Clone arrow, and then click Clone with Related.
3. Select the objects you want to clone and click Next.
4. Give this data use purpose a descriptive name, such as Pre-Arthroscopy Program Consent Forms
Clone.
5. In the Purpose field, select the care program to clone the consent forms to.
6. Save your changes.


Upload Care Program Consent Documents

Upload and organize the consent documents that are associated with a care program. Each document
that is stored in the document library resides in a folder. The folder’s attributes determine the
accessibility of the folder and the documents within it.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

Note Files larger than 25 MB, unknown file types, password-protected files, and copy-protected
PDFs can’t be previewed. Some Microsoft Office 2007 features don’t display correctly in previews. If
a file can be previewed, but a preview doesn’t exist, contact your Salesforce admin who can try to
regenerate the preview.

<!-- page:990 -->



1.    From the App Launcher, go to Files.
2.    Select Libraries and click New Library to create a library for consent documents.
3.    Add a name and a description for the library.
4.    Click Add Files and select the consent form you want to add to the library.
You can upload from your desktop or select a form that’s already been uploaded to the Files tab.


Grant Site Members Access to Consent Documents

Make sure site members can view and consent to documents when they log into the site and open their
care program card.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

Tip You can also manage Files membership through a public group or by adding a single user. If
you're doing this via API, use the ContentWorkspaceMember object to manage library membership.


1. From the App Launcher, go to Files, and open the library that contains the consent forms.
2. Click Manage Members.
3. Add a site member and configure the access level to the consent forms.


Register and Ship Devices for Care Programs

Help patients stay on course with their care metric targets by registering healthcare devices or creating a
shipping request to deliver devices to them. Care Coordinators can then track biometric data from these
devices, identify healthcare gaps, and engage with patients for follow-ups.


Configure Tab Visibility

You can configure which tabs to show on the Register Device and Create Shipping Request screen to give
your users a streamlined experience.

1. From Setup, in the Quick Find box, enter Flows, and select Flows.
2.    In the list of flows, click Register Device and Create Shipping Request.
3.    In Flow Builder, double-click Register Device and Create Shipping Request.
4.    In the Edit Screen window, click Register Device and Create Shipping Request.
5.    Configure which tabs to show.
- To display both the Register Devices and the Create Shipping Requests tabs, on the right pane, in
the Tab Settings field, enter All.
- To display the Register Devices tab only, on the right pane, in the Tab Settings field, enter Register.

<!-- page:991 -->



- To display the Create Shipping Requests tab only, on the right pane, in the Tab Settings field, enter
Ship.
6. Click Done.


Add an Action to the Patient’s Account Page

Configure an action for the flow you created and add the action to the person account page layout.

1. From the object management setting for Accounts, click Buttons, Links, and Actions.
2. Select New Action.
3. In Action Type, select Flow.
4. In Flow, select Register Device and Create Shipping Request.
5. In Standard Label Type, select None.
6. Add a label, name, and description for the new action.
7. Save your changes.
8. From the object management setting for Person Accounts, go to Page Layouts.
9. Select Person Account Layout.
10. From the Mobile & Lightning Actions menu, drag the Register Device and Create Shipping Request
field onto an editable part of the page.
11. Save your changes.


Register a Device for a Patient

1.   On the patient’s account page, click Register Device and Create Shipping Request.
2.   Select the products that represent the device types to register, and then click Next.
3.   Register devices for the patient.
4.   Save your changes.


Create a Shipping Request

1. On the patient’s account page, click Register Device and Create Shipping Request.
2. Select the products that represent the device types to ship to the patient, and then click Next.
3. Add the shipping information for the devices that you want to ship to the patient:
a. Click the Create Shipping Request tab.
b. Click Edit next to Quantity.
c. Add the shipping information for the device, and then click Save Shipping Info.
4. Save your changes.


Note Starting Summer ‘21, the organization-wide default sharing setting for the Product object is
Private. If you’re new to Salesforce, to use the object for device registrations, change the sharing
setting to Public Read/Write.

<!-- page:992 -->




Use Care Programs

Enroll participants in care programs like a diet and nutrition class or an employer-sponsored wellness
program. Stay compliant by capturing electronic signatures and tracking consent for each care program
enrollment. Consent can take place with the participant providing consent in person, using a tablet or
mobile device. Patients and members who aren’t physically present can log into their Experience Cloud
site, then view and provide consent for documents related to the program.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS



## Enroll a Participant in a Care Program

It’s quick and easy to enroll someone in a care program and capture their consent to participate.
Associate a Healthcare Professional with a Care Program Provider
To let the care team identify the primary healthcare professional associated with a care program
provider, associate a healthcare professional with a care program provider. This association also allows
the care team to look up all healthcare professionals for care program providers.


Enroll a Participant in a Care Program

It’s quick and easy to enroll someone in a care program and capture their consent to participate.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS




1. From the Detail page of a participant’s Person Account record, select Enroll in Program.
2. Select the care program from the list of available programs.
3. Click Next.
4. Select the products that are related to the program and click Next.
To filter the list to see only the products you’ve selected, click Show Selected.
5. Select the providers associated with the product and click Next.
If the product doesn’t have an associated provider, you can skip it and click Next.
6. Review the products and providers associated with the program.
You can navigate to previous screens, and make changes, if necessary.
7. Click Enroll.

<!-- page:993 -->



8. If the participant is present with you, have them review any related consent forms by selecting the
name of the form.
9. Have the participant sign in the signature box and click Consent for forms that require a signature or
click Accept for forms that are informational only.
10. Click Finish.


Note When the participant isn’t physically present, they can log into the Experience Cloud site and
see which programs have forms to review and to provide consent for. The care program card
indicates that there are forms to review. When the participant selects the card, the Care Program
Enrollee page opens so that they can review forms and provide consent, if necessary.


Associate a Healthcare Professional with a Care Program Provider

To let the care team identify the primary healthcare professional associated with a care program provider,
associate a healthcare professional with a care program provider. This association also allows the care
team to look up all healthcare professionals for care program providers.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


Make sure that the field-level security of the Source System Identifier, Status Reason, Source System, and
Parent Record Type fields is set to visible for all profiles.

1. In the App Launcher, select Care Program Healthcare Providers and then click New.
2. Add information for the association between the healthcare provider (healthcare professional) and
the care program provider.

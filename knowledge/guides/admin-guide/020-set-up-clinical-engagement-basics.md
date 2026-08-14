<!-- guide:admin-guide section:set-up-clinical-engagement-basics pages:776-790 -->
# Set Up Clinical Engagement Basics



volume of required codes can be immense, we recommend that you use the Salesforce Data Loader to
import code data into your orgs.

Data Loader is a client application for the bulk import or export of data. Use it to insert, update, delete,
or export Salesforce records. When importing data, Data Loader reads, extracts, and loads data from
comma-separated values (CSV) files or from a database connection. When exporting data, it outputs CSV
files.

Check Considerations for Installing Data Loader for system requirements and other prerequisites to using
Data Loader.

Data integrity in your code database is vital to the smooth functioning of your organization. It’s likely that
you don’t want your users to modify codes or add new ones. Such code changes can interfere with the
automated approval processes you’ve set up and result in unintended authorizations. Therefore, we
recommend modifying the access permissions on these objects after you populate these objects with
the data your organization needs. You can give your users Read-Only access to these objects, or even
prevent new record creation in them after your initial data loading.



Set Up Clinical Engagement Basics

Before you set up specific clinical engagement features in Agentforce Life Sciences, perform basic setup
tasks such as enabling person accounts and installing OmniStudio.


## Set Up Security and Permissions for AFLS

Create users and profiles for your org and give them the permission sets and permission set licenses
that they need for AFLS.
Verify Data Protection Details Are Available in Records
To help maintain the privacy of your users’ data, verify that data protection details are available for
lead, contact, and person account records.
Set Up Person Accounts to Represent People in AFLS
Person accounts store information about specific people by combining certain account and contact
fields into a single record. In AFLS, always model your patients or members as person
accounts. You can’t fully use AFLS functionality if you don’t model your patients and
members as person accounts.
Omnistudio for AFLS
Use Omnistudio to create guided interactions and other rich user experiences without code. You can
even create applications and workflows using data from AFLS and from external
sources.
Set Up Healthcare Providers
Set up records for healthcare providers such as the practitioners (people) who take care of patients
and the facilities (organizations) where patients are cared for. Practitioners include doctors, nurses,
physical therapists, and other clinical staff. Facilities include hospitals, clinics, labs, and other
organizations.

<!-- page:777 -->




Set Up Security and Permissions for AFLS

Create users and profiles for your org and give them the permission sets and permission set licenses that
they need for AFLS.


## Add AFLS Users

You can add internal Salesforce users one at a time or in batches of up to 10 users.
Configure Profiles for AFLS
Your org includes several standard profiles where you can edit a limited number of settings. You can
assign these standard Salesforce profiles to your AFLS users. If you need a custom
profile to extend visibility and provide access to certain objects, clone a standard profile and edit it to
meet your organization’s needs. You can also adjust users’ profiles to determine their access to fields.
Assign Permission Sets for AFLS
To work in AFLS, users need the appropriate permission sets and permission set
licenses. The Permission Sets page in Setup describes each permission set and shows the permission
set license related to each permission set. Sort the License column to gain a clear picture of which
permission sets match which permission set licenses.


Add AFLS Users

You can add internal Salesforce users one at a time or in batches of up to 10 users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


1. From Setup, in the Quick Find box, enter Users, and then select Users.
2. Click New User to add a single user.
3. Enter a first name, last name, email, and a unique username in the form of a email address.
Your username must be unique across all Salesforce orgs, including trial and Sandbox orgs.
4. Select a user license and a profile. For example, select Salesforce as the user license and Standard User
as the profile.
The user license determines the available profiles. A profile specifies the user’s minimum permissions
and access settings.
5. To email a login name and temporary password to each new user, ensure Generate new password
and notify user immediately is selected.
6. Specify more details for the user as needed.
7. Save your changes.


Configure Profiles for AFLS

Your org includes several standard profiles where you can edit a limited number of settings. You can

<!-- page:778 -->



assign these standard Salesforce profiles to your AFLS users. If you need a custom profile
to extend visibility and provide access to certain objects, clone a standard profile and edit it to meet your
organization’s needs. You can also adjust users’ profiles to determine their access to fields.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS

Note When you set up certain features such as Advanced Therapy Management, you will encounter
tasks to create specific profiles for users of those features.


1.    In Setup, in the Quick Find box, search for and select Profiles.
2.    Select a profile and then click Clone.
3.    Enter a name for the new profile and then click Save.
4.    Configure the new profile per your organization’s requirements and save your changes.


Assign Permission Sets for AFLS

To work in AFLS, users need the appropriate permission sets and permission set licenses.
The Permission Sets page in Setup describes each permission set and shows the permission set license
related to each permission set. Sort the License column to gain a clear picture of which permission sets
match which permission set licenses.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To assign permission set licenses or permission     Manage Users
sets:



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud for Life Sciences


Permission sets give users access to objects and fields, custom metadata, and other app and system
settings. Permission set licenses grant users access to features that aren’t included in their user license.
Users can be assigned any number of permission set licenses.

In Setup, you can assign permission set licenses and permission sets to users in a few ways. When you
assign a permission set to a user, the permission set license is automatically assigned to the user.

- From the Company Information page, you can select a permission set license to view its details and
assign it to multiple users.
- From the Permission Sets page, you can select a permission set to view its details and assign it to

<!-- page:779 -->



multiple users.
-    From the Users page, you can select a user to view his or her details and assign multiple permission set
licenses and permission sets to the user.

1. Familiarize yourself with your list of available licenses and permissions and know what each does.
To see the available permission set licenses, go to Company Information in Setup. To see available
permission sets, go to Permission Sets in Setup.

Note The permission sets available to you depend in part on which features are included in your
Salesforce contract.

2. Assign the appropriate permission sets to your users via the Permission Sets or Users pages.
a. Make sure to add the Health Cloud Starter permission set for all users.
b. Add additional permission sets depending on the features you want to make available to each user.
For example, assign the Manage Pharmacy Benefits Verification permission set to give users access
to the Pharmacy Benefits Verification program and its features.
c. Save your changes.


Verify Data Protection Details Are Available in Records

To help maintain the privacy of your users’ data, verify that data protection details are available for lead,
contact, and person account records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS


1. From Setup, in the Quick Find box, enter Data Protection and Privacy, and then select Data
Protection and Privacy.
2. You don’t need to take any further action if Make data protection details available in records is
selected. If this option is not selected, select Edit, select Make data protection details available in
records, and then save your changes.


Set Up Person Accounts to Represent People in Life Sciences
Cloud

Person accounts store information about specific people by combining certain account and contact
fields into a single record. In AFLS, always model your patients or members as person
accounts. You can’t fully use AFLS functionality if you don’t model your patients and
members as person accounts.


## Enable Contacts to Relate to Multiple Accounts

Relate a single contact to multiple accounts so you can easily track the relationships between people
and organizations.

<!-- page:780 -->




## Enable Person Accounts for Use in AFLS

Enable person accounts so that you can use them to represent patients and members in your Life
Sciences Cloud org.
Create Page Layouts and Record Types for People and Organizations
Create page layouts and assign them to different record types to hold data for the different types of
organizations and people that your organization interacts with. For example, create separate business
account record types with different page layouts for pharmacies, payers, and healthcare provider
organizations.


Enable Contacts to Relate to Multiple Accounts

Relate a single contact to multiple accounts so you can easily track the relationships between people and
organizations.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

Important Enabling Contacts to Multiple Accounts is required to use person accounts in Life
Sciences Cloud.


Because AFLS uses person accounts to represent patients, you must enable the setting
that allows a contact to be related to multiple accounts. By enabling the contacts to be shared with
multiple accounts, you ensure that person accounts are available to use in your org.

1. From Setup, in the Quick Find box, enter Account Settings, and then select Account Settings
2. Click Edit.
3. In the Contacts to Multiple Accounts Setting section of the page, select the checkbox for Allow users
to relate a contact to multiple accounts.
4. Save your changes.


Enable Person Accounts for Use in AFLS

Enable person accounts so that you can use them to represent patients and members in your Life
Sciences Cloud org.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:781 -->




Note After Person Accounts is enabled, it cannot be disabled. We recommend that you create a
sandbox to preview how person accounts affect your Salesforce org.


1. From Setup, use the Quick Find box to search for and select Person Accounts.
2. Go through the steps listed on the Person Accounts page.
a. Acknowledge the impact of enabling person accounts in the org.
b. Verify the Account object has at least one record type such as a Business record type. If it doesn't,
you can open another tab to set up a record type.
c. Verify user profiles that have read permission on accounts have read permission on contacts.
d. Verify the organization-wide default sharing is set so that either Contact is Controlled by Parent or
both Account and Contact are Private.
3. Click Check Readiness to ensure you’ve completed all the prerequisites to enable person accounts in
your org.
4. Click Enable Person Accounts. Click Enable when you see the warning message.
After Person Accounts is enabled, the Person Account and the Account Contact Relationship objects
become visible in Setup > Object Manager in your org. In the Person Account object, a person account
record type and person account page layout are created automatically.
5. From Setup, find and select Profiles, and then assign the Person Account record type to each user
profile.
a. In the Record Type Settings for each profile, find and edit the Accounts object.
b. Move the Person Account record type from Available Record Types to Selected Record Types.
c. Select Person Account or Business as the default record type for the user profile.
d. In the Business Account and Person Account Default Record Types section, verify the Person
Account Default Record Type dropdown has Person Account selected, and then verify the Business
Account Default Record Type dropdown has Business or a value other than --Master-- selected.
e. Save your changes.


Create Page Layouts and Record Types for People and Organizations

Create page layouts and assign them to different record types to hold data for the different types of
organizations and people that your organization interacts with. For example, create separate business
account record types with different page layouts for pharmacies, payers, and healthcare provider
organizations.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


You can also differentiate your patient records from your practitioner records by creating a record type
for patient accounts and a record type for practitioners.

<!-- page:782 -->




Note When you enable person accounts, a person account layout and a person account record type
are created automatically. You can rename the page layout and record type and configure them as
needed.


1. Create a page layout for a person:
a. From Setup, go to Object Manager.
b. In the Quick Find box, enter Person Account, select Person Account, and then select Page
Layouts.
c. Click New.
d. Select an existing page layout from the dropdown.
e. Enter a name for the new layout, and then click Save. For example, enter Patient.
f. Configure the layout to show the fields that your organization uses for patients.
g. Save your work.
h. Repeat these steps to create more page layouts for people as needed; for example, create a page
layout for healthcare providers who are solo practitioners.
2. Create a record type for a person:
a. From Setup, go to Object Manager.
b. In the Person Account object, select Record Types.
c. Click New.
d. Select the existing Person Account record type from the dropdown.
e. Enter a label for the new record type. For example, enter Patient.
f. Select Active.
g. Select the profiles for which you want to make this record type available, and then make this the
default record type for profiles as needed.
h. Click Next.
i. Select a page layout to assign to all the profiles you selected or assign a different page layout for
each profile.
j. Click Save.
k. Repeat these steps to create more record types as needed; for example, create a record type for
healthcare providers who are solo practitioners.
3. Create a page layout for an organization:
a. From Setup, go to Object Manager.
b. In the Quick Find box, enter Account, select Account, and then select Page Layouts.
c. Click New.
d. Select an existing page layout from the dropdown.
e. Enter a name for the new layout, and then click Save. For example, enter Pharmacy.
f.Configure the layout to show the fields that your organization uses for pharmacies.
g. Save your work.
h. Repeat these steps to create more page layouts for organizations as needed; for example, create
page layouts for payer and healthcare provider organizations.
4. Create a record type for an organization:
a. From Setup, go to Object Manager.
b. In the Account object, select Record Types.
c. Click New.
d. Select the existing Business record type from the dropdown.

<!-- page:783 -->



e. Enter a label for the new record type. For example, enter Pharmacy.
f. Select Active.
g. Select the profiles for which you want to make this record type available, and then make this the
default record type for profiles as needed.
h. Click Next.
i. Select a page layout to assign to all the profiles you selected or assign a different page layout for
each profile.
j. Click Save.
k. Repeat these steps to create more record types as needed; for example, create record types for
payer and healthcare provider organizations.


## See Also

Salesforce Help: Configure Profiles for AFLS
Salesforce Help: Assign Record Types and Page Layouts in Profiles


Omnistudio for AFLS

Use Omnistudio to create guided interactions and other rich user experiences without code. You can
even create applications and workflows using data from AFLS and from external sources.

Omnistudio is built on the Salesforce platform and provides a suite of services, components, and data
model objects. Omnistudio includes components for different purposes:

- Omniscripts define and contain user-interaction components and give you the flexibility to create logic
for guided flows.
-    Flexcards display data and launch actions.
-    Integration Procedures bundle server-side data integration operations for efficiency and reuse.
-    Omnistudio Data Mappers transfer and transform data between Salesforce and the Omniscripts,
Flexcards, and Integration Procedures components.

When we update Omnistudio, the upgrades are pushed automatically to you. Omnistudio is required for
Business Rules Engine and Decision Explainer.


Set Up Omnistudio for AFLS

To use Omnistudio in AFLS, set up permissions, change optional Omnistudio settings, and
learn more about Omnistudio.

Before using Omnistudio, set up and assign Omnistudio permission sets.

If needed, deploy Omnistudio components from one org to another. For more information, see Deploy
Omnistudio Components Between Orgs.



## Additional Omnistudio Settings

Omnistudio has other settings that you might want to change. By default, these are disabled.

<!-- page:784 -->



- Use the Omnistudio SLDS 2 Theme
- Enable Autogenerated Numbers
- Enable Enhanced Runtime Performance of Components


## Omnistudio Basics

We also recommend that you use these resources to learn the basics of Omnistudio.

- Trailhead: Get Started with Omnistudio on the Salesforce Platform
- Omnistudio Documentation
- Learn about Omnistudio Standard Designer

Set Up Healthcare Providers

Set up records for healthcare providers such as the practitioners (people) who take care of patients and
the facilities (organizations) where patients are cared for. Practitioners include doctors, nurses, physical
therapists, and other clinical staff. Facilities include hospitals, clinics, labs, and other organizations.

When you set up healthcare provider data, create a record to represent the provider as a person or an
organization, and then create a record to represent what the provider does.

For organizations, create accounts with a Business record type.

For people, create person accounts or contacts, but we strongly recommend person accounts. A person
account combines an account and a contact. Person accounts are a better fit for healthcare providers
who are their own independent entity with practicing rights at a number of locations. These individuals
have their own unique identification number, such as a National Provider Identifier (NPI), which follows
them regardless of where they work. If you map individual providers as contacts, there are limited
capabilities for these records.

To represent providers in terms of what they do, create healthcare provider records. These records store
business-level details about the healthcare organization or person, such as the provider type.

A person account record and a healthcare provider record combine to represent the FHIR Practitioner
resource in Salesforce. The healthcare provider record is the base, and it references the person account
record using the AccountId field.


Note Model providers using both the Healthcare Provider object and person accounts to ensure
they’re aligned to the FHIR Practitioner resource and they can appear in features such as provider
search. If you model providers only as person accounts, you may not be able to use features such as
provider search.


To define the relationship between a practitioner and a facility, create a healthcare practitioner facility
record that specifies the facility’s account record and the practitioner’s person account or contact record.
Healthcare practitioner facility records represent the set of services that a practitioner provides at a
specific location.

<!-- page:785 -->



Create additional records to store provider care specialties, certifications, education, and licenses, and
for the payer network that a healthcare provider is affiliated with.


## Create Records for Healthcare Practitioners

Create a person account record to represent a healthcare practitioner as a person and create a
healthcare provider record to represent what the practitioner does.
Create Records for Healthcare Organizations
Create a business account record to represent a healthcare facility as an organization and create a
healthcare provider record to represent what the organization does.
Create Healthcare Facilities
Create a healthcare facility record to represent the facility's physical, geographic, or functional details.
A healthcare organization’s local branches or facilities need healthcare facility records that reference a
business account and a healthcare provider record for that specific branch or facility.
Connect Healthcare Practitioners with Facilities
Define the relationship between a practitioner and a facility or organization by creating a healthcare
practitioner facility record to represent the set of services that a practitioner provides at that facility or
for that organization.
Create Healthcare Facility and Payer Networks
Create healthcare payer network records for insurance network groups, and then create healthcare
facility network records to identify the payer network that a facility or organization is a part of.
Create Care Specialty Records
Healthcare providers can have multiple specialties and subspecialties. Create care specialty and
healthcare provider specialty records to represent them. You can also classify specialties and
subspecialties using taxonomy records.
Create Care Provider Facility Specialty Records
Create care provider facility specialty records to represent all the specialties that the practitioner
provides at a specific facility or for a specific organization. These records help patients find a provider
by the specialties they offer at a facility.
Add Healthcare Provider Credentials
Create records to store healthcare provider credentials such as accreditations, awards, board
certifications, business licenses, and education.


## See Also

Salesforce Help: Practitioner


Create Records for Healthcare Practitioners

Create a person account record to represent a healthcare practitioner as a person and create a
healthcare provider record to represent what the practitioner does.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:786 -->




Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED

To use Provider Relationship Management:            Health Cloud Provider Relationship Management


Healthcare provider records store business-level details about the healthcare organization or person,
such as the provider type.

1. From the App Launcher, find and select Accounts.
2. Click New.
3. Select the appropriate person account record type for practioners.
4. Enter the practitioner's first name and last name, and salutation if appropriate.
5. Enter optional data such as the practitioner's address and contact information, and then save your
changes
6. Add a business identifier for the account such as the National Provider Identification (NPI) number.
a. From the account's related list, go to Identifiers and click New.
b. For Parent Record, verify the account is selected.
c. For ID Value, enter the identifier value specific to your country or region.
d. Save your changes.
7. From the App Launcher, find and select Healthcare Providers.
8. Click New.
9. For Healthcare Provider Name, enter the practitioner's full name.
10. For Account, select the person account you created for the practitioner earlier.
11. Enter optional data such as the provider type and provider class. For example, select Medical Doctor
for the provider type and select Solo Practitioner fo the provider class.
12. For Status, select Active to show the provider's current status is active.
13. Save your changes.


Create Records for Healthcare Organizations

Create a business account record to represent a healthcare facility as an organization and create a
healthcare provider record to represent what the organization does.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED

To use Provider Relationship Management:            Health Cloud Provider Relationship Management

<!-- page:787 -->



Healthcare provider records store business-level details about the healthcare organization or person,
such as the provider type.

1. From the App Launcher, find and select Accounts.
2. Click New.
3. Select the appropriate business account record type for the provider organization.
4. Enter the name of the organization.
5. Enter the organization's address and contact information.
6. Save your changes.
7. Add a business identifier for the account such as the National Provider Identification (NPI) number.
a. From the account's related list, go to Identifiers and click New.
b. For Parent Record, verify the account is selected.
c. For ID Value, enter the identifier value specific to your country or region.
d. Save your changes.
8. From the App Launcher, find and select Healthcare Providers.
9.    Click New.
10.    For Healthcare Provider Name, enter the organization's name.
11.    For Account, select the business account you created for the organization earlier.
12.    Enter optional data such as the provider type. For example, select Hospital for the provider type.
13.    For Status, select Active to show the provider's current status is active.
14.    Save your changes.


Create Healthcare Facilities

Create a healthcare facility record to represent the facility's physical, geographic, or functional details. A
healthcare organization’s local branches or facilities need healthcare facility records that reference a
business account and a healthcare provider record for that specific branch or facility.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED

To use Provider Relationship Management:             Health Cloud Provider Relationship Management


1.    From the App Launcher, find and select Healthcare Facilities.
2.    Click New.
3.    Enter a name for the facility.
4.    For Account, select the business account you created for the organization earlier.
5.    Add other relevant information, and then save your changes.

<!-- page:788 -->




Connect Healthcare Practitioners with Facilities

Define the relationship between a practitioner and a facility or organization by creating a healthcare
practitioner facility record to represent the set of services that a practitioner provides at that facility or for
that organization.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED

To use Provider Relationship Management:               Health Cloud Provider Relationship Management


A healthcare practitioner facility record specifies the facility’s account record and the practitioner’s
contact record. Create multiple records if a practitioner works for more than one facility or organization.

If the healthcare practitioner provides primary care to the patient, make sure you select the Primary Care
Physician checkbox.

1. From the App Launcher, find and select Healthcare Practitioner Facilities.
2. Click New.
3. For Practioner Facility Name, enter a name such as Dr Meera Kaling at StayHealthy Hospital.
We recommend you establish this naming convention or a similar naming convention for these
records.
4.    Select Active.
5.    For Account, specify the account associated with the practitioner facility.
6.    For Practitioner, specify the practitioner that works at the facility. If you created a person account for
the practitioner, select it in this field. Otherwise select the practitioner's contact record.
7.    If the facility is the practitioner's primary facility, select Primary Facility.
8.    If the practitioner provides primary care, select Primary Care Physician.
9.    Add other relevant information, and then save your changes.


Create Healthcare Facility and Payer Networks

Create healthcare payer network records for insurance network groups, and then create healthcare
facility network records to identify the payer network that a facility or organization is a part of.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein

<!-- page:789 -->




GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED

To use Provider Relationship Management:             Health Cloud Provider Relationship Management


Before you begin, create business account records to represent payer organizations as needed.

1.    From the App Launcher, find and select Healthcare Payer Networks.
2.    Click New.
3.    Enter a name for the payer network.
4.    For Payer, select the payer organization associated with this facility network.
5.    Select a network type such as HMO, PPO, or EPO.
6.    Select Active.
7.    Add other relevant information such as effective date or line of business, and then save your changes.
8.    From the App Launcher, find and select Healthcare Facility Networks.
9.    Click New.
10.    Enter a name for the facility network.
11.    For Account, select the business account associated with this facility network.
12.    For Payer Network, select the payer network you created earlier.
13.    For Practitioner Facility, select a healthcare practitioner facility related to the account you selected.
14.    For Practitioner, select the practitioner related to the healthcare practitioner facility.
15.    Add other relevant information, and then save your changes.


Create Care Specialty Records

Healthcare providers can have multiple specialties and subspecialties. Create care specialty and
healthcare provider specialty records to represent them. You can also classify specialties and
subspecialties using taxonomy records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED

To use Provider Relationship Management:             Health Cloud Provider Relationship Management


1. From the App Launcher, find and select Care Specialties to create care specialty records that store
general provider specialty codes and descriptions. For example, 02 - Physician/General Surgery.
2. From the App Launcher, find and select Care Taxonomies to create care taxonomy records that store a
static list of taxonomy codes..
3. From the App Launcher, find and select Care Specialty Taxonomies to create records that define the

<!-- page:790 -->



relationship between a care specialty and a care taxonomy.
4. From the App Launcher, find and select Healthcare Provider Specialties to create healthcare provider
specialty records to store the specialties for a practitioner or a provider organization.


Create Care Provider Facility Specialty Records

Create care provider facility specialty records to represent all the specialties that the practitioner provides
at a specific facility or for a specific organization. These records help patients find a provider by the
specialties they offer at a facility.


**REQUIRED EDITIONS**


Available in: Enterprise and Unlimited Editions with Health Cloud


USER PERMISSIONS NEEDED

To use Provider Relationship Management:                 Health Cloud Provider Relationship Management


1.    From the App Launcher, select Care Provider Facility Specialties.
2.    Click New.
3.    Enter a name for the record.
4.    For Specialty. select the practitioner’s specialty or create a new one.
5.    For Practitioner Facility, select the facility where the practitioner practices the specialty.
6.    Select Primary Specialty if this specialty is the practitioner’s primary specialty at this facility.
7.    Select Active.
8.    Add other relevant information, and then save your changes.


Add Healthcare Provider Credentials

Create records to store healthcare provider credentials such as accreditations, awards, board
certifications, business licenses, and education.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED

To use Provider Relationship Management:                 Health Cloud Provider Relationship Management


1. From the App Launcher, find and select Accreditations to create records for the professional
accreditations of a facility. For example, a joint commission accredits a facility as a general acute care

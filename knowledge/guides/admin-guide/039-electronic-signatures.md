<!-- guide:admin-guide section:electronic-signatures pages:1249-1254 -->
# Electronic Signatures




Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


To learn more, see Assessments and Surveys.



Electronic Signatures

Reduce turnaround time by managing electronic signatures in Salesforce using Digital Verifications. Set
up signature trails for records or workflows that require users to verify key updates.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

Note Salesforce's Electronic Signature feature provides 21 CFR Part 11-ready electronic signature
functionality. You can set up and use the feature to comply with your own 21 CFR Part 11
compliance requirements.


Help users track when they need to digitally verify records by embedding a Pending Signature
component anywhere in your org such as on the Home page, on a record detail page, on a tab, or in a
Lightning web component or Salesforce Flow. Users can view a list of electronic signature records that
are ready for signing or that are rejected but still open. Users can sign these records on the same device
or different devices.

Each electronic signature record includes the signature request date and a link to the related reference
record. Users approve or reject the update, add comments, enter their location, and enter their CRM
user credentials.

A signature trail is complete when all signatures in the trail have a status of Completed or Rejected. You
can add more status values for the signature trail and signature.

Here are examples of when you can use electronic signatures.

- Manage Chain of Custody of Advanced Therapies: A custody item related to a care program enrollee
has three custody chain entries. Each custody chain entry has a signature trail. The electronic signature
records in this trail appear on the care program enrollee’s record page when they’re ready for signing.
-    Verify Documents: A non-disclosure agreement record is the parent reference record for a signature
trail.


## Set Up Electronic Signatures

Set up the Digital Verifications feature to manage electronic signatures in Salesforce rather than in a
3rd-party application.

<!-- page:1250 -->




## Create a Signature Trail

Create a signature trail that sets the number of required signatures and determines if designated
verifiers must sign the records in a specific order. After you create the trail, configure the signature
details.
Define a Signature
After you create a signature trail, define signature details such as the order of designated verifiers and
whether designated verifiers belong to a user group or have a specific participant role. You also set the
text for the pre- and post-signing reasons.
Add the Pending Signature Component to a Page
Help users track when records are ready for their signature by adding the Digital Verification List
component to the Home page or a record page such as the Care Program Enrollee record page. Users
can view a list of digital verifications that either require signatures or are rejected but still open.
Use Electronic Signatures
With Digital Verification, you can sign electronic records to verify key record updates such as Chain of
Custody events in Advanced Therapy Management. You use your CRM credentials to sign the records
on the same device as the other signers or different devices.


Set Up Electronic Signatures

Set up the Digital Verifications feature to manage electronic signatures in Salesforce rather than in a 3rd-
party application.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To set up and manage electronic signatures:
Health Cloud Advanced Therapy Orchestration
permission set

OR

Chain of Custody User permission set

To create, edit, and activate a decision table:         System Administrator profile

To open, edit, or create a flow in Flow Builder:        Manage Flow

To read, create, update, or delete connected apps:
Customize Application

<!-- page:1251 -->




USER PERMISSIONS NEEDED


AND

Modify All Data OR Manage Connected Apps

To edit the settings:
Customize Application

AND

Manage Auth. Providers

To create, edit, or delete named credentials:
Manage Named Credentials

OR

Customize Applications


1. Add users to a user group or assign them a participant role. Any user in the group or with this role can
sign a record that’s ready for signing if the group or role is a designated verifier.
See Set Up User Groups for Care Teams or Set Up Participant Roles for Therapy Orchestration.
2. Create a signature trail.
See Create a Signature Trail.
3. Define signature details such as the designated verifiers.
See Define a Signature.
4. To validate the signers’ CRM user credentials, such as username, password, and client Id, create a
connected app, an authentication provider, and a named credential.

Important Connected apps creation is restricted as of Spring ‘26. You can continue to use
existing connected apps during and after Spring ‘26. However, we recommend using external
client apps instead. If you must continue creating connected apps, contact Salesforce Support.
See New connected apps can no longer be created in Spring ‘26 for more details.

a. Create a connected app to act as an OAuth client that performs the validation.
See Create a Connected App.
b. Create an authentication provider that stores authentication details such as the consumer key and
secret, and authorization endpoints.
See Configure a Predefined Authentication Provider.
c. Create a named credential that references the authentication provider.
See Create a Named Credential.

Note When creating a named credential for Advanced Therapy Management select New
Legacy.

d. In Setup, go to the Advanced Therapy Management Settings page, and then set the named
credential record ID for digital verification.
e. In Setup, go to the OAuth and OpenID Connect Settings page, and then enable Allow OAuth
Username-Password Flows.

<!-- page:1252 -->



5. Configure a decision table that stores digital verification setup information such as the required
number of electronic signatures and the verification process type.
See Decision Table.
6. Create digital verification records automatically with a new flow or by overriding a managed flow that
creates or updates the related reference records. You can also create a subflow to confirm that all
signatures on a trail are complete.
See Flow Builder.
7. Add the Digital Verification List component to the Home page or a record page such as the Care
Program Enrollee record page.
See Add the Pending Signature Component to a Page.


Create a Signature Trail

Create a signature trail that sets the number of required signatures and determines if designated verifiers
must sign the records in a specific order. After you create the trail, configure the signature details.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create signature trails:
Health Cloud Advanced Therapy Orchestration
permission set

OR

Chain of Custody User permission set


1. From the App Launcher, find and select Digital Verification Setups, and then click New.
2. Enter a name for the signature trail.
3. For the Reference Object API Name, select the object to which this trail applies.
4. For the Verification Process Type, select Sequential if the designated verifiers must sign in a specific
order or Parallel if the designated verifiers don't need to sign in a specific order.
5. For the Verification Type, select the number of required signatures.
6. For Record Action Type, select Create to create the signature trail when the reference record is created
or select Edit to create the signature trail when the reference record is updated.
7. Save your changes.


Define a Signature

After you create a signature trail, define signature details such as the order of designated verifiers and

<!-- page:1253 -->



whether designated verifiers belong to a user group or have a specific participant role. You also set the
text for the pre- and post-signing reasons.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


USER PERMISSIONS NEEDED

To create digital verification setup records:
Health Cloud Advanced Therapy Orchestration
permission set

OR

Chain of Custody User permission set


1. From the App Launcher, find and select Digital Verification Setup Details, and then click New.
2. In Digital Verification Setup, select the signature trail to which this signature belongs.
3. In Designated Verifier, select Group or Participant Role. Then select a user group or participant role.
Any user in the group or with this role can sign the record when it’s ready for signing. Leave blank to
assign a specific user at runtime.
4. In Pre-Verification, enter the message that verifiers see before they sign.
5. In Post-Verification, enter the message that verifiers see after they sign.
6. In Verifier Rank, select the order of this verifier in the signature trail.
For example, select First Verifier if this verifier must sign first. Verifier Rank is required for both the
sequential and parallel verification processes.
7. Save your changes.


Add the Pending Signature Component to a Page

Help users track when records are ready for their signature by adding the Digital Verification List
component to the Home page or a record page such as the Care Program Enrollee record page. Users
can view a list of digital verifications that either require signatures or are rejected but still open.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:1254 -->




USER PERMISSIONS NEEDED

To update a page in Lightning App Builder:               Customize Application


When you add the component to the Home page, users see every signature trail that requires their
signatures. On a record page, users see only the signature trails related to the record.

1. In Setup, in the Quick Find box, enter Lightning App Builder, then select Lightning App Builder.
2. Select the page where you want to add the component, and then click Edit.
3. From the Standard list of components, drag the Digital Verification List component onto an editable
part of the page.
4. Save your changes.


Use Electronic Signatures

With Digital Verification, you can sign electronic records to verify key record updates such as Chain of
Custody events in Advanced Therapy Management. You use your CRM credentials to sign the records on
the same device as the other signers or different devices.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS


The Pending Signatures section of your Home page or a Care Program Enrollee detail page lists electronic
signature records that are ready for you to sign. These records are assigned to you as a verifier either
directly or through a user group or participant role. On your Home page, you see every signature trail that
requires your signature. On a record page, you see only the signature trails that are related to the record.

You can view electronic signature records on a signature trail that are pending for others or that are
rejected but still open. You can also assign a specific user as a designated verifier if one isn’t already
assigned.


## View and Sign Electronic Signature Records

The Pending Signatures section of a page lists electronic signature records that are ready for you to
sign.


View and Sign Electronic Signature Records

The Pending Signatures section of a page lists electronic signature records that are ready for you to sign.

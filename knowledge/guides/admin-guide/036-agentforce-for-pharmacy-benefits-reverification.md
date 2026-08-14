<!-- guide:admin-guide section:agentforce-for-pharmacy-benefits-reverification pages:1224-1236 -->
# Agentforce for Pharmacy Benefits Reverification





Agentforce for Pharmacy Benefits Reverification

Patient services programs reps can leverage the power of Agentforce to accelerate the benefits
reverification process by efficiently updating patients' personal, drug, pharmacy, and healthcare provider
details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses



## Agentforce Topic for Pharmacy Benefits Reverification

Patient services programs (PSP) reps can use Benefits Reverification agent topic to draft and send
emails to patients for verifying their personal and healthcare details. The email includes an assessment
URL for patients to provide their updated information. After the patient submits the details, reps can
summarize and review the response to compare existing and new information.
Pharmacy Benefits Reverification Flows
Use the prebuilt flows to automate the various tasks within Pharmacy Benefits Reverification.
Customize the flows to run patient support programs according to your requirements.
Set Up Agentforce for Pharmacy Benefits Reverification
Set up Agentforce for Pharmacy Benefits Reverification to get access to the powerful generative AI
features.
Clone the Flow to Update Care Benefit Verify Request Status
Streamline the process of updating the care benefit verify request status by using a clone of the
default Update Verification Request Status to Received Confirmation flow.
Considerations and Limitations for Agentforce for Pharmacy Benefits Reverification
To use Agentforce for Pharmacy Benefits Reverification, consider supported functionality, usage,
limitations and allowances, limits, and other issues.
Use Agentforce for Pharmacy Benefits Reverification
Accelerate pharmacy benefits reverification by automating the process of updating patient data.
Update patient details with a single click. Ensure data accuracy and reduce manual effort by using
Agentforce to draft and send emails that include a secure assessment link for patients to verify and
provide their updated personal, drug, pharmacy, healthcare provider, and insurance details.


## See Also

Salesforce Help: Agentforce and Einstein Generative AI

<!-- page:1225 -->




Agentforce Topic for Pharmacy Benefits Reverification

Patient services programs (PSP) reps can use Benefits Reverification agent topic to draft and send emails
to patients for verifying their personal and healthcare details. The email includes an assessment URL for
patients to provide their updated information. After the patient submits the details, reps can summarize
and review the response to compare existing and new information.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses

Note The user interface of this product is available in English only and may not be fully supported in
other languages.


The Benefits Reverification agent topic provides these standard out of the box agent actions.


Agent Action Name          Description                 Example utterances           Example use case

Draft or Revise Email      Drafts an email to verify                                When a Patient Services
patient's personal, drug,   • Create a draft email       Program (PSP) rep
pharmacy, healthcare            for benefits             wants to automate the
provider, and insurance         reverification.          collection of patient
details associated with     •   Generate an email        information instead of
the current care benefit        confirming the           manually gathering the
verify request. Sends an        reverification of        information, they can
assessment URL that a           benefits.                use this agent action to
patient can use to                                       draft an email with an
provide the updated                                      assessment URL.
details.

Summarize Patient          Analyzes the patient's                                   To maintain the data
Response for Benefits      response for benefit        • Provide a summary of accuracy, a PSP rep can
Reverification             reverification email and        the patient's            review the details
summarizes the                  response.                provided by the patient
changes to the benefits     •   Summarize what the       before updating it. The
verification request,           patient has shared for   PSP rep can use this
including personal,             benefits                 agent action to
drug, healthcare                reverification.          summarize the patient's
provider, pharmacy, and                                  response to the
insurance details.                                       assessment.

<!-- page:1226 -->



If there aren't any changes in patient's insurance details, an Update Details follow-up action becomes
available after the Summarize Patient Response for Benefits Reverification action. The Update Details
action enables PSP reps to automatically update the benefits verification request and its associated
records.


Important The Update Details button isn't shown when there's any change to the patient's
insurance details. To update the patient details, a PSP rep can manually create insurance and care
benefit verification request records.


## See Also

Salesforce Help: Agent Topics
Salesforce Help: Agentforce and Einstein Generative AI
Salesforce Help: Agent Actions


Pharmacy Benefits Reverification Flows

Use the prebuilt flows to automate the various tasks within Pharmacy Benefits Reverification. Customize
the flows to run patient support programs according to your requirements.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses


## Flows in Pharmacy Benefits Reverification

Flow                                                 Description

Update Verification Request Status to Received       Updates the status of the care benefit verify
Confirmation                                         request record to Received Confirmation, when
the patient completes the assessment for benefits
reverification.

Get Details for Benefits Reverification Email        Gets the details for the benefits reverification
email and sends it to the associated prompt
template as prompt instructions.

Summarize Patient Response                           Summarizes the patient’s existing and updated
personal, drug, healthcare provider, pharmacy,
and insurance details.


## Update Patient’s Personal and Healthcare Details

Updates the benefits verification request and
associated records with the patient's latest

<!-- page:1227 -->




Flow                                                 Description


personal and healthcare details.

Upsert Context Service Data                          Updates or inserts context service data.


## See Also

Salesforce Help: Automate Tasks with Flows


Set Up Agentforce for Pharmacy Benefits Reverification

Set up Agentforce for Pharmacy Benefits Reverification to get access to the powerful generative AI
features.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses

Note The user interface of this product is available in English only and may not be fully supported in
other languages.


USER PERMISSIONS NEEDED

To use Agentforce:
Access Patient Support Programs using Einstein


## To manage pharmacy benefits reverification

requests:                                             Manage Pharmacy Benefits Verification

AND

Access Patient Support Programs as a Program
Lead


Before you set up Agentforce for Benefits Reverification, you must set up the Pharmacy Benefits
Verification feature. See Org Setup for Pharmacy Benefits Verification and Data Management for
Pharmacy Benefits Verification.

1. Enable Context Service.
2. Enable Einstein.

See Set Up Einstein Generative AI.

<!-- page:1228 -->



3. Enable Einstein for Patient Support Program.
4. Enable Agentforce Agents, and add an action and topic.
a. From Setup, in the Quick Find box, enter Agent, and then select Agentforce Agents.
b. Turn on Agentforce Agents.
c. Turn on Enable the Agentforce (Default) Agent.
d. Click New Agent.
e. In Agentforce Builder, in the Select an agent section, select Create from a Template, and then
select Agentforce Employee Agent.
f. Click Next, and then click Next.
g. Enter Benefits Reverification Agent as the name.
h. Enter a description, role, and company name.
i. Click Next, and then click Create.
j. In the Benefits Reverification Agent section, to add a topic, click New, and select Add from asset
library.
k. Select Benefits Reverification, and click Finish.
l. Click Activate.
5. Create a custom permission set to provide access to the Benefits Reverification Agent.
a. In Setup, find and select Permission Sets.
b. Click New.
c. Enter Access Benefits Reverification Agentforce Agent as the label.
d. Save your changes.
e. Under Apps, click Agent Access, and then click Edit.
f. From the Available Agents section, add Benefits Reverification Agent to the Enabled Agents
section.
g. Save your changes.
h. Click Permission Set Overview, and then click Manage Assignments.
i. Click Add Assignments, and select the Patient Services Programs user.
j. Save your changes.
6. Enable Discovery Framework, deploy Sample Template, and activate Omniscript.
a. From Setup, in the Quick Find box, enter Discovery Framework, and then select General
Settings.
b. Turn on Discovery Framework, Enhanced Questions, Import or Export and Sample Templates.
c. In Setup, find and select Discovery Framework Sample Templates.
d. Deploy Benefits Reverification Assessment with Available new Version as v2.
e. From the App Launcher, find and select Omniscripts.
f. From the Omniscript list view, select Reverify Patient’s Personal and Healthcare Details.
g. Click Activate, and then save your changes.
7. Enable External User Assessments.
a. From Setup, in the Quick Find box, enter Assessment, and then select Assessment Settings.
b. Turn on External User Assessments.
8. Create an Experience Cloud site for patients to log in as guest users and take the assessment.
9. Create and assign Guest User permissions for Discovery Framework Access.
10. Create sharing rules for the Omni Process object.

See Create Sharing Rules for Digital Experience Guest Users.

<!-- page:1229 -->



11. Set up the Experience Cloud URL for Patient Support Programs.
a. From Setup, in the Quick Find box, enter Life Sciences (for AFLS), or Health
Cloud (for Health Cloud). Then select Patient Support Program Settings.
b. Under the Experience Cloud Site section, click Edit, and enter the URL of the Experience Cloud site
that you set up earlier.
c. Save your changes.
12. Create and add the Draft Benefits Reverification Email Agent quick action.
13. Create and add the Summarize Patient Response Agent quick action.


## Create and Add the Drafts Benefits Reverification Email Agent Quick Action

Create an agent quick action to draft and send emails to patients for benefits reverification, and add
the action on the care benefit verify request record page.
Create and Add the Summarize Patient Response Agent Quick Action
Create an agent quick action to summarize patient response for benefits reverification, and add the
agent on the care benefit verify request record page.


## See Also

Salesforce Help: Permission Sets for Pharmacy Benefits Verification Users
Salesforce Help: Manage Permission Set Assignments
Salesforce Help: Discovery Framework Assessment Questions
Salesforce Help: Quick Actions
Salesforce Help: Lightning App Builder
Salesforce Help: Page Layouts
Salesforce Help: Create Object-Specific Quick Actions


Create and Add the Drafts Benefits Reverification Email Agent Quick Action

Create an agent quick action to draft and send emails to patients for benefits reverification, and add the
action on the care benefit verify request record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses


USER PERMISSIONS NEEDED

To use Agentforce:
Access Patient Support Programs using Einstein


## To manage pharmacy benefits reverification

requests:                                            Manage Pharmacy Benefits Verification

<!-- page:1230 -->




USER PERMISSIONS NEEDED


AND

Access Patient Support Programs as a Program
Lead


1. Create an agent quick action on the Care Benefit Verify Request object.
a. From Setup, in Object Manager, find and select Care Benefit Verify Request.
b. Click Button, Links, and Actions, and then click New Action.
c. Select Agent Quick Action as the action type.
d. Enter Draft Benefits Reverification Email as the user utterance.
e. Enter Draft Benefits Reverification Email as the label.
f. Save your changes.
2. Add the Draft Benefits Reverification Email agent quick action to the care benefit verify request record
page.
a. From the App Launcher, find and select Care Benefit Verify Requests.
b. Select a care benefit verify request record.
c. From Setup, click Edit Page.
d. On the Lighting App Builder page, select the Highlights Panel component, and then click Add
Action from the properties panel.
When you load the care benefit verify request record page layout for the first time, you must
upgrade to dynamic actions by clicking Upgrade Now.
e. In the Actions search field, find and select the Draft Benefits Reverification Email object-specific
quick action, and then click Add Filter.
f. Make sure that the Record Field filter type is selected.
g. Select Status as the field, Equal as the operator, and Pending as the value, and then click Done.
h. Click Add Filter.
i. Select the Advanced filter type.
j. In Field, click Select.
k. On the Select Field window, from the dropdown, select Record, then select Related Care Benefit
Verify Request, then select Care Benefit Verify Request Name, and then click Done.
l. Select Not Equal as the operator and keep value as blank, and then click Done.
m. For Show components when, select All filters are true, and then click Done.
n. Save your changes, and activate the page.


Create and Add the Summarize Patient Response Agent Quick Action

Create an agent quick action to summarize patient response for benefits reverification, and add the
agent on the care benefit verify request record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:1231 -->




Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses


USER PERMISSIONS NEEDED

To use Agentforce:
Access Patient Support Programs using Einstein


## To manage pharmacy benefits reverification

requests:                                           Manage Pharmacy Benefits Verification

AND

Access Patient Support Programs as a Program
Lead


1. Create an agent quick action to the Care Benefit Verify Request object.
a. From Setup, in Object Manager, find and select Care Benefit Verify Request.
b. Click Button, Links, and Actions, and then click New Action.
c. Select Agent Quick Action as the action type.
d. Enter Summarize Patient Response as the user utterance.
e. Enter Summarize Patient Response as the label.
f. Save your changes.
2. Add the Summarize Patient Response agent quick action on the Care Benefit Verify Request record
page.
a. From the App Launcher, find and select Care Benefit Verify Requests.
b. Select a care benefit verify request record.
c. From Setup, click Edit Page.
d. On the Lighting App Builder page, select the Highlights Panel component, and then click Add
Action from the properties panel.
e. In the Actions search field, find and select Summarize Patient Response object-specific quick
action, and then click Add Filter.
f. Make sure that the Record Field filter type is selected.
g. Select Status as the field, Equal as the operator, and Received Confirmation as the value, and then
click Done.
h. Click Add Filter.
i. Select the Advanced filter type.
j. In Field, click Select.
k. On the Select Field window, from the dropdown, select Record, then select Related Care Benefit
Verify Request, then select Care Benefit Verify Request Name, and then click Done.
l. Select Not Equal as the operator and keep value as blank, and then click Done.
m. For Show components when, select All filters are true, and then click Done.
n. Save your changes, and activate the page.

<!-- page:1232 -->




Clone the Flow to Update Care Benefit Verify Request Status

Streamline the process of updating the care benefit verify request status by using a clone of the default
Update Verification Request Status to Received Confirmation flow.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses


USER PERMISSIONS NEEDED

To clone and activate flows:
Manage Flows

AND

Access Patient Support Programs using Einstein

AND

Context Service User

AND

Manage Pharmacy Benefits Verification

AND

Prompt Template User

AND

Health Cloud Starter (For AFLS)
permission set OR Health Cloud Foundation (For
Health Cloud) permission set


1. From Setup, in the Quick Find box, enter Flows, and select Flows.
2.    Select Update Verification Request Status to Received Confirmation flow.
3.    Click Save as New Flow.
4.    Enter a label, API name, and description for the clone.
5.    Save your changes, and activate the flow.

<!-- page:1233 -->





## Considerations and Limitations for Agentforce for Pharmacy

Benefits Reverification

To use Agentforce for Pharmacy Benefits Reverification, consider supported functionality, usage,
limitations and allowances, limits, and other issues.


**REQUIRED EDITIONS**




Available in: Enterprise, and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Genie Data platform, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT
Prompt Builder add-on licenses


Feature Language and Locale Support

Agentforce for Life Sciences supports English in this locale.


LOCALE                                                CODE

English (United States)                               en_US


Feature Large Language Model Support

Agentforce for Pharmacy Benefits Reverification supports the models supported on the Salesforce
generative AI platform, as described in Large Language Model Support.


Einstein Trust Layer Service Support

Agentforce for Pharmacy Benefits Reverification supports the Trust Layer services provided on the
Salesforce generative AI platform, as described in Einstein Trust Layer. Ask your system administrator
about which Einstein Trust Layer services are enabled in your org and available for Agentforce for
Pharmacy Benefits Reverification.

For Life Sciences features that use AI agents, see Trust and Agentforce.


Billing Considerations for Agentforce for Pharmacy Benefits Reverification

Use of the Draft or Revise Email and Summarize Patient Response for Benefits Reverification actions
impacts credit consumption. These actions rely on Einstein Requests, and invoke generative AI through
Agentforce to draft emails and to summarize patient responses.

<!-- page:1234 -->




Tip This feature has access to Digital Wallet, a free account management tool that offers near real-
time consumption data for enabled products across your active contracts. Access Digital Wallet and
start tracking your org's usage. To learn more, see About Digital Wallet.


DIGITAL           USAGE TYPE       DESCRIPTION                          NOTES
WALLET CARD

Einstein          Standard         Usage is calculated based on the     This usage type isn’t billed when
Requests          Einstein         number of calls to the LLM           it's associated with a generative
Request          gateway if the gateway uses a        AI action that qualifies as
Salesforce LLM.                      unmetered human context
usage. For more information, see
Generative AI Usage and Billing.


## Flex Credits      Standard                                              NA

Action           Usage is determined by the
number of standard agent
actions. Each standard agent
action includes the processing of
up to 10,000 tokens. Tokens are
units of data processed by AI
models. Actions exceeding this
limit are counted as a separate
standard action each time the
10,000 token limit is exceeded.
For example, processing 20,001
tokens is 3 standard actions.
Actions involving lengthy
prompts sent to the LLM can be
counted as multiple actions
where the 10,000 tokens per
action limit is exceeded.


## Standard agent actions are

actions that are available out-of-
the-box. To check the list of
Standard actions, see Standard
Action Reference.



## Note Use of some standard

agent actions require that a
subscription has been
purchased for each user
that accesses these actions,
such as a subscription to

<!-- page:1235 -->




DIGITAL           USAGE TYPE        DESCRIPTION                        NOTES
WALLET CARD


## Einstein for Sales Add-on or

Einstein for Service Add-on.
To determine which
subscription is required for
such standard actions, see
Standard Action Reference
at Standard Action
Reference. While this
requirement is not
technically enforced yet,
users who don’t have the
required add-on license will
lose access to such actions
for which they don’t have a
license when the
requirement is enforced.


For more information on how usage is billed, refer to your contract or contact your account executive.


## See Also

Salesforce Help: Data Cloud Billable Usage Types
Salesforce Help: Agentforce and Generative AI Usage and Billing
Salesforce Help: About Digital Wallet


Use Agentforce for Pharmacy Benefits Reverification

Accelerate pharmacy benefits reverification by automating the process of updating patient data. Update
patient details with a single click. Ensure data accuracy and reduce manual effort by using Agentforce to
draft and send emails that include a secure assessment link for patients to verify and provide their
updated personal, drug, pharmacy, healthcare provider, and insurance details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS licenses and
Agentforce for AFLS or Agentforce for Health Cloud, Flex Credits Metering, Agentforce
Employee Agent, Einstein GPT Platform, Einstein GPT Copilot, and Einstein GPT Prompt Builder add-on
licenses

Note The user interface of this product is available in English only and may not be fully supported in
other languages.

<!-- page:1236 -->




USER PERMISSIONS NEEDED

To use Agentforce:
Access Patient Support Programs using Einstein


## To manage pharmacy benefits reverification

requests:                                              Manage Pharmacy Benefits Verification

AND

Access Patient Support Programs as a Case Agent


Before you begin, Set Up Agentforce for Pharmacy Benefits Reverification. Make sure that the program
lead has assigned the pending care benefit verification requests to you. See Use Pharmacy Benefits
Reverification.

1. Select a care benefit verify request record from the assigned list.

Note To initiate the data updates for pharmacy benefits reverification, each care benefit
verification request record must have a Pending status and the related care benefit verification
request field must be populated.

2. To draft the benefits reverification email, click the Draft Benefits Reverification Email agent quick
action or pass any recommended utterance on the Agentforce window.

You can also click the Draft Benefits Reverification Email recommended action on the Agentforce
window.

3. To copy the email content, click Copy Draft. To paste the email draft on the email window, select Send
Email from the dropdown next to Copy Draft.
4. Verify the recipients details on the email window, and click Send to send the email to the patient.
5. Update the care benefit verify request status to Pending Confirmation.
6. To summarize the response from the patient, click Summarize Patient Response, or pass any
recommended utterance.
After the patient responds to the assessment, the care benefit verify request status is automatically
updated to Received Confirmation.
7. Verify the patient's responses. You can update the details with just a click of Update Details button.
After the patient details are updated, the care benefit verify request status is automatically updated to
Ready for Verification.

Note When you update patient details, ensure that you don't pass any update details related
utterances.

Important The Update Details button isn't shown when there's any change to the patient's
insurance details. To update the patient details, a PSP rep can manually create insurance and care
benefit verification request records.


Initiate a manual or electronic verification request for benefits verification.

See Also

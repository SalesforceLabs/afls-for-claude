<!-- guide:admin-guide section:set-up-pharmacy-benefits-verification pages:1083-1151 -->
# Set Up Pharmacy Benefits Verification




Metric                                               description

Leading Programs by Patients                         Tracks programs with the highest patient
enrollment to identify successful initiatives. Use
this metric to understand which programs are
most effective at attracting and retaining patients.

Patients by Benefit Verification Status              Shows the distribution of patients based on their
benefit verification status. Use this data to identify
bottlenecks in the verification process and
enhance patient support.

Payer Efficiency Analysis                            Monitors the effectiveness and promptness of
different insurers in processing benefits and
reimbursements. Improve financial operations by
optimizing interactions with key payers.

Lead Payer by Number of Patients                     Identifies the top insurance companies or payers
by the volume of patients they cover within your
programs. Assess this metric to understand key
financial partnerships and resource allocation.

Amount Coverage Analysis                             Determines the financial reimbursements and
coverage provided by different payers for support
rendered. Prioritize resources by analyzing this
data to ensure adequate funding for programs.

Program Details                                      Shows comprehensive information about
individual programs to understand their specific
objectives, patient demographics, and
performance metrics. Use these details for in-
depth program analysis and strategic decision-
making.




Set Up Pharmacy Benefits Verification

Gain quick access to patient care and verify benefit coverage details. Patient services representatives can
use a streamlined process to assist patients in getting an accurate summary of their pharmacy benefits.
Representatives can use a guided flow to initiate a verification request to payers and receive a response
for pharmacy coverage details, including coverage status, co-pay, co-insurance, and deductibles.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1084 -->



Pharmacy benefits verification plays a crucial role in patient services programs. Verifying patients'
benefits is key to improving patient drug access and adherence, and enhances patient outcomes,
especially for chronic illnesses. Drug manufacturers, providers, and pharmacies can use the process to
promptly prescribe and administer the right medication to patients.

The process of checking real-time pharmacy benefits involves:


Pharmacy Benefits Verification Request

Representatives can use a guided flow to seamlessly verify pharmacy coverage benefits by initiating a
verification request for clearing houses or payors. Pharmacy Benefits Verification supports two types of
verification requests.

- Electronic Verification Request
- Manual Verification Request
The verification request includes information about the patient, practitioner, drug, and pharmacy. Each
request is created for a single member plan, and representatives can generate multiple requests for
different drugs under any member plan available for a patient. If the member plan isn’t created for the
patient, representatives can easily create member plans directly from a care program enrollee record
page.


Pharmacy Benefits Verification Response

For a manual verification request, representatives can manually connect with payors or clearing houses
to get detailed coverage information, including coverage status, co-pay, co-insurance, and deductibles.
However, for electronic verification requests, Salesforce integrates with the third-party clearing houses or
payors through MuleSoft. The clearing houses then further connect with the payors and get the patients'
benefit details. This immediate access to accurate benefit summaries helps representatives generate and
share benefit packages with patients.


Generate Call Script and Benefit Summary with Einstein Generative AI

To accelerate the verification of pharmacy benefits, representatives can generate an AI-powered call
script. This call script includes all the missing coverage fields and plays a key role in getting missing
information from payors. Additionally, representatives can also generate a concise summary of the
patients’ pharmacy benefits.


## Pharmacy Benefits Verification Data Model

Pharmacy Benefits Verification uses a data model that’s FHIR-CARIN and NCPDP aligned to store the
data and make the data model interoperable.
Org Setup for Pharmacy Benefits Verification
Before you use Pharmacy Benefits Verification, you must prepare your org by completing tasks such as
assigning permission sets to your users, configuring setup entities, enabling history tracking, and
adding picklist values to certain objects.

<!-- page:1085 -->




## Benefits Verification Requests

Understand the two types of pharmacy benefits verification requests that your representative can
create to verify patients' benefits details.
Data Management for Pharmacy Benefits Verification
To help your users get the most out of the Pharmacy Benefits Verification, configure your org with the
necessary data. For patients, admins must set up the data that’s automatically populated in the guided
flow. For pharmacies, purchaser plans, member plans, products, care program, and related objects,
admins must set up the data that’s further used in creating the verification request.
Add Pharmacy Benefits Verification to the Care Program Enrollee Record Page
Enable case managers to verify the pharmacy benefits coverage details by adding the
PharmacyBenefitsVerification Flexcard to the Care Program Enrollee record page.
Pharmacy Benefits Reverification
Use Pharmacy Benefits Reverification to periodically check a patient's eligibility for pharmacy benefits
under their health insurance. Reverification ensures that patients continue to get the right coverage for
their prescription medications without any breaks.
Set Up Pharmacy Benefits Verification Flows
Enable your patient service representatives to initiate an electronic verification request on behalf of a
care program enrollee. Learn how the salesforce flow updates an electronic verification request status
to time out. Understand the prerequisites before making any customizations to this flow.
Einstein Generative AI for Pharmacy Benefits Verification
Harness the power of Einstein generative AI to streamline patient services rep's daily tasks. Pharmacy
Benefits Verification uses Einstein generative AI-based flows to generate a call script and a benefits
summary.
Use Pharmacy Benefits Verification
Pharmacy Benefits Verification improves patient access and adherence to care by helping
representatives to start the patient’s medication early. Help caregivers and patients reduce the time
and effort required to determine the covered pharmacy benefits. Patient services representatives can
assist patients by getting a clear picture of their pharmacy benefits coverage such as co-pay, co-
insurance, and other coverage details. They can also generate a concise summary of patient’s
pharmacy benefit details using Einstein’s Generative AI auto-launched flows.


Pharmacy Benefits Verification Data Model

Pharmacy Benefits Verification uses a data model that’s FHIR-CARIN and NCPDP aligned to store the
data and make the data model interoperable.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Here’s the set of objects pharmacy benefits verification requests and responses use, and the level of

<!-- page:1086 -->



access that your users need for those objects.


Note The table covers base objects first, followed by objects specific to this feature.


Object                              Purpose                              Access


## Account                             Business Accounts represent

organizations involved with your    • Create
business and Person Accounts        • Read
represent patients.                 • Edit


## Contact                             Represents a contact, which is a

person associated with an           • Create
account.                            • Read
- Edit


## Contact Point Address               Represents a contact’s billing or

shipping address, which is          • Create
associated with an individual or    • Read
person account.                     • Edit


## Contact Point Phone                 Represents a contact’s phone

number, which is associated with • Create
an individual or person account. • Read
- Edit


## Member Plan                         Represents the details of the

insurance coverage for a            • Create
member or subscriber.               • Read
- Edit
- Delete


## Purchaser Plan                      Represents the payer plan that a

purchaser makes available to its    • Create
members and members’                • Read
dependents.                         • Edit


## Medication                          Represents detailed information

of different medications.           • Create
- Read
- Edit


## Medication Request                  Represents a request or order for

the supply of a medication.         • Create

<!-- page:1087 -->




Object                          Purpose                               Access


- Read
- Edit


## Healthcare Provider             Represents business-level details

of the healthcare organization or    • Create
the prescriber.                      • Read
- Edit


## Healthcare Provider NPI         Represents identifiers from the

National Provider Identifier that    • Create
are assigned to every facility and   • Read
licensed practitioner in the         • Edit
United States.                       • Delete


## Identifier                      Represents the identifier

information for a healthcare         • Create
provider.                            • Read
- Edit


## Code Set                        Represents various life sciences

defined codes in the context of      • Create
their systems and versions of        • Read
those systems. These codes are       • Edit
used in all sorts of digital         • Delete
records.


## Unit of Measure                 Represents the units of measure

for products and care program        • Create
products.                            • Read
- Edit

Care Program                    Represents a set of activities,
such as a patient therapy,         • Create
financial assistance, education,   • Read
wellness, or fitness plan, offered • Edit
to participants by an employer or
insurer.


## Care Program Enrollee           Represents a patient enrolled in

a care program.                      • Create
- Read
- Edit

<!-- page:1088 -->




Object                              Purpose                              Access


## Care Program Product                Represents the affiliation

between a care program and a        • Create
care program product, care          • Read
program provider, or both.          • Edit


## Product                             Represents a drug or a

medication that’s prescribed to a   • Create
care program enrollee.              • Read
- Edit


## Care Benefit Verify Request         Represents a request for the

verification of pharmacy            • Create
benefits.                           • Read
- Edit
- Delete


## Coverage Benefit                    Represents the pharmacy

benefits provided to a patient      • Create
covered by a purchaser’s plan.      • Read
- Edit


## Coverage Benefit Item               Represents a specific service

covered by the insurance plan.      • Create
- Read
- Edit


## Coverage Benefit Item Limit         Represents the details associated

with a specific benefit as it     • Create
relates to expenditures, limits,  • Read
coverage levels, eligibility, and • Edit
exclusion.



Org Setup for Pharmacy Benefits Verification

Before you use Pharmacy Benefits Verification, you must prepare your org by completing tasks such as
assigning permission sets to your users, configuring setup entities, enabling history tracking, and adding
picklist values to certain objects.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:1089 -->




Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses



## Permission Sets for Pharmacy Benefits Verification Users

To get started with Pharmacy Benefits Verification, assign the appropriate permission sets to your
users.
Field-Level Security Configuration for Pharmacy Benefits Verification
To verify pharmacy benefits, users need access to certain fields that aren’t available to them by default.
Configure Care Limit Type
To use Pharmacy Benefits Verification, you must define care limit types such as co-pay, co-insurance,
and many more to determine the pharmacy benefits that are available to a patient.
Configure Units of Measure
Configure the units of measure for the medications that a healthcare practitioner prescribes to a
patient.
Configure a Code Set
In pharmacy benefits verification, code sets define the metrics that explain the patients’ pharmacy
benefits coverage status code. For example, covered, not covered, or covered with restrictions.
Activate Picklist Value for Coverage Benefit
Activate the Pharmacy picklist value for all the pharmacy benefits verification requests.
Enable History Tracking for Coverage Benefit Line Item
To track the historical changes in pharmacy benefit item limits, enable history tracking for the Applied
Limit field in the Coverage Benefit Line Item object.


Permission Sets for Pharmacy Benefits Verification Users

To get started with Pharmacy Benefits Verification, assign the appropriate permission sets to your users.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


Permissions

Permission Set                                       Purpose

Access Patient Support Programs as a Case Agent      Give patient services representatives access to
patient support programs console app.

Access Patient Support Program as Program Lead       Give program leads access to patient support
programs.

<!-- page:1090 -->




Permission Set                                        Purpose

Access Patient Support Programs Using Einstein        Expose patient support programs console app
powered by Einstein generative AI.

Context Service Admin                                 Enables the user to perform CRUD operations on
context entities/objects.

Context Service Runtime                               Enables the user to perform read operation on
context entities/objects.

Data Pipelines Base User                              Provides foundational permissions to use
Salesforce Data Pipelines, including accessing
Data Manager and managing data processing
engine definitions.

Health Cloud Foundation                               Assigns read access to additional Health Cloud
platform capabilities.

Health Cloud Starter                                  Provides access to Health Cloud Starter features.

Manage Pharmacy Benefits Verification                 Give users access to the Pharmacy Benefits
Verification program and its features.

Prompt Template Manager                               Manage prompt templates using Prompt Builder
and run them using generative AI features.

Prompt Template User                                  Run prompt templates using generative AI
features.


## See Also

Assign Permission Sets


Field-Level Security Configuration for Pharmacy Benefits Verification

To verify pharmacy benefits, users need access to certain fields that aren’t available to them by default.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


You must manually grant your users access to these fields.


Object                                                Field

Care Benefit Verify Request                           Authorized Prescription

Coverage Benefit

<!-- page:1091 -->




Object                                                    Field

Original Prescription

Prescriber

Provider

Request Date

Status

Status Reason

Coverage Benefit                                          Care Benefit Verify Request

Final Coverage Status Code

Medication Request                                        Fill Duration Unit

Fill Quantity Unit

Initial Fill Duration

Initial Fill Quantity


## See Also

Set Field-Level Security for a Field on All Profiles


Configure Care Limit Type

To use Pharmacy Benefits Verification, you must define care limit types such as co-pay, co-insurance, and
many more to determine the pharmacy benefits that are available to a patient.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a care limit type:                               Customize Application


The pharmacy benefits that we see in the verification response have to be set up as new care limit types


Name                                 Limit Type                                Description

CoPay                                copay                                     Amount to be collected from the
policyholder to satisfy a per
prescription copay.

<!-- page:1092 -->




Name                            Limit Type              Description

CoInsurance                     coinsurance             Amount to be collected from a
policyholder to satisfy a per
prescription coinsurance.

Deductibles                     deductibles             Amount to be collected from the
policyholder before the
insurance starts covering costs
for covered services.


## DeductiblesApplied              deductiblesapplied      Amount of out-of-pocket

expenses to be counted towards
satisfying the annual deductible,
which contributes to reaching
the threshold for insurance
coverage to begin.

DeductiblesMet                  deductiblesmet          Represents the full deductible
amount that the policyholder
has paid, after which the
insurance begins to share in the
cost of covered services as per
the terms of the plan.

InfusionCoInsurance             infusioncoinsurance     Amount to be collected from the
policyholder to satisfy a per
infusion therapy coinsurance.

InfusionCoPay                   infusioncopay           Amount to be collected from the
policyholder to satisfy a per
infusion therapy copay.


## Ltm                             ltm                     Represents the maximum

amount an insurance policy will
pay for covered services over the
lifetime of the policyholder. After
this limit is reached, the
policyholder is responsible for all
additional costs.


## OopMax                          oopmax                  Represents the maximum

amount a policyholder is
required to pay out-of-pocket for
covered healthcare services in a
plan year. After this limit is
reached, the insurance company
covers 100% of the costs for

<!-- page:1093 -->




Name                                 Limit Type                          Description


## covered services for the

remainder of the plan year.

OopMaxMet                            oopmaxmet                           Represents the maximum
amount a policyholder has paid
from out-of-pocket for covered
healthcare services in a plan
year. After this stage all
additional costs for covered
services are now fully covered by
the insurance for the rest of the
plan year.

OutOfPocketApplied                   outofpocketapplied                  Represents the maximum
amount a policyholder is
required to pay out-of-pocket for
covered healthcare services in a
plan year. After this limit is
reached, the insurance company
covers 100% of the costs for
covered services for the
remainder of the plan year.

RemainingLtm                         remainingltm                        Represents the amount of
coverage still available under an
insurance policy for covered
services over the lifetime of the
policyholder, after deductibles
and previous claims have been
accounted for.

Total                                total                               Represents the amount of
coverage provided by the
insurance policy for all covered
services within a specified period
or for the policyholder’s lifetime.


1. From Setup, in the Quick Find box, enter Care Limit Type, and then under Benefits Verification,
select Care Limit Type.
2. Click New Care Limit Type.
3. Enter the label.
4. Enter CoPay as the name and copay as the limit type.
5. In Metric Type, select the unit by which the benefit limit is measured.

Note Select Money if the limit is on the amount that is billed. If the limit can’t be measured in

<!-- page:1094 -->




terms of money, time, or amount, select Text so that the user can type a description.

6. Repeat the steps for all the care limit types listed in the table.

Note In the limit type field, save all the care limit types exactly as is. These limit types are required
to initiate the verification request and to view the current benefits in the benefits summary
section. Based on the requirements of the organization, admins can additionally customize the
benefits summary section and use any limit types from the Health Information Knowledgebase.


Configure Units of Measure

Configure the units of measure for the medications that a healthcare practitioner prescribes to a patient.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a unit of measure type:                       Manage Pharmacy Benefits Verification permission
set


To create a unit of measure, you must first configure the picklist value for the Type field. Picklist values for
Type aren’t provided by default. Based on the requirements of the organization, admins must add picklist
values for the field in Object Manager.

1. Configure the picklist value for the Type field on the Unit of Measure object.
a. From the object management settings for Unit of Measure object, go to Fields and Relationship.
b. Select Type.
c. In the Picklist Values section, click New.
d. Add the required values for the picklist, and save your changes.
For instance, add a type value Weight for weight-related units of measure, add Amount for amount-
related units of measure, or add Volume for volume-related units of measure.
2. Create Unit of Measure records.
a. From the App Launcher, find and select Unit of Measure.
b. Click New.
c. Enter a name and mg as unit code for the unit of measure.
d. Select Weight as the type.
e. Save your changes.
f. Repeat these steps to add mL, and Each unit code values.
To successfully create an electronic verification request, you must include mg, mL, and Each as the
unit of measures.

<!-- page:1095 -->




Configure a Code Set

In pharmacy benefits verification, code sets define the metrics that explain the patients’ pharmacy
benefits coverage status code. For example, covered, not covered, or covered with restrictions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a code set a record:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set


To create code set records, you must first configure the picklist values for the Code Set Type field. Picklist
values for the Code Set Type field aren’t provided by default. Based on the requirements of the
organization, admins must add picklist values for the field in Object Manager.

1. Configure the picklist values for the Code Set Type field on the Code Set object.
a. From the object management settings for code set object, go to Fields and Relationships.
b. Select Code Set Type.
c. In the Picklist Values section, click New.
d. Enter Coverage Status Code.
e. Save your changes.
2. Create code set records.
a. From the App Launcher, find and select Code Sets.
b. Click New.
c. Enter a name and code.
For instance, add a code value Covered, Not Covered, or Covered with Restrictions for the
Coverage Status Code type code sets.
d. In Code Set Type, select Coverage Status Code.
e. Select Active, and save your changes.


Activate Picklist Value for Coverage Benefit

Activate the Pharmacy picklist value for all the pharmacy benefits verification requests.

<!-- page:1096 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To edit coverage benefit:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set


You must include picklist values for these Salesforce objects and their fields.

1. From the object management settings for coverage benefit object, go to Fields and Relationships.
2. Select Coverage Type.
3. In the Inactive Values section, for Pharmacy, click Activate.


## See Also

Salesforce Help: Add or Edit Picklist Values


Enable History Tracking for Coverage Benefit Line Item

To track the historical changes in pharmacy benefit item limits, enable history tracking for the Applied
Limit field in the Coverage Benefit Line Item object.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To enable history tracking:                           Customize Application


1. From Setup, in the Object Manager, enter Coverage Benefit Item Limit, and select it.
2. On the Fields and Relationships tab, select Set History Tracking.
3. Select Applied Limit, and save your changes.


## See Also

Field History Tracking

<!-- page:1097 -->




Benefits Verification Requests

Understand the two types of pharmacy benefits verification requests that your representative can create
to verify patients' benefits details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud



## Manual Verification Request

In pharmacy benefits verification, a patient services representative can initiate a manual verification
request by directly contacting payors to get the patient's coverage details. After they receive the
coverage information, the representative can manually enter the response into the benefits summary
section of the verification request.
Electronic Verification Request
Reduce the time it takes your representatives to connect with payors by using an electronic benefits
verification request. This request automates the verification process through electronic exchange of
coverage information with payors through clearing houses.


Manual Verification Request

In pharmacy benefits verification, a patient services representative can initiate a manual verification
request by directly contacting payors to get the patient's coverage details. After they receive the coverage
information, the representative can manually enter the response into the benefits summary section of
the verification request.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Electronic Verification Request

Reduce the time it takes your representatives to connect with payors by using an electronic benefits
verification request. This request automates the verification process through electronic exchange of
coverage information with payors through clearing houses.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:1098 -->




Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Use pharmacy benefits verification to integrate your Salesforce org with clearing houses or payors by
using integration with MuleSoft. The integration happens through Patient Services Benefits Application, a
MuleSoft outbound application. When your representative initiates an electronic verification request, an
FHIR (Fast Healthcare Interoperability Resources) compliant RTPBC (Real-Time Pharmacy Benefit Check)
Request is sent to a third-party clearing house through MuleSoft. Similarly, the clearing house sends the
FHIR compliant RTPBC Claim Response to Salesforce org through MuleSoft.


## Built-In MuleSoft Integration for Electronic Verification

Integrate Health and AFLS with third-party clearing houses by using FHIR-CARIN and
NCPDP aligned verification requests, industry-specific APIs, and integration application deployed on
MuleSoft. Use this integration to accelerate the end-to-end benefits verification process.
Set Up Electronic Verification Request
Set up electronic verification request for your reps to verify patient's benefits electronically by using
External Client app, MuleSoft integration, and Integration Defintions.
Electronic Verification Scenarios
Explore the different scenarios that occur when your representative raises an electronic verification
request. Also, understand the different scenarios of failure and their resolution.


Built-In MuleSoft Integration for Electronic Verification

Integrate Health and AFLS with third-party clearing houses by using FHIR-CARIN and
NCPDP aligned verification requests, industry-specific APIs, and integration application deployed on
MuleSoft. Use this integration to accelerate the end-to-end benefits verification process.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Set up and use in-built integration to create seamless user experiences. Life Sciences's comprehensive
solution gives you:

- Predefined Integration Procedures, Omnistudio Data Mappers, and Apex classes for sending
verification requests and retrieving coverage details from clearing houses.
-    Prebuilt integration application, built using the FHIR standards, that enable Health and Life Sciences
Cloud to interact with clearing houses and payor systems. These out-of-the-box integration
applications help your representatives by reducing the time and cost to go live.
-    Use the Patient Services Benefits application for Health and AFLS to integrate your
Salesforce org with the clearing houses. With this integration in place, your representatives can send
the verification requests electronically in an FHIR-CARIN and NCPDP API format where the verification
goes to the clearing house's FHIR endpoint through MuleSoft outbound application.

<!-- page:1099 -->



Set Up Electronic Verification Request

Set up electronic verification request for your reps to verify patient's benefits electronically by using
External Client app, MuleSoft integration, and Integration Defintions.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Grant Read Access to Integration Provider Definition Object

Pharmacy Benefits Verification uses Data Consumption Framework that enables your patient services
reps to access data from external systems without leaving Salesforce while verifying benefits
electronically. Grant read access on the Integration Provider Definitions object to your patient services
reps profile.

To grant read access to the Integration Provider Definitions object, see Edit Object Permissions in
Profiles.


Create an External Client App

Use an external client app to connect your Salesforce org with the external application.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To create an external client app:
Health Cloud Starter (for AFLS) OR
Health Cloud Foundation (for Health Cloud)
permission set

AND

Manage Pharmacy Benefits Verification permission
set


To connect your Salesforce org with external third-party clearing houses, create a local external client
app.


MuleSoft Direct Integration

To address end-to-end business needs, integrate Salesforce apps with external systems by using

<!-- page:1100 -->



Integration Solutions with MuleSoft Direct.

Get Started with MuleSoft Direct for AFLS.


Important The third-party clearing house that you're trying to integrate with must be FHIR-
compliant, and should expose FHIR endpoints for sending the RTPBC Request Bundle and receiving
RTPBC Claim Response.


Create an Integration Definition

Use Integration Definitions to quickly set up integrations with different external endpoints by using a low
code interface. Create integration definitions for Apex classes that are used to integrate third-party
systems. The Integration Procedures of the provider process call these integration definitions instead of
directly pointing to the Apex classes.


**REQUIRED EDITIONS**


USER PERMISSIONS NEEDED

To create an integration definition:
Health Cloud Starter (for AFLS) OR
Health Cloud Foundation (for Health Cloud)
permission set

AND

Manage Pharmacy Benefits Verification permission
set


Before you create an integration definition, make sure you copy the named credential that's auto created
after you deploy the Patient Services Benefits application during MuleSoft Direct integration. Find the
named credential in the {MuleSoft Application Name}_psp_benefits_verification_api_impl_Life Sciences
format.

1. From Setup, in the Quick Find box, enter Integration Definitions, and then select Integration
Definitions.
2. Click New.
3. For Type, select Apex Defined.
4. For Name, enter CHAPI.
5. For Developer Name, enter CHAPI.
6. For Apex class, select lifesciences_psp_pbv_flows.ClearingHouseIntegrationService .
7. For Attribute Value, enter the named credential that you copied from Setup.


## See Also

Create an Integration Definition
Data Consumption Framework

<!-- page:1101 -->



Electronic Verification Scenarios

Explore the different scenarios that occur when your representative raises an electronic verification
request. Also, understand the different scenarios of failure and their resolution.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


When your representative initiates an electronic verification request, an FHIR compliant RTBPC request is
sent to the clearing house through MuleSoft. The clearing house sends an acknowledgment as soon as it
receives the request. MuleSoft then updates the status of the care benefit verification request to
Acknowledged.

The clearing house then connects with various payors and gets the FHIR compliant RTPBC response. This
response includes the patient's coverage details such as coverage benefits, coverage benefit items, and
coverage benefit item limits. When the clearing house sends the response back to Salesforce through
MuleSoft, the status gets updated to Verified, and the relevant benefits summary gets updated with the
coverage details.


Different Scenarios for an Electronic Verification Request

Here are the different scenarios and statuses of care benefit verify request that an electronic verification
request may go through.


SCENARIO Status            STATUS        Resolution Can Retry       Can Retry       Can create    Can create
REASON                   Electronic      Manual          a new         a new
verificatio     verificatio     Electronic    manual
n?              n?              request?      request?

A            Error         Request       Check       Yes            Yes             No            No
verification               could not     network
request is                 be sent       connectio
created                                  n,
but can't                                connectivit
be sent to                               y with
the                                      MuleSoft,
clearing                                 or
house. This                              connectivit
can                                      y with
happen                                   clearing
due to                                   house.
multiple

<!-- page:1102 -->




SCENARIO Status            STATUS       Resolution Can Retry     Can Retry       Can create    Can create
REASON                  Electronic    Manual          a new         a new
verificatio   verificatio     Electronic    manual
n?            n?              request?      request?

reasons,
such as
MuleSoft
or clearing
house
being
unresponsi
ve, or a
network
issue.

MuleSoft    Error          Bad          Review       Yes         Yes             No            No
rejects the                credential   your
application                             MuleSoft
due to                                  login
invalid                                 credentials
credentials                             and ensure
.                                       the
username
and
password
are correct.

The         Error          Bad          Review       Yes         Yes             No            No
clearing                   credential   your
house                                   clearing
rejects the                             house
application                             login
due to                                  credentials
invalid                                 and ensure
credentials                             the
.                                       username
and
password
are correct.

MuleSoft      Error        Bad          Specify the Yes          Yes             No            No
can't send                 request      correct
the                        input        values for
request to                              the fields
the                                     highlighte

<!-- page:1103 -->




SCENARIO Status            STATUS      Resolution Can Retry     Can Retry       Can create    Can create
REASON                 Electronic    Manual          a new         a new
verificatio   verificatio     Electronic    manual
n?            n?              request?      request?


## clearing                               d in

house                                  response
because of                             from the
the invalid                            clearing
request.                               house.

MuleSoft      Error        Response    Review all     Yes       Yes             No            No
can't                      could not   the
process                    be          coverage
the                        processed   details,
response                               coverage
from                                   detail
clearing                               items,
house.                                 coverage
detail item
limit, and
care
benefit
verification
requests
records.

The         Rejected       Clearing    Contact        No        No              Yes           Yes
clearing                   house       the
house                      rejected    clearing
can't                      the         house to
process                    request     find out
the                                    the reason
request                                for the
and rejects                            rejection.
it.

The           Timed Out    Request     Try            No        No              Yes           Yes
clearing                   timed out   contacting
house                                  the
can't send                             clearing
the                                    house to
response                               check
within 3                               whether
hours of                               the
sending                                response

<!-- page:1104 -->




SCENARIO Status            STATUS      Resolution Can Retry       Can Retry     Can create    Can create
REASON                 Electronic      Manual        a new         a new
verificatio     verificatio   Electronic    manual
n?              n?            request?      request?


## the                                    didn't

request.                               come from
payors or
there were
connectivit
y issues.
You can
also
customize
the
request
time out in
your org.


## See Also

Get Started with MuleSoft Direct for AFLS


Data Management for Pharmacy Benefits Verification

To help your users get the most out of the Pharmacy Benefits Verification, configure your org with the
necessary data. For patients, admins must set up the data that’s automatically populated in the guided
flow. For pharmacies, purchaser plans, member plans, products, care program, and related objects,
admins must set up the data that’s further used in creating the verification request.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Add a Patient, Identifier, Contact Point Phone, Contact Point Email, and Contact Point Address
In pharmacy benefits verification, patients are represented as a person account. Create a person
account to represent the patient, its identifier, contact point phone, contact point email , and contact
point address. Identifiers are required for each patient to get their patient ID.
Add a Practitioner, Identifier, and Healthcare Provider NPI
In the Health and Life Sciences industry, practitioners play a critical role by providing essential
healthcare to patients. In a pharmacy benefits verification request, patient services representatives
provide the name and an ID of the practitioner who takes care of patients. Pharmacy Benefits
Verification uses a numeric ID to specify a practitioner. In the US, this ID is the National Provider
Identifier (NPI), but you can substitute the ID used in your country or region.

<!-- page:1105 -->



Add a Payor, Identifier, Contact Point Phone, Contact Point Email and Contact Point Address
In pharmacy benefits verification, payors are represented as a business account. Create a business
account to represent the payor, its identifier, contact point phone, contact point email, and contact
point address. Identifiers are required for each payor to get their payor ID.
Add a Pharmacy, and Identifier
Pharmacies provide patient access to essential medications and healthcare products. In the pharmacy
benefits verification request, agents provide the preferred pharmacy name that the pharmacy benefits
must be verified for. Pharmacy Benefits Verification uses a numeric ID to specify a pharmacy.
Add a Purchaser Plan
Create a payer plan that a purchaser makes available to its members and the dependents of the
members.
Add a Member Plan and Identifier
Create a member plan to represent the details of the insurance coverage for a member or a subscriber.
Add a Product, Code Set, and Code Set Bundle
Pharmacy Benefits Verification uses Product as a base object to represent the drug or medicine that’s
prescribed to the patient. Representataives verify the pharmacy benefits for each drug prescribed to
the patient.
Addition of Care Program and Related Records
Pharmacy Benefits Verification uses care program as the backbone of its operation. At its core,
pharmacy benefits verification uses care programs, care program enrollees, and care program
products.



## Add a Patient, Identifier, Contact Point Phone, Contact Point Email, and

Contact Point Address

In pharmacy benefits verification, patients are represented as a person account. Create a person account
to represent the patient, its identifier, contact point phone, contact point email , and contact point
address. Identifiers are required for each patient to get their patient ID.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create an account:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)

<!-- page:1106 -->




USER PERMISSIONS NEEDED


permission set

To create identifier records:                      Manage Pharmacy Benefits Verification permission
set

To create contact point address, contact point     Manage Pharmacy Benefits Verification permission
email, and contact point phone records:            set


Before you create a person account, make sure you add Gender and Birthdate fields on the Person
Account page layout. And before you create contact point phone, contact point email, and contact point
address, make sure you add them to the related list of Person Account page layout.

1. From the App Launcher, find and select Accounts.
2. Click New.
3. Select Person Account as the record type, and click Next.
4. Enter the first and last name.
5. Enter the birthdate.
6. Enter the gender.
7. Enter the phone.
8. Save your changes.
9. Create an Identifier.
a. In the Identifiers related list, click New.
b. In ID Value, enter the value specific to your country or region.
c. Enter the source system.
d. Save your changes.
10. Create a Contact Point Address.
a. In the Contact Point Addresses related list, click New.
b. Enter the name.
c. Enter the city.
d. Enter the state.
e. Enter the country.
f. Enter the postal code.
g. Save your changes.
11. Create a Contact Point Phone.
a. In the Contact Point Phone related list, click New.
b. Enter the phone type.
c. Enter the telephone number.
d. Save your changes.
12. Create a Contact Point Email.
a. In the Contact Point Email related list, click New.
b. Enter the email address.
c. Select Is Primary if this is a primary contact point email.
d. Save your changes.

<!-- page:1107 -->



See Also
Person Accounts
Add a Related List to an Object
Set Up Person Accounts to Represent People in AFLS


Add a Practitioner, Identifier, and Healthcare Provider NPI

In the Health and Life Sciences industry, practitioners play a critical role by providing essential healthcare
to patients. In a pharmacy benefits verification request, patient services representatives provide the
name and an ID of the practitioner who takes care of patients. Pharmacy Benefits Verification uses a
numeric ID to specify a practitioner. In the US, this ID is the National Provider Identifier (NPI), but you
can substitute the ID used in your country or region.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create account records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set

To create identifier records:                           Manage Pharmacy Benefits Verification permission
set

To create healthcare provider npi records:
Health Cloud Starter (for AFLS) OR
Health Cloud Foundation (for Health Cloud)
permission set


Before you create a person account, make sure you add Email field on the Person Account page layout.

Create a related list of identifiers for person account records. In pharmacy benefits verification, each
practitioner record requires an identifier. This identifier populates the practitioner ID field in the
verification request. Create a healthcare provider NPI to represent identifiers from the National Provider
Identifier that are assigned to each practitioner.

In pharmacy benefits verification, practitioners are represented as person account records.

1. From the App Launcher, find and select Accounts.

<!-- page:1108 -->



2. Click New.
3. Select Person Account as the record type, and click Next.
4. Enter the first and last name.
5. Enter the birthdate, email, and phone.
6. Select the gender.
7. Save your changes.
8. In the Identifiers related list, click New.
9. In ID Value, enter the practitioner's national provider ID specific to your country or region.
10. Enter the source system.
For example, Infinitus.
11. Save your changes.
12. Create a Healthcare Provider NPI.
a. From the App Launcher, find and select Healthcare Provider NPIs.
b. Click New.
c. Enter a name.
d. Select an NPI Type.
e. In Account, select the person account that you created for the practitioner earlier.
f. Save your changes.
13. Create Records for Healthcare Practitioners

See Also
Person Accounts



## Add a Payor, Identifier, Contact Point Phone, Contact Point Email and

Contact Point Address

In pharmacy benefits verification, payors are represented as a business account. Create a business
account to represent the payor, its identifier, contact point phone, contact point email, and contact point
address. Identifiers are required for each payor to get their payor ID.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create account records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set

<!-- page:1109 -->




USER PERMISSIONS NEEDED

To create identifier records:                      Manage Pharmacy Benefits Verification permission
set

To create contact point address, contact point     Manage Pharmacy Benefits Verification permission
email, and contact point phone records:            set


Before you create contact point phone, contact point email, and contact point address, make sure you
add them to the related list of Account page layout.

1.    From the App Launcher, find and select Accounts.
2.    Click New.
3.    Select Business Account as the record type, and click Next.
4.    Enter the payor name.
5.    Select the type for the payor.
6.  Select Active.
7.  Enter the phone.
8.  Save your changes.
9.  Create an Identifier.
a. In the Identifiers related list, click New.
b. In ID Value, enter the value specific to your country or region.
c. Enter the source system.
d. Save your changes.
10. Create a Contact Point Address.
a. In the Contact Point Addresses related list, click New.
b. Enter the name.
c. Enter the city.
d. Enter the state.
e. Enter the country.
f. Enter the postal code.
g. Save your changes.
11. Create a Contact Point Phone.
a. In the Contact Point Phone related list, click New.
b. Enter the phone type.
c. Enter the telephone number.
d. Save your changes.
12. Create a Contact Point Email.
a. In the Contact Point Email related list, click New.
b. Enter the email address.
c. Select Is Primary if this is a primary contact point email.
d. Save your changes.


## See Also

Add a Related List to an Object

<!-- page:1110 -->




Add a Pharmacy, and Identifier

Pharmacies provide patient access to essential medications and healthcare products. In the pharmacy
benefits verification request, agents provide the preferred pharmacy name that the pharmacy benefits
must be verified for. Pharmacy Benefits Verification uses a numeric ID to specify a pharmacy.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create account records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set

To create identifier records:                          Manage Pharmacy Benefits Verification permission
set


Create a related list of identifiers for business account records. In pharmacy benefits verification,
identifiers are required for each pharmacy record to populate the pharmacy ID in the verification
request.

In pharmacy benefits verification, pharmacies are represented as business account records.

1. Create a pharmacy.
a. From the App Launcher, find and select Accounts.
b. Click New.
c. Select Business Account as the record type, and click Next.
d. Enter the pharmacy name.
e. Select the type for the pharmacy.
f. Select Active.
g. Enter the phone.
h. Save your changes.
2. Create an identifier.
a. From the App Launcher, find and select Identifiers.
b. Click New.
c. In parent record, select Account, and enter the account that you created for the pharmacy.
d. In ID Value, enter the value specific to your country or region.
e. Enter the source system.

<!-- page:1111 -->



f. Save your changes.


## See Also

Add a Related List to an Object


Add a Purchaser Plan

Create a payer plan that a purchaser makes available to its members and the dependents of the
members.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create purchaser plan records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set


Before you create purchaser plans, create business account records for payers.

1.    From the App Launcher, find and select Purchaser Plans.
2.    Click New.
3.    Enter a name for the purchaser plan.
4.    In Payer, select the business account record of the payor.
5.    Save your changes.


Add a Member Plan and Identifier

Create a member plan to represent the details of the insurance coverage for a member or a subscriber.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1112 -->




USER PERMISSIONS NEEDED

To create member plan records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set


Before you create member plans, create person account records for patients.

1. Create a Member Plan.
a. From the App Launcher, find and select Member Plans.
b. Click New.
c. Enter a name for the member plan.
d. In Member, select a patient.
e. Enter the member number.
f. Enter the group number.
g. In Plan, select the purchaser plan that the patient purchased.
h. In Payer, select the account for the payer organization.
i. Enter the date that the member plan is effective from. If necessary, enter the date that the plan is
effective until.
j. Select Active as the status.
k. In Primary/Secondary/Tertiary, select a value to indicate whether this plan is the primary, secondary,
or tertiary plan.
l. In Relationship to Subscriber, select a value.
m. Save your changes.
2. Create an identifier.
a. From the App Launcher, find and select Identifiers.
b. Click New.
c. In the parent record, select Member Plan, and enter the member plan that you created for the
patient.
d. In ID Value, enter the value specific to your country or region.
e. Enter the source system.
f. Save your changes.


Add a Product, Code Set, and Code Set Bundle

Pharmacy Benefits Verification uses Product as a base object to represent the drug or medicine that’s
prescribed to the patient. Representataives verify the pharmacy benefits for each drug prescribed to the
patient.

<!-- page:1113 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create product records:
Health Cloud Starter (for AFLS)
permission set

OR

Health Cloud Foundation (for Health Cloud)
permission set

To create code set and code set bundle records:      Manage Pharmacy Benefits Verification permission
set


1. Create a Product.
a. From the App Launcher, find and select Products.
b. Click New.
c. Enter the product name, product code, and a description.
d. Select Active.
e. Save your changes.
2. Create a Code Set.
a. From the App Launcher, find and select Code Sets.
b. Click New.
c. Enter the name, source system.
d. In the code, enter the product code that you created.
e. Select Active.
f. Save your changes.
3. Create a Code Set Bundle.
a. From the App Launcher, find and select Code Set Bundles.
b. Click New.
c. Enter the name, source system, and a code.
d. In code set 1, enter the code set that you created for the product in context.
e. Save your changes.


## See Also

Code Sets and Code Set Bundles


Addition of Care Program and Related Records

Pharmacy Benefits Verification uses care program as the backbone of its operation. At its core, pharmacy
benefits verification uses care programs, care program enrollees, and care program products.

<!-- page:1114 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Use care programs to manage a variety of patient-centric programs designed for patient’s treatment.
Care Program Enrollee represents a patient enrolled in a care program. Care Program Product represents
a specific medication associated with the care program.


Note You must associate the care program product with the same care program that the care
program enrollee is enrolled to.


Let’s look at an example where Charles Green is a patient who has diabetes and is prescribed to use the
GlucoMagic medicine. First, create a Diabetes Management care program record. Then, create a care
program enrollee record to enroll Charles Green in the Diabetes Management care program. Create a
care program product record for GlucoMagic medicine, which is associated with the Diabetes
Management care program.

To set up a care program, care program enrollee, and care program product, see Create a Care Program
and Add Related Records.


Add Pharmacy Benefits Verification to the Care Program Enrollee
Record Page

Enable case managers to verify the pharmacy benefits coverage details by adding the
PharmacyBenefitsVerification Flexcard to the Care Program Enrollee record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To modify pages:                                     Customize Application

To add flexcards:
OmniStudio Admin

AND

OmniStudio User

AND

<!-- page:1115 -->




USER PERMISSIONS NEEDED


OmniStudio User


To use pharmacy benefits verification, install Omnistudio in your Salesforce org.

1.    From the App Launcher, find and select Care Program Enrollee.
2.    Click a care program enrollee record.
3.    Click Setup, and select Edit Page.
4.    Place the Flexcard component at an appropriate spot on the page layout.

Tip We recommend you to create a dedicated tab on your page for this Flexcard and place it
inside that tab.

5. Select the Flexcard component that you placed on the page.
6. In the component properties panel, in Flexcard Name, select PharmacyBenefitsVerification.
7. Save your work.

See Also
Understand Flexcards


Pharmacy Benefits Reverification

Use Pharmacy Benefits Reverification to periodically check a patient's eligibility for pharmacy benefits
under their health insurance. Reverification ensures that patients continue to get the right coverage for
their prescription medications without any breaks.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


With Pharmacy Benefits Reverification, insurance providers can save considerable time and resources
when reconfirming pharmacy benefits for patients in care programs, especially at year-end when
insurance plans and coverage frequently undergo changes.

Reverifying pharmacy benefits helps control costs for both insurance providers and patients by making
sure the coverage is necessary and used correctly. It also prevents potential fraud or misuse of these
benefits. Regular reverification helps achieve the goal of providing efficient, cost-effective, and suitable
drug therapy to patients.


## How Automation Streamlines Pharmacy Benefits Reverification

With the reverification automation process, your reps can reverify patient benefits as needed. The

<!-- page:1116 -->



automated reverification process significantly reduces manual intervention, ensuring accurate, timely
updates and comprehensive communication of patient benefits details between patient services reps
and healthcare professionals.
Understand the Reverification Request Generation
Pharmacy Benefits Reverification uses two flows and one data processing engine to generate a new
copy of Care Benefits Verify Request records.
Assign Permissions to View Reverification Automation Status
Provide your program leads and patient services reps the permissions to view the automation status of
the reverification of the care benefit verify request and care program enrollee record pages.
Set Up an Email Address for Automated Process User
Configure process automation settings by adding an email address to send emails to payors and
healthcare professionals from the orchestrator.
Set Field-Level Security for Pharmacy Benefits Reverification
To use the full functionality of the Care Benefit Verify Request Data Processing Engine (DPE), you must
provide field-level access to specific fields for the Analytics Cloud Integration user profile.
Enable Data Pipelines for Pharmacy Benefits Reverification
To run the Data Processing Engine for pharmacy benefits reverification, enable Data Pipelines. With
Data Pipelines you can query and compute data that's available in your Salesforce org.
Clone and Activate the Care Benefit Verify Requests Data Processing Engine Definition
Before your program leads can use the Initiate Benefit Reverification flow in your org, you must create
a clone of the existing Data Processing Engine definition and activate it. The flow uses the cloned
definition to copy care benefit verify request records for benefits reverification.
Activate the Payor Benefits Assessment Omniscript
Help payors fill the assessment by activating the Omniscript that includes a list of questions for the
payors to get the patient's missing benefits details.
Pharmacy Benefits Reverification Flows
Pharmacy benefits reverification uses flows to initiate electronic or manual verification requests,
validate the essential benefits in the payor response, and share a summary of patient's benefits details
with the healthcare practitioner.
Add Real-Time Reverification Updates to Record Pages
Configure the PharmacyBenefitsVerificationCareBenefitVerifyRequestOverallStatus Flexcard on the
care program enrollee and care benefit verify request record pages to provide an at-a-glance view of
the entire benefits reverification process and its detailed steps. Minimize manual intervention by
showing real-time updates on relevant record pages.


How Automation Streamlines Pharmacy Benefits Reverification

With the reverification automation process, your reps can reverify patient benefits as needed. The
automated reverification process significantly reduces manual intervention, ensuring accurate, timely
updates and comprehensive communication of patient benefits details between patient services reps
and healthcare professionals.

<!-- page:1117 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


When a patient's record is updated and verified, the patient's benefits are automatically reverified. You
can check the status of the reverification process on the Care Benefit Verify Request record page and the
Care Program Enrolee record page.

If the verification mode is electronic, an email with a benefits summary is sent to the patient's healthcare
professional after the verification.

If essential details are missing or the verification mode is manual, the patient's insurance provider
receives an email requesting the missing details. After receiving the payor response, the summary of
benefits is shared with the patient’s healthcare professional.


## See Also

Automate Complex Processes with Orchestrations
Build a Flow


Understand the Reverification Request Generation

Pharmacy Benefits Reverification uses two flows and one data processing engine to generate a new copy
of Care Benefits Verify Request records.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


Before your program leads can use the Initiate Benefit Reverification flow in your org, you must clone the
existing Data Processing Engine definition and activate it. The flow uses the cloned definition to copy
Care Benefit Verify Request records for benefits reverification. To clone the existing flows, refer Clone and
Activate the Care Benefit Verify Requests Data Processing Engine Definition and Clone, Activate, and
Configure Benefit Reverification Flows.

Here’s an overview of how your cloned Data Processing Engine definition and the flows work together.

<!-- page:1118 -->




Step                                                    Outcome

A program lead runs the Initiate Benefit                The flow initiates a benefit reverification request
Reverification flow.                                    based on data provided by the flow user. The user
enters the date range and status of the Care
Benefit Verify Requests to reverify.


## The Initiate Benefit Reverification flow triggers the

Care Benefit Verify Requests Data Processing            The definition identifies existing care benefit verify
Engine definition.                                      request records within the date range and with the
status specified by the Initiate Benefit
Reverification flow user. The definition creates a
copy of a care benefit verify request if the record
isn’t referenced as a parent request in any other
record.


## The definition assigns a Copy status to the new

record. The Copy status triggers the Copy Care
Benefit Verify Request Fields flow.


## Records copied by the Data Processing Engine

definition trigger the Copy Care Benefit Verify         The flow verifies that the care benefit verify
Request Fields flow.                                    requests to copy have a status of Copy, have a
Related Care Benefit Verify Request value, and
have no Authorized Prescription, Original
Prescription, or Coverage Benefit values. For each
record that meets these conditions, the flow
creates copies of the original record’s medication
requests, coverage benefit, coverage benefit
items, and coverage benefit item limits. It then
populates the Authorized Prescription, Original
Prescription, and Coverage Benefit fields in the
copied record.

- If the flow succeeds, it updates the status of the
new care benefit verify request records to
Pending.
-   If the flow fails, for example because of a
network connection issue, it updates the status
of the new care benefit verify request records to
Error. The error status indicates that the copy
process is incomplete because the flow didn’t
create any records or update the Authorized
Prescription, Original Prescription, and
Coverage Benefit fields in the copied record.

<!-- page:1119 -->




Step                                                   Outcome


## A program lead passes copied care benefit verify

request records along to patient services reps for     Program leads can share a list view of the pending
processing. If any records don't get copied, the       care benefit verify request records with patient
program lead manually triggers the Copy Care           services reps, or they can assign pending requests
Benefit Verify Request Fields flow for those           directly to patient services reps. To reverify the
records.                                               benefits, patient services reps access the shared
list or the pending records assigned to them.
Patient services reps can update the pharmacy
benefits coverage details for each of these records.


## To trigger the copy flow manually for care benefit

verify request records with a status of Error,
change the status from Error to Copy.


Assign Permissions to View Reverification Automation Status

Provide your program leads and patient services reps the permissions to view the automation status of
the reverification of the care benefit verify request and care program enrollee record pages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED


## To manage pharmacy benefits reverification

requests:                                              Manage Pharmacy Benefits Verification permission
set

AND

Access Patient Support Programs as a Program
Lead permission set


1. From Setup, in the Quick Find box, enter Profiles, and then select Profiles.
2.    Select the profile associated with program lead.
3.    Click Edit.
4.    Under Administrative Permissions, select View Orchestrations in Automation App.
5.    Under Standard Object Permissions, provide View All Records access to Flow Orchestration Instance
Related Objs.

<!-- page:1120 -->



6. Save your changes.
7. Similarly, provide these permissions to the patient services rep.


Set Up an Email Address for Automated Process User

Configure process automation settings by adding an email address to send emails to payors and
healthcare professionals from the orchestrator.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED

To modify organization-wide addresses:               Modify All Data


Make sure that you set up organization-wide Email addresses and select the purpose as User Selection,
or User Selection and Default No-Reply Address.

1. From Setup, in the Quick Find box, enter Process Automation Settings, and then select Process
Automation Settings.
2. In Automated Process User Email Address, enter the organization-wide email address that you created.
3. Save your changes.


## See Also

Organization-Wide Email Addresses


Set Field-Level Security for Pharmacy Benefits Reverification

To use the full functionality of the Care Benefit Verify Request Data Processing Engine (DPE), you must
provide field-level access to specific fields for the Analytics Cloud Integration user profile.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud

<!-- page:1121 -->




USER PERMISSIONS NEEDED


## To set field-level security

Manage Profiles and Permission Sets

AND

Customize Application


To use DPE, the Analytics Cloud Integration User profile must be available in your org.

1. In Setup, go to Object Manager.
2. Find and select the Care Benefit Verify Request object, and then click Fields & Relationships.
3. For each Care Benefit Verify Request field in the table, update the field-level security by selecting
Visible and deselecting Read-Only for the Analytics Cloud Integration User profile.
Then repeat these steps for the Care Program Enrollee object.

Object                                                Field

Care Benefit Verify Request                           Authorized Prescription

Benefit Category Code

Billable Period End Date

Billable Period Start Date

Care Program Enrollee

Case

Created Date

Member Plan

Original Prescription

Payer

Prescriber

Priority Code

Provider

Related Care Benefit Verify Request

Requested Date

Requested By

Requester

Status

<!-- page:1122 -->




Object                                              Field

Care Program Enrollee                               Care Program

Status

4. Set the Member Plan object access to Public Read/Write or set up Member Plan object sharing
settings for the users that use Pharmacy Benefits Reverification.


## See Also

Salesforce Help: Sharing Settings


Enable Data Pipelines for Pharmacy Benefits Reverification

To run the Data Processing Engine for pharmacy benefits reverification, enable Data Pipelines. With Data
Pipelines you can query and compute data that's available in your Salesforce org.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED


## To enable data pipelines

Customize Application

AND

Data Pipelines Base User


1. From Setup, in the Quick Find box, enter Data Pipelines, and then select Get Started.
2. Enable data pipelines.


## See Also

Data Processing Engine


Clone and Activate the Care Benefit Verify Requests Data Processing Engine
Definition

Before your program leads can use the Initiate Benefit Reverification flow in your org, you must create a
clone of the existing Data Processing Engine definition and activate it. The flow uses the cloned
definition to copy care benefit verify request records for benefits reverification.

<!-- page:1123 -->




**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED

To create and save data processing engines:
Customize Application

AND

Data Pipelines Base User


To use Data Processing Engine, the Analytics Cloud Integration User profile must be available in your org.

1. From Setup, in the Quick Find box, enter Data Processing Engine, and then select Data
Processing Engine.
2.    Open the Clone Care Benefit Verify Requests definition.
3.    Click Save As.
4.    Leave the default Name and API Name, and then save your work.
Don’t change the default Name and API Name. Changing these values prevents status notifications
from being sent to the user.
5.    Open and activate the definition you created.


Activate the Payor Benefits Assessment Omniscript

Help payors fill the assessment by activating the Omniscript that includes a list of questions for the
payors to get the patient's missing benefits details.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED

To configure omniscript                             Omnistudio Admin permission set

<!-- page:1124 -->



Before you activate the Payor Benefits Assessment omniscript, deploy the Benefits Reverification
Assessment template. See Set Up Agentforce for Pharmacy Benefits Reverification.

1. From the App Launcher, find and select Omniscripts.
2. From the Omniscript list view, select Payor Benefits Assessment .
3. Click Activate, and then save your changes.

See Also
Omniscripts


Pharmacy Benefits Reverification Flows

Pharmacy benefits reverification uses flows to initiate electronic or manual verification requests, validate
the essential benefits in the payor response, and share a summary of patient's benefits details with the
healthcare practitioner.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.



## Understanding Pharmacy Benefits Reverification Flows

Automate various tasks in Pharmacy Benefits Reverification using pre-built flows. Customize these
flows to run patient support programs according to your requirements.
Clone, Activate, and Configure Benefit Reverification Flows
Pharmacy Benefits Reverification uses various flows to automate your tasks. Clone and activate the
default flows. To send assessments to patients and payors, update the Experience Cloud site URL in
the Reverify Benefits orchestrator flow.


Understanding Pharmacy Benefits Reverification Flows

Automate various tasks in Pharmacy Benefits Reverification using pre-built flows. Customize these flows
to run patient support programs according to your requirements.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT

<!-- page:1125 -->




Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


## Flows in Pharmacy Benefits Reverification

Flow                                                   Description

Initiate Benefit Reverification                        Initiates a benefit reverification request based on
data provided by the flow user.

Copy Care Benefit Verify Request Fields                Copies the authorized prescription, original
prescription, and coverage benefit from a source
care benefit verify request to a target care benefit
verify request.

Wait for Care Benefit Verify Request Status Change Waits for a care benefit verify request status
change from Pending Confirmation to Ready For
Verification.

Process Electronic Benefits Verification               Sends an Electronic Benefit Verification request to
a clearing house, waits for the response from
MuleSoft, and updates the status of the Care
Benefit Verification Request record.

Update Coverage Details                                Update the benefits coverage details in the care
benefit verify request and related records based
on the payor's response.


## Validate Essential Care Limit Types

Validates if all the essential care limit types are
present in the payor response.

Send Email To Payor                                    Sends an email to the payor with an assessment
URL to get patient’s latest benefits details.

Send Benefits Summary Email                            Sends a benefits summary email to the healthcare
professional with the patient's latest benefit
details.

Get Benefits Details using Context Service             Gets the benefits verification details using context
service.

Publish Care Benefit Verify Request Status Change      Publishes a care benefit verify request status
Event                                                  change event when the status of the care benefit
verify request record is updated.

Reverify Benefits                                      Reverifies patient’s personal and healthcare
details, then proceeds with either an electronic or
manual benefits reverification. After validating the
payor response, the flow shares the patient’s
benefits summary with the healthcare
professional.

<!-- page:1126 -->




## See Also

Automate Complex Processes with Orchestrations
Build a Flow
Agentforce for Pharmacy Benefits Reverification
Pharmacy Benefits Reverification Flows


Clone, Activate, and Configure Benefit Reverification Flows

Pharmacy Benefits Reverification uses various flows to automate your tasks. Clone and activate the
default flows. To send assessments to patients and payors, update the Experience Cloud site URL in the
Reverify Benefits orchestrator flow.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED

To activate or deactivate a flow:                          Manage Flows


1. From Setup, in the Quick Find box, enter Flows, and then select Flows.
2. Verify that the Initiate Benefit Reverification flow is active. If it isn’t active, activate it.
3. Clone the Copy Care Benefit Verify Request Fields flow, and then activate it.

Note In Object Manager, check the care program page layout to make sure that your program
leads can see the Reverify Pharmacy Benefits action. If the Reverify Pharmacy Benefits action isn’t
visible to your users, drag it from Mobile & Lightning Actions to the care program page layout.

4. Similarly, clone and activate all the flows listed.
a. Reverify Benefits
b. Publish Care Benefit Verify Request Status Change Event
c. Process Electronic Benefits Verification
d. Update Coverage Details
e. Wait for Care Benefit Verify Request Status Change
5. Update the Experience Cloud Site URL in the Reverify Benefits flow orchestrator.
a. From Setup, in the Quick Find box, enter Life Sciences for AFLS or Health Cloud
for health cloud, and then select Patient Support Program Settings.
b. Copy the Experience Cloud Site URL.
c. From Setup, in the Quick Find box, enter Flows, and then select Flows.
d. Select Reverify Benefits.
e. In flow builder, click Toggle Toolbox, and then click the Assessment URL variable.
f. Under Default Value, paste the Experience Cloud Site URL that you copied.

<!-- page:1127 -->



g. Click Done.
h. Save and activate the flow.

See Also
Build a Flow
Automate Complex Processes with Orchestrations
Agentforce for Pharmacy Benefits Reverification
Set Up Agentforce for Pharmacy Benefits Reverification
Pharmacy Benefits Reverification Flows


Add Real-Time Reverification Updates to Record Pages

Configure the PharmacyBenefitsVerificationCareBenefitVerifyRequestOverallStatus Flexcard on the care
program enrollee and care benefit verify request record pages to provide an at-a-glance view of the entire
benefits reverification process and its detailed steps. Minimize manual intervention by showing real-time
updates on relevant record pages.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED

To modify pages:                                       Customize Application

To add flexcards:
OmniStudio Admin

AND

OmniStudio User

AND

OmniStudio User


Before you add the PharmacyBenefitsVerificationCareBenefitVerifyRequestOverallStatus Flexcard on the
care benefit verify request and care program enrollee record pages, make sure that you set up Agentforce
for pharmacy benefits reverification.

When you add the PharmacyBenefitsVerificationCareBenefitVerifyRequestOverallStatus flexcard on the
care program enrollee record page, the flexcard by default displays the overall status of the latest benefits
verification request created for that care program enrollee. In case, there is no benefits verification

<!-- page:1128 -->



request present, the flexcard card is not displayed.

1.    From the App Launcher, find and select Care Benefit Verify Request.
2.    Click a care benefit verify request record.
3.    Click Setup, and select Edit Page.
4.    Place the Flexcard component at an appropriate spot on the page layout.

Tip We recommend you to create a dedicated tab on your page for this Flexcard and place it on
that tab.

5. Select the Flexcard component that you placed on the page.
6. In the component properties panel, in Flexcard Name, find and select
PharmacyBenefitsVerificationCareBenefitVerifyRequestOverallStatus.
7. Click Add Filter.
8. Select the Advanced filter type.
9. In Field, click Select.
10. On the Select Field window, from the dropdown, select Record, then select Related Care Benefit
Verify Request, then select Care Benefit Verify Request Name, and then click Done.
11. Select Not Equal as the operator and keep value as blank, and then click Done.
12. Save your changes, and activate the page.
13. Similarly, add PharmacyBenefitsVerificationCareBenefitVerifyRequestOverallStatus Flexcard on care
program enrollee record page.
Don't add any filters for care program enrollee record page.
14. Save your changes, and activate the page.

See Also
Understand Flexcards


Set Up Pharmacy Benefits Verification Flows

Enable your patient service representatives to initiate an electronic verification request on behalf of a
care program enrollee. Learn how the salesforce flow updates an electronic verification request status to
time out. Understand the prerequisites before making any customizations to this flow.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud



## Pharmacy Benefits Verification Flow Template

Pharmacy Benefits Verification ships a flow template that you must clone and activate to update the
care benefit verify request status.
Clone and Activate the Pharmacy Benefits Verification Flow
Streamline the process of updating the status of an electronic benefits verification request by cloning
and activating the verification flow by using the Update Care Benefit Verify Request Status flow

<!-- page:1129 -->



template.
Customize the Request Timeout
Each electronic verification request gets timed out after three hours of waiting for a response from the
last modified date of a care benefit verification request. You can customize the request timeout based
on your business needs.


Pharmacy Benefits Verification Flow Template

Pharmacy Benefits Verification ships a flow template that you must clone and activate to update the care
benefit verify request status.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Update Care Benefit Verify Request Status Flow Template

To update the request status to time out, you must clone and activate a new flow using Update Care
Benefit Verify Request Status flow template. This flow updates the request status to time out if no
response is received from MuleSoft within three hours of the Last Modified Date.


Clone and Activate the Pharmacy Benefits Verification Flow

Streamline the process of updating the status of an electronic benefits verification request by cloning
and activating the verification flow by using the Update Care Benefit Verify Request Status flow template.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To open, edit, or create a flow in Flow Builder:     Manage Flow


1. From Setup, in the Quick Find box, enter Flows and select it.
2.    Open the Update Care Benefit Verify Request Status flow template.
3.    In the Flow Builder, click Save as New Flow.
4.    Enter a flow label and a description.
5.    Save and activate the new flow.

<!-- page:1130 -->




Customize the Request Timeout

Each electronic verification request gets timed out after three hours of waiting for a response from the
last modified date of a care benefit verification request. You can customize the request timeout based on
your business needs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To open, edit, or create a flow in Flow Builder:     Manage Flow


Create and activate a flow by using the Update Care Benefit Verify Request Status flow template.

.

1. From Setup, in the Quick Find box, enter Flows and select it.
2.    Open the flow that you created by using Update Care Benefit Verify Request Status flow template.
3.    In the Flow Builder, under the Start element, next to Scheduled Paths, click Edit.
4.    Under Configure Scheduled Paths, click Check Timed Out.
5.    Update the offset number and offset options.
6.    Click Save as New Version, and then click Activate.


Einstein Generative AI for Pharmacy Benefits Verification

Harness the power of Einstein generative AI to streamline patient services rep's daily tasks. Pharmacy
Benefits Verification uses Einstein generative AI-based flows to generate a call script and a benefits
summary.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


Timely care and communication are crucial in a patient’s healthcare journey. AFLS’s
embedded generative AI capabilities help reps to summarize pharmacy benefits faster and easily
generate a concise summary that can be easily shared with a single click. Alleviate information search for
the list of coverage fields and identify the missing coverage details with an AI-powered call script. Use our
built-in prompt templates to improve efficiency, accuracy, and communication in the verification journey,
leading to better outcomes.

<!-- page:1131 -->




Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.



## Turn On Einstein for Patient Support Program

Give your patient services reps access to the Einstein generative AI by turning on Einstein for patient
support programs.
Context Definition Understanding and Enablement
Pharmacy Benefits Verification uses Einstein’s generative AI to generate a benefits summary and a call
script summary. These summaries are generated through an auto-launched flow, which uses context
service to fetch the data. Before context service fetches the data, you must turn on context definition.
Workflow of Call Script and Pharmacy Benefits Summary
Pharmacy Benefits Verification includes two flows that use Einstein Generative AI to generate a call
script and a pharmacy benefits summary. Understand the process by using Flow Builder, Context
Services, Prompt Template, and Embedded AI. Learn how these capabilities work together, the key
steps in benefits summary and script generation, and the prerequisites before making any
customizations.


Turn On Einstein for Patient Support Program

Give your patient services reps access to the Einstein generative AI by turning on Einstein for patient
support programs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED


## To enable Einstein AI

Customize Application AND Access Patient
Support Programs Using Einstein (for Life Sciences
Cloud)

OR

Customize Application (for Health Cloud)


1. Turn On Einstein Generative AI:
a. From Setup, in the Quick Find box, find and select Einstein Setup.
b. Turn on Einstein.
2. From Setup, in the Quick Find box, enter Life Sciences (for AFLS), or Health Cloud

<!-- page:1132 -->



(for Health Cloud). Then select Patient Support Program Settings.
3. Turn on Einstein for Patient Support Program.


## See Also

Salesforce Help: Set Up Einstein Generative AI


Context Definition Understanding and Enablement

Pharmacy Benefits Verification uses Einstein’s generative AI to generate a benefits summary and a call
script summary. These summaries are generated through an auto-launched flow, which uses context
service to fetch the data. Before context service fetches the data, you must turn on context definition.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


Pharmacy Benefits Verification comes with two predefined context definitions,
PharmacyBenefitsSummary and CallScriptForPharmacyBenefits that enable the efficient
retrieval and consumption of data in generating pharmacy benefits and call script summary.


Important You can’t edit or remove PharmacyBenefitsSummary and CallScriptForPharmacyBenefits
context definitions. To make any changes, create a copy of these context definitions by clicking Save
as.


PharmacyBenefitsSummary

The PharmacyBenefitsSummary context definition hydrates data for benefits summary generation. The
nodes and attributes in this structure are mapped to the Care Benefit Verify Request, Coverage Benefit,
Coverage Benefit Item, and Coverage Benefit Item Limit objects.


CallScriptForPharmacyBenefits

The CallScriptForPharmacyBenefits context definition hydrates data for call script summary generation.
The nodes and attributes in this structure are mapped to the Care Benefit Verify Request, Coverage
Benefit, Coverage Benefit Item, and Coverage Benefit Item Limit objects.


Turn On Context Service

To turn on context services, see Turn On Context Service.

See Also

<!-- page:1133 -->



Salesforce Help: Context Service


Workflow of Call Script and Pharmacy Benefits Summary

Pharmacy Benefits Verification includes two flows that use Einstein Generative AI to generate a call script
and a pharmacy benefits summary. Understand the process by using Flow Builder, Context Services,
Prompt Template, and Embedded AI. Learn how these capabilities work together, the key steps in
benefits summary and script generation, and the prerequisites before making any customizations.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses



## Capabilities for Call Script and Benefits Summary Generation

Understand the capabilities that are used to generate call script and pharmacy benefits summary.
Key Steps to Generate Call Script
Explore how the different components fit together to generate the call script. Use Einstein Embedded
AI to trigger a Salesforce flow that uses invocable action to map data into a suitable format. Use
Context Service to hydrate the data related to call script, and pass the information into process
automation tools. Create a prompt template to include specific instructions for generating a call script.
Key Steps to Generate Pharmacy Benefits Summary
Explore how the different components fit together to generate the benefits summary. Use Einstein
Embedded AI to trigger a Salesforce flow that uses invocable action to map data into a suitable
format. Use Context Service to hydrate the data related to pharmacy benefits summary, and pass the
information into process automation tools. Create a prompt template to include specific instructions
for generating a summary.


Capabilities for Call Script and Benefits Summary Generation

Understand the capabilities that are used to generate call script and pharmacy benefits summary.

- Einstein Embedded AI: Einstein Embedded AI integrates intelligent features directly into Salesforce
workflows, providing predictive analytics, automated insights, and personalized recommendations to
enhance decision-making and efficiency for all users.
-    Flow Builder: Flow Builder is a declarative tool for building complex workflows. Elements in a flow can
run various actions, such as aggregate data, create or update records, and assign values to resources.
See Flow Builder.
-    Invocable Actions: Use Invocable Actions to create reusable actions or methods that can be invoked
from process builders, flows, or even external applications via REST API calls.
-    Context Service: Use Context Service to retrieve and consume information in tools such as Flows.
Context Service comprises context definitions, which are a structured set of data required to execute a

<!-- page:1134 -->



process. Pharmacy Benefits Verification has predefined context definitions called
PharmacyBenefitsSummary and CallScriptForPharmacyBenefits that are used in benefits
summary and call script generation. See Context Service.
-   Einstein Generative AI: Einstein Generative AI uses advanced models to generate human-like text and
content, enabling dynamic content creation, automated responses, and improved customer
interactions within Salesforce.
-   Prompt Template: Prompt Template is a reusable prompt that includes placeholders for specific details
about the context in which it’s being used. After you fill the placeholders with relevant data, you can
use this prompt template to connect with Large Language Models (LLM) to perform specific tasks such
as creating a summary or sending an email. See Create a Prompt Template


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


Key Steps to Generate Call Script

Explore how the different components fit together to generate the call script. Use Einstein Embedded AI
to trigger a Salesforce flow that uses invocable action to map data into a suitable format. Use Context
Service to hydrate the data related to call script, and pass the information into process automation tools.
Create a prompt template to include specific instructions for generating a call script.

Review the key steps in the call script generation process built by using the predefined context
definitions, invocable actions, and a screen flow.

1. After initiating the benefits verification request, reps can generate the call script with just a click of a
button.
2. On any care program enrollee record page, under Pharmacy Benefits Verification tab, click the
Generate Call Script to launch a Generate Call Script screen flow.
3. To retrieve all the information related to a call script, the flow invokes the Ls Commercial Context
Data Provider Invocable action, which uses data from the CallScriptForPharmacyBenefits
context definition. The benefits data that the context service returns is used in subsequent steps.
4. The flow then invokes another invocable action, called Serialize Apex Records To
Stringified JSON to serialize records returned by apex class into Stringified JSON.
5. At the end, the flow invokes another invocable action, careProgramCallScriptGeneration that
calls Summarize Call Script prompt template. The output from the prompt template is further
passed to a Large Language Model (LLM), generates the required text. The final text returned by LLM is
shown to users on the screen flow as a call script.

Note Info: By default, the Summarize Call Script prompt template uses OpenAI GPT 4 Turbo
model. You can’t edit or remove the Summarize Call Script prompt template. To make changes to
the template, open the Summarize Call Script prompt template from Setup, and create a copy by
clicking Save as.

<!-- page:1135 -->




Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Standard Prompt Templates
Salesforce Help: Changing LLM Configurations


Key Steps to Generate Pharmacy Benefits Summary

Explore how the different components fit together to generate the benefits summary. Use Einstein
Embedded AI to trigger a Salesforce flow that uses invocable action to map data into a suitable format.
Use Context Service to hydrate the data related to pharmacy benefits summary, and pass the information
into process automation tools. Create a prompt template to include specific instructions for generating a
summary.

Review the key steps in the benefits summary generation process built by using the predefined context
definitions, invocable actions, and a screen flow.

1. After initiating the benefits verification request, reps can generate the pharmacy benefits summary
with just a click of a button.
2. On any care program enrollee record page, under Pharmacy Benefits Verification tab, click the
Generate Summary button to launch a Generate Benefits Summary screen flow.
3. To retrieve all the information related to a benefits summary, the flow invokes the Ls Commercial
Context Data Provider Invocable action which takes data from PharmacyBenefitsSummary
context definition. The benefits data that the context service returns is used in subsequent steps.
4. The flow then invokes another invocable action, called Serialize Apex Records To
Stringified JSON , to serialize records returned by apex class into Stringified JSON.
5. The flow then invokes another invocable action, called careProgramBenefitsSummary that calls
the Summarize Patient Pharmacy Benefits prompt template. The output from the prompt
template is further passed to a Large Language Model (LLM), which generates the required text. The
final text that the LLM returns appears on the screen flow as a patient pharmacy benefits summary.

Note Info: By default, the Summarize Patient Pharmacy Benefits prompt template uses OpenAI
GPT 4 Turbo model. You can’t edit or remove the Summarize Patient Pharmacy Benefits prompt
template. To make changes to the template, open the Summarize Patient Pharmacy Benefits
prompt template from Setup, and create a copy by clicking Save as.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Standard Prompt Templates
Salesforce Help: Changing LLM Configurations

<!-- page:1136 -->




Use Pharmacy Benefits Verification

Pharmacy Benefits Verification improves patient access and adherence to care by helping representatives
to start the patient’s medication early. Help caregivers and patients reduce the time and effort required
to determine the covered pharmacy benefits. Patient services representatives can assist patients by
getting a clear picture of their pharmacy benefits coverage such as co-pay, co-insurance, and other
coverage details. They can also generate a concise summary of patient’s pharmacy benefit details using
Einstein’s Generative AI auto-launched flows.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


Drug manufacturers can use Pharmacy Benefits Verification to provide their patients financial aid and
help them understand their coverage. With immediate access to the patient benefits coverage and
alternative drug options, healthcare providers can make informed decisions on prescriptions and
referrals to financial assistance programs. Pharmacists can deliver accurate medication, avoid delays,
understand patient benefits coverage, and offer alternative drugs at the time of drug fulfillment.
Ultimately, Pharmacy Benefits Verification enhances patient outcomes by refining medication availability
and reinforcing adherence.

Additionally, representatives can use Patient Support Programs console app to centralize all the
pharmacy-related tasks in one place. For example, representatives can create a dashboard to check how
many patients’ pharmacy benefits are yet to be verified.

When representatives initiate benefits verification requests, they can add a member plan directly from a
care program enrollee record page without going through to the member plan object.

Representatives can generate a benefits summary and a call script with a single click, by using Einstein
Generative AI.


## Patient Support Programs Console App

The Patient Support Programs console app in the Health and AFLS acts as a single-stop
for all patient services representatives to monitor different aspects of care programs and care program
enrollees. Representatives can customize this app according to their needs and access all the
functionalities of patient support programs through the app.
Add Member Plan from Care Program Enrollee Record Page
Create a member plan directly from a care program enrollee record page without going to the
Member Plan object record page.
Pharmacy Benefits Verification Request
You can use a guided flow to initiate a manual or electronic benefits verification request, generate
patients’ benefits packages, and furnish a concise summary of the benefits related to the medications

<!-- page:1137 -->



prescribed within a care program.
Initiate a Manual or Electronic Verification Request
Initiate a manual or electronic pharmacy benefits verification request to generate patients’ benefits
packages, and furnish a concise summary of the benefits related to the medications prescribed within
a care program.
Benefit Coverage Response
The Benefits Summary section shows the pharmacy benefit coverage response received from payors or
clearing houses. The benefit summary section includes the patient’s benefits details such as coverage
status, co-pay, and co-insurance.
Generate Call Script
Reduce the time patient services reps spend on call with payors to determine the missing fields from
the benefits summary. Pharmacy Benefits Verification uses Einstein Generative AI to help patient
services reps generate a call script, which they can use to fetch missing coverage information from
payors.
Generate Pharmacy Benefits Summary
Pharmacy Benefits Verification includes Einsten Generative AI to generate the pharmacy benefits
summary for reps. You can share this benefit summary with patients, prescribers, and practitioners.
The summary helps providers recommend appropriate assistance programs to patients, and helps reps
make informed decisions, such as enrolling patients in appropriate assistance programs.
Update the Status of a Manual Verification Request
You can mark the status of a manual verification request as Pending, Completed, Error, or Partial,
depending on the business use case.
Use Pharmacy Benefits Reverification
Pharmacy Benefits Reverification checks a patient's eligibility for pharmacy benefits, ensuring
continuous and correct coverage for their medications. The process helps insurance providers save
time and resources by streamlining the reconfirmation of pharmacy benefits for patients in care
programs. Reverifying benefits controls costs for both providers and patients by confirming that
coverage is necessary and used correctly.


Patient Support Programs Console App

The Patient Support Programs console app in the Health and AFLS acts as a single-stop for
all patient services representatives to monitor different aspects of care programs and care program
enrollees. Representatives can customize this app according to their needs and access all the
functionalities of patient support programs through the app.


**REQUIRED EDITIONS**



Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS

<!-- page:1138 -->




Assign Permissions to Users

To access the Patient Support Programs console app, admins must assign the Access Patient Support
Programs as a Case Agent permission set to your patient services representative.


Patient Support Programs Console App for Patient Services Representatives

Representatives can personalize this app by creating custom dashboards and reports related to the
patients, and their pharmacy benefits details. They can enhance this personalized space by using custom
components, track patients' healthcare journey, and access all the functionalities at a single place.


## See Also

Salesforce Help: Patient Support Programs Console App


Add Member Plan from Care Program Enrollee Record Page

Create a member plan directly from a care program enrollee record page without going to the Member
Plan object record page.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a member plan                             Manage Pharmacy Benefits Verification permission
set


Make sure your Salesforce admin has created the Pharmacy Benefit Verification tab on the care program
enrollee record page.

Follow these easy steps to create a member plan directly from a care program enrollee record page
without having to go to the Member Plan object record page.

1. From the App Launcher, find and select Care Program Enrollee.
2. Select a care program enrollee.
3. On the Pharmacy Benefits Verification tab, click Add Member Plan.

Note The tab name can vary based on the admin setup of your Salesforce org.

4. On click of Add Member Plan, a new tab is opened for adding a new member plan. After you’ve added
a new member plan, click Save, close the tab and click Refresh.
You can see the newly added member plan associated with the care program enrollee in context.

You can now initiate a pharmacy benefits verification request against this newly added member plan.

<!-- page:1139 -->




Pharmacy Benefits Verification Request

You can use a guided flow to initiate a manual or electronic benefits verification request, generate
patients’ benefits packages, and furnish a concise summary of the benefits related to the medications
prescribed within a care program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


Manual Verification Request

With manual verification request, you can connect directly with payors to get the patient's benefits
details and manually record the coverage details in the benefits summary section.


Electronic Verification Request

With electronic verification request, the data exchange is automated with third-party clearing houses
which then further connect with payors to find out the patient's pharmacy benefit details. The coverage
response received in an electronic verification request gets updated in the benefits summary section.
You can edit the responses, if necessary. You can also initiate an electronic verification of an existing
manual request.

To validate the insurance coverage and determine the coverage summary for each drug that’s prescribed
to the patient under a care program, go to any care program enrollee record page and click Pharmacy
Benefits Verification. The page contains a panel that lists the member plans associated with the patient.
If the patient is associated with more than one member plan, you can connect with the patient to get
details about the member plan that's considered for benefits verification. Depending on the type of
verification you want to carry out for the patient, you can verify the coverage benefits against any
member plan by clicking the New Electronic Request or New Manual Request buttons.




Initiate a Manual or Electronic Verification Request

Initiate a manual or electronic pharmacy benefits verification request to generate patients’ benefits
packages, and furnish a concise summary of the benefits related to the medications prescribed within a
care program.


**REQUIRED EDITIONS**


Available in: Lightning Experience

<!-- page:1140 -->




Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To create a verification request:                     Manage Pharmacy Benefits Verification permission
set


Before you create the verification request, you must set up the data for patients, member plans,
purchaser plans, practitioners, payors, drugs, and pharmacies.

A verification request consists of the data related to the patient’s prescriber, drug, and pharmacy. To
speed up the request creation process, by default, prescriber, drug, and pharmacy fields are auto-
populated with the values used in the last verification request.


Warning Depending on the number of pharmacy, practitioner, or drug records in your Salesforce
org, the time to select the values associated with those records can vary.


Regardless of the type of verification request, follow the steps to launch the guided flow.

1. From the App Launcher, find and select Care Program Enrollee.
2. Select care program enrollee.
3. Click the Pharmacy Benefits Verification tab.

Note The tab name for your Salesforce org can vary based on your admin setup.

4. To launch a guided flow, click New Manual Request for a manual verification request, or click New
Electronic Request for an electronic verification request.
5. Select the name of the patient's practitioner.
6. Under Prescriber Details, select the name of the patient's practitioner.
The National Practitioner ID is automatically populated.
7. Click Next.
8. Under Drug Details, select the name of the drug prescribed to the patient's prescribed drug name.
9. Enter the supply duration in days.
10. Enter the quantity.
11. Select the unit of measure.
12. Under Pharmacy Details, select the pharmacy name.
The other details of the pharmacy, such as Pharmacy ID, Phone, Type, and Address are automatically
populated.
13. Click Submit.
You see a message that confirms the submission of the benefit verification request.
14. Click Done.


## See Also

Add a Pharmacy, and Identifier
Addition of Care Program and Related Records
Add a Product, Code Set, and Code Set Bundle
Create Records for Healthcare Practitioners

<!-- page:1141 -->




Benefit Coverage Response

The Benefits Summary section shows the pharmacy benefit coverage response received from payors or
clearing houses. The benefit summary section includes the patient’s benefits details such as coverage
status, co-pay, and co-insurance.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


You can get a detailed understanding of a patient’s pharmacy benefits details such as Coverage Type,
Coverage Status Code, and Lifetime Maximum Amount in the Benefits Summary section (1). You can
also view previous verification requests by selecting the date from the dropdown (2). You can edit all the
fields in the benefits summary by clicking the Edit Benefits button (3). You can also edit a single field by
clicking the Edit icon next to the response field. History tracking (4) helps you to check the previous value
and editor of each response field. You can also electronically verify an existing manual request by clicking
the Electronically Verify This request (5) button.




Transparency regarding the coverage and patients' out-of-pocket costs helps in making informed
decisions, such as referring patients to suitable financial assistance programs or alternate medications.


Generate Call Script

Reduce the time patient services reps spend on call with payors to determine the missing fields from the
benefits summary. Pharmacy Benefits Verification uses Einstein Generative AI to help patient services
reps generate a call script, which they can use to fetch missing coverage information from payors.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED


## To generate call script

Context Service Admin permission set

AND

Context Service Runtime permission set

<!-- page:1142 -->




USER PERMISSIONS NEEDED


AND

Prompt Template Manager permission set

AND

Prompt Template User permission set

AND

Manage Pharmacy Benefits Verification permission
set


Before you generate the call script for payors, make sure the verification request is initiated.

With Pharmacy Benefits Verification, patient services reps can generate a call script by using an auto-
launched flow. This call script includes a subset of the missing information in the benefits summary that's
required to complete the patient’s pharmacy benefits verification request.

The call script is divided into four sections. The first section highlights the patient’s information. The
second section outlines the insurance coverage information, and the third section highlights the
information related to the drug that’s prescribed to the patient. The fourth section includes the list of all
the fields that the coverage information is missing for. You can copy this script with a single click.


Important To customize the Generate Call Script flow according to your business needs, implement
the TransposeContext interface.


1. From the App Launcher, find and select Care Program Enrollee.
2. Select a care program enrollee.
3. On the Pharmacy Benefits Verification tab, in the Benefits Summary section, click Generate Call
Script.

Note The tab name can vary based on the admin setup of your Salesforce org.

The Generate Call Script flow is launched.
4. To accept the disclaimer for Einstein AI usage, click Got It.


The call script is generated.

Here’s a sample call script.




To copy the call script to the clipboard, click Copy.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before

<!-- page:1143 -->




using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Einstein Generative AI & Trust


Generate Pharmacy Benefits Summary

Pharmacy Benefits Verification includes Einsten Generative AI to generate the pharmacy benefits
summary for reps. You can share this benefit summary with patients, prescribers, and practitioners. The
summary helps providers recommend appropriate assistance programs to patients, and helps reps make
informed decisions, such as enrolling patients in appropriate assistance programs.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with Health Cloud or AFLS, and Einstein
GPT Platform and Einstein GPT Prompt Builder Add-On licenses


USER PERMISSIONS NEEDED


## To generate pharmacy benefits summary

Context Service Admin permission set

AND

Context Service Runtime permission set

AND

Prompt Template Manager permission set

AND

Prompt Template User permission set

AND

Manage Pharmacy Benefits Verification permission
set


Before you generate the pharmacy benefits summary, make sure the verification request is initiated.

With Pharmacy Benefits Verification, reps can generate a concise summary of a patient’s pharmacy
benefits with a single click.

The summary includes the information related to the patient, insurance coverage, drug, and pharmacy
benefits. It also includes additional information, and the next steps that reps must take in the patient’s

<!-- page:1144 -->



pharmacy benefits verification journey. You can easily copy the summary with a single click.


Important To customize the Generate Benefit Summary flow according to your business needs,
implement the TransposeContext interface.


1. From the App Launcher, find and select Care Program Enrollee.
2. Select a care program enrollee.
3. On the Pharmacy Benefits Verification tab, in the Benefits Summary section, click Generate Summary.

Note The tab name can vary based on the admin setup of your Salesforce org.

The Generate Benefit Summary flow is launched.
4. To accept the disclaimer for Einstein AI usage, click Got It.


The benefits summary is generated.

Here’s a sample benefit summary.




To copy the benefits summary to the clipboard, click Copy. You can share this summary with the patient,
healthcare provider, or practitioner.


Warning This tool uses generative AI, which can produce inaccurate or harmful responses. Before
using, review the output for accuracy and safety. You assume responsibility for how the outcomes of
Einstein are applied to your organization.


## See Also

Salesforce Help: Einstein Generative AI & Trust


Update the Status of a Manual Verification Request

You can mark the status of a manual verification request as Pending, Completed, Error, or Partial,
depending on the business use case.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with AFLS or Health Cloud


USER PERMISSIONS NEEDED

To update verification requests:                      Manage Pharmacy Benefits Verification permission
set


1. To access the Care Benefit Verify Request record page, on the care program enrollee records, on the
Pharmacy Benefits Verification tab, click the verification request ID link.

<!-- page:1145 -->



2. Next to Status, click the Edit icon.
3. Select the appropriate status.
4. Save your changes.
The request status on the care program enrollee record page is updated.


Note For an electronic verification request, the status of a care benefit verify request records gets
updated automatically.


To monitor the progress of all the benefits verification requests, go to the Care Benefit Verify Request list
view and filter the records based on the status field. The status field serves as a single source of truth for
all the manual and electronic verification requests.


Use Pharmacy Benefits Reverification

Pharmacy Benefits Reverification checks a patient's eligibility for pharmacy benefits, ensuring continuous
and correct coverage for their medications. The process helps insurance providers save time and
resources by streamlining the reconfirmation of pharmacy benefits for patients in care programs.
Reverifying benefits controls costs for both providers and patients by confirming that coverage is
necessary and used correctly.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


Automating the entire pharmacy benefits reverification process reduces manual work for patient services
reps and accelerates the process. This automation makes the reverification process more cost-efficient
and less prone to errors, which ensures that patients can access all of their benefits in a timely manner.


## Generate Benefits Reverification Requests

Program leads can use a screen flow to initiate a pharmacy benefits reverification request. The flow
collects important reverification information and generates a list of new benefits verification records.
Patient services reps can use the shared list or the records assigned to them to reverify the pharmacy
benefits of care program enrollees.
How Reverification Automation Works
Pharmacy benefits reverification automation saves time and resources of pharmaceutical companies
by streamlining patient benefit updates. Automation helps control expenses and prevent fraud for
both providers and patients, so that continuous, accurate, and cost-effective pharmacy benefits are
provided through electronic and manual verification processes.
Explore Various Scenarios in Reverification Automation
Discover the various scenarios that can occur within each step of the orchestrator, along with next

<!-- page:1146 -->



step.


Generate Benefits Reverification Requests

Program leads can use a screen flow to initiate a pharmacy benefits reverification request. The flow
collects important reverification information and generates a list of new benefits verification records.
Patient services reps can use the shared list or the records assigned to them to reverify the pharmacy
benefits of care program enrollees.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


USER PERMISSIONS NEEDED

To use flows:
Run Flows user permission

AND

Manage Flow user permission

AND

Customize Application user permission

AND

Modify All Data user permission

To use data processing engines:                       Data Pipelines Base User permission set


## To manage pharmacy benefits reverification

requests:                                             Manage Pharmacy Benefits Verification permission
set

AND

Access Patient Support Programs as a Program
Lead permission set


1. As a program lead, to run the Initiate Benefit Reverification screen flow, use the Reverify Pharmacy
Benefits action on the care program record.
2. Add the required data and click Next.

<!-- page:1147 -->




Note If the selected end date is today, only the records that existed before today’s date are
processed.

A notification appears to indicate that the pharmacy benefits reverification request is complete.
3. Manage new care benefit verify request records.
The records that are ready to reverify have a Pending status.
a. As a program lead, to send the records to patient services reps for processing, share a list view of the
pending records or assign pending requests directly to patient services reps.
b. As a patient services rep, access the shared list or the pending records assigned to you. Then open a
care program enrollee record and click the Benefits Verification tab. To adjust coverage benefits, in
the Benefit Summary section, click the Edit Benefits action and then edit the coverage benefits.

Note If the screen flow doesn’t create the care benefit verify request records you expect based on
the date range you specify, extend the end date of the date range by 1 or 2 days. For example,
instead of specifying January 10 as the end date, specify January 11 or January 12.

If issues such as network connectivity prevent the pharmacy benefits reverification request from being
completed, the new records show an Error status. To fix these records, change the status from Error to
Copy. This triggers the Copy Care Benefit Verify Request Fields flow, which creates required records
and updates the Authorized Prescription, Original Prescription, and Coverage Benefit fields in the new
records.


How Reverification Automation Works

Pharmacy benefits reverification automation saves time and resources of pharmaceutical companies by
streamlining patient benefit updates. Automation helps control expenses and prevent fraud for both
providers and patients, so that continuous, accurate, and cost-effective pharmacy benefits are provided
through electronic and manual verification processes.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


Here are the different stages of reverification automation.


Update Patient Personal and Healthcare Details

Updating a patient's personal and healthcare details is crucial for reverification automation. This
orchestration stage helps identify changes in a patient's personal and healthcare details and establishes
accurate, continuous pharmacy benefits.

- Send Email to Patient: This step waits for you to use Agentforce to send an email containing an

<!-- page:1148 -->



assessment URL to the patient. After you send the email and update the care benefit verify request
status to Pending Confirmation, the step is marked as Completed.
-   Wait for Patient Response: After you send the email to the patient, automation waits for their
response. After the patient responds, the Care Benefit Verify Request status is updated to Received
Confirmation and the step is marked as Completed.
-   Update Patient Details: This step waits for you to use Agentforce to update the patient's details based
on the responses received. After you update patient details, the care benefit verify request status is
updated to Ready For Verification and the step is marked as Completed.


Process Electronic Verification Request

This orchestration stage sends an electronic request to a clearing house to gather a patient’s benefit
details, validates the response for essential benefits, and then shares the benefits summary with a
healthcare professional (HCP).

- Initiate Electronic Verification Request: If the verification mode of the care benefit verify request
record is electronic, an electronic verification request is sent to a third-party clearing house. The third-
party clearing houses then connect with payors to get the latest benefits details such as Copay,
Coinsurance, and Life Time Maximum (LTM). The care benefit verify request status is updated to
Acknowledged upon acknowledgment from the clearing house. When a valid response is received
from the payor, the status is updated to Verified, and the step is marked as Completed.
-   Validate Essential Benefits: After receiving the response from the clearinghouse, the essential
benefits, such as Copay, Coinsurance, and LTM, are verified in the payor's response. If the payer's
response includes the essential benefits, the care benefit verification request status is updated to
Completed.
-   Send Email to Healthcare Professional: If all essential benefits are present in the payor's response, a
summary of the patient's benefit details is shared with the Healthcare Professional (HCP).


Process Manual Verification Request

If the verification mode of Care Benefit Verify Request is manual, or if the payor's response to an
electronic verification request is missing essential benefits, the automation proceeds with the manual
verification process.

- Send Email To Payor: An email with a secure assessment URL is sent to the payor to confirm the
patient’s latest benefits details.
- Wait For Payor Response: After sending the email to the payor, automation awaits a response from
the payor.
-   Validate Essential Benefits: If all essential benefits are present in the payer response, the care benefit
verification request is marked as Completed.
-   Send Email to Healthcare Professional: If all essential benefits are present in the payor's response, a
summary of the patient's benefit details is shared with the Healthcare Professional (HCP).


## See Also

Send Email Through Salesforce

<!-- page:1149 -->




## Configure Care Limit Type

Automate Complex Processes with Orchestrations
Agentforce for Pharmacy Benefits Reverification
Use Agentforce for Pharmacy Benefits Reverification


Explore Various Scenarios in Reverification Automation

Discover the various scenarios that can occur within each step of the orchestrator, along with next step.


**REQUIRED EDITIONS**


Available in: Lightning Experience

Available in: Enterprise and Unlimited Editions with the Health Cloud or AFLS license.
It's also available with these add-on licenses: Agentforce for AFLS or Agentforce for
Health Cloud, Flex Credits Metering, Agentforce Employee Agent, Einstein GPT Platform, Einstein GPT
Copilot, Einstein GPT Trust, Genie Data Platform Starter, and Einstein GPT Prompt Builder.


Stage Name                 Step Name                  Scenario                    Next Step

Update Patient Personal Send Email                    If you don't send an        Reach out to the patient
and Healthcare Details                                email by using              to get their latest
Agentforce within the       personal and healthcare
time frame set by your      details, and manually
Salesforce admin, the       reverify their benefits.
send email action is
timed out.


## Wait for Patient           If the patient doesn’t      Reach out to the patient

Response                   respond to the              to get their latest
assessment within the       personal and healthcare
time frame set by your      details, and manually
admin, the wait for         reverify their benefits.
patient response action
is timed out.


## Update Patient Details     If you don't update the     Update the patient's

patient details by using    latest personal and
Agentforce within the       healthcare details based
time frame set by your      on the responses
admin, the update           received.
patient details action is
timed out.


## When there’s no change Depending on your

in patient details and business use case,
the Update Details     either update the care

<!-- page:1150 -->




Stage Name                 Step Name                 Scenario                    Next Step


## button isn’t available in   benefit verify request

Agentforce.                 status to Completed, or
manually reverify
benefits.


## When the patient’s          Create a new

insurance details are       verification request
changed and the             based on the latest
Update Details button       details received in the
isn’t available in          patient's responses.
Agentforce.

Process Electronic         Initiate Electronic       If the automation fails     The care benefit verify
Verification Request       Benefits Verification     while connecting with       request status is
Request                   the clearing house.         updated to Error, and
the automation
proceeds with the
manual verification
process.


## When the clearing           The care benefit verify

house doesn't respond       request status is
within the time frame       updated to Timed Out,
set by your admin, the      and the automation
initiate electronic         proceeds with the
benefits verification       manual verification
request action is timed     process.
out.


## When the clearing           The care benefit verify

house can't process the     request status is
request and rejects it.     updated to Rejected,
and the automation
proceeds with the
manual verification
process.


## When MuleSoft can't      The care benefit verify

process the response     request status is
from the clearing house. updated to Error, and
the automation
proceeds with the
manual verification
process.

When MuleSoft can't         The care benefit verify

<!-- page:1151 -->




Stage Name                 Step Name                 Scenario                    Next Step


## send the request to the     request status is

clearing house because      updated to Error. Fix the
of the invalid              errors and retry the
credentials or request.     electronic verification.


## When MuleSoft can't         The care benefit verify

send the request to the     request status is
clearing house within       updated to Error. Create
the time frame set by       a new verification
your admin. This can        request based on the
happen due to invalid       latest details received in
credentials or requests.    the patient's response.


## Validate Essential        If the essential benefits   The care benefit verify

Benefits                  are missing from the        request status is
payor's response.           updated to Partial, and
the automation
proceeds with the
manual verification
process.


## When there’s an error       The care benefit verify

while validating            request status is
essential benefits.         updated to Verified.
Validate essential
benefits in the payor
response, and share the
patient’s benefits
summary with the
Healthcare Professional
(HCP).


## Send Email to             When there’s an error in    Share the patient’s

Healthcare Professional   sending the benefits        benefits summary with
summary email to HCP.       the HCP.

Process Manual             Send Email to Payor       When there’s an error in    Connect with the payor
Verification Request                                 sending an email with a     to get the latest benefits
secure assessment URL       details, and share the
to the payor to confirm     patient’s benefits
the patient’s latest        summary with the HCP.
benefits details.


## Validate Essential        If the essential benefits   The care benefit verify

Benefits                  are missing from the        request status is
payor's response.           updated to Partial.

# AFLS _ Partner Enablement Hands On Exercises_ Day 1 _ Foundations

*Converted from PDF documentation*

---

Hands-On Lab
Life Sciences
    Cloud
Hands-On Lab
Participant Instructions :
  Day 1 - Foundations
Welcome
                                    Welcome!




AFLS for Customer Engagement (AFLS4CE) is built natively on the same trusted
core Salesforce platform architecture of Sales & Service Cloud, leveraging the core
administrative toolset that has led us to become the #1 CRM today such as
profiles/permissions, flows and automations, custom objects, page layout creation, etc. Unlike
competitors who require re-platforming and separate ecosystems, AFLS acts as
a central engagement hub while maintaining data integrity through the same metadata, APIs,
and governance standards that power other core clouds, allowing organizations to extend
their existing Salesforce investments while accessing industry-specific capabilities like HCP
engagement, samples management, and compliant content delivery.


You will see in the following exercises that many of the tools and UI components you are
familiar with should look the same, with the addition of all the AFLS4CE enhancements and
industry investment Salesforce has made. With AFLS4CE, you have full control over your
CRM administration and do not need to contact Salesforce to make changes on users,
reports, permissions, etc.
Hands-on Session:
Login, best in a new incognito window in Google Chrome:




https://login.salesforce.com

Use the credentials that you received when signing up for the event specific org:
https://orgfarm.salesforce.com/signup
Salesforce Administration
Harbour Cruise
Salesforce Administration
Harbour Cruise
Before looking into AFLS specific administration, let’s
spend a few minutes in the underlying Salesforce administration, as
everything in AFLS depends on it, and what you
administer here also applies to Marketing and Service.


In this short segment, we’re looking at three items: Editing a page,
managing settings, and managing the data structure.



  1.​ Edit Page:
From the Gear icon to right, click Edit Page:
And you get to an editor where you can rearrange, customize the screen
layout to meet the business’ needs:
   2.​ Setup:
With the same gear icon, you can also get to the setup menu, where
you can manage the environment:
  -​   User Management, this is where Admins, PSP, MSL, Dia, … get
       different profiles and permissions,
  -​   gmail integration
  -​   Apps: AFLS Medical, AFLS Commercial, KAM, backoffice,
       management, …
  -​   Feature Settings:
         -​ Life Sciences, Benefits Verification
         -​ 4CE: Territory, and more
  -​   Data Cloud (Adobe, AWS, Snowflake, …)
  -​   Einstein: Agents, Prompt Builder, …
  -​   Process: Flows
  -​   UI
  -​   Security
  3.​ Data Structure
Data in Salesforce is defined as Objects (like an Account, an Account
Plan, a Call) and Fields (First Name, Date/Time, …). These are
interconnected, for example, in a “Call”, one of the fields is “Account” as
a pointer (Lookup) with which HCP the PJP had a meeting with.
In the Object Manager view and manage data structure:




Everyone explore a few minutes and take some questions
AFLS Admin
Harbour Cruise
AFLS Admin
Harbour Cruise
We’ve already looked at some salesforce platform administration and
are going to deeper dive very soon into:
  -​   Intelligent content management
  -​   Consent management
  -​   Sample
  -​   Territory


So, if that will be a deep dive, let me first take you on a snorkel tour
across eight other important elements of AFLS administration from the
Admin Console Tab:

Activity timeline settings
Email Templates




List and Filters
Mobile




Products, Hierarchies, Territories
Quick Actions




Rating
Remote Management
Hands on Exercise
Hands on Exercise
Territory Alignment
Company Profile

Makana Pharma is a mid-sized, high-growth biotech company specializing in autoimmune and
rare diseases. Their flagship product, Immunexis, is a breakthrough immunotherapy treatment
entering a highly competitive market. With a lean field force and high compliance scrutiny,
Makana relies on data-driven interactions to maximize the impact of every Healthcare
Professional (HCP) meeting.

The Team

   ●​ Stakeholder (Requester): Evan Rossi, Director of Commercial Operations. He is
      responsible for ensuring that the latest approved marketing assets are available to the
      field and needs granular data on how those assets are performing during calls.
   ●​ End User (Persona): Evan Casto, autoimmune disease Sales Representative. He
      conducts high-stakes detailing with rheumatologists and needs seamless access to
      interactive HTML5 content on his iPad, without worrying about version control or internet
      connectivity.

The Scenario

Makana Pharma is preparing for the Q3 push of Immunexis. The marketing agency has
delivered a new, high-fidelity HTML5 interactive detail aid and a set of clinical PDF reprints.
Currently, the field team is struggling because they cannot easily access these new materials in
a structured flow, nor can they access them offline during hospital visits where Wi-Fi is spotty.

Evan Rossi has flagged a critical risk: without a proper Closed Loop Marketing (CLM) setup, the
team is "flying blind." They are sending content via unmonitored channels, and Marketing has
no visibility into which slides are actually being shown to doctors. He needs the System
Integrator to configure Intelligent Content to centralize asset management, ensure compliance,
and enable offline playback.
The Business Challenge

   ●​ Lack of Engagement Visibility: Without proper setup, Makana cannot track critical
      metrics such as "time on slide" or HCP sentiment, leaving Marketing unable to refine
      strategies based on actual field usage.
   ●​ Compliance & Version Control Risk: If reps use outdated files stored locally on their
      devices, Makana risks regulatory fines; the system must automatically deactivate old
      versions and enforce mandatory slides.
   ●​ Inefficient Targeting: Without mapping content to specific territories, reps are
      overwhelmed by irrelevant content, rather than seeing tailored presentations specific to
      the Immunexis autoimmune disease territory.




The Enablement Goal

To resolve these challenges, you - the System Integrator must perform the following
configuration steps in the Admin Console:

   ●​ Configure Presentation Settings: Navigate to the Intelligent Content settings to define
      how the player behaves, including enabling "Create custom presentations" for specific
      profiles and configuring Tracking Settings to capture GPS location and pause tracking
      during training.
   ●​ Upload and Structure Pages: Use the Upload New Pages feature to ingest the
      agency's ZIP (HTML5) and PDF files, ensuring that Products and Messages are linked
      to each specific page for reporting accuracy.
   ●​ Define Presentation Logic: Create the parent Presentation record, sequence the
      uploaded pages, and configure Mandatory flags for compliance slides (e.g., Safety
      Information) to ensure they cannot be skipped.
   ●​ Distribute to Territories: execute the Distribute to Territories workflow to map the
      "Immunexis Q3 Deck" to the autoimmune disease territory hierarchy, ensuring only the
      relevant field force sees the content in their library.
   ●​ Activate and Target: Set the Activation Date for the presentation and update Provider
      Account Territory Info records with Source System IDs to ensure the presentation is
      targeted to the correct accounts
Product Management
Scenario Background

Business Use Case Makana Pharma is preparing for the commercial launch of its
breakthrough immunotherapy treatment, Immunexis. The Director of Commercial Operations,
Evan Rossi, requires field sales representatives, like Evan Casto, to send essential follow-up
clinical data immediately after a visit. Currently, reps are utilizing personal email accounts, which
bypasses legal review and tracking, creating compliance risk and preventing the activity from
being logged on the customer’s 360-degree view in the CRM.

The Challenge

 The primary challenge is to implement a solution that offers strict control over the approved
branding and core safety text while still providing enough flexibility for reps to personalize their
greetings using pre-approved HTML content blocks known as Fragments. This system must
centralize tracking, monitor compliance, and ensure all sent communications are recorded as a
LifeScienceEmail object.

The Enablement Goal

Configure the Field Email module to enable Marcus to send a pre-approved "Immunexis
Follow-Up" template, allowing him to insert a Fragment but preventing him from altering the core
medical content. The template must be distributed solely to his specific sales territory, ensuring
proper content access control.
Session Hands-on Guide
These exercises would be completed during
the Hands on Session. Use the topic specific
tabs
Territory Alignment
              Territory Alignment
Makana Pharma is preparing for the launch of Immunexis and transitioning from a broad,
region-based sales model to a precise, code-based territory hierarchy in Salesforce Life
Sciences Cloud. To support the West Coast pilot, the Operations team must validate the existing
territory structure, ensure the correct users are aligned, and configure automated assignment
logic for both geographic and affiliation-based territory alignment.


Scenario
As part of the launch preparation, Sales Operations has identified several configuration gaps in
the current setup:

   1.​ Hierarchy Validation – The territory model and the detailed branch for the San
       Francisco market already exist in the system, but must be validated to ensure the nodes
       are properly structured down to the leaf-level territory:​
       ​
        AFLS Territory Model → RD – West 20D → DM – San Francisco 20D02 → TM – SPC
       – San Francisco North 20D02T11​

   2.​ User Setup Needed – The three field roles participating in the exercise—Field Sales
       (Evan Casto), Key Account Management (Marvin Barrett), and Field Medical (Akshay
       Carter)—must each be confirmed, updated, and successfully logged in to ensure the
       team can access their assigned territory.​

   3.​ Missing Automated Assignment Logic – Basic geographic assignment rules need to
       be configured so hospitals in San Francisco (e.g., Zip 94016) are automatically aligned
       to the correct TM node. In addition, affiliation-based alignment is required so that HCPs
       like Dr. Lucas Grant, whose practice address is outside the territory, are still aligned
       based on where they treat patients.​

   4.​ Scalability Need – Manual assignment is no longer viable as Makana scales to a
       national model. Territory Alignment Rules must be used to automate the alignment of
       Accounts (HCO/HCP) to the correct territory.


Enablement Goal
This exercise focuses on configuring the Territory Management capabilities in Life Sciences
Cloud to support accurate and automated account alignment:

   ●​ Hierarchy Validation: Confirm the structure of the AFLS Territory Model and ensure the
      San Francisco North 20D02T11 leaf node is correctly positioned.
   ●​ User Alignment: Assign and activate three users—Evan, Marvin, and Akshay—within
      the leaf territory.
   ●​ Geo Alignment Rule: Establish a Zip-to-Territory rule to automatically align Bay Area
      General Hospital.
   ●​ Affiliation-Based Alignment: Configure an affiliation rule to align Dr. Lucas Grant to the
      territory based on his hospital affiliation instead of his mailing address.
   ●​ Assignment Execution & Verification: Run the assignment jobs and verify that the
      correct Accounts appear for each aligned user.​



Prerequisites
Before beginning the exercise, ensure the following are available in your training environment:

   ●​ Sales Territories are enabled in Setup.
   ●​ Territory Model and all nodes—including TM – SPC – San Francisco North
      20D02T11—already exist.
   ●​ Three templated users exist and can be edited:
          ○​ Evan Casto – Field Sales Rep
          ○​ Marvin Barrett – Key Account Manager
          ○​ Akshay Carter – Field Medical
   ●​ You can access the Life Sciences Commercial app.​



Metadata Cache Generation
To speed up the metadata cache generation process for the workshop ensure that you have
enabled “Skip validation” for the Admin profile. ​
​
Here is a step by step process on how to do this:



Step 1: Create a clone of the Life Sciences Commercial Admin Permission set that is available
OOTB​
​
                                                                                            ​
Step 2: Click on the System Permissions and then click edit




                                                                                            ​
Step 3: Search for “Skip Validations before Metadata Generation” and enable it. Save the
changes​
​




Step 4: Assign the Permission set to the Admin user​
​




Step 5: While generating metadata cache, use the “Skip validation” option to speed up the
generation process for workshop
Step-by-Step Configuration
Step 1: Confirm the Territory Hierarchy

  1.​ Log in to your Salesforce Org as an Administrator.
  2.​ Navigate to Setup and search for Territory Models.
  3.​ Explore the current territory model
         ○​ Validate the AFLS Territory Model exists
         ○​ Click View Hierarchy
                  i.​ Explore the territory hierarchy as you see fit, but we will validate one
                      specific branch
         ○​ Click the + sign next to RD - West 20D
         ○​ Click the + sign next to DM - San Francisco 20D02
         ○​ Click the + sign next to TM - SPC - San Francisco North 20D02T11
                  i.​ Notice that this is the leaf node as there are no child territories beneath
Step 2: Prepare our Users

We will ensure the users needed for our exercises are assigned to a territory.

   1.​ Continuing from the previous step, open the TM - SPC - San Francisco North 20D02T11
       territory record detail page.
   2.​ Scroll to the Assigned Users related list.




   3.​ Validate the following users are assigned to the territory:
           a.​ Evan Casto - this will be our Field Sales Rep
           b.​ Marvin Barrett - this will be our Key Account Manager
           c.​ Akshay Carter - this will be our Field Medical user
   4.​ Click Evan Casto
  5.​ Click Edit.
          a.​ Validate the Profile is set to Field Sales Representative
  6.​ Update the Email to a valid email address that you can access
          a.​ This will be needed to validate the user and set a new password
  7.​ Update the Username to a personalized user name you want to log in with
  8.​ Scroll down to Generate new password and notify user immediately
  9.​ Click Save
  10.​Upon receiving the verification email, set a password and security question answer if
      prompted.
          a.​ This user name and password will also be used to log into the AFLS mobile app
  11.​Repeat steps 4-11 for Marvin Barrett and Akshay Carter
          a.​ Validate that Marvin Barrett has the Key Account Manager profile
          b.​ Validate that Akshay Carter has the Field Medical profile
  12.​Log into web and the iPad mobile app with each of the users to verify access

Step 3: Create some Test Account Data

  1.​ Navigate to the Accounts tab in the Life Sciences Commercial app
  2.​ Create Bay Area General Hospital
         a.​ Click Advanced Search




         b.​ In the modal that appears, select HCO - Search Healthcare Organization
             (HCO) Accounts
         c.​ Click Next
         d.​ In the Account Name field, enter Bay Area General Hospital
         e.​ Ignore the other fields and click Search
                 i.​ No results should be returned; ignore any errors
         f.​ Click Create Account
         g.​ Select Health Care Organization as the record type
         h.​ Click Next
                 i.​ Ignore any errors
         i.​ Make sure the Account Name has the full name of Bay Area General Hospital
       j.​ Select Hospital as the Provider Type
       k.​ For the Address and Sample Eligibility section:
               i.​ Name = Bay Area General Hospital Main Address
               ii.​ Address = 123 Main Street
               iii.​ City = San Francisco
               iv.​ State = California
               v.​ Zip/Postal Code = 94016
               vi.​ Is Primary = checked
       l.​ Click Create Account
               i.​ You will be taken to the account record page after successful creation
3.​ Create Dr. Lucas Grant
       a.​ Navigate back to the Accounts tab and click Advanced Search
       b.​ In the modal that appears, select HCP - Search Healthcare Provider (HCP)
           Accounts
       c.​ Click Next
       d.​ In the Account Name field, enter Lucas Grant
       e.​ Ignore the other fields and click Search
               i.​ No results should be returned; ignore any errors
       f.​ Click Create Account
       g.​ Select Health Care Provider as the record type
       h.​ Click Next
               i.​ Ignore any errors
       i.​ Make sure the First Name = Lucas and Last Name = Grant
       j.​ Select Medical Doctor as the Provider Type
       k.​ For the Address and Sample Eligibility section:
               i.​ Name = Lucas Grant Main Address
               ii.​ Address = 123 Main Street
               iii.​ City = Beverly Hills
               iv.​ State = California
               v.​ Zip/Postal Code = 90210
               vi.​ Is Primary = checked
       l.​ Click Create Account
               i.​ You will be taken to the account record page after successful creation
4.​ Create an Affiliation between Dr. Lucas Grant and Bay Area General Hospital
       a.​ Access Lucas Grant’s account if not already on the record page
       b.​ Click the Affiliations tab
           c.​ Click New
                   i.​ Related Account = Bay Area General Hospital
                   ii.​ Role = Affiliated Practice-Doctor-AAR
                   iii.​ Affiliation Type = Hard
                   iv.​ Click Save

Step 4: Configure Geographic Assignment Rules

Automate the assignment of the Hospital based on location.

   1.​ Navigate to the App Launcher and search for Territory Geo Assignment Rules




   2.​ Click Territory Geo Assignment Rules
   3.​ Click New
           ○​ Territory = TM - SPC - San Francisco North 20D02T11
           ○​ Usage Type = Life Sciences
           ○​ Geocode Type = Zip to Territory
           ○​ Geocode = 94016
           ○​ Effective Start Date = 12/1/2025
           ○​ Click Save


Step 5: Configure Affiliation-Based Alignment

Solving the "Dr. Grant Problem." We need to pull him into the territory because he works at the
hospital, even though he lives elsewhere.

   1.​ Navigate to the App Launcher and search for/type Provider Affiliations
2.​ Click Provider Affiliations




3.​ In the List View drop-down, select All Provider Affiliations
4.​ Observe some sample records, specifically the Role values.
        ○​ The Roles in the Provider Affiliation data need to match the setup in the Affiliation
            alignment rule
5.​ Go into Salesforce Setup
6.​ Go to Object Manager and search for Provider Affiliation
7.​ Click on Fields and Relationships within the Provider Affiliation object
8.​ Locate and click the Role field




9.​ Copy the Affiliated Practice-Doctor-AAR value
10.​Stay within Object Manager and search for Territory Provider Affiliation Alignment
    Rule
11.​Click on Fields and Relationships within the Territory Provider Affiliation Alignment
    Rule object
12.​Locate and click the AffiliationRole field
13.​Scroll down to AffiliationRole Picklist Values and Click New




14.​Paste the Affiliated Practice-Doctor-AAR value
15.​Click Save
16.​Navigate to the App Launcher and select the Life Sciences Commercial app.
17.​Click on the Admin Console tab
        ○​ NOTE: Add this tab to your navigation bar for quick access if it is not already
           there
18.​Click on the Territories tile




19.​Click on Affiliation Rules in the left navigation menu
20.​Click New
21.​Search for TM - SPC - San Francisco North 20D02T11 in the territory hierarchy
22.​Uncheck Apply rule to child territories
        ○​ Note: We are doing this because we are at a leaf node. If this were higher up in
            the hierarchy, we could have this checked.
23.​For Account Type, select Health_Care_Provider as an option
24.​For Affiliation Role, select Affiliated Practice-Doctor-AAR
25.​For Specialty, we will leave this blank for this exercise, but a specialty can be selected
    that runs this rule and aligns only accounts having the defined specialty.
26.​Click Submit.
          ○​ The rule will be saved and will be run in the next step

Step 6: Execution – Run Assignment Rules

Rules are useless until the engine processes them.

   1.​ Navigate back to the Territories tile in the Admin Console
   2.​ Click Territory Management Jobs in the left navigation menu




   3.​ Click Run Now for the Align Zip Code to Territory job
           ○​ NOTE: Affiliation alignment rules run automatically immediately following one of
               the 3 main jobs (zip code, brick or account alignment)
   4.​ Wait for the email confirmation or the batch job to complete.


Verification/Check

Log in as Evan Casto to both web and mobile.

   1.​ Log into Web
          ○​ Does the Territory Switcher in the bottom left utility bar display TM - SPC - San
              Francisco North 20D02T11?
          ○​ Navigate to Accounts. Do you have access to Bay Area General Hospital and
              Lucas Grant?
   2.​ Log into Mobile
          ○​ Tap the user initials in the top right of the app
          ○​ Does the Territory display TM - SPC - San Francisco North 20D02T11?
          ○​ Navigate to the Accounts tab and search for Bay Area General Hospital and
              Lucas Grant. Are they available?
   3.​ Repeat these steps as the Marvin Barrett and Akshay Carter users
Product Management
          Product Management
Makana Pharma is approaching the commercial launch of Immunexis and must ensure that
Salesforce AFLS is configured to support a clean, compliant, and focused product
experience for the field. The current environment contains a broad and unstructured product
catalog, making it difficult for Specialty Representatives to identify the correct products during
visits. Additionally, some hospital systems, such as Bay Area General Hospital, have not yet
approved Immunexis for promotion, creating significant compliance considerations.

To support a successful launch, Sales Operations must standardize product hierarchy, align
products to the appropriate territories, configure product guidance, and ensure that restricted
accounts prevent off-label or premature promotion.


Scenario
As part of launch readiness, key challenges have been identified:

   1.​ Unstructured Product Catalog – Reps currently see Makana’s full portfolio of products
       in their app, rather than the few products relevant to their specialty. This creates
       confusion, slows call reporting, and increases the risk of promoting the wrong item.​

   2.​ Missing Hierarchy & Record Types – The Product and Product Specification record
       types required for Samples and Marketing Items must be created, mapped correctly, and
       enabled within the Product Hierarchy.​

   3.​ Incorrect or Missing Product Alignment – Immunexis and its sample (Immunexis
       50mg) must be aligned only to territories in Autoimmune Disorders—specifically the
       territory assigned to Evan Casto (TM – SPC – San Francisco North 20D02T11).​

   4.​ Lack of Direction for Field Reps – Immunexis needs to be prioritized as the top
       product within Evan’s territory, supported by a clear Product Message and Objective.​

   5.​ Compliance Gaps – Bay Area General Hospital has not approved Immunexis yet.
       Without an Account Product Restriction, a rep could accidentally detail the drug,
       exposing the organization to compliance risk.​



Enablement Goal
This exercise will guide you through configuring Product Management capabilities within Life
Sciences Cloud to support a compliant launch of Immunexis:

   ●​ Product Configuration: Create and map Product and Product Specification record
       types for Samples and Marketing Items.​

   ●​ Product Hierarchy Setup: Place Immunexis under the Autoimmune Disorders hierarchy
      and add the sample product Immunexis 50mg.​

   ●​ Product Territory Alignment: Assign Immunexis 50mg to the TM – SPC – San
      Francisco North 20D02T11 territory.​

   ●​ Product Alignment Job: Understand when the alignment job is needed and how it
      processes upstream data.​

   ●​ Messages & Objectives: Create the Immunexis launch message and associated
      objective to guide rep conversations.​

   ●​ Territory Product Priorities: Ensure Immunexis ranks as the highest-priority product for
      Evan’s territory.​

   ●​ Account Product Restrictions: Prevent Immunexis from being detailed at Bay Area
      General Hospital.​



Prerequisites
Before beginning the exercise, ensure the following are available in your training environment:

   ●​ Sales Territories are enabled in Setup.
   ●​ Territory Model and all nodes—including TM – SPC – San Francisco North
      20D02T11—already exist.
   ●​ Three templated users exist and can be edited:
          ○​ Evan Casto – Field Sales Rep
          ○​ Marvin Barrett – Key Account Manager
          ○​ Akshay Carter – Field Medical
   ●​ You can access the Life Sciences Commercial app.




Step-by-Step Configuration
Step 1: Product Configuration
   1.​ Log in to your Salesforce Org as an Administrator.
   2.​ Navigate to the App Launcher and select the Life Sciences Commercial app.
   3.​ Click on the Admin Console tab
           ○​ NOTE: Add this tab to your navigation bar for quick access if it is not already
               there
4.​ Click on the Products tile




5.​ Create Product Record Types
       ○​ Click Go To Product Record Types




       ○​ If they do not already exist, create 2 new product record types for 1) Sample and
           2) Marketing Item
       ○​ Assign both to the System Administrator and Field Sales Representative
           profiles
       ○​ Apply page layouts to the record types. Note: New page layouts would need to
           be created if you want different assignments
6.​ Create Product Specification Record Types
       ○​ Click Go To Product Specification Record Type
          ○​ If they do not already exist, create 2 new product specification record types for 1)
              Sample and 2) Marketing Item
          ○​ Map the Sample and Marketing Item record types you created in the previous
              step to the LSSampleProduct and LSPromotionalItem, respectively.
          ○​ Ensure IsCommercial is checked
   7.​ Optionally, set the Product Hierarchy Display Type and Create a Field for Additional
       Product Details
          ○​ Note: This settings only affect the behavior of the Admin Console display


Step 2: Create a Product and Define the Product Hierarchy
Option 1 (via Admin Console)
   1.​ Click on the Admin Console tab
   2.​ Click on the Products tile
   3.​ Click on Product Hierarchy in the left navigation menu
   4.​ Search for Immunexis in the Product Hierarchy
           ○​ Note: It should be child to Autoimmune Disorders
   5.​ Click on Immunexis and observe the information appear in the far-right pane
   6.​ Create a new child Sample Product
           ○​ Click Add Child Product
           ○​ Product Name: Immunexis 50mg
           ○​ Type: Product
           ○​ Create the related Product2 record:
                  i.​ Click in the Product lookup
                  ii.​ Click + New Product
                  iii.​ Select the sample record type you created in Step 1
                  iv.​ Product Name: Immunexis 50mg
                  v.​ Active: Checked
                  vi.​ Click Save
           ○​ Start Date: Needs to be filled with a valid value (Example: 1/1/2025)
           ○​ Parent Product: Immunexis
           ○​ Parent Brand Product: Immunexis
           ○​ Active: Checked
           ○​ Distribution Method: Drop and Ship
           ○​ Is Available For Sampling Allocation: Checked
           ○​ Min Sample Order Quantity: Enter a positive number
           ○​ Max Sample Order Quantity: Enter a positive number greater than Min Sample
              Order Quantity
           ○​ Click Save



Option 2 (via Life Science Marketable Product object tab)
   1.​ Navigate to the App Launcher and select the Life Science Marketable Products
       object
           ○​ NOTE: Add this tab to your navigation bar for quick access if it is not already
              there




   2.​ Create a new sample product
          ○​ Click New
          ○​ Product Name: Immunexis 50mg
           ○​ Type: Product
           ○​ Create the related Product2 record:
                  i.​ Click in the Product lookup
                  ii.​ Click + New Product
                  iii.​ Select the sample record type you created in Step 1
                  iv.​ Product Name: Immunexis 50mg
                  v.​ Active: Checked
                  vi.​ Click Save
           ○​ Start Date: Needs to be filled with a valid value (Example: 1/1/2025)
           ○​ Parent Product: Immunexis
           ○​ Parent Brand Product: Immunexis
           ○​ Active: Checked
           ○​ Distribution Method: Drop and Ship
           ○​ Is Available For Sampling Allocation: Checked
           ○​ Min Sample Order Quantity: Enter a positive number
           ○​ Max Sample Order Quantity: Enter a positive number greater than Min Sample
               Order Quantity
           ○​ Click Save
   3.​ Validate the hierarchy in Admin Console:
           ○​ Click on the Admin Console tab
           ○​ Click on the Products tile
           ○​ Click on Product Hierarchy in the left navigation menu
           ○​ Search for Immunexis 50mg in the Product Hierarchy
                  i.​ Note: It should be child to Autoimmune Disorders -> Immunexis


Step 3: Setup Product Territory Alignment
Ensuring the right product reaches the right territory (David Chen acting on Maria's
requirements).
   1.​ Click the Admin Console tab in the navigation bar
   2.​ Click on the Products tile
   3.​ Click on Product Alignment in the left navigation menu
4.​ Search for Immunexis 50mg in the product hierarchy
5.​ Click on Immunexis 50mg and align it to the TM - SPC - San Francisco North 20D02T11
    territory:
         ○​ Search for TM - SPC - San Francisco North 20D02T11
               i.​ Align explicitly by checking the territory directly
               ii.​ Align via inheritance by checking the territory’s direct parent or higher
                    (E.g. DM - San Francisco 20D02 or RD - West 20D
      Pro Tip: Click in the info icon to the right of Territory Alignment to access the
      legend and understand what the different checkbox states mean.


Step 4: Execute the Product Alignment Job (NOT REQUIRED)

Product–territory alignments are typically maintained in an upstream territory management
system, with the results loaded or integrated into AFLS. In these scenarios, records are brought
into the Product Territory Availability object in Draft status. AFLS then provides a job that flattens
these alignments into the Product Territory Detail Availability object to support proper
downstream behavior. This process effectively bridges configuration to execution.
NOTE: When changes to product alignments are made directly in the Admin Console,
they are processed immediately and the job does not need to be run. The job only applies
to data loaded in.

   1.​ Click the Admin Console tab in the navigation bar
   2.​ Click on the Products tile
   3.​ Click on Product Alignment Jobs in the left navigation menu




   4.​ Click Run Now
   5.​ Monitor the job status to ensure it completes successfully.


Step 5: Create Product Messages and Objectives
Solving "Lack of Focus" by guiding the Rep's conversation.
Option 1 (via Admin Console)
   1.​ Click on the Admin Console tab
   2.​ Click on the Products tile
   3.​ Click on Product Hierarchy in the left navigation menu
   4.​ Search for Immunexis in the Product Hierarchy
           ○​ Note: It should be child to Autoimmune Disorders
5.​ Click on Immunexis and observe the information appear in the far-right pane
6.​ Scroll to observe any pre-existing Messages and/or Objectives
7.​ Create a new Product Message
        ○​ Scroll down to the end of the Messages list
        ○​ Click Add




       ○​ Name: Immunexis Message <#> (replace <#> with an appropriate number)
       ○​ Content Text: Delivers rapid and sustained symptom relief, with up to 60%
           improvement in joint pain and swelling by Week 12.
       ○​ Effective Start Date: Jan 1, 2025
       ○​ Effective End Date: Dec 31, 2025
       ○​ Priority: Any number
       ○​ Group Name: Optional, enter a group name which will impact display in the
           Visit/Call screen
       ○​ Group Sequence Optional, enter a number which will impact order of display
           within the group in the Visit/Call screen
       ○​ Reactions: Positive;Neutral;Negative
               i.​ NOTE: Use any desired values, just ensure they are separated via
                   semi-colon
       ○​ Hide Reactions: Unchecked
       ○​ Click Save
8.​ Create a new Product Objective
       ○​ Scroll down to the end of the Messages list
       ○​ Click Add




        ○​ Name: Immunexis Objective <#> (replace <#> with an appropriate number)
        ○​ Content Text: Discuss new 5-year survival data.
        ○​ Click Save
9.​ Align messages & objectives to a territory
        ○​ Staying in Admin Console, click Product Alignment in the left navigation menu
        ○​ Click on the Products tile
        ○​ Click on Product Hierarchy in the leftmost content menu
        ○​ Search for Immunexis in the Product Hierarchy
               i.​ Note: It should be child to Autoimmune Disorders
           ○​ Click on Immunexis and observe the Territory Hierarchy appear
           ○​ Search for TM - SPC - San Francisco North 20D02T11 in the Territory Hierarchy
           ○​ Click on TM - SPC - San Francisco North 20D02T11 and observe the Messages
              and Objectives appear in the far-right pane
           ○​ Locate the product message and product objective created previously and click
              the checkbox to make them available to the territory




Option 2 (via Life Science Marketable Product object tab)

When Message and Objective manually via the record form (outside of Admin Console) or
loaded from an external system, they need to be shared with the territory(ies) that should have
access. Note the additional steps in this option.​

   1.​ Navigate to the App Launcher and select the Life Science Marketable Products
       object
           ○​ NOTE: Add this tab to your navigation bar for quick access if it is not already
              there
2.​ Search for/locate the Immunexis product and click on it to access the record detail page
3.​ Click the Related tab and locate the Product Guidances related list




4.​ Create a new product message
       ○​ Click New
              i.​ Name: Immunexis Message <#> (replace <#> with an appropriate
                    number)
              ii.​ Product Reference Record: will be defaulted to Immunexis
              iii.​ Type: Message
              iv.​ Priority: Any number
              v.​ Content Text: Delivers rapid and sustained symptom relief, with up to
                    60% improvement in joint pain and swelling by Week 12.
              vi.​ Effective Start Date: Jan 1, 2025
              vii.​Effective End Date: Dec 31, 2025
       viii.​Active = checked​
             ​
             NOTE: If the following fields are not visible on the page layout, they can
             be added by editing the page layout. (Setup -> Object Manager ->
             Product Guidance -> Page Layouts -> Product Guidance Layout)




      ix.​ Group Name: Optional, enter a group name which will impact display in
            the Visit/Call screen
      x.​ Group Sequence Optional, enter a number which will impact order of
            display within the group in the Visit/Call screen
      xi.​ Reactions: Positive;Neutral;Negative
                1.​ NOTE: Use any desired values, just ensure they are separated via
                    semi-colon
      xii.​Hide Reactions: Unchecked
      xiii.​Click Save
○​ Share the product message
      i.​ Click the Sharing action in the record action’s list
ii.​ In the Sharing screen, select Territory (or Territory and Subordinates)




iii.​ Ensure that it either the TM - SPC - San Francisco North 20D02T11
      territory or one of its hierarchical parents is selected




iv.​ Access Level can be kept as Read Only
v.​ Click Save
   5.​ Create a new product objective
           ○​ Click New
                   i.​ Name: Immunexis Objective <#> (replace <#> with an appropriate
                         number)
                   ii.​ Product Reference Record: will be defaulted to Immunexis
                   iii.​ Type: Objective
                   iv.​ Content Text: Discuss new 5-year survival data.
                   v.​ Click Save
                   vi.​ Repeat the Sharing process for the objective
   6.​ Validate in Admin Console
           ○​ Click on the Admin Console tab
           ○​ Click on the Products tile
           ○​ Click on Product Hierarchy in the left navigation menu
           ○​ Search for Immunexis in the Product Hierarchy
                   i.​ Note: It should be child to Autoimmune Disorders
           ○​ Click on Immunexis and observe the information appear in the far-right pane
           ○​ Scroll to observe the Messages and/or Objectives you created and that they are
               checked


Step 6: Set a Territory’s Product Priorities
Solving "Lack of Focus" by guiding the Rep's conversation.
   1.​ Click on the Admin Console tab
   2.​ Click on the Products tile
   3.​ Click on Territory Products in the left navigation menu
   4.​ Search for TM - SPC - San Francisco North 20D02T11 in the Territory Hierarchy
   5.​ Click on Immunexis and observe the information appear in the far-right pane




   6.​ Set Territory Priority:
           ○​ Order the products in any way desired, but make sure Immunexis is at the top of
              the list (i.e. first/highest priority)
           ○​ Click Save.



Step 7: Configure Account Product Restrictions
Solving "Compliance Risk" for Bay Area General Hospital.
   1.​ Navigate to the App Launcher and select Life Science Product Account
       Restrictions.
   2.​ Click New.




   3.​ Enter the restriction rule details to protect Evan and Makana Pharma:
           ○​ Account: Bay Area General Hospital
           ○​ Product: Immunexis
                  i.​ Make sure Life Sciences Marketable Product is selected as the target
           ○​ Territory: TM - SPC - San Francisco North 20D02T11
                  i.​ Note: Territory is optional. If left blank, the restriction will apply to all
                       territories/users
   4.​ Click Save.



Verification
NOTE: In mobile, make sure to do a sync prior to testing

   1.​ Log in as User: Evan Casto
   2.​ Navigate to the Visits or Accounts tab.
   3.​ Test 1: Priority Check
          ○​ Open an Account other than Bay Area General Hospital.
       ○​ Start a New Visit.
       ○​ Verify: Is Immunexis visible in the product section? Is it listed first? Does it
           display the message "Delivers rapid and sustained symptom relief, with up to
           60% improvement in joint pain and swelling by Week 12"? Is Discuss new 5-year
           survival data available to add as a next visit objective?
4.​ Test 2: Compliance Check
       ○​ Navigate to the Bay Area General Hospital account.
       ○​ Start a New Visit.
       ○​ Verify: Search for Immunexis in the product detail section. The product should be
           hidden or greyed out with a restriction icon, preventing selection.
License Management
          License Management
Background
Makana Pharma is a leading biopharmaceutical company in the midst of its critical launch for
Immunexis, a new specialized autoimmune disorder treatment. Adherence to compliance
regulations, especially around sampling, is non-negotiable.


Scenario
The Immunexis launch is in full swing, but Marcus Thorne (VP of Sales Operations) is
alarmed. He just learned of a "near miss" where a rep in another territory almost provided
samples to a Health Care Professional (HCP) whose state medical license had expired. This
would be a multi-million dollar fine and a major regulatory violation.

This "Compliance & Data Decay" problem is his #1 priority. He needs a systemic, visual,
unmissable check in the system to protect his reps, like Evan Casto, from making a simple but
catastrophic mistake. He wants a clear, dynamic icon to show "Valid" or "Invalid" wherever a
license is displayed.


Personas
   ●​ Marcus Thorne: VP of Sales Operations (The Stakeholder)
   ●​ Evan Casto: Specialty Sales Representative (The End-User)
   ●​ You: The SI Technical Consultant (The Admin/Implementer)


User Story
As a Sales Operations Implementation Consultant, I need to configure HCP License
Management to display clear, dynamic visual warnings based on custom logic, so that Evan
Casto is prevented from sampling an HCP with an invalid license, ensuring 100% compliance
during his visits.


Enablement Goal
We need to configure the License Management features to solve this:

   ●​ Create a custom Formula Field (Checkbox type) on the Business License object to
      define Makana's specific logic for a "valid" license.
   ●​ Navigate to the Admin Console > License Management tile.
   ●​ Configure the State License Number Setup to use this new formula as its validation
      source.
   ●​ Enable the dynamic validity icon to appear on Visit records, Lightning pages, and in list
      views, providing a clear visual warning to Evan.




Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:

   ●​ Required Edition: Your org is Enterprise or Unlimited Edition with the Life Sciences
      license.
   ●​ Admin Permissions: Your admin user has the Life Sciences Commercial Admin
      permission set.
   ●​ Account Record: An HCP Person Account named Dr. Lucas Grant.
   ●​ Active License Record:
          ○​ Navigate to Dr. Lucas Grant
          ○​ Go to the Business Licenses related list and create a New record.
          ○​ Account: Lucas Grant
          ○​ Contact: Lucas Grant
          ○​ Is Active: True
          ○​ Jurisdiction State: CA
          ○​ Status: Verified
          ○​ License Number: ST-12345678
          ○​ Compliance Scope: Jurisdiction State
          ○​ Period Start: (Select a past date)
          ○​ Period End: (Select a future date)




Step-by-Step Configuration
Part 1: Create the Validation Formula (The "Logic")

First, we must teach Salesforce how Makana Pharma defines a "valid" license. The Is License
Validated field contains an out-of-box validation formula, however we will use a custom formula
field on the Business License object to meet Makana Pharma’s needs . This must be created
before proceeding to the Admin Console.

   1.​ Navigate to Setup.
   2.​ Click Object Manager and select Business License.
   3.​ Click Fields & Relationships and select New.
   4.​ Select Formula as the Data Type and click Next.
   5.​ Enter the following details:
           ○​ Field Label: Is License Valid
           ○​ Field Name: Is_License_Valid
           ○​ Formula Return Type: Select Checkbox.
   6.​ Click Next.
   7.​ In the formula editor, paste the following logic:


   None
   ​     ​
   IF(
   AND(!ISBLANK(LicenseNumber),
   ISPICKVAL(Status, 'Verified'),
   DATEVALUE(PeriodEnd) >= Today()
   ),
   TRUE,
   FALSE
   )



   8.​ This formula defines "Valid" as a license that has a License Number, Status is"Active" in
       the system AND has a Period End date that is today or in the future.
   9.​ Click Check Syntax to ensure there are no errors.
   10.​Click Next.
   11.​Make the field visible to all necessary profiles (especially your Admin and Rep profiles)
       and click Next.
   12.​Click Save (it's fine to leave it off the page layout).

Part 2: Activate the License Validation Rule (The "Display")

Now that we have our logic (the formula), we must tell AFLS to use this logic and
display its result.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select the License Management tile.
   3.​ In the left navigation pane, select State License Number Setup.
           ○​ We are configuring this for the standard State License, which is the most
               common check for sampling.
   4.​ Select Profile to apply this setting only to specific users (or Org for everyone).
   5.​ In the Profile search box, select Field Sales Representative (or your equivalent
       rep profile).
   6.​ For Validation Formula, click the dropdown and select your new formula: Is License
       Valid.
   7.​ Enable Visual Warnings: Check the following boxes to ensure the icon appears
       everywhere Evan works:
           ○​ Apply ‘Evaluate license validity and show icon in visits’
           ○​ Apply ‘Evaluate license validity and show icon in searches
               or lists’
           ○​ Apply ‘Evaluate license validity and show icon in Lightning
               pages’
   8.​ Click Save.
   9.​ Navigate to Metadata Cache:
           ○​ In the Admin Console, locate the Metadata Cache section (or access via
               Mobile Management depending on your org setup).
   10.​Generate Cache:
           ○​ Click Generate Metadata Cache.
           ○​ Wait for the completion status.




Verification: Test as the End-User
Log in as Evan Casto to validate that Marcus's compliance requirement is met.

   1.​ Log in as User: Evan Casto.
   2.​ Check 1 (Account List):
          ○​ Navigate to the Accounts and select the Aligned Account list and scroll down
              to Dr. Lucas Grant.
          ○​ Verify: Do you see a dynamic warning icon (e.g., a green 'State' icon next to
              the Account name? This confirms your formula is working and displaying on
              Lightning pages.
   3.​ Check 2 (Visit Record Warning):
          ○​ From Dr. Grant's account, create a new Visit.
          ○​ On the new Visit record, look for the section displaying HCP addresses.
          ○​ Verify: Do you see the same valid ‘State’ license icon for Evan Casto’s
              address in California? This confirms the check is being applied at the point of
              action (the Visit), allowing Evan to proceed with sampling.
Key Takeaways
By completing this exercise, you have successfully:

   ●​ Solved the "Compliance Risk" problem by providing clear, dynamic visual warnings for
      invalid licenses.
   ●​ Learned the 2-step process: (1) Create a custom Formula on the Business License
      object to define the logic, (2) Activate it in the Admin Console to define the application.
   ●​ Understood how AFLS separates the logic (the formula) from the application (the Admin
      Console settings), allowing for flexible, custom compliance rules.
   ●​ Enabled a critical compliance control that protects both the rep and Makana Pharma
      from regulatory violations.
   ●​ Recognized that this same flexible framework can be applied to State Distributor
      Licenses and DEA Numbers for more advanced compliance needs.
Provider Card
                        Provider Card

Background
Makana Pharma is a leading biopharmaceutical company in the midst of its critical launch for
Immunexis, a new specialized autoimmune disorder treatment. The success of this launch is
directly dependent on the efficiency and effectiveness of their field sales team.


Scenario
The Immunexis launch is in full swing, but Marcus Thorne (VP of Sales Operations) is hearing
alarming feedback. Reps, including top performer Evan Casto (Specialty Sales Rep), are
complaining that the new AFLS system is "clunky" and "slows them down."

During a ride-along, Marcus watched Evan prepare for a call. To get a full picture of a single
HCP, he had to click on six different related lists to find:

   1.​ Where the doctor practices today (Addresses)
   2.​ Which hospitals they are tied to (Affiliations)
   3.​ When he last saw them (Call History)
   4.​ What their key attributes are (e.g., "Is this HCP a Speaker?")
   5.​ If their state license is active for sampling (Business License)
   6.​ What their various specialties are (Healthcare Provider Specialty)

He’s wasting valuable pre-call time "clicking around." Marcus declares this unacceptable; he
needs you to configure a true "Single Pane of Glass" for his reps, not a "System of a Thousand
Clicks."


Personas
   ●​ Marcus Thorne: VP of Sales Operations (The Stakeholder)
   ●​ Evan Casto: Specialty Sales Representative (The End-User)
   ●​ You: The SI Technical Consultant (The Admin/Implementer)


User Story
As a Sales Operations Implementation Consultant, I need to configure the Provider Card to
consolidate scattered data (like licenses, specialties, and key attributes) into a single snapshot,
so that Evan Casto can stop "clicking around" and prepare for calls in seconds.


Enablement Goal
We need to configure the Provider Card to solve this:

   ●​ Create a new Actionable Relationship Graph (ARC) from the Provider Card
      Template.
   ●​ Set the Graph Type to Card View to enable the card builder.
   ●​ Configure a Pill Group element to display key boolean attributes (e.g., "Speaker?").
   ●​ Configure a Repeater element (as Pills) to show all of the HCP's Specialties.
   ●​ Configure a Repeater element (as a PIll) to show all Business Licenses and their
      statuses to highlight compliance risks.
   ●​ Add the final Actionable Relationship Graph component to the Account Lightning
      Page.




Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:

   ●​ User Record: A user account for Evan Casto is active.
   ●​ Account Record: An HCP Person Account named Dr. Lucas Grant.
   ●​ Required Data: Ensure Dr. Lucas Grant has the following related records:
         ○​ A Healthcare Provider record where the Speaker field (or similar boolean)
            is set to True.
         ○​ At least two Healthcare Provider Specialty records (e.g., "Auto Immune
            Disorder”)
         ○​ One Business License record with Status = Verified and License
            Expiration Date set to a future date.




Step-by-Step Configuration
Part 1: Create the Provider Card ARC Graph
The Provider Card is not a standalone component; it's a special view of an Actionable
Relationship Center (ARC) graph. We must build the graph first.

   1.​ Navigate to Setup.
   2.​ In the Quick Find box, enter Actionable Relationship Center and select it.
   3.​ Click New Relationship Graph.
   4.​ Select the Provider Card Template and click Create Graph.
           ○​ This template pre-loads the 10 most common nodes (like Account,Specialty, and
               Business License) needed for an HCP view .
   5.​ In the Graph Properties pane on the right:
           ○​ Label: Makana HCP Snapshot
           ○​ Graph Type: Select Card View. This is the critical step that enables the card
               builder.
   6.​ Click Save.

Part 2: Configure the Card Builder - Compliance (Repeater as Pill)

This is the most critical part for Marcus: surfacing compliance risk. We will show all licenses in a
clear table, making the "Expired" status impossible to miss.

   1.​ Click Add Section.
           ○​ Section Header Label: Licenses & Compliance.
   2.​ In this new section, click New Element.
   3.​ Select Repeater as the element type.
   4.​ Configure the Repeater properties:
           ○​ Source Object: Business License.
           ○​ Display Type: Pill.
   5.​ Configure the table columns:
           ○​ Click Add Field. Select License Number.
           ○​ Click Add Separator. Select comma ‘,’.
           ○​ Click Add Field. Select Status.
           ○​ Click Add Separator. Select comma ‘,’.
           ○​ Click Add Field. Select Period End .
   6.​ Click Save in the top right corner to save your entire card configuration.

Part 3: Add the Provider Card to the Account Page

Finally, let's add the card to the Account page for Elena to use.

   1.​ Navigate to the Dr. Lucas Grant Account record page.
   2.​ Click the Gear Icon (Setup) and select Edit Page.
   3.​ From the Components panel on the left, drag the ARC Relationship Graph component
       onto the page (the right-hand sidebar is a good location).
   4.​ Click the component to select it. In the properties panel on the right:
           ○​ Graph Name: Select your graph: Makana HCP Snapshot.
   5.​ Click Save and Activate the page.
   6.​ Navigate to Metadata Cache:
           ○​ In the Admin Console, locate the Metadata Cache section (or access via
               Mobile Management depending on your org setup).
   7.​ Generate Cache:
           ○​ Click Generate Metadata Cache.
           ○​ Wait for the completion status.




Verification: Test as the End-User
Log in as Elena Rodriguez to validate that you have solved her problem.

   1.​ Log in as User: Evan Casto.
   2.​ Navigate to the Dr. Lucas Grant Account record.
   3.​ Check 1 (The Card):
          ○​ Look in the right-hand sidebar (or wherever you placed it). Do you see the
              Makana HCP Snapshot card?
   4.​ Check 3 (Specialties):
          ○​ Do you see the Specialties section with pills for Specialties?
   5.​ Check 4 (Compliance Risk):
          ○​ Do you see the Licenses & Compliance section?
          ○​ Verify: Does it show a pill with the Business License record, clearly
              displaying the Status as Verified? This visual warning directly solves Marcus's
              compliance concern.




Key Takeaways
By completing this exercise, you have successfully:

   ●​ Solved the "System of a Thousand Clicks" by configuring the Provider Card to show
      consolidated data from multiple related objects.
   ●​ Mastered the Provider Card's foundation by creating an Actionable Relationship
      Graph using the Card View type.
   ●​ Repeater (as Pills) displays with Specialties.
   ●​ Used a Repeater (as a Table) to surface critical, one-to-many compliance data
      (Licenses).
●​ Demonstrated how to configure AFLS4CE to provide immediate, actionable insights to
   field reps, reducing prep time and mitigating risk.
Multi-Object View
                 Multi-Object View
Makana Pharma is a leading biopharmaceutical company preparing for the highly anticipated
launch of Immunexis, a new specialized treatment for Oncology. The success of this launch is
directly dependent on the efficiency and effectiveness of their field sales team.


Scenario
The Immunexis launch is in full swing. Following your work on the Provider Card, Marcus
Thorne (VP of Sales Operations) is much happier with the "snapshot" view. However, he's
identified the next "clunky" part of the process.

When a rep like Evan Casto needs to see all the data, he clicks the Details tab. Here, he's
frustrated because he has to look at two different components: the standard "Record Detail" for
Account fields (like Account Name) and another "Related Record" component for the
Healthcare Provider fields (like Status, Provider Type).

He's still wasting time scrolling and looking in two places for what feels like one person. Marcus
wants this fixed. He doesn't want two "Details" components on the "Details" tab; he wants one,
unified view.


Enablement Goal

In this exercise, you will configure the Account Lightning Record Page to consolidate key
Account and Healthcare Provider information into a single Multi-Object Record View, providing a
unified view of critical fields while noting that inline editing will no longer be available.


Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:

   ●​ Admin Permissions: Your admin user has the Customize Application AND Life
      Sciences Commercial Admin permission sets.
   ●​ Account Record: An HCP Person Account named Dr. Lucas Grant.
   ●​ Related Record: Dr. Lucas Grant has a related Healthcare Provider record with fields
      like Speaker populated.
   ●​ Page Setup: The Dr. Lucas Grant Account Lightning Page is currently using the
      standard "Record Detail" component.




Step-by-Step Configuration
Step 1: Replace the Standard Detail Component

The Life Sciences Customer Engagement package includes the Multi-Object Record View
component specifically to merge the Account and Healthcare Provider objects. We will now
deploy it.

   1.​ Log in to your Salesforce Org as an Administrator.
   2.​ Navigate to the Account record for Dr. Lucas Grant.
   3.​ Click the Gear Icon (Setup) in the top-right corner.
   4.​ Select Edit Page. This will open the Lightning App Builder .
   5.​ On the main page canvas, click the Details tab to make it active.
   6.​ You should see the standard "Record Detail" component already on the page.
   7.​ From the Components panel on the left, find the Multi-Object Record View
       component in the list.
   8.​ Drag the Multi-Object Record View component onto the Details tab, placing it above
       the existing "Record Detail" component.
   9.​ Now, click on the old "Record Detail" component to select it.
   10.​Click the trash can icon in the component's properties panel to Remove it.​
       Critical Step: You must remove any other detail components from the tab for the
       Multi-Object Record View component to function correctly.
   11.​Click Save.
   12.​If prompted, click Activate and assign the page as the Org Default to ensure Evan sees
       the change.


Verification/Check
Log in as Evan Casto (or any user with the Life Sciences Field Sales
Representative permission set) to validate the change.

   1.​ Navigate to the Dr. Lucas Grant Account record.
   2.​ Click the Details tab.
   3.​ Check 1 (Consolidated View):
           ○​ Verify: Do you see a single component on the tab? You should see all fields
               seamlessly.
       ○​ Verify: In that one component, can you see both the Account Name (from the
          Account object) and a field like Speaker Status (from the Healthcare Provider
          object) without scrolling to a different component?
4.​ Check 2 (Component Consideration):
       ○​ Hover your mouse over a field (like Account Name).
       ○​ Verify: Do you see a pencil icon for inline editing? You should not. Inline editing
          isn’t supported on record detail pages that include a multi-object component.
Affiliations
                             Affiliations
Learning Objectives
Upon completion of this exercise, you will be able to configure the AFLS
Affiliations feature within the Admin Console to:

   ●​ Configure General Settings to enable the crucial Network View and automatically
      determine Affiliation Types (Hard vs. Soft) for new records.
   ●​ Configure Affiliation Reverse Role Mapping to automate reciprocal provider affiliation
      records, eliminating manual data entry and ensuring data consistency.
   ●​ Customize the Table View Appearance (Columns, Sorting, Pagination) for efficient list
      management.
   ●​ Customize the Network View Appearance (connector color and thickness) and
      product-specific filters for advanced relationship visualization critical for the Immunexis
      launch.


Business Use Case
Makana Pharma, a specialized biotech firm, is heavily focused on the successful market
penetration of its specialty autoimmune disorder drug, Immunexis. They have loaded a large
dataset of High-Value Prescribers (HCPs) and Key Accounts (HCOs) into AFLS, and success
requires accurately visualizing and managing complex referral networks.


Prerequisites and Setup Data
Successful execution of this exercise requires the following groundwork to be completed by the
administrative team.

   1.​ Permissions: You must have the Life Sciences Commercial Admin permission set
       assigned, which provides the necessary access to the Admin Console for creating and
       configuring AFLS data.
   2.​ Trigger Handlers: Enable the following trigger handlers in the Admin Console, Trigger
       Handler Administration:
           ○​ HardAffiliationHandler
           ○​ AffiliationUniquenessGenericHandler
           ○​ AffiliationReciprocalHandler
           ○​
   3.​ Affiliation Field Sets & Custom Fields: The following fields and field sets on the
       Provider Affiliation object must exist for configuration linkage in the Admin Console:
           ○​ Provider Affiliation Unique Field Set: A field set used to uniquely identify
                affiliation records. Create a new field set on the Provider Affiliation object:
                     i.​ Field Set Label: Provider Affiliation Uniqueness
                     ii.​ Field Set Name: Provider_Affiliation_Uniqueness
                     iii.​ Where is this used?: Defining affiliation uniqueness
                     iv.​ Field Set Fields: Account, Related Account, Role
           ○​ Provider Affiliation Columns Field Set: A field set defining the columns
                displayed in the Table View, use the existing Affiliation Columns field set.
   4.​ Picklist Values: The values for the Role field on the Provider Affiliation object (e.g.,
       Affiliated Practice-Doctor-AAR, Consulting-Consulting-AAR) must be
       customized and available.
           ○​ Add Role the picklist values Influencer and Influenced By.
   5.​ Provider Affiliation Product Filters Field Set: A field set on the Provider Affiliation
       Product object, including the Product field, to enable filtering in the Network View.
       Create a new field set on the Provider Affiliation object:
           ○​ Field Set Label: Provider Affiliation Product Filter
           ○​ Field Set Name: Provider_Affiliation_Product_Filter
           ○​ Where is this used?: Affiliation filtering by Product
           ○​ Field Set Fields: Product


Configuration Steps
We will configure the Affiliations feature starting in the Admin Console, applying settings globally
where appropriate (Org Default).

A. Configuring Core Affiliation Behavior (General Settings)

These steps directly solve Makana Pharma’s need for the graphical Network View and the
automatic designation of affiliation types (Hard vs. Soft) for better call planning.

   1.​ Navigate to the Admin Console: From the App Launcher (the nine dots), find and select
       Admin Console.
   2.​ Select Account Management, and then select Affiliations.
   3.​ For Apply Settings To, select Org Default to apply these core behaviors to all profiles in
       the organization.
   4.​ Under General Settings, configure the following:
           ○​ Deselect Disable Reverse so that reciprocal role affiliations are automatically
              created.
           ○​ Select Set affiliation type for provider affiliations. This enables the
              HardAffiliationHandler trigger to automatically assign the affiliation type
              as Hard (workplace/location) or Soft (influence/network).
           ○​ Select Enable network view. This makes the critical relationship graph
              visualization available on the Affiliations tab for Marco Chen.
           ○​ For Provider Affiliation Unique Field Set, select the field set (e.g.,
              Provider_Affiliation_Uniqueness) that includes the fields necessary to
              uniquely identify a provider affiliation record, ensuring data integrity.
   5.​ Click Save.

B. Configuring Affiliation Reverse Role Mapping

To eliminate manual data entry errors and inconsistent inverse entries for Dr. Sharma's team,
we must automate reciprocal role creation.

   1.​ From the Admin Console, select Account Management, and then select Affiliation
       Reverse Role Mapping.
   2.​ Click New.
   3.​ Mapping 1 (Workplace Reciprocity):
           ○​ Enter a Name (e.g., Influencer_to_Influenced_By_Mapping).
           ○​ For Direct Role, select the role Influencer.
           ○​ For Reversed Role, select the inverse role Influenced By.
   4.​ Click Save.

C. Customizing the Affiliations Table View Appearance

We will ensure the structured Table View provides the necessary details and efficient navigation.

   1.​ Return to the Admin Console (Account Management > Affiliations).
   2.​ Scroll down to Table View Settings.
   3.​ For Provider Affiliation Columns Field Set, select the field set (e.g., Affiliation
       Columns) that includes the specific fields Makana Pharma needs to see in the table
       columns.
   4.​ Set Records per Page to 10 to define the default number of affiliations displayed.
   5.​ For Records per Page Dropdown Values, enter 5,10,15,20 (comma-separated
       values) to customize user options for list length.
   6.​ For Fields and Order for Sorting, enter comma-separated API names and sort orders
       (e.g., Role ASC, CreatedDate DESC). This sorting is applicable to the web version
       of the table.
   7.​ For Account Search Field, select a text data type field from the Account object (e.g.,
       Account Name) that users can employ to search for accounts in the table view.
   8.​ Click Save.
D. Customizing the Affiliations Network View Appearance and Filters

This customization is critical for visualizing influence pathways and allowing product-specific
filtering for the Immunexis launch.

   1.​ Return to the Admin Console (Account Management > Affiliations).
   2.​ Scroll down to Network View Settings.
   3.​ For Provider Affiliation Product Filters Field Set, select the field set (e.g., Provider
       Affiliation Product Filter) that includes the Product field, enabling
       product-based filtering within the Network View, crucial to focus on Immunexis pathways.
   4.​ Click Save.
   5.​ Generate Cache:
           ○​ Click Generate Metadata Cache (Admin Console > Mobile > Metadata Cache)
           ○​ Click Skip Validation to speed up the metadata process.
           ○​ Wait for the completion status.


Verification and Validation
Execute the following steps to ensure the configurations meet Makana Pharma's requirements
and function as expected.

   1.​ Verify Affiliation Reciprocity:
          ○​ Navigate to an Account record (e.g., "Dr. Lucas Grant").
          ○​ Select the Affiliations tab.
          ○​ Click New and create a Provider Affiliation with another HCP (e.g. “Mary Malloy”
              where the Role is set to Influencer.
          ○​ Check: Verify that upon saving, the AffiliationReciprocalHandler trigger
              has automatically created a second, reciprocal affiliation record where the
              Related Account ( (e.g. “Mary Malloy”) has the Role of Influenced By,
              confirming your Reverse Role Mapping is active.
   2.​ Verify Network View Customization:
          ○​ On the same Account record, use the Switch View option to access the Network
              View.
          ○​ Check: Verify that the Network View is available (due to configuration in Step A).
          ○​ Check: Locate the Filter menu and confirm that the Product filter is now visible,
              allowing the user to narrow down the visualization to relationships involving
              Immunexis.


Key Takeaways
   ●​ Automation is Essential for Life Sciences: Configuring Affiliation Reverse Role
      Mapping and enabling Set affiliation type for provider affiliations reduces data entry
   complexity and ensures the consistency required for regulatory compliance and efficient
   reporting. The automation relies on the AffiliationReciprocalHandler and
   HardAffiliationHandler triggers, or alternatively, the
   AffiliationDataLoadProcessorBatch batch job.
●​ Visualization Drives Targeted Engagement: The Affiliations feature provides three
   distinct views—Table (list/grid), Hierarchy (mobile org chart for hard affiliations), and
   Network (graph visualization)—which help users visualize account relationships.
   Customizing the Network View with specific color, thickness, and product filters
   transforms raw data into actionable visual insights for commercial teams, supporting the
   strategic Immunexis launch.
●​ Admin Console Control: The Admin Console is the mandatory interface for controlling
   the functional and aesthetic aspects of Affiliations, ensuring that customization criteria
   defined via field sets are correctly applied across the organization.
Account Ratings
                  Account Ratings
Makana Pharma is preparing for the national launch of Immunexis, which requires consistent,
insight-driven HCP evaluations to strengthen segmentation and prioritize engagement. The
Ratings feature is designed to help sales representatives segment and prioritize customer
accounts into meaningful categories, enabling them to focus on the right customers and adjust
strategies for maximum efficiency.

Scenario
Currently, Marcus Thorne's team has no guided intelligence and reps like Evan treat all
accounts the same, missing cues from high-potential HCPs. Your task is to configure the
General (Account) segment to display key priority metrics. This will provide the "at-a-glance
insight" Marcus requested.


Enablement Goal
In this exercise, you will configure and deploy the Account Ratings component. This supports
Makana Pharma’s enablement goal of prominently incorporating visual cues—such as badges
or star ratings—to give sales representatives like Evan Casto quick, at-a-glance insight into
sales potential and targeting priority.


Prerequisites
   1.​ The Account object in your org already includes the following fields, which you may
       update or expand with additional fields as needed:
          ○​ Account_Decile__c (Number, 1-10)
          ○​ Immunexis_Potential__c (Picklist: High, Medium, Low)
   2.​ This configuration will utilize key Ratings objects, including
       PrvdClassificationLayout, PrvdClsfnAttrDefinition, and
       PrvdClsfnLayoutAttribute, to define and store the rating layout attributes
   3.​ Ensure the following entities are present and active in DbSchema with type = Data
          ○​ Account
          ○​ ProviderAcctTerritoryInfo
          ○​ ProviderAcctProductInfo
          ○​ LifeSciMarketableProduct
          ○​ ContactPointAddress
          ○​ PrvdAccountUserGroupInfo
          ○​ Group
           ○​ GroupMember


Step-by-Step Configuration
Step 1: Create the "HCP Priority Rating" Layout

First, you must build the layout in the Admin Console that defines the visual cues and data
fields Evan will see.

   1.​ From the Life Sciences Commercial App - App Launcher, find and select Admin
       Console.
   2.​ In the Admin Console, click the Ratings tile.
   3.​ On the Ratings Layouts page, click New Layout.
   4.​ For the layout name, enter HCP Priority Rating and click Create.
   5.​ You are now in the layout builder. To add your first rating, click the + icon next to the
       "Ratings" label in the left panel.
   6.​ Configure the Account Decile rating:
           ○​ Object: Select Account.
           ○​ Display As: Click the Number icon. This is a key step for providing a 'visual cue.'
               While there isn't a specific "star rating" type, using Number, Continuum (for
               picklists), or Doughnut charts allows you to visually represent priority data. You
               will use Number for the decile.
           ○​ Field: Choose Account_Decile__c.
           ○​ Name: Enter Account Decile.
           ○​ Note: Depending on the display type, you may be prompted for additional options
               like Ranges or Format. You can use these to add color-coding (e.g., Deciles 1-3
               are red).
           ○​ Click Save.
   7.​ Now, add the second rating for product potential. Click the + icon in the left panel again.
   8.​ Configure the Immunexis Potential rating:
           ○​ Object: Select Account.
           ○​ Display As: Click the Continuum icon. This display type is ideal for picklist
               values like 'High, Medium, Low' and acts as another visual badge.
           ○​ Field: Choose Immunexis_Potential__c.
           ○​ Name: Enter Immunexis Potential.
           ○​ Click Save.
   9.​ In the left panel, you should now see your two new ratings (Account Decile and
       Immunexis Potential) listed under the "Ratings" section.
   10.​Click on the new ratings fields from the left panel to bring them onto the layout canvas.
       Arrange them side-by-side to ensure they are prominently displayed.
   11.​You can resize the cards by hovering and dragging the resize icon in the bottom-right
       corner of each card.
   12.​Click the main Save button to save your layout.

Step 3: Configure Schema and Cache for Mobile Access

To ensure this new configuration is available to Evan on his iPad, you must update the database
schema and generate a new metadata cache.

   1.​ While still in the Admin Console, navigate to Database Schema Configuration.
   2.​ You must ensure the objects used for Ratings are active in the Database Schema
       Configuration. Create or verify the following object configurations:
          ○​ Type: Configuration: PrvdClsfnAttrDefinition,
              PrvdClassificationLayout, PrvdClsfnLayoutAttribute​




Step 3: Add the Ratings Component to the Account Page

To ensure the component is incorporated prominently on the HCP (Account) layout, you will
embed the Ratings component in a dedicated tab on the Account record page.

   1.​ From the App Launcher, find and select Accounts.
   2.​ Open any HCP account record (e.g., Mr. Aaron Morita).
   3.​ Click the Setup cog icon in the top-right and select Edit Page. This will open the
       Lightning App Builder.
   4.​ Click on the main tab component in the center of the page (the component that contains
       "Details," "Related," etc.).
   5.​ In the Properties panel on the right, click Add Tab.
   6.​ A new tab will appear. Click on it to customize it.
   7.​ In the Tab Label dropdown, select Custom.
   8.​ For Custom Label, enter Ratings.
   9.​ Click Done.
   10.​Drag the new Ratings tab to position it prominently (e.g., after "Details").
   11.​From the Components panel on the left, find and drag the Ratings component onto the
       new Ratings tab canvas.
   12.​Click on the Ratings component you just added.
   13.​In the Properties panel on the right, click the Layout dropdown and select your HCP
       Priority Rating layout.
   14.​Click Save in the Lightning App Builder.
   15.​Click Activation and assign the page as the Org Default to make it visible to all users.
   16.​Final Cache Generation: Adding a new tab also requires a cache update for mobile.
       Return to the Admin Console > Metadata Cache Configuration and click Generate
       Metadata Cache one more time.


Verification/Check
Let's confirm the configuration is working as intended.

   1.​ Navigate back to the Account record you were editing (e.g., Mr. Aaron Morita). You may
       need to refresh the page.
   2.​ Click the new Ratings tab you added.
   3.​ Verify: You should now see the "HCP Priority Rating" layout displaying the Account
       Decile and Immunexis Potential rating cards.
   4.​ Test: Click the Edit button on one of the rating cards. Change the value (e.g., update the
       Account Decile) and save it. The card should update instantly.
   5.​ Click the history (clock) icon on the card to view the change history.

You have successfully configured the Ratings component. Elena Rodriguez can now click the
"Ratings" tab on an HCP record to see customer data organized into meaningful segments,
providing immediate, contextual insight into sales potential and targeting priority.
Next Best Customer
            Next Best Customer
Makana Pharma is a leading biopharmaceutical company in the midst of its critical launch for
Immunexis, a new specialized autoimmune disorder treatment. The success of this launch
depends heavily on the efficiency and effectiveness of the field sales team.


Scenario
The Immunexis launch is in full swing, but Marcus Thorne (VP of Sales Operations) has
identified a critical execution challenge. His reps, including Evan Casto, are overwhelmed by the
sheer number of HCPs in their territories. Evan alone manages over 100 HCPs and struggles to
determine who to prioritize.

During a ride-along, Marcus observed Evan spending nearly 30 minutes each morning simply
planning his day, manually and randomly selecting which accounts to visit. By treating all HCPs
equally, he is spending valuable time on low-potential doctors while high-potential Immunexis
prescribers are being overlooked. This lack of actionable prioritization is directly impacting
Makana Pharma’s launch performance. Marcus needs a guided, prioritized, and actionable
list for his reps - delivered front and center on the homepage.​



Enablement Goal
We need to configure the Next Best Customer features to solve this:
   ●​ Enable the NbcTopResults Lightning component on the Life Sciences Commercial
      home page.
   ●​ Enable the predefined Next Best Customer filter in both Account and Calendar views.
   ●​ Create a Territory Account Score record that links Dr. Lucas Grant to Evan’s
      territory.
   ●​ Populate the Score Explainability Information field with realistic JSON data using the
      scores and metrics structure.
   ●​ Configure Quick Actions (such as New Visit) for the NBC component via the Admin
      Console.
   ●​ Verify that Dr. Grant appears as a prioritized account on the homepage and that the
      configured actions are visible and usable.
Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:
    ●​ Admin Permissions: Your admin user has the Life Sciences Commercial Admin
       permission set.
    ●​ Home Page: An active Life Sciences Commercial app home page exists.
    ●​ Account Record: An HCP Person Account named Dr. Lucas Gran.
    ●​ Territory Record: TM - SPC - San Francisco North 20D02T12.


Step-by-Step Configuration
Part 1: Enable Next Best Customer Entry Points (Home, Accounts, and
Calendar)
In this step, you will make sure that Next Best Customer is visible and accessible to end
users from all primary entry points: the Home page, Accounts, and the Calendar.

Part 1A: Add the Next Best Customer Component to the Home Page
First, we provide the main “container” for prioritized accounts on the page Evan sees when he
logs in.

   1.​ Log in to your Salesforce Org as an Administrator.
   2.​ Navigate to the Life Sciences Commercial app and view the Home page.
   3.​ Click the Gear Icon (Setup) in the top-right corner.
   4.​ Select Edit Page. This will open the Lightning App Builder.
   5.​ In the Components panel on the left, find the NbcTopResults component.
            ○​ Note: Do not use the NbcScoreDetailStandalone component. That component is
               reserved for internal system use only.
   6.​ Drag the NbcTopResults component onto a prominent area of the Home page (center
        column or right rail is recommended).
   7.​ Click Save in the top-right corner.
   8.​ Click Activate and assign the page as the Org Default.

Part 1B: Add the Next Best Customer Component to the Home Page
This ensures that Evan can also access NBC from Account List views and the Calendar, not
just from the Home page

   1.​ Navigate to the Life Sciences Commercial app.
   2.​ Open the Admin Console, and select Lists and Filters.




   3.​ Navigate to the Filters tab.
   4.​ Enable Let users view the Next Best Customer filter.
   5.​ In Days to Mute, enter the number of days a snoozed account should reappear (for
       example, 10).




   6.​ Click Save.


Part 2: Create the Scoring Data (The "Intelligence")
The component is just a visualizer. The "intelligence" comes from data fed into the Territory
Account Score object. We will simulate an external AI model's output by creating this record
manually.
   1.​ Click the App Launcher (waffle icon).
   2.​ Search for and select Territory Account Scores.
   3.​ Click New.
   4.​ Fill in the lookup fields to connect the score to Evan's work:
            ○​ Account: Dr. Lucas Grant
            ○​ Territory: TM - SPC - San Francisco North 20D02T12
            ○​ Total Score: 100
            ○​ Rank: 1
   5.​ Now, find the large text field: Score Explainability Information.
6.​ This field requires a specific JSON structure. Copy the entire code block below:



JSON
{
    "scores": {
       "Last Visit": 30,
       "Message Engagement": 20,
       "Immunexis TRx Growth": 35,
       "Open Opportunities": 15
    },
    "metrics": {
       "Last Visit": "Visited on 07/22",
       "Message Engagement": "Discussed Immunexis on 08/05",
       "Immunexis TRx Growth": "+12% last quarter",
       "Open Opportunities": "1 in pipeline"
    }
}




7.​ Paste this JSON into the Score Explainability Information field.
       ○​ Pro Tip: Understanding the JSON​
           * scores: This section contains the weighted integer values. This is the "logic"
           that determines the account's rank.​
           * metrics: This section contains the "raw value" or text10101010. This is the
           "rationale" that Evan will see to understand why Dr. Grant is a priority (e.g.,
           "Immunexis TRx Growth": "+12% last quarter").
  8.​ Click Save.
  9.​ Manually assign the newly created TerritoryAccountScore record to the user Evan Casto




Part 3: Configure Quick Actions (The "Next Step")
A prioritized list is useless if the rep can't act on it. We must add actions to the component.
   1.​ From the App Launcher, open Admin Console (Life Sciences Commercial).
   2.​ Select the Quick and Custom Action Administration tile.




   3.​ Open the Quick Actions section.
   4.​ Click New.
   5.​ Set the Location to Next Best Customer, and add the desired quick actions (e.g., New
       Visit, Email).
   6.​ Assign visibility by selecting the appropriate Profiles or Permission Sets (e.g., Life
       Sciences Field Sales Representative).




   7.​ Click Save.
   8.​ Click Generate Metadata to apply the update to mobile.



Verification: Test as the End-User
Log in as Evan Casto to validate that you have solved his problem.
Navigate to the Life Sciences Commercial app and ensure you are on the Home page.
   1.​ Check 1: Component Visibility
          ○​ Verify: The Next Best Customer component is visible on the Home page.
   2.​ Check 2: Prioritized Account
          ○​ Verify: Dr. Lucas Grant appears as a top prioritized account in the component.
   3.​ Check 3: Actionable Rationale
          ○​ Verify: The rationale for his prioritization is visible, including values from the
             metrics section of your JSON, such as: Immunexis TRx Growth: +12% last
             quarter
   4.​ Check 4: Quick Action
          ○​ Verify: On the Dr. Lucas Grant entry, the Visit quick action button is visible and
             available.
   5.​ Check 5: List View Filter
          ○​ Verify: You can access the Next Best Customer filter in both Account &
             Calendar tabs
Next Best Action
                   Next Best Action
Makana Pharma is a leading biopharmaceutical company in the midst of its critical launch for
Immunexis, a new specialized autoimmune disorder treatment. The success of this launch
depends heavily on how effectively the field team executes each week.


Scenario
As Immunexis adoption grows, Evan Casto is managing an increasing number of high-value
HCPs, each requiring timely and personalized engagement. While he now has a comprehensive
360-degree view of every account, he still faces a daily execution challenge: What should he
do next, and with which customers?

Evan can see all the data, but he still has to interpret it herself. He reviews activity history,
recent engagements, sample drops, and prescribing trends—trying to decide which channel to
use and when to reach out. This manual prioritization takes time and often leads to missed
opportunities.

Evan needs more than visibility. He needs clear, guided recommendations—a weekly,
actionable plan that tells him:

   ●​ What action to take
   ●​ And when to take it

That solution is Next Best Action.


Enablement Goal
We need to configure the Next Best Action (NBA) framework so that Evan receives clear,
guided, and actionable recommendations at the account level.
By the end of this exercise, you will:

   ●​ Enable the Next Best Actions Lightning component on the Account Record Page.
   ●​ Simulate an AI-driven recommendation by creating a Territory Account
      Recommended Action (TARA) record for Dr. Lucas Grant.
   ●​ Verify that the component displays the recommended "Visit" action you created,
      providing Evan with a clear, actionable plan.


Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:
   ●​ Admin Permissions: Your admin user has the Life Sciences Commercial Admin
      permission sets.
   ●​ Rep User Permissions: The Evan Casto user has the following permission sets
      assigned:
          ○​ Industries Visit
          ○​ Life Sciences Commercial User
          ○​ Life Sciences Field Sales Representative
          ○​ AFLS Rep
   ●​ Technical Prerequisites: Your org must have the required user profiles ("Medical Sales
      Rep") , Apex class access , and metadata cache configured as specified in the core
      setup guide. This exercise assumes this one-time setup is complete.
   ●​ Account Record: An HCP Person Account named Dr. Lucas Grant.
   ●​ Territory Record: TM - SPC - San Francisco North 20D02T12.

Step-by-Step Configuration
Part 1: Active Prerequisite Configuration

Before the Next Best Actions component can function correctly, we must activate the core
settings that support weekly action planning and action sharing/status updates.

1. Configure First Day of Work Week

   ●​ Open the Admin Console, and select Planner.
   ●​ Ensure the First Day of Work Week is set (e.g., Monday).
   ●​ Click Save.
2. Activate Prerequisite Trigger Handlers

   ●​ Open the Admin Console, and select Trigger Handler Administration.
   ●​ Enable the following trigger handlers required for App Alerts delivery and processing:
         ○​ TerrAcctRcmdActionSharingHandler
         ○​ TerrAccRcmActStatusUpdateHandler




Part 2: Add the Next Best Action Component to the Account Page

Now, we will surface the Next Best Action recommendations on the Account record so Evan
can view and act on them directly.

   1.​ Navigate to the Account record for Dr. Lucas Grant.
   2.​ Click the Gear Icon (Setup) and select Edit Page.
   3.​ On the main page canvas, click the Dashboard tab to make it active.
   4.​ From the Components panel on the left, locate the Life Sciences Next Best Actions
       component.
   5.​ Drag the Life Sciences Next Best Actions component into the body of the Dashboard
       tab.
   6.​ Click Save in the top-right corner.
   7.​ Click Activate and assign the page as the Org Default.

Part 3: Configure Skip Reasons for Next Best Action
Skip Reasons allow reps like Evan to explain why they choose not to follow a recommended
action. As an admin, you define the allowed values so the business can later analyze patterns
and refine their engagement strategy.

   1.​ Navigate to Setup.
   2.​ In the Quick Find box, search for Object Manager and select it.
   3.​ Search for and open the object Territory Account Recommended Action.




   4.​ Go to Fields & Relationships.
   5.​ Locate and open the Skip Reason field (Picklist).
   6.​ In the Skip Reason Picklist Values section, click New.
   7.​ Add the skip reason values your business wants to track, such as: Not Relevant; Already
       completed




   8.​ Click Save.

Part 4: Simulate the AI Plan

The Next Best Actions component visualizes records from the Territory Account
Recommended Action object. An AI model would normally create these. We will create one
manually to simulate this output.

   1.​ Click the App Launcher (waffle icon).
   2.​ Search for and select Territory Account Recommended Actions.
   3.​ Click New.
   4.​ Fill in the following details to create the plan for Evan:
            ○​ Account: Lucas Grant
            ○​ Territory: TM - SPC - San Francisco North 20D02T12
            ○​ Action Type: Visit
                     i.​ Note: Per the AFLS4CE configuration, you can only create TARA records
                         of type Visit or Email.
            ○​ Due Date: Select today’s date.
            ○​ Status: Upcoming
   5.​ Click Save. You have now created the "intelligence" that the component will display.




Verification: Test as the End-User
Log in as Evan Casto to validate that the Next Best Action configuration delivers a clear,
guided action plan.
Navigate to the Account record for Dr. Lucas Grant, and open the Dashboard tab you
configured.

   1.​ Check 1: Component Visibility
          a.​ Verify: The Next Best Actions component is visible on the Dashboard tab and
              displays the current week’s date range.
   2.​ Check 2: Recommended Action Visibility
          a.​ Verify: The recommended Visit action you created (for example, “Start Meeting”)
              is visible in the component. This confirms that the component is correctly reading
              data from the TARA record.
   3.​ Check 3: Skip Action & Skip Reason Capture
          a.​ Verify: Click Skip on the recommended action and select a Skip Reason. After
              confirming, the recommendation is removed from the component.
Account Search and SBC
    Account Search / Search
        Before Create
Makana Pharma is preparing for the national launch of Immunexis, which demands accurate
HCP targeting and tight compliance with account governance.

Scenario
During field readiness testing, Dr. Priya Sharma flags rising risks of duplicate HCP records due
to manual account creation. To mitigate this, Makana will enable Search Before Create,
ensuring users are redirected to a controlled search flow rather than opening a blank creation
form—forcing verification before any new account is added.

Meanwhile, Evan Casto must engage providers both inside and outside his assigned territory to
support cross-regional clinical pathways. Using Search Online, Evan can search beyond his
territory, apply Country filters, and discover affiliated accounts that were previously hidden.
When needed, he can manually align these out-of-territory records to support coordinated
engagement.

For specialized targeting, the Evan will need to rely on Advanced Search, which exposes
critical HCP attributes such as NPI and Specialties—helping Makana segment providers for
Immunexis outreach with greater precision.

Finally, when Evan cannot find a provider internally, External Search Access will allow him to
extend the lookup into Makana’s external MDM system, ensuring he always operates from the
most complete data set while preserving governance boundaries.


Enablement Goal
This exercise focuses on configuring the Account Search and Search Before Create capabilities
in AFLS to support efficient, compliant, and accurate account management for
field users like Evan Casto.

Capabilities to Configure:

   ●​ Search Before Create (SBC): Enforce data governance by redirecting users to a
      controlled search flow before creating new accounts, preventing duplicates.
   ●​ Search Outside Territory & Country Filters: Enable users to search beyond their
      assigned territory and configure country-specific filters for precise account discovery.
   ●​ Advanced Search: Define field sets for HCP and HCO records, allowing attribute-based
      searches using critical information like NPI and Specialties.
   ●​ External Search Integration: Configure and enable access to external MDM systems
      (e.g., OneKey) so users can find, download, and align accounts outside the internal
      system.


Prerequisites
Successful execution requires the following foundational elements to be in place:

   ●​ Permissions: The admin must have the Life Sciences Commercial Admin permission
      set, to access the Admin Console and configure Account Search/SBC features.
   ●​ Field Sets: The specific field sets for Advanced Search must exist (e.g., HCO Account
      Search, HCP Account Search).
   ●​ Sharing Settings: For a comprehensive search experience, the Care Specialty object's
      default internal access must be set to Public Read Only under Organization-Wide
      Defaults,.
   ●​ Country Settings: User Additional Info (UAI) records must be created or updated with
      Available Countries and Preferred Country to support country-specific searching.
   ●​ Integration Setup: A Named Credential must be set up for the external system
      integration (e.g., MuleSoft integration).


Step-by-Step Configuration
Step 1: Enforcing Data Governance: Search Before Create (SBC)

This step mandates that Evan Casto searches for an account before he can create a new
account record, ensuring data integrity and reducing redundancy.

   1.​ Navigate to Setup, go to Object Manager, and select Account.
   2.​ Click Buttons, Links, and Actions.
   3.​ Select the New action from the list.
   4.​ Click the arrow icon and select Edit.
   5.​ For Lightning Experience Override, select Lightning component.
   6.​ Select the SbcCreateAccount component from the dropdown list.
   7.​ Click Save.

Step 2: Configuring Advanced Search Criteria (Field Set Mapping)

To allow Evan Casto to refine searches using specialized attributes like NPI or Specialty, we
must configure the field sets used by Advanced Search.
   1.​ Navigate to the Admin Console (via the App Launcher).
   2.​ Select Search Before Create, and then select Field Set Mapping.
   3.​ To set the fields for the HCO - Search record type: Click the edit icon, and select HCO
       Account Search for the Health Care Organization Fieldset and HCO Contact Point
       Address Search for the Contact Point Address Fieldset.
   4.​ To set the fields for the HCP - Search record type: Click the edit icon, and select HCP
       Account Search for the Healthcare Provider Fieldset and HCP Contact Point Address
       Search for the Contact Point Address Fieldset.
   5.​ Click Save.
   6.​ To customize the advanced search layout further, select Search Before Create on the
       Admin Console page and then General Settings.
          a.​ Under General Settings on the left pane, you can customize advanced search to
              show external search results and internal search results simultaneously. You can
              customize the fields displayed in the business license search, its results, and the
              details for affiliations and specialties during account creation by selecting
              required field sets. You can customize the layout further by setting the sorting
              criteria to show contact point address.
   7.​ Optional Step: Navigate to Search Before Create Jobs and run or schedule the Update
       HCP Records with Searchable Data job (or activate the corresponding Data
       Processing Engine definition) to populate searchable fields using data from associated
       records.


Step 3: Customizing Account Search Preferences

We adjust the search parameters so Evan can expand his reach beyond his immediate territory
and utilize country filters for precision.

   1.​ Navigate to the Admin Console (Account Management > Account Search
       Preferences).
   2.​ Under the Search Outside Territory section:
           ○​ Select the checkbox to enable users to search outside their territories. (Note:
                This is required before users can manually align affiliated accounts to their
                territory.)
   3.​ Select the checkbox to Enable country based search and enable country-specific
       searching. (Note: If this is enabled but a country isn't selected, the search defaults to the
       user's defined Available Countries.)
   4.​ Under the Advanced Search section, enable business license-based searching and
       limit the search scope by a user’s available countries.
   5.​ Click Save.
Step 4: Configuring External Search Functionality (MDM Integration)

This step allows Makana to leverage external data sources (MDM/OneKey) to find high-value,
out-of-contract accounts for the Immunexis launch.

   1.​ Configure Integration Definition: (Assuming Named Credential exists):
          ○​ Navigate to Setup, search for Integration Definitions, and click New,.
          ○​ For Type, select Apex Defined.
          ○​ For Apex Class, select lsc4ce.ExternalSearchCalloutService,.
          ○​ Enter the API Name of the Named Credential in the Attribute Value field.
          ○​ Click Save and Activate.
   2.​ Configure Admin Console Settings (Org Level):
          ○​ Navigate to the Admin Console (Account Management > External Search
             Org Settings).
          ○​ Select an active external system for search from the dropdown (If none is
             selected, external search is disabled).
          ○​ Specify the Integration Definition API (the name of the Definition created in
             Step D.1).
          ○​ Set the org’s limit for downloading out-of-contract accounts. (If the org limit is
             exceeded, all out-of-contract downloads are blocked.)
   3.​ Enable Download for Users:
          ○​ Navigate to External Search (under Account Management) and select the
             checkbox to enable users to download out-of-contract accounts.


Verification/Check
Execute the following checks to confirm the configuration meets Makana Pharma’s governance
and access needs:

   1.​ Verify Search Before Create (SBC):
           ○​ Navigate to the standard Accounts tab and click the New button.
           ○​ Check: Verify that the "New" button no longer directly opens the standard
              account creation form but instead directs the user to a search modal
              (SbcCreateAccount component), confirming the override is active.
   2.​ Validate Search Outside Territory & Country Filter Settings
           ○​ Navigate to the Accounts tab and click the Search Online action. Confirm you
              can search outside your territory and that the Country filter appears, defaults to
              your Available Countries when not selected, and supports
              business-license–based searching.
           ○​ Validate that affiliated accounts outside your territory are discoverable through
              Search Online and can be manually aligned when needed.
3.​ Verify Advanced Search:
       ○​ Navigate to the Life Sciences Commercial App, select the Accounts tab, and
           click Advanced Search.
       ○​ Check: Verify that when searching for HCPs, the input criteria available include
           specialized attributes like National Provider Identifier (NPI) and Specialties,
           confirming the field set mapping is active.
4.​ Verify External Search Access:
       ○​ Perform a Search Outside Territory using the Accounts tab.
       ○​ Check: Verify that after the internal search results appear, the option to Search
           in External System is available, confirming the integration is configured and
           enabled.
Lists & Filters
                        Lists & Filters
Makana Pharma is a leading biopharmaceutical company in the midst of its critical launch for
Immunexis, a new specialized autoimmune disorder treatment. The success of this launch is
directly dependent on the efficiency and effectiveness of their field sales team.


Scenario
The Immunexis launch continues to accelerate, but Marcus Thorne (VP of Sales Operations)
has uncovered another major operational issue.

Evan Casto, one of his top Specialty Sales Representatives, must now support regional speaker
programs, launch follow-ups, and targeted outreach. However, when he needs to prepare for
regional speaker programs, launch follow-ups, or targeted outreach, he still struggles to:

   ●​ Quickly build reusable lists of the right HCPs
   ●​ Segment and target accounts by key information
   ●​ Take bulk actions on targeted HCPs at once

This lack of dynamic targeting and reusable segmentation is slowing execution. Marcus needs a
way for reps to instantly filter, save, and act on targeted HCP groups.

That solution is Lists & Filters.


Enablement Goal
We need to configure Lists & Filters to solve this:
   ●​ Enable dynamic account filtering for Evan
   ●​ Create a saved List View for Auto Immune Disorder HCPs relevant to Immunexis
   ●​ Verify that Evan can:
          ○​ View correctly filtered accounts
          ○​ Save and reuse the list
          ○​ Take action from the filtered results


Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:

   ●​ Permission Set: Ensure your user has the Life Sciences Commercial Admin
      permission set.
   ●​ Technical Prerequisites: Your org must have the required user profiles ("Medical Sales
      Rep") , Apex class access , and metadata cache configured as specified in the core
      setup guide. This exercise assumes this one-time setup is complete.
   ●​ Account Example Data: Your org must have proper Account Record Type
      configuration (HCP, HCO, etc.) & some other account data (e.g., specialities) populated
      for filtering

Step-by-Step Configuration
Part 1: Configure the Columns Displayed in Account Lists

This controls what Evan can see by default in All Accounts and Static Lists.

   1.​ Log in to your Salesforce Org as an Administrator.
   2.​ Navigate to the Life Sciences Commercial app.
   3.​ Open the Admin Console, and select Lists and Filters.




   4.​ In the Account Lists tab, click New to create a new account list configuration.
   5.​ Enter a Name, and optionally fill in Profile and Record Type to scope visibility.
   6.​ Set Type to Default.
   7.​ Under Displayed Columns (Columns 2–5), configure the following example fields:
           a.​ Column 3: LSC_Segment__c
           b.​ Column 4: HealthcareProviders.Specialties
           c.​ Column 5: HealthcareProviders.ProviderType
           d.​ Enable Override the Column 2 field with the Next and Previous Visit field.
   8.​ Enable the Is Active checkbox.
   9.​ Click Save.

Part 2: Configure and Govern Filterable Fields and List Behavior

This configuration ensures that reps segment accounts using only approved business attributes,
and that all list actions and filtering behaviors are consistently enabled across the field.

Step A: Define the Approved Filter Fields (Field Set Governance)

   1.​ From Setup, open Object Manager.
   2.​ Select Account.
   3.​ Click Field Sets.
   4.​ Click New and create a field set named Available Filter Fields.
   5.​ Add the fields you want reps to use for segmentation (for example: Account Name,
       Active, Type, etc).
   6.​ Click Save.

Step B: Apply the Field Set and Enable General Filter Settings

   6.​ Open the App Launcher.
   7.​ Search for and select Admin Console (Life Sciences Commercial).
   8.​ Select the Lists and Filters tile.
   9.​ Navigate to the Filters tab.
   10.​From the Account dropdown, select the field set:
            ○​ Available Filter Fields
   11.​Review the general filter settings in this tab (for example: Advanced Filter and other
       filter behavior settings). Confirm that all required filter options are enabled.
   12.​Click Save.

Step C: Enable Account List Actions (Execution Readiness)

   1.​ While still in the Lists and Filters tile, navigate to the Account List Actions tab.
   2.​ Review all available action checkboxes (for example: multi-select, bulk actions, and
       other list-level behaviors).
   3.​ Confirm that all required actions are enabled.




   4.​ If any settings are disabled, enable them.
   5.​ Click Save.

This ensures Evan can take action directly from segmented lists without functional gaps.

Part 3: Configure the Record Type Filter

This ensures reps can correctly segment by account record type and avoid mixed targeting.

   8.​ Open the Admin Console (via the App Launcher) and select Account Management.




   9.​ Go to the Account Search Preference tab.
   10.​Under Account Record Type APIs, move the desired record type values into the
       Selected Values box.




   11.​Click Save.

Part 4: Configure Quick Actions in the Account List
This allows Evan to take relevant action directly from a segmented list.

   1.​ From the App Launcher, open Admin Console (Life Sciences Commercial).
   2.​ Select the Quick and Custom Action Administration tile.
   3.​ Open the Quick Actions section.
   4.​ Click New.
   5.​ Set the Location to Search, and add the desired quick actions (e.g., New Visit, Email).
   6.​ Assign visibility by selecting the appropriate Profiles or Permission Sets (e.g., Life
       Sciences Field Sales Representative).




   7.​ Click Save.
   8.​ Click Generate Metadata to apply the update to mobile.



Verification: Test as the End-User
Log in as Evan Casto to validate that you have solved his problem.

   1.​ Log in as Evan Casto to validate that Marcus's requirement for a guided plan is met.
   2.​ Navigate to the Account tab.
3.​ Check 1: Column Configuration
       a.​ Verify: The following columns are visible based on the admin configuration:
               i.​ Column 2: Last Visit
               ii.​ Column 3: Segment
               iii.​ Column 4: Specialties
               iv.​ Column 5: Provider Type
       b.​ This confirms that Evan sees a standardized, governed list layout.
4.​ Check 2: Filter Field Governance
       a.​ Verify: Create a new filter in the Account List view. Under the Account field
           selector, ensure that only the restricted, approved fields defined by Admin
           appear when building a dynamic filter.
       b.​ This confirms that segmentation is governed and aligns with Sales Operations’
           targeting strategy.
5.​ Check 3: Take Actions for Accounts
       a.​ Verify:
               i.​ Click the three-dot menu and confirm that the configured Quick Actions
                     are available.
               ii.​ Multi-select several accounts from the list. Confirm that Evan can:
                         1.​ Perform the Bulk Update
                         2.​ Initiate Bulk Actions such as creating visits or sending emails
       b.​ This confirms that Evan can take action directly from his targeted HCP segment
           without navigating away from the list.
6.​ Check 4: Record Type Filtering
       a.​ Verify: The configured account record type filters are available on the top of the
           account list.
       b.​ This confirms that Evan can correctly segment by account type and avoid mixed
           targeting.
Activity Timeline
                   Activity Timeline
Makana Pharma is a leading biopharmaceutical company in the midst of its critical launch for
Immunexis, a new specialized autoimmune disorder treatment. As field execution ramps up,
the success of this launch now depends not only on targeting the right HCPs, but also on
maintaining clear visibility into day-to-day sales activities and engagement follow-through.


Scenario
As the Immunexis launch intensifies, Evan Casto is engaging the same HCPs and institutions
across multiple touchpoints—his own visits, colleague visits, emails, and other interactions.
However, this activity data is scattered across different records and views, making it difficult for
him to see a complete engagement history in one place.

Evan needs a 360-degree view of the account to understand what interactions have already
occurred, what his colleagues have discussed, what content was shared, and what follow-ups
are pending, so he can better prepare for his next visit. Without a unified timeline, Evan risks
repeating conversations, missing critical follow-ups, and lacking full context for his upcoming
engagements.

He needs a single, chronological view that brings together all interactions across both HCP
and HCO levels to prepare confidently for every engagement.

That solution is the Activity Timeline.


Enablement Goal
We need to configure the Activity Timeline to give Evan a complete, unified engagement
history for his accounts:
   ●​ Enable the Activity Timeline on account record pages.
   ●​ Configure the timeline filters to allow users to customize their focus by:
         ○​ Different activity types
         ○​ Rolling up HCP activities into the affiliated HCO timeline
         ○​ Address filtering
         ○​ Territory filtering
   ●​ Enable key activity types with key information to ensure meaningful visibility into
      each interaction


Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:
   ●​ Permission Set: Ensure your user has the Life Sciences Commercial Admin
      permission set.
   ●​ User Object Access: Ensure your user has View All Records access to all these objects:
              a.​ Product Disbursements
              b.​ Provider Visits
              c.​ Provider Visit Product Detailings
   ●​ Technical Prerequisites: Your org must have the required user profiles ("Medical Sales
      Rep") , Apex class access , and metadata cache configured as specified in the core
      setup guide. This exercise assumes this one-time setup is complete.
   ●​ Activity Data: Your org must have sample activities created, such as visits, emails,
      assessment tasks, medical inquiry etc.
   ●​ Account and Address Data:
          ○​ HCP Account: Dr. Aaron Morita with multiple active contact point address records
          ○​ HCO Account: Aspem Surgery Center
   ●​ Territory Record: TM - SPC - San Francisco North 20D02T12.


Step-by-Step Configuration
Part 1: Configure Fields Displayed on Each Activity Type
This step controls what detailed information Evan sees inside each activity card on the
Activity Timeline. Proper field configuration ensures he can quickly understand what happened
during past interactions without opening each record.

Part 1A: Define the Fields to Display on Visit Activities (Field Set)
   1.​ Log in to your Salesforce org as an Administrator.
   2.​ Navigate to Setup.
   3.​ In the Quick Find box, search for Object Manager.
   4.​ Open the standard Visit object.
   5.​ Navigate to Field Sets.
   6.​ Click New and create a new Field Set with the name (e.g., Visit Timeline).
   7.​ Add the desired fields to the Field Set (e.g., Channel, Place, Status, Visitor, etc.).
   8.​ Click Save.

Part 1B: Apply the Field Set to the Activity Timeline
   9.​ From the App Launcher, open the Admin Console (Life Sciences Commercial).
   10.​Select the Activity Timeline tile.




   11.​Go to Activity Timeline Visibility Settings.
   12.​In the Field Set dropdown for Visit, select the Field Set you just created.
   13.​Click Save.

Part 1C: Enable Additional Visit Information in Timeline
   14.​While still in the Activity Timeline administration settings, navigate to the Activity
       Timeline General Settings tab.
   15.​Verify that the following settings are enabled, and if any of these are disabled, enable
       them.
           a.​ Let users view products discussed during visit
           b.​ Let users view samples discussed during visit
           c.​ Show intelligent content thumbnails




   16.​Click Save.


Part 2: Manage the Activity Timeline Display Text
This step controls the display text and labels that appear on each activity in the Activity
Timeline. Proper configuration ensures Evan Casto can quickly scan past interactions and
understand key context without drilling into each record.

* Because the Activity Timeline requires properly configured display text to show activities
correctly, we have already created a complete set of display text labels in this training org.

** For exercise purposes, you can create additional custom labels with different text values and
apply them to the Visit activity type.

Part 2A: Create Custom Labels for Activity Timeline Display Text

   1.​ Log in to your Salesforce org as an Administrator.
   2.​ Navigate to Setup.
   3.​ In the Quick Find box, search for Custom Labels.
   4.​ Click New Custom Label.




   5.​ Create the following example custom labels (repeat the steps for each label) with
       dynamic text:
          a.​ Custom Label 1: Planned Visit Header
                  i.​ Short Description: TimelinePlannedVisitHeader
                 ii.​ Name: TimelinePlannedVisitHeader
                iii.​ Value: A visit was started by {0} in territory {1}
          b.​ Custom Label 2: Planned Visit Link
                  i.​ Short Description: TimelinePlannedVisitLink
                 ii.​ Name: TimelinePlannedVisitLink
                iii.​ Value: finish your visit
          c.​ Custom Label 3: Planned Visit Prefix
                  i.​ Short Description: TimelinePlannedVisitPrefix
                 ii.​ Name: TimelinePlannedVisitPrefix
                iii.​ Value: Don’t forget to
          d.​ Custom Label 4: Planned Visit RollUp Label
                  i.​ Short Description: TimelinePlannedVisitHeader
                 ii.​ Name: TimelinePlannedVisitHeader
                iii.​ Value: A visit was started by {0} in territory {1}
   ●​ Pro Tips: Custom labels support dynamic text tokens such as {0} and {1}, which are
      automatically replaced with corresponding field values at runtime. This allows you to
      create flexible, context-aware timeline summaries that adapt to each activity record. (For
      additional details on how dynamic text parameters work, please refer to the complete
      help documentation.)

Part 2B: Apply the Display Text Labels in the Activity Timeline Settings
   1.​ From the App Launcher, open the Admin Console (Life Sciences Commercial).
   2.​ Select the Activity Timeline tile.
   3.​ Navigate to Activity Timeline Display Text Settings.
   4.​ Click New (if the planned visit text configuration does not exist), or Edit the existing
       Planned Visit display text configuration
   5.​ Complete the form as follows:
           a.​
               Name                                        Planned_Visit

               Activity Header Custom Label                TimelinePlannedVisitHeader

               Prefix Text for Body                        TimelinePlannedVisitPrefix

               Activity Type Object                        Visit

               Fields to Display in Header                 Status

               Link Text for Body                          TimelinePlannedVisitLink

               Rolled-Up Activity Header Custom            TimelinePlannedVisitRollUpLa
               Label                                       bel

               Status                                      Planned
   6.​ Click Save.

Part 3: Configure a Custom Activity to Appear on the Activity Timeline
In many customer implementations, reps rely on additional activity types that go beyond the
standard Visit, Email etc. The Activity Timeline supports these custom activities, as long as
they follow the required object structure and are activated in the admin settings.

This exercise walks you through creating a custom activity object, enabling it in the timeline, and
validating that it displays correctly for Evan Casto.

Note:​
To simplify this exercise, a custom object named Account Activity has already been created in
your training environment. You may either:

   ●​ Start from Part 3A to practice creating the custom object yourself, or
   ●​ Skip directly to Part 3B if you prefer to work with the pre-created object.



Part 3A: Create the Custom Activity Object

   1.​ Log in to your Salesforce org as an Administrator.
   2.​ Navigate to Setup.
   3.​ In the Quick Find box, search for Object Manager.
   4.​ Click Create | Custom Object.
5.​ Create a new custom object
6.​ After saving, create the following required fields, which must align with AFLS Activity
    Timeline requirements:
        a.​
            Fields               API name             Data Type           Description
           Account              Account__c           Lookup(Account)      Linked Account
           Entity Id            Entity_Id__c         Text (255)           Tracked record Id
                                                                          Can be used for additional
                                                                          grouping records for the same
                                                                          object by some criteria, e.g.
                                Entity_Sub_Type_                          object type or record type
           Entity Subtype       _c               Text (255)               name.
           Entity Type          Entity_Type__c       Picklist             List of tracked custom objects
                                                     Long Text Area       Holds event data in json
           Event Data           Event_Data__c        (131072)             format
                                Event_Date_Time_                          Date and Time when the event
           Event Date Time      _c               Date/Time                happened
                                                                          Valuable data from related
                                                                          record. It is used as criteria in
                                                                          Account Activities section of
           Event Title          Event_Title__c       Text (255)           dynamic filter.
                                                                          Records marked as checked
                                                                          would be excluded from
           Hide From Activity Hide_From_Activit                           account activity history
           History            y_History__c      Checkbox                  timeline
           Subtitle             Subtitle__c          Text (255)           Event Subtitle
           Title                Title__c             Text (255)           Event Title

7.​ For the Event Type picklist, click New and add new picklist values that use the exact
    same label and API name as the custom activity type you want to display on the
    timeline. Ensure these values are activated.
   8.​ Click Save.

Part 3B: Enable the Custom Activity in Activity Timeline Settings

   1.​ From the App Launcher, open Admin Console (Life Sciences Commercial).
   2.​ Select the Activity Timeline tile.
   3.​ Navigate to Activity Timeline Visibility Settings.
   4.​ Scroll to the Custom Activities section.
   5.​ Enable the Custom Activities setting. From the dropdown, select the custom object you
       created in Part 3A.




   6.​ Click Save.
Part 3C: Create Example Custom Activity Records

   1.​ Click the App Launcher.
   2.​ Search for the custom object that you just created
           a.​ If you do not see it listed:
                   i.​ Navigate to Setup > Tabs
                  ii.​ Create a Custom Tab for your custom object
                 iii.​ Make it Default On for relevant apps




   3.​ Open the custom object and click New.
   4.​ Create a new record with the following fields populated:
           a.​ Account
           b.​ Event Type
           c.​ Event Title
           d.​ Title
           e.​ Subtitle
           f.​ Event Date Time
   5.​ Click Save.



Verification: Test as the End-User
Log in as Evan Casto to validate that the Activity Timeline in Account Profile now gives him full
visibility into account interactions.

   7.​ Check 1: Unified Activity Timeline Visibility
          a.​ Verify: On Aaron Morita’s Account Activity Timeline, it displays:
                  i.​ All activity types (Visits, Emails, Custom Activities)
                  ii.​ Correct display text (header, prefix, link text)
                  iii.​ Configured fields from your field sets when expanding an activity
                  iv.​ Additional Visit details (products, samples, intelligent content thumbnails)
          b.​ This confirms Evan has a clear, unified view of all interactions with the account.
   8.​ Check 2: HCO-Level Activity Roll-Up
          a.​ Verify: Navigate to the affiliated HCO Account (Aspem Surgery Center). Confirm
              the affiliation filter is available, where affiliated HCP accounts’s activity are
              displaying under the HCO account timeline
b.​ This confirms that Evan can understand institution-level engagement, not just
    individual doctor interactions.
Data Change Request
       Data Change Requests
Background
Makana Pharma is a leading biopharmaceutical company preparing for the highly anticipated
launch of Immunexis, a new specialized autoimmune disorder treatment. Data integrity is not
just a goal; it's a core compliance requirement.

Scenario
The Immunexis launch is in full swing. Marcus Thorne (VP of Sales Operations) is furious. He
has uncovered a major "Compliance & Data Decay" problem. During a ride-along, he watched
Evan Casto (Specialty Sales Rep) find an incorrect address for a key HCP. He tried to correct
it, but there was no official process, so he just "overwrote" the data.

This is a massive compliance risk. What if he had updated the wrong field? What if the change
was incorrect? Makana has no audit trail, and this "fix" could lead to samples being sent to an
unverified location. Marcus needs a "quality control checkpoint" to ensure all critical data
changes are validated before they go live.

Personas
   ●​ Marcus Thorne: VP of Sales Operations (The Admin & Data Steward/Approver)
   ●​ Evan Casto: Specialty Sales Representative (The End-User / DCR Submitter)
   ●​ You: The SI Technical Consultant (The Implementer)


User Story
As a Sales Operations Implementation Consultant, I need to configure the Data Change
Request (DCR) framework so that when Evan Casto submits a correction to an address, the
change is not applied immediately but is routed to a Data Steward (Marcus) for approval,
ensuring data is validated before appearing in the system.

Enablement Goal
We need to configure the DCR features to solve this:
   ●​ Enable DCR for the Account object and its related entities from the Admin Console.
   ●​ Configure the Profile Setting to Don’t apply changes immediately to enforce a strict
      approval-first workflow.
   ●​ Set up the Data Change Request Validation Types for "Internal" validation.
   ●​ Create a Managed Field to trigger the DCR process when an address is changed.
   ●​ Deploy the lsc4ce:dataChangeListWithApproveReject Lightning component so Data
      Stewards can approve or reject changes.



Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:
   ●​ Admin Permissions: Your admin user has the Customize Application and Life
      Sciences Commercial Admin permission sets.
   ●​ Country Records: You have added the required LifeSciCountry records (e.g., "United
      States").
         ○​ Install Salesforce Benchpress Chrome Extension
         ○​ Click Utilities and Apex Execute
         ○​ Paste the following code in the Code to Send box, then click Execute

                      LifeSciCountry c = new LifeSciCountry();
                      c.developername = 'US';
                      c.isocode = 'US';
                      c.masterlabel = 'USA';
                      c.language = 'en_US';
                      insert c;


         ○​ Make sure you have configured a User Additional Info record for the logged in
            user (Evan Casto) with preferred country (US) and available countries.
   ●​ Account Record: An HCP Person Account named Dr. Lucas Grant.
   ●​ Related Record: Dr. Lucas Grant has a Contact Point Address record. Note its current
      Address (e.g., "123 Main St").



Step-by-Step Configuration
Part 1: Configure DCR in the Admin Console
Next, we will turn on the DCR feature for Accounts and set the strict approval-first behavior.
   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select the Account Management tile.
   3.​ In the left navigation pane, select Data Change Request.
   4.​ Turn on Object Status to activate DCR for the Account object and its related entities.
   5.​ Under Profile Settings, find the Org-Wide Default row and make sure it is Active.
   6.​ Set the Field Update Type to Don’t apply changes immediately.​
       Pro Tip: This is the optimal setting for a strict compliance gate. It ensures that changes
       submitted by Elena are only visible after a data steward approves them.
   7.​ Click Save.


Part 2: Configure Validation Types
We need to tell DCR how to validate Person Accounts. We will set them for internal validation by
Marcus.
   1.​ While in the Admin Console > Account Management section, select Data Change
       Request Validation Types.
   2.​ Click Add Record Type.
   3.​ Record Type: Health Care Provider (or your equivalent HCP record type).
   4.​ Validation Type: Internal.
   5.​ Countries: All (or select the specific country you created in Prerequisites).
   6.​ Click Save.


Part 3: Define the Managed Field (The "Trigger")
This step tells the DCR framework which fields to "listen" to. Any change to these fields will now
fire a DCR.
   1.​ From the App Launcher, find and select the Life Science Data Change Definition
       Managed Field tab.
   2.​ Click New.
   3.​ Fill in the following details:
            ○​ Name: Contact Point Address
            ○​ Object Name: ContactPointAddress
            ○​ Field API Name: Address
            ○​ Validation Type: Internal
            ○​
   4.​ Click Save.
   5.​ (Optionally) Repeat this process for any other compliance-critical fields, such as
       BusinessLicense or ProviderAffiliation.


Part 4: Create the Approval UI
Finally, we need to give Marcus (the Data Steward) a place to approve Elena's requests.
   1.​ Navigate to Setup.
   2.​ In the Quick Find box, type Tabs. Select Tabs.
   3.​ In the Lightning Component Tabs section, click New.
   4.​ Lightning Component: lsc4ce:dataChangeListWithApproveReject.
   5.​ Tab Label: DCR Approvals.
   6.​ Select a tab icon (e.g., "File") and click Next.
   7.​ Make the tab visible for your Admin profile ONLY. Click Next.
   8.​ Generate Cache:
           ○​ Click Generate Metadata Cache (Admin Console > Mobile > Metadata Cache)
           ○​ Click Skip Validation to speed up the metadata process.
           ○​ Wait for the completion status.



Verification: Test the End-to-End Flow
This is a 3-step verification process involving both the Rep (Elena) and the Admin (Marcus).

Step 1: (As Elena - The Rep) Submit the Change
   1.​ Log in as User: Evan Casto.
   2.​ Navigate to Dr. Lucas Grant's Account record.
   3.​ Find the Contact Point Address (Related List) record. Change Address Line from "123
       Main St" to "987 Market St".
   4.​ Click Save.
   5.​ Verification: Refresh the page. Look at the address.
           ○​ Verify: Does the address still say "123 Main St"? It should. Your change was not
              applied because the Don't apply changes immediately setting is active.



Step 2: (As Marcus - The Admin) Approve the Change
   1.​ Log out as Evan and Log in as your Admin.
   2.​ Navigate to the Pharma Sales Admin app.
   3.​ Click the new DCR Approvals tab.
   4.​ Verification:
           ○​ Verify: Do you see the pending DCR for Dr. Lucas Grant?
           ○​ Verify: Does it clearly show the "Old Value" ("123 Main St") and "New Value"
               ("987 Market St")?
   5.​ Check the box next to the DCR and click the Approve button. The DCR record status is
       now Approved.

Step 3: (As Elena - The Rep) Confirm the Change
   1.​ Log out as Admin and Log back in as Evan Casto.
   2.​ Navigate back to Dr. Lucas Grant's Account record and view his address.
   3.​ Verification:
          ○​ Verify: Does the AddressLine1 now show "987 Market St"? It should..
Consent Management
       Consent Management
Business Use Case
Makana Pharma is preparing for the critical launch of its new Autoimmune disorder drug,
Immunexis 50mg. Sarah Jenkins, Director of Compliance, has flagged a major compliance
gap: the company has no auditable system for tracking Health Care Professional (HCP)
communication consent. This non-compliance with data privacy regulations has halted all
pre-launch digital marketing.

Your objective is to configure the AFLS (AFLS) Consent Management module.
This configuration must provide a compliant, centralized system for consent capture. The goal
is to enable field sales reps, like Evan Casto, to legally and efficiently capture an HCP's
communication preferences (Opt-in, Opt-out) for specific subscriptions (like the "Immunexis
KOL Webinar Series") and channels (like Email) directly on her tablet during a visit.


The Team:
   ●​ Sarah Jenkins: Director of Compliance & Data Privacy
   ●​ Evan Casto: Field Sales Rep




The Enablement Goal:

As the System Integrator, you are tasked with configuring the AFLS Consent Management
module to resolve this critical gap. Your configuration must enable:

   ●​ Consent Administration: Configuration of the Consent Admin console to define global
      settings, data use purposes (e.g., "Marketing Communications," "Clinical Trial
      Outreach"), and consent channels (e.g., "Email," "Phone," "In-Person").
   ●​ Subscription Management: Creation of specific Subscription records (e.g.,
      "Immunexis Monthly Newsletter," "KOL Webinar Invites") linked to the defined data use
      purposes.
   ●​ Legal Content Setup: Configuration of Compliance Statement records to store the
      specific, approved legal disclaimers (View Disclaimer) that must be displayed to HCPs
      before capture.
   ●​ Field Capture Workflow: Configuration of the Account layout and mobile views to allow
      the Field Sales Rep (Evan Casto) to seamlessly Capture Consent (including Capture
      Signature on a tablet) for an HCP during a face-to-face meeting.
   ●​ Centralized Reporting: Ensuring all captured preferences (opt-ins and opt-outs) write
      directly to the CommunicationSubscriptionConsent objects, providing Sarah Jenkins
      with a centralized, auditable "golden record" of all HCP consent.




Configuration Steps
Part A: Configure Global Consent Settings
First, you must check the global, org-wide rules for how consent will be managed, as defined
by Sarah Jenkins' compliance team. Verify the below Admin settings for Consent
Management.
   1.​ From the App Launcher, find and select Life Sciences Commercial app and then
       select Admin Console.
   2.​ Search for and select Consent Administration.
   3.​ In the general settings, configure or verify the following based on Makana's
       compliance policy:
           ○​ Select Allow users to select ‘Not Asked’ as the consent status.
           ○​ Select Allow Sales Reps to lock the consent capture screen
           ○​ Select Allow users to view the signature captured during consent’s last
               update.
   4.​ In the Signature Section, set the requirement to Required. Sarah Jenkins has
       mandated that all consent captures must include a signature for auditability.
   5.​ Click Save.


Part B: Create the Consent Data Structure
Next, you will create the specific records that define what Evan Casto can capture consent
for. This involves defining the product, the communication topic (subscription), and the
channel (how).

1. Create the Data Use Purpose (The "Why")

This record links consent to a specific product, in this case, Immunexis.

   1.​ From the App Launcher, find and select Data Use Purpose.
   2.​ Click New.
   3.​ Enter the Name as Immunexis Marketing.
   4.​ In the Purpose field, select Life Sciences Marketable Product.
   5.​ In the Product lookup, select Immunexis 50 mg (Note: Assume this "Marketable
       Product" record was created in a previous module).
   6.​ Click Save.

2. Create the Engagement Channel Type (The "How")

You need to define "Email" as a channel. (Check if it exists first. If not, create it).

   1.​ From the App Launcher, find and select Engagement Channel Types.
   2.​ Click New.
   3.​ Enter the Name as Email.
   4.​ For Contact Point Type, select Email. This links the channel to the Contact Point
       Email object.
   5.​ Select Active.
   6.​ Click Save.

3. Create the Communication Subscription (The "What")

This is the specific marketing campaign or topic Evan will be getting consent for.

   1.​ From the App Launcher, find and select Communication Subscriptions.
   2.​ Click New.
   3.​ Enter the Name as Immunexis KOL Webinar Series.
   4.​ For Data Use Purpose, look up and select the Immunexis Marketing record you
       created in step 1.
   5.​ Click Save.

4. Link the Subscription to the Channel

Now, you must explicitly link the "Webinar Series" to the "Email" channel.

   1.​ From the App Launcher, find and select Communication Subscription Channel
       Types.
   2.​ Click New.
   3.​ Enter “Immunexis KOL Email” for the name field
   4.​ For Communication Subscription, look up and select Immunexis KOL Webinar Series.
   5.​ For Engagement Channel Type, look up and select Email.
   6.​ Click Save.

5. Create the Compliance Statement

This is the legal text that will be displayed to the HCP before they sign.

   1.​ From the App Launcher, find and select Compliance Statement Definitions.
   2.​ Click New.
   3.​ In the Statement Text (or similar rich text field), enter: I consent to receive marketing
       and promotional communications from Makana Pharma regarding Immunexis and
       related topics via the channels selected. I understand I can opt-out at any time. (This
       text will be stored for audit purposes). Please include this text in rich text format with
       html tags and if needed provide a Title saying “Makana Pharma Consent Disclaimer”
       within the html
   4.​ Select Module Type as Consent
   5.​ Statement Requirement Level as Required
   6.​ Statement Type as Disclaimer
   7.​ Display Order as 1
   8.​ Click Save.


Part C: Add the Consent UI to the HCP Page Layout
Finally, you must make this functionality visible to Evan Casto on the HCP's Account page.
Note: Check if your org should already has the Consent tab and UI in the HCP Page layout, if
not follow the below steps
   1.​ Navigate to an Account record (e.g., "Dr. Lucas Grant").
   2.​ Click the Gear Icon and select Edit Page.
   3.​ Click on the main Tabs component on the canvas.
   4.​ In the properties pane on the right, click Add Tab.
   5.​ Select the new tab. In the Tab Label dropdown, select Custom.
   6.​ Enter the Custom Label as Consent and click Done.
   7.​ From the Components list on the left, find and drag the Consent component onto the
        new Consent tab you just created.
   8.​ Next, drag a Related List - Single component from the left panel onto the Consent
        tab, placing it below the Consent component.
   9.​ In the properties for the Related List - Single component, select Communication
        Subscription Consents as the Related List. This will show Sofia a history of all consent
        given by the HCP. Note: Ensure that “Communication Subscription Consents” are
        added to Related Lists of “Person Account” object in Object Manager.
   10.​Click Save.
   11.​ Click Activation.
   12.​ Click the App, Record Type, and Profile tab.
   13.​ Select the AFLS for Customer Engagement app. Click Next.
   14.​ Select the Person Account Record Type. Click Next.
   15.​ Select the Life Sciences Field Sales Representative and System Administrator
        profiles. Click Next.
   16.​ Click Save.
   17.​ Click Back (arrow) to leave the App Builder.
Mobile Metadata Cache
   1.​ Navigate to Admin console of the Lifesciences Commercial app and click Mobile tile
   2.​ Go to “Object Metadata Cache Configuration” section
   3.​ Ensure the consent objects are added to Mobile metadata cache generation for the
       Field Sales Rep profile assignment

Here's the list of objects used for managing consents.


        Name                                                     Type


        DbSchema_EngagementChannelType                           Data


        DbSchema_DigitalSignature                                Data


        DbSchema_DataUsePurpose                                  Data


        DbSchema_ComplianceStatementDef                          Data


        DbSchema_CommSubscriptionConsent                         Data


        DbSchema_CommSubscriptionChannelType                     Data


        DbSchema_CommSubscription                                Data


        DbSchema_CommSubConsentCmplSnpsht                        Data




   4.​ Go to the Metadata Cache section and generate a metadata cache for the FIeld Sales
       Rep profile.
   5.​ Once cache is generated successfully, you can test this out by logging into iPad and
       syncing the cache.




Verification
Let's test your configuration by acting as the sales rep, Sofia Rossi.
   1.​ Navigate to the Account record for Dr Lucas Grant on iPad.
   2.​ Click the new Consent tab you added.
   3.​ Tap on the “Consent Capture” button in iPad or “Edit” button in Web which will take
        you to Consent update UI
   4.​ You should see the Immunexis KOL Webinar Series subscription listed.
   5.​ Tap against the Immunexis KOL Webinar Series for a specific channel value like Email
        or SMS .
   6.​ For the Immunexis KOL Webinar Series, select the Opt-In radio button for the Email
        channel.
   7.​ A signature pad should appear (because you set it to Required in Part A).
   8.​ You should see the Compliance Statement Definition text you wrote. Accept the
        disclaimer by checking the box
   9.​ Capture a Digital Signature (draw).
   10.​Tap ‘lock’ icon on top right corner (assuming the Rep handed the iPad to HCP to sign
        the consent) and now the Rep is unlocking the iPad
   11.​ Upon ‘unlocking’, the app will authenticate the user (touch ID / face ID) and then
        “Accept” button is enabled.
   12.​ Tap “Accept” button to save the consents.
   13.​ Look at the Communication Subscription Consents related list and the captured
        signature in “View signature” button.
   14.​ Result: You should see a new record in the related list, timestamped, with a status of
        "Opt-In" for the "Immunexis KOL Webinar Series." This record is the auditable proof
        Sarah Jenkins needs.


Key Takeaways & Data Model Concepts
In this exercise, you configured a robust, compliant consent capture system. Here are the key
objects you used:
   ●​ Data Use Purpose: The parent "reason" for consent, linked to a product (e.g.,
      Immunexis Marketing).
   ●​ Communication Subscription: The specific topic an HCP consents to (e.g.,
      Immunexis KOL Webinar Series).
   ●​ Engagement Channel Type: The method of communication (e.g., Email, Phone).
   ●​ Comm. Subscription Channel Type: The junction object that links a Subscription to a
      Channel.
   ●​ Compliance Statement Definition: Stores the legal text shown to the HCP.
   ●​ Communication Subscription Consent: The final "consent" record, storing the HCP's
      choice (Opt-In/Out) for a specific subscription and channel. This is the primary audit
      record.
   ●​ Digital Signatures: Stores the actual signature image captured from the user.
●​ Comm. Subscription Compliance Snapshot: A "snapshot-in-time" of the consent
   capture, including the legal text shown, signature, and other details, providing a
   complete audit trail.
Account Summarization
Exercise: Configuring GenAI Account Summarization

Objective

In this exercise, you will configure and deploy the Account Summarization solution. You will
enable the necessary Generative AI permissions, define the data scope using a Cross-Object
Graph, and customize the Prompt Template to generate "smart summaries." This ensures users
like Evan Casto receive an instant, offline-capable briefing on key account details and recent
interactions without navigating multiple tabs.

Business Use Case

While the new Provider Card layout has reduced clicking, Marcus Thorne (VP of Sales Ops)
realizes that Evan Casto is still spending too much time mentally synthesizing data. Before
walking into Dr. Lucas Grant’s office, Evan needs to know: “What has changed since I was last
here?” and “What did the Medical Science Liaison discuss last week?”.

Marcus wants to deploy the Account Summarization component to provide an AI-generated
briefing that captures:

   ●​ Key Information: Accreditations, Affiliations, and Strategic Activity Goals.
   ●​ Recent Changes: Updates to the account record and related objects over the last 90
      days.
   ●​ Activity Context: Summaries of recent visits, product messages, and inquiries.

Your task is to configure the "Brain" behind this view, ensuring the AI looks at the right data
(including Visit notes) and updates the summary daily.

Prerequisites

Before configuring the logic, ensure the "plumbing" for AI and permissions is active.

   1.​ Assign Admin Permissions: Ensure your user has the Health Cloud Starter, Life
       Sciences Commercial Admin, Access Life Sciences Customer Engagement
       Agentforce and Prompt Template Manager permission sets.
   2.​ Assign User Permissions: Ensure the target user (Evan) has the Life Sciences Field
       Sales Representative, Access Life Sciences Customer Engagement Agentforce
       and Prompt Template User permission sets.
   3.​ Enable Features in Setup:
          ○​ Turn on Einstein Setup (Setup > Einstein Setup > Toggle On) to allow the
              creation of prompts using Einstein Generative AI.
          ○​ Turn on Territory-Based Derived Sharing: Go to Setup > Life Sciences for
              Customer Engagement Setup > Enable AFLS for Customer
              Engagement Features and toggle ‘On’ Territory-Based Derived Sharing.
           ○​ Turn on Account Summarization: Go to Setup > Life Sciences for Customer
              Engagement Setup > Configure Account Summarization For Customer
              Engagement and toggle ‘On’ Account Summarization.
           ○​ Turn on Cross-Object Field History: Go to Setup > Life Sciences for Customer
              Engagement Setup > Configure Account Summarization For Customer
              Engagement and select Enable Cross-Object Field History Setting. In the
              Cross-Object Field History pop-up screen toggle ‘On’




Part 1: Define the Data Scope (Cross-Object Graph)

The Account Summarization feature relies on a Cross-Object Graph to understand which
related objects should be included in the summary. The Account object acts as the root node.

   1.​ From Setup, in the Quick Find box, enter Cross-Object Field History Graphs
       and select Cross-Object Field History Graphs.
   2.​ Click New Graph.
   3.​ To utilize the industry best-practice structure, select the Account Summarization
       template and click Create Graph.
   4.​ In the Graph Properties modal:
           ○​ Label: Enter Makana 360 Summary Graph.
           ○​ Developer Name: Auto-populated (Make a note of this, e.g.,
                Makana_360_Summary_Graph).
           ○​ Click Save.
   5.​ The Graph Builder will open. You can add up to three levels of relationships and five
       nodes at each level. For the purposes of this exercise, we’ll use this clone of the
       out-of-box graph as-is.

Part 2: Enable History Tracking for "Recent Changes"

To allow the AI to summarize what changed (e.g., "Dr. Grant moved clinics"), you must explicitly
enable Field History Tracking on the specific fields you want to monitor.

   1.​ From Setup, click the Object Manager tab.
   2.​ Select Account.
   3.​ Navigate to Fields & Relationships and click Set History Tracking.
   4.​ Check Enable Account History.
   5.​ Select the following fields to monitor for the summary:
          ○​ Account Name
          ○​ Billing Address
          ○​ Phone
          ○​ Website
   6.​ Click Save.
           ○​ Note: In the Graph Builder, these fields will now show a suffix indicating
              (History Tracking Enabled).

Part 3: Configure the Graph for the Makana Profile

You must tell the system which graph to use for which users. You will assign your new graph
specifically to Elena's profile.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ In the left navigation, select Account Management -> Provider Summarization Graph
       Settings.
   3.​ Configuration Level:
           ○​ Select Profile to apply this specifically to the sales team,.
           ○​ Profile: Select Life Sciences Field Sales Representative.
   4.​ Graph Selection:
           ○​ For Provider Account Related Relationship Graph, search for and select
               Makana 360 Summary Graph (the graph you created in Part 1).
   5.​ Click Save.

Part 4: Customize the GenAI Prompt Template

The default prompt provides a standard summary, but Makana needs a specific section for
"Latest Interactions." You will customize the Prompt Template that formats the output.

   1.​ From Setup, find and select Prompt Builder.
   2.​ Select the Summarize Provider Account Related Information Trial Org template.
   3.​ In the top right, click the dropdown and select Save as a New Version.
   4.​ Customize the Instructions:
           ○​ In the prompt editor, locate the instructions area.
           ○​ Add a new instruction: "Create a section titled 'Latest Interactions' and
               summarize the key discussion points from the last 3 Visit records.".
           ○​ Note: Ensure the output format remains as JSON if required by the downstream
               components.
   5.​ Select Model: Choose GPT 4 Omni (or the available model in your training org).
   6.​ Click Activate. *

Part 5: Generate the Summaries (Automation)

The Summarize Provider Accounts batch job typically runs on a schedule. To verify your work
immediately, you will manually trigger the flow that drives this process.

   1.​ From Setup, in the Quick Find box, enter Flows and select Flows.
   2.​ Locate the flow labeled Run Account Summarization Batch Job, click to open the flow
       which launches Flow Builder..
   3.​ Click the Save As New Flow button, and enter Run Account Summarization
       Batch Job - Clone as the Flow Name (the API name is auto-populated). *Note -
       Since AFLS ships this batch job flow as a template flow, it needs to be saved as a New
       Flow to run it.
   4.​ Click the Debug and then Run.
           ○​ Context: This flow calls the Summarize Provider Accounts batch job, which
               triggers the Generate Provider Account Territory Summary flow to
               fetch data and pass it to your Prompt Template.
   5.​ Wait for the batch to complete. The system is now generating summaries and storing
       them in the Provider Account Territory Summary record.

Part 6: Verification & End User Experience

Now, simulate Elena’s morning preparation by viewing the generated summary.

   1.​ From the App Launcher, open the Provider Account Territory Summaries.
   2.​ Select the Provider Account Territory Summaries list.
   3.​ Review one of the newly generated summaries, the summary content is available in the
       Key Information Summary field JSON format.
   4.​ Verify the Output:
          ○​ Key Information: Check for Accreditations and Affiliations.
          ○​ Changes: Verify that updates made to the Account address appear here (based
               on the history tracking you enabled).
          ○​ Latest Interactions: Confirm that your custom prompt instruction worked and the
               summary includes details from recent Visit records.
          ○​ Offline Availability: Note that because of the batch job and metadata cache, this
               summary is now synced for Elena to view on her iPad, even without an internet
               connection.

     Success: You have transformed a static customer record into a dynamic, AI-driven
     briefing document. Elena can now understand the context of her account in
     seconds, satisfying Marcus Thorne’s vision of a data-driven, efficient sales force.

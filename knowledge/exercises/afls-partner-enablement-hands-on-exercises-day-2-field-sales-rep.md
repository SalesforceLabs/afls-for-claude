# AFLS _ Partner Enablement Hands On Exercises_ Day 2 _ Field Sales Rep

*Converted from PDF documentation*

---

Hands-On Lab
Agentforce Life
Sciences Cloud
 Hands-On Lab
  Participant Instructions :
Day 2 - Field Sales Rep Setup
Welcome
                                    Welcome!




AFLS for Customer Engagement (AFLS4CE) is built natively on the same trusted
core Salesforce platform architecture of Sales & Service Cloud, leveraging the core
administrative toolset that has led us to become the #1 CRM today such as
profiles/permissions, flows and automations, custom objects, page layout creation, etc. Unlike
competitors who require re-platforming and separate ecosystems, AFLS acts as
a central engagement hub while maintaining data integrity through the same metadata, APIs,
and governance standards that power these core clouds, allowing organizations to extend
their existing Salesforce investments while accessing industry-specific capabilities like HCP
engagement, samples management, and compliant content delivery.


You will see in the following exercises that many of the tools and UI components you are
familiar with should look the same, with the addition of all the AFLS4CE enhancements and
industry investment Salesforce has made. With AFLS4CE, you have full control over your
CRM administration and do not need to contact Salesforce to make changes on users,
reports, permissions, etc.




Hands-on Session:
Login, ideally in a new incognito window in Google Chrome:




https://login.salesforce.com

Use the credentials that you received when signing up for the event specific org:
https://orgfarm.salesforce.com/signup
Salesforce Administration
Harbour cruise
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
And you get to an editor where you can rearrange and customize the
screen layout to meet the business’ needs:
   2.​ Setup:
With the same gear icon, you can also get to the setup menu, where
you can manage the environment:
  -​   User Management, this is where Admins, PSP, MSL, Dia, … get
       different profiles and permissions,
  -​   Gmail integration
  -​   Apps: AFLS Medical, AFLS Commercial, KAM, Back Office,
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
across eight othis important elements of AFLS administration from the
Admin Console Tab:

Activity timeline settings
Email Templates




List and Filters
Mobile




Products, Hierarchies, Territories
Quick Actions




Rating
Remote Management
Hands On Exercise
Hands on Exercise
Intelligent Content
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
a structured flow, nor can they access them offline during hospital visits whose Wi-Fi is spotty.

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
Field Email
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

Configure the Field Email module to enable Evan to send a pre-approved "Immunexis
Follow-Up" template, allowing him to insert a Fragment but preventing him from altering the core
medical content. The template must be distributed solely to his specific sales territory, ensuring
proper content access control.




Sample Management
Company Profile

Makana Pharma is a rapidly growing biotech company specializing in novel autoimmune
disease and specialty treatments. Their lead product, Immunexis (Breakthrough Immunotherapy
for Autoimmune Disease), is classified as a Restricted Specialty Sample. Due to its high
acquisition cost and the strict regulations governing its distribution, every single sample unit is
treated as a high-value asset requiring stringent controls. Makana is committed to achieving
gold-standard compliance and mitigating the severe financial and regulatory risks associated
with sample distribution, loss or misuse.
The Team

   ●​ David Chen
         ○​ Director of Compliance and Sales Operations
         ○​ Core Responsibility: Ensuring all field activities, especially sampling, adhering to
             regulations and preparing for internal and external audits.
   ●​ Evan Casto:
         ○​ Specialty Sales Representative (the end user)
         ○​ Core Responsibility: Managing the physical inventory of high-value Immunexis
             samples in his trunk, accurately documenting all disbursements, and conducting
             inventory counts as needed.

The Scenario

Makana Pharma is scaling up the commercial launch of Immunexis. Due to its high cost and
restrictive distribution, the drug is subject to heightened scrutiny. The situation has become
urgent: a major competitor recently received a formal FDA warning letter regarding inadequate
sample accountability, triggering an immediate, mandatory internal PDMA Audit at Makana. This
audit will focus intensely on inventory reconciliation, sample custody, and the strict enforcement
of limits at the field representative level. Currently, the company is still relying on fragmented
systems and paper logs, resulting in frequent, unexplainable discrepancies between physical
counts and system records—a critical compliance vulnerability that must be eliminated before
the auditing is executed.

The Business Challenge

The current manual and disconnected system creates severe compliance and operational
friction that threatens Makana's launch stability:

   ●​ Critical Audit Failure Risk: The manual process for inventory checks forces reps to
      spend excessive time attempting to reconcile their physical sample counts with stale
      system data, often failing the mandatory reconciliation. This creates a documented lack
      of accountability that could lead to significant fines and reporting requirements.
   ●​ Chain-of-Custody Breakage: The system lacks automated tracking for the physical
      storage location making it impossible to establish an auditable chain of custody when
      high-value samples expire or are misplaced.
   ●​ Limit Breach & Self-Reporting: There is no real-time, preventative mechanism to block
      a sample transaction that would exceed an HCP's defined annual or quarterly sample
      limit. A breach necessitates costly and time-consuming mandatory self-reporting to
      regulatory bodies.
The Enablement Goal

To protect Makana Pharma from regulatory exposure and ensure Evan can operate compliantly,
the System Integrator must configure the AFLS platform to automate and enforce all inventory
controls for Immunexis.

The required technical configurations include:

   ●​ Inventory Setup/Config & Hierarchy: Implementing the Sample Inventory records for
      Immunexis and defining the Storage Location to ensure every physical sample location
      is electronically logged and auditable.
   ●​ Sample Limit Setup: Defining and enforcing granular Sample Limits (annual/quarterly)
      on Immunexis at both the HCP, product, Rep, and territory level, utilizing the
      Out-of-the-Box (OOTB) Limit Templates for standard enforcement rules.
   ●​ Sample Territory Allocation: Configuring the system to handle the Territory Allocation
      logic, ensuring samples are distributed based on territory business rules and that limits
      are applied correctly upon operation.
   ●​ Inventory Operations & Dashboard: Leveraging the Sample Inventory Dashboard to
      provide Evan with a real-time view of his stock and setting up streamlined Inventory
      Operations for receiving, transferring, and logging the storage location.
   ●​ Inventory       Assessment/Counting:         Configuring    the    structured  Inventory
      Assessment/Counting workflow that forces Evan to reconcile his physical count against
      the system record at required intervals (e.g., weekly), generating an electronic,
      time-stamped, and auditable log.
   ●​ Real-time Limit Enforcement during Disbursement: Ensuring the enforcement of
      limits happens dynamically and immediately at the point of action (e.g., within sample
      disbursement tom Provider) to block non-compliant transactions and prevent limit
      breaches.




Visit Management

Company Profile:

Makana Pharma is a leading biopharmaceutical company preparing for the highly anticipated
launch of Immunexis, a new specialized treatment for autoimmune disease.
The Team:

   ●​ Evan Rossi: VP of Sales Operations
   ●​ Evan Casto: Specialty Sales Representative (San Francisco North)

The Scenario: With the launch of Immunexis only days away, Evan Rossi needs to deploy the
new "Visit Engagement" experience to the field. He wants Evan Casto and his team to have a
"cockpit" view for their interactions—a Single Engagement experience where they can manage
everything from planning to sample drops in one place. Currently, the system is a blank slate.
When Evan logs in to test the app, she sees a generic page with no relevant tools. He cannot
find the sections to drop samples, record attendees, or view marketing content. Most critically,
the new drug, Immunexis, is missing entirely from the product selector, making it impossible for
him to record any detailing or sample requests for the company's most important asset.

The Business Challenge:

   ●​ Disjointed User Experience: Without the Visit Engagement configured, Reps are
      forced to navigate multiple standard tabs to perform basic tasks like logging Attendees or
      requesting Direct-to-Practitioner (DTP) shipping, slowing down field execution.
   ●​ Invisible Product Strategy: Because "Immunexis" has not been enabled in the Product
      Discussion settings, Reps cannot select it for detailing or samples, leading to zero data
      capture for the new launch.
   ●​ Missed Engagement Opportunities: Vital sections like Recommendations and
      Marketing Items are missing from the layout, preventing Reps from accessing intelligent
      content or leaving behind approved materials.

The Enablement Goal:

   ●​ Access the Visit Administration Console and configure the Visit Page Layout to
      activate the Visit Engagement application
   ●​ Add the specific Related Lists to the Visit Page Layout to enable the corresponding
      Sidebar Menu options: Presentation Forum (Content), Provider Visit Requested Sample
      (Samples & DTP), Provider Visit Marketing Item, Attendees, and Provider Visit Product
      Detailing.
   ●​ Navigate to Product Discussion Settings in the Admin Console to explicitly enable the
      product "Immunexis" and map it to the relevant Provider Visit Record Types so it
      appears in the Product Detailing and Samples sections.
   ●​ Configure Product Detailing Settings to ensure the "Product Selector" is active and
      allows Evan to add discussions for Immunexis.
   ●​ Generate a Metadata Cache to ensure the new layout, sidebar sections, and product
      configurations are immediately available on Evan’s mobile device.
Activity Plan

Company Profile:

Makana Pharma is a global biotechnology leader dedicated to advancing innovative therapies
that transform lives. With a hyper-focus on autoimmune disease and chronic inflammatory
diseases, the company is currently preparing for the pivotal launch of Immunexis, a high-value
specialty biologic designed to treat resistant carcinomas. Makana partners closely with
Healthcare Professionals (HCPs) and Healthcare Organizations (HCOs) to ensure safe,
compliant, and effective patient access to their therapies.

The Team:

   ●​ Stakeholder: Evan Casto, VP of Commercial Operations. He has designed a
      high-intensity "Launch Pulse" strategy that requires specific call frequencies on top-tier
      rheumatologists to ensure rapid adoption of Immunexis.
   ●​ End User: Sarah Jenkins, Senior autoimmune disease Account Manager. He manages
      a complex territory and needs clear, quantifiable targets (e.g., "Visit Dr. Shell 6 times this
      quarter") rather than vague instructions to "drive engagement."

The Scenario: The launch of Immunexis is critical for Makana’s FY25 revenue. Evan Casto
has determined that "Share of Voice" is the primary driver of adoption for this complex therapy.
He has mandated a specific engagement model: Tier 1 rheumatologists must receive 6
Whatsapp details and 3 SMS interactions per quarter.

However, Sarah Jenkins and his peers are currently operating in the dark. They receive
high-level spreadsheets from HQ with these targets, but their CRM (AFLS) doesn't reflect them.
Sarah has to manually track his visit counts against these spreadsheet targets, leading to errors
and "over-visiting" friendly doctors while neglecting difficult-to-access targets. Furthermore,
Evan has no real-time visibility into whether the field is actually adhering to the "6+3" frequency
cadence until the quarter is over—by which time it is too late to course-correct.

The Business Challenge:

   ●​ Strategic Disconnect: The specific "Call Plan" defined by HQ is not actionable in the
      CRM, leading to field reps prioritizing the wrong channels or the wrong frequency.
   ●​ Lack of Goal Visibility: Field Reps cannot visualize their "Percentage to Goal" for
      specific products (Immunexis) or channels (WhatsApp vs. SMS) in their daily workflow.
   ●​ Inability to Course-Correct: Without real-time "Actual vs. Planned" data, Sales
      Managers cannot intervene mid-cycle to help Reps who are falling behind on their
      activity targets.

The Enablement Goal:

To bridge this gap, the System Integrator must configure the Activity Plans (Strategic Cycle
Plans) capability in AFLS. Specifically, the learner must:

   ●​ Define Provider Activity Measure Types to categorize interactions (e.g., configure
      "Whatsapp Visit" and "SMS Call" as distinct measures based on the Visit object).
   ●​ Create a new Activity Plan record (Usage Type: "Provider Plan Cycle") to define the
      "FY25 Q1 Immunexis Launch" period.
   ●​ Configure Activity Plan Territories to link the plan to the specific sales territories (e.g.,
      "San Francisco North").
   ●​ Generate Provider Activity Goals and Provider Activity Goal Measures to assign
      specific numerical targets (e.g., Target: 6) to high-priority HCP Accounts.
   ●​ Associate Provider Activity Goal Measure Products to ensure these targets are
      specifically tracked against the Immunexis product, allowing Sarah to see his
      "Immunexis Call Attainment" directly on his home page dashboard.
Session Hands on Guide
These exercises would be completed during
the Hands on Session. Use the topic specific
tabs
Intelligent Content Guide
               Intelligent Content

The Enablement Goal
To resolve these challenges, the System Integrator must perform the following configuration
steps in the Admin Console:

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


Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:

   ●​ Permissions: Your user has the Life Sciences Commercial Admin permission set.
   ●​ Files: You have access to the sample content files provided in the workshop resource
      folder.https://sfdc.co/lscontent

Data: Products (Immunexis) and Messages are created in the org.
​
​
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

Part 1: Configure General Intelligent Content Settings


We must first establish the organizational parameters for presentation usage, tracking, and rep
customization.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select Intelligent Content, and then select Presentation Settings.




   3.​ Choose whether to apply settings at the organization level or for a specific user profile
       or individual user.
   4.​ Under Content Library Settings, find the setting Create custom presentations. Select
       this option to allow sales reps, such as Evan Casto, to combine approved pages into
   tailored presentations using the AFLS for Customer Engagement mobile
   app.
        ○​ Note: Users must also have Create and Edit permissions on the Presentation
           and Presentation Linked Page objects to use this functionality.




5.​ Under Tracking Settings, configure the following based on Makana’s compliance
    strategy:
        ○​ Use geolocation tracking: Select this option to capture the GPS location where
           the sales rep delivered the presentation.
        ○​ Pause tracking when player launches: Select this option to automatically
           pause tracking when a presentation starts, which avoids capturing metrics during
           training sessions (Reps can resume tracking manually).




6.​ Under Feedback Settings, select options to determine how HCP feedback is captured,
    for example: Capture feedback in player menu and/or Capture feedback on
    presentation screen.
   7.​ Click Save to apply your changes.
   8.​ Enable relevant trigger handlers (Goto -> Admin Console -> Trigger Handlers
       Administration):
           ○​ PresentationSharingHandler
           ○​ PresentationLinkedPageSharingHandler
           ○​ PresentationForumLockHandler




Part 2: Upload New Content Pages and Tagging



We will upload the marketing materials (ZIP/PDF) and link the pages to the Immunexis product
and related messages to ensure accurate reporting.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select Intelligent Content, and then select Presentations.
   3.​ Next to Create Presentation, click Upload New Pages.
4.​ Select the presentation ZIP files (for HTML content) or a single PDF. Salesforce
    supports both content types.




5.​ Click Upload Files
                i.​ Download the ZIP file from this URL: http://sfdc.co/lscontent (password:
                      hdBWqTgZ).
                ii.​ Unzip the file.
                iii.​ Open the "Intelligent Content" folder.
                iv.​ Upload all the files in this folder in one go.
6.​ After validation completes, click Next.
7.​ On the Presentation Pages screen, first define the products and messages that will be
    linked to the pages.




8.​ Click Add. Under Products, search for and select Immunexis
9.​ Select the related product messages for Immunexis​




                                                                                              ​

10.​Save your changes for the products and messages.
11.​Now, select the specific pages (thumbnails) in the list to assign the selected products
    and messages.
12.​Click Apply Products and Messages to link the selected items to the presentation
    pages.
        ○​ Insight: You can link each presentation page to multiple products or messages.
Part 3: Define Presentation Logic and Activate

We will create the parent presentation record, set the mandatory slides for compliance, and
determine when the content becomes visible to the field force.

   1.​ Update each page's name and select whether it is a mandatory page in the
       presentation.
          ○​ Crucial Step: Mark the first slide as Mandatory to ensure reps like Eva cannot
              skip it.




   2.​ If you uploaded presentation ZIP files, reorder the pages as needed.
   3.​ Click Next.
   4.​ On the Presentation Settings page, give the presentation a name (e.g., Immunexis
       First Deck).
5.​ Select dates for Activation and Deactivation to control when the presentation is
    available in the content library.
6.​ In the Topics field, enter tags (topics) such as autoimmune disease or Immunexis
    to help sales reps search and filter presentations later.
7.​ Configure options such as the Player Gesture and Side and the Feedback Panel
    Position.
8.​ If the presentation includes a PDF version, select Send presentation by email to
    enable reps to share the content via email.
9.​ Save your changes.
10.​From the presentation list view, Activate the presentation so it appears in the content
    library.
Part 4: Distribute Presentation to Territories

This step ensures the content is aligned to the correct sales hierarchy, solving the "Inefficient
Targeting" problem.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select Intelligent Content, and then select Presentations.
   3.​ Click the name of the presentation you just created (Immunexis First Deck) to open
       it.
   4.​ Click on edit. Scroll to the Territory Distribution section.
   5.​ Search for the territory name (e.g., TM - SPC - San Francisco North 20D02T11)
       or expand the territory alignment tree.
   6.​ Select the checkboxes corresponding to the relevant autoimmune disease territories to
       distribute the presentation.
           ○​ Pro Tip: To assign the presentation to a parent territory and all its child territories,
               double-click the parent checkbox. New child territories will automatically be
               aligned.
   7.​ Click Save.
Remember to create and sync the metadata cache for the changes to start reflecting in the ipad
app

Verification/Check

Validate that the presentation is correctly set up, active, and accessible to the target sales rep
(Evan Casto).

Check 1: Admin Console Validation

   1.​ Navigate back to the Admin Console > Intelligent Content > Presentations list view.
   2.​ Verify: Does your Immunexis First Deck appear in the list? Is it marked as Active?.
   3.​ Open the presentation record and check the Linked Products section to ensure
       Immunexis 50mg is associated.
   4.​ Under the Presentation Pages list, verify that the designated compliance page is
       marked as Mandatory.
   5.​ Check the Territory Distribution section to confirm the target territory (TM - SPC -
       San Francisco North 20D02T11) is selected.

Check 2: End-User (Evan) Simulation

   1.​ Log in as User: Evan (or a user assigned to the TM - SPC - San Francisco North
       20D02T11 territory).
   2.​ Navigate to the Intelligent Content tab in the AFLS for Customer
       Engagement app (or simulate the mobile view).
   3.​ Verify Content Access: Does Immunexis First Deck appear in the content library?
       (If properly aligned to the territory, it should be visible) .
   4.​ Verify Compliance (Mandatory Slides): Open the presentation in the player. Navigate
       through the pages.
            ○​ Verify: When viewing the page thumbnails in the player menu, does the
               mandatory slide have an asterisk? (In a real mobile test, the rep would be
               prevented from continuing or creating a visit if they attempt to skip a required
               page) .
Field Email
                             Field Email

The Enablement Goal
Configure the Field Email module to enable Evan to send a pre-approved "Immunexis
Follow-Up" template, allowing him to insert a Fragment but preventing him from altering the core
medical content. The template must be distributed solely to his specific sales territory, ensuring
proper content access control.




Prerequisites
Life Sciences email templates differ from standard Salesforce templates by offering a controlled,
compliant framework. Before configuring the Field Email features, the following setup tasks must
be completed to prepare your org:

   ●​ Required Edition & Permissions: The environment must be an Enterprise or Unlimited
      Edition with AFLS. Your user must be assigned the Life Sciences
      Commercial Admin permission set to manage email settings and templates.
   ●​ Core Data Setup: Active records for the user (Evan Casto), an HCP Account (Dr.
      Lucas Grant), a target Product (Immunexis), and an aligned Territory (e.g., TM - SPC -
      San Francisco North 20D02T11) must exist.
   ●​ Template Files: A prepared email template ZIP file (http://sfdc.co/lscontent (password:
      hdBWqTgZ)) is required, containing an index.html file (core email body), and
      optionally a fragments folder (reusable content blocks). If the ZIP includes required
      attachments, they must be marked with a required__ prefix .
   ●​ Dependent Features: Consent Management and Activity Timeline must be
      configured .
Step-by-Step Configuration

Part 1: Configure General Email Delivery and Tracking Settings


We begin by establishing the overall organization-level rules for email delivery, user
customization, and compliance monitoring, which are managed through the Admin Console.

   1.​ From the App Launcher, search for and select Admin Console.




   2.​ Select the Email tile, and then select Email Settings.
   3.​ Choose to apply settings at the Organization Level.
4.​ Under General Settings, configure flexibility options as needed :
        ○​ Select the checkbox Edit subject before sending (Allows Evan to personalize
           the subject line).
        ○​ Select the checkbox Schedule emails to send later (Allows Evan to time his
           outreach).
5.​ Under Tracking Settings, define data retention and audit policies :
        ○​ Enter the Days to Track Status (e.g., 30) to monitor delivery status, open rates,
           and clicks.
        ○​ Enter the Days to Keep Sent Emails (e.g., 30) to store sent email records.
        ○​ Enter the Days to Check History (e.g., 30) to prevent sending duplicate emails
           to the same account.
6.​ Under Consent Settings, enforce compliance by controlling recipient input :
        ○​ Select the Turn off Add Email Addresses checkbox if compliance requires
           restricting reps from manually entering non-verified addresses, allowing them to
           select only existing addresses.
7.​ Click Save.
8.​ Navigate to the Admin Console and locate Email Jobs under the Email section (Admin
    Console -> Email -> Email Jobs).
        ○​ Set up three instances of the Email Send job.
               i.​ Schedule jobs to run at a 20-minute interval from each other (e.g., Job 1
                    at 0 minutes offset, Job 2 at 20 minutes offset, and Job 3 at 40 minutes
                    offset).
        ○​ Set up three instances of the Email Track Status job.
              i.​ Schedule jobs to run at a 20-minute interval from each other (e.g., Job 1
                  at 0 minutes offset, Job 2 at 20 minutes offset, and Job 3 at 40 minutes
                  offset).




9.​ Enable relevant trigger handlers (Goto -> Admin Console -> Trigger Handlers
    Administration):
       ○​ ContactPointEmailPopulateHandler
       ○​ EmailQueueImmediateHandler
       ○​ EmailQueueRecipientHandler
       ○​ EmailQueueSenderHandler
       ○​ EmailAttachmentHandler
       ○​ SyncEmailResponseStatusToObjectHandler
       ○​ EmailTemplateTerritorySharingHandler
       ○​ ConsentNameCommSubHandler
Part 2: Upload and Configure the Email Template (Immunexis
Follow-Up)


You will now upload the pre-approved HTML content, link it to the product, and define its
compliance rules, ensuring the ability to use Fragments.

   1.​ From the App Launcher, search for and select Admin Console.
   2.​ Select the Email tile, and then select Email Templates.




   3.​ On the Email Templates page, click New.
   4.​ Upload the prepared email template ZIP file.
          ○​ Download the ZIP file from this URL: http://sfdc.co/lscontent (password:
              hdBWqTgZ).
          ○​ Unzip the file.
          ○​ Open the "Field Email" folder.
          ○​ Use the file named “General Email for Hypertension (2)”.
5.​ Enter the required template identification details:
        ○​ Email Template Name: Immunexis Follow-Up
        ○​ Email Subject: Immunexis 5-Year Efficacy Data
6.​ Set appropriate activation dates (Start Date and End Date).
7.​ Set Communication Subscription to “Immunexis”. Make sure Immunexis is aligned to
    Lucas Grant with the contact point email address. (refer to consent module on how to
    configure consent)
8.​ Configure the Sender and Reply types using the pre-defined picklist values:
        ○​ In Sender Type, select Sales Rep (to use Evan's address).
        ○​ In ReplyToType, select Sales Rep (to direct replies back to Evan).
9.​ Link the template to the product:
        ○​ In the Product lookup field, search for and select Immunexis.
10.​Configure editing permissions:
        ○​ Set controls (using Edit Subject line checkbox) for whether sales reps can edit
            the email subject line
11.​Click Save.
12.​To make the template available for field use, click the Activate button.
13.​To ensure the reusable content blocks (Fragments) included in the ZIP file are shared
    and accessible to sales reps, click Update Fragments Sharing.
Part 3: Distribute the Template to the Target Territory

To ensure the template is only accessible by the relevant field force (Evan), you must explicitly
assign it to his territory.

   1.​ From the Email Templates list, click the Immunexis Follow-Up template name to open
       its detail page.
   2.​ Click Edit.
   3.​ On the right side of the template details window, locate the Territory Distribution
       section.
   4.​ Search for or expand the territory alignment tree to find the target territory.
   5.​ Select the checkbox next to the specific territory, TM - SPC - San Francisco North
       20D02T11.
   6.​ Click Save.




Remember to create and sync the metadata cache for the changes to start reflecting in the ipad
app
Verification/Check

Act as the end-user, Evan (or a user assigned to the configured territory), to validate that the
configuration enables compliant field activity.

   1.​ Log in as User: Evan (Life Sciences Field Sales Representative).
   2.​ Navigate to the Account record for Dr. Lucas Grant (or any Account in the assigned
       territory).
   3.​ Click the Email or Send Email button on the Account record detail page.
   4.​ Check 1: Template Availability and Content Control
            ○​ Verify: Does the Immunexis Follow-Up template appear in the list of
                available templates? (This confirms the Territory Distribution is working) .
            ○​ Select the Immunexis Follow-Up template.
            ○​ On the composition screen, attempt to edit the core body content. Verify: Are
                core safety and efficacy sections locked against editing, preserving compliance?.
   5.​ Check 2: Fragment Personalization and Attachments
            ○​ Verify: Can you insert an optional, pre-approved Fragment (reusable content
                block)? (This validates the Update Fragments Sharing step) .
            ○​ Verify: Are the required attachments (e.g., the 5-Year Efficacy Data PDF, if
                configured with the required__ prefix) automatically included and
                non-removable?.
   6.​ Send the Email
            ○​ Ensure Dr. Lucas Grant is selected as the recipient.
            ○​ Click Send (or Schedule for Later, if that setting was enabled in Part 1).
   7.​ Check 3: Auditable Tracking
            ○​ Login back as the administrator.
            ○​ Go to the admin console. Select email and then email queue. You should be able
                to see the email in the queue.
Visit Management
                Visit Management
The Enablement Goal
   ●​ Activate core Trigger Handlers to ensure data integrity and compliance (e.g., locking
      records after signature).
   ●​ Configure the Visit Page Layout to populate the Sidebar of Visit Engagement page with
      critical sections: Content, Samples, Product Detail, and Attendees.
   ●​ Enable Immunexis in the Admin Console so it appears in the Product Selector.
   ●​ Configure Recommended Content & Next Best Message to surface AI
      recommendations for Immunexis.
   ●​ Deploy the changes to the mobile app via Metadata Cache.




Prerequisites
   ●​ You have access to a AFLS training org with the Life Sciences
      Commercial Engagement Add-On license.
   ●​ Your user has the Life Sciences Commercial Admin permission set.
   ●​ A Product record for "Immunexis" exists in the org.




Step-by-Step Configuration
Part 1: Activate Trigger Handlers

Before building the UI, you must ensure the engine is running. Visit Management relies on
specific Apex Trigger Handlers to manage complex logic like locking records after a signature is
captured or managing inventory during a sample drop.

   1.​ From Setup, in the Quick Find box, enter Trigger Handlers and select Manage
       Trigger Handlers (or the custom setting interface provided in your training org).
   2.​ Ensure the following Core Visit Management Handlers are Active (checked):
          ○​ ContentDocumentLockHandler: Locks files when a visit is submitted.
          ○​ ProductDisbursementInventoryOpCreation: Critical. Creates inventory
             transactions when samples are dropped/signed.
          ○​ PVUpdateChildFieldsHandler & VisitUpdateChildFieldsHandler:
             Maintains data consistency for group visits.
          ○​ VisitLockHandler & PVLockHandler: Prevents editing data based on
             status/signature.

Here is the detailed list of Trigger Handlers available for AFLS: Trigger Handler
Part 2: Visit and Provider Visit Page Layout

The Visit Engagement page dynamically builds its sidebar menu based on the Related Lists
present on the Visit Page Layout. You will now add the necessary lists to reveal the features
Evan needs.

   1.​ Navigate to Object Manager:
          ○​ Go to Setup > Object Manager > Visit.
          ○​ Select Page Layouts and edit the primary layout used by your Field Sales
             Representatives.
2.​ Configure Core Fields:
      ○​ Ensure the following mandatory fields are on the layout : Account, Place,
          Planned Start Time, Planned End Time




       ○​ Add Channel and Status fields to the "Visit Information" section.
       ○​ If using Record Types: Add the Record Type ID field. (Note: while creating
            record types ensure that the record types should be created for both Visit and
            Provider Visit objects with the exact same API names)
3.​ Enable Visit Engagement Sidebars via Related Lists: Scroll to the Related Lists
    section of the palette and drag the following lists onto the layout. Note: The order of
    these lists determines the order of the Sidebar Menu.
       ○​ Presentation Forums: Adds the Content menu
       ○​ Provider Visit Detailing Products: Adds the Product Details menu.
       ○​ Provider Visit Product Detailing Messages: Displays configured product
            messages within the product area (Note: This does not create a sidebar tab, but
            is required for functionality)
       ○​ Provider Visit Product Discussions: Adds the + Add Discussion functionality
            within the product area (Note: This does not create a sidebar tab, but is required
            for functionality).
       ○​ Provider Visit Requested Samples: Adds the DTP (Direct -to -Practitioners)
            menu .
       ○​ Product Disbursements: Adds the Samples menu.
       ○​ Provider Visit Marketing Items: Adds the Marketing Items (Leave Behinds)
            menu.
       ○​ Chid Visits: Adds the Attendees menu.



4.​ For Samples, Direct to Practitioners and Marketing Items, configure displayed
    columns. You can add additional fields up to 5 fields including the required fields:
       ○​ Samples (Product Disbursements related list)
             i.​ Product Item
             ii.​ Production Batch (Batch/Lot number) - required if “Require batch number”
                   admin console setting is enabled
             iii.​ Quantity Disbursed
          ○​ Direct to Practitioner (Provider Visit Requested Samples related list)
                  i.​ Product
                  ii.​ Requested Quantity
          ○​ Marketing Items (Provider Visit Marketing Items related list)
                  i.​ Product
                  ii.​ Quantity
   5.​ Save the Page Layout.
   6.​ Assign the Page Layout to the Field Rep Profile. Note: If additional page layouts are
       needed for other record types, repeat the process accordingly.




5. Now repeat the Process for Provider Visit
          ●​ Create a New Page Layout and add the desired fields under Provider Visit
              Information, for example
                  ○​ Is Confirmed
          ●​ To display Next Visit Objectives section, Add “Next Visit Objectives” section.
              Within the section, add either Next Visit Objective Type (picklist) or ​
              Next Visit Objective (text)
●​ Assign the Page Layout to the Field Rep Profile. Note: If additional page layouts
   are needed for other record types, repeat the process accordingly.
Part 3: Enable the Product Discussion

Product Discussion is designed to record additional details related to products discussed during
a visit using Provider Visit Product Discussion page layout. Out of the box, Notes field is
available to capture additional notes or comments. Based on the business requirements, you
can create and add custom fields or define record types and different page layouts to capture
different types of information such as Product Feedback and Patient Tracking.

If record types are used, 3 settings are optionally available per product and record type
combination that affect how product discussion is displayed in the Visit Engagement page.

   1.​ Access the Admin Console:
          ○​ From the App Launcher, select Life Sciences Commercial > Admin Console.
   2.​ Navigate to Product Discussion Settings:
          ○​ Click Visit Administration > Product Discussion Settings.
   3.​ Select the Product:
          ○​ In the product list, search for and select Immunexis.
   4.​ Select Record Types:
          ○​ You will see a list of Provider Visit Product Discussion record types.
          ○​ Add record types applicable to the product from Available Record Types to
              Selected Record Types.
          ○​ Configure additional settings
                  i.​ Add discussion by default: the product discussion is added by default
                       when a detail product is added to the visit
                  ii.​ Require discussion to submit: At least one product discussion is
                       required to submit a visit. An error is displayed if no product discussion is
                       entered
                  iii.​ Limit to 1 discussion: Only one product discussion is allowed. After a
                        product discussion is added to the visit, “+ Add Discussion” link is hidden




   5.​ Save the Product Discussion settings.




Part 4: Enable the Sample Record for the Territory
Note: Product Alignment covered as part of Day 1 Workshop

You need to ensure that the Immunexis specific Samples are aligned to the Territory of the Field
Rep so that they can disburse these samples to the HCPs. ​
​
Please note the steps to create Sample, DTP and Marketing Item records are covered as part of
the Sample Management Exercises.


   1.​ Access the Admin Console:
          ○​ From the App Launcher, select Life Sciences Commercial > Admin Console.
   2.​ Navigate to Product Alignment
          ○​ Click Product > Product Alignment
   3.​ Align the Immunexis Samples, DTP and Marketing Items to the Territory (e.g., TM - SPC
       - San Francisco North 20D02T11) - this step ensures that the Field Rep (Evan) can
       disburse the samples aligned with the Territory




Part 5: Recommended Presentation
Evan needs the right content recommendation that should be used for the HCP engagement


1. Prerequisites: Locate Presentation IDs Before modifying the record, you must identify the
unique identifiers for the content you intend to promote.

   ●​ Locate the specific presentations (e.g., "Immunexis First Deck").
   ●​ Copy their unique Salesforce IDs (available in the URL or record detail).
2. Access the Provider Account Territory Information (PATI) We need to target the specific
link between the HCP and the Rep’s territory.

    ●​ From the App Launch, select Provider Account Territory Information.
    ●​ Search for and select the record that links Aron Morita to Evan’s Territory.




3. Configure the Recommendation JSON This step injects the logic into the record.

    ●​ Click Edit and scroll to the Recommended Presentation Information field.
    ●​ Paste the JSON structure below. This tells the UI what to show and in what order.

       JSON Structure:

            ●​ Id: The Salesforce ID of the presentation (from Step 1).
            ●​ Order: The display sequence (1, 2, 3...) ensures the most critical deck
               appears first.

{

"Data": [

{ "Id": "1IGWs00000002czOAA", "Order": 1 }

]

}
4. Save and Validate

   ●​ Click Save.



Part 6: Recommended Message


Evan needs to know why she is discussing Immunexis. You will configure a "Next Best
Message" recommendation.

   1.​ From the App Launcher, find and select Territory Account Product Message Scores.




   2.​ Click New.
   3.​ Configure the Recommendation:
           ○​ Account: Select a test account (e.g., Aaron Morita).
           ○​ Product Guidance: Select Immunexis.
      ○​ Territory: Select Evan's Territory.
      ○​ Total Score: 95 (High score ensures visibility).
      ○​ Rank: 1.
4.​ Add Explainability (JSON):
      ○​ In the Score Explainability Information field, paste the following JSON to give
          the AI a rationale to display:​
          JSON


None
​
{
    "Message Priority": "Top for this quarter",
    "HCP Interest Level": "High interest shown",
    "Launch Status": "New Product Introduction"
}
   5.​ Save the record.




Part 7: Final Deployment (Metadata Cache)


Mobile configurations in AFLS are cached for offline performance. You must
regenerate this cache to push your changes to Evan's iPad.

   1.​ Navigate to Metadata Cache:
          ○​ In the Admin Console, locate the Metadata Cache section (or access via
             Mobile Management depending on your org setup).
   2.​ Generate Cache:
          ○​ Click Generate Metadata Cache.
          ○​ Wait for the completion status.




Verification - Check Your Work

Let's simulate Evan’s pre-call planning.

   1.​ Open the Life Sciences Commercial app on your ipad
   2.​ Navigate to Visits and open a planned visit for the Account you used for this exercise
   3.​ Verify the Visit Engagement:
          ○​ Does the page display the Visit Engagement view?
          ○​ Check the Sidebar: Do you see tabs for Content, Samples, Product Detail, and
               Attendees?
   4.​ Verify Immunexis:
          ○​ Click on the Product Detail or Samples tab.
          ○​ Click + Add Product (or similar selector).
          ○​ Can you search for and select Immunexis?
   5.​ Verify Recommendations:
          ○​ Look at the top of the sidebar. Do you see a Recommendations item?
          ○​ Click it. Does it show Immunexis with the rationale "Top for this quarter"?

Success: You have successfully built a specialized Visit Engagement cockpit. The trigger
handlers ensure the engine runs safely, the layout provides the necessary controls, and the
specific calibration for Immunexis ensures Evan is ready for the launch.
Sample Management Take
Home Exercise
           Sample Management
Company Profile

Makana Pharma is a rapidly growing biotech company specializing in novel autoimmune
disease and specialty treatments. Their lead product, Immunexis (Breakthrough
Immunotherapy for Autoimmune Disease), is classified as a Restricted Specialty Sample.
Due to its high acquisition cost and the strict regulations governing its distribution, every
single sample unit is treated as a high-value asset requiring stringent controls. Makana is
committed to achieving gold-standard compliance and mitigating the severe financial and
regulatory risks associated with sample distribution, loss or misuse.

The Team

   ●​ David Chen
          ○​ Director of Compliance and Sales Operations
          ○​ Core Responsibility: Ensuring all field activities, especially sampling, adhere to
             regulations and preparing for internal and external audits.
   ●​ Ari Blake:
          ○​ Specialty Sales Representative (the end user)
          ○​ Core Responsibility: Managing the physical inventory of high-value Immunexis
             samples in his trunk, accurately documenting all disbursements, and
             conducting inventory counts as needed.
          ○​ Note: Samples Management is fully configured for Evan Casto in the trial org.
             For all Sample Management exercises, we are using Ari Blake as the field sales
             rep (already available in the org), though you may use any other sales rep if
             preferred. Please ensure the password is updated for the sales rep user you
             choose to use.
The Scenario

Makana Pharma is scaling up the commercial launch of Immunexis. Due to its high cost and
restrictive distribution, the drug is subject to heightened scrutiny. The situation has become
urgent: a major competitor recently received a formal FDA warning letter regarding
inadequate sample accountability, triggering an immediate, mandatory internal Audit at
Makana. This audit will focus intensely on inventory reconciliation, sample custody, and the
strict enforcement of limits at the field representative level. Currently, the company is still
relying on fragmented systems and paper logs, resulting in frequent, unexplainable
discrepancies between physical counts and system records—a critical compliance
vulnerability that must be eliminated before the auditing is executed.

The Business Challenge

The current manual and disconnected system creates severe compliance and operational
friction that threatens Makana's launch stability:

   ●​ Critical Audit Failure Risk: The manual process for inventory checks forces reps to
      spend excessive time attempting to reconcile their physical sample counts with stale
      system data, often failing the mandatory reconciliation. This creates a documented
      lack of accountability that could lead to significant fines and reporting requirements.
   ●​ Chain-of-Custody Breakage: The system lacks tracking for the physical storage
      location making it impossible to establish an auditable chain of custody when
      high-value samples expire or are misplaced.
   ●​ Limit Breach & Self-Reporting: There is no real-time, preventative mechanism to
      block a sample transaction that would exceed an HCP's defined annual or quarterly
      sample limit. A breach necessitates costly and time-consuming mandatory
      self-reporting to regulatory bodies.

The Enablement Goal

To protect Makana Pharma from regulatory exposure and ensure Ari can operate
compliantly, the System Integrator must configure the AFLS platform to automate and
enforce all inventory controls for Immunexis.

The required technical configurations include:

   ●​ Inventory Setup/Config & Hierarchy: Implementing the Sample Inventory records
      for Immunexis and defining the Storage Location to ensure every physical sample
      location is electronically logged and auditable.
   ●​ Sample Limit Setup: Defining and enforcing granular Sample Limits
      (annual/quarterly) on Immunexis at both the HCP, product, Rep, and territory level,
      utilizing the Out-of-the-Box (OOTB) Limit Templates for standard enforcement rules.
   ●​ Sample Territory Allocation: Configuring the system to handle the Territory
      Allocation logic, ensuring samples are distributed based on territory business rules
      and that limits are applied correctly upon operation.
   ●​ Inventory Operations & Dashboard: Leveraging the Sample Inventory Dashboard to
      provide Ari with a real-time view of his stock and setting up streamlined Inventory
      Operations for receiving, transferring, and logging the storage location.
   ●​ Inventory      Assessment/Counting:       Configuring the structured Inventory
      Assessment/Counting workflow that forces Ari to reconcile his physical count against
      the system record at required intervals (e.g., weekly), generating an electronic,
      time-stamped, and auditable log.
   ●​ Real-time Limit Enforcement during Disbursement: Ensuring the enforcement of
        limits happens dynamically and immediately at the point of action (e.g., within
        sample disbursement tom Provider) to block non-compliant transactions and
        prevent limit breaches.


Exercise: Inventory Setup/Config & Hierarchy
Note: Samples Management is fully configured for Evan Casto in the trial org. For all Sample
Management exercises, we are using Ari Blake as the field sales rep (already available in the
org), though you may use any other sales rep if preferred. Please ensure the password is
updated for the sales rep user you choose to use.

Prerequisites
Before starting, ensure the following base records exist in your org. Refer to the complete
data model powering the feature here.

   ●​ User: A Salesforce user for Ari Blake.
   ●​ Admin: A Salesforce Admin User.
   ●​ Permission Set: You must have the Life Sciences Commercial Admin permission set
   ●​ Product: A Product2 record for Immunexis 50mg.
   ●​ Life Sciences Marketable Product: A corresponding record for Immunexis 50mg.
   ●​ Ensure that the following fields are always populated for the Life Sciences
      Marketable Product if the product is used in Sample Processes:
          ○​ Distribution Method- Select Drop and Ship
          ○​ Is Available For Sampling Allocation- Should be selected.
          ○​ Min Sample Order Quantity- Enter a positive number.
          ○​ Max Sample Order Quantity- Enter a positive number greater than Min
               Sample Order Quantity.
          ○​ Start Date - Should be filled up.
          ○​ Parent Brand Product - Should be selected with the right value.
          ○​ Active Checkbox - Should be selected.
   ●​ Min Sample Order Quantity and Max Sample Order Quantity- When populated-
      ensures that the Sample Product Request can remain within the range and users get
      an alert when breaching the range.
   ●​ Custom Picklist Values: The picklist value for Location Type representing the user’s
      inventory (e.g., UserInventory) must be configured on the Location object.
   ●​ Activation: Required Sample Inventory Management trigger handlers (e.g.,
      LocationUserDupHandler, ProductBatchItemOwnershipHandler) are active. See the
      Full List.


Step 1: Configure Org-Wide Settings for Inventory Location Type
You must explicitly define which Location Type value represents a sales rep’s personal
inventory location.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select the Sample Inventory Management tile
   3.​ In the left navigation pane, select Org-Wide Settings
   4.​ Under Common settings, for User Inventory Location Type, select the custom picklist
       value you created (e.g., UserInventory) Note: Unless you specify this location type,
       the sample inventory processes will not work as intended
   5.​ Click Save
   6.​ There are other settings available which can be applied as required:
           a.​ Org Wide Settings
           b.​ Profile Settings


Step 2: Create Ari Blake's Inventory Location
A Location record is needed to represent Ari Blake's stock, establishing a one-to-one,
theoretical mapping to his assigned inventory

   1.​ From the App Launcher, find and select Locations.
   2.​ Click New
   3.​ In the new Location record, enter the following details:
           ○​ There are two layouts for Location. Set Life Sciences Location Layout as the
               default layout for all the intended profiles not done.
           ○​ Set Name to Ari Blake Inventory.
           ○​ Select Ari Blake for the Primary User field (Ensure that Locations Page Layout
               has Primary User field included)
           ○​ Select the custom value (e.g., UserInventory) for Location Type
           ○​ Select the Inventory Location checkbox (Ensure that Locations Page Layout
               has Inventory Location field included)​
               Note: To ensure the Sample Inventory Management processes run smoothly,
               you must select Inventory Location to denote a sales rep’s inventory. Add it to
               the page layout if not already added.
   4.​ Click Save
   5.​ Once created- later Reps can create their Inventory Storage Location from the
       Sample Inventory Management Dashboard.
Step 3: Create the Production Batch for Immunexis 50mg
Samples are tracked by Production Batch across all inventory operations to manage and
track inventory transactions

   1.​ From the App Launcher, go to the Product record for Immunexis 50mg
   2.​ Go to the Related tab, and in the Production Batch section, click New
          ○​ Alternatively: If the related list is not configured on the Product record, navigate
              to the Production Batch object directly.




   3.​ In the new Production Batch record, make the following changes:
           ○​ Select the Active checkbox
           ○​ Enter a Unique Identification Number (e.g., IMX-BCH-001)
           ○​ For Quantity Unit of Measure, select Each
                  i.​ If the field is read only- activate the picklist value in the entity.
           ○​ Select the Expiry Date of the batch
           ○​ Description- Provide a description for the Production Batch
           ○​ Populate any other field as needed.
   4.​ Click Save​
       ​




Step 4: Create Ari Blake's Product Item
The Product Item establishes a one-to-one relationship between the product and the
location, representing the total quantity on hand assigned to the user

   1.​ From the App Launcher, go back to the Product record for Immunexis 50mg
   2.​ Go to the Related tab, and in the Product Item section, click New
           ○​ Alternatively: If the related list is not available on the Product record, navigate
               to the Product Item object directly.
   3.​ In the new Product Item record, make the following changes:
           ○​ Select the Location field and search for and select Ari Blake Inventory
           ○​ Set Quantity On Hand to 0.00- This will be auto populated later with the
               creation of the Product Batch Item.
           ○​ For Quantity Unit of Measure, select Each
   4.​ Click Save. Note the system-generated Product Item Number (e.g., PI-000X).




Step 5: Create the Product Batch Item
The Product Batch Item allocates a specific quantity of a Production Batch to a Product
Item. The Remaining Quantity field tracks the quantity of products in a sales rep's inventory,
tracked by batch

   1.​ Go to the Production Batch record you created in Step 3 (e.g., IMX-BCH-001)
   2.​ Go to the Related tab, and in the Product Batch Item section, click New
           ○​ Alternatively: If the related list is not available on the Production Batch record,
               navigate to the Product Batch Item object directly.
   3.​ In the new Product Batch Item record, make the following changes:
           ○​ For Product Item, select the record you created in Step 4 (e.g., PI-000X)
           ○​ Select the Active checkbox
           ○​ Enter the allocated amount in Remaining Quantity (e.g., 100.00)​
              Note: This action increases the cumulative quantity in the associated Product
              Item's Quantity On Hand field.
   4.​ Click Save




Verification / Key Takeaways
You have successfully established the sample inventory hierarchy for Ari Blake and allocated
his initial stock of Immunexis 50mg.

   1.​ Validate Inventory Levels:
           ○​ Go back to the Product Item record (PI-000X) created in Step 4.
           ○​ Check the Quantity On Hand field. It should now display 100.00, reflecting
              the allocation from the Product Batch Item.
   2.​ Understand the Hierarchy: The quantity is now tracked via this core relationship,
       ensuring compliance and traceability :

       Product Item (Location/Product)←Product Batch Item (Remaining
       Quantity)→Production Batch (Source)
   3.​ Key Takeaway: The Product Item tracks the cumulative quantity of a product at a
       location, while the Product Batch Item tracks the quantity by its unique batch. Both
       quantities update when inventory operations are executed.


Exercise: Sample Limit Setup
The task is ensuring regulatory compliance for the new sample product, Immunexis 50mg.
Salesforce AFLS offers the capability to enforce limits using either OOTB
Default Templates or Custom Templates (Cloned Generic or Advanced).

Immunexis requires the following rule to be universally enforced for their prescribing
physicians.

   ●​ Example Rule: Physicians can receive a maximum of 5 units of Immunexis 50mg
      per calendar year, with a maximum of 2 units per visit. This rule must be enforced as
      an Error (hard stop) when violated.

Prerequisites

Before starting, ensure the following base configurations are in place:

   ●​ Users/Permissions: You must have the Life Sciences Commercial Admin permission
      set.
   ●​ Target Account Segment: You can create a segment of providers using
      segmentation. This is an optional step. How to create Segment
   ●​ Product: A Product2 record for Immunexis 50mg.
   ●​ Trigger Handlers: The necessary Sample Limits trigger handlers are active (e.g.,
      SampleLimitTransactionHandler). Ensure that these and other Trigger Handlers
      available for Sample Limits- they are also active. See the Full List.
   ●​ Default Templates: The default sample limit templates must be added to your org
      using the following steps: Note- Option to add Template to the Org is a one time
      activity. If the templates are already added- this option will not be available.
   ●​ Use the below process to add templates to the Org if not added:
           1.​ From the App Launcher, find and select Admin Console.
           2.​ Select Sample Limits, and then select Sample Limit Templates.
           3.​ Review the templates (e.g., Generic Template, Germany AMG, Turkey) and
               Activate to add them to your org .
Step 1: Review Template Capabilities (OOTB vs. Custom) and Select the Path

The core decision is whether to use an existing OOTB Template or create a Custom
Template to meet the complex requirements.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select the Sample Limits tile.
   3.​ In the left navigation pane, select Sample Limit Templates.
   4.​ Review the Template Types: Note the key attributes of the OOTB options :
           ○​ Default Country-specific Templates (e.g., Belgium) are predefined and
               cannot be customized, edited, or deleted. They only support the Error
               enforcement type.
           ○​ Default Generic Template provides default rules but only supports the Error
               enforcement type and cannot be customized.
           ○​ Conclusion: If Immunexis requires a unique, complex rule that is not
               provided by the non-editable country-specific templates, and the Generic
               Template rules cannot be customized, an Advanced Template must be
               created.




Step 2: Create the Advanced Sample Limit Template

We will configure the custom template with the specific annual and per-visit limits
mandated by Immunexis's compliance requirements.

   1.​ While in Sample Limit Templates, click New, then select Advanced.
2.​ Enter the template identification and enforcement rules:
        ○​ Label: Enter Immunexis 50mg Tier 1 Annual Limit.
        ○​ API Name: Enter a unique API name (e.g.,
            Immunexis_Tier1_Annual_Limit).
        ○​ Active: Select the checkbox to make the template available.
        ○​ Required by Law: Do NOT select this checkbox, as the rule is specific to your
            business case.
        ○​ Limit Enforcement Type: Select Error. This is crucial, as it blocks additional
            distributions once the limit is met.
        ○​ Rule Operator: Select AND.
3.​ Scroll down to Sample Limit Rules and configure the mandatory restriction (You can
    create up to 3 rules):
        ○​ Rule Name: Enter Annual & Per Visit Limit.
        ○​ Maximum Quantity per Period: Enter 5 (The annual limit).
        ○​ Maximum Quantity per Visit: Enter 2 (The per-visit limit).
        ○​ Period Type: Select Date Range. This sets the maximum number of samples
            that can be distributed within a calendar year.
4.​ Click Save.
Step 3: Assign the Template to the Product

Now, we link the new template to the Immunexis 50mg product.

   1.​ From the Admin Console (Sample Limits tile), select Template Product
       Assignments.
   2.​ Select your new template: Immunexis 50mg Tier 1 Annual Limit.
   3.​ In the product hierarchy on the right, search for and select the checkbox next to the
       product Immunexis 50mg.
   4.​ Scroll to the bottom of the page and click Save.​
       Note: This action automatically creates the Sample Limit Template Assignment
record, which captures a snapshot of the template's rules at that moment.
Subsequent changes to the original template will NOT automatically update this
assignment record.
Step 4: Initialize Sample Limits for the Target Accounts

Finally, run the batch job to apply these rules and create the necessary Provider Sample
Limit Records to Accounts or alternatively to Segment of Accounts.

   1.​ From the Admin Console (Sample Limits tile), select Sample Limit Jobs.
   2.​ Under Assign Sample Limit Templates to Accounts
   3.​ Configure the Initialization Job:
           ○​ Account Scope: All Accounts
           ○​ Account Types: Select HCP & HCO
           ○​ Segment: Alternatively, search for and select the segment if you have created.
              How to create Segment
           ○​ Sample Limit Template: Select the template created in Step 2: Immunexis
              50 mg Tier 1 Annual Limit.
   4.​ Click Run​
       Note: This job runs asynchronously. You must monitor its status on the Sample Limit
Jobs page, as there is no user notification when the job completes. The job name in
the log is SampleLimitJobInit.
Verification / Key Takeaways

You have successfully implemented a complex, compliance-mandated limit for a specific
product segment.

   1.​ Validate Record Creation:
           ○​ Go to the App Launcher, find and select Provider Sample Limits.
           ○​ Verify that new records exist for All Accounts with type as HCP & HCO and the
              product is Immunexis 50mg.
           ○​ The relevant fields on these records will track the allocation amounts based
              on the applied rule.
   2.​ Key Takeaway: The ability to use these OOTB Templates (for regulatory compliance)
       or Custom Advanced Templates (for specific, complex rules like fixed dates or
       rolling periods) provides the necessary flexibility for highly regulated markets. The
       Provider Sample Limit Records are the transactional records created by the batch
       job that track the actual remaining quantity for each account/product combination.




Exercise: Real-time Limit Enforcement during Disbursement
The primary objective of the entire Sample Limits configuration (from the earlier exercise)
was to ensure compliance when Sales Representative Ari Blake is in the field making
sample drops.

The Challenge: Ari needs to complete a visit where a sample drop is recorded, but the
transaction must be blocked because it violates the "Max Quantity per Visit" rule.

Prerequisites

Before starting, ensure the following critical configurations from previous exercises are
complete and active:

   ●​ Sample Limits Initialized: The Immunexis 50mg Tier 1 Annual Limit template must
      be assigned to the product and initialized for Accounts. The Max Quantity per Visit
      must be set to 2 and Limit Enforcement Type set to Error .
   ●​ Inventory: Ari Blake must have sufficient quantity (e.g., > 3 units) of Immunexis 50
      mg allocated to his inventory.
   ●​ Target Account: An HCP or HCO Account.
   ●​ Trigger Handler Activation: Verify that the core Sample Limits trigger handler is
      active: SampleLimitTransactionHandler.
   ●​ Validation Check: In the Visit Administration tile, the Validate sample limits
      checkbox must be selected.
   ●​ Need to assign Ari Blake to in TM - SPC - San Francisco North 20D02T11




Since the actual disbursement happens within the Mobile/Web Visit flow, this exercise
focuses on ensuring the System-Level Check is active to execute the compliance logic upon
Visit submission.

Step 1: Confirm Sample Limits Validation is Active

The ability for the system to validate limits during a Visit submission depends on an explicit
setting in the Admin Console.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select the Visit Administration tile.
   3.​ Navigate to the Visit Settings tab.
   4.​ Confirm that the Validate sample limits checkbox is selected.​
       Note: This check is necessary to ensure the Visit submission process calls the
       necessary trigger logic to verify the disbursement quantity against the Provider
       Sample Limit records.

Step 2: Confirm Active Trigger Handler and Enforcement Logic

The real-time enforcement logic is executed by the Sample Limits trigger handler, which
uses the rule defined during the administrative setup.

   1.​ From the App Launcher, find and select LifeSciences Commercial.
   2.​ Select Trigger Handler Administration.
   3.​ Search for the SampleLimitTransactionHandler and confirm its status is Active.​
       Note: This trigger is responsible for processing the Provider Visit Sample Limit
       Transaction record and updating the related Provider Sample Limit records, but only
       if the enforcement check passes.

Step 3: Share Provider Sample Limit Template Assignments records with the field rep
user

   1.​ Provider Sample Limit Template Assignments records should be shared with Ari
       Black manually.
   2.​ Otherwise, you can also change the sharing settings of this entity to “Public”:
          a.​ Navigate to Setup > Sharing Settings > Manage sharing settings for: Provider
              Sample Limit Template Assignment >
          b.​ Click on Edit
          c.​ Select the value of Default Internal Access and Default External Access as
              Public Read/Write
          d.​ Click on Save

Step 4: Simulate the Non-Compliant Visit and Disbursement

You would use the Visit interface to execute the transaction.

   1.​ Action: Ari initiates a Visit with an Account- Remember we have applied the Limit
       Template to all accounts. .
   2.​ Action: He enters a disbursement for 3 units of Immunexis 50mg on the Visit
       record (violating the 2-unit per visit limit).
   3.​ Action: Ari clicks the Submit or Sign button on the Visit record.




Verification / Key Takeaways

The success of this exercise is proven when the system blocks the transaction and provides
an enforcement message during the Visit Submission.

   3.​ Enforcement Validation:
          ○​ Expected Result (Success): The Visit submission will fail, and the system will
              display an Error message to Ari. This confirms that the Sample Limits logic
              successfully executed and enforced the Error rule.
          ○​ If the Visit submits (Failure): The Validate sample limits setting is likely
              inactive, or the SampleLimitTransactionHandler is not correctly
              configured/active.
   4.​ Audit Trail Validation:
          ○​ Because the Limit Enforcement Type was set to Error, the non-compliant
              disbursement is blocked. Consequently, no Provider Visit Sample Limit
              Transaction record is created, and the inventory quantities are not updated,
              confirming the non-compliant transaction was fully halted.
   5.​ Key Takeaway: Real-time limit enforcement is intrinsically linked to the Visit
       submission process. It requires the Admin to enable validation within Visit
       Administration and ensure the Sample Limits Trigger Handlers are active to
       execute the logic defined in the Sample Limit Templates.




Exercise: Sample Territory Allocation
Makana Pharma Operations has defined a strategic plan for the launch product, Immunexis
50mg, across the TM - SPC - San Francisco North 20D02T11 Territory. This control is necessary
to manage inventory, budgeting, and strategic distribution.

Sales representatives in the "TM - SPC - San Francisco North 20D02T11 Territory" territory need
to be restricted to a set budget of samples for a defined set of periods.

   ●​ Requirement 1 (Strategic Allocation): The entire TM - SPC - San Francisco North
      20D02T11 Territory is allocated a maximum of 5,000 units of Immunexis 50 Mg for
      the Q4 2025 time period (October 1 to December 31).
   ●​ Requirement 2 (Disbursement Control): No single sales representative should be
      able to disburse more than 50 units in any one customer visit.
   ●​ Validation: The system must be configured to check inventory against this allocation
      during sample drops.



Prerequisites

Before starting, ensure the following base records exist in your org:

   ●​ Product: A Product2 record for Immunexis 50mg.
   ●​ Territory: An active Sales Territory record named TM - SPC - San Francisco North
      20D02T11 Territory.
   ●​ Time Period: A Time Period record representing the allocation timeframe (e.g., Q4
      2025, Oct 1 - Dec 31).
   ●​ Permissions: You must have the Life Sciences Commercial Admin permission set.



Step 1: Create the Territory Product Quantity Allocation (TPQA) Record

You will define the strategic limits by creating a new TPQA record, linking the product,
territory, and time frame.

   1.​ From the App Launcher, find and select Territory Product Quantity Allocations.
   2.​ Click New.
   3.​ Fill in the required fields:
            ○​ Product: Select Immunexis 50mg.
            ○​ Territory: Select the TM - SPC - San Francisco North 20D02T11 record.
            ○​ Time Period: Select the Q4 2025 (Oct 1 - Dec 31) Time Period record.
   4.​ Configure the Quantity Allocation and Limits:
            ○​ Allocated Quantity: Enter 5000.00. (The total budgeted quantity for the
                territory.)
           ○​ Allocation Type: Select Drop. (Samples distributed directly to HCPs during
              visits.)
           ○​ Max Disbursement Limit Quantity: Enter 50.00. (The maximum a sales rep
              can disburse in a given visit.)
           ○​ Optional: You may also define the Ordered Quantity.
   5.​ Click Save.​
       Note: We recommend defining allocations at the lowest relevant level in the
       hierarchy where samples are managed.




Step 2: Enable Validation Against Territory Inventory

You must configure the Visit Administration settings to ensure the system actively checks
the TPQA limits when a sales rep submits a visit.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select the Visit Administration tile.
   3.​ Navigate to the Visit Settings tab.
   4.​ Find and select the Validate territory quantity inventory checkbox.
   5.​ Configure the validation behavior:
           ○​ Select the option that reads Choose whether to show an error when
               submitting the Visit (This enforces the hard limit required by the business.)
   6.​ Click Save.




Verification / Key Takeaways

You have successfully configured the strategic control layer for sample distribution, ensuring
territory-level budgets are respected during field operations.

   1.​ Validate Allocation Control:
       ○​ Go to the newly created Territory Product Quantity Allocation record.
       ○​ Verify that the Allocated Quantity is 5000.00 and the Max Disbursement
          Limit Quantity is 50.00.
       ○​ The Remaining Quantity is initially 5000.00. This field is calculated and
          updated automatically based on the amount disbursed in submitted visits.




2.​ TPQA vs. Sample Limits:
       ○​ Territory Product Quantity Allocations (TPQA): Controls inventory
          management, budgeting, and strategic distribution planning. It is set at
          the territory level.
       ○​ Sample Limits: Defines the maximum number of samples that can be
          distributed to a specific account to ensure regulatory compliance and
          responsible sample distribution. It is set at the account level.
       ○​ You can configure them separately or use them together to control both the
          territory budget and the account compliance limits.



3.​ Validation Check: When a sales rep attempts to submit a visit that would cause the
    territory's remaining quantity to fall below zero, or a single disbursement exceeds the
    Max Disbursement Limit Quantity of 50, the system will prevent the visit
    submission, enforcing the rule set in Step 2.
​      How to validate:

​      1. Log into the AFLS4CE ipad app using the credentials for Ari Blake

       2. Go to Accounts and Click on New Visit (from the Floating Action Button (FAB))

       3. Distribute Samples and try to submit the visit to check the validations




Exercise: Inventory Assessment/Counting
Prerequisites

Before starting, ensure the following base configurations are in place:

    ●​ User: Ari Blake (current user)
    ●​ Inventory Setup: Ari has established Location, Product Item, and Product Batch
       Item records for Immunexis 50mg.
           ○​ System Count Assumption: Assume Ari has 100 units of Immunexis 50mg.
    ●​ Dashboard Access: Ari's profile must have access to the Sample Inventory
       Management Dashboard.
    ●​ If Sample Inventory Management dashboard is not accessible- add it using Life
       Sciences Commercial App Navigation Items > Add More Items. Available at the
       extreme right of the top menus.
    ●​ Permissions Prerequisites: The required Inventory Count assessment permissions
       must be available .
Step 1: Execute the Initial Inventory Count Assessment

Ari must perform his mandatory Initial assessment for Immunexis 50mg to officially
declare his starting inventory.

Note:

        a) Before Ari starts executing different types of operations- this is an important
        pre-step that must be performed. Remember- Sample Management provides 4
        different types of Inventory Assessment- 1. Initial 2. Ad Hoc 3. Periodic 4. Audited.
        b) Users will have only the Initial Inventory Assessment option when starting. c)
        Once the Initial Counting is done, Users will get another three options and the Initial
        Assessment option will not be available.

   1.​ From the App Launcher, find and select Sample Inventory Management.
   2.​ Navigate to the Inventory Count Assessments component .
   3.​ Click the Add icon (+) and select Ad Hoc (The system automatically selects Initial
       this type if no prior assessment exists)
           ○​ Note: For an Initial assessment, the Opening Count is always zero. Initial
               Assessment is ONLY available for the first time. Subsequently, Ad Hoc,
               Periodic and Audited needs to be used



   4.​ In the New Assessment window:
           ○​ Select the product Immunexis 50mg.
           ○​ In Actual Stock Count, enter 100.00. (Matching the system count).
           ○​ Select the Discrepancy Reason as Other.
   5.​ Click Submit.




Step 2: Execute Ad Hoc Assessment with Automatic Discrepancy Reconciliation

Ari performs an unplanned Ad Hoc count on Immunexis 50mg and finds a shortage, which
the system must automatically reconcile (Adjustment).

   1.​ In the Inventory Count Assessments component, click the Add icon (+) and select
       Ad hoc.
   2.​ In the New Assessment window:
           ○​ Select the product Immunexis 50mg.
        ○​ Purpose: Select the reason for the unscheduled count.
        ○​ Review the Total System Count (100.00).We had this count during initial
           counting.
        ○​ In Actual Stock Count, enter 95.00 (A 5-unit discrepancy).
        ○​ Select a Reason for the discrepancy from available reasons.
3.​ Click Submit.
        ○​ System Logic: Because the Actual Stock Count (95) is less than the Total
           System Count (100), the system automatically records a Product Transfer of
           5 units to reduce the system count, logging an Adjustment operation in the
           timeline .
Verification / Key Takeaways

You have successfully executed the core inventory count assessments, demonstrating the
system's self-reconciliation capability.

   1.​ Validate Assessment Records:
           ○​ The Inventory Count Assessments component shows product record: Initial
              (Immunexis 50mg).
   2.​ Validate Inventory Reconciliation:
           ○​ Review the Product Item record for Immunexis 50mg. The Quantity On
              Hand should be reduced by 5.00 units, reflecting the automatic adjustment
              created in Step 3, which is also visible in the Inventory Operations Timeline.
   3.​ Key Takeaway: Inventory Count Assessments are the compliance tool used for
       time-stamped, reconciliation. When a discrepancy occurs, the system automatically
       creates a corrective Adjustment operation to force the digital inventory record to
       match the physical count, maintaining inventory accuracy.


Exercise: Sample Inventory Operations
Ari needs to complete a series of real-world inventory operations involving his colleague rep,
Andrew Whitaker, and the Great Health Manufacturing, a manufacturing/Warehouse
Location.

   1.​ Transfer Out: Ari must send 20 units of Immunexis 50mg to Andrew Whitaker who
       is running low on stock.
   2.​ Product Request: He must proactively submit a Product Request for replenishment
       of Immunexis 50mg from the Great Health Manufacturing.
   3.​ Return: He discovers 15 units of unusable Immunexis 50mg and must log a Return
       operation.
   4.​ Manual Adjustment: Ari made a disbursement error last week, over-reporting a
       sample drop by 5 units of Immunexis 50mg. He needs to perform a Manual
       Adjustment to correct his inventory count.




Prerequisites

Before starting, ensure the following base records and statuses exist:

   ●​ Users/Inventory Setup: Ari Blake (current user) and Andrew Whitaker user records,
      both with established Location, Product Item, and Product Batch Item records.
          ○​ Assume Ari has 95 units of Immunexis 50mg after the ad hoc counting.
   ●​ Location: Great Health Manufacturing must already exist in the system.
   ●​ Dashboard Access: Ari's profile must have access to the Sample Inventory
      Management Dashboard.
   ●​ If Sample Inventory Management dashboard is not accessible- add it using Life
      Sciences Commercial App Navigation Items > Add More Items. Available at the
      extreme right of the top menus.
   ●​ Picklists: Required picklist values for Inventory Operation Status (Submitted) and
      Product Request Status (Submitted, Returned) must exist.



Step 1: Execute Transfer Out and Return Operations

Ari uses the Inventory Operations Timeline component to initiate both an outgoing transfer
and a stock return.

   1.​ Initiate Transfer Out (Peer-to-Peer):
           ○​ From the App Launcher, find and select Sample Inventory Management.
           ○​ Navigate to the Inventory Operations Timeline component.
           ○​ Click the Add icon (+) and select New Operation.
           ○​ In the New Inventory Operation window, select Transfer Out.
           ○​ Destination Location ID: Select Andrew Whitaker Inventory.
           ○​ Product: Select Immunexis 50mg.
           ○​ Ship To Name- Andrew Whitaker
           ○​ Quantity: Enter 20.00.
           ○​ Click Submit. (Ari's Immunexis 50mg inventory is immediately debited.)
2.​ Initiate Return (Damaged Stock):
        ○​ Click the Add icon (+) and select New Operation.
        ○​ Select Return.
        ○​ Destination Location ID: Select Great Health Manufacturing.
        ○​ Shipping Provider: UPS Healthcare
        ○​ Ship To Name: Great Health Manufacturing
        ○​ Product: Select Immunexis 50mg.
        ○​ Quantity: Enter 15.00.
        ○​ Comments: Enter Damaged stock found during inspection.
        ○​ Click Submit. (Ari's Immunexis 50 mg inventory is immediately reduced.)
3.​ Ari is now running low on Immunexis 50mg inventory- He has 95 after ad hoc
    counting and now after transfer out of 20 and return of 15- he is left with 60.
Step 2: Submit a Product Request for Replenishment

Ari initiates a Product Request to proactively secure replenishment inventory.

   1.​ In the Inventory Operations Timeline component, click the Add icon (+) and select
       New Request.
   2.​ In the New Product Request window:
           ○​ Select - Sample Management.
           ○​ Status: Select Submitted.
           ○​ Destination Location: Auto Populated with Ari Inventory.
           ○​ Product: Select Immunexis 50mg.
           ○​ Quantity: Enter 150.00.
   3.​ Click Submit. (The request is logged in the timeline under the Requests tab.)
Step 3: Execute a Manual Adjustment Operation

Ari corrects a prior administrative error by performing a manual Adjustment operation.

   1.​ In the Inventory Operations Timeline component, click the Add icon (+) and select
       New Operation.
   2.​ In the New Inventory Operation window, select Adjustment.
   3.​ Product: Select Immunexis 50mg.
4.​ Quantity: Enter -5.00. (Since she over-reported a drop, the count needs to be
    increased by 5 units.)
5.​ Comments: Enter Correction for prior disbursement over-report.
6.​ Click Submit. (Ari's Immunexis 50mg inventory has increased by 5 units.)
7.​ Now Ari has a total inventory of 65 Immunexis 50mg.
Verification / Key Takeaways

You have successfully executed the full range of sample inventory transactions, ensuring the
system maintains a compliant, real-time audit trail.

   1.​ Validate Inventory Operations Timeline:
           ○​ The Timeline shows: Transfer Out, Return, Adjustment, and the Product
              Request (under Requests tab).
   2.​ Validate Final Inventory Levels:
           ○​ Review the Product Item record for Immunexis 50 mg. The quantity should
              reflect the final transactions: (100 Initial (after ad hoc counting 95) - 20
              Transfer Out -15 Return 5 Adjustment) = 65 units.
   3.​ Key Takeaway:
           ○​ All Inventory Operations trigger updates to the Product Item and Product
              Batch Item records and simultaneously log a detailed Product Item
              Transaction record for the full audit trail.
Remote Engagement
Training Exercise
           Remote Engagement
Company Profile

Makana Pharma is a mid-sized, high-growth biotech company specializing in auto immune
disorder and rare diseases. Their flagship product, Immunexis, is a breakthrough
immunotherapy treatment entering a highly competitive market. With a lean field force and high
compliance scrutiny, Makana relies on data-driven interactions to maximize the impact of every
Healthcare Professional (HCP) meeting.




The Team

   ●​ Stakeholder (Requester): Elena Rossi, Director of Commercial Operations. She wants
      to ensure that his reps can meet with time-strapped oncologists virtually without
      technical hurdles, while maintaining strict compliance standards regarding recording and
      consent.
   ●​ End User (The Persona): Evan Casto, Specialty Sales Representative. He covers a
      large geographic territory. He needs a seamless way to launch compliant video calls with
      Dr. Lucas Grant directly from his iPad, share his screen to review clinical data, and
      automatically log the interaction.




The Scenario

The launch of Immunexis is critical, but many oncologists are restricting in-person access.
Evan needs to switch to a hybrid model immediately.

Elena Rossi has mandated that all remote engagements must be branded, secure, and
compliant. She requires a system where Evan can schedule a "Remote Visit" in Salesforce,
which then automatically generates a unique Twilio video link and emails it to Dr. Grant.
Additionally, Dr. Grant must accept a "Terms and Conditions" screen before joining the call.

You, as the System Integrator, need to configure the Remote Engagement module. This
involves setting up the underlying Twilio connection, creating the Experience Cloud site for the
video player, and defining the automated email logic.
The Business Challenge

Without this configuration, Makana Pharma faces the following friction points:

   ●​ Disjointed Experience: Reps are using unapproved Zoom or Teams links, which do not
      integrate with Salesforce, leading to lost activity data and no audit trail.
   ●​ Compliance Risk: There is no mechanism to enforce "Terms and Conditions"
      acceptance before a call, exposing Makana to legal liability.
   ●​ Scheduling Chaos: Reps are manually copying and pasting links into emails. They
      often forget to send updates if a meeting time changes, resulting in missed appointments
      and frustrated KOLs.




The Enablement Goal

To resolve this, the System Integrator must perform the following specific technical
configurations:

   ●​ Establish Twilio Integration: Configure the Twilio External Credentials (Account SID,
      Auth Token) and add the required Trusted URLs (e.g.,
      wss://global.vss.twilio.com) to allow video traffic .
   ●​ Deploy Experience Cloud Site: Create and publish an Aura-based Experience Cloud
      Site containing the HCP Remote Platform Conference component to serve as the
      secure video portal for Dr. Grant .
   ●​ Configure Admin Settings: In the Admin Console, set the Remote Visit Channel to
      "Video Call" and define the Video Call Link to point to the new Experience Cloud site.
   ●​ Automate Invitations: Activate the RemoteSessionInvitationPVHandler (for
      ProviderVisit) and RemoteSessionInvitationVisitHandler (for Visit) configure
      the Email Templates to automatically send meeting URLs and passcodes when a Visit
      is scheduled .

Objective

In this exercise, the learner will configure the AFLS (AFLS) Remote
Engagement module, establishing the integration with Twilio, deploying the secure Health Care
Professional (HCP) video portal via an Experience Cloud Site, automating compliant invitation
workflows, and enforcing mandatory Terms and Conditions acceptance before remote
sessions begin. This streamlines virtual interactions and eliminates the need for manual
scheduling and unapproved tools.

Scenario Background
Makana Pharma is scaling the launch of Immunexis but faces access restrictions from many
oncologists, requiring a switch to a hybrid sales model. Elena Rossi (Director of Commercial
Operations) has mandated that all virtual meetings must be secure, branded, and compliant.
Currently, reps like Evan Casto are using unapproved tools, resulting in lost activity data and no
audit trail. The primary compliance risk is the lack of a mechanism to enforce Terms and
Conditions acceptance before a video call, exposing Makana to legal liability. The system must
be configured so scheduling a Visit automatically generates a secure Twilio link, emails the
invitation, and enforces the pre-call compliance check.

Prerequisites

Before beginning this exercise, ensure the following are in place in your training environment:

   ●​ Required Edition and License: Your org must be Enterprise or Unlimited Edition with
      the AFLS license.
   ●​ Admin Permissions: The admin user must have the Life Sciences Commercial
      Admin permission set, Manage Named Credentials or Customize Application, and
      Create and Set Up Experiences permissions.
   ●​ External Credentials: You must have the Twilio Account ID (accountId) and Twilio
      Authorization Token (authToken). Steps in Part 1, Step 1
   ●​ Credential Access: A permission set granting access to Twilio credentials must be
      created and assigned to users who work with video calls.

Note: Most of the following configuration is part of the org. Suggestion is to remove the existing
configurations and start from scratch. If you plan to reuse a few configurations still make sure
that all the settings are as described below.

Step-by-Step Configuration

Part 1: Configure Twilio Integration and Secure URLs

We link Makana Pharma’s Salesforce instance to the Twilio service and enable secure WSS
endpoints for call participants.

   1.​ Twilio Credential Setup (Prerequisite)
           ○​ Getting Twilio Free Trial
                 i.​ Go to: https://login.twilio.com/u/signup
                 ii.​ Do email and mobile phone verification to activate the account.
           ○​ Locate Account Credentials
                 i.​ Go to the Account section.
                 ii.​ Locate and save the Account SID and Auth Token.
           ○​ Generate API Keys
                 i.​ Below the Auth Token section, click on the "Go to API Keys" link.
              ii.​ Click the Create API Key button.
              iii.​ Save the Twilio SID (to be used as the API Key) and the Secret safely.
      ○​ (Optional) AWS Configuration
              i.​ If Video Call Recording is required, configure the AWS Secret to store
                    recording files.
2.​ Configure Twilio External Credentials:
      ○​ From Setup, in the Quick Find box, enter Named Credentials, and then select
          Named Credentials.
      ○​ Select External Credentials, and then select Twilio External Credentials.
      ○​ In the Principals section, use the dropdown to edit Twilio credentials. Delete
          everything that is there in Auth Parameters and save.




       ○​ Again, in the Principals section, use the dropdown to edit Twilio credentials. In
          the Authentication Parameters section, add these parameters afresh.

     Parameter Name                                          Parameter Value
        accountId                                               Enter the Twilio account ID (Account SID).



        authToken                                               Enter the Twilio authorization token (Auth
                                                                   Token).



        apiKey                                                  Enter the Twilio API key.



        secret                                                  Enter the Twilio API secret.


          ○​ Save.
          ○​ Create a permission set that provides access to Twilio credentials.
                 i.​ Create a new permission set
                 ii.​ Select External Credential Principal Access, and then select Edit.
                 iii.​ Move twilioExternalCredential - Twilio Credentials from Available
                       External Credential Principals to Enabled External Credential Principals,
                       and then select Save.
                 iv.​ Select Permission Set Overview, and then select Object Settings.
                 v.​ Select User External Credentials, and then select Edit.
                 vi.​ Enable Read permissions, and then save your work.
                 vii.​ Assign the permission set to Evan Casto
   3.​ Assign Trusted Twilio URLs: For attendees to connect to the video call, Twilio WSS
       endpoints must be added as trusted URLs.
          ○​ From Setup, in the Quick Find box, enter Trusted URLs, then select Trusted
             URLs.
          ○​ Select New Trusted URL.
          ○​ Enter an API name, set the URL to wss://global.vss.twilio.com, and verify that the
             URL is set to Active.
          ○​ Set the CSP Context to Experience Builder Sites, and set the CSP Directive to
             connect-src (scripts).
          ○​ Select Save & New.
          ○​ Similarly, add wss://sdkgw.us1.twilio.com as a trusted URL.
          ○​ Save your work.

Part 2: Setup HCP Experience Cloud Site

The Experience Cloud Site acts as the secure, branded video portal where attendees join the
meeting.

   1.​ Create Experience Site
○​ Goto SetUp -> Go to Digital Experiences -> All Sites -> Click on New
○​ Create the Site: Create a new Experience Cloud Site using an Build your own
   (Aura) Template.
○​ Add Video Call Component:
       i.​ Go to Builder and create a separate page for the video call.
       ii.​ Select Components and drag the HCP Remote Platform Conference
             component onto the page.
       iii.​ (Optional) Add the Language Selector component to support multiple
             languages.
○​ Set Public Access: In Properties, set Page Access to Public.
○​ Publish and Note URL: Publish the site. Take note of the video call page URL;
   this is needed for the Admin Console settings.
       i.​ Assign Guest User Permissions: Settings -> General -> Select the link
             under Guest user profile (it’ll look like <site_name> Profile)
ii.​ From there goto “Assigned Users”. Select the only present user. (Site
      Guest User, <Site_name)
iii.​ Assign the Access Remote Engagement for Digital Experience
      permission set and the Twilio credential permission set created in Part 1,
      step 2 to the site's Guest User .
          ○​ Goto Workspaces-> Administration. Activate the site.

Part 3: Configure Admin Console Settings and Channel

We define the communication type (Channel) and link the settings to the newly deployed
Experience Cloud site.

   1.​ Create Remote Engagement Channel Value: This value represents the video call
       communication type.
          ○​ Go to Object Manager > Visit > Fields & Relationships > Channel.
          ○​ In the Channel Picklist Values section, select New.
          ○​ Enter the value Remote and click Save .
   2.​ Configure Video Call Settings:
          ○​ Navigate to the Admin Console > Remote Engagement > Settings.
          ○​ Select the “remote” in the Remote Visit Channel.
          ○​ Set Service Provider to Twilio.
          ○​ In the Video Call Link field, enter the URL of the Experience Cloud site page you
              noted in Part 2. (Not the site link but the link to the Video Call page)
          ○​ (Optional) Configure Video Call Experience Settings (e.g., check Hosts can
              record video calls or Attendees can share their screens) .
          ○​ Click Save.
   3.​ Activate Trigger Handlers: Enable the system logic required to generate session keys
       and send invitations.
          ○​ In the Admin Console, select Trigger Handler Administration.
          ○​ Find and set the following handlers to Active:
              RemoteSessionInvitationPVHandler (for ProviderVisit) and
              RemoteSessionInvitationVisitHandler (for Visit) .
   4.​ Make changes to Visit Settings:
          ○​ Admin Console -> Visit Administration -> Visit Settings
          ○​ Select apply settings to as “OrgDefault”
                  i.​ Select profile as “Field Sales Representative”
                  ii.​ Set “Visit Conflict Validation Period in Days” to 0 and “Visit Conflict
                       Validation Period in Mode” to Warning
          ○​ Select apply settings to as “Profile”
                  i.​ Select profile as “Field Sales Representative”
                  ii.​ Set “Visit Conflict Validation Period in Days” to 0 and “Visit Conflict
                       Validation Period in Mode” to Warning​




Part 4: Automate Invitation Emails

This automates the compliant delivery of meeting details to Dr. Grant when Evan schedules a
visit. Separate, Email templates should be configured for create, update

   1.​ Make sure that your org uses the Life Sciences RSVP email address.
          ○​ From Setup, in the Quick Find box, find and select Life Sciences for Customer
              Engagement Setup.
          ○​ Verify that the RSVP email address is turned on.From the App Launcher, find and
              select Life Sciences Commercial, and then select Admin Console.
   2.​ Goto Admin Console. Select Email, and then Email Templates.
   3.​ Select New Email Template.
   4.​ Upload a ZIP file of the email template.
          ○​ Download the ZIP file from this URL: http://sfdc.co/lscontent (password:
              hdBWqTgZ).
          ○​ Unzip the file.
          ○​ Open the "Remote invitations" folder.
          ○​ Use the file named afls-invitation-create.zip for creating invitations. (Similarly, for
              updating and canceling visit scenarios, use the files afls-invitation-update.zip and
              afls-invitation-cancel.zip respectively.)
   5.​ Enter a subject, name, effective start and end dates, and following additional values:

                   Field                                            Value



                   Automated Email Invitation                       Provider Visit
                      Context
Automated Email Invitation               Create
   Action



Default template for automated           Selected
   emails



Attach iCalendar file                    Selected



iCalendar Description            For create invitation email

                                 Dear {{recipient.firstname}} {{recipient.lastname}},

                                 {{sender.name}} scheduled a call with you on
                                 {{visit.PlannedVisitStartTime}}.

                                 You can access it using the link:
                                 {{remotesession.url}}

                                 Thank you,

                                 {{sender.name}}

                                 For update invitation email

                                 Dear {{recipient.firstname}} {{recipient.lastname}},


                                 {{sender.name}} rescheduled a call with you on


                                 {{visit.PlannedVisitStartTime}}.


                                 You can access it using the link: {{remotesession.url}}


                                 Thank you,


                                 {{sender.name}}


                                 For Cancel Invitation email
                                                          Dear {{recipient.firstname}} {{recipient.lastname}},


                                                          {{sender.name}} has cancelled the call!




   6.​ Select Upload and Save.
   7.​ In the list view, select the template you just created, and then select Edit.
   8.​ Align the email template to the territories of the end users associated with the template.
   9.​ Save and activate the template.
   10.​Similarly, create two additional templates for the Update and Cancel automated email
       invitation action types.

Part 4: Add quick action to start adhoc remote session on the account record page
   1.​ Navigate to Setup and enter Object Manager in the Quick Find box.
   2.​ Select Object Manager and locate the Person Account object.
   3.​ Click on Page Layouts in the left-hand menu.
   4.​ Identify the layout you want to modify (e.g., "Person Account HCP Layout") and click
       Edit.
   5.​ In the Page Layout Editor, locate the Mobile & Lightning Actions section.
   6.​ Drag the "Start Remote Engagement" action from the palette to the Salesforce Mobile
       and Lightning Experience Actions section of the layout.
   7.​ Click Save to apply the changes to the layout.

Remember to create and sync the metadata cache for the changes to start reflecting in the ipad
app

Verification/Check (ipad only)

Act as the end-user (Evan Casto) and the HCP (Dr. Grant) to validate the end-to-end
functionality. All steps to be completed on the ipad.

Note: Make sure to generate a new metadata cache after the setup is done. Admin console ->
Mobile -> Metadata Cache -> Create New Cache

Check 0:



Check 1: Automated Invitation & Scheduling (Planned Visit)

   1.​ Log in as Evan Casto.
   2.​ Go to the Account record page of Lucas Grant and schedule a new visit from Quick
       actions, specifying the account, planned times, and the Video Call channel as remote.
3.​ Verify: Upon scheduling, wait for sync to happen (Visit number should not be in
    stars any more) and the system should provide a unique Room ID and Passcode for
    secure access, and an invitation email should be sent to the attendee containing the
    direct Join Meeting link. Invitation will be sent to the contact point email address of the
    Account.
4.​ Go back to that newly created Visit record page. Click on the edit button on the record
    page. The Start Remote Session button should appear on the edit screen. Click on it to
    start the remote session.
Check 2: Compliance Enforcement (T&C Check) (Planned Visit)

   1.​ Simulate Dr. Grant clicking the join link from the invitation email.




   2.​ Verify: Before being allowed to join the video session, the participant must see and
       Accept the Terms and Conditions text you uploaded, confirming the compliance gate
       is active .

Check 3: Field Execution and Functionality (Adhoc Visit)

   1.​ On the Account record for Dr. Grant, Verify the Start Remote Session quick action
       button is available.
2.​ Launch the Remote Engagement session (as Evan Casto) by clicking on that button.




3.​ Verify: After clicking End Meeting, a recording of the session (if enabled and configured
    in ) is viewable in the Video Call Recordings related list on the visit record.
Take Home Instructional
Guide
These are take home exercises to be
completed post the hands on session. Use
the topic specific tabs
Activity Plan Take Home
Exercise
                          Activity Plan​

Objective
In this exercise, you will translate Evan Casto’s high-level "Launch Pulse" strategy into
actionable system configurations. You will set up a Provider Activity Plan that tracks specific
"WhatsApp" and "SMS" visit targets for the Immunexis launch. You will also configure the
necessary calculation logic and batch jobs to ensure Field Reps like Sarah Jenkins have
data-driven visibility into their performance against goals.

Scenario Background

The launch of Immunexis is critical for Makana’s FY25 revenue. Evan Casto (VP of
Commercial Ops) has mandated a "6+3" engagement model: Tier 1 rheumatologists like Dr.
Rachel Shell must receive 6 WhatsApp and 3 SMS interactions per quarter.

Currently, Sarah Jenkins (Senior autoimmune disease Account Manager) is tracking this
manually in spreadsheets, leading to data gaps. We need to configure AFLS4CE to automate this
tracking. Note that because these metrics are complex, they are calculated via scheduled batch
jobs, providing Sarah with near real-time "Percentage to Goal" updates on his dashboard.

Prerequisites

   ●​ Permission Set: Ensure your user has the Life Sciences Commercial Admin
      permission set.
   ●​ Data Setup: Ensure an Account (Dr. Shell), Territory (San Francisco North), and
      Product (Immunexis) exist in the org.
   ●​ Field Config: Ensure the Channel picklist on the Visit object contains values for
      "WhatsApp" and "SMS".
   ●​ Tab Setup: Ensure a Lightning Component Tab exists for lsc4ce:PlanCycle labeled
      Activity Plan Review to allow Reps to review their goals.
Configuration Steps

Step 1: Configure Global Calculation Settings

Before defining the plan, we must tell the system how to calculate progress. Specifically, since
Evan Casto wants to track "Immunexis" targets separately from general visits, we must enable
product-based calculations.

   1.​ From the App Launcher, find and select Admin Console.
   2.​ Select Activity Plans and then select Activity Plan Configuration.
   3.​ Under Batch Size Configuration, ensure a default batch size is entered (e.g., 200).
   4.​ Under General Settings, select Use product-based calculations.
           ○​ Note: Without this setting, Sarah cannot track Immunexis specific goals.
   5.​ Click Save.




Step 2: Define Provider Activity Measure Types

We need distinct measures for "WhatsApp" vs. "SMS" visits based on the Visit object.

   1.​ In the Admin Console, under Activity Plans, select Activity Plan Administration.
   2.​ Click New.
   3.​ Define the WhatsApp Measure:
           ○​ Activity Object: Select Visit.
           ○​ Label: WhatsApp Visit.
           ○​ API Name: WhatsApp_Visit.
           ○​ Activity Type Field: Select Channel.
           ○​ Activity Type Field Value: Enter WhatsApp (Must match your Visit picklist
               value).
           ○​ Activity Account Field: Select Account.
           ○​ Activity Territory Field: Select Territory.
           ○​ Activity Type Date Time Field: Select Planned Start Time.
           ○​ Active: Checked.
4.​ Configure Activity Status Information:
        ○​ Activity Type Status Field: Select Status.
        ○​ Activity Type Scheduled Status List: Enter Planned;InProgress.
        ○​ Activity Type Status List: Enter Completed.
5.​ Click Save.
6.​ Repeat steps 2-5 to create the SMS Visit measure (use SMS as the Activity Type Field
    Value).
Step 3: Create the Activity Plan Record

Now, create the strategic cycle plan. We must include review deadlines and thresholds so the
workflow transitions correctly from "In Progress" to "Active."

   1.​ From the App Launcher, select Activity Plans.
   2.​ Select any Activity Plans where Active is checked and uncheck it. (e.g. SF North H2
       2025)
   3.​ Click New.
   4.​ Name: FY25 Q2 Immunexis Launch.
   5.​ Status: Select In Progress.
   6.​ Time Period: Select the record covering the FY25 Q2 dates, 2025 2nd Half for
       San Francisco North.
   7.​ Usage Type: Select Provider Plan Cycle.
8.​ Type: Select Weighted Territory Goals. (While this specific 6+3 target can be achieved
    through Account Goals, the purpose of selecting weighted here is to acquaint you with
    weighted goals.)
9.​ Calculation Enabled: Checked.
10.​Number of Working Days: Enter 15 (or the appropriate count for the remaining
    quarter).
11.​Configure Review Details (Crucial for workflow transition):
        ○​ Assignee Due Date: Select a date 5 days from today.
        ○​ Reviewer Due Date: Select a date 10 days from today.
        ○​ Total Activity Change Review Threshold Percentage: 10.
        ○​ Total Account Change Review Threshold Percentage: 10.
        ○​ Activity Change Review Threshold Percentage: 10.
12.​Click Save.
Step 4: Configure Activity Plan Territories

Link the launch plan directly to Sarah’s sales territory.

   1.​ From the App Launcher, select Activity Plan Territories.
   2.​ Click New.
   3.​ Territory: Select TM - SPC - San Francisco North 20D02T11.
   4.​ Activity Plan: Select FY25 Q2 Immunexis Launch.
   5.​ Click Save.




Step 5: Generate Provider Activity Goals and Measures

Translate the "6+3" mandate into specific numerical targets for Dr. Shell.

5a. Create Provider Activity Goals (The High-Level Target)

   1.​ From the App Launcher, select Provider Activity Goals.
   2.​ Click New.
   3.​ Activity Plan: Select FY25 Q2 Immunexis Launch.
   4.​ Account: Select Dr. Rachel Shell.
   5.​ Overall Goal: Enter 9 (Total of 6 Whatsapp + 3 SMS).
   6.​ Product Level Goal: Enter 9 (Since all visits are focused on Immunexis).
   7.​ Click Save.
5b. Create Provider Activity Goal Measures (The Breakdown)

   1.​ From the App Launcher, select Provider Activity Goal Measures.
   2.​ Click New.
   3.​ Provider Activity Measure Type: Select WhatsApp Visit.
   4.​ Provider Activity Goal: Select the record created in Step 5a.
   5.​ Type: Select Weighted Goal.
   6.​ Overall Goal: Enter 6 (Evan's specific target for F2F).
   7.​ Activity Weight Value: Enter 1.
   8.​ Click Save & New.
   9.​ Repeat for SMS Call with an Overall Goal of 3 and Activity Weight Value of 1.
Step 6: Associate Goal Measure Products

Ensure these targets are explicitly tracked against Immunexis.

   1.​ From the App Launcher, select Provider Activity Goal Measure Products.
   2.​ Click New.
   3.​ Provider Activity Goal Measure: Select the WhatsApp Visit goal measure record
       created in Step 5b.
   4.​ Product: Select Life Sciences Marketable Product, then search and select
       Immunexis.
   5.​ Click Save.
   6.​ Repeat for the SMS Call measure.
Step 7: Enable Visibility (Home Page and Account Page)

Sarah needs to see his "Immunexis Call Attainment" on his Home Page, but she also needs to
see Dr. Kaminska's specific status when she opens that record.

   1.​ Home Page Setup:
         ○​ Navigate to the Life Sciences Commercial Home Page -> Edit Page.
         ○​ Drag the Activity Plan By Product components onto the canvas if not already
            present.
         ○​ Select Plan Cycle Type as WeightedTerritoryGoals
         ○​ Click Save and Activation (Assign as Org Default).
2.​ Account Page Setup:
       ○​ Navigate to Dr. Shell’s Account Record -> Edit Page.
       ○​ Drag the Activity Plan By Product components onto the canvas if not already
          present.
       ○​ Select Plan Cycle Type as WeightedTerritoryGoals
       ○​ Click Save.
Verification: The "Sarah Jenkins" Experience

The Activity Plan is currently "In Progress." For Sarah to see active data, we must validate and
activate the plan using Batch Jobs.

   1.​ Activate the Plan:
          ○​ Go to Admin Console -> Activity Plans.
          ○​ Locate the Validate Activity Plans job under Activity Plan Jobs.
          ○​ Click Run. This job checks the Start Date and sets the Plan Status to Active.
2.​ Generate Data:
       ○​ Create a Visit for Dr. Shell:
               ■​ Channel: WhatsApp
               ■​ Status: Planned
               ■​ Planned Start Time: Today.
3.​ Calculate Progress:
       ○​ Return to Admin Console -> Activity Plan.
       ○​ Locate the Calculate Provider Activity Goal Measures job.
       ○​ Click Run. This job aggregates the Visit data against the Goals.
4.​ Verify UI:
       ○​ Navigate to the Home Page. Use the Activity Plan By Product chart to filter by
           Immunexis. You should see your Target (9) and Scheduled activity.
       ○​ Navigate to Dr. Shell’s Account. Check the Activity Plan By Product
           component. It should reflect the specific targets for this doctor.
Calendar
                                 Calendar
Makana Pharma is a leading biopharmaceutical company in the midst of its critical launch for
Immunexis, a new specialized auto immune disorder treatment. As field execution intensifies,
success now depends on how effectively sales representatives schedule customer visits,
manage internal commitments, and clearly define when they are unavailable in the field.

Scenario

Evan Casto, like other sales representatives, manages a busy daily schedule that includes
doctor visits, administrative tasks, and planned time off from the territory.

Without a single, unified calendar, Evan risks double-booking his time, missing internal
commitments, or attempting to schedule doctor visits during unavailable periods. He needs one
place to clearly understand when he is unavailable, what his upcoming agenda looks like, and to
help him schedule visits with key customers in a single, seamless experience.

He relies on the system not only to display his full schedule, but also to automatically prevent
conflicts when new visits or events overlap with existing commitments or time off.

That solution is the Calendar.

Enablement Goal
We need to validate that the Calendar provides Evan with a complete, unified planning
experience across all supported scheduling use cases:

   ●​ Ensure that Evan can use the Calendar as his single, unified view of his visits,
      administrative events, holidays, and time-off periods.
   ●​ Confirm the validation rules for different activities are correctly enforced so that all events
      are planned in compliance with availability requirements and operational constraints.
   ●​ Ensure Evan can confidently plan his day, understand his availability, and schedule visits
      with key customers from one central, integrated experience.

Prerequisites

   ●​ Permission Set: Ensure your user has the Life Sciences Commercial Admin
      permission set.
   ●​ Visit Settings: Ensure that visit conflict validation rules are correctly configured so that
      scheduling conflicts are properly enforced.
   ●​ Address Settings: Ensure that Account address configuration is complete and that valid
      address data is available on Account records for accurate scheduling behavior.
   ●​ Best Time Settings: Ensure that the Best Time feature is enabled and that relevant
      Best Time data records are available to support optimized visit scheduling




Configuration Steps

For this training exercise, the Calendar has been preconfigured in the training environment.
Participants are not required to perform admin setup steps, and should focus solely on end-user
validation and scheduling behavior as Evan Casto.

The following baseline configurations are assumed to already be in place:

   ●​ Default Business Hours are enabled.
●​ The Routine feature is enabled for end users.




●​ All Time Off Territory (TOT) trigger handlers required for validation and conflict
   prevention are enabled.
       ○​ TUDUpdateHandler
       ○​ TUDBHValidationHandler
       ○​ TUDSharingHandler
       ○​ TUDVisitValidationHandler
       ○​ TUDHolidayValidationHandler
       ○​ TUDOverlapHandler
       ○​ TUDEventValidationHandler




●​ Time Off Territory overlapping rules are already configured and enforced during visit
   and general event scheduling.
●​ A company-wide Holiday example has been created and is visible on Calendar.
   ●​ The MyTeam Scheduler (Mobile Only) for District/Regional Manager has been enabled.




No admin configuration changes are required during this exercise.




Verification: The "Sarah Jenkins" Experience

Log in as Evan Casto to validate that the Calendar provides a complete, unified scheduling
experience and correctly enforces availability and conflict rules.

Navigate to the Calendar tab.

   1.​ Check 1: Visit Validation Rule Enforcement
          a.​ Create a new Visit by dragging and dropping an Account onto the Calendar
          b.​ Observe that the Best Time is displayed on the calendar background
          c.​ Next, create another Visit with the same Account on the following day.
          d.​ Confirm that
                i.​ A warning message appears indicating that a Visit already exists within
                     the restricted validation timeframe.
          e.​ This confirms that Visit validation rules are correctly enforced to prevent
              non-compliant or duplicate scheduling.
   2.​ Check 2: Time Off Territory Overlap Rule
          a.​ Create a new Time Off Territory (TOT) entry that overlaps with the existing Visit
b.​ Confirm that:
       i.​ The system prevents the save, and
      ii.​ Displays an error message indicating that the TOT conflicts with the
           scheduled Visit.
c.​ This confirms that availability conflicts are blocked and that users cannot
    create Time Off Territory during previously scheduled customer commitments.
App Alert
                                App Alert
Makana Pharma continues to scale its commercial operations as field teams coordinate visits,
follow-ups, and operational tasks across multiple systems. Timely communication and clear
visibility into critical updates are essential to keep execution on track.


Scenario
Evan Casto relies on timely, in-context updates to manage his daily execution effectively.
Important changes - such as new account assignments and system recommendations -
require his immediate attention. She needs to see these alerts in real time and take action
directly from the alert, without losing context or switching between screens.

She needs a way to receive real-time, in-app alerts that are directly tied to his accounts,
activities, and daily work—so she can stay informed and act immediately within the system.

That solution is App Alerts.


Enablement Goal
We need to create App Alerts so that Evan receives timely, in-context updates and can take
action directly from the alert:
   ●​ Enable App Alerts in the org.
   ●​ Create an app alert with:
         ○​ The correct Context Type (Global, Tab-level, Object-level, or Record-level)
         ○​ A clear, actionable message
         ○​ Valid actions and deep links
   ●​ Publish and share the alert so it is delivered to end users in real time.


Prerequisites
Before beginning this exercise, ensure the following are in place in your training environment:

   ●​ Permission Set: Ensure your user has the Life Sciences Commercial Admin
      permission set.
   ●​ Technical Prerequisites: Your org must have the required user profiles ("Medical Sales
      Rep") , Apex class access, and metadata cache configured as specified in the core
      setup guide. This exercise assumes this one-time setup is complete.
   ●​ Territory Record: TM - SPC - San Francisco North 20D02T12.
Step-by-Step Configuration
Part 1: Enable App Alerts

This configuration activates the App Alerts framework in the org so that alerts can be created,
published, and delivered to end users like Evan Casto.

   1.​ Log in to your Salesforce Org as an Administrator.
   2.​ Navigate to the Life Sciences Commercial app.
   3.​ Open Setup and go to Sharing Settings, verify that the default internal access for both
       App Alert and Record Alert are set as Private
   4.​ Open the Admin Console, and select Trigger Handler Administration.
   5.​ Enable the following trigger handler required for App Alerts delivery and processing:
          a.​ NotificationTerritorySharingHandler




Part 2: Add Notification Container into the Page
To ensure users can view in-app notifications directly on the web experience, we must add the
Notifications List component to the desired page.

   1.​ Log in to your Salesforce Org as an Administrator.
   2.​ Navigate to the Life Sciences Commercial app and view the Home page.
   3.​ Click the Gear Icon (Setup) in the top-right corner.
   4.​ Select Edit Page. This will open the Lightning App Builder.
   5.​ In the Components panel on the left, find the Notifications List component.
   6.​ Drag the Notifications List component onto a prominent area of the Home page (center
       column or right rail is recommended).
   7.​ Click Save in the top-right corner.
   8.​ Click Activate and assign the page as the Org Default.

*Note: You can also place the Notifications List component on other pages - such as
Account, Account Plan, or additional workspace pages -based on your business needs.

This step applies only to web.Mobile already includes a built-in notifications panel (accessed
via the bell icon), so no additional configuration is required for mobile.

Part 3: Create an App Alert

This configuration creates a real App Alert so that Elena receives a timely, in-context
notification and can take action directly from the alert.

   1.​ Log in to your Salesforce org as an Administrator.
   2.​ From the App Launcher, search for and open the App Alert
   3.​ Click New to create a new App Alert.
   4.​ Configure the basic alert details:
           a.​ Subject: Recommended Product Message
           b.​ Effective Date Time: Dec 15, 8:00 AM
           c.​ Type: Recommendation
           d.​ Display Context Type: Global
           e.​ Additional Message:
                  i.​ This field requires a specific JSON structure. Copy the entire code block
                      below:
                 1.​ Remember to change the account record Id & slack team Id
                     (xxxxxx) to the valid account/slack team Id in your org.



JSON
{
"message":"Share the latest Immunexis efficacy message with Dr.
Aaron Morita. Check the updated content and plan your next visit.",
"notificationActions":[
{
"title": "Check New Content",
"action": "lsc4ce://deeplink/tab/lsc4ce__IntelligentContent/"
},
{
"title": "Schedule New Visit",
"action":
"lsc4ce://deeplink/tab/lsc4ce__AccountFilter/sobject-name/Account/re
cord-id/xxxxxx/quick-action/lsc4ce__NewVisit"
},
{
"title": "Discuss in Slack",
"action": "slack://channel?team=xxxxxx"
},
{
"title": "Learn More About Immunexis",
"action":
"https://my.clevelandclinic.org/health/articles/22335-rheumatologist
"
},
{
"title": "Complete",
"actionable":true,
"actionName":"Resolved"
},
{
"title": "Dismiss",
"actionable":true,
"actionName":"Dismissed",
"dismissOptions": ["Acknowledged", "Expired"],
"dismissOptionRequired" : true
}
],
"tags":["Next Best Message", "Visit Prep", "Recommendation"]
}
   5.​ Navigate to the Related tab.
   6.​ Create a new App Alert Territory record:
          a.​ Set the Territory to TM - SPC - San Francisco North 20D02T12.




   7.​ Click Save.



Verification: Test as the End-User
Log in as Evan Casto to validate that the App Alert is delivered in real time and supports
in-context action.

   1.​ From any screen, tap the App Alert icon in the top-right corner to open the App Alert
       panel.
   2.​ Navigate to the Recommendation tab.
   3.​ Verify:
           a.​ The newly created App Alert appears under the Recommendation tab.
           b.​ Each action successfully navigates to the correct screen.
           c.​ Tap Dismiss, select a reason, and confirm.The App Alert disappears from the
               list.

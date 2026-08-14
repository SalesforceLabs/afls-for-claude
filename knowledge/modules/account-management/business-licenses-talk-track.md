## **Demo Script: Administering and Using Business Licenses (State License Numbers) in AFLS**

**Narrator:** \"Hello, and welcome to this demonstration of **Business License Management**, within Salesforce AFLS. This critical feature is designed to manage and validate the medical licenses of healthcare professionals (HCPs) and organizations. **Accurate license validation is paramount for compliance**, especially when it comes to activities like sample disbursement, ensuring that our field teams interact with licensed professionals in accordance with regulatory standards.

Let's walk through the administrative setup of business licenses.

### **Part 1: Administrator Demo - Configuring State License Number Validations**

1.  **Permissions and Prerequisites**:

    - **Administrator Action**: \"Starting in the Object Manager I find the Business License object and open the list of fields. The IsLicenseValidated formula fields contains an out-of-box formula that checks if the LicenseNumber is not blank and PeriodEnd is in the future. This formula field works in conjunction with the ComplianceScope field which defines the type license being validated. AFLS currently supports 3 license types:

      i.  Jurisdiction State for State License Valididation

      ii. Address for DEA License Validations that are address specific

      iii. and State Distributor License (SDL) that govern disbursement of dangerous drugs such as narcotics where states like Ohio have additional license requirements. Note that State Distributor License have a linkage to the State Distributor License Category field on Life Sciences Marketable Product object to determine which products the license applies too.

    - If the out-of-box IsLicenseValidated formula does not meet a client\'s business requirements, they can **create a custom formula field on the Business License object**. This formula field will define the logic for checking license validity based on our specific business rules. Note the custom field must return a **Checkbox** data type. A custom field can be created for each Business License type the client is using.

    - *I've created a field LicenseCheck\_\_c as an example that only checks that there is a License Number, but removes any concerns about the license expiration date.*

    - *Next we can quickly review an example of Business License record for Aaron Morita's State License Number.*

    - 

2.  **Navigate to License Management Settings**:

    - **Administrator Action**: \"From the **App Launcher**, I\'ll find and select **Admin Console**. Then, I click on the **License Management** tile.\"

3.  **Configure License Validations**:

    - **Narrator**: \"From here, I can define various license validation. For this demo, we\'ll focus on State License Numbers. The configuration is similar for all supported business license types. Please see the administration guide detail on configuring the other license types\"

    - **Administrator Action**: \"In the left navigation pane, I\'ll select **State License Number Setup**.\"

    - **Administrator Action**: \"Here, I can choose whether to apply these settings **org-wide (SOrg Default)** or to a **specific user profile**. For this demo, I\'ll select \'SOrg Default\'.\"

    - **Administrator Action**: \"Next, for the **Validation Formula**, I\'ll select the custom formula field \'*LicenseCheck\_\_*\' on the Business License object we discussed earlier. This formula field will dictate how the system determines if a license is valid.\"

    - **Administrator Action**: \"I\'ll enable **\'Apply State License Number evaluation and display validity icon in visit details\'**. This ensures that our field users get visual cues about license validity directly in their visit workflow.\"

    - **Administrator Action**: \"Additionally, I can enable **\'Display State License Number validity icon in search or lists\'** and **\'Display State License Number validity icon in Lightning pages\'** to provide visibility of license status across other parts of the application, like account lists or record pages.\"

4.  **Integrate with Visit Management (Samples & Items Settings)**:

    - **Narrator**: \"These license validation settings are tightly integrated with our visit management capabilities, especially concerning sample disbursement.

### **Part 2: End-User Demo - Experiencing State License Number Validations**

**Narrator:** \"Now, let\'s switch to the perspective of a field user who benefits directly from these administrative configurations..\"

1.  **Account Record Page - License Visibility**:

    - **Sales Rep Action**: \" Based on the configuration that was just setup, as a sales rep, when I open an **HCP account record and create a new Visit, I have intuitive visual indicators for each address that tell them whether or not the address is valid for the different business licensees based on the licence validation formula being applied.**

2.  

**Narrator:** \"In essence, the configuration of Business Licenses in AFLS acts as a **digital guardian for compliance**. By setting up precise validation rules and integrating them seamlessly into daily workflows like visit management and sample disbursement, administrators empower field teams to operate confidently and compliantly. This ensures that every interaction adheres to the highest standards.\"

## **Demo Script: Administering and Using Data Change Requests (DCRs) in AFLS**

**Narrator:** \"Hello, and welcome to this demonstration of **Data Change Requests, or DCR**, within Salesforce AFLS. This powerful feature is designed to **streamline how data modifications are submitted, validated, and implemented** across the Life Sciences Commercial application.

Its primary goal is to **reduce manual corrections, prevent unauthorized changes, and ensure data consistency** for both web and mobile users.

[DCRs triggered when users create or modify records of supported objects. Administrators configure these requests to route changes for approval, ensuring data consistency and compliance by determining if updates are applied immediately or after a review process]{.mark}

Today, we\'ll walk through the essential setup and administration tasks, then see how these configurations benefit our field users.\"

### **Part 1: Administrator Demo - Configuring Data Change Requests**.\"

1.  **Permissions and Prerequisites**:\
    The first step is to make sure the **DCRHandler trigger handler** must be enabled. This can be confirmed in the Admin Console under Trigger Handler Administration.\"

2.  **Next we need to access Access the DCR Settings**:

    - **Starting in the** **Admin Console**. Then, I click on the **Account Management** tile, and finally select **Data Change Request** in the left navigation pane.\"

    - 

3.  **Activate DCR for Objects**:

    - \"On this page, turn on **Object Status** to activate DCR for the Account object and its related DCR objects. This makes the feature active across the platform.\"

4.  **Define Profile Settings**:

    - **Administrator Action**: \"Under \'Profile Settings\', you can define the **default org behavior** for how data changes are handled. There are three main options:

      - **Don't apply changes immediately**: This sends DCRs for approval first, changes only appear in AFLS after their approval.

      - **Apply changes immediately**: is an object level setting that applies changes right when they are made, if changes are later rejected, they are reverted back which will revert them on the mobile app after the next sync.

      - **Lastly, Apply changes to each field individually**: This applies all changes so they are immediately visible, still creating a DCR for approval. However for each managed field, you have granular control to indicate if you don't want the field change to apply immediately and still require approval. Note that field level data change request settings override the object level setting.

    - 

    - **Administrator Action**: \"You can also **override the default for specific profiles**, by adding the profile and selecting a different Field Update Type. This offers granular control over who can make immediate changes versus who requires approval.\"

5.  

6.  **Configure Validation Types**:

    - \"Next, let's navigate to **Data Change Request Validation Types** under Account Management to define how DCRs are validated for different **record types**.\"

    - **Administrator Action**: \"Here, you can see the default settings for Healthcare Providers & Healthcare Organization, but you can add specific record types if they exist in the org, and select whether they require **internal validation** (managed by our organization) or **external validation** (like from an external MDM or IQVIA's OneKey).

    - You can enable the \'Requires Approval for Creation\' toggle to ensure new records cannot be created without approval.\"

    - There is also have the option to define which countries the validation type is configured for. Data change request functionality looks at the user's Preferred Country as defined in the User Additional Info object, and applies the relevant validations configured for that country

    - .

7.  **Create Managed Fields**:

    - **Administrator Action**: \"Finally, lets define **managed fields**, which are the specific fields whose updates or creations will trigger a DCR workflow.

    - I\'ll go to \'Life Science Data Change Definition Managed Fields\' from the App Launcher.\"

    - \"Lets look at the record \'HealthcareProvider_ProfessionalTitle\' as an example

    - You specify the object (e.g., \'HealthcareProvider\'), the Field API Name (\'Professionaltitle\'), whether changes to this field should \'Apply Change Immediately', which is relevant if the profile\'s default setting is \'Apply changes to each field individually\'),

    - DCR supports a wide range of objects, including **Account, HealthcareProvider, ContactPointAddress, BusinessLicense, ProviderAffiliation, etc**.\"

    - 

8.  **Add DCR Approval Tab**:

    - **Lastly,** to efficiently manage incoming DCRs, we\'ve added a custom tab 'Data Change Request's in the Life Sciences Commercial, providing a centralized place for all approval workflows.\"

**Narrator:** \"In summary, Data Change Requests provide a robust framework for managing data quality and compliance within AFLS. By carefully configuring permission sets, trigger handlers, profile settings, validation types, and managed fields, administrators ensure that all critical data changes undergo the necessary review and approval, maintaining the integrity of your organization\'s most valuable asset: its data. This structured approach is like a **quality control checkpoint** for your data, ensuring only verified information makes it into your official records, just as a pharmaceutical company rigorously tests products before they reach the market.\"

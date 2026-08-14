## **Demo Script: Configuring and Using Multi-Object Layouts for Accounts in AFLS**

**Narrator:** \"Hello, and welcome to this demonstration of the **Multi-Object Record View component** within Salesforce AFLS. This powerful feature consolidates fields from several related objects, specifically **Account and Healthcare Provider**, onto a single record page. This design makes it significantly easier for users to view and manage data, streamlines workflows, and improves overall efficiency by eliminating the need to navigate to multiple pages to gather complete account information.\"

### **Part 1: Administrator Demo - Configuring Multi-Object Layouts**

**Narrator:** \"As an administrator, my role is to set up this unified view. I\'ll ensure the necessary permissions are in place and then configure the Lightning components.\"

1.  **Enable Multi-Entity Layout Overrides (New/Edit Actions)**:

    - **Narrator**: \"To allow users to create and edit Account records using a unified interface that incorporates fields from both Account and Healthcare Provider, we need to override the standard **New** and **Edit** actions.\"

    - \"I\'ll navigate to **Setup** \> **Object Manager**, search for and select **Account**.\"

    - \"Then, I\'ll go to **Buttons, Links, and Actions**. For the **\'New\'** action, I\'ll click **\'Edit\'**, select **\'Lightning Component\'** as the Lightning Experience Override, and choose lsc4ce:MultiEntityCreateOverride. This component enables a combined creation experience.\"

    - **Administrator Action**: \"Similarly, for the **\'Edit\'** action, I would configure the Lightning Experience Override to use the lsc4ce:MultiEntityEditOverride component, enabling a unified editing experience.\"

    - **Narrator**: \"This override ensures that when a user clicks \'New\' or \'Edit\' on an Account, they are presented with an interface capable of managing fields from both the Account and its associated Healthcare Provider object simultaneously.\"

2.  **Add the Multi-Object Record View Component to the Account Record Page**:

    - \"Now, to display the consolidated information on the Account record page, we add the **Multi-Object Record View** component.\"

    - \"Although the Life Sciences Customer Engagement package adds this component by default, I\'ll demonstrate adding or verifying it. I\'ll go to **Setup** and search for **Lightning App Builder**.\"

    - \"I\'ll open an existing **Account record page** (or create a new one). Select the Details tab and in the **Components** section on the left, I\'ll search for \'Multi-Object\'. We can see it is already added to this record page with the Account Information section on the top coming from the Account object, and the INformation section below coming from the Healthcare Provider object.

    - **Administrator Action**: \"To avoid duplicate display, if there are any other standard detail components from this tab.

    - Then, I\'ll **Save** my changes and **Activate** the page to make it visible to users, ensuring it\'s assigned as the Org Default for Desktop and Phone.\"

    - **Narrator**: \"This component will now intelligently display relevant fields from both the Account and its related Healthcare Provider record on a single tab.\"

### **Part 2: End-User Demo - Experiencing Multi-Object Layouts**

**Narrator:** \"Now, let\'s see how these administrative configurations translate into a more efficient experience for field users.

1.  **Viewing a Consolidated Account Record**:

    - **Sales Rep Action**: \"As a sales rep, I\'ll open an **HCP Account record**.\"

    - **Sales Rep Action**: \"Notice how on this single \'Details\' tab, I can see critical information not just from the **Account** object itself, but also from the associated **Healthcare Provider** object. For example, I see the HCP\'s specialties, NPI number, and other professional details right alongside their contact information and general account data. I don\'t need to click through multiple related lists or tabs to get a complete picture.\"

    - 

2.  **Editing an Existing Account (Unified Workflow)**:

    - **Sales Rep Action**: \"Similarly, if I need to update information for an existing HCP, clicking the **\'Edit\'** button on the Account record now brings up this same type of unified interface.\"

    - **Sales Rep Action**: \"I can easily modify fields belonging to either the Account or the Healthcare Provider object without switching pages, greatly simplifying data maintenance and ensuring accuracy.\"

3.  **Creating a New Account (Unified Workflow)**:

    - **Sales Rep Action**: \"Now, let\'s say I need to create a new HCP account. When I click the **\'New Account\'** button and first pass through the SBC functionality that help me search for an account before creating a new one, when I reach the account create screen instead of a standard Salesforce form, I\'m presented with a unified interface that contains fields from both the Account & Healthcare Provider objects.\"

    - 

    - **Sales Rep Action**: \"This single screen allows me to enter details for both the **Account** (like name, type) and the associated **Healthcare Provider** record (like specialty, professional title) in one streamlined process. This saves me time and ensures all necessary information is captured efficiently from the start.\"

    - *System demonstrates filling out fields for both Account and Healthcare Provider on the same form.*

4.  

**Narrator:** \"By consolidating relevant information and streamlining data entry and editing processes, the Multi-Object Record View component acts like a **single, comprehensive dashboard** for each account. It ensures that our field teams have all the necessary insights at their fingertips, leading to more informed decisions and more effective interactions with healthcare providers.\"

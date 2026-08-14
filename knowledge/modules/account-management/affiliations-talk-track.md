## **Demo Script: Administering and Using Account Affiliations in AFLS**

**(Scene: An administrator\'s workstation, demonstrating Salesforce AFLS, then transitions to a field user\'s perspective.)**

**Narrator:** \"Hello, and welcome to this demonstration of **Account Affiliations** within Salesforce AFLS. This crucial feature enables our organization to **strategically understand and leverage the intricate network of relationships** between Healthcare Professionals (HCPs) and Healthcare Organizations (HCOs). By providing comprehensive insights into these connections, Affiliations facilitate targeted engagement and improved outcomes, ensuring field teams have the full picture of their accounts.

### **Part 1: Administrator Demo - Configuring Account Affiliations**

1.  **Create Custom Fields and Field Sets for Affiliation Settings**:

    - **Narrator**: \"Before configuring the core behavior, there are some specific custom fields and field sets on the Provider Affiliation and Account objects that need to be created. These will define what data is displayed and how relationships are visually represented. We'll talk about what the field sets here, but will not walk through the standard Salesforce process to create fields & field sets\"

    - Note - This feature uses the AFLS Provider Affiliation object, not the Account Account Relation (AAR), Account Contact Relations (ACR), Contact Contact Relations objects or Actionable Relationship Center (ARC).

2.  **Configure Core Affiliation Behavior (General Settings)**:

    - \"From the **App Launcher**, find and select **Admin Console**. Then, click on **Account Management** and select **Affiliations** from the left navigation pane.\"

    - \"Here you can choose to apply these settings **org-wide (SOrg Default)** or for a **specific user profile**. We'll set it as \'SOrg Default\'.\"

    - **Administrator Action**: \"Under **General Settings**, I\'ll configure:

      - **Disable reverse** prevents the automatic creation of reciprocal Provider Affiliation records. I\'ll leave this unchecked for now to allow reciprocal creation for this demo. To give an example, when a user creates an affiliation between two accounts to say Account A 'influences' Account B, a reverse affiliation is also created that says Account B "is influenced by Account A'

      - **Enable network view**: I\'ll select this to allow our users to visualize affiliations as an interactive graph.

      - **Set affiliation type for provider affiliations**: enable this so that the affiliation type (Hard/Soft) is set based on predefined criteria in the HardAffiliationHandler trigger. Enabling this also prevents the creation of duplicate hard-type affiliations between the same two accounts. Confirm this trigger is enabled under Admin Console \> Trigger Handlers

      - **Provider Affiliation Unique Field Set**: defines the combination of values that uniquely identify a provider affiliation record such as role & specality, this is used in uniqueness validation when creating affiliations.

3.  **Customize Network View Appearance:**

    - \"Under **Network View Settings**, configure the visual aspects of the graph. Select the **Connector Color Field** and **Connector Thickness Field** to dynamically set the appearance of the lines connecting accounts. For example, a thicker, red line might indicate a \'Hard\' or high-influence affiliation.

    - Next for for advanced filtering in the Network View, especially by product, create a **Provider Affiliation Product Filters Field Set** on the Provider Affiliation Product object, including the Product field.\"

4.  **Customize Table View Appearance**:

    - Select the **Provider Affiliation Columns Field Set** to define which columns appear in the table view.

    - Also configure pagination, such as

      - [Records per **Page Dropdown Values** to define the options available to users]{.mark}

      - Default **Records per Page**

      - Fields and Order for Sorting

      - **Account Search Field which** used when searching by account in the Affiliation list view. You can define an existing field or create and map a new field. If no field is configured, Account Name is used by default.

5.  **Configure Affiliation Reverse Role Mapping**:

    - **Affiliation Reverse Role Mapping**. Here, I can create mappings between direct and reverse roles. If an HCP\'s \'Direct Role\' is \'Influences\' another HCP, its \'Reverse Role\' from the other HCPs perspective might be \'Influenced By\'.

### **Part 2: End-User Demo - Experiencing Account Affiliations**

**Narrator:** \"Now, let\'s switch to the perspective of a field user.

1.  **Accessing Affiliations for an Account**:

    - Navigate an **HCP Account record**, then the **Affiliations tab**, I can see all the relationships this HCP has with other individuals or organizations.\"

2.  **Exploring Different Affiliation Views**:

    - **List View**: \"First, the default **List View (Table View)** shows me a structured list of all affiliations. I can see the roles, influence, and strength of each relationship at a glance, with the columns our admin defined. I can also sort and filter this list to quickly find specific connections.\"

    - **Network View**: \"Next, if I switch to the **Network View**, I see a dynamic graph. This visual representation connects the HCP\'s account node to other accounts with lines representing their affiliations. The color and thickness of these lines, which our admin configured, can instantly communicate the nature or strength of the relationship. For instance, a thick red line might indicate a strong, primary affiliation, while a thin blue line could signify a looser connection. I can use the filters our admin set up, like product filters, to narrow down the network to relationships relevant to a specific product.\"

    - **Hierarchy View**: \"Finally is the **Hierarchy View**. This presents relationships in an organizational chart format, helping me understand reporting structures or team compositions within an organization. This view is specifically tailored for the mobile experience. \*Note that the hierarchy view is currently only supported on mobile.

3.  **Creating a New Affiliation (Unified Workflow)**:

    - **Sales Rep Action**: \"If I discover a new relationship during my interactions, I can easily create a new affiliation directly from this tab by clicking **\'New\'** and filling in the details, such as the related account, their role, and the effective dates. The system will automatically suggest a reverse role based on the admin\'s mappings, ensuring data consistency.\"

**Narrator:** \"By providing these flexible and dynamic views of account affiliations, AFLS empowers our field teams with invaluable insights. This comprehensive understanding of the healthcare ecosystem helps them prioritize engagement, tailor their strategies, and foster stronger, more informed relationships, acting like a **social network map for healthcare, revealing key connections and influence pathways**.\"

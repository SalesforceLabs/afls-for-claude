## **Demo Script: Administering and Using Account Addresses in AFLS**

**Narrator:** \"Hello, and welcome to this demonstration of the **Account Address** feature within Salesforce AFLS. This capability is vital for managing addresses for diverse accounts, including **Healthcare Professionals (HCPs)** and **Healthcare Organizations (HCOs)**. Accurate address tracking is essential for effective engagement, compliance, logistics, and maintaining data integrity, especially since accounts often have multiple addresses for different purposes like billing or shipping.

Let's walk through the administrative setup of Address in AFLS.

### **Part 1: Administrator Demo - Configuring Account Addresses**

**Narrator:** \"As an administrator, my role is to ensure our system is ready to effectively manage and display account addresses. The **Contact Point Address object** serves as the central entity for storing and managing **multiple addresses** in AFLS for both healthcare professionals (HCPs) and organizations (HCOs).

When multiple addresses exist for an HCP or HCO, it is possible to define the primary address for the account, as well as a preferred address for the current territory. Preferred addresses are stored on the Provider Account Territory Information object. When multiple addresses exist the account map view and the provider card have embedded logic to first display a preferred address if it is available, otherwise display primary address.

Addresses are extensively leveraged across all features in AFLS such as Visit Management, Consent Management, and Account Summarization, etc. to ensure accurate and tailored engagement. Address usage & configuration inside of these feature areas will be covered in their respective enablement sessions.

1.  **Creating Custom Formula Fields for Address Display**:

    - **Narrator**: \"To control how addresses are displayed across the application, especially in lists, we can create custom formula fields. These fields format the address into a text string that\'s easily readable.\".

    - **Administrator Action**: \"I\'ll go to **Setup** \> **Object Manager**, search for **Contact Point Address**, and can create custom formula fields that returns a **text data type**. I've created two to demonstrate this functionality, 'DisplayedAddress\_\_c' and \'CityAndPostalCode\_\_c'. .

2.  **Configuring Address Display in the Admin Console**:

    - **Narrator**: \"Now that we have our custom display fields created, we tell the system to use them in the **Admin Console**.\"

    - **Administrator Action**: \"From the **App Launcher**, I\'ll find and select **Admin Console**. Then, I click on **Address Administration** and select **Address Setup**.\".

    - *System navigates to the Address Setup page.*

    - **Administrator Action**: \"Under the **Account Address** section, for the **Contact Point Address Formula Field**, I\'ll select the \'DisplayedAddress\_\_c\' field that I just created. Similarly, for the **Address Formula Field** under **Sample Management Address**, I would select the corresponding formula field from the Address object, in this example CityAndPostalCode\_\_c\".

### **Part 2: End-User Demo - Experiencing Address Configurations**

**Narrator:** \"Now, let\'s switch to the perspective of a field user who benefits directly from these administrative configurations"

1.  **Account List View - Customized Address Display**:

    - **Sales Rep Action**: \"As a sales rep, I often start my day by reviewing my accounts. I\'ll open the **Life Sciences Commercial app** and navigate to the **Accounts tab**.\".

    - *System displays the Accounts List view.*

    - **Narrator**: \"Notice how the addresses are displayed in this list. Thanks to the custom formula field configured by our admin, I see a clear, consolidated view of each account\'s address directly in the list, without having to open each record individually. This helps me quickly identify account locations.\".

2.  **Account Record Page - Related Addresses**:

    - **Sales Rep Action**: \"Now, let\'s open a specific **HCP account record** to see more details.\"

    - *By scrolling down I can see the accounts main address on a map. As discussed earlier* when multiple addresses exist the account map view and the provider card have embedded logic to first display a preferred address if it is available, otherwise display primary address

    - **Sales Rep Action**: \"On the **Related tab**, I can see all the **Contact Point Addresses** associated with this HCP.

    - 

3.  

**Narrator:** \"The robust configuration of Account Addresses by administrators truly underpins efficient and compliant field operations. By setting up clear display formats, managing multiple addresses and integrating with other features like Visit Management, Planner and Consent, we ensure that our sales representatives always have accurate and actionable location data at their fingertips. It\'s like having a precisely mapped GPS for every interaction, ensuring field teams always know where they\'re going.

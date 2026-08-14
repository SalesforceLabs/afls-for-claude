### **1. Introduction to AFLS Workflow Management**

Life Sciences Commercial (AFLS) Workflow Management is a feature designed to automate business processes and guide users through their tasks with clear, step-by-step instructions. These workflows outline the journey of an object through various stages, helping users manage statuses, actions, and record permissions. The workflows are available both online and offline via the AFLS for Customer Engagement mobile app.

The key capabilities of the workflow management feature include:

- An at-a-glance view of the entire business process and the actions available to users.

- The ability to fine-tune user permissions for record data changes (Create, Read, Update, Delete).

- Context-based control over actions and user permissions, adhering to business rules and policies.

- Validation of business rules through custom validation scripts.

- Guidance for users through checklists to advance the workflow stage.

### **2. Core Components and Setup**

The workflow management feature is configured from the **Admin Console** under the **Workflow Management** tile. This area is where business admins can set up and manage all aspects of a workflow.

The main components available for configuration are:

- **Workflow Paths**: These are the overall workflow and stage paths for a specific object and record type.

  - A workflow path is linked to a **Stage Object**, which is the object the workflow is for (e.g., an Inquiry or Case).

  - It\'s configured for a specific **Record Type** and driven by a **Controlling Field**, such as a status field, which determines the stages (nodes) in the path.

  - Workflows can be activated, deactivated, and deployed by the admin.

- **Workflow Actions**: These are the actions that users can perform as part of the workflow. They must be created and deployed before being included in a workflow path. There are four types of actions:

  - **Update Record**: Updates a field value on the record of the Stage object. For example, moving an inquiry from \"Draft\" to \"Submitted\" status.

  - **Platform Event**: Publishes an event that can trigger other processes or flows without directly updating the record.

  - **Open Component**: Opens a lightning web component for the user to perform an action, such as a signature capture model.

  - **Custom Action**: Calls a custom action, like opening an external URL or navigating to another AFLS component.

- **Stage Objects**: This section lists the objects that have a workflow configured. Admins can associate validation and checklist scripts here.

- **Custom Scripts**: These are Lightning web components that are used to validate user actions or provide checklists.

  - **Validation Scripts** run each time a user performs an action to prevent incorrect changes or alert them to warnings.

  - **Checklist Scripts** show an info icon on Update Record actions to guide users on the next steps to take.

### **3. Configuring a Workflow Path**

Here\'s a step-by-step guide to configuring a new workflow path for a case object.

1.  Navigate to the **Admin Console** and select the **Workflow Management** tile.

2.  In the **Workflow Paths** section, click **New**.

3.  Fill in the details for the new workflow path:

    - **Name**: Enter a name, like \"HCP Case.\"

    - **Object**: Select the object you want to configure, such as **Case**. A stage object record for Case will be created automatically.

    - **Field API Name**: Choose the controlling field for the workflow stages. For the Case object, the **Status** field is a good choice.

    - **Record Type**: Select the record type. For example, \"Medical Info Request\".

4.  Click **Continue** to save the workflow path. The system will display the workflow stages as nodes based on the values of the controlling field (e.g., Draft, Signed, Submitted, Assigned, Responded, Closed).

5.  Click on a stage (node) to define its **Stage Operations**.

    - Click the **+** button to create a new stage operation.

    - **Operation Name**: Give the operation a name, like \"Request Creator view.\"

    - **Permissions**: Select the permissions (Create, Edit, Delete) available for this stage operation. You can select all three for a creator view.

    - **Priority**: Set a priority order for the operation.

    - Click **Save**.

6.  Configure **Stage Operation Conditions** and **Stage Operation Actions** for the new stage operation.

    - Under the **Stage Operation Conditions** tab, click **+** to add a new condition.

    - Select a **Field** from the object, an **Operator** (e.g., Equals), and a **Value**. For example, if \"Case Origin\" **Equals** \"Email\".

    - Under the **Stage Operation Actions** tab, click **Add Actions**.

    - A list of pre-configured workflow actions will appear. Select the action you want to be available when the conditions are met, such as \"Set High Priority\" (a Record Update action).

7.  Create a child stage operation by clicking the **+** next to an existing stage operation. This will create a nested operation.

8.  Go to **Stage Objects** to associate custom scripts. Here, you can select a pre-configured **Validation Script** or **Checklist Script** to attach to the workflow.

### **4. Workflow Execution for End Users**

Once configured and deployed, the workflows guide end users through their daily tasks. The experience is consistent on both web and mobile platforms.

- **Workflow Status and Progress**: A color-coded progress bar at the top of the record detail page displays the workflow\'s stages. The current stage is highlighted in blue, while completed stages are marked with a green checkmark. This provides a clear, at-a-glance view of the record\'s progress.

- **Workflow Actions**: The actions available to a user are determined by the workflow stage, their permissions, and their context. These actions appear as buttons or a dropdown on the record page. For example, in the \"Draft\" stage of an Inquiry, a user might see \"Add Response Preference\" and \"Add Signature\" actions.

- **Checklists**: If a workflow action has a checklist associated with it, an info bubble icon appears next to the action name. Tapping this icon reveals the required tasks to move the workflow forward. Completed tasks are marked with a green checkmark, while incomplete ones have a red \"X\".

- **Validation Rules**: When a user attempts to perform an action, validation rules run to ensure that the changes comply with business processes and policies. If a validation fails, a notification appears, indicating any errors that must be corrected before the user can proceed.

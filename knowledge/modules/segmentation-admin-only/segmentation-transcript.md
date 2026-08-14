- Hello everyone, I'm Rebecca Wang, Product Manager for AFLS. Today, I'll walk you through the admin workflow for the admin **Segmentation** capability.

- Segmentation is an **admin-only feature** that lets you assign or restrict the use of certain objects across a defined group of accounts. The goal is to streamline operations and ensure consistent alignment across functional modules.

  - In AFLS, segmentation is built on the existing **Actionable List framework** --- so in this recording, when you hear segmentation or actionable list, they're actually the same concept.

  - And for 258, our first and only supported use case is **Sample Limit Assignments**, meaning that admins can define a segment of accounts and assign a sample limit template to that entire group, instead of account by account.

- Before we dive into the admin setup, let's look at the data model behind segmentation. There are two key aspects of the model, one is **Segmentation Creation** and the other one **Segmentation Application**. Let's start with how segmentations are created.

  - First is **segmentation creation**. Segmentation is built on the **Actionable List data model**, which has three main parts:

    - **Actionable List Definition (ALD)**: this object represents the data source definition details associated with an actionable list built for AFLS workflows that can be used as segmentations.

    - **Actionable List (AL)**: this is the actual segmentation. The actionable list derives the **Type** from the associated Actionable list definition, which guarantees it flows correctly into downstream workflows.

    - **Actionable List Members**: these are the accounts that belong to the segmentation. Each member record represents one account inside that segment.

  - So, the creation flow is: define a ALD → create an actionable list from that definition → finally customize the actionable list with additional filter criteria and pick the accounts to include.

- After a segmentation is created, it needs to be tied to a business process. This is done through a flexible junction object called **Life Science Account Group Assignment**. This object acts as a **bridge** --- linking a segmentation to one or more entities. And within this junction entity:

  - The **Assignment Reference Record field** connects to the specific AFLS use case, such as Provider Sample Limit.

  - And in the future, as we will **expand segmentation into more workflows**, we will simply extend the Actionable List Type to include new use cases, and make sure the assignment logic is mapped correctly.

- With the basic data model structure in mind, now we could **move to the exact admin setup experience**.

- Before creating segmentations, admins must assign the **proper permission sets** for Actionable Lists, which are described in the Actionable List setup guide.

  - If you want to create segmentations through **Data Cloud Segments**, you'll also need Data Cloud access.

- From the Admin Console, go to the **Sample Limits tile**. Inside, you'll see a **Segmentation tab**. Here, admins can view all segmentations here. Note that this view is **read-only** --- and you cannot create or edit here. To manage segmentations, you will need to tap the **Manage Segmentation** button. This takes you into the Actionable List component, where full creation and editing is available.

- Now we're in the actionable list component, where we could see all the actionable lists created. If we want to create a new actionable list or segmentation, we can click **"New"** to start.

- Here, as I mentioned previously: we have **two ways of creating AL**,

  - one is through data cloud segment,

  - and the other one is through actionable segmentation.

    - If you don't have the data cloud access, then by clicking "New", you'll be prompted to the actionable list creation through actionable segmentation popup directly.

- Let's go through each one of the approaches, and **start with actionable segmentation.**

  - This starts with a **Data Processing Engine (DPE) definition**. For convenience, we provide an **out-of-the-box DPE template** with Account as the base object. This template also links key related objects like Healthcare Provider, Provider Account Territory Info, and Provider Account Product Info.

    - Admins can clone to use the template as-is, or **clone and then customize the template** if they want to pull in more data.

  - Once the definition is ready, the next step is to create an **Actionable List Definition (ALD)**. Since we had the DPE definition ready, we could simply choose "use existing DPE definition", where admins could give the name, choose account as object,

    - And then most importantly, specify the **Type field**. For 258, just choose **Healthcare Provider** since segmentation is only used for Sample Limits. The other types, Retail Store, will be used for future roadmap items and can be ignored for now.

    - And once everything else is done, click the save, and the rest of the steps are exactly the same as of today's AL functionality

  - After we have the **Actionable list definition ready**, move on to creating the **Actionable List itself**.

    - From the Actionable List tab, choose Actionable Segmentation from the creation options, select the ALD you just created, and the **Actionable List Type** will automatically derive from the definition.

      - This is to help you verify and ensure the list is valid for Life Sciences use cases.

    - From here, the rest of the steps are the same as the standard Actionable List process you may already know.

- The second option is to start in **Data Cloud** by creating a segment of accounts there. To do so, you need to first create a data cloud segment. Once that segment is ready, go back to the Actionable List creation screen.

  - When creating a new list from a Data Cloud Segment, you'll again need to set the **Actionable List** **Type field** for Life Sciences use cases --- just as with the Actionable Segmentation approach.

  - Then, just proceed with the same steps as standard Actionable List creation.

- The important takeaway is: whichever path you choose, always remember to define the **Type** so the list is usable in AFLS workflows.

- Once segmentations are created, admins can apply them to sample limits. To do so, we go back to the AFLS sample limit console, and go to the sample limit jobs tab, and then initiate the new sample limit templates to account by segment.

- To summarize, the segmentation in AFLS reuses the existing industry AL framework. And segmentation provides admins with a structured way to group accounts and assign sample limits at scale.

- That's all I have today for segmentation, thank you for watching.

Welcome everyone to this series of recordings. My name is Eva Miguel, and in this video, I'm going to guide you through how to configure and manage Content in AFLS.

Let me walk you through how Intelligent Content flows in Salesforce AFLS.

In the life sciences industry, this process is often called CLM --- Closed Loop Marketing.\
It's all about delivering compliant, personalized content to healthcare professionals, tracking its usage, and using those insights to continuously improve engagement strategies.

In Salesforce AFLS, we use the term Intelligent Content to describe this entire process.

It starts outside of AFLS, where the Home Office defines the messaging strategy.\
Content is created in the customer's Content Management Systems and approved through MLR processes in their existing systems.

Once approved, the content is pushed into AFLS, either:

1.  Manually via the Admin Console --- ideal for small volumes or quick updates,

2.  Automatically via the Content API, connecting AFLS to systems like Veeva Vault PromoMats.

    - Metadata like product assignments, activation dates, and expiration dates flow directly into AFLS.

AFLS supports two content types:

- PDF presentations

- HTML presentations, which must follow the AFLS content format before it is pushed into AFLS.

Once uploaded, the content is distributed to the right territories so only the right field teams have access.

Sales and Medical Reps then access the content through different entry points --- a planned visit, the content library, or directly from an account card --- and present it face-to-face or remotely.\
Usage is automatically tracked, including time spent, slides shown, and HCP reactions or feedback.

These insights help refine content and improve messaging, creating a continuous improvement loop that makes each content cycle smarter, more relevant, and more effective than the last.

ADMIN CONSOLE

Let's see the Admin experience, starting by Uploading a presentation via the Admin Console

We start on the Admin console in AFLS, on Web, then we go to the Intelligent content tile

Here you will land in a *Centralized View* of all presentations within the system, in the presentations tab,

presentations that have already been uploaded whether via the Admin Console or the Content API.

On the left side, you'll see multiple tabs that allow you to configure different parts of the content management system --- such as managing pages, adjusting settings, and reviewing the API queue.

For now, we'll stay focused on the Presentations tab.

From this view, admins have full visibility into the presentation library, From here, admins can quickly:

- Check whether a presentation is currently available to end users,

- See which products are linked to each presentation,

- Review other key details such as:

  - External System ID

  - Custom Presentation flag -- showing if the presentation was created directly by an end user within AFLS.

Admins can also take actions --- such as updating, editing, or activating/deactivating so that they can manage existing presentations as needed.

From this view, Admins can also quickly find the right presentation by using the filters available here.

These filters make it easy to narrow down the list based on specific criteria --- for example, by name, tags, status, or other key attributes. This helps Admin users save time and quickly locate the exact presentation they need to review, edit, or distribute.

Then Admins can also create new presentations, there are two ways:

1.  Uploading new pages directly into the system to build a presentation from scratch.

2.  Combining existing pages that are already in the library to create a new presentation.

This central hub makes it easy to manage your entire content library and ensure that the right materials are prepared and ready for distribution.

Let's tap here on *Upload New Pages*.

This is where you can upload your content into the system. As you can see, there are two supported formats:

- PDF presentations,

- ZIP files for HTML presentations.

(Some examples of [[files]{.underline}](https://drive.google.com/drive/u/0/folders/1qWNyPm4ex0ERIppRFm4-p6LMshZCHpEx))

I tap Select Files.

In this example, I'm going to upload 10 ZIP files, which together will form a presentation of 10 pages so Each ZIP file represents one individual presentation page.

When uploading a ZIP file, it must follow the required structure to be accepted by the system.

Each ZIP file should include:

- At least one HTML file, which contains the content for the page, and

- A thumbnail image, which will be used as the visual preview of that page.

- We will provide content guidelines

Along with these pages, I'm also adding an additional PDF file that will be referenced across multiple pages as a shared resource. This file can include important materials like PI (Product Information), legal information, or references

I'm going to select all of them and tap on Open.

As part of this process, the system will automatically validate the file structure to ensure it meets the requirements.

If there's an issue with the content --- for example, if a ZIP file is missing its HTML file or thumbnail --- the system will display an error message so it can be corrected before continuing.

This process ensures that all content is properly structured and ready to be used within the Intelligent Content library and presentation player.

Now I'm going to tap on Upload Files:

On this page you can see the progress of the upload for each individual page.

Content is stored directly in Salesforce's native file storage, ensuring a seamless and secure experience:

- Files are encrypted, versioned, and governed by Salesforce's built-in permission model.

- No need for external storage configuration --- everything works out-of-the-box in Salesforce.

- Storage is included with Salesforce licenses. It can be extended if needed.

- Storage usage can be tracked under *Setup → Storage Usage*.

- All content storage follows Salesforce's security and data protection standards.

Once the files have been uploaded we click next.

This page allows us to tailor the content at the page level, ensuring accurate tracking and compliance later on.

As an Admin, you can rename the pages to make them more descriptive or easier to identify for future reference.

During the upload process, the system automatically organizes the pages in alphanumeric order based on their names, helping to keep the presentation structured and easy to navigate.

Admin will be able to change the order in the Edit step if needed.

We can assign Product or Product Messages to the different pages.

You have full flexibility here --- you can assign none, one, or multiple products or messages to each individual page, depending on what's required.

To do this, we'll start by tapping on the 'Add Product' button.\
Now, let's search for a product --- for example, *Cordim*. Once I select it, I can see the related product messages here. For now, I'll just assign the product itself without adding any messages so I click Save.

I select the pages where I want this product applied, I select all of them at once, I scroll down and tap 'Apply Product and Messages'.

You can see that the product has been automatically applied to all the pages.

Next, I'll repeat the process to assign a different product or a specific product message to another page.

Let's say Cordim, I'm going to select the first message, I tap Save.

First I need to unselect the previous pages and select only that one that I want this information here is assigned to the right page, I can repeat this process.

Let's add a second message...I remove this one first, I tap add, cordim, I see the list of related messages, I select the second one, then I unselect the first page and select the second and third pages, I tap Apply Product and Messages and we can see it it updated.

You also have the ability to mark certain pages as mandatory.\
This means that whenever an end user presents this presentation, they will be required to present those mandatory pages at least once during the session.

This feature is especially important for ensuring that critical information --- such as safety disclaimers, legal statements, or key brand messages --- are always included during interactions with HCPs.

Let's mark the second page as mandatory.

If there are any additional custom fields, they will appear on this screen, and you can provide values for them as needed.

The field is Digital Interactivity level, let's add Video here, and Surveys on this page, this can help on the reportings.

Video, survey, if using content api, all of this information, including custom fields can be automatically populated from the customer external system.

Once I've verified that everything is correctly set, I can move forward by clicking on 'Next' to continue the configuration process.

On the next page, we can provide the name of the presentation and configure several key parameters.

Here, we'll define important details such as:

- First, is the Presentation Name -- how the presentation will appear to end users.

- Activation and Deactivation Dates -- control when the presentation becomes available and when it expires.

- Player Gesture and Side -- defines how users open the bottom menu player during a live session.\
  Some customers prefer gestures instead of a visual indicator to avoid overlapping content. There are these different values, tap top, tap bottom, etc.

- Feedback Panel Position -- sets where positive/negative feedback at the page level can be captured, so they don't overlap important content.

- Zoom Options -- enable features like pinch-to-zoom or double-tap for easier navigation.

- Topics -- create or assign topics that end users can later use as filters in the Content Library. Let;s add cordim and we can also create a new topic directly here.

<!-- -->

- Public Disclaimer Content Name and URL -- to reference a link with important shared documents such as legal disclaimers or prescribing information, these parameters are only used in Remote interactions, the HCP will get access from their browser to this link.

- Send Presentation by Email -- enabling this option allows the presentation to be sent directly to HCPs by email.

- I've also added a custom field called Global_vs_Local_Content to indicate whether content is Global (centrally managed) or Local (market-specific). Customers can create custom fields as needed.

- All fields --- including custom ones --- can be automatically populated via the Content API.

- If the customer already maintains this metadata in PromoMats, it can flow directly into AFLS through the integration, so there's no need for manual updates.

Once all the presentation parameters have been added and reviewed, we simply tap on 'Done'.

At this point, the presentation is created in the system and saved as inactive, and not yet visible to end users

To make the presentation available in the field, we'll need to:

1.  Distribute it to the appropriate territories, and

2.  Activate it, so that it becomes accessible based on the activation date we configured earlier.

Back in the Centralized View, we can see the presentation we just created.\
I'll click on its name to open the Presentation Details, and then click Edit.

From here, admins can manage several aspects of the presentation --- for example:

- Changing the order of the pages, let's change this one.

- Adding new pages from existing ones,we can look for a page name but for now I'm just tapping cancel.

Now I'll scroll down to the Territory Distribution section at the bottom of the screen.

Here, you'll see a list of all available territories in the system, along with a toggle called 'Select Unassigned Territories.'

By default, only those territories aligned with the products linked to this presentation can be selected. We can see them in blue color.

This ensures that content is distributed accurately and compliantly, so reps only see materials for the products they are authorized to discuss.

To assign a presentation, simply select the appropriate territories from this list.

- Selecting a parent territory will automatically select all of its child territories.

- If a parent is selected and new child territories are added later, those new territories will automatically be aligned with the presentation as well.

- You can also search for territories by name to quickly find the one you need, san francisco.

But what happens if you need to assign the presentation to a territory that isn't currently aligned with the linked product?\
It's very simple --- just click on the toggle here, and all territories will become selectable.

I'm going to select these 3, I review and I will click Save.

Once I've confirmed that all the presentation parameters and territory distribution settings are correct, the final step is to activate the presentation.

Last step is the Activation of the Presentation. It controls whether it's visible to end users --- but the timing depends on how the activation date is set:

- If an activation date is provided:

  - The presentation will only become available starting on that date.

  - Until then, it will remain hidden from end users, even though it's already activated.

- If no activation date is set:

  - The presentation will become immediately accessible to the assigned end users as soon as we tap Activate.

  - Then I tap Activate.

In our example, since we have configured the activation date in one week the presentation is active but not yet available for the end users.

Let's continue with Editing and Updating presentations.

Back to our example with the Cordim presentation.

We can just edit presentation attributes or territory assignment by clicking directly on the name of the presentation, similar to what we have done earlier.

And also, we have two key actions here: Edit and Update.

- Edit is used to manage the presentation structure and metadata.

  - For example, we can assign products and messages to specific pages,

  - Mark certain pages as mandatory,

  - Or add values to any custom fields that have been configured.

- Update is used when the content itself needs to be changed.

  - For instance, if the content team modifies a slide, we can re-upload the updated version of that page.

Let's tap on Edit to make some changes.

First, I'm going to assign a new product --- let's say *Prozalan*.\
I select the page, then apply the appropriate Products and Messages to it.

Next, I'll mark this page as mandatory, ensuring it must always be presented during an HCP interaction.

Once that's done, I tap Next, where I can also edit other presentation parameters if needed.\
Finally, I click Done to save all the changes.

Now, let's say I need to update the content pages themselves.

So I want to upload again the content.

I click on Update, then Select Files.

One important note here:\
When using this option, you must re-upload all pages of the presentation, not just the ones that were modified.

So, for example, if only one slide was updated, you'll still need to upload the entire set of pages again through this interface.

I select all of them, assuming one of them has been updated.

Again, system is validating files, you need to tap on Upload files.

If you need to update a single page only, that can be done automatically via the Content API, which supports individual page updates.

In the next step, you'll decide whether each file should replace an existing page or should be added as a new page.

Then Click Next.

We can see all the new pages uploaded.

So here, Page to Update: we decide whether to replace an existing page or add it as a new page.

The system automatically detects files with the same name and sets them to *replace* by default.\
However, we can manually change this and mark a file as a new page instead.

When a page is replaced, the system will deactivate the previous file and upload the new one as a new version of that page.

All versions are securely stored in the system, so you always have a complete version history.

On top of that, AFLS tracks which version was presented and to which HCP, giving you full visibility for compliance, audits, and analytics, along with the products and messages shown, the time spent on each page or the HCP feedback.

So we review all of them and we can confirm.

Managing Presentation Pages

Let's click on the Pages tab.

Here, we can see all available pages, along with key details such as:

- Type of content

- Linked products

- Version history

To make navigation easier, we can also filter the list to quickly find the right page.

For example, let's edit this page here.\
I click Edit, then provide a value for a custom field defined at the page level.\
I could also assign new products if needed.

Once the updates are complete, I simply click Save to apply the changes.

**Automate Content Management**

Next topic is Content API...

In the API Queue tab, you can see all the presentations that have been pushed into AFLS via the Content API.\
This is where content flows from external systems like Veeva PromoMats or any other Digital Asset Management (DAM) platform.

From here, admins can monitor the status of each push, making it easy to track whether a presentation was successfully processed or if any errors need attention.

Let me quickly show you what some of the API endpoints look like.\
For this demo, I'm using Postman, but any integration platform like MuleSoft could be used in production.

We will provide clear documentation for these APIs, including examples and best practices, so customers can easily build and maintain their integrations.

So here, On the left, you can see a list of endpoints that support different actions, such as:

- Creating a new PDF or HTML (ZIP) presentation,

- Updating individual pages,

- Assigning products and messages to pages,

- And similar endpoints for Email Templates, allowing you to create or update templates programmatically.

Let's quickly review the request body for this endpoint to create a ZIP presentation.

First, you need to make sure all the parameters are correctly set:

- Base URL,

- Service version,

- And the presentation endpoint.

In the body, you'll see key details such as:

- Content type,

- Presentation name,

- And all the parameters you would normally configure through the Admin Console, like:

  - Activation and expiration dates,\
    Custom fields,

  - Same for the pages, name, other parameters

  - Or the Products and messages linked to that page.

  - For this example, I've uploaded the actual content files into these variables, which represent the ZIP files for the presentation pages.

The big benefit here is automation:\
Everything can flow automatically into AFLS, so admins don't need to manually re-enter metadata or update settings.\
If a piece of content is updated or withdrawn upstream, that change will be reflected in AFLS, keeping the system perfectly aligned with the source of truth.

Once the content has been pushed through the API, only two final steps need to be completed in the Admin Console:

1.  Territory Distribution -- deciding which territories should have access to the content,

2.  Activation -- manually activating the presentation so it becomes available to end users.

This combination of automation through the API and final controls in the Admin Console makes content management both scalable and flexible.

That's it for the Admin set up in Intelligent Content.

Thank you

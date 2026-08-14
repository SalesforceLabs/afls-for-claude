Welcome, everyone, to this series of recordings. My name is Eva Miguel, and in this video, I'll guide you through how to configure Presentation Settings in AFLS.

It starts in the Admin Console - Intelligent Content Tile. I tap on it.

Now Let's navigate to the Presentation Settings tab on the left panel.

On this page the Admin will be able to set different settings.

In AFLS, all settings can be applied at different levels, giving customers flexibility in how they're managed:

- Organization level -- applies globally and is available to all users,

- Profile level -- applies to specific groups of users,

- User level -- applies only to an individual user.

This layered approach allows you to set global defaults while still tailoring configurations for specific teams or individual needs.

Let's now make them available at the Org level.

First section is the Search.

- Here, we have the option 'Use Advanced Search for Accounts.'

- Enabling this feature activates the full account search module inside the content player, giving users access to advanced filters and search options directly while they present.

- If this option is not enabled, the account search defaults to a basic version, with only limited fields and functionality.

- This setting is essential for reusing the existing Account module seamlessly within the content player.\
  When enabled, reps can open the account module during a presentation and see the enhanced search experience right there, without having to leave the player

- 

- Next Presentation Search Field and Presentation Page Product Search Field.

These settings enable advanced search within the content library.

- If they're not enabled, the search will only work against presentation titles.

- When enabled, you can extend search capabilities to include additional metadata --- for example:

  - Custom fields,

  - Products,

  - Messages,

  - Or even a formula field that combines multiple data points.

This gives end users a much richer search experience, making it easier to quickly find the right content.

To configure this, you simply select which field you want the search to run against.\
It can be a formula field, a text field, or another searchable field type.

If none, then the search will be done against the Title, the name of the presentation

For this example, I've configured a formula field in the Presentation Search Field: Advanced Search Presentation Formula.

Let me show you how I've configured the advanced search.

First, I go to Setup → Presentation Object → Fields, and open the Advanced Search Formula.\
This formula determines which fields the search will run against.

In this example, the search is configured to look at:

- Presentation Name,

- Sendable by Email flag,

- Expiration status -- whether the presentation is expiring soon,

- Global vs. Local designation,

- And the Campaign Context.

Now, let's see how this works with our recently created Cordim presentation.

When we open the presentation layout, we can see:

- Name: *Cordim*,

- Sendable by Email,

- Long-lasting,

- Global,

- And part of the *Launch 2025* campaign.

If an end user searches for any of these keywords, the system will return this presentation in the results --- making it much easier to find the right content quickly.

Going back to the Presentation Settings, we also have the ability to extend metadata search beyond presentations.\
With this setting, search can be extended to include page attributes, products, and messages, making it much easier for users to find content.

In this case, I've set up a custom text field that stores the values I want to make searchable.\
This field is automatically updated by a record-triggered Flow, rather than requiring manual entry.

Here's why this is needed:

The ProductId field is polymorphic --- it can point to either Product2 or Life Science Marketable Product.\
Because of this, it can't be used directly in a formula, since Salesforce doesn't know which type to expect ahead of time.

The solution is to use a Flow that:

1.  Runs whenever a record is created or updated,

2.  Pulls the correct product and message data,

3.  Builds a combined formula resource that includes:

    - Page name,

    - Product message,

    - Product ID,

    - Product name,

4.  Updates the value of the custom text field with this data.

Let's see this in action.\
I'll open the presentation page layout for our first page: *Patients with Arterial Hypertension.*

Here, you can see the field showing:

- Page name,

- Linked message,

- Product ID,

- And product name.

Now, let's change the message.\
As soon as we update it, the Flow automatically updates the custom text field with the new values --- no manual work required.

This means end users can now search by page name, product, or message directly in the Content Library, providing a much richer and more flexible search experience.

Next section is Targeted Presentations:

First, we can enable 'Show Next Best Message.'\
When this is turned on, the Content Library will display an indicator on presentations that contain a next best message --- guiding reps toward the most relevant content for their next interaction.

Next, we have Targeted Presentations, which allow customers to control visibility at the account level.\
This ensures that each HCP or institution only sees the materials that are most applicable to them.

Targeted presentations can be configured in two different ways, providing flexibility based on business needs:

1.  Warn Context

    - The rep sees a visual indicator or label suggesting certain presentations are targeted for the selected account.

    - They still have access to other presentations, but are gently guided toward the targeted ones.

2.  Restriction Context

    - The rep will only see the presentations explicitly targeted to that account.

    - This is ideal for strictly regulated scenarios or high-priority content that should never be shared outside specific conditions.

I'll show you later where these targeted presentations are defined and how to configure them.

Next, let's review some key configuration options for the Presentation Player and Content Library.

Presentation Player Settings

These settings control the experience for reps during live presentations:

- Show Page Name in Presentation Player -- Displays the page title during a session, making navigation clearer for the rep.

- Use Drawing Tools or Laser pointer in Presentation Player -- Allows reps to draw in real time or to highlight specific areas of a slide to focus attention.\
  , which can be especially useful during remote interactions.

- Show Icon to Open Player Menu -- Adds a visible icon to access the menu player.

  - If disabled, reps must use a gesture, like swiping or tapping, to open it.

Content Library Settings

These settings define how reps organize and personalize their content library:

- Create Custom Presentations -- Enables reps to build personalized decks by combining pages from multiple presentations.

- Collapse Content Categories -- Organizes the library into expandable sections, making it easier to navigate when there are many categories or large volumes of content.

These options help tailor both the live presentation experience and how content is managed, ensuring reps have the right tools for efficient, engaging HCP interactions.

Next, let's go over the Tracking Settings.

These settings define how presentation activity is captured and reported in AFLS.

First, we have Geolocation Tracking, which records where a presentation takes place.

Then, By default, the system tracks everything that it is presented, including:

- Which presentations were shown,

- Pages viewed during the session,

- Time spent on each page,

- Products and messages presented,

- And any HCP feedback captured.

The last two settings here give you the option not to capture certain data, which can be important for compliance in certain countries or regions that restrict this type of tracking.

This flexibility ensures you can adapt tracking policies to meet local regulations while still collecting valuable engagement data where allowed.

Access Control Settings

Next, let's look at the Access Control Settings, which help ensure security and control over how content is accessed and used.

Lock Presentation -- This setting prevents any edits once a presentation is finalized.

- It's especially useful for global presentations, where you want to maintain content integrity and compliance by preventing local admins from making any changes.

<!-- -->

- Lock Player on Mobile -- Adds a passcode lock to secure the presentation player when it's launched.

  - This can be enabled manually by the rep during a session, for instance, when they hand over their device to an HCP so the HCP can interact with the content securely.

Sharing Settings

- Send Presentations by Email -- Allows reps to email presentations directly to HCPs.

Feedback Settings

Next, let's review the Feedback Settings, which are designed to capture valuable insights from HCP interactions.

- The first two options determine how HCP feedback is collected at the page level:

  - Feedback can be captured in real time during a presentation, directly on the main view.

  - Or, it can be captured later through the menu player, allowing the rep to log feedback after the interaction, --- for instance, with a quick *thumbs up* or *thumbs down* for positive/negative feedback.

- Retake Survey -- This option allows reps to re-start a survey to gather updated responses.

  - The system can also pre-fill answers from the previous survey, making it quicker and easier to complete.

Together, these settings give admins control over how content is tracked, secured, shared, and optimized --- while providing valuable insights to improve future engagements.

Recommended and Targeted Content Presentations

Lets take a look at Recommended and Targeted Presentations and how AFLS supports both approaches.

AFLS provides a flexible framework to deliver the most relevant content to each account.\
The key idea is that customers bring their own intelligence --- whether powered by AI models, LLMs, or rule-based logic --- to control how content is surfaced to reps and accounts.

Customers know their markets, their HCPs, and their engagement strategies better than anyone else.\
By leveraging their own intelligence, their own data, they maintain full control over how content is delivered, ensuring it aligns perfectly with their business goals.

Now, let's break down the difference between Recommended and Targeted Presentations.

- Recommended Presentations are about personalization and engagement.

  - They are dynamic, powered by AI or machine learning, and designed to suggest content to reps based on:

    - Past engagement history,

    - HCP preferences,

    - account profile data.

    - Or any other important data

  - The goal is to guide reps so they can deliver smarter, more meaningful interactions.

- Targeted Presentations, on the other hand, are about control and compliance.

  - They are admin-defined and rule-based,

  - Used to enforce compliance and strictly control which content is visible to specific accounts or institutions.

In short, recommendations empower personalization, while targeting ensures governance and compliance --- and with AFLS, customers can leverage both together to maximize impact.

There are several ways to load this data into AFLS:

- Direct integration with an AI or LLM system to automatically inject recommendations,

- Data loads for bulk updates,

- Or, as I'll show you now, manual entry, which is helpful for demos or testing.

For this example, I'll open the Provider Account Territory Information record.\
This is where AFLS stores recommendation and targeting data for each account and territory.

Let's look at *Aaron Morita* in the San Francisco territory.\
Here, you'll see two key fields:

1.  Recommended Presentations -- stored in JSON format, typically populated dynamically by an AI engine.

    - You'll see the presentation IDs along with the order in which they should appear in the content library.

2.  Targeted Presentations -- a straightforward list of presentation IDs that are explicitly targeted to this account.

You can use one or both together to maximize impact.

In the mobile app, these two types of content appear differently in the UI, so reps can easily distinguish between them

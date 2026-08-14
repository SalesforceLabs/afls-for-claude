## Actionable List View / Quick Visit

Hello everyone. In this video, we are going to dive deep into the Actionable List View or Quick Visit, a key mobile enhancement in the Spring '26 release.

(Next Slide)

Field representatives operate in a fast-paced environment where every second counts. They need optimized workflows that minimize navigation time.

The Actionable List View embeds configurable quick actions directly into the visit list card. This feature solves the critical need for field representatives to minimize administrative navigation and execute time-sensitive tasks—such as sample drops or content sharing, allowing them to focus their limited time on meaningful interactions with Healthcare Providers.

**End User Demo (iPad)**

(Visual: Switch to iPad screen recording showing the Visit list)

Let's see how this feature looks like for the end user. We are following Evan, our Field Sales Rep, on his iPad

Evan opens the 'Visit' tab to check his scheduled visits of the day in Today's tab

These tabs are salesforce standard filters and work for this actionable list view

He can also switch to the existing standard list view with this button

This button is enabled by default across the mobile lists and automatically remembers user preferences per object, adapting to individual workflow patterns.

With the new Actionable List View, notice the buttons right here on the card. Evan knows he just needs to drop off samples for Dr. Morita. He simply taps the 'Sample Drop' button directly on the list card

(Visual: Tap button, screen transitions)

Notice exactly what happens here: The system immediately launches the Visit Engagement page and automatically expands the 'Samples' sidebar menu by default. Evan didn't have to search for the menu or click anything else. He is dropped right where he needs to be to add a sample and enter the disbursement quantity immediately.

If you compare how the navigation used to work from the traditional list view, which opens the visit record page, click Edit and then go to Samples sidebar, you can see how these quick actions reduce clicks and navigation time, allowing Evan to focus on HCP interactions.

**Admin User Demo (Web)**

Now, let's walk through the steps required to configure this feature.

1st step is to add the Visit Tab. You go to Setup > App Manager and edit your Life Sciences Commercial app. Ensure the 'Visits' tab is added to the Navigation Items.

Next step is to configure Filters and Columns.

The Actionable List View respects your standard Salesforce list view configurations for filters and fields

Create filters to show just today's visits, this week's visit or the list of visits that need to be submitted to make the actionable list more useful

The Actionable List View displays the top 5 fields configured in the list.

The first field you configure will be displayed in the first row of the mobile card.

The second field maps to the second row.

The 3rd, 4th, and 5th fields will appear in the third row of the card.

So, make sure you configure the most important fields.

Then, configure GoTo Actions.

This is the most critical step to enable the action that jumps into the specific sidebar menu of Visit Engagement page.

First, you create GoTo action in Admin Console

You go to **Quick and Custom Action Administration** > **Custom Actions**

You can click New to create a new GoTo Action.

For this demo, I already configured action for example "Sample_Drop" (Click Edit to open the Edit Custom Action" popup to show the fields)

The key configuration here is **Target Parameters**. Here you set the related list name that corresponds to the sidebar you want to jump to in Visit Engagement page.  I set "ProductDisbursement" in **Target Parameters **so that this action directs to Samples section in Visit Engagement.

After creating GoTo action, you need to create a standard button that links to the GoTo action.

in Object Browser > Visit tab > Buttons, Links and Actions.

For this demo, let's look at the already configured action for "Sample_Drop".

(Click Edit for "Sample Drop" action)

Key for this configuration is to make sure the **Name** field of the action matches with **Quick Action** field in custom action.

Finally, you need to add this standard action to the visit.

If dynamic actions are not enabled, add these buttons in the visit page layout.

If dynamic actions are enabled, add these buttons in the visit record page

Our recommendation is to use dynamic actions as you can apply the additional filtering to hide these actions in web and for submitted visits where GoTo actions are not relevant. If these actions are not hidden for submitted visits, the actions open the visit record page for the submitted visits.

Lastly, make sure to run the metadata Cache Once your configuration is done.

This concludes the Actionable List View walk-through. Thank you for watching

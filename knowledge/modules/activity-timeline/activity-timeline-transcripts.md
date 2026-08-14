- Hello everyone, I'm Rebecca Wang, a product manager for AFLS. In this video, I'll walk you through how to configure the **Activity Timeline** as an admin.

- The Activity Timeline is a chronological view of different types of interactions, giving users a clear, consolidated history of customer engagement.

- To configure the activity timeline, we need to go to the activity timeline setup in the admin console.

- The first step is to decide which activities, and which fields, will be visible to your users. We provide five out-of-the-box standard activities: **Visit**, **Email Transaction**, **Medical Inquiry**, **Survey Response**, and **Assessment Task**. For each standard activity, you can enable or disable it, and optionally create a **field set** to define the details shown in the expanded view.

  - To define the field set, go to the object manager, and add the fields to the field set.

  - By default, no field set is applied, so expanding an activity will only show the record name.

  - If you include more than six fields in a field set, only the top six will appear in the activity's summary box.

- In addition to standard activities, you can display **custom activities**. To do this, you need to create a custom object to store the activity details like what i show here, add the required fields as outlined in the setup guide, then register the object in the Activity Timeline admin console and activate it for the desired profiles.

  - Custom activities you add here will also be available in the **Activity Type** filter.

- Once your activities are configured, you can **configure general timeline setup**:

  - The 1st one is **Default to Last Submitted Visit** - Once enabled, the timeline will always show the user's most recent submitted visit at the top whenever they land to the activity timeline tab. Refreshing the timeline will return the timeline to chronological order.

  - For **visit**, except for the field set that we've just configured to show for visit, we also have the option of displaying **product discussed, samples and intelligent content thumbnails images** in the visit activity summary box. You could enable these settings for your users.

    - We also have the option to **enable the territory name** to show on the visit activity header so that users can see where and by whom the visit was made.

  - On the right side of the admin console, you'll find **filter settings:**

    - The first one is to enable the **territory filter**, which allows users to switch between their own territory's activities and all territories' activities. You can also set it to **default to "all territories."**

      - One thing needed to note is that the territory filter does not apply to activities without a territory field.

    - The second one is to enable the **address filter**, which allows users to filter by account address to focus on activities at specific locations.

    - The last one is the **affiliation filter with HCP rollup**, so that users can see an aggregated and unified interaction view at the institution level. If enabled, users can see the HCP account activities from the affiliated HCO account activity timeline.

      - And this is **one-directional**, meaning that HCP activities can appear on the HCO timeline, but not the other way around.

      - You can also define supported affiliation roles that determine which accounts are included.

- The last tab of the activity timeline is to configure the **display text**. Here, we can define the **activity header**, **prefix text for body**, as well as the **link text for body**.

  - You also need to define the separate **activity header for each rolled-up activity**.

  - You can configure and define the display text for **different status of activities**. For example, you can define different header and prefix text for completed visit and planned visit to differentiate them.

  - These labels are created as **custom labels** in Salesforce Setup and then linked here.

    - Custom labels can include up to two **dynamic parameters**, which are replaced with values based on your configuration.

      - For example, if "Show Territory in Visit Header" and HCP rollup are both enabled, Parameter 1 will display the visit owner's name. If both are disabled, it will display the "Field to Display" value you've configured.

      - We have a bunch of other conditions and explanations for other parameters for different activities, and the full parameter behavior by activity type is documented in the user guide.

- Except for these activity timeline settings, we also have some other settings from other admin tiles.

  - In the activity timeline, we also provide the **calendar view**, and to set up the **default first day of the week in the calendar view**, we need to set up from the Planner administration, and enter the day that you wish to show as the 1st day here.

  - Secondly, for the **email transaction activities** on the timeline, we have the setting of **reschedule and cancel the email** from the timeline directly, and to enable the feature, we will need to go to the email tile, and enable the setting of "Schedule emails to send later"

- That's the overview of the Activity Timeline admin configuration. With the right setup, you can ensure users see the most relevant activities, the right level of detail, and have filters that match your business needs. Thank you for watching.

Mobile End User

- Hello everyone. Today we'll look at the Activity **Timeline on mobile** through the lens of a pharma sales rep, Mary Beth, and see how it helps her get a complete 360-degree view of customer interactions --- from past activities to upcoming plans.

- She has a visit with **Dr. Aaron Morita** later today, so she wants to use the Activity Timeline to help her prepare for the upcoming visit.

  - When she lands on the timeline, it opens to the **last submitted visit** with a detailed summary box open.

    - Here, Mary can see the products discussed, and any product samples provided.

    - If intelligent content was presented during the visit, she also sees the **content thumbnails images** right in the summary.

  - Scrolling down, she can review **all activities** across territories. Different visit statuses are clearly distinguished by the header and link text.

    - If Mary needs more details, she can click directly into the visit record.

    - To get back to today's view, she taps **Today**, which brings her right to the top of the day's activities.

    - She can also refresh the timeline at any time --- resetting it to chronological order, with both past interactions and upcoming activities split by Today line.

- Mary now wants to customize her view and focus only on what matters for her visit prep. She could tap the **Filters** for customized view.

  - She can filter by **territory** or by **Dr. Morita's address**.

  - She can also filter by **activity type** --- for example, selecting *Emails* to see only recent email transactions.

    - With the email filter applied, the timeline shows all the recent email transactions.

    - Mary can take actions from here directly. For past emails, she can **resend** them from the timeline.

    - For scheduled emails that haven't yet gone out, she can **reschedule** or **cancel** them from the timeline easily.

- Mary also wants to see the broader institutional picture. Based on the **Affiliations**, she knows that Dr. Morita works at **Santa Clarita Hospital**. She switches to the hospital\'s account profile, and in the timeline tab, she can see an **aggregated timeline** of all engagements at the institution.

  - Here, she can **filter** by **affiliated doctors or sub-HCOs**, which gives her a rich view of institutional interactions to reference during her visit later today.

- Depending on her preference, Mary can also switch to the **Calendar View** between **Month** and **Week** views.

  - In **Month View**, she gets a high-level snapshot of interaction volumes and distribution across the month.

  - In **Week View**, she can drill down into each day for a clearer picture of planned and completed activities.

- With the **Activity Timeline**, Mary can quickly review past interactions, prepare for upcoming visits, see every relevant engagement in one place, and even take actions like resending or rescheduling emails --- all without leaving the page.

- Thanks for your watching.

Web End User

- Hello everyone. Today we'll look at the Activity **Timeline on the web** through the lens of a pharma sales rep, Mary Beth, and see how it helps her get a complete 360-degree view of customer interactions --- from past activities to upcoming plans.

- Through the upcoming agenda, Mary found that she has a visit with **Dr. Aaron Morita** later today, so she opens Dr. Morita's account profile and navigates to the **Activity Timeline** to review their interactions.

  - When she lands on the timeline, it opens to the **last submitted visit** with a detailed summary box open.

    - Here, Mary can see the products discussed, and any product samples provided.

    - If intelligent content was presented during the visit, she also sees the **content thumbnails images** right in the summary.

  - Scrolling down, she can review **all activities** across territories. Different visit statuses are clearly distinguished by the header and link text.

    - If Mary needs more details, she can click directly into the visit record.

    - To get back to today's view, she taps **Today**, which brings her right to the top of the day's activities.

    - She can also refresh the timeline at any time --- resetting it to chronological order, with both past interactions and upcoming activities available in one continuous view.

- Mary now wants to customize her view and focus only on what matters for her visit prep. She could see the **Filters** panel at the top.

  - She can filter by **territory** or by **Dr. Morita's address**.

  - She can also filter by **activity type** --- for example, selecting *Emails* to see only recent email transactions.

    - With the email filter applied, the timeline shows all the recent email transactions.

    - Mary can take actions from here directly. For past emails, she can **resend** them from the timeline.

    - For scheduled emails that haven't yet gone out, she can **reschedule** or **cancel** them from the timeline easily.

- Mary also wants to see the broader institutional picture. Based on the **Affiliations**, she knows that Dr. Morita works at **Santa Clarita Hospital**. She switches to the hospital\'s account profile, and in the timeline tab, she can see an **aggregated timeline** of all engagements at the institution.

  - Here, she can **filter** by **affiliated doctors**, which gives her a rich view of institutional interactions to reference during her visit later today.

- Depending on her preference, Mary can also switch to the **Calendar View** between **Month** and **Week** views.

  - In **Month View**, she gets a high-level snapshot of interaction volumes and distribution across the month.

  - In **Week View**, she can drill down into each day for a clearer picture of planned and completed activities.

- With the **Activity Timeline**, Mary can quickly review past interactions, prepare for upcoming visits, see every relevant engagement in one place, and even take actions like resending or rescheduling emails --- all without leaving the page.

- Thanks for your watching.

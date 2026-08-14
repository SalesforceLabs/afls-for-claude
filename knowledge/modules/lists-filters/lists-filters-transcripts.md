- Hello everyone, I'm Rebecca Wang and I'm a product manager of AFLS. Today I'll walk you through the **configuration and setup of the Lists & Filters** module in the AFLS for Customer Engagement.

- For Lists & Filters, we have a dedicated admin tile which contains almost all of the configurations and settings. Clicking into it opens three tabs: **Account Lists**, **Filters**, and **Account List Actions**.

  - The *Account Lists* tab contains settings to define which fields and columns are displayed for different types of lists. This ensures end users see the most relevant account information in their list views.

  - The *Filters* tab provides a series of settings for filter actions, as well as controls for which fields are available when creating filters. Admins can use this to tailor filtering capabilities to match business needs and compliance requirements.

  - The *Account List Actions* tab defines the actions available directly from account lists. This is where you configure what end users can do with account data --- for example, bulk actions, and exporting lists.

- Now let's walk through each section of the *Lists & Filters* configuration.

- First, let's go to the **Account Lists** tab. Here, you define **fields, column structures, and sorting options** for different types of account lists. Now Let's create one account list config as an example -

  - First, enter a name for the account list configuration, and choose the user profiles that this configuration should apply to.

  - Then select the type here. We support three types, including Default, Search and Static.

    - **Default** applies to the *All Aligned Accounts* list - which is all accounts aligned to the user's logged-in territory.

    - **Search** applies to the *All Accounts* list --- that includes all accounts shared with the logged-in user, without the territory filter.

    - **Static** applies to the static account list as well as routine list.

  - You can also choose an optional record type if you want the configuration to apply only to certain types of accounts. If you leave this blank, it will apply to all record types.

  - Next, you'll define the column fields. Here, you can specify the field API name along with the object API name.

    - If you don't specify the object as a prefix, the system will assume it's from the Account object.

      - For example, if I put "**IsActive",** it will by default query the IsActive field from Account

      - And if I put **HealthcareProvider.EmailIds**, then it will derive the field from HealthcareProvider object.

    - You also have the option for **multi-level queries**. For example: ProviderAccountTerritoryInfoAccount.NextProviderVisit.Place.Id will query ContactPointAddressId.

    - If you don't create any account list configurations, the default columns will show ***Target*, *Last Visit* and *Next Visit*, and *Specialty*** in columns two, three, and four.

    - For column two, you have the option to enable an override to show *Last Visit* and *Next Visit* dates as clickable links to the visit record page.

    - For column 5, you can choose to display the activity plan field. The values in the dropdown here come from provider activity measure type.

    - Finally, you can add **sortable columns**. To do this, create a field set on the ProviderAcctTerritoryInfo object, add the fields you want users to sort by, and then select that field set here.

  - When you're done, activate the configuration and click Save.

  - You can edit it later or delete it if it's no longer needed..

- Next, let's move to the **Filters** tab. Here, we have general filter settings on the left, and available fields for filter creation on the right.

  - On the left side -

    - The 1st setting is to enable the filter feature for your user so that your users can start to create the filter

    - The 2nd setting allow users to share filters with other colleagues on web

    - The following one is to enable the out-of-the-box "All Account" filter on the web, which shows all aligned accounts plus accounts shared with the user.

    - The last one is allowing users to view and create advanced filters, which gives users more flexibility to create filters with additional related entities, using Salesforce reports and mirroring them in the account list.

    - You can also enable predefined *Next Best Customer* filters, with the option to set *Snooze Days*. This defines how long an account is snoozed before it appears back in the NBC filter.

    - In addition to NBC filters, we also have predefined *Activity Plan* filters --- these must be enabled from the separate Activity Plan admin tile under Activity Plan Settings.

  - On the right side, you can select which fields are available for each object when creating filters. If no field set is specified, all fields that the user has access to will be available to create dynamic filters.

- Lastly within the Lists & Filters tile, we have the accounts list actions that **controls what users can do directly from account lists.**

  - The 1st option allows users to multi-select accounts to create static lists

  - The 2nd option enables the bulk action, including bulk visit and email options. Please keep in mind, bulk visit and email also require configuration in the Visit and Email modules to work.

  - The last one is to enable the bulk update feature so that users can bulk update fields from account, healthcare provider, provider account territory info and provider account product info for up to 100 accounts at a time.

    - You can also restrict which fields are available for bulk updates by creating field sets with designated API names for each object.

- That's all we have for the Lists & Filters tile. We also have some other features in Lists & Filters, but these are not located in this tile.

  - The 1st one is the best time filter. You need to go to the Address Administration tile to enable the best time filter.

  - And we also have the map view, which you need to switch on through the Account Management admin tile.

  - You can also config the additional record type filters, which is on the same Account Management admin setting page. You just need to add the record types that you want to see here to make them available.

  - For the quick actions available in the account list, we need to go to the account custom and quick action tabs and configure the quick actions. When configuring quick actions to show in the account list, select "Search" as the location, and then choose the actions available from the list.

- Lastly, don't forget to have the required mobile db schemas enabled to make the features available on mobile.

- That's all I have today for lists & filters admin workflow. Thank you for watching.

Mobile End User

- Hello everyone. Today we'll look at **Lists & Filters** on mobile through the lens of a pharma sales rep, Mary Beth, and see how she uses it to find the right accounts, save them for future use, and take action.

- Mary lands on the **Account** tab, and from here, she is able to see all lists and filters. She is able to see the predefined filters like **Next Best Customer,** **Activity Plan**, and filters that are shared from her colleagues and managers are shown in the "Shared with you" section.

  - For each list or filter, Mary can further narrow the view by **account record type**.

  - In the **Last Visit** column, she can view both the last visit date and the next scheduled visit. The **next visit date is clickable**, which takes her directly to the visit record for quick access.

- Now Mary is planning her next campaign and wants to focus on the target account in the territory. She starts building her target list.

  - Mary clicks **New Filter** and names it as "**Target Engagement**"

  - In this popup, it **listed all the supported entities** that can be used to create filters. You may ask, what if I want to create a filter using other objects beyond these entities. We have the **advanced filter feature**, and we will go through that later in the session.

  - She sets her criteria from all support entities: *Is Target* equals **True**.

    - She could also **add filter criteria from other entities** if she wished.

  - After setting up the filter criteria, she switches to the column tab to **add columns** that will help her decide her next steps.

    - In the **Column** tab, she is able to see all the available fields to add as filter columns. Each field shows the **parent entity name** on the right.

      - Mary could scroll down or simply use the **search bar** to quickly find the field she needs.

        - She added *Last Visit Date*, *Email IDs*, *Specialties*, and *Segment*.

        - Note that a **maximum of 4 extra fields can be added**, which will be shown as column 2 to 5. Column 1 will always be hard-coded as the combination of account full name plus contact point address.

    - She can easily **adjust the display order** by dragging fields up or down.

    - Mary also defines the **sorting order** so it's saved for future use. Here, she wants to sort by segment in ascending order. This way, every time she opens this list --- whether from Accounts or Calendar --- it will always be sorted the same way. In this case, she chooses to sort by *Segment*.

  - After running the filter, Mary instantly gets a focused list of target accounts in her territory who have had recent engagements.

  - If she later decides the filter is no longer relevant, she can come back at any time to edit the criteria or remove it entirely.

- From her filtered results, Mary can also apply the **Best Time** filter to narrow the list even further --- keeping only those accounts that are available during their optimal engagement time.

- To focus on target accounts that haven't been connected with for a while, Mary sorts the list by **Last Visit Date** in ascending order.

  - This brings the accounts needing her immediate attention right to the top.

    - She multi-selects the top accounts and creates a new list, naming it **"Q3 Push."**

  - Right after saving, Mary switches to **Map View** to visualize these accounts by location. On the map, she notices several nearby accounts outside her original selection that could also be valuable. She simply drags and drops these additional accounts directly into her "Q3 Push" list, which adds a few extra stops she can easily work into the same route.

- Now from the same list, Mary is ready to plan her engagements.

  - She scheduled a **group visit** with all accounts in her list, and she also has the option to send group email if she wishes.

  - Mary also bulk updates all accounts\'s next visit objective as "Introduce Q3 Immunexis campaign materials" to make it as the consistent guideline.

  - Except for the bulk actions, Mary can also engage with individual accounts, such as schedule visit, send email, or view the last consent status all from the one account list view

- If Mary ever needs to go beyond the basic filter, she can use **Advanced Filter**.

  - This allows her to pull in more data points that go beyond just account-related fields to create more targeted filters. It leverages the **standards Salesforce reports** functionality, and allows users to mirror the reports into the Account search tab.

  - From the list of available reports, Mary selects one to use as the basis for her advanced filter.

  - With Advanced Filter, she can combine cross-entity insights with her account criteria to build highly targeted lists for very specific engagement.

    - It's important to note that when creating an advanced filter, the report she selects must contain the required **Account ID** field.

    - Also, while quick actions are still available, other features --- such as sorting, Map View, bulk actions, Best Time filter, and similar capabilities --- are not supported when working in the advanced filter view.

- To summarize, with **Lists & Filters**, Mary could quickly target right accounts for outreach, and take the right business executions immediately. Lists & Filters makes it easy for Mary to work smarter and move faster.

Web End User

- Hello everyone. Today we'll look at **Lists & Filters** on the web through the lens of a pharma sales rep, Mary Beth, and see how she uses it to find the right accounts, save them for future use, and take action.

- Mary starts on the **Account** tab, where she sees all her lists and filters. This includes predefined filters such as **Activity Plan** and **Activity Plans with Weightages**, as well as filters shared by colleagues and managers under the **Shared with You** section.

  - For each list or filter, she can further narrow the view by **account record type**.

  - In the **Last Visit** column, she can view both the last visit date and the next scheduled visit.

- Now Mary is preparing for her next campaign and wants to focus on the active target accounts in her territory

  - She starts building a new filter by clicking the "New Filter" action under the wheel.

  - Mary names it as "**Target Engagement**".

  - Once the new filter is created, she can tap the filter icon, which will immediately open the filter criteria panel. It **listed all the supported entities** that can be used to create filters.

    - If she wants to go beyond those entities, she has the option to use **Advanced Filters**, which we'll come back to later.

  - For now, she sets her criteria as **Is Active = True**

    - She could also **add filter criteria from other entities** if she wished.

  - After setting up the filter criteria, she clicks the save.

  - And she could also customize the filter's columns by clicking the wheel icon and selecting **Fields to Display**.

    - From the popup, she could see the fields as well as the field from which entity.

    - After adding the fields on the right, she can easily **adjust the display order** as well.

  - After running the filter, Mary instantly gets a focused list of active target accounts in her territory who have had recent engagements.

  - Mary finds that the filter is very useful, and she chose to **share** the filter with other colleagues.

    - For the colleagues being shared, though they could not edit the filter itself - but they can **clone it** and make their own modifications.

  - Finally, if Mary ever decides the filter is no longer relevant, she can always come back to edit the filter criteria or delete it at any time.

- From these results, Mary can also apply the **Best Time filter** to refine her list further and keep only accounts available during their optimal engagement times.

  - *Note that in our demo, this feature is still being fixed, so we can't show it live today.*

- Now right within the same filter, Mary can create a **static list**. She selects the accounts she wants, clicks **Add to List**.

  - In the popup, she could choose either to add these accounts into an existing list or create a new static list.

  - She can preview the selected accounts to confirm before saving.

  - And unlike dynamic filters, **static list columns are defined by admins**, so there is no option for end users like Mary to select the fields to display for static list.

  - Also note that, each account is unique in a list, so if she tries to add a **duplicate account**, she'll see a warning.

- There is **another way to create the static list**, where Mary could tap the "New List" in the wheel icon, and instead of picking the accounts first, Mary gives the **new list account name first.**

  - After the new list record is created, Mary could tap the "**Find & Add to List**" where she could manually add accounts afterward.

- Once her list is ready, Mary now moves on to **engagement planning**. From the list view, she can:

  - Multi-select accounts to schedule a **group visit** or send a **group email**,

  - She could also **bulk update** account data or ratings, segments across general account, healthcare provider, territory and product level.

    - In our example, we could bulk update the account rating and update the segment status all to "Tier 1".

  - Mary could also export the list outside the app as the csv file.

  - Beyond bulk actions, she can also work with **individual accounts** directly from the list --- like scheduling a visit, sending an email, checking consent status, or launching intelligent content.

- If Mary ever needs to go beyond the basic filter, she can use **Advanced Filter**.

  - This allows her to pull in more data points that go beyond just account-related fields to create more targeted filters. It leverages the **standards Salesforce reports** functionality, and allows users to mirror the reports into the Account search tab.

  - From the list of available reports, Mary selects one to use as the basis for her advanced filter.

  - With Advanced Filter, she can combine cross-entity insights with her account criteria to build highly targeted lists for very specific engagement.

    - It's important to note that when creating an advanced filter, the report she selects must contain the required **Account ID** field.

    - Also, within the advanced filter, the additional actions are not available, including quick actions, bulk actions, best time filter etc.

- To summarize, with **Lists & Filters**, Mary could quickly target right accounts for outreach, and take the right business executions immediately. Lists & Filters makes it easy for Mary to work smarter and move faster.

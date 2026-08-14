- Hello everyone, I'm Rebecca Wang and I'm a product manager of AFLS. Today I'll walk you through the **configuration and setup of the Calendar** module in the AFLS for Customer Engagement.

- From the Admin Console, we have a dedicated tile called **Planner Administration**, where we configure the calendar and its related settings.

- First and foremost, you need to review and confirm the activities you want displayed and managed on the calendar. We ship 5 different activity types with 3 different status of visits enabled out of the box, and you could find the details and confirm the activation in the **Calendar Event** tab.

  - For some specific activities, such as Assessment Task, except for the enablement of activity here, you also need to make sure the user have the required perm and object access to manage tasks on calendar

  - These settings are applied at the **org level** --- meaning if you disable an item or change its display color or label, it will affect all users, not just specific profiles.

- Once event visibility is set, now we can move to the **General Calendar Settings** section.

  - The first setting here is straightforward, which is to set the **first day of the week**.

    - For example, if you set it to Monday, then Work Week or 5-day views will start on Monday. If you leave it blank, the system will use the user's local settings.

  - The next setting (**Day View FieldSet for Visi**t) controls what's shown in visit tiles. Here, you can enter the API name of a Visit object field set to define which fields appear on visit tiles in the **1-day view**. Only the top two fields from that field set will display.

  - Moving on to the next setting, [**Search Accounts By Field**, and this setting is to]{.mark} set up the field by which accounts will be searched and ordered in the calendar. You can enter the name of a text field to use for **account search and sorting**.

    - If left blank, the account name is used.

    - On the web, this affects both search and sort; on mobile, it affects sort only.

  - Next one, **Account Type Icon** - This lets you display an icon on visit tiles based on HCP/HCO type or record type value.

    - If you leave it blank, no icon will appear.

  - Now let's talk about one setting about **assessment tasks**. You can replace the default assessment task title in the calendar with a custom text or formula field by entering the API name here.

    - If left blank, the default task name will display.

  - Once event details are configured, we can move into settings for **visibility of colleague visits**.

    - When **Show Colleague Visits in Calendar Grid** is enabled, you'll see colleague visits in the background when dragging and dropping an account to schedule a visit.

    - The **Colleague Visit Field** setting defines which visit field displays in those colleague visit tiles.

  - Next, we move into two quick display-related options for the account list.

    - **Hide Account Contact Point Address & Show Last Visit Date:** You can hide the account's contact point address from the account list panel, and optionally display the **last visit date** for each account if there's one on record.

  - Next, we have a setting for **sharing visit visibility between colleagues**. When enabled, if a colleague is added to a visit, they'll see that visit on their calendar based on their territory. If disabled, the visit is only shown to the creator in their own territory.

  - Now let's look at **two mobile-specific settings**.

    - The 1st one is **Time Off Territory Resizing** on Mobile, which allows intuitive resizing of Time Off Territory events.

      - On the web, resizing is already available for TOT and other events by default.

    - The 2nd one is to allow mobile users to use **advanced search** in the calendar account list.

  - The next setting is related to the **visit preview** popup for completed or submitted visits.

    - When enabled, it **locks the preview to the original information** from the time the visit was signed or submitted, so later updates to the account --- like a name change --- won't be reflected in that preview.

    - For example, if Dr. Aaron Morita's name is updated to Dr. Aaron Reich after signing or submission, the preview will still show the original name, which is Dr. Aaron Morita, if this is enabled.

    - This requires **Visit Preview** to be enabled.

      - To control the visit preview, we need to go to the separate visit management title, and make the "Skip visit preview setting" is disabled.

  - The next setting is to set the **default time at which the calendar grid will start when opened**.

  - Moving on to the next one is **enabling the Zoom In / Zoom Out feature on the calendar**. You can enter a number here to define the default visible time range starting from the grid's start time.

    - Zero or empty values means that Zoom In/Zoom Out functionality is disabled.

  - The next one, **Time format field**, is to control the format in which time will be displayed on the calendar.

  - The next setting is to enable the **shared calendar functionality**. This allows users to view visits in a shared calendar.

    - To set it up properly, we **first need to do some prerequisite** for the mirror territory.

      - We need to go to the object manager, and find the Territory2 object, then **create 2 custom fields**, one is mirrorTerritory, and the other one is UseNameofMirrorTerritory.

      - Then add these two fields into the **page layout**.

      - Next, we need to **map these fields in the Territory Management** tile in the admin console by putting the API name of two custom fields.

      - Finally, make sure that you have the mirror territory value and the optional user name of mirror territory name being added.

  - The next setting is to provide another way to create activities on the calendar. We provide the OOB creating events dropdown through the "+" icon, and this setting will let your users **tap a free slot on the calendar** to create an activity with the start time automatically filled in.

  - On the bottom here, we're able to enable the feature of **adding employees to general events**, and we can also set profiles which users can be invited to general events. We can select profiles only if the above setting check box is selected.

    - On 258, this setting only controls mobile. And on the web, even if you restrict the profiles that can be invited to general events, the rest of the profiles users can still be added into the general events on the web.

  - On the left side, at the top, we have some routine settings -

    - You can enable the routine creation and sharing functionality, and you can also allow your end users to create a routine which spans multiple days.

    - The last one setting affects **how the system handles scheduling conflict error validation** when the user applies a routine to create the planned visits.

      - If the setting is enabled, the visit with a scheduling conflict will not be able to be created, and all other visits that pass the validations can be created. Users will be able to see the message indicating the number of visits that succeeded and the number that failed.

      - If the option is disabled, then when a user applies a routine, if any visit in the routine fails scheduling conflict validation, then none of the visits will be created.

  - Continue to scroll down, we have the **business hours setup section**, and you can define the org business hours from the setup, and then register business hours **globally**, or **for visits** and **general events** specifically..

  - And next, you have the option to **set up different colors for different types of events and different status of visits**.

    - Here, you can directly specify a **hex code**. If you leave the hex code blank, the system will use the default colors that we ship out of the box in the Calendar Event Settings.

    - And you may ask, since admins can already set colors in the Calendar Event Settings, what's the difference between the two?

      - In the **Calendar Event Settings**, the colors are chosen from a standard Salesforce color collections. These settings apply at the **org level**, meaning all users across the organization will see the same event colors.

      - By contrast, the color settings in **Planner Administration** allow you to define colors at the **profile level**. This means you can tailor event colors for specific profiles, and any color values you set here will override the org-level colors defined in the Calendar Event Settings tab.

  - Lastly, we have the **Account Record Type** section.

    - Here, you can specify which account record types should appear in the account list on the Calendar.

    - If you don't select any record types, then **all accounts** will be displayed in the list by default.

- Finally, we have the **Holiday Mapping** section.

  - This setting allows you to display holidays on the calendar by mapping them to specific business hours.

  - To do this, first we need to create the holiday in standard Salesforce Setup. Then, come back here and create the mapping between the holiday and the correct set of business hours.

  - It's important that the business hours you map here match exactly with the business hours you've already defined in the **Business Hours** setting --- otherwise, the holiday will not display properly on the calendar.

- And that brings us to the end of the **Planner Administration** settings for Calendar. With these settings, you can tailor the calendar to deliver accurate, relevant, and user-friendly scheduling for your teams. Thank you for watching.

Admin TOT

- Hello everyone, I'm Rebecca Wang and I'm a product manager of AFLS. Today I'll walk you through the **configuration and setup of the Time Off Territory** module in the AFLS for Customer Engagement.

- Time Off Territory or TOT, is used to track when field sales reps are out of their territory, such as, vacation, training, etc. This keeps schedules accurate and prevents conflicts with other activities.

- As part of setting up Time Off Territory, and also in order to maintain that accuracy, there are multiple **trigger handlers** that work behind the scenes, and we need to make sure these trigger handlers for Time Off Territory are enabled.

- In AFLS, there are two approaches for creating Time Off Territory: The first is **datetime-based creation**. The second is **slot-based creation**.

  - We ship the datetime Time Off Territory approach by default. If needed, customers can also enable the **slot-based** approach by adding the *Slot* field to the page layout.

    - To do this, go to the **Object Manager**, locate the **Territory User Downtime** object, add the *Slot* field to the page layout, and assign that layout to the appropriate profiles.

    - Once the slot field is available, the next step is to define the slot intervals.

      - From the Admin Console, open the **Time Off Territory** admin tile.

      - Here, you can set up four slot types --- **morning**, **afternoon**, **evening**, and **all day**. You can define different slot hours by profile so that when users create a Time Off Territory record, they can simply pick the slot, and the start and end times will automatically default to the values you've set.

      - You can also enable the **Support Multiple Days of Time Off Territory** setting.

      - With this enabled, users can create slot-based TOT records that span multiple days, making it easy to record recurring TOT patterns that extend over several days.

- Another important setting within the **Time Off Territory** admin tile is the **overlapping rules** --- these control how Time Off Territory interacts with other types of activities.

  - We have two levels of overlapping rules: One is **general level** rules, which apply to all TOT types. The other one is s**pecific TOT type** rules, which override the general rules for that particular type.

  - Here's how it works: If only a general-level rule is set, it applies to every TOT type.

    - For example, if I set **"Visit is not allowed"** at the general level and make no additional settings at the specific TOT type level, then *no* TOT type --- whether it's vacation, training, or holiday --- can be created if there's an existing visit in the same time slot, and vice versa.

  - However, if I create a specific rule --- say, **"Training is allowed with Visit"** --- then I *can* schedule a training-type TOT at the same time as a visit. But for other TOT types, such as holiday or vacation, the general rule still applies, meaning visits won't be allowed during those times.

  - Lastly, if I deactivate Time Off Territory rules entirely at the org level, some core validations still apply: TOT is not allowed during visits, holidays, or non-business hours.

- The last tab in the **Time Off Territory** settings is related to **Activity Plans**.

  - These settings don't affect the Time Off Territory functionality directly. Instead, they're used during the *working day* batch job execution in the Activity Plan component.

  - The *Working Day* field here can include values from different TOT types --- such as holiday, training, and more --- to determine what counts as a working day when running Activity Plan calculations.

  - We'll cover these details in a separate Activity Plan recording session.

- That's all for today's Time Off Territory admin workflow. Thank you for watching.

Admin MyTeam

- Hello everyone, I'm Rebecca Wang and I'm a product manager of AFLS. Today, I'll quickly walk you through how to enable the **MyTeam Scheduler** feature for managers in AFLS for Customer Engagement.

- MyTeam Scheduler is a **mobile-only** feature that allows district and regional managers to oversee the activities of their employees within assigned territories, with all relevant details available at a glance.

- To activate this feature, there are two steps:

  - First, we need to assign the **required permission sets** to the manager user. The required perm sets are detailed in the user guide, and includes xxx

  - Second, we need to enable the **MyTeam Scheduler tab** on mobile. To do this, go to the **Mobile** tile in the Admin Console, open **UI Settings**, and activate the MyTeam tab for the desired profile.

- And finally, make sure the users are properly **assigned to their territories** so that their schedules will display.

- That's the end of MyTeam scheduler configuration, thank you for watching.

Mobile Calendar End User

- Hello everyone. Today we'll look at **Calendar** **on mobile** through the lens of pharma sales rep, Mary Beth, and see how she plans her week and manages her schedules in one place.

- Mary opens her **Calendar** to plan her schedules. She can immediately see the **different types of activities** scheduled on the grid, including planned and submitted visits, time off territory, general events and any **assessment tasks assigned by KAM users**.

  - Each event type is color-coded. If Mary is unsure which color means what, she can always check the **event indicator** to get herself familiar with them.

  - She can also switch between **Day, Week, and Month views**.

    - In the **Month view**, she can't create or manage activities there and the activities are viewed only.

  - For **navigation**, Mary can **tap the arrows** to move between days or weeks, or use the date picker to jump straight to a specific day or week.

  - And if she ever wants to return to the current day, she just taps **Today**.

    - And today's date on the calendar will be **highlighted as blue**.

    - And current time will be indicated **as a red line** shown on calendar

  - Mary can also adjust how much detail she sees by **zooming in or out**. After zooming, she can see the **account record type icon** on the visit tile, which helps her quickly identify the account type without opening the record.

- On the left side of the screen, Mary sees her **account lists and filters** which were either built herself or shared by her colleagues.

  - She could open access the **predefined Next Best Customer** and **Activity Plan filters** from Calendar

  - She can also **filter by account record type.**

  - And on mobile, she could also launch the **advanced search popup** to search accounts through multiple fields.

  - She could also easily **remove any applied filter or list** by clicking the cross error icon, which will revert back to the default all account list.

  - For each account, Mary could **expand the account to view additional account fields**. And the account fields she sees here are exactly the same list or filter columns defined from the account tab.

  - For **HCP accounts** with multiple addresses, she can click the account to view the full address list

  - For **HCO accounts**, if there are any **affiliated accounts**, she could see all affiliated accounts, and in the same screen, she could tap "View Address" to view the full list of addresses associated with the HCO account.

- Now Mary is ready to schedule a visit. The easiest way is to drag and drop an account from the list directly onto the calendar. The visit location defaults to the address shown on the account list.

  - As Mary drags the account onto the calendar, if there are any **colleague visits** or best time information linked to that address, that information will appear in the calendar background, giving her the context she needs to choose the most suitable time for the visit. In our case, there is no best time or colleague to visit information, so you won't see anything here.

    - After creating the visit successfully, Mary could tap the visit to open the **visit preview**, where she could have a glance of the key details on the popup. From the preview, Mary could also enable the toggle of "Is Confirmed" to flag the visit as confirmed.

      - And she could also navigate to the **visit record page** or the **visit edit page** from here.

  - And if she needs to **schedule the visit at a different address**, she can simply drill down to the **address list** and then drag the address onto the calendar.

- Later, Mary remembers she'll be unavailable next Friday morning for a regional team strategy meeting.

  - She taps an empty slot to create a **General Event** to block her calendar, and in the popup, she notices the start date and time are pre-filled based on where she tapped --- which is a nice convenience

  - She can also add employees to the general event, so that the event will show up on her colleague's calendar as well.

- Mary also receives a **notification** that next Thursday afternoon will be the national sales training program.

  - This time, she uses another method of creating TOT instead of tapping the calendar. She clicks the plus icon on the top, and selects TOT from the list.

    - Here, she can either enter the exact start and end date for the TOT, or she could pick **an admin-defined slot**. Since the training is in the afternoon during the company hour, she just **picks the afternoon slot** and clicks the save.

- Beyond scheduling, Mary can also **manage existing events**.

  - She could tap each activity she created to **edit or delete** it directly.

  - She can also **drag and drop to move** the event around the calendar to reschedule the events.

  - She can also adjust the TOT duration by long tapping the TOT and then **resizing the TOT event tile**.

  - Depending on the **time off territory rules** setup, the edit of activities may not succeed.

    - For example, the home office **does not allow visits** to overlap with any types of TOT. And if Mary tries to reschedule one of her visits with an existing TOT, she will be blocked.

  - And once a visit is submitted, it cannot be moved or resized.

- Except for editing each individual activity, Mary also has options for **bulk deletion**. In the More Actions flyout, she can choose the **delete event action**, where she can multi-select event types, including planned visits, TOT, general events, or assessment task, and then select a time range to clear multiple events at once.

- Within the same flyout, there are two more powerful tools.

  - One is filter activities, where Mary can filter not only by different types of activities, but also different status of visit or assessment tasks for a focused view.

  - The other one is a **shared calendar**. And if the feature is enabled, then Mary could view the counterpart or mirror territory's visit on her calendar.

    - In the mirror territory view, Mary could **view the visit activity only**, and she could not make the change or create visit in this view

    - She can also choose the **combined view** which combines her schedule with her mirror territory's visits to better coordinate the territory coverage. The visit from mirror territory **has the special icon** to differentiate the visits that were created by Mary.

      - In the combined view, she could schedule and manage her events as expected.

- With Calendar, Mary has a **central hub** to plan her week, schedule and manage visits, block time, and coordinate with colleagues in one place. Calendar gives her the context she needs to avoid conflicts, stay organized, and engage customers more effectively.

- That's all I have today for Calendar, and thank you for watching.

Web Calendar End User

- Hello everyone. Today we'll look at **Calendar** **on the web** through the lens of pharma sales rep, Mary Beth, and see how she plans her week and manages her schedules in one place.

- Mary opens her **Calendar** to plan her schedules. She can immediately see the **different types of activities** scheduled on the grid, including planned and submitted visits, time off territory, general events and any **assessment tasks assigned by KAM users**.

  - Each event type is color-coded. If Mary is unsure which color means what, she can always check the **event indicator** to get herself familiar with them.

  - She can also switch between **Day, Week, and Month views**.

    - In the **Month view**, she can't create or manage activities there and the activities are viewed only.

  - For **navigation**, Mary can **tap the arrows** to move between days or weeks, or use the date picker to jump straight to a specific day or week.

  - And if she ever wants to return to the current day, she just taps **Today**.

    - And today's date on the calendar will be **highlighted as blue**.

    - And current time will be indicated **as a red line** shown on calendar

  - Mary can also adjust how much detail she sees by **zooming in or out**. After zooming, she can see the **account record type icon** on the visit tile, which helps her quickly identify the account type without opening the record.

- On the left side of the screen, Mary sees her **account lists and filters** which were either built herself or shared by her colleagues. She can **narrow these down by account record type**, or **expand the panel to view additional account fields**. And the account fields she sees here are exactly the same list or filter columns defined from the account tab.

  - For HCP accounts with multiple addresses, she can click the drill down icon to view the full address list

  - For HCO accounts, she can not only drill down into addresses, but also click **View Customers** to see all affiliated accounts.

- Now Mary is ready to schedule a visit. The easiest way is to drag and drop an account from the list directly onto the calendar. The visit location defaults to the address shown on the account list.

  - As she drags, she can see the account's **business hours** and any existing colleague visits shown in orange from the calendar background, which helps her avoid conflicts.

  - And except for the operation hours, if other contact point best contact time info is available for the address, such as best time, whether appointment is required etc., Mary can see these contexts on the calendar background just like the close hours as well.

  - And if she needs to **schedule the visit at a different address**, she simply drills down to the **address list** and then drags the address onto the calendar.

- Later, Mary remembers she'll be unavailable next Friday morning for a regional team strategy meeting.

  - She taps an empty slot to create a **General Event** to block her calendar, and in the popup, she notices the start date and time are pre-filled based on where she tapped --- which is a nice convenience

- Mary also receives a **notification** that next Thursday afternoon will be the national sales training program.

  - This time, she uses another method of creating TOT instead of tapping the calendar. She clicks the plus icon on the top, and selects TOT from the list.

    - Here, she can either enter the exact start and end date for the TOT, or she could pick **an admin-defined slot**. Since the training is in the afternoon during the company hour, she just **picks the afternoon slot** and clicks the save.

- Beyond scheduling, Mary can also **manage existing events**.

  - She could tap each activity she created to **edit or delete** it directly.

  - She can also **drag and drop to move** the event around the calendar to reschedule the events.

  - She can also adjust the event duration by **resizing the event tile**.

  - Depending on the **time off territory rules** setup, the edit of activities may not succeed.

    - For example, the home office **does not allow visits** to overlap with any types of TOT. And if Mary tries to reschedule one of her visits with an existing TOT, she will be blocked.

    - On the other hand, **general events *are* allowed** with TOT, so she can move a general event into that time if needed.

  - And once a visit is submitted, it cannot be moved or resized.

- Except for editing each individual activity, Mary also has options for **bulk deletion**. In the More Actions flyout, she can choose the **delete event action**, where she can multi-select event types, including planned visits, TOT, general events, or assessment task, and then select a time range to clear multiple events at once.

- Within the same flyout, there are two more powerful tools.

  - One is filter activities, where Mary can filter not only by different types of activities, but also different status of visit or assessment tasks for a focused view.

  - The other one is a shared calendar. And if the feature is enabled, then Mary could view the counterpart or mirror territory's visit on her calendar. She can also combine her schedule with her mirror territory's visits to better coordinate the territory coverage.

- With Calendar, Mary has a **central hub** to plan her week, schedule and manage visits, block time, and coordinate with colleagues in one place. Calendar gives her the context she needs to avoid conflicts, stay organized, and engage customers more effectively.

- That's all I have today for Calendar, and thank you for watching.

Mobile Routine End User

- Hello everyone. Today we'll explore the **Routine on mobile** through the lens of sales rep, Mary Beth, and see how she uses the *Routine* feature to save time, maintain consistency, and keep her schedule optimized.

  - Mary often visits the same group of doctors in her territory on a recurring basis. Previously, she had to manually create each visit one by one, which was time-consuming. With the *Routine* feature, Mary Beth can set up a series of recurring visits and apply that routine to her calendar whenever she needs it.

- Within the Calendar, Mary sees a list of her frequently visited accounts for that day. She taps the *Routine* icon and chooses to **create a new routine** for that day.

  - She first gives a name as "Weekly Priority"

  - The **start date** is automatically set to the currently selected date, but Mary can adjust the end date to span multiple days if she wants to capture a broader pattern.

  - Once she's happy with the **dates and the name** , she clicks *Save* to store the routine for future use.

- The following week, Mary wants to follow the same schedule.

  - She simply taps the *Routine* icon again, **selects the routine** she just created, and **applies** it to the same week day --- and it immediately populates her calendar without having to rebuild it from 0.

  - Also, for the day that the routine is applied, she is able to see the orange dot indicating the routine is applied. And if she clicks the routine icon, she can see the routine name that she applies.

- Later, if there is a new account aligned to her Territory, and Mary wants to include the new doctor in her routine, she can easily **update the routine**. She first schedules the visit, and then updates the routine, saves her changes, and the updated version is ready to use for future weeks.

- Another time, Mary wants to apply the same routine again in the future. Instead of tapping the *Routine* icon, she can also open her account list, select the routine, and simply **drag and drop it into a calendar slot.** Instantly, all the visits from that routine are applied to her schedule.

  - If she only wants to schedule a specific account from the list, Mary can **drag and drop just that account** into a calendar slot to create an individual visit

- If Mary feels a routine is outdated, she can easily remove it from her list. From the *Accounts* tab, she could locate the routine and **delete** it with just a few taps.

- By using the *Routine* feature, Mary eliminates repetitive scheduling work and keeps her calendar consistent and organized. This means she can spend less time planning and more time engaging with healthcare providers.

Web Routine End User

- Hello everyone. Today we'll explore the **Routine on the web** through the lens of sales rep, Mary Beth, and see how she uses the *Routine* feature to save time, maintain consistency, and keep her schedule optimized.

  - Mary often visits the same group of doctors in her territory on a recurring basis. Previously, she had to manually create each visit one by one, which was time-consuming. With the *Routine* feature, Mary Beth can set up a series of recurring visits and apply that routine to her calendar whenever she needs it.

- Within the Calendar, Mary sees a list of her frequently visited accounts for that day. She taps the *Routine* icon and chooses to **create a new routine** for that day.

  - She first gives a name as "Weekly Priority"

  - The **start date** is automatically set to the currently selected date, but Mary can adjust the end date to span multiple days if she wants to capture a broader pattern.

  - Once she's happy with the **dates and the name** , she clicks *Save* to store the routine for future use.

- The following week, Mary wants to **apply another recurring pattern**.

  - She simply taps the *Routine* icon again, **selects the routine** she needs and **applies** it to the same week day --- and it immediately populates her calendar without having to rebuild it from 0.

- **Later,** if there is a **new account aligned to her Territory**, and Mary wants to include the new doctor in her routine, she can easily **update the routine**. She first schedules the visit, and then updates the routine, saves her changes, and the updated version is ready to use for future weeks.

- Another time, Mary wants to apply the same routine again in the future. Instead of tapping the *Routine* icon, she can also open her account list, select the routine, and simply **drag and drop it into a calendar slot.** Instantly, all the visits from that routine are applied to her schedule.

  - If she only wants to schedule a specific account from the list, Mary can **drag and drop just that account** into a calendar slot to create an individual visit

- If Mary feels a routine is outdated, she can easily remove it from her list. From the *Accounts* tab, she could locate the routine and **delete** it with just a few taps.

- By using the *Routine* feature, Mary eliminates repetitive scheduling work and keeps her calendar consistent and organized. This means she can spend less time planning and more time engaging with healthcare providers.

Mobile MyTeam End User

- Hello everyone. Today we'll look at the ***MyTeam Scheduler* on mobile** through the lens of a district manager, Sasha and see how Sasha uses the MyTeam Scheduler to view team availability, and ensure everyone's schedules are aligned with business priorities --- all in one place.

- From her iPad, Sasha taps the *MyTeam Scheduler* tab, where he can **switch between different territories** to view schedules across regions.

- For each territory, Sasha can view **planned and completed visits, time off territory, and non-customer-facing general events** for the week. If she needs more context, she can tap on a specific activity to **open its details in the online Salesforce view**, which gives him quick access to the full record.

- Sash can also jump directly to the date he wants to focus on using the **date picker** at the top of the screen.

- By using the *MyTeam Scheduler*, Sasha keeps his team's schedules transparent, coordinated, and aligned with business goals. That's the end of MyTeam scheduler.

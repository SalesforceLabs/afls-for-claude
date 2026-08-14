- Hello everyone, I'm Rebecca Wang and I'm a product manager of AFLS. Today I'll walk you through the **configuration and setup of the Home Page** module in the AFLS for Customer Engagement.

- Setting up the Home Page is straightforward --- it's all about customizing the components or widgets that are available for different apps and user profiles.

  - To do this, we need to go to the Edit **Page** and use the standard **Lightning App Builder** to control the visibility of each component.

- There are several widgets that are web or mobile only.

  - The **Agentforce Welcome Center** is currently mobile-only.

  - The **Custom Notification Container** is web-only because the mobile app uses a different UI for app alerts.

  - For UpNext, the mobile component is **Up Next Map**, while on the web it's **Upcoming Agenda without the map view**. You don't need to manually add Up Next Map to the mobile home page, and it's included out of the box.

- There are also a few components with additional settings worth calling out:

  - **The First** one is the **Agentforce Welcome Center**.

    - While it is not supported on the web, you will still see a placeholder in the Lightning App Builder. Here, you can enter the Agentforce utterance names that you've defined in the Agentforce setup.

  - The 2nd one is the **UpNextMap**.

    - Like Agentforce Welcome Center, this is **mobile-only**, so on the web you'll just see a placeholder. Clicking the placeholder lets you configure background notifications for visit in the iPad app.

    - There are two key settings:.

      - The 1st one is to send a reminder for a set number of minutes before a visit. For example, if you enter 10 minutes, the iPad user will receive a background notification 10 minutes before their visit reminding them to enable Do Not Disturb mode.

      - The 2nd one is to send a reminder to the user before the visit starts. Tapping the iPad background notification takes the user directly into the AFLS4CE mobile app.

- In addition to these custom components, you can also add standard Salesforce components --- such as **Rich Text**, **Charts**, **Reports and Dashboards**, and the **Standard List View**. Simply search for the component name, drag it onto the page layout, and then choose the specific list or dashboard you want your users to see.

  - After you click the save, remember to activate it for the desired app and profiles.

- Beyond what you configure in the Lightning App Builder, there are also **Quick Actions** available on mobile. These are set up in the Admin Console under the **Custom and Quick Action** tile.

  - From here, you can create a new quick action, set the location to **Home**, and select the actions you want to make available.

  - Only **five** quick actions can be displayed on the mobile Home Page, so it's best to keep the number of active quick or custom actions to five or fewer to ensure all are easily accessible for sales reps.

- That's all for the Home Page admin configuration workflow, and thank you for watching.

Mobile End User

- Hello everyone. Today we'll look at **Home Page on mobile** through the lens of a pharma sales rep, Sasha, and see how Sasha starts her day from the Home Page - using it as her central hub to get quick insights, take action, and stay on top of her priorities.

- At the top of the Home Page, Sasha sees the ***Agentforce Welcome Center***. This gives her instant access to Agentforce right from her AFLS mobile app homepage. Here, the home office has pre-configured five most frequently accessed utterances for end users --- so Sasha can benefit from here without having to type or search.

  - If Sasha has more questions, she can also start a new conversation by tapping the searching bar to open the chat window.

- Next, she checks the ***Home Office Announcements*** widget. This is where important updates from her organization appear --- such as product launch news, compliance reminders, or territory changes.

  - She can easily swipe left and right to view more messages, and she can also tap the message for the full view of details.

  - These announcements keep Sasha informed as always.

- Scrolling down, Sasha sees the ***Next Best Customer*** widget. This gives her a prioritized view of which accounts to engage with today.

  - We'll go into more detail about how to use this feature in the separate *Next Best Customer* recording.

- Sasha then looks at the ***Up Next Map* widge**t. This shows her upcoming activities, including visits, Time Off Territory, and general events.

  - If she taps a visit record, she can see it directly on the map, along with the estimated time of arrival and driving distance.

    - Tapping the *Directions* link gives her the option to get to the device's default maps app to show the driving route.

  - From here, she can also go directly into the visit, TOT, or general event record without leaving the widget.

- Next, Sasha checks the ***Visits to Submit*** section, which lists all her past visits that have not yet been submitted.

  - For each record, she can see the visit time, account name, location, and channel.

  - If the visit was a group visit, she'll also see the number of attendees from the same view.

- On the left side, Sasha is now with the ***Activity Plan* widget**. This gives her visibility into her progress toward activity goals and targets.

  - We have a dedicated recording for the Activity Plan topic, and you can find more details in the Activity Plan recordings.

- Further down, she finds the **standard *Rich Text* component**. This displays helpful reference content such as promotional campaign details, product guidelines, or quick tips for the week --- customized by her admin team.

- Sasha also sees a ***Standard List View Report*** that provides quick, filtered views of account or activity data. Here, she can see a list of assessment tasks for the strategic account that the key account manager assigned to her to track the progress, which helps her get targeted information without additional clicks and navigations.

- Next, Sasha checks the ***Reports and Dashboards*** section. Here, she can access interactive charts and tables --- such as territory performance or engagement trends --- giving her a data-driven perspective on her progress and opportunities.

- Finally, Sasha makes use of the two floating icons that are always available on her Home Page.

  - The first is the **Quick Actions** button. When she taps this, she sees all the quick actions her admin has configured for her --- such as scheduling a visit, or sending an email --- and she can launch them without leaving her current view.

  - The second is the **Agentforce Floating Button**. Tapping this starts the Agentforce chat window to ask questions and get answers from Agentforce.

- By starting her day on the Home Page, Sasha gets a clear overview of her priorities, quick access to the right tools, and the ability to take immediate action --- all in one place.

Web End User

- Hello everyone. Today we'll look at **Home Page on the web** through the lens of a pharma sales rep, Mary Beth, and see how Mary starts her day from the Home Page - using it as her central hub to get quick insights, take action, and stay on top of her priorities.

- At the top of the Home Page, Mary sees the ***Home Office Announcements*** widget. This is where important updates from her organization appear --- such as product launch news, compliance reminders, or territory changes.

  - She can easily swipe left and right to view more messages, and she can also tap the message for the full view of details.

  - These announcements keep Mary informed as always.

- Scrolling down, Mary sees the ***Next Best Customer*** widget. This gives her a prioritized view of which accounts to engage with today.

  - We'll go into more detail about how to use this feature in the separate *Next Best Customer* recording.

- Mary then looks at the ***Up Next Agenda***. This shows her upcoming activities, including visits, Time Off Territory, and general events.

  - From here, she can tap on each activity to go directly to the visit, TOT, or general event record.

  - She can also start a visit directly from here so that she can schedule the visit easily from here

- Next, Mary checks the ***Visits to Submit*** section, which lists all her past visits that have not yet been submitted.

  - Visit records are sorted by the start time.

  - For each record, she can see the visit time and location.

  - She can also tap the view icon to go to the visit record directly to submit the visit record.

- Right below, Mary is now with the ***Activity Plan* widget**. This gives her visibility into her progress toward activity goals and targets.

  - We have a dedicated recording for the Activity Plan topic, and you can find more details in the Activity Plan recordings.

- Continuing to scroll, Mary sees the custom ***app alert container***, which includes the in-time updates and recommendations for Mary to take action on.

  - Similar to Activity Plan, we also have a separate session for App Alert, and please find more details on App Alert in that recording.

- Mary also sees a ***Standard List View Report*** that provides quick, filtered views of account or activity data. Here, she can see a list of assessment tasks for the strategic account that the key account manager assigned to her to track the progress, which helps her get targeted information without additional clicks and navigations.

- Further down, she finds the **standard *Rich Text* component**. This displays helpful reference content such as promotional campaign details, product guidelines, or quick tips for the week --- customized by her admin team.

- Finally, Mary checks the ***Reports and Dashboards*** section. Here, she can access interactive charts and tables --- such as territory performance or engagement trends --- giving her a data-driven perspective on her progress and opportunities.

- By starting her day on the Home Page, Mary gets a clear overview of her priorities, quick access to the right tools, and the ability to take immediate action --- all in one place.

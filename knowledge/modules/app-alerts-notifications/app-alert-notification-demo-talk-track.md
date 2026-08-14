### App Alerts Overview 📣

App Alerts is a feature within the AFLS for Customer Engagement that provides

**timely, contextual, and actionable messages** to field users like sales reps and medical science liaisons, helping them stay informed and act efficiently within their daily workflows^111111111111111111111111111111111^. This framework helps to reduce missed opportunities and cognitive overload by delivering insights directly where users are working, whether on the web or mobile platforms^222222^.

App Alerts are served in different contexts, including:

- **Global**: Appearing across the app, such as on the home page^3333^.

- **Tab-Level**: Specific to a particular tab within the application^4444^.

- **Record-Level**: Displayed only on a specific record page, like an account or a visit record^555555^.

There are also different types of alerts to help users focus on what\'s most relevant^666^:

- **Notifications**: Informational updates^7^.

- **Recommendations**: Suggestions for actions or follow-ups^8^.

- **Guided Actions**: Step-by-step guidance for specific workflows^9^.

- **Announcements**: Home office messages or marketing updates, which are separate from other alerts and appear on the home page^10^.

### Admin Walkthrough: Creating an App Alert 🛠️

As a business admin, you\'re responsible for configuring and managing app alerts to ensure the right information reaches the right users at the right time^11111111^.

#### Data Model

The App Alerts feature uses a data model with several key objects^12121212^:

- **App Alert**: A custom object for creating messages that can be displayed at a global or tab level^13^.

- **Record Alert**: An extension of the standard Salesforce object, this is used for alerts that are specific to a particular record^14141414^.

- **App Alert Territory**: This object defines visibility rules, ensuring that an alert is only seen by users in a specific territory^1515^.

- **App Alert User Response**: This captures user interactions with an alert, such as whether it was read, dismissed, or resolved^1616^.

#### Alert Creation

To create an App Alert, you must follow a few key steps:

1.  **Populate Required Fields**: Enter the **Subject** and **Message** for the alert. The\
    **Message** field supports plain text, while the **Additional Message** field uses a JSON format to include advanced features like deep links and actions. ^17^

2.  **Choose the Alert Type**: Select the **Type** of alert, such as Notification, Recommendation, or Guided Action. Announcements are for home office messages shown on the homepage^18^. Guided Actions do not have a dedicated tab on the web and appear under the Notifications tab.

3.  **Define Display Context**: The **Display Context Type** field determines where the alert appears.

    - **Global**: The alert will be visible across the app wherever the App Alert feature is supported^191919^.

    - **Tab**: The alert will appear on a specific tab, which you must specify in the **Display Context Name** field^202020^.

    - **Object**: The alert will show on all records of a particular object. You\'ll specify the object\'s name in\
      **Display Context Name**^21^.

    - **None**: The alert will appear on the Home page.

4.  **Set Dates**: The **Effective Date** and **Valid Until Date** control how long the alert is active^22^. On mobile, Notifications and Recommendations have a 7-day visibility limit, while Guided Actions and Announcements stay until dismissed or expired. On the web, alerts remain until the valid date or until they are dismissed.

5.  **Add Actions**: The **Additional Message** field, formatted in JSON, can include:

    - **HTML Tags**: Allows for basic formatting in the alert message.

    - **Deep Links**: These are clickable buttons that can navigate users to other parts of the app (e.g., a specific record or tab), or to external websites^23232323^.

    - **Dismiss/Resolve Actions**: These give users a way to close the alert when it\'s no longer needed. The user\'s response can be captured in the App Alert User Response object^24242424^.

6.  **Set Visibility**: Link the alert to an **App Alert Territory** record to control who can see it based on their assigned territory^25252525^. This helps to reduce \"noise\" by ensuring that only relevant alerts are shown^26262626^.

#### Record Alerts

To create an alert for a specific record, such as a particular HCP account, you\'ll create a

**Record Alert**^27272727^. This is done by selecting the appropriate object and record in the \"What Record\" fields^28282828^.

### User Walkthrough: Experiencing App Alerts📱

As a field user, app alerts provide you with a single, unified experience for staying on top of your daily tasks and updates^29^.

#### Home Page and Global Alerts

When you log in, you\'ll see a notification bell icon, which indicates the number of unread alerts. On the home page, you may also see a dedicated Announcements section for important home office communications. Tapping the bell icon opens the **Notification Pane**, where you can filter alerts by type:

- **Alerts**: General notifications^30^.

- **Recommendations**: Suggested actions^31^.

- **Guided Actions**: Tasks that require a specific sequence of steps^32^.

#### Contextual Alerts

App Alerts are designed to be contextual, meaning they appear where they are most relevant^333333^.

- **Tab-Level Alerts**: If you navigate to a specific tab, like \"Content,\" you may see alerts that are only relevant to that tab.

- **Record-Level Alerts**: When viewing a specific account or visit record, the notifications displayed will be tailored to that particular record^34^. For example, on a visit record, you might see an alert with a deep link to schedule a new visit.

#### Taking Action

App Alerts are not just for information; they are designed to be actionable^353535353535353535^.

- **Deep Links**: Alerts can contain buttons or links that navigate you directly to a relevant page within the app or even to an external website, such as a research paper.

- **Quick Actions**: Some alerts may have buttons that launch a specific workflow or quick action, like planning a visit with a pre-populated account.

- **Dismissing/Resolving**: You can interact with an alert by dismissing it or marking it as resolved, with the option to provide a reason for doing so. This interaction is tracked and removes the alert from your view.

### Web Interface Differences 💻

While App Alerts are available on both web and mobile, there are some key differences in functionality^36^:

- **Actionability**: On the web, alerts are primarily informational.\
  **Actionability,** such as deep links to in-app tabs or quick actions, is not currently supported^37^.

- **Guided Actions Tab**: The \"Guided Actions\" tab does not exist on the web. Instead, alerts of this type will appear in the \"Notifications\" tab.

- **Filtering**: The notification widget on the web homepage allows you to filter between \"Notifications\" and \"Recommendations\"^38^.

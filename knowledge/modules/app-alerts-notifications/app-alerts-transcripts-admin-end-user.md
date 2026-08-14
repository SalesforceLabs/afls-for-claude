- Hello everyone, I'm Rebecca Wang and I'm a product manager of AFLS. Today I'll walk you through the **data model and setup objects** that power the **App Alerts** module in AFLS for Customer Engagement.

- The purpose of App Alerts is to deliver **timely, contextual messages** directly where users work---so they can stay informed and follow up **without breaking their flow**.

- At the data model level, we use two core entities --- App Alert and Record Alert. We extend the standard Salesforce Record Alerts, and introduce a new App Alert entity to support broader Life Sciences Commercial use cases. They share a similar structure, but they **differ in where they appear**:

  - **Record Alerts** appear **only on a specific record page**---for example, a particular HCP account or a specific Visit.

  - **App Alerts** are **more flexible**---they can appear on a specific tab, and even at a **broader app level**.

- App Alert Territory is used to define visibility rules based on the user\'s assigned territories --- so a rep in Territory A only receives alerts relevant to their region or market context.

- Finally, **App Alert User Response** captures **user interaction** with each alert at the user level---such as **read vs. unread**, **dismissed** or **resolved**, along with any **feedback** the user provides.

- Now let's walk you through on how to create an app alert as an admin user.

  - First of all, populating the required subject field

  - Next, you'll see two similar fields: **Message** and **AdditionalMessage**. Here's the difference: **Message** only supports plain text. **AdditionalMessage** takes JSON, so you need to enter it in the correct JSON format. On the web, AdditionalMessage isn't supported, so it won't display. For web alerts, only the **Subject** and **Message** fields show up.

  - Inside that JSON, there are three parts: **message**, **tags**, and **actions**.

    - For **messages**, you can use basic HTML tags, so you could include something like a clickable URL or a deep link right in the text.

    - For **tags**, it's simple --- just list all the tags separated by commas that you want users to see.

    - Then we have **actions**. In the JSON, this is where you define what the alert lets the user do. We support two main types: **deep link actions** and **resolve or dismiss actions**.

      - Let's start with **deep link actions**. These are clickable buttons in the alert that take the user somewhere. For example,

        - they can open a specific **tab** inside the app,

        - they can navigate directly to a particular **AFLS4CE record**,

        - or they could launch an **AFLS4CE quick action**---and you can pass optional parameters along with it.

      - Deep links aren't limited to the app itself---they can also open **external apps** like Slack, or take you to **external websites** in a new browser tab.

      - Now, the other type is **resolve** or **dismiss** actions. These give users a way to close out the alert when it's no longer needed. When a user does that, we record the response in the **App Alert User Response** object---so you can track who dismissed it, who resolved it, and when.

        - You can customize the title of the action button, and optionally offer a **picklist of reasons** for dismissal---so when the user clicks these actions, they can select why, and that feedback is captured.

- Next, let's talk about the **type** of an App Alert. This field is used to **categorize** alerts, and it also controls which **tab** the alert shows up, so users can quickly find the right message. For App Alert use cases, there are **three types**: **Notification**, **Recommendation**, and **Guided Action**. On mobile, all three types are supported. On the web, the **Guided Action** tab doesn't exist---so if you create an App Alert as "Guided Action," web users will see it under the **Notification** tab instead.

  - You might also notice another type called **Announcement**. This one is different---it's for the **Home Office Announcements** widget on the Home page, not for App Alerts. So if you pick "Announcement" as the type, it will **not** appear in the Notification pane. Instead, it shows up only in the Home Office Announcements widget on the landing Home.

    - It works together with the **ImageURL** field, which is a field that is specifically for the same **Home Office Announcements** use case. And for App Alerts, you can just ignore this field, because **images aren't currently supported** in App Alerts.

  - The **type** is also tied to how long the alert stays visible.

    - For **Notification** and **Recommendation** on mobile, there's a **7-day limit**. If the difference between the **valid until** date and the **effective date** is less than 7 days, the alert disappears after the valid until date. Otherwise, it shows for a maximum of 7 days.

    - For **Guided Actions** and **Announcements**, there's no 7-day limit on mobile---they stay valid until date or until the user dismisses them.

    - On the web, there's no 7-day rule at all. Whether it's a Notification or Recommendation, the alert will appear once it's effective and will stay there until the valid date, or until the user dismisses it.

- Next, let's look at the **Display Context Type** and **Display Context Name**. These two fields, together with Record Alerts, control **where** users will see the alert. Here's how it works:

<!-- -->

- First is **Global,** if Global is picked, then the alert appears **across the AFLS4CE mobile app** anywhere the App Alerts feature is supported. It shows everywhere. But sometimes, you might want it to show only in a specific part of the app.

- Then you need to pick "**Tab**". If you choose "Tab," you also need to fill in the Display Context Name to tell the system which tab.

- Next for **Object**, it makes the alert visible on **all records of that object**. In this case, the Display Context Name should be the **object name**.

- And finally, if you don't select a value, the alert will appear on the Home page.

- Now, what if you want the alert to show up **only on one specific record**? For example, maybe you have a suggestion that's only for **Dr. Aaron Morita** and not for **Dr. Alan Reich**.

  - In that case, you'd create a **Record Alert** for that specific record page. In the record alert creation, select the object, and then select the record Id so that the record alert will be created for that particular record page.

<!-- -->

- And finally, we need to go to the related list, and add the app alert user territory record to make sure the alert is shared with the right audience.

- That's all for **App Alert data creation**. As an admin, except for creating your App Alert, also please make sure the **required mobile DB schemas** are activated for the profile you want. And also ensure the **relevant trigger handlers** are enabled.

- And that brings us to the end of the **App Alert admin flow**. Thanks for watching

Mobile End User

### **App Alerts Overview 📣**

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

### **Admin Walkthrough: Creating an App Alert 🛠️**

As a business admin, you\'re responsible for configuring and managing app alerts to ensure the right information reaches the right users at the right time^11111111^.

#### **Data Model**

The App Alerts feature uses a data model with several key objects^12121212^:

- **App Alert**: A custom object for creating messages that can be displayed at a global or tab level^13^.

- **Record Alert**: An extension of the standard Salesforce object, this is used for alerts that are specific to a particular record^14141414^.

- **App Alert Territory**: This object defines visibility rules, ensuring that an alert is only seen by users in a specific territory^1515^.

- **App Alert User Response**: This captures user interactions with an alert, such as whether it was read, dismissed, or resolved^1616^.

#### **Alert Creation**

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

#### **Record Alerts**

To create an alert for a specific record, such as a particular HCP account, you\'ll create a

**Record Alert**^27272727^. This is done by selecting the appropriate object and record in the \"What Record\" fields^28282828^.

### **User Walkthrough: Experiencing App Alerts📱**

As a field user, app alerts provide you with a single, unified experience for staying on top of your daily tasks and updates^29^.

#### **Home Page and Global Alerts**

When you log in, you\'ll see a notification bell icon, which indicates the number of unread alerts. On the home page, you may also see a dedicated Announcements section for important home office communications. Tapping the bell icon opens the **Notification Pane**, where you can filter alerts by type:

- **Alerts**: General notifications^30^.

- **Recommendations**: Suggested actions^31^.

- **Guided Actions**: Tasks that require a specific sequence of steps^32^.

#### **Contextual Alerts**

App Alerts are designed to be contextual, meaning they appear where they are most relevant^333333^.

- **Tab-Level Alerts**: If you navigate to a specific tab, like \"Content,\" you may see alerts that are only relevant to that tab.

- **Record-Level Alerts**: When viewing a specific account or visit record, the notifications displayed will be tailored to that particular record^34^. For example, on a visit record, you might see an alert with a deep link to schedule a new visit.

#### **Taking Action**

App Alerts are not just for information; they are designed to be actionable^353535353535353535^.

- **Deep Links**: Alerts can contain buttons or links that navigate you directly to a relevant page within the app or even to an external website, such as a research paper.

- **Quick Actions**: Some alerts may have buttons that launch a specific workflow or quick action, like planning a visit with a pre-populated account.

- **Dismissing/Resolving**: You can interact with an alert by dismissing it or marking it as resolved, with the option to provide a reason for doing so. This interaction is tracked and removes the alert from your view.

### **Web Interface Differences 💻**

While App Alerts are available on both web and mobile, there are some key differences in functionality^36^:

- **Actionability**: On the web, alerts are primarily informational.\
  **Actionability,** such as deep links to in-app tabs or quick actions, is not currently supported^37^.

- **Guided Actions Tab**: The \"Guided Actions\" tab does not exist on the web. Instead, alerts of this type will appear in the \"Notifications\" tab.

- **Filtering**: The notification widget on the web homepage allows you to filter between \"Notifications\" and \"Recommendations\"^38^.

Web End User

- Hello everyone. Today we'll look at **App Alerts on the web** through the lens of a pharma sales rep, Mary Beth, and see how app alerts keep her informed across the app.

- Mary lands on the **Home** **Page** and scrolls to the **App Alerts** widget. She can easily switch between the **Notifications** and **Recommendations** tabs to view different types of alerts. In **Notifications**, she reviews a territory alignment update and a few marketing announcements. After reviewing a few auto-updates, she taps **Mark as Read** and they clear from the widget.

- Mary then switches to **Recommendations** and sees guidance to reconnect with **high-priority accounts**---including **Dr. Aaron Morita** and **Bella Swan**.

- She opens Dr. Morita's profile. On Dr. Morita's Account page, the App Alerts component displays alerts specifically related to this account, which means the alerts shown here can be different from those on other account pages and from those on the Home page.

- Next, Mary opens a **Visit** with Dr. Morita. On the Visit record, App Alerts show items for this visit, giving her timely context right where she's working.

- That's App Alerts on the web end-to-end. Whether Mary is on Home Page, or on a specific record page, such as visit, account or other record pages, she gets the right updates where she's working---and quick tools like Mark as Read help her keep the container focused.

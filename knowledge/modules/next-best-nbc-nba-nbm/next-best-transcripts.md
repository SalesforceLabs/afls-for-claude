- Hi, everyone, I'm Rebecca Wang and I'm a product manager of AFLS. In this video, I'll walk you through how to set up the Next Best Action and how to **create the underlying data**.

- First, make sure to check the prerequisites. Verify that the correct **permission set** and **Apex class access** are assigned to the target users. Also, confirm that the required **trigger handlers** as well as mobile Db Schemas for Next Best Action are enabled. You can find details on these in the user guide. These are important to make sure the NBA works as expected.

- Next, we'll set the NBA widget on the Account profile page. Go to the Account record page, and open the Lightning App Builder, and then drag the custom Next Best Action component onto the page layout. Once it's placed and saved, remember to **activate** the page layout for the right apps and profiles.

- Now, let's talk about the data.

  - We don't ship a predictive AI model for Next Best Action out of the box. Instead, we provide a flexible **Life Sciences Next Best Action framework** --- which includes the data model and the UI. Customers can bring their own model, and load recommendation data into the NBA data model.

  - Customers can also use Salesforce extensibility, like the Data Cloud Einstein Studio, to customize a model and then load the recommendations into NBA.

    - We have a separate recording showing how to use Einstein Studio with Data Cloud to customize the model --- please refer to that if you need those details.

- In this recording, we'll simply go through creating an NBA record manually.

  - Before we do that, let's take a quick look at the data model. The core object is **Territory Account Recommended Action**. Each recommendation is at the **territory account level**, so it has a lookup to both the territory and the account. We support three types of recommended action, visit, email and managed event. However, meetings and events are not part of the GA release.

> This means that from an end-to-end user flow perspective, they won't work as expected and should not be included in your live setup.

- Now, let's jump back to creating a Territory Account Recommended Action record.

  - You need to fill in the account, the territory.

  - For the action type, you have the choice of visit and email on 258. Again, managed Event is not available on 258, so please ignore it for now. Also please note --- we don't support sending emails from Next Best Action on the web. On the web, users can only **view** email recommendations from the NBA sequence; they cannot start an email action there.

  - Finally, set the **Due Date**.

  - The skip reason and the action reference record fields will be populated automatically if a user skips the action from their side, or if they create the action directly from the NBA sequence.

    - Skip reason is a dynamic picklist. You can define and manage the picklist values from Object Manager. These are the reasons where the end users will see and choose from when they skip an action.

<!-- -->

- That's the basic admin flow for Next Best Action --- check the prerequisites, place the widget, and load your recommendation data either manually or from your own model.

Admin NBC

- Hi, everyone, I'm Rebecca Wang and I'm a product manager of AFLS. In this video, I'll walk you through how to set up the Next Best Customer and how to **create the underlying data manually**.

- In the video, we'll cover two main parts: the Next Best Customer configuration and setup, including the Top 5 NBC widget on the Home page and the predefined NBC filter, and then the manual data creation process.

- Let's start with the **Top 5 Next Best Customer** widget on the Home page. This widget gives reps a quick view of their highest-priority accounts in their territories.

  - First, we need to add the **Top 5 Next Best Customer** widget to the Home page. In the Lightning App Builder, you can add the NbcTopResults custom component into the home page. Once it's placed and saved, remember to **activate** the page layout for the right apps and profiles.

  - Next, we could add the **quick actions** that appear inside the custom rationale popup when a user clicks on an account. To set them up, go to the **Custom and Quick Action Administration** in the admin console, and create new quick actions for the Next Best Customer popup.

    - In the **Location** field, select **Next Best Customer**, and for the **Action**, choose the quick action you want to show.

    - Fill in the other fields based on your business needs, then click **Save**.

    - After saving, remember to **generate the metadata cache** so the changes take effect on mobile.

  - While you're still in the popup settings, you may also want to enable the **score history chart** so users can see how an account's score has changed over time.

    - To do this, turn on **field history tracking** for the **Score** field on the **TerritoryAccountScore** object.

  - Finally, make sure all **mobile DB schemas** related to Next Best Customer are enabled for the intended users so the data is available in the mobile app.

- The Top 5 widget is perfect for quick insight, but sometimes reps want to explore the **full list** of recommended accounts. That's where the **predefined NBC filter** comes in.

  - The 1st step is to enable the predefined NBC filter. To do so, go to the Lists & Filters admin setting, and enable the option **"Let users view the Next Best Customer filter."**

  - Here, you can also set the **Days to Mute** value.

    - This controls how long a snoozed account will stay hidden from the NBC list. After the set number of days, the account will automatically reappear so the rep can re-engage if needed.

- Now that the configuration is in place, let's move on to the data creation.

- We don't ship a predictive AI model for Next Best Customer out of the box. Instead, we provide a flexible **Life Sciences Next Best Customer framework** --- which includes the data model and the UI. Customers can bring their own model, and load recommendation data into the NBC data model.

  - Customers can also use Salesforce extensibility, like the Data Cloud Einstein Studio, to customize a model and then load the recommendations into NBC.

    - We have a separate recording showing how to use Einstein Studio with Data Cloud to customize the model --- please refer to that if you need those details.

- In this recording, we'll simply go through creating an NBC record manually.

  - Before we do that, let's take a quick look at the data model. The core object is **Territory Account Score**. Each score record is at the **territory account level**, so it has a lookup to both the territory and the account.

  - Now, let's jump back to creating a Territory Account Score record.

    - We need to ​​populate the **Account**, **Territory**, **Total Score**, and **Rank** fields.

    - If you want users to see **explanations** for why an account is ranked the way it is, also fill in the **Score Explainability Info** field. This field takes **valid JSON** with **three sections**: scores, metrics, and optional customLabels.

      - Score lists **each metric's numeric score**. The **sum of these numbers** is supposed to be the **Total Score** field on the record.

      - **Metrics** - this section is for the explanation text of each metric, and it only takes integer or string values here. What the user sees in the UI as the explanation comes from here.

      - Finally the optional **custom labels**, this is the **display name map** - If you're using **custom fields** as metrics and want a cleaner label in the UI, define a **friendly label** here.

- That's the basic admin flow for **Next Best Customer** --- add and configure the Top 5 widget on Home Page, enable and set up the predefined NBC filter, and create Territory Account Score records manually. Thank you for reading.

Admin NBM

- Hi everyone, I'm Rebecca Wang, a product manager for AFLS.

- In this video, I'll walk you through how to set up **Next Best Message (NBM)** and how to create the underlying data that powers the feature.

- From a setup perspective, NBM is straightforward. The first step is to check the **prerequisites** --- verify that the user has access to the **TerritoryAcctProdMsgScore** object so they can view and act on the recommendations.

  - Once NBM data is created and shared with the user, a **Recommendation** section will automatically appear on the **Edit Visit** page.

  - And if no recommended message or content data exists, then this section will not be visible to the user.

- Now, let's talk about the data.

  - Just like Next Best Action and Next Best Customer, we don't ship a predictive AI model for NBM out of the box. Instead, we provide a flexible **Next Best Message framework** --- which includes the data model and the UI. Customers can bring their own model and load recommendation data into the NBM data model.

  - Customers can also take advantage of Salesforce extensibility --- for example, using **Data Cloud Einstein Studio** to build a custom model and then load recommendations into NBM.

    - We have a separate recording that walks through how to use Einstein Studio with Data Cloud to do this --- please refer to that if you need more details.

- In this recording, we'll simply walk through creating an **NBM record manually**.

  - Before we do that, let's take a quick look at the data model.

  - The core object is **Territory Account Product Message Score**. Each recommendation exists at the territory--account--product level. This object looks up to Territory, Account, Product Guidance, and Product.

    - **Product Guidance** can be of different types, including *message* and *objective*. For Next Best Message, we only use the *message* type --- objectives are not included here.

    - **Product** looks up to both **Life Science Marketable Product** and **Product2**.

  - Now, let's jump back to creating a **Territory Account Product Message** record.

    - To do so, we need to go to the **Territory Account Product Message** first.

    - You'll need to fill in the **account**, **territory**, **total score**, and **rank**.

    - Then, select the **product guidance** you want to recommend. Once product guidance is populated, the linked product is automatically filled in the product field.

    - If you want users to see the rationale behind a recommendation, you'll also need to populate the **Score Explainability Info** field. This field takes valid JSON with a very simple structure, and you just need to list the metrics with their values that are separated by commas.

  - After you've manually created the **Territory Account Product Message Score** record, don't forget to **share it with other users** so they can consume it in their workflows.

- That's the basic admin flow for **Next Best Message**: check object access, and load your recommendation data --- either manually, or from your own model. Thank you for watching.

Mobile NBC End User

- Hello everyone. Today we'll look at **Next Best Customer** through the lens of a pharma sales rep, Mary Beth, and see how NBC helps her identify and focus on the right accounts across her territory.

- Mary lands on the **Home Page** and scrolls to the **Top 5 Next Best Customer** widget. Here, she can see her top five recommended accounts, each with a **rank**, a **score**, and the **distance** from her current location. Within each row, there's a **Visit quick action**, allowing Mary to schedule a visit directly from here without leaving the widget.

- From this list, Mary sees that her top recommendation today is **Dr. Aaron Morita**.

  - She can click the hyperlinked account name to go straight to his **account profile**,

  - Or tap anywhere else on the row to open a **custom popup**. This popup explains why Dr. Morita is the top recommendation in her territory.

    - At the bottom, it lists all the **weighted factors** that contributed to his ranking, helping Mary understand the full context and make confident decisions.

    - At the top, she can also see the **score change history** and some **basic account information**.

      - With all of this key information in front of her, Mary can start engaging right away. From the popup, she can **schedule a new visit**, **start a presentation**, **view the last completed visit record**, or **open the full profile** in the online Salesforce view.

      - And similar to the home page list view, the account name here is also clickable, and clicking the name will take Mary to the corresponding account profile directly.

- Now you may be wondering --- what if Mary wants to explore more NBC recommendations beyond her top five? She heads to the **Account Search** screen and applies the **predefined NBC filter**. Right away, she sees a **full list** of recommended accounts for her territory, sorted by **score** and **rank** by default. If she wants a different view, she can simply switch to another **sorting option** --- for example, NBC distance or some other criteria.

  - From this list view, Mary can also **snooze** an account that she feels isn't relevant right now by turning on the **Snooze toggle**. Once an account is snoozed, she can hide all snoozed accounts to keep her list clean and focused. And if she changes her mind, she can easily bring those snoozed accounts back with just one click. The snoozed account will be back to her list after a number of mute days defined by the admin user.

  - From the same NBC filter, Mary can switch over to **Map View**. This gives her a visual layout of her recommended accounts, making it easy to plan her day's route and see which accounts are near each other.

- That's how Mary uses **Next Best Customer** to prioritize her day --- helping her stay focused, understand the full picture, and take the right actions to drive stronger customer engagement immediately.

Web NBC End User

- Hello everyone. Today we'll look at **Next Best Customer** through the lens of a pharma sales rep, Mary Beth, and see how NBC helps her identify and focus on the right accounts across her territory.

- Mary lands on the **Home Page** and scrolls to the **Top 5 Next Best Customer** widget. Here, she can see her top five recommended accounts, each with the **rank** and the **score**.

- From this list, Mary sees that her top recommendation today is **Dr. Aaron Morita**.

  - Mary taps Dr. Morita from the list to open the **custom popup**. This popup explains why Dr. Morita is the top recommendation in her territory.

    - In the **Major Intelligent Insights** section, it lists all the **weighted factors** that contributed to his ranking, helping Mary understand the full context and make confident decisions.

    - At the top, she can also see basic account information.

    - If Mary wants to learn more about Dr. Morita and get the full picture, she can tap the **account name** to navigate directly to the **account profile page**.

- Mary also wants to make sure she can see **distance information as well as visualize the account on the account map** from her iPad. To do this, she needs to go to the **account contact point address** record and manually update it so that **geolocation information** is captured. This ensures distance data will display correctly and be available for use in **Map View**.

- That's how Mary uses **Next Best Customer** to prioritize her day --- helping her stay focused, understand the full picture, and take the right actions to drive stronger customer engagement immediately.

Mobile NBA End User

- Hello everyone. Today we'll look at **Next Best Action on mobile** through the lens of a pharma sales rep, Mary Beth, and see how NBM helps her deliver the right message during each customer interaction.

- Mary starts her day on the **Home Page**. Using **Next Best Customer**, she identifies that **Dr. Aaron Morita** is one of her highest-priority accounts. She taps his name and she goes to Dr. Morita's **account profile**.

- On Dr. On Morita\'s account page, Mary sees the **Next Best Action** dashboard. This widget shows a **weekly sequence** of recommended actions for this account. Each action is either a **visit** or an **email** suggestion to help her maintain consistent engagement.

- For the **current week**, Mary noticed that she has two recommendations, one is to schedule a visit with Dr. Morita, and the other one is to send an email.

  - Mary takes action right away. She taps **Start Visit** to create a new visit record directly from the NBA widget. Once the visit is created and saved, she returns to the widget and sees that the recommendation is now marked as completed. She could always check the visit record by clicking "View Visit" directly from here.

  - If an action doesn't feel relevant right now, Mary can **skip it and optionally select a reason** from the provided list.

    - She can only skip actions for the **current** or **past recommendations** --- future recommendations can't be skipped in advance.

  - Once all recommended actions for the week are either completed or skipped, the week will be marked as **"All activities have been completed"**.

- To see the bigger picture, Mary taps **View Full Sequence**. This shows her the recommended actions planned for upcoming weeks, so she can prepare in advance and understand the intended engagement cadence.

- That's how Mary uses **Next Best Action** --- starting from identifying the right account in NBC, moving into the account profile to see a tailored weekly action plan, and then completing the recommended engagement actions to keep her on track.

Web NBA End User

- Hello everyone. Today we'll look at **Next Best Action on the web** through the lens of a pharma sales rep, Mary Beth, and see how NBA helps her decide the right next step for each of her priority accounts.

- Mary starts her day on the **Home Page**. Using **Next Best Customer**, she identifies that **Dr. Aaron Morita** is one of her highest-priority accounts. She taps his name and she goes to Dr. Morita's **account profile**.

- On Dr. On Morita\'s account page, Mary scrolls down and sees the **Next Best Action** widget. This widget shows a **weekly sequence** of recommended actions for this account. Each action is either a **visit** or an **email** suggestion to help her maintain consistent engagement.

- For the **current week**, Mary noticed that she has two recommendations, one is to schedule a visit with Dr. Morita, and the other one is to send an email.

  - Mary takes the visit recommendation right away. She taps **Start Visit** to create a new visit record directly from the NBA widget. From the visit edit screen, she checks everything is correct, and she **clicks the Save**.

  - Once the visit is created and saved, she returns to the account profile and sees that the recommendation is **now marked as completed**. She could always check the visit record by clicking "View Visit" directly from here.

  - For the other recommendation of email, through web Next Best Action, **launching email is currently not supported**, and we can only view the email recommendation or skip it. Now as the end user Mary, we can **skip it and optionally select a reason** from the provided list

    - She can only skip actions for the **current** or **past recommendations** --- future recommendations can't be skipped in advance.

  - Once all recommended actions for the week are either completed or skipped, the week will be marked as **"All activities have been completed"**.

- To see the bigger picture, Mary taps **View Full Sequence**. This shows her the recommended actions planned for upcoming weeks, so she can prepare in advance and understand the intended engagement cadence.

- That's how Mary uses **Next Best Action** --- starting from identifying the right account in NBC, moving into the account profile to see a tailored weekly action plan, and then completing the recommended engagement actions to keep her on track.

Mobile NBM End User

- Hello everyone. Today we'll look at **Next Best Message** on mobile through the lens of a pharma sales rep, Mary Beth, and see how NBM helps her deliver the right message during each customer interaction.

- Mary starts her day on the **Home Page**. Using **Next Best Customer**, she identifies that Dr. Aaron Morita is one of her highest-priority accounts. She taps his name and goes to Dr. Morita's account profile.

- On Dr. Morita\'s account page, Mary sees the **Next Best Action** dashboard, where she notices one of her recommended actions this week is to schedule a visit with Dr. Morita.

- Mary accepts the suggestion and taps **Start Visit** to launch the visit Edit page directly.

  - Inside of the visit, Mary could see the **Recommendation section**.

    - Here, she could see both the recommended message as well as recommended content tailored and relevant to Dr. Morita.

  - If she wants to understand more, she can tap **See Why** to review the rationale behind the recommendation.

  - Once Mary is confident and trusts the guidance, she **taps the "+"** to add the **product along with the recommended message** into her visit notes.

- By the end of the visit, Mary has not only **prioritized the right customer** with NBC, but also followed the **recommended engagement plan** through NBA, and delivered the right product message guided by NBM.

- That's how the Next Best capabilities come together --- helping Mary and her team focus on the right accounts, take the right actions, and deliver the right messages at the right time.

Web NBM End User

- See the visit management web recording (3:35 - 3:55)

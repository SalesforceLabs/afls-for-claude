Welcome to this video series on Content Management in AFLS.

In this video, I'll guide you through how to work with content in AFLS and show you how to create a highly personalized and relevant experience --- one that adapts to each HCP's unique needs and profile, while maintaining full compliance with industry regulations and standards.

AFLS supports two content types:

- HTML presentations, for more interactive content , supporting JavaScript functions , Embedded videos, images, animations, or dynamic capabilities.

- PDF presentations

Important note here is that content must follow the AFLS format before it is pushed into AFLS.\
We are going to provide you with content guidelines for creating content supported in AFLS. These guidelines will outline the standards and best practices to ensure compatibility, and optimal performance across the platform.

Content is stored directly in Salesforce's native file storage, ensuring a seamless and secure experience:

- Files are encrypted, versioned, and governed by Salesforce's built-in permission model.

- No need for external storage configuration --- everything works out-of-the-box in Salesforce.

- Storage is included with Salesforce licenses. It can be extended if needed.

- All content storage follows Salesforce's security and data protection standards.

Moving to the iPad now

- I know I'll be meeting Dr. Morita later today, and I want to start with his account context already in place.\
  I open the Account List, I see my doctor Aron Morita , from the quick actions here I go to the Content Library.

- This approach is powerful because it allows me to start with Dr. Morita's context from the very beginning --- which is ideal for delivering a personalized and relevant experience.

- since I'm viewing the library within Dr. Morita's account, all content is automatically filtered and tailored specifically for him.\
  The library is fully contextualized, showing me only the most relevant materials to guide our upcoming interaction.

- Within this view, I can immediately see Recommended Presentations, like Cordim and this other one Life Science Cloud Customer Engagement.

- These presentations are designed to drive personalization and engagement by suggesting the most relevant content for my upcoming interaction.

- Alongside the recommended content, I could also see Targeted Presentations if configured, which are specifically selected and assigned to Dr. Morita based on account visibility business rules.

- These are typically strategic materials that must be shared with certain HCPs or accounts to ensure the right information is delivered to the right audience

# 

## Demo Script: Personalized Content Experience with Cordim

Context:\
I'm going to use *Cordim*, an imaginary product or brand for hypertension, to demonstrate how Intelligent Content can deliver a highly personalized, interactive experience for HCPs.

### 1. Launching the Content (Dr. Morita example)

> Let's start by opening Cordim presentation.\
> As soon as I launch it, notice how the system automatically pre-populates Dr. Morita's information.
>
> Here, you'll see Dr. Morita's name displayed directly within the presentation, making the interaction feel more relevant and personalized to him.
>
> There's no need to manually search or add him --- he's pulled directly from the account data.\
> If we check the account card, we can see that Dr. Morita is already linked to this presentation.

### 2. Dynamic, Personalized Elements

The content itself can also adapt dynamically.

OPEN first slide:

- We can go even further by pulling in other attributes, like specialty, therapeutic interests, or past engagement data --- all stored in the database.*\
  \*
  For example, if Dr. Morita is a cardiologist, the page could automatically adjust to show more detailed, cardiology-specific information.\
  Or, if I'm presenting to a general practitioner, it could show a higher-level overview instead.

- Let me show you, I have this quick toggle here for demo purposes, but in the real life the content would adapt automatically, to adapt to the HCP that is seing the content and show only the relevant information for him.

- So as you can see the presentation can adapt in real time to adapt to the HCP that is seing the content and show only the relevant information for him.

OPEN SECOND Page:

- The same content can also adapt to the account's region and preferred language.\
  Here, the page automatically switches between US/Mexico and English vs Spanish, depending on the account's settings.

- The base content remains the same, but the experience becomes personalized in real time---without the rep needing to manually switch different versions.

- This personalisation ensures that the content shown is tailored to each HCP's needs, making interactions more meaningful and targeted.\]

- I can also send a specific follow-up email directly from within the content.\
  For example, let's say Dr. Morita is interested in learning more about what we're discussing --- like a new hypertension study with additional data.

- All I need to do is tap on the email icon right here.\
  A predefined template automatically opens, with Dr. Morita's details already filled in.

- This way, I don't have to leave the presentation or break the flow of the conversation.

- I can send the follow-up instantly, making it highly contextual and efficient, since everything happens right here in one seamless experience.

Navigation:

- While presenting, I can easily navigate through slides by swiping left or right.\
  If the content has an internal navigation bar, I can use that too.

- Another option if I need to jump quickly to a specific slide, I can open the Menu Player using this visual indicator or a gesture set by the Admin.

- As I mentioned earlier, everything shown is being captured by the system.

OPEN SURVEY PAGE.

- We also support embedded surveys, which allow me to capture feedback directly within the content.

- These surveys can be contextual and tied to the specific content or products being presented, ensuring the feedback is both relevant and actionable.

GO TO CHART:

- While navigating, I can engage with interactive elements like this chart.

- I can even hand over my iPad to Dr. Morita and lock the screen so he can interact freely . This locks the app to just the player, preventing access to other features.

PLAY VIDEO:

I can even play embedded videos --- like this one showing disease prevalence.

OPEN FEEDBACK PAGE:

- We can also update the HCP profile directly from within the content, capturing preferences or responses in real time.

- This ensures that future interactions are even more personalized and relevant, without requiring any extra steps from the rep

CONCLUSION:

- All of this is possible because AFLS fully supports dynamic and interactive content capabilities.

- With dynamic variables, presentations can automatically pull in account details, HCP profiles, product data, and more, enabling real-time personalization. Content can even query the database to fetch the latest information and, when needed, update records instantly based on interactions during the call --- keeping data accurate and current.

- This allows every presentation to be adapted to the specific account or HCP, delivering a highly relevant, tailored experience.

SOME CAPABILITIES FROM THE PLAYER:

- Another key capability is the ability to switch content on the fly.

- Now, if I'm presenting Cordim for hypertension and Dr. Morita asks about Immunexis, I can simply open the Menu Player and switch presentations instantly --- without navigating multiple screens or breaking the flow.

- This keeps the conversation seamless and focused on delivering the right information at the right moment.

- From here, I can also:

  - Quickly see all the pages of the current presentation,

  - Access my entire content library to switch presentations on the fly, depending on how the conversation evolves,

  - Open my Favorites for quick access to frequently used content,

  - And apply filters, such as Recommended or Targeted content, to narrow down what I see.

- Before to jump into another presentation, let me quickly show you something.

Mandatory Pages -- Cordim Safety

- Some presentations contain mandatory pages that must always be shown to the HCP to ensure compliance.\
  For example, in the Cordim presentation, the Safety Information page is marked as mandatory.

- You'll notice a red icon indicating the mandatory page that helps me quickly identify that this page must be presented before I can proceed.

- If I try to open another presentation or go to the visit screen without showing the mandatory page, the system will prevent me from continuing.

- So I selec it and launch it.

- This ensures that critical information, like safety disclosures, is always delivered and discussed before the interaction is completed.

Now, all I need to do is tap Visit, to create/save the Visit, review All key information --- including the account details and content presented has been automatically populated.

I tap Save, making it quick and efficient to document the call while ensuring accuracy and compliance.

### Consent Management Feature Demo Talk Track

This talk track outlines a demo of the Consent Management feature within the Life Sciences Commercial app, detailing both the administrative setup and the end-user experience on a web browser and an iPad. The goal of this feature is to help organizations capture, sync, and honor the communication preferences of healthcare professionals (HCPs), ensuring compliance with data privacy regulations.

### 1. Introduction to Consent Management

- **What it is:** Consent Management is a feature designed to capture, sync, and respect the communication preferences of HCPs for different subscription types and channels. It helps your organization comply with data privacy regulations by targeting outreach only to HCPs who have provided their consent.

- **Availability:** The feature is available in **Lightning Experience** and **AFLS**. For setup, it requires Enterprise and Unlimited Editions with AFLS and the AFLS for Customer Engagement Add-On license.

### 2. The Consent Management Data Model

The feature uses a data model to store and make data interoperable. The following key objects are involved:

- **Communication Subscription:** Represents a subscription topic for which consent is collected.

- **Data Use Purpose:** Links a Communication Subscription to a Life Sciences Marketable Product.

- **Engagement Channel Types:** Represents the communication channels used for collecting consent (e.g., Email, SMS).

- **Communication Subscriptions Channel Types:** A junction entity that maps engagement channels to communication subscriptions.

- **Compliance Statement Definition:** Stores the disclaimer and terms and conditions shown on the consent screen.

- **Communication Subscription Consent:** Represents an HCP's consent for a specific subscription, channel, and channel preference.

- **Communication Subscription Compliance Snapshot:** Stores the compliance history, including the accepted disclaimer, terms, and conditions, a link to the digital signature, and any account/territory restrictions in place at that time.

- **Contact Point Objects:** Objects like **Contact Point Address**, **Contact Point Phone**, **Contact Point Email**, and **Contact Point Social** can be associated with a consent record.

- **Digital Signatures:** Represents the signature captured when an HCP submits the consent screen.

### 3. Administrative Setup

The consent manager or a Life Sciences Commercial Admin needs to configure several settings and entities.

#### Setting Up the Data

1.  **Add a New Communication Subscription:** Create a Communication Subscription record to add a new subscription topic. You must select a **Data Use Purpose**, which links the subscription to a Life Sciences Marketable Product.

2.  **Create a Data Use Purpose Record:** This associates a Life Sciences Marketable Product with a Communication Subscription, helping to manage and organize consents for specific products. You\'ll select \"Life Sciences Marketable Product\" from a dropdown and search for the corresponding product record.

3.  **Add a New Engagement Channel Type:** Create a new Engagement Channel Types record to make new communication channels (e.g., Direct Mail) available on the consent capture screen. You must specify the **Contact Point Type** (e.g., Email, Phone) and set the channel to **Active**.

4.  **Add a Channel to the Subscription:** Create a Communication Subscription Channel Types record to add a new communication channel (like Email or SMS) to a subscription. This defines the channels HCPs can choose from.

#### General and Filtering Settings

1.  **Access the Admin Console:** Navigate to the **Admin Console** from the App Launcher and select **Consent Management**.

2.  **General Settings:**

    - Enable users to add multiple values for consent channels.

    - Allow users to select \"Not Asked\" as a consent status.

    - Configure signature requirements (Required, NotRequired, Optional).

    - Enable the capture of geolocation data during consent signing for an audit trail.

    - Configure attachment requirements for desktop and mobile consent capture.

3.  **Filtering Settings:**

    - **Subscription Filtering:** Filter which subscriptions appear for an HCP based on their account or territory attributes.

    - **Disclaimer/Terms & Conditions Filtering:** Filter the disclaimer and terms and conditions text based on account or territory fields.

#### Adding the Consent Tab to Account Pages

To provide a central location for reps to view and update an HCP\'s consent, you must add a custom Consent tab to the account\'s record page.

1.  Go to an **Accounts** record page in the **AFLS for Customer Engagement** app.

2.  Click the gear icon and select **Edit Page**.

3.  Click the **Tabs** component and then **Add Tab**. Label it \"Consent\".

4.  Drag the **Consent** component onto the new tab.

5.  Drag the **Related List - Single** component onto the tab and select **Communication Subscription Consents** from the Related List field.

6.  **Save** and **Activate** the page as the org\'s default.

### 4. Consent Capture End-User Experience

The Consent tab gives sales reps a consolidated view of an HCP's subscriptions, channels, and acknowledgements, allowing them to keep consent information accurate and up-to-date.

#### On a Web Browser

1.  **View Consent Status:** Navigate to an HCP\'s account record and click the **Consent** tab. The screen displays all available subscriptions and the associated channels. HCPs who have opted in are marked with a green checkmark, while those who opted out are marked with a red \'X\'. 2. **Update Preferences:** Click the **Edit** button to update preferences. You can choose to opt-in or opt-out for specific subscriptions and channels.

2.  **Manage Channels:** Click **Manage Channels** to map available contact points (e.g., a new phone number you added in the \"Related\" tab) to the channels.

3.  **Review and Agree:** Before saving, the rep can review the terms and conditions. The content of these terms can be filtered based on the HCP\'s location.

4.  **Attachments:** If the admin has configured it, the system may require an attachment. This is useful for uploading a scanned copy of a wet signature.

#### On an iPad

1.  **Access the Consent Tab:** Open the Life Sciences Commercial app on an iPad, navigate to an HCP\'s account, and tap the **Consent** tab. This provides a central location to see all subscriptions and communication channels. 2. **Capture Consent:** Tap **Capture Consent**. You can mark a channel as opted-in for all subscriptions at once or specify preferences for each subscription individually.

2.  **Digital Signature:** The HCP can provide a digital signature directly on the screen. The screen may be locked to prevent navigation to other parts of the app during this process. The signature is captured and stored with the consent record.

3.  **Reviewing History:** The rep can review the history of consent, including the status (Opt-in, Opt-out) and the capture source (Face-to-Face, Web). They can also view the captured signature from previous face-to-face interactions.

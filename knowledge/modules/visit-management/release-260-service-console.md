## Manage Visits from Service Console

Hello everyone. In this video, we are going to look at a powerful productivity enhancement for the Web experience in the Spring '26 release: Managing Visits from the Service Console.

This feature is for Inside Sales Representatives and Service Agents who typically operate in high-volume call center environments where efficiency is crucial. These users need to manage multiple visits, accounts, and cases simultaneously. In AFLS commercial application, creating a visit opens a modal window—a pop-up that blocks the rest of the screen. This makes it difficult to reference other data or multitask, leading to lost context and slower task completion.

To solve this, we have integrated Visit Management directly into the Service Console. Now Visit Engagement page opens in subtabs rather than blocking modal window. This allows users to juggle multiple records and maintain context across different interactions within a single workspace.

(Visual: Switch to Service Console Web Interface)

Let's see how this improves the workflow for Evan, our Inside Sales Representative

Evan is working in his Console app, a workspace designed for productivity. He navigates to Aaron Morita's account to log a new interaction, so he clicks 'New Visit'.

(Visual: Click 'New Visit' - highlight the tab behavior)

Notice the difference here: The visit component does not pop up in a blocking full screen window. Instead, it opens as a subtab right underneath Dr Morita's account tab.

This gives Evan true multitasking power. He can click back to the main Account tab to review the account information' and then immediately switch back to the Visit subtab to finish logging his visit details. He can even open a second account profile in a new primary tab without losing his draft for Dr.Morita. He maintains complete context throughout the interaction

(Visual: Switch to Salesforce Setup > App Manager)

Now, let's look at the configuration. Enabling this is very straightforward and utilizes the standard Salesforce App Manager.

**1st** **step** is to navigate to App Manager from Setup

**Then, **You can either create a new Lightning App (selecting 'Console Navigation') or edit the existing Console app your team uses.

**Go to** Navigation Item section, search for 'Visits' and add it to the 'Selected Items' list.

Once saved, the console application automatically handles the subtab behavior for the Visit object.

That is all it takes to provide your inside sales teams with a unified, high-efficiency workspace.

Thank you for watching.

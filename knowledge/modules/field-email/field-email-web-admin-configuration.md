Sep 11, 2025

## Meeting Sep 11, 2025 at 14:20 GMT+05:30

Meeting records [[Transcript]{.underline}](?tab=t.et52tmmjhcl3) [[Recording]{.underline}](https://drive.google.com/file/d/1-scCqwMKSzi-zHd9xrXZSSbBtvvJCuuq/view?usp=drive_web)

### Summary

Pawan Mehta demonstrated the new field email functionality for life sciences commercial users, enabling compliant email creation, management, and sending with predefined templates, accessible through the admin console within the CRM application. He detailed various settings, including general, delivery, language, and administrative tasks like email sending limits and job configurations. Pawan Mehta also explained the integration with account and consent management, mobile app integration, and comprehensive template configuration options, such as sender types, product linking, and communication subscriptions.

### Details

- **Field Email Functionality Overview** Pawan Mehta demonstrated the field email functionality, designed for business admins and field personas in the life sciences commercial domain, such as medical sales liaisons and key account managers. This feature empowers users to create, manage, and send compliant and streamlined emails leveraging predefined templates that support various content types, including images, text, and JavaScript functions, and enable direct CRM record upsertion ([[00:00:00]{.underline}](#section)). The design and creation of email templates occur outside the AFLS, typically by marketing or internal content teams, using HTML files uploaded as zip files, with comprehensive content guidelines provided ([[00:01:39]{.underline}](#section-1)).

- **Admin Console and Email Settings** Pawan Mehta explained that the functionality is accessed via the admin console within the CRM application, specifically through the \"Email\" tile ([[00:02:52]{.underline}](#section-2)). The settings for email functionality can be applied at the organizational, profile, or user level, with the demo focusing on profile-level settings. Key general settings include allowing sales representatives to change email subjects or add carbon copy recipients, and the ability to schedule emails for later delivery to healthcare practitioners (HCPs) or healthcare organizations (HOs) ([[00:04:06]{.underline}](#section-3)).

- **Delivery and Language Settings** Pawan Mehta elaborated on delivery settings, such as enabling sales representatives to send emails to HOs in addition to HCPs ([[00:05:06]{.underline}](#section-4)). A significant aspect of delivery settings involves consent management, where emails can be sent either \"unless recipient opted out\" (common in the United States) or only if the recipient has \"explicitly opted in\" (common in Europe) ([[00:06:21]{.underline}](#section-5)). Language filters are crucial for multilingual HCPs and HOs, allowing templates to be filtered based on account-specific or user-specific language preferences ([[00:07:42]{.underline}](#section-6)).

- **Administrative Tasks and Email Jobs** Pawan Mehta described administrative tasks, including setting email sending limits that trigger warnings on the email queue page when limits are approached. Other settings include batch sizes for sending emails (e.g., 20 emails at a time), retry attempts for failed emails (e.g., three times), and tracking details for status (e.g., opens, failures) and history retention ([[00:08:46]{.underline}](#section-7)). Email jobs, such as sending emails and fetching statuses, can be configured to run hourly, daily, weekly, or once, processing emails present in the queue ([[00:09:58]{.underline}](#section-8)).

- **Email Queue and Fragment Jobs** Pawan Mehta demonstrated the email queue, which displays various emails with their statuses, including retries, successes, and new unsent emails, noting that failures can occur if sending limits are crossed. Admins can manually trigger emails or investigate failure reasons to take corrective actions ([[00:11:09]{.underline}](#section-9)). Additionally, Pawan Mehta introduced fragment jobs, which enable the sharing of reusable components like paragraphs or images across different email templates ([[00:12:11]{.underline}](#section-10)).

- **Integration with Account and Consent** Pawan Mehta highlighted how the send email functionality and consent component are integrated within the account section. The system is configured to send emails only to individuals who have consented to a particular topic, such as \"email access\". They also mentioned that the custom send email button and consent component are added via the \"edit page\" functionality, with further details on consent capture being available in a separate video ([[00:13:20]{.underline}](#section-11)).

- **Mobile App Integration and Template Upload** Pawan Mehta explained the importance of creating a DB schema record for seamless data flow to the iPad application, ensuring the main CRM application works in tandem with the mobile app ([[00:14:55]{.underline}](#section-12)). To upload email templates, users access the email tile in the admin console, where they can add new templates by selecting a file, defining the subject, name, and relevant Salesforce topics for filtering ([[00:17:33]{.underline}](#section-14)).

- **Template Configuration and Consent** Pawan Mehta further detailed template configuration, including selecting sender and reply-to types, which can be the sales representative\'s email or a specific organizational email (e.g., info@macana.com) ([[00:18:30]{.underline}](#section-15)). Products can be tied to templates for tracking purposes, and communication subscriptions (consent) are configured, with start and end dates determining template availability ([[00:19:52]{.underline}](#section-16)). The system also allows attaching Salesforce surveys or object information and offers a template-specific setting to ignore opt-out preferences ([[00:21:09]{.underline}](#section-17)).

- **Automated Emails and Final Steps** Pawan Mehta mentioned the option to attach ICS files for calendar invitations and configure emails for automated invitations related to provider visits, allowing for dynamic content like account names and links ([[00:22:08]{.underline}](#section-18)). Other template settings include designating a default template for automated emails, allowing sales representatives to edit the subject line, and defining BCC addresses for organizational tracing. Finally, templates can be designated for consent acknowledgment emails ([[00:23:30]{.underline}](#section-19)).

### Suggested next steps

*No suggested next steps were found for this meeting.*

*You should review Gemini\'s notes to make sure they\'re accurate.* [*[Get tips and learn how Gemini takes notes]{.underline}*](https://support.google.com/meet/answer/14754931)

*Please provide feedback about using Gemini to take notes in a* [*[short survey.]{.underline}*](https://google.qualtrics.com/jfe/form/SV_9vK3UZEaIQKKE7A?confid=D8qCCAtP_E0faIU0LBQuDxIXOAIIigIgABgECA&detailid=unspecified)

📖 Transcript

Sep 11, 2025

## Meeting Sep 11, 2025 at 14:20 GMT+05:30 - Transcript

### 00:00:00

 \
**Pawan Mehta:** Hello everyone. I\'m going to demo today uh around the field email functionality. Uh in this particular video, we\'ll be focusing on a persona called uh business admin or an admin for that matter. I\'ll give a brief overview about what field email functionality is all about. So this is a feature as part of the life sciences domain especially in the commercial area. Uh this is targeted toward uh uh field personas uh medical sales leazons key account managers. So the idea is to empower the users to create manage and send emails in a compliant and streamlined manner. Uh in this functionality we leverage predefined email templates that come with a structured layout. It could include images, texts. Uh they also support JavaScript functions. It has also the ability to upsert the records uh in the CRM directly. Now all of this uh is again based around predefined email templates. Why I\'m emphasizing on that is because uh the end personas which are the sales rep representatives they should not have a lot of uh autonomy in terms of changing the emails because uh there is a element of compliance that come into picture when we are talking about pharmaceutical companies.\
 \
 

### 00:01:39

 \
**Pawan Mehta:** All right. So u the design and creation of the email is not something that happens inside of AFLS. Uh it happens outside uh so marketing internal content teams prepare it. Uh today we support only HTML uh files and while we are uploading those HTMLs have to be part of a zip file. That being said, we provide comprehensive content guidelines about how do you go about creating these email templates and these guides again can be used by directly by the pharmaceutical companies or uh their third party vendors whatever works for them. Um there\'s a element of a lot of personalization which we\'re going to see when we go through the end user demo. Uh there\'s a lot of monitoring and optimization that\'s happening here and that is something we\'ll see in this demo around how admins can track email cues, see if there are any failures, if they have to retry after making certain changes to some emails. All of this is possible from the view that we\'re going to talk about right now.\
 \
 

### 00:02:52

 \
**Pawan Mehta:** So all right, so we\'re going to focus on business user. Uh you will see that uh we\'re not going to go in settings uh in this particular demo. it\'s going to be inside the CRM application. That\'s why it\'s a business admin. Uh because they are making changes inside the application itself, but they have more privileges than the end persona which is this field reps, medical reps, uh as they\'re called in different geographies. So yeah, so the functionality is around sending emails. So here\'s here\'s what\'s uh what\'s going to happen, right? Uh I am logged in as an admin user and uh you\'ll see that I click on the admin console here and you\'ll find a tile called email. You go here. So we\'re going to talk about a bunch of things. Uh first of all I\'ll go through uh I\'ll tell you what the screen that shows up is. This is these are the email templates that are going to be used by the end user to send emails. So first let\'s go through settings.\
 \
 

### 00:04:06

 \
**Pawan Mehta:** These are the settings which are you know uh uh very uh either end user specific or they are specific to how the email functionality is supposed to work. I\'ll go through them line by line. But before that I want to show something uh which is common across different features which is the settings that you have. They can apply at an or level. They could apply at a profile level. They could also apply at a user level. So you can select the profiles as you can see or you could go to a user level. For this demo we\'re going to stick to profile level settings. Now what are these settings going to look like? So if you see the left hand side is more around uh the sales rep and the right hand side is more around administration although of course everything in turn applies to the end user which is our sales rep. All right. So, general settings. Is a sales rep allowed to change the subject before sending the email?\
 \
 

### 00:05:06

 \
**Pawan Mehta:** Is he or she allowed to add carbon copy recipients? Now, the CC\'s are generally not used uh for the sales rep to send emails to the outsiders. It is to carbon copy their peers uh and uh can they schedule emails to be sent later. So we support functionality of sending emails right now or you could schedule it for a time where you think that there will be more engagement uh from the email receivers. uh uh just to call out the email receivers are going to be healthcare practitioners or healthcare organizations uh because the MRS are generally or the sales rep are pitching the drug or therapy or uh device to a particular doctor or a hospital or u any other organization of of those sorts right uh and this is self-explanatory which is sorting templates by uh last modified date and time. All right. So, delivery settings. Uh, is the sales rep allowed to send the emails to HOS? So, we support HCPs out of the box, but if you also want HOS to receive emails, you should tick this box.\
 \
 

### 00:06:21

 \
**Pawan Mehta:** Send unless recipient opted out. So, there\'s an element of consent that is very deeply rooted inside our email template. Uh, email elements. uh consent is of course going to be explained in a different video in a different feature but I\'ll talk about it in the context of email. So uh there are geographies where you cannot send an email to uh to a receiver unless they have explicitly opted in to a particular uh topic. Uh this is of course to safeguard uh privacy and also avoid any sorts of spams. All right. So here there are also there\'s also flip side where uh there are geographies where you can send out emails unless a person has opted out. So let\'s say you have said for a drug called Iexis I do not want to receive any emails to explicitly opt out in those geos but and these are generally uh the United States. Uh and then there\'s a flip side where Euro says that you have to explicitly opt in to receive an email. So email access has to be explicitly opted in by the uh sales rep uh persona in order to get receive this.\
 \
 

### 00:07:42

 \
**Pawan Mehta:** We\'re going to remove this for now. We\'re going to go with the explicitly opted in scenario. All right. So then we have a language filter. Now this is very important especially when you\'re dealing with multilingual uh HCPs or HOS. Uh what happens is uh the templates are again supported in various languages. Your templates can have different HTML files for different uh languages. Now depending on what a template supports you could filter out. Let\'s say I am a sales rep sending an email to a person who only cares about the language Spanish. So it makes sense to have an accountbased language filter. This is going to show you all the account related fields and you can select the right field. If the field is not present, you can of course create a custom field out of it. All right. And then you have user language filters. Now here it\'s going to matter which language does the end user or the sales rep have. So this one already has a language filter.\
 \
 

### 00:08:46

 \
**Pawan Mehta:** You can use that and this is again like to enable this feature. So this is about the end user uh experience. Now on the right hand side you\'ll see more admin related tasks. Okay. Uh so the first one is send email limit targets. Uh it basically shows a warning on email q page when u there are uh only certain amount of emails that are left uh in the daily or the monthly sending limit. So this is uh to give them a heads up that your limit uh on the org is getting over. Then there\'s a batch size. So while sending the emails, this is the maximum batch size we\'re going to consider. So at one point only 20 emails can be sent. Uh this is the retry attempts. Uh which means like if there\'s a failure in the emails, we\'ll only try for three times in order for this to work. Then tracking details till what time are we going to track status? Statuses are like can your uh fail uh open etc. Here how many days to keep uh send emails uh 30 days uh check history 30 days.\
 \
 

### 00:09:58

 \
**Pawan Mehta:** What is the tracking batch size? So uh tracking happens using a job. So that job is going to support these many number of uh size while they are trying to fetch the details uh tracking details. This is about consent whether you want to turn it off, you want to ignore consent verification. So all of this is going to be configured from here. So okay, let\'s save this and move forward. Let\'s talk about the email jobs now. So the light left hand side there is the job to send an email. So you could uh create this uh this will be like a chrome job that runs at a hourly uh or at a different interval daily or weekly or maybe just once uh at the time that you specify. Right? So this is how these jobs can be configured and that time uh any emails that are present in the queue will be triggered to be sent. Q I\'m going to show in a minute. On the right hand side this is for the statuses.\
 \
 

### 00:11:09

 \
**Pawan Mehta:** Again this is going to fetch the statuses of the emails that have been sent. You can schedule at again at the same uh way you have done it uh for the email sending. Now this is the queue. If you see this is the error limit that is coming from the setting we had done in the email settings section. Uh so uh right now this org had a very small limit. So what\'s going to happen is you\'re going to start seeing failures. It won\'t be able to send emails because the limit has been crossed. Anyways let\'s focus on the queue itself. So you\'ll see that these are the various emails that have been part of the queue. Here you\'ll see there there have been a lot of retries. uh there have been successes and then there is a new email which has not been sent till now. So either you could let\'s say take an action and try to set the email uh manually or you could see that there\'s a failure uh you go try to check for the failure reason.\
 \
 

### 00:12:11

 \
**Pawan Mehta:** Failure reason will also be by the way called out uh if that is something we can track and then you can make changes in the email uh snapshot and uh try to send it after making the corrective taking the corrective action. All right. And then another job uh which is the fragment job. This is about something called fragments. So I\'ll very briefly explain what fragments are. So our email templates support reusable components inside an email. So think of it as a paragraph that can be reused. Think of it it as an image that could be reused. So anything that is like sort of common across uh various emails. This is a fragment and this is a job to share the fragments uh across right you to run it to make it available uh if you\'re making changes in the fragments. All right. So uh I\'m going to talk about the templates and before that I\'ll go to one more important piece uh which I had briefly touched upon which is uh uh around content.\
 \
 

### 00:13:20

 \
**Pawan Mehta:** Uh so let\'s go to account. Ignore this. Uh this is some issue that we are facing. It will be fixed. So here two things to note. Uh you see I already have a send email configured right. Uh so how do I do that? Uh I\'ll talk about that. And also we have consent. So as I as you have seen I have made sure that only people who have consented to a particular topic can receive an email here. The topic is going to be email access and we\'re going to try to send it to this particular email address. U right? So how do I show this component? This is a custom component that we have built. Uh so I\'ll show you both the send email button and the custom component. We go to edit page. All right. Uh right. So this email button has been added here uh from this section. If it\'s not there, you can select and add that button.\
 \
 

### 00:14:55

 \
**Pawan Mehta:** If you go to consent here, you will see the custom component is already present. If the component were not present, what you\'ll do is you\'ll search for consent. And if you want to reuse any of the existing tab, you could do that or create a new tab for consent and paste the component here. It\'s already there, so I\'m not going to make that change. Uh, by the way, consent capture, etc. will be shown to you in a different video of a different feature which is very specific to content. So wait for it. All right. So since we have this uh our AFLS application has a app uh iPad app as well. So all of this is supposed to work seamlessly on an iPad application. So you see I\'ve done a lot of configuration. I have set up a lot of data. But how does the app work in tandem with the main CRM application? So for that you have to create a DB schema for the data to flow seamlessly into the iPad application.\
 \
 

### 00:16:10

 \
**Pawan Mehta:** So for that goes here. Uh again the admin console select the mobile here you will go to object metadata cache configuration all right so here you\'ll see that there are any number of uh DB schema records uh for what is required for email to work I have mentioned that in the release enablement deck u so this So all of these should be part of the metadata cache configuration for it to work. I\'ll show you one as an example. So this is licenses email. Uh right. So we\'ll do an edit. The edit and new looks exactly the same. So you\'ll give a name idly db schema\_ and then the name of the s object s object is this template. Uh again you\'ll have an option to select this. This is going to come up in a drop down. What is the type? This a data type of type. There are also ones for configuration but this is very particularly for the data type that we have. All right.\
 \
 

### 00:17:33

 \
**Pawan Mehta:** Uh so we\'re going to select this. So we\'re going to say sorry I I think I need to do this again. All right. I\'ll select the right profile. This is okay. Don\'t need to change it. Don\'t need to change it. And then say by the way there are scenarios where I have to put in a query to get only the relevant results. Otherwise things can malfunction but I mean that is uh case to case basis. Here you don\'t need it. And then you can press on save to cancel because it is already configured. Now we have set up the data uh at least the configurational data. We have set up the metadata cache for to work. Now what we need to do is actually upload the email templates and we\'ll see how to do that. Again go back to the email tile inside of admin console. This is the first thing that comes up right. You have filters which are based on the email template object.\
 \
 

### 00:18:30

 \
**Pawan Mehta:** You\'ll see everything over here. You can give that parameter add filters and you know we\'ll be able to filter u out in the admin console. All right. So we\'ll go with a new one. Click on new. I select a file which I have created specifically for field emails. I select that file. I\'ll say what is the subject for this? Imunis PhD study. Okay, what is the name of the template? We can simply put this. Uh then we have topics. This these are the ones that these are Salesforce topics. We are putting it here. It because it helps u to sort of sift through various email templates. This is like a criteria of sorts if you will. Then we have a sender type and a reply to type. This one is of interest to us. So what happens in a sort of a uh B2B and B2C setting is uh whenever uh an employee sending email those emails might come from the employee ID or they could come so in this case it will be sales rep email id or it could come from uh uh a different uh a different ID which is specific to the organization.\
 \
 

### 00:19:52

 \
**Pawan Mehta:** So you could say that uh info at the rate macana.com. So something like this. So uh the end the the receiver will see this ID. There is also one more nuance. Whenever the receiver tries to reply to they could either reply back directly to the sender or they could reply to a different email address. So it could be called uh let\'s say uh again similarly info support aggregate macrona.com and you should be good but for this again use case we\'re going to stick to the sales rep just showing that you have the option to do it now product so here you can select any of the any of the um AFLS marketable product type. Uh again, this is going to tie back to the email template. Why do we do that? Because we want to keep a track of what was done for a particular uh product. So you\'ll see product mapping across different features. And then we have communication subscription. This is the consent that we talked about.\
 \
 

### 00:21:09

 \
**Pawan Mehta:** So if you remember the configured uh com subscription for us was human access. So we\'re going to select that start date is something from which this will uh be available to the customers. You can put a forward date. We\'re going to put a backward date or this will take a backward date and the end date. After this date your end users are not going to see this template. So we\'re not going to put anything because we don\'t need it. This is description plain and simple. You can also attach Salesforce surveys to your emails. You have that option. You can also attach object information to your email. So you could maybe select an account. So this one has to be configured from the object manager. You can have a look up to account or any other object that you want and you can put down that information over here because the information is anyways going to an account. So that can be fetched. You can also ignore opt out preferences.\
 \
 

### 00:22:08

 \
**Pawan Mehta:** So this is let\'s say that this for solely for this particular email template you don\'t want opt to be looked at. So again we saw a generic uh setting earlier. This is specific to the template. I\'m not going to do this because we want opt to be shown in our demo. Uh then this this one is uh of doing the same thing which is essentially attach I files. So the uh your calendar invitations are in the ICS format. So uh there are emails that you can uh configure which are solely working for visit which is call configurations and whenever you are trying to create a record. So we are saying that for automated email invitation context which is provider visit whenever a visit is either created updated or cancelled send this as the email. So you can write something like hello uh account dot name and you could also give information like uh uh links if you are using uh remote engagement and so on and so forth. So for this again like we\'re not going uh around this.\
 \
 

### 00:23:30

 \
**Pawan Mehta:** We\'re going to show this something similar in the remote engagement uh module. All right. Uh okay. It\'s a default template for automated emails. You can basically guess this is required when you know uh there\'s a there are a lot of similar emails uh going in. Uh this is if you want to allow sales reps to edit subject line not going to do this. Then BCC addresses have to be given prior. uh this is let\'s say if you want to have uh a trace at an order level of what\'s going on uh or rather you want to give access of all the emails going regarding this template to particular email you could do that and put their email address over here languages are again which languages are present if if the languages are already there some of the other options would have been selected it\'s not there so this is not selected right now all right uh and then this is uh very specific to consent. Are you going to use this template for consent acknowledgement which is when somebody uh acknowledges an HCP or NCO acknowledges uh consent at at their end they\'ll receive an acknowledgement email that you have done so and so. All right. Now we\'re going to save this. Right. So this is now saved. Uh now what we can do is uh after this we are going to look at uh how emails can be sent through web and how emails can be sent through mobile. Thank\
 \
 

### Transcription ended after 00:25:18

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*

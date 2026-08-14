Sep 12, 2025

## Meeting Sep 12, 2025 at 00:50 GMT+05:30

Meeting records [[Transcript]{.underline}](?tab=t.6hzv65lvgwgd) [[Recording]{.underline}](https://drive.google.com/file/d/1z-4LKTjORwVXlZFRx9XeotafiIlUchZp/view?usp=drive_web) [[Recording 2]{.underline}](https://drive.google.com/file/d/1WO1K39qLoEk4bIvW45f9xXr1Ve4Y9WBY/view?usp=drive_web)

### Summary

Pawan Mehta demonstrated sending emails via the life sciences iPad application, showcasing multiple triggering methods and the requirement for recipient selection and consent. They detailed email template configuration options, including searching, filtering, and attachment management, and explained email body customization using the Mustache framework for recipient name fetching and fragments for reusable content. Pawan Mehta also showed the email preview mode and various sending options, such as adding recipients, CCs, and scheduling.

### Details

- **Sending Emails via iPad Application** Pawan Mehta demonstrated how to send emails using the life sciences iPad application, outlining multiple ways to trigger an email within the application, including from the homepage, the account list view, and the record page of an account. They explained that the application requires a recipient to be selected, and consent for email access topics is captured and utilized when sending emails ([[00:00:00]{.underline}](#section)) ([[00:07:25]{.underline}](#section-4)).

- **Email Template Configuration and Features** Pawan Mehta showcased the various options available when selecting an email template, such as searching, filtering by product, and optionally by category or language ([[00:01:20]{.underline}](#section-1)) ([[00:08:06]{.underline}](#section-5)). They highlighted that attachments can be included with email templates, some of which may be mandatory, and the user has the ability to deselect non-mandatory attachments or preview them ([[00:01:20]{.underline}](#section-1)) ([[00:09:19]{.underline}](#section-6)).

- **Email Body Customization with Fragments and Mustache Framework** Pawan Mehta detailed how the email body can be configured using the Mustache framework, which automatically fetches recipient names, and explained the concept of fragments as reusable parts of an email body such as text or images ([[00:02:24]{.underline}](#section-2)) ([[00:09:19]{.underline}](#section-6)). They demonstrated how to select and insert fragments into the email, emphasizing that these elements must be pre-configured within the email template ([[00:03:25]{.underline}](#section-3)) ([[00:10:27]{.underline}](#section-7)).

- **Email Preview and Sending Options** Pawan Mehta illustrated the preview mode, which allows users to see how the email will appear with the recipient\'s name and selected fragments. They also showed options for adding more recipients, checking available email addresses, adding CCs if configured, and sending the email immediately or scheduling it for a later time ([[00:10:27]{.underline}](#section-7)).

### Suggested next steps

*No suggested next steps were found for this meeting.*

*You should review Gemini\'s notes to make sure they\'re accurate.* [*[Get tips and learn how Gemini takes notes]{.underline}*](https://support.google.com/meet/answer/14754931)

*Please provide feedback about using Gemini to take notes in a* [*[short survey.]{.underline}*](https://google.qualtrics.com/jfe/form/SV_9vK3UZEaIQKKE7A?confid=VFfnJXFOoik9Jbm25JGxDxIVOAIIigIgABgECA&detailid=unspecified)

📖 Transcript

Sep 12, 2025

## Meeting Sep 12, 2025 at 00:50 GMT+05:30 - Transcript

### 00:00:00

 \
**Pawan Mehta:** Hey everyone. Uh in this video you are going to see how to send an email using the licenses um iPad application. Um you\'ll realize that there are multiple ways to trigger an email from this application depending on your uh iPad application configuration. Uh the first one is right on the homepage. Uh if you click the ellipsus button, you can set up a email button here. uh when I click here you\'ll see that I\'m asked to choose between um an account which is a provider in this case and why that is there because you need a recipient to receive an email. All right, there is the second way to do it. I\'ll go to account here again. Um uh first let\'s see this u in the account list view uh clicking on the ellipsis button on any of these accounts will give me an option of launching an email and I also have intelligent content configured I could select that in this case I\'ll have u a contact so it will directly ask me to select u an email uh template the third one is uh and this is common across web and mobile is the record page of an account.\
 \
 

### 00:01:20

 \
**Pawan Mehta:** If I click on the ellipsus button, uh you\'ll see the send email option for me. Before that, I want to show you something. I want to show you that for this particular account, we have already captured a consent for the topics of email access. So, uh that\'s going to come into effect whenever you are trying to send an email. All right. Um so I\'ll go and trigger an email and you\'ll see the templates start showing up. I can make searches over here. Uh let\'s say I want to do for coding or I have the options of selecting different products called product. Uh of course if I had set up some categories that would also show up. Let\'s say I\'m going to select this email uh to show you certain things. Here I have the options of playing with the attachments. These attachments are coming from the email template itself. Uh as you can see I as an end user don\'t have the ability to make changes over here and that is by design.\
 \
 

### 00:02:24

 \
**Pawan Mehta:** Uh there is one attachment over here. The first one you can see that cannot be changed because this is uh a mandatory uh attachment for this particular email template which means it will always be sent with this template. For the second one I have an option to deselect. So I\'m going to do that. I can of course also preview uh these files. I\'m going to after that I\'m going to press next and this is where I can configure my email body. Uh if you see uh I have a account name uh variable set up. So this is the mustache framework that is uh available for us. uh uh so recipient name is actually going to fetch the name of the account uh to which we are sending this email and then we have a concept of fragments. Fragments are reusable part in an email body. So this could be uh a blob of text, it could be images, so on and so forth. So what I\'m going to do is I\'m going to click here.\
 \
 

### 00:03:25

 \
**Pawan Mehta:** I have the option of selecting between various fragments that are again coming out of the box from the email template. These things have to be configured. The places where they\'re going to come, which fragments are supported, everything has to be configured. U so I\'m going to select two and three here. Uh I\'m going to press next. And uh right, there is some error. Let me do that again. I don\'t know why that\'s happening, but let\'s try one more time.\
 \
 

### Session ended after 00:03:59

 

### 00:07:25

 \
**Pawan Mehta:** Hello. All right. So in this demo we are going to look how field sales rep can send an email using the life sciences iPad application. Uh this field rep has multiple segways into sending the email uh from the app. Uh one is here in the home uh screen itself. If you click on the ellipsus button on the bottom right, you\'ll see an option to send an email. If I click here, since I do not have any context, which in this case would be a recipient, it\'s asking me to select the recipient and then it will move forward.\
 \
 

### 00:08:06

 \
**Pawan Mehta:** The second place to do that is in the account list view. Uh if I again click on the ellipsus button on any of the accounts, I\'m I\'ll get an option of sending an email from there. Then the third option which is also common with uh the web interface is here uh in the record page of an account. So I can select an email to send from here. Before that I\'m show I\'ll show you something. Uh so you have a view of uh the content that has been captured against the topic of human access and you should be able to send any emails that have access as the topic uh assigned. All right. Uh I wanted to call that out. Uh we\'ll click on send email. Here I have the option to select between various templates. I could search uh you by typing. I could I have the option to select between different products and if I had the category I would also have the option to to uh one thing that is not present over here is the language filter that can also be used to filter in the places where there are multilingual HCPs or HCOs present.\
 \
 

### 00:09:19

 \
**Pawan Mehta:** Okay. Uh now moving on I\'ll try to select this particular template and proceed forward. The first screen that shows up is the attachment screen. You\'re going to realize that um uh you have two category of attachments. One which are mandatory and one which are uh not. Um again this depends on how the email template has been configured. If you have configured a template attachment to be mandatory, it will always go with the email that is sent. All right. So what I\'m going to do is I\'m going to deselect the one that is not required. I can also preview these uh attachments. Let me press on next. Now here you\'re going to see uh something very cool which is the mustache framework up top a recipient name. So what I\'m going to show you in preview is that this actually comes from the database and get uploaded with the name of the recipient. We have a concept of fragments. These are reusable bits of text, images, what have you, which can be reused uh across the email body.\
 \
 

### 00:10:27

 \
**Pawan Mehta:** So this saves uh you in case of repetitions, images or blocks of text that you want to use across uh various emails. I\'m going to configure one of these. Press save. Go to next. Now what you\'ll realize is I\'m now in the preview mode. So this preview will uh actually give you uh a sense of what this email is going to look to Erin Morita. So if you remember we had a mustache framework there and Marita\'s name is showing up and in in place of fragments you see a blob of text that has come up and only one attachment is available because that is how we configured the email. So as soon as I press on next, I\'ll see an option of the recipients. I can add more from here if I wanted. I can also check for the available uh email addresses against the topic of content that I have. Uh I can also add CC if that were configured over here. Uh I\'ve shown how to enable CC in another video related to configuration. Similarly, I could send the email right now or at a later point in time. So right now I\'m going to for this demo I\'m going to click on send which will send the email uh right away. And this concludes what I wanted to show this particular flow. I\'ll also take an example of uh a different u use case of a different template. Uh so when I click on send email, you will see um how a more rich template is going to show up like here uh again access. So this is what I wanted to show you.\
 \
 

### Transcription ended after 00:12:51

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*

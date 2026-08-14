Sep 22, 2025

## Meeting Sep 22, 2025 at 23:20 GMT+05:30

Meeting records [[Transcript]{.underline}](?tab=t.9gn8rhpjvees) [[Recording]{.underline}](https://drive.google.com/file/d/1Hkoe9Px-mztVt3Su1kYpWFpcwImArRiK/view?usp=drive_web)

### Summary

Nilotpal Paul introduced the Agent Force Platform for Pharma Field Sales, demonstrating its AI-first approach to daily tasks for a pharma field sales representative like Ivan Casto, providing insights into Healthcare Professionals (HCPs) and prioritizing accounts. Nilotpal Paul explained how Agent Force supports sales representatives by providing next best action predictions for engaging with accounts like Mary Mallaloy, leveraging Einstein Studio predictive models in real-time. Nilotpal Paul concluded by emphasizing the ease of creating agent actions and customizing Agent Force to meet the needs of various personas within pharma companies, highlighting that the platform significantly reduces training and onboarding time.

### Details

- **Agent Force Platform for Pharma Field Sales** Nilotpal Paul introduced the winter 26 enablement session for Agent Force for AFLS for Customer Engagement, showcasing how the platform transforms the journey for a pharma field sales representative. They demonstrated Agent Force through the lens of Ivan Casto, a pharma field sales rep, highlighting its AI-first approach to daily tasks, such as understanding their day and identifying priority accounts ([[00:00:00]{.underline}](#section)). The platform provides insights into Healthcare Professionals (HCPs), key talking points, and explanations for account prioritization, along with recommendations for top accounts and the factors influencing these recommendations ([[00:01:27]{.underline}](#section-1)).

- **Advanced Capabilities and Integration** Nilotpal Paul explained how Agent Force supports sales representatives by providing next best action predictions for engaging with accounts like Mary Mallaloy, leveraging Einstein Studio predictive models in real-time ([[00:02:58]{.underline}](#section-2)). They also detailed how Ivan Casto uses Agent Force to summarize information on HCPs like Aaron Morita, access recent clinical trial data for new drugs, and identify top influencers ([[00:04:56]{.underline}](#section-3)). The platform further facilitates logging visit updates by extracting relevant product details and discussions from natural language input ([[00:06:33]{.underline}](#section-4)).

- **Behind-the-Scenes Configuration** Nilotpal Paul provided a technical overview of how Agent Force is configured, demonstrating the use of topics and actions within the Life Sciences Field Sales Agent ([[00:09:38]{.underline}](#section-5)). They showed that actions, such as \"generate complete daily briefing\" and \"next best action prediction,\" are powered by Apex classes and flows, allowing for seamless integration with predictive models and data cloud functionalities ([[00:11:58]{.underline}](#section-6)). This architecture enables real-time and batch-based predictions, providing human-readable information to the user ([[00:13:49]{.underline}](#section-7)).

- **Ease of Agent Force Customization** Nilotpal Paul concluded by emphasizing the ease of creating agent actions and customizing Agent Force to meet the needs of various personas within pharma companies. They highlighted that the platform reduces training and onboarding time significantly, as users can interact with Agent Force using natural language. The system efficiently maps transcribed notes and stores information, demonstrating a departure from traditional user experiences ([[00:15:35]{.underline}](#section-8)).

### Suggested next steps

*No suggested next steps were found for this meeting.*

*You should review Gemini\'s notes to make sure they\'re accurate.* [*[Get tips and learn how Gemini takes notes]{.underline}*](https://support.google.com/meet/answer/14754931)

*Please provide feedback about using Gemini to take notes in a* [*[short survey.]{.underline}*](https://google.qualtrics.com/jfe/form/SV_9vK3UZEaIQKKE7A?confid=i3GqaerSzouZ0WOnNMF2DxIVOAIIigIgABgECA&detailid=unspecified)

📖 Transcript

Sep 22, 2025

## Meeting Sep 22, 2025 at 23:20 GMT+05:30 - Transcript

### 00:00:00

 \
**Nilotpal Paul:** Hello everyone, I\'m Nilotpal and welcome to this winter 26 enablement session for agent force for AFLS for customer engagement. In this session, we would first witness how the power of agent force platform can transform the journey for a pharma field sales representative. We would then look under the hood to see how easy it is to enable agent force to work for you. With that, let\'s get started. We\'ll look at this demo through the lens of Ian Casto who is a pharma field sales rep for the fictitious pharma company Macana Pharma working on a new drug called Imexis which is intended for rheumatoid arthritis patients. Ivan Casto is a AI first field sales rep. He\'s already logged into the application and instead of starting his day looking at his calendar to understand what his appointments look like, he uses agent force. He uses the recommended pill on the agent force welcome center which says what does my day look like. With that behind the scenes, agent force is going through Ivan\'s calendar and synthesizing information not about just the visits that are supposed to happen but also provides key information on which of these are priority accounts.\
 \
 

### 00:01:27

 \
**Nilotpal Paul:** For example, in this case, Aron Morita. At the same time, it provides explanation of why it is a priority account. It also provides information on insights about all the HCPs as well as key talking points and conversation starters which is all going to be helpful in quick preparation for his upcoming meeting. Beyond this information, Ivan wants to understand who are the top recommended accounts so that he is prepared for an eventuality where he has time left in his day and he wants to make more engagements. So he turns to agent force to understand who are the top recommended accounts. and agent force is working behind the scenes working in collaboration with the recommendation model to give information on the top recommendations. Now as you can see this only this not only provides information on why an account is recommended but also the scores associated with the recommendation as well as more explanation uh in into that uh recommendation. At the same time now Ivan wants to understand or deep dive into uh what are the top factors that have gone into these recommendations.\
 \
 

### 00:02:58

 \
**Nilotpal Paul:** So he uses another prompt. What are the top factors for recommendation of Mary Mallaloy? And in this case, agent force quickly looks through the recommendation information and provides insight into why that particular account was recommended. This is as you can see a more detailed explanation. Now the next information that he wants to look at is how she how should he uh engage uh with Mary Mallaloy in this case. So he wants to understand what are the next best action for Mary Mallaloy. In this case he would wait for see what are the predicted next best actions. Again, agent force working closely hand inhand with Einstein studio predictive models to churn out the bestness action. This is predictive model being utilized real time and it provides information on the access support request being the next best action and with follow-up actions arounduling an inerson meeting, sending clinical data and inviting to a webinar. Now armed this with this information now Ivan wants to turn his attention to uh the next visit at hand which is with Dr. Aaron Morita.\
 \
 

### 00:04:56

 \
**Nilotpal Paul:** So he wants to get some more summary information on Aaron. So he turns to agent force to ask the question summarize Aaron Morita and he gets a detailed response in terms of what are the key changes for example immune nexus leads with 42% market share in Dr. Morita\'s practice uh Michael Jen visited Dr. Aron Morita 2 days ago the affiliation information as well as the fact that Orin Morita has been principally investigated in two autoimmune disease related clinical trials clearly which shows Morita Dr. or the Dr. Morita would be interested in clinical trial results for immunexis as well. So in this case, Ivan wants to prepare himself better and leverages in force to look at the recent clinical trial data for immixes. Agent Force looks through hundreds of thousands of records of publication data, clinical trial data to point out the right information. This information can also reside in agent force libraries as well as data coming in from third or first party data sources. Now with this information the next thing that Ian wants to know are who are the top in what are the top influencers talking about immune access.\
 \
 

### 00:06:33

 \
**Nilotpal Paul:** So he again uses the recommendation fields to see what are the top influencers saying about immune access. Great. Now, finally, Ivan also wants to see if any of these uh influencers are in the network for Dr. Morita. So he asks to see if there are any affiliations. Who are the affiliations for monitor? So looks like Thomas Dors who is one of the influencers for immune access is also in Aaron Morita\'s affiliation list. Now finally after the visit is done Ivan wants to log his visit using agent force. So he again turns to agent force to log his visit update visit with Aaron Morita talked about inexis and cordium. um had a detailed discussion about the efficacy of immune access in treating RI patients as evident from real world evidence. And he asks agent force to update his visit record. In this case, agent force is looking at all the product details that needs to be updated. and it has updated both in indexes and cordium as the details as well as the discussions as well.\
 \
 

### 00:09:38

 \
**Nilotpal Paul:** With that we have come to the end of the demonstration of how agent force can be used in the in the next generation to sort of easily navigate the field web journey on a day-to-day basis. Now let\'s focus on our attention to how this was achieved. So I\'ll share my other screen. Now as you can see over here uh this is essentially peing behind the hood of what goes on uh when agent force is working. As you can see over here, this is the life sciences field sales agent which is right now live on the app and which I was demonstrating. Within this within this agent, you have a number of topics and within these topics you would have actions which are actually performing all the underlying so to speak actions and flows. Let\'s look at a few to understand what is powering them all. Let\'s start with the daily briefing agent which we started with which provided information on visits as well as information on uh priority accounts and conversation starters. So this topic has um certain classification description as well as scope as well as instruction in terms of how to go about performing tasks when asked certain questions or atterances.\
 \
 

### 00:11:58

 \
**Nilotpal Paul:** It also has certain example inputs which helps agent force determine if this is the right topic uh to go to in order to um solve some of the problems that the user has. Now this topics action has one action in this case generate complete daily briefing uh and let\'s look at what is within this particular action. So as you can see this is using a apex class called daily briefing orchestrator which does all the heavy lifting behind the scenes. Now I have opened it here. As you can see this is a class Apex class which again has dependencies of number of other underlying classes which is performing all the um behind the scenes work to get the agent all the information be it around the visit schedule or the underlying information around summarization etc. Now going back let\'s look at few of the other uh topics. Let\'s for example look at the next best action prediction. So this uses two actions. One is identify record by name. This is a standard out of the box action which is shipped uh which uses um standard soil queries to identify a record based on the name and then supplies that name or ID to the NBA prediction action which then does the hard work of finding out what are the next best action predictions real time based on underlying data that is available on the HCP.\
 \
 

### 00:13:49

 \
**Nilotpal Paul:** profile. Let\'s look at what is powering this action. So this is based on a flow which is providing this information. So now let\'s go into and check how this flow works. This is the flow which is a auto launch flow which is needed if you want to create a uh agent force action and what it is doing is it is retrieving NBA records based on certain information and then going through all these NBA records and leveraging in this case a predictive model which takes into count a number of these inputs and then finally provides output in terms of prediction recommendations and top predictors. And finally, all of this information is fed into a prompt template in order to provide a more human readable information that we saw on the screen. Now let\'s dive a little deeper into the actual model which is used to generate this. So this is again within data cloud you look at the specific model in this case the next best action model um which again if you go a level deeper it shows all the input variables which have gone into predicting what is the next best action and then as you can see here there are two prediction jobs.\
 \
 

### 00:15:35

 \
**Nilotpal Paul:** One is a streaming job which can provide real-time value updates and you also have a batch based prediction job which can help in filling out the core data model which can then be leveraged to show the predictions and the next best actions through LWC components. Finally, this simple flow is what is powering the voice-based visit logging feature. It again uses as you can see an apex class to take in the transcribed note and then it basically does a mapping and the map responses are fed into another AIX action which then uses the underlying entities to store all the information. So, um, again, as we just demonstrated, it\'s pretty easy to create these agent actions to come up with the desired results and ensure that field rep agents, for that matter, any other persona, for pharma companies can easily go about doing their responsibilities without having to rely too much on traditional user experiences. At the same time, it ensures that the training time or onboarding time on the new application is reduced to a dramatic extent because all they need to do is to interact with agent force in human or natural language. So with that we\'ve come to the end of the demonstration. Thank you for attending this\
 \
 

### Transcription ended after 00:17:55

*This editable transcript was computer generated and might contain errors. People can also change the text after it was created.*

**Manoj Kumar Mohapatra:** Hello everyone. Today we\'ll see a demo of how to create a predictive model using Einstein studio using the DMOS in data cloud. This use case is primarily intended for use cases like like next best customer next best actions so on and so forth. Now for that we\'ll see first see about how to get the data directly from core to data cloud so that we have the data pipeline in place and then we\'ll see about how to create the predictive model over the DMOS which are present in data cloud. Now the purpose of for the purpose of this illustration I have used a very highly denormalized table which I\'ll be using in core in the form of a custom entity or custom object. The reason why I have used a denormalized table is this will be easy for me to take this as a DMO and run the predictive model. In real life scenario, we will have a highly normalized set of tables in core and we\'ll have the pipeline in place so that we get the respective DMOS and we will perform batch transforms and convert them into a denormalized table and run predictive models.\
 \
 

 \
**Manoj Kumar Mohapatra:** For the sake of simplicity, I have used a highly deormalized table. So as you can see this is a sample data of a custom entity which I have already created in core with the name called HCP data. So what we see here are the account identifiers and we have then the product identifier. Then we have the week start date which is generally the first day of the week which is primarily Monday. Then we have other parameters like what is the TRX in the last week in the second last week third last week then what is the NRX in the last week in the second third last week then we have other parameters like the email sent email opened last week email open rate so on and so forth. We also have attributes like category which which kind of works as an indicator to see what is the set of data on which we want to train the model and what are the set of data on which we want to have the predictive scores.\
 \
 

 \
**Manoj Kumar Mohapatra:** Now the category field where we have the training are the set of data where we\'ll be training this model and the and the category field where we have left it vacant are the areas where we actually want to calculate the next best scores. We have another field called next best customer which is primarily a binary field with zero or one. One being that this is the next best customer zero being it is not. uh now each each based on our use case we can have our own custom logic the logic which I have used is uh now let\'s say the average of the TRX for all the accounts if it is greater than the TRX of this specific account so I mark this as a next best customer which is one and if it is if is less I mark this as zero. Now with that uh I have created the custom entity in core. Uh we will walk through the entity as it looks in core. So we\'ll open the licenses customer console app.\
 

 \
**Manoj Kumar Mohapatra:** CP data is the entity as you can see it has all the details of the dummy data which I just showed. Then we have another entity called territory account score which kind of contains the next best scores uh against each of the accounts. Now this is also a custom entity which I have created and I have put some values in the next best score. We will see towards the end of this demo how we get the data from core into data cloud run the predictive model and and then bring it back to core so that this value is updated. Okay now we have the data set in the core. Now let\'s see about how to create the pipeline so that we have the respective data input data for our predictive model in the data cloud. For that we go to data cloud. The first step which we do is we create a DMO. Actually creating a DMO is pretty easy. We go to data model tab.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** We select on new. we can define the structure of the DMO from various options. So I\'m using the file option and uh then I go to next. I will choose a sample file uh of the uh of the DMO that I want to create. So here is a sample structure of the data which I will use which is exactly similar to the one which I have showed in core for the HCP data entity. I\'m not I\'m not creating it now because uh I have already created this and then when once I upload and save the respective DMOS will be created. Now once the DMOS are created then I go to create the data streams. Now data streams helps to fetch the data from core of that respective entity into the DMO which I have just created. We already have created the um data streams which is the name HCP data_c_ome. But I\'ll just show how to create a data stream. Click on new.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** Click on Salesforce CRM. Move to next. It\'s taking some time to load. We can ignore this error. We go to the view objects and in the view objects you search for the respective entity in the code that you have created. Select that entity. Move ahead. You have all the fields which are present uh in the core for this respective entity. Move ahead and then deploy. Now I\'m not going to deploy here because the respective uh data stream has already been created. Now once the data stream stream has been created, we go to the data stream and we go to the review. So what happens is uh the data stream looks for respective DMOS if they are already present and automatically creates a mapping. If we don\'t want the respective DMO to be picked, we can pick any other DMO also and also we can change the mappings. In this case, we have exactly created the DMO with the name HCP data as it is present in the core and hence it has automatically picked all the mappings.\
 \
 

 \
**Manoj Kumar Mohapatra:** We just do a save and close. That\'s it. We have the data pipeline ready for the data to flow from CRM or core into data cloud. Now let\'s go and have a look how to create the predictive model. You go to Einstein Studio. Now I have already created a predictive model but I\'m going to show how this model has been created. I click on add predictive model. Now there are various options from which we can create a model. Either you can create a model from scratch, you can create a model from Amazon Sage Maker, you can create from GCP or you can create from a databix model. I choose create a model from scratch. It asks for the data on which I want to run the model. I will choose the HCP data demo which I just created. Right. I\'ll move ahead. Now it asks the training data on which I want to run the model.\
 

 \
**Manoj Kumar Mohapatra:** In real life scenario, we generally don\'t use all the records. As I had shown we have a category and we want to run the model or train the model on the specific set where the category is training. So what we\'ll do is we will go and give the criteria as category which contains training. So there are 63 records out of 625. I click on next. Uh now it asks for the goal which I want to uh set. Basically uh I will choose the attribute where I want to have the next best customer. Now my goal is to maximize the number of ones. So I will click on maximize and I\'ll select one. I could also use minimize the number of zeros as well. It is more or less the same goal. I\'ll move ahead. Now it asks me what variables in the input DMO I need to select. So in real life it could happen that I deselect some of the DMOS in the call.\
 

 \
**Manoj Kumar Mohapatra:** I select some of the DMOS and uh I click on next. Now it asks about the algorithm which I wanted to choose for my model. Um the best way is for the platform to pick up the model. But if you deselect that you have your options which of the model you want to choose. It is using extreme gradient boosting in this case. Then I go to next. I see an overview and I save. Now I\'m not going to save because the model has already been created. Now once you have created the model, you go to the model and view the training metrics. The training matrix shows us how accurate the model is. What is the performance of the model? Now generally if the AU is greater than 0.5, this is a good model. The primary reason why it is greater than 0.5 is I have used Gemini to create as real world possible data as possible as possible and hence the model kind of gives a good score.\
 \
 

 \
**Manoj Kumar Mohapatra:** Here it also shows about the top predictors or the input variables which actually um determines or influences the output variable which is the next best score. It also shows about the confusion matrix which consists of true positives, false positives, false negatives and true negatives. All right, this looks like a good model uh with a good prediction. So let\'s go back and see how can we run this model. I go to integrations. Now I have already created one model which is in which is in progress state. But I\'ll just show how to create this. I click on new. I click on the data on which uh I have to run this model which is SCP data. It shows the input variables which are actually useful. It asks for the model output. Maybe I can give test. So this is the field name on which the scores will be calculated. Now it shows the option of what are the possible schedule updates.\
 \
 

### 

 \
**Manoj Kumar Mohapatra:** I can choose either streaming or batch. Streaming is it gives the predictions in real time whenever the input variables changes. Manual is it runs in certain period of time. I choose streaming. I review and I save. I\'m not saving this because this has already been done. Now once you create a job now you can go and have a look whether that job has been run or not. So you can go here you can see the job history. So as you can see we have a success here where this much this many rows have been successfully uh calculated. Now how we can see the data? We go to data explorer. We select the object as data model object. Um click predictive and basis score. Now it shows the respective scores or the next best customer which it had calculated. Now we have the predictive model run and we have calculated the next best customer.\
 \
 

 \
**Manoj Kumar Mohapatra:** Now how can we take them back to the core? Now for that we go to the setup page and the flow team has uh created an option called data cloud triggered flow which kind of helps to take the data from data cloud DMOS back into the core. We go to flow. We open flows. Create a new flow. Click on data grow trigger flow. Now select the object. So we had created the DMO as predicted NBC. Uh I want to create the flow whenever a record is created or updated. I\'ll select all conditions are met. Let me close this fields. I\'ll select as does not equal null because I don\'t want to include where the primary key is null. Now once this is done I have to create a loop where the records back to four. So I\'ll just create the label as test. Specify the conditions. I\'ll select the code entity into which I want to write the data which is territory account score. Now I\'ll be mapping the account ID of territory account score with the primary object of the output. And then I\'ll select the field which I want to update. I want to update the next best score of credit account score with the next best score which is just calculated. That\'s it. Once this is done, you click on save and activate your flow builder and uh your uh text score will be updated uh in this field. Let me just go and show what is the entity where the next best score will be updated. It\'s a territory account score. Your next score will be updated here. Now we can have various kinds of agent force use cases on top of this and we can use this in various kind of LWC component to reflect the next best customer.
